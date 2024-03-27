const nav = require('./config/nav')
const isDev = () => process.env.NODE_ENV === 'development'

module.exports = {
  theme: 'reco',
  base: isDev() ? '/' : '/jm-garming/',
  title: 'Hello Garming',
  description: 'garming个人博客',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  lang: 'zh-CN',
  port: 9090,
  serviceWorker: true, // 是否开启 PWA
  plugins: [
    'demo-container',
    // [
    //   'vuepress-plugin-nuggets-style-copy',
    //   {
    //     copyText: 'copy',
    //     tip: {
    //       content: 'sueecss',
    //     },
    //   },
    // ],
  ], // 配置插件
  themeConfig: {
    style: '@vuepress-reco/style-default',
    logo: '/jm.jpg',
    logoTitle: 'Garming',
    markdown: {
      lineNumbers: true,
    },
    author: 'garMing',
    lastUpdated: true,
    lastUpdated: '上次更新', // string | boolean
    sidebarDepth: 2, // 侧边栏显示2级
    type: 'blog',
    searchMaxSuggestions: 5,
    sidebar: 'auto',
    blogConfig: {
      tag: {
        text: 'Tags',
      },
      category: {
        location: 2,
        text: 'F2E基础',
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/garmin21' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~garming21' },
        { icon: 'reco-npm', link: 'https://www.cnblogs.com/ifon/' },
      ],
    },
    nav,
  },
}
