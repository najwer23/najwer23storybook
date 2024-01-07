"use strict";(self.webpackChunknajwer23storybook=self.webpackChunknajwer23storybook||[]).push([[539],{"./src/stories/textMoving/Marquee.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MarqueeExample:()=>MarqueeExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Marquee_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/textMoving/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let textMoving_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var Marquee=function(param){var children=param.children;return(0,jsx_runtime.jsxs)("div",{className:textMoving_index_module.marquee,children:[(0,jsx_runtime.jsx)("div",{className:textMoving_index_module.track,children:children}),(0,jsx_runtime.jsx)("div",{className:textMoving_index_module.track,children:children})]})};try{Marquee.displayName="Marquee",Marquee.__docgenInfo={description:"",displayName:"Marquee",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/textMoving/Marquee.tsx#Marquee"]={docgenInfo:Marquee.__docgenInfo,name:"Marquee",path:"src/stories/textMoving/Marquee.tsx#Marquee"})}catch(__react_docgen_typescript_loader_error){}let Marquee_stories={title:"Marquee/Marquee",component:Marquee,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var MarqueeExample={args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:"1"}),(0,jsx_runtime.jsx)("div",{children:"2"}),(0,jsx_runtime.jsx)("div",{children:"3"}),(0,jsx_runtime.jsx)("div",{children:"4"})]})}};MarqueeExample.parameters={...MarqueeExample.parameters,docs:{...MarqueeExample.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\r\n                <div>1</div>\r\n                <div>2</div>\r\n                <div>3</div>\r\n                <div>4</div>\r\n            </>\n  }\n}",...MarqueeExample.parameters?.docs?.source}}};let __namedExportsOrder=["MarqueeExample"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/textMoving/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`@layer n23TextMoving {
	.index-module__marquee__jKtQH {
		position: relative;
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: 50px;
		width: 100%;
	}

	.index-module__track__bqLY8 {
		flex-shrink: 0;
		display: flex;
		justify-content: space-around;
		gap: 50px;
		min-width: 100%;
		animation: index-module__scroll__Pexwb 10s linear infinite;
	}

	@keyframes index-module__scroll__Pexwb {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - 50px));
		}
	}
}
`,"",{version:3,sources:["webpack://./src/stories/textMoving/index.module.css"],names:[],mappings:"AAAA;CACC;EACC,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,SAAS;EACT,WAAW;CACZ;;CAEA;EACC,cAAc;EACd,aAAa;EACb,6BAA6B;EAC7B,SAAS;EACT,eAAe;EACf,0DAAqC;CACtC;;CAEA;EACC;GACC,wBAAwB;EACzB;EACA;GACC,yCAAyC;EAC1C;CACD;AACD",sourcesContent:["@layer n23TextMoving {\r\n	.marquee {\r\n		position: relative;\r\n		display: flex;\r\n		overflow: hidden;\r\n		user-select: none;\r\n		gap: 50px;\r\n		width: 100%;\r\n	}\r\n\r\n	.track {\r\n		flex-shrink: 0;\r\n		display: flex;\r\n		justify-content: space-around;\r\n		gap: 50px;\r\n		min-width: 100%;\r\n		animation: scroll 10s linear infinite;\r\n	}\r\n\r\n	@keyframes scroll {\r\n		from {\r\n			transform: translateX(0);\r\n		}\r\n		to {\r\n			transform: translateX(calc(-100% - 50px));\r\n		}\r\n	}\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={marquee:"index-module__marquee__jKtQH",track:"index-module__track__bqLY8",scroll:"index-module__scroll__Pexwb"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=stories-textMoving-Marquee-stories.64ada0b5.iframe.bundle.js.map