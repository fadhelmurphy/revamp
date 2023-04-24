import{r as y}from"./index.f1bc5ebf.js";const d="modulepreload",h=function(t){return"/revamp/"+t},u={},j=function(e,l,n){if(!l||l.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(l.map(r=>{if(r=h(r),r in u)return;u[r]=!0;const o=r.endsWith(".css"),p=o?'[rel="stylesheet"]':"";if(!!n)for(let c=s.length-1;c>=0;c--){const a=s[c];if(a.href===r&&(!o||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${p}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":d,o||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),o)return new Promise((c,a)=>{i.addEventListener("load",c),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};var m={},v={get exports(){return m},set exports(t){m=t}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=y,R=Symbol.for("react.element"),k=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,O=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function _(t,e,l){var n,s={},r=null,o=null;l!==void 0&&(r=""+l),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)x.call(e,n)&&!S.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:R,type:t,key:r,ref:o,props:s,_owner:O.current}}f.Fragment=k;f.jsx=_;f.jsxs=_;(function(t){t.exports=f})(v);export{j as _,m as j};
