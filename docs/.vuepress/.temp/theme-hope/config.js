import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-rc.93_markdown-it@14.1.0_sass-embedded@1.89.2_vuepress@2.0.0-rc.23/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+plugin-catalog@2.0.0-rc.109_vuepress@2.0.0-rc.23/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"

import "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+helper@2.0.0-rc.109_vuepress@2.0.0-rc.23/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+helper@2.0.0-rc.109_vuepress@2.0.0-rc.23/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+helper@2.0.0-rc.109_vuepress@2.0.0-rc.23/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-rc.93_markdown-it@14.1.0_sass-embedded@1.89.2_vuepress@2.0.0-rc.23/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);


  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
