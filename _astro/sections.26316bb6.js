import{_ as t}from"./preload-helper.33f68d6e.js";import{R as e}from"./index.f1bc5ebf.js";import{j as n}from"./jsx-runtime.109e40f8.js";const _=e.lazy(()=>t(()=>import("./default.452d47fd.js"),["_astro/default.452d47fd.js","_astro/jsx-runtime.109e40f8.js","_astro/index.f1bc5ebf.js"])),p=e.lazy(()=>t(()=>import("./education.5efdb6d5.js"),["_astro/education.5efdb6d5.js","_astro/jsx-runtime.109e40f8.js","_astro/index.f1bc5ebf.js"])),m=e.lazy(()=>t(()=>import("./portfolio.ac53bc06.js"),["_astro/portfolio.ac53bc06.js","_astro/index.f1bc5ebf.js","_astro/jsx-runtime.109e40f8.js"])),d=[{id:"default",component:_},{id:"education",component:p},{id:"portfolio",component:m}],s=({type:i,...r})=>d.filter(o=>o.id===i).map((o,a)=>n.jsx(o.component,{...r},`${String(a+1)}`));s.defaultProps={type:"default"};export{s as default};
