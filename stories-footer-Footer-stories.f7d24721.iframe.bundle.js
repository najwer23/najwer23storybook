"use strict";(self.webpackChunknajwer23storybook=self.webpackChunknajwer23storybook||[]).push([[153],{"./src/stories/footer/Footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FooterAlwaysOnBottom:()=>FooterAlwaysOnBottom,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Footer_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/footer/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let footer_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var Text=__webpack_require__("./src/stories/text/Text.tsx");let Footer_stories={title:"Footer/Footer",component:function(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("footer",{children:[(0,jsx_runtime.jsx)("div",{className:footer_index_module.footerPush}),(0,jsx_runtime.jsx)("div",{className:footer_index_module.footerContainer,children:(0,jsx_runtime.jsx)("div",{className:footer_index_module.footerContent,children:(0,jsx_runtime.jsx)(Text.x,{kind:"p",children:"© Mariusz Najwer"})})})]})})},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var FooterAlwaysOnBottom={args:{}};FooterAlwaysOnBottom.parameters={...FooterAlwaysOnBottom.parameters,docs:{...FooterAlwaysOnBottom.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...FooterAlwaysOnBottom.parameters?.docs?.source}}};let __namedExportsOrder=["FooterAlwaysOnBottom"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/footer/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`@layer n23Footer {
	html {
		height: 100%;
	}

	body {
		min-height: 100%;
		position: relative;

		/* special for asideMenu */
		overflow-x: hidden;
	}

	.index-module__footerPush__YsM54 {
		padding-bottom: 140px;
	}

	.index-module__footerContainer__IIxPg {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.index-module__footerContent__jF4OJ {
		box-sizing: border-box;
		padding-left: 100px;
		padding-right: 100px;
		padding-bottom: 35px;

		@media (max-width: 767.98px) {
			padding-left: 35px;
			padding-right: 35px;
		}
	}
}
`,"",{version:3,sources:["webpack://./src/stories/footer/index.module.css"],names:[],mappings:"AAAA;CACC;EACC,YAAY;CACb;;CAEA;EACC,gBAAgB;EAChB,kBAAkB;;EAElB,0BAA0B;EAC1B,kBAAkB;CACnB;;CAEA;EACC,qBAAqB;CACtB;;CAEA;EACC,kBAAkB;EAClB,SAAS;EACT,WAAW;CACZ;;CAEA;EACC,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;;EAEpB;GACC,kBAAkB;GAClB,mBAAmB;EACpB;CACD;AACD",sourcesContent:["@layer n23Footer {\r\n	html {\r\n		height: 100%;\r\n	}\r\n\r\n	body {\r\n		min-height: 100%;\r\n		position: relative;\r\n\r\n		/* special for asideMenu */\r\n		overflow-x: hidden;\r\n	}\r\n\r\n	.footerPush {\r\n		padding-bottom: 140px;\r\n	}\r\n\r\n	.footerContainer {\r\n		position: absolute;\r\n		bottom: 0;\r\n		width: 100%;\r\n	}\r\n\r\n	.footerContent {\r\n		box-sizing: border-box;\r\n		padding-left: 100px;\r\n		padding-right: 100px;\r\n		padding-bottom: 35px;\r\n\r\n		@media (max-width: 767.98px) {\r\n			padding-left: 35px;\r\n			padding-right: 35px;\r\n		}\r\n	}\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={footerPush:"index-module__footerPush__YsM54",footerContainer:"index-module__footerContainer__IIxPg",footerContent:"index-module__footerContent__jF4OJ"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/text/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`/* https://fluidtypography.com/ */
/* 400 - 1920 */

@layer n23Text {
	.index-module__pText__iMmh8 {
		& p {
			text-wrap: balance;
			max-width: 900px;
			margin-top: 15px;
			margin-bottom: 15px;

			font-family: var(--n23-font-family);
			color: var(--n23-color-font);
			font-weight: var(--n23-font-weight-normal);

			font-size: clamp(1.125rem, 0.664vw + 0.953rem, 1.75rem);
			line-height: clamp(1.688rem, 0.624vw + 1.526rem, 2.275rem);
		}
	}

	/* 80 - 100 */
	/* 1.1 - 1.3 */
	.index-module__h1Text__TeTfZ {
		& h1 {
			text-wrap: balance;
			max-width: 900px;
			margin-bottom: 15px;
			margin-top: 15px;

			font-family: var(--n23-font-family);
			color: var(--n23-color-font);
			font-weight: var(--n23-font-weight-bold);

			font-size: clamp(5rem, 1.316vw + 4.671rem, 6.25rem);
			line-height: clamp(6.5rem, 0.395vw + 6.401rem, 6.875rem);
		}
	}

	.index-module__h2Text__AtpX9 {
		/* 60 - 80 */
		/* 1.1 - 1.3 */
		& h2 {
			text-wrap: balance;
			max-width: 900px;
			margin-bottom: 15px;
			margin-top: 15px;

			font-family: var(--n23-font-family);
			color: var(--n23-color-font);
			font-weight: var(--n23-font-weight-bold);

			font-size: clamp(3.75rem, 1.316vw + 3.421rem, 5rem);
			line-height: clamp(4.875rem, 0.658vw + 4.711rem, 5.5rem);
		}
	}

	/* 35 - 60 */
	/* 1.1 - 1.3 */
	.index-module__h3Text__MP4kR {
		& h3 {
			text-wrap: balance;
			max-width: 900px;
			margin-bottom: 15px;
			margin-top: 15px;

			font-family: var(--n23-font-family);
			color: var(--n23-color-font);
			font-weight: var(--n23-font-weight-bold);

			font-size: clamp(2.188rem, 1.645vw + 1.776rem, 3.75rem);
			line-height: clamp(2.844rem, 1.349vw + 2.507rem, 4.125rem);
		}
	}
}
`,"",{version:3,sources:["webpack://./src/stories/text/index.module.css"],names:[],mappings:"AAAA,iCAAiC;AACjC,eAAe;;AAEf;CACC;EACC;GACC,kBAAkB;GAClB,gBAAgB;GAChB,gBAAgB;GAChB,mBAAmB;;GAEnB,mCAAmC;GACnC,4BAA4B;GAC5B,0CAA0C;;GAE1C,uDAAuD;GACvD,0DAA0D;EAC3D;CACD;;CAEA,aAAa;CACb,cAAc;CACd;EACC;GACC,kBAAkB;GAClB,gBAAgB;GAChB,mBAAmB;GACnB,gBAAgB;;GAEhB,mCAAmC;GACnC,4BAA4B;GAC5B,wCAAwC;;GAExC,mDAAmD;GACnD,wDAAwD;EACzD;CACD;;CAEA;EACC,YAAY;EACZ,cAAc;EACd;GACC,kBAAkB;GAClB,gBAAgB;GAChB,mBAAmB;GACnB,gBAAgB;;GAEhB,mCAAmC;GACnC,4BAA4B;GAC5B,wCAAwC;;GAExC,mDAAmD;GACnD,wDAAwD;EACzD;CACD;;CAEA,YAAY;CACZ,cAAc;CACd;EACC;GACC,kBAAkB;GAClB,gBAAgB;GAChB,mBAAmB;GACnB,gBAAgB;;GAEhB,mCAAmC;GACnC,4BAA4B;GAC5B,wCAAwC;;GAExC,uDAAuD;GACvD,0DAA0D;EAC3D;CACD;AACD",sourcesContent:["/* https://fluidtypography.com/ */\r\n/* 400 - 1920 */\r\n\r\n@layer n23Text {\r\n	.pText {\r\n		& p {\r\n			text-wrap: balance;\r\n			max-width: 900px;\r\n			margin-top: 15px;\r\n			margin-bottom: 15px;\r\n\r\n			font-family: var(--n23-font-family);\r\n			color: var(--n23-color-font);\r\n			font-weight: var(--n23-font-weight-normal);\r\n\r\n			font-size: clamp(1.125rem, 0.664vw + 0.953rem, 1.75rem);\r\n			line-height: clamp(1.688rem, 0.624vw + 1.526rem, 2.275rem);\r\n		}\r\n	}\r\n\r\n	/* 80 - 100 */\r\n	/* 1.1 - 1.3 */\r\n	.h1Text {\r\n		& h1 {\r\n			text-wrap: balance;\r\n			max-width: 900px;\r\n			margin-bottom: 15px;\r\n			margin-top: 15px;\r\n\r\n			font-family: var(--n23-font-family);\r\n			color: var(--n23-color-font);\r\n			font-weight: var(--n23-font-weight-bold);\r\n\r\n			font-size: clamp(5rem, 1.316vw + 4.671rem, 6.25rem);\r\n			line-height: clamp(6.5rem, 0.395vw + 6.401rem, 6.875rem);\r\n		}\r\n	}\r\n\r\n	.h2Text {\r\n		/* 60 - 80 */\r\n		/* 1.1 - 1.3 */\r\n		& h2 {\r\n			text-wrap: balance;\r\n			max-width: 900px;\r\n			margin-bottom: 15px;\r\n			margin-top: 15px;\r\n\r\n			font-family: var(--n23-font-family);\r\n			color: var(--n23-color-font);\r\n			font-weight: var(--n23-font-weight-bold);\r\n\r\n			font-size: clamp(3.75rem, 1.316vw + 3.421rem, 5rem);\r\n			line-height: clamp(4.875rem, 0.658vw + 4.711rem, 5.5rem);\r\n		}\r\n	}\r\n\r\n	/* 35 - 60 */\r\n	/* 1.1 - 1.3 */\r\n	.h3Text {\r\n		& h3 {\r\n			text-wrap: balance;\r\n			max-width: 900px;\r\n			margin-bottom: 15px;\r\n			margin-top: 15px;\r\n\r\n			font-family: var(--n23-font-family);\r\n			color: var(--n23-color-font);\r\n			font-weight: var(--n23-font-weight-bold);\r\n\r\n			font-size: clamp(2.188rem, 1.645vw + 1.776rem, 3.75rem);\r\n			line-height: clamp(2.844rem, 1.349vw + 2.507rem, 4.125rem);\r\n		}\r\n	}\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={pText:"index-module__pText__iMmh8",h1Text:"index-module__h1Text__TeTfZ",h2Text:"index-module__h2Text__AtpX9",h3Text:"index-module__h3Text__MP4kR"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/text/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let text_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var Text=function(param){var kind=param.kind,children=param.children,textDictionary={p:(0,jsx_runtime.jsx)("p",{children:children}),h1:(0,jsx_runtime.jsx)("h1",{children:children}),h2:(0,jsx_runtime.jsx)("h2",{children:children}),h3:(0,jsx_runtime.jsx)("h3",{children:children}),default:children};return(0,jsx_runtime.jsx)("div",{className:text_index_module["".concat(kind,"Text")],children:textDictionary[null!=kind?kind:"default"]})};try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{kind:{defaultValue:null,description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/stories/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=stories-footer-Footer-stories.f7d24721.iframe.bundle.js.map