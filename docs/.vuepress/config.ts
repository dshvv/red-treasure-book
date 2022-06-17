import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { path } from "@vuepress/utils";

export default defineUserConfig({
  lang: "zh-CN",
  title: "JavaScript高级程序设计⁴",
  description: "JavaScript高级程序设计 红宝书",
  base: "/red-treasure-book/dist/",
  dest: './dist',
  theme,
  alias: {
    "@theme-hope/components/HomeHero": path.resolve(
      __dirname,
      "./components/HomePage.vue"
    ),
  }
});
