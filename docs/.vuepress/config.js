import { defaultTheme } from 'vuepress'

module.exports = {
    lang: 'zh-CN',
    title: '特拾伍的笔记们',
    description: '一名初级程序猿想养成写笔记的习惯而写的笔记',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    theme: defaultTheme({
        subSildebar: 'auto',
        docsDir: 'docs',
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'JAVA',
                link: "/java/collections.md"
            },
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
        sidebar: {
            '/JAVA/': [
                {
                    text: 'JAVA基础',
                    children: [
                        { text: "集合类型", children: [
                            {text: "集合", link: "/java/collections.md"},
                            {text: "链表", link: "/java/list.md"},
                            {text: "Map", link: "/java/map.md"},
                            {text: "Set", link: "/java/set.md"},
                            {text: "队列", link: "/java/Queue.md"},
                        ] },
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
                    children: [
                        { text: "HTTP协议", link: "/java/http-agreement.md" }
                    ]
                }
            ],
            '/db/': [
                {
                    text: '关系型数据库',
                    children: [
                        {
                            text: "MYSQL",
                            children: [
                                { text: "MYSQL基础", link: "/db/mysql/mysql-start.md" },
                                { text: "MYSQL存储引擎相关", link: "/db/mysql/storage-ngine.md" },
                                { text: "关于索引", link: "/db/mysql/mysql-index.md" },
                            ]
                        }
                    ],
                },
                {
                    text: '非关系型数据库',
                    children: [
                        {
                            text: "Redis",
                            children: [
                                { text: "Redis五种基本数据结构", link: "/db/redis/base-five-type.md" },
                                { text: "Redis的特殊数据结构", link: "/db/redis/" },
                                { text: "持久化", link: "/db/redis/redis-persistence.md" },
                                { text: "哨兵机制", link: "/db/redis/reids-sentinel-mechanism.md" },
                                { text: "切片集群", link: "/db/redis/slice-cluster.md" },
                                { text: "Redis主从库同步", link: "/db/redis/redis-master-slave-sync.md" },
                                { text: "Redis异常及处理", link: "/db/redis/redis-exception.md" },
                                { text: "Redis线程模型", link: "/db/redis/redis-thread-model.md" },
                                { text: "Redis的参数配置", link: "/db/redis/redis-param-config.md" },
                                { text: "过期和内存不足淘汰策略", link: "/db/redis/redis-expire-time-memory-strategy.md" },
                                { text: "Redis异常及处理", link: "/db/redis/redis-exception.md" },
                            ]
                        }
                    ],
                }
            ],
            '/Linux/': [
                {
                    text: 'Linux',
                    children: [
                        { text: "什么是Linux", link: "/Linux/whatLinux.md" },
                        { text: "Linux使用", link: "/Linux/linuxUse.md" },
                        { text: "VMWAre", link: "/Linux/VMWare.md" },
                    ],
                }
            ],
            '/GIT/': [
                {
                    text: 'GIT',
                    children: [
                        { text: "git介绍", link: "/GIT/git.md" },
                        { text: "git的使用", link: "/GIT/useGit.md" }
                    ],
                }
            ],
            '/interview/': [
                { text: "面试题", link: "/interview/interview.md" },
                { text: "东莞小天才", link: "/interview/one.md" }
                
            ],
        },
        sidebarDepth: 2,//侧边栏自动提取文章的几层标题
        sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
        updateBar: {
            // 最近更新栏
            showToArticle: false, // 显示到文章页底部，默认true
            moreArticle: "/archives", // “更多文章”跳转的页面，默认'/archives'
        },
        category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
        tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
        archive: true,// 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    }),
    markdown: {
        code: {
            lineNumbers: true, // 代码块显示行号
        }
    },
    plugins: [
        ['vuepress-plugin-code-copy', true],
        ['vuepress-plugin-right-anchor', 
        {
            showDepth: 1,
            ignore: [
            ],
            expand: {
              trigger: 'hover',
              clickModeDefaultOpen: true
            },
            customClass: 'your-customClass',
            disableGlobalUI: false,
          }],
        '@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        },
    ]
}

