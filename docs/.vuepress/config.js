const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "ALing",
  description: '移动开发知识归纳总结',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  base: '/blog/',
  markdown: {
    lineNumbers: true,// 代码行号
    anchor: { permalink: false },
    toc: {includeLevel: [1,2]},
    extendMarkdown: md => {
      md.use(require('markdown-it-texmath'))
    }
  },
  head,
  plugins,
  themeConfig,

}
