import{S as e,i as t,s,e as r,t as l,a,c as n,b as o,d as c,f as i,g as f,h,j as g,k as m,l as u,n as p,m as d,o as v,p as $,q as y,r as E,u as b,v as w,w as x,x as I,y as R,z}from"./client.8bb1f1a2.js";import{I as D}from"./item.4f3eb782.js";const V=["hot-cross-buns","guacamole"];function H(e){let t,s,d,v,$,y,E,b,w,x,I,R,z,D,V,H,j,k;return{c(){t=r("div"),s=r("a"),d=r("div"),v=r("div"),$=r("strong"),y=l(e[1]),E=a(),b=r("h3"),w=l(e[0]),x=a(),I=r("hr"),R=a(),z=r("p"),D=l(e[3]),V=a(),H=r("div"),j=r("img"),this.h()},l(r){t=n(r,"DIV",{class:!0,"item-name":!0,"category-name":!0});var l=o(t);s=n(l,"A",{href:!0,class:!0});var a=o(s);d=n(a,"DIV",{class:!0});var h=o(d);v=n(h,"DIV",{class:!0});var g=o(v);$=n(g,"STRONG",{class:!0});var m=o($);y=c(m,e[1]),m.forEach(i),E=f(g),b=n(g,"H3",{class:!0});var u=o(b);w=c(u,e[0]),u.forEach(i),x=f(g),I=n(g,"HR",{class:!0}),R=f(g),z=n(g,"P",{class:!0});var p=o(z);D=c(p,e[3]),p.forEach(i),g.forEach(i),V=f(h),H=n(h,"DIV",{class:!0});var k=o(H);j=n(k,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),k.forEach(i),h.forEach(i),a.forEach(i),l.forEach(i),this.h()},h(){h($,"class","d-inline-block mb-2 text-ff3e00 svelte-1ofz26t"),h(b,"class","mb-0 svelte-1ofz26t"),h(I,"class","svelte-1ofz26t"),h(z,"class","mb-auto"),h(v,"class","col h-100 p-4 d-flex flex-column position-static"),j.src!==(k=e[2])&&h(j,"src",k),h(j,"width","150px"),h(j,"height","100%"),h(j,"alt",e[0]),h(j,"class","svelte-1ofz26t"),h(H,"class","col-auto h-100 d-none d-lg-block"),h(d,"class","row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-100 position-relative"),h(s,"href",e[4]),h(s,"class","svelte-1ofz26t"),h(t,"class","col-md-6 item svelte-1ofz26t"),h(t,"item-name","\ufeff"),h(t,"category-name","\ufeff")},m(e,r){g(e,t,r),m(t,s),m(s,d),m(d,v),m(v,$),m($,y),m(v,E),m(v,b),m(b,w),m(v,x),m(v,I),m(v,R),m(v,z),m(z,D),m(d,V),m(d,H),m(H,j)},p(e,[t]){2&t&&u(y,e[1]),1&t&&u(w,e[0]),8&t&&u(D,e[3]),4&t&&j.src!==(k=e[2])&&h(j,"src",k),1&t&&h(j,"alt",e[0]),16&t&&h(s,"href",e[4])},i:p,o:p,d(e){e&&i(t)}}}function j(e,t,s){let{name:r}=t,{category:l}=t,{image:a}=t,{description:n}=t,{href:o}=t;return e.$$set=e=>{"name"in e&&s(0,r=e.name),"category"in e&&s(1,l=e.category),"image"in e&&s(2,a=e.image),"description"in e&&s(3,n=e.description),"href"in e&&s(4,o=e.href)},[r,l,a,n,o]}class k extends e{constructor(e){super(),t(this,e,j,H,s,{name:0,category:1,image:2,description:3,href:4})}}function A(e,t,s){const r=e.slice();return r[1]=t[s],r}function B(e,t,s){const r=e.slice();return r[1]=t[s],r}function N(e,t,s){const r=e.slice();return r[4]=t[s],r}function F(e){let t,s;return t=new k({props:{name:e[1].name,category:e[1].category,image:e[1].image,description:e[1].description,href:"recipes/"+e[1].slug}}),{c(){$(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,r){E(t,e,r),s=!0},p(e,s){const r={};1&s&&(r.name=e[1].name),1&s&&(r.category=e[1].category),1&s&&(r.image=e[1].image),1&s&&(r.description=e[1].description),1&s&&(r.href="recipes/"+e[1].slug),t.$set(r)},i(e){s||(v(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function G(e){let t,s,r=e[4]==e[1].slug&&F(e);return{c(){r&&r.c(),t=d()},l(e){r&&r.l(e),t=d()},m(e,l){r&&r.m(e,l),g(e,t,l),s=!0},p(e,s){e[4]==e[1].slug?r?(r.p(e,s),1&s&&v(r,1)):(r=F(e),r.c(),v(r,1),r.m(t.parentNode,t)):r&&(z(),b(r,1,1,(()=>{r=null})),x())},i(e){s||(v(r),s=!0)},o(e){b(r),s=!1},d(e){r&&r.d(e),e&&i(t)}}}function S(e){let t,s,r=e[0],l=[];for(let t=0;t<r.length;t+=1)l[t]=G(B(e,r,t));const a=e=>b(l[e],1,1,(()=>{l[e]=null}));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=d()},l(e){for(let t=0;t<l.length;t+=1)l[t].l(e);t=d()},m(e,r){for(let t=0;t<l.length;t+=1)l[t].m(e,r);g(e,t,r),s=!0},p(e,s){if(1&s){let n;for(r=e[0],n=0;n<r.length;n+=1){const a=B(e,r,n);l[n]?(l[n].p(a,s),v(l[n],1)):(l[n]=G(a),l[n].c(),v(l[n],1),l[n].m(t.parentNode,t))}for(z(),n=r.length;n<l.length;n+=1)a(n);x()}},i(e){if(!s){for(let e=0;e<r.length;e+=1)v(l[e]);s=!0}},o(e){l=l.filter(Boolean);for(let e=0;e<l.length;e+=1)b(l[e]);s=!1},d(e){I(l,e),e&&i(t)}}}function q(e){let t,s;return t=new D({props:{name:e[1].name,category:e[1].category,image:e[1].image,description:e[1].description,href:"recipes/"+e[1].slug}}),{c(){$(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,r){E(t,e,r),s=!0},p(e,s){const r={};1&s&&(r.name=e[1].name),1&s&&(r.category=e[1].category),1&s&&(r.image=e[1].image),1&s&&(r.description=e[1].description),1&s&&(r.href="recipes/"+e[1].slug),t.$set(r)},i(e){s||(v(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function K(e){let t,s,u,p,d,$,y,E,w,D,H,j,k,B,F,G,K=V,M=[];for(let t=0;t<K.length;t+=1)M[t]=S(N(e,K,t));const O=e=>b(M[e],1,1,(()=>{M[e]=null}));let P=e[0],T=[];for(let t=0;t<P.length;t+=1)T[t]=q(A(e,P,t));const C=e=>b(T[e],1,1,(()=>{T[e]=null}));return{c(){t=a(),s=r("div"),u=r("h1"),p=l("Featured Recipes"),d=a(),$=r("hr"),y=a(),E=r("div");for(let e=0;e<M.length;e+=1)M[e].c();w=a(),D=r("h1"),H=l("All Recipes"),j=a(),k=r("hr"),B=a(),F=r("div");for(let e=0;e<T.length;e+=1)T[e].c();this.h()},l(e){R('[data-svelte="svelte-18w73xh"]',document.head).forEach(i),t=f(e),s=n(e,"DIV",{class:!0});var r=o(s);u=n(r,"H1",{});var l=o(u);p=c(l,"Featured Recipes"),l.forEach(i),d=f(r),$=n(r,"HR",{class:!0}),y=f(r),E=n(r,"DIV",{class:!0});var a=o(E);for(let e=0;e<M.length;e+=1)M[e].l(a);a.forEach(i),w=f(r),D=n(r,"H1",{});var h=o(D);H=c(h,"All Recipes"),h.forEach(i),j=f(r),k=n(r,"HR",{class:!0}),B=f(r),F=n(r,"DIV",{class:!0});var g=o(F);for(let e=0;e<T.length;e+=1)T[e].l(g);g.forEach(i),r.forEach(i),this.h()},h(){document.title="Kitchefs",h($,"class","svelte-tegg7k"),h(E,"class","row"),h(k,"class","svelte-tegg7k"),h(F,"class","row"),h(s,"class","container")},m(e,r){g(e,t,r),g(e,s,r),m(s,u),m(u,p),m(s,d),m(s,$),m(s,y),m(s,E);for(let e=0;e<M.length;e+=1)M[e].m(E,null);m(s,w),m(s,D),m(D,H),m(s,j),m(s,k),m(s,B),m(s,F);for(let e=0;e<T.length;e+=1)T[e].m(F,null);G=!0},p(e,[t]){if(1&t){let s;for(K=V,s=0;s<K.length;s+=1){const r=N(e,K,s);M[s]?(M[s].p(r,t),v(M[s],1)):(M[s]=S(r),M[s].c(),v(M[s],1),M[s].m(E,null))}for(z(),s=K.length;s<M.length;s+=1)O(s);x()}if(1&t){let s;for(P=e[0],s=0;s<P.length;s+=1){const r=A(e,P,s);T[s]?(T[s].p(r,t),v(T[s],1)):(T[s]=q(r),T[s].c(),v(T[s],1),T[s].m(F,null))}for(z(),s=P.length;s<T.length;s+=1)C(s);x()}},i(e){if(!G){for(let e=0;e<K.length;e+=1)v(M[e]);for(let e=0;e<P.length;e+=1)v(T[e]);G=!0}},o(e){M=M.filter(Boolean);for(let e=0;e<M.length;e+=1)b(M[e]);T=T.filter(Boolean);for(let e=0;e<T.length;e+=1)b(T[e]);G=!1},d(e){e&&i(t),e&&i(s),I(M,e),I(T,e)}}}function M(){return this.fetch("recipes.json").then((e=>e.json())).then((e=>({recipes:e})))}function O(e,t,s){let{recipes:r}=t;return e.$$set=e=>{"recipes"in e&&s(0,r=e.recipes)},[r]}export default class extends e{constructor(e){super(),t(this,e,O,K,s,{recipes:0})}}export{M as preload};
