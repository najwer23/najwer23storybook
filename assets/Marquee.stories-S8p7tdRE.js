import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as o}from"./index-CDs2tPxN.js";const h="_marquee_nir5n_3",x="_track_nir5n_41",g="_slide_nir5n_1",n={marquee:h,track:x,slide:g},p=({children:r,gap:t="40px",height:m="200px",speed:l="10s"})=>e.jsxs("div",{className:n.marquee,style:{"--n23-marqueee-height":m,"--n23-marqueee-gap":t,"--n23-marqueee-speed":l},children:[e.jsx("div",{className:n.track,children:o.Children.map(r.props.children,(s,u)=>s&&e.jsx(e.Fragment,{children:s}))}),e.jsx("div",{className:n.track,children:o.Children.map(r.props.children,(s,u)=>s&&e.jsx(e.Fragment,{children:s}))})]});p.__docgenInfo={description:"",methods:[],displayName:"Marquee",props:{children:{required:!0,tsType:{name:"any"},description:""},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"200px"',computed:!1}},speed:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"10s"',computed:!1}},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"40px"',computed:!1}}}};const q={title:"Marquee/Marquee",component:p,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{height:"200px",speed:"10s",children:e.jsxs(e.Fragment,{children:[Array.from({length:5},(r,t)=>e.jsx("img",{src:"https://source.unsplash.com/random/200x200"},t)),e.jsx("img",{src:"https://source.unsplash.com/random/400x200"},5)]})},decorators:[r=>e.jsxs("div",{style:{width:"900px"},children:[" ",e.jsx(r,{})]})]};var i,d,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    height: "200px",
    speed: "10s",
    children: <>\r
                {Array.from({
        length: 5
      }, (_, i) => <img key={i} src="https://source.unsplash.com/random/200x200" />)}\r
                <img key={5} src="https://source.unsplash.com/random/400x200" />\r
            </>
  },
  decorators: [Story => <div style={{
    width: "900px"
  }}> <Story /></div>]
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,q as default};
