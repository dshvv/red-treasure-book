import { hopeTheme } from "vuepress-theme-hope";
import { searchPlugin } from "@vuepress/plugin-search";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",
  author: {
    name: "丁少华",
    url: "https://mrhope.site",
  },
  iconAssets: "iconfont",
  logo: "/logo.svg",
  navbar: [
    { text: "文档", icon: "note", link: "/guide/第1章_什么是JavaScript" },
    {
      text: "博客",
      icon: "creative",
      link: "https://www.cnblogs.com/dshvv",
    }
  ],
  sidebar: {
    "/guide/": "structure",
  },
  displayFooter: false,
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  // plugins: {
  //   comment: {
  //     provider: "Giscus",
  //     repo: "dshvv/red-treasure-book",
  //     repoId: "MDEwOlJlcG9zaXRvcnk0MDcxNDYxODA=",
  //     category: "Announcements",
  //     categoryId: "DIC_kwDOGESOxM4CPs5U",
  //   },
  //   mdEnhance: {
  //     enableAll: true,
  //     presentation: {
  //       plugins: ["highlight", "math", "search", "notes", "zoom"],
  //     },
  //   },
  //   // @ts-ignore
  //   searchPlugin: searchPlugin({
  //     locales: {
  //       "/": {
  //         placeholder: "搜索",
  //       },
  //     },
  //   }),
  // },
  // @ts-ignore
  plugins: [
    searchPlugin({
      // 你的选项
    }),
  ],
});
