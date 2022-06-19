import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { path } from "@vuepress/utils";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "zh-CN",
  title: "JavaScript高级程序设计⁴",
  description: "JavaScript高级程序设计 红宝书",
  base: "/red-treasure-book/dist/",
  dest: './dist',
  theme,
  alias: {
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue"
    ),
  },
  plugins:[
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ]
});
