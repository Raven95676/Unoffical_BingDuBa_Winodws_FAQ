import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'



import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "非官方病毒吧Windows FAQ",
  description: "这里是吧友们可能会问的问题，非病毒吧官方网站。",
  head: [
    ['meta',{'name':'google-site-verification','content':'1YEe1_R0CLvOH_wRVjwtCU0jZ-KnLk7KubhPM9kiaV0'}],
    ['meta', { name: 'keywords', content: '计算机安全,小白教程,教程,计算机'}]
  ],

  theme,

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-SCCND9C7KZ',
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
