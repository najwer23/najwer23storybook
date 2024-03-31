import{j as i}from"./jsx-runtime-DRTy3Uxn.js";import{r as s}from"./index-BBkUAzwr.js";import{u as E}from"./useWindowSize-BP6sRLWr.js";const D="_masonryContainer_qjpxb_3",T="_masonryColumn_qjpxb_21",W="_masonryColumnChild_qjpxb_37",v={masonryContainer:D,masonryColumn:T,masonryColumnChild:W};function O(){const n=s.useRef(!1);return s.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),s.useCallback(()=>n.current,[])}const S={width:void 0,height:void 0};function A(n){const{ref:t,box:r="content-box"}=n,[{width:l,height:c},h]=s.useState(S),a=O(),m=s.useRef({...S}),f=s.useRef(void 0);return f.current=n.onResize,s.useEffect(()=>{if(!t.current||typeof window>"u"||!("ResizeObserver"in window))return;const b=new ResizeObserver(([g])=>{const d=r==="border-box"?"borderBoxSize":r==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",p=k(g,d,"inlineSize"),y=k(g,d,"blockSize");if(m.current.width!==p||m.current.height!==y){const e={width:p,height:y};m.current.width=p,m.current.height=y,f.current?f.current(e):a()&&h(e)}});return b.observe(t.current,{box:r}),()=>{b.disconnect()}},[r,t,a]),{width:l,height:c}}function k(n,t,r){return n[t]?Array.isArray(n[t])?n[t][0][r]:n[t][r]:t==="contentBoxSize"?n.contentRect[r==="inlineSize"?"width":"height"]:void 0}const G=({arrWithChildren:n,onHeightChange:t,id:r})=>{const l=s.useRef(null),{height:c=0}=A({ref:l});return s.useEffect(()=>{t(c)},[c]),i.jsx("div",{ref:l,className:v.masonryColumn,children:s.Children.map(n,(h,a)=>i.jsx("div",{className:v.masonryColumnChild,children:h},r+a))},r)};G.__docgenInfo={description:"",methods:[],displayName:"GridMasonryColumn",props:{arrWithChildren:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},onHeightChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(height: number) => void",signature:{arguments:[{type:{name:"number"},name:"height"}],return:{name:"void"}}},description:""},id:{required:!0,tsType:{name:"string"},description:""}}};const N=({children:n,gap:t,col:r,onGridMasonryLoadEnd:l})=>{const[c,h]=s.useState(0),[a]=E(),m=e=>e<767.98?r.mobile:e>=768.98&&e<1199.98?r.tablet:e>=1199.98&&e<1599.98?r.smallDesktop:e>=1599.98?r.desktop:3,[f,b]=s.useState(()=>m(a)),g=e=>Array.from({length:e}).map((u,o)=>({name:`col${o}`,arrWithElm:[],height:0})),[d,p]=s.useState(()=>g(f)),y=e=>[...e].sort((u,o)=>u.height-o.height)[0].name,w=(e,u)=>{p(d.map(o=>o.name===u?{...o,height:e}:o))};return s.useEffect(()=>{m(a)!=f&&(h(0),b(m(a)),p(g(m(a))))},[a]),s.useEffect(()=>{const e=setTimeout(()=>{if(c<n.length){const u=y(d);p(d.map(o=>o.name===u?{...o,arrWithElm:[...o.arrWithElm,n[c]]}:o)),h(o=>o+1),c==n.length-1&&l&&l(!0)}},40);return()=>clearTimeout(e)},[JSON.stringify(d.map(({height:e})=>e))]),i.jsx("div",{className:v.masonryContainer,style:{"--n23-m-fc-m":r.mobile,"--n23-m-fc-t":r.tablet,"--n23-m-fc-sd":r.smallDesktop,"--n23-m-fc-d":r.desktop,"--n23-m-fg-c":t.col,"--n23-m-fg-r":t.row},children:d.map(({arrWithElm:e,name:u})=>i.jsx(G,{arrWithChildren:e,onHeightChange:o=>w(o,u),id:u},"parent"+u))})};N.__docgenInfo={description:"",methods:[],displayName:"GridMasonry",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},gap:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	col: string;\r
	row: string;\r
}`,signature:{properties:[{key:"col",value:{name:"string",required:!0}},{key:"row",value:{name:"string",required:!0}}]}},description:""},col:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	mobile: number;\r
	smallDesktop: number;\r
	desktop: number;\r
	tablet: number;\r
}`,signature:{properties:[{key:"mobile",value:{name:"number",required:!0}},{key:"smallDesktop",value:{name:"number",required:!0}},{key:"desktop",value:{name:"number",required:!0}},{key:"tablet",value:{name:"number",required:!0}}]}},description:""},onGridMasonryLoadEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(isGridMasonryLoadEnd: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isGridMasonryLoadEnd"}],return:{name:"void"}}},description:""}}};const P={title:"Grid-Masonry/GridMasonry",component:N,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},H=Array.from({length:20}).map((n,t)=>i.jsx("div",{style:{background:"#"+Math.floor(Math.random()*16777215).toString(16)},children:i.jsxs(i.Fragment,{children:[i.jsx("div",{children:t}),"MSMSM SMSS".repeat(Math.floor(Math.random()*160))]})},t)),C={args:{gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2},children:H}},x={args:{gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2},children:[i.jsx("div",{children:"The best way to predict the future is to invent it."}),i.jsx("div",{children:"Stay hungry, stay foolish"}),i.jsx("div",{children:"Growth and comfort do not coexist."})]}};var M,j,_;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(j=C.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var q,z,R;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=(z=x.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const F=["Grid3columns","GridDynamicColumns"];export{C as Grid3columns,x as GridDynamicColumns,F as __namedExportsOrder,P as default};
