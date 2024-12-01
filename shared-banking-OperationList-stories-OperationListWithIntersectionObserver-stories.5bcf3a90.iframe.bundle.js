"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[629],{"./src/shared/banking/OperationList/stories/OperationListWithIntersectionObserver.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sample:()=>Sample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OperationListWithIntersectionObserver_stories});var react=__webpack_require__("./node_modules/react/index.js"),Operation=__webpack_require__("./src/shared/banking/operation/Operation.tsx"),OperationTypes=__webpack_require__("./src/shared/banking/operation/OperationTypes.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var OperationListWithIntersectionObserver=function OperationListWithIntersectionObserver(_ref){var operations=_ref.operations,_useState2=_slicedToArray((0,react.useState)(operations),2),items=_useState2[0],setItems=_useState2[1],observer=(0,react.useRef)(null),lastItemRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){return observer.current=new IntersectionObserver((function(entries){_slicedToArray(entries,1)[0].isIntersecting&&setItems((function(prevItems){return[].concat(_toConsumableArray(prevItems),[(0,OperationTypes.ZB)((new Date).toISOString())])}))})),lastItemRef.current&&observer.current.observe(lastItemRef.current),function(){observer.current&&lastItemRef.current&&observer.current.unobserve(lastItemRef.current)}}),[]),(0,react.useEffect)((function(){lastItemRef.current&&observer.current&&observer.current.observe(lastItemRef.current)}),[items]),(0,jsx_runtime.jsx)("div",{children:items.map((function(item,index){return(0,jsx_runtime.jsx)("div",{ref:index===items.length-1?lastItemRef:null,children:(0,jsx_runtime.jsx)(Operation.O,_objectSpread({},item))},item.id)}))})};OperationListWithIntersectionObserver.displayName="OperationListWithIntersectionObserver";try{OperationListWithIntersectionObserver.displayName="OperationListWithIntersectionObserver",OperationListWithIntersectionObserver.__docgenInfo={description:"",displayName:"OperationListWithIntersectionObserver",props:{operations:{defaultValue:null,description:"",name:"operations",required:!0,type:{name:"AbstractOperation[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/banking/OperationList/OperationListWithIntersectionObserver.tsx#OperationListWithIntersectionObserver"]={docgenInfo:OperationListWithIntersectionObserver.__docgenInfo,name:"OperationListWithIntersectionObserver",path:"src/shared/banking/OperationList/OperationListWithIntersectionObserver.tsx#OperationListWithIntersectionObserver"})}catch(__react_docgen_typescript_loader_error){}const OperationListWithIntersectionObserver_stories={title:"Example/Banking/OperationListWithIntersectionObserver",component:OperationListWithIntersectionObserver,tags:["autodocs"]};var Sample={args:{operations:[(0,OperationTypes.ZB)((new Date).toISOString()),(0,OperationTypes.ZB)((new Date).toISOString())]}};Sample.parameters={...Sample.parameters,docs:{...Sample.parameters?.docs,source:{originalSource:"{\n  args: {\n    operations: [createRandomOperation(new Date().toISOString()), createRandomOperation(new Date().toISOString())]\n  }\n}",...Sample.parameters?.docs?.source}}};const __namedExportsOrder=["Sample"]}}]);