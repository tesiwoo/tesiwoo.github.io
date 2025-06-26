import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/java/serialize.html.vue"
const data = JSON.parse("{\"path\":\"/java/serialize.html\",\"title\":\"序列化\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":1.52,\"words\":455},\"filePathRelative\":\"java/serialize.md\"}")
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
