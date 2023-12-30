"use strict";(self.webpackChunknajwer23storybook=self.webpackChunknajwer23storybook||[]).push([[11],{"./src/stories/menuAside/MenuAside.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:()=>Standard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MenuAside_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button=__webpack_require__("./src/stories/button/Button.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/menuAside/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let menuAside_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var MenuAside=function(param){var menuItems=param.menuItems;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:[menuAside_index_module.asideMenu].join(" "),children:(0,jsx_runtime.jsx)("ul",{children:menuItems&&menuItems.map(function(param){var itemLink=param.itemLink,itemLinkText=param.itemLinkText,itemLinkType=param.itemLinkType;return(0,jsx_runtime.jsxs)("li",{children:["hash"===itemLinkType&&(0,jsx_runtime.jsxs)("a",{href:"/#/".concat(itemLink),children:[" ",itemLinkText]}),"link"===itemLinkType&&(0,jsx_runtime.jsxs)("a",{href:"/".concat(itemLink),children:[" ",itemLinkText]}),"linkOut"===itemLinkType&&(0,jsx_runtime.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(itemLink),children:[" ",itemLinkText]})]},itemLinkText)})})}),(0,jsx_runtime.jsx)("div",{className:[menuAside_index_module.asideMenuMobile,menuAside_index_module.open].join(" "),children:"jalo"}),(0,jsx_runtime.jsx)("div",{className:menuAside_index_module.asideMenuMobileButton,children:(0,jsx_runtime.jsx)(Button.z,{text:"Hamburger",type:"button",ariaLabel:"test"})})]})};try{MenuAside.displayName="MenuAside",MenuAside.__docgenInfo={description:"",displayName:"MenuAside",props:{menuItems:{defaultValue:null,description:"",name:"menuItems",required:!0,type:{name:'{ itemLink: string; itemLinkText: string; itemLinkType: "hash" | "link" | "linkOut"; }[]'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/menuAside/MenuAside.tsx#MenuAside"]={docgenInfo:MenuAside.__docgenInfo,name:"MenuAside",path:"src/stories/menuAside/MenuAside.tsx#MenuAside"})}catch(__react_docgen_typescript_loader_error){}let MenuAside_stories={title:"Example/MenuAside",component:MenuAside,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Standard={args:{menuItems:[{itemLink:"sss",itemLinkText:"text999",itemLinkType:"hash"},{itemLink:"sss",itemLinkText:"text999",itemLinkType:"hash"},{itemLink:"link",itemLinkText:"Link",itemLinkType:"link"}]}};Standard.parameters={...Standard.parameters,docs:{...Standard.parameters?.docs,source:{originalSource:'{\n  args: {\n    menuItems: [{\n      itemLink: "sss",\n      itemLinkText: "text999",\n      itemLinkType: "hash"\n    }, {\n      itemLink: "sss",\n      itemLinkText: "text999",\n      itemLinkType: "hash"\n    }, {\n      itemLink: "link",\n      itemLinkText: "Link",\n      itemLinkType: "link"\n    }]\n  }\n}',...Standard.parameters?.docs?.source}}};let __namedExportsOrder=["Standard"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/button/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`@layer button {
	.index-module__standard__a2LfW {
		cursor: pointer;
		border: unset;
		padding: 10px 17px;
		border-radius: 8px;
		color: var(--n23-color-surface);
		background-color: var(--n23-color-primary);
		font-weight: var(--n23-font-weight-normal);
		font-size: var(--n23-font-size-normal);
		letter-spacing: normal;
		transition: 0.2s;
		font-family: var(--n23-font-family);

		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

		@media (hover: hover) and (pointer: fine) {
			&:hover {
				background-color: var(--n23-color-on-primary);
				box-shadow: var(--n23-shadow);
			}
		}

		&:active {
			background-color: var(--n23-color-on-primary-active);
		}

		&:focus-visible {
			outline: 2px solid var(--n23-color-on-primary);
			background-color: var(--n23-grey);
		}

		&:disabled {
			cursor: not-allowed;
			background-color: var(--n23-grey);
		}
	}
}
`,"",{version:3,sources:["webpack://./src/stories/button/index.module.css"],names:[],mappings:"AAAA;CACC;EACC,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,+BAA+B;EAC/B,0CAA0C;EAC1C,0CAA0C;EAC1C,sCAAsC;EACtC,sBAAsB;EACtB,gBAAgB;EAChB,mCAAmC;;EAEnC,2BAA2B;EAC3B,yBAAyB;EACzB,wBAAwB;EACxB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,6CAA6C;;EAE7C;GACC;IACC,6CAA6C;IAC7C,6BAA6B;GAC9B;EACD;;EAEA;GACC,oDAAoD;EACrD;;EAEA;GACC,8CAA8C;GAC9C,iCAAiC;EAClC;;EAEA;GACC,mBAAmB;GACnB,iCAAiC;EAClC;CACD;AACD",sourcesContent:["@layer button {\r\n	.standard {\r\n		cursor: pointer;\r\n		border: unset;\r\n		padding: 10px 17px;\r\n		border-radius: 8px;\r\n		color: var(--n23-color-surface);\r\n		background-color: var(--n23-color-primary);\r\n		font-weight: var(--n23-font-weight-normal);\r\n		font-size: var(--n23-font-size-normal);\r\n		letter-spacing: normal;\r\n		transition: 0.2s;\r\n		font-family: var(--n23-font-family);\r\n\r\n		-webkit-touch-callout: none;\r\n		-webkit-user-select: none;\r\n		-khtml-user-select: none;\r\n		-moz-user-select: none;\r\n		-ms-user-select: none;\r\n		user-select: none;\r\n		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n\r\n		@media (hover: hover) and (pointer: fine) {\r\n			&:hover {\r\n				background-color: var(--n23-color-on-primary);\r\n				box-shadow: var(--n23-shadow);\r\n			}\r\n		}\r\n\r\n		&:active {\r\n			background-color: var(--n23-color-on-primary-active);\r\n		}\r\n\r\n		&:focus-visible {\r\n			outline: 2px solid var(--n23-color-on-primary);\r\n			background-color: var(--n23-grey);\r\n		}\r\n\r\n		&:disabled {\r\n			cursor: not-allowed;\r\n			background-color: var(--n23-grey);\r\n		}\r\n	}\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={standard:"index-module__standard__a2LfW"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/menuAside/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`@layer asideMenu {
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


	.index-module__asideMenuMobile__ia1wj {
		display: none;

		@media (max-width: 575.98px) {
			&.index-module__open___xMha {
				display: block;
			}
		}
	}

	.index-module__asideMenuMobileButton__Fgib8 {
		display: none;
		position: absolute;
		z-index: 10;
		top: 100%;
    left: 100%;
    right: 50px;
    bottom: 50px;

		@media (max-width: 575.98px) {
			& {
				display: block;
			}
		}
	}


}
`,"",{version:3,sources:["webpack://./src/stories/menuAside/index.module.css"],names:[],mappings:"AAAA;CACC;EACC,sBAAsB;EACtB,YAAY;EACZ,0CAA0C;EAC1C,mCAAmC;EACnC,aAAa;EACb,aAAa;EACb,cAAc;;EAEd,mBAAmB;EACnB,qBAAqB;EACrB,wBAAwB;EACxB,iCAAiC;EACjC;GACC,aAAa;EACd;;EAEA;GACC,aAAa;EACd;CACD;;CAEA;EACC,UAAU;EACV,qBAAqB;CACtB;;CAEA;EACC,mCAAmC;EACnC,wCAAwC;EACxC,wDAAwD;EACxD,mBAAmB;EACnB,oBAAoB;EACpB,gBAAgB;;EAEhB;GACC,UAAU;GACV,eAAe;GACf,sCAAsC;GACtC,qBAAqB;GACrB,WAAW;;GAEX;IACC;KACC,uBAAuB;IACxB;GACD;;GAEA;IACC,0CAA0C;IAC1C,wBAAwB;GACzB;;GAEA;IACC,8CAA8C;IAC9C,wBAAwB;GACzB;EACD;;CAED;;;CAGA;EACC,aAAa;;EAEb;GACC;IACC,cAAc;GACf;EACD;CACD;;CAEA;EACC,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,SAAS;IACP,UAAU;IACV,WAAW;IACX,YAAY;;EAEd;GACC;IACC,cAAc;GACf;EACD;CACD;;;AAGD",sourcesContent:["@layer asideMenu {\r\n	.asideMenu {\r\n		box-sizing: border-box;\r\n		width: 400px;\r\n		background-color: var(--n23-color-primary);\r\n		font-family: var(--n23-font-family);\r\n		height: 100vh;\r\n		padding: 50px;\r\n		overflow: auto;\r\n\r\n		/* hide scrollbar */\r\n		scrollbar-width: none;\r\n		-ms-overflow-style: none;\r\n		-webkit-overflow-scrolling: touch;\r\n		&::-webkit-scrollbar {\r\n			display: none;\r\n		}\r\n\r\n		@media (max-width: 575.98px) {\r\n			display: none;\r\n		}\r\n	}\r\n\r\n	.asideMenu ul {\r\n		all: unset;\r\n		list-style-type: none;\r\n	}\r\n\r\n	.asideMenu ul li {\r\n		font-size: var(--n23-font-size-big);\r\n		font-weight: var(--n23-font-weight-bold);\r\n		border-bottom: 1px solid var(--n23-color-font-asideMenu);\r\n		margin-bottom: 20px;\r\n		padding-bottom: 20px;\r\n		transition: 0.2s;\r\n\r\n		& a {\r\n			all: unset;\r\n			cursor: pointer;\r\n			color: var(--n23-color-font-asideMenu);\r\n			display: inline-block;\r\n			width: 100%;\r\n\r\n			@media (hover: hover) and (pointer: fine) {\r\n				&:hover {\r\n					filter: brightness(85%);\r\n				}\r\n			}\r\n\r\n			&:active {\r\n				background-color: var(--n23-color-primary);\r\n				filter: brightness(100%);\r\n			}\r\n\r\n			&:focus-visible {\r\n				outline: 2px solid var(--n23-color-on-primary);\r\n				filter: brightness(100%);\r\n			}\r\n		}\r\n\r\n	}\r\n\r\n\r\n	.asideMenuMobile {\r\n		display: none;\r\n\r\n		@media (max-width: 575.98px) {\r\n			&.open {\r\n				display: block;\r\n			}\r\n		}\r\n	}\r\n\r\n	.asideMenuMobileButton {\r\n		display: none;\r\n		position: absolute;\r\n		z-index: 10;\r\n		top: 100%;\r\n    left: 100%;\r\n    right: 50px;\r\n    bottom: 50px;\r\n\r\n		@media (max-width: 575.98px) {\r\n			& {\r\n				display: block;\r\n			}\r\n		}\r\n	}\r\n\r\n\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={asideMenu:"index-module__asideMenu__irqSA",asideMenuMobile:"index-module__asideMenuMobile__ia1wj",open:"index-module__open___xMha",asideMenuMobileButton:"index-module__asideMenuMobileButton__Fgib8"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/button/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let button_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Button=function(_param){var ariaLabel=_param.ariaLabel,type=_param.type,text=_param.text,_param_disabled=_param.disabled,props=_object_without_properties(_param,["ariaLabel","type","text","disabled"]);return(0,jsx_runtime.jsx)("button",_object_spread_props(_object_spread({type:type,className:[button_index_module.standard].join(" "),disabled:void 0!==_param_disabled&&_param_disabled,"aria-label":ariaLabel},props),{children:text}))};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/stories/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=stories-menuAside-MenuAside-stories.a73de8f3.iframe.bundle.js.map