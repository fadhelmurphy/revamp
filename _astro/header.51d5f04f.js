import{r as c,R as f}from"./index.f1bc5ebf.js";const l="/revamp",p=[{type:"text",text:"React"},{type:"image",url:`${l}/home/stack-slider/webpack.png`,alt:"webpack fadhel"},{type:"image",url:`${l}/home/stack-slider/nextjs-icon.png`,alt:"nextjs fadhel"},{type:"image",url:`${l}/home/stack-slider/gatsby-icon.png`,alt:"gatsby fadhel"},{type:"image",url:`${l}/home/stack-slider/flutter.png`,alt:"flutter fadhel"},{type:"text",text:"MobX"},{type:"text",text:"Zustand"},{type:"text",text:"Redux"},{type:"image",url:`${l}/home/stack-slider/tensorflow-logo.png`,alt:"tensorflow fadhel"},{type:"text",text:"Sklearn"},{type:"text",text:"Express.js"},{type:"image",url:`${l}/home/stack-slider/mysql.png`,alt:"mysql fadhel"},{type:"image",url:`${l}/home/stack-slider/laravel.png`,alt:"laravel fadhel"},{type:"text",text:"GraphQL"},{type:"text",text:"MongoDB"}];var e={},h={get exports(){return e},set exports(a){e=a}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=c,g=Symbol.for("react.element"),u=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,b=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function m(a,t,s){var r,o={},i=null,d=null;s!==void 0&&(i=""+s),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(d=t.ref);for(r in t)y.call(t,r)&&!v.hasOwnProperty(r)&&(o[r]=t[r]);if(a&&a.defaultProps)for(r in t=a.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:g,type:a,key:i,ref:d,props:o,_owner:b.current}}n.Fragment=u;n.jsx=m;n.jsxs=m;(function(a){a.exports=n})(h);const w=({data:a=p})=>{const t=[...a,...a];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mx-auto mb-9 md:mb-24",children:e.jsx("div",{className:"slider h-[16vh] md:h-[30vh] flex items-start md:items-stretch",children:e.jsx("div",{className:"slide-track",children:t&&t.length>0&&t.map((s,r)=>s.type==="text"?e.jsx("div",{className:"slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg",children:e.jsx("h2",{className:"text-gray-500 text-2xl font-bold",children:s.text})},String(r+1)):e.jsx("div",{className:"slide w-48 h-24 md:w-80 md:h-36 relative backdrop-blur-sm bg-white/50 drop-shadow-2xl rounded-lg",children:e.jsx("img",{className:"p-6 md:p-[3.2rem]",src:s.url,alt:s.alt})},String(r+1)))})})}),e.jsx("style",{children:`

@keyframes scroll {
    100% {
      transform: translateX(calc((-20rem) * ${a.length}));
    }
  }
          .slider {
            margin: auto;
            overflow: hidden;
            position: relative;
            width: auto;
          }
          
          .slide-track {
            width:calc(20rem * ${t.length});
            animation: scroll 25s linear infinite;
            display: flex;
            gap: 3rem;
          }
          .slide {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            align-self: center;
            word-wrap: break-word;
          }
          .slide img {
            display: block;
            object-fit: contain;
            -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
          }
          .slide img:hover {
            -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
            filter: grayscale(0%);
          }
          .slide-track:has(.slide:hover) {
            animation-play-state: paused!important;
          }
        `})]})},k=f.memo(w),j="%F0%9F%91%8B%F0%9F%8F%BC",_=({yourname:a,yourRole:t})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-72 md:h-[55vh] mb-6 md:mb-24 px-8 md:px-0 flex flex-col justify-end",children:e.jsxs("div",{className:"inner container md:mx-auto text-left md:text-center",children:[e.jsx("p",{className:"text-2xl md:text-6xl text-base-2 font-semibold font-header flex justify-center",dangerouslySetInnerHTML:{__html:a}}),e.jsx("h1",{className:"title text-4xl md:leading-none md:text-[7rem] font-semibold font-header mt-4",children:t})]})}),e.jsx(k,{})]});_.defaultProps={yourname:`Hi, I'm Fadhel. <span style="margin-left: 1rem"><img src="https://emojicdn.elk.sh/${j}?style=apple" class="dada-dada" alt="dada-dada" width="60" height="60" /></span>`,yourRole:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"relative stabilo after:h-[1vh] after:md:h-[4vh]",children:"Software"})," Engineer ",e.jsx("br",{}),"Based in Tangerang",e.jsx("style",{children:`
        .dada-dada {
          animation-name: dada-dada-animation;  /* Refers to the name of your @keyframes element below */
          animation-duration: 2.5s;        /* Change to speed up or slow down */
          animation-iteration-count: infinite;  /* Never stop waving :) */
          transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
          display: inline-block;
        }
        @keyframes dada-dada-animation {
            0% { transform: rotate( 0.0deg) }
           10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
           20% { transform: rotate(-8.0deg) }
           30% { transform: rotate(14.0deg) }
           40% { transform: rotate(-4.0deg) }
           50% { transform: rotate(10.0deg) }
           60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
          100% { transform: rotate( 0.0deg) }
        }

        .stabilo {
        transition: all 0.3s ease, background-position 1ms;
        }
        .stabilo::after {
            content: "";
            width: 100%;
            transform: rotate(-2deg) skew(5deg);
            background-color: rgb(254 202 202);
            background-image: linear-gradient(to right,#f9d2af, #fdf2f8);
            position: absolute;
            right: 0;
            bottom: 18%;
            z-index: -1;
        }
        `})]})};export{_ as default};
