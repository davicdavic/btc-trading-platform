var Qm=Object.defineProperty;var Jm=(t,e,i)=>e in t?Qm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Ar=(t,e,i)=>Jm(t,typeof e!="symbol"?e+"":e,i);function Ym(t,e){for(var i=0;i<e.length;i++){const n=e[i];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();function Gm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _d={exports:{}},la={},Td={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr=Symbol.for("react.element"),Zm=Symbol.for("react.portal"),eg=Symbol.for("react.fragment"),tg=Symbol.for("react.strict_mode"),ig=Symbol.for("react.profiler"),ng=Symbol.for("react.provider"),rg=Symbol.for("react.context"),sg=Symbol.for("react.forward_ref"),ag=Symbol.for("react.suspense"),lg=Symbol.for("react.memo"),og=Symbol.for("react.lazy"),Gc=Symbol.iterator;function cg(t){return t===null||typeof t!="object"?null:(t=Gc&&t[Gc]||t["@@iterator"],typeof t=="function"?t:null)}var Pd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ld=Object.assign,Rd={};function bn(t,e,i){this.props=t,this.context=e,this.refs=Rd,this.updater=i||Pd}bn.prototype.isReactComponent={};bn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $d(){}$d.prototype=bn.prototype;function Oo(t,e,i){this.props=t,this.context=e,this.refs=Rd,this.updater=i||Pd}var Fo=Oo.prototype=new $d;Fo.constructor=Oo;Ld(Fo,bn.prototype);Fo.isPureReactComponent=!0;var Zc=Array.isArray,Dd=Object.prototype.hasOwnProperty,Vo={current:null},Bd={key:!0,ref:!0,__self:!0,__source:!0};function Ad(t,e,i){var n,r={},s=null,l=null;if(e!=null)for(n in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(s=""+e.key),e)Dd.call(e,n)&&!Bd.hasOwnProperty(n)&&(r[n]=e[n]);var c=arguments.length-2;if(c===1)r.children=i;else if(1<c){for(var o=Array(c),u=0;u<c;u++)o[u]=arguments[u+2];r.children=o}if(t&&t.defaultProps)for(n in c=t.defaultProps,c)r[n]===void 0&&(r[n]=c[n]);return{$$typeof:zr,type:t,key:s,ref:l,props:r,_owner:Vo.current}}function ug(t,e){return{$$typeof:zr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uo(t){return typeof t=="object"&&t!==null&&t.$$typeof===zr}function hg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return e[i]})}var eu=/\/+/g;function Pa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hg(""+t.key):e.toString(36)}function gs(t,e,i,n,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case zr:case Zm:l=!0}}if(l)return l=t,r=r(l),t=n===""?"."+Pa(l,0):n,Zc(r)?(i="",t!=null&&(i=t.replace(eu,"$&/")+"/"),gs(r,e,i,"",function(u){return u})):r!=null&&(Uo(r)&&(r=ug(r,i+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(eu,"$&/")+"/")+t)),e.push(r)),1;if(l=0,n=n===""?".":n+":",Zc(t))for(var c=0;c<t.length;c++){s=t[c];var o=n+Pa(s,c);l+=gs(s,e,i,o,r)}else if(o=cg(t),typeof o=="function")for(t=o.call(t),c=0;!(s=t.next()).done;)s=s.value,o=n+Pa(s,c++),l+=gs(s,e,i,o,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Ir(t,e,i){if(t==null)return t;var n=[],r=0;return gs(t,n,"","",function(s){return e.call(i,s,r++)}),n}function dg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Be={current:null},vs={transition:null},fg={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:vs,ReactCurrentOwner:Vo};function Id(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Ir,forEach:function(t,e,i){Ir(t,function(){e.apply(this,arguments)},i)},count:function(t){var e=0;return Ir(t,function(){e++}),e},toArray:function(t){return Ir(t,function(e){return e})||[]},only:function(t){if(!Uo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=bn;q.Fragment=eg;q.Profiler=ig;q.PureComponent=Oo;q.StrictMode=tg;q.Suspense=ag;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fg;q.act=Id;q.cloneElement=function(t,e,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Ld({},t.props),r=t.key,s=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,l=Vo.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(o in e)Dd.call(e,o)&&!Bd.hasOwnProperty(o)&&(n[o]=e[o]===void 0&&c!==void 0?c[o]:e[o])}var o=arguments.length-2;if(o===1)n.children=i;else if(1<o){c=Array(o);for(var u=0;u<o;u++)c[u]=arguments[u+2];n.children=c}return{$$typeof:zr,type:t.type,key:r,ref:s,props:n,_owner:l}};q.createContext=function(t){return t={$$typeof:rg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ng,_context:t},t.Consumer=t};q.createElement=Ad;q.createFactory=function(t){var e=Ad.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:sg,render:t}};q.isValidElement=Uo;q.lazy=function(t){return{$$typeof:og,_payload:{_status:-1,_result:t},_init:dg}};q.memo=function(t,e){return{$$typeof:lg,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=vs.transition;vs.transition={};try{t()}finally{vs.transition=e}};q.unstable_act=Id;q.useCallback=function(t,e){return Be.current.useCallback(t,e)};q.useContext=function(t){return Be.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Be.current.useDeferredValue(t)};q.useEffect=function(t,e){return Be.current.useEffect(t,e)};q.useId=function(){return Be.current.useId()};q.useImperativeHandle=function(t,e,i){return Be.current.useImperativeHandle(t,e,i)};q.useInsertionEffect=function(t,e){return Be.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Be.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Be.current.useMemo(t,e)};q.useReducer=function(t,e,i){return Be.current.useReducer(t,e,i)};q.useRef=function(t){return Be.current.useRef(t)};q.useState=function(t){return Be.current.useState(t)};q.useSyncExternalStore=function(t,e,i){return Be.current.useSyncExternalStore(t,e,i)};q.useTransition=function(){return Be.current.useTransition()};q.version="18.3.1";Td.exports=q;var k=Td.exports;const yi=Gm(k),pg=Ym({__proto__:null,default:yi},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg=k,gg=Symbol.for("react.element"),vg=Symbol.for("react.fragment"),xg=Object.prototype.hasOwnProperty,yg=mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wg={key:!0,ref:!0,__self:!0,__source:!0};function Od(t,e,i){var n,r={},s=null,l=null;i!==void 0&&(s=""+i),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)xg.call(e,n)&&!wg.hasOwnProperty(n)&&(r[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:gg,type:t,key:s,ref:l,props:r,_owner:yg.current}}la.Fragment=vg;la.jsx=Od;la.jsxs=Od;_d.exports=la;var a=_d.exports,Cl={},Fd={exports:{}},Je={},Vd={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,F){var A=P.length;P.push(F);e:for(;0<A;){var N=A-1>>>1,S=P[N];if(0<r(S,F))P[N]=F,P[A]=S,A=N;else break e}}function i(P){return P.length===0?null:P[0]}function n(P){if(P.length===0)return null;var F=P[0],A=P.pop();if(A!==F){P[0]=A;e:for(var N=0,S=P.length,T=S>>>1;N<T;){var B=2*(N+1)-1,D=P[B],H=B+1,Q=P[H];if(0>r(D,A))H<S&&0>r(Q,D)?(P[N]=Q,P[H]=A,N=H):(P[N]=D,P[B]=A,N=B);else if(H<S&&0>r(Q,A))P[N]=Q,P[H]=A,N=H;else break e}}return F}function r(P,F){var A=P.sortIndex-F.sortIndex;return A!==0?A:P.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();t.unstable_now=function(){return l.now()-c}}var o=[],u=[],h=1,d=null,f=3,m=!1,g=!1,p=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var F=i(u);F!==null;){if(F.callback===null)n(u);else if(F.startTime<=P)n(u),F.sortIndex=F.expirationTime,e(o,F);else break;F=i(u)}}function b(P){if(p=!1,y(P),!g)if(i(o)!==null)g=!0,ce(j);else{var F=i(u);F!==null&&Pe(b,F.startTime-P)}}function j(P,F){g=!1,p&&(p=!1,v(_),_=-1),m=!0;var A=f;try{for(y(F),d=i(o);d!==null&&(!(d.expirationTime>F)||P&&!Z());){var N=d.callback;if(typeof N=="function"){d.callback=null,f=d.priorityLevel;var S=N(d.expirationTime<=F);F=t.unstable_now(),typeof S=="function"?d.callback=S:d===i(o)&&n(o),y(F)}else n(o);d=i(o)}if(d!==null)var T=!0;else{var B=i(u);B!==null&&Pe(b,B.startTime-F),T=!1}return T}finally{d=null,f=A,m=!1}}var z=!1,M=null,_=-1,V=5,I=-1;function Z(){return!(t.unstable_now()-I<V)}function be(){if(M!==null){var P=t.unstable_now();I=P;var F=!0;try{F=M(!0,P)}finally{F?ke():(z=!1,M=null)}}else z=!1}var ke;if(typeof x=="function")ke=function(){x(be)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,O=ge.port2;ge.port1.onmessage=be,ke=function(){O.postMessage(null)}}else ke=function(){w(be,0)};function ce(P){M=P,z||(z=!0,ke())}function Pe(P,F){_=w(function(){P(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,ce(j))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return i(o)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var A=f;f=F;try{return P()}finally{f=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var A=f;f=P;try{return F()}finally{f=A}},t.unstable_scheduleCallback=function(P,F,A){var N=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?N+A:N):A=N,P){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=A+S,P={id:h++,callback:F,priorityLevel:P,startTime:A,expirationTime:S,sortIndex:-1},A>N?(P.sortIndex=A,e(u,P),i(o)===null&&P===i(u)&&(p?(v(_),_=-1):p=!0,Pe(b,A-N))):(P.sortIndex=S,e(o,P),g||m||(g=!0,ce(j))),P},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(P){var F=f;return function(){var A=f;f=F;try{return P.apply(this,arguments)}finally{f=A}}}})(Ud);Vd.exports=Ud;var bg=Vd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg=k,Qe=bg;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wd=new Set,ir={};function Bi(t,e){hn(t,e),hn(t+"Capture",e)}function hn(t,e){for(ir[t]=e,t=0;t<e.length;t++)Wd.add(e[t])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,jg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},iu={};function Sg(t){return El.call(iu,t)?!0:El.call(tu,t)?!1:jg.test(t)?iu[t]=!0:(tu[t]=!0,!1)}function Ng(t,e,i,n){if(i!==null&&i.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cg(t,e,i,n){if(e===null||typeof e>"u"||Ng(t,e,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,i,n,r,s,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=i,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=l}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wo=/[\-:]([a-z])/g;function Ho(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wo,Ho);Ee[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wo,Ho);Ee[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wo,Ho);Ee[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function qo(t,e,i,n){var r=Ee.hasOwnProperty(e)?Ee[e]:null;(r!==null?r.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cg(e,i,r,n)&&(i=null),n||r===null?Sg(e)&&(i===null?t.removeAttribute(e):t.setAttribute(e,""+i)):r.mustUseProperty?t[r.propertyName]=i===null?r.type===3?!1:"":i:(e=r.attributeName,n=r.attributeNamespace,i===null?t.removeAttribute(e):(r=r.type,i=r===3||r===4&&i===!0?"":""+i,n?t.setAttributeNS(n,e,i):t.setAttribute(e,i))))}var It=kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),Vi=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),Ko=Symbol.for("react.strict_mode"),zl=Symbol.for("react.profiler"),Hd=Symbol.for("react.provider"),qd=Symbol.for("react.context"),Xo=Symbol.for("react.forward_ref"),Ml=Symbol.for("react.suspense"),_l=Symbol.for("react.suspense_list"),Qo=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),Kd=Symbol.for("react.offscreen"),nu=Symbol.iterator;function Mn(t){return t===null||typeof t!="object"?null:(t=nu&&t[nu]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,La;function An(t){if(La===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);La=e&&e[1]||""}return`
`+La+t}var Ra=!1;function $a(t,e){if(!t||Ra)return"";Ra=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=n.stack.split(`
`),l=r.length-1,c=s.length-1;1<=l&&0<=c&&r[l]!==s[c];)c--;for(;1<=l&&0<=c;l--,c--)if(r[l]!==s[c]){if(l!==1||c!==1)do if(l--,c--,0>c||r[l]!==s[c]){var o=`
`+r[l].replace(" at new "," at ");return t.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",t.displayName)),o}while(1<=l&&0<=c);break}}}finally{Ra=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?An(t):""}function Eg(t){switch(t.tag){case 5:return An(t.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 2:case 15:return t=$a(t.type,!1),t;case 11:return t=$a(t.type.render,!1),t;case 1:return t=$a(t.type,!0),t;default:return""}}function Tl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ui:return"Fragment";case Vi:return"Portal";case zl:return"Profiler";case Ko:return"StrictMode";case Ml:return"Suspense";case _l:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qd:return(t.displayName||"Context")+".Consumer";case Hd:return(t._context.displayName||"Context")+".Provider";case Xo:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qo:return e=t.displayName||null,e!==null?e:Tl(t.type)||"Memo";case Wt:e=t._payload,t=t._init;try{return Tl(t(e))}catch{}}return null}function zg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(e);case 8:return e===Ko?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function li(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mg(t){var e=Xd(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(l){n=""+l,s.call(this,l)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fr(t){t._valueTracker||(t._valueTracker=Mg(t))}function Qd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),n="";return t&&(n=Xd(t)?t.checked?"true":"false":t.value),t=n,t!==i?(e.setValue(t),!0):!1}function Ps(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pl(t,e){var i=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function ru(t,e){var i=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;i=li(e.value!=null?e.value:i),t._wrapperState={initialChecked:n,initialValue:i,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jd(t,e){e=e.checked,e!=null&&qo(t,"checked",e,!1)}function Ll(t,e){Jd(t,e);var i=li(e.value),n=e.type;if(i!=null)n==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rl(t,e.type,i):e.hasOwnProperty("defaultValue")&&Rl(t,e.type,li(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function su(t,e,i){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,i||e===t.value||(t.value=e),t.defaultValue=e}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function Rl(t,e,i){(e!=="number"||Ps(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var In=Array.isArray;function nn(t,e,i,n){if(t=t.options,e){e={};for(var r=0;r<i.length;r++)e["$"+i[r]]=!0;for(i=0;i<t.length;i++)r=e.hasOwnProperty("$"+t[i].value),t[i].selected!==r&&(t[i].selected=r),r&&n&&(t[i].defaultSelected=!0)}else{for(i=""+li(i),e=null,r=0;r<t.length;r++){if(t[r].value===i){t[r].selected=!0,n&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $l(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function au(t,e){var i=e.value;if(i==null){if(i=e.children,e=e.defaultValue,i!=null){if(e!=null)throw Error(E(92));if(In(i)){if(1<i.length)throw Error(E(93));i=i[0]}e=i}e==null&&(e=""),i=e}t._wrapperState={initialValue:li(i)}}function Yd(t,e){var i=li(e.value),n=li(e.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),e.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),n!=null&&(t.defaultValue=""+n)}function lu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vr,Zd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,i,n,r){MSApp.execUnsafeLocalFunction(function(){return t(e,i,n,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function nr(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_g=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(t){_g.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Un[e]=Un[t]})});function ef(t,e,i){return e==null||typeof e=="boolean"||e===""?"":i||typeof e!="number"||e===0||Un.hasOwnProperty(t)&&Un[t]?(""+e).trim():e+"px"}function tf(t,e){t=t.style;for(var i in e)if(e.hasOwnProperty(i)){var n=i.indexOf("--")===0,r=ef(i,e[i],n);i==="float"&&(i="cssFloat"),n?t.setProperty(i,r):t[i]=r}}var Tg=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bl(t,e){if(e){if(Tg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Al(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Il=null;function Jo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ol=null,rn=null,sn=null;function ou(t){if(t=Tr(t)){if(typeof Ol!="function")throw Error(E(280));var e=t.stateNode;e&&(e=da(e),Ol(t.stateNode,t.type,e))}}function nf(t){rn?sn?sn.push(t):sn=[t]:rn=t}function rf(){if(rn){var t=rn,e=sn;if(sn=rn=null,ou(t),e)for(t=0;t<e.length;t++)ou(e[t])}}function sf(t,e){return t(e)}function af(){}var Da=!1;function lf(t,e,i){if(Da)return t(e,i);Da=!0;try{return sf(t,e,i)}finally{Da=!1,(rn!==null||sn!==null)&&(af(),rf())}}function rr(t,e){var i=t.stateNode;if(i===null)return null;var n=da(i);if(n===null)return null;i=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(E(231,e,typeof i));return i}var Fl=!1;if($t)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Fl=!1}function Pg(t,e,i,n,r,s,l,c,o){var u=Array.prototype.slice.call(arguments,3);try{e.apply(i,u)}catch(h){this.onError(h)}}var Wn=!1,Ls=null,Rs=!1,Vl=null,Lg={onError:function(t){Wn=!0,Ls=t}};function Rg(t,e,i,n,r,s,l,c,o){Wn=!1,Ls=null,Pg.apply(Lg,arguments)}function $g(t,e,i,n,r,s,l,c,o){if(Rg.apply(this,arguments),Wn){if(Wn){var u=Ls;Wn=!1,Ls=null}else throw Error(E(198));Rs||(Rs=!0,Vl=u)}}function Ai(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function of(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cu(t){if(Ai(t)!==t)throw Error(E(188))}function Dg(t){var e=t.alternate;if(!e){if(e=Ai(t),e===null)throw Error(E(188));return e!==t?null:t}for(var i=t,n=e;;){var r=i.return;if(r===null)break;var s=r.alternate;if(s===null){if(n=r.return,n!==null){i=n;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===i)return cu(r),t;if(s===n)return cu(r),e;s=s.sibling}throw Error(E(188))}if(i.return!==n.return)i=r,n=s;else{for(var l=!1,c=r.child;c;){if(c===i){l=!0,i=r,n=s;break}if(c===n){l=!0,n=r,i=s;break}c=c.sibling}if(!l){for(c=s.child;c;){if(c===i){l=!0,i=s,n=r;break}if(c===n){l=!0,n=s,i=r;break}c=c.sibling}if(!l)throw Error(E(189))}}if(i.alternate!==n)throw Error(E(190))}if(i.tag!==3)throw Error(E(188));return i.stateNode.current===i?t:e}function cf(t){return t=Dg(t),t!==null?uf(t):null}function uf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uf(t);if(e!==null)return e;t=t.sibling}return null}var hf=Qe.unstable_scheduleCallback,uu=Qe.unstable_cancelCallback,Bg=Qe.unstable_shouldYield,Ag=Qe.unstable_requestPaint,fe=Qe.unstable_now,Ig=Qe.unstable_getCurrentPriorityLevel,Yo=Qe.unstable_ImmediatePriority,df=Qe.unstable_UserBlockingPriority,$s=Qe.unstable_NormalPriority,Og=Qe.unstable_LowPriority,ff=Qe.unstable_IdlePriority,oa=null,Nt=null;function Fg(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(oa,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Wg,Vg=Math.log,Ug=Math.LN2;function Wg(t){return t>>>=0,t===0?32:31-(Vg(t)/Ug|0)|0}var Ur=64,Wr=4194304;function On(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ds(t,e){var i=t.pendingLanes;if(i===0)return 0;var n=0,r=t.suspendedLanes,s=t.pingedLanes,l=i&268435455;if(l!==0){var c=l&~r;c!==0?n=On(c):(s&=l,s!==0&&(n=On(s)))}else l=i&~r,l!==0?n=On(l):s!==0&&(n=On(s));if(n===0)return 0;if(e!==0&&e!==n&&!(e&r)&&(r=n&-n,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(n&4&&(n|=i&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)i=31-pt(e),r=1<<i,n|=t[i],e&=~r;return n}function Hg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qg(t,e){for(var i=t.suspendedLanes,n=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-pt(s),c=1<<l,o=r[l];o===-1?(!(c&i)||c&n)&&(r[l]=Hg(c,e)):o<=e&&(t.expiredLanes|=c),s&=~c}}function Ul(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pf(){var t=Ur;return Ur<<=1,!(Ur&4194240)&&(Ur=64),t}function Ba(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function Mr(t,e,i){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pt(e),t[e]=i}function Kg(t,e){var i=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<i;){var r=31-pt(i),s=1<<r;e[r]=0,n[r]=-1,t[r]=-1,i&=~s}}function Go(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var n=31-pt(i),r=1<<n;r&e|t[n]&e&&(t[n]|=e),i&=~r}}var J=0;function mf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gf,Zo,vf,xf,yf,Wl=!1,Hr=[],Yt=null,Gt=null,Zt=null,sr=new Map,ar=new Map,qt=[],Xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(t,e){switch(t){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":sr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(e.pointerId)}}function Tn(t,e,i,n,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:i,eventSystemFlags:n,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Tr(e),e!==null&&Zo(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Qg(t,e,i,n,r){switch(e){case"focusin":return Yt=Tn(Yt,t,e,i,n,r),!0;case"dragenter":return Gt=Tn(Gt,t,e,i,n,r),!0;case"mouseover":return Zt=Tn(Zt,t,e,i,n,r),!0;case"pointerover":var s=r.pointerId;return sr.set(s,Tn(sr.get(s)||null,t,e,i,n,r)),!0;case"gotpointercapture":return s=r.pointerId,ar.set(s,Tn(ar.get(s)||null,t,e,i,n,r)),!0}return!1}function wf(t){var e=wi(t.target);if(e!==null){var i=Ai(e);if(i!==null){if(e=i.tag,e===13){if(e=of(i),e!==null){t.blockedOn=e,yf(t.priority,function(){vf(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Hl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var n=new i.constructor(i.type,i);Il=n,i.target.dispatchEvent(n),Il=null}else return e=Tr(i),e!==null&&Zo(e),t.blockedOn=i,!1;e.shift()}return!0}function du(t,e,i){xs(t)&&i.delete(e)}function Jg(){Wl=!1,Yt!==null&&xs(Yt)&&(Yt=null),Gt!==null&&xs(Gt)&&(Gt=null),Zt!==null&&xs(Zt)&&(Zt=null),sr.forEach(du),ar.forEach(du)}function Pn(t,e){t.blockedOn===e&&(t.blockedOn=null,Wl||(Wl=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Jg)))}function lr(t){function e(r){return Pn(r,t)}if(0<Hr.length){Pn(Hr[0],t);for(var i=1;i<Hr.length;i++){var n=Hr[i];n.blockedOn===t&&(n.blockedOn=null)}}for(Yt!==null&&Pn(Yt,t),Gt!==null&&Pn(Gt,t),Zt!==null&&Pn(Zt,t),sr.forEach(e),ar.forEach(e),i=0;i<qt.length;i++)n=qt[i],n.blockedOn===t&&(n.blockedOn=null);for(;0<qt.length&&(i=qt[0],i.blockedOn===null);)wf(i),i.blockedOn===null&&qt.shift()}var an=It.ReactCurrentBatchConfig,Bs=!0;function Yg(t,e,i,n){var r=J,s=an.transition;an.transition=null;try{J=1,ec(t,e,i,n)}finally{J=r,an.transition=s}}function Gg(t,e,i,n){var r=J,s=an.transition;an.transition=null;try{J=4,ec(t,e,i,n)}finally{J=r,an.transition=s}}function ec(t,e,i,n){if(Bs){var r=Hl(t,e,i,n);if(r===null)Ka(t,e,n,As,i),hu(t,n);else if(Qg(r,t,e,i,n))n.stopPropagation();else if(hu(t,n),e&4&&-1<Xg.indexOf(t)){for(;r!==null;){var s=Tr(r);if(s!==null&&gf(s),s=Hl(t,e,i,n),s===null&&Ka(t,e,n,As,i),s===r)break;r=s}r!==null&&n.stopPropagation()}else Ka(t,e,n,null,i)}}var As=null;function Hl(t,e,i,n){if(As=null,t=Jo(n),t=wi(t),t!==null)if(e=Ai(t),e===null)t=null;else if(i=e.tag,i===13){if(t=of(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return As=t,null}function bf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ig()){case Yo:return 1;case df:return 4;case $s:case Og:return 16;case ff:return 536870912;default:return 16}default:return 16}}var Xt=null,tc=null,ys=null;function kf(){if(ys)return ys;var t,e=tc,i=e.length,n,r="value"in Xt?Xt.value:Xt.textContent,s=r.length;for(t=0;t<i&&e[t]===r[t];t++);var l=i-t;for(n=1;n<=l&&e[i-n]===r[s-n];n++);return ys=r.slice(t,1<n?1-n:void 0)}function ws(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qr(){return!0}function fu(){return!1}function Ye(t){function e(i,n,r,s,l){this._reactName=i,this._targetInst=r,this.type=n,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(i=t[c],this[c]=i?i(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qr:fu,this.isPropagationStopped=fu,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),e}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=Ye(kn),_r=oe({},kn,{view:0,detail:0}),Zg=Ye(_r),Aa,Ia,Ln,ca=oe({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ln&&(Ln&&t.type==="mousemove"?(Aa=t.screenX-Ln.screenX,Ia=t.screenY-Ln.screenY):Ia=Aa=0,Ln=t),Aa)},movementY:function(t){return"movementY"in t?t.movementY:Ia}}),pu=Ye(ca),e0=oe({},ca,{dataTransfer:0}),t0=Ye(e0),i0=oe({},_r,{relatedTarget:0}),Oa=Ye(i0),n0=oe({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),r0=Ye(n0),s0=oe({},kn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a0=Ye(s0),l0=oe({},kn,{data:0}),mu=Ye(l0),o0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=u0[t])?!!e[t]:!1}function nc(){return h0}var d0=oe({},_r,{key:function(t){if(t.key){var e=o0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ws(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(t){return t.type==="keypress"?ws(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ws(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f0=Ye(d0),p0=oe({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Ye(p0),m0=oe({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),g0=Ye(m0),v0=oe({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),x0=Ye(v0),y0=oe({},ca,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=Ye(y0),b0=[9,13,27,32],rc=$t&&"CompositionEvent"in window,Hn=null;$t&&"documentMode"in document&&(Hn=document.documentMode);var k0=$t&&"TextEvent"in window&&!Hn,jf=$t&&(!rc||Hn&&8<Hn&&11>=Hn),vu=" ",xu=!1;function Sf(t,e){switch(t){case"keyup":return b0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wi=!1;function j0(t,e){switch(t){case"compositionend":return Nf(e);case"keypress":return e.which!==32?null:(xu=!0,vu);case"textInput":return t=e.data,t===vu&&xu?null:t;default:return null}}function S0(t,e){if(Wi)return t==="compositionend"||!rc&&Sf(t,e)?(t=kf(),ys=tc=Xt=null,Wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jf&&e.locale!=="ko"?null:e.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N0[t.type]:e==="textarea"}function Cf(t,e,i,n){nf(n),e=Is(e,"onChange"),0<e.length&&(i=new ic("onChange","change",null,i,n),t.push({event:i,listeners:e}))}var qn=null,or=null;function C0(t){Bf(t,0)}function ua(t){var e=Ki(t);if(Qd(e))return t}function E0(t,e){if(t==="change")return e}var Ef=!1;if($t){var Fa;if($t){var Va="oninput"in document;if(!Va){var wu=document.createElement("div");wu.setAttribute("oninput","return;"),Va=typeof wu.oninput=="function"}Fa=Va}else Fa=!1;Ef=Fa&&(!document.documentMode||9<document.documentMode)}function bu(){qn&&(qn.detachEvent("onpropertychange",zf),or=qn=null)}function zf(t){if(t.propertyName==="value"&&ua(or)){var e=[];Cf(e,or,t,Jo(t)),lf(C0,e)}}function z0(t,e,i){t==="focusin"?(bu(),qn=e,or=i,qn.attachEvent("onpropertychange",zf)):t==="focusout"&&bu()}function M0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ua(or)}function _0(t,e){if(t==="click")return ua(e)}function T0(t,e){if(t==="input"||t==="change")return ua(e)}function P0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gt=typeof Object.is=="function"?Object.is:P0;function cr(t,e){if(gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var r=i[n];if(!El.call(e,r)||!gt(t[r],e[r]))return!1}return!0}function ku(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ju(t,e){var i=ku(t);t=0;for(var n;i;){if(i.nodeType===3){if(n=t+i.textContent.length,t<=e&&n>=e)return{node:i,offset:e-t};t=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=ku(i)}}function Mf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _f(){for(var t=window,e=Ps();e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Ps(t.document)}return e}function sc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function L0(t){var e=_f(),i=t.focusedElem,n=t.selectionRange;if(e!==i&&i&&i.ownerDocument&&Mf(i.ownerDocument.documentElement,i)){if(n!==null&&sc(i)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(t,i.value.length);else if(t=(e=i.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=i.textContent.length,s=Math.min(n.start,r);n=n.end===void 0?s:Math.min(n.end,r),!t.extend&&s>n&&(r=n,n=s,s=r),r=ju(i,s);var l=ju(i,n);r&&l&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>n?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=i;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)t=e[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var R0=$t&&"documentMode"in document&&11>=document.documentMode,Hi=null,ql=null,Kn=null,Kl=!1;function Su(t,e,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Kl||Hi==null||Hi!==Ps(n)||(n=Hi,"selectionStart"in n&&sc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Kn&&cr(Kn,n)||(Kn=n,n=Is(ql,"onSelect"),0<n.length&&(e=new ic("onSelect","select",null,e,i),t.push({event:e,listeners:n}),e.target=Hi)))}function Kr(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var qi={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionend:Kr("Transition","TransitionEnd")},Ua={},Tf={};$t&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function ha(t){if(Ua[t])return Ua[t];if(!qi[t])return t;var e=qi[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in Tf)return Ua[t]=e[i];return t}var Pf=ha("animationend"),Lf=ha("animationiteration"),Rf=ha("animationstart"),$f=ha("transitionend"),Df=new Map,Nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ui(t,e){Df.set(t,e),Bi(e,[t])}for(var Wa=0;Wa<Nu.length;Wa++){var Ha=Nu[Wa],$0=Ha.toLowerCase(),D0=Ha[0].toUpperCase()+Ha.slice(1);ui($0,"on"+D0)}ui(Pf,"onAnimationEnd");ui(Lf,"onAnimationIteration");ui(Rf,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui($f,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function Cu(t,e,i){var n=t.type||"unknown-event";t.currentTarget=i,$g(n,e,void 0,t),t.currentTarget=null}function Bf(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var n=t[i],r=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var l=n.length-1;0<=l;l--){var c=n[l],o=c.instance,u=c.currentTarget;if(c=c.listener,o!==s&&r.isPropagationStopped())break e;Cu(r,c,u),s=o}else for(l=0;l<n.length;l++){if(c=n[l],o=c.instance,u=c.currentTarget,c=c.listener,o!==s&&r.isPropagationStopped())break e;Cu(r,c,u),s=o}}}if(Rs)throw t=Vl,Rs=!1,Vl=null,t}function te(t,e){var i=e[Gl];i===void 0&&(i=e[Gl]=new Set);var n=t+"__bubble";i.has(n)||(Af(e,t,2,!1),i.add(n))}function qa(t,e,i){var n=0;e&&(n|=4),Af(i,t,n,e)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function ur(t){if(!t[Xr]){t[Xr]=!0,Wd.forEach(function(i){i!=="selectionchange"&&(B0.has(i)||qa(i,!1,t),qa(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xr]||(e[Xr]=!0,qa("selectionchange",!1,e))}}function Af(t,e,i,n){switch(bf(e)){case 1:var r=Yg;break;case 4:r=Gg;break;default:r=ec}i=r.bind(null,e,i,t),r=void 0,!Fl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),n?r!==void 0?t.addEventListener(e,i,{capture:!0,passive:r}):t.addEventListener(e,i,!0):r!==void 0?t.addEventListener(e,i,{passive:r}):t.addEventListener(e,i,!1)}function Ka(t,e,i,n,r){var s=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var c=n.stateNode.containerInfo;if(c===r||c.nodeType===8&&c.parentNode===r)break;if(l===4)for(l=n.return;l!==null;){var o=l.tag;if((o===3||o===4)&&(o=l.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;l=l.return}for(;c!==null;){if(l=wi(c),l===null)return;if(o=l.tag,o===5||o===6){n=s=l;continue e}c=c.parentNode}}n=n.return}lf(function(){var u=s,h=Jo(i),d=[];e:{var f=Df.get(t);if(f!==void 0){var m=ic,g=t;switch(t){case"keypress":if(ws(i)===0)break e;case"keydown":case"keyup":m=f0;break;case"focusin":g="focus",m=Oa;break;case"focusout":g="blur",m=Oa;break;case"beforeblur":case"afterblur":m=Oa;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=g0;break;case Pf:case Lf:case Rf:m=r0;break;case $f:m=x0;break;case"scroll":m=Zg;break;case"wheel":m=w0;break;case"copy":case"cut":case"paste":m=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=gu}var p=(e&4)!==0,w=!p&&t==="scroll",v=p?f!==null?f+"Capture":null:f;p=[];for(var x=u,y;x!==null;){y=x;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,v!==null&&(b=rr(x,v),b!=null&&p.push(hr(x,b,y)))),w)break;x=x.return}0<p.length&&(f=new m(f,g,null,i,h),d.push({event:f,listeners:p}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&i!==Il&&(g=i.relatedTarget||i.fromElement)&&(wi(g)||g[Dt]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=i.relatedTarget||i.toElement,m=u,g=g?wi(g):null,g!==null&&(w=Ai(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(p=pu,b="onMouseLeave",v="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(p=gu,b="onPointerLeave",v="onPointerEnter",x="pointer"),w=m==null?f:Ki(m),y=g==null?f:Ki(g),f=new p(b,x+"leave",m,i,h),f.target=w,f.relatedTarget=y,b=null,wi(h)===u&&(p=new p(v,x+"enter",g,i,h),p.target=y,p.relatedTarget=w,b=p),w=b,m&&g)t:{for(p=m,v=g,x=0,y=p;y;y=Ii(y))x++;for(y=0,b=v;b;b=Ii(b))y++;for(;0<x-y;)p=Ii(p),x--;for(;0<y-x;)v=Ii(v),y--;for(;x--;){if(p===v||v!==null&&p===v.alternate)break t;p=Ii(p),v=Ii(v)}p=null}else p=null;m!==null&&Eu(d,f,m,p,!1),g!==null&&w!==null&&Eu(d,w,g,p,!0)}}e:{if(f=u?Ki(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var j=E0;else if(yu(f))if(Ef)j=T0;else{j=M0;var z=z0}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=_0);if(j&&(j=j(t,u))){Cf(d,j,i,h);break e}z&&z(t,f,u),t==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&Rl(f,"number",f.value)}switch(z=u?Ki(u):window,t){case"focusin":(yu(z)||z.contentEditable==="true")&&(Hi=z,ql=u,Kn=null);break;case"focusout":Kn=ql=Hi=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,Su(d,i,h);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":Su(d,i,h)}var M;if(rc)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Wi?Sf(t,i)&&(_="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(_="onCompositionStart");_&&(jf&&i.locale!=="ko"&&(Wi||_!=="onCompositionStart"?_==="onCompositionEnd"&&Wi&&(M=kf()):(Xt=h,tc="value"in Xt?Xt.value:Xt.textContent,Wi=!0)),z=Is(u,_),0<z.length&&(_=new mu(_,t,null,i,h),d.push({event:_,listeners:z}),M?_.data=M:(M=Nf(i),M!==null&&(_.data=M)))),(M=k0?j0(t,i):S0(t,i))&&(u=Is(u,"onBeforeInput"),0<u.length&&(h=new mu("onBeforeInput","beforeinput",null,i,h),d.push({event:h,listeners:u}),h.data=M))}Bf(d,e)})}function hr(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Is(t,e){for(var i=e+"Capture",n=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=rr(t,i),s!=null&&n.unshift(hr(t,s,r)),s=rr(t,e),s!=null&&n.push(hr(t,s,r))),t=t.return}return n}function Ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Eu(t,e,i,n,r){for(var s=e._reactName,l=[];i!==null&&i!==n;){var c=i,o=c.alternate,u=c.stateNode;if(o!==null&&o===n)break;c.tag===5&&u!==null&&(c=u,r?(o=rr(i,s),o!=null&&l.unshift(hr(i,o,c))):r||(o=rr(i,s),o!=null&&l.push(hr(i,o,c)))),i=i.return}l.length!==0&&t.push({event:e,listeners:l})}var A0=/\r\n?/g,I0=/\u0000|\uFFFD/g;function zu(t){return(typeof t=="string"?t:""+t).replace(A0,`
`).replace(I0,"")}function Qr(t,e,i){if(e=zu(e),zu(t)!==e&&i)throw Error(E(425))}function Os(){}var Xl=null,Ql=null;function Jl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,O0=typeof clearTimeout=="function"?clearTimeout:void 0,Mu=typeof Promise=="function"?Promise:void 0,F0=typeof queueMicrotask=="function"?queueMicrotask:typeof Mu<"u"?function(t){return Mu.resolve(null).then(t).catch(V0)}:Yl;function V0(t){setTimeout(function(){throw t})}function Xa(t,e){var i=e,n=0;do{var r=i.nextSibling;if(t.removeChild(i),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(n===0){t.removeChild(r),lr(e);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=r}while(i);lr(e)}function ei(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _u(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return t;e--}else i==="/$"&&e++}t=t.previousSibling}return null}var jn=Math.random().toString(36).slice(2),jt="__reactFiber$"+jn,dr="__reactProps$"+jn,Dt="__reactContainer$"+jn,Gl="__reactEvents$"+jn,U0="__reactListeners$"+jn,W0="__reactHandles$"+jn;function wi(t){var e=t[jt];if(e)return e;for(var i=t.parentNode;i;){if(e=i[Dt]||i[jt]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=_u(t);t!==null;){if(i=t[jt])return i;t=_u(t)}return e}t=i,i=t.parentNode}return null}function Tr(t){return t=t[jt]||t[Dt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function da(t){return t[dr]||null}var Zl=[],Xi=-1;function hi(t){return{current:t}}function ne(t){0>Xi||(t.current=Zl[Xi],Zl[Xi]=null,Xi--)}function ee(t,e){Xi++,Zl[Xi]=t.current,t.current=e}var oi={},Te=hi(oi),Ve=hi(!1),Ci=oi;function dn(t,e){var i=t.type.contextTypes;if(!i)return oi;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in i)r[s]=e[s];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Ue(t){return t=t.childContextTypes,t!=null}function Fs(){ne(Ve),ne(Te)}function Tu(t,e,i){if(Te.current!==oi)throw Error(E(168));ee(Te,e),ee(Ve,i)}function If(t,e,i){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var r in n)if(!(r in e))throw Error(E(108,zg(t)||"Unknown",r));return oe({},i,n)}function Vs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||oi,Ci=Te.current,ee(Te,t),ee(Ve,Ve.current),!0}function Pu(t,e,i){var n=t.stateNode;if(!n)throw Error(E(169));i?(t=If(t,e,Ci),n.__reactInternalMemoizedMergedChildContext=t,ne(Ve),ne(Te),ee(Te,t)):ne(Ve),ee(Ve,i)}var Mt=null,fa=!1,Qa=!1;function Of(t){Mt===null?Mt=[t]:Mt.push(t)}function H0(t){fa=!0,Of(t)}function di(){if(!Qa&&Mt!==null){Qa=!0;var t=0,e=J;try{var i=Mt;for(J=1;t<i.length;t++){var n=i[t];do n=n(!0);while(n!==null)}Mt=null,fa=!1}catch(r){throw Mt!==null&&(Mt=Mt.slice(t+1)),hf(Yo,di),r}finally{J=e,Qa=!1}}return null}var Qi=[],Ji=0,Us=null,Ws=0,tt=[],it=0,Ei=null,_t=1,Tt="";function vi(t,e){Qi[Ji++]=Ws,Qi[Ji++]=Us,Us=t,Ws=e}function Ff(t,e,i){tt[it++]=_t,tt[it++]=Tt,tt[it++]=Ei,Ei=t;var n=_t;t=Tt;var r=32-pt(n)-1;n&=~(1<<r),i+=1;var s=32-pt(e)+r;if(30<s){var l=r-r%5;s=(n&(1<<l)-1).toString(32),n>>=l,r-=l,_t=1<<32-pt(e)+r|i<<r|n,Tt=s+t}else _t=1<<s|i<<r|n,Tt=t}function ac(t){t.return!==null&&(vi(t,1),Ff(t,1,0))}function lc(t){for(;t===Us;)Us=Qi[--Ji],Qi[Ji]=null,Ws=Qi[--Ji],Qi[Ji]=null;for(;t===Ei;)Ei=tt[--it],tt[it]=null,Tt=tt[--it],tt[it]=null,_t=tt[--it],tt[it]=null}var Xe=null,Ke=null,re=!1,ft=null;function Vf(t,e){var i=nt(5,null,null,0);i.elementType="DELETED",i.stateNode=e,i.return=t,e=t.deletions,e===null?(t.deletions=[i],t.flags|=16):e.push(i)}function Lu(t,e){switch(t.tag){case 5:var i=t.type;return e=e.nodeType!==1||i.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xe=t,Ke=ei(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xe=t,Ke=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(i=Ei!==null?{id:_t,overflow:Tt}:null,t.memoizedState={dehydrated:e,treeContext:i,retryLane:1073741824},i=nt(18,null,null,0),i.stateNode=e,i.return=t,t.child=i,Xe=t,Ke=null,!0):!1;default:return!1}}function eo(t){return(t.mode&1)!==0&&(t.flags&128)===0}function to(t){if(re){var e=Ke;if(e){var i=e;if(!Lu(t,e)){if(eo(t))throw Error(E(418));e=ei(i.nextSibling);var n=Xe;e&&Lu(t,e)?Vf(n,i):(t.flags=t.flags&-4097|2,re=!1,Xe=t)}}else{if(eo(t))throw Error(E(418));t.flags=t.flags&-4097|2,re=!1,Xe=t}}}function Ru(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xe=t}function Jr(t){if(t!==Xe)return!1;if(!re)return Ru(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jl(t.type,t.memoizedProps)),e&&(e=Ke)){if(eo(t))throw Uf(),Error(E(418));for(;e;)Vf(t,e),e=ei(e.nextSibling)}if(Ru(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(e===0){Ke=ei(t.nextSibling);break e}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++}t=t.nextSibling}Ke=null}}else Ke=Xe?ei(t.stateNode.nextSibling):null;return!0}function Uf(){for(var t=Ke;t;)t=ei(t.nextSibling)}function fn(){Ke=Xe=null,re=!1}function oc(t){ft===null?ft=[t]:ft.push(t)}var q0=It.ReactCurrentBatchConfig;function Rn(t,e,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(E(309));var n=i.stateNode}if(!n)throw Error(E(147,t));var r=n,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(l){var c=r.refs;l===null?delete c[s]:c[s]=l},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!i._owner)throw Error(E(290,t))}return t}function Yr(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $u(t){var e=t._init;return e(t._payload)}function Wf(t){function e(v,x){if(t){var y=v.deletions;y===null?(v.deletions=[x],v.flags|=16):y.push(x)}}function i(v,x){if(!t)return null;for(;x!==null;)e(v,x),x=x.sibling;return null}function n(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function r(v,x){return v=ri(v,x),v.index=0,v.sibling=null,v}function s(v,x,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<x?(v.flags|=2,x):y):(v.flags|=2,x)):(v.flags|=1048576,x)}function l(v){return t&&v.alternate===null&&(v.flags|=2),v}function c(v,x,y,b){return x===null||x.tag!==6?(x=il(y,v.mode,b),x.return=v,x):(x=r(x,y),x.return=v,x)}function o(v,x,y,b){var j=y.type;return j===Ui?h(v,x,y.props.children,b,y.key):x!==null&&(x.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Wt&&$u(j)===x.type)?(b=r(x,y.props),b.ref=Rn(v,x,y),b.return=v,b):(b=Es(y.type,y.key,y.props,null,v.mode,b),b.ref=Rn(v,x,y),b.return=v,b)}function u(v,x,y,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=nl(y,v.mode,b),x.return=v,x):(x=r(x,y.children||[]),x.return=v,x)}function h(v,x,y,b,j){return x===null||x.tag!==7?(x=Si(y,v.mode,b,j),x.return=v,x):(x=r(x,y),x.return=v,x)}function d(v,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=il(""+x,v.mode,y),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Or:return y=Es(x.type,x.key,x.props,null,v.mode,y),y.ref=Rn(v,null,x),y.return=v,y;case Vi:return x=nl(x,v.mode,y),x.return=v,x;case Wt:var b=x._init;return d(v,b(x._payload),y)}if(In(x)||Mn(x))return x=Si(x,v.mode,y,null),x.return=v,x;Yr(v,x)}return null}function f(v,x,y,b){var j=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:c(v,x,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Or:return y.key===j?o(v,x,y,b):null;case Vi:return y.key===j?u(v,x,y,b):null;case Wt:return j=y._init,f(v,x,j(y._payload),b)}if(In(y)||Mn(y))return j!==null?null:h(v,x,y,b,null);Yr(v,y)}return null}function m(v,x,y,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return v=v.get(y)||null,c(x,v,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Or:return v=v.get(b.key===null?y:b.key)||null,o(x,v,b,j);case Vi:return v=v.get(b.key===null?y:b.key)||null,u(x,v,b,j);case Wt:var z=b._init;return m(v,x,y,z(b._payload),j)}if(In(b)||Mn(b))return v=v.get(y)||null,h(x,v,b,j,null);Yr(x,b)}return null}function g(v,x,y,b){for(var j=null,z=null,M=x,_=x=0,V=null;M!==null&&_<y.length;_++){M.index>_?(V=M,M=null):V=M.sibling;var I=f(v,M,y[_],b);if(I===null){M===null&&(M=V);break}t&&M&&I.alternate===null&&e(v,M),x=s(I,x,_),z===null?j=I:z.sibling=I,z=I,M=V}if(_===y.length)return i(v,M),re&&vi(v,_),j;if(M===null){for(;_<y.length;_++)M=d(v,y[_],b),M!==null&&(x=s(M,x,_),z===null?j=M:z.sibling=M,z=M);return re&&vi(v,_),j}for(M=n(v,M);_<y.length;_++)V=m(M,v,_,y[_],b),V!==null&&(t&&V.alternate!==null&&M.delete(V.key===null?_:V.key),x=s(V,x,_),z===null?j=V:z.sibling=V,z=V);return t&&M.forEach(function(Z){return e(v,Z)}),re&&vi(v,_),j}function p(v,x,y,b){var j=Mn(y);if(typeof j!="function")throw Error(E(150));if(y=j.call(y),y==null)throw Error(E(151));for(var z=j=null,M=x,_=x=0,V=null,I=y.next();M!==null&&!I.done;_++,I=y.next()){M.index>_?(V=M,M=null):V=M.sibling;var Z=f(v,M,I.value,b);if(Z===null){M===null&&(M=V);break}t&&M&&Z.alternate===null&&e(v,M),x=s(Z,x,_),z===null?j=Z:z.sibling=Z,z=Z,M=V}if(I.done)return i(v,M),re&&vi(v,_),j;if(M===null){for(;!I.done;_++,I=y.next())I=d(v,I.value,b),I!==null&&(x=s(I,x,_),z===null?j=I:z.sibling=I,z=I);return re&&vi(v,_),j}for(M=n(v,M);!I.done;_++,I=y.next())I=m(M,v,_,I.value,b),I!==null&&(t&&I.alternate!==null&&M.delete(I.key===null?_:I.key),x=s(I,x,_),z===null?j=I:z.sibling=I,z=I);return t&&M.forEach(function(be){return e(v,be)}),re&&vi(v,_),j}function w(v,x,y,b){if(typeof y=="object"&&y!==null&&y.type===Ui&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Or:e:{for(var j=y.key,z=x;z!==null;){if(z.key===j){if(j=y.type,j===Ui){if(z.tag===7){i(v,z.sibling),x=r(z,y.props.children),x.return=v,v=x;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Wt&&$u(j)===z.type){i(v,z.sibling),x=r(z,y.props),x.ref=Rn(v,z,y),x.return=v,v=x;break e}i(v,z);break}else e(v,z);z=z.sibling}y.type===Ui?(x=Si(y.props.children,v.mode,b,y.key),x.return=v,v=x):(b=Es(y.type,y.key,y.props,null,v.mode,b),b.ref=Rn(v,x,y),b.return=v,v=b)}return l(v);case Vi:e:{for(z=y.key;x!==null;){if(x.key===z)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){i(v,x.sibling),x=r(x,y.children||[]),x.return=v,v=x;break e}else{i(v,x);break}else e(v,x);x=x.sibling}x=nl(y,v.mode,b),x.return=v,v=x}return l(v);case Wt:return z=y._init,w(v,x,z(y._payload),b)}if(In(y))return g(v,x,y,b);if(Mn(y))return p(v,x,y,b);Yr(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(i(v,x.sibling),x=r(x,y),x.return=v,v=x):(i(v,x),x=il(y,v.mode,b),x.return=v,v=x),l(v)):i(v,x)}return w}var pn=Wf(!0),Hf=Wf(!1),Hs=hi(null),qs=null,Yi=null,cc=null;function uc(){cc=Yi=qs=null}function hc(t){var e=Hs.current;ne(Hs),t._currentValue=e}function io(t,e,i){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===i)break;t=t.return}}function ln(t,e){qs=t,cc=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function st(t){var e=t._currentValue;if(cc!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(qs===null)throw Error(E(308));Yi=t,qs.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var bi=null;function dc(t){bi===null?bi=[t]:bi.push(t)}function qf(t,e,i,n){var r=e.interleaved;return r===null?(i.next=i,dc(e)):(i.next=r.next,r.next=i),e.interleaved=i,Bt(t,n)}function Bt(t,e){t.lanes|=e;var i=t.alternate;for(i!==null&&(i.lanes|=e),i=t,t=t.return;t!==null;)t.childLanes|=e,i=t.alternate,i!==null&&(i.childLanes|=e),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Ht=!1;function fc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ti(t,e,i){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,X&2){var r=n.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e,Bt(t,i)}return r=n.interleaved,r===null?(e.next=e,dc(n)):(e.next=r.next,r.next=e),n.interleaved=e,Bt(t,i)}function bs(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,Go(t,i)}}function Du(t,e){var i=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var r=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var l={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};s===null?r=s=l:s=s.next=l,i=i.next}while(i!==null);s===null?r=s=e:s=s.next=e}else r=s=e;i={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:n.shared,effects:n.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}function Ks(t,e,i,n){var r=t.updateQueue;Ht=!1;var s=r.firstBaseUpdate,l=r.lastBaseUpdate,c=r.shared.pending;if(c!==null){r.shared.pending=null;var o=c,u=o.next;o.next=null,l===null?s=u:l.next=u,l=o;var h=t.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==l&&(c===null?h.firstBaseUpdate=u:c.next=u,h.lastBaseUpdate=o))}if(s!==null){var d=r.baseState;l=0,h=u=o=null,c=s;do{var f=c.lane,m=c.eventTime;if((n&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var g=t,p=c;switch(f=e,m=i,p.tag){case 1:if(g=p.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=p.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=oe({},d,f);break e;case 2:Ht=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[c]:f.push(c))}else m={eventTime:m,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(u=h=m,o=d):h=h.next=m,l|=f;if(c=c.next,c===null){if(c=r.shared.pending,c===null)break;f=c,c=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(o=d),r.baseState=o,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do l|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Mi|=l,t.lanes=l,t.memoizedState=d}}function Bu(t,e,i){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],r=n.callback;if(r!==null){if(n.callback=null,n=i,typeof r!="function")throw Error(E(191,r));r.call(n)}}}var Pr={},Ct=hi(Pr),fr=hi(Pr),pr=hi(Pr);function ki(t){if(t===Pr)throw Error(E(174));return t}function pc(t,e){switch(ee(pr,e),ee(fr,t),ee(Ct,Pr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Dl(e,t)}ne(Ct),ee(Ct,e)}function mn(){ne(Ct),ne(fr),ne(pr)}function Xf(t){ki(pr.current);var e=ki(Ct.current),i=Dl(e,t.type);e!==i&&(ee(fr,t),ee(Ct,i))}function mc(t){fr.current===t&&(ne(Ct),ne(fr))}var se=hi(0);function Xs(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ja=[];function gc(){for(var t=0;t<Ja.length;t++)Ja[t]._workInProgressVersionPrimary=null;Ja.length=0}var ks=It.ReactCurrentDispatcher,Ya=It.ReactCurrentBatchConfig,zi=0,ae=null,ve=null,ye=null,Qs=!1,Xn=!1,mr=0,K0=0;function ze(){throw Error(E(321))}function vc(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!gt(t[i],e[i]))return!1;return!0}function xc(t,e,i,n,r,s){if(zi=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ks.current=t===null||t.memoizedState===null?Y0:G0,t=i(n,r),Xn){s=0;do{if(Xn=!1,mr=0,25<=s)throw Error(E(301));s+=1,ye=ve=null,e.updateQueue=null,ks.current=Z0,t=i(n,r)}while(Xn)}if(ks.current=Js,e=ve!==null&&ve.next!==null,zi=0,ye=ve=ae=null,Qs=!1,e)throw Error(E(300));return t}function yc(){var t=mr!==0;return mr=0,t}function kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ae.memoizedState=ye=t:ye=ye.next=t,ye}function at(){if(ve===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=ye===null?ae.memoizedState:ye.next;if(e!==null)ye=e,ve=t;else{if(t===null)throw Error(E(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ye===null?ae.memoizedState=ye=t:ye=ye.next=t}return ye}function gr(t,e){return typeof e=="function"?e(t):e}function Ga(t){var e=at(),i=e.queue;if(i===null)throw Error(E(311));i.lastRenderedReducer=t;var n=ve,r=n.baseQueue,s=i.pending;if(s!==null){if(r!==null){var l=r.next;r.next=s.next,s.next=l}n.baseQueue=r=s,i.pending=null}if(r!==null){s=r.next,n=n.baseState;var c=l=null,o=null,u=s;do{var h=u.lane;if((zi&h)===h)o!==null&&(o=o.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};o===null?(c=o=d,l=n):o=o.next=d,ae.lanes|=h,Mi|=h}u=u.next}while(u!==null&&u!==s);o===null?l=n:o.next=c,gt(n,e.memoizedState)||(Fe=!0),e.memoizedState=n,e.baseState=l,e.baseQueue=o,i.lastRenderedState=n}if(t=i.interleaved,t!==null){r=t;do s=r.lane,ae.lanes|=s,Mi|=s,r=r.next;while(r!==t)}else r===null&&(i.lanes=0);return[e.memoizedState,i.dispatch]}function Za(t){var e=at(),i=e.queue;if(i===null)throw Error(E(311));i.lastRenderedReducer=t;var n=i.dispatch,r=i.pending,s=e.memoizedState;if(r!==null){i.pending=null;var l=r=r.next;do s=t(s,l.action),l=l.next;while(l!==r);gt(s,e.memoizedState)||(Fe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),i.lastRenderedState=s}return[s,n]}function Qf(){}function Jf(t,e){var i=ae,n=at(),r=e(),s=!gt(n.memoizedState,r);if(s&&(n.memoizedState=r,Fe=!0),n=n.queue,wc(Zf.bind(null,i,n,t),[t]),n.getSnapshot!==e||s||ye!==null&&ye.memoizedState.tag&1){if(i.flags|=2048,vr(9,Gf.bind(null,i,n,r,e),void 0,null),we===null)throw Error(E(349));zi&30||Yf(i,e,r)}return r}function Yf(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Gf(t,e,i,n){e.value=i,e.getSnapshot=n,ep(e)&&tp(t)}function Zf(t,e,i){return i(function(){ep(e)&&tp(t)})}function ep(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!gt(t,i)}catch{return!0}}function tp(t){var e=Bt(t,1);e!==null&&mt(e,t,1,-1)}function Au(t){var e=kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:t},e.queue=t,t=t.dispatch=J0.bind(null,ae,t),[e.memoizedState,t]}function vr(t,e,i,n){return t={tag:t,create:e,destroy:i,deps:n,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(i=e.lastEffect,i===null?e.lastEffect=t.next=t:(n=i.next,i.next=t,t.next=n,e.lastEffect=t)),t}function ip(){return at().memoizedState}function js(t,e,i,n){var r=kt();ae.flags|=t,r.memoizedState=vr(1|e,i,void 0,n===void 0?null:n)}function pa(t,e,i,n){var r=at();n=n===void 0?null:n;var s=void 0;if(ve!==null){var l=ve.memoizedState;if(s=l.destroy,n!==null&&vc(n,l.deps)){r.memoizedState=vr(e,i,s,n);return}}ae.flags|=t,r.memoizedState=vr(1|e,i,s,n)}function Iu(t,e){return js(8390656,8,t,e)}function wc(t,e){return pa(2048,8,t,e)}function np(t,e){return pa(4,2,t,e)}function rp(t,e){return pa(4,4,t,e)}function sp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ap(t,e,i){return i=i!=null?i.concat([t]):null,pa(4,4,sp.bind(null,e,t),i)}function bc(){}function lp(t,e){var i=at();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&vc(e,n[1])?n[0]:(i.memoizedState=[t,e],t)}function op(t,e){var i=at();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&vc(e,n[1])?n[0]:(t=t(),i.memoizedState=[t,e],t)}function cp(t,e,i){return zi&21?(gt(i,e)||(i=pf(),ae.lanes|=i,Mi|=i,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=i)}function X0(t,e){var i=J;J=i!==0&&4>i?i:4,t(!0);var n=Ya.transition;Ya.transition={};try{t(!1),e()}finally{J=i,Ya.transition=n}}function up(){return at().memoizedState}function Q0(t,e,i){var n=ni(t);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},hp(t))dp(e,i);else if(i=qf(t,e,i,n),i!==null){var r=$e();mt(i,t,n,r),fp(i,e,n)}}function J0(t,e,i){var n=ni(t),r={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(hp(t))dp(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var l=e.lastRenderedState,c=s(l,i);if(r.hasEagerState=!0,r.eagerState=c,gt(c,l)){var o=e.interleaved;o===null?(r.next=r,dc(e)):(r.next=o.next,o.next=r),e.interleaved=r;return}}catch{}finally{}i=qf(t,e,r,n),i!==null&&(r=$e(),mt(i,t,n,r),fp(i,e,n))}}function hp(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function dp(t,e){Xn=Qs=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function fp(t,e,i){if(i&4194240){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,Go(t,i)}}var Js={readContext:st,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},Y0={readContext:st,useCallback:function(t,e){return kt().memoizedState=[t,e===void 0?null:e],t},useContext:st,useEffect:Iu,useImperativeHandle:function(t,e,i){return i=i!=null?i.concat([t]):null,js(4194308,4,sp.bind(null,e,t),i)},useLayoutEffect:function(t,e){return js(4194308,4,t,e)},useInsertionEffect:function(t,e){return js(4,2,t,e)},useMemo:function(t,e){var i=kt();return e=e===void 0?null:e,t=t(),i.memoizedState=[t,e],t},useReducer:function(t,e,i){var n=kt();return e=i!==void 0?i(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=Q0.bind(null,ae,t),[n.memoizedState,t]},useRef:function(t){var e=kt();return t={current:t},e.memoizedState=t},useState:Au,useDebugValue:bc,useDeferredValue:function(t){return kt().memoizedState=t},useTransition:function(){var t=Au(!1),e=t[0];return t=X0.bind(null,t[1]),kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,i){var n=ae,r=kt();if(re){if(i===void 0)throw Error(E(407));i=i()}else{if(i=e(),we===null)throw Error(E(349));zi&30||Yf(n,e,i)}r.memoizedState=i;var s={value:i,getSnapshot:e};return r.queue=s,Iu(Zf.bind(null,n,s,t),[t]),n.flags|=2048,vr(9,Gf.bind(null,n,s,i,e),void 0,null),i},useId:function(){var t=kt(),e=we.identifierPrefix;if(re){var i=Tt,n=_t;i=(n&~(1<<32-pt(n)-1)).toString(32)+i,e=":"+e+"R"+i,i=mr++,0<i&&(e+="H"+i.toString(32)),e+=":"}else i=K0++,e=":"+e+"r"+i.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},G0={readContext:st,useCallback:lp,useContext:st,useEffect:wc,useImperativeHandle:ap,useInsertionEffect:np,useLayoutEffect:rp,useMemo:op,useReducer:Ga,useRef:ip,useState:function(){return Ga(gr)},useDebugValue:bc,useDeferredValue:function(t){var e=at();return cp(e,ve.memoizedState,t)},useTransition:function(){var t=Ga(gr)[0],e=at().memoizedState;return[t,e]},useMutableSource:Qf,useSyncExternalStore:Jf,useId:up,unstable_isNewReconciler:!1},Z0={readContext:st,useCallback:lp,useContext:st,useEffect:wc,useImperativeHandle:ap,useInsertionEffect:np,useLayoutEffect:rp,useMemo:op,useReducer:Za,useRef:ip,useState:function(){return Za(gr)},useDebugValue:bc,useDeferredValue:function(t){var e=at();return ve===null?e.memoizedState=t:cp(e,ve.memoizedState,t)},useTransition:function(){var t=Za(gr)[0],e=at().memoizedState;return[t,e]},useMutableSource:Qf,useSyncExternalStore:Jf,useId:up,unstable_isNewReconciler:!1};function ht(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var i in t)e[i]===void 0&&(e[i]=t[i]);return e}return e}function no(t,e,i,n){e=t.memoizedState,i=i(n,e),i=i==null?e:oe({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var ma={isMounted:function(t){return(t=t._reactInternals)?Ai(t)===t:!1},enqueueSetState:function(t,e,i){t=t._reactInternals;var n=$e(),r=ni(t),s=Rt(n,r);s.payload=e,i!=null&&(s.callback=i),e=ti(t,s,r),e!==null&&(mt(e,t,r,n),bs(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var n=$e(),r=ni(t),s=Rt(n,r);s.tag=1,s.payload=e,i!=null&&(s.callback=i),e=ti(t,s,r),e!==null&&(mt(e,t,r,n),bs(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=$e(),n=ni(t),r=Rt(i,n);r.tag=2,e!=null&&(r.callback=e),e=ti(t,r,n),e!==null&&(mt(e,t,n,i),bs(e,t,n))}};function Ou(t,e,i,n,r,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,l):e.prototype&&e.prototype.isPureReactComponent?!cr(i,n)||!cr(r,s):!0}function pp(t,e,i){var n=!1,r=oi,s=e.contextType;return typeof s=="object"&&s!==null?s=st(s):(r=Ue(e)?Ci:Te.current,n=e.contextTypes,s=(n=n!=null)?dn(t,r):oi),e=new e(i,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ma,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fu(t,e,i,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,n),e.state!==t&&ma.enqueueReplaceState(e,e.state,null)}function ro(t,e,i,n){var r=t.stateNode;r.props=i,r.state=t.memoizedState,r.refs={},fc(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=st(s):(s=Ue(e)?Ci:Te.current,r.context=dn(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(no(t,e,s,i),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ma.enqueueReplaceState(r,r.state,null),Ks(t,i,r,n),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function gn(t,e){try{var i="",n=e;do i+=Eg(n),n=n.return;while(n);var r=i}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function el(t,e,i){return{value:t,source:null,stack:i??null,digest:e??null}}function so(t,e){try{console.error(e.value)}catch(i){setTimeout(function(){throw i})}}var ev=typeof WeakMap=="function"?WeakMap:Map;function mp(t,e,i){i=Rt(-1,i),i.tag=3,i.payload={element:null};var n=e.value;return i.callback=function(){Gs||(Gs=!0,go=n),so(t,e)},i}function gp(t,e,i){i=Rt(-1,i),i.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var r=e.value;i.payload=function(){return n(r)},i.callback=function(){so(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(i.callback=function(){so(t,e),typeof n!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),i}function Vu(t,e,i){var n=t.pingCache;if(n===null){n=t.pingCache=new ev;var r=new Set;n.set(e,r)}else r=n.get(e),r===void 0&&(r=new Set,n.set(e,r));r.has(i)||(r.add(i),t=pv.bind(null,t,e,i),e.then(t,t))}function Uu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wu(t,e,i,n,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(e=Rt(-1,1),e.tag=2,ti(i,e,1))),i.lanes|=1),t)}var tv=It.ReactCurrentOwner,Fe=!1;function Re(t,e,i,n){e.child=t===null?Hf(e,null,i,n):pn(e,t.child,i,n)}function Hu(t,e,i,n,r){i=i.render;var s=e.ref;return ln(e,r),n=xc(t,e,i,n,s,r),i=yc(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,At(t,e,r)):(re&&i&&ac(e),e.flags|=1,Re(t,e,n,r),e.child)}function qu(t,e,i,n,r){if(t===null){var s=i.type;return typeof s=="function"&&!Mc(s)&&s.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(e.tag=15,e.type=s,vp(t,e,s,n,r)):(t=Es(i.type,null,n,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var l=s.memoizedProps;if(i=i.compare,i=i!==null?i:cr,i(l,n)&&t.ref===e.ref)return At(t,e,r)}return e.flags|=1,t=ri(s,n),t.ref=e.ref,t.return=e,e.child=t}function vp(t,e,i,n,r){if(t!==null){var s=t.memoizedProps;if(cr(s,n)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=n=s,(t.lanes&r)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,At(t,e,r)}return ao(t,e,i,n,r)}function xp(t,e,i){var n=e.pendingProps,r=n.children,s=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Zi,qe),qe|=i;else{if(!(i&1073741824))return t=s!==null?s.baseLanes|i:i,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Zi,qe),qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:i,ee(Zi,qe),qe|=n}else s!==null?(n=s.baseLanes|i,e.memoizedState=null):n=i,ee(Zi,qe),qe|=n;return Re(t,e,r,i),e.child}function yp(t,e){var i=e.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(e.flags|=512,e.flags|=2097152)}function ao(t,e,i,n,r){var s=Ue(i)?Ci:Te.current;return s=dn(e,s),ln(e,r),i=xc(t,e,i,n,s,r),n=yc(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,At(t,e,r)):(re&&n&&ac(e),e.flags|=1,Re(t,e,i,r),e.child)}function Ku(t,e,i,n,r){if(Ue(i)){var s=!0;Vs(e)}else s=!1;if(ln(e,r),e.stateNode===null)Ss(t,e),pp(e,i,n),ro(e,i,n,r),n=!0;else if(t===null){var l=e.stateNode,c=e.memoizedProps;l.props=c;var o=l.context,u=i.contextType;typeof u=="object"&&u!==null?u=st(u):(u=Ue(i)?Ci:Te.current,u=dn(e,u));var h=i.getDerivedStateFromProps,d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==n||o!==u)&&Fu(e,l,n,u),Ht=!1;var f=e.memoizedState;l.state=f,Ks(e,n,l,r),o=e.memoizedState,c!==n||f!==o||Ve.current||Ht?(typeof h=="function"&&(no(e,i,h,n),o=e.memoizedState),(c=Ht||Ou(e,i,c,n,f,o,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=o),l.props=n,l.state=o,l.context=u,n=c):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{l=e.stateNode,Kf(t,e),c=e.memoizedProps,u=e.type===e.elementType?c:ht(e.type,c),l.props=u,d=e.pendingProps,f=l.context,o=i.contextType,typeof o=="object"&&o!==null?o=st(o):(o=Ue(i)?Ci:Te.current,o=dn(e,o));var m=i.getDerivedStateFromProps;(h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==d||f!==o)&&Fu(e,l,n,o),Ht=!1,f=e.memoizedState,l.state=f,Ks(e,n,l,r);var g=e.memoizedState;c!==d||f!==g||Ve.current||Ht?(typeof m=="function"&&(no(e,i,m,n),g=e.memoizedState),(u=Ht||Ou(e,i,u,n,f,g,o)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,g,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,g,o)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=g),l.props=n,l.state=g,l.context=o,n=u):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return lo(t,e,i,n,s,r)}function lo(t,e,i,n,r,s){yp(t,e);var l=(e.flags&128)!==0;if(!n&&!l)return r&&Pu(e,i,!1),At(t,e,s);n=e.stateNode,tv.current=e;var c=l&&typeof i.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&l?(e.child=pn(e,t.child,null,s),e.child=pn(e,null,c,s)):Re(t,e,c,s),e.memoizedState=n.state,r&&Pu(e,i,!0),e.child}function wp(t){var e=t.stateNode;e.pendingContext?Tu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tu(t,e.context,!1),pc(t,e.containerInfo)}function Xu(t,e,i,n,r){return fn(),oc(r),e.flags|=256,Re(t,e,i,n),e.child}var oo={dehydrated:null,treeContext:null,retryLane:0};function co(t){return{baseLanes:t,cachePool:null,transitions:null}}function bp(t,e,i){var n=e.pendingProps,r=se.current,s=!1,l=(e.flags&128)!==0,c;if((c=l)||(c=t!==null&&t.memoizedState===null?!1:(r&2)!==0),c?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ee(se,r&1),t===null)return to(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=n.children,t=n.fallback,s?(n=e.mode,s=e.child,l={mode:"hidden",children:l},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=xa(l,n,0,null),t=Si(t,n,i,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=co(i),e.memoizedState=oo,t):kc(e,l));if(r=t.memoizedState,r!==null&&(c=r.dehydrated,c!==null))return iv(t,e,l,n,c,r,i);if(s){s=n.fallback,l=e.mode,r=t.child,c=r.sibling;var o={mode:"hidden",children:n.children};return!(l&1)&&e.child!==r?(n=e.child,n.childLanes=0,n.pendingProps=o,e.deletions=null):(n=ri(r,o),n.subtreeFlags=r.subtreeFlags&14680064),c!==null?s=ri(c,s):(s=Si(s,l,i,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,n=s,s=e.child,l=t.child.memoizedState,l=l===null?co(i):{baseLanes:l.baseLanes|i,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~i,e.memoizedState=oo,n}return s=t.child,t=s.sibling,n=ri(s,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=n,e.memoizedState=null,n}function kc(t,e){return e=xa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gr(t,e,i,n){return n!==null&&oc(n),pn(e,t.child,null,i),t=kc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iv(t,e,i,n,r,s,l){if(i)return e.flags&256?(e.flags&=-257,n=el(Error(E(422))),Gr(t,e,l,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=n.fallback,r=e.mode,n=xa({mode:"visible",children:n.children},r,0,null),s=Si(s,r,l,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,e.mode&1&&pn(e,t.child,null,l),e.child.memoizedState=co(l),e.memoizedState=oo,s);if(!(e.mode&1))return Gr(t,e,l,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var c=n.dgst;return n=c,s=Error(E(419)),n=el(s,n,void 0),Gr(t,e,l,n)}if(c=(l&t.childLanes)!==0,Fe||c){if(n=we,n!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(n.suspendedLanes|l)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Bt(t,r),mt(n,t,r,-1))}return zc(),n=el(Error(E(421))),Gr(t,e,l,n)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=mv.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ke=ei(r.nextSibling),Xe=e,re=!0,ft=null,t!==null&&(tt[it++]=_t,tt[it++]=Tt,tt[it++]=Ei,_t=t.id,Tt=t.overflow,Ei=e),e=kc(e,n.children),e.flags|=4096,e)}function Qu(t,e,i){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),io(t.return,e,i)}function tl(t,e,i,n,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=i,s.tailMode=r)}function kp(t,e,i){var n=e.pendingProps,r=n.revealOrder,s=n.tail;if(Re(t,e,n.children,i),n=se.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qu(t,i,e);else if(t.tag===19)Qu(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ee(se,n),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(i=e.child,r=null;i!==null;)t=i.alternate,t!==null&&Xs(t)===null&&(r=i),i=i.sibling;i=r,i===null?(r=e.child,e.child=null):(r=i.sibling,i.sibling=null),tl(e,!1,r,i,s);break;case"backwards":for(i=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xs(t)===null){e.child=r;break}t=r.sibling,r.sibling=i,i=r,r=t}tl(e,!0,i,null,s);break;case"together":tl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ss(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function At(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Mi|=e.lanes,!(i&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,i=ri(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=ri(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function nv(t,e,i){switch(e.tag){case 3:wp(e),fn();break;case 5:Xf(e);break;case 1:Ue(e.type)&&Vs(e);break;case 4:pc(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,r=e.memoizedProps.value;ee(Hs,n._currentValue),n._currentValue=r;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(ee(se,se.current&1),e.flags|=128,null):i&e.child.childLanes?bp(t,e,i):(ee(se,se.current&1),t=At(t,e,i),t!==null?t.sibling:null);ee(se,se.current&1);break;case 19:if(n=(i&e.childLanes)!==0,t.flags&128){if(n)return kp(t,e,i);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ee(se,se.current),n)break;return null;case 22:case 23:return e.lanes=0,xp(t,e,i)}return At(t,e,i)}var jp,uo,Sp,Np;jp=function(t,e){for(var i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};uo=function(){};Sp=function(t,e,i,n){var r=t.memoizedProps;if(r!==n){t=e.stateNode,ki(Ct.current);var s=null;switch(i){case"input":r=Pl(t,r),n=Pl(t,n),s=[];break;case"select":r=oe({},r,{value:void 0}),n=oe({},n,{value:void 0}),s=[];break;case"textarea":r=$l(t,r),n=$l(t,n),s=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Os)}Bl(i,n);var l;i=null;for(u in r)if(!n.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var c=r[u];for(l in c)c.hasOwnProperty(l)&&(i||(i={}),i[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ir.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var o=n[u];if(c=r!=null?r[u]:void 0,n.hasOwnProperty(u)&&o!==c&&(o!=null||c!=null))if(u==="style")if(c){for(l in c)!c.hasOwnProperty(l)||o&&o.hasOwnProperty(l)||(i||(i={}),i[l]="");for(l in o)o.hasOwnProperty(l)&&c[l]!==o[l]&&(i||(i={}),i[l]=o[l])}else i||(s||(s=[]),s.push(u,i)),i=o;else u==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,c=c?c.__html:void 0,o!=null&&c!==o&&(s=s||[]).push(u,o)):u==="children"?typeof o!="string"&&typeof o!="number"||(s=s||[]).push(u,""+o):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ir.hasOwnProperty(u)?(o!=null&&u==="onScroll"&&te("scroll",t),s||c===o||(s=[])):(s=s||[]).push(u,o))}i&&(s=s||[]).push("style",i);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Np=function(t,e,i,n){i!==n&&(e.flags|=4)};function $n(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,n=0;if(e)for(var r=t.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=n,t.childLanes=i,e}function rv(t,e,i){var n=e.pendingProps;switch(lc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return Ue(e.type)&&Fs(),Me(e),null;case 3:return n=e.stateNode,mn(),ne(Ve),ne(Te),gc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Jr(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ft!==null&&(yo(ft),ft=null))),uo(t,e),Me(e),null;case 5:mc(e);var r=ki(pr.current);if(i=e.type,t!==null&&e.stateNode!=null)Sp(t,e,i,n,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(E(166));return Me(e),null}if(t=ki(Ct.current),Jr(e)){n=e.stateNode,i=e.type;var s=e.memoizedProps;switch(n[jt]=e,n[dr]=s,t=(e.mode&1)!==0,i){case"dialog":te("cancel",n),te("close",n);break;case"iframe":case"object":case"embed":te("load",n);break;case"video":case"audio":for(r=0;r<Fn.length;r++)te(Fn[r],n);break;case"source":te("error",n);break;case"img":case"image":case"link":te("error",n),te("load",n);break;case"details":te("toggle",n);break;case"input":ru(n,s),te("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},te("invalid",n);break;case"textarea":au(n,s),te("invalid",n)}Bl(i,s),r=null;for(var l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="children"?typeof c=="string"?n.textContent!==c&&(s.suppressHydrationWarning!==!0&&Qr(n.textContent,c,t),r=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&Qr(n.textContent,c,t),r=["children",""+c]):ir.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&te("scroll",n)}switch(i){case"input":Fr(n),su(n,s,!0);break;case"textarea":Fr(n),lu(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Os)}n=r,e.updateQueue=n,n!==null&&(e.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gd(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=l.createElement(i,{is:n.is}):(t=l.createElement(i),i==="select"&&(l=t,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):t=l.createElementNS(t,i),t[jt]=e,t[dr]=n,jp(t,e,!1,!1),e.stateNode=t;e:{switch(l=Al(i,n),i){case"dialog":te("cancel",t),te("close",t),r=n;break;case"iframe":case"object":case"embed":te("load",t),r=n;break;case"video":case"audio":for(r=0;r<Fn.length;r++)te(Fn[r],t);r=n;break;case"source":te("error",t),r=n;break;case"img":case"image":case"link":te("error",t),te("load",t),r=n;break;case"details":te("toggle",t),r=n;break;case"input":ru(t,n),r=Pl(t,n),te("invalid",t);break;case"option":r=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},r=oe({},n,{value:void 0}),te("invalid",t);break;case"textarea":au(t,n),r=$l(t,n),te("invalid",t);break;default:r=n}Bl(i,r),c=r;for(s in c)if(c.hasOwnProperty(s)){var o=c[s];s==="style"?tf(t,o):s==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&Zd(t,o)):s==="children"?typeof o=="string"?(i!=="textarea"||o!=="")&&nr(t,o):typeof o=="number"&&nr(t,""+o):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ir.hasOwnProperty(s)?o!=null&&s==="onScroll"&&te("scroll",t):o!=null&&qo(t,s,o,l))}switch(i){case"input":Fr(t),su(t,n,!1);break;case"textarea":Fr(t),lu(t);break;case"option":n.value!=null&&t.setAttribute("value",""+li(n.value));break;case"select":t.multiple=!!n.multiple,s=n.value,s!=null?nn(t,!!n.multiple,s,!1):n.defaultValue!=null&&nn(t,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Os)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Np(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(E(166));if(i=ki(pr.current),ki(Ct.current),Jr(e)){if(n=e.stateNode,i=e.memoizedProps,n[jt]=e,(s=n.nodeValue!==i)&&(t=Xe,t!==null))switch(t.tag){case 3:Qr(n.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qr(n.nodeValue,i,(t.mode&1)!==0)}s&&(e.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[jt]=e,e.stateNode=n}return Me(e),null;case 13:if(ne(se),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&Ke!==null&&e.mode&1&&!(e.flags&128))Uf(),fn(),e.flags|=98560,s=!1;else if(s=Jr(e),n!==null&&n.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[jt]=e}else fn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else ft!==null&&(yo(ft),ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=i,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?xe===0&&(xe=3):zc())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return mn(),uo(t,e),t===null&&ur(e.stateNode.containerInfo),Me(e),null;case 10:return hc(e.type._context),Me(e),null;case 17:return Ue(e.type)&&Fs(),Me(e),null;case 19:if(ne(se),s=e.memoizedState,s===null)return Me(e),null;if(n=(e.flags&128)!==0,l=s.rendering,l===null)if(n)$n(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Xs(t),l!==null){for(e.flags|=128,$n(s,!1),n=l.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=i,i=e.child;i!==null;)s=i,t=n,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return ee(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>vn&&(e.flags|=128,n=!0,$n(s,!1),e.lanes=4194304)}else{if(!n)if(t=Xs(l),t!==null){if(e.flags|=128,n=!0,i=t.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),$n(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!re)return Me(e),null}else 2*fe()-s.renderingStartTime>vn&&i!==1073741824&&(e.flags|=128,n=!0,$n(s,!1),e.lanes=4194304);s.isBackwards?(l.sibling=e.child,e.child=l):(i=s.last,i!==null?i.sibling=l:e.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,i=se.current,ee(se,n?i&1|2:i&1),e):(Me(e),null);case 22:case 23:return Ec(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?qe&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function sv(t,e){switch(lc(e),e.tag){case 1:return Ue(e.type)&&Fs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mn(),ne(Ve),ne(Te),gc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mc(e),null;case 13:if(ne(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));fn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(se),null;case 4:return mn(),null;case 10:return hc(e.type._context),null;case 22:case 23:return Ec(),null;case 24:return null;default:return null}}var Zr=!1,_e=!1,av=typeof WeakSet=="function"?WeakSet:Set,$=null;function Gi(t,e){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){ue(t,e,n)}else i.current=null}function ho(t,e,i){try{i()}catch(n){ue(t,e,n)}}var Ju=!1;function lv(t,e){if(Xl=Bs,t=_f(),sc(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var l=0,c=-1,o=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var m;d!==i||r!==0&&d.nodeType!==3||(c=l+r),d!==s||n!==0&&d.nodeType!==3||(o=l+n),d.nodeType===3&&(l+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===i&&++u===r&&(c=l),f===s&&++h===n&&(o=l),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}i=c===-1||o===-1?null:{start:c,end:o}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ql={focusedElem:t,selectionRange:i},Bs=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var p=g.memoizedProps,w=g.memoizedState,v=e.stateNode,x=v.getSnapshotBeforeUpdate(e.elementType===e.type?p:ht(e.type,p),w);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(b){ue(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return g=Ju,Ju=!1,g}function Qn(t,e,i){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ho(e,i,s)}r=r.next}while(r!==n)}}function ga(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var i=e=e.next;do{if((i.tag&t)===t){var n=i.create;i.destroy=n()}i=i.next}while(i!==e)}}function fo(t){var e=t.ref;if(e!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof e=="function"?e(t):e.current=t}}function Cp(t){var e=t.alternate;e!==null&&(t.alternate=null,Cp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jt],delete e[dr],delete e[Gl],delete e[U0],delete e[W0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ep(t){return t.tag===5||t.tag===3||t.tag===4}function Yu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ep(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function po(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.nodeType===8?i.parentNode.insertBefore(t,e):i.insertBefore(t,e):(i.nodeType===8?(e=i.parentNode,e.insertBefore(t,i)):(e=i,e.appendChild(t)),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Os));else if(n!==4&&(t=t.child,t!==null))for(po(t,e,i),t=t.sibling;t!==null;)po(t,e,i),t=t.sibling}function mo(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(mo(t,e,i),t=t.sibling;t!==null;)mo(t,e,i),t=t.sibling}var Se=null,dt=!1;function Vt(t,e,i){for(i=i.child;i!==null;)zp(t,e,i),i=i.sibling}function zp(t,e,i){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(oa,i)}catch{}switch(i.tag){case 5:_e||Gi(i,e);case 6:var n=Se,r=dt;Se=null,Vt(t,e,i),Se=n,dt=r,Se!==null&&(dt?(t=Se,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):Se.removeChild(i.stateNode));break;case 18:Se!==null&&(dt?(t=Se,i=i.stateNode,t.nodeType===8?Xa(t.parentNode,i):t.nodeType===1&&Xa(t,i),lr(t)):Xa(Se,i.stateNode));break;case 4:n=Se,r=dt,Se=i.stateNode.containerInfo,dt=!0,Vt(t,e,i),Se=n,dt=r;break;case 0:case 11:case 14:case 15:if(!_e&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var s=r,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&ho(i,e,l),r=r.next}while(r!==n)}Vt(t,e,i);break;case 1:if(!_e&&(Gi(i,e),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(c){ue(i,e,c)}Vt(t,e,i);break;case 21:Vt(t,e,i);break;case 22:i.mode&1?(_e=(n=_e)||i.memoizedState!==null,Vt(t,e,i),_e=n):Vt(t,e,i);break;default:Vt(t,e,i)}}function Gu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new av),e.forEach(function(n){var r=gv.bind(null,t,n);i.has(n)||(i.add(n),n.then(r,r))})}}function ut(t,e){var i=e.deletions;if(i!==null)for(var n=0;n<i.length;n++){var r=i[n];try{var s=t,l=e,c=l;e:for(;c!==null;){switch(c.tag){case 5:Se=c.stateNode,dt=!1;break e;case 3:Se=c.stateNode.containerInfo,dt=!0;break e;case 4:Se=c.stateNode.containerInfo,dt=!0;break e}c=c.return}if(Se===null)throw Error(E(160));zp(s,l,r),Se=null,dt=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(u){ue(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mp(e,t),e=e.sibling}function Mp(t,e){var i=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ut(e,t),wt(t),n&4){try{Qn(3,t,t.return),ga(3,t)}catch(p){ue(t,t.return,p)}try{Qn(5,t,t.return)}catch(p){ue(t,t.return,p)}}break;case 1:ut(e,t),wt(t),n&512&&i!==null&&Gi(i,i.return);break;case 5:if(ut(e,t),wt(t),n&512&&i!==null&&Gi(i,i.return),t.flags&32){var r=t.stateNode;try{nr(r,"")}catch(p){ue(t,t.return,p)}}if(n&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,l=i!==null?i.memoizedProps:s,c=t.type,o=t.updateQueue;if(t.updateQueue=null,o!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Jd(r,s),Al(c,l);var u=Al(c,s);for(l=0;l<o.length;l+=2){var h=o[l],d=o[l+1];h==="style"?tf(r,d):h==="dangerouslySetInnerHTML"?Zd(r,d):h==="children"?nr(r,d):qo(r,h,d,u)}switch(c){case"input":Ll(r,s);break;case"textarea":Yd(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?nn(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?nn(r,!!s.multiple,s.defaultValue,!0):nn(r,!!s.multiple,s.multiple?[]:"",!1))}r[dr]=s}catch(p){ue(t,t.return,p)}}break;case 6:if(ut(e,t),wt(t),n&4){if(t.stateNode===null)throw Error(E(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(p){ue(t,t.return,p)}}break;case 3:if(ut(e,t),wt(t),n&4&&i!==null&&i.memoizedState.isDehydrated)try{lr(e.containerInfo)}catch(p){ue(t,t.return,p)}break;case 4:ut(e,t),wt(t);break;case 13:ut(e,t),wt(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nc=fe())),n&4&&Gu(t);break;case 22:if(h=i!==null&&i.memoizedState!==null,t.mode&1?(_e=(u=_e)||h,ut(e,t),_e=u):ut(e,t),wt(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for($=t,h=t.child;h!==null;){for(d=$=h;$!==null;){switch(f=$,m=f.child,f.tag){case 0:case 11:case 14:case 15:Qn(4,f,f.return);break;case 1:Gi(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){n=f,i=f.return;try{e=n,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(p){ue(n,i,p)}}break;case 5:Gi(f,f.return);break;case 22:if(f.memoizedState!==null){eh(d);continue}}m!==null?(m.return=f,$=m):eh(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=d.stateNode,o=d.memoizedProps.style,l=o!=null&&o.hasOwnProperty("display")?o.display:null,c.style.display=ef("display",l))}catch(p){ue(t,t.return,p)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(p){ue(t,t.return,p)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ut(e,t),wt(t),n&4&&Gu(t);break;case 21:break;default:ut(e,t),wt(t)}}function wt(t){var e=t.flags;if(e&2){try{e:{for(var i=t.return;i!==null;){if(Ep(i)){var n=i;break e}i=i.return}throw Error(E(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&(nr(r,""),n.flags&=-33);var s=Yu(t);mo(t,s,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Yu(t);po(t,c,l);break;default:throw Error(E(161))}}catch(o){ue(t,t.return,o)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ov(t,e,i){$=t,_p(t)}function _p(t,e,i){for(var n=(t.mode&1)!==0;$!==null;){var r=$,s=r.child;if(r.tag===22&&n){var l=r.memoizedState!==null||Zr;if(!l){var c=r.alternate,o=c!==null&&c.memoizedState!==null||_e;c=Zr;var u=_e;if(Zr=l,(_e=o)&&!u)for($=r;$!==null;)l=$,o=l.child,l.tag===22&&l.memoizedState!==null?th(r):o!==null?(o.return=l,$=o):th(r);for(;s!==null;)$=s,_p(s),s=s.sibling;$=r,Zr=c,_e=u}Zu(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,$=s):Zu(t)}}function Zu(t){for(;$!==null;){var e=$;if(e.flags&8772){var i=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_e||ga(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!_e)if(i===null)n.componentDidMount();else{var r=e.elementType===e.type?i.memoizedProps:ht(e.type,i.memoizedProps);n.componentDidUpdate(r,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bu(e,s,n);break;case 3:var l=e.updateQueue;if(l!==null){if(i=null,e.child!==null)switch(e.child.tag){case 5:i=e.child.stateNode;break;case 1:i=e.child.stateNode}Bu(e,l,i)}break;case 5:var c=e.stateNode;if(i===null&&e.flags&4){i=c;var o=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&i.focus();break;case"img":o.src&&(i.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&lr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}_e||e.flags&512&&fo(e)}catch(f){ue(e,e.return,f)}}if(e===t){$=null;break}if(i=e.sibling,i!==null){i.return=e.return,$=i;break}$=e.return}}function eh(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var i=e.sibling;if(i!==null){i.return=e.return,$=i;break}$=e.return}}function th(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var i=e.return;try{ga(4,e)}catch(o){ue(e,i,o)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var r=e.return;try{n.componentDidMount()}catch(o){ue(e,r,o)}}var s=e.return;try{fo(e)}catch(o){ue(e,s,o)}break;case 5:var l=e.return;try{fo(e)}catch(o){ue(e,l,o)}}}catch(o){ue(e,e.return,o)}if(e===t){$=null;break}var c=e.sibling;if(c!==null){c.return=e.return,$=c;break}$=e.return}}var cv=Math.ceil,Ys=It.ReactCurrentDispatcher,jc=It.ReactCurrentOwner,rt=It.ReactCurrentBatchConfig,X=0,we=null,me=null,Ce=0,qe=0,Zi=hi(0),xe=0,xr=null,Mi=0,va=0,Sc=0,Jn=null,Oe=null,Nc=0,vn=1/0,zt=null,Gs=!1,go=null,ii=null,es=!1,Qt=null,Zs=0,Yn=0,vo=null,Ns=-1,Cs=0;function $e(){return X&6?fe():Ns!==-1?Ns:Ns=fe()}function ni(t){return t.mode&1?X&2&&Ce!==0?Ce&-Ce:q0.transition!==null?(Cs===0&&(Cs=pf()),Cs):(t=J,t!==0||(t=window.event,t=t===void 0?16:bf(t.type)),t):1}function mt(t,e,i,n){if(50<Yn)throw Yn=0,vo=null,Error(E(185));Mr(t,i,n),(!(X&2)||t!==we)&&(t===we&&(!(X&2)&&(va|=i),xe===4&&Kt(t,Ce)),We(t,n),i===1&&X===0&&!(e.mode&1)&&(vn=fe()+500,fa&&di()))}function We(t,e){var i=t.callbackNode;qg(t,e);var n=Ds(t,t===we?Ce:0);if(n===0)i!==null&&uu(i),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(i!=null&&uu(i),e===1)t.tag===0?H0(ih.bind(null,t)):Of(ih.bind(null,t)),F0(function(){!(X&6)&&di()}),i=null;else{switch(mf(n)){case 1:i=Yo;break;case 4:i=df;break;case 16:i=$s;break;case 536870912:i=ff;break;default:i=$s}i=Ap(i,Tp.bind(null,t))}t.callbackPriority=e,t.callbackNode=i}}function Tp(t,e){if(Ns=-1,Cs=0,X&6)throw Error(E(327));var i=t.callbackNode;if(on()&&t.callbackNode!==i)return null;var n=Ds(t,t===we?Ce:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=ea(t,n);else{e=n;var r=X;X|=2;var s=Lp();(we!==t||Ce!==e)&&(zt=null,vn=fe()+500,ji(t,e));do try{dv();break}catch(c){Pp(t,c)}while(!0);uc(),Ys.current=s,X=r,me!==null?e=0:(we=null,Ce=0,e=xe)}if(e!==0){if(e===2&&(r=Ul(t),r!==0&&(n=r,e=xo(t,r))),e===1)throw i=xr,ji(t,0),Kt(t,n),We(t,fe()),i;if(e===6)Kt(t,n);else{if(r=t.current.alternate,!(n&30)&&!uv(r)&&(e=ea(t,n),e===2&&(s=Ul(t),s!==0&&(n=s,e=xo(t,s))),e===1))throw i=xr,ji(t,0),Kt(t,n),We(t,fe()),i;switch(t.finishedWork=r,t.finishedLanes=n,e){case 0:case 1:throw Error(E(345));case 2:xi(t,Oe,zt);break;case 3:if(Kt(t,n),(n&130023424)===n&&(e=Nc+500-fe(),10<e)){if(Ds(t,0)!==0)break;if(r=t.suspendedLanes,(r&n)!==n){$e(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Yl(xi.bind(null,t,Oe,zt),e);break}xi(t,Oe,zt);break;case 4:if(Kt(t,n),(n&4194240)===n)break;for(e=t.eventTimes,r=-1;0<n;){var l=31-pt(n);s=1<<l,l=e[l],l>r&&(r=l),n&=~s}if(n=r,n=fe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*cv(n/1960))-n,10<n){t.timeoutHandle=Yl(xi.bind(null,t,Oe,zt),n);break}xi(t,Oe,zt);break;case 5:xi(t,Oe,zt);break;default:throw Error(E(329))}}}return We(t,fe()),t.callbackNode===i?Tp.bind(null,t):null}function xo(t,e){var i=Jn;return t.current.memoizedState.isDehydrated&&(ji(t,e).flags|=256),t=ea(t,e),t!==2&&(e=Oe,Oe=i,e!==null&&yo(e)),t}function yo(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function uv(t){for(var e=t;;){if(e.flags&16384){var i=e.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var r=i[n],s=r.getSnapshot;r=r.value;try{if(!gt(s(),r))return!1}catch{return!1}}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kt(t,e){for(e&=~Sc,e&=~va,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var i=31-pt(e),n=1<<i;t[i]=-1,e&=~n}}function ih(t){if(X&6)throw Error(E(327));on();var e=Ds(t,0);if(!(e&1))return We(t,fe()),null;var i=ea(t,e);if(t.tag!==0&&i===2){var n=Ul(t);n!==0&&(e=n,i=xo(t,n))}if(i===1)throw i=xr,ji(t,0),Kt(t,e),We(t,fe()),i;if(i===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xi(t,Oe,zt),We(t,fe()),null}function Cc(t,e){var i=X;X|=1;try{return t(e)}finally{X=i,X===0&&(vn=fe()+500,fa&&di())}}function _i(t){Qt!==null&&Qt.tag===0&&!(X&6)&&on();var e=X;X|=1;var i=rt.transition,n=J;try{if(rt.transition=null,J=1,t)return t()}finally{J=n,rt.transition=i,X=e,!(X&6)&&di()}}function Ec(){qe=Zi.current,ne(Zi)}function ji(t,e){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,O0(i)),me!==null)for(i=me.return;i!==null;){var n=i;switch(lc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Fs();break;case 3:mn(),ne(Ve),ne(Te),gc();break;case 5:mc(n);break;case 4:mn();break;case 13:ne(se);break;case 19:ne(se);break;case 10:hc(n.type._context);break;case 22:case 23:Ec()}i=i.return}if(we=t,me=t=ri(t.current,null),Ce=qe=e,xe=0,xr=null,Sc=va=Mi=0,Oe=Jn=null,bi!==null){for(e=0;e<bi.length;e++)if(i=bi[e],n=i.interleaved,n!==null){i.interleaved=null;var r=n.next,s=i.pending;if(s!==null){var l=s.next;s.next=r,n.next=l}i.pending=n}bi=null}return t}function Pp(t,e){do{var i=me;try{if(uc(),ks.current=Js,Qs){for(var n=ae.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Qs=!1}if(zi=0,ye=ve=ae=null,Xn=!1,mr=0,jc.current=null,i===null||i.return===null){xe=1,xr=e,me=null;break}e:{var s=t,l=i.return,c=i,o=e;if(e=Ce,c.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var u=o,h=c,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Uu(l);if(m!==null){m.flags&=-257,Wu(m,l,c,s,e),m.mode&1&&Vu(s,u,e),e=m,o=u;var g=e.updateQueue;if(g===null){var p=new Set;p.add(o),e.updateQueue=p}else g.add(o);break e}else{if(!(e&1)){Vu(s,u,e),zc();break e}o=Error(E(426))}}else if(re&&c.mode&1){var w=Uu(l);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Wu(w,l,c,s,e),oc(gn(o,c));break e}}s=o=gn(o,c),xe!==4&&(xe=2),Jn===null?Jn=[s]:Jn.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=mp(s,o,e);Du(s,v);break e;case 1:c=o;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ii===null||!ii.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=gp(s,c,e);Du(s,b);break e}}s=s.return}while(s!==null)}$p(i)}catch(j){e=j,me===i&&i!==null&&(me=i=i.return);continue}break}while(!0)}function Lp(){var t=Ys.current;return Ys.current=Js,t===null?Js:t}function zc(){(xe===0||xe===3||xe===2)&&(xe=4),we===null||!(Mi&268435455)&&!(va&268435455)||Kt(we,Ce)}function ea(t,e){var i=X;X|=2;var n=Lp();(we!==t||Ce!==e)&&(zt=null,ji(t,e));do try{hv();break}catch(r){Pp(t,r)}while(!0);if(uc(),X=i,Ys.current=n,me!==null)throw Error(E(261));return we=null,Ce=0,xe}function hv(){for(;me!==null;)Rp(me)}function dv(){for(;me!==null&&!Bg();)Rp(me)}function Rp(t){var e=Bp(t.alternate,t,qe);t.memoizedProps=t.pendingProps,e===null?$p(t):me=e,jc.current=null}function $p(t){var e=t;do{var i=e.alternate;if(t=e.return,e.flags&32768){if(i=sv(i,e),i!==null){i.flags&=32767,me=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,me=null;return}}else if(i=rv(i,e,qe),i!==null){me=i;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);xe===0&&(xe=5)}function xi(t,e,i){var n=J,r=rt.transition;try{rt.transition=null,J=1,fv(t,e,i,n)}finally{rt.transition=r,J=n}return null}function fv(t,e,i,n){do on();while(Qt!==null);if(X&6)throw Error(E(327));i=t.finishedWork;var r=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=i.lanes|i.childLanes;if(Kg(t,s),t===we&&(me=we=null,Ce=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||es||(es=!0,Ap($s,function(){return on(),null})),s=(i.flags&15990)!==0,i.subtreeFlags&15990||s){s=rt.transition,rt.transition=null;var l=J;J=1;var c=X;X|=4,jc.current=null,lv(t,i),Mp(i,t),L0(Ql),Bs=!!Xl,Ql=Xl=null,t.current=i,ov(i),Ag(),X=c,J=l,rt.transition=s}else t.current=i;if(es&&(es=!1,Qt=t,Zs=r),s=t.pendingLanes,s===0&&(ii=null),Fg(i.stateNode),We(t,fe()),e!==null)for(n=t.onRecoverableError,i=0;i<e.length;i++)r=e[i],n(r.value,{componentStack:r.stack,digest:r.digest});if(Gs)throw Gs=!1,t=go,go=null,t;return Zs&1&&t.tag!==0&&on(),s=t.pendingLanes,s&1?t===vo?Yn++:(Yn=0,vo=t):Yn=0,di(),null}function on(){if(Qt!==null){var t=mf(Zs),e=rt.transition,i=J;try{if(rt.transition=null,J=16>t?16:t,Qt===null)var n=!1;else{if(t=Qt,Qt=null,Zs=0,X&6)throw Error(E(331));var r=X;for(X|=4,$=t.current;$!==null;){var s=$,l=s.child;if($.flags&16){var c=s.deletions;if(c!==null){for(var o=0;o<c.length;o++){var u=c[o];for($=u;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:Qn(8,h,s)}var d=h.child;if(d!==null)d.return=h,$=d;else for(;$!==null;){h=$;var f=h.sibling,m=h.return;if(Cp(h),h===u){$=null;break}if(f!==null){f.return=m,$=f;break}$=m}}}var g=s.alternate;if(g!==null){var p=g.child;if(p!==null){g.child=null;do{var w=p.sibling;p.sibling=null,p=w}while(p!==null)}}$=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,$=l;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qn(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,$=v;break e}$=s.return}}var x=t.current;for($=x;$!==null;){l=$;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,$=y;else e:for(l=x;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ga(9,c)}}catch(j){ue(c,c.return,j)}if(c===l){$=null;break e}var b=c.sibling;if(b!==null){b.return=c.return,$=b;break e}$=c.return}}if(X=r,di(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(oa,t)}catch{}n=!0}return n}finally{J=i,rt.transition=e}}return!1}function nh(t,e,i){e=gn(i,e),e=mp(t,e,1),t=ti(t,e,1),e=$e(),t!==null&&(Mr(t,1,e),We(t,e))}function ue(t,e,i){if(t.tag===3)nh(t,t,i);else for(;e!==null;){if(e.tag===3){nh(e,t,i);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ii===null||!ii.has(n))){t=gn(i,t),t=gp(e,t,1),e=ti(e,t,1),t=$e(),e!==null&&(Mr(e,1,t),We(e,t));break}}e=e.return}}function pv(t,e,i){var n=t.pingCache;n!==null&&n.delete(e),e=$e(),t.pingedLanes|=t.suspendedLanes&i,we===t&&(Ce&i)===i&&(xe===4||xe===3&&(Ce&130023424)===Ce&&500>fe()-Nc?ji(t,0):Sc|=i),We(t,e)}function Dp(t,e){e===0&&(t.mode&1?(e=Wr,Wr<<=1,!(Wr&130023424)&&(Wr=4194304)):e=1);var i=$e();t=Bt(t,e),t!==null&&(Mr(t,e,i),We(t,i))}function mv(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),Dp(t,i)}function gv(t,e){var i=0;switch(t.tag){case 13:var n=t.stateNode,r=t.memoizedState;r!==null&&(i=r.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(e),Dp(t,i)}var Bp;Bp=function(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ve.current)Fe=!0;else{if(!(t.lanes&i)&&!(e.flags&128))return Fe=!1,nv(t,e,i);Fe=!!(t.flags&131072)}else Fe=!1,re&&e.flags&1048576&&Ff(e,Ws,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Ss(t,e),t=e.pendingProps;var r=dn(e,Te.current);ln(e,i),r=xc(null,e,n,t,r,i);var s=yc();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(n)?(s=!0,Vs(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fc(e),r.updater=ma,e.stateNode=r,r._reactInternals=e,ro(e,n,t,i),e=lo(null,e,n,!0,s,i)):(e.tag=0,re&&s&&ac(e),Re(null,e,r,i),e=e.child),e;case 16:n=e.elementType;e:{switch(Ss(t,e),t=e.pendingProps,r=n._init,n=r(n._payload),e.type=n,r=e.tag=xv(n),t=ht(n,t),r){case 0:e=ao(null,e,n,t,i);break e;case 1:e=Ku(null,e,n,t,i);break e;case 11:e=Hu(null,e,n,t,i);break e;case 14:e=qu(null,e,n,ht(n.type,t),i);break e}throw Error(E(306,n,""))}return e;case 0:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:ht(n,r),ao(t,e,n,r,i);case 1:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:ht(n,r),Ku(t,e,n,r,i);case 3:e:{if(wp(e),t===null)throw Error(E(387));n=e.pendingProps,s=e.memoizedState,r=s.element,Kf(t,e),Ks(e,n,null,i);var l=e.memoizedState;if(n=l.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=gn(Error(E(423)),e),e=Xu(t,e,n,i,r);break e}else if(n!==r){r=gn(Error(E(424)),e),e=Xu(t,e,n,i,r);break e}else for(Ke=ei(e.stateNode.containerInfo.firstChild),Xe=e,re=!0,ft=null,i=Hf(e,null,n,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(fn(),n===r){e=At(t,e,i);break e}Re(t,e,n,i)}e=e.child}return e;case 5:return Xf(e),t===null&&to(e),n=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,l=r.children,Jl(n,r)?l=null:s!==null&&Jl(n,s)&&(e.flags|=32),yp(t,e),Re(t,e,l,i),e.child;case 6:return t===null&&to(e),null;case 13:return bp(t,e,i);case 4:return pc(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=pn(e,null,n,i):Re(t,e,n,i),e.child;case 11:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:ht(n,r),Hu(t,e,n,r,i);case 7:return Re(t,e,e.pendingProps,i),e.child;case 8:return Re(t,e,e.pendingProps.children,i),e.child;case 12:return Re(t,e,e.pendingProps.children,i),e.child;case 10:e:{if(n=e.type._context,r=e.pendingProps,s=e.memoizedProps,l=r.value,ee(Hs,n._currentValue),n._currentValue=l,s!==null)if(gt(s.value,l)){if(s.children===r.children&&!Ve.current){e=At(t,e,i);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){l=s.child;for(var o=c.firstContext;o!==null;){if(o.context===n){if(s.tag===1){o=Rt(-1,i&-i),o.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?o.next=o:(o.next=h.next,h.next=o),u.pending=o}}s.lanes|=i,o=s.alternate,o!==null&&(o.lanes|=i),io(s.return,i,e),c.lanes|=i;break}o=o.next}}else if(s.tag===10)l=s.type===e.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(E(341));l.lanes|=i,c=l.alternate,c!==null&&(c.lanes|=i),io(l,i,e),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Re(t,e,r.children,i),e=e.child}return e;case 9:return r=e.type,n=e.pendingProps.children,ln(e,i),r=st(r),n=n(r),e.flags|=1,Re(t,e,n,i),e.child;case 14:return n=e.type,r=ht(n,e.pendingProps),r=ht(n.type,r),qu(t,e,n,r,i);case 15:return vp(t,e,e.type,e.pendingProps,i);case 17:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:ht(n,r),Ss(t,e),e.tag=1,Ue(n)?(t=!0,Vs(e)):t=!1,ln(e,i),pp(e,n,r),ro(e,n,r,i),lo(null,e,n,!0,t,i);case 19:return kp(t,e,i);case 22:return xp(t,e,i)}throw Error(E(156,e.tag))};function Ap(t,e){return hf(t,e)}function vv(t,e,i,n){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(t,e,i,n){return new vv(t,e,i,n)}function Mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xv(t){if(typeof t=="function")return Mc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xo)return 11;if(t===Qo)return 14}return 2}function ri(t,e){var i=t.alternate;return i===null?(i=nt(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function Es(t,e,i,n,r,s){var l=2;if(n=t,typeof t=="function")Mc(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case Ui:return Si(i.children,r,s,e);case Ko:l=8,r|=8;break;case zl:return t=nt(12,i,e,r|2),t.elementType=zl,t.lanes=s,t;case Ml:return t=nt(13,i,e,r),t.elementType=Ml,t.lanes=s,t;case _l:return t=nt(19,i,e,r),t.elementType=_l,t.lanes=s,t;case Kd:return xa(i,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hd:l=10;break e;case qd:l=9;break e;case Xo:l=11;break e;case Qo:l=14;break e;case Wt:l=16,n=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=nt(l,i,e,r),e.elementType=t,e.type=n,e.lanes=s,e}function Si(t,e,i,n){return t=nt(7,t,n,e),t.lanes=i,t}function xa(t,e,i,n){return t=nt(22,t,n,e),t.elementType=Kd,t.lanes=i,t.stateNode={isHidden:!1},t}function il(t,e,i){return t=nt(6,t,null,e),t.lanes=i,t}function nl(t,e,i){return e=nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yv(t,e,i,n,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ba(0),this.expirationTimes=Ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ba(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _c(t,e,i,n,r,s,l,c,o){return t=new yv(t,e,i,c,o),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(s),t}function wv(t,e,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vi,key:n==null?null:""+n,children:t,containerInfo:e,implementation:i}}function Ip(t){if(!t)return oi;t=t._reactInternals;e:{if(Ai(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var i=t.type;if(Ue(i))return If(t,i,e)}return e}function Op(t,e,i,n,r,s,l,c,o){return t=_c(i,n,!0,t,r,s,l,c,o),t.context=Ip(null),i=t.current,n=$e(),r=ni(i),s=Rt(n,r),s.callback=e??null,ti(i,s,r),t.current.lanes=r,Mr(t,r,n),We(t,n),t}function ya(t,e,i,n){var r=e.current,s=$e(),l=ni(r);return i=Ip(i),e.context===null?e.context=i:e.pendingContext=i,e=Rt(s,l),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=ti(r,e,l),t!==null&&(mt(t,r,l,s),bs(t,r,l)),l}function ta(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Tc(t,e){rh(t,e),(t=t.alternate)&&rh(t,e)}function bv(){return null}var Fp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pc(t){this._internalRoot=t}wa.prototype.render=Pc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));ya(t,e,null,null)};wa.prototype.unmount=Pc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_i(function(){ya(null,t,null,null)}),e[Dt]=null}};function wa(t){this._internalRoot=t}wa.prototype.unstable_scheduleHydration=function(t){if(t){var e=xf();t={blockedOn:null,target:t,priority:e};for(var i=0;i<qt.length&&e!==0&&e<qt[i].priority;i++);qt.splice(i,0,t),i===0&&wf(t)}};function Lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ba(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sh(){}function kv(t,e,i,n,r){if(r){if(typeof n=="function"){var s=n;n=function(){var u=ta(l);s.call(u)}}var l=Op(e,n,t,0,null,!1,!1,"",sh);return t._reactRootContainer=l,t[Dt]=l.current,ur(t.nodeType===8?t.parentNode:t),_i(),l}for(;r=t.lastChild;)t.removeChild(r);if(typeof n=="function"){var c=n;n=function(){var u=ta(o);c.call(u)}}var o=_c(t,0,!1,null,null,!1,!1,"",sh);return t._reactRootContainer=o,t[Dt]=o.current,ur(t.nodeType===8?t.parentNode:t),_i(function(){ya(e,o,i,n)}),o}function ka(t,e,i,n,r){var s=i._reactRootContainer;if(s){var l=s;if(typeof r=="function"){var c=r;r=function(){var o=ta(l);c.call(o)}}ya(e,l,t,r)}else l=kv(i,e,t,r,n);return ta(l)}gf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var i=On(e.pendingLanes);i!==0&&(Go(e,i|1),We(e,fe()),!(X&6)&&(vn=fe()+500,di()))}break;case 13:_i(function(){var n=Bt(t,1);if(n!==null){var r=$e();mt(n,t,1,r)}}),Tc(t,1)}};Zo=function(t){if(t.tag===13){var e=Bt(t,134217728);if(e!==null){var i=$e();mt(e,t,134217728,i)}Tc(t,134217728)}};vf=function(t){if(t.tag===13){var e=ni(t),i=Bt(t,e);if(i!==null){var n=$e();mt(i,t,e,n)}Tc(t,e)}};xf=function(){return J};yf=function(t,e){var i=J;try{return J=t,e()}finally{J=i}};Ol=function(t,e,i){switch(e){case"input":if(Ll(t,i),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<i.length;e++){var n=i[e];if(n!==t&&n.form===t.form){var r=da(n);if(!r)throw Error(E(90));Qd(n),Ll(n,r)}}}break;case"textarea":Yd(t,i);break;case"select":e=i.value,e!=null&&nn(t,!!i.multiple,e,!1)}};sf=Cc;af=_i;var jv={usingClientEntryPoint:!1,Events:[Tr,Ki,da,nf,rf,Cc]},Dn={findFiberByHostInstance:wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sv={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cf(t),t===null?null:t.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||bv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{oa=ts.inject(Sv),Nt=ts}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jv;Je.createPortal=function(t,e){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(e))throw Error(E(200));return wv(t,e,null,i)};Je.createRoot=function(t,e){if(!Lc(t))throw Error(E(299));var i=!1,n="",r=Fp;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_c(t,1,!1,null,null,i,!1,n,r),t[Dt]=e.current,ur(t.nodeType===8?t.parentNode:t),new Pc(e)};Je.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=cf(e),t=t===null?null:t.stateNode,t};Je.flushSync=function(t){return _i(t)};Je.hydrate=function(t,e,i){if(!ba(e))throw Error(E(200));return ka(null,t,e,!0,i)};Je.hydrateRoot=function(t,e,i){if(!Lc(t))throw Error(E(405));var n=i!=null&&i.hydratedSources||null,r=!1,s="",l=Fp;if(i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onRecoverableError!==void 0&&(l=i.onRecoverableError)),e=Op(e,null,t,1,i??null,r,!1,s,l),t[Dt]=e.current,ur(t),n)for(t=0;t<n.length;t++)i=n[t],r=i._getVersion,r=r(i._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[i,r]:e.mutableSourceEagerHydrationData.push(i,r);return new wa(e)};Je.render=function(t,e,i){if(!ba(e))throw Error(E(200));return ka(null,t,e,!1,i)};Je.unmountComponentAtNode=function(t){if(!ba(t))throw Error(E(40));return t._reactRootContainer?(_i(function(){ka(null,null,t,!1,function(){t._reactRootContainer=null,t[Dt]=null})}),!0):!1};Je.unstable_batchedUpdates=Cc;Je.unstable_renderSubtreeIntoContainer=function(t,e,i,n){if(!ba(i))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return ka(t,e,i,!1,n)};Je.version="18.3.1-next-f1338f8080-20240426";function Vp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vp)}catch(t){console.error(t)}}Vp(),Fd.exports=Je;var Nv=Fd.exports,ah=Nv;Cl.createRoot=ah.createRoot,Cl.hydrateRoot=ah.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr(){return yr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},yr.apply(this,arguments)}var Jt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jt||(Jt={}));const lh="popstate";function Cv(t){t===void 0&&(t={});function e(n,r){let{pathname:s,search:l,hash:c}=n.location;return wo("",{pathname:s,search:l,hash:c},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function i(n,r){return typeof r=="string"?r:ia(r)}return zv(e,i,null,t)}function le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Rc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ev(){return Math.random().toString(36).substr(2,8)}function oh(t,e){return{usr:t.state,key:t.key,idx:e}}function wo(t,e,i,n){return i===void 0&&(i=null),yr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Sn(e):e,{state:i,key:e&&e.key||n||Ev()})}function ia(t){let{pathname:e="/",search:i="",hash:n=""}=t;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Sn(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substr(i),t=t.substr(0,i));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function zv(t,e,i,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:s=!1}=n,l=r.history,c=Jt.Pop,o=null,u=h();u==null&&(u=0,l.replaceState(yr({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function d(){c=Jt.Pop;let w=h(),v=w==null?null:w-u;u=w,o&&o({action:c,location:p.location,delta:v})}function f(w,v){c=Jt.Push;let x=wo(p.location,w,v);u=h()+1;let y=oh(x,u),b=p.createHref(x);try{l.pushState(y,"",b)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;r.location.assign(b)}s&&o&&o({action:c,location:p.location,delta:1})}function m(w,v){c=Jt.Replace;let x=wo(p.location,w,v);u=h();let y=oh(x,u),b=p.createHref(x);l.replaceState(y,"",b),s&&o&&o({action:c,location:p.location,delta:0})}function g(w){let v=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof w=="string"?w:ia(w);return x=x.replace(/ $/,"%20"),le(v,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,v)}let p={get action(){return c},get location(){return t(r,l)},listen(w){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(lh,d),o=w,()=>{r.removeEventListener(lh,d),o=null}},createHref(w){return e(r,w)},createURL:g,encodeLocation(w){let v=g(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:m,go(w){return l.go(w)}};return p}var ch;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ch||(ch={}));function Mv(t,e,i){return i===void 0&&(i="/"),_v(t,e,i)}function _v(t,e,i,n){let r=typeof e=="string"?Sn(e):e,s=xn(r.pathname||"/",i);if(s==null)return null;let l=Up(t);Tv(l);let c=null;for(let o=0;c==null&&o<l.length;++o){let u=Vv(s);c=Ov(l[o],u)}return c}function Up(t,e,i,n){e===void 0&&(e=[]),i===void 0&&(i=[]),n===void 0&&(n="");let r=(s,l,c)=>{let o={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};o.relativePath.startsWith("/")&&(le(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(n.length));let u=si([n,o.relativePath]),h=i.concat(o);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Up(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Av(u,s.index),routesMeta:h})};return t.forEach((s,l)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))r(s,l);else for(let o of Wp(s.path))r(s,l,o)}),e}function Wp(t){let e=t.split("/");if(e.length===0)return[];let[i,...n]=e,r=i.endsWith("?"),s=i.replace(/\?$/,"");if(n.length===0)return r?[s,""]:[s];let l=Wp(n.join("/")),c=[];return c.push(...l.map(o=>o===""?s:[s,o].join("/"))),r&&c.push(...l),c.map(o=>t.startsWith("/")&&o===""?"/":o)}function Tv(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:Iv(e.routesMeta.map(n=>n.childrenIndex),i.routesMeta.map(n=>n.childrenIndex)))}const Pv=/^:[\w-]+$/,Lv=3,Rv=2,$v=1,Dv=10,Bv=-2,uh=t=>t==="*";function Av(t,e){let i=t.split("/"),n=i.length;return i.some(uh)&&(n+=Bv),e&&(n+=Rv),i.filter(r=>!uh(r)).reduce((r,s)=>r+(Pv.test(s)?Lv:s===""?$v:Dv),n)}function Iv(t,e){return t.length===e.length&&t.slice(0,-1).every((n,r)=>n===e[r])?t[t.length-1]-e[e.length-1]:0}function Ov(t,e,i){let{routesMeta:n}=t,r={},s="/",l=[];for(let c=0;c<n.length;++c){let o=n[c],u=c===n.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=bo({path:o.relativePath,caseSensitive:o.caseSensitive,end:u},h),f=o.route;if(!d)return null;Object.assign(r,d.params),l.push({params:r,pathname:si([s,d.pathname]),pathnameBase:Kv(si([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=si([s,d.pathnameBase]))}return l}function bo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,n]=Fv(t.path,t.caseSensitive,t.end),r=e.match(i);if(!r)return null;let s=r[0],l=s.replace(/(.)\/+$/,"$1"),c=r.slice(1);return{params:n.reduce((u,h,d)=>{let{paramName:f,isOptional:m}=h;if(f==="*"){let p=c[d]||"";l=s.slice(0,s.length-p.length).replace(/(.)\/+$/,"$1")}const g=c[d];return m&&!g?u[f]=void 0:u[f]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:l,pattern:t}}function Fv(t,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),Rc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,o)=>(n.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),n]}function Vv(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Rc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,n=t.charAt(i);return n&&n!=="/"?null:t.slice(i)||"/"}const Uv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wv=t=>Uv.test(t);function Hv(t,e){e===void 0&&(e="/");let{pathname:i,search:n="",hash:r=""}=typeof t=="string"?Sn(t):t,s;if(i)if(Wv(i))s=i;else{if(i.includes("//")){let l=i;i=i.replace(/\/\/+/g,"/"),Rc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+i))}i.startsWith("/")?s=hh(i.substring(1),"/"):s=hh(i,e)}else s=e;return{pathname:s,search:Xv(n),hash:Qv(r)}}function hh(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?i.length>1&&i.pop():r!=="."&&i.push(r)}),i.length>1?i.join("/"):"/"}function rl(t,e,i,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qv(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function $c(t,e){let i=qv(t);return e?i.map((n,r)=>r===i.length-1?n.pathname:n.pathnameBase):i.map(n=>n.pathnameBase)}function Dc(t,e,i,n){n===void 0&&(n=!1);let r;typeof t=="string"?r=Sn(t):(r=yr({},t),le(!r.pathname||!r.pathname.includes("?"),rl("?","pathname","search",r)),le(!r.pathname||!r.pathname.includes("#"),rl("#","pathname","hash",r)),le(!r.search||!r.search.includes("#"),rl("#","search","hash",r)));let s=t===""||r.pathname==="",l=s?"/":r.pathname,c;if(l==null)c=i;else{let d=e.length-1;if(!n&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}c=d>=0?e[d]:"/"}let o=Hv(r,c),u=l&&l!=="/"&&l.endsWith("/"),h=(s||l===".")&&i.endsWith("/");return!o.pathname.endsWith("/")&&(u||h)&&(o.pathname+="/"),o}const si=t=>t.join("/").replace(/\/\/+/g,"/"),Kv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Xv=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Qv=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Jv(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Hp=["post","put","patch","delete"];new Set(Hp);const Yv=["get",...Hp];new Set(Yv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr(){return wr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},wr.apply(this,arguments)}const ja=k.createContext(null),qp=k.createContext(null),Ot=k.createContext(null),Sa=k.createContext(null),fi=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Kp=k.createContext(null);function Gv(t,e){let{relative:i}=e===void 0?{}:e;Nn()||le(!1);let{basename:n,navigator:r}=k.useContext(Ot),{hash:s,pathname:l,search:c}=Na(t,{relative:i}),o=l;return n!=="/"&&(o=l==="/"?n:si([n,l])),r.createHref({pathname:o,search:c,hash:s})}function Nn(){return k.useContext(Sa)!=null}function Cn(){return Nn()||le(!1),k.useContext(Sa).location}function Xp(t){k.useContext(Ot).static||k.useLayoutEffect(t)}function Qp(){let{isDataRoute:t}=k.useContext(fi);return t?hx():Zv()}function Zv(){Nn()||le(!1);let t=k.useContext(ja),{basename:e,future:i,navigator:n}=k.useContext(Ot),{matches:r}=k.useContext(fi),{pathname:s}=Cn(),l=JSON.stringify($c(r,i.v7_relativeSplatPath)),c=k.useRef(!1);return Xp(()=>{c.current=!0}),k.useCallback(function(u,h){if(h===void 0&&(h={}),!c.current)return;if(typeof u=="number"){n.go(u);return}let d=Dc(u,JSON.parse(l),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:si([e,d.pathname])),(h.replace?n.replace:n.push)(d,h.state,h)},[e,n,l,s,t])}function Na(t,e){let{relative:i}=e===void 0?{}:e,{future:n}=k.useContext(Ot),{matches:r}=k.useContext(fi),{pathname:s}=Cn(),l=JSON.stringify($c(r,n.v7_relativeSplatPath));return k.useMemo(()=>Dc(t,JSON.parse(l),s,i==="path"),[t,l,s,i])}function ex(t,e){return tx(t,e)}function tx(t,e,i,n){Nn()||le(!1);let{navigator:r}=k.useContext(Ot),{matches:s}=k.useContext(fi),l=s[s.length-1],c=l?l.params:{};l&&l.pathname;let o=l?l.pathnameBase:"/";l&&l.route;let u=Cn(),h;if(e){var d;let w=typeof e=="string"?Sn(e):e;o==="/"||(d=w.pathname)!=null&&d.startsWith(o)||le(!1),h=w}else h=u;let f=h.pathname||"/",m=f;if(o!=="/"){let w=o.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let g=Mv(t,{pathname:m}),p=ax(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:si([o,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?o:si([o,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,i,n);return e&&p?k.createElement(Sa.Provider,{value:{location:wr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Jt.Pop}},p):p}function ix(){let t=ux(),e=Jv(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),i?k.createElement("pre",{style:r},i):null,null)}const nx=k.createElement(ix,null);class rx extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?k.createElement(fi.Provider,{value:this.props.routeContext},k.createElement(Kp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sx(t){let{routeContext:e,match:i,children:n}=t,r=k.useContext(ja);return r&&r.static&&r.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=i.route.id),k.createElement(fi.Provider,{value:e},n)}function ax(t,e,i,n){var r;if(e===void 0&&(e=[]),i===void 0&&(i=null),n===void 0&&(n=null),t==null){var s;if(!i)return null;if(i.errors)t=i.matches;else if((s=n)!=null&&s.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let l=t,c=(r=i)==null?void 0:r.errors;if(c!=null){let h=l.findIndex(d=>d.route.id&&(c==null?void 0:c[d.route.id])!==void 0);h>=0||le(!1),l=l.slice(0,Math.min(l.length,h+1))}let o=!1,u=-1;if(i&&n&&n.v7_partialHydration)for(let h=0;h<l.length;h++){let d=l[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:f,errors:m}=i,g=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||g){o=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((h,d,f)=>{let m,g=!1,p=null,w=null;i&&(m=c&&d.route.id?c[d.route.id]:void 0,p=d.route.errorElement||nx,o&&(u<0&&f===0?(dx("route-fallback"),g=!0,w=null):u===f&&(g=!0,w=d.route.hydrateFallbackElement||null)));let v=e.concat(l.slice(0,f+1)),x=()=>{let y;return m?y=p:g?y=w:d.route.Component?y=k.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=h,k.createElement(sx,{match:d,routeContext:{outlet:h,matches:v,isDataRoute:i!=null},children:y})};return i&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?k.createElement(rx,{location:i.location,revalidation:i.revalidation,component:p,error:m,children:x(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):x()},null)}var Jp=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Jp||{}),Yp=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Yp||{});function lx(t){let e=k.useContext(ja);return e||le(!1),e}function ox(t){let e=k.useContext(qp);return e||le(!1),e}function cx(t){let e=k.useContext(fi);return e||le(!1),e}function Gp(t){let e=cx(),i=e.matches[e.matches.length-1];return i.route.id||le(!1),i.route.id}function ux(){var t;let e=k.useContext(Kp),i=ox(),n=Gp();return e!==void 0?e:(t=i.errors)==null?void 0:t[n]}function hx(){let{router:t}=lx(Jp.UseNavigateStable),e=Gp(Yp.UseNavigateStable),i=k.useRef(!1);return Xp(()=>{i.current=!0}),k.useCallback(function(r,s){s===void 0&&(s={}),i.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,wr({fromRouteId:e},s)))},[t,e])}const dh={};function dx(t,e,i){dh[t]||(dh[t]=!0)}function fx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Et(t){let{to:e,replace:i,state:n,relative:r}=t;Nn()||le(!1);let{future:s,static:l}=k.useContext(Ot),{matches:c}=k.useContext(fi),{pathname:o}=Cn(),u=Qp(),h=Dc(e,$c(c,s.v7_relativeSplatPath),o,r==="path"),d=JSON.stringify(h);return k.useEffect(()=>u(JSON.parse(d),{replace:i,state:n,relative:r}),[u,d,r,i,n]),null}function Ze(t){le(!1)}function px(t){let{basename:e="/",children:i=null,location:n,navigationType:r=Jt.Pop,navigator:s,static:l=!1,future:c}=t;Nn()&&le(!1);let o=e.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:o,navigator:s,static:l,future:wr({v7_relativeSplatPath:!1},c)}),[o,c,s,l]);typeof n=="string"&&(n=Sn(n));let{pathname:h="/",search:d="",hash:f="",state:m=null,key:g="default"}=n,p=k.useMemo(()=>{let w=xn(h,o);return w==null?null:{location:{pathname:w,search:d,hash:f,state:m,key:g},navigationType:r}},[o,h,d,f,m,g,r]);return p==null?null:k.createElement(Ot.Provider,{value:u},k.createElement(Sa.Provider,{children:i,value:p}))}function fh(t){let{children:e,location:i}=t;return ex(ko(e),i)}new Promise(()=>{});function ko(t,e){e===void 0&&(e=[]);let i=[];return k.Children.forEach(t,(n,r)=>{if(!k.isValidElement(n))return;let s=[...e,r];if(n.type===k.Fragment){i.push.apply(i,ko(n.props.children,s));return}n.type!==Ze&&le(!1),!n.props.index||!n.props.children||le(!1);let l={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=ko(n.props.children,s)),i.push(l)}),i}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function na(){return na=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},na.apply(this,arguments)}function Zp(t,e){if(t==null)return{};var i={},n=Object.keys(t),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function mx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function gx(t,e){return t.button===0&&(!e||e==="_self")&&!mx(t)}const vx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],xx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],yx="6";try{window.__reactRouterVersion=yx}catch{}const wx=k.createContext({isTransitioning:!1}),bx="startTransition",ph=pg[bx];function kx(t){let{basename:e,children:i,future:n,window:r}=t,s=k.useRef();s.current==null&&(s.current=Cv({window:r,v5Compat:!0}));let l=s.current,[c,o]=k.useState({action:l.action,location:l.location}),{v7_startTransition:u}=n||{},h=k.useCallback(d=>{u&&ph?ph(()=>o(d)):o(d)},[o,u]);return k.useLayoutEffect(()=>l.listen(h),[l,h]),k.useEffect(()=>fx(n),[n]),k.createElement(px,{basename:e,children:i,location:c.location,navigationType:c.action,navigator:l,future:n})}const jx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,he=k.forwardRef(function(e,i){let{onClick:n,relative:r,reloadDocument:s,replace:l,state:c,target:o,to:u,preventScrollReset:h,viewTransition:d}=e,f=Zp(e,vx),{basename:m}=k.useContext(Ot),g,p=!1;if(typeof u=="string"&&Sx.test(u)&&(g=u,jx))try{let y=new URL(window.location.href),b=u.startsWith("//")?new URL(y.protocol+u):new URL(u),j=xn(b.pathname,m);b.origin===y.origin&&j!=null?u=j+b.search+b.hash:p=!0}catch{}let w=Gv(u,{relative:r}),v=Cx(u,{replace:l,state:c,target:o,preventScrollReset:h,relative:r,viewTransition:d});function x(y){n&&n(y),y.defaultPrevented||v(y)}return k.createElement("a",na({},f,{href:g||w,onClick:p||s?n:x,ref:i,target:o}))}),zs=k.forwardRef(function(e,i){let{"aria-current":n="page",caseSensitive:r=!1,className:s="",end:l=!1,style:c,to:o,viewTransition:u,children:h}=e,d=Zp(e,xx),f=Na(o,{relative:d.relative}),m=Cn(),g=k.useContext(qp),{navigator:p,basename:w}=k.useContext(Ot),v=g!=null&&Ex(f)&&u===!0,x=p.encodeLocation?p.encodeLocation(f).pathname:f.pathname,y=m.pathname,b=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;r||(y=y.toLowerCase(),b=b?b.toLowerCase():null,x=x.toLowerCase()),b&&w&&(b=xn(b,w)||b);const j=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let z=y===x||!l&&y.startsWith(x)&&y.charAt(j)==="/",M=b!=null&&(b===x||!l&&b.startsWith(x)&&b.charAt(x.length)==="/"),_={isActive:z,isPending:M,isTransitioning:v},V=z?n:void 0,I;typeof s=="function"?I=s(_):I=[s,z?"active":null,M?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let Z=typeof c=="function"?c(_):c;return k.createElement(he,na({},d,{"aria-current":V,className:I,ref:i,style:Z,to:o,viewTransition:u}),typeof h=="function"?h(_):h)});var jo;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(jo||(jo={}));var mh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mh||(mh={}));function Nx(t){let e=k.useContext(ja);return e||le(!1),e}function Cx(t,e){let{target:i,replace:n,state:r,preventScrollReset:s,relative:l,viewTransition:c}=e===void 0?{}:e,o=Qp(),u=Cn(),h=Na(t,{relative:l});return k.useCallback(d=>{if(gx(d,i)){d.preventDefault();let f=n!==void 0?n:ia(u)===ia(h);o(t,{replace:f,state:r,preventScrollReset:s,relative:l,viewTransition:c})}},[u,o,h,n,r,i,t,s,l,c])}function Ex(t,e){e===void 0&&(e={});let i=k.useContext(wx);i==null&&le(!1);let{basename:n}=Nx(jo.useViewTransitionState),r=Na(t,{relative:e.relative});if(!i.isTransitioning)return!1;let s=xn(i.currentLocation.pathname,n)||i.currentLocation.pathname,l=xn(i.nextLocation.pathname,n)||i.nextLocation.pathname;return bo(r.pathname,l)!=null||bo(r.pathname,s)!=null}const is="bc1qxy2kgdygjrsqtzq2n0r3am9w5vh9q5z8h6v0g7",cn="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23f7931a'/%3E%3Cstop offset='1' stop-color='%23ffb347'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='60' cy='60' r='58' fill='url(%23g)'/%3E%3Cpath fill='white' d='M79.4 51.7c1-6-3.7-9.2-9.9-11.3l2-7.9-4.8-1.2-1.9 7.7c-1.3-.3-2.5-.6-3.8-.9l1.9-7.8-4.8-1.1-2 7.9c-1-.2-1.9-.4-2.8-.7v-.1l-6.6-1.6-1.3 5.1s3.6.8 3.5.9c2 .5 2.4 1.9 2.3 3l-2.2 8.8c.1 0 .3.1.5.1l-.5-.1-3.1 12.6c-.2.7-.8 1.8-2.2 1.5.1.1-3.5-.9-3.5-.9l-2.4 5.5 6.2 1.6c1.2.3 2.4.7 3.6.9l-2 8 4.8 1.2 2-7.9c1.3.4 2.6.7 3.9 1l-2 7.8 4.8 1.2 2-8c8.3 1.6 14.5 1 17.1-6.5 2.1-6 0-9.5-4.4-11.8 3.2-.7 5.6-2.8 6.6-7.1zm-11.8 16.5c-1.5 6-11.5 2.8-14.8 2l2.7-10.8c3.3.8 13.7 2.5 12.1 8.8zm1.5-16.6c-1.4 5.5-9.8 2.7-12.5 2l2.5-9.8c2.7.7 11.5 2.1 10 7.8z'/%3E%3C/svg%3E",gh={id:"user-1",email:"trader@btcplatform.com",name:"Alex Thompson",avatar:cn,password:"password123",btcBalance:.245,usdBalance:15850.75,stakeAmount:2.5,isVerified:!0,verificationStatus:"approved",vipLevel:3,joinedDate:"2024-01-15",role:"user",phone:"+1 234 567 8900",country:"United States",city:"New York",postCode:"10001",job:"Crypto Trader",timezone:"UTC-5",telegram:"@AlexTrader",kyc:{fullName:"Alex Thompson",phone:"+1 234 567 8900",country:"United States",city:"New York",postCode:"10001",job:"Crypto Trader",documentType:"passport",frontImage:"passport-front.jpg",backImage:"passport-back.jpg",status:"approved"}},zx=[{rank:1,name:"CryptoKing",avatar:"https://randomuser.me/api/portraits/men/57.jpg",profit:156780,winRate:87,trades:1245},{rank:2,name:"DiamondHands",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Diamond",profit:98340,winRate:82,trades:892},{rank:3,name:"WhaleTrader",avatar:"https://randomuser.me/api/portraits/women/63.jpg",profit:87650,winRate:79,trades:1567},{rank:4,name:"MoonWalker",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Moon",profit:65430,winRate:85,trades:723},{rank:5,name:"BullRunner",avatar:"https://randomuser.me/api/portraits/men/41.jpg",profit:54320,winRate:78,trades:1089},{rank:6,name:"SilverFox",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Silver",profit:43210,winRate:81,trades:654},{rank:7,name:"GoldRush",avatar:"https://randomuser.me/api/portraits/women/71.jpg",profit:38760,winRate:76,trades:921},{rank:8,name:"DiamondPro",avatar:"https://api.dicebear.com/7.x/personas/svg?seed=DiamondPro",profit:32100,winRate:83,trades:567},{rank:9,name:"AlphaTrade",avatar:"https://randomuser.me/api/portraits/men/65.jpg",profit:28940,winRate:80,trades:834},{rank:10,name:"BetaWinner",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Beta",profit:25430,winRate:77,trades:712}],de=t=>t.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),So="https://api.exchange.coinbase.com/products/BTC-USD",Mx="wss://ws-feed.exchange.coinbase.com",Bc={"1m":60,"5m":300,"15m":900,"1h":3600,"4h":14400,"1D":86400};function _x(t){return Bc[t]}async function No(t){const e=await fetch(t,{headers:{Accept:"application/json"}});if(!e.ok)throw new Error(`Market request failed: ${e.status}`);return e.json()}async function Tx(){const[t,e]=await Promise.all([No(`${So}/ticker`),No(`${So}/stats`)]),i=Number(t.price||e.last),n=Number(e.open||i),r=Number(e.high||i),s=Number(e.low||i),l=Number(e.volume||0),c=n?(i-n)/n*100:0;return{price:i,open24h:n,change24h:c,high24h:r,low24h:s,volume24h:l,updatedAt:t.time||new Date().toISOString(),source:"live"}}function Px(t,e){const i=new WebSocket(Mx);return i.addEventListener("open",()=>{e==null||e("open"),i.send(JSON.stringify({type:"subscribe",product_ids:["BTC-USD"],channels:["ticker","heartbeat"]}))}),i.addEventListener("message",n=>{let r;try{r=JSON.parse(n.data)}catch{return}if(r.type!=="ticker"||r.product_id!=="BTC-USD")return;const s=Number(r.price),l=Number(r.open_24h||s),c=Number(r.high_24h||s),o=Number(r.low_24h||s),u=Number(r.volume_24h||0);Number.isFinite(s)&&t({price:s,open24h:l,change24h:l?(s-l)/l*100:0,high24h:Number.isFinite(c)?c:s,low24h:Number.isFinite(o)?o:s,volume24h:Number.isFinite(u)?u:0,updatedAt:r.time||new Date().toISOString(),source:"live"})}),i.addEventListener("error",()=>{e==null||e("error")}),i.addEventListener("close",()=>{e==null||e("closed")}),()=>{i.close()}}async function Lx(t,e=120){const i=Bc[t],n=new Date,r=new Date(n.getTime()-i*1e3*e),s=new URLSearchParams({granularity:String(i),start:r.toISOString(),end:n.toISOString()});return(await No(`${So}/candles?${s.toString()}`)).sort((c,o)=>c[0]-o[0]).map(([c,o,u,h,d,f])=>({candle:{time:c,open:h,high:u,low:o,close:d},volume:{time:c,value:f,color:d>=h?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}}))}function vh(t=67500){return{price:t,open24h:t-420,change24h:.62,high24h:t+520,low24h:t-780,volume24h:18250,updatedAt:new Date().toISOString(),source:"fallback"}}function Rx(t,e,i=120){const n=Bc[t],r=Math.floor(Date.now()/1e3),s=[];let l=e;for(let c=i;c>0;c-=1){const o=r-c*n,u=(Math.random()-.48)*(e*.0035),h=l,d=Math.max(1e3,h+u),f=Math.max(h,d)+Math.random()*(e*.0012),m=Math.min(h,d)-Math.random()*(e*.0012),g=Math.random()*240+80;s.push({candle:{time:o,open:h,high:f,low:m,close:d},volume:{time:o,value:g,color:d>=h?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}}),l=d}return s}const $x=.005;function xh(t,e,i){const n=Math.max(1/e-$x,.0025);return i==="up"?t*(1-n):t*(1+n)}function em({entryPrice:t,exitPrice:e,amount:i,leverageValue:n,tradeDirection:r}){const s=(e-t)/t,l=r==="up"?s:-s,c=l*n;return{pnl:Math.max(-i,i*c),directionalMovePct:l*100}}/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),W=(t,e)=>{const i=k.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:o,...u},h)=>k.createElement("svg",{ref:h,...Dx,width:r,height:r,stroke:n,strokeWidth:l?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Bx(t)}`,c].join(" "),...u},[...e.map(([d,f])=>k.createElement(d,f)),...Array.isArray(o)?o:[o]]));return i.displayName=`${t}`,i};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=W("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=W("ArrowDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=W("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=W("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=W("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=W("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=W("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=W("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=W("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=W("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=W("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=W("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=W("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=W("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=W("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=W("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=W("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=W("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=W("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=W("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=W("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=W("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=W("Globe2",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=W("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=W("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=W("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=W("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=W("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=W("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=W("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=W("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=W("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=W("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=W("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=W("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=W("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=W("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=W("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=W("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=W("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=W("Wallet2",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=W("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=W("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=W("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=W("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),n1=[{path:"/",icon:nm,label:"Home"},{path:"/trade",icon:Lr,label:"Trade"},{path:"/finance",icon:Ti,label:"Finance"},{path:"/news",icon:br,label:"News"},{path:"/profile",icon:Rr,label:"Profile"}],r1=[{path:"/admin",icon:Ic,label:"Admin Dashboard"}];function s1(){const{logout:t,user:e}=mi(),i=(e==null?void 0:e.role)==="admin";return a.jsxs("aside",{className:"app-sidebar",children:[a.jsx("style",{children:`
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
      `}),a.jsx("div",{className:"sidebar-logo",children:a.jsxs("div",{className:"logo-container",children:[a.jsx("div",{className:"logo-icon",children:a.jsx("span",{children:"₿"})}),a.jsxs("div",{className:"logo-text",children:[a.jsx("h1",{children:"BTC Trade"}),a.jsx("p",{children:"Pro Platform"})]})]})}),a.jsx("nav",{className:"sidebar-nav",children:i?a.jsxs("div",{className:"admin-section",children:[a.jsxs("div",{className:"admin-header",children:[a.jsx("span",{className:"admin-badge",children:"Admin"}),a.jsx("span",{className:"admin-title",children:"Back Office"})]}),r1.map(n=>{const r=n.icon;return a.jsxs(zs,{to:n.path,className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[a.jsx(r,{className:"nav-item-icon",size:20}),a.jsx("span",{className:"nav-item-text",children:n.label})]},n.path)})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"nav-section",children:[a.jsx("div",{className:"nav-section-title",children:"Main Menu"}),n1.map(n=>{const r=n.icon;return a.jsxs(zs,{to:n.path,className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[a.jsx(r,{className:"nav-item-icon",size:20}),a.jsx("span",{className:"nav-item-text",children:n.label}),a.jsx(Hx,{className:"nav-item-arrow",size:16})]},n.path)})]}),a.jsxs("div",{className:"nav-section",children:[a.jsx("div",{className:"nav-section-title",children:"Support"}),a.jsxs(zs,{to:"/support",className:({isActive:n})=>`nav-item ${n?"active":""}`,children:[a.jsx(sm,{className:"nav-item-icon",size:20}),a.jsx("span",{className:"nav-item-text",children:"Support Chat"}),a.jsx("span",{className:"nav-item-badge",children:"Live"})]})]})]})}),a.jsxs("div",{className:"sidebar-footer",children:[!i&&a.jsxs("div",{className:"footer-nav",children:[a.jsxs("a",{href:"#",className:"footer-item",children:[a.jsx(am,{size:16}),"Settings"]}),a.jsxs("a",{href:"#",className:"footer-item",children:[a.jsx(Gx,{size:16}),"Help Center"]})]}),a.jsxs("button",{onClick:t,className:"logout-btn",children:[a.jsx(rm,{size:18}),"Sign Out"]})]})]})}function a1({btcPrice:t,btcChange24h:e,marketStatus:i}){var m,g;const{user:n,logout:r}=mi(),[s,l]=k.useState(!1),[c,o]=k.useState(!1),u=k.useRef(null),h=k.useRef(null),d=((n==null?void 0:n.btcBalance)||0)*t,f=[{id:1,title:"Deposit Confirmed",message:"Your BTC deposit of 0.025 BTC has been confirmed",time:"2 min ago",unread:!0},{id:2,title:"Trade Closed",message:"BTC/USD settled with a +$150 result",time:"15 min ago",unread:!0},{id:3,title:"Withdrawal Processed",message:"Your wallet request is now complete",time:"1 hour ago",unread:!1}];return k.useEffect(()=>{const p=w=>{const v=w.target;v&&(s&&u.current&&!u.current.contains(v)&&l(!1),c&&h.current&&!h.current.contains(v)&&o(!1))};return document.addEventListener("mousedown",p),document.addEventListener("touchstart",p),()=>{document.removeEventListener("mousedown",p),document.removeEventListener("touchstart",p)}},[s,c]),a.jsxs("header",{className:"pro-header",children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"header-main",children:[a.jsxs("div",{className:"header-brand",children:[a.jsx("div",{className:"brand-icon",children:"₿"}),a.jsx("div",{className:"brand-copy",children:a.jsx("h1",{children:"BTC Trade Pro"})})]}),a.jsxs("div",{className:"header-ticker",children:[a.jsxs("div",{className:"ticker-top",children:[a.jsx("span",{className:"ticker-symbol",children:"BTC/USD"}),a.jsxs("div",{className:"status-chip",children:[i==="live"?a.jsx(Nh,{size:14}):a.jsx(Sh,{size:14}),i]})]}),a.jsxs("div",{className:"ticker-middle",children:[a.jsxs("span",{className:"ticker-price",children:["$",t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("span",{className:`ticker-change ${e>=0?"positive":"negative"}`,children:[e>=0?"+":"",e.toFixed(2),"%"]})]})]}),a.jsxs("div",{className:"header-right",children:[a.jsxs("div",{className:"balance-badge",children:[a.jsxs("div",{children:[a.jsx("span",{className:"balance-label",children:"USD"}),a.jsxs("span",{className:"balance-value",children:["$",((n==null?void 0:n.usdBalance)||0).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsx("div",{className:"balance-divider"}),a.jsxs("div",{children:[a.jsx("span",{className:"balance-label",children:"BTC"}),a.jsx("span",{className:"balance-value btc",children:((n==null?void 0:n.btcBalance)||0).toFixed(6)})]})]}),a.jsxs("div",{className:"user-menu",ref:h,children:[c&&a.jsx("button",{type:"button",className:"menu-backdrop",onClick:()=>o(!1),"aria-label":"Close notifications"}),a.jsxs("button",{className:"header-btn",onClick:()=>o(!c),children:[a.jsx(Ox,{size:20}),a.jsx("span",{className:"notification-dot"})]}),c&&a.jsxs("div",{className:"dropdown notification-dropdown",children:[a.jsxs("div",{className:"notification-header",children:[a.jsx("span",{className:"notification-title",children:"Notifications"}),a.jsx("span",{style:{color:"#3478f6",fontSize:"12px",cursor:"pointer"},children:"Mark all as read"})]}),f.map(p=>a.jsxs("div",{className:"notification-item",children:[a.jsx("div",{className:"notification-icon",children:a.jsx(Ti,{size:16})}),a.jsxs("div",{className:"notification-content",children:[a.jsx("div",{className:"notification-item-title",children:p.title}),a.jsx("div",{className:"notification-message",children:p.message}),a.jsx("div",{className:"notification-time",children:p.time})]}),p.unread&&a.jsx("div",{className:"unread-dot"})]},p.id))]})]}),a.jsxs("div",{className:"user-menu",ref:u,children:[s&&a.jsx("button",{type:"button",className:"menu-backdrop",onClick:()=>l(!1),"aria-label":"Close profile menu"}),a.jsxs("button",{className:"user-btn",onClick:()=>l(!s),children:[a.jsx("div",{className:"user-avatar",children:n!=null&&n.avatar?a.jsx("img",{src:n.avatar,alt:n.name||"User"}):((m=n==null?void 0:n.name)==null?void 0:m.charAt(0).toUpperCase())||"U"}),a.jsx("span",{className:"user-name",children:(n==null?void 0:n.name)||"User"}),a.jsx(Wx,{size:16,color:"#888"})]}),s&&a.jsxs("div",{className:"dropdown",children:[a.jsxs("div",{className:"dropdown-header",children:[a.jsx("div",{className:"dropdown-name",children:n==null?void 0:n.name}),a.jsx("div",{className:"dropdown-email",children:n==null?void 0:n.email})]}),a.jsxs(he,{to:"/profile",className:"dropdown-item",onClick:()=>l(!1),children:[a.jsx(Rr,{size:16}),"Profile"]}),a.jsxs(he,{to:"/finance",className:"dropdown-item",onClick:()=>l(!1),children:[a.jsx(Ti,{size:16}),"Wallet"]}),a.jsxs(he,{to:"/profile",className:"dropdown-item",onClick:()=>l(!1),children:[a.jsx(am,{size:16}),"Settings"]}),a.jsxs("button",{className:"dropdown-item danger",onClick:()=>{r(),l(!1)},children:[a.jsx(rm,{size:16}),"Sign Out"]})]})]})]})]}),a.jsxs("div",{className:"header-summary",children:[a.jsxs("div",{className:"summary-card",children:[a.jsxs("div",{children:[a.jsx("div",{className:"summary-label",children:"Portfolio BTC"}),a.jsxs("div",{className:"summary-value",children:[((n==null?void 0:n.btcBalance)||0).toFixed(6)," BTC"]})]}),a.jsxs("div",{className:"summary-sub",children:["$",d.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"summary-card",children:[a.jsxs("div",{children:[a.jsx("div",{className:"summary-label",children:"Cash Balance"}),a.jsxs("div",{className:"summary-value",children:["$",((n==null?void 0:n.usdBalance)||0).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:`ticker-change ${e>=0?"positive":"negative"}`,children:[e>=0?"+":"",e.toFixed(2),"%"]})]}),a.jsxs("div",{className:"summary-card summary-user-card",children:[a.jsxs("div",{className:"profile-chip",children:[a.jsx("div",{className:"user-avatar",children:n!=null&&n.avatar?a.jsx("img",{src:n.avatar,alt:n.name||"User"}):((g=n==null?void 0:n.name)==null?void 0:g.charAt(0).toUpperCase())||"U"}),a.jsxs("div",{children:[a.jsx("div",{className:"summary-label",children:"Signed In"}),a.jsx("div",{className:"summary-value summary-user-name",children:(n==null?void 0:n.name)||"User"})]})]}),a.jsxs("div",{className:"status-chip",children:[i==="live"?a.jsx(Nh,{size:14}):a.jsx(Sh,{size:14}),i]})]})]})]})}const l1=[{path:"/",label:"Home",icon:nm},{path:"/trade",label:"Trade",icon:Lr},{path:"/news",label:"News",icon:br},{path:"/finance",label:"Wallet",icon:Ti},{path:"/profile",label:"Profile",icon:Rr}],o1=[{path:"/admin",label:"Admin",icon:Ic}];function c1(){const{user:t}=mi(),e=(t==null?void 0:t.role)==="admin"?o1:l1;return a.jsxs("nav",{className:"mobile-nav-shell",children:[a.jsx("style",{children:`
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
      `}),a.jsx("div",{className:"mobile-nav",children:e.map(i=>{const n=i.icon;return a.jsxs(zs,{to:i.path,className:({isActive:r})=>`mobile-nav-item ${r?"active":""}`,children:[a.jsx(n,{className:"mobile-nav-icon"}),a.jsx("span",{children:i.label})]},i.path)})})]})}class u1 extends yi.Component{constructor(){super(...arguments);Ar(this,"state",{hasError:!1});Ar(this,"handleReload",()=>{window.location.reload()});Ar(this,"handleReset",()=>{localStorage.removeItem("btcActiveTrade"),localStorage.removeItem("btcTradeResult"),window.location.reload()})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(i){console.error("App runtime error:",i)}render(){return this.state.hasError?a.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(180deg, #070b11, #0b1119)",padding:"24px"},children:a.jsxs("div",{style:{width:"min(520px, 100%)",borderRadius:"28px",padding:"28px",background:"rgba(15, 19, 28, 0.96)",border:"1px solid rgba(255, 255, 255, 0.08)",boxShadow:"0 24px 80px rgba(0, 0, 0, 0.32)",color:"#eef3fb"},children:[a.jsx("div",{style:{fontSize:"28px",fontWeight:800,marginBottom:"10px"},children:"BTCTradePro"}),a.jsx("div",{style:{fontSize:"20px",fontWeight:700,marginBottom:"8px"},children:"We hit a runtime error"}),a.jsx("p",{style:{color:"#8fa2ba",lineHeight:1.6,marginBottom:"18px"},children:"The app was protected from a blank crash screen. Reload the page, or reset the current trade cache if the issue came from old saved trade data."}),a.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[a.jsx("button",{onClick:this.handleReload,style:{minHeight:"48px",padding:"0 18px",borderRadius:"14px",border:"none",background:"linear-gradient(135deg, #f7931a, #ffb347)",color:"#111",fontWeight:800},children:"Reload app"}),a.jsx("button",{onClick:this.handleReset,style:{minHeight:"48px",padding:"0 18px",borderRadius:"14px",border:"1px solid rgba(255, 255, 255, 0.08)",background:"rgba(255, 255, 255, 0.04)",color:"#eef3fb",fontWeight:700},children:"Reset trade cache"})]})]})}):this.props.children}}const om="/assets/hero-DYsT3BwZ.mp4",h1=[{symbol:"ETH",name:"Ethereum",price:3120.44,change:1.18,high:3186.2,low:3068.55},{symbol:"SOL",name:"Solana",price:167.23,change:2.74,high:170.84,low:160.92},{symbol:"XRP",name:"XRP",price:.6542,change:-.42,high:.6674,low:.6418},{symbol:"BNB",name:"BNB",price:604.72,change:.88,high:613.11,low:596.42}],Eh=[{id:"n1",title:"ETF inflows keep Bitcoin demand elevated through the New York session",meta:"Macro Flow",image:"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=900&q=80"},{id:"n2",title:"Miners tighten supply while spot desks track fresh BTC accumulation",meta:"Mining",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80"},{id:"n3",title:"Traders watch the next reclaim zone as BTC volatility expands again",meta:"Technical",image:"https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=900&q=80"},{id:"n4",title:"Market desks watch BTC liquidity as U.S. trading opens with stronger spot demand",meta:"Liquidity",image:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=900&q=80"},{id:"n5",title:"Bitcoin options activity rises as traders position for a bigger breakout range",meta:"Derivatives",image:"https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=900&q=80"},{id:"n6",title:"Macro desks rotate back into BTC as risk appetite improves across crypto markets",meta:"Macro",image:"https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80"}],d1=[{year:"2009",title:"Genesis block mined",text:"Bitcoin launched as the first decentralized digital asset network."},{year:"2017",title:"Global breakout cycle",text:"BTC reached mainstream awareness and became a major macro market conversation."},{year:"2024",title:"Spot ETF era",text:"Institutional access deepened and daily market participation broadened."}],zh=[{name:"Sarah Miller",role:"Swing Trader",avatar:"https://randomuser.me/api/portraits/women/68.jpg",text:"The mobile layout finally feels like a real trading app. I can check BTC, wallet status, and support without hunting around.",profit:"+$12,450"},{name:"Daniel Brooks",role:"Day Trader",avatar:"https://randomuser.me/api/portraits/men/75.jpg",text:"The trade desk is clean, the chart is live, and the admin-confirmed wallet flow makes the demo feel much closer to a real exchange.",profit:"+$8,930"},{name:"Emily Park",role:"BTC Investor",avatar:"https://randomuser.me/api/portraits/women/44.jpg",text:"Profile, deposit, and review sections now look premium. This feels much more trustworthy than a generic crypto landing page.",profit:"+$21,600"},{name:"Noah Grant",role:"Scalp Trader",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Noah",text:"Phone version feels way tighter now and the quick wallet flow is actually believable.",profit:"+$4,180"},{name:"Amelia Ross",role:"Portfolio Manager",avatar:"https://randomuser.me/api/portraits/women/52.jpg",text:"I like that the KYC and admin approval flow now feels connected instead of fake.",profit:"+$15,700"},{name:"Leo Quinn",role:"Momentum Trader",avatar:"https://api.dicebear.com/7.x/personas/svg?seed=Leo",text:"Great trade interface. The chart and wallet behavior make the whole demo feel more serious.",profit:"+$6,520"},{name:"Mia Lopez",role:"BTC Analyst",avatar:"https://randomuser.me/api/portraits/women/22.jpg",text:"The profile system is much better with avatar choice and editable trader details.",profit:"+$9,410"},{name:"Kai Mercer",role:"Algo Trader",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Kai",text:"The moving review strip and mixed avatar style make the home page feel more alive.",profit:"+$11,230"},{name:"Sophia Reed",role:"Long-Term Holder",avatar:"https://randomuser.me/api/portraits/women/31.jpg",text:"Deposit first, admin review later, balance updates after approval. That flow now makes sense.",profit:"+$3,890"},{name:"Ethan Cruz",role:"Macro Trader",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=Ethan",text:"The landing page now feels like an actual product page, not a login wall.",profit:"+$13,040"},{name:"Grace Park",role:"Futures Trader",avatar:"https://randomuser.me/api/portraits/women/57.jpg",text:"Top trader cards and reviews now look premium on my phone, which matters a lot.",profit:"+$18,660"},{name:"Mason Cole",role:"High-Frequency Trader",avatar:"https://api.dicebear.com/7.x/personas/svg?seed=Mason",text:"The whole platform is closer to a professional exchange demo now.",profit:"+$7,880"}],f1=["All","0 Fees","50% Fees","Margin Trading","RWA","SOL Ecosystem"],Oi={BTC:{icon:"₿",favorite:!0,tags:["10X"],bg:"#ffb11a",color:"#fff"},ETH:{icon:"Ξ",favorite:!0,tags:["10X"],bg:"#0c0d10",color:"#fff"},XRP:{icon:"✕",favorite:!0,tags:["10X"],bg:"#0b0b0d",color:"#fff"},SOL:{icon:"S",tags:["10X"],bg:"#0f1720",color:"#67ffd8"},BNB:{icon:"◇",tags:["10X"],bg:"#f3ba2f",color:"#111"}};function p1(){const{btcPrice:t,btcChange24h:e,btcHigh24h:i,btcLow24h:n,btcVolume24h:r,marketStatus:s,marketReady:l}=Br(),c={symbol:"BTC",name:"Bitcoin",price:t,change:e,volume:r,high:i,low:n};return a.jsxs("div",{className:"home-shell",children:[a.jsx("style",{children:`
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
          color: ${s==="live"?"#0ecb81":"#f6b353"};
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
      `}),a.jsxs("section",{className:"hero-card glass-card",children:[a.jsx("video",{className:"hero-video",src:om,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),a.jsx("div",{className:"hero-overlay"}),a.jsxs("div",{className:"hero-grid",children:[a.jsxs("div",{className:"hero-copy",children:[a.jsxs("div",{className:"eyebrow",children:[a.jsx(ai,{size:14}),"Professional BTC demo workspace"]}),a.jsxs("h1",{className:"hero-title",children:["Trade ",a.jsx("span",{children:"Bitcoin"})," with a cleaner pro layout on every screen."]}),a.jsx("p",{className:"hero-text",children:"Live BTC pricing, mobile-first navigation, dedicated trade and wallet flows, and a home screen that feels like a real market desk instead of one stretched page."}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs(he,{to:"/trade",className:"hero-btn primary",children:["Open Trade Desk",a.jsx(Ms,{size:18})]}),a.jsx(he,{to:"/finance",className:"hero-btn secondary",children:"Go to Deposit"})]})]}),a.jsx("div",{className:"hero-aside",children:a.jsxs("div",{className:"market-hero-card",children:[a.jsxs("div",{className:"market-hero-header",children:[a.jsxs("div",{className:"market-hero-meta",children:[a.jsx("div",{className:"market-icon",children:"₿"}),a.jsxs("div",{children:[a.jsx("strong",{children:"Bitcoin / USD"}),a.jsx("div",{className:"market-hero-label",children:"Real-time market sync"})]})]}),a.jsx("div",{className:"market-status",children:l?s:"loading"})]}),a.jsx("div",{className:`market-hero-price ${l?"":"loading"}`,children:l?`$${c.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:"Loading..."}),l&&a.jsxs("div",{className:`market-hero-change ${c.change>=0?"up":"down"}`,children:[c.change>=0?a.jsx(Lr,{size:16}):a.jsx(lm,{size:16}),c.change>=0?"+":"",c.change.toFixed(2),"%"]}),a.jsxs("div",{className:"market-stats",children:[a.jsxs("div",{className:"market-stat",children:[a.jsx("div",{className:"market-stat-label",children:"24h High"}),a.jsxs("div",{className:"market-stat-value",children:["$",c.high.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"market-stat",children:[a.jsx("div",{className:"market-stat-label",children:"24h Low"}),a.jsxs("div",{className:"market-stat-value",children:["$",c.low.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"market-stat",children:[a.jsx("div",{className:"market-stat-label",children:"24h Volume"}),a.jsxs("div",{className:"market-stat-value",children:[c.volume.toLocaleString(void 0,{maximumFractionDigits:0})," BTC"]})]})]})]})})]})]}),a.jsxs("section",{className:"quick-grid",children:[a.jsxs("div",{className:"quick-card glass-card",children:[a.jsx("div",{className:"quick-icon",children:a.jsx(Ti,{size:22})}),a.jsx("div",{className:"quick-value",children:"$2.4B"}),a.jsx("div",{className:"quick-label",children:"Spot and derivatives volume across the desk"})]}),a.jsxs("div",{className:"quick-card glass-card",children:[a.jsx("div",{className:"quick-icon",children:a.jsx(Ac,{size:22})}),a.jsx("div",{className:"quick-value",children:"1m / 5m / 1h / 1D"}),a.jsx("div",{className:"quick-label",children:"Timeframes available on the BTC trade chart"})]}),a.jsxs("div",{className:"quick-card glass-card",children:[a.jsx("div",{className:"quick-icon",children:a.jsx(Yx,{size:22})}),a.jsx("div",{className:"quick-value",children:"156"}),a.jsx("div",{className:"quick-label",children:"Countries simulated for the global trading audience"})]}),a.jsxs("div",{className:"quick-card glass-card",children:[a.jsx("div",{className:"quick-icon",children:a.jsx(im,{size:22})}),a.jsx("div",{className:"quick-value",children:"24 / 7"}),a.jsx("div",{className:"quick-label",children:"Always-on BTC market monitoring and wallet access"})]})]}),a.jsxs("section",{className:"section-card glass-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsx("div",{className:"section-title",children:"BTC news on the current home screen"}),a.jsxs(he,{to:"/news",className:"section-link",children:["More news",a.jsx(Ms,{size:16})]})]}),a.jsx("div",{className:"story-marquee",children:a.jsx("div",{className:"story-track",children:[...Eh,...Eh].map((o,u)=>a.jsxs("article",{className:"story-card",children:[a.jsx("img",{src:o.image,alt:o.title,className:"story-image"}),a.jsxs("div",{className:"story-copy",children:[a.jsx("div",{className:"story-meta",children:o.meta}),a.jsx("div",{className:"story-title",children:o.title}),a.jsx(he,{to:"/news",className:"story-cta",children:"Read market brief"})]})]},`${o.id}-${u}`))})})]}),a.jsxs("section",{className:"section-card glass-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsx("div",{className:"section-title",children:"Market board"}),a.jsxs(he,{to:"/trade",className:"section-link",children:["Trade BTC",a.jsx(Ms,{size:16})]})]}),a.jsx("div",{className:"market-table",children:a.jsxs("div",{style:{width:"100%"},children:[a.jsx("div",{className:"market-filterbar",children:a.jsx("div",{className:"market-filters",children:f1.map((o,u)=>a.jsx("button",{type:"button",className:`market-filter-chip ${u===0?"active":""}`,children:o},o))})}),a.jsxs("div",{className:"market-list-head",children:[a.jsx("div",{children:"Trading Pairs"}),a.jsx("div",{className:"market-list-head-right",children:"Last Traded Price/24H Change %"})]}),[c,...h1].map(o=>{var u,h,d,f,m,g;return a.jsxs("div",{className:"market-list-row",children:[a.jsxs("div",{className:"market-pair",children:[a.jsx(i1,{size:18,fill:(u=Oi[o.symbol])!=null&&u.favorite?"currentColor":"none",className:`market-star ${(h=Oi[o.symbol])!=null&&h.favorite?"":"off"}`}),a.jsx("div",{className:"market-coin",style:{background:((d=Oi[o.symbol])==null?void 0:d.bg)||"#e7eefc",color:((f=Oi[o.symbol])==null?void 0:f.color)||"#2b5db6"},children:((m=Oi[o.symbol])==null?void 0:m.icon)||o.symbol.charAt(0)}),a.jsxs("div",{className:"market-pair-copy",children:[a.jsxs("strong",{children:[o.symbol,a.jsx("span",{children:"/USDT"})]}),(((g=Oi[o.symbol])==null?void 0:g.tags)||[]).map(p=>a.jsx("span",{className:"market-tag",children:p},`${o.symbol}-${p}`))]})]}),a.jsxs("div",{className:"market-price-block",children:[a.jsx("div",{className:"market-price-main",children:o.price.toLocaleString(void 0,{minimumFractionDigits:o.price>1?2:4,maximumFractionDigits:o.price>1?2:4})}),a.jsxs("div",{className:"market-price-change",style:{color:o.change>0?"#0ecb81":o.change<0?"#f6465d":"#9aa3b1"},children:[o.change>0?"+":"",o.change.toFixed(2),"%"]})]})]},o.symbol)})]})})]}),a.jsx("section",{className:"timeline-grid",children:d1.map(o=>a.jsxs("div",{className:"timeline-card glass-card",children:[a.jsx("div",{className:"timeline-year",children:o.year}),a.jsx("div",{className:"timeline-title",children:o.title}),a.jsx("div",{className:"timeline-text",children:o.text})]},o.year))}),a.jsxs("section",{className:"section-card glass-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsx("div",{className:"section-title",children:"Top BTC traders"}),a.jsxs("div",{className:"section-link",children:[a.jsx(br,{size:15}),"Monthly ranking"]})]}),a.jsx("div",{className:"leaderboard-list",children:zx.slice(0,5).map(o=>a.jsxs("div",{className:"leaderboard-row",children:[a.jsx("div",{className:"leaderboard-rank",children:o.rank}),a.jsxs("div",{className:"leaderboard-user",children:[a.jsx("img",{src:o.avatar,alt:o.name,className:"leaderboard-avatar"}),a.jsxs("div",{children:[a.jsx("strong",{children:o.name}),a.jsxs("span",{children:[o.trades," trades"]})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"market-cell-label",children:"Profit"}),a.jsxs("div",{className:"market-cell-value",style:{color:"#0ecb81"},children:["$",o.profit.toLocaleString()]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"market-cell-label",children:"Win rate"}),a.jsxs("div",{className:"market-cell-value",children:[o.winRate,"%"]})]})]},o.rank))})]}),a.jsxs("section",{className:"section-card glass-card",children:[a.jsx("div",{className:"section-head",children:a.jsx("div",{className:"section-title",children:"What traders are saying"})}),a.jsx("div",{className:"reviews-marquee",children:a.jsx("div",{className:"reviews-track",children:[...zh,...zh].map((o,u)=>a.jsxs("article",{className:"review-card glass-card",children:[a.jsxs("div",{className:"review-head",children:[a.jsx("img",{src:o.avatar,alt:o.name}),a.jsxs("div",{children:[a.jsx("strong",{children:o.name}),a.jsx("div",{className:"review-role",children:o.role})]})]}),a.jsx("div",{className:"review-text",children:o.text}),a.jsx("div",{className:"review-profit",children:o.profit})]},`${o.name}-${u}`))})})]}),a.jsxs("footer",{className:"site-footer",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("div",{className:"footer-coin",children:"₿"}),a.jsxs("div",{children:[a.jsx("h3",{children:"BTCTradePro"}),a.jsx("p",{children:"The world's leading Bitcoin trading platform with advanced tools and institutional-grade security."})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-title",children:"Products"}),a.jsxs("div",{className:"footer-links",children:[a.jsx(he,{to:"/trade",className:"footer-link",children:"Spot Trading"}),a.jsx(he,{to:"/trade",className:"footer-link",children:"Futures"}),a.jsx(he,{to:"/finance",className:"footer-link",children:"Staking"})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-title",children:"Company"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",className:"footer-link",children:"About Us"}),a.jsx("a",{href:"#",className:"footer-link",children:"Careers"}),a.jsx("a",{href:"#",className:"footer-link",children:"Press"})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-title",children:"Support"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",className:"footer-link",children:"Telegram"}),a.jsx(he,{to:"/support",className:"footer-link",children:"Help Center"}),a.jsx("a",{href:"#",className:"footer-link",children:"Contact"})]})]}),a.jsx("div",{className:"footer-bottom",children:"2026 BTCTradePro. All rights reserved."})]})]})}function m1(){const{btcPrice:t,btcChange24h:e,marketStatus:i,marketReady:n}=Br();return a.jsxs("div",{className:"landing-shell",children:[a.jsx("style",{children:`
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
      `}),a.jsxs("nav",{className:"landing-nav",children:[a.jsxs("div",{className:"landing-brand",children:[a.jsx("div",{className:"brand-dot",children:"₿"}),a.jsxs("span",{children:["BTCTrade",a.jsx("span",{style:{color:"#f7931a"},children:"Pro"})]})]}),a.jsxs("div",{className:"landing-actions",children:[a.jsx(he,{to:"/login",className:"landing-btn ghost",children:"Sign In"}),a.jsx(he,{to:"/login",className:"landing-btn primary",children:"Start Now"})]})]}),a.jsxs("section",{className:"landing-hero",children:[a.jsx("video",{className:"landing-video",src:om,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),a.jsx("div",{className:"landing-overlay"}),a.jsxs("div",{className:"landing-content",children:[a.jsxs("div",{className:"landing-copy",children:[a.jsxs("div",{className:"eyebrow",children:[a.jsx(ai,{size:14})," Professional Bitcoin trading platform"]}),a.jsxs("h1",{className:"landing-title",children:["Trade ",a.jsx("span",{children:"Bitcoin"})," Build Wealth"]}),a.jsx("p",{children:"Join a pro-style BTC platform with live market data, wallet approvals, advanced charting, and a premium mobile-first experience."}),a.jsxs("div",{className:"landing-actions",children:[a.jsxs(he,{to:"/login",className:"landing-btn primary",children:["Sign In ",a.jsx(Ms,{size:16})]}),a.jsx(he,{to:"/login",className:"landing-btn ghost",children:"Create Account"})]}),a.jsxs("div",{className:"landing-stats",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:"$2.4B+"}),a.jsx("span",{children:"Trading Volume"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:"5M+"}),a.jsx("span",{children:"Users"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("strong",{children:"99.9%"}),a.jsx("span",{children:"Uptime"})]})]})]}),a.jsxs("div",{className:"side-grid",children:[a.jsxs("div",{className:"side-card",children:[a.jsx("h3",{children:"BTC/USDT"}),a.jsx("div",{className:"side-card-label",children:n?i==="live"?"Live Market":"Fallback Market":"Loading Market"}),a.jsx("strong",{className:n?void 0:"loading-price",children:n?`$${t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:"Loading..."}),n&&a.jsxs("div",{className:`side-card-change ${e>=0?"up":"down"}`,children:[e>=0?"+":"",e.toFixed(2),"% 24h"]}),a.jsx("p",{children:"Real-time Bitcoin pricing powers the trade desk after sign-in, with wallet and approval flows connected across the app."})]}),a.jsxs("div",{className:"side-card",children:[a.jsx("h3",{children:"Why BTCTradePro"}),a.jsxs("div",{className:"feature-row",children:[a.jsxs("div",{className:"feature-item",children:[a.jsx(Ac,{size:18}),a.jsxs("div",{children:[a.jsx("strong",{children:"Live Trade Desk"}),a.jsx("span",{children:"Real BTC charting and market sync."})]})]}),a.jsxs("div",{className:"feature-item",children:[a.jsx(Ti,{size:18}),a.jsxs("div",{children:[a.jsx("strong",{children:"Wallet Review Flow"}),a.jsx("span",{children:"Admin-reviewed deposits and withdrawals."})]})]}),a.jsxs("div",{className:"feature-item",children:[a.jsx(Lr,{size:18}),a.jsxs("div",{children:[a.jsx("strong",{children:"Mobile Pro UX"}),a.jsx("span",{children:"Dedicated screens for trade, wallet, profile, and support."})]})]})]})]})]})]})]}),a.jsxs("footer",{className:"landing-footer",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("div",{className:"footer-coin",children:"₿"}),a.jsxs("div",{children:[a.jsx("h3",{children:"BTCTradePro"}),a.jsx("p",{children:"The world's leading Bitcoin trading platform with advanced tools and institutional-grade security."})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("div",{className:"footer-title",children:"Products"}),a.jsxs("div",{className:"footer-links",children:[a.jsx(he,{to:"/login",className:"footer-link",children:"Spot Trading"}),a.jsx(he,{to:"/login",className:"footer-link",children:"Futures"}),a.jsx(he,{to:"/login",className:"footer-link",children:"Staking"})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("div",{className:"footer-title",children:"Company"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",className:"footer-link",children:"About Us"}),a.jsx("a",{href:"#",className:"footer-link",children:"Careers"}),a.jsx("a",{href:"#",className:"footer-link",children:"Press"})]})]}),a.jsxs("div",{className:"footer-column",children:[a.jsx("div",{className:"footer-title",children:"Support"}),a.jsxs("div",{className:"footer-links",children:[a.jsx("a",{href:"#",className:"footer-link",children:"Telegram"}),a.jsx(he,{to:"/login",className:"footer-link",children:"Help Center"}),a.jsx("a",{href:"#",className:"footer-link",children:"Contact"})]})]}),a.jsx("div",{className:"footer-bottom",children:"2026 BTCTradePro. All rights reserved."})]})]})}var g1=Object.defineProperty,ra=Object.getOwnPropertySymbols,cm=Object.prototype.hasOwnProperty,um=Object.prototype.propertyIsEnumerable,Mh=(t,e,i)=>e in t?g1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,v1=(t,e)=>{for(var i in e||(e={}))cm.call(e,i)&&Mh(t,i,e[i]);if(ra)for(var i of ra(e))um.call(e,i)&&Mh(t,i,e[i]);return t},x1=(t,e)=>{var i={};for(var n in t)cm.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&ra)for(var n of ra(t))e.indexOf(n)<0&&um.call(t,n)&&(i[n]=t[n]);return i};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Pi;(t=>{const e=class{constructor(o,u,h,d){if(this.version=o,this.errorCorrectionLevel=u,this.modules=[],this.isFunction=[],o<e.MIN_VERSION||o>e.MAX_VERSION)throw new RangeError("Version value out of range");if(d<-1||d>7)throw new RangeError("Mask value out of range");this.size=o*4+17;let f=[];for(let g=0;g<this.size;g++)f.push(!1);for(let g=0;g<this.size;g++)this.modules.push(f.slice()),this.isFunction.push(f.slice());this.drawFunctionPatterns();const m=this.addEccAndInterleave(h);if(this.drawCodewords(m),d==-1){let g=1e9;for(let p=0;p<8;p++){this.applyMask(p),this.drawFormatBits(p);const w=this.getPenaltyScore();w<g&&(d=p,g=w),this.applyMask(p)}}s(0<=d&&d<=7),this.mask=d,this.applyMask(d),this.drawFormatBits(d),this.isFunction=[]}static encodeText(o,u){const h=t.QrSegment.makeSegments(o);return e.encodeSegments(h,u)}static encodeBinary(o,u){const h=t.QrSegment.makeBytes(o);return e.encodeSegments([h],u)}static encodeSegments(o,u,h=1,d=40,f=-1,m=!0){if(!(e.MIN_VERSION<=h&&h<=d&&d<=e.MAX_VERSION)||f<-1||f>7)throw new RangeError("Invalid value");let g,p;for(g=h;;g++){const y=e.getNumDataCodewords(g,u)*8,b=c.getTotalBits(o,g);if(b<=y){p=b;break}if(g>=d)throw new RangeError("Data too long")}for(const y of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])m&&p<=e.getNumDataCodewords(g,y)*8&&(u=y);let w=[];for(const y of o){n(y.mode.modeBits,4,w),n(y.numChars,y.mode.numCharCountBits(g),w);for(const b of y.getData())w.push(b)}s(w.length==p);const v=e.getNumDataCodewords(g,u)*8;s(w.length<=v),n(0,Math.min(4,v-w.length),w),n(0,(8-w.length%8)%8,w),s(w.length%8==0);for(let y=236;w.length<v;y^=253)n(y,8,w);let x=[];for(;x.length*8<w.length;)x.push(0);return w.forEach((y,b)=>x[b>>>3]|=y<<7-(b&7)),new e(g,u,x,f)}getModule(o,u){return 0<=o&&o<this.size&&0<=u&&u<this.size&&this.modules[u][o]}getModules(){return this.modules}drawFunctionPatterns(){for(let h=0;h<this.size;h++)this.setFunctionModule(6,h,h%2==0),this.setFunctionModule(h,6,h%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const o=this.getAlignmentPatternPositions(),u=o.length;for(let h=0;h<u;h++)for(let d=0;d<u;d++)h==0&&d==0||h==0&&d==u-1||h==u-1&&d==0||this.drawAlignmentPattern(o[h],o[d]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(o){const u=this.errorCorrectionLevel.formatBits<<3|o;let h=u;for(let f=0;f<10;f++)h=h<<1^(h>>>9)*1335;const d=(u<<10|h)^21522;s(d>>>15==0);for(let f=0;f<=5;f++)this.setFunctionModule(8,f,r(d,f));this.setFunctionModule(8,7,r(d,6)),this.setFunctionModule(8,8,r(d,7)),this.setFunctionModule(7,8,r(d,8));for(let f=9;f<15;f++)this.setFunctionModule(14-f,8,r(d,f));for(let f=0;f<8;f++)this.setFunctionModule(this.size-1-f,8,r(d,f));for(let f=8;f<15;f++)this.setFunctionModule(8,this.size-15+f,r(d,f));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let o=this.version;for(let h=0;h<12;h++)o=o<<1^(o>>>11)*7973;const u=this.version<<12|o;s(u>>>18==0);for(let h=0;h<18;h++){const d=r(u,h),f=this.size-11+h%3,m=Math.floor(h/3);this.setFunctionModule(f,m,d),this.setFunctionModule(m,f,d)}}drawFinderPattern(o,u){for(let h=-4;h<=4;h++)for(let d=-4;d<=4;d++){const f=Math.max(Math.abs(d),Math.abs(h)),m=o+d,g=u+h;0<=m&&m<this.size&&0<=g&&g<this.size&&this.setFunctionModule(m,g,f!=2&&f!=4)}}drawAlignmentPattern(o,u){for(let h=-2;h<=2;h++)for(let d=-2;d<=2;d++)this.setFunctionModule(o+d,u+h,Math.max(Math.abs(d),Math.abs(h))!=1)}setFunctionModule(o,u,h){this.modules[u][o]=h,this.isFunction[u][o]=!0}addEccAndInterleave(o){const u=this.version,h=this.errorCorrectionLevel;if(o.length!=e.getNumDataCodewords(u,h))throw new RangeError("Invalid argument");const d=e.NUM_ERROR_CORRECTION_BLOCKS[h.ordinal][u],f=e.ECC_CODEWORDS_PER_BLOCK[h.ordinal][u],m=Math.floor(e.getNumRawDataModules(u)/8),g=d-m%d,p=Math.floor(m/d);let w=[];const v=e.reedSolomonComputeDivisor(f);for(let y=0,b=0;y<d;y++){let j=o.slice(b,b+p-f+(y<g?0:1));b+=j.length;const z=e.reedSolomonComputeRemainder(j,v);y<g&&j.push(0),w.push(j.concat(z))}let x=[];for(let y=0;y<w[0].length;y++)w.forEach((b,j)=>{(y!=p-f||j>=g)&&x.push(b[y])});return s(x.length==m),x}drawCodewords(o){if(o.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let u=0;for(let h=this.size-1;h>=1;h-=2){h==6&&(h=5);for(let d=0;d<this.size;d++)for(let f=0;f<2;f++){const m=h-f,p=(h+1&2)==0?this.size-1-d:d;!this.isFunction[p][m]&&u<o.length*8&&(this.modules[p][m]=r(o[u>>>3],7-(u&7)),u++)}}s(u==o.length*8)}applyMask(o){if(o<0||o>7)throw new RangeError("Mask value out of range");for(let u=0;u<this.size;u++)for(let h=0;h<this.size;h++){let d;switch(o){case 0:d=(h+u)%2==0;break;case 1:d=u%2==0;break;case 2:d=h%3==0;break;case 3:d=(h+u)%3==0;break;case 4:d=(Math.floor(h/3)+Math.floor(u/2))%2==0;break;case 5:d=h*u%2+h*u%3==0;break;case 6:d=(h*u%2+h*u%3)%2==0;break;case 7:d=((h+u)%2+h*u%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[u][h]&&d&&(this.modules[u][h]=!this.modules[u][h])}}getPenaltyScore(){let o=0;for(let f=0;f<this.size;f++){let m=!1,g=0,p=[0,0,0,0,0,0,0];for(let w=0;w<this.size;w++)this.modules[f][w]==m?(g++,g==5?o+=e.PENALTY_N1:g>5&&o++):(this.finderPenaltyAddHistory(g,p),m||(o+=this.finderPenaltyCountPatterns(p)*e.PENALTY_N3),m=this.modules[f][w],g=1);o+=this.finderPenaltyTerminateAndCount(m,g,p)*e.PENALTY_N3}for(let f=0;f<this.size;f++){let m=!1,g=0,p=[0,0,0,0,0,0,0];for(let w=0;w<this.size;w++)this.modules[w][f]==m?(g++,g==5?o+=e.PENALTY_N1:g>5&&o++):(this.finderPenaltyAddHistory(g,p),m||(o+=this.finderPenaltyCountPatterns(p)*e.PENALTY_N3),m=this.modules[w][f],g=1);o+=this.finderPenaltyTerminateAndCount(m,g,p)*e.PENALTY_N3}for(let f=0;f<this.size-1;f++)for(let m=0;m<this.size-1;m++){const g=this.modules[f][m];g==this.modules[f][m+1]&&g==this.modules[f+1][m]&&g==this.modules[f+1][m+1]&&(o+=e.PENALTY_N2)}let u=0;for(const f of this.modules)u=f.reduce((m,g)=>m+(g?1:0),u);const h=this.size*this.size,d=Math.ceil(Math.abs(u*20-h*10)/h)-1;return s(0<=d&&d<=9),o+=d*e.PENALTY_N4,s(0<=o&&o<=2568888),o}getAlignmentPatternPositions(){if(this.version==1)return[];{const o=Math.floor(this.version/7)+2,u=this.version==32?26:Math.ceil((this.version*4+4)/(o*2-2))*2;let h=[6];for(let d=this.size-7;h.length<o;d-=u)h.splice(1,0,d);return h}}static getNumRawDataModules(o){if(o<e.MIN_VERSION||o>e.MAX_VERSION)throw new RangeError("Version number out of range");let u=(16*o+128)*o+64;if(o>=2){const h=Math.floor(o/7)+2;u-=(25*h-10)*h-55,o>=7&&(u-=36)}return s(208<=u&&u<=29648),u}static getNumDataCodewords(o,u){return Math.floor(e.getNumRawDataModules(o)/8)-e.ECC_CODEWORDS_PER_BLOCK[u.ordinal][o]*e.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][o]}static reedSolomonComputeDivisor(o){if(o<1||o>255)throw new RangeError("Degree out of range");let u=[];for(let d=0;d<o-1;d++)u.push(0);u.push(1);let h=1;for(let d=0;d<o;d++){for(let f=0;f<u.length;f++)u[f]=e.reedSolomonMultiply(u[f],h),f+1<u.length&&(u[f]^=u[f+1]);h=e.reedSolomonMultiply(h,2)}return u}static reedSolomonComputeRemainder(o,u){let h=u.map(d=>0);for(const d of o){const f=d^h.shift();h.push(0),u.forEach((m,g)=>h[g]^=e.reedSolomonMultiply(m,f))}return h}static reedSolomonMultiply(o,u){if(o>>>8||u>>>8)throw new RangeError("Byte out of range");let h=0;for(let d=7;d>=0;d--)h=h<<1^(h>>>7)*285,h^=(u>>>d&1)*o;return s(h>>>8==0),h}finderPenaltyCountPatterns(o){const u=o[1];s(u<=this.size*3);const h=u>0&&o[2]==u&&o[3]==u*3&&o[4]==u&&o[5]==u;return(h&&o[0]>=u*4&&o[6]>=u?1:0)+(h&&o[6]>=u*4&&o[0]>=u?1:0)}finderPenaltyTerminateAndCount(o,u,h){return o&&(this.finderPenaltyAddHistory(u,h),u=0),u+=this.size,this.finderPenaltyAddHistory(u,h),this.finderPenaltyCountPatterns(h)}finderPenaltyAddHistory(o,u){u[0]==0&&(o+=this.size),u.pop(),u.unshift(o)}};let i=e;i.MIN_VERSION=1,i.MAX_VERSION=40,i.PENALTY_N1=3,i.PENALTY_N2=3,i.PENALTY_N3=40,i.PENALTY_N4=10,i.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],i.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=i;function n(o,u,h){if(u<0||u>31||o>>>u)throw new RangeError("Value out of range");for(let d=u-1;d>=0;d--)h.push(o>>>d&1)}function r(o,u){return(o>>>u&1)!=0}function s(o){if(!o)throw new Error("Assertion error")}const l=class{constructor(o,u,h){if(this.mode=o,this.numChars=u,this.bitData=h,u<0)throw new RangeError("Invalid argument");this.bitData=h.slice()}static makeBytes(o){let u=[];for(const h of o)n(h,8,u);return new l(l.Mode.BYTE,o.length,u)}static makeNumeric(o){if(!l.isNumeric(o))throw new RangeError("String contains non-numeric characters");let u=[];for(let h=0;h<o.length;){const d=Math.min(o.length-h,3);n(parseInt(o.substr(h,d),10),d*3+1,u),h+=d}return new l(l.Mode.NUMERIC,o.length,u)}static makeAlphanumeric(o){if(!l.isAlphanumeric(o))throw new RangeError("String contains unencodable characters in alphanumeric mode");let u=[],h;for(h=0;h+2<=o.length;h+=2){let d=l.ALPHANUMERIC_CHARSET.indexOf(o.charAt(h))*45;d+=l.ALPHANUMERIC_CHARSET.indexOf(o.charAt(h+1)),n(d,11,u)}return h<o.length&&n(l.ALPHANUMERIC_CHARSET.indexOf(o.charAt(h)),6,u),new l(l.Mode.ALPHANUMERIC,o.length,u)}static makeSegments(o){return o==""?[]:l.isNumeric(o)?[l.makeNumeric(o)]:l.isAlphanumeric(o)?[l.makeAlphanumeric(o)]:[l.makeBytes(l.toUtf8ByteArray(o))]}static makeEci(o){let u=[];if(o<0)throw new RangeError("ECI assignment value out of range");if(o<128)n(o,8,u);else if(o<16384)n(2,2,u),n(o,14,u);else if(o<1e6)n(6,3,u),n(o,21,u);else throw new RangeError("ECI assignment value out of range");return new l(l.Mode.ECI,0,u)}static isNumeric(o){return l.NUMERIC_REGEX.test(o)}static isAlphanumeric(o){return l.ALPHANUMERIC_REGEX.test(o)}getData(){return this.bitData.slice()}static getTotalBits(o,u){let h=0;for(const d of o){const f=d.mode.numCharCountBits(u);if(d.numChars>=1<<f)return 1/0;h+=4+f+d.bitData.length}return h}static toUtf8ByteArray(o){o=encodeURI(o);let u=[];for(let h=0;h<o.length;h++)o.charAt(h)!="%"?u.push(o.charCodeAt(h)):(u.push(parseInt(o.substr(h+1,2),16)),h+=2);return u}};let c=l;c.NUMERIC_REGEX=/^[0-9]*$/,c.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,c.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=c})(Pi||(Pi={}));(t=>{(e=>{const i=class{constructor(r,s){this.ordinal=r,this.formatBits=s}};let n=i;n.LOW=new i(0,1),n.MEDIUM=new i(1,0),n.QUARTILE=new i(2,3),n.HIGH=new i(3,2),e.Ecc=n})(t.QrCode||(t.QrCode={}))})(Pi||(Pi={}));(t=>{(e=>{const i=class{constructor(r,s){this.modeBits=r,this.numBitsCharCount=s}numCharCountBits(r){return this.numBitsCharCount[Math.floor((r+7)/17)]}};let n=i;n.NUMERIC=new i(1,[10,12,14]),n.ALPHANUMERIC=new i(2,[9,11,13]),n.BYTE=new i(4,[8,16,16]),n.KANJI=new i(8,[8,10,12]),n.ECI=new i(7,[0,0,0]),e.Mode=n})(t.QrSegment||(t.QrSegment={}))})(Pi||(Pi={}));var Vn=Pi;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var y1={L:Vn.QrCode.Ecc.LOW,M:Vn.QrCode.Ecc.MEDIUM,Q:Vn.QrCode.Ecc.QUARTILE,H:Vn.QrCode.Ecc.HIGH},w1=128,b1="L",k1="#FFFFFF",j1="#000000",S1=!1,hm=4,N1=.1;function C1(t,e=0){const i=[];return t.forEach(function(n,r){let s=null;n.forEach(function(l,c){if(!l&&s!==null){i.push(`M${s+e} ${r+e}h${c-s}v1H${s+e}z`),s=null;return}if(c===n.length-1){if(!l)return;s===null?i.push(`M${c+e},${r+e} h1v1H${c+e}z`):i.push(`M${s+e},${r+e} h${c+1-s}v1H${s+e}z`);return}l&&s===null&&(s=c)})}),i.join("")}function E1(t,e){return t.slice().map((i,n)=>n<e.y||n>=e.y+e.h?i:i.map((r,s)=>s<e.x||s>=e.x+e.w?r:!1))}function z1(t,e,i,n){if(n==null)return null;const r=i?hm:0,s=t.length+r*2,l=Math.floor(e*N1),c=s/e,o=(n.width||l)*c,u=(n.height||l)*c,h=n.x==null?t.length/2-o/2:n.x*c,d=n.y==null?t.length/2-u/2:n.y*c;let f=null;if(n.excavate){let m=Math.floor(h),g=Math.floor(d),p=Math.ceil(o+h-m),w=Math.ceil(u+d-g);f={x:m,y:g,w:p,h:w}}return{x:h,y:d,h:u,w:o,excavation:f}}(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})();function M1(t){const e=t,{value:i,size:n=w1,level:r=b1,bgColor:s=k1,fgColor:l=j1,includeMargin:c=S1,imageSettings:o}=e,u=x1(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let h=Vn.QrCode.encodeText(i,y1[r]).getModules();const d=c?hm:0,f=h.length+d*2,m=z1(h,n,c,o);let g=null;o!=null&&m!=null&&(m.excavation!=null&&(h=E1(h,m.excavation)),g=yi.createElement("image",{xlinkHref:o.src,height:m.h,width:m.w,x:m.x+d,y:m.y+d,preserveAspectRatio:"none"}));const p=C1(h,d);return yi.createElement("svg",v1({height:n,width:n,viewBox:`0 0 ${f} ${f}`},u),yi.createElement("path",{fill:s,d:`M0,0 h${f}v${f}H0z`,shapeRendering:"crispEdges"}),yi.createElement("path",{fill:l,d:p,shapeRendering:"crispEdges"}),g)}function _1(){const{user:t,updateUser:e}=mi(),{btcPrice:i,transactions:n,addTransaction:r}=Br(),[s,l]=k.useState("deposit"),[c,o]=k.useState(""),[u,h]=k.useState(""),[d,f]=k.useState(""),[m,g]=k.useState(""),[p,w]=k.useState(!1),[v,x]=k.useState(!1),[y,b]=k.useState(!1),[j,z]=k.useState(!1),[M,_]=k.useState(!1),V=k.useMemo(()=>n.filter(O=>O.userEmail===(t==null?void 0:t.email)).slice(0,8),[n,t==null?void 0:t.email]),I=async()=>{await navigator.clipboard.writeText(is),_(!0),window.setTimeout(()=>_(!1),1500)},Z=()=>{!c||parseFloat(c)<=0||(w(!0),x(!1))},be=()=>{if(!t||!c)return;const O=parseFloat(c),ce=O*i,Pe={id:`tx-${Date.now()}`,type:"deposit",amount:ce,btcAmount:O,walletAddress:is,userEmail:t.email,userName:t.name,status:"pending",timestamp:new Date().toISOString()};r(Pe),x(!0),o(""),w(!1)},ke=()=>{if(!t||!u)return;const O=parseFloat(u);if(O>(t.usdBalance||0)){alert("Insufficient USD balance");return}r({id:`tx-${Date.now()}`,type:"withdraw",amount:O,btcAmount:O/i,withdrawAddress:d,userEmail:t.email,userName:t.name,status:"pending",timestamp:new Date().toISOString()}),b(!0),h(""),f("")},ge=()=>{if(!t||!m)return;const O=parseFloat(m);if(O>t.btcBalance){alert("Insufficient BTC balance");return}e({btcBalance:t.btcBalance-O,stakeAmount:(t.stakeAmount||0)+O}),r({id:`tx-${Date.now()}`,type:"stake",amount:O*i,btcAmount:O,userEmail:t.email,userName:t.name,status:"completed",timestamp:new Date().toISOString()}),z(!0),g("")};return a.jsxs("div",{className:"finance-shell",children:[a.jsx("style",{children:`
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
      `}),a.jsxs("section",{className:"card page-head",children:[a.jsx("h1",{children:"Finance Center"}),a.jsx("p",{children:"Deposit, withdraw, and manage your demo BTC wallet with a more professional exchange flow."})]}),a.jsxs("section",{className:"balance-grid",children:[a.jsxs("div",{className:"card balance-card",children:[a.jsx("div",{className:"balance-icon",children:a.jsx(Ti,{size:24})}),a.jsx("h3",{children:"USD Balance"}),a.jsxs("strong",{children:["$",de((t==null?void 0:t.usdBalance)||0)]}),a.jsx("p",{children:"Available for trading and withdrawals after System Admin verification."})]}),a.jsxs("div",{className:"card balance-card",children:[a.jsx("div",{className:"balance-icon",children:a.jsx(Fx,{size:24})}),a.jsx("h3",{children:"BTC Holdings"}),a.jsxs("strong",{children:[((t==null?void 0:t.btcBalance)||0).toFixed(6)," BTC"]}),a.jsxs("p",{children:["Live value: $",(((t==null?void 0:t.btcBalance)||0)*i).toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"card balance-card",children:[a.jsx("div",{className:"balance-icon",children:a.jsx(kh,{size:24})}),a.jsx("h3",{children:"Staked BTC"}),a.jsxs("strong",{children:[((t==null?void 0:t.stakeAmount)||0).toFixed(6)," BTC"]}),a.jsx("p",{children:"Passive rewards stay in demo mode and can be showcased to users."})]})]}),a.jsxs("section",{className:"content-grid",children:[a.jsxs("div",{className:"card wallet-main",children:[a.jsxs("div",{className:"tab-row",children:[a.jsx("button",{className:`tab-btn ${s==="deposit"?"active":""}`,onClick:()=>l("deposit"),children:"Deposit"}),a.jsx("button",{className:`tab-btn ${s==="withdraw"?"active":""}`,onClick:()=>l("withdraw"),children:"Withdraw"}),a.jsx("button",{className:`tab-btn ${s==="stake"?"active":""}`,onClick:()=>l("stake"),children:"Stake"})]}),s==="deposit"&&a.jsxs("div",{className:"deposit-layout",children:[a.jsxs("div",{className:"flow-card",children:[a.jsx("h2",{children:"Deposit BTC"}),a.jsx("p",{children:"Enter how much BTC the user will deposit. After you prepare the request, a separate wallet box appears with the QR code, wallet address, and finish button."}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Deposit Amount (BTC)"}),a.jsx("input",{className:"amount-input",value:c,onChange:O=>o(O.target.value),type:"number",placeholder:"0.01000000"}),a.jsxs("div",{className:"amount-note",children:["Website credit after verification: ",c?`$${de(parseFloat(c||"0")*i)}`:"$0.00"," USDT"]})]}),a.jsx("button",{className:"cta",onClick:Z,children:"Prepare Deposit"})]}),p&&a.jsxs("div",{className:"qr-panel",children:[a.jsxs("div",{className:"deposit-box-head",children:[a.jsx("strong",{children:"BTC Deposit Wallet"}),a.jsxs("span",{children:["Send exactly ",parseFloat(c).toFixed(8)," BTC to this wallet, then click finish deposit. Status will stay pending until System Admin verifies it."]})]}),a.jsx("div",{className:"network-pill",children:"BTC Network Only"}),a.jsx("div",{className:"qr-wrap",children:a.jsx(M1,{value:is,size:176,bgColor:"#ffffff",fgColor:"#000000"})}),a.jsxs("div",{className:"address-box",children:[a.jsx("code",{children:is}),a.jsx("button",{className:"icon-btn",onClick:I,children:M?a.jsx(tm,{size:18}):a.jsx(Kx,{size:18})})]}),a.jsxs("div",{className:"amount-note",children:["Pending credit: ",parseFloat(c).toFixed(8)," BTC and $",de(parseFloat(c)*i)," USDT"]}),a.jsx("button",{className:"cta",onClick:be,children:"Finish Deposit"})]}),v&&a.jsx("div",{className:"status-banner",children:"Deposit submitted and now pending. After System Admin verifies it, the user BTC balance and USD trade balance will both increase."})]}),s==="withdraw"&&a.jsxs("div",{className:"flow-card",children:[a.jsx("h2",{children:"Withdraw USD"}),a.jsx("p",{children:"Submit a withdrawal request using your available USD balance. The amount is deducted only after System Admin approval."}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Withdrawal Amount (USD)"}),a.jsx("input",{className:"amount-input",value:u,onChange:O=>h(O.target.value),type:"number",placeholder:"500"}),a.jsxs("div",{className:"amount-note",children:["Available: $",de((t==null?void 0:t.usdBalance)||0)]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"BTC Wallet Address"}),a.jsx("input",{className:"amount-input",style:{fontSize:"16px",fontWeight:600},value:d,onChange:O=>f(O.target.value),type:"text",placeholder:"Paste your BTC wallet address"})]}),a.jsx("button",{className:"cta",onClick:ke,children:"Submit Withdrawal"}),y&&a.jsx("div",{className:"status-banner",children:"Withdrawal request submitted. System Admin approval will remove the amount from your wallet."})]}),s==="stake"&&a.jsxs("div",{className:"flow-card",children:[a.jsx("h2",{children:"Stake BTC"}),a.jsx("p",{children:"Move BTC into the staking pool and make the wallet area feel more complete for demo users."}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Stake Amount (BTC)"}),a.jsx("input",{className:"amount-input",value:m,onChange:O=>g(O.target.value),type:"number",placeholder:"0.050000"}),a.jsxs("div",{className:"amount-note",children:["Available BTC: ",((t==null?void 0:t.btcBalance)||0).toFixed(6)]})]}),a.jsx("button",{className:"cta",onClick:ge,children:"Start Staking"}),j&&a.jsx("div",{className:"status-banner",children:"BTC moved to staking successfully. The balance updates immediately in this demo."})]})]}),a.jsxs("aside",{className:"card history-card",children:[a.jsx("h3",{children:"Recent Activity"}),a.jsxs("div",{className:"tx-list",children:[V.map(O=>a.jsxs("div",{className:"tx-item",children:[a.jsx("div",{className:`tx-icon ${O.type}`,children:O.type==="deposit"?a.jsx(Ax,{size:20}):O.type==="withdraw"?a.jsx(Ix,{size:20}):a.jsx(kh,{size:20})}),a.jsxs("div",{className:"tx-meta",children:[a.jsx("strong",{children:O.type}),a.jsx("span",{children:new Date(O.timestamp).toLocaleString()})]}),a.jsxs("div",{className:"tx-amount",children:["$",de(O.amount)]}),a.jsxs("div",{className:`tx-status ${O.status}`,children:[a.jsx("span",{className:"tx-status-label",children:O.status==="completed"?"verified":O.status}),O.reviewedBy?` • ${O.reviewedBy}`:""]})]},O.id)),V.length===0&&a.jsx("div",{className:"amount-note",children:"No transactions yet."})]})]})]})]})}function ie(t){var e=t.width,i=t.height;if(e<0)throw new Error("Negative width is not allowed for Size");if(i<0)throw new Error("Negative height is not allowed for Size");return{width:e,height:i}}function Ni(t,e){return t.width===e.width&&t.height===e.height}var T1=function(){function t(e){var i=this;this._resolutionListener=function(){return i._onResolutionChanged()},this._resolutionMediaQueryList=null,this._observers=[],this._window=e,this._installResolutionListener()}return t.prototype.dispose=function(){this._uninstallResolutionListener(),this._window=null},Object.defineProperty(t.prototype,"value",{get:function(){return this._window.devicePixelRatio},enumerable:!1,configurable:!0}),t.prototype.subscribe=function(e){var i=this,n={next:e};return this._observers.push(n),{unsubscribe:function(){i._observers=i._observers.filter(function(r){return r!==n})}}},t.prototype._installResolutionListener=function(){if(this._resolutionMediaQueryList!==null)throw new Error("Resolution listener is already installed");var e=this._window.devicePixelRatio;this._resolutionMediaQueryList=this._window.matchMedia("all and (resolution: ".concat(e,"dppx)")),this._resolutionMediaQueryList.addListener(this._resolutionListener)},t.prototype._uninstallResolutionListener=function(){this._resolutionMediaQueryList!==null&&(this._resolutionMediaQueryList.removeListener(this._resolutionListener),this._resolutionMediaQueryList=null)},t.prototype._reinstallResolutionListener=function(){this._uninstallResolutionListener(),this._installResolutionListener()},t.prototype._onResolutionChanged=function(){var e=this;this._observers.forEach(function(i){return i.next(e._window.devicePixelRatio)}),this._reinstallResolutionListener()},t}();function P1(t){return new T1(t)}var L1=function(){function t(e,i,n){var r;this._canvasElement=null,this._bitmapSizeChangedListeners=[],this._suggestedBitmapSize=null,this._suggestedBitmapSizeChangedListeners=[],this._devicePixelRatioObservable=null,this._canvasElementResizeObserver=null,this._canvasElement=e,this._canvasElementClientSize=ie({width:this._canvasElement.clientWidth,height:this._canvasElement.clientHeight}),this._transformBitmapSize=i??function(s){return s},this._allowResizeObserver=(r=n==null?void 0:n.allowResizeObserver)!==null&&r!==void 0?r:!0,this._chooseAndInitObserver()}return t.prototype.dispose=function(){var e,i;if(this._canvasElement===null)throw new Error("Object is disposed");(e=this._canvasElementResizeObserver)===null||e===void 0||e.disconnect(),this._canvasElementResizeObserver=null,(i=this._devicePixelRatioObservable)===null||i===void 0||i.dispose(),this._devicePixelRatioObservable=null,this._suggestedBitmapSizeChangedListeners.length=0,this._bitmapSizeChangedListeners.length=0,this._canvasElement=null},Object.defineProperty(t.prototype,"canvasElement",{get:function(){if(this._canvasElement===null)throw new Error("Object is disposed");return this._canvasElement},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"canvasElementClientSize",{get:function(){return this._canvasElementClientSize},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bitmapSize",{get:function(){return ie({width:this.canvasElement.width,height:this.canvasElement.height})},enumerable:!1,configurable:!0}),t.prototype.resizeCanvasElement=function(e){this._canvasElementClientSize=ie(e),this.canvasElement.style.width="".concat(this._canvasElementClientSize.width,"px"),this.canvasElement.style.height="".concat(this._canvasElementClientSize.height,"px"),this._invalidateBitmapSize()},t.prototype.subscribeBitmapSizeChanged=function(e){this._bitmapSizeChangedListeners.push(e)},t.prototype.unsubscribeBitmapSizeChanged=function(e){this._bitmapSizeChangedListeners=this._bitmapSizeChangedListeners.filter(function(i){return i!==e})},Object.defineProperty(t.prototype,"suggestedBitmapSize",{get:function(){return this._suggestedBitmapSize},enumerable:!1,configurable:!0}),t.prototype.subscribeSuggestedBitmapSizeChanged=function(e){this._suggestedBitmapSizeChangedListeners.push(e)},t.prototype.unsubscribeSuggestedBitmapSizeChanged=function(e){this._suggestedBitmapSizeChangedListeners=this._suggestedBitmapSizeChangedListeners.filter(function(i){return i!==e})},t.prototype.applySuggestedBitmapSize=function(){if(this._suggestedBitmapSize!==null){var e=this._suggestedBitmapSize;this._suggestedBitmapSize=null,this._resizeBitmap(e),this._emitSuggestedBitmapSizeChanged(e,this._suggestedBitmapSize)}},t.prototype._resizeBitmap=function(e){var i=this.bitmapSize;Ni(i,e)||(this.canvasElement.width=e.width,this.canvasElement.height=e.height,this._emitBitmapSizeChanged(i,e))},t.prototype._emitBitmapSizeChanged=function(e,i){var n=this;this._bitmapSizeChangedListeners.forEach(function(r){return r.call(n,e,i)})},t.prototype._suggestNewBitmapSize=function(e){var i=this._suggestedBitmapSize,n=ie(this._transformBitmapSize(e,this._canvasElementClientSize)),r=Ni(this.bitmapSize,n)?null:n;i===null&&r===null||i!==null&&r!==null&&Ni(i,r)||(this._suggestedBitmapSize=r,this._emitSuggestedBitmapSizeChanged(i,r))},t.prototype._emitSuggestedBitmapSizeChanged=function(e,i){var n=this;this._suggestedBitmapSizeChangedListeners.forEach(function(r){return r.call(n,e,i)})},t.prototype._chooseAndInitObserver=function(){var e=this;if(!this._allowResizeObserver){this._initDevicePixelRatioObservable();return}$1().then(function(i){return i?e._initResizeObserver():e._initDevicePixelRatioObservable()})},t.prototype._initDevicePixelRatioObservable=function(){var e=this;if(this._canvasElement!==null){var i=_h(this._canvasElement);if(i===null)throw new Error("No window is associated with the canvas");this._devicePixelRatioObservable=P1(i),this._devicePixelRatioObservable.subscribe(function(){return e._invalidateBitmapSize()}),this._invalidateBitmapSize()}},t.prototype._invalidateBitmapSize=function(){var e,i;if(this._canvasElement!==null){var n=_h(this._canvasElement);if(n!==null){var r=(i=(e=this._devicePixelRatioObservable)===null||e===void 0?void 0:e.value)!==null&&i!==void 0?i:n.devicePixelRatio,s=this._canvasElement.getClientRects(),l=s[0]!==void 0?D1(s[0],r):ie({width:this._canvasElementClientSize.width*r,height:this._canvasElementClientSize.height*r});this._suggestNewBitmapSize(l)}}},t.prototype._initResizeObserver=function(){var e=this;this._canvasElement!==null&&(this._canvasElementResizeObserver=new ResizeObserver(function(i){var n=i.find(function(l){return l.target===e._canvasElement});if(!(!n||!n.devicePixelContentBoxSize||!n.devicePixelContentBoxSize[0])){var r=n.devicePixelContentBoxSize[0],s=ie({width:r.inlineSize,height:r.blockSize});e._suggestNewBitmapSize(s)}}),this._canvasElementResizeObserver.observe(this._canvasElement,{box:"device-pixel-content-box"}))},t}();function R1(t,e){return new L1(t,e.transform,e.options)}function _h(t){return t.ownerDocument.defaultView}function $1(){return new Promise(function(t){var e=new ResizeObserver(function(i){t(i.every(function(n){return"devicePixelContentBoxSize"in n})),e.disconnect()});e.observe(document.body,{box:"device-pixel-content-box"})}).catch(function(){return!1})}function D1(t,e){return ie({width:Math.round(t.left*e+t.width*e)-Math.round(t.left*e),height:Math.round(t.top*e+t.height*e)-Math.round(t.top*e)})}var B1=function(){function t(e,i,n){if(i.width===0||i.height===0)throw new TypeError("Rendering target could only be created on a media with positive width and height");if(this._mediaSize=i,n.width===0||n.height===0)throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");this._bitmapSize=n,this._context=e}return t.prototype.useMediaCoordinateSpace=function(e){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),this._context.scale(this._horizontalPixelRatio,this._verticalPixelRatio),e({context:this._context,mediaSize:this._mediaSize})}finally{this._context.restore()}},t.prototype.useBitmapCoordinateSpace=function(e){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),e({context:this._context,mediaSize:this._mediaSize,bitmapSize:this._bitmapSize,horizontalPixelRatio:this._horizontalPixelRatio,verticalPixelRatio:this._verticalPixelRatio})}finally{this._context.restore()}},Object.defineProperty(t.prototype,"_horizontalPixelRatio",{get:function(){return this._bitmapSize.width/this._mediaSize.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_verticalPixelRatio",{get:function(){return this._bitmapSize.height/this._mediaSize.height},enumerable:!1,configurable:!0}),t}();function Li(t,e){var i=t.canvasElementClientSize;if(i.width===0||i.height===0)return null;var n=t.bitmapSize;if(n.width===0||n.height===0)return null;var r=t.canvasElement.getContext("2d",e);return r===null?null:new B1(r,i,n)}/*!
 * @license
 * TradingView Lightweight Charts™ v4.2.3
 * Copyright (c) 2025 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */const A1={upColor:"#26a69a",downColor:"#ef5350",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350"},I1={upColor:"#26a69a",downColor:"#ef5350",openVisible:!0,thinBars:!0},O1={color:"#2196f3",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},F1={topColor:"rgba( 46, 220, 135, 0.4)",bottomColor:"rgba( 40, 221, 100, 0)",invertFilledArea:!1,lineColor:"#33D778",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},V1={baseValue:{type:"price",price:0},topFillColor1:"rgba(38, 166, 154, 0.28)",topFillColor2:"rgba(38, 166, 154, 0.05)",topLineColor:"rgba(38, 166, 154, 1)",bottomFillColor1:"rgba(239, 83, 80, 0.05)",bottomFillColor2:"rgba(239, 83, 80, 0.28)",bottomLineColor:"rgba(239, 83, 80, 1)",lineWidth:3,lineStyle:0,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},U1={color:"#26a69a",base:0},dm={color:"#2196f3"},fm={title:"",visible:!0,lastValueVisible:!0,priceLineVisible:!0,priceLineSource:0,priceLineWidth:1,priceLineColor:"",priceLineStyle:2,baseLineVisible:!0,baseLineWidth:1,baseLineColor:"#B2B5BE",baseLineStyle:0,priceFormat:{type:"price",precision:2,minMove:.01}};var Th,Ph;function Ri(t,e){const i={0:[],1:[t.lineWidth,t.lineWidth],2:[2*t.lineWidth,2*t.lineWidth],3:[6*t.lineWidth,6*t.lineWidth],4:[t.lineWidth,4*t.lineWidth]}[e];t.setLineDash(i)}function pm(t,e,i,n){t.beginPath();const r=t.lineWidth%2?.5:0;t.moveTo(i,e+r),t.lineTo(n,e+r),t.stroke()}function ci(t,e){if(!t)throw new Error("Assertion failed"+(e?": "+e:""))}function De(t){if(t===void 0)throw new Error("Value is undefined");return t}function C(t){if(t===null)throw new Error("Value is null");return t}function en(t){return C(De(t))}(function(t){t[t.Simple=0]="Simple",t[t.WithSteps=1]="WithSteps",t[t.Curved=2]="Curved"})(Th||(Th={})),function(t){t[t.Solid=0]="Solid",t[t.Dotted=1]="Dotted",t[t.Dashed=2]="Dashed",t[t.LargeDashed=3]="LargeDashed",t[t.SparseDotted=4]="SparseDotted"}(Ph||(Ph={}));const Lh={khaki:"#f0e68c",azure:"#f0ffff",aliceblue:"#f0f8ff",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",gray:"#808080",green:"#008000",honeydew:"#f0fff0",floralwhite:"#fffaf0",lightblue:"#add8e6",lightcoral:"#f08080",lemonchiffon:"#fffacd",hotpink:"#ff69b4",lightyellow:"#ffffe0",greenyellow:"#adff2f",lightgoldenrodyellow:"#fafad2",limegreen:"#32cd32",linen:"#faf0e6",lightcyan:"#e0ffff",magenta:"#f0f",maroon:"#800000",olive:"#808000",orange:"#ffa500",oldlace:"#fdf5e6",mediumblue:"#0000cd",transparent:"#0000",lime:"#0f0",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",midnightblue:"#191970",orchid:"#da70d6",mediumorchid:"#ba55d3",mediumturquoise:"#48d1cc",orangered:"#ff4500",royalblue:"#4169e1",powderblue:"#b0e0e6",red:"#f00",coral:"#ff7f50",turquoise:"#40e0d0",white:"#fff",whitesmoke:"#f5f5f5",wheat:"#f5deb3",teal:"#008080",steelblue:"#4682b4",bisque:"#ffe4c4",aquamarine:"#7fffd4",aqua:"#0ff",sienna:"#a0522d",silver:"#c0c0c0",springgreen:"#00ff7f",antiquewhite:"#faebd7",burlywood:"#deb887",brown:"#a52a2a",beige:"#f5f5dc",chocolate:"#d2691e",chartreuse:"#7fff00",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cadetblue:"#5f9ea0",tomato:"#ff6347",fuchsia:"#f0f",blue:"#00f",salmon:"#fa8072",blanchedalmond:"#ffebcd",slateblue:"#6a5acd",slategray:"#708090",thistle:"#d8bfd8",tan:"#d2b48c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",blueviolet:"#8a2be2",black:"#000",darkmagenta:"#8b008b",darkslateblue:"#483d8b",darkkhaki:"#bdb76b",darkorchid:"#9932cc",darkorange:"#ff8c00",darkgreen:"#006400",darkred:"#8b0000",dodgerblue:"#1e90ff",darkslategray:"#2f4f4f",dimgray:"#696969",deepskyblue:"#00bfff",firebrick:"#b22222",forestgreen:"#228b22",indigo:"#4b0082",ivory:"#fffff0",lavenderblush:"#fff0f5",feldspar:"#d19275",indianred:"#cd5c5c",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightskyblue:"#87cefa",lightslategray:"#789",lightslateblue:"#8470ff",snow:"#fffafa",lightseagreen:"#20b2aa",lightsalmon:"#ffa07a",darksalmon:"#e9967a",darkviolet:"#9400d3",mediumpurple:"#9370d8",mediumaquamarine:"#66cdaa",skyblue:"#87ceeb",lavender:"#e6e6fa",lightsteelblue:"#b0c4de",mediumvioletred:"#c71585",mintcream:"#f5fffa",navajowhite:"#ffdead",navy:"#000080",olivedrab:"#6b8e23",palevioletred:"#d87093",violetred:"#d02090",yellow:"#ff0",yellowgreen:"#9acd32",lawngreen:"#7cfc00",pink:"#ffc0cb",paleturquoise:"#afeeee",palegoldenrod:"#eee8aa",darkolivegreen:"#556b2f",darkseagreen:"#8fbc8f",darkturquoise:"#00ced1",peachpuff:"#ffdab9",deeppink:"#ff1493",violet:"#ee82ee",palegreen:"#98fb98",mediumseagreen:"#3cb371",peru:"#cd853f",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",purple:"#800080",seagreen:"#2e8b57",seashell:"#fff5ee",papayawhip:"#ffefd5",mediumslateblue:"#7b68ee",plum:"#dda0dd",mediumspringgreen:"#00fa9a"};function et(t){return t<0?0:t>255?255:Math.round(t)||0}function mm(t){return t<=0||t>1?Math.min(Math.max(t,0),1):Math.round(1e4*t)/1e4}const W1=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,H1=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,q1=/^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,K1=/^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;function kr(t){(t=t.toLowerCase())in Lh&&(t=Lh[t]);{const e=K1.exec(t)||q1.exec(t);if(e)return[et(parseInt(e[1],10)),et(parseInt(e[2],10)),et(parseInt(e[3],10)),mm(e.length<5?1:parseFloat(e[4]))]}{const e=H1.exec(t);if(e)return[et(parseInt(e[1],16)),et(parseInt(e[2],16)),et(parseInt(e[3],16)),1]}{const e=W1.exec(t);if(e)return[et(17*parseInt(e[1],16)),et(17*parseInt(e[2],16)),et(17*parseInt(e[3],16)),1]}throw new Error(`Cannot parse color: ${t}`)}function gm(t){return .199*t[0]+.687*t[1]+.114*t[2]}function Ca(t){const e=kr(t);return{t:`rgb(${e[0]}, ${e[1]}, ${e[2]})`,i:gm(e)>160?"black":"white"}}class pe{constructor(){this.h=[]}l(e,i,n){const r={o:e,_:i,u:n===!0};this.h.push(r)}v(e){const i=this.h.findIndex(n=>e===n.o);i>-1&&this.h.splice(i,1)}p(e){this.h=this.h.filter(i=>i._!==e)}m(e,i,n){const r=[...this.h];this.h=this.h.filter(s=>!s.u),r.forEach(s=>s.o(e,i,n))}M(){return this.h.length>0}S(){this.h=[]}}function vt(t,...e){for(const i of e)for(const n in i)i[n]!==void 0&&Object.prototype.hasOwnProperty.call(i,n)&&!["__proto__","constructor","prototype"].includes(n)&&(typeof i[n]!="object"||t[n]===void 0||Array.isArray(i[n])?t[n]=i[n]:vt(t[n],i[n]));return t}function St(t){return typeof t=="number"&&isFinite(t)}function jr(t){return typeof t=="number"&&t%1==0}function $r(t){return typeof t=="string"}function rs(t){return typeof t=="boolean"}function Pt(t){const e=t;if(!e||typeof e!="object")return e;let i,n,r;for(n in i=Array.isArray(e)?[]:{},e)e.hasOwnProperty(n)&&(r=e[n],i[n]=r&&typeof r=="object"?Pt(r):r);return i}function X1(t){return t!==null}function Sr(t){return t===null?void 0:t}const Oc="-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";function yn(t,e,i){return e===void 0&&(e=Oc),`${i=i!==void 0?`${i} `:""}${t}px ${e}`}class Q1{constructor(e){this.k={C:1,T:5,P:NaN,R:"",D:"",V:"",O:"",B:0,A:0,I:0,L:0,N:0},this.F=e}W(){const e=this.k,i=this.j(),n=this.H();return e.P===i&&e.D===n||(e.P=i,e.D=n,e.R=yn(i,n),e.L=2.5/12*i,e.B=e.L,e.A=i/12*e.T,e.I=i/12*e.T,e.N=0),e.V=this.$(),e.O=this.U(),this.k}$(){return this.F.W().layout.textColor}U(){return this.F.q()}j(){return this.F.W().layout.fontSize}H(){return this.F.W().layout.fontFamily}}class Fc{constructor(){this.Y=[]}Z(e){this.Y=e}X(e,i,n){this.Y.forEach(r=>{r.X(e,i,n)})}}class xt{X(e,i,n){e.useBitmapCoordinateSpace(r=>this.K(r,i,n))}}class J1 extends xt{constructor(){super(...arguments),this.G=null}J(e){this.G=e}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.G===null||this.G.tt===null)return;const r=this.G.tt,s=this.G,l=Math.max(1,Math.floor(i))%2/2,c=o=>{e.beginPath();for(let u=r.to-1;u>=r.from;--u){const h=s.it[u],d=Math.round(h.nt*i)+l,f=h.st*n,m=o*n+l;e.moveTo(d,f),e.arc(d,f,m,0,2*Math.PI)}e.fill()};s.et>0&&(e.fillStyle=s.rt,c(s.ht+s.et)),e.fillStyle=s.lt,c(s.ht)}}function Y1(){return{it:[{nt:0,st:0,ot:0,_t:0}],lt:"",rt:"",ht:0,et:0,tt:null}}const G1={from:0,to:1};class Z1{constructor(e,i){this.ut=new Fc,this.ct=[],this.dt=[],this.ft=!0,this.F=e,this.vt=i,this.ut.Z(this.ct)}bt(e){const i=this.F.wt();i.length!==this.ct.length&&(this.dt=i.map(Y1),this.ct=this.dt.map(n=>{const r=new J1;return r.J(n),r}),this.ut.Z(this.ct)),this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.ut}Mt(){const e=this.vt.W().mode===2,i=this.F.wt(),n=this.vt.xt(),r=this.F.St();i.forEach((s,l)=>{var c;const o=this.dt[l],u=s.kt(n);if(e||u===null||!s.yt())return void(o.tt=null);const h=C(s.Ct());o.lt=u.Tt,o.ht=u.ht,o.et=u.Pt,o.it[0]._t=u._t,o.it[0].st=s.Dt().Rt(u._t,h.Vt),o.rt=(c=u.Ot)!==null&&c!==void 0?c:this.F.Bt(o.it[0].st/s.Dt().At()),o.it[0].ot=n,o.it[0].nt=r.It(n),o.tt=G1})}}class ey extends xt{constructor(e){super(),this.zt=e}K({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:r}){if(this.zt===null)return;const s=this.zt.Lt.yt,l=this.zt.Et.yt;if(!s&&!l)return;const c=Math.round(this.zt.nt*n),o=Math.round(this.zt.st*r);e.lineCap="butt",s&&c>=0&&(e.lineWidth=Math.floor(this.zt.Lt.et*n),e.strokeStyle=this.zt.Lt.V,e.fillStyle=this.zt.Lt.V,Ri(e,this.zt.Lt.Nt),function(u,h,d,f){u.beginPath();const m=u.lineWidth%2?.5:0;u.moveTo(h+m,d),u.lineTo(h+m,f),u.stroke()}(e,c,0,i.height)),l&&o>=0&&(e.lineWidth=Math.floor(this.zt.Et.et*r),e.strokeStyle=this.zt.Et.V,e.fillStyle=this.zt.Et.V,Ri(e,this.zt.Et.Nt),pm(e,o,0,i.width))}}class ty{constructor(e){this.ft=!0,this.Ft={Lt:{et:1,Nt:0,V:"",yt:!1},Et:{et:1,Nt:0,V:"",yt:!1},nt:0,st:0},this.Wt=new ey(this.Ft),this.jt=e}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt}Mt(){const e=this.jt.yt(),i=C(this.jt.Ht()),n=i.$t().W().crosshair,r=this.Ft;if(n.mode===2)return r.Et.yt=!1,void(r.Lt.yt=!1);r.Et.yt=e&&this.jt.Ut(i),r.Lt.yt=e&&this.jt.qt(),r.Et.et=n.horzLine.width,r.Et.Nt=n.horzLine.style,r.Et.V=n.horzLine.color,r.Lt.et=n.vertLine.width,r.Lt.Nt=n.vertLine.style,r.Lt.V=n.vertLine.color,r.nt=this.jt.Yt(),r.st=this.jt.Zt()}}function iy(t,e,i,n,r,s){t.fillRect(e+s,i,n-2*s,s),t.fillRect(e+s,i+r-s,n-2*s,s),t.fillRect(e,i,s,r),t.fillRect(e+n-s,i,s,r)}function Ea(t,e,i,n,r,s){t.save(),t.globalCompositeOperation="copy",t.fillStyle=s,t.fillRect(e,i,n,r),t.restore()}function Rh(t,e,i,n,r,s){t.beginPath(),t.roundRect?t.roundRect(e,i,n,r,s):(t.lineTo(e+n-s[1],i),s[1]!==0&&t.arcTo(e+n,i,e+n,i+s[1],s[1]),t.lineTo(e+n,i+r-s[2]),s[2]!==0&&t.arcTo(e+n,i+r,e+n-s[2],i+r,s[2]),t.lineTo(e+s[3],i+r),s[3]!==0&&t.arcTo(e,i+r,e,i+r-s[3],s[3]),t.lineTo(e,i+s[0]),s[0]!==0&&t.arcTo(e,i,e+s[0],i,s[0]))}function $h(t,e,i,n,r,s,l=0,c=[0,0,0,0],o=""){if(t.save(),!l||!o||o===s)return Rh(t,e,i,n,r,c),t.fillStyle=s,t.fill(),void t.restore();const u=l/2;var h;Rh(t,e+u,i+u,n-l,r-l,(h=-u,c.map(d=>d===0?d:d+h))),s!=="transparent"&&(t.fillStyle=s,t.fill()),o!=="transparent"&&(t.lineWidth=l,t.strokeStyle=o,t.closePath(),t.stroke()),t.restore()}function vm(t,e,i,n,r,s,l){t.save(),t.globalCompositeOperation="copy";const c=t.createLinearGradient(0,0,0,r);c.addColorStop(0,s),c.addColorStop(1,l),t.fillStyle=c,t.fillRect(e,i,n,r),t.restore()}class Dh{constructor(e,i){this.J(e,i)}J(e,i){this.zt=e,this.Xt=i}At(e,i){return this.zt.yt?e.P+e.L+e.B:0}X(e,i,n,r){if(!this.zt.yt||this.zt.Kt.length===0)return;const s=this.zt.V,l=this.Xt.t,c=e.useBitmapCoordinateSpace(o=>{const u=o.context;u.font=i.R;const h=this.Gt(o,i,n,r),d=h.Jt;return h.Qt?$h(u,d.ti,d.ii,d.ni,d.si,l,d.ei,[d.ht,0,0,d.ht],l):$h(u,d.ri,d.ii,d.ni,d.si,l,d.ei,[0,d.ht,d.ht,0],l),this.zt.hi&&(u.fillStyle=s,u.fillRect(d.ri,d.li,d.ai-d.ri,d.oi)),this.zt._i&&(u.fillStyle=i.O,u.fillRect(h.Qt?d.ui-d.ei:0,d.ii,d.ei,d.ci-d.ii)),h});e.useMediaCoordinateSpace(({context:o})=>{const u=c.di;o.font=i.R,o.textAlign=c.Qt?"right":"left",o.textBaseline="middle",o.fillStyle=s,o.fillText(this.zt.Kt,u.fi,(u.ii+u.ci)/2+u.pi)})}Gt(e,i,n,r){var s;const{context:l,bitmapSize:c,mediaSize:o,horizontalPixelRatio:u,verticalPixelRatio:h}=e,d=this.zt.hi||!this.zt.mi?i.T:0,f=this.zt.bi?i.C:0,m=i.L+this.Xt.wi,g=i.B+this.Xt.gi,p=i.A,w=i.I,v=this.zt.Kt,x=i.P,y=n.Mi(l,v),b=Math.ceil(n.xi(l,v)),j=x+m+g,z=i.C+p+w+b+d,M=Math.max(1,Math.floor(h));let _=Math.round(j*h);_%2!=M%2&&(_+=1);const V=f>0?Math.max(1,Math.floor(f*u)):0,I=Math.round(z*u),Z=Math.round(d*u),be=(s=this.Xt.Si)!==null&&s!==void 0?s:this.Xt.ki,ke=Math.round(be*h)-Math.floor(.5*h),ge=Math.floor(ke+M/2-_/2),O=ge+_,ce=r==="right",Pe=ce?o.width-f:f,P=ce?c.width-V:V;let F,A,N;return ce?(F=P-I,A=P-Z,N=Pe-d-p-f):(F=P+I,A=P+Z,N=Pe+d+p),{Qt:ce,Jt:{ii:ge,li:ke,ci:O,ni:I,si:_,ht:2*u,ei:V,ti:F,ri:P,ai:A,oi:M,ui:c.width},di:{ii:ge/h,ci:O/h,fi:N,pi:y}}}}class za{constructor(e){this.yi={ki:0,t:"#000",gi:0,wi:0},this.Ci={Kt:"",yt:!1,hi:!0,mi:!1,Ot:"",V:"#FFF",_i:!1,bi:!1},this.Ti={Kt:"",yt:!1,hi:!1,mi:!0,Ot:"",V:"#FFF",_i:!0,bi:!0},this.ft=!0,this.Pi=new(e||Dh)(this.Ci,this.yi),this.Ri=new(e||Dh)(this.Ti,this.yi)}Kt(){return this.Di(),this.Ci.Kt}ki(){return this.Di(),this.yi.ki}bt(){this.ft=!0}At(e,i=!1){return Math.max(this.Pi.At(e,i),this.Ri.At(e,i))}Vi(){return this.yi.Si||0}Oi(e){this.yi.Si=e}Bi(){return this.Di(),this.Ci.yt||this.Ti.yt}Ai(){return this.Di(),this.Ci.yt}gt(e){return this.Di(),this.Ci.hi=this.Ci.hi&&e.W().ticksVisible,this.Ti.hi=this.Ti.hi&&e.W().ticksVisible,this.Pi.J(this.Ci,this.yi),this.Ri.J(this.Ti,this.yi),this.Pi}Ii(){return this.Di(),this.Pi.J(this.Ci,this.yi),this.Ri.J(this.Ti,this.yi),this.Ri}Di(){this.ft&&(this.Ci.hi=!0,this.Ti.hi=!1,this.zi(this.Ci,this.Ti,this.yi))}}class ny extends za{constructor(e,i,n){super(),this.jt=e,this.Li=i,this.Ei=n}zi(e,i,n){if(e.yt=!1,this.jt.W().mode===2)return;const r=this.jt.W().horzLine;if(!r.labelVisible)return;const s=this.Li.Ct();if(!this.jt.yt()||this.Li.Ni()||s===null)return;const l=Ca(r.labelBackgroundColor);n.t=l.t,e.V=l.i;const c=2/12*this.Li.P();n.wi=c,n.gi=c;const o=this.Ei(this.Li);n.ki=o.ki,e.Kt=this.Li.Fi(o._t,s),e.yt=!0}}const ry=/[1-9]/g;class xm{constructor(){this.zt=null}J(e){this.zt=e}X(e,i){if(this.zt===null||this.zt.yt===!1||this.zt.Kt.length===0)return;const n=e.useMediaCoordinateSpace(({context:f})=>(f.font=i.R,Math.round(i.Wi.xi(f,C(this.zt).Kt,ry))));if(n<=0)return;const r=i.ji,s=n+2*r,l=s/2,c=this.zt.Hi;let o=this.zt.ki,u=Math.floor(o-l)+.5;u<0?(o+=Math.abs(0-u),u=Math.floor(o-l)+.5):u+s>c&&(o-=Math.abs(c-(u+s)),u=Math.floor(o-l)+.5);const h=u+s,d=Math.ceil(0+i.C+i.T+i.L+i.P+i.B);e.useBitmapCoordinateSpace(({context:f,horizontalPixelRatio:m,verticalPixelRatio:g})=>{const p=C(this.zt);f.fillStyle=p.t;const w=Math.round(u*m),v=Math.round(0*g),x=Math.round(h*m),y=Math.round(d*g),b=Math.round(2*m);if(f.beginPath(),f.moveTo(w,v),f.lineTo(w,y-b),f.arcTo(w,y,w+b,y,b),f.lineTo(x-b,y),f.arcTo(x,y,x,y-b,b),f.lineTo(x,v),f.fill(),p.hi){const j=Math.round(p.ki*m),z=v,M=Math.round((z+i.T)*g);f.fillStyle=p.V;const _=Math.max(1,Math.floor(m)),V=Math.floor(.5*m);f.fillRect(j-V,z,_,M-z)}}),e.useMediaCoordinateSpace(({context:f})=>{const m=C(this.zt),g=0+i.C+i.T+i.L+i.P/2;f.font=i.R,f.textAlign="left",f.textBaseline="middle",f.fillStyle=m.V;const p=i.Wi.Mi(f,"Apr0");f.translate(u+r,g+p),f.fillText(m.Kt,0,0)})}}class sy{constructor(e,i,n){this.ft=!0,this.Wt=new xm,this.Ft={yt:!1,t:"#4c525e",V:"white",Kt:"",Hi:0,ki:NaN,hi:!0},this.vt=e,this.$i=i,this.Ei=n}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt.J(this.Ft),this.Wt}Mt(){const e=this.Ft;if(e.yt=!1,this.vt.W().mode===2)return;const i=this.vt.W().vertLine;if(!i.labelVisible)return;const n=this.$i.St();if(n.Ni())return;e.Hi=n.Hi();const r=this.Ei();if(r===null)return;e.ki=r.ki;const s=n.Ui(this.vt.xt());e.Kt=n.qi(C(s)),e.yt=!0;const l=Ca(i.labelBackgroundColor);e.t=l.t,e.V=l.i,e.hi=n.W().ticksVisible}}class Vc{constructor(){this.Yi=null,this.Zi=0}Xi(){return this.Zi}Ki(e){this.Zi=e}Dt(){return this.Yi}Gi(e){this.Yi=e}Ji(e){return[]}Qi(){return[]}yt(){return!0}}var Bh;(function(t){t[t.Normal=0]="Normal",t[t.Magnet=1]="Magnet",t[t.Hidden=2]="Hidden"})(Bh||(Bh={}));class ay extends Vc{constructor(e,i){super(),this.tn=null,this.nn=NaN,this.sn=0,this.en=!0,this.rn=new Map,this.hn=!1,this.ln=NaN,this.an=NaN,this._n=NaN,this.un=NaN,this.$i=e,this.cn=i,this.dn=new Z1(e,this),this.fn=((r,s)=>l=>{const c=s(),o=r();if(l===C(this.tn).vn())return{_t:o,ki:c};{const u=C(l.Ct());return{_t:l.pn(c,u),ki:c}}})(()=>this.nn,()=>this.an);const n=((r,s)=>()=>{const l=this.$i.St().mn(r()),c=s();return l&&Number.isFinite(c)?{ot:l,ki:c}:null})(()=>this.sn,()=>this.Yt());this.bn=new sy(this,e,n),this.wn=new ty(this)}W(){return this.cn}gn(e,i){this._n=e,this.un=i}Mn(){this._n=NaN,this.un=NaN}xn(){return this._n}Sn(){return this.un}kn(e,i,n){this.hn||(this.hn=!0),this.en=!0,this.yn(e,i,n)}xt(){return this.sn}Yt(){return this.ln}Zt(){return this.an}yt(){return this.en}Cn(){this.en=!1,this.Tn(),this.nn=NaN,this.ln=NaN,this.an=NaN,this.tn=null,this.Mn()}Pn(e){return this.tn!==null?[this.wn,this.dn]:[]}Ut(e){return e===this.tn&&this.cn.horzLine.visible}qt(){return this.cn.vertLine.visible}Rn(e,i){this.en&&this.tn===e||this.rn.clear();const n=[];return this.tn===e&&n.push(this.Dn(this.rn,i,this.fn)),n}Qi(){return this.en?[this.bn]:[]}Ht(){return this.tn}Vn(){this.wn.bt(),this.rn.forEach(e=>e.bt()),this.bn.bt(),this.dn.bt()}On(e){return e&&!e.vn().Ni()?e.vn():null}yn(e,i,n){this.Bn(e,i,n)&&this.Vn()}Bn(e,i,n){const r=this.ln,s=this.an,l=this.nn,c=this.sn,o=this.tn,u=this.On(n);this.sn=e,this.ln=isNaN(e)?NaN:this.$i.St().It(e),this.tn=n;const h=u!==null?u.Ct():null;return u!==null&&h!==null?(this.nn=i,this.an=u.Rt(i,h)):(this.nn=NaN,this.an=NaN),r!==this.ln||s!==this.an||c!==this.sn||l!==this.nn||o!==this.tn}Tn(){const e=this.$i.wt().map(n=>n.In().An()).filter(X1),i=e.length===0?null:Math.max(...e);this.sn=i!==null?i:NaN}Dn(e,i,n){let r=e.get(i);return r===void 0&&(r=new ny(this,i,n),e.set(i,r)),r}}function Ma(t){return t==="left"||t==="right"}class Ne{constructor(e){this.zn=new Map,this.Ln=[],this.En=e}Nn(e,i){const n=function(r,s){return r===void 0?s:{Fn:Math.max(r.Fn,s.Fn),Wn:r.Wn||s.Wn}}(this.zn.get(e),i);this.zn.set(e,n)}jn(){return this.En}Hn(e){const i=this.zn.get(e);return i===void 0?{Fn:this.En}:{Fn:Math.max(this.En,i.Fn),Wn:i.Wn}}$n(){this.Un(),this.Ln=[{qn:0}]}Yn(e){this.Un(),this.Ln=[{qn:1,Vt:e}]}Zn(e){this.Xn(),this.Ln.push({qn:5,Vt:e})}Un(){this.Xn(),this.Ln.push({qn:6})}Kn(){this.Un(),this.Ln=[{qn:4}]}Gn(e){this.Un(),this.Ln.push({qn:2,Vt:e})}Jn(e){this.Un(),this.Ln.push({qn:3,Vt:e})}Qn(){return this.Ln}ts(e){for(const i of e.Ln)this.ns(i);this.En=Math.max(this.En,e.En),e.zn.forEach((i,n)=>{this.Nn(n,i)})}static ss(){return new Ne(2)}static es(){return new Ne(3)}ns(e){switch(e.qn){case 0:this.$n();break;case 1:this.Yn(e.Vt);break;case 2:this.Gn(e.Vt);break;case 3:this.Jn(e.Vt);break;case 4:this.Kn();break;case 5:this.Zn(e.Vt);break;case 6:this.Xn()}}Xn(){const e=this.Ln.findIndex(i=>i.qn===5);e!==-1&&this.Ln.splice(e,1)}}const Ah=".";function Lt(t,e){if(!St(t))return"n/a";if(!jr(e))throw new TypeError("invalid length");if(e<0||e>16)throw new TypeError("invalid length");return e===0?t.toString():("0000000000000000"+t.toString()).slice(-e)}class _a{constructor(e,i){if(i||(i=1),St(e)&&jr(e)||(e=100),e<0)throw new TypeError("invalid base");this.Li=e,this.rs=i,this.hs()}format(e){const i=e<0?"−":"";return e=Math.abs(e),i+this.ls(e)}hs(){if(this._s=0,this.Li>0&&this.rs>0){let e=this.Li;for(;e>1;)e/=10,this._s++}}ls(e){const i=this.Li/this.rs;let n=Math.floor(e),r="";const s=this._s!==void 0?this._s:NaN;if(i>1){let l=+(Math.round(e*i)-n*i).toFixed(this._s);l>=i&&(l-=i,n+=1),r=Ah+Lt(+l.toFixed(this._s)*this.rs,s)}else n=Math.round(n*i)/i,s>0&&(r=Ah+Lt(0,s));return n.toFixed(0)+r}}class ym extends _a{constructor(e=100){super(e)}format(e){return`${super.format(e)}%`}}class ly{constructor(e){this.us=e}format(e){let i="";return e<0&&(i="-",e=-e),e<995?i+this.cs(e):e<999995?i+this.cs(e/1e3)+"K":e<999999995?(e=1e3*Math.round(e/1e3),i+this.cs(e/1e6)+"M"):(e=1e6*Math.round(e/1e6),i+this.cs(e/1e9)+"B")}cs(e){let i;const n=Math.pow(10,this.us);return i=(e=Math.round(e*n)/n)>=1e-15&&e<1?e.toFixed(this.us).replace(/\.?0+$/,""):String(e),i.replace(/(\.[1-9]*)0+$/,(r,s)=>s)}}function wm(t,e,i,n,r,s,l){if(e.length===0||n.from>=e.length||n.to<=0)return;const{context:c,horizontalPixelRatio:o,verticalPixelRatio:u}=t,h=e[n.from];let d=s(t,h),f=h;if(n.to-n.from<2){const m=r/2;c.beginPath();const g={nt:h.nt-m,st:h.st},p={nt:h.nt+m,st:h.st};c.moveTo(g.nt*o,g.st*u),c.lineTo(p.nt*o,p.st*u),l(t,d,g,p)}else{const m=(p,w)=>{l(t,d,f,w),c.beginPath(),d=p,f=w};let g=f;c.beginPath(),c.moveTo(h.nt*o,h.st*u);for(let p=n.from+1;p<n.to;++p){g=e[p];const w=s(t,g);switch(i){case 0:c.lineTo(g.nt*o,g.st*u);break;case 1:c.lineTo(g.nt*o,e[p-1].st*u),w!==d&&(m(w,g),c.lineTo(g.nt*o,e[p-1].st*u)),c.lineTo(g.nt*o,g.st*u);break;case 2:{const[v,x]=oy(e,p-1,p);c.bezierCurveTo(v.nt*o,v.st*u,x.nt*o,x.st*u,g.nt*o,g.st*u);break}}i!==1&&w!==d&&(m(w,g),c.moveTo(g.nt*o,g.st*u))}(f!==g||f===g&&i===1)&&l(t,d,f,g)}}const Ih=6;function al(t,e){return{nt:t.nt-e.nt,st:t.st-e.st}}function Oh(t,e){return{nt:t.nt/e,st:t.st/e}}function oy(t,e,i){const n=Math.max(0,e-1),r=Math.min(t.length-1,i+1);var s,l;return[(s=t[e],l=Oh(al(t[i],t[n]),Ih),{nt:s.nt+l.nt,st:s.st+l.st}),al(t[i],Oh(al(t[r],t[e]),Ih))]}function cy(t,e,i,n,r){const{context:s,horizontalPixelRatio:l,verticalPixelRatio:c}=e;s.lineTo(r.nt*l,t*c),s.lineTo(n.nt*l,t*c),s.closePath(),s.fillStyle=i,s.fill()}class bm extends xt{constructor(){super(...arguments),this.G=null}J(e){this.G=e}K(e){var i;if(this.G===null)return;const{it:n,tt:r,ds:s,et:l,Nt:c,fs:o}=this.G,u=(i=this.G.vs)!==null&&i!==void 0?i:this.G.ps?0:e.mediaSize.height;if(r===null)return;const h=e.context;h.lineCap="butt",h.lineJoin="round",h.lineWidth=l,Ri(h,c),h.lineWidth=1,wm(e,n,o,r,s,this.bs.bind(this),cy.bind(null,u))}}function Co(t,e,i){return Math.min(Math.max(t,e),i)}function ss(t,e,i){return e-t<=i}function km(t){const e=Math.ceil(t);return e%2==0?e-1:e}class Uc{ws(e,i){const n=this.gs,{Ms:r,xs:s,Ss:l,ks:c,ys:o,vs:u}=i;if(this.Cs===void 0||n===void 0||n.Ms!==r||n.xs!==s||n.Ss!==l||n.ks!==c||n.vs!==u||n.ys!==o){const h=e.context.createLinearGradient(0,0,0,o);if(h.addColorStop(0,r),u!=null){const d=Co(u*e.verticalPixelRatio/o,0,1);h.addColorStop(d,s),h.addColorStop(d,l)}h.addColorStop(1,c),this.Cs=h,this.gs=i}return this.Cs}}class uy extends bm{constructor(){super(...arguments),this.Ts=new Uc}bs(e,i){return this.Ts.ws(e,{Ms:i.Ps,xs:"",Ss:"",ks:i.Rs,ys:e.bitmapSize.height})}}function hy(t,e){const i=t.context;i.strokeStyle=e,i.stroke()}class jm extends xt{constructor(){super(...arguments),this.G=null}J(e){this.G=e}K(e){if(this.G===null)return;const{it:i,tt:n,ds:r,fs:s,et:l,Nt:c,Ds:o}=this.G;if(n===null)return;const u=e.context;u.lineCap="butt",u.lineWidth=l*e.verticalPixelRatio,Ri(u,c),u.lineJoin="round";const h=this.Vs.bind(this);s!==void 0&&wm(e,i,s,n,r,h,hy),o&&function(d,f,m,g,p){const{horizontalPixelRatio:w,verticalPixelRatio:v,context:x}=d;let y=null;const b=Math.max(1,Math.floor(w))%2/2,j=m*v+b;for(let z=g.to-1;z>=g.from;--z){const M=f[z];if(M){const _=p(d,M);_!==y&&(x.beginPath(),y!==null&&x.fill(),x.fillStyle=_,y=_);const V=Math.round(M.nt*w)+b,I=M.st*v;x.moveTo(V,I),x.arc(V,I,j,0,2*Math.PI)}}x.fill()}(e,i,o,n,h)}}class Sm extends jm{Vs(e,i){return i.lt}}function Nm(t,e,i,n,r=0,s=e.length){let l=s-r;for(;0<l;){const c=l>>1,o=r+c;n(e[o],i)===t?(r=o+1,l-=c+1):l=c}return r}const Dr=Nm.bind(null,!0),Cm=Nm.bind(null,!1);function dy(t,e){return t.ot<e}function fy(t,e){return e<t.ot}function Em(t,e,i){const n=e.Os(),r=e.ui(),s=Dr(t,n,dy),l=Cm(t,r,fy);if(!i)return{from:s,to:l};let c=s,o=l;return s>0&&s<t.length&&t[s].ot>=n&&(c=s-1),l>0&&l<t.length&&t[l-1].ot<=r&&(o=l+1),{from:c,to:o}}class Wc{constructor(e,i,n){this.Bs=!0,this.As=!0,this.Is=!0,this.zs=[],this.Ls=null,this.Es=e,this.Ns=i,this.Fs=n}bt(e){this.Bs=!0,e==="data"&&(this.As=!0),e==="options"&&(this.Is=!0)}gt(){return this.Es.yt()?(this.Ws(),this.Ls===null?null:this.js):null}Hs(){this.zs=this.zs.map(e=>Object.assign(Object.assign({},e),this.Es.Us().$s(e.ot)))}qs(){this.Ls=null}Ws(){this.As&&(this.Ys(),this.As=!1),this.Is&&(this.Hs(),this.Is=!1),this.Bs&&(this.Zs(),this.Bs=!1)}Zs(){const e=this.Es.Dt(),i=this.Ns.St();if(this.qs(),i.Ni()||e.Ni())return;const n=i.Xs();if(n===null||this.Es.In().Ks()===0)return;const r=this.Es.Ct();r!==null&&(this.Ls=Em(this.zs,n,this.Fs),this.Gs(e,i,r.Vt),this.Js())}}class Ta extends Wc{constructor(e,i){super(e,i,!0)}Gs(e,i,n){i.Qs(this.zs,Sr(this.Ls)),e.te(this.zs,n,Sr(this.Ls))}ie(e,i){return{ot:e,_t:i,nt:NaN,st:NaN}}Ys(){const e=this.Es.Us();this.zs=this.Es.In().ne().map(i=>{const n=i.Vt[3];return this.se(i.ee,n,e)})}}class py extends Ta{constructor(e,i){super(e,i),this.js=new Fc,this.re=new uy,this.he=new Sm,this.js.Z([this.re,this.he])}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e=this.Es.W();this.re.J({fs:e.lineType,it:this.zs,Nt:e.lineStyle,et:e.lineWidth,vs:null,ps:e.invertFilledArea,tt:this.Ls,ds:this.Ns.St().le()}),this.he.J({fs:e.lineVisible?e.lineType:void 0,it:this.zs,Nt:e.lineStyle,et:e.lineWidth,tt:this.Ls,ds:this.Ns.St().le(),Ds:e.pointMarkersVisible?e.pointMarkersRadius||e.lineWidth/2+2:void 0})}}class my extends xt{constructor(){super(...arguments),this.zt=null,this.ae=0,this.oe=0}J(e){this.zt=e}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.zt===null||this.zt.In.length===0||this.zt.tt===null)return;this.ae=this._e(i),this.ae>=2&&Math.max(1,Math.floor(i))%2!=this.ae%2&&this.ae--,this.oe=this.zt.ue?Math.min(this.ae,Math.floor(i)):this.ae;let r=null;const s=this.oe<=this.ae&&this.zt.le>=Math.floor(1.5*i);for(let l=this.zt.tt.from;l<this.zt.tt.to;++l){const c=this.zt.In[l];r!==c.ce&&(e.fillStyle=c.ce,r=c.ce);const o=Math.floor(.5*this.oe),u=Math.round(c.nt*i),h=u-o,d=this.oe,f=h+d-1,m=Math.min(c.de,c.fe),g=Math.max(c.de,c.fe),p=Math.round(m*n)-o,w=Math.round(g*n)+o,v=Math.max(w-p,this.oe);e.fillRect(h,p,d,v);const x=Math.ceil(1.5*this.ae);if(s){if(this.zt.ve){const z=u-x;let M=Math.max(p,Math.round(c.pe*n)-o),_=M+d-1;_>p+v-1&&(_=p+v-1,M=_-d+1),e.fillRect(z,M,h-z,_-M+1)}const y=u+x;let b=Math.max(p,Math.round(c.me*n)-o),j=b+d-1;j>p+v-1&&(j=p+v-1,b=j-d+1),e.fillRect(f+1,b,y-f,j-b+1)}}}_e(e){const i=Math.floor(e);return Math.max(i,Math.floor(function(n,r){return Math.floor(.3*n*r)}(C(this.zt).le,e)))}}class zm extends Wc{constructor(e,i){super(e,i,!1)}Gs(e,i,n){i.Qs(this.zs,Sr(this.Ls)),e.be(this.zs,n,Sr(this.Ls))}we(e,i,n){return{ot:e,ge:i.Vt[0],Me:i.Vt[1],xe:i.Vt[2],Se:i.Vt[3],nt:NaN,pe:NaN,de:NaN,fe:NaN,me:NaN}}Ys(){const e=this.Es.Us();this.zs=this.Es.In().ne().map(i=>this.se(i.ee,i,e))}}class gy extends zm{constructor(){super(...arguments),this.js=new my}se(e,i,n){return Object.assign(Object.assign({},this.we(e,i,n)),n.$s(e))}Js(){const e=this.Es.W();this.js.J({In:this.zs,le:this.Ns.St().le(),ve:e.openVisible,ue:e.thinBars,tt:this.Ls})}}class vy extends bm{constructor(){super(...arguments),this.Ts=new Uc}bs(e,i){const n=this.G;return this.Ts.ws(e,{Ms:i.ke,xs:i.ye,Ss:i.Ce,ks:i.Te,ys:e.bitmapSize.height,vs:n.vs})}}class xy extends jm{constructor(){super(...arguments),this.Pe=new Uc}Vs(e,i){const n=this.G;return this.Pe.ws(e,{Ms:i.Re,xs:i.Re,Ss:i.De,ks:i.De,ys:e.bitmapSize.height,vs:n.vs})}}class yy extends Ta{constructor(e,i){super(e,i),this.js=new Fc,this.Ve=new vy,this.Oe=new xy,this.js.Z([this.Ve,this.Oe])}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e=this.Es.Ct();if(e===null)return;const i=this.Es.W(),n=this.Es.Dt().Rt(i.baseValue.price,e.Vt),r=this.Ns.St().le();this.Ve.J({it:this.zs,et:i.lineWidth,Nt:i.lineStyle,fs:i.lineType,vs:n,ps:!1,tt:this.Ls,ds:r}),this.Oe.J({it:this.zs,et:i.lineWidth,Nt:i.lineStyle,fs:i.lineVisible?i.lineType:void 0,Ds:i.pointMarkersVisible?i.pointMarkersRadius||i.lineWidth/2+2:void 0,vs:n,tt:this.Ls,ds:r})}}class wy extends xt{constructor(){super(...arguments),this.zt=null,this.ae=0}J(e){this.zt=e}K(e){if(this.zt===null||this.zt.In.length===0||this.zt.tt===null)return;const{horizontalPixelRatio:i}=e;this.ae=function(s,l){if(s>=2.5&&s<=4)return Math.floor(3*l);const c=1-.2*Math.atan(Math.max(4,s)-4)/(.5*Math.PI),o=Math.floor(s*c*l),u=Math.floor(s*l),h=Math.min(o,u);return Math.max(Math.floor(l),h)}(this.zt.le,i),this.ae>=2&&Math.floor(i)%2!=this.ae%2&&this.ae--;const n=this.zt.In;this.zt.Be&&this.Ae(e,n,this.zt.tt),this.zt._i&&this.Ie(e,n,this.zt.tt);const r=this.ze(i);(!this.zt._i||this.ae>2*r)&&this.Le(e,n,this.zt.tt)}Ae(e,i,n){if(this.zt===null)return;const{context:r,horizontalPixelRatio:s,verticalPixelRatio:l}=e;let c="",o=Math.min(Math.floor(s),Math.floor(this.zt.le*s));o=Math.max(Math.floor(s),Math.min(o,this.ae));const u=Math.floor(.5*o);let h=null;for(let d=n.from;d<n.to;d++){const f=i[d];f.Ee!==c&&(r.fillStyle=f.Ee,c=f.Ee);const m=Math.round(Math.min(f.pe,f.me)*l),g=Math.round(Math.max(f.pe,f.me)*l),p=Math.round(f.de*l),w=Math.round(f.fe*l);let v=Math.round(s*f.nt)-u;const x=v+o-1;h!==null&&(v=Math.max(h+1,v),v=Math.min(v,x));const y=x-v+1;r.fillRect(v,p,y,m-p),r.fillRect(v,g+1,y,w-g),h=x}}ze(e){let i=Math.floor(1*e);this.ae<=2*i&&(i=Math.floor(.5*(this.ae-1)));const n=Math.max(Math.floor(e),i);return this.ae<=2*n?Math.max(Math.floor(e),Math.floor(1*e)):n}Ie(e,i,n){if(this.zt===null)return;const{context:r,horizontalPixelRatio:s,verticalPixelRatio:l}=e;let c="";const o=this.ze(s);let u=null;for(let h=n.from;h<n.to;h++){const d=i[h];d.Ne!==c&&(r.fillStyle=d.Ne,c=d.Ne);let f=Math.round(d.nt*s)-Math.floor(.5*this.ae);const m=f+this.ae-1,g=Math.round(Math.min(d.pe,d.me)*l),p=Math.round(Math.max(d.pe,d.me)*l);if(u!==null&&(f=Math.max(u+1,f),f=Math.min(f,m)),this.zt.le*s>2*o)iy(r,f,g,m-f+1,p-g+1,o);else{const w=m-f+1;r.fillRect(f,g,w,p-g+1)}u=m}}Le(e,i,n){if(this.zt===null)return;const{context:r,horizontalPixelRatio:s,verticalPixelRatio:l}=e;let c="";const o=this.ze(s);for(let u=n.from;u<n.to;u++){const h=i[u];let d=Math.round(Math.min(h.pe,h.me)*l),f=Math.round(Math.max(h.pe,h.me)*l),m=Math.round(h.nt*s)-Math.floor(.5*this.ae),g=m+this.ae-1;if(h.ce!==c){const p=h.ce;r.fillStyle=p,c=p}this.zt._i&&(m+=o,d+=o,g-=o,f-=o),d>f||r.fillRect(m,d,g-m+1,f-d+1)}}}class by extends zm{constructor(){super(...arguments),this.js=new wy}se(e,i,n){return Object.assign(Object.assign({},this.we(e,i,n)),n.$s(e))}Js(){const e=this.Es.W();this.js.J({In:this.zs,le:this.Ns.St().le(),Be:e.wickVisible,_i:e.borderVisible,tt:this.Ls})}}class ky{constructor(e,i){this.Fe=e,this.Li=i}X(e,i,n){this.Fe.draw(e,this.Li,i,n)}}class ll extends Wc{constructor(e,i,n){super(e,i,!1),this.wn=n,this.js=new ky(this.wn.renderer(),r=>{const s=e.Ct();return s===null?null:e.Dt().Rt(r,s.Vt)})}We(e){return this.wn.priceValueBuilder(e)}je(e){return this.wn.isWhitespace(e)}Ys(){const e=this.Es.Us();this.zs=this.Es.In().ne().map(i=>Object.assign(Object.assign({ot:i.ee,nt:NaN},e.$s(i.ee)),{He:i.$e}))}Gs(e,i){i.Qs(this.zs,Sr(this.Ls))}Js(){this.wn.update({bars:this.zs.map(jy),barSpacing:this.Ns.St().le(),visibleRange:this.Ls},this.Es.W())}}function jy(t){return{x:t.nt,time:t.ot,originalData:t.He,barColor:t.ce}}class Sy extends xt{constructor(){super(...arguments),this.zt=null,this.Ue=[]}J(e){this.zt=e,this.Ue=[]}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){if(this.zt===null||this.zt.it.length===0||this.zt.tt===null)return;this.Ue.length||this.qe(i);const r=Math.max(1,Math.floor(n)),s=Math.round(this.zt.Ye*n)-Math.floor(r/2),l=s+r;for(let c=this.zt.tt.from;c<this.zt.tt.to;c++){const o=this.zt.it[c],u=this.Ue[c-this.zt.tt.from],h=Math.round(o.st*n);let d,f;e.fillStyle=o.ce,h<=s?(d=h,f=l):(d=s,f=h-Math.floor(r/2)+r),e.fillRect(u.Os,d,u.ui-u.Os+1,f-d)}}qe(e){if(this.zt===null||this.zt.it.length===0||this.zt.tt===null)return void(this.Ue=[]);const i=Math.ceil(this.zt.le*e)<=1?0:Math.max(1,Math.floor(e)),n=Math.round(this.zt.le*e)-i;this.Ue=new Array(this.zt.tt.to-this.zt.tt.from);for(let s=this.zt.tt.from;s<this.zt.tt.to;s++){const l=this.zt.it[s],c=Math.round(l.nt*e);let o,u;if(n%2){const h=(n-1)/2;o=c-h,u=c+h}else{const h=n/2;o=c-h,u=c+h-1}this.Ue[s-this.zt.tt.from]={Os:o,ui:u,Ze:c,Xe:l.nt*e,ot:l.ot}}for(let s=this.zt.tt.from+1;s<this.zt.tt.to;s++){const l=this.Ue[s-this.zt.tt.from],c=this.Ue[s-this.zt.tt.from-1];l.ot===c.ot+1&&l.Os-c.ui!==i+1&&(c.Ze>c.Xe?c.ui=l.Os-i-1:l.Os=c.ui+i+1)}let r=Math.ceil(this.zt.le*e);for(let s=this.zt.tt.from;s<this.zt.tt.to;s++){const l=this.Ue[s-this.zt.tt.from];l.ui<l.Os&&(l.ui=l.Os);const c=l.ui-l.Os+1;r=Math.min(c,r)}if(i>0&&r<4)for(let s=this.zt.tt.from;s<this.zt.tt.to;s++){const l=this.Ue[s-this.zt.tt.from];l.ui-l.Os+1>r&&(l.Ze>l.Xe?l.ui-=1:l.Os+=1)}}}class Ny extends Ta{constructor(){super(...arguments),this.js=new Sy}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e={it:this.zs,le:this.Ns.St().le(),tt:this.Ls,Ye:this.Es.Dt().Rt(this.Es.W().base,C(this.Es.Ct()).Vt)};this.js.J(e)}}class Cy extends Ta{constructor(){super(...arguments),this.js=new Sm}se(e,i,n){return Object.assign(Object.assign({},this.ie(e,i)),n.$s(e))}Js(){const e=this.Es.W(),i={it:this.zs,Nt:e.lineStyle,fs:e.lineVisible?e.lineType:void 0,et:e.lineWidth,Ds:e.pointMarkersVisible?e.pointMarkersRadius||e.lineWidth/2+2:void 0,tt:this.Ls,ds:this.Ns.St().le()};this.js.J(i)}}const Ey=/[2-9]/g;class Nr{constructor(e=50){this.Ke=0,this.Ge=1,this.Je=1,this.Qe={},this.tr=new Map,this.ir=e}nr(){this.Ke=0,this.tr.clear(),this.Ge=1,this.Je=1,this.Qe={}}xi(e,i,n){return this.sr(e,i,n).width}Mi(e,i,n){const r=this.sr(e,i,n);return((r.actualBoundingBoxAscent||0)-(r.actualBoundingBoxDescent||0))/2}sr(e,i,n){const r=n||Ey,s=String(i).replace(r,"0");if(this.tr.has(s))return De(this.tr.get(s)).er;if(this.Ke===this.ir){const c=this.Qe[this.Je];delete this.Qe[this.Je],this.tr.delete(c),this.Je++,this.Ke--}e.save(),e.textBaseline="middle";const l=e.measureText(s);return e.restore(),l.width===0&&i.length||(this.tr.set(s,{er:l,rr:this.Ge}),this.Qe[this.Ge]=s,this.Ke++,this.Ge++),l}}class zy{constructor(e){this.hr=null,this.k=null,this.lr="right",this.ar=e}_r(e,i,n){this.hr=e,this.k=i,this.lr=n}X(e){this.k!==null&&this.hr!==null&&this.hr.X(e,this.k,this.ar,this.lr)}}class Mm{constructor(e,i,n){this.ur=e,this.ar=new Nr(50),this.cr=i,this.F=n,this.j=-1,this.Wt=new zy(this.ar)}gt(){const e=this.F.dr(this.cr);if(e===null)return null;const i=e.vr(this.cr)?e.pr():this.cr.Dt();if(i===null)return null;const n=e.mr(i);if(n==="overlay")return null;const r=this.F.br();return r.P!==this.j&&(this.j=r.P,this.ar.nr()),this.Wt._r(this.ur.Ii(),r,n),this.Wt}}class My extends xt{constructor(){super(...arguments),this.zt=null}J(e){this.zt=e}wr(e,i){var n;if(!(!((n=this.zt)===null||n===void 0)&&n.yt))return null;const{st:r,et:s,gr:l}=this.zt;return i>=r-s-7&&i<=r+s+7?{Mr:this.zt,gr:l}:null}K({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:r}){if(this.zt===null||this.zt.yt===!1)return;const s=Math.round(this.zt.st*r);s<0||s>i.height||(e.lineCap="butt",e.strokeStyle=this.zt.V,e.lineWidth=Math.floor(this.zt.et*n),Ri(e,this.zt.Nt),pm(e,s,0,i.width))}}class Hc{constructor(e){this.Sr={st:0,V:"rgba(0, 0, 0, 0)",et:1,Nt:0,yt:!1},this.kr=new My,this.ft=!0,this.Es=e,this.Ns=e.$t(),this.kr.J(this.Sr)}bt(){this.ft=!0}gt(){return this.Es.yt()?(this.ft&&(this.yr(),this.ft=!1),this.kr):null}}class _y extends Hc{constructor(e){super(e)}yr(){this.Sr.yt=!1;const e=this.Es.Dt(),i=e.Cr().Cr;if(i!==2&&i!==3)return;const n=this.Es.W();if(!n.baseLineVisible||!this.Es.yt())return;const r=this.Es.Ct();r!==null&&(this.Sr.yt=!0,this.Sr.st=e.Rt(r.Vt,r.Vt),this.Sr.V=n.baseLineColor,this.Sr.et=n.baseLineWidth,this.Sr.Nt=n.baseLineStyle)}}class Ty extends xt{constructor(){super(...arguments),this.zt=null}J(e){this.zt=e}$e(){return this.zt}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n}){const r=this.zt;if(r===null)return;const s=Math.max(1,Math.floor(i)),l=s%2/2,c=Math.round(r.Xe.x*i)+l,o=r.Xe.y*n;e.fillStyle=r.Tr,e.beginPath();const u=Math.max(2,1.5*r.Pr)*i;e.arc(c,o,u,0,2*Math.PI,!1),e.fill(),e.fillStyle=r.Rr,e.beginPath(),e.arc(c,o,r.ht*i,0,2*Math.PI,!1),e.fill(),e.lineWidth=s,e.strokeStyle=r.Dr,e.beginPath(),e.arc(c,o,r.ht*i+s/2,0,2*Math.PI,!1),e.stroke()}}const Py=[{Vr:0,Or:.25,Br:4,Ar:10,Ir:.25,zr:0,Lr:.4,Er:.8},{Vr:.25,Or:.525,Br:10,Ar:14,Ir:0,zr:0,Lr:.8,Er:0},{Vr:.525,Or:1,Br:14,Ar:14,Ir:0,zr:0,Lr:0,Er:0}];function Fh(t,e,i,n){return function(r,s){if(r==="transparent")return r;const l=kr(r),c=l[3];return`rgba(${l[0]}, ${l[1]}, ${l[2]}, ${s*c})`}(t,i+(n-i)*e)}function Vh(t,e){const i=t%2600/2600;let n;for(const o of Py)if(i>=o.Vr&&i<=o.Or){n=o;break}ci(n!==void 0,"Last price animation internal logic error");const r=(i-n.Vr)/(n.Or-n.Vr);return{Rr:Fh(e,r,n.Ir,n.zr),Dr:Fh(e,r,n.Lr,n.Er),ht:(s=r,l=n.Br,c=n.Ar,l+(c-l)*s)};var s,l,c}class Ly{constructor(e){this.Wt=new Ty,this.ft=!0,this.Nr=!0,this.Fr=performance.now(),this.Wr=this.Fr-1,this.jr=e}Hr(){this.Wr=this.Fr-1,this.bt()}$r(){if(this.bt(),this.jr.W().lastPriceAnimation===2){const e=performance.now(),i=this.Wr-e;if(i>0)return void(i<650&&(this.Wr+=2600));this.Fr=e,this.Wr=e+2600}}bt(){this.ft=!0}Ur(){this.Nr=!0}yt(){return this.jr.W().lastPriceAnimation!==0}qr(){switch(this.jr.W().lastPriceAnimation){case 0:return!1;case 1:return!0;case 2:return performance.now()<=this.Wr}}gt(){return this.ft?(this.Mt(),this.ft=!1,this.Nr=!1):this.Nr&&(this.Yr(),this.Nr=!1),this.Wt}Mt(){this.Wt.J(null);const e=this.jr.$t().St(),i=e.Xs(),n=this.jr.Ct();if(i===null||n===null)return;const r=this.jr.Zr(!0);if(r.Xr||!i.Kr(r.ee))return;const s={x:e.It(r.ee),y:this.jr.Dt().Rt(r._t,n.Vt)},l=r.V,c=this.jr.W().lineWidth,o=Vh(this.Gr(),l);this.Wt.J({Tr:l,Pr:c,Rr:o.Rr,Dr:o.Dr,ht:o.ht,Xe:s})}Yr(){const e=this.Wt.$e();if(e!==null){const i=Vh(this.Gr(),e.Tr);e.Rr=i.Rr,e.Dr=i.Dr,e.ht=i.ht}}Gr(){return this.qr()?performance.now()-this.Fr:2599}}function Gn(t,e){return km(Math.min(Math.max(t,12),30)*e)}function Cr(t,e){switch(t){case"arrowDown":case"arrowUp":return Gn(e,1);case"circle":return Gn(e,.8);case"square":return Gn(e,.7)}}function _m(t){return function(e){const i=Math.ceil(e);return i%2!=0?i-1:i}(Gn(t,1))}function Uh(t){return Math.max(Gn(t,.1),3)}function Wh(t,e,i){return e?t:i?Math.ceil(t/2):0}function Tm(t,e,i,n,r){const s=Cr("square",i),l=(s-1)/2,c=t-l,o=e-l;return n>=c&&n<=c+s&&r>=o&&r<=o+s}function Hh(t,e,i,n){const r=(Cr("arrowUp",n)-1)/2*i.Jr,s=(km(n/2)-1)/2*i.Jr;e.beginPath(),t?(e.moveTo(i.nt-r,i.st),e.lineTo(i.nt,i.st-r),e.lineTo(i.nt+r,i.st),e.lineTo(i.nt+s,i.st),e.lineTo(i.nt+s,i.st+r),e.lineTo(i.nt-s,i.st+r),e.lineTo(i.nt-s,i.st)):(e.moveTo(i.nt-r,i.st),e.lineTo(i.nt,i.st+r),e.lineTo(i.nt+r,i.st),e.lineTo(i.nt+s,i.st),e.lineTo(i.nt+s,i.st-r),e.lineTo(i.nt-s,i.st-r),e.lineTo(i.nt-s,i.st)),e.fill()}function Ry(t,e,i,n,r,s){return Tm(e,i,n,r,s)}class $y extends xt{constructor(){super(...arguments),this.zt=null,this.ar=new Nr,this.j=-1,this.H="",this.Qr=""}J(e){this.zt=e}_r(e,i){this.j===e&&this.H===i||(this.j=e,this.H=i,this.Qr=yn(e,i),this.ar.nr())}wr(e,i){if(this.zt===null||this.zt.tt===null)return null;for(let n=this.zt.tt.from;n<this.zt.tt.to;n++){const r=this.zt.it[n];if(By(r,e,i))return{Mr:r.th,gr:r.gr}}return null}K({context:e,horizontalPixelRatio:i,verticalPixelRatio:n},r,s){if(this.zt!==null&&this.zt.tt!==null){e.textBaseline="middle",e.font=this.Qr;for(let l=this.zt.tt.from;l<this.zt.tt.to;l++){const c=this.zt.it[l];c.Kt!==void 0&&(c.Kt.Hi=this.ar.xi(e,c.Kt.ih),c.Kt.At=this.j,c.Kt.nt=c.nt-c.Kt.Hi/2),Dy(c,e,i,n)}}}}function Dy(t,e,i,n){e.fillStyle=t.V,t.Kt!==void 0&&function(r,s,l,c,o,u){r.save(),r.scale(o,u),r.fillText(s,l,c),r.restore()}(e,t.Kt.ih,t.Kt.nt,t.Kt.st,i,n),function(r,s,l){if(r.Ks!==0){switch(r.nh){case"arrowDown":return void Hh(!1,s,l,r.Ks);case"arrowUp":return void Hh(!0,s,l,r.Ks);case"circle":return void function(c,o,u){const h=(Cr("circle",u)-1)/2;c.beginPath(),c.arc(o.nt,o.st,h*o.Jr,0,2*Math.PI,!1),c.fill()}(s,l,r.Ks);case"square":return void function(c,o,u){const h=Cr("square",u),d=(h-1)*o.Jr/2,f=o.nt-d,m=o.st-d;c.fillRect(f,m,h*o.Jr,h*o.Jr)}(s,l,r.Ks)}r.nh}}(t,e,function(r,s,l){const c=Math.max(1,Math.floor(s))%2/2;return{nt:Math.round(r.nt*s)+c,st:r.st*l,Jr:s}}(t,i,n))}function By(t,e,i){return!(t.Kt===void 0||!function(n,r,s,l,c,o){const u=l/2;return c>=n&&c<=n+s&&o>=r-u&&o<=r+u}(t.Kt.nt,t.Kt.st,t.Kt.Hi,t.Kt.At,e,i))||function(n,r,s){if(n.Ks===0)return!1;switch(n.nh){case"arrowDown":case"arrowUp":return Ry(0,n.nt,n.st,n.Ks,r,s);case"circle":return function(l,c,o,u,h){const d=2+Cr("circle",o)/2,f=l-u,m=c-h;return Math.sqrt(f*f+m*m)<=d}(n.nt,n.st,n.Ks,r,s);case"square":return Tm(n.nt,n.st,n.Ks,r,s)}}(t,e,i)}function Ay(t,e,i,n,r,s,l,c,o){const u=St(i)?i:i.Se,h=St(i)?i:i.Me,d=St(i)?i:i.xe,f=St(e.size)?Math.max(e.size,0):1,m=_m(c.le())*f,g=m/2;switch(t.Ks=m,e.position){case"inBar":return t.st=l.Rt(u,o),void(t.Kt!==void 0&&(t.Kt.st=t.st+g+s+.6*r));case"aboveBar":return t.st=l.Rt(h,o)-g-n.sh,t.Kt!==void 0&&(t.Kt.st=t.st-g-.6*r,n.sh+=1.2*r),void(n.sh+=m+s);case"belowBar":return t.st=l.Rt(d,o)+g+n.eh,t.Kt!==void 0&&(t.Kt.st=t.st+g+s+.6*r,n.eh+=1.2*r),void(n.eh+=m+s)}e.position}class Iy{constructor(e,i){this.ft=!0,this.rh=!0,this.hh=!0,this.ah=null,this.oh=null,this.Wt=new $y,this.jr=e,this.$i=i,this.zt={it:[],tt:null}}bt(e){this.ft=!0,this.hh=!0,e==="data"&&(this.rh=!0,this.oh=null)}gt(e){if(!this.jr.yt())return null;this.ft&&this._h();const i=this.$i.W().layout;return this.Wt._r(i.fontSize,i.fontFamily),this.Wt.J(this.zt),this.Wt}uh(){if(this.hh){if(this.jr.dh().length>0){const e=this.$i.St().le(),i=Uh(e),n=1.5*_m(e)+2*i,r=this.fh();this.ah={above:Wh(n,r.aboveBar,r.inBar),below:Wh(n,r.belowBar,r.inBar)}}else this.ah=null;this.hh=!1}return this.ah}fh(){return this.oh===null&&(this.oh=this.jr.dh().reduce((e,i)=>(e[i.position]||(e[i.position]=!0),e),{inBar:!1,aboveBar:!1,belowBar:!1})),this.oh}_h(){const e=this.jr.Dt(),i=this.$i.St(),n=this.jr.dh();this.rh&&(this.zt.it=n.map(h=>({ot:h.time,nt:0,st:0,Ks:0,nh:h.shape,V:h.color,th:h.th,gr:h.id,Kt:void 0})),this.rh=!1);const r=this.$i.W().layout;this.zt.tt=null;const s=i.Xs();if(s===null)return;const l=this.jr.Ct();if(l===null||this.zt.it.length===0)return;let c=NaN;const o=Uh(i.le()),u={sh:o,eh:o};this.zt.tt=Em(this.zt.it,s,!0);for(let h=this.zt.tt.from;h<this.zt.tt.to;h++){const d=n[h];d.time!==c&&(u.sh=o,u.eh=o,c=d.time);const f=this.zt.it[h];f.nt=i.It(d.time),d.text!==void 0&&d.text.length>0&&(f.Kt={ih:d.text,nt:0,st:0,Hi:0,At:0});const m=this.jr.ph(d.time);m!==null&&Ay(f,d,m,u,r.fontSize,o,e,i,l.Vt)}this.ft=!1}}class Oy extends Hc{constructor(e){super(e)}yr(){const e=this.Sr;e.yt=!1;const i=this.Es.W();if(!i.priceLineVisible||!this.Es.yt())return;const n=this.Es.Zr(i.priceLineSource===0);n.Xr||(e.yt=!0,e.st=n.ki,e.V=this.Es.mh(n.V),e.et=i.priceLineWidth,e.Nt=i.priceLineStyle)}}class Fy extends za{constructor(e){super(),this.jt=e}zi(e,i,n){e.yt=!1,i.yt=!1;const r=this.jt;if(!r.yt())return;const s=r.W(),l=s.lastValueVisible,c=r.bh()!=="",o=s.seriesLastValueMode===0,u=r.Zr(!1);if(u.Xr)return;l&&(e.Kt=this.wh(u,l,o),e.yt=e.Kt.length!==0),(c||o)&&(i.Kt=this.gh(u,l,c,o),i.yt=i.Kt.length>0);const h=r.mh(u.V),d=Ca(h);n.t=d.t,n.ki=u.ki,i.Ot=r.$t().Bt(u.ki/r.Dt().At()),e.Ot=h,e.V=d.i,i.V=d.i}gh(e,i,n,r){let s="";const l=this.jt.bh();return n&&l.length!==0&&(s+=`${l} `),i&&r&&(s+=this.jt.Dt().Mh()?e.xh:e.Sh),s.trim()}wh(e,i,n){return i?n?this.jt.Dt().Mh()?e.Sh:e.xh:e.Kt:""}}function qh(t,e,i,n){const r=Number.isFinite(e),s=Number.isFinite(i);return r&&s?t(e,i):r||s?r?e:i:n}class He{constructor(e,i){this.kh=e,this.yh=i}Ch(e){return e!==null&&this.kh===e.kh&&this.yh===e.yh}Th(){return new He(this.kh,this.yh)}Ph(){return this.kh}Rh(){return this.yh}Dh(){return this.yh-this.kh}Ni(){return this.yh===this.kh||Number.isNaN(this.yh)||Number.isNaN(this.kh)}ts(e){return e===null?this:new He(qh(Math.min,this.Ph(),e.Ph(),-1/0),qh(Math.max,this.Rh(),e.Rh(),1/0))}Vh(e){if(!St(e)||this.yh-this.kh===0)return;const i=.5*(this.yh+this.kh);let n=this.yh-i,r=this.kh-i;n*=e,r*=e,this.yh=i+n,this.kh=i+r}Oh(e){St(e)&&(this.yh+=e,this.kh+=e)}Bh(){return{minValue:this.kh,maxValue:this.yh}}static Ah(e){return e===null?null:new He(e.minValue,e.maxValue)}}class sa{constructor(e,i){this.Ih=e,this.zh=i||null}Lh(){return this.Ih}Eh(){return this.zh}Bh(){return this.Ih===null?null:{priceRange:this.Ih.Bh(),margins:this.zh||void 0}}static Ah(e){return e===null?null:new sa(He.Ah(e.priceRange),e.margins)}}class Vy extends Hc{constructor(e,i){super(e),this.Nh=i}yr(){const e=this.Sr;e.yt=!1;const i=this.Nh.W();if(!this.Es.yt()||!i.lineVisible)return;const n=this.Nh.Fh();n!==null&&(e.yt=!0,e.st=n,e.V=i.color,e.et=i.lineWidth,e.Nt=i.lineStyle,e.gr=this.Nh.W().id)}}class Uy extends za{constructor(e,i){super(),this.jr=e,this.Nh=i}zi(e,i,n){e.yt=!1,i.yt=!1;const r=this.Nh.W(),s=r.axisLabelVisible,l=r.title!=="",c=this.jr;if(!s||!c.yt())return;const o=this.Nh.Fh();if(o===null)return;l&&(i.Kt=r.title,i.yt=!0),i.Ot=c.$t().Bt(o/c.Dt().At()),e.Kt=this.Wh(r.price),e.yt=!0;const u=Ca(r.axisLabelColor||r.color);n.t=u.t;const h=r.axisLabelTextColor||u.i;e.V=h,i.V=h,n.ki=o}Wh(e){const i=this.jr.Ct();return i===null?"":this.jr.Dt().Fi(e,i.Vt)}}class Wy{constructor(e,i){this.jr=e,this.cn=i,this.jh=new Vy(e,this),this.ur=new Uy(e,this),this.Hh=new Mm(this.ur,e,e.$t())}$h(e){vt(this.cn,e),this.bt(),this.jr.$t().Uh()}W(){return this.cn}qh(){return this.jh}Yh(){return this.Hh}Zh(){return this.ur}bt(){this.jh.bt(),this.ur.bt()}Fh(){const e=this.jr,i=e.Dt();if(e.$t().St().Ni()||i.Ni())return null;const n=e.Ct();return n===null?null:i.Rt(this.cn.price,n.Vt)}}class Hy extends Vc{constructor(e){super(),this.$i=e}$t(){return this.$i}}const qy={Bar:(t,e,i,n)=>{var r;const s=e.upColor,l=e.downColor,c=C(t(i,n)),o=en(c.Vt[0])<=en(c.Vt[3]);return{ce:(r=c.V)!==null&&r!==void 0?r:o?s:l}},Candlestick:(t,e,i,n)=>{var r,s,l;const c=e.upColor,o=e.downColor,u=e.borderUpColor,h=e.borderDownColor,d=e.wickUpColor,f=e.wickDownColor,m=C(t(i,n)),g=en(m.Vt[0])<=en(m.Vt[3]);return{ce:(r=m.V)!==null&&r!==void 0?r:g?c:o,Ne:(s=m.Ot)!==null&&s!==void 0?s:g?u:h,Ee:(l=m.Xh)!==null&&l!==void 0?l:g?d:f}},Custom:(t,e,i,n)=>{var r;return{ce:(r=C(t(i,n)).V)!==null&&r!==void 0?r:e.color}},Area:(t,e,i,n)=>{var r,s,l,c;const o=C(t(i,n));return{ce:(r=o.lt)!==null&&r!==void 0?r:e.lineColor,lt:(s=o.lt)!==null&&s!==void 0?s:e.lineColor,Ps:(l=o.Ps)!==null&&l!==void 0?l:e.topColor,Rs:(c=o.Rs)!==null&&c!==void 0?c:e.bottomColor}},Baseline:(t,e,i,n)=>{var r,s,l,c,o,u;const h=C(t(i,n));return{ce:h.Vt[3]>=e.baseValue.price?e.topLineColor:e.bottomLineColor,Re:(r=h.Re)!==null&&r!==void 0?r:e.topLineColor,De:(s=h.De)!==null&&s!==void 0?s:e.bottomLineColor,ke:(l=h.ke)!==null&&l!==void 0?l:e.topFillColor1,ye:(c=h.ye)!==null&&c!==void 0?c:e.topFillColor2,Ce:(o=h.Ce)!==null&&o!==void 0?o:e.bottomFillColor1,Te:(u=h.Te)!==null&&u!==void 0?u:e.bottomFillColor2}},Line:(t,e,i,n)=>{var r,s;const l=C(t(i,n));return{ce:(r=l.V)!==null&&r!==void 0?r:e.color,lt:(s=l.V)!==null&&s!==void 0?s:e.color}},Histogram:(t,e,i,n)=>{var r;return{ce:(r=C(t(i,n)).V)!==null&&r!==void 0?r:e.color}}};class Ky{constructor(e){this.Kh=(i,n)=>n!==void 0?n.Vt:this.jr.In().Gh(i),this.jr=e,this.Jh=qy[e.Qh()]}$s(e,i){return this.Jh(this.Kh,this.jr.W(),e,i)}}var Kh;(function(t){t[t.NearestLeft=-1]="NearestLeft",t[t.None=0]="None",t[t.NearestRight=1]="NearestRight"})(Kh||(Kh={}));const Ut=30;class Xy{constructor(){this.tl=[],this.il=new Map,this.nl=new Map}sl(){return this.Ks()>0?this.tl[this.tl.length-1]:null}el(){return this.Ks()>0?this.rl(0):null}An(){return this.Ks()>0?this.rl(this.tl.length-1):null}Ks(){return this.tl.length}Ni(){return this.Ks()===0}Kr(e){return this.hl(e,0)!==null}Gh(e){return this.ll(e)}ll(e,i=0){const n=this.hl(e,i);return n===null?null:Object.assign(Object.assign({},this.al(n)),{ee:this.rl(n)})}ne(){return this.tl}ol(e,i,n){if(this.Ni())return null;let r=null;for(const s of n)r=as(r,this._l(e,i,s));return r}J(e){this.nl.clear(),this.il.clear(),this.tl=e}rl(e){return this.tl[e].ee}al(e){return this.tl[e]}hl(e,i){const n=this.ul(e);if(n===null&&i!==0)switch(i){case-1:return this.cl(e);case 1:return this.dl(e);default:throw new TypeError("Unknown search mode")}return n}cl(e){let i=this.fl(e);return i>0&&(i-=1),i!==this.tl.length&&this.rl(i)<e?i:null}dl(e){const i=this.vl(e);return i!==this.tl.length&&e<this.rl(i)?i:null}ul(e){const i=this.fl(e);return i===this.tl.length||e<this.tl[i].ee?null:i}fl(e){return Dr(this.tl,e,(i,n)=>i.ee<n)}vl(e){return Cm(this.tl,e,(i,n)=>i.ee>n)}pl(e,i,n){let r=null;for(let s=e;s<i;s++){const l=this.tl[s].Vt[n];Number.isNaN(l)||(r===null?r={ml:l,bl:l}:(l<r.ml&&(r.ml=l),l>r.bl&&(r.bl=l)))}return r}_l(e,i,n){if(this.Ni())return null;let r=null;const s=C(this.el()),l=C(this.An()),c=Math.max(e,s),o=Math.min(i,l),u=Math.ceil(c/Ut)*Ut,h=Math.max(u,Math.floor(o/Ut)*Ut);{const f=this.fl(c),m=this.vl(Math.min(o,u,i));r=as(r,this.pl(f,m,n))}let d=this.il.get(n);d===void 0&&(d=new Map,this.il.set(n,d));for(let f=Math.max(u+1,c);f<h;f+=Ut){const m=Math.floor(f/Ut);let g=d.get(m);if(g===void 0){const p=this.fl(m*Ut),w=this.vl((m+1)*Ut-1);g=this.pl(p,w,n),d.set(m,g)}r=as(r,g)}{const f=this.fl(h),m=this.vl(o);r=as(r,this.pl(f,m,n))}return r}}function as(t,e){return t===null?e:e===null?t:{ml:Math.min(t.ml,e.ml),bl:Math.max(t.bl,e.bl)}}class Qy{constructor(e){this.wl=e}X(e,i,n){this.wl.draw(e)}gl(e,i,n){var r,s;(s=(r=this.wl).drawBackground)===null||s===void 0||s.call(r,e)}}class ol{constructor(e){this.tr=null,this.wn=e}gt(){var e;const i=this.wn.renderer();if(i===null)return null;if(((e=this.tr)===null||e===void 0?void 0:e.Ml)===i)return this.tr.xl;const n=new Qy(i);return this.tr={Ml:i,xl:n},n}Sl(){var e,i,n;return(n=(i=(e=this.wn).zOrder)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:"normal"}}function Pm(t){var e,i,n,r,s;return{Kt:t.text(),ki:t.coordinate(),Si:(e=t.fixedCoordinate)===null||e===void 0?void 0:e.call(t),V:t.textColor(),t:t.backColor(),yt:(n=(i=t.visible)===null||i===void 0?void 0:i.call(t))===null||n===void 0||n,hi:(s=(r=t.tickVisible)===null||r===void 0?void 0:r.call(t))===null||s===void 0||s}}class Jy{constructor(e,i){this.Wt=new xm,this.kl=e,this.yl=i}gt(){return this.Wt.J(Object.assign({Hi:this.yl.Hi()},Pm(this.kl))),this.Wt}}class Yy extends za{constructor(e,i){super(),this.kl=e,this.Li=i}zi(e,i,n){const r=Pm(this.kl);n.t=r.t,e.V=r.V;const s=2/12*this.Li.P();n.wi=s,n.gi=s,n.ki=r.ki,n.Si=r.Si,e.Kt=r.Kt,e.yt=r.yt,e.hi=r.hi}}class Gy{constructor(e,i){this.Cl=null,this.Tl=null,this.Pl=null,this.Rl=null,this.Dl=null,this.Vl=e,this.jr=i}Ol(){return this.Vl}Vn(){var e,i;(i=(e=this.Vl).updateAllViews)===null||i===void 0||i.call(e)}Pn(){var e,i,n,r;const s=(n=(i=(e=this.Vl).paneViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((r=this.Cl)===null||r===void 0?void 0:r.Ml)===s)return this.Cl.xl;const l=s.map(c=>new ol(c));return this.Cl={Ml:s,xl:l},l}Qi(){var e,i,n,r;const s=(n=(i=(e=this.Vl).timeAxisViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((r=this.Tl)===null||r===void 0?void 0:r.Ml)===s)return this.Tl.xl;const l=this.jr.$t().St(),c=s.map(o=>new Jy(o,l));return this.Tl={Ml:s,xl:c},c}Rn(){var e,i,n,r;const s=(n=(i=(e=this.Vl).priceAxisViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((r=this.Pl)===null||r===void 0?void 0:r.Ml)===s)return this.Pl.xl;const l=this.jr.Dt(),c=s.map(o=>new Yy(o,l));return this.Pl={Ml:s,xl:c},c}Bl(){var e,i,n,r;const s=(n=(i=(e=this.Vl).priceAxisPaneViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((r=this.Rl)===null||r===void 0?void 0:r.Ml)===s)return this.Rl.xl;const l=s.map(c=>new ol(c));return this.Rl={Ml:s,xl:l},l}Al(){var e,i,n,r;const s=(n=(i=(e=this.Vl).timeAxisPaneViews)===null||i===void 0?void 0:i.call(e))!==null&&n!==void 0?n:[];if(((r=this.Dl)===null||r===void 0?void 0:r.Ml)===s)return this.Dl.xl;const l=s.map(c=>new ol(c));return this.Dl={Ml:s,xl:l},l}Il(e,i){var n,r,s;return(s=(r=(n=this.Vl).autoscaleInfo)===null||r===void 0?void 0:r.call(n,e,i))!==null&&s!==void 0?s:null}wr(e,i){var n,r,s;return(s=(r=(n=this.Vl).hitTest)===null||r===void 0?void 0:r.call(n,e,i))!==null&&s!==void 0?s:null}}function cl(t,e,i,n){t.forEach(r=>{e(r).forEach(s=>{s.Sl()===i&&n.push(s)})})}function ul(t){return t.Pn()}function Zy(t){return t.Bl()}function e2(t){return t.Al()}class qc extends Hy{constructor(e,i,n,r,s){super(e),this.zt=new Xy,this.jh=new Oy(this),this.zl=[],this.Ll=new _y(this),this.El=null,this.Nl=null,this.Fl=[],this.Wl=[],this.jl=null,this.Hl=[],this.cn=i,this.$l=n;const l=new Fy(this);this.rn=[l],this.Hh=new Mm(l,this,e),n!=="Area"&&n!=="Line"&&n!=="Baseline"||(this.El=new Ly(this)),this.Ul(),this.ql(s)}S(){this.jl!==null&&clearTimeout(this.jl)}mh(e){return this.cn.priceLineColor||e}Zr(e){const i={Xr:!0},n=this.Dt();if(this.$t().St().Ni()||n.Ni()||this.zt.Ni())return i;const r=this.$t().St().Xs(),s=this.Ct();if(r===null||s===null)return i;let l,c;if(e){const d=this.zt.sl();if(d===null)return i;l=d,c=d.ee}else{const d=this.zt.ll(r.ui(),-1);if(d===null||(l=this.zt.Gh(d.ee),l===null))return i;c=d.ee}const o=l.Vt[3],u=this.Us().$s(c,{Vt:l}),h=n.Rt(o,s.Vt);return{Xr:!1,_t:o,Kt:n.Fi(o,s.Vt),xh:n.Yl(o),Sh:n.Zl(o,s.Vt),V:u.ce,ki:h,ee:c}}Us(){return this.Nl!==null||(this.Nl=new Ky(this)),this.Nl}W(){return this.cn}$h(e){const i=e.priceScaleId;i!==void 0&&i!==this.cn.priceScaleId&&this.$t().Xl(this,i),vt(this.cn,e),e.priceFormat!==void 0&&(this.Ul(),this.$t().Kl()),this.$t().Gl(this),this.$t().Jl(),this.wn.bt("options")}J(e,i){this.zt.J(e),this.Ql(),this.wn.bt("data"),this.dn.bt("data"),this.El!==null&&(i&&i.ta?this.El.$r():e.length===0&&this.El.Hr());const n=this.$t().dr(this);this.$t().ia(n),this.$t().Gl(this),this.$t().Jl(),this.$t().Uh()}na(e){this.Fl=e,this.Ql();const i=this.$t().dr(this);this.dn.bt("data"),this.$t().ia(i),this.$t().Gl(this),this.$t().Jl(),this.$t().Uh()}sa(){return this.Fl}dh(){return this.Wl}ea(e){const i=new Wy(this,e);return this.zl.push(i),this.$t().Gl(this),i}ra(e){const i=this.zl.indexOf(e);i!==-1&&this.zl.splice(i,1),this.$t().Gl(this)}Qh(){return this.$l}Ct(){const e=this.ha();return e===null?null:{Vt:e.Vt[3],la:e.ot}}ha(){const e=this.$t().St().Xs();if(e===null)return null;const i=e.Os();return this.zt.ll(i,1)}In(){return this.zt}ph(e){const i=this.zt.Gh(e);return i===null?null:this.$l==="Bar"||this.$l==="Candlestick"||this.$l==="Custom"?{ge:i.Vt[0],Me:i.Vt[1],xe:i.Vt[2],Se:i.Vt[3]}:i.Vt[3]}aa(e){const i=[];cl(this.Hl,ul,"top",i);const n=this.El;return n!==null&&n.yt()&&(this.jl===null&&n.qr()&&(this.jl=setTimeout(()=>{this.jl=null,this.$t().oa()},0)),n.Ur(),i.unshift(n)),i}Pn(){const e=[];this._a()||e.push(this.Ll),e.push(this.wn,this.jh,this.dn);const i=this.zl.map(n=>n.qh());return e.push(...i),cl(this.Hl,ul,"normal",e),e}ua(){return this.ca(ul,"bottom")}da(e){return this.ca(Zy,e)}fa(e){return this.ca(e2,e)}va(e,i){return this.Hl.map(n=>n.wr(e,i)).filter(n=>n!==null)}Ji(e){return[this.Hh,...this.zl.map(i=>i.Yh())]}Rn(e,i){if(i!==this.Yi&&!this._a())return[];const n=[...this.rn];for(const r of this.zl)n.push(r.Zh());return this.Hl.forEach(r=>{n.push(...r.Rn())}),n}Qi(){const e=[];return this.Hl.forEach(i=>{e.push(...i.Qi())}),e}Il(e,i){if(this.cn.autoscaleInfoProvider!==void 0){const n=this.cn.autoscaleInfoProvider(()=>{const r=this.pa(e,i);return r===null?null:r.Bh()});return sa.Ah(n)}return this.pa(e,i)}ma(){return this.cn.priceFormat.minMove}ba(){return this.wa}Vn(){var e;this.wn.bt(),this.dn.bt();for(const i of this.rn)i.bt();for(const i of this.zl)i.bt();this.jh.bt(),this.Ll.bt(),(e=this.El)===null||e===void 0||e.bt(),this.Hl.forEach(i=>i.Vn())}Dt(){return C(super.Dt())}kt(e){if(!((this.$l==="Line"||this.$l==="Area"||this.$l==="Baseline")&&this.cn.crosshairMarkerVisible))return null;const i=this.zt.Gh(e);return i===null?null:{_t:i.Vt[3],ht:this.ga(),Ot:this.Ma(),Pt:this.xa(),Tt:this.Sa(e)}}bh(){return this.cn.title}yt(){return this.cn.visible}ka(e){this.Hl.push(new Gy(e,this))}ya(e){this.Hl=this.Hl.filter(i=>i.Ol()!==e)}Ca(){if(this.wn instanceof ll)return e=>this.wn.We(e)}Ta(){if(this.wn instanceof ll)return e=>this.wn.je(e)}_a(){return!Ma(this.Dt().Pa())}pa(e,i){if(!jr(e)||!jr(i)||this.zt.Ni())return null;const n=this.$l==="Line"||this.$l==="Area"||this.$l==="Baseline"||this.$l==="Histogram"?[3]:[2,1],r=this.zt.ol(e,i,n);let s=r!==null?new He(r.ml,r.bl):null;if(this.Qh()==="Histogram"){const c=this.cn.base,o=new He(c,c);s=s!==null?s.ts(o):o}let l=this.dn.uh();return this.Hl.forEach(c=>{const o=c.Il(e,i);if(o!=null&&o.priceRange){const m=new He(o.priceRange.minValue,o.priceRange.maxValue);s=s!==null?s.ts(m):m}var u,h,d,f;o!=null&&o.margins&&(u=l,h=o.margins,l={above:Math.max((d=u==null?void 0:u.above)!==null&&d!==void 0?d:0,h.above),below:Math.max((f=u==null?void 0:u.below)!==null&&f!==void 0?f:0,h.below)})}),new sa(s,l)}ga(){switch(this.$l){case"Line":case"Area":case"Baseline":return this.cn.crosshairMarkerRadius}return 0}Ma(){switch(this.$l){case"Line":case"Area":case"Baseline":{const e=this.cn.crosshairMarkerBorderColor;if(e.length!==0)return e}}return null}xa(){switch(this.$l){case"Line":case"Area":case"Baseline":return this.cn.crosshairMarkerBorderWidth}return 0}Sa(e){switch(this.$l){case"Line":case"Area":case"Baseline":{const i=this.cn.crosshairMarkerBackgroundColor;if(i.length!==0)return i}}return this.Us().$s(e).ce}Ul(){switch(this.cn.priceFormat.type){case"custom":this.wa={format:this.cn.priceFormat.formatter};break;case"volume":this.wa=new ly(this.cn.priceFormat.precision);break;case"percent":this.wa=new ym(this.cn.priceFormat.precision);break;default:{const e=Math.pow(10,this.cn.priceFormat.precision);this.wa=new _a(e,this.cn.priceFormat.minMove*e)}}this.Yi!==null&&this.Yi.Ra()}Ql(){const e=this.$t().St();if(!e.Da()||this.zt.Ni())return void(this.Wl=[]);const i=C(this.zt.el());this.Wl=this.Fl.map((n,r)=>{const s=C(e.Va(n.time,!0)),l=s<i?1:-1;return{time:C(this.zt.ll(s,l)).ee,position:n.position,shape:n.shape,color:n.color,id:n.id,th:r,text:n.text,size:n.size,originalTime:n.originalTime}})}ql(e){switch(this.dn=new Iy(this,this.$t()),this.$l){case"Bar":this.wn=new gy(this,this.$t());break;case"Candlestick":this.wn=new by(this,this.$t());break;case"Line":this.wn=new Cy(this,this.$t());break;case"Custom":this.wn=new ll(this,this.$t(),De(e));break;case"Area":this.wn=new py(this,this.$t());break;case"Baseline":this.wn=new yy(this,this.$t());break;case"Histogram":this.wn=new Ny(this,this.$t());break;default:throw Error("Unknown chart style assigned: "+this.$l)}}ca(e,i){const n=[];return cl(this.Hl,e,i,n),n}}class t2{constructor(e){this.cn=e}Oa(e,i,n){let r=e;if(this.cn.mode===0)return r;const s=n.vn(),l=s.Ct();if(l===null)return r;const c=s.Rt(e,l),o=n.Ba().filter(h=>h instanceof qc).reduce((h,d)=>{if(n.vr(d)||!d.yt())return h;const f=d.Dt(),m=d.In();if(f.Ni()||!m.Kr(i))return h;const g=m.Gh(i);if(g===null)return h;const p=en(d.Ct());return h.concat([f.Rt(g.Vt[3],p.Vt)])},[]);if(o.length===0)return r;o.sort((h,d)=>Math.abs(h-c)-Math.abs(d-c));const u=o[0];return r=s.pn(u,l),r}}class i2 extends xt{constructor(){super(...arguments),this.zt=null}J(e){this.zt=e}K({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:r}){if(this.zt===null)return;const s=Math.max(1,Math.floor(n));e.lineWidth=s,function(l,c){l.save(),l.lineWidth%2&&l.translate(.5,.5),c(),l.restore()}(e,()=>{const l=C(this.zt);if(l.Aa){e.strokeStyle=l.Ia,Ri(e,l.za),e.beginPath();for(const c of l.La){const o=Math.round(c.Ea*n);e.moveTo(o,-s),e.lineTo(o,i.height+s)}e.stroke()}if(l.Na){e.strokeStyle=l.Fa,Ri(e,l.Wa),e.beginPath();for(const c of l.ja){const o=Math.round(c.Ea*r);e.moveTo(-s,o),e.lineTo(i.width+s,o)}e.stroke()}})}}class n2{constructor(e){this.Wt=new i2,this.ft=!0,this.tn=e}bt(){this.ft=!0}gt(){if(this.ft){const e=this.tn.$t().W().grid,i={Na:e.horzLines.visible,Aa:e.vertLines.visible,Fa:e.horzLines.color,Ia:e.vertLines.color,Wa:e.horzLines.style,za:e.vertLines.style,ja:this.tn.vn().Ha(),La:(this.tn.$t().St().Ha()||[]).map(n=>({Ea:n.coord}))};this.Wt.J(i),this.ft=!1}return this.Wt}}class r2{constructor(e){this.wn=new n2(e)}qh(){return this.wn}}const hl={$a:4,Ua:1e-4};function tn(t,e){const i=100*(t-e)/e;return e<0?-i:i}function s2(t,e){const i=tn(t.Ph(),e),n=tn(t.Rh(),e);return new He(i,n)}function Zn(t,e){const i=100*(t-e)/e+100;return e<0?-i:i}function a2(t,e){const i=Zn(t.Ph(),e),n=Zn(t.Rh(),e);return new He(i,n)}function aa(t,e){const i=Math.abs(t);if(i<1e-15)return 0;const n=Math.log10(i+e.Ua)+e.$a;return t<0?-n:n}function er(t,e){const i=Math.abs(t);if(i<1e-15)return 0;const n=Math.pow(10,i-e.$a)-e.Ua;return t<0?-n:n}function Bn(t,e){if(t===null)return null;const i=aa(t.Ph(),e),n=aa(t.Rh(),e);return new He(i,n)}function ls(t,e){if(t===null)return null;const i=er(t.Ph(),e),n=er(t.Rh(),e);return new He(i,n)}function dl(t){if(t===null)return hl;const e=Math.abs(t.Rh()-t.Ph());if(e>=1||e<1e-15)return hl;const i=Math.ceil(Math.abs(Math.log10(e))),n=hl.$a+i;return{$a:n,Ua:1/Math.pow(10,n)}}class fl{constructor(e,i){if(this.qa=e,this.Ya=i,function(n){if(n<0)return!1;for(let r=n;r>1;r/=10)if(r%10!=0)return!1;return!0}(this.qa))this.Za=[2,2.5,2];else{this.Za=[];for(let n=this.qa;n!==1;){if(n%2==0)this.Za.push(2),n/=2;else{if(n%5!=0)throw new Error("unexpected base");this.Za.push(2,2.5),n/=5}if(this.Za.length>100)throw new Error("something wrong with base")}}}Xa(e,i,n){const r=this.qa===0?0:1/this.qa;let s=Math.pow(10,Math.max(0,Math.ceil(Math.log10(e-i)))),l=0,c=this.Ya[0];for(;;){const d=ss(s,r,1e-14)&&s>r+1e-14,f=ss(s,n*c,1e-14),m=ss(s,1,1e-14);if(!(d&&f&&m))break;s/=c,c=this.Ya[++l%this.Ya.length]}if(s<=r+1e-14&&(s=r),s=Math.max(1,s),this.Za.length>0&&(o=s,u=1,h=1e-14,Math.abs(o-u)<h))for(l=0,c=this.Za[0];ss(s,n*c,1e-14)&&s>r+1e-14;)s/=c,c=this.Za[++l%this.Za.length];var o,u,h;return s}}class Xh{constructor(e,i,n,r){this.Ka=[],this.Li=e,this.qa=i,this.Ga=n,this.Ja=r}Xa(e,i){if(e<i)throw new Error("high < low");const n=this.Li.At(),r=(e-i)*this.Qa()/n,s=new fl(this.qa,[2,2.5,2]),l=new fl(this.qa,[2,2,2.5]),c=new fl(this.qa,[2.5,2,2]),o=[];return o.push(s.Xa(e,i,r),l.Xa(e,i,r),c.Xa(e,i,r)),function(u){if(u.length<1)throw Error("array is empty");let h=u[0];for(let d=1;d<u.length;++d)u[d]<h&&(h=u[d]);return h}(o)}io(){const e=this.Li,i=e.Ct();if(i===null)return void(this.Ka=[]);const n=e.At(),r=this.Ga(n-1,i),s=this.Ga(0,i),l=this.Li.W().entireTextOnly?this.no()/2:0,c=l,o=n-1-l,u=Math.max(r,s),h=Math.min(r,s);if(u===h)return void(this.Ka=[]);let d=this.Xa(u,h),f=u%d;f+=f<0?d:0;const m=u>=h?1:-1;let g=null,p=0;for(let w=u-f;w>h;w-=d){const v=this.Ja(w,i,!0);g!==null&&Math.abs(v-g)<this.Qa()||v<c||v>o||(p<this.Ka.length?(this.Ka[p].Ea=v,this.Ka[p].so=e.eo(w)):this.Ka.push({Ea:v,so:e.eo(w)}),p++,g=v,e.ro()&&(d=this.Xa(w*m,h)))}this.Ka.length=p}Ha(){return this.Ka}no(){return this.Li.P()}Qa(){return Math.ceil(2.5*this.no())}}function Lm(t){return t.slice().sort((e,i)=>C(e.Xi())-C(i.Xi()))}var Qh;(function(t){t[t.Normal=0]="Normal",t[t.Logarithmic=1]="Logarithmic",t[t.Percentage=2]="Percentage",t[t.IndexedTo100=3]="IndexedTo100"})(Qh||(Qh={}));const Jh=new ym,Yh=new _a(100,1);class l2{constructor(e,i,n,r){this.ho=0,this.lo=null,this.Ih=null,this.ao=null,this.oo={_o:!1,uo:null},this.co=0,this.do=0,this.fo=new pe,this.vo=new pe,this.po=[],this.mo=null,this.bo=null,this.wo=null,this.Mo=null,this.wa=Yh,this.xo=dl(null),this.So=e,this.cn=i,this.ko=n,this.yo=r,this.Co=new Xh(this,100,this.To.bind(this),this.Po.bind(this))}Pa(){return this.So}W(){return this.cn}$h(e){if(vt(this.cn,e),this.Ra(),e.mode!==void 0&&this.Ro({Cr:e.mode}),e.scaleMargins!==void 0){const i=De(e.scaleMargins.top),n=De(e.scaleMargins.bottom);if(i<0||i>1)throw new Error(`Invalid top margin - expect value between 0 and 1, given=${i}`);if(n<0||n>1)throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${n}`);if(i+n>1)throw new Error(`Invalid margins - sum of margins must be less than 1, given=${i+n}`);this.Do(),this.bo=null}}Vo(){return this.cn.autoScale}ro(){return this.cn.mode===1}Mh(){return this.cn.mode===2}Oo(){return this.cn.mode===3}Cr(){return{Wn:this.cn.autoScale,Bo:this.cn.invertScale,Cr:this.cn.mode}}Ro(e){const i=this.Cr();let n=null;e.Wn!==void 0&&(this.cn.autoScale=e.Wn),e.Cr!==void 0&&(this.cn.mode=e.Cr,e.Cr!==2&&e.Cr!==3||(this.cn.autoScale=!0),this.oo._o=!1),i.Cr===1&&e.Cr!==i.Cr&&(function(s,l){if(s===null)return!1;const c=er(s.Ph(),l),o=er(s.Rh(),l);return isFinite(c)&&isFinite(o)}(this.Ih,this.xo)?(n=ls(this.Ih,this.xo),n!==null&&this.Ao(n)):this.cn.autoScale=!0),e.Cr===1&&e.Cr!==i.Cr&&(n=Bn(this.Ih,this.xo),n!==null&&this.Ao(n));const r=i.Cr!==this.cn.mode;r&&(i.Cr===2||this.Mh())&&this.Ra(),r&&(i.Cr===3||this.Oo())&&this.Ra(),e.Bo!==void 0&&i.Bo!==e.Bo&&(this.cn.invertScale=e.Bo,this.Io()),this.vo.m(i,this.Cr())}zo(){return this.vo}P(){return this.ko.fontSize}At(){return this.ho}Lo(e){this.ho!==e&&(this.ho=e,this.Do(),this.bo=null)}Eo(){if(this.lo)return this.lo;const e=this.At()-this.No()-this.Fo();return this.lo=e,e}Lh(){return this.Wo(),this.Ih}Ao(e,i){const n=this.Ih;(i||n===null&&e!==null||n!==null&&!n.Ch(e))&&(this.bo=null,this.Ih=e)}Ni(){return this.Wo(),this.ho===0||!this.Ih||this.Ih.Ni()}jo(e){return this.Bo()?e:this.At()-1-e}Rt(e,i){return this.Mh()?e=tn(e,i):this.Oo()&&(e=Zn(e,i)),this.Po(e,i)}te(e,i,n){this.Wo();const r=this.Fo(),s=C(this.Lh()),l=s.Ph(),c=s.Rh(),o=this.Eo()-1,u=this.Bo(),h=o/(c-l),d=n===void 0?0:n.from,f=n===void 0?e.length:n.to,m=this.Ho();for(let g=d;g<f;g++){const p=e[g],w=p._t;if(isNaN(w))continue;let v=w;m!==null&&(v=m(p._t,i));const x=r+h*(v-l),y=u?x:this.ho-1-x;p.st=y}}be(e,i,n){this.Wo();const r=this.Fo(),s=C(this.Lh()),l=s.Ph(),c=s.Rh(),o=this.Eo()-1,u=this.Bo(),h=o/(c-l),d=n===void 0?0:n.from,f=n===void 0?e.length:n.to,m=this.Ho();for(let g=d;g<f;g++){const p=e[g];let w=p.ge,v=p.Me,x=p.xe,y=p.Se;m!==null&&(w=m(p.ge,i),v=m(p.Me,i),x=m(p.xe,i),y=m(p.Se,i));let b=r+h*(w-l),j=u?b:this.ho-1-b;p.pe=j,b=r+h*(v-l),j=u?b:this.ho-1-b,p.de=j,b=r+h*(x-l),j=u?b:this.ho-1-b,p.fe=j,b=r+h*(y-l),j=u?b:this.ho-1-b,p.me=j}}pn(e,i){const n=this.To(e,i);return this.$o(n,i)}$o(e,i){let n=e;return this.Mh()?n=function(r,s){return s<0&&(r=-r),r/100*s+s}(n,i):this.Oo()&&(n=function(r,s){return r-=100,s<0&&(r=-r),r/100*s+s}(n,i)),n}Ba(){return this.po}Uo(){if(this.mo)return this.mo;let e=[];for(let i=0;i<this.po.length;i++){const n=this.po[i];n.Xi()===null&&n.Ki(i+1),e.push(n)}return e=Lm(e),this.mo=e,this.mo}qo(e){this.po.indexOf(e)===-1&&(this.po.push(e),this.Ra(),this.Yo())}Zo(e){const i=this.po.indexOf(e);if(i===-1)throw new Error("source is not attached to scale");this.po.splice(i,1),this.po.length===0&&(this.Ro({Wn:!0}),this.Ao(null)),this.Ra(),this.Yo()}Ct(){let e=null;for(const i of this.po){const n=i.Ct();n!==null&&(e===null||n.la<e.la)&&(e=n)}return e===null?null:e.Vt}Bo(){return this.cn.invertScale}Ha(){const e=this.Ct()===null;if(this.bo!==null&&(e||this.bo.Xo===e))return this.bo.Ha;this.Co.io();const i=this.Co.Ha();return this.bo={Ha:i,Xo:e},this.fo.m(),i}Ko(){return this.fo}Go(e){this.Mh()||this.Oo()||this.wo===null&&this.ao===null&&(this.Ni()||(this.wo=this.ho-e,this.ao=C(this.Lh()).Th()))}Jo(e){if(this.Mh()||this.Oo()||this.wo===null)return;this.Ro({Wn:!1}),(e=this.ho-e)<0&&(e=0);let i=(this.wo+.2*(this.ho-1))/(e+.2*(this.ho-1));const n=C(this.ao).Th();i=Math.max(i,.1),n.Vh(i),this.Ao(n)}Qo(){this.Mh()||this.Oo()||(this.wo=null,this.ao=null)}t_(e){this.Vo()||this.Mo===null&&this.ao===null&&(this.Ni()||(this.Mo=e,this.ao=C(this.Lh()).Th()))}i_(e){if(this.Vo()||this.Mo===null)return;const i=C(this.Lh()).Dh()/(this.Eo()-1);let n=e-this.Mo;this.Bo()&&(n*=-1);const r=n*i,s=C(this.ao).Th();s.Oh(r),this.Ao(s,!0),this.bo=null}n_(){this.Vo()||this.Mo!==null&&(this.Mo=null,this.ao=null)}ba(){return this.wa||this.Ra(),this.wa}Fi(e,i){switch(this.cn.mode){case 2:return this.s_(tn(e,i));case 3:return this.ba().format(Zn(e,i));default:return this.Wh(e)}}eo(e){switch(this.cn.mode){case 2:return this.s_(e);case 3:return this.ba().format(e);default:return this.Wh(e)}}Yl(e){return this.Wh(e,C(this.e_()).ba())}Zl(e,i){return e=tn(e,i),this.s_(e,Jh)}r_(){return this.po}h_(e){this.oo={uo:e,_o:!1}}Vn(){this.po.forEach(e=>e.Vn())}Ra(){this.bo=null;const e=this.e_();let i=100;e!==null&&(i=Math.round(1/e.ma())),this.wa=Yh,this.Mh()?(this.wa=Jh,i=100):this.Oo()?(this.wa=new _a(100,1),i=100):e!==null&&(this.wa=e.ba()),this.Co=new Xh(this,i,this.To.bind(this),this.Po.bind(this)),this.Co.io()}Yo(){this.mo=null}e_(){return this.po[0]||null}No(){return this.Bo()?this.cn.scaleMargins.bottom*this.At()+this.do:this.cn.scaleMargins.top*this.At()+this.co}Fo(){return this.Bo()?this.cn.scaleMargins.top*this.At()+this.co:this.cn.scaleMargins.bottom*this.At()+this.do}Wo(){this.oo._o||(this.oo._o=!0,this.l_())}Do(){this.lo=null}Po(e,i){if(this.Wo(),this.Ni())return 0;e=this.ro()&&e?aa(e,this.xo):e;const n=C(this.Lh()),r=this.Fo()+(this.Eo()-1)*(e-n.Ph())/n.Dh();return this.jo(r)}To(e,i){if(this.Wo(),this.Ni())return 0;const n=this.jo(e),r=C(this.Lh()),s=r.Ph()+r.Dh()*((n-this.Fo())/(this.Eo()-1));return this.ro()?er(s,this.xo):s}Io(){this.bo=null,this.Co.io()}l_(){const e=this.oo.uo;if(e===null)return;let i=null;const n=this.r_();let r=0,s=0;for(const o of n){if(!o.yt())continue;const u=o.Ct();if(u===null)continue;const h=o.Il(e.Os(),e.ui());let d=h&&h.Lh();if(d!==null){switch(this.cn.mode){case 1:d=Bn(d,this.xo);break;case 2:d=s2(d,u.Vt);break;case 3:d=a2(d,u.Vt)}if(i=i===null?d:i.ts(C(d)),h!==null){const f=h.Eh();f!==null&&(r=Math.max(r,f.above),s=Math.max(s,f.below))}}}if(r===this.co&&s===this.do||(this.co=r,this.do=s,this.bo=null,this.Do()),i!==null){if(i.Ph()===i.Rh()){const o=this.e_(),u=5*(o===null||this.Mh()||this.Oo()?1:o.ma());this.ro()&&(i=ls(i,this.xo)),i=new He(i.Ph()-u,i.Rh()+u),this.ro()&&(i=Bn(i,this.xo))}if(this.ro()){const o=ls(i,this.xo),u=dl(o);if(l=u,c=this.xo,l.$a!==c.$a||l.Ua!==c.Ua){const h=this.ao!==null?ls(this.ao,this.xo):null;this.xo=u,i=Bn(o,u),h!==null&&(this.ao=Bn(h,u))}}this.Ao(i)}else this.Ih===null&&(this.Ao(new He(-.5,.5)),this.xo=dl(null));var l,c;this.oo._o=!0}Ho(){return this.Mh()?tn:this.Oo()?Zn:this.ro()?e=>aa(e,this.xo):null}a_(e,i,n){return i===void 0?(n===void 0&&(n=this.ba()),n.format(e)):i(e)}Wh(e,i){return this.a_(e,this.yo.priceFormatter,i)}s_(e,i){return this.a_(e,this.yo.percentageFormatter,i)}}class o2{constructor(e,i){this.po=[],this.o_=new Map,this.ho=0,this.__=0,this.u_=1e3,this.mo=null,this.c_=new pe,this.yl=e,this.$i=i,this.d_=new r2(this);const n=i.W();this.f_=this.v_("left",n.leftPriceScale),this.p_=this.v_("right",n.rightPriceScale),this.f_.zo().l(this.m_.bind(this,this.f_),this),this.p_.zo().l(this.m_.bind(this,this.p_),this),this.b_(n)}b_(e){if(e.leftPriceScale&&this.f_.$h(e.leftPriceScale),e.rightPriceScale&&this.p_.$h(e.rightPriceScale),e.localization&&(this.f_.Ra(),this.p_.Ra()),e.overlayPriceScales){const i=Array.from(this.o_.values());for(const n of i){const r=C(n[0].Dt());r.$h(e.overlayPriceScales),e.localization&&r.Ra()}}}w_(e){switch(e){case"left":return this.f_;case"right":return this.p_}return this.o_.has(e)?De(this.o_.get(e))[0].Dt():null}S(){this.$t().g_().p(this),this.f_.zo().p(this),this.p_.zo().p(this),this.po.forEach(e=>{e.S&&e.S()}),this.c_.m()}M_(){return this.u_}x_(e){this.u_=e}$t(){return this.$i}Hi(){return this.__}At(){return this.ho}S_(e){this.__=e,this.k_()}Lo(e){this.ho=e,this.f_.Lo(e),this.p_.Lo(e),this.po.forEach(i=>{if(this.vr(i)){const n=i.Dt();n!==null&&n.Lo(e)}}),this.k_()}Ba(){return this.po}vr(e){const i=e.Dt();return i===null||this.f_!==i&&this.p_!==i}qo(e,i,n){const r=n!==void 0?n:this.C_().y_+1;this.T_(e,i,r)}Zo(e){const i=this.po.indexOf(e);ci(i!==-1,"removeDataSource: invalid data source"),this.po.splice(i,1);const n=C(e.Dt()).Pa();if(this.o_.has(n)){const s=De(this.o_.get(n)),l=s.indexOf(e);l!==-1&&(s.splice(l,1),s.length===0&&this.o_.delete(n))}const r=e.Dt();r&&r.Ba().indexOf(e)>=0&&r.Zo(e),r!==null&&(r.Yo(),this.P_(r)),this.mo=null}mr(e){return e===this.f_?"left":e===this.p_?"right":"overlay"}R_(){return this.f_}D_(){return this.p_}V_(e,i){e.Go(i)}O_(e,i){e.Jo(i),this.k_()}B_(e){e.Qo()}A_(e,i){e.t_(i)}I_(e,i){e.i_(i),this.k_()}z_(e){e.n_()}k_(){this.po.forEach(e=>{e.Vn()})}vn(){let e=null;return this.$i.W().rightPriceScale.visible&&this.p_.Ba().length!==0?e=this.p_:this.$i.W().leftPriceScale.visible&&this.f_.Ba().length!==0?e=this.f_:this.po.length!==0&&(e=this.po[0].Dt()),e===null&&(e=this.p_),e}pr(){let e=null;return this.$i.W().rightPriceScale.visible?e=this.p_:this.$i.W().leftPriceScale.visible&&(e=this.f_),e}P_(e){e!==null&&e.Vo()&&this.L_(e)}E_(e){const i=this.yl.Xs();e.Ro({Wn:!0}),i!==null&&e.h_(i),this.k_()}N_(){this.L_(this.f_),this.L_(this.p_)}F_(){this.P_(this.f_),this.P_(this.p_),this.po.forEach(e=>{this.vr(e)&&this.P_(e.Dt())}),this.k_(),this.$i.Uh()}Uo(){return this.mo===null&&(this.mo=Lm(this.po)),this.mo}W_(){return this.c_}j_(){return this.d_}L_(e){const i=e.r_();if(i&&i.length>0&&!this.yl.Ni()){const n=this.yl.Xs();n!==null&&e.h_(n)}e.Vn()}C_(){const e=this.Uo();if(e.length===0)return{H_:0,y_:0};let i=0,n=0;for(let r=0;r<e.length;r++){const s=e[r].Xi();s!==null&&(s<i&&(i=s),s>n&&(n=s))}return{H_:i,y_:n}}T_(e,i,n){let r=this.w_(i);if(r===null&&(r=this.v_(i,this.$i.W().overlayPriceScales)),this.po.push(e),!Ma(i)){const s=this.o_.get(i)||[];s.push(e),this.o_.set(i,s)}r.qo(e),e.Gi(r),e.Ki(n),this.P_(r),this.mo=null}m_(e,i,n){i.Cr!==n.Cr&&this.L_(e)}v_(e,i){const n=Object.assign({visible:!0,autoScale:!0},Pt(i)),r=new l2(e,n,this.$i.W().layout,this.$i.W().localization);return r.Lo(this.At()),r}}class c2{constructor(e,i,n=50){this.Ke=0,this.Ge=1,this.Je=1,this.tr=new Map,this.Qe=new Map,this.U_=e,this.q_=i,this.ir=n}Y_(e){const i=e.time,n=this.q_.cacheKey(i),r=this.tr.get(n);if(r!==void 0)return r.Z_;if(this.Ke===this.ir){const l=this.Qe.get(this.Je);this.Qe.delete(this.Je),this.tr.delete(De(l)),this.Je++,this.Ke--}const s=this.U_(e);return this.tr.set(n,{Z_:s,rr:this.Ge}),this.Qe.set(this.Ge,n),this.Ke++,this.Ge++,s}}class tr{constructor(e,i){ci(e<=i,"right should be >= left"),this.X_=e,this.K_=i}Os(){return this.X_}ui(){return this.K_}G_(){return this.K_-this.X_+1}Kr(e){return this.X_<=e&&e<=this.K_}Ch(e){return this.X_===e.Os()&&this.K_===e.ui()}}function Gh(t,e){return t===null||e===null?t===e:t.Ch(e)}class u2{constructor(){this.J_=new Map,this.tr=null,this.Q_=!1}tu(e){this.Q_=e,this.tr=null}iu(e,i){this.nu(i),this.tr=null;for(let n=i;n<e.length;++n){const r=e[n];let s=this.J_.get(r.timeWeight);s===void 0&&(s=[],this.J_.set(r.timeWeight,s)),s.push({index:n,time:r.time,weight:r.timeWeight,originalTime:r.originalTime})}}su(e,i){const n=Math.ceil(i/e);return this.tr!==null&&this.tr.eu===n||(this.tr={Ha:this.ru(n),eu:n}),this.tr.Ha}nu(e){if(e===0)return void this.J_.clear();const i=[];this.J_.forEach((n,r)=>{e<=n[0].index?i.push(r):n.splice(Dr(n,e,s=>s.index<e),1/0)});for(const n of i)this.J_.delete(n)}ru(e){let i=[];for(const n of Array.from(this.J_.keys()).sort((r,s)=>s-r)){if(!this.J_.get(n))continue;const r=i;i=[];const s=r.length;let l=0;const c=De(this.J_.get(n)),o=c.length;let u=1/0,h=-1/0;for(let d=0;d<o;d++){const f=c[d],m=f.index;for(;l<s;){const g=r[l],p=g.index;if(!(p<m)){u=p;break}l++,i.push(g),h=p,u=1/0}if(u-m>=e&&m-h>=e)i.push(f),h=m;else if(this.Q_)return r}for(;l<s;l++)i.push(r[l])}return i}}class un{constructor(e){this.hu=e}lu(){return this.hu===null?null:new tr(Math.floor(this.hu.Os()),Math.ceil(this.hu.ui()))}au(){return this.hu}static ou(){return new un(null)}}function h2(t,e){return t.weight>e.weight?t:e}class d2{constructor(e,i,n,r){this.__=0,this._u=null,this.uu=[],this.Mo=null,this.wo=null,this.cu=new u2,this.du=new Map,this.fu=un.ou(),this.vu=!0,this.pu=new pe,this.mu=new pe,this.bu=new pe,this.wu=null,this.gu=null,this.Mu=[],this.cn=i,this.yo=n,this.xu=i.rightOffset,this.Su=i.barSpacing,this.$i=e,this.q_=r,this.ku(),this.cu.tu(i.uniformDistribution)}W(){return this.cn}yu(e){vt(this.yo,e),this.Cu(),this.ku()}$h(e,i){var n;vt(this.cn,e),this.cn.fixLeftEdge&&this.Tu(),this.cn.fixRightEdge&&this.Pu(),e.barSpacing!==void 0&&this.$i.Gn(e.barSpacing),e.rightOffset!==void 0&&this.$i.Jn(e.rightOffset),e.minBarSpacing!==void 0&&this.$i.Gn((n=e.barSpacing)!==null&&n!==void 0?n:this.Su),this.Cu(),this.ku(),this.bu.m()}mn(e){var i,n;return(n=(i=this.uu[e])===null||i===void 0?void 0:i.time)!==null&&n!==void 0?n:null}Ui(e){var i;return(i=this.uu[e])!==null&&i!==void 0?i:null}Va(e,i){if(this.uu.length<1)return null;if(this.q_.key(e)>this.q_.key(this.uu[this.uu.length-1].time))return i?this.uu.length-1:null;const n=Dr(this.uu,this.q_.key(e),(r,s)=>this.q_.key(r.time)<s);return this.q_.key(e)<this.q_.key(this.uu[n].time)?i?n:null:n}Ni(){return this.__===0||this.uu.length===0||this._u===null}Da(){return this.uu.length>0}Xs(){return this.Ru(),this.fu.lu()}Du(){return this.Ru(),this.fu.au()}Vu(){const e=this.Xs();if(e===null)return null;const i={from:e.Os(),to:e.ui()};return this.Ou(i)}Ou(e){const i=Math.round(e.from),n=Math.round(e.to),r=C(this.Bu()),s=C(this.Au());return{from:C(this.Ui(Math.max(r,i))),to:C(this.Ui(Math.min(s,n)))}}Iu(e){return{from:C(this.Va(e.from,!0)),to:C(this.Va(e.to,!0))}}Hi(){return this.__}S_(e){if(!isFinite(e)||e<=0||this.__===e)return;const i=this.Du(),n=this.__;if(this.__=e,this.vu=!0,this.cn.lockVisibleTimeRangeOnResize&&n!==0){const r=this.Su*e/n;this.Su=r}if(this.cn.fixLeftEdge&&i!==null&&i.Os()<=0){const r=n-e;this.xu-=Math.round(r/this.Su)+1,this.vu=!0}this.zu(),this.Lu()}It(e){if(this.Ni()||!jr(e))return 0;const i=this.Eu()+this.xu-e;return this.__-(i+.5)*this.Su-1}Qs(e,i){const n=this.Eu(),r=i===void 0?0:i.from,s=i===void 0?e.length:i.to;for(let l=r;l<s;l++){const c=e[l].ot,o=n+this.xu-c,u=this.__-(o+.5)*this.Su-1;e[l].nt=u}}Nu(e){return Math.ceil(this.Fu(e))}Jn(e){this.vu=!0,this.xu=e,this.Lu(),this.$i.Wu(),this.$i.Uh()}le(){return this.Su}Gn(e){this.ju(e),this.Lu(),this.$i.Wu(),this.$i.Uh()}Hu(){return this.xu}Ha(){if(this.Ni())return null;if(this.gu!==null)return this.gu;const e=this.Su,i=5*(this.$i.W().layout.fontSize+4)/8*(this.cn.tickMarkMaxCharacterLength||8),n=Math.round(i/e),r=C(this.Xs()),s=Math.max(r.Os(),r.Os()-n),l=Math.max(r.ui(),r.ui()-n),c=this.cu.su(e,i),o=this.Bu()+n,u=this.Au()-n,h=this.$u(),d=this.cn.fixLeftEdge||h,f=this.cn.fixRightEdge||h;let m=0;for(const g of c){if(!(s<=g.index&&g.index<=l))continue;let p;m<this.Mu.length?(p=this.Mu[m],p.coord=this.It(g.index),p.label=this.Uu(g),p.weight=g.weight):(p={needAlignCoordinate:!1,coord:this.It(g.index),label:this.Uu(g),weight:g.weight},this.Mu.push(p)),this.Su>i/2&&!h?p.needAlignCoordinate=!1:p.needAlignCoordinate=d&&g.index<=o||f&&g.index>=u,m++}return this.Mu.length=m,this.gu=this.Mu,this.Mu}qu(){this.vu=!0,this.Gn(this.cn.barSpacing),this.Jn(this.cn.rightOffset)}Yu(e){this.vu=!0,this._u=e,this.Lu(),this.Tu()}Zu(e,i){const n=this.Fu(e),r=this.le(),s=r+i*(r/10);this.Gn(s),this.cn.rightBarStaysOnScroll||this.Jn(this.Hu()+(n-this.Fu(e)))}Go(e){this.Mo&&this.n_(),this.wo===null&&this.wu===null&&(this.Ni()||(this.wo=e,this.Xu()))}Jo(e){if(this.wu===null)return;const i=Co(this.__-e,0,this.__),n=Co(this.__-C(this.wo),0,this.__);i!==0&&n!==0&&this.Gn(this.wu.le*i/n)}Qo(){this.wo!==null&&(this.wo=null,this.Ku())}t_(e){this.Mo===null&&this.wu===null&&(this.Ni()||(this.Mo=e,this.Xu()))}i_(e){if(this.Mo===null)return;const i=(this.Mo-e)/this.le();this.xu=C(this.wu).Hu+i,this.vu=!0,this.Lu()}n_(){this.Mo!==null&&(this.Mo=null,this.Ku())}Gu(){this.Ju(this.cn.rightOffset)}Ju(e,i=400){if(!isFinite(e))throw new RangeError("offset is required and must be finite number");if(!isFinite(i)||i<=0)throw new RangeError("animationDuration (optional) must be finite positive number");const n=this.xu,r=performance.now();this.$i.Zn({Qu:s=>(s-r)/i>=1,tc:s=>{const l=(s-r)/i;return l>=1?e:n+(e-n)*l}})}bt(e,i){this.vu=!0,this.uu=e,this.cu.iu(e,i),this.Lu()}nc(){return this.pu}sc(){return this.mu}ec(){return this.bu}Eu(){return this._u||0}rc(e){const i=e.G_();this.ju(this.__/i),this.xu=e.ui()-this.Eu(),this.Lu(),this.vu=!0,this.$i.Wu(),this.$i.Uh()}hc(){const e=this.Bu(),i=this.Au();e!==null&&i!==null&&this.rc(new tr(e,i+this.cn.rightOffset))}lc(e){const i=new tr(e.from,e.to);this.rc(i)}qi(e){return this.yo.timeFormatter!==void 0?this.yo.timeFormatter(e.originalTime):this.q_.formatHorzItem(e.time)}$u(){const{handleScroll:e,handleScale:i}=this.$i.W();return!(e.horzTouchDrag||e.mouseWheel||e.pressedMouseMove||e.vertTouchDrag||i.axisDoubleClickReset.time||i.axisPressedMouseMove.time||i.mouseWheel||i.pinch)}Bu(){return this.uu.length===0?null:0}Au(){return this.uu.length===0?null:this.uu.length-1}ac(e){return(this.__-1-e)/this.Su}Fu(e){const i=this.ac(e),n=this.Eu()+this.xu-i;return Math.round(1e6*n)/1e6}ju(e){const i=this.Su;this.Su=e,this.zu(),i!==this.Su&&(this.vu=!0,this.oc())}Ru(){if(!this.vu)return;if(this.vu=!1,this.Ni())return void this._c(un.ou());const e=this.Eu(),i=this.__/this.Su,n=this.xu+e,r=new tr(n-i+1,n);this._c(new un(r))}zu(){const e=this.uc();if(this.Su<e&&(this.Su=e,this.vu=!0),this.__!==0){const i=.5*this.__;this.Su>i&&(this.Su=i,this.vu=!0)}}uc(){return this.cn.fixLeftEdge&&this.cn.fixRightEdge&&this.uu.length!==0?this.__/this.uu.length:this.cn.minBarSpacing}Lu(){const e=this.cc();e!==null&&this.xu<e&&(this.xu=e,this.vu=!0);const i=this.dc();this.xu>i&&(this.xu=i,this.vu=!0)}cc(){const e=this.Bu(),i=this._u;return e===null||i===null?null:e-i-1+(this.cn.fixLeftEdge?this.__/this.Su:Math.min(2,this.uu.length))}dc(){return this.cn.fixRightEdge?0:this.__/this.Su-Math.min(2,this.uu.length)}Xu(){this.wu={le:this.le(),Hu:this.Hu()}}Ku(){this.wu=null}Uu(e){let i=this.du.get(e.weight);return i===void 0&&(i=new c2(n=>this.fc(n),this.q_),this.du.set(e.weight,i)),i.Y_(e)}fc(e){return this.q_.formatTickmark(e,this.yo)}_c(e){const i=this.fu;this.fu=e,Gh(i.lu(),this.fu.lu())||this.pu.m(),Gh(i.au(),this.fu.au())||this.mu.m(),this.oc()}oc(){this.gu=null}Cu(){this.oc(),this.du.clear()}ku(){this.q_.updateFormatter(this.yo)}Tu(){if(!this.cn.fixLeftEdge)return;const e=this.Bu();if(e===null)return;const i=this.Xs();if(i===null)return;const n=i.Os()-e;if(n<0){const r=this.xu-n-1;this.Jn(r)}this.zu()}Pu(){this.Lu(),this.zu()}}class f2{X(e,i,n){e.useMediaCoordinateSpace(r=>this.K(r,i,n))}gl(e,i,n){e.useMediaCoordinateSpace(r=>this.vc(r,i,n))}vc(e,i,n){}}class p2 extends f2{constructor(e){super(),this.mc=new Map,this.zt=e}K(e){}vc(e){if(!this.zt.yt)return;const{context:i,mediaSize:n}=e;let r=0;for(const l of this.zt.bc){if(l.Kt.length===0)continue;i.font=l.R;const c=this.wc(i,l.Kt);c>n.width?l.Zu=n.width/c:l.Zu=1,r+=l.gc*l.Zu}let s=0;switch(this.zt.Mc){case"top":s=0;break;case"center":s=Math.max((n.height-r)/2,0);break;case"bottom":s=Math.max(n.height-r,0)}i.fillStyle=this.zt.V;for(const l of this.zt.bc){i.save();let c=0;switch(this.zt.xc){case"left":i.textAlign="left",c=l.gc/2;break;case"center":i.textAlign="center",c=n.width/2;break;case"right":i.textAlign="right",c=n.width-1-l.gc/2}i.translate(c,s),i.textBaseline="top",i.font=l.R,i.scale(l.Zu,l.Zu),i.fillText(l.Kt,0,l.Sc),i.restore(),s+=l.gc*l.Zu}}wc(e,i){const n=this.kc(e.font);let r=n.get(i);return r===void 0&&(r=e.measureText(i).width,n.set(i,r)),r}kc(e){let i=this.mc.get(e);return i===void 0&&(i=new Map,this.mc.set(e,i)),i}}class m2{constructor(e){this.ft=!0,this.Ft={yt:!1,V:"",bc:[],Mc:"center",xc:"center"},this.Wt=new p2(this.Ft),this.jt=e}bt(){this.ft=!0}gt(){return this.ft&&(this.Mt(),this.ft=!1),this.Wt}Mt(){const e=this.jt.W(),i=this.Ft;i.yt=e.visible,i.yt&&(i.V=e.color,i.xc=e.horzAlign,i.Mc=e.vertAlign,i.bc=[{Kt:e.text,R:yn(e.fontSize,e.fontFamily,e.fontStyle),gc:1.2*e.fontSize,Sc:0,Zu:0}])}}class g2 extends Vc{constructor(e,i){super(),this.cn=i,this.wn=new m2(this)}Rn(){return[]}Pn(){return[this.wn]}W(){return this.cn}Vn(){this.wn.bt()}}var Zh,ed,td,id,nd;(function(t){t[t.OnTouchEnd=0]="OnTouchEnd",t[t.OnNextTap=1]="OnNextTap"})(Zh||(Zh={}));class v2{constructor(e,i,n){this.yc=[],this.Cc=[],this.__=0,this.Tc=null,this.Pc=new pe,this.Rc=new pe,this.Dc=null,this.Vc=e,this.cn=i,this.q_=n,this.Oc=new Q1(this),this.yl=new d2(this,i.timeScale,this.cn.localization,n),this.vt=new ay(this,i.crosshair),this.Bc=new t2(i.crosshair),this.Ac=new g2(this,i.watermark),this.Ic(),this.yc[0].x_(2e3),this.zc=this.Lc(0),this.Ec=this.Lc(1)}Kl(){this.Nc(Ne.es())}Uh(){this.Nc(Ne.ss())}oa(){this.Nc(new Ne(1))}Gl(e){const i=this.Fc(e);this.Nc(i)}Wc(){return this.Tc}jc(e){const i=this.Tc;this.Tc=e,i!==null&&this.Gl(i.Hc),e!==null&&this.Gl(e.Hc)}W(){return this.cn}$h(e){vt(this.cn,e),this.yc.forEach(i=>i.b_(e)),e.timeScale!==void 0&&this.yl.$h(e.timeScale),e.localization!==void 0&&this.yl.yu(e.localization),(e.leftPriceScale||e.rightPriceScale)&&this.Pc.m(),this.zc=this.Lc(0),this.Ec=this.Lc(1),this.Kl()}$c(e,i){if(e==="left")return void this.$h({leftPriceScale:i});if(e==="right")return void this.$h({rightPriceScale:i});const n=this.Uc(e);n!==null&&(n.Dt.$h(i),this.Pc.m())}Uc(e){for(const i of this.yc){const n=i.w_(e);if(n!==null)return{Ht:i,Dt:n}}return null}St(){return this.yl}qc(){return this.yc}Yc(){return this.Ac}Zc(){return this.vt}Xc(){return this.Rc}Kc(e,i){e.Lo(i),this.Wu()}S_(e){this.__=e,this.yl.S_(this.__),this.yc.forEach(i=>i.S_(e)),this.Wu()}Ic(e){const i=new o2(this.yl,this);e!==void 0?this.yc.splice(e,0,i):this.yc.push(i);const n=e===void 0?this.yc.length-1:e,r=Ne.es();return r.Nn(n,{Fn:0,Wn:!0}),this.Nc(r),i}V_(e,i,n){e.V_(i,n)}O_(e,i,n){e.O_(i,n),this.Jl(),this.Nc(this.Gc(e,2))}B_(e,i){e.B_(i),this.Nc(this.Gc(e,2))}A_(e,i,n){i.Vo()||e.A_(i,n)}I_(e,i,n){i.Vo()||(e.I_(i,n),this.Jl(),this.Nc(this.Gc(e,2)))}z_(e,i){i.Vo()||(e.z_(i),this.Nc(this.Gc(e,2)))}E_(e,i){e.E_(i),this.Nc(this.Gc(e,2))}Jc(e){this.yl.Go(e)}Qc(e,i){const n=this.St();if(n.Ni()||i===0)return;const r=n.Hi();e=Math.max(1,Math.min(e,r)),n.Zu(e,i),this.Wu()}td(e){this.nd(0),this.sd(e),this.ed()}rd(e){this.yl.Jo(e),this.Wu()}hd(){this.yl.Qo(),this.Uh()}nd(e){this.yl.t_(e)}sd(e){this.yl.i_(e),this.Wu()}ed(){this.yl.n_(),this.Uh()}wt(){return this.Cc}ld(e,i,n,r,s){this.vt.gn(e,i);let l=NaN,c=this.yl.Nu(e);const o=this.yl.Xs();o!==null&&(c=Math.min(Math.max(o.Os(),c),o.ui()));const u=r.vn(),h=u.Ct();h!==null&&(l=u.pn(i,h)),l=this.Bc.Oa(l,c,r),this.vt.kn(c,l,r),this.oa(),s||this.Rc.m(this.vt.xt(),{x:e,y:i},n)}ad(e,i,n){const r=n.vn(),s=r.Ct(),l=r.Rt(e,C(s)),c=this.yl.Va(i,!0),o=this.yl.It(C(c));this.ld(o,l,null,n,!0)}od(e){this.Zc().Cn(),this.oa(),e||this.Rc.m(null,null,null)}Jl(){const e=this.vt.Ht();if(e!==null){const i=this.vt.xn(),n=this.vt.Sn();this.ld(i,n,null,e)}this.vt.Vn()}_d(e,i,n){const r=this.yl.mn(0);i!==void 0&&n!==void 0&&this.yl.bt(i,n);const s=this.yl.mn(0),l=this.yl.Eu(),c=this.yl.Xs();if(c!==null&&r!==null&&s!==null){const o=c.Kr(l),u=this.q_.key(r)>this.q_.key(s),h=e!==null&&e>l&&!u,d=this.yl.W().allowShiftVisibleRangeOnWhitespaceReplacement,f=o&&(n!==void 0||d)&&this.yl.W().shiftVisibleRangeOnNewBar;if(h&&!f){const m=e-l;this.yl.Jn(this.yl.Hu()-m)}}this.yl.Yu(e)}ia(e){e!==null&&e.F_()}dr(e){const i=this.yc.find(n=>n.Uo().includes(e));return i===void 0?null:i}Wu(){this.Ac.Vn(),this.yc.forEach(e=>e.F_()),this.Jl()}S(){this.yc.forEach(e=>e.S()),this.yc.length=0,this.cn.localization.priceFormatter=void 0,this.cn.localization.percentageFormatter=void 0,this.cn.localization.timeFormatter=void 0}ud(){return this.Oc}br(){return this.Oc.W()}g_(){return this.Pc}dd(e,i,n){const r=this.yc[0],s=this.fd(i,e,r,n);return this.Cc.push(s),this.Cc.length===1?this.Kl():this.Uh(),s}vd(e){const i=this.dr(e),n=this.Cc.indexOf(e);ci(n!==-1,"Series not found"),this.Cc.splice(n,1),C(i).Zo(e),e.S&&e.S()}Xl(e,i){const n=C(this.dr(e));n.Zo(e);const r=this.Uc(i);if(r===null){const s=e.Xi();n.qo(e,i,s)}else{const s=r.Ht===n?e.Xi():void 0;r.Ht.qo(e,i,s)}}hc(){const e=Ne.ss();e.$n(),this.Nc(e)}pd(e){const i=Ne.ss();i.Yn(e),this.Nc(i)}Kn(){const e=Ne.ss();e.Kn(),this.Nc(e)}Gn(e){const i=Ne.ss();i.Gn(e),this.Nc(i)}Jn(e){const i=Ne.ss();i.Jn(e),this.Nc(i)}Zn(e){const i=Ne.ss();i.Zn(e),this.Nc(i)}Un(){const e=Ne.ss();e.Un(),this.Nc(e)}md(){return this.cn.rightPriceScale.visible?"right":"left"}bd(){return this.Ec}q(){return this.zc}Bt(e){const i=this.Ec,n=this.zc;if(i===n)return i;if(e=Math.max(0,Math.min(100,Math.round(100*e))),this.Dc===null||this.Dc.Ps!==n||this.Dc.Rs!==i)this.Dc={Ps:n,Rs:i,wd:new Map};else{const s=this.Dc.wd.get(e);if(s!==void 0)return s}const r=function(s,l,c){const[o,u,h,d]=kr(s),[f,m,g,p]=kr(l),w=[et(o+c*(f-o)),et(u+c*(m-u)),et(h+c*(g-h)),mm(d+c*(p-d))];return`rgba(${w[0]}, ${w[1]}, ${w[2]}, ${w[3]})`}(n,i,e/100);return this.Dc.wd.set(e,r),r}Gc(e,i){const n=new Ne(i);if(e!==null){const r=this.yc.indexOf(e);n.Nn(r,{Fn:i})}return n}Fc(e,i){return i===void 0&&(i=2),this.Gc(this.dr(e),i)}Nc(e){this.Vc&&this.Vc(e),this.yc.forEach(i=>i.j_().qh().bt())}fd(e,i,n,r){const s=new qc(this,e,i,n,r),l=e.priceScaleId!==void 0?e.priceScaleId:this.md();return n.qo(s,l),Ma(l)||s.$h(e),s}Lc(e){const i=this.cn.layout;return i.background.type==="gradient"?e===0?i.background.topColor:i.background.bottomColor:i.background.color}}function Eo(t){return!St(t)&&!$r(t)}function Rm(t){return St(t)}(function(t){t[t.Disabled=0]="Disabled",t[t.Continuous=1]="Continuous",t[t.OnDataUpdate=2]="OnDataUpdate"})(ed||(ed={})),function(t){t[t.LastBar=0]="LastBar",t[t.LastVisible=1]="LastVisible"}(td||(td={})),function(t){t.Solid="solid",t.VerticalGradient="gradient"}(id||(id={})),function(t){t[t.Year=0]="Year",t[t.Month=1]="Month",t[t.DayOfMonth=2]="DayOfMonth",t[t.Time=3]="Time",t[t.TimeWithSeconds=4]="TimeWithSeconds"}(nd||(nd={}));const rd=t=>t.getUTCFullYear();function x2(t,e,i){return e.replace(/yyyy/g,(n=>Lt(rd(n),4))(t)).replace(/yy/g,(n=>Lt(rd(n)%100,2))(t)).replace(/MMMM/g,((n,r)=>new Date(n.getUTCFullYear(),n.getUTCMonth(),1).toLocaleString(r,{month:"long"}))(t,i)).replace(/MMM/g,((n,r)=>new Date(n.getUTCFullYear(),n.getUTCMonth(),1).toLocaleString(r,{month:"short"}))(t,i)).replace(/MM/g,(n=>Lt((r=>r.getUTCMonth()+1)(n),2))(t)).replace(/dd/g,(n=>Lt((r=>r.getUTCDate())(n),2))(t))}class $m{constructor(e="yyyy-MM-dd",i="default"){this.gd=e,this.Md=i}Y_(e){return x2(e,this.gd,this.Md)}}class y2{constructor(e){this.xd=e||"%h:%m:%s"}Y_(e){return this.xd.replace("%h",Lt(e.getUTCHours(),2)).replace("%m",Lt(e.getUTCMinutes(),2)).replace("%s",Lt(e.getUTCSeconds(),2))}}const w2={Sd:"yyyy-MM-dd",kd:"%h:%m:%s",yd:" ",Cd:"default"};class b2{constructor(e={}){const i=Object.assign(Object.assign({},w2),e);this.Td=new $m(i.Sd,i.Cd),this.Pd=new y2(i.kd),this.Rd=i.yd}Y_(e){return`${this.Td.Y_(e)}${this.Rd}${this.Pd.Y_(e)}`}}function os(t){return 60*t*60*1e3}function pl(t){return 60*t*1e3}const cs=[{Dd:(sd=1,1e3*sd),Vd:10},{Dd:pl(1),Vd:20},{Dd:pl(5),Vd:21},{Dd:pl(30),Vd:22},{Dd:os(1),Vd:30},{Dd:os(3),Vd:31},{Dd:os(6),Vd:32},{Dd:os(12),Vd:33}];var sd;function ad(t,e){if(t.getUTCFullYear()!==e.getUTCFullYear())return 70;if(t.getUTCMonth()!==e.getUTCMonth())return 60;if(t.getUTCDate()!==e.getUTCDate())return 50;for(let i=cs.length-1;i>=0;--i)if(Math.floor(e.getTime()/cs[i].Dd)!==Math.floor(t.getTime()/cs[i].Dd))return cs[i].Vd;return 0}function ml(t){let e=t;if($r(t)&&(e=Kc(t)),!Eo(e))throw new Error("time must be of type BusinessDay");const i=new Date(Date.UTC(e.year,e.month-1,e.day,0,0,0,0));return{Od:Math.round(i.getTime()/1e3),Bd:e}}function ld(t){if(!Rm(t))throw new Error("time must be of type isUTCTimestamp");return{Od:t}}function Kc(t){const e=new Date(t);if(isNaN(e.getTime()))throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);return{day:e.getUTCDate(),month:e.getUTCMonth()+1,year:e.getUTCFullYear()}}function od(t){$r(t.time)&&(t.time=Kc(t.time))}class cd{options(){return this.cn}setOptions(e){this.cn=e,this.updateFormatter(e.localization)}preprocessData(e){Array.isArray(e)?function(i){i.forEach(od)}(e):od(e)}createConverterToInternalObj(e){return C(function(i){return i.length===0?null:Eo(i[0].time)||$r(i[0].time)?ml:ld}(e))}key(e){return typeof e=="object"&&"Od"in e?e.Od:this.key(this.convertHorzItemToInternal(e))}cacheKey(e){const i=e;return i.Bd===void 0?new Date(1e3*i.Od).getTime():new Date(Date.UTC(i.Bd.year,i.Bd.month-1,i.Bd.day)).getTime()}convertHorzItemToInternal(e){return Rm(i=e)?ld(i):Eo(i)?ml(i):ml(Kc(i));var i}updateFormatter(e){if(!this.cn)return;const i=e.dateFormat;this.cn.timeScale.timeVisible?this.Ad=new b2({Sd:i,kd:this.cn.timeScale.secondsVisible?"%h:%m:%s":"%h:%m",yd:"   ",Cd:e.locale}):this.Ad=new $m(i,e.locale)}formatHorzItem(e){const i=e;return this.Ad.Y_(new Date(1e3*i.Od))}formatTickmark(e,i){const n=function(s,l,c){switch(s){case 0:case 10:return l?c?4:3:2;case 20:case 21:case 22:case 30:case 31:case 32:case 33:return l?3:2;case 50:return 2;case 60:return 1;case 70:return 0}}(e.weight,this.cn.timeScale.timeVisible,this.cn.timeScale.secondsVisible),r=this.cn.timeScale;if(r.tickMarkFormatter!==void 0){const s=r.tickMarkFormatter(e.originalTime,n,i.locale);if(s!==null)return s}return function(s,l,c){const o={};switch(l){case 0:o.year="numeric";break;case 1:o.month="short";break;case 2:o.day="numeric";break;case 3:o.hour12=!1,o.hour="2-digit",o.minute="2-digit";break;case 4:o.hour12=!1,o.hour="2-digit",o.minute="2-digit",o.second="2-digit"}const u=s.Bd===void 0?new Date(1e3*s.Od):new Date(Date.UTC(s.Bd.year,s.Bd.month-1,s.Bd.day));return new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()).toLocaleString(c,o)}(e.time,n,i.locale)}maxTickMarkWeight(e){let i=e.reduce(h2,e[0]).weight;return i>30&&i<50&&(i=30),i}fillWeightsForPoints(e,i){(function(n,r=0){if(n.length===0)return;let s=r===0?null:n[r-1].time.Od,l=s!==null?new Date(1e3*s):null,c=0;for(let o=r;o<n.length;++o){const u=n[o],h=new Date(1e3*u.time.Od);l!==null&&(u.timeWeight=ad(h,l)),c+=u.time.Od-(s||u.time.Od),s=u.time.Od,l=h}if(r===0&&n.length>1){const o=Math.ceil(c/(n.length-1)),u=new Date(1e3*(n[0].time.Od-o));n[0].timeWeight=ad(new Date(1e3*n[0].time.Od),u)}})(e,i)}static Id(e){return vt({localization:{dateFormat:"dd MMM 'yy"}},e??{})}}const wn=typeof window<"u";function ud(){return!!wn&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1}function gl(){return!!wn&&/iPhone|iPad|iPod/.test(window.navigator.platform)}function zo(t){return t+t%2}function vl(t,e){return t.zd-e.zd}function xl(t,e,i){const n=(t.zd-e.zd)/(t.ot-e.ot);return Math.sign(n)*Math.min(Math.abs(n),i)}class k2{constructor(e,i,n,r){this.Ld=null,this.Ed=null,this.Nd=null,this.Fd=null,this.Wd=null,this.jd=0,this.Hd=0,this.$d=e,this.Ud=i,this.qd=n,this.rs=r}Yd(e,i){if(this.Ld!==null){if(this.Ld.ot===i)return void(this.Ld.zd=e);if(Math.abs(this.Ld.zd-e)<this.rs)return}this.Fd=this.Nd,this.Nd=this.Ed,this.Ed=this.Ld,this.Ld={ot:i,zd:e}}Vr(e,i){if(this.Ld===null||this.Ed===null||i-this.Ld.ot>50)return;let n=0;const r=xl(this.Ld,this.Ed,this.Ud),s=vl(this.Ld,this.Ed),l=[r],c=[s];if(n+=s,this.Nd!==null){const u=xl(this.Ed,this.Nd,this.Ud);if(Math.sign(u)===Math.sign(r)){const h=vl(this.Ed,this.Nd);if(l.push(u),c.push(h),n+=h,this.Fd!==null){const d=xl(this.Nd,this.Fd,this.Ud);if(Math.sign(d)===Math.sign(r)){const f=vl(this.Nd,this.Fd);l.push(d),c.push(f),n+=f}}}}let o=0;for(let u=0;u<l.length;++u)o+=c[u]/n*l[u];Math.abs(o)<this.$d||(this.Wd={zd:e,ot:i},this.Hd=o,this.jd=function(u,h){const d=Math.log(h);return Math.log(1*d/-u)/d}(Math.abs(o),this.qd))}tc(e){const i=C(this.Wd),n=e-i.ot;return i.zd+this.Hd*(Math.pow(this.qd,n)-1)/Math.log(this.qd)}Qu(e){return this.Wd===null||this.Zd(e)===this.jd}Zd(e){const i=e-C(this.Wd).ot;return Math.min(i,this.jd)}}class j2{constructor(e,i){this.Xd=void 0,this.Kd=void 0,this.Gd=void 0,this.en=!1,this.Jd=e,this.Qd=i,this.tf()}bt(){this.tf()}if(){this.Xd&&this.Jd.removeChild(this.Xd),this.Kd&&this.Jd.removeChild(this.Kd),this.Xd=void 0,this.Kd=void 0}nf(){return this.en!==this.sf()||this.Gd!==this.ef()}ef(){return gm(kr(this.Qd.W().layout.textColor))>160?"dark":"light"}sf(){return this.Qd.W().layout.attributionLogo}rf(){const e=new URL(location.href);return e.hostname?"&utm_source="+e.hostname+e.pathname:""}tf(){this.nf()&&(this.if(),this.en=this.sf(),this.en&&(this.Gd=this.ef(),this.Kd=document.createElement("style"),this.Kd.innerText="a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}",this.Xd=document.createElement("a"),this.Xd.href=`https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.rf()}`,this.Xd.title="Charting by TradingView",this.Xd.id="tv-attr-logo",this.Xd.target="_blank",this.Xd.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 19" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>',this.Xd.toggleAttribute("data-dark",this.Gd==="dark"),this.Jd.appendChild(this.Kd),this.Jd.appendChild(this.Xd)))}}function $i(t,e){const i=C(t.ownerDocument).createElement("canvas");t.appendChild(i);const n=R1(i,{options:{allowResizeObserver:!1},transform:(r,s)=>({width:Math.max(r.width,s.width),height:Math.max(r.height,s.height)})});return n.resizeCanvasElement(e),n}function Di(t){var e;t.width=1,t.height=1,(e=t.getContext("2d"))===null||e===void 0||e.clearRect(0,0,1,1)}function Mo(t,e,i,n){t.gl&&t.gl(e,i,n)}function Ts(t,e,i,n){t.X(e,i,n)}function _o(t,e,i,n){const r=t(i,n);for(const s of r){const l=s.gt();l!==null&&e(l)}}function S2(t){wn&&window.chrome!==void 0&&t.addEventListener("mousedown",e=>{if(e.button===1)return e.preventDefault(),!1})}class Xc{constructor(e,i,n){this.hf=0,this.lf=null,this.af={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY},this._f=0,this.uf=null,this.cf={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY},this.df=null,this.ff=!1,this.vf=null,this.pf=null,this.mf=!1,this.bf=!1,this.wf=!1,this.gf=null,this.Mf=null,this.xf=null,this.Sf=null,this.kf=null,this.yf=null,this.Cf=null,this.Tf=0,this.Pf=!1,this.Rf=!1,this.Df=!1,this.Vf=0,this.Of=null,this.Bf=!gl(),this.Af=r=>{this.If(r)},this.zf=r=>{if(this.Lf(r)){const s=this.Ef(r);if(++this._f,this.uf&&this._f>1){const{Nf:l}=this.Ff(bt(r),this.cf);l<30&&!this.wf&&this.Wf(s,this.Hf.jf),this.$f()}}else{const s=this.Ef(r);if(++this.hf,this.lf&&this.hf>1){const{Nf:l}=this.Ff(bt(r),this.af);l<5&&!this.bf&&this.Uf(s,this.Hf.qf),this.Yf()}}},this.Zf=e,this.Hf=i,this.cn=n,this.Xf()}S(){this.gf!==null&&(this.gf(),this.gf=null),this.Mf!==null&&(this.Mf(),this.Mf=null),this.Sf!==null&&(this.Sf(),this.Sf=null),this.kf!==null&&(this.kf(),this.kf=null),this.yf!==null&&(this.yf(),this.yf=null),this.xf!==null&&(this.xf(),this.xf=null),this.Kf(),this.Yf()}Gf(e){this.Sf&&this.Sf();const i=this.Jf.bind(this);if(this.Sf=()=>{this.Zf.removeEventListener("mousemove",i)},this.Zf.addEventListener("mousemove",i),this.Lf(e))return;const n=this.Ef(e);this.Uf(n,this.Hf.Qf),this.Bf=!0}Yf(){this.lf!==null&&clearTimeout(this.lf),this.hf=0,this.lf=null,this.af={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY}}$f(){this.uf!==null&&clearTimeout(this.uf),this._f=0,this.uf=null,this.cf={nt:Number.NEGATIVE_INFINITY,st:Number.POSITIVE_INFINITY}}Jf(e){if(this.Df||this.pf!==null||this.Lf(e))return;const i=this.Ef(e);this.Uf(i,this.Hf.tv),this.Bf=!0}iv(e){const i=yl(e.changedTouches,C(this.Of));if(i===null||(this.Vf=us(e),this.Cf!==null)||this.Rf)return;this.Pf=!0;const n=this.Ff(bt(i),C(this.pf)),{nv:r,sv:s,Nf:l}=n;if(this.mf||!(l<5)){if(!this.mf){const c=.5*r,o=s>=c&&!this.cn.ev(),u=c>s&&!this.cn.rv();o||u||(this.Rf=!0),this.mf=!0,this.wf=!0,this.Kf(),this.$f()}if(!this.Rf){const c=this.Ef(e,i);this.Wf(c,this.Hf.hv),Fi(e)}}}lv(e){if(e.button!==0)return;const i=this.Ff(bt(e),C(this.vf)),{Nf:n}=i;if(n>=5&&(this.bf=!0,this.Yf()),this.bf){const r=this.Ef(e);this.Uf(r,this.Hf.av)}}Ff(e,i){const n=Math.abs(i.nt-e.nt),r=Math.abs(i.st-e.st);return{nv:n,sv:r,Nf:n+r}}ov(e){let i=yl(e.changedTouches,C(this.Of));if(i===null&&e.touches.length===0&&(i=e.changedTouches[0]),i===null)return;this.Of=null,this.Vf=us(e),this.Kf(),this.pf=null,this.yf&&(this.yf(),this.yf=null);const n=this.Ef(e,i);if(this.Wf(n,this.Hf._v),++this._f,this.uf&&this._f>1){const{Nf:r}=this.Ff(bt(i),this.cf);r<30&&!this.wf&&this.Wf(n,this.Hf.jf),this.$f()}else this.wf||(this.Wf(n,this.Hf.uv),this.Hf.uv&&Fi(e));this._f===0&&Fi(e),e.touches.length===0&&this.ff&&(this.ff=!1,Fi(e))}If(e){if(e.button!==0)return;const i=this.Ef(e);if(this.vf=null,this.Df=!1,this.kf&&(this.kf(),this.kf=null),ud()&&this.Zf.ownerDocument.documentElement.removeEventListener("mouseleave",this.Af),!this.Lf(e))if(this.Uf(i,this.Hf.cv),++this.hf,this.lf&&this.hf>1){const{Nf:n}=this.Ff(bt(e),this.af);n<5&&!this.bf&&this.Uf(i,this.Hf.qf),this.Yf()}else this.bf||this.Uf(i,this.Hf.dv)}Kf(){this.df!==null&&(clearTimeout(this.df),this.df=null)}fv(e){if(this.Of!==null)return;const i=e.changedTouches[0];this.Of=i.identifier,this.Vf=us(e);const n=this.Zf.ownerDocument.documentElement;this.wf=!1,this.mf=!1,this.Rf=!1,this.pf=bt(i),this.yf&&(this.yf(),this.yf=null);{const s=this.iv.bind(this),l=this.ov.bind(this);this.yf=()=>{n.removeEventListener("touchmove",s),n.removeEventListener("touchend",l)},n.addEventListener("touchmove",s,{passive:!1}),n.addEventListener("touchend",l,{passive:!1}),this.Kf(),this.df=setTimeout(this.vv.bind(this,e),240)}const r=this.Ef(e,i);this.Wf(r,this.Hf.pv),this.uf||(this._f=0,this.uf=setTimeout(this.$f.bind(this),500),this.cf=bt(i))}mv(e){if(e.button!==0)return;const i=this.Zf.ownerDocument.documentElement;ud()&&i.addEventListener("mouseleave",this.Af),this.bf=!1,this.vf=bt(e),this.kf&&(this.kf(),this.kf=null);{const r=this.lv.bind(this),s=this.If.bind(this);this.kf=()=>{i.removeEventListener("mousemove",r),i.removeEventListener("mouseup",s)},i.addEventListener("mousemove",r),i.addEventListener("mouseup",s)}if(this.Df=!0,this.Lf(e))return;const n=this.Ef(e);this.Uf(n,this.Hf.bv),this.lf||(this.hf=0,this.lf=setTimeout(this.Yf.bind(this),500),this.af=bt(e))}Xf(){this.Zf.addEventListener("mouseenter",this.Gf.bind(this)),this.Zf.addEventListener("touchcancel",this.Kf.bind(this));{const e=this.Zf.ownerDocument,i=n=>{this.Hf.wv&&(n.composed&&this.Zf.contains(n.composedPath()[0])||n.target&&this.Zf.contains(n.target)||this.Hf.wv())};this.Mf=()=>{e.removeEventListener("touchstart",i)},this.gf=()=>{e.removeEventListener("mousedown",i)},e.addEventListener("mousedown",i),e.addEventListener("touchstart",i,{passive:!0})}gl()&&(this.xf=()=>{this.Zf.removeEventListener("dblclick",this.zf)},this.Zf.addEventListener("dblclick",this.zf)),this.Zf.addEventListener("mouseleave",this.gv.bind(this)),this.Zf.addEventListener("touchstart",this.fv.bind(this),{passive:!0}),S2(this.Zf),this.Zf.addEventListener("mousedown",this.mv.bind(this)),this.Mv(),this.Zf.addEventListener("touchmove",()=>{},{passive:!1})}Mv(){this.Hf.xv===void 0&&this.Hf.Sv===void 0&&this.Hf.kv===void 0||(this.Zf.addEventListener("touchstart",e=>this.yv(e.touches),{passive:!0}),this.Zf.addEventListener("touchmove",e=>{if(e.touches.length===2&&this.Cf!==null&&this.Hf.Sv!==void 0){const i=hd(e.touches[0],e.touches[1])/this.Tf;this.Hf.Sv(this.Cf,i),Fi(e)}},{passive:!1}),this.Zf.addEventListener("touchend",e=>{this.yv(e.touches)}))}yv(e){e.length===1&&(this.Pf=!1),e.length!==2||this.Pf||this.ff?this.Cv():this.Tv(e)}Tv(e){const i=this.Zf.getBoundingClientRect()||{left:0,top:0};this.Cf={nt:(e[0].clientX-i.left+(e[1].clientX-i.left))/2,st:(e[0].clientY-i.top+(e[1].clientY-i.top))/2},this.Tf=hd(e[0],e[1]),this.Hf.xv!==void 0&&this.Hf.xv(),this.Kf()}Cv(){this.Cf!==null&&(this.Cf=null,this.Hf.kv!==void 0&&this.Hf.kv())}gv(e){if(this.Sf&&this.Sf(),this.Lf(e)||!this.Bf)return;const i=this.Ef(e);this.Uf(i,this.Hf.Pv),this.Bf=!gl()}vv(e){const i=yl(e.touches,C(this.Of));if(i===null)return;const n=this.Ef(e,i);this.Wf(n,this.Hf.Rv),this.wf=!0,this.ff=!0}Lf(e){return e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents!==void 0?e.sourceCapabilities.firesTouchEvents:us(e)<this.Vf+500}Wf(e,i){i&&i.call(this.Hf,e)}Uf(e,i){i&&i.call(this.Hf,e)}Ef(e,i){const n=i||e,r=this.Zf.getBoundingClientRect()||{left:0,top:0};return{clientX:n.clientX,clientY:n.clientY,pageX:n.pageX,pageY:n.pageY,screenX:n.screenX,screenY:n.screenY,localX:n.clientX-r.left,localY:n.clientY-r.top,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey,Dv:!e.type.startsWith("mouse")&&e.type!=="contextmenu"&&e.type!=="click",Vv:e.type,Ov:n.target,Bv:e.view,Av:()=>{e.type!=="touchstart"&&Fi(e)}}}}function hd(t,e){const i=t.clientX-e.clientX,n=t.clientY-e.clientY;return Math.sqrt(i*i+n*n)}function Fi(t){t.cancelable&&t.preventDefault()}function bt(t){return{nt:t.pageX,st:t.pageY}}function us(t){return t.timeStamp||performance.now()}function yl(t,e){for(let i=0;i<t.length;++i)if(t[i].identifier===e)return t[i];return null}function hs(t){return{Hc:t.Hc,Iv:{gr:t.zv.externalId},Lv:t.zv.cursorStyle}}function N2(t,e,i){for(const n of t){const r=n.gt();if(r!==null&&r.wr){const s=r.wr(e,i);if(s!==null)return{Bv:n,Iv:s}}}return null}function wl(t,e){return i=>{var n,r,s,l;return((r=(n=i.Dt())===null||n===void 0?void 0:n.Pa())!==null&&r!==void 0?r:"")!==e?[]:(l=(s=i.da)===null||s===void 0?void 0:s.call(i,t))!==null&&l!==void 0?l:[]}}function dd(t,e,i,n){if(!t.length)return;let r=0;const s=i/2,l=t[0].At(n,!0);let c=e===1?s-(t[0].Vi()-l/2):t[0].Vi()-l/2-s;c=Math.max(0,c);for(let o=1;o<t.length;o++){const u=t[o],h=t[o-1],d=h.At(n,!1),f=u.Vi(),m=h.Vi();if(e===1?f>m-d:f<m+d){const g=m-d*e;u.Oi(g);const p=g-e*d/2;if((e===1?p<0:p>i)&&c>0){const w=e===1?-1-p:p-i,v=Math.min(w,c);for(let x=r;x<t.length;x++)t[x].Oi(t[x].Vi()+e*v);c-=v}}else r=o,c=e===1?m-d-f:f-(m+d)}}class fd{constructor(e,i,n,r){this.Li=null,this.Ev=null,this.Nv=!1,this.Fv=new Nr(200),this.Qr=null,this.Wv=0,this.jv=!1,this.Hv=()=>{this.jv||this.tn.$v().$t().Uh()},this.Uv=()=>{this.jv||this.tn.$v().$t().Uh()},this.tn=e,this.cn=i,this.ko=i.layout,this.Oc=n,this.qv=r==="left",this.Yv=wl("normal",r),this.Zv=wl("top",r),this.Xv=wl("bottom",r),this.Kv=document.createElement("div"),this.Kv.style.height="100%",this.Kv.style.overflow="hidden",this.Kv.style.width="25px",this.Kv.style.left="0",this.Kv.style.position="relative",this.Gv=$i(this.Kv,ie({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);const s=this.Gv.canvasElement;s.style.position="absolute",s.style.zIndex="1",s.style.left="0",s.style.top="0",this.Jv=$i(this.Kv,ie({width:16,height:16})),this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);const l=this.Jv.canvasElement;l.style.position="absolute",l.style.zIndex="2",l.style.left="0",l.style.top="0";const c={bv:this.Qv.bind(this),pv:this.Qv.bind(this),av:this.tp.bind(this),hv:this.tp.bind(this),wv:this.ip.bind(this),cv:this.np.bind(this),_v:this.np.bind(this),qf:this.sp.bind(this),jf:this.sp.bind(this),Qf:this.ep.bind(this),Pv:this.rp.bind(this)};this.hp=new Xc(this.Jv.canvasElement,c,{ev:()=>!this.cn.handleScroll.vertTouchDrag,rv:()=>!0})}S(){this.hp.S(),this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv),Di(this.Jv.canvasElement),this.Jv.dispose(),this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Di(this.Gv.canvasElement),this.Gv.dispose(),this.Li!==null&&this.Li.Ko().p(this),this.Li=null}lp(){return this.Kv}P(){return this.ko.fontSize}ap(){const e=this.Oc.W();return this.Qr!==e.R&&(this.Fv.nr(),this.Qr=e.R),e}op(){if(this.Li===null)return 0;let e=0;const i=this.ap(),n=C(this.Gv.canvasElement.getContext("2d"));n.save();const r=this.Li.Ha();n.font=this._p(),r.length>0&&(e=Math.max(this.Fv.xi(n,r[0].so),this.Fv.xi(n,r[r.length-1].so)));const s=this.up();for(let u=s.length;u--;){const h=this.Fv.xi(n,s[u].Kt());h>e&&(e=h)}const l=this.Li.Ct();if(l!==null&&this.Ev!==null&&(c=this.cn.crosshair).mode!==2&&c.horzLine.visible&&c.horzLine.labelVisible){const u=this.Li.pn(1,l),h=this.Li.pn(this.Ev.height-2,l);e=Math.max(e,this.Fv.xi(n,this.Li.Fi(Math.floor(Math.min(u,h))+.11111111111111,l)),this.Fv.xi(n,this.Li.Fi(Math.ceil(Math.max(u,h))-.11111111111111,l)))}var c;n.restore();const o=e||34;return zo(Math.ceil(i.C+i.T+i.A+i.I+5+o))}cp(e){this.Ev!==null&&Ni(this.Ev,e)||(this.Ev=e,this.jv=!0,this.Gv.resizeCanvasElement(e),this.Jv.resizeCanvasElement(e),this.jv=!1,this.Kv.style.width=`${e.width}px`,this.Kv.style.height=`${e.height}px`)}dp(){return C(this.Ev).width}Gi(e){this.Li!==e&&(this.Li!==null&&this.Li.Ko().p(this),this.Li=e,e.Ko().l(this.fo.bind(this),this))}Dt(){return this.Li}nr(){const e=this.tn.fp();this.tn.$v().$t().E_(e,C(this.Dt()))}vp(e){if(this.Ev===null)return;if(e!==1){this.pp(),this.Gv.applySuggestedBitmapSize();const n=Li(this.Gv);n!==null&&(n.useBitmapCoordinateSpace(r=>{this.mp(r),this.Ie(r)}),this.tn.bp(n,this.Xv),this.wp(n),this.tn.bp(n,this.Yv),this.gp(n))}this.Jv.applySuggestedBitmapSize();const i=Li(this.Jv);i!==null&&(i.useBitmapCoordinateSpace(({context:n,bitmapSize:r})=>{n.clearRect(0,0,r.width,r.height)}),this.Mp(i),this.tn.bp(i,this.Zv))}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const r=this.xp();r.width>0&&r.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}bt(){var e;(e=this.Li)===null||e===void 0||e.Ha()}Qv(e){if(this.Li===null||this.Li.Ni()||!this.cn.handleScale.axisPressedMouseMove.price)return;const i=this.tn.$v().$t(),n=this.tn.fp();this.Nv=!0,i.V_(n,this.Li,e.localY)}tp(e){if(this.Li===null||!this.cn.handleScale.axisPressedMouseMove.price)return;const i=this.tn.$v().$t(),n=this.tn.fp(),r=this.Li;i.O_(n,r,e.localY)}ip(){if(this.Li===null||!this.cn.handleScale.axisPressedMouseMove.price)return;const e=this.tn.$v().$t(),i=this.tn.fp(),n=this.Li;this.Nv&&(this.Nv=!1,e.B_(i,n))}np(e){if(this.Li===null||!this.cn.handleScale.axisPressedMouseMove.price)return;const i=this.tn.$v().$t(),n=this.tn.fp();this.Nv=!1,i.B_(n,this.Li)}sp(e){this.cn.handleScale.axisDoubleClickReset.price&&this.nr()}ep(e){this.Li!==null&&(!this.tn.$v().$t().W().handleScale.axisPressedMouseMove.price||this.Li.Mh()||this.Li.Oo()||this.kp(1))}rp(e){this.kp(0)}up(){const e=[],i=this.Li===null?void 0:this.Li;return(n=>{for(let r=0;r<n.length;++r){const s=n[r].Rn(this.tn.fp(),i);for(let l=0;l<s.length;l++)e.push(s[l])}})(this.tn.fp().Uo()),e}mp({context:e,bitmapSize:i}){const{width:n,height:r}=i,s=this.tn.fp().$t(),l=s.q(),c=s.bd();l===c?Ea(e,0,0,n,r,l):vm(e,0,0,n,r,l,c)}Ie({context:e,bitmapSize:i,horizontalPixelRatio:n}){if(this.Ev===null||this.Li===null||!this.Li.W().borderVisible)return;e.fillStyle=this.Li.W().borderColor;const r=Math.max(1,Math.floor(this.ap().C*n));let s;s=this.qv?i.width-r:0,e.fillRect(s,0,r,i.height)}wp(e){if(this.Ev===null||this.Li===null)return;const i=this.Li.Ha(),n=this.Li.W(),r=this.ap(),s=this.qv?this.Ev.width-r.T:0;n.borderVisible&&n.ticksVisible&&e.useBitmapCoordinateSpace(({context:l,horizontalPixelRatio:c,verticalPixelRatio:o})=>{l.fillStyle=n.borderColor;const u=Math.max(1,Math.floor(o)),h=Math.floor(.5*o),d=Math.round(r.T*c);l.beginPath();for(const f of i)l.rect(Math.floor(s*c),Math.round(f.Ea*o)-h,d,u);l.fill()}),e.useMediaCoordinateSpace(({context:l})=>{var c;l.font=this._p(),l.fillStyle=(c=n.textColor)!==null&&c!==void 0?c:this.ko.textColor,l.textAlign=this.qv?"right":"left",l.textBaseline="middle";const o=this.qv?Math.round(s-r.A):Math.round(s+r.T+r.A),u=i.map(h=>this.Fv.Mi(l,h.so));for(let h=i.length;h--;){const d=i[h];l.fillText(d.so,o,d.Ea+u[h])}})}pp(){if(this.Ev===null||this.Li===null)return;const e=[],i=this.Li.Uo().slice(),n=this.tn.fp(),r=this.ap();this.Li===n.pr()&&this.tn.fp().Uo().forEach(l=>{n.vr(l)&&i.push(l)});const s=this.Li;i.forEach(l=>{l.Rn(n,s).forEach(c=>{c.Oi(null),c.Bi()&&e.push(c)})}),e.forEach(l=>l.Oi(l.ki())),this.Li.W().alignLabels&&this.yp(e,r)}yp(e,i){if(this.Ev===null)return;const n=this.Ev.height/2,r=e.filter(l=>l.ki()<=n),s=e.filter(l=>l.ki()>n);r.sort((l,c)=>c.ki()-l.ki()),s.sort((l,c)=>l.ki()-c.ki());for(const l of e){const c=Math.floor(l.At(i)/2),o=l.ki();o>-c&&o<c&&l.Oi(c),o>this.Ev.height-c&&o<this.Ev.height+c&&l.Oi(this.Ev.height-c)}dd(r,1,this.Ev.height,i),dd(s,-1,this.Ev.height,i)}gp(e){if(this.Ev===null)return;const i=this.up(),n=this.ap(),r=this.qv?"right":"left";i.forEach(s=>{s.Ai()&&s.gt(C(this.Li)).X(e,n,this.Fv,r)})}Mp(e){if(this.Ev===null||this.Li===null)return;const i=this.tn.$v().$t(),n=[],r=this.tn.fp(),s=i.Zc().Rn(r,this.Li);s.length&&n.push(s);const l=this.ap(),c=this.qv?"right":"left";n.forEach(o=>{o.forEach(u=>{u.gt(C(this.Li)).X(e,l,this.Fv,c)})})}kp(e){this.Kv.style.cursor=e===1?"ns-resize":"default"}fo(){const e=this.op();this.Wv<e&&this.tn.$v().$t().Kl(),this.Wv=e}_p(){return yn(this.ko.fontSize,this.ko.fontFamily)}}function C2(t,e){var i,n;return(n=(i=t.ua)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}function ds(t,e){var i,n;return(n=(i=t.Pn)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}function E2(t,e){var i,n;return(n=(i=t.Ji)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}function z2(t,e){var i,n;return(n=(i=t.aa)===null||i===void 0?void 0:i.call(t,e))!==null&&n!==void 0?n:[]}class Qc{constructor(e,i){this.Ev=ie({width:0,height:0}),this.Cp=null,this.Tp=null,this.Pp=null,this.Rp=null,this.Dp=!1,this.Vp=new pe,this.Op=new pe,this.Bp=0,this.Ap=!1,this.Ip=null,this.zp=!1,this.Lp=null,this.Ep=null,this.jv=!1,this.Hv=()=>{this.jv||this.Np===null||this.$i().Uh()},this.Uv=()=>{this.jv||this.Np===null||this.$i().Uh()},this.Qd=e,this.Np=i,this.Np.W_().l(this.Fp.bind(this),this,!0),this.Wp=document.createElement("td"),this.Wp.style.padding="0",this.Wp.style.position="relative";const n=document.createElement("div");n.style.width="100%",n.style.height="100%",n.style.position="relative",n.style.overflow="hidden",this.jp=document.createElement("td"),this.jp.style.padding="0",this.Hp=document.createElement("td"),this.Hp.style.padding="0",this.Wp.appendChild(n),this.Gv=$i(n,ie({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);const r=this.Gv.canvasElement;r.style.position="absolute",r.style.zIndex="1",r.style.left="0",r.style.top="0",this.Jv=$i(n,ie({width:16,height:16})),this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);const s=this.Jv.canvasElement;s.style.position="absolute",s.style.zIndex="2",s.style.left="0",s.style.top="0",this.$p=document.createElement("tr"),this.$p.appendChild(this.jp),this.$p.appendChild(this.Wp),this.$p.appendChild(this.Hp),this.Up(),this.hp=new Xc(this.Jv.canvasElement,this,{ev:()=>this.Ip===null&&!this.Qd.W().handleScroll.vertTouchDrag,rv:()=>this.Ip===null&&!this.Qd.W().handleScroll.horzTouchDrag})}S(){this.Cp!==null&&this.Cp.S(),this.Tp!==null&&this.Tp.S(),this.Pp=null,this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv),Di(this.Jv.canvasElement),this.Jv.dispose(),this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Di(this.Gv.canvasElement),this.Gv.dispose(),this.Np!==null&&this.Np.W_().p(this),this.hp.S()}fp(){return C(this.Np)}qp(e){var i,n;this.Np!==null&&this.Np.W_().p(this),this.Np=e,this.Np!==null&&this.Np.W_().l(Qc.prototype.Fp.bind(this),this,!0),this.Up(),this.Qd.Yp().indexOf(this)===this.Qd.Yp().length-1?(this.Pp=(i=this.Pp)!==null&&i!==void 0?i:new j2(this.Wp,this.Qd),this.Pp.bt()):((n=this.Pp)===null||n===void 0||n.if(),this.Pp=null)}$v(){return this.Qd}lp(){return this.$p}Up(){if(this.Np!==null&&(this.Zp(),this.$i().wt().length!==0)){if(this.Cp!==null){const e=this.Np.R_();this.Cp.Gi(C(e))}if(this.Tp!==null){const e=this.Np.D_();this.Tp.Gi(C(e))}}}Xp(){this.Cp!==null&&this.Cp.bt(),this.Tp!==null&&this.Tp.bt()}M_(){return this.Np!==null?this.Np.M_():0}x_(e){this.Np&&this.Np.x_(e)}Qf(e){if(!this.Np)return;this.Kp();const i=e.localX,n=e.localY;this.Gp(i,n,e)}bv(e){this.Kp(),this.Jp(),this.Gp(e.localX,e.localY,e)}tv(e){var i;if(!this.Np)return;this.Kp();const n=e.localX,r=e.localY;this.Gp(n,r,e);const s=this.wr(n,r);this.Qd.Qp((i=s==null?void 0:s.Lv)!==null&&i!==void 0?i:null),this.$i().jc(s&&{Hc:s.Hc,Iv:s.Iv})}dv(e){this.Np!==null&&(this.Kp(),this.tm(e))}qf(e){this.Np!==null&&this.im(this.Op,e)}jf(e){this.qf(e)}av(e){this.Kp(),this.nm(e),this.Gp(e.localX,e.localY,e)}cv(e){this.Np!==null&&(this.Kp(),this.Ap=!1,this.sm(e))}uv(e){this.Np!==null&&this.tm(e)}Rv(e){if(this.Ap=!0,this.Ip===null){const i={x:e.localX,y:e.localY};this.rm(i,i,e)}}Pv(e){this.Np!==null&&(this.Kp(),this.Np.$t().jc(null),this.hm())}lm(){return this.Vp}am(){return this.Op}xv(){this.Bp=1,this.$i().Un()}Sv(e,i){if(!this.Qd.W().handleScale.pinch)return;const n=5*(i-this.Bp);this.Bp=i,this.$i().Qc(e.nt,n)}pv(e){this.Ap=!1,this.zp=this.Ip!==null,this.Jp();const i=this.$i().Zc();this.Ip!==null&&i.yt()&&(this.Lp={x:i.Yt(),y:i.Zt()},this.Ip={x:e.localX,y:e.localY})}hv(e){if(this.Np===null)return;const i=e.localX,n=e.localY;if(this.Ip===null)this.nm(e);else{this.zp=!1;const r=C(this.Lp),s=r.x+(i-this.Ip.x),l=r.y+(n-this.Ip.y);this.Gp(s,l,e)}}_v(e){this.$v().W().trackingMode.exitMode===0&&(this.zp=!0),this.om(),this.sm(e)}wr(e,i){const n=this.Np;return n===null?null:function(r,s,l){const c=r.Uo(),o=function(u,h,d){var f,m;let g,p;for(const x of u){const y=(m=(f=x.va)===null||f===void 0?void 0:f.call(x,h,d))!==null&&m!==void 0?m:[];for(const b of y)w=b.zOrder,(!(v=g==null?void 0:g.zOrder)||w==="top"&&v!=="top"||w==="normal"&&v==="bottom")&&(g=b,p=x)}var w,v;return g&&p?{zv:g,Hc:p}:null}(c,s,l);if((o==null?void 0:o.zv.zOrder)==="top")return hs(o);for(const u of c){if(o&&o.Hc===u&&o.zv.zOrder!=="bottom"&&!o.zv.isBackground)return hs(o);const h=N2(u.Pn(r),s,l);if(h!==null)return{Hc:u,Bv:h.Bv,Iv:h.Iv};if(o&&o.Hc===u&&o.zv.zOrder!=="bottom"&&o.zv.isBackground)return hs(o)}return o!=null&&o.zv?hs(o):null}(n,e,i)}_m(e,i){C(i==="left"?this.Cp:this.Tp).cp(ie({width:e,height:this.Ev.height}))}um(){return this.Ev}cp(e){Ni(this.Ev,e)||(this.Ev=e,this.jv=!0,this.Gv.resizeCanvasElement(e),this.Jv.resizeCanvasElement(e),this.jv=!1,this.Wp.style.width=e.width+"px",this.Wp.style.height=e.height+"px")}dm(){const e=C(this.Np);e.P_(e.R_()),e.P_(e.D_());for(const i of e.Ba())if(e.vr(i)){const n=i.Dt();n!==null&&e.P_(n),i.Vn()}}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const r=this.xp();r.width>0&&r.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}vp(e){if(e===0||this.Np===null)return;if(e>1&&this.dm(),this.Cp!==null&&this.Cp.vp(e),this.Tp!==null&&this.Tp.vp(e),e!==1){this.Gv.applySuggestedBitmapSize();const n=Li(this.Gv);n!==null&&(n.useBitmapCoordinateSpace(r=>{this.mp(r)}),this.Np&&(this.fm(n,C2),this.vm(n),this.pm(n),this.fm(n,ds),this.fm(n,E2)))}this.Jv.applySuggestedBitmapSize();const i=Li(this.Jv);i!==null&&(i.useBitmapCoordinateSpace(({context:n,bitmapSize:r})=>{n.clearRect(0,0,r.width,r.height)}),this.bm(i),this.fm(i,z2))}wm(){return this.Cp}gm(){return this.Tp}bp(e,i){this.fm(e,i)}Fp(){this.Np!==null&&this.Np.W_().p(this),this.Np=null}tm(e){this.im(this.Vp,e)}im(e,i){const n=i.localX,r=i.localY;e.M()&&e.m(this.$i().St().Nu(n),{x:n,y:r},i)}mp({context:e,bitmapSize:i}){const{width:n,height:r}=i,s=this.$i(),l=s.q(),c=s.bd();l===c?Ea(e,0,0,n,r,c):vm(e,0,0,n,r,l,c)}vm(e){const i=C(this.Np).j_().qh().gt();i!==null&&i.X(e,!1)}pm(e){const i=this.$i().Yc();this.Mm(e,ds,Mo,i),this.Mm(e,ds,Ts,i)}bm(e){this.Mm(e,ds,Ts,this.$i().Zc())}fm(e,i){const n=C(this.Np).Uo();for(const r of n)this.Mm(e,i,Mo,r);for(const r of n)this.Mm(e,i,Ts,r)}Mm(e,i,n,r){const s=C(this.Np),l=s.$t().Wc(),c=l!==null&&l.Hc===r,o=l!==null&&c&&l.Iv!==void 0?l.Iv.Mr:void 0;_o(i,u=>n(u,e,c,o),r,s)}Zp(){if(this.Np===null)return;const e=this.Qd,i=this.Np.R_().W().visible,n=this.Np.D_().W().visible;i||this.Cp===null||(this.jp.removeChild(this.Cp.lp()),this.Cp.S(),this.Cp=null),n||this.Tp===null||(this.Hp.removeChild(this.Tp.lp()),this.Tp.S(),this.Tp=null);const r=e.$t().ud();i&&this.Cp===null&&(this.Cp=new fd(this,e.W(),r,"left"),this.jp.appendChild(this.Cp.lp())),n&&this.Tp===null&&(this.Tp=new fd(this,e.W(),r,"right"),this.Hp.appendChild(this.Tp.lp()))}xm(e){return e.Dv&&this.Ap||this.Ip!==null}Sm(e){return Math.max(0,Math.min(e,this.Ev.width-1))}km(e){return Math.max(0,Math.min(e,this.Ev.height-1))}Gp(e,i,n){this.$i().ld(this.Sm(e),this.km(i),n,C(this.Np))}hm(){this.$i().od()}om(){this.zp&&(this.Ip=null,this.hm())}rm(e,i,n){this.Ip=e,this.zp=!1,this.Gp(i.x,i.y,n);const r=this.$i().Zc();this.Lp={x:r.Yt(),y:r.Zt()}}$i(){return this.Qd.$t()}sm(e){if(!this.Dp)return;const i=this.$i(),n=this.fp();if(i.z_(n,n.vn()),this.Rp=null,this.Dp=!1,i.ed(),this.Ep!==null){const r=performance.now(),s=i.St();this.Ep.Vr(s.Hu(),r),this.Ep.Qu(r)||i.Zn(this.Ep)}}Kp(){this.Ip=null}Jp(){if(this.Np){if(this.$i().Un(),document.activeElement!==document.body&&document.activeElement!==document.documentElement)C(document.activeElement).blur();else{const e=document.getSelection();e!==null&&e.removeAllRanges()}!this.Np.vn().Ni()&&this.$i().St().Ni()}}nm(e){if(this.Np===null)return;const i=this.$i(),n=i.St();if(n.Ni())return;const r=this.Qd.W(),s=r.handleScroll,l=r.kineticScroll;if((!s.pressedMouseMove||e.Dv)&&(!s.horzTouchDrag&&!s.vertTouchDrag||!e.Dv))return;const c=this.Np.vn(),o=performance.now();if(this.Rp!==null||this.xm(e)||(this.Rp={x:e.clientX,y:e.clientY,Od:o,ym:e.localX,Cm:e.localY}),this.Rp!==null&&!this.Dp&&(this.Rp.x!==e.clientX||this.Rp.y!==e.clientY)){if(e.Dv&&l.touch||!e.Dv&&l.mouse){const u=n.le();this.Ep=new k2(.2/u,7/u,.997,15/u),this.Ep.Yd(n.Hu(),this.Rp.Od)}else this.Ep=null;c.Ni()||i.A_(this.Np,c,e.localY),i.nd(e.localX),this.Dp=!0}this.Dp&&(c.Ni()||i.I_(this.Np,c,e.localY),i.sd(e.localX),this.Ep!==null&&this.Ep.Yd(n.Hu(),o))}}class pd{constructor(e,i,n,r,s){this.ft=!0,this.Ev=ie({width:0,height:0}),this.Hv=()=>this.vp(3),this.qv=e==="left",this.Oc=n.ud,this.cn=i,this.Tm=r,this.Pm=s,this.Kv=document.createElement("div"),this.Kv.style.width="25px",this.Kv.style.height="100%",this.Kv.style.overflow="hidden",this.Gv=$i(this.Kv,ie({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv)}S(){this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Di(this.Gv.canvasElement),this.Gv.dispose()}lp(){return this.Kv}um(){return this.Ev}cp(e){Ni(this.Ev,e)||(this.Ev=e,this.Gv.resizeCanvasElement(e),this.Kv.style.width=`${e.width}px`,this.Kv.style.height=`${e.height}px`,this.ft=!0)}vp(e){if(e<3&&!this.ft||this.Ev.width===0||this.Ev.height===0)return;this.ft=!1,this.Gv.applySuggestedBitmapSize();const i=Li(this.Gv);i!==null&&i.useBitmapCoordinateSpace(n=>{this.mp(n),this.Ie(n)})}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const r=this.xp();r.width>0&&r.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}Ie({context:e,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:r}){if(!this.Tm())return;e.fillStyle=this.cn.timeScale.borderColor;const s=Math.floor(this.Oc.W().C*n),l=Math.floor(this.Oc.W().C*r),c=this.qv?i.width-s:0;e.fillRect(c,0,s,l)}mp({context:e,bitmapSize:i}){Ea(e,0,0,i.width,i.height,this.Pm())}}function Jc(t){return e=>{var i,n;return(n=(i=e.fa)===null||i===void 0?void 0:i.call(e,t))!==null&&n!==void 0?n:[]}}const M2=Jc("normal"),_2=Jc("top"),T2=Jc("bottom");class P2{constructor(e,i){this.Rm=null,this.Dm=null,this.k=null,this.Vm=!1,this.Ev=ie({width:0,height:0}),this.Om=new pe,this.Fv=new Nr(5),this.jv=!1,this.Hv=()=>{this.jv||this.Qd.$t().Uh()},this.Uv=()=>{this.jv||this.Qd.$t().Uh()},this.Qd=e,this.q_=i,this.cn=e.W().layout,this.Xd=document.createElement("tr"),this.Bm=document.createElement("td"),this.Bm.style.padding="0",this.Am=document.createElement("td"),this.Am.style.padding="0",this.Kv=document.createElement("td"),this.Kv.style.height="25px",this.Kv.style.padding="0",this.Im=document.createElement("div"),this.Im.style.width="100%",this.Im.style.height="100%",this.Im.style.position="relative",this.Im.style.overflow="hidden",this.Kv.appendChild(this.Im),this.Gv=$i(this.Im,ie({width:16,height:16})),this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);const n=this.Gv.canvasElement;n.style.position="absolute",n.style.zIndex="1",n.style.left="0",n.style.top="0",this.Jv=$i(this.Im,ie({width:16,height:16})),this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);const r=this.Jv.canvasElement;r.style.position="absolute",r.style.zIndex="2",r.style.left="0",r.style.top="0",this.Xd.appendChild(this.Bm),this.Xd.appendChild(this.Kv),this.Xd.appendChild(this.Am),this.zm(),this.Qd.$t().g_().l(this.zm.bind(this),this),this.hp=new Xc(this.Jv.canvasElement,this,{ev:()=>!0,rv:()=>!this.Qd.W().handleScroll.horzTouchDrag})}S(){this.hp.S(),this.Rm!==null&&this.Rm.S(),this.Dm!==null&&this.Dm.S(),this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv),Di(this.Jv.canvasElement),this.Jv.dispose(),this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv),Di(this.Gv.canvasElement),this.Gv.dispose()}lp(){return this.Xd}Lm(){return this.Rm}Em(){return this.Dm}bv(e){if(this.Vm)return;this.Vm=!0;const i=this.Qd.$t();!i.St().Ni()&&this.Qd.W().handleScale.axisPressedMouseMove.time&&i.Jc(e.localX)}pv(e){this.bv(e)}wv(){const e=this.Qd.$t();!e.St().Ni()&&this.Vm&&(this.Vm=!1,this.Qd.W().handleScale.axisPressedMouseMove.time&&e.hd())}av(e){const i=this.Qd.$t();!i.St().Ni()&&this.Qd.W().handleScale.axisPressedMouseMove.time&&i.rd(e.localX)}hv(e){this.av(e)}cv(){this.Vm=!1;const e=this.Qd.$t();e.St().Ni()&&!this.Qd.W().handleScale.axisPressedMouseMove.time||e.hd()}_v(){this.cv()}qf(){this.Qd.W().handleScale.axisDoubleClickReset.time&&this.Qd.$t().Kn()}jf(){this.qf()}Qf(){this.Qd.$t().W().handleScale.axisPressedMouseMove.time&&this.kp(1)}Pv(){this.kp(0)}um(){return this.Ev}Nm(){return this.Om}Fm(e,i,n){Ni(this.Ev,e)||(this.Ev=e,this.jv=!0,this.Gv.resizeCanvasElement(e),this.Jv.resizeCanvasElement(e),this.jv=!1,this.Kv.style.width=`${e.width}px`,this.Kv.style.height=`${e.height}px`,this.Om.m(e)),this.Rm!==null&&this.Rm.cp(ie({width:i,height:e.height})),this.Dm!==null&&this.Dm.cp(ie({width:n,height:e.height}))}Wm(){const e=this.jm();return Math.ceil(e.C+e.T+e.P+e.L+e.B+e.Hm)}bt(){this.Qd.$t().St().Ha()}xp(){return this.Gv.bitmapSize}Sp(e,i,n){const r=this.xp();r.width>0&&r.height>0&&e.drawImage(this.Gv.canvasElement,i,n)}vp(e){if(e===0)return;if(e!==1){this.Gv.applySuggestedBitmapSize();const n=Li(this.Gv);n!==null&&(n.useBitmapCoordinateSpace(r=>{this.mp(r),this.Ie(r),this.$m(n,T2)}),this.wp(n),this.$m(n,M2)),this.Rm!==null&&this.Rm.vp(e),this.Dm!==null&&this.Dm.vp(e)}this.Jv.applySuggestedBitmapSize();const i=Li(this.Jv);i!==null&&(i.useBitmapCoordinateSpace(({context:n,bitmapSize:r})=>{n.clearRect(0,0,r.width,r.height)}),this.Um([...this.Qd.$t().wt(),this.Qd.$t().Zc()],i),this.$m(i,_2))}$m(e,i){const n=this.Qd.$t().wt();for(const r of n)_o(i,s=>Mo(s,e,!1,void 0),r,void 0);for(const r of n)_o(i,s=>Ts(s,e,!1,void 0),r,void 0)}mp({context:e,bitmapSize:i}){Ea(e,0,0,i.width,i.height,this.Qd.$t().bd())}Ie({context:e,bitmapSize:i,verticalPixelRatio:n}){if(this.Qd.W().timeScale.borderVisible){e.fillStyle=this.qm();const r=Math.max(1,Math.floor(this.jm().C*n));e.fillRect(0,0,i.width,r)}}wp(e){const i=this.Qd.$t().St(),n=i.Ha();if(!n||n.length===0)return;const r=this.q_.maxTickMarkWeight(n),s=this.jm(),l=i.W();l.borderVisible&&l.ticksVisible&&e.useBitmapCoordinateSpace(({context:c,horizontalPixelRatio:o,verticalPixelRatio:u})=>{c.strokeStyle=this.qm(),c.fillStyle=this.qm();const h=Math.max(1,Math.floor(o)),d=Math.floor(.5*o);c.beginPath();const f=Math.round(s.T*u);for(let m=n.length;m--;){const g=Math.round(n[m].coord*o);c.rect(g-d,0,h,f)}c.fill()}),e.useMediaCoordinateSpace(({context:c})=>{const o=s.C+s.T+s.L+s.P/2;c.textAlign="center",c.textBaseline="middle",c.fillStyle=this.$(),c.font=this._p();for(const u of n)if(u.weight<r){const h=u.needAlignCoordinate?this.Ym(c,u.coord,u.label):u.coord;c.fillText(u.label,h,o)}this.Qd.W().timeScale.allowBoldLabels&&(c.font=this.Zm());for(const u of n)if(u.weight>=r){const h=u.needAlignCoordinate?this.Ym(c,u.coord,u.label):u.coord;c.fillText(u.label,h,o)}})}Ym(e,i,n){const r=this.Fv.xi(e,n),s=r/2,l=Math.floor(i-s)+.5;return l<0?i+=Math.abs(0-l):l+r>this.Ev.width&&(i-=Math.abs(this.Ev.width-(l+r))),i}Um(e,i){const n=this.jm();for(const r of e)for(const s of r.Qi())s.gt().X(i,n)}qm(){return this.Qd.W().timeScale.borderColor}$(){return this.cn.textColor}j(){return this.cn.fontSize}_p(){return yn(this.j(),this.cn.fontFamily)}Zm(){return yn(this.j(),this.cn.fontFamily,"bold")}jm(){this.k===null&&(this.k={C:1,N:NaN,L:NaN,B:NaN,ji:NaN,T:5,P:NaN,R:"",Wi:new Nr,Hm:0});const e=this.k,i=this._p();if(e.R!==i){const n=this.j();e.P=n,e.R=i,e.L=3*n/12,e.B=3*n/12,e.ji=9*n/12,e.N=0,e.Hm=4*n/12,e.Wi.nr()}return this.k}kp(e){this.Kv.style.cursor=e===1?"ew-resize":"default"}zm(){const e=this.Qd.$t(),i=e.W();i.leftPriceScale.visible||this.Rm===null||(this.Bm.removeChild(this.Rm.lp()),this.Rm.S(),this.Rm=null),i.rightPriceScale.visible||this.Dm===null||(this.Am.removeChild(this.Dm.lp()),this.Dm.S(),this.Dm=null);const n={ud:this.Qd.$t().ud()},r=()=>i.leftPriceScale.borderVisible&&e.St().W().borderVisible,s=()=>e.bd();i.leftPriceScale.visible&&this.Rm===null&&(this.Rm=new pd("left",i,n,r,s),this.Bm.appendChild(this.Rm.lp())),i.rightPriceScale.visible&&this.Dm===null&&(this.Dm=new pd("right",i,n,r,s),this.Am.appendChild(this.Dm.lp()))}}const L2=!!wn&&!!navigator.userAgentData&&navigator.userAgentData.brands.some(t=>t.brand.includes("Chromium"))&&!!wn&&(!((bl=navigator==null?void 0:navigator.userAgentData)===null||bl===void 0)&&bl.platform?navigator.userAgentData.platform==="Windows":navigator.userAgent.toLowerCase().indexOf("win")>=0);var bl;class R2{constructor(e,i,n){var r;this.Xm=[],this.Km=0,this.ho=0,this.__=0,this.Gm=0,this.Jm=0,this.Qm=null,this.tb=!1,this.Vp=new pe,this.Op=new pe,this.Rc=new pe,this.ib=null,this.nb=null,this.Jd=e,this.cn=i,this.q_=n,this.Xd=document.createElement("div"),this.Xd.classList.add("tv-lightweight-charts"),this.Xd.style.overflow="hidden",this.Xd.style.direction="ltr",this.Xd.style.width="100%",this.Xd.style.height="100%",(r=this.Xd).style.userSelect="none",r.style.webkitUserSelect="none",r.style.msUserSelect="none",r.style.MozUserSelect="none",r.style.webkitTapHighlightColor="transparent",this.sb=document.createElement("table"),this.sb.setAttribute("cellspacing","0"),this.Xd.appendChild(this.sb),this.eb=this.rb.bind(this),kl(this.cn)&&this.hb(!0),this.$i=new v2(this.Vc.bind(this),this.cn,n),this.$t().Xc().l(this.lb.bind(this),this),this.ab=new P2(this,this.q_),this.sb.appendChild(this.ab.lp());const s=i.autoSize&&this.ob();let l=this.cn.width,c=this.cn.height;if(s||l===0||c===0){const o=e.getBoundingClientRect();l=l||o.width,c=c||o.height}this._b(l,c),this.ub(),e.appendChild(this.Xd),this.cb(),this.$i.St().ec().l(this.$i.Kl.bind(this.$i),this),this.$i.g_().l(this.$i.Kl.bind(this.$i),this)}$t(){return this.$i}W(){return this.cn}Yp(){return this.Xm}fb(){return this.ab}S(){this.hb(!1),this.Km!==0&&window.cancelAnimationFrame(this.Km),this.$i.Xc().p(this),this.$i.St().ec().p(this),this.$i.g_().p(this),this.$i.S();for(const e of this.Xm)this.sb.removeChild(e.lp()),e.lm().p(this),e.am().p(this),e.S();this.Xm=[],C(this.ab).S(),this.Xd.parentElement!==null&&this.Xd.parentElement.removeChild(this.Xd),this.Rc.S(),this.Vp.S(),this.Op.S(),this.pb()}_b(e,i,n=!1){if(this.ho===i&&this.__===e)return;const r=function(c){const o=Math.floor(c.width),u=Math.floor(c.height);return ie({width:o-o%2,height:u-u%2})}(ie({width:e,height:i}));this.ho=r.height,this.__=r.width;const s=this.ho+"px",l=this.__+"px";C(this.Xd).style.height=s,C(this.Xd).style.width=l,this.sb.style.height=s,this.sb.style.width=l,n?this.mb(Ne.es(),performance.now()):this.$i.Kl()}vp(e){e===void 0&&(e=Ne.es());for(let i=0;i<this.Xm.length;i++)this.Xm[i].vp(e.Hn(i).Fn);this.cn.timeScale.visible&&this.ab.vp(e.jn())}$h(e){const i=kl(this.cn);this.$i.$h(e);const n=kl(this.cn);n!==i&&this.hb(n),this.cb(),this.bb(e)}lm(){return this.Vp}am(){return this.Op}Xc(){return this.Rc}wb(){this.Qm!==null&&(this.mb(this.Qm,performance.now()),this.Qm=null);const e=this.gb(null),i=document.createElement("canvas");i.width=e.width,i.height=e.height;const n=C(i.getContext("2d"));return this.gb(n),i}Mb(e){return e==="left"&&!this.xb()||e==="right"&&!this.Sb()||this.Xm.length===0?0:C(e==="left"?this.Xm[0].wm():this.Xm[0].gm()).dp()}kb(){return this.cn.autoSize&&this.ib!==null}yb(){return this.Xd}Qp(e){this.nb=e,this.nb?this.yb().style.setProperty("cursor",e):this.yb().style.removeProperty("cursor")}Cb(){return this.nb}Tb(){return De(this.Xm[0]).um()}bb(e){(e.autoSize!==void 0||!this.ib||e.width===void 0&&e.height===void 0)&&(e.autoSize&&!this.ib&&this.ob(),e.autoSize===!1&&this.ib!==null&&this.pb(),e.autoSize||e.width===void 0&&e.height===void 0||this._b(e.width||this.__,e.height||this.ho))}gb(e){let i=0,n=0;const r=this.Xm[0],s=(c,o)=>{let u=0;for(let h=0;h<this.Xm.length;h++){const d=this.Xm[h],f=C(c==="left"?d.wm():d.gm()),m=f.xp();e!==null&&f.Sp(e,o,u),u+=m.height}};this.xb()&&(s("left",0),i+=C(r.wm()).xp().width);for(let c=0;c<this.Xm.length;c++){const o=this.Xm[c],u=o.xp();e!==null&&o.Sp(e,i,n),n+=u.height}i+=r.xp().width,this.Sb()&&(s("right",i),i+=C(r.gm()).xp().width);const l=(c,o,u)=>{C(c==="left"?this.ab.Lm():this.ab.Em()).Sp(C(e),o,u)};if(this.cn.timeScale.visible){const c=this.ab.xp();if(e!==null){let o=0;this.xb()&&(l("left",o,n),o=C(r.wm()).xp().width),this.ab.Sp(e,o,n),o+=c.width,this.Sb()&&l("right",o,n)}n+=c.height}return ie({width:i,height:n})}Pb(){let e=0,i=0,n=0;for(const g of this.Xm)this.xb()&&(i=Math.max(i,C(g.wm()).op(),this.cn.leftPriceScale.minimumWidth)),this.Sb()&&(n=Math.max(n,C(g.gm()).op(),this.cn.rightPriceScale.minimumWidth)),e+=g.M_();i=zo(i),n=zo(n);const r=this.__,s=this.ho,l=Math.max(r-i-n,0),c=this.cn.timeScale.visible;let o=c?Math.max(this.ab.Wm(),this.cn.timeScale.minimumHeight):0;var u;o=(u=o)+u%2;const h=0+o,d=s<h?0:s-h,f=d/e;let m=0;for(let g=0;g<this.Xm.length;++g){const p=this.Xm[g];p.qp(this.$i.qc()[g]);let w=0,v=0;v=g===this.Xm.length-1?d-m:Math.round(p.M_()*f),w=Math.max(v,2),m+=w,p.cp(ie({width:l,height:w})),this.xb()&&p._m(i,"left"),this.Sb()&&p._m(n,"right"),p.fp()&&this.$i.Kc(p.fp(),w)}this.ab.Fm(ie({width:c?l:0,height:o}),c?i:0,c?n:0),this.$i.S_(l),this.Gm!==i&&(this.Gm=i),this.Jm!==n&&(this.Jm=n)}hb(e){e?this.Xd.addEventListener("wheel",this.eb,{passive:!1}):this.Xd.removeEventListener("wheel",this.eb)}Rb(e){switch(e.deltaMode){case e.DOM_DELTA_PAGE:return 120;case e.DOM_DELTA_LINE:return 32}return L2?1/window.devicePixelRatio:1}rb(e){if(!(e.deltaX!==0&&this.cn.handleScroll.mouseWheel||e.deltaY!==0&&this.cn.handleScale.mouseWheel))return;const i=this.Rb(e),n=i*e.deltaX/100,r=-i*e.deltaY/100;if(e.cancelable&&e.preventDefault(),r!==0&&this.cn.handleScale.mouseWheel){const s=Math.sign(r)*Math.min(1,Math.abs(r)),l=e.clientX-this.Xd.getBoundingClientRect().left;this.$t().Qc(l,s)}n!==0&&this.cn.handleScroll.mouseWheel&&this.$t().td(-80*n)}mb(e,i){var n;const r=e.jn();r===3&&this.Db(),r!==3&&r!==2||(this.Vb(e),this.Ob(e,i),this.ab.bt(),this.Xm.forEach(s=>{s.Xp()}),((n=this.Qm)===null||n===void 0?void 0:n.jn())===3&&(this.Qm.ts(e),this.Db(),this.Vb(this.Qm),this.Ob(this.Qm,i),e=this.Qm,this.Qm=null)),this.vp(e)}Ob(e,i){for(const n of e.Qn())this.ns(n,i)}Vb(e){const i=this.$i.qc();for(let n=0;n<i.length;n++)e.Hn(n).Wn&&i[n].N_()}ns(e,i){const n=this.$i.St();switch(e.qn){case 0:n.hc();break;case 1:n.lc(e.Vt);break;case 2:n.Gn(e.Vt);break;case 3:n.Jn(e.Vt);break;case 4:n.qu();break;case 5:e.Vt.Qu(i)||n.Jn(e.Vt.tc(i))}}Vc(e){this.Qm!==null?this.Qm.ts(e):this.Qm=e,this.tb||(this.tb=!0,this.Km=window.requestAnimationFrame(i=>{if(this.tb=!1,this.Km=0,this.Qm!==null){const n=this.Qm;this.Qm=null,this.mb(n,i);for(const r of n.Qn())if(r.qn===5&&!r.Vt.Qu(i)){this.$t().Zn(r.Vt);break}}}))}Db(){this.ub()}ub(){const e=this.$i.qc(),i=e.length,n=this.Xm.length;for(let r=i;r<n;r++){const s=De(this.Xm.pop());this.sb.removeChild(s.lp()),s.lm().p(this),s.am().p(this),s.S()}for(let r=n;r<i;r++){const s=new Qc(this,e[r]);s.lm().l(this.Bb.bind(this),this),s.am().l(this.Ab.bind(this),this),this.Xm.push(s),this.sb.insertBefore(s.lp(),this.ab.lp())}for(let r=0;r<i;r++){const s=e[r],l=this.Xm[r];l.fp()!==s?l.qp(s):l.Up()}this.cb(),this.Pb()}Ib(e,i,n){var r;const s=new Map;e!==null&&this.$i.wt().forEach(h=>{const d=h.In().ll(e);d!==null&&s.set(h,d)});let l;if(e!==null){const h=(r=this.$i.St().Ui(e))===null||r===void 0?void 0:r.originalTime;h!==void 0&&(l=h)}const c=this.$t().Wc(),o=c!==null&&c.Hc instanceof qc?c.Hc:void 0,u=c!==null&&c.Iv!==void 0?c.Iv.gr:void 0;return{zb:l,ee:e??void 0,Lb:i??void 0,Eb:o,Nb:s,Fb:u,Wb:n??void 0}}Bb(e,i,n){this.Vp.m(()=>this.Ib(e,i,n))}Ab(e,i,n){this.Op.m(()=>this.Ib(e,i,n))}lb(e,i,n){this.Rc.m(()=>this.Ib(e,i,n))}cb(){const e=this.cn.timeScale.visible?"":"none";this.ab.lp().style.display=e}xb(){return this.Xm[0].fp().R_().W().visible}Sb(){return this.Xm[0].fp().D_().W().visible}ob(){return"ResizeObserver"in window&&(this.ib=new ResizeObserver(e=>{const i=e.find(n=>n.target===this.Jd);i&&this._b(i.contentRect.width,i.contentRect.height)}),this.ib.observe(this.Jd,{box:"border-box"}),!0)}pb(){this.ib!==null&&this.ib.disconnect(),this.ib=null}}function kl(t){return!!(t.handleScroll.mouseWheel||t.handleScale.mouseWheel)}function $2(t){return function(e){return e.open!==void 0}(t)||function(e){return e.value!==void 0}(t)}function Dm(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(i[n[r]]=t[n[r]])}return i}function md(t,e,i,n){const r=i.value,s={ee:e,ot:t,Vt:[r,r,r,r],zb:n};return i.color!==void 0&&(s.V=i.color),s}function D2(t,e,i,n){const r=i.value,s={ee:e,ot:t,Vt:[r,r,r,r],zb:n};return i.lineColor!==void 0&&(s.lt=i.lineColor),i.topColor!==void 0&&(s.Ps=i.topColor),i.bottomColor!==void 0&&(s.Rs=i.bottomColor),s}function B2(t,e,i,n){const r=i.value,s={ee:e,ot:t,Vt:[r,r,r,r],zb:n};return i.topLineColor!==void 0&&(s.Re=i.topLineColor),i.bottomLineColor!==void 0&&(s.De=i.bottomLineColor),i.topFillColor1!==void 0&&(s.ke=i.topFillColor1),i.topFillColor2!==void 0&&(s.ye=i.topFillColor2),i.bottomFillColor1!==void 0&&(s.Ce=i.bottomFillColor1),i.bottomFillColor2!==void 0&&(s.Te=i.bottomFillColor2),s}function A2(t,e,i,n){const r={ee:e,ot:t,Vt:[i.open,i.high,i.low,i.close],zb:n};return i.color!==void 0&&(r.V=i.color),r}function I2(t,e,i,n){const r={ee:e,ot:t,Vt:[i.open,i.high,i.low,i.close],zb:n};return i.color!==void 0&&(r.V=i.color),i.borderColor!==void 0&&(r.Ot=i.borderColor),i.wickColor!==void 0&&(r.Xh=i.wickColor),r}function O2(t,e,i,n,r){const s=De(r)(i),l=Math.max(...s),c=Math.min(...s),o=s[s.length-1],u=[o,l,c,o],h=i,{time:d,color:f}=h;return{ee:e,ot:t,Vt:u,zb:n,$e:Dm(h,["time","color"]),V:f}}function fs(t){return t.Vt!==void 0}function gd(t,e){return e.customValues!==void 0&&(t.jb=e.customValues),t}function gi(t){return(e,i,n,r,s,l)=>function(c,o){return o?o(c):(u=c).open===void 0&&u.value===void 0;var u}(n,l)?gd({ot:e,ee:i,zb:r},n):gd(t(e,i,n,r,s),n)}function vd(t){return{Candlestick:gi(I2),Bar:gi(A2),Area:gi(D2),Baseline:gi(B2),Histogram:gi(md),Line:gi(md),Custom:gi(O2)}[t]}function xd(t){return{ee:0,Hb:new Map,la:t}}function yd(t,e){if(t!==void 0&&t.length!==0)return{$b:e.key(t[0].ot),Ub:e.key(t[t.length-1].ot)}}function wd(t){let e;return t.forEach(i=>{e===void 0&&(e=i.zb)}),De(e)}class F2{constructor(e){this.qb=new Map,this.Yb=new Map,this.Zb=new Map,this.Xb=[],this.q_=e}S(){this.qb.clear(),this.Yb.clear(),this.Zb.clear(),this.Xb=[]}Kb(e,i){let n=this.qb.size!==0,r=!1;const s=this.Yb.get(e);if(s!==void 0)if(this.Yb.size===1)n=!1,r=!0,this.qb.clear();else for(const o of this.Xb)o.pointData.Hb.delete(e)&&(r=!0);let l=[];if(i.length!==0){const o=i.map(m=>m.time),u=this.q_.createConverterToInternalObj(i),h=vd(e.Qh()),d=e.Ca(),f=e.Ta();l=i.map((m,g)=>{const p=u(m.time),w=this.q_.key(p);let v=this.qb.get(w);v===void 0&&(v=xd(p),this.qb.set(w,v),r=!0);const x=h(p,v.ee,m,o[g],d,f);return v.Hb.set(e,x),x})}n&&this.Gb(),this.Jb(e,l);let c=-1;if(r){const o=[];this.qb.forEach(u=>{o.push({timeWeight:0,time:u.la,pointData:u,originalTime:wd(u.Hb)})}),o.sort((u,h)=>this.q_.key(u.time)-this.q_.key(h.time)),c=this.Qb(o)}return this.tw(e,c,function(o,u,h){const d=yd(o,h),f=yd(u,h);if(d!==void 0&&f!==void 0)return{ta:d.Ub>=f.Ub&&d.$b>=f.$b}}(this.Yb.get(e),s,this.q_))}vd(e){return this.Kb(e,[])}iw(e,i){const n=i;(function(p){p.zb===void 0&&(p.zb=p.time)})(n),this.q_.preprocessData(i);const r=this.q_.createConverterToInternalObj([i])(i.time),s=this.Zb.get(e);if(s!==void 0&&this.q_.key(r)<this.q_.key(s))throw new Error(`Cannot update oldest data, last time=${s}, new time=${r}`);let l=this.qb.get(this.q_.key(r));const c=l===void 0;l===void 0&&(l=xd(r),this.qb.set(this.q_.key(r),l));const o=vd(e.Qh()),u=e.Ca(),h=e.Ta(),d=o(r,l.ee,i,n.zb,u,h);l.Hb.set(e,d),this.nw(e,d);const f={ta:fs(d)};if(!c)return this.tw(e,-1,f);const m={timeWeight:0,time:l.la,pointData:l,originalTime:wd(l.Hb)},g=Dr(this.Xb,this.q_.key(m.time),(p,w)=>this.q_.key(p.time)<w);this.Xb.splice(g,0,m);for(let p=g;p<this.Xb.length;++p)jl(this.Xb[p].pointData,p);return this.q_.fillWeightsForPoints(this.Xb,g),this.tw(e,g,f)}nw(e,i){let n=this.Yb.get(e);n===void 0&&(n=[],this.Yb.set(e,n));const r=n.length!==0?n[n.length-1]:null;r===null||this.q_.key(i.ot)>this.q_.key(r.ot)?fs(i)&&n.push(i):fs(i)?n[n.length-1]=i:n.splice(-1,1),this.Zb.set(e,i.ot)}Jb(e,i){i.length!==0?(this.Yb.set(e,i.filter(fs)),this.Zb.set(e,i[i.length-1].ot)):(this.Yb.delete(e),this.Zb.delete(e))}Gb(){for(const e of this.Xb)e.pointData.Hb.size===0&&this.qb.delete(this.q_.key(e.time))}Qb(e){let i=-1;for(let n=0;n<this.Xb.length&&n<e.length;++n){const r=this.Xb[n],s=e[n];if(this.q_.key(r.time)!==this.q_.key(s.time)){i=n;break}s.timeWeight=r.timeWeight,jl(s.pointData,n)}if(i===-1&&this.Xb.length!==e.length&&(i=Math.min(this.Xb.length,e.length)),i===-1)return-1;for(let n=i;n<e.length;++n)jl(e[n].pointData,n);return this.q_.fillWeightsForPoints(e,i),this.Xb=e,i}sw(){if(this.Yb.size===0)return null;let e=0;return this.Yb.forEach(i=>{i.length!==0&&(e=Math.max(e,i[i.length-1].ee))}),e}tw(e,i,n){const r={ew:new Map,St:{Eu:this.sw()}};if(i!==-1)this.Yb.forEach((s,l)=>{r.ew.set(l,{$e:s,rw:l===e?n:void 0})}),this.Yb.has(e)||r.ew.set(e,{$e:[],rw:n}),r.St.hw=this.Xb,r.St.lw=i;else{const s=this.Yb.get(e);r.ew.set(e,{$e:s||[],rw:n})}return r}}function jl(t,e){t.ee=e,t.Hb.forEach(i=>{i.ee=e})}function Yc(t){const e={value:t.Vt[3],time:t.zb};return t.jb!==void 0&&(e.customValues=t.jb),e}function bd(t){const e=Yc(t);return t.V!==void 0&&(e.color=t.V),e}function V2(t){const e=Yc(t);return t.lt!==void 0&&(e.lineColor=t.lt),t.Ps!==void 0&&(e.topColor=t.Ps),t.Rs!==void 0&&(e.bottomColor=t.Rs),e}function U2(t){const e=Yc(t);return t.Re!==void 0&&(e.topLineColor=t.Re),t.De!==void 0&&(e.bottomLineColor=t.De),t.ke!==void 0&&(e.topFillColor1=t.ke),t.ye!==void 0&&(e.topFillColor2=t.ye),t.Ce!==void 0&&(e.bottomFillColor1=t.Ce),t.Te!==void 0&&(e.bottomFillColor2=t.Te),e}function Bm(t){const e={open:t.Vt[0],high:t.Vt[1],low:t.Vt[2],close:t.Vt[3],time:t.zb};return t.jb!==void 0&&(e.customValues=t.jb),e}function W2(t){const e=Bm(t);return t.V!==void 0&&(e.color=t.V),e}function H2(t){const e=Bm(t),{V:i,Ot:n,Xh:r}=t;return i!==void 0&&(e.color=i),n!==void 0&&(e.borderColor=n),r!==void 0&&(e.wickColor=r),e}function To(t){return{Area:V2,Line:bd,Baseline:U2,Histogram:bd,Bar:W2,Candlestick:H2,Custom:q2}[t]}function q2(t){const e=t.zb;return Object.assign(Object.assign({},t.$e),{time:e})}const K2={vertLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},horzLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},mode:1},X2={vertLines:{color:"#D6DCDE",style:0,visible:!0},horzLines:{color:"#D6DCDE",style:0,visible:!0}},Q2={background:{type:"solid",color:"#FFFFFF"},textColor:"#191919",fontSize:12,fontFamily:Oc,attributionLogo:!0},Sl={autoScale:!0,mode:0,invertScale:!1,alignLabels:!0,borderVisible:!0,borderColor:"#2B2B43",entireTextOnly:!1,visible:!1,ticksVisible:!1,scaleMargins:{bottom:.1,top:.2},minimumWidth:0},J2={rightOffset:0,barSpacing:6,minBarSpacing:.5,fixLeftEdge:!1,fixRightEdge:!1,lockVisibleTimeRangeOnResize:!1,rightBarStaysOnScroll:!1,borderVisible:!0,borderColor:"#2B2B43",visible:!0,timeVisible:!1,secondsVisible:!0,shiftVisibleRangeOnNewBar:!0,allowShiftVisibleRangeOnWhitespaceReplacement:!1,ticksVisible:!1,uniformDistribution:!1,minimumHeight:0,allowBoldLabels:!0},Y2={color:"rgba(0, 0, 0, 0)",visible:!1,fontSize:48,fontFamily:Oc,fontStyle:"",text:"",horzAlign:"center",vertAlign:"center"};function kd(){return{width:0,height:0,autoSize:!1,layout:Q2,crosshair:K2,grid:X2,overlayPriceScales:Object.assign({},Sl),leftPriceScale:Object.assign(Object.assign({},Sl),{visible:!1}),rightPriceScale:Object.assign(Object.assign({},Sl),{visible:!0}),timeScale:J2,watermark:Y2,localization:{locale:wn?navigator.language:"",dateFormat:"dd MMM 'yy"},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!0},handleScale:{axisPressedMouseMove:{time:!0,price:!0},axisDoubleClickReset:{time:!0,price:!0},mouseWheel:!0,pinch:!0},kineticScroll:{mouse:!1,touch:!0},trackingMode:{exitMode:1}}}class G2{constructor(e,i){this.aw=e,this.ow=i}applyOptions(e){this.aw.$t().$c(this.ow,e)}options(){return this.Li().W()}width(){return Ma(this.ow)?this.aw.Mb(this.ow):0}Li(){return C(this.aw.$t().Uc(this.ow)).Dt}}function jd(t,e,i){const n=Dm(t,["time","originalTime"]),r=Object.assign({time:e},n);return i!==void 0&&(r.originalTime=i),r}const Z2={color:"#FF0000",price:0,lineStyle:2,lineWidth:1,lineVisible:!0,axisLabelVisible:!0,title:"",axisLabelColor:"",axisLabelTextColor:""};class ew{constructor(e){this.Nh=e}applyOptions(e){this.Nh.$h(e)}options(){return this.Nh.W()}_w(){return this.Nh}}class tw{constructor(e,i,n,r,s){this.uw=new pe,this.Es=e,this.cw=i,this.dw=n,this.q_=s,this.fw=r}S(){this.uw.S()}priceFormatter(){return this.Es.ba()}priceToCoordinate(e){const i=this.Es.Ct();return i===null?null:this.Es.Dt().Rt(e,i.Vt)}coordinateToPrice(e){const i=this.Es.Ct();return i===null?null:this.Es.Dt().pn(e,i.Vt)}barsInLogicalRange(e){if(e===null)return null;const i=new un(new tr(e.from,e.to)).lu(),n=this.Es.In();if(n.Ni())return null;const r=n.ll(i.Os(),1),s=n.ll(i.ui(),-1),l=C(n.el()),c=C(n.An());if(r!==null&&s!==null&&r.ee>s.ee)return{barsBefore:e.from-l,barsAfter:c-e.to};const o={barsBefore:r===null||r.ee===l?e.from-l:r.ee-l,barsAfter:s===null||s.ee===c?c-e.to:c-s.ee};return r!==null&&s!==null&&(o.from=r.zb,o.to=s.zb),o}setData(e){this.q_,this.Es.Qh(),this.cw.pw(this.Es,e),this.mw("full")}update(e){this.Es.Qh(),this.cw.bw(this.Es,e),this.mw("update")}dataByIndex(e,i){const n=this.Es.In().ll(e,i);return n===null?null:To(this.seriesType())(n)}data(){const e=To(this.seriesType());return this.Es.In().ne().map(i=>e(i))}subscribeDataChanged(e){this.uw.l(e)}unsubscribeDataChanged(e){this.uw.v(e)}setMarkers(e){this.q_;const i=e.map(n=>jd(n,this.q_.convertHorzItemToInternal(n.time),n.time));this.Es.na(i)}markers(){return this.Es.sa().map(e=>jd(e,e.originalTime,void 0))}applyOptions(e){this.Es.$h(e)}options(){return Pt(this.Es.W())}priceScale(){return this.dw.priceScale(this.Es.Dt().Pa())}createPriceLine(e){const i=vt(Pt(Z2),e),n=this.Es.ea(i);return new ew(n)}removePriceLine(e){this.Es.ra(e._w())}seriesType(){return this.Es.Qh()}attachPrimitive(e){this.Es.ka(e),e.attached&&e.attached({chart:this.fw,series:this,requestUpdate:()=>this.Es.$t().Kl()})}detachPrimitive(e){this.Es.ya(e),e.detached&&e.detached()}mw(e){this.uw.M()&&this.uw.m(e)}}class iw{constructor(e,i,n){this.ww=new pe,this.mu=new pe,this.Om=new pe,this.$i=e,this.yl=e.St(),this.ab=i,this.yl.nc().l(this.gw.bind(this)),this.yl.sc().l(this.Mw.bind(this)),this.ab.Nm().l(this.xw.bind(this)),this.q_=n}S(){this.yl.nc().p(this),this.yl.sc().p(this),this.ab.Nm().p(this),this.ww.S(),this.mu.S(),this.Om.S()}scrollPosition(){return this.yl.Hu()}scrollToPosition(e,i){i?this.yl.Ju(e,1e3):this.$i.Jn(e)}scrollToRealTime(){this.yl.Gu()}getVisibleRange(){const e=this.yl.Vu();return e===null?null:{from:e.from.originalTime,to:e.to.originalTime}}setVisibleRange(e){const i={from:this.q_.convertHorzItemToInternal(e.from),to:this.q_.convertHorzItemToInternal(e.to)},n=this.yl.Iu(i);this.$i.pd(n)}getVisibleLogicalRange(){const e=this.yl.Du();return e===null?null:{from:e.Os(),to:e.ui()}}setVisibleLogicalRange(e){ci(e.from<=e.to,"The from index cannot be after the to index."),this.$i.pd(e)}resetTimeScale(){this.$i.Kn()}fitContent(){this.$i.hc()}logicalToCoordinate(e){const i=this.$i.St();return i.Ni()?null:i.It(e)}coordinateToLogical(e){return this.yl.Ni()?null:this.yl.Nu(e)}timeToCoordinate(e){const i=this.q_.convertHorzItemToInternal(e),n=this.yl.Va(i,!1);return n===null?null:this.yl.It(n)}coordinateToTime(e){const i=this.$i.St(),n=i.Nu(e),r=i.Ui(n);return r===null?null:r.originalTime}width(){return this.ab.um().width}height(){return this.ab.um().height}subscribeVisibleTimeRangeChange(e){this.ww.l(e)}unsubscribeVisibleTimeRangeChange(e){this.ww.v(e)}subscribeVisibleLogicalRangeChange(e){this.mu.l(e)}unsubscribeVisibleLogicalRangeChange(e){this.mu.v(e)}subscribeSizeChange(e){this.Om.l(e)}unsubscribeSizeChange(e){this.Om.v(e)}applyOptions(e){this.yl.$h(e)}options(){return Object.assign(Object.assign({},Pt(this.yl.W())),{barSpacing:this.yl.le()})}gw(){this.ww.M()&&this.ww.m(this.getVisibleRange())}Mw(){this.mu.M()&&this.mu.m(this.getVisibleLogicalRange())}xw(e){this.Om.m(e.width,e.height)}}function nw(t){if(t===void 0||t.type==="custom")return;const e=t;e.minMove!==void 0&&e.precision===void 0&&(e.precision=function(i){if(i>=1)return 0;let n=0;for(;n<8;n++){const r=Math.round(i);if(Math.abs(r-i)<1e-8)return n;i*=10}return n}(e.minMove))}function Sd(t){return function(e){if(rs(e.handleScale)){const n=e.handleScale;e.handleScale={axisDoubleClickReset:{time:n,price:n},axisPressedMouseMove:{time:n,price:n},mouseWheel:n,pinch:n}}else if(e.handleScale!==void 0){const{axisPressedMouseMove:n,axisDoubleClickReset:r}=e.handleScale;rs(n)&&(e.handleScale.axisPressedMouseMove={time:n,price:n}),rs(r)&&(e.handleScale.axisDoubleClickReset={time:r,price:r})}const i=e.handleScroll;rs(i)&&(e.handleScroll={horzTouchDrag:i,vertTouchDrag:i,mouseWheel:i,pressedMouseMove:i})}(t),t}class rw{constructor(e,i,n){this.Sw=new Map,this.kw=new Map,this.yw=new pe,this.Cw=new pe,this.Tw=new pe,this.Pw=new F2(i);const r=n===void 0?Pt(kd()):vt(Pt(kd()),Sd(n));this.q_=i,this.aw=new R2(e,r,i),this.aw.lm().l(l=>{this.yw.M()&&this.yw.m(this.Rw(l()))},this),this.aw.am().l(l=>{this.Cw.M()&&this.Cw.m(this.Rw(l()))},this),this.aw.Xc().l(l=>{this.Tw.M()&&this.Tw.m(this.Rw(l()))},this);const s=this.aw.$t();this.Dw=new iw(s,this.aw.fb(),this.q_)}remove(){this.aw.lm().p(this),this.aw.am().p(this),this.aw.Xc().p(this),this.Dw.S(),this.aw.S(),this.Sw.clear(),this.kw.clear(),this.yw.S(),this.Cw.S(),this.Tw.S(),this.Pw.S()}resize(e,i,n){this.autoSizeActive()||this.aw._b(e,i,n)}addCustomSeries(e,i){const n=en(e),r=Object.assign(Object.assign({},dm),n.defaultOptions());return this.Vw("Custom",r,i,n)}addAreaSeries(e){return this.Vw("Area",F1,e)}addBaselineSeries(e){return this.Vw("Baseline",V1,e)}addBarSeries(e){return this.Vw("Bar",I1,e)}addCandlestickSeries(e={}){return function(i){i.borderColor!==void 0&&(i.borderUpColor=i.borderColor,i.borderDownColor=i.borderColor),i.wickColor!==void 0&&(i.wickUpColor=i.wickColor,i.wickDownColor=i.wickColor)}(e),this.Vw("Candlestick",A1,e)}addHistogramSeries(e){return this.Vw("Histogram",U1,e)}addLineSeries(e){return this.Vw("Line",O1,e)}removeSeries(e){const i=De(this.Sw.get(e)),n=this.Pw.vd(i);this.aw.$t().vd(i),this.Ow(n),this.Sw.delete(e),this.kw.delete(i)}pw(e,i){this.Ow(this.Pw.Kb(e,i))}bw(e,i){this.Ow(this.Pw.iw(e,i))}subscribeClick(e){this.yw.l(e)}unsubscribeClick(e){this.yw.v(e)}subscribeCrosshairMove(e){this.Tw.l(e)}unsubscribeCrosshairMove(e){this.Tw.v(e)}subscribeDblClick(e){this.Cw.l(e)}unsubscribeDblClick(e){this.Cw.v(e)}priceScale(e){return new G2(this.aw,e)}timeScale(){return this.Dw}applyOptions(e){this.aw.$h(Sd(e))}options(){return this.aw.W()}takeScreenshot(){return this.aw.wb()}autoSizeActive(){return this.aw.kb()}chartElement(){return this.aw.yb()}paneSize(){const e=this.aw.Tb();return{height:e.height,width:e.width}}setCrosshairPosition(e,i,n){const r=this.Sw.get(n);if(r===void 0)return;const s=this.aw.$t().dr(r);s!==null&&this.aw.$t().ad(e,i,s)}clearCrosshairPosition(){this.aw.$t().od(!0)}Vw(e,i,n={},r){nw(n.priceFormat);const s=vt(Pt(fm),Pt(i),n),l=this.aw.$t().dd(e,s,r),c=new tw(l,this,this,this,this.q_);return this.Sw.set(c,l),this.kw.set(l,c),c}Ow(e){const i=this.aw.$t();i._d(e.St.Eu,e.St.hw,e.St.lw),e.ew.forEach((n,r)=>r.J(n.$e,n.rw)),i.Wu()}Bw(e){return De(this.kw.get(e))}Rw(e){const i=new Map;e.Nb.forEach((r,s)=>{const l=s.Qh(),c=To(l)(r);if(l!=="Custom")ci($2(c));else{const o=s.Ta();ci(!o||o(c)===!1)}i.set(this.Bw(s),c)});const n=e.Eb!==void 0&&this.kw.has(e.Eb)?this.Bw(e.Eb):void 0;return{time:e.zb,logical:e.ee,point:e.Lb,hoveredSeries:n,hoveredObjectId:e.Fb,seriesData:i,sourceEvent:e.Wb}}}function sw(t,e,i){let n;if($r(t)){const s=document.getElementById(t);ci(s!==null,`Cannot find element in DOM with id=${t}`),n=s}else n=t;const r=new rw(n,e,i);return e.setOptions(r.options()),r}function aw(t,e){return sw(t,new cd,cd.Id(e))}Object.assign(Object.assign({},fm),dm);const ps=[{label:"1m",value:"1m",tradeSeconds:60},{label:"5m",value:"5m",tradeSeconds:300},{label:"15m",value:"15m",tradeSeconds:900},{label:"1h",value:"1h",tradeSeconds:3600},{label:"4h",value:"4h",tradeSeconds:14400},{label:"1D",value:"1D",tradeSeconds:86400}],lw=[1,2,3,5,10],ow=[50,100,250,500];function Nd(t){return Number(t||Math.floor(Date.now()/1e3))}function Cd(t){return typeof t=="number"&&Number.isFinite(t)&&t>0}function Ed(t){const e=new Set;return t.filter(i=>{const n=`${String(i.id||"")}:${String(i.time)}:${i.text||""}`;return e.has(n)?!1:(e.add(n),!0)})}function Nl(t){const e=Math.floor(t/86400),i=Math.floor(t%86400/3600),n=Math.floor(t%3600/60),r=t%60;return e>0?`${e}d ${i}h ${n}m`:i>0?`${i}h ${n}m ${r}s`:n>0?`${n}m ${r}s`:`${r}s`}function cw(){var En,zn;const{user:t}=mi(),{btcPrice:e,btcChange24h:i,btcHigh24h:n,btcLow24h:r,trades:s,activeTrade:l,lastTradeResult:c,startTrade:o,clearTradeResult:u}=Br(),h=k.useRef(null),d=k.useRef(null),f=k.useRef(null),m=k.useRef(null),g=k.useRef(null),[p,w]=k.useState("1m"),[v,x]=k.useState(null),[y,b]=k.useState(2),[j,z]=k.useState("100"),[M,_]=k.useState(()=>Date.now()),[V,I]=k.useState([]),[Z,be]=k.useState(!0),[ke,ge]=k.useState(null),O=(En=V[V.length-1])==null?void 0:En.candle,ce=(O==null?void 0:O.close)??e,Pe=((zn=V[V.length-1])==null?void 0:zn.volume.value)??0,P=v?parseFloat(j||"0")*y:0,F=parseFloat(j||"0"),A=ps.find(R=>R.value===p)??ps[0],N=ps.find(R=>R.value===(l==null?void 0:l.timeframeValue))??A,S=!!(l&&t&&l.userEmail===t.email),T=(t==null?void 0:t.verificationStatus)==="approved",B=l?Math.max(0,Math.ceil((new Date(l.endTime).getTime()-M)/1e3)):0,D=l?em({entryPrice:l.entryPrice,exitPrice:ce,amount:l.amount,leverageValue:l.leverage,tradeDirection:l.direction}):null,H=k.useMemo(()=>s.filter(R=>R.userEmail===(t==null?void 0:t.email)),[s,t==null?void 0:t.email]),Q=k.useMemo(()=>{const R=H.flatMap(L=>{const K=[];return Cd(L.entryTime)&&K.push({id:`entry-${L.id}`,time:L.entryTime,position:L.direction==="up"?"belowBar":"aboveBar",shape:L.direction==="up"?"arrowUp":"arrowDown",color:L.direction==="up"?"#0ecb81":"#f6465d",text:`${L.direction==="up"?"BUY":"SELL"} $${de(L.amount)} ${L.leverage}x`}),Cd(L.exitTime)&&K.push({id:`exit-${L.id}`,time:L.exitTime,position:L.status==="won"?"aboveBar":"belowBar",shape:L.status==="won"?"circle":"square",color:L.status==="won"?"#0ecb81":"#f6465d",text:`${L.status==="won"?"WIN":L.outcomeReason==="liquidation"?"LIQ":"LOSS"} ${L.pnl&&L.pnl>=0?"+":"-"}$${de(Math.abs(L.pnl||0))}`}),K});return!l||l.userEmail!==(t==null?void 0:t.email)?Ed(R):Ed([...R,{id:`live-${l.id}`,time:l.entryTime,position:l.direction==="up"?"belowBar":"aboveBar",shape:l.direction==="up"?"arrowUp":"arrowDown",color:l.direction==="up"?"#0ecb81":"#f6465d",text:`${l.direction==="up"?"BUY":"SELL"} $${de(l.amount)} ${l.leverage}x`}])},[l,H,t==null?void 0:t.email]);k.useEffect(()=>{if(!h.current)return;let R;try{R=aw(h.current,{layout:{background:{color:"#0b0f15"},textColor:"#8ea0b7"},grid:{vertLines:{color:"#19202c"},horzLines:{color:"#19202c"}},crosshair:{mode:1},rightPriceScale:{borderColor:"#1e2735"},timeScale:{borderColor:"#1e2735",timeVisible:!0,secondsVisible:p==="1m"}});const K=R.addCandlestickSeries({upColor:"#0ecb81",downColor:"#f6465d",borderUpColor:"#0ecb81",borderDownColor:"#f6465d",wickUpColor:"#0ecb81",wickDownColor:"#f6465d"}),Y=R.addHistogramSeries({priceFormat:{type:"volume"},priceScaleId:""});Y.priceScale().applyOptions({scaleMargins:{top:.82,bottom:0}}),d.current=R,f.current=K,m.current=Y,ge(null)}catch(K){console.error("Trade chart failed to initialize:",K),ge("Live chart unavailable");return}const L=()=>{if(h.current&&d.current)try{d.current.applyOptions({width:h.current.clientWidth,height:h.current.clientHeight})}catch(K){console.error("Trade chart resize failed:",K)}};return window.addEventListener("resize",L),L(),()=>{window.removeEventListener("resize",L);try{g.current=null,R.remove()}catch{}}},[]),k.useEffect(()=>{var R;try{(R=d.current)==null||R.applyOptions({timeScale:{secondsVisible:p==="1m"}})}catch(L){console.error("Trade chart option update failed:",L),ge("Live chart unavailable")}},[p]),k.useEffect(()=>{if(!f.current||!m.current)return;const R=V.map(K=>K.candle),L=V.map(K=>K.volume);try{f.current.setData(R),m.current.setData(L),ge(null)}catch(K){console.error("Trade chart data update failed:",K),ge("Live chart unavailable")}},[V]),k.useEffect(()=>{if(f.current)try{f.current.setMarkers(Q)}catch(R){console.error("Trade chart marker update failed:",R)}},[Q]),k.useEffect(()=>{if(f.current){if(g.current){try{f.current.removePriceLine(g.current)}catch{}g.current=null}if(!(!S||!l)){try{g.current=f.current.createPriceLine({price:l.entryPrice,color:l.direction==="up"?"#0ecb81":"#f6465d",lineWidth:2,lineStyle:2,axisLabelVisible:!0,title:`${l.direction==="up"?"UP":"DOWN"} $${de(l.amount)}`})}catch(R){console.error("Trade entry line failed:",R)}return()=>{if(!(!f.current||!g.current)){try{f.current.removePriceLine(g.current)}catch{}g.current=null}}}}},[l,S]),k.useEffect(()=>{let R=!0;return(async(K=!1)=>{K&&be(!0);try{const Y=await Lx(p,120);R&&Y.length>0&&I(Y)}catch{R&&I(Y=>Y.length>0?Y:Rx(p,e,120))}finally{R&&K&&be(!1)}})(!0),()=>{R=!1}},[p,e]),k.useEffect(()=>{const R=new WebSocket("wss://ws-feed.exchange.coinbase.com");return R.addEventListener("open",()=>{R.send(JSON.stringify({type:"subscribe",product_ids:["BTC-USD"],channels:["ticker"]}))}),R.addEventListener("message",L=>{try{const K=JSON.parse(L.data);if(K.type!=="ticker"||!K.price)return;const Y=Number(K.price),Ge=K.time?Math.floor(new Date(K.time).getTime()/1e3):Math.floor(Date.now()/1e3),ot=_x(p),ct=Math.floor(Ge/ot)*ot;I(Ft=>{if(Ft.length===0)return Ft;const yt=[...Ft],Le=yt[yt.length-1],Xm=Nd(Le.candle.time);return ct>Xm?(yt.push({candle:{time:ct,open:Le.candle.close,high:Math.max(Le.candle.close,Y),low:Math.min(Le.candle.close,Y),close:Y},volume:{time:ct,value:Math.max(Le.volume.value*.35,32),color:Y>=Le.candle.close?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}}),yt.slice(-120)):(yt[yt.length-1]={candle:{...Le.candle,high:Math.max(Le.candle.high,Y),low:Math.min(Le.candle.low,Y),close:Y},volume:{...Le.volume,value:Le.volume.value+.75,color:Y>=Le.candle.open?"rgba(14, 203, 129, 0.28)":"rgba(246, 70, 93, 0.28)"}},yt)})}catch{}}),()=>{R.close()}},[p]),k.useEffect(()=>{if(!S)return;const R=window.setInterval(()=>_(Date.now()),1e3);return()=>window.clearInterval(R)},[S]);const je=()=>{if(!v||!j||S)return;if(!T){alert("Verify your account in Profile before trading.");return}const R=parseFloat(j);if(R>((t==null?void 0:t.usdBalance)||0)){alert("Insufficient balance");return}const L=xh(ce,y,v),K=Nd(O==null?void 0:O.time);o({id:`trade-${Date.now()}`,pair:"BTC/USD",direction:v,amount:R,leverage:y,entryPrice:ce,liquidationPrice:L,timeframe:A.label,timeframeValue:A.value,tradeSeconds:A.tradeSeconds,entryTime:K,openedAt:new Date().toISOString(),endTime:new Date(Date.now()+A.tradeSeconds*1e3).toISOString(),userEmail:(t==null?void 0:t.email)||""})},Ie=()=>{x(null),u()},lt=k.useMemo(()=>v==="up"?"buy":v==="down"?"sell":"neutral",[v]);return a.jsxs("div",{className:"trade-shell",children:[a.jsx("style",{children:`
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
      `}),a.jsxs("section",{className:"trade-card chart-card",children:[a.jsxs("div",{className:"chart-top",children:[a.jsxs("div",{className:"pair-block",children:[a.jsx("div",{className:"pair-icon",children:"₿"}),a.jsxs("div",{className:"pair-inline",children:[a.jsxs("div",{className:"pair-copy",children:[a.jsx("h1",{children:"BTC/USD"}),a.jsx("p",{children:"Live Coinbase candles for the active market view"})]}),a.jsxs("div",{className:"pair-stats",children:[a.jsxs("div",{className:"pair-price",children:["$",ce.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("div",{className:`pair-change ${i>=0?"up":"down"}`,children:[i>=0?a.jsx(Lr,{size:15}):a.jsx(lm,{size:15}),i>=0?"+":"",i.toFixed(2),"%"]})]})]})]}),a.jsxs("div",{className:"pair-status",children:[a.jsx(yh,{size:13}),"Live"]}),a.jsx("div",{className:"timeframe-row",children:ps.map(R=>a.jsx("button",{className:`tf-btn ${p===R.value?"active":""}`,onClick:()=>w(R.value),children:R.label},R.value))})]}),a.jsxs("div",{className:"market-strip",children:[a.jsxs("div",{className:"strip-item",children:[a.jsx("div",{className:"strip-label",children:"24h High"}),a.jsxs("div",{className:"strip-value",children:["$",n.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"strip-item",children:[a.jsx("div",{className:"strip-label",children:"24h Low"}),a.jsxs("div",{className:"strip-value",children:["$",r.toLocaleString(void 0,{maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"strip-item",children:[a.jsx("div",{className:"strip-label",children:"Volume"}),a.jsx("div",{className:"strip-value",children:Pe.toLocaleString(void 0,{maximumFractionDigits:2})})]}),a.jsxs("div",{className:"strip-item",children:[a.jsx("div",{className:"strip-label",children:"Tools"}),a.jsxs("div",{className:"strip-value",style:{display:"flex",gap:"10px"},children:[a.jsx(Ac,{size:18}),a.jsx(yh,{size:18})]})]})]}),a.jsxs("div",{className:"chart-box",children:[a.jsx("div",{ref:h,className:"chart-canvas"}),Z&&a.jsx("div",{className:"chart-loading",children:"Updating live BTC candles..."}),S&&l&&a.jsxs("div",{className:`live-trade-overlay ${l.direction==="up"?"buy":"sell"}`,children:[a.jsxs("div",{className:"live-trade-main",children:[a.jsx("div",{className:`live-trade-badge ${l.direction==="up"?"buy":"sell"}`,children:l.direction==="up"?"UP":"DOWN"}),a.jsxs("div",{className:"live-trade-copy",children:[a.jsxs("strong",{children:[l.direction==="up"?"Buy / Up":"Sell / Down"," $",de(l.amount)]}),a.jsxs("span",{children:["BTC/USD $",l.entryPrice.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," • ",l.leverage,"x • ",l.timeframe]})]})]}),a.jsxs("div",{className:"live-trade-stats",children:[a.jsxs("div",{className:"live-trade-stat",children:[a.jsx("div",{className:"live-trade-stat-label",children:"Timer"}),a.jsx("div",{className:"live-trade-stat-value",children:Nl(B)})]}),a.jsxs("div",{className:"live-trade-stat",children:[a.jsx("div",{className:"live-trade-stat-label",children:"Live PnL"}),a.jsxs("div",{className:"live-trade-stat-value",style:{color:((D==null?void 0:D.pnl)||0)>=0?"#0ecb81":"#f6465d"},children:[((D==null?void 0:D.pnl)||0)>=0?"+":"","$",de(Math.abs((D==null?void 0:D.pnl)||0))]})]})]})]}),ke&&!Z&&a.jsxs("div",{className:"chart-fallback",children:[a.jsx("strong",{children:"Live BTC chart unavailable"}),a.jsx("div",{children:"The trade ticket is still available. Reload the page to retry the chart connection."})]})]})]}),a.jsxs("aside",{className:"trade-card trade-panel",children:[a.jsx("div",{className:"panel-title",children:"Trade ticket"}),a.jsxs("div",{className:"ticket-topbar",children:[a.jsxs("div",{className:"ticket-topbar-copy",children:[a.jsx("strong",{children:"Margin Level"}),a.jsx("span",{children:"Available balance"})]}),a.jsx("div",{className:"ticket-topbar-value",children:de((t==null?void 0:t.usdBalance)||0)})]}),a.jsxs("div",{className:"ticket-pill-row",children:[a.jsx("div",{className:"ticket-pill emphasis",children:"Cross"}),a.jsxs("div",{className:"ticket-pill",children:[y,"x"]}),a.jsx("div",{className:"ticket-pill",children:"Auto"})]}),a.jsxs("div",{className:"trade-box",children:[a.jsx("div",{className:"trade-label",children:"Direction"}),a.jsxs("div",{className:"direction-grid",children:[a.jsx("button",{className:`dir-btn buy ${v==="up"?"active":""}`,onClick:()=>x("up"),disabled:S,children:"Buy"}),a.jsx("button",{className:`dir-btn sell ${v==="down"?"active":""}`,onClick:()=>x("down"),disabled:S,children:"Sell"})]})]}),a.jsx("div",{className:"trade-box",children:a.jsxs("div",{className:"trade-form-grid",children:[a.jsxs("div",{className:"trade-field",children:[a.jsxs("div",{className:"trade-field-head",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:0},children:"Order Amount"}),a.jsx("div",{className:"trade-field-unit",children:"USDT"})]}),a.jsx("input",{value:j,onChange:R=>z(R.target.value),className:"amount-input",type:"number",min:"1",placeholder:"100"})]}),a.jsxs("div",{children:[a.jsx("div",{className:"trade-label",children:"Quick Amount"}),a.jsx("div",{className:"preset-grid",children:ow.map(R=>a.jsxs("button",{className:`preset-btn ${j===String(R)?"active":""}`,onClick:()=>z(String(R)),children:["$",R]},R))})]}),a.jsxs("div",{children:[a.jsx("div",{className:"trade-label",children:"Leverage"}),a.jsx("div",{className:"leverage-grid",children:lw.map(R=>a.jsxs("button",{className:`lev-btn ${y===R?"active":""}`,onClick:()=>b(R),children:[R,"x"]},R))})]})]})}),a.jsxs("div",{className:"trade-box",children:[a.jsx("div",{className:"trade-label",children:"Order summary"}),a.jsxs("div",{className:"info-list",children:[a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Entry price"}),a.jsxs("strong",{children:["$",ce.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Potential payout"}),a.jsxs("strong",{style:{color:"#0ecb81"},children:["$",de(P)]})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Max loss"}),a.jsxs("strong",{style:{color:"#f6465d"},children:["$",de(F||0)]})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Trade duration"}),a.jsx("strong",{children:A.label})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Settlement timer"}),a.jsx("strong",{children:Nl(A.tradeSeconds)})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{children:"Estimated liquidation"}),a.jsxs("strong",{children:["$",xh(ce,y,v||"up").toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]})]}),S&&a.jsxs("div",{className:"result-card win",children:[a.jsx("div",{style:{fontWeight:700},children:"Trade running"}),a.jsx("div",{className:"result-value",children:Nl(B)}),a.jsxs("div",{children:["Contract: ",N.label]}),a.jsxs("div",{children:["Entry: $",l==null?void 0:l.entryPrice.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("div",{children:["Live PnL: ",a.jsxs("span",{style:{color:((D==null?void 0:D.pnl)||0)>=0?"#0ecb81":"#f6465d"},children:[((D==null?void 0:D.pnl)||0)>=0?"+":"","$",de(Math.abs((D==null?void 0:D.pnl)||0))]})]}),a.jsxs("div",{children:["Move: ",a.jsxs("span",{style:{color:((D==null?void 0:D.directionalMovePct)||0)>=0?"#0ecb81":"#f6465d"},children:[((D==null?void 0:D.directionalMovePct)||0)>=0?"+":"",((D==null?void 0:D.directionalMovePct)||0).toFixed(3),"%"]})]}),a.jsxs("div",{children:["Liq: $",l==null?void 0:l.liquidationPrice.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),c&&a.jsxs("div",{className:`result-card ${c.won?"win":"loss"}`,children:[a.jsx("div",{style:{fontWeight:700},children:c.outcomeReason==="liquidation"?"Trade liquidated":c.won?"Trade won":"Trade lost"}),a.jsxs("div",{className:"result-value",style:{color:c.won?"#0ecb81":"#f6465d"},children:[c.pnl>=0?"+":"","$",de(Math.abs(c.pnl))]}),a.jsx("button",{className:"tf-btn active",onClick:Ie,children:"New trade"})]}),a.jsx("button",{className:`trade-submit ${lt}`,disabled:!v||!j||S||!T,onClick:je,children:S?`Trade running (${N.label})...`:T?v==="up"?`Margin Buy ${A.label}`:v==="down"?`Margin Sell ${A.label}`:"Choose direction":"Verify Account To Trade"}),!T&&a.jsx("div",{className:"verify-warning",children:"This account is still unverified. Go to Profile, submit your verification form and document photos, then wait for System Admin approval before trading."}),a.jsxs("div",{className:"trade-box",children:[a.jsx("div",{className:"trade-label",children:"Recent trades"}),a.jsx("div",{className:"recent-list",children:H.slice(0,4).map(R=>a.jsxs("div",{className:"recent-row",children:[a.jsxs("div",{className:"recent-cell",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:R.pair}),a.jsxs("div",{className:"recent-pair",children:[a.jsx("span",{className:"recent-pair-name",children:R.pair}),a.jsx("span",{className:"recent-dir",style:{color:R.direction==="up"?"#0ecb81":"#f6465d"},children:R.direction.toUpperCase()})]})]}),a.jsxs("div",{className:"recent-cell",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:"Amount"}),a.jsxs("div",{className:"recent-value",children:["$",R.amount]})]}),a.jsxs("div",{className:"recent-cell",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:"PnL"}),a.jsxs("div",{className:"recent-value",style:{color:(R.pnl||0)>=0?"#0ecb81":"#f6465d"},children:[(R.pnl||0)>=0?"+":"","$",de(Math.abs(R.pnl||0))]})]}),a.jsxs("div",{className:"recent-cell",children:[a.jsx("div",{className:"trade-label",style:{marginBottom:"4px"},children:"Close"}),a.jsx("div",{className:"recent-value",style:{color:R.status==="won"?"#0ecb81":"#f6465d"},children:R.outcomeReason==="liquidation"?"Liquidated":R.timeframe})]})]},R.id))})]})]})]})}const uw=["United States","United Kingdom","Canada","Australia","Germany","France","Italy","Spain","Netherlands","Switzerland","Sweden","Norway","Denmark","United Arab Emirates","Saudi Arabia","Singapore","Malaysia","Thailand","Myanmar","India","Japan","South Korea","Philippines","Indonesia","Vietnam","Brazil","Mexico","South Africa","Nigeria"];function hw(t){return t==="approved"?"Verified Account":t==="pending"?"Verification Pending":t==="rejected"?"Verification Rejected":"Unverified Account"}function dw(){var Z,be,ke,ge,O,ce,Pe,P,F,A,N,S,T,B,D,H,Q,je,Ie,lt,En,zn,R;const{user:t,updateUser:e,submitKycRequest:i}=mi(),n=(t==null?void 0:t.verificationStatus)==="approved",r=t!=null&&t.joinedDate?new Date(t.joinedDate).toLocaleDateString():"Not available",[s,l]=k.useState("profile"),[c,o]=k.useState(!1),[u,h]=k.useState(!1),[d,f]=k.useState(!1),[m,g]=k.useState({name:(t==null?void 0:t.name)||"",email:(t==null?void 0:t.email)||"",phone:n&&(t==null?void 0:t.phone)||"",country:n&&(t==null?void 0:t.country)||"",city:n&&(t==null?void 0:t.city)||"",postCode:n&&(t==null?void 0:t.postCode)||"",timezone:(t==null?void 0:t.timezone)||"",avatar:(t==null?void 0:t.avatar)||""}),[p,w]=k.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[v,x]=k.useState({fullName:((Z=t==null?void 0:t.kyc)==null?void 0:Z.fullName)||(t==null?void 0:t.name)||"",phone:((be=t==null?void 0:t.kyc)==null?void 0:be.phone)||n&&(t==null?void 0:t.phone)||"",country:((ke=t==null?void 0:t.kyc)==null?void 0:ke.country)||n&&(t==null?void 0:t.country)||"",city:((ge=t==null?void 0:t.kyc)==null?void 0:ge.city)||n&&(t==null?void 0:t.city)||"",postCode:((O=t==null?void 0:t.kyc)==null?void 0:O.postCode)||n&&(t==null?void 0:t.postCode)||"",job:((ce=t==null?void 0:t.kyc)==null?void 0:ce.job)||n&&(t==null?void 0:t.job)||"",documentType:((Pe=t==null?void 0:t.kyc)==null?void 0:Pe.documentType)||"passport",frontImage:((P=t==null?void 0:t.kyc)==null?void 0:P.frontImage)||"",backImage:((F=t==null?void 0:t.kyc)==null?void 0:F.backImage)||""});k.useEffect(()=>{var L,K,Y,Ge,ot,ct,Ft,yt,Le;g({name:(t==null?void 0:t.name)||"",email:(t==null?void 0:t.email)||"",phone:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.phone)||"",country:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.country)||"",city:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.city)||"",postCode:(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.postCode)||"",timezone:(t==null?void 0:t.timezone)||"",avatar:(t==null?void 0:t.avatar)||""}),x({fullName:((L=t==null?void 0:t.kyc)==null?void 0:L.fullName)||(t==null?void 0:t.name)||"",phone:((K=t==null?void 0:t.kyc)==null?void 0:K.phone)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.phone)||"",country:((Y=t==null?void 0:t.kyc)==null?void 0:Y.country)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.country)||"",city:((Ge=t==null?void 0:t.kyc)==null?void 0:Ge.city)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.city)||"",postCode:((ot=t==null?void 0:t.kyc)==null?void 0:ot.postCode)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.postCode)||"",job:((ct=t==null?void 0:t.kyc)==null?void 0:ct.job)||(t==null?void 0:t.verificationStatus)==="approved"&&(t==null?void 0:t.job)||"",documentType:((Ft=t==null?void 0:t.kyc)==null?void 0:Ft.documentType)||"passport",frontImage:((yt=t==null?void 0:t.kyc)==null?void 0:yt.frontImage)||"",backImage:((Le=t==null?void 0:t.kyc)==null?void 0:Le.backImage)||""})},[t]);const y=(t==null?void 0:t.verificationStatus)||"unverified",b=k.useMemo(()=>hw(y),[y]),j=n?"Verified Trader":b,z=()=>{e(m),o(!1)},M=L=>{var Ge;const K=(Ge=L.target.files)==null?void 0:Ge[0];if(!K)return;const Y=new FileReader;Y.onload=()=>{const ot=typeof Y.result=="string"?Y.result:"";ot&&g(ct=>({...ct,avatar:ot}))},Y.readAsDataURL(K)},_=L=>K=>{var ot;const Y=(ot=K.target.files)==null?void 0:ot[0];if(!Y)return;const Ge=new FileReader;Ge.onload=()=>{const ct=typeof Ge.result=="string"?Ge.result:"";ct&&x(Ft=>({...Ft,[L]:ct}))},Ge.readAsDataURL(Y)},V=()=>{if(!p.newPassword||p.newPassword!==p.confirmPassword){alert("New passwords do not match");return}e({password:p.newPassword}),w({currentPassword:"",newPassword:"",confirmPassword:""}),h(!1)},I=()=>{if(!v.fullName||!v.phone||!v.country||!v.city||!v.postCode||!v.job||!v.frontImage||!v.backImage){alert("Complete all verification fields and upload both document images.");return}e({isVerified:!1,verificationStatus:"pending",kyc:{...v,documentType:v.documentType,status:"pending",submittedAt:new Date().toISOString(),reviewedAt:void 0,reviewedBy:void 0}}),t&&i({id:`kyc-${Date.now()}`,userEmail:t.email,userName:t.name,fullName:v.fullName,phone:v.phone,country:v.country,city:v.city,postCode:v.postCode,job:v.job,documentType:v.documentType,frontImage:v.frontImage,backImage:v.backImage,status:"pending",submittedAt:new Date().toISOString()}),f(!0)};return a.jsxs("div",{className:"profile-shell",children:[a.jsx("style",{children:`
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
        .doc-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .doc-card {
          padding: 16px;
          border-radius: 20px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
        }
        .doc-card strong {
          display: block;
          margin-bottom: 10px;
        }
        .doc-preview {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8fa2ba;
          font-size: 13px;
        }
        .doc-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          .doc-grid { grid-template-columns: 1fr; }
          .certificate-sheet { padding: 20px; }
          .certificate-brand { align-items: flex-start; }
        }
      `}),a.jsxs("section",{className:"card hero",children:[a.jsxs("div",{className:"hero-main",children:[a.jsxs("div",{className:"avatar-wrap",children:[m.avatar?a.jsx("img",{src:m.avatar,alt:m.name}):a.jsx("div",{className:"avatar-fallback",children:m.name.charAt(0).toUpperCase()}),a.jsx("div",{className:"avatar-edit",children:a.jsx(ns,{size:16})})]}),a.jsxs("div",{children:[a.jsx("h1",{children:m.name||"Trader"}),a.jsx("p",{children:m.email||"No email added yet"}),a.jsxs("div",{className:`hero-badge ${y==="approved"?"approved":y==="pending"?"pending":y==="rejected"?"rejected":"unverified"}`,children:[a.jsx(wh,{size:14}),b]})]})]}),a.jsxs("div",{className:"hero-side",children:[a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{children:"Access"}),a.jsx("strong",{children:n?"Trading Enabled":"Trading Locked"})]}),a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{children:"Profile"}),a.jsx("strong",{children:n?"Verified Identity":"Needs Verification"})]}),a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{children:"Country"}),a.jsx("strong",{children:n?m.country||"Not set":"Hidden until verified"})]}),a.jsxs("div",{className:"hero-stat",children:[a.jsx("span",{children:"Phone"}),a.jsx("strong",{children:n?m.phone||"Not set":"Hidden until verified"})]})]})]}),a.jsxs("section",{className:"desk-strip",children:[a.jsxs("div",{className:"desk-card",children:[a.jsx("span",{children:"Account Tier"}),a.jsx("strong",{children:j}),a.jsx("small",{children:"Your profile status updates here after admin review."})]}),a.jsxs("div",{className:"desk-card",children:[a.jsx("span",{children:"Member Since"}),a.jsx("strong",{children:r}),a.jsx("small",{children:"Account creation date for this trading profile."})]}),a.jsxs("div",{className:"desk-card",children:[a.jsx("span",{children:"Timezone"}),a.jsx("strong",{children:m.timezone||"UTC"}),a.jsx("small",{children:"Your dashboard and profile follow this account region."})]}),a.jsxs("div",{className:"desk-card",children:[a.jsx("span",{children:"Security State"}),a.jsx("strong",{children:t!=null&&t.password?"Password Active":"Password Not Set"}),a.jsx("small",{children:"Use the security tab to refresh your sign-in credentials."})]})]}),a.jsxs("div",{className:"tabs",children:[a.jsxs("button",{className:`tab-btn ${s==="profile"?"active":""}`,onClick:()=>l("profile"),children:[a.jsx(Rr,{size:16})," Profile"]}),a.jsxs("button",{className:`tab-btn ${s==="security"?"active":""}`,onClick:()=>l("security"),children:[a.jsx(Ic,{size:16})," Security"]}),a.jsxs("button",{className:`tab-btn ${s==="verification"?"active":""}`,onClick:()=>l("verification"),children:[a.jsx(bh,{size:16})," Verification"]})]}),s==="profile"&&a.jsxs("section",{className:"card content-card profile-card",children:[a.jsxs("div",{className:"card-head",children:[a.jsx("h2",{children:"Personal Information"}),a.jsx("button",{className:`edit-btn ${c?"save":""}`,onClick:()=>c?z():o(!0),children:c?a.jsxs(a.Fragment,{children:[a.jsx(tm,{size:16})," Save"]}):"Edit Profile"})]}),a.jsxs("div",{className:"account-grid",children:[a.jsxs("div",{className:"account-chip",children:[a.jsx("span",{children:"User Name"}),a.jsx("strong",{children:m.name||"Trader"})]}),a.jsxs("div",{className:"account-chip",children:[a.jsx("span",{children:"User Email"}),a.jsx("strong",{children:m.email||"No email added yet"})]}),a.jsxs("div",{className:"account-chip",children:[a.jsx("span",{children:"Account Status"}),a.jsx("strong",{children:y==="approved"?"Verified account":y==="pending"?"Verification pending":"Unverified account"})]}),a.jsxs("div",{className:"account-chip",children:[a.jsx("span",{children:"Account ID"}),a.jsx("strong",{children:(t==null?void 0:t.id)||"Not assigned"})]})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{value:m.name,disabled:!c,onChange:L=>g({...m,name:L.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Email"}),a.jsx("input",{value:m.email,disabled:!0})]}),n&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Phone"}),a.jsx("input",{value:m.phone,disabled:!c,onChange:L=>g({...m,phone:L.target.value})})]}),n&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Country"}),a.jsx("input",{value:m.country,disabled:!c,onChange:L=>g({...m,country:L.target.value})})]}),n&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"City"}),a.jsx("input",{value:m.city,disabled:!c,onChange:L=>g({...m,city:L.target.value})})]}),n&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Post Code"}),a.jsx("input",{value:m.postCode,disabled:!c,onChange:L=>g({...m,postCode:L.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Timezone"}),a.jsx("input",{value:m.timezone,disabled:!c,onChange:L=>g({...m,timezone:L.target.value})})]}),n&&a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Job"}),a.jsx("input",{value:(t==null?void 0:t.job)||"",disabled:!0})]}),a.jsxs("div",{className:"avatar-section",children:[a.jsx("div",{className:"avatar-section-head",children:a.jsxs("div",{className:"avatar-section-copy",children:[a.jsx("strong",{children:"Profile Photo"}),a.jsx("span",{children:"Upload your own photo from your phone or computer."})]})}),a.jsxs("div",{className:"avatar-preview-row",children:[a.jsx("div",{className:"avatar-preview-chip",children:m.avatar?a.jsx("img",{src:m.avatar,alt:m.name||"profile avatar"}):a.jsx("div",{className:"avatar-fallback",children:m.name.charAt(0).toUpperCase()})}),a.jsxs("div",{className:"avatar-preview-copy",children:[a.jsx("strong",{children:m.name||"Trader Profile"}),a.jsx("span",{children:c?"Choose an image file, then save your profile changes.":"Your current public trading profile image."})]})]}),a.jsx("div",{className:"avatar-help",children:"Your profile photo is stored in this demo account after you save the profile."}),a.jsxs("div",{className:"avatar-actions",children:[a.jsxs("label",{className:"upload-btn",children:[a.jsx(ns,{size:16}),"Choose Photo",a.jsx("input",{className:"sr-only",type:"file",accept:"image/*",disabled:!c,onChange:M})]}),a.jsx("span",{className:"upload-note",children:"JPG, PNG, or WEBP from mobile or desktop"})]})]})]})]}),s==="security"&&a.jsxs("section",{className:"card content-card",children:[a.jsxs("div",{className:"card-head",children:[a.jsx("h2",{children:"Security Settings"}),a.jsx("button",{className:`edit-btn ${u?"save":""}`,onClick:()=>u?V():h(!0),children:u?"Update Password":"Change Password"})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Current Password"}),a.jsx("input",{type:"password",value:p.currentPassword,disabled:!u,onChange:L=>w({...p,currentPassword:L.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"New Password"}),a.jsx("input",{type:"password",value:p.newPassword,disabled:!u,onChange:L=>w({...p,newPassword:L.target.value})})]}),a.jsxs("div",{className:"field full",children:[a.jsx("label",{children:"Confirm New Password"}),a.jsx("input",{type:"password",value:p.confirmPassword,disabled:!u,onChange:L=>w({...p,confirmPassword:L.target.value})})]})]}),a.jsx("div",{className:"submit-note",children:"This is still a demo app, but the password now updates in your stored user profile so the settings area feels more real."})]}),s==="verification"&&a.jsxs("section",{className:"card content-card",children:[a.jsx("div",{className:"card-head",children:a.jsx("h2",{children:"KYC Verification"})}),a.jsx("div",{className:"kyc-stage",children:y==="approved"?a.jsxs("div",{className:"verified-card",children:[a.jsxs("div",{className:"kyc-headline",children:[a.jsx(wh,{size:22}),"Verified Successfully"]}),a.jsx("div",{className:"kyc-copy",children:"Your account is verified and trading access is active. BTCTradePro has approved the profile information you submitted."}),a.jsxs("div",{className:"certificate-sheet",children:[a.jsxs("div",{className:"certificate-brand",children:[a.jsx("div",{className:"certificate-badge",children:"₿"}),a.jsxs("div",{children:[a.jsx("div",{className:"certificate-title",children:"BTCTradePro Compliance Network"}),a.jsx("div",{className:"certificate-title",children:"Verification Department"}),a.jsx("div",{className:"certificate-subtitle",children:"Account Verification Status Information"})]})]}),a.jsx("div",{className:"certificate-center",children:"Identity Verification Confirmation"}),a.jsxs("div",{className:"certificate-meta",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Date:"})," ",new Date().toLocaleDateString()]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Account Holder:"})," ",((A=t==null?void 0:t.kyc)==null?void 0:A.fullName)||(t==null?void 0:t.name)]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Account Email:"})," ",(t==null?void 0:t.email)||"No email added"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Phone:"})," ",((N=t==null?void 0:t.kyc)==null?void 0:N.phone)||(t==null?void 0:t.phone)]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Country:"})," ",((S=t==null?void 0:t.kyc)==null?void 0:S.country)||(t==null?void 0:t.country)]}),a.jsxs("div",{children:[a.jsx("strong",{children:"City:"})," ",((T=t==null?void 0:t.kyc)==null?void 0:T.city)||(t==null?void 0:t.city)]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Post Code:"})," ",((B=t==null?void 0:t.kyc)==null?void 0:B.postCode)||(t==null?void 0:t.postCode)]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Job:"})," ",((D=t==null?void 0:t.kyc)==null?void 0:D.job)||(t==null?void 0:t.job)]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Document Type:"})," ",(((H=t==null?void 0:t.kyc)==null?void 0:H.documentType)||"passport").replace("_"," ")]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Verification Status:"})," Approved"]})]}),a.jsx("div",{className:"certificate-notice",children:"This letter confirms that the submitted account information and identity documents have been reviewed by BTCTradePro and marked as verified for platform trading access."}),a.jsxs("div",{className:"certificate-sign",children:["Sincerely, ",a.jsx("strong",{children:"BTCTradePro Verification Department"})]})]}),a.jsx("div",{className:"submit-note",children:"Submitted document images are stored in the system review, but they are hidden from the verified profile view."})]}):y==="pending"?a.jsxs("div",{className:"waiting-card",children:[a.jsxs("div",{className:"kyc-headline",children:[a.jsx(bh,{size:22}),"Verification Waiting Letter"]}),a.jsx("div",{className:"kyc-copy",children:"Your verification request has been sent to System Admin. Please wait while your identity information and document images are reviewed."}),a.jsxs("div",{className:"info-list",style:{marginTop:"18px"},children:[a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Full Name"}),a.jsx("small",{children:(Q=t==null?void 0:t.kyc)==null?void 0:Q.fullName})]}),a.jsx("div",{className:"status-pill pending",children:"Pending"})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Phone"}),a.jsx("small",{children:(je=t==null?void 0:t.kyc)==null?void 0:je.phone})]}),a.jsx("div",{children:(((Ie=t==null?void 0:t.kyc)==null?void 0:Ie.documentType)||"passport").replace("_"," ")})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Country"}),a.jsx("small",{children:(lt=t==null?void 0:t.kyc)==null?void 0:lt.country})]}),a.jsx("div",{children:(((En=t==null?void 0:t.kyc)==null?void 0:En.documentType)||"passport").replace("_"," ")})]})]}),a.jsxs("div",{className:"doc-grid",style:{marginTop:"18px"},children:[a.jsxs("div",{className:"doc-card",children:[a.jsx("strong",{children:"Front Document"}),a.jsx("div",{className:"doc-preview",children:(zn=t==null?void 0:t.kyc)!=null&&zn.frontImage?a.jsx("img",{src:t.kyc.frontImage,alt:"pending front document"}):"No image"})]}),a.jsxs("div",{className:"doc-card",children:[a.jsx("strong",{children:"Back Document"}),a.jsx("div",{className:"doc-preview",children:(R=t==null?void 0:t.kyc)!=null&&R.backImage?a.jsx("img",{src:t.kyc.backImage,alt:"pending back document"}):"No image"})]})]}),(d||y==="pending")&&a.jsx("div",{className:"submit-note",children:"Verification request sent successfully. Trading stays locked until approval."})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{value:v.fullName,onChange:L=>x({...v,fullName:L.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Phone Number"}),a.jsx("input",{value:v.phone,onChange:L=>x({...v,phone:L.target.value}),placeholder:"+1 234 567 8900"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Country"}),a.jsxs("select",{value:v.country,onChange:L=>x({...v,country:L.target.value}),children:[a.jsx("option",{value:"",children:"Choose a country"}),uw.map(L=>a.jsx("option",{value:L,children:L},L))]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"City"}),a.jsx("input",{value:v.city,onChange:L=>x({...v,city:L.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Post Code"}),a.jsx("input",{value:v.postCode,onChange:L=>x({...v,postCode:L.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Job"}),a.jsx("input",{value:v.job,onChange:L=>x({...v,job:L.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Document Type"}),a.jsxs("select",{value:v.documentType,onChange:L=>x({...v,documentType:L.target.value}),children:[a.jsx("option",{value:"passport",children:"Passport"}),a.jsx("option",{value:"id_card",children:"ID Card"}),a.jsx("option",{value:"drivers_license",children:"Driver License"})]})]}),a.jsxs("div",{className:"doc-card full",children:[a.jsx("strong",{children:"Document Front"}),a.jsx("div",{className:"doc-preview",style:{marginBottom:"12px"},children:v.frontImage?a.jsx("img",{src:v.frontImage,alt:"front document preview"}):"Upload the front side image"}),a.jsxs("label",{className:"upload-btn",children:[a.jsx(ns,{size:16}),"Upload Front Image",a.jsx("input",{className:"sr-only",type:"file",accept:"image/*",onChange:_("frontImage")})]})]}),a.jsxs("div",{className:"doc-card full",children:[a.jsx("strong",{children:"Document Back"}),a.jsx("div",{className:"doc-preview",style:{marginBottom:"12px"},children:v.backImage?a.jsx("img",{src:v.backImage,alt:"back document preview"}):"Upload the back side image"}),a.jsxs("label",{className:"upload-btn",children:[a.jsx(ns,{size:16}),"Upload Back Image",a.jsx("input",{className:"sr-only",type:"file",accept:"image/*",onChange:_("backImage")})]})]})]}),a.jsx("button",{className:"edit-btn save",style:{marginTop:"18px"},onClick:I,children:"Verify Account"}),a.jsx("div",{className:"submit-note",children:"Complete this form and upload front and back document photos. After submission, the request goes to System Admin and your account stays unverified until approval."})]})})]})]})}const fw=[{id:"1",title:"Bitcoin Surges Past $68,000 as Institutional Adoption Accelerates",description:"Major financial institutions continue to embrace Bitcoin, driving prices to new yearly highs amid growing demand for cryptocurrency exposure.",url:"#",imageUrl:"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400",source:"CryptoNews",publishedAt:"2026-04-29T14:30:00"},{id:"2",title:"Ethereum ETF Sees Record Inflows Following Bitcoin Success",description:"Following the approval of spot Bitcoin ETFs, institutional investors are now showing increased interest in Ethereum-based investment products.",url:"#",imageUrl:"https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400",source:"BlockchainDaily",publishedAt:"2026-04-29T12:15:00"},{id:"3",title:"DeFi Protocol Reaches $50 Billion in Total Value Locked",description:"Decentralized finance continues its explosive growth as new protocols offer innovative solutions for yield farming and liquidity provision.",url:"#",imageUrl:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400",source:"DeFi Weekly",publishedAt:"2026-04-29T10:45:00"},{id:"4",title:"El Salvador Celebrates Three Years of Bitcoin as Legal Tender",description:"The Central American nation marks a milestone as President highlights the economic benefits of cryptocurrency adoption.",url:"#",imageUrl:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400",source:"Global Finance",publishedAt:"2026-04-28T18:00:00"},{id:"5",title:"SEC Announces New Cryptocurrency Regulatory Framework",description:"Regulators unveil comprehensive guidelines for digital asset classification and trading, providing clarity for market participants.",url:"#",imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",source:"Regulatory Watch",publishedAt:"2026-04-28T15:30:00"},{id:"6",title:"Major Bank Launches Bitcoin Trading for Retail Customers",description:"One of the world's largest banks begins offering cryptocurrency services, marking a significant shift in traditional finance.",url:"#",imageUrl:"https://images.unsplash.com/photo-1559526324-593bc073d938?w=400",source:"Banking Weekly",publishedAt:"2026-04-28T09:00:00"},{id:"7",title:"Bitcoin Mining Difficulty Reaches All-Time High",description:"Network security continues to strengthen as miners deploy more computational power to secure the Bitcoin blockchain.",url:"#",imageUrl:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",source:"Mining Today",publishedAt:"2026-04-27T20:15:00"},{id:"8",title:"NFT Market Shows Signs of Recovery with New Collections",description:"Digital collectibles regain attention as major brands launch new NFT projects on Ethereum and Solana.",url:"#",imageUrl:"https://images.unsplash.com/photo-1646463876221-9a37f4a4e5db?w=400",source:"NFT Observer",publishedAt:"2026-04-27T16:45:00"}],pw=["All","Bitcoin","Ethereum","DeFi","Regulatory","Mining"];function mw(){const[t]=k.useState(fw),[e,i]=k.useState(""),[n,r]=k.useState("All"),[s,l]=k.useState([]),[c,o]=k.useState(!1),u=f=>{l(m=>m.includes(f)?m.filter(g=>g!==f):[...m,f])},h=t.filter(f=>{const m=f.title.toLowerCase().includes(e.toLowerCase())||f.description.toLowerCase().includes(e.toLowerCase()),g=n==="All"||n==="Bitcoin"&&f.title.toLowerCase().includes("bitcoin")||n==="Ethereum"&&f.title.toLowerCase().includes("ethereum")||n==="DeFi"&&f.title.toLowerCase().includes("defi")||n==="Regulatory"&&f.title.toLowerCase().includes("sec")||f.title.toLowerCase().includes("regulatory")||n==="Mining"&&f.title.toLowerCase().includes("mining");return m&&g}),d=f=>{const m=new Date(f),p=Math.floor((new Date().getTime()-m.getTime())/(1e3*60*60));return p<1?"Just now":p<24?`${p}h ago`:p<48?"Yesterday":m.toLocaleDateString("en-US",{month:"short",day:"numeric"})};return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"text-3xl font-bold text-white flex items-center gap-3",children:[a.jsx(br,{className:"text-btc-gold"}),"Crypto News"]}),a.jsx("p",{className:"text-btc-text-secondary mt-1",children:"Stay updated with the latest cryptocurrency news"})]}),a.jsxs("div",{className:"relative flex-1 max-w-md",children:[a.jsx(e1,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-btc-text-secondary"}),a.jsx("input",{type:"text",value:e,onChange:f=>i(f.target.value),placeholder:"Search news...",className:"w-full pl-11 pr-4 py-3 bg-btc-dark border border-btc-border rounded-xl text-white placeholder-btc-text-secondary focus:border-btc-gold"})]})]}),a.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-2",children:[pw.map(f=>a.jsx("button",{onClick:()=>r(f),className:`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${n===f?"bg-btc-gold text-btc-dark":"bg-btc-secondary border border-btc-border text-btc-text-secondary hover:text-white hover:border-btc-gold/50"}`,children:f},f)),a.jsx("button",{onClick:()=>o(!0),className:"ml-auto p-2 bg-btc-secondary border border-btc-border rounded-lg text-btc-text-secondary hover:text-white hover:border-btc-gold/50 transition-colors",children:a.jsx(Zx,{size:18,className:c?"animate-spin":""})})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map(f=>a.jsxs("article",{className:"bg-btc-secondary border border-btc-border rounded-xl overflow-hidden hover:border-btc-gold/50 transition-all group",children:[a.jsxs("div",{className:"relative h-48 overflow-hidden",children:[a.jsx("img",{src:f.imageUrl,alt:f.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",onError:m=>{m.target.src="https://via.placeholder.com/400x200/1E2329/848E9C?text=Crypto+News"}}),a.jsx("button",{onClick:()=>u(f.id),className:"absolute top-3 right-3 p-2 bg-btc-dark/80 rounded-full hover:bg-btc-dark transition-colors",children:s.includes(f.id)?a.jsx(Vx,{size:18,className:"text-btc-gold"}):a.jsx(Ux,{size:18,className:"text-white"})}),a.jsx("span",{className:"absolute bottom-3 left-3 px-3 py-1 bg-btc-gold/90 text-btc-dark text-xs font-bold rounded-full",children:f.source})]}),a.jsxs("div",{className:"p-5",children:[a.jsx("h3",{className:"text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-btc-gold transition-colors",children:f.title}),a.jsx("p",{className:"text-btc-text-secondary text-sm mb-4 line-clamp-3",children:f.description}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"flex items-center gap-1 text-xs text-btc-text-secondary",children:[a.jsx(qx,{size:12}),d(f.publishedAt)]}),a.jsxs("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-sm text-btc-gold hover:underline",children:["Read More ",a.jsx(Xx,{size:14})]})]})]})]},f.id))}),h.length===0&&a.jsxs("div",{className:"text-center py-12",children:[a.jsx(br,{size:48,className:"text-btc-text-secondary mx-auto mb-4"}),a.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"No news found"}),a.jsx("p",{className:"text-btc-text-secondary",children:"Try adjusting your search or category filters"})]}),a.jsx("div",{className:"bg-btc-dark/50 rounded-xl p-4 text-sm",children:a.jsx("p",{className:"text-btc-text-secondary text-center",children:"News powered by NewsAPI. Set VITE_NEWSAPI_KEY in your environment for live crypto news."})})]})}const gw=[{id:"1",senderId:"admin",senderName:"Support Desk",message:"Welcome to BTCTradePro support. Tell us if you need help with deposit approval, wallet status, or your trade desk.",timestamp:"2026-04-28T10:00:00",isAdmin:!0}];function vw(){const{user:t}=mi(),[e,i]=k.useState(gw),[n,r]=k.useState(""),[s,l]=k.useState(!1),c=k.useRef(null);k.useEffect(()=>{var u;(u=c.current)==null||u.scrollIntoView({behavior:"smooth"})},[e,s]);const o=()=>{if(!n.trim())return;const u={id:`msg-${Date.now()}`,senderId:(t==null?void 0:t.id)||"user",senderName:(t==null?void 0:t.name)||"User",message:n,timestamp:new Date().toISOString(),isAdmin:!1};i(h=>[...h,u]),r(""),setTimeout(()=>{l(!0),setTimeout(()=>{l(!1),i(h=>[...h,{id:`msg-${Date.now()+1}`,senderId:"admin",senderName:"Support Desk",message:"Your request has been logged. For wallet actions, our admin reviews pending deposits and withdrawals from the back office queue.",timestamp:new Date().toISOString(),isAdmin:!0}])},1400)},500)};return a.jsxs("div",{className:"support-shell",children:[a.jsx("style",{children:`
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
      `}),a.jsxs("section",{className:"card hero",children:[a.jsxs("div",{className:"hero-main",children:[a.jsx("div",{className:"hero-icon",children:a.jsx(sm,{size:24})}),a.jsxs("div",{children:[a.jsx("h1",{children:"Support Center"}),a.jsx("p",{children:"Professional help desk for wallet issues, KYC, and trade questions."})]})]}),a.jsxs("div",{className:"status-pill",children:[a.jsx(ai,{size:16}),"Live Team Online"]})]}),a.jsxs("section",{className:"grid",children:[a.jsxs("aside",{className:"card sidebar",children:[a.jsx("h3",{children:"Quick actions"}),a.jsx("div",{className:"quick-list",children:["Deposit approval","Withdrawal queue","Trade issue","KYC question"].map(u=>a.jsx("button",{className:"quick-btn",onClick:()=>r(u),children:u},u))})]}),a.jsxs("div",{className:"card chat-card",children:[a.jsxs("div",{className:"chat-head",children:[a.jsx("strong",{children:"Conversation"}),a.jsx("span",{className:"status-pill",children:"Avg. response: 5 min"})]}),a.jsxs("div",{className:"chat-stream",children:[e.map(u=>a.jsx("div",{className:`message-row ${u.isAdmin?"admin":"user"}`,children:a.jsxs("div",{className:"message-wrap",children:[a.jsx("div",{className:"avatar",children:u.isAdmin?a.jsx(ai,{size:18}):t!=null&&t.avatar?a.jsx("img",{src:t.avatar,alt:t.name}):a.jsx(Rr,{size:18})}),a.jsxs("div",{className:"bubble",children:[a.jsxs("strong",{children:[u.senderName,u.isAdmin&&a.jsx(_s,{size:14,color:"#0ecb81"})]}),a.jsx("p",{children:u.message}),a.jsx("small",{children:new Date(u.timestamp).toLocaleTimeString()})]})]})},u.id)),s&&a.jsx("div",{className:"message-row admin",children:a.jsxs("div",{className:"message-wrap",children:[a.jsx("div",{className:"avatar",children:a.jsx(ai,{size:18})}),a.jsx("div",{className:"bubble",children:a.jsx("p",{children:"Support is typing..."})})]})}),a.jsx("div",{ref:c})]}),a.jsxs("div",{className:"composer",children:[a.jsx("input",{value:n,onChange:u=>r(u.target.value),onKeyDown:u=>u.key==="Enter"&&o(),placeholder:"Type your support request..."}),a.jsx("button",{className:"send-btn",onClick:o,children:a.jsx(t1,{size:20})})]})]})]})]})}function ms(t){return t?new Date(t).toLocaleString():"Not available"}function xw(){const{users:t,walletRequests:e,kycRequests:i,approveTransaction:n,rejectTransaction:r,approveVerification:s,rejectVerification:l}=Br(),c=t.filter(p=>p.role!=="admin").sort((p,w)=>new Date(w.joinedDate).getTime()-new Date(p.joinedDate).getTime()),o=e.filter(p=>p.status==="pending").sort((p,w)=>new Date(w.timestamp).getTime()-new Date(p.timestamp).getTime()),u=i.filter(p=>p.status==="pending").sort((p,w)=>new Date(w.submittedAt).getTime()-new Date(p.submittedAt).getTime()),h=e.filter(p=>p.status!=="pending").sort((p,w)=>new Date(w.reviewedAt||w.timestamp).getTime()-new Date(p.reviewedAt||p.timestamp).getTime()).slice(0,10),d=i.filter(p=>p.status!=="pending").sort((p,w)=>new Date(w.reviewedAt||w.submittedAt).getTime()-new Date(p.reviewedAt||p.submittedAt).getTime()).slice(0,10),f=c.filter(p=>p.verificationStatus==="approved").length,m=c.filter(p=>p.verificationStatus==="pending").length,g=o.reduce((p,w)=>p+w.amount,0);return a.jsxs("div",{className:"admin-page",children:[a.jsx("style",{children:`
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
          display: flex;
          gap: 10px;
          margin-top: 10px;
          flex-wrap: wrap;
        }
        .doc-thumb {
          width: 86px;
          height: 64px;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .doc-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
      `}),a.jsxs("section",{className:"admin-card hero",children:[a.jsxs("div",{className:"hero-top",children:[a.jsxs("div",{className:"hero-title",children:[a.jsx("div",{className:"hero-icon",children:a.jsx(ai,{size:26})}),a.jsxs("div",{children:[a.jsx("h1",{children:"Admin Operations"}),a.jsx("p",{children:"Separate back-office review center for users, deposits, withdrawals, and identity checks. Every queue is rebuilt from live app data so pending requests do not get lost."})]})]}),a.jsxs("div",{className:"hero-badges",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx(sl,{size:14}),a.jsxs("span",{children:[c.length," website users"]})]}),a.jsxs("div",{className:"hero-badge",children:[a.jsx(im,{size:14}),a.jsxs("span",{children:[o.length+u.length," open reviews"]})]})]})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat",children:[a.jsxs("div",{className:"stat-head",children:[a.jsx("span",{children:"Total Website Users"}),a.jsx(sl,{size:18})]}),a.jsx("strong",{children:c.length}),a.jsx("span",{children:"Every created account is counted here for the admin team"})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("div",{className:"stat-head",children:[a.jsx("span",{children:"Pending Wallet"}),a.jsx(jh,{size:18})]}),a.jsx("strong",{children:o.length}),a.jsxs("span",{children:["$",de(g)," waiting for review"]})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("div",{className:"stat-head",children:[a.jsx("span",{children:"Pending KYC"}),a.jsx(ai,{size:18})]}),a.jsx("strong",{children:u.length}),a.jsxs("span",{children:[m," users currently waiting on approval"]})]}),a.jsxs("div",{className:"stat",children:[a.jsxs("div",{className:"stat-head",children:[a.jsx("span",{children:"Verified Users"}),a.jsx(_s,{size:18})]}),a.jsx("strong",{children:f}),a.jsx("span",{children:"Accounts already approved by admin review"})]})]})]}),a.jsxs("section",{className:"two-col",children:[a.jsxs("section",{className:"admin-card section-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Pending Wallet Requests"}),a.jsx("p",{children:"Deposits and withdrawals awaiting manual admin action."})]}),a.jsxs("div",{className:"section-tag",children:[a.jsx(jh,{size:14}),a.jsxs("span",{children:[o.length," active"]})]})]}),a.jsxs("div",{className:"queue-list",children:[o.map(p=>a.jsxs("article",{className:"queue-item",children:[a.jsxs("div",{className:"queue-meta",children:[a.jsx("strong",{children:p.userName}),a.jsx("small",{children:p.userEmail}),a.jsx("small",{children:p.type==="withdraw"?`Withdraw to ${p.withdrawAddress||"No wallet address"}`:`Deposit wallet ${p.walletAddress||"Not supplied"}`}),a.jsxs("small",{children:["Submitted ",ms(p.timestamp)]})]}),a.jsxs("div",{className:"queue-side",children:[a.jsx("span",{children:p.type}),a.jsxs("strong",{children:["$",de(p.amount)]}),a.jsx("small",{children:p.btcAmount?`${p.btcAmount.toFixed(8)} BTC`:"USD request only"})]}),a.jsxs("div",{className:"queue-actions",children:[a.jsxs("button",{className:"action-btn approve-btn",onClick:()=>n(p.id),children:[a.jsx(_s,{size:16}),a.jsx("span",{children:"Approve"})]}),a.jsxs("button",{className:"action-btn reject-btn",onClick:()=>r(p.id),children:[a.jsx(Ch,{size:16}),a.jsx("span",{children:"Reject"})]})]})]},p.id)),o.length===0&&a.jsx("div",{className:"empty-state",children:"No wallet requests are waiting right now."})]})]}),a.jsxs("section",{className:"admin-card section-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Pending KYC Reviews"}),a.jsx("p",{children:"Identity requests sent from user profiles for verification."})]}),a.jsxs("div",{className:"section-tag",children:[a.jsx(ai,{size:14}),a.jsxs("span",{children:[u.length," active"]})]})]}),a.jsxs("div",{className:"queue-list",children:[u.map(p=>a.jsxs("article",{className:"queue-item",children:[a.jsxs("div",{className:"queue-meta",children:[a.jsx("strong",{children:p.fullName}),a.jsx("small",{children:p.userEmail}),a.jsxs("small",{children:[p.phone," • ",p.country,", ",p.city," ",p.postCode]}),a.jsxs("small",{children:[p.job," • ",p.documentType.replace("_"," ")]}),a.jsxs("div",{className:"docs",children:[a.jsx("div",{className:"doc-thumb",children:p.frontImage?a.jsx("img",{src:p.frontImage,alt:"front document"}):null}),a.jsx("div",{className:"doc-thumb",children:p.backImage?a.jsx("img",{src:p.backImage,alt:"back document"}):null})]})]}),a.jsxs("div",{className:"queue-side",children:[a.jsx("span",{children:"KYC Request"}),a.jsx("strong",{children:"Pending"}),a.jsxs("small",{children:["Submitted ",ms(p.submittedAt)]})]}),a.jsxs("div",{className:"queue-actions",children:[a.jsxs("button",{className:"action-btn approve-btn",onClick:()=>s(p.userEmail),children:[a.jsx(_s,{size:16}),a.jsx("span",{children:"Approve"})]}),a.jsxs("button",{className:"action-btn reject-btn",onClick:()=>l(p.userEmail),children:[a.jsx(Ch,{size:16}),a.jsx("span",{children:"Reject"})]})]})]},p.id)),u.length===0&&a.jsx("div",{className:"empty-state",children:"No KYC reviews are waiting right now."})]})]})]}),a.jsxs("section",{className:"admin-card section-card",children:[a.jsxs("div",{className:"section-head",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Registered Website Users"}),a.jsx("p",{children:"Every account created on the website appears here with verification status, timezone, and balances."})]}),a.jsxs("div",{className:"section-tag",children:[a.jsx(sl,{size:14}),a.jsxs("span",{children:[c.length," accounts"]})]})]}),a.jsxs("div",{className:"user-list",children:[c.map(p=>a.jsxs("article",{className:"user-item",children:[a.jsxs("div",{children:[a.jsx("strong",{children:p.name}),a.jsx("div",{className:"user-meta",children:p.email}),a.jsxs("div",{className:"user-meta",children:["Joined ",p.joinedDate]})]}),a.jsxs("div",{children:[a.jsx("div",{className:`status-pill ${p.verificationStatus||"unverified"}`,children:p.verificationStatus||"unverified"}),a.jsxs("div",{className:"user-meta",children:[p.country||"Country not set"," • ",p.timezone||"Timezone not set"]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"user-meta",children:["USD $",de(p.usdBalance)]}),a.jsxs("div",{className:"user-meta",children:["BTC ",(p.btcBalance||0).toFixed(6)]})]})]},p.email)),c.length===0&&a.jsx("div",{className:"empty-state",children:"No registered users found."})]})]}),a.jsxs("section",{className:"history-grid",children:[a.jsxs("section",{className:"admin-card section-card",children:[a.jsx("div",{className:"section-head",children:a.jsxs("div",{children:[a.jsx("h2",{children:"Wallet Review History"}),a.jsx("p",{children:"Latest deposit and withdrawal decisions made by admin."})]})}),a.jsxs("div",{className:"history-list",children:[h.map(p=>a.jsxs("article",{className:"history-item",children:[a.jsx("strong",{children:p.userName}),a.jsx("div",{className:`status-pill ${p.status}`,children:p.status}),a.jsx("div",{className:"history-meta",children:p.userEmail}),a.jsxs("div",{className:"history-meta",children:[p.type," • $",de(p.amount)]}),a.jsx("div",{className:"history-meta",children:p.btcAmount?`${p.btcAmount.toFixed(8)} BTC`:"No BTC amount stored"}),a.jsxs("div",{className:"history-meta",children:["Reviewed ",ms(p.reviewedAt||p.timestamp),p.reviewedBy?` • ${p.reviewedBy}`:""]})]},p.id)),h.length===0&&a.jsx("div",{className:"empty-state",children:"No wallet reviews have been completed yet."})]})]}),a.jsxs("section",{className:"admin-card section-card",children:[a.jsx("div",{className:"section-head",children:a.jsxs("div",{children:[a.jsx("h2",{children:"KYC Review History"}),a.jsx("p",{children:"Latest identity approval and rejection activity."})]})}),a.jsxs("div",{className:"history-list",children:[d.map(p=>a.jsxs("article",{className:"history-item",children:[a.jsx("strong",{children:p.fullName}),a.jsx("div",{className:`status-pill ${p.status}`,children:p.status}),a.jsx("div",{className:"history-meta",children:p.userEmail}),a.jsxs("div",{className:"history-meta",children:[p.country,", ",p.city," • ",p.documentType.replace("_"," ")]}),a.jsxs("div",{className:"history-meta",children:["Reviewed ",ms(p.reviewedAt||p.submittedAt),p.reviewedBy?` • ${p.reviewedBy}`:""]})]},p.id)),d.length===0&&a.jsx("div",{className:"empty-state",children:"No KYC reviews have been completed yet."})]})]})]})]})}function yw(){const{login:t,register:e}=mi(),[i,n]=k.useState(""),[r,s]=k.useState(""),[l,c]=k.useState(""),[o,u]=k.useState(!1),[h,d]=k.useState(!1),f=m=>{if(m.preventDefault(),h){e(i,r,l);return}t(i,l)};return a.jsxs("div",{className:"min-h-screen bg-btc-dark flex items-center justify-center p-4 relative overflow-hidden",children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[a.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-btc-gold/5 rounded-full blur-3xl animate-pulse"}),a.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-btc-green/5 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}}),[...Array(6)].map((m,g)=>a.jsx("div",{className:"absolute text-btc-gold/10 text-8xl font-bold animate-float",style:{top:`${20+g*15}%`,left:`${10+g*15}%`,animationDelay:`${g*.5}s`,transform:`rotate(${g*30}deg)`},children:"₿"},g))]}),a.jsxs("div",{className:"auth-shell",children:[a.jsx("div",{className:"auth-card-wrap",children:a.jsxs("div",{className:"auth-card",children:[a.jsxs("div",{className:"text-center mb-8",children:[a.jsx(he,{to:"/",className:"inline-flex text-btc-text-secondary hover:text-btc-gold text-sm mb-6",children:"Back to home"}),a.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-btc-gold to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow",children:a.jsx("span",{className:"text-4xl font-bold text-btc-dark",children:"₿"})}),a.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"BTC Trade"}),a.jsx("p",{className:"text-btc-text-secondary",children:"Professional Cryptocurrency Trading"})]}),a.jsxs("form",{onSubmit:f,className:"space-y-5",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-btc-text-secondary mb-2",children:"User Name"}),a.jsx("input",{type:"text",value:i,onChange:m=>n(m.target.value),placeholder:"Enter your user name",className:"w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all"})]}),h&&a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-btc-text-secondary mb-2",children:"Email (Optional)"}),a.jsx("input",{type:"email",value:r,onChange:m=>s(m.target.value),placeholder:"Enter your email",className:"w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-btc-text-secondary mb-2",children:"Password"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:o?"text":"password",value:l,onChange:m=>c(m.target.value),placeholder:"Enter your password",className:"w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all pr-12"}),a.jsx("button",{type:"button",onClick:()=>u(!o),className:"absolute right-3 top-1/2 -translate-y-1/2 text-btc-text-secondary hover:text-white transition-colors",children:o?a.jsx(Qx,{size:20}):a.jsx(Jx,{size:20})})]})]}),a.jsx("button",{type:"submit",className:"w-full py-3 bg-gradient-to-r from-btc-gold to-yellow-500 text-btc-dark font-bold rounded-lg hover:shadow-lg hover:shadow-btc-gold/30 transition-all duration-300 transform hover:scale-[1.02]",children:h?"Create Account":"Sign In"})]}),a.jsx("div",{className:"auth-toggle-panel",children:a.jsxs("p",{className:"text-center text-btc-text-secondary",children:[h?"Already have an account?":"Don't have an account?"," ",a.jsx("button",{onClick:()=>d(!h),className:"text-btc-gold hover:underline font-medium",children:h?"Sign In":"Sign Up"})]})}),a.jsx("div",{className:"mt-4 p-3 bg-btc-dark/50 rounded-lg border border-btc-border",children:a.jsx("p",{className:"text-xs text-btc-text-secondary text-center",children:h?"New accounts start as unverified and must complete profile verification before trading.":"Demo: Click Sign In with pre-filled credentials"})})]})}),a.jsxs("div",{className:"auth-stats",children:[a.jsxs("div",{className:"auth-stat",children:[a.jsx("p",{className:"text-btc-text-secondary text-sm",children:"24h Volume"}),a.jsx("p",{className:"text-white font-bold",children:"$2.4B"})]}),a.jsxs("div",{className:"auth-stat",children:[a.jsx("p",{className:"text-btc-text-secondary text-sm",children:"Active Traders"}),a.jsx("p",{className:"text-white font-bold",children:"45,892"})]}),a.jsxs("div",{className:"auth-stat",children:[a.jsx("p",{className:"text-btc-text-secondary text-sm",children:"Win Rate"}),a.jsx("p",{className:"text-btc-green font-bold",children:"78%"})]})]})]})]})}const Am="btcUsers",Po="btcAuthSession",Im="btcTransactions",Om="btcWalletRequests",Fm="btcTrades",Lo="btcActiveTrade",Ro="btcTradeResult",Vm="btcKycRequests",Um=k.createContext(null),Wm=k.createContext(null),$o="system@btcplatform.com",Hm="System Admin",ww="admin123",zd={id:"admin-session",email:$o,name:Hm,avatar:cn,btcBalance:0,usdBalance:0,stakeAmount:0,isVerified:!0,verificationStatus:"approved",vipLevel:5,joinedDate:"2024-01-01",role:"admin",phone:"+1 555 300 9000",country:"United States",timezone:"UTC",telegram:"@BTCTradeSystem"},Er=[],bw=new Map(Er.map(t=>[t.email.toLowerCase(),t]));function pi(t,e){try{const i=localStorage.getItem(t);return i?JSON.parse(i):e}catch{return localStorage.removeItem(t),e}}function G(t,e=0){const i=typeof t=="number"?t:Number(t);return Number.isFinite(i)?i:e}function U(t,e=""){return typeof t=="string"?t:e}function Md(){var t,e;return typeof window>"u"?"UTC":((e=(t=window.Intl)==null?void 0:t.DateTimeFormat)==null?void 0:e.call(t).resolvedOptions().timeZone)||"UTC"}function Do(t){return{...bw.get(U(t.email).toLowerCase()),...t,id:U(t.id,`user-${Date.now()}`),email:U(t.email),name:U(t.name,"Trader"),avatar:U(t.avatar,cn),btcBalance:G(t.btcBalance),usdBalance:G(t.usdBalance),stakeAmount:G(t.stakeAmount),vipLevel:G(t.vipLevel),joinedDate:U(t.joinedDate,new Date().toISOString().slice(0,10))}}function kw(t){const e=new Map;return Er.forEach(i=>{e.set(i.email.toLowerCase(),Do(i))}),t.filter(i=>i.role!=="admin").forEach(i=>{e.set(i.email.toLowerCase(),Do(i))}),Array.from(e.values())}function jw(t){return{...t,id:U(t.id,`tx-${Date.now()}`),type:t.type,amount:G(t.amount),btcAmount:t.btcAmount===void 0?void 0:G(t.btcAmount),walletAddress:t.walletAddress?U(t.walletAddress):t.walletAddress,withdrawAddress:t.withdrawAddress?U(t.withdrawAddress):t.withdrawAddress,userEmail:t.userEmail?U(t.userEmail):t.userEmail,userName:t.userName?U(t.userName):t.userName,status:t.status,timestamp:U(t.timestamp,new Date().toISOString()),reviewedBy:t.reviewedBy?U(t.reviewedBy):t.reviewedBy}}function qm(t){return t.type!=="deposit"&&t.type!=="withdraw"||!t.userEmail?null:{id:U(t.id,`tx-${Date.now()}`),type:t.type,amount:G(t.amount),btcAmount:t.btcAmount===void 0?void 0:G(t.btcAmount),walletAddress:t.walletAddress?U(t.walletAddress):void 0,withdrawAddress:t.withdrawAddress?U(t.withdrawAddress):void 0,userEmail:U(t.userEmail),userName:U(t.userName,"Trader"),status:t.status,timestamp:U(t.timestamp,new Date().toISOString()),reviewedBy:t.reviewedBy?U(t.reviewedBy):void 0,reviewedAt:void 0}}function Sw(t){return!t.kyc||t.kyc.status!=="pending"?null:{id:`kyc-profile-${t.id}`,userEmail:U(t.email),userName:U(t.name,"Trader"),fullName:U(t.kyc.fullName,t.name),phone:U(t.kyc.phone),country:U(t.kyc.country),city:U(t.kyc.city),postCode:U(t.kyc.postCode),job:U(t.kyc.job),documentType:t.kyc.documentType,frontImage:U(t.kyc.frontImage),backImage:U(t.kyc.backImage),status:"pending",submittedAt:U(t.kyc.submittedAt,new Date().toISOString()),reviewedAt:t.kyc.reviewedAt?U(t.kyc.reviewedAt):void 0,reviewedBy:t.kyc.reviewedBy?U(t.kyc.reviewedBy):void 0}}function Bo(t,e){const i=new Map;return e.forEach(n=>{const r=qm(n);r&&i.set(r.id,r)}),t.forEach(n=>{const r=i.get(n.id);i.set(n.id,{...r||{},...n,reviewedAt:n.reviewedAt||(r==null?void 0:r.reviewedAt),reviewedBy:n.reviewedBy||(r==null?void 0:r.reviewedBy)})}),Array.from(i.values()).sort((n,r)=>new Date(r.reviewedAt||r.timestamp).getTime()-new Date(n.reviewedAt||n.timestamp).getTime())}function Ao(t,e){const i=new Map;return e.forEach(n=>{const r=Sw(n);r&&i.set(n.email.toLowerCase(),r)}),t.forEach(n=>{const r=n.userEmail.toLowerCase(),s=i.get(r);i.set(r,{...s||{},...n,reviewedAt:n.reviewedAt||(s==null?void 0:s.reviewedAt),reviewedBy:n.reviewedBy||(s==null?void 0:s.reviewedBy)})}),Array.from(i.values()).sort((n,r)=>new Date(r.reviewedAt||r.submittedAt).getTime()-new Date(n.reviewedAt||n.submittedAt).getTime())}function Nw(t){return{...t,id:U(t.id,`trade-${Date.now()}`),pair:U(t.pair,"BTC/USD"),amount:G(t.amount),leverage:G(t.leverage,1),entryPrice:G(t.entryPrice),exitPrice:t.exitPrice===void 0?void 0:G(t.exitPrice),liquidationPrice:t.liquidationPrice===void 0?void 0:G(t.liquidationPrice),entryTime:t.entryTime===void 0?void 0:G(t.entryTime),exitTime:t.exitTime===void 0?void 0:G(t.exitTime),timeframe:U(t.timeframe,"1m"),timestamp:U(t.timestamp,new Date().toISOString()),userEmail:t.userEmail?U(t.userEmail):t.userEmail,pnl:t.pnl===void 0?void 0:G(t.pnl),priceMovePct:t.priceMovePct===void 0?void 0:G(t.priceMovePct)}}function Cw(t){return{...t,id:U(t.id,`trade-${Date.now()}`),pair:U(t.pair,"BTC/USD"),amount:G(t.amount),leverage:G(t.leverage,1),entryPrice:G(t.entryPrice),liquidationPrice:G(t.liquidationPrice),timeframe:U(t.timeframe,"1m"),timeframeValue:U(t.timeframeValue,"1m"),tradeSeconds:G(t.tradeSeconds,60),entryTime:G(t.entryTime,Math.floor(Date.now()/1e3)),openedAt:U(t.openedAt,new Date().toISOString()),endTime:U(t.endTime,new Date(Date.now()+6e4).toISOString()),userEmail:U(t.userEmail)}}function Ew(t){return{...t,tradeId:U(t.tradeId),won:!!t.won,pnl:G(t.pnl),exitPrice:G(t.exitPrice),exitTime:G(t.exitTime,Math.floor(Date.now()/1e3)),priceMovePct:G(t.priceMovePct),outcomeReason:t.outcomeReason}}function zw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.email=="string")}function Mw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.type=="string")}function _w(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.userEmail=="string")}function Tw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.userEmail=="string")}function Pw(t){return Array.isArray(t)&&t.every(e=>e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.pair=="string")}function Lw(t){return!!(t&&typeof t=="object"&&typeof t.id=="string"&&typeof t.userEmail=="string"&&typeof t.entryPrice=="number"&&typeof t.amount=="number"&&typeof t.leverage=="number"&&typeof t.endTime=="string")}function Rw(t){return!!(t&&typeof t=="object"&&typeof t.tradeId=="string"&&typeof t.pnl=="number"&&typeof t.won=="boolean")}const Io=()=>{const t=pi(Am,Er);return zw(t)?kw(t):Er.map(Do)};function $w(){return pi(Po,null)}const Km=()=>{const t=pi(Im,[]);return Mw(t)?t.map(jw):[]},Dw=()=>{const t=pi(Om,[]),e=_w(t)?t:[];return Bo(e,Km())},Bw=()=>{const t=pi(Vm,[]),e=Tw(t)?t:[];return Ao(e,Io())},Aw=()=>{const t=pi(Fm,[]);return Pw(t)?t.map(Nw):[]},Iw=()=>{const t=pi(Lo,null);return Lw(t)?Cw(t):null},Ow=()=>{const t=pi(Ro,null);return Rw(t)?Ew(t):null},mi=()=>{const t=k.useContext(Um);if(!t)throw new Error("useAuth must be used within AuthProvider");return t},Br=()=>{const t=k.useContext(Wm);if(!t)throw new Error("useApp must be used within AppProvider");return t};function Fw(){const[t,e]=k.useState(()=>typeof window>"u"?Er:Io()),[i,n]=k.useState(()=>{if(typeof window>"u")return null;const N=$w();if((N==null?void 0:N.role)==="admin"&&N.email.toLowerCase()===$o)return zd;const S=N==null?void 0:N.email;return S&&Io().find(B=>B.email===S)||null}),[r,s]=k.useState(()=>vh()),[l,c]=k.useState(!1),[o,u]=k.useState(()=>typeof window>"u"?[]:Km()),[h,d]=k.useState(()=>typeof window>"u"?[]:Dw()),[f,m]=k.useState(()=>typeof window>"u"?[]:Bw()),[g,p]=k.useState(()=>typeof window>"u"?[]:Aw()),[w,v]=k.useState(()=>typeof window>"u"?null:Iw()),[x,y]=k.useState(()=>typeof window>"u"?null:Ow());k.useEffect(()=>{localStorage.setItem(Am,JSON.stringify(t))},[t]),k.useEffect(()=>{localStorage.setItem(Im,JSON.stringify(o))},[o]),k.useEffect(()=>{d(N=>{const S=Bo(N,o);return JSON.stringify(S)===JSON.stringify(N)?N:S})},[o]),k.useEffect(()=>{localStorage.setItem(Om,JSON.stringify(h))},[h]),k.useEffect(()=>{m(N=>{const S=Ao(N,t);return JSON.stringify(S)===JSON.stringify(N)?N:S})},[t]),k.useEffect(()=>{localStorage.setItem(Vm,JSON.stringify(f))},[f]),k.useEffect(()=>{localStorage.setItem(Fm,JSON.stringify(g))},[g]),k.useEffect(()=>{w?localStorage.setItem(Lo,JSON.stringify(w)):localStorage.removeItem(Lo)},[w]),k.useEffect(()=>{x?localStorage.setItem(Ro,JSON.stringify(x)):localStorage.removeItem(Ro)},[x]),k.useEffect(()=>{localStorage.removeItem("btcCurrentUserEmail"),i?localStorage.setItem(Po,JSON.stringify({email:i.email,role:i.role||"user"})):localStorage.removeItem(Po)},[i]),k.useEffect(()=>{let N=!0,S=null,T=null;const B=async()=>{try{const Q=await Tx();N&&(s(Q),c(!0))}catch{N&&(s(Q=>vh(Q.price)),c(!0))}},D=()=>{N&&(T=Px(Q=>{N&&(s(Q),c(!0))},Q=>{N&&(Q==="closed"||Q==="error")&&(S&&window.clearTimeout(S),S=window.setTimeout(()=>{D()},3e3))}))};B(),D();const H=setInterval(B,3e4);return()=>{N=!1,T==null||T(),S&&window.clearTimeout(S),clearInterval(H)}},[]);const b=(N,S)=>{let T=i;e(B=>B.map(D=>{if(D.email!==N)return D;const H=S(D);return(i==null?void 0:i.email)===N&&(T=H),H})),T&&T.email===N&&n(T)},j=(N,S)=>{const B=N.trim().toLowerCase();if((B===Hm.toLowerCase()||B===$o.toLowerCase())&&S===ww){n(zd);return}const D=t.find(H=>H.name.trim().toLowerCase()===B||H.email.trim().toLowerCase()===B);if(D){if(D.password&&D.password!==S){alert("Incorrect password");return}n(D);return}alert("Incorrect username or password")},z=(N,S,T)=>{const B=N.trim(),D=S.trim().toLowerCase();if(!B||!T.trim()){alert("Username and password are required");return}const H=B.toLowerCase().replace(/[^a-z0-9]+/g,"")||`user${Date.now()}`,Q=D||`${H}@btcplatform.com`;if(t.find(lt=>lt.email.toLowerCase()===Q)){alert("That email is already registered");return}const Ie={...gh,id:`user-${Date.now()}`,email:Q,name:B,avatar:cn,btcBalance:0,usdBalance:0,stakeAmount:0,isVerified:!1,joinedDate:new Date().toISOString().slice(0,10),role:"user",verificationStatus:"unverified",password:T,phone:"",country:"",city:"",postCode:"",job:"",timezone:Md(),telegram:"",kyc:{fullName:B,phone:"",country:"",city:"",postCode:"",job:"",documentType:"passport",frontImage:"",backImage:"",status:"unverified"}};e(lt=>[Ie,...lt]),n(Ie)},M=({email:N,name:S,avatar:T})=>{const B=N.trim().toLowerCase(),D=S.trim()||"Google User";if(!B){alert("Google account email is missing");return}const H=t.find(je=>je.email.toLowerCase()===B);if(H){const je={...H,name:D,avatar:T||H.avatar||cn};e(Ie=>Ie.map(lt=>lt.email===H.email?je:lt)),n(je);return}const Q={...gh,id:`user-${Date.now()}`,email:B,name:D,avatar:T||cn,btcBalance:0,usdBalance:0,stakeAmount:0,isVerified:!1,joinedDate:new Date().toISOString().slice(0,10),role:"user",verificationStatus:"unverified",password:void 0,phone:"",country:"",city:"",postCode:"",job:"",timezone:Md(),telegram:"",kyc:{fullName:D,phone:"",country:"",city:"",postCode:"",job:"",documentType:"passport",frontImage:"",backImage:"",status:"unverified"}};e(je=>[Q,...je]),n(Q)},_=()=>{n(null)},V=N=>{if(!i)return;const S={...i,...N};n(S),e(T=>T.map(B=>B.email===i.email?S:B))},I=N=>{m(S=>{const T=S.filter(B=>B.userEmail.toLowerCase()!==N.userEmail.toLowerCase());return Ao([N,...T],t)})},Z=N=>{if(!i)return;const S={...N,userEmail:N.userEmail||i.email,userName:N.userName||i.name};if(u(T=>[S,...T]),S.type==="deposit"||S.type==="withdraw"){const T=qm(S);if(!T)return;d(B=>Bo([T,...B],o))}},be=N=>{if(!i)return;const S={...N,userEmail:N.userEmail||i.email};p(T=>[S,...T])},ke=N=>{y(null),v(N)},ge=()=>{y(null)};k.useEffect(()=>{if(!w)return;const N=(B,D)=>{const H=B==="liquidation"?{pnl:-w.amount,directionalMovePct:-(100/w.leverage)}:em({entryPrice:w.entryPrice,exitPrice:D,amount:w.amount,leverageValue:w.leverage,tradeDirection:w.direction}),Q=Math.floor(Date.now()/1e3),je={id:w.id,pair:w.pair,direction:w.direction,amount:w.amount,leverage:w.leverage,entryPrice:w.entryPrice,exitPrice:D,liquidationPrice:w.liquidationPrice,entryTime:w.entryTime,exitTime:Q,timeframe:w.timeframe,status:H.pnl>=0?"won":"lost",timestamp:new Date().toISOString(),userEmail:w.userEmail,pnl:H.pnl,priceMovePct:H.directionalMovePct,outcomeReason:B};p(Ie=>[je,...Ie]),b(w.userEmail,Ie=>({...Ie,usdBalance:Math.max(0,Ie.usdBalance+H.pnl)})),y({tradeId:w.id,won:H.pnl>=0,pnl:H.pnl,exitPrice:D,exitTime:Q,priceMovePct:H.directionalMovePct,outcomeReason:B}),v(null)},S=()=>{const B=Date.now();if(w.direction==="up"?r.price<=w.liquidationPrice:r.price>=w.liquidationPrice){N("liquidation",r.price);return}B>=new Date(w.endTime).getTime()&&N("expiry",r.price)};S();const T=window.setInterval(S,1e3);return()=>{window.clearInterval(T)}},[w,r.price,i]);const O=N=>{const S=h.find(T=>T.id===N)||o.find(T=>T.id===N);!S||S.status!=="pending"||!S.userEmail||(d(T=>T.map(B=>B.id===N?{...B,status:"completed",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:B)),u(T=>T.map(B=>B.id===N?{...B,status:"completed",reviewedBy:"System Admin"}:B)),b(S.userEmail,T=>S.type==="deposit"?{...T,btcBalance:T.btcBalance+(S.btcAmount||0),usdBalance:T.usdBalance+S.amount}:S.type==="withdraw"?{...T,usdBalance:Math.max(0,T.usdBalance-S.amount)}:T))},ce=N=>{d(S=>S.map(T=>T.id===N?{...T,status:"rejected",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:T)),u(S=>S.map(T=>T.id===N?{...T,status:"rejected",reviewedBy:"System Admin"}:T))},Pe=N=>{m(S=>S.map(T=>T.userEmail===N&&T.status==="pending"?{...T,status:"approved",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:T)),b(N,S=>{var T,B,D,H,Q,je;return{...S,name:((T=S.kyc)==null?void 0:T.fullName)||S.name,phone:((B=S.kyc)==null?void 0:B.phone)||S.phone,country:((D=S.kyc)==null?void 0:D.country)||S.country,city:((H=S.kyc)==null?void 0:H.city)||S.city,postCode:((Q=S.kyc)==null?void 0:Q.postCode)||S.postCode,job:((je=S.kyc)==null?void 0:je.job)||S.job,isVerified:!0,verificationStatus:"approved",kyc:S.kyc?{...S.kyc,status:"approved",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:S.kyc}})},P=N=>{m(S=>S.map(T=>T.userEmail===N&&T.status==="pending"?{...T,status:"rejected",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:T)),b(N,S=>({...S,isVerified:!1,verificationStatus:"rejected",kyc:S.kyc?{...S.kyc,status:"rejected",reviewedAt:new Date().toISOString(),reviewedBy:"System Admin"}:S.kyc}))},F={user:i,isAuthenticated:!!i,login:j,register:z,signInWithGoogle:M,logout:_,updateUser:V,submitKycRequest:I},A={btcPrice:r.price,btcChange24h:r.change24h,btcHigh24h:r.high24h,btcLow24h:r.low24h,btcVolume24h:r.volume24h,marketStatus:r.source,marketReady:l,transactions:o,walletRequests:h,kycRequests:f,trades:g,users:t,activeTrade:w,lastTradeResult:x,addTransaction:Z,addTrade:be,startTrade:ke,clearTradeResult:ge,approveTransaction:O,rejectTransaction:ce,approveVerification:Pe,rejectVerification:P};return a.jsx(u1,{children:a.jsx(Um.Provider,{value:F,children:a.jsx(Wm.Provider,{value:A,children:a.jsx(kx,{children:i?a.jsxs("div",{className:"min-h-screen bg-btc-dark lg:flex lg:h-screen",children:[a.jsx(s1,{}),a.jsxs("div",{className:"flex min-h-screen flex-1 flex-col lg:overflow-hidden",children:[a.jsx(a1,{btcPrice:r.price,btcChange24h:r.change24h,marketStatus:r.source}),a.jsx("main",{className:"app-main-scroll flex-1 bg-[#0f131c] px-4 pb-28 pt-4 sm:px-5 lg:overflow-y-auto lg:px-6 lg:pb-6 lg:pt-6",children:a.jsxs(fh,{children:[a.jsx(Ze,{path:"/",element:i.role==="admin"?a.jsx(Et,{to:"/admin",replace:!0}):a.jsx(p1,{})}),a.jsx(Ze,{path:"/finance",element:i.role==="admin"?a.jsx(Et,{to:"/admin",replace:!0}):a.jsx(_1,{})}),a.jsx(Ze,{path:"/trade",element:i.role==="admin"?a.jsx(Et,{to:"/admin",replace:!0}):a.jsx(cw,{})}),a.jsx(Ze,{path:"/profile",element:i.role==="admin"?a.jsx(Et,{to:"/admin",replace:!0}):a.jsx(dw,{})}),a.jsx(Ze,{path:"/news",element:i.role==="admin"?a.jsx(Et,{to:"/admin",replace:!0}):a.jsx(mw,{})}),a.jsx(Ze,{path:"/support",element:i.role==="admin"?a.jsx(Et,{to:"/admin",replace:!0}):a.jsx(vw,{})}),a.jsx(Ze,{path:"/admin",element:i.role==="admin"?a.jsx(xw,{}):a.jsx(Et,{to:"/",replace:!0})}),a.jsx(Ze,{path:"*",element:a.jsx(Et,{to:i.role==="admin"?"/admin":"/",replace:!0})})]})})]}),a.jsx(c1,{})]}):a.jsxs(fh,{children:[a.jsx(Ze,{path:"/",element:a.jsx(m1,{})}),a.jsx(Ze,{path:"/login",element:a.jsx(yw,{})}),a.jsx(Ze,{path:"*",element:a.jsx(Et,{to:"/"})})]})})})})})}Cl.createRoot(document.getElementById("root")).render(a.jsx(yi.StrictMode,{children:a.jsx(Fw,{})}));
