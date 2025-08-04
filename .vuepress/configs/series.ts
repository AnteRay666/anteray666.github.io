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
        ,
        {
            text:"other",
            children:[
                "/mustache",
                "/git"
            ]
        }
    ],

    "/docs/self":[
        {
            text:"个人",
            children:[
                "/README.md"
            ]
        }
    ],
    "/docs/Vue3":[
        {
            text:"Vue3",
            children:[    
            "/README.md",
            "/Start",
            "/ProjectStructure",
            "/ref",
            "/reactive",
            "/Attribute",
            "/v-on",
            "/onMounted"
            ]
        }
    ],
    "/docs/Dmat":[
        {
            text:"内存分析工具开发",
            children:[
                "/README.md",
            ]
        }
    ],
    "/docs/shopify":[
        {
            text:"Shopify学习",
            children:[
                "/Liquid.md",
                "/Tags.md",
                "/Filters.md",
                "/Shopify.md",
                "/spcon.md"
            ]
        }
    ],   
    "/docs/Electron":[
        {
            text:"Electron",
            children:[
                "/README.md",
                "/start",
                "/Rule"
            ]
        }
    ]
  };
export default series;