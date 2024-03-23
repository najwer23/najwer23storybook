import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{r as F}from"./index-BBkUAzwr.js";import{v as N}from"./validator-DPI58GKS.js";const S="_inputWrapper_ug2wk_3",k="_inputLabel_ug2wk_13",W="_inputInput_ug2wk_29",D="_inputError_ug2wk_67",n={inputWrapper:S,inputLabel:k,inputInput:W,inputError:D},R=({name:e,placeholder:r,type:j,onBlur:u,label:w,readonly:q=!1,errorOptions:p,defaultValue:B,innerRef:M,...V})=>{const[i,c]=F.useState(null),H=m=>{if(u!==void 0){let d=!1;if(c(null),p){const g=N(m.target.value,p);g.length>0&&(c(g[0]),d=!0)}u(m,d)}};return t.jsxs("div",{className:n.inputWrapper,children:[t.jsx("div",{className:n.inputLabel,children:t.jsx("label",{htmlFor:e,children:w})}),t.jsx("div",{className:n.inputInput,children:t.jsx("input",{ref:M,defaultValue:B,id:e,name:e,type:j,onBlur:H,placeholder:r,readOnly:q,...V})}),t.jsx("div",{className:n.inputError,children:i&&i})]})};R.__docgenInfo={description:"",methods:[],displayName:"Input",props:{name:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"literal",value:'"text"'},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>, isError: boolean) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"},{type:{name:"boolean"},name:"isError"}],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},errorOptions:{required:!1,tsType:{name:"ErrorValidatorOptions"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},innerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""}}};const A={title:"Inputs/Input",component:R,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},a={args:{name:"mylabel",type:"text",label:"Label",onBlur:(e,r)=>console.log(e.target.value,r),errorOptions:{empty:!0}}},l={args:{name:"mylabel",type:"text",label:"Label",placeholder:"Placeholder",onBlur:(e,r)=>console.log(e.target.value,r),errorOptions:{empty:!0,email:!0}}},o={args:{name:"mylabel",type:"text",label:"Label",defaultValue:"@najwer23",onBlur:(e,r)=>console.log(e.target.value,r),errorOptions:{empty:!0}}},s={args:{name:"mylabel",type:"text",label:"Label - Error on blur",defaultValue:"",onBlur:(e,r)=>console.log(e.target.value,r),errorOptions:{empty:!0}}};var y,E,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: "mylabel",
    type: "text",
    label: "Label",
    onBlur: (e, isError) => console.log(e.target.value, isError),
    errorOptions: {
      empty: true
    }
  }
}`,...(b=(E=a.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var f,v,I;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(v=l.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var x,T,L;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(T=o.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var _,h,O;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(h=s.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};const G=["InputText","InputEmail","InputDefaultValue","InputErrorInput"];export{o as InputDefaultValue,l as InputEmail,s as InputErrorInput,a as InputText,G as __namedExportsOrder,A as default};
