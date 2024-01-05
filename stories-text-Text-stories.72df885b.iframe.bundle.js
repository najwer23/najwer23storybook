"use strict";(self.webpackChunknajwer23storybook=self.webpackChunknajwer23storybook||[]).push([[659],{"./src/stories/text/Text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextH1:()=>TextH1,TextH2:()=>TextH2,TextH3:()=>TextH3,TextParagraph:()=>TextParagraph,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Text_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/text/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let text_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var Text=function(param){var kind=param.kind,children=param.children,textDictionary={p:(0,jsx_runtime.jsx)("p",{children:children}),h1:(0,jsx_runtime.jsx)("h1",{children:children}),h2:(0,jsx_runtime.jsx)("h2",{children:children}),h3:(0,jsx_runtime.jsx)("h3",{children:children}),default:children};return(0,jsx_runtime.jsx)("div",{className:text_index_module["".concat(kind,"Text")],children:textDictionary[null!=kind?kind:"default"]})};try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{kind:{defaultValue:null,description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/stories/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}let Text_stories={title:"Text/Text",component:Text,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var TextH1={args:{kind:"h1",children:"Title! More title!"}},TextH2={args:{kind:"h2",children:"Title! More title! h2"}},TextH3={args:{kind:"h3",children:"Title! More title! h3"}},TextParagraph={args:{kind:"p",children:"It was Sam's first view of a battle of Men against Men, and he did not like it much. He was glad that he could not see the dead face. He wondered what the man's name was and where he came from; and if he was really evil of heart, or what lies or threats had led him on the long march from his home; and if he would rather have stayed there in peace."}};TextH1.parameters={...TextH1.parameters,docs:{...TextH1.parameters?.docs,source:{originalSource:'{\n  args: {\n    kind: "h1",\n    children: "Title! More title!"\n  }\n}',...TextH1.parameters?.docs?.source}}},TextH2.parameters={...TextH2.parameters,docs:{...TextH2.parameters?.docs,source:{originalSource:'{\n  args: {\n    kind: "h2",\n    children: "Title! More title! h2"\n  }\n}',...TextH2.parameters?.docs?.source}}},TextH3.parameters={...TextH3.parameters,docs:{...TextH3.parameters?.docs,source:{originalSource:'{\n  args: {\n    kind: "h3",\n    children: "Title! More title! h3"\n  }\n}',...TextH3.parameters?.docs?.source}}},TextParagraph.parameters={...TextParagraph.parameters,docs:{...TextParagraph.parameters?.docs,source:{originalSource:'{\n  args: {\n    kind: "p",\n    children: testText\n  }\n}',...TextParagraph.parameters?.docs?.source}}};let __namedExportsOrder=["TextH1","TextH2","TextH3","TextParagraph"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/text/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`/* https://fluidtypography.com/ */

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

	.index-module__h1Text__TeTfZ {
		& h1 {
			text-wrap: balance;
			max-width: 900px;
			margin-bottom: 15px;
			margin-top: 15px;

			font-family: var(--n23-font-family);
			color: var(--n23-color-font);
			font-weight: var(--n23-font-weight-bold);

			font-size: clamp(3.25rem, 3.187vw + 2.425rem, 6.25rem);
			line-height: clamp(3.575rem, 4.834vw + 2.324rem, 8.125rem);
		}
	}

	.index-module__h2Text__AtpX9 {
		& h2 {
			text-wrap: balance;
			max-width: 900px;
			margin-bottom: 15px;
			margin-top: 15px;

			font-family: var(--n23-font-family);
			color: var(--n23-color-font);
			font-weight: var(--n23-font-weight-bold);

			font-size: clamp(3.75rem, 1.66vw + 3.32rem, 5.313rem);
			line-height: clamp(5.625rem, 1.361vw + 5.273rem, 6.906rem);
		}
	}

	.index-module__h3Text__MP4kR {
		& h3 {
			text-wrap: balance;
			max-width: 900px;
			margin-bottom: 15px;
			margin-top: 15px;

			font-family: var(--n23-font-family);
			color: var(--n23-color-font);
			font-weight: var(--n23-font-weight-bold);

			font-size: clamp(1.875rem, 1.992vw + 1.36rem, 3.75rem);
			line-height: clamp(2.813rem, 2.191vw + 2.246rem, 4.875rem);
		}
	}
}
`,"",{version:3,sources:["webpack://./src/stories/text/index.module.css"],names:[],mappings:"AAAA,iCAAiC;;AAEjC;CACC;EACC;GACC,kBAAkB;GAClB,gBAAgB;GAChB,gBAAgB;GAChB,mBAAmB;;GAEnB,mCAAmC;GACnC,4BAA4B;GAC5B,0CAA0C;;GAE1C,uDAAuD;GACvD,0DAA0D;EAC3D;CACD;;CAEA;EACC;GACC,kBAAkB;GAClB,gBAAgB;GAChB,mBAAmB;GACnB,gBAAgB;;GAEhB,mCAAmC;GACnC,4BAA4B;GAC5B,wCAAwC;;GAExC,sDAAsD;GACtD,0DAA0D;EAC3D;CACD;;CAEA;EACC;GACC,kBAAkB;GAClB,gBAAgB;GAChB,mBAAmB;GACnB,gBAAgB;;GAEhB,mCAAmC;GACnC,4BAA4B;GAC5B,wCAAwC;;GAExC,qDAAqD;GACrD,0DAA0D;EAC3D;CACD;;CAEA;EACC;GACC,kBAAkB;GAClB,gBAAgB;GAChB,mBAAmB;GACnB,gBAAgB;;GAEhB,mCAAmC;GACnC,4BAA4B;GAC5B,wCAAwC;;GAExC,sDAAsD;GACtD,0DAA0D;EAC3D;CACD;AACD",sourcesContent:["/* https://fluidtypography.com/ */\r\n\r\n@layer n23Text {\r\n	.pText {\r\n		& p {\r\n			text-wrap: balance;\r\n			max-width: 900px;\r\n			margin-top: 15px;\r\n			margin-bottom: 15px;\r\n\r\n			font-family: var(--n23-font-family);\r\n			color: var(--n23-color-font);\r\n			font-weight: var(--n23-font-weight-normal);\r\n\r\n			font-size: clamp(1.125rem, 0.664vw + 0.953rem, 1.75rem);\r\n			line-height: clamp(1.688rem, 0.624vw + 1.526rem, 2.275rem);\r\n		}\r\n	}\r\n\r\n	.h1Text {\r\n		& h1 {\r\n			text-wrap: balance;\r\n			max-width: 900px;\r\n			margin-bottom: 15px;\r\n			margin-top: 15px;\r\n\r\n			font-family: var(--n23-font-family);\r\n			color: var(--n23-color-font);\r\n			font-weight: var(--n23-font-weight-bold);\r\n\r\n			font-size: clamp(3.25rem, 3.187vw + 2.425rem, 6.25rem);\r\n			line-height: clamp(3.575rem, 4.834vw + 2.324rem, 8.125rem);\r\n		}\r\n	}\r\n\r\n	.h2Text {\r\n		& h2 {\r\n			text-wrap: balance;\r\n			max-width: 900px;\r\n			margin-bottom: 15px;\r\n			margin-top: 15px;\r\n\r\n			font-family: var(--n23-font-family);\r\n			color: var(--n23-color-font);\r\n			font-weight: var(--n23-font-weight-bold);\r\n\r\n			font-size: clamp(3.75rem, 1.66vw + 3.32rem, 5.313rem);\r\n			line-height: clamp(5.625rem, 1.361vw + 5.273rem, 6.906rem);\r\n		}\r\n	}\r\n\r\n	.h3Text {\r\n		& h3 {\r\n			text-wrap: balance;\r\n			max-width: 900px;\r\n			margin-bottom: 15px;\r\n			margin-top: 15px;\r\n\r\n			font-family: var(--n23-font-family);\r\n			color: var(--n23-color-font);\r\n			font-weight: var(--n23-font-weight-bold);\r\n\r\n			font-size: clamp(1.875rem, 1.992vw + 1.36rem, 3.75rem);\r\n			line-height: clamp(2.813rem, 2.191vw + 2.246rem, 4.875rem);\r\n		}\r\n	}\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={pText:"index-module__pText__iMmh8",h1Text:"index-module__h1Text__TeTfZ",h2Text:"index-module__h2Text__AtpX9",h3Text:"index-module__h3Text__MP4kR"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=stories-text-Text-stories.72df885b.iframe.bundle.js.map