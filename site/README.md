# 小小东 VPS 教程站

把 xiaoxiaodong-vps 方案讲给第一次接触的人：主线教程（按顺序 0–7 步）、How-to（具体怎么做）、Wiki（这是什么）、常见问题。
计划上线到 <https://vps.xiaoxiaodong.ai>。界面用 [xxd-ui-kit](https://github.com/nevertoday/xxd-ui-kit)（MIT）。

```bash
cd site
npm install
npm run dev        # http://localhost:4410
npm run build      # 输出到 dist/
```

## 怎么改

- **站点结构**只在 `src/data/nav.js` 改：主线 7 步、How-to 和 Wiki 清单、术语解释（`GLOSSARY`）。步骤写完后把 `ready` 改成 `true`，导航和首页会自动给它加链接。
- **主线教程**每一步是 `src/pages/guide/<n>-<slug>.mdx`，开头写 `layout: ../../layouts/Guide.astro` 和 `step: n`。
- **教程组件**（在 MDX 里 import）：
  - `Callout`：提示框，`type` 是 `ok`（你应该看到）/ `warn`（注意）/ `no`（别这样做）/ `tip`（小提示）
  - `Term`：术语，悬停出一句话解释，`k` 对应 `GLOSSARY` 里的词
  - `Checkpoint`：步骤结尾的检查点，可以打勾，打勾记在读者自己的浏览器里
  - `Q`：「卡住了？」里的一条，可以展开
- **xxd-ui-kit 的 CSS 和 JS** 在 `public/xxd/` 里自带一份，不走 CDN（国内打开不会卡在外部资源上）。升级时在 xxd-ui-kit 里先 `pnpm xxd:build`，再在这里跑 `npm run sync-xxd`。

## 写作规矩

- 站在第一次接触的人的角度：先说这一步做什么、要多久，再说怎么做，最后说应该看到什么。
- 截图里的 IP、订阅地址、密码一律打码；示例 IP 用文档专用的 `203.0.113.x`。
- 价格、库存、付款方式这类会变的信息不写死，写「以官网为准」。
