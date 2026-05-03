var Jm=Object.defineProperty;var Zm=(t,e,i)=>e in t?Jm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Ds=(t,e,i)=>Zm(t,typeof e!="symbol"?e+"":e,i);function eg(t,e){for(var i=0;i<e.length;i++){const n=e[i];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in t)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();function tg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pd={exports:{}},ll={},Ld={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),ig=Symbol.for("react.portal"),ng=Symbol.for("react.fragment"),sg=Symbol.for("react.strict_mode"),rg=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),ag=Symbol.for("react.context"),og=Symbol.for("react.forward_ref"),cg=Symbol.for("react.suspense"),ug=Symbol.for("react.memo"),hg=Symbol.for("react.lazy"),eu=Symbol.iterator;function dg(t){return t===null||typeof t!="object"?null:(t=eu&&t[eu]||t["@@iterator"],typeof t=="function"?t:null)}var Rd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$d=Object.assign,Dd={};function yn(t,e,i){this.props=t,this.context=e,this.refs=Dd,this.updater=i||Rd}yn.prototype.isReactComponent={};yn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bd(){}Bd.prototype=yn.prototype;function Fo(t,e,i){this.props=t,this.context=e,this.refs=Dd,this.updater=i||Rd}var Vo=Fo.prototype=new Bd;Vo.constructor=Fo;$d(Vo,yn.prototype);Vo.isPureReactComponent=!0;var tu=Array.isArray,Ad=Object.prototype.hasOwnProperty,Uo={current:null},Id={key:!0,ref:!0,__self:!0,__source:!0};function Od(t,e,i){var n,s={},r=null,l=null;if(e!=null)for(n in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(r=""+e.key),e)Ad.call(e,n)&&!Id.hasOwnProperty(n)&&(s[n]=e[n]);var c=arguments.length-2;if(c===1)s.children=i;else if(1<c){for(var o=Array(c),u=0;u<c;u++)o[u]=arguments[u+2];s.children=o}if(t&&t.defaultProps)for(n in c=t.defaultProps,c)s[n]===void 0&&(s[n]=c[n]);return{$$typeof:Cs,type:t,key:r,ref:l,props:s,_owner:Uo.current}}function fg(t,e){return{$$typeof:Cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wo(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cs}function pg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return e[i]})}var iu=/\/+/g;function Ll(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pg(""+t.key):e.toString(36)}function mr(t,e,i,n,s){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Cs:case ig:l=!0}}if(l)return l=t,s=s(l),t=n===""?"."+Ll(l,0):n,tu(s)?(i="",t!=null&&(i=t.replace(iu,"$&/")+"/"),mr(s,e,i,"",function(u){return u})):s!=null&&(Wo(s)&&(s=fg(s,i+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(iu,"$&/")+"/")+t)),e.push(s)),1;if(l=0,n=n===""?".":n+":",tu(t))for(var c=0;c<t.length;c++){r=t[c];var o=n+Ll(r,c);l+=mr(r,e,i,o,s)}else if(o=dg(t),typeof o=="function")for(t=o.call(t),c=0;!(r=t.next()).done;)r=r.value,o=n+Ll(r,c++),l+=mr(r,e,i,o,s);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Bs(t,e,i){if(t==null)return t;var n=[],s=0;return mr(t,n,"","",function(r){return e.call(i,r,s++)}),n}function mg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Be={current:null},gr={transition:null},gg={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:gr,ReactCurrentOwner:Uo};function Fd(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Bs,forEach:function(t,e,i){Bs(t,function(){e.apply(this,arguments)},i)},count:function(t){var e=0;return Bs(t,function(){e++}),e},toArray:function(t){return Bs(t,function(e){return e})||[]},only:function(t){if(!Wo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=yn;q.Fragment=ng;q.Profiler=rg;q.PureComponent=Fo;q.StrictMode=sg;q.Suspense=cg;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gg;q.act=Fd;q.cloneElement=function(t,e,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=$d({},t.props),s=t.key,r=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,l=Uo.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(o in e)Ad.call(e,o)&&!Id.hasOwnProperty(o)&&(n[o]=e[o]===void 0&&c!==void 0?c[o]:e[o])}var o=arguments.length-2;if(o===1)n.children=i;else if(1<o){c=Array(o);for(var u=0;u<o;u++)c[u]=arguments[u+2];n.children=c}return{$$typeof:Cs,type:t.type,key:s,ref:r,props:n,_owner:l}};q.createContext=function(t){return t={$$typeof:ag,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lg,_context:t},t.Consumer=t};q.createElement=Od;q.createFactory=function(t){var e=Od.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:og,render:t}};q.isValidElement=Wo;q.lazy=function(t){return{$$typeof:hg,_payload:{_status:-1,_result:t},_init:mg}};q.memo=function(t,e){return{$$typeof:ug,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=gr.transition;gr.transition={};try{t()}finally{gr.transition=e}};q.unstable_act=Fd;q.useCallback=function(t,e){return Be.current.useCallback(t,e)};q.useContext=function(t){return Be.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Be.current.useDeferredValue(t)};q.useEffect=function(t,e){return Be.current.useEffect(t,e)};q.useId=function(){return Be.current.useId()};q.useImperativeHandle=function(t,e,i){return Be.current.useImperativeHandle(t,e,i)};q.useInsertionEffect=function(t,e){return Be.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Be.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Be.current.useMemo(t,e)};q.useReducer=function(t,e,i){return Be.current.useReducer(t,e,i)};q.useRef=function(t){return Be.current.useRef(t)};q.useState=function(t){return Be.current.useState(t)};q.useSyncExternalStore=function(t,e,i){return Be.current.useSyncExternalStore(t,e,i)};q.useTransition=function(){return Be.current.useTransition()};q.version="18.3.1";Ld.exports=q;var k=Ld.exports;const gi=tg(k),vg=eg({__proto__:null,default:gi},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg=k,yg=Symbol.for("react.element"),wg=Symbol.for("react.fragment"),bg=Object.prototype.hasOwnProperty,kg=xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jg={key:!0,ref:!0,__self:!0,__source:!0};function Vd(t,e,i){var n,s={},r=null,l=null;i!==void 0&&(r=""+i),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)bg.call(e,n)&&!jg.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:yg,type:t,key:r,ref:l,props:s,_owner:kg.current}}ll.Fragment=wg;ll.jsx=Vd;ll.jsxs=Vd;Pd.exports=ll;var a=Pd.exports,Ea={},Ud={exports:{}},Ye={},Wd={exports:{}},Hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,O){var I=L.length;L.push(O);e:for(;0<I;){var C=I-1>>>1,S=L[C];if(0<s(S,O))L[C]=O,L[I]=S,I=C;else break e}}function i(L){return L.length===0?null:L[0]}function n(L){if(L.length===0)return null;var O=L[0],I=L.pop();if(I!==O){L[0]=I;e:for(var C=0,S=L.length,P=S>>>1;C<P;){var A=2*(C+1)-1,N=L[A],U=A+1,H=L[U];if(0>s(N,I))U<S&&0>s(H,N)?(L[C]=H,L[U]=I,C=U):(L[C]=N,L[A]=I,C=A);else if(U<S&&0>s(H,I))L[C]=H,L[U]=I,C=U;else break e}}return O}function s(L,O){var I=L.sortIndex-O.sortIndex;return I!==0?I:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var l=Date,c=l.now();t.unstable_now=function(){return l.now()-c}}var o=[],u=[],h=1,d=null,f=3,m=!1,g=!1,p=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var O=i(u);O!==null;){if(O.callback===null)n(u);else if(O.startTime<=L)n(u),O.sortIndex=O.expirationTime,e(o,O);else break;O=i(u)}}function b(L){if(p=!1,y(L),!g)if(i(o)!==null)g=!0,ce(j);else{var O=i(u);O!==null&&Le(b,O.startTime-L)}}function j(L,O){g=!1,p&&(p=!1,v(T),T=-1),m=!0;var I=f;try{for(y(O),d=i(o);d!==null&&(!(d.expirationTime>O)||L&&!Z());){var C=d.callback;if(typeof C=="function"){d.callback=null,f=d.priorityLevel;var S=C(d.expirationTime<=O);O=t.unstable_now(),typeof S=="function"?d.callback=S:d===i(o)&&n(o),y(O)}else n(o);d=i(o)}if(d!==null)var P=!0;else{var A=i(u);A!==null&&Le(b,A.startTime-O),P=!1}return P}finally{d=null,f=I,m=!1}}var M=!1,_=null,T=-1,D=5,B=-1;function Z(){return!(t.unstable_now()-B<D)}function ze(){if(_!==null){var L=t.unstable_now();B=L;var O=!0;try{O=_(!0,L)}finally{O?ke():(M=!1,_=null)}}else M=!1}var ke;if(typeof x=="function")ke=function(){x(ze)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,V=ye.port2;ye.port1.onmessage=ze,ke=function(){V.postMessage(null)}}else ke=function(){w(ze,0)};function ce(L){_=L,M||(M=!0,ke())}function Le(L,O){T=w(function(){L(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,ce(j))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return i(o)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var I=f;f=O;try{return L()}finally{f=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var I=f;f=L;try{return O()}finally{f=I}},t.unstable_scheduleCallback=function(L,O,I){var C=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?C+I:C):I=C,L){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=I+S,L={id:h++,callback:O,priorityLevel:L,startTime:I,expirationTime:S,sortIndex:-1},I>C?(L.sortIndex=I,e(u,L),i(o)===null&&L===i(u)&&(p?(v(T),T=-1):p=!0,Le(b,I-C))):(L.sortIndex=S,e(o,L),g||m||(g=!0,ce(j))),L},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(L){var O=f;return function(){var I=f;f=O;try{return L.apply(this,arguments)}finally{f=I}}}})(Hd);Wd.exports=Hd;var Sg=Wd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng=k,Qe=Sg;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qd=new Set,es={};function Ri(t,e){on(t,e),on(t+"Capture",e)}function on(t,e){for(es[t]=e,t=0;t<e.length;t++)qd.add(e[t])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),za=Object.prototype.hasOwnProperty,Cg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nu={},su={};function Eg(t){return za.call(su,t)?!0:za.call(nu,t)?!1:Cg.test(t)?su[t]=!0:(nu[t]=!0,!1)}function zg(t,e,i,n){if(i!==null&&i.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mg(t,e,i,n){if(e===null||typeof e>"u"||zg(t,e,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,i,n,s,r,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=i,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=l}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ho=/[\-:]([a-z])/g;function qo(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ho,qo);Ee[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ho,qo);Ee[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ho,qo);Ee[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ko(t,e,i,n){var s=Ee.hasOwnProperty(e)?Ee[e]:null;(s!==null?s.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mg(e,i,s,n)&&(i=null),n||s===null?Eg(e)&&(i===null?t.removeAttribute(e):t.setAttribute(e,""+i)):s.mustUseProperty?t[s.propertyName]=i===null?s.type===3?!1:"":i:(e=s.attributeName,n=s.attributeNamespace,i===null?t.removeAttribute(e):(s=s.type,i=s===3||s===4&&i===!0?"":""+i,n?t.setAttributeNS(n,e,i):t.setAttribute(e,i))))}var $t=Ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,As=Symbol.for("react.element"),Ii=Symbol.for("react.portal"),Oi=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Xd=Symbol.for("react.context"),Qo=Symbol.for("react.forward_ref"),_a=Symbol.for("react.suspense"),Ta=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Qd=Symbol.for("react.offscreen"),ru=Symbol.iterator;function En(t){return t===null||typeof t!="object"?null:(t=ru&&t[ru]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,Rl;function Dn(t){if(Rl===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Rl=e&&e[1]||""}return`
`+Rl+t}var $l=!1;function Dl(t,e){if(!t||$l)return"";$l=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),r=n.stack.split(`
`),l=s.length-1,c=r.length-1;1<=l&&0<=c&&s[l]!==r[c];)c--;for(;1<=l&&0<=c;l--,c--)if(s[l]!==r[c]){if(l!==1||c!==1)do if(l--,c--,0>c||s[l]!==r[c]){var o=`
`+s[l].replace(" at new "," at ");return t.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",t.displayName)),o}while(1<=l&&0<=c);break}}}finally{$l=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?Dn(t):""}function _g(t){switch(t.tag){case 5:return Dn(t.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return t=Dl(t.type,!1),t;case 11:return t=Dl(t.type.render,!1),t;case 1:return t=Dl(t.type,!0),t;default:return""}}function Pa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Oi:return"Fragment";case Ii:return"Portal";case Ma:return"Profiler";case Xo:return"StrictMode";case _a:return"Suspense";case Ta:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xd:return(t.displayName||"Context")+".Consumer";case Kd:return(t._context.displayName||"Context")+".Provider";case Qo:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yo:return e=t.displayName||null,e!==null?e:Pa(t.type)||"Memo";case Ot:e=t._payload,t=t._init;try{return Pa(t(e))}catch{}}return null}function Tg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pa(e);case 8:return e===Xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ni(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Pg(t){var e=Yd(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){n=""+l,r.call(this,l)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Is(t){t._valueTracker||(t._valueTracker=Pg(t))}function Gd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),n="";return t&&(n=Yd(t)?t.checked?"true":"false":t.value),t=n,t!==i?(e.setValue(t),!0):!1}function Tr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function La(t,e){var i=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function lu(t,e){var i=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;i=ni(e.value!=null?e.value:i),t._wrapperState={initialChecked:n,initialValue:i,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jd(t,e){e=e.checked,e!=null&&Ko(t,"checked",e,!1)}function Ra(t,e){Jd(t,e);var i=ni(e.value),n=e.type;if(i!=null)n==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$a(t,e.type,i):e.hasOwnProperty("defaultValue")&&$a(t,e.type,ni(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function au(t,e,i){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,i||e===t.value||(t.value=e),t.defaultValue=e}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function $a(t,e,i){(e!=="number"||Tr(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var Bn=Array.isArray;function Zi(t,e,i,n){if(t=t.options,e){e={};for(var s=0;s<i.length;s++)e["$"+i[s]]=!0;for(i=0;i<t.length;i++)s=e.hasOwnProperty("$"+t[i].value),t[i].selected!==s&&(t[i].selected=s),s&&n&&(t[i].defaultSelected=!0)}else{for(i=""+ni(i),e=null,s=0;s<t.length;s++){if(t[s].value===i){t[s].selected=!0,n&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Da(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ou(t,e){var i=e.value;if(i==null){if(i=e.children,e=e.defaultValue,i!=null){if(e!=null)throw Error(z(92));if(Bn(i)){if(1<i.length)throw Error(z(93));i=i[0]}e=i}e==null&&(e=""),i=e}t._wrapperState={initialValue:ni(i)}}function Zd(t,e){var i=ni(e.value),n=ni(e.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),e.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),n!=null&&(t.defaultValue=""+n)}function cu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ef(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ba(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ef(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Os,tf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,i,n,s){MSApp.execUnsafeLocalFunction(function(){return t(e,i,n,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Os=Os||document.createElement("div"),Os.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Os.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ts(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lg=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(t){Lg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fn[e]=Fn[t]})});function nf(t,e,i){return e==null||typeof e=="boolean"||e===""?"":i||typeof e!="number"||e===0||Fn.hasOwnProperty(t)&&Fn[t]?(""+e).trim():e+"px"}function sf(t,e){t=t.style;for(var i in e)if(e.hasOwnProperty(i)){var n=i.indexOf("--")===0,s=nf(i,e[i],n);i==="float"&&(i="cssFloat"),n?t.setProperty(i,s):t[i]=s}}var Rg=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Aa(t,e){if(e){if(Rg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Ia(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oa=null;function Go(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fa=null,en=null,tn=null;function uu(t){if(t=Ms(t)){if(typeof Fa!="function")throw Error(z(280));var e=t.stateNode;e&&(e=hl(e),Fa(t.stateNode,t.type,e))}}function rf(t){en?tn?tn.push(t):tn=[t]:en=t}function lf(){if(en){var t=en,e=tn;if(tn=en=null,uu(t),e)for(t=0;t<e.length;t++)uu(e[t])}}function af(t,e){return t(e)}function of(){}var Bl=!1;function cf(t,e,i){if(Bl)return t(e,i);Bl=!0;try{return af(t,e,i)}finally{Bl=!1,(en!==null||tn!==null)&&(of(),lf())}}function is(t,e){var i=t.stateNode;if(i===null)return null;var n=hl(i);if(n===null)return null;i=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(z(231,e,typeof i));return i}var Va=!1;if(Tt)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){Va=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{Va=!1}function $g(t,e,i,n,s,r,l,c,o){var u=Array.prototype.slice.call(arguments,3);try{e.apply(i,u)}catch(h){this.onError(h)}}var Vn=!1,Pr=null,Lr=!1,Ua=null,Dg={onError:function(t){Vn=!0,Pr=t}};function Bg(t,e,i,n,s,r,l,c,o){Vn=!1,Pr=null,$g.apply(Dg,arguments)}function Ag(t,e,i,n,s,r,l,c,o){if(Bg.apply(this,arguments),Vn){if(Vn){var u=Pr;Vn=!1,Pr=null}else throw Error(z(198));Lr||(Lr=!0,Ua=u)}}function $i(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function uf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hu(t){if($i(t)!==t)throw Error(z(188))}function Ig(t){var e=t.alternate;if(!e){if(e=$i(t),e===null)throw Error(z(188));return e!==t?null:t}for(var i=t,n=e;;){var s=i.return;if(s===null)break;var r=s.alternate;if(r===null){if(n=s.return,n!==null){i=n;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===i)return hu(s),t;if(r===n)return hu(s),e;r=r.sibling}throw Error(z(188))}if(i.return!==n.return)i=s,n=r;else{for(var l=!1,c=s.child;c;){if(c===i){l=!0,i=s,n=r;break}if(c===n){l=!0,n=s,i=r;break}c=c.sibling}if(!l){for(c=r.child;c;){if(c===i){l=!0,i=r,n=s;break}if(c===n){l=!0,n=r,i=s;break}c=c.sibling}if(!l)throw Error(z(189))}}if(i.alternate!==n)throw Error(z(190))}if(i.tag!==3)throw Error(z(188));return i.stateNode.current===i?t:e}function hf(t){return t=Ig(t),t!==null?df(t):null}function df(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=df(t);if(e!==null)return e;t=t.sibling}return null}var ff=Qe.unstable_scheduleCallback,du=Qe.unstable_cancelCallback,Og=Qe.unstable_shouldYield,Fg=Qe.unstable_requestPaint,fe=Qe.unstable_now,Vg=Qe.unstable_getCurrentPriorityLevel,Jo=Qe.unstable_ImmediatePriority,pf=Qe.unstable_UserBlockingPriority,Rr=Qe.unstable_NormalPriority,Ug=Qe.unstable_LowPriority,mf=Qe.unstable_IdlePriority,al=null,bt=null;function Wg(t){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(al,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Kg,Hg=Math.log,qg=Math.LN2;function Kg(t){return t>>>=0,t===0?32:31-(Hg(t)/qg|0)|0}var Fs=64,Vs=4194304;function An(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $r(t,e){var i=t.pendingLanes;if(i===0)return 0;var n=0,s=t.suspendedLanes,r=t.pingedLanes,l=i&268435455;if(l!==0){var c=l&~s;c!==0?n=An(c):(r&=l,r!==0&&(n=An(r)))}else l=i&~s,l!==0?n=An(l):r!==0&&(n=An(r));if(n===0)return 0;if(e!==0&&e!==n&&!(e&s)&&(s=n&-n,r=e&-e,s>=r||s===16&&(r&4194240)!==0))return e;if(n&4&&(n|=i&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)i=31-ht(e),s=1<<i,n|=t[i],e&=~s;return n}function Xg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qg(t,e){for(var i=t.suspendedLanes,n=t.pingedLanes,s=t.expirationTimes,r=t.pendingLanes;0<r;){var l=31-ht(r),c=1<<l,o=s[l];o===-1?(!(c&i)||c&n)&&(s[l]=Xg(c,e)):o<=e&&(t.expiredLanes|=c),r&=~c}}function Wa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gf(){var t=Fs;return Fs<<=1,!(Fs&4194240)&&(Fs=64),t}function Al(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function Es(t,e,i){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ht(e),t[e]=i}function Yg(t,e){var i=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<i;){var s=31-ht(i),r=1<<s;e[s]=0,n[s]=-1,t[s]=-1,i&=~r}}function Zo(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var n=31-ht(i),s=1<<n;s&e|t[n]&e&&(t[n]|=e),i&=~s}}var Q=0;function vf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xf,ec,yf,wf,bf,Ha=!1,Us=[],Kt=null,Xt=null,Qt=null,ns=new Map,ss=new Map,Vt=[],Gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(t,e){switch(t){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":ns.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(e.pointerId)}}function Mn(t,e,i,n,s,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:i,eventSystemFlags:n,nativeEvent:r,targetContainers:[s]},e!==null&&(e=Ms(e),e!==null&&ec(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Jg(t,e,i,n,s){switch(e){case"focusin":return Kt=Mn(Kt,t,e,i,n,s),!0;case"dragenter":return Xt=Mn(Xt,t,e,i,n,s),!0;case"mouseover":return Qt=Mn(Qt,t,e,i,n,s),!0;case"pointerover":var r=s.pointerId;return ns.set(r,Mn(ns.get(r)||null,t,e,i,n,s)),!0;case"gotpointercapture":return r=s.pointerId,ss.set(r,Mn(ss.get(r)||null,t,e,i,n,s)),!0}return!1}function kf(t){var e=vi(t.target);if(e!==null){var i=$i(e);if(i!==null){if(e=i.tag,e===13){if(e=uf(i),e!==null){t.blockedOn=e,bf(t.priority,function(){yf(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=qa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var n=new i.constructor(i.type,i);Oa=n,i.target.dispatchEvent(n),Oa=null}else return e=Ms(i),e!==null&&ec(e),t.blockedOn=i,!1;e.shift()}return!0}function pu(t,e,i){vr(t)&&i.delete(e)}function Zg(){Ha=!1,Kt!==null&&vr(Kt)&&(Kt=null),Xt!==null&&vr(Xt)&&(Xt=null),Qt!==null&&vr(Qt)&&(Qt=null),ns.forEach(pu),ss.forEach(pu)}function _n(t,e){t.blockedOn===e&&(t.blockedOn=null,Ha||(Ha=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Zg)))}function rs(t){function e(s){return _n(s,t)}if(0<Us.length){_n(Us[0],t);for(var i=1;i<Us.length;i++){var n=Us[i];n.blockedOn===t&&(n.blockedOn=null)}}for(Kt!==null&&_n(Kt,t),Xt!==null&&_n(Xt,t),Qt!==null&&_n(Qt,t),ns.forEach(e),ss.forEach(e),i=0;i<Vt.length;i++)n=Vt[i],n.blockedOn===t&&(n.blockedOn=null);for(;0<Vt.length&&(i=Vt[0],i.blockedOn===null);)kf(i),i.blockedOn===null&&Vt.shift()}var nn=$t.ReactCurrentBatchConfig,Dr=!0;function e0(t,e,i,n){var s=Q,r=nn.transition;nn.transition=null;try{Q=1,tc(t,e,i,n)}finally{Q=s,nn.transition=r}}function t0(t,e,i,n){var s=Q,r=nn.transition;nn.transition=null;try{Q=4,tc(t,e,i,n)}finally{Q=s,nn.transition=r}}function tc(t,e,i,n){if(Dr){var s=qa(t,e,i,n);if(s===null)Xl(t,e,n,Br,i),fu(t,n);else if(Jg(s,t,e,i,n))n.stopPropagation();else if(fu(t,n),e&4&&-1<Gg.indexOf(t)){for(;s!==null;){var r=Ms(s);if(r!==null&&xf(r),r=qa(t,e,i,n),r===null&&Xl(t,e,n,Br,i),r===s)break;s=r}s!==null&&n.stopPropagation()}else Xl(t,e,n,null,i)}}var Br=null;function qa(t,e,i,n){if(Br=null,t=Go(n),t=vi(t),t!==null)if(e=$i(t),e===null)t=null;else if(i=e.tag,i===13){if(t=uf(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Br=t,null}function jf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vg()){case Jo:return 1;case pf:return 4;case Rr:case Ug:return 16;case mf:return 536870912;default:return 16}default:return 16}}var Wt=null,ic=null,xr=null;function Sf(){if(xr)return xr;var t,e=ic,i=e.length,n,s="value"in Wt?Wt.value:Wt.textContent,r=s.length;for(t=0;t<i&&e[t]===s[t];t++);var l=i-t;for(n=1;n<=l&&e[i-n]===s[r-n];n++);return xr=s.slice(t,1<n?1-n:void 0)}function yr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ws(){return!0}function mu(){return!1}function Ge(t){function e(i,n,s,r,l){this._reactName=i,this._targetInst=s,this.type=n,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(i=t[c],this[c]=i?i(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ws:mu,this.isPropagationStopped=mu,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),e}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=Ge(wn),zs=oe({},wn,{view:0,detail:0}),i0=Ge(zs),Il,Ol,Tn,ol=oe({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Tn&&(Tn&&t.type==="mousemove"?(Il=t.screenX-Tn.screenX,Ol=t.screenY-Tn.screenY):Ol=Il=0,Tn=t),Il)},movementY:function(t){return"movementY"in t?t.movementY:Ol}}),gu=Ge(ol),n0=oe({},ol,{dataTransfer:0}),s0=Ge(n0),r0=oe({},zs,{relatedTarget:0}),Fl=Ge(r0),l0=oe({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),a0=Ge(l0),o0=oe({},wn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c0=Ge(o0),u0=oe({},wn,{data:0}),vu=Ge(u0),h0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=f0[t])?!!e[t]:!1}function sc(){return p0}var m0=oe({},zs,{key:function(t){if(t.key){var e=h0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?d0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(t){return t.type==="keypress"?yr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g0=Ge(m0),v0=oe({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=Ge(v0),x0=oe({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),y0=Ge(x0),w0=oe({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),b0=Ge(w0),k0=oe({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=Ge(k0),S0=[9,13,27,32],rc=Tt&&"CompositionEvent"in window,Un=null;Tt&&"documentMode"in document&&(Un=document.documentMode);var N0=Tt&&"TextEvent"in window&&!Un,Nf=Tt&&(!rc||Un&&8<Un&&11>=Un),yu=" ",wu=!1;function Cf(t,e){switch(t){case"keyup":return S0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fi=!1;function C0(t,e){switch(t){case"compositionend":return Ef(e);case"keypress":return e.which!==32?null:(wu=!0,yu);case"textInput":return t=e.data,t===yu&&wu?null:t;default:return null}}function E0(t,e){if(Fi)return t==="compositionend"||!rc&&Cf(t,e)?(t=Sf(),xr=ic=Wt=null,Fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nf&&e.locale!=="ko"?null:e.data;default:return null}}var z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!z0[t.type]:e==="textarea"}function zf(t,e,i,n){rf(n),e=Ar(e,"onChange"),0<e.length&&(i=new nc("onChange","change",null,i,n),t.push({event:i,listeners:e}))}var Wn=null,ls=null;function M0(t){If(t,0)}function cl(t){var e=Wi(t);if(Gd(e))return t}function _0(t,e){if(t==="change")return e}var Mf=!1;if(Tt){var Vl;if(Tt){var Ul="oninput"in document;if(!Ul){var ku=document.createElement("div");ku.setAttribute("oninput","return;"),Ul=typeof ku.oninput=="function"}Vl=Ul}else Vl=!1;Mf=Vl&&(!document.documentMode||9<document.documentMode)}function ju(){Wn&&(Wn.detachEvent("onpropertychange",_f),ls=Wn=null)}function _f(t){if(t.propertyName==="value"&&cl(ls)){var e=[];zf(e,ls,t,Go(t)),cf(M0,e)}}function T0(t,e,i){t==="focusin"?(ju(),Wn=e,ls=i,Wn.attachEvent("onpropertychange",_f)):t==="focusout"&&ju()}function P0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(ls)}function L0(t,e){if(t==="click")return cl(e)}function R0(t,e){if(t==="input"||t==="change")return cl(e)}function $0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ft=typeof Object.is=="function"?Object.is:$0;function as(t,e){if(ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var s=i[n];if(!za.call(e,s)||!ft(t[s],e[s]))return!1}return!0}function Su(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nu(t,e){var i=Su(t);t=0;for(var n;i;){if(i.nodeType===3){if(n=t+i.textContent.length,t<=e&&n>=e)return{node:i,offset:e-t};t=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Su(i)}}function Tf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pf(){for(var t=window,e=Tr();e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Tr(t.document)}return e}function lc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function D0(t){var e=Pf(),i=t.focusedElem,n=t.selectionRange;if(e!==i&&i&&i.ownerDocument&&Tf(i.ownerDocument.documentElement,i)){if(n!==null&&lc(i)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(t,i.value.length);else if(t=(e=i.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=i.textContent.length,r=Math.min(n.start,s);n=n.end===void 0?r:Math.min(n.end,s),!t.extend&&r>n&&(s=n,n=r,r=s),s=Nu(i,r);var l=Nu(i,n);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),r>n?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=i;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)t=e[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var B0=Tt&&"documentMode"in document&&11>=document.documentMode,Vi=null,Ka=null,Hn=null,Xa=!1;function Cu(t,e,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Xa||Vi==null||Vi!==Tr(n)||(n=Vi,"selectionStart"in n&&lc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Hn&&as(Hn,n)||(Hn=n,n=Ar(Ka,"onSelect"),0<n.length&&(e=new nc("onSelect","select",null,e,i),t.push({event:e,listeners:n}),e.target=Vi)))}function Hs(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var Ui={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionend:Hs("Transition","TransitionEnd")},Wl={},Lf={};Tt&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function ul(t){if(Wl[t])return Wl[t];if(!Ui[t])return t;var e=Ui[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in Lf)return Wl[t]=e[i];return t}var Rf=ul("animationend"),$f=ul("animationiteration"),Df=ul("animationstart"),Bf=ul("transitionend"),Af=new Map,Eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(t,e){Af.set(t,e),Ri(e,[t])}for(var Hl=0;Hl<Eu.length;Hl++){var ql=Eu[Hl],A0=ql.toLowerCase(),I0=ql[0].toUpperCase()+ql.slice(1);li(A0,"on"+I0)}li(Rf,"onAnimationEnd");li($f,"onAnimationIteration");li(Df,"onAnimationStart");li("dblclick","onDoubleClick");li("focusin","onFocus");li("focusout","onBlur");li(Bf,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function zu(t,e,i){var n=t.type||"unknown-event";t.currentTarget=i,Ag(n,e,void 0,t),t.currentTarget=null}function If(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var n=t[i],s=n.event;n=n.listeners;e:{var r=void 0;if(e)for(var l=n.length-1;0<=l;l--){var c=n[l],o=c.instance,u=c.currentTarget;if(c=c.listener,o!==r&&s.isPropagationStopped())break e;zu(s,c,u),r=o}else for(l=0;l<n.length;l++){if(c=n[l],o=c.instance,u=c.currentTarget,c=c.listener,o!==r&&s.isPropagationStopped())break e;zu(s,c,u),r=o}}}if(Lr)throw t=Ua,Lr=!1,Ua=null,t}function ee(t,e){var i=e[Za];i===void 0&&(i=e[Za]=new Set);var n=t+"__bubble";i.has(n)||(Of(e,t,2,!1),i.add(n))}function Kl(t,e,i){var n=0;e&&(n|=4),Of(i,t,n,e)}var qs="_reactListening"+Math.random().toString(36).slice(2);function os(t){if(!t[qs]){t[qs]=!0,qd.forEach(function(i){i!=="selectionchange"&&(O0.has(i)||Kl(i,!1,t),Kl(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qs]||(e[qs]=!0,Kl("selectionchange",!1,e))}}function Of(t,e,i,n){switch(jf(e)){case 1:var s=e0;break;case 4:s=t0;break;default:s=tc}i=s.bind(null,e,i,t),s=void 0,!Va||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),n?s!==void 0?t.addEventListener(e,i,{capture:!0,passive:s}):t.addEventListener(e,i,!0):s!==void 0?t.addEventListener(e,i,{passive:s}):t.addEventListener(e,i,!1)}function Xl(t,e,i,n,s){var r=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var c=n.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(l===4)for(l=n.return;l!==null;){var o=l.tag;if((o===3||o===4)&&(o=l.stateNode.containerInfo,o===s||o.nodeType===8&&o.parentNode===s))return;l=l.return}for(;c!==null;){if(l=vi(c),l===null)return;if(o=l.tag,o===5||o===6){n=r=l;continue e}c=c.parentNode}}n=n.return}cf(function(){var u=r,h=Go(i),d=[];e:{var f=Af.get(t);if(f!==void 0){var m=nc,g=t;switch(t){case"keypress":if(yr(i)===0)break e;case"keydown":case"keyup":m=g0;break;case"focusin":g="focus",m=Fl;break;case"focusout":g="blur",m=Fl;break;case"beforeblur":case"afterblur":m=Fl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=s0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=y0;break;case Rf:case $f:case Df:m=a0;break;case Bf:m=b0;break;case"scroll":m=i0;break;case"wheel":m=j0;break;case"copy":case"cut":case"paste":m=c0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=xu}var p=(e&4)!==0,w=!p&&t==="scroll",v=p?f!==null?f+"Capture":null:f;p=[];for(var x=u,y;x!==null;){y=x;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,v!==null&&(b=is(x,v),b!=null&&p.push(cs(x,b,y)))),w)break;x=x.return}0<p.length&&(f=new m(f,g,null,i,h),d.push({event:f,listeners:p}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&i!==Oa&&(g=i.relatedTarget||i.fromElement)&&(vi(g)||g[Pt]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=i.relatedTarget||i.toElement,m=u,g=g?vi(g):null,g!==null&&(w=$i(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(p=gu,b="onMouseLeave",v="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(p=xu,b="onPointerLeave",v="onPointerEnter",x="pointer"),w=m==null?f:Wi(m),y=g==null?f:Wi(g),f=new p(b,x+"leave",m,i,h),f.target=w,f.relatedTarget=y,b=null,vi(h)===u&&(p=new p(v,x+"enter",g,i,h),p.target=y,p.relatedTarget=w,b=p),w=b,m&&g)t:{for(p=m,v=g,x=0,y=p;y;y=Di(y))x++;for(y=0,b=v;b;b=Di(b))y++;for(;0<x-y;)p=Di(p),x--;for(;0<y-x;)v=Di(v),y--;for(;x--;){if(p===v||v!==null&&p===v.alternate)break t;p=Di(p),v=Di(v)}p=null}else p=null;m!==null&&Mu(d,f,m,p,!1),g!==null&&w!==null&&Mu(d,w,g,p,!0)}}e:{if(f=u?Wi(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var j=_0;else if(bu(f))if(Mf)j=R0;else{j=P0;var M=T0}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=L0);if(j&&(j=j(t,u))){zf(d,j,i,h);break e}M&&M(t,f,u),t==="focusout"&&(M=f._wrapperState)&&M.controlled&&f.type==="number"&&$a(f,"number",f.value)}switch(M=u?Wi(u):window,t){case"focusin":(bu(M)||M.contentEditable==="true")&&(Vi=M,Ka=u,Hn=null);break;case"focusout":Hn=Ka=Vi=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,Cu(d,i,h);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":Cu(d,i,h)}var _;if(rc)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Fi?Cf(t,i)&&(T="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(T="onCompositionStart");T&&(Nf&&i.locale!=="ko"&&(Fi||T!=="onCompositionStart"?T==="onCompositionEnd"&&Fi&&(_=Sf()):(Wt=h,ic="value"in Wt?Wt.value:Wt.textContent,Fi=!0)),M=Ar(u,T),0<M.length&&(T=new vu(T,t,null,i,h),d.push({event:T,listeners:M}),_?T.data=_:(_=Ef(i),_!==null&&(T.data=_)))),(_=N0?C0(t,i):E0(t,i))&&(u=Ar(u,"onBeforeInput"),0<u.length&&(h=new vu("onBeforeInput","beforeinput",null,i,h),d.push({event:h,listeners:u}),h.data=_))}If(d,e)})}function cs(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Ar(t,e){for(var i=e+"Capture",n=[];t!==null;){var s=t,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=is(t,i),r!=null&&n.unshift(cs(t,r,s)),r=is(t,e),r!=null&&n.push(cs(t,r,s))),t=t.return}return n}function Di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mu(t,e,i,n,s){for(var r=e._reactName,l=[];i!==null&&i!==n;){var c=i,o=c.alternate,u=c.stateNode;if(o!==null&&o===n)break;c.tag===5&&u!==null&&(c=u,s?(o=is(i,r),o!=null&&l.unshift(cs(i,o,c))):s||(o=is(i,r),o!=null&&l.push(cs(i,o,c)))),i=i.return}l.length!==0&&t.push({event:e,listeners:l})}var F0=/\r\n?/g,V0=/\u0000|\uFFFD/g;function _u(t){return(typeof t=="string"?t:""+t).replace(F0,`
`).replace(V0,"")}function Ks(t,e,i){if(e=_u(e),_u(t)!==e&&i)throw Error(z(425))}function Ir(){}var Qa=null,Ya=null;function Ga(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ja=typeof setTimeout=="function"?setTimeout:void 0,U0=typeof clearTimeout=="function"?clearTimeout:void 0,Tu=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof Tu<"u"?function(t){return Tu.resolve(null).then(t).catch(H0)}:Ja;function H0(t){setTimeout(function(){throw t})}function Ql(t,e){var i=e,n=0;do{var s=i.nextSibling;if(t.removeChild(i),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(n===0){t.removeChild(s),rs(e);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=s}while(i);rs(e)}function Yt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return t;e--}else i==="/$"&&e++}t=t.previousSibling}return null}var bn=Math.random().toString(36).slice(2),yt="__reactFiber$"+bn,us="__reactProps$"+bn,Pt="__reactContainer$"+bn,Za="__reactEvents$"+bn,q0="__reactListeners$"+bn,K0="__reactHandles$"+bn;function vi(t){var e=t[yt];if(e)return e;for(var i=t.parentNode;i;){if(e=i[Pt]||i[yt]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=Pu(t);t!==null;){if(i=t[yt])return i;t=Pu(t)}return e}t=i,i=t.parentNode}return null}function Ms(t){return t=t[yt]||t[Pt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function hl(t){return t[us]||null}var eo=[],Hi=-1;function ai(t){return{current:t}}function ie(t){0>Hi||(t.current=eo[Hi],eo[Hi]=null,Hi--)}function J(t,e){Hi++,eo[Hi]=t.current,t.current=e}var si={},Pe=ai(si),Fe=ai(!1),ji=si;function cn(t,e){var i=t.type.contextTypes;if(!i)return si;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in i)s[r]=e[r];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ve(t){return t=t.childContextTypes,t!=null}function Or(){ie(Fe),ie(Pe)}function Lu(t,e,i){if(Pe.current!==si)throw Error(z(168));J(Pe,e),J(Fe,i)}function Ff(t,e,i){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var s in n)if(!(s in e))throw Error(z(108,Tg(t)||"Unknown",s));return oe({},i,n)}function Fr(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||si,ji=Pe.current,J(Pe,t),J(Fe,Fe.current),!0}function Ru(t,e,i){var n=t.stateNode;if(!n)throw Error(z(169));i?(t=Ff(t,e,ji),n.__reactInternalMemoizedMergedChildContext=t,ie(Fe),ie(Pe),J(Pe,t)):ie(Fe),J(Fe,i)}var Nt=null,dl=!1,Yl=!1;function Vf(t){Nt===null?Nt=[t]:Nt.push(t)}function X0(t){dl=!0,Vf(t)}function oi(){if(!Yl&&Nt!==null){Yl=!0;var t=0,e=Q;try{var i=Nt;for(Q=1;t<i.length;t++){var n=i[t];do n=n(!0);while(n!==null)}Nt=null,dl=!1}catch(s){throw Nt!==null&&(Nt=Nt.slice(t+1)),ff(Jo,oi),s}finally{Q=e,Yl=!1}}return null}var qi=[],Ki=0,Vr=null,Ur=0,tt=[],it=0,Si=null,Ct=1,Et="";function pi(t,e){qi[Ki++]=Ur,qi[Ki++]=Vr,Vr=t,Ur=e}function Uf(t,e,i){tt[it++]=Ct,tt[it++]=Et,tt[it++]=Si,Si=t;var n=Ct;t=Et;var s=32-ht(n)-1;n&=~(1<<s),i+=1;var r=32-ht(e)+s;if(30<r){var l=s-s%5;r=(n&(1<<l)-1).toString(32),n>>=l,s-=l,Ct=1<<32-ht(e)+s|i<<s|n,Et=r+t}else Ct=1<<r|i<<s|n,Et=t}function ac(t){t.return!==null&&(pi(t,1),Uf(t,1,0))}function oc(t){for(;t===Vr;)Vr=qi[--Ki],qi[Ki]=null,Ur=qi[--Ki],qi[Ki]=null;for(;t===Si;)Si=tt[--it],tt[it]=null,Et=tt[--it],tt[it]=null,Ct=tt[--it],tt[it]=null}var Xe=null,Ke=null,ne=!1,ut=null;function Wf(t,e){var i=nt(5,null,null,0);i.elementType="DELETED",i.stateNode=e,i.return=t,e=t.deletions,e===null?(t.deletions=[i],t.flags|=16):e.push(i)}function $u(t,e){switch(t.tag){case 5:var i=t.type;return e=e.nodeType!==1||i.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xe=t,Ke=Yt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xe=t,Ke=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(i=Si!==null?{id:Ct,overflow:Et}:null,t.memoizedState={dehydrated:e,treeContext:i,retryLane:1073741824},i=nt(18,null,null,0),i.stateNode=e,i.return=t,t.child=i,Xe=t,Ke=null,!0):!1;default:return!1}}function to(t){return(t.mode&1)!==0&&(t.flags&128)===0}function io(t){if(ne){var e=Ke;if(e){var i=e;if(!$u(t,e)){if(to(t))throw Error(z(418));e=Yt(i.nextSibling);var n=Xe;e&&$u(t,e)?Wf(n,i):(t.flags=t.flags&-4097|2,ne=!1,Xe=t)}}else{if(to(t))throw Error(z(418));t.flags=t.flags&-4097|2,ne=!1,Xe=t}}}function Du(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xe=t}function Xs(t){if(t!==Xe)return!1;if(!ne)return Du(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ga(t.type,t.memoizedProps)),e&&(e=Ke)){if(to(t))throw Hf(),Error(z(418));for(;e;)Wf(t,e),e=Yt(e.nextSibling)}if(Du(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(e===0){Ke=Yt(t.nextSibling);break e}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++}t=t.nextSibling}Ke=null}}else Ke=Xe?Yt(t.stateNode.nextSibling):null;return!0}function Hf(){for(var t=Ke;t;)t=Yt(t.nextSibling)}function un(){Ke=Xe=null,ne=!1}function cc(t){ut===null?ut=[t]:ut.push(t)}var Q0=$t.ReactCurrentBatchConfig;function Pn(t,e,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(z(309));var n=i.stateNode}if(!n)throw Error(z(147,t));var s=n,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(l){var c=s.refs;l===null?delete c[r]:c[r]=l},e._stringRef=r,e)}if(typeof t!="string")throw Error(z(284));if(!i._owner)throw Error(z(290,t))}return t}function Qs(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bu(t){var e=t._init;return e(t._payload)}function qf(t){function e(v,x){if(t){var y=v.deletions;y===null?(v.deletions=[x],v.flags|=16):y.push(x)}}function i(v,x){if(!t)return null;for(;x!==null;)e(v,x),x=x.sibling;return null}function n(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function s(v,x){return v=ei(v,x),v.index=0,v.sibling=null,v}function r(v,x,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<x?(v.flags|=2,x):y):(v.flags|=2,x)):(v.flags|=1048576,x)}function l(v){return t&&v.alternate===null&&(v.flags|=2),v}function c(v,x,y,b){return x===null||x.tag!==6?(x=na(y,v.mode,b),x.return=v,x):(x=s(x,y),x.return=v,x)}function o(v,x,y,b){var j=y.type;return j===Oi?h(v,x,y.props.children,b,y.key):x!==null&&(x.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ot&&Bu(j)===x.type)?(b=s(x,y.props),b.ref=Pn(v,x,y),b.return=v,b):(b=Cr(y.type,y.key,y.props,null,v.mode,b),b.ref=Pn(v,x,y),b.return=v,b)}function u(v,x,y,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=sa(y,v.mode,b),x.return=v,x):(x=s(x,y.children||[]),x.return=v,x)}function h(v,x,y,b,j){return x===null||x.tag!==7?(x=bi(y,v.mode,b,j),x.return=v,x):(x=s(x,y),x.return=v,x)}function d(v,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=na(""+x,v.mode,y),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case As:return y=Cr(x.type,x.key,x.props,null,v.mode,y),y.ref=Pn(v,null,x),y.return=v,y;case Ii:return x=sa(x,v.mode,y),x.return=v,x;case Ot:var b=x._init;return d(v,b(x._payload),y)}if(Bn(x)||En(x))return x=bi(x,v.mode,y,null),x.return=v,x;Qs(v,x)}return null}function f(v,x,y,b){var j=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:c(v,x,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case As:return y.key===j?o(v,x,y,b):null;case Ii:return y.key===j?u(v,x,y,b):null;case Ot:return j=y._init,f(v,x,j(y._payload),b)}if(Bn(y)||En(y))return j!==null?null:h(v,x,y,b,null);Qs(v,y)}return null}function m(v,x,y,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return v=v.get(y)||null,c(x,v,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case As:return v=v.get(b.key===null?y:b.key)||null,o(x,v,b,j);case Ii:return v=v.get(b.key===null?y:b.key)||null,u(x,v,b,j);case Ot:var M=b._init;return m(v,x,y,M(b._payload),j)}if(Bn(b)||En(b))return v=v.get(y)||null,h(x,v,b,j,null);Qs(x,b)}return null}function g(v,x,y,b){for(var j=null,M=null,_=x,T=x=0,D=null;_!==null&&T<y.length;T++){_.index>T?(D=_,_=null):D=_.sibling;var B=f(v,_,y[T],b);if(B===null){_===null&&(_=D);break}t&&_&&B.alternate===null&&e(v,_),x=r(B,x,T),M===null?j=B:M.sibling=B,M=B,_=D}if(T===y.length)return i(v,_),ne&&pi(v,T),j;if(_===null){for(;T<y.length;T++)_=d(v,y[T],b),_!==null&&(x=r(_,x,T),M===null?j=_:M.sibling=_,M=_);return ne&&pi(v,T),j}for(_=n(v,_);T<y.length;T++)D=m(_,v,T,y[T],b),D!==null&&(t&&D.alternate!==null&&_.delete(D.key===null?T:D.key),x=r(D,x,T),M===null?j=D:M.sibling=D,M=D);return t&&_.forEach(function(Z){return e(v,Z)}),ne&&pi(v,T),j}function p(v,x,y,b){var j=En(y);if(typeof j!="function")throw Error(z(150));if(y=j.call(y),y==null)throw Error(z(151));for(var M=j=null,_=x,T=x=0,D=null,B=y.next();_!==null&&!B.done;T++,B=y.next()){_.index>T?(D=_,_=null):D=_.sibling;var Z=f(v,_,B.value,b);if(Z===null){_===null&&(_=D);break}t&&_&&Z.alternate===null&&e(v,_),x=r(Z,x,T),M===null?j=Z:M.sibling=Z,M=Z,_=D}if(B.done)return i(v,_),ne&&pi(v,T),j;if(_===null){for(;!B.done;T++,B=y.next())B=d(v,B.value,b),B!==null&&(x=r(B,x,T),M===null?j=B:M.sibling=B,M=B);return ne&&pi(v,T),j}for(_=n(v,_);!B.done;T++,B=y.next())B=m(_,v,T,B.value,b),B!==null&&(t&&B.alternate!==null&&_.delete(B.key===null?T:B.key),x=r(B,x,T),M===null?j=B:M.sibling=B,M=B);return t&&_.forEach(function(ze){return e(v,ze)}),ne&&pi(v,T),j}function w(v,x,y,b){if(typeof y=="object"&&y!==null&&y.type===Oi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case As:e:{for(var j=y.key,M=x;M!==null;){if(M.key===j){if(j=y.type,j===Oi){if(M.tag===7){i(v,M.sibling),x=s(M,y.props.children),x.return=v,v=x;break e}}else if(M.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ot&&Bu(j)===M.type){i(v,M.sibling),x=s(M,y.props),x.ref=Pn(v,M,y),x.return=v,v=x;break e}i(v,M);break}else e(v,M);M=M.sibling}y.type===Oi?(x=bi(y.props.children,v.mode,b,y.key),x.return=v,v=x):(b=Cr(y.type,y.key,y.props,null,v.mode,b),b.ref=Pn(v,x,y),b.return=v,v=b)}return l(v);case Ii:e:{for(M=y.key;x!==null;){if(x.key===M)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){i(v,x.sibling),x=s(x,y.children||[]),x.return=v,v=x;break e}else{i(v,x);break}else e(v,x);x=x.sibling}x=sa(y,v.mode,b),x.return=v,v=x}return l(v);case Ot:return M=y._init,w(v,x,M(y._payload),b)}if(Bn(y))return g(v,x,y,b);if(En(y))return p(v,x,y,b);Qs(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(i(v,x.sibling),x=s(x,y),x.return=v,v=x):(i(v,x),x=na(y,v.mode,b),x.return=v,v=x),l(v)):i(v,x)}return w}var hn=qf(!0),Kf=qf(!1),Wr=ai(null),Hr=null,Xi=null,uc=null;function hc(){uc=Xi=Hr=null}function dc(t){var e=Wr.current;ie(Wr),t._currentValue=e}function no(t,e,i){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===i)break;t=t.return}}function sn(t,e){Hr=t,uc=Xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Oe=!0),t.firstContext=null)}function rt(t){var e=t._currentValue;if(uc!==t)if(t={context:t,memoizedValue:e,next:null},Xi===null){if(Hr===null)throw Error(z(308));Xi=t,Hr.dependencies={lanes:0,firstContext:t}}else Xi=Xi.next=t;return e}var xi=null;function fc(t){xi===null?xi=[t]:xi.push(t)}function Xf(t,e,i,n){var s=e.interleaved;return s===null?(i.next=i,fc(e)):(i.next=s.next,s.next=i),e.interleaved=i,Lt(t,n)}function Lt(t,e){t.lanes|=e;var i=t.alternate;for(i!==null&&(i.lanes|=e),i=t,t=t.return;t!==null;)t.childLanes|=e,i=t.alternate,i!==null&&(i.childLanes|=e),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Ft=!1;function pc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _t(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gt(t,e,i){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,X&2){var s=n.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),n.pending=e,Lt(t,i)}return s=n.interleaved,s===null?(e.next=e,fc(n)):(e.next=s.next,s.next=e),n.interleaved=e,Lt(t,i)}function wr(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,Zo(t,i)}}function Au(t,e){var i=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var s=null,r=null;if(i=i.firstBaseUpdate,i!==null){do{var l={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};r===null?s=r=l:r=r.next=l,i=i.next}while(i!==null);r===null?s=r=e:r=r.next=e}else s=r=e;i={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:n.shared,effects:n.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}function qr(t,e,i,n){var s=t.updateQueue;Ft=!1;var r=s.firstBaseUpdate,l=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var o=c,u=o.next;o.next=null,l===null?r=u:l.next=u,l=o;var h=t.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==l&&(c===null?h.firstBaseUpdate=u:c.next=u,h.lastBaseUpdate=o))}if(r!==null){var d=s.baseState;l=0,h=u=o=null,c=r;do{var f=c.lane,m=c.eventTime;if((n&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var g=t,p=c;switch(f=e,m=i,p.tag){case 1:if(g=p.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=p.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=oe({},d,f);break e;case 2:Ft=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[c]:f.push(c))}else m={eventTime:m,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(u=h=m,o=d):h=h.next=m,l|=f;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;f=c,c=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(o=d),s.baseState=o,s.firstBaseUpdate=u,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else r===null&&(s.shared.lanes=0);Ci|=l,t.lanes=l,t.memoizedState=d}}function Iu(t,e,i){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],s=n.callback;if(s!==null){if(n.callback=null,n=i,typeof s!="function")throw Error(z(191,s));s.call(n)}}}var _s={},kt=ai(_s),hs=ai(_s),ds=ai(_s);function yi(t){if(t===_s)throw Error(z(174));return t}function mc(t,e){switch(J(ds,e),J(hs,t),J(kt,_s),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ba(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ba(e,t)}ie(kt),J(kt,e)}function dn(){ie(kt),ie(hs),ie(ds)}function Yf(t){yi(ds.current);var e=yi(kt.current),i=Ba(e,t.type);e!==i&&(J(hs,t),J(kt,i))}function gc(t){hs.current===t&&(ie(kt),ie(hs))}var re=ai(0);function Kr(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gl=[];function vc(){for(var t=0;t<Gl.length;t++)Gl[t]._workInProgressVersionPrimary=null;Gl.length=0}var br=$t.ReactCurrentDispatcher,Jl=$t.ReactCurrentBatchConfig,Ni=0,le=null,ve=null,we=null,Xr=!1,qn=!1,fs=0,Y0=0;function Me(){throw Error(z(321))}function xc(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!ft(t[i],e[i]))return!1;return!0}function yc(t,e,i,n,s,r){if(Ni=r,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,br.current=t===null||t.memoizedState===null?ev:tv,t=i(n,s),qn){r=0;do{if(qn=!1,fs=0,25<=r)throw Error(z(301));r+=1,we=ve=null,e.updateQueue=null,br.current=iv,t=i(n,s)}while(qn)}if(br.current=Qr,e=ve!==null&&ve.next!==null,Ni=0,we=ve=le=null,Xr=!1,e)throw Error(z(300));return t}function wc(){var t=fs!==0;return fs=0,t}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?le.memoizedState=we=t:we=we.next=t,we}function lt(){if(ve===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=we===null?le.memoizedState:we.next;if(e!==null)we=e,ve=t;else{if(t===null)throw Error(z(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?le.memoizedState=we=t:we=we.next=t}return we}function ps(t,e){return typeof e=="function"?e(t):e}function Zl(t){var e=lt(),i=e.queue;if(i===null)throw Error(z(311));i.lastRenderedReducer=t;var n=ve,s=n.baseQueue,r=i.pending;if(r!==null){if(s!==null){var l=s.next;s.next=r.next,r.next=l}n.baseQueue=s=r,i.pending=null}if(s!==null){r=s.next,n=n.baseState;var c=l=null,o=null,u=r;do{var h=u.lane;if((Ni&h)===h)o!==null&&(o=o.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};o===null?(c=o=d,l=n):o=o.next=d,le.lanes|=h,Ci|=h}u=u.next}while(u!==null&&u!==r);o===null?l=n:o.next=c,ft(n,e.memoizedState)||(Oe=!0),e.memoizedState=n,e.baseState=l,e.baseQueue=o,i.lastRenderedState=n}if(t=i.interleaved,t!==null){s=t;do r=s.lane,le.lanes|=r,Ci|=r,s=s.next;while(s!==t)}else s===null&&(i.lanes=0);return[e.memoizedState,i.dispatch]}function ea(t){var e=lt(),i=e.queue;if(i===null)throw Error(z(311));i.lastRenderedReducer=t;var n=i.dispatch,s=i.pending,r=e.memoizedState;if(s!==null){i.pending=null;var l=s=s.next;do r=t(r,l.action),l=l.next;while(l!==s);ft(r,e.memoizedState)||(Oe=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),i.lastRenderedState=r}return[r,n]}function Gf(){}function Jf(t,e){var i=le,n=lt(),s=e(),r=!ft(n.memoizedState,s);if(r&&(n.memoizedState=s,Oe=!0),n=n.queue,bc(tp.bind(null,i,n,t),[t]),n.getSnapshot!==e||r||we!==null&&we.memoizedState.tag&1){if(i.flags|=2048,ms(9,ep.bind(null,i,n,s,e),void 0,null),be===null)throw Error(z(349));Ni&30||Zf(i,e,s)}return s}function Zf(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function ep(t,e,i,n){e.value=i,e.getSnapshot=n,ip(e)&&np(t)}function tp(t,e,i){return i(function(){ip(e)&&np(t)})}function ip(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!ft(t,i)}catch{return!0}}function np(t){var e=Lt(t,1);e!==null&&dt(e,t,1,-1)}function Ou(t){var e=xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:t},e.queue=t,t=t.dispatch=Z0.bind(null,le,t),[e.memoizedState,t]}function ms(t,e,i,n){return t={tag:t,create:e,destroy:i,deps:n,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(i=e.lastEffect,i===null?e.lastEffect=t.next=t:(n=i.next,i.next=t,t.next=n,e.lastEffect=t)),t}function sp(){return lt().memoizedState}function kr(t,e,i,n){var s=xt();le.flags|=t,s.memoizedState=ms(1|e,i,void 0,n===void 0?null:n)}function fl(t,e,i,n){var s=lt();n=n===void 0?null:n;var r=void 0;if(ve!==null){var l=ve.memoizedState;if(r=l.destroy,n!==null&&xc(n,l.deps)){s.memoizedState=ms(e,i,r,n);return}}le.flags|=t,s.memoizedState=ms(1|e,i,r,n)}function Fu(t,e){return kr(8390656,8,t,e)}function bc(t,e){return fl(2048,8,t,e)}function rp(t,e){return fl(4,2,t,e)}function lp(t,e){return fl(4,4,t,e)}function ap(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function op(t,e,i){return i=i!=null?i.concat([t]):null,fl(4,4,ap.bind(null,e,t),i)}function kc(){}function cp(t,e){var i=lt();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&xc(e,n[1])?n[0]:(i.memoizedState=[t,e],t)}function up(t,e){var i=lt();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&xc(e,n[1])?n[0]:(t=t(),i.memoizedState=[t,e],t)}function hp(t,e,i){return Ni&21?(ft(i,e)||(i=gf(),le.lanes|=i,Ci|=i,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Oe=!0),t.memoizedState=i)}function G0(t,e){var i=Q;Q=i!==0&&4>i?i:4,t(!0);var n=Jl.transition;Jl.transition={};try{t(!1),e()}finally{Q=i,Jl.transition=n}}function dp(){return lt().memoizedState}function J0(t,e,i){var n=Zt(t);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},fp(t))pp(e,i);else if(i=Xf(t,e,i,n),i!==null){var s=$e();dt(i,t,n,s),mp(i,e,n)}}function Z0(t,e,i){var n=Zt(t),s={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(fp(t))pp(e,s);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var l=e.lastRenderedState,c=r(l,i);if(s.hasEagerState=!0,s.eagerState=c,ft(c,l)){var o=e.interleaved;o===null?(s.next=s,fc(e)):(s.next=o.next,o.next=s),e.interleaved=s;return}}catch{}finally{}i=Xf(t,e,s,n),i!==null&&(s=$e(),dt(i,t,n,s),mp(i,e,n))}}function fp(t){var e=t.alternate;return t===le||e!==null&&e===le}function pp(t,e){qn=Xr=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function mp(t,e,i){if(i&4194240){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,Zo(t,i)}}var Qr={readContext:rt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},ev={readContext:rt,useCallback:function(t,e){return xt().memoizedState=[t,e===void 0?null:e],t},useContext:rt,useEffect:Fu,useImperativeHandle:function(t,e,i){return i=i!=null?i.concat([t]):null,kr(4194308,4,ap.bind(null,e,t),i)},useLayoutEffect:function(t,e){return kr(4194308,4,t,e)},useInsertionEffect:function(t,e){return kr(4,2,t,e)},useMemo:function(t,e){var i=xt();return e=e===void 0?null:e,t=t(),i.memoizedState=[t,e],t},useReducer:function(t,e,i){var n=xt();return e=i!==void 0?i(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=J0.bind(null,le,t),[n.memoizedState,t]},useRef:function(t){var e=xt();return t={current:t},e.memoizedState=t},useState:Ou,useDebugValue:kc,useDeferredValue:function(t){return xt().memoizedState=t},useTransition:function(){var t=Ou(!1),e=t[0];return t=G0.bind(null,t[1]),xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,i){var n=le,s=xt();if(ne){if(i===void 0)throw Error(z(407));i=i()}else{if(i=e(),be===null)throw Error(z(349));Ni&30||Zf(n,e,i)}s.memoizedState=i;var r={value:i,getSnapshot:e};return s.queue=r,Fu(tp.bind(null,n,r,t),[t]),n.flags|=2048,ms(9,ep.bind(null,n,r,i,e),void 0,null),i},useId:function(){var t=xt(),e=be.identifierPrefix;if(ne){var i=Et,n=Ct;i=(n&~(1<<32-ht(n)-1)).toString(32)+i,e=":"+e+"R"+i,i=fs++,0<i&&(e+="H"+i.toString(32)),e+=":"}else i=Y0++,e=":"+e+"r"+i.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tv={readContext:rt,useCallback:cp,useContext:rt,useEffect:bc,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:lp,useMemo:up,useReducer:Zl,useRef:sp,useState:function(){return Zl(ps)},useDebugValue:kc,useDeferredValue:function(t){var e=lt();return hp(e,ve.memoizedState,t)},useTransition:function(){var t=Zl(ps)[0],e=lt().memoizedState;return[t,e]},useMutableSource:Gf,useSyncExternalStore:Jf,useId:dp,unstable_isNewReconciler:!1},iv={readContext:rt,useCallback:cp,useContext:rt,useEffect:bc,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:lp,useMemo:up,useReducer:ea,useRef:sp,useState:function(){return ea(ps)},useDebugValue:kc,useDeferredValue:function(t){var e=lt();return ve===null?e.memoizedState=t:hp(e,ve.memoizedState,t)},useTransition:function(){var t=ea(ps)[0],e=lt().memoizedState;return[t,e]},useMutableSource:Gf,useSyncExternalStore:Jf,useId:dp,unstable_isNewReconciler:!1};function ot(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var i in t)e[i]===void 0&&(e[i]=t[i]);return e}return e}function so(t,e,i,n){e=t.memoizedState,i=i(n,e),i=i==null?e:oe({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var pl={isMounted:function(t){return(t=t._reactInternals)?$i(t)===t:!1},enqueueSetState:function(t,e,i){t=t._reactInternals;var n=$e(),s=Zt(t),r=_t(n,s);r.payload=e,i!=null&&(r.callback=i),e=Gt(t,r,s),e!==null&&(dt(e,t,s,n),wr(e,t,s))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var n=$e(),s=Zt(t),r=_t(n,s);r.tag=1,r.payload=e,i!=null&&(r.callback=i),e=Gt(t,r,s),e!==null&&(dt(e,t,s,n),wr(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=$e(),n=Zt(t),s=_t(i,n);s.tag=2,e!=null&&(s.callback=e),e=Gt(t,s,n),e!==null&&(dt(e,t,n,i),wr(e,t,n))}};function Vu(t,e,i,n,s,r,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,r,l):e.prototype&&e.prototype.isPureReactComponent?!as(i,n)||!as(s,r):!0}function gp(t,e,i){var n=!1,s=si,r=e.contextType;return typeof r=="object"&&r!==null?r=rt(r):(s=Ve(e)?ji:Pe.current,n=e.contextTypes,r=(n=n!=null)?cn(t,s):si),e=new e(i,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pl,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=r),e}function Uu(t,e,i,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,n),e.state!==t&&pl.enqueueReplaceState(e,e.state,null)}function ro(t,e,i,n){var s=t.stateNode;s.props=i,s.state=t.memoizedState,s.refs={},pc(t);var r=e.contextType;typeof r=="object"&&r!==null?s.context=rt(r):(r=Ve(e)?ji:Pe.current,s.context=cn(t,r)),s.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(so(t,e,r,i),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&pl.enqueueReplaceState(s,s.state,null),qr(t,i,s,n),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function fn(t,e){try{var i="",n=e;do i+=_g(n),n=n.return;while(n);var s=i}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:s,digest:null}}function ta(t,e,i){return{value:t,source:null,stack:i??null,digest:e??null}}function lo(t,e){try{console.error(e.value)}catch(i){setTimeout(function(){throw i})}}var nv=typeof WeakMap=="function"?WeakMap:Map;function vp(t,e,i){i=_t(-1,i),i.tag=3,i.payload={element:null};var n=e.value;return i.callback=function(){Gr||(Gr=!0,vo=n),lo(t,e)},i}function xp(t,e,i){i=_t(-1,i),i.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var s=e.value;i.payload=function(){return n(s)},i.callback=function(){lo(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(i.callback=function(){lo(t,e),typeof n!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),i}function Wu(t,e,i){var n=t.pingCache;if(n===null){n=t.pingCache=new nv;var s=new Set;n.set(e,s)}else s=n.get(e),s===void 0&&(s=new Set,n.set(e,s));s.has(i)||(s.add(i),t=vv.bind(null,t,e,i),e.then(t,t))}function Hu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qu(t,e,i,n,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(e=_t(-1,1),e.tag=2,Gt(i,e,1))),i.lanes|=1),t)}var sv=$t.ReactCurrentOwner,Oe=!1;function Re(t,e,i,n){e.child=t===null?Kf(e,null,i,n):hn(e,t.child,i,n)}function Ku(t,e,i,n,s){i=i.render;var r=e.ref;return sn(e,s),n=yc(t,e,i,n,r,s),i=wc(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Rt(t,e,s)):(ne&&i&&ac(e),e.flags|=1,Re(t,e,n,s),e.child)}function Xu(t,e,i,n,s){if(t===null){var r=i.type;return typeof r=="function"&&!_c(r)&&r.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(e.tag=15,e.type=r,yp(t,e,r,n,s)):(t=Cr(i.type,null,n,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!(t.lanes&s)){var l=r.memoizedProps;if(i=i.compare,i=i!==null?i:as,i(l,n)&&t.ref===e.ref)return Rt(t,e,s)}return e.flags|=1,t=ei(r,n),t.ref=e.ref,t.return=e,e.child=t}function yp(t,e,i,n,s){if(t!==null){var r=t.memoizedProps;if(as(r,n)&&t.ref===e.ref)if(Oe=!1,e.pendingProps=n=r,(t.lanes&s)!==0)t.flags&131072&&(Oe=!0);else return e.lanes=t.lanes,Rt(t,e,s)}return ao(t,e,i,n,s)}function wp(t,e,i){var n=e.pendingProps,s=n.children,r=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Yi,qe),qe|=i;else{if(!(i&1073741824))return t=r!==null?r.baseLanes|i:i,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(Yi,qe),qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=r!==null?r.baseLanes:i,J(Yi,qe),qe|=n}else r!==null?(n=r.baseLanes|i,e.memoizedState=null):n=i,J(Yi,qe),qe|=n;return Re(t,e,s,i),e.child}function bp(t,e){var i=e.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(e.flags|=512,e.flags|=2097152)}function ao(t,e,i,n,s){var r=Ve(i)?ji:Pe.current;return r=cn(e,r),sn(e,s),i=yc(t,e,i,n,r,s),n=wc(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Rt(t,e,s)):(ne&&n&&ac(e),e.flags|=1,Re(t,e,i,s),e.child)}function Qu(t,e,i,n,s){if(Ve(i)){var r=!0;Fr(e)}else r=!1;if(sn(e,s),e.stateNode===null)jr(t,e),gp(e,i,n),ro(e,i,n,s),n=!0;else if(t===null){var l=e.stateNode,c=e.memoizedProps;l.props=c;var o=l.context,u=i.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Ve(i)?ji:Pe.current,u=cn(e,u));var h=i.getDerivedStateFromProps,d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==n||o!==u)&&Uu(e,l,n,u),Ft=!1;var f=e.memoizedState;l.state=f,qr(e,n,l,s),o=e.memoizedState,c!==n||f!==o||Fe.current||Ft?(typeof h=="function"&&(so(e,i,h,n),o=e.memoizedState),(c=Ft||Vu(e,i,c,n,f,o,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=o),l.props=n,l.state=o,l.context=u,n=c):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{l=e.stateNode,Qf(t,e),c=e.memoizedProps,u=e.type===e.elementType?c:ot(e.type,c),l.props=u,d=e.pendingProps,f=l.context,o=i.contextType,typeof o=="object"&&o!==null?o=rt(o):(o=Ve(i)?ji:Pe.current,o=cn(e,o));var m=i.getDerivedStateFromProps;(h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==d||f!==o)&&Uu(e,l,n,o),Ft=!1,f=e.memoizedState,l.state=f,qr(e,n,l,s);var g=e.memoizedState;c!==d||f!==g||Fe.current||Ft?(typeof m=="function"&&(so(e,i,m,n),g=e.memoizedState),(u=Ft||Vu(e,i,u,n,f,g,o)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,g,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,g,o)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=g),l.props=n,l.state=g,l.context=o,n=u):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return oo(t,e,i,n,r,s)}function oo(t,e,i,n,s,r){bp(t,e);var l=(e.flags&128)!==0;if(!n&&!l)return s&&Ru(e,i,!1),Rt(t,e,r);n=e.stateNode,sv.current=e;var c=l&&typeof i.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&l?(e.child=hn(e,t.child,null,r),e.child=hn(e,null,c,r)):Re(t,e,c,r),e.memoizedState=n.state,s&&Ru(e,i,!0),e.child}function kp(t){var e=t.stateNode;e.pendingContext?Lu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lu(t,e.context,!1),mc(t,e.containerInfo)}function Yu(t,e,i,n,s){return un(),cc(s),e.flags|=256,Re(t,e,i,n),e.child}var co={dehydrated:null,treeContext:null,retryLane:0};function uo(t){return{baseLanes:t,cachePool:null,transitions:null}}function jp(t,e,i){var n=e.pendingProps,s=re.current,r=!1,l=(e.flags&128)!==0,c;if((c=l)||(c=t!==null&&t.memoizedState===null?!1:(s&2)!==0),c?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),J(re,s&1),t===null)return io(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=n.children,t=n.fallback,r?(n=e.mode,r=e.child,l={mode:"hidden",children:l},!(n&1)&&r!==null?(r.childLanes=0,r.pendingProps=l):r=vl(l,n,0,null),t=bi(t,n,i,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=uo(i),e.memoizedState=co,t):jc(e,l));if(s=t.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return rv(t,e,l,n,c,s,i);if(r){r=n.fallback,l=e.mode,s=t.child,c=s.sibling;var o={mode:"hidden",children:n.children};return!(l&1)&&e.child!==s?(n=e.child,n.childLanes=0,n.pendingProps=o,e.deletions=null):(n=ei(s,o),n.subtreeFlags=s.subtreeFlags&14680064),c!==null?r=ei(c,r):(r=bi(r,l,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,n=r,r=e.child,l=t.child.memoizedState,l=l===null?uo(i):{baseLanes:l.baseLanes|i,cachePool:null,transitions:l.transitions},r.memoizedState=l,r.childLanes=t.childLanes&~i,e.memoizedState=co,n}return r=t.child,t=r.sibling,n=ei(r,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=n,e.memoizedState=null,n}function jc(t,e){return e=vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ys(t,e,i,n){return n!==null&&cc(n),hn(e,t.child,null,i),t=jc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rv(t,e,i,n,s,r,l){if(i)return e.flags&256?(e.flags&=-257,n=ta(Error(z(422))),Ys(t,e,l,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=n.fallback,s=e.mode,n=vl({mode:"visible",children:n.children},s,0,null),r=bi(r,s,l,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,e.mode&1&&hn(e,t.child,null,l),e.child.memoizedState=uo(l),e.memoizedState=co,r);if(!(e.mode&1))return Ys(t,e,l,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var c=n.dgst;return n=c,r=Error(z(419)),n=ta(r,n,void 0),Ys(t,e,l,n)}if(c=(l&t.childLanes)!==0,Oe||c){if(n=be,n!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|l)?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,Lt(t,s),dt(n,t,s,-1))}return Mc(),n=ta(Error(z(421))),Ys(t,e,l,n)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=xv.bind(null,t),s._reactRetry=e,null):(t=r.treeContext,Ke=Yt(s.nextSibling),Xe=e,ne=!0,ut=null,t!==null&&(tt[it++]=Ct,tt[it++]=Et,tt[it++]=Si,Ct=t.id,Et=t.overflow,Si=e),e=jc(e,n.children),e.flags|=4096,e)}function Gu(t,e,i){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),no(t.return,e,i)}function ia(t,e,i,n,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=i,r.tailMode=s)}function Sp(t,e,i){var n=e.pendingProps,s=n.revealOrder,r=n.tail;if(Re(t,e,n.children,i),n=re.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gu(t,i,e);else if(t.tag===19)Gu(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(J(re,n),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(i=e.child,s=null;i!==null;)t=i.alternate,t!==null&&Kr(t)===null&&(s=i),i=i.sibling;i=s,i===null?(s=e.child,e.child=null):(s=i.sibling,i.sibling=null),ia(e,!1,s,i,r);break;case"backwards":for(i=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Kr(t)===null){e.child=s;break}t=s.sibling,s.sibling=i,i=s,s=t}ia(e,!0,i,null,r);break;case"together":ia(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jr(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rt(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Ci|=e.lanes,!(i&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,i=ei(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=ei(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function lv(t,e,i){switch(e.tag){case 3:kp(e),un();break;case 5:Yf(e);break;case 1:Ve(e.type)&&Fr(e);break;case 4:mc(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,s=e.memoizedProps.value;J(Wr,n._currentValue),n._currentValue=s;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(J(re,re.current&1),e.flags|=128,null):i&e.child.childLanes?jp(t,e,i):(J(re,re.current&1),t=Rt(t,e,i),t!==null?t.sibling:null);J(re,re.current&1);break;case 19:if(n=(i&e.childLanes)!==0,t.flags&128){if(n)return Sp(t,e,i);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),J(re,re.current),n)break;return null;case 22:case 23:return e.lanes=0,wp(t,e,i)}return Rt(t,e,i)}var Np,ho,Cp,Ep;Np=function(t,e){for(var i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};ho=function(){};Cp=function(t,e,i,n){var s=t.memoizedProps;if(s!==n){t=e.stateNode,yi(kt.current);var r=null;switch(i){case"input":s=La(t,s),n=La(t,n),r=[];break;case"select":s=oe({},s,{value:void 0}),n=oe({},n,{value:void 0}),r=[];break;case"textarea":s=Da(t,s),n=Da(t,n),r=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Ir)}Aa(i,n);var l;i=null;for(u in s)if(!n.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var c=s[u];for(l in c)c.hasOwnProperty(l)&&(i||(i={}),i[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(es.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in n){var o=n[u];if(c=s!=null?s[u]:void 0,n.hasOwnProperty(u)&&o!==c&&(o!=null||c!=null))if(u==="style")if(c){for(l in c)!c.hasOwnProperty(l)||o&&o.hasOwnProperty(l)||(i||(i={}),i[l]="");for(l in o)o.hasOwnProperty(l)&&c[l]!==o[l]&&(i||(i={}),i[l]=o[l])}else i||(r||(r=[]),r.push(u,i)),i=o;else u==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,c=c?c.__html:void 0,o!=null&&c!==o&&(r=r||[]).push(u,o)):u==="children"?typeof o!="string"&&typeof o!="number"||(r=r||[]).push(u,""+o):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(es.hasOwnProperty(u)?(o!=null&&u==="onScroll"&&ee("scroll",t),r||c===o||(r=[])):(r=r||[]).push(u,o))}i&&(r=r||[]).push("style",i);var u=r;(e.updateQueue=u)&&(e.flags|=4)}};Ep=function(t,e,i,n){i!==n&&(e.flags|=4)};function Ln(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function _e(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,n=0;if(e)for(var s=t.child;s!==null;)i|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)i|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=n,t.childLanes=i,e}function av(t,e,i){var n=e.pendingProps;switch(oc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(e),null;case 1:return Ve(e.type)&&Or(),_e(e),null;case 3:return n=e.stateNode,dn(),ie(Fe),ie(Pe),vc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Xs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ut!==null&&(wo(ut),ut=null))),ho(t,e),_e(e),null;case 5:gc(e);var s=yi(ds.current);if(i=e.type,t!==null&&e.stateNode!=null)Cp(t,e,i,n,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(z(166));return _e(e),null}if(t=yi(kt.current),Xs(e)){n=e.stateNode,i=e.type;var r=e.memoizedProps;switch(n[yt]=e,n[us]=r,t=(e.mode&1)!==0,i){case"dialog":ee("cancel",n),ee("close",n);break;case"iframe":case"object":case"embed":ee("load",n);break;case"video":case"audio":for(s=0;s<In.length;s++)ee(In[s],n);break;case"source":ee("error",n);break;case"img":case"image":case"link":ee("error",n),ee("load",n);break;case"details":ee("toggle",n);break;case"input":lu(n,r),ee("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!r.multiple},ee("invalid",n);break;case"textarea":ou(n,r),ee("invalid",n)}Aa(i,r),s=null;for(var l in r)if(r.hasOwnProperty(l)){var c=r[l];l==="children"?typeof c=="string"?n.textContent!==c&&(r.suppressHydrationWarning!==!0&&Ks(n.textContent,c,t),s=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(r.suppressHydrationWarning!==!0&&Ks(n.textContent,c,t),s=["children",""+c]):es.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&ee("scroll",n)}switch(i){case"input":Is(n),au(n,r,!0);break;case"textarea":Is(n),cu(n);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(n.onclick=Ir)}n=s,e.updateQueue=n,n!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ef(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=l.createElement(i,{is:n.is}):(t=l.createElement(i),i==="select"&&(l=t,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):t=l.createElementNS(t,i),t[yt]=e,t[us]=n,Np(t,e,!1,!1),e.stateNode=t;e:{switch(l=Ia(i,n),i){case"dialog":ee("cancel",t),ee("close",t),s=n;break;case"iframe":case"object":case"embed":ee("load",t),s=n;break;case"video":case"audio":for(s=0;s<In.length;s++)ee(In[s],t);s=n;break;case"source":ee("error",t),s=n;break;case"img":case"image":case"link":ee("error",t),ee("load",t),s=n;break;case"details":ee("toggle",t),s=n;break;case"input":lu(t,n),s=La(t,n),ee("invalid",t);break;case"option":s=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},s=oe({},n,{value:void 0}),ee("invalid",t);break;case"textarea":ou(t,n),s=Da(t,n),ee("invalid",t);break;default:s=n}Aa(i,s),c=s;for(r in c)if(c.hasOwnProperty(r)){var o=c[r];r==="style"?sf(t,o):r==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&tf(t,o)):r==="children"?typeof o=="string"?(i!=="textarea"||o!=="")&&ts(t,o):typeof o=="number"&&ts(t,""+o):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(es.hasOwnProperty(r)?o!=null&&r==="onScroll"&&ee("scroll",t):o!=null&&Ko(t,r,o,l))}switch(i){case"input":Is(t),au(t,n,!1);break;case"textarea":Is(t),cu(t);break;case"option":n.value!=null&&t.setAttribute("value",""+ni(n.value));break;case"select":t.multiple=!!n.multiple,r=n.value,r!=null?Zi(t,!!n.multiple,r,!1):n.defaultValue!=null&&Zi(t,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ir)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _e(e),null;case 6:if(t&&e.stateNode!=null)Ep(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(z(166));if(i=yi(ds.current),yi(kt.current),Xs(e)){if(n=e.stateNode,i=e.memoizedProps,n[yt]=e,(r=n.nodeValue!==i)&&(t=Xe,t!==null))switch(t.tag){case 3:Ks(n.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ks(n.nodeValue,i,(t.mode&1)!==0)}r&&(e.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[yt]=e,e.stateNode=n}return _e(e),null;case 13:if(ie(re),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&Ke!==null&&e.mode&1&&!(e.flags&128))Hf(),un(),e.flags|=98560,r=!1;else if(r=Xs(e),n!==null&&n.dehydrated!==null){if(t===null){if(!r)throw Error(z(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(z(317));r[yt]=e}else un(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_e(e),r=!1}else ut!==null&&(wo(ut),ut=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=i,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||re.current&1?xe===0&&(xe=3):Mc())),e.updateQueue!==null&&(e.flags|=4),_e(e),null);case 4:return dn(),ho(t,e),t===null&&os(e.stateNode.containerInfo),_e(e),null;case 10:return dc(e.type._context),_e(e),null;case 17:return Ve(e.type)&&Or(),_e(e),null;case 19:if(ie(re),r=e.memoizedState,r===null)return _e(e),null;if(n=(e.flags&128)!==0,l=r.rendering,l===null)if(n)Ln(r,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Kr(t),l!==null){for(e.flags|=128,Ln(r,!1),n=l.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=i,i=e.child;i!==null;)r=i,t=n,r.flags&=14680066,l=r.alternate,l===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,t=l.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return J(re,re.current&1|2),e.child}t=t.sibling}r.tail!==null&&fe()>pn&&(e.flags|=128,n=!0,Ln(r,!1),e.lanes=4194304)}else{if(!n)if(t=Kr(l),t!==null){if(e.flags|=128,n=!0,i=t.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),Ln(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!ne)return _e(e),null}else 2*fe()-r.renderingStartTime>pn&&i!==1073741824&&(e.flags|=128,n=!0,Ln(r,!1),e.lanes=4194304);r.isBackwards?(l.sibling=e.child,e.child=l):(i=r.last,i!==null?i.sibling=l:e.child=l,r.last=l)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=fe(),e.sibling=null,i=re.current,J(re,n?i&1|2:i&1),e):(_e(e),null);case 22:case 23:return zc(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?qe&1073741824&&(_e(e),e.subtreeFlags&6&&(e.flags|=8192)):_e(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function ov(t,e){switch(oc(e),e.tag){case 1:return Ve(e.type)&&Or(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return dn(),ie(Fe),ie(Pe),vc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gc(e),null;case 13:if(ie(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));un()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(re),null;case 4:return dn(),null;case 10:return dc(e.type._context),null;case 22:case 23:return zc(),null;case 24:return null;default:return null}}var Gs=!1,Te=!1,cv=typeof WeakSet=="function"?WeakSet:Set,$=null;function Qi(t,e){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){ue(t,e,n)}else i.current=null}function fo(t,e,i){try{i()}catch(n){ue(t,e,n)}}var Ju=!1;function uv(t,e){if(Qa=Dr,t=Pf(),lc(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var s=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var l=0,c=-1,o=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var m;d!==i||s!==0&&d.nodeType!==3||(c=l+s),d!==r||n!==0&&d.nodeType!==3||(o=l+n),d.nodeType===3&&(l+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===i&&++u===s&&(c=l),f===r&&++h===n&&(o=l),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}i=c===-1||o===-1?null:{start:c,end:o}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ya={focusedElem:t,selectionRange:i},Dr=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var p=g.memoizedProps,w=g.memoizedState,v=e.stateNode,x=v.getSnapshotBeforeUpdate(e.elementType===e.type?p:ot(e.type,p),w);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(b){ue(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return g=Ju,Ju=!1,g}function Kn(t,e,i){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&t)===t){var r=s.destroy;s.destroy=void 0,r!==void 0&&fo(e,i,r)}s=s.next}while(s!==n)}}function ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var i=e=e.next;do{if((i.tag&t)===t){var n=i.create;i.destroy=n()}i=i.next}while(i!==e)}}function po(t){var e=t.ref;if(e!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof e=="function"?e(t):e.current=t}}function zp(t){var e=t.alternate;e!==null&&(t.alternate=null,zp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yt],delete e[us],delete e[Za],delete e[q0],delete e[K0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mp(t){return t.tag===5||t.tag===3||t.tag===4}function Zu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mo(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.nodeType===8?i.parentNode.insertBefore(t,e):i.insertBefore(t,e):(i.nodeType===8?(e=i.parentNode,e.insertBefore(t,i)):(e=i,e.appendChild(t)),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Ir));else if(n!==4&&(t=t.child,t!==null))for(mo(t,e,i),t=t.sibling;t!==null;)mo(t,e,i),t=t.sibling}function go(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(go(t,e,i),t=t.sibling;t!==null;)go(t,e,i),t=t.sibling}var Se=null,ct=!1;function Bt(t,e,i){for(i=i.child;i!==null;)_p(t,e,i),i=i.sibling}function _p(t,e,i){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(al,i)}catch{}switch(i.tag){case 5:Te||Qi(i,e);case 6:var n=Se,s=ct;Se=null,Bt(t,e,i),Se=n,ct=s,Se!==null&&(ct?(t=Se,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):Se.removeChild(i.stateNode));break;case 18:Se!==null&&(ct?(t=Se,i=i.stateNode,t.nodeType===8?Ql(t.parentNode,i):t.nodeType===1&&Ql(t,i),rs(t)):Ql(Se,i.stateNode));break;case 4:n=Se,s=ct,Se=i.stateNode.containerInfo,ct=!0,Bt(t,e,i),Se=n,ct=s;break;case 0:case 11:case 14:case 15:if(!Te&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var r=s,l=r.destroy;r=r.tag,l!==void 0&&(r&2||r&4)&&fo(i,e,l),s=s.next}while(s!==n)}Bt(t,e,i);break;case 1:if(!Te&&(Qi(i,e),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(c){ue(i,e,c)}Bt(t,e,i);break;case 21:Bt(t,e,i);break;case 22:i.mode&1?(Te=(n=Te)||i.memoizedState!==null,Bt(t,e,i),Te=n):Bt(t,e,i);break;default:Bt(t,e,i)}}function eh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new cv),e.forEach(function(n){var s=yv.bind(null,t,n);i.has(n)||(i.add(n),n.then(s,s))})}}function at(t,e){var i=e.deletions;if(i!==null)for(var n=0;n<i.length;n++){var s=i[n];try{var r=t,l=e,c=l;e:for(;c!==null;){switch(c.tag){case 5:Se=c.stateNode,ct=!1;break e;case 3:Se=c.stateNode.containerInfo,ct=!0;break e;case 4:Se=c.stateNode.containerInfo,ct=!0;break e}c=c.return}if(Se===null)throw Error(z(160));_p(r,l,s),Se=null,ct=!1;var o=s.alternate;o!==null&&(o.return=null),s.return=null}catch(u){ue(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tp(e,t),e=e.sibling}function Tp(t,e){var i=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(at(e,t),gt(t),n&4){try{Kn(3,t,t.return),ml(3,t)}catch(p){ue(t,t.return,p)}try{Kn(5,t,t.return)}catch(p){ue(t,t.return,p)}}break;case 1:at(e,t),gt(t),n&512&&i!==null&&Qi(i,i.return);break;case 5:if(at(e,t),gt(t),n&512&&i!==null&&Qi(i,i.return),t.flags&32){var s=t.stateNode;try{ts(s,"")}catch(p){ue(t,t.return,p)}}if(n&4&&(s=t.stateNode,s!=null)){var r=t.memoizedProps,l=i!==null?i.memoizedProps:r,c=t.type,o=t.updateQueue;if(t.updateQueue=null,o!==null)try{c==="input"&&r.type==="radio"&&r.name!=null&&Jd(s,r),Ia(c,l);var u=Ia(c,r);for(l=0;l<o.length;l+=2){var h=o[l],d=o[l+1];h==="style"?sf(s,d):h==="dangerouslySetInnerHTML"?tf(s,d):h==="children"?ts(s,d):Ko(s,h,d,u)}switch(c){case"input":Ra(s,r);break;case"textarea":Zd(s,r);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var m=r.value;m!=null?Zi(s,!!r.multiple,m,!1):f!==!!r.multiple&&(r.defaultValue!=null?Zi(s,!!r.multiple,r.defaultValue,!0):Zi(s,!!r.multiple,r.multiple?[]:"",!1))}s[us]=r}catch(p){ue(t,t.return,p)}}break;case 6:if(at(e,t),gt(t),n&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,r=t.memoizedProps;try{s.nodeValue=r}catch(p){ue(t,t.return,p)}}break;case 3:if(at(e,t),gt(t),n&4&&i!==null&&i.memoizedState.isDehydrated)try{rs(e.containerInfo)}catch(p){ue(t,t.return,p)}break;case 4:at(e,t),gt(t);break;case 13:at(e,t),gt(t),s=t.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(Cc=fe())),n&4&&eh(t);break;case 22:if(h=i!==null&&i.memoizedState!==null,t.mode&1?(Te=(u=Te)||h,at(e,t),Te=u):at(e,t),gt(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for($=t,h=t.child;h!==null;){for(d=$=h;$!==null;){switch(f=$,m=f.child,f.tag){case 0:case 11:case 14:case 15:Kn(4,f,f.return);break;case 1:Qi(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){n=f,i=f.return;try{e=n,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(p){ue(n,i,p)}}break;case 5:Qi(f,f.return);break;case 22:if(f.memoizedState!==null){ih(d);continue}}m!==null?(m.return=f,$=m):ih(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{s=d.stateNode,u?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(c=d.stateNode,o=d.memoizedProps.style,l=o!=null&&o.hasOwnProperty("display")?o.display:null,c.style.display=nf("display",l))}catch(p){ue(t,t.return,p)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(p){ue(t,t.return,p)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:at(e,t),gt(t),n&4&&eh(t);break;case 21:break;default:at(e,t),gt(t)}}function gt(t){var e=t.flags;if(e&2){try{e:{for(var i=t.return;i!==null;){if(Mp(i)){var n=i;break e}i=i.return}throw Error(z(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(ts(s,""),n.flags&=-33);var r=Zu(t);go(t,r,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Zu(t);mo(t,c,l);break;default:throw Error(z(161))}}catch(o){ue(t,t.return,o)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hv(t,e,i){$=t,Pp(t)}function Pp(t,e,i){for(var n=(t.mode&1)!==0;$!==null;){var s=$,r=s.child;if(s.tag===22&&n){var l=s.memoizedState!==null||Gs;if(!l){var c=s.alternate,o=c!==null&&c.memoizedState!==null||Te;c=Gs;var u=Te;if(Gs=l,(Te=o)&&!u)for($=s;$!==null;)l=$,o=l.child,l.tag===22&&l.memoizedState!==null?nh(s):o!==null?(o.return=l,$=o):nh(s);for(;r!==null;)$=r,Pp(r),r=r.sibling;$=s,Gs=c,Te=u}th(t)}else s.subtreeFlags&8772&&r!==null?(r.return=s,$=r):th(t)}}function th(t){for(;$!==null;){var e=$;if(e.flags&8772){var i=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Te||ml(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Te)if(i===null)n.componentDidMount();else{var s=e.elementType===e.type?i.memoizedProps:ot(e.type,i.memoizedProps);n.componentDidUpdate(s,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&Iu(e,r,n);break;case 3:var l=e.updateQueue;if(l!==null){if(i=null,e.child!==null)switch(e.child.tag){case 5:i=e.child.stateNode;break;case 1:i=e.child.stateNode}Iu(e,l,i)}break;case 5:var c=e.stateNode;if(i===null&&e.flags&4){i=c;var o=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&i.focus();break;case"img":o.src&&(i.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&rs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Te||e.flags&512&&po(e)}catch(f){ue(e,e.return,f)}}if(e===t){$=null;break}if(i=e.sibling,i!==null){i.return=e.return,$=i;break}$=e.return}}function ih(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var i=e.sibling;if(i!==null){i.return=e.return,$=i;break}$=e.return}}function nh(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var i=e.return;try{ml(4,e)}catch(o){ue(e,i,o)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var s=e.return;try{n.componentDidMount()}catch(o){ue(e,s,o)}}var r=e.return;try{po(e)}catch(o){ue(e,r,o)}break;case 5:var l=e.return;try{po(e)}catch(o){ue(e,l,o)}}}catch(o){ue(e,e.return,o)}if(e===t){$=null;break}var c=e.sibling;if(c!==null){c.return=e.return,$=c;break}$=e.return}}var dv=Math.ceil,Yr=$t.ReactCurrentDispatcher,Sc=$t.ReactCurrentOwner,st=$t.ReactCurrentBatchConfig,X=0,be=null,me=null,Ce=0,qe=0,Yi=ai(0),xe=0,gs=null,Ci=0,gl=0,Nc=0,Xn=null,Ie=null,Cc=0,pn=1/0,St=null,Gr=!1,vo=null,Jt=null,Js=!1,Ht=null,Jr=0,Qn=0,xo=null,Sr=-1,Nr=0;function $e(){return X&6?fe():Sr!==-1?Sr:Sr=fe()}function Zt(t){return t.mode&1?X&2&&Ce!==0?Ce&-Ce:Q0.transition!==null?(Nr===0&&(Nr=gf()),Nr):(t=Q,t!==0||(t=window.event,t=t===void 0?16:jf(t.type)),t):1}function dt(t,e,i,n){if(50<Qn)throw Qn=0,xo=null,Error(z(185));Es(t,i,n),(!(X&2)||t!==be)&&(t===be&&(!(X&2)&&(gl|=i),xe===4&&Ut(t,Ce)),Ue(t,n),i===1&&X===0&&!(e.mode&1)&&(pn=fe()+500,dl&&oi()))}function Ue(t,e){var i=t.callbackNode;Qg(t,e);var n=$r(t,t===be?Ce:0);if(n===0)i!==null&&du(i),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(i!=null&&du(i),e===1)t.tag===0?X0(sh.bind(null,t)):Vf(sh.bind(null,t)),W0(function(){!(X&6)&&oi()}),i=null;else{switch(vf(n)){case 1:i=Jo;break;case 4:i=pf;break;case 16:i=Rr;break;case 536870912:i=mf;break;default:i=Rr}i=Op(i,Lp.bind(null,t))}t.callbackPriority=e,t.callbackNode=i}}function Lp(t,e){if(Sr=-1,Nr=0,X&6)throw Error(z(327));var i=t.callbackNode;if(rn()&&t.callbackNode!==i)return null;var n=$r(t,t===be?Ce:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Zr(t,n);else{e=n;var s=X;X|=2;var r=$p();(be!==t||Ce!==e)&&(St=null,pn=fe()+500,wi(t,e));do try{mv();break}catch(c){Rp(t,c)}while(!0);hc(),Yr.current=r,X=s,me!==null?e=0:(be=null,Ce=0,e=xe)}if(e!==0){if(e===2&&(s=Wa(t),s!==0&&(n=s,e=yo(t,s))),e===1)throw i=gs,wi(t,0),Ut(t,n),Ue(t,fe()),i;if(e===6)Ut(t,n);else{if(s=t.current.alternate,!(n&30)&&!fv(s)&&(e=Zr(t,n),e===2&&(r=Wa(t),r!==0&&(n=r,e=yo(t,r))),e===1))throw i=gs,wi(t,0),Ut(t,n),Ue(t,fe()),i;switch(t.finishedWork=s,t.finishedLanes=n,e){case 0:case 1:throw Error(z(345));case 2:mi(t,Ie,St);break;case 3:if(Ut(t,n),(n&130023424)===n&&(e=Cc+500-fe(),10<e)){if($r(t,0)!==0)break;if(s=t.suspendedLanes,(s&n)!==n){$e(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Ja(mi.bind(null,t,Ie,St),e);break}mi(t,Ie,St);break;case 4:if(Ut(t,n),(n&4194240)===n)break;for(e=t.eventTimes,s=-1;0<n;){var l=31-ht(n);r=1<<l,l=e[l],l>s&&(s=l),n&=~r}if(n=s,n=fe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*dv(n/1960))-n,10<n){t.timeoutHandle=Ja(mi.bind(null,t,Ie,St),n);break}mi(t,Ie,St);break;case 5:mi(t,Ie,St);break;default:throw Error(z(329))}}}return Ue(t,fe()),t.callbackNode===i?Lp.bind(null,t):null}function yo(t,e){var i=Xn;return t.current.memoizedState.isDehydrated&&(wi(t,e).flags|=256),t=Zr(t,e),t!==2&&(e=Ie,Ie=i,e!==null&&wo(e)),t}function wo(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function fv(t){for(var e=t;;){if(e.flags&16384){var i=e.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var s=i[n],r=s.getSnapshot;s=s.value;try{if(!ft(r(),s))return!1}catch{return!1}}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ut(t,e){for(e&=~Nc,e&=~gl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var i=31-ht(e),n=1<<i;t[i]=-1,e&=~n}}function sh(t){if(X&6)throw Error(z(327));rn();var e=$r(t,0);if(!(e&1))return Ue(t,fe()),null;var i=Zr(t,e);if(t.tag!==0&&i===2){var n=Wa(t);n!==0&&(e=n,i=yo(t,n))}if(i===1)throw i=gs,wi(t,0),Ut(t,e),Ue(t,fe()),i;if(i===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mi(t,Ie,St),Ue(t,fe()),null}function Ec(t,e){var i=X;X|=1;try{return t(e)}finally{X=i,X===0&&(pn=fe()+500,dl&&oi())}}function Ei(t){Ht!==null&&Ht.tag===0&&!(X&6)&&rn();var e=X;X|=1;var i=st.transition,n=Q;try{if(st.transition=null,Q=1,t)return t()}finally{Q=n,st.transition=i,X=e,!(X&6)&&oi()}}function zc(){qe=Yi.current,ie(Yi)}function wi(t,e){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,U0(i)),me!==null)for(i=me.return;i!==null;){var n=i;switch(oc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Or();break;case 3:dn(),ie(Fe),ie(Pe),vc();break;case 5:gc(n);break;case 4:dn();break;case 13:ie(re);break;case 19:ie(re);break;case 10:dc(n.type._context);break;case 22:case 23:zc()}i=i.return}if(be=t,me=t=ei(t.current,null),Ce=qe=e,xe=0,gs=null,Nc=gl=Ci=0,Ie=Xn=null,xi!==null){for(e=0;e<xi.length;e++)if(i=xi[e],n=i.interleaved,n!==null){i.interleaved=null;var s=n.next,r=i.pending;if(r!==null){var l=r.next;r.next=s,n.next=l}i.pending=n}xi=null}return t}function Rp(t,e){do{var i=me;try{if(hc(),br.current=Qr,Xr){for(var n=le.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Xr=!1}if(Ni=0,we=ve=le=null,qn=!1,fs=0,Sc.current=null,i===null||i.return===null){xe=1,gs=e,me=null;break}e:{var r=t,l=i.return,c=i,o=e;if(e=Ce,c.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var u=o,h=c,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Hu(l);if(m!==null){m.flags&=-257,qu(m,l,c,r,e),m.mode&1&&Wu(r,u,e),e=m,o=u;var g=e.updateQueue;if(g===null){var p=new Set;p.add(o),e.updateQueue=p}else g.add(o);break e}else{if(!(e&1)){Wu(r,u,e),Mc();break e}o=Error(z(426))}}else if(ne&&c.mode&1){var w=Hu(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),qu(w,l,c,r,e),cc(fn(o,c));break e}}r=o=fn(o,c),xe!==4&&(xe=2),Xn===null?Xn=[r]:Xn.push(r),r=l;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var v=vp(r,o,e);Au(r,v);break e;case 1:c=o;var x=r.type,y=r.stateNode;if(!(r.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Jt===null||!Jt.has(y)))){r.flags|=65536,e&=-e,r.lanes|=e;var b=xp(r,c,e);Au(r,b);break e}}r=r.return}while(r!==null)}Bp(i)}catch(j){e=j,me===i&&i!==null&&(me=i=i.return);continue}break}while(!0)}function $p(){var t=Yr.current;return Yr.current=Qr,t===null?Qr:t}function Mc(){(xe===0||xe===3||xe===2)&&(xe=4),be===null||!(Ci&268435455)&&!(gl&268435455)||Ut(be,Ce)}function Zr(t,e){var i=X;X|=2;var n=$p();(be!==t||Ce!==e)&&(St=null,wi(t,e));do try{pv();break}catch(s){Rp(t,s)}while(!0);if(hc(),X=i,Yr.current=n,me!==null)throw Error(z(261));return be=null,Ce=0,xe}function pv(){for(;me!==null;)Dp(me)}function mv(){for(;me!==null&&!Og();)Dp(me)}function Dp(t){var e=Ip(t.alternate,t,qe);t.memoizedProps=t.pendingProps,e===null?Bp(t):me=e,Sc.current=null}function Bp(t){var e=t;do{var i=e.alternate;if(t=e.return,e.flags&32768){if(i=ov(i,e),i!==null){i.flags&=32767,me=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,me=null;return}}else if(i=av(i,e,qe),i!==null){me=i;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);xe===0&&(xe=5)}function mi(t,e,i){var n=Q,s=st.transition;try{st.transition=null,Q=1,gv(t,e,i,n)}finally{st.transition=s,Q=n}return null}function gv(t,e,i,n){do rn();while(Ht!==null);if(X&6)throw Error(z(327));i=t.finishedWork;var s=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var r=i.lanes|i.childLanes;if(Yg(t,r),t===be&&(me=be=null,Ce=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Js||(Js=!0,Op(Rr,function(){return rn(),null})),r=(i.flags&15990)!==0,i.subtreeFlags&15990||r){r=st.transition,st.transition=null;var l=Q;Q=1;var c=X;X|=4,Sc.current=null,uv(t,i),Tp(i,t),D0(Ya),Dr=!!Qa,Ya=Qa=null,t.current=i,hv(i),Fg(),X=c,Q=l,st.transition=r}else t.current=i;if(Js&&(Js=!1,Ht=t,Jr=s),r=t.pendingLanes,r===0&&(Jt=null),Wg(i.stateNode),Ue(t,fe()),e!==null)for(n=t.onRecoverableError,i=0;i<e.length;i++)s=e[i],n(s.value,{componentStack:s.stack,digest:s.digest});if(Gr)throw Gr=!1,t=vo,vo=null,t;return Jr&1&&t.tag!==0&&rn(),r=t.pendingLanes,r&1?t===xo?Qn++:(Qn=0,xo=t):Qn=0,oi(),null}function rn(){if(Ht!==null){var t=vf(Jr),e=st.transition,i=Q;try{if(st.transition=null,Q=16>t?16:t,Ht===null)var n=!1;else{if(t=Ht,Ht=null,Jr=0,X&6)throw Error(z(331));var s=X;for(X|=4,$=t.current;$!==null;){var r=$,l=r.child;if($.flags&16){var c=r.deletions;if(c!==null){for(var o=0;o<c.length;o++){var u=c[o];for($=u;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:Kn(8,h,r)}var d=h.child;if(d!==null)d.return=h,$=d;else for(;$!==null;){h=$;var f=h.sibling,m=h.return;if(zp(h),h===u){$=null;break}if(f!==null){f.return=m,$=f;break}$=m}}}var g=r.alternate;if(g!==null){var p=g.child;if(p!==null){g.child=null;do{var w=p.sibling;p.sibling=null,p=w}while(p!==null)}}$=r}}if(r.subtreeFlags&2064&&l!==null)l.return=r,$=l;else e:for(;$!==null;){if(r=$,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Kn(9,r,r.return)}var v=r.sibling;if(v!==null){v.return=r.return,$=v;break e}$=r.return}}var x=t.current;for($=x;$!==null;){l=$;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,$=y;else e:for(l=x;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ml(9,c)}}catch(j){ue(c,c.return,j)}if(c===l){$=null;break e}var b=c.sibling;if(b!==null){b.return=c.return,$=b;break e}$=c.return}}if(X=s,oi(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(al,t)}catch{}n=!0}return n}finally{Q=i,st.transition=e}}return!1}function rh(t,e,i){e=fn(i,e),e=vp(t,e,1),t=Gt(t,e,1),e=$e(),t!==null&&(Es(t,1,e),Ue(t,e))}function ue(t,e,i){if(t.tag===3)rh(t,t,i);else for(;e!==null;){if(e.tag===3){rh(e,t,i);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Jt===null||!Jt.has(n))){t=fn(i,t),t=xp(e,t,1),e=Gt(e,t,1),t=$e(),e!==null&&(Es(e,1,t),Ue(e,t));break}}e=e.return}}function vv(t,e,i){var n=t.pingCache;n!==null&&n.delete(e),e=$e(),t.pingedLanes|=t.suspendedLanes&i,be===t&&(Ce&i)===i&&(xe===4||xe===3&&(Ce&130023424)===Ce&&500>fe()-Cc?wi(t,0):Nc|=i),Ue(t,e)}function Ap(t,e){e===0&&(t.mode&1?(e=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):e=1);var i=$e();t=Lt(t,e),t!==null&&(Es(t,e,i),Ue(t,i))}function xv(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),Ap(t,i)}function yv(t,e){var i=0;switch(t.tag){case 13:var n=t.stateNode,s=t.memoizedState;s!==null&&(i=s.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(z(314))}n!==null&&n.delete(e),Ap(t,i)}var Ip;Ip=function(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fe.current)Oe=!0;else{if(!(t.lanes&i)&&!(e.flags&128))return Oe=!1,lv(t,e,i);Oe=!!(t.flags&131072)}else Oe=!1,ne&&e.flags&1048576&&Uf(e,Ur,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;jr(t,e),t=e.pendingProps;var s=cn(e,Pe.current);sn(e,i),s=yc(null,e,n,t,s,i);var r=wc();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ve(n)?(r=!0,Fr(e)):r=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,pc(e),s.updater=pl,e.stateNode=s,s._reactInternals=e,ro(e,n,t,i),e=oo(null,e,n,!0,r,i)):(e.tag=0,ne&&r&&ac(e),Re(null,e,s,i),e=e.child),e;case 16:n=e.elementType;e:{switch(jr(t,e),t=e.pendingProps,s=n._init,n=s(n._payload),e.type=n,s=e.tag=bv(n),t=ot(n,t),s){case 0:e=ao(null,e,n,t,i);break e;case 1:e=Qu(null,e,n,t,i);break e;case 11:e=Ku(null,e,n,t,i);break e;case 14:e=Xu(null,e,n,ot(n.type,t),i);break e}throw Error(z(306,n,""))}return e;case 0:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:ot(n,s),ao(t,e,n,s,i);case 1:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:ot(n,s),Qu(t,e,n,s,i);case 3:e:{if(kp(e),t===null)throw Error(z(387));n=e.pendingProps,r=e.memoizedState,s=r.element,Qf(t,e),qr(e,n,null,i);var l=e.memoizedState;if(n=l.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){s=fn(Error(z(423)),e),e=Yu(t,e,n,i,s);break e}else if(n!==s){s=fn(Error(z(424)),e),e=Yu(t,e,n,i,s);break e}else for(Ke=Yt(e.stateNode.containerInfo.firstChild),Xe=e,ne=!0,ut=null,i=Kf(e,null,n,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(un(),n===s){e=Rt(t,e,i);break e}Re(t,e,n,i)}e=e.child}return e;case 5:return Yf(e),t===null&&io(e),n=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,l=s.children,Ga(n,s)?l=null:r!==null&&Ga(n,r)&&(e.flags|=32),bp(t,e),Re(t,e,l,i),e.child;case 6:return t===null&&io(e),null;case 13:return jp(t,e,i);case 4:return mc(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=hn(e,null,n,i):Re(t,e,n,i),e.child;case 11:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:ot(n,s),Ku(t,e,n,s,i);case 7:return Re(t,e,e.pendingProps,i),e.child;case 8:return Re(t,e,e.pendingProps.children,i),e.child;case 12:return Re(t,e,e.pendingProps.children,i),e.child;case 10:e:{if(n=e.type._context,s=e.pendingProps,r=e.memoizedProps,l=s.value,J(Wr,n._currentValue),n._currentValue=l,r!==null)if(ft(r.value,l)){if(r.children===s.children&&!Fe.current){e=Rt(t,e,i);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){l=r.child;for(var o=c.firstContext;o!==null;){if(o.context===n){if(r.tag===1){o=_t(-1,i&-i),o.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?o.next=o:(o.next=h.next,h.next=o),u.pending=o}}r.lanes|=i,o=r.alternate,o!==null&&(o.lanes|=i),no(r.return,i,e),c.lanes|=i;break}o=o.next}}else if(r.tag===10)l=r.type===e.type?null:r.child;else if(r.tag===18){if(l=r.return,l===null)throw Error(z(341));l.lanes|=i,c=l.alternate,c!==null&&(c.lanes|=i),no(l,i,e),l=r.sibling}else l=r.child;if(l!==null)l.return=r;else for(l=r;l!==null;){if(l===e){l=null;break}if(r=l.sibling,r!==null){r.return=l.return,l=r;break}l=l.return}r=l}Re(t,e,s.children,i),e=e.child}return e;case 9:return s=e.type,n=e.pendingProps.children,sn(e,i),s=rt(s),n=n(s),e.flags|=1,Re(t,e,n,i),e.child;case 14:return n=e.type,s=ot(n,e.pendingProps),s=ot(n.type,s),Xu(t,e,n,s,i);case 15:return yp(t,e,e.type,e.pendingProps,i);case 17:return n=e.type,s=e.pendingProps,s=e.elementType===n?s:ot(n,s),jr(t,e),e.tag=1,Ve(n)?(t=!0,Fr(e)):t=!1,sn(e,i),gp(e,n,s),ro(e,n,s,i),oo(null,e,n,!0,t,i);case 19:return Sp(t,e,i);case 22:return wp(t,e,i)}throw Error(z(156,e.tag))};function Op(t,e){return ff(t,e)}function wv(t,e,i,n){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(t,e,i,n){return new wv(t,e,i,n)}function _c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bv(t){if(typeof t=="function")return _c(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qo)return 11;if(t===Yo)return 14}return 2}function ei(t,e){var i=t.alternate;return i===null?(i=nt(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function Cr(t,e,i,n,s,r){var l=2;if(n=t,typeof t=="function")_c(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case Oi:return bi(i.children,s,r,e);case Xo:l=8,s|=8;break;case Ma:return t=nt(12,i,e,s|2),t.elementType=Ma,t.lanes=r,t;case _a:return t=nt(13,i,e,s),t.elementType=_a,t.lanes=r,t;case Ta:return t=nt(19,i,e,s),t.elementType=Ta,t.lanes=r,t;case Qd:return vl(i,s,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kd:l=10;break e;case Xd:l=9;break e;case Qo:l=11;break e;case Yo:l=14;break e;case Ot:l=16,n=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=nt(l,i,e,s),e.elementType=t,e.type=n,e.lanes=r,e}function bi(t,e,i,n){return t=nt(7,t,n,e),t.lanes=i,t}function vl(t,e,i,n){return t=nt(22,t,n,e),t.elementType=Qd,t.lanes=i,t.stateNode={isHidden:!1},t}function na(t,e,i){return t=nt(6,t,null,e),t.lanes=i,t}function sa(t,e,i){return e=nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kv(t,e,i,n,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Al(0),this.expirationTimes=Al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Al(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Tc(t,e,i,n,s,r,l,c,o){return t=new kv(t,e,i,c,o),e===1?(e=1,r===!0&&(e|=8)):e=0,r=nt(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},pc(r),t}function jv(t,e,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ii,key:n==null?null:""+n,children:t,containerInfo:e,implementation:i}}function Fp(t){if(!t)return si;t=t._reactInternals;e:{if($i(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ve(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var i=t.type;if(Ve(i))return Ff(t,i,e)}return e}function Vp(t,e,i,n,s,r,l,c,o){return t=Tc(i,n,!0,t,s,r,l,c,o),t.context=Fp(null),i=t.current,n=$e(),s=Zt(i),r=_t(n,s),r.callback=e??null,Gt(i,r,s),t.current.lanes=s,Es(t,s,n),Ue(t,n),t}function xl(t,e,i,n){var s=e.current,r=$e(),l=Zt(s);return i=Fp(i),e.context===null?e.context=i:e.pendingContext=i,e=_t(r,l),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=Gt(s,e,l),t!==null&&(dt(t,s,l,r),wr(t,s,l)),l}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Pc(t,e){lh(t,e),(t=t.alternate)&&lh(t,e)}function Sv(){return null}var Up=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lc(t){this._internalRoot=t}yl.prototype.render=Lc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));xl(t,e,null,null)};yl.prototype.unmount=Lc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ei(function(){xl(null,t,null,null)}),e[Pt]=null}};function yl(t){this._internalRoot=t}yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=wf();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Vt.length&&e!==0&&e<Vt[i].priority;i++);Vt.splice(i,0,t),i===0&&kf(t)}};function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ah(){}function Nv(t,e,i,n,s){if(s){if(typeof n=="function"){var r=n;n=function(){var u=el(l);r.call(u)}}var l=Vp(e,n,t,0,null,!1,!1,"",ah);return t._reactRootContainer=l,t[Pt]=l.current,os(t.nodeType===8?t.parentNode:t),Ei(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof n=="function"){var c=n;n=function(){var u=el(o);c.call(u)}}var o=Tc(t,0,!1,null,null,!1,!1,"",ah);return t._reactRootContainer=o,t[Pt]=o.current,os(t.nodeType===8?t.parentNode:t),Ei(function(){xl(e,o,i,n)}),o}function bl(t,e,i,n,s){var r=i._reactRootContainer;if(r){var l=r;if(typeof s=="function"){var c=s;s=function(){var o=el(l);c.call(o)}}xl(e,l,t,s)}else l=Nv(i,e,t,s,n);return el(l)}xf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var i=An(e.pendingLanes);i!==0&&(Zo(e,i|1),Ue(e,fe()),!(X&6)&&(pn=fe()+500,oi()))}break;case 13:Ei(function(){var n=Lt(t,1);if(n!==null){var s=$e();dt(n,t,1,s)}}),Pc(t,1)}};ec=function(t){if(t.tag===13){var e=Lt(t,134217728);if(e!==null){var i=$e();dt(e,t,134217728,i)}Pc(t,134217728)}};yf=function(t){if(t.tag===13){var e=Zt(t),i=Lt(t,e);if(i!==null){var n=$e();dt(i,t,e,n)}Pc(t,e)}};wf=function(){return Q};bf=function(t,e){var i=Q;try{return Q=t,e()}finally{Q=i}};Fa=function(t,e,i){switch(e){case"input":if(Ra(t,i),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<i.length;e++){var n=i[e];if(n!==t&&n.form===t.form){var s=hl(n);if(!s)throw Error(z(90));Gd(n),Ra(n,s)}}}break;case"textarea":Zd(t,i);break;case"select":e=i.value,e!=null&&Zi(t,!!i.multiple,e,!1)}};af=Ec;of=Ei;var Cv={usingClientEntryPoint:!1,Events:[Ms,Wi,hl,rf,lf,Ec]},Rn={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ev={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hf(t),t===null?null:t.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||Sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{al=Zs.inject(Ev),bt=Zs}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv;Ye.createPortal=function(t,e){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rc(e))throw Error(z(200));return jv(t,e,null,i)};Ye.createRoot=function(t,e){if(!Rc(t))throw Error(z(299));var i=!1,n="",s=Up;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Tc(t,1,!1,null,null,i,!1,n,s),t[Pt]=e.current,os(t.nodeType===8?t.parentNode:t),new Lc(e)};Ye.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=hf(e),t=t===null?null:t.stateNode,t};Ye.flushSync=function(t){return Ei(t)};Ye.hydrate=function(t,e,i){if(!wl(e))throw Error(z(200));return bl(null,t,e,!0,i)};Ye.hydrateRoot=function(t,e,i){if(!Rc(t))throw Error(z(405));var n=i!=null&&i.hydratedSources||null,s=!1,r="",l=Up;if(i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onRecoverableError!==void 0&&(l=i.onRecoverableError)),e=Vp(e,null,t,1,i??null,s,!1,r,l),t[Pt]=e.current,os(t),n)for(t=0;t<n.length;t++)i=n[t],s=i._getVersion,s=s(i._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[i,s]:e.mutableSourceEagerHydrationData.push(i,s);return new yl(e)};Ye.render=function(t,e,i){if(!wl(e))throw Error(z(200));return bl(null,t,e,!1,i)};Ye.unmountComponentAtNode=function(t){if(!wl(t))throw Error(z(40));return t._reactRootContainer?(Ei(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[Pt]=null})}),!0):!1};Ye.unstable_batchedUpdates=Ec;Ye.unstable_renderSubtreeIntoContainer=function(t,e,i,n){if(!wl(i))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return bl(t,e,i,!1,n)};Ye.version="18.3.1-next-f1338f8080-20240426";function Wp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wp)}catch(t){console.error(t)}}Wp(),Ud.exports=Ye;var zv=Ud.exports,oh=zv;Ea.createRoot=oh.createRoot,Ea.hydrateRoot=oh.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},vs.apply(this,arguments)}var qt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(qt||(qt={}));const ch="popstate";function Mv(t){t===void 0&&(t={});function e(n,s){let{pathname:r,search:l,hash:c}=n.location;return bo("",{pathname:r,search:l,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(n,s){return typeof s=="string"?s:tl(s)}return Tv(e,i,null,t)}function ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $c(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _v(){return Math.random().toString(36).substr(2,8)}function uh(t,e){return{usr:t.state,key:t.key,idx:e}}function bo(t,e,i,n){return i===void 0&&(i=null),vs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?kn(e):e,{state:i,key:e&&e.key||n||_v()})}function tl(t){let{pathname:e="/",search:i="",hash:n=""}=t;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function kn(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substr(i),t=t.substr(0,i));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function Tv(t,e,i,n){n===void 0&&(n={});let{window:s=document.defaultView,v5Compat:r=!1}=n,l=s.history,c=qt.Pop,o=null,u=h();u==null&&(u=0,l.replaceState(vs({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function d(){c=qt.Pop;let w=h(),v=w==null?null:w-u;u=w,o&&o({action:c,location:p.location,delta:v})}function f(w,v){c=qt.Push;let x=bo(p.location,w,v);u=h()+1;let y=uh(x,u),b=p.createHref(x);try{l.pushState(y,"",b)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(b)}r&&o&&o({action:c,location:p.location,delta:1})}function m(w,v){c=qt.Replace;let x=bo(p.location,w,v);u=h();let y=uh(x,u),b=p.createHref(x);l.replaceState(y,"",b),r&&o&&o({action:c,location:p.location,delta:0})}function g(w){let v=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof w=="string"?w:tl(w);return x=x.replace(/ $/,"%20"),ae(v,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,v)}let p={get action(){return c},get location(){return t(s,l)},listen(w){if(o)throw new Error("A history only accepts one active listener");return s.addEventListener(ch,d),o=w,()=>{s.removeEventListener(ch,d),o=null}},createHref(w){return e(s,w)},createURL:g,encodeLocation(w){let v=g(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:m,go(w){return l.go(w)}};return p}var hh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hh||(hh={}));function Pv(t,e,i){return i===void 0&&(i="/"),Lv(t,e,i)}function Lv(t,e,i,n){let s=typeof e=="string"?kn(e):e,r=mn(s.pathname||"/",i);if(r==null)return null;let l=Hp(t);Rv(l);let c=null;for(let o=0;c==null&&o<l.length;++o){let u=Hv(r);c=Uv(l[o],u)}return c}function Hp(t,e,i,n){e===void 0&&(e=[]),i===void 0&&(i=[]),n===void 0&&(n="");let s=(r,l,c)=>{let o={relativePath:c===void 0?r.path||"":c,caseSensitive:r.caseSensitive===!0,childrenIndex:l,route:r};o.relativePath.startsWith("/")&&(ae(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(n.length));let u=ti([n,o.relativePath]),h=i.concat(o);r.children&&r.children.length>0&&(ae(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hp(r.children,e,h,u)),!(r.path==null&&!r.index)&&e.push({path:u,score:Fv(u,r.index),routesMeta:h})};return t.forEach((r,l)=>{var c;if(r.path===""||!((c=r.path)!=null&&c.includes("?")))s(r,l);else for(let o of qp(r.path))s(r,l,o)}),e}function qp(t){let e=t.split("/");if(e.length===0)return[];let[i,...n]=e,s=i.endsWith("?"),r=i.replace(/\?$/,"");if(n.length===0)return s?[r,""]:[r];let l=qp(n.join("/")),c=[];return c.push(...l.map(o=>o===""?r:[r,o].join("/"))),s&&c.push(...l),c.map(o=>t.startsWith("/")&&o===""?"/":o)}function Rv(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:Vv(e.routesMeta.map(n=>n.childrenIndex),i.routesMeta.map(n=>n.childrenIndex)))}const $v=/^:[\w-]+$/,Dv=3,Bv=2,Av=1,Iv=10,Ov=-2,dh=t=>t==="*";function Fv(t,e){let i=t.split("/"),n=i.length;return i.some(dh)&&(n+=Ov),e&&(n+=Bv),i.filter(s=>!dh(s)).reduce((s,r)=>s+($v.test(r)?Dv:r===""?Av:Iv),n)}function Vv(t,e){return t.length===e.length&&t.slice(0,-1).every((n,s)=>n===e[s])?t[t.length-1]-e[e.length-1]:0}function Uv(t,e,i){let{routesMeta:n}=t,s={},r="/",l=[];for(let c=0;c<n.length;++c){let o=n[c],u=c===n.length-1,h=r==="/"?e:e.slice(r.length)||"/",d=ko({path:o.relativePath,caseSensitive:o.caseSensitive,end:u},h),f=o.route;if(!d)return null;Object.assign(s,d.params),l.push({params:s,pathname:ti([r,d.pathname]),pathnameBase:Yv(ti([r,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(r=ti([r,d.pathnameBase]))}return l}function ko(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,n]=Wv(t.path,t.caseSensitive,t.end),s=e.match(i);if(!s)return null;let r=s[0],l=r.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:n.reduce((u,h,d)=>{let{paramName:f,isOptional:m}=h;if(f==="*"){let p=c[d]||"";l=r.slice(0,r.length-p.length).replace(/(.)\/+$/,"$1")}const g=c[d];return m&&!g?u[f]=void 0:u[f]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:l,pattern:t}}function Wv(t,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),$c(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,o)=>(n.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),n]}function Hv(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $c(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function mn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,n=t.charAt(i);return n&&n!=="/"?null:t.slice(i)||"/"}const qv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kv=t=>qv.test(t);function Xv(t,e){e===void 0&&(e="/");let{pathname:i,search:n="",hash:s=""}=typeof t=="string"?kn(t):t,r;if(i)if(Kv(i))r=i;else{if(i.includes("//")){let l=i;i=i.replace(/\/\/+/g,"/"),$c(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+i))}i.startsWith("/")?r=fh(i.substring(1),"/"):r=fh(i,e)}else r=e;return{pathname:r,search:Gv(n),hash:Jv(s)}}function fh(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function ra(t,e,i,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qv(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Dc(t,e){let i=Qv(t);return e?i.map((n,s)=>s===i.length-1?n.pathname:n.pathnameBase):i.map(n=>n.pathnameBase)}function Bc(t,e,i,n){n===void 0&&(n=!1);let s;typeof t=="string"?s=kn(t):(s=vs({},t),ae(!s.pathname||!s.pathname.includes("?"),ra("?","pathname","search",s)),ae(!s.pathname||!s.pathname.includes("#"),ra("#","pathname","hash",s)),ae(!s.search||!s.search.includes("#"),ra("#","search","hash",s)));let r=t===""||s.pathname==="",l=r?"/":s.pathname,c;if(l==null)c=i;else{let d=e.length-1;if(!n&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),d-=1;s.pathname=f.join("/")}c=d>=0?e[d]:"/"}let o=Xv(s,c),u=l&&l!=="/"&&l.endsWith("/"),h=(r||l===".")&&i.endsWith("/");return!o.pathname.endsWith("/")&&(u||h)&&(o.pathname+="/"),o}const ti=t=>t.join("/").replace(/\/\/+/g,"/"),Yv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Gv=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Jv=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Zv(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Kp=["post","put","patch","delete"];new Set(Kp);const ex=["get",...Kp];new Set(ex);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xs(){return xs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},xs.apply(this,arguments)}const kl=k.createContext(null),Xp=k.createContext(null),Dt=k.createContext(null),jl=k.createContext(null),ci=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Qp=k.createContext(null);function tx(t,e){let{relative:i}=e===void 0?{}:e;jn()||ae(!1);let{basename:n,navigator:s}=k.useContext(Dt),{hash:r,pathname:l,search:c}=Sl(t,{relative:i}),o=l;return n!=="/"&&(o=l==="/"?n:ti([n,l])),s.createHref({pathname:o,search:c,hash:r})}function jn(){return k.useContext(jl)!=null}function Sn(){return jn()||ae(!1),k.useContext(jl).location}function Yp(t){k.useContext(Dt).static||k.useLayoutEffect(t)}function Gp(){let{isDataRoute:t}=k.useContext(ci);return t?px():ix()}function ix(){jn()||ae(!1);let t=k.useContext(kl),{basename:e,future:i,navigator:n}=k.useContext(Dt),{matches:s}=k.useContext(ci),{pathname:r}=Sn(),l=JSON.stringify(Dc(s,i.v7_relativeSplatPath)),c=k.useRef(!1);return Yp(()=>{c.current=!0}),k.useCallback(function(u,h){if(h===void 0&&(h={}),!c.current)return;if(typeof u=="number"){n.go(u);return}let d=Bc(u,JSON.parse(l),r,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:ti([e,d.pathname])),(h.replace?n.replace:n.push)(d,h.state,h)},[e,n,l,r,t])}function Sl(t,e){let{relative:i}=e===void 0?{}:e,{future:n}=k.useContext(Dt),{matches:s}=k.useContext(ci),{pathname:r}=Sn(),l=JSON.stringify(Dc(s,n.v7_relativeSplatPath));return k.useMemo(()=>Bc(t,JSON.parse(l),r,i==="path"),[t,l,r,i])}function nx(t,e){return sx(t,e)}function sx(t,e,i,n){jn()||ae(!1);let{navigator:s}=k.useContext(Dt),{matches:r}=k.useContext(ci),l=r[r.length-1],c=l?l.params:{};l&&l.pathname;let o=l?l.pathnameBase:"/";l&&l.route;let u=Sn(),h;if(e){var d;let w=typeof e=="string"?kn(e):e;o==="/"||(d=w.pathname)!=null&&d.startsWith(o)||ae(!1),h=w}else h=u;let f=h.pathname||"/",m=f;if(o!=="/"){let w=o.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let g=Pv(t,{pathname:m}),p=cx(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:ti([o,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?o:ti([o,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),r,i,n);return e&&p?k.createElement(jl.Provider,{value:{location:xs({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:qt.Pop}},p):p}function rx(){let t=fx(),e=Zv(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),i?k.createElement("pre",{style:s},i):null,null)}const lx=k.createElement(rx,null);class ax extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?k.createElement(ci.Provider,{value:this.props.routeContext},k.createElement(Qp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ox(t){let{routeContext:e,match:i,children:n}=t,s=k.useContext(kl);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),k.createElement(ci.Provider,{value:e},n)}function cx(t,e,i,n){var s;if(e===void 0&&(e=[]),i===void 0&&(i=null),n===void 0&&(n=null),t==null){var r;if(!i)return null;if(i.errors)t=i.matches;else if((r=n)!=null&&r.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let l=t,c=(s=i)==null?void 0:s.errors;if(c!=null){let h=l.findIndex(d=>d.route.id&&(c==null?void 0:c[d.route.id])!==void 0);h>=0||ae(!1),l=l.slice(0,Math.min(l.length,h+1))}let o=!1,u=-1;if(i&&n&&n.v7_partialHydration)for(let h=0;h<l.length;h++){let d=l[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:f,errors:m}=i,g=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||g){o=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((h,d,f)=>{let m,g=!1,p=null,w=null;i&&(m=c&&d.route.id?c[d.route.id]:void 0,p=d.route.errorElement||lx,o&&(u<0&&f===0?(mx("route-fallback"),g=!0,w=null):u===f&&(g=!0,w=d.route.hydrateFallbackElement||null)));let v=e.concat(l.slice(0,f+1)),x=()=>{let y;return m?y=p:g?y=w:d.route.Component?y=k.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=h,k.createElement(ox,{match:d,routeContext:{outlet:h,matches:v,isDataRoute:i!=null},children:y})};return i&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?k.createElement(ax,{location:i.location,revalidation:i.revalidation,component:p,error:m,children:x(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):x()},null)}var Jp=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Jp||{}),Zp=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zp||{});function ux(t){let e=k.useContext(kl);return e||ae(!1),e}function hx(t){let e=k.useContext(Xp);return e||ae(!1),e}function dx(t){let e=k.useContext(ci);return e||ae(!1),e}function em(t){let e=dx(),i=e.matches[e.matches.length-1];return i.route.id||ae(!1),i.route.id}function fx(){var t;let e=k.useContext(Qp),i=hx(),n=em();return e!==void 0?e:(t=i.errors)==null?void 0:t[n]}function px(){let{router:t}=ux(Jp.UseNavigateStable),e=em(Zp.UseNavigateStable),i=k.useRef(!1);return Yp(()=>{i.current=!0}),k.useCallback(function(s,r){r===void 0&&(r={}),i.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,xs({fromRouteId:e},r)))},[t,e])}const ph={};function mx(t,e,i){ph[t]||(ph[t]=!0)}function gx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function jt(t){let{to:e,replace:i,state:n,relative:s}=t;jn()||ae(!1);let{future:r,static:l}=k.useContext(Dt),{matches:c}=k.useContext(ci),{pathname:o}=Sn(),u=Gp(),h=Bc(e,Dc(c,r.v7_relativeSplatPath),o,s==="path"),d=JSON.stringify(h);return k.useEffect(()=>u(JSON.parse(d),{replace:i,state:n,relative:s}),[u,d,s,i,n]),null}function Ze(t){ae(!1)}function vx(t){let{basename:e="/",children:i=null,location:n,navigationType:s=qt.Pop,navigator:r,static:l=!1,future:c}=t;jn()&&ae(!1);let o=e.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:o,navigator:r,static:l,future:xs({v7_relativeSplatPath:!1},c)}),[o,c,r,l]);typeof n=="string"&&(n=kn(n));let{pathname:h="/",search:d="",hash:f="",state:m=null,key:g="default"}=n,p=k.useMemo(()=>{let w=mn(h,o);return w==null?null:{location:{pathname:w,search:d,hash:f,state:m,key:g},navigationType:s}},[o,h,d,f,m,g,s]);return p==null?null:k.createElement(Dt.Provider,{value:u},k.createElement(jl.Provider,{children:i,value:p}))}function mh(t){let{children:e,location:i}=t;return nx(jo(e),i)}new Promise(()=>{});function jo(t,e){e===void 0&&(e=[]);let i=[];return k.Children.forEach(t,(n,s)=>{if(!k.isValidElement(n))return;let r=[...e,s];if(n.type===k.Fragment){i.push.apply(i,jo(n.props.children,r));return}n.type!==Ze&&ae(!1),!n.props.index||!n.props.children||ae(!1);let l={id:n.props.id||r.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=jo(n.props.children,r)),i.push(l)}),i}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},il.apply(this,arguments)}function tm(t,e){if(t==null)return{};var i={},n=Object.keys(t),s,r;for(r=0;r<n.length;r++)s=n[r],!(e.indexOf(s)>=0)&&(i[s]=t[s]);return i}function xx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yx(t,e){return t.button===0&&(!e||e==="_self")&&!xx(t)}const wx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],kx="6";try{window.__reactRouterVersion=kx}catch{}const jx=k.createContext({isTransitioning:!1}),Sx="startTransition",gh=vg[Sx];function Nx(t){let{basename:e,children:i,future:n,window:s}=t,r=k.useRef();r.current==null&&(r.current=Mv({window:s,v5Compat:!0}));let l=r.current,[c,o]=k.useState({action:l.action,location:l.location}),{v7_startTransition:u}=n||{},h=k.useCallback(d=>{u&&gh?gh(()=>o(d)):o(d)},[o,u]);return k.useLayoutEffect(()=>l.listen(h),[l,h]),k.useEffect(()=>gx(n),[n]),k.createElement(vx,{basename:e,children:i,location:c.location,navigationType:c.action,navigator:l,future:n})}const Cx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,he=k.forwardRef(function(e,i){let{onClick:n,relative:s,reloadDocument:r,replace:l,state:c,target:o,to:u,preventScrollReset:h,viewTransition:d}=e,f=tm(e,wx),{basename:m}=k.useContext(Dt),g,p=!1;if(typeof u=="string"&&Ex.test(u)&&(g=u,Cx))try{let y=new URL(window.location.href),b=u.startsWith("//")?new URL(y.protocol+u):new URL(u),j=mn(b.pathname,m);b.origin===y.origin&&j!=null?u=j+b.search+b.hash:p=!0}catch{}let w=tx(u,{relative:s}),v=Mx(u,{replace:l,state:c,target:o,preventScrollReset:h,relative:s,viewTransition:d});function x(y){n&&n(y),y.defaultPrevented||v(y)}return k.createElement("a",il({},f,{href:g||w,onClick:p||r?n:x,ref:i,target:o}))}),Er=k.forwardRef(function(e,i){let{"aria-current":n="page",caseSensitive:s=!1,className:r="",end:l=!1,style:c,to:o,viewTransition:u,children:h}=e,d=tm(e,bx),f=Sl(o,{relative:d.relative}),m=Sn(),g=k.useContext(Xp),{navigator:p,basename:w}=k.useContext(Dt),v=g!=null&&_x(f)&&u===!0,x=p.encodeLocation?p.encodeLocation(f).pathname:f.pathname,y=m.pathname,b=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;s||(y=y.toLowerCase(),b=b?b.toLowerCase():null,x=x.toLowerCase()),b&&w&&(b=mn(b,w)||b);const j=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let M=y===x||!l&&y.startsWith(x)&&y.charAt(j)==="/",_=b!=null&&(b===x||!l&&b.startsWith(x)&&b.charAt(x.length)==="/"),T={isActive:M,isPending:_,isTransitioning:v},D=M?n:void 0,B;typeof r=="function"?B=r(T):B=[r,M?"active":null,_?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let Z=typeof c=="function"?c(T):c;return k.createElement(he,il({},d,{"aria-current":D,className:B,ref:i,style:Z,to:o,viewTransition:u}),typeof h=="function"?h(T):h)});var So;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(So||(So={}));var vh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vh||(vh={}));function zx(t){let e=k.useContext(kl);return e||ae(!1),e}function Mx(t,e){let{target:i,replace:n,state:s,preventScrollReset:r,relative:l,viewTransition:c}=e===void 0?{}:e,o=Gp(),u=Sn(),h=Sl(t,{relative:l});return k.useCallback(d=>{if(yx(d,i)){d.preventDefault();let f=n!==void 0?n:tl(u)===tl(h);o(t,{replace:f,state:s,preventScrollReset:r,relative:l,viewTransition:c})}},[u,o,h,n,s,i,t,r,l,c])}function _x(t,e){e===void 0&&(e={});let i=k.useContext(jx);i==null&&ae(!1);let{basename:n}=zx(So.useViewTransitionState),s=Sl(t,{relative:e.relative});if(!i.isTransitioning)return!1;let r=mn(i.currentLocation.pathname,n)||i.currentLocation.pathname,l=mn(i.nextLocation.pathname,n)||i.nextLocation.pathname;return ko(s.pathname,l)!=null||ko(s.pathname,r)!=null}const er="bc1qxy2kgdygjrsqtzq2n0r3am9w5vh9q5z8h6v0g7",ln="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23f7931a'/%3E%3Cstop offset='1' stop-color='%23ffb347'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='60' cy='60' r='58' fill='url(%23g)'/%3E%3Cpath fill='white' d='M79.4 51.7c1-6-3.7-9.2-9.9-11.3l2-7.9-4.8-1.2-1.9 7.7c-1.3-.3-2.5-.6-3.8-.9l1.9-7.8-4.8-1.1-2 7.9c-1-.2-1.9-.4-2.8-.7v-.1l-6.6-1.6-1.3 5.1s3.6.8 3.5.9c2 .5 2.4 1.9 2.3 3l-2.2 8.8c.1 0 .3.1.5.1l-.5-.1-3.1 12.6c-.2.7-.8 1.8-2.2 1.5.1.1-3.5-.9-3.5-.9l-2.4 5.5 6.2 1.6c1.2.3 2.4.7 3.6.9l-2 8 4.8 1.2 2-7.9c1.3.4 2.6.7 3.9 1l-2 7.8 4.8 1.2 2-8c8.3 1.6 14.5 1 17.1-6.5 2.1-6 0-9.5-4.4-11.8 3.2-.7 5.6-2.8 6.6-7.1zm-11.8 16.5c-1.5 6-11.5 2.8-14.8 2l2.7-10.8c3.3.8 13.7 2.5 12.1 8.8zm1.5-16.6c-1.4 5.5-9.8 2.7-12.5 2l2.5-9.8c2.7.7 11.5 2.1 10 7.8z'/%3E%3C/svg%3E",xh={id:"user-1",email:"trader@btcplatform.com",name:"Alex Thompson",avatar:ln,password:"password123",btcBalance:.245,usdBalance:15850.75,stakeAmount:2.5,isVerified:!0,verificationStatus:"approved",vipLevel:3,joinedDate:"2024-01-15",role:"user",phone:"+1 234 567 8900",country:"United States",city:"New York",postCode:"10001",job:"Crypto Trader",timezone:"UTC-5",telegram:"@AlexTrader",kyc:{fullName:"Alex Thompson",phone:"+1 234 567 8900",country:"United States",city:"New York",postCode:"10001",job:"Crypto Trader",documentType:"passport",frontImage:"passport-front.jpg",backImage:"passport-back.jpg",status:"approved"}},Tx=[{rank:1,name:"CryptoKing",avatar:"https://randomuser.me/api/portraits/men/57.jpg",profit:156780,winRate:87,trades:1245},{rank:2,name:"DiamondHands",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Diamond",profit:98340,winRate:82,trades:892},{rank:3,name:"WhaleTrader",avatar:"https://randomuser.me/api/portraits/women/63.jpg",profit:87650,winRate:79,trades:1567},{rank:4,name:"MoonWalker",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Moon",profit:65430,winRate:85,trades:723},{rank:5,name:"BullRunner",avatar:"https://randomuser.me/api/portraits/men/41.jpg",profit:54320,winRate:78,trades:1089},{rank:6,name:"SilverFox",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Silver",profit:43210,winRate:81,trades:654},{rank:7,name:"GoldRush",avatar:"https://randomuser.me/api/portraits/women/71.jpg",profit:38760,winRate:76,trades:921},{rank:8,name:"DiamondPro",avatar:"https://api.dicebear.com/7.x/personas/svg?seed=DiamondPro",profit:32100,winRate:83,trades:567},{rank:9,name:"AlphaTrade",avatar:"https://randomuser.me/api/portraits/men/65.jpg",profit:28940,winRate:80,trades:834},{rank:10,name:"BetaWinner",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Beta",profit:25430,winRate:77,trades:712}],de=t=>t.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),No="https://api.exchange.coinbase.com/products/BTC-USD",Px="wss://ws-feed.exchange.coinbase.com",Ac={"1m":60,"5m":300,"15m":900,"1h":3600,"4h":14400,"1D":86400};function Lx(t){return Ac[t]}async function Co(t){const e=await fetch(t,{headers:{Accept:"application/json"}});if(!e.ok)throw new Error(`Market request failed: ${e.status}`);return e.json()}async function Rx(){const[t,e]=await Promise.all([Co(`${No}/ticker`),Co(`${No}/stats`)]),i=Number(t.price||e.last),n=Number(e.open||i),s=Number(e.high||i),r=Number(e.low||i),l=Number(e.volume||0),c=n?(i-n)/n*100:0;return{price:i,open24h:n,change24h:c,high24h:s,low24h:r,volume24h:l,updatedAt:t.time||new Date().toISOString(),source:"live"}}function $x(t,e){const i=new WebSocket(Px);return i.addEventListener("open",()=>{e==null||e("open"),i.send(JSON.stringify({type:"subscribe",product_ids:["BTC-USD"],channels:["ticker","heartbeat"]}))}),i.addEventListener("message",n=>{let s;try{s=JSON.parse(n.data)}catch{return}if(s.type!=="ticker"||s.product_id!=="BTC-USD")return;const r=Number(s.price),l=Number(s.open_24h||r),c=Number(s.high_24h||r),o=Number(s.low_24h||r),u=Number(s.volume_24h||0);Number.isFinite(r)&&t({price:r,open24h:l,change24h:l?(r-l)/l*100:0,high24h:Number.isFinite(c)?c:r,low24h:Number.isFinite(o)?o:r,volume24h:Number.isFinite(u)?u:0,updatedAt:s.time||new Date().toISOString(),source:"live"})}),i.addEventListener("error",()=>{e==null||e("error")}),i.addEventListener("close",()=>{e==null||e("closed")}),()=>{i.close()}}async function Dx(t,e=120){const i=Ac[t],n=new Date,s=new Date(n.getTime()-i*1e3*e),r=new URLSearchParams({granularity:String(i),start:s.toISOString(),end:n.toISOString()});return(await Co(`${No}/candles?${r.toString()}`)).sort((c,o)=>c[0]-o[0]).map(([c,o,u,h,d,f])=>({candle:{time:c,open:h,high:u,low:o,close:d},volume:{time:c,value:f,color:d>=h?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}}))}function yh(t=67500){return{price:t,open24h:t-420,change24h:.62,high24h:t+520,low24h:t-780,volume24h:18250,updatedAt:new Date().toISOString(),source:"fallback"}}function Bx(t,e,i=120){const n=Ac[t],s=Math.floor(Date.now()/1e3),r=[];let l=e;for(let c=i;c>0;c-=1){const o=s-c*n,u=(Math.random()-.48)*(e*.0035),h=l,d=Math.max(1e3,h+u),f=Math.max(h,d)+Math.random()*(e*.0012),m=Math.min(h,d)-Math.random()*(e*.0012),g=Math.random()*240+80;r.push({candle:{time:o,open:h,high:f,low:m,close:d},volume:{time:o,value:g,color:d>=h?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}}),l=d}return r}const Ax=.005;function wh(t,e,i){const n=Math.max(1/e-Ax,.0025);return i==="up"?t*(1-n):t*(1+n)}function im({entryPrice:t,exitPrice:e,amount:i,leverageValue:n,tradeDirection:s}){const r=(e-t)/t,l=s==="up"?r:-r,c=l*n;return{pnl:Math.max(-i,i*c),directionalMovePct:l*100}}/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ix={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),W=(t,e)=>{const i=k.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:l,className:c="",children:o,...u},h)=>k.createElement("svg",{ref:h,...Ix,width:s,height:s,stroke:n,strokeWidth:l?Number(r)*24/Number(s):r,className:["lucide",`lucide-${Ox(t)}`,c].join(" "),...u},[...e.map(([d,f])=>k.createElement(d,f)),...Array.isArray(o)?o:[o]]));return i.displayName=`${t}`,i};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=W("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=W("ArrowDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=W("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=W("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=W("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=W("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=W("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=W("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=W("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=W("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=W("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=W("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=W("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=W("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=W("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=W("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=W("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=W("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=W("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=W("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=W("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=W("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=W("Globe2",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=W("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=W("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=W("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=W("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=W("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=W("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=W("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=W("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=W("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=W("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=W("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=W("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=W("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=W("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=W("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=W("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=W("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=W("Wallet2",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=W("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=W("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=W("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=W("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),l1=[{path:"/",icon:rm,label:"Home"},{path:"/trade",icon:Ts,label:"Trade"},{path:"/finance",icon:zi,label:"Finance"},{path:"/news",icon:ys,label:"News"},{path:"/profile",icon:Ps,label:"Profile"}],a1=[{path:"/admin",icon:Oc,label:"Admin Dashboard"}];function o1(){const{logout:t,user:e}=hi(),i=(e==null?void 0:e.role)==="admin";return a.jsxs("aside",{className:"app-sidebar",children:[a.jsx("style",{children:`
        .app-sidebar {
          width: 260px;
          background: linear-gradient(180deg, #0b0f15, #0a0d12);
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
        }
        .app-sidebar * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .sidebar-logo {
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #f7931a, #ff9500);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-icon span {
          font-size: 22px;
          font-weight: 800;
          color: #000;
        }
        .logo-text h1 {
          font-size: 18px;
          font-weight: 700;
          color: #e8e8e8;
          letter-spacing: -0.5px;
        }
        .logo-text p {
          font-size: 11px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .sidebar-nav {
          flex: 1;
          padding: 16px 12px;
          overflow-y: auto;
        }
        .nav-section {
          margin-bottom: 24px;
        }
        .nav-section-title {
          font-size: 10px;
          font-weight: 700;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0 12px;
          margin-bottom: 8px;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          color: #8894a5;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          margin-bottom: 4px;
          position: relative;
        }
        .nav-item:hover {
          background: #141a24;
          color: #e8eef8;
        }
        .nav-item.active {
          background: linear-gradient(180deg, rgba(20, 33, 52, 0.96), rgba(20, 33, 52, 0.72));
          color: #7cb0ff;
        }
        .nav-item.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 24px;
          background: #3478f6;
          border-radius: 0 3px 3px 0;
        }
        .nav-item-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }
        .nav-item-text {
          flex: 1;
        }
        .nav-item-badge {
          background: #f6465d;
          color: white;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .nav-item-arrow {
          opacity: 0;
          transition: opacity 0.2s;
        }
        .nav-item:hover .nav-item-arrow {
          opacity: 1;
        }
        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .footer-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          border-radius: 8px;
          color: #666;
          text-decoration: none;
          font-size: 13px;
          transition: all 0.2s;
        }
        .footer-item:hover {
          background: #141a24;
          color: #8894a5;
        }
        .logout-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          width: 100%;
          border-radius: 8px;
          color: #f6465d;
          background: transparent;
          border: none;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 8px;
        }
        .logout-btn:hover {
          background: rgba(246, 70, 93, 0.1);
        }
        .admin-section {
          background: linear-gradient(135deg, rgba(52, 120, 246, 0.1), rgba(52, 120, 246, 0.05));
          border: 1px solid rgba(52, 120, 246, 0.2);
          border-radius: 10px;
          margin: 16px 12px;
          padding: 12px;
        }
        .admin-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .admin-badge {
          background: #3478f6;
          color: white;
          font-size: 9px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .admin-title {
          font-size: 11px;
          color: #888;
        }
        @media (max-width: 1023px) {
          .app-sidebar {
            display: none;
          }
        }
      `}),a.jsx("div",{className:"sidebar-logo",children:a.jsxs("div",{className:"logo-container",children:[a.jsx("div",{className:"logo-icon",children:a.jsx("span",{children:"₿"})}),a.jsxs("div",{className:"logo-text",children:[a.jsx("h1",{children:"BTC Trade"}),a.jsx("p",{children:"Pro Platform"})]})]})}),a.jsx("nav",{className:"sidebar-nav",children:i?a.jsxs("div",{className:"admin-section",children:[a.jsxs("div",{className:"admin-header",children:[a.jsx("span",{className:"admin-badge",children:"Admin"}),a.jsx("span",{className:"admin-title",children:"Back Office"})]}),a1.map(n=>{const s=n.icon;return a.jsxs(Er,{to:n.path,className:({isActive:r})=>`nav-item ${r?"active":""}`,children:[a.jsx(s,{className:"nav-item-icon",size:20}),a.jsx("span",{className:"nav-item-text",children:n.label})]},n.path)})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"nav-section",children:[a.jsx("div",{className:"nav-section-title",children:"Main Menu"}),l1.map(n=>{const s=n.icon;return a.jsxs(Er,{to:n.path,className:({isActive:r})=>`nav-item ${r?"active":""}`,children:[a.jsx(s,{className:"nav-item-icon",size:20}),a.jsx("span",{className:"nav-item-text",children:n.label}),a.jsx(Xx,{className:"nav-item-arrow",size:16})]},n.path)})]}),a.jsxs("div",{className:"nav-section",children:[a.jsx("div",{className:"nav-section-title",children:"Support"}),a.jsxs(Er,{to:"/support",className:({isActive:n})=>`nav-item ${n?"active":""}`,children:[a.jsx(am,{className:"nav-item-icon",size:20}),a.jsx("span",{className:"nav-item-text",children:"Support Chat"}),a.jsx("span",{className:"nav-item-badge",children:"Live"})]})]})]})}),a.jsxs("div",{className:"sidebar-footer",children:[!i&&a.jsxs("div",{className:"footer-nav",children:[a.jsxs("a",{href:"#",className:"footer-item",children:[a.jsx(om,{size:16}),"Settings"]}),a.jsxs("a",{href:"#",className:"footer-item",children:[a.jsx(t1,{size:16}),"Help Center"]})]}),a.jsxs("button",{onClick:t,className:"logout-btn",children:[a.jsx(lm,{size:18}),"Sign Out"]})]})]})}function c1({btcPrice:t,btcChange24h:e,marketStatus:i}){var m,g;const{user:n,logout:s}=hi(),[r,l]=k.useState(!1),[c,o]=k.useState(!1),u=k.useRef(null),h=k.useRef(null),d=((n==null?void 0:n.btcBalance)||0)*t,f=[{id:1,title:"Deposit Confirmed",message:"Your BTC deposit of 0.025 BTC has been confirmed",time:"2 min ago",unread:!0},{id:2,title:"Trade Closed",message:"BTC/USD settled with a +$150 result",time:"15 min ago",unread:!0},{id:3,title:"Withdrawal Processed",message:"Your wallet request is now complete",time:"1 hour ago",unread:!1}];return k.useEffect(()=>{const p=w=>{const v=w.target;v&&(r&&u.current&&!u.current.contains(v)&&l(!1),c&&h.current&&!h.current.contains(v)&&o(!1))};return document.addEventListener("mousedown",p),document.addEventListener("touchstart",p),()=>{document.removeEventListener("mousedown",p),document.removeEventListener("touchstart",p)}},[r,c]),a.jsxs("header",{className:"pro-header",children:[a.jsx("style",{children:`
        .pro-header {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px 18px;
          background: rgba(15, 18, 26, 0.96);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(16px);
        }
        .pro-header * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .header-main,
        .header-right,
        .header-brand,
        .header-ticker,
        .summary-card,
        .profile-chip,
        .user-btn {
          display: flex;
          align-items: center;
        }
        .header-main {
          justify-content: space-between;
          gap: 16px;
        }
        .header-brand {
          gap: 14px;
          min-width: 0;
        }
        .brand-icon {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 22px;
          font-weight: 800;
          box-shadow: 0 12px 32px rgba(247, 147, 26, 0.25);
        }
        .brand-copy h1 {
          font-size: 15px;
          line-height: 1.1;
          font-weight: 700;
          color: #f5f7fb;
        }
        .brand-copy p {
          display: none;
        }
        .header-ticker {
          gap: 8px;
          min-width: 0;
          padding: 0;
          border-radius: 0;
          background: transparent;
          border: none;
          flex-direction: row;
          align-items: center;
          white-space: nowrap;
        }
        .ticker-top {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          width: auto;
          min-width: 0;
        }
        .ticker-middle {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          width: auto;
          min-width: 0;
        }
        .ticker-market-copy {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .ticker-top .status-chip {
          display: none;
        }
        .ticker-symbol {
          color: #f5f7fb;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
        }
        .ticker-price {
          color: #f5f7fb;
          font-size: 13px;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          white-space: nowrap;
        }
        .ticker-change {
          font-size: 12px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 999px;
        }
        .ticker-change.positive {
          color: #0ecb81;
          background: rgba(14, 203, 129, 0.15);
        }
        .ticker-change.negative {
          color: #f6465d;
          background: rgba(246, 70, 93, 0.15);
        }
        .header-right {
          gap: 12px;
        }
        .balance-badge {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .balance-label {
          display: block;
          font-size: 10px;
          color: #7f8ea3;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .balance-value {
          color: #eef3fb;
          font-size: 13px;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
        }
        .balance-value.btc {
          color: #f7931a;
        }
        .balance-divider {
          width: 1px;
          height: 28px;
          background: rgba(255, 255, 255, 0.08);
        }
        .header-btn,
        .user-btn {
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
          border-radius: 14px;
          color: #d3dcea;
        }
        .header-btn {
          position: relative;
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .notification-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          background: #f6465d;
          border-radius: 50%;
        }
        .user-menu {
          position: relative;
        }
        .menu-backdrop {
          display: none;
        }
        .user-btn {
          gap: 8px;
          padding: 8px 12px;
          cursor: pointer;
        }
        .user-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f7931a, #ff9500);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 12px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .user-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .user-name {
          font-size: 13px;
          font-weight: 600;
          color: #eef3fb;
        }
        .dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 220px;
          background: #131821;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          z-index: 1000;
        }
        .dropdown-header {
          padding: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .dropdown-name {
          font-weight: 600;
          color: #e8e8e8;
          margin-bottom: 2px;
        }
        .dropdown-email {
          font-size: 12px;
          color: #888;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          color: #ccc;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          font-size: 13px;
        }
        .dropdown-item:hover {
          background: #252525;
          color: #e8e8e8;
        }
        .dropdown-item.danger {
          color: #f6465d;
        }
        .notification-dropdown {
          width: 360px;
          max-height: 400px;
          overflow-y: auto;
        }
        .notification-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .notification-title {
          font-weight: 600;
          color: #e8e8e8;
        }
        .notification-item {
          display: flex;
          gap: 12px;
          padding: 14px 16px;
          border-bottom: 1px solid #222;
        }
        .notification-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #252525;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f7931a;
          flex-shrink: 0;
        }
        .notification-content {
          flex: 1;
        }
        .notification-item-title {
          font-weight: 600;
          font-size: 13px;
          color: #e8e8e8;
          margin-bottom: 4px;
        }
        .notification-message,
        .notification-time {
          font-size: 12px;
          color: #888;
        }
        .unread-dot {
          width: 8px;
          height: 8px;
          background: #3478f6;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .header-summary {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) auto;
          gap: 12px;
        }
        .summary-card {
          justify-content: space-between;
          gap: 12px;
          min-width: 0;
          padding: 12px 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .summary-label {
          font-size: 11px;
          color: #7f8ea3;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 4px;
        }
        .summary-value {
          color: #f5f7fb;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          font-weight: 700;
        }
        .summary-sub {
          color: #7f8ea3;
          font-size: 12px;
          white-space: nowrap;
        }
        .profile-chip {
          gap: 10px;
        }
        .summary-user-name {
          font-size: 13px;
        }
        .status-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: ${i==="live"?"#0ecb81":"#f7931a"};
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        @media (max-width: 1023px) {
          .balance-badge {
            display: none;
          }
          .header-summary {
            grid-template-columns: 1fr 1fr;
          }
          .summary-card:last-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 720px) {
          .pro-header {
            padding: 8px 10px;
            gap: 6px;
          }
          .brand-copy p,
          .user-name {
            display: none;
          }
          .brand-copy h1 {
            font-size: 13px;
          }
          .header-ticker {
            padding: 6px 8px;
            gap: 4px;
            border-radius: 12px;
            background: linear-gradient(180deg, rgba(17, 25, 37, 0.96), rgba(13, 19, 29, 0.86));
            border-color: rgba(72, 113, 173, 0.35);
            box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
          }
          .ticker-symbol {
            font-size: 8px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .ticker-top {
            align-items: flex-start;
          }
          .ticker-market-copy {
            gap: 2px;
          }
          .ticker-price {
            font-size: 13px;
            line-height: 1;
          }
          .ticker-change {
            font-size: 9px;
            padding: 3px 7px;
            flex-shrink: 0;
          }
          .header-right .status-chip {
            display: none;
          }
          .ticker-top .status-chip {
            display: inline-flex;
            font-size: 8px;
            padding: 0;
            letter-spacing: 0.08em;
            flex-shrink: 0;
          }
          .summary-card {
            padding: 7px 9px;
            border-radius: 12px;
            gap: 8px;
          }
          .summary-label {
            font-size: 9px;
            margin-bottom: 2px;
          }
          .summary-value {
            font-size: 11px;
          }
          .summary-sub {
            font-size: 9px;
          }
          .user-avatar {
            width: 22px;
            height: 22px;
          }
          .header-main {
            flex-wrap: wrap;
            gap: 10px;
          }
          .header-summary {
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }
          .profile-chip {
            gap: 8px;
          }
          .summary-user-card {
            display: none;
          }
          .summary-user-card .summary-label {
            display: none;
          }
          .summary-user-card .profile-chip {
            display: none;
          }
          .summary-user-card .status-chip {
            display: none;
          }
          .notification-dropdown {
            width: min(88vw, 320px);
            max-height: min(64vh, 420px);
          }
          .status-chip {
            font-size: 10px;
            gap: 4px;
          }
          .menu-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(5, 9, 16, 0.22);
            backdrop-filter: blur(2px);
            z-index: 960;
          }
          .dropdown {
            position: fixed;
            top: 60px;
            right: 12px;
            left: auto;
            min-width: 0;
            width: min(88vw, 320px);
            border-radius: 16px;
            max-height: calc(100vh - 92px);
            z-index: 980;
          }
          .notification-dropdown {
            width: min(88vw, 320px);
          }
          .dropdown-header,
          .notification-header {
            padding: 12px;
          }
          .dropdown-name {
            font-size: 13px;
          }
          .dropdown-email {
            font-size: 10px;
            word-break: break-word;
          }
          .dropdown-item {
            padding: 12px;
            font-size: 13px;
          }
          .notification-item {
            padding: 12px;
            gap: 9px;
          }
          .notification-item-title {
            font-size: 11px;
          }
          .notification-message,
          .notification-time {
            font-size: 10px;
            line-height: 1.45;
          }
          .notification-icon {
            width: 30px;
            height: 30px;
          }
          .header-btn,
          .user-btn {
            border-radius: 12px;
          }
        }
      `}),a.jsxs("div",{className:"header-main",children:[a.jsxs("div",{className:"header-brand",children:[a.jsx("div",{className:"brand-icon",children:"₿"}),a.jsx("div",{className:"brand-copy",children:a.jsx("h1",{children:"BTC Trade Pro"})})]}),a.jsxs("div",{className:"header-ticker",children:[a.jsxs("div",{className:"ticker-top",children:[a.jsx("span",{className:"ticker-symbol",children:"BTC/USD"}),a.jsxs("div",{className:"status-chip",children:[i==="live"?a.jsx(Eh,{size:14}):a.jsx(Ch,{size:14}),i]})]}),a.jsxs("div",{className:"ticker-middle",children:[a.jsxs("span",{className:"ticker-price",children:["$",t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("span",{className:`ticker-change ${e>=0?"positive":"negative"}`,children:[e>=0?"+":"",e.toFixed(2),"%"]})]})]}),a.jsxs("div",{className:"header-right",children:[a.jsxs("div",{className:"balance-badge",children:[a.jsxs("div",{children:[a.jsx("span",{className:"balance-label",children:"USD"}),a.jsxs("span",{className:"balance-value",children:["$",((n==null?void 0:n.usdBalance)||0).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsx("div",{className:"balance-divider"}),a.jsxs("div",{children:[a.jsx("span",{className:"balance-label",children:"BTC"}),a.jsx("span",{className:"balance-value btc",children:((n==null?void 0:n.btcBalance)||0).toFixed(6)})]})]}),a.jsxs("div",{className:"user-menu",ref:h,children:[c&&a.jsx("button",{type:"button",className:"menu-backdrop",onClick:()=>o(!1),"aria-label":"Close notifications"}),a.jsxs("button",{className:"header-btn",onClick:()=>o(!c),children:[a.jsx(Ux,{size:20}),a.jsx("span",{className:"notification-dot"})]}),c&&a.jsxs("div",{className:"dropdown notification-dropdown",children:[a.jsxs("div",{className:"notification-header",children:[a.jsx("span",{className:"notification-title",children:"Notifications"}),a.jsx("span",{style:{color:"#3478f6",fontSize:"12px",cursor:"pointer"},children:"Mark all as read"})]}),f.map(p=>a.jsxs("div",{className:"notification-item",children:[a.jsx("div",{className:"notification-icon",children:a.jsx(zi,{size:16})}),a.jsxs("div",{className:"notification-content",children:[a.jsx("div",{className:"notification-item-title",children:p.title}),a.jsx("div",{className:"notification-message",children:p.message}),a.jsx("div",{className:"notification-time",children:p.time})]}),p.unread&&a.jsx("div",{className:"unread-dot"})]},p.id))]})]}),a.jsxs("div",{className:"user-menu",ref:u,children:[r&&a.jsx("button",{type:"button",className:"menu-backdrop",onClick:()=>l(!1),"aria-label":"Close profile menu"}),a.jsxs("button",{className:"user-btn",onClick:()=>l(!r),children:[a.jsx("div",{className:"user-avatar",children:n!=null&&n.avatar?a.jsx("img",{src:n.avatar,alt:n.name||"User"}):((m=n==null?void 0:n.name)==null?void 0:m.charAt(0).toUpperCase())||"U"}),a.jsx("span",{className:"user-name",children:(n==null?void 0:n.name)||"User"}),a.jsx(Kx,{size:16,color:"#888"})]}),r&&a.jsxs("div",{className:"dropdown",children:[a.jsxs("div",{className:"dropdown-header",children:[a.jsx("div",{className:"dropdown-name",children:n==null?void 0:n.name}),a.jsx("div",{className:"dropdown-email",children:n==null?void 0:n.email})]}),a.jsxs(he,{to:"/profile",className:"dropdown-item",onClick:()=>l(!1),children:[a.jsx(Ps,{size:16}),"Profile"]}),a.jsxs(he,{to:"/finance",className:"dropdown-item",onClick:()=>l(!1),children:[a.jsx(zi,{size:16}),"Wallet"]}),a.jsxs(he,{to:"/profile",className:"dropdown-item",onClick:()=>l(!1),children:[a.jsx(om,{size:16}),"Settings"]}),a.jsxs("button",{className:"dropdown-item danger",onClick:()=>{s(),l(!1)},children:[a.jsx(lm,{size:16}),"Sign Out"]})]})]})]})]}),a.jsxs("div",{className:"header-summary",children:[a.jsxs("div",{className:"summary-card",children:[a.jsxs("div",{children:[a.jsx("div",{className:"summary-label",children:"Portfolio BTC"}),a.jsxs("div",{className:"summary-value",children:[((n==null?void 0:n.btcBalance)||0).toFixed(6)," BTC"]})]}),a.jsxs("div",{className:"summary-sub",children:["$",d.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"summary-card",children:[a.jsxs("div",{children:[a.jsx("div",{className:"summary-label",children:"Cash Balance"}),a.jsxs("div",{className:"summary-value",children:["$",((n==null?void 0:n.usdBalance)||0).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:`ticker-change ${e>=0?"positive":"negative"}`,children:[e>=0?"+":"",e.toFixed(2),"%"]})]}),a.jsxs("div",{className:"summary-card summary-user-card",children:[a.jsxs("div",{className:"profile-chip",children:[a.jsx("div",{className:"user-avatar",children:n!=null&&n.avatar?a.jsx("img",{src:n.avatar,alt:n.name||"User"}):((g=n==null?void 0:n.name)==null?void 0:g.charAt(0).toUpperCase())||"U"}),a.jsxs("div",{children:[a.jsx("div",{className:"summary-label",children:"Signed In"}),a.jsx("div",{className:"summary-value summary-user-name",children:(n==null?void 0:n.name)||"User"})]})]}),a.jsxs("div",{className:"status-chip",children:[i==="live"?a.jsx(Eh,{size:14}):a.jsx(Ch,{size:14}),i]})]})]})]})}const u1=[{path:"/",label:"Home",icon:rm},{path:"/trade",label:"Trade",icon:Ts},{path:"/news",label:"News",icon:ys},{path:"/finance",label:"Wallet",icon:zi},{path:"/profile",label:"Profile",icon:Ps}],h1=[{path:"/admin",label:"Admin",icon:Oc}];function d1(){const{user:t}=hi(),e=(t==null?void 0:t.role)==="admin"?h1:u1;return a.jsxs("nav",{className:"mobile-nav-shell",children:[a.jsx("style",{children:`
        .mobile-nav-shell {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 120;
          display: none;
          padding: 0 14px 14px;
          pointer-events: none;
        }
        .mobile-nav {
          display: grid;
          grid-template-columns: repeat(${e.length}, 1fr);
          gap: 8px;
          background: rgba(10, 14, 21, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          padding: 10px 12px;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(18px);
          pointer-events: auto;
        }
        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-decoration: none;
          color: #7f8ea3;
          font-size: 11px;
          font-weight: 600;
          padding: 8px 4px;
          border-radius: 16px;
          transition: all 0.2s ease;
        }
        .mobile-nav-item.active {
          color: #f5f7fb;
          background: linear-gradient(180deg, rgba(247, 147, 26, 0.2), rgba(52, 120, 246, 0.12));
        }
        .mobile-nav-item.active .mobile-nav-icon {
          color: #f7931a;
        }
        .mobile-nav-icon {
          width: 20px;
          height: 20px;
        }
        @media (max-width: 1023px) {
          .mobile-nav-shell {
            display: block;
          }
        }
      `}),a.jsx("div",{className:"mobile-nav",children:e.map(i=>{const n=i.icon;return a.jsxs(Er,{to:i.path,className:({isActive:s})=>`mobile-nav-item ${s?"active":""}`,children:[a.jsx(n,{className:"mobile-nav-icon"}),a.jsx("span",{children:i.label})]},i.path)})})]})}class f1 extends gi.Component{constructor(){super(...arguments);Ds(this,"state",{hasError:!1});Ds(this,"handleReload",()=>{window.location.reload()});Ds(this,"handleReset",()=>{localStorage.removeItem("btcActiveTrade"),localStorage.removeItem("btcTradeResult"),window.location.reload()})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(i){console.error("App runtime error:",i)}render(){return this.state.hasError?a.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(180deg, #070b11, #0b1119)",padding:"24px"},children:a.jsxs("div",{style:{width:"min(520px, 100%)",borderRadius:"28px",padding:"28px",background:"rgba(15, 19, 28, 0.96)",border:"1px solid rgba(255, 255, 255, 0.08)",boxShadow:"0 24px 80px rgba(0, 0, 0, 0.32)",color:"#eef3fb"},children:[a.jsx("div",{style:{fontSize:"28px",fontWeight:800,marginBottom:"10px"},children:"BTCTradePro"}),a.jsx("div",{style:{fontSize:"20px",fontWeight:700,marginBottom:"8px"},children:"We hit a runtime error"}),a.jsx("p",{style:{color:"#8fa2ba",lineHeight:1.6,marginBottom:"18px"},children:"The app was protected from a blank crash screen. Reload the page, or reset the current trade cache if the issue came from old saved trade data."}),a.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[a.jsx("button",{onClick:this.handleReload,style:{minHeight:"48px",padding:"0 18px",borderRadius:"14px",border:"none",background:"linear-gradient(135deg, #f7931a, #ffb347)",color:"#111",fontWeight:800},children:"Reload app"}),a.jsx("button",{onClick:this.handleReset,style:{minHeight:"48px",padding:"0 18px",borderRadius:"14px",border:"1px solid rgba(255, 255, 255, 0.08)",background:"rgba(255, 255, 255, 0.04)",color:"#eef3fb",fontWeight:700},children:"Reset trade cache"})]})]})}):this.props.children}}const um="/assets/hero-DYsT3BwZ.mp4",p1=[{symbol:"ETH",name:"Ethereum",price:3120.44,change:1.18,high:3186.2,low:3068.55},{symbol:"SOL",name:"Solana",price:167.23,change:2.74,high:170.84,low:160.92},{symbol:"XRP",name:"XRP",price:.6542,change:-.42,high:.6674,low:.6418},{symbol:"BNB",name:"BNB",price:604.72,change:.88,high:613.11,low:596.42}],Mh=[{id:"n1",title:"ETF inflows keep Bitcoin demand elevated through the New York session",meta:"Macro Flow",image:"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=900&q=80"},{id:"n2",title:"Miners tighten supply while spot desks track fresh BTC accumulation",meta:"Mining",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80"},{id:"n3",title:"Traders watch the next reclaim zone as BTC volatility expands again",meta:"Technical",image:"https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=900&q=80"},{id:"n4",title:"Market desks watch BTC liquidity as U.S. trading opens with stronger spot demand",meta:"Liquidity",image:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=900&q=80"},{id:"n5",title:"Bitcoin options activity rises as traders position for a bigger breakout range",meta:"Derivatives",image:"https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=900&q=80"},{id:"n6",title:"Macro desks rotate back into BTC as risk appetite improves across crypto markets",meta:"Macro",image:"https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80"}],m1=[{year:"2009",title:"Genesis block mined",text:"Bitcoin launched as the first decentralized digital asset network."},{year:"2017",title:"Global breakout cycle",text:"BTC reached mainstream awareness and became a major macro market conversation."},{year:"2024",title:"Spot ETF era",text:"Institutional access deepened and daily market participation broadened."}],_h=[{name:"Sarah Miller",role:"Swing Trader",avatar:"https://randomuser.me/api/portraits/women/68.jpg",text:"The mobile layout finally feels like a real trading app. I can check BTC, wallet status, and support without hunting around.",profit:"+$12,450"},{name:"Daniel Brooks",role:"Day Trader",avatar:"https://randomuser.me/api/portraits/men/75.jpg",text:"The trade desk is clean, the chart is live, and the admin-confirmed wallet flow makes the demo feel much closer to a real exchange.",profit:"+$8,930"},{name:"Emily Park",role:"BTC Investor",avatar:"https://randomuser.me/api/portraits/women/44.jpg",text:"Profile, deposit, and review sections now look premium. This feels much more trustworthy than a generic crypto landing page.",profit:"+$21,600"},{name:"Noah Grant",role:"Scalp Trader",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Noah",text:"Phone version feels way tighter now and the quick wallet flow is actually believable.",profit:"+$4,180"},{name:"Amelia Ross",role:"Portfolio Manager",avatar:"https://randomuser.me/api/portraits/women/52.jpg",text:"I like that the KYC and admin approval flow now feels connected instead of fake.",profit:"+$15,700"},{name:"Leo Quinn",role:"Momentum Trader",avatar:"https://api.dicebear.com/7.x/personas/svg?seed=Leo",text:"Great trade interface. The chart and wallet behavior make the whole demo feel more serious.",profit:"+$6,520"},{name:"Mia Lopez",role:"BTC Analyst",avatar:"https://randomuser.me/api/portraits/women/22.jpg",text:"The profile system is much better with avatar choice and editable trader details.",profit:"+$9,410"},{name:"Kai Mercer",role:"Algo Trader",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Kai",text:"The moving review strip and mixed avatar style make the home page feel more alive.",profit:"+$11,230"},{name:"Sophia Reed",role:"Long-Term Holder",avatar:"https://randomuser.me/api/portraits/women/31.jpg",text:"Deposit first, admin review later, balance updates after approval. That flow now makes sense.",profit:"+$3,890"},{name:"Ethan Cruz",role:"Macro Trader",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Ethan",text:"The landing page now feels like an actual product page, not a login wall.",profit:"+$13,040"},{name:"Grace Park",role:"Futures Trader",avatar:"https://randomuser.me/api/portraits/women/57.jpg",text:"Top trader cards and reviews now look premium on my phone, which matters a lot.",profit:"+$18,660"},{name:"Mason Cole",role:"High-Frequency Trader",avatar:"https://api.dicebear.com/7.x/personas/svg?seed=Mason",text:"The whole platform is closer to a professional exchange demo now.",profit:"+$7,880"}],g1=["All","0 Fees","50% Fees","Margin Trading","RWA","SOL Ecosystem"],Bi={BTC:{icon:"₿",favorite:!0,tags:["10X"],bg:"#ffb11a",color:"#fff"},ETH:{icon:"Ξ",favorite:!0,tags:["10X"],bg:"#0c0d10",color:"#fff"},XRP:{icon:"✕",favorite:!0,tags:["10X"],bg:"#0b0b0d",color:"#fff"},SOL:{icon:"S",tags:["10X"],bg:"#0f1720",color:"#67ffd8"},BNB:{icon:"◇",tags:["10X"],bg:"#f3ba2f",color:"#111"}};function v1(){const{btcPrice:t,btcChange24h:e,btcHigh24h:i,btcLow24h:n,btcVolume24h:s,marketStatus:r,marketReady:l}=$s(),c={symbol:"BTC",name:"Bitcoin",price:t,change:e,volume:s,high:i,low:n};return a.jsxs("div",{className:"home-shell",children:[a.jsx("style",{children:`
        .home-shell {
          color: #eef3fb;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .glass-card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
        }
        .hero-card {
          position: relative;
          overflow: hidden;
          min-height: 520px;
          padding: 36px;
        }
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, rgba(3, 7, 18, 0.9) 18%, rgba(3, 7, 18, 0.52) 58%, rgba(3, 7, 18, 0.85) 100%),
            radial-gradient(circle at top right, rgba(247, 147, 26, 0.22), transparent 34%);
        }
        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(340px, 0.8fr);
          gap: 28px;
          align-items: end;
          min-height: 448px;
        }
        .hero-copy {
          max-width: 640px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: #f6b353;
          width: fit-content;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }
        .hero-title {
          font-size: clamp(34px, 5vw, 62px);
          line-height: 0.98;
          letter-spacing: -0.04em;
          font-weight: 800;
          max-width: 10ch;
        }
        .hero-title span {
          color: #f6b353;
        }
        .hero-text {
          color: #b5c0d0;
          font-size: 16px;
          line-height: 1.7;
          max-width: 56ch;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 0 20px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s ease;
        }
        .hero-btn:hover {
          transform: translateY(-2px);
        }
        .hero-btn.primary {
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
          box-shadow: 0 16px 36px rgba(247, 147, 26, 0.28);
        }
        .hero-btn.secondary {
          background: rgba(255, 255, 255, 0.08);
          color: #eef3fb;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hero-aside {
          display: grid;
          gap: 16px;
        }
        .market-hero-card {
          padding: 22px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(12, 17, 25, 0.88), rgba(7, 11, 17, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .market-hero-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
        }
        .market-hero-meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .market-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 24px;
          font-weight: 800;
        }
        .market-hero-label {
          color: #8fa2ba;
          font-size: 12px;
          margin-top: 4px;
        }
        .market-status {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${r==="live"?"#0ecb81":"#f6b353"};
        }
        .market-hero-price {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 800;
          margin-bottom: 10px;
        }
        .market-hero-price.loading {
          color: #8fa2ba;
        }
        .market-hero-change {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 18px;
        }
        .market-hero-change.up {
          background: rgba(14, 203, 129, 0.14);
          color: #0ecb81;
        }
        .market-hero-change.down {
          background: rgba(246, 70, 93, 0.14);
          color: #f6465d;
        }
        .market-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .market-stat {
          padding: 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }
        .market-stat-label {
          color: #7f8ea3;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 6px;
        }
        .market-stat-value {
          color: #eef3fb;
          font-weight: 700;
          font-size: 15px;
          font-family: 'JetBrains Mono', monospace;
        }
        .quick-grid,
        .story-grid,
        .timeline-grid {
          display: grid;
          gap: 16px;
        }
        .quick-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .quick-card {
          padding: 20px;
        }
        .quick-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          background: rgba(247, 147, 26, 0.12);
          color: #f6b353;
        }
        .quick-value {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 6px;
          letter-spacing: -0.03em;
        }
        .quick-label {
          font-size: 13px;
          color: #90a0b6;
        }
        .section-card {
          padding: 24px;
        }
        .section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }
        .section-title {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .section-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #7cb0ff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }
        .story-marquee {
          overflow: hidden;
          position: relative;
        }
        .story-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: story-scroll 34s linear infinite;
        }
        .story-track:hover {
          animation-play-state: paused;
        }
        .story-card {
          overflow: hidden;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          min-width: 320px;
          max-width: 320px;
        }
        .story-image {
          width: 100%;
          height: 172px;
          object-fit: cover;
        }
        @keyframes story-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .story-copy {
          padding: 18px;
        }
        .story-meta {
          color: #f6b353;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .story-title {
          font-size: 18px;
          line-height: 1.35;
          font-weight: 700;
          margin-bottom: 14px;
        }
        .story-cta {
          color: #7cb0ff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }
        .market-table {
          background: linear-gradient(180deg, rgba(18, 22, 31, 0.98), rgba(14, 18, 26, 0.96));
          color: #eef3fb;
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.26);
        }
        .market-filters {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .market-filters::-webkit-scrollbar {
          display: none;
        }
        .market-filterbar {
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.01);
        }
        .market-filter-chip {
          flex: 0 0 auto;
          min-height: 46px;
          padding: 0 18px;
          border: 0;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          color: #99a6b8;
          font-size: 14px;
          font-weight: 500;
        }
        .market-filter-chip.active {
          background: rgba(243, 162, 39, 0.14);
          color: #f3a227;
          font-weight: 700;
        }
        .market-list-head,
        .market-list-row {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(220px, 0.8fr);
          gap: 16px;
          align-items: center;
          padding: 18px;
        }
        .market-list-head {
          color: #8f9cb0;
          font-size: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .market-list-head-right {
          text-align: right;
        }
        .market-list-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .market-list-row:last-child {
          border-bottom: 0;
        }
        .market-pair {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }
        .market-star {
          color: #f3a227;
          flex: 0 0 auto;
        }
        .market-star.off {
          color: #667386;
        }
        .market-coin {
          width: 46px;
          height: 46px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 800;
          flex: 0 0 auto;
        }
        .market-pair-copy {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          min-width: 0;
        }
        .market-pair-copy strong {
          font-size: 18px;
          letter-spacing: -0.02em;
          color: #f2f6fc;
        }
        .market-pair-copy strong span {
          color: #8f9cb0;
          font-weight: 600;
        }
        .market-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 30px;
          padding: 0 10px;
          border-radius: 8px;
          background: rgba(243, 162, 39, 0.14);
          color: #f3a227;
          font-size: 12px;
          font-weight: 700;
        }
        .market-price-block {
          text-align: right;
        }
        .market-price-main {
          color: #f2f6fc;
          font-size: 18px;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: -0.02em;
        }
        .market-price-change {
          margin-top: 4px;
          font-size: 13px;
          font-weight: 700;
        }
        .timeline-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .timeline-card {
          padding: 22px;
        }
        .timeline-year {
          color: #f6b353;
          font-weight: 800;
          font-size: 28px;
          margin-bottom: 10px;
        }
        .timeline-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .timeline-text {
          color: #9ca9bc;
          line-height: 1.65;
          font-size: 14px;
        }
        .leaderboard-list {
          display: grid;
          gap: 12px;
        }
        .reviews-marquee {
          overflow: hidden;
          position: relative;
        }
        .reviews-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: reviews-scroll 46s linear infinite;
        }
        .reviews-track:hover {
          animation-play-state: paused;
        }
        .review-card {
          padding: 22px;
          min-width: 320px;
          max-width: 320px;
        }
        .review-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .review-head img {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          object-fit: cover;
        }
        .review-role {
          color: #8fa2ba;
          font-size: 12px;
        }
        .review-text {
          color: #c7d1de;
          line-height: 1.75;
          font-size: 14px;
          margin-bottom: 14px;
        }
        .review-profit {
          color: #0ecb81;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
        }
        @keyframes reviews-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .site-footer {
          display: grid;
          grid-template-columns: 1.35fr repeat(3, 1fr);
          gap: 28px;
          padding: 10px 4px 0;
          margin-top: 2px;
        }
        .footer-brand {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .footer-coin {
          width: 48px;
          height: 48px;
          flex: 0 0 auto;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
          font-size: 24px;
          font-weight: 800;
          box-shadow: 0 18px 40px rgba(247, 147, 26, 0.24);
        }
        .footer-brand h3 {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 10px;
        }
        .footer-brand p,
        .footer-link,
        .footer-bottom {
          color: #9aa7b9;
          line-height: 1.7;
          font-size: 14px;
        }
        .footer-title {
          font-size: 12px;
          color: #f6b353;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-link {
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #eef3fb;
        }
        .footer-bottom {
          grid-column: 1 / -1;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .leaderboard-row {
          display: grid;
          grid-template-columns: 64px minmax(0, 1.2fr) 1fr 1fr;
          gap: 12px;
          align-items: center;
          padding: 14px 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }
        .leaderboard-rank {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(247, 147, 26, 0.16);
          color: #f6b353;
          font-weight: 800;
        }
        .leaderboard-user {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }
        .leaderboard-avatar {
          width: 42px;
          height: 42px;
          border-radius: 14px;
        }
        .leaderboard-user strong {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .leaderboard-user span {
          color: #8fa2ba;
          font-size: 12px;
        }
        @media (max-width: 1180px) {
          .hero-grid {
            grid-template-columns: 1fr;
            align-items: start;
          }
          .quick-grid,
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .site-footer {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 820px) {
          .hero-card {
            min-height: unset;
            padding: 22px;
          }
          .hero-text {
            font-size: 15px;
          }
          .market-stats,
          .quick-grid,
          .timeline-grid,
          .site-footer {
            grid-template-columns: 1fr;
          }
          .review-card {
            min-width: 280px;
            max-width: 280px;
          }
          .story-card {
            min-width: 280px;
            max-width: 280px;
          }
          .market-hero-card,
          .section-card {
            padding: 18px;
          }
          .market-table,
          .leaderboard-list,
          .timeline-grid {
            gap: 16px;
          }
          .market-table {
            border-radius: 22px;
          }
          .market-filterbar,
          .market-list-head,
          .market-list-row {
            padding-left: 14px;
            padding-right: 14px;
          }
          .market-filter-chip {
            min-height: 40px;
            padding: 0 14px;
            font-size: 13px;
          }
          .market-list-head,
          .market-list-row {
            grid-template-columns: minmax(0, 1fr) minmax(128px, auto);
            gap: 10px;
          }
          .market-pair {
            gap: 10px;
          }
          .market-coin {
            width: 40px;
            height: 40px;
            font-size: 19px;
          }
          .market-pair-copy strong {
            font-size: 15px;
          }
          .market-tag {
            min-height: 26px;
            padding: 0 8px;
            font-size: 11px;
          }
          .market-price-main {
            font-size: 16px;
          }
          .market-price-change {
            font-size: 12px;
          }
          .leaderboard-list {
            gap: 10px;
            overflow-x: auto;
            padding-bottom: 4px;
          }
          .leaderboard-list::-webkit-scrollbar {
            display: none;
          }
          .leaderboard-row {
            min-width: 100%;
            width: 100%;
            grid-template-columns: 40px minmax(0, 1fr) minmax(78px, auto) minmax(56px, auto);
            gap: 8px;
            padding: 12px;
            border-radius: 16px;
            box-sizing: border-box;
          }
          .leaderboard-rank {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            font-size: 12px;
          }
          .leaderboard-avatar {
            width: 34px;
            height: 34px;
            border-radius: 12px;
          }
          .leaderboard-user {
            gap: 8px;
          }
          .leaderboard-user strong {
            font-size: 12px;
          }
          .leaderboard-user span,
          .market-cell-label {
            font-size: 10px;
          }
          .market-cell-value {
            font-size: 11px;
          }
          .timeline-card {
            padding: 18px;
            margin-right: 0;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.07);
            box-shadow: none;
          }
          .timeline-year {
            font-size: 22px;
            margin-bottom: 6px;
          }
          .timeline-title {
            font-size: 16px;
          }
          .timeline-text {
            font-size: 13px;
            max-width: 30ch;
          }
        }
      `}),a.jsxs("section",{className:"hero-card glass-card",children:[a.jsx("video",{className:"hero-video",src:um,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),a.jsx("div",{className:"hero-overlay"}),a.jsxs("div",{className:"hero-grid",children:[a.jsxs("div",{className:"hero-copy",children:[a.jsxs("div",{className:"eyebrow",children:[a.jsx(ii,{size:14}),"Professional BTC demo workspace"]}),a.jsxs("h1",{className:"hero-title",children:["Trade ",a.jsx("span",{children:"Bitcoin"})," with a cleaner pro layout on every screen."]}),a.jsx("p",{className:"hero-text",children:"Live BTC pricing, mobile-first navigation, dedicated trade and wallet flows, and a home screen that feels like a real market desk instead of one stretched page."}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs(he,{to:"/trade",className:"hero-btn primary",children:["Open Trade Desk",a.jsx(zr,{size:18})]}),a.jsx(he,{to:"/finance",className:"hero-btn secondary",children:"Go to Deposit"})]})]}),a.jsx("div",{className:"hero-aside",children:a.jsxs("div",{className:"market-hero-card",children:[a.jsxs("div",{className:"market-hero-header",children:[a.jsxs("div",{className:"market-hero-meta",children:[a.jsx("div",{className:"market-icon",children:"₿"}),a.jsxs("div",{children:[a.jsx("strong",{children:"Bitcoin / USD"}),a.jsx("div",{className:"market-hero-label",children:"Real-time market sync"})]})]}),a.jsx("div",{className:"market-status",children:l?r:"loading"})]}),a.jsx("div",{className:`market-hero-price ${l?"":"loading"}`,children:l?`$${c.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:"Loading..."}),l&&a.jsxs("div",{className:`market-hero-change ${c.change>=0?"up":"down"}`,children:[c.change>=0?a.jsx(Ts,{size:16}):a.jsx(cm,{size:16}),c.change>=0?"+":"",c.change.toFixed(2),"%"]}),a.jsxs("div",{className:"market-stats",children:[a.jsxs("div",{className:"market-stat",children:[a.jsx("div",{className:"market-stat-label",children:"24h High"}),a.jsxs("div",{className:"market-stat-value",children:["$",c.high.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"market-stat",children:[a.jsx("div",{className:"market-stat-label",children:"24h Low"}),a.jsxs("div",{className:"market-stat-value",children:["$",c.low.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"market-stat",children:[a.jsx("div",{className:"market-stat-label",children:"24h Volume"}),a.jsxs("div",{className:"market-stat-value",children:[c.volume.toLocaleString(void 0,{maximumFractionDigits:0})," BTC"]})]})]})]})})]})]}),a.jsxs("section",{className:"quick-grid",children:[a.jsxs("div",{className:"quick-card glass-card",children:[a.jsx("div",{className:"quick-icon",children:a.jsx(zi,{size:22})}),a.jsx("div",{className:"quick-value",children:"$2.4B"}),a.jsx("div",{className:"quick-label",children:"Spot and derivatives volume across the desk"})]}),a.jsxs("div",{className:"quick-card glass-card",children:[a.jsx("div",{className:"quick-icon",children:a.jsx(Ic,{size:22})}),a.jsx("div",{className:"quick-value",children:"1m / 5m / 1h / 1D"}),a.jsx("div",{className:"quick-label",children:"Timeframes available on the BTC trade chart"})]}),a.jsxs("div",{className:"quick-card glass-card",children:[a.jsx("div",{className:"quick-icon",children:a.jsx(e1,{size:22})}),a.jsx("div",{className:"quick-value",children:"156"}),a.jsx("div",{className:"quick-label",children:"Countries simulated for the global trading audience"})]}),a.jsxs("div",{className:"quick-card glass-card",children:[a.jsx("div",{className:"quick-icon",children:a.jsx(sm,{size:22})}),a.jsx("div",{className:"quick-value",children:"24 / 7"}),a.jsx("div",{className:"quick-label",children:"Always-on BTC market monitoring and wallet access"})]})]}),a.jsxs("section",{className:"section-card glass-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsx("div",{className:"section-title",children:"BTC news on the current home screen"}),a.jsxs(he,{to:"/news",className:"section-link",children:["More news",a.jsx(zr,{size:16})]})]}),a.jsx("div",{className:"story-marquee",children:a.jsx("div",{className:"story-track",children:[...Mh,...Mh].map((o,u)=>a.jsxs("article",{className:"story-card",children:[a.jsx("img",{src:o.image,alt:o.title,className:"story-image"}),a.jsxs("div",{className:"story-copy",children:[a.jsx("div",{className:"story-meta",children:o.meta}),a.jsx("div",{className:"story-title",children:o.title}),a.jsx(he,{to:"/news",className:"story-cta",children:"Read market brief"})]})]},`${o.id}-${u}`))})})]}),a.jsxs("section",{className:"section-card glass-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsx("div",{className:"section-title",children:"Market board"}),a.jsxs(he,{to:"/trade",className:"section-link",children:["Trade BTC",a.jsx(zr,{size:16})]})]}),a.jsx("div",{className:"market-table",children:a.jsxs("div",{style:{width:"100%"},children:[a.jsx("div",{className:"market-filterbar",children:a.jsx("div",{className:"market-filters",children:g1.map((o,u)=>a.jsx("button",{type:"button",className:`market-filter-chip ${u===0?"active":""}`,children:o},o))})}),a.jsxs("div",{className:"market-list-head",children:[a.jsx("div",{children:"Trading Pairs"}),a.jsx("div",{className:"market-list-head-right",children:"Last Traded Price/24H Change %"})]}),[c,...p1].map(o=>{var u,h,d,f,m,g;return a.jsxs("div",{className:"market-list-row",children:[a.jsxs("div",{className:"market-pair",children:[a.jsx(r1,{size:18,fill:(u=Bi[o.symbol])!=null&&u.favorite?"currentColor":"none",className:`market-star ${(h=Bi[o.symbol])!=null&&h.favorite?"":"off"}`}),a.jsx("div",{className:"market-coin",style:{background:((d=Bi[o.symbol])==null?void 0:d.bg)||"#e7eefc",color:((f=Bi[o.symbol])==null?void 0:f.color)||"#2b5db6"},children:((m=Bi[o.symbol])==null?void 0:m.icon)||o.symbol.charAt(0)}),a.jsxs("div",{className:"market-pair-copy",children:[a.jsxs("strong",{children:[o.symbol,a.jsx("span",{children:"/USDT"})]}),(((g=Bi[o.symbol])==null?void 0:g.tags)||[]).map(p=>a.jsx("span",{className:"market-tag",children:p},`${o.symbol}-${p}`))]})]}),a.jsxs("div",{className:"market-price-block",children:[a.jsx("div",{className:"market-price-main",children:o.price.toLocaleString(void 0,{minimumFractionDigits:o.price>1?2:4,maximumFractionDigits:o.price>1?2:4})}),a.jsxs("div",{className:"market-price-change",style:{color:o.change>0?"#0ecb81":o.change<0?"#f6465d":"#9aa3b1"},children:[o.change>0?"+":"",o.change.toFixed(2),"%"]})]})]},o.symbol)})]})})]}),a.jsx("section",{className:"timeline-grid",children:m1.map(o=>a.jsxs("div",{className:"timeline-card glass-card",children:[a.jsx("div",{className:"timeline-year",children:o.year}),a.jsx("div",{className:"timeline-title",children:o.title}),a.jsx("div",{className:"timeline-text",children:o.text})]},o.year))}),a.jsxs("section",{className:"section-card glass-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsx("div",{className:"section-title",children:"Top BTC traders"}),a.jsxs("div",{className:"section-link",children:[a.jsx(ys,{size:15}),"Monthly ranking"]})]}),a.jsx("div",{className:"leaderboard-list",children:Tx.slice(0,5).map(o=>a.jsxs("div",{className:"leaderboard-row",children:[a.jsx("div",{className:"leaderboard-rank",children:o.rank}),a.jsxs("div",{className:"leaderboard-user",children:[a.jsx("img",{src:o.avatar,alt:o.name,className:"leaderboard-avatar"}),a.jsxs("div",{children:[a.jsx("strong",{children:o.name}),a.jsxs("span",{children:[o.trades," trades"]})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"market-cell-label",children:"Profit"}),a.jsxs("div",{className:"market-cell-value",style:{color:"#0ecb81"},children:["$",o.profit.toLocaleString()]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"market-cell-label",children:"Win rate"}),a.jsxs("div",{className:"market-cell-value",children:[o.winRate,"%"]})]})]},o.rank))})]}),a.jsxs("section",{className:"section-card glass-card",children:[a.jsx("div",{className:"section-head",children:a.jsx("div",{className:"section-title",children:"What traders are saying"})}),a.jsx("div",{className:"reviews-marquee",children:a.jsx("div",{className:"reviews-track",children:[..._h,..._h].map((o,u)=>a.jsxs("article",{className:"review-card glass-card",children:[a.jsxs("div",{className:"review-head",children:[a.jsx("img",{src:o.avatar,alt:o.name}),a.jsxs("div",{children:[a.jsx("strong",{children:o.name}),a.jsx("div",{className:"review-role",children:o.role})]})]}),a.jsx("div",{className:"review-text",children:o.text}),a.jsx("div",{className:"review-profit",children:o.profit})]},`${o.name}-${u}`))})})]}),a.jsxs("footer",{className:"site-footer",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("div",{className:"footer-coin",children:"₿"}),a.jsxs("div",{children:[a.jsx("h3",{children:"BTCTradePro"}),a.jsx("p",{children:"The world's leading Bitcoin trading platform with advanced tools and institutional-grade security."})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-title",children:"Products"}),a.jsxs("div",{className:"footer-links",children:[a.jsx(he,{to:"/trade",className:"footer-link",children:"Spot Trading"}),a.jsx(he,{to:"/trade",className:"footer-link",children:"Futures"}),a.jsx(he,{to:"/finance",className:"footer-link",children:"Staking"})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-title",children:"Company"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",className:"footer-link",children:"About Us"}),a.jsx("a",{href:"#",className:"footer-link",children:"Careers"}),a.jsx("a",{href:"#",className:"footer-link",children:"Press"})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-title",children:"Support"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",className:"footer-link",children:"Telegram"}),a.jsx(he,{to:"/support",className:"footer-link",children:"Help Center"}),a.jsx("a",{href:"#",className:"footer-link",children:"Contact"})]})]}),a.jsx("div",{className:"footer-bottom",children:"2026 BTCTradePro. All rights reserved."})]})]})}function x1(){const{btcPrice:t,btcChange24h:e,marketStatus:i,marketReady:n}=$s();return a.jsxs("div",{className:"landing-shell",children:[a.jsx("style",{children:`
        .landing-shell {
          min-height: 100vh;
          background: #0b0e11;
          color: #fff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .landing-nav {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 24px;
          background: rgba(11, 14, 17, 0.92);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
        }
        .landing-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 800;
        }
        .brand-dot {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
        }
        .landing-actions {
          display: flex;
          gap: 12px;
        }
        .landing-btn {
          min-height: 44px;
          padding: 0 18px;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .landing-btn.ghost {
          color: #fff;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .landing-btn.primary {
          background: #f7931a;
          color: #111;
        }
        .landing-hero {
          position: relative;
          min-height: calc(100vh - 78px);
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .landing-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .landing-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, rgba(11,14,17,.92) 20%, rgba(11,14,17,.52) 58%, rgba(11,14,17,.88) 100%),
            radial-gradient(circle at top right, rgba(247,147,26,.24), transparent 34%);
        }
        .landing-content {
          position: relative;
          z-index: 1;
          max-width: 1320px;
          margin: 0 auto;
          padding: 48px 24px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 28px;
          align-items: end;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          color: #f6b353;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 18px;
        }
        .landing-title {
          font-size: clamp(42px, 7vw, 80px);
          line-height: .96;
          font-weight: 800;
          letter-spacing: -.05em;
          max-width: 10ch;
          margin-bottom: 18px;
        }
        .landing-title span { color: #f7931a; }
        .landing-copy p {
          max-width: 56ch;
          color: #bdc7d5;
          font-size: 18px;
          line-height: 1.75;
          margin-bottom: 22px;
        }
        .landing-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 24px;
        }
        .stat-card, .side-card {
          background: rgba(17, 23, 34, .78);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 22px;
          padding: 18px;
        }
        .stat-card strong {
          display: block;
          font-size: 28px;
          margin-bottom: 6px;
        }
        .stat-card span {
          color: #8f9eb2;
          font-size: 13px;
        }
        .side-grid {
          display: grid;
          gap: 16px;
        }
        .side-card h3 {
          font-size: 14px;
          color: #f6b353;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 10px;
        }
        .side-card strong {
          display: block;
          font-size: 34px;
          font-family: 'Roboto Mono', monospace;
          margin-bottom: 8px;
        }
        .side-card strong.loading-price {
          color: #8f9eb2;
        }
        .side-card-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: #8f9eb2;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .side-card-label::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: ${i==="live"?"#0ecb81":"#f6b353"};
          box-shadow: 0 0 0 6px ${i==="live"?"rgba(14, 203, 129, 0.14)":"rgba(246, 179, 83, 0.14)"};
        }
        .side-card-change {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
        }
        .side-card-change.up {
          background: rgba(14, 203, 129, 0.14);
          color: #0ecb81;
        }
        .side-card-change.down {
          background: rgba(246, 70, 93, 0.14);
          color: #f6465d;
        }
        .side-card p {
          color: #a8b3c5;
          line-height: 1.7;
        }
        .feature-row {
          display: grid;
          gap: 12px;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .feature-item svg { color: #f7931a; margin-top: 3px; }
        .feature-item div strong { display: block; margin-bottom: 4px; }
        .feature-item div span { color: #8f9eb2; font-size: 14px; }
        .landing-footer {
          position: relative;
          max-width: 1320px;
          margin: 24px auto 0;
          padding: 34px 28px 32px;
          display: grid;
          grid-template-columns: 1.35fr repeat(3, 1fr);
          gap: 28px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(circle at top left, rgba(247, 147, 26, 0.16), transparent 28%),
            radial-gradient(circle at top right, rgba(247, 147, 26, 0.1), transparent 22%),
            linear-gradient(180deg, rgba(10, 14, 22, 0.96), rgba(7, 10, 16, 0.98));
          box-shadow: 0 26px 80px rgba(0, 0, 0, 0.24);
        }
        .landing-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), transparent 18%);
        }
        .footer-brand {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          max-width: 360px;
        }
        .footer-coin {
          width: 48px;
          height: 48px;
          flex: 0 0 auto;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
          font-size: 24px;
          font-weight: 800;
          box-shadow: 0 18px 40px rgba(247, 147, 26, 0.24);
        }
        .footer-brand h3 {
          margin: 0 0 10px;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .footer-brand p {
          margin: 0;
          max-width: 30ch;
        }
        .footer-brand p,
        .footer-link,
        .footer-bottom {
          color: #8f9eb2;
          font-size: 14px;
          line-height: 1.75;
        }
        .footer-column {
          position: relative;
          z-index: 1;
        }
        .footer-title {
          margin-bottom: 10px;
          color: #f6b353;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 12px;
          font-weight: 700;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-link {
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #fff;
        }
        .footer-bottom {
          grid-column: 1 / -1;
          position: relative;
          z-index: 1;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 960px) {
          .landing-content { grid-template-columns: 1fr; }
          .landing-stats { grid-template-columns: 1fr; }
          .landing-footer { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 680px) {
          .landing-nav {
            padding: 14px 16px;
            flex-wrap: wrap;
          }
          .landing-brand { font-size: 20px; }
          .landing-actions { width: 100%; }
          .landing-btn { flex: 1; justify-content: center; }
          .landing-content { padding: 32px 16px; }
          .landing-copy p { font-size: 16px; }
          .landing-footer {
            margin-top: 20px;
            padding: 24px 16px 26px;
            grid-template-columns: 1fr;
            gap: 18px;
            border-radius: 22px;
          }
        }
      `}),a.jsxs("nav",{className:"landing-nav",children:[a.jsxs("div",{className:"landing-brand",children:[a.jsx("div",{className:"brand-dot",children:"₿"}),a.jsxs("span",{children:["BTCTrade",a.jsx("span",{style:{color:"#f7931a"},children:"Pro"})]})]}),a.jsxs("div",{className:"landing-actions",children:[a.jsx(he,{to:"/login",className:"landing-btn ghost",children:"Sign In"}),a.jsx(he,{to:"/login",className:"landing-btn primary",children:"Start Now"})]})]}),a.jsxs("section",{className:"landing-hero",children:[a.jsx("video",{className:"landing-video",src:um,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),a.jsx("div",{className:"landing-overlay"}),a.jsxs("div",{className:"landing-content",children:[a.jsxs("div",{className:"landing-copy",children:[a.jsxs("div",{className:"eyebrow",children:[a.jsx(ii,{size:14})," Professional Bitcoin trading platform"]}),a.jsxs("h1",{className:"landing-title",children:["Trade ",a.jsx("span",{children:"Bitcoin"})," Build Wealth"]}),a.jsx("p",{children:"Join a pro-style BTC platform with live market data, wallet approvals, advanced charting, and a premium mobile-first experience."}),a.jsxs("div",{className:"landing-actions",children:[a.jsxs(he,{to:"/login",className:"landing-btn primary",children:["Sign In ",a.jsx(zr,{size:16})]}),a.jsx(he,{to:"/login",className:"landing-btn ghost",children:"Create Account"})]}),a.jsxs("div",{className:"landing-stats",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:"$2.4B+"}),a.jsx("span",{children:"Trading Volume"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:"5M+"}),a.jsx("span",{children:"Users"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:"99.9%"}),a.jsx("span",{children:"Uptime"})]})]})]}),a.jsxs("div",{className:"side-grid",children:[a.jsxs("div",{className:"side-card",children:[a.jsx("h3",{children:"BTC/USDT"}),a.jsx("div",{className:"side-card-label",children:n?i==="live"?"Live Market":"Fallback Market":"Loading Market"}),a.jsx("strong",{className:n?void 0:"loading-price",children:n?`$${t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:"Loading..."}),n&&a.jsxs("div",{className:`side-card-change ${e>=0?"up":"down"}`,children:[e>=0?"+":"",e.toFixed(2),"% 24h"]}),a.jsx("p",{children:"Real-time Bitcoin pricing powers the trade desk after sign-in, with wallet and approval flows connected across the app."})]}),a.jsxs("div",{className:"side-card",children:[a.jsx("h3",{children:"Why BTCTradePro"}),a.jsxs("div",{className:"feature-row",children:[a.jsxs("div",{className:"feature-item",children:[a.jsx(Ic,{size:18}),a.jsxs("div",{children:[a.jsx("strong",{children:"Live Trade Desk"}),a.jsx("span",{children:"Real BTC charting and market sync."})]})]}),a.jsxs("div",{className:"feature-item",children:[a.jsx(zi,{size:18}),a.jsxs("div",{children:[a.jsx("strong",{children:"Wallet Review Flow"}),a.jsx("span",{children:"Admin-reviewed deposits and withdrawals."})]})]}),a.jsxs("div",{className:"feature-item",children:[a.jsx(Ts,{size:18}),a.jsxs("div",{children:[a.jsx("strong",{children:"Mobile Pro UX"}),a.jsx("span",{children:"Dedicated screens for trade, wallet, profile, and support."})]})]})]})]})]})]})]}),a.jsxs("footer",{className:"landing-footer",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("div",{className:"footer-coin",children:"₿"}),a.jsxs("div",{children:[a.jsx("h3",{children:"BTCTradePro"}),a.jsx("p",{children:"The world's leading Bitcoin trading platform with advanced tools and institutional-grade security."})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("div",{className:"footer-title",children:"Products"}),a.jsxs("div",{className:"footer-links",children:[a.jsx(he,{to:"/login",className:"footer-link",children:"Spot Trading"}),a.jsx(he,{to:"/login",className:"footer-link",children:"Futures"}),a.jsx(he,{to:"/login",className:"footer-link",children:"Staking"})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("div",{className:"footer-title",children:"Company"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",className:"footer-link",children:"About Us"}),a.jsx("a",{href:"#",className:"footer-link",children:"Careers"}),a.jsx("a",{href:"#",className:"footer-link",children:"Press"})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("div",{className:"footer-title",children:"Support"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",className:"footer-link",children:"Telegram"}),a.jsx(he,{to:"/login",className:"footer-link",children:"Help Center"}),a.jsx("a",{href:"#",className:"footer-link",children:"Contact"})]})]}),a.jsx("div",{className:"footer-bottom",children:"2026 BTCTradePro. All rights reserved."})]})]})}var y1=Object.defineProperty,nl=Object.getOwnPropertySymbols,hm=Object.prototype.hasOwnProperty,dm=Object.prototype.propertyIsEnumerable,Th=(t,e,i)=>e in t?y1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,w1=(t,e)=>{for(var i in e||(e={}))hm.call(e,i)&&Th(t,i,e[i]);if(nl)for(var i of nl(e))dm.call(e,i)&&Th(t,i,e[i]);return t},b1=(t,e)=>{var i={};for(var n in t)hm.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&nl)for(var n of nl(t))e.indexOf(n)<0&&dm.call(t,n)&&(i[n]=t[n]);return i};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Mi;(t=>{const e=class{constructor(o,u,h,d){if(this.version=o,this.errorCorrectionLevel=u,this.modules=[],this.isFunction=[],o<e.MIN_VERSION||o>e.MAX_VERSION)throw new RangeError("Version value out of range");if(d<-1||d>7)throw new RangeError("Mask value out of range");this.size=o*4+17;let f=[];for(let g=0;g<this.size;g++)f.push(!1);for(let g=0;g<this.size;g++)this.modules.push(f.slice()),this.isFunction.push(f.slice());this.drawFunctionPatterns();const m=this.addEccAndInterleave(h);if(this.drawCodewords(m),d==-1){let g=1e9;for(let p=0;p<8;p++){this.applyMask(p),this.drawFormatBits(p);const w=this.getPenaltyScore();w<g&&(d=p,g=w),this.applyMask(p)}}r(0<=d&&d<=7),this.mask=d,this.applyMask(d),this.drawFormatBits(d),this.isFunction=[]}static encodeText(o,u){const h=t.QrSegment.makeSegments(o);return e.encodeSegments(h,u)}static encodeBinary(o,u){const h=t.QrSegment.makeBytes(o);return e.encodeSegments([h],u)}static encodeSegments(o,u,h=1,d=40,f=-1,m=!0){if(!(e.MIN_VERSION<=h&&h<=d&&d<=e.MAX_VERSION)||f<-1||f>7)throw new RangeError("Invalid value");let g,p;for(g=h;;g++){const y=e.getNumDataCodewords(g,u)*8,b=c.getTotalBits(o,g);if(b<=y){p=b;break}if(g>=d)throw new RangeError("Data too long")}for(const y of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])m&&p<=e.getNumDataCodewords(g,y)*8&&(u=y);let w=[];for(const y of o){n(y.mode.modeBits,4,w),n(y.numChars,y.mode.numCharCountBits(g),w);for(const b of y.getData())w.push(b)}r(w.length==p);const v=e.getNumDataCodewords(g,u)*8;r(w.length<=v),n(0,Math.min(4,v-w.length),w),n(0,(8-w.length%8)%8,w),r(w.length%8==0);for(let y=236;w.length<v;y^=253)n(y,8,w);let x=[];for(;x.length*8<w.length;)x.push(0);return w.forEach((y,b)=>x[b>>>3]|=y<<7-(b&7)),new e(g,u,x,f)}getModule(o,u){return 0<=o&&o<this.size&&0<=u&&u<this.size&&this.modules[u][o]}getModules(){return this.modules}drawFunctionPatterns(){for(let h=0;h<this.size;h++)this.setFunctionModule(6,h,h%2==0),this.setFunctionModule(h,6,h%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const o=this.getAlignmentPatternPositions(),u=o.length;for(let h=0;h<u;h++)for(let d=0;d<u;d++)h==0&&d==0||h==0&&d==u-1||h==u-1&&d==0||this.drawAlignmentPattern(o[h],o[d]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(o){const u=this.errorCorrectionLevel.formatBits<<3|o;let h=u;for(let f=0;f<10;f++)h=h<<1^(h>>>9)*1335;const d=(u<<10|h)^21522;r(d>>>15==0);for(let f=0;f<=5;f++)this.setFunctionModule(8,f,s(d,f));this.setFunctionModule(8,7,s(d,6)),this.setFunctionModule(8,8,s(d,7)),this.setFunctionModule(7,8,s(d,8));for(let f=9;f<15;f++)this.setFunctionModule(14-f,8,s(d,f));for(let f=0;f<8;f++)this.setFunctionModule(this.size-1-f,8,s(d,f));for(let f=8;f<15;f++)this.setFunctionModule(8,this.size-15+f,s(d,f));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let o=this.version;for(let h=0;h<12;h++)o=o<<1^(o>>>11)*7973;const u=this.version<<12|o;r(u>>>18==0);for(let h=0;h<18;h++){const d=s(u,h),f=this.size-11+h%3,m=Math.floor(h/3);this.setFunctionModule(f,m,d),this.setFunctionModule(m,f,d)}}drawFinderPattern(o,u){for(let h=-4;h<=4;h++)for(let d=-4;d<=4;d++){const f=Math.max(Math.abs(d),Math.abs(h)),m=o+d,g=u+h;0<=m&&m<this.size&&0<=g&&g<this.size&&this.setFunctionModule(m,g,f!=2&&f!=4)}}drawAlignmentPattern(o,u){for(let h=-2;h<=2;h++)for(let d=-2;d<=2;d++)this.setFunctionModule(o+d,u+h,Math.max(Math.abs(d),Math.abs(h))!=1)}setFunctionModule(o,u,h){this.modules[u][o]=h,this.isFunction[u][o]=!0}addEccAndInterleave(o){const u=this.version,h=this.errorCorrectionLevel;if(o.length!=e.getNumDataCodewords(u,h))throw new RangeError("Invalid argument");const d=e.NUM_ERROR_CORRECTION_BLOCKS[h.ordinal][u],f=e.ECC_CODEWORDS_PER_BLOCK[h.ordinal][u],m=Math.floor(e.getNumRawDataModules(u)/8),g=d-m%d,p=Math.floor(m/d);let w=[];const v=e.reedSolomonComputeDivisor(f);for(let y=0,b=0;y<d;y++){let j=o.slice(b,b+p-f+(y<g?0:1));b+=j.length;const M=e.reedSolomonComputeRemainder(j,v);y<g&&j.push(0),w.push(j.concat(M))}let x=[];for(let y=0;y<w[0].length;y++)w.forEach((b,j)=>{(y!=p-f||j>=g)&&x.push(b[y])});return r(x.length==m),x}drawCodewords(o){if(o.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let u=0;for(let h=this.size-1;h>=1;h-=2){h==6&&(h=5);for(let d=0;d<this.size;d++)for(let f=0;f<2;f++){const m=h-f,p=(h+1&2)==0?this.size-1-d:d;!this.isFunction[p][m]&&u<o.length*8&&(this.modules[p][m]=s(o[u>>>3],7-(u&7)),u++)}}r(u==o.length*8)}applyMask(o){if(o<0||o>7)throw new RangeError("Mask value out of range");for(let u=0;u<this.size;u++)for(let h=0;h<this.size;h++){let d;switch(o){case 0:d=(h+u)%2==0;break;case 1:d=u%2==0;break;case 2:d=h%3==0;break;case 3:d=(h+u)%3==0;break;case 4:d=(Math.floor(h/3)+Math.floor(u/2))%2==0;break;case 5:d=h*u%2+h*u%3==0;break;case 6:d=(h*u%2+h*u%3)%2==0;break;case 7:d=((h+u)%2+h*u%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[u][h]&&d&&(this.modules[u][h]=!this.modules[u][h])}}getPenaltyScore(){let o=0;for(let f=0;f<this.size;f++){let m=!1,g=0,p=[0,0,0,0,0,0,0];for(let w=0;w<this.size;w++)this.modules[f][w]==m?(g++,g==5?o+=e.PENALTY_N1:g>5&&o++):(this.finderPenaltyAddHistory(g,p),m||(o+=this.finderPenaltyCountPatterns(p)*e.PENALTY_N3),m=this.modules[f][w],g=1);o+=this.finderPenaltyTerminateAndCount(m,g,p)*e.PENALTY_N3}for(let f=0;f<this.size;f++){let m=!1,g=0,p=[0,0,0,0,0,0,0];for(let w=0;w<this.size;w++)this.modules[w][f]==m?(g++,g==5?o+=e.PENALTY_N1:g>5&&o++):(this.finderPenaltyAddHistory(g,p),m||(o+=this.finderPenaltyCountPatterns(p)*e.PENALTY_N3),m=this.modules[w][f],g=1);o+=this.finderPenaltyTerminateAndCount(m,g,p)*e.PENALTY_N3}for(let f=0;f<this.size-1;f++)for(let m=0;m<this.size-1;m++){const g=this.modules[f][m];g==this.modules[f][m+1]&&g==this.modules[f+1][m]&&g==this.modules[f+1][m+1]&&(o+=e.PENALTY_N2)}let u=0;for(const f of this.modules)u=f.reduce((m,g)=>m+(g?1:0),u);const h=this.size*this.size,d=Math.ceil(Math.abs(u*20-h*10)/h)-1;return r(0<=d&&d<=9),o+=d*e.PENALTY_N4,r(0<=o&&o<=2568888),o}getAlignmentPatternPositions(){if(this.version==1)return[];{const o=Math.floor(this.version/7)+2,u=this.version==32?26:Math.ceil((this.version*4+4)/(o*2-2))*2;let h=[6];for(let d=this.size-7;h.length<o;d-=u)h.splice(1,0,d);return h}}static getNumRawDataModules(o){if(o<e.MIN_VERSION||o>e.MAX_VERSION)throw new RangeError("Version number out of range");let u=(16*o+128)*o+64;if(o>=2){const h=Math.floor(o/7)+2;u-=(25*h-10)*h-55,o>=7&&(u-=36)}return r(208<=u&&u<=29648),u}static getNumDataCodewords(o,u){return Math.floor(e.getNumRawDataModules(o)/8)-e.ECC_CODEWORDS_PER_BLOCK[u.ordinal][o]*e.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][o]}static reedSolomonComputeDivisor(o){if(o<1||o>255)throw new RangeError("Degree out of range");let u=[];for(let d=0;d<o-1;d++)u.push(0);u.push(1);let h=1;for(let d=0;d<o;d++){for(let f=0;f<u.length;f++)u[f]=e.reedSolomonMultiply(u[f],h),f+1<u.length&&(u[f]^=u[f+1]);h=e.reedSolomonMultiply(h,2)}return u}static reedSolomonComputeRemainder(o,u){let h=u.map(d=>0);for(const d of o){const f=d^h.shift();h.push(0),u.forEach((m,g)=>h[g]^=e.reedSolomonMultiply(m,f))}return h}static reedSolomonMultiply(o,u){if(o>>>8||u>>>8)throw new RangeError("Byte out of range");let h=0;for(let d=7;d>=0;d--)h=h<<1^(h>>>7)*285,h^=(u>>>d&1)*o;return r(h>>>8==0),h}finderPenaltyCountPatterns(o){const u=o[1];r(u<=this.size*3);const h=u>0&&o[2]==u&&o[3]==u*3&&o[4]==u&&o[5]==u;return(h&&o[0]>=u*4&&o[6]>=u?1:0)+(h&&o[6]>=u*4&&o[0]>=u?1:0)}finderPenaltyTerminateAndCount(o,u,h){return o&&(this.finderPenaltyAddHistory(u,h),u=0),u+=this.size,this.finderPenaltyAddHistory(u,h),this.finderPenaltyCountPatterns(h)}finderPenaltyAddHistory(o,u){u[0]==0&&(o+=this.size),u.pop(),u.unshift(o)}};let i=e;i.MIN_VERSION=1,i.MAX_VERSION=40,i.PENALTY_N1=3,i.PENALTY_N2=3,i.PENALTY_N3=40,i.PENALTY_N4=10,i.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],i.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=i;function n(o,u,h){if(u<0||u>31||o>>>u)throw new RangeError("Value out of range");for(let d=u-1;d>=0;d--)h.push(o>>>d&1)}function s(o,u){return(o>>>u&1)!=0}function r(o){if(!o)throw new Error("Assertion error")}const l=class{constructor(o,u,h){if(this.mode=o,this.numChars=u,this.bitData=h,u<0)throw new RangeError("Invalid argument");this.bitData=h.slice()}static makeBytes(o){let u=[];for(const h of o)n(h,8,u);return new l(l.Mode.BYTE,o.length,u)}static makeNumeric(o){if(!l.isNumeric(o))throw new RangeError("String contains non-numeric characters");let u=[];for(let h=0;h<o.length;){const d=Math.min(o.length-h,3);n(parseInt(o.substr(h,d),10),d*3+1,u),h+=d}return new l(l.Mode.NUMERIC,o.length,u)}static makeAlphanumeric(o){if(!l.isAlphanumeric(o))throw new RangeError("String contains unencodable characters in alphanumeric mode");let u=[],h;for(h=0;h+2<=o.length;h+=2){let d=l.ALPHANUMERIC_CHARSET.indexOf(o.charAt(h))*45;d+=l.ALPHANUMERIC_CHARSET.indexOf(o.charAt(h+1)),n(d,11,u)}return h<o.length&&n(l.ALPHANUMERIC_CHARSET.indexOf(o.charAt(h)),6,u),new l(l.Mode.ALPHANUMERIC,o.length,u)}static makeSegments(o){return o==""?[]:l.isNumeric(o)?[l.makeNumeric(o)]:l.isAlphanumeric(o)?[l.makeAlphanumeric(o)]:[l.makeBytes(l.toUtf8ByteArray(o))]}static makeEci(o){let u=[];if(o<0)throw new RangeError("ECI assignment value out of range");if(o<128)n(o,8,u);else if(o<16384)n(2,2,u),n(o,14,u);else if(o<1e6)n(6,3,u),n(o,21,u);else throw new RangeError("ECI assignment value out of range");return new l(l.Mode.ECI,0,u)}static isNumeric(o){return l.NUMERIC_REGEX.test(o)}static isAlphanumeric(o){return l.ALPHANUMERIC_REGEX.test(o)}getData(){return this.bitData.slice()}static getTotalBits(o,u){let h=0;for(const d of o){const f=d.mode.numCharCountBits(u);if(d.numChars>=1<<f)return 1/0;h+=4+f+d.bitData.length}return h}static toUtf8ByteArray(o){o=encodeURI(o);let u=[];for(let h=0;h<o.length;h++)o.charAt(h)!="%"?u.push(o.charCodeAt(h)):(u.push(parseInt(o.substr(h+1,2),16)),h+=2);return u}};let c=l;c.NUMERIC_REGEX=/^[0-9]*$/,c.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,c.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=c})(Mi||(Mi={}));(t=>{(e=>{const i=class{constructor(s,r){this.ordinal=s,this.formatBits=r}};let n=i;n.LOW=new i(0,1),n.MEDIUM=new i(1,0),n.QUARTILE=new i(2,3),n.HIGH=new i(3,2),e.Ecc=n})(t.QrCode||(t.QrCode={}))})(Mi||(Mi={}));(t=>{(e=>{const i=class{constructor(s,r){this.modeBits=s,this.numBitsCharCount=r}numCharCountBits(s){return this.numBitsCharCount[Math.floor((s+7)/17)]}};let n=i;n.NUMERIC=new i(1,[10,12,14]),n.ALPHANUMERIC=new i(2,[9,11,13]),n.BYTE=new i(4,[8,16,16]),n.KANJI=new i(8,[8,10,12]),n.ECI=new i(7,[0,0,0]),e.Mode=n})(t.QrSegment||(t.QrSegment={}))})(Mi||(Mi={}));var On=Mi;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var k1={L:On.QrCode.Ecc.LOW,M:On.QrCode.Ecc.MEDIUM,Q:On.QrCode.Ecc.QUARTILE,H:On.QrCode.Ecc.HIGH},j1=128,S1="L",N1="#FFFFFF",C1="#000000",E1=!1,fm=4,z1=.1;function M1(t,e=0){const i=[];return t.forEach(function(n,s){let r=null;n.forEach(function(l,c){if(!l&&r!==null){i.push(`M${r+e} ${s+e}h${c-r}v1H${r+e}z`),r=null;return}if(c===n.length-1){if(!l)return;r===null?i.push(`M${c+e},${s+e} h1v1H${c+e}z`):i.push(`M${r+e},${s+e} h${c+1-r}v1H${r+e}z`);return}l&&r===null&&(r=c)})}),i.join("")}function _1(t,e){return t.slice().map((i,n)=>n<e.y||n>=e.y+e.h?i:i.map((s,r)=>r<e.x||r>=e.x+e.w?s:!1))}function T1(t,e,i,n){if(n==null)return null;const s=i?fm:0,r=t.length+s*2,l=Math.floor(e*z1),c=r/e,o=(n.width||l)*c,u=(n.height||l)*c,h=n.x==null?t.length/2-o/2:n.x*c,d=n.y==null?t.length/2-u/2:n.y*c;let f=null;if(n.excavate){let m=Math.floor(h),g=Math.floor(d),p=Math.ceil(o+h-m),w=Math.ceil(u+d-g);f={x:m,y:g,w:p,h:w}}return{x:h,y:d,h:u,w:o,excavation:f}}(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})();function P1(t){const e=t,{value:i,size:n=j1,level:s=S1,bgColor:r=N1,fgColor:l=C1,includeMargin:c=E1,imageSettings:o}=e,u=b1(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let h=On.QrCode.encodeText(i,k1[s]).getModules();const d=c?fm:0,f=h.length+d*2,m=T1(h,n,c,o);let g=null;o!=null&&m!=null&&(m.excavation!=null&&(h=_1(h,m.excavation)),g=gi.createElement("image",{xlinkHref:o.src,height:m.h,width:m.w,x:m.x+d,y:m.y+d,preserveAspectRatio:"none"}));const p=M1(h,d);return gi.createElement("svg",w1({height:n,width:n,viewBox:`0 0 ${f} ${f}`},u),gi.createElement("path",{fill:r,d:`M0,0 h${f}v${f}H0z`,shapeRendering:"crispEdges"}),gi.createElement("path",{fill:l,d:p,shapeRendering:"crispEdges"}),g)}function L1(){const{user:t,updateUser:e}=hi(),{btcPrice:i,transactions:n,addTransaction:s}=$s(),[r,l]=k.useState("deposit"),[c,o]=k.useState(""),[u,h]=k.useState(""),[d,f]=k.useState(""),[m,g]=k.useState(""),[p,w]=k.useState(!1),[v,x]=k.useState(!1),[y,b]=k.useState(!1),[j,M]=k.useState(!1),[_,T]=k.useState(!1),D=k.useMemo(()=>n.filter(V=>V.userEmail===(t==null?void 0:t.email)).slice(0,8),[n,t==null?void 0:t.email]),B=async()=>{await navigator.clipboard.writeText(er),T(!0),window.setTimeout(()=>T(!1),1500)},Z=()=>{!c||parseFloat(c)<=0||(w(!0),x(!1))},ze=()=>{if(!t||!c)return;const V=parseFloat(c),ce=V*i,Le={id:`tx-${Date.now()}`,type:"deposit",amount:ce,btcAmount:V,walletAddress:er,userEmail:t.email,userName:t.name,status:"pending",timestamp:new Date().toISOString()};s(Le),x(!0),o(""),w(!1)},ke=()=>{if(!t||!u)return;const V=parseFloat(u);if(V>(t.usdBalance||0)){alert("Insufficient USD balance");return}s({id:`tx-${Date.now()}`,type:"withdraw",amount:V,btcAmount:V/i,withdrawAddress:d,userEmail:t.email,userName:t.name,status:"pending",timestamp:new Date().toISOString()}),b(!0),h(""),f("")},ye=()=>{if(!t||!m)return;const V=parseFloat(m);if(V>t.btcBalance){alert("Insufficient BTC balance");return}e({btcBalance:t.btcBalance-V,stakeAmount:(t.stakeAmount||0)+V}),s({id:`tx-${Date.now()}`,type:"stake",amount:V*i,btcAmount:V,userEmail:t.email,userName:t.name,status:"completed",timestamp:new Date().toISOString()}),M(!0),g("")};return a.jsxs("div",{className:"finance-shell",children:[a.jsx("style",{children:`
        .finance-shell {
          max-width: 1220px;
          margin: 0 auto;
          color: #eef3fb;
          display: grid;
          gap: 22px;
        }
        .card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
        }
        .page-head {
          padding: 26px;
        }
        .page-head h1 {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
        }
        .page-head p {
          color: #90a0b6;
        }
        .balance-grid,
        .content-grid {
          display: grid;
          gap: 18px;
        }
        .balance-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .balance-card {
          padding: 22px;
        }
        .balance-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          background: rgba(247, 147, 26, 0.12);
          color: #f7931a;
        }
        .balance-card h3 {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8fa2ba;
          margin-bottom: 8px;
        }
        .balance-card strong {
          font-size: 30px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 800;
        }
        .balance-card p {
          color: #90a0b6;
          margin-top: 8px;
          font-size: 13px;
        }
        .content-grid {
          grid-template-columns: minmax(0, 1fr) 380px;
        }
        .wallet-main {
          padding: 24px;
        }
        .tab-row {
          display: flex;
          gap: 10px;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }
        .tab-btn {
          min-height: 42px;
          padding: 0 16px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.03);
          color: #8fa2ba;
          font-weight: 700;
        }
        .tab-btn.active {
          background: rgba(247, 147, 26, 0.16);
          border-color: rgba(247, 147, 26, 0.36);
          color: #f6b353;
        }
        .flow-card {
          padding: 22px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.03);
        }
        .flow-card h2 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .flow-card p {
          color: #90a0b6;
          line-height: 1.7;
        }
        .field {
          margin-top: 18px;
        }
        .field label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #8fa2ba;
          margin-bottom: 8px;
        }
        .amount-input {
          width: 100%;
          min-height: 56px;
          padding: 0 18px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          color: #eef3fb;
          font-size: 24px;
          font-weight: 800;
          font-family: 'JetBrains Mono', monospace;
        }
        .amount-note {
          color: #90a0b6;
          font-size: 13px;
          margin-top: 8px;
        }
        .cta {
          margin-top: 18px;
          width: 100%;
          min-height: 52px;
          border: none;
          border-radius: 16px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
          font-weight: 800;
          font-size: 15px;
        }
        .qr-panel {
          padding: 22px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(20, 27, 38, 0.88), rgba(13, 18, 26, 0.92));
          border: 1px solid rgba(247, 147, 26, 0.16);
          text-align: center;
          display: grid;
          gap: 16px;
        }
        .deposit-layout {
          display: grid;
          gap: 18px;
        }
        .deposit-box-head strong {
          display: block;
          font-size: 18px;
          margin-bottom: 6px;
        }
        .deposit-box-head span {
          color: #8fa2ba;
          font-size: 13px;
          line-height: 1.6;
        }
        .network-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(247, 147, 26, 0.14);
          color: #f6b353;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .qr-wrap {
          display: flex;
          justify-content: center;
        }
        .address-box {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 16px;
          padding: 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
        }
        .address-box code {
          flex: 1;
          color: #eef3fb;
          font-size: 13px;
          word-break: break-all;
        }
        .icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: none;
          background: rgba(255, 255, 255, 0.06);
          color: #eef3fb;
        }
        .status-banner {
          margin-top: 16px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(52, 120, 246, 0.16);
          color: #cde0ff;
          line-height: 1.6;
        }
        .history-card {
          padding: 24px;
        }
        .history-card h3 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 18px;
        }
        .tx-list {
          display: grid;
          gap: 12px;
        }
        .tx-item {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto auto;
          gap: 12px;
          align-items: center;
          padding: 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
        }
        .tx-icon {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tx-icon.deposit { background: rgba(14, 203, 129, 0.14); color: #0ecb81; }
        .tx-icon.withdraw { background: rgba(246, 70, 93, 0.14); color: #f6465d; }
        .tx-icon.stake { background: rgba(247, 147, 26, 0.14); color: #f7931a; }
        .tx-meta strong {
          display: block;
          text-transform: capitalize;
        }
        .tx-meta span,
        .tx-status {
          color: #8fa2ba;
          font-size: 12px;
        }
        .tx-amount {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
        }
        .tx-status.completed { color: #0ecb81; }
        .tx-status.pending { color: #f6b353; }
        .tx-status.rejected { color: #f6465d; }
        .tx-status-label {
          text-transform: capitalize;
        }
        @media (max-width: 1080px) {
          .balance-grid,
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 760px) {
          .page-head,
          .wallet-main,
          .history-card,
          .balance-card {
            padding: 18px;
          }
          .tx-item {
            grid-template-columns: auto 1fr;
          }
        }
      `}),a.jsxs("section",{className:"card page-head",children:[a.jsx("h1",{children:"Finance Center"}),a.jsx("p",{children:"Deposit, withdraw, and manage your demo BTC wallet with a more professional exchange flow."})]}),a.jsxs("section",{className:"balance-grid",children:[a.jsxs("div",{className:"card balance-card",children:[a.jsx("div",{className:"balance-icon",children:a.jsx(zi,{size:24})}),a.jsx("h3",{children:"USD Balance"}),a.jsxs("strong",{children:["$",de((t==null?void 0:t.usdBalance)||0)]}),a.jsx("p",{children:"Available for trading and withdrawals after System Admin verification."})]}),a.jsxs("div",{className:"card balance-card",children:[a.jsx("div",{className:"balance-icon",children:a.jsx(Wx,{size:24})}),a.jsx("h3",{children:"BTC Holdings"}),a.jsxs("strong",{children:[((t==null?void 0:t.btcBalance)||0).toFixed(6)," BTC"]}),a.jsxs("p",{children:["Live value: $",(((t==null?void 0:t.btcBalance)||0)*i).toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"card balance-card",children:[a.jsx("div",{className:"balance-icon",children:a.jsx(Sh,{size:24})}),a.jsx("h3",{children:"Staked BTC"}),a.jsxs("strong",{children:[((t==null?void 0:t.stakeAmount)||0).toFixed(6)," BTC"]}),a.jsx("p",{children:"Passive rewards stay in demo mode and can be showcased to users."})]})]}),a.jsxs("section",{className:"content-grid",children:[a.jsxs("div",{className:"card wallet-main",children:[a.jsxs("div",{className:"tab-row",children:[a.jsx("button",{className:`tab-btn ${r==="deposit"?"active":""}`,onClick:()=>l("deposit"),children:"Deposit"}),a.jsx("button",{className:`tab-btn ${r==="withdraw"?"active":""}`,onClick:()=>l("withdraw"),children:"Withdraw"}),a.jsx("button",{className:`tab-btn ${r==="stake"?"active":""}`,onClick:()=>l("stake"),children:"Stake"})]}),r==="deposit"&&a.jsxs("div",{className:"deposit-layout",children:[a.jsxs("div",{className:"flow-card",children:[a.jsx("h2",{children:"Deposit BTC"}),a.jsx("p",{children:"Enter how much BTC the user will deposit. After you prepare the request, a separate wallet box appears with the QR code, wallet address, and finish button."}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Deposit Amount (BTC)"}),a.jsx("input",{className:"amount-input",value:c,onChange:V=>o(V.target.value),type:"number",placeholder:"0.01000000"}),a.jsxs("div",{className:"amount-note",children:["Website credit after verification: ",c?`$${de(parseFloat(c||"0")*i)}`:"$0.00"," USDT"]})]}),a.jsx("button",{className:"cta",onClick:Z,children:"Prepare Deposit"})]}),p&&a.jsxs("div",{className:"qr-panel",children:[a.jsxs("div",{className:"deposit-box-head",children:[a.jsx("strong",{children:"BTC Deposit Wallet"}),a.jsxs("span",{children:["Send exactly ",parseFloat(c).toFixed(8)," BTC to this wallet, then click finish deposit. Status will stay pending until System Admin verifies it."]})]}),a.jsx("div",{className:"network-pill",children:"BTC Network Only"}),a.jsx("div",{className:"qr-wrap",children:a.jsx(P1,{value:er,size:176,bgColor:"#ffffff",fgColor:"#000000"})}),a.jsxs("div",{className:"address-box",children:[a.jsx("code",{children:er}),a.jsx("button",{className:"icon-btn",onClick:B,children:_?a.jsx(nm,{size:18}):a.jsx(Yx,{size:18})})]}),a.jsxs("div",{className:"amount-note",children:["Pending credit: ",parseFloat(c).toFixed(8)," BTC and $",de(parseFloat(c)*i)," USDT"]}),a.jsx("button",{className:"cta",onClick:ze,children:"Finish Deposit"})]}),v&&a.jsx("div",{className:"status-banner",children:"Deposit submitted and now pending. After System Admin verifies it, the user BTC balance and USD trade balance will both increase."})]}),r==="withdraw"&&a.jsxs("div",{className:"flow-card",children:[a.jsx("h2",{children:"Withdraw USD"}),a.jsx("p",{children:"Submit a withdrawal request using your available USD balance. The amount is deducted only after System Admin approval."}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Withdrawal Amount (USD)"}),a.jsx("input",{className:"amount-input",value:u,onChange:V=>h(V.target.value),type:"number",placeholder:"500"}),a.jsxs("div",{className:"amount-note",children:["Available: $",de((t==null?void 0:t.usdBalance)||0)]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"BTC Wallet Address"}),a.jsx("input",{className:"amount-input",style:{fontSize:"16px",fontWeight:600},value:d,onChange:V=>f(V.target.value),type:"text",placeholder:"Paste your BTC wallet address"})]}),a.jsx("button",{className:"cta",onClick:ke,children:"Submit Withdrawal"}),y&&a.jsx("div",{className:"status-banner",children:"Withdrawal request submitted. System Admin approval will remove the amount from your wallet."})]}),r==="stake"&&a.jsxs("div",{className:"flow-card",children:[a.jsx("h2",{children:"Stake BTC"}),a.jsx("p",{children:"Move BTC into the staking pool and make the wallet area feel more complete for demo users."}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Stake Amount (BTC)"}),a.jsx("input",{className:"amount-input",value:m,onChange:V=>g(V.target.value),type:"number",placeholder:"0.050000"}),a.jsxs("div",{className:"amount-note",children:["Available BTC: ",((t==null?void 0:t.btcBalance)||0).toFixed(6)]})]}),a.jsx("button",{className:"cta",onClick:ye,children:"Start Staking"}),j&&a.jsx("div",{className:"status-banner",children:"BTC moved to staking successfully. The balance updates immediately in this demo."})]})]}),a.jsxs("aside",{className:"card history-card",children:[a.jsx("h3",{children:"Recent Activity"}),a.jsxs("div",{className:"tx-list",children:[D.map(V=>a.jsxs("div",{className:"tx-item",children:[a.jsx("div",{className:`tx-icon ${V.type}`,children:V.type==="deposit"?a.jsx(Fx,{size:20}):V.type==="withdraw"?a.jsx(Vx,{size:20}):a.jsx(Sh,{size:20})}),a.jsxs("div",{className:"tx-meta",children:[a.jsx("strong",{children:V.type}),a.jsx("span",{children:new Date(V.timestamp).toLocaleString()})]}),a.jsxs("div",{className:"tx-amount",children:["$",de(V.amount)]}),a.jsxs("div",{className:`tx-status ${V.status}`,children:[a.jsx("span",{className:"tx-status-label",children:V.status==="completed"?"verified":V.status}),V.reviewedBy?` • ${V.reviewedBy}`:""]})]},V.id)),D.length===0&&a.jsx("div",{className:"amount-note",children:"No transactions yet."})]})]})]})]})}function te(t){var e=t.width,i=t.height;if(e<0)throw new Error("Negative width is not allowed for Size");if(i<0)throw new Error("Negative height is not allowed for Size");return{width:e,height:i}}function ki(t,e){return t.width===e.width&&t.height===e.height}var R1=function(){function t(e){var i=this;this._resolutionListener=function(){return i._onResolutionChanged()},this._resolutionMediaQueryList=null,this._observers=[],this._window=e,this._installResolutionListener()}return t.prototype.dispose=function(){this._uninstallResolutionListener(),this._window=null},Object.defineProperty(t.prototype,"value",{get:function(){return this._window.devicePixelRatio},enumerable:!1,configurable:!0}),t.prototype.subscribe=function(e){var i=this,n={next:e};return this._observers.push(n),{unsubscribe:function(){i._observers=i._observers.filter(function(s){return s!==n})}}},t.prototype._installResolutionListener=function(){if(this._resolutionMediaQueryList!==null)throw new Error("Resolution listener is already installed");var e=this._window.devicePixelRatio;this._resolutionMediaQueryList=this._window.matchMedia("all and (resolution: ".concat(e,"dppx)")),this._resolutionMediaQueryList.addListener(this._resolutionListener)},t.prototype._uninstallResolutionListener=function(){this._resolutionMediaQueryList!==null&&(this._resolutionMediaQueryList.removeListener(this._resolutionListener),this._resolutionMediaQueryList=null)},t.prototype._reinstallResolutionListener=function(){this._uninstallResolutionListener(),this._installResolutionListener()},t.prototype._onResolutionChanged=function(){var e=this;this._observers.forEach(function(i){return i.next(e._window.devicePixelRatio)}),this._reinstallResolutionListener()},t}();function $1(t){return new R1(t)}var D1=function(){function t(e,i,n){var s;this._canvasElement=null,this._bitmapSizeChangedListeners=[],this._suggestedBitmapSize=null,this._suggestedBitmapSizeChangedListeners=[],this._devicePixelRatioObservable=null,this._canvasElementResizeObserver=null,this._canvasElement=e,this._canvasElementClientSize=te({width:this._canvasElement.clientWidth,height:this._canvasElement.clientHeight}),this._transformBitmapSize=i??function(r){return r},this._allowResizeObserver=(s=n==null?void 0:n.allowResizeObserver)!==null&&s!==void 0?s:!0,this._chooseAndInitObserver()}return t.prototype.dispose=function(){var e,i;if(this._canvasElement===null)throw new Error("Object is disposed");(e=this._canvasElementResizeObserver)===null||e===void 0||e.disconnect(),this._canvasElementResizeObserver=null,(i=this._devicePixelRatioObservable)===null||i===void 0||i.dispose(),this._devicePixelRatioObservable=null,this._suggestedBitmapSizeChangedListeners.length=0,this._bitmapSizeChangedListeners.length=0,this._canvasElement=null},Object.defineProperty(t.prototype,"canvasElement",{get:function(){if(this._canvasElement===null)throw new Error("Object is disposed");return this._canvasElement},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"canvasElementClientSize",{get:function(){return this._canvasElementClientSize},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bitmapSize",{get:function(){return te({width:this.canvasElement.width,height:this.canvasElement.height})},enumerable:!1,configurable:!0}),t.prototype.resizeCanvasElement=function(e){this._canvasElementClientSize=te(e),this.canvasElement.style.width="".concat(this._canvasElementClientSize.width,"px"),this.canvasElement.style.height="".concat(this._canvasElementClientSize.height,"px"),this._invalidateBitmapSize()},t.prototype.subscribeBitmapSizeChanged=function(e){this._bitmapSizeChangedListeners.push(e)},t.prototype.unsubscribeBitmapSizeChanged=function(e){this._bitmapSizeChangedListeners=this._bitmapSizeChangedListeners.filter(function(i){return i!==e})},Object.defineProperty(t.prototype,"suggestedBitmapSize",{get:function(){return this._suggestedBitmapSize},enumerable:!1,configurable:!0}),t.prototype.subscribeSuggestedBitmapSizeChanged=function(e){this._suggestedBitmapSizeChangedListeners.push(e)},t.prototype.unsubscribeSuggestedBitmapSizeChanged=function(e){this._suggestedBitmapSizeChangedListeners=this._suggestedBitmapSizeChangedListeners.filter(function(i){return i!==e})},t.prototype.applySuggestedBitmapSize=function(){if(this._suggestedBitmapSize!==null){var e=this._suggestedBitmapSize;this._suggestedBitmapSize=null,this._resizeBitmap(e),this._emitSuggestedBitmapSizeChanged(e,this._suggestedBitmapSize)}},t.prototype._resizeBitmap=function(e){var i=this.bitmapSize;ki(i,e)||(this.canvasElement.width=e.width,this.canvasElement.height=e.height,this._emitBitmapSizeChanged(i,e))},t.prototype._emitBitmapSizeChanged=function(e,i){var n=this;this._bitmapSizeChangedListeners.forEach(function(s){return s.call(n,e,i)})},t.prototype._suggestNewBitmapSize=function(e){var i=this._suggestedBitmapSize,n=te(this._transformBitmapSize(e,this._canvasElementClientSize)),s=ki(this.bitmapSize,n)?null:n;i===null&&s===null||i!==null&&s!==null&&ki(i,s)||(this._suggestedBitmapSize=s,this._emitSuggestedBitmapSizeChanged(i,s))},t.prototype._emitSuggestedBitmapSizeChanged=function(e,i){var n=this;this._suggestedBitmapSizeChangedListeners.forEach(function(s){return s.call(n,e,i)})},t.prototype._chooseAndInitObserver=function(){var e=this;if(!this._allowResizeObserver){this._initDevicePixelRatioObservable();return}A1().then(function(i){return i?e._initResizeObserver():e._initDevicePixelRatioObservable()})},t.prototype._initDevicePixelRatioObservable=function(){var e=this;if(this._canvasElement!==null){var i=Ph(this._canvasElement);if(i===null)throw new Error("No window is associated with the canvas");this._devicePixelRatioObservable=$1(i),this._devicePixelRatioObservable.subscribe(function(){return e._invalidateBitmapSize()}),this._invalidateBitmapSize()}},t.prototype._invalidateBitmapSize=function(){var e,i;if(this._canvasElement!==null){var n=Ph(this._canvasElement);if(n!==null){var s=(i=(e=this._devicePixelRatioObservable)===null||e===void 0?void 0:e.value)!==null&&i!==void 0?i:n.devicePixelRatio,r=this._canvasElement.getClientRects(),l=r[0]!==void 0?I1(r[0],s):te({width:this._canvasElementClientSize.width*s,height:this._canvasElementClientSize.height*s});this._suggestNewBitmapSize(l)}}},t.prototype._initResizeObserver=function(){var e=this;this._canvasElement!==null&&(this._canvasElementResizeObserver=new ResizeObserver(function(i){var n=i.find(function(l){return l.target===e._canvasElement});if(!(!n||!n.devicePixelContentBoxSize||!n.devicePixelContentBoxSize[0])){var s=n.devicePixelContentBoxSize[0],r=te({width:s.inlineSize,height:s.blockSize});e._suggestNewBitmapSize(r)}}),this._canvasElementResizeObserver.observe(this._canvasElement,{box:"device-pixel-content-box"}))},t}();function B1(t,e){return new D1(t,e.transform,e.options)}function Ph(t){return t.ownerDocument.defaultView}function A1(){return new Promise(function(t){var e=new ResizeObserver(function(i){t(i.every(function(n){return"devicePixelContentBoxSize"in n})),e.disconnect()});e.observe(document.body,{box:"device-pixel-content-box"})}).catch(function(){return!1})}function I1(t,e){return te({width:Math.round(t.left*e+t.width*e)-Math.round(t.left*e),height:Math.round(t.top*e+t.height*e)-Math.round(t.top*e)})}var O1=function(){function t(e,i,n){if(i.width===0||i.height===0)throw new TypeError("Rendering target could only be created on a media with positive width and height");if(this._mediaSize=i,n.width===0||n.height===0)throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");this._bitmapSize=n,this._context=e}return t.prototype.useMediaCoordinateSpace=function(e){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),this._context.scale(this._horizontalPixelRatio,this._verticalPixelRatio),e({context:this._context,mediaSize:this._mediaSize})}finally{this._context.restore()}},t.prototype.useBitmapCoordinateSpace=function(e){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),e({context:this._context,mediaSize:this._mediaSize,bitmapSize:this._bitmapSize,horizontalPixelRatio:this._horizontalPixelRatio,verticalPixelRatio:this._verticalPixelRatio})}finally{this._context.restore()}},Object.defineProperty(t.prototype,"_horizontalPixelRatio",{get:function(){return this._bitmapSize.width/this._mediaSize.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_verticalPixelRatio",{get:function(){return this._bitmapSize.height/this._mediaSize.height},enumerable:!1,configurable:!0}),t}();function _i(t,e){var i=t.canvasElementClientSize;if(i.width===0||i.height===0)return null;var n=t.bitmapSize;if(n.width===0||n.height===0)return null;var s=t.canvasElement.getContext("2d",e);return s===null?null:new O1(s,i,n)}/*!
 * @license
 * TradingView Lightweight Charts™ v4.2.3
 * Copyright (c) 2025 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */const F1={upColor:"#26a69a",downColor:"#ef5350",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350"},V1={upColor:"#26a69a",downColor:"#ef5350",openVisible:!0,thinBars:!0},U1={color:"#2196f3",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},W1={topColor:"rgba( 46, 220, 135, 0.4)",bottomColor:"rgba( 40, 221, 100, 0)",invertFilledArea:!1,lineColor:"#33D778",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},H1={baseValue:{type:"price",price:0},topFillColor1:"rgba(38, 166, 154, 0.28)",topFillColor2:"rgba(38, 166, 154, 0.05)",topLineColor:"rgba(38, 166, 154, 1)",bottomFillColor1:"rgba(239, 83, 80, 0.05)",bottomFillColor2:"rgba(239, 83, 80, 0.28)",bottomLineColor:"rgba(239, 83, 80, 1)",lineWidth:3,lineStyle:0,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},q1={color:"#26a69a",base:0},pm={color:"#2196f3"},mm={title:"",visible:!0,lastValueVisible:!0,priceLineVisible:!0,priceLineSource:0,priceLineWidth:1,priceLineColor:"",priceLineStyle:2,baseLineVisible:!0,baseLineWidth:1,baseLineColor:"#B2B5BE",baseLineStyle:0,priceFormat:{type:"price",precision:2,minMove:.01}};var Lh,Rh;function Ti(t,e){const i={0:[],1:[t.lineWidth,t.lineWidth],2:[2*t.lineWidth,2*t.lineWidth],3:[6*t.lineWidth,6*t.lineWidth],4:[t.lineWidth,4*t.lineWidth]}[e];t.setLineDash(i)}function gm(t,e,i,n){t.beginPath();const s=t.lineWidth%2?.5:0;t.moveTo(i,e+s),t.lineTo(n,e+s),t.stroke()}function ri(t,e){if(!t)throw new Error("Assertion failed"+(e?": "+e:""))}function De(t){if(t===void 0)throw new Error("Value is undefined");return t}function E(t){if(t===null)throw new Error("Value is null");return t}function Gi(t){return E(De(t))}(function(t){t[t.Simple=0]="Simple",t[t.WithSteps=1]="WithSteps",t[t.Curved=2]="Curved"})(Lh||(Lh={})),function(t){t[t.Solid=0]="Solid",t[t.Dotted=1]="Dotted",t[t.Dashed=2]="Dashed",t[t.LargeDashed=3]="LargeDashed",t[t.SparseDotted=4]="SparseDotted"}(Rh||(Rh={}));const $h={khaki:"#f0e68c",azure:"#f0ffff",aliceblue:"#f0f8ff",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",gray:"#808080",green:"#008000",honeydew:"#f0fff0",floralwhite:"#fffaf0",lightblue:"#add8e6",lightcoral:"#f08080",lemonchiffon:"#fffacd",hotpink:"#ff69b4",lightyellow:"#ffffe0",greenyellow:"#adff2f",lightgoldenrodyellow:"#fafad2",limegreen:"#32cd32",linen:"#faf0e6",lightcyan:"#e0ffff",magenta:"#f0f",maroon:"#800000",olive:"#808000",orange:"#ffa500",oldlace:"#fdf5e6",mediumblue:"#0000cd",transparent:"#0000",lime:"#0f0",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",midnightblue:"#191970",orchid:"#da70d6",mediumorchid:"#ba55d3",mediumturquoise:"#48d1cc",orangered:"#ff4500",royalblue:"#4169e1",powderblue:"#b0e0e6",red:"#f00",coral:"#ff7f50",turquoise:"#40e0d0",white:"#fff",whitesmoke:"#f5f5f5",wheat:"#f5deb3",teal:"#008080",steelblue:"#4682b4",bisque:"#ffe4c4",aquamarine:"#7fffd4",aqua:"#0ff",sienna:"#a0522d",silver:"#c0c0c0",springgreen:"#00ff7f",antiquewhite:"#faebd7",burlywood:"#deb887",brown:"#a52a2a",beige:"#f5f5dc",chocolate:"#d2691e",chartreuse:"#7fff00",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cadetblue:"#5f9ea0",tomato:"#ff6347",fuchsia:"#f0f",blue:"#00f",salmon:"#fa8072",blanchedalmond:"#ffebcd",slateblue:"#6a5acd",slategray:"#708090",thistle:"#d8bfd8",tan:"#d2b48c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",blueviolet:"#8a2be2",black:"#000",darkmagenta:"#8b008b",darkslateblue:"#483d8b",darkkhaki:"#bdb76b",darkorchid:"#9932cc",darkorange:"#ff8c00",darkgreen:"#006400",darkred:"#8b0000",dodgerblue:"#1e90ff",darkslategray:"#2f4f4f",dimgray:"#696969",deepskyblue:"#00bfff",firebrick:"#b22222",forestgreen:"#228b22",indigo:"#4b0082",ivory:"#fffff0",lavenderblush:"#fff0f5",feldspar:"#d19275",indianred:"#cd5c5c",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightskyblue:"#87cefa",lightslategray:"#789",lightslateblue:"#8470ff",snow:"#fffafa",lightseagreen:"#20b2aa",lightsalmon:"#ffa07a",darksalmon:"#e9967a",darkviolet:"#9400d3",mediumpurple:"#9370d8",mediumaquamarine:"#66cdaa",skyblue:"#87ceeb",lavender:"#e6e6fa",lightsteelblue:"#b0c4de",mediumvioletred:"#c71585",mintcream:"#f5fffa",navajowhite:"#ffdead",navy:"#000080",olivedrab:"#6b8e23",palevioletred:"#d87093",violetred:"#d02090",yellow:"#ff0",yellowgreen:"#9acd32",lawngreen:"#7cfc00",pink:"#ffc0cb",paleturquoise:"#afeeee",palegoldenrod:"#eee8aa",darkolivegreen:"#556b2f",darkseagreen:"#8fbc8f",darkturquoise:"#00ced1",peachpuff:"#ffdab9",deeppink:"#ff1493",violet:"#ee82ee",palegreen:"#98fb98",mediumseagreen:"#3cb371",peru:"#cd853f",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",purple:"#800080",seagreen:"#2e8b57",seashell:"#fff5ee",papayawhip:"#ffefd5",mediumslateblue:"#7b68ee",plum:"#dda0dd",mediumspringgreen:"#00fa9a"};function et(t){return t<0?0:t>255?255:Math.round(t)||0}function vm(t){return t<=0||t>1?Math.min(Math.max(t,0),1):Math.round(1e4*t)/1e4}const K1=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,X1=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,Q1=/^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,Y1=/^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;function ws(t){(t=t.toLowerCase())in $h&&(t=$h[t]);{const e=Y1.exec(t)||Q1.exec(t);if(e)return[et(parseInt(e[1],10)),et(parseInt(e[2],10)),et(parseInt(e[3],10)),vm(e.length<5?1:parseFloat(e[4]))]}{const e=X1.exec(t);if(e)return[et(parseInt(e[1],16)),et(parseInt(e[2],16)),et(parseInt(e[3],16)),1]}{const e=K1.exec(t);if(e)return[et(17*parseInt(e[1],16)),et(17*parseInt(e[2],16)),et(17*parseInt(e[3],16)),1]}throw new Error(`Cannot parse color: ${t}`)}function xm(t){return .199*t[0]+.687*t[1]+.114*t[2]}function Nl(t){const e=ws(t);return{t:`rgb(${e[0]}, ${e[1]}, ${e[2]})`,i:xm(e)>160?"black":"white"}}class pe{constructor(){this.h=[]}l(e,i,n){const s={o:e,_:i,u:n===!0};this.h.push(s)}v(e){const i=this.h.findIndex(n=>e===n.o);i>-1&&this.h.splice(i,1)}p(e){this.h=this.h.filter(i=>i._!==e)}m(e,i,n){const s=[...this.h];this.h=this.h.filter(r=>!r.u),s.forEach(r=>r.o(e,i,n))}M(){return this.h.length>0}S(){this.h=[]}}function pt(t,...e){for(const i of e)for(const n in i)i[n]!==void 0&&Object.prototype.hasOwnProperty.call(i,n)&&!["__proto__","constructor","prototype"].includes(n)&&(typeof i[n]!="object"||t[n]===void 0||Array.isArray(i[n])?t[n]=i[n]:pt(t[n],i[n]));return t}function wt(t){return typeof t=="number"&&isFinite(t)}function bs(t){return typeof t=="number"&&t%1==0}function Ls(t){return typeof t=="string"}function ir(t){return typeof t=="boolean"}function zt(t){const e=t;if(!e||typeof e!="object")return e;let i,n,s;for(n in i=Array.isArray(e)?[]:{},e)e.hasOwnProperty(n)&&(s=e[n],i[n]=s&&typeof s=="object"?zt(s):s);return i}function G1(t){return t!==null}function ks(t){return t===null?void 0:t}const Fc="-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";function gn(t,e,i){return e===void 0&&(e=Fc),`${i=i!==void 0?`${i} `:""}${t}px ${e}`}class J1{constructor(e){this.k={C:1,T:5,P:NaN,R:"",D:"",V:"",O:"",B:0,A:0,I:0,L:0,N:0},this.F=e}W(){const e=this.k,i=this.j(),n=this.H();return e.P===i&&e.D===n||(e.P=i,e.D=n,e.R=gn(i,n),e.L=2.5/12*i,e.B=e.L,e.A=i/12*e.T,e.I=i/12*e.T,e.N=0),e.V=this.$(),e.O=this.U(),this.k}$(){return this.F.W().layout.textColor}U(){return this.F.q()}j(){return this.F.W().layout.fontSize}H(){return this.F.W().layout.fontFamily}}class Vc{constructor(){this.Y=[]}Z(e){this.Y=e}X(e,i,n){this.Y.forEach(s=>{s.X(e,i,n)})}}class mt{X(e,i,n){e.useBitmapCoordinateSpace(s=>this.K(s,i,n))}}class Z1 extends mt{constructor(){super(...arguments),this.G=null}J(e){this.G=e}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.G===null||this.G.tt===null)return;const s=this.G.tt,r=this.G,l=Math.max(1,Math.floor(i))%2/2,c=o=>{e.beginPath();for(let u=s.to-1;u>=s.from;--u){const h=r.it[u],d=Math.round(h.nt*i)+l,f=h.st*n,m=o*n+l;e.moveTo(d,f),e.arc(d,f,m,0,2*Math.PI)}e.fill()};r.et>0&&(e.fillStyle=r.rt,c(r.ht+r.et)),e.fillStyle=r.lt,c(r.ht)}}function ey(){return{it:[{nt:0,st:0,ot:0,_t:0}],lt:"",rt:"",ht:0,et:0,tt:null}}const ty={from:0,to:1};class iy{constructor(e,i){this.ut=new Vc,this.ct=[],this.dt=[],this.ft=!0,this.F=e,this.vt=i,this.ut.Z(this.ct)}bt(e){const i=this.F.wt();i.length!==this.ct.length&&(this.dt=i.map(ey),this.ct=this.dt.map(n=>{const s=new Z1;return s.J(n),s}),this.ut.Z(this.ct)),this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.ut}Mt(){const e=this.vt.W().mode===2,i=this.F.wt(),n=this.vt.xt(),s=this.F.St();i.forEach((r,l)=>{var c;const o=this.dt[l],u=r.kt(n);if(e||u===null||!r.yt())return void(o.tt=null);const h=E(r.Ct());o.lt=u.Tt,o.ht=u.ht,o.et=u.Pt,o.it[0]._t=u._t,o.it[0].st=r.Dt().Rt(u._t,h.Vt),o.rt=(c=u.Ot)!==null&&c!==void 0?c:this.F.Bt(o.it[0].st/r.Dt().At()),o.it[0].ot=n,o.it[0].nt=s.It(n),o.tt=ty})}}class ny extends mt{constructor(e){super(),this.zt=e}K({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:s}){if(this.zt===null)return;const r=this.zt.Lt.yt,l=this.zt.Et.yt;if(!r&&!l)return;const c=Math.round(this.zt.nt*n),o=Math.round(this.zt.st*s);e.lineCap="butt",r&&c>=0&&(e.lineWidth=Math.floor(this.zt.Lt.et*n),e.strokeStyle=this.zt.Lt.V,e.fillStyle=this.zt.Lt.V,Ti(e,this.zt.Lt.Nt),function(u,h,d,f){u.beginPath();const m=u.lineWidth%2?.5:0;u.moveTo(h+m,d),u.lineTo(h+m,f),u.stroke()}(e,c,0,i.height)),l&&o>=0&&(e.lineWidth=Math.floor(this.zt.Et.et*s),e.strokeStyle=this.zt.Et.V,e.fillStyle=this.zt.Et.V,Ti(e,this.zt.Et.Nt),gm(e,o,0,i.width))}}class sy{constructor(e){this.ft=!0,this.Ft={Lt:{et:1,Nt:0,V:"",yt:!1},Et:{et:1,Nt:0,V:"",yt:!1},nt:0,st:0},this.Wt=new ny(this.Ft),this.jt=e}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt}Mt(){const e=this.jt.yt(),i=E(this.jt.Ht()),n=i.$t().W().crosshair,s=this.Ft;if(n.mode===2)return s.Et.yt=!1,void(s.Lt.yt=!1);s.Et.yt=e&&this.jt.Ut(i),s.Lt.yt=e&&this.jt.qt(),s.Et.et=n.horzLine.width,s.Et.Nt=n.horzLine.style,s.Et.V=n.horzLine.color,s.Lt.et=n.vertLine.width,s.Lt.Nt=n.vertLine.style,s.Lt.V=n.vertLine.color,s.nt=this.jt.Yt(),s.st=this.jt.Zt()}}function ry(t,e,i,n,s,r){t.fillRect(e+r,i,n-2*r,r),t.fillRect(e+r,i+s-r,n-2*r,r),t.fillRect(e,i,r,s),t.fillRect(e+n-r,i,r,s)}function Cl(t,e,i,n,s,r){t.save(),t.globalCompositeOperation="copy",t.fillStyle=r,t.fillRect(e,i,n,s),t.restore()}function Dh(t,e,i,n,s,r){t.beginPath(),t.roundRect?t.roundRect(e,i,n,s,r):(t.lineTo(e+n-r[1],i),r[1]!==0&&t.arcTo(e+n,i,e+n,i+r[1],r[1]),t.lineTo(e+n,i+s-r[2]),r[2]!==0&&t.arcTo(e+n,i+s,e+n-r[2],i+s,r[2]),t.lineTo(e+r[3],i+s),r[3]!==0&&t.arcTo(e,i+s,e,i+s-r[3],r[3]),t.lineTo(e,i+r[0]),r[0]!==0&&t.arcTo(e,i,e+r[0],i,r[0]))}function Bh(t,e,i,n,s,r,l=0,c=[0,0,0,0],o=""){if(t.save(),!l||!o||o===r)return Dh(t,e,i,n,s,c),t.fillStyle=r,t.fill(),void t.restore();const u=l/2;var h;Dh(t,e+u,i+u,n-l,s-l,(h=-u,c.map(d=>d===0?d:d+h))),r!=="transparent"&&(t.fillStyle=r,t.fill()),o!=="transparent"&&(t.lineWidth=l,t.strokeStyle=o,t.closePath(),t.stroke()),t.restore()}function ym(t,e,i,n,s,r,l){t.save(),t.globalCompositeOperation="copy";const c=t.createLinearGradient(0,0,0,s);c.addColorStop(0,r),c.addColorStop(1,l),t.fillStyle=c,t.fillRect(e,i,n,s),t.restore()}class Ah{constructor(e,i){this.J(e,i)}J(e,i){this.zt=e,this.Xt=i}At(e,i){return this.zt.yt?e.P+e.L+e.B:0}X(e,i,n,s){if(!this.zt.yt||this.zt.Kt.length===0)return;const r=this.zt.V,l=this.Xt.t,c=e.useBitmapCoordinateSpace(o=>{const u=o.context;u.font=i.R;const h=this.Gt(o,i,n,s),d=h.Jt;return h.Qt?Bh(u,d.ti,d.ii,d.ni,d.si,l,d.ei,[d.ht,0,0,d.ht],l):Bh(u,d.ri,d.ii,d.ni,d.si,l,d.ei,[0,d.ht,d.ht,0],l),this.zt.hi&&(u.fillStyle=r,u.fillRect(d.ri,d.li,d.ai-d.ri,d.oi)),this.zt._i&&(u.fillStyle=i.O,u.fillRect(h.Qt?d.ui-d.ei:0,d.ii,d.ei,d.ci-d.ii)),h});e.useMediaCoordinateSpace(({context:o})=>{const u=c.di;o.font=i.R,o.textAlign=c.Qt?"right":"left",o.textBaseline="middle",o.fillStyle=r,o.fillText(this.zt.Kt,u.fi,(u.ii+u.ci)/2+u.pi)})}Gt(e,i,n,s){var r;const{context:l,bitmapSize:c,mediaSize:o,horizontalPixelRatio:u,verticalPixelRatio:h}=e,d=this.zt.hi||!this.zt.mi?i.T:0,f=this.zt.bi?i.C:0,m=i.L+this.Xt.wi,g=i.B+this.Xt.gi,p=i.A,w=i.I,v=this.zt.Kt,x=i.P,y=n.Mi(l,v),b=Math.ceil(n.xi(l,v)),j=x+m+g,M=i.C+p+w+b+d,_=Math.max(1,Math.floor(h));let T=Math.round(j*h);T%2!=_%2&&(T+=1);const D=f>0?Math.max(1,Math.floor(f*u)):0,B=Math.round(M*u),Z=Math.round(d*u),ze=(r=this.Xt.Si)!==null&&r!==void 0?r:this.Xt.ki,ke=Math.round(ze*h)-Math.floor(.5*h),ye=Math.floor(ke+_/2-T/2),V=ye+T,ce=s==="right",Le=ce?o.width-f:f,L=ce?c.width-D:D;let O,I,C;return ce?(O=L-B,I=L-Z,C=Le-d-p-f):(O=L+B,I=L+Z,C=Le+d+p),{Qt:ce,Jt:{ii:ye,li:ke,ci:V,ni:B,si:T,ht:2*u,ei:D,ti:O,ri:L,ai:I,oi:_,ui:c.width},di:{ii:ye/h,ci:V/h,fi:C,pi:y}}}}class El{constructor(e){this.yi={ki:0,t:"#000",gi:0,wi:0},this.Ci={Kt:"",yt:!1,hi:!0,mi:!1,Ot:"",V:"#FFF",_i:!1,bi:!1},this.Ti={Kt:"",yt:!1,hi:!1,mi:!0,Ot:"",V:"#FFF",_i:!0,bi:!0},this.ft=!0,this.Pi=new(e||Ah)(this.Ci,this.yi),this.Ri=new(e||Ah)(this.Ti,this.yi)}Kt(){return this.Di(),this.Ci.Kt}ki(){return this.Di(),this.yi.ki}bt(){this.ft=!0}At(e,i=!1){return Math.max(this.Pi.At(e,i),this.Ri.At(e,i))}Vi(){return this.yi.Si||0}Oi(e){this.yi.Si=e}Bi(){return this.Di(),this.Ci.yt||this.Ti.yt}Ai(){return this.Di(),this.Ci.yt}gt(e){return this.Di(),this.Ci.hi=this.Ci.hi&&e.W().ticksVisible,this.Ti.hi=this.Ti.hi&&e.W().ticksVisible,this.Pi.J(this.Ci,this.yi),this.Ri.J(this.Ti,this.yi),this.Pi}Ii(){return this.Di(),this.Pi.J(this.Ci,this.yi),this.Ri.J(this.Ti,this.yi),this.Ri}Di(){this.ft&&(this.Ci.hi=!0,this.Ti.hi=!1,this.zi(this.Ci,this.Ti,this.yi))}}class ly extends El{constructor(e,i,n){super(),this.jt=e,this.Li=i,this.Ei=n}zi(e,i,n){if(e.yt=!1,this.jt.W().mode===2)return;const s=this.jt.W().horzLine;if(!s.labelVisible)return;const r=this.Li.Ct();if(!this.jt.yt()||this.Li.Ni()||r===null)return;const l=Nl(s.labelBackgroundColor);n.t=l.t,e.V=l.i;const c=2/12*this.Li.P();n.wi=c,n.gi=c;const o=this.Ei(this.Li);n.ki=o.ki,e.Kt=this.Li.Fi(o._t,r),e.yt=!0}}const ay=/[1-9]/g;class wm{constructor(){this.zt=null}J(e){this.zt=e}X(e,i){if(this.zt===null||this.zt.yt===!1||this.zt.Kt.length===0)return;const n=e.useMediaCoordinateSpace(({context:f})=>(f.font=i.R,Math.round(i.Wi.xi(f,E(this.zt).Kt,ay))));if(n<=0)return;const s=i.ji,r=n+2*s,l=r/2,c=this.zt.Hi;let o=this.zt.ki,u=Math.floor(o-l)+.5;u<0?(o+=Math.abs(0-u),u=Math.floor(o-l)+.5):u+r>c&&(o-=Math.abs(c-(u+r)),u=Math.floor(o-l)+.5);const h=u+r,d=Math.ceil(0+i.C+i.T+i.L+i.P+i.B);e.useBitmapCoordinateSpace(({context:f,horizontalPixelRatio:m,verticalPixelRatio:g})=>{const p=E(this.zt);f.fillStyle=p.t;const w=Math.round(u*m),v=Math.round(0*g),x=Math.round(h*m),y=Math.round(d*g),b=Math.round(2*m);if(f.beginPath(),f.moveTo(w,v),f.lineTo(w,y-b),f.arcTo(w,y,w+b,y,b),f.lineTo(x-b,y),f.arcTo(x,y,x,y-b,b),f.lineTo(x,v),f.fill(),p.hi){const j=Math.round(p.ki*m),M=v,_=Math.round((M+i.T)*g);f.fillStyle=p.V;const T=Math.max(1,Math.floor(m)),D=Math.floor(.5*m);f.fillRect(j-D,M,T,_-M)}}),e.useMediaCoordinateSpace(({context:f})=>{const m=E(this.zt),g=0+i.C+i.T+i.L+i.P/2;f.font=i.R,f.textAlign="left",f.textBaseline="middle",f.fillStyle=m.V;const p=i.Wi.Mi(f,"Apr0");f.translate(u+s,g+p),f.fillText(m.Kt,0,0)})}}class oy{constructor(e,i,n){this.ft=!0,this.Wt=new wm,this.Ft={yt:!1,t:"#4c525e",V:"white",Kt:"",Hi:0,ki:NaN,hi:!0},this.vt=e,this.$i=i,this.Ei=n}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt.J(this.Ft),this.Wt}Mt(){const e=this.Ft;if(e.yt=!1,this.vt.W().mode===2)return;const i=this.vt.W().vertLine;if(!i.labelVisible)return;const n=this.$i.St();if(n.Ni())return;e.Hi=n.Hi();const s=this.Ei();if(s===null)return;e.ki=s.ki;const r=n.Ui(this.vt.xt());e.Kt=n.qi(E(r)),e.yt=!0;const l=Nl(i.labelBackgroundColor);e.t=l.t,e.V=l.i,e.hi=n.W().ticksVisible}}class Uc{constructor(){this.Yi=null,this.Zi=0}Xi(){return this.Zi}Ki(e){this.Zi=e}Dt(){return this.Yi}Gi(e){this.Yi=e}Ji(e){return[]}Qi(){return[]}yt(){return!0}}var Ih;(function(t){t[t.Normal=0]="Normal",t[t.Magnet=1]="Magnet",t[t.Hidden=2]="Hidden"})(Ih||(Ih={}));class cy extends Uc{constructor(e,i){super(),this.tn=null,this.nn=NaN,this.sn=0,this.en=!0,this.rn=new Map,this.hn=!1,this.ln=NaN,this.an=NaN,this._n=NaN,this.un=NaN,this.$i=e,this.cn=i,this.dn=new iy(e,this),this.fn=((s,r)=>l=>{const c=r(),o=s();if(l===E(this.tn).vn())return{_t:o,ki:c};{const u=E(l.Ct());return{_t:l.pn(c,u),ki:c}}})(()=>this.nn,()=>this.an);const n=((s,r)=>()=>{const l=this.$i.St().mn(s()),c=r();return l&&Number.isFinite(c)?{ot:l,ki:c}:null})(()=>this.sn,()=>this.Yt());this.bn=new oy(this,e,n),this.wn=new sy(this)}W(){return this.cn}gn(e,i){this._n=e,this.un=i}Mn(){this._n=NaN,this.un=NaN}xn(){return this._n}Sn(){return this.un}kn(e,i,n){this.hn||(this.hn=!0),this.en=!0,this.yn(e,i,n)}xt(){return this.sn}Yt(){return this.ln}Zt(){return this.an}yt(){return this.en}Cn(){this.en=!1,this.Tn(),this.nn=NaN,this.ln=NaN,this.an=NaN,this.tn=null,this.Mn()}Pn(e){return this.tn!==null?[this.wn,this.dn]:[]}Ut(e){return e===this.tn&&this.cn.horzLine.visible}qt(){return this.cn.vertLine.visible}Rn(e,i){this.en&&this.tn===e||this.rn.clear();const n=[];return this.tn===e&&n.push(this.Dn(this.rn,i,this.fn)),n}Qi(){return this.en?[this.bn]:[]}Ht(){return this.tn}Vn(){this.wn.bt(),this.rn.forEach(e=>e.bt()),this.bn.bt(),this.dn.bt()}On(e){return e&&!e.vn().Ni()?e.vn():null}yn(e,i,n){this.Bn(e,i,n)&&this.Vn()}Bn(e,i,n){const s=this.ln,r=this.an,l=this.nn,c=this.sn,o=this.tn,u=this.On(n);this.sn=e,this.ln=isNaN(e)?NaN:this.$i.St().It(e),this.tn=n;const h=u!==null?u.Ct():null;return u!==null&&h!==null?(this.nn=i,this.an=u.Rt(i,h)):(this.nn=NaN,this.an=NaN),s!==this.ln||r!==this.an||c!==this.sn||l!==this.nn||o!==this.tn}Tn(){const e=this.$i.wt().map(n=>n.In().An()).filter(G1),i=e.length===0?null:Math.max(...e);this.sn=i!==null?i:NaN}Dn(e,i,n){let s=e.get(i);return s===void 0&&(s=new ly(this,i,n),e.set(i,s)),s}}function zl(t){return t==="left"||t==="right"}class Ne{constructor(e){this.zn=new Map,this.Ln=[],this.En=e}Nn(e,i){const n=function(s,r){return s===void 0?r:{Fn:Math.max(s.Fn,r.Fn),Wn:s.Wn||r.Wn}}(this.zn.get(e),i);this.zn.set(e,n)}jn(){return this.En}Hn(e){const i=this.zn.get(e);return i===void 0?{Fn:this.En}:{Fn:Math.max(this.En,i.Fn),Wn:i.Wn}}$n(){this.Un(),this.Ln=[{qn:0}]}Yn(e){this.Un(),this.Ln=[{qn:1,Vt:e}]}Zn(e){this.Xn(),this.Ln.push({qn:5,Vt:e})}Un(){this.Xn(),this.Ln.push({qn:6})}Kn(){this.Un(),this.Ln=[{qn:4}]}Gn(e){this.Un(),this.Ln.push({qn:2,Vt:e})}Jn(e){this.Un(),this.Ln.push({qn:3,Vt:e})}Qn(){return this.Ln}ts(e){for(const i of e.Ln)this.ns(i);this.En=Math.max(this.En,e.En),e.zn.forEach((i,n)=>{this.Nn(n,i)})}static ss(){return new Ne(2)}static es(){return new Ne(3)}ns(e){switch(e.qn){case 0:this.$n();break;case 1:this.Yn(e.Vt);break;case 2:this.Gn(e.Vt);break;case 3:this.Jn(e.Vt);break;case 4:this.Kn();break;case 5:this.Zn(e.Vt);break;case 6:this.Xn()}}Xn(){const e=this.Ln.findIndex(i=>i.qn===5);e!==-1&&this.Ln.splice(e,1)}}const Oh=".";function Mt(t,e){if(!wt(t))return"n/a";if(!bs(e))throw new TypeError("invalid length");if(e<0||e>16)throw new TypeError("invalid length");return e===0?t.toString():("0000000000000000"+t.toString()).slice(-e)}class Ml{constructor(e,i){if(i||(i=1),wt(e)&&bs(e)||(e=100),e<0)throw new TypeError("invalid base");this.Li=e,this.rs=i,this.hs()}format(e){const i=e<0?"−":"";return e=Math.abs(e),i+this.ls(e)}hs(){if(this._s=0,this.Li>0&&this.rs>0){let e=this.Li;for(;e>1;)e/=10,this._s++}}ls(e){const i=this.Li/this.rs;let n=Math.floor(e),s="";const r=this._s!==void 0?this._s:NaN;if(i>1){let l=+(Math.round(e*i)-n*i).toFixed(this._s);l>=i&&(l-=i,n+=1),s=Oh+Mt(+l.toFixed(this._s)*this.rs,r)}else n=Math.round(n*i)/i,r>0&&(s=Oh+Mt(0,r));return n.toFixed(0)+s}}class bm extends Ml{constructor(e=100){super(e)}format(e){return`${super.format(e)}%`}}class uy{constructor(e){this.us=e}format(e){let i="";return e<0&&(i="-",e=-e),e<995?i+this.cs(e):e<999995?i+this.cs(e/1e3)+"K":e<999999995?(e=1e3*Math.round(e/1e3),i+this.cs(e/1e6)+"M"):(e=1e6*Math.round(e/1e6),i+this.cs(e/1e9)+"B")}cs(e){let i;const n=Math.pow(10,this.us);return i=(e=Math.round(e*n)/n)>=1e-15&&e<1?e.toFixed(this.us).replace(/\.?0+$/,""):String(e),i.replace(/(\.[1-9]*)0+$/,(s,r)=>r)}}function km(t,e,i,n,s,r,l){if(e.length===0||n.from>=e.length||n.to<=0)return;const{context:c,horizontalPixelRatio:o,verticalPixelRatio:u}=t,h=e[n.from];let d=r(t,h),f=h;if(n.to-n.from<2){const m=s/2;c.beginPath();const g={nt:h.nt-m,st:h.st},p={nt:h.nt+m,st:h.st};c.moveTo(g.nt*o,g.st*u),c.lineTo(p.nt*o,p.st*u),l(t,d,g,p)}else{const m=(p,w)=>{l(t,d,f,w),c.beginPath(),d=p,f=w};let g=f;c.beginPath(),c.moveTo(h.nt*o,h.st*u);for(let p=n.from+1;p<n.to;++p){g=e[p];const w=r(t,g);switch(i){case 0:c.lineTo(g.nt*o,g.st*u);break;case 1:c.lineTo(g.nt*o,e[p-1].st*u),w!==d&&(m(w,g),c.lineTo(g.nt*o,e[p-1].st*u)),c.lineTo(g.nt*o,g.st*u);break;case 2:{const[v,x]=hy(e,p-1,p);c.bezierCurveTo(v.nt*o,v.st*u,x.nt*o,x.st*u,g.nt*o,g.st*u);break}}i!==1&&w!==d&&(m(w,g),c.moveTo(g.nt*o,g.st*u))}(f!==g||f===g&&i===1)&&l(t,d,f,g)}}const Fh=6;function aa(t,e){return{nt:t.nt-e.nt,st:t.st-e.st}}function Vh(t,e){return{nt:t.nt/e,st:t.st/e}}function hy(t,e,i){const n=Math.max(0,e-1),s=Math.min(t.length-1,i+1);var r,l;return[(r=t[e],l=Vh(aa(t[i],t[n]),Fh),{nt:r.nt+l.nt,st:r.st+l.st}),aa(t[i],Vh(aa(t[s],t[e]),Fh))]}function dy(t,e,i,n,s){const{context:r,horizontalPixelRatio:l,verticalPixelRatio:c}=e;r.lineTo(s.nt*l,t*c),r.lineTo(n.nt*l,t*c),r.closePath(),r.fillStyle=i,r.fill()}class jm extends mt{constructor(){super(...arguments),this.G=null}J(e){this.G=e}K(e){var i;if(this.G===null)return;const{it:n,tt:s,ds:r,et:l,Nt:c,fs:o}=this.G,u=(i=this.G.vs)!==null&&i!==void 0?i:this.G.ps?0:e.mediaSize.height;if(s===null)return;const h=e.context;h.lineCap="butt",h.lineJoin="round",h.lineWidth=l,Ti(h,c),h.lineWidth=1,km(e,n,o,s,r,this.bs.bind(this),dy.bind(null,u))}}function Eo(t,e,i){return Math.min(Math.max(t,e),i)}function nr(t,e,i){return e-t<=i}function Sm(t){const e=Math.ceil(t);return e%2==0?e-1:e}class Wc{ws(e,i){const n=this.gs,{Ms:s,xs:r,Ss:l,ks:c,ys:o,vs:u}=i;if(this.Cs===void 0||n===void 0||n.Ms!==s||n.xs!==r||n.Ss!==l||n.ks!==c||n.vs!==u||n.ys!==o){const h=e.context.createLinearGradient(0,0,0,o);if(h.addColorStop(0,s),u!=null){const d=Eo(u*e.verticalPixelRatio/o,0,1);h.addColorStop(d,r),h.addColorStop(d,l)}h.addColorStop(1,c),this.Cs=h,this.gs=i}return this.Cs}}class fy extends jm{constructor(){super(...arguments),this.Ts=new Wc}bs(e,i){return this.Ts.ws(e,{Ms:i.Ps,xs:"",Ss:"",ks:i.Rs,ys:e.bitmapSize.height})}}function py(t,e){const i=t.context;i.strokeStyle=e,i.stroke()}class Nm extends mt{constructor(){super(...arguments),this.G=null}J(e){this.G=e}K(e){if(this.G===null)return;const{it:i,tt:n,ds:s,fs:r,et:l,Nt:c,Ds:o}=this.G;if(n===null)return;const u=e.context;u.lineCap="butt",u.lineWidth=l*e.verticalPixelRatio,Ti(u,c),u.lineJoin="round";const h=this.Vs.bind(this);r!==void 0&&km(e,i,r,n,s,h,py),o&&function(d,f,m,g,p){const{horizontalPixelRatio:w,verticalPixelRatio:v,context:x}=d;let y=null;const b=Math.max(1,Math.floor(w))%2/2,j=m*v+b;for(let M=g.to-1;M>=g.from;--M){const _=f[M];if(_){const T=p(d,_);T!==y&&(x.beginPath(),y!==null&&x.fill(),x.fillStyle=T,y=T);const D=Math.round(_.nt*w)+b,B=_.st*v;x.moveTo(D,B),x.arc(D,B,j,0,2*Math.PI)}}x.fill()}(e,i,o,n,h)}}class Cm extends Nm{Vs(e,i){return i.lt}}function Em(t,e,i,n,s=0,r=e.length){let l=r-s;for(;0<l;){const c=l>>1,o=s+c;n(e[o],i)===t?(s=o+1,l-=c+1):l=c}return s}const Rs=Em.bind(null,!0),zm=Em.bind(null,!1);function my(t,e){return t.ot<e}function gy(t,e){return e<t.ot}function Mm(t,e,i){const n=e.Os(),s=e.ui(),r=Rs(t,n,my),l=zm(t,s,gy);if(!i)return{from:r,to:l};let c=r,o=l;return r>0&&r<t.length&&t[r].ot>=n&&(c=r-1),l>0&&l<t.length&&t[l-1].ot<=s&&(o=l+1),{from:c,to:o}}class Hc{constructor(e,i,n){this.Bs=!0,this.As=!0,this.Is=!0,this.zs=[],this.Ls=null,this.Es=e,this.Ns=i,this.Fs=n}bt(e){this.Bs=!0,e==="data"&&(this.As=!0),e==="options"&&(this.Is=!0)}gt(){return this.Es.yt()?(this.Ws(),this.Ls===null?null:this.js):null}Hs(){this.zs=this.zs.map(e=>Object.assign(Object.assign({},e),this.Es.Us().$s(e.ot)))}qs(){this.Ls=null}Ws(){this.As&&(this.Ys(),this.As=!1),this.Is&&(this.Hs(),this.Is=!1),this.Bs&&(this.Zs(),this.Bs=!1)}Zs(){const e=this.Es.Dt(),i=this.Ns.St();if(this.qs(),i.Ni()||e.Ni())return;const n=i.Xs();if(n===null||this.Es.In().Ks()===0)return;const s=this.Es.Ct();s!==null&&(this.Ls=Mm(this.zs,n,this.Fs),this.Gs(e,i,s.Vt),this.Js())}}class _l extends Hc{constructor(e,i){super(e,i,!0)}Gs(e,i,n){i.Qs(this.zs,ks(this.Ls)),e.te(this.zs,n,ks(this.Ls))}ie(e,i){return{ot:e,_t:i,nt:NaN,st:NaN}}Ys(){const e=this.Es.Us();this.zs=this.Es.In().ne().map(i=>{const n=i.Vt[3];return this.se(i.ee,n,e)})}}class vy extends _l{constructor(e,i){super(e,i),this.js=new Vc,this.re=new fy,this.he=new Cm,this.js.Z([this.re,this.he])}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e=this.Es.W();this.re.J({fs:e.lineType,it:this.zs,Nt:e.lineStyle,et:e.lineWidth,vs:null,ps:e.invertFilledArea,tt:this.Ls,ds:this.Ns.St().le()}),this.he.J({fs:e.lineVisible?e.lineType:void 0,it:this.zs,Nt:e.lineStyle,et:e.lineWidth,tt:this.Ls,ds:this.Ns.St().le(),Ds:e.pointMarkersVisible?e.pointMarkersRadius||e.lineWidth/2+2:void 0})}}class xy extends mt{constructor(){super(...arguments),this.zt=null,this.ae=0,this.oe=0}J(e){this.zt=e}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.zt===null||this.zt.In.length===0||this.zt.tt===null)return;this.ae=this._e(i),this.ae>=2&&Math.max(1,Math.floor(i))%2!=this.ae%2&&this.ae--,this.oe=this.zt.ue?Math.min(this.ae,Math.floor(i)):this.ae;let s=null;const r=this.oe<=this.ae&&this.zt.le>=Math.floor(1.5*i);for(let l=this.zt.tt.from;l<this.zt.tt.to;++l){const c=this.zt.In[l];s!==c.ce&&(e.fillStyle=c.ce,s=c.ce);const o=Math.floor(.5*this.oe),u=Math.round(c.nt*i),h=u-o,d=this.oe,f=h+d-1,m=Math.min(c.de,c.fe),g=Math.max(c.de,c.fe),p=Math.round(m*n)-o,w=Math.round(g*n)+o,v=Math.max(w-p,this.oe);e.fillRect(h,p,d,v);const x=Math.ceil(1.5*this.ae);if(r){if(this.zt.ve){const M=u-x;let _=Math.max(p,Math.round(c.pe*n)-o),T=_+d-1;T>p+v-1&&(T=p+v-1,_=T-d+1),e.fillRect(M,_,h-M,T-_+1)}const y=u+x;let b=Math.max(p,Math.round(c.me*n)-o),j=b+d-1;j>p+v-1&&(j=p+v-1,b=j-d+1),e.fillRect(f+1,b,y-f,j-b+1)}}}_e(e){const i=Math.floor(e);return Math.max(i,Math.floor(function(n,s){return Math.floor(.3*n*s)}(E(this.zt).le,e)))}}class _m extends Hc{constructor(e,i){super(e,i,!1)}Gs(e,i,n){i.Qs(this.zs,ks(this.Ls)),e.be(this.zs,n,ks(this.Ls))}we(e,i,n){return{ot:e,ge:i.Vt[0],Me:i.Vt[1],xe:i.Vt[2],Se:i.Vt[3],nt:NaN,pe:NaN,de:NaN,fe:NaN,me:NaN}}Ys(){const e=this.Es.Us();this.zs=this.Es.In().ne().map(i=>this.se(i.ee,i,e))}}class yy extends _m{constructor(){super(...arguments),this.js=new xy}se(e,i,n){return Object.assign(Object.assign({},this.we(e,i,n)),n.$s(e))}Js(){const e=this.Es.W();this.js.J({In:this.zs,le:this.Ns.St().le(),ve:e.openVisible,ue:e.thinBars,tt:this.Ls})}}class wy extends jm{constructor(){super(...arguments),this.Ts=new Wc}bs(e,i){const n=this.G;return this.Ts.ws(e,{Ms:i.ke,xs:i.ye,Ss:i.Ce,ks:i.Te,ys:e.bitmapSize.height,vs:n.vs})}}class by extends Nm{constructor(){super(...arguments),this.Pe=new Wc}Vs(e,i){const n=this.G;return this.Pe.ws(e,{Ms:i.Re,xs:i.Re,Ss:i.De,ks:i.De,ys:e.bitmapSize.height,vs:n.vs})}}class ky extends _l{constructor(e,i){super(e,i),this.js=new Vc,this.Ve=new wy,this.Oe=new by,this.js.Z([this.Ve,this.Oe])}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e=this.Es.Ct();if(e===null)return;const i=this.Es.W(),n=this.Es.Dt().Rt(i.baseValue.price,e.Vt),s=this.Ns.St().le();this.Ve.J({it:this.zs,et:i.lineWidth,Nt:i.lineStyle,fs:i.lineType,vs:n,ps:!1,tt:this.Ls,ds:s}),this.Oe.J({it:this.zs,et:i.lineWidth,Nt:i.lineStyle,fs:i.lineVisible?i.lineType:void 0,Ds:i.pointMarkersVisible?i.pointMarkersRadius||i.lineWidth/2+2:void 0,vs:n,tt:this.Ls,ds:s})}}class jy extends mt{constructor(){super(...arguments),this.zt=null,this.ae=0}J(e){this.zt=e}K(e){if(this.zt===null||this.zt.In.length===0||this.zt.tt===null)return;const{horizontalPixelRatio:i}=e;this.ae=function(r,l){if(r>=2.5&&r<=4)return Math.floor(3*l);const c=1-.2*Math.atan(Math.max(4,r)-4)/(.5*Math.PI),o=Math.floor(r*c*l),u=Math.floor(r*l),h=Math.min(o,u);return Math.max(Math.floor(l),h)}(this.zt.le,i),this.ae>=2&&Math.floor(i)%2!=this.ae%2&&this.ae--;const n=this.zt.In;this.zt.Be&&this.Ae(e,n,this.zt.tt),this.zt._i&&this.Ie(e,n,this.zt.tt);const s=this.ze(i);(!this.zt._i||this.ae>2*s)&&this.Le(e,n,this.zt.tt)}Ae(e,i,n){if(this.zt===null)return;const{context:s,horizontalPixelRatio:r,verticalPixelRatio:l}=e;let c="",o=Math.min(Math.floor(r),Math.floor(this.zt.le*r));o=Math.max(Math.floor(r),Math.min(o,this.ae));const u=Math.floor(.5*o);let h=null;for(let d=n.from;d<n.to;d++){const f=i[d];f.Ee!==c&&(s.fillStyle=f.Ee,c=f.Ee);const m=Math.round(Math.min(f.pe,f.me)*l),g=Math.round(Math.max(f.pe,f.me)*l),p=Math.round(f.de*l),w=Math.round(f.fe*l);let v=Math.round(r*f.nt)-u;const x=v+o-1;h!==null&&(v=Math.max(h+1,v),v=Math.min(v,x));const y=x-v+1;s.fillRect(v,p,y,m-p),s.fillRect(v,g+1,y,w-g),h=x}}ze(e){let i=Math.floor(1*e);this.ae<=2*i&&(i=Math.floor(.5*(this.ae-1)));const n=Math.max(Math.floor(e),i);return this.ae<=2*n?Math.max(Math.floor(e),Math.floor(1*e)):n}Ie(e,i,n){if(this.zt===null)return;const{context:s,horizontalPixelRatio:r,verticalPixelRatio:l}=e;let c="";const o=this.ze(r);let u=null;for(let h=n.from;h<n.to;h++){const d=i[h];d.Ne!==c&&(s.fillStyle=d.Ne,c=d.Ne);let f=Math.round(d.nt*r)-Math.floor(.5*this.ae);const m=f+this.ae-1,g=Math.round(Math.min(d.pe,d.me)*l),p=Math.round(Math.max(d.pe,d.me)*l);if(u!==null&&(f=Math.max(u+1,f),f=Math.min(f,m)),this.zt.le*r>2*o)ry(s,f,g,m-f+1,p-g+1,o);else{const w=m-f+1;s.fillRect(f,g,w,p-g+1)}u=m}}Le(e,i,n){if(this.zt===null)return;const{context:s,horizontalPixelRatio:r,verticalPixelRatio:l}=e;let c="";const o=this.ze(r);for(let u=n.from;u<n.to;u++){const h=i[u];let d=Math.round(Math.min(h.pe,h.me)*l),f=Math.round(Math.max(h.pe,h.me)*l),m=Math.round(h.nt*r)-Math.floor(.5*this.ae),g=m+this.ae-1;if(h.ce!==c){const p=h.ce;s.fillStyle=p,c=p}this.zt._i&&(m+=o,d+=o,g-=o,f-=o),d>f||s.fillRect(m,d,g-m+1,f-d+1)}}}class Sy extends _m{constructor(){super(...arguments),this.js=new jy}se(e,i,n){return Object.assign(Object.assign({},this.we(e,i,n)),n.$s(e))}Js(){const e=this.Es.W();this.js.J({In:this.zs,le:this.Ns.St().le(),Be:e.wickVisible,_i:e.borderVisible,tt:this.Ls})}}class Ny{constructor(e,i){this.Fe=e,this.Li=i}X(e,i,n){this.Fe.draw(e,this.Li,i,n)}}class oa extends Hc{constructor(e,i,n){super(e,i,!1),this.wn=n,this.js=new Ny(this.wn.renderer(),s=>{const r=e.Ct();return r===null?null:e.Dt().Rt(s,r.Vt)})}We(e){return this.wn.priceValueBuilder(e)}je(e){return this.wn.isWhitespace(e)}Ys(){const e=this.Es.Us();this.zs=this.Es.In().ne().map(i=>Object.assign(Object.assign({ot:i.ee,nt:NaN},e.$s(i.ee)),{He:i.$e}))}Gs(e,i){i.Qs(this.zs,ks(this.Ls))}Js(){this.wn.update({bars:this.zs.map(Cy),barSpacing:this.Ns.St().le(),visibleRange:this.Ls},this.Es.W())}}function Cy(t){return{x:t.nt,time:t.ot,originalData:t.He,barColor:t.ce}}class Ey extends mt{constructor(){super(...arguments),this.zt=null,this.Ue=[]}J(e){this.zt=e,this.Ue=[]}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.zt===null||this.zt.it.length===0||this.zt.tt===null)return;this.Ue.length||this.qe(i);const s=Math.max(1,Math.floor(n)),r=Math.round(this.zt.Ye*n)-Math.floor(s/2),l=r+s;for(let c=this.zt.tt.from;c<this.zt.tt.to;c++){const o=this.zt.it[c],u=this.Ue[c-this.zt.tt.from],h=Math.round(o.st*n);let d,f;e.fillStyle=o.ce,h<=r?(d=h,f=l):(d=r,f=h-Math.floor(s/2)+s),e.fillRect(u.Os,d,u.ui-u.Os+1,f-d)}}qe(e){if(this.zt===null||this.zt.it.length===0||this.zt.tt===null)return void(this.Ue=[]);const i=Math.ceil(this.zt.le*e)<=1?0:Math.max(1,Math.floor(e)),n=Math.round(this.zt.le*e)-i;this.Ue=new Array(this.zt.tt.to-this.zt.tt.from);for(let r=this.zt.tt.from;r<this.zt.tt.to;r++){const l=this.zt.it[r],c=Math.round(l.nt*e);let o,u;if(n%2){const h=(n-1)/2;o=c-h,u=c+h}else{const h=n/2;o=c-h,u=c+h-1}this.Ue[r-this.zt.tt.from]={Os:o,ui:u,Ze:c,Xe:l.nt*e,ot:l.ot}}for(let r=this.zt.tt.from+1;r<this.zt.tt.to;r++){const l=this.Ue[r-this.zt.tt.from],c=this.Ue[r-this.zt.tt.from-1];l.ot===c.ot+1&&l.Os-c.ui!==i+1&&(c.Ze>c.Xe?c.ui=l.Os-i-1:l.Os=c.ui+i+1)}let s=Math.ceil(this.zt.le*e);for(let r=this.zt.tt.from;r<this.zt.tt.to;r++){const l=this.Ue[r-this.zt.tt.from];l.ui<l.Os&&(l.ui=l.Os);const c=l.ui-l.Os+1;s=Math.min(c,s)}if(i>0&&s<4)for(let r=this.zt.tt.from;r<this.zt.tt.to;r++){const l=this.Ue[r-this.zt.tt.from];l.ui-l.Os+1>s&&(l.Ze>l.Xe?l.ui-=1:l.Os+=1)}}}class zy extends _l{constructor(){super(...arguments),this.js=new Ey}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e={it:this.zs,le:this.Ns.St().le(),tt:this.Ls,Ye:this.Es.Dt().Rt(this.Es.W().base,E(this.Es.Ct()).Vt)};this.js.J(e)}}class My extends _l{constructor(){super(...arguments),this.js=new Cm}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e=this.Es.W(),i={it:this.zs,Nt:e.lineStyle,fs:e.lineVisible?e.lineType:void 0,et:e.lineWidth,Ds:e.pointMarkersVisible?e.pointMarkersRadius||e.lineWidth/2+2:void 0,tt:this.Ls,ds:this.Ns.St().le()};this.js.J(i)}}const _y=/[2-9]/g;class js{constructor(e=50){this.Ke=0,this.Ge=1,this.Je=1,this.Qe={},this.tr=new Map,this.ir=e}nr(){this.Ke=0,this.tr.clear(),this.Ge=1,this.Je=1,this.Qe={}}xi(e,i,n){return this.sr(e,i,n).width}Mi(e,i,n){const s=this.sr(e,i,n);return((s.actualBoundingBoxAscent||0)-(s.actualBoundingBoxDescent||0))/2}sr(e,i,n){const s=n||_y,r=String(i).replace(s,"0");if(this.tr.has(r))return De(this.tr.get(r)).er;if(this.Ke===this.ir){const c=this.Qe[this.Je];delete this.Qe[this.Je],this.tr.delete(c),this.Je++,this.Ke--}e.save(),e.textBaseline="middle";const l=e.measureText(r);return e.restore(),l.width===0&&i.length||(this.tr.set(r,{er:l,rr:this.Ge}),this.Qe[this.Ge]=r,this.Ke++,this.Ge++),l}}class Ty{constructor(e){this.hr=null,this.k=null,this.lr="right",this.ar=e}_r(e,i,n){this.hr=e,this.k=i,this.lr=n}X(e){this.k!==null&&this.hr!==null&&this.hr.X(e,this.k,this.ar,this.lr)}}class Tm{constructor(e,i,n){this.ur=e,this.ar=new js(50),this.cr=i,this.F=n,this.j=-1,this.Wt=new Ty(this.ar)}gt(){const e=this.F.dr(this.cr);if(e===null)return null;const i=e.vr(this.cr)?e.pr():this.cr.Dt();if(i===null)return null;const n=e.mr(i);if(n==="overlay")return null;const s=this.F.br();return s.P!==this.j&&(this.j=s.P,this.ar.nr()),this.Wt._r(this.ur.Ii(),s,n),this.Wt}}class Py extends mt{constructor(){super(...arguments),this.zt=null}J(e){this.zt=e}wr(e,i){var n;if(!(!((n=this.zt)===null||n===void 0)&&n.yt))return null;const{st:s,et:r,gr:l}=this.zt;return i>=s-r-7&&i<=s+r+7?{Mr:this.zt,gr:l}:null}K({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:s}){if(this.zt===null||this.zt.yt===!1)return;const r=Math.round(this.zt.st*s);r<0||r>i.height||(e.lineCap="butt",e.strokeStyle=this.zt.V,e.lineWidth=Math.floor(this.zt.et*n),Ti(e,this.zt.Nt),gm(e,r,0,i.width))}}class qc{constructor(e){this.Sr={st:0,V:"rgba(0, 0, 0, 0)",et:1,Nt:0,yt:!1},this.kr=new Py,this.ft=!0,this.Es=e,this.Ns=e.$t(),this.kr.J(this.Sr)}bt(){this.ft=!0}gt(){return this.Es.yt()?(this.ft&&(this.yr(),this.ft=!1),this.kr):null}}class Ly extends qc{constructor(e){super(e)}yr(){this.Sr.yt=!1;const e=this.Es.Dt(),i=e.Cr().Cr;if(i!==2&&i!==3)return;const n=this.Es.W();if(!n.baseLineVisible||!this.Es.yt())return;const s=this.Es.Ct();s!==null&&(this.Sr.yt=!0,this.Sr.st=e.Rt(s.Vt,s.Vt),this.Sr.V=n.baseLineColor,this.Sr.et=n.baseLineWidth,this.Sr.Nt=n.baseLineStyle)}}class Ry extends mt{constructor(){super(...arguments),this.zt=null}J(e){this.zt=e}$e(){return this.zt}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){const s=this.zt;if(s===null)return;const r=Math.max(1,Math.floor(i)),l=r%2/2,c=Math.round(s.Xe.x*i)+l,o=s.Xe.y*n;e.fillStyle=s.Tr,e.beginPath();const u=Math.max(2,1.5*s.Pr)*i;e.arc(c,o,u,0,2*Math.PI,!1),e.fill(),e.fillStyle=s.Rr,e.beginPath(),e.arc(c,o,s.ht*i,0,2*Math.PI,!1),e.fill(),e.lineWidth=r,e.strokeStyle=s.Dr,e.beginPath(),e.arc(c,o,s.ht*i+r/2,0,2*Math.PI,!1),e.stroke()}}const $y=[{Vr:0,Or:.25,Br:4,Ar:10,Ir:.25,zr:0,Lr:.4,Er:.8},{Vr:.25,Or:.525,Br:10,Ar:14,Ir:0,zr:0,Lr:.8,Er:0},{Vr:.525,Or:1,Br:14,Ar:14,Ir:0,zr:0,Lr:0,Er:0}];function Uh(t,e,i,n){return function(s,r){if(s==="transparent")return s;const l=ws(s),c=l[3];return`rgba(${l[0]}, ${l[1]}, ${l[2]}, ${r*c})`}(t,i+(n-i)*e)}function Wh(t,e){const i=t%2600/2600;let n;for(const o of $y)if(i>=o.Vr&&i<=o.Or){n=o;break}ri(n!==void 0,"Last price animation internal logic error");const s=(i-n.Vr)/(n.Or-n.Vr);return{Rr:Uh(e,s,n.Ir,n.zr),Dr:Uh(e,s,n.Lr,n.Er),ht:(r=s,l=n.Br,c=n.Ar,l+(c-l)*r)};var r,l,c}class Dy{constructor(e){this.Wt=new Ry,this.ft=!0,this.Nr=!0,this.Fr=performance.now(),this.Wr=this.Fr-1,this.jr=e}Hr(){this.Wr=this.Fr-1,this.bt()}$r(){if(this.bt(),this.jr.W().lastPriceAnimation===2){const e=performance.now(),i=this.Wr-e;if(i>0)return void(i<650&&(this.Wr+=2600));this.Fr=e,this.Wr=e+2600}}bt(){this.ft=!0}Ur(){this.Nr=!0}yt(){return this.jr.W().lastPriceAnimation!==0}qr(){switch(this.jr.W().lastPriceAnimation){case 0:return!1;case 1:return!0;case 2:return performance.now()<=this.Wr}}gt(){return this.ft?(this.Mt(),this.ft=!1,this.Nr=!1):this.Nr&&(this.Yr(),this.Nr=!1),this.Wt}Mt(){this.Wt.J(null);const e=this.jr.$t().St(),i=e.Xs(),n=this.jr.Ct();if(i===null||n===null)return;const s=this.jr.Zr(!0);if(s.Xr||!i.Kr(s.ee))return;const r={x:e.It(s.ee),y:this.jr.Dt().Rt(s._t,n.Vt)},l=s.V,c=this.jr.W().lineWidth,o=Wh(this.Gr(),l);this.Wt.J({Tr:l,Pr:c,Rr:o.Rr,Dr:o.Dr,ht:o.ht,Xe:r})}Yr(){const e=this.Wt.$e();if(e!==null){const i=Wh(this.Gr(),e.Tr);e.Rr=i.Rr,e.Dr=i.Dr,e.ht=i.ht}}Gr(){return this.qr()?performance.now()-this.Fr:2599}}function Yn(t,e){return Sm(Math.min(Math.max(t,12),30)*e)}function Ss(t,e){switch(t){case"arrowDown":case"arrowUp":return Yn(e,1);case"circle":return Yn(e,.8);case"square":return Yn(e,.7)}}function Pm(t){return function(e){const i=Math.ceil(e);return i%2!=0?i-1:i}(Yn(t,1))}function Hh(t){return Math.max(Yn(t,.1),3)}function qh(t,e,i){return e?t:i?Math.ceil(t/2):0}function Lm(t,e,i,n,s){const r=Ss("square",i),l=(r-1)/2,c=t-l,o=e-l;return n>=c&&n<=c+r&&s>=o&&s<=o+r}function Kh(t,e,i,n){const s=(Ss("arrowUp",n)-1)/2*i.Jr,r=(Sm(n/2)-1)/2*i.Jr;e.beginPath(),t?(e.moveTo(i.nt-s,i.st),e.lineTo(i.nt,i.st-s),e.lineTo(i.nt+s,i.st),e.lineTo(i.nt+r,i.st),e.lineTo(i.nt+r,i.st+s),e.lineTo(i.nt-r,i.st+s),e.lineTo(i.nt-r,i.st)):(e.moveTo(i.nt-s,i.st),e.lineTo(i.nt,i.st+s),e.lineTo(i.nt+s,i.st),e.lineTo(i.nt+r,i.st),e.lineTo(i.nt+r,i.st-s),e.lineTo(i.nt-r,i.st-s),e.lineTo(i.nt-r,i.st)),e.fill()}function By(t,e,i,n,s,r){return Lm(e,i,n,s,r)}class Ay extends mt{constructor(){super(...arguments),this.zt=null,this.ar=new js,this.j=-1,this.H="",this.Qr=""}J(e){this.zt=e}_r(e,i){this.j===e&&this.H===i||(this.j=e,this.H=i,this.Qr=gn(e,i),this.ar.nr())}wr(e,i){if(this.zt===null||this.zt.tt===null)return null;for(let n=this.zt.tt.from;n<this.zt.tt.to;n++){const s=this.zt.it[n];if(Oy(s,e,i))return{Mr:s.th,gr:s.gr}}return null}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n},s,r){if(this.zt!==null&&this.zt.tt!==null){e.textBaseline="middle",e.font=this.Qr;for(let l=this.zt.tt.from;l<this.zt.tt.to;l++){const c=this.zt.it[l];c.Kt!==void 0&&(c.Kt.Hi=this.ar.xi(e,c.Kt.ih),c.Kt.At=this.j,c.Kt.nt=c.nt-c.Kt.Hi/2),Iy(c,e,i,n)}}}}function Iy(t,e,i,n){e.fillStyle=t.V,t.Kt!==void 0&&function(s,r,l,c,o,u){s.save(),s.scale(o,u),s.fillText(r,l,c),s.restore()}(e,t.Kt.ih,t.Kt.nt,t.Kt.st,i,n),function(s,r,l){if(s.Ks!==0){switch(s.nh){case"arrowDown":return void Kh(!1,r,l,s.Ks);case"arrowUp":return void Kh(!0,r,l,s.Ks);case"circle":return void function(c,o,u){const h=(Ss("circle",u)-1)/2;c.beginPath(),c.arc(o.nt,o.st,h*o.Jr,0,2*Math.PI,!1),c.fill()}(r,l,s.Ks);case"square":return void function(c,o,u){const h=Ss("square",u),d=(h-1)*o.Jr/2,f=o.nt-d,m=o.st-d;c.fillRect(f,m,h*o.Jr,h*o.Jr)}(r,l,s.Ks)}s.nh}}(t,e,function(s,r,l){const c=Math.max(1,Math.floor(r))%2/2;return{nt:Math.round(s.nt*r)+c,st:s.st*l,Jr:r}}(t,i,n))}function Oy(t,e,i){return!(t.Kt===void 0||!function(n,s,r,l,c,o){const u=l/2;return c>=n&&c<=n+r&&o>=s-u&&o<=s+u}(t.Kt.nt,t.Kt.st,t.Kt.Hi,t.Kt.At,e,i))||function(n,s,r){if(n.Ks===0)return!1;switch(n.nh){case"arrowDown":case"arrowUp":return By(0,n.nt,n.st,n.Ks,s,r);case"circle":return function(l,c,o,u,h){const d=2+Ss("circle",o)/2,f=l-u,m=c-h;return Math.sqrt(f*f+m*m)<=d}(n.nt,n.st,n.Ks,s,r);case"square":return Lm(n.nt,n.st,n.Ks,s,r)}}(t,e,i)}function Fy(t,e,i,n,s,r,l,c,o){const u=wt(i)?i:i.Se,h=wt(i)?i:i.Me,d=wt(i)?i:i.xe,f=wt(e.size)?Math.max(e.size,0):1,m=Pm(c.le())*f,g=m/2;switch(t.Ks=m,e.position){case"inBar":return t.st=l.Rt(u,o),void(t.Kt!==void 0&&(t.Kt.st=t.st+g+r+.6*s));case"aboveBar":return t.st=l.Rt(h,o)-g-n.sh,t.Kt!==void 0&&(t.Kt.st=t.st-g-.6*s,n.sh+=1.2*s),void(n.sh+=m+r);case"belowBar":return t.st=l.Rt(d,o)+g+n.eh,t.Kt!==void 0&&(t.Kt.st=t.st+g+r+.6*s,n.eh+=1.2*s),void(n.eh+=m+r)}e.position}class Vy{constructor(e,i){this.ft=!0,this.rh=!0,this.hh=!0,this.ah=null,this.oh=null,this.Wt=new Ay,this.jr=e,this.$i=i,this.zt={it:[],tt:null}}bt(e){this.ft=!0,this.hh=!0,e==="data"&&(this.rh=!0,this.oh=null)}gt(e){if(!this.jr.yt())return null;this.ft&&this._h();const i=this.$i.W().layout;return this.Wt._r(i.fontSize,i.fontFamily),this.Wt.J(this.zt),this.Wt}uh(){if(this.hh){if(this.jr.dh().length>0){const e=this.$i.St().le(),i=Hh(e),n=1.5*Pm(e)+2*i,s=this.fh();this.ah={above:qh(n,s.aboveBar,s.inBar),below:qh(n,s.belowBar,s.inBar)}}else this.ah=null;this.hh=!1}return this.ah}fh(){return this.oh===null&&(this.oh=this.jr.dh().reduce((e,i)=>(e[i.position]||(e[i.position]=!0),e),{inBar:!1,aboveBar:!1,belowBar:!1})),this.oh}_h(){const e=this.jr.Dt(),i=this.$i.St(),n=this.jr.dh();this.rh&&(this.zt.it=n.map(h=>({ot:h.time,nt:0,st:0,Ks:0,nh:h.shape,V:h.color,th:h.th,gr:h.id,Kt:void 0})),this.rh=!1);const s=this.$i.W().layout;this.zt.tt=null;const r=i.Xs();if(r===null)return;const l=this.jr.Ct();if(l===null||this.zt.it.length===0)return;let c=NaN;const o=Hh(i.le()),u={sh:o,eh:o};this.zt.tt=Mm(this.zt.it,r,!0);for(let h=this.zt.tt.from;h<this.zt.tt.to;h++){const d=n[h];d.time!==c&&(u.sh=o,u.eh=o,c=d.time);const f=this.zt.it[h];f.nt=i.It(d.time),d.text!==void 0&&d.text.length>0&&(f.Kt={ih:d.text,nt:0,st:0,Hi:0,At:0});const m=this.jr.ph(d.time);m!==null&&Fy(f,d,m,u,s.fontSize,o,e,i,l.Vt)}this.ft=!1}}class Uy extends qc{constructor(e){super(e)}yr(){const e=this.Sr;e.yt=!1;const i=this.Es.W();if(!i.priceLineVisible||!this.Es.yt())return;const n=this.Es.Zr(i.priceLineSource===0);n.Xr||(e.yt=!0,e.st=n.ki,e.V=this.Es.mh(n.V),e.et=i.priceLineWidth,e.Nt=i.priceLineStyle)}}class Wy extends El{constructor(e){super(),this.jt=e}zi(e,i,n){e.yt=!1,i.yt=!1;const s=this.jt;if(!s.yt())return;const r=s.W(),l=r.lastValueVisible,c=s.bh()!=="",o=r.seriesLastValueMode===0,u=s.Zr(!1);if(u.Xr)return;l&&(e.Kt=this.wh(u,l,o),e.yt=e.Kt.length!==0),(c||o)&&(i.Kt=this.gh(u,l,c,o),i.yt=i.Kt.length>0);const h=s.mh(u.V),d=Nl(h);n.t=d.t,n.ki=u.ki,i.Ot=s.$t().Bt(u.ki/s.Dt().At()),e.Ot=h,e.V=d.i,i.V=d.i}gh(e,i,n,s){let r="";const l=this.jt.bh();return n&&l.length!==0&&(r+=`${l} `),i&&s&&(r+=this.jt.Dt().Mh()?e.xh:e.Sh),r.trim()}wh(e,i,n){return i?n?this.jt.Dt().Mh()?e.Sh:e.xh:e.Kt:""}}function Xh(t,e,i,n){const s=Number.isFinite(e),r=Number.isFinite(i);return s&&r?t(e,i):s||r?s?e:i:n}class We{constructor(e,i){this.kh=e,this.yh=i}Ch(e){return e!==null&&this.kh===e.kh&&this.yh===e.yh}Th(){return new We(this.kh,this.yh)}Ph(){return this.kh}Rh(){return this.yh}Dh(){return this.yh-this.kh}Ni(){return this.yh===this.kh||Number.isNaN(this.yh)||Number.isNaN(this.kh)}ts(e){return e===null?this:new We(Xh(Math.min,this.Ph(),e.Ph(),-1/0),Xh(Math.max,this.Rh(),e.Rh(),1/0))}Vh(e){if(!wt(e)||this.yh-this.kh===0)return;const i=.5*(this.yh+this.kh);let n=this.yh-i,s=this.kh-i;n*=e,s*=e,this.yh=i+n,this.kh=i+s}Oh(e){wt(e)&&(this.yh+=e,this.kh+=e)}Bh(){return{minValue:this.kh,maxValue:this.yh}}static Ah(e){return e===null?null:new We(e.minValue,e.maxValue)}}class sl{constructor(e,i){this.Ih=e,this.zh=i||null}Lh(){return this.Ih}Eh(){return this.zh}Bh(){return this.Ih===null?null:{priceRange:this.Ih.Bh(),margins:this.zh||void 0}}static Ah(e){return e===null?null:new sl(We.Ah(e.priceRange),e.margins)}}class Hy extends qc{constructor(e,i){super(e),this.Nh=i}yr(){const e=this.Sr;e.yt=!1;const i=this.Nh.W();if(!this.Es.yt()||!i.lineVisible)return;const n=this.Nh.Fh();n!==null&&(e.yt=!0,e.st=n,e.V=i.color,e.et=i.lineWidth,e.Nt=i.lineStyle,e.gr=this.Nh.W().id)}}class qy extends El{constructor(e,i){super(),this.jr=e,this.Nh=i}zi(e,i,n){e.yt=!1,i.yt=!1;const s=this.Nh.W(),r=s.axisLabelVisible,l=s.title!=="",c=this.jr;if(!r||!c.yt())return;const o=this.Nh.Fh();if(o===null)return;l&&(i.Kt=s.title,i.yt=!0),i.Ot=c.$t().Bt(o/c.Dt().At()),e.Kt=this.Wh(s.price),e.yt=!0;const u=Nl(s.axisLabelColor||s.color);n.t=u.t;const h=s.axisLabelTextColor||u.i;e.V=h,i.V=h,n.ki=o}Wh(e){const i=this.jr.Ct();return i===null?"":this.jr.Dt().Fi(e,i.Vt)}}class Ky{constructor(e,i){this.jr=e,this.cn=i,this.jh=new Hy(e,this),this.ur=new qy(e,this),this.Hh=new Tm(this.ur,e,e.$t())}$h(e){pt(this.cn,e),this.bt(),this.jr.$t().Uh()}W(){return this.cn}qh(){return this.jh}Yh(){return this.Hh}Zh(){return this.ur}bt(){this.jh.bt(),this.ur.bt()}Fh(){const e=this.jr,i=e.Dt();if(e.$t().St().Ni()||i.Ni())return null;const n=e.Ct();return n===null?null:i.Rt(this.cn.price,n.Vt)}}class Xy extends Uc{constructor(e){super(),this.$i=e}$t(){return this.$i}}const Qy={Bar:(t,e,i,n)=>{var s;const r=e.upColor,l=e.downColor,c=E(t(i,n)),o=Gi(c.Vt[0])<=Gi(c.Vt[3]);return{ce:(s=c.V)!==null&&s!==void 0?s:o?r:l}},Candlestick:(t,e,i,n)=>{var s,r,l;const c=e.upColor,o=e.downColor,u=e.borderUpColor,h=e.borderDownColor,d=e.wickUpColor,f=e.wickDownColor,m=E(t(i,n)),g=Gi(m.Vt[0])<=Gi(m.Vt[3]);return{ce:(s=m.V)!==null&&s!==void 0?s:g?c:o,Ne:(r=m.Ot)!==null&&r!==void 0?r:g?u:h,Ee:(l=m.Xh)!==null&&l!==void 0?l:g?d:f}},Custom:(t,e,i,n)=>{var s;return{ce:(s=E(t(i,n)).V)!==null&&s!==void 0?s:e.color}},Area:(t,e,i,n)=>{var s,r,l,c;const o=E(t(i,n));return{ce:(s=o.lt)!==null&&s!==void 0?s:e.lineColor,lt:(r=o.lt)!==null&&r!==void 0?r:e.lineColor,Ps:(l=o.Ps)!==null&&l!==void 0?l:e.topColor,Rs:(c=o.Rs)!==null&&c!==void 0?c:e.bottomColor}},Baseline:(t,e,i,n)=>{var s,r,l,c,o,u;const h=E(t(i,n));return{ce:h.Vt[3]>=e.baseValue.price?e.topLineColor:e.bottomLineColor,Re:(s=h.Re)!==null&&s!==void 0?s:e.topLineColor,De:(r=h.De)!==null&&r!==void 0?r:e.bottomLineColor,ke:(l=h.ke)!==null&&l!==void 0?l:e.topFillColor1,ye:(c=h.ye)!==null&&c!==void 0?c:e.topFillColor2,Ce:(o=h.Ce)!==null&&o!==void 0?o:e.bottomFillColor1,Te:(u=h.Te)!==null&&u!==void 0?u:e.bottomFillColor2}},Line:(t,e,i,n)=>{var s,r;const l=E(t(i,n));return{ce:(s=l.V)!==null&&s!==void 0?s:e.color,lt:(r=l.V)!==null&&r!==void 0?r:e.color}},Histogram:(t,e,i,n)=>{var s;return{ce:(s=E(t(i,n)).V)!==null&&s!==void 0?s:e.color}}};class Yy{constructor(e){this.Kh=(i,n)=>n!==void 0?n.Vt:this.jr.In().Gh(i),this.jr=e,this.Jh=Qy[e.Qh()]}$s(e,i){return this.Jh(this.Kh,this.jr.W(),e,i)}}var Qh;(function(t){t[t.NearestLeft=-1]="NearestLeft",t[t.None=0]="None",t[t.NearestRight=1]="NearestRight"})(Qh||(Qh={}));const At=30;class Gy{constructor(){this.tl=[],this.il=new Map,this.nl=new Map}sl(){return this.Ks()>0?this.tl[this.tl.length-1]:null}el(){return this.Ks()>0?this.rl(0):null}An(){return this.Ks()>0?this.rl(this.tl.length-1):null}Ks(){return this.tl.length}Ni(){return this.Ks()===0}Kr(e){return this.hl(e,0)!==null}Gh(e){return this.ll(e)}ll(e,i=0){const n=this.hl(e,i);return n===null?null:Object.assign(Object.assign({},this.al(n)),{ee:this.rl(n)})}ne(){return this.tl}ol(e,i,n){if(this.Ni())return null;let s=null;for(const r of n)s=sr(s,this._l(e,i,r));return s}J(e){this.nl.clear(),this.il.clear(),this.tl=e}rl(e){return this.tl[e].ee}al(e){return this.tl[e]}hl(e,i){const n=this.ul(e);if(n===null&&i!==0)switch(i){case-1:return this.cl(e);case 1:return this.dl(e);default:throw new TypeError("Unknown search mode")}return n}cl(e){let i=this.fl(e);return i>0&&(i-=1),i!==this.tl.length&&this.rl(i)<e?i:null}dl(e){const i=this.vl(e);return i!==this.tl.length&&e<this.rl(i)?i:null}ul(e){const i=this.fl(e);return i===this.tl.length||e<this.tl[i].ee?null:i}fl(e){return Rs(this.tl,e,(i,n)=>i.ee<n)}vl(e){return zm(this.tl,e,(i,n)=>i.ee>n)}pl(e,i,n){let s=null;for(let r=e;r<i;r++){const l=this.tl[r].Vt[n];Number.isNaN(l)||(s===null?s={ml:l,bl:l}:(l<s.ml&&(s.ml=l),l>s.bl&&(s.bl=l)))}return s}_l(e,i,n){if(this.Ni())return null;let s=null;const r=E(this.el()),l=E(this.An()),c=Math.max(e,r),o=Math.min(i,l),u=Math.ceil(c/At)*At,h=Math.max(u,Math.floor(o/At)*At);{const f=this.fl(c),m=this.vl(Math.min(o,u,i));s=sr(s,this.pl(f,m,n))}let d=this.il.get(n);d===void 0&&(d=new Map,this.il.set(n,d));for(let f=Math.max(u+1,c);f<h;f+=At){const m=Math.floor(f/At);let g=d.get(m);if(g===void 0){const p=this.fl(m*At),w=this.vl((m+1)*At-1);g=this.pl(p,w,n),d.set(m,g)}s=sr(s,g)}{const f=this.fl(h),m=this.vl(o);s=sr(s,this.pl(f,m,n))}return s}}function sr(t,e){return t===null?e:e===null?t:{ml:Math.min(t.ml,e.ml),bl:Math.max(t.bl,e.bl)}}class Jy{constructor(e){this.wl=e}X(e,i,n){this.wl.draw(e)}gl(e,i,n){var s,r;(r=(s=this.wl).drawBackground)===null||r===void 0||r.call(s,e)}}class ca{constructor(e){this.tr=null,this.wn=e}gt(){var e;const i=this.wn.renderer();if(i===null)return null;if(((e=this.tr)===null||e===void 0?void 0:e.Ml)===i)return this.tr.xl;const n=new Jy(i);return this.tr={Ml:i,xl:n},n}Sl(){var e,i,n;return(n=(i=(e=this.wn).zOrder)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:"normal"}}function Rm(t){var e,i,n,s,r;return{Kt:t.text(),ki:t.coordinate(),Si:(e=t.fixedCoordinate)===null||e===void 0?void 0:e.call(t),V:t.textColor(),t:t.backColor(),yt:(n=(i=t.visible)===null||i===void 0?void 0:i.call(t))===null||n===void 0||n,hi:(r=(s=t.tickVisible)===null||s===void 0?void 0:s.call(t))===null||r===void 0||r}}class Zy{constructor(e,i){this.Wt=new wm,this.kl=e,this.yl=i}gt(){return this.Wt.J(Object.assign({Hi:this.yl.Hi()},Rm(this.kl))),this.Wt}}class e2 extends El{constructor(e,i){super(),this.kl=e,this.Li=i}zi(e,i,n){const s=Rm(this.kl);n.t=s.t,e.V=s.V;const r=2/12*this.Li.P();n.wi=r,n.gi=r,n.ki=s.ki,n.Si=s.Si,e.Kt=s.Kt,e.yt=s.yt,e.hi=s.hi}}class t2{constructor(e,i){this.Cl=null,this.Tl=null,this.Pl=null,this.Rl=null,this.Dl=null,this.Vl=e,this.jr=i}Ol(){return this.Vl}Vn(){var e,i;(i=(e=this.Vl).updateAllViews)===null||i===void 0||i.call(e)}Pn(){var e,i,n,s;const r=(n=(i=(e=this.Vl).paneViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((s=this.Cl)===null||s===void 0?void 0:s.Ml)===r)return this.Cl.xl;const l=r.map(c=>new ca(c));return this.Cl={Ml:r,xl:l},l}Qi(){var e,i,n,s;const r=(n=(i=(e=this.Vl).timeAxisViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((s=this.Tl)===null||s===void 0?void 0:s.Ml)===r)return this.Tl.xl;const l=this.jr.$t().St(),c=r.map(o=>new Zy(o,l));return this.Tl={Ml:r,xl:c},c}Rn(){var e,i,n,s;const r=(n=(i=(e=this.Vl).priceAxisViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((s=this.Pl)===null||s===void 0?void 0:s.Ml)===r)return this.Pl.xl;const l=this.jr.Dt(),c=r.map(o=>new e2(o,l));return this.Pl={Ml:r,xl:c},c}Bl(){var e,i,n,s;const r=(n=(i=(e=this.Vl).priceAxisPaneViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((s=this.Rl)===null||s===void 0?void 0:s.Ml)===r)return this.Rl.xl;const l=r.map(c=>new ca(c));return this.Rl={Ml:r,xl:l},l}Al(){var e,i,n,s;const r=(n=(i=(e=this.Vl).timeAxisPaneViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((s=this.Dl)===null||s===void 0?void 0:s.Ml)===r)return this.Dl.xl;const l=r.map(c=>new ca(c));return this.Dl={Ml:r,xl:l},l}Il(e,i){var n,s,r;return(r=(s=(n=this.Vl).autoscaleInfo)===null||s===void 0?void 0:s.call(n,e,i))!==null&&r!==void 0?r:null}wr(e,i){var n,s,r;return(r=(s=(n=this.Vl).hitTest)===null||s===void 0?void 0:s.call(n,e,i))!==null&&r!==void 0?r:null}}function ua(t,e,i,n){t.forEach(s=>{e(s).forEach(r=>{r.Sl()===i&&n.push(r)})})}function ha(t){return t.Pn()}function i2(t){return t.Bl()}function n2(t){return t.Al()}class Kc extends Xy{constructor(e,i,n,s,r){super(e),this.zt=new Gy,this.jh=new Uy(this),this.zl=[],this.Ll=new Ly(this),this.El=null,this.Nl=null,this.Fl=[],this.Wl=[],this.jl=null,this.Hl=[],this.cn=i,this.$l=n;const l=new Wy(this);this.rn=[l],this.Hh=new Tm(l,this,e),n!=="Area"&&n!=="Line"&&n!=="Baseline"||(this.El=new Dy(this)),this.Ul(),this.ql(r)}S(){this.jl!==null&&clearTimeout(this.jl)}mh(e){return this.cn.priceLineColor||e}Zr(e){const i={Xr:!0},n=this.Dt();if(this.$t().St().Ni()||n.Ni()||this.zt.Ni())return i;const s=this.$t().St().Xs(),r=this.Ct();if(s===null||r===null)return i;let l,c;if(e){const d=this.zt.sl();if(d===null)return i;l=d,c=d.ee}else{const d=this.zt.ll(s.ui(),-1);if(d===null||(l=this.zt.Gh(d.ee),l===null))return i;c=d.ee}const o=l.Vt[3],u=this.Us().$s(c,{Vt:l}),h=n.Rt(o,r.Vt);return{Xr:!1,_t:o,Kt:n.Fi(o,r.Vt),xh:n.Yl(o),Sh:n.Zl(o,r.Vt),V:u.ce,ki:h,ee:c}}Us(){return this.Nl!==null||(this.Nl=new Yy(this)),this.Nl}W(){return this.cn}$h(e){const i=e.priceScaleId;i!==void 0&&i!==this.cn.priceScaleId&&this.$t().Xl(this,i),pt(this.cn,e),e.priceFormat!==void 0&&(this.Ul(),this.$t().Kl()),this.$t().Gl(this),this.$t().Jl(),this.wn.bt("options")}J(e,i){this.zt.J(e),this.Ql(),this.wn.bt("data"),this.dn.bt("data"),this.El!==null&&(i&&i.ta?this.El.$r():e.length===0&&this.El.Hr());const n=this.$t().dr(this);this.$t().ia(n),this.$t().Gl(this),this.$t().Jl(),this.$t().Uh()}na(e){this.Fl=e,this.Ql();const i=this.$t().dr(this);this.dn.bt("data"),this.$t().ia(i),this.$t().Gl(this),this.$t().Jl(),this.$t().Uh()}sa(){return this.Fl}dh(){return this.Wl}ea(e){const i=new Ky(this,e);return this.zl.push(i),this.$t().Gl(this),i}ra(e){const i=this.zl.indexOf(e);i!==-1&&this.zl.splice(i,1),this.$t().Gl(this)}Qh(){return this.$l}Ct(){const e=this.ha();return e===null?null:{Vt:e.Vt[3],la:e.ot}}ha(){const e=this.$t().St().Xs();if(e===null)return null;const i=e.Os();return this.zt.ll(i,1)}In(){return this.zt}ph(e){const i=this.zt.Gh(e);return i===null?null:this.$l==="Bar"||this.$l==="Candlestick"||this.$l==="Custom"?{ge:i.Vt[0],Me:i.Vt[1],xe:i.Vt[2],Se:i.Vt[3]}:i.Vt[3]}aa(e){const i=[];ua(this.Hl,ha,"top",i);const n=this.El;return n!==null&&n.yt()&&(this.jl===null&&n.qr()&&(this.jl=setTimeout(()=>{this.jl=null,this.$t().oa()},0)),n.Ur(),i.unshift(n)),i}Pn(){const e=[];this._a()||e.push(this.Ll),e.push(this.wn,this.jh,this.dn);const i=this.zl.map(n=>n.qh());return e.push(...i),ua(this.Hl,ha,"normal",e),e}ua(){return this.ca(ha,"bottom")}da(e){return this.ca(i2,e)}fa(e){return this.ca(n2,e)}va(e,i){return this.Hl.map(n=>n.wr(e,i)).filter(n=>n!==null)}Ji(e){return[this.Hh,...this.zl.map(i=>i.Yh())]}Rn(e,i){if(i!==this.Yi&&!this._a())return[];const n=[...this.rn];for(const s of this.zl)n.push(s.Zh());return this.Hl.forEach(s=>{n.push(...s.Rn())}),n}Qi(){const e=[];return this.Hl.forEach(i=>{e.push(...i.Qi())}),e}Il(e,i){if(this.cn.autoscaleInfoProvider!==void 0){const n=this.cn.autoscaleInfoProvider(()=>{const s=this.pa(e,i);return s===null?null:s.Bh()});return sl.Ah(n)}return this.pa(e,i)}ma(){return this.cn.priceFormat.minMove}ba(){return this.wa}Vn(){var e;this.wn.bt(),this.dn.bt();for(const i of this.rn)i.bt();for(const i of this.zl)i.bt();this.jh.bt(),this.Ll.bt(),(e=this.El)===null||e===void 0||e.bt(),this.Hl.forEach(i=>i.Vn())}Dt(){return E(super.Dt())}kt(e){if(!((this.$l==="Line"||this.$l==="Area"||this.$l==="Baseline")&&this.cn.crosshairMarkerVisible))return null;const i=this.zt.Gh(e);return i===null?null:{_t:i.Vt[3],ht:this.ga(),Ot:this.Ma(),Pt:this.xa(),Tt:this.Sa(e)}}bh(){return this.cn.title}yt(){return this.cn.visible}ka(e){this.Hl.push(new t2(e,this))}ya(e){this.Hl=this.Hl.filter(i=>i.Ol()!==e)}Ca(){if(this.wn instanceof oa)return e=>this.wn.We(e)}Ta(){if(this.wn instanceof oa)return e=>this.wn.je(e)}_a(){return!zl(this.Dt().Pa())}pa(e,i){if(!bs(e)||!bs(i)||this.zt.Ni())return null;const n=this.$l==="Line"||this.$l==="Area"||this.$l==="Baseline"||this.$l==="Histogram"?[3]:[2,1],s=this.zt.ol(e,i,n);let r=s!==null?new We(s.ml,s.bl):null;if(this.Qh()==="Histogram"){const c=this.cn.base,o=new We(c,c);r=r!==null?r.ts(o):o}let l=this.dn.uh();return this.Hl.forEach(c=>{const o=c.Il(e,i);if(o!=null&&o.priceRange){const m=new We(o.priceRange.minValue,o.priceRange.maxValue);r=r!==null?r.ts(m):m}var u,h,d,f;o!=null&&o.margins&&(u=l,h=o.margins,l={above:Math.max((d=u==null?void 0:u.above)!==null&&d!==void 0?d:0,h.above),below:Math.max((f=u==null?void 0:u.below)!==null&&f!==void 0?f:0,h.below)})}),new sl(r,l)}ga(){switch(this.$l){case"Line":case"Area":case"Baseline":return this.cn.crosshairMarkerRadius}return 0}Ma(){switch(this.$l){case"Line":case"Area":case"Baseline":{const e=this.cn.crosshairMarkerBorderColor;if(e.length!==0)return e}}return null}xa(){switch(this.$l){case"Line":case"Area":case"Baseline":return this.cn.crosshairMarkerBorderWidth}return 0}Sa(e){switch(this.$l){case"Line":case"Area":case"Baseline":{const i=this.cn.crosshairMarkerBackgroundColor;if(i.length!==0)return i}}return this.Us().$s(e).ce}Ul(){switch(this.cn.priceFormat.type){case"custom":this.wa={format:this.cn.priceFormat.formatter};break;case"volume":this.wa=new uy(this.cn.priceFormat.precision);break;case"percent":this.wa=new bm(this.cn.priceFormat.precision);break;default:{const e=Math.pow(10,this.cn.priceFormat.precision);this.wa=new Ml(e,this.cn.priceFormat.minMove*e)}}this.Yi!==null&&this.Yi.Ra()}Ql(){const e=this.$t().St();if(!e.Da()||this.zt.Ni())return void(this.Wl=[]);const i=E(this.zt.el());this.Wl=this.Fl.map((n,s)=>{const r=E(e.Va(n.time,!0)),l=r<i?1:-1;return{time:E(this.zt.ll(r,l)).ee,position:n.position,shape:n.shape,color:n.color,id:n.id,th:s,text:n.text,size:n.size,originalTime:n.originalTime}})}ql(e){switch(this.dn=new Vy(this,this.$t()),this.$l){case"Bar":this.wn=new yy(this,this.$t());break;case"Candlestick":this.wn=new Sy(this,this.$t());break;case"Line":this.wn=new My(this,this.$t());break;case"Custom":this.wn=new oa(this,this.$t(),De(e));break;case"Area":this.wn=new vy(this,this.$t());break;case"Baseline":this.wn=new ky(this,this.$t());break;case"Histogram":this.wn=new zy(this,this.$t());break;default:throw Error("Unknown chart style assigned: "+this.$l)}}ca(e,i){const n=[];return ua(this.Hl,e,i,n),n}}class s2{constructor(e){this.cn=e}Oa(e,i,n){let s=e;if(this.cn.mode===0)return s;const r=n.vn(),l=r.Ct();if(l===null)return s;const c=r.Rt(e,l),o=n.Ba().filter(h=>h instanceof Kc).reduce((h,d)=>{if(n.vr(d)||!d.yt())return h;const f=d.Dt(),m=d.In();if(f.Ni()||!m.Kr(i))return h;const g=m.Gh(i);if(g===null)return h;const p=Gi(d.Ct());return h.concat([f.Rt(g.Vt[3],p.Vt)])},[]);if(o.length===0)return s;o.sort((h,d)=>Math.abs(h-c)-Math.abs(d-c));const u=o[0];return s=r.pn(u,l),s}}class r2 extends mt{constructor(){super(...arguments),this.zt=null}J(e){this.zt=e}K({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:s}){if(this.zt===null)return;const r=Math.max(1,Math.floor(n));e.lineWidth=r,function(l,c){l.save(),l.lineWidth%2&&l.translate(.5,.5),c(),l.restore()}(e,()=>{const l=E(this.zt);if(l.Aa){e.strokeStyle=l.Ia,Ti(e,l.za),e.beginPath();for(const c of l.La){const o=Math.round(c.Ea*n);e.moveTo(o,-r),e.lineTo(o,i.height+r)}e.stroke()}if(l.Na){e.strokeStyle=l.Fa,Ti(e,l.Wa),e.beginPath();for(const c of l.ja){const o=Math.round(c.Ea*s);e.moveTo(-r,o),e.lineTo(i.width+r,o)}e.stroke()}})}}class l2{constructor(e){this.Wt=new r2,this.ft=!0,this.tn=e}bt(){this.ft=!0}gt(){if(this.ft){const e=this.tn.$t().W().grid,i={Na:e.horzLines.visible,Aa:e.vertLines.visible,Fa:e.horzLines.color,Ia:e.vertLines.color,Wa:e.horzLines.style,za:e.vertLines.style,ja:this.tn.vn().Ha(),La:(this.tn.$t().St().Ha()||[]).map(n=>({Ea:n.coord}))};this.Wt.J(i),this.ft=!1}return this.Wt}}class a2{constructor(e){this.wn=new l2(e)}qh(){return this.wn}}const da={$a:4,Ua:1e-4};function Ji(t,e){const i=100*(t-e)/e;return e<0?-i:i}function o2(t,e){const i=Ji(t.Ph(),e),n=Ji(t.Rh(),e);return new We(i,n)}function Gn(t,e){const i=100*(t-e)/e+100;return e<0?-i:i}function c2(t,e){const i=Gn(t.Ph(),e),n=Gn(t.Rh(),e);return new We(i,n)}function rl(t,e){const i=Math.abs(t);if(i<1e-15)return 0;const n=Math.log10(i+e.Ua)+e.$a;return t<0?-n:n}function Jn(t,e){const i=Math.abs(t);if(i<1e-15)return 0;const n=Math.pow(10,i-e.$a)-e.Ua;return t<0?-n:n}function $n(t,e){if(t===null)return null;const i=rl(t.Ph(),e),n=rl(t.Rh(),e);return new We(i,n)}function rr(t,e){if(t===null)return null;const i=Jn(t.Ph(),e),n=Jn(t.Rh(),e);return new We(i,n)}function fa(t){if(t===null)return da;const e=Math.abs(t.Rh()-t.Ph());if(e>=1||e<1e-15)return da;const i=Math.ceil(Math.abs(Math.log10(e))),n=da.$a+i;return{$a:n,Ua:1/Math.pow(10,n)}}class pa{constructor(e,i){if(this.qa=e,this.Ya=i,function(n){if(n<0)return!1;for(let s=n;s>1;s/=10)if(s%10!=0)return!1;return!0}(this.qa))this.Za=[2,2.5,2];else{this.Za=[];for(let n=this.qa;n!==1;){if(n%2==0)this.Za.push(2),n/=2;else{if(n%5!=0)throw new Error("unexpected base");this.Za.push(2,2.5),n/=5}if(this.Za.length>100)throw new Error("something wrong with base")}}}Xa(e,i,n){const s=this.qa===0?0:1/this.qa;let r=Math.pow(10,Math.max(0,Math.ceil(Math.log10(e-i)))),l=0,c=this.Ya[0];for(;;){const d=nr(r,s,1e-14)&&r>s+1e-14,f=nr(r,n*c,1e-14),m=nr(r,1,1e-14);if(!(d&&f&&m))break;r/=c,c=this.Ya[++l%this.Ya.length]}if(r<=s+1e-14&&(r=s),r=Math.max(1,r),this.Za.length>0&&(o=r,u=1,h=1e-14,Math.abs(o-u)<h))for(l=0,c=this.Za[0];nr(r,n*c,1e-14)&&r>s+1e-14;)r/=c,c=this.Za[++l%this.Za.length];var o,u,h;return r}}class Yh{constructor(e,i,n,s){this.Ka=[],this.Li=e,this.qa=i,this.Ga=n,this.Ja=s}Xa(e,i){if(e<i)throw new Error("high < low");const n=this.Li.At(),s=(e-i)*this.Qa()/n,r=new pa(this.qa,[2,2.5,2]),l=new pa(this.qa,[2,2,2.5]),c=new pa(this.qa,[2.5,2,2]),o=[];return o.push(r.Xa(e,i,s),l.Xa(e,i,s),c.Xa(e,i,s)),function(u){if(u.length<1)throw Error("array is empty");let h=u[0];for(let d=1;d<u.length;++d)u[d]<h&&(h=u[d]);return h}(o)}io(){const e=this.Li,i=e.Ct();if(i===null)return void(this.Ka=[]);const n=e.At(),s=this.Ga(n-1,i),r=this.Ga(0,i),l=this.Li.W().entireTextOnly?this.no()/2:0,c=l,o=n-1-l,u=Math.max(s,r),h=Math.min(s,r);if(u===h)return void(this.Ka=[]);let d=this.Xa(u,h),f=u%d;f+=f<0?d:0;const m=u>=h?1:-1;let g=null,p=0;for(let w=u-f;w>h;w-=d){const v=this.Ja(w,i,!0);g!==null&&Math.abs(v-g)<this.Qa()||v<c||v>o||(p<this.Ka.length?(this.Ka[p].Ea=v,this.Ka[p].so=e.eo(w)):this.Ka.push({Ea:v,so:e.eo(w)}),p++,g=v,e.ro()&&(d=this.Xa(w*m,h)))}this.Ka.length=p}Ha(){return this.Ka}no(){return this.Li.P()}Qa(){return Math.ceil(2.5*this.no())}}function $m(t){return t.slice().sort((e,i)=>E(e.Xi())-E(i.Xi()))}var Gh;(function(t){t[t.Normal=0]="Normal",t[t.Logarithmic=1]="Logarithmic",t[t.Percentage=2]="Percentage",t[t.IndexedTo100=3]="IndexedTo100"})(Gh||(Gh={}));const Jh=new bm,Zh=new Ml(100,1);class u2{constructor(e,i,n,s){this.ho=0,this.lo=null,this.Ih=null,this.ao=null,this.oo={_o:!1,uo:null},this.co=0,this.do=0,this.fo=new pe,this.vo=new pe,this.po=[],this.mo=null,this.bo=null,this.wo=null,this.Mo=null,this.wa=Zh,this.xo=fa(null),this.So=e,this.cn=i,this.ko=n,this.yo=s,this.Co=new Yh(this,100,this.To.bind(this),this.Po.bind(this))}Pa(){return this.So}W(){return this.cn}$h(e){if(pt(this.cn,e),this.Ra(),e.mode!==void 0&&this.Ro({Cr:e.mode}),e.scaleMargins!==void 0){const i=De(e.scaleMargins.top),n=De(e.scaleMargins.bottom);if(i<0||i>1)throw new Error(`Invalid top margin - expect value between 0 and 1, given=${i}`);if(n<0||n>1)throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${n}`);if(i+n>1)throw new Error(`Invalid margins - sum of margins must be less than 1, given=${i+n}`);this.Do(),this.bo=null}}Vo(){return this.cn.autoScale}ro(){return this.cn.mode===1}Mh(){return this.cn.mode===2}Oo(){return this.cn.mode===3}Cr(){return{Wn:this.cn.autoScale,Bo:this.cn.invertScale,Cr:this.cn.mode}}Ro(e){const i=this.Cr();let n=null;e.Wn!==void 0&&(this.cn.autoScale=e.Wn),e.Cr!==void 0&&(this.cn.mode=e.Cr,e.Cr!==2&&e.Cr!==3||(this.cn.autoScale=!0),this.oo._o=!1),i.Cr===1&&e.Cr!==i.Cr&&(function(r,l){if(r===null)return!1;const c=Jn(r.Ph(),l),o=Jn(r.Rh(),l);return isFinite(c)&&isFinite(o)}(this.Ih,this.xo)?(n=rr(this.Ih,this.xo),n!==null&&this.Ao(n)):this.cn.autoScale=!0),e.Cr===1&&e.Cr!==i.Cr&&(n=$n(this.Ih,this.xo),n!==null&&this.Ao(n));const s=i.Cr!==this.cn.mode;s&&(i.Cr===2||this.Mh())&&this.Ra(),s&&(i.Cr===3||this.Oo())&&this.Ra(),e.Bo!==void 0&&i.Bo!==e.Bo&&(this.cn.invertScale=e.Bo,this.Io()),this.vo.m(i,this.Cr())}zo(){return this.vo}P(){return this.ko.fontSize}At(){return this.ho}Lo(e){this.ho!==e&&(this.ho=e,this.Do(),this.bo=null)}Eo(){if(this.lo)return this.lo;const e=this.At()-this.No()-this.Fo();return this.lo=e,e}Lh(){return this.Wo(),this.Ih}Ao(e,i){const n=this.Ih;(i||n===null&&e!==null||n!==null&&!n.Ch(e))&&(this.bo=null,this.Ih=e)}Ni(){return this.Wo(),this.ho===0||!this.Ih||this.Ih.Ni()}jo(e){return this.Bo()?e:this.At()-1-e}Rt(e,i){return this.Mh()?e=Ji(e,i):this.Oo()&&(e=Gn(e,i)),this.Po(e,i)}te(e,i,n){this.Wo();const s=this.Fo(),r=E(this.Lh()),l=r.Ph(),c=r.Rh(),o=this.Eo()-1,u=this.Bo(),h=o/(c-l),d=n===void 0?0:n.from,f=n===void 0?e.length:n.to,m=this.Ho();for(let g=d;g<f;g++){const p=e[g],w=p._t;if(isNaN(w))continue;let v=w;m!==null&&(v=m(p._t,i));const x=s+h*(v-l),y=u?x:this.ho-1-x;p.st=y}}be(e,i,n){this.Wo();const s=this.Fo(),r=E(this.Lh()),l=r.Ph(),c=r.Rh(),o=this.Eo()-1,u=this.Bo(),h=o/(c-l),d=n===void 0?0:n.from,f=n===void 0?e.length:n.to,m=this.Ho();for(let g=d;g<f;g++){const p=e[g];let w=p.ge,v=p.Me,x=p.xe,y=p.Se;m!==null&&(w=m(p.ge,i),v=m(p.Me,i),x=m(p.xe,i),y=m(p.Se,i));let b=s+h*(w-l),j=u?b:this.ho-1-b;p.pe=j,b=s+h*(v-l),j=u?b:this.ho-1-b,p.de=j,b=s+h*(x-l),j=u?b:this.ho-1-b,p.fe=j,b=s+h*(y-l),j=u?b:this.ho-1-b,p.me=j}}pn(e,i){const n=this.To(e,i);return this.$o(n,i)}$o(e,i){let n=e;return this.Mh()?n=function(s,r){return r<0&&(s=-s),s/100*r+r}(n,i):this.Oo()&&(n=function(s,r){return s-=100,r<0&&(s=-s),s/100*r+r}(n,i)),n}Ba(){return this.po}Uo(){if(this.mo)return this.mo;let e=[];for(let i=0;i<this.po.length;i++){const n=this.po[i];n.Xi()===null&&n.Ki(i+1),e.push(n)}return e=$m(e),this.mo=e,this.mo}qo(e){this.po.indexOf(e)===-1&&(this.po.push(e),this.Ra(),this.Yo())}Zo(e){const i=this.po.indexOf(e);if(i===-1)throw new Error("source is not attached to scale");this.po.splice(i,1),this.po.length===0&&(this.Ro({Wn:!0}),this.Ao(null)),this.Ra(),this.Yo()}Ct(){let e=null;for(const i of this.po){const n=i.Ct();n!==null&&(e===null||n.la<e.la)&&(e=n)}return e===null?null:e.Vt}Bo(){return this.cn.invertScale}Ha(){const e=this.Ct()===null;if(this.bo!==null&&(e||this.bo.Xo===e))return this.bo.Ha;this.Co.io();const i=this.Co.Ha();return this.bo={Ha:i,Xo:e},this.fo.m(),i}Ko(){return this.fo}Go(e){this.Mh()||this.Oo()||this.wo===null&&this.ao===null&&(this.Ni()||(this.wo=this.ho-e,this.ao=E(this.Lh()).Th()))}Jo(e){if(this.Mh()||this.Oo()||this.wo===null)return;this.Ro({Wn:!1}),(e=this.ho-e)<0&&(e=0);let i=(this.wo+.2*(this.ho-1))/(e+.2*(this.ho-1));const n=E(this.ao).Th();i=Math.max(i,.1),n.Vh(i),this.Ao(n)}Qo(){this.Mh()||this.Oo()||(this.wo=null,this.ao=null)}t_(e){this.Vo()||this.Mo===null&&this.ao===null&&(this.Ni()||(this.Mo=e,this.ao=E(this.Lh()).Th()))}i_(e){if(this.Vo()||this.Mo===null)return;const i=E(this.Lh()).Dh()/(this.Eo()-1);let n=e-this.Mo;this.Bo()&&(n*=-1);const s=n*i,r=E(this.ao).Th();r.Oh(s),this.Ao(r,!0),this.bo=null}n_(){this.Vo()||this.Mo!==null&&(this.Mo=null,this.ao=null)}ba(){return this.wa||this.Ra(),this.wa}Fi(e,i){switch(this.cn.mode){case 2:return this.s_(Ji(e,i));case 3:return this.ba().format(Gn(e,i));default:return this.Wh(e)}}eo(e){switch(this.cn.mode){case 2:return this.s_(e);case 3:return this.ba().format(e);default:return this.Wh(e)}}Yl(e){return this.Wh(e,E(this.e_()).ba())}Zl(e,i){return e=Ji(e,i),this.s_(e,Jh)}r_(){return this.po}h_(e){this.oo={uo:e,_o:!1}}Vn(){this.po.forEach(e=>e.Vn())}Ra(){this.bo=null;const e=this.e_();let i=100;e!==null&&(i=Math.round(1/e.ma())),this.wa=Zh,this.Mh()?(this.wa=Jh,i=100):this.Oo()?(this.wa=new Ml(100,1),i=100):e!==null&&(this.wa=e.ba()),this.Co=new Yh(this,i,this.To.bind(this),this.Po.bind(this)),this.Co.io()}Yo(){this.mo=null}e_(){return this.po[0]||null}No(){return this.Bo()?this.cn.scaleMargins.bottom*this.At()+this.do:this.cn.scaleMargins.top*this.At()+this.co}Fo(){return this.Bo()?this.cn.scaleMargins.top*this.At()+this.co:this.cn.scaleMargins.bottom*this.At()+this.do}Wo(){this.oo._o||(this.oo._o=!0,this.l_())}Do(){this.lo=null}Po(e,i){if(this.Wo(),this.Ni())return 0;e=this.ro()&&e?rl(e,this.xo):e;const n=E(this.Lh()),s=this.Fo()+(this.Eo()-1)*(e-n.Ph())/n.Dh();return this.jo(s)}To(e,i){if(this.Wo(),this.Ni())return 0;const n=this.jo(e),s=E(this.Lh()),r=s.Ph()+s.Dh()*((n-this.Fo())/(this.Eo()-1));return this.ro()?Jn(r,this.xo):r}Io(){this.bo=null,this.Co.io()}l_(){const e=this.oo.uo;if(e===null)return;let i=null;const n=this.r_();let s=0,r=0;for(const o of n){if(!o.yt())continue;const u=o.Ct();if(u===null)continue;const h=o.Il(e.Os(),e.ui());let d=h&&h.Lh();if(d!==null){switch(this.cn.mode){case 1:d=$n(d,this.xo);break;case 2:d=o2(d,u.Vt);break;case 3:d=c2(d,u.Vt)}if(i=i===null?d:i.ts(E(d)),h!==null){const f=h.Eh();f!==null&&(s=Math.max(s,f.above),r=Math.max(r,f.below))}}}if(s===this.co&&r===this.do||(this.co=s,this.do=r,this.bo=null,this.Do()),i!==null){if(i.Ph()===i.Rh()){const o=this.e_(),u=5*(o===null||this.Mh()||this.Oo()?1:o.ma());this.ro()&&(i=rr(i,this.xo)),i=new We(i.Ph()-u,i.Rh()+u),this.ro()&&(i=$n(i,this.xo))}if(this.ro()){const o=rr(i,this.xo),u=fa(o);if(l=u,c=this.xo,l.$a!==c.$a||l.Ua!==c.Ua){const h=this.ao!==null?rr(this.ao,this.xo):null;this.xo=u,i=$n(o,u),h!==null&&(this.ao=$n(h,u))}}this.Ao(i)}else this.Ih===null&&(this.Ao(new We(-.5,.5)),this.xo=fa(null));var l,c;this.oo._o=!0}Ho(){return this.Mh()?Ji:this.Oo()?Gn:this.ro()?e=>rl(e,this.xo):null}a_(e,i,n){return i===void 0?(n===void 0&&(n=this.ba()),n.format(e)):i(e)}Wh(e,i){return this.a_(e,this.yo.priceFormatter,i)}s_(e,i){return this.a_(e,this.yo.percentageFormatter,i)}}class h2{constructor(e,i){this.po=[],this.o_=new Map,this.ho=0,this.__=0,this.u_=1e3,this.mo=null,this.c_=new pe,this.yl=e,this.$i=i,this.d_=new a2(this);const n=i.W();this.f_=this.v_("left",n.leftPriceScale),this.p_=this.v_("right",n.rightPriceScale),this.f_.zo().l(this.m_.bind(this,this.f_),this),this.p_.zo().l(this.m_.bind(this,this.p_),this),this.b_(n)}b_(e){if(e.leftPriceScale&&this.f_.$h(e.leftPriceScale),e.rightPriceScale&&this.p_.$h(e.rightPriceScale),e.localization&&(this.f_.Ra(),this.p_.Ra()),e.overlayPriceScales){const i=Array.from(this.o_.values());for(const n of i){const s=E(n[0].Dt());s.$h(e.overlayPriceScales),e.localization&&s.Ra()}}}w_(e){switch(e){case"left":return this.f_;case"right":return this.p_}return this.o_.has(e)?De(this.o_.get(e))[0].Dt():null}S(){this.$t().g_().p(this),this.f_.zo().p(this),this.p_.zo().p(this),this.po.forEach(e=>{e.S&&e.S()}),this.c_.m()}M_(){return this.u_}x_(e){this.u_=e}$t(){return this.$i}Hi(){return this.__}At(){return this.ho}S_(e){this.__=e,this.k_()}Lo(e){this.ho=e,this.f_.Lo(e),this.p_.Lo(e),this.po.forEach(i=>{if(this.vr(i)){const n=i.Dt();n!==null&&n.Lo(e)}}),this.k_()}Ba(){return this.po}vr(e){const i=e.Dt();return i===null||this.f_!==i&&this.p_!==i}qo(e,i,n){const s=n!==void 0?n:this.C_().y_+1;this.T_(e,i,s)}Zo(e){const i=this.po.indexOf(e);ri(i!==-1,"removeDataSource: invalid data source"),this.po.splice(i,1);const n=E(e.Dt()).Pa();if(this.o_.has(n)){const r=De(this.o_.get(n)),l=r.indexOf(e);l!==-1&&(r.splice(l,1),r.length===0&&this.o_.delete(n))}const s=e.Dt();s&&s.Ba().indexOf(e)>=0&&s.Zo(e),s!==null&&(s.Yo(),this.P_(s)),this.mo=null}mr(e){return e===this.f_?"left":e===this.p_?"right":"overlay"}R_(){return this.f_}D_(){return this.p_}V_(e,i){e.Go(i)}O_(e,i){e.Jo(i),this.k_()}B_(e){e.Qo()}A_(e,i){e.t_(i)}I_(e,i){e.i_(i),this.k_()}z_(e){e.n_()}k_(){this.po.forEach(e=>{e.Vn()})}vn(){let e=null;return this.$i.W().rightPriceScale.visible&&this.p_.Ba().length!==0?e=this.p_:this.$i.W().leftPriceScale.visible&&this.f_.Ba().length!==0?e=this.f_:this.po.length!==0&&(e=this.po[0].Dt()),e===null&&(e=this.p_),e}pr(){let e=null;return this.$i.W().rightPriceScale.visible?e=this.p_:this.$i.W().leftPriceScale.visible&&(e=this.f_),e}P_(e){e!==null&&e.Vo()&&this.L_(e)}E_(e){const i=this.yl.Xs();e.Ro({Wn:!0}),i!==null&&e.h_(i),this.k_()}N_(){this.L_(this.f_),this.L_(this.p_)}F_(){this.P_(this.f_),this.P_(this.p_),this.po.forEach(e=>{this.vr(e)&&this.P_(e.Dt())}),this.k_(),this.$i.Uh()}Uo(){return this.mo===null&&(this.mo=$m(this.po)),this.mo}W_(){return this.c_}j_(){return this.d_}L_(e){const i=e.r_();if(i&&i.length>0&&!this.yl.Ni()){const n=this.yl.Xs();n!==null&&e.h_(n)}e.Vn()}C_(){const e=this.Uo();if(e.length===0)return{H_:0,y_:0};let i=0,n=0;for(let s=0;s<e.length;s++){const r=e[s].Xi();r!==null&&(r<i&&(i=r),r>n&&(n=r))}return{H_:i,y_:n}}T_(e,i,n){let s=this.w_(i);if(s===null&&(s=this.v_(i,this.$i.W().overlayPriceScales)),this.po.push(e),!zl(i)){const r=this.o_.get(i)||[];r.push(e),this.o_.set(i,r)}s.qo(e),e.Gi(s),e.Ki(n),this.P_(s),this.mo=null}m_(e,i,n){i.Cr!==n.Cr&&this.L_(e)}v_(e,i){const n=Object.assign({visible:!0,autoScale:!0},zt(i)),s=new u2(e,n,this.$i.W().layout,this.$i.W().localization);return s.Lo(this.At()),s}}class d2{constructor(e,i,n=50){this.Ke=0,this.Ge=1,this.Je=1,this.tr=new Map,this.Qe=new Map,this.U_=e,this.q_=i,this.ir=n}Y_(e){const i=e.time,n=this.q_.cacheKey(i),s=this.tr.get(n);if(s!==void 0)return s.Z_;if(this.Ke===this.ir){const l=this.Qe.get(this.Je);this.Qe.delete(this.Je),this.tr.delete(De(l)),this.Je++,this.Ke--}const r=this.U_(e);return this.tr.set(n,{Z_:r,rr:this.Ge}),this.Qe.set(this.Ge,n),this.Ke++,this.Ge++,r}}class Zn{constructor(e,i){ri(e<=i,"right should be >= left"),this.X_=e,this.K_=i}Os(){return this.X_}ui(){return this.K_}G_(){return this.K_-this.X_+1}Kr(e){return this.X_<=e&&e<=this.K_}Ch(e){return this.X_===e.Os()&&this.K_===e.ui()}}function ed(t,e){return t===null||e===null?t===e:t.Ch(e)}class f2{constructor(){this.J_=new Map,this.tr=null,this.Q_=!1}tu(e){this.Q_=e,this.tr=null}iu(e,i){this.nu(i),this.tr=null;for(let n=i;n<e.length;++n){const s=e[n];let r=this.J_.get(s.timeWeight);r===void 0&&(r=[],this.J_.set(s.timeWeight,r)),r.push({index:n,time:s.time,weight:s.timeWeight,originalTime:s.originalTime})}}su(e,i){const n=Math.ceil(i/e);return this.tr!==null&&this.tr.eu===n||(this.tr={Ha:this.ru(n),eu:n}),this.tr.Ha}nu(e){if(e===0)return void this.J_.clear();const i=[];this.J_.forEach((n,s)=>{e<=n[0].index?i.push(s):n.splice(Rs(n,e,r=>r.index<e),1/0)});for(const n of i)this.J_.delete(n)}ru(e){let i=[];for(const n of Array.from(this.J_.keys()).sort((s,r)=>r-s)){if(!this.J_.get(n))continue;const s=i;i=[];const r=s.length;let l=0;const c=De(this.J_.get(n)),o=c.length;let u=1/0,h=-1/0;for(let d=0;d<o;d++){const f=c[d],m=f.index;for(;l<r;){const g=s[l],p=g.index;if(!(p<m)){u=p;break}l++,i.push(g),h=p,u=1/0}if(u-m>=e&&m-h>=e)i.push(f),h=m;else if(this.Q_)return s}for(;l<r;l++)i.push(s[l])}return i}}class an{constructor(e){this.hu=e}lu(){return this.hu===null?null:new Zn(Math.floor(this.hu.Os()),Math.ceil(this.hu.ui()))}au(){return this.hu}static ou(){return new an(null)}}function p2(t,e){return t.weight>e.weight?t:e}class m2{constructor(e,i,n,s){this.__=0,this._u=null,this.uu=[],this.Mo=null,this.wo=null,this.cu=new f2,this.du=new Map,this.fu=an.ou(),this.vu=!0,this.pu=new pe,this.mu=new pe,this.bu=new pe,this.wu=null,this.gu=null,this.Mu=[],this.cn=i,this.yo=n,this.xu=i.rightOffset,this.Su=i.barSpacing,this.$i=e,this.q_=s,this.ku(),this.cu.tu(i.uniformDistribution)}W(){return this.cn}yu(e){pt(this.yo,e),this.Cu(),this.ku()}$h(e,i){var n;pt(this.cn,e),this.cn.fixLeftEdge&&this.Tu(),this.cn.fixRightEdge&&this.Pu(),e.barSpacing!==void 0&&this.$i.Gn(e.barSpacing),e.rightOffset!==void 0&&this.$i.Jn(e.rightOffset),e.minBarSpacing!==void 0&&this.$i.Gn((n=e.barSpacing)!==null&&n!==void 0?n:this.Su),this.Cu(),this.ku(),this.bu.m()}mn(e){var i,n;return(n=(i=this.uu[e])===null||i===void 0?void 0:i.time)!==null&&n!==void 0?n:null}Ui(e){var i;return(i=this.uu[e])!==null&&i!==void 0?i:null}Va(e,i){if(this.uu.length<1)return null;if(this.q_.key(e)>this.q_.key(this.uu[this.uu.length-1].time))return i?this.uu.length-1:null;const n=Rs(this.uu,this.q_.key(e),(s,r)=>this.q_.key(s.time)<r);return this.q_.key(e)<this.q_.key(this.uu[n].time)?i?n:null:n}Ni(){return this.__===0||this.uu.length===0||this._u===null}Da(){return this.uu.length>0}Xs(){return this.Ru(),this.fu.lu()}Du(){return this.Ru(),this.fu.au()}Vu(){const e=this.Xs();if(e===null)return null;const i={from:e.Os(),to:e.ui()};return this.Ou(i)}Ou(e){const i=Math.round(e.from),n=Math.round(e.to),s=E(this.Bu()),r=E(this.Au());return{from:E(this.Ui(Math.max(s,i))),to:E(this.Ui(Math.min(r,n)))}}Iu(e){return{from:E(this.Va(e.from,!0)),to:E(this.Va(e.to,!0))}}Hi(){return this.__}S_(e){if(!isFinite(e)||e<=0||this.__===e)return;const i=this.Du(),n=this.__;if(this.__=e,this.vu=!0,this.cn.lockVisibleTimeRangeOnResize&&n!==0){const s=this.Su*e/n;this.Su=s}if(this.cn.fixLeftEdge&&i!==null&&i.Os()<=0){const s=n-e;this.xu-=Math.round(s/this.Su)+1,this.vu=!0}this.zu(),this.Lu()}It(e){if(this.Ni()||!bs(e))return 0;const i=this.Eu()+this.xu-e;return this.__-(i+.5)*this.Su-1}Qs(e,i){const n=this.Eu(),s=i===void 0?0:i.from,r=i===void 0?e.length:i.to;for(let l=s;l<r;l++){const c=e[l].ot,o=n+this.xu-c,u=this.__-(o+.5)*this.Su-1;e[l].nt=u}}Nu(e){return Math.ceil(this.Fu(e))}Jn(e){this.vu=!0,this.xu=e,this.Lu(),this.$i.Wu(),this.$i.Uh()}le(){return this.Su}Gn(e){this.ju(e),this.Lu(),this.$i.Wu(),this.$i.Uh()}Hu(){return this.xu}Ha(){if(this.Ni())return null;if(this.gu!==null)return this.gu;const e=this.Su,i=5*(this.$i.W().layout.fontSize+4)/8*(this.cn.tickMarkMaxCharacterLength||8),n=Math.round(i/e),s=E(this.Xs()),r=Math.max(s.Os(),s.Os()-n),l=Math.max(s.ui(),s.ui()-n),c=this.cu.su(e,i),o=this.Bu()+n,u=this.Au()-n,h=this.$u(),d=this.cn.fixLeftEdge||h,f=this.cn.fixRightEdge||h;let m=0;for(const g of c){if(!(r<=g.index&&g.index<=l))continue;let p;m<this.Mu.length?(p=this.Mu[m],p.coord=this.It(g.index),p.label=this.Uu(g),p.weight=g.weight):(p={needAlignCoordinate:!1,coord:this.It(g.index),label:this.Uu(g),weight:g.weight},this.Mu.push(p)),this.Su>i/2&&!h?p.needAlignCoordinate=!1:p.needAlignCoordinate=d&&g.index<=o||f&&g.index>=u,m++}return this.Mu.length=m,this.gu=this.Mu,this.Mu}qu(){this.vu=!0,this.Gn(this.cn.barSpacing),this.Jn(this.cn.rightOffset)}Yu(e){this.vu=!0,this._u=e,this.Lu(),this.Tu()}Zu(e,i){const n=this.Fu(e),s=this.le(),r=s+i*(s/10);this.Gn(r),this.cn.rightBarStaysOnScroll||this.Jn(this.Hu()+(n-this.Fu(e)))}Go(e){this.Mo&&this.n_(),this.wo===null&&this.wu===null&&(this.Ni()||(this.wo=e,this.Xu()))}Jo(e){if(this.wu===null)return;const i=Eo(this.__-e,0,this.__),n=Eo(this.__-E(this.wo),0,this.__);i!==0&&n!==0&&this.Gn(this.wu.le*i/n)}Qo(){this.wo!==null&&(this.wo=null,this.Ku())}t_(e){this.Mo===null&&this.wu===null&&(this.Ni()||(this.Mo=e,this.Xu()))}i_(e){if(this.Mo===null)return;const i=(this.Mo-e)/this.le();this.xu=E(this.wu).Hu+i,this.vu=!0,this.Lu()}n_(){this.Mo!==null&&(this.Mo=null,this.Ku())}Gu(){this.Ju(this.cn.rightOffset)}Ju(e,i=400){if(!isFinite(e))throw new RangeError("offset is required and must be finite number");if(!isFinite(i)||i<=0)throw new RangeError("animationDuration (optional) must be finite positive number");const n=this.xu,s=performance.now();this.$i.Zn({Qu:r=>(r-s)/i>=1,tc:r=>{const l=(r-s)/i;return l>=1?e:n+(e-n)*l}})}bt(e,i){this.vu=!0,this.uu=e,this.cu.iu(e,i),this.Lu()}nc(){return this.pu}sc(){return this.mu}ec(){return this.bu}Eu(){return this._u||0}rc(e){const i=e.G_();this.ju(this.__/i),this.xu=e.ui()-this.Eu(),this.Lu(),this.vu=!0,this.$i.Wu(),this.$i.Uh()}hc(){const e=this.Bu(),i=this.Au();e!==null&&i!==null&&this.rc(new Zn(e,i+this.cn.rightOffset))}lc(e){const i=new Zn(e.from,e.to);this.rc(i)}qi(e){return this.yo.timeFormatter!==void 0?this.yo.timeFormatter(e.originalTime):this.q_.formatHorzItem(e.time)}$u(){const{handleScroll:e,handleScale:i}=this.$i.W();return!(e.horzTouchDrag||e.mouseWheel||e.pressedMouseMove||e.vertTouchDrag||i.axisDoubleClickReset.time||i.axisPressedMouseMove.time||i.mouseWheel||i.pinch)}Bu(){return this.uu.length===0?null:0}Au(){return this.uu.length===0?null:this.uu.length-1}ac(e){return(this.__-1-e)/this.Su}Fu(e){const i=this.ac(e),n=this.Eu()+this.xu-i;return Math.round(1e6*n)/1e6}ju(e){const i=this.Su;this.Su=e,this.zu(),i!==this.Su&&(this.vu=!0,this.oc())}Ru(){if(!this.vu)return;if(this.vu=!1,this.Ni())return void this._c(an.ou());const e=this.Eu(),i=this.__/this.Su,n=this.xu+e,s=new Zn(n-i+1,n);this._c(new an(s))}zu(){const e=this.uc();if(this.Su<e&&(this.Su=e,this.vu=!0),this.__!==0){const i=.5*this.__;this.Su>i&&(this.Su=i,this.vu=!0)}}uc(){return this.cn.fixLeftEdge&&this.cn.fixRightEdge&&this.uu.length!==0?this.__/this.uu.length:this.cn.minBarSpacing}Lu(){const e=this.cc();e!==null&&this.xu<e&&(this.xu=e,this.vu=!0);const i=this.dc();this.xu>i&&(this.xu=i,this.vu=!0)}cc(){const e=this.Bu(),i=this._u;return e===null||i===null?null:e-i-1+(this.cn.fixLeftEdge?this.__/this.Su:Math.min(2,this.uu.length))}dc(){return this.cn.fixRightEdge?0:this.__/this.Su-Math.min(2,this.uu.length)}Xu(){this.wu={le:this.le(),Hu:this.Hu()}}Ku(){this.wu=null}Uu(e){let i=this.du.get(e.weight);return i===void 0&&(i=new d2(n=>this.fc(n),this.q_),this.du.set(e.weight,i)),i.Y_(e)}fc(e){return this.q_.formatTickmark(e,this.yo)}_c(e){const i=this.fu;this.fu=e,ed(i.lu(),this.fu.lu())||this.pu.m(),ed(i.au(),this.fu.au())||this.mu.m(),this.oc()}oc(){this.gu=null}Cu(){this.oc(),this.du.clear()}ku(){this.q_.updateFormatter(this.yo)}Tu(){if(!this.cn.fixLeftEdge)return;const e=this.Bu();if(e===null)return;const i=this.Xs();if(i===null)return;const n=i.Os()-e;if(n<0){const s=this.xu-n-1;this.Jn(s)}this.zu()}Pu(){this.Lu(),this.zu()}}class g2{X(e,i,n){e.useMediaCoordinateSpace(s=>this.K(s,i,n))}gl(e,i,n){e.useMediaCoordinateSpace(s=>this.vc(s,i,n))}vc(e,i,n){}}class v2 extends g2{constructor(e){super(),this.mc=new Map,this.zt=e}K(e){}vc(e){if(!this.zt.yt)return;const{context:i,mediaSize:n}=e;let s=0;for(const l of this.zt.bc){if(l.Kt.length===0)continue;i.font=l.R;const c=this.wc(i,l.Kt);c>n.width?l.Zu=n.width/c:l.Zu=1,s+=l.gc*l.Zu}let r=0;switch(this.zt.Mc){case"top":r=0;break;case"center":r=Math.max((n.height-s)/2,0);break;case"bottom":r=Math.max(n.height-s,0)}i.fillStyle=this.zt.V;for(const l of this.zt.bc){i.save();let c=0;switch(this.zt.xc){case"left":i.textAlign="left",c=l.gc/2;break;case"center":i.textAlign="center",c=n.width/2;break;case"right":i.textAlign="right",c=n.width-1-l.gc/2}i.translate(c,r),i.textBaseline="top",i.font=l.R,i.scale(l.Zu,l.Zu),i.fillText(l.Kt,0,l.Sc),i.restore(),r+=l.gc*l.Zu}}wc(e,i){const n=this.kc(e.font);let s=n.get(i);return s===void 0&&(s=e.measureText(i).width,n.set(i,s)),s}kc(e){let i=this.mc.get(e);return i===void 0&&(i=new Map,this.mc.set(e,i)),i}}class x2{constructor(e){this.ft=!0,this.Ft={yt:!1,V:"",bc:[],Mc:"center",xc:"center"},this.Wt=new v2(this.Ft),this.jt=e}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt}Mt(){const e=this.jt.W(),i=this.Ft;i.yt=e.visible,i.yt&&(i.V=e.color,i.xc=e.horzAlign,i.Mc=e.vertAlign,i.bc=[{Kt:e.text,R:gn(e.fontSize,e.fontFamily,e.fontStyle),gc:1.2*e.fontSize,Sc:0,Zu:0}])}}class y2 extends Uc{constructor(e,i){super(),this.cn=i,this.wn=new x2(this)}Rn(){return[]}Pn(){return[this.wn]}W(){return this.cn}Vn(){this.wn.bt()}}var td,id,nd,sd,rd;(function(t){t[t.OnTouchEnd=0]="OnTouchEnd",t[t.OnNextTap=1]="OnNextTap"})(td||(td={}));class w2{constructor(e,i,n){this.yc=[],this.Cc=[],this.__=0,this.Tc=null,this.Pc=new pe,this.Rc=new pe,this.Dc=null,this.Vc=e,this.cn=i,this.q_=n,this.Oc=new J1(this),this.yl=new m2(this,i.timeScale,this.cn.localization,n),this.vt=new cy(this,i.crosshair),this.Bc=new s2(i.crosshair),this.Ac=new y2(this,i.watermark),this.Ic(),this.yc[0].x_(2e3),this.zc=this.Lc(0),this.Ec=this.Lc(1)}Kl(){this.Nc(Ne.es())}Uh(){this.Nc(Ne.ss())}oa(){this.Nc(new Ne(1))}Gl(e){const i=this.Fc(e);this.Nc(i)}Wc(){return this.Tc}jc(e){const i=this.Tc;this.Tc=e,i!==null&&this.Gl(i.Hc),e!==null&&this.Gl(e.Hc)}W(){return this.cn}$h(e){pt(this.cn,e),this.yc.forEach(i=>i.b_(e)),e.timeScale!==void 0&&this.yl.$h(e.timeScale),e.localization!==void 0&&this.yl.yu(e.localization),(e.leftPriceScale||e.rightPriceScale)&&this.Pc.m(),this.zc=this.Lc(0),this.Ec=this.Lc(1),this.Kl()}$c(e,i){if(e==="left")return void this.$h({leftPriceScale:i});if(e==="right")return void this.$h({rightPriceScale:i});const n=this.Uc(e);n!==null&&(n.Dt.$h(i),this.Pc.m())}Uc(e){for(const i of this.yc){const n=i.w_(e);if(n!==null)return{Ht:i,Dt:n}}return null}St(){return this.yl}qc(){return this.yc}Yc(){return this.Ac}Zc(){return this.vt}Xc(){return this.Rc}Kc(e,i){e.Lo(i),this.Wu()}S_(e){this.__=e,this.yl.S_(this.__),this.yc.forEach(i=>i.S_(e)),this.Wu()}Ic(e){const i=new h2(this.yl,this);e!==void 0?this.yc.splice(e,0,i):this.yc.push(i);const n=e===void 0?this.yc.length-1:e,s=Ne.es();return s.Nn(n,{Fn:0,Wn:!0}),this.Nc(s),i}V_(e,i,n){e.V_(i,n)}O_(e,i,n){e.O_(i,n),this.Jl(),this.Nc(this.Gc(e,2))}B_(e,i){e.B_(i),this.Nc(this.Gc(e,2))}A_(e,i,n){i.Vo()||e.A_(i,n)}I_(e,i,n){i.Vo()||(e.I_(i,n),this.Jl(),this.Nc(this.Gc(e,2)))}z_(e,i){i.Vo()||(e.z_(i),this.Nc(this.Gc(e,2)))}E_(e,i){e.E_(i),this.Nc(this.Gc(e,2))}Jc(e){this.yl.Go(e)}Qc(e,i){const n=this.St();if(n.Ni()||i===0)return;const s=n.Hi();e=Math.max(1,Math.min(e,s)),n.Zu(e,i),this.Wu()}td(e){this.nd(0),this.sd(e),this.ed()}rd(e){this.yl.Jo(e),this.Wu()}hd(){this.yl.Qo(),this.Uh()}nd(e){this.yl.t_(e)}sd(e){this.yl.i_(e),this.Wu()}ed(){this.yl.n_(),this.Uh()}wt(){return this.Cc}ld(e,i,n,s,r){this.vt.gn(e,i);let l=NaN,c=this.yl.Nu(e);const o=this.yl.Xs();o!==null&&(c=Math.min(Math.max(o.Os(),c),o.ui()));const u=s.vn(),h=u.Ct();h!==null&&(l=u.pn(i,h)),l=this.Bc.Oa(l,c,s),this.vt.kn(c,l,s),this.oa(),r||this.Rc.m(this.vt.xt(),{x:e,y:i},n)}ad(e,i,n){const s=n.vn(),r=s.Ct(),l=s.Rt(e,E(r)),c=this.yl.Va(i,!0),o=this.yl.It(E(c));this.ld(o,l,null,n,!0)}od(e){this.Zc().Cn(),this.oa(),e||this.Rc.m(null,null,null)}Jl(){const e=this.vt.Ht();if(e!==null){const i=this.vt.xn(),n=this.vt.Sn();this.ld(i,n,null,e)}this.vt.Vn()}_d(e,i,n){const s=this.yl.mn(0);i!==void 0&&n!==void 0&&this.yl.bt(i,n);const r=this.yl.mn(0),l=this.yl.Eu(),c=this.yl.Xs();if(c!==null&&s!==null&&r!==null){const o=c.Kr(l),u=this.q_.key(s)>this.q_.key(r),h=e!==null&&e>l&&!u,d=this.yl.W().allowShiftVisibleRangeOnWhitespaceReplacement,f=o&&(n!==void 0||d)&&this.yl.W().shiftVisibleRangeOnNewBar;if(h&&!f){const m=e-l;this.yl.Jn(this.yl.Hu()-m)}}this.yl.Yu(e)}ia(e){e!==null&&e.F_()}dr(e){const i=this.yc.find(n=>n.Uo().includes(e));return i===void 0?null:i}Wu(){this.Ac.Vn(),this.yc.forEach(e=>e.F_()),this.Jl()}S(){this.yc.forEach(e=>e.S()),this.yc.length=0,this.cn.localization.priceFormatter=void 0,this.cn.localization.percentageFormatter=void 0,this.cn.localization.timeFormatter=void 0}ud(){return this.Oc}br(){return this.Oc.W()}g_(){return this.Pc}dd(e,i,n){const s=this.yc[0],r=this.fd(i,e,s,n);return this.Cc.push(r),this.Cc.length===1?this.Kl():this.Uh(),r}vd(e){const i=this.dr(e),n=this.Cc.indexOf(e);ri(n!==-1,"Series not found"),this.Cc.splice(n,1),E(i).Zo(e),e.S&&e.S()}Xl(e,i){const n=E(this.dr(e));n.Zo(e);const s=this.Uc(i);if(s===null){const r=e.Xi();n.qo(e,i,r)}else{const r=s.Ht===n?e.Xi():void 0;s.Ht.qo(e,i,r)}}hc(){const e=Ne.ss();e.$n(),this.Nc(e)}pd(e){const i=Ne.ss();i.Yn(e),this.Nc(i)}Kn(){const e=Ne.ss();e.Kn(),this.Nc(e)}Gn(e){const i=Ne.ss();i.Gn(e),this.Nc(i)}Jn(e){const i=Ne.ss();i.Jn(e),this.Nc(i)}Zn(e){const i=Ne.ss();i.Zn(e),this.Nc(i)}Un(){const e=Ne.ss();e.Un(),this.Nc(e)}md(){return this.cn.rightPriceScale.visible?"right":"left"}bd(){return this.Ec}q(){return this.zc}Bt(e){const i=this.Ec,n=this.zc;if(i===n)return i;if(e=Math.max(0,Math.min(100,Math.round(100*e))),this.Dc===null||this.Dc.Ps!==n||this.Dc.Rs!==i)this.Dc={Ps:n,Rs:i,wd:new Map};else{const r=this.Dc.wd.get(e);if(r!==void 0)return r}const s=function(r,l,c){const[o,u,h,d]=ws(r),[f,m,g,p]=ws(l),w=[et(o+c*(f-o)),et(u+c*(m-u)),et(h+c*(g-h)),vm(d+c*(p-d))];return`rgba(${w[0]}, ${w[1]}, ${w[2]}, ${w[3]})`}(n,i,e/100);return this.Dc.wd.set(e,s),s}Gc(e,i){const n=new Ne(i);if(e!==null){const s=this.yc.indexOf(e);n.Nn(s,{Fn:i})}return n}Fc(e,i){return i===void 0&&(i=2),this.Gc(this.dr(e),i)}Nc(e){this.Vc&&this.Vc(e),this.yc.forEach(i=>i.j_().qh().bt())}fd(e,i,n,s){const r=new Kc(this,e,i,n,s),l=e.priceScaleId!==void 0?e.priceScaleId:this.md();return n.qo(r,l),zl(l)||r.$h(e),r}Lc(e){const i=this.cn.layout;return i.background.type==="gradient"?e===0?i.background.topColor:i.background.bottomColor:i.background.color}}function zo(t){return!wt(t)&&!Ls(t)}function Dm(t){return wt(t)}(function(t){t[t.Disabled=0]="Disabled",t[t.Continuous=1]="Continuous",t[t.OnDataUpdate=2]="OnDataUpdate"})(id||(id={})),function(t){t[t.LastBar=0]="LastBar",t[t.LastVisible=1]="LastVisible"}(nd||(nd={})),function(t){t.Solid="solid",t.VerticalGradient="gradient"}(sd||(sd={})),function(t){t[t.Year=0]="Year",t[t.Month=1]="Month",t[t.DayOfMonth=2]="DayOfMonth",t[t.Time=3]="Time",t[t.TimeWithSeconds=4]="TimeWithSeconds"}(rd||(rd={}));const ld=t=>t.getUTCFullYear();function b2(t,e,i){return e.replace(/yyyy/g,(n=>Mt(ld(n),4))(t)).replace(/yy/g,(n=>Mt(ld(n)%100,2))(t)).replace(/MMMM/g,((n,s)=>new Date(n.getUTCFullYear(),n.getUTCMonth(),1).toLocaleString(s,{month:"long"}))(t,i)).replace(/MMM/g,((n,s)=>new Date(n.getUTCFullYear(),n.getUTCMonth(),1).toLocaleString(s,{month:"short"}))(t,i)).replace(/MM/g,(n=>Mt((s=>s.getUTCMonth()+1)(n),2))(t)).replace(/dd/g,(n=>Mt((s=>s.getUTCDate())(n),2))(t))}class Bm{constructor(e="yyyy-MM-dd",i="default"){this.gd=e,this.Md=i}Y_(e){return b2(e,this.gd,this.Md)}}class k2{constructor(e){this.xd=e||"%h:%m:%s"}Y_(e){return this.xd.replace("%h",Mt(e.getUTCHours(),2)).replace("%m",Mt(e.getUTCMinutes(),2)).replace("%s",Mt(e.getUTCSeconds(),2))}}const j2={Sd:"yyyy-MM-dd",kd:"%h:%m:%s",yd:" ",Cd:"default"};class S2{constructor(e={}){const i=Object.assign(Object.assign({},j2),e);this.Td=new Bm(i.Sd,i.Cd),this.Pd=new k2(i.kd),this.Rd=i.yd}Y_(e){return`${this.Td.Y_(e)}${this.Rd}${this.Pd.Y_(e)}`}}function lr(t){return 60*t*60*1e3}function ma(t){return 60*t*1e3}const ar=[{Dd:(ad=1,1e3*ad),Vd:10},{Dd:ma(1),Vd:20},{Dd:ma(5),Vd:21},{Dd:ma(30),Vd:22},{Dd:lr(1),Vd:30},{Dd:lr(3),Vd:31},{Dd:lr(6),Vd:32},{Dd:lr(12),Vd:33}];var ad;function od(t,e){if(t.getUTCFullYear()!==e.getUTCFullYear())return 70;if(t.getUTCMonth()!==e.getUTCMonth())return 60;if(t.getUTCDate()!==e.getUTCDate())return 50;for(let i=ar.length-1;i>=0;--i)if(Math.floor(e.getTime()/ar[i].Dd)!==Math.floor(t.getTime()/ar[i].Dd))return ar[i].Vd;return 0}function ga(t){let e=t;if(Ls(t)&&(e=Xc(t)),!zo(e))throw new Error("time must be of type BusinessDay");const i=new Date(Date.UTC(e.year,e.month-1,e.day,0,0,0,0));return{Od:Math.round(i.getTime()/1e3),Bd:e}}function cd(t){if(!Dm(t))throw new Error("time must be of type isUTCTimestamp");return{Od:t}}function Xc(t){const e=new Date(t);if(isNaN(e.getTime()))throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);return{day:e.getUTCDate(),month:e.getUTCMonth()+1,year:e.getUTCFullYear()}}function ud(t){Ls(t.time)&&(t.time=Xc(t.time))}class hd{options(){return this.cn}setOptions(e){this.cn=e,this.updateFormatter(e.localization)}preprocessData(e){Array.isArray(e)?function(i){i.forEach(ud)}(e):ud(e)}createConverterToInternalObj(e){return E(function(i){return i.length===0?null:zo(i[0].time)||Ls(i[0].time)?ga:cd}(e))}key(e){return typeof e=="object"&&"Od"in e?e.Od:this.key(this.convertHorzItemToInternal(e))}cacheKey(e){const i=e;return i.Bd===void 0?new Date(1e3*i.Od).getTime():new Date(Date.UTC(i.Bd.year,i.Bd.month-1,i.Bd.day)).getTime()}convertHorzItemToInternal(e){return Dm(i=e)?cd(i):zo(i)?ga(i):ga(Xc(i));var i}updateFormatter(e){if(!this.cn)return;const i=e.dateFormat;this.cn.timeScale.timeVisible?this.Ad=new S2({Sd:i,kd:this.cn.timeScale.secondsVisible?"%h:%m:%s":"%h:%m",yd:"   ",Cd:e.locale}):this.Ad=new Bm(i,e.locale)}formatHorzItem(e){const i=e;return this.Ad.Y_(new Date(1e3*i.Od))}formatTickmark(e,i){const n=function(r,l,c){switch(r){case 0:case 10:return l?c?4:3:2;case 20:case 21:case 22:case 30:case 31:case 32:case 33:return l?3:2;case 50:return 2;case 60:return 1;case 70:return 0}}(e.weight,this.cn.timeScale.timeVisible,this.cn.timeScale.secondsVisible),s=this.cn.timeScale;if(s.tickMarkFormatter!==void 0){const r=s.tickMarkFormatter(e.originalTime,n,i.locale);if(r!==null)return r}return function(r,l,c){const o={};switch(l){case 0:o.year="numeric";break;case 1:o.month="short";break;case 2:o.day="numeric";break;case 3:o.hour12=!1,o.hour="2-digit",o.minute="2-digit";break;case 4:o.hour12=!1,o.hour="2-digit",o.minute="2-digit",o.second="2-digit"}const u=r.Bd===void 0?new Date(1e3*r.Od):new Date(Date.UTC(r.Bd.year,r.Bd.month-1,r.Bd.day));return new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()).toLocaleString(c,o)}(e.time,n,i.locale)}maxTickMarkWeight(e){let i=e.reduce(p2,e[0]).weight;return i>30&&i<50&&(i=30),i}fillWeightsForPoints(e,i){(function(n,s=0){if(n.length===0)return;let r=s===0?null:n[s-1].time.Od,l=r!==null?new Date(1e3*r):null,c=0;for(let o=s;o<n.length;++o){const u=n[o],h=new Date(1e3*u.time.Od);l!==null&&(u.timeWeight=od(h,l)),c+=u.time.Od-(r||u.time.Od),r=u.time.Od,l=h}if(s===0&&n.length>1){const o=Math.ceil(c/(n.length-1)),u=new Date(1e3*(n[0].time.Od-o));n[0].timeWeight=od(new Date(1e3*n[0].time.Od),u)}})(e,i)}static Id(e){return pt({localization:{dateFormat:"dd MMM 'yy"}},e??{})}}const vn=typeof window<"u";function dd(){return!!vn&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1}function va(){return!!vn&&/iPhone|iPad|iPod/.test(window.navigator.platform)}function Mo(t){return t+t%2}function xa(t,e){return t.zd-e.zd}function ya(t,e,i){const n=(t.zd-e.zd)/(t.ot-e.ot);return Math.sign(n)*Math.min(Math.abs(n),i)}class N2{constructor(e,i,n,s){this.Ld=null,this.Ed=null,this.Nd=null,this.Fd=null,this.Wd=null,this.jd=0,this.Hd=0,this.$d=e,this.Ud=i,this.qd=n,this.rs=s}Yd(e,i){if(this.Ld!==null){if(this.Ld.ot===i)return void(this.Ld.zd=e);if(Math.abs(this.Ld.zd-e)<this.rs)return}this.Fd=this.Nd,this.Nd=this.Ed,this.Ed=this.Ld,this.Ld={ot:i,zd:e}}Vr(e,i){if(this.Ld===null||this.Ed===null||i-this.Ld.ot>50)return;let n=0;const s=ya(this.Ld,this.Ed,this.Ud),r=xa(this.Ld,this.Ed),l=[s],c=[r];if(n+=r,this.Nd!==null){const u=ya(this.Ed,this.Nd,this.Ud);if(Math.sign(u)===Math.sign(s)){const h=xa(this.Ed,this.Nd);if(l.push(u),c.push(h),n+=h,this.Fd!==null){const d=ya(this.Nd,this.Fd,this.Ud);if(Math.sign(d)===Math.sign(s)){const f=xa(this.Nd,this.Fd);l.push(d),c.push(f),n+=f}}}}let o=0;for(let u=0;u<l.length;++u)o+=c[u]/n*l[u];Math.abs(o)<this.$d||(this.Wd={zd:e,ot:i},this.Hd=o,this.jd=function(u,h){const d=Math.log(h);return Math.log(1*d/-u)/d}(Math.abs(o),this.qd))}tc(e){const i=E(this.Wd),n=e-i.ot;return i.zd+this.Hd*(Math.pow(this.qd,n)-1)/Math.log(this.qd)}Qu(e){return this.Wd===null||this.Zd(e)===this.jd}Zd(e){const i=e-E(this.Wd).ot;return Math.min(i,this.jd)}}class C2{constructor(e,i){this.Xd=void 0,this.Kd=void 0,this.Gd=void 0,this.en=!1,this.Jd=e,this.Qd=i,this.tf()}bt(){this.tf()}if(){this.Xd&&this.Jd.removeChild(this.Xd),this.Kd&&this.Jd.removeChild(this.Kd),this.Xd=void 0,this.Kd=void 0}nf(){return this.en!==this.sf()||this.Gd!==this.ef()}ef(){return xm(ws(this.Qd.W().layout.textColor))>160?"dark":"light"}sf(){return this.Qd.W().layout.attributionLogo}rf(){const e=new URL(location.href);return e.hostname?"&utm_source="+e.hostname+e.pathname:""}tf(){this.nf()&&(this.if(),this.en=this.sf(),this.en&&(this.Gd=this.ef(),this.Kd=document.createElement("style"),this.Kd.innerText="a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}",this.Xd=document.createElement("a"),this.Xd.href=`https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.rf()}`,this.Xd.title="Charting by TradingView",this.Xd.id="tv-attr-logo",this.Xd.target="_blank",this.Xd.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 19" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>',this.Xd.toggleAttribute("data-dark",this.Gd==="dark"),this.Jd.appendChild(this.Kd),this.Jd.appendChild(this.Xd)))}}function Pi(t,e){const i=E(t.ownerDocument).createElement("canvas");t.appendChild(i);const n=B1(i,{options:{allowResizeObserver:!1},transform:(s,r)=>({width:Math.max(s.width,r.width),height:Math.max(s.height,r.height)})});return n.resizeCanvasElement(e),n}function Li(t){var e;t.width=1,t.height=1,(e=t.getContext("2d"))===null||e===void 0||e.clearRect(0,0,1,1)}function _o(t,e,i,n){t.gl&&t.gl(e,i,n)}function _r(t,e,i,n){t.X(e,i,n)}function To(t,e,i,n){const s=t(i,n);for(const r of s){const l=r.gt();l!==null&&e(l)}}function E2(t){vn&&window.chrome!==void 0&&t.addEventListener("mousedown",e=>{if(e.button===1)return e.preventDefault(),!1})}class Qc{constructor(e,i,n){this.hf=0,this.lf=null,this.af={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY},this._f=0,this.uf=null,this.cf={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY},this.df=null,this.ff=!1,this.vf=null,this.pf=null,this.mf=!1,this.bf=!1,this.wf=!1,this.gf=null,this.Mf=null,this.xf=null,this.Sf=null,this.kf=null,this.yf=null,this.Cf=null,this.Tf=0,this.Pf=!1,this.Rf=!1,this.Df=!1,this.Vf=0,this.Of=null,this.Bf=!va(),this.Af=s=>{this.If(s)},this.zf=s=>{if(this.Lf(s)){const r=this.Ef(s);if(++this._f,this.uf&&this._f>1){const{Nf:l}=this.Ff(vt(s),this.cf);l<30&&!this.wf&&this.Wf(r,this.Hf.jf),this.$f()}}else{const r=this.Ef(s);if(++this.hf,this.lf&&this.hf>1){const{Nf:l}=this.Ff(vt(s),this.af);l<5&&!this.bf&&this.Uf(r,this.Hf.qf),this.Yf()}}},this.Zf=e,this.Hf=i,this.cn=n,this.Xf()}S(){this.gf!==null&&(this.gf(),this.gf=null),this.Mf!==null&&(this.Mf(),this.Mf=null),this.Sf!==null&&(this.Sf(),this.Sf=null),this.kf!==null&&(this.kf(),this.kf=null),this.yf!==null&&(this.yf(),this.yf=null),this.xf!==null&&(this.xf(),this.xf=null),this.Kf(),this.Yf()}Gf(e){this.Sf&&this.Sf();const i=this.Jf.bind(this);if(this.Sf=()=>{this.Zf.removeEventListener("mousemove",i)},this.Zf.addEventListener("mousemove",i),this.Lf(e))return;const n=this.Ef(e);this.Uf(n,this.Hf.Qf),this.Bf=!0}Yf(){this.lf!==null&&clearTimeout(this.lf),this.hf=0,this.lf=null,this.af={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY}}$f(){this.uf!==null&&clearTimeout(this.uf),this._f=0,this.uf=null,this.cf={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY}}Jf(e){if(this.Df||this.pf!==null||this.Lf(e))return;const i=this.Ef(e);this.Uf(i,this.Hf.tv),this.Bf=!0}iv(e){const i=wa(e.changedTouches,E(this.Of));if(i===null||(this.Vf=or(e),this.Cf!==null)||this.Rf)return;this.Pf=!0;const n=this.Ff(vt(i),E(this.pf)),{nv:s,sv:r,Nf:l}=n;if(this.mf||!(l<5)){if(!this.mf){const c=.5*s,o=r>=c&&!this.cn.ev(),u=c>r&&!this.cn.rv();o||u||(this.Rf=!0),this.mf=!0,this.wf=!0,this.Kf(),this.$f()}if(!this.Rf){const c=this.Ef(e,i);this.Wf(c,this.Hf.hv),Ai(e)}}}lv(e){if(e.button!==0)return;const i=this.Ff(vt(e),E(this.vf)),{Nf:n}=i;if(n>=5&&(this.bf=!0,this.Yf()),this.bf){const s=this.Ef(e);this.Uf(s,this.Hf.av)}}Ff(e,i){const n=Math.abs(i.nt-e.nt),s=Math.abs(i.st-e.st);return{nv:n,sv:s,Nf:n+s}}ov(e){let i=wa(e.changedTouches,E(this.Of));if(i===null&&e.touches.length===0&&(i=e.changedTouches[0]),i===null)return;this.Of=null,this.Vf=or(e),this.Kf(),this.pf=null,this.yf&&(this.yf(),this.yf=null);const n=this.Ef(e,i);if(this.Wf(n,this.Hf._v),++this._f,this.uf&&this._f>1){const{Nf:s}=this.Ff(vt(i),this.cf);s<30&&!this.wf&&this.Wf(n,this.Hf.jf),this.$f()}else this.wf||(this.Wf(n,this.Hf.uv),this.Hf.uv&&Ai(e));this._f===0&&Ai(e),e.touches.length===0&&this.ff&&(this.ff=!1,Ai(e))}If(e){if(e.button!==0)return;const i=this.Ef(e);if(this.vf=null,this.Df=!1,this.kf&&(this.kf(),this.kf=null),dd()&&this.Zf.ownerDocument.documentElement.removeEventListener("mouseleave",this.Af),!this.Lf(e))if(this.Uf(i,this.Hf.cv),++this.hf,this.lf&&this.hf>1){const{Nf:n}=this.Ff(vt(e),this.af);n<5&&!this.bf&&this.Uf(i,this.Hf.qf),this.Yf()}else this.bf||this.Uf(i,this.Hf.dv)}Kf(){this.df!==null&&(clearTimeout(this.df),this.df=null)}fv(e){if(this.Of!==null)return;const i=e.changedTouches[0];this.Of=i.identifier,this.Vf=or(e);const n=this.Zf.ownerDocument.documentElement;this.wf=!1,this.mf=!1,this.Rf=!1,this.pf=vt(i),this.yf&&(this.yf(),this.yf=null);{const r=this.iv.bind(this),l=this.ov.bind(this);this.yf=()=>{n.removeEventListener("touchmove",r),n.removeEventListener("touchend",l)},n.addEventListener("touchmove",r,{passive:!1}),n.addEventListener("touchend",l,{passive:!1}),this.Kf(),this.df=setTimeout(this.vv.bind(this,e),240)}const s=this.Ef(e,i);this.Wf(s,this.Hf.pv),this.uf||(this._f=0,this.uf=setTimeout(this.$f.bind(this),500),this.cf=vt(i))}mv(e){if(e.button!==0)return;const i=this.Zf.ownerDocument.documentElement;dd()&&i.addEventListener("mouseleave",this.Af),this.bf=!1,this.vf=vt(e),this.kf&&(this.kf(),this.kf=null);{const s=this.lv.bind(this),r=this.If.bind(this);this.kf=()=>{i.removeEventListener("mousemove",s),i.removeEventListener("mouseup",r)},i.addEventListener("mousemove",s),i.addEventListener("mouseup",r)}if(this.Df=!0,this.Lf(e))return;const n=this.Ef(e);this.Uf(n,this.Hf.bv),this.lf||(this.hf=0,this.lf=setTimeout(this.Yf.bind(this),500),this.af=vt(e))}Xf(){this.Zf.addEventListener("mouseenter",this.Gf.bind(this)),this.Zf.addEventListener("touchcancel",this.Kf.bind(this));{const e=this.Zf.ownerDocument,i=n=>{this.Hf.wv&&(n.composed&&this.Zf.contains(n.composedPath()[0])||n.target&&this.Zf.contains(n.target)||this.Hf.wv())};this.Mf=()=>{e.removeEventListener("touchstart",i)},this.gf=()=>{e.removeEventListener("mousedown",i)},e.addEventListener("mousedown",i),e.addEventListener("touchstart",i,{passive:!0})}va()&&(this.xf=()=>{this.Zf.removeEventListener("dblclick",this.zf)},this.Zf.addEventListener("dblclick",this.zf)),this.Zf.addEventListener("mouseleave",this.gv.bind(this)),this.Zf.addEventListener("touchstart",this.fv.bind(this),{passive:!0}),E2(this.Zf),this.Zf.addEventListener("mousedown",this.mv.bind(this)),this.Mv(),this.Zf.addEventListener("touchmove",()=>{},{passive:!1})}Mv(){this.Hf.xv===void 0&&this.Hf.Sv===void 0&&this.Hf.kv===void 0||(this.Zf.addEventListener("touchstart",e=>this.yv(e.touches),{passive:!0}),this.Zf.addEventListener("touchmove",e=>{if(e.touches.length===2&&this.Cf!==null&&this.Hf.Sv!==void 0){const i=fd(e.touches[0],e.touches[1])/this.Tf;this.Hf.Sv(this.Cf,i),Ai(e)}},{passive:!1}),this.Zf.addEventListener("touchend",e=>{this.yv(e.touches)}))}yv(e){e.length===1&&(this.Pf=!1),e.length!==2||this.Pf||this.ff?this.Cv():this.Tv(e)}Tv(e){const i=this.Zf.getBoundingClientRect()||{left:0,top:0};this.Cf={nt:(e[0].clientX-i.left+(e[1].clientX-i.left))/2,st:(e[0].clientY-i.top+(e[1].clientY-i.top))/2},this.Tf=fd(e[0],e[1]),this.Hf.xv!==void 0&&this.Hf.xv(),this.Kf()}Cv(){this.Cf!==null&&(this.Cf=null,this.Hf.kv!==void 0&&this.Hf.kv())}gv(e){if(this.Sf&&this.Sf(),this.Lf(e)||!this.Bf)return;const i=this.Ef(e);this.Uf(i,this.Hf.Pv),this.Bf=!va()}vv(e){const i=wa(e.touches,E(this.Of));if(i===null)return;const n=this.Ef(e,i);this.Wf(n,this.Hf.Rv),this.wf=!0,this.ff=!0}Lf(e){return e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents!==void 0?e.sourceCapabilities.firesTouchEvents:or(e)<this.Vf+500}Wf(e,i){i&&i.call(this.Hf,e)}Uf(e,i){i&&i.call(this.Hf,e)}Ef(e,i){const n=i||e,s=this.Zf.getBoundingClientRect()||{left:0,top:0};return{clientX:n.clientX,clientY:n.clientY,pageX:n.pageX,pageY:n.pageY,screenX:n.screenX,screenY:n.screenY,localX:n.clientX-s.left,localY:n.clientY-s.top,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey,Dv:!e.type.startsWith("mouse")&&e.type!=="contextmenu"&&e.type!=="click",Vv:e.type,Ov:n.target,Bv:e.view,Av:()=>{e.type!=="touchstart"&&Ai(e)}}}}function fd(t,e){const i=t.clientX-e.clientX,n=t.clientY-e.clientY;return Math.sqrt(i*i+n*n)}function Ai(t){t.cancelable&&t.preventDefault()}function vt(t){return{nt:t.pageX,st:t.pageY}}function or(t){return t.timeStamp||performance.now()}function wa(t,e){for(let i=0;i<t.length;++i)if(t[i].identifier===e)return t[i];return null}function cr(t){return{Hc:t.Hc,Iv:{gr:t.zv.externalId},Lv:t.zv.cursorStyle}}function z2(t,e,i){for(const n of t){const s=n.gt();if(s!==null&&s.wr){const r=s.wr(e,i);if(r!==null)return{Bv:n,Iv:r}}}return null}function ba(t,e){return i=>{var n,s,r,l;return((s=(n=i.Dt())===null||n===void 0?void 0:n.Pa())!==null&&s!==void 0?s:"")!==e?[]:(l=(r=i.da)===null||r===void 0?void 0:r.call(i,t))!==null&&l!==void 0?l:[]}}function pd(t,e,i,n){if(!t.length)return;let s=0;const r=i/2,l=t[0].At(n,!0);let c=e===1?r-(t[0].Vi()-l/2):t[0].Vi()-l/2-r;c=Math.max(0,c);for(let o=1;o<t.length;o++){const u=t[o],h=t[o-1],d=h.At(n,!1),f=u.Vi(),m=h.Vi();if(e===1?f>m-d:f<m+d){const g=m-d*e;u.Oi(g);const p=g-e*d/2;if((e===1?p<0:p>i)&&c>0){const w=e===1?-1-p:p-i,v=Math.min(w,c);for(let x=s;x<t.length;x++)t[x].Oi(t[x].Vi()+e*v);c-=v}}else s=o,c=e===1?m-d-f:f-(m+d)}}class md{constructor(e,i,n,s){this.Li=null,this.Ev=null,this.Nv=!1,this.Fv=new js(200),this.Qr=null,this.Wv=0,this.jv=!1,this.Hv=()=>{this.jv||this.tn.$v().$t().Uh()},this.Uv=()=>{this.jv||this.tn.$v().$t().Uh()},this.tn=e,this.cn=i,this.ko=i.layout,this.Oc=n,this.qv=s==="left",this.Yv=ba("normal",s),this.Zv=ba("top",s),this.Xv=ba("bottom",s),this.Kv=document.createElement("div"),this.Kv.style.height="100%",this.Kv.style.overflow="hidden",this.Kv.style.width="25px",this.Kv.style.left="0",this.Kv.style.position="relative",this.Gv=Pi(this.Kv,te({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);const r=this.Gv.canvasElement;r.style.position="absolute",r.style.zIndex="1",r.style.left="0",r.style.top="0",this.Jv=Pi(this.Kv,te({width:16,height:16})),this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);const l=this.Jv.canvasElement;l.style.position="absolute",l.style.zIndex="2",l.style.left="0",l.style.top="0";const c={bv:this.Qv.bind(this),pv:this.Qv.bind(this),av:this.tp.bind(this),hv:this.tp.bind(this),wv:this.ip.bind(this),cv:this.np.bind(this),_v:this.np.bind(this),qf:this.sp.bind(this),jf:this.sp.bind(this),Qf:this.ep.bind(this),Pv:this.rp.bind(this)};this.hp=new Qc(this.Jv.canvasElement,c,{ev:()=>!this.cn.handleScroll.vertTouchDrag,rv:()=>!0})}S(){this.hp.S(),this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv),Li(this.Jv.canvasElement),this.Jv.dispose(),this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Li(this.Gv.canvasElement),this.Gv.dispose(),this.Li!==null&&this.Li.Ko().p(this),this.Li=null}lp(){return this.Kv}P(){return this.ko.fontSize}ap(){const e=this.Oc.W();return this.Qr!==e.R&&(this.Fv.nr(),this.Qr=e.R),e}op(){if(this.Li===null)return 0;let e=0;const i=this.ap(),n=E(this.Gv.canvasElement.getContext("2d"));n.save();const s=this.Li.Ha();n.font=this._p(),s.length>0&&(e=Math.max(this.Fv.xi(n,s[0].so),this.Fv.xi(n,s[s.length-1].so)));const r=this.up();for(let u=r.length;u--;){const h=this.Fv.xi(n,r[u].Kt());h>e&&(e=h)}const l=this.Li.Ct();if(l!==null&&this.Ev!==null&&(c=this.cn.crosshair).mode!==2&&c.horzLine.visible&&c.horzLine.labelVisible){const u=this.Li.pn(1,l),h=this.Li.pn(this.Ev.height-2,l);e=Math.max(e,this.Fv.xi(n,this.Li.Fi(Math.floor(Math.min(u,h))+.11111111111111,l)),this.Fv.xi(n,this.Li.Fi(Math.ceil(Math.max(u,h))-.11111111111111,l)))}var c;n.restore();const o=e||34;return Mo(Math.ceil(i.C+i.T+i.A+i.I+5+o))}cp(e){this.Ev!==null&&ki(this.Ev,e)||(this.Ev=e,this.jv=!0,this.Gv.resizeCanvasElement(e),this.Jv.resizeCanvasElement(e),this.jv=!1,this.Kv.style.width=`${e.width}px`,this.Kv.style.height=`${e.height}px`)}dp(){return E(this.Ev).width}Gi(e){this.Li!==e&&(this.Li!==null&&this.Li.Ko().p(this),this.Li=e,e.Ko().l(this.fo.bind(this),this))}Dt(){return this.Li}nr(){const e=this.tn.fp();this.tn.$v().$t().E_(e,E(this.Dt()))}vp(e){if(this.Ev===null)return;if(e!==1){this.pp(),this.Gv.applySuggestedBitmapSize();const n=_i(this.Gv);n!==null&&(n.useBitmapCoordinateSpace(s=>{this.mp(s),this.Ie(s)}),this.tn.bp(n,this.Xv),this.wp(n),this.tn.bp(n,this.Yv),this.gp(n))}this.Jv.applySuggestedBitmapSize();const i=_i(this.Jv);i!==null&&(i.useBitmapCoordinateSpace(({context:n,bitmapSize:s})=>{n.clearRect(0,0,s.width,s.height)}),this.Mp(i),this.tn.bp(i,this.Zv))}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const s=this.xp();s.width>0&&s.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}bt(){var e;(e=this.Li)===null||e===void 0||e.Ha()}Qv(e){if(this.Li===null||this.Li.Ni()||!this.cn.handleScale.axisPressedMouseMove.price)return;const i=this.tn.$v().$t(),n=this.tn.fp();this.Nv=!0,i.V_(n,this.Li,e.localY)}tp(e){if(this.Li===null||!this.cn.handleScale.axisPressedMouseMove.price)return;const i=this.tn.$v().$t(),n=this.tn.fp(),s=this.Li;i.O_(n,s,e.localY)}ip(){if(this.Li===null||!this.cn.handleScale.axisPressedMouseMove.price)return;const e=this.tn.$v().$t(),i=this.tn.fp(),n=this.Li;this.Nv&&(this.Nv=!1,e.B_(i,n))}np(e){if(this.Li===null||!this.cn.handleScale.axisPressedMouseMove.price)return;const i=this.tn.$v().$t(),n=this.tn.fp();this.Nv=!1,i.B_(n,this.Li)}sp(e){this.cn.handleScale.axisDoubleClickReset.price&&this.nr()}ep(e){this.Li!==null&&(!this.tn.$v().$t().W().handleScale.axisPressedMouseMove.price||this.Li.Mh()||this.Li.Oo()||this.kp(1))}rp(e){this.kp(0)}up(){const e=[],i=this.Li===null?void 0:this.Li;return(n=>{for(let s=0;s<n.length;++s){const r=n[s].Rn(this.tn.fp(),i);for(let l=0;l<r.length;l++)e.push(r[l])}})(this.tn.fp().Uo()),e}mp({context:e,bitmapSize:i}){const{width:n,height:s}=i,r=this.tn.fp().$t(),l=r.q(),c=r.bd();l===c?Cl(e,0,0,n,s,l):ym(e,0,0,n,s,l,c)}Ie({context:e,bitmapSize:i,horizontalPixelRatio:n}){if(this.Ev===null||this.Li===null||!this.Li.W().borderVisible)return;e.fillStyle=this.Li.W().borderColor;const s=Math.max(1,Math.floor(this.ap().C*n));let r;r=this.qv?i.width-s:0,e.fillRect(r,0,s,i.height)}wp(e){if(this.Ev===null||this.Li===null)return;const i=this.Li.Ha(),n=this.Li.W(),s=this.ap(),r=this.qv?this.Ev.width-s.T:0;n.borderVisible&&n.ticksVisible&&e.useBitmapCoordinateSpace(({context:l,horizontalPixelRatio:c,verticalPixelRatio:o})=>{l.fillStyle=n.borderColor;const u=Math.max(1,Math.floor(o)),h=Math.floor(.5*o),d=Math.round(s.T*c);l.beginPath();for(const f of i)l.rect(Math.floor(r*c),Math.round(f.Ea*o)-h,d,u);l.fill()}),e.useMediaCoordinateSpace(({context:l})=>{var c;l.font=this._p(),l.fillStyle=(c=n.textColor)!==null&&c!==void 0?c:this.ko.textColor,l.textAlign=this.qv?"right":"left",l.textBaseline="middle";const o=this.qv?Math.round(r-s.A):Math.round(r+s.T+s.A),u=i.map(h=>this.Fv.Mi(l,h.so));for(let h=i.length;h--;){const d=i[h];l.fillText(d.so,o,d.Ea+u[h])}})}pp(){if(this.Ev===null||this.Li===null)return;const e=[],i=this.Li.Uo().slice(),n=this.tn.fp(),s=this.ap();this.Li===n.pr()&&this.tn.fp().Uo().forEach(l=>{n.vr(l)&&i.push(l)});const r=this.Li;i.forEach(l=>{l.Rn(n,r).forEach(c=>{c.Oi(null),c.Bi()&&e.push(c)})}),e.forEach(l=>l.Oi(l.ki())),this.Li.W().alignLabels&&this.yp(e,s)}yp(e,i){if(this.Ev===null)return;const n=this.Ev.height/2,s=e.filter(l=>l.ki()<=n),r=e.filter(l=>l.ki()>n);s.sort((l,c)=>c.ki()-l.ki()),r.sort((l,c)=>l.ki()-c.ki());for(const l of e){const c=Math.floor(l.At(i)/2),o=l.ki();o>-c&&o<c&&l.Oi(c),o>this.Ev.height-c&&o<this.Ev.height+c&&l.Oi(this.Ev.height-c)}pd(s,1,this.Ev.height,i),pd(r,-1,this.Ev.height,i)}gp(e){if(this.Ev===null)return;const i=this.up(),n=this.ap(),s=this.qv?"right":"left";i.forEach(r=>{r.Ai()&&r.gt(E(this.Li)).X(e,n,this.Fv,s)})}Mp(e){if(this.Ev===null||this.Li===null)return;const i=this.tn.$v().$t(),n=[],s=this.tn.fp(),r=i.Zc().Rn(s,this.Li);r.length&&n.push(r);const l=this.ap(),c=this.qv?"right":"left";n.forEach(o=>{o.forEach(u=>{u.gt(E(this.Li)).X(e,l,this.Fv,c)})})}kp(e){this.Kv.style.cursor=e===1?"ns-resize":"default"}fo(){const e=this.op();this.Wv<e&&this.tn.$v().$t().Kl(),this.Wv=e}_p(){return gn(this.ko.fontSize,this.ko.fontFamily)}}function M2(t,e){var i,n;return(n=(i=t.ua)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}function ur(t,e){var i,n;return(n=(i=t.Pn)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}function _2(t,e){var i,n;return(n=(i=t.Ji)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}function T2(t,e){var i,n;return(n=(i=t.aa)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}class Yc{constructor(e,i){this.Ev=te({width:0,height:0}),this.Cp=null,this.Tp=null,this.Pp=null,this.Rp=null,this.Dp=!1,this.Vp=new pe,this.Op=new pe,this.Bp=0,this.Ap=!1,this.Ip=null,this.zp=!1,this.Lp=null,this.Ep=null,this.jv=!1,this.Hv=()=>{this.jv||this.Np===null||this.$i().Uh()},this.Uv=()=>{this.jv||this.Np===null||this.$i().Uh()},this.Qd=e,this.Np=i,this.Np.W_().l(this.Fp.bind(this),this,!0),this.Wp=document.createElement("td"),this.Wp.style.padding="0",this.Wp.style.position="relative";const n=document.createElement("div");n.style.width="100%",n.style.height="100%",n.style.position="relative",n.style.overflow="hidden",this.jp=document.createElement("td"),this.jp.style.padding="0",this.Hp=document.createElement("td"),this.Hp.style.padding="0",this.Wp.appendChild(n),this.Gv=Pi(n,te({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);const s=this.Gv.canvasElement;s.style.position="absolute",s.style.zIndex="1",s.style.left="0",s.style.top="0",this.Jv=Pi(n,te({width:16,height:16})),this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);const r=this.Jv.canvasElement;r.style.position="absolute",r.style.zIndex="2",r.style.left="0",r.style.top="0",this.$p=document.createElement("tr"),this.$p.appendChild(this.jp),this.$p.appendChild(this.Wp),this.$p.appendChild(this.Hp),this.Up(),this.hp=new Qc(this.Jv.canvasElement,this,{ev:()=>this.Ip===null&&!this.Qd.W().handleScroll.vertTouchDrag,rv:()=>this.Ip===null&&!this.Qd.W().handleScroll.horzTouchDrag})}S(){this.Cp!==null&&this.Cp.S(),this.Tp!==null&&this.Tp.S(),this.Pp=null,this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv),Li(this.Jv.canvasElement),this.Jv.dispose(),this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Li(this.Gv.canvasElement),this.Gv.dispose(),this.Np!==null&&this.Np.W_().p(this),this.hp.S()}fp(){return E(this.Np)}qp(e){var i,n;this.Np!==null&&this.Np.W_().p(this),this.Np=e,this.Np!==null&&this.Np.W_().l(Yc.prototype.Fp.bind(this),this,!0),this.Up(),this.Qd.Yp().indexOf(this)===this.Qd.Yp().length-1?(this.Pp=(i=this.Pp)!==null&&i!==void 0?i:new C2(this.Wp,this.Qd),this.Pp.bt()):((n=this.Pp)===null||n===void 0||n.if(),this.Pp=null)}$v(){return this.Qd}lp(){return this.$p}Up(){if(this.Np!==null&&(this.Zp(),this.$i().wt().length!==0)){if(this.Cp!==null){const e=this.Np.R_();this.Cp.Gi(E(e))}if(this.Tp!==null){const e=this.Np.D_();this.Tp.Gi(E(e))}}}Xp(){this.Cp!==null&&this.Cp.bt(),this.Tp!==null&&this.Tp.bt()}M_(){return this.Np!==null?this.Np.M_():0}x_(e){this.Np&&this.Np.x_(e)}Qf(e){if(!this.Np)return;this.Kp();const i=e.localX,n=e.localY;this.Gp(i,n,e)}bv(e){this.Kp(),this.Jp(),this.Gp(e.localX,e.localY,e)}tv(e){var i;if(!this.Np)return;this.Kp();const n=e.localX,s=e.localY;this.Gp(n,s,e);const r=this.wr(n,s);this.Qd.Qp((i=r==null?void 0:r.Lv)!==null&&i!==void 0?i:null),this.$i().jc(r&&{Hc:r.Hc,Iv:r.Iv})}dv(e){this.Np!==null&&(this.Kp(),this.tm(e))}qf(e){this.Np!==null&&this.im(this.Op,e)}jf(e){this.qf(e)}av(e){this.Kp(),this.nm(e),this.Gp(e.localX,e.localY,e)}cv(e){this.Np!==null&&(this.Kp(),this.Ap=!1,this.sm(e))}uv(e){this.Np!==null&&this.tm(e)}Rv(e){if(this.Ap=!0,this.Ip===null){const i={x:e.localX,y:e.localY};this.rm(i,i,e)}}Pv(e){this.Np!==null&&(this.Kp(),this.Np.$t().jc(null),this.hm())}lm(){return this.Vp}am(){return this.Op}xv(){this.Bp=1,this.$i().Un()}Sv(e,i){if(!this.Qd.W().handleScale.pinch)return;const n=5*(i-this.Bp);this.Bp=i,this.$i().Qc(e.nt,n)}pv(e){this.Ap=!1,this.zp=this.Ip!==null,this.Jp();const i=this.$i().Zc();this.Ip!==null&&i.yt()&&(this.Lp={x:i.Yt(),y:i.Zt()},this.Ip={x:e.localX,y:e.localY})}hv(e){if(this.Np===null)return;const i=e.localX,n=e.localY;if(this.Ip===null)this.nm(e);else{this.zp=!1;const s=E(this.Lp),r=s.x+(i-this.Ip.x),l=s.y+(n-this.Ip.y);this.Gp(r,l,e)}}_v(e){this.$v().W().trackingMode.exitMode===0&&(this.zp=!0),this.om(),this.sm(e)}wr(e,i){const n=this.Np;return n===null?null:function(s,r,l){const c=s.Uo(),o=function(u,h,d){var f,m;let g,p;for(const x of u){const y=(m=(f=x.va)===null||f===void 0?void 0:f.call(x,h,d))!==null&&m!==void 0?m:[];for(const b of y)w=b.zOrder,(!(v=g==null?void 0:g.zOrder)||w==="top"&&v!=="top"||w==="normal"&&v==="bottom")&&(g=b,p=x)}var w,v;return g&&p?{zv:g,Hc:p}:null}(c,r,l);if((o==null?void 0:o.zv.zOrder)==="top")return cr(o);for(const u of c){if(o&&o.Hc===u&&o.zv.zOrder!=="bottom"&&!o.zv.isBackground)return cr(o);const h=z2(u.Pn(s),r,l);if(h!==null)return{Hc:u,Bv:h.Bv,Iv:h.Iv};if(o&&o.Hc===u&&o.zv.zOrder!=="bottom"&&o.zv.isBackground)return cr(o)}return o!=null&&o.zv?cr(o):null}(n,e,i)}_m(e,i){E(i==="left"?this.Cp:this.Tp).cp(te({width:e,height:this.Ev.height}))}um(){return this.Ev}cp(e){ki(this.Ev,e)||(this.Ev=e,this.jv=!0,this.Gv.resizeCanvasElement(e),this.Jv.resizeCanvasElement(e),this.jv=!1,this.Wp.style.width=e.width+"px",this.Wp.style.height=e.height+"px")}dm(){const e=E(this.Np);e.P_(e.R_()),e.P_(e.D_());for(const i of e.Ba())if(e.vr(i)){const n=i.Dt();n!==null&&e.P_(n),i.Vn()}}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const s=this.xp();s.width>0&&s.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}vp(e){if(e===0||this.Np===null)return;if(e>1&&this.dm(),this.Cp!==null&&this.Cp.vp(e),this.Tp!==null&&this.Tp.vp(e),e!==1){this.Gv.applySuggestedBitmapSize();const n=_i(this.Gv);n!==null&&(n.useBitmapCoordinateSpace(s=>{this.mp(s)}),this.Np&&(this.fm(n,M2),this.vm(n),this.pm(n),this.fm(n,ur),this.fm(n,_2)))}this.Jv.applySuggestedBitmapSize();const i=_i(this.Jv);i!==null&&(i.useBitmapCoordinateSpace(({context:n,bitmapSize:s})=>{n.clearRect(0,0,s.width,s.height)}),this.bm(i),this.fm(i,T2))}wm(){return this.Cp}gm(){return this.Tp}bp(e,i){this.fm(e,i)}Fp(){this.Np!==null&&this.Np.W_().p(this),this.Np=null}tm(e){this.im(this.Vp,e)}im(e,i){const n=i.localX,s=i.localY;e.M()&&e.m(this.$i().St().Nu(n),{x:n,y:s},i)}mp({context:e,bitmapSize:i}){const{width:n,height:s}=i,r=this.$i(),l=r.q(),c=r.bd();l===c?Cl(e,0,0,n,s,c):ym(e,0,0,n,s,l,c)}vm(e){const i=E(this.Np).j_().qh().gt();i!==null&&i.X(e,!1)}pm(e){const i=this.$i().Yc();this.Mm(e,ur,_o,i),this.Mm(e,ur,_r,i)}bm(e){this.Mm(e,ur,_r,this.$i().Zc())}fm(e,i){const n=E(this.Np).Uo();for(const s of n)this.Mm(e,i,_o,s);for(const s of n)this.Mm(e,i,_r,s)}Mm(e,i,n,s){const r=E(this.Np),l=r.$t().Wc(),c=l!==null&&l.Hc===s,o=l!==null&&c&&l.Iv!==void 0?l.Iv.Mr:void 0;To(i,u=>n(u,e,c,o),s,r)}Zp(){if(this.Np===null)return;const e=this.Qd,i=this.Np.R_().W().visible,n=this.Np.D_().W().visible;i||this.Cp===null||(this.jp.removeChild(this.Cp.lp()),this.Cp.S(),this.Cp=null),n||this.Tp===null||(this.Hp.removeChild(this.Tp.lp()),this.Tp.S(),this.Tp=null);const s=e.$t().ud();i&&this.Cp===null&&(this.Cp=new md(this,e.W(),s,"left"),this.jp.appendChild(this.Cp.lp())),n&&this.Tp===null&&(this.Tp=new md(this,e.W(),s,"right"),this.Hp.appendChild(this.Tp.lp()))}xm(e){return e.Dv&&this.Ap||this.Ip!==null}Sm(e){return Math.max(0,Math.min(e,this.Ev.width-1))}km(e){return Math.max(0,Math.min(e,this.Ev.height-1))}Gp(e,i,n){this.$i().ld(this.Sm(e),this.km(i),n,E(this.Np))}hm(){this.$i().od()}om(){this.zp&&(this.Ip=null,this.hm())}rm(e,i,n){this.Ip=e,this.zp=!1,this.Gp(i.x,i.y,n);const s=this.$i().Zc();this.Lp={x:s.Yt(),y:s.Zt()}}$i(){return this.Qd.$t()}sm(e){if(!this.Dp)return;const i=this.$i(),n=this.fp();if(i.z_(n,n.vn()),this.Rp=null,this.Dp=!1,i.ed(),this.Ep!==null){const s=performance.now(),r=i.St();this.Ep.Vr(r.Hu(),s),this.Ep.Qu(s)||i.Zn(this.Ep)}}Kp(){this.Ip=null}Jp(){if(this.Np){if(this.$i().Un(),document.activeElement!==document.body&&document.activeElement!==document.documentElement)E(document.activeElement).blur();else{const e=document.getSelection();e!==null&&e.removeAllRanges()}!this.Np.vn().Ni()&&this.$i().St().Ni()}}nm(e){if(this.Np===null)return;const i=this.$i(),n=i.St();if(n.Ni())return;const s=this.Qd.W(),r=s.handleScroll,l=s.kineticScroll;if((!r.pressedMouseMove||e.Dv)&&(!r.horzTouchDrag&&!r.vertTouchDrag||!e.Dv))return;const c=this.Np.vn(),o=performance.now();if(this.Rp!==null||this.xm(e)||(this.Rp={x:e.clientX,y:e.clientY,Od:o,ym:e.localX,Cm:e.localY}),this.Rp!==null&&!this.Dp&&(this.Rp.x!==e.clientX||this.Rp.y!==e.clientY)){if(e.Dv&&l.touch||!e.Dv&&l.mouse){const u=n.le();this.Ep=new N2(.2/u,7/u,.997,15/u),this.Ep.Yd(n.Hu(),this.Rp.Od)}else this.Ep=null;c.Ni()||i.A_(this.Np,c,e.localY),i.nd(e.localX),this.Dp=!0}this.Dp&&(c.Ni()||i.I_(this.Np,c,e.localY),i.sd(e.localX),this.Ep!==null&&this.Ep.Yd(n.Hu(),o))}}class gd{constructor(e,i,n,s,r){this.ft=!0,this.Ev=te({width:0,height:0}),this.Hv=()=>this.vp(3),this.qv=e==="left",this.Oc=n.ud,this.cn=i,this.Tm=s,this.Pm=r,this.Kv=document.createElement("div"),this.Kv.style.width="25px",this.Kv.style.height="100%",this.Kv.style.overflow="hidden",this.Gv=Pi(this.Kv,te({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv)}S(){this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Li(this.Gv.canvasElement),this.Gv.dispose()}lp(){return this.Kv}um(){return this.Ev}cp(e){ki(this.Ev,e)||(this.Ev=e,this.Gv.resizeCanvasElement(e),this.Kv.style.width=`${e.width}px`,this.Kv.style.height=`${e.height}px`,this.ft=!0)}vp(e){if(e<3&&!this.ft||this.Ev.width===0||this.Ev.height===0)return;this.ft=!1,this.Gv.applySuggestedBitmapSize();const i=_i(this.Gv);i!==null&&i.useBitmapCoordinateSpace(n=>{this.mp(n),this.Ie(n)})}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const s=this.xp();s.width>0&&s.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}Ie({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:s}){if(!this.Tm())return;e.fillStyle=this.cn.timeScale.borderColor;const r=Math.floor(this.Oc.W().C*n),l=Math.floor(this.Oc.W().C*s),c=this.qv?i.width-r:0;e.fillRect(c,0,r,l)}mp({context:e,bitmapSize:i}){Cl(e,0,0,i.width,i.height,this.Pm())}}function Gc(t){return e=>{var i,n;return(n=(i=e.fa)===null||i===void 0?void 0:i.call(e,t))!==null&&n!==void 0?n:[]}}const P2=Gc("normal"),L2=Gc("top"),R2=Gc("bottom");class $2{constructor(e,i){this.Rm=null,this.Dm=null,this.k=null,this.Vm=!1,this.Ev=te({width:0,height:0}),this.Om=new pe,this.Fv=new js(5),this.jv=!1,this.Hv=()=>{this.jv||this.Qd.$t().Uh()},this.Uv=()=>{this.jv||this.Qd.$t().Uh()},this.Qd=e,this.q_=i,this.cn=e.W().layout,this.Xd=document.createElement("tr"),this.Bm=document.createElement("td"),this.Bm.style.padding="0",this.Am=document.createElement("td"),this.Am.style.padding="0",this.Kv=document.createElement("td"),this.Kv.style.height="25px",this.Kv.style.padding="0",this.Im=document.createElement("div"),this.Im.style.width="100%",this.Im.style.height="100%",this.Im.style.position="relative",this.Im.style.overflow="hidden",this.Kv.appendChild(this.Im),this.Gv=Pi(this.Im,te({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);const n=this.Gv.canvasElement;n.style.position="absolute",n.style.zIndex="1",n.style.left="0",n.style.top="0",this.Jv=Pi(this.Im,te({width:16,height:16})),this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);const s=this.Jv.canvasElement;s.style.position="absolute",s.style.zIndex="2",s.style.left="0",s.style.top="0",this.Xd.appendChild(this.Bm),this.Xd.appendChild(this.Kv),this.Xd.appendChild(this.Am),this.zm(),this.Qd.$t().g_().l(this.zm.bind(this),this),this.hp=new Qc(this.Jv.canvasElement,this,{ev:()=>!0,rv:()=>!this.Qd.W().handleScroll.horzTouchDrag})}S(){this.hp.S(),this.Rm!==null&&this.Rm.S(),this.Dm!==null&&this.Dm.S(),this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv),Li(this.Jv.canvasElement),this.Jv.dispose(),this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Li(this.Gv.canvasElement),this.Gv.dispose()}lp(){return this.Xd}Lm(){return this.Rm}Em(){return this.Dm}bv(e){if(this.Vm)return;this.Vm=!0;const i=this.Qd.$t();!i.St().Ni()&&this.Qd.W().handleScale.axisPressedMouseMove.time&&i.Jc(e.localX)}pv(e){this.bv(e)}wv(){const e=this.Qd.$t();!e.St().Ni()&&this.Vm&&(this.Vm=!1,this.Qd.W().handleScale.axisPressedMouseMove.time&&e.hd())}av(e){const i=this.Qd.$t();!i.St().Ni()&&this.Qd.W().handleScale.axisPressedMouseMove.time&&i.rd(e.localX)}hv(e){this.av(e)}cv(){this.Vm=!1;const e=this.Qd.$t();e.St().Ni()&&!this.Qd.W().handleScale.axisPressedMouseMove.time||e.hd()}_v(){this.cv()}qf(){this.Qd.W().handleScale.axisDoubleClickReset.time&&this.Qd.$t().Kn()}jf(){this.qf()}Qf(){this.Qd.$t().W().handleScale.axisPressedMouseMove.time&&this.kp(1)}Pv(){this.kp(0)}um(){return this.Ev}Nm(){return this.Om}Fm(e,i,n){ki(this.Ev,e)||(this.Ev=e,this.jv=!0,this.Gv.resizeCanvasElement(e),this.Jv.resizeCanvasElement(e),this.jv=!1,this.Kv.style.width=`${e.width}px`,this.Kv.style.height=`${e.height}px`,this.Om.m(e)),this.Rm!==null&&this.Rm.cp(te({width:i,height:e.height})),this.Dm!==null&&this.Dm.cp(te({width:n,height:e.height}))}Wm(){const e=this.jm();return Math.ceil(e.C+e.T+e.P+e.L+e.B+e.Hm)}bt(){this.Qd.$t().St().Ha()}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const s=this.xp();s.width>0&&s.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}vp(e){if(e===0)return;if(e!==1){this.Gv.applySuggestedBitmapSize();const n=_i(this.Gv);n!==null&&(n.useBitmapCoordinateSpace(s=>{this.mp(s),this.Ie(s),this.$m(n,R2)}),this.wp(n),this.$m(n,P2)),this.Rm!==null&&this.Rm.vp(e),this.Dm!==null&&this.Dm.vp(e)}this.Jv.applySuggestedBitmapSize();const i=_i(this.Jv);i!==null&&(i.useBitmapCoordinateSpace(({context:n,bitmapSize:s})=>{n.clearRect(0,0,s.width,s.height)}),this.Um([...this.Qd.$t().wt(),this.Qd.$t().Zc()],i),this.$m(i,L2))}$m(e,i){const n=this.Qd.$t().wt();for(const s of n)To(i,r=>_o(r,e,!1,void 0),s,void 0);for(const s of n)To(i,r=>_r(r,e,!1,void 0),s,void 0)}mp({context:e,bitmapSize:i}){Cl(e,0,0,i.width,i.height,this.Qd.$t().bd())}Ie({context:e,bitmapSize:i,verticalPixelRatio:n}){if(this.Qd.W().timeScale.borderVisible){e.fillStyle=this.qm();const s=Math.max(1,Math.floor(this.jm().C*n));e.fillRect(0,0,i.width,s)}}wp(e){const i=this.Qd.$t().St(),n=i.Ha();if(!n||n.length===0)return;const s=this.q_.maxTickMarkWeight(n),r=this.jm(),l=i.W();l.borderVisible&&l.ticksVisible&&e.useBitmapCoordinateSpace(({context:c,horizontalPixelRatio:o,verticalPixelRatio:u})=>{c.strokeStyle=this.qm(),c.fillStyle=this.qm();const h=Math.max(1,Math.floor(o)),d=Math.floor(.5*o);c.beginPath();const f=Math.round(r.T*u);for(let m=n.length;m--;){const g=Math.round(n[m].coord*o);c.rect(g-d,0,h,f)}c.fill()}),e.useMediaCoordinateSpace(({context:c})=>{const o=r.C+r.T+r.L+r.P/2;c.textAlign="center",c.textBaseline="middle",c.fillStyle=this.$(),c.font=this._p();for(const u of n)if(u.weight<s){const h=u.needAlignCoordinate?this.Ym(c,u.coord,u.label):u.coord;c.fillText(u.label,h,o)}this.Qd.W().timeScale.allowBoldLabels&&(c.font=this.Zm());for(const u of n)if(u.weight>=s){const h=u.needAlignCoordinate?this.Ym(c,u.coord,u.label):u.coord;c.fillText(u.label,h,o)}})}Ym(e,i,n){const s=this.Fv.xi(e,n),r=s/2,l=Math.floor(i-r)+.5;return l<0?i+=Math.abs(0-l):l+s>this.Ev.width&&(i-=Math.abs(this.Ev.width-(l+s))),i}Um(e,i){const n=this.jm();for(const s of e)for(const r of s.Qi())r.gt().X(i,n)}qm(){return this.Qd.W().timeScale.borderColor}$(){return this.cn.textColor}j(){return this.cn.fontSize}_p(){return gn(this.j(),this.cn.fontFamily)}Zm(){return gn(this.j(),this.cn.fontFamily,"bold")}jm(){this.k===null&&(this.k={C:1,N:NaN,L:NaN,B:NaN,ji:NaN,T:5,P:NaN,R:"",Wi:new js,Hm:0});const e=this.k,i=this._p();if(e.R!==i){const n=this.j();e.P=n,e.R=i,e.L=3*n/12,e.B=3*n/12,e.ji=9*n/12,e.N=0,e.Hm=4*n/12,e.Wi.nr()}return this.k}kp(e){this.Kv.style.cursor=e===1?"ew-resize":"default"}zm(){const e=this.Qd.$t(),i=e.W();i.leftPriceScale.visible||this.Rm===null||(this.Bm.removeChild(this.Rm.lp()),this.Rm.S(),this.Rm=null),i.rightPriceScale.visible||this.Dm===null||(this.Am.removeChild(this.Dm.lp()),this.Dm.S(),this.Dm=null);const n={ud:this.Qd.$t().ud()},s=()=>i.leftPriceScale.borderVisible&&e.St().W().borderVisible,r=()=>e.bd();i.leftPriceScale.visible&&this.Rm===null&&(this.Rm=new gd("left",i,n,s,r),this.Bm.appendChild(this.Rm.lp())),i.rightPriceScale.visible&&this.Dm===null&&(this.Dm=new gd("right",i,n,s,r),this.Am.appendChild(this.Dm.lp()))}}const D2=!!vn&&!!navigator.userAgentData&&navigator.userAgentData.brands.some(t=>t.brand.includes("Chromium"))&&!!vn&&(!((ka=navigator==null?void 0:navigator.userAgentData)===null||ka===void 0)&&ka.platform?navigator.userAgentData.platform==="Windows":navigator.userAgent.toLowerCase().indexOf("win")>=0);var ka;class B2{constructor(e,i,n){var s;this.Xm=[],this.Km=0,this.ho=0,this.__=0,this.Gm=0,this.Jm=0,this.Qm=null,this.tb=!1,this.Vp=new pe,this.Op=new pe,this.Rc=new pe,this.ib=null,this.nb=null,this.Jd=e,this.cn=i,this.q_=n,this.Xd=document.createElement("div"),this.Xd.classList.add("tv-lightweight-charts"),this.Xd.style.overflow="hidden",this.Xd.style.direction="ltr",this.Xd.style.width="100%",this.Xd.style.height="100%",(s=this.Xd).style.userSelect="none",s.style.webkitUserSelect="none",s.style.msUserSelect="none",s.style.MozUserSelect="none",s.style.webkitTapHighlightColor="transparent",this.sb=document.createElement("table"),this.sb.setAttribute("cellspacing","0"),this.Xd.appendChild(this.sb),this.eb=this.rb.bind(this),ja(this.cn)&&this.hb(!0),this.$i=new w2(this.Vc.bind(this),this.cn,n),this.$t().Xc().l(this.lb.bind(this),this),this.ab=new $2(this,this.q_),this.sb.appendChild(this.ab.lp());const r=i.autoSize&&this.ob();let l=this.cn.width,c=this.cn.height;if(r||l===0||c===0){const o=e.getBoundingClientRect();l=l||o.width,c=c||o.height}this._b(l,c),this.ub(),e.appendChild(this.Xd),this.cb(),this.$i.St().ec().l(this.$i.Kl.bind(this.$i),this),this.$i.g_().l(this.$i.Kl.bind(this.$i),this)}$t(){return this.$i}W(){return this.cn}Yp(){return this.Xm}fb(){return this.ab}S(){this.hb(!1),this.Km!==0&&window.cancelAnimationFrame(this.Km),this.$i.Xc().p(this),this.$i.St().ec().p(this),this.$i.g_().p(this),this.$i.S();for(const e of this.Xm)this.sb.removeChild(e.lp()),e.lm().p(this),e.am().p(this),e.S();this.Xm=[],E(this.ab).S(),this.Xd.parentElement!==null&&this.Xd.parentElement.removeChild(this.Xd),this.Rc.S(),this.Vp.S(),this.Op.S(),this.pb()}_b(e,i,n=!1){if(this.ho===i&&this.__===e)return;const s=function(c){const o=Math.floor(c.width),u=Math.floor(c.height);return te({width:o-o%2,height:u-u%2})}(te({width:e,height:i}));this.ho=s.height,this.__=s.width;const r=this.ho+"px",l=this.__+"px";E(this.Xd).style.height=r,E(this.Xd).style.width=l,this.sb.style.height=r,this.sb.style.width=l,n?this.mb(Ne.es(),performance.now()):this.$i.Kl()}vp(e){e===void 0&&(e=Ne.es());for(let i=0;i<this.Xm.length;i++)this.Xm[i].vp(e.Hn(i).Fn);this.cn.timeScale.visible&&this.ab.vp(e.jn())}$h(e){const i=ja(this.cn);this.$i.$h(e);const n=ja(this.cn);n!==i&&this.hb(n),this.cb(),this.bb(e)}lm(){return this.Vp}am(){return this.Op}Xc(){return this.Rc}wb(){this.Qm!==null&&(this.mb(this.Qm,performance.now()),this.Qm=null);const e=this.gb(null),i=document.createElement("canvas");i.width=e.width,i.height=e.height;const n=E(i.getContext("2d"));return this.gb(n),i}Mb(e){return e==="left"&&!this.xb()||e==="right"&&!this.Sb()||this.Xm.length===0?0:E(e==="left"?this.Xm[0].wm():this.Xm[0].gm()).dp()}kb(){return this.cn.autoSize&&this.ib!==null}yb(){return this.Xd}Qp(e){this.nb=e,this.nb?this.yb().style.setProperty("cursor",e):this.yb().style.removeProperty("cursor")}Cb(){return this.nb}Tb(){return De(this.Xm[0]).um()}bb(e){(e.autoSize!==void 0||!this.ib||e.width===void 0&&e.height===void 0)&&(e.autoSize&&!this.ib&&this.ob(),e.autoSize===!1&&this.ib!==null&&this.pb(),e.autoSize||e.width===void 0&&e.height===void 0||this._b(e.width||this.__,e.height||this.ho))}gb(e){let i=0,n=0;const s=this.Xm[0],r=(c,o)=>{let u=0;for(let h=0;h<this.Xm.length;h++){const d=this.Xm[h],f=E(c==="left"?d.wm():d.gm()),m=f.xp();e!==null&&f.Sp(e,o,u),u+=m.height}};this.xb()&&(r("left",0),i+=E(s.wm()).xp().width);for(let c=0;c<this.Xm.length;c++){const o=this.Xm[c],u=o.xp();e!==null&&o.Sp(e,i,n),n+=u.height}i+=s.xp().width,this.Sb()&&(r("right",i),i+=E(s.gm()).xp().width);const l=(c,o,u)=>{E(c==="left"?this.ab.Lm():this.ab.Em()).Sp(E(e),o,u)};if(this.cn.timeScale.visible){const c=this.ab.xp();if(e!==null){let o=0;this.xb()&&(l("left",o,n),o=E(s.wm()).xp().width),this.ab.Sp(e,o,n),o+=c.width,this.Sb()&&l("right",o,n)}n+=c.height}return te({width:i,height:n})}Pb(){let e=0,i=0,n=0;for(const g of this.Xm)this.xb()&&(i=Math.max(i,E(g.wm()).op(),this.cn.leftPriceScale.minimumWidth)),this.Sb()&&(n=Math.max(n,E(g.gm()).op(),this.cn.rightPriceScale.minimumWidth)),e+=g.M_();i=Mo(i),n=Mo(n);const s=this.__,r=this.ho,l=Math.max(s-i-n,0),c=this.cn.timeScale.visible;let o=c?Math.max(this.ab.Wm(),this.cn.timeScale.minimumHeight):0;var u;o=(u=o)+u%2;const h=0+o,d=r<h?0:r-h,f=d/e;let m=0;for(let g=0;g<this.Xm.length;++g){const p=this.Xm[g];p.qp(this.$i.qc()[g]);let w=0,v=0;v=g===this.Xm.length-1?d-m:Math.round(p.M_()*f),w=Math.max(v,2),m+=w,p.cp(te({width:l,height:w})),this.xb()&&p._m(i,"left"),this.Sb()&&p._m(n,"right"),p.fp()&&this.$i.Kc(p.fp(),w)}this.ab.Fm(te({width:c?l:0,height:o}),c?i:0,c?n:0),this.$i.S_(l),this.Gm!==i&&(this.Gm=i),this.Jm!==n&&(this.Jm=n)}hb(e){e?this.Xd.addEventListener("wheel",this.eb,{passive:!1}):this.Xd.removeEventListener("wheel",this.eb)}Rb(e){switch(e.deltaMode){case e.DOM_DELTA_PAGE:return 120;case e.DOM_DELTA_LINE:return 32}return D2?1/window.devicePixelRatio:1}rb(e){if(!(e.deltaX!==0&&this.cn.handleScroll.mouseWheel||e.deltaY!==0&&this.cn.handleScale.mouseWheel))return;const i=this.Rb(e),n=i*e.deltaX/100,s=-i*e.deltaY/100;if(e.cancelable&&e.preventDefault(),s!==0&&this.cn.handleScale.mouseWheel){const r=Math.sign(s)*Math.min(1,Math.abs(s)),l=e.clientX-this.Xd.getBoundingClientRect().left;this.$t().Qc(l,r)}n!==0&&this.cn.handleScroll.mouseWheel&&this.$t().td(-80*n)}mb(e,i){var n;const s=e.jn();s===3&&this.Db(),s!==3&&s!==2||(this.Vb(e),this.Ob(e,i),this.ab.bt(),this.Xm.forEach(r=>{r.Xp()}),((n=this.Qm)===null||n===void 0?void 0:n.jn())===3&&(this.Qm.ts(e),this.Db(),this.Vb(this.Qm),this.Ob(this.Qm,i),e=this.Qm,this.Qm=null)),this.vp(e)}Ob(e,i){for(const n of e.Qn())this.ns(n,i)}Vb(e){const i=this.$i.qc();for(let n=0;n<i.length;n++)e.Hn(n).Wn&&i[n].N_()}ns(e,i){const n=this.$i.St();switch(e.qn){case 0:n.hc();break;case 1:n.lc(e.Vt);break;case 2:n.Gn(e.Vt);break;case 3:n.Jn(e.Vt);break;case 4:n.qu();break;case 5:e.Vt.Qu(i)||n.Jn(e.Vt.tc(i))}}Vc(e){this.Qm!==null?this.Qm.ts(e):this.Qm=e,this.tb||(this.tb=!0,this.Km=window.requestAnimationFrame(i=>{if(this.tb=!1,this.Km=0,this.Qm!==null){const n=this.Qm;this.Qm=null,this.mb(n,i);for(const s of n.Qn())if(s.qn===5&&!s.Vt.Qu(i)){this.$t().Zn(s.Vt);break}}}))}Db(){this.ub()}ub(){const e=this.$i.qc(),i=e.length,n=this.Xm.length;for(let s=i;s<n;s++){const r=De(this.Xm.pop());this.sb.removeChild(r.lp()),r.lm().p(this),r.am().p(this),r.S()}for(let s=n;s<i;s++){const r=new Yc(this,e[s]);r.lm().l(this.Bb.bind(this),this),r.am().l(this.Ab.bind(this),this),this.Xm.push(r),this.sb.insertBefore(r.lp(),this.ab.lp())}for(let s=0;s<i;s++){const r=e[s],l=this.Xm[s];l.fp()!==r?l.qp(r):l.Up()}this.cb(),this.Pb()}Ib(e,i,n){var s;const r=new Map;e!==null&&this.$i.wt().forEach(h=>{const d=h.In().ll(e);d!==null&&r.set(h,d)});let l;if(e!==null){const h=(s=this.$i.St().Ui(e))===null||s===void 0?void 0:s.originalTime;h!==void 0&&(l=h)}const c=this.$t().Wc(),o=c!==null&&c.Hc instanceof Kc?c.Hc:void 0,u=c!==null&&c.Iv!==void 0?c.Iv.gr:void 0;return{zb:l,ee:e??void 0,Lb:i??void 0,Eb:o,Nb:r,Fb:u,Wb:n??void 0}}Bb(e,i,n){this.Vp.m(()=>this.Ib(e,i,n))}Ab(e,i,n){this.Op.m(()=>this.Ib(e,i,n))}lb(e,i,n){this.Rc.m(()=>this.Ib(e,i,n))}cb(){const e=this.cn.timeScale.visible?"":"none";this.ab.lp().style.display=e}xb(){return this.Xm[0].fp().R_().W().visible}Sb(){return this.Xm[0].fp().D_().W().visible}ob(){return"ResizeObserver"in window&&(this.ib=new ResizeObserver(e=>{const i=e.find(n=>n.target===this.Jd);i&&this._b(i.contentRect.width,i.contentRect.height)}),this.ib.observe(this.Jd,{box:"border-box"}),!0)}pb(){this.ib!==null&&this.ib.disconnect(),this.ib=null}}function ja(t){return!!(t.handleScroll.mouseWheel||t.handleScale.mouseWheel)}function A2(t){return function(e){return e.open!==void 0}(t)||function(e){return e.value!==void 0}(t)}function Am(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}function vd(t,e,i,n){const s=i.value,r={ee:e,ot:t,Vt:[s,s,s,s],zb:n};return i.color!==void 0&&(r.V=i.color),r}function I2(t,e,i,n){const s=i.value,r={ee:e,ot:t,Vt:[s,s,s,s],zb:n};return i.lineColor!==void 0&&(r.lt=i.lineColor),i.topColor!==void 0&&(r.Ps=i.topColor),i.bottomColor!==void 0&&(r.Rs=i.bottomColor),r}function O2(t,e,i,n){const s=i.value,r={ee:e,ot:t,Vt:[s,s,s,s],zb:n};return i.topLineColor!==void 0&&(r.Re=i.topLineColor),i.bottomLineColor!==void 0&&(r.De=i.bottomLineColor),i.topFillColor1!==void 0&&(r.ke=i.topFillColor1),i.topFillColor2!==void 0&&(r.ye=i.topFillColor2),i.bottomFillColor1!==void 0&&(r.Ce=i.bottomFillColor1),i.bottomFillColor2!==void 0&&(r.Te=i.bottomFillColor2),r}function F2(t,e,i,n){const s={ee:e,ot:t,Vt:[i.open,i.high,i.low,i.close],zb:n};return i.color!==void 0&&(s.V=i.color),s}function V2(t,e,i,n){const s={ee:e,ot:t,Vt:[i.open,i.high,i.low,i.close],zb:n};return i.color!==void 0&&(s.V=i.color),i.borderColor!==void 0&&(s.Ot=i.borderColor),i.wickColor!==void 0&&(s.Xh=i.wickColor),s}function U2(t,e,i,n,s){const r=De(s)(i),l=Math.max(...r),c=Math.min(...r),o=r[r.length-1],u=[o,l,c,o],h=i,{time:d,color:f}=h;return{ee:e,ot:t,Vt:u,zb:n,$e:Am(h,["time","color"]),V:f}}function hr(t){return t.Vt!==void 0}function xd(t,e){return e.customValues!==void 0&&(t.jb=e.customValues),t}function fi(t){return(e,i,n,s,r,l)=>function(c,o){return o?o(c):(u=c).open===void 0&&u.value===void 0;var u}(n,l)?xd({ot:e,ee:i,zb:s},n):xd(t(e,i,n,s,r),n)}function yd(t){return{Candlestick:fi(V2),Bar:fi(F2),Area:fi(I2),Baseline:fi(O2),Histogram:fi(vd),Line:fi(vd),Custom:fi(U2)}[t]}function wd(t){return{ee:0,Hb:new Map,la:t}}function bd(t,e){if(t!==void 0&&t.length!==0)return{$b:e.key(t[0].ot),Ub:e.key(t[t.length-1].ot)}}function kd(t){let e;return t.forEach(i=>{e===void 0&&(e=i.zb)}),De(e)}class W2{constructor(e){this.qb=new Map,this.Yb=new Map,this.Zb=new Map,this.Xb=[],this.q_=e}S(){this.qb.clear(),this.Yb.clear(),this.Zb.clear(),this.Xb=[]}Kb(e,i){let n=this.qb.size!==0,s=!1;const r=this.Yb.get(e);if(r!==void 0)if(this.Yb.size===1)n=!1,s=!0,this.qb.clear();else for(const o of this.Xb)o.pointData.Hb.delete(e)&&(s=!0);let l=[];if(i.length!==0){const o=i.map(m=>m.time),u=this.q_.createConverterToInternalObj(i),h=yd(e.Qh()),d=e.Ca(),f=e.Ta();l=i.map((m,g)=>{const p=u(m.time),w=this.q_.key(p);let v=this.qb.get(w);v===void 0&&(v=wd(p),this.qb.set(w,v),s=!0);const x=h(p,v.ee,m,o[g],d,f);return v.Hb.set(e,x),x})}n&&this.Gb(),this.Jb(e,l);let c=-1;if(s){const o=[];this.qb.forEach(u=>{o.push({timeWeight:0,time:u.la,pointData:u,originalTime:kd(u.Hb)})}),o.sort((u,h)=>this.q_.key(u.time)-this.q_.key(h.time)),c=this.Qb(o)}return this.tw(e,c,function(o,u,h){const d=bd(o,h),f=bd(u,h);if(d!==void 0&&f!==void 0)return{ta:d.Ub>=f.Ub&&d.$b>=f.$b}}(this.Yb.get(e),r,this.q_))}vd(e){return this.Kb(e,[])}iw(e,i){const n=i;(function(p){p.zb===void 0&&(p.zb=p.time)})(n),this.q_.preprocessData(i);const s=this.q_.createConverterToInternalObj([i])(i.time),r=this.Zb.get(e);if(r!==void 0&&this.q_.key(s)<this.q_.key(r))throw new Error(`Cannot update oldest data, last time=${r}, new time=${s}`);let l=this.qb.get(this.q_.key(s));const c=l===void 0;l===void 0&&(l=wd(s),this.qb.set(this.q_.key(s),l));const o=yd(e.Qh()),u=e.Ca(),h=e.Ta(),d=o(s,l.ee,i,n.zb,u,h);l.Hb.set(e,d),this.nw(e,d);const f={ta:hr(d)};if(!c)return this.tw(e,-1,f);const m={timeWeight:0,time:l.la,pointData:l,originalTime:kd(l.Hb)},g=Rs(this.Xb,this.q_.key(m.time),(p,w)=>this.q_.key(p.time)<w);this.Xb.splice(g,0,m);for(let p=g;p<this.Xb.length;++p)Sa(this.Xb[p].pointData,p);return this.q_.fillWeightsForPoints(this.Xb,g),this.tw(e,g,f)}nw(e,i){let n=this.Yb.get(e);n===void 0&&(n=[],this.Yb.set(e,n));const s=n.length!==0?n[n.length-1]:null;s===null||this.q_.key(i.ot)>this.q_.key(s.ot)?hr(i)&&n.push(i):hr(i)?n[n.length-1]=i:n.splice(-1,1),this.Zb.set(e,i.ot)}Jb(e,i){i.length!==0?(this.Yb.set(e,i.filter(hr)),this.Zb.set(e,i[i.length-1].ot)):(this.Yb.delete(e),this.Zb.delete(e))}Gb(){for(const e of this.Xb)e.pointData.Hb.size===0&&this.qb.delete(this.q_.key(e.time))}Qb(e){let i=-1;for(let n=0;n<this.Xb.length&&n<e.length;++n){const s=this.Xb[n],r=e[n];if(this.q_.key(s.time)!==this.q_.key(r.time)){i=n;break}r.timeWeight=s.timeWeight,Sa(r.pointData,n)}if(i===-1&&this.Xb.length!==e.length&&(i=Math.min(this.Xb.length,e.length)),i===-1)return-1;for(let n=i;n<e.length;++n)Sa(e[n].pointData,n);return this.q_.fillWeightsForPoints(e,i),this.Xb=e,i}sw(){if(this.Yb.size===0)return null;let e=0;return this.Yb.forEach(i=>{i.length!==0&&(e=Math.max(e,i[i.length-1].ee))}),e}tw(e,i,n){const s={ew:new Map,St:{Eu:this.sw()}};if(i!==-1)this.Yb.forEach((r,l)=>{s.ew.set(l,{$e:r,rw:l===e?n:void 0})}),this.Yb.has(e)||s.ew.set(e,{$e:[],rw:n}),s.St.hw=this.Xb,s.St.lw=i;else{const r=this.Yb.get(e);s.ew.set(e,{$e:r||[],rw:n})}return s}}function Sa(t,e){t.ee=e,t.Hb.forEach(i=>{i.ee=e})}function Jc(t){const e={value:t.Vt[3],time:t.zb};return t.jb!==void 0&&(e.customValues=t.jb),e}function jd(t){const e=Jc(t);return t.V!==void 0&&(e.color=t.V),e}function H2(t){const e=Jc(t);return t.lt!==void 0&&(e.lineColor=t.lt),t.Ps!==void 0&&(e.topColor=t.Ps),t.Rs!==void 0&&(e.bottomColor=t.Rs),e}function q2(t){const e=Jc(t);return t.Re!==void 0&&(e.topLineColor=t.Re),t.De!==void 0&&(e.bottomLineColor=t.De),t.ke!==void 0&&(e.topFillColor1=t.ke),t.ye!==void 0&&(e.topFillColor2=t.ye),t.Ce!==void 0&&(e.bottomFillColor1=t.Ce),t.Te!==void 0&&(e.bottomFillColor2=t.Te),e}function Im(t){const e={open:t.Vt[0],high:t.Vt[1],low:t.Vt[2],close:t.Vt[3],time:t.zb};return t.jb!==void 0&&(e.customValues=t.jb),e}function K2(t){const e=Im(t);return t.V!==void 0&&(e.color=t.V),e}function X2(t){const e=Im(t),{V:i,Ot:n,Xh:s}=t;return i!==void 0&&(e.color=i),n!==void 0&&(e.borderColor=n),s!==void 0&&(e.wickColor=s),e}function Po(t){return{Area:H2,Line:jd,Baseline:q2,Histogram:jd,Bar:K2,Candlestick:X2,Custom:Q2}[t]}function Q2(t){const e=t.zb;return Object.assign(Object.assign({},t.$e),{time:e})}const Y2={vertLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},horzLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},mode:1},G2={vertLines:{color:"#D6DCDE",style:0,visible:!0},horzLines:{color:"#D6DCDE",style:0,visible:!0}},J2={background:{type:"solid",color:"#FFFFFF"},textColor:"#191919",fontSize:12,fontFamily:Fc,attributionLogo:!0},Na={autoScale:!0,mode:0,invertScale:!1,alignLabels:!0,borderVisible:!0,borderColor:"#2B2B43",entireTextOnly:!1,visible:!1,ticksVisible:!1,scaleMargins:{bottom:.1,top:.2},minimumWidth:0},Z2={rightOffset:0,barSpacing:6,minBarSpacing:.5,fixLeftEdge:!1,fixRightEdge:!1,lockVisibleTimeRangeOnResize:!1,rightBarStaysOnScroll:!1,borderVisible:!0,borderColor:"#2B2B43",visible:!0,timeVisible:!1,secondsVisible:!0,shiftVisibleRangeOnNewBar:!0,allowShiftVisibleRangeOnWhitespaceReplacement:!1,ticksVisible:!1,uniformDistribution:!1,minimumHeight:0,allowBoldLabels:!0},ew={color:"rgba(0, 0, 0, 0)",visible:!1,fontSize:48,fontFamily:Fc,fontStyle:"",text:"",horzAlign:"center",vertAlign:"center"};function Sd(){return{width:0,height:0,autoSize:!1,layout:J2,crosshair:Y2,grid:G2,overlayPriceScales:Object.assign({},Na),leftPriceScale:Object.assign(Object.assign({},Na),{visible:!1}),rightPriceScale:Object.assign(Object.assign({},Na),{visible:!0}),timeScale:Z2,watermark:ew,localization:{locale:vn?navigator.language:"",dateFormat:"dd MMM 'yy"},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!0},handleScale:{axisPressedMouseMove:{time:!0,price:!0},axisDoubleClickReset:{time:!0,price:!0},mouseWheel:!0,pinch:!0},kineticScroll:{mouse:!1,touch:!0},trackingMode:{exitMode:1}}}class tw{constructor(e,i){this.aw=e,this.ow=i}applyOptions(e){this.aw.$t().$c(this.ow,e)}options(){return this.Li().W()}width(){return zl(this.ow)?this.aw.Mb(this.ow):0}Li(){return E(this.aw.$t().Uc(this.ow)).Dt}}function Nd(t,e,i){const n=Am(t,["time","originalTime"]),s=Object.assign({time:e},n);return i!==void 0&&(s.originalTime=i),s}const iw={color:"#FF0000",price:0,lineStyle:2,lineWidth:1,lineVisible:!0,axisLabelVisible:!0,title:"",axisLabelColor:"",axisLabelTextColor:""};class nw{constructor(e){this.Nh=e}applyOptions(e){this.Nh.$h(e)}options(){return this.Nh.W()}_w(){return this.Nh}}class sw{constructor(e,i,n,s,r){this.uw=new pe,this.Es=e,this.cw=i,this.dw=n,this.q_=r,this.fw=s}S(){this.uw.S()}priceFormatter(){return this.Es.ba()}priceToCoordinate(e){const i=this.Es.Ct();return i===null?null:this.Es.Dt().Rt(e,i.Vt)}coordinateToPrice(e){const i=this.Es.Ct();return i===null?null:this.Es.Dt().pn(e,i.Vt)}barsInLogicalRange(e){if(e===null)return null;const i=new an(new Zn(e.from,e.to)).lu(),n=this.Es.In();if(n.Ni())return null;const s=n.ll(i.Os(),1),r=n.ll(i.ui(),-1),l=E(n.el()),c=E(n.An());if(s!==null&&r!==null&&s.ee>r.ee)return{barsBefore:e.from-l,barsAfter:c-e.to};const o={barsBefore:s===null||s.ee===l?e.from-l:s.ee-l,barsAfter:r===null||r.ee===c?c-e.to:c-r.ee};return s!==null&&r!==null&&(o.from=s.zb,o.to=r.zb),o}setData(e){this.q_,this.Es.Qh(),this.cw.pw(this.Es,e),this.mw("full")}update(e){this.Es.Qh(),this.cw.bw(this.Es,e),this.mw("update")}dataByIndex(e,i){const n=this.Es.In().ll(e,i);return n===null?null:Po(this.seriesType())(n)}data(){const e=Po(this.seriesType());return this.Es.In().ne().map(i=>e(i))}subscribeDataChanged(e){this.uw.l(e)}unsubscribeDataChanged(e){this.uw.v(e)}setMarkers(e){this.q_;const i=e.map(n=>Nd(n,this.q_.convertHorzItemToInternal(n.time),n.time));this.Es.na(i)}markers(){return this.Es.sa().map(e=>Nd(e,e.originalTime,void 0))}applyOptions(e){this.Es.$h(e)}options(){return zt(this.Es.W())}priceScale(){return this.dw.priceScale(this.Es.Dt().Pa())}createPriceLine(e){const i=pt(zt(iw),e),n=this.Es.ea(i);return new nw(n)}removePriceLine(e){this.Es.ra(e._w())}seriesType(){return this.Es.Qh()}attachPrimitive(e){this.Es.ka(e),e.attached&&e.attached({chart:this.fw,series:this,requestUpdate:()=>this.Es.$t().Kl()})}detachPrimitive(e){this.Es.ya(e),e.detached&&e.detached()}mw(e){this.uw.M()&&this.uw.m(e)}}class rw{constructor(e,i,n){this.ww=new pe,this.mu=new pe,this.Om=new pe,this.$i=e,this.yl=e.St(),this.ab=i,this.yl.nc().l(this.gw.bind(this)),this.yl.sc().l(this.Mw.bind(this)),this.ab.Nm().l(this.xw.bind(this)),this.q_=n}S(){this.yl.nc().p(this),this.yl.sc().p(this),this.ab.Nm().p(this),this.ww.S(),this.mu.S(),this.Om.S()}scrollPosition(){return this.yl.Hu()}scrollToPosition(e,i){i?this.yl.Ju(e,1e3):this.$i.Jn(e)}scrollToRealTime(){this.yl.Gu()}getVisibleRange(){const e=this.yl.Vu();return e===null?null:{from:e.from.originalTime,to:e.to.originalTime}}setVisibleRange(e){const i={from:this.q_.convertHorzItemToInternal(e.from),to:this.q_.convertHorzItemToInternal(e.to)},n=this.yl.Iu(i);this.$i.pd(n)}getVisibleLogicalRange(){const e=this.yl.Du();return e===null?null:{from:e.Os(),to:e.ui()}}setVisibleLogicalRange(e){ri(e.from<=e.to,"The from index cannot be after the to index."),this.$i.pd(e)}resetTimeScale(){this.$i.Kn()}fitContent(){this.$i.hc()}logicalToCoordinate(e){const i=this.$i.St();return i.Ni()?null:i.It(e)}coordinateToLogical(e){return this.yl.Ni()?null:this.yl.Nu(e)}timeToCoordinate(e){const i=this.q_.convertHorzItemToInternal(e),n=this.yl.Va(i,!1);return n===null?null:this.yl.It(n)}coordinateToTime(e){const i=this.$i.St(),n=i.Nu(e),s=i.Ui(n);return s===null?null:s.originalTime}width(){return this.ab.um().width}height(){return this.ab.um().height}subscribeVisibleTimeRangeChange(e){this.ww.l(e)}unsubscribeVisibleTimeRangeChange(e){this.ww.v(e)}subscribeVisibleLogicalRangeChange(e){this.mu.l(e)}unsubscribeVisibleLogicalRangeChange(e){this.mu.v(e)}subscribeSizeChange(e){this.Om.l(e)}unsubscribeSizeChange(e){this.Om.v(e)}applyOptions(e){this.yl.$h(e)}options(){return Object.assign(Object.assign({},zt(this.yl.W())),{barSpacing:this.yl.le()})}gw(){this.ww.M()&&this.ww.m(this.getVisibleRange())}Mw(){this.mu.M()&&this.mu.m(this.getVisibleLogicalRange())}xw(e){this.Om.m(e.width,e.height)}}function lw(t){if(t===void 0||t.type==="custom")return;const e=t;e.minMove!==void 0&&e.precision===void 0&&(e.precision=function(i){if(i>=1)return 0;let n=0;for(;n<8;n++){const s=Math.round(i);if(Math.abs(s-i)<1e-8)return n;i*=10}return n}(e.minMove))}function Cd(t){return function(e){if(ir(e.handleScale)){const n=e.handleScale;e.handleScale={axisDoubleClickReset:{time:n,price:n},axisPressedMouseMove:{time:n,price:n},mouseWheel:n,pinch:n}}else if(e.handleScale!==void 0){const{axisPressedMouseMove:n,axisDoubleClickReset:s}=e.handleScale;ir(n)&&(e.handleScale.axisPressedMouseMove={time:n,price:n}),ir(s)&&(e.handleScale.axisDoubleClickReset={time:s,price:s})}const i=e.handleScroll;ir(i)&&(e.handleScroll={horzTouchDrag:i,vertTouchDrag:i,mouseWheel:i,pressedMouseMove:i})}(t),t}class aw{constructor(e,i,n){this.Sw=new Map,this.kw=new Map,this.yw=new pe,this.Cw=new pe,this.Tw=new pe,this.Pw=new W2(i);const s=n===void 0?zt(Sd()):pt(zt(Sd()),Cd(n));this.q_=i,this.aw=new B2(e,s,i),this.aw.lm().l(l=>{this.yw.M()&&this.yw.m(this.Rw(l()))},this),this.aw.am().l(l=>{this.Cw.M()&&this.Cw.m(this.Rw(l()))},this),this.aw.Xc().l(l=>{this.Tw.M()&&this.Tw.m(this.Rw(l()))},this);const r=this.aw.$t();this.Dw=new rw(r,this.aw.fb(),this.q_)}remove(){this.aw.lm().p(this),this.aw.am().p(this),this.aw.Xc().p(this),this.Dw.S(),this.aw.S(),this.Sw.clear(),this.kw.clear(),this.yw.S(),this.Cw.S(),this.Tw.S(),this.Pw.S()}resize(e,i,n){this.autoSizeActive()||this.aw._b(e,i,n)}addCustomSeries(e,i){const n=Gi(e),s=Object.assign(Object.assign({},pm),n.defaultOptions());return this.Vw("Custom",s,i,n)}addAreaSeries(e){return this.Vw("Area",W1,e)}addBaselineSeries(e){return this.Vw("Baseline",H1,e)}addBarSeries(e){return this.Vw("Bar",V1,e)}addCandlestickSeries(e={}){return function(i){i.borderColor!==void 0&&(i.borderUpColor=i.borderColor,i.borderDownColor=i.borderColor),i.wickColor!==void 0&&(i.wickUpColor=i.wickColor,i.wickDownColor=i.wickColor)}(e),this.Vw("Candlestick",F1,e)}addHistogramSeries(e){return this.Vw("Histogram",q1,e)}addLineSeries(e){return this.Vw("Line",U1,e)}removeSeries(e){const i=De(this.Sw.get(e)),n=this.Pw.vd(i);this.aw.$t().vd(i),this.Ow(n),this.Sw.delete(e),this.kw.delete(i)}pw(e,i){this.Ow(this.Pw.Kb(e,i))}bw(e,i){this.Ow(this.Pw.iw(e,i))}subscribeClick(e){this.yw.l(e)}unsubscribeClick(e){this.yw.v(e)}subscribeCrosshairMove(e){this.Tw.l(e)}unsubscribeCrosshairMove(e){this.Tw.v(e)}subscribeDblClick(e){this.Cw.l(e)}unsubscribeDblClick(e){this.Cw.v(e)}priceScale(e){return new tw(this.aw,e)}timeScale(){return this.Dw}applyOptions(e){this.aw.$h(Cd(e))}options(){return this.aw.W()}takeScreenshot(){return this.aw.wb()}autoSizeActive(){return this.aw.kb()}chartElement(){return this.aw.yb()}paneSize(){const e=this.aw.Tb();return{height:e.height,width:e.width}}setCrosshairPosition(e,i,n){const s=this.Sw.get(n);if(s===void 0)return;const r=this.aw.$t().dr(s);r!==null&&this.aw.$t().ad(e,i,r)}clearCrosshairPosition(){this.aw.$t().od(!0)}Vw(e,i,n={},s){lw(n.priceFormat);const r=pt(zt(mm),zt(i),n),l=this.aw.$t().dd(e,r,s),c=new sw(l,this,this,this,this.q_);return this.Sw.set(c,l),this.kw.set(l,c),c}Ow(e){const i=this.aw.$t();i._d(e.St.Eu,e.St.hw,e.St.lw),e.ew.forEach((n,s)=>s.J(n.$e,n.rw)),i.Wu()}Bw(e){return De(this.kw.get(e))}Rw(e){const i=new Map;e.Nb.forEach((s,r)=>{const l=r.Qh(),c=Po(l)(s);if(l!=="Custom")ri(A2(c));else{const o=r.Ta();ri(!o||o(c)===!1)}i.set(this.Bw(r),c)});const n=e.Eb!==void 0&&this.kw.has(e.Eb)?this.Bw(e.Eb):void 0;return{time:e.zb,logical:e.ee,point:e.Lb,hoveredSeries:n,hoveredObjectId:e.Fb,seriesData:i,sourceEvent:e.Wb}}}function ow(t,e,i){let n;if(Ls(t)){const r=document.getElementById(t);ri(r!==null,`Cannot find element in DOM with id=${t}`),n=r}else n=t;const s=new aw(n,e,i);return e.setOptions(s.options()),s}function cw(t,e){return ow(t,new hd,hd.Id(e))}Object.assign(Object.assign({},mm),pm);const dr=[{label:"1m",value:"1m",tradeSeconds:60},{label:"5m",value:"5m",tradeSeconds:300},{label:"15m",value:"15m",tradeSeconds:900},{label:"1h",value:"1h",tradeSeconds:3600},{label:"4h",value:"4h",tradeSeconds:14400},{label:"1D",value:"1D",tradeSeconds:86400}],uw=[1,2,3,5,10],hw=[50,100,250,500];function Ed(t){return Number(t||Math.floor(Date.now()/1e3))}function zd(t){return typeof t=="number"&&Number.isFinite(t)&&t>0}function Md(t){const e=new Set;return t.filter(i=>{const n=`${String(i.id||"")}:${String(i.time)}:${i.text||""}`;return e.has(n)?!1:(e.add(n),!0)})}function Ca(t){const e=Math.floor(t/86400),i=Math.floor(t%86400/3600),n=Math.floor(t%3600/60),s=t%60;return e>0?`${e}d ${i}h ${n}m`:i>0?`${i}h ${n}m ${s}s`:n>0?`${n}m ${s}s`:`${s}s`}function dw(){var Nn,Cn;const{user:t}=hi(),{btcPrice:e,btcChange24h:i,btcHigh24h:n,btcLow24h:s,trades:r,activeTrade:l,lastTradeResult:c,startTrade:o,clearTradeResult:u}=$s(),h=k.useRef(null),d=k.useRef(null),f=k.useRef(null),m=k.useRef(null),g=k.useRef(null),[p,w]=k.useState("1m"),[v,x]=k.useState(null),[y,b]=k.useState(2),[j,M]=k.useState("100"),[_,T]=k.useState(()=>Date.now()),[D,B]=k.useState([]),[Z,ze]=k.useState(!0),[ke,ye]=k.useState(null),V=(Nn=D[D.length-1])==null?void 0:Nn.candle,ce=(V==null?void 0:V.close)??e,Le=((Cn=D[D.length-1])==null?void 0:Cn.volume.value)??0,L=v?parseFloat(j||"0")*y:0,O=parseFloat(j||"0"),I=dr.find(R=>R.value===p)??dr[0],C=dr.find(R=>R.value===(l==null?void 0:l.timeframeValue))??I,S=!!(l&&t&&l.userEmail===t.email),P=(t==null?void 0:t.verificationStatus)==="approved",A=l?Math.max(0,Math.ceil((new Date(l.endTime).getTime()-_)/1e3)):0,N=l?im({entryPrice:l.entryPrice,exitPrice:ce,amount:l.amount,leverageValue:l.leverage,tradeDirection:l.direction}):null,U=k.useMemo(()=>r.filter(R=>R.userEmail===(t==null?void 0:t.email)),[r,t==null?void 0:t.email]),H=k.useMemo(()=>{const R=U.flatMap(K=>{const G=[];return zd(K.entryTime)&&G.push({id:`entry-${K.id}`,time:K.entryTime,position:K.direction==="up"?"belowBar":"aboveBar",shape:K.direction==="up"?"arrowUp":"arrowDown",color:K.direction==="up"?"#0ecb81":"#f6465d",text:`${K.direction==="up"?"BUY":"SELL"} $${de(K.amount)} ${K.leverage}x`}),zd(K.exitTime)&&G.push({id:`exit-${K.id}`,time:K.exitTime,position:K.status==="won"?"aboveBar":"belowBar",shape:K.status==="won"?"circle":"square",color:K.status==="won"?"#0ecb81":"#f6465d",text:`${K.status==="won"?"WIN":K.outcomeReason==="liquidation"?"LIQ":"LOSS"} ${K.pnl&&K.pnl>=0?"+":"-"}$${de(Math.abs(K.pnl||0))}`}),G});return!l||l.userEmail!==(t==null?void 0:t.email)?Md(R):Md([...R,{id:`live-${l.id}`,time:l.entryTime,position:l.direction==="up"?"belowBar":"aboveBar",shape:l.direction==="up"?"arrowUp":"arrowDown",color:l.direction==="up"?"#0ecb81":"#f6465d",text:`${l.direction==="up"?"BUY":"SELL"} $${de(l.amount)} ${l.leverage}x`}])},[l,U,t==null?void 0:t.email]);k.useEffect(()=>{if(!h.current)return;let R;try{R=cw(h.current,{layout:{background:{color:"#0b0f15"},textColor:"#8ea0b7"},grid:{vertLines:{color:"#19202c"},horzLines:{color:"#19202c"}},crosshair:{mode:1},rightPriceScale:{borderColor:"#1e2735"},timeScale:{borderColor:"#1e2735",timeVisible:!0,secondsVisible:p==="1m"}});const G=R.addCandlestickSeries({upColor:"#0ecb81",downColor:"#f6465d",borderUpColor:"#0ecb81",borderDownColor:"#f6465d",wickUpColor:"#0ecb81",wickDownColor:"#f6465d"}),je=R.addHistogramSeries({priceFormat:{type:"volume"},priceScaleId:""});je.priceScale().applyOptions({scaleMargins:{top:.82,bottom:0}}),d.current=R,f.current=G,m.current=je,ye(null)}catch(G){console.error("Trade chart failed to initialize:",G),ye("Live chart unavailable");return}const K=()=>{if(h.current&&d.current)try{d.current.applyOptions({width:h.current.clientWidth,height:h.current.clientHeight})}catch(G){console.error("Trade chart resize failed:",G)}};return window.addEventListener("resize",K),K(),()=>{window.removeEventListener("resize",K);try{g.current=null,R.remove()}catch{}}},[]),k.useEffect(()=>{var R;try{(R=d.current)==null||R.applyOptions({timeScale:{secondsVisible:p==="1m"}})}catch(K){console.error("Trade chart option update failed:",K),ye("Live chart unavailable")}},[p]),k.useEffect(()=>{if(!f.current||!m.current)return;const R=D.map(G=>G.candle),K=D.map(G=>G.volume);try{f.current.setData(R),m.current.setData(K),ye(null)}catch(G){console.error("Trade chart data update failed:",G),ye("Live chart unavailable")}},[D]),k.useEffect(()=>{if(f.current)try{f.current.setMarkers(H)}catch(R){console.error("Trade chart marker update failed:",R)}},[H]),k.useEffect(()=>{if(f.current){if(g.current){try{f.current.removePriceLine(g.current)}catch{}g.current=null}if(!(!S||!l)){try{g.current=f.current.createPriceLine({price:l.entryPrice,color:l.direction==="up"?"#0ecb81":"#f6465d",lineWidth:2,lineStyle:2,axisLabelVisible:!0,title:`${l.direction==="up"?"UP":"DOWN"} $${de(l.amount)}`})}catch(R){console.error("Trade entry line failed:",R)}return()=>{if(!(!f.current||!g.current)){try{f.current.removePriceLine(g.current)}catch{}g.current=null}}}}},[l,S]),k.useEffect(()=>{let R=!0;return(async(G=!1)=>{G&&ze(!0);try{const je=await Dx(p,120);R&&je.length>0&&B(je)}catch{R&&B(je=>je.length>0?je:Bx(p,e,120))}finally{R&&G&&ze(!1)}})(!0),()=>{R=!1}},[p,e]),k.useEffect(()=>{const R=new WebSocket("wss://ws-feed.exchange.coinbase.com");return R.addEventListener("open",()=>{R.send(JSON.stringify({type:"subscribe",product_ids:["BTC-USD"],channels:["ticker"]}))}),R.addEventListener("message",K=>{try{const G=JSON.parse(K.data);if(G.type!=="ticker"||!G.price)return;const je=Number(G.price),Ym=G.time?Math.floor(new Date(G.time).getTime()/1e3):Math.floor(Date.now()/1e3),Zc=Lx(p),Tl=Math.floor(Ym/Zc)*Zc;B(Pl=>{if(Pl.length===0)return Pl;const di=[...Pl],Je=di[di.length-1],Gm=Ed(Je.candle.time);return Tl>Gm?(di.push({candle:{time:Tl,open:Je.candle.close,high:Math.max(Je.candle.close,je),low:Math.min(Je.candle.close,je),close:je},volume:{time:Tl,value:Math.max(Je.volume.value*.35,32),color:je>=Je.candle.close?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}}),di.slice(-120)):(di[di.length-1]={candle:{...Je.candle,high:Math.max(Je.candle.high,je),low:Math.min(Je.candle.low,je),close:je},volume:{...Je.volume,value:Je.volume.value+.75,color:je>=Je.candle.open?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}},di)})}catch{}}),()=>{R.close()}},[p]),k.useEffect(()=>{if(!S)return;const R=window.setInterval(()=>T(Date.now()),1e3);return()=>window.clearInterval(R)},[S]);const se=()=>{if(!v||!j||S)return;if(!P){alert("Verify your account in Profile before trading.");return}const R=parseFloat(j);if(R>((t==null?void 0:t.usdBalance)||0)){alert("Insufficient balance");return}const K=wh(ce,y,v),G=Ed(V==null?void 0:V.time);o({id:`trade-${Date.now()}`,pair:"BTC/USD",direction:v,amount:R,leverage:y,entryPrice:ce,liquidationPrice:K,timeframe:I.label,timeframeValue:I.value,tradeSeconds:I.tradeSeconds,entryTime:G,openedAt:new Date().toISOString(),endTime:new Date(Date.now()+I.tradeSeconds*1e3).toISOString(),userEmail:(t==null?void 0:t.email)||""})},ge=()=>{x(null),u()},He=k.useMemo(()=>v==="up"?"buy":v==="down"?"sell":"neutral",[v]);return a.jsxs("div",{className:"trade-shell",children:[a.jsx("style",{children:`
        .trade-shell {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          gap: 20px;
          min-height: calc(100vh - 180px);
        }
        .trade-card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.92));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
        }
        .chart-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          min-height: 680px;
        }
        .chart-top {
          position: sticky;
          top: 0;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 14px 18px 12px;
          background: rgba(12, 16, 24, 0.94);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          flex-wrap: nowrap;
        }
        .pair-block {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }
        .pair-inline {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 10px;
          min-width: 0;
          flex-wrap: nowrap;
        }
        .pair-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 800;
          color: #111;
        }
        .pair-copy h1 {
          font-size: 18px;
          font-weight: 800;
          color: #f3f6fb;
          letter-spacing: -0.03em;
        }
        .pair-copy p {
          color: #8fa2ba;
          font-size: 11px;
          margin-top: 2px;
        }
        .pair-stats {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: nowrap;
        }
        .pair-price {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(18px, 2.2vw, 26px);
          font-weight: 800;
          color: #f3f6fb;
        }
        .pair-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #0ecb81;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .pair-change {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 12px;
        }
        .pair-change.up {
          color: #0ecb81;
        }
        .pair-change.down {
          color: #f6465d;
        }
        .timeframe-row {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: nowrap;
          overflow-x: auto;
        }
        .tf-btn {
          min-height: 34px;
          padding: 0 12px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #8fa2ba;
          font-weight: 700;
          font-size: 12px;
        }
        .tf-btn.active {
          background: rgba(247, 147, 26, 0.15);
          border-color: rgba(247, 147, 26, 0.34);
          color: #f6b353;
        }
        .market-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          padding: 0 22px 18px;
        }
        .live-trade-overlay {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          z-index: 3;
          padding: 16px 18px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          background: rgba(14, 18, 26, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
        }
        .live-trade-overlay.buy {
          background: rgba(14, 203, 129, 0.12);
          border-color: rgba(14, 203, 129, 0.22);
        }
        .live-trade-overlay.sell {
          background: rgba(246, 70, 93, 0.12);
          border-color: rgba(246, 70, 93, 0.22);
        }
        .live-trade-main {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .live-trade-badge {
          min-height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #fff;
        }
        .live-trade-badge.buy {
          background: #0ecb81;
          color: #06120d;
        }
        .live-trade-badge.sell {
          background: #f6465d;
        }
        .live-trade-copy {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .live-trade-copy strong {
          color: #eef3fb;
          font-size: 15px;
        }
        .live-trade-copy span {
          color: #8fa2ba;
          font-size: 12px;
        }
        .live-trade-stats {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }
        .live-trade-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .live-trade-stat-label {
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .live-trade-stat-value {
          color: #eef3fb;
          font-size: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
        }
        .strip-item {
          padding: 0;
          border-radius: 0;
          background: transparent;
        }
        .strip-label {
          color: #7f8ea3;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 6px;
        }
        .strip-value {
          color: #eef3fb;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 14px;
        }
        .chart-box {
          position: relative;
          flex: 1;
          min-height: 420px;
          padding: 0 14px 14px;
        }
        .chart-canvas {
          width: 100%;
          height: 100%;
          min-height: 420px;
        }
        .chart-loading {
          position: absolute;
          top: 18px;
          right: 18px;
          left: auto;
          bottom: auto;
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: #8fa2ba;
          font-size: 12px;
        }
        .chart-fallback {
          position: absolute;
          inset: 18px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(8, 12, 18, 0.78);
          color: #c8d2df;
          text-align: center;
          padding: 24px;
        }
        .chart-fallback strong {
          font-size: 18px;
          color: #eef3fb;
        }
        .trade-panel {
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .panel-title {
          font-size: 22px;
          font-weight: 800;
          color: #f3f6fb;
        }
        .ticket-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 20px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .ticket-topbar-copy strong {
          display: block;
          color: #eef3fb;
          font-size: 14px;
          font-weight: 800;
        }
        .ticket-topbar-copy span {
          display: block;
          margin-top: 4px;
          color: #7f8ea3;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .ticket-topbar-value {
          color: #0ecb81;
          font-family: 'JetBrains Mono', monospace;
          font-size: 26px;
          font-weight: 800;
        }
        .ticket-pill-row {
          display: grid;
          grid-template-columns: 1.25fr 0.8fr 0.8fr;
          gap: 10px;
        }
        .ticket-pill {
          min-height: 42px;
          padding: 0 14px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #d7dfeb;
          font-size: 13px;
          font-weight: 700;
        }
        .ticket-pill.emphasis {
          color: #f6b353;
          border-color: rgba(247, 147, 26, 0.28);
          background: rgba(247, 147, 26, 0.08);
        }
        .balance-box,
        .trade-box {
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.03);
          padding: 18px;
        }
        .balance-box .label,
        .trade-label {
          color: #7f8ea3;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }
        .balance-box .value {
          color: #eef3fb;
          font-size: 30px;
          font-weight: 800;
          font-family: 'JetBrains Mono', monospace;
        }
        .balance-box .sub {
          color: #90a0b6;
          font-size: 13px;
          margin-top: 6px;
        }
        .direction-grid,
        .preset-grid,
        .leverage-grid {
          display: grid;
          gap: 10px;
        }
        .direction-grid {
          grid-template-columns: repeat(2, 1fr);
          padding: 4px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .preset-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .leverage-grid {
          grid-template-columns: repeat(5, 1fr);
        }
        .trade-form-grid {
          display: grid;
          gap: 12px;
        }
        .trade-field {
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.026);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .trade-field-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }
        .trade-field-unit {
          color: #8ea0b7;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .dir-btn,
        .preset-btn,
        .lev-btn {
          min-height: 46px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          color: #d7dfeb;
          font-weight: 700;
        }
        .dir-btn.buy.active,
        .dir-btn.buy:hover {
          background: linear-gradient(135deg, rgba(14, 203, 129, 0.9), rgba(98, 243, 189, 0.92));
          border-color: transparent;
          color: #072117;
        }
        .dir-btn.sell.active,
        .dir-btn.sell:hover {
          background: linear-gradient(135deg, rgba(246, 70, 93, 0.92), rgba(255, 122, 141, 0.92));
          border-color: transparent;
          color: #fff3f5;
        }
        .preset-btn.active,
        .lev-btn.active {
          background: rgba(247, 147, 26, 0.16);
          border-color: rgba(247, 147, 26, 0.4);
          color: #f6b353;
        }
        .amount-input {
          width: 100%;
          min-height: 50px;
          border-radius: 14px;
          background: rgba(6, 10, 15, 0.24);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 0 16px;
          color: #eef3fb;
          font-family: 'JetBrains Mono', monospace;
          font-size: 20px;
          font-weight: 700;
        }
        .amount-input:focus {
          outline: none;
          border-color: rgba(247, 147, 26, 0.45);
        }
        .info-list {
          display: grid;
          gap: 12px;
        }
        .info-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: #d7dfeb;
          font-size: 14px;
        }
        .info-row span:first-child {
          color: #7f8ea3;
        }
        .info-row strong {
          font-family: 'JetBrains Mono', monospace;
        }
        .trade-submit {
          min-height: 56px;
          border: none;
          border-radius: 20px;
          font-size: 16px;
          font-weight: 800;
          color: #111;
        }
        .trade-submit.neutral {
          background: linear-gradient(135deg, #3478f6, #5a93f8);
          color: #fff;
        }
        .trade-submit.buy {
          background: linear-gradient(135deg, #0ecb81, #62f3bd);
        }
        .trade-submit.sell {
          background: linear-gradient(135deg, #f6465d, #ff7a8d);
          color: #fff;
        }
        .trade-submit:disabled {
          opacity: 0.55;
        }
        .result-card {
          padding: 18px;
          border-radius: 22px;
          text-align: center;
        }
        .verify-warning {
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(247, 147, 26, 0.14);
          border: 1px solid rgba(247, 147, 26, 0.24);
          color: #f6d79a;
          line-height: 1.6;
          font-size: 13px;
        }
        .result-card.win {
          background: rgba(14, 203, 129, 0.14);
          border: 1px solid rgba(14, 203, 129, 0.24);
        }
        .result-card.loss {
          background: rgba(246, 70, 93, 0.14);
          border: 1px solid rgba(246, 70, 93, 0.24);
        }
        .result-value {
          font-size: 30px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 800;
          margin: 10px 0 14px;
        }
        .recent-list {
          display: grid;
          gap: 10px;
        }
        .recent-row {
          display: grid;
          grid-template-columns: 1.15fr 0.8fr 0.8fr 0.9fr;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          color: #d7dfeb;
          font-size: 13px;
          align-items: center;
        }
        .recent-cell {
          min-width: 0;
        }
        .recent-value {
          white-space: nowrap;
        }
        .recent-pair {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }
        .recent-pair-name {
          white-space: nowrap;
        }
        .recent-dir {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        @media (max-width: 1180px) {
          .trade-shell {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 780px) {
          .chart-top,
          .market-strip,
          .trade-panel {
            padding-left: 16px;
            padding-right: 16px;
          }
          .chart-top {
            gap: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .pair-block {
            gap: 8px;
          }
          .pair-inline {
            gap: 4px;
            flex-wrap: nowrap;
          }
          .pair-icon {
            width: 32px;
            height: 32px;
            border-radius: 10px;
            font-size: 17px;
          }
          .live-trade-overlay {
            left: 18px;
            right: 18px;
            bottom: 18px;
            flex-direction: column;
            align-items: flex-start;
          }
          .live-trade-stats {
            width: 100%;
            justify-content: space-between;
            gap: 12px;
          }
          .market-strip {
            display: flex;
            flex-wrap: nowrap;
            gap: 14px;
            overflow-x: auto;
            padding-bottom: 10px;
          }
          .strip-item {
            flex: 0 0 auto;
          }
          .pair-copy h1 {
            font-size: 15px;
          }
          .pair-copy p {
            display: none;
          }
          .pair-stats {
            width: auto;
            gap: 8px;
            flex-wrap: nowrap;
          }
          .pair-price {
            font-size: 16px;
          }
          .pair-status {
            font-size: 10px;
          }
          .pair-change {
            font-size: 10px;
          }
          .timeframe-row {
            width: 100%;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 2px;
            gap: 10px;
          }
          .tf-btn {
            min-height: auto;
            padding: 0;
            font-size: 11px;
            flex: 0 0 auto;
            background: transparent;
            border: none;
            border-radius: 0;
          }
          .tf-btn.active {
            background: transparent;
            border-color: transparent;
            color: #f6b353;
          }
          .ticket-pill-row {
            grid-template-columns: repeat(3, 1fr);
          }
          .direction-grid,
          .preset-grid,
          .leverage-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .recent-row {
            grid-template-columns: minmax(90px, 1.2fr) minmax(66px, auto) minmax(72px, auto) minmax(56px, auto);
            gap: 8px;
            padding: 10px 12px;
            font-size: 12px;
          }
          .recent-row .trade-label {
            display: none;
            margin: 0;
          }
          .recent-pair {
            gap: 6px;
          }
          .recent-pair-name,
          .recent-value,
          .recent-dir {
            font-size: 12px;
          }
        }
      `}),a.jsxs("section",{className:"trade-card chart-card",children:[a.jsxs("div",{className:"chart-top",children:[a.jsxs("div",{className:"pair-block",children:[a.jsx("div",{className:"pair-icon",children:"₿"}),a.jsxs("div",{className:"pair-inline",children:[a.jsxs("div",{className:"pair-copy",children:[a.jsx("h1",{children:"BTC/USD"}),a.jsx("p",{children:"Live Coinbase candles for the active market view"})]}),a.jsxs("div",{className:"pair-stats",children:[a.jsxs("div",{className:"pair-price",children:["$",ce.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("div",{className:`pair-change ${i>=0?"up":"down"}`,children:[i>=0?a.jsx(Ts,{size:15}):a.jsx(cm,{size:15}),i>=0?"+":"",i.toFixed(2),"%"]})]})]})]}),a.jsxs("div",{className:"pair-status",children:[a.jsx(bh,{size:13}),"Live"]}),a.jsx("div",{className:"timeframe-row",children:dr.map(R=>a.jsx("button",{className:`tf-btn ${p===R.value?"active":""}`,onClick:()=>w(R.value),children:R.label},R.value))})]}),a.jsxs("div",{className:"market-strip",children:[a.jsxs("div",{className:"strip-item",children:[a.jsx("div",{className:"strip-label",children:"24h High"}),a.jsxs("div",{className:"strip-value",children:["$",n.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"strip-item",children:[a.jsx("div",{className:"strip-label",children:"24h Low"}),a.jsxs("div",{className:"strip-value",children:["$",s.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"strip-item",children:[a.jsx("div",{className:"strip-label",children:"Volume"}),a.jsx("div",{className:"strip-value",children:Le.toLocaleString(void 0,{maximumFractionDigits:2})})]}),a.jsxs("div",{className:"strip-item",children:[a.jsx("div",{className:"strip-label",children:"Tools"}),a.jsxs("div",{className:"strip-value",style:{display:"flex",gap:"10px"},children:[a.jsx(Ic,{size:18}),a.jsx(bh,{size:18})]})]})]}),a.jsxs("div",{className:"chart-box",children:[a.jsx("div",{ref:h,className:"chart-canvas"}),Z&&a.jsx("div",{className:"chart-loading",children:"Updating live BTC candles..."}),S&&l&&a.jsxs("div",{className:`live-trade-overlay ${l.direction==="up"?"buy":"sell"}`,children:[a.jsxs("div",{className:"live-trade-main",children:[a.jsx("div",{className:`live-trade-badge ${l.direction==="up"?"buy":"sell"}`,children:l.direction==="up"?"UP":"DOWN"}),a.jsxs("div",{className:"live-trade-copy",children:[a.jsxs("strong",{children:[l.direction==="up"?"Buy / Up":"Sell / Down"," $",de(l.amount)]}),a.jsxs("span",{children:["BTC/USD $",l.entryPrice.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," • ",l.leverage,"x • ",l.timeframe]})]})]}),a.jsxs("div",{className:"live-trade-stats",children:[a.jsxs("div",{className:"live-trade-stat",children:[a.jsx("div",{className:"live-trade-stat-label",children:"Timer"}),a.jsx("div",{className:"live-trade-stat-value",children:Ca(A)})]}),a.jsxs("div",{className:"live-trade-stat",children:[a.jsx("div",{className:"live-trade-stat-label",children:"Live PnL"}),a.jsxs("div",{className:"live-trade-stat-value",style:{color:((N==null?void 0:N.pnl)||0)>=0?"#0ecb81":"#f6465d"},children:[((N==null?void 0:N.pnl)||0)>=0?"+":"","$",de(Math.abs((N==null?void 0:N.pnl)||0))]})]})]})]}),ke&&!Z&&a.jsxs("div",{className:"chart-fallback",children:[a.jsx("strong",{children:"Live BTC chart unavailable"}),a.jsx("div",{children:"The trade ticket is still available. Reload the page to retry the chart connection."})]})]})]}),a.jsxs("aside",{className:"trade-card trade-panel",children:[a.jsx("div",{className:"panel-title",children:"Trade ticket"}),a.jsxs("div",{className:"ticket-topbar",children:[a.jsxs("div",{className:"ticket-topbar-copy",children:[a.jsx("strong",{children:"Margin Level"}),a.jsx("span",{children:"Available balance"})]}),a.jsx("div",{className:"ticket-topbar-value",children:de((t==null?void 0:t.usdBalance)||0)})]}),a.jsxs("div",{className:"ticket-pill-row",children:[a.jsx("div",{className:"ticket-pill emphasis",children:"Cross"}),a.jsxs("div",{className:"ticket-pill",children:[y,"x"]}),a.jsx("div",{className:"ticket-pill",children:"Auto"})]}),a.jsxs("div",{className:"trade-box",children:[a.jsx("div",{className:"trade-label",children:"Direction"}),a.jsxs("div",{className:"direction-grid",children:[a.jsx("button",{className:`dir-btn buy ${v==="up"?"active":""}`,onClick:()=>x("up"),disabled:S,children:"Buy"}),a.jsx("button",{className:`dir-btn sell ${v==="down"?"active":""}`,onClick:()=>x("down"),disabled:S,children:"Sell"})]})]}),a.jsx("div",{className:"trade-box",children:a.jsxs("div",{className:"trade-form-grid",children:[a.jsxs("div",{className:"trade-field",children:[a.jsxs("div",{className:"trade-field-head",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:0},children:"Order Amount"}),a.jsx("div",{className:"trade-field-unit",children:"USDT"})]}),a.jsx("input",{value:j,onChange:R=>M(R.target.value),className:"amount-input",type:"number",min:"1",placeholder:"100"})]}),a.jsxs("div",{children:[a.jsx("div",{className:"trade-label",children:"Quick Amount"}),a.jsx("div",{className:"preset-grid",children:hw.map(R=>a.jsxs("button",{className:`preset-btn ${j===String(R)?"active":""}`,onClick:()=>M(String(R)),children:["$",R]},R))})]}),a.jsxs("div",{children:[a.jsx("div",{className:"trade-label",children:"Leverage"}),a.jsx("div",{className:"leverage-grid",children:uw.map(R=>a.jsxs("button",{className:`lev-btn ${y===R?"active":""}`,onClick:()=>b(R),children:[R,"x"]},R))})]})]})}),a.jsxs("div",{className:"trade-box",children:[a.jsx("div",{className:"trade-label",children:"Order summary"}),a.jsxs("div",{className:"info-list",children:[a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Entry price"}),a.jsxs("strong",{children:["$",ce.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Potential payout"}),a.jsxs("strong",{style:{color:"#0ecb81"},children:["$",de(L)]})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Max loss"}),a.jsxs("strong",{style:{color:"#f6465d"},children:["$",de(O||0)]})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Trade duration"}),a.jsx("strong",{children:I.label})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Settlement timer"}),a.jsx("strong",{children:Ca(I.tradeSeconds)})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Estimated liquidation"}),a.jsxs("strong",{children:["$",wh(ce,y,v||"up").toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]})]}),S&&a.jsxs("div",{className:"result-card win",children:[a.jsx("div",{style:{fontWeight:700},children:"Trade running"}),a.jsx("div",{className:"result-value",children:Ca(A)}),a.jsxs("div",{children:["Contract: ",C.label]}),a.jsxs("div",{children:["Entry: $",l==null?void 0:l.entryPrice.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("div",{children:["Live PnL: ",a.jsxs("span",{style:{color:((N==null?void 0:N.pnl)||0)>=0?"#0ecb81":"#f6465d"},children:[((N==null?void 0:N.pnl)||0)>=0?"+":"","$",de(Math.abs((N==null?void 0:N.pnl)||0))]})]}),a.jsxs("div",{children:["Move: ",a.jsxs("span",{style:{color:((N==null?void 0:N.directionalMovePct)||0)>=0?"#0ecb81":"#f6465d"},children:[((N==null?void 0:N.directionalMovePct)||0)>=0?"+":"",((N==null?void 0:N.directionalMovePct)||0).toFixed(3),"%"]})]}),a.jsxs("div",{children:["Liq: $",l==null?void 0:l.liquidationPrice.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),c&&a.jsxs("div",{className:`result-card ${c.won?"win":"loss"}`,children:[a.jsx("div",{style:{fontWeight:700},children:c.outcomeReason==="liquidation"?"Trade liquidated":c.won?"Trade won":"Trade lost"}),a.jsxs("div",{className:"result-value",style:{color:c.won?"#0ecb81":"#f6465d"},children:[c.pnl>=0?"+":"","$",de(Math.abs(c.pnl))]}),a.jsx("button",{className:"tf-btn active",onClick:ge,children:"New trade"})]}),a.jsx("button",{className:`trade-submit ${He}`,disabled:!v||!j||S||!P,onClick:se,children:S?`Trade running (${C.label})...`:P?v==="up"?`Margin Buy ${I.label}`:v==="down"?`Margin Sell ${I.label}`:"Choose direction":"Verify Account To Trade"}),!P&&a.jsx("div",{className:"verify-warning",children:"This account is still unverified. Go to Profile, submit your verification form and document photos, then wait for System Admin approval before trading."}),a.jsxs("div",{className:"trade-box",children:[a.jsx("div",{className:"trade-label",children:"Recent trades"}),a.jsx("div",{className:"recent-list",children:U.slice(0,4).map(R=>a.jsxs("div",{className:"recent-row",children:[a.jsxs("div",{className:"recent-cell",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:R.pair}),a.jsxs("div",{className:"recent-pair",children:[a.jsx("span",{className:"recent-pair-name",children:R.pair}),a.jsx("span",{className:"recent-dir",style:{color:R.direction==="up"?"#0ecb81":"#f6465d"},children:R.direction.toUpperCase()})]})]}),a.jsxs("div",{className:"recent-cell",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:"Amount"}),a.jsxs("div",{className:"recent-value",children:["$",R.amount]})]}),a.jsxs("div",{className:"recent-cell",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:"PnL"}),a.jsxs("div",{className:"recent-value",style:{color:(R.pnl||0)>=0?"#0ecb81":"#f6465d"},children:[(R.pnl||0)>=0?"+":"","$",de(Math.abs(R.pnl||0))]})]}),a.jsxs("div",{className:"recent-cell",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:"Close"}),a.jsx("div",{className:"recent-value",style:{color:R.status==="won"?"#0ecb81":"#f6465d"},children:R.outcomeReason==="liquidation"?"Liquidated":R.timeframe})]})]},R.id))})]})]})]})}const fw=["United States","United Kingdom","Canada","Australia","Germany","France","Italy","Spain","Netherlands","Switzerland","Sweden","Norway","Denmark","United Arab Emirates","Saudi Arabia","Singapore","Malaysia","Thailand","Myanmar","India","Japan","South Korea","Philippines","Indonesia","Vietnam","Brazil","Mexico","South Africa","Nigeria"];function pw(t){return t==="approved"?"Verified Account":t==="pending"?"Verification Pending":t==="rejected"?"Verification Rejected":"Unverified Account"}function mw(){var ce,Le,L,O,I,C,S,P,A;const{user:t,updateUser:e,submitKycRequest:i}=hi(),n=(t==null?void 0:t.verificationStatus)==="approved",s=t!=null&&t.joinedDate?new Date(t.joinedDate).toLocaleDateString():"Not available",[r,l]=k.useState("profile"),[c,o]=k.useState(!1),[u,h]=k.useState(!1),[d,f]=k.useState(!1),[m,g]=k.useState({name:(t==null?void 0:t.name)||"",email:(t==null?void 0:t.email)||"",phone:n&&(t==null?void 0:t.phone)||"",country:n&&(t==null?void 0:t.country)||"",city:n&&(t==null?void 0:t.city)||"",postCode:n&&(t==null?void 0:t.postCode)||"",timezone:(t==null?void 0:t.timezone)||"",avatar:(t==null?void 0:t.avatar)||""}),[p,w]=k.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[v,x]=k.useState({fullName:((ce=t==null?void 0:t.kyc)==null?void 0:ce.fullName)||(t==null?void 0:t.name)||"",phone:((Le=t==null?void 0:t.kyc)==null?void 0:Le.phone)||n&&(t==null?void 0:t.phone)||"",country:((L=t==null?void 0:t.kyc)==null?void 0:L.country)||n&&(t==null?void 0:t.country)||"",city:((O=t==null?void 0:t.kyc)==null?void 0:O.city)||n&&(t==null?void 0:t.city)||"",postCode:((I=t==null?void 0:t.kyc)==null?void 0:I.postCode)||n&&(t==null?void 0:t.postCode)||"",job:((C=t==null?void 0:t.kyc)==null?void 0:C.job)||n&&(t==null?void 0:t.job)||"",documentType:((S=t==null?void 0:t.kyc)==null?void 0:S.documentType)||"passport",frontImage:((P=t==null?void 0:t.kyc)==null?void 0:P.frontImage)||"",backImage:((A=t==null?void 0:t.kyc)==null?void 0:A.backImage)||""});k.useEffect(()=>{var N,U,H,se,ge,He,Nn,Cn,R;g({name:(t==null?void 0:t.name)||"",email:(t==null?void 0:t.email)||"",phone:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.phone)||"",country:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.country)||"",city:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.city)||"",postCode:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.postCode)||"",timezone:(t==null?void 0:t.timezone)||"",avatar:(t==null?void 0:t.avatar)||""}),x({fullName:((N=t==null?void 0:t.kyc)==null?void 0:N.fullName)||(t==null?void 0:t.name)||"",phone:((U=t==null?void 0:t.kyc)==null?void 0:U.phone)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.phone)||"",country:((H=t==null?void 0:t.kyc)==null?void 0:H.country)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.country)||"",city:((se=t==null?void 0:t.kyc)==null?void 0:se.city)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.city)||"",postCode:((ge=t==null?void 0:t.kyc)==null?void 0:ge.postCode)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.postCode)||"",job:((He=t==null?void 0:t.kyc)==null?void 0:He.job)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.job)||"",documentType:((Nn=t==null?void 0:t.kyc)==null?void 0:Nn.documentType)||"passport",frontImage:((Cn=t==null?void 0:t.kyc)==null?void 0:Cn.frontImage)||"",backImage:((R=t==null?void 0:t.kyc)==null?void 0:R.backImage)||""})},[t]);const y=(t==null?void 0:t.verificationStatus)||"unverified",b=k.useMemo(()=>pw(y),[y]),j=n?"Verified Trader":b,M=m.name||(t==null?void 0:t.name)||"Trader",_=m.email||(t==null?void 0:t.email)||"No email added yet",T=M.trim().charAt(0).toUpperCase()||"T",D=t==null?void 0:t.kyc,B=((D==null?void 0:D.documentType)||"passport").replace("_"," "),Z=()=>{e(m),o(!1)},ze=N=>{var se;const U=(se=N.target.files)==null?void 0:se[0];if(!U)return;const H=new FileReader;H.onload=()=>{const ge=typeof H.result=="string"?H.result:"";ge&&g(He=>({...He,avatar:ge}))},H.readAsDataURL(U)},ke=N=>U=>{var se;const H=(se=U.target.files)==null?void 0:se[0];H&&x(ge=>({...ge,[N]:H.name||"Document uploaded"}))},ye=()=>{if(!p.newPassword||p.newPassword!==p.confirmPassword){alert("New passwords do not match");return}e({password:p.newPassword}),w({currentPassword:"",newPassword:"",confirmPassword:""}),h(!1)},V=()=>{if(!v.fullName||!v.phone||!v.country||!v.city||!v.postCode||!v.job||!v.frontImage||!v.backImage){alert("Complete all verification fields and upload both document images.");return}e({isVerified:!1,verificationStatus:"pending",kyc:{...v,documentType:v.documentType,status:"pending",submittedAt:new Date().toISOString(),reviewedAt:void 0,reviewedBy:void 0}}),t&&i({id:`kyc-${Date.now()}`,userEmail:t.email,userName:t.name,fullName:v.fullName,phone:v.phone,country:v.country,city:v.city,postCode:v.postCode,job:v.job,documentType:v.documentType,frontImage:v.frontImage,backImage:v.backImage,status:"pending",submittedAt:new Date().toISOString()}),f(!0)};return a.jsxs("div",{className:"profile-shell",children:[a.jsx("style",{children:`
        .profile-shell {
          max-width: 1100px;
          margin: 0 auto;
          color: #eef3fb;
          display: grid;
          gap: 22px;
        }
        .card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
        }
        .hero, .content-card { padding: 24px; }
        .content-card.profile-card {
          min-height: calc(100vh - 320px);
          display: flex;
          flex-direction: column;
        }
        .hero {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 18px;
          justify-content: space-between;
          background:
            radial-gradient(circle at top right, rgba(247, 147, 26, 0.18), transparent 24%),
            linear-gradient(180deg, rgba(15, 19, 28, 0.96), rgba(12, 16, 24, 0.92));
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.02), transparent 35%);
          pointer-events: none;
        }
        .hero-main {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .hero-side {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, minmax(120px, 1fr));
          gap: 12px;
          min-width: 280px;
        }
        .desk-strip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }
        .desk-card {
          padding: 18px;
          border-radius: 22px;
          background:
            linear-gradient(180deg, rgba(18, 23, 34, 0.94), rgba(13, 17, 26, 0.92));
          border: 1px solid rgba(255,255,255,.06);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.02);
        }
        .desk-card span {
          display: block;
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 8px;
        }
        .desk-card strong {
          display: block;
          font-size: 20px;
          font-weight: 800;
          line-height: 1.4;
        }
        .desk-card small {
          display: block;
          margin-top: 8px;
          color: #7f90a7;
          line-height: 1.5;
        }
        .hero-stat {
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.06);
        }
        .hero-stat span {
          display: block;
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 6px;
        }
        .hero-stat strong {
          display: block;
          font-size: 15px;
          line-height: 1.45;
        }
        .avatar-wrap {
          width: 96px;
          height: 96px;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          background: linear-gradient(135deg, #f7931a, #ffb347);
        }
        .avatar-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .avatar-fallback {
          width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
          font-size: 34px; font-weight: 800; color: #111;
        }
        .avatar-edit {
          position: absolute; right: 8px; bottom: 8px; width: 32px; height: 32px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.65); color: #fff;
        }
        .hero h1 { font-size: 30px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 6px; }
        .hero p { color: #8fa2ba; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px; margin-top: 10px; padding: 8px 12px;
          border-radius: 999px; font-size: 12px; font-weight: 700;
        }
        .hero-badge.approved {
          background: rgba(14, 203, 129, 0.14); color: #0ecb81;
        }
        .hero-badge.pending { background: rgba(247, 147, 26, 0.14); color: #f6b353; }
        .hero-badge.rejected { background: rgba(246, 70, 93, 0.14); color: #f6465d; }
        .hero-badge.unverified { background: rgba(246, 70, 93, 0.14); color: #f6465d; }
        .tabs { display: flex; gap: 10px; flex-wrap: wrap; padding: 0 6px; }
        .tab-btn {
          min-height: 42px; padding: 0 16px; border-radius: 14px; border: 1px solid rgba(255,255,255,.07);
          background: rgba(255,255,255,.03); color: #8fa2ba; font-weight: 700;
        }
        .tab-btn.active { background: rgba(52,120,246,.18); border-color: rgba(52,120,246,.34); color: #b8d2ff; }
        .card-head {
          display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 22px;
        }
        .card-head h2 { font-size: 22px; font-weight: 800; }
        .edit-btn {
          min-height: 42px; padding: 0 16px; border-radius: 14px; border: 1px solid rgba(255,255,255,.07);
          background: rgba(255,255,255,.03); color: #eef3fb; font-weight: 700;
        }
        .edit-btn.save { background: linear-gradient(135deg, #f7931a, #ffb347); color: #111; border: none; }
        .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .content-card.profile-card .form-grid {
          align-content: start;
          flex: 1;
        }
        .field label {
          display: block; font-size: 12px; text-transform: uppercase; letter-spacing: .08em; color: #8fa2ba; margin-bottom: 8px;
        }
        .field input, .field select {
          width: 100%; min-height: 50px; padding: 0 16px; border-radius: 16px; border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.03); color: #eef3fb;
        }
        .field input:disabled { opacity: .7; }
        .full { grid-column: 1 / -1; }
        .avatar-section {
          grid-column: 1 / -1;
          padding: 18px;
          border-radius: 22px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
        }
        .avatar-section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }
        .avatar-section-head strong {
          font-size: 16px;
        }
        .avatar-section-copy {
          display: grid;
          gap: 4px;
        }
        .avatar-section-head span,
        .avatar-help {
          color: #8fa2ba;
          font-size: 13px;
          line-height: 1.6;
        }
        .avatar-preview-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 14px;
        }
        .avatar-preview-chip {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
          flex-shrink: 0;
        }
        .avatar-preview-chip img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .avatar-preview-copy strong {
          display: block;
          margin-bottom: 4px;
        }
        .avatar-preview-copy span {
          color: #8fa2ba;
          font-size: 13px;
        }
        .avatar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 16px;
        }
        .upload-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 16px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.04);
          color: #eef3fb;
          font-weight: 700;
          cursor: pointer;
        }
        .upload-btn:has(input:disabled) {
          opacity: .55;
          cursor: not-allowed;
        }
        .upload-note {
          color: #8fa2ba;
          font-size: 12px;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .info-list { display: grid; gap: 14px; }
        .info-item {
          display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px;
          border-radius: 18px; background: rgba(255,255,255,.03);
        }
        .info-item small { color: #8fa2ba; display: block; margin-top: 4px; }
        .account-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 22px;
        }
        .account-chip {
          padding: 16px;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.07);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.03);
        }
        .account-chip span {
          display: block;
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 8px;
        }
        .account-chip strong {
          display: block;
          font-size: 15px;
          line-height: 1.5;
          word-break: break-word;
        }
        .status-pill { padding: 8px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; }
        .status-pill.on { color: #0ecb81; background: rgba(14,203,129,.14); }
        .status-pill.pending { color: #f6b353; background: rgba(247,147,26,.14); }
        .status-pill.rejected { color: #f6465d; background: rgba(246,70,93,.14); }
        .submit-note { margin-top: 16px; color: #8fa2ba; line-height: 1.6; }
        .kyc-stage {
          display: grid;
          gap: 18px;
        }
        .waiting-card,
        .verified-card {
          padding: 22px;
          border-radius: 24px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.08);
        }
        .waiting-card {
          background: linear-gradient(180deg, rgba(247,147,26,.08), rgba(255,255,255,.03));
          border-color: rgba(247,147,26,.2);
        }
        .verified-card {
          background: linear-gradient(180deg, rgba(14,203,129,.08), rgba(255,255,255,.03));
          border-color: rgba(14,203,129,.2);
        }
        .kyc-headline {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: 800;
        }
        .kyc-copy {
          color: #8fa2ba;
          line-height: 1.7;
        }
        .certificate-sheet {
          margin-top: 18px;
          background: #fff;
          color: #111;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 20px 60px rgba(0,0,0,.28);
        }
        .certificate-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }
        .certificate-badge {
          width: 72px;
          height: 72px;
          border-radius: 22px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 38px;
          font-weight: 800;
        }
        .certificate-title {
          font-size: 22px;
          font-weight: 800;
          line-height: 1.2;
        }
        .certificate-subtitle {
          margin-top: 4px;
          font-size: 14px;
          color: #59677a;
        }
        .certificate-center {
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .certificate-meta {
          display: grid;
          gap: 8px;
          font-size: 15px;
          line-height: 1.6;
        }
        .certificate-meta strong {
          font-weight: 800;
        }
        .certificate-notice {
          margin-top: 18px;
          font-size: 14px;
          line-height: 1.7;
          color: #273240;
        }
        .certificate-sign {
          margin-top: 24px;
          font-size: 14px;
          line-height: 1.7;
        }
        @media (max-width: 760px) {
          .hero, .content-card { padding: 18px; }
          .content-card.profile-card { min-height: unset; }
          .hero { flex-direction: column; align-items: flex-start; }
          .hero-main { width: 100%; }
          .hero-side {
            width: 100%;
            min-width: 0;
            grid-template-columns: 1fr 1fr;
          }
          .desk-strip,
          .form-grid { grid-template-columns: 1fr; }
          .account-grid { grid-template-columns: 1fr; }
          .certificate-sheet { padding: 20px; }
          .certificate-brand { align-items: flex-start; }
        }
      `}),a.jsxs("section",{className:"card hero",children:[a.jsxs("div",{className:"hero-main",children:[a.jsxs("div",{className:"avatar-wrap",children:[m.avatar?a.jsx("img",{src:m.avatar,alt:M}):a.jsx("div",{className:"avatar-fallback",children:T}),a.jsx("div",{className:"avatar-edit",children:a.jsx(tr,{size:16})})]}),a.jsxs("div",{children:[a.jsx("h1",{children:M}),a.jsx("p",{children:_}),a.jsxs("div",{className:`hero-badge ${y==="approved"?"approved":y==="pending"?"pending":y==="rejected"?"rejected":"unverified"}`,children:[a.jsx(kh,{size:14}),b]})]})]}),a.jsxs("div",{className:"hero-side",children:[a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{children:"Access"}),a.jsx("strong",{children:n?"Trading Enabled":"Trading Locked"})]}),a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{children:"Profile"}),a.jsx("strong",{children:n?"Verified Identity":"Needs Verification"})]}),a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{children:"Country"}),a.jsx("strong",{children:n?m.country||"Not set":"Hidden until verified"})]}),a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{children:"Phone"}),a.jsx("strong",{children:n?m.phone||"Not set":"Hidden until verified"})]})]})]}),a.jsxs("section",{className:"desk-strip",children:[a.jsxs("div",{className:"desk-card",children:[a.jsx("span",{children:"Account Tier"}),a.jsx("strong",{children:j}),a.jsx("small",{children:"Your profile status updates here after admin review."})]}),a.jsxs("div",{className:"desk-card",children:[a.jsx("span",{children:"Member Since"}),a.jsx("strong",{children:s}),a.jsx("small",{children:"Account creation date for this trading profile."})]}),a.jsxs("div",{className:"desk-card",children:[a.jsx("span",{children:"Timezone"}),a.jsx("strong",{children:m.timezone||"UTC"}),a.jsx("small",{children:"Your dashboard and profile follow this account region."})]}),a.jsxs("div",{className:"desk-card",children:[a.jsx("span",{children:"Security State"}),a.jsx("strong",{children:t!=null&&t.password?"Password Active":"Password Not Set"}),a.jsx("small",{children:"Use the security tab to refresh your sign-in credentials."})]})]}),a.jsxs("div",{className:"tabs",children:[a.jsxs("button",{className:`tab-btn ${r==="profile"?"active":""}`,onClick:()=>l("profile"),children:[a.jsx(Ps,{size:16})," Profile"]}),a.jsxs("button",{className:`tab-btn ${r==="security"?"active":""}`,onClick:()=>l("security"),children:[a.jsx(Oc,{size:16})," Security"]}),a.jsxs("button",{className:`tab-btn ${r==="verification"?"active":""}`,onClick:()=>l("verification"),children:[a.jsx(jh,{size:16})," Verification"]})]}),r==="profile"&&a.jsxs("section",{className:"card content-card profile-card",children:[a.jsxs("div",{className:"card-head",children:[a.jsx("h2",{children:"Personal Information"}),a.jsx("button",{className:`edit-btn ${c?"save":""}`,onClick:()=>c?Z():o(!0),children:c?a.jsxs(a.Fragment,{children:[a.jsx(nm,{size:16})," Save"]}):"Edit Profile"})]}),a.jsxs("div",{className:"account-grid",children:[a.jsxs("div",{className:"account-chip",children:[a.jsx("span",{children:"User Name"}),a.jsx("strong",{children:M})]}),a.jsxs("div",{className:"account-chip",children:[a.jsx("span",{children:"User Email"}),a.jsx("strong",{children:_})]}),a.jsxs("div",{className:"account-chip",children:[a.jsx("span",{children:"Account Status"}),a.jsx("strong",{children:y==="approved"?"Verified account":y==="pending"?"Verification pending":"Unverified account"})]}),a.jsxs("div",{className:"account-chip",children:[a.jsx("span",{children:"Account ID"}),a.jsx("strong",{children:(t==null?void 0:t.id)||"Not assigned"})]})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{value:m.name,disabled:!c,onChange:N=>g({...m,name:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Email"}),a.jsx("input",{value:m.email,disabled:!0})]}),n&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Phone"}),a.jsx("input",{value:m.phone,disabled:!c,onChange:N=>g({...m,phone:N.target.value})})]}),n&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Country"}),a.jsx("input",{value:m.country,disabled:!c,onChange:N=>g({...m,country:N.target.value})})]}),n&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"City"}),a.jsx("input",{value:m.city,disabled:!c,onChange:N=>g({...m,city:N.target.value})})]}),n&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Post Code"}),a.jsx("input",{value:m.postCode,disabled:!c,onChange:N=>g({...m,postCode:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Timezone"}),a.jsx("input",{value:m.timezone,disabled:!c,onChange:N=>g({...m,timezone:N.target.value})})]}),n&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Job"}),a.jsx("input",{value:(t==null?void 0:t.job)||"",disabled:!0})]}),a.jsxs("div",{className:"avatar-section",children:[a.jsx("div",{className:"avatar-section-head",children:a.jsxs("div",{className:"avatar-section-copy",children:[a.jsx("strong",{children:"Profile Photo"}),a.jsx("span",{children:"Upload your own photo from your phone or computer."})]})}),a.jsxs("div",{className:"avatar-preview-row",children:[a.jsx("div",{className:"avatar-preview-chip",children:m.avatar?a.jsx("img",{src:m.avatar,alt:M}):a.jsx("div",{className:"avatar-fallback",children:T})}),a.jsxs("div",{className:"avatar-preview-copy",children:[a.jsx("strong",{children:M}),a.jsx("span",{children:c?"Choose an image file, then save your profile changes.":"Your current public trading profile image."})]})]}),a.jsx("div",{className:"avatar-help",children:"Your profile photo is stored in this demo account after you save the profile."}),a.jsxs("div",{className:"avatar-actions",children:[a.jsxs("label",{className:"upload-btn",children:[a.jsx(tr,{size:16}),"Choose Photo",a.jsx("input",{className:"sr-only",type:"file",accept:"image/*",disabled:!c,onChange:ze})]}),a.jsx("span",{className:"upload-note",children:"JPG, PNG, or WEBP from mobile or desktop"})]})]})]})]}),r==="security"&&a.jsxs("section",{className:"card content-card",children:[a.jsxs("div",{className:"card-head",children:[a.jsx("h2",{children:"Security Settings"}),a.jsx("button",{className:`edit-btn ${u?"save":""}`,onClick:()=>u?ye():h(!0),children:u?"Update Password":"Change Password"})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Current Password"}),a.jsx("input",{type:"password",value:p.currentPassword,disabled:!u,onChange:N=>w({...p,currentPassword:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"New Password"}),a.jsx("input",{type:"password",value:p.newPassword,disabled:!u,onChange:N=>w({...p,newPassword:N.target.value})})]}),a.jsxs("div",{className:"field full",children:[a.jsx("label",{children:"Confirm New Password"}),a.jsx("input",{type:"password",value:p.confirmPassword,disabled:!u,onChange:N=>w({...p,confirmPassword:N.target.value})})]})]}),a.jsx("div",{className:"submit-note",children:"This is still a demo app, but the password now updates in your stored user profile so the settings area feels more real."})]}),r==="verification"&&a.jsxs("section",{className:"card content-card",children:[a.jsx("div",{className:"card-head",children:a.jsx("h2",{children:"KYC Verification"})}),a.jsx("div",{className:"kyc-stage",children:y==="approved"?a.jsxs("div",{className:"verified-card",children:[a.jsxs("div",{className:"kyc-headline",children:[a.jsx(kh,{size:22}),"Verified Successfully"]}),a.jsx("div",{className:"kyc-copy",children:"Your account is verified and trading access is active. BTCTradePro approved your verification successfully."}),a.jsxs("div",{className:"info-list",style:{marginTop:"18px"},children:[a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Status"}),a.jsx("small",{children:"Approved by admin review"})]}),a.jsx("div",{className:"status-pill on",children:"Verified"})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Account Holder"}),a.jsx("small",{children:(D==null?void 0:D.fullName)||(t==null?void 0:t.name)||"Trader"})]}),a.jsx("div",{children:B})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Account Email"}),a.jsx("small",{children:(t==null?void 0:t.email)||"No email added"})]}),a.jsx("div",{children:s})]})]}),a.jsx("div",{className:"submit-note",children:"Your verification documents stay in the admin review system and are not shown on your profile page."})]}):y==="pending"?a.jsxs("div",{className:"waiting-card",children:[a.jsxs("div",{className:"kyc-headline",children:[a.jsx(jh,{size:22}),"Verification Waiting Letter"]}),a.jsx("div",{className:"kyc-copy",children:"Your verification request has been sent to System Admin. Please wait while your identity information and document images are reviewed."}),a.jsxs("div",{className:"info-list",style:{marginTop:"18px"},children:[a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Full Name"}),a.jsx("small",{children:(D==null?void 0:D.fullName)||M})]}),a.jsx("div",{className:"status-pill pending",children:"Pending"})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Phone"}),a.jsx("small",{children:(D==null?void 0:D.phone)||"Not set"})]}),a.jsx("div",{children:B})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Country"}),a.jsx("small",{children:(D==null?void 0:D.country)||"Not set"})]}),a.jsx("div",{children:B})]})]}),(d||y==="pending")&&a.jsx("div",{className:"submit-note",children:"Verification request sent successfully. Your files were sent to admin review and are hidden from your profile page."})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{value:v.fullName,onChange:N=>x({...v,fullName:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Phone Number"}),a.jsx("input",{value:v.phone,onChange:N=>x({...v,phone:N.target.value}),placeholder:"+1 234 567 8900"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Country"}),a.jsxs("select",{value:v.country,onChange:N=>x({...v,country:N.target.value}),children:[a.jsx("option",{value:"",children:"Choose a country"}),fw.map(N=>a.jsx("option",{value:N,children:N},N))]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"City"}),a.jsx("input",{value:v.city,onChange:N=>x({...v,city:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Post Code"}),a.jsx("input",{value:v.postCode,onChange:N=>x({...v,postCode:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Job"}),a.jsx("input",{value:v.job,onChange:N=>x({...v,job:N.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Document Type"}),a.jsxs("select",{value:v.documentType,onChange:N=>x({...v,documentType:N.target.value}),children:[a.jsx("option",{value:"passport",children:"Passport"}),a.jsx("option",{value:"id_card",children:"ID Card"}),a.jsx("option",{value:"drivers_license",children:"Driver License"})]})]}),a.jsxs("div",{className:"avatar-section full",children:[a.jsx("strong",{children:"Document Front"}),a.jsx("div",{className:"avatar-help",style:{marginBottom:"12px"},children:v.frontImage?`Selected file: ${v.frontImage}`:"Upload the front side image. After you submit, the file goes to admin review and will not stay visible on your profile page."}),a.jsxs("label",{className:"upload-btn",children:[a.jsx(tr,{size:16}),"Upload Front Image",a.jsx("input",{className:"sr-only",type:"file",accept:"image/*",onChange:ke("frontImage")})]})]}),a.jsxs("div",{className:"avatar-section full",children:[a.jsx("strong",{children:"Document Back"}),a.jsx("div",{className:"avatar-help",style:{marginBottom:"12px"},children:v.backImage?`Selected file: ${v.backImage}`:"Upload the back side image. The profile will only show your verification status after submission."}),a.jsxs("label",{className:"upload-btn",children:[a.jsx(tr,{size:16}),"Upload Back Image",a.jsx("input",{className:"sr-only",type:"file",accept:"image/*",onChange:ke("backImage")})]})]})]}),a.jsx("button",{className:"edit-btn save",style:{marginTop:"18px"},onClick:V,children:"Verify Account"}),a.jsx("div",{className:"submit-note",children:"Complete this form and upload front and back document photos. After submission, the request goes to System Admin and your account stays unverified until approval."})]})})]})]})}const gw=[{id:"1",title:"Bitcoin Surges Past $68,000 as Institutional Adoption Accelerates",description:"Major financial institutions continue to embrace Bitcoin, driving prices to new yearly highs amid growing demand for cryptocurrency exposure.",url:"#",imageUrl:"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400",source:"CryptoNews",publishedAt:"2026-04-29T14:30:00"},{id:"2",title:"Ethereum ETF Sees Record Inflows Following Bitcoin Success",description:"Following the approval of spot Bitcoin ETFs, institutional investors are now showing increased interest in Ethereum-based investment products.",url:"#",imageUrl:"https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400",source:"BlockchainDaily",publishedAt:"2026-04-29T12:15:00"},{id:"3",title:"DeFi Protocol Reaches $50 Billion in Total Value Locked",description:"Decentralized finance continues its explosive growth as new protocols offer innovative solutions for yield farming and liquidity provision.",url:"#",imageUrl:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400",source:"DeFi Weekly",publishedAt:"2026-04-29T10:45:00"},{id:"4",title:"El Salvador Celebrates Three Years of Bitcoin as Legal Tender",description:"The Central American nation marks a milestone as President highlights the economic benefits of cryptocurrency adoption.",url:"#",imageUrl:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400",source:"Global Finance",publishedAt:"2026-04-28T18:00:00"},{id:"5",title:"SEC Announces New Cryptocurrency Regulatory Framework",description:"Regulators unveil comprehensive guidelines for digital asset classification and trading, providing clarity for market participants.",url:"#",imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",source:"Regulatory Watch",publishedAt:"2026-04-28T15:30:00"},{id:"6",title:"Major Bank Launches Bitcoin Trading for Retail Customers",description:"One of the world's largest banks begins offering cryptocurrency services, marking a significant shift in traditional finance.",url:"#",imageUrl:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=400",source:"Banking Weekly",publishedAt:"2026-04-28T09:00:00"},{id:"7",title:"Bitcoin Mining Difficulty Reaches All-Time High",description:"Network security continues to strengthen as miners deploy more computational power to secure the Bitcoin blockchain.",url:"#",imageUrl:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",source:"Mining Today",publishedAt:"2026-04-27T20:15:00"},{id:"8",title:"NFT Market Shows Signs of Recovery with New Collections",description:"Digital collectibles regain attention as major brands launch new NFT projects on Ethereum and Solana.",url:"#",imageUrl:"https://images.unsplash.com/photo-1646463876221-9a37f4a4e5db?w=400",source:"NFT Observer",publishedAt:"2026-04-27T16:45:00"}],vw=["All","Bitcoin","Ethereum","DeFi","Regulatory","Mining"];function xw(){const[t]=k.useState(gw),[e,i]=k.useState(""),[n,s]=k.useState("All"),[r,l]=k.useState([]),[c,o]=k.useState(!1),u=f=>{l(m=>m.includes(f)?m.filter(g=>g!==f):[...m,f])},h=t.filter(f=>{const m=f.title.toLowerCase().includes(e.toLowerCase())||f.description.toLowerCase().includes(e.toLowerCase()),g=n==="All"||n==="Bitcoin"&&f.title.toLowerCase().includes("bitcoin")||n==="Ethereum"&&f.title.toLowerCase().includes("ethereum")||n==="DeFi"&&f.title.toLowerCase().includes("defi")||n==="Regulatory"&&f.title.toLowerCase().includes("sec")||f.title.toLowerCase().includes("regulatory")||n==="Mining"&&f.title.toLowerCase().includes("mining");return m&&g}),d=f=>{const m=new Date(f),p=Math.floor((new Date().getTime()-m.getTime())/(1e3*60*60));return p<1?"Just now":p<24?`${p}h ago`:p<48?"Yesterday":m.toLocaleDateString("en-US",{month:"short",day:"numeric"})};return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"text-3xl font-bold text-white flex items-center gap-3",children:[a.jsx(ys,{className:"text-btc-gold"}),"Crypto News"]}),a.jsx("p",{className:"text-btc-text-secondary mt-1",children:"Stay updated with the latest cryptocurrency news"})]}),a.jsxs("div",{className:"relative flex-1 max-w-md",children:[a.jsx(n1,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-btc-text-secondary"}),a.jsx("input",{type:"text",value:e,onChange:f=>i(f.target.value),placeholder:"Search news...",className:"w-full pl-11 pr-4 py-3 bg-btc-dark border border-btc-border rounded-xl text-white placeholder-btc-text-secondary focus:border-btc-gold"})]})]}),a.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-2",children:[vw.map(f=>a.jsx("button",{onClick:()=>s(f),className:`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${n===f?"bg-btc-gold text-btc-dark":"bg-btc-secondary border border-btc-border text-btc-text-secondary hover:text-white hover:border-btc-gold/50"}`,children:f},f)),a.jsx("button",{onClick:()=>o(!0),className:"ml-auto p-2 bg-btc-secondary border border-btc-border rounded-lg text-btc-text-secondary hover:text-white hover:border-btc-gold/50 transition-colors",children:a.jsx(i1,{size:18,className:c?"animate-spin":""})})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map(f=>a.jsxs("article",{className:"bg-btc-secondary border border-btc-border rounded-xl overflow-hidden hover:border-btc-gold/50 transition-all group",children:[a.jsxs("div",{className:"relative h-48 overflow-hidden",children:[a.jsx("img",{src:f.imageUrl,alt:f.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",onError:m=>{m.target.src="https://via.placeholder.com/400x200/1E2329/848E9C?text=Crypto+News"}}),a.jsx("button",{onClick:()=>u(f.id),className:"absolute top-3 right-3 p-2 bg-btc-dark/80 rounded-full hover:bg-btc-dark transition-colors",children:r.includes(f.id)?a.jsx(Hx,{size:18,className:"text-btc-gold"}):a.jsx(qx,{size:18,className:"text-white"})}),a.jsx("span",{className:"absolute bottom-3 left-3 px-3 py-1 bg-btc-gold/90 text-btc-dark text-xs font-bold rounded-full",children:f.source})]}),a.jsxs("div",{className:"p-5",children:[a.jsx("h3",{className:"text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-btc-gold transition-colors",children:f.title}),a.jsx("p",{className:"text-btc-text-secondary text-sm mb-4 line-clamp-3",children:f.description}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"flex items-center gap-1 text-xs text-btc-text-secondary",children:[a.jsx(Qx,{size:12}),d(f.publishedAt)]}),a.jsxs("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-sm text-btc-gold hover:underline",children:["Read More ",a.jsx(Gx,{size:14})]})]})]})]},f.id))}),h.length===0&&a.jsxs("div",{className:"text-center py-12",children:[a.jsx(ys,{size:48,className:"text-btc-text-secondary mx-auto mb-4"}),a.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"No news found"}),a.jsx("p",{className:"text-btc-text-secondary",children:"Try adjusting your search or category filters"})]}),a.jsx("div",{className:"bg-btc-dark/50 rounded-xl p-4 text-sm",children:a.jsx("p",{className:"text-btc-text-secondary text-center",children:"News powered by NewsAPI. Set VITE_NEWSAPI_KEY in your environment for live crypto news."})})]})}const yw=[{id:"1",senderId:"admin",senderName:"Support Desk",message:"Welcome to BTCTradePro support. Tell us if you need help with deposit approval, wallet status, or your trade desk.",timestamp:"2026-04-28T10:00:00",isAdmin:!0}];function ww(){const{user:t}=hi(),[e,i]=k.useState(yw),[n,s]=k.useState(""),[r,l]=k.useState(!1),c=k.useRef(null);k.useEffect(()=>{var u;(u=c.current)==null||u.scrollIntoView({behavior:"smooth"})},[e,r]);const o=()=>{if(!n.trim())return;const u={id:`msg-${Date.now()}`,senderId:(t==null?void 0:t.id)||"user",senderName:(t==null?void 0:t.name)||"User",message:n,timestamp:new Date().toISOString(),isAdmin:!1};i(h=>[...h,u]),s(""),setTimeout(()=>{l(!0),setTimeout(()=>{l(!1),i(h=>[...h,{id:`msg-${Date.now()+1}`,senderId:"admin",senderName:"Support Desk",message:"Your request has been logged. For wallet actions, our admin reviews pending deposits and withdrawals from the back office queue.",timestamp:new Date().toISOString(),isAdmin:!0}])},1400)},500)};return a.jsxs("div",{className:"support-shell",children:[a.jsx("style",{children:`
        .support-shell {
          display: grid;
          gap: 22px;
          color: #eef3fb;
        }
        .card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
        }
        .hero {
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }
        .hero-main {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .hero-icon {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(247, 147, 26, 0.14);
          color: #f6b353;
        }
        .hero h1 {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .hero p {
          color: #8fa2ba;
          margin-top: 6px;
        }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(14, 203, 129, 0.14);
          color: #0ecb81;
          font-size: 12px;
          font-weight: 700;
        }
        .grid {
          display: grid;
          grid-template-columns: 290px minmax(0, 1fr);
          gap: 18px;
        }
        .sidebar,
        .chat-card {
          min-height: 620px;
        }
        .sidebar {
          padding: 22px;
        }
        .sidebar h3 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 14px;
        }
        .quick-list {
          display: grid;
          gap: 10px;
        }
        .quick-btn {
          text-align: left;
          min-height: 46px;
          padding: 0 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.03);
          color: #eef3fb;
        }
        .chat-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .chat-head {
          padding: 18px 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .chat-stream {
          flex: 1;
          overflow-y: auto;
          padding: 22px;
          display: grid;
          gap: 14px;
        }
        .message-row {
          display: flex;
        }
        .message-row.user {
          justify-content: flex-end;
        }
        .message-wrap {
          max-width: min(78%, 620px);
          display: flex;
          gap: 10px;
        }
        .message-row.user .message-wrap {
          flex-direction: row-reverse;
        }
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.07);
          overflow: hidden;
          flex-shrink: 0;
        }
        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .bubble {
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
        }
        .message-row.user .bubble {
          background: rgba(247, 147, 26, 0.16);
        }
        .bubble strong {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
          font-size: 13px;
        }
        .bubble p {
          line-height: 1.7;
          color: #d2dbea;
        }
        .bubble small {
          display: block;
          margin-top: 8px;
          color: #8fa2ba;
        }
        .composer {
          padding: 18px 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          gap: 12px;
        }
        .composer input {
          flex: 1;
          min-height: 50px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.03);
          color: #eef3fb;
          padding: 0 16px;
        }
        .send-btn {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
        }
        @media (max-width: 980px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .sidebar,
          .chat-card {
            min-height: unset;
          }
        }
      `}),a.jsxs("section",{className:"card hero",children:[a.jsxs("div",{className:"hero-main",children:[a.jsx("div",{className:"hero-icon",children:a.jsx(am,{size:24})}),a.jsxs("div",{children:[a.jsx("h1",{children:"Support Center"}),a.jsx("p",{children:"Professional help desk for wallet issues, KYC, and trade questions."})]})]}),a.jsxs("div",{className:"status-pill",children:[a.jsx(ii,{size:16}),"Live Team Online"]})]}),a.jsxs("section",{className:"grid",children:[a.jsxs("aside",{className:"card sidebar",children:[a.jsx("h3",{children:"Quick actions"}),a.jsx("div",{className:"quick-list",children:["Deposit approval","Withdrawal queue","Trade issue","KYC question"].map(u=>a.jsx("button",{className:"quick-btn",onClick:()=>s(u),children:u},u))})]}),a.jsxs("div",{className:"card chat-card",children:[a.jsxs("div",{className:"chat-head",children:[a.jsx("strong",{children:"Conversation"}),a.jsx("span",{className:"status-pill",children:"Avg. response: 5 min"})]}),a.jsxs("div",{className:"chat-stream",children:[e.map(u=>a.jsx("div",{className:`message-row ${u.isAdmin?"admin":"user"}`,children:a.jsxs("div",{className:"message-wrap",children:[a.jsx("div",{className:"avatar",children:u.isAdmin?a.jsx(ii,{size:18}):t!=null&&t.avatar?a.jsx("img",{src:t.avatar,alt:t.name}):a.jsx(Ps,{size:18})}),a.jsxs("div",{className:"bubble",children:[a.jsxs("strong",{children:[u.senderName,u.isAdmin&&a.jsx(Mr,{size:14,color:"#0ecb81"})]}),a.jsx("p",{children:u.message}),a.jsx("small",{children:new Date(u.timestamp).toLocaleTimeString()})]})]})},u.id)),r&&a.jsx("div",{className:"message-row admin",children:a.jsxs("div",{className:"message-wrap",children:[a.jsx("div",{className:"avatar",children:a.jsx(ii,{size:18})}),a.jsx("div",{className:"bubble",children:a.jsx("p",{children:"Support is typing..."})})]})}),a.jsx("div",{ref:c})]}),a.jsxs("div",{className:"composer",children:[a.jsx("input",{value:n,onChange:u=>s(u.target.value),onKeyDown:u=>u.key==="Enter"&&o(),placeholder:"Type your support request..."}),a.jsx("button",{className:"send-btn",onClick:o,children:a.jsx(s1,{size:20})})]})]})]})]})}function fr(t){return t?new Date(t).toLocaleString():"Not available"}function bw(){const{users:t,walletRequests:e,kycRequests:i,approveTransaction:n,rejectTransaction:s,approveVerification:r,rejectVerification:l}=$s(),c=t.filter(p=>p.role!=="admin").sort((p,w)=>new Date(w.joinedDate).getTime()-new Date(p.joinedDate).getTime()),o=e.filter(p=>p.status==="pending").sort((p,w)=>new Date(w.timestamp).getTime()-new Date(p.timestamp).getTime()),u=i.filter(p=>p.status==="pending").sort((p,w)=>new Date(w.submittedAt).getTime()-new Date(p.submittedAt).getTime()),h=e.filter(p=>p.status!=="pending").sort((p,w)=>new Date(w.reviewedAt||w.timestamp).getTime()-new Date(p.reviewedAt||p.timestamp).getTime()).slice(0,10),d=i.filter(p=>p.status!=="pending").sort((p,w)=>new Date(w.reviewedAt||w.submittedAt).getTime()-new Date(p.reviewedAt||p.submittedAt).getTime()).slice(0,10),f=c.filter(p=>p.verificationStatus==="approved").length,m=c.filter(p=>p.verificationStatus==="pending").length,g=o.reduce((p,w)=>p+w.amount,0);return a.jsxs("div",{className:"admin-page",children:[a.jsx("style",{children:`
        .admin-page {
          display: grid;
          gap: 22px;
          color: #edf2fb;
        }
        .admin-card {
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(circle at top right, rgba(52, 120, 246, 0.12), transparent 24%),
            linear-gradient(180deg, rgba(15, 19, 28, 0.96), rgba(11, 16, 24, 0.94));
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.26);
        }
        .hero {
          padding: 26px;
          display: grid;
          gap: 20px;
        }
        .hero-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }
        .hero-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .hero-icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(52, 120, 246, 0.14);
          color: #7fb0ff;
        }
        .hero h1 {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 6px;
        }
        .hero p {
          max-width: 700px;
          color: #90a0b7;
          line-height: 1.7;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 42px;
          padding: 0 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #d8e1ef;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .hero-badges {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }
        .stat {
          padding: 20px;
          border-radius: 24px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .stat-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: #95a5bc;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .stat strong {
          display: block;
          margin-top: 14px;
          font-size: 30px;
          font-weight: 800;
        }
        .stat span {
          display: block;
          margin-top: 8px;
          color: #8a9ab2;
          font-size: 13px;
        }
        .section-card {
          padding: 24px;
        }
        .section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .section-head h2 {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .section-head p {
          color: #8fa2ba;
          font-size: 14px;
        }
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #b6c6db;
          font-size: 12px;
          font-weight: 700;
        }
        .queue-list,
        .history-list,
        .user-list {
          display: grid;
          gap: 12px;
        }
        .queue-item,
        .history-item,
        .user-item {
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.05);
          background: rgba(255,255,255,0.03);
          padding: 18px;
        }
        .queue-item {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;
          gap: 16px;
          align-items: center;
        }
        .queue-meta strong,
        .history-item strong,
        .user-item strong {
          display: block;
          font-size: 16px;
          font-weight: 800;
        }
        .queue-meta small,
        .history-meta,
        .user-meta {
          display: block;
          margin-top: 5px;
          color: #8fa2ba;
          line-height: 1.6;
        }
        .queue-side {
          display: grid;
          gap: 6px;
        }
        .queue-side span {
          color: #8fa2ba;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .queue-side strong {
          font-size: 20px;
          font-weight: 800;
        }
        .queue-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .action-btn {
          min-height: 42px;
          padding: 0 16px;
          border: none;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
        }
        .approve-btn {
          background: rgba(14, 203, 129, 0.16);
          color: #0ecb81;
        }
        .reject-btn {
          background: rgba(246, 70, 93, 0.16);
          color: #f6465d;
        }
        .two-col {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, .8fr);
          gap: 22px;
        }
        .user-item {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, .8fr);
          gap: 16px;
          align-items: center;
        }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .status-pill.pending {
          background: rgba(247, 147, 26, 0.14);
          color: #f6b353;
        }
        .status-pill.approved,
        .status-pill.completed {
          background: rgba(14, 203, 129, 0.14);
          color: #0ecb81;
        }
        .status-pill.rejected,
        .status-pill.unverified {
          background: rgba(246, 70, 93, 0.14);
          color: #f6465d;
        }
        .docs {
          display: grid;
          gap: 8px;
          margin-top: 10px;
        }
        .doc-line {
          color: #8fa2ba;
          font-size: 12px;
          line-height: 1.6;
        }
        .history-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .empty-state {
          border-radius: 20px;
          border: 1px dashed rgba(255,255,255,0.1);
          padding: 20px;
          color: #8fa2ba;
          background: rgba(255,255,255,0.02);
        }
        @media (max-width: 1180px) {
          .stats-grid,
          .history-grid,
          .two-col,
          .queue-item,
          .user-item {
            grid-template-columns: 1fr;
          }
          .queue-actions {
            justify-content: flex-start;
          }
        }
      `}),a.jsxs("section",{className:"admin-card hero",children:[a.jsxs("div",{className:"hero-top",children:[a.jsxs("div",{className:"hero-title",children:[a.jsx("div",{className:"hero-icon",children:a.jsx(ii,{size:26})}),a.jsxs("div",{children:[a.jsx("h1",{children:"Admin Operations"}),a.jsx("p",{children:"Separate back-office review center for users, deposits, withdrawals, and identity checks. Every queue is rebuilt from live app data so pending requests do not get lost."})]})]}),a.jsxs("div",{className:"hero-badges",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx(la,{size:14}),a.jsxs("span",{children:[c.length," website users"]})]}),a.jsxs("div",{className:"hero-badge",children:[a.jsx(sm,{size:14}),a.jsxs("span",{children:[o.length+u.length," open reviews"]})]})]})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat",children:[a.jsxs("div",{className:"stat-head",children:[a.jsx("span",{children:"Total Website Users"}),a.jsx(la,{size:18})]}),a.jsx("strong",{children:c.length}),a.jsx("span",{children:"Every created account is counted here for the admin team"})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("div",{className:"stat-head",children:[a.jsx("span",{children:"Pending Wallet"}),a.jsx(Nh,{size:18})]}),a.jsx("strong",{children:o.length}),a.jsxs("span",{children:["$",de(g)," waiting for review"]})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("div",{className:"stat-head",children:[a.jsx("span",{children:"Pending KYC"}),a.jsx(ii,{size:18})]}),a.jsx("strong",{children:u.length}),a.jsxs("span",{children:[m," users currently waiting on approval"]})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("div",{className:"stat-head",children:[a.jsx("span",{children:"Verified Users"}),a.jsx(Mr,{size:18})]}),a.jsx("strong",{children:f}),a.jsx("span",{children:"Accounts already approved by admin review"})]})]})]}),a.jsxs("section",{className:"two-col",children:[a.jsxs("section",{className:"admin-card section-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Pending Wallet Requests"}),a.jsx("p",{children:"Deposits and withdrawals awaiting manual admin action."})]}),a.jsxs("div",{className:"section-tag",children:[a.jsx(Nh,{size:14}),a.jsxs("span",{children:[o.length," active"]})]})]}),a.jsxs("div",{className:"queue-list",children:[o.map(p=>a.jsxs("article",{className:"queue-item",children:[a.jsxs("div",{className:"queue-meta",children:[a.jsx("strong",{children:p.userName}),a.jsx("small",{children:p.userEmail}),a.jsx("small",{children:p.type==="withdraw"?`Withdraw to ${p.withdrawAddress||"No wallet address"}`:`Deposit wallet ${p.walletAddress||"Not supplied"}`}),a.jsxs("small",{children:["Submitted ",fr(p.timestamp)]})]}),a.jsxs("div",{className:"queue-side",children:[a.jsx("span",{children:p.type}),a.jsxs("strong",{children:["$",de(p.amount)]}),a.jsx("small",{children:p.btcAmount?`${p.btcAmount.toFixed(8)} BTC`:"USD request only"})]}),a.jsxs("div",{className:"queue-actions",children:[a.jsxs("button",{className:"action-btn approve-btn",onClick:()=>n(p.id),children:[a.jsx(Mr,{size:16}),a.jsx("span",{children:"Approve"})]}),a.jsxs("button",{className:"action-btn reject-btn",onClick:()=>s(p.id),children:[a.jsx(zh,{size:16}),a.jsx("span",{children:"Reject"})]})]})]},p.id)),o.length===0&&a.jsx("div",{className:"empty-state",children:"No wallet requests are waiting right now."})]})]}),a.jsxs("section",{className:"admin-card section-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Pending KYC Reviews"}),a.jsx("p",{children:"Identity requests sent from user profiles for verification."})]}),a.jsxs("div",{className:"section-tag",children:[a.jsx(ii,{size:14}),a.jsxs("span",{children:[u.length," active"]})]})]}),a.jsxs("div",{className:"queue-list",children:[u.map(p=>a.jsxs("article",{className:"queue-item",children:[a.jsxs("div",{className:"queue-meta",children:[a.jsx("strong",{children:p.fullName}),a.jsx("small",{children:p.userEmail}),a.jsxs("small",{children:[p.phone," • ",p.country,", ",p.city," ",p.postCode]}),a.jsxs("small",{children:[p.job," • ",p.documentType.replace("_"," ")]}),a.jsxs("div",{className:"docs",children:[a.jsxs("div",{className:"doc-line",children:["Front document: ",p.frontImage||"Not uploaded"]}),a.jsxs("div",{className:"doc-line",children:["Back document: ",p.backImage||"Not uploaded"]})]})]}),a.jsxs("div",{className:"queue-side",children:[a.jsx("span",{children:"KYC Request"}),a.jsx("strong",{children:"Pending"}),a.jsxs("small",{children:["Submitted ",fr(p.submittedAt)]})]}),a.jsxs("div",{className:"queue-actions",children:[a.jsxs("button",{className:"action-btn approve-btn",onClick:()=>r(p.userEmail),children:[a.jsx(Mr,{size:16}),a.jsx("span",{children:"Approve"})]}),a.jsxs("button",{className:"action-btn reject-btn",onClick:()=>l(p.userEmail),children:[a.jsx(zh,{size:16}),a.jsx("span",{children:"Reject"})]})]})]},p.id)),u.length===0&&a.jsx("div",{className:"empty-state",children:"No KYC reviews are waiting right now."})]})]})]}),a.jsxs("section",{className:"admin-card section-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Registered Website Users"}),a.jsx("p",{children:"Every account created on the website appears here with verification status, timezone, and balances."})]}),a.jsxs("div",{className:"section-tag",children:[a.jsx(la,{size:14}),a.jsxs("span",{children:[c.length," accounts"]})]})]}),a.jsxs("div",{className:"user-list",children:[c.map(p=>a.jsxs("article",{className:"user-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:p.name}),a.jsx("div",{className:"user-meta",children:p.email}),a.jsxs("div",{className:"user-meta",children:["Joined ",p.joinedDate]})]}),a.jsxs("div",{children:[a.jsx("div",{className:`status-pill ${p.verificationStatus||"unverified"}`,children:p.verificationStatus||"unverified"}),a.jsxs("div",{className:"user-meta",children:[p.country||"Country not set"," • ",p.timezone||"Timezone not set"]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"user-meta",children:["USD $",de(p.usdBalance)]}),a.jsxs("div",{className:"user-meta",children:["BTC ",(p.btcBalance||0).toFixed(6)]})]})]},p.email)),c.length===0&&a.jsx("div",{className:"empty-state",children:"No registered users found."})]})]}),a.jsxs("section",{className:"history-grid",children:[a.jsxs("section",{className:"admin-card section-card",children:[a.jsx("div",{className:"section-head",children:a.jsxs("div",{children:[a.jsx("h2",{children:"Wallet Review History"}),a.jsx("p",{children:"Latest deposit and withdrawal decisions made by admin."})]})}),a.jsxs("div",{className:"history-list",children:[h.map(p=>a.jsxs("article",{className:"history-item",children:[a.jsx("strong",{children:p.userName}),a.jsx("div",{className:`status-pill ${p.status}`,children:p.status}),a.jsx("div",{className:"history-meta",children:p.userEmail}),a.jsxs("div",{className:"history-meta",children:[p.type," • $",de(p.amount)]}),a.jsx("div",{className:"history-meta",children:p.btcAmount?`${p.btcAmount.toFixed(8)} BTC`:"No BTC amount stored"}),a.jsxs("div",{className:"history-meta",children:["Reviewed ",fr(p.reviewedAt||p.timestamp),p.reviewedBy?` • ${p.reviewedBy}`:""]})]},p.id)),h.length===0&&a.jsx("div",{className:"empty-state",children:"No wallet reviews have been completed yet."})]})]}),a.jsxs("section",{className:"admin-card section-card",children:[a.jsx("div",{className:"section-head",children:a.jsxs("div",{children:[a.jsx("h2",{children:"KYC Review History"}),a.jsx("p",{children:"Latest identity approval and rejection activity."})]})}),a.jsxs("div",{className:"history-list",children:[d.map(p=>a.jsxs("article",{className:"history-item",children:[a.jsx("strong",{children:p.fullName}),a.jsx("div",{className:`status-pill ${p.status}`,children:p.status}),a.jsx("div",{className:"history-meta",children:p.userEmail}),a.jsxs("div",{className:"history-meta",children:[p.country,", ",p.city," • ",p.documentType.replace("_"," ")]}),a.jsxs("div",{className:"history-meta",children:["Reviewed ",fr(p.reviewedAt||p.submittedAt),p.reviewedBy?` • ${p.reviewedBy}`:""]})]},p.id)),d.length===0&&a.jsx("div",{className:"empty-state",children:"No KYC reviews have been completed yet."})]})]})]})]})}function kw(){const{login:t,register:e}=hi(),[i,n]=k.useState(""),[s,r]=k.useState(""),[l,c]=k.useState(""),[o,u]=k.useState(!1),[h,d]=k.useState(!1),f=m=>{if(m.preventDefault(),h){e(i,s,l);return}t(i,l)};return a.jsxs("div",{className:"min-h-screen bg-btc-dark flex items-center justify-center p-4 relative overflow-hidden",children:[a.jsx("style",{children:`
        .auth-shell {
          position: relative;
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
          z-index: 1;
        }
        .auth-card-wrap {
          position: relative;
          width: 100%;
          max-width: 448px;
          margin: 0 auto;
        }
        .auth-card {
          background: rgba(30, 35, 41, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(14px);
        }
        .auth-toggle-panel {
          margin-top: 24px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
        }
        .auth-stats {
          margin-top: 24px;
          display: flex;
          justify-content: center;
          gap: 32px;
        }
        .auth-stat {
          text-align: center;
        }
        @media (max-width: 640px) {
          .auth-shell {
            gap: 18px;
            max-width: 760px;
          }
          .auth-card-wrap {
            max-width: 520px;
          }
          .auth-card {
            padding: 28px 24px;
            border-radius: 22px;
          }
          .auth-stats {
            gap: 18px;
            padding: 0 6px;
          }
          .auth-stat p:first-child {
            font-size: 12px;
          }
          .auth-stat p:last-child {
            font-size: 16px;
          }
        }
        @media (max-width: 420px) {
          .auth-card {
            padding: 24px 18px;
          }
          .auth-stats {
            gap: 14px;
          }
        }
      `}),a.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[a.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-btc-gold/5 rounded-full blur-3xl animate-pulse"}),a.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-btc-green/5 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}}),[...Array(6)].map((m,g)=>a.jsx("div",{className:"absolute text-btc-gold/10 text-8xl font-bold animate-float",style:{top:`${20+g*15}%`,left:`${10+g*15}%`,animationDelay:`${g*.5}s`,transform:`rotate(${g*30}deg)`},children:"₿"},g))]}),a.jsxs("div",{className:"auth-shell",children:[a.jsx("div",{className:"auth-card-wrap",children:a.jsxs("div",{className:"auth-card",children:[a.jsxs("div",{className:"text-center mb-8",children:[a.jsx(he,{to:"/",className:"inline-flex text-btc-text-secondary hover:text-btc-gold text-sm mb-6",children:"Back to home"}),a.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-btc-gold to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow",children:a.jsx("span",{className:"text-4xl font-bold text-btc-dark",children:"₿"})}),a.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"BTC Trade"}),a.jsx("p",{className:"text-btc-text-secondary",children:"Professional Cryptocurrency Trading"})]}),a.jsxs("form",{onSubmit:f,className:"space-y-5",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-btc-text-secondary mb-2",children:"User Name"}),a.jsx("input",{type:"text",value:i,onChange:m=>n(m.target.value),placeholder:"Enter your user name",className:"w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all"})]}),h&&a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-btc-text-secondary mb-2",children:"Email (Optional)"}),a.jsx("input",{type:"email",value:s,onChange:m=>r(m.target.value),placeholder:"Enter your email",className:"w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-btc-text-secondary mb-2",children:"Password"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:o?"text":"password",value:l,onChange:m=>c(m.target.value),placeholder:"Enter your password",className:"w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all pr-12"}),a.jsx("button",{type:"button",onClick:()=>u(!o),className:"absolute right-3 top-1/2 -translate-y-1/2 text-btc-text-secondary hover:text-white transition-colors",children:o?a.jsx(Jx,{size:20}):a.jsx(Zx,{size:20})})]})]}),a.jsx("button",{type:"submit",className:"w-full py-3 bg-gradient-to-r from-btc-gold to-yellow-500 text-btc-dark font-bold rounded-lg hover:shadow-lg hover:shadow-btc-gold/30 transition-all duration-300 transform hover:scale-[1.02]",children:h?"Create Account":"Sign In"})]}),a.jsx("div",{className:"auth-toggle-panel",children:a.jsxs("p",{className:"text-center text-btc-text-secondary",children:[h?"Already have an account?":"Don't have an account?"," ",a.jsx("button",{onClick:()=>d(!h),className:"text-btc-gold hover:underline font-medium",children:h?"Sign In":"Sign Up"})]})}),a.jsx("div",{className:"mt-4 p-3 bg-btc-dark/50 rounded-lg border border-btc-border",children:a.jsx("p",{className:"text-xs text-btc-text-secondary text-center",children:h?"New accounts start as unverified and must complete profile verification before trading.":"Demo: Click Sign In with pre-filled credentials"})})]})}),a.jsxs("div",{className:"auth-stats",children:[a.jsxs("div",{className:"auth-stat",children:[a.jsx("p",{className:"text-btc-text-secondary text-sm",children:"24h Volume"}),a.jsx("p",{className:"text-white font-bold",children:"$2.4B"})]}),a.jsxs("div",{className:"auth-stat",children:[a.jsx("p",{className:"text-btc-text-secondary text-sm",children:"Active Traders"}),a.jsx("p",{className:"text-white font-bold",children:"45,892"})]}),a.jsxs("div",{className:"auth-stat",children:[a.jsx("p",{className:"text-btc-text-secondary text-sm",children:"Win Rate"}),a.jsx("p",{className:"text-btc-green font-bold",children:"78%"})]})]})]})]})}const Om="btcUsers",Lo="btcAuthSession",Fm="btcTransactions",Vm="btcWalletRequests",Um="btcTrades",Ro="btcActiveTrade",$o="btcTradeResult",Wm="btcKycRequests",Hm=k.createContext(null),qm=k.createContext(null),Do="system@btcplatform.com",Km="System Admin",jw="admin123",_d={id:"admin-session",email:Do,name:Km,avatar:ln,btcBalance:0,usdBalance:0,stakeAmount:0,isVerified:!0,verificationStatus:"approved",vipLevel:5,joinedDate:"2024-01-01",role:"admin",phone:"+1 555 300 9000",country:"United States",timezone:"UTC",telegram:"@BTCTradeSystem"},Ns=[],Sw=new Map(Ns.map(t=>[t.email.toLowerCase(),t]));function ui(t,e){try{const i=localStorage.getItem(t);return i?JSON.parse(i):e}catch{return localStorage.removeItem(t),e}}function It(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(i){console.error(`Failed to persist ${t}:`,i)}}function pr(t){try{localStorage.removeItem(t)}catch(e){console.error(`Failed to remove ${t}:`,e)}}function Y(t,e=0){const i=typeof t=="number"?t:Number(t);return Number.isFinite(i)?i:e}function F(t,e=""){return typeof t=="string"?t:e}function xn(t){const e=F(t);return e?e.startsWith("data:")?"Document uploaded":e:""}function Td(){var t,e;return typeof window>"u"?"UTC":((e=(t=window.Intl)==null?void 0:t.DateTimeFormat)==null?void 0:e.call(t).resolvedOptions().timeZone)||"UTC"}function Bo(t){return{...Sw.get(F(t.email).toLowerCase()),...t,id:F(t.id,`user-${Date.now()}`),email:F(t.email),name:F(t.name,"Trader"),avatar:F(t.avatar,ln),btcBalance:Y(t.btcBalance),usdBalance:Y(t.usdBalance),stakeAmount:Y(t.stakeAmount),vipLevel:Y(t.vipLevel),joinedDate:F(t.joinedDate,new Date().toISOString().slice(0,10)),kyc:t.kyc?{...t.kyc,fullName:F(t.kyc.fullName,F(t.name,"Trader")),phone:F(t.kyc.phone),country:F(t.kyc.country),city:F(t.kyc.city),postCode:F(t.kyc.postCode),job:F(t.kyc.job),frontImage:xn(t.kyc.frontImage),backImage:xn(t.kyc.backImage)}:t.kyc}}function Nw(t){const e=new Map;return Ns.forEach(i=>{e.set(i.email.toLowerCase(),Bo(i))}),t.filter(i=>i.role!=="admin").forEach(i=>{e.set(i.email.toLowerCase(),Bo(i))}),Array.from(e.values())}function Cw(t){return{...t,id:F(t.id,`tx-${Date.now()}`),type:t.type,amount:Y(t.amount),btcAmount:t.btcAmount===void 0?void 0:Y(t.btcAmount),walletAddress:t.walletAddress?F(t.walletAddress):t.walletAddress,withdrawAddress:t.withdrawAddress?F(t.withdrawAddress):t.withdrawAddress,userEmail:t.userEmail?F(t.userEmail):t.userEmail,userName:t.userName?F(t.userName):t.userName,status:t.status,timestamp:F(t.timestamp,new Date().toISOString()),reviewedBy:t.reviewedBy?F(t.reviewedBy):t.reviewedBy}}function Xm(t){return t.type!=="deposit"&&t.type!=="withdraw"||!t.userEmail?null:{id:F(t.id,`tx-${Date.now()}`),type:t.type,amount:Y(t.amount),btcAmount:t.btcAmount===void 0?void 0:Y(t.btcAmount),walletAddress:t.walletAddress?F(t.walletAddress):void 0,withdrawAddress:t.withdrawAddress?F(t.withdrawAddress):void 0,userEmail:F(t.userEmail),userName:F(t.userName,"Trader"),status:t.status,timestamp:F(t.timestamp,new Date().toISOString()),reviewedBy:t.reviewedBy?F(t.reviewedBy):void 0,reviewedAt:void 0}}function Ew(t){return!t.kyc||t.kyc.status!=="pending"?null:{id:`kyc-profile-${t.id}`,userEmail:F(t.email),userName:F(t.name,"Trader"),fullName:F(t.kyc.fullName,t.name),phone:F(t.kyc.phone),country:F(t.kyc.country),city:F(t.kyc.city),postCode:F(t.kyc.postCode),job:F(t.kyc.job),documentType:t.kyc.documentType,frontImage:xn(t.kyc.frontImage),backImage:xn(t.kyc.backImage),status:"pending",submittedAt:F(t.kyc.submittedAt,new Date().toISOString()),reviewedAt:t.kyc.reviewedAt?F(t.kyc.reviewedAt):void 0,reviewedBy:t.kyc.reviewedBy?F(t.kyc.reviewedBy):void 0}}function Ao(t,e){const i=new Map;return e.forEach(n=>{const s=Xm(n);s&&i.set(s.id,s)}),t.forEach(n=>{const s=i.get(n.id);i.set(n.id,{...s||{},...n,reviewedAt:n.reviewedAt||(s==null?void 0:s.reviewedAt),reviewedBy:n.reviewedBy||(s==null?void 0:s.reviewedBy)})}),Array.from(i.values()).sort((n,s)=>new Date(s.reviewedAt||s.timestamp).getTime()-new Date(n.reviewedAt||n.timestamp).getTime())}function Io(t,e){const i=new Map;return e.forEach(n=>{const s=Ew(n);s&&i.set(n.email.toLowerCase(),s)}),t.forEach(n=>{const s=n.userEmail.toLowerCase(),r=i.get(s);i.set(s,{...r||{},...n,frontImage:xn(n.frontImage||(r==null?void 0:r.frontImage)),backImage:xn(n.backImage||(r==null?void 0:r.backImage)),reviewedAt:n.reviewedAt||(r==null?void 0:r.reviewedAt),reviewedBy:n.reviewedBy||(r==null?void 0:r.reviewedBy)})}),Array.from(i.values()).sort((n,s)=>new Date(s.reviewedAt||s.submittedAt).getTime()-new Date(n.reviewedAt||n.submittedAt).getTime())}function zw(t){return{...t,id:F(t.id,`trade-${Date.now()}`),pair:F(t.pair,"BTC/USD"),amount:Y(t.amount),leverage:Y(t.leverage,1),entryPrice:Y(t.entryPrice),exitPrice:t.exitPrice===void 0?void 0:Y(t.exitPrice),liquidationPrice:t.liquidationPrice===void 0?void 0:Y(t.liquidationPrice),entryTime:t.entryTime===void 0?void 0:Y(t.entryTime),exitTime:t.exitTime===void 0?void 0:Y(t.exitTime),timeframe:F(t.timeframe,"1m"),timestamp:F(t.timestamp,new Date().toISOString()),userEmail:t.userEmail?F(t.userEmail):t.userEmail,pnl:t.pnl===void 0?void 0:Y(t.pnl),priceMovePct:t.priceMovePct===void 0?void 0:Y(t.priceMovePct)}}function Mw(t){return{...t,id:F(t.id,`trade-${Date.now()}`),pair:F(t.pair,"BTC/USD"),amount:Y(t.amount),leverage:Y(t.leverage,1),entryPrice:Y(t.entryPrice),liquidationPrice:Y(t.liquidationPrice),timeframe:F(t.timeframe,"1m"),timeframeValue:F(t.timeframeValue,"1m"),tradeSeconds:Y(t.tradeSeconds,60),entryTime:Y(t.entryTime,Math.floor(Date.now()/1e3)),openedAt:F(t.openedAt,new Date().toISOString()),endTime:F(t.endTime,new Date(Date.now()+6e4).toISOString()),userEmail:F(t.userEmail)}}function _w(t){return{...t,tradeId:F(t.tradeId),won:!!t.won,pnl:Y(t.pnl),exitPrice:Y(t.exitPrice),exitTime:Y(t.exitTime,Math.floor(Date.now()/1e3)),priceMovePct:Y(t.priceMovePct),outcomeReason:t.outcomeReason}}function Tw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.email=="string")}function Pw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.type=="string")}function Lw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.userEmail=="string")}function Rw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.userEmail=="string")}function $w(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.pair=="string")}function Dw(t){return!!(t&&typeof t=="object"&&typeof t.id=="string"&&typeof t.userEmail=="string"&&typeof t.entryPrice=="number"&&typeof t.amount=="number"&&typeof t.leverage=="number"&&typeof t.endTime=="string")}function Bw(t){return!!(t&&typeof t=="object"&&typeof t.tradeId=="string"&&typeof t.pnl=="number"&&typeof t.won=="boolean")}const Oo=()=>{const t=ui(Om,Ns);return Tw(t)?Nw(t):Ns.map(Bo)};function Aw(){return ui(Lo,null)}const Qm=()=>{const t=ui(Fm,[]);return Pw(t)?t.map(Cw):[]},Iw=()=>{const t=ui(Vm,[]),e=Lw(t)?t:[];return Ao(e,Qm())},Ow=()=>{const t=ui(Wm,[]),e=Rw(t)?t:[];return Io(e,Oo())},Fw=()=>{const t=ui(Um,[]);return $w(t)?t.map(zw):[]},Vw=()=>{const t=ui(Ro,null);return Dw(t)?Mw(t):null},Uw=()=>{const t=ui($o,null);return Bw(t)?_w(t):null},hi=()=>{const t=k.useContext(Hm);if(!t)throw new Error("useAuth must be used within AuthProvider");return t},$s=()=>{const t=k.useContext(qm);if(!t)throw new Error("useApp must be used within AppProvider");return t};function Ww(){const[t,e]=k.useState(()=>typeof window>"u"?Ns:Oo()),[i,n]=k.useState(()=>{if(typeof window>"u")return null;const C=Aw();if((C==null?void 0:C.role)==="admin"&&C.email.toLowerCase()===Do)return _d;const S=C==null?void 0:C.email;return S&&Oo().find(A=>A.email===S)||null}),[s,r]=k.useState(()=>yh()),[l,c]=k.useState(!1),[o,u]=k.useState(()=>typeof window>"u"?[]:Qm()),[h,d]=k.useState(()=>typeof window>"u"?[]:Iw()),[f,m]=k.useState(()=>typeof window>"u"?[]:Ow()),[g,p]=k.useState(()=>typeof window>"u"?[]:Fw()),[w,v]=k.useState(()=>typeof window>"u"?null:Vw()),[x,y]=k.useState(()=>typeof window>"u"?null:Uw());k.useEffect(()=>{It(Om,t)},[t]),k.useEffect(()=>{It(Fm,o)},[o]),k.useEffect(()=>{d(C=>{const S=Ao(C,o);return JSON.stringify(S)===JSON.stringify(C)?C:S})},[o]),k.useEffect(()=>{It(Vm,h)},[h]),k.useEffect(()=>{m(C=>{const S=Io(C,t);return JSON.stringify(S)===JSON.stringify(C)?C:S})},[t]),k.useEffect(()=>{It(Wm,f)},[f]),k.useEffect(()=>{It(Um,g)},[g]),k.useEffect(()=>{w?It(Ro,w):pr(Ro)},[w]),k.useEffect(()=>{x?It($o,x):pr($o)},[x]),k.useEffect(()=>{pr("btcCurrentUserEmail"),i?It(Lo,{email:i.email,role:i.role||"user"}):pr(Lo)},[i]),k.useEffect(()=>{let C=!0,S=null,P=null;const A=async()=>{try{const H=await Rx();C&&(r(H),c(!0))}catch{C&&(r(H=>yh(H.price)),c(!0))}},N=()=>{C&&(P=$x(H=>{C&&(r(H),c(!0))},H=>{C&&(H==="closed"||H==="error")&&(S&&window.clearTimeout(S),S=window.setTimeout(()=>{N()},3e3))}))};A(),N();const U=setInterval(A,3e4);return()=>{C=!1,P==null||P(),S&&window.clearTimeout(S),clearInterval(U)}},[]);const b=(C,S)=>{let P=i;e(A=>A.map(N=>{if(N.email!==C)return N;const U=S(N);return(i==null?void 0:i.email)===C&&(P=U),U})),P&&P.email===C&&n(P)},j=(C,S)=>{const A=C.trim().toLowerCase();if((A===Km.toLowerCase()||A===Do.toLowerCase())&&S===jw){n(_d);return}const N=t.find(U=>U.name.trim().toLowerCase()===A||U.email.trim().toLowerCase()===A);if(N){if(N.password&&N.password!==S){alert("Incorrect password");return}n(N);return}alert("Incorrect username or password")},M=(C,S,P)=>{const A=C.trim(),N=S.trim().toLowerCase();if(!A||!P.trim()){alert("Username and password are required");return}const U=A.toLowerCase().replace(/[^a-z0-9]+/g,"")||`user${Date.now()}`,H=N||`${U}@btcplatform.com`;if(t.find(He=>He.email.toLowerCase()===H)){alert("That email is already registered");return}const ge={...xh,id:`user-${Date.now()}`,email:H,name:A,avatar:ln,btcBalance:0,usdBalance:0,stakeAmount:0,isVerified:!1,joinedDate:new Date().toISOString().slice(0,10),role:"user",verificationStatus:"unverified",password:P,phone:"",country:"",city:"",postCode:"",job:"",timezone:Td(),telegram:"",kyc:{fullName:A,phone:"",country:"",city:"",postCode:"",job:"",documentType:"passport",frontImage:"",backImage:"",status:"unverified"}};e(He=>[ge,...He]),n(ge)},_=({email:C,name:S,avatar:P})=>{const A=C.trim().toLowerCase(),N=S.trim()||"Google User";if(!A){alert("Google account email is missing");return}const U=t.find(se=>se.email.toLowerCase()===A);if(U){const se={...U,name:N,avatar:P||U.avatar||ln};e(ge=>ge.map(He=>He.email===U.email?se:He)),n(se);return}const H={...xh,id:`user-${Date.now()}`,email:A,name:N,avatar:P||ln,btcBalance:0,usdBalance:0,stakeAmount:0,isVerified:!1,joinedDate:new Date().toISOString().slice(0,10),role:"user",verificationStatus:"unverified",password:void 0,phone:"",country:"",city:"",postCode:"",job:"",timezone:Td(),telegram:"",kyc:{fullName:N,phone:"",country:"",city:"",postCode:"",job:"",documentType:"passport",frontImage:"",backImage:"",status:"unverified"}};e(se=>[H,...se]),n(H)},T=()=>{n(null)},D=C=>{if(!i)return;const S={...i,...C};n(S),e(P=>P.map(A=>A.email===i.email?S:A))},B=C=>{m(S=>{const P=S.filter(A=>A.userEmail.toLowerCase()!==C.userEmail.toLowerCase());return Io([C,...P],t)})},Z=C=>{if(!i)return;const S={...C,userEmail:C.userEmail||i.email,userName:C.userName||i.name};if(u(P=>[S,...P]),S.type==="deposit"||S.type==="withdraw"){const P=Xm(S);if(!P)return;d(A=>Ao([P,...A],o))}},ze=C=>{if(!i)return;const S={...C,userEmail:C.userEmail||i.email};p(P=>[S,...P])},ke=C=>{y(null),v(C)},ye=()=>{y(null)};k.useEffect(()=>{if(!w)return;const C=(A,N)=>{const U=A==="liquidation"?{pnl:-w.amount,directionalMovePct:-(100/w.leverage)}:im({entryPrice:w.entryPrice,exitPrice:N,amount:w.amount,leverageValue:w.leverage,tradeDirection:w.direction}),H=Math.floor(Date.now()/1e3),se={id:w.id,pair:w.pair,direction:w.direction,amount:w.amount,leverage:w.leverage,entryPrice:w.entryPrice,exitPrice:N,liquidationPrice:w.liquidationPrice,entryTime:w.entryTime,exitTime:H,timeframe:w.timeframe,status:U.pnl>=0?"won":"lost",timestamp:new Date().toISOString(),userEmail:w.userEmail,pnl:U.pnl,priceMovePct:U.directionalMovePct,outcomeReason:A};p(ge=>[se,...ge]),b(w.userEmail,ge=>({...ge,usdBalance:Math.max(0,ge.usdBalance+U.pnl)})),y({tradeId:w.id,won:U.pnl>=0,pnl:U.pnl,exitPrice:N,exitTime:H,priceMovePct:U.directionalMovePct,outcomeReason:A}),v(null)},S=()=>{const A=Date.now();if(w.direction==="up"?s.price<=w.liquidationPrice:s.price>=w.liquidationPrice){C("liquidation",s.price);return}A>=new Date(w.endTime).getTime()&&C("expiry",s.price)};S();const P=window.setInterval(S,1e3);return()=>{window.clearInterval(P)}},[w,s.price,i]);const V=C=>{const S=h.find(P=>P.id===C)||o.find(P=>P.id===C);!S||S.status!=="pending"||!S.userEmail||(d(P=>P.map(A=>A.id===C?{...A,status:"completed",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:A)),u(P=>P.map(A=>A.id===C?{...A,status:"completed",reviewedBy:"System Admin"}:A)),b(S.userEmail,P=>S.type==="deposit"?{...P,btcBalance:P.btcBalance+(S.btcAmount||0),usdBalance:P.usdBalance+S.amount}:S.type==="withdraw"?{...P,usdBalance:Math.max(0,P.usdBalance-S.amount)}:P))},ce=C=>{d(S=>S.map(P=>P.id===C?{...P,status:"rejected",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:P)),u(S=>S.map(P=>P.id===C?{...P,status:"rejected",reviewedBy:"System Admin"}:P))},Le=C=>{m(S=>S.map(P=>P.userEmail===C&&P.status==="pending"?{...P,status:"approved",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:P)),b(C,S=>{var P,A,N,U,H,se;return{...S,name:((P=S.kyc)==null?void 0:P.fullName)||S.name,phone:((A=S.kyc)==null?void 0:A.phone)||S.phone,country:((N=S.kyc)==null?void 0:N.country)||S.country,city:((U=S.kyc)==null?void 0:U.city)||S.city,postCode:((H=S.kyc)==null?void 0:H.postCode)||S.postCode,job:((se=S.kyc)==null?void 0:se.job)||S.job,isVerified:!0,verificationStatus:"approved",kyc:S.kyc?{...S.kyc,status:"approved",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:S.kyc}})},L=C=>{m(S=>S.map(P=>P.userEmail===C&&P.status==="pending"?{...P,status:"rejected",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:P)),b(C,S=>({...S,isVerified:!1,verificationStatus:"rejected",kyc:S.kyc?{...S.kyc,status:"rejected",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:S.kyc}))},O={user:i,isAuthenticated:!!i,login:j,register:M,signInWithGoogle:_,logout:T,updateUser:D,submitKycRequest:B},I={btcPrice:s.price,btcChange24h:s.change24h,btcHigh24h:s.high24h,btcLow24h:s.low24h,btcVolume24h:s.volume24h,marketStatus:s.source,marketReady:l,transactions:o,walletRequests:h,kycRequests:f,trades:g,users:t,activeTrade:w,lastTradeResult:x,addTransaction:Z,addTrade:ze,startTrade:ke,clearTradeResult:ye,approveTransaction:V,rejectTransaction:ce,approveVerification:Le,rejectVerification:L};return a.jsx(f1,{children:a.jsx(Hm.Provider,{value:O,children:a.jsx(qm.Provider,{value:I,children:a.jsx(Nx,{children:i?a.jsxs("div",{className:"min-h-screen bg-btc-dark lg:flex lg:h-screen",children:[a.jsx(o1,{}),a.jsxs("div",{className:"flex min-h-screen flex-1 flex-col lg:overflow-hidden",children:[a.jsx(c1,{btcPrice:s.price,btcChange24h:s.change24h,marketStatus:s.source}),a.jsx("main",{className:"app-main-scroll flex-1 bg-[#0f131c] px-4 pb-28 pt-4 sm:px-5 lg:overflow-y-auto lg:px-6 lg:pb-6 lg:pt-6",children:a.jsxs(mh,{children:[a.jsx(Ze,{path:"/",element:i.role==="admin"?a.jsx(jt,{to:"/admin",replace:!0}):a.jsx(v1,{})}),a.jsx(Ze,{path:"/finance",element:i.role==="admin"?a.jsx(jt,{to:"/admin",replace:!0}):a.jsx(L1,{})}),a.jsx(Ze,{path:"/trade",element:i.role==="admin"?a.jsx(jt,{to:"/admin",replace:!0}):a.jsx(dw,{})}),a.jsx(Ze,{path:"/profile",element:i.role==="admin"?a.jsx(jt,{to:"/admin",replace:!0}):a.jsx(mw,{})}),a.jsx(Ze,{path:"/news",element:i.role==="admin"?a.jsx(jt,{to:"/admin",replace:!0}):a.jsx(xw,{})}),a.jsx(Ze,{path:"/support",element:i.role==="admin"?a.jsx(jt,{to:"/admin",replace:!0}):a.jsx(ww,{})}),a.jsx(Ze,{path:"/admin",element:i.role==="admin"?a.jsx(bw,{}):a.jsx(jt,{to:"/",replace:!0})}),a.jsx(Ze,{path:"*",element:a.jsx(jt,{to:i.role==="admin"?"/admin":"/",replace:!0})})]})})]}),a.jsx(d1,{})]}):a.jsxs(mh,{children:[a.jsx(Ze,{path:"/",element:a.jsx(x1,{})}),a.jsx(Ze,{path:"/login",element:a.jsx(kw,{})}),a.jsx(Ze,{path:"*",element:a.jsx(jt,{to:"/"})})]})})})})})}Ea.createRoot(document.getElementById("root")).render(a.jsx(gi.StrictMode,{children:a.jsx(Ww,{})}));
