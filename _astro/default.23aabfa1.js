import{R as s}from"./index.f1bc5ebf.js";import{t as r}from"./timeline.a6962a52.js";import{j as e}from"./jsx-runtime.109e40f8.js";const n=({data:a=r})=>e.jsx("ol",{className:"relative my-12 mx-5 border-l border-blue-400",children:a.map(t=>e.jsxs("li",{className:"mb-10 ml-10",children:[e.jsx("span",{className:"absolute -left-4 mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-400 ring-8 ring-white ring-blue-100",children:e.jsx("svg",{"aria-hidden":"true",className:"h-5 w-5 text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"})})}),e.jsxs("h3",{className:"mb-1 mb-6 flex items-center text-6xl font-semibold",children:[t.company,t.isLatest?e.jsx("span",{className:"mr-2 ml-3 rounded bg-sky-100 px-3.5 py-1.5 text-sm font-medium text-blue-500",children:"Latest"}):null]}),t.data.map(l=>e.jsxs(e.Fragment,{children:[e.jsx("time",{className:"mb-2 block font-normal leading-6",children:l.jobtitle}),e.jsx("time",{className:"mb-2 block font-normal leading-6 text-base-2",children:l.time}),e.jsx("p",{className:"font-normal text-base-2 py-5",dangerouslySetInnerHTML:{__html:l.description}}),e.jsx("br",{})]}))]}))}),d=s.memo(n);export{d as default};
