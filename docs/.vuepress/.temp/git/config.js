import { GitContributors } from "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+plugin-git@2.0.0-rc.110_vuepress@2.0.0-rc.23/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/study/tesiwoo.github.io/node_modules/.pnpm/registry.npmmirror.com+@vuepress+plugin-git@2.0.0-rc.110_vuepress@2.0.0-rc.23/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
