if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>n(e,o),t={module:{uri:o},exports:c,require:l};s[o]=Promise.all(r.map((e=>t[e]||l(e)))).then((e=>(i(...e),c)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"my-pet"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.e1074026.css",revision:null},{url:"/css/chunk-vendors.6516fab7.css",revision:null},{url:"/img/back.b5d13182.png",revision:null},{url:"/index.html",revision:"2554726c1b44793e35b4c0a90cb1fbf4"},{url:"/js/app.c4f88a89.js",revision:null},{url:"/js/chunk-vendors.a25864b4.js",revision:null},{url:"/manifest.json",revision:"6cfe46c96764cac5a95e52bb98cec50a"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
