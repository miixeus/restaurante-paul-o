parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"F79r":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setupTweenParallax=void 0;var e=1.2,r=function(r){var n=r.internalEngine(),t=r.scrollProgress();return r.scrollSnapList().map(function(a,o){if(!r.slidesInView().includes(o))return 0;var l=a-t;return n.options.loop&&n.slideLooper.loopPoints.forEach(function(e){var r=e.target().get();if(o===e.index&&0!==r){var n=Math.sign(r);-1===n&&(l=a-(1+t)),1===n&&(l=a+(1-t))}}),l*(-1/e)*100})},n=function(e){var n=e.slideNodes().map(function(e){return e.querySelector(".embla__parallax__layer")});return{applyTweenParallax:function(){r(e).forEach(function(e,r){n[r].style.transform="translateX(".concat(e,"%")})},removeTweenParallax:function(){n.forEach(function(e){return e.removeAttribute("style")})}}};exports.setupTweenParallax=n;
},{}]},{},["F79r"], null)
//# sourceMappingURL=/tween-parallax.94c0d479.js.map