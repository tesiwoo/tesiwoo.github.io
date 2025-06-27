export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"特拾伍的博客","icon":"home"} }],
  ["/blog/test.html", { loader: () => import(/* webpackChunkName: "blog_test.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/blog/test.html.js"), meta: {"title":"测试文章"} }],
  ["/concurrency/AQS.html", { loader: () => import(/* webpackChunkName: "concurrency_AQS.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/concurrency/AQS.html.js"), meta: {"title":""} }],
  ["/concurrency/%E7%BA%BF%E7%A8%8B%E7%9A%84%E7%8A%B6%E6%80%81%E6%89%AD%E8%BD%AC.html", { loader: () => import(/* webpackChunkName: "concurrency_线程的状态扭转.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/concurrency/线程的状态扭转.html.js"), meta: {"title":"线程的状态"} }],
  ["/db/eleasticSearch.html", { loader: () => import(/* webpackChunkName: "db_eleasticSearch.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/eleasticSearch.html.js"), meta: {"title":"前言"} }],
  ["/GIT/git.html", { loader: () => import(/* webpackChunkName: "GIT_git.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/GIT/git.html.js"), meta: {"title":"WHAT："} }],
  ["/GIT/useGit.html", { loader: () => import(/* webpackChunkName: "GIT_useGit.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/GIT/useGit.html.js"), meta: {"title":"GIT有关概念"} }],
  ["/interview/interview.html", { loader: () => import(/* webpackChunkName: "interview_interview.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/interview/interview.html.js"), meta: {"title":"面试题"} }],
  ["/interview/one.html", { loader: () => import(/* webpackChunkName: "interview_one.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/interview/one.html.js"), meta: {"title":"技术一面"} }],
  ["/Linux/linuxUse.html", { loader: () => import(/* webpackChunkName: "Linux_linuxUse.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/Linux/linuxUse.html.js"), meta: {"title":"概述"} }],
  ["/Linux/whatLinux.html", { loader: () => import(/* webpackChunkName: "Linux_whatLinux.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/Linux/whatLinux.html.js"), meta: {"title":"Linux是个啥？"} }],
  ["/db/mysql/mysql-index.html", { loader: () => import(/* webpackChunkName: "db_mysql_mysql-index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/mysql/mysql-index.html.js"), meta: {"title":"创建索引的注意点"} }],
  ["/db/mysql/mysql-start.html", { loader: () => import(/* webpackChunkName: "db_mysql_mysql-start.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/mysql/mysql-start.html.js"), meta: {"title":"Mysql的简易架构图"} }],
  ["/db/mysql/storage-ngine.html", { loader: () => import(/* webpackChunkName: "db_mysql_storage-ngine.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/mysql/storage-ngine.html.js"), meta: {"title":"InnoDB和MyIsAM区别"} }],
  ["/db/redis/base-five-type.html", { loader: () => import(/* webpackChunkName: "db_redis_base-five-type.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/base-five-type.html.js"), meta: {"title":"Redis的五种基本数据类型"} }],
  ["/db/redis/HyperLogLog.html", { loader: () => import(/* webpackChunkName: "db_redis_HyperLogLog.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/HyperLogLog.html.js"), meta: {"title":"Redis 之HyperLogLog"} }],
  ["/db/redis/redis-exception.html", { loader: () => import(/* webpackChunkName: "db_redis_redis-exception.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/redis-exception.html.js"), meta: {"title":"Redis 的异常"} }],
  ["/db/redis/redis-expire-time-memory-strategy.html", { loader: () => import(/* webpackChunkName: "db_redis_redis-expire-time-memory-strategy.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/redis-expire-time-memory-strategy.html.js"), meta: {"title":"Redis的删除策略"} }],
  ["/db/redis/redis-master-slave-sync.html", { loader: () => import(/* webpackChunkName: "db_redis_redis-master-slave-sync.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/redis-master-slave-sync.html.js"), meta: {"title":"Redis的高可靠性"} }],
  ["/db/redis/redis-param-config.html", { loader: () => import(/* webpackChunkName: "db_redis_redis-param-config.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/redis-param-config.html.js"), meta: {"title":"Redis配置参数"} }],
  ["/db/redis/redis-persistence.html", { loader: () => import(/* webpackChunkName: "db_redis_redis-persistence.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/redis-persistence.html.js"), meta: {"title":"Redis的持久化"} }],
  ["/db/redis/redis-thread-model.html", { loader: () => import(/* webpackChunkName: "db_redis_redis-thread-model.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/redis-thread-model.html.js"), meta: {"title":"Redis的线程模型"} }],
  ["/db/redis/Redis%E7%9A%84%E7%BB%9F%E8%AE%A1.html", { loader: () => import(/* webpackChunkName: "db_redis_Redis的统计.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/Redis的统计.html.js"), meta: {"title":"Redis 的统计"} }],
  ["/db/redis/reids-sentinel-mechanism.html", { loader: () => import(/* webpackChunkName: "db_redis_reids-sentinel-mechanism.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/reids-sentinel-mechanism.html.js"), meta: {"title":"哨兵机制"} }],
  ["/db/redis/slice-cluster.html", { loader: () => import(/* webpackChunkName: "db_redis_slice-cluster.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/slice-cluster.html.js"), meta: {"title":"切片集群"} }],
  ["/db/redis/%E5%9F%BA%E4%BA%8ERedis%E7%9A%84mq.html", { loader: () => import(/* webpackChunkName: "db_redis_基于Redis的mq.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/基于Redis的mq.html.js"), meta: {"title":"基于Redis的消息队列"} }],
  ["/JAVA/base/annotation.html", { loader: () => import(/* webpackChunkName: "JAVA_base_annotation.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/base/annotation.html.js"), meta: {"title":"注解"} }],
  ["/JAVA/base/anonther.html", { loader: () => import(/* webpackChunkName: "JAVA_base_anonther.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/base/anonther.html.js"), meta: {"title":"位操作 &、|、~、^、>>、>>>"} }],
  ["/JAVA/base/http-agreement.html", { loader: () => import(/* webpackChunkName: "JAVA_base_http-agreement.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/base/http-agreement.html.js"), meta: {"title":"HTTP协议"} }],
  ["/JAVA/base/keywords.html", { loader: () => import(/* webpackChunkName: "JAVA_base_keywords.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/base/keywords.html.js"), meta: {"title":"instanceof"} }],
  ["/JAVA/base/serialize.html", { loader: () => import(/* webpackChunkName: "JAVA_base_serialize.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/base/serialize.html.js"), meta: {"title":"序列化"} }],
  ["/JAVA/base/UML.html", { loader: () => import(/* webpackChunkName: "JAVA_base_UML.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/base/UML.html.js"), meta: {"title":"UML 介绍"} }],
  ["/JAVA/collection/collections.html", { loader: () => import(/* webpackChunkName: "JAVA_collection_collections.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/collection/collections.html.js"), meta: {"title":"Collection （所有集合类的接口）"} }],
  ["/JAVA/collection/list.html", { loader: () => import(/* webpackChunkName: "JAVA_collection_list.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/collection/list.html.js"), meta: {"title":"List（列表）"} }],
  ["/JAVA/collection/map.html", { loader: () => import(/* webpackChunkName: "JAVA_collection_map.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/collection/map.html.js"), meta: {"title":"Map（存储键值对，键唯一）"} }],
  ["/JAVA/collection/Queue.html", { loader: () => import(/* webpackChunkName: "JAVA_collection_Queue.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/collection/Queue.html.js"), meta: {"title":"JAVA-队列（Queue）"} }],
  ["/JAVA/collection/set.html", { loader: () => import(/* webpackChunkName: "JAVA_collection_set.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/collection/set.html.js"), meta: {"title":"Set"} }],
  ["/JAVA/concurrent/BNAIO.html", { loader: () => import(/* webpackChunkName: "JAVA_concurrent_BNAIO.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/concurrent/BNAIO.html.js"), meta: {"title":""} }],
  ["/JAVA/concurrent/threadPool.html", { loader: () => import(/* webpackChunkName: "JAVA_concurrent_threadPool.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/concurrent/threadPool.html.js"), meta: {"title":"使用线程池实现多线程"} }],
  ["/JAVA/JVM/JVM.html", { loader: () => import(/* webpackChunkName: "JAVA_JVM_JVM.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/JVM/JVM.html.js"), meta: {"title":"JVM理解"} }],
  ["/%E4%B8%AD%E9%97%B4%E4%BB%B6/RabbitMQ/Class0%EF%BC%9AAMQP%E5%8D%8F%E8%AE%AE.html", { loader: () => import(/* webpackChunkName: "中间件_RabbitMQ_Class0：AMQP协议.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/中间件/RabbitMQ/Class0：AMQP协议.html.js"), meta: {"title":"消息代理和他们所扮演的角色"} }],
  ["/%E4%B8%AD%E9%97%B4%E4%BB%B6/RabbitMQ/RabbitMQ.html", { loader: () => import(/* webpackChunkName: "中间件_RabbitMQ_RabbitMQ.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/中间件/RabbitMQ/RabbitMQ.html.js"), meta: {"title":"消息中间件简介"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/concurrency/", { loader: () => import(/* webpackChunkName: "concurrency_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/concurrency/index.html.js"), meta: {"title":"Concurrency"} }],
  ["/db/", { loader: () => import(/* webpackChunkName: "db_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/index.html.js"), meta: {"title":"Db"} }],
  ["/GIT/", { loader: () => import(/* webpackChunkName: "GIT_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/GIT/index.html.js"), meta: {"title":"GIT"} }],
  ["/interview/", { loader: () => import(/* webpackChunkName: "interview_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/interview/index.html.js"), meta: {"title":"Interview"} }],
  ["/Linux/", { loader: () => import(/* webpackChunkName: "Linux_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/Linux/index.html.js"), meta: {"title":"Linux"} }],
  ["/db/mysql/", { loader: () => import(/* webpackChunkName: "db_mysql_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/mysql/index.html.js"), meta: {"title":"Mysql"} }],
  ["/db/redis/", { loader: () => import(/* webpackChunkName: "db_redis_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/redis/index.html.js"), meta: {"title":"Redis"} }],
  ["/JAVA/base/", { loader: () => import(/* webpackChunkName: "JAVA_base_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/base/index.html.js"), meta: {"title":"Base"} }],
  ["/JAVA/", { loader: () => import(/* webpackChunkName: "JAVA_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/index.html.js"), meta: {"title":"JAVA"} }],
  ["/JAVA/collection/", { loader: () => import(/* webpackChunkName: "JAVA_collection_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/collection/index.html.js"), meta: {"title":"Collection"} }],
  ["/JAVA/concurrent/", { loader: () => import(/* webpackChunkName: "JAVA_concurrent_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/concurrent/index.html.js"), meta: {"title":"Concurrent"} }],
  ["/JAVA/JVM/", { loader: () => import(/* webpackChunkName: "JAVA_JVM_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/JVM/index.html.js"), meta: {"title":"JVM"} }],
  ["/%E4%B8%AD%E9%97%B4%E4%BB%B6/RabbitMQ/", { loader: () => import(/* webpackChunkName: "中间件_RabbitMQ_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/中间件/RabbitMQ/index.html.js"), meta: {"title":"Rabbit MQ"} }],
  ["/%E4%B8%AD%E9%97%B4%E4%BB%B6/", { loader: () => import(/* webpackChunkName: "中间件_index.html" */"D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/中间件/index.html.js"), meta: {"title":"中间件"} }],
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
