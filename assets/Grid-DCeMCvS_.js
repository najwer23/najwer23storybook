import{j as r}from"./jsx-runtime-qGIIFXMu.js";import{r as o}from"./index-CDs2tPxN.js";const d="_gridContainer_1b71f_7",m="_sameLine_1b71f_23",u="_gridContainerChild_1b71f_31",n={gridContainer:d,sameLine:m,gridContainerChild:u},l=({children:s,gap:i,col:e,sameLine:a})=>r.jsx(r.Fragment,{children:r.jsx("div",{className:[n.gridContainer,a&&n.sameLine].join(" "),style:{"--n23-fc-m":e.mobile,"--n23-fc-t":e.tablet,"--n23-fc-sd":e.smallDesktop,"--n23-fc-d":e.desktop,"--n23-fg-c":i.col,"--n23-fg-r":i.row},children:o.Children.map(s.props.children,t=>t&&r.jsx("div",{className:n.gridContainerChild,children:t}))})});l.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"any"},description:""},sameLine:{required:!1,tsType:{name:"boolean"},description:""},gap:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	col: string;\r
	row: string;\r
}`,signature:{properties:[{key:"col",value:{name:"string",required:!0}},{key:"row",value:{name:"string",required:!0}}]}},description:""},col:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	mobile: number;\r
	smallDesktop: number;\r
	desktop: number;\r
	tablet: number;\r
}`,signature:{properties:[{key:"mobile",value:{name:"number",required:!0}},{key:"smallDesktop",value:{name:"number",required:!0}},{key:"desktop",value:{name:"number",required:!0}},{key:"tablet",value:{name:"number",required:!0}}]}},description:""}}};export{l as G};
