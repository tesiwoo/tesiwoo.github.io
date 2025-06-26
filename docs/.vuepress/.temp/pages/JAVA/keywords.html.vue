<template><div><h1 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof"><span>instanceof</span></a></h1>
<p><strong>instanceof是一个位运算符（二目运算符）</strong></p>
<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法：</span></a></h2>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">boolean</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> obj </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">instanceof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> class</span></span></code></pre>
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
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (obj </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        T</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> temp </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (T)obj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">ClassCastException</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现逻辑" tabindex="-1"><a class="header-anchor" href="#实现逻辑"><span>实现逻辑：</span></a></h2>
<ul>
<li>看这个<a href="https://www.zhihu.com/question/21574535" target="_blank" rel="noopener noreferrer">大佬</a>的吧  简直牛逼吼吼</li>
</ul>
</div></template>


