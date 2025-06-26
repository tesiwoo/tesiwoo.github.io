import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/interview/interview.html.vue"
const data = JSON.parse("{\"path\":\"/interview/interview.html\",\"title\":\"面试题\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"interview/interview.md\"}")
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
