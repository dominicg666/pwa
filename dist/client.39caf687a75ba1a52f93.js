(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"EE0/":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("17x9"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_classify__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("LiNO"),_mask_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("nKvX"),_mask_scss__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_mask_scss__WEBPACK_IMPORTED_MODULE_3__),enterModule
function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module)
var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
class Mask extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){const{classes:e,dismiss:t,isActive:r}=this.props,o=r?e.root_active:e.root
return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:o,onClick:t})}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}_defineProperty(Mask,"propTypes",{classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({root:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,root_active:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string}),dismiss:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,isActive:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool})
const _default=Object(_classify__WEBPACK_IMPORTED_MODULE_2__.a)(_mask_scss__WEBPACK_IMPORTED_MODULE_3___default.a)(Mask)
var reactHotLoader,leaveModule
__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Mask,"Mask","/home/dominic/projects/react_structure/src/components/Mask/mask.js"),reactHotLoader.register(_default,"default","/home/dominic/projects/react_structure/src/components/Mask/mask.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("3UD+")(module))},G9oo:function(e,t,r){(t=r("JPst")(!1)).push([e.i,".root{background-color:#000;cursor:pointer;display:block;height:100%;left:0;opacity:0;position:fixed;top:0;transition-duration:192ms;transition-property:opacity,visibility;transition-timing-function:linear;visibility:hidden;width:100%;z-index:2;-webkit-appearance:none}.root_active{composes:root;opacity:.5;transition-duration:224ms;visibility:visible}",""]),e.exports=t},Hglc:function(e,t,r){var o=r("LboF"),a=r("qEDw")
"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]])
var n={insert:"head",singleton:!1}
o(a,n)
e.exports=a.locals||{}},J3TZ:function(e,t,r){(t=r("JPst")(!1)).push([e.i,".root{background-color:rgb(var(--venia-background-color));color:rgb(var(--venia-text));position:relative;z-index:1}.root_masked{composes:root}.page{min-height:calc(100vh - 77px);padding-top:77px}.page_home{min-height:calc(220vh - 77px)}.page_masked{composes:page}@media(max-width: 1023px){.page{padding-top:60px}}",""]),e.exports=t},LiNO:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"b",(function(){return mergeClasses}))
var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_util_getDisplayName__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("x/dC"),enterModule
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{}
var r,o,a=_objectWithoutPropertiesLoose(e,t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var r,o,a={},n=Object.keys(e)
for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r])
return a}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module)
var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
const mergeClasses=(...e)=>Object.assign({},...e),classify=defaultClasses=>WrappedComponent=>{var _class,_temp
return _temp=_class=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){const e=this.props,{className:t,classes:r}=e,o=_objectWithoutProperties(e,["className","classes"]),a=mergeClasses(defaultClasses,t?{root:t}:null,r)
return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent,_extends({},o,{classes:a}))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}},_defineProperty(_class,"displayName",`Classify(${Object(_util_getDisplayName__WEBPACK_IMPORTED_MODULE_1__.a)(WrappedComponent)})`),_temp},_default=classify
var reactHotLoader,leaveModule
__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(mergeClasses,"mergeClasses","/home/dominic/projects/react_structure/src/classify.js"),reactHotLoader.register(classify,"classify","/home/dominic/projects/react_structure/src/classify.js"),reactHotLoader.register(_default,"default","/home/dominic/projects/react_structure/src/classify.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("3UD+")(module))},TtOu:function(e,t,r){var o=r("LboF"),a=r("J3TZ")
"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]])
var n={insert:"head",singleton:!1}
o(a,n)
e.exports=a.locals||{}},Uiqh:function(e,t,r){"use strict";(function(e){var o,a=r("q1tI"),n=r.n(a),c=r("ZV0F"),s=r("usxV");(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const l=[c.a,s.a],ContextProvider=({children:e})=>l.reduceRight((e,t)=>n.a.createElement(t,null,e),e),d=ContextProvider
var i,u
t.a=d,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(l,"contextProviders","/home/dominic/projects/react_structure/src/components/App/contextProvider.js"),i.register(ContextProvider,"ContextProvider","/home/dominic/projects/react_structure/src/components/App/contextProvider.js"),i.register(d,"default","/home/dominic/projects/react_structure/src/components/App/contextProvider.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r("3UD+")(e))},Uy3I:function(e,t,r){"use strict";(function(e){var o
r.d(t,"a",(function(){return a})),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const a="HTML_UPDATE_AVAILABLE"
var n,c;(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(n.register(a,"HTML_UPDATE_AVAILABLE","/home/dominic/projects/react_structure/src/constants/swMessageTypes.js"),n.register("PREFETCH_IMAGES","PREFETCH_IMAGES","/home/dominic/projects/react_structure/src/constants/swMessageTypes.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r("3UD+")(e))},XaPT:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return registerSW}))
var o,a=r("dGzc");(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const registerSW=()=>{a.a&&(navigator.serviceWorker.register("/sw.js").then(()=>{}).catch(()=>{window.console.warn("Failed to register SW.")}),navigator.serviceWorker.addEventListener("message",e=>{const{type:t,payload:r}=e.data
Object(a.b)(t,r,e)}))}
var n,c;(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(registerSW,"registerSW","/home/dominic/projects/react_structure/src/registerSW.js"),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r("3UD+")(e))},ZeTf:function(e,t,r){"use strict";(function(e){var o,a=r("q1tI"),n=r.n(a),c=r("17x9"),s=r("n8Bh"),l=r("LiNO"),d=r("TtOu"),i=r.n(d);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
var u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
const Main=e=>{const{children:t,isMasked:r}=e,o=Object(l.b)(i.a,e.classes),c=r?o.root_masked:o.root,d=r?o.page_masked:o.page
return Object(s.a)(r),n.a.createElement(a.Suspense,{fallback:null},n.a.createElement("main",{className:c},n.a.createElement("div",{className:d},t)))}
u(Main,"useScrollLock{}",()=>[s.a])
const _=Main
var p,f
t.a=_,Main.propTypes={classes:Object(c.shape)({page:c.string,page_masked:c.string,root:c.string,root_masked:c.string}),isMasked:c.bool},(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(Main,"Main","/home/dominic/projects/react_structure/src/components/Main/main.js"),p.register(_,"default","/home/dominic/projects/react_structure/src/components/Main/main.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r("3UD+")(e))},dGzc:function(e,t,r){"use strict";(function(e){var o
r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return registerMessageHandler})),r.d(t,"b",(function(){return handleMessageFromSW})),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const a=!0,n={},registerMessageHandler=(e,t)=>(n[e]||(n[e]=[]),n[e].push(t),()=>unRegisterMessageHandler(e,t)),unRegisterMessageHandler=(e,t)=>{n[e]&&(n[e]=n[e].filter(e=>t!==e))},handleMessageFromSW=(e,t,r)=>{const o=n[e]
o&&o.forEach(e=>{e(t,r)})},sendMessageToSW=(e,t)=>new Promise((r,o)=>{const a=new MessageChannel
a.port1.onmessage=e=>{e.data.error?o(e.data.error):r(e.data),a.port1.close()},navigator.serviceWorker&&navigator.serviceWorker.controller?navigator.serviceWorker.controller.postMessage({type:e,payload:t},[a.port2]):(o("SW Not Registered"),a.port1.close())})
var c,s;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(a,"VALID_SERVICE_WORKER_ENVIRONMENT","/home/dominic/projects/react_structure/src/util/swUtils.js"),c.register(n,"handlers","/home/dominic/projects/react_structure/src/util/swUtils.js"),c.register(registerMessageHandler,"registerMessageHandler","/home/dominic/projects/react_structure/src/util/swUtils.js"),c.register(unRegisterMessageHandler,"unRegisterMessageHandler","/home/dominic/projects/react_structure/src/util/swUtils.js"),c.register(handleMessageFromSW,"handleMessageFromSW","/home/dominic/projects/react_structure/src/util/swUtils.js"),c.register(sendMessageToSW,"sendMessageToSW","/home/dominic/projects/react_structure/src/util/swUtils.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r("3UD+")(e))},dUWT:function(e,t,r){"use strict";(function(e){var o,a=r("q1tI"),n=r.n(a),c=r("17x9"),s=r("/MKj"),l=r("55Ip");(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const ReactPwaAdapter=e=>{const{children:t,store:r}=e
return n.a.createElement(s.a,{store:r},n.a.createElement(l.a,null,t))}
ReactPwaAdapter.propTypes={store:Object(c.shape)({dispatch:c.func.isRequired,getState:c.func.isRequired,subscribe:c.func.isRequired}).isRequired}
const d=ReactPwaAdapter
var i,u
t.a=d,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(ReactPwaAdapter,"ReactPwaAdapter","/home/dominic/projects/react_structure/src/drivers/adapter.js"),i.register(d,"default","/home/dominic/projects/react_structure/src/drivers/adapter.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r("3UD+")(e))},gRUi:function(e,t,r){"use strict";(function(e){var o,a=r("q1tI"),n=r.n(a),c=r("17x9"),s=r("M9It"),l=r("ymRd"),d=r("1zJl"),i=r("ZeTf"),u=r("EE0/"),_=r("pKqc"),p=r("dGzc"),f=r("Uy3I");(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
const App=e=>{const{markErrorHandled:t,renderError:r,unhandledErrors:o}=e,c=Object(a.useCallback)(()=>{},[]),b=Object(a.useCallback)(()=>{},[]),m=Object(a.useCallback)(async e=>{},[]),E=Object(a.useCallback)((e,t,r,o)=>{ErrorIcon},[]),v=Object(s.a)({handleError:E,handleIsOffline:c,handleIsOnline:b,handleHTMLUpdate:m,markErrorHandled:t,renderError:r,unhandledErrors:o}),{hasOverlay:L,handleCloseDrawer:y,setHTMLUpdateAvailable:H}=v
return Object(a.useEffect)(()=>Object(p.c)(f.a,()=>{H(!0)}),[H]),r?n.a.createElement(l.a,null,n.a.createElement(d.b,null,"REACR PWA"),n.a.createElement(i.a,{isMasked:!0}),n.a.createElement(u.a,{isActive:!0})):n.a.createElement(l.a,null,n.a.createElement(d.b,null,"REACR PWA"),n.a.createElement(i.a,{isMasked:L},n.a.createElement(_.a,null)),n.a.createElement(u.a,{isActive:L,dismiss:y}))}
b(App,"useCallback{handleIsOffline}\nuseCallback{handleIsOnline}\nuseCallback{handleHTMLUpdate}\nuseCallback{handleError}\nuseApp{talonProps}\nuseEffect{}",()=>[s.a]),App.propTypes={markErrorHandled:c.func.isRequired,renderError:Object(c.shape)({stack:c.string}),unhandledErrors:c.array}
const m=App
var E,v
t.a=m,(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register("Sorry! An unexpected error occurred.","ERROR_MESSAGE","/home/dominic/projects/react_structure/src/components/App/app.js"),E.register(App,"App","/home/dominic/projects/react_structure/src/components/App/app.js"),E.register(m,"default","/home/dominic/projects/react_structure/src/components/App/app.js")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,r("3UD+")(e))},nKvX:function(e,t,r){var o=r("LboF"),a=r("G9oo")
"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]])
var n={insert:"head",singleton:!1}
o(a,n)
e.exports=a.locals||{}},pKqc:function(e,t,r){"use strict";(function(e){var o,a=r("q1tI"),n=r.n(a),c=r("Ty5D");(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const Routes=()=>n.a.createElement(a.Suspense,{fallback:null},n.a.createElement(c.b,null)),s=Routes
var l,d
t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(Routes,"Routes","/home/dominic/projects/react_structure/src/components/Routes/routes.js"),l.register(s,"default","/home/dominic/projects/react_structure/src/components/Routes/routes.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r("3UD+")(e))},qEDw:function(e,t,r){(t=r("JPst")(!1)).push([e.i,"",""]),e.exports=t},tjUo:function(e,t,r){"use strict"
r.r(t)
var o=r("q1tI"),a=r.n(o),n=r("i8i4"),c=r.n(n),s=r("dUWT"),l=r("wNa6"),d=r("sGYJ"),i=r("Uiqh"),u=r("tjdl"),_=r("XaPT")
r("Hglc"),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
c.a.render(a.a.createElement(s.a,{store:l.a},a.a.createElement(i.a,null,a.a.createElement(u.a,null))),document.getElementById("container")),Object(_.a)(),window.addEventListener("online",()=>{l.a.dispatch(d.a.setOnline())}),window.addEventListener("offline",()=>{l.a.dispatch(d.a.setOffline())})},tjdl:function(e,t,r){"use strict";(function(e){var o,a=r("q1tI"),n=r.n(a),c=r("6lVa"),s=r("gRUi"),l=r("zovX")
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
const AppContainer=()=>{const e=Object(l.a)(s.a),[t,r]=Object(c.b)()
return n.a.createElement(e,_extends({unhandledErrors:t},r))}
d(AppContainer,"useErrorBoundary{ErrorBoundary}\nuseErrorContext{[unhandledErrors, errorApi]}",()=>[l.a,c.b])
const i=AppContainer
var u,_
t.a=i,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(AppContainer,"AppContainer","/home/dominic/projects/react_structure/src/components/App/container.js"),u.register(i,"default","/home/dominic/projects/react_structure/src/components/App/container.js")),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)}).call(this,r("3UD+")(e))},wNa6:function(e,t,r){"use strict";(function(e){var o,a=r("ANjH"),n=r("hyZV"),c=r("l6GV")
function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const s=Object(a.c)(function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(r)
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){_defineProperty(e,t,r[t])}))}return e}({},n.a)),l=Object(a.e)(s,c.a)
var d,i
t.a=l,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(s,"rootReducer","/home/dominic/projects/react_structure/src/store.js"),d.register(l,"default","/home/dominic/projects/react_structure/src/store.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r("3UD+")(e))},"x/dC":function(e,t,r){"use strict";(function(e){var r;(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e)
"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature
const getDisplayName=e=>e.displayName||e.name||"Component",o=getDisplayName
var a,n
t.a=o,(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(a.register(getDisplayName,"getDisplayName","/home/dominic/projects/react_structure/src/util/getDisplayName.js"),a.register(o,"default","/home/dominic/projects/react_structure/src/util/getDisplayName.js")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,r("3UD+")(e))},ymRd:function(e,t,r){"use strict";(function(e){var o,a=r("q1tI"),n=r.n(a),c=r("1zJl");(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e)
var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
const removeExistingTitleTags=e=>{e.forEach(e=>{e&&e.parentNode.removeChild(e)})},ReactPwaHeadProvider=e=>(Object(a.useEffect)(()=>{const e=document.getElementsByTagName("title")
removeExistingTitleTags([...e])},[]),n.a.createElement(c.a,null,e.children))
s(ReactPwaHeadProvider,"useEffect{}")
const l=ReactPwaHeadProvider
var d,i
t.a=l,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(removeExistingTitleTags,"removeExistingTitleTags","/home/dominic/projects/react_structure/src/components/Head/headProvider.js"),d.register(ReactPwaHeadProvider,"ReactPwaHeadProvider","/home/dominic/projects/react_structure/src/components/Head/headProvider.js"),d.register(l,"default","/home/dominic/projects/react_structure/src/components/Head/headProvider.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r("3UD+")(e))},zovX:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return useErrorBoundary}))
var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),enterModule
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module)
var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e}
const useErrorBoundary=WrappedComponent=>Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(e){super(e),this.state={renderError:null}}static getDerivedStateFromError(e){return{renderError:e}}render(){const{props:e,state:t}=this,{renderError:r}=t
return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent,_extends({},e,{renderError:r}))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}},[])
var reactHotLoader,leaveModule
__signature__(useErrorBoundary,"useMemo{}"),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(useErrorBoundary,"useErrorBoundary","/home/dominic/projects/react_structure/src/components/App/useErrorBoundary.js"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("3UD+")(module))}},[["tjUo",1,2]]])

//# sourceMappingURL=client.39caf687a75ba1a52f93.js.map