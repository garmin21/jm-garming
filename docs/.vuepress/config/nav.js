module.exports = [
    { 
        text: '文章', 
        ariaLabel: 'article Menu', 
        icon: 'reco-coding', 
        items: [
            { text: 'web 摄像头', link: '/article/01.md' },
            { text: '大数据量加载处理', link: '/article/02.md' },
            { text: '判断对象是否具有属性的 5 种方法', link: '/article/03.md' }
        ]
    },
    { text: 'Vue3', link: '/awesome/engineering/vue3.md', icon: 'reco-other' },
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
            { text: '知识库', link: '/awesome/knowledge-base/' }
        ]
    },
    { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    { 
        text: '必知必会的package', 
        icon: 'reco-faq',
        ariaLabel: 'awesome Menu',
        items: [
            { text: '@vueuse/core', link: '/package/vueuse.md' },
        ] 
    },
    { 
        text: 'npm', 
        link: '/npm/', 
        icon: 'reco-npm',
        items: [
            { text: 'big.js', link: '/npm/big.js.md' },
            { text: 'file-saver', link: '/npm/file-saver.md' },
            { text: 'async-validator', link: '/npm/async-validator.md' },
            { text: 'docx-preview', link: '/npm/docx-preview.md' },
        ]
    }
]