"use strict";var e=require("react/jsx-runtime"),t=require("react");"function"==typeof SuppressedError&&SuppressedError;const n=e=>""===e.trim()||null===e.trim()?"The field cannot be empty":null,r=e=>/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(e)?null:"Incorrect email address";var l="index-module_inputWrapper__WiEXy",i="index-module_inputLabel__UF-s8",o="index-module_inputInput__GFhoE",a="index-module_inputError__U10AO";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===n&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}("@layer input{.index-module_inputWrapper__WiEXy{margin-bottom:10px;margin-top:5px}.index-module_inputLabel__UF-s8{color:var(--n23-color-font);font-family:var(--n23-font-family);font-size:var(--n23-font-size-semi-small);font-weight:var(--n23-font-weight-semi-bold);line-height:22px}.index-module_inputInput__GFhoE{& input{box-sizing:border-box;color:var(--n23-color-font);font-family:var(--n23-font-family);font-size:var(--n23-font-size-normal);font-weight:var(--n23-font-weight-normal);height:40px;padding:20px 10px;width:100%}& ::placeholder{filter:brightness(150%);font-weight:var(--n23-font-weight-thin)}}.index-module_inputError__U10AO{color:var(--n23-color-error);font-family:var(--n23-font-family);font-size:var(--n23-font-size-small);font-weight:var(--n23-font-weight-normal);line-height:1;margin:2px}}");exports.Input=s=>{var{name:d,placeholder:p,type:u,onBlur:f,label:c,readonly:m=!1,errorOptions:h,defaultValue:y,innerRef:x}=s,v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n}(s,["name","placeholder","type","onBlur","label","readonly","errorOptions","defaultValue","innerRef"]);const[b,g]=t.useState(null);return e.jsxs("div",{className:l,children:[e.jsx("div",{className:i,children:e.jsx("label",{htmlFor:d,children:c})}),e.jsx("div",{className:o,children:e.jsx("input",Object.assign({ref:x,defaultValue:y,id:d,name:d,type:u,onBlur:e=>{if(void 0!==f){let t=!1;if(g(null),h){const l=((e,t)=>Object.keys(Object.fromEntries(Object.entries(t).filter((([,e])=>e)))).map((t=>{let l;switch(t){case"empty":l=n(e);break;case"email":l=r(e);break;default:l=null}return l})).filter((e=>null!==e)))(e.target.value,h);l.length>0&&(g(l[0]),t=!0)}f(e,t)}},placeholder:p,readOnly:m},v))}),e.jsx("div",{className:a,children:b&&b})]})};
//# sourceMappingURL=Input.js.map