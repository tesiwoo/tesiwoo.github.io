import { hasGlobalComponent } from "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+helper@2.0.0-rc.110_vuepress@2.0.0-rc.23/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-rc.90_sass-embedded@1.89.2_vuepress@2.0.0-rc.23/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+helper@2.0.0-rc.110_vuepress@2.0.0-rc.23/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
