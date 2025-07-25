---
title: RabbitMQ
createTime: 2025/07/04 18:06:41
permalink: /component/rabbitMq/
---
# 消息中间件简介

消息队列中间件是分布式系统中重要的组件，主要解决`应用耦合`，`异步消息`，`流量 削锋`等问题实现高性能，高可用，可伸缩和最终一致性[架构] 使用较多的消息队列有
`ActiveMQ`，`RabbitMQ`，ZeroMQ，`Kafka`，MetaMQ，RocketMQ

消息队列在实际应用中常用的使用场景：异步处理，应用解耦，流量削锋和消息通讯

- 异步处理

  > 比如注册、需要处理业务并且还需要发短信、发邮件验证

- 应用解耦

  > 比如发短信何发邮件都是由专门的项目或者微服务来操作,比封装成工具类耦合性要低

- 流量削锋

  >  比如现实生活中的漏斗、项目高峰期提高并发

  > 消息中间件应用场景：

    - 跨系统数据传递
    - 高并发的流量削峰
    - 数据的并发和异步处理
    - 大数据分析和传递
    - 分布式事务

  > 消息中间件核心组成部分

    - 消息的协议
    - 消息的持久化机制
    - 消息的分发机制
    - 消息的高可用、高可靠
    - 消息的容错机制

# 什么是RabbitMQ

RabbitMQ是Erlang语言开发的使用AMQP协议的开源消息中间件

> AMQP：Advanced Message Queue,高级消息队列协议，是应用层协议的一个开发标准，为面向消息的中间件设计，基于此协议的客户端与消息中间件可传递消息，并不受产品、开发语言的限制。

RabbitMQ最初起源于金融系统，用于在分布式系统中存储转发消息，在易用性、可扩展性、高可用性等方便表现不俗。具有特点：

- 可靠性

  > RabbitMQ使用一些机制来保证可靠性，如持久化、传输确认、发布确认等

- 灵活的路由

  > 在消息进入队列之前，通过 Exchange（交换机） 来路由消息的。对于典型的路由功能，RabbitMQ已经提供了一些内置的 Exchange 来实现。针对更复杂的路由功能，可以将多个Exchange 绑定在一起，也通过插件机制实现自己的 Exchange 。

- 消息集群

  > 多个 RabbitMQ 服务器可以组成一个集群，形成一个逻辑 Broker 。

- 高可用

  > 队列可以在集群中的机器上进行镜像，使得在部分节点出问题的情况下队列仍然可用。

- 多种协议

  > RabbitMQ 支持多种消息队列协议，比如 STOMP、MQTT 等等。

- 多语言客户端

  > RabbitMQ 几乎支持所有常用语言，比如 Java、.NET、Ruby 等等

- 管理界面

  > RabbitMQ 提供了一个易用的用户界面，使得用户可以监控和管理消息 Broker 的许多方面。

- 跟踪机制

  > 如果消息异常，RabbitMQ 提供了消息跟踪机制，使用者可以找出发生了什么。

- 插件机制

  > RabbitMQ 提供了许多插件，来从多方面进行扩展，也可以编写自己的插件。

# 主要概念

- **RabbitMQ Server**： 也叫broker server，它是一种传输服务。 他的角色就是维护一条从Producer到Consumer的路线，保证数据能够按照指定的方式进行传输。
- **Producer**： 消息生产者，如图A、B、C，数据的发送方。消息生产者连接RabbitMQ服务器然后将消息投递到Exchange。
- **Consumer**：消息消费者，如图1、2、3，数据的接收方。消息消费者订阅队列，RabbitMQ将Queue中的消息发送到消息消费者。
- **Exchange**：生产者将消息发送到Exchange（交换器），由Exchange将消息路由到一个或多个Queue中（或者丢弃）。Exchange并不存储消息。RabbitMQ中的Exchange有direct、fanout、topic、headers四种类型，每种类型对应不同的路由规则。
- **Queue**：（队列）是RabbitMQ的内部对象，用于存储消息。消息消费者就是通过订阅队列来获取消息的，RabbitMQ中的消息都只能存储在Queue中，生产者生产消息并最终投递到Queue中，消费者可以从Queue中获取消息并消费。多个消费者可以订阅同一个Queue，这时Queue中的消息会被平均分摊给多个消费者进行处理，而不是每个消费者都收到所有的消息并处理。
- **RoutingKey**：生产者在将消息发送给Exchange的时候，一般会指定一个routing key，来指定这个消息的路由规则，而这个routing key需要与Exchange Type及binding key联合使用才能最终生效。在Exchange Type与binding key固定的情况下（在正常使用时一般这些内容都是固定配置好的），我们的生产者就可以在发送消息给Exchange时，通过指定routing key来决定消息流向哪里。RabbitMQ为routing key设定的长度限制为255bytes。
- **Connection**： （连接）：Producer和Consumer都是通过TCP连接到RabbitMQ Server的。以后我们可以看到，程序的起始处就是建立这个TCP连接。
- **Channels**： （信道）：它建立在上述的TCP连接中。数据流动都是在Channel中进行的。也就是说，一般情况是程序起始建立TCP连接，第二步就是建立这个Channel。
- **VirtualHost**：权限控制的基本单位，一个VirtualHost里面有若干Exchange和MessageQueue，以及指定被哪些user使用





> 所谓协议是指：
>
> 1. 计算机底层操作系统和应用程序通讯时共同遵守的一组协议，只有遵循共同的约定和规范，系统和底层操作系统之间才可以互相交流
> 2. 和一般的网络应用程序的不同是它主要负责数据的接受何传递，所以性能比较高
> 3. 协议对数据格式和计算机之间交换数据都必须严格遵守规范





rabbitMQ使用的事AMQP协议

> 为什么消息中间件的协议不直接使用HTTP协议？
>
> 1. 因为http协议请求报文头和响应报文头是比较复杂的，包含了cookie，数据的加密解密、状态码、响应码等附加的功能，但是对于一个消息而言，并不需要这么复杂，也没有这个必要性，它就是负责数据传递、存储、分发就可以了，追求的高性能。
> 2. 大部分http协议都是短连接，在实际的交互过程中，一个请求到响应很有可能很快就中断了，中断以后不会进行持久化，这样就会导致数据的丢失。不符合消息中间件的业务场景，因为消息中间件可能是一个长期获取消息的过程，出现问题和故障的时候要对数据进行一个持久化的操作，目的是为了保证消息和数据的高可靠和高可用。



## 权限配置

> - 新增用户
    >
    >   > rabbitmqctl add_user 用户名 密码
>
> - 设置用户分配操作权限
    >
    >   > rabbitmqctl set_user_tags 用户名 权限级别
    >
    >   用户级别：
    >
    >   1. administrator：可以登录控制台，查看所有信息，可以对rabbitmq进行管理
>   2. monitoring：监控者，登录控制台，查看所有信息
>   3. policymaker：策略制定者，登录控制台，指定策略
>   4. managment：普通管理员，登录控制台
>
> - 为用户添加资源权限
    >
    >   > rabbitmqctl set_permissions -p / admin ".*"





# 消息分发模式

## fanout

将信息发送到所有绑定在该交换机的队列

## direct

将信息发送到绑定在该交换机并且routkey一样的队列上

## toppic

将信息发送到绑定在该交换机且routkey能模糊匹配上的队列上

> 匹配规则：
>
> #：0个或一个或多级 （可以没有）
>
> *：至少一定要有个（必须有）

## headers

有头信息，相当与加了判断条件的。

即将信息发送到绑定在该交换机上且满足判断条件的队列上。

## 分发机制

分发机制分为**轮询机制（Round Robin）**和**公平分发(Fair Dispatch)**

默认情况使用轮询机制，如果需要使用公平分发机制的话需要设置iso，且关闭自动ack，需要进行手动ack





#### ==使用@RabitListener注意事项==

当该注解注解在类上时，然后使用@RabbitHanlder注解在方法上，需要在启动类上加上@EnableRabbit启用该注解，否则会导致报错

不注解在类上可以直接注解在方法上比较方便







# TTL队列过期时间

过期时间TTL表示可以对消息设置一个预期被消费者消费的时间，在这个时间内没有被消费掉则会将该消息删除。





> 当一个消息在设置了过期时间的队列里且有单独的为该消息设置了过期时间，真正的过期时间以时间短的为准。







