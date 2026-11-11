import { defineConfig } from 'vitepress'

export default defineConfig({
  // GitHub Pages 部署在 https://<user>.github.io/running-diary/，构建时用仓库子路径
  // ponytail: 本地 dev 用 '/'，需要本地预览同路径时去掉三元直接写 '/running-diary/'
  base: process.env.NODE_ENV === 'production' ? '/running-diary/' : '/',
  lang: 'zh-CN',
  title: '跑步日记',
  description: '2026 年 11 月的六次跑步记录：距离、配速与感受',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Anton&family=Noto+Sans+SC:wght@400;700;900&display=swap'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: '日记', link: '/diary/2026-11-03' }
    ],
    sidebar: [
      {
        text: '2026 年 11 月',
        items: [
          { text: '11.03 · 周二', link: '/diary/2026-11-03' },
          { text: '11.04 · 周三', link: '/diary/2026-11-04' },
          { text: '11.05 · 周四', link: '/diary/2026-11-05' },
          { text: '11.06 · 周五', link: '/diary/2026-11-06' },
          { text: '11.09 · 周一', link: '/diary/2026-11-09' },
          { text: '11.10 · 周二', link: '/diary/2026-11-10' },
          { text: '11.11 · 周三', link: '/diary/2026-11-11' }
        ]
      }
    ],
    outline: { level: [2, 3], label: '本篇内容' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '回到顶部',
    externalLinkIcon: false
  }
})
