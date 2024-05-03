import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{r as a}from"./index-uubelm5h.js";import"./index-AeB2IjGr.js";import{u as C}from"./useWindowSize-DKtumrTx.js";import{B as l}from"./Button-BmVJkERK.js";const W="_carouselStyled_1vy0k_3",I="_carouselWrapper_1vy0k_45",N="_arrowLeft_1vy0k_55",T="_arrowRight_1vy0k_77",A="_arrowShow_1vy0k_99",n={carouselStyled:W,carouselWrapper:I,arrowLeft:N,arrowRight:T,arrowShow:A},y=({children:f,arrowLeftIcon:k,arrowRightIcon:b})=>{const e=a.useRef(null),[j,h]=a.useState(!1),[S,i]=a.useState(!1),[L]=C(),t=()=>{var d,c;return((d=e.current)==null?void 0:d.scrollWidth)/(((c=e.current)==null?void 0:c.childNodes.length)-2)};a.useEffect(()=>{let d=setTimeout(()=>{g()},1);return()=>clearTimeout(d)},[L]);const R=()=>{e.current.scrollLeft-=Math.floor(e.current.offsetWidth/t())*t()},_=()=>{e.current.scrollLeft+=Math.floor(e.current.offsetWidth/t())*t()},g=()=>{e.current.scrollLeft<=0?(h(!1),e.current.scrollWidth-e.current.clientWidth!==0?i(!0):i(!1)):e.current.scrollLeft>=e.current.scrollWidth-e.current.clientWidth?(h(!0),i(!1)):(h(!0),i(!0))};return r.jsx("div",{className:n.carouselWrapper,children:r.jsxs("div",{className:n.carouselStyled,ref:e,onScroll:g,children:[r.jsx("div",{className:[n.arrowLeft,j&&n.arrowShow].join(" "),children:r.jsx(l,{text:k,ariaLabel:"move carousel left",type:"button",onClick:R})}),f,r.jsx("div",{className:[n.arrowRight,S&&n.arrowShow].join(" "),children:r.jsx(l,{text:b,ariaLabel:"move carousel right",type:"button",onClick:_})})]})})};y.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{children:{required:!0,tsType:{name:"any"},description:""},arrowLeftIcon:{required:!0,tsType:{name:"any"},description:""},arrowRightIcon:{required:!0,tsType:{name:"any"},description:""}}};const z={title:"Carousel/Carousel ",component:y,tags:["autodocs"],argTypes:{}},o={args:{arrowLeftIcon:r.jsx("div",{children:"L"}),arrowRightIcon:r.jsx("div",{children:"R"}),children:r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{width:"500px",height:"400px",margin:"20px",background:"green"}}),r.jsx("div",{style:{width:"500px",height:"400px",margin:"20px",background:"red"}}),r.jsx("div",{style:{width:"500px",height:"400px",margin:"20px",background:"yellow"}}),r.jsx("div",{style:{width:"500px",height:"400px",margin:"20px",background:"blue"}}),r.jsx("div",{style:{width:"500px",height:"400px",margin:"20px",background:"grey"}})]})}},s={args:{arrowLeftIcon:r.jsx("div",{children:"L"}),arrowRightIcon:r.jsx("div",{children:"R"}),children:r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{width:"250px",height:"400px",margin:"20px",background:"green"},children:"1"}),r.jsx("div",{style:{width:"250px",height:"400px",margin:"20px",background:"green"},children:"2"}),r.jsx("div",{style:{width:"250px",height:"400px",margin:"20px",background:"green"},children:"3"}),r.jsx("div",{style:{width:"250px",height:"400px",margin:"20px",background:"green"},children:"4"}),r.jsx("div",{style:{width:"250px",height:"400px",margin:"20px",background:"green"},children:"5"}),r.jsx("div",{style:{width:"250px",height:"400px",margin:"20px",background:"green"},children:"6"}),r.jsx("div",{style:{width:"250px",height:"400px",margin:"20px",background:"green"},children:"7"}),r.jsx("div",{style:{width:"250px",height:"400px",margin:"20px",background:"green"},children:"8"}),r.jsx("div",{style:{width:"250px",height:"400px",margin:"20px",background:"green"},children:"9"}),r.jsx("div",{style:{width:"250px",height:"400px",margin:"20px",background:"green"},children:"10"}),r.jsx("div",{style:{width:"250px",height:"400px",margin:"20px",background:"green"},children:"11"}),r.jsx("div",{style:{width:"250px",height:"400px",margin:"20px",background:"green"},children:"12"})]})}};var p,x,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    arrowLeftIcon: <div>L</div>,
    arrowRightIcon: <div>R</div>,
    children: <>\r
            <div style={{
        width: "500px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}></div>\r
            <div style={{
        width: "500px",
        height: "400px",
        margin: "20px",
        background: "red"
      }}></div>\r
            <div style={{
        width: "500px",
        height: "400px",
        margin: "20px",
        background: "yellow"
      }}></div>\r
            <div style={{
        width: "500px",
        height: "400px",
        margin: "20px",
        background: "blue"
      }}></div>\r
            <div style={{
        width: "500px",
        height: "400px",
        margin: "20px",
        background: "grey"
      }}></div>\r
        </>
  }
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var v,w,m;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    arrowLeftIcon: <div>L</div>,
    arrowRightIcon: <div>R</div>,
    children: <>\r
            <div style={{
        width: "250px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}>1</div>\r
            <div style={{
        width: "250px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}>2</div>\r
            <div style={{
        width: "250px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}>3</div>\r
            <div style={{
        width: "250px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}>4</div>\r
            <div style={{
        width: "250px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}>5</div>\r
            <div style={{
        width: "250px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}>6</div>\r
            <div style={{
        width: "250px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}>7</div>\r
            <div style={{
        width: "250px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}>8</div>\r
            <div style={{
        width: "250px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}>9</div>\r
            <div style={{
        width: "250px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}>10</div>\r
            <div style={{
        width: "250px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}>11</div>\r
            <div style={{
        width: "250px",
        height: "400px",
        margin: "20px",
        background: "green"
      }}>12</div>\r
        </>
  }
}`,...(m=(w=s.parameters)==null?void 0:w.docs)==null?void 0:m.source}}};const O=["CarouselStandard","CarouselStandardSmallerChild"];export{o as CarouselStandard,s as CarouselStandardSmallerChild,O as __namedExportsOrder,z as default};
