import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "JavaScript高级程序设计⁴",
  description: "JavaScript高级程序设计 红宝书",
  base: "/",
  theme,
});
