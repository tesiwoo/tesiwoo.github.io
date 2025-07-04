---
title: base-five-type
createTime: 2025/07/04 18:05:52
permalink: /db/0e1ho439/
---


# Redis的五种基本数据类型



> 在了解Redis五种基本数据结构之前，我们首先要知道，Redis里所有的key都是字符串，下面所说的数据结构都是指Redis的值。



| 类型     | 底层数据结构      |
| -------- | ----------------- |
| String   | 动态字符串        |
| List     | 双向链表+压缩列表 |
| Set      | 哈希表+整数数组   |
| Sort Set | 哈希表+跳表       |
| Hash     | 压缩列表+字典     |



> 下面所有的 key,key1..... 表示是键；value1，value2......表示的是值



## String

### 简介

Key-String是Redis最基本的数据类型，也是最常用的数据类型。一个key对应一个value。

String类型是二进制安全的，也就是说，他可以保存任何数据。如数字、浮点、字符串、图片或序列化后的对象等。

### 常用命令

| 命令   | 操作                                   | 使用示例      |
| ------ | -------------------------------------- | ------------- |
| GET    | 获取指定键的值                         | GET key       |
| SET    | 设置指定键的值                         | SET key value |
| DEL    | 删除指定的键值对<br>（对所有类型通用） | DEL key       |
| INCR   | 指定键自增1                            | INCR key      |
| DECR   | 指定键自减1                            | DECR key      |
| INCRBY | 指定键自增一个整数n                    | INCRBY key n  |
| DECRBY | 指定键自减一个整数n                    | DECRBY key n  |

### 使用场景

- 缓存：使用缓存降低主存储数据库压力
- 计数器：利用Redis原子操作性实现计数器。
- 单点登录：Spring session + redis实现session共享

### 数据结构详解

String使用的是动态字符串SDS（simple dynamic String）的抽象类型。





## List





## Set



## Sort Set (ZSET)



## Hash

