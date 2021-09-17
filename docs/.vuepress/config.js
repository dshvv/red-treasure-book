
const sidebar = require('../../utils/sidebar');

module.exports = {
    base: '/red-treasure-book/dist/', 
    head:[['script',{src:'./js/head.js'}]],
    themeConfig: {
        // 侧边栏数组
        // 所有页面会使用相同的侧边栏
        sidebar: sidebar,
        sidebarDepth: 2
      },
}