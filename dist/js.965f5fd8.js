parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uxf6":[function(require,module,exports) {
"use strict";function n(n){return"number"==typeof n}function t(n){return"string"==typeof n}function e(n){return"boolean"==typeof n}function r(n){return"[object Object]"===Object.prototype.toString.call(n)}function o(n){return"undefined"!=typeof MouseEvent&&n instanceof MouseEvent}function i(n){return Math.abs(n)}function c(n){return Math.sign(n)}function u(n,t){return i(n-t)}function s(n,t){if(0===n||0===t)return 0;if(i(n)<=i(t))return 0;const e=u(i(n),i(t));return i(e/n)}function a(n){const t=Math.pow(10,n);return n=>Math.round(n*t)/t}function d(n){return p(n).map(Number)}function l(n){return n[f(n)]}function f(n){return Math.max(0,n.length-1)}function p(n){return Object.keys(n)}function m(n,t){return[n,t].reduce((n,t)=>(p(t).forEach(e=>{const o=n[e],i=t[e],c=r(o)&&r(i);n[e]=c?m(o,i):i}),n),{})}function g(t,e){const r={start:function(){return 0},center:function(n){return o(n)/2},end:o};function o(n){return e-n}return{measure:function(o){return n(t)?e*Number(t):r[t](o)}}}function h(){let n=[];const t={add:function(e,r,o,i={passive:!0}){return e.addEventListener(r,o,i),n.push(()=>e.removeEventListener(r,o,i)),t},clear:function(){n=n.filter(n=>n())}};return t}function x(n,t){const e=h(),r=1e3/60;let o,i=null,c=0,u=0;function s(n,t){return()=>{n===!!u&&t()}}function a(e){if(!i)return i=e,d();for(c+=e-i,i=e;c>=r;)n(o),c-=r;t(o),u&&d()}function d(){u=window.requestAnimationFrame(a)}function l(){window.cancelAnimationFrame(u),i=null,u=0}return{init:function(n){o=n,e.add(document,"visibilitychange",()=>{document.hidden&&(i=null)})},destroy:function(){l(),e.clear()},start:s(!1,d),stop:s(!0,l)}}function y(n,t){const e="y"===n?"y":"x";return{scroll:e,cross:"y"===n?"x":"y",startEdge:"y"===e?"top":"rtl"===t?"right":"left",endEdge:"y"===e?"bottom":"rtl"===t?"left":"right",measureSize:function(n){const{width:t,height:r}=n;return"x"===e?t:r}}}function v(n,t){const e=i(n-t);function r(t){return t<n}function o(n){return n>t}function c(n){return r(n)||o(n)}return{length:e,max:t,min:n,constrain:function(e){return c(e)?r(e)?n:t:e},reachedAny:c,reachedMax:o,reachedMin:r,removeOffset:function(n){return e?n-e*Math.ceil((n-t)/e):n}}}function S(n,t,e){const{min:r,constrain:o}=v(0,n),c=n+1;let u=s(t);function s(n){return e?i((c+n)%c):o(n)}function a(){return u}function d(n){return u=s(n),l}const l={add:function(n){return d(a()+n)},clone:function(){return S(n,a(),e)},get:a,set:d,min:r,max:n};return l}function b(n){const t="rtl"===n?-1:1;return{apply:function(n){return n*t}}}function w(t){let e=t;function r(n){return e/=n,i}function o(t){return n(t)?t:t.get()}const i={add:function(n){return e+=o(n),i},divide:r,get:function(){return e},multiply:function(n){return e*=n,i},normalize:function(){return 0!==e&&r(e),i},set:function(n){return e=o(n),i},subtract:function(n){return e-=o(n),i}};return i}function M(n,t,r,a,d,l,f,p,m,g,x,y,S,b,M,E){const{cross:D}=n,O=["INPUT","SELECT","TEXTAREA"],P={passive:!1},A=w(0),I=h(),z=h(),L=v(50,225).constrain(S.measure(20)),k={mouse:300,touch:400},B={mouse:500,touch:600},T=b?43:25;let H=!1,F=0,N=0,R=!1,C=!1,V=!1,j=!1;function U(n){if(!C&&!j){if(!n.cancelable)return $(n);const t=d.readPoint(n),e=d.readPoint(n,D),r=u(t,F),o=u(e,N);if(!(C=r>o))return $(n)}const e=d.pointerMove(n);e&&(V=!0),m.useFriction(.3).useDuration(1),f.start(),a.add(t.apply(e)),n.preventDefault()}function $(n){const e=g.byDistance(0,!1).index!==x.get(),r=d.pointerUp(n)*(b?B:k)[j?"mouse":"touch"],o=function(n,t){const e=x.clone().add(-1*c(n)),r=g.byDistance(n,!b).distance;return b||i(n)<L?r:M&&t?.5*r:g.byIndex(e.get(),0).distance}(t.apply(r),e),u=s(r,o),a=T-10*u,l=E+u/50;C=!1,R=!1,z.clear(),m.useDuration(a).useFriction(l),p.distance(o,!b),j=!1,y.emit("pointerUp")}function q(n){V&&(n.stopPropagation(),n.preventDefault())}return{init:function(n,t){if(!t)return;function i(i){(e(t)||t(n,i))&&function(n){const t=o(n);j=t,t&&0!==n.button||function(n){const t=n.nodeName||"";return O.includes(t)}(n.target)||(V=b&&t&&!n.buttons&&H,H=u(a.get(),l.get())>=2,R=!0,d.pointerDown(n),A.set(a),m.useFriction(0).useDuration(0),a.set(l),function(){const n=j?document:r;z.add(n,"touchmove",U,P).add(n,"touchend",$).add(n,"mousemove",U,P).add(n,"mouseup",$)}(),F=d.readPoint(n),N=d.readPoint(n,D),y.emit("pointerDown"))}(i)}const c=r;I.add(c,"dragstart",n=>n.preventDefault(),P).add(c,"touchmove",()=>void 0,P).add(c,"touchend",()=>void 0).add(c,"touchstart",i).add(c,"mousedown",i).add(c,"touchcancel",$).add(c,"contextmenu",$).add(c,"click",q,!0)},pointerDown:function(){return R},destroy:function(){I.clear(),z.clear()}}}function E(n){const t=170;let e,r;function c(n){return n.timeStamp}function u(t,e){const r=`client${"x"===(e||n.scroll)?"X":"Y"}`;return(o(t)?t:t.touches[0])[r]}return{pointerDown:function(n){return e=n,r=n,u(n)},pointerMove:function(n){const o=u(n)-u(r),i=c(n)-c(e)>t;return r=n,i&&(e=n),o},pointerUp:function(n){if(!e||!r)return 0;const o=u(r)-u(e),s=c(n)-c(e),a=c(n)-c(r)>t,d=o/s;return s&&!a&&i(d)>.1?d:0},readPoint:u}}function D(n){return{measure:function(t){return n*(t/100)}}}function O(n,t,r,o){let i,c,u=[],s=!1;function a(n){return r.measureSize(n.getBoundingClientRect())}return{init:function(r,d){if(!d)return;c=a(n),u=t.map(a),i=new ResizeObserver(i=>{s||(e(d)||d(r,i))&&function(e){for(const i of e){const e=i.target===n,s=t.indexOf(i.target);if((e?c:u[s])!==a(e?n:t[s])){r.reInit(),o.emit("resize");break}}}(i)}),[n].concat(t).forEach(n=>i.observe(n))},destroy:function(){i&&i.disconnect(),s=!0}}}function P(n,t,e){const r=a(2),o=w(0);let i=0,u=t,s=e;function d(n){return u=n,f}function l(n){return s=n,f}const f={direction:function(){return i},seek:function(t){const e=t.get()-n.get();return s&&u?(o.add(e/u),o.multiply(s),n.add(o)):(o.set(0),n.set(t)),i=c(o.get()||e),f},settle:function(t){const e=t.get()-n.get(),o=!r(e);return o&&n.set(t),o},useBaseFriction:function(){return l(e)},useBaseDuration:function(){return d(t)},useFriction:l,useDuration:d};return f}function A(n,t,e,r,o){const c=o.measure(10),u=o.measure(50),s=v(.1,.99);let a=!1;return{constrain:function(o){if(a||!n.reachedAny(e.get())||!n.reachedAny(t.get()))return;const d=n.reachedMin(t.get())?"min":"max",l=i(n[d]-t.get()),f=e.get()-t.get(),p=s.constrain(l/u);e.subtract(f*p),!o&&i(f)<c&&(e.set(n.constrain(e.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(n){a=!n}}}function I(n,t,e,r){const o=v(-t+n,e[0]),i=e.map(o.constrain);return{snapsContained:function(){if(t<=n)return[o.max];if("keepSnaps"===r)return i;const{min:e,max:c}=function(){const n=i[0],t=l(i),e=i.lastIndexOf(n),r=i.indexOf(t)+1;return v(e,r)}();return i.slice(e,c)}()}}function z(n,t,e){return{limit:function(){const r=t[0],o=l(t);return v(e?r-n:o,r)}()}}function L(n,t,e,r){const o=t.min+.1,i=t.max+.1,{reachedMin:c,reachedMax:u}=v(o,i);return{loop:function(t){if(!function(n){return 1===n?u(e.get()):-1===n&&c(e.get())}(t))return;const o=n*(-1*t);r.forEach(n=>n.add(o))}}}function k(n){const{max:t,length:e}=n;return{get:function(n){return(n-t)/-e}}}function B(n,t,e,r,o,c,u){const{startEdge:s,endEdge:a}=n,{groupSlides:d}=c,p=d(r).map(n=>l(n)[a]-n[0][s]).map(i).map(t.measure),m=r.map(n=>e[s]-n[s]).map(n=>-i(n)),g=function(){const n=l(m)-l(o);return d(m).map(n=>n[0]).map((t,e,r)=>{const o=!e,i=e===f(r);return u&&o?0:u&&i?n:t+p[e]})}();return{snaps:m,snapsAligned:g}}function T(n,t,e,r,o){const{reachedAny:u,removeOffset:s,constrain:a}=r;function d(n){return n.concat().sort((n,t)=>i(n)-i(t))[0]}function l(t,r){const o=[t,t+e,t-e];return n?d(r?o.filter(n=>c(n)===r):o):o[0]}return{byDistance:function(e,r){const c=o.get()+e,{index:d,distance:f}=function(e){const r=n?s(e):a(e),o=t.map(n=>n-r).map(n=>l(n,0)).map((n,t)=>({diff:n,index:t})).sort((n,t)=>i(n.diff)-i(t.diff)),{index:c}=o[0];return{index:c,distance:r}}(c),p=!n&&u(c);return!r||p?{index:d,distance:e}:{index:d,distance:e+l(t[d]-f,0)}},byIndex:function(n,e){return{index:n,distance:l(t[n]-o.get(),e)}},shortcut:l}}function H(n,t,e,r,o,i){function c(r){const c=r.distance,u=r.index!==t.get();c&&(n.start(),o.add(c)),u&&(e.set(t.get()),t.set(r.index),i.emit("select"))}return{distance:function(n,t){c(r.byDistance(n,t))},index:function(n,e){const o=t.clone().set(n);c(r.byIndex(o.get(),e))}}}function F(n,t,e){const r="x"===n.scroll?function(n){return`translate3d(${n}px,0px,0px)`}:function(n){return`translate3d(0px,${n}px,0px)`},o=e.style;let i=!1;return{clear:function(){i||(o.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(n){i||(o.transform=r(t.apply(n.get())))},toggleActive:function(n){i=!n}}}function N(n,t,e,r,o,i,c,u,s){const a=d(o),l=d(o).reverse(),f=function(){const n=i[0]-1;return g(m(l,n),"end")}().concat(function(){const n=e-i[0]-1;return g(m(a,n),"start")}());function p(n,t){return n.reduce((n,t)=>n-o[t],t)}function m(n,t){return n.reduce((n,e)=>{return p(n,t)>0?n.concat([e]):n},[])}function g(e,o){const i="start"===o,a=i?-r:r,d=c.findSlideBounds([a]);return e.map(e=>{const o=i?0:-r,c=i?r:0,a=d.filter(n=>n.index===e)[0][i?"end":"start"],l=w(-1),f=w(-1),p=F(n,t,s[e]);return{index:e,location:f,translate:p,target:()=>l.set(u.get()>a?o:c)}})}return{canLoop:function(){return f.every(({index:n})=>p(a.filter(t=>t!==n),e)<=.1)},clear:function(){f.forEach(n=>n.translate.clear())},loop:function(){f.forEach(n=>{const{target:t,translate:e,location:r}=n,o=t();o.get()!==r.get()&&(0===o.get()?e.clear():e.to(o),r.set(o))})},loopPoints:f}}function R(n,t){let r,o=!1;return{init:function(i,c){c&&(r=new MutationObserver(n=>{o||(e(c)||c(i,n))&&function(n){for(const e of n)if("childList"===e.type){i.reInit(),t.emit("slidesChanged");break}}(n)})).observe(n,{childList:!0})},destroy:function(){r&&r.disconnect(),o=!0}}}function C(n,t,e,r,o,i,c){const{removeOffset:u,constrain:s}=o,a=.5,d=i?[0,t,-t]:[0],l=f(d,c);function f(t,o){const i=t||d,c=function(n){const t=n||0;return e.map(n=>v(a,n-a).constrain(n*t))}(o);return i.reduce((t,o)=>{const i=r.map((t,r)=>({start:t-e[r]+c[r]+o,end:t+n-c[r]+o,index:r}));return t.concat(i)},[])}return{check:function(n,t){const e=i?u(n):s(n);return(t||l).reduce((n,t)=>{const{index:r,start:o,end:i}=t;return!n.includes(r)&&o<e&&i>e?n.concat([r]):n},[])},findSlideBounds:f}}function V(n,t,e,r,o){const{measureSize:c,startEdge:u,endEdge:s}=n,a=e[0]&&o,d=function(){if(!a)return 0;const n=e[0];return i(t[u]-n[u])}(),p=function(){if(!a)return 0;const n=window.getComputedStyle(l(r));return parseFloat(n.getPropertyValue(`margin-${s}`))}(),m=e.map(c),g=e.map((n,t,e)=>{const r=!t,o=t===f(e);return r?m[t]+d:o?m[t]+p:e[t+1][u]-n[u]}).map(i);return{slideSizes:m,slideSizesWithGaps:g}}function j(t,e,r){const o=n(r);return{groupSlides:function(n){return o?function(n,t){return d(n).filter(n=>n%t==0).map(e=>n.slice(e,e+t))}(n,r):function(n){return d(n).reduce((n,r)=>{const o=e.slice(l(n),r+1).reduce((n,t)=>n+t,0);return!r||o>t?n.concat(r):n},[]).map((t,e,r)=>n.slice(t,r[e+1]))}(n)}}}function U(n,t,e,r,o){const{align:i,axis:c,direction:u,startIndex:s,inViewThreshold:a,loop:p,duration:m,dragFree:v,slidesToScroll:U,skipSnaps:$,containScroll:q}=r,G=t.getBoundingClientRect(),Q=e.map(n=>n.getBoundingClientRect()),W=b(u),X=y(c,u),_=X.measureSize(G),Y=D(_),J=g(i,_),K=!p&&!!q,Z=p||!!q,{slideSizes:nn,slideSizesWithGaps:tn}=V(X,G,Q,e,Z),en=j(_,tn,U),{snaps:rn,snapsAligned:on}=B(X,J,G,Q,tn,en,K),cn=-l(rn)+l(tn),{snapsContained:un}=I(_,cn,on,q),sn=K?un:on,{limit:an}=z(cn,sn,p),dn=S(f(sn),s,p),ln=dn.clone(),fn=d(e);const pn=x(function({target:n,dragHandler:t,scrollBody:e,scrollBounds:r,scrollLooper:o,slideLooper:i,eventHandler:c,animation:u}){const s=t.pointerDown();p||r.constrain(s);const a=e.seek(n).settle(n);a&&!s&&(u.stop(),c.emit("settle")),a||c.emit("scroll"),p&&(o.loop(e.direction()),i.loop())},function({translate:n,location:t}){n.to(t)}),mn=sn[dn.get()],gn=w(mn),hn=w(mn),xn=P(gn,m,.68),yn=T(p,sn,cn,an,hn),vn=H(pn,dn,ln,yn,hn,o),Sn=C(_,cn,nn,rn,an,p,a);return{eventHandler:o,containerRect:G,slideRects:Q,animation:pn,axis:X,direction:W,dragHandler:M(X,W,n,hn,E(X),gn,pn,vn,xn,yn,dn,o,Y,v,$,.68),eventStore:h(),percentOfView:Y,index:dn,indexPrevious:ln,limit:an,location:gn,options:r,resizeHandler:O(t,e,X,o),scrollBody:xn,scrollBounds:A(an,gn,hn,xn,Y),scrollLooper:L(cn,an,gn,[gn,hn]),scrollProgress:k(an),scrollSnaps:sn,scrollTarget:yn,scrollTo:vn,slideLooper:N(X,W,_,cn,tn,sn,Sn,gn,e),slidesHandler:R(t,o),slidesInView:Sn,slideIndexes:fn,slidesToScroll:en,target:hn,translate:F(X,W,t)}}function $(){const n={};let t;function e(t){return n[t]||[]}const r={init:function(n){t=n},emit:function(n){return e(n).forEach(e=>e(t,n)),r},off:function(t,o){return n[t]=e(t).filter(n=>n!==o),r},on:function(t,o){return n[t]=e(t).concat([o]),r}};return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=W;const q={align:"center",axis:"x",container:null,slides:null,containScroll:null,direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,inViewThreshold:0,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function G(){function n(n,t){return m(n,t||{})}return{mergeOptions:n,optionsAtMedia:function(t){const e=t.breakpoints||{},r=p(e).filter(n=>window.matchMedia(n).matches).map(n=>e[n]).reduce((t,e)=>n(t,e),{});return n(t,r)},optionsMediaQueries:function(n){return n.map(n=>p(n.breakpoints||{})).reduce((n,t)=>n.concat(t),[]).map(window.matchMedia)}}}function Q(){const n=G();let t=[];return{init:function(e,r){return(t=e.filter(({options:t})=>!1!==n.optionsAtMedia(t).active)).forEach(t=>t.init(r,n)),e.reduce((n,t)=>Object.assign(n,{[t.name]:t}),{})},destroy:function(){t=t.filter(n=>n.destroy())}}}function W(n,e,r){const o=h(),i=Q(),c=$(),{mergeOptions:u,optionsAtMedia:s,optionsMediaQueries:a}=G(),{on:d,off:l,emit:f}=c,p=E;let m,g,x,y,v=!1,S=u(q,W.globalOptions),b=u(S),w=[];function M(e,r){if(!v){if(S=u(S,e),b=s(S),function(){const{container:e,slides:r}=b,o=t(e)?n.querySelector(e):e;x=o||n.children[0];const i=t(r)?x.querySelectorAll(r):r;y=[].slice.call(i||x.children)}(),m=U(n,x,y,b,c),!b.active)return D();if(m.translate.to(m.location),w=r||w,g=i.init(w,I),a([S,...w.map(({options:n})=>n)]).forEach(n=>o.add(n,"change",E)),m.animation.init(m),m.eventHandler.init(I),m.resizeHandler.init(I,b.watchResize),m.slidesHandler.init(I,b.watchSlides),b.loop){if(!m.slideLooper.canLoop())return D(),M({loop:!1},r),void(S=u(S,{loop:!0}));m.slideLooper.loop()}x.offsetParent&&y.length&&m.dragHandler.init(I,b.watchDrag)}}function E(n,t){const e=A();D(),M(u({startIndex:e},n),t),c.emit("reInit")}function D(){m.dragHandler.destroy(),m.animation.destroy(),m.eventStore.clear(),m.translate.clear(),m.slideLooper.clear(),m.resizeHandler.destroy(),m.slidesHandler.destroy(),i.destroy(),o.clear()}function O(n){const t=m[n?"target":"location"].get(),e=b.loop?"removeOffset":"constrain";return m.slidesInView.check(m.limit[e](t))}function P(n,t,e){b.active&&!v&&(m.scrollBody.useBaseFriction().useDuration(t?0:b.duration),m.scrollTo.index(n,e||0))}function A(){return m.index.get()}const I={canScrollNext:function(){return m.index.clone().add(1).get()!==A()},canScrollPrev:function(){return m.index.clone().add(-1).get()!==A()},containerNode:function(){return x},internalEngine:function(){return m},destroy:function(){v||(v=!0,o.clear(),D(),c.emit("destroy"))},off:l,on:d,emit:f,plugins:function(){return g},previousScrollSnap:function(){return m.indexPrevious.get()},reInit:p,rootNode:function(){return n},scrollNext:function(n){P(m.index.clone().add(1).get(),!0===n,-1)},scrollPrev:function(n){P(m.index.clone().add(-1).get(),!0===n,1)},scrollProgress:function(){return m.scrollProgress.get(m.location.get())},scrollSnapList:function(){return m.scrollSnaps.map(m.scrollProgress.get)},scrollTo:P,selectedScrollSnap:A,slideNodes:function(){return y},slidesInView:O,slidesNotInView:function(n){const t=O(n);return m.slideIndexes.filter(n=>!t.includes(n))}};return M(e,r),setTimeout(()=>c.emit("init"),0),I}W.globalOptions=void 0;
},{}],"F79r":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setupTweenParallax=void 0;var e=1.2,r=function(r){var n=r.internalEngine(),t=r.scrollProgress();return r.scrollSnapList().map(function(a,o){if(!r.slidesInView().includes(o))return 0;var l=a-t;return n.options.loop&&n.slideLooper.loopPoints.forEach(function(e){var r=e.target().get();if(o===e.index&&0!==r){var n=Math.sign(r);-1===n&&(l=a-(1+t)),1===n&&(l=a+(1-t))}}),l*(-1/e)*100})},n=function(e){var n=e.slideNodes().map(function(e){return e.querySelector(".embla__parallax__layer")});return{applyTweenParallax:function(){r(e).forEach(function(e,r){n[r].style.transform="translateX(".concat(e,"%")})},removeTweenParallax:function(){n.forEach(function(e){return e.removeAttribute("style")})}}};exports.setupTweenParallax=n;
},{}],"lDPu":[function(require,module,exports) {

},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=a(require("embla-carousel")),r=require("./tween-parallax");function a(e){return e&&e.__esModule?e:{default:e}}require("../assets/sass/sandbox.scss"),require("../assets/sass/embla.scss");var s={inViewThreshold:0,dragFree:!0},l=document.querySelector(".embla"),t=l.querySelector(".embla__viewport"),n=(0,e.default)(t,s),o=(0,r.setupTweenParallax)(n),u=o.applyTweenParallax,i=o.removeTweenParallax;n.on("init",u).on("scroll",u).on("reInit",u).on("destroy",i);
},{"embla-carousel":"uxf6","./tween-parallax":"F79r","../assets/sass/sandbox.scss":"lDPu","../assets/sass/embla.scss":"lDPu"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.965f5fd8.js.map