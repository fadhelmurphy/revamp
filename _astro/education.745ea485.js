import{R as l}from"./index.f1bc5ebf.js";import{t as m}from"./timeline.a7ebaacd.js";import{j as e}from"./jsx-runtime.109e40f8.js";const n=({data:a=m})=>e.jsx("ol",{className:"relative my-12",children:a.map(t=>e.jsxs("li",{children:[e.jsxs("h3",{className:"mb-1 mb-6 flex items-center text-6xl font-semibold",children:[t.company,t.isLatest?e.jsx("span",{className:"mr-2 ml-3 rounded bg-sky-100 px-3.5 py-1.5 text-sm font-medium text-blue-500",children:"Latest"}):null]}),t.data.map(s=>e.jsxs(e.Fragment,{children:[e.jsx("time",{className:"mb-2 block font-semibold leading-6 text-2xl",children:s.jobtitle}),e.jsx("time",{className:"mb-2 block font-normal leading-6 text-base-2",children:s.time}),e.jsx("p",{className:"font-normal text-base-2 py-5",dangerouslySetInnerHTML:{__html:s.description}}),e.jsx("br",{})]}))]}))}),c=l.memo(n);export{c as default};
