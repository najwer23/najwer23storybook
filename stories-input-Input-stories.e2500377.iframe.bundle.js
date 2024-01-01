"use strict";(self.webpackChunknajwer23storybook=self.webpackChunknajwer23storybook||[]).push([[282],{"./src/stories/input/Input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TypeEmail:()=>TypeEmail,TypeText:()=>TypeText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),validator=__webpack_require__("./src/stories/functions/validator.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/input/index.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(index_module.Z,options);let input_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Input=function(_param){var name=_param.name,placeholder=_param.placeholder,type=_param.type,onBlur=_param.onBlur,label=_param.label,_param_readonly=_param.readonly,errorOptions=_param.errorOptions,defaultValue=_param.defaultValue,innerRef=_param.innerRef,props=_object_without_properties(_param,["name","placeholder","type","onBlur","label","readonly","errorOptions","defaultValue","innerRef"]),_useState=_sliced_to_array((0,react.useState)(null),2),validatorMsg=_useState[0],setValidatorMsg=_useState[1];return(0,jsx_runtime.jsxs)("div",{className:input_index_module.inputWrapper,children:[(0,jsx_runtime.jsx)("div",{className:input_index_module.inputLabel,children:(0,jsx_runtime.jsx)("label",{htmlFor:name,children:label})}),(0,jsx_runtime.jsx)("div",{className:input_index_module.inputInput,children:(0,jsx_runtime.jsx)("input",_object_spread({ref:innerRef,defaultValue:defaultValue,id:name,name:name,type:type,onBlur:function(e){if(void 0!==onBlur){var isError=!1;if(setValidatorMsg(null),errorOptions){var validatorResult=(0,validator.s)(e.target.value,errorOptions);validatorResult.length>0&&(setValidatorMsg(validatorResult[0]),isError=!0)}onBlur(e,isError)}},placeholder:placeholder,readOnly:void 0!==_param_readonly&&_param_readonly},props))}),(0,jsx_runtime.jsx)("div",{className:input_index_module.inputError,children:validatorMsg&&validatorMsg})]})};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:'"text"'}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>, isError: boolean) => void)"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},errorOptions:{defaultValue:null,description:"",name:"errorOptions",required:!1,type:{name:"ErrorValidatorOptions"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/stories/input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}let Input_stories={title:"Example/Input",component:Input,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var TypeText={args:{name:"text77",type:"text",label:"Uuuu Label",placeholder:"tttt",defaultValue:"88",onBlur:function(e,isError){return console.log(e.target.value,isError)},errorOptions:{empty:!0}}},TypeEmail={args:{name:"text77",type:"text",label:"Uuuu Label",placeholder:"tttt",defaultValue:"88",onBlur:function(e,isError){return console.log(e.target.value,isError)},errorOptions:{empty:!0,email:!0}}};TypeText.parameters={...TypeText.parameters,docs:{...TypeText.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "text77",\n    type: "text",\n    label: "Uuuu Label",\n    placeholder: "tttt",\n    defaultValue: "88",\n    onBlur: (e, isError) => console.log(e.target.value, isError),\n    errorOptions: {\n      empty: true\n    }\n  }\n}',...TypeText.parameters?.docs?.source}}},TypeEmail.parameters={...TypeEmail.parameters,docs:{...TypeEmail.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "text77",\n    type: "text",\n    label: "Uuuu Label",\n    placeholder: "tttt",\n    defaultValue: "88",\n    onBlur: (e, isError) => console.log(e.target.value, isError),\n    errorOptions: {\n      empty: true,\n      email: true\n    }\n  }\n}',...TypeEmail.parameters?.docs?.source}}};let __namedExportsOrder=["TypeText","TypeEmail"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./src/stories/input/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`@layer input {
	.index-module__inputWrapper__XhJEH {
		margin-top: 5px;
		margin-bottom: 10px;
	}

	.index-module__inputLabel__JTorU {
		font-size: var(--n23-font-size-semi-small);
		font-family: var(--n23-font-family);
		font-weight: var(--n23-font-weight-semi-bold);
		color: var(--n23-color-font);
		line-height: 22px;
	}

	.index-module__inputInput__R2daA {
		& input {
			box-sizing: border-box;
			height: 40px;
			padding: 20px 10px;
			color: var(--n23-color-font);
			font-family: var(--n23-font-family);
			font-weight: var(--n23-font-weight-normal);
			font-size: var(--n23-font-size-normal);
			width: 100%;
		}

		& ::placeholder {
			filter: brightness(150%);
			font-weight: var(--n23-font-weight-thin);
		}
	}

	.index-module__inputError__llYWa {
			font-size: var(--n23-font-size-small);
			font-family: var(--n23-font-family);
			font-weight: var(--n23-font-weight-normal);
			line-height: 1;
			margin: 2px;
			color: var(--n23-color-error);
		}
}
`,"",{version:3,sources:["webpack://./src/stories/input/index.module.css"],names:[],mappings:"AAAA;CACC;EACC,eAAe;EACf,mBAAmB;CACpB;;CAEA;EACC,0CAA0C;EAC1C,mCAAmC;EACnC,6CAA6C;EAC7C,4BAA4B;EAC5B,iBAAiB;CAClB;;CAEA;EACC;GACC,sBAAsB;GACtB,YAAY;GACZ,kBAAkB;GAClB,4BAA4B;GAC5B,mCAAmC;GACnC,0CAA0C;GAC1C,sCAAsC;GACtC,WAAW;EACZ;;EAEA;GACC,wBAAwB;GACxB,wCAAwC;EACzC;CACD;;CAEA;GACE,qCAAqC;GACrC,mCAAmC;GACnC,0CAA0C;GAC1C,cAAc;GACd,WAAW;GACX,6BAA6B;EAC9B;AACF",sourcesContent:["@layer input {\r\n	.inputWrapper {\r\n		margin-top: 5px;\r\n		margin-bottom: 10px;\r\n	}\r\n\r\n	.inputLabel {\r\n		font-size: var(--n23-font-size-semi-small);\r\n		font-family: var(--n23-font-family);\r\n		font-weight: var(--n23-font-weight-semi-bold);\r\n		color: var(--n23-color-font);\r\n		line-height: 22px;\r\n	}\r\n\r\n	.inputInput {\r\n		& input {\r\n			box-sizing: border-box;\r\n			height: 40px;\r\n			padding: 20px 10px;\r\n			color: var(--n23-color-font);\r\n			font-family: var(--n23-font-family);\r\n			font-weight: var(--n23-font-weight-normal);\r\n			font-size: var(--n23-font-size-normal);\r\n			width: 100%;\r\n		}\r\n\r\n		& ::placeholder {\r\n			filter: brightness(150%);\r\n			font-weight: var(--n23-font-weight-thin);\r\n		}\r\n	}\r\n\r\n	.inputError {\r\n			font-size: var(--n23-font-size-small);\r\n			font-family: var(--n23-font-family);\r\n			font-weight: var(--n23-font-weight-normal);\r\n			line-height: 1;\r\n			margin: 2px;\r\n			color: var(--n23-color-error);\r\n		}\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={inputWrapper:"index-module__inputWrapper__XhJEH",inputLabel:"index-module__inputLabel__JTorU",inputInput:"index-module__inputInput__R2daA",inputError:"index-module__inputError__llYWa"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/functions/validator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}__webpack_require__.d(__webpack_exports__,{s:()=>validator});var validator=function(value,errorOptions){return Object.keys(Object.fromEntries(Object.entries(errorOptions).filter(function(param){return _sliced_to_array(param,2)[1]}))).map(function(v){var msg;switch(v){case"empty":msg=testEmptyString(value);break;case"email":msg=testEmail(value);break;default:msg=null}return msg}).filter(function(v){return null!==v})},testEmptyString=function(value){return""===value.trim()||null===value.trim()?"The field cannot be empty":null},testEmail=function(value){return/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(value)?null:"Incorrect email address"}}}]);
//# sourceMappingURL=stories-input-Input-stories.e2500377.iframe.bundle.js.map