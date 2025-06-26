import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/GIT/useGit.html.vue"
const data = JSON.parse("{\"path\":\"/GIT/useGit.html\",\"title\":\"GIT有关概念\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"GIT/useGit.md\"}")
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
