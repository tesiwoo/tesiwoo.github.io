import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/GIT/git.html.vue"
const data = JSON.parse("{\"path\":\"/GIT/git.html\",\"title\":\"WHAT：\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":3.58,\"words\":1073},\"filePathRelative\":\"GIT/git.md\"}")
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
