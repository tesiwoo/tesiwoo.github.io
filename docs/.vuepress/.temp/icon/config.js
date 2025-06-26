import { hasGlobalComponent } from "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+helper@2.0.0-rc.109_vuepress@2.0.0-rc.23/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vueuse+core@13.4.0_vue@3.5.17/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+plugin-icon@2.0.0-rc.109_markdown-it@14.1.0_vuepress@2.0.0-rc.23/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
