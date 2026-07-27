(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function gv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vm={exports:{}},Al={},xm={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),vv=Symbol.for("react.portal"),xv=Symbol.for("react.fragment"),_v=Symbol.for("react.strict_mode"),yv=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),Mv=Symbol.for("react.context"),Ev=Symbol.for("react.forward_ref"),wv=Symbol.for("react.suspense"),Tv=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),Tf=Symbol.iterator;function Cv(t){return t===null||typeof t!="object"?null:(t=Tf&&t[Tf]||t["@@iterator"],typeof t=="function"?t:null)}var _m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ym=Object.assign,Sm={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=Sm,this.updater=n||_m}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mm(){}Mm.prototype=Rs.prototype;function ud(t,e,n){this.props=t,this.context=e,this.refs=Sm,this.updater=n||_m}var dd=ud.prototype=new Mm;dd.constructor=ud;ym(dd,Rs.prototype);dd.isPureReactComponent=!0;var Af=Array.isArray,Em=Object.prototype.hasOwnProperty,fd={current:null},wm={key:!0,ref:!0,__self:!0,__source:!0};function Tm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Em.call(e,i)&&!wm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Uo,type:t,key:s,ref:o,props:r,_owner:fd.current}}function bv(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function Rv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cf=/\/+/g;function Kl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Rv(""+t.key):e.toString(36)}function Ua(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Uo:case vv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Kl(o,0):i,Af(r)?(n="",t!=null&&(n=t.replace(Cf,"$&/")+"/"),Ua(r,e,n,"",function(c){return c})):r!=null&&(hd(r)&&(r=bv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Af(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Kl(s,a);o+=Ua(s,e,n,l,r)}else if(l=Cv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Kl(s,a++),o+=Ua(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $o(t,e,n){if(t==null)return t;var i=[],r=0;return Ua(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Pv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},ka={transition:null},Lv={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:ka,ReactCurrentOwner:fd};function Am(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:$o,forEach:function(t,e,n){$o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $o(t,function(){e++}),e},toArray:function(t){return $o(t,function(e){return e})||[]},only:function(t){if(!hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Rs;Ge.Fragment=xv;Ge.Profiler=yv;Ge.PureComponent=ud;Ge.StrictMode=_v;Ge.Suspense=wv;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;Ge.act=Am;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ym({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Em.call(e,l)&&!wm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Uo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:Mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Sv,_context:t},t.Consumer=t};Ge.createElement=Tm;Ge.createFactory=function(t){var e=Tm.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Ev,render:t}};Ge.isValidElement=hd;Ge.lazy=function(t){return{$$typeof:Av,_payload:{_status:-1,_result:t},_init:Pv}};Ge.memo=function(t,e){return{$$typeof:Tv,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=ka.transition;ka.transition={};try{t()}finally{ka.transition=e}};Ge.unstable_act=Am;Ge.useCallback=function(t,e){return $t.current.useCallback(t,e)};Ge.useContext=function(t){return $t.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return $t.current.useEffect(t,e)};Ge.useId=function(){return $t.current.useId()};Ge.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return $t.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};Ge.useRef=function(t){return $t.current.useRef(t)};Ge.useState=function(t){return $t.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return $t.current.useTransition()};Ge.version="18.3.1";xm.exports=Ge;var $e=xm.exports;const Fv=gv($e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=$e,Iv=Symbol.for("react.element"),Nv=Symbol.for("react.fragment"),Uv=Object.prototype.hasOwnProperty,kv=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ov={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Uv.call(e,i)&&!Ov.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Iv,type:t,key:s,ref:o,props:r,_owner:kv.current}}Al.Fragment=Nv;Al.jsx=Cm;Al.jsxs=Cm;vm.exports=Al;var p=vm.exports,su={},bm={exports:{}},gn={},Rm={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,k){var G=P.length;P.push(k);e:for(;0<G;){var K=G-1>>>1,re=P[K];if(0<r(re,k))P[K]=k,P[G]=re,G=K;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var k=P[0],G=P.pop();if(G!==k){P[0]=G;e:for(var K=0,re=P.length,Ee=re>>>1;K<Ee;){var z=2*(K+1)-1,Q=P[z],Z=z+1,me=P[Z];if(0>r(Q,G))Z<re&&0>r(me,Q)?(P[K]=me,P[Z]=G,K=Z):(P[K]=Q,P[z]=G,K=z);else if(Z<re&&0>r(me,G))P[K]=me,P[Z]=G,K=Z;else break e}}return k}function r(P,k){var G=P.sortIndex-k.sortIndex;return G!==0?G:P.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,g=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=P)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function E(P){if(y=!1,v(P),!_)if(n(l)!==null)_=!0,j(R);else{var k=n(c);k!==null&&$(E,k.startTime-P)}}function R(P,k){_=!1,y&&(y=!1,u(D),D=-1),g=!0;var G=h;try{for(v(k),f=n(l);f!==null&&(!(f.expirationTime>k)||P&&!b());){var K=f.callback;if(typeof K=="function"){f.callback=null,h=f.priorityLevel;var re=K(f.expirationTime<=k);k=t.unstable_now(),typeof re=="function"?f.callback=re:f===n(l)&&i(l),v(k)}else i(l);f=n(l)}if(f!==null)var Ee=!0;else{var z=n(c);z!==null&&$(E,z.startTime-k),Ee=!1}return Ee}finally{f=null,h=G,g=!1}}var A=!1,T=null,D=-1,Y=5,S=-1;function b(){return!(t.unstable_now()-S<Y)}function ne(){if(T!==null){var P=t.unstable_now();S=P;var k=!0;try{k=T(!0,P)}finally{k?J():(A=!1,T=null)}}else A=!1}var J;if(typeof x=="function")J=function(){x(ne)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,X=L.port2;L.port1.onmessage=ne,J=function(){X.postMessage(null)}}else J=function(){m(ne,0)};function j(P){T=P,A||(A=!0,J())}function $(P,k){D=m(function(){P(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,j(R))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var G=h;h=k;try{return P()}finally{h=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,k){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=h;h=P;try{return k()}finally{h=G}},t.unstable_scheduleCallback=function(P,k,G){var K=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?K+G:K):G=K,P){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=G+re,P={id:d++,callback:k,priorityLevel:P,startTime:G,expirationTime:re,sortIndex:-1},G>K?(P.sortIndex=G,e(c,P),n(l)===null&&P===n(c)&&(y?(u(D),D=-1):y=!0,$(E,G-K))):(P.sortIndex=re,e(l,P),_||g||(_=!0,j(R))),P},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(P){var k=h;return function(){var G=h;h=k;try{return P.apply(this,arguments)}finally{h=G}}}})(Pm);Rm.exports=Pm;var zv=Rm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv=$e,mn=zv;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lm=new Set,vo={};function Rr(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(vo[t]=e,t=0;t<e.length;t++)Lm.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=Object.prototype.hasOwnProperty,Hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bf={},Rf={};function Gv(t){return ou.call(Rf,t)?!0:ou.call(bf,t)?!1:Hv.test(t)?Rf[t]=!0:(bf[t]=!0,!1)}function Vv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Wv(t,e,n,i){if(e===null||typeof e>"u"||Vv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var pd=/[\-:]([a-z])/g;function md(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pd,md);Dt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pd,md);Dt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pd,md);Dt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function gd(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Wv(e,n,r,i)&&(n=null),i||r===null?Gv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=Bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),Fm=Symbol.for("react.provider"),Dm=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),cu=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),Im=Symbol.for("react.offscreen"),Pf=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=Pf&&t[Pf]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,Zl;function Qs(t){if(Zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zl=e&&e[1]||""}return`
`+Zl+t}var Ql=!1;function Jl(t,e){if(!t||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function jv(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=Jl(t.type,!1),t;case 11:return t=Jl(t.type.render,!1),t;case 1:return t=Jl(t.type,!0),t;default:return""}}function uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case $r:return"Portal";case au:return"Profiler";case vd:return"StrictMode";case lu:return"Suspense";case cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dm:return(t.displayName||"Context")+".Consumer";case Fm:return(t._context.displayName||"Context")+".Provider";case xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _d:return e=t.displayName||null,e!==null?e:uu(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return uu(t(e))}catch{}}return null}function Xv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uu(e);case 8:return e===vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qv(t){var e=Nm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=qv(t))}function Um(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Nm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function $a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function du(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function km(t,e){e=e.checked,e!=null&&gd(t,"checked",e,!1)}function fu(t,e){km(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hu(t,e.type,n):e.hasOwnProperty("defaultValue")&&hu(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ff(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hu(t,e,n){(e!=="number"||$a(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function pu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Df(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Js(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function Om(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function If(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qo,Bm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yv=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(t){Yv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ao[e]=ao[t]})});function Hm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ao.hasOwnProperty(t)&&ao[t]?(""+e).trim():e+"px"}function Gm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var $v=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gu(t,e){if(e){if($v[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xu=null;function yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _u=null,fs=null,hs=null;function Nf(t){if(t=zo(t)){if(typeof _u!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Ll(e),_u(t.stateNode,t.type,e))}}function Vm(t){fs?hs?hs.push(t):hs=[t]:fs=t}function Wm(){if(fs){var t=fs,e=hs;if(hs=fs=null,Nf(t),e)for(t=0;t<e.length;t++)Nf(e[t])}}function jm(t,e){return t(e)}function Xm(){}var ec=!1;function qm(t,e,n){if(ec)return t(e,n);ec=!0;try{return jm(t,e,n)}finally{ec=!1,(fs!==null||hs!==null)&&(Xm(),Wm())}}function _o(t,e){var n=t.stateNode;if(n===null)return null;var i=Ll(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var yu=!1;if(hi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){yu=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{yu=!1}function Kv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var lo=!1,Ka=null,Za=!1,Su=null,Zv={onError:function(t){lo=!0,Ka=t}};function Qv(t,e,n,i,r,s,o,a,l){lo=!1,Ka=null,Kv.apply(Zv,arguments)}function Jv(t,e,n,i,r,s,o,a,l){if(Qv.apply(this,arguments),lo){if(lo){var c=Ka;lo=!1,Ka=null}else throw Error(te(198));Za||(Za=!0,Su=c)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uf(t){if(Pr(t)!==t)throw Error(te(188))}function ex(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Uf(r),t;if(s===i)return Uf(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function $m(t){return t=ex(t),t!==null?Km(t):null}function Km(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Km(t);if(e!==null)return e;t=t.sibling}return null}var Zm=mn.unstable_scheduleCallback,kf=mn.unstable_cancelCallback,tx=mn.unstable_shouldYield,nx=mn.unstable_requestPaint,vt=mn.unstable_now,ix=mn.unstable_getCurrentPriorityLevel,Sd=mn.unstable_ImmediatePriority,Qm=mn.unstable_UserBlockingPriority,Qa=mn.unstable_NormalPriority,rx=mn.unstable_LowPriority,Jm=mn.unstable_IdlePriority,Cl=null,$n=null;function sx(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:lx,ox=Math.log,ax=Math.LN2;function lx(t){return t>>>=0,t===0?32:31-(ox(t)/ax|0)|0}var Jo=64,ea=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=eo(a):(s&=o,s!==0&&(i=eo(s)))}else o=n&~r,o!==0?i=eo(o):s!==0&&(i=eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function cx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ux(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=cx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Mu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function eg(){var t=Jo;return Jo<<=1,!(Jo&4194240)&&(Jo=64),t}function tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function dx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function tg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ng,Ed,ig,rg,sg,Eu=!1,ta=[],Ni=null,Ui=null,ki=null,yo=new Map,So=new Map,Ci=[],fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Of(t,e){switch(t){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(e.pointerId)}}function Os(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=zo(e),e!==null&&Ed(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function hx(t,e,n,i,r){switch(e){case"focusin":return Ni=Os(Ni,t,e,n,i,r),!0;case"dragenter":return Ui=Os(Ui,t,e,n,i,r),!0;case"mouseover":return ki=Os(ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return yo.set(s,Os(yo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,So.set(s,Os(So.get(s)||null,t,e,n,i,r)),!0}return!1}function og(t){var e=mr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ym(n),e!==null){t.blockedOn=e,sg(t.priority,function(){ig(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xu=i,n.target.dispatchEvent(i),xu=null}else return e=zo(n),e!==null&&Ed(e),t.blockedOn=n,!1;e.shift()}return!0}function zf(t,e,n){Oa(t)&&n.delete(e)}function px(){Eu=!1,Ni!==null&&Oa(Ni)&&(Ni=null),Ui!==null&&Oa(Ui)&&(Ui=null),ki!==null&&Oa(ki)&&(ki=null),yo.forEach(zf),So.forEach(zf)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,Eu||(Eu=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,px)))}function Mo(t){function e(r){return zs(r,t)}if(0<ta.length){zs(ta[0],t);for(var n=1;n<ta.length;n++){var i=ta[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ni!==null&&zs(Ni,t),Ui!==null&&zs(Ui,t),ki!==null&&zs(ki,t),yo.forEach(e),So.forEach(e),n=0;n<Ci.length;n++)i=Ci[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ci.length&&(n=Ci[0],n.blockedOn===null);)og(n),n.blockedOn===null&&Ci.shift()}var ps=vi.ReactCurrentBatchConfig,el=!0;function mx(t,e,n,i){var r=Ze,s=ps.transition;ps.transition=null;try{Ze=1,wd(t,e,n,i)}finally{Ze=r,ps.transition=s}}function gx(t,e,n,i){var r=Ze,s=ps.transition;ps.transition=null;try{Ze=4,wd(t,e,n,i)}finally{Ze=r,ps.transition=s}}function wd(t,e,n,i){if(el){var r=wu(t,e,n,i);if(r===null)dc(t,e,i,tl,n),Of(t,i);else if(hx(r,t,e,n,i))i.stopPropagation();else if(Of(t,i),e&4&&-1<fx.indexOf(t)){for(;r!==null;){var s=zo(r);if(s!==null&&ng(s),s=wu(t,e,n,i),s===null&&dc(t,e,i,tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else dc(t,e,i,null,n)}}var tl=null;function wu(t,e,n,i){if(tl=null,t=yd(i),t=mr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ym(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tl=t,null}function ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ix()){case Sd:return 1;case Qm:return 4;case Qa:case rx:return 16;case Jm:return 536870912;default:return 16}default:return 16}}var Pi=null,Td=null,za=null;function lg(){if(za)return za;var t,e=Td,n=e.length,i,r="value"in Pi?Pi.value:Pi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return za=r.slice(t,1<i?1-i:void 0)}function Ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function Bf(){return!1}function vn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?na:Bf,this.isPropagationStopped=Bf,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ad=vn(Ps),Oo=ht({},Ps,{view:0,detail:0}),vx=vn(Oo),nc,ic,Bs,bl=ht({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(nc=t.screenX-Bs.screenX,ic=t.screenY-Bs.screenY):ic=nc=0,Bs=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),Hf=vn(bl),xx=ht({},bl,{dataTransfer:0}),_x=vn(xx),yx=ht({},Oo,{relatedTarget:0}),rc=vn(yx),Sx=ht({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Mx=vn(Sx),Ex=ht({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wx=vn(Ex),Tx=ht({},Ps,{data:0}),Gf=vn(Tx),Ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bx[t])?!!e[t]:!1}function Cd(){return Rx}var Px=ht({},Oo,{key:function(t){if(t.key){var e=Ax[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(t){return t.type==="keypress"?Ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lx=vn(Px),Fx=ht({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=vn(Fx),Dx=ht({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),Ix=vn(Dx),Nx=ht({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ux=vn(Nx),kx=ht({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ox=vn(kx),zx=[9,13,27,32],bd=hi&&"CompositionEvent"in window,co=null;hi&&"documentMode"in document&&(co=document.documentMode);var Bx=hi&&"TextEvent"in window&&!co,cg=hi&&(!bd||co&&8<co&&11>=co),Wf=" ",jf=!1;function ug(t,e){switch(t){case"keyup":return zx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function Hx(t,e){switch(t){case"compositionend":return dg(e);case"keypress":return e.which!==32?null:(jf=!0,Wf);case"textInput":return t=e.data,t===Wf&&jf?null:t;default:return null}}function Gx(t,e){if(Zr)return t==="compositionend"||!bd&&ug(t,e)?(t=lg(),za=Td=Pi=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cg&&e.locale!=="ko"?null:e.data;default:return null}}var Vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Vx[t.type]:e==="textarea"}function fg(t,e,n,i){Vm(i),e=nl(e,"onChange"),0<e.length&&(n=new Ad("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var uo=null,Eo=null;function Wx(t){Eg(t,0)}function Rl(t){var e=es(t);if(Um(e))return t}function jx(t,e){if(t==="change")return e}var hg=!1;if(hi){var sc;if(hi){var oc="oninput"in document;if(!oc){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),oc=typeof qf.oninput=="function"}sc=oc}else sc=!1;hg=sc&&(!document.documentMode||9<document.documentMode)}function Yf(){uo&&(uo.detachEvent("onpropertychange",pg),Eo=uo=null)}function pg(t){if(t.propertyName==="value"&&Rl(Eo)){var e=[];fg(e,Eo,t,yd(t)),qm(Wx,e)}}function Xx(t,e,n){t==="focusin"?(Yf(),uo=e,Eo=n,uo.attachEvent("onpropertychange",pg)):t==="focusout"&&Yf()}function qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(Eo)}function Yx(t,e){if(t==="click")return Rl(e)}function $x(t,e){if(t==="input"||t==="change")return Rl(e)}function Kx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:Kx;function wo(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ou.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function $f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kf(t,e){var n=$f(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$f(n)}}function mg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gg(){for(var t=window,e=$a();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$a(t.document)}return e}function Rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zx(t){var e=gg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mg(n.ownerDocument.documentElement,n)){if(i!==null&&Rd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kf(n,s);var o=Kf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qx=hi&&"documentMode"in document&&11>=document.documentMode,Qr=null,Tu=null,fo=null,Au=!1;function Zf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Au||Qr==null||Qr!==$a(i)||(i=Qr,"selectionStart"in i&&Rd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fo&&wo(fo,i)||(fo=i,i=nl(Tu,"onSelect"),0<i.length&&(e=new Ad("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qr)))}function ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jr={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},ac={},vg={};hi&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Pl(t){if(ac[t])return ac[t];if(!Jr[t])return t;var e=Jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vg)return ac[t]=e[n];return t}var xg=Pl("animationend"),_g=Pl("animationiteration"),yg=Pl("animationstart"),Sg=Pl("transitionend"),Mg=new Map,Qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){Mg.set(t,e),Rr(e,[t])}for(var lc=0;lc<Qf.length;lc++){var cc=Qf[lc],Jx=cc.toLowerCase(),e_=cc[0].toUpperCase()+cc.slice(1);Ki(Jx,"on"+e_)}Ki(xg,"onAnimationEnd");Ki(_g,"onAnimationIteration");Ki(yg,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(Sg,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t_=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Jf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Jv(i,e,void 0,t),t.currentTarget=null}function Eg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jf(r,a,c),s=l}}}if(Za)throw t=Su,Za=!1,Su=null,t}function nt(t,e){var n=e[Lu];n===void 0&&(n=e[Lu]=new Set);var i=t+"__bubble";n.has(i)||(wg(e,t,2,!1),n.add(i))}function uc(t,e,n){var i=0;e&&(i|=4),wg(n,t,i,e)}var ra="_reactListening"+Math.random().toString(36).slice(2);function To(t){if(!t[ra]){t[ra]=!0,Lm.forEach(function(n){n!=="selectionchange"&&(t_.has(n)||uc(n,!1,t),uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ra]||(e[ra]=!0,uc("selectionchange",!1,e))}}function wg(t,e,n,i){switch(ag(e)){case 1:var r=mx;break;case 4:r=gx;break;default:r=wd}n=r.bind(null,e,n,t),r=void 0,!yu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function dc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=mr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}qm(function(){var c=s,d=yd(n),f=[];e:{var h=Mg.get(t);if(h!==void 0){var g=Ad,_=t;switch(t){case"keypress":if(Ba(n)===0)break e;case"keydown":case"keyup":g=Lx;break;case"focusin":_="focus",g=rc;break;case"focusout":_="blur",g=rc;break;case"beforeblur":case"afterblur":g=rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ix;break;case xg:case _g:case yg:g=Mx;break;case Sg:g=Ux;break;case"scroll":g=vx;break;case"wheel":g=Ox;break;case"copy":case"cut":case"paste":g=wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vf}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var x=c,v;x!==null;){v=x;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,u!==null&&(E=_o(x,u),E!=null&&y.push(Ao(x,E,v)))),m)break;x=x.return}0<y.length&&(h=new g(h,_,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==xu&&(_=n.relatedTarget||n.fromElement)&&(mr(_)||_[pi]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?mr(_):null,_!==null&&(m=Pr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(y=Hf,E="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=Vf,E="onPointerLeave",u="onPointerEnter",x="pointer"),m=g==null?h:es(g),v=_==null?h:es(_),h=new y(E,x+"leave",g,n,d),h.target=m,h.relatedTarget=v,E=null,mr(d)===c&&(y=new y(u,x+"enter",_,n,d),y.target=v,y.relatedTarget=m,E=y),m=E,g&&_)t:{for(y=g,u=_,x=0,v=y;v;v=Lr(v))x++;for(v=0,E=u;E;E=Lr(E))v++;for(;0<x-v;)y=Lr(y),x--;for(;0<v-x;)u=Lr(u),v--;for(;x--;){if(y===u||u!==null&&y===u.alternate)break t;y=Lr(y),u=Lr(u)}y=null}else y=null;g!==null&&eh(f,h,g,y,!1),_!==null&&m!==null&&eh(f,m,_,y,!0)}}e:{if(h=c?es(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var R=jx;else if(Xf(h))if(hg)R=$x;else{R=qx;var A=Xx}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Yx);if(R&&(R=R(t,c))){fg(f,R,n,d);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&hu(h,"number",h.value)}switch(A=c?es(c):window,t){case"focusin":(Xf(A)||A.contentEditable==="true")&&(Qr=A,Tu=c,fo=null);break;case"focusout":fo=Tu=Qr=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Zf(f,n,d);break;case"selectionchange":if(Qx)break;case"keydown":case"keyup":Zf(f,n,d)}var T;if(bd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Zr?ug(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(cg&&n.locale!=="ko"&&(Zr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Zr&&(T=lg()):(Pi=d,Td="value"in Pi?Pi.value:Pi.textContent,Zr=!0)),A=nl(c,D),0<A.length&&(D=new Gf(D,t,null,n,d),f.push({event:D,listeners:A}),T?D.data=T:(T=dg(n),T!==null&&(D.data=T)))),(T=Bx?Hx(t,n):Gx(t,n))&&(c=nl(c,"onBeforeInput"),0<c.length&&(d=new Gf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}Eg(f,e)})}function Ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_o(t,n),s!=null&&i.unshift(Ao(t,s,r)),s=_o(t,e),s!=null&&i.push(Ao(t,s,r))),t=t.return}return i}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=_o(n,s),l!=null&&o.unshift(Ao(n,l,a))):r||(l=_o(n,s),l!=null&&o.push(Ao(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var n_=/\r\n?/g,i_=/\u0000|\uFFFD/g;function th(t){return(typeof t=="string"?t:""+t).replace(n_,`
`).replace(i_,"")}function sa(t,e,n){if(e=th(e),th(t)!==e&&n)throw Error(te(425))}function il(){}var Cu=null,bu=null;function Ru(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pu=typeof setTimeout=="function"?setTimeout:void 0,r_=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,s_=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(t){return nh.resolve(null).then(t).catch(o_)}:Pu;function o_(t){setTimeout(function(){throw t})}function fc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Mo(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ih(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ls,Co="__reactProps$"+Ls,pi="__reactContainer$"+Ls,Lu="__reactEvents$"+Ls,a_="__reactListeners$"+Ls,l_="__reactHandles$"+Ls;function mr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ih(t);t!==null;){if(n=t[qn])return n;t=ih(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[qn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Ll(t){return t[Co]||null}var Fu=[],ts=-1;function Zi(t){return{current:t}}function rt(t){0>ts||(t.current=Fu[ts],Fu[ts]=null,ts--)}function tt(t,e){ts++,Fu[ts]=t.current,t.current=e}var qi={},Ht=Zi(qi),rn=Zi(!1),Er=qi;function _s(t,e){var n=t.type.contextTypes;if(!n)return qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function rl(){rt(rn),rt(Ht)}function rh(t,e,n){if(Ht.current!==qi)throw Error(te(168));tt(Ht,e),tt(rn,n)}function Tg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Xv(t)||"Unknown",r));return ht({},n,i)}function sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,Er=Ht.current,tt(Ht,t),tt(rn,rn.current),!0}function sh(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Tg(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,rt(rn),rt(Ht),tt(Ht,t)):rt(rn),tt(rn,n)}var ai=null,Fl=!1,hc=!1;function Ag(t){ai===null?ai=[t]:ai.push(t)}function c_(t){Fl=!0,Ag(t)}function Qi(){if(!hc&&ai!==null){hc=!0;var t=0,e=Ze;try{var n=ai;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Fl=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),Zm(Sd,Qi),r}finally{Ze=e,hc=!1}}return null}var ns=[],is=0,ol=null,al=0,Sn=[],Mn=0,wr=null,ci=1,ui="";function cr(t,e){ns[is++]=al,ns[is++]=ol,ol=t,al=e}function Cg(t,e,n){Sn[Mn++]=ci,Sn[Mn++]=ui,Sn[Mn++]=wr,wr=t;var i=ci;t=ui;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ci=1<<32-zn(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function Pd(t){t.return!==null&&(cr(t,1),Cg(t,1,0))}function Ld(t){for(;t===ol;)ol=ns[--is],ns[is]=null,al=ns[--is],ns[is]=null;for(;t===wr;)wr=Sn[--Mn],Sn[Mn]=null,ui=Sn[--Mn],Sn[Mn]=null,ci=Sn[--Mn],Sn[Mn]=null}var pn=null,hn=null,at=!1,Nn=null;function bg(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function oh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wr!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function Du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Iu(t){if(at){var e=hn;if(e){var n=e;if(!oh(t,e)){if(Du(t))throw Error(te(418));e=Oi(n.nextSibling);var i=pn;e&&oh(t,e)?bg(i,n):(t.flags=t.flags&-4097|2,at=!1,pn=t)}}else{if(Du(t))throw Error(te(418));t.flags=t.flags&-4097|2,at=!1,pn=t}}}function ah(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function oa(t){if(t!==pn)return!1;if(!at)return ah(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ru(t.type,t.memoizedProps)),e&&(e=hn)){if(Du(t))throw Rg(),Error(te(418));for(;e;)bg(t,e),e=Oi(e.nextSibling)}if(ah(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?Oi(t.stateNode.nextSibling):null;return!0}function Rg(){for(var t=hn;t;)t=Oi(t.nextSibling)}function ys(){hn=pn=null,at=!1}function Fd(t){Nn===null?Nn=[t]:Nn.push(t)}var u_=vi.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function aa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lh(t){var e=t._init;return e(t._payload)}function Pg(t){function e(u,x){if(t){var v=u.deletions;v===null?(u.deletions=[x],u.flags|=16):v.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=Gi(u,x),u.index=0,u.sibling=null,u}function s(u,x,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<x?(u.flags|=2,x):v):(u.flags|=2,x)):(u.flags|=1048576,x)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,x,v,E){return x===null||x.tag!==6?(x=yc(v,u.mode,E),x.return=u,x):(x=r(x,v),x.return=u,x)}function l(u,x,v,E){var R=v.type;return R===Kr?d(u,x,v.props.children,E,v.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ti&&lh(R)===x.type)?(E=r(x,v.props),E.ref=Hs(u,x,v),E.return=u,E):(E=qa(v.type,v.key,v.props,null,u.mode,E),E.ref=Hs(u,x,v),E.return=u,E)}function c(u,x,v,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Sc(v,u.mode,E),x.return=u,x):(x=r(x,v.children||[]),x.return=u,x)}function d(u,x,v,E,R){return x===null||x.tag!==7?(x=_r(v,u.mode,E,R),x.return=u,x):(x=r(x,v),x.return=u,x)}function f(u,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=yc(""+x,u.mode,v),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ko:return v=qa(x.type,x.key,x.props,null,u.mode,v),v.ref=Hs(u,null,x),v.return=u,v;case $r:return x=Sc(x,u.mode,v),x.return=u,x;case Ti:var E=x._init;return f(u,E(x._payload),v)}if(Js(x)||Us(x))return x=_r(x,u.mode,v,null),x.return=u,x;aa(u,x)}return null}function h(u,x,v,E){var R=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(u,x,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:return v.key===R?l(u,x,v,E):null;case $r:return v.key===R?c(u,x,v,E):null;case Ti:return R=v._init,h(u,x,R(v._payload),E)}if(Js(v)||Us(v))return R!==null?null:d(u,x,v,E,null);aa(u,v)}return null}function g(u,x,v,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(v)||null,a(x,u,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ko:return u=u.get(E.key===null?v:E.key)||null,l(x,u,E,R);case $r:return u=u.get(E.key===null?v:E.key)||null,c(x,u,E,R);case Ti:var A=E._init;return g(u,x,v,A(E._payload),R)}if(Js(E)||Us(E))return u=u.get(v)||null,d(x,u,E,R,null);aa(x,E)}return null}function _(u,x,v,E){for(var R=null,A=null,T=x,D=x=0,Y=null;T!==null&&D<v.length;D++){T.index>D?(Y=T,T=null):Y=T.sibling;var S=h(u,T,v[D],E);if(S===null){T===null&&(T=Y);break}t&&T&&S.alternate===null&&e(u,T),x=s(S,x,D),A===null?R=S:A.sibling=S,A=S,T=Y}if(D===v.length)return n(u,T),at&&cr(u,D),R;if(T===null){for(;D<v.length;D++)T=f(u,v[D],E),T!==null&&(x=s(T,x,D),A===null?R=T:A.sibling=T,A=T);return at&&cr(u,D),R}for(T=i(u,T);D<v.length;D++)Y=g(T,u,D,v[D],E),Y!==null&&(t&&Y.alternate!==null&&T.delete(Y.key===null?D:Y.key),x=s(Y,x,D),A===null?R=Y:A.sibling=Y,A=Y);return t&&T.forEach(function(b){return e(u,b)}),at&&cr(u,D),R}function y(u,x,v,E){var R=Us(v);if(typeof R!="function")throw Error(te(150));if(v=R.call(v),v==null)throw Error(te(151));for(var A=R=null,T=x,D=x=0,Y=null,S=v.next();T!==null&&!S.done;D++,S=v.next()){T.index>D?(Y=T,T=null):Y=T.sibling;var b=h(u,T,S.value,E);if(b===null){T===null&&(T=Y);break}t&&T&&b.alternate===null&&e(u,T),x=s(b,x,D),A===null?R=b:A.sibling=b,A=b,T=Y}if(S.done)return n(u,T),at&&cr(u,D),R;if(T===null){for(;!S.done;D++,S=v.next())S=f(u,S.value,E),S!==null&&(x=s(S,x,D),A===null?R=S:A.sibling=S,A=S);return at&&cr(u,D),R}for(T=i(u,T);!S.done;D++,S=v.next())S=g(T,u,D,S.value,E),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?D:S.key),x=s(S,x,D),A===null?R=S:A.sibling=S,A=S);return t&&T.forEach(function(ne){return e(u,ne)}),at&&cr(u,D),R}function m(u,x,v,E){if(typeof v=="object"&&v!==null&&v.type===Kr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:e:{for(var R=v.key,A=x;A!==null;){if(A.key===R){if(R=v.type,R===Kr){if(A.tag===7){n(u,A.sibling),x=r(A,v.props.children),x.return=u,u=x;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ti&&lh(R)===A.type){n(u,A.sibling),x=r(A,v.props),x.ref=Hs(u,A,v),x.return=u,u=x;break e}n(u,A);break}else e(u,A);A=A.sibling}v.type===Kr?(x=_r(v.props.children,u.mode,E,v.key),x.return=u,u=x):(E=qa(v.type,v.key,v.props,null,u.mode,E),E.ref=Hs(u,x,v),E.return=u,u=E)}return o(u);case $r:e:{for(A=v.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(u,x.sibling),x=r(x,v.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=Sc(v,u.mode,E),x.return=u,u=x}return o(u);case Ti:return A=v._init,m(u,x,A(v._payload),E)}if(Js(v))return _(u,x,v,E);if(Us(v))return y(u,x,v,E);aa(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,v),x.return=u,u=x):(n(u,x),x=yc(v,u.mode,E),x.return=u,u=x),o(u)):n(u,x)}return m}var Ss=Pg(!0),Lg=Pg(!1),ll=Zi(null),cl=null,rs=null,Dd=null;function Id(){Dd=rs=cl=null}function Nd(t){var e=ll.current;rt(ll),t._currentValue=e}function Nu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){cl=t,Dd=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Dd!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(cl===null)throw Error(te(308));rs=t,cl.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var gr=null;function Ud(t){gr===null?gr=[t]:gr.push(t)}function Fg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ud(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ud(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Ha(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Md(t,n)}}function ch(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ul(t,e,n,i){var r=t.updateQueue;Ai=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(g,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,f,h):_,h==null)break e;f=ht({},f,h);break e;case 2:Ai=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ar|=o,t.lanes=o,t.memoizedState=f}}function uh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Bo={},Kn=Zi(Bo),bo=Zi(Bo),Ro=Zi(Bo);function vr(t){if(t===Bo)throw Error(te(174));return t}function Od(t,e){switch(tt(Ro,e),tt(bo,t),tt(Kn,Bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mu(e,t)}rt(Kn),tt(Kn,e)}function Ms(){rt(Kn),rt(bo),rt(Ro)}function Ig(t){vr(Ro.current);var e=vr(Kn.current),n=mu(e,t.type);e!==n&&(tt(bo,t),tt(Kn,n))}function zd(t){bo.current===t&&(rt(Kn),rt(bo))}var ut=Zi(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pc=[];function Bd(){for(var t=0;t<pc.length;t++)pc[t]._workInProgressVersionPrimary=null;pc.length=0}var Ga=vi.ReactCurrentDispatcher,mc=vi.ReactCurrentBatchConfig,Tr=0,dt=null,St=null,Ct=null,fl=!1,ho=!1,Po=0,d_=0;function Nt(){throw Error(te(321))}function Hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Gd(t,e,n,i,r,s){if(Tr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ga.current=t===null||t.memoizedState===null?m_:g_,t=n(i,r),ho){s=0;do{if(ho=!1,Po=0,25<=s)throw Error(te(301));s+=1,Ct=St=null,e.updateQueue=null,Ga.current=v_,t=n(i,r)}while(ho)}if(Ga.current=hl,e=St!==null&&St.next!==null,Tr=0,Ct=St=dt=null,fl=!1,e)throw Error(te(300));return t}function Vd(){var t=Po!==0;return Po=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?dt.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Cn(){if(St===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ct===null?dt.memoizedState:Ct.next;if(e!==null)Ct=e,St=t;else{if(t===null)throw Error(te(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ct===null?dt.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Lo(t,e){return typeof e=="function"?e(t):e}function gc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Tr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,dt.lanes|=d,Ar|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Hn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Ar|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Hn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ng(){}function Ug(t,e){var n=dt,i=Cn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,Wd(zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Fo(9,Og.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(te(349));Tr&30||kg(n,e,r)}return r}function kg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Og(t,e,n,i){e.value=n,e.getSnapshot=i,Bg(e)&&Hg(t)}function zg(t,e,n){return n(function(){Bg(e)&&Hg(t)})}function Bg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function Hg(t){var e=mi(t,1);e!==null&&Bn(e,t,1,-1)}function dh(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},e.queue=t,t=t.dispatch=p_.bind(null,dt,t),[e.memoizedState,t]}function Fo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Gg(){return Cn().memoizedState}function Va(t,e,n,i){var r=Wn();dt.flags|=t,r.memoizedState=Fo(1|e,n,void 0,i===void 0?null:i)}function Dl(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&Hd(i,o.deps)){r.memoizedState=Fo(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Fo(1|e,n,s,i)}function fh(t,e){return Va(8390656,8,t,e)}function Wd(t,e){return Dl(2048,8,t,e)}function Vg(t,e){return Dl(4,2,t,e)}function Wg(t,e){return Dl(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xg(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4,4,jg.bind(null,e,t),n)}function jd(){}function qg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Yg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function $g(t,e,n){return Tr&21?(Hn(n,e)||(n=eg(),dt.lanes|=n,Ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function f_(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=mc.transition;mc.transition={};try{t(!1),e()}finally{Ze=n,mc.transition=i}}function Kg(){return Cn().memoizedState}function h_(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Zg(t))Qg(e,n);else if(n=Fg(t,e,n,i),n!==null){var r=Xt();Bn(n,t,i,r),Jg(n,e,i)}}function p_(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zg(t))Qg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(r.next=r,Ud(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Fg(t,e,r,i),n!==null&&(r=Xt(),Bn(n,t,i,r),Jg(n,e,i))}}function Zg(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function Qg(t,e){ho=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Jg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Md(t,n)}}var hl={readContext:An,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},m_={readContext:An,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:fh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Va(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Va(4194308,4,t,e)},useInsertionEffect:function(t,e){return Va(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=h_.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:dh,useDebugValue:jd,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=dh(!1),e=t[0];return t=f_.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Wn();if(at){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),bt===null)throw Error(te(349));Tr&30||kg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,fh(zg.bind(null,i,s,t),[t]),i.flags|=2048,Fo(9,Og.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=bt.identifierPrefix;if(at){var n=ui,i=ci;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=d_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},g_={readContext:An,useCallback:qg,useContext:An,useEffect:Wd,useImperativeHandle:Xg,useInsertionEffect:Vg,useLayoutEffect:Wg,useMemo:Yg,useReducer:gc,useRef:Gg,useState:function(){return gc(Lo)},useDebugValue:jd,useDeferredValue:function(t){var e=Cn();return $g(e,St.memoizedState,t)},useTransition:function(){var t=gc(Lo)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:Ug,useId:Kg,unstable_isNewReconciler:!1},v_={readContext:An,useCallback:qg,useContext:An,useEffect:Wd,useImperativeHandle:Xg,useInsertionEffect:Vg,useLayoutEffect:Wg,useMemo:Yg,useReducer:vc,useRef:Gg,useState:function(){return vc(Lo)},useDebugValue:jd,useDeferredValue:function(t){var e=Cn();return St===null?e.memoizedState=t:$g(e,St.memoizedState,t)},useTransition:function(){var t=vc(Lo)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:Ug,useId:Kg,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Hi(t),s=fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Bn(e,t,r,i),Ha(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Hi(t),s=fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Bn(e,t,r,i),Ha(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Hi(t),r=fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(Bn(e,t,i,n),Ha(e,t,i))}};function hh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!wo(n,i)||!wo(r,s):!0}function e0(t,e,n){var i=!1,r=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=sn(e)?Er:Ht.current,i=e.contextTypes,s=(i=i!=null)?_s(t,r):qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ph(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function ku(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=sn(e)?Er:Ht.current,r.context=_s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Il.enqueueReplaceState(r,r.state,null),ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,e){try{var n="",i=e;do n+=jv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ou(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var x_=typeof WeakMap=="function"?WeakMap:Map;function t0(t,e,n){n=fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ml||(ml=!0,Yu=i),Ou(t,e)},n}function n0(t,e,n){n=fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ou(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ou(t,e),typeof i!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new x_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=F_.bind(null,t,e,n),e.then(t,t))}function gh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fi(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var __=vi.ReactCurrentOwner,nn=!1;function Wt(t,e,n,i){e.child=t===null?Lg(e,null,n,i):Ss(e,t.child,n,i)}function xh(t,e,n,i,r){n=n.render;var s=e.ref;return ms(e,r),i=Gd(t,e,n,i,s,r),n=Vd(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(at&&n&&Pd(e),e.flags|=1,Wt(t,e,i,r),e.child)}function _h(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,i0(t,e,s,i,r)):(t=qa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(o,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function i0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(wo(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,gi(t,e,r)}return zu(t,e,n,i,r)}function r0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(os,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(os,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(os,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(os,dn),dn|=i;return Wt(t,e,r,n),e.child}function s0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zu(t,e,n,i,r){var s=sn(n)?Er:Ht.current;return s=_s(e,s),ms(e,r),n=Gd(t,e,n,i,s,r),i=Vd(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(at&&i&&Pd(e),e.flags|=1,Wt(t,e,n,r),e.child)}function yh(t,e,n,i,r){if(sn(n)){var s=!0;sl(e)}else s=!1;if(ms(e,r),e.stateNode===null)Wa(t,e),e0(e,n,i),ku(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=sn(n)?Er:Ht.current,c=_s(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ph(e,o,i,c),Ai=!1;var h=e.memoizedState;o.state=h,ul(e,i,o,r),l=e.memoizedState,a!==i||h!==l||rn.current||Ai?(typeof d=="function"&&(Uu(e,n,d,i),l=e.memoizedState),(a=Ai||hh(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Dg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Dn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=sn(n)?Er:Ht.current,l=_s(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&ph(e,o,i,l),Ai=!1,h=e.memoizedState,o.state=h,ul(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||rn.current||Ai?(typeof g=="function"&&(Uu(e,n,g,i),_=e.memoizedState),(c=Ai||hh(e,n,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Bu(t,e,n,i,s,r)}function Bu(t,e,n,i,r,s){s0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sh(e,n,!1),gi(t,e,s);i=e.stateNode,__.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=i.state,r&&sh(e,n,!0),e.child}function o0(t){var e=t.stateNode;e.pendingContext?rh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rh(t,e.context,!1),Od(t,e.containerInfo)}function Sh(t,e,n,i,r){return ys(),Fd(r),e.flags|=256,Wt(t,e,n,i),e.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Gu(t){return{baseLanes:t,cachePool:null,transitions:null}}function a0(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(ut,r&1),t===null)return Iu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kl(o,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gu(n),e.memoizedState=Hu,t):Xd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return y_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Gi(a,s):(s=_r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Gu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hu,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xd(t,e){return e=kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function la(t,e,n,i){return i!==null&&Fd(i),Ss(e,t.child,null,n),t=Xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function y_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=xc(Error(te(422))),la(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kl({mode:"visible",children:i.children},r,0,null),s=_r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,o),e.child.memoizedState=Gu(o),e.memoizedState=Hu,s);if(!(e.mode&1))return la(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=xc(s,i,void 0),la(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),Bn(i,t,r,-1))}return Qd(),i=xc(Error(te(421))),la(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=D_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Oi(r.nextSibling),pn=e,at=!0,Nn=null,t!==null&&(Sn[Mn++]=ci,Sn[Mn++]=ui,Sn[Mn++]=wr,ci=t.id,ui=t.overflow,wr=e),e=Xd(e,i.children),e.flags|=4096,e)}function Mh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nu(t.return,e,n)}function _c(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function l0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mh(t,n,e);else if(t.tag===19)Mh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_c(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&dl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_c(e,!0,n,null,s);break;case"together":_c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function S_(t,e,n){switch(e.tag){case 3:o0(e),ys();break;case 5:Ig(e);break;case 1:sn(e.type)&&sl(e);break;case 4:Od(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(ll,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?a0(t,e,n):(tt(ut,ut.current&1),t=gi(t,e,n),t!==null?t.sibling:null);tt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return l0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,r0(t,e,n)}return gi(t,e,n)}var c0,Vu,u0,d0;c0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vu=function(){};u0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(Kn.current);var s=null;switch(n){case"input":r=du(t,r),i=du(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=pu(t,r),i=pu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=il)}gu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&nt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};d0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Gs(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function M_(t,e,n){var i=e.pendingProps;switch(Ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return sn(e.type)&&rl(),Ut(e),null;case 3:return i=e.stateNode,Ms(),rt(rn),rt(Ht),Bd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Zu(Nn),Nn=null))),Vu(t,e),Ut(e),null;case 5:zd(e);var r=vr(Ro.current);if(n=e.type,t!==null&&e.stateNode!=null)u0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ut(e),null}if(t=vr(Kn.current),oa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[Co]=s,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<to.length;r++)nt(to[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Lf(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":Df(i,s),nt("invalid",i)}gu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&sa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sa(i.textContent,a,t),r=["children",""+a]):vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nt("scroll",i)}switch(n){case"input":Zo(i),Ff(i,s,!0);break;case"textarea":Zo(i),If(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[qn]=e,t[Co]=i,c0(t,e,!1,!1),e.stateNode=t;e:{switch(o=vu(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<to.length;r++)nt(to[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":Lf(t,i),r=du(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),nt("invalid",t);break;case"textarea":Df(t,i),r=pu(t,i),nt("invalid",t);break;default:r=i}gu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xo(t,l):typeof l=="number"&&xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",t):l!=null&&gd(t,s,l,o))}switch(n){case"input":Zo(t),Ff(t,i,!1);break;case"textarea":Zo(t),If(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)d0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=vr(Ro.current),vr(Kn.current),oa(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:sa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return Ut(e),null;case 13:if(rt(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&hn!==null&&e.mode&1&&!(e.flags&128))Rg(),ys(),e.flags|=98560,s=!1;else if(s=oa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[qn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else Nn!==null&&(Zu(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Mt===0&&(Mt=3):Qd())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return Ms(),Vu(t,e),t===null&&To(e.stateNode.containerInfo),Ut(e),null;case 10:return Nd(e.type._context),Ut(e),null;case 17:return sn(e.type)&&rl(),Ut(e),null;case 19:if(rt(ut),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Gs(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dl(t),o!==null){for(e.flags|=128,Gs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>ws&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304)}else{if(!i)if(t=dl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Ut(e),null}else 2*vt()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ut.current,tt(ut,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return Zd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function E_(t,e){switch(Ld(e),e.tag){case 1:return sn(e.type)&&rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),rt(rn),rt(Ht),Bd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zd(e),null;case 13:if(rt(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(ut),null;case 4:return Ms(),null;case 10:return Nd(e.type._context),null;case 22:case 23:return Zd(),null;case 24:return null;default:return null}}var ca=!1,zt=!1,w_=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Wu(t,e,n){try{n()}catch(i){pt(t,e,i)}}var Eh=!1;function T_(t,e){if(Cu=el,t=gg(),Rd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bu={focusedElem:t,selectionRange:n},el=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Dn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(E){pt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=Eh,Eh=!1,_}function po(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Wu(e,n,s)}r=r.next}while(r!==i)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ju(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f0(t){var e=t.alternate;e!==null&&(t.alternate=null,f0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Co],delete e[Lu],delete e[a_],delete e[l_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function h0(t){return t.tag===5||t.tag===3||t.tag===4}function wh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||h0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=il));else if(i!==4&&(t=t.child,t!==null))for(Xu(t,e,n),t=t.sibling;t!==null;)Xu(t,e,n),t=t.sibling}function qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}var Lt=null,In=!1;function xi(t,e,n){for(n=n.child;n!==null;)p0(t,e,n),n=n.sibling}function p0(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:zt||ss(n,e);case 6:var i=Lt,r=In;Lt=null,xi(t,e,n),Lt=i,In=r,Lt!==null&&(In?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(In?(t=Lt,n=n.stateNode,t.nodeType===8?fc(t.parentNode,n):t.nodeType===1&&fc(t,n),Mo(t)):fc(Lt,n.stateNode));break;case 4:i=Lt,r=In,Lt=n.stateNode.containerInfo,In=!0,xi(t,e,n),Lt=i,In=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wu(n,e,o),r=r.next}while(r!==i)}xi(t,e,n);break;case 1:if(!zt&&(ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}xi(t,e,n);break;case 21:xi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,xi(t,e,n),zt=i):xi(t,e,n);break;default:xi(t,e,n)}}function Th(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new w_),e.forEach(function(i){var r=I_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,In=!1;break e;case 3:Lt=a.stateNode.containerInfo,In=!0;break e;case 4:Lt=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(Lt===null)throw Error(te(160));p0(s,o,r),Lt=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)m0(e,t),e=e.sibling}function m0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Vn(t),i&4){try{po(3,t,t.return),Nl(3,t)}catch(y){pt(t,t.return,y)}try{po(5,t,t.return)}catch(y){pt(t,t.return,y)}}break;case 1:Rn(e,t),Vn(t),i&512&&n!==null&&ss(n,n.return);break;case 5:if(Rn(e,t),Vn(t),i&512&&n!==null&&ss(n,n.return),t.flags&32){var r=t.stateNode;try{xo(r,"")}catch(y){pt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&km(r,s),vu(a,o);var c=vu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Gm(r,f):d==="dangerouslySetInnerHTML"?Bm(r,f):d==="children"?xo(r,f):gd(r,d,f,c)}switch(a){case"input":fu(r,s);break;case"textarea":Om(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ds(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Co]=s}catch(y){pt(t,t.return,y)}}break;case 6:if(Rn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){pt(t,t.return,y)}}break;case 3:if(Rn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(y){pt(t,t.return,y)}break;case 4:Rn(e,t),Vn(t);break;case 13:Rn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($d=vt())),i&4&&Th(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||d,Rn(e,t),zt=c):Rn(e,t),Vn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(pe=t,d=t.child;d!==null;){for(f=pe=d;pe!==null;){switch(h=pe,g=h.child,h.tag){case 0:case 11:case 14:case 15:po(4,h,h.return);break;case 1:ss(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){pt(i,n,y)}}break;case 5:ss(h,h.return);break;case 22:if(h.memoizedState!==null){Ch(f);continue}}g!==null?(g.return=h,pe=g):Ch(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hm("display",o))}catch(y){pt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){pt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Rn(e,t),Vn(t),i&4&&Th(t);break;case 21:break;default:Rn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(h0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xo(r,""),i.flags&=-33);var s=wh(t);qu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=wh(t);Xu(t,a,o);break;default:throw Error(te(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function A_(t,e,n){pe=t,g0(t)}function g0(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ca;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=ca;var c=zt;if(ca=o,(zt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?bh(r):l!==null?(l.return=o,pe=l):bh(r);for(;s!==null;)pe=s,g0(s),s=s.sibling;pe=r,ca=a,zt=c}Ah(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Ah(t)}}function Ah(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Nl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Mo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}zt||e.flags&512&&ju(e)}catch(h){pt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Ch(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function bh(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{ju(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{ju(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var C_=Math.ceil,pl=vi.ReactCurrentDispatcher,qd=vi.ReactCurrentOwner,wn=vi.ReactCurrentBatchConfig,Ke=0,bt=null,yt=null,Ft=0,dn=0,os=Zi(0),Mt=0,Do=null,Ar=0,Ul=0,Yd=0,mo=null,Jt=null,$d=0,ws=1/0,oi=null,ml=!1,Yu=null,Bi=null,ua=!1,Li=null,gl=0,go=0,$u=null,ja=-1,Xa=0;function Xt(){return Ke&6?vt():ja!==-1?ja:ja=vt()}function Hi(t){return t.mode&1?Ke&2&&Ft!==0?Ft&-Ft:u_.transition!==null?(Xa===0&&(Xa=eg()),Xa):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:ag(t.type)),t):1}function Bn(t,e,n,i){if(50<go)throw go=0,$u=null,Error(te(185));ko(t,n,i),(!(Ke&2)||t!==bt)&&(t===bt&&(!(Ke&2)&&(Ul|=n),Mt===4&&bi(t,Ft)),on(t,i),n===1&&Ke===0&&!(e.mode&1)&&(ws=vt()+500,Fl&&Qi()))}function on(t,e){var n=t.callbackNode;ux(t,e);var i=Ja(t,t===bt?Ft:0);if(i===0)n!==null&&kf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&kf(n),e===1)t.tag===0?c_(Rh.bind(null,t)):Ag(Rh.bind(null,t)),s_(function(){!(Ke&6)&&Qi()}),n=null;else{switch(tg(i)){case 1:n=Sd;break;case 4:n=Qm;break;case 16:n=Qa;break;case 536870912:n=Jm;break;default:n=Qa}n=w0(n,v0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v0(t,e){if(ja=-1,Xa=0,Ke&6)throw Error(te(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=Ja(t,t===bt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vl(t,i);else{e=i;var r=Ke;Ke|=2;var s=_0();(bt!==t||Ft!==e)&&(oi=null,ws=vt()+500,xr(t,e));do try{P_();break}catch(a){x0(t,a)}while(!0);Id(),pl.current=s,Ke=r,yt!==null?e=0:(bt=null,Ft=0,e=Mt)}if(e!==0){if(e===2&&(r=Mu(t),r!==0&&(i=r,e=Ku(t,r))),e===1)throw n=Do,xr(t,0),bi(t,i),on(t,vt()),n;if(e===6)bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!b_(r)&&(e=vl(t,i),e===2&&(s=Mu(t),s!==0&&(i=s,e=Ku(t,s))),e===1))throw n=Do,xr(t,0),bi(t,i),on(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:ur(t,Jt,oi);break;case 3:if(bi(t,i),(i&130023424)===i&&(e=$d+500-vt(),10<e)){if(Ja(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Pu(ur.bind(null,t,Jt,oi),e);break}ur(t,Jt,oi);break;case 4:if(bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*C_(i/1960))-i,10<i){t.timeoutHandle=Pu(ur.bind(null,t,Jt,oi),i);break}ur(t,Jt,oi);break;case 5:ur(t,Jt,oi);break;default:throw Error(te(329))}}}return on(t,vt()),t.callbackNode===n?v0.bind(null,t):null}function Ku(t,e){var n=mo;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=vl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&Zu(e)),t}function Zu(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function b_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bi(t,e){for(e&=~Yd,e&=~Ul,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function Rh(t){if(Ke&6)throw Error(te(327));gs();var e=Ja(t,0);if(!(e&1))return on(t,vt()),null;var n=vl(t,e);if(t.tag!==0&&n===2){var i=Mu(t);i!==0&&(e=i,n=Ku(t,i))}if(n===1)throw n=Do,xr(t,0),bi(t,e),on(t,vt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,Jt,oi),on(t,vt()),null}function Kd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(ws=vt()+500,Fl&&Qi())}}function Cr(t){Li!==null&&Li.tag===0&&!(Ke&6)&&gs();var e=Ke;Ke|=1;var n=wn.transition,i=Ze;try{if(wn.transition=null,Ze=1,t)return t()}finally{Ze=i,wn.transition=n,Ke=e,!(Ke&6)&&Qi()}}function Zd(){dn=os.current,rt(os)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,r_(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(Ld(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&rl();break;case 3:Ms(),rt(rn),rt(Ht),Bd();break;case 5:zd(i);break;case 4:Ms();break;case 13:rt(ut);break;case 19:rt(ut);break;case 10:Nd(i.type._context);break;case 22:case 23:Zd()}n=n.return}if(bt=t,yt=t=Gi(t.current,null),Ft=dn=e,Mt=0,Do=null,Yd=Ul=Ar=0,Jt=mo=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}gr=null}return t}function x0(t,e){do{var n=yt;try{if(Id(),Ga.current=hl,fl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fl=!1}if(Tr=0,Ct=St=dt=null,ho=!1,Po=0,qd.current=null,n===null||n.return===null){Mt=1,Do=e,yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=gh(o);if(g!==null){g.flags&=-257,vh(g,o,a,s,e),g.mode&1&&mh(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){mh(s,c,e),Qd();break e}l=Error(te(426))}}else if(at&&a.mode&1){var m=gh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),vh(m,o,a,s,e),Fd(Es(l,a));break e}}s=l=Es(l,a),Mt!==4&&(Mt=2),mo===null?mo=[s]:mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=t0(s,l,e);ch(s,u);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Bi===null||!Bi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=n0(s,a,e);ch(s,E);break e}}s=s.return}while(s!==null)}S0(n)}catch(R){e=R,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function _0(){var t=pl.current;return pl.current=hl,t===null?hl:t}function Qd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),bt===null||!(Ar&268435455)&&!(Ul&268435455)||bi(bt,Ft)}function vl(t,e){var n=Ke;Ke|=2;var i=_0();(bt!==t||Ft!==e)&&(oi=null,xr(t,e));do try{R_();break}catch(r){x0(t,r)}while(!0);if(Id(),Ke=n,pl.current=i,yt!==null)throw Error(te(261));return bt=null,Ft=0,Mt}function R_(){for(;yt!==null;)y0(yt)}function P_(){for(;yt!==null&&!tx();)y0(yt)}function y0(t){var e=E0(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?S0(t):yt=e,qd.current=null}function S0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=E_(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,yt=null;return}}else if(n=M_(n,e,dn),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Mt===0&&(Mt=5)}function ur(t,e,n){var i=Ze,r=wn.transition;try{wn.transition=null,Ze=1,L_(t,e,n,i)}finally{wn.transition=r,Ze=i}return null}function L_(t,e,n,i){do gs();while(Li!==null);if(Ke&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dx(t,s),t===bt&&(yt=bt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ua||(ua=!0,w0(Qa,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=Ze;Ze=1;var a=Ke;Ke|=4,qd.current=null,T_(t,n),m0(n,t),Zx(bu),el=!!Cu,bu=Cu=null,t.current=n,A_(n),nx(),Ke=a,Ze=o,wn.transition=s}else t.current=n;if(ua&&(ua=!1,Li=t,gl=r),s=t.pendingLanes,s===0&&(Bi=null),sx(n.stateNode),on(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ml)throw ml=!1,t=Yu,Yu=null,t;return gl&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===$u?go++:(go=0,$u=t):go=0,Qi(),null}function gs(){if(Li!==null){var t=tg(gl),e=wn.transition,n=Ze;try{if(wn.transition=null,Ze=16>t?16:t,Li===null)var i=!1;else{if(t=Li,Li=null,gl=0,Ke&6)throw Error(te(331));var r=Ke;for(Ke|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var d=pe;switch(d.tag){case 0:case 11:case 15:po(8,d,s)}var f=d.child;if(f!==null)f.return=d,pe=f;else for(;pe!==null;){d=pe;var h=d.sibling,g=d.return;if(f0(d),d===c){pe=null;break}if(h!==null){h.return=g,pe=h;break}pe=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:po(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var x=t.current;for(pe=x;pe!==null;){o=pe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,pe=v;else e:for(o=x;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nl(9,a)}}catch(R){pt(a,a.return,R)}if(a===o){pe=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,pe=E;break e}pe=a.return}}if(Ke=r,Qi(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Cl,t)}catch{}i=!0}return i}finally{Ze=n,wn.transition=e}}return!1}function Ph(t,e,n){e=Es(n,e),e=t0(t,e,1),t=zi(t,e,1),e=Xt(),t!==null&&(ko(t,1,e),on(t,e))}function pt(t,e,n){if(t.tag===3)Ph(t,t,n);else for(;e!==null;){if(e.tag===3){Ph(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bi===null||!Bi.has(i))){t=Es(n,t),t=n0(e,t,1),e=zi(e,t,1),t=Xt(),e!==null&&(ko(e,1,t),on(e,t));break}}e=e.return}}function F_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Ft&n)===n&&(Mt===4||Mt===3&&(Ft&130023424)===Ft&&500>vt()-$d?xr(t,0):Yd|=n),on(t,e)}function M0(t,e){e===0&&(t.mode&1?(e=ea,ea<<=1,!(ea&130023424)&&(ea=4194304)):e=1);var n=Xt();t=mi(t,e),t!==null&&(ko(t,e,n),on(t,n))}function D_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M0(t,n)}function I_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),M0(t,n)}var E0;E0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,S_(t,e,n);nn=!!(t.flags&131072)}else nn=!1,at&&e.flags&1048576&&Cg(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wa(t,e),t=e.pendingProps;var r=_s(e,Ht.current);ms(e,n),r=Gd(null,e,i,t,r,n);var s=Vd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kd(e),r.updater=Il,e.stateNode=r,r._reactInternals=e,ku(e,i,t,n),e=Bu(null,e,i,!0,s,n)):(e.tag=0,at&&s&&Pd(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=U_(i),t=Dn(i,t),r){case 0:e=zu(null,e,i,t,n);break e;case 1:e=yh(null,e,i,t,n);break e;case 11:e=xh(null,e,i,t,n);break e;case 14:e=_h(null,e,i,Dn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),zu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),yh(t,e,i,r,n);case 3:e:{if(o0(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dg(t,e),ul(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Es(Error(te(423)),e),e=Sh(t,e,i,n,r);break e}else if(i!==r){r=Es(Error(te(424)),e),e=Sh(t,e,i,n,r);break e}else for(hn=Oi(e.stateNode.containerInfo.firstChild),pn=e,at=!0,Nn=null,n=Lg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=gi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return Ig(e),t===null&&Iu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ru(i,r)?o=null:s!==null&&Ru(i,s)&&(e.flags|=32),s0(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&Iu(e),null;case 13:return a0(t,e,n);case 4:return Od(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),xh(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(ll,i._currentValue),i._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===r.children&&!rn.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,n),r=An(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),_h(t,e,i,r,n);case 15:return i0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Wa(t,e),e.tag=1,sn(i)?(t=!0,sl(e)):t=!1,ms(e,n),e0(e,i,r),ku(e,i,r,n),Bu(null,e,i,!0,t,n);case 19:return l0(t,e,n);case 22:return r0(t,e,n)}throw Error(te(156,e.tag))};function w0(t,e){return Zm(t,e)}function N_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new N_(t,e,n,i)}function Jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function U_(t){if(typeof t=="function")return Jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xd)return 11;if(t===_d)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Kr:return _r(n.children,r,s,e);case vd:o=8,r|=8;break;case au:return t=En(12,n,e,r|2),t.elementType=au,t.lanes=s,t;case lu:return t=En(13,n,e,r),t.elementType=lu,t.lanes=s,t;case cu:return t=En(19,n,e,r),t.elementType=cu,t.lanes=s,t;case Im:return kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fm:o=10;break e;case Dm:o=9;break e;case xd:o=11;break e;case _d:o=14;break e;case Ti:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=En(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function kl(t,e,n,i){return t=En(22,t,i,e),t.elementType=Im,t.lanes=n,t.stateNode={isHidden:!1},t}function yc(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function Sc(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function k_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tc(0),this.expirationTimes=tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ef(t,e,n,i,r,s,o,a,l){return t=new k_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(s),t}function O_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function T0(t){if(!t)return qi;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(sn(n))return Tg(t,n,e)}return e}function A0(t,e,n,i,r,s,o,a,l){return t=ef(n,i,!0,t,r,s,o,a,l),t.context=T0(null),n=t.current,i=Xt(),r=Hi(n),s=fi(i,r),s.callback=e??null,zi(n,s,r),t.current.lanes=r,ko(t,r,i),on(t,i),t}function Ol(t,e,n,i){var r=e.current,s=Xt(),o=Hi(r);return n=T0(n),e.context===null?e.context=n:e.pendingContext=n,e=fi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,o),t!==null&&(Bn(t,r,o,s),Ha(t,r,o)),o}function xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tf(t,e){Lh(t,e),(t=t.alternate)&&Lh(t,e)}function z_(){return null}var C0=typeof reportError=="function"?reportError:function(t){console.error(t)};function nf(t){this._internalRoot=t}zl.prototype.render=nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Ol(t,e,null,null)};zl.prototype.unmount=nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){Ol(null,t,null,null)}),e[pi]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=rg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ci.length&&e!==0&&e<Ci[n].priority;n++);Ci.splice(n,0,t),n===0&&og(t)}};function rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fh(){}function B_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=xl(o);s.call(c)}}var o=A0(e,i,t,0,null,!1,!1,"",Fh);return t._reactRootContainer=o,t[pi]=o.current,To(t.nodeType===8?t.parentNode:t),Cr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=xl(l);a.call(c)}}var l=ef(t,0,!1,null,null,!1,!1,"",Fh);return t._reactRootContainer=l,t[pi]=l.current,To(t.nodeType===8?t.parentNode:t),Cr(function(){Ol(e,l,n,i)}),l}function Hl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=xl(o);a.call(l)}}Ol(e,o,t,r)}else o=B_(n,e,t,r,i);return xl(o)}ng=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&(Md(e,n|1),on(e,vt()),!(Ke&6)&&(ws=vt()+500,Qi()))}break;case 13:Cr(function(){var i=mi(t,1);if(i!==null){var r=Xt();Bn(i,t,1,r)}}),tf(t,1)}};Ed=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Xt();Bn(e,t,134217728,n)}tf(t,134217728)}};ig=function(t){if(t.tag===13){var e=Hi(t),n=mi(t,e);if(n!==null){var i=Xt();Bn(n,t,e,i)}tf(t,e)}};rg=function(){return Ze};sg=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};_u=function(t,e,n){switch(e){case"input":if(fu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ll(i);if(!r)throw Error(te(90));Um(i),fu(i,r)}}}break;case"textarea":Om(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};jm=Kd;Xm=Cr;var H_={usingClientEntryPoint:!1,Events:[zo,es,Ll,Vm,Wm,Kd]},Vs={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G_={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$m(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||z_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!da.isDisabled&&da.supportsFiber)try{Cl=da.inject(G_),$n=da}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(e))throw Error(te(200));return O_(t,e,null,n)};gn.createRoot=function(t,e){if(!rf(t))throw Error(te(299));var n=!1,i="",r=C0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ef(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,To(t.nodeType===8?t.parentNode:t),new nf(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=$m(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Cr(t)};gn.hydrate=function(t,e,n){if(!Bl(e))throw Error(te(200));return Hl(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!rf(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=C0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=A0(e,null,t,1,n??null,r,!1,s,o),t[pi]=e.current,To(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zl(e)};gn.render=function(t,e,n){if(!Bl(e))throw Error(te(200));return Hl(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(te(40));return t._reactRootContainer?(Cr(function(){Hl(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};gn.unstable_batchedUpdates=Kd;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Hl(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(t){console.error(t)}}b0(),bm.exports=gn;var V_=bm.exports,Dh=V_;su.createRoot=Dh.createRoot,su.hydrateRoot=Dh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sf="162",W_=0,Ih=1,j_=2,R0=1,X_=2,si=3,Yi=0,an=1,Un=2,Vi=0,yr=1,Nh=2,Uh=3,kh=4,q_=5,hr=100,Y_=101,$_=102,Oh=103,zh=104,K_=200,Z_=201,Q_=202,J_=203,Qu=204,Ju=205,ey=206,ty=207,ny=208,iy=209,ry=210,sy=211,oy=212,ay=213,ly=214,cy=0,uy=1,dy=2,_l=3,fy=4,hy=5,py=6,my=7,of=0,gy=1,vy=2,Wi=0,xy=1,_y=2,yy=3,Sy=4,My=5,Ey=6,wy=7,P0=300,Ts=301,As=302,ed=303,td=304,Gl=306,nd=1e3,kn=1001,id=1002,jt=1003,Bh=1004,Ws=1005,Qt=1006,Mc=1007,Fi=1008,ji=1009,Ty=1010,Ay=1011,af=1012,L0=1013,Di=1014,li=1015,Io=1016,F0=1017,D0=1018,Sr=1020,Cy=1021,On=1023,by=1024,Ry=1025,Mr=1026,Cs=1027,Py=1028,I0=1029,Ly=1030,N0=1031,U0=1033,Ec=33776,wc=33777,Tc=33778,Ac=33779,Hh=35840,Gh=35841,Vh=35842,Wh=35843,k0=36196,jh=37492,Xh=37496,qh=37808,Yh=37809,$h=37810,Kh=37811,Zh=37812,Qh=37813,Jh=37814,ep=37815,tp=37816,np=37817,ip=37818,rp=37819,sp=37820,op=37821,Cc=36492,ap=36494,lp=36495,Fy=36283,cp=36284,up=36285,dp=36286,Dy=3200,Iy=3201,O0=0,Ny=1,Ri="",jn="srgb",Ji="srgb-linear",lf="display-p3",Vl="display-p3-linear",yl="linear",it="srgb",Sl="rec709",Ml="p3",Fr=7680,fp=519,Uy=512,ky=513,Oy=514,z0=515,zy=516,By=517,Hy=518,Gy=519,hp=35044,pp="300 es",rd=1035,di=2e3,El=2001;class Fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,sd=180/Math.PI;function Ho(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function Vy(t,e){return(t%e+e)%e}function Rc(t,e,n){return(1-n)*t+n*e}function mp(t){return(t&t-1)===0&&t!==0}function od(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,o,a,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],g=i[5],_=i[8],y=r[0],m=r[3],u=r[6],x=r[1],v=r[4],E=r[7],R=r[2],A=r[5],T=r[8];return s[0]=o*y+a*x+l*R,s[3]=o*m+a*v+l*A,s[6]=o*u+a*E+l*T,s[1]=c*y+d*x+f*R,s[4]=c*m+d*v+f*A,s[7]=c*u+d*E+f*T,s[2]=h*y+g*x+_*R,s[5]=h*m+g*v+_*A,s[8]=h*u+g*E+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,g=c*s-o*l,_=n*f+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Pc.makeScale(e,n)),this}rotate(e){return this.premultiply(Pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pc=new Ue;function B0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function No(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Wy(){const t=No("canvas");return t.style.display="block",t}const gp={};function jy(t){t in gp||(gp[t]=!0,console.warn(t))}const vp=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xp=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fa={[Ji]:{transfer:yl,primaries:Sl,toReference:t=>t,fromReference:t=>t},[jn]:{transfer:it,primaries:Sl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Vl]:{transfer:yl,primaries:Ml,toReference:t=>t.applyMatrix3(xp),fromReference:t=>t.applyMatrix3(vp)},[lf]:{transfer:it,primaries:Ml,toReference:t=>t.convertSRGBToLinear().applyMatrix3(xp),fromReference:t=>t.applyMatrix3(vp).convertLinearToSRGB()}},Xy=new Set([Ji,Vl]),Qe={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Xy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=fa[e].toReference,r=fa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return fa[t].primaries},getTransfer:function(t){return t===Ri?yl:fa[t].transfer}};function vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Dr;class H0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=No("canvas")),Dr.width=e.width,Dr.height=e.height;const i=Dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Dr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=No("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vs(n[i]/255)*255):n[i]=vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qy=0;class G0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fc(r[o].image)):s.push(Fc(r[o]))}else s=Fc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Fc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?H0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yy=0;class qt extends Fs{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=kn,r=kn,s=Qt,o=Fi,a=On,l=ji,c=qt.DEFAULT_ANISOTROPY,d=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Ho(),this.name="",this.source=new G0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=P0;qt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,n=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],g=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(g+1)/2,R=(u+1)/2,A=(d+h)/4,T=(f+y)/4,D=(_+m)/4;return v>E&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=D/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(f-y)/x,this.z=(h-d)/x,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $y extends Fs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new G0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends $y{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class V0 extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ky extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],g=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||c!==g||d!==_){let m=1-a;const u=l*h+c*g+d*_+f*y,x=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,u*x);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const E=a*x;if(l=l*m+h*E,c=c*m+g*E,d=d*m+_*E,f=f*m+y*E,m===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=R,c*=R,d*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],g=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*g-c*h,e[n+1]=l*_+d*h+c*f-a*g,e[n+2]=c*_+d*g+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f-h*g*_;break;case"YXZ":this._x=h*d*f+c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f+h*g*_;break;case"ZXY":this._x=h*d*f-c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f-h*g*_;break;case"ZYX":this._x=h*d*f-c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f+h*g*_;break;case"YZX":this._x=h*d*f+c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f-h*g*_;break;case"XZY":this._x=h*d*f-c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new N,_p=new Go;class Vo{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),pa.subVectors(this.max,Xs),Ir.subVectors(e.a,Xs),Nr.subVectors(e.b,Xs),Ur.subVectors(e.c,Xs),_i.subVectors(Nr,Ir),yi.subVectors(Ur,Nr),ir.subVectors(Ir,Ur);let n=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-ir.z,ir.y,_i.z,0,-_i.x,yi.z,0,-yi.x,ir.z,0,-ir.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-ir.y,ir.x,0];return!Ic(n,Ir,Nr,Ur,pa)||(n=[1,0,0,0,1,0,0,0,1],!Ic(n,Ir,Nr,Ur,pa))?!1:(ma.crossVectors(_i,yi),n=[ma.x,ma.y,ma.z],Ic(n,Ir,Nr,Ur,pa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new N,new N,new N,new N,new N,new N,new N,new N],Pn=new N,ha=new Vo,Ir=new N,Nr=new N,Ur=new N,_i=new N,yi=new N,ir=new N,Xs=new N,pa=new N,ma=new N,rr=new N;function Ic(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){rr.fromArray(t,s);const a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),c=n.dot(rr),d=i.dot(rr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Zy=new Vo,qs=new N,Nc=new N;class Wl{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Zy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const n=qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Nc)),this.expandByPoint(qs.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new N,Uc=new N,ga=new N,Si=new N,kc=new N,va=new N,Oc=new N;class W0{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Uc.copy(e).add(n).multiplyScalar(.5),ga.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(Uc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ga),a=Si.dot(this.direction),l=-Si.dot(ga),c=Si.lengthSq(),d=Math.abs(1-o*o);let f,h,g,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const y=1/d;f*=y,h*=y,g=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Uc).addScaledVector(ga,h),g}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){kc.subVectors(n,e),va.subVectors(i,e),Oc.crossVectors(kc,va);let o=this.direction.dot(Oc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(va.crossVectors(Si,va));if(l<0)return null;const c=a*this.direction.dot(kc.cross(Si));if(c<0||l+c>o)return null;const d=-a*Si.dot(Oc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,o,a,l,c,d,f,h,g,_,y,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,g,_,y,m)}set(e,n,i,r,s,o,a,l,c,d,f,h,g,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=g,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,g=o*f,_=a*d,y=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,g=l*f,_=c*d,y=c*f;n[0]=h+y*a,n[4]=_*a-g,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=g*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,g=l*f,_=c*d,y=c*f;n[0]=h-y*a,n[4]=-o*f,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*d,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,g=o*f,_=a*d,y=a*f;n[0]=l*d,n[4]=_*c-g,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=g*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=y-h*f,n[8]=_*f+g,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,g=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+y,n[5]=o*d,n[9]=g*f-_,n[2]=_*f-g,n[6]=a*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qy,e,Jy)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Mi.crossVectors(i,cn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Mi.crossVectors(i,cn)),Mi.normalize(),xa.crossVectors(cn,Mi),r[0]=Mi.x,r[4]=xa.x,r[8]=cn.x,r[1]=Mi.y,r[5]=xa.y,r[9]=cn.y,r[2]=Mi.z,r[6]=xa.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],g=i[13],_=i[2],y=i[6],m=i[10],u=i[14],x=i[3],v=i[7],E=i[11],R=i[15],A=r[0],T=r[4],D=r[8],Y=r[12],S=r[1],b=r[5],ne=r[9],J=r[13],L=r[2],X=r[6],j=r[10],$=r[14],P=r[3],k=r[7],G=r[11],K=r[15];return s[0]=o*A+a*S+l*L+c*P,s[4]=o*T+a*b+l*X+c*k,s[8]=o*D+a*ne+l*j+c*G,s[12]=o*Y+a*J+l*$+c*K,s[1]=d*A+f*S+h*L+g*P,s[5]=d*T+f*b+h*X+g*k,s[9]=d*D+f*ne+h*j+g*G,s[13]=d*Y+f*J+h*$+g*K,s[2]=_*A+y*S+m*L+u*P,s[6]=_*T+y*b+m*X+u*k,s[10]=_*D+y*ne+m*j+u*G,s[14]=_*Y+y*J+m*$+u*K,s[3]=x*A+v*S+E*L+R*P,s[7]=x*T+v*b+E*X+R*k,s[11]=x*D+v*ne+E*j+R*G,s[15]=x*Y+v*J+E*$+R*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],g=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*g-i*l*g)+y*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*d-s*l*d)+m*(+n*c*f-n*a*g-s*o*f+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],g=e[11],_=e[12],y=e[13],m=e[14],u=e[15],x=f*m*c-y*h*c+y*l*g-a*m*g-f*l*u+a*h*u,v=_*h*c-d*m*c-_*l*g+o*m*g+d*l*u-o*h*u,E=d*y*c-_*f*c+_*a*g-o*y*g-d*a*u+o*f*u,R=_*f*l-d*y*l-_*a*h+o*y*h+d*a*m-o*f*m,A=n*x+i*v+r*E+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(y*h*s-f*m*s-y*r*g+i*m*g+f*r*u-i*h*u)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*g-i*l*g)*T,e[4]=v*T,e[5]=(d*m*s-_*h*s+_*r*g-n*m*g-d*r*u+n*h*u)*T,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*g+n*l*g)*T,e[8]=E*T,e[9]=(_*f*s-d*y*s-_*i*g+n*y*g+d*i*u-n*f*u)*T,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*T,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*g-n*a*g)*T,e[12]=R*T,e[13]=(d*y*r-_*f*r+_*i*h-n*y*h-d*i*m+n*f*m)*T,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,g=s*d,_=s*f,y=o*d,m=o*f,u=a*f,x=l*c,v=l*d,E=l*f,R=i.x,A=i.y,T=i.z;return r[0]=(1-(y+u))*R,r[1]=(g+E)*R,r[2]=(_-v)*R,r[3]=0,r[4]=(g-E)*A,r[5]=(1-(h+u))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(_+v)*T,r[9]=(m-x)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=kr.set(r[0],r[1],r[2]).length();const o=kr.set(r[4],r[5],r[6]).length(),a=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/s,d=1/o,f=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,n.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=di){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(a===di)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===El)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=di){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,g=(i+r)*d;let _,y;if(a===di)_=(o+s)*f,y=-2*f;else if(a===El)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const kr=new N,Ln=new ft,Qy=new N(0,0,0),Jy=new N(1,1,1),Mi=new N,xa=new N,cn=new N,yp=new ft,Sp=new Go;class Qn{constructor(e=0,n=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sp.setFromEuler(this),this.setFromQuaternion(Sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";let j0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},e1=0;const Mp=new N,Or=new Go,ni=new ft,_a=new N,Ys=new N,t1=new N,n1=new Go,Ep=new N(1,0,0),wp=new N(0,1,0),Tp=new N(0,0,1),i1={type:"added"},r1={type:"removed"},zc={type:"childadded",child:null},Bc={type:"childremoved",child:null};class Yt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new N,n=new Qn,i=new Go,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ue}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Ep,e)}rotateY(e){return this.rotateOnAxis(wp,e)}rotateZ(e){return this.rotateOnAxis(Tp,e)}translateOnAxis(e,n){return Mp.copy(e).applyQuaternion(this.quaternion),this.position.add(Mp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ep,e)}translateY(e){return this.translateOnAxis(wp,e)}translateZ(e){return this.translateOnAxis(Tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_a.copy(e):_a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Ys,_a,this.up):ni.lookAt(_a,Ys,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ni),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(i1),zc.child=e,this.dispatchEvent(zc),zc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(r1),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,t1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,n1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new N(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new N,ii=new N,Hc=new N,ri=new N,zr=new N,Br=new N,Ap=new N,Gc=new N,Vc=new N,Wc=new N;class Yn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),ii.subVectors(i,n),Hc.subVectors(e,n);const o=Fn.dot(Fn),a=Fn.dot(ii),l=Fn.dot(Hc),c=ii.dot(ii),d=ii.dot(Hc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,g=(c*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),ii.subVectors(e,n),Fn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Fn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;zr.subVectors(r,i),Br.subVectors(s,i),Gc.subVectors(e,i);const l=zr.dot(Gc),c=Br.dot(Gc);if(l<=0&&c<=0)return n.copy(i);Vc.subVectors(e,r);const d=zr.dot(Vc),f=Br.dot(Vc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(zr,o);Wc.subVectors(e,s);const g=zr.dot(Wc),_=Br.dot(Wc);if(_>=0&&g<=_)return n.copy(s);const y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Br,a);const m=d*_-g*f;if(m<=0&&f-d>=0&&g-_>=0)return Ap.subVectors(s,r),a=(f-d)/(f-d+(g-_)),n.copy(r).addScaledVector(Ap,a);const u=1/(m+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(zr,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const X0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ya={h:0,s:0,l:0};function jc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=Vy(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=jc(o,s,e+1/3),this.g=jc(o,s,e),this.b=jc(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=X0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Qe.fromWorkingColorSpace(Ot.copy(this),e),Math.round(en(Ot.r*255,0,255))*65536+Math.round(en(Ot.g*255,0,255))*256+Math.round(en(Ot.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=jn){Qe.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(ya);const i=Rc(Ei.h,ya.h,n),r=Rc(Ei.s,ya.s,n),s=Rc(Ei.l,ya.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new We;We.NAMES=X0;let s1=0;class Ds extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=yr,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qu,this.blendDst=Ju,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=_l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ju&&(i.blendDst=this.blendDst),this.blendEquation!==hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_l&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class as extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new N,Sa=new je;class Tn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=hp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return jy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sa.fromBufferAttribute(this,n),Sa.applyMatrix3(e),this.setXY(n,Sa.x,Sa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=js(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=js(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=js(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hp&&(e.usage=this.usage),e}}class q0 extends Tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Y0 extends Tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bt extends Tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let o1=0;const yn=new ft,Xc=new Yt,Hr=new N,un=new Vo,$s=new Vo,At=new N;class bn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B0(e)?Y0:q0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(un.min,$s.min),un.expandByPoint(At),At.addVectors(un.max,$s.max),un.expandByPoint(At)):(un.expandByPoint($s.min),un.expandByPoint($s.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)At.fromBufferAttribute(a,c),l&&(Hr.fromBufferAttribute(e,c),At.add(Hr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new N,l[D]=new N;const c=new N,d=new N,f=new N,h=new je,g=new je,_=new je,y=new N,m=new N;function u(D,Y,S){c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,Y),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,D),g.fromBufferAttribute(s,Y),_.fromBufferAttribute(s,S),d.sub(c),f.sub(c),g.sub(h),_.sub(h);const b=1/(g.x*_.y-_.x*g.y);isFinite(b)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(b),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(b),a[D].add(y),a[Y].add(y),a[S].add(y),l[D].add(m),l[Y].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,Y=x.length;D<Y;++D){const S=x[D],b=S.start,ne=S.count;for(let J=b,L=b+ne;J<L;J+=3)u(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const v=new N,E=new N,R=new N,A=new N;function T(D){R.fromBufferAttribute(r,D),A.copy(R);const Y=a[D];v.copy(Y),v.sub(R.multiplyScalar(R.dot(Y))).normalize(),E.crossVectors(A,Y);const b=E.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,b)}for(let D=0,Y=x.length;D<Y;++D){const S=x[D],b=S.start,ne=S.count;for(let J=b,L=b+ne;J<L;J+=3)T(e.getX(J+0)),T(e.getX(J+1)),T(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,d=new N,f=new N;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let g=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*d;for(let u=0;u<d;u++)h[_++]=c[g++]}return new Tn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,g=f.length;h<g;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cp=new ft,sr=new W0,Ma=new Wl,bp=new N,Gr=new N,Vr=new N,Wr=new N,qc=new N,Ea=new N,wa=new je,Ta=new je,Aa=new je,Rp=new N,Pp=new N,Lp=new N,Ca=new N,ba=new N;class tn extends Yt{constructor(e=new bn,n=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ea.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(qc.fromBufferAttribute(f,e),o?Ea.addScaledVector(qc,d):Ea.addScaledVector(qc.sub(n),d))}n.add(Ea)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(Ma.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Ma,bp)===null||sr.origin.distanceToSquared(bp)>(e.far-e.near)**2))&&(Cp.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Cp),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const m=h[_],u=o[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let E=x,R=v;E<R;E+=3){const A=a.getX(E),T=a.getX(E+1),D=a.getX(E+2);r=Ra(this,u,e,i,c,d,f,A,T,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let m=_,u=y;m<u;m+=3){const x=a.getX(m),v=a.getX(m+1),E=a.getX(m+2);r=Ra(this,o,e,i,c,d,f,x,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const m=h[_],u=o[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let E=x,R=v;E<R;E+=3){const A=E,T=E+1,D=E+2;r=Ra(this,u,e,i,c,d,f,A,T,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=_,u=y;m<u;m+=3){const x=m,v=m+1,E=m+2;r=Ra(this,o,e,i,c,d,f,x,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function a1(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;ba.copy(a),ba.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ba);return c<n.near||c>n.far?null:{distance:c,point:ba.clone(),object:t}}function Ra(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Gr),t.getVertexPosition(l,Vr),t.getVertexPosition(c,Wr);const d=a1(t,e,n,i,Gr,Vr,Wr,Ca);if(d){r&&(wa.fromBufferAttribute(r,a),Ta.fromBufferAttribute(r,l),Aa.fromBufferAttribute(r,c),d.uv=Yn.getInterpolation(Ca,Gr,Vr,Wr,wa,Ta,Aa,new je)),s&&(wa.fromBufferAttribute(s,a),Ta.fromBufferAttribute(s,l),Aa.fromBufferAttribute(s,c),d.uv1=Yn.getInterpolation(Ca,Gr,Vr,Wr,wa,Ta,Aa,new je)),o&&(Rp.fromBufferAttribute(o,a),Pp.fromBufferAttribute(o,l),Lp.fromBufferAttribute(o,c),d.normal=Yn.getInterpolation(Ca,Gr,Vr,Wr,Rp,Pp,Lp,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};Yn.getNormal(Gr,Vr,Wr,f.normal),d.face=f}return d}class Wo extends bn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(f,2));function _(y,m,u,x,v,E,R,A,T,D,Y){const S=E/T,b=R/D,ne=E/2,J=R/2,L=A/2,X=T+1,j=D+1;let $=0,P=0;const k=new N;for(let G=0;G<j;G++){const K=G*b-J;for(let re=0;re<X;re++){const Ee=re*S-ne;k[y]=Ee*x,k[m]=K*v,k[u]=L,c.push(k.x,k.y,k.z),k[y]=0,k[m]=0,k[u]=A>0?1:-1,d.push(k.x,k.y,k.z),f.push(re/T),f.push(1-G/D),$+=1}}for(let G=0;G<D;G++)for(let K=0;K<T;K++){const re=h+K+X*G,Ee=h+K+X*(G+1),z=h+(K+1)+X*(G+1),Q=h+(K+1)+X*G;l.push(re,Ee,Q),l.push(Ee,z,Q),P+=6}a.addGroup(g,P,Y),g+=P,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=bs(t[n]);for(const r in i)e[r]=i[r]}return e}function l1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $0(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const c1={clone:bs,merge:Vt};var u1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u1,this.fragmentShader=d1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=l1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class K0 extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new N,Fp=new je,Dp=new je;class fn extends K0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sd*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,n){return this.getViewBounds(e,Fp,Dp),n.subVectors(Dp,Fp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,Xr=1;class f1 extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(jr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new fn(jr,Xr,e,n);s.layers=this.layers,this.add(s);const o=new fn(jr,Xr,e,n);o.layers=this.layers,this.add(o);const a=new fn(jr,Xr,e,n);a.layers=this.layers,this.add(a);const l=new fn(jr,Xr,e,n);l.layers=this.layers,this.add(l);const c=new fn(jr,Xr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===El)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Z0 extends qt{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ts,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class h1 extends br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Z0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wo(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Vi});s.uniforms.tEquirect.value=n;const o=new tn(r,s),a=n.minFilter;return n.minFilter===Fi&&(n.minFilter=Qt),new f1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Yc=new N,p1=new N,m1=new Ue;class dr{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yc.subVectors(i,n).cross(p1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||m1.getNormalMatrix(e),r=this.coplanarPoint(Yc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Wl,Pa=new N;class cf{constructor(e=new dr,n=new dr,i=new dr,r=new dr,s=new dr,o=new dr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],g=r[8],_=r[9],y=r[10],m=r[11],u=r[12],x=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-g,E-u).normalize(),i[1].setComponents(l+s,h+c,m+g,E+u).normalize(),i[2].setComponents(l+o,h+d,m+_,E+x).normalize(),i[3].setComponents(l-o,h-d,m-_,E-x).normalize(),i[4].setComponents(l-a,h-f,m-y,E-v).normalize(),n===di)i[5].setComponents(l+a,h+f,m+y,E+v).normalize();else if(n===El)i[5].setComponents(a,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Pa.x=r.normal.x>0?e.max.x:e.min.x,Pa.y=r.normal.y>0?e.max.y:e.min.y,Pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Q0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function g1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,g=f.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,d,f){const h=d.array,g=d._updateRange,_=d.updateRanges;if(t.bindBuffer(f,c),g.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let y=0,m=_.length;y<m;y++){const u=_[y];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:o,remove:a,update:l}}class jo extends bn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,g=[],_=[],y=[],m=[];for(let u=0;u<d;u++){const x=u*h-o;for(let v=0;v<c;v++){const E=v*f-s;_.push(E,-x,0),y.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){const v=x+c*u,E=x+c*(u+1),R=x+1+c*(u+1),A=x+1+c*u;g.push(v,E,A),g.push(E,R,A)}this.setIndex(g),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.widthSegments,e.heightSegments)}}var v1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x1=`#ifdef USE_ALPHAHASH
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
#endif`,_1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E1=`#ifdef USE_AOMAP
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
#endif`,w1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T1=`#ifdef USE_BATCHING
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
#endif`,A1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,C1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
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
} // validated`,P1=`#ifdef USE_IRIDESCENCE
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,B1=`#define PI 3.141592653589793
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
} // validated`,H1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G1=`vec3 transformedNormal = objectNormal;
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
#endif`,V1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y1=`
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
}`,$1=`#ifdef USE_ENVMAP
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
	
#endif`,Z1=`#ifdef USE_ENVMAP
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
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,eS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rS=`#ifdef USE_GRADIENTMAP
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
}`,sS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cS=`uniform bool receiveShadow;
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
#endif`,uS=`#ifdef USE_ENVMAP
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
#endif`,dS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mS=`PhysicalMaterial material;
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
#endif`,gS=`struct PhysicalMaterial {
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
}`,vS=`
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
#endif`,xS=`#if defined( RE_IndirectDiffuse )
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
#endif`,_S=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ES=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CS=`#if defined( USE_POINTS_UV )
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
#endif`,bS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FS=`#ifdef USE_MORPHNORMALS
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
#endif`,DS=`#ifdef USE_MORPHTARGETS
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
#endif`,IS=`#ifdef USE_MORPHTARGETS
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
#endif`,NS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,US=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BS=`#ifdef USE_NORMALMAP
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
#endif`,HS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$S=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nM=`float getShadowMask() {
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
}`,iM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rM=`#ifdef USE_SKINNING
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
#endif`,sM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oM=`#ifdef USE_SKINNING
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
#endif`,aM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dM=`#ifdef USE_TRANSMISSION
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
#endif`,fM=`#ifdef USE_TRANSMISSION
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xM=`uniform sampler2D t2D;
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`#include <common>
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
}`,wM=`#if DEPTH_PACKING == 3200
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
}`,TM=`#define DISTANCE
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
}`,AM=`#define DISTANCE
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
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`uniform float scale;
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
}`,PM=`uniform vec3 diffuse;
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
}`,LM=`#include <common>
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
}`,FM=`uniform vec3 diffuse;
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
}`,DM=`#define LAMBERT
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
}`,IM=`#define LAMBERT
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
}`,NM=`#define MATCAP
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
}`,UM=`#define MATCAP
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
}`,kM=`#define NORMAL
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
}`,OM=`#define NORMAL
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
}`,zM=`#define PHONG
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
}`,BM=`#define PHONG
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
}`,HM=`#define STANDARD
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
}`,GM=`#define STANDARD
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
}`,VM=`#define TOON
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
}`,WM=`#define TOON
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
}`,jM=`uniform float size;
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
}`,XM=`uniform vec3 diffuse;
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
}`,qM=`#include <common>
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
}`,YM=`uniform vec3 color;
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
}`,$M=`uniform float rotation;
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
}`,KM=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:v1,alphahash_pars_fragment:x1,alphamap_fragment:_1,alphamap_pars_fragment:y1,alphatest_fragment:S1,alphatest_pars_fragment:M1,aomap_fragment:E1,aomap_pars_fragment:w1,batching_pars_vertex:T1,batching_vertex:A1,begin_vertex:C1,beginnormal_vertex:b1,bsdfs:R1,iridescence_fragment:P1,bumpmap_pars_fragment:L1,clipping_planes_fragment:F1,clipping_planes_pars_fragment:D1,clipping_planes_pars_vertex:I1,clipping_planes_vertex:N1,color_fragment:U1,color_pars_fragment:k1,color_pars_vertex:O1,color_vertex:z1,common:B1,cube_uv_reflection_fragment:H1,defaultnormal_vertex:G1,displacementmap_pars_vertex:V1,displacementmap_vertex:W1,emissivemap_fragment:j1,emissivemap_pars_fragment:X1,colorspace_fragment:q1,colorspace_pars_fragment:Y1,envmap_fragment:$1,envmap_common_pars_fragment:K1,envmap_pars_fragment:Z1,envmap_pars_vertex:Q1,envmap_physical_pars_fragment:uS,envmap_vertex:J1,fog_vertex:eS,fog_pars_vertex:tS,fog_fragment:nS,fog_pars_fragment:iS,gradientmap_pars_fragment:rS,lightmap_fragment:sS,lightmap_pars_fragment:oS,lights_lambert_fragment:aS,lights_lambert_pars_fragment:lS,lights_pars_begin:cS,lights_toon_fragment:dS,lights_toon_pars_fragment:fS,lights_phong_fragment:hS,lights_phong_pars_fragment:pS,lights_physical_fragment:mS,lights_physical_pars_fragment:gS,lights_fragment_begin:vS,lights_fragment_maps:xS,lights_fragment_end:_S,logdepthbuf_fragment:yS,logdepthbuf_pars_fragment:SS,logdepthbuf_pars_vertex:MS,logdepthbuf_vertex:ES,map_fragment:wS,map_pars_fragment:TS,map_particle_fragment:AS,map_particle_pars_fragment:CS,metalnessmap_fragment:bS,metalnessmap_pars_fragment:RS,morphinstance_vertex:PS,morphcolor_vertex:LS,morphnormal_vertex:FS,morphtarget_pars_vertex:DS,morphtarget_vertex:IS,normal_fragment_begin:NS,normal_fragment_maps:US,normal_pars_fragment:kS,normal_pars_vertex:OS,normal_vertex:zS,normalmap_pars_fragment:BS,clearcoat_normal_fragment_begin:HS,clearcoat_normal_fragment_maps:GS,clearcoat_pars_fragment:VS,iridescence_pars_fragment:WS,opaque_fragment:jS,packing:XS,premultiplied_alpha_fragment:qS,project_vertex:YS,dithering_fragment:$S,dithering_pars_fragment:KS,roughnessmap_fragment:ZS,roughnessmap_pars_fragment:QS,shadowmap_pars_fragment:JS,shadowmap_pars_vertex:eM,shadowmap_vertex:tM,shadowmask_pars_fragment:nM,skinbase_vertex:iM,skinning_pars_vertex:rM,skinning_vertex:sM,skinnormal_vertex:oM,specularmap_fragment:aM,specularmap_pars_fragment:lM,tonemapping_fragment:cM,tonemapping_pars_fragment:uM,transmission_fragment:dM,transmission_pars_fragment:fM,uv_pars_fragment:hM,uv_pars_vertex:pM,uv_vertex:mM,worldpos_vertex:gM,background_vert:vM,background_frag:xM,backgroundCube_vert:_M,backgroundCube_frag:yM,cube_vert:SM,cube_frag:MM,depth_vert:EM,depth_frag:wM,distanceRGBA_vert:TM,distanceRGBA_frag:AM,equirect_vert:CM,equirect_frag:bM,linedashed_vert:RM,linedashed_frag:PM,meshbasic_vert:LM,meshbasic_frag:FM,meshlambert_vert:DM,meshlambert_frag:IM,meshmatcap_vert:NM,meshmatcap_frag:UM,meshnormal_vert:kM,meshnormal_frag:OM,meshphong_vert:zM,meshphong_frag:BM,meshphysical_vert:HM,meshphysical_frag:GM,meshtoon_vert:VM,meshtoon_frag:WM,points_vert:jM,points_frag:XM,shadow_vert:qM,shadow_frag:YM,sprite_vert:$M,sprite_frag:KM},ae={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Xn={basic:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Vt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Vt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Vt([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Vt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Vt([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Vt([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Vt([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Vt([ae.lights,ae.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Xn.physical={uniforms:Vt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const La={r:0,b:0,g:0},ar=new Qn,ZM=new ft;function QM(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,d,f=null,h=0,g=null;function _(m,u){let x=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),x=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Gl)?(d===void 0&&(d=new tn(new Wo(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:bs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),ar.copy(u.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ZM.makeRotationFromEuler(ar)),d.material.toneMapped=Qe.getTransfer(v.colorSpace)!==it,(f!==v||h!==v.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=v,h=v.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new tn(new jo(2,2),new $i({name:"BackgroundMaterial",uniforms:bs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,u){m.getRGB(La,$0(t)),i.buffers.color.setClear(La.r,La.g,La.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:_}}function JM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,d=!1;function f(L,X,j,$,P){let k=!1;if(o){const G=y($,j,X);c!==G&&(c=G,g(c.object)),k=u(L,$,j,P),k&&x(L,$,j,P)}else{const G=X.wireframe===!0;(c.geometry!==$.id||c.program!==j.id||c.wireframe!==G)&&(c.geometry=$.id,c.program=j.id,c.wireframe=G,k=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,D(L,X,j,$),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,X,j){const $=j.wireframe===!0;let P=a[L.id];P===void 0&&(P={},a[L.id]=P);let k=P[X.id];k===void 0&&(k={},P[X.id]=k);let G=k[$];return G===void 0&&(G=m(h()),k[$]=G),G}function m(L){const X=[],j=[],$=[];for(let P=0;P<r;P++)X[P]=0,j[P]=0,$[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:$,object:L,attributes:{},index:null}}function u(L,X,j,$){const P=c.attributes,k=X.attributes;let G=0;const K=j.getAttributes();for(const re in K)if(K[re].location>=0){const z=P[re];let Q=k[re];if(Q===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),z===void 0||z.attribute!==Q||Q&&z.data!==Q.data)return!0;G++}return c.attributesNum!==G||c.index!==$}function x(L,X,j,$){const P={},k=X.attributes;let G=0;const K=j.getAttributes();for(const re in K)if(K[re].location>=0){let z=k[re];z===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(z=L.instanceColor));const Q={};Q.attribute=z,z&&z.data&&(Q.data=z.data),P[re]=Q,G++}c.attributes=P,c.attributesNum=G,c.index=$}function v(){const L=c.newAttributes;for(let X=0,j=L.length;X<j;X++)L[X]=0}function E(L){R(L,0)}function R(L,X){const j=c.newAttributes,$=c.enabledAttributes,P=c.attributeDivisors;j[L]=1,$[L]===0&&(t.enableVertexAttribArray(L),$[L]=1),P[L]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,X),P[L]=X)}function A(){const L=c.newAttributes,X=c.enabledAttributes;for(let j=0,$=X.length;j<$;j++)X[j]!==L[j]&&(t.disableVertexAttribArray(j),X[j]=0)}function T(L,X,j,$,P,k,G){G===!0?t.vertexAttribIPointer(L,X,j,P,k):t.vertexAttribPointer(L,X,j,$,P,k)}function D(L,X,j,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const P=$.attributes,k=j.getAttributes(),G=X.defaultAttributeValues;for(const K in k){const re=k[K];if(re.location>=0){let Ee=P[K];if(Ee===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Ee=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Ee=L.instanceColor)),Ee!==void 0){const z=Ee.normalized,Q=Ee.itemSize,Z=n.get(Ee);if(Z===void 0)continue;const me=Z.buffer,ge=Z.type,fe=Z.bytesPerElement,Xe=i.isWebGL2===!0&&(ge===t.INT||ge===t.UNSIGNED_INT||Ee.gpuType===L0);if(Ee.isInterleavedBufferAttribute){const Ae=Ee.data,U=Ae.stride,Rt=Ee.offset;if(Ae.isInstancedInterleavedBuffer){for(let Me=0;Me<re.locationSize;Me++)R(re.location+Me,Ae.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Me=0;Me<re.locationSize;Me++)E(re.location+Me);t.bindBuffer(t.ARRAY_BUFFER,me);for(let Me=0;Me<re.locationSize;Me++)T(re.location+Me,Q/re.locationSize,ge,z,U*fe,(Rt+Q/re.locationSize*Me)*fe,Xe)}else{if(Ee.isInstancedBufferAttribute){for(let Ae=0;Ae<re.locationSize;Ae++)R(re.location+Ae,Ee.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ae=0;Ae<re.locationSize;Ae++)E(re.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,me);for(let Ae=0;Ae<re.locationSize;Ae++)T(re.location+Ae,Q/re.locationSize,ge,z,Q*fe,Q/re.locationSize*Ae*fe,Xe)}}else if(G!==void 0){const z=G[K];if(z!==void 0)switch(z.length){case 2:t.vertexAttrib2fv(re.location,z);break;case 3:t.vertexAttrib3fv(re.location,z);break;case 4:t.vertexAttrib4fv(re.location,z);break;default:t.vertexAttrib1fv(re.location,z)}}}}A()}function Y(){ne();for(const L in a){const X=a[L];for(const j in X){const $=X[j];for(const P in $)_($[P].object),delete $[P];delete X[j]}delete a[L]}}function S(L){if(a[L.id]===void 0)return;const X=a[L.id];for(const j in X){const $=X[j];for(const P in $)_($[P].object),delete $[P];delete X[j]}delete a[L.id]}function b(L){for(const X in a){const j=a[X];if(j[L.id]===void 0)continue;const $=j[L.id];for(const P in $)_($[P].object),delete $[P];delete j[L.id]}}function ne(){J(),d=!0,c!==l&&(c=l,g(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ne,resetDefaultState:J,dispose:Y,releaseStatesOfGeometry:S,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:E,disableUnusedAttributes:A}}function eE(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h;_++)this.render(d[_],f[_]);else{g.multiDrawArraysWEBGL(s,d,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=f[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function tE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,E=o||e.has("OES_texture_float"),R=v&&E,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:A}}function nE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new dr,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,g){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const x=s?0:i,v=x*4;let E=u.clippingState||null;l.value=E,E=d(_,h,v,g);for(let R=0;R!==v;++R)E[R]=n[R];u.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,g,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=g+y*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,E=g;v!==y;++v,E+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function iE(t){let e=new WeakMap;function n(o,a){return a===ed?o.mapping=Ts:a===td&&(o.mapping=As),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ed||a===td)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new h1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class rE extends K0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ls=4,Ip=[.125,.215,.35,.446,.526,.582],pr=20,$c=new rE,Np=new We;let Kc=null,Zc=0,Qc=0;const fr=(1+Math.sqrt(5))/2,qr=1/fr,Up=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,fr,qr),new N(0,fr,-qr),new N(qr,0,fr),new N(-qr,0,fr),new N(fr,qr,0),new N(-fr,qr,0)];class kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Qc),e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Io,format:On,colorSpace:Ji,depthBuffer:!1},r=Op(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sE(s)),this._blurMaterial=oE(s,e,n)}return r}_compileMaterial(e){const n=new tn(this._lodPlanes[0],e);this._renderer.compile(n,$c)}_sceneToCubeUV(e,n,i,r){const a=new fn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Np),d.toneMapping=Wi,d.autoClear=!1;const g=new as({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new tn(new Wo,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(Np),y=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):x===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Fa(r,x*v,u>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ts||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,$c)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Up[(r-1)%Up.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new tn(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*pr-1),y=s/_,m=isFinite(s)?1+Math.floor(d*y):pr;m>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`);const u=[];let x=0;for(let T=0;T<pr;++T){const D=T/y,Y=Math.exp(-D*D/2);u.push(Y),T===0?x+=Y:T<m&&(x+=2*Y)}for(let T=0;T<u.length;T++)u[T]=u[T]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const E=this._sizeLods[r],R=3*E*(r>v-ls?r-v+ls:0),A=4*(this._cubeSize-E);Fa(n,R,A,3*E,2*E),l.setRenderTarget(n),l.render(f,$c)}}function sE(t){const e=[],n=[],i=[];let r=t;const s=t-ls+1+Ip.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ls?l=Ip[o-t+ls-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,_=6,y=3,m=2,u=1,x=new Float32Array(y*_*g),v=new Float32Array(m*_*g),E=new Float32Array(u*_*g);for(let A=0;A<g;A++){const T=A%3*2/3-1,D=A>2?0:-1,Y=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];x.set(Y,y*_*A),v.set(h,m*_*A);const S=[A,A,A,A,A,A];E.set(S,u*_*A)}const R=new bn;R.setAttribute("position",new Tn(x,y)),R.setAttribute("uv",new Tn(v,m)),R.setAttribute("faceIndex",new Tn(E,u)),e.push(R),r>ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Op(t,e,n){const i=new br(t,e,n);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function oE(t,e,n){const i=new Float32Array(pr),r=new N(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uf(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function zp(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Bp(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function uf(){return`

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
	`}function aE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ed||l===td,d=l===Ts||l===As;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new kp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new kp(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function lE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cE(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const y=g[_];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const h=[],g=f.index,_=f.attributes.position;let y=0;if(g!==null){const x=g.array;y=g.version;for(let v=0,E=x.length;v<E;v+=3){const R=x[v+0],A=x[v+1],T=x[v+2];h.push(R,A,A,T,T,R)}}else if(_!==void 0){const x=_.array;y=_.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const R=v+0,A=v+1,T=v+2;h.push(R,A,A,T,T,R)}}else return;const m=new(B0(h)?Y0:q0)(h,1);m.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function uE(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,_){t.drawElements(s,_,a,g*l),n.update(_,s,1)}function f(g,_,y){if(y===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,_,a,g*l,y),n.update(_,s,y)}function h(g,_,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<y;u++)this.render(g[u]/l,_[u]);else{m.multiDrawElementsWEBGL(s,_,0,a,g,0,y);let u=0;for(let x=0;x<y;x++)u+=_[x];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function dE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fE(t,e){return t[0]-e[0]}function hE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function pE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(d);if(m===void 0||m.count!==y){let J=function(){b.dispose(),s.delete(d),d.removeEventListener("dispose",J)};var g=J;m!==void 0&&m.texture.dispose();const u=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let T=0;u===!0&&(T=1),x===!0&&(T=2),v===!0&&(T=3);let D=d.attributes.position.count*T,Y=1;D>e.maxTextureSize&&(Y=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const S=new Float32Array(D*Y*4*y),b=new V0(S,D,Y,y);b.type=li,b.needsUpdate=!0;const ne=T*4;for(let L=0;L<y;L++){const X=E[L],j=R[L],$=A[L],P=D*Y*4*L;for(let k=0;k<X.count;k++){const G=k*ne;u===!0&&(o.fromBufferAttribute(X,k),S[P+G+0]=o.x,S[P+G+1]=o.y,S[P+G+2]=o.z,S[P+G+3]=0),x===!0&&(o.fromBufferAttribute(j,k),S[P+G+4]=o.x,S[P+G+5]=o.y,S[P+G+6]=o.z,S[P+G+7]=0),v===!0&&(o.fromBufferAttribute($,k),S[P+G+8]=o.x,S[P+G+9]=o.y,S[P+G+10]=o.z,S[P+G+11]=$.itemSize===4?o.w:1)}}m={count:y,texture:b,size:new je(D,Y)},s.set(d,m),d.addEventListener("dispose",J)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let u=0;for(let v=0;v<h.length;v++)u+=h[v];const x=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",h)}f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let y=i[d.id];if(y===void 0||y.length!==_){y=[];for(let E=0;E<_;E++)y[E]=[E,0];i[d.id]=y}for(let E=0;E<_;E++){const R=y[E];R[0]=E,R[1]=h[E]}y.sort(hE);for(let E=0;E<8;E++)E<_&&y[E][1]?(a[E][0]=y[E][0],a[E][1]=y[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(fE);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let x=0;for(let E=0;E<8;E++){const R=a[E],A=R[0],T=R[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&d.getAttribute("morphTarget"+E)!==m[A]&&d.setAttribute("morphTarget"+E,m[A]),u&&d.getAttribute("morphNormal"+E)!==u[A]&&d.setAttribute("morphNormal"+E,u[A]),r[E]=T,x+=T):(m&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),u&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),r[E]=0)}const v=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function mE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class J0 extends qt{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Mr,d!==Mr&&d!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Mr&&(i=Di),i===void 0&&d===Cs&&(i=Sr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ev=new qt,tv=new J0(1,1);tv.compareFunction=z0;const nv=new V0,iv=new Ky,rv=new Z0,Hp=[],Gp=[],Vp=new Float32Array(16),Wp=new Float32Array(9),jp=new Float32Array(4);function Is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Hp[r];if(s===void 0&&(s=new Float32Array(r),Hp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jl(t,e){let n=Gp[e];n===void 0&&(n=new Int32Array(e),Gp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function xE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function _E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function yE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;jp.set(i),t.uniformMatrix2fv(this.addr,!1,jp),wt(n,i)}}function SE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Wp.set(i),t.uniformMatrix3fv(this.addr,!1,Wp),wt(n,i)}}function ME(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Vp.set(i),t.uniformMatrix4fv(this.addr,!1,Vp),wt(n,i)}}function EE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function CE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function bE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function LE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?tv:ev;n.setTexture2D(e||s,r)}function FE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||iv,r)}function DE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||rv,r)}function IE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||nv,r)}function NE(t){switch(t){case 5126:return gE;case 35664:return vE;case 35665:return xE;case 35666:return _E;case 35674:return yE;case 35675:return SE;case 35676:return ME;case 5124:case 35670:return EE;case 35667:case 35671:return wE;case 35668:case 35672:return TE;case 35669:case 35673:return AE;case 5125:return CE;case 36294:return bE;case 36295:return RE;case 36296:return PE;case 35678:case 36198:case 36298:case 36306:case 35682:return LE;case 35679:case 36299:case 36307:return FE;case 35680:case 36300:case 36308:case 36293:return DE;case 36289:case 36303:case 36311:case 36292:return IE}}function UE(t,e){t.uniform1fv(this.addr,e)}function kE(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function OE(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function zE(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function BE(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HE(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GE(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function VE(t,e){t.uniform1iv(this.addr,e)}function WE(t,e){t.uniform2iv(this.addr,e)}function jE(t,e){t.uniform3iv(this.addr,e)}function XE(t,e){t.uniform4iv(this.addr,e)}function qE(t,e){t.uniform1uiv(this.addr,e)}function YE(t,e){t.uniform2uiv(this.addr,e)}function $E(t,e){t.uniform3uiv(this.addr,e)}function KE(t,e){t.uniform4uiv(this.addr,e)}function ZE(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||ev,s[o])}function QE(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||iv,s[o])}function JE(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||rv,s[o])}function e2(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||nv,s[o])}function t2(t){switch(t){case 5126:return UE;case 35664:return kE;case 35665:return OE;case 35666:return zE;case 35674:return BE;case 35675:return HE;case 35676:return GE;case 5124:case 35670:return VE;case 35667:case 35671:return WE;case 35668:case 35672:return jE;case 35669:case 35673:return XE;case 5125:return qE;case 36294:return YE;case 36295:return $E;case 36296:return KE;case 35678:case 36198:case 36298:case 36306:case 35682:return ZE;case 35679:case 36299:case 36307:return QE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return e2}}class n2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=NE(n.type)}}class i2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=t2(n.type)}}class r2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Jc=/(\w+)(\])?(\[|\.)?/g;function Xp(t,e){t.seq.push(e),t.map[e.id]=e}function s2(t,e,n){const i=t.name,r=i.length;for(Jc.lastIndex=0;;){const s=Jc.exec(i),o=Jc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xp(n,c===void 0?new n2(a,t,e):new i2(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new r2(a),Xp(n,f)),n=f}}}class Ya{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);s2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function qp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const o2=37297;let a2=0;function l2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function c2(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Ml&&n===Sl?i="LinearDisplayP3ToLinearSRGB":e===Sl&&n===Ml&&(i="LinearSRGBToLinearDisplayP3"),t){case Ji:case Vl:return[i,"LinearTransferOETF"];case jn:case lf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Yp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+l2(t.getShaderSource(e),o)}else return r}function u2(t,e){const n=c2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function d2(t,e){let n;switch(e){case xy:n="Linear";break;case _y:n="Reinhard";break;case yy:n="OptimizedCineon";break;case Sy:n="ACESFilmic";break;case Ey:n="AgX";break;case wy:n="Neutral";break;case My:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function f2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cs).join(`
`)}function h2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function p2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function m2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function cs(t){return t!==""}function $p(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g2=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(t){return t.replace(g2,x2)}const v2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function x2(t,e){let n=Ne[e];if(n===void 0){const i=v2.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ad(n)}const _2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(t){return t.replace(_2,y2)}function y2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function S2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===R0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===X_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function M2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function w2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case of:e="ENVMAP_BLENDING_MULTIPLY";break;case gy:e="ENVMAP_BLENDING_MIX";break;case vy:e="ENVMAP_BLENDING_ADD";break}return e}function T2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function A2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=S2(n),c=M2(n),d=E2(n),f=w2(n),h=T2(n),g=n.isWebGL2?"":f2(n),_=h2(n),y=p2(s),m=r.createProgram();let u,x,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(cs).join(`
`),u.length>0&&(u+=`
`),x=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(cs).join(`
`),x.length>0&&(x+=`
`)):(u=[Qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),x=[g,Qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Wi?d2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,u2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cs).join(`
`)),o=ad(o),o=$p(o,n),o=Kp(o,n),a=ad(a),a=$p(a,n),a=Kp(a,n),o=Zp(o),a=Zp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=v+u+o,R=v+x+a,A=qp(r,r.VERTEX_SHADER,E),T=qp(r,r.FRAGMENT_SHADER,R);r.attachShader(m,A),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(ne){if(t.debug.checkShaderErrors){const J=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(A).trim(),X=r.getShaderInfoLog(T).trim();let j=!0,$=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,A,T);else{const P=Yp(r,A,"vertex"),k=Yp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+ne.name+`
Material Type: `+ne.type+`

Program Info Log: `+J+`
`+P+`
`+k)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(L===""||X==="")&&($=!1);$&&(ne.diagnostics={runnable:j,programLog:J,vertexShader:{log:L,prefix:u},fragmentShader:{log:X,prefix:x}})}r.deleteShader(A),r.deleteShader(T),Y=new Ya(r,m),S=m2(r,m)}let Y;this.getUniforms=function(){return Y===void 0&&D(this),Y};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(m,o2)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=a2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let C2=0;class b2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new R2(e),n.set(e,i)),i}}class R2{constructor(e){this.id=C2++,this.code=e,this.usedTimes=0}}function P2(t,e,n,i,r,s,o){const a=new j0,l=new b2,c=new Set,d=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function u(S,b,ne,J,L){const X=J.fog,j=L.geometry,$=S.isMeshStandardMaterial?J.environment:null,P=(S.isMeshStandardMaterial?n:e).get(S.envMap||$),k=P&&P.mapping===Gl?P.image.height:null,G=y[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const K=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,re=K!==void 0?K.length:0;let Ee=0;j.morphAttributes.position!==void 0&&(Ee=1),j.morphAttributes.normal!==void 0&&(Ee=2),j.morphAttributes.color!==void 0&&(Ee=3);let z,Q,Z,me;if(G){const Je=Xn[G];z=Je.vertexShader,Q=Je.fragmentShader}else z=S.vertexShader,Q=S.fragmentShader,l.update(S),Z=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const ge=t.getRenderTarget(),fe=L.isInstancedMesh===!0,Xe=L.isBatchedMesh===!0,Ae=!!S.map,U=!!S.matcap,Rt=!!P,Me=!!S.aoMap,ze=!!S.lightMap,Te=!!S.bumpMap,qe=!!S.normalMap,ke=!!S.displacementMap,Be=!!S.emissiveMap,mt=!!S.metalnessMap,C=!!S.roughnessMap,M=S.anisotropy>0,W=S.clearcoat>0,q=S.iridescence>0,ie=S.sheen>0,ee=S.transmission>0,Fe=M&&!!S.anisotropyMap,Ce=W&&!!S.clearcoatMap,le=W&&!!S.clearcoatNormalMap,ue=W&&!!S.clearcoatRoughnessMap,De=q&&!!S.iridescenceMap,se=q&&!!S.iridescenceThicknessMap,xt=ie&&!!S.sheenColorMap,He=ie&&!!S.sheenRoughnessMap,Se=!!S.specularMap,ve=!!S.specularColorMap,xe=!!S.specularIntensityMap,Ye=ee&&!!S.transmissionMap,Pe=ee&&!!S.thicknessMap,st=!!S.gradientMap,F=!!S.alphaMap,ce=S.alphaTest>0,B=!!S.alphaHash,oe=!!S.extensions;let de=Wi;S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(de=t.toneMapping);const Ve={isWebGL2:f,shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:z,fragmentShader:Q,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Xe,instancing:fe,instancingColor:fe&&L.instanceColor!==null,instancingMorph:fe&&L.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ji,alphaToCoverage:!!S.alphaToCoverage,map:Ae,matcap:U,envMap:Rt,envMapMode:Rt&&P.mapping,envMapCubeUVHeight:k,aoMap:Me,lightMap:ze,bumpMap:Te,normalMap:qe,displacementMap:g&&ke,emissiveMap:Be,normalMapObjectSpace:qe&&S.normalMapType===Ny,normalMapTangentSpace:qe&&S.normalMapType===O0,metalnessMap:mt,roughnessMap:C,anisotropy:M,anisotropyMap:Fe,clearcoat:W,clearcoatMap:Ce,clearcoatNormalMap:le,clearcoatRoughnessMap:ue,iridescence:q,iridescenceMap:De,iridescenceThicknessMap:se,sheen:ie,sheenColorMap:xt,sheenRoughnessMap:He,specularMap:Se,specularColorMap:ve,specularIntensityMap:xe,transmission:ee,transmissionMap:Ye,thicknessMap:Pe,gradientMap:st,opaque:S.transparent===!1&&S.blending===yr&&S.alphaToCoverage===!1,alphaMap:F,alphaTest:ce,alphaHash:B,combine:S.combine,mapUv:Ae&&m(S.map.channel),aoMapUv:Me&&m(S.aoMap.channel),lightMapUv:ze&&m(S.lightMap.channel),bumpMapUv:Te&&m(S.bumpMap.channel),normalMapUv:qe&&m(S.normalMap.channel),displacementMapUv:ke&&m(S.displacementMap.channel),emissiveMapUv:Be&&m(S.emissiveMap.channel),metalnessMapUv:mt&&m(S.metalnessMap.channel),roughnessMapUv:C&&m(S.roughnessMap.channel),anisotropyMapUv:Fe&&m(S.anisotropyMap.channel),clearcoatMapUv:Ce&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:He&&m(S.sheenRoughnessMap.channel),specularMapUv:Se&&m(S.specularMap.channel),specularColorMapUv:ve&&m(S.specularColorMap.channel),specularIntensityMapUv:xe&&m(S.specularIntensityMap.channel),transmissionMapUv:Ye&&m(S.transmissionMap.channel),thicknessMapUv:Pe&&m(S.thicknessMap.channel),alphaMapUv:F&&m(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(qe||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!j.attributes.uv&&(Ae||F),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ee,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&ne.length>0,shadowMapType:t.shadowMap.type,toneMapping:de,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Un,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:oe&&S.extensions.derivatives===!0,extensionFragDepth:oe&&S.extensions.fragDepth===!0,extensionDrawBuffers:oe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:oe&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function x(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const ne in S.defines)b.push(ne),b.push(S.defines[ne]);return S.isRawShaderMaterial===!1&&(v(b,S),E(b,S),b.push(t.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.instancingMorph&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.normalMapObjectSpace&&a.enable(7),b.normalMapTangentSpace&&a.enable(8),b.clearcoat&&a.enable(9),b.iridescence&&a.enable(10),b.alphaTest&&a.enable(11),b.vertexColors&&a.enable(12),b.vertexAlphas&&a.enable(13),b.vertexUv1s&&a.enable(14),b.vertexUv2s&&a.enable(15),b.vertexUv3s&&a.enable(16),b.vertexTangents&&a.enable(17),b.anisotropy&&a.enable(18),b.alphaHash&&a.enable(19),b.batching&&a.enable(20),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),S.push(a.mask)}function R(S){const b=y[S.type];let ne;if(b){const J=Xn[b];ne=c1.clone(J.uniforms)}else ne=S.uniforms;return ne}function A(S,b){let ne;for(let J=0,L=d.length;J<L;J++){const X=d[J];if(X.cacheKey===b){ne=X,++ne.usedTimes;break}}return ne===void 0&&(ne=new A2(t,b,S,s),d.push(ne)),ne}function T(S){if(--S.usedTimes===0){const b=d.indexOf(S);d[b]=d[d.length-1],d.pop(),S.destroy()}}function D(S){l.remove(S)}function Y(){l.dispose()}return{getParameters:u,getProgramCacheKey:x,getUniforms:R,acquireProgram:A,releaseProgram:T,releaseShaderCache:D,programs:d,dispose:Y}}function L2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function F2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function em(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,g,_,y,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:g,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=g,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=m),e++,u}function a(f,h,g,_,y,m){const u=o(f,h,g,_,y,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,h,g,_,y,m){const u=o(f,h,g,_,y,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||F2),i.length>1&&i.sort(h||Jp),r.length>1&&r.sort(h||Jp)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function D2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new em,t.set(i,[o])):r>=s.length?(o=new em,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function I2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new We};break;case"SpotLight":n={position:new N,direction:new N,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function N2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let U2=0;function k2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function O2(t,e){const n=new I2,i=N2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new N);const s=new N,o=new ft,a=new ft;function l(d,f){let h=0,g=0,_=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let y=0,m=0,u=0,x=0,v=0,E=0,R=0,A=0,T=0,D=0,Y=0;d.sort(k2);const S=f===!0?Math.PI:1;for(let ne=0,J=d.length;ne<J;ne++){const L=d[ne],X=L.color,j=L.intensity,$=L.distance,P=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=X.r*j*S,g+=X.g*j*S,_+=X.b*j*S;else if(L.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(L.sh.coefficients[k],j);Y++}else if(L.isDirectionalLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const G=L.shadow,K=i.get(L);K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,r.directionalShadow[y]=K,r.directionalShadowMap[y]=P,r.directionalShadowMatrix[y]=L.shadow.matrix,E++}r.directional[y]=k,y++}else if(L.isSpotLight){const k=n.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(X).multiplyScalar(j*S),k.distance=$,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,r.spot[u]=k;const G=L.shadow;if(L.map&&(r.spotLightMap[T]=L.map,T++,G.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[u]=G.matrix,L.castShadow){const K=i.get(L);K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,r.spotShadow[u]=K,r.spotShadowMap[u]=P,A++}u++}else if(L.isRectAreaLight){const k=n.get(L);k.color.copy(X).multiplyScalar(j),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),r.rectArea[x]=k,x++}else if(L.isPointLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*S),k.distance=L.distance,k.decay=L.decay,L.castShadow){const G=L.shadow,K=i.get(L);K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=P,r.pointShadowMatrix[m]=L.shadow.matrix,R++}r.point[m]=k,m++}else if(L.isHemisphereLight){const k=n.get(L);k.skyColor.copy(L.color).multiplyScalar(j*S),k.groundColor.copy(L.groundColor).multiplyScalar(j*S),r.hemi[v]=k,v++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=_;const b=r.hash;(b.directionalLength!==y||b.pointLength!==m||b.spotLength!==u||b.rectAreaLength!==x||b.hemiLength!==v||b.numDirectionalShadows!==E||b.numPointShadows!==R||b.numSpotShadows!==A||b.numSpotMaps!==T||b.numLightProbes!==Y)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=A+T-D,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=Y,b.directionalLength=y,b.pointLength=m,b.spotLength=u,b.rectAreaLength=x,b.hemiLength=v,b.numDirectionalShadows=E,b.numPointShadows=R,b.numSpotShadows=A,b.numSpotMaps=T,b.numLightProbes=Y,r.version=U2++)}function c(d,f){let h=0,g=0,_=0,y=0,m=0;const u=f.matrixWorldInverse;for(let x=0,v=d.length;x<v;x++){const E=d[x];if(E.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),h++}else if(E.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),_++}else if(E.isRectAreaLight){const R=r.rectArea[y];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(E.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),g++}else if(E.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function tm(t,e){const n=new O2(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function z2(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new tm(t,e),n.set(s,[l])):o>=a.length?(l=new tm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class B2 extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H2 extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V2=`uniform sampler2D shadow_pass;
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
}`;function W2(t,e,n){let i=new cf;const r=new je,s=new je,o=new lt,a=new B2({depthPacking:Iy}),l=new H2,c={},d=n.maxTextureSize,f={[Yi]:an,[an]:Yi,[Un]:Un},h=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:G2,fragmentShader:V2}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new bn;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R0;let u=this.type;this.render=function(A,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const Y=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),ne=t.state;ne.setBlending(Vi),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const J=u!==si&&this.type===si,L=u===si&&this.type!==si;for(let X=0,j=A.length;X<j;X++){const $=A[X],P=$.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const k=P.getFrameExtents();if(r.multiply(k),s.copy(P.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/k.x),r.x=s.x*k.x,P.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/k.y),r.y=s.y*k.y,P.mapSize.y=s.y)),P.map===null||J===!0||L===!0){const K=this.type!==si?{minFilter:jt,magFilter:jt}:{};P.map!==null&&P.map.dispose(),P.map=new br(r.x,r.y,K),P.map.texture.name=$.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const G=P.getViewportCount();for(let K=0;K<G;K++){const re=P.getViewport(K);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),ne.viewport(o),P.updateMatrices($,K),i=P.getFrustum(),E(T,D,P.camera,$,this.type)}P.isPointLightShadow!==!0&&this.type===si&&x(P,D),P.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(Y,S,b)};function x(A,T){const D=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new br(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,D,h,y,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,D,g,y,null)}function v(A,T,D,Y){let S=null;const b=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)S=b;else if(S=D.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const ne=S.uuid,J=T.uuid;let L=c[ne];L===void 0&&(L={},c[ne]=L);let X=L[J];X===void 0&&(X=S.clone(),L[J]=X,T.addEventListener("dispose",R)),S=X}if(S.visible=T.visible,S.wireframe=T.wireframe,Y===si?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const ne=t.properties.get(S);ne.light=D}return S}function E(A,T,D,Y,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===si)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const J=e.update(A),L=A.material;if(Array.isArray(L)){const X=J.groups;for(let j=0,$=X.length;j<$;j++){const P=X[j],k=L[P.materialIndex];if(k&&k.visible){const G=v(A,k,Y,S);A.onBeforeShadow(t,A,T,D,J,G,P),t.renderBufferDirect(D,null,J,G,A,P),A.onAfterShadow(t,A,T,D,J,G,P)}}}else if(L.visible){const X=v(A,L,Y,S);A.onBeforeShadow(t,A,T,D,J,X,null),t.renderBufferDirect(D,null,J,X,A,null),A.onAfterShadow(t,A,T,D,J,X,null)}}const ne=A.children;for(let J=0,L=ne.length;J<L;J++)E(ne[J],T,D,Y,S)}function R(A){A.target.removeEventListener("dispose",R);for(const D in c){const Y=c[D],S=A.target.uuid;S in Y&&(Y[S].dispose(),delete Y[S])}}}function j2(t,e,n){const i=n.isWebGL2;function r(){let F=!1;const ce=new lt;let B=null;const oe=new lt(0,0,0,0);return{setMask:function(de){B!==de&&!F&&(t.colorMask(de,de,de,de),B=de)},setLocked:function(de){F=de},setClear:function(de,Ve,Je,Pt,xn){xn===!0&&(de*=Pt,Ve*=Pt,Je*=Pt),ce.set(de,Ve,Je,Pt),oe.equals(ce)===!1&&(t.clearColor(de,Ve,Je,Pt),oe.copy(ce))},reset:function(){F=!1,B=null,oe.set(-1,0,0,0)}}}function s(){let F=!1,ce=null,B=null,oe=null;return{setTest:function(de){de?fe(t.DEPTH_TEST):Xe(t.DEPTH_TEST)},setMask:function(de){ce!==de&&!F&&(t.depthMask(de),ce=de)},setFunc:function(de){if(B!==de){switch(de){case cy:t.depthFunc(t.NEVER);break;case uy:t.depthFunc(t.ALWAYS);break;case dy:t.depthFunc(t.LESS);break;case _l:t.depthFunc(t.LEQUAL);break;case fy:t.depthFunc(t.EQUAL);break;case hy:t.depthFunc(t.GEQUAL);break;case py:t.depthFunc(t.GREATER);break;case my:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}B=de}},setLocked:function(de){F=de},setClear:function(de){oe!==de&&(t.clearDepth(de),oe=de)},reset:function(){F=!1,ce=null,B=null,oe=null}}}function o(){let F=!1,ce=null,B=null,oe=null,de=null,Ve=null,Je=null,Pt=null,xn=null;return{setTest:function(et){F||(et?fe(t.STENCIL_TEST):Xe(t.STENCIL_TEST))},setMask:function(et){ce!==et&&!F&&(t.stencilMask(et),ce=et)},setFunc:function(et,Gt,Gn){(B!==et||oe!==Gt||de!==Gn)&&(t.stencilFunc(et,Gt,Gn),B=et,oe=Gt,de=Gn)},setOp:function(et,Gt,Gn){(Ve!==et||Je!==Gt||Pt!==Gn)&&(t.stencilOp(et,Gt,Gn),Ve=et,Je=Gt,Pt=Gn)},setLocked:function(et){F=et},setClear:function(et){xn!==et&&(t.clearStencil(et),xn=et)},reset:function(){F=!1,ce=null,B=null,oe=null,de=null,Ve=null,Je=null,Pt=null,xn=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let h={},g={},_=new WeakMap,y=[],m=null,u=!1,x=null,v=null,E=null,R=null,A=null,T=null,D=null,Y=new We(0,0,0),S=0,b=!1,ne=null,J=null,L=null,X=null,j=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,k=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(G)[1]),P=k>=1):G.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),P=k>=2);let K=null,re={};const Ee=t.getParameter(t.SCISSOR_BOX),z=t.getParameter(t.VIEWPORT),Q=new lt().fromArray(Ee),Z=new lt().fromArray(z);function me(F,ce,B,oe){const de=new Uint8Array(4),Ve=t.createTexture();t.bindTexture(F,Ve),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<B;Je++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ce+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Ve}const ge={};ge[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(t.DEPTH_TEST),l.setFunc(_l),ke(!1),Be(Ih),fe(t.CULL_FACE),Te(Vi);function fe(F){h[F]!==!0&&(t.enable(F),h[F]=!0)}function Xe(F){h[F]!==!1&&(t.disable(F),h[F]=!1)}function Ae(F,ce){return g[F]!==ce?(t.bindFramebuffer(F,ce),g[F]=ce,i&&(F===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ce),F===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function U(F,ce){let B=y,oe=!1;if(F){B=_.get(ce),B===void 0&&(B=[],_.set(ce,B));const de=F.textures;if(B.length!==de.length||B[0]!==t.COLOR_ATTACHMENT0){for(let Ve=0,Je=de.length;Ve<Je;Ve++)B[Ve]=t.COLOR_ATTACHMENT0+Ve;B.length=de.length,oe=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,oe=!0);if(oe)if(n.isWebGL2)t.drawBuffers(B);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Rt(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const Me={[hr]:t.FUNC_ADD,[Y_]:t.FUNC_SUBTRACT,[$_]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[Oh]=t.MIN,Me[zh]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Me[Oh]=F.MIN_EXT,Me[zh]=F.MAX_EXT)}const ze={[K_]:t.ZERO,[Z_]:t.ONE,[Q_]:t.SRC_COLOR,[Qu]:t.SRC_ALPHA,[ry]:t.SRC_ALPHA_SATURATE,[ny]:t.DST_COLOR,[ey]:t.DST_ALPHA,[J_]:t.ONE_MINUS_SRC_COLOR,[Ju]:t.ONE_MINUS_SRC_ALPHA,[iy]:t.ONE_MINUS_DST_COLOR,[ty]:t.ONE_MINUS_DST_ALPHA,[sy]:t.CONSTANT_COLOR,[oy]:t.ONE_MINUS_CONSTANT_COLOR,[ay]:t.CONSTANT_ALPHA,[ly]:t.ONE_MINUS_CONSTANT_ALPHA};function Te(F,ce,B,oe,de,Ve,Je,Pt,xn,et){if(F===Vi){u===!0&&(Xe(t.BLEND),u=!1);return}if(u===!1&&(fe(t.BLEND),u=!0),F!==q_){if(F!==x||et!==b){if((v!==hr||A!==hr)&&(t.blendEquation(t.FUNC_ADD),v=hr,A=hr),et)switch(F){case yr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nh:t.blendFunc(t.ONE,t.ONE);break;case Uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case yr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,R=null,T=null,D=null,Y.set(0,0,0),S=0,x=F,b=et}return}de=de||ce,Ve=Ve||B,Je=Je||oe,(ce!==v||de!==A)&&(t.blendEquationSeparate(Me[ce],Me[de]),v=ce,A=de),(B!==E||oe!==R||Ve!==T||Je!==D)&&(t.blendFuncSeparate(ze[B],ze[oe],ze[Ve],ze[Je]),E=B,R=oe,T=Ve,D=Je),(Pt.equals(Y)===!1||xn!==S)&&(t.blendColor(Pt.r,Pt.g,Pt.b,xn),Y.copy(Pt),S=xn),x=F,b=!1}function qe(F,ce){F.side===Un?Xe(t.CULL_FACE):fe(t.CULL_FACE);let B=F.side===an;ce&&(B=!B),ke(B),F.blending===yr&&F.transparent===!1?Te(Vi):Te(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const oe=F.stencilWrite;c.setTest(oe),oe&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),C(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(F){ne!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),ne=F)}function Be(F){F!==W_?(fe(t.CULL_FACE),F!==J&&(F===Ih?t.cullFace(t.BACK):F===j_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Xe(t.CULL_FACE),J=F}function mt(F){F!==L&&(P&&t.lineWidth(F),L=F)}function C(F,ce,B){F?(fe(t.POLYGON_OFFSET_FILL),(X!==ce||j!==B)&&(t.polygonOffset(ce,B),X=ce,j=B)):Xe(t.POLYGON_OFFSET_FILL)}function M(F){F?fe(t.SCISSOR_TEST):Xe(t.SCISSOR_TEST)}function W(F){F===void 0&&(F=t.TEXTURE0+$-1),K!==F&&(t.activeTexture(F),K=F)}function q(F,ce,B){B===void 0&&(K===null?B=t.TEXTURE0+$-1:B=K);let oe=re[B];oe===void 0&&(oe={type:void 0,texture:void 0},re[B]=oe),(oe.type!==F||oe.texture!==ce)&&(K!==B&&(t.activeTexture(B),K=B),t.bindTexture(F,ce||ge[F]),oe.type=F,oe.texture=ce)}function ie(){const F=re[K];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(F){Q.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Q.copy(F))}function xe(F){Z.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Z.copy(F))}function Ye(F,ce){let B=f.get(ce);B===void 0&&(B=new WeakMap,f.set(ce,B));let oe=B.get(F);oe===void 0&&(oe=t.getUniformBlockIndex(ce,F.name),B.set(F,oe))}function Pe(F,ce){const oe=f.get(ce).get(F);d.get(ce)!==oe&&(t.uniformBlockBinding(ce,oe,F.__bindingPointIndex),d.set(ce,oe))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},K=null,re={},g={},_=new WeakMap,y=[],m=null,u=!1,x=null,v=null,E=null,R=null,A=null,T=null,D=null,Y=new We(0,0,0),S=0,b=!1,ne=null,J=null,L=null,X=null,j=null,Q.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:fe,disable:Xe,bindFramebuffer:Ae,drawBuffers:U,useProgram:Rt,setBlending:Te,setMaterial:qe,setFlipSided:ke,setCullFace:Be,setLineWidth:mt,setPolygonOffset:C,setScissorTest:M,activeTexture:W,bindTexture:q,unbindTexture:ie,compressedTexImage2D:ee,compressedTexImage3D:Fe,texImage2D:He,texImage3D:Se,updateUBOMapping:Ye,uniformBlockBinding:Pe,texStorage2D:se,texStorage3D:xt,texSubImage2D:Ce,texSubImage3D:le,compressedTexSubImage2D:ue,compressedTexSubImage3D:De,scissor:ve,viewport:xe,reset:st}}function X2(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new je,f=new WeakMap;let h;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,M){return _?new OffscreenCanvas(C,M):No("canvas")}function m(C,M,W,q){let ie=1;const ee=mt(C);if((ee.width>q||ee.height>q)&&(ie=q/Math.max(ee.width,ee.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Fe=M?od:Math.floor,Ce=Fe(ie*ee.width),le=Fe(ie*ee.height);h===void 0&&(h=y(Ce,le));const ue=W?y(Ce,le):h;return ue.width=Ce,ue.height=le,ue.getContext("2d").drawImage(C,0,0,Ce,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Ce+"x"+le+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function u(C){const M=mt(C);return mp(M.width)&&mp(M.height)}function x(C){return a?!1:C.wrapS!==kn||C.wrapT!==kn||C.minFilter!==jt&&C.minFilter!==Qt}function v(C,M){return C.generateMipmaps&&M&&C.minFilter!==jt&&C.minFilter!==Qt}function E(C){t.generateMipmap(C)}function R(C,M,W,q,ie=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=M;if(M===t.RED&&(W===t.FLOAT&&(ee=t.R32F),W===t.HALF_FLOAT&&(ee=t.R16F),W===t.UNSIGNED_BYTE&&(ee=t.R8)),M===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.R8UI),W===t.UNSIGNED_SHORT&&(ee=t.R16UI),W===t.UNSIGNED_INT&&(ee=t.R32UI),W===t.BYTE&&(ee=t.R8I),W===t.SHORT&&(ee=t.R16I),W===t.INT&&(ee=t.R32I)),M===t.RG&&(W===t.FLOAT&&(ee=t.RG32F),W===t.HALF_FLOAT&&(ee=t.RG16F),W===t.UNSIGNED_BYTE&&(ee=t.RG8)),M===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.RG8UI),W===t.UNSIGNED_SHORT&&(ee=t.RG16UI),W===t.UNSIGNED_INT&&(ee=t.RG32UI),W===t.BYTE&&(ee=t.RG8I),W===t.SHORT&&(ee=t.RG16I),W===t.INT&&(ee=t.RG32I)),M===t.RGBA){const Fe=ie?yl:Qe.getTransfer(q);W===t.FLOAT&&(ee=t.RGBA32F),W===t.HALF_FLOAT&&(ee=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ee=Fe===it?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function A(C,M,W){return v(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==jt&&C.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){return C===jt||C===Bh||C===Ws?t.NEAREST:t.LINEAR}function D(C){const M=C.target;M.removeEventListener("dispose",D),S(M),M.isVideoTexture&&f.delete(M)}function Y(C){const M=C.target;M.removeEventListener("dispose",Y),ne(M)}function S(C){const M=i.get(C);if(M.__webglInit===void 0)return;const W=C.source,q=g.get(W);if(q){const ie=q[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(C),Object.keys(q).length===0&&g.delete(W)}i.remove(C)}function b(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const W=C.source,q=g.get(W);delete q[M.__cacheKey],o.memory.textures--}function ne(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let ie=0;ie<M.__webglFramebuffer[q].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[q][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=C.textures;for(let q=0,ie=W.length;q<ie;q++){const ee=i.get(W[q]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(W[q])}i.remove(C)}let J=0;function L(){J=0}function X(){const C=J;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),J+=1,C}function j(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function $(C,M){const W=i.get(C);if(C.isVideoTexture&&ke(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,C,M);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function P(C,M){const W=i.get(C);if(C.version>0&&W.__version!==C.version){Z(W,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function k(C,M){const W=i.get(C);if(C.version>0&&W.__version!==C.version){Z(W,C,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function G(C,M){const W=i.get(C);if(C.version>0&&W.__version!==C.version){me(W,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const K={[nd]:t.REPEAT,[kn]:t.CLAMP_TO_EDGE,[id]:t.MIRRORED_REPEAT},re={[jt]:t.NEAREST,[Bh]:t.NEAREST_MIPMAP_NEAREST,[Ws]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[Mc]:t.LINEAR_MIPMAP_NEAREST,[Fi]:t.LINEAR_MIPMAP_LINEAR},Ee={[Uy]:t.NEVER,[Gy]:t.ALWAYS,[ky]:t.LESS,[z0]:t.LEQUAL,[Oy]:t.EQUAL,[Hy]:t.GEQUAL,[zy]:t.GREATER,[By]:t.NOTEQUAL};function z(C,M,W){if(M.type===li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qt||M.magFilter===Mc||M.magFilter===Ws||M.magFilter===Fi||M.minFilter===Qt||M.minFilter===Mc||M.minFilter===Ws||M.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),W?(t.texParameteri(C,t.TEXTURE_WRAP_S,K[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,K[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,K[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,re[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,re[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==kn||M.wrapT!==kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==jt&&M.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jt||M.minFilter!==Ws&&M.minFilter!==Fi||M.type===li&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Io&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Q(C,M){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",D));const q=M.source;let ie=g.get(q);ie===void 0&&(ie={},g.set(q,ie));const ee=j(M);if(ee!==C.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[ee].usedTimes++;const Fe=ie[C.__cacheKey];Fe!==void 0&&(ie[C.__cacheKey].usedTimes--,Fe.usedTimes===0&&b(M)),C.__cacheKey=ee,C.__webglTexture=ie[ee].texture}return W}function Z(C,M,W){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);const ie=Q(C,M),ee=M.source;n.bindTexture(q,C.__webglTexture,t.TEXTURE0+W);const Fe=i.get(ee);if(ee.version!==Fe.__version||ie===!0){n.activeTexture(t.TEXTURE0+W);const Ce=Qe.getPrimaries(Qe.workingColorSpace),le=M.colorSpace===Ri?null:Qe.getPrimaries(M.colorSpace),ue=M.colorSpace===Ri||Ce===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const De=x(M)&&u(M.image)===!1;let se=m(M.image,De,!1,r.maxTextureSize);se=Be(M,se);const xt=u(se)||a,He=s.convert(M.format,M.colorSpace);let Se=s.convert(M.type),ve=R(M.internalFormat,He,Se,M.colorSpace,M.isVideoTexture);z(q,M,xt);let xe;const Ye=M.mipmaps,Pe=a&&M.isVideoTexture!==!0&&ve!==k0,st=Fe.__version===void 0||ie===!0,F=ee.dataReady,ce=A(M,se,xt);if(M.isDepthTexture)ve=t.DEPTH_COMPONENT,a?M.type===li?ve=t.DEPTH_COMPONENT32F:M.type===Di?ve=t.DEPTH_COMPONENT24:M.type===Sr?ve=t.DEPTH24_STENCIL8:ve=t.DEPTH_COMPONENT16:M.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Mr&&ve===t.DEPTH_COMPONENT&&M.type!==af&&M.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Di,Se=s.convert(M.type)),M.format===Cs&&ve===t.DEPTH_COMPONENT&&(ve=t.DEPTH_STENCIL,M.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Sr,Se=s.convert(M.type))),st&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,ve,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,ve,se.width,se.height,0,He,Se,null));else if(M.isDataTexture)if(Ye.length>0&&xt){Pe&&st&&n.texStorage2D(t.TEXTURE_2D,ce,ve,Ye[0].width,Ye[0].height);for(let B=0,oe=Ye.length;B<oe;B++)xe=Ye[B],Pe?F&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,xe.width,xe.height,He,Se,xe.data):n.texImage2D(t.TEXTURE_2D,B,ve,xe.width,xe.height,0,He,Se,xe.data);M.generateMipmaps=!1}else Pe?(st&&n.texStorage2D(t.TEXTURE_2D,ce,ve,se.width,se.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,He,Se,se.data)):n.texImage2D(t.TEXTURE_2D,0,ve,se.width,se.height,0,He,Se,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pe&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,ve,Ye[0].width,Ye[0].height,se.depth);for(let B=0,oe=Ye.length;B<oe;B++)xe=Ye[B],M.format!==On?He!==null?Pe?F&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,xe.width,xe.height,se.depth,He,xe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,ve,xe.width,xe.height,se.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,xe.width,xe.height,se.depth,He,Se,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,ve,xe.width,xe.height,se.depth,0,He,Se,xe.data)}else{Pe&&st&&n.texStorage2D(t.TEXTURE_2D,ce,ve,Ye[0].width,Ye[0].height);for(let B=0,oe=Ye.length;B<oe;B++)xe=Ye[B],M.format!==On?He!==null?Pe?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,xe.width,xe.height,He,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,B,ve,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?F&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,xe.width,xe.height,He,Se,xe.data):n.texImage2D(t.TEXTURE_2D,B,ve,xe.width,xe.height,0,He,Se,xe.data)}else if(M.isDataArrayTexture)Pe?(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,ve,se.width,se.height,se.depth),F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,He,Se,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,se.width,se.height,se.depth,0,He,Se,se.data);else if(M.isData3DTexture)Pe?(st&&n.texStorage3D(t.TEXTURE_3D,ce,ve,se.width,se.height,se.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,He,Se,se.data)):n.texImage3D(t.TEXTURE_3D,0,ve,se.width,se.height,se.depth,0,He,Se,se.data);else if(M.isFramebufferTexture){if(st)if(Pe)n.texStorage2D(t.TEXTURE_2D,ce,ve,se.width,se.height);else{let B=se.width,oe=se.height;for(let de=0;de<ce;de++)n.texImage2D(t.TEXTURE_2D,de,ve,B,oe,0,He,Se,null),B>>=1,oe>>=1}}else if(Ye.length>0&&xt){if(Pe&&st){const B=mt(Ye[0]);n.texStorage2D(t.TEXTURE_2D,ce,ve,B.width,B.height)}for(let B=0,oe=Ye.length;B<oe;B++)xe=Ye[B],Pe?F&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,He,Se,xe):n.texImage2D(t.TEXTURE_2D,B,ve,He,Se,xe);M.generateMipmaps=!1}else if(Pe){if(st){const B=mt(se);n.texStorage2D(t.TEXTURE_2D,ce,ve,B.width,B.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,Se,se)}else n.texImage2D(t.TEXTURE_2D,0,ve,He,Se,se);v(M,xt)&&E(q),Fe.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function me(C,M,W){if(M.image.length!==6)return;const q=Q(C,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+W);const ee=i.get(ie);if(ie.version!==ee.__version||q===!0){n.activeTexture(t.TEXTURE0+W);const Fe=Qe.getPrimaries(Qe.workingColorSpace),Ce=M.colorSpace===Ri?null:Qe.getPrimaries(M.colorSpace),le=M.colorSpace===Ri||Fe===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,De=M.image[0]&&M.image[0].isDataTexture,se=[];for(let B=0;B<6;B++)!ue&&!De?se[B]=m(M.image[B],!1,!0,r.maxCubemapSize):se[B]=De?M.image[B].image:M.image[B],se[B]=Be(M,se[B]);const xt=se[0],He=u(xt)||a,Se=s.convert(M.format,M.colorSpace),ve=s.convert(M.type),xe=R(M.internalFormat,Se,ve,M.colorSpace),Ye=a&&M.isVideoTexture!==!0,Pe=ee.__version===void 0||q===!0,st=ie.dataReady;let F=A(M,xt,He);z(t.TEXTURE_CUBE_MAP,M,He);let ce;if(ue){Ye&&Pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,F,xe,xt.width,xt.height);for(let B=0;B<6;B++){ce=se[B].mipmaps;for(let oe=0;oe<ce.length;oe++){const de=ce[oe];M.format!==On?Se!==null?Ye?st&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,oe,0,0,de.width,de.height,Se,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,oe,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?st&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,oe,0,0,de.width,de.height,Se,ve,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,oe,xe,de.width,de.height,0,Se,ve,de.data)}}}else{if(ce=M.mipmaps,Ye&&Pe){ce.length>0&&F++;const B=mt(se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,F,xe,B.width,B.height)}for(let B=0;B<6;B++)if(De){Ye?st&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,se[B].width,se[B].height,Se,ve,se[B].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,xe,se[B].width,se[B].height,0,Se,ve,se[B].data);for(let oe=0;oe<ce.length;oe++){const Ve=ce[oe].image[B].image;Ye?st&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,oe+1,0,0,Ve.width,Ve.height,Se,ve,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,oe+1,xe,Ve.width,Ve.height,0,Se,ve,Ve.data)}}else{Ye?st&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Se,ve,se[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,xe,Se,ve,se[B]);for(let oe=0;oe<ce.length;oe++){const de=ce[oe];Ye?st&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,oe+1,0,0,Se,ve,de.image[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,oe+1,xe,Se,ve,de.image[B])}}}v(M,He)&&E(t.TEXTURE_CUBE_MAP),ee.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ge(C,M,W,q,ie,ee){const Fe=s.convert(W.format,W.colorSpace),Ce=s.convert(W.type),le=R(W.internalFormat,Fe,Ce,W.colorSpace);if(!i.get(M).__hasExternalTextures){const De=Math.max(1,M.width>>ee),se=Math.max(1,M.height>>ee);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ee,le,De,se,M.depth,0,Fe,Ce,null):n.texImage2D(ie,ee,le,De,se,0,Fe,Ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),qe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,ie,i.get(W).__webglTexture,0,Te(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,ie,i.get(W).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(C,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let q=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(W||qe(M)){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===li?q=t.DEPTH_COMPONENT32F:ie.type===Di&&(q=t.DEPTH_COMPONENT24));const ee=Te(M);qe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,q,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,q,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const q=Te(M);W&&qe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,M.width,M.height):qe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const q=M.textures;for(let ie=0;ie<q.length;ie++){const ee=q[ie],Fe=s.convert(ee.format,ee.colorSpace),Ce=s.convert(ee.type),le=R(ee.internalFormat,Fe,Ce,ee.colorSpace),ue=Te(M);W&&qe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,le,M.width,M.height):qe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,le,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,le,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const q=i.get(M.depthTexture).__webglTexture,ie=Te(M);if(M.depthTexture.format===Mr)qe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(M.depthTexture.format===Cs)qe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ae(C){const M=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Xe(M.__webglFramebuffer,C)}else if(W){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]=t.createRenderbuffer(),fe(M.__webglDepthbuffer[q],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),fe(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function U(C,M,W){const q=i.get(C);M!==void 0&&ge(q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ae(C)}function Rt(C){const M=C.texture,W=i.get(C),q=i.get(M);C.addEventListener("dispose",Y);const ie=C.textures,ee=C.isWebGLCubeRenderTarget===!0,Fe=ie.length>1,Ce=u(C)||a;if(Fe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),ee){W.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[le]=[];for(let ue=0;ue<M.mipmaps.length;ue++)W.__webglFramebuffer[le][ue]=t.createFramebuffer()}else W.__webglFramebuffer[le]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)W.__webglFramebuffer[le]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Fe)if(r.drawBuffers)for(let le=0,ue=ie.length;le<ue;le++){const De=i.get(ie[le]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&qe(C)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let le=0;le<ie.length;le++){const ue=ie[le];W.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[le]);const De=s.convert(ue.format,ue.colorSpace),se=s.convert(ue.type),xt=R(ue.internalFormat,De,se,ue.colorSpace,C.isXRRenderTarget===!0),He=Te(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,xt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,W.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(W.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),z(t.TEXTURE_CUBE_MAP,M,Ce);for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)ge(W.__webglFramebuffer[le][ue],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else ge(W.__webglFramebuffer[le],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(M,Ce)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let le=0,ue=ie.length;le<ue;le++){const De=ie[le],se=i.get(De);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),z(t.TEXTURE_2D,De,Ce),ge(W.__webglFramebuffer,C,De,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),v(De,Ce)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,q.__webglTexture),z(le,M,Ce),a&&M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)ge(W.__webglFramebuffer[ue],C,M,t.COLOR_ATTACHMENT0,le,ue);else ge(W.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,le,0);v(M,Ce)&&E(le),n.unbindTexture()}C.depthBuffer&&Ae(C)}function Me(C){const M=u(C)||a,W=C.textures;for(let q=0,ie=W.length;q<ie;q++){const ee=W[q];if(v(ee,M)){const Fe=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(ee).__webglTexture;n.bindTexture(Fe,Ce),E(Fe),n.unbindTexture()}}}function ze(C){if(a&&C.samples>0&&qe(C)===!1){const M=C.textures,W=C.width,q=C.height;let ie=t.COLOR_BUFFER_BIT;const ee=[],Fe=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(C),le=M.length>1;if(le)for(let ue=0;ue<M.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){ee.push(t.COLOR_ATTACHMENT0+ue),C.depthBuffer&&ee.push(Fe);const De=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(De===!1&&(C.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),le&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ue]),De===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Fe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Fe])),le){const se=i.get(M[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,W,q,0,0,W,q,ie,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ue=0;ue<M.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ue]);const De=i.get(M[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function Te(C){return Math.min(r.maxSamples,C.samples)}function qe(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function Be(C,M){const W=C.colorSpace,q=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===rd||W!==Ji&&W!==Ri&&(Qe.getTransfer(W)===it?a===!1?e.has("EXT_sRGB")===!0&&q===On?(C.format=rd,C.minFilter=Qt,C.generateMipmaps=!1):M=H0.sRGBToLinear(M):(q!==On||ie!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(d.width=C.naturalWidth||C.width,d.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(d.width=C.displayWidth,d.height=C.displayHeight):(d.width=C.width,d.height=C.height),d}this.allocateTextureUnit=X,this.resetTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=P,this.setTexture3D=k,this.setTextureCube=G,this.rebindTextures=U,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=qe}function q2(t,e,n){const i=n.isWebGL2;function r(s,o=Ri){let a;const l=Qe.getTransfer(o);if(s===ji)return t.UNSIGNED_BYTE;if(s===F0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===D0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Ty)return t.BYTE;if(s===Ay)return t.SHORT;if(s===af)return t.UNSIGNED_SHORT;if(s===L0)return t.INT;if(s===Di)return t.UNSIGNED_INT;if(s===li)return t.FLOAT;if(s===Io)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Cy)return t.ALPHA;if(s===On)return t.RGBA;if(s===by)return t.LUMINANCE;if(s===Ry)return t.LUMINANCE_ALPHA;if(s===Mr)return t.DEPTH_COMPONENT;if(s===Cs)return t.DEPTH_STENCIL;if(s===rd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Py)return t.RED;if(s===I0)return t.RED_INTEGER;if(s===Ly)return t.RG;if(s===N0)return t.RG_INTEGER;if(s===U0)return t.RGBA_INTEGER;if(s===Ec||s===wc||s===Tc||s===Ac)if(l===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ec)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ec)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ac)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hh||s===Gh||s===Vh||s===Wh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Hh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===k0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===jh||s===Xh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===jh)return l===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Xh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qh||s===Yh||s===$h||s===Kh||s===Zh||s===Qh||s===Jh||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===op)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===qh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$h)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ep)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tp)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===np)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ip)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rp)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sp)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===op)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cc||s===ap||s===lp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Cc)return l===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ap)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===lp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fy||s===cp||s===up||s===dp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Cc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===cp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===up)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Sr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Y2 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class us extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $2={type:"move"};class eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const K2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z2=`
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

}`;class Q2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new $i({extensions:{fragDepth:!0},vertexShader:K2,fragmentShader:Z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new tn(new jo(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class J2 extends Fs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,g=null,_=null;const y=new Q2,m=n.getContextAttributes();let u=null,x=null;const v=[],E=[],R=new je;let A=null;const T=new fn;T.layers.enable(1),T.viewport=new lt;const D=new fn;D.layers.enable(2),D.viewport=new lt;const Y=[T,D],S=new Y2;S.layers.enable(1),S.layers.enable(2);let b=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Q=v[z];return Q===void 0&&(Q=new eu,v[z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(z){let Q=v[z];return Q===void 0&&(Q=new eu,v[z]=Q),Q.getGripSpace()},this.getHand=function(z){let Q=v[z];return Q===void 0&&(Q=new eu,v[z]=Q),Q.getHandSpace()};function J(z){const Q=E.indexOf(z.inputSource);if(Q===-1)return;const Z=v[Q];Z!==void 0&&(Z.update(z.inputSource,z.frame,c||o),Z.dispatchEvent({type:z.type,data:z.inputSource}))}function L(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",X);for(let z=0;z<v.length;z++){const Q=E[z];Q!==null&&(E[z]=null,v[z].disconnect(Q))}b=null,ne=null,y.reset(),e.setRenderTarget(u),g=null,h=null,f=null,r=null,x=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",L),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new br(g.framebufferWidth,g.framebufferHeight,{format:On,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,Z=null,me=null;m.depth&&(me=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=m.stencil?Cs:Mr,Z=m.stencil?Sr:Di);const ge={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new br(h.textureWidth,h.textureHeight,{format:On,type:ji,depthTexture:new J0(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const fe=e.properties.get(x);fe.__ignoreDepthValues=h.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(z){for(let Q=0;Q<z.removed.length;Q++){const Z=z.removed[Q],me=E.indexOf(Z);me>=0&&(E[me]=null,v[me].disconnect(Z))}for(let Q=0;Q<z.added.length;Q++){const Z=z.added[Q];let me=E.indexOf(Z);if(me===-1){for(let fe=0;fe<v.length;fe++)if(fe>=E.length){E.push(Z),me=fe;break}else if(E[fe]===null){E[fe]=Z,me=fe;break}if(me===-1)break}const ge=v[me];ge&&ge.connect(Z)}}const j=new N,$=new N;function P(z,Q,Z){j.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(Z.matrixWorld);const me=j.distanceTo($),ge=Q.projectionMatrix.elements,fe=Z.projectionMatrix.elements,Xe=ge[14]/(ge[10]-1),Ae=ge[14]/(ge[10]+1),U=(ge[9]+1)/ge[5],Rt=(ge[9]-1)/ge[5],Me=(ge[8]-1)/ge[0],ze=(fe[8]+1)/fe[0],Te=Xe*Me,qe=Xe*ze,ke=me/(-Me+ze),Be=ke*-Me;Q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Be),z.translateZ(ke),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const mt=Xe+ke,C=Ae+ke,M=Te-Be,W=qe+(me-Be),q=U*Ae/C*mt,ie=Rt*Ae/C*mt;z.projectionMatrix.makePerspective(M,W,q,ie,mt,C),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function k(z,Q){Q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;y.texture!==null&&(z.near=y.depthNear,z.far=y.depthFar),S.near=D.near=T.near=z.near,S.far=D.far=T.far=z.far,(b!==S.near||ne!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,ne=S.far,T.near=b,T.far=ne,D.near=b,D.far=ne,T.updateProjectionMatrix(),D.updateProjectionMatrix(),z.updateProjectionMatrix());const Q=z.parent,Z=S.cameras;k(S,Q);for(let me=0;me<Z.length;me++)k(Z[me],Q);Z.length===2?P(S,T,D):S.projectionMatrix.copy(T.projectionMatrix),G(z,S,Q)};function G(z,Q,Z){Z===null?z.matrix.copy(Q.matrixWorld):(z.matrix.copy(Z.matrixWorld),z.matrix.invert(),z.matrix.multiply(Q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Q.projectionMatrix),z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=sd*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=z)},this.hasDepthSensing=function(){return y.texture!==null};let K=null;function re(z,Q){if(d=Q.getViewerPose(c||o),_=Q,d!==null){const Z=d.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let me=!1;Z.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let fe=0;fe<Z.length;fe++){const Xe=Z[fe];let Ae=null;if(g!==null)Ae=g.getViewport(Xe);else{const Rt=f.getViewSubImage(h,Xe);Ae=Rt.viewport,fe===0&&(e.setRenderTargetTextures(x,Rt.colorTexture,h.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(x))}let U=Y[fe];U===void 0&&(U=new fn,U.layers.enable(fe),U.viewport=new lt,Y[fe]=U),U.matrix.fromArray(Xe.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Xe.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),fe===0&&(S.matrix.copy(U.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(U)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const fe=f.getDepthInformation(Z[0]);fe&&fe.isValid&&fe.texture&&y.init(e,fe,r.renderState)}}for(let Z=0;Z<v.length;Z++){const me=E[Z],ge=v[Z];me!==null&&ge!==void 0&&ge.update(me,Q,c||o)}y.render(e,S),K&&K(z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Ee=new Q0;Ee.setAnimationLoop(re),this.setAnimationLoop=function(z){K=z},this.dispose=function(){}}}const lr=new Qn,ew=new ft;function tw(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,$0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,x,v,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&g(m,u,E)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,x,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===an&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===an&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const x=e.get(u),v=x.envMap,E=x.envMapRotation;if(v&&(m.envMap.value=v,lr.copy(E),lr.x*=-1,lr.y*=-1,lr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(ew.makeRotationFromEuler(lr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const R=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*R,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const x=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const E=v.program;i.uniformBlockBinding(x,E)}function c(x,v){let E=r[x.id];E===void 0&&(_(x),E=d(x),r[x.id]=E,x.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(x,R);const A=e.render.frame;s[x.id]!==A&&(h(x),s[x.id]=A)}function d(x){const v=f();x.__bindingPointIndex=v;const E=t.createBuffer(),R=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],E=x.uniforms,R=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=E.length;A<T;A++){const D=Array.isArray(E[A])?E[A]:[E[A]];for(let Y=0,S=D.length;Y<S;Y++){const b=D[Y];if(g(b,A,Y,R)===!0){const ne=b.__offset,J=Array.isArray(b.value)?b.value:[b.value];let L=0;for(let X=0;X<J.length;X++){const j=J[X],$=y(j);typeof j=="number"||typeof j=="boolean"?(b.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,ne+L,b.__data)):j.isMatrix3?(b.__data[0]=j.elements[0],b.__data[1]=j.elements[1],b.__data[2]=j.elements[2],b.__data[3]=0,b.__data[4]=j.elements[3],b.__data[5]=j.elements[4],b.__data[6]=j.elements[5],b.__data[7]=0,b.__data[8]=j.elements[6],b.__data[9]=j.elements[7],b.__data[10]=j.elements[8],b.__data[11]=0):(j.toArray(b.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ne,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,E,R){const A=x.value,T=v+"_"+E;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const D=R[T];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[T]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function _(x){const v=x.uniforms;let E=0;const R=16;for(let T=0,D=v.length;T<D;T++){const Y=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,b=Y.length;S<b;S++){const ne=Y[S],J=Array.isArray(ne.value)?ne.value:[ne.value];for(let L=0,X=J.length;L<X;L++){const j=J[L],$=y(j),P=E%R;P!==0&&R-P<$.boundary&&(E+=R-P),ne.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=E,E+=$.storage}}}const A=E%R;return A>0&&(E+=R-A),x.__size=E,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class sv{constructor(e={}){const{canvas:n=Wy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const u=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;const v=this;let E=!1,R=0,A=0,T=null,D=-1,Y=null;const S=new lt,b=new lt;let ne=null;const J=new We(0);let L=0,X=n.width,j=n.height,$=1,P=null,k=null;const G=new lt(0,0,X,j),K=new lt(0,0,X,j);let re=!1;const Ee=new cf;let z=!1,Q=!1,Z=null;const me=new ft,ge=new je,fe=new N,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return T===null?$:1}let U=i;function Rt(w,I){for(let H=0;H<w.length;H++){const V=w[H],O=n.getContext(V,I);if(O!==null)return O}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sf}`),n.addEventListener("webglcontextlost",st,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",ce,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),U=Rt(I,w),U===null)throw Rt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,ze,Te,qe,ke,Be,mt,C,M,W,q,ie,ee,Fe,Ce,le,ue,De,se,xt,He,Se,ve,xe;function Ye(){Me=new lE(U),ze=new tE(U,Me,e),Me.init(ze),Se=new q2(U,Me,ze),Te=new j2(U,Me,ze),qe=new dE(U),ke=new L2,Be=new X2(U,Me,Te,ke,ze,Se,qe),mt=new iE(v),C=new aE(v),M=new g1(U,ze),ve=new JM(U,Me,M,ze),W=new cE(U,M,qe,ve),q=new mE(U,W,M,qe),se=new pE(U,ze,Be),le=new nE(ke),ie=new P2(v,mt,C,Me,ze,ve,le),ee=new tw(v,ke),Fe=new D2,Ce=new z2(Me,ze),De=new QM(v,mt,C,Te,q,h,l),ue=new W2(v,q,ze),xe=new nw(U,qe,ze,Te),xt=new eE(U,Me,qe,ze),He=new uE(U,Me,qe,ze),qe.programs=ie.programs,v.capabilities=ze,v.extensions=Me,v.properties=ke,v.renderLists=Fe,v.shadowMap=ue,v.state=Te,v.info=qe}Ye();const Pe=new J2(v,U);this.xr=Pe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(X,j,!1))},this.getSize=function(w){return w.set(X,j)},this.setSize=function(w,I,H=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,j=I,n.width=Math.floor(w*$),n.height=Math.floor(I*$),H===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(X*$,j*$).floor()},this.setDrawingBufferSize=function(w,I,H){X=w,j=I,$=H,n.width=Math.floor(w*H),n.height=Math.floor(I*H),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(G)},this.setViewport=function(w,I,H,V){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,I,H,V),Te.viewport(S.copy(G).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,I,H,V){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,I,H,V),Te.scissor(b.copy(K).multiplyScalar($).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){Te.setScissorTest(re=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){k=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(w=!0,I=!0,H=!0){let V=0;if(w){let O=!1;if(T!==null){const he=T.texture.format;O=he===U0||he===N0||he===I0}if(O){const he=T.texture.type,_e=he===ji||he===Di||he===af||he===Sr||he===F0||he===D0,we=De.getClearColor(),be=De.getClearAlpha(),Oe=we.r,Re=we.g,Le=we.b;_e?(g[0]=Oe,g[1]=Re,g[2]=Le,g[3]=be,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Oe,_[1]=Re,_[2]=Le,_[3]=be,U.clearBufferiv(U.COLOR,0,_))}else V|=U.COLOR_BUFFER_BIT}I&&(V|=U.DEPTH_BUFFER_BIT),H&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",st,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),Fe.dispose(),Ce.dispose(),ke.dispose(),mt.dispose(),C.dispose(),q.dispose(),ve.dispose(),xe.dispose(),ie.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",xn),Pe.removeEventListener("sessionend",et),Z&&(Z.dispose(),Z=null),Gt.stop()};function st(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=qe.autoReset,I=ue.enabled,H=ue.autoUpdate,V=ue.needsUpdate,O=ue.type;Ye(),qe.autoReset=w,ue.enabled=I,ue.autoUpdate=H,ue.needsUpdate=V,ue.type=O}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function B(w){const I=w.target;I.removeEventListener("dispose",B),oe(I)}function oe(w){de(w),ke.remove(w)}function de(w){const I=ke.get(w).programs;I!==void 0&&(I.forEach(function(H){ie.releaseProgram(H)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,H,V,O,he){I===null&&(I=Xe);const _e=O.isMesh&&O.matrixWorld.determinant()<0,we=fv(w,I,H,V,O);Te.setMaterial(V,_e);let be=H.index,Oe=1;if(V.wireframe===!0){if(be=W.getWireframeAttribute(H),be===void 0)return;Oe=2}const Re=H.drawRange,Le=H.attributes.position;let gt=Re.start*Oe,ln=(Re.start+Re.count)*Oe;he!==null&&(gt=Math.max(gt,he.start*Oe),ln=Math.min(ln,(he.start+he.count)*Oe)),be!==null?(gt=Math.max(gt,0),ln=Math.min(ln,be.count)):Le!=null&&(gt=Math.max(gt,0),ln=Math.min(ln,Le.count));const Tt=ln-gt;if(Tt<0||Tt===1/0)return;ve.setup(O,V,we,H,be);let Jn,ct=xt;if(be!==null&&(Jn=M.get(be),ct=He,ct.setIndex(Jn)),O.isMesh)V.wireframe===!0?(Te.setLineWidth(V.wireframeLinewidth*Ae()),ct.setMode(U.LINES)):ct.setMode(U.TRIANGLES);else if(O.isLine){let Ie=V.linewidth;Ie===void 0&&(Ie=1),Te.setLineWidth(Ie*Ae()),O.isLineSegments?ct.setMode(U.LINES):O.isLineLoop?ct.setMode(U.LINE_LOOP):ct.setMode(U.LINE_STRIP)}else O.isPoints?ct.setMode(U.POINTS):O.isSprite&&ct.setMode(U.TRIANGLES);if(O.isBatchedMesh)ct.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)ct.renderInstances(gt,Tt,O.count);else if(H.isInstancedBufferGeometry){const Ie=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Xl=Math.min(H.instanceCount,Ie);ct.renderInstances(gt,Tt,Xl)}else ct.render(gt,Tt)};function Ve(w,I,H){w.transparent===!0&&w.side===Un&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,Yo(w,I,H),w.side=Yi,w.needsUpdate=!0,Yo(w,I,H),w.side=Un):Yo(w,I,H)}this.compile=function(w,I,H=null){H===null&&(H=w),m=Ce.get(H),m.init(),x.push(m),H.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(v._useLegacyLights);const V=new Set;return w.traverse(function(O){const he=O.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const we=he[_e];Ve(we,H,O),V.add(we)}else Ve(he,H,O),V.add(he)}),x.pop(),m=null,V},this.compileAsync=function(w,I,H=null){const V=this.compile(w,I,H);return new Promise(O=>{function he(){if(V.forEach(function(_e){ke.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){O(w);return}setTimeout(he,10)}Me.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Je=null;function Pt(w){Je&&Je(w)}function xn(){Gt.stop()}function et(){Gt.start()}const Gt=new Q0;Gt.setAnimationLoop(Pt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(w){Je=w,Pe.setAnimationLoop(w),w===null?Gt.stop():Gt.start()},Pe.addEventListener("sessionstart",xn),Pe.addEventListener("sessionend",et),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(I),I=Pe.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,I,T),m=Ce.get(w,x.length),m.init(),x.push(m),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ee.setFromProjectionMatrix(me),Q=this.localClippingEnabled,z=le.init(this.clippingPlanes,Q),y=Fe.get(w,u.length),y.init(),u.push(y),Gn(w,I,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(P,k),this.info.render.frame++,z===!0&&le.beginShadows();const H=m.state.shadowsArray;if(ue.render(H,w,I),z===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&De.render(y,w),m.setupLights(v._useLegacyLights),I.isArrayCamera){const V=I.cameras;for(let O=0,he=V.length;O<he;O++){const _e=V[O];_f(y,w,_e,_e.viewport)}}else _f(y,w,I);T!==null&&(Be.updateMultisampleRenderTarget(T),Be.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,I),ve.resetDefaultState(),D=-1,Y=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Gn(w,I,H,V){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ee.intersectsSprite(w)){V&&fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const _e=q.update(w),we=w.material;we.visible&&y.push(w,_e,we,H,fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ee.intersectsObject(w))){const _e=q.update(w),we=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),fe.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),fe.copy(_e.boundingSphere.center)),fe.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(we)){const be=_e.groups;for(let Oe=0,Re=be.length;Oe<Re;Oe++){const Le=be[Oe],gt=we[Le.materialIndex];gt&&gt.visible&&y.push(w,_e,gt,H,fe.z,Le)}}else we.visible&&y.push(w,_e,we,H,fe.z,null)}}const he=w.children;for(let _e=0,we=he.length;_e<we;_e++)Gn(he[_e],I,H,V)}function _f(w,I,H,V){const O=w.opaque,he=w.transmissive,_e=w.transparent;m.setupLightsView(H),z===!0&&le.setGlobalState(v.clippingPlanes,H),he.length>0&&dv(O,he,I,H),V&&Te.viewport(S.copy(V)),O.length>0&&qo(O,I,H),he.length>0&&qo(he,I,H),_e.length>0&&qo(_e,I,H),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function dv(w,I,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const he=ze.isWebGL2;Z===null&&(Z=new br(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Io:ji,minFilter:Fi,samples:he?4:0})),v.getDrawingBufferSize(ge),he?Z.setSize(ge.x,ge.y):Z.setSize(od(ge.x),od(ge.y));const _e=v.getRenderTarget();v.setRenderTarget(Z),v.getClearColor(J),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const we=v.toneMapping;v.toneMapping=Wi,qo(w,H,V),Be.updateMultisampleRenderTarget(Z),Be.updateRenderTargetMipmap(Z);let be=!1;for(let Oe=0,Re=I.length;Oe<Re;Oe++){const Le=I[Oe],gt=Le.object,ln=Le.geometry,Tt=Le.material,Jn=Le.group;if(Tt.side===Un&&gt.layers.test(V.layers)){const ct=Tt.side;Tt.side=an,Tt.needsUpdate=!0,yf(gt,H,V,ln,Tt,Jn),Tt.side=ct,Tt.needsUpdate=!0,be=!0}}be===!0&&(Be.updateMultisampleRenderTarget(Z),Be.updateRenderTargetMipmap(Z)),v.setRenderTarget(_e),v.setClearColor(J,L),v.toneMapping=we}function qo(w,I,H){const V=I.isScene===!0?I.overrideMaterial:null;for(let O=0,he=w.length;O<he;O++){const _e=w[O],we=_e.object,be=_e.geometry,Oe=V===null?_e.material:V,Re=_e.group;we.layers.test(H.layers)&&yf(we,I,H,be,Oe,Re)}}function yf(w,I,H,V,O,he){w.onBeforeRender(v,I,H,V,O,he),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(v,I,H,V,w,he),O.transparent===!0&&O.side===Un&&O.forceSinglePass===!1?(O.side=an,O.needsUpdate=!0,v.renderBufferDirect(H,I,V,O,w,he),O.side=Yi,O.needsUpdate=!0,v.renderBufferDirect(H,I,V,O,w,he),O.side=Un):v.renderBufferDirect(H,I,V,O,w,he),w.onAfterRender(v,I,H,V,O,he)}function Yo(w,I,H){I.isScene!==!0&&(I=Xe);const V=ke.get(w),O=m.state.lights,he=m.state.shadowsArray,_e=O.state.version,we=ie.getParameters(w,O.state,he,I,H),be=ie.getProgramCacheKey(we);let Oe=V.programs;V.environment=w.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(w.isMeshStandardMaterial?C:mt).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",B),Oe=new Map,V.programs=Oe);let Re=Oe.get(be);if(Re!==void 0){if(V.currentProgram===Re&&V.lightsStateVersion===_e)return Mf(w,we),Re}else we.uniforms=ie.getUniforms(w),w.onBuild(H,we,v),w.onBeforeCompile(we,v),Re=ie.acquireProgram(we,be),Oe.set(be,Re),V.uniforms=we.uniforms;const Le=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=le.uniform),Mf(w,we),V.needsLights=pv(w),V.lightsStateVersion=_e,V.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Re,V.uniformsList=null,Re}function Sf(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Ya.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Mf(w,I){const H=ke.get(w);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function fv(w,I,H,V,O){I.isScene!==!0&&(I=Xe),Be.resetTextureUnits();const he=I.fog,_e=V.isMeshStandardMaterial?I.environment:null,we=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ji,be=(V.isMeshStandardMaterial?C:mt).get(V.envMap||_e),Oe=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Re=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Le=!!H.morphAttributes.position,gt=!!H.morphAttributes.normal,ln=!!H.morphAttributes.color;let Tt=Wi;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Tt=v.toneMapping);const Jn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ct=Jn!==void 0?Jn.length:0,Ie=ke.get(V),Xl=m.state.lights;if(z===!0&&(Q===!0||w!==Y)){const _n=w===Y&&V.id===D;le.setState(V,w,_n)}let ot=!1;V.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Xl.state.version||Ie.outputColorSpace!==we||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==be||V.fog===!0&&Ie.fog!==he||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==le.numPlanes||Ie.numIntersection!==le.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==Re||Ie.morphTargets!==Le||Ie.morphNormals!==gt||Ie.morphColors!==ln||Ie.toneMapping!==Tt||ze.isWebGL2===!0&&Ie.morphTargetsCount!==ct)&&(ot=!0):(ot=!0,Ie.__version=V.version);let tr=Ie.currentProgram;ot===!0&&(tr=Yo(V,I,O));let Ef=!1,Ns=!1,ql=!1;const It=tr.getUniforms(),nr=Ie.uniforms;if(Te.useProgram(tr.program)&&(Ef=!0,Ns=!0,ql=!0),V.id!==D&&(D=V.id,Ns=!0),Ef||Y!==w){It.setValue(U,"projectionMatrix",w.projectionMatrix),It.setValue(U,"viewMatrix",w.matrixWorldInverse);const _n=It.map.cameraPosition;_n!==void 0&&_n.setValue(U,fe.setFromMatrixPosition(w.matrixWorld)),ze.logarithmicDepthBuffer&&It.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&It.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,Ns=!0,ql=!0)}if(O.isSkinnedMesh){It.setOptional(U,O,"bindMatrix"),It.setOptional(U,O,"bindMatrixInverse");const _n=O.skeleton;_n&&(ze.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),It.setValue(U,"boneTexture",_n.boneTexture,Be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(It.setOptional(U,O,"batchingTexture"),It.setValue(U,"batchingTexture",O._matricesTexture,Be));const Yl=H.morphAttributes;if((Yl.position!==void 0||Yl.normal!==void 0||Yl.color!==void 0&&ze.isWebGL2===!0)&&se.update(O,H,tr),(Ns||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,It.setValue(U,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(nr.envMap.value=be,nr.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Ns&&(It.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&hv(nr,ql),he&&V.fog===!0&&ee.refreshFogUniforms(nr,he),ee.refreshMaterialUniforms(nr,V,$,j,Z),Ya.upload(U,Sf(Ie),nr,Be)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ya.upload(U,Sf(Ie),nr,Be),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&It.setValue(U,"center",O.center),It.setValue(U,"modelViewMatrix",O.modelViewMatrix),It.setValue(U,"normalMatrix",O.normalMatrix),It.setValue(U,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const _n=V.uniformsGroups;for(let $l=0,mv=_n.length;$l<mv;$l++)if(ze.isWebGL2){const wf=_n[$l];xe.update(wf,tr),xe.bind(wf,tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tr}function hv(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function pv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,I,H){ke.get(w.texture).__webglTexture=I,ke.get(w.depthTexture).__webglTexture=H;const V=ke.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const H=ke.get(w);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,H=0){T=w,R=I,A=H;let V=!0,O=null,he=!1,_e=!1;if(w){const be=ke.get(w);be.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(U.FRAMEBUFFER,null),V=!1):be.__webglFramebuffer===void 0?Be.setupRenderTarget(w):be.__hasExternalTextures&&Be.rebindTextures(w,ke.get(w.texture).__webglTexture,ke.get(w.depthTexture).__webglTexture);const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Re=ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?O=Re[I][H]:O=Re[I],he=!0):ze.isWebGL2&&w.samples>0&&Be.useMultisampledRTT(w)===!1?O=ke.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?O=Re[H]:O=Re,S.copy(w.viewport),b.copy(w.scissor),ne=w.scissorTest}else S.copy(G).multiplyScalar($).floor(),b.copy(K).multiplyScalar($).floor(),ne=re;if(Te.bindFramebuffer(U.FRAMEBUFFER,O)&&ze.drawBuffers&&V&&Te.drawBuffers(w,O),Te.viewport(S),Te.scissor(b),Te.setScissorTest(ne),he){const be=ke.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,be.__webglTexture,H)}else if(_e){const be=ke.get(w.texture),Oe=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,H||0,Oe)}D=-1},this.readRenderTargetPixels=function(w,I,H,V,O,he,_e){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){Te.bindFramebuffer(U.FRAMEBUFFER,we);try{const be=w.texture,Oe=be.format,Re=be.type;if(Oe!==On&&Se.convert(Oe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===Io&&(Me.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Re!==ji&&Se.convert(Re)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===li&&(ze.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-V&&H>=0&&H<=w.height-O&&U.readPixels(I,H,V,O,Se.convert(Oe),Se.convert(Re),he)}finally{const be=T!==null?ke.get(T).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(w,I,H=0){const V=Math.pow(2,-H),O=Math.floor(I.image.width*V),he=Math.floor(I.image.height*V);Be.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,w.x,w.y,O,he),Te.unbindTexture()},this.copyTextureToTexture=function(w,I,H,V=0){const O=I.image.width,he=I.image.height,_e=Se.convert(H.format),we=Se.convert(H.type);Be.setTexture2D(H,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,w.x,w.y,O,he,_e,we,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,_e,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,V,w.x,w.y,_e,we,I.image),V===0&&H.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(w,I,H,V,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=Math.round(w.max.x-w.min.x),_e=Math.round(w.max.y-w.min.y),we=w.max.z-w.min.z+1,be=Se.convert(V.format),Oe=Se.convert(V.type);let Re;if(V.isData3DTexture)Be.setTexture3D(V,0),Re=U.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)Be.setTexture2DArray(V,0),Re=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Le=U.getParameter(U.UNPACK_ROW_LENGTH),gt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=U.getParameter(U.UNPACK_SKIP_PIXELS),Tt=U.getParameter(U.UNPACK_SKIP_ROWS),Jn=U.getParameter(U.UNPACK_SKIP_IMAGES),ct=H.isCompressedTexture?H.mipmaps[O]:H.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ct.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,w.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,w.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,w.min.z),H.isDataTexture||H.isData3DTexture?U.texSubImage3D(Re,O,I.x,I.y,I.z,he,_e,we,be,Oe,ct.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,O,I.x,I.y,I.z,he,_e,we,be,ct.data):U.texSubImage3D(Re,O,I.x,I.y,I.z,he,_e,we,be,Oe,ct),U.pixelStorei(U.UNPACK_ROW_LENGTH,Le),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),U.pixelStorei(U.UNPACK_SKIP_ROWS,Tt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Jn),O===0&&V.generateMipmaps&&U.generateMipmap(Re),Te.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Be.setTextureCube(w,0):w.isData3DTexture?Be.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Be.setTexture2DArray(w,0):Be.setTexture2D(w,0),Te.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,Te.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===lf?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Vl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class iw extends sv{}iw.prototype.isWebGL1Renderer=!0;class rw extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ov extends Ds{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nm=new ft,ld=new W0,Da=new Wl,Ia=new N;class sw extends Yt{constructor(e=new bn,n=new ov){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(r),Da.radius+=s,e.ray.intersectsSphere(Da)===!1)return;nm.copy(r).invert(),ld.copy(e.ray).applyMatrix4(nm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=h,y=g;_<y;_++){const m=c.getX(_);Ia.fromBufferAttribute(f,m),im(Ia,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=h,y=g;_<y;_++)Ia.fromBufferAttribute(f,_),im(Ia,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function im(t,e,n,i,r,s,o){const a=ld.distanceSqToPoint(t);if(a<n){const l=new N;ld.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class df extends bn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new N,d=new je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const g=i+f/n*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ff extends bn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new N,h=new N,g=[],_=[],y=[],m=[];for(let u=0;u<=i;u++){const x=[],v=u/i;let E=0;u===0&&o===0?E=.5/n:u===i&&l===Math.PI&&(E=-.5/n);for(let R=0;R<=n;R++){const A=R/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(A+E,1-v),x.push(c++)}d.push(x)}for(let u=0;u<i;u++)for(let x=0;x<n;x++){const v=d[u][x+1],E=d[u][x],R=d[u+1][x],A=d[u+1][x+1];(u!==0||o>0)&&g.push(v,E,A),(u!==i-1||l<Math.PI)&&g.push(E,R,A)}this.setIndex(g),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wl extends bn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new N,f=new N,h=new N;for(let g=0;g<=i;g++)for(let _=0;_<=r;_++){const y=_/r*s,m=g/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(y),f.y=(e+n*Math.cos(m))*Math.sin(y),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let _=1;_<=r;_++){const y=(r+1)*g+_-1,m=(r+1)*(g-1)+_-1,u=(r+1)*(g-1)+_,x=(r+1)*g+_;o.push(y,m,x),o.push(m,u,x)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ow extends Ds{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=O0,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const rm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class aw{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){const g=c[f],_=c[f+1];if(g.global&&(g.lastIndex=0),g.test(d))return _}return null}}}const lw=new aw;class hf{constructor(e){this.manager=e!==void 0?e:lw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hf.DEFAULT_MATERIAL_NAME="__DEFAULT";class cw extends hf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=rm.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=No("img");function l(){d(),rm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class uw extends hf{constructor(e){super(e)}load(e,n,i,r){const s=new qt,o=new cw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class av extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const tu=new ft,sm=new N,om=new N;class dw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cf,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;sm.setFromMatrixPosition(e.matrixWorld),n.position.copy(sm),om.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(om),n.updateMatrixWorld(),tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const am=new ft,Ks=new N,nu=new N;class fw extends dw{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ks),nu.copy(i.position),nu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(nu),i.updateMatrixWorld(),r.makeTranslation(-Ks.x,-Ks.y,-Ks.z),am.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(am)}}class lm extends av{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new fw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hw extends av{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}let pw=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=cm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};function cm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sf);function mw({page:t="home"}){const e=$e.useRef(null);return $e.useEffect(()=>{const n=e.current;if(!n)return;const i=n.clientWidth||window.innerWidth,r=n.clientHeight||window.innerHeight,s=new rw,o=new fn(60,i/r,.1,1e3);o.position.z=15;const a=new sv({antialias:!0,alpha:!0,powerPreference:"high-performance",precision:"highp",stencil:!1,depth:!0});a.setSize(i,r),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(a.domElement);const l=new us;s.add(l);const c=new uw;let d,f,h;c.load("./logo.png",Z=>{Z.generateMipmaps=!0,Z.minFilter=Fi;const me=new jo(6.5,6.5),ge=new ow({map:Z,transparent:!0,opacity:.92,side:Un,emissive:165063,emissiveIntensity:.25,shininess:90});d=new tn(me,ge),d.position.z=.5,l.add(d);const fe=new df(3.6,32),Xe=new as({color:41983,transparent:!0,opacity:.2,side:Un}),Ae=new tn(fe,Xe);Ae.position.z=-.1,l.add(Ae)}),h=new us;const g=new wl(6.2,.05,16,120),_=new as({color:41983,transparent:!0,opacity:.6});f=new tn(g,_),f.rotation.x=Math.PI/3,h.add(f);const y=new wl(7.5,.03,16,100),m=new as({color:165063,transparent:!0,opacity:.45}),u=new tn(y,m);u.rotation.y=Math.PI/4,h.add(u);const x=new ff(.18,16,16),v=new as({color:41983});for(let Z=0;Z<8;Z++){const me=Z/8*Math.PI*2,ge=new tn(x,v);ge.position.set(Math.cos(me)*6.2,Math.sin(me)*6.2,Z%2===0?.8:-.8),h.add(ge)}l.add(h);const E=t==="techstack"?1200:t==="blog"?1e3:900,R=new bn,A=new Float32Array(E*3),T=new Float32Array(E*3),D=new We(41983),Y=new We(165063),S=new We(16777215);for(let Z=0;Z<E*3;Z+=3){const me=8+Math.random()*18,ge=Math.random()*Math.PI*2,fe=Math.acos(Math.random()*2-1);A[Z]=me*Math.sin(fe)*Math.cos(ge),A[Z+1]=me*Math.sin(fe)*Math.sin(ge),A[Z+2]=me*Math.cos(fe);const Xe=Math.random()>.6?S:Math.random()>.5?D:Y;T[Z]=Xe.r,T[Z+1]=Xe.g,T[Z+2]=Xe.b}R.setAttribute("position",new Tn(A,3)),R.setAttribute("color",new Tn(T,3));const b=new ov({size:.16,vertexColors:!0,transparent:!0,opacity:.75,blending:yr}),ne=new sw(R,b);l.add(ne);const J=new hw(16777215,.95);s.add(J);const L=new lm(41983,2.5,60);L.position.set(12,12,12),s.add(L);const X=new lm(3718648,2,60);X.position.set(-12,-12,-12),s.add(X);let j=0,$=0,P=0,k=0;const G=Z=>{j=Z.clientX/window.innerWidth*2-1,$=-(Z.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",G,{passive:!0});const K=()=>{l&&(l.scale.set(1.15,1.15,1.15),setTimeout(()=>{l.scale.set(1,1,1)},250))};window.addEventListener("click",K,{passive:!0});const re=()=>{if(!n)return;const Z=n.clientWidth||window.innerWidth,me=n.clientHeight||window.innerHeight;o.aspect=Z/me,o.updateProjectionMatrix(),a.setSize(Z,me)};window.addEventListener("resize",re,{passive:!0});let Ee;const z=new pw,Q=()=>{Ee=requestAnimationFrame(Q);const Z=z.getDelta(),me=z.getElapsedTime(),ge=Math.min(Z*4,.1);if(P+=(j-P)*ge,k+=($-k)*ge,l.rotation.y=me*.1+P*.45,l.rotation.x=Math.sin(me*.1)*.12+k*.45,d){d.rotation.z=Math.sin(me*.5)*.05;const fe=1+Math.sin(me*2)*.03;d.scale.set(fe,fe,fe)}f&&(f.rotation.z+=Z*.25),u&&(u.rotation.z-=Z*.3),ne&&(ne.rotation.y-=Z*.08),a.render(s,o)};return Q(),()=>{window.removeEventListener("mousemove",G),window.removeEventListener("click",K),window.removeEventListener("resize",re),cancelAnimationFrame(Ee),n.contains(a.domElement)&&n.removeChild(a.domElement),a.dispose()}},[t]),p.jsx("div",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,willChange:"transform",transform:"translateZ(0)"}})}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ye=(t,e)=>{const n=$e.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},d)=>$e.createElement("svg",{ref:d,...gw,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${vw(t)}`,a].join(" "),...c},[...e.map(([f,h])=>$e.createElement(f,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=ye("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=ye("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=ye("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=ye("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=ye("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=ye("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=ye("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=ye("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=ye("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=ye("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=ye("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=ye("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=ye("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=ye("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=ye("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=ye("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=ye("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=ye("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=ye("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=ye("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=ye("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=ye("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=ye("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=ye("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=ye("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=ye("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=ye("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=ye("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=ye("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=ye("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=ye("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=ye("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=ye("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=ye("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=ye("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=ye("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=ye("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=ye("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=ye("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=ye("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=ye("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=ye("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=ye("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=ye("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=ye("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=ye("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=ye("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=ye("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=ye("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=ye("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=ye("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=ye("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Xw({currentPage:t,onNavigate:e}){const[n,i]=$e.useState(!1),[r,s]=$e.useState(!1);$e.useEffect(()=>{const a=()=>{i(window.scrollY>30)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const o=(a,l)=>{s(!1),e(a),a==="home"&&l?setTimeout(()=>{const c=document.getElementById(l);c&&c.scrollIntoView({behavior:"smooth"})},50):window.scrollTo({top:0,behavior:"smooth"})};return p.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:n?"10px 16px":"14px 16px",transition:"all 0.3s ease",background:n?"rgba(255, 255, 255, 0.96)":"rgba(255, 255, 255, 0.90)",backdropFilter:"blur(16px)",borderBottom:n?"1px solid rgba(56, 189, 248, 0.3)":"1px solid rgba(56, 189, 248, 0.15)",boxShadow:n?"0 8px 25px rgba(2, 132, 199, 0.08)":"none"},children:[p.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px"},children:[p.jsxs("div",{onClick:()=>o("home"),style:{cursor:"pointer",display:"flex",alignItems:"center",gap:"10px",minWidth:0},children:[p.jsx("div",{style:{padding:"3px",borderRadius:"10px",background:"#FFFFFF",border:"1px solid rgba(0, 163, 255, 0.3)",boxShadow:"0 4px 12px rgba(0, 163, 255, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",height:"38px",flexShrink:0},children:p.jsx("img",{src:"./logo.png",alt:"Blueidealteck Logo",style:{height:"30px",width:"auto",objectFit:"contain"}})}),p.jsxs("div",{style:{overflow:"hidden"},children:[p.jsxs("div",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"clamp(1.05rem, 3.8vw, 1.4rem)",letterSpacing:"-0.5px",color:"#0F172A",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["BLUEIDEAL",p.jsx("span",{style:{color:"#00A3FF"},children:"TECK"})]}),p.jsx("div",{style:{fontSize:"0.6rem",color:"#0284C7",letterSpacing:"1px",textTransform:"uppercase",fontWeight:700,display:"block"},className:"mobile-subtitle",children:"Software Solutions"})]})]}),p.jsxs("nav",{style:{display:"none",gap:"24px",alignItems:"center"},className:"desktop-nav",children:[p.jsx("button",{onClick:()=>o("home"),className:`nav-btn ${t==="home"?"active":""}`,children:"Home"}),p.jsx("button",{onClick:()=>o("home","about"),className:"nav-btn",children:"About"}),p.jsx("button",{onClick:()=>o("home","services"),className:"nav-btn",children:"Services"}),p.jsx("button",{onClick:()=>o("techstack"),className:`nav-btn ${t==="techstack"?"active":""}`,children:"Tech Stack"}),p.jsx("button",{onClick:()=>o("blog"),className:`nav-btn ${t==="blog"?"active":""}`,children:"Blog"}),p.jsx("button",{onClick:()=>o("home","contact"),className:"nav-btn",children:"Contact"})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexShrink:0},children:[p.jsxs("button",{onClick:()=>o("home","contact"),className:"glow-btn-primary header-cta-btn",style:{padding:"8px 14px",fontSize:"0.82rem",gap:"6px"},children:[p.jsx("span",{className:"cta-text",children:"Get Started"}),p.jsx(er,{size:14})]}),p.jsx("button",{onClick:()=>s(!r),style:{background:"#FFFFFF",border:"1px solid rgba(0, 163, 255, 0.3)",color:"#0284C7",borderRadius:"10px",padding:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0, 163, 255, 0.1)"},children:r?p.jsx(xf,{size:20}):p.jsx(Nw,{size:20})})]})]}),r&&p.jsxs("div",{className:"glass-panel",style:{marginTop:"12px",padding:"20px",display:"flex",flexDirection:"column",gap:"14px",background:"#FFFFFF"},children:[p.jsx("button",{onClick:()=>o("home"),className:"nav-btn-mobile",children:"Home"}),p.jsx("button",{onClick:()=>o("home","about"),className:"nav-btn-mobile",children:"About"}),p.jsx("button",{onClick:()=>o("home","services"),className:"nav-btn-mobile",children:"Services"}),p.jsx("button",{onClick:()=>o("techstack"),className:"nav-btn-mobile",children:"Tech Stack"}),p.jsx("button",{onClick:()=>o("blog"),className:"nav-btn-mobile",children:"Blog"}),p.jsx("button",{onClick:()=>o("home","contact"),className:"nav-btn-mobile",children:"Contact"})]}),p.jsx("style",{children:`
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
        @media (max-width: 480px) {
          .cta-text {
            display: none;
          }
          .mobile-subtitle {
            display: none !important;
          }
        }
      `})]})}function qw(){const[t,e]=$e.useState(""),n='blueidealteck.deploy({ solutions: "FullStack AI & Cloud", uptime: "99.9%" });';return $e.useEffect(()=>{let i=0;const r=setInterval(()=>{i<=n.length?(e(n.slice(0,i)),i++):clearInterval(r)},40);return()=>clearInterval(r)},[]),p.jsx("section",{style:{minHeight:"90vh",display:"flex",alignItems:"center",paddingTop:"120px",position:"relative",overflow:"hidden"},children:p.jsx("div",{className:"section-container",style:{width:"100%"},children:p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"60px",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsx("div",{className:"badge-glow",style:{marginBottom:"24px"},children:p.jsx("span",{children:"Full-Stack AI & Cloud Engineering"})}),p.jsxs("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2.4rem, 4.8vw, 4.1rem)",fontWeight:900,lineHeight:1.15,marginBottom:"24px",letterSpacing:"-1px",color:"#0F172A"},children:["Full-Stack AI & Cloud Solutions for ",p.jsx("span",{className:"gradient-text",children:"Scalable Businesses"})]}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.2rem",lineHeight:1.7,marginBottom:"40px",maxWidth:"580px"},children:"Empowering startups and enterprises with secure, high-performance software. We build digital success stories tailored to your needs."}),p.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",marginBottom:"50px"},children:[p.jsxs("a",{href:"#contact",className:"glow-btn-primary",children:[p.jsx("span",{children:"Get Started"}),p.jsx(er,{size:18})]}),p.jsx("a",{href:"#about",className:"glow-btn-secondary",children:p.jsx("span",{children:"Why Choose Us"})})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"20px",paddingTop:"24px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"1.8rem",fontWeight:800,color:"#0284C7"},children:"99.9%"}),p.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-dim)",marginTop:"4px",fontWeight:500},children:"Uptime Guaranteed"})]}),p.jsxs("div",{children:[p.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"1.8rem",fontWeight:800,color:"#00A3FF"},children:"100%"}),p.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-dim)",marginTop:"4px",fontWeight:500},children:"Tailored Strategies"})]}),p.jsxs("div",{children:[p.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"1.8rem",fontWeight:800,color:"#0369A1"},children:"24/7"}),p.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-dim)",marginTop:"4px",fontWeight:500},children:"Ongoing Support"})]})]})]}),p.jsx("div",{className:"floating-element",children:p.jsxs("div",{className:"glass-panel",style:{padding:"28px",background:"#FFFFFF",border:"1px solid rgba(0, 163, 255, 0.3)",boxShadow:"0 20px 50px rgba(2, 132, 199, 0.15)"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"16px",borderBottom:"1px solid rgba(56, 189, 248, 0.2)",marginBottom:"20px"},children:[p.jsxs("div",{style:{display:"flex",gap:"8px"},children:[p.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"#38BDF8"}}),p.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"#0284C7"}}),p.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"#0369A1"}})]}),p.jsx("div",{style:{fontSize:"0.8rem",color:"#0284C7",fontWeight:700},children:"Blueidealteck Architecture"})]}),p.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.88rem",color:"#334155",lineHeight:1.8},children:[p.jsx("p",{style:{color:"#0284C7",fontWeight:600},children:"➜ ~/blueidealteck-engine --status"}),p.jsx("p",{children:"✔ Node.js Event-Driven Microservices: Active"}),p.jsx("p",{children:"✔ React & Next.js Frontend Canvas: Mounted"}),p.jsx("p",{children:"✔ Python AI & Cloud Infrastructure: Connected"}),p.jsxs("div",{style:{background:"#F0F9FF",borderLeft:"4px solid #00A3FF",padding:"12px 16px",margin:"16px 0",borderRadius:"0 8px 8px 0",color:"#0F172A",fontWeight:600},children:[p.jsx("code",{children:t}),p.jsx("span",{style:{color:"#00A3FF",fontWeight:700},children:"|"})]}),p.jsx("p",{style:{color:"#00A3FF",fontSize:"0.85rem",fontWeight:600},children:"✓ Ready to turn your ideas into digital impact."})]}),p.jsxs("div",{style:{display:"flex",gap:"16px",marginTop:"24px",paddingTop:"16px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.8rem",color:"#0284C7",fontWeight:600},children:[p.jsx(vf,{size:16,color:"#00A3FF"}),p.jsx("span",{children:"Security-First"})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.8rem",color:"#0284C7",fontWeight:600},children:[p.jsx(Yr,{size:16,color:"#00A3FF"}),p.jsx("span",{children:"Scalable & Future-Ready"})]})]})]})})]})})})}const Yw=[{icon:ro,title:"Full-Service Expertise",desc:"From custom software and cloud infrastructure to mobile apps and AI pipelines, we cover your complete digital lifecycle."},{icon:Ii,title:"Scalable & Future-Ready Solutions",desc:"Engineered for extreme scalability and revenue growth, identifying tailored strategies that scale effortlessly."},{icon:vf,title:"Security-First Development",desc:"Military-grade security standards, DevSecOps compliance, and bank-grade data integrity built into every layer."},{icon:Ww,title:"Client-Centric Approach",desc:"We take the time to understand your goals, challenges, and vision — crafting solutions tailored specifically for you."}];function $w(){return p.jsx("section",{id:"about",style:{position:"relative"},children:p.jsxs("div",{className:"section-container",children:[p.jsxs("div",{className:"section-title-wrap",children:[p.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[p.jsx(_w,{size:14,color:"#00A3FF"}),p.jsx("span",{children:"Why World-Class Brands Choose Us"})]}),p.jsxs("h2",{className:"section-title",children:["Why Choose ",p.jsx("span",{className:"gradient-text",children:"Blueidealteck"})]}),p.jsx("p",{className:"section-subtitle",style:{fontSize:"1.2rem",color:"#0284C7",fontWeight:700},children:"Let Blueidealteck be your technology engine."})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"40px",alignItems:"center",marginBottom:"60px"},children:[p.jsxs("div",{className:"glass-panel",style:{padding:"36px",background:"#FFFFFF"},children:[p.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,marginBottom:"20px",color:"#0F172A"},children:"We Don't Just Write Code; We Architect Digital Dominance."}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1rem",lineHeight:1.8,marginBottom:"20px"},children:"Our solutions are engineered for extreme scalability, identifying tailored strategies that drive revenue and efficiency. With a deep understanding of technology and a passion for innovation, our team is dedicated to building scalable, secure, and high-performance software that helps businesses grow and succeed in the digital world."}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1rem",lineHeight:1.8,marginBottom:"20px"},children:"What sets us apart is our client-first mindset. We take the time to understand your goals, challenges, and vision — and then craft solutions tailored specifically for you. Whether it's a custom web application, a mobile app, or a cloud-native DevOps pipeline, our approach is always strategic, transparent, and results-driven."}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1rem",lineHeight:1.8},children:"We don’t believe in one-time transactions — we believe in long-term partnerships. From planning to development, and beyond deployment, we stay committed to your product's success. With on-time delivery, reliable support, and a collaborative working style, Blueidealteck becomes an extension of your team."}),p.jsx("div",{style:{marginTop:"28px",padding:"16px 20px",borderRadius:"12px",background:"#F0F9FF",borderLeft:"4px solid #00A3FF",fontWeight:600,color:"#0F172A"},children:"Our Mission: Empower businesses with technology that works — turning your ideas into digital impact."})]}),p.jsx("div",{className:"grid-responsive-2",style:{gap:"20px"},children:Yw.map((t,e)=>{const n=t.icon;return p.jsxs("div",{className:"glass-panel",style:{padding:"24px",background:"#FFFFFF"},children:[p.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"12px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:p.jsx(n,{size:24,color:"#0284C7"})}),p.jsx("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1.1rem",fontWeight:700,marginBottom:"8px",color:"#0F172A"},children:t.title}),p.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6},children:t.desc})]},e)})})]})]})})}function Xo({isOpen:t,onClose:e,article:n}){return!t||!n?null:p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1e3,background:"rgba(15, 23, 42, 0.75)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:p.jsxs("div",{className:"glass-panel",style:{background:"#FFFFFF",maxWidth:"780px",width:"100%",maxHeight:"90vh",overflowY:"auto",padding:"36px",borderRadius:"20px",position:"relative",boxShadow:"0 25px 60px rgba(2, 132, 199, 0.25)",border:"1px solid rgba(0, 163, 255, 0.4)"},children:[p.jsx("button",{onClick:e,style:{position:"absolute",top:"20px",right:"20px",background:"#F0F9FF",border:"1px solid rgba(0, 163, 255, 0.3)",borderRadius:"50%",width:"38px",height:"38px",display:"flex",alignItems:"center",justifyContent:"center",color:"#0284C7",cursor:"pointer",transition:"var(--transition-smooth)"},children:p.jsx(xf,{size:20})}),p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"6px 14px",borderRadius:"16px",background:"#E0F2FE",color:"#0284C7",fontSize:"0.8rem",fontWeight:700,marginBottom:"16px"},children:[p.jsx(Tl,{size:14,color:"#00A3FF"}),p.jsx("span",{children:n.category||"Technology & Innovation"})]}),p.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.9rem",fontWeight:900,lineHeight:1.3,color:"#0F172A",marginBottom:"16px"},children:n.title}),p.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",fontSize:"0.85rem",color:"var(--text-dim)",paddingBottom:"20px",borderBottom:"1px solid rgba(56, 189, 248, 0.2)",marginBottom:"24px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[p.jsx(lv,{size:15,color:"#0284C7"}),p.jsx("span",{children:n.date||"2026 Edition"})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[p.jsx(Vw,{size:15,color:"#0284C7"}),p.jsx("span",{children:n.author||"Blueidealteck Engineering Team"})]})]}),p.jsxs("div",{style:{color:"#334155",fontSize:"1.02rem",lineHeight:1.8,marginBottom:"32px"},children:[p.jsx("p",{style:{marginBottom:"18px",fontWeight:500},children:n.desc||n.description}),p.jsxs("div",{style:{background:"#F0F9FF",padding:"24px",borderRadius:"14px",borderLeft:"4px solid #00A3FF",margin:"24px 0"},children:[p.jsx("h4",{style:{fontFamily:"var(--font-heading)",color:"#0F172A",fontWeight:800,marginBottom:"10px"},children:"Strategic Engineering Takeaway"}),p.jsx("p",{style:{fontSize:"0.95rem",color:"#475569",margin:0},children:"At Blueidealteck, we integrate modern full-stack architectures, Node.js microservices, and AI-driven automation to ensure your enterprise stays years ahead of rigid market competitors."})]}),p.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.3rem",fontWeight:800,color:"#0F172A",marginTop:"24px",marginBottom:"12px"},children:"Key Implementation Benefits"}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[p.jsx(Zn,{size:18,color:"#00A3FF",style:{flexShrink:0,marginTop:"3px"}}),p.jsx("span",{children:"Enhanced system throughput and reduced infrastructure latency."})]}),p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[p.jsx(Zn,{size:18,color:"#00A3FF",style:{flexShrink:0,marginTop:"3px"}}),p.jsx("span",{children:"Automated CI/CD deployment pipelines with zero operational downtime."})]}),p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[p.jsx(Zn,{size:18,color:"#00A3FF",style:{flexShrink:0,marginTop:"3px"}}),p.jsx("span",{children:"Bank-grade encryption, DevSecOps compliance, and 99.9% uptime SLA."})]})]})]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"20px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:[p.jsx("button",{onClick:e,className:"glow-btn-secondary",style:{padding:"10px 20px",fontSize:"0.9rem"},children:"Close Article"}),p.jsxs("a",{href:"#contact",onClick:e,className:"glow-btn-primary",style:{padding:"10px 22px",fontSize:"0.9rem"},children:[p.jsx("span",{children:"Consult Our Engineers"}),p.jsx(er,{size:16})]})]})]})})}const gm=[{id:"custom-software",title:"Custom Software Development",category:"Bespoke Software",icon:io,desc:"Bespoke digital ecosystems designed to outperform off-the-shelf limitations. We build custom software that scales with your ambition as a leading bespoke software development company."},{id:"devops-cloud",title:"DevOps & Cloud Services",category:"Cloud Engineering",icon:no,desc:"Optimize your infrastructure with CI/CD pipelines, containerization (Docker and Kubernetes), cloud deployment (AWS, Azure, GCP), and real-time monitoring."},{id:"web-apps",title:"Web Application Development",category:"Full-Stack Web",icon:cd,desc:"We build secure, fast, and responsive web applications tailored to your specific business needs — from internal tools to customer-facing platforms."},{id:"ui-ux",title:"UI/UX Design",category:"Design & Experience",icon:kw,desc:"We design interfaces that are not only visually appealing but also intuitive and conversion-focused, providing users with a smooth and delightful user experience."},{id:"ai-ml",title:"AI & Machine Learning",category:"AI & Automation",icon:Ii,desc:"Predictive intelligence and automation that puts your business years ahead. Unlock insights and build smarter applications."},{id:"mobile-apps",title:"Mobile App Development",category:"Mobile Engineering",icon:oo,desc:"Native iOS, Android, and Cross-Platform (Flutter) apps designed for high performance and user retention."},{id:"ecommerce",title:"E-commerce Solutions",category:"E-Commerce",icon:Hw,desc:"Custom Shopify, WooCommerce, and Headless stores built to maximize conversions and sales."},{id:"cloud-migration",title:"Cloud Migration",category:"Cloud Strategy",icon:Ew,desc:"Zero-downtime migration to AWS, Azure, or GCP. Optimize costs and improve scalability."},{id:"api-integration",title:"API Integration",category:"System Integration",icon:Fw,desc:"Connect your disparate systems (CRM, ERP, Payment Gateways) with secure, custom API bridges."},{id:"data-bi",title:"Data Analytics & BI",category:"Business Intelligence",icon:yw,desc:"Turn raw data into actionable insights with Power BI, Tableau, and custom predictive models."}];function Kw(){const[t,e]=$e.useState(gm[0].id),[n,i]=$e.useState(null);return p.jsxs("section",{id:"services",style:{position:"relative"},children:[p.jsxs("div",{className:"section-container",children:[p.jsxs("div",{className:"section-title-wrap",children:[p.jsx("div",{className:"badge-glow",style:{marginBottom:"16px"},children:p.jsx("span",{children:"Full-Service Expertise"})}),p.jsxs("h2",{className:"section-title",children:["Our ",p.jsx("span",{className:"gradient-text",children:"Services"})]}),p.jsx("p",{className:"section-subtitle",children:"At Blueidealteck, we offer a complete suite of technology services to help your business thrive in the digital era. Whether you're launching a new product, scaling operations, or modernizing legacy systems — we have the expertise to make it happen."})]}),p.jsx("div",{className:"grid-responsive-3",style:{marginBottom:"40px"},children:gm.map(r=>{const s=r.icon,o=r.id===t;return p.jsxs("div",{onClick:()=>e(r.id),className:"glass-panel",style:{padding:"24px",cursor:"pointer",borderColor:o?"#00A3FF":"rgba(56, 189, 248, 0.25)",boxShadow:o?"0 10px 30px rgba(0, 163, 255, 0.2)":"none",background:o?"#FFFFFF":"rgba(255, 255, 255, 0.85)",transform:o?"translateY(-4px)":"none",transition:"var(--transition-smooth)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"12px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:p.jsx(s,{size:24,color:"#0284C7"})}),p.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.15rem",fontWeight:700,marginBottom:"10px",color:o?"#0F172A":"#334155"},children:r.title}),p.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"20px"},children:r.desc})]}),p.jsx("div",{style:{paddingTop:"12px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:p.jsxs("button",{onClick:a=>{a.stopPropagation(),i(r)},style:{background:"none",border:"none",color:"#00A3FF",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontFamily:"var(--font-heading)"},children:[p.jsx("span",{children:"Read More"}),p.jsx(er,{size:14})]})})]},r.id)})})]}),p.jsx(Xo,{isOpen:!!n,onClose:()=>i(null),article:n})]})}const Zw=[{title:"Next-Gen Game Design",category:"Gaming & Metaverse",badge:"Coming Soon",icon:Cw,desc:"Immersive, hyper-realistic gaming experiences powered by Unreal Engine 5 & Unity. We are crafting worlds that blur the line between reality and digital."},{title:"Elite Cyber Security",category:"Zero Trust Security",badge:"Coming Soon",icon:zw,desc:"Military-grade penetration testing and Zero Trust architecture to bulletproof your infrastructure against evolving threats."},{title:"Blockchain Revolution",category:"Web3 & Smart Contracts",badge:"Coming Soon",icon:Sw,desc:"Decentralized innovation with Smart Contracts and Web3 Integration. Building transparent, immutable systems for the next era of the internet."}];function Qw(){const[t,e]=$e.useState(null);return p.jsxs("section",{id:"future",style:{position:"relative"},children:[p.jsxs("div",{className:"section-container",children:[p.jsxs("div",{className:"section-title-wrap",children:[p.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[p.jsx(mf,{size:14,color:"#00A3FF"}),p.jsx("span",{children:"Innovation Horizon"})]}),p.jsxs("h2",{className:"section-title",children:["Future Horizons: ",p.jsx("span",{className:"gradient-text",children:"The Next Frontier"})]}),p.jsx("p",{className:"section-subtitle",children:"Innovation never stops. We are building the capabilities of tomorrow, today."})]}),p.jsx("div",{className:"grid-responsive-3",children:Zw.map((n,i)=>{const r=n.icon;return p.jsxs("div",{className:"glass-panel",style:{padding:"28px",background:"#FFFFFF",border:"1px solid rgba(0, 163, 255, 0.3)",position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{position:"absolute",top:"16px",right:"16px",padding:"4px 12px",borderRadius:"20px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",color:"#0284C7",fontSize:"0.75rem",fontWeight:700,textTransform:"uppercase"},children:n.badge}),p.jsx("div",{style:{width:"50px",height:"50px",borderRadius:"12px",background:"#F0F9FF",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:p.jsx(r,{size:26,color:"#00A3FF"})}),p.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.25rem",fontWeight:700,marginBottom:"10px",color:"#0F172A"},children:n.title}),p.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"20px"},children:n.desc})]}),p.jsx("div",{style:{paddingTop:"12px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:p.jsxs("button",{onClick:()=>e(n),style:{background:"none",border:"none",color:"#00A3FF",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontFamily:"var(--font-heading)"},children:[p.jsx("span",{children:"Read More"}),p.jsx(er,{size:14})]})})]},i)})})]}),p.jsx(Xo,{isOpen:!!t,onClose:()=>e(null),article:t})]})}const Jw=[{step:"01",title:"Discovery",category:"Process Phase 1",icon:gf,desc:"We start by understanding your business goals, target audience, technical constraints, and exact requirements."},{step:"02",title:"Design",category:"Process Phase 2",icon:so,desc:"Creating intuitive and engaging visual designs, wireframes, and interactive prototypes tailored to user conversion."},{step:"03",title:"Development",category:"Process Phase 3",icon:ww,desc:"Building the solution with clean, maintainable, and scalable code, security standards, and automated testing."},{step:"04",title:"Launch",category:"Process Phase 4",icon:mf,desc:"Deploying to live production servers, zero downtime, and providing ongoing support, monitoring, and updates 24/7."}];function eT(){const[t,e]=$e.useState(null);return p.jsxs("section",{id:"process",style:{position:"relative"},children:[p.jsxs("div",{className:"section-container",children:[p.jsxs("div",{className:"section-title-wrap",children:[p.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[p.jsx(mf,{size:14,color:"#00A3FF"}),p.jsx("span",{children:"Proven Delivery Methodology"})]}),p.jsxs("h2",{className:"section-title",children:["Our ",p.jsx("span",{className:"gradient-text",children:"Process"})]}),p.jsx("p",{className:"section-subtitle",children:"How we turn your ideas into reality through strategic planning, clean development, and seamless deployment."})]}),p.jsx("div",{className:"grid-responsive-4",children:Jw.map((n,i)=>{const r=n.icon;return p.jsxs("div",{className:"glass-panel",style:{padding:"28px",background:"#FFFFFF",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"2.2rem",fontWeight:900,color:"rgba(0, 163, 255, 0.25)",marginBottom:"8px"},children:n.step}),p.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"12px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:p.jsx(r,{size:24,color:"#0284C7"})}),p.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.2rem",fontWeight:700,marginBottom:"10px",color:"#0F172A"},children:n.title}),p.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"16px"},children:n.desc})]}),p.jsx("div",{style:{paddingTop:"12px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:p.jsxs("button",{onClick:()=>e(n),style:{background:"none",border:"none",color:"#00A3FF",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontFamily:"var(--font-heading)"},children:[p.jsx("span",{children:"Read More"}),p.jsx(er,{size:14})]})})]},i)})})]}),p.jsx(Xo,{isOpen:!!t,onClose:()=>e(null),article:t})]})}const tT=[{text:"Bank-Grade Security: Built-in threat modeling and compliance via DevSecOps."},{text:"Performance Optimized: Sub-second load times and efficient API routing."},{text:"Dedicated Project Managers: Transparent, agile, and daily communication."},{text:"Vendor-Agnostic Cloud: Proficiency across AWS, Azure, and Google Cloud."}],nT=[{icon:Rw,title:"Healthcare & HealthTech",desc:"HIPAA compliant solutions, telemedicine platforms, and patient portals."},{icon:Lw,title:"FinTech & Banking",desc:"High-frequency trading architectures, secure payment gateways, and blockchain."},{icon:Bw,title:"Retail & eCommerce",desc:"Scalable online storefronts, inventory management ERPs, and POS systems."},{icon:bw,title:"EdTech & eLearning",desc:"Virtual classrooms, student LMS dashboards, and course monetization."}];function iT(){return p.jsx("section",{id:"philosophy",style:{position:"relative"},children:p.jsxs("div",{className:"section-container",children:[p.jsxs("div",{className:"section-title-wrap",children:[p.jsx("div",{className:"badge-glow",style:{marginBottom:"16px"},children:p.jsx("span",{children:"Digital Transformation Philosophy"})}),p.jsxs("h2",{className:"section-title",children:["The Blueidealteck ",p.jsx("span",{className:"gradient-text",children:"Philosophy"})]}),p.jsx("p",{className:"section-subtitle",children:"A deep dive into how we engineer success for modern enterprises."})]}),p.jsxs("div",{className:"glass-panel",style:{padding:"36px",background:"#FFFFFF",marginBottom:"60px"},children:[p.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.6rem",fontWeight:800,color:"#0F172A",marginBottom:"16px"},children:"Engineering Above Off-The-Shelf"}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.8,marginBottom:"20px"},children:"At Blueidealteck, we recognize that true digital transformation requires custom-tailored approaches. Off-the-shelf software often forces successful organizations to change their proven workflows to fit a rigid system. We flip that paradigm. We build software that molds to your operational processes. Whether you need an agile DevOps consulting strategy to streamline deployments or a robust Web Application that scales to millions of users, our engineering teams build systems designed specifically for your long-term roadmap."}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",lineHeight:1.8,marginBottom:"28px"},children:"Our commitment to excellence ensures that every project incorporates heavy technical diligence. From containerized microservices to enterprise-grade cybersecurity measures, we prioritize stability and data integrity above all else."}),p.jsx("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1.2rem",fontWeight:700,color:"#0F172A",marginBottom:"16px"},children:"Our Core Differentiators"}),p.jsx("div",{className:"grid-responsive-2",style:{gap:"16px"},children:tT.map((t,e)=>p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",background:"#F0F9FF",padding:"14px 18px",borderRadius:"10px",border:"1px solid rgba(0, 163, 255, 0.2)"},children:[p.jsx(Zn,{size:20,color:"#00A3FF",style:{flexShrink:0,marginTop:"2px"}}),p.jsx("span",{style:{fontSize:"0.95rem",color:"#0F172A",fontWeight:600},children:t.text})]},e))})]}),p.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[p.jsxs("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"2rem",fontWeight:800,color:"#0F172A"},children:["Industries We Empower ",p.jsx("span",{className:"gradient-text",children:"Globally"})]}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1rem",marginTop:"8px"},children:"Domain expertise across heavily regulated and highly competitive markets."})]}),p.jsx("div",{className:"grid-responsive-4",children:nT.map((t,e)=>{const n=t.icon;return p.jsxs("div",{className:"glass-panel",style:{padding:"24px",background:"#FFFFFF"},children:[p.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"12px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:p.jsx(n,{size:24,color:"#0284C7"})}),p.jsx("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1.1rem",fontWeight:700,marginBottom:"8px",color:"#0F172A"},children:t.title}),p.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6},children:t.desc})]},e)})})]})})}function rT(){const[t,e]=$e.useState({name:"",email:"",service:"Custom Software Development",message:""}),[n,i]=$e.useState(!1),[r,s]=$e.useState(""),[o,a]=$e.useState(!1),l="info@blueidealteck.com",c=f=>{if(f.preventDefault(),!t.name||!t.email)return;const h=encodeURIComponent(`New Project Inquiry from ${t.name} [${t.service}]`),g=encodeURIComponent(`Name: ${t.name}
Email: ${t.email}
Service Required: ${t.service}

Project Description / Details:
${t.message}
`);window.location.href=`mailto:${l}?subject=${h}&body=${g}`,i(!0)},d=f=>{if(f.preventDefault(),!r)return;const h=encodeURIComponent("Free Infrastructure & Architecture Audit Request"),g=encodeURIComponent(`Please conduct a Free Technical Audit for company email: ${r}`);window.location.href=`mailto:${l}?subject=${h}&body=${g}`,a(!0)};return p.jsx("section",{id:"contact",style:{position:"relative"},children:p.jsxs("div",{className:"section-container",children:[p.jsx("div",{className:"glass-panel",style:{padding:"40px",background:"linear-gradient(135deg, #0284C7 0%, #00A3FF 100%)",color:"#FFFFFF",marginBottom:"60px",boxShadow:"0 20px 45px rgba(0, 163, 255, 0.3)"},children:p.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"24px"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"4px 14px",borderRadius:"20px",background:"rgba(255, 255, 255, 0.2)",fontSize:"0.8rem",fontWeight:700,marginBottom:"12px"},children:[p.jsx(Tl,{size:14,color:"#FFF"}),p.jsx("span",{children:"Direct Mail to info@blueidealteck.com"})]}),p.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"2rem",fontWeight:900,marginBottom:"8px"},children:"Request Your Free Infrastructure & Architecture Audit"}),p.jsxs("p",{style:{fontSize:"1.05rem",opacity:.95,maxWidth:"640px"},children:["All audit submissions are routed directly to ",p.jsx("strong",{children:l})," for review by our engineering leads."]})]}),o?p.jsxs("div",{style:{background:"#FFFFFF",color:"#0F172A",padding:"16px 24px",borderRadius:"12px",fontWeight:800},children:["✓ Audit Email Prepared for ",l,"!"]}):p.jsxs("form",{onSubmit:d,style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[p.jsx("input",{type:"email",required:!0,value:r,onChange:f=>s(f.target.value),placeholder:"name@company.com",style:{padding:"14px 20px",borderRadius:"10px",border:"none",fontSize:"0.95rem",outline:"none",minWidth:"260px"}}),p.jsx("button",{type:"submit",style:{padding:"14px 24px",borderRadius:"10px",border:"none",background:"#0F172A",color:"#FFFFFF",fontWeight:700,cursor:"pointer",fontFamily:"var(--font-heading)"},children:"Send Audit Request"})]})]})}),p.jsxs("div",{className:"section-title-wrap",children:[p.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[p.jsx(hm,{size:14,color:"#00A3FF"}),p.jsxs("span",{children:["Direct Recipient: ",l]})]}),p.jsxs("h2",{className:"section-title",children:["Let's Turn Your Ideas ",p.jsx("span",{className:"gradient-text",children:"Into Impact"})]}),p.jsxs("p",{className:"section-subtitle",children:["Every submission on this page automatically sends an email to ",p.jsx("strong",{children:l}),"."]})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"40px"},children:[p.jsx("div",{className:"glass-panel",style:{padding:"36px",background:"#FFFFFF"},children:n?p.jsxs("div",{style:{textAlign:"center",padding:"40px 20px"},children:[p.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"#E0F2FE",border:"1px solid #00A3FF",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px auto"},children:p.jsx(Zn,{size:36,color:"#0284C7"})}),p.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.6rem",fontWeight:800,marginBottom:"12px",color:"#0F172A"},children:"Inquiry Dispatched!"}),p.jsxs("p",{style:{color:"var(--text-muted)",lineHeight:1.6,marginBottom:"24px"},children:["Your email has been dispatched to ",p.jsx("strong",{children:l}),". Our senior team will reply within 24 hours."]}),p.jsx("button",{onClick:()=>i(!1),className:"glow-btn-secondary",style:{display:"inline-flex"},children:"Send Another Inquiry"})]}):p.jsxs("form",{onSubmit:c,children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px",paddingBottom:"12px",borderBottom:"1px solid rgba(56, 189, 248, 0.2)"},children:[p.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.4rem",fontWeight:800,color:"#0F172A"},children:"Send Message"}),p.jsxs("span",{style:{fontSize:"0.78rem",color:"#0284C7",fontWeight:700},children:["To: ",l]})]}),p.jsxs("div",{style:{marginBottom:"20px"},children:[p.jsx("label",{style:{display:"block",fontSize:"0.85rem",color:"#334155",marginBottom:"8px",fontWeight:600},children:"Your Name *"}),p.jsx("input",{type:"text",required:!0,value:t.name,onChange:f=>e({...t,name:f.target.value}),placeholder:"Enter your full name",style:{width:"100%",padding:"12px 16px",borderRadius:"10px",background:"#F8FAFC",border:"1px solid rgba(56, 189, 248, 0.3)",color:"#0F172A",fontSize:"0.95rem",outline:"none"}})]}),p.jsxs("div",{style:{marginBottom:"20px"},children:[p.jsx("label",{style:{display:"block",fontSize:"0.85rem",color:"#334155",marginBottom:"8px",fontWeight:600},children:"Your Email Address *"}),p.jsx("input",{type:"email",required:!0,value:t.email,onChange:f=>e({...t,email:f.target.value}),placeholder:"name@company.com",style:{width:"100%",padding:"12px 16px",borderRadius:"10px",background:"#F8FAFC",border:"1px solid rgba(56, 189, 248, 0.3)",color:"#0F172A",fontSize:"0.95rem",outline:"none"}})]}),p.jsxs("div",{style:{marginBottom:"20px"},children:[p.jsx("label",{style:{display:"block",fontSize:"0.85rem",color:"#334155",marginBottom:"8px",fontWeight:600},children:"Select Required Service"}),p.jsxs("select",{value:t.service,onChange:f=>e({...t,service:f.target.value}),style:{width:"100%",padding:"12px 16px",borderRadius:"10px",background:"#F8FAFC",border:"1px solid rgba(56, 189, 248, 0.3)",color:"#0F172A",fontSize:"0.95rem",outline:"none"},children:[p.jsx("option",{value:"Custom Software Development",children:"Custom Software Development"}),p.jsx("option",{value:"DevOps & Cloud Services",children:"DevOps & Cloud Services"}),p.jsx("option",{value:"Web Application Development",children:"Web Application Development"}),p.jsx("option",{value:"UI/UX Design",children:"UI/UX Design"}),p.jsx("option",{value:"AI & Machine Learning",children:"AI & Machine Learning"}),p.jsx("option",{value:"Mobile App Development",children:"Mobile App Development"}),p.jsx("option",{value:"E-commerce Solutions",children:"E-commerce Solutions"}),p.jsx("option",{value:"Cloud Migration",children:"Cloud Migration"}),p.jsx("option",{value:"API Integration",children:"API Integration"}),p.jsx("option",{value:"Data Analytics & BI",children:"Data Analytics & BI"})]})]}),p.jsxs("div",{style:{marginBottom:"28px"},children:[p.jsx("label",{style:{display:"block",fontSize:"0.85rem",color:"#334155",marginBottom:"8px",fontWeight:600},children:"Project Requirements / Details"}),p.jsx("textarea",{rows:4,value:t.message,onChange:f=>e({...t,message:f.target.value}),placeholder:"Tell us about your project requirements...",style:{width:"100%",padding:"12px 16px",borderRadius:"10px",background:"#F8FAFC",border:"1px solid rgba(56, 189, 248, 0.3)",color:"#0F172A",fontSize:"0.95rem",outline:"none",resize:"vertical"}})]}),p.jsxs("button",{type:"submit",className:"glow-btn-primary",style:{width:"100%",justifyContent:"center"},children:[p.jsx("span",{children:"Send Mail to info@blueidealteck.com"}),p.jsx(cv,{size:16})]})]})}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[p.jsxs("div",{className:"glass-panel",style:{padding:"32px",background:"#FFFFFF"},children:[p.jsx("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1.3rem",fontWeight:800,marginBottom:"24px",color:"#0F172A"},children:"Corporate Contact Information"}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[p.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:p.jsx(hm,{size:22,color:"#0284C7"})}),p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:"0.8rem",color:"#0284C7",textTransform:"uppercase",fontWeight:700},children:"Direct Target Email"}),p.jsx("a",{href:`mailto:${l}`,style:{color:"#0F172A",textDecoration:"none",fontWeight:800,fontSize:"1.05rem"},children:l})]})]}),p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[p.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:p.jsx(Ow,{size:22,color:"#0284C7"})}),p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:"0.8rem",color:"#0284C7",textTransform:"uppercase",fontWeight:700},children:"Call Us"}),p.jsx("a",{href:"tel:+919789836077",style:{color:"#0F172A",textDecoration:"none",fontWeight:800,fontSize:"1.05rem"},children:"+91 9789836077"})]})]}),p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[p.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:p.jsx(Iw,{size:22,color:"#0284C7"})}),p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:"0.8rem",color:"#0284C7",textTransform:"uppercase",fontWeight:700},children:"Registered Address"}),p.jsxs("p",{style:{color:"#0F172A",fontSize:"0.95rem",lineHeight:1.5,marginTop:"4px",fontWeight:600},children:["SF/NO.139/1, ANNA NAGAR, MANGALAMPET,",p.jsx("br",{}),"Karnatham, Vriddhachalam, Cuddalore,",p.jsx("br",{}),"Tamil Nadu, India - 606104"]})]})]})]})]}),p.jsxs("div",{className:"glass-panel",style:{padding:"24px",display:"flex",alignItems:"center",gap:"16px",background:"#FFFFFF"},children:[p.jsx(Mw,{size:28,color:"#00A3FF"}),p.jsxs("div",{children:[p.jsx("div",{style:{fontFamily:"var(--font-heading)",fontWeight:800,color:"#0F172A"},children:"Support & Email Routing Active"}),p.jsxs("div",{style:{fontSize:"0.88rem",color:"var(--text-muted)",fontWeight:500},children:["Emails are directly delivered to ",l," 24/7."]})]})]})]})]})]})})}const uv=[{name:"React.js",subtitle:"Frontend Powerhouse",category:"Frontend",icon:cd},{name:"Next.js",subtitle:"SSR & Static React",category:"Frontend",icon:io},{name:"Vue.js",subtitle:"Progressive JS Framework",category:"Frontend",icon:io},{name:"Angular",subtitle:"Enterprise Web Platform",category:"Frontend",icon:io},{name:"TypeScript",subtitle:"Typed JavaScript Engine",category:"Frontend",icon:Aw},{name:"Tailwind CSS",subtitle:"Utility-First Styling",category:"Frontend",icon:so},{name:"Svelte",subtitle:"Compiler Frontend Engine",category:"Frontend",icon:cd},{name:"Three.js / WebGL",subtitle:"3D Interactive Canvas",category:"Frontend",icon:iu},{name:"Node.js",subtitle:"Event-Driven Runtime",category:"Backend",icon:ru},{name:"Express.js",subtitle:"Microservices Framework",category:"Backend",icon:ru},{name:"NestJS",subtitle:"Scalable Node.js Server",category:"Backend",icon:ro},{name:"Python",subtitle:"AI & Data Engineering",category:"Backend",icon:mm},{name:"Django",subtitle:"High-Level Python Web",category:"Backend",icon:mm},{name:"FastAPI",subtitle:"Async High-Speed API",category:"Backend",icon:Yr},{name:"Java",subtitle:"Enterprise Banking Core",category:"Backend",icon:ru},{name:"Spring Boot",subtitle:"Java Microservices",category:"Backend",icon:ro},{name:".NET Core",subtitle:"Cross-Platform Enterprise",category:"Backend",icon:ro},{name:"Go (Golang)",subtitle:"High-Throughput Systems",category:"Backend",icon:Yr},{name:"GraphQL",subtitle:"Typed Query Language",category:"Backend",icon:Ii},{name:"gRPC",subtitle:"Low-Latency RPC Protocol",category:"Backend",icon:Ii},{name:"AWS",subtitle:"Cloud Infrastructure",category:"Cloud & DevOps",icon:no},{name:"Azure",subtitle:"Microsoft Enterprise Cloud",category:"Cloud & DevOps",icon:no},{name:"GCP",subtitle:"Google Cloud Platform",category:"Cloud & DevOps",icon:no},{name:"Docker",subtitle:"Container Virtualization",category:"Cloud & DevOps",icon:iu},{name:"Kubernetes",subtitle:"Cluster Orchestration",category:"Cloud & DevOps",icon:iu},{name:"Terraform",subtitle:"Infrastructure as Code",category:"Cloud & DevOps",icon:pm},{name:"Jenkins",subtitle:"CI/CD Build Automation",category:"Cloud & DevOps",icon:fm},{name:"GitHub Actions",subtitle:"Automated Workflows",category:"Cloud & DevOps",icon:Yr},{name:"Ansible",subtitle:"Configuration Management",category:"Cloud & DevOps",icon:pm},{name:"Cloud Migration Tools",subtitle:"Zero-Downtime Migration",category:"Cloud & DevOps",icon:no},{name:"PostgreSQL",subtitle:"ACID Relational Core",category:"Databases",icon:Na},{name:"MongoDB",subtitle:"Document NoSQL Database",category:"Databases",icon:Na},{name:"Redis",subtitle:"In-Memory Cache & Queue",category:"Databases",icon:fm},{name:"MySQL",subtitle:"Scalable Relational DB",category:"Databases",icon:Na},{name:"Apache Kafka",subtitle:"Event Stream Processing",category:"Databases",icon:jw},{name:"BigQuery",subtitle:"Serverless Data Warehouse",category:"Databases",icon:Na},{name:"TensorFlow",subtitle:"Deep Neural Networks",category:"AI & ML",icon:Ii},{name:"PyTorch",subtitle:"AI Research & NLP",category:"AI & ML",icon:Ii},{name:"OpenAI API & GenAI",subtitle:"LLM & Intelligent Bots",category:"AI & ML",icon:Tl},{name:"LangChain",subtitle:"LLM Orchestration",category:"AI & ML",icon:Tl},{name:"Flutter",subtitle:"Google UI Toolkit",category:"Mobile",icon:oo},{name:"React Native",subtitle:"Cross-Platform React",category:"Mobile",icon:oo},{name:"Swift (iOS)",subtitle:"Native Apple Development",category:"Mobile",icon:oo},{name:"Kotlin (Android)",subtitle:"Native Android Development",category:"Mobile",icon:oo},{name:"Figma",subtitle:"UI/UX Design Platform",category:"Design",icon:so},{name:"Adobe XD",subtitle:"Interactive Prototyping",category:"Design",icon:so},{name:"Storybook",subtitle:"Component UI Workshop",category:"Design",icon:so},{name:"Selenium",subtitle:"Cross-Browser Automation",category:"QA & Testing",icon:Zn},{name:"Jest",subtitle:"JS Unit & Integration",category:"QA & Testing",icon:io},{name:"Cypress",subtitle:"E2E Web App Testing",category:"QA & Testing",icon:Zn},{name:"Prometheus",subtitle:"Real-Time Server Metrics",category:"Monitoring",icon:um},{name:"Grafana",subtitle:"Telemetry Dashboards",category:"Monitoring",icon:um},{name:"n8n",subtitle:"Fair-Code Automation",category:"Automation",icon:Yr},{name:"Zapier",subtitle:"5,000+ Cloud Integrations",category:"Automation",icon:Yr},{name:"Make",subtitle:"Visual Workflow Builder",category:"Automation",icon:ro}];function sT(){return p.jsx("section",{id:"trending-tools",style:{position:"relative"},children:p.jsxs("div",{className:"section-container",children:[p.jsxs("div",{className:"section-title-wrap",children:[p.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[p.jsx(Ii,{size:14,color:"#00A3FF"}),p.jsx("span",{children:"Complete Engineering Ecosystem"})]}),p.jsxs("h2",{className:"section-title",children:["Trending Tools ",p.jsx("span",{className:"gradient-text",children:"& Tech Catalog"})]}),p.jsx("p",{className:"section-subtitle",children:"The comprehensive stack powering modern enterprises. We leverage 50+ battle-tested frameworks, databases, cloud tools, and AI automation engines."})]}),p.jsx("div",{className:"grid-responsive-4",style:{gap:"18px"},children:uv.map((t,e)=>{const n=t.icon;return p.jsxs("div",{className:"glass-panel",style:{padding:"18px",background:"#FFFFFF",border:"1px solid rgba(56, 189, 248, 0.25)",display:"flex",alignItems:"center",gap:"14px",transition:"var(--transition-smooth)"},children:[p.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:p.jsx(n,{size:22,color:"#0284C7"})}),p.jsxs("div",{children:[p.jsx("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1rem",fontWeight:800,color:"#0F172A",marginBottom:"2px"},children:t.name}),p.jsx("div",{style:{fontSize:"0.78rem",color:"#0284C7",fontWeight:600},children:t.subtitle})]})]},e)})})]})})}const oT=[{id:1,title:"Top AI Innovations Transforming Businesses in 2026",category:"Artificial Intelligence",date:"July 2026",author:"AI Engineering Lead",desc:"Explore the top artificial intelligence innovations defining 2026. From generative models to predictive analytics, learn how enterprises leverage custom LLMs to 10x operational efficiency."},{id:2,title:"Cloud Cost Optimization: Maximize Your AWS/Azure ROI",category:"Cloud & DevOps",date:"July 2026",author:"Cloud Solutions Architect",desc:"Stop overpaying for cloud infrastructure. Learn actionable strategies to optimize your AWS and Azure costs securely, right-sizing workloads and eliminating idle resources."},{id:3,title:"Why CI/CD DevOps Automation is Crucial in 2026",category:"DevOps & CI/CD",date:"June 2026",author:"DevOps Lead Engineer",desc:"Discover why Continuous Integration and Continuous Deployment (CI/CD) pipelines are essential for agile software development, enabling zero-downtime releases."},{id:4,title:"Monolith vs Microservices: Choosing Your Architecture",category:"Architecture",date:"June 2026",author:"Principal Systems Architect",desc:"Struggling to scale your legacy application? Learn the structural differences between Monolith and Microservices architectures and when to execute a decomposition strategy."},{id:5,title:"Top 5 Custom Software Trends in 2026",category:"Custom Software",date:"June 2026",author:"Software Engineering Director",desc:"From AI-First Engineering to Green Computing, discover the 5 critical trends defining the future of digital transformation and enterprise software agility."},{id:6,title:"React vs Vue vs Angular: 2026 Comparison",category:"Frontend Development",date:"May 2026",author:"Frontend Engineering Specialist",desc:"The battle of the frontend frameworks continues. Which one offers the best performance, server-side rendering, and scalability for your next enterprise application?"},{id:7,title:"5 Strategies for Seamless Cloud Migration",category:"Cloud Migration",date:"May 2026",author:"Cloud Migration Consultant",desc:'Move to AWS or Azure without downtime. Learn the "Rehost, Replatform, Refactor" strategies used by top global enterprises to minimize disruption.'},{id:8,title:"Why Your Business Needs a Native Mobile App",category:"Mobile Apps",date:"May 2026",author:"Mobile Development Lead",desc:"Boost customer retention and sales with a dedicated iOS and Android app. Unlock the power of push notifications, offline access, and native device performance."},{id:9,title:"How AI Chatbots Are Revolutionizing Customer Service",category:"AI & Automation",date:"April 2026",author:"Conversational AI Specialist",desc:"Automate 70% of support queries and provide 24/7 instant responses with custom AI-powered chatbots built by our dedicated AI solutions team."},{id:10,title:"The Importance of UI/UX Design in Modern App Development",category:"UI/UX Design",date:"April 2026",author:"Head of UI/UX Design",desc:"Great code fails with bad design. Learn how superior UI/UX drives user retention, reduces friction, and dramatically increases conversion rates."},{id:11,title:"Cybersecurity Essentials for Small Businesses in 2026",category:"Cybersecurity",date:"March 2026",author:"Cybersecurity Specialist",desc:"43% of cyberattacks target small businesses. Discover the essential cybersecurity steps to protect your data and reputation with enterprise-grade Zero Trust measures."},{id:12,title:"Digital Marketing vs Traditional Marketing: What Works Best?",category:"Digital Strategy",date:"March 2026",author:"Growth & Strategy Consultant",desc:"Stop wasting money on billboards. Learn why Digital Marketing offers superior targeting, real-time ROI tracking, and deeper engagement for modern B2B businesses."},{id:13,title:"Why AI is the Future of Business Scaling",category:"Artificial Intelligence",date:"February 2026",author:"Enterprise AI Consultant",desc:"Artificial Intelligence isn't just a buzzword; it's the engine of modern growth. Discover how automated workflows and predictive analytics can 10x your team efficiency."},{id:14,title:"The Strategic Advantage of Cloud Migration",category:"Cloud Migration",date:"January 2026",author:"Cloud Infrastructure Lead",desc:"Moving legacy systems to the cloud reduces operational overhead and improves security posture. Learn the top strategies for a seamless transition to AWS or Azure."},{id:15,title:"Top Custom Software Trends for 2025",category:"Custom Software",date:"December 2025",author:"Tech Research Team",desc:"From low-code platforms to microservices architecture, stay ahead of the curve with these critical software development trends dominating the industry."}];function aT({onNavigateHome:t}){const[e,n]=$e.useState(null),[i,r]=$e.useState(""),[s,o]=$e.useState("All"),a=["All","Artificial Intelligence","Cloud & DevOps","Architecture","Custom Software","Frontend Development","Mobile Apps","Cybersecurity"],l=oT.filter(c=>{const d=c.title.toLowerCase().includes(i.toLowerCase())||c.desc.toLowerCase().includes(i.toLowerCase()),f=s==="All"||c.category===s;return d&&f});return p.jsxs("div",{style:{paddingTop:"100px",position:"relative"},children:[p.jsx("section",{style:{padding:"60px 24px 40px 24px",textAlign:"center",background:"linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 100%)",borderBottom:"1px solid rgba(56, 189, 248, 0.2)"},children:p.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[p.jsx("div",{style:{display:"flex",justifyContent:"flex-start",marginBottom:"20px"},children:p.jsxs("button",{onClick:t,className:"glow-btn-secondary",style:{padding:"8px 18px",fontSize:"0.85rem",display:"inline-flex",gap:"8px"},children:[p.jsx(pf,{size:16}),p.jsx("span",{children:"Back to Main Site"})]})}),p.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[p.jsx(Uw,{size:14,color:"#00A3FF"}),p.jsx("span",{children:"Dedicated Knowledge Portal"})]}),p.jsxs("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2.5rem, 4.5vw, 3.8rem)",fontWeight:900,color:"#0F172A",marginBottom:"16px"},children:["Blueidealteck ",p.jsx("span",{className:"gradient-text",children:"Blog & Insights"})]}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.2rem",maxWidth:"700px",margin:"0 auto 32px auto",lineHeight:1.6},children:"Expert perspectives on Technology, AI, Cloud Infrastructure, and Digital Transformation. Empowering businesses with actionable insights."}),p.jsxs("div",{style:{maxWidth:"560px",margin:"0 auto",position:"relative"},children:[p.jsx(gf,{size:20,color:"#0284C7",style:{position:"absolute",left:"18px",top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"text",value:i,onChange:c=>r(c.target.value),placeholder:"Search 15+ engineering articles, AI trends, cloud guides...",style:{width:"100%",padding:"14px 20px 14px 50px",borderRadius:"30px",border:"1px solid rgba(0, 163, 255, 0.4)",background:"#FFFFFF",fontSize:"0.95rem",color:"#0F172A",outline:"none",boxShadow:"0 8px 25px rgba(2, 132, 199, 0.12)"}})]})]})}),p.jsxs("div",{className:"section-container",style:{paddingTop:"50px"},children:[p.jsx("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"10px",marginBottom:"40px"},children:a.map(c=>p.jsx("button",{onClick:()=>o(c),style:{padding:"8px 18px",borderRadius:"24px",border:s===c?"1px solid #00A3FF":"1px solid rgba(56, 189, 248, 0.25)",background:s===c?"#00A3FF":"#FFFFFF",color:s===c?"#FFFFFF":"#334155",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"var(--transition-smooth)"},children:c},c))}),p.jsx("div",{className:"grid-responsive-3",style:{gap:"28px",marginBottom:"60px"},children:l.map(c=>p.jsxs("div",{className:"glass-panel",style:{padding:"28px",background:"#FFFFFF",display:"flex",flexDirection:"column",justifyContent:"space-between",border:"1px solid rgba(56, 189, 248, 0.25)"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{display:"inline-block",padding:"4px 12px",borderRadius:"12px",background:"#E0F2FE",color:"#0284C7",fontSize:"0.75rem",fontWeight:700,marginBottom:"14px"},children:c.category}),p.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.2rem",fontWeight:800,marginBottom:"12px",color:"#0F172A",lineHeight:1.4},children:c.title}),p.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"20px"},children:c.desc})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"16px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.8rem",color:"var(--text-dim)"},children:[p.jsx(lv,{size:14,color:"#0284C7"}),p.jsx("span",{children:c.date})]}),p.jsxs("button",{onClick:()=>n(c),style:{background:"none",border:"none",color:"#00A3FF",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontFamily:"var(--font-heading)"},children:[p.jsx("span",{children:"Read More"}),p.jsx(er,{size:14})]})]})]},c.id))}),p.jsx(sT,{})]}),p.jsx(Xo,{isOpen:!!e,onClose:()=>n(null),article:e})]})}function lT({onNavigateHome:t}){const[e,n]=$e.useState(null),[i,r]=$e.useState(""),[s,o]=$e.useState("All"),a=["All","Frontend","Backend","Cloud & DevOps","Databases","AI & ML","Mobile","Design","QA & Testing","Monitoring","Automation"],l=uv.filter(c=>{const d=c.name.toLowerCase().includes(i.toLowerCase())||c.subtitle.toLowerCase().includes(i.toLowerCase())||c.category.toLowerCase().includes(i.toLowerCase()),f=s==="All"||c.category===s;return d&&f});return p.jsxs("div",{style:{paddingTop:"100px",position:"relative"},children:[p.jsx("section",{style:{padding:"60px 24px 40px 24px",textAlign:"center",background:"linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 100%)",borderBottom:"1px solid rgba(56, 189, 248, 0.2)"},children:p.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[p.jsx("div",{style:{display:"flex",justifyContent:"flex-start",marginBottom:"20px"},children:p.jsxs("button",{onClick:t,className:"glow-btn-secondary",style:{padding:"8px 18px",fontSize:"0.85rem",display:"inline-flex",gap:"8px"},children:[p.jsx(pf,{size:16}),p.jsx("span",{children:"Back to Main Site"})]})}),p.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[p.jsx(Ii,{size:14,color:"#00A3FF"}),p.jsx("span",{children:"Dedicated Technology Ecosystem Page"})]}),p.jsxs("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2.4rem, 4.5vw, 3.8rem)",fontWeight:900,color:"#0F172A",marginBottom:"16px"},children:["Complete ",p.jsx("span",{className:"gradient-text",children:"Tech Stack Catalog"})]}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.2rem",maxWidth:"740px",margin:"0 auto 32px auto",lineHeight:1.6},children:"Explore our comprehensive suite of 50+ core technologies spanning Frontend frameworks, Node.js microservices, Cloud DevOps, AI automation, Mobile engineering, and NoSQL/Relational databases."}),p.jsxs("div",{style:{maxWidth:"580px",margin:"0 auto",position:"relative"},children:[p.jsx(gf,{size:20,color:"#0284C7",style:{position:"absolute",left:"18px",top:"50%",transform:"translateY(-50%)"}}),p.jsx("input",{type:"text",value:i,onChange:c=>r(c.target.value),placeholder:"Search 50+ tools (e.g. React, Next.js, Python, AWS, Docker, Flutter, PostgreSQL...)",style:{width:"100%",padding:"14px 20px 14px 50px",borderRadius:"30px",border:"1px solid rgba(0, 163, 255, 0.4)",background:"#FFFFFF",fontSize:"0.95rem",color:"#0F172A",outline:"none",boxShadow:"0 8px 25px rgba(2, 132, 199, 0.12)"}})]})]})}),p.jsxs("div",{className:"section-container",style:{paddingTop:"50px"},children:[p.jsx("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"10px",marginBottom:"40px"},children:a.map(c=>p.jsx("button",{onClick:()=>o(c),style:{padding:"8px 18px",borderRadius:"24px",border:s===c?"1px solid #00A3FF":"1px solid rgba(56, 189, 248, 0.25)",background:s===c?"#00A3FF":"#FFFFFF",color:s===c?"#FFFFFF":"#334155",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"var(--transition-smooth)"},children:c},c))}),p.jsx("div",{className:"grid-responsive-3",style:{gap:"24px",marginBottom:"60px"},children:l.map((c,d)=>{const f=c.icon;return p.jsxs("div",{className:"glass-panel",style:{padding:"24px",background:"#FFFFFF",border:"1px solid rgba(56, 189, 248, 0.25)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"},children:[p.jsx("div",{style:{width:"46px",height:"46px",borderRadius:"12px",background:"#E0F2FE",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(f,{size:24,color:"#0284C7"})}),p.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"#F0F9FF",color:"#0284C7",fontSize:"0.75rem",fontWeight:700},children:c.category})]}),p.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.25rem",fontWeight:800,color:"#0F172A",marginBottom:"4px"},children:c.name}),p.jsx("div",{style:{fontSize:"0.85rem",color:"#00A3FF",fontWeight:700,marginBottom:"12px"},children:c.subtitle})]}),p.jsx("div",{style:{paddingTop:"14px",borderTop:"1px solid rgba(56, 189, 248, 0.2)"},children:p.jsxs("button",{onClick:()=>n(c),style:{background:"none",border:"none",color:"#00A3FF",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",fontFamily:"var(--font-heading)"},children:[p.jsx("span",{children:"View Architecture Detail"}),p.jsx(er,{size:14})]})})]},d)})})]}),p.jsx(Xo,{isOpen:!!e,onClose:()=>n(null),article:e?{title:`${e.name} — ${e.subtitle}`,category:e.category,desc:`At Blueidealteck, we utilize ${e.name} (${e.subtitle}) to engineer scalable, security-first, and high-performance digital ecosystems.`,date:"Production Stack Spec"}:null})]})}function cT({onNavigateHome:t}){return p.jsxs("div",{style:{paddingTop:"100px",position:"relative"},children:[p.jsx("section",{style:{padding:"60px 24px 40px 24px",textAlign:"center",background:"linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 100%)",borderBottom:"1px solid rgba(56, 189, 248, 0.2)"},children:p.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[p.jsx("div",{style:{display:"flex",justifyContent:"flex-start",marginBottom:"20px"},children:p.jsxs("button",{onClick:t,className:"glow-btn-secondary",style:{padding:"8px 18px",fontSize:"0.85rem",display:"inline-flex",gap:"8px"},children:[p.jsx(pf,{size:16}),p.jsx("span",{children:"Back to Main Site"})]})}),p.jsxs("div",{className:"badge-glow",style:{marginBottom:"16px"},children:[p.jsx(vf,{size:14,color:"#00A3FF"}),p.jsx("span",{children:"Official Legal Document"})]}),p.jsxs("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2.4rem, 4.5vw, 3.8rem)",fontWeight:900,color:"#0F172A",marginBottom:"16px"},children:["Privacy ",p.jsx("span",{className:"gradient-text",children:"Policy"})]}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.15rem",maxWidth:"720px",margin:"0 auto",lineHeight:1.6},children:"Blueidealteck Software Solution Private Limited. Effective Date: July 27, 2026. Your privacy, confidentiality, and data security are our top corporate priorities."})]})}),p.jsx("div",{className:"section-container",style:{paddingTop:"50px",maxWidth:"960px"},children:p.jsxs("div",{className:"glass-panel",style:{padding:"40px",background:"#FFFFFF",lineHeight:1.8,color:"#334155"},children:[p.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,color:"#0F172A",marginBottom:"14px"},children:"1. Introduction & Corporate Commitment"}),p.jsxs("p",{style:{marginBottom:"24px"},children:["Welcome to Blueidealteck Software Solution Private Limited (“Blueidealteck”, “we”, “us”, or “our”). We are committed to protecting the personal information and confidential business data of all clients, website visitors, and partners. This Privacy Policy outlines how we collect, use, safeguard, and handle data when you interact with our website (",p.jsx("strong",{children:"blueidealteck.com"}),") or engage our software development and cloud consulting services."]}),p.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,color:"#0F172A",marginBottom:"14px"},children:"2. Information We Collect"}),p.jsx("p",{style:{marginBottom:"14px"},children:"We collect information necessary to provide bespoke software engineering, technical infrastructure audits, and client consultation services:"}),p.jsxs("ul",{style:{paddingLeft:"24px",marginBottom:"24px",display:"flex",flexDirection:"column",gap:"8px"},children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Personal Identification Data:"})," Full name, corporate email address, phone number, and company name provided voluntarily through our inquiry form or free audit request."]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Technical & Project Specifications:"})," Project outlines, architectural goals, technology preferences, and operational workflow requirements submitted for project estimation."]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Automated Telemetry:"})," Anonymized browser type, IP address, device specifications, and page interaction metrics collected via standard web server logs for performance optimization."]})]}),p.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,color:"#0F172A",marginBottom:"14px"},children:"3. How We Use Your Information"}),p.jsx("p",{style:{marginBottom:"14px"},children:"We strictly limit the use of collected data to legitimate business operations:"}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"24px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[p.jsx(Zn,{size:18,color:"#00A3FF",style:{flexShrink:0,marginTop:"4px"}}),p.jsx("span",{children:"To prepare custom project blueprints, architecture cost estimations, and technical proposals."})]}),p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[p.jsx(Zn,{size:18,color:"#00A3FF",style:{flexShrink:0,marginTop:"4px"}}),p.jsxs("span",{children:["To communicate directly regarding your requested free infrastructure audit or support inquiry via ",p.jsx("strong",{children:"info@blueidealteck.com"}),"."]})]}),p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[p.jsx(Zn,{size:18,color:"#00A3FF",style:{flexShrink:0,marginTop:"4px"}}),p.jsx("span",{children:"To maintain software reliability, prevent cybersecurity vulnerabilities, and optimize 120 FPS WebGL site performance."})]})]}),p.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,color:"#0F172A",marginBottom:"14px"},children:"4. Client Intellectual Property & Non-Disclosure (NDA)"}),p.jsxs("p",{style:{marginBottom:"24px"},children:["We understand that custom software ideas and proprietary workflows represent core business value. We sign Non-Disclosure Agreements (NDAs) prior to detailed discovery. ",p.jsx("strong",{children:"We do not sell, rent, lease, or trade your personal or project data to any third-party marketing companies under any circumstances."})," Upon project completion, 100% of custom code and IP rights belong to you."]}),p.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,color:"#0F172A",marginBottom:"14px"},children:"5. Bank-Grade Security Measures"}),p.jsx("p",{style:{marginBottom:"24px"},children:"We employ bank-grade security protocols, SSL/TLS encryption, restricted access controls, and DevSecOps practices to protect all data against unauthorized access, disclosure, or alteration."}),p.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:800,color:"#0F172A",marginBottom:"14px"},children:"6. Contact Our Data Protection Officer"}),p.jsx("p",{style:{marginBottom:"16px"},children:"If you have questions regarding this Privacy Policy or wish to exercise your data access or deletion rights, please contact our team:"}),p.jsxs("div",{style:{background:"#F0F9FF",padding:"20px 24px",borderRadius:"12px",borderLeft:"4px solid #00A3FF",fontWeight:600},children:[p.jsx("div",{children:"Blueidealteck Software Solution Private Limited"}),p.jsx("div",{children:"SF/NO.139/1, ANNA NAGAR, MANGALAMPET, Karnatham, Vriddhachalam, Cuddalore, Tamil Nadu, India - 606104"}),p.jsxs("div",{children:["Email: ",p.jsx("strong",{children:"info@blueidealteck.com"})," | Phone: ",p.jsx("strong",{children:"+91 9789836077"})]})]})]})})]})}const Zs={services:"Blueidealteck provides 10 full-suite enterprise services: Custom Software Development, DevOps & Cloud Services, Web Application Development, UI/UX Design, AI & Machine Learning, Mobile App Development, E-commerce, Cloud Migration, API Integration, and Data Analytics.",audit:"You can request a Free Infrastructure & Architecture Audit right on our homepage or by emailing info@blueidealteck.com. Our senior technical leads will send a complete blueprint within 24 hours!",tech:"We leverage 50+ battle-tested technologies including React, Next.js, Node.js, Python, AWS, Azure, Docker, Kubernetes, Flutter, PostgreSQL, MongoDB, and OpenAI API.",contact:"You can reach out directly via email at info@blueidealteck.com or call our engineering office at +91 9789836077. Registered Address: SF/NO.139/1, ANNA NAGAR, MANGALAMPET, Cuddalore, TN 606104.",cost:"Custom software development projects are tailored to your exact business requirements. We offer 100% IP ownership, transparent milestone pricing, and zero recurring vendor license fees!"};function uT(){const[t,e]=$e.useState(!1),[n,i]=$e.useState([{sender:"bot",text:"Hello! I am Blueidealteck AI Assistant. How can I help you scale your software, cloud, or AI architecture today?"}]),[r,s]=$e.useState(""),[o,a]=$e.useState(!1),l=$e.useRef(null);$e.useEffect(()=>{l.current&&l.current.scrollIntoView({behavior:"smooth"})},[n,o]);const c=d=>{const f=d||r;if(!f.trim())return;const h={sender:"user",text:f};i(g=>[...g,h]),d||s(""),a(!0),setTimeout(()=>{let g="Thank you for reaching out! Our senior engineering team is ready to assist you. Please send your detailed project requirement directly to info@blueidealteck.com or call +91 9789836077.";const _=f.toLowerCase();_.includes("service")||_.includes("what do you do")||_.includes("build")?g=Zs.services:_.includes("audit")||_.includes("free")||_.includes("review")?g=Zs.audit:_.includes("tech")||_.includes("stack")||_.includes("tool")||_.includes("language")?g=Zs.tech:_.includes("contact")||_.includes("email")||_.includes("phone")||_.includes("address")?g=Zs.contact:(_.includes("cost")||_.includes("price")||_.includes("quote")||_.includes("rate"))&&(g=Zs.cost),i(y=>[...y,{sender:"bot",text:g}]),a(!1)},600)};return p.jsxs("div",{style:{position:"fixed",bottom:"16px",right:"16px",zIndex:9999},children:[!t&&p.jsxs("button",{onClick:()=>e(!0),style:{width:"54px",height:"54px",borderRadius:"50%",background:"linear-gradient(135deg, #0284C7 0%, #00A3FF 100%)",border:"2px solid #FFFFFF",color:"#FFFFFF",boxShadow:"0 10px 30px rgba(0, 163, 255, 0.4)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease",position:"relative"},children:[p.jsx(dm,{size:26}),p.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",width:"12px",height:"12px",borderRadius:"50%",background:"#22C55E",border:"2px solid #FFFFFF"}})]}),t&&p.jsxs("div",{style:{width:"calc(100vw - 32px)",maxWidth:"360px",maxHeight:"480px",height:"75vh",background:"#FFFFFF",borderRadius:"20px",boxShadow:"0 20px 50px rgba(2, 132, 199, 0.25)",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",flexDirection:"column",overflow:"hidden",animation:"fadeInUp 0.3s ease"},children:[p.jsxs("div",{style:{padding:"14px 18px",background:"linear-gradient(135deg, #0284C7 0%, #00A3FF 100%)",color:"#FFFFFF",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[p.jsx("div",{style:{width:"34px",height:"34px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(dm,{size:20,color:"#FFF"})}),p.jsxs("div",{children:[p.jsx("div",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"0.95rem"},children:"Blueidealteck AI"}),p.jsxs("div",{style:{fontSize:"0.7rem",opacity:.9,display:"flex",alignItems:"center",gap:"4px"},children:[p.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#22C55E"}}),p.jsx("span",{children:"Online 24/7"})]})]})]}),p.jsx("button",{onClick:()=>e(!1),style:{background:"none",border:"none",color:"#FFFFFF",cursor:"pointer",padding:"4px"},children:p.jsx(xf,{size:20})})]}),p.jsxs("div",{style:{padding:"8px 12px",background:"#F0F9FF",borderBottom:"1px solid rgba(56, 189, 248, 0.2)",display:"flex",gap:"6px",overflowX:"auto",whiteSpace:"nowrap"},children:[p.jsx("button",{onClick:()=>c("What services do you offer?"),className:"chat-chip",children:"Services"}),p.jsx("button",{onClick:()=>c("How to get a free audit?"),className:"chat-chip",children:"Free Audit"}),p.jsx("button",{onClick:()=>c("What tech stack do you use?"),className:"chat-chip",children:"Tech Stack"}),p.jsx("button",{onClick:()=>c("How to contact sales?"),className:"chat-chip",children:"Contact Us"})]}),p.jsxs("div",{style:{flex:1,padding:"14px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"10px",background:"#F8FAFC"},children:[n.map((d,f)=>p.jsxs("div",{style:{display:"flex",justifyContent:d.sender==="user"?"flex-end":"flex-start",gap:"6px"},children:[d.sender==="bot"&&p.jsx("div",{style:{width:"26px",height:"26px",borderRadius:"50%",background:"#00A3FF",color:"#FFF",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",flexShrink:0},children:"AI"}),p.jsx("div",{style:{maxWidth:"82%",padding:"9px 13px",borderRadius:d.sender==="user"?"14px 14px 2px 14px":"14px 14px 14px 2px",background:d.sender==="user"?"#00A3FF":"#FFFFFF",color:d.sender==="user"?"#FFFFFF":"#0F172A",fontSize:"0.84rem",lineHeight:1.45,boxShadow:"0 2px 8px rgba(0, 0, 0, 0.05)",border:d.sender==="bot"?"1px solid rgba(56, 189, 248, 0.2)":"none"},children:d.text})]},f)),o&&p.jsx("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#0284C7",fontSize:"0.78rem",fontWeight:600},children:p.jsx("span",{children:"AI is typing..."})}),p.jsx("div",{ref:l})]}),p.jsxs("form",{onSubmit:d=>{d.preventDefault(),c()},style:{padding:"10px 12px",background:"#FFFFFF",borderTop:"1px solid rgba(56, 189, 248, 0.2)",display:"flex",gap:"6px",alignItems:"center"},children:[p.jsx("input",{type:"text",value:r,onChange:d=>s(d.target.value),placeholder:"Ask AI anything...",style:{flex:1,padding:"9px 12px",borderRadius:"20px",border:"1px solid rgba(56, 189, 248, 0.3)",fontSize:"0.84rem",outline:"none",color:"#0F172A"}}),p.jsx("button",{type:"submit",style:{width:"34px",height:"34px",borderRadius:"50%",background:"#00A3FF",color:"#FFFFFF",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:p.jsx(cv,{size:15})})]})]}),p.jsx("style",{children:`
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
      `})]})}function dT({onNavigate:t}){const e=()=>{window.scrollTo({top:0,behavior:"smooth"})},n=(r,s)=>{t&&t(r),r==="home"&&s?setTimeout(()=>{const o=document.getElementById(s);o&&o.scrollIntoView({behavior:"smooth"})},50):window.scrollTo({top:0,behavior:"smooth"})},i=[{name:"X (Twitter)",icon:Gw,url:"https://x.com/blueidealteck"},{name:"Facebook",icon:Tw,url:"https://www.facebook.com/people/Blueidealtec-K/pfbid0DrJ2ETaQFtdKne5BmiVKrJck7TbVvABi53qnQwvMsiT8t6iwncL6kmjCYCTi4n91l/"},{name:"Instagram",icon:Pw,url:"https://www.instagram.com/blueidealteck/"},{name:"LinkedIn",icon:Dw,url:"https://www.linkedin.com/company/blueidealteck-software-solution"}];return p.jsxs("footer",{style:{borderTop:"1px solid rgba(56, 189, 248, 0.3)",background:"#FFFFFF",position:"relative",zIndex:10},children:[p.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"60px 24px 40px 24px"},children:[p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"40px",marginBottom:"50px"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"16px"},children:[p.jsx("div",{style:{padding:"4px",borderRadius:"10px",background:"#FFFFFF",border:"1px solid rgba(0, 163, 255, 0.3)",boxShadow:"0 4px 15px rgba(0, 163, 255, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",height:"40px"},children:p.jsx("img",{src:"./logo.png",alt:"Blueidealteck Logo",style:{height:"32px",width:"auto",objectFit:"contain"}})}),p.jsxs("span",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"1.3rem",color:"#0F172A"},children:["BLUEIDEAL",p.jsx("span",{style:{color:"#00A3FF"},children:"TECK"})]})]}),p.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.6,maxWidth:"280px",fontWeight:500,marginBottom:"12px"},children:["SF/NO.139/1, ANNA NAGAR, MANGALAMPET,",p.jsx("br",{}),"Karnatham, Vriddhachalam, Cuddalore,",p.jsx("br",{}),"Tamil Nadu, India - 606104"]}),p.jsxs("p",{style:{color:"#0F172A",fontSize:"0.88rem",fontWeight:600},children:["Phone: +91 9789836077",p.jsx("br",{}),"Email: info@blueidealteck.com"]})]}),p.jsxs("div",{children:[p.jsx("h5",{style:{fontFamily:"var(--font-heading)",color:"#0F172A",fontSize:"1rem",fontWeight:800,marginBottom:"16px"},children:"Useful Links"}),p.jsxs("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"10px"},children:[p.jsx("li",{children:p.jsx("button",{onClick:()=>n("home"),className:"footer-btn",children:"Home"})}),p.jsx("li",{children:p.jsx("button",{onClick:()=>n("home","about"),className:"footer-btn",children:"About us"})}),p.jsx("li",{children:p.jsx("button",{onClick:()=>n("home","services"),className:"footer-btn",children:"Services"})}),p.jsx("li",{children:p.jsx("button",{onClick:()=>n("techstack"),className:"footer-btn",children:"Tech Stack"})}),p.jsx("li",{children:p.jsx("button",{onClick:()=>n("blog"),className:"footer-btn",children:"Blog"})}),p.jsx("li",{children:p.jsx("button",{onClick:()=>n("privacy"),className:"footer-btn",children:"Privacy Policy"})})]})]}),p.jsxs("div",{children:[p.jsx("h5",{style:{fontFamily:"var(--font-heading)",color:"#0F172A",fontSize:"1rem",fontWeight:800,marginBottom:"16px"},children:"Resources & Portfolio"}),p.jsxs("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"10px"},children:[p.jsx("li",{children:p.jsx("button",{onClick:()=>n("home","about"),className:"footer-btn",children:"Success Stories (Case Studies)"})}),p.jsx("li",{children:p.jsx("button",{onClick:()=>n("techstack"),className:"footer-btn",children:"Developer Resources"})}),p.jsx("li",{children:p.jsx("button",{onClick:()=>n("home","future"),className:"footer-btn",children:"Next-Gen Frontiers"})}),p.jsx("li",{children:p.jsx("button",{onClick:()=>n("home","philosophy"),className:"footer-btn",children:"Our Philosophy"})})]})]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsx("h5",{style:{fontFamily:"var(--font-heading)",color:"#0F172A",fontSize:"1rem",fontWeight:800,marginBottom:"16px"},children:"Follow Us & Stay Connected"}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.6,marginBottom:"16px"},children:"Connect with our official channels for the latest updates, engineering insights, and tech news."}),p.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:i.map((r,s)=>{const o=r.icon;return p.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",title:r.name,style:{width:"38px",height:"38px",borderRadius:"10px",background:"#F0F9FF",border:"1px solid rgba(0, 163, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#0284C7",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(0, 163, 255, 0.1)"},className:"social-icon-btn",children:p.jsx(o,{size:18})},s)})})]}),p.jsxs("button",{onClick:e,style:{marginTop:"24px",padding:"10px 18px",borderRadius:"10px",background:"#F0F9FF",border:"1px solid rgba(0, 163, 255, 0.3)",color:"#0284C7",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.85rem",fontFamily:"var(--font-heading)",fontWeight:700},children:[p.jsx("span",{children:"Back to Top"}),p.jsx(xw,{size:16})]})]})]}),p.jsxs("div",{style:{borderTop:"1px solid rgba(56, 189, 248, 0.2)",paddingTop:"24px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px",fontSize:"0.88rem",color:"var(--text-dim)"},children:[p.jsx("div",{children:"© 2026 Copyright Blueidealteck All Rights Reserved"}),p.jsx("div",{children:"Dedicated Multi-Page Router (Home, Tech Stack, Blog)."})]})]}),p.jsx("style",{children:`
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
      `})]})}function fT(){const[t,e]=$e.useState("home"),n=i=>{e(i),window.scrollTo({top:0,behavior:"smooth"})};return p.jsxs("div",{style:{position:"relative",width:"100%",minHeight:"100vh"},children:[p.jsx(mw,{page:t}),p.jsx(uT,{}),p.jsxs("div",{style:{position:"relative",zIndex:1},children:[p.jsx(Xw,{currentPage:t,onNavigate:n}),p.jsxs("main",{children:[t==="home"&&p.jsxs(p.Fragment,{children:[p.jsx(qw,{}),p.jsx($w,{}),p.jsx(Kw,{}),p.jsx(Qw,{}),p.jsx(eT,{}),p.jsx(iT,{}),p.jsx(rT,{})]}),t==="blog"&&p.jsx(aT,{onNavigateHome:()=>n("home")}),t==="techstack"&&p.jsx(lT,{onNavigateHome:()=>n("home")}),t==="privacy"&&p.jsx(cT,{onNavigateHome:()=>n("home")})]}),p.jsx(dT,{onNavigate:n})]})]})}su.createRoot(document.getElementById("root")).render(p.jsx(Fv.StrictMode,{children:p.jsx(fT,{})}));
