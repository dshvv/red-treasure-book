const sidebar = require("../../utils/sidebar");
const { searchPlugin } = require("@vuepress/plugin-search");
const { backToTopPlugin } = require("@vuepress/plugin-back-to-top");
const { containerPlugin } = require("@vuepress/plugin-container");
const { commentPlugin } = require("vuepress-plugin-comment2");
const { commentTheme } = require("./theme");
const {clipboardPlugin } = require("vuepress-plugin-clipboard");

module.exports = {
  lang: "zh-CN",
  title: "JavaScript高级程序设计⁴",
  description: "JavaScript高级程序设计 红宝书",
  base: "/red-treasure-book/dist/",
  dest: "./dist",
  head: [["script", { src: "./js/head.js" }]],

  theme: commentTheme({
    contributorsText: "作者",
    lastUpdatedText: "最后更新",
    sidebar,
    navbar: [
      {
        text: "博客",
        link: "https://www.cnblogs.com/dshvv",
      },
    ],
  }),

  plugins: [
    backToTopPlugin(),
    containerPlugin({}),
    clipboardPlugin({
      successText: '复制成功'
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
    commentPlugin({
      provider: "Giscus",
      repo: "dshvv/red-treasure-book",
      repoId: "MDEwOlJlcG9zaXRvcnk0MDcxNDYxODA=",
      category: "Announcements",
      categoryId: "DIC_kwDOGESOxM4CPs5U",
    }),
  ],
};
