"use strict";var j=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=j(function(J,R){
var v=require('@stdlib/number-float64-base-to-float32/dist'),S=require('@stdlib/math-base-special-floor/dist'),Z=128;function l(e,r,a,M){var u,q,s,i,p,m,c,y,w,O,o,f,n;if(e<=0)return 0;if(u=M,a===0)return e*r[u];if(e<8){for(o=r[u],u+=a,n=1;n<e;n++)o=v(o+r[u]),u+=a;return o}if(e<=Z){for(q=r[u],s=r[u+a],i=r[u+2*a],p=r[u+3*a],m=r[u+4*a],c=r[u+5*a],y=r[u+6*a],w=r[u+7*a],u+=8*a,O=e%8,n=8;n<e-O;n+=8)q=v(q+r[u]),s=v(s+r[u+a]),i=v(i+r[u+2*a]),p=v(p+r[u+3*a]),m=v(m+r[u+4*a]),c=v(c+r[u+5*a]),y=v(y+r[u+6*a]),w=v(w+r[u+7*a]),u+=8*a;for(o=v(v(v(q+s)+v(i+p))+v(v(m+c)+v(y+w))),n;n<e;n++)o=v(o+r[u]),u+=a;return o}return f=S(e/2),f-=f%8,v(l(f,r,a,u)+l(e-f,r,a,u+f*a))}R.exports=l
});var B=j(function(P,_){
var b=require('@stdlib/strided-base-stride2offset/dist'),g=t();function h(e,r,a){return g(e,r,a,b(e,a))}_.exports=h
});var K=j(function(Q,I){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),z=t();k(C,"ndarray",z);I.exports=C
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=K(),E,L=D(A(__dirname,"./native.js"));F(L)?E=G:E=L;module.exports=E;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
