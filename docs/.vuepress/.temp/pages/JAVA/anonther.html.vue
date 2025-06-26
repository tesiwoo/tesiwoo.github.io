<template><div><blockquote>
<h1 id="位操作-、-、-、-、-、" tabindex="-1"><a class="header-anchor" href="#位操作-、-、-、-、-、"><span>位操作 &amp;、|、~、^、&gt;&gt;、&gt;&gt;&gt;</span></a></h1>
<p>&amp;运算：按位与运算，a&amp;b 的操作的结果：a、b中对应位同时为1，则对应结果位也为1。</p>
<p>​			如：1001010101</p>
<p>​				 &amp;1110101010</p>
<hr>
<p>​					1000000000</p>
<p><strong>由于位运算直接对内存数据进行操作，不需要转成十进制，因此处理速度非常快</strong>。</p>
<p>常用操作：</p>
<p>​	判断整数：a &amp; ~((1&lt;&lt; 16)-1)   <strong>（后面的常数在编译期就算好了）</strong></p>
<p>​	判断奇偶： a &amp; 1   （二进制位数为0为基数，为1就是偶数）</p>
<p>​	判断n是否是2的正整数冪：<strong>(!(n&amp;(n-1)) )&amp;&amp; n</strong>    （如果为2的次幂，二进制必为1000......）</p>
<p>^运算：异或操作，相同为0，不同为1</p>
<p>​		   如：10010</p>
<p>​				 ^10011</p>
<hr>
<p>​				   00001</p>
<p>按位或|：</p>
<p>有1则为1，没1则为0</p>
<p>按位非^:</p>
<p>取反操作</p>
<h6 id="运算" tabindex="-1"><a class="header-anchor" href="#运算"><span>&gt;&gt;运算:</span></a></h6>
<p>​	为带符号右移</p>
<h6 id="运算-1" tabindex="-1"><a class="header-anchor" href="#运算-1"><span>&gt;&gt;&gt;运算：</span></a></h6>
<p>​	不带符号右移</p>
</blockquote>
</div></template>


