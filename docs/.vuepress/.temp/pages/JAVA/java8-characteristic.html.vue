<template><div><h1 id="java8新特性" tabindex="-1"><a class="header-anchor" href="#java8新特性"><span>java8新特性</span></a></h1>
<h2 id="lambda表达式" tabindex="-1"><a class="header-anchor" href="#lambda表达式"><span>lambda表达式</span></a></h2>
<p><strong>定义：<strong>Lambda 是一个匿名函数，我们可以把 Lambda表达式理解为是一段</strong>可以传递的代码</strong>（将代码像数据一样进行传递）。可以写出更简洁、更灵活的代码。作为一种更紧凑的代码风格，使Java的语言表达能力得到了提升。</p>
<p>**语法：**Lambda 表达式在Java 语言中引入了一个新的语法元素和操作符。这个操作符为 “-&gt;” ， 该操作符被称为 Lambda 操作符或剪头操作符。它将 Lambda 分为两个部分：</p>
<p>​				左侧：指定了 Lambda 表达式需要的所有参数
​				右侧：指定了 Lambda 体，即 Lambda 表达式要执行的功能。</p>
<p><strong>个人理解</strong>：将一个声明式函数接口写了，而且是用（）-&gt;（）的方式写，前者是入参，后者是方法体</p>
<p><strong>函数式接口：</strong></p>
<ul>
<li>只包含一个抽象方法的接口，称为函数式接口。</li>
<li>你可以通过 Lambda 表达式来创建该接口的对象。（若 Lambda表达式抛出一个受检异常，那么该异常需要在目标接口的抽象方法上进行声明）。</li>
<li>我们可以在任意函数式接口上使用 @FunctionalInterface 注解，这样做可以检查它是否是一个函数式接口，同时 javadoc 也会包含一条声明，说明这个接口是一个函数式接口。</li>
</ul>
<p><img src="@source/../resource/images/image-20200707115630687.png" alt="image-20200707115630687"></p>
<p><img src="@source/../resource/images/image-20200707115644870.png" alt="image-20200707115644870"></p>
<h2 id="方法引用和构造器引用" tabindex="-1"><a class="header-anchor" href="#方法引用和构造器引用"><span>方法引用和构造器引用</span></a></h2>
<p>当要传递给Lambda体的操作，已经有实现的方法了，可以使用方法引用！
（实现抽象方法的参数列表，必须与方法引用方法的参数列表保持一致！）
方法引用：使用操作符 “::” 将方法名和对象或类的名字分隔开来。
如下三种主要使用情况：</p>
<ul>
<li>对象::实例方法</li>
<li>类::静态方法</li>
<li>类::实例方法</li>
</ul>
<h2 id="强大的streamapi" tabindex="-1"><a class="header-anchor" href="#强大的streamapi"><span>强大的StreamAPI</span></a></h2>
<p><strong>个人理解</strong>：一种对集合的处理链式编程方式，获取集合的stream流，进行过滤，排序呀等一系列操作</p>
<blockquote>
<p>官方：Stream 是 Java8 中处理集合的关键抽象概念，它可以指定你希望对集合进行的操作，可以执行非常复杂的<strong>查找、过滤和映射数据</strong>等操作。使用Stream API 对集合数据进行操作，就类似于使用 SQL 执行的数据库查询。也可以使用 Stream API 来并行执行操作。简而言之，Stream API 提供了一种高效且易于使用的处理数据的方式。</p>
</blockquote>
<p>Stream是数据渠道，用于操作数据源（集合、数组等）所生成的元素序列。
“<strong>集合讲的是数据，流讲的是计算</strong>！”</p>
<p><strong>注意</strong>：</p>
<p>①Stream 自己不会存储元素。
②Stream 不会改变源对象。相反，他们会返回一个持有结果的新Stream。
③Stream 操作是延迟执行的。这意味着他们会等到需要结果的时候才执行。</p>
<p><strong>Stream操作的三个步骤：</strong></p>
<ol>
<li>创建Stream：如：list.stream()</li>
<li>中间操作：对Stream流进行数据处理</li>
<li>终止操作：产生结果</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">//例子所用数据</span></span>
<span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> users <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"张三"</span><span class="token punctuation">,</span><span class="token number">35</span><span class="token punctuation">,</span><span class="token number">15335</span><span class="token punctuation">,</span> <span class="token class-name">User<span class="token punctuation">.</span>Status</span><span class="token punctuation">.</span><span class="token constant">FREE</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">"李四"</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">97548</span><span class="token punctuation">,</span> <span class="token class-name">User<span class="token punctuation">.</span>Status</span><span class="token punctuation">.</span><span class="token constant">BUSY</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">"王五"</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">,</span><span class="token number">3555</span><span class="token punctuation">,</span><span class="token class-name">User<span class="token punctuation">.</span>Status</span><span class="token punctuation">.</span><span class="token constant">VOCATION</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">"王五"</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">,</span><span class="token number">3555</span><span class="token punctuation">,</span> <span class="token class-name">User<span class="token punctuation">.</span>Status</span><span class="token punctuation">.</span><span class="token constant">FREE</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">"赵六"</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">,</span><span class="token number">7852</span><span class="token punctuation">,</span> <span class="token class-name">User<span class="token punctuation">.</span>Status</span><span class="token punctuation">.</span><span class="token constant">VOCATION</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">//eg:</span></span>
<span class="line"><span class="token comment">//内部迭代：迭代操作有由Stream API 完成</span></span>
<span class="line"><span class="token annotation punctuation">@Test</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//创建流</span></span>
<span class="line">    <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> userStream <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>user <span class="token operator">-></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Stream 的中间操作"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//中间操作：不会执行任何操作</span></span>
<span class="line">            <span class="token keyword">return</span> user<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">35</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//终止操作：一次性执行全部内容，即“惰性求职”</span></span>
<span class="line">    userStream<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建stream流的两种方式：</strong></p>
<p>default Stream<E> stream() : 返回一个顺序流</p>
<p>default Stream<E> parallelStream() : 返回一个并行流</p>
<p>由数组创建流：Java8 中的 Arrays 的静态方法 stream()</p>
<p>由值创建流：可以使用静态方法 Stream.of(), 通过显示值创建一个流。它可以接收任意数量的参数。</p>
<p>由函数创建流：创建<strong>无限流</strong>：可以使用静态方法 Stream.iterate() 和Stream.generate(), 创建无限流。</p>
<p><strong>stream流的中间操作：</strong></p>
<p><img src="@source/../resource/images/image-20200707144949697.png" alt="image-20200707144949697"></p>
<blockquote>
<p>filter(PreDicate p)：传入一个断定性接口，返回true则留下。返回false则除去</p>
<p>distinct()：去除重复的元素，筛选， 通过流所生成的元素的hashCode() 和 equals() 去除重复元素。需要重写hashCode和equals方法</p>
</blockquote>
<p><img src="@source/../resource/images/image-20200707144958854.png" alt="image-20200707144958854"></p>
<blockquote>
<p>map(Function f)：函数式接口，入参变成出参新建一个stream流</p>
</blockquote>
<p><img src="@source/../resource/images/image-20200707145009756.png" alt="image-20200707145009756"></p>
<p><img src="@source/../resource/images/image-20200707145016864.png" alt="image-20200707145016864"></p>
<p><img src="@source/../resource/images/image-20200707145023669.png" alt="image-20200707145023669"></p>
<p><img src="@source/../resource/images/image-20200707145031854.png" alt="image-20200707145031854"></p>
<p><img src="@source/../resource/images/image-20200707145038047.png" alt="image-20200707145038047"></p>
<p><img src="@source/../resource/images/image-20200707145100057.png" alt="image-20200707145100057"></p>
<p><img src="@source/../resource/images/image-20200707145109259.png" alt="image-20200707145109259"></p>
<h2 id="optional类" tabindex="-1"><a class="header-anchor" href="#optional类"><span>Optional类</span></a></h2>
<blockquote>
<p>Optional类（java.util.Optional）是一个容器类，代表一个值存在不存在，原来用 null 表示一个值不存在，现在Optional 可以更好的表达这个概念。</p>
<p>并且可以避免空指针异常。</p>
</blockquote>
<p><strong>常用方法：</strong></p>
<ul>
<li>Optional.of(T t) ： 创建一个 Optional 实例。<strong>注意</strong>：入参不能为空，否则报空指针异常</li>
<li>Optional.empty() ： 创建一个空的 Optional 实例</li>
<li>Optional.ofNullable(T t) ：若 t 不为 null，创建 Optional实例，否则创建空实例</li>
<li>isPresent() ：判断是否包含值</li>
<li>orElse(I t) ：如果调用对象包含值，返回该值，否则返回t</li>
<li>orElseGet (Supplier s) ：如果调用对象包含值，返回该值，否则返回s获取的值</li>
<li>map (Function f) ：如果有值对其处理，并返回处理后的Optional,否则返回Optional. empty ()</li>
<li>flatMap (Function mapper) ：与map 类似，要求返回值必须是Optional</li>
</ul>
<h2 id="接口中的默认方法和静态方法" tabindex="-1"><a class="header-anchor" href="#接口中的默认方法和静态方法"><span>接口中的默认方法和静态方法</span></a></h2>
<blockquote>
<p>以前接口只能有全局静态常量和抽象方法</p>
<p>在java中允许拥有实现了的方法，成为默认方法，用<strong>default</strong>关键字修饰</p>
</blockquote>
<p><strong>接口默认方法的类优先原则</strong></p>
<blockquote>
<p>如果一个类继承了一个父类又实现了一个接口，且该父类和接口拥有相同方法名的方法，则优先使用父类的方法。</p>
<p><strong>注意</strong>：如果一个类多实现接口，且过个接口中拥有相同的默认方法，则该类必须实现默认方法，且明确是哪个接口中的。</p>
</blockquote>
<h2 id="新时间日期api" tabindex="-1"><a class="header-anchor" href="#新时间日期api"><span>新时间日期API</span></a></h2>
<p>以前的时间日期API不是线程安全的</p>
<h4 id="使用localdata-localtime-localdatatime" tabindex="-1"><a class="header-anchor" href="#使用localdata-localtime-localdatatime"><span>使用LocalData，LocalTime，LocalDataTime</span></a></h4>
<blockquote>
<p>LocalDate、LocalTime、LocalDateTime 类的实 例是不可变的对象，分别表示使用 ISO-8601日 历系统的日期、时间、日期和时间。它们提供了简单的日期或时间，并不包含当前的时间信息。也不包含与时区相关的信息。</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">now()</td>
<td style="text-align:center">静态方法，根据当前时间创建对象</td>
</tr>
<tr>
<td style="text-align:center">of()</td>
<td style="text-align:center">静态方法，根据指定日期/时间创建 对象</td>
</tr>
<tr>
<td style="text-align:center">plusDays, plusWeeks, <br />plusMonths, plusYear</td>
<td style="text-align:center">向当前 LocalDate 对象添加几天、 几周、几个月、几年</td>
</tr>
<tr>
<td style="text-align:center">minusDays, minusWeeks, <br />minusMonths, minusYears</td>
<td style="text-align:center">从当前 LocalDate 对象减去几天、 几周、几个月、几年</td>
</tr>
<tr>
<td style="text-align:center">plus, minus</td>
<td style="text-align:center">添加或减少一个 Duration或 Period</td>
</tr>
<tr>
<td style="text-align:center">withDayOfMonth, withDayOfYear,<br /> withMonth, withYea</td>
<td style="text-align:center">将月份天数、年份天数、月份、年 份修改为指定的值并返回新的 LocalDate对象</td>
</tr>
<tr>
<td style="text-align:center">getDayOfMonth，getDayOfYear，getDayOfWeek</td>
<td style="text-align:center">获得月份天数(1-31)，获得年份天数(1-366)，获得星期几(返回一个 DayOfWeek 枚举值)</td>
</tr>
<tr>
<td style="text-align:center">until</td>
<td style="text-align:center">获得两个日期之间的 Period 对象， 或者指定 ChronoUnits的数字</td>
</tr>
<tr>
<td style="text-align:center">isBefore, isAfter</td>
<td style="text-align:center">比较两个 LocalDate</td>
</tr>
<tr>
<td style="text-align:center">isLeapYear</td>
<td style="text-align:center">判断是否是闰年</td>
</tr>
</tbody>
</table>
<h4 id="instant时间戳" tabindex="-1"><a class="header-anchor" href="#instant时间戳"><span>Instant时间戳</span></a></h4>
<blockquote>
<p>用于“时间戳”的运算。它是以Unix元年(传统 的设定为UTC时区1970年1月1日午夜时分)开始 所经历的描述进行运算</p>
</blockquote>
<h4 id="duration-和-period" tabindex="-1"><a class="header-anchor" href="#duration-和-period"><span>Duration 和 Period</span></a></h4>
<ul>
<li>Duration:用于计算两个“时间”间隔</li>
<li>Period:用于计算两个“日期”间隔</li>
</ul>
<h4 id="日期的操作" tabindex="-1"><a class="header-anchor" href="#日期的操作"><span>日期的操作</span></a></h4>
<ul>
<li>
<p>TemporalAdjuster : 时间校正器。有时我们可能需要获取</p>
<ul>
<li>例如：将日期调整到“下个周日”等操作。</li>
</ul>
</li>
<li>
<p>TemporalAdjusters : 该类通过静态方法提供了大量的常用 TemporalAdjuster 的实现。</p>
<ul>
<li>例如获取下个周日：</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token class-name">LocalData</span> ld <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LocalData</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token class-name">TemporalAdjusters</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token class-name">DayaOfWeek</span><span class="token punctuation">.</span><span class="token constant">NEWX_SUNDAY</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h4 id="日期的格式化" tabindex="-1"><a class="header-anchor" href="#日期的格式化"><span>日期的格式化</span></a></h4>
<p>java.time.format.DateTimeFormatter 类：该类提供了三种格式化方法：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">DateTimeFormatter</span> dtf <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">LocalDateTime</span> ldt <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">String</span> format <span class="token operator">=</span> ldt<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>dtf<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="时区的处理" tabindex="-1"><a class="header-anchor" href="#时区的处理"><span>时区的处理</span></a></h4>
<blockquote>
<p>ava8 中加入了对时区的支持，带时区的时间为分别为：
ZonedDate、ZonedTime、ZonedDateTime
其中每个时区都对应着 ID，地区ID都为 “{区域}/{城市}”的格式
例如 ：Asia/Shanghai 等
ZoneId：该类中包含了所有的时区信息
getAvailableZoneIds() : 可以获取所有时区时区信息
of(id) : 用指定的时区信息获取 ZoneId 对象</p>
</blockquote>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"> <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> availableZoneIds <span class="token operator">=</span> <span class="token class-name">ZoneId</span><span class="token punctuation">.</span><span class="token function">getAvailableZoneIds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        availableZoneIds<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"==========================="</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">ZonedDateTime</span> of <span class="token operator">=</span> <span class="token class-name">ZonedDateTime</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">ZoneId</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">"Asia/Dhaka"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>of<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="与传统日期处理的转换" tabindex="-1"><a class="header-anchor" href="#与传统日期处理的转换"><span>与传统日期处理的转换</span></a></h4>
<p><img src="@source/../resource/images/image-20200707113747770.png" alt="image-20200707113747770"></p>
</div></template>


