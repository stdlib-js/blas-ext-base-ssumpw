"use strict";var y=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var E=y(function(H,R){
var e=require('@stdlib/number-float64-base-to-float32/dist'),L=require('@stdlib/math-base-special-floor/dist'),M=128;function j(v,r,u,o){var a,f,s,p,l,m,c,t,w,O,i,q,n;if(v<=0)return 0;if(v===1||u===0)return r[o];if(a=o,v<8){for(i=0,n=0;n<v;n++)i=e(i+r[a]),a+=u;return i}if(v<=M){for(f=r[a],s=r[a+u],p=r[a+2*u],l=r[a+3*u],m=r[a+4*u],c=r[a+5*u],t=r[a+6*u],w=r[a+7*u],a+=8*u,O=v%8,n=8;n<v-O;n+=8)f=e(f+r[a]),s=e(s+r[a+u]),p=e(p+r[a+2*u]),l=e(l+r[a+3*u]),m=e(m+r[a+4*u]),c=e(c+r[a+5*u]),t=e(t+r[a+6*u]),w=e(w+r[a+7*u]),a+=8*u;for(i=e(e(e(f+s)+e(p+l))+e(e(m+c)+e(t+w))),n;n<v;n++)i=e(i+r[a]),a+=u;return i}return q=L(v/2),q-=q%8,e(j(q,r,u,a)+j(v-q,r,u,a+q*u))}R.exports=j
});var _=y(function(J,T){
var S=require('@stdlib/number-float64-base-to-float32/dist'),Z=E();function b(v,r,u){var o,a,f;if(v<=0)return 0;if(v===1||u===0)return r[0];if(u<0?o=(1-v)*u:o=0,v<8){for(a=0,f=0;f<v;f++)a=S(a+r[o]),o+=u;return a}return Z(v,r,u,o)}T.exports=b
});var I=y(function(P,C){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=_(),h=E();g(B,"ndarray",h);C.exports=B
});var k=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),D=I(),F,K=z(k(__dirname,"./native.js"));A(K)?F=D:F=K;module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
