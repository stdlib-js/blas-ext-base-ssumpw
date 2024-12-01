"use strict";var y=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var j=y(function(J,R){
var v=require('@stdlib/number-float64-base-to-float32/dist'),M=require('@stdlib/math-base-special-floor/dist'),S=require('@stdlib/math-base-assert-is-nan/dist'),T=128;function w(e,r,u,L){var a,s,i,q,p,m,t,c,l,O,o,f,n;if(e<=0)return 0;if(a=L,u===0)return S(r[a])?0:e*r[a];if(e<8){for(o=0,n=0;n<e;n++)o=v(o+r[a]),a+=u;return o}if(e<=T){for(s=r[a],i=r[a+u],q=r[a+2*u],p=r[a+3*u],m=r[a+4*u],t=r[a+5*u],c=r[a+6*u],l=r[a+7*u],a+=8*u,O=e%8,n=8;n<e-O;n+=8)s=v(s+r[a]),i=v(i+r[a+u]),q=v(q+r[a+2*u]),p=v(p+r[a+3*u]),m=v(m+r[a+4*u]),t=v(t+r[a+5*u]),c=v(c+r[a+6*u]),l=v(l+r[a+7*u]),a+=8*u;for(o=v(v(v(s+i)+v(q+p))+v(v(m+t)+v(c+l))),n;n<e;n++)o=v(o+r[a]),a+=u;return o}return f=M(e/2),f-=f%8,v(w(f,r,u,a)+w(e-f,r,u,a+f*u))}R.exports=w
});var B=y(function(P,_){
var Z=require('@stdlib/strided-base-stride2offset/dist'),b=j();function g(e,r,u){return b(e,r,u,Z(e,u))}_.exports=g
});var I=y(function(Q,F){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),k=j();h(C,"ndarray",k);F.exports=C
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),G=I(),E,K=A(z(__dirname,"./native.js"));D(K)?E=G:E=K;module.exports=E;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
