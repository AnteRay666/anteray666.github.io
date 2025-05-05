// .vuepress/configs/navbar.ts

const navbar = [
  { text: "主页", link: "/" },
  { text: "类型", link:"/categories/computer/1.html" },
  { text: "标签", link:"/tags/software/1.html" },
  // { text: "计算机", link: "/blogs/computer/" },
  { text: "个人模块", link: "/docs/self/" },
  {
    text: "Docs",
    children: [
      { text: "结构说明", link: "/docs/self/explaination" },
      { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
    ],
  },
];

export default navbar;