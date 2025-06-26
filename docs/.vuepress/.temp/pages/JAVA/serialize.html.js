import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/JAVA/serialize.html.vue"
const data = JSON.parse("{\"path\":\"/JAVA/serialize.html\",\"title\":\"序列化\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"JAVA/serialize.md\"}")
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
