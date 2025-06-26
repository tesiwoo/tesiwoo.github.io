import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/中间件/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E4%B8%AD%E9%97%B4%E4%BB%B6/\",\"title\":\"中间件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"中间件\",\"article\":false,\"feed\":false,\"sitemap\":false},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
