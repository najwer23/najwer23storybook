import{j as c}from"./jsx-runtime-QvZ8i92b.js";import{r as s}from"./index-uubelm5h.js";import{u as j}from"./useWindowSize-DKtumrTx.js";const N="_masonryContainer_dd4j2_15",q="_masonryColumn_dd4j2_33",E="_masonryColumnChild_dd4j2_53",S={masonryContainer:N,masonryColumn:q,masonryColumnChild:E};function W(){const n=s.useRef(!1);return s.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),s.useCallback(()=>n.current,[])}const x={width:void 0,height:void 0};function D(n){const{ref:t,box:r="content-box"}=n,[{width:l,height:m},p]=s.useState(x),i=W(),u=s.useRef({...x}),f=s.useRef(void 0);return f.current=n.onResize,s.useEffect(()=>{if(!t.current||typeof window>"u"||!("ResizeObserver"in window))return;const b=new ResizeObserver(([g])=>{const d=r==="border-box"?"borderBoxSize":r==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",h=v(g,d,"inlineSize"),y=v(g,d,"blockSize");if(u.current.width!==h||u.current.height!==y){const e={width:h,height:y};u.current.width=h,u.current.height=y,f.current?f.current(e):i()&&p(e)}});return b.observe(t.current,{box:r}),()=>{b.disconnect()}},[r,t,i]),{width:l,height:m}}function v(n,t,r){return n[t]?Array.isArray(n[t])?n[t][0][r]:n[t][r]:t==="contentBoxSize"?n.contentRect[r==="inlineSize"?"width":"height"]:void 0}const z=({arrWithChildren:n,onHeightChange:t,id:r})=>{const l=s.useRef(null),{height:m=0}=D({ref:l});return s.useEffect(()=>{t(m)},[m]),c.jsx("div",{ref:l,className:S.masonryColumn,children:s.Children.map(n,(p,i)=>c.jsx("div",{className:S.masonryColumnChild,children:p},r+i))},r)};z.__docgenInfo={description:"",methods:[],displayName:"GridMasonryColumn",props:{arrWithChildren:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},onHeightChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(height: number) => void",signature:{arguments:[{type:{name:"number"},name:"height"}],return:{name:"void"}}},description:""},id:{required:!0,tsType:{name:"string"},description:""}}};const R=({children:n,gap:t,col:r,onGridMasonryLoadEnd:l})=>{const[m,p]=s.useState(0),[i]=j(),u=e=>e<767.98?r.mobile:e>=768.98&&e<1199.98?r.tablet:e>=1199.98&&e<1599.98?r.smallDesktop:e>=1599.98?r.desktop:3,[f,b]=s.useState(()=>u(i)),g=e=>Array.from({length:e}).map((a,o)=>({name:`col${o}`,arrWithElm:[],height:0})),[d,h]=s.useState(()=>g(f)),y=e=>[...e].sort((a,o)=>a.height-o.height)[0].name,M=(e,a)=>{h(d.map(o=>o.name===a?{...o,height:e}:o))};return s.useEffect(()=>{u(i)!=f&&(p(0),b(u(i)),h(g(u(i))))},[i]),s.useEffect(()=>{const e=setTimeout(()=>{if(m<n.length){const a=y(d);h(d.map(o=>o.name===a?{...o,arrWithElm:[...o.arrWithElm,n[m]]}:o)),p(o=>o+1),m==n.length-1&&l&&l(!0)}},40);return()=>clearTimeout(e)},[JSON.stringify(d.map(({height:e})=>e))]),c.jsx("div",{className:S.masonryContainer,style:{"--n23-m-fc-m":r.mobile,"--n23-m-fc-t":r.tablet,"--n23-m-fc-sd":r.smallDesktop,"--n23-m-fc-d":r.desktop,"--n23-m-fg-c":t.col,"--n23-m-fg-r":t.row},children:d.map(({arrWithElm:e,name:a})=>c.jsx(z,{arrWithChildren:e,onHeightChange:o=>M(o,a),id:a},"parent"+a))})};R.__docgenInfo={description:"",methods:[],displayName:"GridMasonry",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},gap:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	col: string;\r
	row: string;\r
}`,signature:{properties:[{key:"col",value:{name:"string",required:!0}},{key:"row",value:{name:"string",required:!0}}]}},description:""},col:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	mobile: number;\r
	smallDesktop: number;\r
	desktop: number;\r
	tablet: number;\r
}`,signature:{properties:[{key:"mobile",value:{name:"number",required:!0}},{key:"smallDesktop",value:{name:"number",required:!0}},{key:"desktop",value:{name:"number",required:!0}},{key:"tablet",value:{name:"number",required:!0}}]}},description:""},onGridMasonryLoadEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(isGridMasonryLoadEnd: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isGridMasonryLoadEnd"}],return:{name:"void"}}},description:""}}};const H={title:"Grid-Masonry/GridMasonry",component:R,parameters:{layout:"centered"},tags:["autodocs"]},G=Array.from({length:20}).map((n,t)=>c.jsx("div",{style:{background:"#"+Math.floor(Math.random()*16777215).toString(16)},children:c.jsxs(c.Fragment,{children:[c.jsx("div",{children:t}),"MSMSM SMSS".repeat(Math.floor(Math.random()*160))]})},t)),C={args:{gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2},children:G}};var w,k,_;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(_=(k=C.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const I=["Default"];export{C as Default,I as __namedExportsOrder,H as default};