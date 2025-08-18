"use strict";var j=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=j(function(J,R){
var v=require('@stdlib/number-float64-base-to-float32/dist'),S=require('@stdlib/math-base-special-floor/dist'),Z=128;function l(e,r,u,M){var a,q,s,i,p,m,c,y,w,O,o,f,n;if(e<=0)return 0;if(a=M,u===0)return e*r[a];if(e<8){for(o=r[a],a+=u,n=1;n<e;n++)o=v(o+r[a]),a+=u;return o}if(e<=Z){for(q=r[a],s=r[a+u],i=r[a+2*u],p=r[a+3*u],m=r[a+4*u],c=r[a+5*u],y=r[a+6*u],w=r[a+7*u],a+=8*u,O=e%8,n=8;n<e-O;n+=8)q=v(q+r[a]),s=v(s+r[a+u]),i=v(i+r[a+2*u]),p=v(p+r[a+3*u]),m=v(m+r[a+4*u]),c=v(c+r[a+5*u]),y=v(y+r[a+6*u]),w=v(w+r[a+7*u]),a+=8*u;for(o=v(v(v(q+s)+v(i+p))+v(v(m+c)+v(y+w))),n;n<e;n++)o=v(o+r[a]),a+=u;return o}return f=S(e/2),f-=f%8,v(l(f,r,u,a)+l(e-f,r,u,a+f*u))}R.exports=l
});var B=j(function(P,_){
var b=require('@stdlib/strided-base-stride2offset/dist'),g=t();function h(e,r,u){return g(e,r,u,b(e,u))}_.exports=h
});var K=j(function(Q,I){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),z=t();k(C,"ndarray",z);I.exports=C
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=K(),E,L=D(A(__dirname,"./native.js"));F(L)?E=G:E=L;module.exports=E;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
