import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/GIT/index.html.vue"
const data = JSON.parse("{\"path\":\"/GIT/\",\"title\":\"GIT\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"GIT\",\"article\":false,\"feed\":false,\"sitemap\":false},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
