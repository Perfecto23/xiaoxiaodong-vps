import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// 小小东 VPS 教程站：静态构建，界面全部用 xxd-ui-kit（public/xxd/ 里的一份，见 scripts/sync-xxd.mjs）
export default defineConfig({
  site: "https://vps.xiaoxiaodong.ai",
  integrations: [mdx()],
  build: { format: "directory" },
  markdown: { shikiConfig: { theme: "github-dark-default" } },
});
