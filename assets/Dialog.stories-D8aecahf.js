import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as p}from"./index-uubelm5h.js";import"./index-BhbJmIXE.js";import"./index-DGXUum9u.js";import{C as k}from"./index-BxvRW4QN.js";import{G as y}from"./Grid-wUT0Rcjy.js";import{T as x}from"./Text-07thdpZ1.js";import{B as L}from"./Button-DRYQn4j-.js";const v="_dialog_xjs28_13",w="_slidein_xjs28_1",I="_minimize_xjs28_43",_="_fadein_xjs28_1",C="_fadeout_xjs28_1",a={dialog:v,slidein:w,minimize:I,fadein:_,fadeout:C};y.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"any"},description:""},gap:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	col: string,\r
	row: string\r
}`,signature:{properties:[{key:"col",value:{name:"string",required:!0}},{key:"row",value:{name:"string",required:!0}}]}},description:""},col:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	mobile: number;\r
	smallDesktop: number\r
	desktop: number;\r
	tablet: number\r
}`,signature:{properties:[{key:"mobile",value:{name:"number",required:!0}},{key:"smallDesktop",value:{name:"number",required:!0}},{key:"desktop",value:{name:"number",required:!0}},{key:"tablet",value:{name:"number",required:!0}}]}},description:""}}};const d=({modalOpen:t,modalClose:o,children:n,title:s})=>{const r=p.useRef(null);return p.useEffect(()=>{var l,m;if(t)(l=r.current)==null||l.showModal();else{(m=r.current)==null||m.classList.add(a.minimize);const b=setTimeout(()=>{var u,c;(u=r.current)==null||u.close(),(c=r.current)==null||c.classList.remove(a.minimize)},400);return()=>clearTimeout(b)}},[t]),e.jsx("dialog",{className:a.dialog,"modal-mode":"mega",ref:r,onCancel:o,children:e.jsx(k,{kind:"dialog",children:e.jsx(y,{gap:{col:"0px",row:"20px"},col:{mobile:1,smallDesktop:1,desktop:1,tablet:1},children:e.jsxs(e.Fragment,{children:[s&&e.jsx("header",{children:e.jsx(x,{kind:"p",children:e.jsx("b",{children:s})})}),e.jsx("article",{children:n}),e.jsx("footer",{children:e.jsx(L,{onClick:o,text:"Close",type:"button",ariaLabel:"close-dialo"})})]})})})})};d.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{modalOpen:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},modalClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{modalOpen:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},modalClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{useArgs:T}=__STORYBOOK_MODULE_PREVIEW_API__,A={title:"Dialog/Dialog",component:d,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{title:"Title",modalOpen:!1,children:e.jsx(e.Fragment,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),modalClose:()=>{}},decorators:[(t,o)=>{const[,n]=T(),s=()=>{n({modalOpen:!1})},r=()=>{n({modalOpen:!0})};return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}),e.jsx("button",{onClick:r,children:"Dialog"}),e.jsx(t,{args:{...o.args,modalClose:s}})]})}]};var h,g,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: "Title",
    modalOpen: false,
    children: <>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</>,
    modalClose: () => {}
  },
  decorators: [(Story, ctx) => {
    const [, setArgs] = useArgs<typeof ctx.args>();
    const modalClose = () => {
      setArgs({
        modalOpen: false
      });
    };
    const modalOpen = () => {
      setArgs({
        modalOpen: true
      });
    };
    return <>\r
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\r
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>\r
                    <button onClick={modalOpen}>Dialog</button>\r
                    <Story args={{
        ...ctx.args,
        modalClose
      }} />\r
                </>;
  }]
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const N=["Default"];export{i as Default,N as __namedExportsOrder,A as default};
