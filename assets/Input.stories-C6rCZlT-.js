import{I}from"./Input-BqCO6VOU.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./validator-DPI58GKS.js";const B={title:"Inputs/Input",component:I,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{name:"mylabel",type:"text",label:"Label",onBlur:(e,r)=>console.log(e.target.value,r),errorOptions:{empty:!0}}},t={args:{name:"mylabel",type:"text",label:"Label",placeholder:"Placeholder",onBlur:(e,r)=>console.log(e.target.value,r),errorOptions:{empty:!0,email:!0}}},o={args:{name:"mylabel",type:"text",label:"Label",defaultValue:"@najwer23",onBlur:(e,r)=>console.log(e.target.value,r),errorOptions:{empty:!0}}},l={args:{name:"mylabel",type:"text",label:"Label - Error on blur",defaultValue:"",onBlur:(e,r)=>console.log(e.target.value,r),errorOptions:{empty:!0}}};var n,s,u;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: "mylabel",
    type: "text",
    label: "Label",
    onBlur: (e, isError) => console.log(e.target.value, isError),
    errorOptions: {
      empty: true
    }
  }
}`,...(u=(s=a.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: "mylabel",
    type: "text",
    label: "Label",
    placeholder: "Placeholder",
    onBlur: (e, isError) => console.log(e.target.value, isError),
    errorOptions: {
      empty: true,
      email: true
    }
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,g,b;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: "mylabel",
    type: "text",
    label: "Label",
    defaultValue: "@najwer23",
    onBlur: (e, isError) => console.log(e.target.value, isError),
    errorOptions: {
      empty: true
    }
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var d,y,E;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: "mylabel",
    type: "text",
    label: "Label - Error on blur",
    defaultValue: "",
    onBlur: (e, isError) => console.log(e.target.value, isError),
    errorOptions: {
      empty: true
    }
  }
}`,...(E=(y=l.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const L=["Default","InputEmail","InputDefaultValue","InputErrorInput"];export{a as Default,o as InputDefaultValue,t as InputEmail,l as InputErrorInput,L as __namedExportsOrder,B as default};
