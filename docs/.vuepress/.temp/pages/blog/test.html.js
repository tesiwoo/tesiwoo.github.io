import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/blog/test.html.vue"
const data = JSON.parse("{\"path\":\"/blog/test.html\",\"title\":\"测试文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"测试文章\",\"date\":\"2024-05-01T00:00:00.000Z\",\"category\":\"技术\",\"tag\":[\"测试\"]},\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"blog/test.md\"}")
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
