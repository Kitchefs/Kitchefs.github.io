import{S as e,i as t,s,m as n,j as r,o as l,p as a,q as o,r as c,u as i,v as f,w as h,f as g,x as m,a as u,e as p,t as d,y as v,g as $,c as y,b as I,d as S,h as j,k as b,A as w,z as x}from"./client.cdf75160.js";import{I as E}from"./item.37099257.js";function _(e,t,s){const n=e.slice();return n[6]=t[s],n}function k(e,t,s){const n=e.slice();return n[3]=t[s],n}function B(e){let t,s;return t=new E({props:{name:e[6].name,category:e[6].category,image:e[6].image,description:e[6].description,href:"recipes/"+e[6].slug}}),{c(){a(t.$$.fragment)},l(e){o(t.$$.fragment,e)},m(e,n){c(t,e,n),s=!0},p(e,s){const n={};1&s&&(n.name=e[6].name),1&s&&(n.category=e[6].category),1&s&&(n.image=e[6].image),1&s&&(n.description=e[6].description),1&s&&(n.href="recipes/"+e[6].slug),t.$set(n)},i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){i(t.$$.fragment,e),s=!1},d(e){f(t,e)}}}function D(e){let t,s,a=e[3]==e[6].slug&&B(e);return{c(){a&&a.c(),t=n()},l(e){a&&a.l(e),t=n()},m(e,n){a&&a.m(e,n),r(e,t,n),s=!0},p(e,s){e[3]==e[6].slug?a?(a.p(e,s),3&s&&l(a,1)):(a=B(e),a.c(),l(a,1),a.m(t.parentNode,t)):a&&(x(),i(a,1,1,(()=>{a=null})),h())},i(e){s||(l(a),s=!0)},o(e){i(a),s=!1},d(e){a&&a.d(e),e&&g(t)}}}function N(e){let t,s,a=e[0],o=[];for(let t=0;t<a.length;t+=1)o[t]=D(_(e,a,t));const c=e=>i(o[e],1,1,(()=>{o[e]=null}));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=n()},l(e){for(let t=0;t<o.length;t+=1)o[t].l(e);t=n()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);r(e,t,n),s=!0},p(e,s){if(3&s){let n;for(a=e[0],n=0;n<a.length;n+=1){const r=_(e,a,n);o[n]?(o[n].p(r,s),l(o[n],1)):(o[n]=D(r),o[n].c(),l(o[n],1),o[n].m(t.parentNode,t))}for(x(),n=a.length;n<o.length;n+=1)c(n);h()}},i(e){if(!s){for(let e=0;e<a.length;e+=1)l(o[e]);s=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)i(o[e]);s=!1},d(e){m(o,e),e&&g(t)}}}function V(e){let t,s,n,a,o,c,f,w=e[1],E=[];for(let t=0;t<w.length;t+=1)E[t]=N(k(e,w,t));const _=e=>i(E[e],1,1,(()=>{E[e]=null}));return{c(){t=u(),s=p("h1"),n=d("Saved Items"),a=u(),o=p("div"),c=p("div");for(let e=0;e<E.length;e+=1)E[e].c();this.h()},l(e){v('[data-svelte="svelte-s18bby"]',document.head).forEach(g),t=$(e),s=y(e,"H1",{class:!0});var r=I(s);n=S(r,"Saved Items"),r.forEach(g),a=$(e),o=y(e,"DIV",{class:!0});var l=I(o);c=y(l,"DIV",{class:!0});var i=I(c);for(let e=0;e<E.length;e+=1)E[e].l(i);i.forEach(g),l.forEach(g),this.h()},h(){document.title="Kitchefs | Saved Items",j(s,"class","svelte-18b6s2d"),j(c,"class","row"),j(o,"class","container")},m(e,l){r(e,t,l),r(e,s,l),b(s,n),r(e,a,l),r(e,o,l),b(o,c);for(let e=0;e<E.length;e+=1)E[e].m(c,null);f=!0},p(e,[t]){if(3&t){let s;for(w=e[1],s=0;s<w.length;s+=1){const n=k(e,w,s);E[s]?(E[s].p(n,t),l(E[s],1)):(E[s]=N(n),E[s].c(),l(E[s],1),E[s].m(c,null))}for(x(),s=w.length;s<E.length;s+=1)_(s);h()}},i(e){if(!f){for(let e=0;e<w.length;e+=1)l(E[e]);f=!0}},o(e){E=E.filter(Boolean);for(let e=0;e<E.length;e+=1)i(E[e]);f=!1},d(e){e&&g(t),e&&g(s),e&&g(a),e&&g(o),m(E,e)}}}function q(){return this.fetch("recipes.json").then((e=>e.json())).then((e=>({recipes:e})))}function z(e,t,s){let{recipes:n}=t,r=[];return w((()=>{var e;localStorage.hasOwnProperty("kitchefs_saved_items")&&(e=localStorage.getItem("kitchefs_saved_items"),s(1,r=e))})),e.$$set=e=>{"recipes"in e&&s(0,n=e.recipes)},[n,r]}export default class extends e{constructor(e){super(),t(this,e,z,V,s,{recipes:0})}}export{q as preload};
