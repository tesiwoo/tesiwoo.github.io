import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

const noteJava = defineNoteConfig({
        dir: 'JAVA',
        link: '/JAVA/',
        sidebar: 'auto',
    },
)
const noteDb = defineNoteConfig({
        dir: '数据库',
        link: '/dv/',
        sidebar: 'auto',
    },
)

const noteComponent = defineNoteConfig({
        dir: '组件',
        link: '/component/',
        sidebar: 'auto',
    },
)

const noteOperationMainTenance = defineNoteConfig({
        dir: '运维',
        link: '/nom/',
        sidebar: 'auto',
    },
)


const noteTool = defineNoteConfig({
        dir: '工具',
        link: '/tool/',
        sidebar: 'auto',
    },
)

const noteInterview = defineNoteConfig({
        dir: '面试',
        link: '/interview/',
        sidebar: 'auto',
    },
)
export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [noteJava, noteDb, noteComponent, noteOperationMainTenance, noteTool, noteInterview],
})
