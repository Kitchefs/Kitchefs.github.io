!function(){"use strict";const e=1607259121394,t="cache"+e,a=["/client/client.1f884243.js","/client/inject_styles.5607aec6.js","/client/index.f0de2ccd.js","/client/item.dec48d71.js","/client/saved_items.47344ef2.js","/client/store.7add973c.js","/client/[slug].49b4c117.js","/client/index.3502d553.js","/client/[slug].f531dfd7.js"].concat(["/service-worker-index.html","/.DS_Store","/favicon.ico","/global.css","/kitchefs_icon.png","/media/anzac-biscuits.jpg","/media/banana-bread.jpg","/media/chocolate-caramel-slice.jpg","/media/cinnamon-doughnuts.jpg","/media/dark-choc-brownies.jpg","/media/gingerbread-house.jpg","/media/guacamole.jpg","/media/hot-cross-buns.jpg","/media/meringue.jpg","/media/pavlova.jpg","/pdf/anzac-biscuits.pdf","/pdf/banana-bread.pdf","/pdf/chocolate-caramel-slice.pdf","/pdf/cinnamon-doughnuts.pdf","/pdf/dark-choc-brownies.pdf","/pdf/guacamole.pdf","/pdf/hot-cross-buns.pdf","/pdf/pavlova.pdf"]),c=new Set(a);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(a))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const a of e)a!==t&&await caches.delete(a);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const a=new URL(t.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&c.has(a.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const a=await fetch(t.request);return e.put(t.request,a.clone()),a}catch(a){const c=await e.match(t.request);if(c)return c;throw a}})))))}))}();
