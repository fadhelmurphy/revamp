import{j as e}from"./jsx-runtime.109e40f8.js";import"./index.f1bc5ebf.js";const a=({title:d,desc:r,image:s,linkObj:i})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"porto-card",children:[e.jsxs("div",{className:"head",children:[e.jsx("div",{className:"title mb-2 block font-semibold leading-6 text-2xl",children:e.jsx("h2",{children:d})}),e.jsx("div",{className:"desc font-normal text-base-2",children:e.jsx("h3",{children:r})})]}),e.jsx("div",{className:"content",children:e.jsx("img",{src:s,className:"drop-shadow-[0_55px_55px_rgba(255,187,0,1)]",loading:"lazy"})})]}),e.jsx("style",{children:`
        .porto-card {
          border-radius: 20px;
          background: #fff;
          -webkit-mask: linear-gradient(345deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 35%);
        }
        .porto-card .head {
          padding: 40px;
        }
        .porto-card .content {
          max-height: 20em;
          border-radius: 0 0 20px 20px;
          padding: 40px;
        }
      .porto-card .content img {
        position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
    object-fit: cover;
    background: #fff;
    border-radius: 20px;
      }
      `})]}),n=({data:d})=>d&&d.length>0&&d.map(r=>e.jsx(a,{title:r.title,desc:r.desc,image:r.image,linkObj:r.linkObj}));export{n as default};
