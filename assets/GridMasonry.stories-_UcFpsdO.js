import{j as a}from"./jsx-runtime-DRTy3Uxn.js";import{r as s}from"./index-BBkUAzwr.js";import{u as G}from"./useWindowSize-BP6sRLWr.js";const E="_masonryContainer_qjpxb_3",D="_masonryColumn_qjpxb_21",T="_masonryColumnChild_qjpxb_37",v={masonryContainer:E,masonryColumn:D,masonryColumnChild:T};function W(){const n=s.useRef(!1);return s.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),s.useCallback(()=>n.current,[])}const S={width:void 0,height:void 0};function O(n){const{ref:t,box:e="content-box"}=n,[{width:d,height:l},u]=s.useState(S),c=W(),h=s.useRef({...S}),f=s.useRef(void 0);return f.current=n.onResize,s.useEffect(()=>{if(!t.current||typeof window>"u"||!("ResizeObserver"in window))return;const g=new ResizeObserver(([m])=>{const p=e==="border-box"?"borderBoxSize":e==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",y=w(m,p,"inlineSize"),b=w(m,p,"blockSize");if(h.current.width!==y||h.current.height!==b){const i={width:y,height:b};h.current.width=y,h.current.height=b,f.current?f.current(i):c()&&u(i)}});return g.observe(t.current,{box:e}),()=>{g.disconnect()}},[e,t,c]),{width:d,height:l}}function w(n,t,e){return n[t]?Array.isArray(n[t])?n[t][0][e]:n[t][e]:t==="contentBoxSize"?n.contentRect[e==="inlineSize"?"width":"height"]:void 0}const R=({arrWithChildren:n,onHeightChange:t,id:e})=>{const d=s.useRef(null),{height:l=0}=O({ref:d});return s.useEffect(()=>{t(l)},[l]),a.jsx("div",{ref:d,className:v.masonryColumn,children:s.Children.map(n,(u,c)=>a.jsx("div",{className:v.masonryColumnChild,children:u},e+c))},e)};R.__docgenInfo={description:"",methods:[],displayName:"GridMasonryColumn",props:{arrWithChildren:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},onHeightChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(height: number) => void",signature:{arguments:[{type:{name:"number"},name:"height"}],return:{name:"void"}}},description:""},id:{required:!0,tsType:{name:"string"},description:""}}};const N=({children:n,gap:t,col:e})=>{const[d,l]=s.useState(0),[u]=G(),c=r=>r<767.98?e.mobile:r>=768.98&&r<1199.98?e.tablet:r>=1199.98&&r<1599.98?e.smallDesktop:r>=1599.98?e.desktop:3,[h,f]=s.useState(()=>c(u)),g=r=>Array.from({length:r}).map((i,o)=>({name:`col${o}`,arrWithElm:[],height:0})),[m,p]=s.useState(()=>g(h)),y=r=>[...r].sort((i,o)=>i.height-o.height)[0].name,b=(r,i)=>{p(m.map(o=>o.name===i?{...o,height:r}:o))};return s.useEffect(()=>{c(u)!=h&&(l(0),f(c(u)),p(g(c(u))))},[u]),s.useEffect(()=>{const r=setTimeout(()=>{if(d<n.length){const i=y(m);p(m.map(o=>o.name===i?{...o,arrWithElm:[...o.arrWithElm,n[d]]}:o)),l(o=>o+1)}},40);return()=>clearTimeout(r)},[JSON.stringify(m.map(({height:r})=>r))]),a.jsx("div",{className:v.masonryContainer,style:{"--n23-m-fc-m":e.mobile,"--n23-m-fc-t":e.tablet,"--n23-m-fc-sd":e.smallDesktop,"--n23-m-fc-d":e.desktop,"--n23-m-fg-c":t.col,"--n23-m-fg-r":t.row},children:m.map(({arrWithElm:r,name:i})=>a.jsx(R,{arrWithChildren:r,onHeightChange:o=>b(o,i),id:i},"parent"+i))})};N.__docgenInfo={description:"",methods:[],displayName:"GridMasonry",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},gap:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	col: string;\r
	row: string;\r
}`,signature:{properties:[{key:"col",value:{name:"string",required:!0}},{key:"row",value:{name:"string",required:!0}}]}},description:""},col:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	mobile: number;\r
	smallDesktop: number;\r
	desktop: number;\r
	tablet: number;\r
}`,signature:{properties:[{key:"mobile",value:{name:"number",required:!0}},{key:"smallDesktop",value:{name:"number",required:!0}},{key:"desktop",value:{name:"number",required:!0}},{key:"tablet",value:{name:"number",required:!0}}]}},description:""}}};const P={title:"Grid-Masonry/GridMasonry",component:N,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},A=Array.from({length:20}).map((n,t)=>a.jsx("div",{style:{background:"#"+Math.floor(Math.random()*16777215).toString(16)},children:a.jsxs(a.Fragment,{children:[a.jsx("div",{children:t}),"MSMSM SMSS".repeat(Math.floor(Math.random()*160))]})},t)),C={args:{gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2},children:A}},x={args:{gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2},children:[a.jsx("div",{children:"The best way to predict the future is to invent it."}),a.jsx("div",{children:"Stay hungry, stay foolish"}),a.jsx("div",{children:"Growth and comfort do not coexist."})]}};var k,M,j;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    gap: {
      col: "20px",
      row: "20px"
    },
    col: {
      smallDesktop: 3,
      desktop: 3,
      mobile: 1,
      tablet: 2
    },
    children: items
  }
}`,...(j=(M=C.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var _,z,q;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    gap: {
      col: "20px",
      row: "20px"
    },
    col: {
      smallDesktop: 3,
      desktop: 3,
      mobile: 1,
      tablet: 2
    },
    children: [<div>The best way to predict the future is to invent it.</div>, <div>Stay hungry, stay foolish</div>, <div>Growth and comfort do not coexist.</div>]
  }
}`,...(q=(z=x.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};const F=["Grid3columns","GridDynamicColumns"];export{C as Grid3columns,x as GridDynamicColumns,F as __namedExportsOrder,P as default};
