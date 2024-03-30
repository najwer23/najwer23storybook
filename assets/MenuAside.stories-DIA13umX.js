import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r}from"./index-BBkUAzwr.js";import"./index-Bi6CNkdb.js";import{u as j}from"./useWindowSize-BP6sRLWr.js";import{B as x}from"./Button-Bcsw4MnH.js";const _="_asideMenuWrapper_19rld_3",f="_asideMenu_19rld_3",T="_asideMenuMobile_19rld_151",b="_open_19rld_253",L="_asideMenuMobileButton_19rld_263",y="_menuOpen_19rld_293",$="_asideMenuTitle_19rld_301",n={asideMenuWrapper:_,asideMenu:f,asideMenuMobile:T,open:b,asideMenuMobileButton:L,menuOpen:y,asideMenuTitle:$},M=({menuItems:o})=>{const[a,m]=r.useState(!1),[c]=j();return r.useEffect(()=>{c>=1199.98&&(m(!1),document.body.classList.remove(n.menuOpen))},[c]),r.useEffect(()=>{a?document.body.classList.add(n.menuOpen):document.body.classList.remove(n.menuOpen)},[a]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:[n.asideMenuWrapper].join(" "),children:e.jsx("div",{className:[n.asideMenu].join(" "),children:o&&o.map(u=>u.map(i=>e.jsxs(r.Fragment,{children:[e.jsx("div",{className:n.asideMenuTitle,children:i.menuTitle}),e.jsx("ul",{children:i.items.map(({itemLinkText:s,itemLink:l,itemLinkType:t})=>e.jsxs("li",{children:[t==="hash"&&e.jsxs("a",{href:`/#/${l}`,children:[" ",s]}),t==="link"&&e.jsxs("a",{href:`/${l}`,children:[" ",s]}),t==="linkOut"&&e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",href:`${l}`,children:[" ",s]})]},`desktopMenu-${i.menuTitle}-${s}`))})]},`desktop${i.menuTitle}`)))})}),e.jsx("div",{className:[n.asideMenuMobile,a&&n.open].join(" "),children:o&&o.map(u=>u.map(i=>e.jsxs(r.Fragment,{children:[e.jsx("div",{className:n.asideMenuTitle,children:i.menuTitle}),e.jsx("ul",{children:i.items.map(({itemLinkText:s,itemLink:l,itemLinkType:t})=>e.jsxs("li",{onClick:()=>{m(!1)},children:[t==="hash"&&e.jsxs("a",{href:`/#/${l}`,children:[" ",s]}),t==="link"&&e.jsxs("a",{href:`/${l}`,children:[" ",s]}),t==="linkOut"&&e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",href:`${l}`,children:[" ",s]})]},`MobileMenu-${i.menuTitle}-${s}`))})]},`mobile${i.menuTitle}`)))}),e.jsx("div",{className:[n.asideMenuMobileButton,a&&n.open].join(" "),children:e.jsx(x,{text:"Menu",type:"button",ariaLabel:a?"close menu":"open menu",onClick:()=>{m(!a)}})})]})};M.__docgenInfo={description:"",methods:[],displayName:"MenuAside",props:{menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"ItemGroup"}],raw:"ItemGroup[]"}],raw:"ItemGroup[][]"},description:""}}};const B={title:"Menu/MenuAside",component:M,tags:["autodocs"],argTypes:{}},d={args:{menuItems:[[{menuTitle:"Menu",items:[{itemLink:"link1",itemLinkText:"link1 link1 link1 link1 link1 link1 likn",itemLinkType:"hash"},{itemLink:"link2",itemLinkText:"link2",itemLinkType:"hash"}]},{menuTitle:"Projects",items:[{itemLink:"link1",itemLinkText:"link1",itemLinkType:"hash"},{itemLink:"link2",itemLinkText:"link2",itemLinkType:"hash"}]}]]}};var p,k,h;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    menuItems: [[{
      menuTitle: "Menu",
      items: [{
        itemLink: "link1",
        itemLinkText: "link1 link1 link1 link1 link1 link1 likn",
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
}`,...(h=(k=d.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const E=["MenuLeftAside"];export{d as MenuLeftAside,E as __namedExportsOrder,B as default};
