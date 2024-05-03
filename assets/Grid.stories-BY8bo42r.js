import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as u}from"./index-uubelm5h.js";const m="_gridContainer_19br1_7",g="_gridContainerChild_19br1_21",s={gridContainer:m,gridContainerChild:g},o=({children:l,gap:t,col:r})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:s.gridContainer,style:{"--n23-fc-m":r.mobile,"--n23-fc-t":r.tablet,"--n23-fc-sd":r.smallDesktop,"--n23-fc-d":r.desktop,"--n23-fg-c":t.col,"--n23-fg-r":t.row},children:u.Children.map(l.props.children,c=>e.jsx("div",{className:s.gridContainerChild,children:c}))})});o.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"any"},description:""},gap:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	col: string,\r
	row: string\r
}`,signature:{properties:[{key:"col",value:{name:"string",required:!0}},{key:"row",value:{name:"string",required:!0}}]}},description:""},col:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	mobile: number;\r
	smallDesktop: number\r
	desktop: number;\r
	tablet: number\r
}`,signature:{properties:[{key:"mobile",value:{name:"number",required:!0}},{key:"smallDesktop",value:{name:"number",required:!0}},{key:"desktop",value:{name:"number",required:!0}},{key:"tablet",value:{name:"number",required:!0}}]}},description:""}}};const k={title:"Grid/Grid",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},n={args:{gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:3,tablet:3},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{background:"darkgrey"},children:" Test1 "}),e.jsxs("div",{style:{background:"darkgrey"},children:[" ",e.jsx("div",{children:" Test2, level2"})," "]}),e.jsx("div",{style:{background:"darkgrey"},children:" Test3 "}),e.jsx("div",{style:{background:"darkgrey"},children:" Test4 "}),e.jsx("div",{style:{background:"darkgrey"},children:" Test5 "})]})}};var d,i,a;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    gap: {
      col: "20px",
      row: "20px"
    },
    col: {
      smallDesktop: 3,
      desktop: 3,
      mobile: 3,
      tablet: 3
    },
    children: <>\r
                <div style={{
        background: "darkgrey"
      }}> Test1 </div>\r
                <div style={{
        background: "darkgrey"
      }}> <div> Test2, level2</div> </div>\r
                <div style={{
        background: "darkgrey"
      }}> Test3 </div>\r
                <div style={{
        background: "darkgrey"
      }}> Test4 </div>\r
                <div style={{
        background: "darkgrey"
      }}> Test5 </div>\r
            </>
  }
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const b=["Grid3columns"];export{n as Grid3columns,b as __namedExportsOrder,k as default};
