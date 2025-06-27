import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/collection/index.html.vue"
const data = JSON.parse("{\"path\":\"/JAVA/collection/\",\"title\":\"Collection\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Collection\",\"article\":false,\"feed\":false,\"sitemap\":false},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
