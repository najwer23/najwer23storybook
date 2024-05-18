import{j as r}from"./jsx-runtime-qGIIFXMu.js";import{r as c}from"./index-CDs2tPxN.js";import"./index-BuaxHuX1.js";import{u as C}from"./useWindowSize-BPVZiKvI.js";import{B as f}from"./Button-BCuiV0E9.js";const q="_carouselStyled_1aq4f_3",A="_carouselWrapper_1aq4f_43",N="_arrowLeft_1aq4f_53",T="_arrowRight_1aq4f_75",b="_arrowShow_1aq4f_97",t={carouselStyled:q,carouselWrapper:A,arrowLeft:N,arrowRight:T,arrowShow:b},S=({children:d,arrowLeftIcon:o,arrowRightIcon:y})=>{const e=c.useRef(null),[R,h]=c.useState(!1),[j,s]=c.useState(!1),[v]=C(),a=()=>{var n,m;return((n=e.current)==null?void 0:n.scrollWidth)/(((m=e.current)==null?void 0:m.childNodes.length)-2)};c.useEffect(()=>{let n=setTimeout(()=>{u()},1);return()=>clearTimeout(n)},[v]);const W=()=>{e.current.scrollLeft-=Math.floor(e.current.offsetWidth/a())*a()},I=()=>{e.current.scrollLeft+=Math.floor(e.current.offsetWidth/a())*a()},u=()=>{e.current.scrollLeft<=0?(h(!1),e.current.scrollWidth-e.current.clientWidth!==0?s(!0):s(!1)):e.current.scrollLeft>=e.current.scrollWidth-e.current.clientWidth?(h(!0),s(!1)):(h(!0),s(!0))};return r.jsx("div",{className:t.carouselWrapper,children:r.jsxs("div",{className:t.carouselStyled,ref:e,onScroll:u,children:[r.jsx("div",{className:[t.arrowLeft,R&&t.arrowShow].join(" "),children:r.jsx(f,{text:o,ariaLabel:"move carousel left",type:"button",onClick:W})}),d,r.jsx("div",{className:[t.arrowRight,j&&t.arrowShow].join(" "),children:r.jsx(f,{text:y,ariaLabel:"move carousel right",type:"button",onClick:I})})]})})};S.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{children:{required:!0,tsType:{name:"any"},description:""},arrowLeftIcon:{required:!0,tsType:{name:"any"},description:""},arrowRightIcon:{required:!0,tsType:{name:"any"},description:""}}};const M={title:"Carousel/Carousel ",component:S,tags:["autodocs"],argTypes:{}},i={args:{arrowLeftIcon:r.jsx("div",{children:"L"}),arrowRightIcon:r.jsx("div",{children:"R"}),children:r.jsx(r.Fragment,{children:Array.from({length:15},(d,o)=>r.jsx("img",{src:"https://source.unsplash.com/random/500x700",height:"700",width:"500",alt:""},o))})}},l={args:{arrowLeftIcon:r.jsx("div",{children:"L"}),arrowRightIcon:r.jsx("div",{children:"R"}),children:r.jsx(r.Fragment,{children:Array.from({length:10},(d,o)=>r.jsx("img",{src:"https://source.unsplash.com/random/300x400",height:"400",width:"300",alt:""},o))})}};var p,w,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    arrowLeftIcon: <div>L</div>,
    arrowRightIcon: <div>R</div>,
    children: <>\r
            {Array.from({
        length: 15
      }, (_, i) => <img key={i} src="https://source.unsplash.com/random/500x700" height="700" width="500" alt="" />)}\r
        </>
  }
}`,...(g=(w=i.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var x,_,L;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    arrowLeftIcon: <div>L</div>,
    arrowRightIcon: <div>R</div>,
    children: <>\r
            {Array.from({
        length: 10
      }, (_, i) => <img key={i} src="https://source.unsplash.com/random/300x400" height="400" width="300" alt="" />)}\r
        </>
  }
}`,...(L=(_=l.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const z=["Default","CarouselStandardSmallerChild"];export{l as CarouselStandardSmallerChild,i as Default,z as __namedExportsOrder,M as default};
