// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,i=n.__lookupSetter__;var f=e,c=function(r,t,e){var f,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(l.call(r,t)||i.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&u&&u.call(r,t,e.set),r},y=t()?f:c;var p=function(r,t,e){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},_="function"==typeof Math.fround?Math.fround:null;var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var v=function(){return b&&"symbol"==typeof Symbol.toStringTag},d=Object.prototype.toString,m=d;var s=function(r){return m.call(r)},g=Object.prototype.hasOwnProperty;var j=function(r,t){return null!=r&&g.call(r,t)},w="function"==typeof Symbol?Symbol.toStringTag:"",h=j,S=w,A=d;var F=s,O=function(r){var t,e,n;if(null==r)return A.call(r);e=r[S],t=h(r,S);try{r[S]=void 0}catch(t){return A.call(r)}return n=A.call(r),t?r[S]=e:delete r[S],n},P=v()?O:F,T="function"==typeof Float32Array;var E=function(r){return T&&r instanceof Float32Array||"[object Float32Array]"===P(r)},I=Number.POSITIVE_INFINITY,M="function"==typeof Float32Array?Float32Array:null,N=E,V=I,k=M;var x="function"==typeof Float32Array?Float32Array:void 0,G=function(){throw new Error("not implemented")},C=new(function(){var r,t;if("function"!=typeof k)return!1;try{t=new k([1,3.14,-3.14,5e40]),r=N(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===V}catch(t){r=!1}return r}()?x:G)(1);var Y=_;"function"!=typeof Y&&(Y=function(r){return C[0]=r,C[0]});var q=Y,z=Math.floor;function B(r,t,e,n){var o,a,u,l,i,f,c,y,p,_,b,v,d;if(r<=0)return 0;if(1===r||0===e)return t[n];if(o=n,r<8){for(b=0,d=0;d<r;d++)b=q(b+t[o]),o+=e;return b}if(r<=128){for(a=t[o],u=t[o+e],l=t[o+2*e],i=t[o+3*e],f=t[o+4*e],c=t[o+5*e],y=t[o+6*e],p=t[o+7*e],o+=8*e,_=r%8,d=8;d<r-_;d+=8)a=q(a+t[o]),u=q(u+t[o+e]),l=q(l+t[o+2*e]),i=q(i+t[o+3*e]),f=q(f+t[o+4*e]),c=q(c+t[o+5*e]),y=q(y+t[o+6*e]),p=q(p+t[o+7*e]),o+=8*e;for(b=q(q(q(a+u)+q(l+i))+q(q(f+c)+q(y+p)));d<r;d++)b=q(b+t[o]),o+=e;return b}return v=z(r/2),q(B(v-=v%8,t,e,o)+B(r-v,t,e,o+v*e))}function D(r,t,e){var n,o,a;if(r<=0)return 0;if(1===r||0===e)return t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,a=0;a<r;a++)o=q(o+t[n]),n+=e;return o}return B(r,t,e,n)}p(D,"ndarray",B);export{D as default,B as ndarray};
//# sourceMappingURL=mod.js.map
