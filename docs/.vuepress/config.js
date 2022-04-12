const nav = require('./config/nav')
const isDev = () => process.env.NODE_ENV === 'development';

module.exports = {
    theme: 'reco',
    base: isDev() ? '/' : '/jm-garming/',
    title: 'Hello Garming',
    description: 'garming个人博客',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    lang: 'zh-CN',
    port: 9090,
    serviceWorker: true, // 是否开启 PWA
    themeConfig: {
        style: '@vuepress-reco/style-default',
        logo: '/jm.jpeg',
        logoTitle: 'Garming',
        markdown: {
            lineNumbers: true
        },
        author: 'garMing',
        lastUpdated: true,
        lastUpdated: '上次更新', // string | boolean
        sidebarDepth: 2, // 侧边栏显示2级
        type: "blog",
        searchMaxSuggestions: 5,
        sidebar: "auto",
        blogConfig: {
            "category": {
              "location": 2,
              "text": "分类"
            },
            // "tag": {
            //   "location": 3,
            //   "text": "标签"
            // }
        },
        nav,
        // 博客配置
        // blogConfig: {
        //     category: {
        //         location: 2,     // 在导航栏菜单中所占的位置，默认2
        //         text: '分类' // 默认文案 “分类”
        //     },
        //     tag: {
        //         location: 2,     // 在导航栏菜单中所占的位置，默认3
        //         text: '标签'      // 默认文案 “标签”
        //     },
        //     socialLinks: [     // 信息栏展示社交信息
        //         { icon: 'reco-github', link: 'https://github.com/recoluan' },
        //         { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
        //     ]
        // },
    }
}  
  