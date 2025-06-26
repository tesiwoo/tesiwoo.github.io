<template><div><Toc /><h1 id="mysql的简易架构图" tabindex="-1"><a class="header-anchor" href="#mysql的简易架构图"><span>Mysql的简易架构图</span></a></h1>
<p><img src="@source/../resource/images/企业微信截图_16369608259919.png" alt="企业微信截图_16369608259919"></p>
<h1 id="范式" tabindex="-1"><a class="header-anchor" href="#范式"><span>范式</span></a></h1>
<p>关系型数据库中的关系是要满足一定要求的，满足不同程度要求的为不同范式（关系型数据中的每一张表是符合一范式）</p>
<p>第一范式：每个属性（字段）不可再分</p>
<p>存在问题：插入异常、删除异常、修改复杂、数据冗余</p>
<p>第二范式：每个属性都完全依赖于一个候选码</p>
<p>存在问题：删除异常、插入异常</p>
<p>第三范式：符合第二范式的前提且不存在传递依赖</p>
<p>存在问题：查询困难</p>
</div></template>


