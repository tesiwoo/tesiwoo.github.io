---
title: 线程池
createTime: 2025/07/04 10:46:00
permalink: /JAVA/threadPool/
tags:
  - 注解
---
# 使用线程池实现多线程

## 为什么要使用线程池？

很多时候，我们使用多线程来执行任务的时候都是这样一个场景：每新建一个任务就对应地创建一个线程，而往往每个任务在很短的时间内就结束了，导致线程的创建和销毁频繁发生，这会降低系统的效率。线程池的应用便应运而生。

## JAVA线程池

### ThreadPoolExecutor

叫：**线程池任务执行器**

继承链：它 extends ThreadExcutorService，ThreadExcutorService implements ExecutorService，又 extends Executor

#### 重要的属性：

- corePoolSize：核心池尺寸。当池大小小于corePoolSize时，就新建线程来执行任务。当池大小等于corePoolSize时，就将任务放进workQueue阻塞队列。池子中的空闲线程去队列中获取任务来执行。

- maximumPoolSize:最大池尺寸，当队列已经满了，就新建线程入池来处理请求，但是线程数量不能超过最大池尺寸

- unit:s时间单位，用TimeUnit.DAYS、TimeUnit.HOURS、TimeUnit.MINUTES、TimeUnit.SECONDS、TimeUnit.MILLISECONDS、TimeUnit.MICROSECONDS、TimeUnit.NANOSECONDS。

- workQueue：阻塞队列，用来存储待执行的任务。声明类型为BlockingQueue\<Runnable\>，有几种选择：

  | ArrayBlockingQueue    | 基于数组，先进先出，必须指定大小                             |
  | --------------------- | ------------------------------------------------------------ |
  | LinkedBlockingQueue   | 基于链表，先进先出，如未指定大小，则为Integer.MAX_VALUE      |
  | SynchronousQueue      | 没有尺寸的概念，不会保存提交的任务，而是将直接新建一个线程来执行新来的任务 |
  | PriorityBlockingQueue | 其存储的对象必须实现Comparable接口，队列根据compare接口方法确定任务的优先级 |

- threadFactory：线程工厂，用来创建线程。

- mainLock：线程池的主要状态锁，对线程池状态（比如线程池的大小，runstate等）的改变都要使用到这个锁

- wokers：用来存放工作集合，是一个HashSet\<Worker\>

- allowCoreThreadTimeOut;  是否允许为核心线程设置存活时间

- keepAliveTime:线程存活时间，决定当一个线程空闲了多长时间后被销毁。只有在线程池尺寸大于corePoolSize时才起作用。

- poolSize：线程池中的当前的线程数

- threadFactory：线程工厂，用来创建线程

- largestPoolSize：用来记录线程池中出现过的最大线程数

- comletedTaskCount：用来记录已经执行完毕的任务个数。

- handler，拒绝处理任务时的策略。

  - ThreadPoolExecutor.AbortPolicy:丢弃任务并抛出RejectedExecutionException异常。
  - ThreadPoolExecutor.DiscardPolicy：丢弃任务，不抛出异常。
  - ThreadPoolExecutor.DiscardOldestPolicy：丢弃队列最前面的任务，然后重新尝试执行任务（重复此过程）
  - ThreadPoolExecutor.CallerRunsPolicy：由调用线程处理该任务

#### 重要方法

- excute()：向线程池提交任务，交由线程池来执行
- submit()：同样是向线程池提交任务，其内部调用了execute()，区别是，会返回一个FutureTask实例
- shutdown()：等任务都执行完毕后关闭线程池，并且拒绝接受新的任务
- shutdownNow()：停止正在执行的任务，立刻关闭线程池，拒绝接受新的任务
- isTerminated()：检查线程池是否已关闭

## 线程池状态

在ThreadPoolExcutor中定义了一个volatilt状态runState，另外定义了几个static final变量表示线程池的各个状态

```java
// runState is stored in the high-order bits
private static final int RUNNING    = -1 << COUNT_BITS;//创建线程池后，初始时，线程池处于此状态
private static final int SHUTDOWN   =  0 << COUNT_BITS;//调用了shutDown()方法时，则线程处于此状态，此时线程池不能接收新的任务，它会等待所有任务执行完毕
private static final int STOP       =  1 << COUNT_BITS;//调用了shurDownNow()方法时，则线程处于此状态，此时线程池不再接受新的任务，并且会去尝试终止正在执行的任务。
private static final int TIDYING    =  2 << COUNT_BITS;//
private static final int TERMINATED =  3 << COUNT_BITS;//当线程处于SHOYDOWN或者STOP状态时，并且所有工作线程都已经销毁，任务缓存队列已经清空或执行结束后，线程池被设置为TERMINATED状态
```

runState表示当前线程池的状态，它是一个volatile变量用来保证线程之间的可见性。

## 任务的执行

- 如果当前线程池中的线程数目pooSize<corePoolSize，则每来一个任务，就会创建一个线程去执行这个任务；
- 如果当前线程池中的线程数目pooSize>=corePoolSize，则每来一个任务，会尝试将其添加到任务缓存队列当中，若添加成功，则该任务会等待空闲线程将其取出去执行；若添加失败（一般来说是任务缓存队列已满），则会尝试创建新的线程去执行这个任务；
- 如果当前线程池中的线程数目达到maximumPoolSize，则会采取任务拒绝策略进行处理；
- 如果线程池中的线程数量大于 corePoolSize时，如果某线程空闲时间超过keepAliveTime，线程将被终止，直至线程池中的线程数目不大于corePoolSize；如果允许为核心池中的线程设置存活时间，那么核心池中的线程空闲时间超过keepAliveTime，线程也会被终止。

## 线程池中的线程初始化

默认情况下，创建线程池之后线程池中是没有线程的，需要提交任务之后才会去创建线程。

在实际中如果需要线程池创建之后立即创建线程，可以通过以下两个办法办到：

- prestartCoreThread()：初始化一个核心线程
- prestartAllCoreThreads()：初始化所有核心线程

## 任务缓存队列及排队策略

workQueue用来存放等待执行的任务

workQueue的类型是BlockingQueue\<Runable\>，通常取以下三种类型：

　　1）ArrayBlockingQueue：基于数组的先进先出队列，此队列创建时必须指定大小；

　　2）LinkedBlockingQueue：基于链表的先进先出队列，如果创建时没有指定此队列大小，则默认为Integer.MAX_VALUE；

　　3）synchronousQueue：这个队列比较特殊，它不会保存提交的任务，而是将直接新建一个线程来执行新来的任务。

## 任务拒绝策略

当线程池的任务缓存队列已满且线程池中的线程数已达到maximumPoolSize，如果还有任务到来就会采取任务拒绝策略。通常有以下4中策略：

- ThreadPoolExecutor.AbortPolicy:丢弃任务并抛出RejectedExecutionException异常。
- ThreadPoolExecutor.DiscardPolicy：也是丢弃任务，但是不抛出异常。
- ThreadPoolExecutor.DiscardOldestPolicy：丢弃队列最前面的任务，然后重新尝试执行任务（重复此过程）
- ThreadPoolExecutor.CallerRunsPolicy：由调用线程处理该任务

## 线程池的关闭

线程池提供了两种关闭线程池的方法，分别是shutDown()和shutDownNow()：

- shutDown()：不会立即停止线程池，而是要等所有任务缓存队列中的任务都执行完毕之后才终止，但调用方法之后不会接受新的任务。
- shutDownNow()：立即停止线程池，并尝试打断正在执行的任务，并且清空任务缓存队列，并返回没有尚未执行的任务。

## 线程池容量的动态调整

TreadPoolSize提供了动态调整线程池容量大小的方法：setCorePoolSize()，setMaximumPoolSize()：

- setCorePoolSize()：设置核心池大小

- setMaxiMumPoolSize()：设置线程池最大能创建的线程池数目大小

　当上述参数从小变大时，ThreadPoolExecutor进行线程赋值，还可能立即创建新的线程来执行任务。

> JAVA Doc不推荐我们之间实例化ThreadPoolExcutor，而是使用它的三个静态方法：
>
> ```java
> Executors.newCachedThreadPool();    //创建一个缓冲池，缓冲池容量大小为Integer.MAX_VALUE
> Executors.newSingleThreadExecutor();  //创建容量为1的缓冲池
> Executors.newFixedThreadPool(int);  //创建固定容量大小的缓冲池
> ```
>
> 三个方法的实现其实只是帮我们配置好了其他的参数，具体实现如下：
>
> ```java
> public static ExecutorService newFixedThreadPool(int nThreads) {
> return new ThreadPoolExecutor(nThreads, nThreads,
>            0L, TimeUnit.MILLISECONDS,
>            new LinkedBlockingQueue());
> }
> public static ExecutorService newSingleThreadExecutor() {
> return new `FinalizableDelegatedExecutorService
> (new ThreadPoolExecutor(1, 1,
>           0L, TimeUnit.MILLISECONDS,
>           new LinkedBlockingQueue()));
> }
> public static ExecutorService newCachedThreadPool() {
> return new ThreadPoolExecutor(0, Integer.MAX_VALUE,
>            60L, TimeUnit.SECONDS,
>            new SynchronousQueue());
> }
> ```
>
> 

# 使用多线程的好处

《并发编程的艺术》一书中介绍说：

- **降低资源消耗。**通过重复利用已创建好的线程降低创建和销毁线程造成的消耗
- **提高响应速度。**当任务到达时，不用再去等待线程创建
- **提高线程的可管理性。**线程是稀缺资源，如果无限制的创建，不仅仅是消耗系统的资源，还会降低系统的稳定性，利用线程池可以统一的分配、调优和监控。线程池一般都提供了一些常量，如已执行了的任务，当前线程数等等

# Executor框架

Executor框架是在java5之后引入的，在java5之后，通过Executor来启动线程比使用Thread的start的方法更好，除了更容易管理，效率更好（用线程池实现，减少开销）外，还有更关键的一点：有助于避免this逃逸问题。

> this逃逸：指在构造函数返回之前其他线程就持有该对象的引用. 调用尚未构造完全的对象的方法可能引发令人疑惑的错误。

Executor 框架不仅包括了线程池的管理，还提供了线程工厂、队列以及拒绝策略等，Executor 框架让并发编程变得更加简单。

## Executor框架结构（主要由三大部分组成）

### 任务（Runable，Callable）

执行的任务需要实现Runable或者Callable接口。Runable接口或Callable接口的实现类可以被TreadPoolExecutor或ScheduledThreadPoolExecutor执行

### 任务执行（Executor）













