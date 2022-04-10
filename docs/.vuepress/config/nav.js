module.exports = [
    { text: '首页', link: '/', icon: 'reco-home' },
    { 
        text: '收藏', 
        ariaLabel: 'awesome Menu',
        icon: 'reco-suggestion',
        items:[
            { text: 'vite 工程化', link: '/awesome/engineering/vite.md' },
            { text: 'webpack 工程化', link: '/awesome/engineering/webpack.md' },
            { text: 'rollup 工程化', link: '/awesome/engineering/rollup.md' },
            { text: '代码质量', link: '/awesome/code-quality/' },
            { text: '面试', link: '/awesome/interview/' },
            { text: '性能优化', link: '/awesome/lighthouse/' },
            { text: '服务端渲染', link: '/awesome/ssr-render/' },
            { text: '前端架构', link: '/awesome/framework/' },
            { text: 'Typescript', link: '/awesome/typescript/' },
        ]
    },
    { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    // { text: '关于我', link: '/about/', icon: 'reco-message' }
]