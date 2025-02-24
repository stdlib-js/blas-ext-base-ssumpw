"use strict";var y=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var j=y(function(H,R){
var v=require('@stdlib/number-float64-base-to-float32/dist'),M=require('@stdlib/math-base-special-floor/dist'),S=128;function w(e,r,u,L){var a,s,q,i,p,m,c,t,l,O,o,f,n;if(e<=0)return 0;if(a=L,u===0)return e*r[a];if(e<8){for(o=0,n=0;n<e;n++)o=v(o+r[a]),a+=u;return o}if(e<=S){for(s=r[a],q=r[a+u],i=r[a+2*u],p=r[a+3*u],m=r[a+4*u],c=r[a+5*u],t=r[a+6*u],l=r[a+7*u],a+=8*u,O=e%8,n=8;n<e-O;n+=8)s=v(s+r[a]),q=v(q+r[a+u]),i=v(i+r[a+2*u]),p=v(p+r[a+3*u]),m=v(m+r[a+4*u]),c=v(c+r[a+5*u]),t=v(t+r[a+6*u]),l=v(l+r[a+7*u]),a+=8*u;for(o=v(v(v(s+q)+v(i+p))+v(v(m+c)+v(t+l))),n;n<e;n++)o=v(o+r[a]),a+=u;return o}return f=M(e/2),f-=f%8,v(w(f,r,u,a)+w(e-f,r,u,a+f*u))}R.exports=w
});var B=y(function(J,_){
var T=require('@stdlib/strided-base-stride2offset/dist'),Z=j();function b(e,r,u){return Z(e,r,u,T(e,u))}_.exports=b
});var I=y(function(P,F){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),h=j();g(C,"ndarray",h);F.exports=C
});var k=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),D=I(),E,K=z(k(__dirname,"./native.js"));A(K)?E=D:E=K;module.exports=E;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
