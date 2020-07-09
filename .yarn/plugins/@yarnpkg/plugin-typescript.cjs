/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-typescript",
factory: function (require) {
var plugin=(()=>{var Ft=Object.create,H=Object.defineProperty,Bt=Object.defineProperties,Kt=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Gt=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,$t=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var Re=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))ne.call(t,r)&&Re(e,r,t[r]);if(Q)for(var r of Q(t))De.call(t,r)&&Re(e,r,t[r]);return e},g=(e,t)=>Bt(e,zt(t)),Lt=e=>H(e,"__esModule",{value:!0});var R=(e,t)=>{var r={};for(var s in e)ne.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&Q)for(var s of Q(e))t.indexOf(s)<0&&De.call(e,s)&&(r[s]=e[s]);return r};var I=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Vt=(e,t)=>{for(var r in t)H(e,r,{get:t[r],enumerable:!0})},Qt=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Gt(t))!ne.call(e,s)&&s!=="default"&&H(e,s,{get:()=>t[s],enumerable:!(r=Kt(t,s))||r.enumerable});return e},C=e=>Qt(Lt(H(e!=null?Ft($t(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var xe=I(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});function _(e){let t=[...e.caches],r=t.shift();return r===void 0?ve():{get(s,n,a={miss:()=>Promise.resolve()}){return r.get(s,n,a).catch(()=>_({caches:t}).get(s,n,a))},set(s,n){return r.set(s,n).catch(()=>_({caches:t}).set(s,n))},delete(s){return r.delete(s).catch(()=>_({caches:t}).delete(s))},clear(){return r.clear().catch(()=>_({caches:t}).clear())}}}function ve(){return{get(e,t,r={miss:()=>Promise.resolve()}){return t().then(n=>Promise.all([n,r.miss(n)])).then(([n])=>n)},set(e,t){return Promise.resolve(t)},delete(e){return Promise.resolve()},clear(){return Promise.resolve()}}}J.createFallbackableCache=_;J.createNullCache=ve});var Ee=I(($s,qe)=>{qe.exports=xe()});var Te=I(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});function Jt(e={serializable:!0}){let t={};return{get(r,s,n={miss:()=>Promise.resolve()}){let a=JSON.stringify(r);if(a in t)return Promise.resolve(e.serializable?JSON.parse(t[a]):t[a]);let o=s(),d=n&&n.miss||(()=>Promise.resolve());return o.then(y=>d(y)).then(()=>o)},set(r,s){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(s):s,Promise.resolve(s)},delete(r){return delete t[JSON.stringify(r)],Promise.resolve()},clear(){return t={},Promise.resolve()}}}ae.createInMemoryCache=Jt});var we=I((Vs,Me)=>{Me.exports=Te()});var Ce=I(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});function Xt(e,t,r){let s={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers(){return e===oe.WithinHeaders?s:{}},queryParameters(){return e===oe.WithinQueryParameters?s:{}}}}function Yt(e){let t=0,r=()=>(t++,new Promise(s=>{setTimeout(()=>{s(e(r))},Math.min(100*t,1e3))}));return e(r)}function ke(e,t=(r,s)=>Promise.resolve()){return Object.assign(e,{wait(r){return ke(e.then(s=>Promise.all([t(s,r),s])).then(s=>s[1]))}})}function Zt(e){let t=e.length-1;for(t;t>0;t--){let r=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[r],e[r]=s}return e}function er(e,t){return Object.keys(t!==void 0?t:{}).forEach(r=>{e[r]=t[r](e)}),e}function tr(e,...t){let r=0;return e.replace(/%s/g,()=>encodeURIComponent(t[r++]))}var rr="4.2.0",sr=e=>()=>e.transporter.requester.destroy(),oe={WithinQueryParameters:0,WithinHeader