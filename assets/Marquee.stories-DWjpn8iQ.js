import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as i}from"./index-CDs2tPxN.js";const h="_marquee_1q7qz_3",x="_track_1q7qz_43",g="_slide_1q7qz_1",n={marquee:h,track:x,slide:g},c=({children:s,gap:a="40px",height:m="200px",speed:l="10s"})=>e.jsxs("div",{className:n.marquee,style:{"--n23-marquee-height":m,"--n23-marquee-gap":a,"--n23-marquee-speed":l},children:[e.jsx("div",{className:n.track,children:i.Children.map(s.props.children,(r,u)=>r&&e.jsx(e.Fragment,{children:r}))}),e.jsx("div",{className:n.track,children:i.Children.map(s.props.children,(r,u)=>r&&e.jsx(e.Fragment,{children:r}))})]});c.__docgenInfo={description:"",methods:[],displayName:"Marquee",props:{children:{required:!0,tsType:{name:"any"},description:""},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"200px"',computed:!1}},speed:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"10s"',computed:!1}},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"40px"',computed:!1}}}};const y={title:"Marquee/Marquee",component:c,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{height:"200px",speed:"10s",children:e.jsxs(e.Fragment,{children:[Array.from({length:5},(s,a)=>e.jsx("img",{src:"https://picsum.photos/200/200"},a)),e.jsx("img",{src:"https://picsum.photos/400/200"},5)]})},decorators:[s=>e.jsxs("div",{style:{width:"900px"},children:[" ",e.jsx(s,{})]})]};var p,o,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    height: "200px",
    speed: "10s",
    children: <>\r
                {Array.from({
        length: 5
      }, (_, i) => <img key={i} src="https://picsum.photos/200/200" />)}\r
                <img key={5} src="https://picsum.photos/400/200" />\r
            </>
  },
  decorators: [Story => <div style={{
    width: "900px"
  }}> <Story /></div>]
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,y as default};
