import{_ as t,j as r}from"./jsx-runtime.d103b420.js";import{R as e}from"./index.f1bc5ebf.js";const _=e.lazy(()=>t(()=>import("./default.afdbea4f.js"),["_astro/default.afdbea4f.js","_astro/jsx-runtime.d103b420.js","_astro/index.f1bc5ebf.js"])),p=e.lazy(()=>t(()=>import("./education.4caa705a.js"),["_astro/education.4caa705a.js","_astro/jsx-runtime.d103b420.js","_astro/index.f1bc5ebf.js"])),d=e.lazy(()=>t(()=>import("./portfolio.b00b3bc1.js"),["_astro/portfolio.b00b3bc1.js","_astro/jsx-runtime.d103b420.js","_astro/index.f1bc5ebf.js"])),m=[{id:"default",component:_},{id:"education",component:p},{id:"portfolio",component:d}],s=({type:i,...a})=>m.filter(o=>o.id===i).map((o,n)=>r.jsx(o.component,{...a},`${String(n+1)}`));s.defaultProps={type:"default"};export{s as default};