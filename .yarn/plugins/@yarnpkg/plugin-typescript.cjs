/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-typescript",
factory: function (require) {
var plugin=(()=>{var Ft=Object.create,H=Object.defineProperty,Bt=Object.defineProperties,Kt=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Gt=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,$t=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var Re=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))ne.call(t,r)&&Re(e,r,t[r]);if(Q)for(var r of Q(t))De.call(t,r)&&Re(e,r,t[r]);return e},g=(e,t)=>Bt(e,zt(t)),Lt=e=>H(e,"__esModule",{value:!0});var R=(e,t)=>{var r={};for(var s in e)ne.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&Q)for(var s of Q(e))t.indexOf(s)<0&&De.call(e,s)&&(r[s]=e[s]);return r};var I=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Vt=(e,t)=>{for(var r in t)H(e,r,{get:t[r],enumerable:!0})},Qt=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Gt(t))!ne.call(e,s)&&s!=="default"&&H(e,s,{get:()=>t[s],enumerable:!(r=Kt(t,s))||r.enumerable});return e},C=e=>Qt(Lt(H(e!=null?Ft($t(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var xe=