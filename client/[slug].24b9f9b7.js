import{S as e,i as t,s,e as a,a as l,t as r,c as n,b as c,g as o,d as i,f as h,h as f,j as m,k as v,l as d,x as p,m as u,n as g,A as x,C as E,D as b,p as y,y as _,q as j,r as I,o as k,u as D,v as V}from"./client.b83f17ba.js";import{s as $}from"./store.2340b62a.js";function w(e,t,s){const a=e.slice();return a[10]=t[s],a}function T(e,t,s){const a=e.slice();return a[13]=t[s],a}function H(e,t,s){const a=e.slice();return a[16]=t[s],a}function L(e){let t;return{c(){t=r("favorite_outline")},l(e){t=i(e,"favorite_outline")},m(e,s){m(e,t,s)},d(e){e&&h(t)}}}function P(e){let t;return{c(){t=r("favorite")},l(e){t=i(e,"favorite")},m(e,s){m(e,t,s)},d(e){e&&h(t)}}}function A(e){let t,s,p,u,g,x,E,b,y=e[16]+"";return{c(){t=a("div"),s=a("input"),u=l(),g=a("label"),x=r(y),b=l(),this.h()},l(e){t=n(e,"DIV",{class:!0});var a=c(t);s=n(a,"INPUT",{type:!0,class:!0,id:!0}),u=o(a),g=n(a,"LABEL",{class:!0,for:!0});var l=c(g);x=i(l,y),l.forEach(h),b=o(a),a.forEach(h),this.h()},h(){f(s,"type","checkbox"),f(s,"class","custom-control-input svelte-jyvrx"),f(s,"id",p="checkbox-"+e[16]),f(g,"class","custom-control-label svelte-jyvrx"),f(g,"for",E="checkbox-"+e[16]),f(t,"class","custom-control custom-checkbox svelte-jyvrx")},m(e,a){m(e,t,a),v(t,s),v(t,u),v(t,g),v(g,x),v(t,b)},p(e,t){4&t&&p!==(p="checkbox-"+e[16])&&f(s,"id",p),4&t&&y!==(y=e[16]+"")&&d(x,y),4&t&&E!==(E="checkbox-"+e[16])&&f(g,"for",E)},d(e){e&&h(t)}}}function N(e){let t,s,l=e[13]+"";return{c(){t=a("li"),s=r(l)},l(e){t=n(e,"LI",{});var a=c(t);s=i(a,l),a.forEach(h)},m(e,a){m(e,t,a),v(t,s)},p(e,t){8&t&&l!==(l=e[13]+"")&&d(s,l)},d(e){e&&h(t)}}}function S(e){let t,s,d,u,g,x,E,b,y=e[4],_=[];for(let t=0;t<y.length;t+=1)_[t]=C(w(e,y,t));return{c(){t=a("hr"),s=l(),d=a("div"),u=a("div"),g=a("h5"),x=r("Tips"),E=l(),b=a("ul");for(let e=0;e<_.length;e+=1)_[e].c();this.h()},l(e){t=n(e,"HR",{class:!0}),s=o(e),d=n(e,"DIV",{});var a=c(d);u=n(a,"DIV",{class:!0});var l=c(u);g=n(l,"H5",{class:!0});var r=c(g);x=i(r,"Tips"),r.forEach(h),E=o(l),b=n(l,"UL",{});var f=c(b);for(let e=0;e<_.length;e+=1)_[e].l(f);f.forEach(h),l.forEach(h),a.forEach(h),this.h()},h(){f(t,"class","svelte-jyvrx"),f(g,"class","svelte-jyvrx"),f(u,"class","col")},m(e,a){m(e,t,a),m(e,s,a),m(e,d,a),v(d,u),v(u,g),v(g,x),v(u,E),v(u,b);for(let e=0;e<_.length;e+=1)_[e].m(b,null)},p(e,t){if(16&t){let s;for(y=e[4],s=0;s<y.length;s+=1){const a=w(e,y,s);_[s]?_[s].p(a,t):(_[s]=C(a),_[s].c(),_[s].m(b,null))}for(;s<_.length;s+=1)_[s].d(1);_.length=y.length}},d(e){e&&h(t),e&&h(s),e&&h(d),p(_,e)}}}function C(e){let t,s,l=e[10]+"";return{c(){t=a("li"),s=r(l)},l(e){t=n(e,"LI",{});var a=c(t);s=i(a,l),a.forEach(h)},m(e,a){m(e,t,a),v(t,s)},p(e,t){16&t&&l!==(l=e[10]+"")&&d(s,l)},d(e){e&&h(t)}}}function M(e){let t,s,x,E,b,y,_,j,I,k,D,V,$,w,C,M,R,B,K,O,U,q,G,z,F,J,Q,W,X,Y,Z,ee,te,se,ae,le,re,ne,ce,oe,ie,he,fe,me,ve,de,pe;function ue(e,t){return e[8]?P:L}let ge=ue(e),xe=ge(e),Ee=e[2],be=[];for(let t=0;t<Ee.length;t+=1)be[t]=A(H(e,Ee,t));let ye=e[3],_e=[];for(let t=0;t<ye.length;t+=1)_e[t]=N(T(e,ye,t));let je=0!==e[4].length&&S(e);return{c(){t=a("div"),s=a("div"),x=a("div"),E=a("img"),y=l(),_=a("div"),j=a("div"),I=a("h3"),k=r(e[0]),D=l(),V=a("h3"),$=a("span"),xe.c(),C=l(),M=a("hr"),R=l(),B=a("div"),K=a("span"),O=r("Preparation\n                    Time:\n                    "),U=r(e[5]),q=l(),G=a("span"),z=r("Cook\n                    Time:\n                    "),F=r(e[6]),J=l(),Q=a("span"),W=r("Total Time:\n                    "),X=r(e[7]),Y=l(),Z=a("div"),ee=a("div"),te=l(),se=a("h5"),ae=r("Ingredients"),le=l();for(let e=0;e<be.length;e+=1)be[e].c();re=l(),ne=a("hr"),ce=l(),oe=a("div"),ie=a("div"),he=a("h5"),fe=r("Method"),me=l(),ve=a("ol");for(let e=0;e<_e.length;e+=1)_e[e].c();de=l(),je&&je.c(),pe=u(),this.h()},l(a){t=n(a,"DIV",{class:!0});var l=c(t);s=n(l,"DIV",{class:!0});var r=c(s);x=n(r,"DIV",{class:!0});var f=c(x);E=n(f,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),f.forEach(h),y=o(r),_=n(r,"DIV",{class:!0});var m=c(_);j=n(m,"DIV",{class:!0});var v=c(j);I=n(v,"H3",{class:!0});var d=c(I);k=i(d,e[0]),d.forEach(h),D=o(v),V=n(v,"H3",{class:!0,id:!0});var p=c(V);$=n(p,"SPAN",{class:!0});var g=c($);xe.l(g),g.forEach(h),p.forEach(h),v.forEach(h),C=o(m),M=n(m,"HR",{class:!0}),R=o(m),B=n(m,"DIV",{class:!0});var b=c(B);K=n(b,"SPAN",{class:!0});var w=c(K);O=i(w,"Preparation\n                    Time:\n                    "),U=i(w,e[5]),w.forEach(h),q=o(b),G=n(b,"SPAN",{class:!0});var T=c(G);z=i(T,"Cook\n                    Time:\n                    "),F=i(T,e[6]),T.forEach(h),J=o(b),Q=n(b,"SPAN",{class:!0});var H=c(Q);W=i(H,"Total Time:\n                    "),X=i(H,e[7]),H.forEach(h),b.forEach(h),m.forEach(h),r.forEach(h),Y=o(l),Z=n(l,"DIV",{});var L=c(Z);ee=n(L,"DIV",{class:!0}),c(ee).forEach(h),te=o(L),se=n(L,"H5",{class:!0});var P=c(se);ae=i(P,"Ingredients"),P.forEach(h),le=o(L);for(let e=0;e<be.length;e+=1)be[e].l(L);L.forEach(h),l.forEach(h),re=o(a),ne=n(a,"HR",{class:!0}),ce=o(a),oe=n(a,"DIV",{});var A=c(oe);ie=n(A,"DIV",{class:!0});var N=c(ie);he=n(N,"H5",{class:!0});var S=c(he);fe=i(S,"Method"),S.forEach(h),me=o(N),ve=n(N,"OL",{});var ue=c(ve);for(let e=0;e<_e.length;e+=1)_e[e].l(ue);ue.forEach(h),N.forEach(h),A.forEach(h),de=o(a),je&&je.l(a),pe=u(),this.h()},h(){E.src!==(b=e[1])&&f(E,"src",b),f(E,"width","150px"),f(E,"height","150px"),f(E,"alt",e[0]),f(E,"class","svelte-jyvrx"),f(x,"class","col-auto d-none d-lg-block"),f(I,"class","mb-0 pl-3 svelte-jyvrx"),f($,"class",w="material-icons "+(e[8]?"ff3e00":void 0)+" svelte-jyvrx"),f(V,"class","mb-0 pr-3 save-button svelte-jyvrx"),f(V,"id","save-button"),f(j,"class","d-flex justify-content-between row"),f(M,"class","svelte-jyvrx"),f(K,"class","col badge badge-pill badge-secondary svelte-jyvrx"),f(G,"class","col badge badge-pill badge-secondary svelte-jyvrx"),f(Q,"class","col badge badge-pill badge-primary badge-ff3e00 svelte-jyvrx"),f(B,"class","row"),f(_,"class","col p-4 d-flex flex-column position-static"),f(s,"class","row no-gutters border rounded overflow-hidden flex-md-row mb-4 position-relative"),f(ee,"class","col"),f(se,"class","svelte-jyvrx"),f(t,"class","container-fluid"),f(ne,"class","svelte-jyvrx"),f(he,"class","svelte-jyvrx"),f(ie,"class","col")},m(e,a){m(e,t,a),v(t,s),v(s,x),v(x,E),v(s,y),v(s,_),v(_,j),v(j,I),v(I,k),v(j,D),v(j,V),v(V,$),xe.m($,null),v(_,C),v(_,M),v(_,R),v(_,B),v(B,K),v(K,O),v(K,U),v(B,q),v(B,G),v(G,z),v(G,F),v(B,J),v(B,Q),v(Q,W),v(Q,X),v(t,Y),v(t,Z),v(Z,ee),v(Z,te),v(Z,se),v(se,ae),v(Z,le);for(let e=0;e<be.length;e+=1)be[e].m(Z,null);m(e,re,a),m(e,ne,a),m(e,ce,a),m(e,oe,a),v(oe,ie),v(ie,he),v(he,fe),v(ie,me),v(ie,ve);for(let e=0;e<_e.length;e+=1)_e[e].m(ve,null);m(e,de,a),je&&je.m(e,a),m(e,pe,a)},p(e,[t]){if(2&t&&E.src!==(b=e[1])&&f(E,"src",b),1&t&&f(E,"alt",e[0]),1&t&&d(k,e[0]),ge!==(ge=ue(e))&&(xe.d(1),xe=ge(e),xe&&(xe.c(),xe.m($,null))),256&t&&w!==(w="material-icons "+(e[8]?"ff3e00":void 0)+" svelte-jyvrx")&&f($,"class",w),32&t&&d(U,e[5]),64&t&&d(F,e[6]),128&t&&d(X,e[7]),4&t){let s;for(Ee=e[2],s=0;s<Ee.length;s+=1){const a=H(e,Ee,s);be[s]?be[s].p(a,t):(be[s]=A(a),be[s].c(),be[s].m(Z,null))}for(;s<be.length;s+=1)be[s].d(1);be.length=Ee.length}if(8&t){let s;for(ye=e[3],s=0;s<ye.length;s+=1){const a=T(e,ye,s);_e[s]?_e[s].p(a,t):(_e[s]=N(a),_e[s].c(),_e[s].m(ve,null))}for(;s<_e.length;s+=1)_e[s].d(1);_e.length=ye.length}0!==e[4].length?je?je.p(e,t):(je=S(e),je.c(),je.m(pe.parentNode,pe)):je&&(je.d(1),je=null)},i:g,o:g,d(e){e&&h(t),xe.d(),p(be,e),e&&h(re),e&&h(ne),e&&h(ce),e&&h(oe),p(_e,e),e&&h(de),je&&je.d(e),e&&h(pe)}}}function R(e){return e=(e=e.toLowerCase()).split(" ").join("-")}function B(e,t,s){let a;x(e,$,(e=>s(9,a=e)));let{name:l}=t,{image:r}=t,{ingredients:n}=t,{steps:c}=t,{tips:o}=t,{preparation_time:i}=t,{cook_time:h}=t,{total_time:f}=t,m=a.includes(R(l));return E((()=>{document.getElementById("save-button").addEventListener("click",(()=>{a.includes(R(l))?(a.splice(a.indexOf(R(l)),1),$.set(a)):b($,a=[...a,R(l)],a),s(8,m=!m)}))})),e.$$set=e=>{"name"in e&&s(0,l=e.name),"image"in e&&s(1,r=e.image),"ingredients"in e&&s(2,n=e.ingredients),"steps"in e&&s(3,c=e.steps),"tips"in e&&s(4,o=e.tips),"preparation_time"in e&&s(5,i=e.preparation_time),"cook_time"in e&&s(6,h=e.cook_time),"total_time"in e&&s(7,f=e.total_time)},[l,r,n,c,o,i,h,f,m]}class K extends e{constructor(e){super(),t(this,e,B,M,s,{name:0,image:1,ingredients:2,steps:3,tips:4,preparation_time:5,cook_time:6,total_time:7})}}function O(e){let t,s,r,i,d,p;return document.title=t="Kitchefs | "+e[0].name,d=new K({props:{name:e[0].name,image:e[0].image,ingredients:e[0].ingredients,steps:e[0].steps,tips:e[0].tips,preparation_time:e[0].preparation_time,cook_time:e[0].cook_time,total_time:e[0].total_time}}),{c(){s=l(),r=a("div"),i=a("div"),y(d.$$.fragment),this.h()},l(e){_('[data-svelte="svelte-o0jovu"]',document.head).forEach(h),s=o(e),r=n(e,"DIV",{class:!0});var t=c(r);i=n(t,"DIV",{class:!0});var a=c(i);j(d.$$.fragment,a),a.forEach(h),t.forEach(h),this.h()},h(){f(i,"class","row"),f(r,"class","container")},m(e,t){m(e,s,t),m(e,r,t),v(r,i),I(d,i,null),p=!0},p(e,[s]){(!p||1&s)&&t!==(t="Kitchefs | "+e[0].name)&&(document.title=t);const a={};1&s&&(a.name=e[0].name),1&s&&(a.image=e[0].image),1&s&&(a.ingredients=e[0].ingredients),1&s&&(a.steps=e[0].steps),1&s&&(a.tips=e[0].tips),1&s&&(a.preparation_time=e[0].preparation_time),1&s&&(a.cook_time=e[0].cook_time),1&s&&(a.total_time=e[0].total_time),d.$set(a)},i(e){p||(k(d.$$.fragment,e),p=!0)},o(e){D(d.$$.fragment,e),p=!1},d(e){e&&h(s),e&&h(r),V(d)}}}async function U({params:e}){const t=await this.fetch(`recipes/${e.slug}.json`),s=await t.json();if(200===t.status)return{recipe:s};this.error(t.status,s.message)}function q(e,t,s){let{recipe:a}=t;return e.$$set=e=>{"recipe"in e&&s(0,a=e.recipe)},[a]}export default class extends e{constructor(e){super(),t(this,e,q,O,s,{recipe:0})}}export{U as preload};