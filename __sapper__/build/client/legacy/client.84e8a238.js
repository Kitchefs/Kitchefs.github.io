function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e,r,n,o=(function(e){var r=function(e){var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new R(n||[]);return a._invoke=function(t,e,r){var n=p;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",m={};function g(){}function y(){}function b(){}var $={};$[i]=function(){return this};var x=Object.getPrototypeOf,_=x&&x(x(O([])));_&&_!==n&&o.call(_,i)&&($=_);var w=b.prototype=g.prototype=Object.create($);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,r){function n(a,i,c,u){var s=l(e[a],e,i);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===t(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(p).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:r,done:!0}}return y.prototype=w.constructor=b,b.constructor=y,y.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),s(w,u,"Generator"),w[i]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?l(e):r}function h(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(){}function g(t,e){for(var r in e)t[r]=e[r];return t}function y(t){return t()}function b(){return Object.create(null)}function $(t){t.forEach(y)}function x(t){return"function"==typeof t}function _(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function w(t,e,r){t.$$.on_destroy.push(function(t){if(null==t)return m;for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var o=t.subscribe.apply(t,r);return o.unsubscribe?function(){return o.unsubscribe()}:o}(e,r))}function E(t,e,r,n){return t[1]&&n?g(r.ctx.slice(),t[1](n(e))):r.ctx}function S(e,r,n,o,a,i,c){var u=function(e,r,n,o){if(e[2]&&o){var a=e[2](o(n));if(void 0===r.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(r.dirty.length,a.length),u=0;u<c;u+=1)i[u]=r.dirty[u]|a[u];return i}return r.dirty|a}return r.dirty}(r,o,a,i);if(u){var s=E(r,n,o,c);e.p(s,u)}}function k(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return t.set(r),e}function j(t,e){t.appendChild(e)}function L(t,e,r){t.insertBefore(e,r||null)}function R(t){t.parentNode.removeChild(t)}function O(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function P(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function N(){return A(" ")}function I(){return A("")}function T(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function C(t){return Array.from(t.childNodes)}function U(t,e,r,n){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];r[u.name]||c.push(u.name)}for(var s=0;s<c.length;s++)a.removeAttribute(c[s]);return t.splice(o,1)[0]}}return n?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):P(e)}function q(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return A(e)}function D(t){return q(t," ")}function B(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function G(t){n=t}function J(){if(!n)throw new Error("Function called outside component initialization");return n}function z(t){J().$$.on_mount.push(t)}var K=[],M=[],V=[],H=[],Y=Promise.resolve(),W=!1;function X(t){V.push(t)}var Q=!1,Z=new Set;function tt(){if(!Q){Q=!0;do{for(var t=0;t<K.length;t+=1){var e=K[t];G(e),et(e.$$)}for(G(null),K.length=0;M.length;)M.pop()();for(var r=0;r<V.length;r+=1){var n=V[r];Z.has(n)||(Z.add(n),n())}V.length=0}while(K.length);for(;H.length;)H.pop()();W=!1,Q=!1,Z.clear()}}function et(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}var rt,nt=new Set;function ot(){rt={r:0,c:[],p:rt}}function at(){rt.r||$(rt.c),rt=rt.p}function it(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function ct(t,e,r,n){if(t&&t.o){if(nt.has(t))return;nt.add(t),rt.c.push((function(){nt.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}function ut(t,e){for(var r={},n={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(n[u]=1);for(var s in c)o[s]||(r[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in n)l in r||(r[l]=void 0);return r}function st(e){return"object"===t(e)&&null!==e?e:{}}function ft(t){t&&t.c()}function lt(t,e){t&&t.l(e)}function pt(t,e,r){var n=t.$$,o=n.fragment,a=n.on_mount,i=n.on_destroy,c=n.after_update;o&&o.m(e,r),X((function(){var e=a.map(y).filter(x);i?i.push.apply(i,h(e)):$(e),t.$$.on_mount=[]})),c.forEach(X)}function ht(t,e){var r=t.$$;null!==r.fragment&&($(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function dt(t,e){-1===t.$$.dirty[0]&&(K.push(t),W||(W=!0,Y.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(t,e,r,o,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=n;G(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c,skip_bound:!1},l=!1;if(f.ctx=r?r(t,s,(function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return f.ctx&&a(f.ctx[e],f.ctx[e]=n)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](n),l&&dt(t,e)),r})):[],f.update(),l=!0,$(f.before_update),f.fragment=!!o&&o(f.ctx),e.target){if(e.hydrate){var p=C(e.target);f.fragment&&f.fragment.l(p),p.forEach(R)}else f.fragment&&f.fragment.c();e.intro&&it(t.$$.fragment),pt(t,e.target,e.anchor),tt()}G(u)}var mt=function(){function t(){d(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){ht(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&v(e.prototype,r),n&&v(e,n),t}(),gt=[];function yt(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=[];function o(r){if(_(t,r)&&(t=r,e)){for(var o=!gt.length,a=0;a<n.length;a+=1){var i=n[a];i[1](),gt.push(i,t)}if(o){for(var c=0;c<gt.length;c+=2)gt[c][0](gt[c+1]);gt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return n.push(c),1===n.length&&(e=r(o)||m),a(t),function(){var t=n.indexOf(c);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var bt={};function $t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function xt(t){var e,r;return{c:function(){e=P("form"),r=P("input"),this.h()},l:function(t){var n=C(e=U(t,"FORM",{class:!0,id:!0}));r=U(n,"INPUT",{class:!0,type:!0,placeholder:!0,"aria-label":!0,id:!0}),n.forEach(R),this.h()},h:function(){T(r,"class","form-control mr-sm-2 svelte-1azaxct"),T(r,"type","text"),T(r,"placeholder","Search"),T(r,"aria-label","Search"),T(r,"id","search-bar"),T(e,"class","form-inline active-orange svelte-1azaxct"),T(e,"id","search-form")},m:function(t,n){L(t,e,n),j(e,r)},d:function(t){t&&R(e)}}}function _t(t){var e,r,n,o,a,i,u,s,f,l,p,h,d,v,g,y,b,$,x,_,w,E,S,k,O=(void 0===t[0]||"saved_items"===t[0])&&xt();return{c:function(){e=P("nav"),r=P("a"),n=A("Kitchefs"),o=N(),a=P("button"),i=P("span"),u=N(),s=P("div"),f=P("ul"),l=P("li"),p=P("a"),h=A("Home"),v=N(),g=P("li"),y=P("a"),b=A("Saved"),x=N(),_=P("li"),w=P("a"),E=A("Blog"),k=N(),O&&O.c(),this.h()},l:function(t){var c=C(e=U(t,"NAV",{class:!0})),d=C(r=U(c,"A",{class:!0,href:!0}));n=q(d,"Kitchefs"),d.forEach(R),o=D(c);var m=C(a=U(c,"BUTTON",{class:!0,type:!0,"data-toggle":!0,"data-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0}));C(i=U(m,"SPAN",{class:!0})).forEach(R),m.forEach(R),u=D(c);var $=C(s=U(c,"DIV",{class:!0,id:!0})),S=C(f=U($,"UL",{class:!0})),j=C(l=U(S,"LI",{class:!0})),L=C(p=U(j,"A",{"aria-current":!0,href:!0,class:!0}));h=q(L,"Home"),L.forEach(R),j.forEach(R),v=D(S);var P=C(g=U(S,"LI",{class:!0})),A=C(y=U(P,"A",{"aria-current":!0,href:!0,class:!0}));b=q(A,"Saved"),A.forEach(R),P.forEach(R),x=D(S);var N=C(_=U(S,"LI",{class:!0})),I=C(w=U(N,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));E=q(I,"Blog"),I.forEach(R),N.forEach(R),S.forEach(R),k=D($),O&&O.l($),$.forEach(R),c.forEach(R),this.h()},h:function(){T(r,"class","kitchefs-brand svelte-1azaxct"),T(r,"href","."),T(i,"class","navbar-toggler-icon"),T(a,"class","navbar-toggler"),T(a,"type","button"),T(a,"data-toggle","collapse"),T(a,"data-target","#kitchefs-navbar"),T(a,"aria-controls","kitchefs-navbar"),T(a,"aria-expanded","false"),T(a,"aria-label","Toggle navigation"),T(p,"aria-current",d=void 0===t[0]?"page":void 0),T(p,"href","."),T(p,"class","svelte-1azaxct"),T(l,"class","col-md m-0 p-0"),T(y,"aria-current",$="saved_items"===t[0]?"page":void 0),T(y,"href","saved_items"),T(y,"class","svelte-1azaxct"),T(g,"class","col-md m-0 p-0"),T(w,"rel","prefetch"),T(w,"aria-current",S="blog"===t[0]?"page":void 0),T(w,"href","blog"),T(w,"class","svelte-1azaxct"),T(_,"class","col-md m-0 p-0"),T(f,"class","navbar-nav flex-row mr-auto"),T(s,"class","collapse navbar-collapse"),T(s,"id","kitchefs-navbar"),T(e,"class","navbar navbar-expand-md navbar-dark bg-dark fixed-top svelte-1azaxct")},m:function(t,c){L(t,e,c),j(e,r),j(r,n),j(e,o),j(e,a),j(a,i),j(e,u),j(e,s),j(s,f),j(f,l),j(l,p),j(p,h),j(f,v),j(f,g),j(g,y),j(y,b),j(f,x),j(f,_),j(_,w),j(w,E),j(s,k),O&&O.m(s,null)},p:function(t,e){var r=c(e,1)[0];1&r&&d!==(d=void 0===t[0]?"page":void 0)&&T(p,"aria-current",d),1&r&&$!==($="saved_items"===t[0]?"page":void 0)&&T(y,"aria-current",$),1&r&&S!==(S="blog"===t[0]?"page":void 0)&&T(w,"aria-current",S),void 0===t[0]||"saved_items"===t[0]?O||((O=xt()).c(),O.m(s,null)):O&&(O.d(1),O=null)},i:m,o:m,d:function(t){t&&R(e),O&&O.d()}}}function wt(t,e,r){var n=e.segment;return z((function(){var t,e,r;function n(t,e){return t=t.split(" ").join(""),e=e.split(" ").join(""),t.includes(e)||e.includes(t)}document.getElementById("search-bar").addEventListener("keyup",(function(){t=document.getElementById("search-bar").value.toLowerCase(),document.querySelectorAll(".item").forEach((function(o,a,i){e=o.getAttribute("item-name").split("-").join(" "),r=o.getAttribute("category-name").split("-").join(" "),n(t,e)||n(t,r)||""===t?o.style.display="block":o.style.display="none"}))})),document.getElementById("search-form").addEventListener("submit",(function(t){t.preventDefault()}))})),t.$$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var Et=function(t){f(r,mt);var e=$t(r);function r(t){var n;return d(this,r),vt(l(n=e.call(this)),t,wt,_t,_,{segment:0}),n}return r}();function St(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function kt(t){var e,r,n,o,a,i,u,s,f,l;e=new Et({props:{segment:t[0]}});var p=t[2].default,h=function(t,e,r,n){if(t){var o=E(t,e,r,n);return t[0](o)}}(p,t,t[1],null);return{c:function(){ft(e.$$.fragment),r=N(),n=P("main"),h&&h.c(),o=N(),a=P("footer"),i=P("div"),u=P("p"),s=P("a"),f=A("Subscribe to our Newsletter"),this.h()},l:function(t){lt(e.$$.fragment,t),r=D(t);var c=C(n=U(t,"MAIN",{class:!0}));h&&h.l(c),c.forEach(R),o=D(t);var l=C(a=U(t,"FOOTER",{class:!0})),p=C(i=U(l,"DIV",{class:!0})),d=C(u=U(p,"P",{style:!0})),v=C(s=U(d,"A",{href:!0}));f=q(v,"Subscribe to our Newsletter"),v.forEach(R),d.forEach(R),p.forEach(R),l.forEach(R),this.h()},h:function(){var t,e,r;T(n,"class","svelte-1uhnsl8"),T(s,"href","https://mailchi.mp/5aaa86aeacdd/kitchefs-newsletter"),t="text-align",e="center",u.style.setProperty(t,e,r?"important":""),T(i,"class","container"),T(a,"class","footer")},m:function(t,c){pt(e,t,c),L(t,r,c),L(t,n,c),h&&h.m(n,null),L(t,o,c),L(t,a,c),j(a,i),j(i,u),j(u,s),j(s,f),l=!0},p:function(t,r){var n=c(r,1)[0],o={};1&n&&(o.segment=t[0]),e.$set(o),h&&h.p&&2&n&&S(h,p,t,t[1],n,null,null)},i:function(t){l||(it(e.$$.fragment,t),it(h,t),l=!0)},o:function(t){ct(e.$$.fragment,t),ct(h,t),l=!1},d:function(t){ht(e,t),t&&R(r),t&&R(n),h&&h.d(t),t&&R(o),t&&R(a)}}}function jt(t,e,r){var n=e.$$slots,o=void 0===n?{}:n,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&r(0,i=t.segment),"$$scope"in t&&r(1,a=t.$$scope)},[i,a,o]}var Lt=function(t){f(r,mt);var e=St(r);function r(t){var n;return d(this,r),vt(l(n=e.call(this)),t,jt,kt,_,{segment:0}),n}return r}();function Rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Ot(t){var e,r,n=t[1].stack+"";return{c:function(){e=P("pre"),r=A(n)},l:function(t){var o=C(e=U(t,"PRE",{}));r=q(o,n),o.forEach(R)},m:function(t,n){L(t,e,n),j(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&B(r,n)},d:function(t){t&&R(e)}}}function Pt(t){var e,r,n,o,a,i,u,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Ot(t);return{c:function(){r=N(),n=P("h1"),o=A(t[0]),a=N(),i=P("p"),u=A(l),s=N(),p&&p.c(),f=I(),this.h()},l:function(e){F('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(R),r=D(e);var c=C(n=U(e,"H1",{class:!0}));o=q(c,t[0]),c.forEach(R),a=D(e);var h=C(i=U(e,"P",{class:!0}));u=q(h,l),h.forEach(R),s=D(e),p&&p.l(e),f=I(),this.h()},h:function(){T(n,"class","svelte-8od9u6"),T(i,"class","svelte-8od9u6")},m:function(t,e){L(t,r,e),L(t,n,e),j(n,o),L(t,a,e),L(t,i,e),j(i,u),L(t,s,e),p&&p.m(t,e),L(t,f,e)},p:function(t,r){var n=c(r,1)[0];1&n&&e!==(e=t[0])&&(document.title=e),1&n&&B(o,t[0]),2&n&&l!==(l=t[1].message+"")&&B(u,l),t[2]&&t[1].stack?p?p.p(t,n):((p=Ot(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&R(r),t&&R(n),t&&R(a),t&&R(i),t&&R(s),p&&p.d(t),t&&R(f)}}}function At(t,e,r){var n=e.status,o=e.error;return t.$$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,false]}var Nt=function(t){f(r,mt);var e=Rt(r);function r(t){var n;return d(this,r),vt(l(n=e.call(this)),t,At,Pt,_,{status:0,error:1}),n}return r}();function It(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Tt(t){var e,r,n,o=[t[4].props],a=t[4].component;function i(t){for(var e={},r=0;r<o.length;r+=1)e=g(e,o[r]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&ft(e.$$.fragment),r=I()},l:function(t){e&&lt(e.$$.fragment,t),r=I()},m:function(t,o){e&&pt(e,t,o),L(t,r,o),n=!0},p:function(t,n){var c=16&n?ut(o,[st(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){ot();var u=e;ct(u.$$.fragment,1,0,(function(){ht(u,1)})),at()}a?(ft((e=new a(i())).$$.fragment),it(e.$$.fragment,1),pt(e,r.parentNode,r)):e=null}else a&&e.$set(c)},i:function(t){n||(e&&it(e.$$.fragment,t),n=!0)},o:function(t){e&&ct(e.$$.fragment,t),n=!1},d:function(t){t&&R(r),e&&ht(e,t)}}}function Ct(t){var e,r;return e=new Nt({props:{error:t[0],status:t[1]}}),{c:function(){ft(e.$$.fragment)},l:function(t){lt(e.$$.fragment,t)},m:function(t,n){pt(e,t,n),r=!0},p:function(t,r){var n={};1&r&&(n.error=t[0]),2&r&&(n.status=t[1]),e.$set(n)},i:function(t){r||(it(e.$$.fragment,t),r=!0)},o:function(t){ct(e.$$.fragment,t),r=!1},d:function(t){ht(e,t)}}}function Ut(t){var e,r,n,o,a=[Ct,Tt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),r=i[e]=a[e](t),{c:function(){r.c(),n=I()},l:function(t){r.l(t),n=I()},m:function(t,r){i[e].m(t,r),L(t,n,r),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(ot(),ct(i[u],1,1,(function(){i[u]=null})),at(),(r=i[e])||(r=i[e]=a[e](t)).c(),it(r,1),r.m(n.parentNode,n))},i:function(t){o||(it(r),o=!0)},o:function(t){ct(r),o=!1},d:function(t){i[e].d(t),t&&R(n)}}}function qt(t){for(var e,r,n=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Ut]},$$scope:{ctx:t}},a=0;a<n.length;a+=1)o=g(o,n[a]);return e=new Lt({props:o}),{c:function(){ft(e.$$.fragment)},l:function(t){lt(e.$$.fragment,t)},m:function(t,n){pt(e,t,n),r=!0},p:function(t,r){var o=c(r,1)[0],a=12&o?ut(n,[4&o&&{segment:t[2][0]},8&o&&st(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i:function(t){r||(it(e.$$.fragment,t),r=!0)},o:function(t){ct(e.$$.fragment,t),r=!1},d:function(t){ht(e,t)}}}function Dt(t,e,r){var n,o,a=e.stores,i=e.error,c=e.status,u=e.segments,s=e.level0,f=e.level1,l=void 0===f?null:f,p=e.notify;return function(t){J().$$.after_update.push(t)}(p),n=bt,o=a,J().$$.context.set(n,o),t.$$set=function(t){"stores"in t&&r(5,a=t.stores),"error"in t&&r(0,i=t.error),"status"in t&&r(1,c=t.status),"segments"in t&&r(2,u=t.segments),"level0"in t&&r(3,s=t.level0),"level1"in t&&r(4,l=t.level1),"notify"in t&&r(6,p=t.notify)},[i,c,u,s,l,a,p]}var Bt,Ft=function(t){f(r,mt);var e=It(r);function r(t){var n;return d(this,r),vt(l(n=e.call(this)),t,Dt,qt,_,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),n}return r}(),Gt=[/^\/recipes\.json$/,/^\/recipes\/([^/]+?)\.json$/,/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],Jt=[{js:function(){return Promise.all([import("./index.a12fcf2c.js"),__inject_styles(["client-60cbb6fe.css","item-f24d2752.css","index-6336c92a.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./saved_items.61bb56a9.js"),__inject_styles(["client-60cbb6fe.css","item-f24d2752.css","saved_items-1b10da01.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[slug].06ed05ea.js"),__inject_styles(["client-60cbb6fe.css","[slug]-87589b1e.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.29ddc138.js"),__inject_styles(["client-60cbb6fe.css","index-2317491d.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[slug].d3632b44.js"),__inject_styles(["client-60cbb6fe.css","[slug]-6c334b02.css"])]).then((function(t){return t[0]}))}}],zt=(Bt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/saved_items\/?$/,parts:[{i:1}]},{pattern:/^\/recipes\/([^/]+?)\/?$/,parts:[null,{i:2,params:function(t){return{slug:Bt(t[1])}}}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:4,params:function(t){return{slug:Bt(t[1])}}}]}]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Kt(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{u(n.next(t))}catch(t){a(t)}}function c(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,c)}u((n=n.apply(t,e||[])).next())}))}function Mt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Vt,Ht=1;var Yt,Wt,Xt="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},Qt={};function Zt(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var n=c(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=n[1],a=n[2],i=void 0===a?"":a;"string"==typeof r[o]&&(r[o]=[r[o]]),"object"===t(r[o])?r[o].push(i):r[o]=i})),r}function te(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Yt))return null;var e=t.pathname.slice(Yt.length);if(""===e&&(e="/"),!Gt.some((function(t){return t.test(e)})))for(var r=0;r<zt.length;r+=1){var n=zt[r],o=n.pattern.exec(e);if(o){var a=Zt(t.search),i=n.parts[n.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:n,match:o,page:u}}}}function ee(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var r=Mt(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&!(n?r.target.baseVal:r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=te(a);if(i)oe(i,null,r.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),Xt.pushState({id:Vt},"",a.href)}}}else location.hash||e.preventDefault()}}}function re(){return{x:pageXOffset,y:pageYOffset}}function ne(t){if(Qt[Vt]=re(),t.state){var e=te(new URL(location.href));e?oe(e,t.state.id):location.href=location.href}else(function(t){Vt=t})(Ht=Ht+1),Xt.replaceState({id:Vt},"",location.href)}function oe(t,e,r,n){return Kt(this,void 0,void 0,o.mark((function a(){var i,c,u,s;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(i=!!e)?Vt=e:(c=re(),Qt[Vt]=c,Vt=e=++Ht,Qt[Vt]=r?c:{x:0,y:0}),o.next=4,Wt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),r||(u=Qt[e],n&&(s=document.getElementById(n.slice(1)))&&(u={x:0,y:s.getBoundingClientRect().top+scrollY}),Qt[Vt]=u,i||s?scrollTo(u.x,u.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),a)})))}function ae(t){var e=t.baseURI;if(!e){var r=t.getElementsByTagName("base");e=r.length?r[0].href:t.URL}return e}var ie,ce=null;function ue(t){return ce&&ce.href===t.href?ce.promise:Oe(t)}function se(t){var e=Mt(t.target);e&&"prefetch"===e.rel&&function(t){var e=te(new URL(t,ae(document)));if(e)ce&&t===ce.href||(ce={href:t,promise:Oe(e)}),ce.promise}(e.href)}function fe(t){clearTimeout(ie),ie=setTimeout((function(){se(t)}),20)}function le(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},r=te(new URL(t,ae(document)));return r?(Xt[e.replaceState?"replaceState":"pushState"]({id:Vt},"",t),oe(r,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var pe,he,de,ve,me,ge,ye,be,$e,xe="undefined"!=typeof __SAPPER__&&__SAPPER__,_e=!1,we=[],Ee="{}",Se={page:function(t){var e=yt(t),r=!0;return{notify:function(){r=!0,e.update((function(t){return t}))},set:function(t){r=!1,e.set(t)},subscribe:function(t){var n;return e.subscribe((function(e){(void 0===n||r&&e!==n)&&t(n=e)}))}}}({}),preloading:yt(null),session:yt(xe&&xe.session)};function ke(t,e){var r=t.error;return Object.assign({error:r},e)}function je(t){return Kt(this,void 0,void 0,o.mark((function e(){var r,n,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pe&&Se.preloading.set(!0),r=ue(t),n=he={},e.next=5,r;case 5:if(a=e.sent,i=a.redirect,n===he){e.next=9;break}return e.abrupt("return");case 9:if(!i){e.next=14;break}return e.next=12,le(i.location,{replaceState:!0});case 12:e.next=17;break;case 14:return c=a.props,u=a.branch,e.next=17,Le(u,c,ke(c,t.page));case 17:case"end":return e.stop()}}),e)})))}function Le(t,e,r){return Kt(this,void 0,void 0,o.mark((function n(){return o.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(Se.page.set(r),Se.preloading.set(!1),!pe){n.next=6;break}pe.$set(e),n.next=13;break;case 6:return e.stores={page:{subscribe:Se.page.subscribe},preloading:{subscribe:Se.preloading.subscribe},session:Se.session},n.next=9,de;case 9:n.t0=n.sent,e.level0={props:n.t0},e.notify=Se.page.notify,pe=new Ft({target:ge,props:e,hydrate:!0});case 13:we=t,Ee=JSON.stringify(r.query),_e=!0,me=!1;case 17:case"end":return n.stop()}}),n)})))}function Re(t,e,r,n){if(n!==Ee)return!0;var o=we[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function Oe(t){return Kt(this,void 0,void 0,o.mark((function e(){var r,n,a,i,c,u,s,f,l,p,h,d,v=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,n=t.page,a=n.path.split("/").filter(Boolean),i=null,c={error:null,status:200,segments:[a[0]]},u={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},de||(s=function(){return{}},de=xe.preloaded[0]||s.call(u,{host:n.host,path:n.path,query:n.query,params:{}},ve)),l=1,e.prev=7,p=JSON.stringify(n.query),h=r.pattern.exec(n.path),d=!1,e.next=13,Promise.all(r.parts.map((function(e,r){return Kt(v,void 0,void 0,o.mark((function i(){var s,f,v,m,g,y;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(s=a[r],Re(r,s,h,p)&&(d=!0),c.segments[l]=a[r+1],e){o.next=5;break}return o.abrupt("return",{segment:s});case 5:if(f=l++,me||d||!we[r]||we[r].part!==e.i){o.next=8;break}return o.abrupt("return",we[r]);case 8:return d=!1,o.next=11,Jt[e.i].js();case 11:if(v=o.sent,m=v.default,g=v.preload,!_e&&xe.preloaded[r+1]){o.next=25;break}if(!g){o.next=21;break}return o.next=18,g.call(u,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ve);case 18:o.t0=o.sent,o.next=22;break;case 21:o.t0={};case 22:y=o.t0,o.next=26;break;case 25:y=xe.preloaded[r+1];case 26:return o.abrupt("return",c["level".concat(f)]={component:m,props:y,segment:s,match:h,part:e.i});case 27:case"end":return o.stop()}}),i)})))})));case 13:f=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),c.error=e.t0,c.status=500,f=[];case 21:return e.abrupt("return",{redirect:i,props:c,branch:f});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}Se.session.subscribe((function(t){return Kt(void 0,void 0,void 0,o.mark((function e(){var r,n,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ve=t,_e){e.next=3;break}return e.abrupt("return");case 3:return me=!0,r=te(new URL(location.href)),n=he={},e.next=8,Oe(r);case 8:if(a=e.sent,i=a.redirect,c=a.props,u=a.branch,n===he){e.next=14;break}return e.abrupt("return");case 14:if(!i){e.next=19;break}return e.next=17,le(i.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,Le(u,c,ke(c,r.page));case 21:case"end":return e.stop()}}),e)})))})),ye={target:document.querySelector("#sapper")},be=ye.target,ge=be,$e=xe.baseUrl,Yt=$e,Wt=je,"scrollRestoration"in Xt&&(Xt.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Xt.scrollRestoration="auto"})),addEventListener("load",(function(){Xt.scrollRestoration="manual"})),addEventListener("click",ee),addEventListener("popstate",ne),addEventListener("touchstart",se),addEventListener("mousemove",fe),xe.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,r=t.pathname,n=t.search,o=xe.session,a=xe.preloaded,i=xe.status,c=xe.error;de||(de=a&&a[0]);var u={error:c,status:i,session:o,level0:{props:de},level1:{props:{status:i,error:c},component:Nt},segments:a},s=Zt(n);Le([],u,{host:e,path:r,query:s,params:{},error:c})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,r=t.href;Xt.replaceState({id:Ht},"",r);var n=te(new URL(location.href));if(n)return oe(n,Ht,!0,e)}));export{ht as A,at as B,O as C,F as D,ot as E,w as F,yt as G,z as H,k as I,h as J,o as K,mt as S,f as _,u as a,p as b,d as c,l as d,P as e,N as f,U as g,C as h,vt as i,q as j,R as k,D as l,T as m,L as n,j as o,c as p,B as q,m as r,_ as s,A as t,I as u,it as v,ft as w,lt as x,pt as y,ct as z};

import __inject_styles from './inject_styles.fe622066.js';