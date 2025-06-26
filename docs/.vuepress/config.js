import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '特拾伍的笔记们',
  description: '一名初级程序猿想养成写笔记的习惯而写的笔记',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  
  theme: defaultTheme({
    // 主题配置
    subSildebar: 'auto',
    docsDir: 'docs',
    
    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { text: 'JAVA', link: "/java/collections.md" },
      { 
        text: '数据库',
        children: [
          {
            text: '关系型数据库',
            children: [
              { text: "MYSQL", link: "/db/mysql/mysql-start.md" },
            ]
          },
          {
            text: '非关系型数据库',
            children: [
              { text: "Redis", link: "/db/redis/base-five-type.md" }
            ]
          },
        ]
      },
      {
        text: '工具',
        children: [
          { text: 'GIT', link: "/GIT/git.md" }
        ]
      },
      {
        text: '运维',
        children: [
          { text: 'Linux', link: "/Linux/whatLinux.md" }
        ]
      },
      {
        text: '面试',
        children: [
          { text: '面经', link: "/interview/one.md" }
        ]
      }
    ],

    // 侧边栏配置
    sidebar: {
      '/JAVA/': [
        {
          text: 'JAVA基础',
          children: [
            { 
              text: "集合类型", 
              children: [
                {text: "集合", link: "/java/collections.md"},
                {text: "链表", link: "/java/list.md"},
                {text: "Map", link: "/java/map.md"},
                {text: "Set", link: "/java/set.md"},
                {text: "队列", link: "/java/Queue.md"},
              ] 
            },
            { text: "线程池", link: "/java/threadPool.md" },
            { text: "序列化", link: "/java/serialize.md" },
            { text: "注解", link: "/java/annotation.md" },
            { text: "UML", link: "/java/UML.md" },
            { text: "其他", link: "/java/anonther.md" },
          ],
        },
        {
          text: "JAVA进阶",
          children: [
            { text: "BIO、NIO、AIO", link: "/java/BNAIO.md" },
          ]
        },
        {
          text: "JAVA虚拟机-JVM",
          children: [
            { text: "JVM基础", link: "/java/JVM.md" }
          ]
        },
        {
          text: "关键字", link: "/java/keywords.md"
        },
        {
          text: "计算机网络",
  