// .vuepress/configs/navbar.ts

const navbar = [
  { text: "主页", link: "/" },
  { text: "类型", link:"/categories/computer/1.html" },
  { text: "标签", link:"/tags/software/1.html" },
  {
    text: "Docs",
    children: [
      { text: "个人", link: "/docs/self/" },
      { text: "Vue3", link: "/docs/Vue3/" },
      { text:"内存分析工具开发", link:"/docs/Dmat/" },
      { text:"Electron", link:"/docs/Electron/"},
    ],
  },
];

export default navbar;