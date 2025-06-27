import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/\",\"title\":\"特拾伍的博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"特拾伍的博客\",\"heroImage\":\"/logo.jpg\",\"heroText\":\"欢迎来到特拾伍的博客\",\"tagline\":\"记录成长，分享技术，遇见更好的自己\",\"bgImage\":false},\"readingTime\":{\"minutes\":0.22,\"words\":65},\"filePathRelative\":\"blog/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
