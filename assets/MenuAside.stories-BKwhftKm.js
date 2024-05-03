import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as o}from"./index-uubelm5h.js";import"./index-AeB2IjGr.js";import{u as j}from"./useWindowSize-DKtumrTx.js";import{B as x}from"./Button-BmVJkERK.js";const _="_asideMenuWrapper_1kto5_3",f="_asideMenu_1kto5_3",T="_asideMenuMobile_1kto5_153",b="_open_1kto5_255",L="_asideMenuMobileButton_1kto5_265",y="_menuOpen_1kto5_295",$="_asideMenuTitle_1kto5_303",n={asideMenuWrapper:_,asideMenu:f,asideMenuMobile:T,open:b,asideMenuMobileButton:L,menuOpen:y,asideMenuTitle:$},M=({menuItems:r})=>{const[a,m]=o.useState(!1),[c]=j();return o.useEffect(()=>{c>=1199.98&&(m(!1),document.body.classList.remove(n.menuOpen))},[c]),o.useEffect(()=>{a?document.body.classList.add(n.menuOpen):document.body.classList.remove(n.menuOpen)},[a]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:[n.asideMenuWrapper].join(" "),children:e.jsx("div",{className:[n.asideMenu].join(" "),children:r&&r.map(u=>u.map(i=>e.jsxs(o.Fragment,{children:[e.jsx("div",{className:n.asideMenuTitle,children:i.menuTitle}),e.jsx("ul",{children:i.items.map(({itemLinkText:s,itemLink:t,itemLinkType:l})=>e.jsxs("li",{children:[l==="hash"&&e.jsxs("a",{href:`/#/${t}`,children:[" ",s]}),l==="link"&&e.jsxs("a",{href:`/${t}`,children:[" ",s]}),l==="linkOut"&&e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",href:`${t}`,children:[" ",s]})]},`desktopMenu-${i.menuTitle}-${s}`))})]},`desktop${i.menuTitle}`)))})}),e.jsx("div",{className:[n.asideMenuMobile,a&&n.open].join(" "),children:r&&r.map(u=>u.map(i=>e.jsxs(o.Fragment,{children:[e.jsx("div",{className:n.asideMenuTitle,children:i.menuTitle}),e.jsx("ul",{children:i.items.map(({itemLinkText:s,itemLink:t,itemLinkType:l})=>e.jsxs("li",{children:[l==="hash"&&e.jsxs("a",{href:`/#/${t}`,onClick:()=>{m(!1)},children:[" ",s]}),l==="link"&&e.jsxs("a",{href:`/${t}`,onClick:()=>{m(!1)},children:[" ",s]}),l==="linkOut"&&e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",href:`${t}`,children:[" ",s]})]},`MobileMenu-${i.menuTitle}-${s}`))})]},`mobile${i.menuTitle}`)))}),e.jsx("div",{className:[n.asideMenuMobileButton,a&&n.open].join(" "),children:e.jsx(x,{text:"Menu",type:"button",ariaLabel:a?"close menu":"open menu",onClick:()=>{m(!a)}})})]})};M.__docgenInfo={description:"",methods:[],displayName:"MenuAside",props:{menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"ItemGroup"}],raw:"ItemGroup[]"}],raw:"ItemGroup[][]"},description:""}}};const B={title:"Menu/MenuAside",component:M,tags:["autodocs"],argTypes:{}},d={args:{menuItems:[[{menuTitle:"Menu",items:[{itemLink:"link1",itemLinkText:"link1 link1 link1 link1 link1 link1 likn",itemLinkType:"hash"},{itemLink:"link2",itemLinkText:"link2",itemLinkType:"hash"}]},{menuTitle:"Projects",items:[{itemLink:"link1",itemLinkText:"link1",itemLinkType:"hash"},{itemLink:"link2",itemLinkText:"link2",itemLinkType:"hash"}]}]]}};var k,p,h;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(h=(p=d.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const E=["MenuLeftAside"];export{d as MenuLeftAside,E as __namedExportsOrder,B as default};
