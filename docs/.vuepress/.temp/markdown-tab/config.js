import { CodeTabs } from "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+plugin-markdown-tab@2.0.0-rc.110_markdown-it@14.1.0_vuepress@2.0.0-rc.23/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+plugin-markdown-tab@2.0.0-rc.110_markdown-it@14.1.0_vuepress@2.0.0-rc.23/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+plugin-markdown-tab@2.0.0-rc.110_markdown-it@14.1.0_vuepress@2.0.0-rc.23/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
