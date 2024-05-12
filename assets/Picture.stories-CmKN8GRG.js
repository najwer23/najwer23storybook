import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{r as _}from"./index-uubelm5h.js";const x="_picture_gifvc_3",h="_border_gifvc_15",q="_loaded_gifvc_39",o={picture:x,border:h,loaded:q},a=({src:r,alt:m,ar:l,kind:g})=>{const[y,f]=_.useState(!1);return t.jsx("picture",{className:[o.picture,y&&o.loaded,o[g??""]].join(" "),style:{"--n23-img-ar":l??"auto"},children:t.jsx("img",{src:r,alt:m,loading:"lazy",onLoad:()=>f(!0)})})};a.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},ar:{required:!1,tsType:{name:"number"},description:""},kind:{required:!1,tsType:{name:"literal",value:'"border"'},description:""},figcaption:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},ar:{required:!1,tsType:{name:"number"},description:""},kind:{required:!1,tsType:{name:"literal",value:'"border"'},description:""},figcaption:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Picture/Picture",component:a,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{src:"https://source.unsplash.com/random/300x400",alt:"",ar:3/4},decorators:[r=>t.jsx(r,{})]},s={args:{src:"https://source.unsplash.com/random/300x400",alt:"",ar:3/4,kind:"border"},decorators:[r=>t.jsx(r,{})]};var n,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    src: "https://source.unsplash.com/random/300x400",
    alt: "",
    ar: 3 / 4
  },
  decorators: [Story => <Story />]
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: "https://source.unsplash.com/random/300x400",
    alt: "",
    ar: 3 / 4,
    kind: "border"
  },
  decorators: [Story => <Story />]
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const P=["Default","PictureBorder"];export{e as Default,s as PictureBorder,P as __namedExportsOrder,j as default};
