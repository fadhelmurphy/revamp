import{j as e}from"./jsx-runtime.109e40f8.js";import"./index.f1bc5ebf.js";const i=({title:t,desc:s,image:r,linkObj:o})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"porto-card flex flex-col justify-between",children:[e.jsxs("div",{className:"head p-[2.5rem] pb-[0]",children:[e.jsx("div",{className:"title mb-2 block font-semibold leading-9 text-[2rem]",children:e.jsx("h2",{children:t})}),e.jsx("div",{className:"desc font-normal text-base-2 text-xl my-6",children:e.jsx("h3",{children:s})})]}),e.jsx("div",{className:"content p-[2.5rem] pt-[0]",children:e.jsx("img",{src:r,className:"drop-shadow-[0_55px_55px_rgba(255,187,0,1)]",loading:"lazy"})})]}),e.jsx("style",{children:`
        .porto-card .content {
          max-height: 20em;
          border-radius: 0 0 20px 20px;
        }
      .porto-card .content img {
        position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
    object-fit: contain;
    background: #fff;
    border-radius: 20px;
      }
      `})]}),d=({data:t})=>t&&t.length>0&&t.map(s=>e.jsx(i,{title:s.title,desc:s.desc,image:s.image,linkObj:s.linkObj}));export{d as default};
