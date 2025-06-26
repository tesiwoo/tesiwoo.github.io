<template><div><p>#AMQP是什么</p>
<blockquote>
<p>AMQP（高级消息队列协议）协议是一个网络协议。它支持符合要求的客户端应用和消息中间件代理之间进行通行</p>
</blockquote>
<h1 id="消息代理和他们所扮演的角色" tabindex="-1"><a class="header-anchor" href="#消息代理和他们所扮演的角色"><span>消息代理和他们所扮演的角色</span></a></h1>
<blockquote>
<p>消息代理从 发布者/生产者 哪儿接收消息，然后根据既定的路由规则把接收到的消息发送给
处理消息的消费者</p>
<p>由于AMQP是一个网络协议，所以这整个过程中的发布者、消费者、消费代理可以存在于不同的机器上</p>
</blockquote>
<h1 id="amqp协议是一个可编程的协议" tabindex="-1"><a class="header-anchor" href="#amqp协议是一个可编程的协议"><span>AMQP协议是一个可编程的协议</span></a></h1>
<blockquote>
<p>AMQP 0-9-1是一个可编程协议</p>
</blockquote>
<h1 id="交换机和交换机类型" tabindex="-1"><a class="header-anchor" href="#交换机和交换机类型"><span>交换机和交换机类型</span></a></h1>
<p>交换机是用来发送信息的AMQP实体。交换机拿到一个消息后会根据交换机类型和绑定规则发送给一个或多个队列。
AMQP 0-9-1 的代理提供了四种交换机：</p>
<table>
<thead>
<tr>
<th>Exchange Type（交换机类型）</th>
<th>默认名称</th>
</tr>
</thead>
<tbody>
<tr>
<td>Direct 直连交换机</td>
<td>amq.direct</td>
</tr>
<tr>
<td>Fanout 扇型交换机</td>
<td>amq.fanout</td>
</tr>
<tr>
<td>Topic  主题交换机</td>
<td>amq.topic</td>
</tr>
<tr>
<td>Header 头交换机</td>
<td>amq.header</td>
</tr>
</tbody>
</table>
<p>交换机有两个状态：</p>
<ul>
<li>持久（durable ）：在消息代理重启后依旧存在</li>
<li>暂存（transient）：消息代理重启后需要重新声明</li>
</ul>
<h1 id="队列" tabindex="-1"><a class="header-anchor" href="#队列"><span>队列</span></a></h1>
</div></template>


