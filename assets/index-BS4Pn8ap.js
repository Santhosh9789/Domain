(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();function m0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mm={exports:{}},wl={},gm={exports:{}},je={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Uo=Symbol.for("react.element"),g0=Symbol.for("react.portal"),v0=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),_0=Symbol.for("react.profiler"),y0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),S0=Symbol.for("react.forward_ref"),M0=Symbol.for("react.suspense"),E0=Symbol.for("react.memo"),w0=Symbol.for("react.lazy"),Mh=Symbol.iterator;function T0(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xm=Object.assign,_m={};function Ra(t,e,r){this.props=t,this.context=e,this.refs=_m,this.updater=r||vm}Ra.prototype.isReactComponent={};Ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ym(){}ym.prototype=Ra.prototype;function cd(t,e,r){this.props=t,this.context=e,this.refs=_m,this.updater=r||vm}var ud=cd.prototype=new ym;ud.constructor=cd;xm(ud,Ra.prototype);ud.isPureReactComponent=!0;var Eh=Array.isArray,bm=Object.prototype.hasOwnProperty,dd={current:null},Sm={key:!0,ref:!0,__self:!0,__source:!0};function Mm(t,e,r){var i,n={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)bm.call(e,i)&&!Sm.hasOwnProperty(i)&&(n[i]=e[i]);var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];n.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)n[i]===void 0&&(n[i]=s[i]);return{$$typeof:Uo,type:t,key:a,ref:o,props:n,_owner:dd.current}}function A0(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function R0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var wh=/\/+/g;function $l(t,e){return typeof t=="object"&&t!==null&&t.key!=null?R0(""+t.key):e.toString(36)}function Us(t,e,r,i,n){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Uo:case g0:o=!0}}if(o)return o=t,n=n(o),t=i===""?"."+$l(o,0):i,Eh(n)?(r="",t!=null&&(r=t.replace(wh,"$&/")+"/"),Us(n,e,r,"",function(c){return c})):n!=null&&(hd(n)&&(n=A0(n,r+(!n.key||o&&o.key===n.key?"":(""+n.key).replace(wh,"$&/")+"/")+t)),e.push(n)),1;if(o=0,i=i===""?".":i+":",Eh(t))for(var s=0;s<t.length;s++){a=t[s];var l=i+$l(a,s);o+=Us(a,e,r,l,n)}else if(l=T0(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=i+$l(a,s++),o+=Us(a,e,r,l,n);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(t,e,r){if(t==null)return t;var i=[],n=0;return Us(t,i,"","",function(a){return e.call(r,a,n++)}),i}function C0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Is={transition:null},L0={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Is,ReactCurrentOwner:dd};function Em(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Yo,forEach:function(t,e,r){Yo(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Ra;je.Fragment=v0;je.Profiler=_0;je.PureComponent=cd;je.StrictMode=x0;je.Suspense=M0;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0;je.act=Em;je.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=xm({},t.props),n=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=dd.current),e.key!==void 0&&(n=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)bm.call(e,l)&&!Sm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:Uo,type:t.type,key:n,ref:a,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:b0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:y0,_context:t},t.Consumer=t};je.createElement=Mm;je.createFactory=function(t){var e=Mm.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:S0,render:t}};je.isValidElement=hd;je.lazy=function(t){return{$$typeof:w0,_payload:{_status:-1,_result:t},_init:C0}};je.memo=function(t,e){return{$$typeof:E0,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Is.transition;Is.transition={};try{t()}finally{Is.transition=e}};je.unstable_act=Em;je.useCallback=function(t,e){return Yt.current.useCallback(t,e)};je.useContext=function(t){return Yt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Yt.current.useEffect(t,e)};je.useId=function(){return Yt.current.useId()};je.useImperativeHandle=function(t,e,r){return Yt.current.useImperativeHandle(t,e,r)};je.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Yt.current.useMemo(t,e)};je.useReducer=function(t,e,r){return Yt.current.useReducer(t,e,r)};je.useRef=function(t){return Yt.current.useRef(t)};je.useState=function(t){return Yt.current.useState(t)};je.useSyncExternalStore=function(t,e,r){return Yt.current.useSyncExternalStore(t,e,r)};je.useTransition=function(){return Yt.current.useTransition()};je.version="18.3.1";gm.exports=je;var Ye=gm.exports;const P0=m0(Ye);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var N0=Ye,F0=Symbol.for("react.element"),D0=Symbol.for("react.fragment"),U0=Object.prototype.hasOwnProperty,I0=N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k0={key:!0,ref:!0,__self:!0,__source:!0};function wm(t,e,r){var i,n={},a=null,o=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)U0.call(e,i)&&!k0.hasOwnProperty(i)&&(n[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)n[i]===void 0&&(n[i]=e[i]);return{$$typeof:F0,type:t,key:a,ref:o,props:n,_owner:I0.current}}wl.Fragment=D0;wl.jsx=wm;wl.jsxs=wm;mm.exports=wl;var f=mm.exports,au={},Tm={exports:{}},pr={},Am={exports:{}},Rm={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(F,k){var V=F.length;F.push(k);e:for(;0<V;){var $=V-1>>>1,ne=F[$];if(0<n(ne,k))F[$]=k,F[V]=ne,V=$;else break e}}function r(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var k=F[0],V=F.pop();if(V!==k){F[0]=V;e:for(var $=0,ne=F.length,ve=ne>>>1;$<ve;){var B=2*($+1)-1,re=F[B],Z=B+1,pe=F[Z];if(0>n(re,V))Z<ne&&0>n(pe,re)?(F[$]=pe,F[Z]=V,$=Z):(F[$]=re,F[B]=V,$=B);else if(Z<ne&&0>n(pe,V))F[$]=pe,F[Z]=V,$=Z;else break e}}return k}function n(F,k){var V=F.sortIndex-k.sortIndex;return V!==0?V:F.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],c=[],d=1,h=null,p=3,m=!1,x=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var k=r(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=F)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=r(c)}}function E(F){if(y=!1,v(F),!x)if(r(l)!==null)x=!0,W(C);else{var k=r(c);k!==null&&X(E,k.startTime-F)}}function C(F,k){x=!1,y&&(y=!1,u(P),P=-1),m=!0;var V=p;try{for(v(k),h=r(l);h!==null&&(!(h.expirationTime>k)||F&&!R());){var $=h.callback;if(typeof $=="function"){h.callback=null,p=h.priorityLevel;var ne=$(h.expirationTime<=k);k=t.unstable_now(),typeof ne=="function"?h.callback=ne:h===r(l)&&i(l),v(k)}else i(l);h=r(l)}if(h!==null)var ve=!0;else{var B=r(c);B!==null&&X(E,B.startTime-k),ve=!1}return ve}finally{h=null,p=V,m=!1}}var T=!1,w=null,P=-1,q=5,b=-1;function R(){return!(t.unstable_now()-b<q)}function J(){if(w!==null){var F=t.unstable_now();b=F;var k=!0;try{k=w(!0,F)}finally{k?ee():(T=!1,w=null)}}else T=!1}var ee;if(typeof _=="function")ee=function(){_(J)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,Y=N.port2;N.port1.onmessage=J,ee=function(){Y.postMessage(null)}}else ee=function(){g(J,0)};function W(F){w=F,T||(T=!0,ee())}function X(F,k){P=g(function(){F(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,W(C))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(F){switch(p){case 1:case 2:case 3:var k=3;break;default:k=p}var V=p;p=k;try{return F()}finally{p=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,k){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var V=p;p=F;try{return k()}finally{p=V}},t.unstable_scheduleCallback=function(F,k,V){var $=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?$+V:$):V=$,F){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=V+ne,F={id:d++,callback:k,priorityLevel:F,startTime:V,expirationTime:ne,sortIndex:-1},V>$?(F.sortIndex=V,e(c,F),r(l)===null&&F===r(c)&&(y?(u(P),P=-1):y=!0,X(E,V-$))):(F.sortIndex=ne,e(l,F),x||m||(x=!0,W(C))),F},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(F){var k=p;return function(){var V=p;p=k;try{return F.apply(this,arguments)}finally{p=V}}}})(Rm);Am.exports=Rm;var O0=Am.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var z0=Ye,hr=O0;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cm=new Set,go={};function Rn(t,e){va(t,e),va(t+"Capture",e)}function va(t,e){for(go[t]=e,t=0;t<e.length;t++)Cm.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=Object.prototype.hasOwnProperty,B0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Th={},Ah={};function j0(t){return ou.call(Ah,t)?!0:ou.call(Th,t)?!1:B0.test(t)?Ah[t]=!0:(Th[t]=!0,!1)}function H0(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function G0(t,e,r,i){if(e===null||typeof e>"u"||H0(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,r,i,n,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var pd=/[\-:]([a-z])/g;function fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pd,fd);Pt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pd,fd);Pt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pd,fd);Pt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function md(t,e,r,i){var n=Pt.hasOwnProperty(e)?Pt[e]:null;(n!==null?n.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(G0(e,r,n,i)&&(r=null),i||n===null?j0(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):n.mustUseProperty?t[n.propertyName]=r===null?n.type===3?!1:"":r:(e=n.attributeName,i=n.attributeNamespace,r===null?t.removeAttribute(e):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var mi=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),su=Symbol.for("react.profiler"),Lm=Symbol.for("react.provider"),Pm=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),cu=Symbol.for("react.suspense_list"),xd=Symbol.for("react.memo"),Mi=Symbol.for("react.lazy"),Nm=Symbol.for("react.offscreen"),Rh=Symbol.iterator;function Ua(t){return t===null||typeof t!="object"?null:(t=Rh&&t[Rh]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Zl;function Za(t){if(Zl===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Zl=e&&e[1]||""}return`
`+Zl+t}var Jl=!1;function Ql(t,e){if(!t||Jl)return"";Jl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var n=c.stack.split(`
`),a=i.stack.split(`
`),o=n.length-1,s=a.length-1;1<=o&&0<=s&&n[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(n[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||n[o]!==a[s]){var l=`
`+n[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{Jl=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Za(t):""}function W0(t){switch(t.tag){case 5:return Za(t.type);case 16:return Za("Lazy");case 13:return Za("Suspense");case 19:return Za("SuspenseList");case 0:case 2:case 15:return t=Ql(t.type,!1),t;case 11:return t=Ql(t.type.render,!1),t;case 1:return t=Ql(t.type,!0),t;default:return""}}function uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kn:return"Fragment";case Yn:return"Portal";case su:return"Profiler";case gd:return"StrictMode";case lu:return"Suspense";case cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pm:return(t.displayName||"Context")+".Consumer";case Lm:return(t._context.displayName||"Context")+".Provider";case vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xd:return e=t.displayName||null,e!==null?e:uu(t.type)||"Memo";case Mi:e=t._payload,t=t._init;try{return uu(t(e))}catch{}}return null}function V0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uu(e);case 8:return e===gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function X0(t){var e=Fm(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=X0(t))}function Dm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=Fm(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function Ys(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function du(t,e){var r=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Ch(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=Wi(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Um(t,e){e=e.checked,e!=null&&md(t,"checked",e,!1)}function hu(t,e){Um(t,e);var r=Wi(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pu(t,e.type,r):e.hasOwnProperty("defaultValue")&&pu(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lh(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function pu(t,e,r){(e!=="number"||Ys(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Ja=Array.isArray;function ua(t,e,r,i){if(t=t.options,e){e={};for(var n=0;n<r.length;n++)e["$"+r[n]]=!0;for(r=0;r<t.length;r++)n=e.hasOwnProperty("$"+t[r].value),t[r].selected!==n&&(t[r].selected=n),n&&i&&(t[r].defaultSelected=!0)}else{for(r=""+Wi(r),e=null,n=0;n<t.length;n++){if(t[n].value===r){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function fu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ph(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(te(92));if(Ja(r)){if(1<r.length)throw Error(te(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Wi(r)}}function Im(t,e){var r=Wi(e.value),i=Wi(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function Nh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function km(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?km(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zo,Om=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,n){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,n)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vo(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q0=["Webkit","ms","Moz","O"];Object.keys(oo).forEach(function(t){q0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oo[e]=oo[t]})});function zm(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||oo.hasOwnProperty(t)&&oo[t]?(""+e).trim():e+"px"}function Bm(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,n=zm(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,n):t[r]=n}}var Y0=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gu(t,e){if(e){if(Y0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xu=null;function _d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _u=null,da=null,ha=null;function Fh(t){if(t=Oo(t)){if(typeof _u!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Ll(e),_u(t.stateNode,t.type,e))}}function jm(t){da?ha?ha.push(t):ha=[t]:da=t}function Hm(){if(da){var t=da,e=ha;if(ha=da=null,Fh(t),e)for(t=0;t<e.length;t++)Fh(e[t])}}function Gm(t,e){return t(e)}function Wm(){}var ec=!1;function Vm(t,e,r){if(ec)return t(e,r);ec=!0;try{return Gm(t,e,r)}finally{ec=!1,(da!==null||ha!==null)&&(Wm(),Hm())}}function xo(t,e){var r=t.stateNode;if(r===null)return null;var i=Ll(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(te(231,e,typeof r));return r}var yu=!1;if(di)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){yu=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{yu=!1}function K0(t,e,r,i,n,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(d){this.onError(d)}}var so=!1,Ks=null,$s=!1,bu=null,$0={onError:function(t){so=!0,Ks=t}};function Z0(t,e,r,i,n,a,o,s,l){so=!1,Ks=null,K0.apply($0,arguments)}function J0(t,e,r,i,n,a,o,s,l){if(Z0.apply(this,arguments),so){if(so){var c=Ks;so=!1,Ks=null}else throw Error(te(198));$s||($s=!0,bu=c)}}function Cn(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Xm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dh(t){if(Cn(t)!==t)throw Error(te(188))}function Q0(t){var e=t.alternate;if(!e){if(e=Cn(t),e===null)throw Error(te(188));return e!==t?null:t}for(var r=t,i=e;;){var n=r.return;if(n===null)break;var a=n.alternate;if(a===null){if(i=n.return,i!==null){r=i;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===r)return Dh(n),t;if(a===i)return Dh(n),e;a=a.sibling}throw Error(te(188))}if(r.return!==i.return)r=n,i=a;else{for(var o=!1,s=n.child;s;){if(s===r){o=!0,r=n,i=a;break}if(s===i){o=!0,i=n,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,i=n;break}if(s===i){o=!0,i=a,r=n;break}s=s.sibling}if(!o)throw Error(te(189))}}if(r.alternate!==i)throw Error(te(190))}if(r.tag!==3)throw Error(te(188));return r.stateNode.current===r?t:e}function qm(t){return t=Q0(t),t!==null?Ym(t):null}function Ym(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ym(t);if(e!==null)return e;t=t.sibling}return null}var Km=hr.unstable_scheduleCallback,Uh=hr.unstable_cancelCallback,ex=hr.unstable_shouldYield,tx=hr.unstable_requestPaint,mt=hr.unstable_now,rx=hr.unstable_getCurrentPriorityLevel,yd=hr.unstable_ImmediatePriority,$m=hr.unstable_UserBlockingPriority,Zs=hr.unstable_NormalPriority,ix=hr.unstable_LowPriority,Zm=hr.unstable_IdlePriority,Tl=null,qr=null;function nx(t){if(qr&&typeof qr.onCommitFiberRoot=="function")try{qr.onCommitFiberRoot(Tl,t,void 0,(t.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:sx,ax=Math.log,ox=Math.LN2;function sx(t){return t>>>=0,t===0?32:31-(ax(t)/ox|0)|0}var Jo=64,Qo=4194304;function Qa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Js(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,n=t.suspendedLanes,a=t.pingedLanes,o=r&268435455;if(o!==0){var s=o&~n;s!==0?i=Qa(s):(a&=o,a!==0&&(i=Qa(a)))}else o=r&~n,o!==0?i=Qa(o):a!==0&&(i=Qa(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&n)&&(n=i&-i,a=e&-e,n>=a||n===16&&(a&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-kr(e),n=1<<r,i|=t[r],e&=~n;return i}function lx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cx(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-kr(a),s=1<<o,l=n[o];l===-1?(!(s&r)||s&i)&&(n[o]=lx(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function Su(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jm(){var t=Jo;return Jo<<=1,!(Jo&4194240)&&(Jo=64),t}function tc(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Io(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kr(e),t[e]=r}function ux(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var n=31-kr(r),a=1<<n;e[n]=0,i[n]=-1,t[n]=-1,r&=~a}}function bd(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-kr(r),n=1<<i;n&e|t[i]&e&&(t[i]|=e),r&=~n}}var Ze=0;function Qm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var eg,Sd,tg,rg,ig,Mu=!1,es=[],Fi=null,Di=null,Ui=null,_o=new Map,yo=new Map,wi=[],dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ih(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Ui=null;break;case"pointerover":case"pointerout":_o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function ka(t,e,r,i,n,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[n]},e!==null&&(e=Oo(e),e!==null&&Sd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function hx(t,e,r,i,n){switch(e){case"focusin":return Fi=ka(Fi,t,e,r,i,n),!0;case"dragenter":return Di=ka(Di,t,e,r,i,n),!0;case"mouseover":return Ui=ka(Ui,t,e,r,i,n),!0;case"pointerover":var a=n.pointerId;return _o.set(a,ka(_o.get(a)||null,t,e,r,i,n)),!0;case"gotpointercapture":return a=n.pointerId,yo.set(a,ka(yo.get(a)||null,t,e,r,i,n)),!0}return!1}function ng(t){var e=fn(t.target);if(e!==null){var r=Cn(e);if(r!==null){if(e=r.tag,e===13){if(e=Xm(r),e!==null){t.blockedOn=e,ig(t.priority,function(){tg(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ks(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Eu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);xu=i,r.target.dispatchEvent(i),xu=null}else return e=Oo(r),e!==null&&Sd(e),t.blockedOn=r,!1;e.shift()}return!0}function kh(t,e,r){ks(t)&&r.delete(e)}function px(){Mu=!1,Fi!==null&&ks(Fi)&&(Fi=null),Di!==null&&ks(Di)&&(Di=null),Ui!==null&&ks(Ui)&&(Ui=null),_o.forEach(kh),yo.forEach(kh)}function Oa(t,e){t.blockedOn===e&&(t.blockedOn=null,Mu||(Mu=!0,hr.unstable_scheduleCallback(hr.unstable_NormalPriority,px)))}function bo(t){function e(n){return Oa(n,t)}if(0<es.length){Oa(es[0],t);for(var r=1;r<es.length;r++){var i=es[r];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&Oa(Fi,t),Di!==null&&Oa(Di,t),Ui!==null&&Oa(Ui,t),_o.forEach(e),yo.forEach(e),r=0;r<wi.length;r++)i=wi[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<wi.length&&(r=wi[0],r.blockedOn===null);)ng(r),r.blockedOn===null&&wi.shift()}var pa=mi.ReactCurrentBatchConfig,Qs=!0;function fx(t,e,r,i){var n=Ze,a=pa.transition;pa.transition=null;try{Ze=1,Md(t,e,r,i)}finally{Ze=n,pa.transition=a}}function mx(t,e,r,i){var n=Ze,a=pa.transition;pa.transition=null;try{Ze=4,Md(t,e,r,i)}finally{Ze=n,pa.transition=a}}function Md(t,e,r,i){if(Qs){var n=Eu(t,e,r,i);if(n===null)dc(t,e,i,el,r),Ih(t,i);else if(hx(n,t,e,r,i))i.stopPropagation();else if(Ih(t,i),e&4&&-1<dx.indexOf(t)){for(;n!==null;){var a=Oo(n);if(a!==null&&eg(a),a=Eu(t,e,r,i),a===null&&dc(t,e,i,el,r),a===n)break;n=a}n!==null&&i.stopPropagation()}else dc(t,e,i,null,r)}}var el=null;function Eu(t,e,r,i){if(el=null,t=_d(i),t=fn(t),t!==null)if(e=Cn(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Xm(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rx()){case yd:return 1;case $m:return 4;case Zs:case ix:return 16;case Zm:return 536870912;default:return 16}default:return 16}}var Ri=null,Ed=null,Os=null;function og(){if(Os)return Os;var t,e=Ed,r=e.length,i,n="value"in Ri?Ri.value:Ri.textContent,a=n.length;for(t=0;t<r&&e[t]===n[t];t++);var o=r-t;for(i=1;i<=o&&e[r-i]===n[a-i];i++);return Os=n.slice(t,1<i?1-i:void 0)}function zs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ts(){return!0}function Oh(){return!1}function fr(t){function e(r,i,n,a,o){this._reactName=r,this._targetInst=n,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(r=t[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ts:Oh,this.isPropagationStopped=Oh,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),e}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wd=fr(Ca),ko=dt({},Ca,{view:0,detail:0}),gx=fr(ko),rc,ic,za,Al=dt({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==za&&(za&&t.type==="mousemove"?(rc=t.screenX-za.screenX,ic=t.screenY-za.screenY):ic=rc=0,za=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),zh=fr(Al),vx=dt({},Al,{dataTransfer:0}),xx=fr(vx),_x=dt({},ko,{relatedTarget:0}),nc=fr(_x),yx=dt({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),bx=fr(yx),Sx=dt({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mx=fr(Sx),Ex=dt({},Ca,{data:0}),Bh=fr(Ex),wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ax[t])?!!e[t]:!1}function Td(){return Rx}var Cx=dt({},ko,{key:function(t){if(t.key){var e=wx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Td,charCode:function(t){return t.type==="keypress"?zs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lx=fr(Cx),Px=dt({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=fr(Px),Nx=dt({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Td}),Fx=fr(Nx),Dx=dt({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ux=fr(Dx),Ix=dt({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=fr(Ix),Ox=[9,13,27,32],Ad=di&&"CompositionEvent"in window,lo=null;di&&"documentMode"in document&&(lo=document.documentMode);var zx=di&&"TextEvent"in window&&!lo,sg=di&&(!Ad||lo&&8<lo&&11>=lo),Hh=" ",Gh=!1;function lg(t,e){switch(t){case"keyup":return Ox.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $n=!1;function Bx(t,e){switch(t){case"compositionend":return cg(e);case"keypress":return e.which!==32?null:(Gh=!0,Hh);case"textInput":return t=e.data,t===Hh&&Gh?null:t;default:return null}}function jx(t,e){if($n)return t==="compositionend"||!Ad&&lg(t,e)?(t=og(),Os=Ed=Ri=null,$n=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sg&&e.locale!=="ko"?null:e.data;default:return null}}var Hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hx[t.type]:e==="textarea"}function ug(t,e,r,i){jm(i),e=tl(e,"onChange"),0<e.length&&(r=new wd("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var co=null,So=null;function Gx(t){bg(t,0)}function Rl(t){var e=Qn(t);if(Dm(e))return t}function Wx(t,e){if(t==="change")return e}var dg=!1;if(di){var ac;if(di){var oc="oninput"in document;if(!oc){var Vh=document.createElement("div");Vh.setAttribute("oninput","return;"),oc=typeof Vh.oninput=="function"}ac=oc}else ac=!1;dg=ac&&(!document.documentMode||9<document.documentMode)}function Xh(){co&&(co.detachEvent("onpropertychange",hg),So=co=null)}function hg(t){if(t.propertyName==="value"&&Rl(So)){var e=[];ug(e,So,t,_d(t)),Vm(Gx,e)}}function Vx(t,e,r){t==="focusin"?(Xh(),co=e,So=r,co.attachEvent("onpropertychange",hg)):t==="focusout"&&Xh()}function Xx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(So)}function qx(t,e){if(t==="click")return Rl(e)}function Yx(t,e){if(t==="input"||t==="change")return Rl(e)}function Kx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zr=typeof Object.is=="function"?Object.is:Kx;function Mo(t,e){if(zr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var n=r[i];if(!ou.call(e,n)||!zr(t[n],e[n]))return!1}return!0}function qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yh(t,e){var r=qh(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=qh(r)}}function pg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fg(){for(var t=window,e=Ys();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Ys(t.document)}return e}function Rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $x(t){var e=fg(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&pg(r.ownerDocument.documentElement,r)){if(i!==null&&Rd(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var n=r.textContent.length,a=Math.min(i.start,n);i=i.end===void 0?a:Math.min(i.end,n),!t.extend&&a>i&&(n=i,i=a,a=n),n=Yh(r,a);var o=Yh(r,i);n&&o&&(t.rangeCount!==1||t.anchorNode!==n.node||t.anchorOffset!==n.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zx=di&&"documentMode"in document&&11>=document.documentMode,Zn=null,wu=null,uo=null,Tu=!1;function Kh(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Tu||Zn==null||Zn!==Ys(i)||(i=Zn,"selectionStart"in i&&Rd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),uo&&Mo(uo,i)||(uo=i,i=tl(wu,"onSelect"),0<i.length&&(e=new wd("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=Zn)))}function rs(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Jn={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionend:rs("Transition","TransitionEnd")},sc={},mg={};di&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Cl(t){if(sc[t])return sc[t];if(!Jn[t])return t;var e=Jn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in mg)return sc[t]=e[r];return t}var gg=Cl("animationend"),vg=Cl("animationiteration"),xg=Cl("animationstart"),_g=Cl("transitionend"),yg=new Map,$h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){yg.set(t,e),Rn(e,[t])}for(var lc=0;lc<$h.length;lc++){var cc=$h[lc],Jx=cc.toLowerCase(),Qx=cc[0].toUpperCase()+cc.slice(1);Yi(Jx,"on"+Qx)}Yi(gg,"onAnimationEnd");Yi(vg,"onAnimationIteration");Yi(xg,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(_g,"onTransitionEnd");va("onMouseEnter",["mouseout","mouseover"]);va("onMouseLeave",["mouseout","mouseover"]);va("onPointerEnter",["pointerout","pointerover"]);va("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e_=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Zh(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,J0(i,e,void 0,t),t.currentTarget=null}function bg(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],n=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&n.isPropagationStopped())break e;Zh(n,s,c),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&n.isPropagationStopped())break e;Zh(n,s,c),a=l}}}if($s)throw t=bu,$s=!1,bu=null,t}function rt(t,e){var r=e[Pu];r===void 0&&(r=e[Pu]=new Set);var i=t+"__bubble";r.has(i)||(Sg(e,t,2,!1),r.add(i))}function uc(t,e,r){var i=0;e&&(i|=4),Sg(r,t,i,e)}var is="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[is]){t[is]=!0,Cm.forEach(function(r){r!=="selectionchange"&&(e_.has(r)||uc(r,!1,t),uc(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[is]||(e[is]=!0,uc("selectionchange",!1,e))}}function Sg(t,e,r,i){switch(ag(e)){case 1:var n=fx;break;case 4:n=mx;break;default:n=Md}r=n.bind(null,e,r,t),n=void 0,!yu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,r,{capture:!0,passive:n}):t.addEventListener(e,r,!0):n!==void 0?t.addEventListener(e,r,{passive:n}):t.addEventListener(e,r,!1)}function dc(t,e,r,i,n){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;o=o.return}for(;s!==null;){if(o=fn(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}Vm(function(){var c=a,d=_d(r),h=[];e:{var p=yg.get(t);if(p!==void 0){var m=wd,x=t;switch(t){case"keypress":if(zs(r)===0)break e;case"keydown":case"keyup":m=Lx;break;case"focusin":x="focus",m=nc;break;case"focusout":x="blur",m=nc;break;case"beforeblur":case"afterblur":m=nc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Fx;break;case gg:case vg:case xg:m=bx;break;case _g:m=Ux;break;case"scroll":m=gx;break;case"wheel":m=kx;break;case"copy":case"cut":case"paste":m=Mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=jh}var y=(e&4)!==0,g=!y&&t==="scroll",u=y?p!==null?p+"Capture":null:p;y=[];for(var _=c,v;_!==null;){v=_;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,u!==null&&(E=xo(_,u),E!=null&&y.push(wo(_,E,v)))),g)break;_=_.return}0<y.length&&(p=new m(p,x,null,r,d),h.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&r!==xu&&(x=r.relatedTarget||r.fromElement)&&(fn(x)||x[hi]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(x=r.relatedTarget||r.toElement,m=c,x=x?fn(x):null,x!==null&&(g=Cn(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(y=zh,E="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=jh,E="onPointerLeave",u="onPointerEnter",_="pointer"),g=m==null?p:Qn(m),v=x==null?p:Qn(x),p=new y(E,_+"leave",m,r,d),p.target=g,p.relatedTarget=v,E=null,fn(d)===c&&(y=new y(u,_+"enter",x,r,d),y.target=v,y.relatedTarget=g,E=y),g=E,m&&x)t:{for(y=m,u=x,_=0,v=y;v;v=Ln(v))_++;for(v=0,E=u;E;E=Ln(E))v++;for(;0<_-v;)y=Ln(y),_--;for(;0<v-_;)u=Ln(u),v--;for(;_--;){if(y===u||u!==null&&y===u.alternate)break t;y=Ln(y),u=Ln(u)}y=null}else y=null;m!==null&&Jh(h,p,m,y,!1),x!==null&&g!==null&&Jh(h,g,x,y,!0)}}e:{if(p=c?Qn(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var C=Wx;else if(Wh(p))if(dg)C=Yx;else{C=Xx;var T=Vx}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=qx);if(C&&(C=C(t,c))){ug(h,C,r,d);break e}T&&T(t,p,c),t==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&pu(p,"number",p.value)}switch(T=c?Qn(c):window,t){case"focusin":(Wh(T)||T.contentEditable==="true")&&(Zn=T,wu=c,uo=null);break;case"focusout":uo=wu=Zn=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Kh(h,r,d);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":Kh(h,r,d)}var w;if(Ad)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $n?lg(t,r)&&(P="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(sg&&r.locale!=="ko"&&($n||P!=="onCompositionStart"?P==="onCompositionEnd"&&$n&&(w=og()):(Ri=d,Ed="value"in Ri?Ri.value:Ri.textContent,$n=!0)),T=tl(c,P),0<T.length&&(P=new Bh(P,t,null,r,d),h.push({event:P,listeners:T}),w?P.data=w:(w=cg(r),w!==null&&(P.data=w)))),(w=zx?Bx(t,r):jx(t,r))&&(c=tl(c,"onBeforeInput"),0<c.length&&(d=new Bh("onBeforeInput","beforeinput",null,r,d),h.push({event:d,listeners:c}),d.data=w))}bg(h,e)})}function wo(t,e,r){return{instance:t,listener:e,currentTarget:r}}function tl(t,e){for(var r=e+"Capture",i=[];t!==null;){var n=t,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=xo(t,r),a!=null&&i.unshift(wo(t,a,n)),a=xo(t,e),a!=null&&i.push(wo(t,a,n))),t=t.return}return i}function Ln(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jh(t,e,r,i,n){for(var a=e._reactName,o=[];r!==null&&r!==i;){var s=r,l=s.alternate,c=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&c!==null&&(s=c,n?(l=xo(r,a),l!=null&&o.unshift(wo(r,l,s))):n||(l=xo(r,a),l!=null&&o.push(wo(r,l,s)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var t_=/\r\n?/g,r_=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(t_,`
`).replace(r_,"")}function ns(t,e,r){if(e=Qh(e),Qh(t)!==e&&r)throw Error(te(425))}function rl(){}var Au=null,Ru=null;function Cu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,i_=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,n_=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(t){return ep.resolve(null).then(t).catch(a_)}:Lu;function a_(t){setTimeout(function(){throw t})}function hc(t,e){var r=e,i=0;do{var n=r.nextSibling;if(t.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(i===0){t.removeChild(n),bo(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=n}while(r);bo(e)}function Ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var La=Math.random().toString(36).slice(2),Vr="__reactFiber$"+La,To="__reactProps$"+La,hi="__reactContainer$"+La,Pu="__reactEvents$"+La,o_="__reactListeners$"+La,s_="__reactHandles$"+La;function fn(t){var e=t[Vr];if(e)return e;for(var r=t.parentNode;r;){if(e=r[hi]||r[Vr]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=tp(t);t!==null;){if(r=t[Vr])return r;t=tp(t)}return e}t=r,r=t.parentNode}return null}function Oo(t){return t=t[Vr]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Ll(t){return t[To]||null}var Nu=[],ea=-1;function Ki(t){return{current:t}}function nt(t){0>ea||(t.current=Nu[ea],Nu[ea]=null,ea--)}function tt(t,e){ea++,Nu[ea]=t.current,t.current=e}var Vi={},Bt=Ki(Vi),rr=Ki(!1),Sn=Vi;function xa(t,e){var r=t.type.contextTypes;if(!r)return Vi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in r)n[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=n),n}function ir(t){return t=t.childContextTypes,t!=null}function il(){nt(rr),nt(Bt)}function rp(t,e,r){if(Bt.current!==Vi)throw Error(te(168));tt(Bt,e),tt(rr,r)}function Mg(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var n in i)if(!(n in e))throw Error(te(108,V0(t)||"Unknown",n));return dt({},r,i)}function nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,Sn=Bt.current,tt(Bt,t),tt(rr,rr.current),!0}function ip(t,e,r){var i=t.stateNode;if(!i)throw Error(te(169));r?(t=Mg(t,e,Sn),i.__reactInternalMemoizedMergedChildContext=t,nt(rr),nt(Bt),tt(Bt,t)):nt(rr),tt(rr,r)}var ai=null,Pl=!1,pc=!1;function Eg(t){ai===null?ai=[t]:ai.push(t)}function l_(t){Pl=!0,Eg(t)}function $i(){if(!pc&&ai!==null){pc=!0;var t=0,e=Ze;try{var r=ai;for(Ze=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}ai=null,Pl=!1}catch(n){throw ai!==null&&(ai=ai.slice(t+1)),Km(yd,$i),n}finally{Ze=e,pc=!1}}return null}var ta=[],ra=0,al=null,ol=0,_r=[],yr=0,Mn=null,si=1,li="";function ln(t,e){ta[ra++]=ol,ta[ra++]=al,al=t,ol=e}function wg(t,e,r){_r[yr++]=si,_r[yr++]=li,_r[yr++]=Mn,Mn=t;var i=si;t=li;var n=32-kr(i)-1;i&=~(1<<n),r+=1;var a=32-kr(e)+n;if(30<a){var o=n-n%5;a=(i&(1<<o)-1).toString(32),i>>=o,n-=o,si=1<<32-kr(e)+n|r<<n|i,li=a+t}else si=1<<a|r<<n|i,li=t}function Cd(t){t.return!==null&&(ln(t,1),wg(t,1,0))}function Ld(t){for(;t===al;)al=ta[--ra],ta[ra]=null,ol=ta[--ra],ta[ra]=null;for(;t===Mn;)Mn=_r[--yr],_r[yr]=null,li=_r[--yr],_r[yr]=null,si=_r[--yr],_r[yr]=null}var dr=null,ur=null,ot=!1,Fr=null;function Tg(t,e){var r=br(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function np(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dr=t,ur=Ii(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dr=t,ur=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Mn!==null?{id:si,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=br(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,dr=t,ur=null,!0):!1;default:return!1}}function Fu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Du(t){if(ot){var e=ur;if(e){var r=e;if(!np(t,e)){if(Fu(t))throw Error(te(418));e=Ii(r.nextSibling);var i=dr;e&&np(t,e)?Tg(i,r):(t.flags=t.flags&-4097|2,ot=!1,dr=t)}}else{if(Fu(t))throw Error(te(418));t.flags=t.flags&-4097|2,ot=!1,dr=t}}}function ap(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dr=t}function as(t){if(t!==dr)return!1;if(!ot)return ap(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cu(t.type,t.memoizedProps)),e&&(e=ur)){if(Fu(t))throw Ag(),Error(te(418));for(;e;)Tg(t,e),e=Ii(e.nextSibling)}if(ap(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){ur=Ii(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}ur=null}}else ur=dr?Ii(t.stateNode.nextSibling):null;return!0}function Ag(){for(var t=ur;t;)t=Ii(t.nextSibling)}function _a(){ur=dr=null,ot=!1}function Pd(t){Fr===null?Fr=[t]:Fr.push(t)}var c_=mi.ReactCurrentBatchConfig;function Ba(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(te(309));var i=r.stateNode}if(!i)throw Error(te(147,t));var n=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=n.refs;o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(te(284));if(!r._owner)throw Error(te(290,t))}return t}function os(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function op(t){var e=t._init;return e(t._payload)}function Rg(t){function e(u,_){if(t){var v=u.deletions;v===null?(u.deletions=[_],u.flags|=16):v.push(_)}}function r(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function n(u,_){return u=Bi(u,_),u.index=0,u.sibling=null,u}function a(u,_,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<_?(u.flags|=2,_):v):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function s(u,_,v,E){return _===null||_.tag!==6?(_=yc(v,u.mode,E),_.return=u,_):(_=n(_,v),_.return=u,_)}function l(u,_,v,E){var C=v.type;return C===Kn?d(u,_,v.props.children,E,v.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Mi&&op(C)===_.type)?(E=n(_,v.props),E.ref=Ba(u,_,v),E.return=u,E):(E=Xs(v.type,v.key,v.props,null,u.mode,E),E.ref=Ba(u,_,v),E.return=u,E)}function c(u,_,v,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=bc(v,u.mode,E),_.return=u,_):(_=n(_,v.children||[]),_.return=u,_)}function d(u,_,v,E,C){return _===null||_.tag!==7?(_=xn(v,u.mode,E,C),_.return=u,_):(_=n(_,v),_.return=u,_)}function h(u,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=yc(""+_,u.mode,v),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ko:return v=Xs(_.type,_.key,_.props,null,u.mode,v),v.ref=Ba(u,null,_),v.return=u,v;case Yn:return _=bc(_,u.mode,v),_.return=u,_;case Mi:var E=_._init;return h(u,E(_._payload),v)}if(Ja(_)||Ua(_))return _=xn(_,u.mode,v,null),_.return=u,_;os(u,_)}return null}function p(u,_,v,E){var C=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:s(u,_,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:return v.key===C?l(u,_,v,E):null;case Yn:return v.key===C?c(u,_,v,E):null;case Mi:return C=v._init,p(u,_,C(v._payload),E)}if(Ja(v)||Ua(v))return C!==null?null:d(u,_,v,E,null);os(u,v)}return null}function m(u,_,v,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(v)||null,s(_,u,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ko:return u=u.get(E.key===null?v:E.key)||null,l(_,u,E,C);case Yn:return u=u.get(E.key===null?v:E.key)||null,c(_,u,E,C);case Mi:var T=E._init;return m(u,_,v,T(E._payload),C)}if(Ja(E)||Ua(E))return u=u.get(v)||null,d(_,u,E,C,null);os(_,E)}return null}function x(u,_,v,E){for(var C=null,T=null,w=_,P=_=0,q=null;w!==null&&P<v.length;P++){w.index>P?(q=w,w=null):q=w.sibling;var b=p(u,w,v[P],E);if(b===null){w===null&&(w=q);break}t&&w&&b.alternate===null&&e(u,w),_=a(b,_,P),T===null?C=b:T.sibling=b,T=b,w=q}if(P===v.length)return r(u,w),ot&&ln(u,P),C;if(w===null){for(;P<v.length;P++)w=h(u,v[P],E),w!==null&&(_=a(w,_,P),T===null?C=w:T.sibling=w,T=w);return ot&&ln(u,P),C}for(w=i(u,w);P<v.length;P++)q=m(w,u,P,v[P],E),q!==null&&(t&&q.alternate!==null&&w.delete(q.key===null?P:q.key),_=a(q,_,P),T===null?C=q:T.sibling=q,T=q);return t&&w.forEach(function(R){return e(u,R)}),ot&&ln(u,P),C}function y(u,_,v,E){var C=Ua(v);if(typeof C!="function")throw Error(te(150));if(v=C.call(v),v==null)throw Error(te(151));for(var T=C=null,w=_,P=_=0,q=null,b=v.next();w!==null&&!b.done;P++,b=v.next()){w.index>P?(q=w,w=null):q=w.sibling;var R=p(u,w,b.value,E);if(R===null){w===null&&(w=q);break}t&&w&&R.alternate===null&&e(u,w),_=a(R,_,P),T===null?C=R:T.sibling=R,T=R,w=q}if(b.done)return r(u,w),ot&&ln(u,P),C;if(w===null){for(;!b.done;P++,b=v.next())b=h(u,b.value,E),b!==null&&(_=a(b,_,P),T===null?C=b:T.sibling=b,T=b);return ot&&ln(u,P),C}for(w=i(u,w);!b.done;P++,b=v.next())b=m(w,u,P,b.value,E),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?P:b.key),_=a(b,_,P),T===null?C=b:T.sibling=b,T=b);return t&&w.forEach(function(J){return e(u,J)}),ot&&ln(u,P),C}function g(u,_,v,E){if(typeof v=="object"&&v!==null&&v.type===Kn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:e:{for(var C=v.key,T=_;T!==null;){if(T.key===C){if(C=v.type,C===Kn){if(T.tag===7){r(u,T.sibling),_=n(T,v.props.children),_.return=u,u=_;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Mi&&op(C)===T.type){r(u,T.sibling),_=n(T,v.props),_.ref=Ba(u,T,v),_.return=u,u=_;break e}r(u,T);break}else e(u,T);T=T.sibling}v.type===Kn?(_=xn(v.props.children,u.mode,E,v.key),_.return=u,u=_):(E=Xs(v.type,v.key,v.props,null,u.mode,E),E.ref=Ba(u,_,v),E.return=u,u=E)}return o(u);case Yn:e:{for(T=v.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){r(u,_.sibling),_=n(_,v.children||[]),_.return=u,u=_;break e}else{r(u,_);break}else e(u,_);_=_.sibling}_=bc(v,u.mode,E),_.return=u,u=_}return o(u);case Mi:return T=v._init,g(u,_,T(v._payload),E)}if(Ja(v))return x(u,_,v,E);if(Ua(v))return y(u,_,v,E);os(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(r(u,_.sibling),_=n(_,v),_.return=u,u=_):(r(u,_),_=yc(v,u.mode,E),_.return=u,u=_),o(u)):r(u,_)}return g}var ya=Rg(!0),Cg=Rg(!1),sl=Ki(null),ll=null,ia=null,Nd=null;function Fd(){Nd=ia=ll=null}function Dd(t){var e=sl.current;nt(sl),t._currentValue=e}function Uu(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function fa(t,e){ll=t,Nd=ia=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tr=!0),t.firstContext=null)}function Er(t){var e=t._currentValue;if(Nd!==t)if(t={context:t,memoizedValue:e,next:null},ia===null){if(ll===null)throw Error(te(308));ia=t,ll.dependencies={lanes:0,firstContext:t}}else ia=ia.next=t;return e}var mn=null;function Ud(t){mn===null?mn=[t]:mn.push(t)}function Lg(t,e,r,i){var n=e.interleaved;return n===null?(r.next=r,Ud(e)):(r.next=n.next,n.next=r),e.interleaved=r,pi(t,i)}function pi(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Ei=!1;function Id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,pi(t,r)}return n=i.interleaved,n===null?(e.next=e,Ud(i)):(e.next=n.next,n.next=e),i.interleaved=e,pi(t,r)}function Bs(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,bd(t,r)}}function sp(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var n=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?n=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?n=a=e:a=a.next=e}else n=a=e;r={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function cl(t,e,r,i){var n=t.updateQueue;Ei=!1;var a=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(a!==null){var h=n.baseState;o=0,d=c=l=null,s=a;do{var p=s.lane,m=s.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=t,y=s;switch(p=e,m=r,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(m,h,p);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(m,h,p):x,p==null)break e;h=dt({},h,p);break e;case 2:Ei=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,p=n.effects,p===null?n.effects=[s]:p.push(s))}else m={eventTime:m,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,o|=p;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;p=s,s=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);if(d===null&&(l=h),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=d,e=n.shared.interleaved,e!==null){n=e;do o|=n.lane,n=n.next;while(n!==e)}else a===null&&(n.shared.lanes=0);wn|=o,t.lanes=o,t.memoizedState=h}}function lp(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],n=i.callback;if(n!==null){if(i.callback=null,i=r,typeof n!="function")throw Error(te(191,n));n.call(i)}}}var zo={},Yr=Ki(zo),Ao=Ki(zo),Ro=Ki(zo);function gn(t){if(t===zo)throw Error(te(174));return t}function kd(t,e){switch(tt(Ro,e),tt(Ao,t),tt(Yr,zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mu(e,t)}nt(Yr),tt(Yr,e)}function ba(){nt(Yr),nt(Ao),nt(Ro)}function Ng(t){gn(Ro.current);var e=gn(Yr.current),r=mu(e,t.type);e!==r&&(tt(Ao,t),tt(Yr,r))}function Od(t){Ao.current===t&&(nt(Yr),nt(Ao))}var lt=Ki(0);function ul(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function zd(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var js=mi.ReactCurrentDispatcher,mc=mi.ReactCurrentBatchConfig,En=0,ct=null,yt=null,wt=null,dl=!1,ho=!1,Co=0,u_=0;function Dt(){throw Error(te(321))}function Bd(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!zr(t[r],e[r]))return!1;return!0}function jd(t,e,r,i,n,a){if(En=a,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,js.current=t===null||t.memoizedState===null?f_:m_,t=r(i,n),ho){a=0;do{if(ho=!1,Co=0,25<=a)throw Error(te(301));a+=1,wt=yt=null,e.updateQueue=null,js.current=g_,t=r(i,n)}while(ho)}if(js.current=hl,e=yt!==null&&yt.next!==null,En=0,wt=yt=ct=null,dl=!1,e)throw Error(te(300));return t}function Hd(){var t=Co!==0;return Co=0,t}function Hr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?ct.memoizedState=wt=t:wt=wt.next=t,wt}function wr(){if(yt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=wt===null?ct.memoizedState:wt.next;if(e!==null)wt=e,yt=t;else{if(t===null)throw Error(te(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},wt===null?ct.memoizedState=wt=t:wt=wt.next=t}return wt}function Lo(t,e){return typeof e=="function"?e(t):e}function gc(t){var e=wr(),r=e.queue;if(r===null)throw Error(te(311));r.lastRenderedReducer=t;var i=yt,n=i.baseQueue,a=r.pending;if(a!==null){if(n!==null){var o=n.next;n.next=a.next,a.next=o}i.baseQueue=n=a,r.pending=null}if(n!==null){a=n.next,i=i.baseState;var s=o=null,l=null,c=a;do{var d=c.lane;if((En&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=h,o=i):l=l.next=h,ct.lanes|=d,wn|=d}c=c.next}while(c!==null&&c!==a);l===null?o=i:l.next=s,zr(i,e.memoizedState)||(tr=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,r.lastRenderedState=i}if(t=r.interleaved,t!==null){n=t;do a=n.lane,ct.lanes|=a,wn|=a,n=n.next;while(n!==t)}else n===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function vc(t){var e=wr(),r=e.queue;if(r===null)throw Error(te(311));r.lastRenderedReducer=t;var i=r.dispatch,n=r.pending,a=e.memoizedState;if(n!==null){r.pending=null;var o=n=n.next;do a=t(a,o.action),o=o.next;while(o!==n);zr(a,e.memoizedState)||(tr=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,i]}function Fg(){}function Dg(t,e){var r=ct,i=wr(),n=e(),a=!zr(i.memoizedState,n);if(a&&(i.memoizedState=n,tr=!0),i=i.queue,Gd(kg.bind(null,r,i,t),[t]),i.getSnapshot!==e||a||wt!==null&&wt.memoizedState.tag&1){if(r.flags|=2048,Po(9,Ig.bind(null,r,i,n,e),void 0,null),Tt===null)throw Error(te(349));En&30||Ug(r,e,n)}return n}function Ug(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Ig(t,e,r,i){e.value=r,e.getSnapshot=i,Og(e)&&zg(t)}function kg(t,e,r){return r(function(){Og(e)&&zg(t)})}function Og(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!zr(t,r)}catch{return!0}}function zg(t){var e=pi(t,1);e!==null&&Or(e,t,1,-1)}function cp(t){var e=Hr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},e.queue=t,t=t.dispatch=p_.bind(null,ct,t),[e.memoizedState,t]}function Po(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function Bg(){return wr().memoizedState}function Hs(t,e,r,i){var n=Hr();ct.flags|=t,n.memoizedState=Po(1|e,r,void 0,i===void 0?null:i)}function Nl(t,e,r,i){var n=wr();i=i===void 0?null:i;var a=void 0;if(yt!==null){var o=yt.memoizedState;if(a=o.destroy,i!==null&&Bd(i,o.deps)){n.memoizedState=Po(e,r,a,i);return}}ct.flags|=t,n.memoizedState=Po(1|e,r,a,i)}function up(t,e){return Hs(8390656,8,t,e)}function Gd(t,e){return Nl(2048,8,t,e)}function jg(t,e){return Nl(4,2,t,e)}function Hg(t,e){return Nl(4,4,t,e)}function Gg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wg(t,e,r){return r=r!=null?r.concat([t]):null,Nl(4,4,Gg.bind(null,e,t),r)}function Wd(){}function Vg(t,e){var r=wr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Bd(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function Xg(t,e){var r=wr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Bd(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function qg(t,e,r){return En&21?(zr(r,e)||(r=Jm(),ct.lanes|=r,wn|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tr=!0),t.memoizedState=r)}function d_(t,e){var r=Ze;Ze=r!==0&&4>r?r:4,t(!0);var i=mc.transition;mc.transition={};try{t(!1),e()}finally{Ze=r,mc.transition=i}}function Yg(){return wr().memoizedState}function h_(t,e,r){var i=zi(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Kg(t))$g(e,r);else if(r=Lg(t,e,r,i),r!==null){var n=Vt();Or(r,t,i,n),Zg(r,e,i)}}function p_(t,e,r){var i=zi(t),n={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Kg(t))$g(e,n);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,r);if(n.hasEagerState=!0,n.eagerState=s,zr(s,o)){var l=e.interleaved;l===null?(n.next=n,Ud(e)):(n.next=l.next,l.next=n),e.interleaved=n;return}}catch{}finally{}r=Lg(t,e,n,i),r!==null&&(n=Vt(),Or(r,t,i,n),Zg(r,e,i))}}function Kg(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function $g(t,e){ho=dl=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Zg(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,bd(t,r)}}var hl={readContext:Er,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},f_={readContext:Er,useCallback:function(t,e){return Hr().memoizedState=[t,e===void 0?null:e],t},useContext:Er,useEffect:up,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Hs(4194308,4,Gg.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Hs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hs(4,2,t,e)},useMemo:function(t,e){var r=Hr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=Hr();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=h_.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Hr();return t={current:t},e.memoizedState=t},useState:cp,useDebugValue:Wd,useDeferredValue:function(t){return Hr().memoizedState=t},useTransition:function(){var t=cp(!1),e=t[0];return t=d_.bind(null,t[1]),Hr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=ct,n=Hr();if(ot){if(r===void 0)throw Error(te(407));r=r()}else{if(r=e(),Tt===null)throw Error(te(349));En&30||Ug(i,e,r)}n.memoizedState=r;var a={value:r,getSnapshot:e};return n.queue=a,up(kg.bind(null,i,a,t),[t]),i.flags|=2048,Po(9,Ig.bind(null,i,a,r,e),void 0,null),r},useId:function(){var t=Hr(),e=Tt.identifierPrefix;if(ot){var r=li,i=si;r=(i&~(1<<32-kr(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=Co++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=u_++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},m_={readContext:Er,useCallback:Vg,useContext:Er,useEffect:Gd,useImperativeHandle:Wg,useInsertionEffect:jg,useLayoutEffect:Hg,useMemo:Xg,useReducer:gc,useRef:Bg,useState:function(){return gc(Lo)},useDebugValue:Wd,useDeferredValue:function(t){var e=wr();return qg(e,yt.memoizedState,t)},useTransition:function(){var t=gc(Lo)[0],e=wr().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Dg,useId:Yg,unstable_isNewReconciler:!1},g_={readContext:Er,useCallback:Vg,useContext:Er,useEffect:Gd,useImperativeHandle:Wg,useInsertionEffect:jg,useLayoutEffect:Hg,useMemo:Xg,useReducer:vc,useRef:Bg,useState:function(){return vc(Lo)},useDebugValue:Wd,useDeferredValue:function(t){var e=wr();return yt===null?e.memoizedState=t:qg(e,yt.memoizedState,t)},useTransition:function(){var t=vc(Lo)[0],e=wr().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Dg,useId:Yg,unstable_isNewReconciler:!1};function Pr(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Iu(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:dt({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Fl={isMounted:function(t){return(t=t._reactInternals)?Cn(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=Vt(),n=zi(t),a=ui(i,n);a.payload=e,r!=null&&(a.callback=r),e=ki(t,a,n),e!==null&&(Or(e,t,n,i),Bs(e,t,n))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=Vt(),n=zi(t),a=ui(i,n);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=ki(t,a,n),e!==null&&(Or(e,t,n,i),Bs(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Vt(),i=zi(t),n=ui(r,i);n.tag=2,e!=null&&(n.callback=e),e=ki(t,n,i),e!==null&&(Or(e,t,i,r),Bs(e,t,i))}};function dp(t,e,r,i,n,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!Mo(r,i)||!Mo(n,a):!0}function Jg(t,e,r){var i=!1,n=Vi,a=e.contextType;return typeof a=="object"&&a!==null?a=Er(a):(n=ir(e)?Sn:Bt.current,i=e.contextTypes,a=(i=i!=null)?xa(t,n):Vi),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=a),e}function hp(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&Fl.enqueueReplaceState(e,e.state,null)}function ku(t,e,r,i){var n=t.stateNode;n.props=r,n.state=t.memoizedState,n.refs={},Id(t);var a=e.contextType;typeof a=="object"&&a!==null?n.context=Er(a):(a=ir(e)?Sn:Bt.current,n.context=xa(t,a)),n.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Iu(t,e,a,r),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&Fl.enqueueReplaceState(n,n.state,null),cl(t,r,n,i),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308)}function Sa(t,e){try{var r="",i=e;do r+=W0(i),i=i.return;while(i);var n=r}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:n,digest:null}}function xc(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Ou(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var v_=typeof WeakMap=="function"?WeakMap:Map;function Qg(t,e,r){r=ui(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){fl||(fl=!0,qu=i),Ou(t,e)},r}function ev(t,e,r){r=ui(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;r.payload=function(){return i(n)},r.callback=function(){Ou(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Ou(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function pp(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new v_;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(r)||(n.add(r),t=P_.bind(null,t,e,r),e.then(t,t))}function fp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mp(t,e,r,i,n){return t.mode&1?(t.flags|=65536,t.lanes=n,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=ui(-1,1),e.tag=2,ki(r,e,1))),r.lanes|=1),t)}var x_=mi.ReactCurrentOwner,tr=!1;function Gt(t,e,r,i){e.child=t===null?Cg(e,null,r,i):ya(e,t.child,r,i)}function gp(t,e,r,i,n){r=r.render;var a=e.ref;return fa(e,n),i=jd(t,e,r,i,a,n),r=Hd(),t!==null&&!tr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,fi(t,e,n)):(ot&&r&&Cd(e),e.flags|=1,Gt(t,e,i,n),e.child)}function vp(t,e,r,i,n){if(t===null){var a=r.type;return typeof a=="function"&&!Jd(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,tv(t,e,a,i,n)):(t=Xs(r.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&n)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:Mo,r(o,i)&&t.ref===e.ref)return fi(t,e,n)}return e.flags|=1,t=Bi(a,i),t.ref=e.ref,t.return=e,e.child=t}function tv(t,e,r,i,n){if(t!==null){var a=t.memoizedProps;if(Mo(a,i)&&t.ref===e.ref)if(tr=!1,e.pendingProps=i=a,(t.lanes&n)!==0)t.flags&131072&&(tr=!0);else return e.lanes=t.lanes,fi(t,e,n)}return zu(t,e,r,i,n)}function rv(t,e,r){var i=e.pendingProps,n=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(aa,lr),lr|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(aa,lr),lr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,tt(aa,lr),lr|=i}else a!==null?(i=a.baseLanes|r,e.memoizedState=null):i=r,tt(aa,lr),lr|=i;return Gt(t,e,n,r),e.child}function iv(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function zu(t,e,r,i,n){var a=ir(r)?Sn:Bt.current;return a=xa(e,a),fa(e,n),r=jd(t,e,r,i,a,n),i=Hd(),t!==null&&!tr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,fi(t,e,n)):(ot&&i&&Cd(e),e.flags|=1,Gt(t,e,r,n),e.child)}function xp(t,e,r,i,n){if(ir(r)){var a=!0;nl(e)}else a=!1;if(fa(e,n),e.stateNode===null)Gs(t,e),Jg(e,r,i),ku(e,r,i,n),i=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=Er(c):(c=ir(r)?Sn:Bt.current,c=xa(e,c));var d=r.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==c)&&hp(e,o,i,c),Ei=!1;var p=e.memoizedState;o.state=p,cl(e,i,o,n),l=e.memoizedState,s!==i||p!==l||rr.current||Ei?(typeof d=="function"&&(Iu(e,r,d,i),l=e.memoizedState),(s=Ei||dp(e,r,s,i,p,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Pg(t,e),s=e.memoizedProps,c=e.type===e.elementType?s:Pr(e.type,s),o.props=c,h=e.pendingProps,p=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=Er(l):(l=ir(r)?Sn:Bt.current,l=xa(e,l));var m=r.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||p!==l)&&hp(e,o,i,l),Ei=!1,p=e.memoizedState,o.state=p,cl(e,i,o,n);var x=e.memoizedState;s!==h||p!==x||rr.current||Ei?(typeof m=="function"&&(Iu(e,r,m,i),x=e.memoizedState),(c=Ei||dp(e,r,c,i,p,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Bu(t,e,r,i,a,n)}function Bu(t,e,r,i,n,a){iv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return n&&ip(e,r,!1),fi(t,e,a);i=e.stateNode,x_.current=e;var s=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ya(e,t.child,null,a),e.child=ya(e,null,s,a)):Gt(t,e,s,a),e.memoizedState=i.state,n&&ip(e,r,!0),e.child}function nv(t){var e=t.stateNode;e.pendingContext?rp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rp(t,e.context,!1),kd(t,e.containerInfo)}function _p(t,e,r,i,n){return _a(),Pd(n),e.flags|=256,Gt(t,e,r,i),e.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Hu(t){return{baseLanes:t,cachePool:null,transitions:null}}function av(t,e,r){var i=e.pendingProps,n=lt.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(n&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(n|=1),tt(lt,n&1),t===null)return Du(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,a?(i=e.mode,a=e.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Il(o,i,0,null),t=xn(t,i,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Hu(r),e.memoizedState=ju,t):Vd(e,o));if(n=t.memoizedState,n!==null&&(s=n.dehydrated,s!==null))return __(t,e,o,i,s,n,r);if(a){a=i.fallback,o=e.mode,n=t.child,s=n.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==n?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(n,l),i.subtreeFlags=n.subtreeFlags&14680064),s!==null?a=Bi(s,a):(a=xn(a,o,r,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o=o===null?Hu(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~r,e.memoizedState=ju,i}return a=t.child,t=a.sibling,i=Bi(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function Vd(t,e){return e=Il({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ss(t,e,r,i){return i!==null&&Pd(i),ya(e,t.child,null,r),t=Vd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function __(t,e,r,i,n,a,o){if(r)return e.flags&256?(e.flags&=-257,i=xc(Error(te(422))),ss(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,n=e.mode,i=Il({mode:"visible",children:i.children},n,0,null),a=xn(a,n,o,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&ya(e,t.child,null,o),e.child.memoizedState=Hu(o),e.memoizedState=ju,a);if(!(e.mode&1))return ss(t,e,o,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(te(419)),i=xc(a,i,void 0),ss(t,e,o,i)}if(s=(o&t.childLanes)!==0,tr||s){if(i=Tt,i!==null){switch(o&-o){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(i.suspendedLanes|o)?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,pi(t,n),Or(i,t,n,-1))}return Zd(),i=xc(Error(te(421))),ss(t,e,o,i)}return n.data==="$?"?(e.flags|=128,e.child=t.child,e=N_.bind(null,t),n._reactRetry=e,null):(t=a.treeContext,ur=Ii(n.nextSibling),dr=e,ot=!0,Fr=null,t!==null&&(_r[yr++]=si,_r[yr++]=li,_r[yr++]=Mn,si=t.id,li=t.overflow,Mn=e),e=Vd(e,i.children),e.flags|=4096,e)}function yp(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Uu(t.return,e,r)}function _c(t,e,r,i,n){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:n}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=n)}function ov(t,e,r){var i=e.pendingProps,n=i.revealOrder,a=i.tail;if(Gt(t,e,i.children,r),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,r,e);else if(t.tag===19)yp(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(r=e.child,n=null;r!==null;)t=r.alternate,t!==null&&ul(t)===null&&(n=r),r=r.sibling;r=n,r===null?(n=e.child,e.child=null):(n=r.sibling,r.sibling=null),_c(e,!1,n,r,a);break;case"backwards":for(r=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ul(t)===null){e.child=n;break}t=n.sibling,n.sibling=r,r=n,n=t}_c(e,!0,r,null,a);break;case"together":_c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fi(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),wn|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,r=Bi(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Bi(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function y_(t,e,r){switch(e.tag){case 3:nv(e),_a();break;case 5:Ng(e);break;case 1:ir(e.type)&&nl(e);break;case 4:kd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,n=e.memoizedProps.value;tt(sl,i._currentValue),i._currentValue=n;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(lt,lt.current&1),e.flags|=128,null):r&e.child.childLanes?av(t,e,r):(tt(lt,lt.current&1),t=fi(t,e,r),t!==null?t.sibling:null);tt(lt,lt.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return ov(t,e,r);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,rv(t,e,r)}return fi(t,e,r)}var sv,Gu,lv,cv;sv=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Gu=function(){};lv=function(t,e,r,i){var n=t.memoizedProps;if(n!==i){t=e.stateNode,gn(Yr.current);var a=null;switch(r){case"input":n=du(t,n),i=du(t,i),a=[];break;case"select":n=dt({},n,{value:void 0}),i=dt({},i,{value:void 0}),a=[];break;case"textarea":n=fu(t,n),i=fu(t,i),a=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=rl)}gu(r,i);var o;r=null;for(c in n)if(!i.hasOwnProperty(c)&&n.hasOwnProperty(c)&&n[c]!=null)if(c==="style"){var s=n[c];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(go.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(s=n!=null?n[c]:void 0,i.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(a||(a=[]),a.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(go.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),a||s===l||(a=[])):(a=a||[]).push(c,l))}r&&(a=a||[]).push("style",r);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};cv=function(t,e,r,i){r!==i&&(e.flags|=4)};function ja(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function b_(t,e,r){var i=e.pendingProps;switch(Ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return ir(e.type)&&il(),Ut(e),null;case 3:return i=e.stateNode,ba(),nt(rr),nt(Bt),zd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(as(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fr!==null&&($u(Fr),Fr=null))),Gu(t,e),Ut(e),null;case 5:Od(e);var n=gn(Ro.current);if(r=e.type,t!==null&&e.stateNode!=null)lv(t,e,r,i,n),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ut(e),null}if(t=gn(Yr.current),as(e)){i=e.stateNode,r=e.type;var a=e.memoizedProps;switch(i[Vr]=e,i[To]=a,t=(e.mode&1)!==0,r){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(n=0;n<eo.length;n++)rt(eo[n],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Ch(i,a),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},rt("invalid",i);break;case"textarea":Ph(i,a),rt("invalid",i)}gu(r,a),n=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&ns(i.textContent,s,t),n=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&ns(i.textContent,s,t),n=["children",""+s]):go.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&rt("scroll",i)}switch(r){case"input":$o(i),Lh(i,a,!0);break;case"textarea":$o(i),Nh(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=rl)}i=n,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=n.nodeType===9?n:n.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=km(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(r,{is:i.is}):(t=o.createElement(r),r==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,r),t[Vr]=e,t[To]=i,sv(t,e,!1,!1),e.stateNode=t;e:{switch(o=vu(r,i),r){case"dialog":rt("cancel",t),rt("close",t),n=i;break;case"iframe":case"object":case"embed":rt("load",t),n=i;break;case"video":case"audio":for(n=0;n<eo.length;n++)rt(eo[n],t);n=i;break;case"source":rt("error",t),n=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),n=i;break;case"details":rt("toggle",t),n=i;break;case"input":Ch(t,i),n=du(t,i),rt("invalid",t);break;case"option":n=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},n=dt({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Ph(t,i),n=fu(t,i),rt("invalid",t);break;default:n=i}gu(r,n),s=n;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Bm(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Om(t,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&vo(t,l):typeof l=="number"&&vo(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(go.hasOwnProperty(a)?l!=null&&a==="onScroll"&&rt("scroll",t):l!=null&&md(t,a,l,o))}switch(r){case"input":$o(t),Lh(t,i,!1);break;case"textarea":$o(t),Nh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?ua(t,!!i.multiple,a,!1):i.defaultValue!=null&&ua(t,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(t.onclick=rl)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)cv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(r=gn(Ro.current),gn(Yr.current),as(e)){if(i=e.stateNode,r=e.memoizedProps,i[Vr]=e,(a=i.nodeValue!==r)&&(t=dr,t!==null))switch(t.tag){case 3:ns(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ns(i.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Vr]=e,e.stateNode=i}return Ut(e),null;case 13:if(nt(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&ur!==null&&e.mode&1&&!(e.flags&128))Ag(),_a(),e.flags|=98560,a=!1;else if(a=as(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(te(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(te(317));a[Vr]=e}else _a(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),a=!1}else Fr!==null&&($u(Fr),Fr=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?bt===0&&(bt=3):Zd())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return ba(),Gu(t,e),t===null&&Eo(e.stateNode.containerInfo),Ut(e),null;case 10:return Dd(e.type._context),Ut(e),null;case 17:return ir(e.type)&&il(),Ut(e),null;case 19:if(nt(lt),a=e.memoizedState,a===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=a.rendering,o===null)if(i)ja(a,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ul(t),o!==null){for(e.flags|=128,ja(a,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)a=r,t=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return tt(lt,lt.current&1|2),e.child}t=t.sibling}a.tail!==null&&mt()>Ma&&(e.flags|=128,i=!0,ja(a,!1),e.lanes=4194304)}else{if(!i)if(t=ul(o),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),ja(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ot)return Ut(e),null}else 2*mt()-a.renderingStartTime>Ma&&r!==1073741824&&(e.flags|=128,i=!0,ja(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(r=a.last,r!==null?r.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=mt(),e.sibling=null,r=lt.current,tt(lt,i?r&1|2:r&1),e):(Ut(e),null);case 22:case 23:return $d(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?lr&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function S_(t,e){switch(Ld(e),e.tag){case 1:return ir(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ba(),nt(rr),nt(Bt),zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Od(e),null;case 13:if(nt(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));_a()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(lt),null;case 4:return ba(),null;case 10:return Dd(e.type._context),null;case 22:case 23:return $d(),null;case 24:return null;default:return null}}var ls=!1,Ot=!1,M_=typeof WeakSet=="function"?WeakSet:Set,me=null;function na(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){ht(t,e,i)}else r.current=null}function uv(t,e,r){try{r()}catch(i){ht(t,e,i)}}var bp=!1;function E_(t,e){if(Au=Qs,t=fg(),Rd(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var n=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,c=0,d=0,h=t,p=null;t:for(;;){for(var m;h!==r||n!==0&&h.nodeType!==3||(s=o+n),h!==a||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)p=h,h=m;for(;;){if(h===t)break t;if(p===r&&++c===n&&(s=o),p===a&&++d===i&&(l=o),(m=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=m}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ru={focusedElem:t,selectionRange:r},Qs=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,g=x.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pr(e.type,y),g);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(E){ht(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return x=bp,bp=!1,x}function po(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&t)===t){var a=n.destroy;n.destroy=void 0,a!==void 0&&uv(e,r,a)}n=n.next}while(n!==i)}}function Dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function Wu(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function dv(t){var e=t.alternate;e!==null&&(t.alternate=null,dv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vr],delete e[To],delete e[Pu],delete e[o_],delete e[s_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hv(t){return t.tag===5||t.tag===3||t.tag===4}function Sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=rl));else if(i!==4&&(t=t.child,t!==null))for(Vu(t,e,r),t=t.sibling;t!==null;)Vu(t,e,r),t=t.sibling}function Xu(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Xu(t,e,r),t=t.sibling;t!==null;)Xu(t,e,r),t=t.sibling}var Ct=null,Nr=!1;function gi(t,e,r){for(r=r.child;r!==null;)pv(t,e,r),r=r.sibling}function pv(t,e,r){if(qr&&typeof qr.onCommitFiberUnmount=="function")try{qr.onCommitFiberUnmount(Tl,r)}catch{}switch(r.tag){case 5:Ot||na(r,e);case 6:var i=Ct,n=Nr;Ct=null,gi(t,e,r),Ct=i,Nr=n,Ct!==null&&(Nr?(t=Ct,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Ct.removeChild(r.stateNode));break;case 18:Ct!==null&&(Nr?(t=Ct,r=r.stateNode,t.nodeType===8?hc(t.parentNode,r):t.nodeType===1&&hc(t,r),bo(t)):hc(Ct,r.stateNode));break;case 4:i=Ct,n=Nr,Ct=r.stateNode.containerInfo,Nr=!0,gi(t,e,r),Ct=i,Nr=n;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var a=n,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&uv(r,e,o),n=n.next}while(n!==i)}gi(t,e,r);break;case 1:if(!Ot&&(na(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(s){ht(r,e,s)}gi(t,e,r);break;case 21:gi(t,e,r);break;case 22:r.mode&1?(Ot=(i=Ot)||r.memoizedState!==null,gi(t,e,r),Ot=i):gi(t,e,r);break;default:gi(t,e,r)}}function Mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new M_),e.forEach(function(i){var n=F_.bind(null,t,i);r.has(i)||(r.add(i),i.then(n,n))})}}function Ar(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var n=r[i];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ct=s.stateNode,Nr=!1;break e;case 3:Ct=s.stateNode.containerInfo,Nr=!0;break e;case 4:Ct=s.stateNode.containerInfo,Nr=!0;break e}s=s.return}if(Ct===null)throw Error(te(160));pv(a,o,n),Ct=null,Nr=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(c){ht(n,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fv(e,t),e=e.sibling}function fv(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ar(e,t),jr(t),i&4){try{po(3,t,t.return),Dl(3,t)}catch(y){ht(t,t.return,y)}try{po(5,t,t.return)}catch(y){ht(t,t.return,y)}}break;case 1:Ar(e,t),jr(t),i&512&&r!==null&&na(r,r.return);break;case 5:if(Ar(e,t),jr(t),i&512&&r!==null&&na(r,r.return),t.flags&32){var n=t.stateNode;try{vo(n,"")}catch(y){ht(t,t.return,y)}}if(i&4&&(n=t.stateNode,n!=null)){var a=t.memoizedProps,o=r!==null?r.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Um(n,a),vu(s,o);var c=vu(s,a);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Bm(n,h):d==="dangerouslySetInnerHTML"?Om(n,h):d==="children"?vo(n,h):md(n,d,h,c)}switch(s){case"input":hu(n,a);break;case"textarea":Im(n,a);break;case"select":var p=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?ua(n,!!a.multiple,m,!1):p!==!!a.multiple&&(a.defaultValue!=null?ua(n,!!a.multiple,a.defaultValue,!0):ua(n,!!a.multiple,a.multiple?[]:"",!1))}n[To]=a}catch(y){ht(t,t.return,y)}}break;case 6:if(Ar(e,t),jr(t),i&4){if(t.stateNode===null)throw Error(te(162));n=t.stateNode,a=t.memoizedProps;try{n.nodeValue=a}catch(y){ht(t,t.return,y)}}break;case 3:if(Ar(e,t),jr(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{bo(e.containerInfo)}catch(y){ht(t,t.return,y)}break;case 4:Ar(e,t),jr(t);break;case 13:Ar(e,t),jr(t),n=t.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(Yd=mt())),i&4&&Mp(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||d,Ar(e,t),Ot=c):Ar(e,t),jr(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(me=t,d=t.child;d!==null;){for(h=me=d;me!==null;){switch(p=me,m=p.child,p.tag){case 0:case 11:case 14:case 15:po(4,p,p.return);break;case 1:na(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){i=p,r=p.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){ht(i,r,y)}}break;case 5:na(p,p.return);break;case 22:if(p.memoizedState!==null){wp(h);continue}}m!==null?(m.return=p,me=m):wp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{n=h.stateNode,c?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=zm("display",o))}catch(y){ht(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){ht(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ar(e,t),jr(t),i&4&&Mp(t);break;case 21:break;default:Ar(e,t),jr(t)}}function jr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(hv(r)){var i=r;break e}r=r.return}throw Error(te(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(vo(n,""),i.flags&=-33);var a=Sp(t);Xu(t,a,n);break;case 3:case 4:var o=i.stateNode.containerInfo,s=Sp(t);Vu(t,s,o);break;default:throw Error(te(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function w_(t,e,r){me=t,mv(t)}function mv(t,e,r){for(var i=(t.mode&1)!==0;me!==null;){var n=me,a=n.child;if(n.tag===22&&i){var o=n.memoizedState!==null||ls;if(!o){var s=n.alternate,l=s!==null&&s.memoizedState!==null||Ot;s=ls;var c=Ot;if(ls=o,(Ot=l)&&!c)for(me=n;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Tp(n):l!==null?(l.return=o,me=l):Tp(n);for(;a!==null;)me=a,mv(a),a=a.sibling;me=n,ls=s,Ot=c}Ep(t)}else n.subtreeFlags&8772&&a!==null?(a.return=n,me=a):Ep(t)}}function Ep(t){for(;me!==null;){var e=me;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Dl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(r===null)i.componentDidMount();else{var n=e.elementType===e.type?r.memoizedProps:Pr(e.type,r.memoizedProps);i.componentDidUpdate(n,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&lp(e,a,i);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}lp(e,o,r)}break;case 5:var s=e.stateNode;if(r===null&&e.flags&4){r=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&bo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ot||e.flags&512&&Wu(e)}catch(p){ht(e,e.return,p)}}if(e===t){me=null;break}if(r=e.sibling,r!==null){r.return=e.return,me=r;break}me=e.return}}function wp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var r=e.sibling;if(r!==null){r.return=e.return,me=r;break}me=e.return}}function Tp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Dl(4,e)}catch(l){ht(e,r,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var n=e.return;try{i.componentDidMount()}catch(l){ht(e,n,l)}}var a=e.return;try{Wu(e)}catch(l){ht(e,a,l)}break;case 5:var o=e.return;try{Wu(e)}catch(l){ht(e,o,l)}}}catch(l){ht(e,e.return,l)}if(e===t){me=null;break}var s=e.sibling;if(s!==null){s.return=e.return,me=s;break}me=e.return}}var T_=Math.ceil,pl=mi.ReactCurrentDispatcher,Xd=mi.ReactCurrentOwner,Sr=mi.ReactCurrentBatchConfig,Ke=0,Tt=null,xt=null,Lt=0,lr=0,aa=Ki(0),bt=0,No=null,wn=0,Ul=0,qd=0,fo=null,Jt=null,Yd=0,Ma=1/0,ni=null,fl=!1,qu=null,Oi=null,cs=!1,Ci=null,ml=0,mo=0,Yu=null,Ws=-1,Vs=0;function Vt(){return Ke&6?mt():Ws!==-1?Ws:Ws=mt()}function zi(t){return t.mode&1?Ke&2&&Lt!==0?Lt&-Lt:c_.transition!==null?(Vs===0&&(Vs=Jm()),Vs):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:ag(t.type)),t):1}function Or(t,e,r,i){if(50<mo)throw mo=0,Yu=null,Error(te(185));Io(t,r,i),(!(Ke&2)||t!==Tt)&&(t===Tt&&(!(Ke&2)&&(Ul|=r),bt===4&&Ti(t,Lt)),nr(t,i),r===1&&Ke===0&&!(e.mode&1)&&(Ma=mt()+500,Pl&&$i()))}function nr(t,e){var r=t.callbackNode;cx(t,e);var i=Js(t,t===Tt?Lt:0);if(i===0)r!==null&&Uh(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&Uh(r),e===1)t.tag===0?l_(Ap.bind(null,t)):Eg(Ap.bind(null,t)),n_(function(){!(Ke&6)&&$i()}),r=null;else{switch(Qm(i)){case 1:r=yd;break;case 4:r=$m;break;case 16:r=Zs;break;case 536870912:r=Zm;break;default:r=Zs}r=Mv(r,gv.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function gv(t,e){if(Ws=-1,Vs=0,Ke&6)throw Error(te(327));var r=t.callbackNode;if(ma()&&t.callbackNode!==r)return null;var i=Js(t,t===Tt?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gl(t,i);else{e=i;var n=Ke;Ke|=2;var a=xv();(Tt!==t||Lt!==e)&&(ni=null,Ma=mt()+500,vn(t,e));do try{C_();break}catch(s){vv(t,s)}while(!0);Fd(),pl.current=a,Ke=n,xt!==null?e=0:(Tt=null,Lt=0,e=bt)}if(e!==0){if(e===2&&(n=Su(t),n!==0&&(i=n,e=Ku(t,n))),e===1)throw r=No,vn(t,0),Ti(t,i),nr(t,mt()),r;if(e===6)Ti(t,i);else{if(n=t.current.alternate,!(i&30)&&!A_(n)&&(e=gl(t,i),e===2&&(a=Su(t),a!==0&&(i=a,e=Ku(t,a))),e===1))throw r=No,vn(t,0),Ti(t,i),nr(t,mt()),r;switch(t.finishedWork=n,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:cn(t,Jt,ni);break;case 3:if(Ti(t,i),(i&130023424)===i&&(e=Yd+500-mt(),10<e)){if(Js(t,0)!==0)break;if(n=t.suspendedLanes,(n&i)!==i){Vt(),t.pingedLanes|=t.suspendedLanes&n;break}t.timeoutHandle=Lu(cn.bind(null,t,Jt,ni),e);break}cn(t,Jt,ni);break;case 4:if(Ti(t,i),(i&4194240)===i)break;for(e=t.eventTimes,n=-1;0<i;){var o=31-kr(i);a=1<<o,o=e[o],o>n&&(n=o),i&=~a}if(i=n,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*T_(i/1960))-i,10<i){t.timeoutHandle=Lu(cn.bind(null,t,Jt,ni),i);break}cn(t,Jt,ni);break;case 5:cn(t,Jt,ni);break;default:throw Error(te(329))}}}return nr(t,mt()),t.callbackNode===r?gv.bind(null,t):null}function Ku(t,e){var r=fo;return t.current.memoizedState.isDehydrated&&(vn(t,e).flags|=256),t=gl(t,e),t!==2&&(e=Jt,Jt=r,e!==null&&$u(e)),t}function $u(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function A_(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var n=r[i],a=n.getSnapshot;n=n.value;try{if(!zr(a(),n))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ti(t,e){for(e&=~qd,e&=~Ul,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-kr(e),i=1<<r;t[r]=-1,e&=~i}}function Ap(t){if(Ke&6)throw Error(te(327));ma();var e=Js(t,0);if(!(e&1))return nr(t,mt()),null;var r=gl(t,e);if(t.tag!==0&&r===2){var i=Su(t);i!==0&&(e=i,r=Ku(t,i))}if(r===1)throw r=No,vn(t,0),Ti(t,e),nr(t,mt()),r;if(r===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cn(t,Jt,ni),nr(t,mt()),null}function Kd(t,e){var r=Ke;Ke|=1;try{return t(e)}finally{Ke=r,Ke===0&&(Ma=mt()+500,Pl&&$i())}}function Tn(t){Ci!==null&&Ci.tag===0&&!(Ke&6)&&ma();var e=Ke;Ke|=1;var r=Sr.transition,i=Ze;try{if(Sr.transition=null,Ze=1,t)return t()}finally{Ze=i,Sr.transition=r,Ke=e,!(Ke&6)&&$i()}}function $d(){lr=aa.current,nt(aa)}function vn(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,i_(r)),xt!==null)for(r=xt.return;r!==null;){var i=r;switch(Ld(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&il();break;case 3:ba(),nt(rr),nt(Bt),zd();break;case 5:Od(i);break;case 4:ba();break;case 13:nt(lt);break;case 19:nt(lt);break;case 10:Dd(i.type._context);break;case 22:case 23:$d()}r=r.return}if(Tt=t,xt=t=Bi(t.current,null),Lt=lr=e,bt=0,No=null,qd=Ul=wn=0,Jt=fo=null,mn!==null){for(e=0;e<mn.length;e++)if(r=mn[e],i=r.interleaved,i!==null){r.interleaved=null;var n=i.next,a=r.pending;if(a!==null){var o=a.next;a.next=n,i.next=o}r.pending=i}mn=null}return t}function vv(t,e){do{var r=xt;try{if(Fd(),js.current=hl,dl){for(var i=ct.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}dl=!1}if(En=0,wt=yt=ct=null,ho=!1,Co=0,Xd.current=null,r===null||r.return===null){bt=1,No=e,xt=null;break}e:{var a=t,o=r.return,s=r,l=e;if(e=Lt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=fp(o);if(m!==null){m.flags&=-257,mp(m,o,s,a,e),m.mode&1&&pp(a,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){pp(a,c,e),Zd();break e}l=Error(te(426))}}else if(ot&&s.mode&1){var g=fp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),mp(g,o,s,a,e),Pd(Sa(l,s));break e}}a=l=Sa(l,s),bt!==4&&(bt=2),fo===null?fo=[a]:fo.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var u=Qg(a,l,e);sp(a,u);break e;case 1:s=l;var _=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Oi===null||!Oi.has(v)))){a.flags|=65536,e&=-e,a.lanes|=e;var E=ev(a,s,e);sp(a,E);break e}}a=a.return}while(a!==null)}yv(r)}catch(C){e=C,xt===r&&r!==null&&(xt=r=r.return);continue}break}while(!0)}function xv(){var t=pl.current;return pl.current=hl,t===null?hl:t}function Zd(){(bt===0||bt===3||bt===2)&&(bt=4),Tt===null||!(wn&268435455)&&!(Ul&268435455)||Ti(Tt,Lt)}function gl(t,e){var r=Ke;Ke|=2;var i=xv();(Tt!==t||Lt!==e)&&(ni=null,vn(t,e));do try{R_();break}catch(n){vv(t,n)}while(!0);if(Fd(),Ke=r,pl.current=i,xt!==null)throw Error(te(261));return Tt=null,Lt=0,bt}function R_(){for(;xt!==null;)_v(xt)}function C_(){for(;xt!==null&&!ex();)_v(xt)}function _v(t){var e=Sv(t.alternate,t,lr);t.memoizedProps=t.pendingProps,e===null?yv(t):xt=e,Xd.current=null}function yv(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=S_(r,e),r!==null){r.flags&=32767,xt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,xt=null;return}}else if(r=b_(r,e,lr),r!==null){xt=r;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);bt===0&&(bt=5)}function cn(t,e,r){var i=Ze,n=Sr.transition;try{Sr.transition=null,Ze=1,L_(t,e,r,i)}finally{Sr.transition=n,Ze=i}return null}function L_(t,e,r,i){do ma();while(Ci!==null);if(Ke&6)throw Error(te(327));r=t.finishedWork;var n=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(ux(t,a),t===Tt&&(xt=Tt=null,Lt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||cs||(cs=!0,Mv(Zs,function(){return ma(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Sr.transition,Sr.transition=null;var o=Ze;Ze=1;var s=Ke;Ke|=4,Xd.current=null,E_(t,r),fv(r,t),$x(Ru),Qs=!!Au,Ru=Au=null,t.current=r,w_(r),tx(),Ke=s,Ze=o,Sr.transition=a}else t.current=r;if(cs&&(cs=!1,Ci=t,ml=n),a=t.pendingLanes,a===0&&(Oi=null),nx(r.stateNode),nr(t,mt()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)n=e[r],i(n.value,{componentStack:n.stack,digest:n.digest});if(fl)throw fl=!1,t=qu,qu=null,t;return ml&1&&t.tag!==0&&ma(),a=t.pendingLanes,a&1?t===Yu?mo++:(mo=0,Yu=t):mo=0,$i(),null}function ma(){if(Ci!==null){var t=Qm(ml),e=Sr.transition,r=Ze;try{if(Sr.transition=null,Ze=16>t?16:t,Ci===null)var i=!1;else{if(t=Ci,Ci=null,ml=0,Ke&6)throw Error(te(331));var n=Ke;for(Ke|=4,me=t.current;me!==null;){var a=me,o=a.child;if(me.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(me=c;me!==null;){var d=me;switch(d.tag){case 0:case 11:case 15:po(8,d,a)}var h=d.child;if(h!==null)h.return=d,me=h;else for(;me!==null;){d=me;var p=d.sibling,m=d.return;if(dv(d),d===c){me=null;break}if(p!==null){p.return=m,me=p;break}me=m}}}var x=a.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}me=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,me=o;else e:for(;me!==null;){if(a=me,a.flags&2048)switch(a.tag){case 0:case 11:case 15:po(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,me=u;break e}me=a.return}}var _=t.current;for(me=_;me!==null;){o=me;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,me=v;else e:for(o=_;me!==null;){if(s=me,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Dl(9,s)}}catch(C){ht(s,s.return,C)}if(s===o){me=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,me=E;break e}me=s.return}}if(Ke=n,$i(),qr&&typeof qr.onPostCommitFiberRoot=="function")try{qr.onPostCommitFiberRoot(Tl,t)}catch{}i=!0}return i}finally{Ze=r,Sr.transition=e}}return!1}function Rp(t,e,r){e=Sa(r,e),e=Qg(t,e,1),t=ki(t,e,1),e=Vt(),t!==null&&(Io(t,1,e),nr(t,e))}function ht(t,e,r){if(t.tag===3)Rp(t,t,r);else for(;e!==null;){if(e.tag===3){Rp(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=Sa(r,t),t=ev(e,t,1),e=ki(e,t,1),t=Vt(),e!==null&&(Io(e,1,t),nr(e,t));break}}e=e.return}}function P_(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&r,Tt===t&&(Lt&r)===r&&(bt===4||bt===3&&(Lt&130023424)===Lt&&500>mt()-Yd?vn(t,0):qd|=r),nr(t,e)}function bv(t,e){e===0&&(t.mode&1?(e=Qo,Qo<<=1,!(Qo&130023424)&&(Qo=4194304)):e=1);var r=Vt();t=pi(t,e),t!==null&&(Io(t,e,r),nr(t,r))}function N_(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),bv(t,r)}function F_(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(r=n.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),bv(t,r)}var Sv;Sv=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||rr.current)tr=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return tr=!1,y_(t,e,r);tr=!!(t.flags&131072)}else tr=!1,ot&&e.flags&1048576&&wg(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Gs(t,e),t=e.pendingProps;var n=xa(e,Bt.current);fa(e,r),n=jd(null,e,i,t,n,r);var a=Hd();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ir(i)?(a=!0,nl(e)):a=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Id(e),n.updater=Fl,e.stateNode=n,n._reactInternals=e,ku(e,i,t,r),e=Bu(null,e,i,!0,a,r)):(e.tag=0,ot&&a&&Cd(e),Gt(null,e,n,r),e=e.child),e;case 16:i=e.elementType;e:{switch(Gs(t,e),t=e.pendingProps,n=i._init,i=n(i._payload),e.type=i,n=e.tag=U_(i),t=Pr(i,t),n){case 0:e=zu(null,e,i,t,r);break e;case 1:e=xp(null,e,i,t,r);break e;case 11:e=gp(null,e,i,t,r);break e;case 14:e=vp(null,e,i,Pr(i.type,t),r);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Pr(i,n),zu(t,e,i,n,r);case 1:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Pr(i,n),xp(t,e,i,n,r);case 3:e:{if(nv(e),t===null)throw Error(te(387));i=e.pendingProps,a=e.memoizedState,n=a.element,Pg(t,e),cl(e,i,null,r);var o=e.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){n=Sa(Error(te(423)),e),e=_p(t,e,i,r,n);break e}else if(i!==n){n=Sa(Error(te(424)),e),e=_p(t,e,i,r,n);break e}else for(ur=Ii(e.stateNode.containerInfo.firstChild),dr=e,ot=!0,Fr=null,r=Cg(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(_a(),i===n){e=fi(t,e,r);break e}Gt(t,e,i,r)}e=e.child}return e;case 5:return Ng(e),t===null&&Du(e),i=e.type,n=e.pendingProps,a=t!==null?t.memoizedProps:null,o=n.children,Cu(i,n)?o=null:a!==null&&Cu(i,a)&&(e.flags|=32),iv(t,e),Gt(t,e,o,r),e.child;case 6:return t===null&&Du(e),null;case 13:return av(t,e,r);case 4:return kd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ya(e,null,i,r):Gt(t,e,i,r),e.child;case 11:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Pr(i,n),gp(t,e,i,n,r);case 7:return Gt(t,e,e.pendingProps,r),e.child;case 8:return Gt(t,e,e.pendingProps.children,r),e.child;case 12:return Gt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,n=e.pendingProps,a=e.memoizedProps,o=n.value,tt(sl,i._currentValue),i._currentValue=o,a!==null)if(zr(a.value,o)){if(a.children===n.children&&!rr.current){e=fi(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=ui(-1,r&-r),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),Uu(a.return,r,e),s.lanes|=r;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(te(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),Uu(o,r,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Gt(t,e,n.children,r),e=e.child}return e;case 9:return n=e.type,i=e.pendingProps.children,fa(e,r),n=Er(n),i=i(n),e.flags|=1,Gt(t,e,i,r),e.child;case 14:return i=e.type,n=Pr(i,e.pendingProps),n=Pr(i.type,n),vp(t,e,i,n,r);case 15:return tv(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Pr(i,n),Gs(t,e),e.tag=1,ir(i)?(t=!0,nl(e)):t=!1,fa(e,r),Jg(e,i,n),ku(e,i,n,r),Bu(null,e,i,!0,t,r);case 19:return ov(t,e,r);case 22:return rv(t,e,r)}throw Error(te(156,e.tag))};function Mv(t,e){return Km(t,e)}function D_(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(t,e,r,i){return new D_(t,e,r,i)}function Jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function U_(t){if(typeof t=="function")return Jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vd)return 11;if(t===xd)return 14}return 2}function Bi(t,e){var r=t.alternate;return r===null?(r=br(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Xs(t,e,r,i,n,a){var o=2;if(i=t,typeof t=="function")Jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Kn:return xn(r.children,n,a,e);case gd:o=8,n|=8;break;case su:return t=br(12,r,e,n|2),t.elementType=su,t.lanes=a,t;case lu:return t=br(13,r,e,n),t.elementType=lu,t.lanes=a,t;case cu:return t=br(19,r,e,n),t.elementType=cu,t.lanes=a,t;case Nm:return Il(r,n,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lm:o=10;break e;case Pm:o=9;break e;case vd:o=11;break e;case xd:o=14;break e;case Mi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=br(o,r,e,n),e.elementType=t,e.type=i,e.lanes=a,e}function xn(t,e,r,i){return t=br(7,t,i,e),t.lanes=r,t}function Il(t,e,r,i){return t=br(22,t,i,e),t.elementType=Nm,t.lanes=r,t.stateNode={isHidden:!1},t}function yc(t,e,r){return t=br(6,t,null,e),t.lanes=r,t}function bc(t,e,r){return e=br(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function I_(t,e,r,i,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tc(0),this.expirationTimes=tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tc(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Qd(t,e,r,i,n,a,o,s,l){return t=new I_(t,e,r,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=br(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(a),t}function k_(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function Ev(t){if(!t)return Vi;t=t._reactInternals;e:{if(Cn(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ir(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var r=t.type;if(ir(r))return Mg(t,r,e)}return e}function wv(t,e,r,i,n,a,o,s,l){return t=Qd(r,i,!0,t,n,a,o,s,l),t.context=Ev(null),r=t.current,i=Vt(),n=zi(r),a=ui(i,n),a.callback=e??null,ki(r,a,n),t.current.lanes=n,Io(t,n,i),nr(t,i),t}function kl(t,e,r,i){var n=e.current,a=Vt(),o=zi(n);return r=Ev(r),e.context===null?e.context=r:e.pendingContext=r,e=ui(a,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(n,e,o),t!==null&&(Or(t,n,o,a),Bs(t,n,o)),o}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function eh(t,e){Cp(t,e),(t=t.alternate)&&Cp(t,e)}function O_(){return null}var Tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function th(t){this._internalRoot=t}Ol.prototype.render=th.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));kl(t,e,null,null)};Ol.prototype.unmount=th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tn(function(){kl(null,t,null,null)}),e[hi]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=rg();t={blockedOn:null,target:t,priority:e};for(var r=0;r<wi.length&&e!==0&&e<wi[r].priority;r++);wi.splice(r,0,t),r===0&&ng(t)}};function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lp(){}function z_(t,e,r,i,n){if(n){if(typeof i=="function"){var a=i;i=function(){var c=vl(o);a.call(c)}}var o=wv(e,i,t,0,null,!1,!1,"",Lp);return t._reactRootContainer=o,t[hi]=o.current,Eo(t.nodeType===8?t.parentNode:t),Tn(),o}for(;n=t.lastChild;)t.removeChild(n);if(typeof i=="function"){var s=i;i=function(){var c=vl(l);s.call(c)}}var l=Qd(t,0,!1,null,null,!1,!1,"",Lp);return t._reactRootContainer=l,t[hi]=l.current,Eo(t.nodeType===8?t.parentNode:t),Tn(function(){kl(e,l,r,i)}),l}function Bl(t,e,r,i,n){var a=r._reactRootContainer;if(a){var o=a;if(typeof n=="function"){var s=n;n=function(){var l=vl(o);s.call(l)}}kl(e,o,t,n)}else o=z_(r,e,t,n,i);return vl(o)}eg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Qa(e.pendingLanes);r!==0&&(bd(e,r|1),nr(e,mt()),!(Ke&6)&&(Ma=mt()+500,$i()))}break;case 13:Tn(function(){var i=pi(t,1);if(i!==null){var n=Vt();Or(i,t,1,n)}}),eh(t,1)}};Sd=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var r=Vt();Or(e,t,134217728,r)}eh(t,134217728)}};tg=function(t){if(t.tag===13){var e=zi(t),r=pi(t,e);if(r!==null){var i=Vt();Or(r,t,e,i)}eh(t,e)}};rg=function(){return Ze};ig=function(t,e){var r=Ze;try{return Ze=t,e()}finally{Ze=r}};_u=function(t,e,r){switch(e){case"input":if(hu(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var n=Ll(i);if(!n)throw Error(te(90));Dm(i),hu(i,n)}}}break;case"textarea":Im(t,r);break;case"select":e=r.value,e!=null&&ua(t,!!r.multiple,e,!1)}};Gm=Kd;Wm=Tn;var B_={usingClientEntryPoint:!1,Events:[Oo,Qn,Ll,jm,Hm,Kd]},Ha={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j_={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||O_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{Tl=us.inject(j_),qr=us}catch{}}pr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B_;pr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(e))throw Error(te(200));return k_(t,e,null,r)};pr.createRoot=function(t,e){if(!rh(t))throw Error(te(299));var r=!1,i="",n=Tv;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=Qd(t,1,!1,null,null,r,!1,i,n),t[hi]=e.current,Eo(t.nodeType===8?t.parentNode:t),new th(e)};pr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=qm(e),t=t===null?null:t.stateNode,t};pr.flushSync=function(t){return Tn(t)};pr.hydrate=function(t,e,r){if(!zl(e))throw Error(te(200));return Bl(null,t,e,!0,r)};pr.hydrateRoot=function(t,e,r){if(!rh(t))throw Error(te(405));var i=r!=null&&r.hydratedSources||null,n=!1,a="",o=Tv;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=wv(e,null,t,1,r??null,n,!1,a,o),t[hi]=e.current,Eo(t),i)for(t=0;t<i.length;t++)r=i[t],n=r._getVersion,n=n(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,n]:e.mutableSourceEagerHydrationData.push(r,n);return new Ol(e)};pr.render=function(t,e,r){if(!zl(e))throw Error(te(200));return Bl(null,t,e,!1,r)};pr.unmountComponentAtNode=function(t){if(!zl(t))throw Error(te(40));return t._reactRootContainer?(Tn(function(){Bl(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};pr.unstable_batchedUpdates=Kd;pr.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!zl(r))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Bl(t,e,r,!1,i)};pr.version="18.3.1-next-f1338f8080-20240426";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(t){console.error(t)}}Av(),Tm.exports=pr;var H_=Tm.exports,Pp=H_;au.createRoot=Pp.createRoot,au.hydrateRoot=Pp.hydrateRoot;/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const ih="162",G_=0,Np=1,W_=2,Rv=1,V_=2,ii=3,Xi=0,ar=1,Dr=2,ji=0,_n=1,Fp=2,Dp=3,Up=4,X_=5,hn=100,q_=101,Y_=102,Ip=103,kp=104,K_=200,$_=201,Z_=202,J_=203,Zu=204,Ju=205,Q_=206,ey=207,ty=208,ry=209,iy=210,ny=211,ay=212,oy=213,sy=214,ly=0,cy=1,uy=2,xl=3,dy=4,hy=5,py=6,fy=7,nh=0,my=1,gy=2,Hi=0,vy=1,xy=2,_y=3,yy=4,by=5,Sy=6,My=7,Cv=300,Ea=301,wa=302,Qu=303,ed=304,jl=306,td=1e3,Ur=1001,rd=1002,Wt=1003,Op=1004,Ga=1005,Zt=1006,Sc=1007,Li=1008,Gi=1009,Ey=1010,wy=1011,ah=1012,Lv=1013,Pi=1014,oi=1015,Fo=1016,Pv=1017,Nv=1018,yn=1020,Ty=1021,Ir=1023,Ay=1024,Ry=1025,bn=1026,Ta=1027,Cy=1028,Fv=1029,Ly=1030,Dv=1031,Uv=1033,Mc=33776,Ec=33777,wc=33778,Tc=33779,zp=35840,Bp=35841,jp=35842,Hp=35843,Iv=36196,Gp=37492,Wp=37496,Vp=37808,Xp=37809,qp=37810,Yp=37811,Kp=37812,$p=37813,Zp=37814,Jp=37815,Qp=37816,ef=37817,tf=37818,rf=37819,nf=37820,af=37821,Ac=36492,of=36494,sf=36495,Py=36283,lf=36284,cf=36285,uf=36286,Ny=3200,Fy=3201,kv=0,Dy=1,Ai="",Gr="srgb",Zi="srgb-linear",oh="display-p3",Hl="display-p3-linear",_l="linear",it="srgb",yl="rec709",bl="p3",Pn=7680,df=519,Uy=512,Iy=513,ky=514,Ov=515,Oy=516,zy=517,By=518,jy=519,hf=35044,pf="300 es",id=1035,ci=2e3,Sl=2001;class Pa{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(r)===-1&&i[e].push(r)}hasEventListener(e,r){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(r)!==-1}removeEventListener(e,r){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,nd=180/Math.PI;function Bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[r&63|128]+It[r>>8&255]+"-"+It[r>>16&255]+It[r>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Qt(t,e,r){return Math.max(e,Math.min(r,t))}function Hy(t,e){return(t%e+e)%e}function Cc(t,e,r){return(1-r)*t+r*e}function ff(t){return(t&t-1)===0&&t!==0}function ad(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Wa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,r=0){We.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,i=this.y,n=e.elements;return this.x=n[0]*r+n[3]*i+n[6],this.y=n[1]*r+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y;return r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const i=Math.cos(r),n=Math.sin(r),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*n+e.x,this.y=a*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,r,i,n,a,o,s,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,o,s,l,c)}set(e,r,i,n,a,o,s,l,c){const d=this.elements;return d[0]=e,d[1]=n,d[2]=s,d[3]=r,d[4]=a,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(e,r,i){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],d=i[4],h=i[7],p=i[2],m=i[5],x=i[8],y=n[0],g=n[3],u=n[6],_=n[1],v=n[4],E=n[7],C=n[2],T=n[5],w=n[8];return a[0]=o*y+s*_+l*C,a[3]=o*g+s*v+l*T,a[6]=o*u+s*E+l*w,a[1]=c*y+d*_+h*C,a[4]=c*g+d*v+h*T,a[7]=c*u+d*E+h*w,a[2]=p*y+m*_+x*C,a[5]=p*g+m*v+x*T,a[8]=p*u+m*E+x*w,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8];return r*o*d-r*s*c-i*a*d+i*s*l+n*a*c-n*o*l}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],h=d*o-s*c,p=s*l-d*a,m=c*a-o*l,x=r*h+i*p+n*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(n*c-d*i)*y,e[2]=(s*i-n*o)*y,e[3]=p*y,e[4]=(d*r-n*l)*y,e[5]=(n*a-s*r)*y,e[6]=m*y,e[7]=(i*l-c*r)*y,e[8]=(o*r-i*a)*y,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,i,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+r,0,0,1),this}scale(e,r){return this.premultiply(Lc.makeScale(e,r)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,r){return this.premultiply(Lc.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<9;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<9;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new Fe;function zv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Do(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Gy(){const t=Do("canvas");return t.style.display="block",t}const mf={};function Wy(t){t in mf||(mf[t]=!0,console.warn(t))}const gf=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vf=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ds={[Zi]:{transfer:_l,primaries:yl,toReference:t=>t,fromReference:t=>t},[Gr]:{transfer:it,primaries:yl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hl]:{transfer:_l,primaries:bl,toReference:t=>t.applyMatrix3(vf),fromReference:t=>t.applyMatrix3(gf)},[oh]:{transfer:it,primaries:bl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(vf),fromReference:t=>t.applyMatrix3(gf).convertLinearToSRGB()}},Vy=new Set([Zi,Hl]),Je={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Vy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,r){if(this.enabled===!1||e===r||!e||!r)return t;const i=ds[e].toReference,n=ds[r].fromReference;return n(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ds[t].primaries},getTransfer:function(t){return t===Ai?_l:ds[t].transfer}};function ga(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Pc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Nn;class Bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Nn===void 0&&(Nn=Do("canvas")),Nn.width=e.width,Nn.height=e.height;const i=Nn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=Nn}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=Do("canvas");r.width=e.width,r.height=e.height;const i=r.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=ga(a[o]/255)*255;return i.putImageData(n,0,0),r}else if(e.data){const r=e.data.slice(0);for(let i=0;i<r.length;i++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[i]=Math.floor(ga(r[i]/255)*255):r[i]=ga(r[i]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xy=0;class jv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(Nc(n[o].image)):a.push(Nc(n[o]))}else a=Nc(n);i.url=a}return r||(e.images[this.uuid]=i),i}}function Nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Bv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qy=0;class Xt extends Pa{constructor(e=Xt.DEFAULT_IMAGE,r=Xt.DEFAULT_MAPPING,i=Ur,n=Ur,a=Zt,o=Li,s=Ir,l=Gi,c=Xt.DEFAULT_ANISOTROPY,d=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Bo(),this.name="",this.source=new jv(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case td:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case td:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Cv;Xt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,r=0,i=0,n=1){st.prototype.isVector4=!0,this.x=e,this.y=r,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,i,n){return this.x=e,this.y=r,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*r+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*r+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*r+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*r+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,i,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],d=o[1],h=o[5],p=o[9],m=o[2],x=o[6],y=o[10];if(Math.abs(l-d)<.01&&Math.abs(c-m)<.01&&Math.abs(p-x)<.01){if(Math.abs(l+d)<.1&&Math.abs(c+m)<.1&&Math.abs(p+x)<.1&&Math.abs(s+h+y-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const u=(s+1)/2,_=(h+1)/2,v=(y+1)/2,E=(l+d)/4,C=(c+m)/4,T=(p+x)/4;return u>_&&u>v?u<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(u),n=E/i,a=C/i):_>v?_<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(_),i=E/n,a=T/n):v<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(v),i=C/a,n=T/a),this.set(i,n,a,r),this}let g=Math.sqrt((x-p)*(x-p)+(c-m)*(c-m)+(d-l)*(d-l));return Math.abs(g)<.001&&(g=1),this.x=(x-p)/g,this.y=(c-m)/g,this.z=(d-l)/g,this.w=Math.acos((s+h+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this.w=Math.max(e.w,Math.min(r.w,this.w)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this.w=Math.max(e,Math.min(r,this.w)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this.w=e.w+(r.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yy extends Pa{constructor(e=1,r=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=1,this.scissor=new st(0,0,e,r),this.scissorTest=!1,this.viewport=new st(0,0,e,r);const n={width:e,height:r,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new Xt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,r,i=1){if(this.width!==e||this.height!==r||this.depth!==i){this.width=e,this.height=r,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=r,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const r=Object.assign({},e.texture.image);return this.texture.source=new jv(r),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Yy{constructor(e=1,r=1,i={}){super(e,r,i),this.isWebGLRenderTarget=!0}}class Hv extends Xt{constructor(e=null,r=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ky extends Xt{constructor(e=null,r=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=0,r=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=i,this._w=n}static slerpFlat(e,r,i,n,a,o,s){let l=i[n+0],c=i[n+1],d=i[n+2],h=i[n+3];const p=a[o+0],m=a[o+1],x=a[o+2],y=a[o+3];if(s===0){e[r+0]=l,e[r+1]=c,e[r+2]=d,e[r+3]=h;return}if(s===1){e[r+0]=p,e[r+1]=m,e[r+2]=x,e[r+3]=y;return}if(h!==y||l!==p||c!==m||d!==x){let g=1-s;const u=l*p+c*m+d*x+h*y,_=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,u*_);g=Math.sin(g*T)/C,s=Math.sin(s*T)/C}const E=s*_;if(l=l*g+p*E,c=c*g+m*E,d=d*g+x*E,h=h*g+y*E,g===1-s){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[r]=l,e[r+1]=c,e[r+2]=d,e[r+3]=h}static multiplyQuaternionsFlat(e,r,i,n,a,o){const s=i[n],l=i[n+1],c=i[n+2],d=i[n+3],h=a[o],p=a[o+1],m=a[o+2],x=a[o+3];return e[r]=s*x+d*h+l*m-c*p,e[r+1]=l*x+d*p+c*h-s*m,e[r+2]=c*x+d*m+s*p-l*h,e[r+3]=d*x-s*h-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,i,n){return this._x=e,this._y=r,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const i=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),d=s(n/2),h=s(a/2),p=l(i/2),m=l(n/2),x=l(a/2);switch(o){case"XYZ":this._x=p*d*h+c*m*x,this._y=c*m*h-p*d*x,this._z=c*d*x+p*m*h,this._w=c*d*h-p*m*x;break;case"YXZ":this._x=p*d*h+c*m*x,this._y=c*m*h-p*d*x,this._z=c*d*x-p*m*h,this._w=c*d*h+p*m*x;break;case"ZXY":this._x=p*d*h-c*m*x,this._y=c*m*h+p*d*x,this._z=c*d*x+p*m*h,this._w=c*d*h-p*m*x;break;case"ZYX":this._x=p*d*h-c*m*x,this._y=c*m*h+p*d*x,this._z=c*d*x-p*m*h,this._w=c*d*h+p*m*x;break;case"YZX":this._x=p*d*h+c*m*x,this._y=c*m*h+p*d*x,this._z=c*d*x-p*m*h,this._w=c*d*h-p*m*x;break;case"XZY":this._x=p*d*h-c*m*x,this._y=c*m*h-p*d*x,this._z=c*d*x+p*m*h,this._w=c*d*h+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const i=r/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,i=r[0],n=r[4],a=r[8],o=r[1],s=r[5],l=r[9],c=r[2],d=r[6],h=r[10],p=i+s+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(o-n)*m}else if(i>s&&i>h){const m=2*Math.sqrt(1+i-s-h);this._w=(d-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(a+c)/m}else if(s>h){const m=2*Math.sqrt(1+s-i-h);this._w=(a-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-s);this._w=(o-n)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let i=e.dot(r)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,r){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,r/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const i=e._x,n=e._y,a=e._z,o=e._w,s=r._x,l=r._y,c=r._z,d=r._w;return this._x=i*d+o*s+n*c-a*l,this._y=n*d+o*l+a*s-i*c,this._z=a*d+o*c+i*l-n*s,this._w=o*d-i*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-r;return this._w=m*o+r*this._w,this._x=m*i+r*this._x,this._y=m*n+r*this._y,this._z=m*a+r*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,s),h=Math.sin((1-r)*d)/c,p=Math.sin(r*d)/c;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=n*h+this._y*p,this._z=a*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,r,i){return this.copy(e).slerp(r,i)}random(){const e=2*Math.PI*Math.random(),r=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(r),a*Math.cos(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,r=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=r,this.z=i}set(e,r,i){return i===void 0&&(i=this.z),this.x=e,this.y=r,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(xf.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(xf.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[3]*i+a[6]*n,this.y=a[1]*r+a[4]*i+a[7]*n,this.z=a[2]*r+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=e.elements,o=1/(a[3]*r+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*r+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*r+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*r+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(e){const r=this.x,i=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*i),d=2*(s*r-a*n),h=2*(a*i-o*r);return this.x=r+l*c+o*h-s*d,this.y=i+l*d+s*c-a*h,this.z=n+l*h+a*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[4]*i+a[8]*n,this.y=a[1]*r+a[5]*i+a[9]*n,this.z=a[2]*r+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const i=e.x,n=e.y,a=e.z,o=r.x,s=r.y,l=r.z;return this.x=n*l-a*s,this.y=a*o-i*l,this.z=i*s-n*o,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const i=e.dot(this)/r;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return r*r+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,i){const n=Math.sin(r)*e;return this.x=n*Math.sin(i),this.y=Math.cos(r)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,i){return this.x=e*Math.sin(r),this.y=i,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=i,this.z=n,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(e),this.y=r,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new U,xf=new jo;class Ho{constructor(e=new U(1/0,1/0,1/0),r=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r+=3)this.expandByPoint(Rr.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,i=e.count;r<i;r++)this.expandByPoint(Rr.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const i=Rr.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(r===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Rr):Rr.fromBufferAttribute(a,o),Rr.applyMatrix4(e.matrixWorld),this.expandByPoint(Rr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hs.copy(i.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],r);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rr),Rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,i;return e.normal.x>0?(r=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),r<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),ps.subVectors(this.max,Va),Fn.subVectors(e.a,Va),Dn.subVectors(e.b,Va),Un.subVectors(e.c,Va),vi.subVectors(Dn,Fn),xi.subVectors(Un,Dn),tn.subVectors(Fn,Un);let r=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-tn.z,tn.y,vi.z,0,-vi.x,xi.z,0,-xi.x,tn.z,0,-tn.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-tn.y,tn.x,0];return!Dc(r,Fn,Dn,Un,ps)||(r=[1,0,0,0,1,0,0,0,1],!Dc(r,Fn,Dn,Un,ps))?!1:(fs.crossVectors(vi,xi),r=[fs.x,fs.y,fs.z],Dc(r,Fn,Dn,Un,ps))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jr=[new U,new U,new U,new U,new U,new U,new U,new U],Rr=new U,hs=new Ho,Fn=new U,Dn=new U,Un=new U,vi=new U,xi=new U,tn=new U,Va=new U,ps=new U,fs=new U,rn=new U;function Dc(t,e,r,i,n){for(let a=0,o=t.length-3;a<=o;a+=3){rn.fromArray(t,a);const s=n.x*Math.abs(rn.x)+n.y*Math.abs(rn.y)+n.z*Math.abs(rn.z),l=e.dot(rn),c=r.dot(rn),d=i.dot(rn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>s)return!1}return!0}const $y=new Ho,Xa=new U,Uc=new U;class Gl{constructor(e=new U,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const i=this.center;r!==void 0?i.copy(r):$y.setFromPoints(e).getCenter(i);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const i=this.center.distanceToSquared(e);return r.copy(e),i>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xa.subVectors(e,this.center);const r=Xa.lengthSq();if(r>this.radius*this.radius){const i=Math.sqrt(r),n=(i-this.radius)*.5;this.center.addScaledVector(Xa,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xa.copy(e.center).add(Uc)),this.expandByPoint(Xa.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qr=new U,Ic=new U,ms=new U,_i=new U,kc=new U,gs=new U,Oc=new U;class Gv{constructor(e=new U,r=new U(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qr)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const i=r.dot(this.direction);return i<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=Qr.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(Qr.copy(this.origin).addScaledVector(this.direction,r),Qr.distanceToSquared(e))}distanceSqToSegment(e,r,i,n){Ic.copy(e).add(r).multiplyScalar(.5),ms.copy(r).sub(e).normalize(),_i.copy(this.origin).sub(Ic);const a=e.distanceTo(r)*.5,o=-this.direction.dot(ms),s=_i.dot(this.direction),l=-_i.dot(ms),c=_i.lengthSq(),d=Math.abs(1-o*o);let h,p,m,x;if(d>0)if(h=o*l-s,p=o*s-l,x=a*d,h>=0)if(p>=-x)if(p<=x){const y=1/d;h*=y,p*=y,m=h*(h+o*p+2*s)+p*(o*h+p+2*l)+c}else p=a,h=Math.max(0,-(o*p+s)),m=-h*h+p*(p+2*l)+c;else p=-a,h=Math.max(0,-(o*p+s)),m=-h*h+p*(p+2*l)+c;else p<=-x?(h=Math.max(0,-(-o*a+s)),p=h>0?-a:Math.min(Math.max(-a,-l),a),m=-h*h+p*(p+2*l)+c):p<=x?(h=0,p=Math.min(Math.max(-a,-l),a),m=p*(p+2*l)+c):(h=Math.max(0,-(o*a+s)),p=h>0?a:Math.min(Math.max(-a,-l),a),m=-h*h+p*(p+2*l)+c);else p=o>0?-a:a,h=Math.max(0,-(o*p+s)),m=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ic).addScaledVector(ms,p),m}intersectSphere(e,r){Qr.subVectors(e.center,this.origin);const i=Qr.dot(this.direction),n=Qr.dot(Qr)-i*i,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,r):this.at(s,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/r;return i>=0?i:null}intersectPlane(e,r){const i=this.distanceToPlane(e);return i===null?null:this.at(i,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let i,n,a,o,s,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,n=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,n=(e.min.x-p.x)*c),d>=0?(a=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(a=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),h>=0?(s=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(s=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||s>n)||((s>i||i!==i)&&(i=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,r)}intersectsBox(e){return this.intersectBox(e,Qr)!==null}intersectTriangle(e,r,i,n,a){kc.subVectors(r,e),gs.subVectors(i,e),Oc.crossVectors(kc,gs);let o=this.direction.dot(Oc),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=s*this.direction.dot(gs.crossVectors(_i,gs));if(l<0)return null;const c=s*this.direction.dot(kc.cross(_i));if(c<0||l+c>o)return null;const d=-s*_i.dot(Oc);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,r,i,n,a,o,s,l,c,d,h,p,m,x,y,g){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,o,s,l,c,d,h,p,m,x,y,g)}set(e,r,i,n,a,o,s,l,c,d,h,p,m,x,y,g){const u=this.elements;return u[0]=e,u[4]=r,u[8]=i,u[12]=n,u[1]=a,u[5]=o,u[9]=s,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=m,u[7]=x,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(e){const r=this.elements,i=e.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,i){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,r,i){return this.set(e.x,r.x,i.x,0,e.y,r.y,i.y,0,e.z,r.z,i.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,i=e.elements,n=1/In.setFromMatrixColumn(e,0).length(),a=1/In.setFromMatrixColumn(e,1).length(),o=1/In.setFromMatrixColumn(e,2).length();return r[0]=i[0]*n,r[1]=i[1]*n,r[2]=i[2]*n,r[3]=0,r[4]=i[4]*a,r[5]=i[5]*a,r[6]=i[6]*a,r[7]=0,r[8]=i[8]*o,r[9]=i[9]*o,r[10]=i[10]*o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,i=e.x,n=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(n),c=Math.sin(n),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const p=o*d,m=o*h,x=s*d,y=s*h;r[0]=l*d,r[4]=-l*h,r[8]=c,r[1]=m+x*c,r[5]=p-y*c,r[9]=-s*l,r[2]=y-p*c,r[6]=x+m*c,r[10]=o*l}else if(e.order==="YXZ"){const p=l*d,m=l*h,x=c*d,y=c*h;r[0]=p+y*s,r[4]=x*s-m,r[8]=o*c,r[1]=o*h,r[5]=o*d,r[9]=-s,r[2]=m*s-x,r[6]=y+p*s,r[10]=o*l}else if(e.order==="ZXY"){const p=l*d,m=l*h,x=c*d,y=c*h;r[0]=p-y*s,r[4]=-o*h,r[8]=x+m*s,r[1]=m+x*s,r[5]=o*d,r[9]=y-p*s,r[2]=-o*c,r[6]=s,r[10]=o*l}else if(e.order==="ZYX"){const p=o*d,m=o*h,x=s*d,y=s*h;r[0]=l*d,r[4]=x*c-m,r[8]=p*c+y,r[1]=l*h,r[5]=y*c+p,r[9]=m*c-x,r[2]=-c,r[6]=s*l,r[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,x=s*l,y=s*c;r[0]=l*d,r[4]=y-p*h,r[8]=x*h+m,r[1]=h,r[5]=o*d,r[9]=-s*d,r[2]=-c*d,r[6]=m*h+x,r[10]=p-y*h}else if(e.order==="XZY"){const p=o*l,m=o*c,x=s*l,y=s*c;r[0]=l*d,r[4]=-h,r[8]=c*d,r[1]=p*h+y,r[5]=o*d,r[9]=m*h-x,r[2]=x*h-m,r[6]=s*d,r[10]=y*h+p}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zy,e,Jy)}lookAt(e,r,i){const n=this.elements;return or.subVectors(e,r),or.lengthSq()===0&&(or.z=1),or.normalize(),yi.crossVectors(i,or),yi.lengthSq()===0&&(Math.abs(i.z)===1?or.x+=1e-4:or.z+=1e-4,or.normalize(),yi.crossVectors(i,or)),yi.normalize(),vs.crossVectors(or,yi),n[0]=yi.x,n[4]=vs.x,n[8]=or.x,n[1]=yi.y,n[5]=vs.y,n[9]=or.y,n[2]=yi.z,n[6]=vs.z,n[10]=or.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],d=i[1],h=i[5],p=i[9],m=i[13],x=i[2],y=i[6],g=i[10],u=i[14],_=i[3],v=i[7],E=i[11],C=i[15],T=n[0],w=n[4],P=n[8],q=n[12],b=n[1],R=n[5],J=n[9],ee=n[13],N=n[2],Y=n[6],W=n[10],X=n[14],F=n[3],k=n[7],V=n[11],$=n[15];return a[0]=o*T+s*b+l*N+c*F,a[4]=o*w+s*R+l*Y+c*k,a[8]=o*P+s*J+l*W+c*V,a[12]=o*q+s*ee+l*X+c*$,a[1]=d*T+h*b+p*N+m*F,a[5]=d*w+h*R+p*Y+m*k,a[9]=d*P+h*J+p*W+m*V,a[13]=d*q+h*ee+p*X+m*$,a[2]=x*T+y*b+g*N+u*F,a[6]=x*w+y*R+g*Y+u*k,a[10]=x*P+y*J+g*W+u*V,a[14]=x*q+y*ee+g*X+u*$,a[3]=_*T+v*b+E*N+C*F,a[7]=_*w+v*R+E*Y+C*k,a[11]=_*P+v*J+E*W+C*V,a[15]=_*q+v*ee+E*X+C*$,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],d=e[2],h=e[6],p=e[10],m=e[14],x=e[3],y=e[7],g=e[11],u=e[15];return x*(+a*l*h-n*c*h-a*s*p+i*c*p+n*s*m-i*l*m)+y*(+r*l*m-r*c*p+a*o*p-n*o*m+n*c*d-a*l*d)+g*(+r*c*h-r*s*m-a*o*h+i*o*m+a*s*d-i*c*d)+u*(-n*s*d-r*l*h+r*s*p+n*o*h-i*o*p+i*l*d)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=r,n[14]=i),this}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],h=e[9],p=e[10],m=e[11],x=e[12],y=e[13],g=e[14],u=e[15],_=h*g*c-y*p*c+y*l*m-s*g*m-h*l*u+s*p*u,v=x*p*c-d*g*c-x*l*m+o*g*m+d*l*u-o*p*u,E=d*y*c-x*h*c+x*s*m-o*y*m-d*s*u+o*h*u,C=x*h*l-d*y*l-x*s*p+o*y*p+d*s*g-o*h*g,T=r*_+i*v+n*E+a*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=_*w,e[1]=(y*p*a-h*g*a-y*n*m+i*g*m+h*n*u-i*p*u)*w,e[2]=(s*g*a-y*l*a+y*n*c-i*g*c-s*n*u+i*l*u)*w,e[3]=(h*l*a-s*p*a-h*n*c+i*p*c+s*n*m-i*l*m)*w,e[4]=v*w,e[5]=(d*g*a-x*p*a+x*n*m-r*g*m-d*n*u+r*p*u)*w,e[6]=(x*l*a-o*g*a-x*n*c+r*g*c+o*n*u-r*l*u)*w,e[7]=(o*p*a-d*l*a+d*n*c-r*p*c-o*n*m+r*l*m)*w,e[8]=E*w,e[9]=(x*h*a-d*y*a-x*i*m+r*y*m+d*i*u-r*h*u)*w,e[10]=(o*y*a-x*s*a+x*i*c-r*y*c-o*i*u+r*s*u)*w,e[11]=(d*s*a-o*h*a-d*i*c+r*h*c+o*i*m-r*s*m)*w,e[12]=C*w,e[13]=(d*y*n-x*h*n+x*i*p-r*y*p-d*i*g+r*h*g)*w,e[14]=(x*s*n-o*y*n-x*i*l+r*y*l+o*i*g-r*s*g)*w,e[15]=(o*h*n-d*s*n+d*i*l-r*h*l-o*i*p+r*s*p)*w,this}scale(e){const r=this.elements,i=e.x,n=e.y,a=e.z;return r[0]*=i,r[4]*=n,r[8]*=a,r[1]*=i,r[5]*=n,r[9]*=a,r[2]*=i,r[6]*=n,r[10]*=a,r[3]*=i,r[7]*=n,r[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,i,n))}makeTranslation(e,r,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const i=Math.cos(r),n=Math.sin(r),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,d=a*s;return this.set(c*o+i,c*s-n*l,c*l+n*s,0,c*s+n*l,d*s+i,d*l-n*o,0,c*l-n*s,d*l+n*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,r,i){return this.set(e,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,r,i,n,a,o){return this.set(1,i,a,0,e,1,o,0,r,n,1,0,0,0,0,1),this}compose(e,r,i){const n=this.elements,a=r._x,o=r._y,s=r._z,l=r._w,c=a+a,d=o+o,h=s+s,p=a*c,m=a*d,x=a*h,y=o*d,g=o*h,u=s*h,_=l*c,v=l*d,E=l*h,C=i.x,T=i.y,w=i.z;return n[0]=(1-(y+u))*C,n[1]=(m+E)*C,n[2]=(x-v)*C,n[3]=0,n[4]=(m-E)*T,n[5]=(1-(p+u))*T,n[6]=(g+_)*T,n[7]=0,n[8]=(x+v)*w,n[9]=(g-_)*w,n[10]=(1-(p+y))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,r,i){const n=this.elements;let a=In.set(n[0],n[1],n[2]).length();const o=In.set(n[4],n[5],n[6]).length(),s=In.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Cr.copy(this);const l=1/a,c=1/o,d=1/s;return Cr.elements[0]*=l,Cr.elements[1]*=l,Cr.elements[2]*=l,Cr.elements[4]*=c,Cr.elements[5]*=c,Cr.elements[6]*=c,Cr.elements[8]*=d,Cr.elements[9]*=d,Cr.elements[10]*=d,r.setFromRotationMatrix(Cr),i.x=a,i.y=o,i.z=s,this}makePerspective(e,r,i,n,a,o,s=ci){const l=this.elements,c=2*a/(r-e),d=2*a/(i-n),h=(r+e)/(r-e),p=(i+n)/(i-n);let m,x;if(s===ci)m=-(o+a)/(o-a),x=-2*o*a/(o-a);else if(s===Sl)m=-o/(o-a),x=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,r,i,n,a,o,s=ci){const l=this.elements,c=1/(r-e),d=1/(i-n),h=1/(o-a),p=(r+e)*c,m=(i+n)*d;let x,y;if(s===ci)x=(o+a)*h,y=-2*h;else if(s===Sl)x=a*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<16;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<16;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e[r+9]=i[9],e[r+10]=i[10],e[r+11]=i[11],e[r+12]=i[12],e[r+13]=i[13],e[r+14]=i[14],e[r+15]=i[15],e}}const In=new U,Cr=new ut,Zy=new U(0,0,0),Jy=new U(1,1,1),yi=new U,vs=new U,or=new U,_f=new ut,yf=new jo;class $r{constructor(e=0,r=0,i=0,n=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,i,n=this._order){return this._x=e,this._y=r,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,i=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],d=n[9],h=n[2],p=n[6],m=n[10];switch(r){case"XYZ":this._y=Math.asin(Qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,i){return _f.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_f,r,i)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return yf.setFromEuler(this),this.setFromQuaternion(yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";let Wv=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qy=0;const bf=new U,kn=new jo,ei=new ut,xs=new U,qa=new U,e1=new U,t1=new jo,Sf=new U(1,0,0),Mf=new U(0,1,0),Ef=new U(0,0,1),r1={type:"added"},i1={type:"removed"},zc={type:"childadded",child:null},Bc={type:"childremoved",child:null};class qt extends Pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new U,r=new $r,i=new jo,n=new U(1,1,1);function a(){i.setFromEuler(r,!1)}function o(){r.setFromQuaternion(i,void 0,!1)}r._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ut},normalMatrix:{value:new Fe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return kn.setFromAxisAngle(e,r),this.quaternion.multiply(kn),this}rotateOnWorldAxis(e,r){return kn.setFromAxisAngle(e,r),this.quaternion.premultiply(kn),this}rotateX(e){return this.rotateOnAxis(Sf,e)}rotateY(e){return this.rotateOnAxis(Mf,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,r){return bf.copy(e).applyQuaternion(this.quaternion),this.position.add(bf.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(Sf,e)}translateY(e){return this.translateOnAxis(Mf,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,r,i){e.isVector3?xs.copy(e):xs.set(e,r,i);const n=this.parent;this.updateWorldMatrix(!0,!1),qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(qa,xs,this.up):ei.lookAt(xs,qa,this.up),this.quaternion.setFromRotationMatrix(ei),n&&(ei.extractRotation(n.matrixWorld),kn.setFromRotationMatrix(ei),this.quaternion.premultiply(kn.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(r1),zc.child=e,this.dispatchEvent(zc),zc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(i1),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,r);if(a!==void 0)return a}}getObjectsByProperty(e,r,i=[]){this[e]===r&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,r,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,e,e1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,t1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let i=0,n=r.length;i<n;i++){const a=r[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,r){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),r===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const s=n[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const r=e===void 0||typeof e=="string",i={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(r){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=n,i;function o(s){const l=[];for(const c in s){const d=s[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}qt.DEFAULT_UP=new U(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lr=new U,ti=new U,jc=new U,ri=new U,On=new U,zn=new U,wf=new U,Hc=new U,Gc=new U,Wc=new U;class Xr{constructor(e=new U,r=new U,i=new U){this.a=e,this.b=r,this.c=i}static getNormal(e,r,i,n){n.subVectors(i,r),Lr.subVectors(e,r),n.cross(Lr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,r,i,n,a){Lr.subVectors(n,r),ti.subVectors(i,r),jc.subVectors(e,r);const o=Lr.dot(Lr),s=Lr.dot(ti),l=Lr.dot(jc),c=ti.dot(ti),d=ti.dot(jc),h=o*c-s*s;if(h===0)return a.set(0,0,0),null;const p=1/h,m=(c*l-s*d)*p,x=(o*d-s*l)*p;return a.set(1-m-x,x,m)}static containsPoint(e,r,i,n){return this.getBarycoord(e,r,i,n,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,r,i,n,a,o,s,l){return this.getBarycoord(e,r,i,n,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(s,ri.z),l)}static isFrontFacing(e,r,i,n){return Lr.subVectors(i,r),ti.subVectors(e,r),Lr.cross(ti).dot(n)<0}set(e,r,i){return this.a.copy(e),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(e,r,i,n){return this.a.copy(e[r]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,r,i,n){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lr.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Lr.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return Xr.getBarycoord(e,this.a,this.b,this.c,r)}getInterpolation(e,r,i,n,a){return Xr.getInterpolation(e,this.a,this.b,this.c,r,i,n,a)}containsPoint(e){return Xr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const i=this.a,n=this.b,a=this.c;let o,s;On.subVectors(n,i),zn.subVectors(a,i),Hc.subVectors(e,i);const l=On.dot(Hc),c=zn.dot(Hc);if(l<=0&&c<=0)return r.copy(i);Gc.subVectors(e,n);const d=On.dot(Gc),h=zn.dot(Gc);if(d>=0&&h<=d)return r.copy(n);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),r.copy(i).addScaledVector(On,o);Wc.subVectors(e,a);const m=On.dot(Wc),x=zn.dot(Wc);if(x>=0&&m<=x)return r.copy(a);const y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return s=c/(c-x),r.copy(i).addScaledVector(zn,s);const g=d*x-m*h;if(g<=0&&h-d>=0&&m-x>=0)return wf.subVectors(a,n),s=(h-d)/(h-d+(m-x)),r.copy(n).addScaledVector(wf,s);const u=1/(g+y+p);return o=y*u,s=p*u,r.copy(i).addScaledVector(On,o).addScaledVector(zn,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Vc(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*6*(2/3-r):t}class Ge{constructor(e,r,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,i)}set(e,r,i){if(r===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,r,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=Gr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,r),this}setRGB(e,r,i,n=Je.workingColorSpace){return this.r=e,this.g=r,this.b=i,Je.toWorkingColorSpace(this,n),this}setHSL(e,r,i,n=Je.workingColorSpace){if(e=Hy(e,1),r=Qt(r,0,1),i=Qt(i,0,1),r===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+r):i+r-i*r,o=2*i-a;this.r=Vc(o,a,e+1/3),this.g=Vc(o,a,e),this.b=Vc(o,a,e-1/3)}return Je.toWorkingColorSpace(this,n),this}setStyle(e,r=Gr){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,r);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,r);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,r);if(o===6)return this.setHex(parseInt(a,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=Gr){const i=Vv[e.toLowerCase()];return i!==void 0?this.setHex(i,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=Pc(e.r),this.g=Pc(e.g),this.b=Pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gr){return Je.fromWorkingColorSpace(kt.copy(this),e),Math.round(Qt(kt.r*255,0,255))*65536+Math.round(Qt(kt.g*255,0,255))*256+Math.round(Qt(kt.b*255,0,255))}getHexString(e=Gr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=Je.workingColorSpace){Je.fromWorkingColorSpace(kt.copy(this),r);const i=kt.r,n=kt.g,a=kt.b,o=Math.max(i,n,a),s=Math.min(i,n,a);let l,c;const d=(s+o)/2;if(s===o)l=0,c=0;else{const h=o-s;switch(c=d<=.5?h/(o+s):h/(2-o-s),o){case i:l=(n-a)/h+(n<a?6:0);break;case n:l=(a-i)/h+2;break;case a:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,r=Je.workingColorSpace){return Je.fromWorkingColorSpace(kt.copy(this),r),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Gr){Je.fromWorkingColorSpace(kt.copy(this),e);const r=kt.r,i=kt.g,n=kt.b;return e!==Gr?`color(${e} ${r.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,r,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+r,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,i){return this.r=e.r+(r.r-e.r)*i,this.g=e.g+(r.g-e.g)*i,this.b=e.b+(r.b-e.b)*i,this}lerpHSL(e,r){this.getHSL(bi),e.getHSL(_s);const i=Cc(bi.h,_s.h,r),n=Cc(bi.s,_s.s,r),a=Cc(bi.l,_s.l,r);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*r+a[3]*i+a[6]*n,this.g=a[1]*r+a[4]*i+a[7]*n,this.b=a[2]*r+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ge;Ge.NAMES=Vv;let n1=0;class Na extends Pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=_n,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zu,this.blendDst=Ju,this.blendEquation=hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pn,this.stencilZFail=Pn,this.stencilZPass=Pn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const i=e[r];if(i===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const n=this[r];if(n===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[r]=i}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_n&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ju&&(i.blendDst=this.blendDst),this.blendEquation!==hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==df&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(r){const a=n(e.textures),o=n(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let i=null;if(r!==null){const n=r.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=r[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oa extends Na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new U,ys=new We;class Mr{constructor(e,r,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=i,this.usage=hf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Wy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,i){e*=this.itemSize,i*=r.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=r.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,i=this.count;r<i;r++)ys.fromBufferAttribute(this,r),ys.applyMatrix3(e),this.setXY(r,ys.x,ys.y);else if(this.itemSize===3)for(let r=0,i=this.count;r<i;r++)vt.fromBufferAttribute(this,r),vt.applyMatrix3(e),this.setXYZ(r,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let r=0,i=this.count;r<i;r++)vt.fromBufferAttribute(this,r),vt.applyMatrix4(e),this.setXYZ(r,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let r=0,i=this.count;r<i;r++)vt.fromBufferAttribute(this,r),vt.applyNormalMatrix(e),this.setXYZ(r,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let r=0,i=this.count;r<i;r++)vt.fromBufferAttribute(this,r),vt.transformDirection(e),this.setXYZ(r,vt.x,vt.y,vt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let i=this.array[e*this.itemSize+r];return this.normalized&&(i=Wa(i,this.array)),i}setComponent(e,r,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+r]=i,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=Wa(r,this.array)),r}setX(e,r){return this.normalized&&(r=$t(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=Wa(r,this.array)),r}setY(e,r){return this.normalized&&(r=$t(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=Wa(r,this.array)),r}setZ(e,r){return this.normalized&&(r=$t(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=Wa(r,this.array)),r}setW(e,r){return this.normalized&&(r=$t(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,i){return e*=this.itemSize,this.normalized&&(r=$t(r,this.array),i=$t(i,this.array)),this.array[e+0]=r,this.array[e+1]=i,this}setXYZ(e,r,i,n){return e*=this.itemSize,this.normalized&&(r=$t(r,this.array),i=$t(i,this.array),n=$t(n,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,r,i,n,a){return e*=this.itemSize,this.normalized&&(r=$t(r,this.array),i=$t(i,this.array),n=$t(n,this.array),a=$t(a,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hf&&(e.usage=this.usage),e}}class Xv extends Mr{constructor(e,r,i){super(new Uint16Array(e),r,i)}}class qv extends Mr{constructor(e,r,i){super(new Uint32Array(e),r,i)}}class zt extends Mr{constructor(e,r,i){super(new Float32Array(e),r,i)}}let a1=0;const xr=new ut,Xc=new qt,Bn=new U,sr=new Ho,Ya=new Ho,Et=new U;class Tr extends Pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?qv:Xv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,i=0){this.groups.push({start:e,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Fe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,r,i){return xr.makeTranslation(e,r,i),this.applyMatrix4(xr),this}scale(e,r,i){return xr.makeScale(e,r,i),this.applyMatrix4(xr),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bn).negate(),this.translate(Bn.x,Bn.y,Bn.z),this}setFromPoints(e){const r=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];r.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new zt(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let i=0,n=r.length;i<n;i++){const a=r[i];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,sr.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,sr.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(sr.min),this.boundingBox.expandByPoint(sr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gl);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(sr.setFromBufferAttribute(e),r)for(let a=0,o=r.length;a<o;a++){const s=r[a];Ya.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(sr.min,Ya.min),sr.expandByPoint(Et),Et.addVectors(sr.max,Ya.max),sr.expandByPoint(Et)):(sr.expandByPoint(Ya.min),sr.expandByPoint(Ya.max))}sr.getCenter(i);let n=0;for(let a=0,o=e.count;a<o;a++)Et.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(Et));if(r)for(let a=0,o=r.length;a<o;a++){const s=r[a],l=this.morphTargetsRelative;for(let c=0,d=s.count;c<d;c++)Et.fromBufferAttribute(s,c),l&&(Bn.fromBufferAttribute(e,c),Et.add(Bn)),n=Math.max(n,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=r.position,n=r.normal,a=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let P=0;P<i.count;P++)s[P]=new U,l[P]=new U;const c=new U,d=new U,h=new U,p=new We,m=new We,x=new We,y=new U,g=new U;function u(P,q,b){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,q),h.fromBufferAttribute(i,b),p.fromBufferAttribute(a,P),m.fromBufferAttribute(a,q),x.fromBufferAttribute(a,b),d.sub(c),h.sub(c),m.sub(p),x.sub(p);const R=1/(m.x*x.y-x.x*m.y);isFinite(R)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(R),g.copy(h).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(R),s[P].add(y),s[q].add(y),s[b].add(y),l[P].add(g),l[q].add(g),l[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,q=_.length;P<q;++P){const b=_[P],R=b.start,J=b.count;for(let ee=R,N=R+J;ee<N;ee+=3)u(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const v=new U,E=new U,C=new U,T=new U;function w(P){C.fromBufferAttribute(n,P),T.copy(C);const q=s[P];v.copy(q),v.sub(C.multiplyScalar(C.dot(q))).normalize(),E.crossVectors(T,q);const b=E.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,b)}for(let P=0,q=_.length;P<q;++P){const b=_[P],R=b.start,J=b.count;for(let ee=R,N=R+J;ee<N;ee+=3)w(e.getX(ee+0)),w(e.getX(ee+1)),w(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mr(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const n=new U,a=new U,o=new U,s=new U,l=new U,c=new U,d=new U,h=new U;if(e)for(let p=0,m=e.count;p<m;p+=3){const x=e.getX(p+0),y=e.getX(p+1),g=e.getX(p+2);n.fromBufferAttribute(r,x),a.fromBufferAttribute(r,y),o.fromBufferAttribute(r,g),d.subVectors(o,a),h.subVectors(n,a),d.cross(h),s.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),s.add(d),l.add(d),c.add(d),i.setXYZ(x,s.x,s.y,s.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,m=r.count;p<m;p+=3)n.fromBufferAttribute(r,p+0),a.fromBufferAttribute(r,p+1),o.fromBufferAttribute(r,p+2),d.subVectors(o,a),h.subVectors(n,a),d.cross(h),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,i=e.count;r<i;r++)Et.fromBufferAttribute(e,r),Et.normalize(),e.setXYZ(r,Et.x,Et.y,Et.z)}toNonIndexed(){function e(s,l){const c=s.array,d=s.itemSize,h=s.normalized,p=new c.constructor(l.length*d);let m=0,x=0;for(let y=0,g=l.length;y<g;y++){s.isInterleavedBufferAttribute?m=l[y]*s.data.stride+s.offset:m=l[y]*d;for(let u=0;u<d;u++)p[x++]=c[m++]}return new Mr(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new Tr,i=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,i);r.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let d=0,h=c.length;d<h;d++){const p=c[d],m=e(p,i);l.push(m)}r.morphAttributes[s]=l}r.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];r.addGroup(c.start,c.count,c.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(n[l]=d,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(r));const n=e.attributes;for(const c in n){const d=n[c];this.setAttribute(c,d.clone(r))}const a=e.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,m=h.length;p<m;p++)d.push(h[p].clone(r));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tf=new ut,nn=new Gv,bs=new Gl,Af=new U,jn=new U,Hn=new U,Gn=new U,qc=new U,Ss=new U,Ms=new We,Es=new We,ws=new We,Rf=new U,Cf=new U,Lf=new U,Ts=new U,As=new U;class er extends qt{constructor(e=new Tr,r=new oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,r){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;r.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){Ss.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=s[l],h=a[l];d!==0&&(qc.fromBufferAttribute(h,e),o?Ss.addScaledVector(qc,d):Ss.addScaledVector(qc.sub(r),d))}r.add(Ss)}return r}raycast(e,r){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(a),nn.copy(e.ray).recast(e.near),!(bs.containsPoint(nn.origin)===!1&&(nn.intersectSphere(bs,Af)===null||nn.origin.distanceToSquared(Af)>(e.far-e.near)**2))&&(Tf.copy(a).invert(),nn.copy(e.ray).applyMatrix4(Tf),!(i.boundingBox!==null&&nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,r,nn)))}_computeIntersections(e,r,i){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,p=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const g=p[x],u=o[g.materialIndex],_=Math.max(g.start,m.start),v=Math.min(s.count,Math.min(g.start+g.count,m.start+m.count));for(let E=_,C=v;E<C;E+=3){const T=s.getX(E),w=s.getX(E+1),P=s.getX(E+2);n=Rs(this,u,e,i,c,d,h,T,w,P),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=g.materialIndex,r.push(n))}}else{const x=Math.max(0,m.start),y=Math.min(s.count,m.start+m.count);for(let g=x,u=y;g<u;g+=3){const _=s.getX(g),v=s.getX(g+1),E=s.getX(g+2);n=Rs(this,o,e,i,c,d,h,_,v,E),n&&(n.faceIndex=Math.floor(g/3),r.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const g=p[x],u=o[g.materialIndex],_=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=_,C=v;E<C;E+=3){const T=E,w=E+1,P=E+2;n=Rs(this,u,e,i,c,d,h,T,w,P),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=g.materialIndex,r.push(n))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=x,u=y;g<u;g+=3){const _=g,v=g+1,E=g+2;n=Rs(this,o,e,i,c,d,h,_,v,E),n&&(n.faceIndex=Math.floor(g/3),r.push(n))}}}}function o1(t,e,r,i,n,a,o,s){let l;if(e.side===ar?l=i.intersectTriangle(o,a,n,!0,s):l=i.intersectTriangle(n,a,o,e.side===Xi,s),l===null)return null;As.copy(s),As.applyMatrix4(t.matrixWorld);const c=r.ray.origin.distanceTo(As);return c<r.near||c>r.far?null:{distance:c,point:As.clone(),object:t}}function Rs(t,e,r,i,n,a,o,s,l,c){t.getVertexPosition(s,jn),t.getVertexPosition(l,Hn),t.getVertexPosition(c,Gn);const d=o1(t,e,r,i,jn,Hn,Gn,Ts);if(d){n&&(Ms.fromBufferAttribute(n,s),Es.fromBufferAttribute(n,l),ws.fromBufferAttribute(n,c),d.uv=Xr.getInterpolation(Ts,jn,Hn,Gn,Ms,Es,ws,new We)),a&&(Ms.fromBufferAttribute(a,s),Es.fromBufferAttribute(a,l),ws.fromBufferAttribute(a,c),d.uv1=Xr.getInterpolation(Ts,jn,Hn,Gn,Ms,Es,ws,new We)),o&&(Rf.fromBufferAttribute(o,s),Cf.fromBufferAttribute(o,l),Lf.fromBufferAttribute(o,c),d.normal=Xr.getInterpolation(Ts,jn,Hn,Gn,Rf,Cf,Lf,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new U,materialIndex:0};Xr.getNormal(jn,Hn,Gn,h.normal),d.face=h}return d}class Go extends Tr{constructor(e=1,r=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],d=[],h=[];let p=0,m=0;x("z","y","x",-1,-1,i,r,e,o,a,0),x("z","y","x",1,-1,i,r,-e,o,a,1),x("x","z","y",1,1,e,i,r,n,o,2),x("x","z","y",1,-1,e,i,-r,n,o,3),x("x","y","z",1,-1,e,r,i,n,a,4),x("x","y","z",-1,-1,e,r,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(h,2));function x(y,g,u,_,v,E,C,T,w,P,q){const b=E/w,R=C/P,J=E/2,ee=C/2,N=T/2,Y=w+1,W=P+1;let X=0,F=0;const k=new U;for(let V=0;V<W;V++){const $=V*R-ee;for(let ne=0;ne<Y;ne++){const ve=ne*b-J;k[y]=ve*_,k[g]=$*v,k[u]=N,c.push(k.x,k.y,k.z),k[y]=0,k[g]=0,k[u]=T>0?1:-1,d.push(k.x,k.y,k.z),h.push(ne/w),h.push(1-V/P),X+=1}}for(let V=0;V<P;V++)for(let $=0;$<w;$++){const ne=p+$+Y*V,ve=p+$+Y*(V+1),B=p+($+1)+Y*(V+1),re=p+($+1)+Y*V;l.push(ne,ve,re),l.push(ve,B,re),F+=6}s.addGroup(m,F,q),m+=F,p+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Aa(t){const e={};for(const r in t){e[r]={};for(const i in t[r]){const n=t[r][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][i]=null):e[r][i]=n.clone():Array.isArray(n)?e[r][i]=n.slice():e[r][i]=n}}return e}function Ht(t){const e={};for(let r=0;r<t.length;r++){const i=Aa(t[r]);for(const n in i)e[n]=i[n]}return e}function s1(t){const e=[];for(let r=0;r<t.length;r++)e.push(t[r].clone());return e}function Yv(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const l1={clone:Aa,merge:Ht};var c1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c1,this.fragmentShader=u1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Aa(e.uniforms),this.uniformsGroups=s1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?r.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?r.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?r.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?r.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?r.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?r.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?r.uniforms[n]={type:"m4",value:a.toArray()}:r.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(r.extensions=i),r}}class Kv extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=ci}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new U,Pf=new We,Nf=new We;class cr extends Kv{constructor(e=50,r=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,r,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,r){return this.getViewBounds(e,Pf,Nf),r.subVectors(Nf,Pf)}setViewOffset(e,r,i,n,a,o){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(Rc*.5*this.fov)/this.zoom,i=2*r,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,r-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,r,r-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Wn=-90,Vn=1;class d1 extends qt{constructor(e,r,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new cr(Wn,Vn,e,r);n.layers=this.layers,this.add(n);const a=new cr(Wn,Vn,e,r);a.layers=this.layers,this.add(a);const o=new cr(Wn,Vn,e,r);o.layers=this.layers,this.add(o);const s=new cr(Wn,Vn,e,r);s.layers=this.layers,this.add(s);const l=new cr(Wn,Vn,e,r);l.layers=this.layers,this.add(l);const c=new cr(Wn,Vn,e,r);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[i,n,a,o,s,l]=r;for(const c of r)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of r)this.add(c),c.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(r,a),e.setRenderTarget(i,1,n),e.render(r,o),e.setRenderTarget(i,2,n),e.render(r,s),e.setRenderTarget(i,3,n),e.render(r,l),e.setRenderTarget(i,4,n),e.render(r,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,n),e.render(r,d),e.setRenderTarget(h,p,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class $v extends Xt{constructor(e,r,i,n,a,o,s,l,c,d){e=e!==void 0?e:[],r=r!==void 0?r:Ea,super(e,r,i,n,a,o,s,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class h1 extends An{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new $v(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Zt}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Go(5,5,5),a=new qi({name:"CubemapFromEquirect",uniforms:Aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ar,blending:ji});a.uniforms.tEquirect.value=r;const o=new er(n,a),s=r.minFilter;return r.minFilter===Li&&(r.minFilter=Zt),new d1(1,10,this).update(e,o),r.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,r,i,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(r,i,n);e.setRenderTarget(a)}}const Yc=new U,p1=new U,f1=new Fe;class un{constructor(e=new U(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,i,n){return this.normal.set(e,r,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,i){const n=Yc.subVectors(i,r).cross(p1.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const i=e.delta(Yc),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:r.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const r=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return r<0&&i>0||i<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const i=r||f1.getNormalMatrix(e),n=this.coplanarPoint(Yc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const an=new Gl,Cs=new U;class sh{constructor(e=new un,r=new un,i=new un,n=new un,a=new un,o=new un){this.planes=[e,r,i,n,a,o]}set(e,r,i,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(r),s[2].copy(i),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const r=this.planes;for(let i=0;i<6;i++)r[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,r=ci){const i=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],d=n[5],h=n[6],p=n[7],m=n[8],x=n[9],y=n[10],g=n[11],u=n[12],_=n[13],v=n[14],E=n[15];if(i[0].setComponents(l-a,p-c,g-m,E-u).normalize(),i[1].setComponents(l+a,p+c,g+m,E+u).normalize(),i[2].setComponents(l+o,p+d,g+x,E+_).normalize(),i[3].setComponents(l-o,p-d,g-x,E-_).normalize(),i[4].setComponents(l-s,p-h,g-y,E-v).normalize(),r===ci)i[5].setComponents(l+s,p+h,g+y,E+v).normalize();else if(r===Sl)i[5].setComponents(s,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),an.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),an.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(an)}intersectsSprite(e){return an.center.set(0,0,0),an.radius=.7071067811865476,an.applyMatrix4(e.matrixWorld),this.intersectsSphere(an)}intersectsSphere(e){const r=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(r[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const r=this.planes;for(let i=0;i<6;i++){const n=r[i];if(Cs.x=n.normal.x>0?e.max.x:e.min.x,Cs.y=n.normal.y>0?e.max.y:e.min.y,Cs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let i=0;i<6;i++)if(r[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zv(){let t=null,e=!1,r=null,i=null;function n(a,o){r(a,o),i=t.requestAnimationFrame(n)}return{start:function(){e!==!0&&r!==null&&(i=t.requestAnimationFrame(n),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){r=a},setContext:function(a){t=a}}}function m1(t,e){const r=e.isWebGL2,i=new WeakMap;function n(c,d){const h=c.array,p=c.usage,m=h.byteLength,x=t.createBuffer();t.bindBuffer(d,x),t.bufferData(d,h,p),c.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(r)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,d,h){const p=d.array,m=d._updateRange,x=d.updateRanges;if(t.bindBuffer(h,c),m.count===-1&&x.length===0&&t.bufferSubData(h,0,p),x.length!==0){for(let y=0,g=x.length;y<g;y++){const u=x[y];r?t.bufferSubData(h,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):t.bufferSubData(h,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(r?t.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):t.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,n(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,c,d),h.version=c.version}}return{get:o,remove:s,update:l}}class Wo extends Tr{constructor(e=1,r=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:i,heightSegments:n};const a=e/2,o=r/2,s=Math.floor(i),l=Math.floor(n),c=s+1,d=l+1,h=e/s,p=r/l,m=[],x=[],y=[],g=[];for(let u=0;u<d;u++){const _=u*p-o;for(let v=0;v<c;v++){const E=v*h-a;x.push(E,-_,0),y.push(0,0,1),g.push(v/s),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<s;_++){const v=_+c*u,E=_+c*(u+1),C=_+1+c*(u+1),T=_+1+c*u;m.push(v,E,T),m.push(E,C,T)}this.setIndex(m),this.setAttribute("position",new zt(x,3)),this.setAttribute("normal",new zt(y,3)),this.setAttribute("uv",new zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var g1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,T1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,C1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,L1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,z1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,j1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,H1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X1="gl_FragColor = linearToOutputTexel( gl_FragColor );",q1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Y1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,K1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ib=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,db=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_b=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Nb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,MS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ES=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,US=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,YS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:g1,alphahash_pars_fragment:v1,alphamap_fragment:x1,alphamap_pars_fragment:_1,alphatest_fragment:y1,alphatest_pars_fragment:b1,aomap_fragment:S1,aomap_pars_fragment:M1,batching_pars_vertex:E1,batching_vertex:w1,begin_vertex:T1,beginnormal_vertex:A1,bsdfs:R1,iridescence_fragment:C1,bumpmap_pars_fragment:L1,clipping_planes_fragment:P1,clipping_planes_pars_fragment:N1,clipping_planes_pars_vertex:F1,clipping_planes_vertex:D1,color_fragment:U1,color_pars_fragment:I1,color_pars_vertex:k1,color_vertex:O1,common:z1,cube_uv_reflection_fragment:B1,defaultnormal_vertex:j1,displacementmap_pars_vertex:H1,displacementmap_vertex:G1,emissivemap_fragment:W1,emissivemap_pars_fragment:V1,colorspace_fragment:X1,colorspace_pars_fragment:q1,envmap_fragment:Y1,envmap_common_pars_fragment:K1,envmap_pars_fragment:$1,envmap_pars_vertex:Z1,envmap_physical_pars_fragment:cb,envmap_vertex:J1,fog_vertex:Q1,fog_pars_vertex:eb,fog_fragment:tb,fog_pars_fragment:rb,gradientmap_pars_fragment:ib,lightmap_fragment:nb,lightmap_pars_fragment:ab,lights_lambert_fragment:ob,lights_lambert_pars_fragment:sb,lights_pars_begin:lb,lights_toon_fragment:ub,lights_toon_pars_fragment:db,lights_phong_fragment:hb,lights_phong_pars_fragment:pb,lights_physical_fragment:fb,lights_physical_pars_fragment:mb,lights_fragment_begin:gb,lights_fragment_maps:vb,lights_fragment_end:xb,logdepthbuf_fragment:_b,logdepthbuf_pars_fragment:yb,logdepthbuf_pars_vertex:bb,logdepthbuf_vertex:Sb,map_fragment:Mb,map_pars_fragment:Eb,map_particle_fragment:wb,map_particle_pars_fragment:Tb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:Rb,morphinstance_vertex:Cb,morphcolor_vertex:Lb,morphnormal_vertex:Pb,morphtarget_pars_vertex:Nb,morphtarget_vertex:Fb,normal_fragment_begin:Db,normal_fragment_maps:Ub,normal_pars_fragment:Ib,normal_pars_vertex:kb,normal_vertex:Ob,normalmap_pars_fragment:zb,clearcoat_normal_fragment_begin:Bb,clearcoat_normal_fragment_maps:jb,clearcoat_pars_fragment:Hb,iridescence_pars_fragment:Gb,opaque_fragment:Wb,packing:Vb,premultiplied_alpha_fragment:Xb,project_vertex:qb,dithering_fragment:Yb,dithering_pars_fragment:Kb,roughnessmap_fragment:$b,roughnessmap_pars_fragment:Zb,shadowmap_pars_fragment:Jb,shadowmap_pars_vertex:Qb,shadowmap_vertex:eS,shadowmask_pars_fragment:tS,skinbase_vertex:rS,skinning_pars_vertex:iS,skinning_vertex:nS,skinnormal_vertex:aS,specularmap_fragment:oS,specularmap_pars_fragment:sS,tonemapping_fragment:lS,tonemapping_pars_fragment:cS,transmission_fragment:uS,transmission_pars_fragment:dS,uv_pars_fragment:hS,uv_pars_vertex:pS,uv_vertex:fS,worldpos_vertex:mS,background_vert:gS,background_frag:vS,backgroundCube_vert:xS,backgroundCube_frag:_S,cube_vert:yS,cube_frag:bS,depth_vert:SS,depth_frag:MS,distanceRGBA_vert:ES,distanceRGBA_frag:wS,equirect_vert:TS,equirect_frag:AS,linedashed_vert:RS,linedashed_frag:CS,meshbasic_vert:LS,meshbasic_frag:PS,meshlambert_vert:NS,meshlambert_frag:FS,meshmatcap_vert:DS,meshmatcap_frag:US,meshnormal_vert:IS,meshnormal_frag:kS,meshphong_vert:OS,meshphong_frag:zS,meshphysical_vert:BS,meshphysical_frag:jS,meshtoon_vert:HS,meshtoon_frag:GS,points_vert:WS,points_frag:VS,shadow_vert:XS,shadow_frag:qS,sprite_vert:YS,sprite_frag:KS},oe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Wr={basic:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ht([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ht([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ht([oe.points,oe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ht([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ht([oe.common,oe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ht([oe.sprite,oe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Ht([oe.common,oe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Ht([oe.lights,oe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Wr.physical={uniforms:Ht([Wr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ls={r:0,b:0,g:0},on=new $r,$S=new ut;function ZS(t,e,r,i,n,a,o){const s=new Ge(0);let l=a===!0?0:1,c,d,h=null,p=0,m=null;function x(g,u){let _=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?r:e).get(v)),v===null?y(s,l):v&&v.isColor&&(y(v,1),_=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===jl)?(d===void 0&&(d=new er(new Go(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Aa(Wr.backgroundCube.uniforms),vertexShader:Wr.backgroundCube.vertexShader,fragmentShader:Wr.backgroundCube.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),on.copy(u.backgroundRotation),on.x*=-1,on.y*=-1,on.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(on.y*=-1,on.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4($S.makeRotationFromEuler(on)),d.material.toneMapped=Je.getTransfer(v.colorSpace)!==it,(h!==v||p!==v.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=v,p=v.version,m=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new er(new Wo(2,2),new qi({name:"BackgroundMaterial",uniforms:Aa(Wr.background.uniforms),vertexShader:Wr.background.vertexShader,fragmentShader:Wr.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Je.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,u){g.getRGB(Ls,Yv(t)),i.buffers.color.setClear(Ls.r,Ls.g,Ls.b,u,o)}return{getClearColor:function(){return s},setClearColor:function(g,u=1){s.set(g),l=u,y(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(s,l)},render:x}}function JS(t,e,r,i){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=g(null);let c=l,d=!1;function h(N,Y,W,X,F){let k=!1;if(o){const V=y(X,W,Y);c!==V&&(c=V,m(c.object)),k=u(N,X,W,F),k&&_(N,X,W,F)}else{const V=Y.wireframe===!0;(c.geometry!==X.id||c.program!==W.id||c.wireframe!==V)&&(c.geometry=X.id,c.program=W.id,c.wireframe=V,k=!0)}F!==null&&r.update(F,t.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,P(N,Y,W,X),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r.get(F).buffer))}function p(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function m(N){return i.isWebGL2?t.bindVertexArray(N):a.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?t.deleteVertexArray(N):a.deleteVertexArrayOES(N)}function y(N,Y,W){const X=W.wireframe===!0;let F=s[N.id];F===void 0&&(F={},s[N.id]=F);let k=F[Y.id];k===void 0&&(k={},F[Y.id]=k);let V=k[X];return V===void 0&&(V=g(p()),k[X]=V),V}function g(N){const Y=[],W=[],X=[];for(let F=0;F<n;F++)Y[F]=0,W[F]=0,X[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:W,attributeDivisors:X,object:N,attributes:{},index:null}}function u(N,Y,W,X){const F=c.attributes,k=Y.attributes;let V=0;const $=W.getAttributes();for(const ne in $)if($[ne].location>=0){const ve=F[ne];let B=k[ne];if(B===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(B=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(B=N.instanceColor)),ve===void 0||ve.attribute!==B||B&&ve.data!==B.data)return!0;V++}return c.attributesNum!==V||c.index!==X}function _(N,Y,W,X){const F={},k=Y.attributes;let V=0;const $=W.getAttributes();for(const ne in $)if($[ne].location>=0){let ve=k[ne];ve===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor));const B={};B.attribute=ve,ve&&ve.data&&(B.data=ve.data),F[ne]=B,V++}c.attributes=F,c.attributesNum=V,c.index=X}function v(){const N=c.newAttributes;for(let Y=0,W=N.length;Y<W;Y++)N[Y]=0}function E(N){C(N,0)}function C(N,Y){const W=c.newAttributes,X=c.enabledAttributes,F=c.attributeDivisors;W[N]=1,X[N]===0&&(t.enableVertexAttribArray(N),X[N]=1),F[N]!==Y&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,Y),F[N]=Y)}function T(){const N=c.newAttributes,Y=c.enabledAttributes;for(let W=0,X=Y.length;W<X;W++)Y[W]!==N[W]&&(t.disableVertexAttribArray(W),Y[W]=0)}function w(N,Y,W,X,F,k,V){V===!0?t.vertexAttribIPointer(N,Y,W,F,k):t.vertexAttribPointer(N,Y,W,X,F,k)}function P(N,Y,W,X){if(i.isWebGL2===!1&&(N.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const F=X.attributes,k=W.getAttributes(),V=Y.defaultAttributeValues;for(const $ in k){const ne=k[$];if(ne.location>=0){let ve=F[$];if(ve===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor)),ve!==void 0){const B=ve.normalized,re=ve.itemSize,Z=r.get(ve);if(Z===void 0)continue;const pe=Z.buffer,ge=Z.type,fe=Z.bytesPerElement,Ve=i.isWebGL2===!0&&(ge===t.INT||ge===t.UNSIGNED_INT||ve.gpuType===Lv);if(ve.isInterleavedBufferAttribute){const Ae=ve.data,I=Ae.stride,At=ve.offset;if(Ae.isInstancedInterleavedBuffer){for(let Me=0;Me<ne.locationSize;Me++)C(ne.location+Me,Ae.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Me=0;Me<ne.locationSize;Me++)E(ne.location+Me);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Me=0;Me<ne.locationSize;Me++)w(ne.location+Me,re/ne.locationSize,ge,B,I*fe,(At+re/ne.locationSize*Me)*fe,Ve)}else{if(ve.isInstancedBufferAttribute){for(let Ae=0;Ae<ne.locationSize;Ae++)C(ne.location+Ae,ve.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ae=0;Ae<ne.locationSize;Ae++)E(ne.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Ae=0;Ae<ne.locationSize;Ae++)w(ne.location+Ae,re/ne.locationSize,ge,B,re*fe,re/ne.locationSize*Ae*fe,Ve)}}else if(V!==void 0){const B=V[$];if(B!==void 0)switch(B.length){case 2:t.vertexAttrib2fv(ne.location,B);break;case 3:t.vertexAttrib3fv(ne.location,B);break;case 4:t.vertexAttrib4fv(ne.location,B);break;default:t.vertexAttrib1fv(ne.location,B)}}}}T()}function q(){J();for(const N in s){const Y=s[N];for(const W in Y){const X=Y[W];for(const F in X)x(X[F].object),delete X[F];delete Y[W]}delete s[N]}}function b(N){if(s[N.id]===void 0)return;const Y=s[N.id];for(const W in Y){const X=Y[W];for(const F in X)x(X[F].object),delete X[F];delete Y[W]}delete s[N.id]}function R(N){for(const Y in s){const W=s[Y];if(W[N.id]===void 0)continue;const X=W[N.id];for(const F in X)x(X[F].object),delete X[F];delete W[N.id]}}function J(){ee(),d=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:ee,dispose:q,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:E,disableUnusedAttributes:T}}function QS(t,e,r,i){const n=i.isWebGL2;let a;function o(d){a=d}function s(d,h){t.drawArrays(a,d,h),r.update(h,a,1)}function l(d,h,p){if(p===0)return;let m,x;if(n)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](a,d,h,p),r.update(h,a,p)}function c(d,h,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<p;x++)this.render(d[x],h[x]);else{m.multiDrawArraysWEBGL(a,d,0,h,0,p);let x=0;for(let y=0;y<p;y++)x+=h[y];r.update(x,a,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function eM(t,e,r){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=r.precision!==void 0?r.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),d=r.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,E=o||e.has("OES_texture_float"),C=v&&E,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:g,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:T}}function tM(t){const e=this;let r=null,i=0,n=!1,a=!1;const o=new un,s=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||i!==0||n;return n=p,i=h.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,p){r=d(h,p,0)},this.setState=function(h,p,m){const x=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,u=t.get(h);if(!n||x===null||x.length===0||a&&!g)a?d(null):c();else{const _=a?0:i,v=_*4;let E=u.clippingState||null;l.value=E,E=d(x,p,v,m);for(let C=0;C!==v;++C)E[C]=r[C];u.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,p,m,x){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=l.value,x!==!0||g===null){const u=m+y*4,_=p.matrixWorldInverse;s.getNormalMatrix(_),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,E=m;v!==y;++v,E+=4)o.copy(h[v]).applyMatrix4(_,s),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function rM(t){let e=new WeakMap;function r(o,s){return s===Qu?o.mapping=Ea:s===ed&&(o.mapping=wa),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===Qu||s===ed)if(e.has(o)){const l=e.get(o).texture;return r(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new h1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",n),r(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class iM extends Kv{constructor(e=-1,r=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=n+r,l=n-r;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const sa=4,Ff=[.125,.215,.35,.446,.526,.582],pn=20,Kc=new iM,Df=new Ge;let $c=null,Zc=0,Jc=0;const dn=(1+Math.sqrt(5))/2,Xn=1/dn,Uf=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,dn,Xn),new U(0,dn,-Xn),new U(Xn,0,dn),new U(-Xn,0,dn),new U(dn,Xn,0),new U(-dn,Xn,0)];class If{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,i=.1,n=100){$c=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),r>0&&this._blur(a,0,0,r),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Zc,Jc),e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===Ea||e.mapping===wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel();const i=r||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Fo,format:Ir,colorSpace:Zi,depthBuffer:!1},n=kf(e,r,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kf(e,r,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nM(a)),this._blurMaterial=aM(a,e,r)}return n}_compileMaterial(e){const r=new er(this._lodPlanes[0],e);this._renderer.compile(r,Kc)}_sceneToCubeUV(e,r,i,n){const a=new cr(90,1,r,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,d=l.toneMapping;l.getClearColor(Df),l.toneMapping=Hi,l.autoClear=!1;const h=new oa({name:"PMREM.Background",side:ar,depthWrite:!1,depthTest:!1}),p=new er(new Go,h);let m=!1;const x=e.background;x?x.isColor&&(h.color.copy(x),e.background=null,m=!0):(h.color.copy(Df),m=!0);for(let y=0;y<6;y++){const g=y%3;g===0?(a.up.set(0,o[y],0),a.lookAt(s[y],0,0)):g===1?(a.up.set(0,0,o[y]),a.lookAt(0,s[y],0)):(a.up.set(0,o[y],0),a.lookAt(0,0,s[y]));const u=this._cubeSize;Ps(n,g*u,y>2?u:0,u,u),l.setRenderTarget(n),m&&l.render(p,a),l.render(e,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=d,l.autoClear=c,e.background=x}_textureToCubeUV(e,r){const i=this._renderer,n=e.mapping===Ea||e.mapping===wa;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new er(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ps(r,0,0,3*l,2*l),i.setRenderTarget(r),i.render(o,Kc)}_applyPMREM(e){const r=this._renderer,i=r.autoClear;r.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Uf[(n-1)%Uf.length];this._blur(e,n-1,n,a,o)}r.autoClear=i}_blur(e,r,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,r,i,n,"latitudinal",a),this._halfBlur(o,e,i,i,n,"longitudinal",a)}_halfBlur(e,r,i,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new er(this._lodPlanes[n],c),p=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*pn-1),y=a/x,g=isFinite(a)?1+Math.floor(d*y):pn;g>pn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pn}`);const u=[];let _=0;for(let w=0;w<pn;++w){const P=w/y,q=Math.exp(-P*P/2);u.push(q),w===0?_+=q:w<g&&(_+=2*q)}for(let w=0;w<u.length;w++)u[w]=u[w]/_;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=u,p.latitudinal.value=o==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-i;const E=this._sizeLods[n],C=3*E*(n>v-sa?n-v+sa:0),T=4*(this._cubeSize-E);Ps(r,C,T,3*E,2*E),l.setRenderTarget(r),l.render(h,Kc)}}function nM(t){const e=[],r=[],i=[];let n=t;const a=t-sa+1+Ff.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);r.push(s);let l=1/s;o>t-sa?l=Ff[o-t+sa-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,x=6,y=3,g=2,u=1,_=new Float32Array(y*x*m),v=new Float32Array(g*x*m),E=new Float32Array(u*x*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,P=T>2?0:-1,q=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];_.set(q,y*x*T),v.set(p,g*x*T);const b=[T,T,T,T,T,T];E.set(b,u*x*T)}const C=new Tr;C.setAttribute("position",new Mr(_,y)),C.setAttribute("uv",new Mr(v,g)),C.setAttribute("faceIndex",new Mr(E,u)),e.push(C),n>sa&&n--}return{lodPlanes:e,sizeLods:r,sigmas:i}}function kf(t,e,r){const i=new An(t,e,r);return i.texture.mapping=jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(t,e,r,i,n){t.viewport.set(e,r,i,n),t.scissor.set(e,r,i,n)}function aM(t,e,r){const i=new Float32Array(pn),n=new U(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Of(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function zf(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oM(t){let e=new WeakMap,r=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Qu||l===ed,d=l===Ea||l===wa;if(c||d)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return r===null&&(r=new If(t)),h=c?r.fromEquirectangular(s,h):r.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||d&&h&&n(h)){r===null&&(r=new If(t));const p=c?r.fromEquirectangular(s):r.fromCubemap(s);return e.set(s,p),s.addEventListener("dispose",a),p.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let d=0;d<c;d++)s[d]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:o}}function sM(t){const e={};function r(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=t.getExtension(i)}return e[i]=n,n}return{has:function(i){return r(i)!==null},init:function(i){i.isWebGL2?(r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance")):(r("WEBGL_depth_texture"),r("OES_texture_float"),r("OES_texture_half_float"),r("OES_texture_half_float_linear"),r("OES_standard_derivatives"),r("OES_element_index_uint"),r("OES_vertex_array_object"),r("ANGLE_instanced_arrays")),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture")},get:function(i){const n=r(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function lM(t,e,r,i){const n={},a=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);for(const x in p.morphAttributes){const y=p.morphAttributes[x];for(let g=0,u=y.length;g<u;g++)e.remove(y[g])}p.removeEventListener("dispose",o),delete n[p.id];const m=a.get(p);m&&(e.remove(m),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,r.memory.geometries--}function s(h,p){return n[p.id]===!0||(p.addEventListener("dispose",o),n[p.id]=!0,r.memory.geometries++),p}function l(h){const p=h.attributes;for(const x in p)e.update(p[x],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const y=m[x];for(let g=0,u=y.length;g<u;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(h){const p=[],m=h.index,x=h.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let v=0,E=_.length;v<E;v+=3){const C=_[v+0],T=_[v+1],w=_[v+2];p.push(C,T,T,w,w,C)}}else if(x!==void 0){const _=x.array;y=x.version;for(let v=0,E=_.length/3-1;v<E;v+=3){const C=v+0,T=v+1,w=v+2;p.push(C,T,T,w,w,C)}}else return;const g=new(zv(p)?qv:Xv)(p,1);g.version=y;const u=a.get(h);u&&e.remove(u),a.set(h,g)}function d(h){const p=a.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return a.get(h)}return{get:s,update:l,getWireframeAttribute:d}}function cM(t,e,r,i){const n=i.isWebGL2;let a;function o(m){a=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function d(m,x){t.drawElements(a,x,s,m*l),r.update(x,a,1)}function h(m,x,y){if(y===0)return;let g,u;if(n)g=t,u="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[u](a,x,s,m*l,y),r.update(x,a,y)}function p(m,x,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<y;u++)this.render(m[u]/l,x[u]);else{g.multiDrawElementsWEBGL(a,x,0,s,m,0,y);let u=0;for(let _=0;_<y;_++)u+=x[_];r.update(u,a,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function uM(t){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(r.calls++,o){case t.TRIANGLES:r.triangles+=s*(a/3);break;case t.LINES:r.lines+=s*(a/2);break;case t.LINE_STRIP:r.lines+=s*(a-1);break;case t.LINE_LOOP:r.lines+=s*a;break;case t.POINTS:r.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:n,update:i}}function dM(t,e){return t[0]-e[0]}function hM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function pM(t,e,r){const i={},n=new Float32Array(8),a=new WeakMap,o=new st,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,d,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=m!==void 0?m.length:0;let y=a.get(d);if(y===void 0||y.count!==x){let g=function(){R.dispose(),a.delete(d),d.removeEventListener("dispose",g)};y!==void 0&&y.texture.dispose();const u=d.morphAttributes.position!==void 0,_=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],T=d.morphAttributes.color||[];let w=0;u===!0&&(w=1),_===!0&&(w=2),v===!0&&(w=3);let P=d.attributes.position.count*w,q=1;P>e.maxTextureSize&&(q=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const b=new Float32Array(P*q*4*x),R=new Hv(b,P,q,x);R.type=oi,R.needsUpdate=!0;const J=w*4;for(let ee=0;ee<x;ee++){const N=E[ee],Y=C[ee],W=T[ee],X=P*q*4*ee;for(let F=0;F<N.count;F++){const k=F*J;u===!0&&(o.fromBufferAttribute(N,F),b[X+k+0]=o.x,b[X+k+1]=o.y,b[X+k+2]=o.z,b[X+k+3]=0),_===!0&&(o.fromBufferAttribute(Y,F),b[X+k+4]=o.x,b[X+k+5]=o.y,b[X+k+6]=o.z,b[X+k+7]=0),v===!0&&(o.fromBufferAttribute(W,F),b[X+k+8]=o.x,b[X+k+9]=o.y,b[X+k+10]=o.z,b[X+k+11]=W.itemSize===4?o.w:1)}}y={count:x,texture:R,size:new We(P,q)},a.set(d,y),d.addEventListener("dispose",g)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(t,"morphTexture",c.morphTexture,r);else{let g=0;for(let _=0;_<p.length;_++)g+=p[_];const u=d.morphTargetsRelative?1:1-g;h.getUniforms().setValue(t,"morphTargetBaseInfluence",u),h.getUniforms().setValue(t,"morphTargetInfluences",p)}h.getUniforms().setValue(t,"morphTargetsTexture",y.texture,r),h.getUniforms().setValue(t,"morphTargetsTextureSize",y.size)}else{const m=p===void 0?0:p.length;let x=i[d.id];if(x===void 0||x.length!==m){x=[];for(let v=0;v<m;v++)x[v]=[v,0];i[d.id]=x}for(let v=0;v<m;v++){const E=x[v];E[0]=v,E[1]=p[v]}x.sort(hM);for(let v=0;v<8;v++)v<m&&x[v][1]?(s[v][0]=x[v][0],s[v][1]=x[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(dM);const y=d.morphAttributes.position,g=d.morphAttributes.normal;let u=0;for(let v=0;v<8;v++){const E=s[v],C=E[0],T=E[1];C!==Number.MAX_SAFE_INTEGER&&T?(y&&d.getAttribute("morphTarget"+v)!==y[C]&&d.setAttribute("morphTarget"+v,y[C]),g&&d.getAttribute("morphNormal"+v)!==g[C]&&d.setAttribute("morphNormal"+v,g[C]),n[v]=T,u+=T):(y&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),g&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),n[v]=0)}const _=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",n)}}return{update:l}}function fM(t,e,r,i){let n=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(r.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,t.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return h}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),r.remove(c.instanceMatrix),c.instanceColor!==null&&r.remove(c.instanceColor)}return{update:a,dispose:o}}class Jv extends Xt{constructor(e,r,i,n,a,o,s,l,c,d){if(d=d!==void 0?d:bn,d!==bn&&d!==Ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===bn&&(i=Pi),i===void 0&&d===Ta&&(i=yn),super(null,n,a,o,s,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:r},this.magFilter=s!==void 0?s:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}const Qv=new Xt,e0=new Jv(1,1);e0.compareFunction=Ov;const t0=new Hv,r0=new Ky,i0=new $v,Bf=[],jf=[],Hf=new Float32Array(16),Gf=new Float32Array(9),Wf=new Float32Array(4);function Fa(t,e,r){const i=t[0];if(i<=0||i>0)return t;const n=e*r;let a=Bf[n];if(a===void 0&&(a=new Float32Array(n),Bf[n]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=r,t[o].toArray(a,s)}return a}function St(t,e){if(t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==e[r])return!1;return!0}function Mt(t,e){for(let r=0,i=e.length;r<i;r++)t[r]=e[r]}function Wl(t,e){let r=jf[e];r===void 0&&(r=new Int32Array(e),jf[e]=r);for(let i=0;i!==e;++i)r[i]=t.allocateTextureUnit();return r}function mM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1f(this.addr,e),r[0]=e)}function gM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(St(r,e))return;t.uniform2fv(this.addr,e),Mt(r,e)}}function vM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(St(r,e))return;t.uniform3fv(this.addr,e),Mt(r,e)}}function xM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(St(r,e))return;t.uniform4fv(this.addr,e),Mt(r,e)}}function _M(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(St(r,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(r,e)}else{if(St(r,i))return;Wf.set(i),t.uniformMatrix2fv(this.addr,!1,Wf),Mt(r,i)}}function yM(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(St(r,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(r,e)}else{if(St(r,i))return;Gf.set(i),t.uniformMatrix3fv(this.addr,!1,Gf),Mt(r,i)}}function bM(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(St(r,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(r,e)}else{if(St(r,i))return;Hf.set(i),t.uniformMatrix4fv(this.addr,!1,Hf),Mt(r,i)}}function SM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1i(this.addr,e),r[0]=e)}function MM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(St(r,e))return;t.uniform2iv(this.addr,e),Mt(r,e)}}function EM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(St(r,e))return;t.uniform3iv(this.addr,e),Mt(r,e)}}function wM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(St(r,e))return;t.uniform4iv(this.addr,e),Mt(r,e)}}function TM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1ui(this.addr,e),r[0]=e)}function AM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(St(r,e))return;t.uniform2uiv(this.addr,e),Mt(r,e)}}function RM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(St(r,e))return;t.uniform3uiv(this.addr,e),Mt(r,e)}}function CM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(St(r,e))return;t.uniform4uiv(this.addr,e),Mt(r,e)}}function LM(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n);const a=this.type===t.SAMPLER_2D_SHADOW?e0:Qv;r.setTexture2D(e||a,n)}function PM(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture3D(e||r0,n)}function NM(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTextureCube(e||i0,n)}function FM(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture2DArray(e||t0,n)}function DM(t){switch(t){case 5126:return mM;case 35664:return gM;case 35665:return vM;case 35666:return xM;case 35674:return _M;case 35675:return yM;case 35676:return bM;case 5124:case 35670:return SM;case 35667:case 35671:return MM;case 35668:case 35672:return EM;case 35669:case 35673:return wM;case 5125:return TM;case 36294:return AM;case 36295:return RM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return FM}}function UM(t,e){t.uniform1fv(this.addr,e)}function IM(t,e){const r=Fa(e,this.size,2);t.uniform2fv(this.addr,r)}function kM(t,e){const r=Fa(e,this.size,3);t.uniform3fv(this.addr,r)}function OM(t,e){const r=Fa(e,this.size,4);t.uniform4fv(this.addr,r)}function zM(t,e){const r=Fa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function BM(t,e){const r=Fa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function jM(t,e){const r=Fa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function HM(t,e){t.uniform1iv(this.addr,e)}function GM(t,e){t.uniform2iv(this.addr,e)}function WM(t,e){t.uniform3iv(this.addr,e)}function VM(t,e){t.uniform4iv(this.addr,e)}function XM(t,e){t.uniform1uiv(this.addr,e)}function qM(t,e){t.uniform2uiv(this.addr,e)}function YM(t,e){t.uniform3uiv(this.addr,e)}function KM(t,e){t.uniform4uiv(this.addr,e)}function $M(t,e,r){const i=this.cache,n=e.length,a=Wl(r,n);St(i,a)||(t.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==n;++o)r.setTexture2D(e[o]||Qv,a[o])}function ZM(t,e,r){const i=this.cache,n=e.length,a=Wl(r,n);St(i,a)||(t.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==n;++o)r.setTexture3D(e[o]||r0,a[o])}function JM(t,e,r){const i=this.cache,n=e.length,a=Wl(r,n);St(i,a)||(t.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==n;++o)r.setTextureCube(e[o]||i0,a[o])}function QM(t,e,r){const i=this.cache,n=e.length,a=Wl(r,n);St(i,a)||(t.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==n;++o)r.setTexture2DArray(e[o]||t0,a[o])}function eE(t){switch(t){case 5126:return UM;case 35664:return IM;case 35665:return kM;case 35666:return OM;case 35674:return zM;case 35675:return BM;case 35676:return jM;case 5124:case 35670:return HM;case 35667:case 35671:return GM;case 35668:case 35672:return WM;case 35669:case 35673:return VM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return QM}}class tE{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.setValue=DM(r.type)}}class rE{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=eE(r.type)}}class iE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,r[s.id],i)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function Vf(t,e){t.seq.push(e),t.map[e.id]=e}function nE(t,e,r){const i=t.name,n=i.length;for(Qc.lastIndex=0;;){const a=Qc.exec(i),o=Qc.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){Vf(r,c===void 0?new tE(s,t,e):new rE(s,t,e));break}else{let d=r.map[s];d===void 0&&(d=new iE(s),Vf(r,d)),r=d}}}class qs{constructor(e,r){this.seq=[],this.map={};const i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(r,n),o=e.getUniformLocation(r,a.name);nE(a,o,this)}}setValue(e,r,i,n){const a=this.map[r];a!==void 0&&a.setValue(e,i,n)}setOptional(e,r,i){const n=r[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,r,i,n){for(let a=0,o=r.length;a!==o;++a){const s=r[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,r){const i=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in r&&i.push(o)}return i}}function Xf(t,e,r){const i=t.createShader(e);return t.shaderSource(i,r),t.compileShader(i),i}const aE=37297;let oE=0;function sE(t,e){const r=t.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,r.length);for(let o=n;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${r[o]}`)}return i.join(`
`)}function lE(t){const e=Je.getPrimaries(Je.workingColorSpace),r=Je.getPrimaries(t);let i;switch(e===r?i="":e===bl&&r===yl?i="LinearDisplayP3ToLinearSRGB":e===yl&&r===bl&&(i="LinearSRGBToLinearDisplayP3"),t){case Zi:case Hl:return[i,"LinearTransferOETF"];case Gr:case oh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function qf(t,e,r){const i=t.getShaderParameter(e,t.COMPILE_STATUS),n=t.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return r.toUpperCase()+`

`+n+`

`+sE(t.getShaderSource(e),o)}else return n}function cE(t,e){const r=lE(e);return`vec4 ${t}( vec4 value ) { return ${r[0]}( ${r[1]}( value ) ); }`}function uE(t,e){let r;switch(e){case vy:r="Linear";break;case xy:r="Reinhard";break;case _y:r="OptimizedCineon";break;case yy:r="ACESFilmic";break;case Sy:r="AgX";break;case My:r="Neutral";break;case by:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+t+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}function dE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(la).join(`
`)}function hE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function pE(t){const e=[];for(const r in t){const i=t[r];i!==!1&&e.push("#define "+r+" "+i)}return e.join(`
`)}function fE(t,e){const r={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=t.getActiveAttrib(e,n),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),r[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return r}function la(t){return t!==""}function Yf(t,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(t){return t.replace(mE,vE)}const gE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vE(t,e){let r=Ne[e];if(r===void 0){const i=gE.get(e);if(i!==void 0)r=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return od(r)}const xE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(t){return t.replace(xE,_E)}function _E(t,e,r,i){let n="";for(let a=parseInt(e);a<parseInt(r);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Zf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Rv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===V_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function bE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ea:case wa:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case wa:e="ENVMAP_MODE_REFRACTION";break}return e}function ME(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case nh:e="ENVMAP_BLENDING_MULTIPLY";break;case my:e="ENVMAP_BLENDING_MIX";break;case gy:e="ENVMAP_BLENDING_ADD";break}return e}function EE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:i,maxMip:r}}function wE(t,e,r,i){const n=t.getContext(),a=r.defines;let o=r.vertexShader,s=r.fragmentShader;const l=yE(r),c=bE(r),d=SE(r),h=ME(r),p=EE(r),m=r.isWebGL2?"":dE(r),x=hE(r),y=pE(a),g=n.createProgram();let u,_,v=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(u=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(la).join(`
`),u.length>0&&(u+=`
`),_=[m,"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(la).join(`
`),_.length>0&&(_+=`
`)):(u=[Zf(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+d:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors&&r.isWebGL2?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.useLegacyLights?"#define LEGACY_LIGHTS":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&r.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),_=[m,Zf(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.envMap?"#define "+d:"",r.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.useLegacyLights?"#define LEGACY_LIGHTS":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&r.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Hi?"#define TONE_MAPPING":"",r.toneMapping!==Hi?Ne.tonemapping_pars_fragment:"",r.toneMapping!==Hi?uE("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,cE("linearToOutputTexel",r.outputColorSpace),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(la).join(`
`)),o=od(o),o=Yf(o,r),o=Kf(o,r),s=od(s),s=Yf(s,r),s=Kf(s,r),o=$f(o),s=$f(s),r.isWebGL2&&r.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["precision mediump sampler2DArray;","#define varying in",r.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=v+u+o,C=v+_+s,T=Xf(n,n.VERTEX_SHADER,E),w=Xf(n,n.FRAGMENT_SHADER,C);n.attachShader(g,T),n.attachShader(g,w),r.index0AttributeName!==void 0?n.bindAttribLocation(g,0,r.index0AttributeName):r.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function P(J){if(t.debug.checkShaderErrors){const ee=n.getProgramInfoLog(g).trim(),N=n.getShaderInfoLog(T).trim(),Y=n.getShaderInfoLog(w).trim();let W=!0,X=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,g,T,w);else{const F=qf(n,T,"vertex"),k=qf(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+ee+`
`+F+`
`+k)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(N===""||Y==="")&&(X=!1);X&&(J.diagnostics={runnable:W,programLog:ee,vertexShader:{log:N,prefix:u},fragmentShader:{log:Y,prefix:_}})}n.deleteShader(T),n.deleteShader(w),q=new qs(n,g),b=fE(n,g)}let q;this.getUniforms=function(){return q===void 0&&P(this),q};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let R=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(g,aE)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=oE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}let TE=0;class AE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(r),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const i of r)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let i=r.get(e);return i===void 0&&(i=new Set,r.set(e,i)),i}_getShaderStage(e){const r=this.shaderCache;let i=r.get(e);return i===void 0&&(i=new RE(e),r.set(e,i)),i}}class RE{constructor(e){this.id=TE++,this.code=e,this.usedTimes=0}}function CE(t,e,r,i,n,a,o){const s=new Wv,l=new AE,c=new Set,d=[],h=n.isWebGL2,p=n.logarithmicDepthBuffer,m=n.vertexTextures;let x=n.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function u(b,R,J,ee,N){const Y=ee.fog,W=N.geometry,X=b.isMeshStandardMaterial?ee.environment:null,F=(b.isMeshStandardMaterial?r:e).get(b.envMap||X),k=F&&F.mapping===jl?F.image.height:null,V=y[b.type];b.precision!==null&&(x=n.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const $=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=$!==void 0?$.length:0;let ve=0;W.morphAttributes.position!==void 0&&(ve=1),W.morphAttributes.normal!==void 0&&(ve=2),W.morphAttributes.color!==void 0&&(ve=3);let B,re,Z,pe;if(V){const Qe=Wr[V];B=Qe.vertexShader,re=Qe.fragmentShader}else B=b.vertexShader,re=b.fragmentShader,l.update(b),Z=l.getVertexShaderID(b),pe=l.getFragmentShaderID(b);const ge=t.getRenderTarget(),fe=N.isInstancedMesh===!0,Ve=N.isBatchedMesh===!0,Ae=!!b.map,I=!!b.matcap,At=!!F,Me=!!b.aoMap,Oe=!!b.lightMap,we=!!b.bumpMap,Xe=!!b.normalMap,De=!!b.displacementMap,ze=!!b.emissiveMap,pt=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,G=b.clearcoat>0,K=b.iridescence>0,ie=b.sheen>0,Q=b.transmission>0,Le=S&&!!b.anisotropyMap,Te=G&&!!b.clearcoatMap,se=G&&!!b.clearcoatNormalMap,de=G&&!!b.clearcoatRoughnessMap,Ue=K&&!!b.iridescenceMap,ae=K&&!!b.iridescenceThicknessMap,gt=ie&&!!b.sheenColorMap,Be=ie&&!!b.sheenRoughnessMap,Se=!!b.specularMap,xe=!!b.specularColorMap,_e=!!b.specularIntensityMap,qe=Q&&!!b.transmissionMap,Ce=Q&&!!b.thicknessMap,at=!!b.gradientMap,L=!!b.alphaMap,he=b.alphaTest>0,z=!!b.alphaHash,le=!!b.extensions;let ce=Hi;b.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ce=t.toneMapping);const $e={isWebGL2:h,shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:B,fragmentShader:re,defines:b.defines,customVertexShaderID:Z,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Ve,instancing:fe,instancingColor:fe&&N.instanceColor!==null,instancingMorph:fe&&N.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Zi,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:I,envMap:At,envMapMode:At&&F.mapping,envMapCubeUVHeight:k,aoMap:Me,lightMap:Oe,bumpMap:we,normalMap:Xe,displacementMap:m&&De,emissiveMap:ze,normalMapObjectSpace:Xe&&b.normalMapType===Dy,normalMapTangentSpace:Xe&&b.normalMapType===kv,metalnessMap:pt,roughnessMap:A,anisotropy:S,anisotropyMap:Le,clearcoat:G,clearcoatMap:Te,clearcoatNormalMap:se,clearcoatRoughnessMap:de,iridescence:K,iridescenceMap:Ue,iridescenceThicknessMap:ae,sheen:ie,sheenColorMap:gt,sheenRoughnessMap:Be,specularMap:Se,specularColorMap:xe,specularIntensityMap:_e,transmission:Q,transmissionMap:qe,thicknessMap:Ce,gradientMap:at,opaque:b.transparent===!1&&b.blending===_n&&b.alphaToCoverage===!1,alphaMap:L,alphaTest:he,alphaHash:z,combine:b.combine,mapUv:Ae&&g(b.map.channel),aoMapUv:Me&&g(b.aoMap.channel),lightMapUv:Oe&&g(b.lightMap.channel),bumpMapUv:we&&g(b.bumpMap.channel),normalMapUv:Xe&&g(b.normalMap.channel),displacementMapUv:De&&g(b.displacementMap.channel),emissiveMapUv:ze&&g(b.emissiveMap.channel),metalnessMapUv:pt&&g(b.metalnessMap.channel),roughnessMapUv:A&&g(b.roughnessMap.channel),anisotropyMapUv:Le&&g(b.anisotropyMap.channel),clearcoatMapUv:Te&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&g(b.sheenRoughnessMap.channel),specularMapUv:Se&&g(b.specularMap.channel),specularColorMapUv:xe&&g(b.specularColorMap.channel),specularIntensityMapUv:_e&&g(b.specularIntensityMap.channel),transmissionMapUv:qe&&g(b.transmissionMap.channel),thicknessMapUv:Ce&&g(b.thicknessMap.channel),alphaMapUv:L&&g(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Xe||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Ae||L),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ve,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&J.length>0,shadowMapType:t.shadowMap.type,toneMapping:ce,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===it,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Dr,flipSided:b.side===ar,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:le&&b.extensions.derivatives===!0,extensionFragDepth:le&&b.extensions.fragDepth===!0,extensionDrawBuffers:le&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:le&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function _(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const J in b.defines)R.push(J),R.push(b.defines[J]);return b.isRawShaderMaterial===!1&&(v(R,b),E(R,b),R.push(t.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function v(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function E(b,R){s.disableAll(),R.isWebGL2&&s.enable(0),R.supportsVertexTextures&&s.enable(1),R.instancing&&s.enable(2),R.instancingColor&&s.enable(3),R.instancingMorph&&s.enable(4),R.matcap&&s.enable(5),R.envMap&&s.enable(6),R.normalMapObjectSpace&&s.enable(7),R.normalMapTangentSpace&&s.enable(8),R.clearcoat&&s.enable(9),R.iridescence&&s.enable(10),R.alphaTest&&s.enable(11),R.vertexColors&&s.enable(12),R.vertexAlphas&&s.enable(13),R.vertexUv1s&&s.enable(14),R.vertexUv2s&&s.enable(15),R.vertexUv3s&&s.enable(16),R.vertexTangents&&s.enable(17),R.anisotropy&&s.enable(18),R.alphaHash&&s.enable(19),R.batching&&s.enable(20),b.push(s.mask),s.disableAll(),R.fog&&s.enable(0),R.useFog&&s.enable(1),R.flatShading&&s.enable(2),R.logarithmicDepthBuffer&&s.enable(3),R.skinning&&s.enable(4),R.morphTargets&&s.enable(5),R.morphNormals&&s.enable(6),R.morphColors&&s.enable(7),R.premultipliedAlpha&&s.enable(8),R.shadowMapEnabled&&s.enable(9),R.useLegacyLights&&s.enable(10),R.doubleSided&&s.enable(11),R.flipSided&&s.enable(12),R.useDepthPacking&&s.enable(13),R.dithering&&s.enable(14),R.transmission&&s.enable(15),R.sheen&&s.enable(16),R.opaque&&s.enable(17),R.pointsUvs&&s.enable(18),R.decodeVideoTexture&&s.enable(19),R.alphaToCoverage&&s.enable(20),b.push(s.mask)}function C(b){const R=y[b.type];let J;if(R){const ee=Wr[R];J=l1.clone(ee.uniforms)}else J=b.uniforms;return J}function T(b,R){let J;for(let ee=0,N=d.length;ee<N;ee++){const Y=d[ee];if(Y.cacheKey===R){J=Y,++J.usedTimes;break}}return J===void 0&&(J=new wE(t,R,b,a),d.push(J)),J}function w(b){if(--b.usedTimes===0){const R=d.indexOf(b);d[R]=d[d.length-1],d.pop(),b.destroy()}}function P(b){l.remove(b)}function q(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:C,acquireProgram:T,releaseProgram:w,releaseShaderCache:P,programs:d,dispose:q}}function LE(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function r(a){t.delete(a)}function i(a,o,s){t.get(a)[o]=s}function n(){t=new WeakMap}return{get:e,remove:r,update:i,dispose:n}}function PE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qf(){const t=[];let e=0;const r=[],i=[],n=[];function a(){e=0,r.length=0,i.length=0,n.length=0}function o(h,p,m,x,y,g){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:p,material:m,groupOrder:x,renderOrder:h.renderOrder,z:y,group:g},t[e]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=m,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=y,u.group=g),e++,u}function s(h,p,m,x,y,g){const u=o(h,p,m,x,y,g);m.transmission>0?i.push(u):m.transparent===!0?n.push(u):r.push(u)}function l(h,p,m,x,y,g){const u=o(h,p,m,x,y,g);m.transmission>0?i.unshift(u):m.transparent===!0?n.unshift(u):r.unshift(u)}function c(h,p){r.length>1&&r.sort(h||PE),i.length>1&&i.sort(p||Jf),n.length>1&&n.sort(p||Jf)}function d(){for(let h=e,p=t.length;h<p;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:r,transmissive:i,transparent:n,init:a,push:s,unshift:l,finish:d,sort:c}}function NE(){let t=new WeakMap;function e(i,n){const a=t.get(i);let o;return a===void 0?(o=new Qf,t.set(i,[o])):n>=a.length?(o=new Qf,a.push(o)):o=a[n],o}function r(){t=new WeakMap}return{get:e,dispose:r}}function FE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new U,color:new Ge};break;case"SpotLight":r={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":r={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":r={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=r,r}}}function DE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=r,r}}}let UE=0;function IE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kE(t,e){const r=new FE,i=DE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new U);const a=new U,o=new ut,s=new ut;function l(d,h){let p=0,m=0,x=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let y=0,g=0,u=0,_=0,v=0,E=0,C=0,T=0,w=0,P=0,q=0;d.sort(IE);const b=h===!0?Math.PI:1;for(let J=0,ee=d.length;J<ee;J++){const N=d[J],Y=N.color,W=N.intensity,X=N.distance,F=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=Y.r*W*b,m+=Y.g*W*b,x+=Y.b*W*b;else if(N.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(N.sh.coefficients[k],W);q++}else if(N.isDirectionalLight){const k=r.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*b),N.castShadow){const V=N.shadow,$=i.get(N);$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,n.directionalShadow[y]=$,n.directionalShadowMap[y]=F,n.directionalShadowMatrix[y]=N.shadow.matrix,E++}n.directional[y]=k,y++}else if(N.isSpotLight){const k=r.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(Y).multiplyScalar(W*b),k.distance=X,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,n.spot[u]=k;const V=N.shadow;if(N.map&&(n.spotLightMap[w]=N.map,w++,V.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[u]=V.matrix,N.castShadow){const $=i.get(N);$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,n.spotShadow[u]=$,n.spotShadowMap[u]=F,T++}u++}else if(N.isRectAreaLight){const k=r.get(N);k.color.copy(Y).multiplyScalar(W),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=k,_++}else if(N.isPointLight){const k=r.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*b),k.distance=N.distance,k.decay=N.decay,N.castShadow){const V=N.shadow,$=i.get(N);$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,$.shadowCameraNear=V.camera.near,$.shadowCameraFar=V.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=N.shadow.matrix,C++}n.point[g]=k,g++}else if(N.isHemisphereLight){const k=r.get(N);k.skyColor.copy(N.color).multiplyScalar(W*b),k.groundColor.copy(N.groundColor).multiplyScalar(W*b),n.hemi[v]=k,v++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=x;const R=n.hash;(R.directionalLength!==y||R.pointLength!==g||R.spotLength!==u||R.rectAreaLength!==_||R.hemiLength!==v||R.numDirectionalShadows!==E||R.numPointShadows!==C||R.numSpotShadows!==T||R.numSpotMaps!==w||R.numLightProbes!==q)&&(n.directional.length=y,n.spot.length=u,n.rectArea.length=_,n.point.length=g,n.hemi.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=T+w-P,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=q,R.directionalLength=y,R.pointLength=g,R.spotLength=u,R.rectAreaLength=_,R.hemiLength=v,R.numDirectionalShadows=E,R.numPointShadows=C,R.numSpotShadows=T,R.numSpotMaps=w,R.numLightProbes=q,n.version=UE++)}function c(d,h){let p=0,m=0,x=0,y=0,g=0;const u=h.matrixWorldInverse;for(let _=0,v=d.length;_<v;_++){const E=d[_];if(E.isDirectionalLight){const C=n.directional[p];C.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(u),p++}else if(E.isSpotLight){const C=n.spot[x];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(u),x++}else if(E.isRectAreaLight){const C=n.rectArea[y];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),s.identity(),o.copy(E.matrixWorld),o.premultiply(u),s.extractRotation(o),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),y++}else if(E.isPointLight){const C=n.point[m];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){const C=n.hemi[g];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(u),g++}}}return{setup:l,setupView:c,state:n}}function em(t,e){const r=new kE(t,e),i=[],n=[];function a(){i.length=0,n.length=0}function o(d){i.push(d)}function s(d){n.push(d)}function l(d){r.setup(i,d)}function c(d){r.setupView(i,d)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:r},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function OE(t,e){let r=new WeakMap;function i(a,o=0){const s=r.get(a);let l;return s===void 0?(l=new em(t,e),r.set(a,[l])):o>=s.length?(l=new em(t,e),s.push(l)):l=s[o],l}function n(){r=new WeakMap}return{get:i,dispose:n}}class zE extends Na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ny,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BE extends Na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GE(t,e,r){let i=new sh;const n=new We,a=new We,o=new st,s=new zE({depthPacking:Fy}),l=new BE,c={},d=r.maxTextureSize,h={[Xi]:ar,[ar]:Xi,[Dr]:Dr},p=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:jE,fragmentShader:HE}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const x=new Tr;x.setAttribute("position",new Mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new er(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rv;let u=this.type;this.render=function(T,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const q=t.getRenderTarget(),b=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),J=t.state;J.setBlending(ji),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ee=u!==ii&&this.type===ii,N=u===ii&&this.type!==ii;for(let Y=0,W=T.length;Y<W;Y++){const X=T[Y],F=X.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;n.copy(F.mapSize);const k=F.getFrameExtents();if(n.multiply(k),a.copy(F.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(a.x=Math.floor(d/k.x),n.x=a.x*k.x,F.mapSize.x=a.x),n.y>d&&(a.y=Math.floor(d/k.y),n.y=a.y*k.y,F.mapSize.y=a.y)),F.map===null||ee===!0||N===!0){const $=this.type!==ii?{minFilter:Wt,magFilter:Wt}:{};F.map!==null&&F.map.dispose(),F.map=new An(n.x,n.y,$),F.map.texture.name=X.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const V=F.getViewportCount();for(let $=0;$<V;$++){const ne=F.getViewport($);o.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),J.viewport(o),F.updateMatrices(X,$),i=F.getFrustum(),E(w,P,F.camera,X,this.type)}F.isPointLightShadow!==!0&&this.type===ii&&_(F,P),F.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(q,b,R)};function _(T,w){const P=e.update(y);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new An(n.x,n.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,P,p,y,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,P,m,y,null)}function v(T,w,P,q){let b=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)b=R;else if(b=P.isPointLight===!0?l:s,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const J=b.uuid,ee=w.uuid;let N=c[J];N===void 0&&(N={},c[J]=N);let Y=N[ee];Y===void 0&&(Y=b.clone(),N[ee]=Y,w.addEventListener("dispose",C)),b=Y}if(b.visible=w.visible,b.wireframe=w.wireframe,q===ii?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const J=t.properties.get(b);J.light=P}return b}function E(T,w,P,q,b){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===ii)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const J=e.update(T),ee=T.material;if(Array.isArray(ee)){const N=J.groups;for(let Y=0,W=N.length;Y<W;Y++){const X=N[Y],F=ee[X.materialIndex];if(F&&F.visible){const k=v(T,F,q,b);T.onBeforeShadow(t,T,w,P,J,k,X),t.renderBufferDirect(P,null,J,k,T,X),T.onAfterShadow(t,T,w,P,J,k,X)}}}else if(ee.visible){const N=v(T,ee,q,b);T.onBeforeShadow(t,T,w,P,J,N,null),t.renderBufferDirect(P,null,J,N,T,null),T.onAfterShadow(t,T,w,P,J,N,null)}}const R=T.children;for(let J=0,ee=R.length;J<ee;J++)E(R[J],w,P,q,b)}function C(T){T.target.removeEventListener("dispose",C);for(const w in c){const P=c[w],q=T.target.uuid;q in P&&(P[q].dispose(),delete P[q])}}}function WE(t,e,r){const i=r.isWebGL2;function n(){let L=!1;const he=new st;let z=null;const le=new st(0,0,0,0);return{setMask:function(ce){z!==ce&&!L&&(t.colorMask(ce,ce,ce,ce),z=ce)},setLocked:function(ce){L=ce},setClear:function(ce,$e,Qe,Rt,mr){mr===!0&&(ce*=Rt,$e*=Rt,Qe*=Rt),he.set(ce,$e,Qe,Rt),le.equals(he)===!1&&(t.clearColor(ce,$e,Qe,Rt),le.copy(he))},reset:function(){L=!1,z=null,le.set(-1,0,0,0)}}}function a(){let L=!1,he=null,z=null,le=null;return{setTest:function(ce){ce?fe(t.DEPTH_TEST):Ve(t.DEPTH_TEST)},setMask:function(ce){he!==ce&&!L&&(t.depthMask(ce),he=ce)},setFunc:function(ce){if(z!==ce){switch(ce){case ly:t.depthFunc(t.NEVER);break;case cy:t.depthFunc(t.ALWAYS);break;case uy:t.depthFunc(t.LESS);break;case xl:t.depthFunc(t.LEQUAL);break;case dy:t.depthFunc(t.EQUAL);break;case hy:t.depthFunc(t.GEQUAL);break;case py:t.depthFunc(t.GREATER);break;case fy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=ce}},setLocked:function(ce){L=ce},setClear:function(ce){le!==ce&&(t.clearDepth(ce),le=ce)},reset:function(){L=!1,he=null,z=null,le=null}}}function o(){let L=!1,he=null,z=null,le=null,ce=null,$e=null,Qe=null,Rt=null,mr=null;return{setTest:function(et){L||(et?fe(t.STENCIL_TEST):Ve(t.STENCIL_TEST))},setMask:function(et){he!==et&&!L&&(t.stencilMask(et),he=et)},setFunc:function(et,jt,Br){(z!==et||le!==jt||ce!==Br)&&(t.stencilFunc(et,jt,Br),z=et,le=jt,ce=Br)},setOp:function(et,jt,Br){($e!==et||Qe!==jt||Rt!==Br)&&(t.stencilOp(et,jt,Br),$e=et,Qe=jt,Rt=Br)},setLocked:function(et){L=et},setClear:function(et){mr!==et&&(t.clearStencil(et),mr=et)},reset:function(){L=!1,he=null,z=null,le=null,ce=null,$e=null,Qe=null,Rt=null,mr=null}}}const s=new n,l=new a,c=new o,d=new WeakMap,h=new WeakMap;let p={},m={},x=new WeakMap,y=[],g=null,u=!1,_=null,v=null,E=null,C=null,T=null,w=null,P=null,q=new Ge(0,0,0),b=0,R=!1,J=null,ee=null,N=null,Y=null,W=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=k>=2);let $=null,ne={};const ve=t.getParameter(t.SCISSOR_BOX),B=t.getParameter(t.VIEWPORT),re=new st().fromArray(ve),Z=new st().fromArray(B);function pe(L,he,z,le){const ce=new Uint8Array(4),$e=t.createTexture();t.bindTexture(L,$e),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<z;Qe++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(he,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(he+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return $e}const ge={};ge[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(t.DEPTH_TEST),l.setFunc(xl),De(!1),ze(Np),fe(t.CULL_FACE),we(ji);function fe(L){p[L]!==!0&&(t.enable(L),p[L]=!0)}function Ve(L){p[L]!==!1&&(t.disable(L),p[L]=!1)}function Ae(L,he){return m[L]!==he?(t.bindFramebuffer(L,he),m[L]=he,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=he),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=he)),!0):!1}function I(L,he){let z=y,le=!1;if(L){z=x.get(he),z===void 0&&(z=[],x.set(he,z));const ce=L.textures;if(z.length!==ce.length||z[0]!==t.COLOR_ATTACHMENT0){for(let $e=0,Qe=ce.length;$e<Qe;$e++)z[$e]=t.COLOR_ATTACHMENT0+$e;z.length=ce.length,le=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,le=!0);if(le)if(r.isWebGL2)t.drawBuffers(z);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function At(L){return g!==L?(t.useProgram(L),g=L,!0):!1}const Me={[hn]:t.FUNC_ADD,[q_]:t.FUNC_SUBTRACT,[Y_]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[Ip]=t.MIN,Me[kp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Me[Ip]=L.MIN_EXT,Me[kp]=L.MAX_EXT)}const Oe={[K_]:t.ZERO,[$_]:t.ONE,[Z_]:t.SRC_COLOR,[Zu]:t.SRC_ALPHA,[iy]:t.SRC_ALPHA_SATURATE,[ty]:t.DST_COLOR,[Q_]:t.DST_ALPHA,[J_]:t.ONE_MINUS_SRC_COLOR,[Ju]:t.ONE_MINUS_SRC_ALPHA,[ry]:t.ONE_MINUS_DST_COLOR,[ey]:t.ONE_MINUS_DST_ALPHA,[ny]:t.CONSTANT_COLOR,[ay]:t.ONE_MINUS_CONSTANT_COLOR,[oy]:t.CONSTANT_ALPHA,[sy]:t.ONE_MINUS_CONSTANT_ALPHA};function we(L,he,z,le,ce,$e,Qe,Rt,mr,et){if(L===ji){u===!0&&(Ve(t.BLEND),u=!1);return}if(u===!1&&(fe(t.BLEND),u=!0),L!==X_){if(L!==_||et!==R){if((v!==hn||T!==hn)&&(t.blendEquation(t.FUNC_ADD),v=hn,T=hn),et)switch(L){case _n:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fp:t.blendFunc(t.ONE,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case _n:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Up:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,C=null,w=null,P=null,q.set(0,0,0),b=0,_=L,R=et}return}ce=ce||he,$e=$e||z,Qe=Qe||le,(he!==v||ce!==T)&&(t.blendEquationSeparate(Me[he],Me[ce]),v=he,T=ce),(z!==E||le!==C||$e!==w||Qe!==P)&&(t.blendFuncSeparate(Oe[z],Oe[le],Oe[$e],Oe[Qe]),E=z,C=le,w=$e,P=Qe),(Rt.equals(q)===!1||mr!==b)&&(t.blendColor(Rt.r,Rt.g,Rt.b,mr),q.copy(Rt),b=mr),_=L,R=!1}function Xe(L,he){L.side===Dr?Ve(t.CULL_FACE):fe(t.CULL_FACE);let z=L.side===ar;he&&(z=!z),De(z),L.blending===_n&&L.transparent===!1?we(ji):we(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),s.setMask(L.colorWrite);const le=L.stencilWrite;c.setTest(le),le&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),A(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){J!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),J=L)}function ze(L){L!==G_?(fe(t.CULL_FACE),L!==ee&&(L===Np?t.cullFace(t.BACK):L===W_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ve(t.CULL_FACE),ee=L}function pt(L){L!==N&&(F&&t.lineWidth(L),N=L)}function A(L,he,z){L?(fe(t.POLYGON_OFFSET_FILL),(Y!==he||W!==z)&&(t.polygonOffset(he,z),Y=he,W=z)):Ve(t.POLYGON_OFFSET_FILL)}function S(L){L?fe(t.SCISSOR_TEST):Ve(t.SCISSOR_TEST)}function G(L){L===void 0&&(L=t.TEXTURE0+X-1),$!==L&&(t.activeTexture(L),$=L)}function K(L,he,z){z===void 0&&($===null?z=t.TEXTURE0+X-1:z=$);let le=ne[z];le===void 0&&(le={type:void 0,texture:void 0},ne[z]=le),(le.type!==L||le.texture!==he)&&($!==z&&(t.activeTexture(z),$=z),t.bindTexture(L,he||ge[L]),le.type=L,le.texture=he)}function ie(){const L=ne[$];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(L){re.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),re.copy(L))}function _e(L){Z.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function qe(L,he){let z=h.get(he);z===void 0&&(z=new WeakMap,h.set(he,z));let le=z.get(L);le===void 0&&(le=t.getUniformBlockIndex(he,L.name),z.set(L,le))}function Ce(L,he){const z=h.get(he).get(L);d.get(he)!==z&&(t.uniformBlockBinding(he,z,L.__bindingPointIndex),d.set(he,z))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},$=null,ne={},m={},x=new WeakMap,y=[],g=null,u=!1,_=null,v=null,E=null,C=null,T=null,w=null,P=null,q=new Ge(0,0,0),b=0,R=!1,J=null,ee=null,N=null,Y=null,W=null,re.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:fe,disable:Ve,bindFramebuffer:Ae,drawBuffers:I,useProgram:At,setBlending:we,setMaterial:Xe,setFlipSided:De,setCullFace:ze,setLineWidth:pt,setPolygonOffset:A,setScissorTest:S,activeTexture:G,bindTexture:K,unbindTexture:ie,compressedTexImage2D:Q,compressedTexImage3D:Le,texImage2D:Be,texImage3D:Se,updateUBOMapping:qe,uniformBlockBinding:Ce,texStorage2D:ae,texStorage3D:gt,texSubImage2D:Te,texSubImage3D:se,compressedTexSubImage2D:de,compressedTexSubImage3D:Ue,scissor:xe,viewport:_e,reset:at}}function VE(t,e,r,i,n,a,o){const s=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new We,h=new WeakMap;let p;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return x?new OffscreenCanvas(A,S):Do("canvas")}function g(A,S,G,K){let ie=1;const Q=pt(A);if((Q.width>K||Q.height>K)&&(ie=K/Math.max(Q.width,Q.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Le=S?ad:Math.floor,Te=Le(ie*Q.width),se=Le(ie*Q.height);p===void 0&&(p=y(Te,se));const de=G?y(Te,se):p;return de.width=Te,de.height=se,de.getContext("2d").drawImage(A,0,0,Te,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Te+"x"+se+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function u(A){const S=pt(A);return ff(S.width)&&ff(S.height)}function _(A){return s?!1:A.wrapS!==Ur||A.wrapT!==Ur||A.minFilter!==Wt&&A.minFilter!==Zt}function v(A,S){return A.generateMipmaps&&S&&A.minFilter!==Wt&&A.minFilter!==Zt}function E(A){t.generateMipmap(A)}function C(A,S,G,K,ie=!1){if(s===!1)return S;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=S;if(S===t.RED&&(G===t.FLOAT&&(Q=t.R32F),G===t.HALF_FLOAT&&(Q=t.R16F),G===t.UNSIGNED_BYTE&&(Q=t.R8)),S===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.R8UI),G===t.UNSIGNED_SHORT&&(Q=t.R16UI),G===t.UNSIGNED_INT&&(Q=t.R32UI),G===t.BYTE&&(Q=t.R8I),G===t.SHORT&&(Q=t.R16I),G===t.INT&&(Q=t.R32I)),S===t.RG&&(G===t.FLOAT&&(Q=t.RG32F),G===t.HALF_FLOAT&&(Q=t.RG16F),G===t.UNSIGNED_BYTE&&(Q=t.RG8)),S===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RG8UI),G===t.UNSIGNED_SHORT&&(Q=t.RG16UI),G===t.UNSIGNED_INT&&(Q=t.RG32UI),G===t.BYTE&&(Q=t.RG8I),G===t.SHORT&&(Q=t.RG16I),G===t.INT&&(Q=t.RG32I)),S===t.RGBA){const Le=ie?_l:Je.getTransfer(K);G===t.FLOAT&&(Q=t.RGBA32F),G===t.HALF_FLOAT&&(Q=t.RGBA16F),G===t.UNSIGNED_BYTE&&(Q=Le===it?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function T(A,S,G){return v(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==Wt&&A.minFilter!==Zt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){return A===Wt||A===Op||A===Ga?t.NEAREST:t.LINEAR}function P(A){const S=A.target;S.removeEventListener("dispose",P),b(S),S.isVideoTexture&&h.delete(S)}function q(A){const S=A.target;S.removeEventListener("dispose",q),J(S)}function b(A){const S=i.get(A);if(S.__webglInit===void 0)return;const G=A.source,K=m.get(G);if(K){const ie=K[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(A),Object.keys(K).length===0&&m.delete(G)}i.remove(A)}function R(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const G=A.source,K=m.get(G);delete K[S.__cacheKey],o.memory.textures--}function J(A){const S=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let ie=0;ie<S.__webglFramebuffer[K].length;ie++)t.deleteFramebuffer(S.__webglFramebuffer[K][ie]);else t.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)t.deleteFramebuffer(S.__webglFramebuffer[K]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=A.textures;for(let K=0,ie=G.length;K<ie;K++){const Q=i.get(G[K]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(G[K])}i.remove(A)}let ee=0;function N(){ee=0}function Y(){const A=ee;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),ee+=1,A}function W(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function X(A,S){const G=i.get(A);if(A.isVideoTexture&&De(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,A,S);return}}r.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+S)}function F(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Z(G,A,S);return}r.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+S)}function k(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Z(G,A,S);return}r.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+S)}function V(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){pe(G,A,S);return}r.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+S)}const $={[td]:t.REPEAT,[Ur]:t.CLAMP_TO_EDGE,[rd]:t.MIRRORED_REPEAT},ne={[Wt]:t.NEAREST,[Op]:t.NEAREST_MIPMAP_NEAREST,[Ga]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Sc]:t.LINEAR_MIPMAP_NEAREST,[Li]:t.LINEAR_MIPMAP_LINEAR},ve={[Uy]:t.NEVER,[jy]:t.ALWAYS,[Iy]:t.LESS,[Ov]:t.LEQUAL,[ky]:t.EQUAL,[By]:t.GEQUAL,[Oy]:t.GREATER,[zy]:t.NOTEQUAL};function B(A,S,G){if(S.type===oi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Zt||S.magFilter===Sc||S.magFilter===Ga||S.magFilter===Li||S.minFilter===Zt||S.minFilter===Sc||S.minFilter===Ga||S.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),G?(t.texParameteri(A,t.TEXTURE_WRAP_S,$[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,$[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,$[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ne[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ne[S.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Ur||S.wrapT!==Ur)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(S.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==Wt&&S.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==Ga&&S.minFilter!==Li||S.type===oi&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===Fo&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function re(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",P));const K=S.source;let ie=m.get(K);ie===void 0&&(ie={},m.set(K,ie));const Q=W(S);if(Q!==A.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[Q].usedTimes++;const Le=ie[A.__cacheKey];Le!==void 0&&(ie[A.__cacheKey].usedTimes--,Le.usedTimes===0&&R(S)),A.__cacheKey=Q,A.__webglTexture=ie[Q].texture}return G}function Z(A,S,G){let K=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=t.TEXTURE_3D);const ie=re(A,S),Q=S.source;r.bindTexture(K,A.__webglTexture,t.TEXTURE0+G);const Le=i.get(Q);if(Q.version!==Le.__version||ie===!0){r.activeTexture(t.TEXTURE0+G);const Te=Je.getPrimaries(Je.workingColorSpace),se=S.colorSpace===Ai?null:Je.getPrimaries(S.colorSpace),de=S.colorSpace===Ai||Te===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ue=_(S)&&u(S.image)===!1;let ae=g(S.image,Ue,!1,n.maxTextureSize);ae=ze(S,ae);const gt=u(ae)||s,Be=a.convert(S.format,S.colorSpace);let Se=a.convert(S.type),xe=C(S.internalFormat,Be,Se,S.colorSpace,S.isVideoTexture);B(K,S,gt);let _e;const qe=S.mipmaps,Ce=s&&S.isVideoTexture!==!0&&xe!==Iv,at=Le.__version===void 0||ie===!0,L=Q.dataReady,he=T(S,ae,gt);if(S.isDepthTexture)xe=t.DEPTH_COMPONENT,s?S.type===oi?xe=t.DEPTH_COMPONENT32F:S.type===Pi?xe=t.DEPTH_COMPONENT24:S.type===yn?xe=t.DEPTH24_STENCIL8:xe=t.DEPTH_COMPONENT16:S.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===bn&&xe===t.DEPTH_COMPONENT&&S.type!==ah&&S.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Pi,Se=a.convert(S.type)),S.format===Ta&&xe===t.DEPTH_COMPONENT&&(xe=t.DEPTH_STENCIL,S.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=yn,Se=a.convert(S.type))),at&&(Ce?r.texStorage2D(t.TEXTURE_2D,1,xe,ae.width,ae.height):r.texImage2D(t.TEXTURE_2D,0,xe,ae.width,ae.height,0,Be,Se,null));else if(S.isDataTexture)if(qe.length>0&&gt){Ce&&at&&r.texStorage2D(t.TEXTURE_2D,he,xe,qe[0].width,qe[0].height);for(let z=0,le=qe.length;z<le;z++)_e=qe[z],Ce?L&&r.texSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,Be,Se,_e.data):r.texImage2D(t.TEXTURE_2D,z,xe,_e.width,_e.height,0,Be,Se,_e.data);S.generateMipmaps=!1}else Ce?(at&&r.texStorage2D(t.TEXTURE_2D,he,xe,ae.width,ae.height),L&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,Be,Se,ae.data)):r.texImage2D(t.TEXTURE_2D,0,xe,ae.width,ae.height,0,Be,Se,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ce&&at&&r.texStorage3D(t.TEXTURE_2D_ARRAY,he,xe,qe[0].width,qe[0].height,ae.depth);for(let z=0,le=qe.length;z<le;z++)_e=qe[z],S.format!==Ir?Be!==null?Ce?L&&r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,ae.depth,Be,_e.data,0,0):r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,xe,_e.width,_e.height,ae.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?L&&r.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,ae.depth,Be,Se,_e.data):r.texImage3D(t.TEXTURE_2D_ARRAY,z,xe,_e.width,_e.height,ae.depth,0,Be,Se,_e.data)}else{Ce&&at&&r.texStorage2D(t.TEXTURE_2D,he,xe,qe[0].width,qe[0].height);for(let z=0,le=qe.length;z<le;z++)_e=qe[z],S.format!==Ir?Be!==null?Ce?L&&r.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,Be,_e.data):r.compressedTexImage2D(t.TEXTURE_2D,z,xe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?L&&r.texSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,Be,Se,_e.data):r.texImage2D(t.TEXTURE_2D,z,xe,_e.width,_e.height,0,Be,Se,_e.data)}else if(S.isDataArrayTexture)Ce?(at&&r.texStorage3D(t.TEXTURE_2D_ARRAY,he,xe,ae.width,ae.height,ae.depth),L&&r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Be,Se,ae.data)):r.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,ae.width,ae.height,ae.depth,0,Be,Se,ae.data);else if(S.isData3DTexture)Ce?(at&&r.texStorage3D(t.TEXTURE_3D,he,xe,ae.width,ae.height,ae.depth),L&&r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Be,Se,ae.data)):r.texImage3D(t.TEXTURE_3D,0,xe,ae.width,ae.height,ae.depth,0,Be,Se,ae.data);else if(S.isFramebufferTexture){if(at)if(Ce)r.texStorage2D(t.TEXTURE_2D,he,xe,ae.width,ae.height);else{let z=ae.width,le=ae.height;for(let ce=0;ce<he;ce++)r.texImage2D(t.TEXTURE_2D,ce,xe,z,le,0,Be,Se,null),z>>=1,le>>=1}}else if(qe.length>0&&gt){if(Ce&&at){const z=pt(qe[0]);r.texStorage2D(t.TEXTURE_2D,he,xe,z.width,z.height)}for(let z=0,le=qe.length;z<le;z++)_e=qe[z],Ce?L&&r.texSubImage2D(t.TEXTURE_2D,z,0,0,Be,Se,_e):r.texImage2D(t.TEXTURE_2D,z,xe,Be,Se,_e);S.generateMipmaps=!1}else if(Ce){if(at){const z=pt(ae);r.texStorage2D(t.TEXTURE_2D,he,xe,z.width,z.height)}L&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,Be,Se,ae)}else r.texImage2D(t.TEXTURE_2D,0,xe,Be,Se,ae);v(S,gt)&&E(K),Le.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function pe(A,S,G){if(S.image.length!==6)return;const K=re(A,S),ie=S.source;r.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+G);const Q=i.get(ie);if(ie.version!==Q.__version||K===!0){r.activeTexture(t.TEXTURE0+G);const Le=Je.getPrimaries(Je.workingColorSpace),Te=S.colorSpace===Ai?null:Je.getPrimaries(S.colorSpace),se=S.colorSpace===Ai||Le===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const de=S.isCompressedTexture||S.image[0].isCompressedTexture,Ue=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let z=0;z<6;z++)!de&&!Ue?ae[z]=g(S.image[z],!1,!0,n.maxCubemapSize):ae[z]=Ue?S.image[z].image:S.image[z],ae[z]=ze(S,ae[z]);const gt=ae[0],Be=u(gt)||s,Se=a.convert(S.format,S.colorSpace),xe=a.convert(S.type),_e=C(S.internalFormat,Se,xe,S.colorSpace),qe=s&&S.isVideoTexture!==!0,Ce=Q.__version===void 0||K===!0,at=ie.dataReady;let L=T(S,gt,Be);B(t.TEXTURE_CUBE_MAP,S,Be);let he;if(de){qe&&Ce&&r.texStorage2D(t.TEXTURE_CUBE_MAP,L,_e,gt.width,gt.height);for(let z=0;z<6;z++){he=ae[z].mipmaps;for(let le=0;le<he.length;le++){const ce=he[le];S.format!==Ir?Se!==null?qe?at&&r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le,0,0,ce.width,ce.height,Se,ce.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le,_e,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?at&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le,0,0,ce.width,ce.height,Se,xe,ce.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le,_e,ce.width,ce.height,0,Se,xe,ce.data)}}}else{if(he=S.mipmaps,qe&&Ce){he.length>0&&L++;const z=pt(ae[0]);r.texStorage2D(t.TEXTURE_CUBE_MAP,L,_e,z.width,z.height)}for(let z=0;z<6;z++)if(Ue){qe?at&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ae[z].width,ae[z].height,Se,xe,ae[z].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,_e,ae[z].width,ae[z].height,0,Se,xe,ae[z].data);for(let le=0;le<he.length;le++){const ce=he[le].image[z].image;qe?at&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le+1,0,0,ce.width,ce.height,Se,xe,ce.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le+1,_e,ce.width,ce.height,0,Se,xe,ce.data)}}else{qe?at&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Se,xe,ae[z]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,_e,Se,xe,ae[z]);for(let le=0;le<he.length;le++){const ce=he[le];qe?at&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le+1,0,0,Se,xe,ce.image[z]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le+1,_e,Se,xe,ce.image[z])}}}v(S,Be)&&E(t.TEXTURE_CUBE_MAP),Q.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ge(A,S,G,K,ie,Q){const Le=a.convert(G.format,G.colorSpace),Te=a.convert(G.type),se=C(G.internalFormat,Le,Te,G.colorSpace);if(!i.get(S).__hasExternalTextures){const de=Math.max(1,S.width>>Q),Ue=Math.max(1,S.height>>Q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?r.texImage3D(ie,Q,se,de,Ue,S.depth,0,Le,Te,null):r.texImage2D(ie,Q,se,de,Ue,0,Le,Te,null)}r.bindFramebuffer(t.FRAMEBUFFER,A),Xe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ie,i.get(G).__webglTexture,0,we(S)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ie,i.get(G).__webglTexture,Q),r.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(A,S,G){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let K=s===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||Xe(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===oi?K=t.DEPTH_COMPONENT32F:ie.type===Pi&&(K=t.DEPTH_COMPONENT24));const Q=we(S);Xe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,K,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,K,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,K,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const K=we(S);G&&Xe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,K,t.DEPTH24_STENCIL8,S.width,S.height):Xe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const K=S.textures;for(let ie=0;ie<K.length;ie++){const Q=K[ie],Le=a.convert(Q.format,Q.colorSpace),Te=a.convert(Q.type),se=C(Q.internalFormat,Le,Te,Q.colorSpace),de=we(S);G&&Xe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,se,S.width,S.height):Xe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,se,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,se,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ve(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const G=i.get(S.depthTexture).__webglTexture,K=we(S);if(S.depthTexture.format===bn)Xe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,G,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,G,0);else if(S.depthTexture.format===Ta)Xe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,G,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Ae(A){const S=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ve(S.__webglFramebuffer,A)}else if(G){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)r.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=t.createRenderbuffer(),fe(S.__webglDepthbuffer[K],A,!1)}else r.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),fe(S.__webglDepthbuffer,A,!1);r.bindFramebuffer(t.FRAMEBUFFER,null)}function I(A,S,G){const K=i.get(A);S!==void 0&&ge(K.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ae(A)}function At(A){const S=A.texture,G=i.get(A),K=i.get(S);A.addEventListener("dispose",q);const ie=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Le=ie.length>1,Te=u(A)||s;if(Le||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=S.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let se=0;se<6;se++)if(s&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[se]=[];for(let de=0;de<S.mipmaps.length;de++)G.__webglFramebuffer[se][de]=t.createFramebuffer()}else G.__webglFramebuffer[se]=t.createFramebuffer()}else{if(s&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)G.__webglFramebuffer[se]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Le)if(n.drawBuffers)for(let se=0,de=ie.length;se<de;se++){const Ue=i.get(ie[se]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&Xe(A)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let se=0;se<ie.length;se++){const de=ie[se];G.__webglColorRenderbuffer[se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[se]);const Ue=a.convert(de.format,de.colorSpace),ae=a.convert(de.type),gt=C(de.internalFormat,Ue,ae,de.colorSpace,A.isXRRenderTarget===!0),Be=we(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,gt,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,G.__webglColorRenderbuffer[se])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(G.__webglDepthRenderbuffer,A,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){r.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),B(t.TEXTURE_CUBE_MAP,S,Te);for(let se=0;se<6;se++)if(s&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ge(G.__webglFramebuffer[se][de],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else ge(G.__webglFramebuffer[se],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);v(S,Te)&&E(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Le){for(let se=0,de=ie.length;se<de;se++){const Ue=ie[se],ae=i.get(Ue);r.bindTexture(t.TEXTURE_2D,ae.__webglTexture),B(t.TEXTURE_2D,Ue,Te),ge(G.__webglFramebuffer,A,Ue,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,0),v(Ue,Te)&&E(t.TEXTURE_2D)}r.unbindTexture()}else{let se=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?se=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),r.bindTexture(se,K.__webglTexture),B(se,S,Te),s&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ge(G.__webglFramebuffer[de],A,S,t.COLOR_ATTACHMENT0,se,de);else ge(G.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,se,0);v(S,Te)&&E(se),r.unbindTexture()}A.depthBuffer&&Ae(A)}function Me(A){const S=u(A)||s,G=A.textures;for(let K=0,ie=G.length;K<ie;K++){const Q=G[K];if(v(Q,S)){const Le=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(Q).__webglTexture;r.bindTexture(Le,Te),E(Le),r.unbindTexture()}}}function Oe(A){if(s&&A.samples>0&&Xe(A)===!1){const S=A.textures,G=A.width,K=A.height;let ie=t.COLOR_BUFFER_BIT;const Q=[],Le=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(A),se=S.length>1;if(se)for(let de=0;de<S.length;de++)r.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let de=0;de<S.length;de++){Q.push(t.COLOR_ATTACHMENT0+de),A.depthBuffer&&Q.push(Le);const Ue=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(Ue===!1&&(A.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),se&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[de]),Ue===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Le]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Le])),se){const ae=i.get(S[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,G,K,0,0,G,K,ie,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Q)}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),se)for(let de=0;de<S.length;de++){r.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,Te.__webglColorRenderbuffer[de]);const Ue=i.get(S[de]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Ue,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function we(A){return Math.min(n.maxSamples,A.samples)}function Xe(A){const S=i.get(A);return s&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function De(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ze(A,S){const G=A.colorSpace,K=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===id||G!==Zi&&G!==Ai&&(Je.getTransfer(G)===it?s===!1?e.has("EXT_sRGB")===!0&&K===Ir?(A.format=id,A.minFilter=Zt,A.generateMipmaps=!1):S=Bv.sRGBToLinear(S):(K!==Ir||ie!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(d.width=A.naturalWidth||A.width,d.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(d.width=A.displayWidth,d.height=A.displayHeight):(d.width=A.width,d.height=A.height),d}this.allocateTextureUnit=Y,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=F,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=I,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Xe}function XE(t,e,r){const i=r.isWebGL2;function n(a,o=Ai){let s;const l=Je.getTransfer(o);if(a===Gi)return t.UNSIGNED_BYTE;if(a===Pv)return t.UNSIGNED_SHORT_4_4_4_4;if(a===Nv)return t.UNSIGNED_SHORT_5_5_5_1;if(a===Ey)return t.BYTE;if(a===wy)return t.SHORT;if(a===ah)return t.UNSIGNED_SHORT;if(a===Lv)return t.INT;if(a===Pi)return t.UNSIGNED_INT;if(a===oi)return t.FLOAT;if(a===Fo)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Ty)return t.ALPHA;if(a===Ir)return t.RGBA;if(a===Ay)return t.LUMINANCE;if(a===Ry)return t.LUMINANCE_ALPHA;if(a===bn)return t.DEPTH_COMPONENT;if(a===Ta)return t.DEPTH_STENCIL;if(a===id)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Cy)return t.RED;if(a===Fv)return t.RED_INTEGER;if(a===Ly)return t.RG;if(a===Dv)return t.RG_INTEGER;if(a===Uv)return t.RGBA_INTEGER;if(a===Mc||a===Ec||a===wc||a===Tc)if(l===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===wc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===zp||a===Bp||a===jp||a===Hp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===zp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Bp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===jp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Hp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Iv)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Gp||a===Wp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Gp)return l===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Wp)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Vp||a===Xp||a===qp||a===Yp||a===Kp||a===$p||a===Zp||a===Jp||a===Qp||a===ef||a===tf||a===rf||a===nf||a===af)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Vp)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Xp)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===qp)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Yp)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Kp)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===$p)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Zp)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Jp)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Qp)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ef)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===tf)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===rf)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===nf)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===af)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ac||a===of||a===sf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Ac)return l===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===sf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Py||a===lf||a===cf||a===uf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Ac)return s.COMPRESSED_RED_RGTC1_EXT;if(a===lf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===cf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===uf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===yn?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:n}}class qE extends cr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ca extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YE={type:"move"};class eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const i of e.hand.values())this._getHandJoint(r,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,i){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=r.getJointPose(y,i),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=r.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=r.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(YE)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const i=new ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[r.jointName]=i,e.add(i)}return e.joints[r.jointName]}}const KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$E=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,r,i){if(this.texture===null){const n=new Xt,a=e.properties.get(n);a.__webglTexture=r.texture,(r.depthNear!=i.depthNear||r.depthFar!=i.depthFar)&&(this.depthNear=r.depthNear,this.depthFar=r.depthFar),this.texture=n}}render(e,r){if(this.texture!==null){if(this.mesh===null){const i=r.cameras[0].viewport,n=new qi({extensions:{fragDepth:!0},vertexShader:KE,fragmentShader:$E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new er(new Wo(20,20),n)}e.render(this.mesh,r)}}reset(){this.texture=null,this.mesh=null}}class JE extends Pa{constructor(e,r){super();const i=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,d=null,h=null,p=null,m=null,x=null;const y=new ZE,g=r.getContextAttributes();let u=null,_=null;const v=[],E=[],C=new We;let T=null;const w=new cr;w.layers.enable(1),w.viewport=new st;const P=new cr;P.layers.enable(2),P.viewport=new st;const q=[w,P],b=new qE;b.layers.enable(1),b.layers.enable(2);let R=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let re=v[B];return re===void 0&&(re=new eu,v[B]=re),re.getTargetRaySpace()},this.getControllerGrip=function(B){let re=v[B];return re===void 0&&(re=new eu,v[B]=re),re.getGripSpace()},this.getHand=function(B){let re=v[B];return re===void 0&&(re=new eu,v[B]=re),re.getHandSpace()};function ee(B){const re=E.indexOf(B.inputSource);if(re===-1)return;const Z=v[re];Z!==void 0&&(Z.update(B.inputSource,B.frame,c||o),Z.dispatchEvent({type:B.type,data:B.inputSource}))}function N(){n.removeEventListener("select",ee),n.removeEventListener("selectstart",ee),n.removeEventListener("selectend",ee),n.removeEventListener("squeeze",ee),n.removeEventListener("squeezestart",ee),n.removeEventListener("squeezeend",ee),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",Y);for(let B=0;B<v.length;B++){const re=E[B];re!==null&&(E[B]=null,v[B].disconnect(re))}R=null,J=null,y.reset(),e.setRenderTarget(u),m=null,p=null,h=null,n=null,_=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(u=e.getRenderTarget(),n.addEventListener("select",ee),n.addEventListener("selectstart",ee),n.addEventListener("selectend",ee),n.addEventListener("squeeze",ee),n.addEventListener("squeezestart",ee),n.addEventListener("squeezeend",ee),n.addEventListener("end",N),n.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await r.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,r,re),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new An(m.framebufferWidth,m.framebufferHeight,{format:Ir,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,Z=null,pe=null;g.depth&&(pe=g.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,re=g.stencil?Ta:bn,Z=g.stencil?yn:Pi);const ge={colorFormat:r.RGBA8,depthFormat:pe,scaleFactor:a};h=new XRWebGLBinding(n,r),p=h.createProjectionLayer(ge),n.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),_=new An(p.textureWidth,p.textureHeight,{format:Ir,type:Gi,depthTexture:new Jv(p.textureWidth,p.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const fe=e.properties.get(_);fe.__ignoreDepthValues=p.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),ve.setContext(n),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function Y(B){for(let re=0;re<B.removed.length;re++){const Z=B.removed[re],pe=E.indexOf(Z);pe>=0&&(E[pe]=null,v[pe].disconnect(Z))}for(let re=0;re<B.added.length;re++){const Z=B.added[re];let pe=E.indexOf(Z);if(pe===-1){for(let fe=0;fe<v.length;fe++)if(fe>=E.length){E.push(Z),pe=fe;break}else if(E[fe]===null){E[fe]=Z,pe=fe;break}if(pe===-1)break}const ge=v[pe];ge&&ge.connect(Z)}}const W=new U,X=new U;function F(B,re,Z){W.setFromMatrixPosition(re.matrixWorld),X.setFromMatrixPosition(Z.matrixWorld);const pe=W.distanceTo(X),ge=re.projectionMatrix.elements,fe=Z.projectionMatrix.elements,Ve=ge[14]/(ge[10]-1),Ae=ge[14]/(ge[10]+1),I=(ge[9]+1)/ge[5],At=(ge[9]-1)/ge[5],Me=(ge[8]-1)/ge[0],Oe=(fe[8]+1)/fe[0],we=Ve*Me,Xe=Ve*Oe,De=pe/(-Me+Oe),ze=De*-Me;re.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ze),B.translateZ(De),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const pt=Ve+De,A=Ae+De,S=we-ze,G=Xe+(pe-ze),K=I*Ae/A*pt,ie=At*Ae/A*pt;B.projectionMatrix.makePerspective(S,G,K,ie,pt,A),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function k(B,re){re===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(re.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;y.texture!==null&&(B.near=y.depthNear,B.far=y.depthFar),b.near=P.near=w.near=B.near,b.far=P.far=w.far=B.far,(R!==b.near||J!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,J=b.far,w.near=R,w.far=J,P.near=R,P.far=J,w.updateProjectionMatrix(),P.updateProjectionMatrix(),B.updateProjectionMatrix());const re=B.parent,Z=b.cameras;k(b,re);for(let pe=0;pe<Z.length;pe++)k(Z[pe],re);Z.length===2?F(b,w,P):b.projectionMatrix.copy(w.projectionMatrix),V(B,b,re)};function V(B,re,Z){Z===null?B.matrix.copy(re.matrixWorld):(B.matrix.copy(Z.matrixWorld),B.matrix.invert(),B.matrix.multiply(re.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(re.projectionMatrix),B.projectionMatrixInverse.copy(re.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=nd*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(B){l=B,p!==null&&(p.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return y.texture!==null};let $=null;function ne(B,re){if(d=re.getViewerPose(c||o),x=re,d!==null){const Z=d.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let pe=!1;Z.length!==b.cameras.length&&(b.cameras.length=0,pe=!0);for(let fe=0;fe<Z.length;fe++){const Ve=Z[fe];let Ae=null;if(m!==null)Ae=m.getViewport(Ve);else{const At=h.getViewSubImage(p,Ve);Ae=At.viewport,fe===0&&(e.setRenderTargetTextures(_,At.colorTexture,p.ignoreDepthValues?void 0:At.depthStencilTexture),e.setRenderTarget(_))}let I=q[fe];I===void 0&&(I=new cr,I.layers.enable(fe),I.viewport=new st,q[fe]=I),I.matrix.fromArray(Ve.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Ve.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),fe===0&&(b.matrix.copy(I.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),pe===!0&&b.cameras.push(I)}const ge=n.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const fe=h.getDepthInformation(Z[0]);fe&&fe.isValid&&fe.texture&&y.init(e,fe,n.renderState)}}for(let Z=0;Z<v.length;Z++){const pe=E[Z],ge=v[Z];pe!==null&&ge!==void 0&&ge.update(pe,re,c||o)}y.render(e,b),$&&$(B,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),x=null}const ve=new Zv;ve.setAnimationLoop(ne),this.setAnimationLoop=function(B){$=B},this.dispose=function(){}}}const sn=new $r,QE=new ut;function e2(t,e){function r(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Yv(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function n(g,u,_,v,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(g,u):u.isMeshToonMaterial?(a(g,u),h(g,u)):u.isMeshPhongMaterial?(a(g,u),d(g,u)):u.isMeshStandardMaterial?(a(g,u),p(g,u),u.isMeshPhysicalMaterial&&m(g,u,E)):u.isMeshMatcapMaterial?(a(g,u),x(g,u)):u.isMeshDepthMaterial?a(g,u):u.isMeshDistanceMaterial?(a(g,u),y(g,u)):u.isMeshNormalMaterial?a(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&s(g,u)):u.isPointsMaterial?l(g,u,_,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,r(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,r(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,r(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===ar&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,r(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===ar&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,r(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,r(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,r(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const _=e.get(u),v=_.envMap,E=_.envMapRotation;if(v&&(g.envMap.value=v,sn.copy(E),sn.x*=-1,sn.y*=-1,sn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(sn.y*=-1,sn.z*=-1),g.envMapRotation.value.setFromMatrix4(QE.makeRotationFromEuler(sn)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap){g.lightMap.value=u.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=u.lightMapIntensity*C,r(u.lightMap,g.lightMapTransform)}u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,r(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,r(u.map,g.mapTransform))}function s(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,_,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*_,g.scale.value=v*.5,u.map&&(g.map.value=u.map,r(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,r(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,r(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,r(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function p(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,r(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,r(u.roughnessMap,g.roughnessMapTransform)),e.get(u).envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,_){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,r(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,r(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,r(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,r(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,r(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ar&&g.clearcoatNormalScale.value.negate())),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,r(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,r(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,r(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,r(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,r(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,r(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,r(u.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const _=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function t2(t,e,r,i){let n={},a={},o=[];const s=r.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const E=v.program;i.uniformBlockBinding(_,E)}function c(_,v){let E=n[_.id];E===void 0&&(x(_),E=d(_),n[_.id]=E,_.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(_,C);const T=e.render.frame;a[_.id]!==T&&(p(_),a[_.id]=T)}function d(_){const v=h();_.__bindingPointIndex=v;const E=t.createBuffer(),C=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function h(){for(let _=0;_<s;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const v=n[_.id],E=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,w=E.length;T<w;T++){const P=Array.isArray(E[T])?E[T]:[E[T]];for(let q=0,b=P.length;q<b;q++){const R=P[q];if(m(R,T,q,C)===!0){const J=R.__offset,ee=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let Y=0;Y<ee.length;Y++){const W=ee[Y],X=y(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,J+N,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,J,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,v,E,C){const T=_.value,w=v+"_"+E;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{const P=C[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function x(_){const v=_.uniforms;let E=0;const C=16;for(let w=0,P=v.length;w<P;w++){const q=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,R=q.length;b<R;b++){const J=q[b],ee=Array.isArray(J.value)?J.value:[J.value];for(let N=0,Y=ee.length;N<Y;N++){const W=ee[N],X=y(W),F=E%C;F!==0&&C-F<X.boundary&&(E+=C-F),J.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=E,E+=X.storage}}}const T=E%C;return T>0&&(E+=C-T),_.__size=E,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(n[v.id]),delete n[v.id],delete a[v.id]}function u(){for(const _ in n)t.deleteBuffer(n[_]);o=[],n={},a={}}return{bind:l,update:c,dispose:u}}class n0{constructor(e={}){const{canvas:r=Gy(),context:i=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),x=new Int32Array(4);let y=null,g=null;const u=[],_=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gr,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;const v=this;let E=!1,C=0,T=0,w=null,P=-1,q=null;const b=new st,R=new st;let J=null;const ee=new Ge(0);let N=0,Y=r.width,W=r.height,X=1,F=null,k=null;const V=new st(0,0,Y,W),$=new st(0,0,Y,W);let ne=!1;const ve=new sh;let B=!1,re=!1,Z=null;const pe=new ut,ge=new We,fe=new U,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return w===null?X:1}let I=i;function At(M,D){for(let j=0;j<M.length;j++){const H=M[j],O=r.getContext(H,D);if(O!==null)return O}return null}try{const M={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${ih}`),r.addEventListener("webglcontextlost",at,!1),r.addEventListener("webglcontextrestored",L,!1),r.addEventListener("webglcontextcreationerror",he,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),I=At(D,M),I===null)throw At(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Me,Oe,we,Xe,De,ze,pt,A,S,G,K,ie,Q,Le,Te,se,de,Ue,ae,gt,Be,Se,xe,_e;function qe(){Me=new sM(I),Oe=new eM(I,Me,e),Me.init(Oe),Se=new XE(I,Me,Oe),we=new WE(I,Me,Oe),Xe=new uM(I),De=new LE,ze=new VE(I,Me,we,De,Oe,Se,Xe),pt=new rM(v),A=new oM(v),S=new m1(I,Oe),xe=new JS(I,Me,S,Oe),G=new lM(I,S,Xe,xe),K=new fM(I,G,S,Xe),ae=new pM(I,Oe,ze),se=new tM(De),ie=new CE(v,pt,A,Me,Oe,xe,se),Q=new e2(v,De),Le=new NE,Te=new OE(Me,Oe),Ue=new ZS(v,pt,A,we,K,p,l),de=new GE(v,K,Oe),_e=new t2(I,Xe,Oe,we),gt=new QS(I,Me,Xe,Oe),Be=new cM(I,Me,Xe,Oe),Xe.programs=ie.programs,v.capabilities=Oe,v.extensions=Me,v.properties=De,v.renderLists=Le,v.shadowMap=de,v.state=we,v.info=Xe}qe();const Ce=new JE(v,I);this.xr=Ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Me.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Me.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(Y,W,!1))},this.getSize=function(M){return M.set(Y,W)},this.setSize=function(M,D,j=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,W=D,r.width=Math.floor(M*X),r.height=Math.floor(D*X),j===!0&&(r.style.width=M+"px",r.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Y*X,W*X).floor()},this.setDrawingBufferSize=function(M,D,j){Y=M,W=D,X=j,r.width=Math.floor(M*j),r.height=Math.floor(D*j),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(V)},this.setViewport=function(M,D,j,H){M.isVector4?V.set(M.x,M.y,M.z,M.w):V.set(M,D,j,H),we.viewport(b.copy(V).multiplyScalar(X).round())},this.getScissor=function(M){return M.copy($)},this.setScissor=function(M,D,j,H){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,D,j,H),we.scissor(R.copy($).multiplyScalar(X).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){we.setScissorTest(ne=M)},this.setOpaqueSort=function(M){F=M},this.setTransparentSort=function(M){k=M},this.getClearColor=function(M){return M.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(M=!0,D=!0,j=!0){let H=0;if(M){let O=!1;if(w!==null){const ue=w.texture.format;O=ue===Uv||ue===Dv||ue===Fv}if(O){const ue=w.texture.type,be=ue===Gi||ue===Pi||ue===ah||ue===yn||ue===Pv||ue===Nv,Ee=Ue.getClearColor(),Re=Ue.getClearAlpha(),He=Ee.r,Ie=Ee.g,ke=Ee.b;be?(m[0]=He,m[1]=Ie,m[2]=ke,m[3]=Re,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=He,x[1]=Ie,x[2]=ke,x[3]=Re,I.clearBufferiv(I.COLOR,0,x))}else H|=I.COLOR_BUFFER_BIT}D&&(H|=I.DEPTH_BUFFER_BIT),j&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",at,!1),r.removeEventListener("webglcontextrestored",L,!1),r.removeEventListener("webglcontextcreationerror",he,!1),Le.dispose(),Te.dispose(),De.dispose(),pt.dispose(),A.dispose(),K.dispose(),xe.dispose(),_e.dispose(),ie.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",mr),Ce.removeEventListener("sessionend",et),Z&&(Z.dispose(),Z=null),jt.stop()};function at(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=Xe.autoReset,D=de.enabled,j=de.autoUpdate,H=de.needsUpdate,O=de.type;qe(),Xe.autoReset=M,de.enabled=D,de.autoUpdate=j,de.needsUpdate=H,de.type=O}function he(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function z(M){const D=M.target;D.removeEventListener("dispose",z),le(D)}function le(M){ce(M),De.remove(M)}function ce(M){const D=De.get(M).programs;D!==void 0&&(D.forEach(function(j){ie.releaseProgram(j)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,j,H,O,ue){D===null&&(D=Ve);const be=O.isMesh&&O.matrixWorld.determinant()<0,Ee=d0(M,D,j,H,O);we.setMaterial(H,be);let Re=j.index,He=1;if(H.wireframe===!0){if(Re=G.getWireframeAttribute(j),Re===void 0)return;He=2}const Ie=j.drawRange,ke=j.attributes.position;let Nt=Ie.start*He,_t=(Ie.start+Ie.count)*He;ue!==null&&(Nt=Math.max(Nt,ue.start*He),_t=Math.min(_t,(ue.start+ue.count)*He)),Re!==null?(Nt=Math.max(Nt,0),_t=Math.min(_t,Re.count)):ke!=null&&(Nt=Math.max(Nt,0),_t=Math.min(_t,ke.count));const gr=_t-Nt;if(gr<0||gr===1/0)return;xe.setup(O,H,Ee,j,Re);let Zr,ft=gt;if(Re!==null&&(Zr=S.get(Re),ft=Be,ft.setIndex(Zr)),O.isMesh)H.wireframe===!0?(we.setLineWidth(H.wireframeLinewidth*Ae()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(O.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),we.setLineWidth(Pe*Ae()),O.isLineSegments?ft.setMode(I.LINES):O.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else O.isPoints?ft.setMode(I.POINTS):O.isSprite&&ft.setMode(I.TRIANGLES);if(O.isBatchedMesh)ft.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)ft.renderInstances(Nt,gr,O.count);else if(j.isInstancedBufferGeometry){const Pe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Vl=Math.min(j.instanceCount,Pe);ft.renderInstances(Nt,gr,Vl)}else ft.render(Nt,gr)};function $e(M,D,j){M.transparent===!0&&M.side===Dr&&M.forceSinglePass===!1?(M.side=ar,M.needsUpdate=!0,qo(M,D,j),M.side=Xi,M.needsUpdate=!0,qo(M,D,j),M.side=Dr):qo(M,D,j)}this.compile=function(M,D,j=null){j===null&&(j=M),g=Te.get(j),g.init(),_.push(g),j.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),M!==j&&M.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights(v._useLegacyLights);const H=new Set;return M.traverse(function(O){const ue=O.material;if(ue)if(Array.isArray(ue))for(let be=0;be<ue.length;be++){const Ee=ue[be];$e(Ee,j,O),H.add(Ee)}else $e(ue,j,O),H.add(ue)}),_.pop(),g=null,H},this.compileAsync=function(M,D,j=null){const H=this.compile(M,D,j);return new Promise(O=>{function ue(){if(H.forEach(function(be){De.get(be).currentProgram.isReady()&&H.delete(be)}),H.size===0){O(M);return}setTimeout(ue,10)}Me.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Qe=null;function Rt(M){Qe&&Qe(M)}function mr(){jt.stop()}function et(){jt.start()}const jt=new Zv;jt.setAnimationLoop(Rt),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(M){Qe=M,Ce.setAnimationLoop(M),M===null?jt.stop():jt.start()},Ce.addEventListener("sessionstart",mr),Ce.addEventListener("sessionend",et),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(D),D=Ce.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,D,w),g=Te.get(M,_.length),g.init(),_.push(g),pe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ve.setFromProjectionMatrix(pe),re=this.localClippingEnabled,B=se.init(this.clippingPlanes,re),y=Le.get(M,u.length),y.init(),u.push(y),Br(M,D,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(F,k),this.info.render.frame++,B===!0&&se.beginShadows();const j=g.state.shadowsArray;if(de.render(j,M,D),B===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1)&&Ue.render(y,M),g.setupLights(v._useLegacyLights),D.isArrayCamera){const H=D.cameras;for(let O=0,ue=H.length;O<ue;O++){const be=H[O];vh(y,M,be,be.viewport)}}else vh(y,M,D);w!==null&&(ze.updateMultisampleRenderTarget(w),ze.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(v,M,D),xe.resetDefaultState(),P=-1,q=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Br(M,D,j,H){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)g.pushLight(M),M.castShadow&&g.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ve.intersectsSprite(M)){H&&fe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(pe);const ue=K.update(M),be=M.material;be.visible&&y.push(M,ue,be,j,fe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ve.intersectsObject(M))){const ue=K.update(M),be=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),fe.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),fe.copy(ue.boundingSphere.center)),fe.applyMatrix4(M.matrixWorld).applyMatrix4(pe)),Array.isArray(be)){const Ee=ue.groups;for(let Re=0,He=Ee.length;Re<He;Re++){const Ie=Ee[Re],ke=be[Ie.materialIndex];ke&&ke.visible&&y.push(M,ue,ke,j,fe.z,Ie)}}else be.visible&&y.push(M,ue,be,j,fe.z,null)}}const O=M.children;for(let ue=0,be=O.length;ue<be;ue++)Br(O[ue],D,j,H)}function vh(M,D,j,H){const O=M.opaque,ue=M.transmissive,be=M.transparent;g.setupLightsView(j),B===!0&&se.setGlobalState(v.clippingPlanes,j),ue.length>0&&u0(O,ue,D,j),H&&we.viewport(b.copy(H)),O.length>0&&Xo(O,D,j),ue.length>0&&Xo(ue,D,j),be.length>0&&Xo(be,D,j),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function u0(M,D,j,H){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const O=Oe.isWebGL2;Z===null&&(Z=new An(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Fo:Gi,minFilter:Li,samples:O?4:0})),v.getDrawingBufferSize(ge),O?Z.setSize(ge.x,ge.y):Z.setSize(ad(ge.x),ad(ge.y));const ue=v.getRenderTarget();v.setRenderTarget(Z),v.getClearColor(ee),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const be=v.toneMapping;v.toneMapping=Hi,Xo(M,j,H),ze.updateMultisampleRenderTarget(Z),ze.updateRenderTargetMipmap(Z);let Ee=!1;for(let Re=0,He=D.length;Re<He;Re++){const Ie=D[Re],ke=Ie.object,Nt=Ie.geometry,_t=Ie.material,gr=Ie.group;if(_t.side===Dr&&ke.layers.test(H.layers)){const Zr=_t.side;_t.side=ar,_t.needsUpdate=!0,xh(ke,j,H,Nt,_t,gr),_t.side=Zr,_t.needsUpdate=!0,Ee=!0}}Ee===!0&&(ze.updateMultisampleRenderTarget(Z),ze.updateRenderTargetMipmap(Z)),v.setRenderTarget(ue),v.setClearColor(ee,N),v.toneMapping=be}function Xo(M,D,j){const H=D.isScene===!0?D.overrideMaterial:null;for(let O=0,ue=M.length;O<ue;O++){const be=M[O],Ee=be.object,Re=be.geometry,He=H===null?be.material:H,Ie=be.group;Ee.layers.test(j.layers)&&xh(Ee,D,j,Re,He,Ie)}}function xh(M,D,j,H,O,ue){M.onBeforeRender(v,D,j,H,O,ue),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(v,D,j,H,M,ue),O.transparent===!0&&O.side===Dr&&O.forceSinglePass===!1?(O.side=ar,O.needsUpdate=!0,v.renderBufferDirect(j,D,H,O,M,ue),O.side=Xi,O.needsUpdate=!0,v.renderBufferDirect(j,D,H,O,M,ue),O.side=Dr):v.renderBufferDirect(j,D,H,O,M,ue),M.onAfterRender(v,D,j,H,O,ue)}function qo(M,D,j){D.isScene!==!0&&(D=Ve);const H=De.get(M),O=g.state.lights,ue=g.state.shadowsArray,be=O.state.version,Ee=ie.getParameters(M,O.state,ue,D,j),Re=ie.getProgramCacheKey(Ee);let He=H.programs;H.environment=M.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(M.isMeshStandardMaterial?A:pt).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,He===void 0&&(M.addEventListener("dispose",z),He=new Map,H.programs=He);let Ie=He.get(Re);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===be)return yh(M,Ee),Ie}else Ee.uniforms=ie.getUniforms(M),M.onBuild(j,Ee,v),M.onBeforeCompile(Ee,v),Ie=ie.acquireProgram(Ee,Re),He.set(Re,Ie),H.uniforms=Ee.uniforms;const ke=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=se.uniform),yh(M,Ee),H.needsLights=p0(M),H.lightsStateVersion=be,H.needsLights&&(ke.ambientLightColor.value=O.state.ambient,ke.lightProbe.value=O.state.probe,ke.directionalLights.value=O.state.directional,ke.directionalLightShadows.value=O.state.directionalShadow,ke.spotLights.value=O.state.spot,ke.spotLightShadows.value=O.state.spotShadow,ke.rectAreaLights.value=O.state.rectArea,ke.ltc_1.value=O.state.rectAreaLTC1,ke.ltc_2.value=O.state.rectAreaLTC2,ke.pointLights.value=O.state.point,ke.pointLightShadows.value=O.state.pointShadow,ke.hemisphereLights.value=O.state.hemi,ke.directionalShadowMap.value=O.state.directionalShadowMap,ke.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ke.spotShadowMap.value=O.state.spotShadowMap,ke.spotLightMatrix.value=O.state.spotLightMatrix,ke.spotLightMap.value=O.state.spotLightMap,ke.pointShadowMap.value=O.state.pointShadowMap,ke.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function _h(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=qs.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function yh(M,D){const j=De.get(M);j.outputColorSpace=D.outputColorSpace,j.batching=D.batching,j.instancing=D.instancing,j.instancingColor=D.instancingColor,j.instancingMorph=D.instancingMorph,j.skinning=D.skinning,j.morphTargets=D.morphTargets,j.morphNormals=D.morphNormals,j.morphColors=D.morphColors,j.morphTargetsCount=D.morphTargetsCount,j.numClippingPlanes=D.numClippingPlanes,j.numIntersection=D.numClipIntersection,j.vertexAlphas=D.vertexAlphas,j.vertexTangents=D.vertexTangents,j.toneMapping=D.toneMapping}function d0(M,D,j,H,O){D.isScene!==!0&&(D=Ve),ze.resetTextureUnits();const ue=D.fog,be=H.isMeshStandardMaterial?D.environment:null,Ee=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Zi,Re=(H.isMeshStandardMaterial?A:pt).get(H.envMap||be),He=H.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ie=!!j.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ke=!!j.morphAttributes.position,Nt=!!j.morphAttributes.normal,_t=!!j.morphAttributes.color;let gr=Hi;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(gr=v.toneMapping);const Zr=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ft=Zr!==void 0?Zr.length:0,Pe=De.get(H),Vl=g.state.lights;if(B===!0&&(re===!0||M!==q)){const vr=M===q&&H.id===P;se.setState(H,M,vr)}let Xl=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Vl.state.version||Pe.outputColorSpace!==Ee||O.isBatchedMesh&&Pe.batching===!1||!O.isBatchedMesh&&Pe.batching===!0||O.isInstancedMesh&&Pe.instancing===!1||!O.isInstancedMesh&&Pe.instancing===!0||O.isSkinnedMesh&&Pe.skinning===!1||!O.isSkinnedMesh&&Pe.skinning===!0||O.isInstancedMesh&&Pe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pe.instancingMorph===!1&&O.morphTexture!==null||Pe.envMap!==Re||H.fog===!0&&Pe.fog!==ue||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==se.numPlanes||Pe.numIntersection!==se.numIntersection)||Pe.vertexAlphas!==He||Pe.vertexTangents!==Ie||Pe.morphTargets!==ke||Pe.morphNormals!==Nt||Pe.morphColors!==_t||Pe.toneMapping!==gr||Oe.isWebGL2===!0&&Pe.morphTargetsCount!==ft)&&(Xl=!0):(Xl=!0,Pe.__version=H.version);let Qi=Pe.currentProgram;Xl===!0&&(Qi=qo(H,D,O));let bh=!1,Da=!1,ql=!1;const Ft=Qi.getUniforms(),en=Pe.uniforms;if(we.useProgram(Qi.program)&&(bh=!0,Da=!0,ql=!0),H.id!==P&&(P=H.id,Da=!0),bh||q!==M){Ft.setValue(I,"projectionMatrix",M.projectionMatrix),Ft.setValue(I,"viewMatrix",M.matrixWorldInverse);const vr=Ft.map.cameraPosition;vr!==void 0&&vr.setValue(I,fe.setFromMatrixPosition(M.matrixWorld)),Oe.logarithmicDepthBuffer&&Ft.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ft.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),q!==M&&(q=M,Da=!0,ql=!0)}if(O.isSkinnedMesh){Ft.setOptional(I,O,"bindMatrix"),Ft.setOptional(I,O,"bindMatrixInverse");const vr=O.skeleton;vr&&(Oe.floatVertexTextures?(vr.boneTexture===null&&vr.computeBoneTexture(),Ft.setValue(I,"boneTexture",vr.boneTexture,ze)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Ft.setOptional(I,O,"batchingTexture"),Ft.setValue(I,"batchingTexture",O._matricesTexture,ze));const Yl=j.morphAttributes;if((Yl.position!==void 0||Yl.normal!==void 0||Yl.color!==void 0&&Oe.isWebGL2===!0)&&ae.update(O,j,Qi),(Da||Pe.receiveShadow!==O.receiveShadow)&&(Pe.receiveShadow=O.receiveShadow,Ft.setValue(I,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(en.envMap.value=Re,en.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Da&&(Ft.setValue(I,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&h0(en,ql),ue&&H.fog===!0&&Q.refreshFogUniforms(en,ue),Q.refreshMaterialUniforms(en,H,X,W,Z),qs.upload(I,_h(Pe),en,ze)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(qs.upload(I,_h(Pe),en,ze),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ft.setValue(I,"center",O.center),Ft.setValue(I,"modelViewMatrix",O.modelViewMatrix),Ft.setValue(I,"normalMatrix",O.normalMatrix),Ft.setValue(I,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const vr=H.uniformsGroups;for(let Kl=0,f0=vr.length;Kl<f0;Kl++)if(Oe.isWebGL2){const Sh=vr[Kl];_e.update(Sh,Qi),_e.bind(Sh,Qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qi}function h0(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function p0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,D,j){De.get(M.texture).__webglTexture=D,De.get(M.depthTexture).__webglTexture=j;const H=De.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=j===void 0,H.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const j=De.get(M);j.__webglFramebuffer=D,j.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,j=0){w=M,C=D,T=j;let H=!0,O=null,ue=!1,be=!1;if(M){const Ee=De.get(M);Ee.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(I.FRAMEBUFFER,null),H=!1):Ee.__webglFramebuffer===void 0?ze.setupRenderTarget(M):Ee.__hasExternalTextures&&ze.rebindTextures(M,De.get(M.texture).__webglTexture,De.get(M.depthTexture).__webglTexture);const Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(be=!0);const He=De.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(He[D])?O=He[D][j]:O=He[D],ue=!0):Oe.isWebGL2&&M.samples>0&&ze.useMultisampledRTT(M)===!1?O=De.get(M).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[j]:O=He,b.copy(M.viewport),R.copy(M.scissor),J=M.scissorTest}else b.copy(V).multiplyScalar(X).floor(),R.copy($).multiplyScalar(X).floor(),J=ne;if(we.bindFramebuffer(I.FRAMEBUFFER,O)&&Oe.drawBuffers&&H&&we.drawBuffers(M,O),we.viewport(b),we.scissor(R),we.setScissorTest(J),ue){const Ee=De.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ee.__webglTexture,j)}else if(be){const Ee=De.get(M.texture),Re=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,j||0,Re)}P=-1},this.readRenderTargetPixels=function(M,D,j,H,O,ue,be){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee){we.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const Re=M.texture,He=Re.format,Ie=Re.type;if(He!==Ir&&Se.convert(He)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ie===Fo&&(Me.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ie!==Gi&&Se.convert(Ie)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===oi&&(Oe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-H&&j>=0&&j<=M.height-O&&I.readPixels(D,j,H,O,Se.convert(He),Se.convert(Ie),ue)}finally{const Re=w!==null?De.get(w).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(M,D,j=0){const H=Math.pow(2,-j),O=Math.floor(D.image.width*H),ue=Math.floor(D.image.height*H);ze.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,M.x,M.y,O,ue),we.unbindTexture()},this.copyTextureToTexture=function(M,D,j,H=0){const O=D.image.width,ue=D.image.height,be=Se.convert(j.format),Ee=Se.convert(j.type);ze.setTexture2D(j,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,M.x,M.y,O,ue,be,Ee,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,be,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,H,M.x,M.y,be,Ee,D.image),H===0&&j.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(M,D,j,H,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=Math.round(M.max.x-M.min.x),be=Math.round(M.max.y-M.min.y),Ee=M.max.z-M.min.z+1,Re=Se.convert(H.format),He=Se.convert(H.type);let Ie;if(H.isData3DTexture)ze.setTexture3D(H,0),Ie=I.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)ze.setTexture2DArray(H,0),Ie=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const ke=I.getParameter(I.UNPACK_ROW_LENGTH),Nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_t=I.getParameter(I.UNPACK_SKIP_PIXELS),gr=I.getParameter(I.UNPACK_SKIP_ROWS),Zr=I.getParameter(I.UNPACK_SKIP_IMAGES),ft=j.isCompressedTexture?j.mipmaps[O]:j.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ft.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,M.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,M.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,M.min.z),j.isDataTexture||j.isData3DTexture?I.texSubImage3D(Ie,O,D.x,D.y,D.z,ue,be,Ee,Re,He,ft.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(Ie,O,D.x,D.y,D.z,ue,be,Ee,Re,ft.data):I.texSubImage3D(Ie,O,D.x,D.y,D.z,ue,be,Ee,Re,He,ft),I.pixelStorei(I.UNPACK_ROW_LENGTH,ke),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_t),I.pixelStorei(I.UNPACK_SKIP_ROWS,gr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zr),O===0&&H.generateMipmaps&&I.generateMipmap(Ie),we.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?ze.setTextureCube(M,0):M.isData3DTexture?ze.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ze.setTexture2DArray(M,0):ze.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,we.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=e===oh?"display-p3":"srgb",r.unpackColorSpace=Je.workingColorSpace===Hl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class r2 extends n0{}r2.prototype.isWebGL1Renderer=!0;class i2 extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r.object.backgroundRotation=this.backgroundRotation.toArray(),r.object.environmentRotation=this.environmentRotation.toArray(),r}}class a0 extends Na{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tm=new ut,sd=new Gv,Ns=new Gl,Fs=new U;class n2 extends qt{constructor(e=new Tr,r=new a0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,r){const i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(n),Ns.radius+=a,e.ray.intersectsSphere(Ns)===!1)return;tm.copy(n).invert(),sd.copy(e.ray).applyMatrix4(tm);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=h,x=p;m<x;m++){const y=c.getX(m);Fs.fromBufferAttribute(d,y),rm(Fs,y,l,n,e,r,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=h,x=p;m<x;m++)Fs.fromBufferAttribute(d,m),rm(Fs,m,l,n,e,r,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function rm(t,e,r,i,n,a,o){const s=sd.distanceSqToPoint(t);if(s<r){const l=new U;sd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class ch extends Tr{constructor(e=1,r=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:r,thetaStart:i,thetaLength:n},r=Math.max(3,r);const a=[],o=[],s=[],l=[],c=new U,d=new We;o.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=r;h++,p+=3){const m=i+h/r*n;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),s.push(0,0,1),d.x=(o[p]/e+1)/2,d.y=(o[p+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=r;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(s,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ch(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class uh extends Tr{constructor(e=1,r=32,i=16,n=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:r,heightSegments:i,phiStart:n,phiLength:a,thetaStart:o,thetaLength:s},r=Math.max(3,Math.floor(r)),i=Math.max(2,Math.floor(i));const l=Math.min(o+s,Math.PI);let c=0;const d=[],h=new U,p=new U,m=[],x=[],y=[],g=[];for(let u=0;u<=i;u++){const _=[],v=u/i;let E=0;u===0&&o===0?E=.5/r:u===i&&l===Math.PI&&(E=-.5/r);for(let C=0;C<=r;C++){const T=C/r;h.x=-e*Math.cos(n+T*a)*Math.sin(o+v*s),h.y=e*Math.cos(o+v*s),h.z=e*Math.sin(n+T*a)*Math.sin(o+v*s),x.push(h.x,h.y,h.z),p.copy(h).normalize(),y.push(p.x,p.y,p.z),g.push(T+E,1-v),_.push(c++)}d.push(_)}for(let u=0;u<i;u++)for(let _=0;_<r;_++){const v=d[u][_+1],E=d[u][_],C=d[u+1][_],T=d[u+1][_+1];(u!==0||o>0)&&m.push(v,E,T),(u!==i-1||l<Math.PI)&&m.push(E,C,T)}this.setIndex(m),this.setAttribute("position",new zt(x,3)),this.setAttribute("normal",new zt(y,3)),this.setAttribute("uv",new zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ml extends Tr{constructor(e=1,r=.4,i=12,n=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:r,radialSegments:i,tubularSegments:n,arc:a},i=Math.floor(i),n=Math.floor(n);const o=[],s=[],l=[],c=[],d=new U,h=new U,p=new U;for(let m=0;m<=i;m++)for(let x=0;x<=n;x++){const y=x/n*a,g=m/i*Math.PI*2;h.x=(e+r*Math.cos(g))*Math.cos(y),h.y=(e+r*Math.cos(g))*Math.sin(y),h.z=r*Math.sin(g),s.push(h.x,h.y,h.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(h,d).normalize(),l.push(p.x,p.y,p.z),c.push(x/n),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=n;x++){const y=(n+1)*m+x-1,g=(n+1)*(m-1)+x-1,u=(n+1)*(m-1)+x,_=(n+1)*m+x;o.push(y,g,_),o.push(g,u,_)}this.setIndex(o),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class a2 extends Na{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kv,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const im={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class o2{constructor(e,r,i){const n=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=r,this.onError=i,this.itemStart=function(d){s++,a===!1&&n.onStart!==void 0&&n.onStart(d,o,s),a=!0},this.itemEnd=function(d){o++,n.onProgress!==void 0&&n.onProgress(d,o,s),o===s&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(d){n.onError!==void 0&&n.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,p=c.length;h<p;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return x}return null}}}const s2=new o2;class dh{constructor(e){this.manager=e!==void 0?e:s2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,r){const i=this;return new Promise(function(n,a){i.load(e,n,r,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}dh.DEFAULT_MATERIAL_NAME="__DEFAULT";class l2 extends dh{constructor(e){super(e)}load(e,r,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=im.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){r&&r(o),a.manager.itemEnd(e)},0),o;const s=Do("img");function l(){d(),im.add(e,this),r&&r(this),a.manager.itemEnd(e)}function c(h){d(),n&&n(h),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class c2 extends dh{constructor(e){super(e)}load(e,r,i,n){const a=new Xt,o=new l2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,r!==void 0&&r(a)},i,n),a}}class o0 extends qt{constructor(e,r=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=r}dispose(){}copy(e,r){return super.copy(e,r),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const r=super.toJSON(e);return r.object.color=this.color.getHex(),r.object.intensity=this.intensity,this.groundColor!==void 0&&(r.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(r.object.distance=this.distance),this.angle!==void 0&&(r.object.angle=this.angle),this.decay!==void 0&&(r.object.decay=this.decay),this.penumbra!==void 0&&(r.object.penumbra=this.penumbra),this.shadow!==void 0&&(r.object.shadow=this.shadow.toJSON()),r}}const tu=new ut,nm=new U,am=new U;class u2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sh,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const r=this.camera,i=this.matrix;nm.setFromMatrixPosition(e.matrixWorld),r.position.copy(nm),am.setFromMatrixPosition(e.target.matrixWorld),r.lookAt(am),r.updateMatrixWorld(),tu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const om=new ut,Ka=new U,ru=new U;class d2 extends u2{constructor(){super(new cr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,r=0){const i=this.camera,n=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ka.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ka),ru.copy(i.position),ru.add(this._cubeDirections[r]),i.up.copy(this._cubeUps[r]),i.lookAt(ru),i.updateMatrixWorld(),n.makeTranslation(-Ka.x,-Ka.y,-Ka.z),om.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(om)}}class h2 extends o0{constructor(e,r,i=0,n=2){super(e,r),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new d2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,r){return super.copy(e,r),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class p2 extends o0{constructor(e,r){super(e,r),this.isAmbientLight=!0,this.type="AmbientLight"}}let f2=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=sm();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function sm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);function m2({page:t="home"}){const e=Ye.useRef(null);return Ye.useEffect(()=>{const r=e.current;if(!r)return;const i=window.innerWidth<768,n=r.clientWidth||window.innerWidth,a=r.clientHeight||window.innerHeight,o=new i2,s=new cr(60,n/a,.1,1e3);s.position.z=i?18:15;const l=new n0({antialias:!i,alpha:!0,powerPreference:"high-performance",precision:i?"mediump":"highp",stencil:!1,depth:!0});l.setSize(n,a),l.setPixelRatio(i?1:Math.min(window.devicePixelRatio,2)),r.appendChild(l.domElement);const c=new ca;o.add(c);const d=new c2;let h,p,m;d.load("./logo.png",Z=>{Z.generateMipmaps=!0,Z.minFilter=Li;const pe=i?5:6.5,ge=new Wo(pe,pe),fe=new a2({map:Z,transparent:!0,opacity:.92,side:Dr,emissive:165063,emissiveIntensity:.25,shininess:90});h=new er(ge,fe),h.position.z=.5,c.add(h);const Ve=new ch(i?2.8:3.6,32),Ae=new oa({color:41983,transparent:!0,opacity:.2,side:Dr}),I=new er(Ve,Ae);I.position.z=-.1,c.add(I)}),m=new ca;const x=i?4.8:6.2,y=new Ml(x,.05,16,i?60:120),g=new oa({color:41983,transparent:!0,opacity:.6});p=new er(y,g),p.rotation.x=Math.PI/3,m.add(p);const u=new Ml(x+1.2,.03,16,i?50:100),_=new oa({color:165063,transparent:!0,opacity:.45}),v=new er(u,_);v.rotation.y=Math.PI/4,m.add(v);const E=new uh(.16,12,12),C=new oa({color:41983});for(let Z=0;Z<6;Z++){const pe=Z/6*Math.PI*2,ge=new er(E,C);ge.position.set(Math.cos(pe)*x,Math.sin(pe)*x,Z%2===0?.8:-.8),m.add(ge)}c.add(m);const T=i?450:t==="techstack"?1200:t==="blog"?1e3:900,w=new Tr,P=new Float32Array(T*3),q=new Float32Array(T*3),b=new Ge(41983),R=new Ge(165063),J=new Ge(16777215);for(let Z=0;Z<T*3;Z+=3){const pe=(i?6:8)+Math.random()*(i?12:18),ge=Math.random()*Math.PI*2,fe=Math.acos(Math.random()*2-1);P[Z]=pe*Math.sin(fe)*Math.cos(ge),P[Z+1]=pe*Math.sin(fe)*Math.sin(ge),P[Z+2]=pe*Math.cos(fe);const Ve=Math.random()>.6?J:Math.random()>.5?b:R;q[Z]=Ve.r,q[Z+1]=Ve.g,q[Z+2]=Ve.b}w.setAttribute("position",new Mr(P,3)),w.setAttribute("color",new Mr(q,3));const ee=new a0({size:i?.2:.16,vertexColors:!0,transparent:!0,opacity:.75,blending:_n}),N=new n2(w,ee);c.add(N);const Y=new p2(16777215,.95);o.add(Y);const W=new h2(41983,2.5,60);W.position.set(12,12,12),o.add(W);let X=0,F=0,k=0,V=0;const $=Z=>{const pe=Z.touches?Z.touches[0].clientX:Z.clientX,ge=Z.touches?Z.touches[0].clientY:Z.clientY;X=pe/window.innerWidth*2-1,F=-(ge/window.innerHeight)*2+1};window.addEventListener("mousemove",$,{passive:!0}),window.addEventListener("touchmove",$,{passive:!0});const ne=()=>{if(!r)return;const Z=r.clientWidth||window.innerWidth,pe=r.clientHeight||window.innerHeight;s.aspect=Z/pe,s.updateProjectionMatrix(),l.setSize(Z,pe)};window.addEventListener("resize",ne,{passive:!0});let ve;const B=new f2,re=()=>{ve=requestAnimationFrame(re);const Z=B.getDelta(),pe=B.getElapsedTime(),ge=Math.min(Z*4,.1);k+=(X-k)*ge,V+=(F-V)*ge,c.rotation.y=pe*.1+k*.35,c.rotation.x=Math.sin(pe*.1)*.1+V*.35,h&&(h.rotation.z=Math.sin(pe*.5)*.04),p&&(p.rotation.z+=Z*.2),N&&(N.rotation.y-=Z*.06),l.render(o,s)};return re(),()=>{window.removeEventListener("mousemove",$),window.removeEventListener("touchmove",$),window.removeEventListener("resize",ne),cancelAnimationFrame(ve),r.contains(l.domElement)&&r.removeChild(l.domElement),l.dispose()}},[t]),f.jsx("div",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,willChange:"transform",transform:"translateZ(0)"}})}/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/var g2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const v2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ye=(t,e)=>{const r=Ye.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:s="",children:l,...c},d)=>Ye.createElement("svg",{ref:d,...g2,width:n,height:n,stroke:i,strokeWidth:o?Number(a)*24/Number(n):a,className:["lucide",`lucide-${v2(t)}`,s].join(" "),...c},[...e.map(([h,p])=>Ye.createElement(h,p)),...Array.isArray(l)?l:[l]]));return r.displayName=`${t}`,r};/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lm=ye("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hh=ye("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ji=ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const x2=ye("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _2=ye("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const y2=ye("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const b2=ye("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cm=ye("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const iu=ye("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const s0=ye("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Kr=ye("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const S2=ye("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const M2=ye("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const to=ye("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const E2=ye("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ro=ye("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ni=ye("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ds=ye("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const w2=ye("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const T2=ye("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const um=ye("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const A2=ye("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ld=ye("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const R2=ye("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const C2=ye("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const L2=ye("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const P2=ye("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const io=ye("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const N2=ye("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const F2=ye("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dm=ye("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const D2=ye("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const U2=ye("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const I2=ye("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const k2=ye("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const no=ye("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const O2=ye("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ph=ye("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fh=ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const l0=ye("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nu=ye("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const z2=ye("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mh=ye("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hm=ye("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const B2=ye("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const j2=ye("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ao=ye("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const El=ye("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pm=ye("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const H2=ye("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const G2=ye("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const W2=ye("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const V2=ye("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gh=ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qn=ye("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function X2({currentPage:t,onNavigate:e}){const[r,i]=Ye.useState(!1),[n,a]=Ye.useState(!1);Ye.useEffect(()=>{const s=()=>{i(window.scrollY>30)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const o=(s,l)=>{a(!1),e(s),s==="home"&&l?setTimeout(()=>{const c=document.getElementById(l);c&&c.scrollIntoView({behavior:"smooth"})},50):window.scrollTo({top:0,behavior:"smooth"})};return f.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:r?"12px 24px":"18px 24px",transition:"all 0.3s ease",background:r?"rgba(255, 255, 255, 0.94)":"rgba(255, 255, 255, 0.85)",backdropFilter:"blur(16px)",borderBottom:r?"1px solid rgba(56, 189, 248, 0.3)":"1px solid rgba(56, 189, 248, 0.15)",boxShadow:r?"0 10px 30px rgba(2, 132, 199, 0.08)":"none"},children:[f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[f.jsxs("div",{onClick:()=>o("home"),style:{cursor:"pointer",display:"flex",alignItems:"center",gap:"14px"},children:[f.jsx("div",{style:{padding:"4px",borderRadius:"12px",background:"#FFFFFF",border:"1px solid rgba(0, 163, 255, 0.3)",boxShadow:"0 4px 15px rgba(0, 163, 255, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",height:"46px"},children:f.jsx("img",{src:"./logo.png",alt:"Blueidealteck Logo",style:{height:"38px",width:"auto",objectFit:"contain"}})}),f.jsxs("div",{children:[f.jsxs("div",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"1.4rem",letterSpacing:"-0.5px",color:"#0F172A"},children:["BLUEIDEAL",f.jsx("span",{style:{color:"#00A3FF"},children:"TECK"})]}),f.jsx("div",{style:{fontSize:"0.65rem",color:"#0284C7",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700},children:"Software Solutions"})]})]}),f.jsxs("nav",{style:{display:"none",gap:"24px",alignItems:"center"},className:"desktop-nav",children:[f.jsx("button",{onClick:()=>o("home"),className:`nav-btn ${t==="home"?"active":""}`,children:"Home"}),f.jsx("button",{onClick:()=>o("home","about"),className:"nav-btn",children:"About"}),f.jsx("button",{onClick:()=>o("home","services"),className:"nav-btn",children:"Services"}),f.jsx("button",{onClick:()=>o("techstack"),className:`nav-btn ${t==="techstack"?"active":""}`,children:"Tech Stack"}),f.jsx("button",{onClick:()=>o("blog"),className:`nav-btn ${t==="blog"?"active":""}`,children:"Blog"}),f.jsx("button",{onClick:()=>o("home","contact"),className:"nav-btn",children:"Contact"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[f.jsxs("button",{onClick:()=>o("home","contact"),className:"glow-btn-primary",style:{padding:"10px 22px",fontSize:"0.9rem"},children:[f.jsx("span",{children:"Get Started"}),f.jsx(Ji,{size:16})]}),f.jsx("button",{onClick:()=>a(!n),style:{background:"#FFFFFF",border:"1px solid rgba(0, 163, 255, 0.3)",color:"#0284C7",borderRadius:"10px",padding:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0, 163, 255, 0.1)"},children:n?f.jsx(gh,{size:22}):f.jsx(U2,{size:22})})]})]}),n&&f.jsxs("div",{className:"glass-panel",style:{marginTop:"16px",padding:"24px",display:"flex",flexDirection:"column",gap:"16px",background:"#FFFFFF"},children:[f.jsx("button",{onClick:()=>o("home"),className:"nav-btn-mobile",children:"Home"}),f.jsx("button",{onClick:()=>o("home","about"),className:"nav-btn-mobile",children:"About"}),f.jsx("button",{onClick:()=>o("home","services"),className:"nav-btn-mobile",children:"Services"}),f.jsx("button",{onClick:()=>o("techstack"),className:"nav-btn-mobile",children:"Tech Stack"}),f.jsx("button",{onClick:()=>o("blog"),className:"nav-btn-mobile",children:"Blog"}),f.jsx("button",{onClick:()=>o("home","contact"),className:"nav-btn-mobile",children:"Contact"})]}),f.jsx("style",{children:`
        .nav-btn {
          background: none;
          border: none;
          color: #475569;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          font-family: var(--font-body);
          transition: var(--transition-smooth);
          padding: 6px 12px;
          border-radius: 8px;
        }
        .nav-btn:hover, .nav-btn.active {
          color: #00A3FF;
          background: rgba(0, 163, 255, 0.08);
        }
        .nav-btn-mobile {
          background: none;
          border: none;
          color: #0F172A;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-body);
        }
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
        }
      `})]})}function q2(){const[t,e]=Ye.useState(""),r='blueidealteck.deploy({ solutions: "FullStack AI & Cloud", uptime: "99.9%" });';return Ye.useEffect(()=>{let i=0;const n=setInterval(()=>{i<=r.length?(e(r.slice(0,i)),i++):clearInterval(n)},40);return()=>clearInterval(n)},[]),f.jsx("section",{style:{minHeight:"90vh",display:"flex",alignItems:"center",paddingTop:"120px",position:"relative",overflow:"hidden"},children:f.jsx("div",{className:"section-container",style:{width:"100%"},children:f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"60px",alignItems:"center"},children:[f.jsxs("div",{children:[f.jsx("div",{className:"badge-glow",style:{marginBottom:"24px"},children:f.jsx("span",{children:"Full-Stack AI & Cloud Engineering"})}),f.jsxs("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2.4rem, 4.8vw, 4.1rem)",fontWeight:900,lineHeight:1.15,marginBottom:"24px",letterSpacing:"-1px",color:"#0F172A"},children:["Full-Stack AI & Cloud Solutions for ",f.jsx("span",{className:"gradient-text",children:"Scalable Businesses"})]}),f.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.2rem",lineHeight:1.7,marginBottom:"40px",maxWidth:"580px"},children:"Empowering startups and enterprises with secure, high-performance software. We build digital success stories tailored to your needs."}),f.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",marginBottom:"50px"},children:[f.jsxs("a",{href:"#contact",className:"glow-btn-primary",children:[f.jsx("span",{children:"Get Started"}),f.jsx(Ji,{size:18})]}),f.jsx("a",{href:"#about",className:"glow-btn-secondary",children:f.jsx("span",{children:"Why Choose Us"})})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"20px",paddingTop:"24px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:[f.jsxs("div",{children:[f.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"1.8rem",fontWeight:800,color:"#0284C7"},children:"99.9%"}),f.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-dim)",marginTop:"4px",fontWeight:500},children:"Uptime Guaranteed"})]}),f.jsxs("div",{children:[f.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"1.8rem",fontWeight:800,color:"#00A3FF"},children:"100%"}),f.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-dim)",marginTop:"4px",fontWeight:500},children:"Tailored Strategies"})]}),f.jsxs("div",{children:[f.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"1.8rem",fontWeight:800,color:"#0369A1"},children:"24/7"}),f.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-dim)",marginTop:"4px",fontWeight:500},children:"Ongoing Support"})]})]})]}),f.jsx("div",{className:"floating-element",children:f.jsxs("div",{className:"glass-panel",style:{padding:"28px",background:"#FFFFFF",border:"1px solid rgba(0, 163, 255, 0.3)",boxShadow:"0 20px 50px rgba(2, 132, 199, 0.15)"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"16px",borderBottom:"1px solid rgba(56, 189, 248, 0.2)",marginBottom:"20px"},children:[f.jsxs("div",{style:{display:"flex",gap:"8px"},children:[f.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"#38BDF8"}}),f.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"#0284C7"}}),f.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"#0369A1"}})]}),f.jsx("div",{style:{fontSize:"0.8rem",color:"#0284C7",fontWeight:700},children:"Blueidealteck Architecture"})]}),f.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.88rem",color:"#334155",lineHeight:1.8},children:[f.jsx("p",{style:{color:"#0284C7",fontWeight:600},children:"➜ ~/blueidealteck-engine --status"}),f.jsx("p",{children:"✔ Node.js Event-Driven Microservices: Active"}),f.jsx("p",{children:"✔ React & Next.js Frontend Canvas: Mounted"}),f.jsx("p",{children:"✔ Python AI & Cloud Infrastructure: Connected"}),f.jsxs("div",{style:{background:"#F0F9FF",borderLeft:"4px solid #00A3FF",padding:"12px 16px",margin:"16px 0",borderRadius:"0 8px 8px 0",color:"#0F172A",fontWeight:600},children:[f.jsx("code",{children:t}),f.jsx("span",{style:{color:"#00A3FF",fontWeight:700},children:"|"})]}),f.jsx("p",{style:{color:"#00A3FF",fontSize:"0.85rem",fontWeight:600},children:"✓ Ready to turn your ideas into digital impact."})]}),f.jsxs("div",{style:{display:"flex",gap:"16px",marginTop:"24px",paddingTop:"16px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.8rem",color:"#0284C7",fontWeight:600},children:[f.jsx(mh,{size:16,color:"#00A3FF"}),f.jsx("span",{children:"Security-First"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.8rem",color:"#0284C7",fontWeight:600},children:[f.jsx(qn,{size:16,color:"#00A3FF"}),f.jsx("span",{children:"Scalable & Future-Ready"})]})]})]})})]})})})}const Y2=[{icon:io,title:"Full-Service Expertise",desc:"From custom software and cloud infrastructure to mobile apps and AI pipelines, we cover your complete digital lifecycle."},{icon:Ni,title:"Scalable & Future-Ready Solutions",desc:"Engineered for extreme scalability and revenue growth, identifying tailored strategies that scale effortlessly."},{icon:mh,title:"Security-First Development",desc:"Military-grade security standards, DevSecOps compliance, and bank-grade data integrity built into every layer."},{icon:W2,title:"Client-Centric Approach",desc:"We take the time to understand your goals, challenges, and vision — crafting solutions tailored specifically for you."}];function K2(){return f.jsx("section",{id:"about",style:{position:"relative"},children:f.jsxs("div",{className:"section-container",children:[f.jsxs("div",{className:"section-title-wrap",children:[f.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[f.jsx(_2,{size:14,color:"#00A3FF"}),f.jsx("span",{children:"Why World-Class Brands Choose Us"})]}),f.jsxs("h2",{className:"section-title",children:["Why Choose ",f.jsx("span",{className:"gradient-text",children:"Blueidealteck"})]}),f.jsx("p",{className:"section-subtitle",style:{fontSize:"1.2rem",color:"#0284C7",fontWeight:700},children:"Let Blueidealteck be your technology engine."})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"40px",alignItems:"center",marginBottom:"60px"},children:[f.jsxs("div",{className:"glass-panel",style:{padding:"36px",background:"#FFFFFF"},children:[f.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,marginBottom:"20px",color:"#0F172A"},children:"We Don't Just Write Code; We Architect Digital Dominance."}),f.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1rem",lineHeight:1.8,marginBottom:"20px"},children:"Our solutions are engineered for extreme scalability, identifying tailored strategies that drive revenue and efficiency. With a deep understanding of technology and a passion for innovation, our team is dedicated to building scalable, secure, and high-performance software that helps businesses grow and succeed in the digital world."}),f.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1rem",lineHeight:1.8,marginBottom:"20px"},children:"What sets us apart is our client-first mindset. We take the time to understand your goals, challenges, and vision — and then craft solutions tailored specifically for you. Whether it's a custom web application, a mobile app, or a cloud-native DevOps pipeline, our approach is always strategic, transparent, and results-driven."}),f.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1rem",lineHeight:1.8},children:"We don’t believe in one-time transactions — we believe in long-term partnerships. From planning to development, and beyond deployment, we stay committed to your product's success. With on-time delivery, reliable support, and a collaborative working style, Blueidealteck becomes an extension of your team."}),f.jsx("div",{style:{marginTop:"28px",padding:"16px 20px",borderRadius:"12px",background:"#F0F9FF",borderLeft:"4px solid #00A3FF",fontWeight:600,color:"#0F172A"},children:"Our Mission: Empower businesses with technology that works — turning your ideas into digital impact."})]}),f.jsx("div",{className:"grid-responsive-2",style:{gap:"20px"},children:Y2.map((t,e)=>{const r=t.icon;return f.jsxs("div",{className:"glass-panel",style:{padding:"24px",background:"#FFFFFF"},children:[f.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"12px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:f.jsx(r,{size:24,color:"#0284C7"})}),f.jsx("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1.1rem",fontWeight:700,marginBottom:"8px",color:"#0F172A"},children:t.title}),f.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6},children:t.desc})]},e)})})]})]})})}function Vo({isOpen:t,onClose:e,article:r}){return!t||!r?null:f.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1e3,background:"rgba(15, 23, 42, 0.75)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:f.jsxs("div",{className:"glass-panel",style:{background:"#FFFFFF",maxWidth:"780px",width:"100%",maxHeight:"90vh",overflowY:"auto",padding:"36px",borderRadius:"20px",position:"relative",boxShadow:"0 25px 60px rgba(2, 132, 199, 0.25)",border:"1px solid rgba(0, 163, 255, 0.4)"},children:[f.jsx("button",{onClick:e,style:{position:"absolute",top:"20px",right:"20px",background:"#F0F9FF",border:"1px solid rgba(0, 163, 255, 0.3)",borderRadius:"50%",width:"38px",height:"38px",display:"flex",alignItems:"center",justifyContent:"center",color:"#0284C7",cursor:"pointer",transition:"var(--transition-smooth)"},children:f.jsx(gh,{size:20})}),f.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"6px 14px",borderRadius:"16px",background:"#E0F2FE",color:"#0284C7",fontSize:"0.8rem",fontWeight:700,marginBottom:"16px"},children:[f.jsx(El,{size:14,color:"#00A3FF"}),f.jsx("span",{children:r.category||"Technology & Innovation"})]}),f.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.9rem",fontWeight:900,lineHeight:1.3,color:"#0F172A",marginBottom:"16px"},children:r.title}),f.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",fontSize:"0.85rem",color:"var(--text-dim)",paddingBottom:"20px",borderBottom:"1px solid rgba(56, 189, 248, 0.2)",marginBottom:"24px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(s0,{size:15,color:"#0284C7"}),f.jsx("span",{children:r.date||"2026 Edition"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(G2,{size:15,color:"#0284C7"}),f.jsx("span",{children:r.author||"Blueidealteck Engineering Team"})]})]}),f.jsxs("div",{style:{color:"#334155",fontSize:"1.02rem",lineHeight:1.8,marginBottom:"32px"},children:[f.jsx("p",{style:{marginBottom:"18px",fontWeight:500},children:r.desc||r.description}),f.jsxs("div",{style:{background:"#F0F9FF",padding:"24px",borderRadius:"14px",borderLeft:"4px solid #00A3FF",margin:"24px 0"},children:[f.jsx("h4",{style:{fontFamily:"var(--font-heading)",color:"#0F172A",fontWeight:800,marginBottom:"10px"},children:"Strategic Engineering Takeaway"}),f.jsx("p",{style:{fontSize:"0.95rem",color:"#475569",margin:0},children:"At Blueidealteck, we integrate modern full-stack architectures, Node.js microservices, and AI-driven automation to ensure your enterprise stays years ahead of rigid market competitors."})]}),f.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.3rem",fontWeight:800,color:"#0F172A",marginTop:"24px",marginBottom:"12px"},children:"Key Implementation Benefits"}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[f.jsx(Kr,{size:18,color:"#00A3FF",style:{flexShrink:0,marginTop:"3px"}}),f.jsx("span",{children:"Enhanced system throughput and reduced infrastructure latency."})]}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[f.jsx(Kr,{size:18,color:"#00A3FF",style:{flexShrink:0,marginTop:"3px"}}),f.jsx("span",{children:"Automated CI/CD deployment pipelines with zero operational downtime."})]}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[f.jsx(Kr,{size:18,color:"#00A3FF",style:{flexShrink:0,marginTop:"3px"}}),f.jsx("span",{children:"Bank-grade encryption, DevSecOps compliance, and 99.9% uptime SLA."})]})]})]}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"20px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:[f.jsx("button",{onClick:e,className:"glow-btn-secondary",style:{padding:"10px 20px",fontSize:"0.9rem"},children:"Close Article"}),f.jsxs("a",{href:"#contact",onClick:e,className:"glow-btn-primary",style:{padding:"10px 22px",fontSize:"0.9rem"},children:[f.jsx("span",{children:"Consult Our Engineers"}),f.jsx(Ji,{size:16})]})]})]})})}const fm=[{id:"custom-software",title:"Custom Software Development",category:"Bespoke Software",icon:ro,desc:"Bespoke digital ecosystems designed to outperform off-the-shelf limitations. We build custom software that scales with your ambition as a leading bespoke software development company."},{id:"devops-cloud",title:"DevOps & Cloud Services",category:"Cloud Engineering",icon:to,desc:"Optimize your infrastructure with CI/CD pipelines, containerization (Docker and Kubernetes), cloud deployment (AWS, Azure, GCP), and real-time monitoring."},{id:"web-apps",title:"Web Application Development",category:"Full-Stack Web",icon:ld,desc:"We build secure, fast, and responsive web applications tailored to your specific business needs — from internal tools to customer-facing platforms."},{id:"ui-ux",title:"UI/UX Design",category:"Design & Experience",icon:k2,desc:"We design interfaces that are not only visually appealing but also intuitive and conversion-focused, providing users with a smooth and delightful user experience."},{id:"ai-ml",title:"AI & Machine Learning",category:"AI & Automation",icon:Ni,desc:"Predictive intelligence and automation that puts your business years ahead. Unlock insights and build smarter applications."},{id:"mobile-apps",title:"Mobile App Development",category:"Mobile Engineering",icon:ao,desc:"Native iOS, Android, and Cross-Platform (Flutter) apps designed for high performance and user retention."},{id:"ecommerce",title:"E-commerce Solutions",category:"E-Commerce",icon:j2,desc:"Custom Shopify, WooCommerce, and Headless stores built to maximize conversions and sales."},{id:"cloud-migration",title:"Cloud Migration",category:"Cloud Strategy",icon:M2,desc:"Zero-downtime migration to AWS, Azure, or GCP. Optimize costs and improve scalability."},{id:"api-integration",title:"API Integration",category:"System Integration",icon:N2,desc:"Connect your disparate systems (CRM, ERP, Payment Gateways) with secure, custom API bridges."},{id:"data-bi",title:"Data Analytics & BI",category:"Business Intelligence",icon:y2,desc:"Turn raw data into actionable insights with Power BI, Tableau, and custom predictive models."}];function $2(){const[t,e]=Ye.useState(fm[0].id),[r,i]=Ye.useState(null);return f.jsxs("section",{id:"services",style:{position:"relative"},children:[f.jsxs("div",{className:"section-container",children:[f.jsxs("div",{className:"section-title-wrap",children:[f.jsx("div",{className:"badge-glow",style:{marginBottom:"16px"},children:f.jsx("span",{children:"Full-Service Expertise"})}),f.jsxs("h2",{className:"section-title",children:["Our ",f.jsx("span",{className:"gradient-text",children:"Services"})]}),f.jsx("p",{className:"section-subtitle",children:"At Blueidealteck, we offer a complete suite of technology services to help your business thrive in the digital era. Whether you're launching a new product, scaling operations, or modernizing legacy systems — we have the expertise to make it happen."})]}),f.jsx("div",{className:"grid-responsive-3",style:{marginBottom:"40px"},children:fm.map(n=>{const a=n.icon,o=n.id===t;return f.jsxs("div",{onClick:()=>e(n.id),className:"glass-panel",style:{padding:"24px",cursor:"pointer",borderColor:o?"#00A3FF":"rgba(56, 189, 248, 0.25)",boxShadow:o?"0 10px 30px rgba(0, 163, 255, 0.2)":"none",background:o?"#FFFFFF":"rgba(255, 255, 255, 0.85)",transform:o?"translateY(-4px)":"none",transition:"var(--transition-smooth)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[f.jsxs("div",{children:[f.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"12px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:f.jsx(a,{size:24,color:"#0284C7"})}),f.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.15rem",fontWeight:700,marginBottom:"10px",color:o?"#0F172A":"#334155"},children:n.title}),f.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"20px"},children:n.desc})]}),f.jsx("div",{style:{paddingTop:"12px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:f.jsxs("button",{onClick:s=>{s.stopPropagation(),i(n)},style:{background:"none",border:"none",color:"#00A3FF",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontFamily:"var(--font-heading)"},children:[f.jsx("span",{children:"Read More"}),f.jsx(Ji,{size:14})]})})]},n.id)})})]}),f.jsx(Vo,{isOpen:!!r,onClose:()=>i(null),article:r})]})}const Z2=[{title:"Next-Gen Game Design",category:"Gaming & Metaverse",badge:"Coming Soon",icon:A2,desc:"Immersive, hyper-realistic gaming experiences powered by Unreal Engine 5 & Unity. We are crafting worlds that blur the line between reality and digital."},{title:"Elite Cyber Security",category:"Zero Trust Security",badge:"Coming Soon",icon:z2,desc:"Military-grade penetration testing and Zero Trust architecture to bulletproof your infrastructure against evolving threats."},{title:"Blockchain Revolution",category:"Web3 & Smart Contracts",badge:"Coming Soon",icon:b2,desc:"Decentralized innovation with Smart Contracts and Web3 Integration. Building transparent, immutable systems for the next era of the internet."}];function J2(){const[t,e]=Ye.useState(null);return f.jsxs("section",{id:"future",style:{position:"relative"},children:[f.jsxs("div",{className:"section-container",children:[f.jsxs("div",{className:"section-title-wrap",children:[f.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[f.jsx(ph,{size:14,color:"#00A3FF"}),f.jsx("span",{children:"Innovation Horizon"})]}),f.jsxs("h2",{className:"section-title",children:["Future Horizons: ",f.jsx("span",{className:"gradient-text",children:"The Next Frontier"})]}),f.jsx("p",{className:"section-subtitle",children:"Innovation never stops. We are building the capabilities of tomorrow, today."})]}),f.jsx("div",{className:"grid-responsive-3",children:Z2.map((r,i)=>{const n=r.icon;return f.jsxs("div",{className:"glass-panel",style:{padding:"28px",background:"#FFFFFF",border:"1px solid rgba(0, 163, 255, 0.3)",position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[f.jsxs("div",{children:[f.jsx("div",{style:{position:"absolute",top:"16px",right:"16px",padding:"4px 12px",borderRadius:"20px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",color:"#0284C7",fontSize:"0.75rem",fontWeight:700,textTransform:"uppercase"},children:r.badge}),f.jsx("div",{style:{width:"50px",height:"50px",borderRadius:"12px",background:"#F0F9FF",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:f.jsx(n,{size:26,color:"#00A3FF"})}),f.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.25rem",fontWeight:700,marginBottom:"10px",color:"#0F172A"},children:r.title}),f.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"20px"},children:r.desc})]}),f.jsx("div",{style:{paddingTop:"12px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:f.jsxs("button",{onClick:()=>e(r),style:{background:"none",border:"none",color:"#00A3FF",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontFamily:"var(--font-heading)"},children:[f.jsx("span",{children:"Read More"}),f.jsx(Ji,{size:14})]})})]},i)})})]}),f.jsx(Vo,{isOpen:!!t,onClose:()=>e(null),article:t})]})}const Q2=[{step:"01",title:"Discovery",category:"Process Phase 1",icon:fh,desc:"We start by understanding your business goals, target audience, technical constraints, and exact requirements."},{step:"02",title:"Design",category:"Process Phase 2",icon:no,desc:"Creating intuitive and engaging visual designs, wireframes, and interactive prototypes tailored to user conversion."},{step:"03",title:"Development",category:"Process Phase 3",icon:E2,desc:"Building the solution with clean, maintainable, and scalable code, security standards, and automated testing."},{step:"04",title:"Launch",category:"Process Phase 4",icon:ph,desc:"Deploying to live production servers, zero downtime, and providing ongoing support, monitoring, and updates 24/7."}];function ew(){const[t,e]=Ye.useState(null);return f.jsxs("section",{id:"process",style:{position:"relative"},children:[f.jsxs("div",{className:"section-container",children:[f.jsxs("div",{className:"section-title-wrap",children:[f.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[f.jsx(ph,{size:14,color:"#00A3FF"}),f.jsx("span",{children:"Proven Delivery Methodology"})]}),f.jsxs("h2",{className:"section-title",children:["Our ",f.jsx("span",{className:"gradient-text",children:"Process"})]}),f.jsx("p",{className:"section-subtitle",children:"How we turn your ideas into reality through strategic planning, clean development, and seamless deployment."})]}),f.jsx("div",{className:"grid-responsive-4",children:Q2.map((r,i)=>{const n=r.icon;return f.jsxs("div",{className:"glass-panel",style:{padding:"28px",background:"#FFFFFF",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[f.jsxs("div",{children:[f.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"2.2rem",fontWeight:900,color:"rgba(0, 163, 255, 0.25)",marginBottom:"8px"},children:r.step}),f.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"12px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:f.jsx(n,{size:24,color:"#0284C7"})}),f.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.2rem",fontWeight:700,marginBottom:"10px",color:"#0F172A"},children:r.title}),f.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"16px"},children:r.desc})]}),f.jsx("div",{style:{paddingTop:"12px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:f.jsxs("button",{onClick:()=>e(r),style:{background:"none",border:"none",color:"#00A3FF",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontFamily:"var(--font-heading)"},children:[f.jsx("span",{children:"Read More"}),f.jsx(Ji,{size:14})]})})]},i)})})]}),f.jsx(Vo,{isOpen:!!t,onClose:()=>e(null),article:t})]})}const tw=[{text:"Bank-Grade Security: Built-in threat modeling and compliance via DevSecOps."},{text:"Performance Optimized: Sub-second load times and efficient API routing."},{text:"Dedicated Project Managers: Transparent, agile, and daily communication."},{text:"Vendor-Agnostic Cloud: Proficiency across AWS, Azure, and Google Cloud."}],rw=[{icon:C2,title:"Healthcare & HealthTech",desc:"HIPAA compliant solutions, telemedicine platforms, and patient portals."},{icon:P2,title:"FinTech & Banking",desc:"High-frequency trading architectures, secure payment gateways, and blockchain."},{icon:B2,title:"Retail & eCommerce",desc:"Scalable online storefronts, inventory management ERPs, and POS systems."},{icon:R2,title:"EdTech & eLearning",desc:"Virtual classrooms, student LMS dashboards, and course monetization."}];function iw(){return f.jsx("section",{id:"philosophy",style:{position:"relative"},children:f.jsxs("div",{className:"section-container",children:[f.jsxs("div",{className:"section-title-wrap",children:[f.jsx("div",{className:"badge-glow",style:{marginBottom:"16px"},children:f.jsx("span",{children:"Digital Transformation Philosophy"})}),f.jsxs("h2",{className:"section-title",children:["The Blueidealteck ",f.jsx("span",{className:"gradient-text",children:"Philosophy"})]}),f.jsx("p",{className:"section-subtitle",children:"A deep dive into how we engineer success for modern enterprises."})]}),f.jsxs("div",{className:"glass-panel",style:{padding:"36px",background:"#FFFFFF",marginBottom:"60px"},children:[f.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.6rem",fontWeight:800,color:"#0F172A",marginBottom:"16px"},children:"Engineering Above Off-The-Shelf"}),f.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.8,marginBottom:"20px"},children:"At Blueidealteck, we recognize that true digital transformation requires custom-tailored approaches. Off-the-shelf software often forces successful organizations to change their proven workflows to fit a rigid system. We flip that paradigm. We build software that molds to your operational processes. Whether you need an agile DevOps consulting strategy to streamline deployments or a robust Web Application that scales to millions of users, our engineering teams build systems designed specifically for your long-term roadmap."}),f.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.8,marginBottom:"28px"},children:"Our commitment to excellence ensures that every project incorporates heavy technical diligence. From containerized microservices to enterprise-grade cybersecurity measures, we prioritize stability and data integrity above all else."}),f.jsx("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1.2rem",fontWeight:700,color:"#0F172A",marginBottom:"16px"},children:"Our Core Differentiators"}),f.jsx("div",{className:"grid-responsive-2",style:{gap:"16px"},children:tw.map((t,e)=>f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",background:"#F0F9FF",padding:"14px 18px",borderRadius:"10px",border:"1px solid rgba(0, 163, 255, 0.2)"},children:[f.jsx(Kr,{size:20,color:"#00A3FF",style:{flexShrink:0,marginTop:"2px"}}),f.jsx("span",{style:{fontSize:"0.95rem",color:"#0F172A",fontWeight:600},children:t.text})]},e))})]}),f.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[f.jsxs("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"2rem",fontWeight:800,color:"#0F172A"},children:["Industries We Empower ",f.jsx("span",{className:"gradient-text",children:"Globally"})]}),f.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1rem",marginTop:"8px"},children:"Domain expertise across heavily regulated and highly competitive markets."})]}),f.jsx("div",{className:"grid-responsive-4",children:rw.map((t,e)=>{const r=t.icon;return f.jsxs("div",{className:"glass-panel",style:{padding:"24px",background:"#FFFFFF"},children:[f.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"12px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:f.jsx(r,{size:24,color:"#0284C7"})}),f.jsx("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1.1rem",fontWeight:700,marginBottom:"8px",color:"#0F172A"},children:t.title}),f.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6},children:t.desc})]},e)})})]})})}function nw(){const[t,e]=Ye.useState({name:"",email:"",service:"Custom Software Development",message:""}),[r,i]=Ye.useState(!1),[n,a]=Ye.useState(""),[o,s]=Ye.useState(!1),l="info@blueidealteck.com",c=h=>{if(h.preventDefault(),!t.name||!t.email)return;const p=encodeURIComponent(`New Project Inquiry from ${t.name} [${t.service}]`),m=encodeURIComponent(`Name: ${t.name}
Email: ${t.email}
Service Required: ${t.service}

Project Description / Details:
${t.message}
`);window.location.href=`mailto:${l}?subject=${p}&body=${m}`,i(!0)},d=h=>{if(h.preventDefault(),!n)return;const p=encodeURIComponent("Free Infrastructure & Architecture Audit Request"),m=encodeURIComponent(`Please conduct a Free Technical Audit for company email: ${n}`);window.location.href=`mailto:${l}?subject=${p}&body=${m}`,s(!0)};return f.jsx("section",{id:"contact",style:{position:"relative"},children:f.jsxs("div",{className:"section-container",children:[f.jsx("div",{className:"glass-panel",style:{padding:"40px",background:"linear-gradient(135deg, #0284C7 0%, #00A3FF 100%)",color:"#FFFFFF",marginBottom:"60px",boxShadow:"0 20px 45px rgba(0, 163, 255, 0.3)"},children:f.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"24px"},children:[f.jsxs("div",{children:[f.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"4px 14px",borderRadius:"20px",background:"rgba(255, 255, 255, 0.2)",fontSize:"0.8rem",fontWeight:700,marginBottom:"12px"},children:[f.jsx(El,{size:14,color:"#FFF"}),f.jsx("span",{children:"Direct Mail to info@blueidealteck.com"})]}),f.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"2rem",fontWeight:900,marginBottom:"8px"},children:"Request Your Free Infrastructure & Architecture Audit"}),f.jsxs("p",{style:{fontSize:"1.05rem",opacity:.95,maxWidth:"640px"},children:["All audit submissions are routed directly to ",f.jsx("strong",{children:l})," for review by our engineering leads."]})]}),o?f.jsxs("div",{style:{background:"#FFFFFF",color:"#0F172A",padding:"16px 24px",borderRadius:"12px",fontWeight:800},children:["✓ Audit Email Prepared for ",l,"!"]}):f.jsxs("form",{onSubmit:d,style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[f.jsx("input",{type:"email",required:!0,value:n,onChange:h=>a(h.target.value),placeholder:"name@company.com",style:{padding:"14px 20px",borderRadius:"10px",border:"none",fontSize:"0.95rem",outline:"none",minWidth:"260px"}}),f.jsx("button",{type:"submit",style:{padding:"14px 24px",borderRadius:"10px",border:"none",background:"#0F172A",color:"#FFFFFF",fontWeight:700,cursor:"pointer",fontFamily:"var(--font-heading)"},children:"Send Audit Request"})]})]})}),f.jsxs("div",{className:"section-title-wrap",children:[f.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[f.jsx(dm,{size:14,color:"#00A3FF"}),f.jsxs("span",{children:["Direct Recipient: ",l]})]}),f.jsxs("h2",{className:"section-title",children:["Let's Turn Your Ideas ",f.jsx("span",{className:"gradient-text",children:"Into Impact"})]}),f.jsxs("p",{className:"section-subtitle",children:["Every submission on this page automatically sends an email to ",f.jsx("strong",{children:l}),"."]})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"40px"},children:[f.jsx("div",{className:"glass-panel",style:{padding:"36px",background:"#FFFFFF"},children:r?f.jsxs("div",{style:{textAlign:"center",padding:"40px 20px"},children:[f.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"#E0F2FE",border:"1px solid #00A3FF",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px auto"},children:f.jsx(Kr,{size:36,color:"#0284C7"})}),f.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.6rem",fontWeight:800,marginBottom:"12px",color:"#0F172A"},children:"Inquiry Dispatched!"}),f.jsxs("p",{style:{color:"var(--text-muted)",lineHeight:1.6,marginBottom:"24px"},children:["Your email has been dispatched to ",f.jsx("strong",{children:l}),". Our senior team will reply within 24 hours."]}),f.jsx("button",{onClick:()=>i(!1),className:"glow-btn-secondary",style:{display:"inline-flex"},children:"Send Another Inquiry"})]}):f.jsxs("form",{onSubmit:c,children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px",paddingBottom:"12px",borderBottom:"1px solid rgba(56, 189, 248, 0.2)"},children:[f.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.4rem",fontWeight:800,color:"#0F172A"},children:"Send Message"}),f.jsxs("span",{style:{fontSize:"0.78rem",color:"#0284C7",fontWeight:700},children:["To: ",l]})]}),f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{style:{display:"block",fontSize:"0.85rem",color:"#334155",marginBottom:"8px",fontWeight:600},children:"Your Name *"}),f.jsx("input",{type:"text",required:!0,value:t.name,onChange:h=>e({...t,name:h.target.value}),placeholder:"Enter your full name",style:{width:"100%",padding:"12px 16px",borderRadius:"10px",background:"#F8FAFC",border:"1px solid rgba(56, 189, 248, 0.3)",color:"#0F172A",fontSize:"0.95rem",outline:"none"}})]}),f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{style:{display:"block",fontSize:"0.85rem",color:"#334155",marginBottom:"8px",fontWeight:600},children:"Your Email Address *"}),f.jsx("input",{type:"email",required:!0,value:t.email,onChange:h=>e({...t,email:h.target.value}),placeholder:"name@company.com",style:{width:"100%",padding:"12px 16px",borderRadius:"10px",background:"#F8FAFC",border:"1px solid rgba(56, 189, 248, 0.3)",color:"#0F172A",fontSize:"0.95rem",outline:"none"}})]}),f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("label",{style:{display:"block",fontSize:"0.85rem",color:"#334155",marginBottom:"8px",fontWeight:600},children:"Select Required Service"}),f.jsxs("select",{value:t.service,onChange:h=>e({...t,service:h.target.value}),style:{width:"100%",padding:"12px 16px",borderRadius:"10px",background:"#F8FAFC",border:"1px solid rgba(56, 189, 248, 0.3)",color:"#0F172A",fontSize:"0.95rem",outline:"none"},children:[f.jsx("option",{value:"Custom Software Development",children:"Custom Software Development"}),f.jsx("option",{value:"DevOps & Cloud Services",children:"DevOps & Cloud Services"}),f.jsx("option",{value:"Web Application Development",children:"Web Application Development"}),f.jsx("option",{value:"UI/UX Design",children:"UI/UX Design"}),f.jsx("option",{value:"AI & Machine Learning",children:"AI & Machine Learning"}),f.jsx("option",{value:"Mobile App Development",children:"Mobile App Development"}),f.jsx("option",{value:"E-commerce Solutions",children:"E-commerce Solutions"}),f.jsx("option",{value:"Cloud Migration",children:"Cloud Migration"}),f.jsx("option",{value:"API Integration",children:"API Integration"}),f.jsx("option",{value:"Data Analytics & BI",children:"Data Analytics & BI"})]})]}),f.jsxs("div",{style:{marginBottom:"28px"},children:[f.jsx("label",{style:{display:"block",fontSize:"0.85rem",color:"#334155",marginBottom:"8px",fontWeight:600},children:"Project Requirements / Details"}),f.jsx("textarea",{rows:4,value:t.message,onChange:h=>e({...t,message:h.target.value}),placeholder:"Tell us about your project requirements...",style:{width:"100%",padding:"12px 16px",borderRadius:"10px",background:"#F8FAFC",border:"1px solid rgba(56, 189, 248, 0.3)",color:"#0F172A",fontSize:"0.95rem",outline:"none",resize:"vertical"}})]}),f.jsxs("button",{type:"submit",className:"glow-btn-primary",style:{width:"100%",justifyContent:"center"},children:[f.jsx("span",{children:"Send Mail to info@blueidealteck.com"}),f.jsx(l0,{size:16})]})]})}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[f.jsxs("div",{className:"glass-panel",style:{padding:"32px",background:"#FFFFFF"},children:[f.jsx("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1.3rem",fontWeight:800,marginBottom:"24px",color:"#0F172A"},children:"Corporate Contact Information"}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[f.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx(dm,{size:22,color:"#0284C7"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"0.8rem",color:"#0284C7",textTransform:"uppercase",fontWeight:700},children:"Direct Target Email"}),f.jsx("a",{href:`mailto:${l}`,style:{color:"#0F172A",textDecoration:"none",fontWeight:800,fontSize:"1.05rem"},children:l})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[f.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx(O2,{size:22,color:"#0284C7"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"0.8rem",color:"#0284C7",textTransform:"uppercase",fontWeight:700},children:"Call Us"}),f.jsx("a",{href:"tel:+919789836077",style:{color:"#0F172A",textDecoration:"none",fontWeight:800,fontSize:"1.05rem"},children:"+91 9789836077"})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[f.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx(D2,{size:22,color:"#0284C7"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"0.8rem",color:"#0284C7",textTransform:"uppercase",fontWeight:700},children:"Registered Address"}),f.jsxs("p",{style:{color:"#0F172A",fontSize:"0.95rem",lineHeight:1.5,marginTop:"4px",fontWeight:600},children:["SF/NO.139/1, ANNA NAGAR, MANGALAMPET,",f.jsx("br",{}),"Karnatham, Vriddhachalam, Cuddalore,",f.jsx("br",{}),"Tamil Nadu, India - 606104"]})]})]})]})]}),f.jsxs("div",{className:"glass-panel",style:{padding:"24px",display:"flex",alignItems:"center",gap:"16px",background:"#FFFFFF"},children:[f.jsx(S2,{size:28,color:"#00A3FF"}),f.jsxs("div",{children:[f.jsx("div",{style:{fontFamily:"var(--font-heading)",fontWeight:800,color:"#0F172A"},children:"Support & Email Routing Active"}),f.jsxs("div",{style:{fontSize:"0.88rem",color:"var(--text-muted)",fontWeight:500},children:["Emails are directly delivered to ",l," 24/7."]})]})]})]})]})]})})}const c0=[{name:"React.js",subtitle:"Frontend Powerhouse",category:"Frontend",icon:ld},{name:"Next.js",subtitle:"SSR & Static React",category:"Frontend",icon:ro},{name:"Vue.js",subtitle:"Progressive JS Framework",category:"Frontend",icon:ro},{name:"Angular",subtitle:"Enterprise Web Platform",category:"Frontend",icon:ro},{name:"TypeScript",subtitle:"Typed JavaScript Engine",category:"Frontend",icon:T2},{name:"Tailwind CSS",subtitle:"Utility-First Styling",category:"Frontend",icon:no},{name:"Svelte",subtitle:"Compiler Frontend Engine",category:"Frontend",icon:ld},{name:"Three.js / WebGL",subtitle:"3D Interactive Canvas",category:"Frontend",icon:iu},{name:"Node.js",subtitle:"Event-Driven Runtime",category:"Backend",icon:nu},{name:"Express.js",subtitle:"Microservices Framework",category:"Backend",icon:nu},{name:"NestJS",subtitle:"Scalable Node.js Server",category:"Backend",icon:io},{name:"Python",subtitle:"AI & Data Engineering",category:"Backend",icon:pm},{name:"Django",subtitle:"High-Level Python Web",category:"Backend",icon:pm},{name:"FastAPI",subtitle:"Async High-Speed API",category:"Backend",icon:qn},{name:"Java",subtitle:"Enterprise Banking Core",category:"Backend",icon:nu},{name:"Spring Boot",subtitle:"Java Microservices",category:"Backend",icon:io},{name:".NET Core",subtitle:"Cross-Platform Enterprise",category:"Backend",icon:io},{name:"Go (Golang)",subtitle:"High-Throughput Systems",category:"Backend",icon:qn},{name:"GraphQL",subtitle:"Typed Query Language",category:"Backend",icon:Ni},{name:"gRPC",subtitle:"Low-Latency RPC Protocol",category:"Backend",icon:Ni},{name:"AWS",subtitle:"Cloud Infrastructure",category:"Cloud & DevOps",icon:to},{name:"Azure",subtitle:"Microsoft Enterprise Cloud",category:"Cloud & DevOps",icon:to},{name:"GCP",subtitle:"Google Cloud Platform",category:"Cloud & DevOps",icon:to},{name:"Docker",subtitle:"Container Virtualization",category:"Cloud & DevOps",icon:iu},{name:"Kubernetes",subtitle:"Cluster Orchestration",category:"Cloud & DevOps",icon:iu},{name:"Terraform",subtitle:"Infrastructure as Code",category:"Cloud & DevOps",icon:hm},{name:"Jenkins",subtitle:"CI/CD Build Automation",category:"Cloud & DevOps",icon:um},{name:"GitHub Actions",subtitle:"Automated Workflows",category:"Cloud & DevOps",icon:qn},{name:"Ansible",subtitle:"Configuration Management",category:"Cloud & DevOps",icon:hm},{name:"Cloud Migration Tools",subtitle:"Zero-Downtime Migration",category:"Cloud & DevOps",icon:to},{name:"PostgreSQL",subtitle:"ACID Relational Core",category:"Databases",icon:Ds},{name:"MongoDB",subtitle:"Document NoSQL Database",category:"Databases",icon:Ds},{name:"Redis",subtitle:"In-Memory Cache & Queue",category:"Databases",icon:um},{name:"MySQL",subtitle:"Scalable Relational DB",category:"Databases",icon:Ds},{name:"Apache Kafka",subtitle:"Event Stream Processing",category:"Databases",icon:V2},{name:"BigQuery",subtitle:"Serverless Data Warehouse",category:"Databases",icon:Ds},{name:"TensorFlow",subtitle:"Deep Neural Networks",category:"AI & ML",icon:Ni},{name:"PyTorch",subtitle:"AI Research & NLP",category:"AI & ML",icon:Ni},{name:"OpenAI API & GenAI",subtitle:"LLM & Intelligent Bots",category:"AI & ML",icon:El},{name:"LangChain",subtitle:"LLM Orchestration",category:"AI & ML",icon:El},{name:"Flutter",subtitle:"Google UI Toolkit",category:"Mobile",icon:ao},{name:"React Native",subtitle:"Cross-Platform React",category:"Mobile",icon:ao},{name:"Swift (iOS)",subtitle:"Native Apple Development",category:"Mobile",icon:ao},{name:"Kotlin (Android)",subtitle:"Native Android Development",category:"Mobile",icon:ao},{name:"Figma",subtitle:"UI/UX Design Platform",category:"Design",icon:no},{name:"Adobe XD",subtitle:"Interactive Prototyping",category:"Design",icon:no},{name:"Storybook",subtitle:"Component UI Workshop",category:"Design",icon:no},{name:"Selenium",subtitle:"Cross-Browser Automation",category:"QA & Testing",icon:Kr},{name:"Jest",subtitle:"JS Unit & Integration",category:"QA & Testing",icon:ro},{name:"Cypress",subtitle:"E2E Web App Testing",category:"QA & Testing",icon:Kr},{name:"Prometheus",subtitle:"Real-Time Server Metrics",category:"Monitoring",icon:lm},{name:"Grafana",subtitle:"Telemetry Dashboards",category:"Monitoring",icon:lm},{name:"n8n",subtitle:"Fair-Code Automation",category:"Automation",icon:qn},{name:"Zapier",subtitle:"5,000+ Cloud Integrations",category:"Automation",icon:qn},{name:"Make",subtitle:"Visual Workflow Builder",category:"Automation",icon:io}];function aw(){return f.jsx("section",{id:"trending-tools",style:{position:"relative"},children:f.jsxs("div",{className:"section-container",children:[f.jsxs("div",{className:"section-title-wrap",children:[f.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[f.jsx(Ni,{size:14,color:"#00A3FF"}),f.jsx("span",{children:"Complete Engineering Ecosystem"})]}),f.jsxs("h2",{className:"section-title",children:["Trending Tools ",f.jsx("span",{className:"gradient-text",children:"& Tech Catalog"})]}),f.jsx("p",{className:"section-subtitle",children:"The comprehensive stack powering modern enterprises. We leverage 50+ battle-tested frameworks, databases, cloud tools, and AI automation engines."})]}),f.jsx("div",{className:"grid-responsive-4",style:{gap:"18px"},children:c0.map((t,e)=>{const r=t.icon;return f.jsxs("div",{className:"glass-panel",style:{padding:"18px",background:"#FFFFFF",border:"1px solid rgba(56, 189, 248, 0.25)",display:"flex",alignItems:"center",gap:"14px",transition:"var(--transition-smooth)"},children:[f.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx(r,{size:22,color:"#0284C7"})}),f.jsxs("div",{children:[f.jsx("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1rem",fontWeight:800,color:"#0F172A",marginBottom:"2px"},children:t.name}),f.jsx("div",{style:{fontSize:"0.78rem",color:"#0284C7",fontWeight:600},children:t.subtitle})]})]},e)})})]})})}const ow=[{id:1,title:"Top AI Innovations Transforming Businesses in 2026",category:"Artificial Intelligence",date:"July 2026",author:"AI Engineering Lead",desc:"Explore the top artificial intelligence innovations defining 2026. From generative models to predictive analytics, learn how enterprises leverage custom LLMs to 10x operational efficiency."},{id:2,title:"Cloud Cost Optimization: Maximize Your AWS/Azure ROI",category:"Cloud & DevOps",date:"July 2026",author:"Cloud Solutions Architect",desc:"Stop overpaying for cloud infrastructure. Learn actionable strategies to optimize your AWS and Azure costs securely, right-sizing workloads and eliminating idle resources."},{id:3,title:"Why CI/CD DevOps Automation is Crucial in 2026",category:"DevOps & CI/CD",date:"June 2026",author:"DevOps Lead Engineer",desc:"Discover why Continuous Integration and Continuous Deployment (CI/CD) pipelines are essential for agile software development, enabling zero-downtime releases."},{id:4,title:"Monolith vs Microservices: Choosing Your Architecture",category:"Architecture",date:"June 2026",author:"Principal Systems Architect",desc:"Struggling to scale your legacy application? Learn the structural differences between Monolith and Microservices architectures and when to execute a decomposition strategy."},{id:5,title:"Top 5 Custom Software Trends in 2026",category:"Custom Software",date:"June 2026",author:"Software Engineering Director",desc:"From AI-First Engineering to Green Computing, discover the 5 critical trends defining the future of digital transformation and enterprise software agility."},{id:6,title:"React vs Vue vs Angular: 2026 Comparison",category:"Frontend Development",date:"May 2026",author:"Frontend Engineering Specialist",desc:"The battle of the frontend frameworks continues. Which one offers the best performance, server-side rendering, and scalability for your next enterprise application?"},{id:7,title:"5 Strategies for Seamless Cloud Migration",category:"Cloud Migration",date:"May 2026",author:"Cloud Migration Consultant",desc:'Move to AWS or Azure without downtime. Learn the "Rehost, Replatform, Refactor" strategies used by top global enterprises to minimize disruption.'},{id:8,title:"Why Your Business Needs a Native Mobile App",category:"Mobile Apps",date:"May 2026",author:"Mobile Development Lead",desc:"Boost customer retention and sales with a dedicated iOS and Android app. Unlock the power of push notifications, offline access, and native device performance."},{id:9,title:"How AI Chatbots Are Revolutionizing Customer Service",category:"AI & Automation",date:"April 2026",author:"Conversational AI Specialist",desc:"Automate 70% of support queries and provide 24/7 instant responses with custom AI-powered chatbots built by our dedicated AI solutions team."},{id:10,title:"The Importance of UI/UX Design in Modern App Development",category:"UI/UX Design",date:"April 2026",author:"Head of UI/UX Design",desc:"Great code fails with bad design. Learn how superior UI/UX drives user retention, reduces friction, and dramatically increases conversion rates."},{id:11,title:"Cybersecurity Essentials for Small Businesses in 2026",category:"Cybersecurity",date:"March 2026",author:"Cybersecurity Specialist",desc:"43% of cyberattacks target small businesses. Discover the essential cybersecurity steps to protect your data and reputation with enterprise-grade Zero Trust measures."},{id:12,title:"Digital Marketing vs Traditional Marketing: What Works Best?",category:"Digital Strategy",date:"March 2026",author:"Growth & Strategy Consultant",desc:"Stop wasting money on billboards. Learn why Digital Marketing offers superior targeting, real-time ROI tracking, and deeper engagement for modern B2B businesses."},{id:13,title:"Why AI is the Future of Business Scaling",category:"Artificial Intelligence",date:"February 2026",author:"Enterprise AI Consultant",desc:"Artificial Intelligence isn't just a buzzword; it's the engine of modern growth. Discover how automated workflows and predictive analytics can 10x your team efficiency."},{id:14,title:"The Strategic Advantage of Cloud Migration",category:"Cloud Migration",date:"January 2026",author:"Cloud Infrastructure Lead",desc:"Moving legacy systems to the cloud reduces operational overhead and improves security posture. Learn the top strategies for a seamless transition to AWS or Azure."},{id:15,title:"Top Custom Software Trends for 2025",category:"Custom Software",date:"December 2025",author:"Tech Research Team",desc:"From low-code platforms to microservices architecture, stay ahead of the curve with these critical software development trends dominating the industry."}];function sw({onNavigateHome:t}){const[e,r]=Ye.useState(null),[i,n]=Ye.useState(""),[a,o]=Ye.useState("All"),s=["All","Artificial Intelligence","Cloud & DevOps","Architecture","Custom Software","Frontend Development","Mobile Apps","Cybersecurity"],l=ow.filter(c=>{const d=c.title.toLowerCase().includes(i.toLowerCase())||c.desc.toLowerCase().includes(i.toLowerCase()),h=a==="All"||c.category===a;return d&&h});return f.jsxs("div",{style:{paddingTop:"100px",position:"relative"},children:[f.jsx("section",{style:{padding:"60px 24px 40px 24px",textAlign:"center",background:"linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 100%)",borderBottom:"1px solid rgba(56, 189, 248, 0.2)"},children:f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[f.jsx("div",{style:{display:"flex",justifyContent:"flex-start",marginBottom:"20px"},children:f.jsxs("button",{onClick:t,className:"glow-btn-secondary",style:{padding:"8px 18px",fontSize:"0.85rem",display:"inline-flex",gap:"8px"},children:[f.jsx(hh,{size:16}),f.jsx("span",{children:"Back to Main Site"})]})}),f.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[f.jsx(I2,{size:14,color:"#00A3FF"}),f.jsx("span",{children:"Dedicated Knowledge Portal"})]}),f.jsxs("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2.5rem, 4.5vw, 3.8rem)",fontWeight:900,color:"#0F172A",marginBottom:"16px"},children:["Blueidealteck ",f.jsx("span",{className:"gradient-text",children:"Blog & Insights"})]}),f.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.2rem",maxWidth:"700px",margin:"0 auto 32px auto",lineHeight:1.6},children:"Expert perspectives on Technology, AI, Cloud Infrastructure, and Digital Transformation. Empowering businesses with actionable insights."}),f.jsxs("div",{style:{maxWidth:"560px",margin:"0 auto",position:"relative"},children:[f.jsx(fh,{size:20,color:"#0284C7",style:{position:"absolute",left:"18px",top:"50%",transform:"translateY(-50%)"}}),f.jsx("input",{type:"text",value:i,onChange:c=>n(c.target.value),placeholder:"Search 15+ engineering articles, AI trends, cloud guides...",style:{width:"100%",padding:"14px 20px 14px 50px",borderRadius:"30px",border:"1px solid rgba(0, 163, 255, 0.4)",background:"#FFFFFF",fontSize:"0.95rem",color:"#0F172A",outline:"none",boxShadow:"0 8px 25px rgba(2, 132, 199, 0.12)"}})]})]})}),f.jsxs("div",{className:"section-container",style:{paddingTop:"50px"},children:[f.jsx("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"10px",marginBottom:"40px"},children:s.map(c=>f.jsx("button",{onClick:()=>o(c),style:{padding:"8px 18px",borderRadius:"24px",border:a===c?"1px solid #00A3FF":"1px solid rgba(56, 189, 248, 0.25)",background:a===c?"#00A3FF":"#FFFFFF",color:a===c?"#FFFFFF":"#334155",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"var(--transition-smooth)"},children:c},c))}),f.jsx("div",{className:"grid-responsive-3",style:{gap:"28px",marginBottom:"60px"},children:l.map(c=>f.jsxs("div",{className:"glass-panel",style:{padding:"28px",background:"#FFFFFF",display:"flex",flexDirection:"column",justifyContent:"space-between",border:"1px solid rgba(56, 189, 248, 0.25)"},children:[f.jsxs("div",{children:[f.jsx("div",{style:{display:"inline-block",padding:"4px 12px",borderRadius:"12px",background:"#E0F2FE",color:"#0284C7",fontSize:"0.75rem",fontWeight:700,marginBottom:"14px"},children:c.category}),f.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.2rem",fontWeight:800,marginBottom:"12px",color:"#0F172A",lineHeight:1.4},children:c.title}),f.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"20px"},children:c.desc})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"16px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.8rem",color:"var(--text-dim)"},children:[f.jsx(s0,{size:14,color:"#0284C7"}),f.jsx("span",{children:c.date})]}),f.jsxs("button",{onClick:()=>r(c),style:{background:"none",border:"none",color:"#00A3FF",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontFamily:"var(--font-heading)"},children:[f.jsx("span",{children:"Read More"}),f.jsx(Ji,{size:14})]})]})]},c.id))}),f.jsx(aw,{})]}),f.jsx(Vo,{isOpen:!!e,onClose:()=>r(null),article:e})]})}function lw({onNavigateHome:t}){const[e,r]=Ye.useState(null),[i,n]=Ye.useState(""),[a,o]=Ye.useState("All"),s=["All","Frontend","Backend","Cloud & DevOps","Databases","AI & ML","Mobile","Design","QA & Testing","Monitoring","Automation"],l=c0.filter(c=>{const d=c.name.toLowerCase().includes(i.toLowerCase())||c.subtitle.toLowerCase().includes(i.toLowerCase())||c.category.toLowerCase().includes(i.toLowerCase()),h=a==="All"||c.category===a;return d&&h});return f.jsxs("div",{style:{paddingTop:"100px",position:"relative"},children:[f.jsx("section",{style:{padding:"60px 24px 40px 24px",textAlign:"center",background:"linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 100%)",borderBottom:"1px solid rgba(56, 189, 248, 0.2)"},children:f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[f.jsx("div",{style:{display:"flex",justifyContent:"flex-start",marginBottom:"20px"},children:f.jsxs("button",{onClick:t,className:"glow-btn-secondary",style:{padding:"8px 18px",fontSize:"0.85rem",display:"inline-flex",gap:"8px"},children:[f.jsx(hh,{size:16}),f.jsx("span",{children:"Back to Main Site"})]})}),f.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[f.jsx(Ni,{size:14,color:"#00A3FF"}),f.jsx("span",{children:"Dedicated Technology Ecosystem Page"})]}),f.jsxs("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2.4rem, 4.5vw, 3.8rem)",fontWeight:900,color:"#0F172A",marginBottom:"16px"},children:["Complete ",f.jsx("span",{className:"gradient-text",children:"Tech Stack Catalog"})]}),f.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.2rem",maxWidth:"740px",margin:"0 auto 32px auto",lineHeight:1.6},children:"Explore our comprehensive suite of 50+ core technologies spanning Frontend frameworks, Node.js microservices, Cloud DevOps, AI automation, Mobile engineering, and NoSQL/Relational databases."}),f.jsxs("div",{style:{maxWidth:"580px",margin:"0 auto",position:"relative"},children:[f.jsx(fh,{size:20,color:"#0284C7",style:{position:"absolute",left:"18px",top:"50%",transform:"translateY(-50%)"}}),f.jsx("input",{type:"text",value:i,onChange:c=>n(c.target.value),placeholder:"Search 50+ tools (e.g. React, Next.js, Python, AWS, Docker, Flutter, PostgreSQL...)",style:{width:"100%",padding:"14px 20px 14px 50px",borderRadius:"30px",border:"1px solid rgba(0, 163, 255, 0.4)",background:"#FFFFFF",fontSize:"0.95rem",color:"#0F172A",outline:"none",boxShadow:"0 8px 25px rgba(2, 132, 199, 0.12)"}})]})]})}),f.jsxs("div",{className:"section-container",style:{paddingTop:"50px"},children:[f.jsx("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"10px",marginBottom:"40px"},children:s.map(c=>f.jsx("button",{onClick:()=>o(c),style:{padding:"8px 18px",borderRadius:"24px",border:a===c?"1px solid #00A3FF":"1px solid rgba(56, 189, 248, 0.25)",background:a===c?"#00A3FF":"#FFFFFF",color:a===c?"#FFFFFF":"#334155",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"var(--transition-smooth)"},children:c},c))}),f.jsx("div",{className:"grid-responsive-3",style:{gap:"24px",marginBottom:"60px"},children:l.map((c,d)=>{const h=c.icon;return f.jsxs("div",{className:"glass-panel",style:{padding:"24px",background:"#FFFFFF",border:"1px solid rgba(56, 189, 248, 0.25)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[f.jsxs("div",{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"},children:[f.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"12px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(h,{size:24,color:"#0284C7"})}),f.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"#F0F9FF",color:"#0284C7",fontSize:"0.75rem",fontWeight:700},children:c.category})]}),f.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.25rem",fontWeight:800,color:"#0F172A",marginBottom:"4px"},children:c.name}),f.jsx("div",{style:{fontSize:"0.85rem",color:"#00A3FF",fontWeight:700,marginBottom:"12px"},children:c.subtitle})]}),f.jsx("div",{style:{paddingTop:"14px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:f.jsxs("button",{onClick:()=>r(c),style:{background:"none",border:"none",color:"#00A3FF",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",fontFamily:"var(--font-heading)"},children:[f.jsx("span",{children:"View Architecture Detail"}),f.jsx(Ji,{size:14})]})})]},d)})})]}),f.jsx(Vo,{isOpen:!!e,onClose:()=>r(null),article:e?{title:`${e.name} — ${e.subtitle}`,category:e.category,desc:`At Blueidealteck, we utilize ${e.name} (${e.subtitle}) to engineer scalable, security-first, and high-performance digital ecosystems.`,date:"Production Stack Spec"}:null})]})}function cw({onNavigateHome:t}){return f.jsxs("div",{style:{paddingTop:"100px",position:"relative"},children:[f.jsx("section",{style:{padding:"60px 24px 40px 24px",textAlign:"center",background:"linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 100%)",borderBottom:"1px solid rgba(56, 189, 248, 0.2)"},children:f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[f.jsx("div",{style:{display:"flex",justifyContent:"flex-start",marginBottom:"20px"},children:f.jsxs("button",{onClick:t,className:"glow-btn-secondary",style:{padding:"8px 18px",fontSize:"0.85rem",display:"inline-flex",gap:"8px"},children:[f.jsx(hh,{size:16}),f.jsx("span",{children:"Back to Main Site"})]})}),f.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[f.jsx(mh,{size:14,color:"#00A3FF"}),f.jsx("span",{children:"Official Legal Document"})]}),f.jsxs("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2.4rem, 4.5vw, 3.8rem)",fontWeight:900,color:"#0F172A",marginBottom:"16px"},children:["Privacy ",f.jsx("span",{className:"gradient-text",children:"Policy"})]}),f.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.15rem",maxWidth:"720px",margin:"0 auto",lineHeight:1.6},children:"Blueidealteck Software Solution Private Limited. Effective Date: July 27, 2026. Your privacy, confidentiality, and data security are our top corporate priorities."})]})}),f.jsx("div",{className:"section-container",style:{paddingTop:"50px",maxWidth:"960px"},children:f.jsxs("div",{className:"glass-panel",style:{padding:"40px",background:"#FFFFFF",lineHeight:1.8,color:"#334155"},children:[f.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,color:"#0F172A",marginBottom:"14px"},children:"1. Introduction & Corporate Commitment"}),f.jsxs("p",{style:{marginBottom:"24px"},children:["Welcome to Blueidealteck Software Solution Private Limited (“Blueidealteck”, “we”, “us”, or “our”). We are committed to protecting the personal information and confidential business data of all clients, website visitors, and partners. This Privacy Policy outlines how we collect, use, safeguard, and handle data when you interact with our website (",f.jsx("strong",{children:"blueidealteck.com"}),") or engage our software development and cloud consulting services."]}),f.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,color:"#0F172A",marginBottom:"14px"},children:"2. Information We Collect"}),f.jsx("p",{style:{marginBottom:"14px"},children:"We collect information necessary to provide bespoke software engineering, technical infrastructure audits, and client consultation services:"}),f.jsxs("ul",{style:{paddingLeft:"24px",marginBottom:"24px",display:"flex",flexDirection:"column",gap:"8px"},children:[f.jsxs("li",{children:[f.jsx("strong",{children:"Personal Identification Data:"})," Full name, corporate email address, phone number, and company name provided voluntarily through our inquiry form or free audit request."]}),f.jsxs("li",{children:[f.jsx("strong",{children:"Technical & Project Specifications:"})," Project outlines, architectural goals, technology preferences, and operational workflow requirements submitted for project estimation."]}),f.jsxs("li",{children:[f.jsx("strong",{children:"Automated Telemetry:"})," Anonymized browser type, IP address, device specifications, and page interaction metrics collected via standard web server logs for performance optimization."]})]}),f.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,color:"#0F172A",marginBottom:"14px"},children:"3. How We Use Your Information"}),f.jsx("p",{style:{marginBottom:"14px"},children:"We strictly limit the use of collected data to legitimate business operations:"}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"24px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[f.jsx(Kr,{size:18,color:"#00A3FF",style:{flexShrink:0,marginTop:"4px"}}),f.jsx("span",{children:"To prepare custom project blueprints, architecture cost estimations, and technical proposals."})]}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[f.jsx(Kr,{size:18,color:"#00A3FF",style:{flexShrink:0,marginTop:"4px"}}),f.jsxs("span",{children:["To communicate directly regarding your requested free infrastructure audit or support inquiry via ",f.jsx("strong",{children:"info@blueidealteck.com"}),"."]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[f.jsx(Kr,{size:18,color:"#00A3FF",style:{flexShrink:0,marginTop:"4px"}}),f.jsx("span",{children:"To maintain software reliability, prevent cybersecurity vulnerabilities, and optimize 120 FPS WebGL site performance."})]})]}),f.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,color:"#0F172A",marginBottom:"14px"},children:"4. Client Intellectual Property & Non-Disclosure (NDA)"}),f.jsxs("p",{style:{marginBottom:"24px"},children:["We understand that custom software ideas and proprietary workflows represent core business value. We sign Non-Disclosure Agreements (NDAs) prior to detailed discovery. ",f.jsx("strong",{children:"We do not sell, rent, lease, or trade your personal or project data to any third-party marketing companies under any circumstances."})," Upon project completion, 100% of custom code and IP rights belong to you."]}),f.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,color:"#0F172A",marginBottom:"14px"},children:"5. Bank-Grade Security Measures"}),f.jsx("p",{style:{marginBottom:"24px"},children:"We employ bank-grade security protocols, SSL/TLS encryption, restricted access controls, and DevSecOps practices to protect all data against unauthorized access, disclosure, or alteration."}),f.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,color:"#0F172A",marginBottom:"14px"},children:"6. Contact Our Data Protection Officer"}),f.jsx("p",{style:{marginBottom:"16px"},children:"If you have questions regarding this Privacy Policy or wish to exercise your data access or deletion rights, please contact our team:"}),f.jsxs("div",{style:{background:"#F0F9FF",padding:"20px 24px",borderRadius:"12px",borderLeft:"4px solid #00A3FF",fontWeight:600},children:[f.jsx("div",{children:"Blueidealteck Software Solution Private Limited"}),f.jsx("div",{children:"SF/NO.139/1, ANNA NAGAR, MANGALAMPET, Karnatham, Vriddhachalam, Cuddalore, Tamil Nadu, India - 606104"}),f.jsxs("div",{children:["Email: ",f.jsx("strong",{children:"info@blueidealteck.com"})," | Phone: ",f.jsx("strong",{children:"+91 9789836077"})]})]})]})})]})}const $a={services:"Blueidealteck provides 10 full-suite enterprise services: Custom Software Development, DevOps & Cloud Services, Web Application Development, UI/UX Design, AI & Machine Learning, Mobile App Development, E-commerce, Cloud Migration, API Integration, and Data Analytics.",audit:"You can request a Free Infrastructure & Architecture Audit right on our homepage or by emailing info@blueidealteck.com. Our senior technical leads will send a complete blueprint within 24 hours!",tech:"We leverage 50+ battle-tested technologies including React, Next.js, Node.js, Python, AWS, Azure, Docker, Kubernetes, Flutter, PostgreSQL, MongoDB, and OpenAI API.",contact:"You can reach out directly via email at info@blueidealteck.com or call our engineering office at +91 9789836077. Registered Address: SF/NO.139/1, ANNA NAGAR, MANGALAMPET, Cuddalore, TN 606104.",cost:"Custom software development projects are tailored to your exact business requirements. We offer 100% IP ownership, transparent milestone pricing, and zero recurring vendor license fees!"};function uw(){const[t,e]=Ye.useState(!1),[r,i]=Ye.useState([{sender:"bot",text:"Hello! I am Blueidealteck AI Assistant. How can I help you scale your software, cloud, or AI architecture today?"}]),[n,a]=Ye.useState(""),[o,s]=Ye.useState(!1),l=Ye.useRef(null);Ye.useEffect(()=>{l.current&&l.current.scrollIntoView({behavior:"smooth"})},[r,o]);const c=d=>{const h=d||n;if(!h.trim())return;const p={sender:"user",text:h};i(m=>[...m,p]),d||a(""),s(!0),setTimeout(()=>{let m="Thank you for reaching out! Our senior engineering team is ready to assist you. Please send your detailed project requirement directly to info@blueidealteck.com or call +91 9789836077.";const x=h.toLowerCase();x.includes("service")||x.includes("what do you do")||x.includes("build")?m=$a.services:x.includes("audit")||x.includes("free")||x.includes("review")?m=$a.audit:x.includes("tech")||x.includes("stack")||x.includes("tool")||x.includes("language")?m=$a.tech:x.includes("contact")||x.includes("email")||x.includes("phone")||x.includes("address")?m=$a.contact:(x.includes("cost")||x.includes("price")||x.includes("quote")||x.includes("rate"))&&(m=$a.cost),i(y=>[...y,{sender:"bot",text:m}]),s(!1)},600)};return f.jsxs("div",{style:{position:"fixed",bottom:"16px",right:"16px",zIndex:9999},children:[!t&&f.jsxs("button",{onClick:()=>e(!0),style:{width:"54px",height:"54px",borderRadius:"50%",background:"linear-gradient(135deg, #0284C7 0%, #00A3FF 100%)",border:"2px solid #FFFFFF",color:"#FFFFFF",boxShadow:"0 10px 30px rgba(0, 163, 255, 0.4)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease",position:"relative"},children:[f.jsx(cm,{size:26}),f.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",width:"12px",height:"12px",borderRadius:"50%",background:"#22C55E",border:"2px solid #FFFFFF"}})]}),t&&f.jsxs("div",{style:{width:"calc(100vw - 32px)",maxWidth:"360px",maxHeight:"480px",height:"75vh",background:"#FFFFFF",borderRadius:"20px",boxShadow:"0 20px 50px rgba(2, 132, 199, 0.25)",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",flexDirection:"column",overflow:"hidden",animation:"fadeInUp 0.3s ease"},children:[f.jsxs("div",{style:{padding:"14px 18px",background:"linear-gradient(135deg, #0284C7 0%, #00A3FF 100%)",color:"#FFFFFF",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[f.jsx("div",{style:{width:"34px",height:"34px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(cm,{size:20,color:"#FFF"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"0.95rem"},children:"Blueidealteck AI"}),f.jsxs("div",{style:{fontSize:"0.7rem",opacity:.9,display:"flex",alignItems:"center",gap:"4px"},children:[f.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#22C55E"}}),f.jsx("span",{children:"Online 24/7"})]})]})]}),f.jsx("button",{onClick:()=>e(!1),style:{background:"none",border:"none",color:"#FFFFFF",cursor:"pointer",padding:"4px"},children:f.jsx(gh,{size:20})})]}),f.jsxs("div",{style:{padding:"8px 12px",background:"#F0F9FF",borderBottom:"1px solid rgba(56, 189, 248, 0.2)",display:"flex",gap:"6px",overflowX:"auto",whiteSpace:"nowrap"},children:[f.jsx("button",{onClick:()=>c("What services do you offer?"),className:"chat-chip",children:"Services"}),f.jsx("button",{onClick:()=>c("How to get a free audit?"),className:"chat-chip",children:"Free Audit"}),f.jsx("button",{onClick:()=>c("What tech stack do you use?"),className:"chat-chip",children:"Tech Stack"}),f.jsx("button",{onClick:()=>c("How to contact sales?"),className:"chat-chip",children:"Contact Us"})]}),f.jsxs("div",{style:{flex:1,padding:"14px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"10px",background:"#F8FAFC"},children:[r.map((d,h)=>f.jsxs("div",{style:{display:"flex",justifyContent:d.sender==="user"?"flex-end":"flex-start",gap:"6px"},children:[d.sender==="bot"&&f.jsx("div",{style:{width:"26px",height:"26px",borderRadius:"50%",background:"#00A3FF",color:"#FFF",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",flexShrink:0},children:"AI"}),f.jsx("div",{style:{maxWidth:"82%",padding:"9px 13px",borderRadius:d.sender==="user"?"14px 14px 2px 14px":"14px 14px 14px 2px",background:d.sender==="user"?"#00A3FF":"#FFFFFF",color:d.sender==="user"?"#FFFFFF":"#0F172A",fontSize:"0.84rem",lineHeight:1.45,boxShadow:"0 2px 8px rgba(0, 0, 0, 0.05)",border:d.sender==="bot"?"1px solid rgba(56, 189, 248, 0.2)":"none"},children:d.text})]},h)),o&&f.jsx("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#0284C7",fontSize:"0.78rem",fontWeight:600},children:f.jsx("span",{children:"AI is typing..."})}),f.jsx("div",{ref:l})]}),f.jsxs("form",{onSubmit:d=>{d.preventDefault(),c()},style:{padding:"10px 12px",background:"#FFFFFF",borderTop:"1px solid rgba(56, 189, 248, 0.2)",display:"flex",gap:"6px",alignItems:"center"},children:[f.jsx("input",{type:"text",value:n,onChange:d=>a(d.target.value),placeholder:"Ask AI anything...",style:{flex:1,padding:"9px 12px",borderRadius:"20px",border:"1px solid rgba(56, 189, 248, 0.3)",fontSize:"0.84rem",outline:"none",color:"#0F172A"}}),f.jsx("button",{type:"submit",style:{width:"34px",height:"34px",borderRadius:"50%",background:"#00A3FF",color:"#FFFFFF",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx(l0,{size:15})})]})]}),f.jsx("style",{children:`
        .chat-chip {
          padding: 4px 10px;
          border-radius: 12px;
          background: #FFFFFF;
          border: 1px solid rgba(0, 163, 255, 0.3);
          color: #0284C7;
          font-size: 0.72rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .chat-chip:hover {
          background: #00A3FF;
          color: #FFFFFF;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})}function dw({onNavigate:t}){const e=()=>{window.scrollTo({top:0,behavior:"smooth"})},r=(n,a)=>{t&&t(n),n==="home"&&a?setTimeout(()=>{const o=document.getElementById(a);o&&o.scrollIntoView({behavior:"smooth"})},50):window.scrollTo({top:0,behavior:"smooth"})},i=[{name:"X (Twitter)",icon:H2,url:"https://x.com/blueidealteck"},{name:"Facebook",icon:w2,url:"https://www.facebook.com/people/Blueidealtec-K/pfbid0DrJ2ETaQFtdKne5BmiVKrJck7TbVvABi53qnQwvMsiT8t6iwncL6kmjCYCTi4n91l/"},{name:"Instagram",icon:L2,url:"https://www.instagram.com/blueidealteck/"},{name:"LinkedIn",icon:F2,url:"https://www.linkedin.com/company/blueidealteck-software-solution"}];return f.jsxs("footer",{style:{borderTop:"1px solid rgba(56, 189, 248, 0.3)",background:"#FFFFFF",position:"relative",zIndex:10},children:[f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"60px 24px 40px 24px"},children:[f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"40px",marginBottom:"50px"},children:[f.jsxs("div",{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"16px"},children:[f.jsx("div",{style:{padding:"4px",borderRadius:"10px",background:"#FFFFFF",border:"1px solid rgba(0, 163, 255, 0.3)",boxShadow:"0 4px 15px rgba(0, 163, 255, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",height:"40px"},children:f.jsx("img",{src:"./logo.png",alt:"Blueidealteck Logo",style:{height:"32px",width:"auto",objectFit:"contain"}})}),f.jsxs("span",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"1.3rem",color:"#0F172A"},children:["BLUEIDEAL",f.jsx("span",{style:{color:"#00A3FF"},children:"TECK"})]})]}),f.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.6,maxWidth:"280px",fontWeight:500,marginBottom:"12px"},children:["SF/NO.139/1, ANNA NAGAR, MANGALAMPET,",f.jsx("br",{}),"Karnatham, Vriddhachalam, Cuddalore,",f.jsx("br",{}),"Tamil Nadu, India - 606104"]}),f.jsxs("p",{style:{color:"#0F172A",fontSize:"0.88rem",fontWeight:600},children:["Phone: +91 9789836077",f.jsx("br",{}),"Email: info@blueidealteck.com"]})]}),f.jsxs("div",{children:[f.jsx("h5",{style:{fontFamily:"var(--font-heading)",color:"#0F172A",fontSize:"1rem",fontWeight:800,marginBottom:"16px"},children:"Useful Links"}),f.jsxs("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"10px"},children:[f.jsx("li",{children:f.jsx("button",{onClick:()=>r("home"),className:"footer-btn",children:"Home"})}),f.jsx("li",{children:f.jsx("button",{onClick:()=>r("home","about"),className:"footer-btn",children:"About us"})}),f.jsx("li",{children:f.jsx("button",{onClick:()=>r("home","services"),className:"footer-btn",children:"Services"})}),f.jsx("li",{children:f.jsx("button",{onClick:()=>r("techstack"),className:"footer-btn",children:"Tech Stack"})}),f.jsx("li",{children:f.jsx("button",{onClick:()=>r("blog"),className:"footer-btn",children:"Blog"})}),f.jsx("li",{children:f.jsx("button",{onClick:()=>r("privacy"),className:"footer-btn",children:"Privacy Policy"})})]})]}),f.jsxs("div",{children:[f.jsx("h5",{style:{fontFamily:"var(--font-heading)",color:"#0F172A",fontSize:"1rem",fontWeight:800,marginBottom:"16px"},children:"Resources & Portfolio"}),f.jsxs("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"10px"},children:[f.jsx("li",{children:f.jsx("button",{onClick:()=>r("home","about"),className:"footer-btn",children:"Success Stories (Case Studies)"})}),f.jsx("li",{children:f.jsx("button",{onClick:()=>r("techstack"),className:"footer-btn",children:"Developer Resources"})}),f.jsx("li",{children:f.jsx("button",{onClick:()=>r("home","future"),className:"footer-btn",children:"Next-Gen Frontiers"})}),f.jsx("li",{children:f.jsx("button",{onClick:()=>r("home","philosophy"),className:"footer-btn",children:"Our Philosophy"})})]})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"},children:[f.jsxs("div",{children:[f.jsx("h5",{style:{fontFamily:"var(--font-heading)",color:"#0F172A",fontSize:"1rem",fontWeight:800,marginBottom:"16px"},children:"Follow Us & Stay Connected"}),f.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.6,marginBottom:"16px"},children:"Connect with our official channels for the latest updates, engineering insights, and tech news."}),f.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:i.map((n,a)=>{const o=n.icon;return f.jsx("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",title:n.name,style:{width:"38px",height:"38px",borderRadius:"10px",background:"#F0F9FF",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#0284C7",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(0, 163, 255, 0.1)"},className:"social-icon-btn",children:f.jsx(o,{size:18})},a)})})]}),f.jsxs("button",{onClick:e,style:{marginTop:"24px",padding:"10px 18px",borderRadius:"10px",background:"#F0F9FF",border:"1px solid rgba(0, 163, 255, 0.3)",color:"#0284C7",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.85rem",fontFamily:"var(--font-heading)",fontWeight:700},children:[f.jsx("span",{children:"Back to Top"}),f.jsx(x2,{size:16})]})]})]}),f.jsxs("div",{style:{borderTop:"1px solid rgba(56, 189, 248, 0.2)",paddingTop:"24px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px",fontSize:"0.88rem",color:"var(--text-dim)"},children:[f.jsx("div",{children:"© 2026 Copyright Blueidealteck All Rights Reserved"}),f.jsx("div",{children:"Dedicated Multi-Page Router (Home, Tech Stack, Blog)."})]})]}),f.jsx("style",{children:`
        .footer-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          padding: 0;
          transition: var(--transition-smooth);
        }
        .footer-btn:hover {
          color: #00A3FF;
        }
        .social-icon-btn:hover {
          background: #00A3FF !important;
          color: #FFFFFF !important;
          transform: translateY(-3px);
          boxShadow: 0 6px 16px rgba(0, 163, 255, 0.3) !important;
        }
      `})]})}function hw(){const[t,e]=Ye.useState("home"),r=i=>{e(i),window.scrollTo({top:0,behavior:"smooth"})};return f.jsxs("div",{style:{position:"relative",width:"100%",minHeight:"100vh"},children:[f.jsx(m2,{page:t}),f.jsx(uw,{}),f.jsxs("div",{style:{position:"relative",zIndex:1},children:[f.jsx(X2,{currentPage:t,onNavigate:r}),f.jsxs("main",{children:[t==="home"&&f.jsxs(f.Fragment,{children:[f.jsx(q2,{}),f.jsx(K2,{}),f.jsx($2,{}),f.jsx(J2,{}),f.jsx(ew,{}),f.jsx(iw,{}),f.jsx(nw,{})]}),t==="blog"&&f.jsx(sw,{onNavigateHome:()=>r("home")}),t==="techstack"&&f.jsx(lw,{onNavigateHome:()=>r("home")}),t==="privacy"&&f.jsx(cw,{onNavigateHome:()=>r("home")})]}),f.jsx(dw,{onNavigate:r})]})]})}au.createRoot(document.getElementById("root")).render(f.jsx(P0.StrictMode,{children:f.jsx(hw,{})}));
