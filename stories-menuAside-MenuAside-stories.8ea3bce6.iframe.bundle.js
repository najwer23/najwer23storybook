"use strict";(self.webpackChunknajwer23storybook=self.webpackChunknajwer23storybook||[]).push([[11],{"./src/stories/menuAside/MenuAside.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MenuLeftAside:()=>MenuLeftAside,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MenuAside_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),stories_button=__webpack_require__("./src/stories/button/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/menuAside/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let menuAside_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var useWindowSize=__webpack_require__("./src/stories/hooks/useWindowSize.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var MenuAside=function(param){var menuItems=param.menuItems,_useState=_sliced_to_array((0,react.useState)(!1),2),menuMobileOpen=_useState[0],setMenuMobileOpen=_useState[1],width=_sliced_to_array((0,useWindowSize.i)(),1)[0];return(0,react.useEffect)(function(){width>=1199.98&&(setMenuMobileOpen(!1),document.body.classList.remove(menuAside_index_module.menuOpen))},[width]),(0,react.useEffect)(function(){menuMobileOpen?document.body.classList.add(menuAside_index_module.menuOpen):document.body.classList.remove(menuAside_index_module.menuOpen)},[menuMobileOpen]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:[menuAside_index_module.asideMenuWrapper].join(" "),children:(0,jsx_runtime.jsx)("div",{className:[menuAside_index_module.asideMenu].join(" "),children:menuItems&&menuItems.map(function(menuItem){return menuItem.map(function(itemGroup){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:menuAside_index_module.asideMenuTitle,children:itemGroup.menuTitle}),(0,jsx_runtime.jsx)("ul",{children:itemGroup.items.map(function(param){var itemLinkText=param.itemLinkText,itemLink=param.itemLink,itemLinkType=param.itemLinkType;return(0,jsx_runtime.jsxs)("li",{children:["hash"===itemLinkType&&(0,jsx_runtime.jsxs)("a",{href:"/#/".concat(itemLink),children:[" ",itemLinkText]}),"link"===itemLinkType&&(0,jsx_runtime.jsxs)("a",{href:"/".concat(itemLink),children:[" ",itemLinkText]}),"linkOut"===itemLinkType&&(0,jsx_runtime.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(itemLink),children:[" ",itemLinkText]})]},"desktopMenu-".concat(itemGroup.menuTitle,"-").concat(itemLinkText))})})]},"desktop".concat(itemGroup.menuTitle))})})})}),(0,jsx_runtime.jsx)("div",{className:[menuAside_index_module.asideMenuMobile,menuMobileOpen&&menuAside_index_module.open].join(" "),children:menuItems&&menuItems.map(function(menuItem){return menuItem.map(function(itemGroup){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:menuAside_index_module.asideMenuTitle,children:itemGroup.menuTitle}),(0,jsx_runtime.jsx)("ul",{children:itemGroup.items.map(function(param){var itemLinkText=param.itemLinkText,itemLink=param.itemLink,itemLinkType=param.itemLinkType;return(0,jsx_runtime.jsxs)("li",{onClick:function(){setMenuMobileOpen(!1)},children:["hash"===itemLinkType&&(0,jsx_runtime.jsxs)("a",{href:"/#/".concat(itemLink),children:[" ",itemLinkText]}),"link"===itemLinkType&&(0,jsx_runtime.jsxs)("a",{href:"/".concat(itemLink),children:[" ",itemLinkText]}),"linkOut"===itemLinkType&&(0,jsx_runtime.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(itemLink),children:[" ",itemLinkText]})]},"MobileMenu-".concat(itemGroup.menuTitle,"-").concat(itemLinkText))})})]},"mobile".concat(itemGroup.menuTitle))})})}),(0,jsx_runtime.jsx)("div",{className:[menuAside_index_module.asideMenuMobileButton,menuMobileOpen&&menuAside_index_module.open].join(" "),children:(0,jsx_runtime.jsx)(stories_button.z,{text:"Menu",type:"button",ariaLabel:menuMobileOpen?"close menu":"open menu",onClick:function(){setMenuMobileOpen(!menuMobileOpen)}})})]})};try{MenuAside.displayName="MenuAside",MenuAside.__docgenInfo={description:"",displayName:"MenuAside",props:{menuItems:{defaultValue:null,description:"",name:"menuItems",required:!0,type:{name:"ItemGroup[][]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/menuAside/MenuAside.tsx#MenuAside"]={docgenInfo:MenuAside.__docgenInfo,name:"MenuAside",path:"src/stories/menuAside/MenuAside.tsx#MenuAside"})}catch(__react_docgen_typescript_loader_error){}let MenuAside_stories={title:"Menu/MenuAside",component:MenuAside,tags:["autodocs"],argTypes:{}};var MenuLeftAside={args:{menuItems:[[{menuTitle:"Menu",items:[{itemLink:"link1",itemLinkText:"link1",itemLinkType:"hash"},{itemLink:"link2",itemLinkText:"link2",itemLinkType:"hash"}]},{menuTitle:"Projects",items:[{itemLink:"link1",itemLinkText:"link1",itemLinkType:"hash"},{itemLink:"link2",itemLinkText:"link2",itemLinkType:"hash"}]}]]}};MenuLeftAside.parameters={...MenuLeftAside.parameters,docs:{...MenuLeftAside.parameters?.docs,source:{originalSource:'{\n  args: {\n    menuItems: [[{\n      menuTitle: "Menu",\n      items: [{\n        itemLink: "link1",\n        itemLinkText: "link1",\n        itemLinkType: "hash"\n      }, {\n        itemLink: "link2",\n        itemLinkText: "link2",\n        itemLinkType: "hash"\n      }]\n    }, {\n      menuTitle: "Projects",\n      items: [{\n        itemLink: "link1",\n        itemLinkText: "link1",\n        itemLinkType: "hash"\n      }, {\n        itemLink: "link2",\n        itemLinkText: "link2",\n        itemLinkType: "hash"\n      }]\n    }]]\n  }\n}',...MenuLeftAside.parameters?.docs?.source}}};let __namedExportsOrder=["MenuLeftAside"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/button/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`@layer n23Button {
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
`,"",{version:3,sources:["webpack://./src/stories/button/index.module.css"],names:[],mappings:"AAAA;CACC;EACC,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,+BAA+B;EAC/B,0CAA0C;EAC1C,0CAA0C;EAC1C,sCAAsC;EACtC,sBAAsB;EACtB,gBAAgB;EAChB,mCAAmC;;EAEnC,2BAA2B;EAC3B,yBAAyB;EACzB,wBAAwB;EACxB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,6CAA6C;;EAE7C;GACC;IACC,6CAA6C;IAC7C,6BAA6B;GAC9B;EACD;;EAEA;GACC,oDAAoD;EACrD;;EAEA;GACC,8CAA8C;GAC9C,iCAAiC;EAClC;;EAEA;GACC,mBAAmB;GACnB,iCAAiC;EAClC;CACD;AACD",sourcesContent:["@layer n23Button {\r\n	.standard {\r\n		cursor: pointer;\r\n		border: unset;\r\n		padding: 10px 17px;\r\n		border-radius: 8px;\r\n		color: var(--n23-color-surface);\r\n		background-color: var(--n23-color-primary);\r\n		font-weight: var(--n23-font-weight-normal);\r\n		font-size: var(--n23-font-size-normal);\r\n		letter-spacing: normal;\r\n		transition: 0.2s;\r\n		font-family: var(--n23-font-family);\r\n\r\n		-webkit-touch-callout: none;\r\n		-webkit-user-select: none;\r\n		-khtml-user-select: none;\r\n		-moz-user-select: none;\r\n		-ms-user-select: none;\r\n		user-select: none;\r\n		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n\r\n		@media (hover: hover) and (pointer: fine) {\r\n			&:hover {\r\n				background-color: var(--n23-color-on-primary);\r\n				box-shadow: var(--n23-shadow);\r\n			}\r\n		}\r\n\r\n		&:active {\r\n			background-color: var(--n23-color-on-primary-active);\r\n		}\r\n\r\n		&:focus-visible {\r\n			outline: 2px solid var(--n23-color-on-primary);\r\n			background-color: var(--n23-grey);\r\n		}\r\n\r\n		&:disabled {\r\n			cursor: not-allowed;\r\n			background-color: var(--n23-grey);\r\n		}\r\n	}\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={standard:"index-module__standard__a2LfW"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/menuAside/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`@layer n23AsideMenu {
	.index-module__asideMenuWrapper__SWXd_ {
		width: 400px;
		height: 100vh;

		@media (max-width: 1199.98px) {
			display: none;
		}
	}

	.index-module__asideMenu__irqSA {
		box-sizing: border-box;
		width: 400px;
		background-color: var(--n23-color-primary);
		font-family: var(--n23-font-family);
		height: 100vh;
		padding: 50px;
		overflow: auto;
		position: fixed;

		/* hide scrollbar */
		scrollbar-width: none;
		-ms-overflow-style: none;
		-webkit-overflow-scrolling: touch;
		&::-webkit-scrollbar {
			display: none;
		}

		@media (max-width: 1199.98px) {
			display: none;
		}

		& ul {
			all: unset;
			list-style-type: none;
		}

		& ul li {
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

		& ul li:last-child {
			margin-bottom: 100px;
		}
	}

	.index-module__asideMenuMobile__ia1wj {
		display: none;
		box-sizing: border-box;
		width: 100vw;
		background-color: var(--n23-color-on-secondary);
		font-family: var(--n23-font-family);
		height: 100vh;
		padding: 100px 20px 150px 20px;
		overflow: auto;
		position: fixed;
		z-index: 8;

		@media (min-width: 576px) {
			padding: 100px 50px 150px 50px;
		}

		& ul {
			all: unset;
			list-style-type: none;
		}

		& ul li {
			text-align: left;
			font-size: var(--n23-font-size-big);
			font-weight: var(--n23-font-weight-normal);
			margin-bottom: 10px;
			padding-bottom: 10px;
			transition: 0.2s;

			& a {
				all: unset;
				cursor: pointer;
				color: var(--n23-color-font-asideMenu);
				display: inline-block;
				width: 100%;

				&:active {
					filter: brightness(85%);
				}

				&:focus-visible {
					filter: brightness(100%);
				}
			}
		}

		& ul li:last-child {
			margin-bottom: 100px;
		}
	}

	@media (max-width: 1199.98px) {
		.index-module__asideMenuMobile__ia1wj.index-module__open___xMha {
			display: block;
		}
	}

	.index-module__asideMenuMobileButton__Fgib8 {
		display: none;
		position: fixed;
		z-index: 9;
		left: calc(100% - 116px);
		right: 0;
		bottom: 40px;

		@media (max-width: 1199.98px) {
			& {
				display: block;
			}
		}
	}

	.index-module__menuOpen__k1pI8 {
		overflow: hidden;
	}

	.index-module__asideMenuTitle__VjoNo {
		font-family: var(--n23-font-family);
		font-size: var(--n23-font-size-bigger);
		font-weight: var(--n23-font-weight-bold);
		color: var(--n23-color-font-asideMenu);
		margin-bottom: 40px;
		letter-spacing: 4px;
		text-transform: uppercase;
		word-spacing: 8px;
	}
}
`,"",{version:3,sources:["webpack://./src/stories/menuAside/index.module.css"],names:[],mappings:"AAAA;CACC;EACC,YAAY;EACZ,aAAa;;EAEb;GACC,aAAa;EACd;CACD;;CAEA;EACC,sBAAsB;EACtB,YAAY;EACZ,0CAA0C;EAC1C,mCAAmC;EACnC,aAAa;EACb,aAAa;EACb,cAAc;EACd,eAAe;;EAEf,mBAAmB;EACnB,qBAAqB;EACrB,wBAAwB;EACxB,iCAAiC;EACjC;GACC,aAAa;EACd;;EAEA;GACC,aAAa;EACd;;EAEA;GACC,UAAU;GACV,qBAAqB;EACtB;;EAEA;GACC,mCAAmC;GACnC,wCAAwC;GACxC,wDAAwD;GACxD,mBAAmB;GACnB,oBAAoB;GACpB,gBAAgB;;GAEhB;IACC,UAAU;IACV,eAAe;IACf,sCAAsC;IACtC,qBAAqB;IACrB,WAAW;;IAEX;KACC;MACC,uBAAuB;KACxB;IACD;;IAEA;KACC,0CAA0C;KAC1C,wBAAwB;IACzB;;IAEA;KACC,8CAA8C;KAC9C,wBAAwB;IACzB;GACD;EACD;;EAEA;GACC,oBAAoB;EACrB;CACD;;CAEA;EACC,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,+CAA+C;EAC/C,mCAAmC;EACnC,aAAa;EACb,8BAA8B;EAC9B,cAAc;EACd,eAAe;EACf,UAAU;;EAEV;GACC,8BAA8B;EAC/B;;EAEA;GACC,UAAU;GACV,qBAAqB;EACtB;;EAEA;GACC,gBAAgB;GAChB,mCAAmC;GACnC,0CAA0C;GAC1C,mBAAmB;GACnB,oBAAoB;GACpB,gBAAgB;;GAEhB;IACC,UAAU;IACV,eAAe;IACf,sCAAsC;IACtC,qBAAqB;IACrB,WAAW;;IAEX;KACC,uBAAuB;IACxB;;IAEA;KACC,wBAAwB;IACzB;GACD;EACD;;EAEA;GACC,oBAAoB;EACrB;CACD;;CAEA;EACC;GACC,cAAc;EACf;CACD;;CAEA;EACC,aAAa;EACb,eAAe;EACf,UAAU;EACV,wBAAwB;EACxB,QAAQ;EACR,YAAY;;EAEZ;GACC;IACC,cAAc;GACf;EACD;CACD;;CAEA;EACC,gBAAgB;CACjB;;CAEA;EACC,mCAAmC;EACnC,sCAAsC;EACtC,wCAAwC;EACxC,sCAAsC;EACtC,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,iBAAiB;CAClB;AACD",sourcesContent:["@layer n23AsideMenu {\r\n	.asideMenuWrapper {\r\n		width: 400px;\r\n		height: 100vh;\r\n\r\n		@media (max-width: 1199.98px) {\r\n			display: none;\r\n		}\r\n	}\r\n\r\n	.asideMenu {\r\n		box-sizing: border-box;\r\n		width: 400px;\r\n		background-color: var(--n23-color-primary);\r\n		font-family: var(--n23-font-family);\r\n		height: 100vh;\r\n		padding: 50px;\r\n		overflow: auto;\r\n		position: fixed;\r\n\r\n		/* hide scrollbar */\r\n		scrollbar-width: none;\r\n		-ms-overflow-style: none;\r\n		-webkit-overflow-scrolling: touch;\r\n		&::-webkit-scrollbar {\r\n			display: none;\r\n		}\r\n\r\n		@media (max-width: 1199.98px) {\r\n			display: none;\r\n		}\r\n\r\n		& ul {\r\n			all: unset;\r\n			list-style-type: none;\r\n		}\r\n\r\n		& ul li {\r\n			font-size: var(--n23-font-size-big);\r\n			font-weight: var(--n23-font-weight-bold);\r\n			border-bottom: 1px solid var(--n23-color-font-asideMenu);\r\n			margin-bottom: 20px;\r\n			padding-bottom: 20px;\r\n			transition: 0.2s;\r\n\r\n			& a {\r\n				all: unset;\r\n				cursor: pointer;\r\n				color: var(--n23-color-font-asideMenu);\r\n				display: inline-block;\r\n				width: 100%;\r\n\r\n				@media (hover: hover) and (pointer: fine) {\r\n					&:hover {\r\n						filter: brightness(85%);\r\n					}\r\n				}\r\n\r\n				&:active {\r\n					background-color: var(--n23-color-primary);\r\n					filter: brightness(100%);\r\n				}\r\n\r\n				&:focus-visible {\r\n					outline: 2px solid var(--n23-color-on-primary);\r\n					filter: brightness(100%);\r\n				}\r\n			}\r\n		}\r\n\r\n		& ul li:last-child {\r\n			margin-bottom: 100px;\r\n		}\r\n	}\r\n\r\n	.asideMenuMobile {\r\n		display: none;\r\n		box-sizing: border-box;\r\n		width: 100vw;\r\n		background-color: var(--n23-color-on-secondary);\r\n		font-family: var(--n23-font-family);\r\n		height: 100vh;\r\n		padding: 100px 20px 150px 20px;\r\n		overflow: auto;\r\n		position: fixed;\r\n		z-index: 8;\r\n\r\n		@media (min-width: 576px) {\r\n			padding: 100px 50px 150px 50px;\r\n		}\r\n\r\n		& ul {\r\n			all: unset;\r\n			list-style-type: none;\r\n		}\r\n\r\n		& ul li {\r\n			text-align: left;\r\n			font-size: var(--n23-font-size-big);\r\n			font-weight: var(--n23-font-weight-normal);\r\n			margin-bottom: 10px;\r\n			padding-bottom: 10px;\r\n			transition: 0.2s;\r\n\r\n			& a {\r\n				all: unset;\r\n				cursor: pointer;\r\n				color: var(--n23-color-font-asideMenu);\r\n				display: inline-block;\r\n				width: 100%;\r\n\r\n				&:active {\r\n					filter: brightness(85%);\r\n				}\r\n\r\n				&:focus-visible {\r\n					filter: brightness(100%);\r\n				}\r\n			}\r\n		}\r\n\r\n		& ul li:last-child {\r\n			margin-bottom: 100px;\r\n		}\r\n	}\r\n\r\n	@media (max-width: 1199.98px) {\r\n		.asideMenuMobile.open {\r\n			display: block;\r\n		}\r\n	}\r\n\r\n	.asideMenuMobileButton {\r\n		display: none;\r\n		position: fixed;\r\n		z-index: 9;\r\n		left: calc(100% - 116px);\r\n		right: 0;\r\n		bottom: 40px;\r\n\r\n		@media (max-width: 1199.98px) {\r\n			& {\r\n				display: block;\r\n			}\r\n		}\r\n	}\r\n\r\n	.menuOpen {\r\n		overflow: hidden;\r\n	}\r\n\r\n	.asideMenuTitle {\r\n		font-family: var(--n23-font-family);\r\n		font-size: var(--n23-font-size-bigger);\r\n		font-weight: var(--n23-font-weight-bold);\r\n		color: var(--n23-color-font-asideMenu);\r\n		margin-bottom: 40px;\r\n		letter-spacing: 4px;\r\n		text-transform: uppercase;\r\n		word-spacing: 8px;\r\n	}\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={asideMenuWrapper:"index-module__asideMenuWrapper__SWXd_",asideMenu:"index-module__asideMenu__irqSA",asideMenuMobile:"index-module__asideMenuMobile__ia1wj",open:"index-module__open___xMha",asideMenuMobileButton:"index-module__asideMenuMobileButton__Fgib8",menuOpen:"index-module__menuOpen__k1pI8",asideMenuTitle:"index-module__asideMenuTitle__VjoNo"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/button/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let button_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Button=function(_param){var ariaLabel=_param.ariaLabel,type=_param.type,text=_param.text,_param_disabled=_param.disabled,props=_object_without_properties(_param,["ariaLabel","type","text","disabled"]);return(0,jsx_runtime.jsx)("button",_object_spread_props(_object_spread({type:type,className:[button_index_module.standard].join(" "),disabled:void 0!==_param_disabled&&_param_disabled,"aria-label":ariaLabel},props),{children:text}))};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/stories/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/button/Button.tsx")},"./src/stories/hooks/useWindowSize.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>useWindowSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var useWindowSize=function(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0,0]),2),size=_useState[0],setSize=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function(){var updateSize=function(){size[0]!=window.innerWidth&&setSize([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",updateSize),updateSize(),function(){return window.removeEventListener("resize",updateSize)}},[size]),size}}}]);
//# sourceMappingURL=stories-menuAside-MenuAside-stories.8ea3bce6.iframe.bundle.js.map