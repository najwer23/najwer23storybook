import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{r as c}from"./index-uubelm5h.js";import"./index-DGXUum9u.js";import{u as I}from"./useWindowSize-DKtumrTx.js";import{B as p}from"./Button-DRYQn4j-.js";const k="_carouselStyled_1vy0k_3",A="_carouselWrapper_1vy0k_45",N="_arrowLeft_1vy0k_55",T="_arrowRight_1vy0k_77",b="_arrowShow_1vy0k_99",t={carouselStyled:k,carouselWrapper:A,arrowLeft:N,arrowRight:T,arrowShow:b},v=({children:d,arrowLeftIcon:o,arrowRightIcon:_})=>{const e=c.useRef(null),[L,h]=c.useState(!1),[R,s]=c.useState(!1),[j]=I(),a=()=>{var n,m;return((n=e.current)==null?void 0:n.scrollWidth)/(((m=e.current)==null?void 0:m.childNodes.length)-2)};c.useEffect(()=>{let n=setTimeout(()=>{u()},1);return()=>clearTimeout(n)},[j]);const C=()=>{e.current.scrollLeft-=Math.floor(e.current.offsetWidth/a())*a()},W=()=>{e.current.scrollLeft+=Math.floor(e.current.offsetWidth/a())*a()},u=()=>{e.current.scrollLeft<=0?(h(!1),e.current.scrollWidth-e.current.clientWidth!==0?s(!0):s(!1)):e.current.scrollLeft>=e.current.scrollWidth-e.current.clientWidth?(h(!0),s(!1)):(h(!0),s(!0))};return r.jsx("div",{className:t.carouselWrapper,children:r.jsxs("div",{className:t.carouselStyled,ref:e,onScroll:u,children:[r.jsx("div",{className:[t.arrowLeft,L&&t.arrowShow].join(" "),children:r.jsx(p,{text:o,ariaLabel:"move carousel left",type:"button",onClick:C})}),d,r.jsx("div",{className:[t.arrowRight,R&&t.arrowShow].join(" "),children:r.jsx(p,{text:_,ariaLabel:"move carousel right",type:"button",onClick:W})})]})})};v.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{children:{required:!0,tsType:{name:"any"},description:""},arrowLeftIcon:{required:!0,tsType:{name:"any"},description:""},arrowRightIcon:{required:!0,tsType:{name:"any"},description:""}}};const z={title:"Carousel/Carousel ",component:v,tags:["autodocs"],argTypes:{}},i={args:{arrowLeftIcon:r.jsx("div",{children:"L"}),arrowRightIcon:r.jsx("div",{children:"R"}),children:r.jsx(r.Fragment,{children:Array.from({length:15},(d,o)=>r.jsx("img",{src:"https://source.unsplash.com/random/500x700",height:"700",width:"500",alt:""},o))})}},l={args:{arrowLeftIcon:r.jsx("div",{children:"L"}),arrowRightIcon:r.jsx("div",{children:"R"}),children:r.jsx(r.Fragment,{children:Array.from({length:10},(d,o)=>r.jsx("img",{src:"https://source.unsplash.com/random/300x400",height:"400",width:"300",alt:""},o))})}};var f,w,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    arrowLeftIcon: <div>L</div>,
    arrowRightIcon: <div>R</div>,
    children: <>\r
            {Array.from({
        length: 15
      }, (_, i) => <img key={i} src="https://source.unsplash.com/random/500x700" height="700" width="500" alt="" />)}\r
        </>
  }
}`,...(g=(w=i.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var y,x,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    arrowLeftIcon: <div>L</div>,
    arrowRightIcon: <div>R</div>,
    children: <>\r
            {Array.from({
        length: 10
      }, (_, i) => <img key={i} src="https://source.unsplash.com/random/300x400" height="400" width="300" alt="" />)}\r
        </>
  }
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const O=["CarouselStandard","CarouselStandardSmallerChild"];export{i as CarouselStandard,l as CarouselStandardSmallerChild,O as __namedExportsOrder,z as default};
