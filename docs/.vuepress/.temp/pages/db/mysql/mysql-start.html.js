import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/db/mysql/mysql-start.html.vue"
const data = JSON.parse("{\"path\":\"/db/mysql/mysql-start.html\",\"title\":\"Mysql的简易架构图\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"db/mysql/mysql-start.md\"}")
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
