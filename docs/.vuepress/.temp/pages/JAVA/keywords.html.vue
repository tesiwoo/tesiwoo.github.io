<template><div><h1 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof"><span>instanceof</span></a></h1>
<p><strong>instanceof是一个位运算符（二目运算符）</strong></p>
<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法：</span></a></h2>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">boolean</span> result <span class="token operator">=</span> obj <span class="token keyword">instanceof</span> <span class="token keyword">class</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中 obj是一个对象，class 代表一个类或者一个接口，返回boolean类型。返回true: 表示obj这个对象是class这个对象的直接子类或间接子类</p>
<h3 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点"><span>注意点：</span></a></h3>
<pre><code>- obj 不能为基本数据类型，会抛出 ClassCastException 异常
- obj 为null 的时候永远返回false
- obj 为引用类型的时候才会判断
</code></pre>
<h2 id="底层设计逻辑" tabindex="-1"><a class="header-anchor" href="#底层设计逻辑"><span>底层设计逻辑：</span></a></h2>
<pre><code>先判断 obj是否为null，为null返回false，然后强转obj为class对象不抛出异常即返回true否则为false
</code></pre>
<p>伪代码：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">T</span> temp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span>obj<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassCastException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现逻辑" tabindex="-1"><a class="header-anchor" href="#实现逻辑"><span>实现逻辑：</span></a></h2>
<ul>
<li>看这个<a href="https://www.zhihu.com/question/21574535" target="_blank" rel="noopener noreferrer">大佬</a>的吧  简直牛逼吼吼</li>
</ul>
</div></template>


