// .vuepress/configs/series.ts
const series = {
    "/blogs/computer/":[
                // "README.md",
        {
            text: "website",
            children:[
                "website/gitee",
                "website/github"
            ]

        },    
        {
            text: "software",
            children:[
                "software/AtUoVM",
                "software/Pr"
            ]

        }
    ],
    "/docs/self/":[
        {
            text:"个人",
            children:[
                "README.md"
            ]
        }
    ],
    "/docs/theme-reco/": [
      {
        text: "module one",
        children: ["home", "theme"],
      },
      {
        text: "module two",
        children: ["api", "plugin"],
      },
    ],
  };
  
  export default series;