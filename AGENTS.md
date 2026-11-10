# AGENTS.md

跑步日记项目：VitePress 静态站（pnpm），每篇日记一个 markdown。

## 项目速览

- 源文件在 `docs/`，每篇日记七个固定字段；需要统计数据时从 markdown 提取，不维护 CSV。
- 构建必须用 `NODE_OPTIONS= pnpm build`（本机 safe-delete 会拦 vitepress 的缓存清理）。
- 包管理器只用 pnpm（版本锁在 `package.json` 的 `packageManager`），别用 npm。
- esbuild 安装脚本白名单在 `pnpm-workspace.yaml`，别删。
- 新增日记：`docs/diary/YYYY-MM-DD.md` + `docs/.vitepress/config.mjs` sidebar 加一行。

## 提交信息规范（Angular / Conventional Commits）

```
<type>(<scope>): <subject>
```

- type：`feat` 新功能（新日记、新页面）、`fix` 修复、`docs` 文档、`style` 样式/排版、`refactor`、`perf`、`chore`（依赖、构建、CI）、`revert`
- scope 可选：`diary`、`theme`、`build`、`ci`、`deps` 等
- subject：祈使句、不加句号，中文或英文均可，一行 ≤ 72 字符
- 正文（可选）空一行后写；footer 用于 `Closes #x`

示例：

```
feat(diary): 添加 11.03 跑步记录
chore(ci): 添加 GitHub Pages 部署工作流
style(theme): 调整 hero 标题渐变
```
