<template><div><h1 id="redis-的统计" tabindex="-1"><a class="header-anchor" href="#redis-的统计"><span>Redis 的统计</span></a></h1>
<h2 id="聚合统计" tabindex="-1"><a class="header-anchor" href="#聚合统计"><span>聚合统计</span></a></h2>
<p>即数据概念里的求差集、交集、并集
一般选择set类型</p>
<p>使用场景：系统新增用户、留存用户等</p>
<h3 id="set-操作" tabindex="-1"><a class="header-anchor" href="#set-操作"><span>Set 操作</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">SUNIONSTORE destination key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span>   //  所有key的值进行并集计算  即：存在 key<span class="token punctuation">..</span>. 中的值 全部存入destination 的key中</span>
<span class="line">SDIFFSTORE newKey key1 key2 //  key1 key2 差集计算 即 key1中存在但是key2中不存在的值存入newKey中</span>
<span class="line">SINTERSTORE newKey key1 key2 // key1 key2 的交集计算 即 即存在于key1中也存在与key2中的值存入newKey中</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>SADD key member1 [member2]
向集合添加一个或多个成员</li>
<li>SCARD key
获取集合的成员数</li>
<li>SDIFF key1 [key2]
返回第一个集合与其他集合之间的差异。</li>
<li>SDIFFSTORE destination key1 [key2]
返回给定所有集合的差集并存储在 destination 中</li>
<li>SINTER key1 [key2]
返回给定所有集合的交集</li>
<li>SINTERSTORE destination key1 [key2]
返回给定所有集合的交集并存储在 destination 中</li>
<li>SISMEMBER key member
判断 member 元素是否是集合 key 的成员</li>
<li>SMEMBERS key
返回集合中的所有成员</li>
<li>SMOVE source destination member
将 member 元素从 source 集合移动到 destination 集合</li>
<li>SPOP key
移除并返回集合中的一个随机元素</li>
<li>SRANDMEMBER key [count]
返回集合中一个或多个随机数</li>
<li>SREM key member1 [member2]
移除集合中一个或多个成员</li>
<li>SUNION key1 [key2]
返回所有给定集合的并集</li>
<li>SUNIONSTORE destination key1 [key2]
所有给定集合的并集存储在 destination 集合中</li>
<li>SSCAN key cursor [MATCH pattern] [COUNT count]
迭代集合中的元素</li>
</ol>
<h2 id="排序统计" tabindex="-1"><a class="header-anchor" href="#排序统计"><span>排序统计</span></a></h2>
<p>一般选择zset类型
使用场景：翻页</p>
<ol>
<li>ZADD key score1 member1 [score2 member2]
向有序集合添加一个或多个成员，或者更新已存在成员的分数</li>
<li>ZCARD key
获取有序集合的成员数</li>
<li>ZCOUNT key min max
计算在有序集合中指定区间分数的成员数</li>
<li>ZINCRBY key increment member
有序集合中对指定成员的分数加上增量 increment</li>
<li>ZINTERSTORE destination numkeys key [key ...]
计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 destination 中</li>
<li>ZLEXCOUNT key min max
在有序集合中计算指定字典区间内成员数量</li>
<li>ZRANGE key start stop [WITHSCORES]
通过索引区间返回有序集合指定区间内的成员</li>
<li>ZRANGEBYLEX key min max [LIMIT offset count]
通过字典区间返回有序集合的成员</li>
<li>ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT]
通过分数返回有序集合指定区间内的成员</li>
<li>ZRANK key member
返回有序集合中指定成员的索引</li>
<li>ZREM key member [member ...]
移除有序集合中的一个或多个成员</li>
<li>ZREMRANGEBYLEX key min max
移除有序集合中给定的字典区间的所有成员</li>
<li>ZREMRANGEBYRANK key start stop
移除有序集合中给定的排名区间的所有成员</li>
<li>ZREMRANGEBYSCORE key min max
移除有序集合中给定的分数区间的所有成员</li>
<li>ZREVRANGE key start stop [WITHSCORES]
返回有序集中指定区间内的成员，通过索引，分数从高到低</li>
<li>ZREVRANGEBYSCORE key max min [WITHSCORES]
返回有序集中指定分数区间内的成员，分数从高到低排序</li>
<li>ZREVRANK key member
返回有序集合中指定成员的排名，有序集成员按分数值递减(从大到小)排序</li>
<li>ZSCORE key member
返回有序集中，成员的分数值</li>
<li>ZUNIONSTORE destination numkeys key [key ...]
计算给定的一个或多个有序集的并集，并存储在新的 key 中</li>
<li>ZSCAN key cursor [MATCH pattern] [COUNT count]
迭代有序集合中的元素（包括元素成员和元素分值）</li>
</ol>
<h2 id="二值统计" tabindex="-1"><a class="header-anchor" href="#二值统计"><span>二值统计</span></a></h2>
<p>一般选择 BitMap类型</p>
<blockquote>
<p>Bitmap 提供了 GETBIT/SETBIT 操作，使用一个偏移值 offset 对 bit 数组的某一个 bit 位进行读和写。不过，需要注意的是，Bitmap 的偏移量是从 0 开始算的，也就是说 offset 的最小值是 0。当使用 SETBIT 对一个 bit 位进行写操作时，这个 bit 位会被设置为 1。Bitmap 还提供了 BITCOUNT 操作，用来统计这个 bit 数组中所有“1”的个数。</p>
</blockquote>
<h2 id="基数统计" tabindex="-1"><a class="header-anchor" href="#基数统计"><span>基数统计</span></a></h2>
<p>一般使用 HyperLoglog 类型 HyperLogLog是Redis 的拓展类型
具体见该类型详情</p>
<p><img src="@source/resource/images/企业微信截图_16396262445125.png" alt="企业微信截图_16396262445125"></p>
</div></template>


