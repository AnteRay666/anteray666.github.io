import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'
import { navbar, series } from "./configs"; 
export default defineUserConfig({
  title: "Ante的个人blog",
  description: "Just playing around",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  head:[
    //
    ['link', { rel: 'icon', href: '/Ante.png' }
]
  ] ,
  theme: recoTheme({
    logo: "/logo.png",
    author: "Ante",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/AnteRay666",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    editLink: false, // 是否显示编辑链接
    // editLinkPattern: ":repo/edit/:branch/:path",
    // series 为原 sidebar
    series,
    navbar,
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
