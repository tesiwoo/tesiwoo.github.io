export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/db/redis/redis-exception.html", { loader: () => import(/* webpackChunkName: "db_redis_redis-exception.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/redis-exception.html.js"), meta: {"title":"Redis 的异常"} }],
  ["/db/redis/base-five-type.html", { loader: () => import(/* webpackChunkName: "db_redis_base-five-type.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/base-five-type.html.js"), meta: {"title":"Redis的五种基本数据类型"} }],
  ["/db/mysql/mysql-index.html", { loader: () => import(/* webpackChunkName: "db_mysql_mysql-index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/mysql/mysql-index.html.js"), meta: {"title":"创建索引的注意点"} }],
  ["/db/mysql/mysql-start.html", { loader: () => import(/* webpackChunkName: "db_mysql_mysql-start.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/mysql/mysql-start.html.js"), meta: {"title":"Mysql的简易架构图"} }],
  ["/db/mysql/storage-ngine.html", { loader: () => import(/* webpackChunkName: "db_mysql_storage-ngine.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/mysql/storage-ngine.html.js"), meta: {"title":"InnoDB和MyIsAM区别"} }],
  ["/concurrency/AQS.html", { loader: () => import(/* webpackChunkName: "concurrency_AQS.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/concurrency/AQS.html.js"), meta: {"title":""} }],
  ["/db/eleasticSearch.html", { loader: () => import(/* webpackChunkName: "db_eleasticSearch.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/eleasticSearch.html.js"), meta: {"title":"前言"} }],
  ["/concurrency/%E7%BA%BF%E7%A8%8B%E7%9A%84%E7%8A%B6%E6%80%81%E6%89%AD%E8%BD%AC.html", { loader: () => import(/* webpackChunkName: "concurrency_线程的状态扭转.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/concurrency/线程的状态扭转.html.js"), meta: {"title":"线程的状态"} }],
  ["/db/redis/HyperLogLog.html", { loader: () => import(/* webpackChunkName: "db_redis_HyperLogLog.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/HyperLogLog.html.js"), meta: {"title":"Redis 之HyperLogLog"} }],
  ["/db/redis/redis-param-config.html", { loader: () => import(/* webpackChunkName: "db_redis_redis-param-config.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/redis-param-config.html.js"), meta: {"title":"Redis配置参数"} }],
  ["/%E4%B8%AD%E9%97%B4%E4%BB%B6/RabbitMQ/RabbitMQ.html", { loader: () => import(/* webpackChunkName: "中间件_RabbitMQ_RabbitMQ.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/中间件/RabbitMQ/RabbitMQ.html.js"), meta: {"title":"消息中间件简介"} }],
  ["/interview/interview.html", { loader: () => import(/* webpackChunkName: "interview_interview.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/interview/interview.html.js"), meta: {"title":"面试题"} }],
  ["/db/redis/%E5%9F%BA%E4%BA%8ERedis%E7%9A%84mq.html", { loader: () => import(/* webpackChunkName: "db_redis_基于Redis的mq.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/基于Redis的mq.html.js"), meta: {"title":"基于Redis的消息队列"} }],
  ["/%E4%B8%AD%E9%97%B4%E4%BB%B6/RabbitMQ/Class0%EF%BC%9AAMQP%E5%8D%8F%E8%AE%AE.html", { loader: () => import(/* webpackChunkName: "中间件_RabbitMQ_Class0：AMQP协议.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/中间件/RabbitMQ/Class0：AMQP协议.html.js"), meta: {"title":"消息代理和他们所扮演的角色"} }],
  ["/db/redis/Redis%E7%9A%84%E7%BB%9F%E8%AE%A1.html", { loader: () => import(/* webpackChunkName: "db_redis_Redis的统计.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/Redis的统计.html.js"), meta: {"title":"Redis 的统计"} }],
  ["/db/redis/reids-sentinel-mechanism.html", { loader: () => import(/* webpackChunkName: "db_redis_reids-sentinel-mechanism.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/reids-sentinel-mechanism.html.js"), meta: {"title":"哨兵机制"} }],
  ["/db/redis/slice-cluster.html", { loader: () => import(/* webpackChunkName: "db_redis_slice-cluster.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/slice-cluster.html.js"), meta: {"title":"切片集群"} }],
  ["/db/redis/redis-persistence.html", { loader: () => import(/* webpackChunkName: "db_redis_redis-persistence.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/redis-persistence.html.js"), meta: {"title":"Redis的持久化"} }],
  ["/db/redis/redis-master-slave-sync.html", { loader: () => import(/* webpackChunkName: "db_redis_redis-master-slave-sync.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/redis-master-slave-sync.html.js"), meta: {"title":"Redis的高可靠性"} }],
  ["/db/redis/redis-thread-model.html", { loader: () => import(/* webpackChunkName: "db_redis_redis-thread-model.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/redis-thread-model.html.js"), meta: {"title":"Redis的线程模型"} }],
  ["/db/redis/redis-expire-time-memory-strategy.html", { loader: () => import(/* webpackChunkName: "db_redis_redis-expire-time-memory-strategy.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/redis-expire-time-memory-strategy.html.js"), meta: {"title":"Redis的删除策略"} }],
  ["/JAVA/java8-characteristic.html", { loader: () => import(/* webpackChunkName: "JAVA_java8-characteristic.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/java8-characteristic.html.js"), meta: {"title":"java8新特性"} }],
  ["/GIT/git.html", { loader: () => import(/* webpackChunkName: "GIT_git.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/GIT/git.html.js"), meta: {"title":"WHAT："} }],
  ["/interview/one.html", { loader: () => import(/* webpackChunkName: "interview_one.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/interview/one.html.js"), meta: {"title":"技术一面"} }],
  ["/JAVA/BNAIO.html", { loader: () => import(/* webpackChunkName: "JAVA_BNAIO.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/BNAIO.html.js"), meta: {"title":""} }],
  ["/GIT/useGit.html", { loader: () => import(/* webpackChunkName: "GIT_useGit.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/GIT/useGit.html.js"), meta: {"title":"GIT有关概念"} }],
  ["/JAVA/list.html", { loader: () => import(/* webpackChunkName: "JAVA_list.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/list.html.js"), meta: {"title":"List（列表）"} }],
  ["/JAVA/collections.html", { loader: () => import(/* webpackChunkName: "JAVA_collections.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/collections.html.js"), meta: {"title":"Collection （所有集合类的接口）"} }],
  ["/JAVA/keywords.html", { loader: () => import(/* webpackChunkName: "JAVA_keywords.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/keywords.html.js"), meta: {"title":"instanceof"} }],
  ["/JAVA/anonther.html", { loader: () => import(/* webpackChunkName: "JAVA_anonther.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/anonther.html.js"), meta: {"title":"位操作 &、|、~、^、>>、>>>"} }],
  ["/JAVA/annotation.html", { loader: () => import(/* webpackChunkName: "JAVA_annotation.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/annotation.html.js"), meta: {"title":"注解"} }],
  ["/JAVA/threadPool.html", { loader: () => import(/* webpackChunkName: "JAVA_threadPool.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/threadPool.html.js"), meta: {"title":"使用线程池实现多线程"} }],
  ["/JAVA/http-agreement.html", { loader: () => import(/* webpackChunkName: "JAVA_http-agreement.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/http-agreement.html.js"), meta: {"title":"HTTP协议"} }],
  ["/JAVA/JVM.html", { loader: () => import(/* webpackChunkName: "JAVA_JVM.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/JVM.html.js"), meta: {"title":"JVM理解"} }],
  ["/Linux/linuxUse.html", { loader: () => import(/* webpackChunkName: "Linux_linuxUse.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/Linux/linuxUse.html.js"), meta: {"title":"概述"} }],
  ["/JAVA/map.html", { loader: () => import(/* webpackChunkName: "JAVA_map.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/map.html.js"), meta: {"title":"Map（存储键值对，键唯一）"} }],
  ["/JAVA/serialize.html", { loader: () => import(/* webpackChunkName: "JAVA_serialize.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/serialize.html.js"), meta: {"title":"序列化"} }],
  ["/Linux/VMWare.html", { loader: () => import(/* webpackChunkName: "Linux_VMWare.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/Linux/VMWare.html.js"), meta: {"title":"连接网络的三种方式"} }],
  ["/JAVA/UML.html", { loader: () => import(/* webpackChunkName: "JAVA_UML.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/UML.html.js"), meta: {"title":"UML 介绍"} }],
  ["/JAVA/set.html", { loader: () => import(/* webpackChunkName: "JAVA_set.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/set.html.js"), meta: {"title":"Set"} }],
  ["/JAVA/Queue.html", { loader: () => import(/* webpackChunkName: "JAVA_Queue.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/Queue.html.js"), meta: {"title":"JAVA-队列（Queue）"} }],
  ["/Linux/whatLinux.html", { loader: () => import(/* webpackChunkName: "Linux_whatLinux.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/Linux/whatLinux.html.js"), meta: {"title":"Linux是个啥？"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
