import{_ as o}from"./preload-helper.33f68d6e.js";import{R as e}from"./index.f1bc5ebf.js";import{j as n}from"./jsx-runtime.109e40f8.js";const m=e.lazy(()=>o(()=>import("./default.5fc61625.js"),["_astro/default.5fc61625.js","_astro/index.f1bc5ebf.js","_astro/timeline.d6add6a2.js","_astro/jsx-runtime.109e40f8.js"])),p=e.lazy(()=>o(()=>import("./education.ab4fb18f.js"),["_astro/education.ab4fb18f.js","_astro/index.f1bc5ebf.js","_astro/timeline.d6add6a2.js","_astro/jsx-runtime.109e40f8.js"])),s=[{id:"default",component:m},{id:"education",component:p}],_=({type:a,...i})=>s.filter(t=>t.id===a).map((t,r)=>n.jsx(t.component,{...i},`${String(r+1)}`));_.defaultProps={type:"default"};export{_ as default};