/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-typescript",
factory: function (require) {
var plugin=(()=>{var Ft=Object.create,H=Object.defineProperty,Bt=Object.defineProperties,Kt=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Gt=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,$t=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var Re=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))ne.call(t,r)&&Re(e,r,t[r]);if(Q)for(var r of Q(t))De.call(t,r)&&Re(e,r,t[r]);return e},g=(e,t)=>Bt(e,zt(t)),Lt=e=>H(e,"__esModule",{value:!0});var R=(e,t)=>{var r={};for(var s in e)ne.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&Q)for(var s of Q(e))t.indexOf(s)<0&&De.call(e,s)&&(r[s]=e[s]);return r};var I=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Vt=(e,t)=>{for(var r in t)H(e,r,{get:t[r],enumerable:!0})},Qt=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Gt(t))!ne.call(e,s)&&s!=="default"&&H(e,s,{get:()=>t[s],enumerable:!(r=Kt(t,s))||r.enumerable});return e},C=e=>Qt(Lt(H(e!=null?Ft($t(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var xe=I(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});function _(e){let t=[...e.caches],r=t.shift();return r===void 0?ve():{get(s,n,a={miss:()=>Promise.resolve()}){return r.get(s,n,a).catch(()=>_({caches:t}).get(s,n,a))},set(s,n){return r.set(s,n).catch(()=>_({caches:t}).set(s,n))},delete(s){return r.delete(s).catch(()=>_({caches:t}).delete(s))},clear(){return r.clear().catch(()=>_({caches:t}).clear())}}}function ve(){return{get(e,t,r={miss:()=>Promise.resolve()}){return t().then(n=>Promise.all([n,r.miss(n)])).then(([n])=>n)},set(e,t){return Promise.resolve(t)},delete(e){return Promise.resolve()},clear(){return Promise.resolve()}}}J.createFallbackableCache=_;J.createNullCache=ve});var Ee=I(($s,qe)=>{qe.exports=xe()});var Te=I(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});function Jt(e={serializable:!0}){let t={};return{get(r,s,n={miss:()=>Promise.resolve()}){let a=JSON.stringify(r);if(a in t)return Promise.resolve(e.serializable?JSON.parse(t[a]):t[a]);let o=s(),d=n&&n.miss||(()=>Promise.resolve());return o.then(y=>d(y)).then(()=>o)},set(r,s){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(s):s,Promise.resolve(s)},delete(r){return delete t[JSON.stringify(r)],Promise.resolve()},clear(){return t={},Promise.resolve()}}}ae.createInMemoryCache=Jt});var we=I((Vs,Me)=>{Me.exports=Te()});var Ce=I(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});function Xt(e,t,r){let s={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers(){return e===oe.WithinHeaders?s:{}},queryParameters(){return e===oe.WithinQueryParameters?s:{}}}}function Yt(e){let t=0,r=()=>(t++,new Promise(s=>{setTimeout(()=>{s(e(r))},Math.min(100*t,1e3))}));return e(r)}function ke(e,t=(r,s)=>Promise.resolve()){return Object.assign(e,{wait(r){return ke(e.then(s=>Promise.all([t(s,r),s])).then(s=>s[1]))}})}function Zt(e){let t=e.length-1;for(t;t>0;t--){let r=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[r],e[r]=s}return e}function er(e,t){return Object.keys(t!==void 0?t:{}).forEach(r=>{e[r]=t[r](e)}),e}function tr(e,...t){let r=0;return e.replace(/%s/g,()=>encodeURIComponent(t[r++]))}var rr="4.2.0",sr=e=>()=>e.transporter.requester.destroy(),oe={WithinQueryParameters:0,WithinHeaders:1};M.AuthMode=oe;M.addMethods=er;M.createAuth=Xt;M.createRetryablePromise=Yt;M.createWaitablePromise=ke;M.destroy=sr;M.encode=tr;M.shuffle=Zt;M.version=rr});var F=I((Js,Ue)=>{Ue.exports=Ce()});var Ne=I(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});var nr={Delete:"DELETE",Get:"GET",Post:"POST",Put:"PUT"};ie.MethodEnum=nr});var B=I((Ys,We)=>{We.exports=Ne()});var Ze=I(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});var He=B();function ce(e,t){let r=e||{},s=r.data||{};return Object.keys(r).forEach(n=>{["timeout","headers","queryParameters","data","cacheable"].indexOf(n)===-1&&(s[n]=r[n])}),{data:Object.entries(s).length>0?s:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var X={Read:1,Write:2,Any:3},U={Up:1,Down:2,Timeouted:3},_e=2*60*1e3;function ue(e,t=U.Up){return g(u({},e),{status:t,lastUpdate:Date.now()})}function Fe(e){return e.status===U.Up||Date.now()-e.lastUpdate>_e}function Be(e){return e.status===U.Timeouted&&Date.now()-e.lastUpdate<=_e}function le(e){return{protocol:e.protocol||"https",url:e.url,accept:e.accept||X.Any}}function ar(e,t){return Promise.all(t.map(r=>e.get(r,()=>Promise.resolve(ue(r))))).then(r=>{let s=r.filter(d=>Fe(d)),n=r.filter(d=>Be(d)),a=[...s,...n],o=a.length>0?a.map(d=>le(d)):t;return{getTimeout(d,y){return(n.length===0&&d===0?1:n.length+3+d)*y},statelessHosts:o}})}var or=({isTimedOut:e,status:t})=>!e&&~~t==0,ir=e=>{let t=e.status;return e.isTimedOut||or(e)||~~(t/100)!=2&&~~(t/100)!=4},cr=({status:e})=>~~(e/100)==2,ur=(e,t)=>ir(e)?t.onRetry(e):cr(e)?t.onSucess(e):t.onFail(e);function Qe(e,t,r,s){let n=[],a=$e(r,s),o=Le(e,s),d=r.method,y=r.method!==He.MethodEnum.Get?{}:u(u({},r.data),s.data),b=u(u(u({"x-algolia-agent":e.userAgent.value},e.queryParameters),y),s.queryParameters),f=0,p=(h,S)=>{let O=h.pop();if(O===void 0)throw Ve(de(n));let P={data:a,headers:o,method:d,url:Ge(O,r.path,b),connectTimeout:S(f,e.timeouts.connect),responseTimeout:S(f,s.timeout)},x=j=>{let T={request:P,response:j,host:O,triesLeft:h.length};return n.push(T),T},v={onSucess:j=>Ke(j),onRetry(j){let T=x(j);return j.isTimedOut&&f++,Promise.all([e.logger.info("Retryable failure",pe(T)),e.hostsCache.set(O,ue(O,j.isTimedOut?U.Timeouted:U.Down))]).then(()=>p(h,S))},onFail(j){throw x(j),ze(j,de(n))}};return e.requester.send(P).then(j=>ur(j,v))};return ar(e.hostsCache,t).then(h=>p([...h.statelessHosts].reverse(),h.getTimeout))}function lr(e){let{hostsCache:t,logger:r,requester:s,requestsCache:n,responsesCache:a,timeouts:o,userAgent:d,hosts:y,queryParameters:b,headers:f}=e,p={hostsCache:t,logger:r,requester:s,requestsCache:n,responsesCache:a,timeouts:o,userAgent:d,headers:f,queryParameters:b,hosts:y.map(h=>le(h)),read(h,S){let O=ce(S,p.timeouts.read),P=()=>Qe(p,p.hosts.filter(j=>(j.accept&X.Read)!=0),h,O);if((O.cacheable!==void 0?O.cacheable:h.cacheable)!==!0)return P();let v={request:h,mappedRequestOptions:O,transporter:{queryParameters:p.queryParameters,headers:p.headers}};return p.responsesCache.get(v,()=>p.requestsCache.get(v,()=>p.requestsCache.set(v,P()).then(j=>Promise.all([p.requestsCache.delete(v),j]),j=>Promise.all([p.requestsCache.delete(v),Promise.reject(j)])).then(([j,T])=>T)),{miss:j=>p.responsesCache.set(v,j)})},write(h,S){return Qe(p,p.hosts.filter(O=>(O.accept&X.Write)!=0),h,ce(S,p.timeouts.write))}};return p}function dr(e){let t={value:`Algolia for JavaScript (${e})`,add(r){let s=`; ${r.segment}${r.version!==void 0?` (${r.version})`:""}`;return t.value.indexOf(s)===-1&&(t.value=`${t.value}${s}`),t}};return t}function Ke(e){try{return JSON.parse(e.content)}catch(t){throw Je(t.message,e)}}function ze({content:e,status:t},r){let s=e;try{s=JSON.parse(e).message}catch(n){}return Xe(s,t,r)}function pr(e,...t){let r=0;return e.replace(/%s/g,()=>encodeURIComponent(t[r++]))}function Ge(e,t,r){let s=Ye(r),n=`${e.protocol}://${e.url}/${t.charAt(0)==="/"?t.substr(1):t}`;return s.length&&(n+=`?${s}`),n}function Ye(e){let t=r=>Object.prototype.toString.call(r)==="[object Object]"||Object.prototype.toString.call(r)==="[object Array]";return Object.keys(e).map(r=>pr("%s=%s",r,t(e[r])?JSON.stringify(e[r]):e[r])).join("&")}function $e(e,t){if(e.method===He.MethodEnum.Get||e.data===void 0&&t.data===void 0)return;let r=Array.isArray(e.data)?e.data:u(u({},e.data),t.data);return JSON.stringify(r)}function Le(e,t){let r=u(u({},e.headers),t.headers),s={};return Object.keys(r).forEach(n=>{let a=r[n];s[n.toLowerCase()]=a}),s}function de(e){return e.map(t=>pe(t))}function pe(e){let t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return g(u({},e),{request:g(u({},e.request),{headers:u(u({},e.request.headers),t)})})}function Xe(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}function Je(e,t){return{name:"DeserializationError",message:e,response:t}}function Ve(e){return{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:e}}A.CallEnum=X;A.HostStatusEnum=U;A.createApiError=Xe;A.createDeserializationError=Je;A.createMappedRequestOptions=ce;A.createRetryError=Ve;A.createStatefulHost=ue;A.createStatelessHost=le;A.createTransporter=lr;A.createUserAgent=dr;A.deserializeFailure=ze;A.deserializeSuccess=Ke;A.isStatefulHostTimeouted=Be;A.isStatefulHostUp=Fe;A.serializeData=$e;A.serializeHeaders=Le;A.serializeQueryParameters=Ye;A.serializeUrl=Ge;A.stackFrameWithoutCredentials=pe;A.stackTraceWithoutCredentials=de});var K=I((en,et)=>{et.exports=Ze()});var tt=I(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});var N=F(),mr=K(),z=B(),hr=e=>{let t=e.region||"us",r=N.createAuth(N.AuthMode.WithinHeaders,e.appId,e.apiKey),s=mr.createTransporter(g(u({hosts:[{url:`analytics.${t}.algolia.com`}]},e),{headers:u(g(u({},r.headers()),{"content-type":"application/json"}),e.headers),queryParameters:u(u({},r.queryParameters()),e.queryParameters)})),n=e.appId;return N.addMethods({appId:n,transporter:s},e.methods)},yr=e=>(t,r)=>e.transporter.write({method:z.MethodEnum.Post,path:"2/abtests",data:t},r),gr=e=>(t,r)=>e.transporter.write({method:z.MethodEnum.Delete,path:N.encode("2/abtests/%s",t)},r),fr=e=>(t,r)=>e.transporter.read({method:z.MethodEnum.Get,path:N.encode("2/abtests/%s",t)},r),br=e=>t=>e.transporter.