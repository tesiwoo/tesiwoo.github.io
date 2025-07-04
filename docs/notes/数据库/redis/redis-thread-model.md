---
title: redis-thread-model
createTime: 2025/07/04 18:05:52
permalink: /db/ttu05u4j/
---
# Redis的线程模型

Redis基于Reactor模式开发了网络事件处理器，这个处理器被称之为文件事件处理器（file event handler）。
它的组成结构为4部分：多个套接字、IO多路复用程序、文件事件分派器、事件处理器。
因为文件事件分派器队列是单线程的，所以Redis才叫单线程模型。

> Reactor模式事件驱动的，具有一个或多个并发输入源，有一个Service Handler、多个Request Handler，这个Service Handler会同步的将输入的请求多路复用分发给对应的Request Handler。

- 文件事件处理器使用 I/O 多路复用（multiplexing）程序来同时监听多个套接字， 并根据套接字目前执行的任务来为套接字关联不同的事件处理器。
- 当被监听的套接字准备好执行连接应答（accept）、读取（read）、写入（write）、关闭（close）等操作时， 与操作相对应的文件事件就会产生， 这时文件事件处理器就会调用套接字之前关联好的事件处理器来处理这些事件。

虽然文件事件处理器以单线程方式运行，但通过使用 I/O 多路复用程序来监听多个套接字， 文件事件处理器既实现了高性能的网络通信模型，又可以很好地与redis服务器中其他同样以单线程方式运行的模块进行对接， 这保持了Redis内部单线程设计的简单性。

