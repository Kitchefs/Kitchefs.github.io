import{S as e,i as t,s,m as n,j as r,o as l,p as a,q as o,r as c,u as i,v as f,w as h,f as g,x as m,a as u,e as p,t as d,y as v,g as $,c as j,b as y,d as I,h as b,k as x,A as E,z as S}from"./client.8b0dc9d3.js";import{I as w}from"./item.8386921a.js";import{s as B}from"./store.08920c38.js";function D(e,t,s){const n=e.slice();return n[5]=t[s],n}function N(e,t,s){const n=e.slice();return n[2]=t[s],n}function V(e){let t,s;return t=new w({props:{name:e[5].name,category:e[5].category,image:e[5].image,description:e[5].description,href:"recipes/"+e[5].slug}}),{c(){a(t.$$.fragment)},l(e){o(t.$$.fragment,e)},m(e,n){c(t,e,n),s=!0},p(e,s){const n={};1&s&&(n.name=e[5].name),1&s&&(n.category=e[5].category),1&s&&(n.image=e[5].image),1&s&&(n.description=e[5].description),1&s&&(n.href="recipes/"+e[5].slug),t.$set(n)},i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){i(t.$$.fragment,e),s=!1},d(e){f(t,e)}}}function k(e){let t,s,a=e[2]==e[5].slug&&V(e);return{c(){a&&a.c(),t=n()},l(e){a&&a.l(e),t=n()},m(e,n){a&&a.m(e,n),r(e,t,n),s=!0},p(e,s){e[2]==e[5].slug?a?(a.p(e,s),3&s&&l(a,1)):(a=V(e),a.c(),l(a,1),a.m(t.parentNode,t)):a&&(S(),i(a,1,1,(()=>{a=null})),h())},i(e){s||(l(a),s=!0)},o(e){i(a),s=!1},d(e){a&&a.d(e),e&&g(t)}}}function q(e){let t,s,a=e[0],o=[];for(let t=0;t<a.length;t+=1)o[t]=k(D(e,a,t));const c=e=>i(o[e],1,1,(()=>{o[e]=null}));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=n()},l(e){for(let t=0;t<o.length;t+=1)o[t].l(e);t=n()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);r(e,t,n),s=!0},p(e,s){if(3&s){let n;for(a=e[0],n=0;n<a.length;n+=1){const r=D(e,a,n);o[n]?(o[n].p(r,s),l(o[n],1)):(o[n]=k(r),o[n].c(),l(o[n],1),o[n].m(t.parentNode,t))}for(S(),n=a.length;n<o.length;n+=1)c(n);h()}},i(e){if(!s){for(let e=0;e<a.length;e+=1)l(o[e]);s=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)i(o[e]);s=!1},d(e){m(o,e),e&&g(t)}}}function z(e){let t,s,n,a,o,c,f,E=e[1],w=[];for(let t=0;t<E.length;t+=1)w[t]=q(N(e,E,t));const B=e=>i(w[e],1,1,(()=>{w[e]=null}));return{c(){t=u(),s=p("div"),n=p("h1"),a=d("Saved Items"),o=u(),c=p("div");for(let e=0;e<w.length;e+=1)w[e].c();this.h()},l(e){v('[data-svelte="svelte-s18bby"]',document.head).forEach(g),t=$(e),s=j(e,"DIV",{class:!0});var r=y(s);n=j(r,"H1",{class:!0});var l=y(n);a=I(l,"Saved Items"),l.forEach(g),o=$(r),c=j(r,"DIV",{class:!0});var i=y(c);for(let e=0;e<w.length;e+=1)w[e].l(i);i.forEach(g),r.forEach(g),this.h()},h(){document.title="Kitchefs | Saved Items",b(n,"class","svelte-18b6s2d"),b(c,"class","row"),b(s,"class","container")},m(e,l){r(e,t,l),r(e,s,l),x(s,n),x(n,a),x(s,o),x(s,c);for(let e=0;e<w.length;e+=1)w[e].m(c,null);f=!0},p(e,[t]){if(3&t){let s;for(E=e[1],s=0;s<E.length;s+=1){const n=N(e,E,s);w[s]?(w[s].p(n,t),l(w[s],1)):(w[s]=q(n),w[s].c(),l(w[s],1),w[s].m(c,null))}for(S(),s=E.length;s<w.length;s+=1)B(s);h()}},i(e){if(!f){for(let e=0;e<E.length;e+=1)l(w[e]);f=!0}},o(e){w=w.filter(Boolean);for(let e=0;e<w.length;e+=1)i(w[e]);f=!1},d(e){e&&g(t),e&&g(s),m(w,e)}}}function A(){return this.fetch("recipes.json").then((e=>e.json())).then((e=>({recipes:e})))}function H(e,t,s){let n;E(e,B,(e=>s(1,n=e)));let{recipes:r}=t;return e.$$set=e=>{"recipes"in e&&s(0,r=e.recipes)},[r,n]}export default class extends e{constructor(e){super(),t(this,e,H,z,s,{recipes:0})}}export{A as preload};