<template><div><h1 id="基于redis的消息队列" tabindex="-1"><a class="header-anchor" href="#基于redis的消息队列"><span>基于Redis的消息队列</span></a></h1>
<p>分布式系统使用消息队列的三大需求： 消息的有序性、重复消息的处理、消息可靠性保证。
对应三个要求即： 消息数据的有序存取、消息数据具有全局唯一标识、消息数据在消费完后被删除/可恢复</p>
<h2 id="基于list类型的消息队列" tabindex="-1"><a class="header-anchor" href="#基于list类型的消息队列"><span>基于List类型的消息队列</span></a></h2>
<p>List类型是一个天然的有序的数据类型，它有着FIFO的特性。 这句解决了消息的有序性一大需求。</p>
<p>对于重复消息的处理，可以人为的给消息加上一个唯一标识，消费者通过保存这个唯一标识并且判断是否处理过消息来保证重复消息的处理。</p>
<p>对于消息可靠的保证，Redis提供了BRPOPLPUSH 操作，即从List中读取数据的同时，会这个消息插入到另一个list中来作为消息备份。</p>
<p>消费端可以使用BRPOP命令，这个命令相比于RPOP命令来说，它是阻塞式的读取消息，当List中没数据的时候，它会在读取出等待消息的写入并读取，这大大的节省了消费者的CPU压力。</p>
<p><strong>存在问题：</strong>
如果消费端处理消息的速度慢生产者生产消息的速度，消息会在List中积压，从而给Redis造成存储压力。</p>
<h2 id="基于stream类型的消息队列" tabindex="-1"><a class="header-anchor" href="#基于stream类型的消息队列"><span>基于Stream类型的消息队列</span></a></h2>
</div></template>


