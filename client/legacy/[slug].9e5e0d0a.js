import{F as t,_ as n,a as e,b as s,c as r,i as a,d as c,S as o,s as u,f as i,e as f,t as l,y as h,l as p,j as v,g as m,h as d,k as y,m as x,n as b,o as g,p as j,q as R,r as k}from"./client.4fa9e761.js";import{_ as D}from"./asyncToGenerator.5229e80b.js";function E(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=e(t);if(n){var c=e(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return s(this,r)}}function H(t){var n,e,s,r,a,c,o=t[0].title+"",u=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=i(),s=f("h1"),r=l(o),a=i(),c=f("div"),this.h()},l:function(t){h('[data-svelte="svelte-1uty71u"]',document.head).forEach(p),e=v(t),s=m(t,"H1",{class:!0});var n=d(s);r=y(n,o),n.forEach(p),a=v(t),c=m(t,"DIV",{class:!0}),d(c).forEach(p),this.h()},h:function(){x(s,"class","svelte-1vcounn"),x(c,"class","content svelte-1vcounn")},m:function(t,n){b(t,e,n),b(t,s,n),g(s,r),b(t,a,n),b(t,c,n),c.innerHTML=u},p:function(t,e){var s=j(e,1)[0];1&s&&n!==(n=t[0].title)&&(document.title=n),1&s&&o!==(o=t[0].title+"")&&R(r,o),1&s&&u!==(u=t[0].html+"")&&(c.innerHTML=u)},i:k,o:k,d:function(t){t&&p(e),t&&p(s),t&&p(a),t&&p(c)}}}function T(t){return w.apply(this,arguments)}function w(){return(w=D(t.mark((function n(e){var s,r,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.params,t.next=3,this.fetch("blog/".concat(s.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(r.status,a.message);case 12:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function L(t,n,e){var s=n.post;return t.$$set=function(t){"post"in t&&e(0,s=t.post)},[s]}var M=function(t){n(s,o);var e=E(s);function s(t){var n;return r(this,s),n=e.call(this),a(c(n),t,L,H,u,{post:0}),n}return s}();export default M;export{T as preload};