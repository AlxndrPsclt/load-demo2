if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),t={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>t[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-f51ab5e4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.2fd52105.js",revision:null},{url:"assets/_braceletUUID_.415a17c8.js",revision:null},{url:"assets/_braceletUUID_.back.1d6fc7d1.js",revision:null},{url:"assets/[braceletUUID].6219f494.css",revision:null},{url:"assets/[braceletUUID].back.7636d7e8.css",revision:null},{url:"assets/404.990343b4.js",revision:null},{url:"assets/about.b32faa56.js",revision:null},{url:"assets/bar.267b0439.js",revision:null},{url:"assets/bar.ccc048ca.css",revision:null},{url:"assets/FullscreenModal.vue_vue_type_script_setup_true_lang.512103e8.js",revision:null},{url:"assets/home.e838d85b.js",revision:null},{url:"assets/index.8254fff5.css",revision:null},{url:"assets/index.cca3f725.js",revision:null},{url:"assets/InputField.vue_vue_type_script_setup_true_lang.51808d3d.js",revision:null},{url:"assets/profile.293a63ba.js",revision:null},{url:"assets/profile.9ebfa24f.css",revision:null},{url:"assets/README.d0535f80.js",revision:null},{url:"assets/route-block.011d1056.js",revision:null},{url:"assets/signup.4edfd241.css",revision:null},{url:"assets/signup.d06f4d2c.js",revision:null},{url:"assets/transfers.2fd3cc94.js",revision:null},{url:"assets/transfers.4e22d273.css",revision:null},{url:"assets/useRelays.8c43720c.js",revision:null},{url:"assets/virtual_pwa-register.e259dfef.js",revision:null},{url:"assets/vue-scrollto.5a848cd5.js",revision:null},{url:"index.html",revision:"cf9b1db83c1f863b8c7ff41ae7436fcb"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"500a9f0940999eae09401da0b2ac022d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
