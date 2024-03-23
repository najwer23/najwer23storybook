import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{r as _}from"./index-BBkUAzwr.js";import{v as k}from"./validator-DPI58GKS.js";const R="_inputWrapper_y3stf_3",M="_inputLabel_y3stf_13",j="_inputInput_y3stf_29",A="_inputError_y3stf_77",a={inputWrapper:R,inputLabel:M,inputInput:j,inputError:A},b=({name:e,placeholder:r,onBlur:o,label:T,readonly:x=!1,errorOptions:i,defaultValue:E,innerRef:L,...I})=>{const[l,u]=_.useState(null),w=p=>{if(o!==void 0){let m=!1;if(u(null),i){const c=k(p.target.value,i);c.length>0&&(u(c[0]),m=!0)}o(p,m)}};return t.jsxs("div",{className:a.inputWrapper,children:[t.jsx("div",{className:a.inputLabel,children:t.jsx("label",{htmlFor:e,children:T})}),t.jsx("div",{className:a.inputInput,children:t.jsx("textarea",{ref:L,defaultValue:E,id:e,name:e,onBlur:w,placeholder:r,readOnly:x,...I})}),t.jsx("div",{className:a.inputError,children:l&&l})]})};b.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{name:{required:!0,tsType:{name:"string"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLTextAreaElement>, isError: boolean) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"},{type:{name:"boolean"},name:"isError"}],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:""},errorOptions:{required:!1,tsType:{name:"ErrorValidatorOptions"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},innerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},description:""}}};const F={title:"Inputs/Textarea",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},n={args:{name:"mylabel",label:"Label",defaultValue:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",onBlur:(e,r)=>console.log(e.target.value,r),errorOptions:{empty:!0}}},s={args:{name:"mylabel",label:"Label",onBlur:(e,r)=>console.log(e.target.value,r),errorOptions:{empty:!0}}};var d,y,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: "mylabel",
    label: "Label",
    defaultValue: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    onBlur: (e, isError) => console.log(e.target.value, isError),
    errorOptions: {
      empty: true
    }
  }
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,h,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: "mylabel",
    label: "Label",
    onBlur: (e, isError) => console.log(e.target.value, isError),
    errorOptions: {
      empty: true
    }
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const B=["TextareaClassic","TextareaPlaceholder"];export{n as TextareaClassic,s as TextareaPlaceholder,B as __namedExportsOrder,F as default};
