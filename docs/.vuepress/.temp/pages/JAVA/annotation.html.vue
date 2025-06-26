<template><div><h1 id="注解" tabindex="-1"><a class="header-anchor" href="#注解"><span>注解</span></a></h1>
<p>ps: 以前一直以为注解是个很高级的东西，为什么一个简单的<code v-pre>@XXX</code> 就可以实现那么多功能呢？如：@Data等</p>
<h2 id="什么是注解" tabindex="-1"><a class="header-anchor" href="#什么是注解"><span>什么是注解？</span></a></h2>
<p>JAVA注解也叫做JAVA标注，是jdk5.0后开始支持加入源代码的特殊语法元数据。</p>
<p>Java语言中的类、方法、变量、参数和包等都可以被标注。和Javadoc不同，Java标注可以通过反射获取注解内容。
在编译器生成类文件时，注解可以被嵌入到字节码中。Java虚拟机可以保留注解内容，在运行时可以获取到注解内容。</p>
<h2 id="java中的内置注解" tabindex="-1"><a class="header-anchor" href="#java中的内置注解"><span>JAVA中的内置注解</span></a></h2>
<ol>
<li>作用在方法的注解是</li>
</ol>
<p><strong>@Override</strong> - 检查该方法是否是重写方法。如果发现其父类，或者是引用的接口中并没有该方法时，会报编译错误。
<strong>@Deprecated</strong> - 标记过时方法。如果使用该方法，会报编译警告。
<strong>@SuppressWarnings</strong> - 指示编译器去忽略注解中声明的警告。</p>
<ol start="2">
<li>作用在其他注解的注解(或者说元注解)是:</li>
</ol>
<p><strong>@Retention</strong> - 标识这个注解怎么保存，是只在代码中，还是编入class文件中，或者是在运行时可以通过反射访问。
<strong>@Documented</strong> - 标记这些注解是否包含在用户文档中。
<strong>@Target</strong> - 标记这个注解应该是哪种 Java 成员。
<strong>@Inherited</strong> - 标记这个注解是继承于哪个注解类(默认 注解并没有继承于任何子类)</p>
<ol start="3">
<li>从 Java 7 开始，额外添加了 3 个注解:</li>
</ol>
<p><code v-pre>@SafeVarargs</code> - Java 7 开始支持，忽略任何使用参数为泛型变量的方法或构造函数调用产生的警告。
<code v-pre>@FunctionalInterface</code> - Java 8 开始支持，标识一个匿名函数或函数式接口。
<code v-pre>@Repeatable</code> - Java 8 开始支持，标识某注解可以在同一个声明上使用多次。</p>
<h3 id="元注解" tabindex="-1"><a class="header-anchor" href="#元注解"><span>元注解</span></a></h3>
<ol>
<li><strong>@Retention</strong></li>
</ol>
<p><code v-pre>@Retention</code> annotation指定标记注释的存储方式：</p>
<ul>
<li>RetentionPolicy.SOURCE - 标记的注释仅保留在源级别中，并由编译器忽略。</li>
<li>RetentionPolicy.CLASS - 标记的注释在编译时由编译器保留，但Java虚拟机（JVM）会忽略。</li>
<li>RetentionPolicy.RUNTIME - 标记的注释由JVM保留，因此运行时环境可以使用它。</li>
</ul>
<ol start="2">
<li><strong>@Documented</strong></li>
</ol>
<p><code v-pre>@Documented</code> 注释表明，无论何时使用指定的注释，都应使用Javadoc工具记录这些元素。（默认情况下，注释不包含在Javadoc中。）有关更多信息，请参阅 Javadoc工具页面。</p>
<ol start="3">
<li><strong>@Target</strong></li>
</ol>
<p>@Target 注释标记另一个注释，以限制可以应用注释的Java元素类型。目标注释指定以下元素类型之一作为其值</p>
<ul>
<li>ElementType.TYPE 可以应用于类的任何元素。</li>
<li>ElementType.FIELD 可以应用于字段或属性。</li>
<li>ElementType.METHOD 可以应用于方法级注释。</li>
<li>ElementType.PARAMETER 可以应用于方法的参数。</li>
<li>ElementType.CONSTRUCTOR 可以应用于构造函数。</li>
<li>ElementType.LOCAL_VARIABLE 可以应用于局部变量。</li>
<li>ElementType.ANNOTATION_TYPE 可以应用于注释类型。</li>
<li>ElementType.PACKAGE 可以应用于包声明。</li>
<li>ElementType.TYPE_PARAMETER</li>
<li>ElementType.TYPE_USE</li>
</ul>
<ol start="4">
<li><strong>@Inherited</strong></li>
</ol>
<p><code v-pre>@Inherited</code> 注释表明注释类型可以从超类继承。当用户查询注释类型并且该类没有此类型的注释时，将查询类的超类以获取注释类型（默认情况下不是这样）。此注释仅适用于类声明。</p>
<ol start="5">
<li><strong>@Repeatable</strong></li>
</ol>
<p>Repeatable Java SE 8中引入的，<code v-pre>@Repeatable</code>注释表明标记的注释可以多次应用于相同的声明或类型使用(即可以重复在同一个类、方法、属性等上使用)。</p>
<h2 id="自定义注解" tabindex="-1"><a class="header-anchor" href="#自定义注解"><span>自定义注解</span></a></h2>
<blockquote>
<p>直接上代码</p>
</blockquote>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@Documented</span></span>
<span class="line"><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">FieldName</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@FieldName</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"姓名"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@FieldName</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"年龄"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@FieldName</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"性别"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 忽略setter和getter以及构造方法</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 模拟oldData</span></span>
<span class="line">            <span class="token class-name">Student</span> oldData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"小明"</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token string">"男"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Student</span> newData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"大明"</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token string">"男"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>oldData<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>newData<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Student</span><span class="token punctuation">></span></span> aClass <span class="token operator">=</span> oldData<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token class-name">Field</span> name <span class="token operator">=</span> aClass<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">FieldName</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>oldData<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"->"</span> <span class="token operator">+</span> newData<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


