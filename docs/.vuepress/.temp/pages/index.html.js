import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"test\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1750843075000,\"contributors\":[{\"name\":\"yuxiang_chu\",\"username\":\"\",\"email\":\"yuxiang_chu@sui.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"48fe84a5eb5afd4b8f062a266fba3a0b67a833c9\",\"time\":1750843075000,\"email\":\"yuxiang_chu@sui.com\",\"author\":\"yuxiang_chu\",\"message\":\"init\"}]},\"filePathRelative\":\"README.md\"}")
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
