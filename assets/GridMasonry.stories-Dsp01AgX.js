import{j as c}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";import{u as N}from"./useWindowSize-TRHDy2XS.js";const E="_masonryContainer_1gnw0_8",j="_masonryColumn_1gnw0_17",T="_masonryColumnChild_1gnw0_27",S={masonryContainer:E,masonryColumn:j,masonryColumnChild:T};function W(){const r=s.useRef(!1);return s.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[]),s.useCallback(()=>r.current,[])}const k={width:void 0,height:void 0};function D(r){const{ref:t,box:e="content-box"}=r,[{width:d,height:f},l]=s.useState(k),p=W(),i=s.useRef({...k}),m=s.useRef(void 0);return m.current=r.onResize,s.useEffect(()=>{if(!t.current||typeof window>"u"||!("ResizeObserver"in window))return;const g=new ResizeObserver(([b])=>{const y=e==="border-box"?"borderBoxSize":e==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",u=v(b,y,"inlineSize"),h=v(b,y,"blockSize");if(i.current.width!==u||i.current.height!==h){const C={width:u,height:h};i.current.width=u,i.current.height=h,m.current?m.current(C):p()&&l(C)}});return g.observe(t.current,{box:e}),()=>{g.disconnect()}},[e,t,p]),{width:d,height:f}}function v(r,t,e){return r[t]?Array.isArray(r[t])?r[t][0][e]:r[t][e]:t==="contentBoxSize"?r.contentRect[e==="inlineSize"?"width":"height"]:void 0}const R=({arrWithChildren:r,onHeightChange:t,id:e})=>{const d=s.useRef(null),{height:f=0}=D({ref:d});return s.useEffect(()=>{t(f)},[f]),c.jsx("div",{ref:d,className:S.masonryColumn,children:s.Children.map(r,(l,p)=>c.jsx("div",{className:S.masonryColumnChild,children:l},e+p))},e)};R.__docgenInfo={description:"",methods:[],displayName:"GridMasonryColumn",props:{arrWithChildren:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},onHeightChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(height: number) => void",signature:{arguments:[{type:{name:"number"},name:"height"}],return:{name:"void"}}},description:""},id:{required:!0,tsType:{name:"string"},description:""}}};const q=({children:r,gap:t,col:e,onGridMasonryLoadEnd:d,delay:f=0})=>{const[l,p]=s.useState(0),[i]=N(),m=n=>n<767.98?e.mobile:n>=768.98&&n<1199.98?e.tablet:n>=1199.98&&n<1599.98?e.smallDesktop:n>=1599.98?e.desktop:3,[g,b]=s.useState(()=>m(i)),y=n=>Array.from({length:n}).map((a,o)=>({name:`col${o}`,arrWithElm:[],height:0})),[u,h]=s.useState(()=>y(g)),M=n=>[...n].sort((a,o)=>a.height-o.height)[0].name,C=(n,a)=>{h(u.map(o=>o.name===a?{...o,height:n}:o))};return s.useEffect(()=>{const n=setTimeout(()=>{m(i)!=g&&(p(0),b(m(i)),h(y(m(i))))},100);return()=>clearTimeout(n)},[i]),s.useEffect(()=>{const n=setTimeout(()=>{if(l<r.length){const a=M(u);h(u.map(o=>o.name===a?{...o,arrWithElm:[...o.arrWithElm,r[l]]}:o)),p(o=>o+1),l==r.length-1&&d&&d(!0)}},f);return()=>clearTimeout(n)},[JSON.stringify(u.map(({height:n})=>n))]),c.jsx("div",{className:S.masonryContainer,style:{"--n23-c-masonry-column-mobile":e.mobile,"--n23-c-masonry-column-tablet":e.tablet,"--n23-c-masonry-column-small-desktop":e.smallDesktop,"--n23-c-masonry-column-desktop":e.desktop,"--n23-c-masonry-column-gap":t.col,"--n23-c-masonry-row-gap":t.row},children:u.map(({arrWithElm:n,name:a})=>c.jsx(R,{arrWithChildren:n,onHeightChange:o=>C(o,a),id:a},"parent"+a))})};q.__docgenInfo={description:"",methods:[],displayName:"GridMasonry",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},gap:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	col: string;
	row: string;
}`,signature:{properties:[{key:"col",value:{name:"string",required:!0}},{key:"row",value:{name:"string",required:!0}}]}},description:""},col:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	mobile: number;
	smallDesktop: number;
	desktop: number;
	tablet: number;
}`,signature:{properties:[{key:"mobile",value:{name:"number",required:!0}},{key:"smallDesktop",value:{name:"number",required:!0}},{key:"desktop",value:{name:"number",required:!0}},{key:"tablet",value:{name:"number",required:!0}}]}},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onGridMasonryLoadEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(isGridMasonryLoadEnd: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isGridMasonryLoadEnd"}],return:{name:"void"}}},description:""}}};const I={title:"Grid-Masonry/GridMasonry",component:q,parameters:{layout:"centered"},tags:["autodocs"]},G=Array.from({length:20}).map((r,t)=>c.jsx("div",{style:{background:"#"+Math.floor(Math.random()*16777215).toString(16)},children:c.jsxs(c.Fragment,{children:[c.jsx("div",{children:t}),"MSMSM SMSS".repeat(Math.floor(Math.random()*160))]})},t)),w={args:{gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2},children:G}};var x,_,z;w.parameters={...w.parameters,docs:{...(x=w.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(z=(_=w.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const B=["Default"];export{w as Default,B as __namedExportsOrder,I as default};
