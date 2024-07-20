import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";import{I}from"./Input-B_hhiLlH.js";import"./validator-DPI58GKS.js";const R="_selectWrapper_pn6u0_2",T="_selectDropdown_pn6u0_14",_="_open_pn6u0_27",b="_selectDropdownItem_pn6u0_31",o={selectWrapper:R,selectDropdown:T,open:_,selectDropdownItem:b},v=({name:n,placeholder:f,label:y,onChange:p,defaultValue:x,innerRef:j,list:E,...w})=>{const r=s.useRef(null),u=s.useRef(null),[a,c]=s.useState(!1);s.useEffect(()=>{function e(i){r.current&&!r.current.contains(i.target)&&a&&c(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[a,r]);const h=e=>{p!==void 0&&p(e)};return t.jsxs("div",{ref:r,className:o.selectWrapper,children:[t.jsx(I,{innerRef:u,label:y,name:n,onClick:()=>{c(!a)},onChange:h,placeholder:f,readonly:!0,defaultValue:x,type:"text",...w}),t.jsx("div",{className:[o.selectDropdown,a?o.open:""].join(" "),children:E.map(({text:e},i)=>t.jsx("div",{className:o.selectDropdownItem,onClick:()=>{u.current.value=e,c(!1),u.current.dispatchEvent(new Event("input",{bubbles:!0}))},children:e},i))})]})};v.__docgenInfo={description:"",methods:[],displayName:"Select",props:{name:{required:!0,tsType:{name:"string"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>, isError: boolean) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"},{type:{name:"boolean"},name:"isError"}],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},innerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},list:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	value: string;
	text: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}}],raw:`Array<{
	value: string;
	text: string
}>`},description:""}}};const M={title:"Inputs/Select",component:v,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{name:"mylabel",label:"Label",placeholder:"Placeholder",onChange:n=>console.log(n.target.value),list:[{value:"1",text:"1"},{value:"2",text:"2 g g  g g gg g g g g g  g g g g g g g g "},{value:"3",text:"3"},{value:"4",text:"4"},{value:"5",text:"5"}]},decorators:[n=>t.jsx(t.Fragment,{children:t.jsx(n,{})})]};var m,g,d;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: "mylabel",
    label: "Label",
    placeholder: "Placeholder",
    onChange: e => console.log(e.target.value),
    list: [{
      value: "1",
      text: "1"
    }, {
      value: "2",
      text: "2 g g  g g gg g g g g g  g g g g g g g g "
    }, {
      value: "3",
      text: "3"
    }, {
      value: "4",
      text: "4"
    }, {
      value: "5",
      text: "5"
    }]
  },
  decorators: [Story => <>
            <Story />
        </>]
}`,...(d=(g=l.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const C=["Default"];export{l as Default,C as __namedExportsOrder,M as default};
