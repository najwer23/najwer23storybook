import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as j}from"./index-RYns6xqu.js";const P="_picture_i3ove_2",v="_border_i3ove_5",q="_loaded_i3ove_18",a={picture:P,border:v,loaded:q},g=({src:r,alt:y,ar:x,kind:_,draggable:f})=>{const[b,S]=j.useState(!1);return e.jsx("picture",{className:[a.picture,b&&a.loaded,a[_??""]].join(" "),children:e.jsx("img",{width:x,height:1,src:r,alt:y,loading:"lazy",onLoad:()=>S(!0),draggable:f})})};g.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},ar:{required:!1,tsType:{name:"number"},description:""},kind:{required:!1,tsType:{name:"literal",value:'"border"'},description:""},figcaption:{required:!1,tsType:{name:"string"},description:""},draggable:{required:!1,tsType:{name:"boolean"},description:""}}};const B={title:"Picture/Picture",component:g,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},decorators:[r=>e.jsx(r,{})]},s={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,kind:"border"},decorators:[r=>e.jsx(r,{})]},o={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,kind:"border"},decorators:[r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(r,{})})]};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/300/400",
    alt: "",
    ar: 3 / 4
  },
  decorators: [Story => <Story />]
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/300/400",
    alt: "",
    ar: 3 / 4,
    kind: "border"
  },
  decorators: [Story => <Story />]
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,m,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/300/400",
    alt: "",
    ar: 3 / 4,
    kind: "border"
  },
  decorators: [Story => <div style={{
    width: "300px",
    height: "400px"
  }}><Story /></div>]
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const w=["Default","PictureBorder","PictureBorderContainer"];export{t as Default,s as PictureBorder,o as PictureBorderContainer,w as __namedExportsOrder,B as default};
