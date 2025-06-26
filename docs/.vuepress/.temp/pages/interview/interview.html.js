import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/interview/interview.html.vue"
const data = JSON.parse("{\"path\":\"/interview/interview.html\",\"title\":\"面试题\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1750920449000,\"contributors\":[{\"name\":\"yuxiang_chu\",\"username\":\"\",\"email\":\"yuxiang_chu@sui.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"44c30d70161c82a6f9f433d9f4b9c06db8671c2c\",\"time\":1750920449000,\"email\":\"yuxiang_chu@sui.com\",\"author\":\"yuxiang_chu\",\"message\":\"3\"}]},\"filePathRelative\":\"interview/interview.md\"}")
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
