const sidebar = require('../../utils/sidebar');
const { defaultTheme } = require('@vuepress/theme-default');
const { searchPlugin } = require('@vuepress/plugin-search');
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top');
const { containerPlugin } = require('@vuepress/plugin-container')

module.exports = {
  lang: 'zh-CN',
  title: 'JavaScript高级程序设计⁴',
  description: 'JavaScript高级程序设计 红宝书',
  base: '/red-treasure-book/dist/',
  dest: './dist',
  head: [['script', { src: './js/head.js' }]],
  theme: defaultTheme({
    sidebar,
    navbar: [
      {
        text: '博客',
        link: 'https://www.cnblogs.com/dshvv',
      }
    ]
  }),
  plugins: [
    backToTopPlugin(),
    containerPlugin({}),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
}