import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/java/list.html.vue"
const data = JSON.parse("{\"path\":\"/java/list.html\",\"title\":\"List（列表）\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":1.75,\"words\":524},\"filePathRelative\":\"java/list.md\"}")
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
