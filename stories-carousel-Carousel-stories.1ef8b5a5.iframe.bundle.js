"use strict";(self.webpackChunknajwer23storybook=self.webpackChunknajwer23storybook||[]).push([[853],{"./src/stories/carousel/Carousel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CarouselStandard:()=>CarouselStandard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Carousel_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),stories_button=__webpack_require__("./src/stories/button/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/carousel/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let carousel_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var useWindowSize=__webpack_require__("./src/stories/hooks/useWindowSize.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Carousel=function(param){var children=param.children,arrowLeftIcon=param.arrowLeftIcon,arrowRightIcon=param.arrowRightIcon,carouselRef=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(!1),2),showArrowLeft=_useState[0],setShowArrowLeft=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),showArrowRight=_useState1[0],setShowArrowRight=_useState1[1],width=_sliced_to_array((0,useWindowSize.i)(),1)[0];(0,react.useEffect)(function(){var timerId=setTimeout(function(){handleScroll()},1);return function(){return clearTimeout(timerId)}},[width]);var handleScroll=function(){carouselRef.current.scrollLeft<=0?(setShowArrowLeft(!1),carouselRef.current.scrollWidth-carouselRef.current.clientWidth!=0?setShowArrowRight(!0):setShowArrowRight(!1)):carouselRef.current.scrollLeft>=carouselRef.current.scrollWidth-carouselRef.current.clientWidth?(setShowArrowLeft(!0),setShowArrowRight(!1)):(setShowArrowLeft(!0),setShowArrowRight(!0))};return(0,jsx_runtime.jsx)("div",{className:carousel_index_module.carouselWrapper,children:(0,jsx_runtime.jsxs)("div",{className:carousel_index_module.carouselStyled,ref:carouselRef,onScroll:handleScroll,children:[(0,jsx_runtime.jsx)("div",{className:[carousel_index_module.arrowLeft,showArrowLeft&&carousel_index_module.arrowShow].join(" "),children:(0,jsx_runtime.jsx)(stories_button.z,{text:arrowLeftIcon,ariaLabel:"move carousel left",type:"button",onClick:function(){carouselRef.current.scrollLeft-=carouselRef.current.offsetWidth}})}),children,(0,jsx_runtime.jsx)("div",{className:[carousel_index_module.arrowRight,showArrowRight&&carousel_index_module.arrowShow].join(" "),children:(0,jsx_runtime.jsx)(stories_button.z,{text:arrowRightIcon,ariaLabel:"move carousel right",type:"button",onClick:function(){carouselRef.current.scrollLeft+=carouselRef.current.offsetWidth}})})]})})};try{Carousel.displayName="Carousel",Carousel.__docgenInfo={description:"",displayName:"Carousel",props:{arrowLeftIcon:{defaultValue:null,description:"",name:"arrowLeftIcon",required:!0,type:{name:"any"}},arrowRightIcon:{defaultValue:null,description:"",name:"arrowRightIcon",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/carousel/Carousel.tsx#Carousel"]={docgenInfo:Carousel.__docgenInfo,name:"Carousel",path:"src/stories/carousel/Carousel.tsx#Carousel"})}catch(__react_docgen_typescript_loader_error){}let Carousel_stories={title:"Carousel/Carousel ",component:Carousel,tags:["autodocs"],argTypes:{}};var CarouselStandard={args:{arrowLeftIcon:(0,jsx_runtime.jsx)("div",{children:"L"}),arrowRightIcon:(0,jsx_runtime.jsx)("div",{children:"R"}),children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{style:{width:"500px",height:"400px",margin:"20px",background:"green"}}),(0,jsx_runtime.jsx)("div",{style:{width:"500px",height:"400px",margin:"20px",background:"red"}}),(0,jsx_runtime.jsx)("div",{style:{width:"500px",height:"400px",margin:"20px",background:"yellow"}}),(0,jsx_runtime.jsx)("div",{style:{width:"500px",height:"400px",margin:"20px",background:"blue"}}),(0,jsx_runtime.jsx)("div",{style:{width:"500px",height:"400px",margin:"20px",background:"grey"}})]})}};CarouselStandard.parameters={...CarouselStandard.parameters,docs:{...CarouselStandard.parameters?.docs,source:{originalSource:'{\n  args: {\n    arrowLeftIcon: <div>L</div>,\n    arrowRightIcon: <div>R</div>,\n    children: <>\r\n            <div style={{\n        width: "500px",\n        height: "400px",\n        margin: "20px",\n        background: "green"\n      }}></div>\r\n            <div style={{\n        width: "500px",\n        height: "400px",\n        margin: "20px",\n        background: "red"\n      }}></div>\r\n            <div style={{\n        width: "500px",\n        height: "400px",\n        margin: "20px",\n        background: "yellow"\n      }}></div>\r\n            <div style={{\n        width: "500px",\n        height: "400px",\n        margin: "20px",\n        background: "blue"\n      }}></div>\r\n            <div style={{\n        width: "500px",\n        height: "400px",\n        margin: "20px",\n        background: "grey"\n      }}></div>\r\n        </>\n  }\n}',...CarouselStandard.parameters?.docs?.source}}};let __namedExportsOrder=["CarouselStandard"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/button/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`@layer button {
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
`,"",{version:3,sources:["webpack://./src/stories/button/index.module.css"],names:[],mappings:"AAAA;CACC;EACC,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,+BAA+B;EAC/B,0CAA0C;EAC1C,0CAA0C;EAC1C,sCAAsC;EACtC,sBAAsB;EACtB,gBAAgB;EAChB,mCAAmC;;EAEnC,2BAA2B;EAC3B,yBAAyB;EACzB,wBAAwB;EACxB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,6CAA6C;;EAE7C;GACC;IACC,6CAA6C;IAC7C,6BAA6B;GAC9B;EACD;;EAEA;GACC,oDAAoD;EACrD;;EAEA;GACC,8CAA8C;GAC9C,iCAAiC;EAClC;;EAEA;GACC,mBAAmB;GACnB,iCAAiC;EAClC;CACD;AACD",sourcesContent:["@layer button {\r\n	.standard {\r\n		cursor: pointer;\r\n		border: unset;\r\n		padding: 10px 17px;\r\n		border-radius: 8px;\r\n		color: var(--n23-color-surface);\r\n		background-color: var(--n23-color-primary);\r\n		font-weight: var(--n23-font-weight-normal);\r\n		font-size: var(--n23-font-size-normal);\r\n		letter-spacing: normal;\r\n		transition: 0.2s;\r\n		font-family: var(--n23-font-family);\r\n\r\n		-webkit-touch-callout: none;\r\n		-webkit-user-select: none;\r\n		-khtml-user-select: none;\r\n		-moz-user-select: none;\r\n		-ms-user-select: none;\r\n		user-select: none;\r\n		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n\r\n		@media (hover: hover) and (pointer: fine) {\r\n			&:hover {\r\n				background-color: var(--n23-color-on-primary);\r\n				box-shadow: var(--n23-shadow);\r\n			}\r\n		}\r\n\r\n		&:active {\r\n			background-color: var(--n23-color-on-primary-active);\r\n		}\r\n\r\n		&:focus-visible {\r\n			outline: 2px solid var(--n23-color-on-primary);\r\n			background-color: var(--n23-grey);\r\n		}\r\n\r\n		&:disabled {\r\n			cursor: not-allowed;\r\n			background-color: var(--n23-grey);\r\n		}\r\n	}\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={standard:"index-module__standard__a2LfW"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/carousel/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`@layer carouel {
	.index-module__carouselStyled__R6Eoz {
		display: flex;
		gap: 60px;
		flex-wrap: nowrap;
		overflow-x: scroll;
		margin-bottom: 20px;
		scroll-behavior: smooth;

		/* hide scrollbar */
		scrollbar-width: none;
		-ms-overflow-style: none;
		-webkit-overflow-scrolling: touch;
		&::-webkit-scrollbar {
			display: none;
		}

		& > * {
			flex-shrink: 0;
		}
	}

	.index-module__carouselWrapper__UP5KU {
		display: grid;
		position: relative;
	}

	.index-module__arrowLeft__mtV6O {
		position: absolute;
		top: calc(50% - 25px);
		left: 20px;
		display: none;

		@media (max-width: 767.98px) {
			display: none;
		}
	}

	.index-module__arrowRight__Ax1EB {
		position: absolute;
		right: 20px;
		top: calc(50% - 25px);
		display: none;

		@media (max-width: 767.98px) {
			display: none;
		}
	}

	.index-module__arrowShow__DLlpQ {
		display: block;

		@media (max-width: 767.98px) {
			display: none;
		}
	}

	.index-module__arrowRightIcon__SLKwG {
		width: 25px;
		height: 25px;
		border: 10px solid white;
		border-left: 0;
		border-top: 0;
		transform: rotate(315deg);
	}

	.index-module__arrowLeftIcon__bodJ3 {
		width: 10px;
		height: 10px;
		border: 3px solid white;
		border-left: 0;
		border-top: 0;
		transform: rotate(135deg);
	}
}
`,"",{version:3,sources:["webpack://./src/stories/carousel/index.module.css"],names:[],mappings:"AAAA;CACC;EACC,aAAa;EACb,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;;EAEvB,mBAAmB;EACnB,qBAAqB;EACrB,wBAAwB;EACxB,iCAAiC;EACjC;GACC,aAAa;EACd;;EAEA;GACC,cAAc;EACf;CACD;;CAEA;EACC,aAAa;EACb,kBAAkB;CACnB;;CAEA;EACC,kBAAkB;EAClB,qBAAqB;EACrB,UAAU;EACV,aAAa;;EAEb;GACC,aAAa;EACd;CACD;;CAEA;EACC,kBAAkB;EAClB,WAAW;EACX,qBAAqB;EACrB,aAAa;;EAEb;GACC,aAAa;EACd;CACD;;CAEA;EACC,cAAc;;EAEd;GACC,aAAa;EACd;CACD;;CAEA;EACC,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,yBAAyB;CAC1B;;CAEA;EACC,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,cAAc;EACd,aAAa;EACb,yBAAyB;CAC1B;AACD",sourcesContent:["@layer carouel {\r\n	.carouselStyled {\r\n		display: flex;\r\n		gap: 60px;\r\n		flex-wrap: nowrap;\r\n		overflow-x: scroll;\r\n		margin-bottom: 20px;\r\n		scroll-behavior: smooth;\r\n\r\n		/* hide scrollbar */\r\n		scrollbar-width: none;\r\n		-ms-overflow-style: none;\r\n		-webkit-overflow-scrolling: touch;\r\n		&::-webkit-scrollbar {\r\n			display: none;\r\n		}\r\n\r\n		& > * {\r\n			flex-shrink: 0;\r\n		}\r\n	}\r\n\r\n	.carouselWrapper {\r\n		display: grid;\r\n		position: relative;\r\n	}\r\n\r\n	.arrowLeft {\r\n		position: absolute;\r\n		top: calc(50% - 25px);\r\n		left: 20px;\r\n		display: none;\r\n\r\n		@media (max-width: 767.98px) {\r\n			display: none;\r\n		}\r\n	}\r\n\r\n	.arrowRight {\r\n		position: absolute;\r\n		right: 20px;\r\n		top: calc(50% - 25px);\r\n		display: none;\r\n\r\n		@media (max-width: 767.98px) {\r\n			display: none;\r\n		}\r\n	}\r\n\r\n	.arrowShow {\r\n		display: block;\r\n\r\n		@media (max-width: 767.98px) {\r\n			display: none;\r\n		}\r\n	}\r\n\r\n	.arrowRightIcon {\r\n		width: 25px;\r\n		height: 25px;\r\n		border: 10px solid white;\r\n		border-left: 0;\r\n		border-top: 0;\r\n		transform: rotate(315deg);\r\n	}\r\n\r\n	.arrowLeftIcon {\r\n		width: 10px;\r\n		height: 10px;\r\n		border: 3px solid white;\r\n		border-left: 0;\r\n		border-top: 0;\r\n		transform: rotate(135deg);\r\n	}\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={carouselStyled:"index-module__carouselStyled__R6Eoz",carouselWrapper:"index-module__carouselWrapper__UP5KU",arrowLeft:"index-module__arrowLeft__mtV6O",arrowRight:"index-module__arrowRight__Ax1EB",arrowShow:"index-module__arrowShow__DLlpQ",arrowRightIcon:"index-module__arrowRightIcon__SLKwG",arrowLeftIcon:"index-module__arrowLeftIcon__bodJ3"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/button/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let button_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Button=function(_param){var ariaLabel=_param.ariaLabel,type=_param.type,text=_param.text,_param_disabled=_param.disabled,props=_object_without_properties(_param,["ariaLabel","type","text","disabled"]);return(0,jsx_runtime.jsx)("button",_object_spread_props(_object_spread({type:type,className:[button_index_module.standard].join(" "),disabled:void 0!==_param_disabled&&_param_disabled,"aria-label":ariaLabel},props),{children:text}))};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/stories/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/button/Button.tsx")},"./src/stories/hooks/useWindowSize.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>useWindowSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var useWindowSize=function(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0,0]),2),size=_useState[0],setSize=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function(){var updateSize=function(){size[0]!=window.innerWidth&&setSize([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",updateSize),updateSize(),function(){return window.removeEventListener("resize",updateSize)}},[size]),size}}}]);
//# sourceMappingURL=stories-carousel-Carousel-stories.1ef8b5a5.iframe.bundle.js.map