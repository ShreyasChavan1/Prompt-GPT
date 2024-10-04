(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var yy={exports:{}},Fl={},_y={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),Sw=Symbol.for("react.portal"),Rw=Symbol.for("react.fragment"),Cw=Symbol.for("react.strict_mode"),kw=Symbol.for("react.profiler"),Pw=Symbol.for("react.provider"),Nw=Symbol.for("react.context"),Ow=Symbol.for("react.forward_ref"),Dw=Symbol.for("react.suspense"),Vw=Symbol.for("react.memo"),xw=Symbol.for("react.lazy"),Pp=Symbol.iterator;function Lw(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var vy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ey=Object.assign,wy={};function Hi(t,e,n){this.props=t,this.context=e,this.refs=wy,this.updater=n||vy}Hi.prototype.isReactComponent={};Hi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ay(){}Ay.prototype=Hi.prototype;function Hh(t,e,n){this.props=t,this.context=e,this.refs=wy,this.updater=n||vy}var Kh=Hh.prototype=new Ay;Kh.constructor=Hh;Ey(Kh,Hi.prototype);Kh.isPureReactComponent=!0;var Np=Array.isArray,Ty=Object.prototype.hasOwnProperty,qh={current:null},Iy={key:!0,ref:!0,__self:!0,__source:!0};function Sy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ty.call(e,r)&&!Iy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wo,type:t,key:s,ref:o,props:i,_owner:qh.current}}function Mw(t,e){return{$$typeof:wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gh(t){return typeof t=="object"&&t!==null&&t.$$typeof===wo}function Uw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Op=/\/+/g;function Hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Uw(""+t.key):e.toString(36)}function ka(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wo:case Sw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hu(o,0):r,Np(i)?(n="",t!=null&&(n=t.replace(Op,"$&/")+"/"),ka(i,e,n,"",function(h){return h})):i!=null&&(Gh(i)&&(i=Mw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Op,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Np(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Hu(s,l);o+=ka(s,e,n,u,i)}else if(u=Lw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Hu(s,l++),o+=ka(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sa(t,e,n){if(t==null)return t;var r=[],i=0;return ka(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Pa={transition:null},Fw={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Pa,ReactCurrentOwner:qh};function Ry(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:sa,forEach:function(t,e,n){sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sa(t,function(){e++}),e},toArray:function(t){return sa(t,function(e){return e})||[]},only:function(t){if(!Gh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=Hi;J.Fragment=Rw;J.Profiler=kw;J.PureComponent=Hh;J.StrictMode=Cw;J.Suspense=Dw;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fw;J.act=Ry;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ey({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ty.call(e,u)&&!Iy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:wo,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:Nw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Pw,_context:t},t.Consumer=t};J.createElement=Sy;J.createFactory=function(t){var e=Sy.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:Ow,render:t}};J.isValidElement=Gh;J.lazy=function(t){return{$$typeof:xw,_payload:{_status:-1,_result:t},_init:bw}};J.memo=function(t,e){return{$$typeof:Vw,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=Pa.transition;Pa.transition={};try{t()}finally{Pa.transition=e}};J.unstable_act=Ry;J.useCallback=function(t,e){return ot.current.useCallback(t,e)};J.useContext=function(t){return ot.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};J.useEffect=function(t,e){return ot.current.useEffect(t,e)};J.useId=function(){return ot.current.useId()};J.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return ot.current.useMemo(t,e)};J.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};J.useRef=function(t){return ot.current.useRef(t)};J.useState=function(t){return ot.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return ot.current.useTransition()};J.version="18.3.1";_y.exports=J;var Ee=_y.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bw=Ee,jw=Symbol.for("react.element"),zw=Symbol.for("react.fragment"),Ww=Object.prototype.hasOwnProperty,Hw=Bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kw={key:!0,ref:!0,__self:!0,__source:!0};function Cy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ww.call(e,r)&&!Kw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jw,type:t,key:s,ref:o,props:i,_owner:Hw.current}}Fl.Fragment=zw;Fl.jsx=Cy;Fl.jsxs=Cy;yy.exports=Fl;var M=yy.exports,ky={exports:{}},At={},Py={exports:{}},Ny={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,G){var X=j.length;j.push(G);e:for(;0<X;){var pe=X-1>>>1,ae=j[pe];if(0<i(ae,G))j[pe]=G,j[X]=ae,X=pe;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var G=j[0],X=j.pop();if(X!==G){j[0]=X;e:for(var pe=0,ae=j.length,Te=ae>>>1;pe<Te;){var on=2*(pe+1)-1,an=j[on],ln=on+1,un=j[ln];if(0>i(an,X))ln<ae&&0>i(un,an)?(j[pe]=un,j[ln]=X,pe=ln):(j[pe]=an,j[on]=X,pe=on);else if(ln<ae&&0>i(un,X))j[pe]=un,j[ln]=X,pe=ln;else break e}}return G}function i(j,G){var X=j.sortIndex-G.sortIndex;return X!==0?X:j.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,g=null,m=3,A=!1,C=!1,N=!1,V=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(j){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=j)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function D(j){if(N=!1,S(j),!C)if(n(u)!==null)C=!0,Xi(F);else{var G=n(h);G!==null&&sn(D,G.startTime-j)}}function F(j,G){C=!1,N&&(N=!1,I(y),y=-1),A=!0;var X=m;try{for(S(G),g=n(u);g!==null&&(!(g.expirationTime>G)||j&&!R());){var pe=g.callback;if(typeof pe=="function"){g.callback=null,m=g.priorityLevel;var ae=pe(g.expirationTime<=G);G=t.unstable_now(),typeof ae=="function"?g.callback=ae:g===n(u)&&r(u),S(G)}else r(u);g=n(u)}if(g!==null)var Te=!0;else{var on=n(h);on!==null&&sn(D,on.startTime-G),Te=!1}return Te}finally{g=null,m=X,A=!1}}var b=!1,v=null,y=-1,_=5,w=-1;function R(){return!(t.unstable_now()-w<_)}function P(){if(v!==null){var j=t.unstable_now();w=j;var G=!0;try{G=v(!0,j)}finally{G?T():(b=!1,v=null)}}else b=!1}var T;if(typeof E=="function")T=function(){E(P)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,yr=It.port2;It.port1.onmessage=P,T=function(){yr.postMessage(null)}}else T=function(){V(P,0)};function Xi(j){v=j,b||(b=!0,T())}function sn(j,G){y=V(function(){j(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){C||A||(C=!0,Xi(F))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(m){case 1:case 2:case 3:var G=3;break;default:G=m}var X=m;m=G;try{return j()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,G){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var X=m;m=j;try{return G()}finally{m=X}},t.unstable_scheduleCallback=function(j,G,X){var pe=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?pe+X:pe):X=pe,j){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=X+ae,j={id:f++,callback:G,priorityLevel:j,startTime:X,expirationTime:ae,sortIndex:-1},X>pe?(j.sortIndex=X,e(h,j),n(u)===null&&j===n(h)&&(N?(I(y),y=-1):N=!0,sn(D,X-pe))):(j.sortIndex=ae,e(u,j),C||A||(C=!0,Xi(F))),j},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(j){var G=m;return function(){var X=m;m=G;try{return j.apply(this,arguments)}finally{m=X}}}})(Ny);Py.exports=Ny;var qw=Py.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gw=Ee,wt=qw;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oy=new Set,Ks={};function Kr(t,e){Pi(t,e),Pi(t+"Capture",e)}function Pi(t,e){for(Ks[t]=e,t=0;t<e.length;t++)Oy.add(e[t])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=Object.prototype.hasOwnProperty,Qw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dp={},Vp={};function $w(t){return kc.call(Vp,t)?!0:kc.call(Dp,t)?!1:Qw.test(t)?Vp[t]=!0:(Dp[t]=!0,!1)}function Yw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Xw(t,e,n,r){if(e===null||typeof e>"u"||Yw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qh=/[\-:]([a-z])/g;function $h(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qh,$h);ze[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qh,$h);ze[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qh,$h);ze[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yh(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Xw(e,n,i,r)&&(n=null),r||i===null?$w(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pn=Gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oa=Symbol.for("react.element"),oi=Symbol.for("react.portal"),ai=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),Pc=Symbol.for("react.profiler"),Dy=Symbol.for("react.provider"),Vy=Symbol.for("react.context"),Jh=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Oc=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),xy=Symbol.for("react.offscreen"),xp=Symbol.iterator;function hs(t){return t===null||typeof t!="object"?null:(t=xp&&t[xp]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,Ku;function Es(t){if(Ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ku=e&&e[1]||""}return`
`+Ku+t}var qu=!1;function Gu(t,e){if(!t||qu)return"";qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Es(t):""}function Jw(t){switch(t.tag){case 5:return Es(t.type);case 16:return Es("Lazy");case 13:return Es("Suspense");case 19:return Es("SuspenseList");case 0:case 2:case 15:return t=Gu(t.type,!1),t;case 11:return t=Gu(t.type.render,!1),t;case 1:return t=Gu(t.type,!0),t;default:return""}}function Dc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ai:return"Fragment";case oi:return"Portal";case Pc:return"Profiler";case Xh:return"StrictMode";case Nc:return"Suspense";case Oc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vy:return(t.displayName||"Context")+".Consumer";case Dy:return(t._context.displayName||"Context")+".Provider";case Jh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zh:return e=t.displayName||null,e!==null?e:Dc(t.type)||"Memo";case Ln:e=t._payload,t=t._init;try{return Dc(t(e))}catch{}}return null}function Zw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dc(e);case 8:return e===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ly(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function eA(t){var e=Ly(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function aa(t){t._valueTracker||(t._valueTracker=eA(t))}function My(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ly(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vc(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Uy(t,e){e=e.checked,e!=null&&Yh(t,"checked",e,!1)}function xc(t,e){Uy(t,e);var n=sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lc(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lc(t,e,n){(e!=="number"||$a(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ws=Array.isArray;function vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Mc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ws(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function by(t,e){var n=sr(e.value),r=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var la,By=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(la=la||document.createElement("div"),la.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=la.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tA=["Webkit","ms","Moz","O"];Object.keys(Ps).forEach(function(t){tA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ps[e]=Ps[t]})});function jy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ps.hasOwnProperty(t)&&Ps[t]?(""+e).trim():e+"px"}function zy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var nA=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bc(t,e){if(e){if(nA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bc=null;function ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jc=null,Ei=null,wi=null;function Fp(t){if(t=Io(t)){if(typeof jc!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Hl(e),jc(t.stateNode,t.type,e))}}function Wy(t){Ei?wi?wi.push(t):wi=[t]:Ei=t}function Hy(){if(Ei){var t=Ei,e=wi;if(wi=Ei=null,Fp(t),e)for(t=0;t<e.length;t++)Fp(e[t])}}function Ky(t,e){return t(e)}function qy(){}var Qu=!1;function Gy(t,e,n){if(Qu)return t(e,n);Qu=!0;try{return Ky(t,e,n)}finally{Qu=!1,(Ei!==null||wi!==null)&&(qy(),Hy())}}function Gs(t,e){var n=t.stateNode;if(n===null)return null;var r=Hl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var zc=!1;if(wn)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){zc=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{zc=!1}function rA(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ns=!1,Ya=null,Xa=!1,Wc=null,iA={onError:function(t){Ns=!0,Ya=t}};function sA(t,e,n,r,i,s,o,l,u){Ns=!1,Ya=null,rA.apply(iA,arguments)}function oA(t,e,n,r,i,s,o,l,u){if(sA.apply(this,arguments),Ns){if(Ns){var h=Ya;Ns=!1,Ya=null}else throw Error(U(198));Xa||(Xa=!0,Wc=h)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bp(t){if(qr(t)!==t)throw Error(U(188))}function aA(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bp(i),t;if(s===r)return Bp(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function $y(t){return t=aA(t),t!==null?Yy(t):null}function Yy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yy(t);if(e!==null)return e;t=t.sibling}return null}var Xy=wt.unstable_scheduleCallback,jp=wt.unstable_cancelCallback,lA=wt.unstable_shouldYield,uA=wt.unstable_requestPaint,Se=wt.unstable_now,cA=wt.unstable_getCurrentPriorityLevel,td=wt.unstable_ImmediatePriority,Jy=wt.unstable_UserBlockingPriority,Ja=wt.unstable_NormalPriority,hA=wt.unstable_LowPriority,Zy=wt.unstable_IdlePriority,Bl=null,Kt=null;function dA(t){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:mA,fA=Math.log,pA=Math.LN2;function mA(t){return t>>>=0,t===0?32:31-(fA(t)/pA|0)|0}var ua=64,ca=4194304;function As(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Za(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=As(l):(s&=o,s!==0&&(r=As(s)))}else o=n&~i,o!==0?r=As(o):s!==0&&(r=As(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function gA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=gA(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Hc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e_(){var t=ua;return ua<<=1,!(ua&4194240)&&(ua=64),t}function $u(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function _A(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function t_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n_,rd,r_,i_,s_,Kc=!1,ha=[],Gn=null,Qn=null,$n=null,Qs=new Map,$s=new Map,bn=[],vA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(t,e){switch(t){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(e.pointerId)}}function fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Io(e),e!==null&&rd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function EA(t,e,n,r,i){switch(e){case"focusin":return Gn=fs(Gn,t,e,n,r,i),!0;case"dragenter":return Qn=fs(Qn,t,e,n,r,i),!0;case"mouseover":return $n=fs($n,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qs.set(s,fs(Qs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$s.set(s,fs($s.get(s)||null,t,e,n,r,i)),!0}return!1}function o_(t){var e=Sr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qy(n),e!==null){t.blockedOn=e,s_(t.priority,function(){r_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Na(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Bc=r,n.target.dispatchEvent(r),Bc=null}else return e=Io(n),e!==null&&rd(e),t.blockedOn=n,!1;e.shift()}return!0}function Wp(t,e,n){Na(t)&&n.delete(e)}function wA(){Kc=!1,Gn!==null&&Na(Gn)&&(Gn=null),Qn!==null&&Na(Qn)&&(Qn=null),$n!==null&&Na($n)&&($n=null),Qs.forEach(Wp),$s.forEach(Wp)}function ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Kc||(Kc=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,wA)))}function Ys(t){function e(i){return ps(i,t)}if(0<ha.length){ps(ha[0],t);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gn!==null&&ps(Gn,t),Qn!==null&&ps(Qn,t),$n!==null&&ps($n,t),Qs.forEach(e),$s.forEach(e),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)o_(n),n.blockedOn===null&&bn.shift()}var Ai=Pn.ReactCurrentBatchConfig,el=!0;function AA(t,e,n,r){var i=se,s=Ai.transition;Ai.transition=null;try{se=1,id(t,e,n,r)}finally{se=i,Ai.transition=s}}function TA(t,e,n,r){var i=se,s=Ai.transition;Ai.transition=null;try{se=4,id(t,e,n,r)}finally{se=i,Ai.transition=s}}function id(t,e,n,r){if(el){var i=qc(t,e,n,r);if(i===null)sc(t,e,r,tl,n),zp(t,r);else if(EA(i,t,e,n,r))r.stopPropagation();else if(zp(t,r),e&4&&-1<vA.indexOf(t)){for(;i!==null;){var s=Io(i);if(s!==null&&n_(s),s=qc(t,e,n,r),s===null&&sc(t,e,r,tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sc(t,e,r,null,n)}}var tl=null;function qc(t,e,n,r){if(tl=null,t=ed(r),t=Sr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tl=t,null}function a_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cA()){case td:return 1;case Jy:return 4;case Ja:case hA:return 16;case Zy:return 536870912;default:return 16}default:return 16}}var Hn=null,sd=null,Oa=null;function l_(){if(Oa)return Oa;var t,e=sd,n=e.length,r,i="value"in Hn?Hn.value:Hn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Oa=i.slice(t,1<r?1-r:void 0)}function Da(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function da(){return!0}function Hp(){return!1}function Tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?da:Hp,this.isPropagationStopped=Hp,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),e}var Ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},od=Tt(Ki),To=ye({},Ki,{view:0,detail:0}),IA=Tt(To),Yu,Xu,ms,jl=ye({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ms&&(ms&&t.type==="mousemove"?(Yu=t.screenX-ms.screenX,Xu=t.screenY-ms.screenY):Xu=Yu=0,ms=t),Yu)},movementY:function(t){return"movementY"in t?t.movementY:Xu}}),Kp=Tt(jl),SA=ye({},jl,{dataTransfer:0}),RA=Tt(SA),CA=ye({},To,{relatedTarget:0}),Ju=Tt(CA),kA=ye({},Ki,{animationName:0,elapsedTime:0,pseudoElement:0}),PA=Tt(kA),NA=ye({},Ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OA=Tt(NA),DA=ye({},Ki,{data:0}),qp=Tt(DA),VA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LA[t])?!!e[t]:!1}function ad(){return MA}var UA=ye({},To,{key:function(t){if(t.key){var e=VA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ad,charCode:function(t){return t.type==="keypress"?Da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bA=Tt(UA),FA=ye({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=Tt(FA),BA=ye({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ad}),jA=Tt(BA),zA=ye({},Ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),WA=Tt(zA),HA=ye({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KA=Tt(HA),qA=[9,13,27,32],ld=wn&&"CompositionEvent"in window,Os=null;wn&&"documentMode"in document&&(Os=document.documentMode);var GA=wn&&"TextEvent"in window&&!Os,u_=wn&&(!ld||Os&&8<Os&&11>=Os),Qp=" ",$p=!1;function c_(t,e){switch(t){case"keyup":return qA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var li=!1;function QA(t,e){switch(t){case"compositionend":return h_(e);case"keypress":return e.which!==32?null:($p=!0,Qp);case"textInput":return t=e.data,t===Qp&&$p?null:t;default:return null}}function $A(t,e){if(li)return t==="compositionend"||!ld&&c_(t,e)?(t=l_(),Oa=sd=Hn=null,li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return u_&&e.locale!=="ko"?null:e.data;default:return null}}var YA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YA[t.type]:e==="textarea"}function d_(t,e,n,r){Wy(r),e=nl(e,"onChange"),0<e.length&&(n=new od("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ds=null,Xs=null;function XA(t){T_(t,0)}function zl(t){var e=hi(t);if(My(e))return t}function JA(t,e){if(t==="change")return e}var f_=!1;if(wn){var Zu;if(wn){var ec="oninput"in document;if(!ec){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),ec=typeof Xp.oninput=="function"}Zu=ec}else Zu=!1;f_=Zu&&(!document.documentMode||9<document.documentMode)}function Jp(){Ds&&(Ds.detachEvent("onpropertychange",p_),Xs=Ds=null)}function p_(t){if(t.propertyName==="value"&&zl(Xs)){var e=[];d_(e,Xs,t,ed(t)),Gy(XA,e)}}function ZA(t,e,n){t==="focusin"?(Jp(),Ds=e,Xs=n,Ds.attachEvent("onpropertychange",p_)):t==="focusout"&&Jp()}function eT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Xs)}function tT(t,e){if(t==="click")return zl(e)}function nT(t,e){if(t==="input"||t==="change")return zl(e)}function rT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:rT;function Js(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kc.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function em(t,e){var n=Zp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zp(n)}}function m_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g_(){for(var t=window,e=$a();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$a(t.document)}return e}function ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iT(t){var e=g_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m_(n.ownerDocument.documentElement,n)){if(r!==null&&ud(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=em(n,s);var o=em(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sT=wn&&"documentMode"in document&&11>=document.documentMode,ui=null,Gc=null,Vs=null,Qc=!1;function tm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qc||ui==null||ui!==$a(r)||(r=ui,"selectionStart"in r&&ud(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vs&&Js(Vs,r)||(Vs=r,r=nl(Gc,"onSelect"),0<r.length&&(e=new od("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ui)))}function fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ci={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},tc={},y_={};wn&&(y_=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function Wl(t){if(tc[t])return tc[t];if(!ci[t])return t;var e=ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in y_)return tc[t]=e[n];return t}var __=Wl("animationend"),v_=Wl("animationiteration"),E_=Wl("animationstart"),w_=Wl("transitionend"),A_=new Map,nm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){A_.set(t,e),Kr(e,[t])}for(var nc=0;nc<nm.length;nc++){var rc=nm[nc],oT=rc.toLowerCase(),aT=rc[0].toUpperCase()+rc.slice(1);hr(oT,"on"+aT)}hr(__,"onAnimationEnd");hr(v_,"onAnimationIteration");hr(E_,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(w_,"onTransitionEnd");Pi("onMouseEnter",["mouseout","mouseover"]);Pi("onMouseLeave",["mouseout","mouseover"]);Pi("onPointerEnter",["pointerout","pointerover"]);Pi("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));function rm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,oA(r,e,void 0,t),t.currentTarget=null}function T_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;rm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;rm(i,l,h),s=u}}}if(Xa)throw t=Wc,Xa=!1,Wc=null,t}function he(t,e){var n=e[Zc];n===void 0&&(n=e[Zc]=new Set);var r=t+"__bubble";n.has(r)||(I_(e,t,2,!1),n.add(r))}function ic(t,e,n){var r=0;e&&(r|=4),I_(n,t,r,e)}var pa="_reactListening"+Math.random().toString(36).slice(2);function Zs(t){if(!t[pa]){t[pa]=!0,Oy.forEach(function(n){n!=="selectionchange"&&(lT.has(n)||ic(n,!1,t),ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pa]||(e[pa]=!0,ic("selectionchange",!1,e))}}function I_(t,e,n,r){switch(a_(e)){case 1:var i=AA;break;case 4:i=TA;break;default:i=id}n=i.bind(null,e,n,t),i=void 0,!zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Sr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Gy(function(){var h=s,f=ed(n),g=[];e:{var m=A_.get(t);if(m!==void 0){var A=od,C=t;switch(t){case"keypress":if(Da(n)===0)break e;case"keydown":case"keyup":A=bA;break;case"focusin":C="focus",A=Ju;break;case"focusout":C="blur",A=Ju;break;case"beforeblur":case"afterblur":A=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=RA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=jA;break;case __:case v_:case E_:A=PA;break;case w_:A=WA;break;case"scroll":A=IA;break;case"wheel":A=KA;break;case"copy":case"cut":case"paste":A=OA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Gp}var N=(e&4)!==0,V=!N&&t==="scroll",I=N?m!==null?m+"Capture":null:m;N=[];for(var E=h,S;E!==null;){S=E;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,I!==null&&(D=Gs(E,I),D!=null&&N.push(eo(E,D,S)))),V)break;E=E.return}0<N.length&&(m=new A(m,C,null,n,f),g.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",m&&n!==Bc&&(C=n.relatedTarget||n.fromElement)&&(Sr(C)||C[An]))break e;if((A||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,A?(C=n.relatedTarget||n.toElement,A=h,C=C?Sr(C):null,C!==null&&(V=qr(C),C!==V||C.tag!==5&&C.tag!==6)&&(C=null)):(A=null,C=h),A!==C)){if(N=Kp,D="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=Gp,D="onPointerLeave",I="onPointerEnter",E="pointer"),V=A==null?m:hi(A),S=C==null?m:hi(C),m=new N(D,E+"leave",A,n,f),m.target=V,m.relatedTarget=S,D=null,Sr(f)===h&&(N=new N(I,E+"enter",C,n,f),N.target=S,N.relatedTarget=V,D=N),V=D,A&&C)t:{for(N=A,I=C,E=0,S=N;S;S=ti(S))E++;for(S=0,D=I;D;D=ti(D))S++;for(;0<E-S;)N=ti(N),E--;for(;0<S-E;)I=ti(I),S--;for(;E--;){if(N===I||I!==null&&N===I.alternate)break t;N=ti(N),I=ti(I)}N=null}else N=null;A!==null&&im(g,m,A,N,!1),C!==null&&V!==null&&im(g,V,C,N,!0)}}e:{if(m=h?hi(h):window,A=m.nodeName&&m.nodeName.toLowerCase(),A==="select"||A==="input"&&m.type==="file")var F=JA;else if(Yp(m))if(f_)F=nT;else{F=eT;var b=ZA}else(A=m.nodeName)&&A.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=tT);if(F&&(F=F(t,h))){d_(g,F,n,f);break e}b&&b(t,m,h),t==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&Lc(m,"number",m.value)}switch(b=h?hi(h):window,t){case"focusin":(Yp(b)||b.contentEditable==="true")&&(ui=b,Gc=h,Vs=null);break;case"focusout":Vs=Gc=ui=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,tm(g,n,f);break;case"selectionchange":if(sT)break;case"keydown":case"keyup":tm(g,n,f)}var v;if(ld)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else li?c_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(u_&&n.locale!=="ko"&&(li||y!=="onCompositionStart"?y==="onCompositionEnd"&&li&&(v=l_()):(Hn=f,sd="value"in Hn?Hn.value:Hn.textContent,li=!0)),b=nl(h,y),0<b.length&&(y=new qp(y,t,null,n,f),g.push({event:y,listeners:b}),v?y.data=v:(v=h_(n),v!==null&&(y.data=v)))),(v=GA?QA(t,n):$A(t,n))&&(h=nl(h,"onBeforeInput"),0<h.length&&(f=new qp("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=v))}T_(g,e)})}function eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Gs(t,n),s!=null&&r.unshift(eo(t,s,i)),s=Gs(t,e),s!=null&&r.push(eo(t,s,i))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function im(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Gs(n,s),u!=null&&o.unshift(eo(n,u,l))):i||(u=Gs(n,s),u!=null&&o.push(eo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uT=/\r\n?/g,cT=/\u0000|\uFFFD/g;function sm(t){return(typeof t=="string"?t:""+t).replace(uT,`
`).replace(cT,"")}function ma(t,e,n){if(e=sm(e),sm(t)!==e&&n)throw Error(U(425))}function rl(){}var $c=null,Yc=null;function Xc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,hT=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,dT=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(t){return om.resolve(null).then(t).catch(fT)}:Jc;function fT(t){setTimeout(function(){throw t})}function oc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ys(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ys(e)}function Yn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Wt="__reactFiber$"+qi,to="__reactProps$"+qi,An="__reactContainer$"+qi,Zc="__reactEvents$"+qi,pT="__reactListeners$"+qi,mT="__reactHandles$"+qi;function Sr(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[An]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[Wt])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[Wt]||t[An],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Hl(t){return t[to]||null}var eh=[],di=-1;function dr(t){return{current:t}}function de(t){0>di||(t.current=eh[di],eh[di]=null,di--)}function ue(t,e){di++,eh[di]=t.current,t.current=e}var or={},et=dr(or),dt=dr(!1),Dr=or;function Ni(t,e){var n=t.type.contextTypes;if(!n)return or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function il(){de(dt),de(et)}function lm(t,e,n){if(et.current!==or)throw Error(U(168));ue(et,e),ue(dt,n)}function S_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,Zw(t)||"Unknown",i));return ye({},n,r)}function sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Dr=et.current,ue(et,t),ue(dt,dt.current),!0}function um(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=S_(t,e,Dr),r.__reactInternalMemoizedMergedChildContext=t,de(dt),de(et),ue(et,t)):de(dt),ue(dt,n)}var fn=null,Kl=!1,ac=!1;function R_(t){fn===null?fn=[t]:fn.push(t)}function gT(t){Kl=!0,R_(t)}function fr(){if(!ac&&fn!==null){ac=!0;var t=0,e=se;try{var n=fn;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,Kl=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),Xy(td,fr),i}finally{se=e,ac=!1}}return null}var fi=[],pi=0,ol=null,al=0,St=[],Rt=0,Vr=null,pn=1,mn="";function Ar(t,e){fi[pi++]=al,fi[pi++]=ol,ol=t,al=e}function C_(t,e,n){St[Rt++]=pn,St[Rt++]=mn,St[Rt++]=Vr,Vr=t;var r=pn;t=mn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-Ut(e)+i|n<<i|r,mn=s+t}else pn=1<<s|n<<i|r,mn=t}function cd(t){t.return!==null&&(Ar(t,1),C_(t,1,0))}function hd(t){for(;t===ol;)ol=fi[--pi],fi[pi]=null,al=fi[--pi],fi[pi]=null;for(;t===Vr;)Vr=St[--Rt],St[Rt]=null,mn=St[--Rt],St[Rt]=null,pn=St[--Rt],St[Rt]=null}var vt=null,yt=null,fe=!1,Lt=null;function k_(t,e){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,yt=Yn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,yt=null,!0):!1;default:return!1}}function th(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nh(t){if(fe){var e=yt;if(e){var n=e;if(!cm(t,e)){if(th(t))throw Error(U(418));e=Yn(n.nextSibling);var r=vt;e&&cm(t,e)?k_(r,n):(t.flags=t.flags&-4097|2,fe=!1,vt=t)}}else{if(th(t))throw Error(U(418));t.flags=t.flags&-4097|2,fe=!1,vt=t}}}function hm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function ga(t){if(t!==vt)return!1;if(!fe)return hm(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xc(t.type,t.memoizedProps)),e&&(e=yt)){if(th(t))throw P_(),Error(U(418));for(;e;)k_(t,e),e=Yn(e.nextSibling)}if(hm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yt=Yn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yt=null}}else yt=vt?Yn(t.stateNode.nextSibling):null;return!0}function P_(){for(var t=yt;t;)t=Yn(t.nextSibling)}function Oi(){yt=vt=null,fe=!1}function dd(t){Lt===null?Lt=[t]:Lt.push(t)}var yT=Pn.ReactCurrentBatchConfig;function gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ya(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dm(t){var e=t._init;return e(t._payload)}function N_(t){function e(I,E){if(t){var S=I.deletions;S===null?(I.deletions=[E],I.flags|=16):S.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=er(I,E),I.index=0,I.sibling=null,I}function s(I,E,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<E?(I.flags|=2,E):S):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,S,D){return E===null||E.tag!==6?(E=pc(S,I.mode,D),E.return=I,E):(E=i(E,S),E.return=I,E)}function u(I,E,S,D){var F=S.type;return F===ai?f(I,E,S.props.children,D,S.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ln&&dm(F)===E.type)?(D=i(E,S.props),D.ref=gs(I,E,S),D.return=I,D):(D=Fa(S.type,S.key,S.props,null,I.mode,D),D.ref=gs(I,E,S),D.return=I,D)}function h(I,E,S,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=mc(S,I.mode,D),E.return=I,E):(E=i(E,S.children||[]),E.return=I,E)}function f(I,E,S,D,F){return E===null||E.tag!==7?(E=Nr(S,I.mode,D,F),E.return=I,E):(E=i(E,S),E.return=I,E)}function g(I,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=pc(""+E,I.mode,S),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case oa:return S=Fa(E.type,E.key,E.props,null,I.mode,S),S.ref=gs(I,null,E),S.return=I,S;case oi:return E=mc(E,I.mode,S),E.return=I,E;case Ln:var D=E._init;return g(I,D(E._payload),S)}if(ws(E)||hs(E))return E=Nr(E,I.mode,S,null),E.return=I,E;ya(I,E)}return null}function m(I,E,S,D){var F=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:l(I,E,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oa:return S.key===F?u(I,E,S,D):null;case oi:return S.key===F?h(I,E,S,D):null;case Ln:return F=S._init,m(I,E,F(S._payload),D)}if(ws(S)||hs(S))return F!==null?null:f(I,E,S,D,null);ya(I,S)}return null}function A(I,E,S,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(S)||null,l(E,I,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case oa:return I=I.get(D.key===null?S:D.key)||null,u(E,I,D,F);case oi:return I=I.get(D.key===null?S:D.key)||null,h(E,I,D,F);case Ln:var b=D._init;return A(I,E,S,b(D._payload),F)}if(ws(D)||hs(D))return I=I.get(S)||null,f(E,I,D,F,null);ya(E,D)}return null}function C(I,E,S,D){for(var F=null,b=null,v=E,y=E=0,_=null;v!==null&&y<S.length;y++){v.index>y?(_=v,v=null):_=v.sibling;var w=m(I,v,S[y],D);if(w===null){v===null&&(v=_);break}t&&v&&w.alternate===null&&e(I,v),E=s(w,E,y),b===null?F=w:b.sibling=w,b=w,v=_}if(y===S.length)return n(I,v),fe&&Ar(I,y),F;if(v===null){for(;y<S.length;y++)v=g(I,S[y],D),v!==null&&(E=s(v,E,y),b===null?F=v:b.sibling=v,b=v);return fe&&Ar(I,y),F}for(v=r(I,v);y<S.length;y++)_=A(v,I,y,S[y],D),_!==null&&(t&&_.alternate!==null&&v.delete(_.key===null?y:_.key),E=s(_,E,y),b===null?F=_:b.sibling=_,b=_);return t&&v.forEach(function(R){return e(I,R)}),fe&&Ar(I,y),F}function N(I,E,S,D){var F=hs(S);if(typeof F!="function")throw Error(U(150));if(S=F.call(S),S==null)throw Error(U(151));for(var b=F=null,v=E,y=E=0,_=null,w=S.next();v!==null&&!w.done;y++,w=S.next()){v.index>y?(_=v,v=null):_=v.sibling;var R=m(I,v,w.value,D);if(R===null){v===null&&(v=_);break}t&&v&&R.alternate===null&&e(I,v),E=s(R,E,y),b===null?F=R:b.sibling=R,b=R,v=_}if(w.done)return n(I,v),fe&&Ar(I,y),F;if(v===null){for(;!w.done;y++,w=S.next())w=g(I,w.value,D),w!==null&&(E=s(w,E,y),b===null?F=w:b.sibling=w,b=w);return fe&&Ar(I,y),F}for(v=r(I,v);!w.done;y++,w=S.next())w=A(v,I,y,w.value,D),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?y:w.key),E=s(w,E,y),b===null?F=w:b.sibling=w,b=w);return t&&v.forEach(function(P){return e(I,P)}),fe&&Ar(I,y),F}function V(I,E,S,D){if(typeof S=="object"&&S!==null&&S.type===ai&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case oa:e:{for(var F=S.key,b=E;b!==null;){if(b.key===F){if(F=S.type,F===ai){if(b.tag===7){n(I,b.sibling),E=i(b,S.props.children),E.return=I,I=E;break e}}else if(b.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ln&&dm(F)===b.type){n(I,b.sibling),E=i(b,S.props),E.ref=gs(I,b,S),E.return=I,I=E;break e}n(I,b);break}else e(I,b);b=b.sibling}S.type===ai?(E=Nr(S.props.children,I.mode,D,S.key),E.return=I,I=E):(D=Fa(S.type,S.key,S.props,null,I.mode,D),D.ref=gs(I,E,S),D.return=I,I=D)}return o(I);case oi:e:{for(b=S.key;E!==null;){if(E.key===b)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){n(I,E.sibling),E=i(E,S.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=mc(S,I.mode,D),E.return=I,I=E}return o(I);case Ln:return b=S._init,V(I,E,b(S._payload),D)}if(ws(S))return C(I,E,S,D);if(hs(S))return N(I,E,S,D);ya(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,S),E.return=I,I=E):(n(I,E),E=pc(S,I.mode,D),E.return=I,I=E),o(I)):n(I,E)}return V}var Di=N_(!0),O_=N_(!1),ll=dr(null),ul=null,mi=null,fd=null;function pd(){fd=mi=ul=null}function md(t){var e=ll.current;de(ll),t._currentValue=e}function rh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ti(t,e){ul=t,fd=mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function Pt(t){var e=t._currentValue;if(fd!==t)if(t={context:t,memoizedValue:e,next:null},mi===null){if(ul===null)throw Error(U(308));mi=t,ul.dependencies={lanes:0,firstContext:t}}else mi=mi.next=t;return e}var Rr=null;function gd(t){Rr===null?Rr=[t]:Rr.push(t)}function D_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tn(t,r)}function Tn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mn=!1;function yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function V_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tn(t,n)}return i=r.interleaved,i===null?(e.next=e,gd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tn(t,n)}function Va(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nd(t,n)}}function fm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cl(t,e,n,r){var i=t.updateQueue;Mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=h=u=null,l=s;do{var m=l.lane,A=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(m=e,A=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){g=C.call(A,g,m);break e}g=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,m=typeof C=="function"?C.call(A,g,m):C,m==null)break e;g=ye({},g,m);break e;case 2:Mn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else A={eventTime:A,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=g):f=f.next=A,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=g}}function pm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var So={},qt=dr(So),no=dr(So),ro=dr(So);function Cr(t){if(t===So)throw Error(U(174));return t}function _d(t,e){switch(ue(ro,e),ue(no,t),ue(qt,So),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uc(e,t)}de(qt),ue(qt,e)}function Vi(){de(qt),de(no),de(ro)}function x_(t){Cr(ro.current);var e=Cr(qt.current),n=Uc(e,t.type);e!==n&&(ue(no,t),ue(qt,n))}function vd(t){no.current===t&&(de(qt),de(no))}var me=dr(0);function hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lc=[];function Ed(){for(var t=0;t<lc.length;t++)lc[t]._workInProgressVersionPrimary=null;lc.length=0}var xa=Pn.ReactCurrentDispatcher,uc=Pn.ReactCurrentBatchConfig,xr=0,ge=null,ke=null,Ve=null,dl=!1,xs=!1,io=0,_T=0;function Qe(){throw Error(U(321))}function wd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function Ad(t,e,n,r,i,s){if(xr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xa.current=t===null||t.memoizedState===null?AT:TT,t=n(r,i),xs){s=0;do{if(xs=!1,io=0,25<=s)throw Error(U(301));s+=1,Ve=ke=null,e.updateQueue=null,xa.current=IT,t=n(r,i)}while(xs)}if(xa.current=fl,e=ke!==null&&ke.next!==null,xr=0,Ve=ke=ge=null,dl=!1,e)throw Error(U(300));return t}function Td(){var t=io!==0;return io=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ge.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Nt(){if(ke===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Ve===null?ge.memoizedState:Ve.next;if(e!==null)Ve=e,ke=t;else{if(t===null)throw Error(U(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ve===null?ge.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function so(t,e){return typeof e=="function"?e(t):e}function cc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((xr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,ge.lanes|=f,Lr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Ft(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ft(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function L_(){}function M_(t,e){var n=ge,r=Nt(),i=e(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,Id(F_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,oo(9,b_.bind(null,n,r,i,e),void 0,null),xe===null)throw Error(U(349));xr&30||U_(n,e,i)}return i}function U_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b_(t,e,n,r){e.value=n,e.getSnapshot=r,B_(e)&&j_(t)}function F_(t,e,n){return n(function(){B_(e)&&j_(t)})}function B_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function j_(t){var e=Tn(t,1);e!==null&&bt(e,t,1,-1)}function mm(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},e.queue=t,t=t.dispatch=wT.bind(null,ge,t),[e.memoizedState,t]}function oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function z_(){return Nt().memoizedState}function La(t,e,n,r){var i=zt();ge.flags|=t,i.memoizedState=oo(1|e,n,void 0,r===void 0?null:r)}function ql(t,e,n,r){var i=Nt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&wd(r,o.deps)){i.memoizedState=oo(e,n,s,r);return}}ge.flags|=t,i.memoizedState=oo(1|e,n,s,r)}function gm(t,e){return La(8390656,8,t,e)}function Id(t,e){return ql(2048,8,t,e)}function W_(t,e){return ql(4,2,t,e)}function H_(t,e){return ql(4,4,t,e)}function K_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function q_(t,e,n){return n=n!=null?n.concat([t]):null,ql(4,4,K_.bind(null,e,t),n)}function Sd(){}function G_(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Q_(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $_(t,e,n){return xr&21?(Ft(n,e)||(n=e_(),ge.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function vT(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=uc.transition;uc.transition={};try{t(!1),e()}finally{se=n,uc.transition=r}}function Y_(){return Nt().memoizedState}function ET(t,e,n){var r=Zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},X_(t))J_(e,n);else if(n=D_(t,e,n,r),n!==null){var i=st();bt(n,t,r,i),Z_(n,e,r)}}function wT(t,e,n){var r=Zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(X_(t))J_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ft(l,o)){var u=e.interleaved;u===null?(i.next=i,gd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=D_(t,e,i,r),n!==null&&(i=st(),bt(n,t,r,i),Z_(n,e,r))}}function X_(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function J_(t,e){xs=dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Z_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nd(t,n)}}var fl={readContext:Pt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},AT={readContext:Pt,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,La(4194308,4,K_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return La(4194308,4,t,e)},useInsertionEffect:function(t,e){return La(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ET.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:mm,useDebugValue:Sd,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=mm(!1),e=t[0];return t=vT.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=zt();if(fe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),xe===null)throw Error(U(349));xr&30||U_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,gm(F_.bind(null,r,s,t),[t]),r.flags|=2048,oo(9,b_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zt(),e=xe.identifierPrefix;if(fe){var n=mn,r=pn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_T++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TT={readContext:Pt,useCallback:G_,useContext:Pt,useEffect:Id,useImperativeHandle:q_,useInsertionEffect:W_,useLayoutEffect:H_,useMemo:Q_,useReducer:cc,useRef:z_,useState:function(){return cc(so)},useDebugValue:Sd,useDeferredValue:function(t){var e=Nt();return $_(e,ke.memoizedState,t)},useTransition:function(){var t=cc(so)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:L_,useSyncExternalStore:M_,useId:Y_,unstable_isNewReconciler:!1},IT={readContext:Pt,useCallback:G_,useContext:Pt,useEffect:Id,useImperativeHandle:q_,useInsertionEffect:W_,useLayoutEffect:H_,useMemo:Q_,useReducer:hc,useRef:z_,useState:function(){return hc(so)},useDebugValue:Sd,useDeferredValue:function(t){var e=Nt();return ke===null?e.memoizedState=t:$_(e,ke.memoizedState,t)},useTransition:function(){var t=hc(so)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:L_,useSyncExternalStore:M_,useId:Y_,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ih(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gl={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=Zn(t),s=vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(bt(e,t,i,r),Va(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=Zn(t),s=vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(bt(e,t,i,r),Va(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=Zn(t),i=vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xn(t,i,r),e!==null&&(bt(e,t,r,n),Va(e,t,r))}};function ym(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Js(n,r)||!Js(i,s):!0}function ev(t,e,n){var r=!1,i=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Pt(s):(i=ft(e)?Dr:et.current,r=e.contextTypes,s=(r=r!=null)?Ni(t,i):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _m(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gl.enqueueReplaceState(e,e.state,null)}function sh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},yd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pt(s):(s=ft(e)?Dr:et.current,i.context=Ni(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ih(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Gl.enqueueReplaceState(i,i.state,null),cl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xi(t,e){try{var n="",r=e;do n+=Jw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function oh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ST=typeof WeakMap=="function"?WeakMap:Map;function tv(t,e,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ml||(ml=!0,gh=r),oh(t,e)},n}function nv(t,e,n){n=vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){oh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){oh(t,e),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ST;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=FT.bind(null,t,e,n),e.then(t,t))}function Em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vn(-1,1),e.tag=2,Xn(n,e,1))),n.lanes|=1),t)}var RT=Pn.ReactCurrentOwner,ht=!1;function it(t,e,n,r){e.child=t===null?O_(e,null,n,r):Di(e,t.child,n,r)}function Am(t,e,n,r,i){n=n.render;var s=e.ref;return Ti(e,i),r=Ad(t,e,n,r,s,i),n=Td(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(fe&&n&&cd(e),e.flags|=1,it(t,e,r,i),e.child)}function Tm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,rv(t,e,s,r,i)):(t=Fa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Js,n(o,r)&&t.ref===e.ref)return In(t,e,i)}return e.flags|=1,t=er(s,r),t.ref=e.ref,t.return=e,e.child=t}function rv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Js(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,In(t,e,i)}return ah(t,e,n,r,i)}function iv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(yi,gt),gt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(yi,gt),gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(yi,gt),gt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(yi,gt),gt|=r;return it(t,e,i,n),e.child}function sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ah(t,e,n,r,i){var s=ft(n)?Dr:et.current;return s=Ni(e,s),Ti(e,i),n=Ad(t,e,n,r,s,i),r=Td(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(fe&&r&&cd(e),e.flags|=1,it(t,e,n,i),e.child)}function Im(t,e,n,r,i){if(ft(n)){var s=!0;sl(e)}else s=!1;if(Ti(e,i),e.stateNode===null)Ma(t,e),ev(e,n,r),sh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Pt(h):(h=ft(n)?Dr:et.current,h=Ni(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&_m(e,o,r,h),Mn=!1;var m=e.memoizedState;o.state=m,cl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||dt.current||Mn?(typeof f=="function"&&(ih(e,n,f,r),u=e.memoizedState),(l=Mn||ym(e,n,l,r,m,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,V_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Vt(e.type,l),o.props=h,g=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pt(u):(u=ft(n)?Dr:et.current,u=Ni(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||m!==u)&&_m(e,o,r,u),Mn=!1,m=e.memoizedState,o.state=m,cl(e,r,o,i);var C=e.memoizedState;l!==g||m!==C||dt.current||Mn?(typeof A=="function"&&(ih(e,n,A,r),C=e.memoizedState),(h=Mn||ym(e,n,h,r,m,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return lh(t,e,n,r,s,i)}function lh(t,e,n,r,i,s){sv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&um(e,n,!1),In(t,e,s);r=e.stateNode,RT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Di(e,t.child,null,s),e.child=Di(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&um(e,n,!0),e.child}function ov(t){var e=t.stateNode;e.pendingContext?lm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lm(t,e.context,!1),_d(t,e.containerInfo)}function Sm(t,e,n,r,i){return Oi(),dd(i),e.flags|=256,it(t,e,n,r),e.child}var uh={dehydrated:null,treeContext:null,retryLane:0};function ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function av(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(me,i&1),t===null)return nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yl(o,r,0,null),t=Nr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ch(n),e.memoizedState=uh,t):Rd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return CT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=er(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=er(l,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ch(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=uh,r}return s=t.child,t=s.sibling,r=er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rd(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _a(t,e,n,r){return r!==null&&dd(r),Di(e,t.child,null,n),t=Rd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function CT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=dc(Error(U(422))),_a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yl({mode:"visible",children:r.children},i,0,null),s=Nr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Di(e,t.child,null,o),e.child.memoizedState=ch(o),e.memoizedState=uh,s);if(!(e.mode&1))return _a(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=dc(s,r,void 0),_a(t,e,o,r)}if(l=(o&t.childLanes)!==0,ht||l){if(r=xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tn(t,i),bt(r,t,i,-1))}return Dd(),r=dc(Error(U(421))),_a(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=BT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,yt=Yn(i.nextSibling),vt=e,fe=!0,Lt=null,t!==null&&(St[Rt++]=pn,St[Rt++]=mn,St[Rt++]=Vr,pn=t.id,mn=t.overflow,Vr=e),e=Rd(e,r.children),e.flags|=4096,e)}function Rm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rh(t.return,e,n)}function fc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function lv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,n,e);else if(t.tag===19)Rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fc(e,!0,n,null,s);break;case"together":fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ma(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kT(t,e,n){switch(e.tag){case 3:ov(e),Oi();break;case 5:x_(e);break;case 1:ft(e.type)&&sl(e);break;case 4:_d(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(ll,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?av(t,e,n):(ue(me,me.current&1),t=In(t,e,n),t!==null?t.sibling:null);ue(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return lv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,iv(t,e,n)}return In(t,e,n)}var uv,hh,cv,hv;uv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hh=function(){};cv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Cr(qt.current);var s=null;switch(n){case"input":i=Vc(t,i),r=Vc(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=Mc(t,i),r=Mc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rl)}bc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ks.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&he("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};hv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ys(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function PT(t,e,n){var r=e.pendingProps;switch(hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return ft(e.type)&&il(),$e(e),null;case 3:return r=e.stateNode,Vi(),de(dt),de(et),Ed(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Lt!==null&&(vh(Lt),Lt=null))),hh(t,e),$e(e),null;case 5:vd(e);var i=Cr(ro.current);if(n=e.type,t!==null&&e.stateNode!=null)cv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return $e(e),null}if(t=Cr(qt.current),ga(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wt]=e,r[to]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<Ts.length;i++)he(Ts[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Lp(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":Up(r,s),he("invalid",r)}bc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ma(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ma(r.textContent,l,t),i=["children",""+l]):Ks.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":aa(r),Mp(r,s,!0);break;case"textarea":aa(r),bp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wt]=e,t[to]=r,uv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fc(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ts.length;i++)he(Ts[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":Lp(t,r),i=Vc(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),he("invalid",t);break;case"textarea":Up(t,r),i=Mc(t,r),he("invalid",t);break;default:i=r}bc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?zy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&By(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&qs(t,u):typeof u=="number"&&qs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ks.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&Yh(t,s,u,o))}switch(n){case"input":aa(t),Mp(t,r,!1);break;case"textarea":aa(t),bp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)hv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Cr(ro.current),Cr(qt.current),ga(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return $e(e),null;case 13:if(de(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&yt!==null&&e.mode&1&&!(e.flags&128))P_(),Oi(),e.flags|=98560,s=!1;else if(s=ga(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Wt]=e}else Oi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else Lt!==null&&(vh(Lt),Lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Ne===0&&(Ne=3):Dd())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return Vi(),hh(t,e),t===null&&Zs(e.stateNode.containerInfo),$e(e),null;case 10:return md(e.type._context),$e(e),null;case 17:return ft(e.type)&&il(),$e(e),null;case 19:if(de(me),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ys(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hl(t),o!==null){for(e.flags|=128,ys(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>Li&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304)}else{if(!r)if(t=hl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return $e(e),null}else 2*Se()-s.renderingStartTime>Li&&n!==1073741824&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=me.current,ue(me,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return Od(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?gt&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function NT(t,e){switch(hd(e),e.tag){case 1:return ft(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vi(),de(dt),de(et),Ed(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vd(e),null;case 13:if(de(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(me),null;case 4:return Vi(),null;case 10:return md(e.type._context),null;case 22:case 23:return Od(),null;case 24:return null;default:return null}}var va=!1,Je=!1,OT=typeof WeakSet=="function"?WeakSet:Set,z=null;function gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function dh(t,e,n){try{n()}catch(r){we(t,e,r)}}var Cm=!1;function DT(t,e){if($c=el,t=g_(),ud(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,g=t,m=null;t:for(;;){for(var A;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(A=g.firstChild)!==null;)m=g,g=A;for(;;){if(g===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++f===r&&(u=o),(A=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yc={focusedElem:t,selectionRange:n},el=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,V=C.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:Vt(e.type,N),V);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){we(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return C=Cm,Cm=!1,C}function Ls(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dh(e,n,s)}i=i.next}while(i!==r)}}function Ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dv(t){var e=t.alternate;e!==null&&(t.alternate=null,dv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[to],delete e[Zc],delete e[pT],delete e[mT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fv(t){return t.tag===5||t.tag===3||t.tag===4}function km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rl));else if(r!==4&&(t=t.child,t!==null))for(ph(t,e,n),t=t.sibling;t!==null;)ph(t,e,n),t=t.sibling}function mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}var Me=null,xt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)pv(t,e,n),n=n.sibling}function pv(t,e,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:Je||gi(n,e);case 6:var r=Me,i=xt;Me=null,Vn(t,e,n),Me=r,xt=i,Me!==null&&(xt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(xt?(t=Me,n=n.stateNode,t.nodeType===8?oc(t.parentNode,n):t.nodeType===1&&oc(t,n),Ys(t)):oc(Me,n.stateNode));break;case 4:r=Me,i=xt,Me=n.stateNode.containerInfo,xt=!0,Vn(t,e,n),Me=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dh(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!Je&&(gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){we(n,e,l)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Vn(t,e,n),Je=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OT),e.forEach(function(r){var i=jT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,xt=!1;break e;case 3:Me=l.stateNode.containerInfo,xt=!0;break e;case 4:Me=l.stateNode.containerInfo,xt=!0;break e}l=l.return}if(Me===null)throw Error(U(160));pv(s,o,i),Me=null,xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){we(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mv(e,t),e=e.sibling}function mv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),jt(t),r&4){try{Ls(3,t,t.return),Ql(3,t)}catch(N){we(t,t.return,N)}try{Ls(5,t,t.return)}catch(N){we(t,t.return,N)}}break;case 1:Dt(e,t),jt(t),r&512&&n!==null&&gi(n,n.return);break;case 5:if(Dt(e,t),jt(t),r&512&&n!==null&&gi(n,n.return),t.flags&32){var i=t.stateNode;try{qs(i,"")}catch(N){we(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Uy(i,s),Fc(l,o);var h=Fc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?zy(i,g):f==="dangerouslySetInnerHTML"?By(i,g):f==="children"?qs(i,g):Yh(i,f,g,h)}switch(l){case"input":xc(i,s);break;case"textarea":by(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?vi(i,!!s.multiple,A,!1):m!==!!s.multiple&&(s.defaultValue!=null?vi(i,!!s.multiple,s.defaultValue,!0):vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[to]=s}catch(N){we(t,t.return,N)}}break;case 6:if(Dt(e,t),jt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){we(t,t.return,N)}}break;case 3:if(Dt(e,t),jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ys(e.containerInfo)}catch(N){we(t,t.return,N)}break;case 4:Dt(e,t),jt(t);break;case 13:Dt(e,t),jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pd=Se())),r&4&&Pm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||f,Dt(e,t),Je=h):Dt(e,t),jt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(z=t,f=t.child;f!==null;){for(g=z=f;z!==null;){switch(m=z,A=m.child,m.tag){case 0:case 11:case 14:case 15:Ls(4,m,m.return);break;case 1:gi(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){we(r,n,N)}}break;case 5:gi(m,m.return);break;case 22:if(m.memoizedState!==null){Om(g);continue}}A!==null?(A.return=m,z=A):Om(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=jy("display",o))}catch(N){we(t,t.return,N)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(N){we(t,t.return,N)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Dt(e,t),jt(t),r&4&&Pm(t);break;case 21:break;default:Dt(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(fv(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qs(i,""),r.flags&=-33);var s=km(t);mh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=km(t);ph(t,l,o);break;default:throw Error(U(161))}}catch(u){we(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VT(t,e,n){z=t,gv(t)}function gv(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||va;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=va;var h=Je;if(va=o,(Je=u)&&!h)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?Dm(i):u!==null?(u.return=o,z=u):Dm(i);for(;s!==null;)z=s,gv(s),s=s.sibling;z=i,va=l,Je=h}Nm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):Nm(t)}}function Nm(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Ql(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Ys(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Je||e.flags&512&&fh(e)}catch(m){we(e,e.return,m)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function Om(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function Dm(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ql(4,e)}catch(u){we(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){we(e,i,u)}}var s=e.return;try{fh(e)}catch(u){we(e,s,u)}break;case 5:var o=e.return;try{fh(e)}catch(u){we(e,o,u)}}}catch(u){we(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var xT=Math.ceil,pl=Pn.ReactCurrentDispatcher,Cd=Pn.ReactCurrentOwner,kt=Pn.ReactCurrentBatchConfig,ne=0,xe=null,Ce=null,Be=0,gt=0,yi=dr(0),Ne=0,ao=null,Lr=0,$l=0,kd=0,Ms=null,lt=null,Pd=0,Li=1/0,dn=null,ml=!1,gh=null,Jn=null,Ea=!1,Kn=null,gl=0,Us=0,yh=null,Ua=-1,ba=0;function st(){return ne&6?Se():Ua!==-1?Ua:Ua=Se()}function Zn(t){return t.mode&1?ne&2&&Be!==0?Be&-Be:yT.transition!==null?(ba===0&&(ba=e_()),ba):(t=se,t!==0||(t=window.event,t=t===void 0?16:a_(t.type)),t):1}function bt(t,e,n,r){if(50<Us)throw Us=0,yh=null,Error(U(185));Ao(t,n,r),(!(ne&2)||t!==xe)&&(t===xe&&(!(ne&2)&&($l|=n),Ne===4&&Fn(t,Be)),pt(t,r),n===1&&ne===0&&!(e.mode&1)&&(Li=Se()+500,Kl&&fr()))}function pt(t,e){var n=t.callbackNode;yA(t,e);var r=Za(t,t===xe?Be:0);if(r===0)n!==null&&jp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jp(n),e===1)t.tag===0?gT(Vm.bind(null,t)):R_(Vm.bind(null,t)),dT(function(){!(ne&6)&&fr()}),n=null;else{switch(t_(r)){case 1:n=td;break;case 4:n=Jy;break;case 16:n=Ja;break;case 536870912:n=Zy;break;default:n=Ja}n=Iv(n,yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yv(t,e){if(Ua=-1,ba=0,ne&6)throw Error(U(327));var n=t.callbackNode;if(Ii()&&t.callbackNode!==n)return null;var r=Za(t,t===xe?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yl(t,r);else{e=r;var i=ne;ne|=2;var s=vv();(xe!==t||Be!==e)&&(dn=null,Li=Se()+500,Pr(t,e));do try{UT();break}catch(l){_v(t,l)}while(!0);pd(),pl.current=s,ne=i,Ce!==null?e=0:(xe=null,Be=0,e=Ne)}if(e!==0){if(e===2&&(i=Hc(t),i!==0&&(r=i,e=_h(t,i))),e===1)throw n=ao,Pr(t,0),Fn(t,r),pt(t,Se()),n;if(e===6)Fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!LT(i)&&(e=yl(t,r),e===2&&(s=Hc(t),s!==0&&(r=s,e=_h(t,s))),e===1))throw n=ao,Pr(t,0),Fn(t,r),pt(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Tr(t,lt,dn);break;case 3:if(Fn(t,r),(r&130023424)===r&&(e=Pd+500-Se(),10<e)){if(Za(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jc(Tr.bind(null,t,lt,dn),e);break}Tr(t,lt,dn);break;case 4:if(Fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xT(r/1960))-r,10<r){t.timeoutHandle=Jc(Tr.bind(null,t,lt,dn),r);break}Tr(t,lt,dn);break;case 5:Tr(t,lt,dn);break;default:throw Error(U(329))}}}return pt(t,Se()),t.callbackNode===n?yv.bind(null,t):null}function _h(t,e){var n=Ms;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=yl(t,e),t!==2&&(e=lt,lt=n,e!==null&&vh(e)),t}function vh(t){lt===null?lt=t:lt.push.apply(lt,t)}function LT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fn(t,e){for(e&=~kd,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function Vm(t){if(ne&6)throw Error(U(327));Ii();var e=Za(t,0);if(!(e&1))return pt(t,Se()),null;var n=yl(t,e);if(t.tag!==0&&n===2){var r=Hc(t);r!==0&&(e=r,n=_h(t,r))}if(n===1)throw n=ao,Pr(t,0),Fn(t,e),pt(t,Se()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,lt,dn),pt(t,Se()),null}function Nd(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(Li=Se()+500,Kl&&fr())}}function Mr(t){Kn!==null&&Kn.tag===0&&!(ne&6)&&Ii();var e=ne;ne|=1;var n=kt.transition,r=se;try{if(kt.transition=null,se=1,t)return t()}finally{se=r,kt.transition=n,ne=e,!(ne&6)&&fr()}}function Od(){gt=yi.current,de(yi)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hT(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(hd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:Vi(),de(dt),de(et),Ed();break;case 5:vd(r);break;case 4:Vi();break;case 13:de(me);break;case 19:de(me);break;case 10:md(r.type._context);break;case 22:case 23:Od()}n=n.return}if(xe=t,Ce=t=er(t.current,null),Be=gt=e,Ne=0,ao=null,kd=$l=Lr=0,lt=Ms=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Rr=null}return t}function _v(t,e){do{var n=Ce;try{if(pd(),xa.current=fl,dl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dl=!1}if(xr=0,Ve=ke=ge=null,xs=!1,io=0,Cd.current=null,n===null||n.return===null){Ne=1,ao=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Em(o);if(A!==null){A.flags&=-257,wm(A,o,l,s,e),A.mode&1&&vm(s,h,e),e=A,u=h;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){vm(s,h,e),Dd();break e}u=Error(U(426))}}else if(fe&&l.mode&1){var V=Em(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),wm(V,o,l,s,e),dd(xi(u,l));break e}}s=u=xi(u,l),Ne!==4&&(Ne=2),Ms===null?Ms=[s]:Ms.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=tv(s,u,e);fm(s,I);break e;case 1:l=u;var E=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Jn===null||!Jn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=nv(s,l,e);fm(s,D);break e}}s=s.return}while(s!==null)}wv(n)}catch(F){e=F,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function vv(){var t=pl.current;return pl.current=fl,t===null?fl:t}function Dd(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),xe===null||!(Lr&268435455)&&!($l&268435455)||Fn(xe,Be)}function yl(t,e){var n=ne;ne|=2;var r=vv();(xe!==t||Be!==e)&&(dn=null,Pr(t,e));do try{MT();break}catch(i){_v(t,i)}while(!0);if(pd(),ne=n,pl.current=r,Ce!==null)throw Error(U(261));return xe=null,Be=0,Ne}function MT(){for(;Ce!==null;)Ev(Ce)}function UT(){for(;Ce!==null&&!lA();)Ev(Ce)}function Ev(t){var e=Tv(t.alternate,t,gt);t.memoizedProps=t.pendingProps,e===null?wv(t):Ce=e,Cd.current=null}function wv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NT(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Ce=null;return}}else if(n=PT(n,e,gt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Ne===0&&(Ne=5)}function Tr(t,e,n){var r=se,i=kt.transition;try{kt.transition=null,se=1,bT(t,e,n,r)}finally{kt.transition=i,se=r}return null}function bT(t,e,n,r){do Ii();while(Kn!==null);if(ne&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_A(t,s),t===xe&&(Ce=xe=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,Iv(Ja,function(){return Ii(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kt.transition,kt.transition=null;var o=se;se=1;var l=ne;ne|=4,Cd.current=null,DT(t,n),mv(n,t),iT(Yc),el=!!$c,Yc=$c=null,t.current=n,VT(n),uA(),ne=l,se=o,kt.transition=s}else t.current=n;if(Ea&&(Ea=!1,Kn=t,gl=i),s=t.pendingLanes,s===0&&(Jn=null),dA(n.stateNode),pt(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ml)throw ml=!1,t=gh,gh=null,t;return gl&1&&t.tag!==0&&Ii(),s=t.pendingLanes,s&1?t===yh?Us++:(Us=0,yh=t):Us=0,fr(),null}function Ii(){if(Kn!==null){var t=t_(gl),e=kt.transition,n=se;try{if(kt.transition=null,se=16>t?16:t,Kn===null)var r=!1;else{if(t=Kn,Kn=null,gl=0,ne&6)throw Error(U(331));var i=ne;for(ne|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(z=h;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Ls(8,f,s)}var g=f.child;if(g!==null)g.return=f,z=g;else for(;z!==null;){f=z;var m=f.sibling,A=f.return;if(dv(f),f===h){z=null;break}if(m!==null){m.return=A,z=m;break}z=A}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var V=N.sibling;N.sibling=null,N=V}while(N!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ls(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,z=I;break e}z=s.return}}var E=t.current;for(z=E;z!==null;){o=z;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,z=S;else e:for(o=E;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ql(9,l)}}catch(F){we(l,l.return,F)}if(l===o){z=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,z=D;break e}z=l.return}}if(ne=i,fr(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Bl,t)}catch{}r=!0}return r}finally{se=n,kt.transition=e}}return!1}function xm(t,e,n){e=xi(n,e),e=tv(t,e,1),t=Xn(t,e,1),e=st(),t!==null&&(Ao(t,1,e),pt(t,e))}function we(t,e,n){if(t.tag===3)xm(t,t,n);else for(;e!==null;){if(e.tag===3){xm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){t=xi(n,t),t=nv(e,t,1),e=Xn(e,t,1),t=st(),e!==null&&(Ao(e,1,t),pt(e,t));break}}e=e.return}}function FT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,xe===t&&(Be&n)===n&&(Ne===4||Ne===3&&(Be&130023424)===Be&&500>Se()-Pd?Pr(t,0):kd|=n),pt(t,e)}function Av(t,e){e===0&&(t.mode&1?(e=ca,ca<<=1,!(ca&130023424)&&(ca=4194304)):e=1);var n=st();t=Tn(t,e),t!==null&&(Ao(t,e,n),pt(t,n))}function BT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Av(t,n)}function jT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),Av(t,n)}var Tv;Tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,kT(t,e,n);ht=!!(t.flags&131072)}else ht=!1,fe&&e.flags&1048576&&C_(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ma(t,e),t=e.pendingProps;var i=Ni(e,et.current);Ti(e,n),i=Ad(null,e,r,t,i,n);var s=Td();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,sl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yd(e),i.updater=Gl,e.stateNode=i,i._reactInternals=e,sh(e,r,t,n),e=lh(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&cd(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ma(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=WT(r),t=Vt(r,t),i){case 0:e=ah(null,e,r,t,n);break e;case 1:e=Im(null,e,r,t,n);break e;case 11:e=Am(null,e,r,t,n);break e;case 14:e=Tm(null,e,r,Vt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),ah(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Im(t,e,r,i,n);case 3:e:{if(ov(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,V_(t,e),cl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xi(Error(U(423)),e),e=Sm(t,e,r,n,i);break e}else if(r!==i){i=xi(Error(U(424)),e),e=Sm(t,e,r,n,i);break e}else for(yt=Yn(e.stateNode.containerInfo.firstChild),vt=e,fe=!0,Lt=null,n=O_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oi(),r===i){e=In(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return x_(e),t===null&&nh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xc(r,i)?o=null:s!==null&&Xc(r,s)&&(e.flags|=32),sv(t,e),it(t,e,o,n),e.child;case 6:return t===null&&nh(e),null;case 13:return av(t,e,n);case 4:return _d(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Di(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Am(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(ll,r._currentValue),r._currentValue=o,s!==null)if(Ft(s.value,o)){if(s.children===i.children&&!dt.current){e=In(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=vn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),rh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ti(e,n),i=Pt(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),Tm(t,e,r,i,n);case 15:return rv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ma(t,e),e.tag=1,ft(r)?(t=!0,sl(e)):t=!1,Ti(e,n),ev(e,r,i),sh(e,r,i,n),lh(null,e,r,!0,t,n);case 19:return lv(t,e,n);case 22:return iv(t,e,n)}throw Error(U(156,e.tag))};function Iv(t,e){return Xy(t,e)}function zT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,e,n,r){return new zT(t,e,n,r)}function Vd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WT(t){if(typeof t=="function")return Vd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jh)return 11;if(t===Zh)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=Ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ai:return Nr(n.children,i,s,e);case Xh:o=8,i|=8;break;case Pc:return t=Ct(12,n,e,i|2),t.elementType=Pc,t.lanes=s,t;case Nc:return t=Ct(13,n,e,i),t.elementType=Nc,t.lanes=s,t;case Oc:return t=Ct(19,n,e,i),t.elementType=Oc,t.lanes=s,t;case xy:return Yl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dy:o=10;break e;case Vy:o=9;break e;case Jh:o=11;break e;case Zh:o=14;break e;case Ln:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Nr(t,e,n,r){return t=Ct(7,t,r,e),t.lanes=n,t}function Yl(t,e,n,r){return t=Ct(22,t,r,e),t.elementType=xy,t.lanes=n,t.stateNode={isHidden:!1},t}function pc(t,e,n){return t=Ct(6,t,null,e),t.lanes=n,t}function mc(t,e,n){return e=Ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$u(0),this.expirationTimes=$u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xd(t,e,n,r,i,s,o,l,u){return t=new HT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yd(s),t}function KT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Sv(t){if(!t)return or;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(ft(n))return S_(t,n,e)}return e}function Rv(t,e,n,r,i,s,o,l,u){return t=xd(n,r,!0,t,i,s,o,l,u),t.context=Sv(null),n=t.current,r=st(),i=Zn(n),s=vn(r,i),s.callback=e??null,Xn(n,s,i),t.current.lanes=i,Ao(t,i,r),pt(t,r),t}function Xl(t,e,n,r){var i=e.current,s=st(),o=Zn(i);return n=Sv(n),e.context===null?e.context=n:e.pendingContext=n,e=vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xn(i,e,o),t!==null&&(bt(t,i,o,s),Va(t,i,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ld(t,e){Lm(t,e),(t=t.alternate)&&Lm(t,e)}function qT(){return null}var Cv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Md(t){this._internalRoot=t}Jl.prototype.render=Md.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Xl(t,e,null,null)};Jl.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){Xl(null,t,null,null)}),e[An]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=i_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bn.length&&e!==0&&e<bn[n].priority;n++);bn.splice(n,0,t),n===0&&o_(t)}};function Ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function GT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=_l(o);s.call(h)}}var o=Rv(e,r,t,0,null,!1,!1,"",Mm);return t._reactRootContainer=o,t[An]=o.current,Zs(t.nodeType===8?t.parentNode:t),Mr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=_l(u);l.call(h)}}var u=xd(t,0,!1,null,null,!1,!1,"",Mm);return t._reactRootContainer=u,t[An]=u.current,Zs(t.nodeType===8?t.parentNode:t),Mr(function(){Xl(e,u,n,r)}),u}function eu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=_l(o);l.call(u)}}Xl(e,o,t,i)}else o=GT(n,e,t,i,r);return _l(o)}n_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=As(e.pendingLanes);n!==0&&(nd(e,n|1),pt(e,Se()),!(ne&6)&&(Li=Se()+500,fr()))}break;case 13:Mr(function(){var r=Tn(t,1);if(r!==null){var i=st();bt(r,t,1,i)}}),Ld(t,1)}};rd=function(t){if(t.tag===13){var e=Tn(t,134217728);if(e!==null){var n=st();bt(e,t,134217728,n)}Ld(t,134217728)}};r_=function(t){if(t.tag===13){var e=Zn(t),n=Tn(t,e);if(n!==null){var r=st();bt(n,t,e,r)}Ld(t,e)}};i_=function(){return se};s_=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};jc=function(t,e,n){switch(e){case"input":if(xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Hl(r);if(!i)throw Error(U(90));My(r),xc(r,i)}}}break;case"textarea":by(t,n);break;case"select":e=n.value,e!=null&&vi(t,!!n.multiple,e,!1)}};Ky=Nd;qy=Mr;var QT={usingClientEntryPoint:!1,Events:[Io,hi,Hl,Wy,Hy,Nd]},_s={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$T={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$y(t),t===null?null:t.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||qT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{Bl=wa.inject($T),Kt=wa}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QT;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(e))throw Error(U(200));return KT(t,e,null,n)};At.createRoot=function(t,e){if(!Ud(t))throw Error(U(299));var n=!1,r="",i=Cv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xd(t,1,!1,null,null,n,!1,r,i),t[An]=e.current,Zs(t.nodeType===8?t.parentNode:t),new Md(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=$y(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return Mr(t)};At.hydrate=function(t,e,n){if(!Zl(e))throw Error(U(200));return eu(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!Ud(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Cv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Rv(e,null,t,1,n??null,i,!1,s,o),t[An]=e.current,Zs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jl(e)};At.render=function(t,e,n){if(!Zl(e))throw Error(U(200));return eu(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(U(40));return t._reactRootContainer?(Mr(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[An]=null})}),!0):!1};At.unstable_batchedUpdates=Nd;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zl(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return eu(t,e,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kv)}catch(t){console.error(t)}}kv(),ky.exports=At;var YT=ky.exports,Pv,Um=YT;Pv=Um.createRoot,Um.hydrateRoot;const XT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElklEQVR4nO1aQYscRRQuwURxL7oaBY1OkN7t+r7q7gX7B+zJmyJqFC+aq5hFD3owKphLNB6ERNeLYA6KISHoJUGiXhUSRTwkBCRIkLgqrNFbTDS7E55bkdhU93R1V08mS39Ql57pV9/X71XVq3qlVI8ePXr0WEMcx3eT3AbgbZJfADhNcpnkBQB/A/jDPpPfFuW/xph71fWELMvuJLkDwPckV0kOfRuAUwBeBTAYC+k4jrf4vkMyIvkRgItNRJa0FZIHkiTJulFqQfJMXdFzc3O3knxPQjSg0GJbBbAviqJNqgtwrZORorXWDwI426HQYqifI7m1K8HDCtE3ANhZY4zK798BeBPAk1rrZHZ29o4oim7K83xDmqa3ATDGmMcBvEHymA3jUcIX5f0uBA+LokluBLB/BKklkq/PzMzc49t3mqabZdIj+fOIPj7LsmyqC8HDK6Ln5+dvJPnpiJB7UTzYloPY0Fo/Z22W9fd1ENF0d3AGwCcVnR9OkuQuFRgyBEgerPJ06/Cm59IB4CUZ18FUujltB/BPycd+t63xYc1Z86JMOHXt2omuaGNn3feNMQ+TPF/Cp/nszZqe1Vo/5WO3rWCBMeYhl6dlrDdep1nPu7/5ZmQhBFt+CyW8PvC19S88xm/tjCykYGvrkIPPahzHaaeTFoCf0jS9f9yCtda3k/zdYW9/p4Lp4emQgitC+xLJ+7oWPKzj6dCCJTkpych2eBkCsLthe3acgq3NVxyCT6pJADoQLPm6DeP/2ZWcXK1Hwdbu8aJdrfUzYVhPpuDdjrDeG4b1BAqWtNJh96har4Il2XDYPa3Wq2C7hSyG9LKaUMG/GmPQxq5dj4uCL/gQcx21bmxDqkxwCNGtBdORo5KcbkqocHZddlYlz6NrEtIAfnR4wagA6EJ060mL5JdFA8aYx3yJVBDcIhuOUOFN8olWyxLWCltFMrtUQIQUTfKtVokHyW0OA8eaimsa3rLnrWMHwLeOj/Z0bSJSsnQQWOmilFnmaUkX67wve19XtcJ78wDgVOt9ZkNP+yQjUlZ18DzhTQLAa46vfjZEVaHK03U9e9X6u+QQ/LI3AQAD1z5Tyh+qI/iu9QCed4i91HjokTwQ9Pw38E0DuTLh4PdxY6NJkmQlJdGD6hqjpM610jpBArCvZNnYHoy9P6cXStbv91sbj6Jok6tkKeUOqfWoMQPAI665RXLnuut2oxMF286PU7QV+5eDx6rW+tHQnS2WhJEUthaCdlYexi7PStsTvMM8zzdI8bmkQxF+SGbO0P1Kkb2qEE/yiNxMUF0gy7IpuWZQIVqWiYUQyclgMLhZ1lkAf1b091We57eoLpFl2VSVp21bkopAkwRAcmObLv4yoo8jnYu9OrzlmsEIQlfWxeNybUkmPrtRn5bjItum7Vq/1ZZqvqlxbUnygj2dhXEVLNHSWzYdtOXgs7EvrMf21rlQ1qKJVz+chJT2P0hKJ6TKbto0bDIkDmutH1CTCq5NOlLCPNlC6AnZe193d6fTNN0sVTwA7wD4nOQPMubl3Nu2c/bZURkWcizT5Lpijx49eqj1isvFjGZXJBwR5QAAAABJRU5ErkJggg==",JT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWklEQVR4nO3XsQ3AIAwEQE/LtsxEejpASvLiTvoBLLvwVwEAABzq4Vk2wmNgG55cd9IAAK9p4Vn29WuoLZV6WPpwHbSlFh4AgP8a4TGwDU+uO+keHgAAgNr2APldsP+m7K9hAAAAAElFTkSuQmCC",ZT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAA8CAYAAAAQTCjdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAADJSURBVGhD7dcxCsIwFIfxJF7BUdBDuXsJx7RDs3oI3T2UgqNXsDHPvgMI/QtCvx+EvKbLBwUxAQCwDNF3ia7rTrXWtc0xxmcp5fh5IZB8l2hx+5TSwZbNfiwhDf0lQtUIVSNUjVA1QtUIVSNUjVC1aNcH4b/xTVuraQyvth7TOE+73lxjzvlsVwc/+0vjOF749I320/ss0ff9rW3b6Snch2HY+TwbP09qhKoRqkaoGqFqhKoRqkao2jJD7cpgFzFbNvsxAADfCuENcUUzai4mKxMAAAAASUVORK5CYII=",eI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEpElEQVR4nO2bXYhVVRTHfzOjBX7OTKYY0sPMKDp9qFM0On7M9JBP44NE2EMm9KHvPRS3FJQynRDFt0QR8YsK6UE0LAettLF5Vl/qJb/KLCiECpsJY8W6cNmsc+7Z++5z7zXuHxZczpz9X2udvc86a629BxpooIFAtAGLgWeBQRX5vUj/dl+jGVgGbAaGgdvAvTIi95wBNgF9ylH36AK2A9czOFhOrgHvK2fd4XHgGDAewVFXhPMo0E0dYDKwAxjLwVFXRMceYFqtnB0AbmYw8ht9KC8BzwAdwMMq8rtX/yb3jGR4eDeAldV0tEmDUdryvQC8CkwP4G8FXtcHlfYgC2pLrpgAHEgx5HONsLGwXCN3kr59QAs5OvtpSkRdk5di4Hldypbu43k43QTsT1B4AniI/CE6TibYcCj28t6coGioGu9RCUTXzgRb5J2OFo3HDQVvUTu8nRDIKo7e0xI+PTKztYY105LhTa2EdE/CO1vJMp4IzFGR36EQG04Z9u2qJF0cN6JxewDXA8BG4CuHU35/CWwIdH6GsQJlaS8I4OKY8fRCPj1PA99nSB2/A3oC+F8wuI74knQZsytJhS9WAX9mzJVF/gCeC9AzbMxypw/BDsMY3wxqHvC7h7NF+Q2Y66lrhcGzLevgZqOeldzYF1aS8AuwRWdeZCvwa0Jg9MWIw3E1axNhmWHAawEBz+W4DMw27n0EuGLc/5inzg0GR2+WgZucQX8HVD0uxz/6EJLwpN5TOkaSCx+0GaVlISQAyFLxxccOh5R6vkvyowC93zocX2QZ9LMzSHpUvngD2Fsir2QYc8TRey5A75DD8VO5Ae3GeyDdiGrg6wiB62XD/ta0AT3GAGnL5I1u47svHUtfLDHsX1SuMnIHSN8pT3RoluXqXRrA1WXw9KcNGDQGzCQfSLJwELhr6DwfyDnL4BqstcPSKjpcJr18oloODxgDvHLSDNia4uxfwOoKuL2XdE9otuIxu3cSnL0UIUAu9Q1abcaAdcTDPIP/My07Y3Qe1xv8030TD6mcYsFaQSE1cBI+8E08YqWWtXJ4NKSGf8coHlKzFQ886qSce/VaDLSHFg99xizIXk+9Y2NoltiszTrfaicLJgFPOSLXYuCiY/MPPt3V7cbTko2ten2H+w3ed30IOo1kXnbx6tXhsw7nWEgNcNQwTnbx6s3hFxM217zRbUS9G9r8rheH5RTBj8ZXZX4o4W7DwFMVbLU8qEutVORaCCS4njbskz2nijbTrscmjQRrMuTrMqVS4pUJB018u4ox4XZFi4EqxpfkPxQMBcWZruaGeHPCzIq8GVNRkx4gsRQNa+GdN2ZoZWXZIClqdLToARJL4U3dxcsLa41oXJRP8jzJ05Iy08XZll5VLPQbSUWpfJins6XLu1DmxNyI7vWEHAtu00LAzY3dABX1nc0avcudmh3T7Y8hbZL36bd3pkqHXluvxftohgOq12JG45DDpVsSWq3/u8OlpVige0N5nKod09w4OF3ME5268341gqNSz75XhZ2PaAlCrwY36SvdyuDgLb23oJ2KaiY0uaBVe8QDJf/kIZ+dhYHHjBtooAH4F8+LPcYEceJrAAAAAElFTkSuQmCC",tI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAELklEQVR4nO1aTUgVURT+XvGCUF8UVNoPpbkoWhRtWmilUrtSMvvBskWaoC1cRbQxyTIoXLQsaGOPFi2iP9sE0SIQQttVWhBYoEYm5VMpSI0D58UwnTsz986855uaDy483px7fmbuPefccy4QIUKECBH+IAbgK4B5j2OC54QWJRrGpkcxQoxDBgbXIsS4ZGBwJ0KMJwYG9yLEGBUM2mZ5vl14PoYQYjmAdsGYHwDiFro4/2ena2ceC4oYgGYXL7oCwDUAk4rl2i/M6VfQTjIv4ukUBZozFcqOWZR5DaDDZvw+AJ9c9ucNge9Nlzm0xA9Y6NcCaAPwAsAc0xwN2tilAIYFZWYBPAdw2yLcabQIvFs8zCPeSZY1KzwfZh0DQ4eBt02PXwCeAjhs279pLAawF8BdAD99yLkQlLHrAEwZKJACcB3Aeg1Zq/nlfjOQNwNgQxAG3zEQ/hhAoQ+ZhcxDVy7p6gtlir35DMCg8D8tyVYEgxjzkpb5IOsg7fVyU4GLALwUmH4GsIxptvISfA9gHEAlgkcZe+qPvEXSBhUAGBH0e8W6a+OUYtk0Kr5GwoEXOas69rRv2Sek+HeSDxmSQ4PFOCnWNmro6IiEIi0kRVdCDzUA3nnYf0RTrcmbdJkWeI25fIC/cNJBsSEAm+AOWlZXNJ0O7cEuj0uylHVR8WqAJtoUQX6eqxi7XObrGmsdl11472Rfonpp5FeMcNwhGZhxWII1HjMvpy9tTSetqGbZ0jw6iNTDJyq41iQJ6Bbo4w579h6APQDyeBDv+w5bR3Jk3Qr6CeYdCLYoQkCTQFunUOisA/9zijnkve1oEuhGWMdA0ScIkoJ8UvFl3fBQmNcj0JULdKRb4PggCKLzqB1SBuZlqVUK8yhOe6mEkm6BY1oQRPvQjpRAl++Bf4GiCGBHnkBHugWOKY8GTxoanBDmfRfo8gU6esk5taQrPPCvyrUl3efDaVHoccOjXHJamwMISxR6VDiv0YXIeFja7dAQ0008HrA3zudRpfiyC5Z41Cvqxm6pZXUAqeX+bKeWbQ6Hh3EPlYUuHwZTTyqrh4cGB2WG+GjmhkVstM6XnmNjvRTWS13O2Sd0DE7wIVoK8LoFgGqXc6v1RaqWsQqrFAnRqG4BQLd8EuNMSYU4HwQozLzhRCHFv3vYGzuVeBKKr35aoSOVp7ShU8SjpfUly0U8VRlqwLSIB2ZuUqYNorlFPM4YlGnpBS1IIb7Ih8wiboxnvRDvp9UyFdZWC7hRNZ/jzTRqometXZr00S5t9TBvjluyWWuXgpvOfhvi1Py245bLnFFbfF4jNMSPIINXHkoCvvIwoKAlHldd7noUZ/LKQyYutSxR7NucuNRiAikxoKtKaez4V64tpdFrGMNDi04Dgy8ixKg1MPggQoxiA4M3IsSI/W8XxCNEiBABQeI3wYAfFtx9PqUAAAAASUVORK5CYII=",nI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEj0lEQVR4nO2bW4gcRRSGT7xi1OD9QhAvbLyM7vTU/1fPDguyIAiKoAYdIuhDRBRUBIkSAkKyz4piMDEPQVEQiRe8ICIkBBXyIAka8BJRNF7wwSghSkxWgq5yMr1Snu3JzuxO10wn+0HB0l1d/zldZ6rrnO4VmadYGo3GKUmSLNamf8vRBsk6yXGSW0n+SvIf0/TYVgBrvPeplJGhoaGTATxAcleOgzO1L0jer2NIGQCwFMCPs3DUth9I3iqDSqVSOQ3AyzM5AWAzyU3a9O8Obs5L1Wr1VBkkkiRZDOCzPIMB7CS5qlarLWl3fZqml2ufrG+e05+qhgwCzrmLAezOcfRbkrd3OdwCks024+1WLeknjUbjLJJf5szI01OLDslh59wydabTcfVakmvzFrTh4eEzpU8sIPmOmYW/SD6kJ0dGRs4nuTE7puev7FYAwL0kDxmn3+vm5vUMdczOgHPuLj3nvXckf8qO73HO3T1bHQB35oT3gxKTkdbs/WYMeVzPkbye5P7s2MZ6vb5ornoknzAO/07ywp440wkk1xsDPmg2m8dnq+0+kpMAHpUeMTY2dgLJD43mMxKDarV6HoCDgfikhrDui4Od1XivdQFQtQLdA7Va7dxe60xDZ86E8iY9TnJlduffFZHjpAAAvGZm+WEpGpIfh6JpmtaSJDkDwF5dUZ1zQwVqwzi8XYoOZ/4/rL4PMqIovyuzKVFbzilMzHt/mwnntVPnnHM+RoajN9XYUFyCAWC1CamlEpmcm/5YYWIAXjQbDS+R0SKBcfj5wsRotpJpml4gkVFNE2VvFyYGYEsoVqlUTpLIkDzROLy5SLE3QzF9HEl/MrTQ4dcLEyP5Qijmvb9CIuOcu8o4/FxhYiRXGYfvkMjY7KmXe/ZpZJlQuEKul8gA2GAcvq4wsXq9vojkn4HYz5olSSSyrGlPoD8xOjp6eqGiAN4yYX2zREJ3VSbC3ihc1Dm3zIjukEioltFuRgkrtCqS00o7RaIaxtlv1BaJAVrFtVB8X5Fpoda0s0pKqHmPxGKsNcvbjQHfee8v6rWWjqljG62Pos2u2QAcMIZopRLS24R/qvo51fb3Y8NzGJI35dSN/yB5i8wR59wNWXUyHPuQ9/5G6SdsvRqZMIb9PZcdEMkVQQH/v2eu5sIyCABohBuCwMjV3Y41VQw04+wFcK0MEs65IZJfW2O7eVbqy7ccZ78q8gkw59RNi/LG6F/SND27k2ttlAB4v58vzzqC5EIAnxinV86i3q3l4IVSBtI0rZly7q6ZrjHfg0zqGFImAGwLHdBPItr11U8adGUPQnmblA2S60yIDrfr672/xvRdJ2UDwFMmjXTt+mbvk8PF6kkpG5h32B9bM8wu2rzDZQDTiwTdtHjJfY8rjOPZ54VbOmzad0305H6eWeK9vwzAcgD3ddiW6zVSRpxz1ZzCQCcr9MSRdmUDC8lH5rBorZBjaIYPlnKGlXq9fmm3v+EkSS45fPE8JaPRKv9ssM9eks8OfBmnF+91+/2euXBIvnoEh1+Row3fqmro/yTZVfnzNE2vjmXIv+qj7QWBLVHXAAAAAElFTkSuQmCC",rI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFtElEQVR4nO1aXW8WRRR+XiwNFoyYCqWgokSNEiJ+RkUMXKnRxKSJJpJeSYwGpQJB0gsJ1kLx48ZiiYkfP8BvSDQmRkPwAoMoUVAuiGnlAi5VavtaqS2vOckzyXHYnZ3dnd19jX2SSdp9Z+dj58w553lmgBnMIC/mAbgNQDeAXgC7Aexl2c1n3awzF/9BzAKwFsArAI4CmAbQ8CxS9zu+u4ZtNS0WAegHcMoxoTEAp9X/ZwCMO+r/AuBFtt00WELznLAG+xuA9wBsAHAXTRs0XVNH/hZcAuBuAE/znd+ttv4E8DqAxRXOEy0AtnLVzMDOAfgAwP38PQrtAM6ytDvafgDAhwAmVft/ANjsaLswXMv9aQbyF1f5Cs/3F7D44EoAb/Bjmv6OAFiGkvAIgFHV+ecldS4f+QvVr1hIV9GdbgZwnh3WAaxH+XiCe9p49Y1FddSnvu7PAFagOqwEMKzGsyN0B8+oxn+s2lsSEqq+V+PaEnLPnmej0sF8NA9kLMeUeXeFcBSjyow70HzoBDCiHFlmB9qiQk+94j1rsBrAyxGZ180q8TmSNU5vVfujCm+s0QZgUOXlQjpsPKXGuylLujim4myVWAXgpEUwZKVt1AAcYJ1Rmro39qoMqrSMxsIcsqYpK6+WlY7D9SoV3ePb0SIV2GXiVeAmK+SYMuzBmd9iXdnTXqvcr4iAb24cCq3s/++IyU7RvJOwVK1yX1LlmnLx76NcrLAIiV3EvH2xT/HpmqviWtXBfSgHEkKet9iQXU5wT/viQfXualfFVxV5L4NzLmfcdMk+Yt53pGx3NpOQBoABV0VjUu+iWIhW9SQTmiSdS/Z0Foh4IO9/E1dhrgrsIssUhesAHPIU9X6gI8sCoY3G2UnicgG01nQnwqPGVdWSkKtMKs0rC+5RbUnqeQG6VQUjuIU04f2eEzVle84+L1VtrYuq0KuEstDYlHKyR+l48mKc7W2L+nGAP56mKcUpiln2rHFOX1Nndk12gt47Dy7nHM6wzZ1RlYasjsWtL8zZ8UXKQdWZ69pykV0iVyMFFqqQ1GCRuXlN2FdKjcM2B2WLmvQhfqQ8WOA74YHAJr1ckfKDMedE2ry1BeRFu2XSu1xOS8JGXrSoDGqcUpENoZ1fqQk/i/Cos+3nksKSnPXkwXbVlp3EzKJ56yxrfwEnhSLwOcOSTjzkYCuPZmyIwJcWW7laqRIN8u7ego5F701KPOap1FJO8bKgVRF3cRxX8XmNKz1mOSgJWUWhJym1BA+j85CHnWpCj/OZqA6fWHG2N4A3TsJHSeQBJNlmddJmOrcopeFTPnuUVFOTATH5ouFND9eowckZry/mkKTLe78CuJ2TNm2dI8kv61z3IV8BoEZZpEE+6QtjGVI+q2hVoySe4SSJRycDkzyMTsKqCCnVKBX9OfhsVixVIuALPi90KJlWTt5daLNEclNOZJBlQuEd5Rw7fV8aUnsvKksyGLQmOkXzTiO4hcSNynG+lubFxeTFDV4ziFMU9B2sk566cVGoMWc3USb1VactajJyzSBur09zpWODe0nYoMYrSUdqSAj5VqWAKyP2eh9XumrcqpjZ4TxJzTIVwEfSnsiVhCXq9p+Ew2vyNtil9uqxJrvycBmA42prPVzE/viJX7VqdFonjMH59A7V+Egc5Spxz54KKOnGokeZ9wSvGSSmbgFhaKZxUNM5qGyqPa1FsgMBtSgXblBx1jioYHvWx3ubkGXy7jcV4U9CR4orUJIbv23dqj1M9aRUtPDupb5oKoP6mOezsx268RgzuTgZuJUUb591G+Ast1XR4kGit9yjCIcpo7w7vZGcVM564i6Iz2edHtJS/RGNhDvYbDfjO5h5mSsTUaWutOIG/3adEQ+zzWa8AfgvTyqK4UvUpqO4clyZogY1wBUvMwIEQxv1rnU8etnF61BD/FuePca4fnG4bmfw/8Q/GR9/PG80EjUAAAAASUVORK5CYII=",iI="/bhAI/assets/gallery_icon-DX7cOO5y.png",sI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACzElEQVR4nO2Zu4tTQRTGT3w2ijYWWqhoYysBUZs0wTv7fWOiwm1tfCJa+YRdiNWirvhYbdZyrUV81ArqP7AKKharjYqglYqrsCpnTaHXmd1kN8nmhvODA4GcOzNf5sy5k3NEDMMwjP9JkmQ9ySEAz0h+qdtTkhf0O+khCiRPA/hO8lfEJkiekl4AwMVphGZtSPIMyd1NiJ0yAFXJcSi/bFYwyef6rOQNksWIoKtJkqxWIzkc8nHObZa8AeBQIFwfBaLgSUD0AckbAAYCggcDfoMBvwHJGyTPBnbu7Gz9uh6aYNoOKxbStDOcD2hJi5a0FEtatKSVD2hJi5a0cpG0vPfbtCj3t3nvS+3+e6hzZOcFsL2dWqfw3h8O7MiIZCB5MCDk8WwLAABuBPyOy3wU5gDcbaLEM1ypVNaoAbjWaImH5P2A7962C3bObQ0IfhsovBUAvJhlEe8farXaApLvsr56vDoheGm9a5Bd6Jasr/d+V7OCvfc7G/yRP6dpukQ6Acl7oVCN+A41KhbA+cgY1wO+d6RTADgSWPBErEcE4GS9nRIT+w3AidCzJDeE2jSaPKVTVCqV5SQ/BRZ+K1ZEB7BOdxDAmIZj3cZInvPer41MpXngdmB3P6Zpuqy9KjMAqEXC8oy0CAD9kTn6pdNUq9WVJD8EFjMJYN9cx+/r69uvYwUEvy+XyytkPgDgSP6MnMtLxWJxcbNj6jPajons7KT3fofMJ5w+C7+pXw4aao7pKwnAq2azeEcplUqLSN6c4ZXzGsBlkon3fpMmHDX9rFEC4Ir6zDDGaJqmC6VLKMSuiS2yEb1tSZdRAHAMwNcWCtUb3dGu7hc75zYCeNgCsQ90LMkL/PNvaZTkj0ZF1l9Dem0tS15xzq0CsEcTE4DxgMhxTWjqo77SS7DbyzmtxgTTdri3oJ1hWtLqKUiWtcKRsfxeMgzDMAxD5sRvDkSrmgGIMQAAAAAASUVORK5CYII=",oI="/bhAI/assets/user_icon-BYrw3k3X.png",aI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpUlEQVR4nO2aP2gUQRSHf4mQ2KiNkBSelkrsYiDk8uYWYpNCjCBXGs8mxCo2YqeJdqbQawSFCBFUiBos1YPYe0HRShIFQUEMWpxREk7MT/b+mJgmO7ezc2t2PnjNLXfzPma5mXnzAIfD4XA4HA6HIx5wEO3sx35m0EfBCSrkqHCOChNUyFNhigoztZilQmFTzG54PlX7znjtN05TYYhp9NBDpz0poKUyqMIoBVcpeESFV1RYogKthWCVgkUqPKfCNAVXKBip5Aa0mJFNo4eCN1bFGovXfq7hZAVZKpRjIBM0yn7Ojcl6OETBcgwkdF/7ZaZxUF9Y4X7Tk29c+q6eLNBKhe9NT7zxKDGLHTqzm4pB0uGiDwd0hDNNTzhsCI7qCOdikXS4GNURnjA6+I3z5ECb7Rme1BGeNjq4z6dF8mLWpvDj4MKCZ8aF6xQL5PBhG9JFnRmej0zY51eZfJAnB/dEKfxBR/h9pMJ1Sl/J/BjptUYh/FNH2OwpaCvezpNn0+alu9AWVLhkVdhnbY2cmyFPpsyNm8auYMKCFevCdVZ+kLfHyYH28ON62Bt0hn83TbiOiWXMw77/R/jjAnnhWLhxe9GRtFd6Z7z/tJ7cIYc6zYwpWA0ku42WpSUd4XdWhL99JidHotl4CBZ0hIt2tpa7zYuuC78ILix4Gunh4VRXdKLrUWju8dDEMhNVIY/bowBwOVklHsGZpBXxvGSVaRVSuoV4s7stu1HyHaADFe7FIHE7Vy2JvExL3HVpIi/EN0KF7kp7gd9mUG03mPM36MbPzlvHFwpeUvCw0n7ht2EodMMm7EUHBUeYwXH2Y5gZjFFwiYJrVLj5t2ml2hvyb1NL9bN6U8stCq5vaGrJVRpl/IYZf6kMWoV0OBwOh8PhcDgQOX8AhY5o3pQDUmoAAAAASUVORK5CYII=",lI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYklEQVR4nO3ZMUoDQRgF4Kkka6feYttt/mLfm2IrCwtPo5VGj6Kd1xA9hEkXCB5CUAYMTGJiVGacZfd9sM1C8u9j3hLI75yIiIiIiGTVNM0hyVsAcwBvJN//+wpzP+dPzazKFtbMKgDPJUJ+cz1lCw3gpgcBt13XuQLPoyEXdV0fuALCXACXUcVnWQYhemdLhV0J8+N3OssQRjVyPZD9eajAZemEU6MqXZYqnRpV6bJU6dSoSpelSqdGVbosVTo1qtJlqdKpUZUuS5VOjWOrNMb2vzSizUP4579Hm4eXLIMATH+z89n2HWZ2TPI+8W7pKktgM6vCtu6vgUmekVymDAvg0Xs/cbl47ydhWxcWWPv2w6vPtG17BOAu8X54Fk42a9if2AxM8hTAYuOBX0meuyHgerAvpxruhffYDQV313A4pxrbEfah67oTN0Qcw6nGRnGqsVGcaiz85q7dEBEREbfHB6zlz1MolYoJAAAAAElFTkSuQmCC",uI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACi0lEQVR4nO3ZW2sTQRQH8CNewBtV6+XBG+iDiPgUxSrimpzZmMzZNsnOHKoigi9+AgUR/Qwt6KfwC/jki/gkiH2RgqigoA+i4q1UUFsdsjFriZjLZtNuz+95k90zM2fmnw2AEEIIIYQQQggxeCrgk0qbK0rxEGQd0fnNisysIjuP2tyCrPOJa67YqOAJyDrUZrJRsCsesg61nYoKnvOCc1shy4pF3oLa/KwvZzsFy6x/J2EpKYye3YFkbmLAx5Pu3/qxxdfcioDFIF8a36/IPq8/vPnoed6qTvrXLWusVodbXTPCvBa1nYmW/XSxMr4bBkmV+TCSfdOYKUXmCQCs+N/nXIHt9C8zr2wOpp1X2rzMn+EDMAgY1I4qbd81+9BOe6XarqT7N6/Dvajt0z/Xk3nva3MM0uSXuaC0/dwcefuoVOJt/Tp/oz3icWymvyCFCtJQCMJqIw5Gxd7vNAd3c/56lcomJPugOdP2m9Im7LqQdiDZi4rs99jyuucxb4CUzt8gCNYpMndj7fBDBfYS9K1nyc7FRvgOM69J+/x193T3/qtoPX4QklYkziVRcK/5uVXB+VFzqNPv6XpJnxgb25hWfk51STegNpUFm9bDfwWHJPt3IJtWA5I5jWQ+xQNHgXgn9Kl/Fx5LSOZrocw+pEmVzREk8zZWwAsXM5Pu3xbB40MnmT1RbndEbV7FZvqZi4O95Oe4XO7yajeQsUF93bcNql0q4D0uVkZ9OeMCfy/5Oc73L6xv/HhwmRop3AeLAVarw4rMdfdTLun+9XV4CrW94fu17bCUoLy/yrCivL/KONRmYnm9fyZ7OzqnZ93fK5B1SvEQar6qSrWRQT+LEEIIIYQQQgjxewR+AUW4xI2gz4jWAAAAAElFTkSuQmCC",cI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACeklEQVR4nO2aPYgTQRiGx/MfUQtREAKRMDDzvpNdkGDlQUDEzvJasbK1EltLW0sr4UpbsbrWwsJG4QQLBRFEEBRB/OHUlQ82GiTHTeLs7uRmHviasDB5dmfne2cSpTKZTCaTiRvn3CWl1B6VCiQrki8AXO/3+4dUIsKVFIB3AG5Za0+oFIT5t76SXB8Oh1YlIlzV9RPAAwAXVSLC1VQ9sdZeGY/H+1QiwlVdr0jeHAwGx1UiwlVdn0jeKYqip5YJzpABcAPAGx9xAN8B3DPGFGoZ4AwJ+Xw0Gu0nuUbyse9TB/DIOXc56iDDbYT/uWaV5H2SPzzl4w0y9BCeulbLe0vyi+cTjy/IcA7hCWVZnpKVmuRbzyceT5DhAsITtNYHpTcDeO4p3n2Q4X8IT7EiEiITfZBhGOE/ADgr0xfAVpRBhoGFJ1hrT8uCBeBjVEGGDQlPMMYclRYF4LVvkJEW6Jw7p5ZReIq9Eko6DzKcMVDTCwnJCyQfkvzlKf+M5FWSB0IMXs24s1sAXpLcAHC37rlr1tqR1vpYEOuuggz928j0wB+krci7BuA2yWvSloqiGCwy/bTWJ1sLMlxAeIf6tt3s6PV6hz2DzGZjQYYtCu+0mVg0uTnnzi/VlJZsLu8myfee43+Wm2mMMfOOpfKixQTbkmqAaE5QGGe0XG/sjIwNCRtjzsiCtus3D1hgeygzoCzLI6oNGEZ4pd4YbOzqAwDdRlCIQbhsMyh0KcxUjmlJrtYHdF5BAcBTiZtLdRA/iiUohIazv3haP6YxpqAQGs4v2m5QCA1jDwqhYexBITSMPSiEhrEHhdAw9qAQGpfan0szmUwmk1Gd8Bv41GFkySRCBgAAAABJRU5ErkJggg==",hI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAA7BSURBVHhe7Zt5cBbnfcd/++z13np1YQkkjBAghEGADQMGggkZ4qOG2I3dpOPUyXh6TDLONHXqNLh/dGrHGc+0Mw1J2ziZum5sJ3HrjCe1U8ZGLccANocRqJK4JBCgy7qQXum99nq232e1+L8mtvRK7yvP+515Z/fZffb68Dt3BRVVVFFFFVVUUUUVVVQ+NTKSqvFX55WYv8y7hofTy/3VeaWCADg8zKMjY4kV/nBeqSAAplJU29c72uAP55UKAuCHw2N1o2Op1f5wXqkwXHjo5srJRLrWH84rFQTA/pHJ9WNJu8ofzivlHWDPCK/p6Bp4kCtx9f1To/f7m+eN8g7wwqXeXa4SDU2aUrDjYs8T/uZ5o7wDbG+/9ohhS6oaKGHnr/R9cXycl/m75oXyCvBqL28YGkrdz7lCrhyglKNJZy6nf8/fPS+UV4CnP+i6L2PKkhqMUCKdJRauoBMdV/7A3z0vlDeAvaO89uLlvme5FCTXlYhkRlmSqWdw4sHDHel5AzFvAI8ev/H18QknJjGdDMskXdcpa7mUdTQ6eLzjB91jbtyfWtDKC8CrPXztyRMX9tquRrarkKaoZBiwP1kml2l0fSBdfaJ1/Dv+9IJWXgCeONn7lO0GSFLCGIlb4KQrRApWHVcmUuP038fb9rb0843eAQWsOQd4+L3RR0+1nH9c10solbaJyTpZluVZn2WY5DgOcTVABgvSW83nfui6ruofWpCaU4BdXXxN84HT/8EAxwAoLRSmrG0Dnkq2WDJGiqJgH9w5HKTz3Tc3v3p47AX/8ILUnAEUlvTyK/tPJNOMOAuQKzHKwOKYIhPTdLId17NCBoi2a+Mnkx6tpuZjbU/tP5Us2A5lzgD+6B+Pf2DzSEjRSgHOJglWFwwFyHRsWKFFkqqRwxEDYZk6kkoqlSEO97a1OL15sOWlo93uDv9UBaU5AfjPPz59tvv6ZJNtB4kknaKxMkDMAiInWZVgbS5Z+MF/SWLoShwiHXEwYzjk6iEyQmX0439vPvTWhdQX/VMWjFDBzp4GB92qf3v18InETfn2rKki5pVQMmuQJblkuBZpYcQ+lZHBkUBQTItaUMiGhWqIgRmyKGmmKRgLk5MdozKWoc9tqP/7x7YtetqbWACaNYCnz/ZtPbC/7e2JhFLK3RJkWyQOmBZnErGgRlkA5MymDLfJVXX0wipZNnwYCugRSqZTpJUEKCtxyricVHQqUTJJSvbSvRvrfvrVzy3/M29ynjUrAD84nnro3XdOvj6e4LoWLIN1MXKQNBzZIRtlnoOrOrJEDgIIHBexDuvYb0syoMreOgG02C/mZXGAGtDR6LnkGhNUqmepaWnFm1vX13z37gWsc+qq+VFOAV48N7HtzOkrf97VOfJINqNQOFYJl4WlAYLtwXABkHsAPVBiG2C5ApYAiKWw0FsAuTdPIkUPe66P1APrZMTsNClukmorwtS4KP63X9pe9Q9lkpTwb2NOlROA/ZeyjS0tl//05Mn2J10KKTqsLp0RSQFZVFiVD1BAm1oKUFji6rakkCUr2M5IQmwkuKxIbVwshXygDnfRuchIOgDPOdw9440juksx1bz5mQ2Nf/VHq4L/MnXQ3GnaAEVd13qs877LF2/svnRh/AlFLZNtxDABSbisjTkKMqiJB7ew7sHz3FfUgZJXBwpLFOBMGSUMxookZsJNGX4A6OIY8aLGFqVNQAVguDNKHodhPYRz4zppA0lGcyismrQoql9fvfi2l9fWxX61qZx1iPucbX0igKlhvrD/itFw7mz7nmtX+r7mmG5cVWN4iBBKEZW4myEWABwFWRZWwvGgDqzL+chd8cNSuCwHMJfEPkYWfpyhpEFPLMDdioMOEocAraBJdmyDJCQeF+fjAJ7GUrR74nhNRiJC96Jwk1RuUBDJqaok1LG6oe6llUu15sow9a9m7Kb/GDnVbwV48MB7z1zt7KnLTjoNkwmjwcogf8oRV3aDimvLIe7A9WyNmFrhFcK2lKKMPYGHQrTSYT140Cw6DI4s68VAQJpKGiIdCDio+TwrnLI6YPTmcAkZGXNspntuDkYACECAq6LUsVEvphADskrQ62IMWKF4GaFhHnMNYk4GMdKggJslzUlTBJZdin/Y8oDcXRbWWpdVV36wfX3D81NPOTP9TguEq7L0qLswMWxXDQ0mqvuvD9/RfaX/q2Ojk7UyC4RlJUpZI0AO7EdSEbcUQEBxLBKGIQpkXEFYoi0sCg845b5YApdwSbE+5a5TbivipYli2mEaLAwWDMgiLqo4jol5KIVsxEobZY+BfSJE6LpKLgCrkkMhGV2NNUFhVJH1VbEDa+pveyOu2d3V8Vh/TXl0oFSSxv1Hy4l+J8D/TwMdfNO51s5dF9qvPW6a+pKsiacVycAHZeLMYskCAAEz8tzUL1NEghDgJG8pLA4n9JKFHysxV7i+LSwR68I2P0owwoYBWyQQ7x8DQAPCapGZQ8yhxQtizU0ral9btULev0GSRrybnUVNG+AtiWRy5sjwQ+8dP/fC0HB2qRqsoAzoOXhAFb3uRDYN30LMsvHQMmIlYCgopC3ELImZnsu6ACXgegBhgVNWObX0ko6iARaginXEVgFeIrgoLF1xJkm3xmjjmmW/uHtd7fObY+y8f2tzohkDvKWhIV594tClb7a2Xvt2lgc0E0klZaJdi0QBQKEs2jVXQpxEbBOv8OUAwfXx8BG4P+Y6HkAAAkDh4MLKhLVxgGTI5olUBueKkIz9TnaCYmir3dQwasFQ/4Pb131j5yL2n96NzLFyBvCWOlonth891vE31/smd3I5CjfUARLWh+CfsgwAC2FdRauGYjiowxKRcADJwU+4v0gwwhI/cllsN2G1qh7EXAdcsxRVbFKsEXpg29rnNqyJPr+CMcO//Jwr5wBv6Ve/7vqnw0c6vqGFKpFIdM96Mo5Biewkel+ES/GWxZbg3XBPUZ4AlldQi8zslTm4OVihV04jLopIyFHKRDSObGrwPTvW7bp3CTvoXSyPmjWAQoeOJvf+5p33nrNc5EZk1oSRpLKFlZTIZODWISAJUTabJRii57Ii+9pezYiY6MdCL18juyqArPMU1VWGrz62p/Gzq0PSDbE335pVgEItF/iWV157p9lWwiEtVkIjyRRiWhDWyEgPxr0Xqiilvcx8q3i2AVJk46liBy6ODFuKlq2hJnZk7+76gnqxOusAb+mJp39pBEuWaFlXwIN1CddVhYuKIlr/yNqm6kEkCLixSCIogoSd0rb1y1/4422le8WsQhIqtbnRM09/aTVzJhyZw2XRPYi/RkAJhG5FJA3RxKEQF5kXyUPAgy2SioQR4Elqqo39phDhCc0ZwGULWOfjj279guIMIp6lKKAAIBzAhjXKKGNUuGwG5YnELLSGCqVN1HmaS3W3hS499dDK3f5pCk5zBlBo46rIf+38zPrvK3KGHCvtWaCOeCg+JIlvw7FYzHtxkE4lKRJQKSLb9MDOpj3+4dOSaEW7uvrv8oc515wCFHpk1+K/rqwMnlUUk9DlkmMYKI7RSWNg2kS2RRQCxCh62ns2rvrDTQvY5akjp6fLfUNNXQN9s5Z45hyg0Ka7Vn4PvQoFZPSwcFUmWaRqEjoTm1zUhgHXpOXV0UNfXhd63T9k2hoeTK4eGEw2+cOcKy8A718XfrO6MnTMNdMU1sRnzCzc2CZdC5OMUkbnGdq5cWlOvrz19iRWD/Yn1/nDnCsvAIW2b2l6lqEw1mGF6DsQqxyvpQNO8WLgxc0LpTP+1Bmpu3d0y/iY0dTdzxv9TTlV3gDuqFebVy6pete1kt4LU/EnHYRWrSymmTvurnzWnzYjHT49uWt0zN5gODq1nO1/3N+cU+UNoNCWDSv3uXbKWxevqTTFoWU1pT9cFWED3sYZ6t0j7/8kI2nBDAvT0bNt3+0edHPuynkFuK1BOlBZoieQSrwiWjLHaVNT/A1/94z0xoHOZxIZqc6QI5QWn0X1KP3rW0f2+7tzprwCRMxzli2tek1Gv6sC4OLKaO+WanbK3z1tnWuz7j12pP15i+uUsRmaQY0Sjkp9KVb9ytGRnHY0eQUotKZxyWsq4ygCk9RYv+BVf/O01NPDa176Sftbv/z5kTd1tZpkHiRdCcG60XfDEpNSOR06P/T9J3/aah3s4Tn57xRz9jLht+npl1v7PxwZqf72Vz67dF016/Y3f2zduMGDA1dHH27+n//dl0ixCkdWiaPfTnL01eEgpdBby7EoJcwMWY5JIZ1ROGDQHctjL33+nvrn7mLsun+qT6yCAPhic8/LFy51fm3fkzs/9v2MjY3FOzv7tnd3Dmz/sDNz39CQW8K12EIKRRm8lVK2TcFIjIYmJoiHQmSHdEopAIoW0RZfCyhLJUGLtFQvbV0U7Wysiv9iydLb3769Mv6Jyqe8u7BQdVm4pTKqfaIvaKWlpeOxWHCgPF7SXV5W1qYoKCkDqpO2Moh7pvfVLjE5SaXlFRQIhT1oSSNDDIW79+7RAmBJoZryajMeK70QjZT0RMKxIf/0H1sFYYHvX0lvaz9//nt/snvDtHvWaxf51l83t/yoq2dsjauHFFKDZNgKZVGcuxHEP/HHnOVBQB2jmCJRXErTns2Nf/FQU2gfkplnk9NRQVhgVVmwvapUO+oPp6UlK9nxb31zw51NTTWva7pJhpMmJayRC4uzRJKSbDITQ1SBHnxJzB371pfvXPnw2vAPZgJPqCAsUKjt8pXda1bUv+0PZ6S2bnfHvp+9fcgIVpGpwH3R5WiKRbpzk3ZtvuM7j22u/Dt/6oxVEBYoVBrSz/mrM9aaOunwA/dv/7r4cM/FF0+eJmZN0rIFkdO5hCdUMABramp6/NWc6Pc3xV+sX3zbAcVJUVRzKQiYj37hzof93TlTwQCcDe26u/4vo4rluOlR+vw9m77SEGZ9/q6c6VMNcMti1lZTHjwUlQ3asjbwjr85p/pUAxRqWFR6YunC6Kkaxkb9TTnVpx5g/cL4mdqK8Fl/mHN96gGixjy/sDw64zc8RRVVVFFFFVVUUUUVVVTORPR/pHUtBNtAK50AAAAASUVORK5CYII=",dI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8klEQVR4nO2dy04UURBADyxuC0yEhYnyM8KPIPwCEvQPNHFDAhJJWPgDyhgXxqUbH1/gYyUrV8KoICyvucklMWT6Tibz6KrqOkklk1lV1ennzO1qcBzHcRzHcRzHcRzHcZzhWQI2gC7wFTgHorA4z7kdAes5Z/XcAB4APQENjkPGKbANVChlGfgkoJFxxPgI3EFh848FNC+OKY41SaiMbPnxWnzQcjh6KKBZcUKxhXCWBpxwXwArwALyWMi5HRXyPwEWEcxGIflN9LBVqOMegunWJP0SfXQ11vKtJum76GOlppZ0syaWs5qkO+ijU1NLqlEsdcdNrfRq7pDFYk3A0z617CIYawLmgAPgb45n+TuxWBNwxUwO8VgVoAYX0DAuoGFcQMNYEzAHHOYroJ/AE+k/SVsTcNinljeSJVgSMFtYPCBWgiUBiT+FmkRKsCZgp1CTSAnWBFS5yWokWBOQCMDrARLe5jVQjWNRgCoJVgWokWBZgAoJ1gWIl9AGAaIltEWAWAltEiBSwqgC5oF94NeAorTF1G7WRhVwIKBZcULxGOEC0q+PFwIaFScUP5gCLgC9Aqwfgh6hQED6C3BP6UN90cJJWBvB2mWoJoK05rdJQJDY/LYICFKb3wYBQXLzrQsI0ptvWUDQ0HyrAoKW5lsUUPmylGbZk3KH28Y9YDavilbTfIsCLjU135qAxHNNzbcooJMlXOYn5HckN9+igCtUPKJqWYAaXEDDuICGsSpgRst5wJqA+bxQ4CJH+uzDOqbIfp+NKY2wEYu1PaCnbWCTpZFlN2tq+Y3CoX1pAJ42VjUO7asbepq+18arwvBZsaxrHvv7H9uFOtYQPrr4tJB8N+/aUkcXrxa2fBWjiwdtPdpjEwVU+aUH0Vi8z3/QqyC97OC7gKbFMUWq5TbKuAW8E9C8OIYXN6h5e8Z1Qr76ORHQyDhkpJzvazrslFjMc/fT6PcvhTvmJuMM+JxzXNNwteM4juM4juM4juM4juNghn8pMDzSTakxQQAAAABJRU5ErkJggg==",Ue={history_icon:XT,menu_icon:JT,plus_icon:ZT,question_icon:eI,setting_icon:tI,bulb_icon:nI,compass_icon:rI,gallery_icon:iI,mic_icon:sI,user_icon:oI,youtube_icon:aI,message_icon:lI,code_icon:uI,send_icon:cI,gemini_icon:hI,logout_icon:dI};var bm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ov={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(m=64)),r.push(n[f],n[g],n[m],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new pI;const m=s<<2|l>>4;if(r.push(m),h!==64){const A=l<<4&240|h>>2;if(r.push(A),g!==64){const C=h<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mI=function(t){const e=Nv(t);return Ov.encodeByteArray(e,!0)},vl=function(t){return mI(t).replace(/\./g,"")},Dv=function(t){try{return Ov.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=()=>gI().__FIREBASE_DEFAULTS__,_I=()=>{if(typeof process>"u"||typeof bm>"u")return;const t=bm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dv(t[1]);return e&&JSON.parse(e)},tu=()=>{try{return yI()||_I()||vI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vv=t=>{var e,n;return(n=(e=tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xv=t=>{const e=Vv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Lv=()=>{var t;return(t=tu())===null||t===void 0?void 0:t.config},Mv=t=>{var e;return(e=tu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vl(JSON.stringify(n)),vl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function AI(){var t;const e=(t=tu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function II(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RI(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CI(){return!AI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kI(){try{return typeof indexedDB=="object"}catch{return!1}}function PI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NI,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?OI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new nn(i,l,r)}}function OI(t,e){return t.replace(DI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const DI=/\{\$([^}]+)}/g;function VI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Fm(s)&&Fm(o)){if(!lo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xI(t,e){const n=new LI(t,e);return n.subscribe.bind(n)}class LI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gc),i.error===void 0&&(i.error=gc),i.complete===void 0&&(i.complete=gc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new EI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FI(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bI(t){return t===Ir?void 0:t}function FI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new UI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const jI={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},zI=ee.INFO,WI={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},HI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bd{constructor(e){this.name=e,this._logLevel=zI,this._logHandler=HI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const KI=(t,e)=>e.some(n=>t instanceof n);let Bm,jm;function qI(){return Bm||(Bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GI(){return jm||(jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bv=new WeakMap,Eh=new WeakMap,Fv=new WeakMap,yc=new WeakMap,Fd=new WeakMap;function QI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bv.set(n,t)}).catch(()=>{}),Fd.set(e,t),e}function $I(t){if(Eh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Eh.set(t,e)}let wh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Eh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YI(t){wh=t(wh)}function XI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return Fv.set(r,e.sort?e.sort():[e]),tr(r)}:GI().includes(t)?function(...e){return t.apply(_c(this),e),tr(bv.get(this))}:function(...e){return tr(t.apply(_c(this),e))}}function JI(t){return typeof t=="function"?XI(t):(t instanceof IDBTransaction&&$I(t),KI(t,qI())?new Proxy(t,wh):t)}function tr(t){if(t instanceof IDBRequest)return QI(t);if(yc.has(t))return yc.get(t);const e=JI(t);return e!==t&&(yc.set(t,e),Fd.set(e,t)),e}const _c=t=>Fd.get(t);function ZI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(tr(o.result),u.oldVersion,u.newVersion,tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const eS=["get","getKey","getAll","getAllKeys","count"],tS=["put","add","delete","clear"],vc=new Map;function zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return vc.set(e,s),s}YI(t=>({...t,get:(e,n,r)=>zm(e,n)||t.get(e,n,r),has:(e,n)=>!!zm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ah="@firebase/app",Wm="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new bd("@firebase/app"),iS="@firebase/app-compat",sS="@firebase/analytics-compat",oS="@firebase/analytics",aS="@firebase/app-check-compat",lS="@firebase/app-check",uS="@firebase/auth",cS="@firebase/auth-compat",hS="@firebase/database",dS="@firebase/data-connect",fS="@firebase/database-compat",pS="@firebase/functions",mS="@firebase/functions-compat",gS="@firebase/installations",yS="@firebase/installations-compat",_S="@firebase/messaging",vS="@firebase/messaging-compat",ES="@firebase/performance",wS="@firebase/performance-compat",AS="@firebase/remote-config",TS="@firebase/remote-config-compat",IS="@firebase/storage",SS="@firebase/storage-compat",RS="@firebase/firestore",CS="@firebase/vertexai-preview",kS="@firebase/firestore-compat",PS="firebase",NS="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="[DEFAULT]",OS={[Ah]:"fire-core",[iS]:"fire-core-compat",[oS]:"fire-analytics",[sS]:"fire-analytics-compat",[lS]:"fire-app-check",[aS]:"fire-app-check-compat",[uS]:"fire-auth",[cS]:"fire-auth-compat",[hS]:"fire-rtdb",[dS]:"fire-data-connect",[fS]:"fire-rtdb-compat",[pS]:"fire-fn",[mS]:"fire-fn-compat",[gS]:"fire-iid",[yS]:"fire-iid-compat",[_S]:"fire-fcm",[vS]:"fire-fcm-compat",[ES]:"fire-perf",[wS]:"fire-perf-compat",[AS]:"fire-rc",[TS]:"fire-rc-compat",[IS]:"fire-gcs",[SS]:"fire-gcs-compat",[RS]:"fire-fst",[kS]:"fire-fst-compat",[CS]:"fire-vertex","fire-js":"fire-js",[PS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new Map,DS=new Map,Ih=new Map;function Hm(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(Ih.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Ih.set(e,t);for(const n of El.values())Hm(n,t);for(const n of DS.values())Hm(n,t);return!0}function nu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ht(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new Ro("app","Firebase",VS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=NS;function Bv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Th,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw nr.create("bad-app-name",{appName:String(i)});if(n||(n=Lv()),!n)throw nr.create("no-options");const s=El.get(i);if(s){if(lo(n,s.options)&&lo(r,s.config))return s;throw nr.create("duplicate-app",{appName:i})}const o=new BI(i);for(const u of Ih.values())o.addComponent(u);const l=new xS(n,r,o);return El.set(i,l),l}function Bd(t=Th){const e=El.get(t);if(!e&&t===Th&&Lv())return Bv();if(!e)throw nr.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let i=(r=OS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(l.join(" "));return}Ur(new ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS="firebase-heartbeat-database",MS=1,uo="firebase-heartbeat-store";let Ec=null;function jv(){return Ec||(Ec=ZI(LS,MS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(uo)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),Ec}async function US(t){try{const n=(await jv()).transaction(uo),r=await n.objectStore(uo).get(zv(t));return await n.done,r}catch(e){if(e instanceof nn)Sn.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function Km(t,e){try{const r=(await jv()).transaction(uo,"readwrite");await r.objectStore(uo).put(e,zv(t)),await r.done}catch(n){if(n instanceof nn)Sn.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function zv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=1024,FS=30*24*60*60*1e3;class BS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=FS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qm(),{heartbeatsToSend:r,unsentEntries:i}=jS(this._heartbeatsCache.heartbeats),s=vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Sn.warn(n),""}}}function qm(){return new Date().toISOString().substring(0,10)}function jS(t,e=bS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kI()?PI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await US(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gm(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t){Ur(new ar("platform-logger",e=>new nS(e),"PRIVATE")),Ur(new ar("heartbeat",e=>new BS(e),"PRIVATE")),Gt(Ah,Wm,t),Gt(Ah,Wm,"esm2017"),Gt("fire-js","")}WS("");var HS="firebase",KS="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(HS,KS,"app");function jd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Wv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qS=Wv,Hv=new Ro("auth","Firebase",Wv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new bd("@firebase/auth");function GS(t,...e){wl.logLevel<=ee.WARN&&wl.warn(`Auth (${Gr}): ${t}`,...e)}function Ba(t,...e){wl.logLevel<=ee.ERROR&&wl.error(`Auth (${Gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw zd(t,...e)}function Qt(t,...e){return zd(t,...e)}function Kv(t,e,n){const r=Object.assign(Object.assign({},qS()),{[e]:n});return new Ro("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return Kv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hv.create(t,...e)}function q(t,e,...n){if(!t)throw zd(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ba(e),new Error(e)}function Rn(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QS(){return Qm()==="http:"||Qm()==="https:"}function Qm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QS()||II()||"connection"in navigator)?navigator.onLine:!0}function YS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=wI()||SI()}get(){return $S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=new ko(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mr(t,e,n,r,i={}){return Gv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Co(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return TI()||(h.referrerPolicy="no-referrer"),qv.fetch()(Qv(t,t.config.apiHost,n,l),h)})}async function Gv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XS),e);try{const i=new e1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Aa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Kv(t,f,h);Bt(t,f)}}catch(i){if(i instanceof nn)throw i;Bt(t,"network-request-failed",{message:String(i)})}}async function Po(t,e,n,r,i={}){const s=await mr(t,e,n,r,i);return"mfaPendingCredential"in s&&Bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Qv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wd(t.config,i):`${t.config.apiScheme}://${i}`}function ZS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class e1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),JS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qt(t,e,r);return i.customData._tokenResponse=n,i}function $m(t){return t!==void 0&&t.enterprise!==void 0}class t1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function n1(t,e){return mr(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(t,e){return mr(t,"POST","/v1/accounts:delete",e)}async function $v(t,e){return mr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i1(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=Hd(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bs(wc(i.auth_time)),issuedAtTime:bs(wc(i.iat)),expirationTime:bs(wc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wc(t){return Number(t)*1e3}function Hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ba("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dv(n);return i?JSON.parse(i):(Ba("Failed to decode base64 JWT payload"),null)}catch(i){return Ba("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ym(t){const e=Hd(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&s1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function s1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t){var e;const n=t.auth,r=await t.getIdToken(),i=await co(t,$v(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Yv(s.providerUserInfo):[],l=l1(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Rh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function a1(t){const e=We(t);await Al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Yv(t){return t.map(e=>{var{providerId:n}=e,r=jd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(t,e){const n=await Gv(t,{},async()=>{const r=Co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Qv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",qv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function c1(t,e){return mr(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ym(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=Ym(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await u1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Si;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new o1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await co(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return i1(this,e)}reload(){return a1(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Al(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await co(this,r1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:D,isAnonymous:F,providerData:b,stsTokenManager:v}=n;q(S&&v,e,"internal-error");const y=Si.fromJSON(this.name,v);q(typeof S=="string",e,"internal-error"),xn(g,e.name),xn(m,e.name),q(typeof D=="boolean",e,"internal-error"),q(typeof F=="boolean",e,"internal-error"),xn(A,e.name),xn(C,e.name),xn(N,e.name),xn(V,e.name),xn(I,e.name),xn(E,e.name);const _=new yn({uid:S,auth:e,email:m,emailVerified:D,displayName:g,isAnonymous:F,photoURL:C,phoneNumber:A,tenantId:N,stsTokenManager:y,createdAt:I,lastLoginAt:E});return b&&Array.isArray(b)&&(_.providerData=b.map(w=>Object.assign({},w))),V&&(_._redirectEventId=V),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new Si;i.updateFromServerResponse(n);const s=new yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Al(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Yv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Si;l.updateFromIdToken(r);const u=new yn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Rh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new Map;function _n(t){Rn(t instanceof Function,"Expected a class definition");let e=Xm.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xv.type="NONE";const Jm=Xv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ja(this.userKey,i.apiKey,s),this.fullPersistenceKey=ja("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ri(_n(Jm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||_n(Jm);const o=ja(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const g=yn._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ri(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ri(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rE(e))return"Blackberry";if(iE(e))return"Webos";if(Zv(e))return"Safari";if((e.includes("chrome/")||eE(e))&&!e.includes("edge/"))return"Chrome";if(nE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jv(t=tt()){return/firefox\//i.test(t)}function Zv(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eE(t=tt()){return/crios\//i.test(t)}function tE(t=tt()){return/iemobile/i.test(t)}function nE(t=tt()){return/android/i.test(t)}function rE(t=tt()){return/blackberry/i.test(t)}function iE(t=tt()){return/webos/i.test(t)}function Kd(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function h1(t=tt()){var e;return Kd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function d1(){return RI()&&document.documentMode===10}function sE(t=tt()){return Kd(t)||nE(t)||iE(t)||rE(t)||/windows phone/i.test(t)||tE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t,e=[]){let n;switch(t){case"Browser":n=Zm(tt());break;case"Worker":n=`${Zm(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(t,e={}){return mr(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=6;class g1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:m1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eg(this),this.idTokenSubscription=new eg(this),this.beforeStateQueue=new f1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $v(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(En(this));const n=e?We(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await p1(this),n=new g1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ro("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await c1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qr(t){return We(t)}class eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=xI(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _1(t){ru=t}function aE(t){return ru.loadJS(t)}function v1(){return ru.recaptchaEnterpriseScript}function E1(){return ru.gapiScript}function w1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const A1="recaptcha-enterprise",T1="NO_RECAPTCHA";class I1{constructor(e){this.type=A1,this.auth=Qr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{n1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new t1(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;$m(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(T1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&$m(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=v1();u.length!==0&&(u+=l),aE(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function tg(t,e,n,r=!1){const i=new I1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ch(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await tg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await tg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(t,e){const n=nu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lo(s,e??{}))return i;Bt(i,"already-initialized")}return n.initialize({options:e})}function R1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function C1(t,e,n){const r=Qr(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=lE(e),{host:o,port:l}=k1(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),P1()}function lE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function k1(t){const e=lE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ng(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ng(o)}}}function ng(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function P1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function N1(t,e){return mr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(t,e){return Po(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function V1(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends qd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ho(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ho(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ch(e,n,"signInWithPassword",O1);case"emailLink":return D1(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ch(e,r,"signUpPassword",N1);case"emailLink":return V1(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e){return Po(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1="http://localhost";class br extends qd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ci(e,n)}buildRequest(){const e={requestUri:x1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Co(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M1(t){const e=Is(Ss(t)).link,n=e?Is(Ss(e)).deep_link_id:null,r=Is(Ss(t)).deep_link_id;return(r?Is(Ss(r)).link:null)||r||n||e||t}class Gd{constructor(e){var n,r,i,s,o,l;const u=Is(Ss(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,g=L1((i=u.mode)!==null&&i!==void 0?i:null);q(h&&f&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=M1(e);try{return new Gd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.providerId=Gi.PROVIDER_ID}static credential(e,n){return ho._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gd.parseLink(n);return q(r,"argument-error"),ho._fromEmailAndCode(e,r.code,r.tenantId)}}Gi.PROVIDER_ID="password";Gi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends uE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends No{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends No{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return br._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends No{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends No{constructor(){super("twitter.com")}static credential(e,n){return br._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(t,e){return Po(t,"POST","/v1/accounts:signUp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await yn._fromIdTokenResponse(e,r,i),o=rg(r);return new Fr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=rg(r);return new Fr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function rg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tl(e,n,r,i)}}function cE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tl._fromErrorAndOperation(t,s,e,r):s})}async function b1(t,e,n=!1){const r=await co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(t,e,n=!1){const{auth:r}=t;if(Ht(r.app))return Promise.reject(En(r));const i="reauthenticate";try{const s=await co(t,cE(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Hd(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),Fr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(t,e,n=!1){if(Ht(t.app))return Promise.reject(En(t));const r="signIn",i=await cE(t,r,e),s=await Fr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function B1(t,e){return hE(Qr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(t){const e=Qr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function j1(t,e,n){if(Ht(t.app))return Promise.reject(En(t));const r=Qr(t),o=await Ch(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",U1).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&dE(t),u}),l=await Fr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function z1(t,e,n){return Ht(t.app)?Promise.reject(En(t)):B1(We(t),Gi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dE(t),r})}function W1(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function H1(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function K1(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function fE(t){return We(t).signOut()}const Il="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Il,"1"),this.storage.removeItem(Il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=1e3,G1=10;class mE extends pE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);d1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,G1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mE.type="LOCAL";const Q1=mE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE extends pE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gE.type="SESSION";const yE=gE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await $1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}iu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Qd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function X1(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function J1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eR(){return _E()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="firebaseLocalStorageDb",tR=1,Sl="firebaseLocalStorage",EE="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function su(t,e){return t.transaction([Sl],e?"readwrite":"readonly").objectStore(Sl)}function nR(){const t=indexedDB.deleteDatabase(vE);return new Oo(t).toPromise()}function kh(){const t=indexedDB.open(vE,tR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sl,{keyPath:EE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sl)?e(r):(r.close(),await nR(),e(await kh()))})})}async function ig(t,e,n){const r=su(t,!0).put({[EE]:e,value:n});return new Oo(r).toPromise()}async function rR(t,e){const n=su(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function sg(t,e){const n=su(t,!0).delete(e);return new Oo(n).toPromise()}const iR=800,sR=3;class wE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _E()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=iu._getInstance(eR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await J1(),!this.activeServiceWorker)return;this.sender=new Y1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kh();return await ig(e,Il,"1"),await sg(e,Il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ig(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=su(i,!1).getAll();return new Oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wE.type="LOCAL";const oR=wE;new ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t,e){return e?_n(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d extends qd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lR(t){return hE(t.auth,new $d(t),t.bypassAuthState)}function uR(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),F1(n,new $d(t),t.bypassAuthState)}async function cR(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),b1(n,new $d(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lR;case"linkViaPopup":case"linkViaRedirect":return cR;case"reauthViaPopup":case"reauthViaRedirect":return uR;default:Bt(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=new ko(2e3,1e4);class _i extends AE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=Qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hR.get())};e()}}_i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR="pendingRedirect",za=new Map;class fR extends AE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=za.get(this.auth._key());if(!e){try{const r=await pR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}za.set(this.auth._key(),e)}return this.bypassAuthState||za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pR(t,e){const n=yR(e),r=gR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mR(t,e){za.set(t._key(),e)}function gR(t){return _n(t._redirectPersistence)}function yR(t){return ja(dR,t.config.apiKey,t.name)}async function _R(t,e,n=!1){if(Ht(t.app))return Promise.reject(En(t));const r=Qr(t),i=aR(r,e),o=await new fR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=10*60*1e3;class ER{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!TE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vR&&this.cachedEventUids.clear(),this.cachedEventUids.has(og(e))}saveEventToCache(e){this.cachedEventUids.add(og(e)),this.lastProcessedEventTime=Date.now()}}function og(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function TE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return TE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e={}){return mr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IR=/^https?/;async function SR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AR(t);for(const n of e)try{if(RR(n))return}catch{}Bt(t,"unauthorized-domain")}function RR(t){const e=Sh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IR.test(n))return!1;if(TR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new ko(3e4,6e4);function ag(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kR(t){return new Promise((e,n)=>{var r,i,s;function o(){ag(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ag(),n(Qt(t,"network-request-failed"))},timeout:CR.get()})}if(!((i=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$t().gapi)===null||s===void 0)&&s.load)o();else{const l=w1("iframefcb");return $t()[l]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},aE(`${E1()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Wa=null,e})}let Wa=null;function PR(t){return Wa=Wa||kR(t),Wa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=new ko(5e3,15e3),OR="__/auth/iframe",DR="emulator/auth/iframe",VR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LR(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wd(e,DR):`https://${t.config.authDomain}/${OR}`,r={apiKey:e.apiKey,appName:t.name,v:Gr},i=xR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Co(r).slice(1)}`}async function MR(t){const e=await PR(t),n=$t().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:LR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),l=$t().setTimeout(()=>{s(o)},NR.get());function u(){$t().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bR=500,FR=600,BR="_blank",jR="http://localhost";class lg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zR(t,e,n,r=bR,i=FR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},UR),{width:r.toString(),height:i.toString(),top:s,left:o}),h=tt().toLowerCase();n&&(l=eE(h)?BR:n),Jv(h)&&(e=e||jR,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[A,C])=>`${m}${A}=${C},`,"");if(h1(h)&&l!=="_self")return WR(e||"",l),new lg(null);const g=window.open(e||"",l,f);q(g,t,"popup-blocked");try{g.focus()}catch{}return new lg(g)}function WR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="__/auth/handler",KR="emulator/auth/handler",qR=encodeURIComponent("fac");async function ug(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gr,eventId:i};if(e instanceof uE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof No){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${qR}=${encodeURIComponent(u)}`:"";return`${GR(t)}?${Co(l).slice(1)}${h}`}function GR({config:t}){return t.emulator?Wd(t,KR):`https://${t.authDomain}/${HR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="webStorageSupport";class QR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yE,this._completeRedirectFn=_R,this._overrideRedirectResult=mR}async _openPopup(e,n,r,i){var s;Rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ug(e,n,r,Sh(),i);return zR(e,o,Qd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ug(e,n,r,Sh(),i);return X1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MR(e),r=new ER(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ac,{type:Ac},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ac];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sE()||Zv()||Kd()}}const $R=QR;var cg="@firebase/auth",hg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JR(t){Ur(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oE(t)},h=new y1(r,i,s,u);return R1(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new ar("auth-internal",e=>{const n=Qr(e.getProvider("auth").getImmediate());return(r=>new YR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(cg,hg,XR(t)),Gt(cg,hg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=5*60,eC=Mv("authIdTokenMaxAge")||ZR;let dg=null;const tC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eC)return;const i=n==null?void 0:n.token;dg!==i&&(dg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nC(t=Bd()){const e=nu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=S1(t,{popupRedirectResolver:$R,persistence:[oR,Q1,yE]}),r=Mv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=tC(s.toString());H1(n,o,()=>o(n.currentUser)),W1(n,l=>o(l))}}const i=Vv("auth");return i&&C1(n,`http://${i}`),n}function rC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JR("Browser");var fg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or,IE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function _(){}_.prototype=y.prototype,v.D=y.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(w,R,P){for(var T=Array(arguments.length-2),It=2;It<arguments.length;It++)T[It-2]=arguments[It];return y.prototype[R].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,_){_||(_=0);var w=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)w[R]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(R=0;16>R;++R)w[R]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=v.g[0],_=v.g[1],R=v.g[2];var P=v.g[3],T=y+(P^_&(R^P))+w[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=P+(R^y&(_^R))+w[1]+3905402710&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(_^P&(y^_))+w[2]+606105819&4294967295,R=P+(T<<17&4294967295|T>>>15),T=_+(y^R&(P^y))+w[3]+3250441966&4294967295,_=R+(T<<22&4294967295|T>>>10),T=y+(P^_&(R^P))+w[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=P+(R^y&(_^R))+w[5]+1200080426&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(_^P&(y^_))+w[6]+2821735955&4294967295,R=P+(T<<17&4294967295|T>>>15),T=_+(y^R&(P^y))+w[7]+4249261313&4294967295,_=R+(T<<22&4294967295|T>>>10),T=y+(P^_&(R^P))+w[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=P+(R^y&(_^R))+w[9]+2336552879&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(_^P&(y^_))+w[10]+4294925233&4294967295,R=P+(T<<17&4294967295|T>>>15),T=_+(y^R&(P^y))+w[11]+2304563134&4294967295,_=R+(T<<22&4294967295|T>>>10),T=y+(P^_&(R^P))+w[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=P+(R^y&(_^R))+w[13]+4254626195&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(_^P&(y^_))+w[14]+2792965006&4294967295,R=P+(T<<17&4294967295|T>>>15),T=_+(y^R&(P^y))+w[15]+1236535329&4294967295,_=R+(T<<22&4294967295|T>>>10),T=y+(R^P&(_^R))+w[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=P+(_^R&(y^_))+w[6]+3225465664&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^_&(P^y))+w[11]+643717713&4294967295,R=P+(T<<14&4294967295|T>>>18),T=_+(P^y&(R^P))+w[0]+3921069994&4294967295,_=R+(T<<20&4294967295|T>>>12),T=y+(R^P&(_^R))+w[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=P+(_^R&(y^_))+w[10]+38016083&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^_&(P^y))+w[15]+3634488961&4294967295,R=P+(T<<14&4294967295|T>>>18),T=_+(P^y&(R^P))+w[4]+3889429448&4294967295,_=R+(T<<20&4294967295|T>>>12),T=y+(R^P&(_^R))+w[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=P+(_^R&(y^_))+w[14]+3275163606&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^_&(P^y))+w[3]+4107603335&4294967295,R=P+(T<<14&4294967295|T>>>18),T=_+(P^y&(R^P))+w[8]+1163531501&4294967295,_=R+(T<<20&4294967295|T>>>12),T=y+(R^P&(_^R))+w[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=P+(_^R&(y^_))+w[2]+4243563512&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^_&(P^y))+w[7]+1735328473&4294967295,R=P+(T<<14&4294967295|T>>>18),T=_+(P^y&(R^P))+w[12]+2368359562&4294967295,_=R+(T<<20&4294967295|T>>>12),T=y+(_^R^P)+w[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=P+(y^_^R)+w[8]+2272392833&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^_)+w[11]+1839030562&4294967295,R=P+(T<<16&4294967295|T>>>16),T=_+(R^P^y)+w[14]+4259657740&4294967295,_=R+(T<<23&4294967295|T>>>9),T=y+(_^R^P)+w[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=P+(y^_^R)+w[4]+1272893353&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^_)+w[7]+4139469664&4294967295,R=P+(T<<16&4294967295|T>>>16),T=_+(R^P^y)+w[10]+3200236656&4294967295,_=R+(T<<23&4294967295|T>>>9),T=y+(_^R^P)+w[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=P+(y^_^R)+w[0]+3936430074&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^_)+w[3]+3572445317&4294967295,R=P+(T<<16&4294967295|T>>>16),T=_+(R^P^y)+w[6]+76029189&4294967295,_=R+(T<<23&4294967295|T>>>9),T=y+(_^R^P)+w[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=P+(y^_^R)+w[12]+3873151461&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^_)+w[15]+530742520&4294967295,R=P+(T<<16&4294967295|T>>>16),T=_+(R^P^y)+w[2]+3299628645&4294967295,_=R+(T<<23&4294967295|T>>>9),T=y+(R^(_|~P))+w[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=P+(_^(y|~R))+w[7]+1126891415&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~_))+w[14]+2878612391&4294967295,R=P+(T<<15&4294967295|T>>>17),T=_+(P^(R|~y))+w[5]+4237533241&4294967295,_=R+(T<<21&4294967295|T>>>11),T=y+(R^(_|~P))+w[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=P+(_^(y|~R))+w[3]+2399980690&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~_))+w[10]+4293915773&4294967295,R=P+(T<<15&4294967295|T>>>17),T=_+(P^(R|~y))+w[1]+2240044497&4294967295,_=R+(T<<21&4294967295|T>>>11),T=y+(R^(_|~P))+w[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=P+(_^(y|~R))+w[15]+4264355552&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~_))+w[6]+2734768916&4294967295,R=P+(T<<15&4294967295|T>>>17),T=_+(P^(R|~y))+w[13]+1309151649&4294967295,_=R+(T<<21&4294967295|T>>>11),T=y+(R^(_|~P))+w[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=P+(_^(y|~R))+w[11]+3174756917&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~_))+w[2]+718787259&4294967295,R=P+(T<<15&4294967295|T>>>17),T=_+(P^(R|~y))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var _=y-this.blockSize,w=this.B,R=this.h,P=0;P<y;){if(R==0)for(;P<=_;)i(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<y;)if(w[R++]=v.charCodeAt(P++),R==this.blockSize){i(this,w),R=0;break}}else for(;P<y;)if(w[R++]=v[P++],R==this.blockSize){i(this,w),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var _=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=_&255,_/=256;for(this.u(v),v=Array(16),y=_=0;4>y;++y)for(var w=0;32>w;w+=8)v[_++]=this.g[y]>>>w&255;return v};function s(v,y){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=y(v)}function o(v,y){this.h=y;for(var _=[],w=!0,R=v.length-1;0<=R;R--){var P=v[R]|0;w&&P==y||(_[R]=P,w=!1)}this.g=_}var l={};function u(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return g;if(0>v)return V(h(-v));for(var y=[],_=1,w=0;v>=_;w++)y[w]=v/_|0,_*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return V(f(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),w=g,R=0;R<v.length;R+=8){var P=Math.min(8,v.length-R),T=parseInt(v.substring(R,R+P),y);8>P?(P=h(Math.pow(y,P)),w=w.j(P).add(h(T))):(w=w.j(_),w=w.add(h(T)))}return w}var g=u(0),m=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-V(this).m();for(var v=0,y=1,_=0;_<this.g.length;_++){var w=this.i(_);v+=(0<=w?w:4294967296+w)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(N(this))return"-"+V(this).toString(v);for(var y=h(Math.pow(v,6)),_=this,w="";;){var R=D(_,y).g;_=I(_,R.j(y));var P=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=R,C(_))return P+w;for(;6>P.length;)P="0"+P;w=P+w}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function N(v){return v.h==-1}t.l=function(v){return v=I(this,v),N(v)?-1:C(v)?0:1};function V(v){for(var y=v.g.length,_=[],w=0;w<y;w++)_[w]=~v.g[w];return new o(_,~v.h).add(m)}t.abs=function(){return N(this)?V(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),_=[],w=0,R=0;R<=y;R++){var P=w+(this.i(R)&65535)+(v.i(R)&65535),T=(P>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);w=T>>>16,P&=65535,T&=65535,_[R]=T<<16|P}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(v,y){return v.add(V(y))}t.j=function(v){if(C(this)||C(v))return g;if(N(this))return N(v)?V(this).j(V(v)):V(V(this).j(v));if(N(v))return V(this.j(V(v)));if(0>this.l(A)&&0>v.l(A))return h(this.m()*v.m());for(var y=this.g.length+v.g.length,_=[],w=0;w<2*y;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var R=0;R<v.g.length;R++){var P=this.i(w)>>>16,T=this.i(w)&65535,It=v.i(R)>>>16,yr=v.i(R)&65535;_[2*w+2*R]+=T*yr,E(_,2*w+2*R),_[2*w+2*R+1]+=P*yr,E(_,2*w+2*R+1),_[2*w+2*R+1]+=T*It,E(_,2*w+2*R+1),_[2*w+2*R+2]+=P*It,E(_,2*w+2*R+2)}for(w=0;w<y;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=y;w<2*y;w++)_[w]=0;return new o(_,0)};function E(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function S(v,y){this.g=v,this.h=y}function D(v,y){if(C(y))throw Error("division by zero");if(C(v))return new S(g,g);if(N(v))return y=D(V(v),y),new S(V(y.g),V(y.h));if(N(y))return y=D(v,V(y)),new S(V(y.g),y.h);if(30<v.g.length){if(N(v)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,w=y;0>=w.l(v);)_=F(_),w=F(w);var R=b(_,1),P=b(w,1);for(w=b(w,2),_=b(_,2);!C(w);){var T=P.add(w);0>=T.l(v)&&(R=R.add(_),P=T),w=b(w,1),_=b(_,1)}return y=I(v,R.j(y)),new S(R,y)}for(R=g;0<=v.l(y);){for(_=Math.max(1,Math.floor(v.m()/y.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),P=h(_),T=P.j(y);N(T)||0<T.l(v);)_-=w,P=h(_),T=P.j(y);C(P)&&(P=m),R=R.add(P),v=I(v,T)}return new S(R,v)}t.A=function(v){return D(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)&v.i(w);return new o(_,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)|v.i(w);return new o(_,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)^v.i(w);return new o(_,this.h^v.h)};function F(v){for(var y=v.g.length+1,_=[],w=0;w<y;w++)_[w]=v.i(w)<<1|v.i(w-1)>>>31;return new o(_,v.h)}function b(v,y){var _=y>>5;y%=32;for(var w=v.g.length-_,R=[],P=0;P<w;P++)R[P]=0<y?v.i(P+_)>>>y|v.i(P+_+1)<<32-y:v.i(P+_);return new o(R,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,IE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Or=o}).apply(typeof fg<"u"?fg:typeof self<"u"?self:typeof window<"u"?window:{});var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var SE,Rs,RE,Ha,Ph,CE,kE,PE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ta=="object"&&Ta];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var k=a[p];if(!(k in d))break e;d=d[k]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,k={next:function(){if(!p&&d<a.length){var O=d++;return{value:c(O,a[O]),done:!1}}return p=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,p),a.apply(c,k)}}return function(){return a.apply(c,arguments)}}function m(a,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,m.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,k,O){for(var B=Array(arguments.length-2),le=2;le<arguments.length;le++)B[le-2]=arguments[le];return c.prototype[k].apply(p,B)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function V(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const k=a.length||0,O=p.length||0;a.length=k+O;for(let B=0;B<O;B++)a[k+B]=p[B]}else a.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function b(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,c){let d,p;for(let k=1;k<arguments.length;k++){p=arguments[k];for(d in p)a[d]=p[d];for(let O=0;O<_.length;O++)d=_[O],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function T(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class It{constructor(){this.h=this.g=null}add(c,d){const p=yr.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var yr=new I(()=>new Xi,a=>a.reset());class Xi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let sn,j=!1,G=new It,X=()=>{const a=l.Promise.resolve(void 0);sn=()=>{a.then(pe)}};var pe=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){P(d)}var c=yr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}j=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var on=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function an(a,c){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{D(c.nodeName);var k=!0;break e}catch{}k=!1}k||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ln[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&an.aa.h.call(this)}}C(an,Te);var ln={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var un="closure_listenable_"+(1e6*Math.random()|0),Q0=0;function $0(a,c,d,p,k){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=k,this.key=++Q0,this.da=this.fa=!1}function jo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function zo(a){this.src=a,this.g={},this.h=0}zo.prototype.add=function(a,c,d,p,k){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=Au(a,c,p,k);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new $0(c,this.src,O,!!p,k),c.fa=d,a.push(c)),c};function wu(a,c){var d=c.type;if(d in a.g){var p=a.g[d],k=Array.prototype.indexOf.call(p,c,void 0),O;(O=0<=k)&&Array.prototype.splice.call(p,k,1),O&&(jo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Au(a,c,d,p){for(var k=0;k<a.length;++k){var O=a[k];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==p)return k}return-1}var Tu="closure_lm_"+(1e6*Math.random()|0),Iu={};function Nf(a,c,d,p,k){if(Array.isArray(c)){for(var O=0;O<c.length;O++)Nf(a,c[O],d,p,k);return null}return d=Vf(d),a&&a[un]?a.K(c,d,h(p)?!!p.capture:!!p,k):Y0(a,c,d,!1,p,k)}function Y0(a,c,d,p,k,O){if(!c)throw Error("Invalid event type");var B=h(k)?!!k.capture:!!k,le=Ru(a);if(le||(a[Tu]=le=new zo(a)),d=le.add(c,d,p,B,O),d.proxy)return d;if(p=X0(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)on||(k=B),k===void 0&&(k=!1),a.addEventListener(c.toString(),p,k);else if(a.attachEvent)a.attachEvent(Df(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function X0(){function a(d){return c.call(a.src,a.listener,d)}const c=J0;return a}function Of(a,c,d,p,k){if(Array.isArray(c))for(var O=0;O<c.length;O++)Of(a,c[O],d,p,k);else p=h(p)?!!p.capture:!!p,d=Vf(d),a&&a[un]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],d=Au(O,d,p,k),-1<d&&(jo(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=Ru(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Au(c,d,p,k)),(d=-1<a?c[a]:null)&&Su(d))}function Su(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[un])wu(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(Df(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Ru(c))?(wu(d,a),d.h==0&&(d.src=null,c[Tu]=null)):jo(a)}}}function Df(a){return a in Iu?Iu[a]:Iu[a]="on"+a}function J0(a,c){if(a.da)a=!0;else{c=new an(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&Su(a),a=d.call(p,c)}return a}function Ru(a){return a=a[Tu],a instanceof zo?a:null}var Cu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vf(a){return typeof a=="function"?a:(a[Cu]||(a[Cu]=function(c){return a.handleEvent(c)}),a[Cu])}function Ke(){ae.call(this),this.i=new zo(this),this.M=this,this.F=null}C(Ke,ae),Ke.prototype[un]=!0,Ke.prototype.removeEventListener=function(a,c,d,p){Of(this,a,c,d,p)};function nt(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Te(c,a);else if(c instanceof Te)c.target=c.target||a;else{var k=c;c=new Te(p,a),w(c,k)}if(k=!0,d)for(var O=d.length-1;0<=O;O--){var B=c.g=d[O];k=Wo(B,p,!0,c)&&k}if(B=c.g=a,k=Wo(B,p,!0,c)&&k,k=Wo(B,p,!1,c)&&k,d)for(O=0;O<d.length;O++)B=c.g=d[O],k=Wo(B,p,!1,c)&&k}Ke.prototype.N=function(){if(Ke.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)jo(d[p]);delete a.g[c],a.h--}}this.F=null},Ke.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},Ke.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Wo(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var k=!0,O=0;O<c.length;++O){var B=c[O];if(B&&!B.da&&B.capture==d){var le=B.listener,Le=B.ha||B.src;B.fa&&wu(a.i,B),k=le.call(Le,p)!==!1&&k}}return k&&!p.defaultPrevented}function xf(a,c,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Lf(a){a.g=xf(()=>{a.g=null,a.i&&(a.i=!1,Lf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Z0 extends ae{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Lf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ji(a){ae.call(this),this.h=a,this.g={}}C(Ji,ae);var Mf=[];function Uf(a){b(a.g,function(c,d){this.g.hasOwnProperty(d)&&Su(c)},a),a.g={}}Ji.prototype.N=function(){Ji.aa.N.call(this),Uf(this)},Ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ku=l.JSON.stringify,ew=l.JSON.parse,tw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Pu(){}Pu.prototype.h=null;function bf(a){return a.h||(a.h=a.i())}function Ff(){}var Zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Nu(){Te.call(this,"d")}C(Nu,Te);function Ou(){Te.call(this,"c")}C(Ou,Te);var _r={},Bf=null;function Ho(){return Bf=Bf||new Ke}_r.La="serverreachability";function jf(a){Te.call(this,_r.La,a)}C(jf,Te);function es(a){const c=Ho();nt(c,new jf(c))}_r.STAT_EVENT="statevent";function zf(a,c){Te.call(this,_r.STAT_EVENT,a),this.stat=c}C(zf,Te);function rt(a){const c=Ho();nt(c,new zf(c,a))}_r.Ma="timingevent";function Wf(a,c){Te.call(this,_r.Ma,a),this.size=c}C(Wf,Te);function ts(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ns(){this.g=!0}ns.prototype.xa=function(){this.g=!1};function nw(a,c,d,p,k,O){a.info(function(){if(a.g)if(O)for(var B="",le=O.split("&"),Le=0;Le<le.length;Le++){var re=le[Le].split("=");if(1<re.length){var qe=re[0];re=re[1];var Ge=qe.split("_");B=2<=Ge.length&&Ge[1]=="type"?B+(qe+"="+re+"&"):B+(qe+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+p+") [attempt "+k+"]: "+c+`
`+d+`
`+B})}function rw(a,c,d,p,k,O,B){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+k+"]: "+c+`
`+d+`
`+O+" "+B})}function Xr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+sw(a,d)+(p?" "+p:"")})}function iw(a,c){a.info(function(){return"TIMEOUT: "+c})}ns.prototype.info=function(){};function sw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var k=p[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<k.length;B++)k[B]=""}}}}return ku(d)}catch{return c}}var Ko={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Du;function qo(){}C(qo,Pu),qo.prototype.g=function(){return new XMLHttpRequest},qo.prototype.i=function(){return{}},Du=new qo;function Nn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kf}function Kf(){this.i=null,this.g="",this.h=!1}var qf={},Vu={};function xu(a,c,d){a.L=1,a.v=Yo(cn(c)),a.m=d,a.P=!0,Gf(a,null)}function Gf(a,c){a.F=Date.now(),Go(a),a.A=cn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),ap(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Kf,a.g=Sp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Z0(m(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Mf[0]=k.toString()),k=Mf);for(var O=0;O<k.length;O++){var B=Nf(d,k[O],p||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),es(),nw(a.i,a.u,a.A,a.l,a.R,a.m)}Nn.prototype.ca=function(a){a=a.target;const c=this.M;c&&hn(a)==3?c.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)e:{const Ge=hn(this.g);var c=this.g.Ba();const ei=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||pp(this.g)))){this.J||Ge!=4||c==7||(c==8||0>=ei?es(3):es(2)),Lu(this);var d=this.g.Z();this.X=d;t:if(Qf(this)){var p=pp(this.g);a="";var k=p.length,O=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),rs(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<k;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(O&&c==k-1)});p.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,rw(this.i,this.u,this.A,this.l,this.R,Ge,d),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Le=this.g;if((le=Le.g?Le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(le)){var re=le;break t}}re=null}if(d=re)Xr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mu(this,d);else{this.o=!1,this.s=3,rt(12),vr(this),rs(this);break e}}if(this.P){d=!0;let Ot;for(;!this.J&&this.C<B.length;)if(Ot=ow(this,B),Ot==Vu){Ge==4&&(this.s=4,rt(14),d=!1),Xr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==qf){this.s=4,rt(15),Xr(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Xr(this.i,this.l,Ot,null),Mu(this,Ot);if(Qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||B.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)Xr(this.i,this.l,B,"[Invalid Chunked Response]"),vr(this),rs(this);else if(0<B.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),zu(qe),qe.M=!0,rt(11))}}else Xr(this.i,this.l,B,null),Mu(this,B);Ge==4&&vr(this),this.o&&!this.J&&(Ge==4?wp(this.j,this):(this.o=!1,Go(this)))}else Tw(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),vr(this),rs(this)}}}catch{}finally{}};function Qf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ow(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?Vu:(d=Number(c.substring(d,p)),isNaN(d)?qf:(p+=1,p+d>c.length?Vu:(c=c.slice(p,p+d),a.C=p+d,c)))}Nn.prototype.cancel=function(){this.J=!0,vr(this)};function Go(a){a.S=Date.now()+a.I,$f(a,a.I)}function $f(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ts(m(a.ba,a),c)}function Lu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Nn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(iw(this.i,this.A),this.L!=2&&(es(),rt(17)),vr(this),this.s=2,rs(this)):$f(this,this.S-a)};function rs(a){a.j.G==0||a.J||wp(a.j,a)}function vr(a){Lu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Uf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Mu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Uu(d.h,a))){if(!a.K&&Uu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var k=p;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)na(d),ea(d);else break e;ju(d),rt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=ts(m(d.Za,d),6e3));if(1>=Jf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else wr(d,11)}else if((a.K||d.g==a)&&na(d),!E(c))for(k=d.Da.g.parse(c),c=0;c<k.length;c++){let re=k[c];if(d.T=re[0],re=re[1],d.G==2)if(re[0]=="c"){d.K=re[1],d.ia=re[2];const qe=re[3];qe!=null&&(d.la=qe,d.j.info("VER="+d.la));const Ge=re[4];Ge!=null&&(d.Aa=Ge,d.j.info("SVER="+d.Aa));const ei=re[5];ei!=null&&typeof ei=="number"&&0<ei&&(p=1.5*ei,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ot=a.g;if(Ot){const ia=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ia){var O=p.h;O.g||ia.indexOf("spdy")==-1&&ia.indexOf("quic")==-1&&ia.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(bu(O,O.h),O.h=null))}if(p.D){const Wu=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Wu&&(p.ya=Wu,ce(p.I,p.D,Wu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var B=a;if(p.qa=Ip(p,p.J?p.ia:null,p.W),B.K){Zf(p.h,B);var le=B,Le=p.L;Le&&(le.I=Le),le.B&&(Lu(le),Go(le)),p.g=B}else vp(p);0<d.i.length&&ta(d)}else re[0]!="stop"&&re[0]!="close"||wr(d,7);else d.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?wr(d,7):Bu(d):re[0]!="noop"&&d.l&&d.l.ta(re),d.v=0)}}es(4)}catch{}}var aw=class{constructor(a,c){this.g=a,this.map=c}};function Yf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jf(a){return a.h?1:a.g?a.g.size:0}function Uu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function bu(a,c){a.g?a.g.add(c):a.h=c}function Zf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Yf.prototype.cancel=function(){if(this.i=ep(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ep(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function lw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function uw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function tp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=uw(a),p=lw(a),k=p.length,O=0;O<k;O++)c.call(void 0,p[O],d&&d[O],a)}var np=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),k=null;if(0<=p){var O=a[d].substring(0,p);k=a[d].substring(p+1)}else O=a[d];c(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Er){this.h=a.h,Qo(this,a.j),this.o=a.o,this.g=a.g,$o(this,a.s),this.l=a.l;var c=a.i,d=new os;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),rp(this,d),this.m=a.m}else a&&(c=String(a).match(np))?(this.h=!1,Qo(this,c[1]||"",!0),this.o=is(c[2]||""),this.g=is(c[3]||"",!0),$o(this,c[4]),this.l=is(c[5]||"",!0),rp(this,c[6]||"",!0),this.m=is(c[7]||"")):(this.h=!1,this.i=new os(null,this.h))}Er.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ss(c,ip,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ss(c,ip,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ss(d,d.charAt(0)=="/"?fw:dw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ss(d,mw)),a.join("")};function cn(a){return new Er(a)}function Qo(a,c,d){a.j=d?is(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function $o(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function rp(a,c,d){c instanceof os?(a.i=c,gw(a.i,a.h)):(d||(c=ss(c,pw)),a.i=new os(c,a.h))}function ce(a,c,d){a.i.set(c,d)}function Yo(a){return ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function is(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ss(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,hw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function hw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ip=/[#\/\?@]/g,dw=/[#\?:]/g,fw=/[#\?]/g,pw=/[#\?@]/g,mw=/#/g;function os(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function On(a){a.g||(a.g=new Map,a.h=0,a.i&&cw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=os.prototype,t.add=function(a,c){On(this),this.i=null,a=Jr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function sp(a,c){On(a),c=Jr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function op(a,c){return On(a),c=Jr(a,c),a.g.has(c)}t.forEach=function(a,c){On(this),this.g.forEach(function(d,p){d.forEach(function(k){a.call(c,k,p,this)},this)},this)},t.na=function(){On(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const k=a[p];for(let O=0;O<k.length;O++)d.push(c[p])}return d},t.V=function(a){On(this);let c=[];if(typeof a=="string")op(this,a)&&(c=c.concat(this.g.get(Jr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return On(this),this.i=null,a=Jr(this,a),op(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function ap(a,c,d){sp(a,c),0<d.length&&(a.i=null,a.g.set(Jr(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const O=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var k=O;B[p]!==""&&(k+="="+encodeURIComponent(String(B[p]))),a.push(k)}}return this.i=a.join("&")};function Jr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function gw(a,c){c&&!a.j&&(On(a),a.i=null,a.g.forEach(function(d,p){var k=p.toLowerCase();p!=k&&(sp(this,p),ap(this,k,d))},a)),a.j=c}function yw(a,c){const d=new ns;if(l.Image){const p=new Image;p.onload=A(Dn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=A(Dn,d,"TestLoadImage: error",!1,c,p),p.onabort=A(Dn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(Dn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function _w(a,c){const d=new ns,p=new AbortController,k=setTimeout(()=>{p.abort(),Dn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(O=>{clearTimeout(k),O.ok?Dn(d,"TestPingServer: ok",!0,c):Dn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(k),Dn(d,"TestPingServer: error",!1,c)})}function Dn(a,c,d,p,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),p(d)}catch{}}function vw(){this.g=new tw}function Ew(a,c,d){const p=d||"";try{tp(a,function(k,O){let B=k;h(k)&&(B=ku(k)),c.push(p+O+"="+encodeURIComponent(B))})}catch(k){throw c.push(p+"type="+encodeURIComponent("_badmap")),k}}function Xo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Xo,Pu),Xo.prototype.g=function(){return new Jo(this.l,this.j)},Xo.prototype.i=function(a){return function(){return a}}({});function Jo(a,c){Ke.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Jo,Ke),t=Jo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ls(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,as(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ls(this)),this.g&&(this.readyState=3,ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function lp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?as(this):ls(this),this.readyState==3&&lp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,as(this))},t.Qa=function(a){this.g&&(this.response=a,as(this))},t.ga=function(){this.g&&as(this)};function as(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ls(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function up(a){let c="";return b(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Fu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=up(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ce(a,c,d))}function ve(a){Ke.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ve,Ke);var ww=/^https?$/i,Aw=["POST","PUT"];t=ve.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Du.g(),this.v=this.o?bf(this.o):bf(Du),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){cp(this,O);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var k in p)d.set(k,p[k]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const O of p.keys())d.set(O,p.get(O));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Aw,c,void 0))||p||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of d)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fp(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){cp(this,O)}};function cp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,hp(a),Zo(a)}function hp(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),Zo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zo(this,!0)),ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?dp(this):this.bb())},t.bb=function(){dp(this)};function dp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||hn(a)!=4||a.Z()!=2)){if(a.u&&hn(a)==4)xf(a.Ea,0,a);else if(nt(a,"readystatechange"),hn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=B===0){var k=String(a.D).match(np)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),p=!ww.test(k?k.toLowerCase():"")}d=p}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var O=2<hn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",hp(a)}}finally{Zo(a)}}}}function Zo(a,c){if(a.g){fp(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||nt(a,"ready");try{d.onreadystatechange=p}catch{}}}function fp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),ew(c)}};function pp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Tw(a){const c={};a=(a.g&&2<=hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(E(a[p]))continue;var d=R(a[p]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[k]||[];c[k]=O,O.push(d)}v(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function us(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function mp(a){this.Aa=0,this.i=[],this.j=new ns,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=us("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=us("baseRetryDelayMs",5e3,a),this.cb=us("retryDelaySeedMs",1e4,a),this.Wa=us("forwardChannelMaxRetries",2,a),this.wa=us("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Yf(a&&a.concurrentRequestLimit),this.Da=new vw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=mp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){rt(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Ip(this,null,this.W),ta(this)};function Bu(a){if(gp(a),a.G==3){var c=a.U++,d=cn(a.I);if(ce(d,"SID",a.K),ce(d,"RID",c),ce(d,"TYPE","terminate"),cs(a,d),c=new Nn(a,a.j,c),c.L=2,c.v=Yo(cn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Sp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Go(c)}Tp(a)}function ea(a){a.g&&(zu(a),a.g.cancel(),a.g=null)}function gp(a){ea(a),a.u&&(l.clearTimeout(a.u),a.u=null),na(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ta(a){if(!Xf(a.h)&&!a.s){a.s=!0;var c=a.Ga;sn||X(),j||(sn(),j=!0),G.add(c,a),a.B=0}}function Iw(a,c){return Jf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ts(m(a.Ga,a,c),Ap(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Nn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),w(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=_p(this,k,c),d=cn(this.I),ce(d,"RID",a),ce(d,"CVER",22),this.D&&ce(d,"X-HTTP-Session-Id",this.D),cs(this,d),O&&(this.O?c="headers="+encodeURIComponent(String(up(O)))+"&"+c:this.m&&Fu(d,this.m,O)),bu(this.h,k),this.Ua&&ce(d,"TYPE","init"),this.P?(ce(d,"$req",c),ce(d,"SID","null"),k.T=!0,xu(k,d,null)):xu(k,d,c),this.G=2}}else this.G==3&&(a?yp(this,a):this.i.length==0||Xf(this.h)||yp(this))};function yp(a,c){var d;c?d=c.l:d=a.U++;const p=cn(a.I);ce(p,"SID",a.K),ce(p,"RID",d),ce(p,"AID",a.T),cs(a,p),a.m&&a.o&&Fu(p,a.m,a.o),d=new Nn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=_p(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),bu(a.h,d),xu(d,p,c)}function cs(a,c){a.H&&b(a.H,function(d,p){ce(c,p,d)}),a.l&&tp({},function(d,p){ce(c,p,d)})}function _p(a,c,d){d=Math.min(a.i.length,d);var p=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let O=-1;for(;;){const B=["count="+d];O==-1?0<d?(O=k[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let le=!0;for(let Le=0;Le<d;Le++){let re=k[Le].g;const qe=k[Le].map;if(re-=O,0>re)O=Math.max(0,k[Le].g-100),le=!1;else try{Ew(qe,B,"req"+re+"_")}catch{p&&p(qe)}}if(le){p=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function vp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;sn||X(),j||(sn(),j=!0),G.add(c,a),a.v=0}}function ju(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ts(m(a.Fa,a),Ap(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ep(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ts(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),ea(this),Ep(this))};function zu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ep(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=cn(a.qa);ce(c,"RID","rpc"),ce(c,"SID",a.K),ce(c,"AID",a.T),ce(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ce(c,"TO",a.ja),ce(c,"TYPE","xmlhttp"),cs(a,c),a.m&&a.o&&Fu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Yo(cn(c)),d.m=null,d.P=!0,Gf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ea(this),ju(this),rt(19))};function na(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function wp(a,c){var d=null;if(a.g==c){na(a),zu(a),a.g=null;var p=2}else if(Uu(a.h,c))d=c.D,Zf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var k=a.B;p=Ho(),nt(p,new Wf(p,d)),ta(a)}else vp(a);else if(k=c.s,k==3||k==0&&0<c.X||!(p==1&&Iw(a,c)||p==2&&ju(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),k){case 1:wr(a,5);break;case 4:wr(a,10);break;case 3:wr(a,6);break;default:wr(a,2)}}}function Ap(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function wr(a,c){if(a.j.info("Error code "+c),c==2){var d=m(a.fb,a),p=a.Xa;const k=!p;p=new Er(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Qo(p,"https"),Yo(p),k?yw(p.toString(),d):_w(p.toString(),d)}else rt(2);a.G=0,a.l&&a.l.sa(c),Tp(a),gp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Tp(a){if(a.G=0,a.ka=[],a.l){const c=ep(a.h);(c.length!=0||a.i.length!=0)&&(V(a.ka,c),V(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Ip(a,c,d){var p=d instanceof Er?cn(d):new Er(d);if(p.g!="")c&&(p.g=c+"."+p.g),$o(p,p.s);else{var k=l.location;p=k.protocol,c=c?c+"."+k.hostname:k.hostname,k=+k.port;var O=new Er(null);p&&Qo(O,p),c&&(O.g=c),k&&$o(O,k),d&&(O.l=d),p=O}return d=a.D,c=a.ya,d&&c&&ce(p,d,c),ce(p,"VER",a.la),cs(a,p),p}function Sp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ve(new Xo({eb:d})):new ve(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rp(){}t=Rp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ra(){}ra.prototype.g=function(a,c){return new mt(a,c)};function mt(a,c){Ke.call(this),this.g=new mp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Zr(this)}C(mt,Ke),mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){Bu(this.g)},mt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ku(a),a=d);c.i.push(new aw(c.Ya++,a)),c.G==3&&ta(c)},mt.prototype.N=function(){this.g.l=null,delete this.j,Bu(this.g),delete this.g,mt.aa.N.call(this)};function Cp(a){Nu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(Cp,Nu);function kp(){Ou.call(this),this.status=1}C(kp,Ou);function Zr(a){this.g=a}C(Zr,Rp),Zr.prototype.ua=function(){nt(this.g,"a")},Zr.prototype.ta=function(a){nt(this.g,new Cp(a))},Zr.prototype.sa=function(a){nt(this.g,new kp)},Zr.prototype.ra=function(){nt(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,PE=function(){return new ra},kE=function(){return Ho()},CE=_r,Ph={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ko.NO_ERROR=0,Ko.TIMEOUT=8,Ko.HTTP_ERROR=6,Ha=Ko,Hf.COMPLETE="complete",RE=Hf,Ff.EventType=Zi,Zi.OPEN="a",Zi.CLOSE="b",Zi.ERROR="c",Zi.MESSAGE="d",Ke.prototype.listen=Ke.prototype.K,Rs=Ff,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,SE=ve}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});const pg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new bd("@firebase/firestore");function vs(){return Br.logLevel}function W(t,...e){if(Br.logLevel<=ee.DEBUG){const n=e.map(Yd);Br.debug(`Firestore (${Qi}): ${t}`,...n)}}function Cn(t,...e){if(Br.logLevel<=ee.ERROR){const n=e.map(Yd);Br.error(`Firestore (${Qi}): ${t}`,...n)}}function Mi(t,...e){if(Br.logLevel<=ee.WARN){const n=e.map(Yd);Br.warn(`Firestore (${Qi}): ${t}`,...n)}}function Yd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+t;throw Cn(e),new Error(e)}function oe(t,e){t||Q()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class sC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oC{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new NE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Xe(e)}}class aC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new aC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){oe(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.R=n.token,new uC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=hC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Ui(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new Oe(0,0))}static max(){return new $(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends fo{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const dC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends fo{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return dC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ae.fromString(e))}static fromName(e){return new K(Ae.fromString(e).popFirst(5))}static empty(){return new K(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ae(e.slice()))}}function fC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new lr(i,K.empty(),e)}function pC(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr($.min(),K.empty(),-1)}static max(){return new lr($.max(),K.empty(),-1)}}function mC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==gC)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function _C(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xd.oe=-1;function ou(t){return t==null}function Rl(t){return t===0&&1/t==-1/0}function vC(t){return typeof t=="number"&&Number.isInteger(t)&&!Rl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function DE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ia(this.root,e,this.comparator,!0)}}class Ia{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??be.RED,this.left=i??be.EMPTY,this.right=s??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gg(this.data.getIterator())}getIteratorFrom(e){return new gg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class gg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new _t([])}unionWith(e){let n=new je(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ui(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new VE("Invalid base64 string: "+s):s}}(e);return new He(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const EC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(oe(!!t),typeof t=="string"){let e=0;const n=EC.exec(t);if(oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zd(t){const e=t.mapValue.fields.__previous_value__;return Jd(e)?Zd(e):e}function po(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class mo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jd(t)?4:TC(t)?9007199254740991:AC(t)?10:11:Q()}function Zt(t,e){if(t===e)return!0;const n=zr(t);if(n!==zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return po(t).isEqual(po(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ur(i.timestampValue),l=ur(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return jr(i.bytesValue).isEqual(jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ie(i.doubleValue),l=Ie(s.doubleValue);return o===l?Rl(o)===Rl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ui(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(mg(o)!==mg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Zt(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function go(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function bi(t,e){if(t===e)return 0;const n=zr(t),r=zr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ie(s.integerValue||s.doubleValue),u=Ie(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return yg(t.timestampValue,e.timestampValue);case 4:return yg(po(t),po(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(s,o){const l=jr(s),u=jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ie(l[h],u[h]);if(f!==0)return f}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Ie(s.latitude),Ie(o.latitude));return l!==0?l:ie(Ie(s.longitude),Ie(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _g(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const g=s.fields||{},m=o.fields||{},A=(l=g.value)===null||l===void 0?void 0:l.arrayValue,C=(u=m.value)===null||u===void 0?void 0:u.arrayValue,N=ie(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:_g(A,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Sa.mapValue&&o===Sa.mapValue)return 0;if(s===Sa.mapValue)return 1;if(o===Sa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const m=ie(u[g],f[g]);if(m!==0)return m;const A=bi(l[u[g]],h[f[g]]);if(A!==0)return A}return ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function yg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=ur(t),r=ur(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function _g(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=bi(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function Fi(t){return Nh(t)}function Nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Nh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Nh(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function Oh(t){return!!t&&"integerValue"in t}function ef(t){return!!t&&"arrayValue"in t}function vg(t){return!!t&&"nullValue"in t}function Eg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ka(t){return!!t&&"mapValue"in t}function AC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $r(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fs(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Fs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ka(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$r(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ut(Fs(this.value))}}function xE(t){const e=[];return $r(t.fields,(n,r)=>{const i=new Fe([n]);if(Ka(r)){const s=xE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new _t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,$.min(),$.min(),$.min(),ut.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,$.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,$.min(),$.min(),ut.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,$.min(),$.min(),ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.position=e,this.inclusive=n}}function wg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=bi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ag(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function IC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{}class Pe extends LE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RC(e,n,r):n==="array-contains"?new PC(e,r):n==="in"?new NC(e,r):n==="not-in"?new OC(e,r):n==="array-contains-any"?new DC(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CC(e,r):new kC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bi(n,this.value)):n!==null&&zr(this.value)===zr(n)&&this.matchesComparison(bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends LE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new en(e,n)}matches(e){return ME(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ME(t){return t.op==="and"}function UE(t){return SC(t)&&ME(t)}function SC(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function Dh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Fi(t.value);if(UE(t))return t.filters.map(e=>Dh(e)).join(",");{const e=t.filters.map(n=>Dh(n)).join(",");return`${t.op}(${e})`}}function bE(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&Zt(r.value,i.value)}(t,e):t instanceof en?function(r,i){return i instanceof en&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&bE(o,i.filters[l]),!0):!1}(t,e):void Q()}function FE(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Fi(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(FE).join(" ,")+"}"}(t):"Filter"}class RC extends Pe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class CC extends Pe{constructor(e,n){super(e,"in",n),this.keys=BE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kC extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=BE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function BE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class PC extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ef(n)&&go(n.arrayValue,this.value)}}class NC extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&go(this.value.arrayValue,n)}}class OC extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!go(this.value.arrayValue,n)}}class DC extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ef(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>go(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Tg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new VC(t,e,n,r,i,s,o)}function tf(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ou(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fi(r)).join(",")),e.ue=n}return e.ue}function nf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ag(t.startAt,e.startAt)&&Ag(t.endAt,e.endAt)}function Vh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xC(t,e,n,r,i,s,o,l){return new au(t,e,n,r,i,s,o,l)}function rf(t){return new au(t)}function Ig(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function LC(t){return t.collectionGroup!==null}function Bs(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new je(Fe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new kl(s,r))}),n.has(Fe.keyField().canonicalString())||e.ce.push(new kl(Fe.keyField(),r))}return e.ce}function Yt(t){const e=Y(t);return e.le||(e.le=MC(e,Bs(t))),e.le}function MC(t,e){if(t.limitType==="F")return Tg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new kl(i.field,s)});const n=t.endAt?new Cl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cl(t.startAt.position,t.startAt.inclusive):null;return Tg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xh(t,e,n){return new au(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lu(t,e){return nf(Yt(t),Yt(e))&&t.limitType===e.limitType}function jE(t){return`${tf(Yt(t))}|lt:${t.limitType}`}function ri(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>FE(i)).join(", ")}]`),ou(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Fi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Fi(i)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function uu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Bs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=wg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Bs(r),i)||r.endAt&&!function(o,l,u){const h=wg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Bs(r),i))}(t,e)}function UC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zE(t){return(e,n)=>{let r=!1;for(const i of Bs(t)){const s=bC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bC(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?bi(u,h):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return DE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=new _e(K.comparator);function kn(){return FC}const WE=new _e(K.comparator);function Cs(...t){let e=WE;for(const n of t)e=e.insert(n.key,n);return e}function HE(t){let e=WE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kr(){return js()}function KE(){return js()}function js(){return new $i(t=>t.toString(),(t,e)=>t.isEqual(e))}const BC=new _e(K.comparator),jC=new je(K.comparator);function Z(...t){let e=jC;for(const n of t)e=e.add(n);return e}const zC=new je(ie);function WC(){return zC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rl(e)?"-0":e}}function qE(t){return{integerValue:""+t}}function HC(t,e){return vC(e)?qE(e):sf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this._=void 0}}function KC(t,e,n){return t instanceof Pl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jd(s)&&(s=Zd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Bi?QE(t,e):t instanceof yo?$E(t,e):function(i,s){const o=GE(i,s),l=Sg(o)+Sg(i.Pe);return Oh(o)&&Oh(i.Pe)?qE(l):sf(i.serializer,l)}(t,e)}function qC(t,e,n){return t instanceof Bi?QE(t,e):t instanceof yo?$E(t,e):n}function GE(t,e){return t instanceof Nl?function(r){return Oh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pl extends cu{}class Bi extends cu{constructor(e){super(),this.elements=e}}function QE(t,e){const n=YE(e);for(const r of t.elements)n.some(i=>Zt(i,r))||n.push(r);return{arrayValue:{values:n}}}class yo extends cu{constructor(e){super(),this.elements=e}}function $E(t,e){let n=YE(e);for(const r of t.elements)n=n.filter(i=>!Zt(i,r));return{arrayValue:{values:n}}}class Nl extends cu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Sg(t){return Ie(t.integerValue||t.doubleValue)}function YE(t){return ef(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n){this.field=e,this.transform=n}}function QC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Bi&&i instanceof Bi||r instanceof yo&&i instanceof yo?Ui(r.elements,i.elements,Zt):r instanceof Nl&&i instanceof Nl?Zt(r.Pe,i.Pe):r instanceof Pl&&i instanceof Pl}(t.transform,e.transform)}class $C{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hu{}function XE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ZE(t.key,Xt.none()):new xo(t.key,t.data,Xt.none());{const n=t.data,r=ut.empty();let i=new je(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gr(t.key,r,new _t(i.toArray()),Xt.none())}}function YC(t,e,n){t instanceof xo?function(i,s,o){const l=i.value.clone(),u=Cg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(i,s,o){if(!qa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Cg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(JE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zs(t,e,n,r){return t instanceof xo?function(s,o,l,u){if(!qa(s.precondition,o))return l;const h=s.value.clone(),f=kg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(s,o,l,u){if(!qa(s.precondition,o))return l;const h=kg(s.fieldTransforms,u,o),f=o.data;return f.setAll(JE(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return qa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function XC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=GE(r.transform,i||null);s!=null&&(n===null&&(n=ut.empty()),n.set(r.field,s))}return n||null}function Rg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ui(r,i,(s,o)=>QC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xo extends hu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gr extends hu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function JE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cg(t,e,n){const r=new Map;oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,qC(o,l,n[i]))}return r}function kg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KC(s,o,e))}return r}class ZE extends hu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JC extends hu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&YC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=KE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=XE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Ui(this.mutations,e.mutations,(n,r)=>Rg(n,r))&&Ui(this.baseMutations,e.baseMutations,(n,r)=>Rg(n,r))}}class of{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length);let i=function(){return BC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new of(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,te;function nk(t){switch(t){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function e0(t){if(t===void 0)return Cn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Re.OK:return L.OK;case Re.CANCELLED:return L.CANCELLED;case Re.UNKNOWN:return L.UNKNOWN;case Re.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Re.INTERNAL:return L.INTERNAL;case Re.UNAVAILABLE:return L.UNAVAILABLE;case Re.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Re.NOT_FOUND:return L.NOT_FOUND;case Re.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Re.ABORTED:return L.ABORTED;case Re.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Re.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(te=Re||(Re={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=new Or([4294967295,4294967295],0);function Pg(t){const e=rk().encode(t),n=new IE;return n.update(e),new Uint8Array(n.digest())}function Ng(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Or([n,r],0),new Or([i,s],0)]}class af{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ks(`Invalid padding: ${n}`);if(r<0)throw new ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ks(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Or.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Or.fromNumber(r)));return i.compare(ik)===1&&(i=new Or([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Pg(e),[r,i]=Ng(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new af(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Pg(e),[r,i]=Ng(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new du($.min(),i,new _e(ie),kn(),Z())}}class Lo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Lo(r,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class t0{constructor(e,n){this.targetId=e,this.me=n}}class n0{constructor(e,n,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Og{constructor(){this.fe=0,this.ge=Vg(),this.pe=He.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),n=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Lo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Vg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sk{constructor(e){this.Le=e,this.Be=new Map,this.ke=kn(),this.qe=Dg(),this.Qe=new _e(ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Vh(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Ze.newNoDocument(o,$.min()))}else oe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=jr(r).toUint8Array()}catch(u){if(u instanceof VE)return Mi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new af(o,i,s)}catch(u){return Mi(u instanceof ks?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Vh(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ze.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Z();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new du(e,n,this.Qe,this.ke,r);return this.ke=kn(),this.qe=Dg(),this.Qe=new _e(ie),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Og,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new je(ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Og),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Dg(){return new _e(K.comparator)}function Vg(){return new _e(K.comparator)}const ok={asc:"ASCENDING",desc:"DESCENDING"},ak={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lk={and:"AND",or:"OR"};class uk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Lh(t,e){return t.useProto3Json||ou(e)?e:{value:e}}function Ol(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function r0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ck(t,e){return Ol(t,e.toTimestamp())}function Jt(t){return oe(!!t),$.fromTimestamp(function(n){const r=ur(n);return new Oe(r.seconds,r.nanos)}(t))}function lf(t,e){return Mh(t,e).canonicalString()}function Mh(t,e){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function i0(t){const e=Ae.fromString(t);return oe(u0(e)),e}function Uh(t,e){return lf(t.databaseId,e.path)}function Tc(t,e){const n=i0(e);if(n.get(1)!==t.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(o0(n))}function s0(t,e){return lf(t.databaseId,e)}function hk(t){const e=i0(t);return e.length===4?Ae.emptyPath():o0(e)}function bh(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function o0(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xg(t,e,n){return{name:Uh(t,e),fields:n.value.mapValue.fields}}function dk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string"),He.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),He.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:e0(h.code);return new H(f,h.message||"")}(o);n=new n0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Tc(t,r.document.name),s=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):$.min(),l=new ut({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ga(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Tc(t,r.document),s=r.readTime?Jt(r.readTime):$.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ga([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Tc(t,r.document),s=r.removedTargetIds||[];n=new Ga([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new tk(i,s),l=r.targetId;n=new t0(l,o)}}return n}function fk(t,e){let n;if(e instanceof xo)n={update:xg(t,e.key,e.value)};else if(e instanceof ZE)n={delete:Uh(t,e.key)};else if(e instanceof gr)n={update:xg(t,e.key,e.data),updateMask:Ak(e.fieldMask)};else{if(!(e instanceof JC))return Q();n={verify:Uh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Bi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof yo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Nl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ck(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function pk(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Jt(i.updateTime):Jt(s);return o.isEqual($.min())&&(o=Jt(s)),new $C(o,i.transformResults||[])}(n,e))):[]}function mk(t,e){return{documents:[s0(t,e.path)]}}function gk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=s0(t,i);const s=function(h){if(h.length!==0)return l0(en.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:ii(m.field),direction:vk(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Lh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function yk(t){let e=hk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const m=a0(g);return m instanceof en&&UE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(m=>function(C){return new kl(si(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,ou(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(g){const m=!!g.before,A=g.values||[];return new Cl(A,m)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const m=!g.before,A=g.values||[];return new Cl(A,m)}(n.endAt)),xC(e,i,o,s,l,"F",u,h)}function _k(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function a0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=si(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=si(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=si(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=si(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(si(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>a0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function vk(t){return ok[t]}function Ek(t){return ak[t]}function wk(t){return lk[t]}function ii(t){return{fieldPath:t.canonicalString()}}function si(t){return Fe.fromServerFormat(t.fieldPath)}function l0(t){return t instanceof Pe?function(n){if(n.op==="=="){if(Eg(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NAN"}};if(vg(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Eg(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NOT_NAN"}};if(vg(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(n.field),op:Ek(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(i=>l0(i));return r.length===1?r[0]:{compositeFilter:{op:wk(n.op),filters:r}}}(t):Q()}function Ak(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function u0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,i,s=$.min(),o=$.min(),l=He.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.ct=e}}function Ik(t){const e=yk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(){this.un=new Rk}addToCollectionParentIndex(e,n){return this.un.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(lr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class Rk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ji(0)}static kn(){return new ji(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.changes=new $i(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&zs(r.mutation,i,_t.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Cs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=kn();const o=js(),l=function(){return js()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof gr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),zs(f.mutation,h,f.mutation.getFieldMask(),Oe.now())):o.set(h.key,_t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new kk(f,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=js();let i=new _e((o,l)=>o-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||_t.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=KE();f.forEach(m=>{if(!s.has(m)){const A=XE(n.get(m),r.get(m));A!==null&&g.set(m,A),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(kr());let l=-1,u=s;return o.next(h=>x.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Z())).next(f=>({batchId:l,changes:HE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Cs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Cs();return this.indexManager.getCollectionParents(e,s).next(l=>x.forEach(l,u=>{const h=function(g,m){return new au(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=Cs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&zs(f.mutation,h,_t.empty(),Oe.now()),uu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return x.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jt(i.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Ik(i.bundledQuery),readTime:Jt(i.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this.overlays=new _e(K.comparator),this.Ir=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=kr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _e((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=kr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=kr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return x.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ek(n,r));let s=this.Ir.get(n);s===void 0&&(s=Z(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.Tr=new je(De.Er),this.dr=new je(De.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new De(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new De(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Ae([])),r=new De(n,e),i=new De(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Ae([])),r=new De(n,e),i=new De(n,e+1);let s=Z();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new De(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ie(e.wr,n.wr)}static Ar(e,n){return ie(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new je(De.Er)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new De(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),i=new De(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(ie);return n.forEach(i=>{const s=new De(i,0),o=new De(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),x.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new De(new K(s),0);let l=new je(ie);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),x.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return x.forEach(n.mutations,i=>{const s=new De(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new De(n,0),i=this.br.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.Mr=e,this.docs=function(){return new _e(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||mC(pC(f),r)<=0||(i.has(f.key)||uu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Lk(this)}getSize(e){return x.resolve(this.size)}}class Lk extends Ck{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.persistence=e,this.Nr=new $i(n=>tf(n),nf),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Lr=0,this.Br=new uf,this.targetCount=0,this.kr=ji.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),x.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ji(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Kn(n),x.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Xd(0),this.Kr=!1,this.Kr=!0,this.$r=new Dk,this.referenceDelegate=e(this),this.Ur=new Mk(this),this.indexManager=new Sk,this.remoteDocumentCache=function(i){return new xk(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Tk(n),this.Gr=new Nk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ok,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Vk(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new bk(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return x.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class bk extends yC{constructor(e){super(),this.currentSequenceNumber=e}}class cf{constructor(e){this.persistence=e,this.Jr=new uf,this.Yr=null}static Zr(e){return new cf(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),x.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return x.or([()=>x.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return CI()?8:_C(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Fk;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(vs()<=ee.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ri(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),x.resolve()):(vs()<=ee.DEBUG&&W("QueryEngine","Query:",ri(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(vs()<=ee.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ri(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):x.resolve())}Yi(e,n){if(Ig(n))return x.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xh(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,xh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Ig(n)||i.isEqual($.min())?x.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?x.resolve(null):(vs()<=ee.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ri(n)),this.rs(e,o,n,fC(i,-1)).next(l=>l))})}ts(e,n){let r=new je(zE(e));return n.forEach((i,s)=>{uu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return vs()<=ee.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ri(n)),this.Ji.getDocumentsMatchingQuery(e,n,lr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new _e(ie),this._s=new $i(s=>tf(s),nf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function zk(t,e,n,r){return new jk(t,e,n,r)}async function c0(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Z();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Wk(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,m=g.keys();let A=x.resolve();return m.forEach(C=>{A=A.next(()=>f.getEntry(u,C)).next(N=>{const V=h.docVersions.get(C);oe(V!==null),N.version.compareTo(V)<0&&(g.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function h0(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Hk(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const m=i.get(g);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let A=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(He.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(g,A),function(N,V,I){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=kn(),h=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Kk(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual($.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return x.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function Kk(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual($.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function qk(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Gk(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Fh(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Lg(t,e,n){const r=Y(t);let i=$.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=Y(u),m=g._s.get(f);return m!==void 0?x.resolve(g.os.get(m)):g.Ur.getTargetData(h,f)}(r,o,Yt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?s:Z())).next(l=>(Qk(r,UC(e),l),{documents:l,Ts:s})))}function Qk(t,e,n){let r=t.us.get(e)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Mg{constructor(){this.activeTargetIds=WC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $k{constructor(){this.so=new Mg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Mg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra=null;function Ic(){return Ra===null?Ra=function(){return 268435456+Math.round(2147483648*Math.random())}():Ra++,"0x"+Ra.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class Zk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Ic(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Mi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Xk[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Ic();return new Promise((o,l)=>{const u=new SE;u.setWithCredentials(!0),u.listenOnce(RE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ha.NO_ERROR:const f=u.getResponseJson();W(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ha.TIMEOUT:W(Ye,`RPC '${e}' ${s} timed out`),l(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ha.HTTP_ERROR:const g=u.getStatus();if(W(Ye,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const A=m==null?void 0:m.error;if(A&&A.status&&A.message){const C=function(V){const I=V.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(I)>=0?I:L.UNKNOWN}(A.status);l(new H(C,A.message))}else l(new H(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{W(Ye,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);W(Ye,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Ic(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PE(),l=kE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);let m=!1,A=!1;const C=new Jk({Io:V=>{A?W(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(m||(W(Ye,`Opening RPC '${e}' stream ${i} transport.`),g.open(),m=!0),W(Ye,`RPC '${e}' stream ${i} sending:`,V),g.send(V))},To:()=>g.close()}),N=(V,I,E)=>{V.listen(I,S=>{try{E(S)}catch(D){setTimeout(()=>{throw D},0)}})};return N(g,Rs.EventType.OPEN,()=>{A||(W(Ye,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),N(g,Rs.EventType.CLOSE,()=>{A||(A=!0,W(Ye,`RPC '${e}' stream ${i} transport closed`),C.So())}),N(g,Rs.EventType.ERROR,V=>{A||(A=!0,Mi(Ye,`RPC '${e}' stream ${i} transport errored:`,V),C.So(new H(L.UNAVAILABLE,"The operation could not be completed")))}),N(g,Rs.EventType.MESSAGE,V=>{var I;if(!A){const E=V.data[0];oe(!!E);const S=E,D=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(D){W(Ye,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let b=function(_){const w=Re[_];if(w!==void 0)return e0(w)}(F),v=D.message;b===void 0&&(b=L.INTERNAL,v="Unknown error status: "+F+" with message "+D.message),A=!0,C.So(new H(b,v)),g.close()}else W(Ye,`RPC '${e}' stream ${i} received:`,E),C.bo(E)}}),N(l,CE.STAT_EVENT,V=>{V.stat===Ph.PROXY?W(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Ph.NOPROXY&&W(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t){return new uk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new d0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eP extends f0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=dk(this.serializer,e),r=function(s){if(!("targetChange"in s))return $.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?Jt(o.readTime):$.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=bh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Vh(u)?{documents:mk(s,u)}:{query:gk(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=r0(s,o.resumeToken);const h=Lh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo($.min())>0){l.readTime=Ol(s,o.snapshotVersion.toTimestamp());const h=Lh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=_k(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=bh(this.serializer),n.removeTarget=e,this.a_(n)}}class tP extends f0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return oe(!!e.streamToken),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=pk(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=bh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Mh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Mh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class rP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Cn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await Mo(h),h.q_.set("Unknown"),h.L_.delete(4),await pu(h)}(this))})}),this.q_=new rP(r,i)}}async function pu(t){if(Yr(t))for(const e of t.B_)await e(!0)}async function Mo(t){for(const e of t.B_)await e(!1)}function p0(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),mf(n)?pf(n):Yi(n).r_()&&ff(n,e))}function df(t,e){const n=Y(t),r=Yi(n);n.N_.delete(e),r.r_()&&m0(n,e),n.N_.size===0&&(r.r_()?r.o_():Yr(n)&&n.q_.set("Unknown"))}function ff(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Yi(t).A_(e)}function m0(t,e){t.Q_.xe(e),Yi(t).R_(e)}function pf(t){t.Q_=new sk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Yi(t).start(),t.q_.v_()}function mf(t){return Yr(t)&&!Yi(t).n_()&&t.N_.size>0}function Yr(t){return Y(t).L_.size===0}function g0(t){t.Q_=void 0}async function sP(t){t.q_.set("Online")}async function oP(t){t.N_.forEach((e,n)=>{ff(t,e)})}async function aP(t,e){g0(t),mf(t)?(t.q_.M_(e),pf(t)):t.q_.set("Unknown")}async function lP(t,e,n){if(t.q_.set("Online"),e instanceof n0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Dl(t,r)}else if(e instanceof Ga?t.Q_.Ke(e):e instanceof t0?t.Q_.He(e):t.Q_.We(e),!n.isEqual($.min()))try{const r=await h0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(He.EMPTY_BYTE_STRING,f.snapshotVersion)),m0(s,u);const g=new qn(f.target,u,h,f.sequenceNumber);ff(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Dl(t,r)}}async function Dl(t,e,n){if(!Vo(e))throw e;t.L_.add(1),await Mo(t),t.q_.set("Offline"),n||(n=()=>h0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await pu(t)})}function y0(t,e){return e().catch(n=>Dl(t,n,e))}async function mu(t){const e=Y(t),n=cr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;uP(e);)try{const i=await qk(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,cP(e,i)}catch(i){await Dl(e,i)}_0(e)&&v0(e)}function uP(t){return Yr(t)&&t.O_.length<10}function cP(t,e){t.O_.push(e);const n=cr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function _0(t){return Yr(t)&&!cr(t).n_()&&t.O_.length>0}function v0(t){cr(t).start()}async function hP(t){cr(t).p_()}async function dP(t){const e=cr(t);for(const n of t.O_)e.m_(n.mutations)}async function fP(t,e,n){const r=t.O_.shift(),i=of.from(r,e,n);await y0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mu(t)}async function pP(t,e){e&&cr(t).V_&&await async function(r,i){if(function(o){return nk(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();cr(r).s_(),await y0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mu(r)}}(t,e),_0(t)&&v0(t)}async function bg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Yr(n);n.L_.add(3),await Mo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await pu(n)}async function mP(t,e){const n=Y(t);e?(n.L_.delete(2),await pu(n)):e||(n.L_.add(2),await Mo(n),n.q_.set("Unknown"))}function Yi(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new eP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:sP.bind(null,t),Ro:oP.bind(null,t),mo:aP.bind(null,t),d_:lP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),mf(t)?pf(t):t.q_.set("Unknown")):(await t.K_.stop(),g0(t))})),t.K_}function cr(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new tP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:hP.bind(null,t),mo:pP.bind(null,t),f_:dP.bind(null,t),g_:fP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await mu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new gf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yf(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),Vo(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Cs(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new ki(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.W_=new _e(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class zi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new zi(e,n,ki.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class yP{constructor(){this.queries=Bg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=Bg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function Bg(){return new $i(t=>jE(t),lu)}async function _P(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new gP,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=yf(o,`Initialization of query '${ri(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&_f(n)}async function vP(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function EP(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&_f(n)}function wP(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function _f(t){t.Y_.forEach(e=>{e.next()})}var Bh,jg;(jg=Bh||(Bh={})).ea="default",jg.Cache="cache";class AP{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new zi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Bh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.key=e}}class w0{constructor(e){this.key=e}}class TP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=zE(e),this.Ra=new ki(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Fg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const m=i.get(f),A=uu(this.query,g)?g:null,C=!!m&&this.mutatedKeys.has(m.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let V=!1;m&&A?m.data.isEqual(A.data)?C!==N&&(r.track({type:3,doc:A}),V=!0):this.ga(m,A)||(r.track({type:2,doc:A}),V=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!m&&A?(r.track({type:0,doc:A}),V=!0):m&&!A&&(r.track({type:1,doc:m}),V=!0,(u||h)&&(l=!0)),V&&(A?(o=o.add(A),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(A,C){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return N(A)-N(C)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new zi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new w0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new E0(r))}),n}ba(e){this.Ta=e.Ts,this.da=Z();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return zi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class IP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SP{constructor(e){this.key=e,this.va=!1}}class RP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new $i(l=>jE(l),lu),this.Ma=new Map,this.xa=new Set,this.Oa=new _e(K.comparator),this.Na=new Map,this.La=new uf,this.Ba={},this.ka=new Map,this.qa=ji.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function CP(t,e,n=!0){const r=C0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await A0(r,e,n,!0),i}async function kP(t,e){const n=C0(t);await A0(n,e,!0,!1)}async function A0(t,e,n,r){const i=await Gk(t.localStore,Yt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await PP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&p0(t.remoteStore,i),l}async function PP(t,e,n,r,i){t.Ka=(g,m,A)=>async function(N,V,I,E){let S=V.view.ma(I);S.ns&&(S=await Lg(N.localStore,V.query,!1).then(({documents:v})=>V.view.ma(v,S)));const D=E&&E.targetChanges.get(V.targetId),F=E&&E.targetMismatches.get(V.targetId)!=null,b=V.view.applyChanges(S,N.isPrimaryClient,D,F);return Wg(N,V.targetId,b.wa),b.snapshot}(t,g,m,A);const s=await Lg(t.localStore,e,!0),o=new TP(e,s.Ts),l=o.ma(s.documents),u=Lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Wg(t,n,h.wa);const f=new IP(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function NP(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!lu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&df(r.remoteStore,i.targetId),jh(r,i.targetId)}).catch(Do)):(jh(r,i.targetId),await Fh(r.localStore,i.targetId,!0))}async function OP(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),df(n.remoteStore,r.targetId))}async function DP(t,e,n){const r=FP(t);try{const i=await function(o,l){const u=Y(o),h=Oe.now(),f=l.reduce((A,C)=>A.add(C.key),Z());let g,m;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=kn(),N=Z();return u.cs.getEntries(A,f).next(V=>{C=V,C.forEach((I,E)=>{E.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,C)).next(V=>{g=V;const I=[];for(const E of l){const S=XC(E,g.get(E.key).overlayedDocument);S!=null&&I.push(new gr(E.key,S,xE(S.value.mapValue),Xt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,I,l)}).next(V=>{m=V;const I=V.applyToLocalDocumentSet(g,N);return u.documentOverlayCache.saveOverlays(A,V.batchId,I)})}).then(()=>({batchId:m.batchId,changes:HE(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new _e(ie)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Uo(r,i.changes),await mu(r.remoteStore)}catch(i){const s=yf(i,"Failed to persist write");n.reject(s)}}async function T0(t,e){const n=Y(t);try{const r=await Hk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?oe(o.va):i.removedDocuments.size>0&&(oe(o.va),o.va=!1))}),await Uo(n,r,e)}catch(r){await Do(r)}}function zg(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const m of g.j_)m.Z_(l)&&(h=!0)}),h&&_f(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VP(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new _e(K.comparator);o=o.insert(s,Ze.newNoDocument(s,$.min()));const l=Z().add(s),u=new du($.min(),new Map,new _e(ie),o,l);await T0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),vf(r)}else await Fh(r.localStore,e,!1).then(()=>jh(r,e,n)).catch(Do)}async function xP(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await Wk(n.localStore,e);S0(n,r,null),I0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Uo(n,i)}catch(i){await Do(i)}}async function LP(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(oe(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);S0(r,e,n),I0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Uo(r,i)}catch(i){await Do(i)}}function I0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function S0(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function jh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||R0(t,r)})}function R0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(df(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),vf(t))}function Wg(t,e,n){for(const r of n)r instanceof E0?(t.La.addReference(r.key,e),MP(t,r)):r instanceof w0?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||R0(t,r.key)):Q()}function MP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),vf(t))}function vf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Ae.fromString(e)),r=t.qa.next();t.Na.set(r,new SP(n)),t.Oa=t.Oa.insert(n,r),p0(t.remoteStore,new qn(Yt(rf(n.path)),r,"TargetPurposeLimboResolution",Xd.oe))}}async function Uo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=hf.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>x.forEach(h,m=>x.forEach(m.$i,A=>f.persistence.referenceDelegate.addReference(g,m.targetId,A)).next(()=>x.forEach(m.Ui,A=>f.persistence.referenceDelegate.removeReference(g,m.targetId,A)))))}catch(g){if(!Vo(g))throw g;W("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const A=f.os.get(m),C=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(m,N)}}}(r.localStore,s))}async function UP(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await c0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Uo(n,r.hs)}}function bP(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return Z().add(r.key);{let i=Z();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function C0(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=T0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VP.bind(null,e),e.Ca.d_=EP.bind(null,e.eventManager),e.Ca.$a=wP.bind(null,e.eventManager),e}function FP(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LP.bind(null,e),e}class Vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return zk(this.persistence,new Bk,e.initialUser,this.serializer)}Ga(e){return new Uk(cf.Zr,this.serializer)}Wa(e){return new $k}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vl.provider={build:()=>new Vl};class zh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UP.bind(null,this.syncEngine),await mP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yP}()}createDatastore(e){const n=fu(e.databaseInfo.databaseId),r=function(s){return new Zk(s)}(e.databaseInfo);return function(s,o,l,u){return new nP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new iP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>zg(this.syncEngine,n,0),function(){return Ug.D()?new Ug:new Yk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const g=new RP(i,s,o,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Mo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}zh.provider={build:()=>new zh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=OE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await c0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zP(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>bg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>bg(e.remoteStore,i)),t._onlineComponents=e}async function zP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Mi("Error using user provided cache. Falling back to memory cache: "+n),await Rc(t,new Vl)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Rc(t,new Vl);return t._offlineComponents}async function k0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Hg(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Hg(t,new zh))),t._onlineComponents}function WP(t){return k0(t).then(e=>e.syncEngine)}async function HP(t){const e=await k0(t),n=e.eventManager;return n.onListen=CP.bind(null,e.syncEngine),n.onUnlisten=NP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=OP.bind(null,e.syncEngine),n}function KP(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new BP({next:m=>{f.Za(),o.enqueueAndForget(()=>vP(s,g));const A=m.docs.has(l);!A&&m.fromCache?h.reject(new H(L.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&u&&u.source==="server"?h.reject(new H(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new AP(rf(l.path),f,{includeMetadataChanges:!0,_a:!0});return _P(s,g)}(await HP(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GP(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qg(t){if(!K.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ef(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Wr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ef(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=P0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iC;switch(r.type){case"firstParty":return new lC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kg.get(n);r&&(W("ComponentProvider","Removing Datastore"),Kg.delete(n),r.terminate())}(this),Promise.resolve()}}function QP(t,e,n,r={}){var i;const s=(t=Wr(t,wf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=Uv(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(h)}t._authCredentials=new sC(new NE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Af(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _o(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class _o extends Af{constructor(e,n,r){super(e,n,rf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new K(e))}withConverter(e){return new _o(this.firestore,e,this._path)}}function xl(t,e,...n){if(t=We(t),arguments.length===1&&(e=OE.newId()),qP("doc","path",e),t instanceof wf){const r=Ae.fromString(e,...n);return qg(r),new Et(t,null,new K(r))}{if(!(t instanceof Et||t instanceof _o))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return qg(r),new Et(t.firestore,t instanceof _o?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new d0(this,"async_queue_retry"),this.Vu=()=>{const r=Sc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Sc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new rr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Vo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Cn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=gf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class gu extends wf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Qg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qg(e),this._firestoreClient=void 0,await e}}}function $P(t,e){const n=typeof t=="object"?t:Bd(),r=typeof t=="string"?t:"(default)",i=nu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=xv("firestore");s&&QP(i,...s)}return i}function N0(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||YP(t),t._firestoreClient}function YP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new wC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,P0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new jP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wi(He.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wi(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=/^__.*__$/;class JP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new xo(e,this.data,n,this.fieldTransforms)}}class O0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function D0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class vu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ll(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(D0(this.Cu)&&XP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ZP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fu(e)}Qu(e,n,r,i=!1){return new vu({Cu:e,methodName:n,qu:r,path:Fe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function V0(t){const e=t._freezeSettings(),n=fu(t._databaseId);return new ZP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eN(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Rf("Data must be an object, but it was:",o,r);const l=x0(r,o);let u,h;if(s.merge)u=new _t(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const m=Wh(e,g,n);if(!o.contains(m))throw new H(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);M0(f,m)||f.push(m)}u=new _t(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new JP(new ut(l),u,h)}class Eu extends _u{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eu}}function tN(t,e,n){return new vu({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Sf extends _u{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=tN(this,e,!0),r=this.Ku.map(s=>bo(s,n)),i=new Bi(r);return new GC(e.path,i)}isEqual(e){return e instanceof Sf&&lo(this.Ku,e.Ku)}}function nN(t,e,n,r){const i=t.Qu(1,e,n);Rf("Data must be an object, but it was:",i,r);const s=[],o=ut.empty();$r(r,(u,h)=>{const f=Cf(e,u,n);h=We(h);const g=i.Nu(f);if(h instanceof Eu)s.push(f);else{const m=bo(h,g);m!=null&&(s.push(f),o.set(f,m))}});const l=new _t(s);return new O0(o,l,i.fieldTransforms)}function rN(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Wh(e,r,n)],u=[i];if(s.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Wh(e,s[m])),u.push(s[m+1]);const h=[],f=ut.empty();for(let m=l.length-1;m>=0;--m)if(!M0(h,l[m])){const A=l[m];let C=u[m];C=We(C);const N=o.Nu(A);if(C instanceof Eu)h.push(A);else{const V=bo(C,N);V!=null&&(h.push(A),f.set(A,V))}}const g=new _t(h);return new O0(f,g,o.fieldTransforms)}function bo(t,e){if(L0(t=We(t)))return Rf("Unsupported field value:",e,t),x0(t,e);if(t instanceof _u)return function(r,i){if(!D0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=bo(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Oe.fromDate(r);return{timestampValue:Ol(i.serializer,s)}}if(r instanceof Oe){const s=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ol(i.serializer,s)}}if(r instanceof Tf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wi)return{bytesValue:r0(i.serializer,r._byteString)};if(r instanceof Et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:lf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof If)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return sf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ef(r)}`)}(t,e)}function x0(t,e){const n={};return DE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(t,(r,i)=>{const s=bo(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function L0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Tf||t instanceof Wi||t instanceof Et||t instanceof _u||t instanceof If)}function Rf(t,e,n){if(!L0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ef(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Wh(t,e,n){if((e=We(e))instanceof yu)return e._internalPath;if(typeof e=="string")return Cf(t,e);throw Ll("Field path arguments must be of type string or ",t,!1,void 0,n)}const iN=new RegExp("[~\\*/\\[\\]]");function Cf(t,e,n){if(e.search(iN)>=0)throw Ll(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yu(...e.split("."))._internalPath}catch{throw Ll(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ll(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(L.INVALID_ARGUMENT,l+t+u)}function M0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(b0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sN extends U0{data(){return super.data()}}function b0(t,e){return typeof e=="string"?Cf(t,e):e instanceof yu?e._internalPath:e._delegate._internalPath}class oN{convertValue(e,n="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $r(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ie(o.doubleValue));return new If(s)}convertGeoPoint(e){return new Tf(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(po(e));default:return null}}convertTimestamp(e){const n=ur(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);oe(u0(r));const i=new mo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Cn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class F0 extends U0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uN(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(b0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class uN extends F0{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){t=Wr(t,Et);const e=Wr(t.firestore,gu);return KP(N0(e),t._key).then(n=>fN(e,t,n))}class hN extends oN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function $g(t,e,n){t=Wr(t,Et);const r=Wr(t.firestore,gu),i=aN(t.converter,e);return B0(r,[eN(V0(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Xt.none())])}function dN(t,e,n,...r){t=Wr(t,Et);const i=Wr(t.firestore,gu),s=V0(i);let o;return o=typeof(e=We(e))=="string"||e instanceof yu?rN(s,"updateDoc",t._key,e,n,r):nN(s,"updateDoc",t._key,e),B0(i,[o.toMutation(t._key,Xt.exists(!0))])}function B0(t,e){return function(r,i){const s=new rr;return r.asyncQueue.enqueueAndForget(async()=>DP(await WP(r),i,s)),s.promise}(N0(t),e)}function fN(t,e,n){const r=n.docs.get(e._key),i=new hN(t);return new F0(t,i,e._key,r,new lN(n.hasPendingWrites,n.fromCache),e.converter)}function pN(...t){return new Sf("arrayUnion",t)}(function(e,n=!0){(function(i){Qi=i})(Gr),Ur(new ar("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new gu(new oC(r.getProvider("auth-internal")),new cC(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Gt(pg,"4.7.3",e),Gt(pg,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="firebasestorage.googleapis.com",mN="storageBucket",gN=2*60*1e3,yN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends nn{constructor(e,n,r=0){super(Cc(e),`Firebase Storage: ${n} (${Cc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Cc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var tn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(tn||(tn={}));function Cc(t){return"storage/"+t}function _N(){const t="An unknown error occurred, please check the error payload for server response.";return new rn(tn.UNKNOWN,t)}function vN(){return new rn(tn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function EN(){return new rn(tn.CANCELED,"User canceled the upload/download.")}function wN(t){return new rn(tn.INVALID_URL,"Invalid URL '"+t+"'.")}function AN(t){return new rn(tn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Yg(t){return new rn(tn.INVALID_ARGUMENT,t)}function z0(){return new rn(tn.APP_DELETED,"The Firebase app was deleted.")}function TN(t){return new rn(tn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Mt.makeFromUrl(e,n)}catch{return new Mt(e,"")}if(r.path==="")return r;throw AN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",A=new RegExp(`^https?://${g}/${f}/b/${i}/o${m}`,"i"),C={bucket:1,path:3},N=n===j0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",I=new RegExp(`^https?://${N}/${i}/${V}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:A,indices:C,postModify:h},{regex:I,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<S.length;D++){const F=S[D],b=F.regex.exec(e);if(b){const v=b[F.indices.bucket];let y=b[F.indices.path];y||(y=""),r=new Mt(v,y),F.postModify(r);break}}if(r==null)throw wN(e);return r}}class IN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...V){h||(h=!0,e.apply(null,V))}function g(V){i=setTimeout(()=>{i=null,t(A,u())},V)}function m(){s&&clearTimeout(s)}function A(V,...I){if(h){m();return}if(V){m(),f.call(null,V,...I);return}if(u()||o){m(),f.call(null,V,...I);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,g(S)}let C=!1;function N(V){C||(C=!0,m(),!h&&(i!==null?(V||(l=2),clearTimeout(i),g(0)):V||(l=1)))}return g(0),s=setTimeout(()=>{o=!0,N(!0)},n),N}function RN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){return t!==void 0}function Xg(t,e,n,r){if(r<e)throw Yg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Yg(`Invalid value for '${t}'. Expected ${n} or less.`)}function kN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ml;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ml||(Ml={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n,r,i,s,o,l,u,h,f,g,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=g,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,C)=>{this.resolve_=A,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ca(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Ml.NO_ERROR,u=s.getStatus();if(!l||PN(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Ml.ABORT;r(!1,new Ca(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Ca(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());CN(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=_N();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?z0():EN();o(u)}else{const u=vN();o(u)}};this.canceled_?n(!1,new Ca(!1,null,!0)):this.backoffId_=SN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&RN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ca{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ON(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function DN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function VN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function LN(t,e,n,r,i,s,o=!0){const l=kN(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return VN(h,e),ON(h,n),DN(h,s),xN(h,r),new NN(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function UN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n){this._service=e,n instanceof Mt?this._location=n:this._location=Mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ul(e,n)}get root(){const e=new Mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return UN(this._location.path)}get storage(){return this._service}get parent(){const e=MN(this._location.path);if(e===null)return null;const n=new Mt(this._location.bucket,e);return new Ul(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw TN(e)}}function Jg(t,e){const n=e==null?void 0:e[mN];return n==null?null:Mt.makeFromBucketSpec(n,t)}function bN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Uv(i,t.app.options.projectId))}class FN{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=j0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gN,this._maxUploadRetryTime=yN,this._requests=new Set,i!=null?this._bucket=Mt.makeFromBucketSpec(i,this._host):this._bucket=Jg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mt.makeFromBucketSpec(this._url,e):this._bucket=Jg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ul(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new IN(z0());{const o=LN(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Zg="@firebase/storage",ey="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="storage";function BN(t=Bd(),e){t=We(t);const r=nu(t,W0).getImmediate({identifier:e}),i=xv("storage");return i&&jN(r,...i),r}function jN(t,e,n,r={}){bN(t,e,n,r)}function zN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new FN(n,r,i,e,Gr)}function WN(){Ur(new ar(W0,zN,"PUBLIC").setMultipleInstances(!0)),Gt(Zg,ey,""),Gt(Zg,ey,"esm2017")}WN();const HN={apiKey:"AIzaSyC5C-VsBFZq6d8XYuYiWy1V_nG0oFkQmgY",authDomain:"bhai-f58f8.firebaseapp.com",projectId:"bhai-f58f8",storageBucket:"bhai-f58f8.appspot.com",messagingSenderId:"571237439264",appId:"1:571237439264:web:715a64d302d7d45aa62945"},kf=Bv(HN),Ws=nC(kf),bl=$P(kf);BN(kf);var ty;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(ty||(ty={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ny;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(ny||(ny={}));var ry;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(ry||(ry={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=["user","model","function","system"];var sy;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(sy||(sy={}));var oy;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(oy||(oy={}));var ay;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(ay||(ay={}));var ly;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(ly||(ly={}));var Hs;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(Hs||(Hs={}));var uy;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(uy||(uy={}));var cy;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(cy||(cy={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class ni extends ct{constructor(e,n){super(e),this.response=n}}class H0 extends ct{constructor(e,n,r,i){super(e),this.status=n,this.statusText=r,this.errorDetails=i}}class ir extends ct{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN="https://generativelanguage.googleapis.com",qN="v1beta",GN="0.20.0",QN="genai-js";var Hr;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Hr||(Hr={}));class $N{constructor(e,n,r,i,s){this.model=e,this.task=n,this.apiKey=r,this.stream=i,this.requestOptions=s}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||qN;let s=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||KN}/${r}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function YN(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${QN}/${GN}`),e.join(" ")}async function XN(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",YN(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(i){throw new ir(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${i.message}`)}for(const[i,s]of r.entries()){if(i==="x-goog-api-key")throw new ir(`Cannot set reserved header name ${i}`);if(i==="x-goog-api-client")throw new ir(`Header name ${i} can only be set using the apiClient field`);n.append(i,s)}}return n}async function JN(t,e,n,r,i,s){const o=new $N(t,e,n,r,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},nO(s)),{method:"POST",headers:await XN(o),body:i})}}async function Fo(t,e,n,r,i,s={},o=fetch){const{url:l,fetchOptions:u}=await JN(t,e,n,r,i,s);return ZN(l,u,o)}async function ZN(t,e,n=fetch){let r;try{r=await n(t,e)}catch(i){eO(i,t)}return r.ok||await tO(r,t),r}function eO(t,e){let n=t;throw t instanceof H0||t instanceof ir||(n=new ct(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function tO(t,e){let n="",r;try{const i=await t.json();n=i.error.message,i.error.details&&(n+=` ${JSON.stringify(i.error.details)}`,r=i.error.details)}catch{}throw new H0(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function nO(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Qa(t.candidates[0]))throw new ni(`${Un(t)}`,t);return rO(t)}else if(t.promptFeedback)throw new ni(`Text not available. ${Un(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Qa(t.candidates[0]))throw new ni(`${Un(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),hy(t)[0]}else if(t.promptFeedback)throw new ni(`Function call not available. ${Un(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Qa(t.candidates[0]))throw new ni(`${Un(t)}`,t);return hy(t)}else if(t.promptFeedback)throw new ni(`Function call not available. ${Un(t)}`,t)},t}function rO(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.text&&s.push(o.text),o.executableCode&&s.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&s.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}function hy(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.functionCall&&s.push(o.functionCall);if(s.length>0)return s}const iO=[Hs.RECITATION,Hs.SAFETY,Hs.LANGUAGE];function Qa(t){return!!t.finishReason&&iO.includes(t.finishReason)}function Un(t){var e,n,r;let i="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)i+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(i+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const s=t.candidates[0];Qa(s)&&(i+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(i+=`: ${s.finishMessage}`))}return i}function vo(t){return this instanceof vo?(this.v=t,this):new vo(t)}function sO(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(m){r[m]&&(i[m]=function(A){return new Promise(function(C,N){s.push([m,A,C,N])>1||l(m,A)})})}function l(m,A){try{u(r[m](A))}catch(C){g(s[0][3],C)}}function u(m){m.value instanceof vo?Promise.resolve(m.value.v).then(h,f):g(s[0][2],m)}function h(m){l("next",m)}function f(m){l("throw",m)}function g(m,A){m(A),s.shift(),s.length&&l(s[0][0],s[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function oO(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=uO(e),[r,i]=n.tee();return{stream:lO(r),response:aO(i)}}async function aO(t){const e=[],n=t.getReader();for(;;){const{done:r,value:i}=await n.read();if(r)return Pf(cO(e));e.push(i)}}function lO(t){return sO(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:i}=yield vo(n.read());if(i)break;yield yield vo(Pf(r))}})}function uO(t){const e=t.getReader();return new ReadableStream({start(r){let i="";return s();function s(){return e.read().then(({value:o,done:l})=>{if(l){if(i.trim()){r.error(new ct("Failed to parse stream"));return}r.close();return}i+=o;let u=i.match(dy),h;for(;u;){try{h=JSON.parse(u[1])}catch{r.error(new ct(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(h),i=i.substring(u[0].length),u=i.match(dy)}return s()})}}})}function cO(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates)for(const i of r.candidates){const s=i.index;if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:i.index}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const l of i.content.parts)l.text&&(o.text=l.text),l.functionCall&&(o.functionCall=l.functionCall),l.executableCode&&(o.executableCode=l.executableCode),l.codeExecutionResult&&(o.codeExecutionResult=l.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(t,e,n,r){const i=await Fo(e,Hr.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return oO(i)}async function q0(t,e,n,r){const s=await(await Fo(e,Hr.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:Pf(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function Eo(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return hO(e)}function hO(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,i=!1;for(const s of t)"functionResponse"in s?(n.parts.push(s),i=!0):(e.parts.push(s),r=!0);if(r&&i)throw new ct("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new ct("No content is provided for sending chat message.");return r?e:n}function dO(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const i=t.generateContentRequest!=null;if(t.contents){if(i)throw new ir("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(i)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const s=Eo(t);r.contents=[s]}return{generateContentRequest:r}}function fy(t){let e;return t.contents?e=t:e={contents:[Eo(t)]},t.systemInstruction&&(e.systemInstruction=G0(t.systemInstruction)),e}function fO(t){return typeof t=="string"||Array.isArray(t)?{content:Eo(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],pO={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function mO(t){let e=!1;for(const n of t){const{role:r,parts:i}=n;if(!e&&r!=="user")throw new ct(`First content should be with role 'user', got ${r}`);if(!iy.includes(r))throw new ct(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(iy)}`);if(!Array.isArray(i))throw new ct("Content should have 'parts' property with an array of Parts");if(i.length===0)throw new ct("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of i)for(const u of py)u in l&&(s[u]+=1);const o=pO[r];for(const l of py)if(!o.includes(l)&&s[l]>0)throw new ct(`Content with role '${r}' can't contain '${l}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="SILENT_ERROR";class gO{constructor(e,n,r,i={}){this.model=n,this.params=r,this._requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(mO(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,i,s,o,l,u;await this._sendPromise;const h=Eo(e),f={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,h]},g=Object.assign(Object.assign({},this._requestOptions),n);let m;return this._sendPromise=this._sendPromise.then(()=>q0(this._apiKey,this.model,f,g)).then(A=>{var C;if(A.response.candidates&&A.response.candidates.length>0){this._history.push(h);const N=Object.assign({parts:[],role:"model"},(C=A.response.candidates)===null||C===void 0?void 0:C[0].content);this._history.push(N)}else{const N=Un(A.response);N&&console.warn(`sendMessage() was unsuccessful. ${N}. Inspect response object for details.`)}m=A}),await this._sendPromise,m}async sendMessageStream(e,n={}){var r,i,s,o,l,u;await this._sendPromise;const h=Eo(e),f={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,h]},g=Object.assign(Object.assign({},this._requestOptions),n),m=K0(this._apiKey,this.model,f,g);return this._sendPromise=this._sendPromise.then(()=>m).catch(A=>{throw new Error(my)}).then(A=>A.response).then(A=>{if(A.candidates&&A.candidates.length>0){this._history.push(h);const C=Object.assign({},A.candidates[0].content);C.role||(C.role="model"),this._history.push(C)}else{const C=Un(A);C&&console.warn(`sendMessageStream() was unsuccessful. ${C}. Inspect response object for details.`)}}).catch(A=>{A.message!==my&&console.error(A)}),m}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yO(t,e,n,r){return(await Fo(e,Hr.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O(t,e,n,r){return(await Fo(e,Hr.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function vO(t,e,n,r){const i=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await Fo(e,Hr.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:i}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=G0(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const i=fy(e),s=Object.assign(Object.assign({},this._requestOptions),n);return q0(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}async generateContentStream(e,n={}){var r;const i=fy(e),s=Object.assign(Object.assign({},this._requestOptions),n);return K0(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}startChat(e){var n;return new gO(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=dO(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),i=Object.assign(Object.assign({},this._requestOptions),n);return yO(this.apiKey,this.model,r,i)}async embedContent(e,n={}){const r=fO(e),i=Object.assign(Object.assign({},this._requestOptions),n);return _O(this.apiKey,this.model,r,i)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return vO(this.apiKey,this.model,e,r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new ct("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new gy(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new ir("Cached content must contain a `name` field.");if(!e.model)throw new ir("Cached content must contain a `model` field.");const i=["model","systemInstruction"];for(const o of i)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const l=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(l===u)continue}throw new ir(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const s=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new gy(this.apiKey,s,r)}}const wO="AIzaSyD-yvTe_orLW3HUvIz-K9saMBrNcmRvFXM",AO=new EO(wO),TO=AO.getGenerativeModel({model:"gemini-1.5-flash"}),IO={temperature:1,topP:.95,topK:64,maxOutputTokens:8192,responseMimeType:"text/plain"};async function SO(t){const n=await TO.startChat({generationConfig:IO,history:[]}).sendMessage(t);return console.log(n.response.text()),n.response.text()}const Bo=Ee.createContext(),RO=t=>{const[e,n]=Ee.useState(""),[r,i]=Ee.useState(""),[s,o]=Ee.useState([]),[l,u]=Ee.useState(!1),[h,f]=Ee.useState(!1),[g,m]=Ee.useState(""),[A,C]=Ee.useState(""),[N,V]=Ee.useState(""),[I,E]=Ee.useState(!1);Ee.useEffect(()=>{const F=K1(Ws,b=>{E(b)});return()=>{F()}},[]);const D={prevPrompts:s,setPrevPrompts:o,recentPrompts:r,setRecentPrompts:i,loading:h,showResult:l,resultData:g,onSent:async F=>{const b=F||e;if(!b.trim())return;m(""),f(!0),u(!0),i(e);let y=(await SO(e)).split("**"),_;for(let R=0;R<y.length;R++)R===0||R%2!==1?_+=y[R]:_+="<b>"+y[R]+"</b>";let w=_.split("*").join("<br>");m(w);try{const R=xl(bl,"userChats",I.uid);await dN(R,{chats:pN({prompt:b,response:w,timestamp:new Date})}),console.log("Chat appended successfully")}catch(R){console.error("Error updating chat: ",R)}f(!1),n("")},input:e,setInput:n,user:I,setUser:E,email:A,setEmail:C,pass:N,setPass:V};return M.jsx(Bo.Provider,{value:D,children:t.children})},CO=()=>{const[t,e]=Ee.useState(!1),{setPass:n,setEmail:r,user:i}=Ee.useContext(Bo),[s,o]=Ee.useState([]),l=async()=>{await fE(Ws),n(""),r("")},u=async h=>{const f=xl(bl,"userChats",h);try{const g=await cN(f);if(g.exists()){const A=g.data().chats.map(C=>C.prompt);o(A)}else console.log("No prompts found.")}catch(g){console.error("Error loading prompts: ",g)}};return Ee.useEffect(()=>{i&&u(i.uid)},[i]),M.jsxs("div",{className:"sidebar",children:[M.jsxs("div",{className:"top",children:[M.jsx("img",{src:Ue.menu_icon,alt:"",onClick:()=>e(h=>!h),className:"menu"}),M.jsxs("div",{className:"new-chat",children:[M.jsx("img",{src:Ue.plus_icon,alt:""}),t?M.jsx("p",{children:"New Chat"}):null]}),t?M.jsxs("div",{className:"recent",children:[M.jsx("p",{className:"recent-title",children:"Recent"}),s.length>0?s.map((h,f)=>M.jsxs("div",{className:"recent-entry",children:[M.jsx("img",{src:Ue.message_icon,alt:"Recent Entry"}),M.jsx("p",{children:h.length>15?h.slice(0,15)+"...":h})]},f)):M.jsx("p",{children:"No recent chats"})]}):null]}),M.jsxs("div",{className:"bottom",children:[M.jsxs("div",{className:"bottom-item recent-entry",children:[M.jsx("img",{src:Ue.question_icon,alt:""}),t?M.jsx("p",{children:"Help"}):null]}),M.jsxs("div",{className:"bottom-item recent-entry",children:[M.jsx("img",{src:Ue.history_icon,alt:""}),t?M.jsx("p",{children:"History"}):null]}),M.jsxs("div",{className:"bottom-item recent-entry",children:[M.jsx("img",{src:Ue.setting_icon,alt:""}),t?M.jsx("p",{children:"Settings"}):null]}),M.jsxs("div",{className:"bottom-item recent-entry",children:[M.jsx("img",{onClick:l,src:Ue.logout_icon,alt:""}),t?M.jsx("p",{children:"logout"}):null]})]})]})},kO=t=>{const{setInput:e,input:n,onSent:r,loading:i,showResult:s,recentPrompts:o,resultData:l,email:u}=Ee.useContext(Bo);return M.jsxs("div",{className:"main",children:[M.jsxs("div",{className:"nav",children:[M.jsx("p",{children:"bhAI"}),M.jsx("img",{src:Ue.user_icon,alt:""})]}),M.jsxs("div",{className:"main-container",children:[s?M.jsxs("div",{className:"result",children:[M.jsxs("div",{className:"result-title",children:[M.jsx("img",{src:Ue.user_icon,alt:""}),M.jsx("p",{children:o})]}),M.jsxs("div",{className:"result-data",children:[M.jsx("img",{src:Ue.gemini_icon,alt:""}),i?M.jsxs("div",{className:"loader",children:[M.jsx("hr",{}),M.jsx("hr",{}),M.jsx("hr",{})]}):M.jsx("p",{dangerouslySetInnerHTML:{__html:l}})]})]}):M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"greet",children:[M.jsx("p",{children:M.jsxs("span",{children:["Hello , ",u]})}),M.jsx("p",{children:"How can I help you Today ?"})]}),M.jsxs("div",{className:"cards",children:[M.jsxs("div",{className:"card",children:[M.jsx("p",{children:"Suggest a Beautiful places to see on upcoming road Trip"}),M.jsx("img",{onClick:()=>r("Suggest a Beautiful places to see on upcoming road Trip"),src:Ue.compass_icon,alt:""})]}),M.jsxs("div",{className:"card",children:[M.jsx("p",{children:"Breifly summarize this texxt : urban planning"}),M.jsx("img",{onClick:()=>r("Breifly summarize this texxt : urban planning"),src:Ue.bulb_icon,alt:""})]}),M.jsxs("div",{className:"card",children:[M.jsx("p",{children:"Describe Team bonding activities"}),M.jsx("img",{onClick:()=>r("Describe Team bonding activities"),src:Ue.message_icon,alt:""})]}),M.jsxs("div",{className:"card",children:[M.jsx("p",{children:"Improve Readability of this code"}),M.jsx("img",{onClick:()=>r("Improve Readability of this code"),src:Ue.code_icon,alt:""})]})]})]}),M.jsxs("div",{className:"main-bottom",children:[M.jsxs("div",{className:"searchbox",children:[M.jsx("input",{onChange:h=>e(h.target.value),value:n,type:"text",placeholder:"Enter your prompt here"}),M.jsxs("div",{children:[M.jsx("img",{src:Ue.gallery_icon,alt:""}),M.jsx("img",{src:Ue.mic_icon,alt:""}),M.jsx("img",{onClick:()=>r(),src:Ue.send_icon,alt:""})]})]}),M.jsx("p",{className:"bottom-info",children:"bhAI may display inaccurate info, including about people please double check before usage"})]})]})]})},PO=()=>{const[t,e]=Ee.useState(!1),{user:n,setUser:r,email:i,setEmail:s,pass:o,setPass:l}=Ee.useContext(Bo),[u,h]=Ee.useState(""),f=async A=>{try{A.preventDefault(),e(!0);let C=await j1(Ws,i,o);await $g(xl(bl,"user",C.user.uid),{username:u,email:i,id:C.user.uid}),await $g(xl(bl,"userChats",C.user.uid),{chats:{}}),alert("registration success")}catch(C){console.log(C),alert(C)}finally{e(!1)}},g=async A=>{try{A.preventDefault(),e(!0);let C=await z1(Ws,i,o);console.log(C)}catch(C){console.log(C),alert(C)}finally{e(!1)}},m=async()=>{await fE(Ws),s(""),l("")};return M.jsx(M.Fragment,{children:M.jsx("div",{className:"form-container",children:M.jsx("main",{className:"form-signin",children:M.jsxs("form",{children:[M.jsx("h1",{className:"form-title",children:"Please sign in"}),M.jsxs("div",{className:"form-group",children:[M.jsx("input",{type:"text",className:"form-input",id:"username",placeholder:"Username",onChange:A=>h(A.target.value),required:!0}),M.jsx("input",{type:"text",value:i,className:"form-input",id:"Email",placeholder:"Email",onChange:A=>s(A.target.value),required:!0}),M.jsx("input",{type:"password",value:o,className:"form-input",id:"pass",placeholder:"Pass",required:!0,onChange:A=>l(A.target.value)})]}),M.jsx("div",{className:"error-message"}),M.jsx("button",{disabled:t,type:"submit",onClick:f,className:"btn-submit",children:t?"loading":"Register"}),M.jsx("button",{disabled:t,onClick:g,className:"btn-submit",children:t?"loading":"login"}),M.jsxs("p",{style:{marginTop:"5px"},children:[" Logged in as ",n==null?void 0:n.email]}),M.jsx("button",{className:"logout",onClick:m,children:"logout"}),M.jsx("p",{className:"form-footer",children:"© Vighnesh & Shreyas Co."})]})})})})},NO=()=>{const{user:t}=Ee.useContext(Bo);return M.jsx(M.Fragment,{children:t?M.jsxs(M.Fragment,{children:[M.jsx(CO,{}),M.jsx(kO,{})]}):M.jsx(PO,{})})};Pv(document.getElementById("root")).render(M.jsx(RO,{children:M.jsx(NO,{})}));
