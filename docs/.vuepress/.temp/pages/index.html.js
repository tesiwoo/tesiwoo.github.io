import comp from "D:/study/tesiwoo.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroText\":\"特拾伍的笔记们\",\"tagline\":\"一名初级程序猿想养成写笔记的习惯而写的笔记\",\"heroImage\":\"/logo.jpg\",\"features\":[{\"title\":\"自定义\",\"details\":\"我想，我是，自由的、任性的、毫无畏惧且快乐的特拾伍\"},{\"title\":\"记录原因\",\"details\":\"好记性不如烂笔头；骄傲是成功下的蛋孵出的小鸡叫失败\"}],\"actions\":[{\"text\":\"开始涨薪\",\"link\":\"/JAVA/base/serialize.md\",\"type\":\"primary\"}],\"footerHtml\":true,\"footer\":\"<p><a href=\\\"https://beian.miit.gov.cn/\\\" target=\\\"_blank\\\"> 粤ICP备2023076119号 </a> | TeSiWoo | Copyright © 2023-12</p>\"},\"readingTime\":{\"minutes\":0.41,\"words\":122},\"filePathRelative\":\"README.md\"}")
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
