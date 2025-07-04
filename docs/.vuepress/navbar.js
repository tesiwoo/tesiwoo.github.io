import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/', icon: 'material-symbols:home'},
    {text: '博客', link: '/blog/', icon: 'material-symbols:article-outline', activeMatch: '^(/blog/|/article/)',},
    {
        text: '文档',
        items: [
            {text: 'JAVA', link: '/JAVA/start/', icon: 'logos:java'},
            {text: '数据库', link: '/db/start/', icon: 'mdi:database'},
            {text: '组件', link: '/component/start/', icon: 'mdi:puzzle'},
            {text: '工具', link: '/tool/start/', icon: 'mdi:tools'},
            {text: '运维', link: '/nom/start/', icon: 'mdi:server'},
            {text: '面试', link: '/interview/start/', icon: 'mdi:comment-question'}
        ],
        icon: 'ic:outline-note-alt',
        activeMatch: '^/notes/JAVA/',
    },
    // {
    //     text: '更多',
    //     items: [
    //         {text: '友情链接', link: '/more/friends/', icon: 'icon-park:friends-circle'},
    //         {text: '我的项目', link: '/more/projects/', icon: 'material-icon-theme:folder-project-open'},
    //         {text: '网址导航', link: '/more/sites-collect/', icon: 'logos:sitepoint'},
    //     ],
    //     icon: 'mingcute:more-3-fill',
    //     activeMatch: '^/more/',
    // },
])
