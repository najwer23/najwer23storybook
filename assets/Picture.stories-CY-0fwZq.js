import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as b}from"./index-CDs2tPxN.js";const S="_picture_izf7q_3",T="_border_izf7q_9",j="_loaded_izf7q_35",a={picture:S,border:T,loaded:j},n=({src:r,alt:y,ar:x,kind:f})=>{const[_,q]=b.useState(!1);return e.jsx("picture",{className:[a.picture,_&&a.loaded,a[f??""]].join(" "),children:e.jsx("img",{width:x,height:1,src:r,alt:y,loading:"lazy",onLoad:()=>q(!0)})})};n.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},ar:{required:!1,tsType:{name:"number"},description:""},kind:{required:!1,tsType:{name:"literal",value:'"border"'},description:""},figcaption:{required:!1,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},ar:{required:!1,tsType:{name:"number"},description:""},kind:{required:!1,tsType:{name:"literal",value:'"border"'},description:""},figcaption:{required:!1,tsType:{name:"string"},description:""}}};const v={title:"Picture/Picture",component:n,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{src:"https://source.unsplash.com/random/300x400",alt:"",ar:3/4},decorators:[r=>e.jsx(r,{})]},t={args:{src:"https://source.unsplash.com/random/300x400",alt:"",ar:3/4,kind:"border"},decorators:[r=>e.jsx(r,{})]},o={args:{src:"https://source.unsplash.com/random/300x400",alt:"",ar:3/4,kind:"border"},decorators:[r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(r,{})})]};var i,d,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    src: "https://source.unsplash.com/random/300x400",
    alt: "",
    ar: 3 / 4
  },
  decorators: [Story => <Story />]
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    src: "https://source.unsplash.com/random/300x400",
    alt: "",
    ar: 3 / 4,
    kind: "border"
  },
  decorators: [Story => <Story />]
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,g,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    src: "https://source.unsplash.com/random/300x400",
    alt: "",
    ar: 3 / 4,
    kind: "border"
  },
  decorators: [Story => <div style={{
    width: "300px",
    height: "400px"
  }}><Story /></div>]
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const z=["Default","PictureBorder","PictureBorderContainer"];export{s as Default,t as PictureBorder,o as PictureBorderContainer,z as __namedExportsOrder,v as default};
