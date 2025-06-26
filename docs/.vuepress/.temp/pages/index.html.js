import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo.png\",\"features\":[{\"title\":\"自定义\",\"details\":\"我想，我是，自由的、任性的、毫无畏惧且快乐的特拾伍\"},{\"title\":\"记录原因\",\"details\":\"骄傲是成功下的蛋孵出的小鸡叫失败，知不知道都要记\"}],\"actions\":[{\"text\":\"开始涨薪\",\"link\":\"/java/collections.md\",\"type\":\"primary\"}],\"footerHtml\":true,\"footer\":\"<p><a href=\\\"https://beian.miit.gov.cn/\\\" target=\\\"_blank\\\"> 粤ICP备2023076119号 </a> | TeSiWoo | Copyright © 2023-12</p>\"},\"readingTime\":{\"minutes\":0.3,\"words\":91},\"filePathRelative\":\"README.md\"}")
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
