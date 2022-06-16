import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  "/slide",
  {
    text: "简介",
    icon: "creative",
    prefix: "/guide/",
    link: "/guide/",
    children: "structure",
  },
]);
