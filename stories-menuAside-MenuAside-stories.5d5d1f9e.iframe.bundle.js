"use strict";(self.webpackChunknajwer23storybook=self.webpackChunknajwer23storybook||[]).push([[11],{"./src/stories/menuAside/MenuAside.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:()=>Standard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MenuAside_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/menuAside/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let menuAside_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var MenuAside=function(param){var menuItems=param.menuItems;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:[menuAside_index_module.asideMenu].join(" "),children:(0,jsx_runtime.jsx)("ul",{children:menuItems&&menuItems.map(function(param){var itemLink=param.itemLink,itemLinkText=param.itemLinkText,itemLinkType=param.itemLinkType;return(0,jsx_runtime.jsxs)("li",{children:["hash"===itemLinkType&&(0,jsx_runtime.jsxs)("a",{href:"/#/".concat(itemLink),children:[" ",itemLinkText]}),"link"===itemLinkType&&(0,jsx_runtime.jsxs)("a",{href:"/".concat(itemLink),children:[" ",itemLinkText]}),"linkOut"===itemLinkType&&(0,jsx_runtime.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(itemLink),children:[" ",itemLinkText]})]},itemLinkText)})})})})};try{MenuAside.displayName="MenuAside",MenuAside.__docgenInfo={description:"",displayName:"MenuAside",props:{menuItems:{defaultValue:null,description:"",name:"menuItems",required:!0,type:{name:'{ itemLink: string; itemLinkText: string; itemLinkType: "hash" | "link" | "linkOut"; }[]'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/menuAside/MenuAside.tsx#MenuAside"]={docgenInfo:MenuAside.__docgenInfo,name:"MenuAside",path:"src/stories/menuAside/MenuAside.tsx#MenuAside"})}catch(__react_docgen_typescript_loader_error){}let MenuAside_stories={title:"Example/MenuAside",component:MenuAside,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Standard={args:{menuItems:[{itemLink:"sss",itemLinkText:"text999",itemLinkType:"hash"},{itemLink:"sss",itemLinkText:"text999",itemLinkType:"hash"},{itemLink:"link",itemLinkText:"Link",itemLinkType:"link"}]}};Standard.parameters={...Standard.parameters,docs:{...Standard.parameters?.docs,source:{originalSource:'{\n  args: {\n    menuItems: [{\n      itemLink: "sss",\n      itemLinkText: "text999",\n      itemLinkType: "hash"\n    }, {\n      itemLink: "sss",\n      itemLinkText: "text999",\n      itemLinkType: "hash"\n    }, {\n      itemLink: "link",\n      itemLinkText: "Link",\n      itemLinkType: "link"\n    }]\n  }\n}',...Standard.parameters?.docs?.source}}};let __namedExportsOrder=["Standard"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/menuAside/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`@layer asideMenu {
	.index-module__asideMenu__irqSA {
		box-sizing: border-box;
		width: 400px;
		background-color: var(--n23-color-primary);
		font-family: var(--n23-font-family);
		height: 100vh;
		padding: 50px;
		overflow: auto;

		/* hide scrollbar */
		scrollbar-width: none;
		-ms-overflow-style: none;
		-webkit-overflow-scrolling: touch;
		&::-webkit-scrollbar {
			display: none;
		}

		@media (max-width: 575.98px) {
			display: none;
		}
	}

	.index-module__asideMenu__irqSA ul {
		all: unset;
		list-style-type: none;
	}

	.index-module__asideMenu__irqSA ul li {
		font-size: var(--n23-font-size-big);
		font-weight: var(--n23-font-weight-bold);
		border-bottom: 1px solid var(--n23-color-font-asideMenu);
		margin-bottom: 20px;
		padding-bottom: 20px;
		transition: 0.2s;

		& a {
			all: unset;
			cursor: pointer;
			color: var(--n23-color-font-asideMenu);
			display: inline-block;
			width: 100%;

			@media (hover: hover) and (pointer: fine) {
				&:hover {
					filter: brightness(85%);
				}
			}

			&:active {
				background-color: var(--n23-color-primary);
				filter: brightness(100%);
			}

			&:focus-visible {
				outline: 2px solid var(--n23-color-on-primary);
				filter: brightness(100%);
			}
		}

	}
}
`,"",{version:3,sources:["webpack://./src/stories/menuAside/index.module.css"],names:[],mappings:"AAAA;CACC;EACC,sBAAsB;EACtB,YAAY;EACZ,0CAA0C;EAC1C,mCAAmC;EACnC,aAAa;EACb,aAAa;EACb,cAAc;;EAEd,mBAAmB;EACnB,qBAAqB;EACrB,wBAAwB;EACxB,iCAAiC;EACjC;GACC,aAAa;EACd;;EAEA;GACC,aAAa;EACd;CACD;;CAEA;EACC,UAAU;EACV,qBAAqB;CACtB;;CAEA;EACC,mCAAmC;EACnC,wCAAwC;EACxC,wDAAwD;EACxD,mBAAmB;EACnB,oBAAoB;EACpB,gBAAgB;;EAEhB;GACC,UAAU;GACV,eAAe;GACf,sCAAsC;GACtC,qBAAqB;GACrB,WAAW;;GAEX;IACC;KACC,uBAAuB;IACxB;GACD;;GAEA;IACC,0CAA0C;IAC1C,wBAAwB;GACzB;;GAEA;IACC,8CAA8C;IAC9C,wBAAwB;GACzB;EACD;;CAED;AACD",sourcesContent:["@layer asideMenu {\r\n	.asideMenu {\r\n		box-sizing: border-box;\r\n		width: 400px;\r\n		background-color: var(--n23-color-primary);\r\n		font-family: var(--n23-font-family);\r\n		height: 100vh;\r\n		padding: 50px;\r\n		overflow: auto;\r\n\r\n		/* hide scrollbar */\r\n		scrollbar-width: none;\r\n		-ms-overflow-style: none;\r\n		-webkit-overflow-scrolling: touch;\r\n		&::-webkit-scrollbar {\r\n			display: none;\r\n		}\r\n\r\n		@media (max-width: 575.98px) {\r\n			display: none;\r\n		}\r\n	}\r\n\r\n	.asideMenu ul {\r\n		all: unset;\r\n		list-style-type: none;\r\n	}\r\n\r\n	.asideMenu ul li {\r\n		font-size: var(--n23-font-size-big);\r\n		font-weight: var(--n23-font-weight-bold);\r\n		border-bottom: 1px solid var(--n23-color-font-asideMenu);\r\n		margin-bottom: 20px;\r\n		padding-bottom: 20px;\r\n		transition: 0.2s;\r\n\r\n		& a {\r\n			all: unset;\r\n			cursor: pointer;\r\n			color: var(--n23-color-font-asideMenu);\r\n			display: inline-block;\r\n			width: 100%;\r\n\r\n			@media (hover: hover) and (pointer: fine) {\r\n				&:hover {\r\n					filter: brightness(85%);\r\n				}\r\n			}\r\n\r\n			&:active {\r\n				background-color: var(--n23-color-primary);\r\n				filter: brightness(100%);\r\n			}\r\n\r\n			&:focus-visible {\r\n				outline: 2px solid var(--n23-color-on-primary);\r\n				filter: brightness(100%);\r\n			}\r\n		}\r\n\r\n	}\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={asideMenu:"index-module__asideMenu__irqSA"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=stories-menuAside-MenuAside-stories.5d5d1f9e.iframe.bundle.js.map