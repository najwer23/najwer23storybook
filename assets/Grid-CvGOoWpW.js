import{j as r}from"./jsx-runtime-qGIIFXMu.js";import{r as o}from"./index-CDs2tPxN.js";const l="_gridContainer_1jg1l_7",m="_sameLine_1jg1l_23",d="_gridContainerChild_1jg1l_31",n={gridContainer:l,sameLine:m,gridContainerChild:d},u=({children:s,gap:i,col:e,sameLine:a})=>r.jsx(r.Fragment,{children:r.jsx("div",{className:[n.gridContainer,a&&n.sameLine].join(" "),style:{"--n23-c-column-mobile":e.mobile,"--n23-c-column-tablet":e.tablet,"--n23-c-column-small-desktop":e.smallDesktop,"--n23-c-column-desktop":e.desktop,"--n23-c-column-gap":i.col,"--n23-c-row-gap":i.row},children:o.Children.map(s.props.children,t=>t&&r.jsx("div",{className:n.gridContainerChild,children:t}))})});u.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"any"},description:""},sameLine:{required:!1,tsType:{name:"boolean"},description:""},gap:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	col: string;\r
	row: string;\r
}`,signature:{properties:[{key:"col",value:{name:"string",required:!0}},{key:"row",value:{name:"string",required:!0}}]}},description:""},col:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	mobile: number;\r
	smallDesktop: number;\r
	desktop: number;\r
	tablet: number;\r
}`,signature:{properties:[{key:"mobile",value:{name:"number",required:!0}},{key:"smallDesktop",value:{name:"number",required:!0}},{key:"desktop",value:{name:"number",required:!0}},{key:"tablet",value:{name:"number",required:!0}}]}},description:""}}};export{u as G};
