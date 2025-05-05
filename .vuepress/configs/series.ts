// .vuepress/configs/series.ts
const series = {
    "/blogs/computer":[
                // "README.md",
        {
            text: "website",
            children:[
                "/website/gitee",
                "/website/github",
                "/website/gitpage"
            ]

        },    
        {
            text: "software",
            children:[
                "/software/AtUoVM",
                "/software/Pr"
            ]

        }
    ],
    "/blogs/programme":[
        {
            text:"node.js",
            children:[
                "/node.js/node.js",
                "/node.js/nvm",
                "/node.js/npm",
                
            ]
        }
    ]
    ,
    "/docs/self":[
        {
            text:"个人",
            children:[
                "/README.md"
            ]
        }
    ],
  };
export default series;