<template><div><Toc /><h1 id="redis的持久化" tabindex="-1"><a class="header-anchor" href="#redis的持久化"><span>Redis的持久化</span></a></h1>
<p>    作为了一个内存数据库，如果服务器一旦宕机，可能会导致所有redis数据丢失，为了防止这种情况的发生，redis提供了两种持久化的方式，分别是<strong>AOF</strong>和<strong>RDB</strong></p>
<blockquote>
<p>有一种说话：反正是缓存，其实可以直接从数据库的进行恢复
确实可以这样，但是这样会增加源数据库的压力，并且也没有从内存中获取数据来的快</p>
</blockquote>
<h2 id="aof" tabindex="-1"><a class="header-anchor" href="#aof"><span>AOF</span></a></h2>
<p>AOF日志：它是一种写后日志。即：Redis先执行命令把数据写入内存，再记录日志。这样杜绝了以下几个问题。
  1、防止AOF日志记录错误命令的日志，命令执行失败后是不会记录日志的
  2、命令执行后再记录日志，不会阻塞当前的写操作。
<strong>存在的风险：</strong>
1、写入操作后，日志还没来的及写入服务器就宕机了会导致该条数据丢失。2、AOF虽然避免了当前阻塞当前命令的执行，但是AOF日志是在主线程中执行的，如果AOF写入压力大会阻塞后续的操作。
这两个风险其实都和AOF日志写回磁盘的时机又关，因此AOF机制提供了适用于不同场景的三种写回策略。</p>
<h3 id="三种写回策略" tabindex="-1"><a class="header-anchor" href="#三种写回策略"><span>三种写回策略</span></a></h3>
<ol>
<li><strong>Always</strong>：同步写回，每个写命令执行完，立马同步的将日志写入磁盘</li>
<li><strong>Everyser</strong>: 每秒写回，每个写命令执行完后，先把写日志写到AOF文件的内存缓冲中，每隔一秒钟写入磁盘</li>
<li><strong>NO</strong>：操作系统控制写回，每个写命令执行完后，写吧日志写到AOF文件的内存缓冲中，何时写入磁盘由操作系统决定。</li>
</ol>
<h3 id="aof日志的重写机制" tabindex="-1"><a class="header-anchor" href="#aof日志的重写机制"><span>AOF日志的重写机制</span></a></h3>
<p>理论上是每次写命令都会生成一条AOF日志，随着时间的推移，AOF日志会越来越大，如果还是用它作为故障恢复的手段，整个恢复就会非常的缓慢，这就产生一个新的机制：重写机制</p>
<p>重写机制其实就是将原本的AOF日志进行多变一，多是指原日志，一个key可能被多次操作，会有多次日志，重写后会只有一条日志，只记录当前状态的key-value。</p>
<h4 id="aof重写会阻塞吗" tabindex="-1"><a class="header-anchor" href="#aof重写会阻塞吗"><span>AOF重写会阻塞吗？</span></a></h4>
<p>AOF日志IDE写回是使用的主线程，但是重写过程是由后台子进程bgrewriteaof 来完成的，这样就避免了主线程阻塞。
重写的过程：<code v-pre>一个拷贝，两处日志</code></p>
<h3 id="触发aof重写的时机" tabindex="-1"><a class="header-anchor" href="#触发aof重写的时机"><span>触发AOF重写的时机</span></a></h3>
<ol>
<li>auto-aof-rewrite-min-size: 表示运行AOF重写时文件的最小大小，默认为64MB</li>
<li>auto-aof-rewrite-percentage: 这个值的计算方法是：当前AOF文件大小和上一次重写后AOF文件大小的差值，再除以上一次重写后AOF文件大小。也就是当前AOF文件比上一次重写后AOF文件的增量大小，和上一次重写后AOF文件大小的比值。</li>
<li>手动发送“bgrewriteaof”指令，通过子进程生成更小体积的aof，然后替换掉旧的、大体量的aof文件。</li>
</ol>
<h2 id="内存快照-rdb-redis-database" tabindex="-1"><a class="header-anchor" href="#内存快照-rdb-redis-database"><span>内存快照 RDB（Redis DataBase）</span></a></h2>
<p>所谓内存快照，就是指内存中的数据在某一时刻的状态记录。</p>
<h3 id="给那些数据做内存快照" tabindex="-1"><a class="header-anchor" href="#给那些数据做内存快照"><span>给那些数据做内存快照</span></a></h3>
<p>Reids的数据都在内存中，为了提供所有数据的可靠性保证，它执行的全量快照，也就是内存中的所有数据都记录导磁盘中。</p>
<p>redis提供了两个命令来生成RDB文件，分别是<code v-pre>save</code>和<code v-pre>bgsave</code></p>
<ol>
<li>save：在主线程中执行，会导致阻塞</li>
<li>bgsave：由主线程fork出一个子进程，专门用于写RDB文件，避免了主线程的阻塞，也是Redis RDB文件生成的默认配置。</li>
</ol>
<h3 id="快照时数据能修改吗" tabindex="-1"><a class="header-anchor" href="#快照时数据能修改吗"><span>快照时数据能修改吗？</span></a></h3>
<p>能。Redis在执行快照的时候，会借助操作系统的提供的写时复制技术<code v-pre>（Copy-On-Write, COW）</code>。
示例：在进行快照的时候，有一个键值对A，此时主线程想修改A，此时，A会被复制一份，生成该数据的副本A’,然后主线程在这个数据副本上进行修改。同时 bgsave 子进程可以继续把原来的数据 即A写入RDB文件。</p>
<h3 id="可以每秒做一次快照吗" tabindex="-1"><a class="header-anchor" href="#可以每秒做一次快照吗"><span>可以每秒做一次快照吗？</span></a></h3>
<p>最好不要。其一、如果频繁的执行全量快照，会导致磁盘压力激增，因为频繁快照会频繁的将内存中全量的数据写入磁盘。可能会导致上一次快照还没结束下一次快照又开始了，是一个恶性循坏。
其二、bgsave子进程是由主线程中fork出来的，虽然子进程在创建后不会导致主线程阻塞，但是fork子进程这个过程会导致主线程的阻塞。如果频繁的fork bgsave子进程就会阻塞主线程了。（redis中如果已经拥有一个basave子进程了就不会再启动一个bgsave子进程）</p>
<h2 id="redis推荐的持久化方式" tabindex="-1"><a class="header-anchor" href="#redis推荐的持久化方式"><span>Redis推荐的持久化方式</span></a></h2>
<p>Redis4.0中提出了 <strong>混合使用AOF日志和内存快照</strong>的方法。</p>
</div></template>


