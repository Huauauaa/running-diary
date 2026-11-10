# 跑步日记 🏃

记录每一次跑步：日期、距离、配速、心情和身体感受。站点基于 **VitePress**，主题风格：运动（黑底 + 荧光柠檬强调）。

## 目录结构

```
running-diary/
├── README.md                  # 项目说明
├── package.json               # pnpm 脚本（dev / build / preview）
├── pnpm-workspace.yaml        # pnpm 设置（esbuild 安装脚本白名单）
├── pnpm-lock.yaml             # 依赖锁定（入库）
├── .github/workflows/deploy.yml  # GitHub Pages 自动部署
└── docs/
    ├── index.md               # 首页（hero + 概览）
    ├── diary/
    │   ├── 2026-11-03.md      # 每篇日记单独一个文件
    │   ├── 2026-11-04.md
    │   ├── 2026-11-05.md
    │   ├── 2026-11-06.md
    │   ├── 2026-11-09.md
    │   └── 2026-11-10.md
    └── .vitepress/
        ├── config.mjs         # 导航 / 侧栏 / 字体
        └── theme/
            ├── index.js       # 默认主题 + 自定义样式
            └── custom.css     # 运动主题配色
```

## 常用命令

```bash
pnpm dev        # 本地开发 http://localhost:5173
pnpm build      # 构建到 docs/.vitepress/dist
pnpm preview    # 本地预览构建产物
```

包管理器为 **pnpm**（版本锁在 `package.json` 的 `packageManager` 字段，用 corepack 自动切换）。esbuild 的安装脚本白名单在 `pnpm-workspace.yaml`。

## GitHub Pages 部署

1. 在 GitHub 新建名为 `running-diary` 的仓库并推送代码（`main` 分支）。
2. 仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。
3. 之后每次 push 到 `main`，`.github/workflows/deploy.yml` 会自动构建并发布，地址为 `https://<用户名>.github.io/running-diary/`。

站点 base 路径已在 `docs/.vitepress/config.mjs` 里配置：构建时自动用 `/running-diary/`，本地 dev 用 `/`。仓库名不同的话改这一处即可。

## 记录方式

- **docs/diary/**：每次跑步一篇 markdown，写感受、路线、天气等；新增一篇后到 `docs/.vitepress/config.mjs` 的 sidebar 里加一行。
- 每篇固定七个字段（距离、用时、配速、地点、天气、感受、记录），想以后做统计时再从 markdown 提取即可。
