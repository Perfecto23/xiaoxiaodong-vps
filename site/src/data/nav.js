// 站点结构的唯一来源：左侧导航、首页路线图、每一步的上一步 / 下一步都从这里读。
// ready: false 的页面还没写，导航里显示「编写中」，不给链接。

export const STEPS = [
  { n: 0, slug: "0-prepare", title: "准备", minutes: "读 10 分钟", ready: true, sum: "需要什么、花多少钱、要多久" },
  { n: 1, slug: "1-buy-server", title: "买服务器", minutes: "20–30 分钟", ready: true, sum: "选商家和套餐，系统选 Ubuntu，记下 IP 和密码" },
  { n: 2, slug: "2-ai-assistant", title: "准备 AI 助手", minutes: "15 分钟", ready: false, sum: "装 Claude Code 或 Codex；没有也能走手动路线" },
  { n: 3, slug: "3-deploy", title: "让 AI 配置服务器", minutes: "约 10 分钟", ready: false, sum: "复制一段话给 AI，它会问你什么、你会看到什么" },
  { n: 4, slug: "4-clients", title: "装客户端", minutes: "10 分钟", ready: false, sum: "电脑 Clash Verge、iPhone Shadowrocket、安卓、路由器" },
  { n: 5, slug: "5-verify", title: "检查通没通", minutes: "5 分钟", ready: false, sum: "看出口 IP，查 DNS 和 WebRTC 泄露" },
  { n: 6, slug: "6-ai-api", title: "用自己的 AI 接口", minutes: "15 分钟", ready: false, sum: "CLIProxyAPI 是什么、怎么加账号、怎么接到工具里" },
  { n: 7, slug: "7-daily", title: "日常使用和维护", minutes: "随用随看", ready: false, sum: "体检服务器、出差前检查、流量和续费" },
];

export const stepHref = (s) => `/guide/${s.slug}/`;

export const HOWTO = [
  { group: "账号和付款", items: ["注册 Google 邮箱（Gmail）", "注册境外 Apple ID", "注册 GitHub", "用支付宝或 PayPal 付款"] },
  { group: "服务器", items: ["在搬瓦工买服务器", "在 DMIT 买服务器", "后台重装系统为 Ubuntu", "后台改 root 密码、打开 VNC", "查看流量、更换 IP"] },
  { group: "AI 工具", items: ["安装 Claude Code", "安装 Codex", "安装 xiaoxiaodong-vps skill", "让 AI 给服务器体检"] },
  { group: "客户端", items: ["Clash Verge Rev（Windows）", "Clash Verge Rev（Mac）", "打开虚拟网卡模式（TUN）", "Shadowrocket（iPhone）", "安卓客户端", "OpenClash 路由器（进阶）"] },
  { group: "检测", items: ["看出口 IP", "查 DNS 泄露", "查 WebRTC 泄露", "测速和看懂结果"] },
  { group: "AI 接口", items: ["登录 CLIProxyAPI 管理中心", "添加账号", "接到 Cherry Studio / Claude Code / Codex"] },
];

export const WIKI = [
  "IP 地址", "域名和 DNS", "DNS 泄露", "代理、VPN、节点、机场", "端口", "TCP 和 UDP", "WebRTC",
  "HTTPS 和证书", "SSH、公钥和私钥", "防火墙", "VPS 和机房线路", "晚高峰为什么慢", "BBR",
  "Xray、VLESS、Reality", "3x-ui", "订阅", "规则分流", "系统代理和虚拟网卡", "IP 纯净度和风控",
  "时区和浏览器指纹", "API 和 API Key", "CLIProxyAPI", "流量和带宽",
];

// 正文里虚线标出的术语：悬停看一句话解释（Term 组件）
export const GLOSSARY = {
  VPS: "在机房里租的一台虚拟电脑，24 小时开着，有自己的公网 IP。",
  "公网 IP": "互联网上的门牌号。别人要找到你的服务器，靠的就是它。",
  机房: "服务器放在哪座城市。离你越近、线路越好，延迟越低。",
  线路: "你家到机房走的那条「高速公路」。同一个机房，不同线路晚上的速度能差好几倍。",
  Ubuntu: "一种免费的 Linux 系统。这套方案只支持 Ubuntu 22.04 以上和 Debian 12 以上。",
  root: "Linux 的管理员账号，权限最大。买服务器后，商家会给你它的密码。",
  SSH: "远程登录服务器的方式。你（或 AI）用它在服务器上执行命令。",
  端口: "一台服务器上的不同「房间号」。SSH 默认是 22。",
  NAT: "多台机器共用一个公网 IP，每台只分到几个端口。这套方案不能用 NAT 机器。",
  KVM: "一种虚拟化方式，给你一台完整的独立系统。买的时候选 KVM。",
  订阅: "一个网址，客户端打开它就能拿到节点和分流规则，以后会自动更新。",
  节点: "你的电脑连到服务器的那条加密通道。",
};
