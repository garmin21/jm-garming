module.exports = [
    { text: '首页', link: '/', icon: 'reco-home' },
    { 
        text: '收藏', 
        ariaLabel: 'awesome Menu',
        icon: 'reco-suggestion',
        items:[
            { 
                text: '前端工程化', 
                link: '/awesome/engineering/',
                items: [
                    { text: 'vite', link: '/awesome/engineering/vite.md' },
                    { text: 'webpack', link: '/awesome/engineering/webpack.md' },
                ]
            },
            {
                text: '代码质量',
                link: '/awesome/code-quality/'
            },
            {
                text: '面试',
                link: '/awesome/interview/'
            },
            {
                text: '性能优化',
                link: '/awesome/lighthouse/'
            }
        ]
    },
    { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    // { text: '关于我', link: '/about/', icon: 'reco-message' }
]