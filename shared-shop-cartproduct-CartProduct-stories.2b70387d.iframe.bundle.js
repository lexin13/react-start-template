/*! For license information please see shared-shop-cartproduct-CartProduct-stories.2b70387d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[206],{"./src/shared/shop/cartproduct/CartProduct.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sample:()=>Sample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CartProduct_stories});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),cart_product_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/shop/cartproduct/cart_product.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(cart_product_module.Z,options);const cartproduct_cart_product_module=cart_product_module.Z&&cart_product_module.Z.locals?cart_product_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CartProduct=function CartProduct(_ref){var price=_ref.price,image=_ref.image,name=_ref.name;return(0,jsx_runtime.jsxs)("div",{className:cartproduct_cart_product_module.card,children:[(0,jsx_runtime.jsxs)("div",{className:cartproduct_cart_product_module["card-header"],children:[(0,jsx_runtime.jsx)("img",{className:cartproduct_cart_product_module["product-image"],src:image}),(0,jsx_runtime.jsx)("span",{className:cartproduct_cart_product_module.price,children:price})]}),(0,jsx_runtime.jsxs)("div",{className:cartproduct_cart_product_module["card-body"],children:[(0,jsx_runtime.jsx)("h2",{className:cartproduct_cart_product_module.name,children:name}),(0,jsx_runtime.jsx)("div",{className:cartproduct_cart_product_module.bin})]})]})};CartProduct.displayName="CartProduct";try{CartProduct.displayName="CartProduct",CartProduct.__docgenInfo={description:"",displayName:"CartProduct",props:{price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/shop/cartproduct/CartProduct.tsx#CartProduct"]={docgenInfo:CartProduct.__docgenInfo,name:"CartProduct",path:"src/shared/shop/cartproduct/CartProduct.tsx#CartProduct"})}catch(__react_docgen_typescript_loader_error){}var cherry1=__webpack_require__("./src/stories/assets/cherry1.png");const CartProduct_stories={title:"Example/Shop/CartProduct",component:CartProduct,tags:["autodocs"]};var Sample={args:{price:100,image:cherry1,name:"Product Name"}};Sample.parameters={...Sample.parameters,docs:{...Sample.parameters?.docs,source:{originalSource:"{\n  args: {\n    price: 100,\n    image: image,\n    name: 'Product Name'\n  }\n}",...Sample.parameters?.docs?.source}}};const __namedExportsOrder=["Sample"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/shop/cartproduct/cart_product.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/shared/shop/cartproduct/bin.svg"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,`.ipSVeBV3Dv3FIe70uMoU{border:1px solid #ccc;border-radius:8px;padding:16px;max-width:300px;box-shadow:0 4px 8px rgba(0,0,0,.1);transition:box-shadow .3s ease}.ipSVeBV3Dv3FIe70uMoU:hover{box-shadow:0 8px 16px rgba(0,0,0,.2)}.C6iTp0y_lBqqqyQbgNOX{display:flex;justify-content:space-between;margin-bottom:12px}.C6iTp0y_lBqqqyQbgNOX .RgO2NppOQVYy1o6Wxt1g{font-size:14px;color:#888}.C6iTp0y_lBqqqyQbgNOX .EfT8OF2J_Nv48mortGcQ{font-size:16px;font-weight:bold;color:#333}.Z2oa_KWyKp_IM9WnE1kf .pBq5HCJkediPK2SUpcig{font-size:18px;margin:0 0 8px;color:#333}.Z2oa_KWyKp_IM9WnE1kf .ON6G2PmqPLHL3kJLRSuu{width:20px;height:20px;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});background-size:contain;background-repeat:no-repeat;border:none;cursor:pointer;transition:transform .2s,filter .2s}.Z2oa_KWyKp_IM9WnE1kf .ON6G2PmqPLHL3kJLRSuu:hover{transform:scale(1.1);filter:contrast(0)}`,"",{version:3,sources:["webpack://./src/shared/shop/cartproduct/cart_product.module.scss"],names:[],mappings:"AAAA,sBACI,qBAAA,CACA,iBAAA,CACA,YAAA,CACA,eAAA,CACA,mCAAA,CACA,8BAAA,CAEA,4BACI,oCAAA,CAGJ,sBACI,YAAA,CACA,6BAAA,CACA,kBAAA,CAEA,4CACI,cAAA,CACA,UAAA,CAGJ,4CACI,cAAA,CACA,gBAAA,CACA,UAAA,CAMJ,4CACI,cAAA,CACA,cAAA,CACA,UAAA,CAGJ,4CACI,UAAA,CACA,WAAA,CACA,wDAAA,CACA,uBAAA,CACA,2BAAA,CACA,WAAA,CACA,cAAA,CACA,mCAAA,CAEA,kDACI,oBAAA,CACA,kBAAA",sourcesContent:[".card {\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    padding: 16px;\n    max-width: 300px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    transition: box-shadow 0.3s ease;\n\n    &:hover {\n        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n    }\n\n    &-header {\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 12px;\n\n        .product-image {\n            font-size: 14px;\n            color: #888;\n        }\n\n        .price {\n            font-size: 16px;\n            font-weight: bold;\n            color: #333;\n        }\n\n    }\n\n    &-body {\n        .name {\n            font-size: 18px;\n            margin: 0 0 8px;\n            color: #333;\n        }\n\n        .bin {\n            width: 20px;\n            height: 20px;\n            background-image: url('./bin.svg');\n            background-size: contain;\n            background-repeat: no-repeat;\n            border: none;\n            cursor: pointer;\n            transition: transform 0.2s, filter 0.2s;\n\n            &:hover {\n                transform: scale(1.1);\n                filter: contrast(0);\n            }\n        }\n    }\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={card:"ipSVeBV3Dv3FIe70uMoU","card-header":"C6iTp0y_lBqqqyQbgNOX","product-image":"RgO2NppOQVYy1o6Wxt1g",price:"EfT8OF2J_Nv48mortGcQ","card-body":"Z2oa_KWyKp_IM9WnE1kf",name:"pBq5HCJkediPK2SUpcig",bin:"ON6G2PmqPLHL3kJLRSuu"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/getUrl.js":module=>{module.exports=function(url,options){return options||(options={}),url?(url=String(url.__esModule?url.default:url),/^['"].*['"]$/.test(url)&&(url=url.slice(1,-1)),options.hash&&(url+=options.hash),/["'() \t\n]|(%20)/.test(url)||options.needQuotes?'"'.concat(url.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):url):url}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./src/shared/shop/cartproduct/bin.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/bin.ec5592e3.svg"},"./src/stories/assets/cherry1.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/cherry1.cc8fc165.png"}}]);