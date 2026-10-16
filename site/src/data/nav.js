// 站点结构的唯一来源：左侧导航、首页路线图、上一步 / 下一步、How-to 目录、搜索都从这里读。
// ready: false 的页面还没写，导航里显示「编写中」，不给链接。

const BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
/** 站内链接：部署在子路径（GitHub Pages 备用地址）时自动加前缀 */
export const link = (path) => `${BASE}${path}`;

export const STEPS = [
  { n: 0, slug: "0-prepare", title: "准备", minutes: "读 10 分钟", ready: true, sum: "需要什么、花多少钱、要多久" },
  { n: 1, slug: "1-buy-server", title: "买服务器", minutes: "20–30 分钟", ready: true, sum: "选商家和套餐，系统选 Ubuntu，记下 IP 和密码" },
  { n: 2, slug: "2-ai-assistant", title: "准备 AI 助手", minutes: "15 分钟", ready: true, sum: "装 Claude Code 或 Codex；没有也能走手动路线" },
  { n: 3, slug: "3-deploy", title: "配置服务器", minutes: "约 10 分钟", ready: true, sum: "让 AI 来配，或者自己照着敲命令" },
  { n: 4, slug: "4-clients", title: "装客户端", minutes: "10 分钟", ready: true, sum: "电脑 Clash Verge、iPhone Shadowrocket、安卓、路由器" },
  { n: 5, slug: "5-verify", title: "检查通没通", minutes: "5 分钟", ready: true, sum: "看出口 IP，查 DNS 和 WebRTC 泄露" },
  { n: 6, slug: "6-ai-api", title: "用自己的 AI 接口", minutes: "15 分钟", ready: true, sum: "CLIProxyAPI 是什么、怎么加账号、怎么接到工具里" },
  { n: 7, slug: "7-daily", title: "日常使用和维护", minutes: "随用随看", ready: true, sum: "体检服务器、出差前检查、流量和续费" },
];
export const stepHref = (s) => link(`/guide/${s.slug}/`);

export const HOWTO = [
  { group: "账号和付款", items: [
    { slug: "gmail", title: "注册 Google 邮箱（Gmail）" },
    { slug: "apple-id", title: "注册境外 Apple ID" },
    { slug: "github", title: "注册 GitHub" },
    { slug: "payment", title: "在国外网站付款" },
  ]},
  { group: "服务器", items: [
    { slug: "buy-bandwagonhost", title: "在搬瓦工买服务器" },
    { slug: "buy-dmit", title: "在 DMIT 买服务器" },
    { slug: "reinstall-os", title: "后台重装系统为 Ubuntu" },
    { slug: "root-password-vnc", title: "后台改 root 密码、用救援控制台" },
    { slug: "traffic-and-ip", title: "查看流量、更换 IP" },
  ]},
  { group: "AI 工具", items: [
    { slug: "windows-wsl", title: "Windows 安装 WSL" },
    { slug: "install-claude-code", title: "安装 Claude Code" },
    { slug: "install-codex", title: "安装 Codex" },
    { slug: "install-skill", title: "安装 xiaoxiaodong-vps skill" },
    { slug: "ai-health-check", title: "让 AI 给服务器体检" },
  ]},
  { group: "客户端", items: [
    { slug: "clash-verge-windows", title: "Clash Verge Rev（Windows）" },
    { slug: "clash-verge-mac", title: "Clash Verge Rev（Mac）" },
    { slug: "clash-verge-tun", title: "打开虚拟网卡模式（TUN）" },
    { slug: "shadowrocket", title: "Shadowrocket（iPhone、iPad）" },
    { slug: "android", title: "安卓客户端" },
    { slug: "openclash", title: "OpenClash 路由器（进阶）" },
  ]},
  { group: "检测", items: [
    { slug: "check-ip", title: "看出口 IP" },
    { slug: "dns-leak", title: "查 DNS 泄露" },
    { slug: "webrtc-leak", title: "查 WebRTC 泄露" },
    { slug: "speed-test", title: "测速和看懂结果" },
  ]},
  { group: "AI 接口", items: [
    { slug: "cpa-login", title: "登录 CLIProxyAPI 管理中心" },
    { slug: "cpa-add-account", title: "给 CLIProxyAPI 添加账号" },
    { slug: "cpa-clients", title: "把 AI 接口接到工具里" },
  ]},
  { group: "出行", items: [
    { slug: "travel-checklist", title: "出差前检查清单" },
  ]},
];
export const howtoHref = (slug) => link(`/howto/${slug}/`);
export const HOWTO_FLAT = HOWTO.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group })));

export const wikiHref = (slug) => link(`/wiki/${slug}/`);

// 正文里虚线标出的术语：悬停看一句话解释（Term 组件）。wiki: 对应的 Wiki 条目
export const GLOSSARY = {
  VPS: { tip: "在机房里租的一台虚拟电脑，24 小时开着，有自己的公网 IP。", wiki: "vps" },
  "公网 IP": { tip: "互联网上的门牌号。别人要找到你的服务器，靠的就是它。", wiki: "ip" },
  机房: { tip: "服务器放在哪座城市。离你越近、线路越好，延迟越低。", wiki: "vps" },
  线路: { tip: "你家到机房走的那条「高速公路」。同一个机房，不同线路晚上的速度能差好几倍。", wiki: "vps" },
  Ubuntu: { tip: "一种免费的 Linux 系统。这套方案只支持 Ubuntu 22.04 以上和 Debian 12 以上。", wiki: "vps" },
  root: { tip: "Linux 的管理员账号，权限最大。买服务器后，商家会给你它的密码。", wiki: "ssh" },
  SSH: { tip: "远程登录服务器的方式。你（或 AI）用它在服务器上执行命令。", wiki: "ssh" },
  密钥: { tip: "一对文件：私钥留在你电脑上，公钥放在服务器上，对得上才能登录，比密码安全得多。", wiki: "ssh" },
  端口: { tip: "一台服务器上的不同「房间号」。SSH 默认是 22。", wiki: "port" },
  NAT: { tip: "多台机器共用一个公网 IP，每台只分到几个端口。这套方案不能用 NAT 机器。", wiki: "ip" },
  KVM: { tip: "一种虚拟化方式，给你一台完整的独立系统。买的时候选 KVM。", wiki: "vps" },
  订阅: { tip: "一个网址，客户端打开它就能拿到节点和分流规则，以后会自动更新。", wiki: "subscription" },
  节点: { tip: "你的电脑连到服务器的那条加密通道。", wiki: "proxy" },
  终端: { tip: "一个只能打字的窗口，用来输入命令。Mac 叫「终端」，Windows 有 PowerShell。", wiki: "ssh" },
  WSL: { tip: "Windows 里自带的一套 Linux 环境。这套方案的脚本要在它里面运行。", wiki: "vps" },
  证书: { tip: "证明「这个网站确实是它自称的那个」的电子文件。有了它，浏览器才显示安全的小锁。", wiki: "https" },
  分流: { tip: "按规则决定每个网站怎么走：国内的直接访问，国外和 AI 工具走你的服务器。", wiki: "routing" },
  虚拟网卡: { tip: "TUN 模式：让电脑上所有软件的流量都先经过 Clash，包括浏览器的 WebRTC。", wiki: "tun" },
  "DNS 泄露": { tip: "你访问的网站名被交给本地网络去查，别人由此知道你在哪、在看什么。", wiki: "dns-leak" },
  WebRTC: { tip: "浏览器自带的视频通话功能，会向外报告你的 IP。", wiki: "webrtc" },
  "API Key": { tip: "调用接口时出示的「门禁卡」，谁拿到谁就能用，要保密。", wiki: "api" },
  CLIProxyAPI: { tip: "装在你服务器上的一个程序：把你的 AI 账号变成一个接口，给各种 AI 工具用。", wiki: "cliproxyapi" },
};
