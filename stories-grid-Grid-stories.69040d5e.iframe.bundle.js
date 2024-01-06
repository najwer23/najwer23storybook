"use strict";(self.webpackChunknajwer23storybook=self.webpackChunknajwer23storybook||[]).push([[891],{"./src/stories/grid/Grid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Grid3columns:()=>Grid3columns,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Grid_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/grid/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let grid_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var Grid=function(param){var children=param.children,gap=param.gap,col=param.col;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:grid_index_module.gridContainer,style:{"--n23-fc-m":col.mobile,"--n23-fc-t":col.tablet,"--n23-fc-sd":col.smallDesktop,"--n23-fc-d":col.desktop,"--n23-fg-c":gap.col,"--n23-fg-r":gap.row},children:react.Children.map(children.props.children,function(child){return(0,jsx_runtime.jsx)("div",{className:grid_index_module.gridContainerChild,children:child})})})})};try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{gap:{defaultValue:null,description:"",name:"gap",required:!0,type:{name:"{ col: string; row: string; }"}},col:{defaultValue:null,description:"",name:"col",required:!0,type:{name:"{ mobile: number; smallDesktop: number; desktop: number; tablet: number; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/grid/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"src/stories/grid/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}let Grid_stories={title:"Grid/Grid",component:Grid,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Grid3columns={args:{gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:3,tablet:3},children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{style:{background:"darkgrey"},children:" Test1 "}),(0,jsx_runtime.jsxs)("div",{style:{background:"darkgrey"},children:[" ",(0,jsx_runtime.jsx)("div",{children:" Test2, level2"})," "]}),(0,jsx_runtime.jsx)("div",{style:{background:"darkgrey"},children:" Test3 "}),(0,jsx_runtime.jsx)("div",{style:{background:"darkgrey"},children:" Test4 "}),(0,jsx_runtime.jsx)("div",{style:{background:"darkgrey"},children:" Test5 "})]})}};Grid3columns.parameters={...Grid3columns.parameters,docs:{...Grid3columns.parameters?.docs,source:{originalSource:'{\n  args: {\n    gap: {\n      col: "20px",\n      row: "20px"\n    },\n    col: {\n      smallDesktop: 3,\n      desktop: 3,\n      mobile: 3,\n      tablet: 3\n    },\n    children: <>\r\n                <div style={{\n        background: "darkgrey"\n      }}> Test1 </div>\r\n                <div style={{\n        background: "darkgrey"\n      }}> <div> Test2, level2</div> </div>\r\n                <div style={{\n        background: "darkgrey"\n      }}> Test3 </div>\r\n                <div style={{\n        background: "darkgrey"\n      }}> Test4 </div>\r\n                <div style={{\n        background: "darkgrey"\n      }}> Test5 </div>\r\n            </>\n  }\n}',...Grid3columns.parameters?.docs?.source}}};let __namedExportsOrder=["Grid3columns"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/grid/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`/* https://wiryawanadipa.com/blog/calculate-percentage-width-of-flex-items-when-using-gap/ */

@layer n23Grid {
	.index-module__gridContainer__EfF1B {
		display: flex;
		column-gap: var(--n23-fg-c);
		row-gap: var(--n23-fg-r);
		flex-wrap: wrap;
	}

	.index-module__gridContainerChild__bc44X {
		width: calc(
			(100% / var(--n23-flex-col)) -
				(((var(--n23-flex-col) - 1) / var(--n23-flex-col)) * var(--n23-fg-c))
		);
	}

	/* breakpoints */
	@media (max-width: 767.98px) {
		.index-module__gridContainerChild__bc44X {
			--n23-flex-col: var(--n23-fc-m);
		}
	}

	@media (min-width: 768px) and (max-width: 1199.98px) {
		.index-module__gridContainerChild__bc44X {
			--n23-flex-col: var(--n23-fc-t);
		}
	}

	@media (min-width: 1200px) and (max-width: 1599.98px) {
		.index-module__gridContainerChild__bc44X {
			--n23-flex-col: var(--n23-fc-sd);
		}
	}

	@media (min-width: 1600px) {
		.index-module__gridContainerChild__bc44X {
			--n23-flex-col: var(--n23-fc-d);
		}
	}
}
`,"",{version:3,sources:["webpack://./src/stories/grid/index.module.css"],names:[],mappings:"AAAA,4FAA4F;;AAE5F;CACC;EACC,aAAa;EACb,2BAA2B;EAC3B,wBAAwB;EACxB,eAAe;CAChB;;CAEA;EACC;;;GAGC;CACF;;CAEA,gBAAgB;CAChB;EACC;GACC,+BAA+B;EAChC;CACD;;CAEA;EACC;GACC,+BAA+B;EAChC;CACD;;CAEA;EACC;GACC,gCAAgC;EACjC;CACD;;CAEA;EACC;GACC,+BAA+B;EAChC;CACD;AACD",sourcesContent:["/* https://wiryawanadipa.com/blog/calculate-percentage-width-of-flex-items-when-using-gap/ */\r\n\r\n@layer n23Grid {\r\n	.gridContainer {\r\n		display: flex;\r\n		column-gap: var(--n23-fg-c);\r\n		row-gap: var(--n23-fg-r);\r\n		flex-wrap: wrap;\r\n	}\r\n\r\n	.gridContainerChild {\r\n		width: calc(\r\n			(100% / var(--n23-flex-col)) -\r\n				(((var(--n23-flex-col) - 1) / var(--n23-flex-col)) * var(--n23-fg-c))\r\n		);\r\n	}\r\n\r\n	/* breakpoints */\r\n	@media (max-width: 767.98px) {\r\n		.gridContainerChild {\r\n			--n23-flex-col: var(--n23-fc-m);\r\n		}\r\n	}\r\n\r\n	@media (min-width: 768px) and (max-width: 1199.98px) {\r\n		.gridContainerChild {\r\n			--n23-flex-col: var(--n23-fc-t);\r\n		}\r\n	}\r\n\r\n	@media (min-width: 1200px) and (max-width: 1599.98px) {\r\n		.gridContainerChild {\r\n			--n23-flex-col: var(--n23-fc-sd);\r\n		}\r\n	}\r\n\r\n	@media (min-width: 1600px) {\r\n		.gridContainerChild {\r\n			--n23-flex-col: var(--n23-fc-d);\r\n		}\r\n	}\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={gridContainer:"index-module__gridContainer__EfF1B",gridContainerChild:"index-module__gridContainerChild__bc44X"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=stories-grid-Grid-stories.69040d5e.iframe.bundle.js.map