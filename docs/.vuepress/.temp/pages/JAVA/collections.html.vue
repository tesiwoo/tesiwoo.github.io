<template><div><nav class="table-of-contents"><ul><li><router-link to="#常用方法">常用方法</router-link></li><li><router-link to="#collections">Collections</router-link><ul><li><router-link to="#排序操作">排序操作</router-link></li><li><router-link to="#查找替换操作">查找替换操作</router-link></li><li><router-link to="#同步控制">同步控制</router-link></li></ul></li><li><router-link to="#arrays类的常见操作">Arrays类的常见操作</router-link></li></ul></nav>
<h1 id="collection-所有集合类的接口" tabindex="-1"><a class="header-anchor" href="#collection-所有集合类的接口"><span>Collection （所有集合类的接口）</span></a></h1>
<p>List和Set都继承它，操作集合的方法大部分在该接口中定义了</p>
<p><img src="@source/../resource/images/image-20200719112532755.png" alt="image-20200719112532755"></p>
<p><img src="@source/../resource/images/image-20200719112544436.png" alt="image-20200719112544436"></p>
<h1 id="collections-操作集合的工具类" tabindex="-1"><a class="header-anchor" href="#collections-操作集合的工具类"><span>Collections （操作集合的工具类）</span></a></h1>
<h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法"><span>常用方法</span></a></h2>
<p><strong>排序</strong></p>
<blockquote>
<p>void reverse(List list)	//反转</p>
<p>void shuffle(List list)     //随机排序</p>
<p>void sort(List list)			//按自然排序升序排列</p>
<p>void sort(List list, Comparator c)			//定制排序，由Comparator控制排序逻辑</p>
<p>void swap(List list, int i, int j)					//交换两个索引位置的元素</p>
<p>void rotate(List list, int distance)				//旋转。当distance为正数时，将list后distance个元素整体移到前面。当distance为负数时，将 list的前distance个元素整体移到后面。</p>
</blockquote>
<h1 id="collections工具类和arrays工具类的常用方法" tabindex="-1"><a class="header-anchor" href="#collections工具类和arrays工具类的常用方法"><span>Collections工具类和Arrays工具类的常用方法</span></a></h1>
<h2 id="collections" tabindex="-1"><a class="header-anchor" href="#collections"><span>Collections</span></a></h2>
<h3 id="排序操作" tabindex="-1"><a class="header-anchor" href="#排序操作"><span>排序操作</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span><span class="token comment">//反转			就是倒过来</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">shuffle</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span><span class="token comment">//随机排序</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span><span class="token comment">//按自然排序的升序排序</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Comparator</span> c<span class="token punctuation">)</span><span class="token comment">//定制排序，由Comparator控制排序逻辑		</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token keyword">int</span> i <span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token comment">//交换两个索引位置的元素</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token keyword">int</span> distance<span class="token punctuation">)</span><span class="token comment">//旋转。当distance为正数时，将list后distance个元素整体移到前面。当distance为负数时，将 list的前distance个元素整体移到后面。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找替换操作" tabindex="-1"><a class="header-anchor" href="#查找替换操作"><span>查找替换操作</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">//对List进行二分查找，返回索引，注意List必须是有序的</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Object</span> key<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//根据元素的自然顺序，返回最大的元素。 类比int min(Collection coll)</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> coll<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//根据定制排序，返回最大元素，排序规则由Comparatator类控制。类比int min(Collection coll, Comparator c)</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> coll<span class="token punctuation">,</span> <span class="token class-name">Comparator</span> c<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//用指定的元素代替指定list中的所有元素。</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">fill</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Object</span> obj<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//统计元素出现次数</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">frequency</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> c<span class="token punctuation">,</span> <span class="token class-name">Object</span> o<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//统计target在list中第一次出现的索引，找不到则返回-1，类比int lastIndexOfSubList(List source, list target).</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">indexOfSubList</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">List</span> target<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//用新元素替换旧元素</span></span>
<span class="line"><span class="token keyword">boolean</span> <span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Object</span> oldVal<span class="token punctuation">,</span> <span class="token class-name">Object</span> newVal<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步控制" tabindex="-1"><a class="header-anchor" href="#同步控制"><span>同步控制</span></a></h3>
<p>Collections提供了多个<code v-pre>synchronizedXxx()</code>方法·，该方法可以将指定集合包装成线程同步的集合，从而解决多线程并发访问集合时的线程安全问题。</p>
<p>我们知道 HashSet，TreeSet，ArrayList,LinkedList,HashMap,TreeMap 都是线程不安全的。Collections提供了多个静态方法可以把他们包装成线程同步的集合。</p>
<p><strong>最好不要用下面这些方法，效率非常低，需要线程安全的集合类型时请考虑使用 JUC 包下的并发集合。</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token function">synchronizedCollection</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span>  c<span class="token punctuation">)</span> <span class="token comment">//返回指定 collection 支持的同步（线程安全的）</span></span>
<span class="line">collection<span class="token punctuation">.</span><span class="token function">synchronizedList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span><span class="token comment">//返回指定列表支持的同步（线程安全的）</span></span>
<span class="line"><span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">synchronizedMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> m<span class="token punctuation">)</span> <span class="token comment">//返回由指定映射支持的同步（线程安全的）</span></span>
<span class="line"><span class="token class-name">Map</span><span class="token operator">/</span><span class="token function">synchronizedSet</span><span class="token punctuation">(</span><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> s<span class="token punctuation">)</span> <span class="token comment">//返回指定 set 支持的同步（线程安全的）set。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="arrays类的常见操作" tabindex="-1"><a class="header-anchor" href="#arrays类的常见操作"><span>Arrays类的常见操作</span></a></h2>
<ol>
<li>排序 : <code v-pre>sort()</code></li>
<li>查找 : <code v-pre>binarySearch()</code></li>
<li>比较: <code v-pre>equals()</code></li>
<li>填充 : <code v-pre>fill()</code></li>
<li>转列表: <code v-pre>asList()</code></li>
<li>转字符串 : <code v-pre>toString()</code></li>
<li>复制: <code v-pre>copyOf()</code></li>
</ol>
</div></template>


