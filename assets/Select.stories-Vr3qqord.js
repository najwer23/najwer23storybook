import{j as t}from"./jsx-runtime-qGIIFXMu.js";import{r as s}from"./index-CDs2tPxN.js";import{I as y}from"./Input-BqCO6VOU.js";import"./validator-DPI58GKS.js";y.__docgenInfo={description:"",methods:[],displayName:"Input",props:{name:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"literal",value:'"text"'},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>, isError: boolean) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"},{type:{name:"boolean"},name:"isError"}],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},errorOptions:{required:!1,tsType:{name:"ErrorValidatorOptions"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},innerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},value:{required:!1,tsType:{name:"string"},description:""}}};const w="_selectWrapper_1lbol_3",b="_selectDropdown_1lbol_27",L="_open_1lbol_53",M="_selectDropdownItem_1lbol_61",o={selectWrapper:w,selectDropdown:b,open:L,selectDropdownItem:M},c=({name:n,placeholder:f,label:E,onChange:m,defaultValue:T,innerRef:x,list:R,...I})=>{const r=s.useRef(null),l=s.useRef(null),[a,u]=s.useState(!1);s.useEffect(()=>{function e(p){r.current&&!r.current.contains(p.target)&&a&&u(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[a,r]);const q=e=>{m!==void 0&&m(e)};return t.jsxs("div",{ref:r,className:o.selectWrapper,children:[t.jsx(y,{innerRef:l,label:E,name:n,onClick:()=>{u(!a)},onChange:q,placeholder:f,readonly:!0,defaultValue:T,type:"text",...I}),t.jsx("div",{className:[o.selectDropdown,a?o.open:""].join(" "),children:R.map(({text:e},p)=>t.jsx("div",{className:o.selectDropdownItem,onClick:()=>{l.current.value=e,u(!1),l.current.dispatchEvent(new Event("input",{bubbles:!0}))},children:e},p))})]})};c.__docgenInfo={description:"",methods:[],displayName:"Select",props:{name:{required:!0,tsType:{name:"string"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>, isError: boolean) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"},{type:{name:"boolean"},name:"isError"}],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},innerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},list:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
	value: string;\r
	text: string\r
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}}],raw:`Array<{\r
	value: string;\r
	text: string\r
}>`},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"Select",props:{name:{required:!0,tsType:{name:"string"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>, isError: boolean) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"},{type:{name:"boolean"},name:"isError"}],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},innerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},list:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
	value: string;\r
	text: string\r
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}}],raw:`Array<{\r
	value: string;\r
	text: string\r
}>`},description:""}}};const j={title:"Inputs/Select",component:c,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{name:"mylabel",label:"Label",placeholder:"Placeholder",onChange:n=>console.log(n.target.value),list:[{value:"1",text:"1"},{value:"2",text:"2 g g  g g gg g g g g g  g g g g g g g g "},{value:"3",text:"3"},{value:"4",text:"4"},{value:"5",text:"5"}]},decorators:[n=>t.jsx(t.Fragment,{children:t.jsx(n,{})})]};var d,g,v;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
  decorators: [Story => <>\r
            <Story />\r
        </>]
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const O=["Default"];export{i as Default,O as __namedExportsOrder,j as default};
