import{_ as n,a as t,b as r,c as e,i as c,s as o,d as a,S as i,e as f,t as s,f as u,g as l,h,j as v,k as g,l as m,m as p,n as d,o as y,p as $,q as E,r as R,u as w,v as x,w as D,x as b,y as I,z,A as V,B as j,C as B,D as S,E as k}from"./client.78f43ee8.js";import{I as N}from"./item.c6c6cc98.js";var P=["hot-cross-buns","guacamole"];function A(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,o=t(n);if(e){var a=t(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return r(this,c)}}function G(n){var t,r,e,c,o,a,i,w,x,D,b,I,z,V,j,B,S,k;return{c:function(){t=f("div"),r=f("a"),e=f("div"),c=f("div"),o=f("strong"),a=s(n[1]),i=u(),w=f("h3"),x=s(n[0]),D=u(),b=f("hr"),I=u(),z=f("p"),V=s(n[3]),j=u(),B=f("div"),S=f("img"),this.h()},l:function(f){t=l(f,"DIV",{class:!0,"item-name":!0,"category-name":!0});var s=h(t);r=l(s,"A",{href:!0,class:!0});var u=h(r);e=l(u,"DIV",{class:!0});var p=h(e);c=l(p,"DIV",{class:!0});var d=h(c);o=l(d,"STRONG",{class:!0});var y=h(o);a=v(y,n[1]),y.forEach(g),i=m(d),w=l(d,"H3",{class:!0});var $=h(w);x=v($,n[0]),$.forEach(g),D=m(d),b=l(d,"HR",{class:!0}),I=m(d),z=l(d,"P",{class:!0});var E=h(z);V=v(E,n[3]),E.forEach(g),d.forEach(g),j=m(p),B=l(p,"DIV",{class:!0});var R=h(B);S=l(R,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),R.forEach(g),p.forEach(g),u.forEach(g),s.forEach(g),this.h()},h:function(){p(o,"class","d-inline-block mb-2 text-ff3e00 svelte-1ofz26t"),p(w,"class","mb-0 svelte-1ofz26t"),p(b,"class","svelte-1ofz26t"),p(z,"class","mb-auto"),p(c,"class","col h-100 p-4 d-flex flex-column position-static"),S.src!==(k=n[2])&&p(S,"src",k),p(S,"width","150px"),p(S,"height","100%"),p(S,"alt",n[0]),p(S,"class","svelte-1ofz26t"),p(B,"class","col-auto h-100 d-none d-lg-block"),p(e,"class","row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-100 position-relative"),p(r,"href",n[4]),p(r,"class","svelte-1ofz26t"),p(t,"class","col-md-6 item svelte-1ofz26t"),p(t,"item-name","\ufeff"),p(t,"category-name","\ufeff")},m:function(n,f){d(n,t,f),y(t,r),y(r,e),y(e,c),y(c,o),y(o,a),y(c,i),y(c,w),y(w,x),y(c,D),y(c,b),y(c,I),y(c,z),y(z,V),y(e,j),y(e,B),y(B,S)},p:function(n,t){var e=$(t,1)[0];2&e&&E(a,n[1]),1&e&&E(x,n[0]),8&e&&E(V,n[3]),4&e&&S.src!==(k=n[2])&&p(S,"src",k),1&e&&p(S,"alt",n[0]),16&e&&p(r,"href",n[4])},i:R,o:R,d:function(n){n&&g(t)}}}function H(n,t,r){var e=t.name,c=t.category,o=t.image,a=t.description,i=t.href;return n.$$set=function(n){"name"in n&&r(0,e=n.name),"category"in n&&r(1,c=n.category),"image"in n&&r(2,o=n.image),"description"in n&&r(3,a=n.description),"href"in n&&r(4,i=n.href)},[e,c,o,a,i]}var q=function(t){n(f,i);var r=A(f);function f(n){var t;return e(this,f),t=r.call(this),c(a(t),n,H,G,o,{name:0,category:1,image:2,description:3,href:4}),t}return f}();function C(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,o=t(n);if(e){var a=t(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return r(this,c)}}function K(n,t,r){var e=n.slice();return e[1]=t[r],e}function M(n,t,r){var e=n.slice();return e[1]=t[r],e}function O(n,t,r){var e=n.slice();return e[4]=t[r],e}function T(n){var t,r;return t=new q({props:{name:n[1].name,category:n[1].category,image:n[1].image,description:n[1].description,href:"recipes/"+n[1].slug}}),{c:function(){D(t.$$.fragment)},l:function(n){b(t.$$.fragment,n)},m:function(n,e){I(t,n,e),r=!0},p:function(n,r){var e={};1&r&&(e.name=n[1].name),1&r&&(e.category=n[1].category),1&r&&(e.image=n[1].image),1&r&&(e.description=n[1].description),1&r&&(e.href="recipes/"+n[1].slug),t.$set(e)},i:function(n){r||(x(t.$$.fragment,n),r=!0)},o:function(n){z(t.$$.fragment,n),r=!1},d:function(n){V(t,n)}}}function _(n){var t,r,e=n[4]==n[1].slug&&T(n);return{c:function(){e&&e.c(),t=w()},l:function(n){e&&e.l(n),t=w()},m:function(n,c){e&&e.m(n,c),d(n,t,c),r=!0},p:function(n,r){n[4]==n[1].slug?e?(e.p(n,r),1&r&&x(e,1)):((e=T(n)).c(),x(e,1),e.m(t.parentNode,t)):e&&(k(),z(e,1,1,(function(){e=null})),j())},i:function(n){r||(x(e),r=!0)},o:function(n){z(e),r=!1},d:function(n){e&&e.d(n),n&&g(t)}}}function F(n){for(var t,r,e=n[0],c=[],o=0;o<e.length;o+=1)c[o]=_(M(n,e,o));var a=function(n){return z(c[n],1,1,(function(){c[n]=null}))};return{c:function(){for(var n=0;n<c.length;n+=1)c[n].c();t=w()},l:function(n){for(var r=0;r<c.length;r+=1)c[r].l(n);t=w()},m:function(n,e){for(var o=0;o<c.length;o+=1)c[o].m(n,e);d(n,t,e),r=!0},p:function(n,r){if(1&r){var o;for(e=n[0],o=0;o<e.length;o+=1){var i=M(n,e,o);c[o]?(c[o].p(i,r),x(c[o],1)):(c[o]=_(i),c[o].c(),x(c[o],1),c[o].m(t.parentNode,t))}for(k(),o=e.length;o<c.length;o+=1)a(o);j()}},i:function(n){if(!r){for(var t=0;t<e.length;t+=1)x(c[t]);r=!0}},o:function(n){c=c.filter(Boolean);for(var t=0;t<c.length;t+=1)z(c[t]);r=!1},d:function(n){B(c,n),n&&g(t)}}}function J(n){var t,r;return t=new N({props:{name:n[1].name,category:n[1].category,image:n[1].image,description:n[1].description,href:"recipes/"+n[1].slug}}),{c:function(){D(t.$$.fragment)},l:function(n){b(t.$$.fragment,n)},m:function(n,e){I(t,n,e),r=!0},p:function(n,r){var e={};1&r&&(e.name=n[1].name),1&r&&(e.category=n[1].category),1&r&&(e.image=n[1].image),1&r&&(e.description=n[1].description),1&r&&(e.href="recipes/"+n[1].slug),t.$set(e)},i:function(n){r||(x(t.$$.fragment,n),r=!0)},o:function(n){z(t.$$.fragment,n),r=!1},d:function(n){V(t,n)}}}function L(n){for(var t,r,e,c,o,a=P,i=[],s=0;s<a.length;s+=1)i[s]=F(O(n,a,s));for(var v=function(n){return z(i[n],1,1,(function(){i[n]=null}))},E=n[0],R=[],w=0;w<E.length;w+=1)R[w]=J(K(n,E,w));var D=function(n){return z(R[n],1,1,(function(){R[n]=null}))};return{c:function(){t=u(),r=f("div"),e=f("div");for(var n=0;n<i.length;n+=1)i[n].c();c=u();for(var o=0;o<R.length;o+=1)R[o].c();this.h()},l:function(n){S('[data-svelte="svelte-18w73xh"]',document.head).forEach(g),t=m(n),r=l(n,"DIV",{class:!0});var o=h(r);e=l(o,"DIV",{class:!0});for(var a=h(e),f=0;f<i.length;f+=1)i[f].l(a);c=m(a);for(var s=0;s<R.length;s+=1)R[s].l(a);a.forEach(g),o.forEach(g),this.h()},h:function(){document.title="Kitchefs",p(e,"class","row"),p(r,"class","container")},m:function(n,a){d(n,t,a),d(n,r,a),y(r,e);for(var f=0;f<i.length;f+=1)i[f].m(e,null);y(e,c);for(var s=0;s<R.length;s+=1)R[s].m(e,null);o=!0},p:function(n,t){var r=$(t,1)[0];if(1&r){var o;for(a=P,o=0;o<a.length;o+=1){var f=O(n,a,o);i[o]?(i[o].p(f,r),x(i[o],1)):(i[o]=F(f),i[o].c(),x(i[o],1),i[o].m(e,c))}for(k(),o=a.length;o<i.length;o+=1)v(o);j()}if(1&r){var s;for(E=n[0],s=0;s<E.length;s+=1){var u=K(n,E,s);R[s]?(R[s].p(u,r),x(R[s],1)):(R[s]=J(u),R[s].c(),x(R[s],1),R[s].m(e,null))}for(k(),s=E.length;s<R.length;s+=1)D(s);j()}},i:function(n){if(!o){for(var t=0;t<a.length;t+=1)x(i[t]);for(var r=0;r<E.length;r+=1)x(R[r]);o=!0}},o:function(n){i=i.filter(Boolean);for(var t=0;t<i.length;t+=1)z(i[t]);R=R.filter(Boolean);for(var r=0;r<R.length;r+=1)z(R[r]);o=!1},d:function(n){n&&g(t),n&&g(r),B(i,n),B(R,n)}}}function Q(){return this.fetch("recipes.json").then((function(n){return n.json()})).then((function(n){return{recipes:n}}))}function U(n,t,r){var e=t.recipes;return n.$$set=function(n){"recipes"in n&&r(0,e=n.recipes)},[e]}var W=function(t){n(f,i);var r=C(f);function f(n){var t;return e(this,f),t=r.call(this),c(a(t),n,U,L,o,{recipes:0}),t}return f}();export default W;export{Q as preload};
