import{j as r}from"./jsx-runtime-qGIIFXMu.js";import{r as c}from"./index-CDs2tPxN.js";import"./index-CtMl0w8j.js";import{u as A}from"./useWindowSize-BPVZiKvI.js";import{B as p}from"./Button-I3ROvjRJ.js";const T="_carousel_6tz0x_3",z="_carouselWrapper_6tz0x_43",N="_arrowLeft_6tz0x_53",b="_arrowRight_6tz0x_75",k="_arrowShow_6tz0x_97",t={carousel:T,carouselWrapper:z,arrowLeft:N,arrowRight:b,arrowShow:k},v=({children:d,arrowLeftIcon:o,arrowRightIcon:y,gap:R="60px"})=>{const e=c.useRef(null),[j,h]=c.useState(!1),[S,s]=c.useState(!1),[W]=A(),a=()=>{var n,m;return((n=e.current)==null?void 0:n.scrollWidth)/(((m=e.current)==null?void 0:m.childNodes.length)-2)};c.useEffect(()=>{let n=setTimeout(()=>{u()},1);return()=>clearTimeout(n)},[W]);const I=()=>{e.current.scrollLeft-=Math.floor(e.current.offsetWidth/a())*a()},C=()=>{e.current.scrollLeft+=Math.floor(e.current.offsetWidth/a())*a()},u=()=>{e.current.scrollLeft<=0?(h(!1),e.current.scrollWidth-e.current.clientWidth!==0?s(!0):s(!1)):e.current.scrollLeft>=e.current.scrollWidth-e.current.clientWidth?(h(!0),s(!1)):(h(!0),s(!0))};return r.jsx("div",{className:t.carouselWrapper,style:{"--n23-c-carousel-gap":R},children:r.jsxs("div",{className:t.carousel,ref:e,onScroll:u,children:[r.jsx("div",{className:[t.arrowLeft,j&&t.arrowShow].join(" "),children:r.jsx(p,{text:o,ariaLabel:"move carousel left",type:"button",onClick:I})}),d,r.jsx("div",{className:[t.arrowRight,S&&t.arrowShow].join(" "),children:r.jsx(p,{text:y,ariaLabel:"move carousel right",type:"button",onClick:C})})]})})};v.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{children:{required:!0,tsType:{name:"any"},description:""},arrowLeftIcon:{required:!0,tsType:{name:"any"},description:""},arrowRightIcon:{required:!0,tsType:{name:"any"},description:""},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"60px"',computed:!1}}}};const M={title:"Carousel/Carousel ",component:v,tags:["autodocs"],argTypes:{}},i={args:{arrowLeftIcon:r.jsx("div",{children:"L"}),arrowRightIcon:r.jsx("div",{children:"R"}),children:r.jsx(r.Fragment,{children:Array.from({length:15},(d,o)=>r.jsx("img",{src:"https://source.unsplash.com/random/500x700",height:"700",width:"500",alt:""},o))})}},l={args:{arrowLeftIcon:r.jsx("div",{children:"L"}),arrowRightIcon:r.jsx("div",{children:"R"}),children:r.jsx(r.Fragment,{children:Array.from({length:10},(d,o)=>r.jsx("img",{src:"https://source.unsplash.com/random/300x400",height:"400",width:"300",alt:""},o))})}};var f,w,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(L=(_=l.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const O=["Default","CarouselStandardSmallerChild"];export{l as CarouselStandardSmallerChild,i as Default,O as __namedExportsOrder,M as default};
