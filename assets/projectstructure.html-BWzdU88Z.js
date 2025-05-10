import{_ as n,c as e,b as a,o as i}from"./app-D4Ocjrzd.js";const l={};function c(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="vue3-项目结构" tabindex="-1"><a class="header-anchor" href="#vue3-项目结构"><span>Vue3 项目结构</span></a></h1><p>对于一个标准的 Vue3 项目而言，我们需要先了解它的结构，这样能够帮助我们在使用快速构建的脚手架上搭建我们的项目。</p><p>以下是一个标准的结构。</p><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">    vuebox/                   <span class="token comment"># 项目根目录</span></span>
<span class="line">    ├── .vscode/              <span class="token comment"># VS Code 配置目录，存放编辑器相关配置文件</span></span>
<span class="line">    ├── public/               <span class="token comment"># 静态资源目录，存放不会被构建工具处理的静态文件，如favicon.ico等</span></span>
<span class="line">    ├── src/                  <span class="token comment"># 源代码目录，项目的核心代码文件都存放在这里</span></span>
<span class="line">    │   ├── assets/           <span class="token comment"># 存放项目所需的静态资源，如图片、样式表等</span></span>
<span class="line">    │   ├── components/       <span class="token comment"># 存放项目的各个组件文件，每个组件对应一个.vue文件</span></span>
<span class="line">    │   ├── router/           <span class="token comment"># 路由配置目录</span></span>
<span class="line">    │   │   └── index.js      <span class="token comment"># 路由配置文件，定义应用中的不同路由</span></span>
<span class="line">    │   ├── stores/           <span class="token comment"># 状态管理目录，存放Pinia状态管理相关的代码</span></span>
<span class="line">    │   ├── views/            <span class="token comment"># 存放各个页面组件，通常每个路由对应一个页面组件</span></span>
<span class="line">    │   ├── App.vue           <span class="token comment"># 应用的根组件，其他组件都会在这个组件中进行组合和展示</span></span>
<span class="line">    │   └── main.js           <span class="token comment"># 应用的入口文件，用于初始化和配置应用</span></span>
<span class="line">    ├── .gitattributes        <span class="token comment"># Git配置文件，用于指定文件的换行符处理方式等</span></span>
<span class="line">    ├── .gitignore            <span class="token comment"># 指定Git版本控制中需要忽略的文件和目录</span></span>
<span class="line">    ├── .prettierrc.json      <span class="token comment"># Prettier代码格式化工具的配置文件</span></span>
<span class="line">    ├── index.html            <span class="token comment"># 项目的HTML入口文件，用于挂载Vue应用</span></span>
<span class="line">    ├── jsconfig.json         <span class="token comment"># JavaScript配置文件，提供智能代码提示等功能</span></span>
<span class="line">    ├── package.json          <span class="token comment"># 项目依赖配置文件，定义了项目的元数据、依赖项等</span></span>
<span class="line">    ├── README.md             <span class="token comment"># 项目的说明文件，通常包含项目的介绍、安装指南等</span></span>
<span class="line">    ├── vite.config.js        <span class="token comment"># Vite构建工具的配置文件</span></span>
<span class="line">    └── vitest.config.js      <span class="token comment"># Vitest测试工具的配置文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请按照需求进行文件的创建和引用。</p>`,6)]))}const o=n(l,[["render",c]]),m=JSON.parse('{"path":"/docs/Vue3/ProjectStructure.html","title":"Vue3 项目结构","lang":"en-US","frontmatter":{"title":"Vue3 项目结构","date":"2025-5-8","tags":["Vue3"],"categories":["Vue3"]},"headers":[{"level":2,"title":"结构","slug":"结构","link":"#结构","children":[]}],"git":{"createdTime":1746804568000,"updatedTime":1746804568000,"contributors":[{"name":"AnteRay666","email":"3458403927@qq.com","commits":1}]},"filePathRelative":"docs/Vue3/ProjectStructure.md"}');export{o as comp,m as data};
