function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e,r,n,o=(function(e){var r=function(e){var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n=p;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",m={};function g(){}function y(){}function b(){}var $={};$[i]=function(){return this};var x=Object.getPrototypeOf,_=x&&x(x(O([])));_&&_!==n&&o.call(_,i)&&($=_);var w=b.prototype=g.prototype=Object.create($);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,r){function n(a,i,c,u){var f=l(e[a],e,i);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"===t(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(p).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(f.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:r,done:!0}}return y.prototype=w.constructor=b,b.constructor=y,y.displayName=f(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),f(w,u,"Generator"),w[i]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),f=o.call(i,"finallyLoc");if(u&&f){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?l(e):r}function h(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(){}function g(t,e){for(var r in e)t[r]=e[r];return t}function y(t){return t()}function b(){return Object.create(null)}function $(t){t.forEach(y)}function x(t){return"function"==typeof t}function _(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function w(t,e,r,n){return t[1]&&n?g(r.ctx.slice(),t[1](n(e))):r.ctx}function E(e,r,n,o,a,i,c){var u=function(e,r,n,o){if(e[2]&&o){var a=e[2](o(n));if(void 0===r.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(r.dirty.length,a.length),u=0;u<c;u+=1)i[u]=r.dirty[u]|a[u];return i}return r.dirty|a}return r.dirty}(r,o,a,i);if(u){var f=w(r,n,o,c);e.p(f,u)}}function S(t,e){t.appendChild(e)}function j(t,e,r){t.insertBefore(e,r||null)}function k(t){t.parentNode.removeChild(t)}function R(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function L(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function P(){return O(" ")}function A(){return O("")}function N(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function T(t){return Array.from(t.childNodes)}function I(t,e,r,n){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];r[u.name]||c.push(u.name)}for(var f=0;f<c.length;f++)a.removeAttribute(c[f]);return t.splice(o,1)[0]}}return n?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):L(e)}function C(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return O(e)}function U(t){return C(t," ")}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function B(t){n=t}function G(){if(!n)throw new Error("Function called outside component initialization");return n}var J=[],F=[],K=[],M=[],V=Promise.resolve(),H=!1;function Y(t){K.push(t)}var z=!1,W=new Set;function X(){if(!z){z=!0;do{for(var t=0;t<J.length;t+=1){var e=J[t];B(e),Q(e.$$)}for(B(null),J.length=0;F.length;)F.pop()();for(var r=0;r<K.length;r+=1){var n=K[r];W.has(n)||(W.add(n),n())}K.length=0}while(J.length);for(;M.length;)M.pop()();H=!1,z=!1,W.clear()}}function Q(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}var Z,tt=new Set;function et(){Z={r:0,c:[],p:Z}}function rt(){Z.r||$(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,r,n){if(t&&t.o){if(tt.has(t))return;tt.add(t),Z.c.push((function(){tt.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}function at(t,e){for(var r={},n={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(n[u]=1);for(var f in c)o[f]||(r[f]=c[f],o[f]=1);t[a]=c}else for(var s in i)o[s]=1}for(var l in n)l in r||(r[l]=void 0);return r}function it(e){return"object"===t(e)&&null!==e?e:{}}function ct(t){t&&t.c()}function ut(t,e){t&&t.l(e)}function ft(t,e,r){var n=t.$$,o=n.fragment,a=n.on_mount,i=n.on_destroy,c=n.after_update;o&&o.m(e,r),Y((function(){var e=a.map(y).filter(x);i?i.push.apply(i,h(e)):$(e),t.$$.on_mount=[]})),c.forEach(Y)}function st(t,e){var r=t.$$;null!==r.fragment&&($(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function lt(t,e){-1===t.$$.dirty[0]&&(J.push(t),H||(H=!0,V.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(t,e,r,o,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=n;B(t);var f=e.props||{},s=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c,skip_bound:!1},l=!1;if(s.ctx=r?r(t,f,(function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return s.ctx&&a(s.ctx[e],s.ctx[e]=n)&&(!s.skip_bound&&s.bound[e]&&s.bound[e](n),l&&lt(t,e)),r})):[],s.update(),l=!0,$(s.before_update),s.fragment=!!o&&o(s.ctx),e.target){if(e.hydrate){var p=T(e.target);s.fragment&&s.fragment.l(p),p.forEach(k)}else s.fragment&&s.fragment.c();e.intro&&nt(t.$$.fragment),ft(t,e.target,e.anchor),X()}B(u)}var ht=function(){function t(){d(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){st(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&v(e.prototype,r),n&&v(e,n),t}(),dt=[];function vt(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=[];function o(r){if(_(t,r)&&(t=r,e)){for(var o=!dt.length,a=0;a<n.length;a+=1){var i=n[a];i[1](),dt.push(i,t)}if(o){for(var c=0;c<dt.length;c+=2)dt[c][0](dt[c+1]);dt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return n.push(c),1===n.length&&(e=r(o)||m),a(t),function(){var t=n.indexOf(c);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var mt={};function gt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function yt(t){var e,r,n,o,a,i,u,f,s,l,p,h,d,v,g,y,b,$,x,_,w,E,R,A,D,q,B,G,J;return{c:function(){e=L("nav"),r=L("button"),n=L("span"),o=P(),a=L("div"),i=L("a"),u=O("K"),f=P(),s=L("ul"),l=L("li"),p=L("a"),h=O("Home"),v=P(),g=L("li"),y=L("a"),b=O("About"),x=P(),_=L("li"),w=L("a"),E=O("Blog"),A=P(),D=L("form"),q=L("input"),B=P(),G=L("button"),J=O("Search"),this.h()},l:function(t){var c=T(e=I(t,"NAV",{class:!0})),d=T(r=I(c,"BUTTON",{class:!0,type:!0,"data-toggle":!0,"data-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0}));T(n=I(d,"SPAN",{class:!0})).forEach(k),d.forEach(k),o=U(c);var m=T(a=I(c,"DIV",{class:!0,id:!0})),$=T(i=I(m,"A",{class:!0,href:!0}));u=C($,"K"),$.forEach(k),f=U(m);var S=T(s=I(m,"UL",{class:!0})),j=T(l=I(S,"LI",{})),R=T(p=I(j,"A",{"aria-current":!0,href:!0,class:!0}));h=C(R,"Home"),R.forEach(k),j.forEach(k),v=U(S);var L=T(g=I(S,"LI",{})),O=T(y=I(L,"A",{"aria-current":!0,href:!0,class:!0}));b=C(O,"About"),O.forEach(k),L.forEach(k),x=U(S);var P=T(_=I(S,"LI",{})),N=T(w=I(P,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));E=C(N,"Blog"),N.forEach(k),P.forEach(k),S.forEach(k),A=U(m);var F=T(D=I(m,"FORM",{class:!0,id:!0}));q=I(F,"INPUT",{class:!0,type:!0,placeholder:!0,"aria-label":!0}),B=U(F);var K=T(G=I(F,"BUTTON",{class:!0,type:!0,id:!0}));J=C(K,"Search"),K.forEach(k),F.forEach(k),m.forEach(k),c.forEach(k),this.h()},h:function(){N(n,"class","navbar-toggler-icon"),N(r,"class","navbar-toggler"),N(r,"type","button"),N(r,"data-toggle","collapse"),N(r,"data-target","#navbarsExampleDefault"),N(r,"aria-controls","navbarsExampleDefault"),N(r,"aria-expanded","false"),N(r,"aria-label","Toggle navigation"),N(i,"class","kitchefs-brand svelte-1rjdfut"),N(i,"href","."),N(p,"aria-current",d=void 0===t[0]?"page":void 0),N(p,"href","."),N(p,"class","svelte-1rjdfut"),N(y,"aria-current",$="about"===t[0]?"page":void 0),N(y,"href","about"),N(y,"class","svelte-1rjdfut"),N(w,"rel","prefetch"),N(w,"aria-current",R="blog"===t[0]?"page":void 0),N(w,"href","blog"),N(w,"class","svelte-1rjdfut"),N(s,"class","navbar-nav mr-auto"),N(q,"class","form-control mr-sm-2"),N(q,"type","text"),N(q,"placeholder","Search"),N(q,"aria-label","Search"),N(G,"class","btn btn-secondary my-2 my-sm-0"),N(G,"type","submit"),N(G,"id","search-bar-submit"),N(D,"class","form-inline my-2 my-lg-0"),N(D,"id","search-bar"),N(a,"class","collapse navbar-collapse"),N(a,"id","navbarsExampleDefault"),N(e,"class","navbar navbar-expand-md navbar-dark bg-dark fixed-top svelte-1rjdfut")},m:function(t,c){j(t,e,c),S(e,r),S(r,n),S(e,o),S(e,a),S(a,i),S(i,u),S(a,f),S(a,s),S(s,l),S(l,p),S(p,h),S(s,v),S(s,g),S(g,y),S(y,b),S(s,x),S(s,_),S(_,w),S(w,E),S(a,A),S(a,D),S(D,q),S(D,B),S(D,G),S(G,J)},p:function(t,e){var r=c(e,1)[0];1&r&&d!==(d=void 0===t[0]?"page":void 0)&&N(p,"aria-current",d),1&r&&$!==($="about"===t[0]?"page":void 0)&&N(y,"aria-current",$),1&r&&R!==(R="blog"===t[0]?"page":void 0)&&N(w,"aria-current",R)},i:m,o:m,d:function(t){t&&k(e)}}}function bt(t,e,r){var n=e.segment;return t.$$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var $t=function(t){s(r,ht);var e=gt(r);function r(t){var n;return d(this,r),pt(l(n=e.call(this)),t,bt,yt,_,{segment:0}),n}return r}();function xt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function _t(t){var e,r,n,o;e=new $t({props:{segment:t[0]}});var a=t[2].default,i=function(t,e,r,n){if(t){var o=w(t,e,r,n);return t[0](o)}}(a,t,t[1],null);return{c:function(){ct(e.$$.fragment),r=P(),n=L("main"),i&&i.c(),this.h()},l:function(t){ut(e.$$.fragment,t),r=U(t);var o=T(n=I(t,"MAIN",{class:!0}));i&&i.l(o),o.forEach(k),this.h()},h:function(){N(n,"class","svelte-1uhnsl8")},m:function(t,a){ft(e,t,a),j(t,r,a),j(t,n,a),i&&i.m(n,null),o=!0},p:function(t,r){var n=c(r,1)[0],o={};1&n&&(o.segment=t[0]),e.$set(o),i&&i.p&&2&n&&E(i,a,t,t[1],n,null,null)},i:function(t){o||(nt(e.$$.fragment,t),nt(i,t),o=!0)},o:function(t){ot(e.$$.fragment,t),ot(i,t),o=!1},d:function(t){st(e,t),t&&k(r),t&&k(n),i&&i.d(t)}}}function wt(t,e,r){var n=e.$$slots,o=void 0===n?{}:n,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&r(0,i=t.segment),"$$scope"in t&&r(1,a=t.$$scope)},[i,a,o]}var Et=function(t){s(r,ht);var e=xt(r);function r(t){var n;return d(this,r),pt(l(n=e.call(this)),t,wt,_t,_,{segment:0}),n}return r}();function St(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function jt(t){var e,r,n=t[1].stack+"";return{c:function(){e=L("pre"),r=O(n)},l:function(t){var o=T(e=I(t,"PRE",{}));r=C(o,n),o.forEach(k)},m:function(t,n){j(t,e,n),S(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&D(r,n)},d:function(t){t&&k(e)}}}function kt(t){var e,r,n,o,a,i,u,f,s,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&jt(t);return{c:function(){r=P(),n=L("h1"),o=O(t[0]),a=P(),i=L("p"),u=O(l),f=P(),p&&p.c(),s=A(),this.h()},l:function(e){q('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(k),r=U(e);var c=T(n=I(e,"H1",{class:!0}));o=C(c,t[0]),c.forEach(k),a=U(e);var h=T(i=I(e,"P",{class:!0}));u=C(h,l),h.forEach(k),f=U(e),p&&p.l(e),s=A(),this.h()},h:function(){N(n,"class","svelte-8od9u6"),N(i,"class","svelte-8od9u6")},m:function(t,e){j(t,r,e),j(t,n,e),S(n,o),j(t,a,e),j(t,i,e),S(i,u),j(t,f,e),p&&p.m(t,e),j(t,s,e)},p:function(t,r){var n=c(r,1)[0];1&n&&e!==(e=t[0])&&(document.title=e),1&n&&D(o,t[0]),2&n&&l!==(l=t[1].message+"")&&D(u,l),t[2]&&t[1].stack?p?p.p(t,n):((p=jt(t)).c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&k(r),t&&k(n),t&&k(a),t&&k(i),t&&k(f),p&&p.d(t),t&&k(s)}}}function Rt(t,e,r){var n=e.status,o=e.error;return t.$$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,false]}var Lt=function(t){s(r,ht);var e=St(r);function r(t){var n;return d(this,r),pt(l(n=e.call(this)),t,Rt,kt,_,{status:0,error:1}),n}return r}();function Ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Pt(t){var e,r,n,o=[t[4].props],a=t[4].component;function i(t){for(var e={},r=0;r<o.length;r+=1)e=g(e,o[r]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&ct(e.$$.fragment),r=A()},l:function(t){e&&ut(e.$$.fragment,t),r=A()},m:function(t,o){e&&ft(e,t,o),j(t,r,o),n=!0},p:function(t,n){var c=16&n?at(o,[it(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){et();var u=e;ot(u.$$.fragment,1,0,(function(){st(u,1)})),rt()}a?(ct((e=new a(i())).$$.fragment),nt(e.$$.fragment,1),ft(e,r.parentNode,r)):e=null}else a&&e.$set(c)},i:function(t){n||(e&&nt(e.$$.fragment,t),n=!0)},o:function(t){e&&ot(e.$$.fragment,t),n=!1},d:function(t){t&&k(r),e&&st(e,t)}}}function At(t){var e,r;return e=new Lt({props:{error:t[0],status:t[1]}}),{c:function(){ct(e.$$.fragment)},l:function(t){ut(e.$$.fragment,t)},m:function(t,n){ft(e,t,n),r=!0},p:function(t,r){var n={};1&r&&(n.error=t[0]),2&r&&(n.status=t[1]),e.$set(n)},i:function(t){r||(nt(e.$$.fragment,t),r=!0)},o:function(t){ot(e.$$.fragment,t),r=!1},d:function(t){st(e,t)}}}function Nt(t){var e,r,n,o,a=[At,Pt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),r=i[e]=a[e](t),{c:function(){r.c(),n=A()},l:function(t){r.l(t),n=A()},m:function(t,r){i[e].m(t,r),j(t,n,r),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(et(),ot(i[u],1,1,(function(){i[u]=null})),rt(),(r=i[e])||(r=i[e]=a[e](t)).c(),nt(r,1),r.m(n.parentNode,n))},i:function(t){o||(nt(r),o=!0)},o:function(t){ot(r),o=!1},d:function(t){i[e].d(t),t&&k(n)}}}function Tt(t){for(var e,r,n=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Nt]},$$scope:{ctx:t}},a=0;a<n.length;a+=1)o=g(o,n[a]);return e=new Et({props:o}),{c:function(){ct(e.$$.fragment)},l:function(t){ut(e.$$.fragment,t)},m:function(t,n){ft(e,t,n),r=!0},p:function(t,r){var o=c(r,1)[0],a=12&o?at(n,[4&o&&{segment:t[2][0]},8&o&&it(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i:function(t){r||(nt(e.$$.fragment,t),r=!0)},o:function(t){ot(e.$$.fragment,t),r=!1},d:function(t){st(e,t)}}}function It(t,e,r){var n,o,a=e.stores,i=e.error,c=e.status,u=e.segments,f=e.level0,s=e.level1,l=void 0===s?null:s,p=e.notify;return function(t){G().$$.after_update.push(t)}(p),n=mt,o=a,G().$$.context.set(n,o),t.$$set=function(t){"stores"in t&&r(5,a=t.stores),"error"in t&&r(0,i=t.error),"status"in t&&r(1,c=t.status),"segments"in t&&r(2,u=t.segments),"level0"in t&&r(3,f=t.level0),"level1"in t&&r(4,l=t.level1),"notify"in t&&r(6,p=t.notify)},[i,c,u,f,l,a,p]}var Ct,Ut=function(t){s(r,ht);var e=Ot(r);function r(t){var n;return d(this,r),pt(l(n=e.call(this)),t,It,Tt,_,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),n}return r}(),Dt=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],qt=[{js:function(){return Promise.all([import("./index.e0928c0f.js"),__inject_styles(["client-af31bab9.css","index-4d815705.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./saved_items.fd962748.js"),__inject_styles(["client-af31bab9.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./recipe.bce40285.js"),__inject_styles(["client-af31bab9.css","recipe-e6e46b42.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.3999e675.js"),__inject_styles(["client-af31bab9.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[slug].e716f118.js"),__inject_styles(["client-af31bab9.css","[slug]-5bc8f95f.css"])]).then((function(t){return t[0]}))}}],Bt=(Ct=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/saved_items\/?$/,parts:[{i:1}]},{pattern:/^\/recipe\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:4,params:function(t){return{slug:Ct(t[1])}}}]}]);
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
function Gt(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{u(n.next(t))}catch(t){a(t)}}function c(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,c)}u((n=n.apply(t,e||[])).next())}))}function Jt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Ft,Kt=1;var Mt,Vt,Ht="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},Yt={};function zt(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var n=c(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=n[1],a=n[2],i=void 0===a?"":a;"string"==typeof r[o]&&(r[o]=[r[o]]),"object"===t(r[o])?r[o].push(i):r[o]=i})),r}function Wt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Mt))return null;var e=t.pathname.slice(Mt.length);if(""===e&&(e="/"),!Dt.some((function(t){return t.test(e)})))for(var r=0;r<Bt.length;r+=1){var n=Bt[r],o=n.pattern.exec(e);if(o){var a=zt(t.search),i=n.parts[n.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:n,match:o,page:u}}}}function Xt(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var r=Jt(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&!(n?r.target.baseVal:r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=Wt(a);if(i)te(i,null,r.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),Ht.pushState({id:Ft},"",a.href)}}}else location.hash||e.preventDefault()}}}function Qt(){return{x:pageXOffset,y:pageYOffset}}function Zt(t){if(Yt[Ft]=Qt(),t.state){var e=Wt(new URL(location.href));e?te(e,t.state.id):location.href=location.href}else(function(t){Ft=t})(Kt=Kt+1),Ht.replaceState({id:Ft},"",location.href)}function te(t,e,r,n){return Gt(this,void 0,void 0,o.mark((function a(){var i,c,u,f;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(i=!!e)?Ft=e:(c=Qt(),Yt[Ft]=c,Ft=e=++Kt,Yt[Ft]=r?c:{x:0,y:0}),o.next=4,Vt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),r||(u=Yt[e],n&&(f=document.getElementById(n.slice(1)))&&(u={x:0,y:f.getBoundingClientRect().top+scrollY}),Yt[Ft]=u,i||f?scrollTo(u.x,u.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),a)})))}function ee(t){var e=t.baseURI;if(!e){var r=t.getElementsByTagName("base");e=r.length?r[0].href:t.URL}return e}var re,ne=null;function oe(t){return ne&&ne.href===t.href?ne.promise:je(t)}function ae(t){var e=Jt(t.target);e&&"prefetch"===e.rel&&function(t){var e=Wt(new URL(t,ee(document)));if(e)ne&&t===ne.href||(ne={href:t,promise:je(e)}),ne.promise}(e.href)}function ie(t){clearTimeout(re),re=setTimeout((function(){ae(t)}),20)}function ce(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},r=Wt(new URL(t,ee(document)));return r?(Ht[e.replaceState?"replaceState":"pushState"]({id:Ft},"",t),te(r,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var ue,fe,se,le,pe,he,de,ve,me,ge="undefined"!=typeof __SAPPER__&&__SAPPER__,ye=!1,be=[],$e="{}",xe={page:function(t){var e=vt(t),r=!0;return{notify:function(){r=!0,e.update((function(t){return t}))},set:function(t){r=!1,e.set(t)},subscribe:function(t){var n;return e.subscribe((function(e){(void 0===n||r&&e!==n)&&t(n=e)}))}}}({}),preloading:vt(null),session:vt(ge&&ge.session)};function _e(t,e){var r=t.error;return Object.assign({error:r},e)}function we(t){return Gt(this,void 0,void 0,o.mark((function e(){var r,n,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ue&&xe.preloading.set(!0),r=oe(t),n=fe={},e.next=5,r;case 5:if(a=e.sent,i=a.redirect,n===fe){e.next=9;break}return e.abrupt("return");case 9:if(!i){e.next=14;break}return e.next=12,ce(i.location,{replaceState:!0});case 12:e.next=17;break;case 14:return c=a.props,u=a.branch,e.next=17,Ee(u,c,_e(c,t.page));case 17:case"end":return e.stop()}}),e)})))}function Ee(t,e,r){return Gt(this,void 0,void 0,o.mark((function n(){return o.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(xe.page.set(r),xe.preloading.set(!1),!ue){n.next=6;break}ue.$set(e),n.next=13;break;case 6:return e.stores={page:{subscribe:xe.page.subscribe},preloading:{subscribe:xe.preloading.subscribe},session:xe.session},n.next=9,se;case 9:n.t0=n.sent,e.level0={props:n.t0},e.notify=xe.page.notify,ue=new Ut({target:he,props:e,hydrate:!0});case 13:be=t,$e=JSON.stringify(r.query),ye=!0,pe=!1;case 17:case"end":return n.stop()}}),n)})))}function Se(t,e,r,n){if(n!==$e)return!0;var o=be[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function je(t){return Gt(this,void 0,void 0,o.mark((function e(){var r,n,a,i,c,u,f,s,l,p,h,d,v=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,n=t.page,a=n.path.split("/").filter(Boolean),i=null,c={error:null,status:200,segments:[a[0]]},u={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},se||(f=function(){return{}},se=ge.preloaded[0]||f.call(u,{host:n.host,path:n.path,query:n.query,params:{}},le)),l=1,e.prev=7,p=JSON.stringify(n.query),h=r.pattern.exec(n.path),d=!1,e.next=13,Promise.all(r.parts.map((function(e,r){return Gt(v,void 0,void 0,o.mark((function i(){var f,s,v,m,g,y;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(f=a[r],Se(r,f,h,p)&&(d=!0),c.segments[l]=a[r+1],e){o.next=5;break}return o.abrupt("return",{segment:f});case 5:if(s=l++,pe||d||!be[r]||be[r].part!==e.i){o.next=8;break}return o.abrupt("return",be[r]);case 8:return d=!1,o.next=11,qt[e.i].js();case 11:if(v=o.sent,m=v.default,g=v.preload,!ye&&ge.preloaded[r+1]){o.next=25;break}if(!g){o.next=21;break}return o.next=18,g.call(u,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},le);case 18:o.t0=o.sent,o.next=22;break;case 21:o.t0={};case 22:y=o.t0,o.next=26;break;case 25:y=ge.preloaded[r+1];case 26:return o.abrupt("return",c["level".concat(s)]={component:m,props:y,segment:f,match:h,part:e.i});case 27:case"end":return o.stop()}}),i)})))})));case 13:s=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),c.error=e.t0,c.status=500,s=[];case 21:return e.abrupt("return",{redirect:i,props:c,branch:s});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}xe.session.subscribe((function(t){return Gt(void 0,void 0,void 0,o.mark((function e(){var r,n,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(le=t,ye){e.next=3;break}return e.abrupt("return");case 3:return pe=!0,r=Wt(new URL(location.href)),n=fe={},e.next=8,je(r);case 8:if(a=e.sent,i=a.redirect,c=a.props,u=a.branch,n===fe){e.next=14;break}return e.abrupt("return");case 14:if(!i){e.next=19;break}return e.next=17,ce(i.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,Ee(u,c,_e(c,r.page));case 21:case"end":return e.stop()}}),e)})))})),de={target:document.querySelector("#sapper")},ve=de.target,he=ve,me=ge.baseUrl,Mt=me,Vt=we,"scrollRestoration"in Ht&&(Ht.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Ht.scrollRestoration="auto"})),addEventListener("load",(function(){Ht.scrollRestoration="manual"})),addEventListener("click",Xt),addEventListener("popstate",Zt),addEventListener("touchstart",ae),addEventListener("mousemove",ie),ge.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,r=t.pathname,n=t.search,o=ge.session,a=ge.preloaded,i=ge.status,c=ge.error;se||(se=a&&a[0]);var u={error:c,status:i,session:o,level0:{props:se},level1:{props:{status:i,error:c},component:Lt},segments:a},f=zt(n);Ee([],u,{host:e,path:r,query:f,params:{},error:c})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,r=t.href;Ht.replaceState({id:Kt},"",r);var n=Wt(new URL(location.href));if(n)return te(n,Kt,!0,e)}));export{st as A,R as B,o as C,ht as S,s as _,u as a,p as b,d as c,l as d,L as e,P as f,I as g,T as h,pt as i,U as j,C as k,k as l,N as m,j as n,S as o,c as p,D as q,m as r,_ as s,O as t,ct as u,q as v,ut as w,ft as x,nt as y,ot as z};

import __inject_styles from './inject_styles.fe622066.js';