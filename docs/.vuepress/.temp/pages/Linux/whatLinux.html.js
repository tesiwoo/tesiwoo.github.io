import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/Linux/whatLinux.html.vue"
const data = JSON.parse("{\"path\":\"/Linux/whatLinux.html\",\"title\":\"Linux是个啥？\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"Linux/whatLinux.md\"}")
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
