import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as o}from"./index-RYns6xqu.js";const m="_gridContainer_1u9gk_4",u="_sameLine_1u9gk_12",d="_gridContainerChild_1u9gk_16",n={gridContainer:m,sameLine:u,gridContainerChild:d},l=({children:s,gap:i,col:e,sameLine:a})=>r.jsx(r.Fragment,{children:r.jsx("div",{className:[n.gridContainer,a&&n.sameLine].join(" "),style:{"--n23-c-column-mobile":e.mobile,"--n23-c-column-tablet":e.tablet,"--n23-c-column-small-desktop":e.smallDesktop,"--n23-c-column-desktop":e.desktop,"--n23-c-column-gap":i.col,"--n23-c-row-gap":i.row},children:o.Children.map(s.props.children,t=>t&&r.jsx("div",{className:n.gridContainerChild,children:t}))})});l.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"any"},description:""},sameLine:{required:!1,tsType:{name:"boolean"},description:""},gap:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	col: string;
	row: string;
}`,signature:{properties:[{key:"col",value:{name:"string",required:!0}},{key:"row",value:{name:"string",required:!0}}]}},description:""},col:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	mobile: number;
	smallDesktop: number;
	desktop: number;
	tablet: number;
}`,signature:{properties:[{key:"mobile",value:{name:"number",required:!0}},{key:"smallDesktop",value:{name:"number",required:!0}},{key:"desktop",value:{name:"number",required:!0}},{key:"tablet",value:{name:"number",required:!0}}]}},description:""}}};export{l as G};
