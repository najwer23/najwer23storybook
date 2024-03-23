import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r}from"./index-BBkUAzwr.js";import"./index-Bi6CNkdb.js";import{u as j}from"./useWindowSize-BP6sRLWr.js";import{B as x}from"./Button-Bcsw4MnH.js";const _="_asideMenuWrapper_1vsub_3",b="_asideMenu_1vsub_3",f="_asideMenuMobile_1vsub_155",T="_open_1vsub_259",L="_asideMenuMobileButton_1vsub_269",v="_menuOpen_1vsub_299",y="_asideMenuTitle_1vsub_307",n={asideMenuWrapper:_,asideMenu:b,asideMenuMobile:f,open:T,asideMenuMobileButton:L,menuOpen:v,asideMenuTitle:y},k=({menuItems:o})=>{const[l,m]=r.useState(!1),[c]=j();return r.useEffect(()=>{c>=1199.98&&(m(!1),document.body.classList.remove(n.menuOpen))},[c]),r.useEffect(()=>{l?document.body.classList.add(n.menuOpen):document.body.classList.remove(n.menuOpen)},[l]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:[n.asideMenuWrapper].join(" "),children:e.jsx("div",{className:[n.asideMenu].join(" "),children:o&&o.map(d=>d.map(s=>e.jsxs(r.Fragment,{children:[e.jsx("div",{className:n.asideMenuTitle,children:s.menuTitle}),e.jsx("ul",{children:s.items.map(({itemLinkText:i,itemLink:t,itemLinkType:a})=>e.jsxs("li",{children:[a==="hash"&&e.jsxs("a",{href:`/#/${t}`,children:[" ",i]}),a==="link"&&e.jsxs("a",{href:`/${t}`,children:[" ",i]}),a==="linkOut"&&e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",href:`${t}`,children:[" ",i]})]},`desktopMenu-${s.menuTitle}-${i}`))})]},`desktop${s.menuTitle}`)))})}),e.jsx("div",{className:[n.asideMenuMobile,l&&n.open].join(" "),children:o&&o.map(d=>d.map(s=>e.jsxs(r.Fragment,{children:[e.jsx("div",{className:n.asideMenuTitle,children:s.menuTitle}),e.jsx("ul",{children:s.items.map(({itemLinkText:i,itemLink:t,itemLinkType:a})=>e.jsxs("li",{onClick:()=>{m(!1)},children:[a==="hash"&&e.jsxs("a",{href:`/#/${t}`,children:[" ",i]}),a==="link"&&e.jsxs("a",{href:`/${t}`,children:[" ",i]}),a==="linkOut"&&e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",href:`${t}`,children:[" ",i]})]},`MobileMenu-${s.menuTitle}-${i}`))})]},`mobile${s.menuTitle}`)))}),e.jsx("div",{className:[n.asideMenuMobileButton,l&&n.open].join(" "),children:e.jsx(x,{text:"Menu",type:"button",ariaLabel:l?"close menu":"open menu",onClick:()=>{m(!l)}})})]})};k.__docgenInfo={description:"",methods:[],displayName:"MenuAside",props:{menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"ItemGroup"}],raw:"ItemGroup[]"}],raw:"ItemGroup[][]"},description:""}}};const B={title:"Menu/MenuAside",component:k,tags:["autodocs"],argTypes:{}},u={args:{menuItems:[[{menuTitle:"Menu",items:[{itemLink:"link1",itemLinkText:"link1",itemLinkType:"hash"},{itemLink:"link2",itemLinkText:"link2",itemLinkType:"hash"}]},{menuTitle:"Projects",items:[{itemLink:"link1",itemLinkText:"link1",itemLinkType:"hash"},{itemLink:"link2",itemLinkText:"link2",itemLinkType:"hash"}]}]]}};var p,h,M;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    menuItems: [[{
      menuTitle: "Menu",
      items: [{
        itemLink: "link1",
        itemLinkText: "link1",
        itemLinkType: "hash"
      }, {
        itemLink: "link2",
        itemLinkText: "link2",
        itemLinkType: "hash"
      }]
    }, {
      menuTitle: "Projects",
      items: [{
        itemLink: "link1",
        itemLinkText: "link1",
        itemLinkType: "hash"
      }, {
        itemLink: "link2",
        itemLinkText: "link2",
        itemLinkType: "hash"
      }]
    }]]
  }
}`,...(M=(h=u.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};const E=["MenuLeftAside"];export{u as MenuLeftAside,E as __namedExportsOrder,B as default};
