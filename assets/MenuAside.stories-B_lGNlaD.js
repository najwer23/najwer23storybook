import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r}from"./index-uubelm5h.js";import"./index-DGXUum9u.js";import{u as _}from"./useWindowSize-DKtumrTx.js";import{B as b}from"./Button-DRYQn4j-.js";const f="_asideMenuWrapper_rgzp6_3",z="_asideMenu_rgzp6_3",O="_asideMenuMobile_rgzp6_195",N="_open_rgzp6_301",v="_asideMenuMobileButton_rgzp6_311",w="_menuOpen_rgzp6_345",A="_asideMenuTitle_rgzp6_353",S="_asideMenuTitleSpace_rgzp6_387",E="_asideMenuLogo_rgzp6_403",i={asideMenuWrapper:f,asideMenu:z,asideMenuMobile:O,open:N,asideMenuMobileButton:v,menuOpen:w,asideMenuTitle:A,asideMenuTitleSpace:S,asideMenuLogo:E},g=({menuItems:m,menuTitle:p})=>{const[o,l]=r.useState(!1),[k]=_();return r.useEffect(()=>{k>=1199.98&&(l(!1),document.body.classList.remove(i.menuOpen))},[k]),r.useEffect(()=>{o?document.body.classList.add(i.menuOpen):document.body.classList.remove(i.menuOpen)},[o]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:i.asideMenuWrapper,children:e.jsxs("div",{className:i.asideMenu,children:[e.jsxs("div",{className:i.asideMenuLogo,children:[" ",p," "]}),m&&m.map(c=>c.map(t=>e.jsxs(r.Fragment,{children:[e.jsx("div",{className:[p&&i.asideMenuTitleSpace,i.asideMenuTitle].join(" "),children:t.menuTitle}),e.jsx("ul",{children:t.items.map(({itemLinkText:n,itemLink:s,itemLinkType:a})=>e.jsxs("li",{children:[a==="hash"&&e.jsxs("a",{href:`/#/${s}`,children:[" ",n]}),a==="link"&&e.jsxs("a",{href:`/${s}`,children:[" ",n]}),a==="linkOut"&&e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",href:`${s}`,children:[" ",n]})]},`desktopMenu-${t.menuTitle}-${n}`))})]},`desktop${t.menuTitle}`)))]})}),e.jsxs("div",{className:[i.asideMenuMobile,o&&i.open].join(" "),children:[e.jsxs("div",{className:i.asideMenuLogo,children:[" ",p," "]}),m&&m.map(c=>c.map(t=>e.jsxs(r.Fragment,{children:[e.jsx("div",{className:[p&&i.asideMenuTitleSpace,i.asideMenuTitle].join(" "),children:t.menuTitle}),e.jsx("ul",{children:t.items.map(({itemLinkText:n,itemLink:s,itemLinkType:a})=>e.jsxs("li",{children:[a==="hash"&&e.jsxs("a",{href:`/#/${s}`,onClick:()=>{l(!1)},children:[" ",n]}),a==="link"&&e.jsxs("a",{href:`/${s}`,onClick:()=>{l(!1)},children:[" ",n]}),a==="linkOut"&&e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",href:`${s}`,children:[" ",n]})]},`MobileMenu-${t.menuTitle}-${n}`))})]},`mobile${t.menuTitle}`)))]}),e.jsx("div",{className:[i.asideMenuMobileButton,o&&i.open].join(" "),children:e.jsx(b,{text:"Menu",type:"button",ariaLabel:o?"close menu":"open menu",onClick:()=>{l(!o)}})})]})};g.__docgenInfo={description:"",methods:[],displayName:"MenuAside",props:{menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"ItemGroup"}],raw:"ItemGroup[]"}],raw:"ItemGroup[][]"},description:""},menuTitle:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"Menu/MenuAside",component:g,tags:["autodocs"],argTypes:{}},j={menuItems:[[{menuTitle:"Menu",items:[{itemLink:"#",itemLinkText:"Test",itemLinkType:"hash"},{itemLink:"",itemLinkText:"Home",itemLinkType:"hash"},{itemLink:"gallery",itemLinkText:"Gallery",itemLinkType:"hash"},{itemLink:"quotes",itemLinkText:"Quotes",itemLinkType:"hash"},{itemLink:"weather",itemLinkText:"Weather",itemLinkType:"hash"},{itemLink:"apod",itemLinkText:"NASA - APOD",itemLinkType:"hash"},{itemLink:"contact",itemLinkText:"Contact",itemLinkType:"hash"},{itemLink:"404",itemLinkText:"404",itemLinkType:"hash"}]},{menuTitle:"Projects",items:[{itemLink:"https://leetcode.com/najwer23/",itemLinkText:"Leetcode",itemLinkType:"linkOut"},{itemLink:"https://najwer23.github.io/react-redux-ts/",itemLinkText:"Geometric figures",itemLinkType:"linkOut"},{itemLink:"https://najwer23.github.io/sudoku/",itemLinkText:"Sudoku",itemLinkType:"linkOut"},{itemLink:"https://jabber.cyclic.app/",itemLinkText:"Jabber",itemLinkType:"linkOut"},{itemLink:"https://najwer23.github.io/najwer23storybook/?path=/docs/getting-started--docs",itemLinkText:"Design system",itemLinkType:"linkOut"},{itemLink:"https://restilo.pl/",itemLinkText:"Restilo",itemLinkType:"linkOut"},{itemLink:"https://tueuropa.pl/ubezpieczenia-mieszkania-i-domu.htm",itemLinkText:"My house",itemLinkType:"linkOut"},{itemLink:"https://tueuropa.pl/ubezpieczenia-sportowe/ubezpieczenie-nnw-sport.htm",itemLinkText:"Active in Sport",itemLinkType:"linkOut"},{itemLink:"https://tueuropa.pl/ubezpieczenia-zycia-i-zdrowia/ubezpieczenie-twojego-zdrowia-myhealth.htm",itemLinkText:"My Health",itemLinkType:"linkOut"},{itemLink:"https://tueuropa.pl/ubezpieczenia-turystyczne.htm",itemLinkText:"Itravel",itemLinkType:"linkOut"},{itemLink:"https://tvn.pl/programy/top-model",itemLinkText:"TVN. Top Model",itemLinkType:"linkOut"},{itemLink:"https://tvn.pl/program-tv",itemLinkText:"TVN. Electronic program guide",itemLinkType:"linkOut"},{itemLink:"https://tvn24.pl/",itemLinkText:"TVN24",itemLinkType:"linkOut"},{itemLink:"https://tvn24.pl/biznes/notowania/waluty",itemLinkText:"TVN24. Stock quotes",itemLinkType:"linkOut"},{itemLink:"https://tvn24.pl/wybory-samorzadowe-2024",itemLinkText:"TVN24. Polish Local Government Elections 2024",itemLinkType:"linkOut"}]}]]},u={args:{menuTitle:"N",...j}},d={args:{...j}};var h,L,T;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    menuTitle: "N",
    ...MENU_ASIDE
  }
}`,...(T=(L=u.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var M,x,y;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...MENU_ASIDE
  }
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const q=["MenuLeftAside","MenuLeftAsideWithoutLogo"];export{u as MenuLeftAside,d as MenuLeftAsideWithoutLogo,q as __namedExportsOrder,V as default};