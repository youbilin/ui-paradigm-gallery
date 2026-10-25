(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))b(D);new MutationObserver(D=>{for(const V of D)if(V.type==="childList")for(const ya of V.addedNodes)ya.tagName==="LINK"&&ya.rel==="modulepreload"&&b(ya)}).observe(document,{childList:!0,subtree:!0});function N(D){const V={};return D.integrity&&(V.integrity=D.integrity),D.referrerPolicy&&(V.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?V.credentials="include":D.crossOrigin==="anonymous"?V.credentials="omit":V.credentials="same-origin",V}function b(D){if(D.ep)return;D.ep=!0;const V=N(D);fetch(D.href,V)}})();var Tr={exports:{}},di={};var l0;function pb(){if(l0)return di;l0=1;var w=Symbol.for("react.transitional.element"),z=Symbol.for("react.fragment");function N(b,D,V){var ya=null;if(V!==void 0&&(ya=""+V),D.key!==void 0&&(ya=""+D.key),"key"in D){V={};for(var ee in D)ee!=="key"&&(V[ee]=D[ee])}else V=D;return D=V.ref,{$$typeof:w,type:b,key:ya,ref:D!==void 0?D:null,props:V}}return di.Fragment=z,di.jsx=N,di.jsxs=N,di}var n0;function ub(){return n0||(n0=1,Tr.exports=pb()),Tr.exports}var r=ub(),kr={exports:{}},X={};var i0;function xb(){if(i0)return X;i0=1;var w=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),ya=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),wa=Symbol.for("react.suspense"),ja=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),R=Symbol.for("react.view_transition"),Ca=Symbol.iterator;function te(d){return d===null||typeof d!="object"?null:(d=Ca&&d[Ca]||d["@@iterator"],typeof d=="function"?d:null)}var La={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aa=Object.assign,Da={};function le(d,E,U){this.props=d,this.context=E,this.refs=Da,this.updater=U||La}le.prototype.isReactComponent={},le.prototype.setState=function(d,E){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,E,"setState")},le.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function lt(){}lt.prototype=le.prototype;function ce(d,E,U){this.props=d,this.context=E,this.refs=Da,this.updater=U||La}var be=ce.prototype=new lt;be.constructor=ce,aa(be,le.prototype),be.isPureReactComponent=!0;var Wa=Array.isArray;function T(){}var j={H:null,A:null,T:null,S:null},Sa=Object.prototype.hasOwnProperty;function Ua(d,E,U){var H=U.ref;return{$$typeof:w,type:d,key:E,ref:H!==void 0?H:null,props:U}}function Pa(d,E){return Ua(d.type,E,d.props)}function ge(d){return typeof d=="object"&&d!==null&&d.$$typeof===w}function wt(d){var E={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(U){return E[U]})}var Wt=/\/+/g;function Ra(d,E){return typeof d=="object"&&d!==null&&d.key!=null?wt(""+d.key):E.toString(36)}function C(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(T,T):(d.status="pending",d.then(function(E){d.status==="pending"&&(d.status="fulfilled",d.value=E)},function(E){d.status==="pending"&&(d.status="rejected",d.reason=E)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function G(d,E,U,H,P){var ea=typeof d;(ea==="undefined"||ea==="boolean")&&(d=null);var la=!1;if(d===null)la=!0;else switch(ea){case"bigint":case"string":case"number":la=!0;break;case"object":switch(d.$$typeof){case w:case z:la=!0;break;case B:return la=d._init,G(la(d._payload),E,U,H,P)}}if(la)return P=P(d),la=H===""?"."+Ra(d,0):H,Wa(P)?(U="",la!=null&&(U=la.replace(Wt,"$&/")+"/"),G(P,E,U,"",function(it){return it})):P!=null&&(ge(P)&&(P=Pa(P,U+(P.key==null||d&&d.key===P.key?"":(""+P.key).replace(Wt,"$&/")+"/")+la)),E.push(P)),1;la=0;var M=H===""?".":H+":";if(Wa(d))for(var L=0;L<d.length;L++)H=d[L],ea=M+Ra(H,L),la+=G(H,E,U,ea,P);else if(L=te(d),typeof L=="function")for(d=L.call(d),L=0;!(H=d.next()).done;)H=H.value,ea=M+Ra(H,L++),la+=G(H,E,U,ea,P);else if(ea==="object"){if(typeof d.then=="function")return G(C(d),E,U,H,P);throw E=String(d),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return la}function q(d,E,U){if(d==null)return d;var H=[],P=0;return G(d,H,"","",function(ea){return E.call(U,ea,P++)}),H}function ba(d){if(d._status===-1){var E=d._result,U=E();U.then(function(H){(d._status===0||d._status===-1)&&(d._status=1,d._result=H,U.status===void 0&&(U.status="fulfilled",U.value=H))},function(H){(d._status===0||d._status===-1)&&(d._status=2,d._result=H,U.status===void 0&&(U.status="rejected",U.reason=H))}),d._status===-1&&(d._status=0,d._result=U)}if(d._status===1)return d._result.default;throw d._result}var ia=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)};function Re(d){var E=j.T,U={};U.types=E!==null?E.types:null,j.T=U;try{var H=d(),P=j.S;P!==null&&P(U,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(T,ia)}catch(ea){ia(ea)}finally{E!==null&&U.types!==null&&(E.types=U.types),j.T=E}}function nt(d){var E=j.T;if(E!==null){var U=E.types;U===null?E.types=[d]:U.indexOf(d)===-1&&U.push(d)}else Re(nt.bind(null,d))}var Pt={map:q,forEach:function(d,E,U){q(d,function(){E.apply(this,arguments)},U)},count:function(d){var E=0;return q(d,function(){E++}),E},toArray:function(d){return q(d,function(E){return E})||[]},only:function(d){if(!ge(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return X.Activity=v,X.Children=Pt,X.Component=le,X.Fragment=N,X.Profiler=D,X.PureComponent=ce,X.StrictMode=b,X.Suspense=wa,X.ViewTransition=R,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,X.__COMPILER_RUNTIME={__proto__:null,c:function(d){return j.H.useMemoCache(d)}},X.addTransitionType=nt,X.cache=function(d){return function(){return d.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(d,E,U){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var H=aa({},d.props),P=d.key;if(E!=null)for(ea in E.key!==void 0&&(P=""+E.key),E)!Sa.call(E,ea)||ea==="key"||ea==="__self"||ea==="__source"||ea==="ref"&&E.ref===void 0||(H[ea]=E[ea]);var ea=arguments.length-2;if(ea===1)H.children=U;else if(1<ea){for(var la=Array(ea),M=0;M<ea;M++)la[M]=arguments[M+2];H.children=la}return Ua(d.type,P,H)},X.createContext=function(d){return d={$$typeof:ya,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:V,_context:d},d},X.createElement=function(d,E,U){var H,P={},ea=null;if(E!=null)for(H in E.key!==void 0&&(ea=""+E.key),E)Sa.call(E,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(P[H]=E[H]);var la=arguments.length-2;if(la===1)P.children=U;else if(1<la){for(var M=Array(la),L=0;L<la;L++)M[L]=arguments[L+2];P.children=M}if(d&&d.defaultProps)for(H in la=d.defaultProps,la)P[H]===void 0&&(P[H]=la[H]);return Ua(d,ea,P)},X.createRef=function(){return{current:null}},X.forwardRef=function(d){return{$$typeof:ee,render:d}},X.isValidElement=ge,X.lazy=function(d){return{$$typeof:B,_payload:{_status:-1,_result:d},_init:ba}},X.memo=function(d,E){return{$$typeof:ja,type:d,compare:E===void 0?null:E}},X.startTransition=Re,X.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},X.use=function(d){return j.H.use(d)},X.useActionState=function(d,E,U){return j.H.useActionState(d,E,U)},X.useCallback=function(d,E){return j.H.useCallback(d,E)},X.useContext=function(d){return j.H.useContext(d)},X.useDebugValue=function(){},X.useDeferredValue=function(d,E){return j.H.useDeferredValue(d,E)},X.useEffect=function(d,E){return j.H.useEffect(d,E)},X.useEffectEvent=function(d){return j.H.useEffectEvent(d)},X.useId=function(){return j.H.useId()},X.useImperativeHandle=function(d,E,U){return j.H.useImperativeHandle(d,E,U)},X.useInsertionEffect=function(d,E){return j.H.useInsertionEffect(d,E)},X.useLayoutEffect=function(d,E){return j.H.useLayoutEffect(d,E)},X.useMemo=function(d,E){return j.H.useMemo(d,E)},X.useOptimistic=function(d,E){return j.H.useOptimistic(d,E)},X.useReducer=function(d,E,U){return j.H.useReducer(d,E,U)},X.useRef=function(d){return j.H.useRef(d)},X.useState=function(d){return j.H.useState(d)},X.useSyncExternalStore=function(d,E,U){return j.H.useSyncExternalStore(d,E,U)},X.useTransition=function(){return j.H.useTransition()},X.version="19.3.1",X}var s0;function Mr(){return s0||(s0=1,kr.exports=xb()),kr.exports}var Ia=Mr(),Nr={exports:{}},pi={},Cr={exports:{}},Ar={};var o0;function bb(){return o0||(o0=1,(function(w){function z(C,G){var q=C.length;C.push(G);a:for(;0<q;){var ba=q-1>>>1,ia=C[ba];if(0<D(ia,G))C[ba]=G,C[q]=ia,q=ba;else break a}}function N(C){return C.length===0?null:C[0]}function b(C){if(C.length===0)return null;var G=C[0],q=C.pop();if(q!==G){C[0]=q;a:for(var ba=0,ia=C.length,Re=ia>>>1;ba<Re;){var nt=2*(ba+1)-1,Pt=C[nt],d=nt+1,E=C[d];if(0>D(Pt,q))d<ia&&0>D(E,Pt)?(C[ba]=E,C[d]=q,ba=d):(C[ba]=Pt,C[nt]=q,ba=nt);else if(d<ia&&0>D(E,q))C[ba]=E,C[d]=q,ba=d;else break a}}return G}function D(C,G){var q=C.sortIndex-G.sortIndex;return q!==0?q:C.id-G.id}if(w.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var V=performance;w.unstable_now=function(){return V.now()}}else{var ya=Date,ee=ya.now();w.unstable_now=function(){return ya.now()-ee}}var wa=[],ja=[],B=1,v=null,R=3,Ca=!1,te=!1,La=!1,aa=!1,Da=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,lt=typeof setImmediate<"u"?setImmediate:null;function ce(C){for(var G=N(ja);G!==null;){if(G.callback===null)b(ja);else if(G.startTime<=C)b(ja),G.sortIndex=G.expirationTime,z(wa,G);else break;G=N(ja)}}function be(C){if(La=!1,ce(C),!te)if(N(wa)!==null)te=!0,Wa||(Wa=!0,ge());else{var G=N(ja);G!==null&&Ra(be,G.startTime-C)}}var Wa=!1,T=-1,j=5,Sa=-1;function Ua(){return aa?!0:!(w.unstable_now()-Sa<j)}function Pa(){if(aa=!1,Wa){var C=w.unstable_now();Sa=C;var G=!0;try{a:{te=!1,La&&(La=!1,le(T),T=-1),Ca=!0;var q=R;try{e:{for(ce(C),v=N(wa);v!==null&&!(v.expirationTime>C&&Ua());){var ba=v.callback;if(typeof ba=="function"){v.callback=null,R=v.priorityLevel;var ia=ba(v.expirationTime<=C);if(C=w.unstable_now(),typeof ia=="function"){v.callback=ia,ce(C),G=!0;break e}v===N(wa)&&b(wa),ce(C)}else b(wa);v=N(wa)}if(v!==null)G=!0;else{var Re=N(ja);Re!==null&&Ra(be,Re.startTime-C),G=!1}}break a}finally{v=null,R=q,Ca=!1}G=void 0}}finally{G?ge():Wa=!1}}}var ge;if(typeof lt=="function")ge=function(){lt(Pa)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,Wt=wt.port2;wt.port1.onmessage=Pa,ge=function(){Wt.postMessage(null)}}else ge=function(){Da(Pa,0)};function Ra(C,G){T=Da(function(){C(w.unstable_now())},G)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(C){C.callback=null},w.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<C?Math.floor(1e3/C):5},w.unstable_getCurrentPriorityLevel=function(){return R},w.unstable_next=function(C){switch(R){case 1:case 2:case 3:var G=3;break;default:G=R}var q=R;R=G;try{return C()}finally{R=q}},w.unstable_requestPaint=function(){aa=!0},w.unstable_runWithPriority=function(C,G){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var q=R;R=C;try{return G()}finally{R=q}},w.unstable_scheduleCallback=function(C,G,q){var ba=w.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ba+q:ba):q=ba,C){case 1:var ia=-1;break;case 2:ia=250;break;case 5:ia=1073741823;break;case 4:ia=1e4;break;default:ia=5e3}return ia=q+ia,C={id:B++,callback:G,priorityLevel:C,startTime:q,expirationTime:ia,sortIndex:-1},q>ba?(C.sortIndex=q,z(ja,C),N(wa)===null&&C===N(ja)&&(La?(le(T),T=-1):La=!0,Ra(be,q-ba))):(C.sortIndex=ia,z(wa,C),te||Ca||(te=!0,Wa||(Wa=!0,ge()))),C},w.unstable_shouldYield=Ua,w.unstable_wrapCallback=function(C){var G=R;return function(){var q=R;R=G;try{return C.apply(this,arguments)}finally{R=q}}}})(Ar)),Ar}var c0;function gb(){return c0||(c0=1,Cr.exports=bb()),Cr.exports}var Or={exports:{}},Fa={};var r0;function mb(){if(r0)return Fa;r0=1;var w=Mr();function z(B){var v="https://react.dev/errors/"+B;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)v+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+B+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(){}var b={d:{f:N,r:function(){throw Error(z(522))},D:N,C:N,L:N,m:N,X:N,S:N,M:N},p:0,findDOMNode:null},D=Symbol.for("react.portal"),V=Symbol.for("react.recoverable"),ya=Symbol.for("react.optimistic_key");function ee(B,v,R){var Ca=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:Ca==null?null:Ca===ya?ya:""+Ca,children:B,containerInfo:v,implementation:R}}var wa=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ja(B,v){if(B==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Fa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,Fa.browser=function(B){return{$$typeof:V,_reason:B}},Fa.createPortal=function(B,v){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(z(299));return ee(B,v,null,R)},Fa.flushSync=function(B){var v=wa.T,R=b.p;try{if(wa.T=null,b.p=2,B)return B()}finally{wa.T=v,b.p=R,b.d.f()}},Fa.preconnect=function(B,v){typeof B=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,b.d.C(B,v))},Fa.prefetchDNS=function(B){typeof B=="string"&&b.d.D(B)},Fa.preinit=function(B,v){if(typeof B=="string"&&v&&typeof v.as=="string"){var R=v.as,Ca=ja(R,v.crossOrigin),te=typeof v.integrity=="string"?v.integrity:void 0,La=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;R==="style"?b.d.S(B,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:Ca,integrity:te,fetchPriority:La}):R==="script"&&b.d.X(B,{crossOrigin:Ca,integrity:te,fetchPriority:La,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Fa.preinitModule=function(B,v){if(typeof B=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var R=ja(v.as,v.crossOrigin);b.d.M(B,{crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&b.d.M(B)},Fa.preload=function(B,v){if(typeof B=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var R=v.as,Ca=ja(R,v.crossOrigin);b.d.L(B,R,{crossOrigin:Ca,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Fa.preloadModule=function(B,v){if(typeof B=="string")if(v){var R=ja(v.as,v.crossOrigin);b.d.m(B,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else b.d.m(B)},Fa.requestFormReset=function(B){b.d.r(B)},Fa.unstable_batchedUpdates=function(B,v){return B(v)},Fa.useFormState=function(B,v,R){return wa.H.useFormState(B,v,R)},Fa.useFormStatus=function(){return wa.H.useHostTransitionStatus()},Fa.version="19.3.1",Fa}var f0;function hb(){if(f0)return Or.exports;f0=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(z){console.error(z)}}return w(),Or.exports=mb(),Or.exports}var d0;function vb(){if(d0)return pi;d0=1;var w=gb(),z=Mr(),N=hb();function b(a){var e="https://react.dev/errors/"+a;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function V(a){for(var e=a,t=e;t&&!t.alternate;)e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;for(;e.return;)e=e.return;return e.tag===3?a:null}function ya(a){if(a.tag===13){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function ee(a){if(a.tag===31){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function wa(a){if(V(a)!==a)throw Error(b(188))}function ja(a){var e=a.alternate;if(!e){if(e=V(a),e===null)throw Error(b(188));return e!==a?null:a}for(var t=a,l=e;;){var n=t.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){t=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===t)return wa(n),a;if(i===l)return wa(n),e;i=i.sibling}throw Error(b(188))}if(t.return!==l.return)t=n,l=i;else{for(var s=!1,o=n.child;o;){if(o===t){s=!0,t=n,l=i;break}if(o===l){s=!0,l=n,t=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===t){s=!0,t=i,l=n;break}if(o===l){s=!0,l=i,t=n;break}o=o.sibling}if(!s)throw Error(b(189))}}if(t.alternate!==l)throw Error(b(190))}if(t.tag!==3)throw Error(b(188));return t.stateNode.current===t?a:e}function B(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a;for(a=a.child;a!==null;){if(e=B(a),e!==null)return e;a=a.sibling}return null}function v(a,e,t,l,n,i){for(;a!==null;){if((a.tag===5||a.tag===27||a.tag===6)&&t(a,l,n,i)||(a.tag!==22||a.memoizedState===null)&&(e||a.tag!==5&&a.tag!==27)&&v(a.child,e,t,l,n,i))return!0;a=a.sibling}return!1}function R(a){for(a=a.return;a!==null;){if(a.tag===3||a.tag===5||a.tag===27)return a;a=a.return}return null}function Ca(a){var e=!1;for(a=a.return;a!==null&&(a.tag===4&&(e=!0),!(a.tag===3||a.tag===5||a.tag===27));)a=a.return;return e}function te(a){var e=[null,null],t=R(a);return t===null||La(e,a,t.child,{foundSelf:!1}),e}function La(a,e,t,l){for(;t!==null;){if(t===e)l.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(l.foundSelf)return a[1]=t,!0;a[0]=t}else if((t.tag!==22||t.memoizedState===null)&&La(a,e,t.child,l))return!0;t=t.sibling}return!1}function aa(a){switch(a.tag){case 5:case 27:case 6:return a.stateNode;case 3:return a.stateNode.containerInfo;default:throw Error(b(559))}}var Da=null,le=null;function lt(a,e,t){return a===t?!0:a===e?(Da=a,!0):!1}function ce(a,e,t){return a===t?(le=a,!1):a===e?(le!==null&&(Da=a),!0):!1}function be(a){if(a===null)return null;do a=a===null?null:a.return;while(a&&a.tag!==5&&a.tag!==27&&a.tag!==3);return a||null}function Wa(a,e,t){for(var l=0,n=a;n;n=t(n))l++;n=0;for(var i=e;i;i=t(i))n++;for(;0<l-n;)a=t(a),l--;for(;0<n-l;)e=t(e),n--;for(;l--;){if(a===e||e!==null&&a===e.alternate)return a;a=t(a),e=t(e)}return null}var T=Object.assign,j=Symbol.for("react.element"),Sa=Symbol.for("react.transitional.element"),Ua=Symbol.for("react.portal"),Pa=Symbol.for("react.fragment"),ge=Symbol.for("react.strict_mode"),wt=Symbol.for("react.profiler"),Wt=Symbol.for("react.consumer"),Ra=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),ba=Symbol.for("react.memo"),ia=Symbol.for("react.lazy"),Re=Symbol.for("react.activity"),nt=Symbol.for("react.legacy_hidden"),Pt=Symbol.for("react.memo_cache_sentinel"),d=Symbol.for("react.view_transition"),E=Symbol.for("react.recoverable"),U=Symbol.iterator;function H(a){return a===null||typeof a!="object"?null:(a=U&&a[U]||a["@@iterator"],typeof a=="function"?a:null)}var P=Symbol.for("react.client.reference");function ea(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===P?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case Pa:return"Fragment";case wt:return"Profiler";case ge:return"StrictMode";case G:return"Suspense";case q:return"SuspenseList";case Re:return"Activity";case d:return"ViewTransition"}if(typeof a=="object")switch(a.$$typeof){case Ua:return"Portal";case Ra:return a.displayName||"Context";case Wt:return(a._context.displayName||"Context")+".Consumer";case C:var e=a.render;return a=a.displayName,a||(a=e.displayName||e.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case ba:return e=a.displayName||null,e!==null?e:ea(a.type)||"Memo";case ia:e=a._payload,a=a._init;try{return ea(a(e))}catch{}}return null}var la=Array.isArray,M=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=N.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},Xs=[],El=-1;function Ve(a){return{current:a}}function Xa(a){0>El||(a.current=Xs[El],Xs[El]=null,El--)}function ma(a,e){El++,Xs[El]=a.current,a.current=e}var Qe=Ve(null),mn=Ve(null),St=Ve(null),ui=Ve(null);function xi(a,e){switch(ma(St,e),ma(mn,a),ma(Qe,null),e.nodeType){case 9:case 11:a=(a=e.documentElement)&&(a=a.namespaceURI)?pu(a):0;break;default:if(a=e.tagName,e=e.namespaceURI)e=pu(e),a=uu(e,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}Xa(Qe),ma(Qe,a)}function Tl(){Xa(Qe),Xa(mn),Xa(St)}function Vs(a){var e=a.memoizedState;e!==null&&(un._currentValue=e.memoizedState,ma(ui,a)),e=Qe.current;var t=uu(e,a.type);e!==t&&(ma(mn,a),ma(Qe,t))}function bi(a){mn.current===a&&(Xa(Qe),Xa(mn)),ui.current===a&&(Xa(ui),un._currentValue=it)}var Qs,_r;function zt(a){if(Qs===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Qs=e&&e[1]||"",_r=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qs+a+_r}var Zs=!1;function Ks(a,e){if(!a||Zs)return"";Zs=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(k){var p=k}Reflect.construct(a,[],S)}else{try{S.call()}catch(k){p=k}S=!1;try{var m=Object.getOwnPropertyDescriptor(a.prototype,"props");Object.defineProperty(a.prototype,"props",{configurable:!0,set:function(){throw Error()}}),S=!0,new a}finally{S&&(m!==void 0?Object.defineProperty(a.prototype,"props",m):delete a.prototype.props)}}}else{try{throw Error()}catch(k){p=k}(S=a())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(k){if(k&&p&&typeof k.stack=="string")return[k.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],o=i[1];if(s&&o){var c=s.split(`
`),x=o.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===x.length)for(l=c.length-1,n=x.length-1;1<=l&&0<=n&&c[l]!==x[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==x[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==x[n]){var h=`
`+c[l].replace(" at new "," at ");return a.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",a.displayName)),h}while(1<=l&&0<=n);break}}}finally{Zs=!1,Error.prepareStackTrace=t}return(t=a?a.displayName||a.name:"")?zt(t):""}function g0(a,e){switch(a.tag){case 26:case 27:case 5:return zt(a.type);case 16:return zt("Lazy");case 13:return a.child!==e&&e!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return Ks(a.type,!1);case 11:return Ks(a.type.render,!1);case 1:return Ks(a.type,!0);case 31:return zt("Activity");case 30:return zt("ViewTransition");default:return""}}function jr(a){try{var e="",t=null;do e+=g0(a,t),t=a,a=a.return;while(a);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Js=Object.prototype.hasOwnProperty,$s=w.unstable_scheduleCallback,Fs=w.unstable_cancelCallback,m0=w.unstable_shouldYield,h0=w.unstable_requestPaint,me=w.unstable_now,v0=w.unstable_getCurrentPriorityLevel,Dr=w.unstable_ImmediatePriority,Ur=w.unstable_UserBlockingPriority,gi=w.unstable_NormalPriority,y0=w.unstable_LowPriority,Hr=w.unstable_IdlePriority,w0=w.log,S0=w.unstable_setDisableYieldValue,hn=null,he=null;function Et(a){if(typeof w0=="function"&&S0(a),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(hn,a)}catch{}}var ve=Math.clz32?Math.clz32:T0,z0=Math.log,E0=Math.LN2;function T0(a){return a>>>=0,a===0?32:31-(z0(a)/E0|0)|0}var mi=256,hi=262144,vi=4194304;function al(a){var e=a&42;if(e!==0)return e;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return a&-a;case 262144:case 524288:case 1048576:case 2097152:return a&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function yi(a,e,t){var l=a.pendingLanes;if(l===0)return 0;var n=0,i=a.suspendedLanes,s=a.pingedLanes;a=a.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=al(l):(s&=o,s!==0?n=al(s):t||(t=o&~a,t!==0&&(n=al(t))))):(o=l&~i,o!==0?n=al(o):s!==0?n=al(s):t||(t=l&~a,t!==0&&(n=al(t)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,t=e&-e,i>=t||i===32&&(t&4194048)!==0)?e:n}function vn(a,e){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&e)===0}function Rr(a,e){(e&8)!==0&&(e|=e&32);var t=a.entangledLanes;if(t!==0)for(a=a.entanglements,t&=e;0<t;){var l=31-ve(t),n=1<<l;e|=a[l],t&=~n}return e}function k0(a,e){switch(a){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Br(){var a=vi;return vi<<=1,(vi&62914560)===0&&(vi=4194304),a}function Is(a){for(var e=[],t=0;31>t;t++)e.push(a);return e}function yn(a,e){a.pendingLanes|=e,e!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function N0(a,e,t,l,n,i){var s=a.pendingLanes;a.pendingLanes=t,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=t,a.entangledLanes&=t,a.errorRecoveryDisabledLanes&=t,a.shellSuspendCounter=0;var o=a.entanglements,c=a.expirationTimes,x=a.hiddenUpdates;for(t=s&~t;0<t;){var h=31-ve(t),S=1<<h;o[h]=0,c[h]=-1;var p=x[h];if(p!==null)for(x[h]=null,h=0;h<p.length;h++){var m=p[h];m!==null&&(m.lane&=-536870913)}t&=~S}l!==0&&Yr(a,l,0),i!==0&&n===0&&a.tag!==0&&(a.suspendedLanes|=i&~(s&~e))}function Yr(a,e,t){a.pendingLanes|=e,a.suspendedLanes&=~e;var l=31-ve(e);a.entangledLanes|=e,a.entanglements[l]=a.entanglements[l]|1073741824|t&261930}function Gr(a,e){var t=a.entangledLanes|=e;for(a=a.entanglements;t;){var l=31-ve(t),n=1<<l;n&e|a[l]&e&&(a[l]|=e),t&=~n}}function qr(a,e){var t=e&-e;return t=(t&42)!==0?1:Ws(t),(t&(a.suspendedLanes|e))!==0?0:t}function Ws(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function Ps(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function Lr(){var a=L.p;return a!==0?a:(a=window.event,a===void 0?32:Fu(a.type))}function Xr(a,e){var t=L.p;try{return L.p=a,e()}finally{L.p=t}}var st=Math.random().toString(36).slice(2),Va="__reactFiber$"+st,re="__reactProps$"+st,kl="__reactContainer$"+st,Vr="__reactEvents$"+st,C0="__reactListeners$"+st,A0="__reactHandles$"+st,Qr="__reactResources$"+st,wn="__reactMarker$"+st,wi="__reactLoad$"+st;function Si(a){delete a[Va],delete a[re],delete a[C0],delete a[A0]}function el(a){var e;if(e=a[Va])return e;for(var t=a.parentNode;t;){if(e=t[kl]||t[Va]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(a=Ou(a);a!==null;){if(t=a[Va])return t;a=Ou(a)}return e}a=t,t=a.parentNode}return null}function Nl(a){if(a=a[Va]||a[kl]){var e=a.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return a}return null}function Sn(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a.stateNode;throw Error(b(33))}function Cl(a){var e=a[Qr];return e||(e=a[Qr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ba(a){a[wn]=!0}function Zr(a){a[wi]=void 0}var Kr=new Set,Jr={};function tl(a,e){Al(a,e),Al(a+"Capture",e)}function Al(a,e){for(Jr[a]=e,a=0;a<e.length;a++)Kr.add(e[a])}var O0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$r={},Fr={};function M0(a){return Js.call(Fr,a)?!0:Js.call($r,a)?!1:O0.test(a)?Fr[a]=!0:($r[a]=!0,!1)}var ta=!1;function Ir(){var a=ta;return ta=!1,a}function zi(a,e,t){if(M0(e))if(t===null)a.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":a.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){a.removeAttribute(e);return}}a.setAttribute(e,t)}}function Ei(a,e,t){if(t===null)a.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(e);return}a.setAttribute(e,t)}}function ot(a,e,t,l){if(l===null)a.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(t);return}a.setAttributeNS(e,t,l)}}function ye(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function Wr(a){var e=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _0(a,e,t){var l=Object.getOwnPropertyDescriptor(a.constructor.prototype,e);if(!a.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(a,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){t=""+s,i.call(this,s)}}),Object.defineProperty(a,e,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){a._valueTracker=null,delete a[e]}}}}function ao(a){if(!a._valueTracker){var e=Wr(a)?"checked":"value";a._valueTracker=_0(a,e,""+a[e])}}function Pr(a){if(!a)return!1;var e=a._valueTracker;if(!e)return!0;var t=e.getValue(),l="";return a&&(l=Wr(a)?a.checked?"true":"false":a.value),a=l,a!==t?(e.setValue(a),!0):!1}var j0=/[\n"\\]/g;function Ce(a){return a.replace(j0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function eo(a,e,t,l,n,i,s,o){a.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?a.type=s:a.removeAttribute("type"),e!=null?s==="number"?(e===0&&a.value===""||a.value!=e)&&(a.value=""+ye(e)):a.value!==""+ye(e)&&(a.value=""+ye(e)):s!=="submit"&&s!=="reset"||a.removeAttribute("value"),e!=null?s==="number"&&a.value==e?to(a,ye(a.value)):to(a,ye(e)):t!=null?to(a,ye(t)):l!=null&&a.removeAttribute("value"),n==null&&i!=null&&(a.defaultChecked=!!i),n!=null&&(a.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?a.name=""+ye(o):a.removeAttribute("name")}function af(a,e,t,l,n,i,s,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(a.type=i),e!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){ao(a);return}t=t!=null?""+ye(t):"",e=e!=null?""+ye(e):t,o||e===a.value||(a.value=e),a.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,a.checked=o?a.checked:!!l,a.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(a.name=s),ao(a)}function to(a,e){a.defaultValue!==""+e&&(a.defaultValue=""+e)}function Ol(a,e,t,l){if(a=a.options,e){e={};for(var n=0;n<t.length;n++)e["$"+t[n]]=!0;for(t=0;t<a.length;t++)n=e.hasOwnProperty("$"+a[t].value),a[t].selected!==n&&(a[t].selected=n),n&&l&&(a[t].defaultSelected=!0)}else{for(t=""+ye(t),e=null,n=0;n<a.length;n++){if(a[n].value===t){a[n].selected=!0,l&&(a[n].defaultSelected=!0);return}e!==null||a[n].disabled||(e=a[n])}e!==null&&(e.selected=!0)}}function ef(a,e,t){if(e!=null&&(e=""+ye(e),e!==a.value&&(a.value=e),t==null)){a.defaultValue!==e&&(a.defaultValue=e);return}a.defaultValue=t!=null?""+ye(t):""}function tf(a,e,t,l){if(e==null){if(l!=null){if(t!=null)throw Error(b(92));if(la(l)){if(1<l.length)throw Error(b(93));l=l[0]}t=l}t==null&&(t=""),e=t}t=ye(e),a.defaultValue=t,l=a.textContent,l===t&&l!==""&&l!==null&&(a.value=l),ao(a)}function Ml(a,e){if(e){var t=a.firstChild;if(t&&t===a.lastChild&&t.nodeType===3){t.nodeValue=e;return}}a.textContent=e}var D0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lf(a,e,t){var l=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?a.setProperty(e,""):e==="float"?a.cssFloat="":a[e]="":l?a.setProperty(e,t):typeof t!="number"||t===0||D0.has(e)?e==="float"?a.cssFloat=t:a[e]=(""+t).trim():a[e]=t+"px"}function nf(a,e,t){if(e!=null&&typeof e!="object")throw Error(b(62));if(a=a.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?a.setProperty(l,""):l==="float"?a.cssFloat="":a[l]="",ta=!0);for(var n in e)l=e[n],e.hasOwnProperty(n)&&t[n]!==l&&(lf(a,n,l),ta=!0)}else for(var i in e)e.hasOwnProperty(i)&&lf(a,i,e[i])}function lo(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var U0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),H0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ti(a){return H0.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}function Ze(){}var no=null;function io(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var _l=null,jl=null;function sf(a){var e=Nl(a);if(e&&(a=e.stateNode)){var t=a[re]||null;a:switch(a=e.stateNode,e.type){case"input":if(eo(a,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=a;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ce(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var l=t[e];if(l!==a&&l.form===a.form){var n=l[re]||null;if(!n)throw Error(b(90));eo(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<t.length;e++)l=t[e],l.form===a.form&&Pr(l)}break a;case"textarea":ef(a,t.value,t.defaultValue);break a;case"select":e=t.value,e!=null&&Ol(a,!!t.multiple,e,!1)}}}var so=!1;function of(a,e,t){if(so)return a(e,t);so=!0;try{var l=a(e);return l}finally{if(so=!1,(_l!==null||jl!==null)&&(Ts(),_l&&(e=_l,a=jl,jl=_l=null,sf(e),a)))for(e=0;e<a.length;e++)sf(a[e])}}function zn(a,e){var t=a.stateNode;if(t===null)return null;var l=t[re]||null;if(l===null)return null;t=l[e];a:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(a=a.type,l=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!l;break a;default:a=!1}if(a)return null;if(t&&typeof t!="function")throw Error(b(231,e,typeof t));return t}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oo=!1;if(ct)try{var En={};Object.defineProperty(En,"passive",{get:function(){oo=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{oo=!1}var Tt=null,co=null,ki=null;function cf(){if(ki)return ki;var a,e=co,t=e.length,l,n="value"in Tt?Tt.value:Tt.textContent,i=n.length;for(a=0;a<t&&e[a]===n[a];a++);var s=t-a;for(l=1;l<=s&&e[t-l]===n[i-l];l++);return ki=n.slice(a,1<l?1-l:void 0)}function Ni(a){var e=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&e===13&&(a=13)):a=e,a===10&&(a=13),32<=a||a===13?a:0}function Ci(){return!0}function rf(){return!1}function ne(a){function e(t,l,n,i,s){this._reactName=t,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in a)a.hasOwnProperty(o)&&(t=a[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ci:rf,this.isPropagationStopped=rf,this}return T(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),e}var kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ai=ne(kt),Tn=T({},kt,{view:0,detail:0}),R0=ne(Tn),ro,fo,kn,Oi=T({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uo,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==kn&&(kn&&a.type==="mousemove"?(ro=a.screenX-kn.screenX,fo=a.screenY-kn.screenY):fo=ro=0,kn=a),ro)},movementY:function(a){return"movementY"in a?a.movementY:fo}}),ff=ne(Oi),B0=T({},Oi,{dataTransfer:0}),Y0=ne(B0),G0=T({},Tn,{relatedTarget:0}),po=ne(G0),q0=T({},kt,{animationName:0,elapsedTime:0,pseudoElement:0}),L0=ne(q0),X0=T({},kt,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),V0=ne(X0),Q0=T({},kt,{data:0}),df=ne(Q0),Z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $0(a){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(a):(a=J0[a])?!!e[a]:!1}function uo(){return $0}var F0=T({},Tn,{key:function(a){if(a.key){var e=Z0[a.key]||a.key;if(e!=="Unidentified")return e}return a.type==="keypress"?(a=Ni(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?K0[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uo,charCode:function(a){return a.type==="keypress"?Ni(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?Ni(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),I0=ne(F0),W0=T({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pf=ne(W0),P0=T({},kt,{submitter:0}),a1=ne(P0),e1=T({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uo}),t1=ne(e1),l1=T({},kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),n1=ne(l1),i1=T({},Oi,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),s1=ne(i1),o1=T({},kt,{newState:0,oldState:0,source:0}),c1=ne(o1),r1=[9,13,27,32],xo=ct&&"CompositionEvent"in window,Nn=null;ct&&"documentMode"in document&&(Nn=document.documentMode);var f1=ct&&"TextEvent"in window&&!Nn,uf=ct&&(!xo||Nn&&8<Nn&&11>=Nn),xf=" ",bf=!1;function gf(a,e){switch(a){case"keyup":return r1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mf(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Dl=!1;function d1(a,e){switch(a){case"compositionend":return mf(e);case"keypress":return e.which!==32?null:(bf=!0,xf);case"textInput":return a=e.data,a===xf&&bf?null:a;default:return null}}function p1(a,e){if(Dl)return a==="compositionend"||!xo&&gf(a,e)?(a=cf(),ki=co=Tt=null,Dl=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uf&&e.locale!=="ko"?null:e.data;default:return null}}var u1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e==="input"?!!u1[a.type]:e==="textarea"}function vf(a,e,t,l){_l?jl?jl.push(l):jl=[l]:_l=l,e=Ms(e,"onChange"),0<e.length&&(t=new Ai("onChange","change",null,t,l),a.push({event:t,listeners:e}))}var Cn=null,An=null;function x1(a){su(a,0)}function Mi(a){var e=Sn(a);if(Pr(e))return a}function yf(a,e){if(a==="change")return e}var wf=!1;if(ct){var bo;if(ct){var go="oninput"in document;if(!go){var Sf=document.createElement("div");Sf.setAttribute("oninput","return;"),go=typeof Sf.oninput=="function"}bo=go}else bo=!1;wf=bo&&(!document.documentMode||9<document.documentMode)}function zf(){Cn&&(Cn.detachEvent("onpropertychange",Ef),An=Cn=null)}function Ef(a){if(a.propertyName==="value"&&Mi(An)){var e=[];vf(e,An,a,io(a)),of(x1,e)}}function b1(a,e,t){a==="focusin"?(zf(),Cn=e,An=t,Cn.attachEvent("onpropertychange",Ef)):a==="focusout"&&zf()}function g1(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return Mi(An)}function m1(a,e){if(a==="click")return Mi(e)}function h1(a,e){if(a==="input"||a==="change")return Mi(e)}function v1(a,e){return a===e&&(a!==0||1/a===1/e)||a!==a&&e!==e}var we=typeof Object.is=="function"?Object.is:v1;function On(a,e){if(we(a,e))return!0;if(typeof a!="object"||a===null||typeof e!="object"||e===null)return!1;var t=Object.keys(a),l=Object.keys(e);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var n=t[l];if(!Js.call(e,n)||!we(a[n],e[n]))return!1}return!0}function mo(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}function Tf(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function kf(a,e){var t=Tf(a);a=0;for(var l;t;){if(t.nodeType===3){if(l=a+t.textContent.length,a<=e&&l>=e)return{node:t,offset:e-a};a=l}a:{for(;t;){if(t.nextSibling){t=t.nextSibling;break a}t=t.parentNode}t=void 0}t=Tf(t)}}function Nf(a,e){return a&&e?a===e?!0:a&&a.nodeType===3?!1:e&&e.nodeType===3?Nf(a,e.parentNode):"contains"in a?a.contains(e):a.compareDocumentPosition?!!(a.compareDocumentPosition(e)&16):!1:!1}function Cf(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var e=mo(a.document);e instanceof a.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)a=e.contentWindow;else break;e=mo(a.document)}return e}function ho(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e&&(e==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||e==="textarea"||a.contentEditable==="true")}var y1=ct&&"documentMode"in document&&11>=document.documentMode,Ul=null,vo=null,Mn=null,yo=!1;function Af(a,e,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yo||Ul==null||Ul!==mo(l)||(l=Ul,"selectionStart"in l&&ho(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Mn&&On(Mn,l)||(Mn=l,l=Ms(vo,"onSelect"),0<l.length&&(e=new Ai("onSelect","select",null,e,t),a.push({event:e,listeners:l}),e.target=Ul)))}function ll(a,e){var t={};return t[a.toLowerCase()]=e.toLowerCase(),t["Webkit"+a]="webkit"+e,t["Moz"+a]="moz"+e,t}var Hl={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionrun:ll("Transition","TransitionRun"),transitionstart:ll("Transition","TransitionStart"),transitioncancel:ll("Transition","TransitionCancel"),transitionend:ll("Transition","TransitionEnd")},wo={},Of={};ct&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete Hl.animationend.animation,delete Hl.animationiteration.animation,delete Hl.animationstart.animation),"TransitionEvent"in window||delete Hl.transitionend.transition);function nl(a){if(wo[a])return wo[a];if(!Hl[a])return a;var e=Hl[a],t;for(t in e)if(e.hasOwnProperty(t)&&t in Of)return wo[a]=e[t];return a}var Mf=nl("animationend"),_f=nl("animationiteration"),jf=nl("animationstart"),w1=nl("transitionrun"),S1=nl("transitionstart"),z1=nl("transitioncancel"),Df=nl("transitionend"),Uf=new Map,So="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");So.push("scrollEnd");function Be(a,e){Uf.set(a,e),tl(e,[a])}var E1=0;function rt(a,e){if(a.name!=null&&a.name!=="auto")return a.name;if(e.autoName!==null)return e.autoName;a=Le.identifierPrefix;var t=E1++;return a="_"+a+"t_"+t.toString(32)+"_",e.autoName=a}function Hf(a){if(a==null||typeof a=="string")return a;var e=null,t=tn;if(t!==null)for(var l=0;l<t.length;l++){var n=a[t[l]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??a.default}function ft(a,e){return a=Hf(a),e=Hf(e),e==null?a==="auto"?null:a:e==="auto"?null:e}var _i=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},Ae=[],Rl=0,zo=0;function ji(){for(var a=Rl,e=zo=Rl=0;e<a;){var t=Ae[e];Ae[e++]=null;var l=Ae[e];Ae[e++]=null;var n=Ae[e];Ae[e++]=null;var i=Ae[e];if(Ae[e++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&Rf(t,n,i)}}function Di(a,e,t,l){Ae[Rl++]=a,Ae[Rl++]=e,Ae[Rl++]=t,Ae[Rl++]=l,zo|=l,a.lanes|=l,a=a.alternate,a!==null&&(a.lanes|=l)}function Eo(a,e,t,l){return Di(a,e,t,l),Ui(a)}function il(a,e){return Di(a,null,null,e),Ui(a)}function Rf(a,e,t){a.lanes|=t;var l=a.alternate;l!==null&&(l.lanes|=t);for(var n=!1,i=a.return;i!==null;)i.childLanes|=t,l=i.alternate,l!==null&&(l.childLanes|=t),i.tag===22&&(a=i.stateNode,a===null||a._visibility&1||(n=!0)),a=i,i=i.return;return a.tag===3?(i=a.stateNode,n&&e!==null&&(n=31-ve(t),a=i.hiddenUpdates,l=a[n],l===null?a[n]=[e]:l.push(e),e.lane=t|536870912),i):null}function Ui(a){if(50<Pn)throw Pn=0,Es=null,Error(b(185));for(var e=a.return;e!==null;)a=e,e=a.return;return a.tag===3?a.stateNode:null}var Bl={};function T1(a,e,t,l){this.tag=a,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(a,e,t,l){return new T1(a,e,t,l)}function To(a){return a=a.prototype,!(!a||!a.isReactComponent)}function dt(a,e){var t=a.alternate;return t===null?(t=fe(a.tag,e,a.key,a.mode),t.elementType=a.elementType,t.type=a.type,t.stateNode=a.stateNode,t.alternate=a,a.alternate=t):(t.pendingProps=e,t.type=a.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=a.flags&1206910976,t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=a.sibling,t.index=a.index,t.ref=a.ref,t.refCleanup=a.refCleanup,t}function Bf(a,e){a.flags&=1206910978;var t=a.alternate;return t===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,a.type=t.type,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a}function Hi(a,e,t,l,n,i){var s=0;if(l=a,typeof l=="function")To(l)&&(s=1);else if(typeof l=="string")s=Px(a,t,Qe.current)?26:a==="html"||a==="head"||a==="body"?27:5;else a:switch(l){case Re:return a=fe(31,t,e,n),a.elementType=Re,a.lanes=i,a;case Pa:return sl(t.children,n,i,e);case ge:s=8,n|=24;break;case wt:return a=fe(12,t,e,n|2),a.elementType=wt,a.lanes=i,a;case G:return a=fe(13,t,e,n),a.elementType=G,a.lanes=i,a;case q:return a=fe(19,t,e,n),a.elementType=q,a.lanes=i,a;case nt:case d:return a=n|32,a=fe(30,t,e,a),a.elementType=d,a.lanes=i,a.stateNode={autoName:null,paired:null,clones:null,ref:null},a;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Ra:s=10;break a;case Wt:s=9;break a;case C:s=11;break a;case ba:s=14;break a;case ia:s=16,l=null;break a}s=29,t=Error(b(130,a===null?"null":typeof a,"")),l=null}return e=fe(s,t,e,n),e.elementType=a,e.type=l,e.lanes=i,e}function sl(a,e,t,l){return a=fe(7,a,l,e),a.lanes=t,a}function ko(a,e,t){return a=fe(6,a,null,e),a.lanes=t,a}function Yf(a){var e=fe(18,null,null,0);return e.stateNode=a,e}function No(a,e,t){return e=fe(4,a.children!==null?a.children:[],a.key,e),e.lanes=t,e.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},e}var Gf=new WeakMap;function Oe(a,e){if(typeof a=="object"&&a!==null){var t=Gf.get(a);return t!==void 0?t:(e={value:a,source:e,stack:jr(e)},Gf.set(a,e),e)}return{value:a,source:e,stack:jr(e)}}var Yl=[],Gl=0,Ri=null,_n=0,Me=[],_e=0,Nt=null,Ke=1,Je="";function pt(a,e){Yl[Gl++]=_n,Yl[Gl++]=Ri,Ri=a,_n=e}function qf(a,e,t){Me[_e++]=Ke,Me[_e++]=Je,Me[_e++]=Nt,Nt=a;var l=Ke;a=Je;var n=32-ve(l)-1;l&=~(1<<n),t+=1;var i=32-ve(e)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,Ke=1<<32-ve(e)+n|t<<n|l,Je=i+a}else Ke=1<<i|t<<n|l,Je=a}function Bi(a){a.return!==null&&(pt(a,1),qf(a,1,0))}function Co(a){for(;a===Ri;)Ri=Yl[--Gl],Yl[Gl]=null,_n=Yl[--Gl],Yl[Gl]=null;for(;a===Nt;)Nt=Me[--_e],Me[_e]=null,Je=Me[--_e],Me[_e]=null,Ke=Me[--_e],Me[_e]=null}function Lf(a,e){Me[_e++]=Ke,Me[_e++]=Je,Me[_e++]=Nt,Ke=e.id,Je=e.overflow,Nt=a}var Ya=null,ha=null,K=!1,Ct=null,je=!1,Ao=Error(b(519));function At(a){var e=Error(b(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jn(Oe(e,a)),Ao}function Xf(a){var e=a.stateNode,t=a.type,l=a.memoizedProps;switch(e[Va]=a,e[re]=l,t){case"dialog":$("cancel",e),$("close",e);break;case"iframe":case"object":case"embed":$("load",e);break;case"video":case"audio":for(t=0;t<ei.length;t++)$(ei[t],e);break;case"source":$("error",e);break;case"img":case"image":case"link":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"input":$("invalid",e),af(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":$("invalid",e);break;case"textarea":$("invalid",e),tf(e,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||l.suppressHydrationWarning===!0||fu(e.textContent,t)?(l.popover!=null&&($("beforetoggle",e),$("toggle",e)),l.onScroll!=null&&$("scroll",e),l.onScrollEnd!=null&&$("scrollend",e),l.onClick!=null&&(e.onclick=Ze),e=!0):e=!1,e||At(a,!0)}function Yi(a){for(Ya=a.return;Ya;)switch(Ya.tag){case 5:case 31:case 13:je=!1;return;case 27:case 3:je=!0;return;default:Ya=Ya.return}}function ql(a){if(a!==Ya)return!1;if(!K)return Yi(a),K=!0,!1;var e=a.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=a.type,t=!(t!=="form"&&t!=="button")||ir(a.type,a.memoizedProps)),t=!t),t&&ha&&At(a),Yi(a),e===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));ha=Au(a)}else if(e===31){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));ha=Au(a)}else e===27?(e=ha,Qt(a.type)?(a=xr,xr=null,ha=a):ha=e):ha=Ya?Ue(a.stateNode.nextSibling):null;return!0}function ol(){ha=Ya=null,K=!1}function Oo(){var a=Ct;return a!==null&&(ue===null?ue=a:ue.push.apply(ue,a),Ct=null),a}function jn(a){Ct===null?Ct=[a]:Ct.push(a)}var Mo=Ve(null),cl=null,ut=null;function Ot(a,e,t){ma(Mo,e._currentValue),e._currentValue=t}function xt(a){a._currentValue=Mo.current,Xa(Mo)}function Gi(a,e,t){for(;a!==null;){var l=a.alternate;if((a.childLanes&e)!==e?(a.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),a===t)break;a=a.return}}function _o(a,e,t,l){var n=a.child;for(n!==null&&(n.return=a);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;a:for(;i!==null;){var o=i;i=n;for(var c=0;c<e.length;c++)if(o.context===e[c]){i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),Gi(i.return,t,a),l||(s=null);break a}i=o.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(b(341));s.lanes|=t,i=s.alternate,i!==null&&(i.lanes|=t),Gi(s,t,a),s=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=t,s=n.alternate,s!==null&&(s.lanes|=t),Gi(n.return,t,a),s=n.child,s=s!==null?s.sibling:null):s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===a){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function rl(a,e,t,l){a=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(b(387));if(s=s.memoizedProps,s!==null){var o=n.type;we(n.pendingProps.value,s.value)||(a!==null?a.push(o):a=[o])}}else if(n===ui.current){if(s=n.alternate,s===null)throw Error(b(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(a!==null?a.push(un):a=[un])}n=n.return}return a!==null&&_o(e,a,t,l),e.flags|=262144,a!==null}function qi(a){for(a=a.firstContext;a!==null;){if(!we(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function fl(a){cl=a,ut=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function Qa(a){return Vf(cl,a)}function Li(a,e){return cl===null&&fl(a),Vf(a,e)}function Vf(a,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},ut===null){if(a===null)throw Error(b(308));ut=e,a.dependencies={lanes:0,firstContext:e},a.flags|=524288}else ut=ut.next=e;return t}var k1=typeof AbortController<"u"?AbortController:function(){var a=[],e=this.signal={aborted:!1,addEventListener:function(t,l){a.push(l)}};this.abort=function(){e.aborted=!0,a.forEach(function(t){return t()})}},N1=w.unstable_scheduleCallback,C1=w.unstable_NormalPriority,Aa={$$typeof:Ra,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jo(){return{controller:new k1,data:new Map,refCount:0}}function Dn(a){a.refCount--,a.refCount===0&&N1(C1,function(){a.controller.abort()})}function Qf(a,e){if((a.pendingLanes&4194048)!==0){var t=a.transitionTypes;for(t===null&&(t=a.transitionTypes=[]),a=0;a<e.length;a++){var l=e[a];t.indexOf(l)===-1&&t.push(l)}}}var Un=null;function A1(a){var e=a.transitionTypes;return a.transitionTypes=null,e}var Hn=null,Do=0,dl=0,Ll=null;function O1(a,e){if(Hn===null){var t=Hn=[];Do=0,dl=Fc(),Ll={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Do++,e.then(Zf,Zf),e}function Zf(){if(--Do===0&&(Un=null,Hn!==null)){Ll!==null&&(Ll.status="fulfilled");var a=Hn;Hn=null,dl=0,Ll=null;for(var e=0;e<a.length;e++)(0,a[e])()}}function M1(a,e){var t=[],l={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return a.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<t.length;n++)(0,t[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),l}var Kf=M.S;M.S=function(a,e){if(Yp=me(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&O1(a,e),Un!==null)for(var t=on;t!==null;)Qf(t,Un),t=t.next;if(t=a.types,t!==null){for(var l=on;l!==null;)Qf(l,t),l=l.next;if(dl!==0){l=Un,l===null&&(l=Un=[]);for(var n=0;n<t.length;n++){var i=t[n];l.indexOf(i)===-1&&l.push(i)}}}Kf!==null&&Kf(a,e)};var pl=Ve(null);function Uo(){var a=pl.current;return a!==null?a:ga.pooledCache}function Xi(a,e){e===null?ma(pl,pl.current):ma(pl,e.pool)}function Jf(){var a=Uo();return a===null?null:{parent:Aa._currentValue,pool:a}}var Xl=Error(b(460)),Ho=Error(b(474)),Vi=Error(b(542)),Qi={then:function(){}};function $f(a){return a=a.status,a==="fulfilled"||a==="rejected"}function Ff(a,e,t){switch(t=a[t],t===void 0?a.push(e):t!==e&&(e.then(Ze,Ze),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,Wf(a),a===void 0&&!("reason"in e)?Error(b(600)):a;default:if(typeof e.status=="string")e.then(Ze,Ze);else{if(a=ga,a!==null&&100<a.shellSuspendCounter)throw Error(b(482));a=e,a.status="pending",a.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,Wf(a),a}throw xl=e,Xl}}function ul(a){try{var e=a._init;return e(a._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(xl=t,Xl):t}}var xl=null;function If(){if(xl===null)throw Error(b(459));var a=xl;return xl=null,a}function Wf(a){if(a===Xl||a===Vi)throw Error(b(483))}var Vl=null,Rn=0;function Zi(a){var e=Rn;return Rn+=1,Vl===null&&(Vl=[]),Ff(Vl,a,e)}function Mt(a,e){e=e.props.ref,a.ref=e!==void 0?e:null}function Ki(a,e){throw e.$$typeof===j?Error(b(525)):(a=Object.prototype.toString.call(e),Error(b(31,a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)))}function Pf(a){function e(u,f){if(a){var g=u.deletions;g===null?(u.deletions=[f],u.flags|=16):g.push(f)}}function t(u,f){if(!a)return null;for(;f!==null;)e(u,f),f=f.sibling;return null}function l(u){for(var f=new Map;u!==null;)u.key===null?f.set(u.index,u):f.set(u.key,u),u=u.sibling;return f}function n(u,f){return u=dt(u,f),u.index=0,u.sibling=null,u}function i(u,f,g){return u.index=g,a?(g=u.alternate,g!==null?(g=g.index,g<f?(u.flags|=2,f):g):(u.flags|=134217730,f)):(u.flags|=1048576,f)}function s(u){return a&&u.alternate===null&&(u.flags|=134217730),u}function o(u,f,g,y){return f===null||f.tag!==6?(f=ko(g,u.mode,y),f.return=u,f):(f=n(f,g),f.return=u,f)}function c(u,f,g,y){var A=g.type;return A===Pa?(u=h(u,f,g.props.children,y,g.key),Mt(u,g),u):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ia&&ul(A)===f.type)?(f=n(f,g.props),Mt(f,g),f.return=u,f):(f=Hi(g.type,g.key,g.props,null,u.mode,y),Mt(f,g),f.return=u,f)}function x(u,f,g,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=No(g,u.mode,y),f.return=u,f):(f=n(f,g.children||[]),f.return=u,f)}function h(u,f,g,y,A){return f===null||f.tag!==7?(f=sl(g,u.mode,y,A),f.return=u,f):(f=n(f,g),f.return=u,f)}function S(u,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=ko(""+f,u.mode,g),f.return=u,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Sa:return g=Hi(f.type,f.key,f.props,null,u.mode,g),Mt(g,f),g.return=u,g;case Ua:return f=No(f,u.mode,g),f.return=u,f;case ia:return f=ul(f),S(u,f,g)}if(la(f)||H(f))return f=sl(f,u.mode,g,null),f.return=u,f;if(typeof f.then=="function")return S(u,Zi(f),g);if(f.$$typeof===Ra)return S(u,Li(u,f),g);Ki(u,f)}return null}function p(u,f,g,y){var A=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return A!==null?null:o(u,f,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sa:return g.key===A?c(u,f,g,y):null;case Ua:return g.key===A?x(u,f,g,y):null;case ia:return g=ul(g),p(u,f,g,y)}if(la(g)||H(g))return A!==null?null:h(u,f,g,y,null);if(typeof g.then=="function")return p(u,f,Zi(g),y);if(g.$$typeof===Ra)return p(u,f,Li(u,g),y);Ki(u,g)}return null}function m(u,f,g,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(g)||null,o(f,u,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sa:return u=u.get(y.key===null?g:y.key)||null,c(f,u,y,A);case Ua:return u=u.get(y.key===null?g:y.key)||null,x(f,u,y,A);case ia:return y=ul(y),m(u,f,g,y,A)}if(la(y)||H(y))return u=u.get(g)||null,h(f,u,y,A,null);if(typeof y.then=="function")return m(u,f,g,Zi(y),A);if(y.$$typeof===Ra)return m(u,f,g,Li(f,y),A);Ki(f,y)}return null}function k(u,f,g,y){for(var A=null,I=null,_=f,Y=f=0,_a=null;_!==null&&Y<g.length;Y++){_.index>Y?(_a=_,_=null):_a=_.sibling;var W=p(u,_,g[Y],y);if(W===null){_===null&&(_=_a);break}a&&_&&W.alternate===null&&e(u,_),f=i(W,f,Y),I===null?A=W:I.sibling=W,I=W,_=_a}if(Y===g.length)return t(u,_),K&&pt(u,Y),A;if(_===null){for(;Y<g.length;Y++)_=S(u,g[Y],y),_!==null&&(f=i(_,f,Y),I===null?A=_:I.sibling=_,I=_);return K&&pt(u,Y),A}for(_=l(_);Y<g.length;Y++)_a=m(_,u,Y,g[Y],y),_a!==null&&(a&&(W=_a.alternate,W!==null&&_.delete(W.key===null?Y:W.key)),f=i(_a,f,Y),I===null?A=_a:I.sibling=_a,I=_a);return a&&_.forEach(function(Ft){return e(u,Ft)}),K&&pt(u,Y),A}function O(u,f,g,y){if(g==null)throw Error(b(151));for(var A=null,I=null,_=f,Y=f=0,_a=null,W=g.next();_!==null&&!W.done;Y++,W=g.next()){_.index>Y?(_a=_,_=null):_a=_.sibling;var Ft=p(u,_,W.value,y);if(Ft===null){_===null&&(_=_a);break}a&&_&&Ft.alternate===null&&e(u,_),f=i(Ft,f,Y),I===null?A=Ft:I.sibling=Ft,I=Ft,_=_a}if(W.done)return t(u,_),K&&pt(u,Y),A;if(_===null){for(;!W.done;Y++,W=g.next())W=S(u,W.value,y),W!==null&&(f=i(W,f,Y),I===null?A=W:I.sibling=W,I=W);return K&&pt(u,Y),A}for(_=l(_);!W.done;Y++,W=g.next())W=m(_,u,Y,W.value,y),W!==null&&(a&&(_a=W.alternate,_a!==null&&_.delete(_a.key===null?Y:_a.key)),f=i(W,f,Y),I===null?A=W:I.sibling=W,I=W);return a&&_.forEach(function(db){return e(u,db)}),K&&pt(u,Y),A}function Z(u,f,g,y){if(typeof g=="object"&&g!==null&&g.type===Pa&&g.key===null&&g.props.ref===void 0&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Sa:a:{for(var A=g.key;f!==null;){if(f.key===A){if(A=g.type,A===Pa){if(f.tag===7){t(u,f.sibling),y=n(f,g.props.children),Mt(y,g),y.return=u,u=y;break a}}else if(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ia&&ul(A)===f.type){t(u,f.sibling),y=n(f,g.props),Mt(y,g),y.return=u,u=y;break a}t(u,f);break}else e(u,f);f=f.sibling}g.type===Pa?(y=sl(g.props.children,u.mode,y,g.key),Mt(y,g),y.return=u,u=y):(y=Hi(g.type,g.key,g.props,null,u.mode,y),Mt(y,g),y.return=u,u=y)}return s(u);case Ua:a:{for(A=g.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(u,f.sibling),y=n(f,g.children||[]),y.return=u,u=y;break a}else{t(u,f);break}else e(u,f);f=f.sibling}y=No(g,u.mode,y),y.return=u,u=y}return s(u);case ia:return g=ul(g),Z(u,f,g,y)}if(la(g))return k(u,f,g,y);if(H(g)){if(A=H(g),typeof A!="function")throw Error(b(150));return g=A.call(g),O(u,f,g,y)}if(typeof g.then=="function")return Z(u,f,Zi(g),y);if(g.$$typeof===Ra)return Z(u,f,Li(u,g),y);Ki(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(t(u,f.sibling),y=n(f,g),y.return=u,u=y):(t(u,f),y=ko(g,u.mode,y),y.return=u,u=y),s(u)):t(u,f)}return function(u,f,g,y){try{Rn=0;var A=Z(u,f,g,y);return Vl=null,A}catch(_){if(_===Xl||_===Vi)throw _;var I=fe(29,_,null,u.mode);return I.lanes=y,I.return=u,I}}}var bl=Pf(!0),ad=Pf(!1),_t=!1;function Ro(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bo(a,e){a=a.updateQueue,e.updateQueue===a&&(e.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function jt(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function Dt(a,e,t){var l=a.updateQueue;if(l===null)return null;if(l=l.shared,(na&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=Ui(a),Rf(a,null,t),e}return Di(a,l,e,t),Ui(a)}function Bn(a,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var l=e.lanes;l&=a.pendingLanes,t|=l,e.lanes=t,Gr(a,t)}}function Yo(a,e){var t=a.updateQueue,l=a.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var n=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?n=i=e:i=i.next=e}else n=i=e;t={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},a.updateQueue=t;return}a=t.lastBaseUpdate,a===null?t.firstBaseUpdate=e:a.next=e,t.lastBaseUpdate=e}var Go=!1;function Yn(){if(Go){var a=Ll;if(a!==null)throw a}}function Gn(a,e,t,l){Go=!1;var n=a.updateQueue;_t=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var c=o,x=c.next;c.next=null,s===null?i=x:s.next=x,s=c;var h=a.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=x:o.next=x,h.lastBaseUpdate=c))}if(i!==null){var S=n.baseState;s=0,h=x=c=null,o=i;do{var p=o.lane&-536870913,m=p!==o.lane;if(m?(F&p)===p:(l&p)===p){p!==0&&p===dl&&(Go=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});a:{var k=a,O=o;p=e;var Z=t;switch(O.tag){case 1:if(k=O.payload,typeof k=="function"){S=k.call(Z,S,p);break a}S=k;break a;case 3:k.flags=k.flags&-65537|128;case 0:if(k=O.payload,p=typeof k=="function"?k.call(Z,S,p):k,p==null)break a;S=T({},S,p);break a;case 2:_t=!0}}p=o.callback,p!==null&&(a.flags|=64,m&&(a.flags|=8192),m=n.callbacks,m===null?n.callbacks=[p]:m.push(p))}else m={lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(x=h=m,c=S):h=h.next=m,s|=p;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;m=o,o=m.next,m.next=null,n.lastBaseUpdate=m,n.shared.pending=null}}while(!0);h===null&&(c=S),n.baseState=c,n.firstBaseUpdate=x,n.lastBaseUpdate=h,i===null&&(n.shared.lanes=0),qt|=s,a.lanes=s,a.memoizedState=S}}function ed(a,e){if(typeof a!="function")throw Error(b(191,a));a.call(e)}function td(a,e){var t=a.callbacks;if(t!==null)for(a.callbacks=null,a=0;a<t.length;a++)ed(t[a],e)}var Ut=Ve(null),Ji=Ve(0);function ld(a,e){a=vt,ma(Ji,a),ma(Ut,e),vt=a|e.baseLanes}function qo(){ma(Ji,vt),ma(Ut,Ut.current)}function Lo(){vt=Ji.current,Xa(Ut),Xa(Ji)}var Za=Ve(null),ae=null;function Ht(a){var e=a.alternate;ma(Ka,Ka.current&1),ma(Za,a),ae===null&&(e===null||Ut.current!==null||e.memoizedState!==null)&&(ae=a)}function Xo(a){ma(Ka,Ka.current),ma(Za,a),ae===null&&(ae=a)}function nd(a){a.tag===22?(ma(Ka,Ka.current),ma(Za,a),ae===null&&(ae=a)):Rt()}function Rt(){ma(Ka,Ka.current),ma(Za,Za.current)}function Se(a){Xa(Za),ae===a&&(ae=null),Xa(Ka)}var Ka=Ve(0);function qn(a,e){ma(Za,Za.current),ma(Ka,e)}function Vo(a){Xa(Ka),Xa(Za),ae===a&&(ae=null)}function $i(a){for(var e=a;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||pr(t)||ur(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bt=0,Q=null,fa=null,Oa=null,Fi=!1,Ql=!1,gl=!1,Ii=0,Ln=0,Zl=null,_1=0;function Ta(){throw Error(b(321))}function Qo(a,e){if(e===null)return!1;for(var t=0;t<e.length&&t<a.length;t++)if(!we(a[t],e[t]))return!1;return!0}function Zo(a,e,t,l,n,i){return bt=i,Q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,M.H=a===null||a.memoizedState===null?qd:Ld,gl=!1,i=t(l,n),gl=!1,Ql&&(i=sd(e,t,l,n)),id(a),i}function id(a){M.H=ns;var e=fa!==null&&fa.next!==null;if(bt=0,Oa=fa=Q=null,Fi=!1,Ln=0,Zl=null,e)throw Error(b(300));a===null||Ma||(a=a.dependencies,a!==null&&qi(a)&&(Ma=!0))}function sd(a,e,t,l){Q=a;var n=0;do{if(Ql&&(Zl=null),Ln=0,Ql=!1,25<=n)throw Error(b(301));if(n+=1,Oa=fa=null,a.updateQueue!=null){var i=a.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=G1,i=e(t,l)}while(Ql);return i}function j1(){var a=M.H,e=a.useState()[0];return e=typeof e.then=="function"?Xn(e):e,a=a.useState()[0],(fa!==null?fa.memoizedState:null)!==a&&(Q.flags|=1024),e}function Ko(){var a=Ii!==0;return Ii=0,a}function Jo(a,e,t){e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~t}function $o(a){if(Fi){for(a=a.memoizedState;a!==null;){var e=a.queue;e!==null&&(e.pending=null),a=a.next}Fi=!1}bt=0,Oa=fa=Q=null,Ql=!1,Ln=Ii=0,Zl=null}function ie(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oa===null?Q.memoizedState=Oa=a:Oa=Oa.next=a,Oa}function Na(){if(fa===null){var a=Q.alternate;a=a!==null?a.memoizedState:null}else a=fa.next;var e=Oa===null?Q.memoizedState:Oa.next;if(e!==null)Oa=e,fa=a;else{if(a===null)throw Q.alternate===null?Error(b(467)):Error(b(310));fa=a,a={memoizedState:fa.memoizedState,baseState:fa.baseState,baseQueue:fa.baseQueue,queue:fa.queue,next:null},Oa===null?Q.memoizedState=Oa=a:Oa=Oa.next=a}return Oa}function Wi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xn(a){var e=Ln;return Ln+=1,Zl===null&&(Zl=[]),a=Ff(Zl,a,e),e=Q,(Oa===null?e.memoizedState:Oa.next)===null&&(e=e.alternate,M.H=e===null||e.memoizedState===null?qd:Ld),a}function Pi(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return Xn(a);if(a.$$typeof===E)return;if(a.$$typeof===Ra)return Qa(a)}throw Error(b(438,String(a)))}function Fo(a){var e=null,t=Q.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var l=Q.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Wi(),Q.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(a),l=0;l<a;l++)t[l]=Pt;return e.index++,t}function gt(a,e){return typeof e=="function"?e(a):e}function as(a){var e=Na();return Io(e,fa,a)}function Io(a,e,t){var l=a.queue;if(l===null)throw Error(b(311));l.lastRenderedReducer=t;var n=a.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}e.baseQueue=n=i,l.pending=null}if(i=a.baseState,n===null)a.memoizedState=i;else{e=n.next;var o=s=null,c=null,x=e,h=!1;do{var S=x.lane&-536870913;if(S!==x.lane?(F&S)===S:(bt&S)===S){var p=x.revertLane;if(p===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),S===dl&&(h=!0);else if((bt&p)===p){x=x.next,p===dl&&(h=!0);continue}else S={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},c===null?(o=c=S,s=i):c=c.next=S,Q.lanes|=p,qt|=p;S=x.action,gl&&t(i,S),i=x.hasEagerState?x.eagerState:t(i,S)}else p={lane:S,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},c===null?(o=c=p,s=i):c=c.next=p,Q.lanes|=S,qt|=S;x=x.next}while(x!==null&&x!==e);if(c===null?s=i:c.next=o,!we(i,a.memoizedState)&&(Ma=!0,h&&(t=Ll,t!==null)))throw t;a.memoizedState=i,a.baseState=s,a.baseQueue=c,l.lastRenderedState=i}return n===null&&(l.lanes=0),[a.memoizedState,l.dispatch]}function Wo(a){var e=Na(),t=e.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=a;var l=t.dispatch,n=t.pending,i=e.memoizedState;if(n!==null){t.pending=null;var s=n=n.next;do i=a(i,s.action),s=s.next;while(s!==n);we(i,e.memoizedState)||(Ma=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,l]}function od(a,e,t){var l=Q,n=Na(),i=K;if(i){if(t===void 0)throw Error(b(407));t=t()}else t=e();var s=!we((fa||n).memoizedState,t);if(s&&(n.memoizedState=t,Ma=!0),n=n.queue,ec(fd.bind(null,l,n,a),[a]),a=n.getSnapshot!==e||s||Oa!==null&&(Oa.memoizedState.tag&1)!==0,Kl(a?9:8,{destroy:void 0},rd.bind(null,l,n,t,e),null),a){if(l.flags|=2048,ga===null)throw Error(b(349));i||(bt&127)!==0||cd(l,e,t)}return t}function cd(a,e,t){a.flags|=16384,a={getSnapshot:e,value:t},e=Q.updateQueue,e===null?(e=Wi(),Q.updateQueue=e,e.stores=[a]):(t=e.stores,t===null?e.stores=[a]:t.push(a))}function rd(a,e,t,l){e.value=t,e.getSnapshot=l,dd(e)&&pd(a)}function fd(a,e,t){return t(function(){dd(e)&&pd(a)})}function dd(a){var e=a.getSnapshot;a=a.value;try{var t=e();return!we(a,t)}catch{return!0}}function pd(a){var e=il(a,2);e!==null&&xe(e,a,2)}function Po(a){var e=ie();if(typeof a=="function"){var t=a;if(a=t(),gl){Et(!0);try{t()}finally{Et(!1)}}}return e.memoizedState=e.baseState=a,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gt,lastRenderedState:a},e}function ud(a,e,t,l){return a.baseState=t,Io(a,fa,typeof l=="function"?l:gt)}function D1(a,e,t,l,n){if(ls(a))throw Error(b(485));if(a=e.action,a!==null){var i={payload:n,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};M.T!==null?t(!0):i.isTransition=!1,l(i),t=e.pending,t===null?(i.next=e.pending=i,xd(e,i)):(i.next=t.next,e.pending=t.next=i)}}function xd(a,e){var t=e.action,l=e.payload,n=a.state;if(e.isTransition){var i=M.T,s={};s.types=i!==null?i.types:null,M.T=s;try{var o=t(n,l),c=M.S;c!==null&&c(s,o),bd(a,e,o)}catch(x){ac(a,e,x)}finally{i!==null&&s.types!==null&&(i.types=s.types),M.T=i}}else try{i=t(n,l),bd(a,e,i)}catch(x){ac(a,e,x)}}function bd(a,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){gd(a,e,l)},function(l){return ac(a,e,l)}):gd(a,e,t)}function gd(a,e,t){e.status="fulfilled",e.value=t,md(e),a.state=t,e=a.pending,e!==null&&(t=e.next,t===e?a.pending=null:(t=t.next,e.next=t,xd(a,t)))}function ac(a,e,t){var l=a.pending;if(a.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=t,md(e),e=e.next;while(e!==l)}a.action=null}function md(a){a=a.listeners;for(var e=0;e<a.length;e++)(0,a[e])()}function hd(a,e){return e}function vd(a,e){if(K){var t=ga.formState;if(t!==null){a:{var l=Q;if(K){if(ha){e:{for(var n=ha,i=je;n.nodeType!==8;){if(!i){n=null;break e}if(n=Ue(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ha=Ue(n.nextSibling),l=n.data==="F!";break a}}At(l)}l=!1}l&&(e=t[0])}}return t=ie(),t.memoizedState=t.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hd,lastRenderedState:e},t.queue=l,t=Bd.bind(null,Q,l),l.dispatch=t,l=Po(!1),i=sc.bind(null,Q,!1,l.queue),l=ie(),n={state:e,dispatch:null,action:a,pending:null},l.queue=n,t=D1.bind(null,Q,n,i,t),n.dispatch=t,l.memoizedState=a,[e,t,!1]}function yd(a){var e=Na();return wd(e,fa,a)}function wd(a,e,t){if(e=Io(a,e,hd)[0],a=as(gt)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Xn(e)}catch(s){throw s===Xl?Vi:s}else l=e;e=Na();var n=e.queue,i=n.dispatch;return t!==e.memoizedState&&(Q.flags|=2048,Kl(9,{destroy:void 0},U1.bind(null,n,t),null)),[l,i,a]}function U1(a,e){a.action=e}function Sd(a){var e=Na(),t=fa;if(t!==null)return wd(e,t,a);Na(),e=e.memoizedState,t=Na();var l=t.queue.dispatch;return t.memoizedState=a,[e,l,!1]}function Kl(a,e,t,l){return a={tag:a,create:t,deps:l,inst:e,next:null},e=Q.updateQueue,e===null&&(e=Wi(),Q.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=a.next=a:(l=t.next,t.next=a,a.next=l,e.lastEffect=a),a}function zd(){return Na().memoizedState}function es(a,e,t,l){var n=ie();Q.flags|=a,n.memoizedState=Kl(1|e,{destroy:void 0},t,l===void 0?null:l)}function ts(a,e,t,l){var n=Na();l=l===void 0?null:l;var i=n.memoizedState.inst;fa!==null&&l!==null&&Qo(l,fa.memoizedState.deps)?n.memoizedState=Kl(e,i,t,l):(Q.flags|=a,n.memoizedState=Kl(1|e,i,t,l))}function Ed(a,e){es(8390656,8,a,e)}function ec(a,e){ts(2048,8,a,e)}function H1(a){Q.flags|=4;var e=Q.updateQueue;if(e===null)e=Wi(),Q.updateQueue=e,e.events=[a];else{var t=e.events;t===null?e.events=[a]:t.push(a)}}function Td(a){var e=Na().memoizedState;return H1({ref:e,nextImpl:a}),function(){if((na&2)!==0)throw Error(b(440));return e.impl.apply(void 0,arguments)}}function kd(a,e){return ts(4,2,a,e)}function Nd(a,e){return ts(4,4,a,e)}function Cd(a,e){if(typeof e=="function"){a=a();var t=e(a);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return a=a(),e.current=a,function(){e.current=null}}function Ad(a,e,t){t=t!=null?t.concat([a]):null,ts(4,4,Cd.bind(null,e,a),t)}function tc(){}function Od(a,e){var t=Na();e=e===void 0?null:e;var l=t.memoizedState;return e!==null&&Qo(e,l[1])?l[0]:(t.memoizedState=[a,e],a)}function Md(a,e){var t=Na();e=e===void 0?null:e;var l=t.memoizedState;if(e!==null&&Qo(e,l[1]))return l[0];if(l=a(),gl){Et(!0);try{a()}finally{Et(!1)}}return t.memoizedState=[l,e],l}function lc(a,e,t){return t===void 0||(bt&1073741824)!==0&&(F&261930)===0?a.memoizedState=e:(a.memoizedState=t,a=qp(),Q.lanes|=a,qt|=a,t)}function _d(a,e,t,l){return we(t,e)?t:Ut.current!==null?(a=lc(a,t,l),we(a,e)||(Ma=!0),a):(bt&106)===0||(bt&1073741824)!==0&&(F&261930)===0?(Ma=!0,a.memoizedState=t):(a=qp(),Q.lanes|=a,qt|=a,e)}function jd(a,e,t,l,n){var i=L.p;L.p=i!==0&&8>i?i:8;var s=M.T,o={};o.types=s!==null?s.types:null,M.T=o,sc(a,!1,e,t);try{var c=n(),x=M.S;if(x!==null&&x(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=M1(c,l);Vn(a,e,h,ke(a))}else Vn(a,e,l,ke(a))}catch(S){Vn(a,e,{then:function(){},status:"rejected",reason:S},ke())}finally{L.p=i,s!==null&&o.types!==null&&(s.types=o.types),M.T=s}}function R1(){}function nc(a,e,t,l){if(a.tag!==5)throw Error(b(476));var n=Dd(a).queue;jd(a,n,e,it,t===null?R1:function(){return Ud(a),t(l)})}function Dd(a){var e=a.memoizedState;if(e!==null)return e;e={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gt,lastRenderedState:it},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gt,lastRenderedState:t},next:null},a.memoizedState=e,a=a.alternate,a!==null&&(a.memoizedState=e),e}function Ud(a){var e=Dd(a);e.next===null&&(e=a.alternate.memoizedState),Vn(a,e.next.queue,{},ke())}function ic(){return Qa(un)}function Hd(){return Na().memoizedState}function Rd(){return Na().memoizedState}function B1(a){for(var e=a.return;e!==null;){switch(e.tag){case 24:case 3:var t=ke();a=jt(t);var l=Dt(e,a,t);l!==null&&(xe(l,e,t),Bn(l,e,t)),e={cache:jo()},a.payload=e;return}e=e.return}}function Y1(a,e,t){var l=ke();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ls(a)?Yd(e,t):(t=Eo(a,e,t,l),t!==null&&(xe(t,a,l),Gd(t,e,l)))}function Bd(a,e,t){var l=ke();Vn(a,e,t,l)}function Vn(a,e,t,l){var n={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(ls(a))Yd(e,n);else{var i=a.alternate;if(a.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,o=i(s,t);if(n.hasEagerState=!0,n.eagerState=o,we(o,s))return Di(a,e,n,0),ga===null&&ji(),!1}catch{}if(t=Eo(a,e,n,l),t!==null)return xe(t,a,l),Gd(t,e,l),!0}return!1}function sc(a,e,t,l){if(l={lane:2,revertLane:Fc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ls(a)){if(e)throw Error(b(479))}else e=Eo(a,t,l,2),e!==null&&xe(e,a,2)}function ls(a){var e=a.alternate;return a===Q||e!==null&&e===Q}function Yd(a,e){Ql=Fi=!0;var t=a.pending;t===null?e.next=e:(e.next=t.next,t.next=e),a.pending=e}function Gd(a,e,t){if((t&4194048)!==0){var l=e.lanes;l&=a.pendingLanes,t|=l,e.lanes=t,Gr(a,t)}}var ns={readContext:Qa,use:Pi,useCallback:Ta,useContext:Ta,useEffect:Ta,useImperativeHandle:Ta,useLayoutEffect:Ta,useInsertionEffect:Ta,useMemo:Ta,useReducer:Ta,useRef:Ta,useState:Ta,useDebugValue:Ta,useDeferredValue:Ta,useTransition:Ta,useSyncExternalStore:Ta,useId:Ta,useHostTransitionStatus:Ta,useFormState:Ta,useActionState:Ta,useOptimistic:Ta,useMemoCache:Ta,useCacheRefresh:Ta,useEffectEvent:Ta},qd={readContext:Qa,use:Pi,useCallback:function(a,e){return ie().memoizedState=[a,e===void 0?null:e],a},useContext:Qa,useEffect:Ed,useImperativeHandle:function(a,e,t){t=t!=null?t.concat([a]):null,es(4194308,4,Cd.bind(null,e,a),t)},useLayoutEffect:function(a,e){return es(4194308,4,a,e)},useInsertionEffect:function(a,e){es(4,2,a,e)},useMemo:function(a,e){var t=ie();e=e===void 0?null:e;var l=a();if(gl){Et(!0);try{a()}finally{Et(!1)}}return t.memoizedState=[l,e],l},useReducer:function(a,e,t){var l=ie();if(t!==void 0){var n=t(e);if(gl){Et(!0);try{t(e)}finally{Et(!1)}}}else n=e;return l.memoizedState=l.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:n},l.queue=a,a=a.dispatch=Y1.bind(null,Q,a),[l.memoizedState,a]},useRef:function(a){var e=ie();return a={current:a},e.memoizedState=a},useState:function(a){a=Po(a);var e=a.queue,t=Bd.bind(null,Q,e);return e.dispatch=t,[a.memoizedState,t]},useDebugValue:tc,useDeferredValue:function(a,e){var t=ie();return lc(t,a,e)},useTransition:function(){var a=Po(!1);return a=jd.bind(null,Q,a.queue,!0,!1),ie().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,e,t){var l=Q,n=ie();if(K){if(t===void 0)throw Error(b(407));t=t()}else{if(t=e(),ga===null)throw Error(b(349));(F&127)!==0||cd(l,e,t)}n.memoizedState=t;var i={value:t,getSnapshot:e};return n.queue=i,Ed(fd.bind(null,l,i,a),[a]),l.flags|=2048,Kl(9,{destroy:void 0},rd.bind(null,l,i,t,e),null),t},useId:function(){var a=ie(),e=ga.identifierPrefix;if(K){var t=Je,l=Ke;t=(l&~(1<<32-ve(l)-1)).toString(32)+t,e="_"+e+"R_"+t,t=Ii++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=_1++,e="_"+e+"r_"+t.toString(32)+"_";return a.memoizedState=e},useHostTransitionStatus:ic,useFormState:vd,useActionState:vd,useOptimistic:function(a){var e=ie();e.memoizedState=e.baseState=a;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=sc.bind(null,Q,!0,t),t.dispatch=e,[a,e]},useMemoCache:Fo,useCacheRefresh:function(){return ie().memoizedState=B1.bind(null,Q)},useEffectEvent:function(a){var e=ie(),t={impl:a};return e.memoizedState=t,function(){if((na&2)!==0)throw Error(b(440));return t.impl.apply(void 0,arguments)}}},Ld={readContext:Qa,use:Pi,useCallback:Od,useContext:Qa,useEffect:ec,useImperativeHandle:Ad,useInsertionEffect:kd,useLayoutEffect:Nd,useMemo:Md,useReducer:as,useRef:zd,useState:function(){return as(gt)},useDebugValue:tc,useDeferredValue:function(a,e){var t=Na();return _d(t,fa.memoizedState,a,e)},useTransition:function(){var a=as(gt)[0],e=Na().memoizedState;return[typeof a=="boolean"?a:Xn(a),e]},useSyncExternalStore:od,useId:Hd,useHostTransitionStatus:ic,useFormState:yd,useActionState:yd,useOptimistic:function(a,e){var t=Na();return ud(t,fa,a,e)},useMemoCache:Fo,useCacheRefresh:Rd,useEffectEvent:Td},G1={readContext:Qa,use:Pi,useCallback:Od,useContext:Qa,useEffect:ec,useImperativeHandle:Ad,useInsertionEffect:kd,useLayoutEffect:Nd,useMemo:Md,useReducer:Wo,useRef:zd,useState:function(){return Wo(gt)},useDebugValue:tc,useDeferredValue:function(a,e){var t=Na();return fa===null?lc(t,a,e):_d(t,fa.memoizedState,a,e)},useTransition:function(){var a=Wo(gt)[0],e=Na().memoizedState;return[typeof a=="boolean"?a:Xn(a),e]},useSyncExternalStore:od,useId:Hd,useHostTransitionStatus:ic,useFormState:Sd,useActionState:Sd,useOptimistic:function(a,e){var t=Na();return fa!==null?ud(t,fa,a,e):(t.baseState=a,[a,t.queue.dispatch])},useMemoCache:Fo,useCacheRefresh:Rd,useEffectEvent:Td};function oc(a,e,t,l){e=a.memoizedState,t=t(l,e),t=t==null?e:T({},e,t),a.memoizedState=t,a.lanes===0&&(a.updateQueue.baseState=t)}var cc={enqueueSetState:function(a,e,t){a=a._reactInternals;var l=ke(),n=jt(l);n.payload=e,t!=null&&(n.callback=t),e=Dt(a,n,l),e!==null&&(xe(e,a,l),Bn(e,a,l))},enqueueReplaceState:function(a,e,t){a=a._reactInternals;var l=ke(),n=jt(l);n.tag=1,n.payload=e,t!=null&&(n.callback=t),e=Dt(a,n,l),e!==null&&(xe(e,a,l),Bn(e,a,l))},enqueueForceUpdate:function(a,e){a=a._reactInternals;var t=ke(),l=jt(t);l.tag=2,e!=null&&(l.callback=e),e=Dt(a,l,t),e!==null&&(xe(e,a,t),Bn(e,a,t))}};function Xd(a,e,t,l,n,i,s){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(l,i,s):e.prototype&&e.prototype.isPureReactComponent?!On(t,l)||!On(n,i):!0}function Vd(a,e,t,l){a=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,l),e.state!==a&&cc.enqueueReplaceState(e,e.state,null)}function ml(a,e){var t=e;if("ref"in e){t={};for(var l in e)l!=="ref"&&(t[l]=e[l])}if(a=a.defaultProps){t===e&&(t=T({},t));for(var n in a)t[n]===void 0&&(t[n]=a[n])}return t}function Qd(a){_i(a)}function Zd(a){console.error(a)}function Kd(a){_i(a)}function is(a,e){try{var t=a.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Jd(a,e,t){try{var l=a.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function rc(a,e,t){return t=jt(t),t.tag=3,t.payload={element:null},t.callback=function(){is(a,e)},t}function $d(a){return a=jt(a),a.tag=3,a}function Fd(a,e,t,l){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;a.payload=function(){return n(i)},a.callback=function(){Jd(e,t,l)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(a.callback=function(){Jd(e,t,l),typeof n!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function q1(a,e,t,l,n){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=t.alternate,e!==null&&rl(e,t,n,!0),t=Za.current,t!==null){switch(t.tag){case 31:case 13:case 19:return ae===null?ks():t.alternate===null&&ka===0&&(ka=3),t.flags&=-257,t.flags|=65536,t.lanes=n,l===Qi?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([l]):e.add(l),Kc(a,l,n)),!1;case 22:return t.flags|=65536,l===Qi?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([l]):t.add(l)),Kc(a,l,n)),!1}throw Error(b(435,t.tag))}return Kc(a,l,n),ks(),!1}if(K)return e=Za.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==Ao&&(a=Error(b(422),{cause:l}),jn(Oe(a,t)))):(l!==Ao&&(e=Error(b(423),{cause:l}),jn(Oe(e,t))),a=a.current.alternate,a.flags|=65536,n&=-n,a.lanes|=n,l=Oe(l,t),n=rc(a.stateNode,l,n),Yo(a,n),ka!==4&&(ka=2)),!1;var i=Error(b(520),{cause:l});if(i=Oe(i,t),Wn===null?Wn=[i]:Wn.push(i),ka!==4&&(ka=2),e===null)return!0;l=Oe(l,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,a=n&-n,t.lanes|=a,a=rc(t.stateNode,l,a),Yo(t,a),!1;case 1:if(e=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Lt===null||!Lt.has(i))))return t.flags|=65536,n&=-n,t.lanes|=n,n=$d(n),Fd(n,a,t,l),Yo(t,n),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var fc=Error(b(461)),Ma=!1;function Ha(a,e,t,l){e.child=a===null?ad(e,null,t,l):bl(e,a.child,t,l)}function Id(a,e,t,l,n){t=t.render;var i=e.ref;if("ref"in l){var s={};for(var o in l)o!=="ref"&&(s[o]=l[o])}else s=l;return fl(e),l=Zo(a,e,t,s,i,n),o=Ko(),a!==null&&!Ma?(Jo(a,e,n),mt(a,e,n)):(K&&o&&Bi(e),e.flags|=1,Ha(a,e,l,n),e.child)}function Wd(a,e,t,l,n){if(a===null){var i=t.type;return typeof i=="function"&&!To(i)&&i.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=i,Pd(a,e,i,l,n)):(a=Hi(t.type,null,l,e,e.mode,n),a.ref=e.ref,a.return=e,e.child=a)}if(i=a.child,!hc(a,n)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:On,t(s,l)&&a.ref===e.ref)return mt(a,e,n)}return e.flags|=1,a=dt(i,l),a.ref=e.ref,a.return=e,e.child=a}function Pd(a,e,t,l,n){if(a!==null){var i=a.memoizedProps;if(On(i,l)&&a.ref===e.ref)if(Ma=!1,e.pendingProps=l=i,hc(a,n))(a.flags&131072)!==0&&(Ma=!0);else return e.lanes=a.lanes,mt(a,e,n)}return dc(a,e,t,l,n)}function ap(a,e,t,l){var n=l.children,i=a!==null?a.memoizedState:null;if(a===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,a!==null){for(l=e.child=a.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return ep(a,e,i,t,l)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},a!==null&&Xi(e,i!==null?i.cachePool:null),i!==null?ld(e,i):qo(),nd(e);else return l=e.lanes=536870912,ep(a,e,i!==null?i.baseLanes|t:t,t,l)}else i!==null?(Xi(e,i.cachePool),ld(e,i),Rt(),e.memoizedState=null):(a!==null&&Xi(e,null),qo(),Rt());return Ha(a,e,n,t),e.child}function Qn(a,e){return a!==null&&a.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function ep(a,e,t,l,n){var i=Uo();return i=i===null?null:{parent:Aa._currentValue,pool:i},e.memoizedState={baseLanes:t,cachePool:i},a!==null&&Xi(e,null),qo(),nd(e),a!==null&&rl(a,e,l,!0),e.childLanes=n,null}function ss(a,e){return e=os({mode:e.mode,children:e.children},a.mode),e.ref=a.ref,a.child=e,e.return=a,e}function tp(a,e,t){return bl(e,a.child,null,t),a=ss(e,e.pendingProps),a.flags|=2,Se(e),e.memoizedState=null,a}function L1(a,e,t){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,a===null){if(K){if(l.mode==="hidden")return a=ss(e,l),e.lanes=536870912,a.memoizedState={baseLanes:0,cachePool:null},Qn(null,a);if(Xo(e),(a=ha)?(a=Cu(a,je),a=a!==null&&a.data==="&"?a:null,a!==null&&(e.memoizedState={dehydrated:a,treeContext:Nt!==null?{id:Ke,overflow:Je}:null,retryLane:536870912,hydrationErrors:null},t=Yf(a),t.return=e,e.child=t,Ya=e,ha=null)):a=null,a===null)throw At(e);return e.lanes=536870912,null}return ss(e,l)}var i=a.memoizedState;if(i!==null){var s=i.dehydrated;if(Xo(e),n)if(e.flags&256)e.flags&=-257,e=tp(a,e,t);else if(e.memoizedState!==null)e.child=a.child,e.flags|=128,e=null;else throw Error(b(558));else if(Ma||rl(a,e,t,!1),n=(t&a.childLanes)!==0,Ma||n){if(Ut.current===null){if(l=ga,l!==null&&(s=qr(l,t),s!==0&&s!==i.retryLane))throw i.retryLane=s,il(a,s),xe(l,a,s),fc;ks()}e=tp(a,e,t)}else a=i.treeContext,ha=Ue(s.nextSibling),Ya=e,K=!0,Ct=null,je=!1,a!==null&&Lf(e,a),e=ss(e,l),e.flags|=134221824;return e}return a=dt(a.child,{mode:l.mode,children:l.children}),a.ref=e.ref,e.child=a,a.return=e,a}function Jl(a,e){var t=e.ref;if(t===null)a!==null&&a.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(b(284));(a===null||a.ref!==t)&&(e.flags|=4194816)}}function dc(a,e,t,l,n){return fl(e),t=Zo(a,e,t,l,void 0,n),l=Ko(),a!==null&&!Ma?(Jo(a,e,n),mt(a,e,n)):(K&&l&&Bi(e),e.flags|=1,Ha(a,e,t,n),e.child)}function lp(a,e,t,l,n,i){return fl(e),e.updateQueue=null,t=sd(e,l,t,n),id(a),l=Ko(),a!==null&&!Ma?(Jo(a,e,i),mt(a,e,i)):(K&&l&&Bi(e),e.flags|=1,Ha(a,e,t,i),e.child)}function np(a,e,t,l,n){if(fl(e),e.stateNode===null){var i=Bl,s=t.contextType;typeof s=="object"&&s!==null&&(i=Qa(s)),i=new t(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},Ro(e),s=t.contextType,i.context=typeof s=="object"&&s!==null?Qa(s):Bl,i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(oc(e,t,s,l),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&cc.enqueueReplaceState(i,i.state,null),Gn(e,l,i,n),Yn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(a===null){i=e.stateNode;var o=e.memoizedProps,c=ml(t,o);i.props=c;var x=i.context,h=t.contextType;s=Bl,typeof h=="object"&&h!==null&&(s=Qa(h));var S=t.getDerivedStateFromProps;h=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||x!==s)&&Vd(e,i,l,s),_t=!1;var p=e.memoizedState;i.state=p,Gn(e,l,i,n),Yn(),x=e.memoizedState,o||p!==x||_t?(typeof S=="function"&&(oc(e,t,S,l),x=e.memoizedState),(c=_t||Xd(e,t,c,l,p,x,s))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=x),i.props=l,i.state=x,i.context=s,l=c):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Bo(a,e),s=e.memoizedProps,h=ml(t,s),i.props=h,S=e.pendingProps,p=i.context,x=t.contextType,c=Bl,typeof x=="object"&&x!==null&&(c=Qa(x)),o=t.getDerivedStateFromProps,(x=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==S||p!==c)&&Vd(e,i,l,c),_t=!1,p=e.memoizedState,i.state=p,Gn(e,l,i,n),Yn();var m=e.memoizedState;s!==S||p!==m||_t||a!==null&&a.dependencies!==null&&qi(a.dependencies)?(typeof o=="function"&&(oc(e,t,o,l),m=e.memoizedState),(h=_t||Xd(e,t,h,l,p,m,c)||a!==null&&a.dependencies!==null&&qi(a.dependencies))?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,m,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,m,c)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===a.memoizedProps&&p===a.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===a.memoizedProps&&p===a.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=m),i.props=l,i.state=m,i.context=c,l=h):(typeof i.componentDidUpdate!="function"||s===a.memoizedProps&&p===a.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===a.memoizedProps&&p===a.memoizedState||(e.flags|=1024),l=!1)}return i=l,Jl(a,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,a!==null&&l?(e.child=bl(e,a.child,null,n),e.child=bl(e,null,t,n)):Ha(a,e,t,n),e.memoizedState=i.state,a=e.child):a=mt(a,e,n),a}function ip(a,e,t,l){return ol(),e.flags|=256,Ha(a,e,t,l),e.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uc(a){return{baseLanes:a,cachePool:Jf()}}function xc(a,e,t){return a=a!==null?a.childLanes&~t:0,e&&(a|=Te),a}function sp(a,e,t){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,s;if((s=i)||(s=a!==null&&a.memoizedState===null?!1:(Ka.current&2)!==0),s&&(n=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,a===null){if(K){if(n?Ht(e):Rt(),(a=ha)?(a=Cu(a,je),a=a!==null&&a.data!=="&"?a:null,a!==null&&(e.memoizedState={dehydrated:a,treeContext:Nt!==null?{id:Ke,overflow:Je}:null,retryLane:536870912,hydrationErrors:null},t=Yf(a),t.return=e,e.child=t,Ya=e,ha=null)):a=null,a===null)throw At(e);return ur(a)?e.lanes=32:e.lanes=536870912,null}return i=l.children,l=l.fallback,n?(Rt(),n=e.mode,i=os({mode:"hidden",children:i},n),l=sl(l,n,t,null),i.return=e,l.return=e,i.sibling=l,e.child=i,l=e.child,l.memoizedState=uc(t),l.childLanes=xc(a,s,t),e.memoizedState=pc,Qn(null,l)):(Ht(e),bc(e,i))}var o=a.memoizedState;if(o!==null){var c=o.dehydrated;if(c!==null)return X1(a,e,i,s,l,c,o,t)}return n?(Rt(),n=l.fallback,i=e.mode,o=a.child,c=o.sibling,l=dt(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&1206910976,c!==null?n=dt(c,n):(n=sl(n,i,t,null),n.flags|=2),n.return=e,l.return=e,l.sibling=n,e.child=l,Qn(null,l),l=e.child,n=a.child.memoizedState,n===null?n=uc(t):(i=n.cachePool,i!==null?(o=Aa._currentValue,i=i.parent!==o?{parent:o,pool:o}:i):i=Jf(),n={baseLanes:n.baseLanes|t,cachePool:i}),l.memoizedState=n,l.childLanes=xc(a,s,t),e.memoizedState=pc,Qn(a.child,l)):(Ht(e),t=a.child,a=t.sibling,t=dt(t,{mode:"visible",children:l.children}),t.return=e,t.sibling=null,a!==null&&(s=e.deletions,s===null?(e.deletions=[a],e.flags|=16):s.push(a)),e.child=t,e.memoizedState=null,t)}function bc(a,e){return e=os({mode:"visible",children:e},a.mode),e.return=a,a.child=e}function os(a,e){return a=fe(22,a,null,e),a.lanes=0,a}function cs(a,e,t){return bl(e,a.child,null,t),a=bc(e,e.pendingProps.children),a.flags|=2,e.memoizedState=null,a}function X1(a,e,t,l,n,i,s,o){if(t)return e.flags&256?(Ht(e),e.flags&=-257,cs(a,e,o)):e.memoizedState!==null?(Rt(),e.child=a.child,e.flags|=128,null):(Rt(),i=n.fallback,s=e.mode,n=os({mode:"visible",children:n.children},s),i=sl(i,s,o,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,bl(e,a.child,null,o),n=e.child,n.memoizedState=uc(o),n.childLanes=xc(a,l,o),e.memoizedState=pc,Qn(null,n));if(Ht(e),ur(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var c=l.dgst;return l=c,l!==""&&(n=Error(b(419)),n.stack="",n.digest=l,jn({value:n,source:null,stack:null})),cs(a,e,o)}if(Ma||rl(a,e,o,!1),l=(o&a.childLanes)!==0,Ma||l){if(Ut.current!==null)return cs(a,e,o);if(l=ga,l!==null&&(n=qr(l,o),n!==0&&n!==s.retryLane))throw s.retryLane=n,il(a,n),xe(l,a,n),fc;return pr(i)||ks(),cs(a,e,o)}return pr(i)?(e.flags|=192,e.child=a.child,null):(a=s.treeContext,ha=Ue(i.nextSibling),Ya=e,K=!0,Ct=null,je=!1,a!==null&&Lf(e,a),e=bc(e,n.children),e.flags|=134221824,e)}function op(a,e,t){a.lanes|=e;var l=a.alternate;l!==null&&(l.lanes|=e),Gi(a.return,e,t)}function cp(a){for(var e=null;a!==null;){var t=a.alternate;t!==null&&$i(t)===null&&(e=a),a=a.sibling}return e}function rs(a,e,t,l,n,i){var s=a.memoizedState;s===null?a.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:n,treeForkCount:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=t,s.tailMode=n,s.treeForkCount=i)}function gc(a){var e=a.child;for(a.child=null;e!==null;){var t=e.sibling;e.sibling=a.child,a.child=e,e=t}}function mc(a,e,t){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var s=Ka.current;if(e.flags&128)return qn(e,s),null;var o=(s&2)!==0;if(o?(s=s&1|2,e.flags|=128):s&=1,qn(e,s),n==="backwards"&&a!==null?(gc(a),Ha(a,e,l,t),gc(a)):Ha(a,e,l,t),l=K?_n:0,!o&&a!==null&&(a.flags&128)!==0)a:for(a=e.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&op(a,t,e);else if(a.tag===19)op(a,t,e);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break a;for(;a.sibling===null;){if(a.return===null||a.return===e)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}switch(n){case"backwards":t=cp(e.child),t===null?(n=e.child,e.child=null):(n=t.sibling,t.sibling=null,gc(e)),rs(e,!0,n,null,i,l);break;case"unstable_legacy-backwards":for(t=null,n=e.child,e.child=null;n!==null;){if(a=n.alternate,a!==null&&$i(a)===null){e.child=n;break}a=n.sibling,n.sibling=t,t=n,n=a}rs(e,!0,t,null,i,l);break;case"together":rs(e,!1,null,null,void 0,l);break;case"independent":e.memoizedState=null;break;default:t=cp(e.child),t===null?(n=e.child,e.child=null):(n=t.sibling,t.sibling=null),rs(e,!1,n,t,i,l)}return e.child}function rp(a,e,t){var l=e.pendingProps;return Ot(e,e.type,l.value),Ha(a,e,l.children,t),e.child}function mt(a,e,t){if(a!==null&&(e.dependencies=a.dependencies),qt|=e.lanes,(t&e.childLanes)===0)if(a!==null){if(rl(a,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(a!==null&&e.child!==a.child)throw Error(b(153));if(e.child!==null){for(a=e.child,t=dt(a,a.pendingProps),e.child=t,t.return=e;a.sibling!==null;)a=a.sibling,t=t.sibling=dt(a,a.pendingProps),t.return=e;t.sibling=null}return e.child}function hc(a,e){return(a.lanes&e)!==0?!0:(a=a.dependencies,!!(a!==null&&qi(a)))}function V1(a,e,t){switch(e.tag){case 3:xi(e,e.stateNode.containerInfo),Ot(e,Aa,a.memoizedState.cache),ol();break;case 27:case 5:Vs(e);break;case 4:xi(e,e.stateNode.containerInfo);break;case 10:Ot(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Xo(e),null;break;case 13:var l=e.memoizedState;if(l!==null){if(l.dehydrated!==null)return Ht(e),e.flags|=128,null;l=rl(a,e,t,!1);var n=e.child.childLanes;return l||(t&n)!==0?sp(a,e,t):(Ht(e),a=mt(a,e,t),a!==null?a.sibling:null)}Ht(e);break;case 19:if(e.flags&128)return mc(a,e,t);if(n=(a.flags&128)!==0,l=(t&e.childLanes)!==0,l||(rl(a,e,t,!1),l=(t&e.childLanes)!==0),n){if(l)return mc(a,e,t);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),qn(e,Ka.current),l)break;return null;case 22:return e.lanes=0,ap(a,e,t,e.pendingProps);case 24:Ot(e,Aa,a.memoizedState.cache)}return mt(a,e,t)}function fp(a,e,t){if(a!==null)if(a.memoizedProps!==e.pendingProps)Ma=!0;else{if(!hc(a,t)&&(e.flags&128)===0)return Ma=!1,V1(a,e,t);Ma=(a.flags&131072)!==0}else Ma=!1,K&&(e.flags&1048576)!==0&&qf(e,_n,e.index);switch(e.lanes=0,e.tag){case 16:a:{var l=e.pendingProps;if(a=ul(e.elementType),e.type=a,typeof a=="function")To(a)?(l=ml(a,l),e.tag=1,e=np(null,e,a,l,t)):(e.tag=0,e=dc(null,e,a,l,t));else{if(a!=null){var n=a.$$typeof;if(n===C){e.tag=11,e=Id(null,e,a,l,t);break a}else if(n===ba){e.tag=14,e=Wd(null,e,a,l,t);break a}else if(n===Ra){e.tag=10,e.type=a,e=rp(null,e,t);break a}}throw e=ea(a)||a,Error(b(306,e,""))}}return e;case 0:return dc(a,e,e.type,e.pendingProps,t);case 1:return l=e.type,n=ml(l,e.pendingProps),np(a,e,l,n,t);case 3:a:{if(xi(e,e.stateNode.containerInfo),a===null)throw Error(b(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,Bo(a,e),Gn(e,l,null,t);var s=e.memoizedState;if(l=s.cache,Ot(e,Aa,l),l!==i.cache&&_o(e,[Aa],t,!0),Yn(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=ip(a,e,l,t);break a}else if(l!==n){n=Oe(Error(b(424)),e),jn(n),e=ip(a,e,l,t);break a}else for(a=e.stateNode.containerInfo,a.nodeType===9?a=a.body:a=a.nodeName==="HTML"?a.ownerDocument.body:a,ha=Ue(a.firstChild),Ya=e,K=!0,Ct=null,je=!0,t=ad(e,null,l,t),e.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling;else{if(ol(),l===n){e=mt(a,e,t);break a}Ha(a,e,l,t)}e=e.child}return e;case 26:return Jl(a,e),a===null?(t=Uu(e.type,null,e.pendingProps,null))?e.memoizedState=t:K||(e.stateNode=xu(e.type,e.pendingProps,St.current,e)):e.memoizedState=Uu(e.type,a.memoizedProps,e.pendingProps,a.memoizedState),null;case 27:return Vs(e),a===null&&K&&(l=e.stateNode=Mu(e.type,e.pendingProps,St.current),Ya=e,je=!0,n=ha,Qt(e.type)?(xr=n,ha=Ue(l.firstChild)):ha=n),Ha(a,e,e.pendingProps.children,t),Jl(a,e),a===null&&(e.flags|=4194304),e.child;case 5:return a===null&&K&&((n=l=ha)&&(l=Bx(l,e.type,e.pendingProps,je),l!==null?(e.stateNode=l,Ya=e,ha=Ue(l.firstChild),je=!1,n=!0):n=!1),n||At(e)),Vs(e),n=e.type,i=e.pendingProps,s=a!==null?a.memoizedProps:null,l=i.children,ir(n,i)?l=null:s!==null&&ir(n,s)&&(e.flags|=32),e.memoizedState!==null&&(n=Zo(a,e,j1,null,null,t),un._currentValue=n),Jl(a,e),Ha(a,e,l,t),e.child;case 6:return a===null&&K&&((a=t=ha)&&(t=Yx(t,e.pendingProps,je),t!==null?(e.stateNode=t,Ya=e,ha=null,a=!0):a=!1),a||At(e)),null;case 13:return sp(a,e,t);case 4:return xi(e,e.stateNode.containerInfo),l=e.pendingProps,a===null?e.child=bl(e,null,l,t):Ha(a,e,l,t),e.child;case 11:return Id(a,e,e.type,e.pendingProps,t);case 7:return l=e.pendingProps,Jl(a,e),Ha(a,e,l,t),e.child;case 8:return Ha(a,e,e.pendingProps.children,t),e.child;case 12:return Ha(a,e,e.pendingProps.children,t),e.child;case 10:return rp(a,e,t);case 9:return n=e.type._context,l=e.pendingProps.children,fl(e),n=Qa(n),l=l(n),e.flags|=1,Ha(a,e,l,t),e.child;case 14:return Wd(a,e,e.type,e.pendingProps,t);case 15:return Pd(a,e,e.type,e.pendingProps,t);case 19:return mc(a,e,t);case 31:return L1(a,e,t);case 22:return ap(a,e,t,e.pendingProps);case 24:return fl(e),l=Qa(Aa),a===null?(n=Uo(),n===null&&(n=ga,i=jo(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=t),n=i),e.memoizedState={parent:l,cache:n},Ro(e),Ot(e,Aa,n)):((a.lanes&t)!==0&&(Bo(a,e),Gn(e,null,null,t),Yn()),n=a.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Ot(e,Aa,l)):(l=i.cache,Ot(e,Aa,l),l!==n.cache&&_o(e,[Aa],t,!0))),Ha(a,e,e.pendingProps.children,t),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=e.pendingProps,l.name!=null&&l.name!=="auto"?e.flags|=a===null?18882560:18874368:K&&Bi(e),a!==null&&a.memoizedProps.name!==l.name?e.flags|=4194816:Jl(a,e),Ha(a,e,l.children,t),e.child;case 29:throw e.pendingProps}throw Error(b(156,e.tag))}function ht(a){a.flags|=4}function vc(a,e,t,l,n){var i;if((i=(a.mode&32)!==0)&&(i=t===null?Yu(e,l):Yu(e,l)&&(l.src!==t.src||l.srcSet!==t.srcSet)),i){if(a.flags|=16777216,(n&335544128)===n)if(a.stateNode.complete)a.flags|=8192;else if(Qp())a.flags|=8192;else throw xl=Qi,Ho}else a.flags&=-16777217}function dp(a,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!Gu(e))if(Qp())a.flags|=8192;else throw xl=Qi,Ho}function fs(a,e){e!==null&&(a.flags|=4),a.flags&16384&&(e=a.tag!==22?Br():536870912,a.lanes|=e,Pl|=e)}function Zn(a,e){if(!K)switch(a.tailMode){case"visible":break;case"collapsed":for(var t=a.tail,l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e||a.tail===null?a.tail=null:a.tail.sibling=null:l.sibling=null;break;default:for(e=a.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?a.tail=null:t.sibling=null}}function va(a){var e=a.alternate!==null&&a.alternate.child===a.child,t=0,l=0;if(e)for(var n=a.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags&1206910976,l|=n.flags&1206910976,n.return=a,n=n.sibling;else for(n=a.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=a,n=n.sibling;return a.subtreeFlags|=l,a.childLanes=t,e}function Q1(a,e,t){var l=e.pendingProps;switch(Co(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return va(e),null;case 1:return va(e),null;case 3:return t=e.stateNode,l=null,a!==null&&(l=a.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),xt(Aa),Tl(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(a===null||a.child===null)&&(ql(e)?ht(e):a===null||a.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Oo())),va(e),null;case 26:var n=e.type,i=e.memoizedState;return a===null?(ht(e),i!==null?(va(e),dp(e,i)):(va(e),vc(e,n,null,l,t))):i?i!==a.memoizedState?(ht(e),va(e),dp(e,i)):(va(e),e.flags&=-16777217):(a=a.memoizedProps,a!==l&&ht(e),va(e),vc(e,n,a,l,t)),null;case 27:if(bi(e),t=St.current,n=e.type,a!==null&&e.stateNode!=null)a.memoizedProps!==l&&ht(e);else{if(!l){if(e.stateNode===null)throw Error(b(166));return va(e),e.subtreeFlags&=-33554433,null}a=Qe.current,ql(e)?Xf(e):(a=Mu(n,l,t),e.stateNode=a,ht(e))}return va(e),e.subtreeFlags&=-33554433,null;case 5:if(bi(e),n=e.type,a!==null&&e.stateNode!=null)a.memoizedProps!==l&&ht(e);else{if(!l){if(e.stateNode===null)throw Error(b(166));return va(e),e.subtreeFlags&=-33554433,null}if(i=Qe.current,ql(e))Xf(e);else{var s=li(St.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?s.createElement(n,{is:l.is}):s.createElement(n)}}i[Va]=e,i[re]=l;a:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break a;for(;s.sibling===null;){if(s.return===null||s.return===e)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=i;a:switch($a(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break a;case"img":l=!0;break a;default:l=!1}l&&ht(e)}}return va(e),e.subtreeFlags&=-33554433,vc(e,e.type,a===null?null:a.memoizedProps,e.pendingProps,t),null;case 6:if(a&&e.stateNode!=null)a.memoizedProps!==l&&ht(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(b(166));if(a=St.current,ql(e)){if(a=e.stateNode,t=e.memoizedProps,l=null,n=Ya,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}a[Va]=e,a=!!(a.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||fu(a.nodeValue,t)),a||At(e,!0)}else a=li(a).createTextNode(l),a[Va]=e,e.stateNode=a}return va(e),null;case 31:if(t=e.memoizedState,a===null||a.memoizedState!==null){if(l=ql(e),t!==null){if(a===null){if(!l)throw Error(b(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(557));a[Va]=e}else ol(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;va(e),a=!1}else t=Oo(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=t),a=!0;if(!a)return e.flags&256?(Se(e),e):(Se(e),null);if((e.flags&128)!==0)throw Error(b(558))}return va(e),null;case 13:if(l=e.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(n=ql(e),l!==null&&l.dehydrated!==null){if(a===null){if(!n)throw Error(b(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(317));n[Va]=e}else ol(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;va(e),n=!1}else n=Oo(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Se(e),e):(Se(e),null)}return Se(e),(e.flags&128)!==0?(e.lanes=t,e):(t=l!==null,a=a!==null&&a.memoizedState!==null,t&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),t!==a&&t&&(e.child.flags|=8192),fs(e,e.updateQueue),va(e),null);case 4:return Tl(),a===null&&ar(e.stateNode.containerInfo),e.flags|=67108864,va(e),null;case 10:return xt(e.type),va(e),null;case 19:if(Vo(e),l=e.memoizedState,l===null)return va(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)Zn(l,!1);else{if(ka!==0||a!==null&&(a.flags&128)!==0)for(a=e.child;a!==null;){if(i=$i(a),i!==null){for(e.flags|=128,Zn(l,!1),a=i.updateQueue,e.updateQueue=a,fs(e,a),e.subtreeFlags=0,a=t,t=e.child;t!==null;)Bf(t,a),t=t.sibling;return qn(e,Ka.current&1|2),K&&pt(e,l.treeForkCount),e.child}a=a.sibling}l.tail!==null&&me()>Ss&&(e.flags|=128,n=!0,Zn(l,!1),e.lanes=4194304)}else{if(!n)if(a=$i(i),a!==null){if(e.flags|=128,n=!0,a=a.updateQueue,e.updateQueue=a,fs(e,a),Zn(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!i.alternate&&!K)return va(e),null}else 2*me()-l.renderingStartTime>Ss&&t!==536870912&&(e.flags|=128,n=!0,Zn(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(a=l.last,a!==null?a.sibling=i:e.child=i,l.last=i)}if(l.tail!==null){a=l.tail;a:{for(t=a;t!==null;){if(t.alternate!==null){t=!1;break a}t=t.sibling}t=!0}return l.rendering=a,l.tail=a.sibling,l.renderingStartTime=me(),a.sibling=null,i=Ka.current,i=n?i&1|2:i&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!t||K?qn(e,i):(t=i,ma(Za,e),ma(Ka,t),ae===null&&(ae=e)),K&&pt(e,l.treeForkCount),a}return va(e),null;case 22:case 23:return Se(e),Lo(),l=e.memoizedState!==null,a!==null?a.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(t&536870912)!==0&&(e.flags&128)===0&&(va(e),e.subtreeFlags&6&&(e.flags|=8192)):va(e),t=e.updateQueue,t!==null&&fs(e,t.retryQueue),t=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==t&&(e.flags|=2048),a!==null&&Xa(pl),null;case 24:return t=null,a!==null&&(t=a.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),xt(Aa),va(e),null;case 25:return null;case 30:return e.flags|=33554432,va(e),null}throw Error(b(156,e.tag))}function Z1(a,e){switch(Co(e),e.tag){case 1:return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 3:return xt(Aa),Tl(),a=e.flags,(a&65536)!==0&&(a&128)===0?(e.flags=a&-65537|128,e):null;case 26:case 27:case 5:return bi(e),null;case 31:if(e.memoizedState!==null){if(Se(e),e.alternate===null)throw Error(b(340));ol()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 13:if(Se(e),a=e.memoizedState,a!==null&&a.dehydrated!==null){if(e.alternate===null)throw Error(b(340));ol()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 19:return Vo(e),a=e.flags,a&65536?(e.flags=a&-65537|128,a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null),e.flags|=4,e):null;case 4:return Tl(),null;case 10:return xt(e.type),null;case 22:case 23:return Se(e),Lo(),a!==null&&Xa(pl),a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 24:return xt(Aa),null;case 25:return null;default:return null}}function pp(a,e){switch(Co(e),e.tag){case 3:xt(Aa),Tl();break;case 26:case 27:case 5:bi(e);break;case 4:Tl();break;case 31:e.memoizedState!==null&&Se(e);break;case 13:Se(e);break;case 19:Vo(e);break;case 10:xt(e.type);break;case 22:case 23:Se(e),Lo(),a!==null&&Xa(pl);break;case 24:xt(Aa)}}function Kn(a,e){try{var t=e.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var n=l.next;t=n;do{if((t.tag&a)===a){l=void 0;var i=t.create,s=t.inst;l=i(),s.destroy=l}t=t.next}while(t!==n)}}catch(o){ca(e,e.return,o)}}function Bt(a,e,t){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&a)===a){var s=l.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,n=e;var c=t,x=o;try{x()}catch(h){ca(n,c,h)}}}l=l.next}while(l!==i)}}catch(h){ca(e,e.return,h)}}function up(a){var e=a.updateQueue;if(e!==null){var t=a.stateNode;try{td(e,t)}catch(l){ca(a,a.return,l)}}}function xp(a,e,t){t.props=ml(a.type,a.memoizedProps),t.state=a.memoizedState;try{t.componentWillUnmount()}catch(l){ca(a,e,l)}}function $e(a,e){try{var t=a.ref;if(t!==null){switch(a.tag){case 26:case 27:case 5:var l=a.stateNode;break;case 30:var n=a.stateNode,i=rt(a.memoizedProps,n);(n.ref===null||n.ref.name!==i)&&(n.ref=wu(i)),l=n.ref;break;case 7:if(a.stateNode===null){var s=new Ne(a);v(a.child,!1,Hx,s,void 0,void 0),a.stateNode=s}l=a.stateNode;break;default:l=a.stateNode}typeof t=="function"?a.refCleanup=t(l):t.current=l}}catch(o){ca(a,e,o)}}function Ja(a,e){var t=a.ref,l=a.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(n){ca(a,e,n)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){ca(a,e,n)}else t.current=null}function ds(a,e){if((a.tag===5||a.tag===27||a.tag===6)&&a.alternate===null&&e!==null)for(var t=0;t<e.length;t++)Nu(a.stateNode,e[t])}function bp(a){for(var e=a.return;e!==null&&(wc(e)&&Nu(a.stateNode,e.stateNode),!yc(e));)e=e.return}function Jn(a){for(var e=a.return;e!==null&&(wc(e)&&Rx(a.stateNode,e.stateNode),!yc(e));)e=e.return}function yc(a){return a.tag===5||a.tag===3||a.tag===27}function wc(a){return a&&a.tag===7&&a.stateNode!==null}function Sc(a){var e=a.type,t=a.memoizedProps,l=a.stateNode;try{a:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break a;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(n){ca(a,a.return,n)}}function zc(a,e,t){try{var l=a.stateNode;hx(l,a.type,t,e),l[re]=e}catch(n){ca(a,a.return,n)}}function gp(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&Qt(a.type)||a.tag===4}function Ec(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||gp(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&Qt(a.type)||a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Tc(a,e,t,l){var n=a.tag;if(n===5||n===6)n=a.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ze)),ds(a,l),ta=!0;else if(n!==4&&(n===27&&(ds(a,l),l=null,Qt(a.type)&&(t=a.stateNode,e=null)),a=a.child,a!==null))for(Tc(a,e,t,l),a=a.sibling;a!==null;)Tc(a,e,t,l),a=a.sibling}function ps(a,e,t,l){var n=a.tag;if(n===5||n===6)n=a.stateNode,e?t.insertBefore(n,e):t.appendChild(n),ds(a,l),ta=!0;else if(n!==4&&(n===27&&(ds(a,l),l=null,Qt(a.type)&&(t=a.stateNode)),a=a.child,a!==null))for(ps(a,e,t,l),a=a.sibling;a!==null;)ps(a,e,t,l),a=a.sibling}function mp(a){var e=a.stateNode,t=a.memoizedProps;try{for(var l=a.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);$a(e,l,t),e[Va]=a,e[re]=t}catch(i){ca(a,a.return,i)}}var us=!1,ze=null;function hp(a){(a.tag===30||(a.subtreeFlags&33554432)!==0)&&(us=!0)}var Fe=null;function vp(){var a=Fe;return Fe=null,a}var de=0;function $l(a,e,t,l,n){return de=0,yp(a.child,e,t,l,n)}function yp(a,e,t,l,n){for(var i=!1;a!==null;){if(a.tag===5){var s=a.stateNode;if(l!==null){var o=cr(s);l.push(o),o.view&&(i=!0)}else i||cr(s).view&&(i=!0);us=!0,vu(s,de===0?e:e+"_"+de,t),de++}else(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&n||yp(a.child,e,t,l,n)&&(i=!0));a=a.sibling}return i}function Ie(a,e){for(;a!==null;)a.tag===5?yu(a.stateNode,a.memoizedProps):(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&e||Ie(a.child,e)),a=a.sibling}function xs(a){if((a.subtreeFlags&18874368)!==0)for(a=a.child;a!==null;){if((a.tag!==22||a.memoizedState===null)&&(xs(a),a.tag===30&&(a.flags&18874368)!==0&&a.stateNode.paired)){var e=a.memoizedProps;if(e.name==null||e.name==="auto")throw Error(b(544));var t=e.name;e=ft(e.default,e.share),e!=="none"&&($l(a,t,e,null,!1)||Ie(a.child,!1))}a=a.sibling}}function kc(a,e){if(a.tag===30){var t=a.stateNode,l=a.memoizedProps,n=rt(l,t),i=ft(l.default,t.paired?l.share:l.enter);i!=="none"?$l(a,n,i,null,!1)?(xs(a),t.paired||e||ln(a,l.onEnter)):Ie(a.child,!1):xs(a)}else if((a.subtreeFlags&33554432)!==0)for(a=a.child;a!==null;)kc(a,e),a=a.sibling;else xs(a)}function Nc(a){if(ze!==null&&ze.size!==0){var e=ze;if((a.subtreeFlags&18874368)!==0)for(a=a.child;a!==null;){if(a.tag!==22||a.memoizedState===null){if(a.tag===30&&(a.flags&18874368)!==0){var t=a.memoizedProps,l=t.name;if(l!=null&&l!=="auto"){var n=e.get(l);if(n!==void 0){var i=ft(t.default,t.share);if(i!=="none"&&($l(a,l,i,null,!1)?(i=a.stateNode,n.paired=i,i.paired=n,ln(a,t.onShare)):Ie(a.child,!1)),e.delete(l),e.size===0)break}}}Nc(a)}a=a.sibling}}}function Cc(a){if(a.tag===30){var e=a.memoizedProps,t=rt(e,a.stateNode),l=ze!==null?ze.get(t):void 0,n=ft(e.default,l!==void 0?e.share:e.exit);n!=="none"&&($l(a,t,n,null,!1)?l!==void 0?(n=a.stateNode,l.paired=n,n.paired=l,ze.delete(t),ln(a,e.onShare)):ln(a,e.onExit):Ie(a.child,!1)),ze!==null&&Nc(a)}else if((a.subtreeFlags&33554432)!==0)for(a=a.child;a!==null;)Cc(a),a=a.sibling;else ze!==null&&Nc(a)}function wp(a){for(a=a.child;a!==null;){if(a.tag===30){var e=a.memoizedProps,t=rt(e,a.stateNode);e=ft(e.default,e.update),a.flags&=-5,e!=="none"&&$l(a,t,e,a.memoizedState=[],!1)}else(a.subtreeFlags&33554432)!==0&&wp(a);a=a.sibling}}function Ac(a){if((a.subtreeFlags&18874368)!==0)for(a=a.child;a!==null;){if(a.tag!==22||a.memoizedState===null){if(a.tag===30&&(a.flags&18874368)!==0){var e=a.stateNode;e.paired!==null&&(e.paired=null,Ie(a.child,!1))}Ac(a)}a=a.sibling}}function bs(a){if(a.tag===30)a.stateNode.paired=null,Ie(a.child,!1),Ac(a);else if((a.subtreeFlags&33554432)!==0)for(a=a.child;a!==null;)bs(a),a=a.sibling;else Ac(a)}function Sp(a){for(a=a.child;a!==null;)a.tag===30?Ie(a.child,!1):(a.subtreeFlags&33554432)!==0&&Sp(a),a=a.sibling}function Oc(a,e,t,l,n,i,s){for(var o=!1;e!==null;){if(e.tag===5){var c=e.stateNode;if(i!==null&&de<i.length){var x=i[de],h=cr(c);(x.view||h.view)&&(o=!0);var S;if(S=(a.flags&4)===0)if(h.clip)S=!0;else{S=x.rect;var p=h.rect;S=S.y!==p.y||S.x!==p.x||S.height!==p.height||S.width!==p.width}S&&(a.flags|=4),h.abs?h=!x.abs:(x=x.rect,h=h.rect,h=x.height!==h.height||x.width!==h.width),h&&(a.flags|=32)}else a.flags|=32;(a.flags&4)!==0&&vu(c,de===0?t:t+"_"+de,n),o&&(a.flags&4)!==0||(Fe===null&&(Fe=[]),Fe.push(c,de===0?l:l+"_"+de,e.memoizedProps)),de++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?a.flags|=e.flags&32:Oc(a,e.child,t,l,n,i,s)&&(o=!0));e=e.sibling}return o}function zp(a,e){for(a=a.child;a!==null;){if(a.tag===30){var t=a.memoizedProps,l=a.stateNode,n=rt(t,l),i=ft(t.default,t.update),s;s=a.memoizedState,a.memoizedState=null,l=a;var o=a.child;de=0,n=Oc(l,o,n,n,i,s,!1),(a.flags&4)!==0&&n&&ln(a,t.onUpdate)}else(a.subtreeFlags&33554432)!==0&&zp(a);a=a.sibling}}var Ga=!1,sa=!1,We=!1,Mc=!1,Ep=typeof WeakSet=="function"?WeakSet:Set,qa=null,Pe=!1,$n=!1,gs=!1,_c=!1;function K1(a,e,t){if(a=a.containerInfo,lr=xn,a=Cf(a),ho(a)){if("selectionStart"in a)var l={start:a.selectionStart,end:a.selectionEnd};else a:{l=(l=a.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{l.nodeType,s.nodeType}catch{l=null;break a}var o=0,c=-1,x=-1,h=0,S=0,p=a,m=null;e:for(;;){for(var k;p!==l||i!==0&&p.nodeType!==3||(c=o+i),p!==s||n!==0&&p.nodeType!==3||(x=o+n),p.nodeType===3&&(o+=p.nodeValue.length),(k=p.firstChild)!==null;)m=p,p=k;for(;;){if(p===a)break e;if(m===l&&++h===i&&(c=o),m===s&&++S===n&&(x=o),(k=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=k}l=c===-1||x===-1?null:{start:c,end:x}}else l=null}l=l||{start:0,end:0}}else l=null;for(nr={focusedElem:a,selectionRange:l},xn=!1,t=(t&335544064)===t,qa=e,e=t?9270:1024;qa!==null;){if(a=qa,t&&(l=a.deletions,l!==null))for(i=0;i<l.length;i++)t&&Cc(l[i]);if(a.alternate===null&&(a.flags&2)!==0)t&&hp(a),ms(t);else{if(a.tag===22){if(l=a.alternate,a.memoizedState!==null){l!==null&&l.memoizedState===null&&t&&Cc(l),ms(t);continue}else if(l!==null&&l.memoizedState!==null){t&&hp(a),ms(t);continue}}l=a.child,(a.subtreeFlags&e)!==0&&l!==null?(l.return=a,qa=l):(t&&wp(a),ms(t))}}ze=null}function ms(a){for(;qa!==null;){var e=qa,t=a,l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){t=void 0,n=l.memoizedProps,l=l.memoizedState;var i=e.stateNode;try{var s=ml(e.type,n);t=i.getSnapshotBeforeUpdate(s,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(o){ca(e,e.return,o)}}break;case 3:if((n&1024)!==0){if(l=e.stateNode.containerInfo,t=l.nodeType,t===9)dr(l);else if(t===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":dr(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&l!==null&&(t=rt(l.memoizedProps,l.stateNode),n=e.memoizedProps,n=ft(n.default,n.update),n!=="none"&&$l(l,t,n,l.memoizedState=[],!0));break;default:if((n&1024)!==0)throw Error(b(163))}if(l=e.sibling,l!==null){l.return=e.return,qa=l;break}qa=e.return}}function Tp(a,e,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:at(a,t),l&4&&Kn(5,t);break;case 1:if(at(a,t),l&4)if(a=t.stateNode,e===null)try{a.componentDidMount()}catch(s){ca(t,t.return,s)}else{var n=ml(t.type,e.memoizedProps);e=e.memoizedState;try{a.componentDidUpdate(n,e,a.__reactInternalSnapshotBeforeUpdate)}catch(s){ca(t,t.return,s)}}l&64&&up(t),l&512&&$e(t,t.return);break;case 3:if(at(a,t),l&64&&(a=t.updateQueue,a!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{td(a,e)}catch(s){ca(t,t.return,s)}}break;case 27:e===null&&l&4&&mp(t);case 26:case 5:at(a,t),e===null&&l&4&&Sc(t),l&512&&$e(t,t.return);break;case 12:at(a,t);break;case 31:at(a,t),l&4&&Ap(a,t);break;case 13:at(a,t),l&4&&Op(a,t),l&64&&(a=t.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(t=ix.bind(null,t),Gx(a,t))));break;case 22:if(l=t.memoizedState!==null||Ga,!l){var i=e!==null&&e.memoizedState!==null||sa;e=Ga,n=sa,Ga=l,(sa=i)&&!n?(l=2,(t.subtreeFlags&8772)!==0&&(l|=1),qe(a,t,l)):at(a,t),Ga=e,sa=n}break;case 30:at(a,t),l&512&&$e(t,t.return);break;case 7:l&512&&$e(t,t.return);default:at(a,t)}}function jc(a,e){for(a=a.child;a!==null;)kp(a,e),a=a.sibling}function kp(a,e){switch(a.tag){case 5:case 26:try{var t=a.stateNode;if(e){var l=t.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var n=a.stateNode,i=a.memoizedProps.style,s=i!=null&&i.hasOwnProperty("display")?i.display:null;n.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(c){ca(a,a.return,c)}Dc(a,e);break;case 6:try{a.stateNode.nodeValue=e?"":a.memoizedProps,ta=!0}catch(c){ca(a,a.return,c)}break;case 18:try{var o=a.stateNode;e?hu(o,!0):hu(a.stateNode,!1)}catch(c){ca(a,a.return,c)}break;case 22:case 23:a.memoizedState===null&&jc(a,e);break;default:jc(a,e)}}function Dc(a,e){if(a.subtreeFlags&67108864)for(a=a.child;a!==null;){a:{var t=a,l=e;switch(t.tag){case 4:kp(t,l);break a;case 22:t.memoizedState===null&&Dc(t,l);break a;default:Dc(t,l)}}a=a.sibling}}function Np(a){var e=a.alternate;e!==null&&(a.alternate=null,Np(e)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(e=a.stateNode,e!==null&&Si(e)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var za=null,pe=!1;function Ye(a,e,t){for(t=t.child;t!==null;)Cp(a,e,t),t=t.sibling}function Cp(a,e,t){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(hn,t)}catch{}switch(t.tag){case 26:sa||Ja(t,e),Ye(a,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!sa&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:sa||Ja(t,e),Jn(t);var l=za,n=pe;Qt(t.type)&&(za=t.stateNode,pe=!1),Ye(a,e,t),_u(t.stateNode,t.type,t.memoizedProps),za=l,pe=n;break;case 5:sa||Ja(t,e),Jn(t);case 6:if(t.tag===6&&Jn(t),l=za,n=pe,za=null,Ye(a,e,t),za=l,pe=n,za!==null)if(pe)try{(za.nodeType===9?za.body:za.nodeName==="HTML"?za.ownerDocument.body:za).removeChild(t.stateNode),ta=!0}catch(i){ca(t,e,i)}else try{za.removeChild(t.stateNode),ta=!0}catch(i){ca(t,e,i)}break;case 18:za!==null&&(pe?(a=za,mu(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.stateNode),bn(a)):mu(za,t.stateNode));break;case 4:l=za,n=pe,za=t.stateNode.containerInfo,pe=!0,Ye(a,e,t),za=l,pe=n;break;case 0:case 11:case 14:case 15:Bt(2,t,e),sa||Bt(4,t,e),Ye(a,e,t);break;case 1:sa||(Ja(t,e),l=t.stateNode,typeof l.componentWillUnmount=="function"&&xp(t,e,l)),Ye(a,e,t);break;case 21:Ye(a,e,t);break;case 22:sa=(l=sa)||t.memoizedState!==null,Ye(a,e,t),sa=l;break;case 30:Ja(t,e),Ye(a,e,t);break;case 7:sa||Ja(t,e),Ye(a,e,t);break;default:Ye(a,e,t)}}function Ap(a,e){if(e.memoizedState===null&&(a=e.alternate,a!==null&&(a=a.memoizedState,a!==null))){a=a.dehydrated;try{bn(a)}catch(t){ca(e,e.return,t)}}}function Op(a,e){if(e.memoizedState===null&&(a=e.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{bn(a)}catch(t){ca(e,e.return,t)}}function J1(a){switch(a.tag){case 31:case 13:case 19:var e=a.stateNode;return e===null&&(e=a.stateNode=new Ep),e;case 22:return a=a.stateNode,e=a._retryCache,e===null&&(e=a._retryCache=new Ep),e;default:throw Error(b(435,a.tag))}}function hs(a,e){var t=J1(a);e.forEach(function(l){if(!t.has(l)){t.add(l);var n=sx.bind(null,a,l);l.then(n,n)}})}function se(a,e,t){var l=e.deletions;if(l!==null)for(var n=0;n<l.length;n++){var i=l[n],s=a,o=e,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Qt(c.type)){za=c.stateNode,pe=!1;break a}break;case 5:za=c.stateNode,pe=!1;break a;case 3:case 4:za=c.stateNode.containerInfo,pe=!0;break a}c=c.return}if(za===null)throw Error(b(160));Cp(s,o,i),za=null,pe=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Mp(e,a,t),e=e.sibling}var Ge=null;function Mp(a,e,t){var l=a.alternate,n=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(n&4&&(l=a.updateQueue,l=l!==null?l.events:null,l!==null))for(var i=0;i<l.length;i++){var s=l[i];s.ref.impl=s.nextImpl}se(e,a,t),oe(a),n&4&&(Bt(3,a,a.return),Kn(3,a),Bt(5,a,a.return));break;case 1:se(e,a,t),oe(a),n&512&&(sa||l===null||Ja(l,l.return)),n&64&&Ga&&(a=a.updateQueue,a!==null&&(e=a.callbacks,e!==null&&(t=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=t===null?e:t.concat(e))));break;case 26:if(i=Ge,se(e,a,t),oe(a),n&512&&(sa||l===null||Ja(l,l.return)),n&4)if(n=l!==null?l.memoizedState:null,t=a.memoizedState,l===null)if(t===null)if(a.stateNode===null)if(Ga)a.stateNode=xu(a.type,a.memoizedProps,e.containerInfo,a);else{a:{e=a.type,t=a.memoizedProps,n=i.ownerDocument||i;e:switch(e){case"title":l=n.getElementsByTagName("title")[0],(!l||l[wn]||l[Va]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(e),n.head.insertBefore(l,n.querySelector("head > title"))),$a(l,e,t),l[Va]=a,Ba(l),e=l;break a;case"link":if(i=Bu("link","href",n).get(e+(t.href||""))){for(s=0;s<i.length;s++)if(l=i[s],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(s,1);break e}}l=n.createElement(e),$a(l,e,t),n.head.appendChild(l);break;case"meta":if(i=Bu("meta","content",n).get(e+(t.content||""))){for(s=0;s<i.length;s++)if(l=i[s],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(s,1);break e}}l=n.createElement(e),$a(l,e,t),n.head.appendChild(l);break;default:throw Error(b(468,e))}l[Va]=a,Ba(l),e=l}a.stateNode=e}else Ga||hr(i,a.type,a.stateNode);else a.stateNode=Ru(i,t,a.memoizedProps);else n!==t?(n===null?(e=l.stateNode,e===null||sa||e.parentNode.removeChild(e)):n.count--,t===null?Ga||hr(i,a.type,a.stateNode):Ru(i,t,a.memoizedProps)):t===null&&a.stateNode!==null&&zc(a,a.memoizedProps,l.memoizedProps);break;case 27:se(e,a,t),oe(a),n&512&&(sa||l===null||Ja(l,l.return)),l!==null&&n&4&&zc(a,a.memoizedProps,l.memoizedProps);break;case 5:if(i=We,We=!1,se(e,a,t),We=i,oe(a),n&512&&(sa||l===null||Ja(l,l.return)),a.flags&32){e=a.stateNode;try{Ml(e,""),ta=!0}catch(h){ca(a,a.return,h)}}n&4&&a.stateNode!=null&&(e=a.memoizedProps,zc(a,e,l!==null?l.memoizedProps:e)),n&1024&&(Mc=!0);break;case 6:if(se(e,a,t),oe(a),n&4){if(a.stateNode===null)throw Error(b(162));e=a.memoizedProps,t=a.stateNode;try{t.nodeValue=e,ta=!0}catch(h){ca(a,a.return,h)}}break;case 3:if(ta=!1,js=null,i=Ge,Ge=ni(e.containerInfo),se(e,a,t),Ge=i,oe(a),n&4&&l!==null&&l.memoizedState.isDehydrated)try{bn(e.containerInfo)}catch(h){ca(a,a.return,h)}Mc&&(Mc=!1,_p(a)),ta=!1;break;case 4:n=We,We=Ga,l=Ir(),i=Ge,Ge=ni(a.stateNode.containerInfo),se(e,a,t),oe(a),Ge=i,ta&&$n&&(gs=!0),ta=l,We=n;break;case 12:se(e,a,t),oe(a);break;case 31:se(e,a,t),oe(a),n&4&&(e=a.updateQueue,e!==null&&(a.updateQueue=null,hs(a,e)));break;case 13:se(e,a,t),oe(a),a.child.flags&8192&&a.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ws=me()),n&4&&(e=a.updateQueue,e!==null&&(a.updateQueue=null,hs(a,e)));break;case 22:i=a.memoizedState!==null,s=l!==null&&l.memoizedState!==null;var o=Ga,c=sa,x=We;Ga=o||i,We=x||i,sa=c||s,se(e,a,t),sa=c,We=x,Ga=o,oe(a),n&8192&&(e=a.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,!i||l===null||s||Ga||sa||(e=s||sa,t=Ga,l=sa,Ga=i||Ga,sa=e,Yt(a,2),Ga=t,sa=l),!i&&We||jc(a,i)),n&4&&(e=a.updateQueue,e!==null&&(t=e.retryQueue,t!==null&&(e.retryQueue=null,hs(a,t))));break;case 19:se(e,a,t),oe(a),n&4&&(e=a.updateQueue,e!==null&&(a.updateQueue=null,hs(a,e)));break;case 30:n&512&&(sa||l===null||Ja(l,l.return)),n=Ir(),i=$n,s=(t&335544064)===t,o=a.memoizedProps,$n=s&&ft(o.default,o.update)!=="none",se(e,a,t),oe(a),s&&l!==null&&ta&&(a.flags|=4),$n=i,ta=n;break;case 21:break;case 7:n&512&&(sa||l===null||Ja(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=a);default:se(e,a,t),oe(a)}}function oe(a){var e=a.flags;if(e&2){try{for(var t,l=a.return;l!==null;){if(gp(l)){t=l;break}l=l.return}l=null;for(var n=a.return;n!==null;){if(wc(n)){var i=n.stateNode;l===null?l=[i]:l.push(i)}if(yc(n))break;n=n.return}var s=l;if(t==null)throw Error(b(160));switch(t.tag){case 27:var o=t.stateNode,c=Ec(a);ps(a,c,o,s);break;case 5:var x=t.stateNode;t.flags&32&&(Ml(x,""),t.flags&=-33);var h=Ec(a);ps(a,h,x,s);break;case 3:case 4:var S=t.stateNode.containerInfo,p=Ec(a);Tc(a,p,S,s);break;default:throw Error(b(161))}}catch(m){ca(a,a.return,m)}a.flags&=-3}e&4096&&(a.flags&=-4097)}function _p(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var e=a;_p(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,xn=!0,e.reset(),xn=!1),a=a.sibling}}function Fl(a,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)jp(e,a),e=e.sibling;else zp(e)}function jp(a,e){var t=a.alternate;if(t===null)kc(a,!1);else switch(a.tag){case 3:if(_c=Pe=!1,vp(),Fl(e,a),!Pe&&!gs){if(a=Fe,a!==null)for(var l=0;l<a.length;l+=3){t=a[l];var n=a[l+1];yu(t,a[l+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}a=e.containerInfo,a=a.nodeType===9?a.documentElement:a.ownerDocument.documentElement,a!==null&&a.style.viewTransitionName===""&&(a.style.viewTransitionName="none",a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),a.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),_c=!0}Fe=null;break;case 5:Fl(e,a);break;case 4:l=Pe,Pe=!1,Fl(e,a),Pe&&(gs=!0),Pe=l;break;case 22:a.memoizedState===null&&(t.memoizedState!==null?kc(a,!1):Fl(e,a));break;case 30:l=Pe,n=vp(),Pe=!1,Fl(e,a),Pe&&(a.flags|=4);var i=a.memoizedProps,s=a.stateNode;e=rt(i,s),s=rt(t.memoizedProps,s);var o=ft(i.default,i.update);o==="none"?e=!1:(i=t.memoizedState,t.memoizedState=null,t=a.child,de=0,e=Oc(a,t,e,s,o,i,!0),de!==(i===null?0:i.length)&&(a.flags|=32)),(a.flags&4)!==0&&e?(ln(a,a.memoizedProps.onUpdate),Fe=n):n!==null&&(n.push.apply(n,Fe),Fe=n),Pe=(a.flags&32)!==0?!0:l;break;default:Fl(e,a)}}function at(a,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Tp(a,e.alternate,e),e=e.sibling}function Yt(a,e){for(a=a.child;a!==null;){var t=a,l=e;switch(t.tag){case 0:case 11:case 14:case 15:Bt(4,t,t.return),Yt(t,l);break;case 1:Ja(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&xp(t,t.return,n),Yt(t,l);break;case 27:(l&2)!==0&&_u(t.stateNode,t.type,t.memoizedProps);case 5:Ja(t,t.return),t.tag!==5&&t.tag!==27||Jn(t),Yt(t,l);break;case 6:Jn(t);break;case 26:Ja(t,t.return),n=t.stateNode,t.memoizedState!==null||n===null||sa||n.parentNode.removeChild(n),Yt(t,l);break;case 22:t.memoizedState===null&&Yt(t,l);break;case 30:Ja(t,t.return),Yt(t,l);break;case 7:Ja(t,t.return);default:Yt(t,l)}a=a.sibling}}function qe(a,e,t){for(t=(e.subtreeFlags&8772)!==0?t:t&-2,e=e.child;e!==null;){var l=e.alternate,n=a,i=e,s=i.flags,o=(t&1)!==0;switch(i.tag){case 0:case 11:case 15:qe(n,i,t),Kn(4,i);break;case 1:if(qe(n,i,t),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){ca(l,l.return,h)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var x=n.shared.hiddenCallbacks;if(x!==null)for(n.shared.hiddenCallbacks=null,n=0;n<x.length;n++)ed(x[n],c)}catch(h){ca(l,l.return,h)}}o&&s&64&&up(i),$e(i,i.return);break;case 27:(t&2)!==0&&mp(i);case 5:i.tag!==5&&i.tag!==27||bp(i),qe(n,i,t),o&&l===null&&s&4&&Sc(i),$e(i,i.return);break;case 6:bp(i);break;case 26:c=i.stateNode,i.memoizedState!==null||c===null||Ga||hr(ni(c.ownerDocument),i.type,c),qe(n,i,t),o&&l===null&&s&4&&Sc(i),$e(i,i.return);break;case 12:qe(n,i,t);break;case 31:qe(n,i,t),o&&s&4&&Ap(n,i);break;case 13:qe(n,i,t),o&&s&4&&Op(n,i);break;case 22:i.memoizedState===null&&qe(n,i,t),$e(i,i.return);break;case 30:qe(n,i,t),$e(i,i.return);break;case 7:$e(i,i.return);default:qe(n,i,t)}e=e.sibling}}function Uc(a,e){var t=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(a!=null&&a.refCount++,t!=null&&Dn(t))}function Hc(a,e){a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&Dn(a))}function De(a,e,t,l){var n=(t&335544064)===t;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)Dp(a,e,t,l),e=e.sibling;else n&&Sp(e)}function Dp(a,e,t,l){var n=(t&335544064)===t;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&bs(e);var i=e.flags;switch(e.tag){case 0:case 11:case 15:De(a,e,t,l),i&2048&&Kn(9,e);break;case 1:De(a,e,t,l);break;case 3:De(a,e,t,l),n&&_c&&(a=a.containerInfo,a=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,a.style.viewTransitionName==="root"&&(a.style.viewTransitionName=""),a=a.ownerDocument.documentElement,a!==null&&a.style.viewTransitionName==="none"&&(a.style.viewTransitionName="")),i&2048&&(i=null,e.alternate!==null&&(i=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==i&&(e.refCount++,i!=null&&Dn(i)));break;case 12:if(i&2048){De(a,e,t,l),i=e.stateNode;try{var s=e.memoizedProps,o=s.id,c=s.onPostCommit;typeof c=="function"&&c(o,e.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(x){ca(e,e.return,x)}}else De(a,e,t,l);break;case 31:De(a,e,t,l);break;case 13:De(a,e,t,l);break;case 23:break;case 22:s=e.stateNode,o=e.alternate,e.memoizedState!==null?(n&&o!==null&&o.memoizedState===null&&bs(o),s._visibility&2?De(a,e,t,l):Fn(a,e)):(n&&o!==null&&o.memoizedState!==null&&bs(e),s._visibility&2?De(a,e,t,l):(s._visibility|=2,Il(a,e,t,l,(e.subtreeFlags&10256)!==0||!1))),i&2048&&Uc(o,e);break;case 24:De(a,e,t,l),i&2048&&Hc(e.alternate,e);break;case 30:n&&(i=e.alternate,i!==null&&(Ie(i.child,!0),Ie(e.child,!0))),De(a,e,t,l);break;default:De(a,e,t,l)}}function Il(a,e,t,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=a,s=e,o=t,c=l,x=s.flags;switch(s.tag){case 0:case 11:case 15:Il(i,s,o,c,n),Kn(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?Il(i,s,o,c,n):Fn(i,s):(h._visibility|=2,Il(i,s,o,c,n)),n&&x&2048&&Uc(s.alternate,s);break;case 24:Il(i,s,o,c,n),n&&x&2048&&Hc(s.alternate,s);break;default:Il(i,s,o,c,n)}e=e.sibling}}function Fn(a,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=a,l=e,n=l.flags;switch(l.tag){case 22:Fn(t,l),n&2048&&Uc(l.alternate,l);break;case 24:Fn(t,l),n&2048&&Hc(l.alternate,l);break;default:Fn(t,l)}e=e.sibling}}var hl=8192;function vl(a,e,t){if(a.subtreeFlags&hl)for(a=a.child;a!==null;)Up(a,e,t),a=a.sibling}function Up(a,e,t){switch(a.tag){case 26:vl(a,e,t),a.flags&hl&&(a.memoizedState!==null?ab(t,Ge,a.memoizedState,a.memoizedProps):(a=a.stateNode,(e&335544128)===e&&Lu(t,a)));break;case 5:vl(a,e,t),a.flags&hl&&(a=a.stateNode,(e&335544128)===e&&Lu(t,a));break;case 3:case 4:var l=Ge;Ge=ni(a.stateNode.containerInfo),vl(a,e,t),Ge=l;break;case 22:a.memoizedState===null&&(l=a.alternate,l!==null&&l.memoizedState!==null?(l=hl,hl=16777216,vl(a,e,t),hl=l):vl(a,e,t));break;case 30:if((a.flags&hl)!==0&&(l=a.memoizedProps.name,l!=null&&l!=="auto")){var n=a.stateNode;n.paired=null,ze===null&&(ze=new Map),ze.set(l,n)}vl(a,e,t);break;default:vl(a,e,t)}}function Hp(a){var e=a.alternate;if(e!==null&&(a=e.child,a!==null)){e.child=null;do e=a.sibling,a.sibling=null,a=e;while(a!==null)}}function In(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];qa=l,Bp(l,a)}Hp(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Rp(a),a=a.sibling}function Rp(a){switch(a.tag){case 0:case 11:case 15:In(a),a.flags&2048&&Bt(9,a,a.return);break;case 3:In(a);break;case 12:In(a);break;case 22:var e=a.stateNode;a.memoizedState!==null&&e._visibility&2&&(a.return===null||a.return.tag!==13)?(e._visibility&=-3,vs(a)):In(a);break;default:In(a)}}function vs(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];qa=l,Bp(l,a)}Hp(a)}for(a=a.child;a!==null;){switch(e=a,e.tag){case 0:case 11:case 15:Bt(8,e,e.return),vs(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,vs(e));break;default:vs(e)}a=a.sibling}}function Bp(a,e){for(;qa!==null;){var t=qa;switch(t.tag){case 0:case 11:case 15:Bt(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Dn(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,qa=l;else a:for(t=a;qa!==null;){l=qa;var n=l.sibling,i=l.return;if(Np(l),l===t){qa=null;break a}if(n!==null){n.return=i,qa=n;break a}qa=i}}}var $1={getCacheForType:function(a){var e=Qa(Aa),t=e.data.get(a);return t===void 0&&(t=a(),e.data.set(a,t)),t},cacheSignal:function(){return Qa(Aa).controller.signal}},F1=typeof WeakMap=="function"?WeakMap:Map,na=0,ga=null,J=null,F=0,oa=0,Ee=null,Gt=!1,Wl=!1,Rc=!1,vt=0,ka=0,qt=0,yl=0,ys=0,Te=0,Pl=0,Wn=null,ue=null,Bc=!1,ws=0,Yp=0,Ss=1/0,zs=null,Lt=null,Ea=0,Le=null,wl=null,et=0,Yc=0,Gc=null,Gp=null,an=null,en=null,tn=null,Pn=0,Es=null;function ke(){return(na&2)!==0&&F!==0?F&-F:M.T!==null?Fc():Lr()}function qp(){if(Te===0)if((F&536870912)===0||K){var a=hi;hi<<=1,(hi&3932160)===0&&(hi=262144),Te=a}else Te=536870912;return a=Za.current,a!==null&&(a.flags|=32),Te}function ln(a,e){if(e!=null){var t=a.stateNode,l=t.ref;l===null&&(l=t.ref=wu(rt(a.memoizedProps,t))),en===null&&(en=[]),en.push(e.bind(null,l))}}function xe(a,e,t){(a===ga&&(oa===2||oa===9)||a.cancelPendingCommit!==null)&&(nn(a,0),Xt(a,F,Te,!1)),yn(a,t),((na&2)===0||a!==ga)&&(a===ga&&((na&2)===0&&(yl|=t),ka===4&&Xt(a,F,Te,!1)),tt(a))}function Lp(a,e,t){if((na&6)!==0)throw Error(b(327));var l=!t&&(e&127)===0&&(e&a.expiredLanes)===0||vn(a,e),n=l?P1(a,e):Lc(a,e,!0),i=l;do{if(n===0){Wl&&!l&&Xt(a,e,0,!1);break}else{if(t=a.current.alternate,i&&!I1(t)){n=Lc(a,e,!1),i=!1;continue}if(n===2){if(i=e,a.errorRecoveryDisabledLanes&i)var s=0;else s=a.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;a:{var o=a;n=Wn;var c=o.current.memoizedState.isDehydrated;if(c&&(nn(o,s).flags|=256),s=Lc(o,s,!1),s!==2&&s!==6){if(Rc&&!c){o.errorRecoveryDisabledLanes|=i,yl|=i,n=4;break a}i=ue,ue=n,i!==null&&(ue===null?ue=i:ue.push.apply(ue,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){nn(a,0),Xt(a,e,0,!0);break}a:{switch(l=a,i=n,i){case 0:case 1:throw Error(b(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Xt(l,e,Te,!Gt);break a;case 2:ue=null;break;case 3:case 5:break;default:throw Error(b(329))}if((e&62914560)===e&&(n=ws+300-me(),10<n)){if(Xt(l,e,Te,!Gt),yi(l,0,!0)!==0)break a;et=e,l.timeoutHandle=or(Xp.bind(null,l,t,ue,zs,Bc,e,Te,yl,Pl,Gt,i,"Throttled",-0,0),n);break a}Xp(l,t,ue,zs,Bc,e,Te,yl,Pl,Gt,i,null,-0,0)}}break}while(!0);tt(a)}function Xp(a,e,t,l,n,i,s,o,c,x,h,S,p,m){a.timeoutHandle=-1;var k=e.subtreeFlags,O=(i&335544064)===i;if(S=null,(O||k&8192||(k&16785408)===16785408)&&(S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ze},ze=null,Up(e,i,S),O&&(k=S,O=a.containerInfo,O=(O.nodeType===9?O:O.ownerDocument).__reactViewTransition,O!=null&&(k.count++,k.waitingForViewTransition=!0,k=oi.bind(k),O.finished.then(k,k))),k=(i&62914560)===i?ws-me():(i&4194048)===i?Yp-me():0,k=eb(S,k),k!==null)){et=i,a.cancelPendingCommit=k(Ip.bind(null,a,e,i,t,l,n,s,o,c,x,h,S,null,p,m)),Xt(a,i,s,!x);return}Ip(a,e,i,t,l,n,s,o,c,x,h,S)}function I1(a){for(var e=a;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var n=t[l],i=n.getSnapshot;n=n.value;try{if(!we(i(),n))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xt(a,e,t,l){e=Rr(a,e),e&=~ys,e&=~yl,a.suspendedLanes|=e,a.pingedLanes&=~e,l&&(a.warmLanes|=e),l=a.expirationTimes;for(var n=e;0<n;){var i=31-ve(n),s=1<<i;l[i]=-1,n&=~s}t!==0&&Yr(a,t,e)}function Ts(){return(na&6)===0?(ai(0),!1):!0}function qc(){if(J!==null){if(oa===0)var a=J.return;else a=J,ut=cl=null,$o(a),Vl=null,Rn=0,a=J;for(;a!==null;)pp(a.alternate,a),a=a.return;J=null}}function nn(a,e){var t=a.timeoutHandle;return t!==-1&&(a.timeoutHandle=-1,wx(t)),t=a.cancelPendingCommit,t!==null&&(a.cancelPendingCommit=null,t()),et=0,qc(),ga=a,J=t=dt(a.current,null),F=e,oa=0,Ee=null,Gt=!1,Wl=vn(a,e),Rc=!1,Pl=Te=ys=yl=qt=ka=0,ue=Wn=null,Bc=!1,vt=Rr(a,e),ji(),t}function Vp(a,e){Q=null,M.H=ns,e===Xl||e===Vi?(e=If(),oa=3):e===Ho?(e=If(),oa=4):oa=e===fc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ee=e,J===null&&(ka=1,is(a,Oe(e,a.current)))}function Qp(){var a=Za.current;return a===null?!0:(F&4194048)===F?ae===null:(F&62914560)===F||(F&536870912)!==0?a===ae:!1}function Zp(){var a=M.H;return M.H=ns,a===null?ns:a}function Kp(){var a=M.A;return M.A=$1,a}function ks(){ka=4,Gt||(F&4194048)!==F&&Za.current!==null||(Wl=!0),(qt&134217727)===0&&(yl&134217727)===0||ga===null||Xt(ga,F,Te,!1)}function Lc(a,e,t){var l=na;na|=2;var n=Zp(),i=Kp();(ga!==a||F!==e)&&(zs=null,nn(a,e)),e=!1;var s=ka;a:do try{if(oa!==0&&J!==null){var o=J,c=Ee;switch(oa){case 8:qc(),s=6;break a;case 3:case 2:case 9:case 6:Za.current===null&&(e=!0);var x=oa;if(oa=0,Ee=null,sn(a,o,c,x),t&&Wl){s=0;break a}break;default:x=oa,oa=0,Ee=null,sn(a,o,c,x)}}W1(),s=ka;break}catch(h){Vp(a,h)}while(!0);return e&&a.shellSuspendCounter++,ut=cl=null,na=l,M.H=n,M.A=i,J===null&&(ga=null,F=0,ji()),s}function W1(){for(;J!==null;)Jp(J)}function P1(a,e){var t=na;na|=2;var l=Zp(),n=Kp();ga!==a||F!==e?(zs=null,Ss=me()+500,nn(a,e)):Wl=vn(a,e);a:do try{if(oa!==0&&J!==null){e=J;var i=Ee;e:switch(oa){case 1:oa=0,Ee=null,sn(a,e,i,1);break;case 2:case 9:if($f(i)){oa=0,Ee=null,$p(e);break}e=function(){oa!==2&&oa!==9||ga!==a||(oa=7),tt(a)},i.then(e,e);break a;case 3:oa=7;break a;case 4:oa=5;break a;case 7:$f(i)?(oa=0,Ee=null,$p(e)):(oa=0,Ee=null,sn(a,e,i,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var o=J;if(s?Gu(s):o.stateNode.complete){oa=0,Ee=null;var c=o.sibling;if(c!==null)J=c;else{var x=o.return;x!==null?(J=x,Ns(x)):J=null}break e}}oa=0,Ee=null,sn(a,e,i,5);break;case 6:oa=0,Ee=null,sn(a,e,i,6);break;case 8:qc(),ka=6;break a;default:throw Error(b(462))}}ax();break}catch(h){Vp(a,h)}while(!0);return ut=cl=null,M.H=l,M.A=n,na=t,J!==null?0:(ga=null,F=0,ji(),ka)}function ax(){for(;J!==null&&!m0();)Jp(J)}function Jp(a){var e=fp(a.alternate,a,vt);a.memoizedProps=a.pendingProps,e===null?Ns(a):J=e}function $p(a){var e=a,t=e.alternate;switch(e.tag){case 15:case 0:e=lp(t,e,e.pendingProps,e.type,void 0,F);break;case 11:e=lp(t,e,e.pendingProps,e.type.render,e.ref,F);break;case 5:$o(e);var l=e;l===Ya&&(K?(Yi(l),l.tag===5&&l.stateNode!=null&&(ha=l.stateNode)):(Yi(l),K=!0));default:pp(t,e),e=J=Bf(e,vt),e=fp(t,e,vt)}a.memoizedProps=a.pendingProps,e===null?Ns(a):J=e}function sn(a,e,t,l){ut=cl=null,$o(e),Vl=null,Rn=0;var n=e.return;try{if(q1(a,n,e,t,F)){ka=1,is(a,Oe(t,a.current)),J=null;return}}catch(i){if(n!==null)throw J=n,i;ka=1,is(a,Oe(t,a.current)),J=null;return}e.flags&32768?(K||l===1?a=!0:Wl||(F&536870912)!==0?a=!1:(Gt=a=!0,(l===2||l===9||l===3||l===6)&&(l=Za.current,l!==null&&l.tag===13&&(l.flags|=16384))),Fp(e,a)):Ns(e)}function Ns(a){var e=a;do{if((e.flags&32768)!==0){Fp(e,Gt);return}a=e.return;var t=Q1(e.alternate,e,vt);if(t!==null){J=t;return}if(e=e.sibling,e!==null){J=e;return}J=e=a}while(e!==null);ka===0&&(ka=5)}function Fp(a,e){do{var t=Z1(a.alternate,a);if(t!==null){t.flags&=32767,J=t;return}if(t=a.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(a=a.sibling,a!==null)){J=a;return}J=a=t}while(a!==null);ka=6,J=null}function Ip(a,e,t,l,n,i,s,o,c,x,h,S){a.cancelPendingCommit=null;do Cs();while(Ea!==0);if((na&6)!==0)throw Error(b(327));if(e!==null){if(e===a.current)throw Error(b(177));a===ga&&(J=ga=null,F=0),wl=e,Le=a,et=t,Gc=n,Gp=l,ex(a,e,t,s,o,c,S)}}function ex(a,e,t,l,n,i,s){var o=e.lanes|e.childLanes;if(Yc=o,o|=zo,N0(a,t,o,l,n,i),en=null,(t&335544064)===t?(tn=A1(a),l=10262):(tn=null,l=10256),(e.subtreeFlags&l)!==0||(e.flags&l)!==0?(a.callbackNode=null,a.callbackPriority=0,ox(gi,function(){return Zc(),null})):(a.callbackNode=null,a.callbackPriority=0),us=!1,l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=L.p,L.p=2,i=na,na|=4;try{K1(a,e,t)}finally{na=i,L.p=n,M.T=l}}Ea=1,us?an=Nx(s,a.containerInfo,tn,Xc,Vc,lx,Qc,Zc,tx):(Xc(),Vc(),Qc())}function tx(a){if(Ea!==0){var e=Le.onRecoverableError;e(a,{componentStack:null})}}function lx(){Ea===3&&(Ea=0,jp(wl,Le),Ea=4)}function Xc(){if(Ea===1){Ea=0;var a=Le,e=wl,t=et,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=M.T,M.T=null;var n=L.p;L.p=2;var i=na;na|=4;try{$n=gs=!1,Mp(e,a,t),t=nr;var s=Cf(a.containerInfo),o=t.focusedElem,c=t.selectionRange;if(s!==o&&o&&o.ownerDocument&&Nf(o.ownerDocument.documentElement,o)){if(c!==null&&ho(o)){var x=c.start,h=c.end;if(h===void 0&&(h=x),"selectionStart"in o)o.selectionStart=x,o.selectionEnd=Math.min(h,o.value.length);else{var S=o.ownerDocument||document,p=S&&S.defaultView||window;if(p.getSelection){var m=p.getSelection(),k=o.textContent.length,O=Math.min(c.start,k),Z=c.end===void 0?O:Math.min(c.end,k);!m.extend&&O>Z&&(s=Z,Z=O,O=s);var u=kf(o,O),f=kf(o,Z);if(u&&f&&(m.rangeCount!==1||m.anchorNode!==u.node||m.anchorOffset!==u.offset||m.focusNode!==f.node||m.focusOffset!==f.offset)){var g=S.createRange();g.setStart(u.node,u.offset),m.removeAllRanges(),O>Z?(m.addRange(g),m.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),m.addRange(g))}}}}for(S=[],m=o;m=m.parentNode;)m.nodeType===1&&S.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<S.length;o++){var y=S[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}xn=!!lr,nr=lr=null}finally{na=i,L.p=n,M.T=l}}a.current=e,Ea=2}}function Vc(){if(Ea===2){Ea=0;var a=Le,e=wl,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=M.T,M.T=null;var l=L.p;L.p=2;var n=na;na|=4;try{Tp(a,e.alternate,e)}finally{na=n,L.p=l,M.T=t}}Ea=3}}function Qc(){if(Ea===4||Ea===3){Ea=0;var a=an;an=null,h0();var e=Le,t=wl,l=et,n=Gp,i=(l&335544064)===l?10262:10256;if((t.subtreeFlags&i)!==0||(t.flags&i)!==0?Ea=5:(Ea=0,wl=Le=null,Wp(e,e.pendingLanes)),i=e.pendingLanes,i===0&&(Lt=null),Ps(l),t=t.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(hn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=M.T,i=L.p,L.p=2,M.T=null;try{for(var s=e.onRecoverableError,o=0;o<n.length;o++){var c=n[o];s(c.value,{componentStack:c.stack})}}finally{M.T=t,L.p=i}}if(n=en,s=tn,tn=null,n!==null&&(en=null,s===null&&(s=[]),a!==null))for(c=0;c<n.length;c++)t=(0,n[c])(s),t!==void 0&&a.finished.finally(t);(et&3)!==0&&Cs(),tt(e),i=e.pendingLanes,(l&261930)!==0&&(i&42)!==0?e===Es?Pn++:(Pn=0,Es=e):(Pn=0,Es=null),ai(0)}}function Wp(a,e){(a.pooledCacheLanes&=e)===0&&(e=a.pooledCache,e!=null&&(a.pooledCache=null,Dn(e)))}function Cs(){return an!==null&&(an.skipTransition(),an=null),Xc(),Vc(),Qc(),Zc()}function Zc(){if(Ea!==5)return!1;var a=Le,e=Yc;Yc=0;var t=Ps(et),l=M.T,n=L.p;try{L.p=32>t?32:t,M.T=null,t=Gc,Gc=null;var i=Le,s=et;if(Ea=0,wl=Le=null,et=0,(na&6)!==0)throw Error(b(331));var o=na;if(na|=4,Rp(i.current),Dp(i,i.current,s,t),na=o,ai(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(hn,i)}catch{}return!0}finally{L.p=n,M.T=l,Wp(a,e)}}function Pp(a,e,t){e=Oe(t,e),e=rc(a.stateNode,e,2),a=Dt(a,e,2),a!==null&&(yn(a,2),tt(a))}function ca(a,e,t){if(a.tag===3)Pp(a,a,t);else for(;e!==null;){if(e.tag===3){Pp(e,a,t);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Lt===null||!Lt.has(l))){a=Oe(t,a),t=$d(2),l=Dt(e,t,2),l!==null&&(Fd(t,l,e,a),yn(l,2),tt(l));break}}e=e.return}}function Kc(a,e,t){var l=a.pingCache;if(l===null){l=a.pingCache=new F1;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(t)||(Rc=!0,n.add(t),a=nx.bind(null,a,e,t),e.then(a,a))}function nx(a,e,t){var l=a.pingCache;l!==null&&l.delete(e),a.pingedLanes|=a.suspendedLanes&t,a.warmLanes&=~t,ga===a&&(F&t)===t&&((ka===4||ka===3&&(F&62914560)===F&&300>me()-ws)&&(na&2)===0?nn(a,0):ys|=t,Pl===F&&(Pl=0)),tt(a)}function au(a,e){e===0&&(e=Br()),a=il(a,e),a!==null&&(yn(a,e),tt(a))}function ix(a){var e=a.memoizedState,t=0;e!==null&&(t=e.retryLane),au(a,t)}function sx(a,e){var t=0;switch(a.tag){case 31:case 13:var l=a.stateNode,n=a.memoizedState;n!==null&&(t=n.retryLane);break;case 19:l=a.stateNode;break;case 22:l=a.stateNode._retryCache;break;default:throw Error(b(314))}l!==null&&l.delete(e),au(a,t)}function ox(a,e){return $s(a,e)}var on=null,cn=null,Jc=!1,As=!1,$c=!1,Vt=0;function tt(a){a!==cn&&a.next===null&&(cn===null?on=cn=a:cn=cn.next=a),As=!0,Jc||(Jc=!0,rx())}function ai(a,e){if(!$c&&As){$c=!0;do for(var t=!1,l=on;l!==null;){if(a!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-ve(42|a)+1)-1,i&=n&~(s&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,nu(l,i))}else i=F,i=yi(l,l===ga?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||vn(l,i)||(t=!0,nu(l,i));l=l.next}while(t);$c=!1}}function cx(){eu()}function eu(){As=Jc=!1;var a=0;Vt!==0&&yx()&&(a=Vt);for(var e=me(),t=null,l=on;l!==null;){var n=l.next,i=tu(l,e);i===0?(l.next=null,t===null?on=n:t.next=n,n===null&&(cn=t)):(t=l,(a!==0||(i&3)!==0)&&(As=!0)),l=n}Ea!==0&&Ea!==5||ai(a),Vt!==0&&(Vt=0)}function tu(a,e){for(var t=a.suspendedLanes,l=a.pingedLanes,n=a.expirationTimes,i=a.pendingLanes&-62914561;0<i;){var s=31-ve(i),o=1<<s,c=n[s];c===-1?((o&t)===0||(o&l)!==0)&&(n[s]=k0(o,e)):c<=e&&(a.expiredLanes|=o),i&=~o}if(e=ga,t=F,t=yi(a,a===e?t:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),l=a.callbackNode,t===0||a===e&&(oa===2||oa===9)||a.cancelPendingCommit!==null)return l!==null&&l!==null&&Fs(l),a.callbackNode=null,a.callbackPriority=0;if((t&3)===0||vn(a,t)){if(e=t&-t,e===a.callbackPriority)return e;switch(l!==null&&Fs(l),Ps(t)){case 2:case 8:t=Ur;break;case 32:t=gi;break;case 268435456:t=Hr;break;default:t=gi}return l=lu.bind(null,a),t=$s(t,l),a.callbackPriority=e,a.callbackNode=t,e}return l!==null&&l!==null&&Fs(l),a.callbackPriority=2,a.callbackNode=null,2}function lu(a,e){if(Ea!==0&&Ea!==5)return a.callbackNode=null,a.callbackPriority=0,null;var t=a.callbackNode;if(Cs()&&a.callbackNode!==t)return null;var l=F;return l=yi(a,a===ga?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),l===0?null:(Lp(a,l,e),tu(a,me()),a.callbackNode!=null&&a.callbackNode===t?lu.bind(null,a):null)}function nu(a,e){if(Cs())return null;Lp(a,e,!0)}function rx(){Sx(function(){(na&6)!==0?$s(Dr,cx):eu()})}function Fc(){if(Vt===0){var a=dl;a===0&&(a=mi,mi<<=1,(mi&261888)===0&&(mi=256)),Vt=a}return Vt}function iu(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:Ti(a)}function fx(a,e,t,l,n){if(e==="submit"&&t&&t.stateNode===n){var i=iu((n[re]||null).action),s=l.submitter;s&&(e=(e=s[re]||null)?iu(e.formAction):s.getAttribute("formAction"),e!==null&&(i=e,s=null));var o=new Ai("action","action",null,l,n);a.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Vt!==0){var c=new FormData(n,s);nc(t,{pending:!0,data:c,method:n.method,action:i},null,c)}}else typeof i=="function"&&(o.preventDefault(),c=new FormData(n,s),nc(t,{pending:!0,data:c,method:n.method,action:i},i,c))},currentTarget:n}]})}}for(var Ic=0;Ic<So.length;Ic++){var Wc=So[Ic],dx=Wc.toLowerCase(),px=Wc[0].toUpperCase()+Wc.slice(1);Be(dx,"on"+px)}Be(Mf,"onAnimationEnd"),Be(_f,"onAnimationIteration"),Be(jf,"onAnimationStart"),Be("dblclick","onDoubleClick"),Be("focusin","onFocus"),Be("focusout","onBlur"),Be(w1,"onTransitionRun"),Be(S1,"onTransitionStart"),Be(z1,"onTransitionCancel"),Be(Df,"onTransitionEnd"),Al("onMouseEnter",["mouseout","mouseover"]),Al("onMouseLeave",["mouseout","mouseover"]),Al("onPointerEnter",["pointerout","pointerover"]),Al("onPointerLeave",["pointerout","pointerover"]),tl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tl("onBeforeInput",["compositionend","keypress","textInput","paste"]),tl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ei));function su(a,e){e=(e&4)!==0;for(var t=0;t<a.length;t++){var l=a[t],n=l.event;l=l.listeners;a:{var i=void 0;if(e)for(var s=l.length-1;0<=s;s--){var o=l[s],c=o.instance,x=o.currentTarget;if(o=o.listener,c!==i&&n.isPropagationStopped())break a;i=o,n.currentTarget=x;try{i(n)}catch(h){_i(h)}n.currentTarget=null,i=c}else for(s=0;s<l.length;s++){if(o=l[s],c=o.instance,x=o.currentTarget,o=o.listener,c!==i&&n.isPropagationStopped())break a;i=o,n.currentTarget=x;try{i(n)}catch(h){_i(h)}n.currentTarget=null,i=c}}}}function $(a,e){var t=e[Vr];t===void 0&&(t=e[Vr]=new Set);var l=a+"__bubble";t.has(l)||(ou(e,a,2,!1),t.add(l))}function Pc(a,e,t){var l=0;e&&(l|=4),ou(t,a,l,e)}var Os="_reactListening"+Math.random().toString(36).slice(2);function ar(a){if(!a[Os]){a[Os]=!0,Kr.forEach(function(t){t!=="selectionchange"&&(ux.has(t)||Pc(t,!1,a),Pc(t,!0,a))});var e=a.nodeType===9?a:a.ownerDocument;e===null||e[Os]||(e[Os]=!0,Pc("selectionchange",!1,e))}}function ou(a,e,t,l){switch(Fu(e)){case 2:var n=ib;break;case 8:n=sb;break;default:n=yr}t=n.bind(null,e,t,a),n=void 0,!oo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?a.addEventListener(e,t,{capture:!0,passive:n}):a.addEventListener(e,t,!0):n!==void 0?a.addEventListener(e,t,{passive:n}):a.addEventListener(e,t,!1)}function er(a,e,t,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)a:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var o=l.stateNode.containerInfo;if(o===n)break;if(s===4)for(s=l.return;s!==null;){var c=s.tag;if((c===3||c===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;o!==null;){if(s=el(o),s===null)return;if(c=s.tag,c===5||c===6||c===26||c===27){l=i=s;continue a}o=o.parentNode}}l=l.return}of(function(){var x=i,h=io(t),S=[];a:{var p=Uf.get(a);if(p!==void 0){var m=Ai,k=a;switch(a){case"keypress":if(Ni(t)===0)break a;case"keydown":case"keyup":m=I0;break;case"focusin":k="focus",m=po;break;case"focusout":k="blur",m=po;break;case"beforeblur":case"afterblur":m=po;break;case"click":if(t.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=t1;break;case Mf:case _f:case jf:m=L0;break;case Df:m=n1;break;case"scroll":case"scrollend":m=R0;break;case"wheel":m=s1;break;case"copy":case"cut":case"paste":m=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=pf;break;case"submit":m=a1;break;case"toggle":case"beforetoggle":m=c1}var O=(e&4)!==0,Z=!O&&(a==="scroll"||a==="scrollend"),u=O?p!==null?p+"Capture":null:p;O=[];for(var f=x,g;f!==null;){var y=f;if(g=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||g===null||u===null||(y=zn(f,u),y!=null&&O.push(ti(f,y,g))),Z)break;f=f.return}0<O.length&&(p=new m(p,k,null,t,h),S.push({event:p,listeners:O}))}}if((e&7)===0){a:{if(m=a==="mouseover"||a==="pointerover",p=a==="mouseout"||a==="pointerout",m&&t!==no&&(k=t.relatedTarget||t.fromElement)&&(el(k)||k[kl]))break a;(p||m)&&(k=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=x,m=m?el(m):null,m!==null&&(Z=V(m),O=m.tag,m!==Z||O!==5&&O!==27&&O!==6)&&(m=null)):(p=null,m=x),p!==m&&(O=ff,y="onMouseLeave",u="onMouseEnter",f="mouse",(a==="pointerout"||a==="pointerover")&&(O=pf,y="onPointerLeave",u="onPointerEnter",f="pointer"),Z=p==null?k:Sn(p),g=m==null?k:Sn(m),k=new O(y,f+"leave",p,t,h),k.target=Z,k.relatedTarget=g,y=null,el(h)===x&&(O=new O(u,f+"enter",m,t,h),O.target=g,O.relatedTarget=Z,y=O),Z=y,O=p&&m?Wa(p,m,xx):null,p!==null&&cu(S,k,p,O,!1),m!==null&&Z!==null&&cu(S,Z,m,O,!0)))}a:{if(p=x?Sn(x):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var A=yf;else if(hf(p))if(wf)A=h1;else{A=g1;var I=b1}else m=p.nodeName,!m||m.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?x&&lo(x.elementType)&&(A=yf):A=m1;if(A&&(A=A(a,x))){vf(S,A,t,h);break a}I&&I(a,p,x)}switch(I=x?Sn(x):window,a){case"focusin":(hf(I)||I.contentEditable==="true")&&(Ul=I,vo=x,Mn=null);break;case"focusout":Mn=vo=Ul=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,Af(S,t,h);break;case"selectionchange":if(y1)break;case"keydown":case"keyup":Af(S,t,h)}var _;if(xo)a:{switch(a){case"compositionstart":var Y="onCompositionStart";break a;case"compositionend":Y="onCompositionEnd";break a;case"compositionupdate":Y="onCompositionUpdate";break a}Y=void 0}else Dl?gf(a,t)&&(Y="onCompositionEnd"):a==="keydown"&&t.keyCode===229&&(Y="onCompositionStart");Y&&(uf&&t.locale!=="ko"&&(Dl||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Dl&&(_=cf()):(Tt=h,co="value"in Tt?Tt.value:Tt.textContent,Dl=!0)),I=Ms(x,Y),0<I.length&&(Y=new df(Y,a,null,t,h),S.push({event:Y,listeners:I}),_?Y.data=_:(_=mf(t),_!==null&&(Y.data=_)))),(_=f1?d1(a,t):p1(a,t))&&(Y=Ms(x,"onBeforeInput"),0<Y.length&&(I=new df("onBeforeInput","beforeinput",null,t,h),S.push({event:I,listeners:Y}),I.data=_)),fx(S,a,x,t,h)}su(S,e)})}function ti(a,e,t){return{instance:a,listener:e,currentTarget:t}}function Ms(a,e){for(var t=e+"Capture",l=[];a!==null;){var n=a,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=zn(a,t),n!=null&&l.unshift(ti(a,n,i)),n=zn(a,e),n!=null&&l.push(ti(a,n,i))),a.tag===3)return l;a=a.return}return[]}function xx(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function cu(a,e,t,l,n){for(var i=e._reactName,s=[];t!==null&&t!==l;){var o=t,c=o.alternate,x=o.stateNode;if(o=o.tag,c!==null&&c===l)break;o!==5&&o!==26&&o!==27||x===null||(c=x,n?(x=zn(t,i),x!=null&&s.unshift(ti(t,x,c))):n||(x=zn(t,i),x!=null&&s.push(ti(t,x,c)))),t=t.return}s.length!==0&&a.push({event:e,listeners:s})}var bx=/\r\n?/g,gx=/\u0000|\uFFFD/g;function ru(a){return(typeof a=="string"?a:""+a).replace(bx,`
`).replace(gx,"")}function fu(a,e){return e=ru(e),ru(a)===e}function ra(a,e,t,l,n,i){switch(t){case"children":if(typeof l=="string")e==="body"||e==="textarea"&&l===""||Ml(a,l);else if(typeof l=="number"||typeof l=="bigint")e!=="body"&&Ml(a,""+l);else return;break;case"className":Ei(a,"class",l);break;case"tabIndex":Ei(a,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ei(a,t,l);break;case"style":nf(a,l,i);return;case"data":if(e!=="object"){Ei(a,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||t!=="href")){a.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){a.removeAttribute(t);break}l=Ti(l),a.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){a.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(e!=="input"&&ra(a,e,"name",n.name,n,null),ra(a,e,"formEncType",n.formEncType,n,null),ra(a,e,"formMethod",n.formMethod,n,null),ra(a,e,"formTarget",n.formTarget,n,null)):(ra(a,e,"encType",n.encType,n,null),ra(a,e,"method",n.method,n,null),ra(a,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){a.removeAttribute(t);break}l=Ti(l),a.setAttribute(t,l);break;case"onClick":l!=null&&(a.onclick=Ze);return;case"onScroll":l!=null&&$("scroll",a);return;case"onScrollEnd":l!=null&&$("scrollend",a);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(b(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(b(60));i?.__html!==t&&(a.innerHTML=t)}}break;case"multiple":a.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":a.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){a.removeAttribute("xlink:href");break}t=Ti(l),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?a.setAttribute(t,l):a.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?a.setAttribute(t,""):a.removeAttribute(t);break;case"capture":case"download":l===!0?a.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?a.setAttribute(t,l):a.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?a.setAttribute(t,l):a.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?a.removeAttribute(t):a.setAttribute(t,l);break;case"popover":$("beforetoggle",a),$("toggle",a),zi(a,"popover",l);break;case"xlinkActuate":ot(a,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ot(a,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ot(a,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ot(a,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ot(a,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ot(a,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ot(a,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ot(a,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ot(a,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":zi(a,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=U0.get(t)||t,zi(a,t,l);else return}ta=!0}function tr(a,e,t,l,n,i){switch(t){case"style":nf(a,l,i);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(b(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(b(60));i?.__html!==t&&(a.innerHTML=t)}}break;case"children":if(typeof l=="string")Ml(a,l);else if(typeof l=="number"||typeof l=="bigint")Ml(a,""+l);else return;break;case"onScroll":l!=null&&$("scroll",a);return;case"onScrollEnd":l!=null&&$("scrollend",a);return;case"onClick":l!=null&&(a.onclick=Ze);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Jr.hasOwnProperty(t))a:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),i=t.slice(2,n?t.length-7:void 0),e=a[re]||null,e=e!=null?e[t]:null,typeof e=="function"&&a.removeEventListener(i,e,n),typeof l=="function")){typeof e!="function"&&e!==null&&(t in a?a[t]=null:a.hasAttribute(t)&&a.removeAttribute(t)),a.addEventListener(i,l,n);break a}ta=!0,t in a?a[t]=l:l===!0?a.setAttribute(t,""):zi(a,t,l)}return}ta=!0}function $a(a,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",a),$("load",a);var l=!1,n=!1,i;for(i in t)if(t.hasOwnProperty(i)){var s=t[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(b(137,e));default:ra(a,e,i,s,t,null)}}n&&ra(a,e,"srcSet",t.srcSet,t,null),l&&ra(a,e,"src",t.src,t,null);return;case"input":$("invalid",a);var o=i=s=n=null,c=null,x=null;for(l in t)if(t.hasOwnProperty(l)){var h=t[l];if(h!=null)switch(l){case"name":n=h;break;case"type":s=h;break;case"checked":c=h;break;case"defaultChecked":x=h;break;case"value":i=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(b(137,e));break;default:ra(a,e,l,h,t,null)}}af(a,i,o,c,x,s,n,!1);return;case"select":$("invalid",a),l=s=i=null;for(n in t)if(t.hasOwnProperty(n)&&(o=t[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:ra(a,e,n,o,t,null)}e=i,t=s,a.multiple=!!l,e!=null?Ol(a,!!l,e,!1):t!=null&&Ol(a,!!l,t,!0);return;case"textarea":$("invalid",a),i=n=l=null;for(s in t)if(t.hasOwnProperty(s)&&(o=t[s],o!=null))switch(s){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(b(91));break;default:ra(a,e,s,o,t,null)}tf(a,l,n,i);return;case"option":for(c in t)t.hasOwnProperty(c)&&(l=t[c],l!=null)&&(c==="selected"?a.selected=l&&typeof l!="function"&&typeof l!="symbol":ra(a,e,c,l,t,null));return;case"dialog":$("beforetoggle",a),$("toggle",a),$("cancel",a),$("close",a);break;case"iframe":case"object":$("load",a);break;case"video":case"audio":for(l=0;l<ei.length;l++)$(ei[l],a);break;case"image":$("error",a),$("load",a);break;case"details":$("toggle",a);break;case"embed":case"source":case"link":$("error",a),$("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in t)if(t.hasOwnProperty(x)&&(l=t[x],l!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(b(137,e));default:ra(a,e,x,l,t,null)}return;default:if(lo(e)){for(h in t)t.hasOwnProperty(h)&&(l=t[h],l!==void 0&&tr(a,e,h,l,t,void 0));return}}for(o in t)t.hasOwnProperty(o)&&(l=t[o],l!=null&&ra(a,e,o,l,t,null))}var mx={};function hx(a,e,t,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,o=null,c=null,x=null,h=null;for(m in t){var S=t[m];if(t.hasOwnProperty(m)&&S!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":c=S;default:l.hasOwnProperty(m)||ra(a,e,m,null,l,S)}}for(var p in l){var m=l[p];if(S=t[p],l.hasOwnProperty(p)&&(m!=null||S!=null))switch(p){case"type":m!==S&&(ta=!0),i=m;break;case"name":m!==S&&(ta=!0),n=m;break;case"checked":m!==S&&(ta=!0),x=m;break;case"defaultChecked":m!==S&&(ta=!0),h=m;break;case"value":m!==S&&(ta=!0),s=m;break;case"defaultValue":m!==S&&(ta=!0),o=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(b(137,e));break;default:m!==S&&ra(a,e,p,m,l,S)}}eo(a,s,o,c,x,h,i,n);return;case"select":m=s=o=p=null;for(i in t)if(c=t[i],t.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":m=c;default:l.hasOwnProperty(i)||ra(a,e,i,null,l,c)}for(n in l)if(i=l[n],c=t[n],l.hasOwnProperty(n)&&(i!=null||c!=null))switch(n){case"value":i!==c&&(ta=!0),p=i;break;case"defaultValue":i!==c&&(ta=!0),o=i;break;case"multiple":i!==c&&(ta=!0),s=i;default:i!==c&&ra(a,e,n,i,l,c)}e=o,t=s,l=m,p!=null?Ol(a,!!t,p,!1):!!l!=!!t&&(e!=null?Ol(a,!!t,e,!0):Ol(a,!!t,t?[]:"",!1));return;case"textarea":m=p=null;for(o in t)if(n=t[o],t.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ra(a,e,o,null,l,n)}for(s in l)if(n=l[s],i=t[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":n!==i&&(ta=!0),p=n;break;case"defaultValue":n!==i&&(ta=!0),m=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(b(91));break;default:n!==i&&ra(a,e,s,n,l,i)}ef(a,p,m);return;case"option":for(var k in t)p=t[k],t.hasOwnProperty(k)&&p!=null&&!l.hasOwnProperty(k)&&(k==="selected"?a.selected=!1:ra(a,e,k,null,l,p));for(c in l)p=l[c],m=t[c],l.hasOwnProperty(c)&&p!==m&&(p!=null||m!=null)&&(c==="selected"?(p!==m&&(ta=!0),a.selected=p&&typeof p!="function"&&typeof p!="symbol"):ra(a,e,c,p,l,m));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var O in t)p=t[O],t.hasOwnProperty(O)&&p!=null&&!l.hasOwnProperty(O)&&ra(a,e,O,null,l,p);for(x in l)if(p=l[x],m=t[x],l.hasOwnProperty(x)&&p!==m&&(p!=null||m!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(b(137,e));break;default:ra(a,e,x,p,l,m)}return;default:if(lo(e)){for(var Z in t)p=t[Z],t.hasOwnProperty(Z)&&p!==void 0&&!l.hasOwnProperty(Z)&&tr(a,e,Z,void 0,l,p);for(h in l)p=l[h],m=t[h],!l.hasOwnProperty(h)||p===m||p===void 0&&m===void 0||tr(a,e,h,p,l,m);return}}for(var u in t)p=t[u],t.hasOwnProperty(u)&&p!=null&&!l.hasOwnProperty(u)&&ra(a,e,u,null,l,p);for(S in l)p=l[S],m=t[S],!l.hasOwnProperty(S)||p===m||p==null&&m==null||ra(a,e,S,p,l,m)}function du(a){switch(a){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vx(){if(typeof performance.getEntriesByType=="function"){for(var a=0,e=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var n=t[l],i=n.transferSize,s=n.initiatorType,o=n.duration;if(i&&o&&du(s)){for(s=0,o=n.responseEnd,l+=1;l<t.length;l++){var c=t[l],x=c.startTime;if(x>o)break;var h=c.transferSize,S=c.initiatorType;h&&du(S)&&(c=c.responseEnd,s+=h*(c<o?1:(o-x)/(c-x)))}if(--l,e+=8*(i+s)/(n.duration/1e3),a++,10<a)break}}if(0<a)return e/a/1e6}return navigator.connection&&(a=navigator.connection.downlink,typeof a=="number")?a:5}var lr=null,nr=null;function li(a){return a.nodeType===9?a:a.ownerDocument}function pu(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function uu(a,e){if(a===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&e==="foreignObject"?0:a}function xu(a,e,t,l){return t=li(t).createElement(a),t[Va]=l,t[re]=e,$a(t,a,e),Ba(t),t}function ir(a,e){return a==="textarea"||a==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sr=null;function yx(){var a=window.event;return a&&a.type==="popstate"?a===sr?!1:(sr=a,!0):(sr=null,!1)}var or=typeof setTimeout=="function"?setTimeout:void 0,wx=typeof clearTimeout=="function"?clearTimeout:void 0,bu=typeof Promise=="function"?Promise:void 0,gu=typeof requestAnimationFrame=="function"?requestAnimationFrame:or,Sx=typeof queueMicrotask=="function"?queueMicrotask:typeof bu<"u"?function(a){return bu.resolve(null).then(a).catch(zx)}:or;function zx(a){setTimeout(function(){throw a})}function Qt(a){return a==="head"}function mu(a,e){var t=e,l=0;do{var n=t.nextSibling;if(a.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&"){if(l===0){a.removeChild(n),bn(e);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")br(a.ownerDocument.documentElement);else if(t==="head"){t=a.ownerDocument.head,br(t);for(var i=t.firstChild;i;){var s=i.nextSibling,o=i.nodeName;i[wn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=s}}else t==="body"&&br(a.ownerDocument.body);t=n}while(t);bn(e)}function hu(a,e){var t=a;a=0;do{var l=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(a===0)break;a--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||a++;t=l}while(t)}function vu(a,e,t){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,a.style.viewTransitionName=e,t!=null&&(a.style.viewTransitionClass=t),t=getComputedStyle(a),t.display==="inline"){if(e=a.getClientRects(),e.length===1)var l=1;else for(var n=l=0;n<e.length;n++){var i=e[n];0<i.width&&0<i.height&&l++}l===1&&(a=a.style,a.display=e.length===1?"inline-block":"block",a.marginTop="-"+t.paddingTop,a.marginBottom="-"+t.paddingBottom)}}function yu(a,e){a=a.style,e=e.style;var t=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;a.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,a.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),a.display==="inline-block"&&(e==null?a.display=a.margin="":(t=e.display,a.display=t==null||typeof t=="boolean"?"":t,t=e.margin,t!=null?a.margin=t:(t=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],a.marginTop=t==null||typeof t=="boolean"?"":t,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],a.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Ex(a,e,t){return t=t.ownerDocument.defaultView,{rect:a,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=a.bottom&&0<=a.right&&a.top<=t.innerHeight&&a.left<=t.innerWidth}}function cr(a){var e=a.getBoundingClientRect(),t=getComputedStyle(a);return Ex(e,t,a)}function Tx(a){return a.documentElement.clientHeight}function kx(a){this.addEventListener("load",a),this.addEventListener("error",a)}function Nx(a,e,t,l,n,i,s,o,c){var x=e.nodeType===9?e:e.ownerDocument;try{var h=x.startViewTransition({update:function(){var p=x.defaultView,m=p.navigation&&p.navigation.transition,k=x.fonts.status;l();var O=[];if(k==="loaded"&&(Tx(x),x.fonts.status==="loading"&&O.push(x.fonts.ready)),k=O.length,a!==null)for(var Z=a.suspenseyImages,u=0,f=0;f<Z.length;f++){var g=Z[f];if(!g.complete){var y=g.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<p.innerHeight&&y.left<p.innerWidth){if(u+=qu(g),u>Ds){O.length=k;break}g=new Promise(kx.bind(g)),O.push(g)}}}if(0<O.length)return p=Promise.race([Promise.all(O),new Promise(function(A){return setTimeout(A,500)})]).then(n,n),(m?Promise.allSettled([m.finished,p]):p).then(i,i);if(n(),m)return m.finished.then(i,i);i()},types:t});x.__reactViewTransition=h;var S=[];return h.ready.then(function(){for(var p=x.documentElement.getAnimations({subtree:!0}),m=0;m<p.length;m++){var k=p[m],O=k.effect,Z=O.pseudoElement;if(Z!=null&&Z.startsWith("::view-transition")){S.push(k),k=O.getKeyframes();for(var u=Z=void 0,f=!0,g=0;g<k.length;g++){var y=k[g],A=y.width;if(Z===void 0)Z=A;else if(Z!==A){f=!1;break}if(A=y.height,u===void 0)u=A;else if(u!==A){f=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}f&&Z!==void 0&&u!==void 0&&(O.setKeyframes(k),f=getComputedStyle(O.target,O.pseudoElement),f.width!==Z||f.height!==u)&&(f=k[0],f.width=Z,f.height=u,f=k[k.length-1],f.width=Z,f.height=u,O.setKeyframes(k))}}s()},function(p){x.__reactViewTransition===h&&(x.__reactViewTransition=null);try{typeof p=="object"&&p!==null&&p.name==="InvalidStateError"&&(p.message==="View transition was skipped because document visibility state is hidden."||p.message==="Skipping view transition because document visibility state has become hidden."||p.message==="Skipping view transition because viewport size changed."||p.message==="Transition was aborted because of invalid state")&&(p=null),p!==null&&c(p)}finally{l(),n(),s()}}),h.finished.finally(function(){for(var p=0;p<S.length;p++)S[p].cancel();x.__reactViewTransition===h&&(x.__reactViewTransition=null),o()}),h}catch{return l(),n(),s(),null}}function Sl(a,e){this._scope=document.documentElement,this._selector="::view-transition-"+a+"("+e+")"}Sl.prototype.animate=function(a,e){return e=typeof e=="number"?{duration:e}:T({},e),e.pseudoElement=this._selector,this._scope.animate(a,e)},Sl.prototype.getAnimations=function(){for(var a=this._scope,e=this._selector,t=a.getAnimations({subtree:!0}),l=[],n=0;n<t.length;n++){var i=t[n].effect;i!==null&&i.target===a&&i.pseudoElement===e&&l.push(t[n])}return l},Sl.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function wu(a){return{name:a,group:new Sl("group",a),imagePair:new Sl("image-pair",a),old:new Sl("old",a),new:new Sl("new",a)}}function Ne(a){this._fragmentFiber=a,this._observers=this._eventListeners=null}Ne.prototype.addEventListener=function(a,e,t){var l=null,n=null;if(!(t!=null&&typeof t!="boolean"&&(l=t.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(zu(i,a,e,t)===-1){var s=this,o=e;t!=null&&typeof t!="boolean"&&t.once===!0&&(o=function(c){s.removeEventListener(a,e,t),typeof e=="function"?e.call(this,c):e.handleEvent(c)}),l!==null&&(n=s.removeEventListener.bind(s,a,e,t),l.addEventListener("abort",n,{once:!0}),n=l.removeEventListener.bind(l,"abort",n)),l=rn(t),i.push({type:a,listener:e,optionsOrUseCapture:t,attachedListener:o,cleanup:n}),v(this._fragmentFiber.child,!1,Cx,a,o,l)}this._eventListeners=i}};function Cx(a,e,t,l){return aa(a).addEventListener(e,t,l),!1}Ne.prototype.removeEventListener=function(a,e,t){var l=this._eventListeners;if(l!==null&&(e=zu(l,a,e,t),e!==-1)){var n=l[e];t=n.attachedListener;var i=n.cleanup;n=rn(n.optionsOrUseCapture),v(this._fragmentFiber.child,!1,Ax,a,t,n),l.splice(e,1),i!==null&&i()}};function Ax(a,e,t,l){return aa(a).removeEventListener(e,t,l),!1}function rn(a){return a!=null&&typeof a!="boolean"&&(a.once===!0||a.signal instanceof AbortSignal)?{capture:a.capture,passive:a.passive}:a}function Su(a){return a==null?"c=0":typeof a=="boolean"?"c="+(a?"1":"0"):"c="+(a.capture?"1":"0")}function zu(a,e,t,l){if(a.length===0)return-1;l=Su(l);for(var n=0;n<a.length;n++){var i=a[n];if(i.type===e&&i.listener===t&&Su(i.optionsOrUseCapture)===l)return n}return-1}Ne.prototype.dispatchEvent=function(a){var e=R(this._fragmentFiber);if(e===null)return!0;e=aa(e);var t=this._eventListeners;if(t!==null&&0<t.length||!a.bubbles){var l=e.nodeType===9?e.createComment(""):document.createTextNode("");if(t)for(var n=0;n<t.length;n++){var i=t[n];l.addEventListener(i.type,i.attachedListener,rn(i.optionsOrUseCapture))}if(e.appendChild(l),a=l.dispatchEvent(a),t)for(n=0;n<t.length;n++)i=t[n],l.removeEventListener(i.type,i.attachedListener,rn(i.optionsOrUseCapture));return e.removeChild(l),a}return e.dispatchEvent(a)},Ne.prototype.focus=function(a){v(this._fragmentFiber.child,!0,Eu,a,void 0,void 0)};function Eu(a,e){return a.tag===6?!1:(a=aa(a),qx(a,e))}Ne.prototype.focusLast=function(a){var e=[];v(this._fragmentFiber.child,!0,rr,e,void 0,void 0);for(var t=e.length-1;0<=t&&!Eu(e[t],a);t--);};function rr(a,e){return e.push(a),!1}Ne.prototype.blur=function(){var a=R(this._fragmentFiber);a!==null&&(a=aa(a),a=li(a).activeElement,a!==null&&v(this._fragmentFiber.child,!1,Ox,a,void 0,void 0))};function Ox(a,e){return a.tag===6?!1:(a=aa(a),a===e||a.contains(e)?(e.blur(),!0):!1)}Ne.prototype.observeUsing=function(a){this._observers===null&&(this._observers=new Set),this._observers.add(a),v(this._fragmentFiber.child,!1,Mx,a,void 0,void 0)};function Mx(a,e){return a.tag===6||(a=aa(a),e.observe(a)),!1}Ne.prototype.unobserveUsing=function(a){var e=this._observers;if(e!==null&&e.has(a)){e.delete(a),v(this._fragmentFiber.child,!1,_x,a,void 0,void 0);for(var t=e=0;t<Xe.length;t++){var l=Xe[t];l.fragmentInstance===this&&l.observer===a?a.unobserve(l.instance):Xe[e++]=l}Xe.length=e}};function _x(a,e){return a.tag===6||(a=aa(a),e.unobserve(a)),!1}var Xe=[],fr=!1;function jx(a,e,t){Xe.push({fragmentInstance:a,observer:e,instance:t}),fr||(fr=!0,Lx(function(){fr=!1;var l=Xe;Xe=[];for(var n=0;n<l.length;n++){var i=l[n];i.observer.unobserve(i.instance)}}))}Ne.prototype.getClientRects=function(){var a=[];return v(this._fragmentFiber.child,!1,Dx,a,void 0,void 0),a};function Dx(a,e){if(a.tag===6){a=a.stateNode;var t=a.ownerDocument.createRange();t.selectNodeContents(a),e.push.apply(e,t.getClientRects())}else a=aa(a),e.push.apply(e,a.getClientRects());return!1}Ne.prototype.getRootNode=function(a){var e=R(this._fragmentFiber);return e===null?this:aa(e).getRootNode(a)},Ne.prototype.compareDocumentPosition=function(a){var e=R(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];v(this._fragmentFiber.child,!1,rr,t,void 0,void 0);var l=aa(e);if(t.length===0){if(t=l,Ca(this._fragmentFiber)){a:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break a}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(t=e)}e=this._fragmentFiber;var n=l=t.compareDocumentPosition(a);return t===a?n=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=te(e)[1],t===null?n=Node.DOCUMENT_POSITION_PRECEDING:(a=aa(t).compareDocumentPosition(a),n=a===0||a&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=aa(t[0]),n=aa(t[t.length-1]);var i=Ca(this._fragmentFiber)?e.parentElement:l;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=i.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(a),o=n.compareDocumentPosition(a),c=s&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=l&&i&&s&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=l&&e===a||i&&n===a||c||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&e===a||!i&&n===a?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ux(e,this._fragmentFiber,t[0],t[t.length-1],a)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ux(a,e,t,l,n){var i=el(n);if(a&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!i)a:{for(;i!==null;){if(i.tag===7&&(i===e||i.alternate===e)){t=!0;break a}i=i.return}t=!1}return t}if(a&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=n.ownerDocument,n===i||n===i.documentElement||n===i.body;a:{for(i=e,e=R(e);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==e&&i.alternate!==e)){i=!0;break a}i=i.return}i=!1}return i}return a&Node.DOCUMENT_POSITION_PRECEDING?((e=!!i)&&!(e=i===t)&&(e=Wa(t,i,be),e===null?e=!1:(v(e,!0,lt,i,t),i=Da,Da=null,e=i!==null)),e):a&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!i)&&!(e=i===l)&&(e=Wa(l,i,be),e===null?e=!1:(v(e,!0,ce,i,l),i=Da,le=Da=null,e=i!==null)),e):!1}function Tu(a,e){var t=a.ownerDocument.createRange();t.selectNodeContents(a),a=t.getBoundingClientRect(),window.scrollTo(window.scrollX+a.left,e?window.scrollY+a.top:window.scrollY+a.bottom-window.innerHeight)}Ne.prototype.scrollIntoView=function(a){if(typeof a=="object")throw Error(b(566));var e=[];v(this._fragmentFiber.child,!1,rr,e,void 0,void 0);var t=a!==!1;if(e.length===0){var l=te(this._fragmentFiber);if(l=t?l[1]||l[0]||R(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){a=aa(l),Tu(a,t);return}if(l=aa(l),l.nodeType!==9){if(l.nodeType===11){t="host"in l?l.host:null,t!==null&&t.scrollIntoView(a);return}l.scrollIntoView(a)}}for(l=t?e.length-1:0;l!==(t?-1:e.length);){var n=e[l];n.tag===6?(n=aa(n),Tu(n,t)):aa(n).scrollIntoView(a),l+=t?-1:1}};function Hx(a,e){return a=aa(a),ku(a,e),!1}function ku(a,e){a.reactFragments==null&&(a.reactFragments=new Set),a.reactFragments.add(e)}function Nu(a,e){var t=e._eventListeners;if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];a.addEventListener(n.type,n.attachedListener,rn(n.optionsOrUseCapture))}a.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(i){for(var s=0,o=0;o<Xe.length;o++){var c=Xe[o];(c.fragmentInstance!==e||c.observer!==i||c.instance!==a)&&(Xe[s++]=c)}Xe.length=s,i.observe(a)}),ku(a,e))}function Rx(a,e){var t=e._eventListeners;if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];a.removeEventListener(n.type,n.attachedListener,rn(n.optionsOrUseCapture))}a.nodeType!==3&&(t=e._observers,t!==null&&t.forEach(function(i){typeof i.rootMargin=="string"?jx(e,i,a):i.unobserve(a)}),a.reactFragments!=null&&a.reactFragments.delete(e))}function dr(a){var e=a.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":dr(t),Si(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}a.removeChild(t)}}function Bx(a,e,t,l){for(;a.nodeType===1;){var n=t;if(a.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(l){if(!a[wn])switch(e){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(i=a.getAttribute("rel"),i==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(i!==n.rel||a.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||a.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||a.getAttribute("title")!==(n.title==null?null:n.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(i=a.getAttribute("src"),(i!==(n.src==null?null:n.src)||a.getAttribute("type")!==(n.type==null?null:n.type)||a.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(e==="input"&&a.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&a.getAttribute("name")===i)return a}else return a;if(a=Ue(a.nextSibling),a===null)break}return null}function Yx(a,e,t){if(e==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!t||(a=Ue(a.nextSibling),a===null))return null;return a}function Cu(a,e){for(;a.nodeType!==8;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!e||(a=Ue(a.nextSibling),a===null))return null;return a}function pr(a){return a.data==="$?"||a.data==="$~"}function ur(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState!=="loading"}function Gx(a,e){var t=a.ownerDocument;if(a.data==="$~")a._reactRetry=e;else if(a.data!=="$?"||t.readyState!=="loading")e();else{var l=function(){e(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),a._reactRetry=l}}function Ue(a){for(;a!=null;a=a.nextSibling){var e=a.nodeType;if(e===1||e===3)break;if(e===8){if(e=a.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return a}var xr=null;function Au(a){a=a.nextSibling;for(var e=0;a;){if(a.nodeType===8){var t=a.data;if(t==="/$"||t==="/&"){if(e===0)return Ue(a.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}a=a.nextSibling}return null}function Ou(a){a=a.previousSibling;for(var e=0;a;){if(a.nodeType===8){var t=a.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return a;e--}else t!=="/$"&&t!=="/&"||e++}a=a.previousSibling}return null}function qx(a,e){function t(){l=!0}if(a.ownerDocument.activeElement===a)return!0;var l=!1;try{a.ownerDocument.addEventListener("focus",t,!0),(a.focus||HTMLElement.prototype.focus).call(a,e)}finally{a.ownerDocument.removeEventListener("focus",t,!0)}return l}function Lx(a){gu(function(){gu(function(e){return a(e)})})}function Mu(a,e,t){switch(e=li(t),a){case"html":if(a=e.documentElement,!a)throw Error(b(452));return a;case"head":if(a=e.head,!a)throw Error(b(453));return a;case"body":if(a=e.body,!a)throw Error(b(454));return a;default:throw Error(b(451))}}function _u(a,e,t){for(var l in t){var n=t[l];t.hasOwnProperty(l)&&n!=null&&ra(a,e,l,null,mx,n)}t.dangerouslySetInnerHTML!=null&&(a.textContent=""),a.onclick===Ze&&(a.onclick=null),Si(a)}function br(a){for(var e=a.attributes;e.length;)a.removeAttributeNode(e[0]);Si(a)}var He=new Map,ju=new Set;function ni(a){if(typeof a.getRootNode=="function"){var e=a.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return a.nodeType===9?a:a.ownerDocument}var yt=L.d;L.d={f:Xx,r:Vx,D:Qx,C:Zx,L:Kx,m:Jx,X:Fx,S:$x,M:Ix};function Xx(){var a=yt.f(),e=Ts();return a||e}function Vx(a){var e=Nl(a);e!==null&&e.tag===5&&e.type==="form"?Ud(e):yt.r(a)}var fn=typeof document>"u"?null:document;function Du(a,e,t){var l=fn;if(l&&typeof e=="string"&&e){var n=Ce(e);n='link[rel="'+a+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),ju.has(n)||(ju.add(n),a={rel:a,crossOrigin:t,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),$a(e,"link",a),Ba(e),l.head.appendChild(e)))}}function Qx(a){yt.D(a),Du("dns-prefetch",a,null)}function Zx(a,e){yt.C(a,e),Du("preconnect",a,e)}function Kx(a,e,t){yt.L(a,e,t);var l=fn;if(l&&a&&e){var n='link[rel="preload"][as="'+Ce(e)+'"]';e==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+Ce(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+Ce(t.imageSizes)+'"]')):n+='[href="'+Ce(a)+'"]';var i=n;switch(e){case"style":i=dn(a);break;case"script":i=pn(a)}if(!(He.has(i)||(a=T({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:a,as:e},t),He.set(i,a),l.querySelector(n)!==null||e==="style"&&l.querySelector(ii(i))||e==="script"&&l.querySelector(si(i))))){var s=l.createElement("link");$a(s,"link",a),e==="style"&&(s[wi]=!0,s.onload=s.onerror=function(){Zr(s)}),Ba(s),l.head.appendChild(s)}}}function Jx(a,e){yt.m(a,e);var t=fn;if(t&&a){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Ce(l)+'"][href="'+Ce(a)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=pn(a)}if(!He.has(i)&&(a=T({rel:"modulepreload",href:a},e),He.set(i,a),t.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(si(i)))return}l=t.createElement("link"),$a(l,"link",a),Ba(l),t.head.appendChild(l)}}}function $x(a,e,t){yt.S(a,e,t);var l=fn;if(l&&a){var n=Cl(l).hoistableStyles,i=dn(a);e=e||"default";var s=n.get(i);if(!s){var o={loading:0,preload:null};if(s=l.querySelector(ii(i)))o.loading=5;else{a=T({rel:"stylesheet",href:a,"data-precedence":e},t),(t=He.get(i))&&gr(a,t);var c=s=l.createElement("link");Ba(c),$a(c,"link",a),c._p=new Promise(function(x,h){c.onload=x,c.onerror=h}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,_s(s,e,l)}s={type:"stylesheet",instance:s,count:1,state:o},n.set(i,s)}}}function Fx(a,e){yt.X(a,e);var t=fn;if(t&&a){var l=Cl(t).hoistableScripts,n=pn(a),i=l.get(n);i||(i=t.querySelector(si(n)),i||(a=T({src:a,async:!0},e),(e=He.get(n))&&mr(a,e),i=t.createElement("script"),Ba(i),$a(i,"link",a),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Ix(a,e){yt.M(a,e);var t=fn;if(t&&a){var l=Cl(t).hoistableScripts,n=pn(a),i=l.get(n);i||(i=t.querySelector(si(n)),i||(a=T({src:a,async:!0,type:"module"},e),(e=He.get(n))&&mr(a,e),i=t.createElement("script"),Ba(i),$a(i,"link",a),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Uu(a,e,t,l){var n=(n=St.current)?ni(n):null;if(!n)throw Error(b(446));switch(a){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=dn(t.href),e=Cl(n).hoistableStyles,l=e.get(t),l||(l={type:"style",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){a=dn(t.href);var i=Cl(n).hoistableStyles,s=i.get(a);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(a,s),(i=n.querySelector(ii(a)))?i._p||(s.instance=i,s.state.loading=5):(i=He.get(a),i||(i={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},He.set(a,i)),Wx(n,a,i,s.state))),e&&l===null)throw Error(b(528,""));return s}if(e&&l!==null)throw Error(b(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(t=pn(t),e=Cl(n).hoistableScripts,l=e.get(t),l||(l={type:"script",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(b(444,a))}}function dn(a){return'href="'+Ce(a)+'"'}function ii(a){return'link[rel="stylesheet"]['+a+"]"}function Hu(a){return T({},a,{"data-precedence":a.precedence,precedence:null})}function Wx(a,e,t,l){if(e=a.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[wi]!==!0){l.loading=1;return}}else e=a.createElement("link"),e[wi]=!0,e.onload=e.onerror=Zr.bind(null,e),$a(e,"link",t),Ba(e),a.head.appendChild(e);l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2})}function pn(a){return'[src="'+Ce(a)+'"]'}function si(a){return"script[async]"+a}function Ru(a,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var l=a.querySelector('style[data-href~="'+Ce(t.href)+'"]');if(l)return e.instance=l,Ba(l),l;var n=T({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(a.ownerDocument||a).createElement("style"),Ba(l),$a(l,"style",n),_s(l,t.precedence,a),e.instance=l;case"stylesheet":n=dn(t.href);var i=a.querySelector(ii(n));if(i)return e.state.loading|=4,e.instance=i,Ba(i),i;l=Hu(t),(n=He.get(n))&&gr(l,n),i=(a.ownerDocument||a).createElement("link"),Ba(i);var s=i;return s._p=new Promise(function(o,c){s.onload=o,s.onerror=c}),$a(i,"link",l),e.state.loading|=4,_s(i,t.precedence,a),e.instance=i;case"script":return i=pn(t.src),(n=a.querySelector(si(i)))?(e.instance=n,Ba(n),n):(l=t,(n=He.get(i))&&(l=T({},t),mr(l,n)),a=a.ownerDocument||a,n=a.createElement("script"),Ba(n),$a(n,"link",l),a.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(b(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,_s(l,t.precedence,a));return e.instance}function _s(a,e,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var o=l[s];if(o.dataset.precedence===e)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(a,i.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(a,e.firstChild))}function gr(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.title==null&&(a.title=e.title)}function mr(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.integrity==null&&(a.integrity=e.integrity)}var js=null;function Bu(a,e,t){if(js===null){var l=new Map,n=js=new Map;n.set(t,l)}else n=js,l=n.get(t),l||(l=new Map,n.set(t,l));if(l.has(a))return l;for(l.set(a,null),t=t.getElementsByTagName(a),n=0;n<t.length;n++){var i=t[n];if(!(i[wn]||i[Va]||a==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(e)||"";s=a+s;var o=l.get(s);o?o.push(i):l.set(s,[i])}}return l}function hr(a,e,t){a=a.ownerDocument||a,a.head.insertBefore(t,e==="title"?a.querySelector("head > title"):null)}function Px(a,e,t){if(t===1||e.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(a=e.disabled,typeof e.precedence=="string"&&a==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Yu(a,e){return a==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Gu(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}function qu(a){return(a.width||100)*(a.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Lu(a,e){typeof e.decode=="function"&&(a.imgCount++,e.complete||(a.imgBytes+=qu(e),a.suspenseyImages.push(e)),a=tb.bind(a),e.decode().then(a,a))}function ab(a,e,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=dn(l.href),i=e.querySelector(ii(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=oi.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=i,Ba(i);return}i=e.ownerDocument||e,l=Hu(l),(n=He.get(n))&&gr(l,n),i=i.createElement("link"),Ba(i);var s=i;s._p=new Promise(function(o,c){s.onload=o,s.onerror=c}),$a(i,"link",l),t.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=oi.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}var Ds=0;function eb(a,e){return a.stylesheets&&a.count===0&&Hs(a,a.stylesheets),0<a.count||0<a.imgCount?function(t){var l=setTimeout(function(){if(a.stylesheets&&Hs(a,a.stylesheets),a.unsuspend){var i=a.unsuspend;a.unsuspend=null,i()}},6e4+e);0<a.imgBytes&&Ds===0&&(Ds=62500*vx());var n=setTimeout(function(){if(a.waitingForImages=!1,a.count===0&&(a.stylesheets&&Hs(a,a.stylesheets),a.unsuspend)){var i=a.unsuspend;a.unsuspend=null,i()}},(a.imgBytes>Ds?50:800)+e);return a.unsuspend=t,function(){a.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Xu(a){if(a.count===0&&(a.imgCount===0||!a.waitingForImages)){if(a.stylesheets)Hs(a,a.stylesheets);else if(a.unsuspend){var e=a.unsuspend;a.unsuspend=null,e()}}}function oi(){this.count--,Xu(this)}function tb(){this.imgCount--,Xu(this)}var Us=null;function Hs(a,e){a.stylesheets=null,a.unsuspend!==null&&(a.count++,Us=new Map,e.forEach(lb,a),Us=null,oi.call(a))}function lb(a,e){if(!(e.state.loading&4)){var t=Us.get(a);if(t)var l=t.get(null);else{t=new Map,Us.set(a,t);for(var n=a.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),l=s)}l&&t.set(null,l)}n=e.instance,s=n.getAttribute("data-precedence"),i=t.get(s)||l,i===l&&t.set(null,n),t.set(s,n),this.count++,l=oi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(n,a.firstChild)),e.state.loading|=4}}var un={$$typeof:Ra,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function nb(a,e,t,l,n,i,s,o,c){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Is(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Is(0),this.hiddenUpdates=Is(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function Vu(a,e,t,l,n,i,s,o,c,x,h,S){return a=new nb(a,e,t,s,c,x,h,S,o),e=1,i===!0&&(e|=24),i=fe(3,null,null,e),a.current=i,i.stateNode=a,e=jo(),e.refCount++,a.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:t,cache:e},Ro(i),a}function Qu(a){return a?(a=Bl,a):Bl}function Zu(a,e,t,l,n,i){n=Qu(n),l.context===null?l.context=n:l.pendingContext=n,l=jt(e),l.payload={element:t},i=i===void 0?null:i,i!==null&&(l.callback=i),t=Dt(a,l,e),t!==null&&(xe(t,a,e),Bn(t,a,e))}function Ku(a,e){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var t=a.retryLane;a.retryLane=t!==0&&t<e?t:e}}function vr(a,e){Ku(a,e),(a=a.alternate)&&Ku(a,e)}function Ju(a){if(a.tag===13||a.tag===31){var e=il(a,67108864);e!==null&&xe(e,a,67108864),vr(a,67108864)}}function $u(a){if(a.tag===13||a.tag===31){var e=ke();e=Ws(e);var t=il(a,e);t!==null&&xe(t,a,e),vr(a,e)}}var xn=!0;function ib(a,e,t,l){var n=M.T;M.T=null;var i=L.p;try{L.p=2,yr(a,e,t,l)}finally{L.p=i,M.T=n}}function sb(a,e,t,l){var n=M.T;M.T=null;var i=L.p;try{L.p=8,yr(a,e,t,l)}finally{L.p=i,M.T=n}}function yr(a,e,t,l){if(xn){var n=wr(l);if(n===null)er(a,e,l,Rs,t),Iu(a,l);else if(cb(n,a,e,t,l))l.stopPropagation();else if(Iu(a,l),e&4&&-1<ob.indexOf(a)){for(;n!==null;){var i=Nl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=al(i.pendingLanes);if(s!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var c=1<<31-ve(s);o.entanglements[1]|=c,s&=~c}tt(i),(na&6)===0&&(Ss=me()+500,ai(0))}}break;case 31:case 13:o=il(i,2),o!==null&&xe(o,i,2),Ts(),vr(i,2)}if(i=wr(l),i===null&&er(a,e,l,Rs,t),i===n)break;n=i}n!==null&&l.stopPropagation()}else er(a,e,l,null,t)}}function wr(a){return a=io(a),Sr(a)}var Rs=null;function Sr(a){if(Rs=null,a=el(a),a!==null){var e=V(a);if(e===null)a=null;else{var t=e.tag;if(t===13){if(a=ya(e),a!==null)return a;a=null}else if(t===31){if(a=ee(e),a!==null)return a;a=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;a=null}else e!==a&&(a=null)}}return Rs=a,null}function Fu(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(v0()){case Dr:return 2;case Ur:return 8;case gi:case y0:return 32;case Hr:return 268435456;default:return 32}default:return 32}}var zr=!1,Zt=null,Kt=null,Jt=null,ci=new Map,ri=new Map,$t=[],ob="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Iu(a,e){switch(a){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":ci.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ri.delete(e.pointerId)}}function fi(a,e,t,l,n,i){return a===null||a.nativeEvent!==i?(a={blockedOn:e,domEventName:t,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Nl(e),e!==null&&Ju(e)),a):(a.eventSystemFlags|=l,e=a.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),a)}function cb(a,e,t,l,n){switch(e){case"focusin":return Zt=fi(Zt,a,e,t,l,n),!0;case"dragenter":return Kt=fi(Kt,a,e,t,l,n),!0;case"mouseover":return Jt=fi(Jt,a,e,t,l,n),!0;case"pointerover":var i=n.pointerId;return ci.set(i,fi(ci.get(i)||null,a,e,t,l,n)),!0;case"gotpointercapture":return i=n.pointerId,ri.set(i,fi(ri.get(i)||null,a,e,t,l,n)),!0}return!1}function Wu(a){var e=el(a.target);if(e!==null){var t=V(e);if(t!==null){if(e=t.tag,e===13){if(e=ya(t),e!==null){a.blockedOn=e,Xr(a.priority,function(){$u(t)});return}}else if(e===31){if(e=ee(t),e!==null){a.blockedOn=e,Xr(a.priority,function(){$u(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){a.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}a.blockedOn=null}function Bs(a){if(a.blockedOn!==null)return!1;for(var e=a.targetContainers;0<e.length;){var t=wr(a.nativeEvent);if(t===null){t=a.nativeEvent;var l=new t.constructor(t.type,t);no=l,t.target.dispatchEvent(l),no=null}else return e=Nl(t),e!==null&&Ju(e),a.blockedOn=t,!1;e.shift()}return!0}function Pu(a,e,t){Bs(a)&&t.delete(e)}function rb(){zr=!1,Zt!==null&&Bs(Zt)&&(Zt=null),Kt!==null&&Bs(Kt)&&(Kt=null),Jt!==null&&Bs(Jt)&&(Jt=null),ci.forEach(Pu),ri.forEach(Pu)}function Ys(a,e){a.blockedOn===e&&(a.blockedOn=null,zr||(zr=!0,w.unstable_scheduleCallback(w.unstable_NormalPriority,rb)))}var Gs=null;function a0(a){Gs!==a&&(Gs=a,w.unstable_scheduleCallback(w.unstable_NormalPriority,function(){Gs===a&&(Gs=null);for(var e=0;e<a.length;e+=3){var t=a[e],l=a[e+1],n=a[e+2];if(typeof l!="function"){if(Sr(l||t)===null)continue;break}var i=Nl(t);i!==null&&(a.splice(e,3),e-=3,nc(i,{pending:!0,data:n,method:t.method,action:l},l,n))}}))}function bn(a){function e(c){return Ys(c,a)}Zt!==null&&Ys(Zt,a),Kt!==null&&Ys(Kt,a),Jt!==null&&Ys(Jt,a),ci.forEach(e),ri.forEach(e);for(var t=0;t<$t.length;t++){var l=$t[t];l.blockedOn===a&&(l.blockedOn=null)}for(;0<$t.length&&(t=$t[0],t.blockedOn===null);)Wu(t),t.blockedOn===null&&$t.shift();if(t=(a.ownerDocument||a).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var n=t[l],i=t[l+1],s=n[re]||null;if(typeof i=="function")s||a0(t);else if(s){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[re]||null)o=s.formAction;else if(Sr(n)!==null)continue}else o=s.action;typeof o=="function"?t[l+1]=o:(t.splice(l,3),l-=3),a0(t)}}}function e0(){function a(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",a),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",a),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Er(a){this._internalRoot=a}qs.prototype.render=Er.prototype.render=function(a){var e=this._internalRoot;if(e===null)throw Error(b(409));var t=e.current,l=ke();Zu(t,l,a,e,null,null)},qs.prototype.unmount=Er.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var e=a.containerInfo;Zu(a.current,2,null,a,null,null),Ts(),e[kl]=null}};function qs(a){this._internalRoot=a}qs.prototype.unstable_scheduleHydration=function(a){if(a){var e=Lr();a={blockedOn:null,target:a,priority:e};for(var t=0;t<$t.length&&e!==0&&e<$t[t].priority;t++);$t.splice(t,0,a),t===0&&Wu(a)}};var t0=z.version;if(t0!=="19.3.1")throw Error(b(527,t0,"19.3.1"));L.findDOMNode=function(a){var e=a._reactInternals;if(e===void 0)throw typeof a.render=="function"?Error(b(188)):(a=Object.keys(a).join(","),Error(b(268,a)));return a=ja(e),a=a!==null?B(a):null,a=a===null?null:a.stateNode,a};var fb={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{hn=Ls.inject(fb),he=Ls}catch{}}return pi.createRoot=function(a,e){if(!D(a))throw Error(b(299));var t=!1,l="",n=Qd,i=Zd,s=Kd;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Vu(a,1,!1,null,null,t,l,null,n,i,s,e0),a[kl]=e.current,ar(a),new Er(e)},pi.hydrateRoot=function(a,e,t){if(!D(a))throw Error(b(299));var l=!1,n="",i=Qd,s=Zd,o=Kd,c=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.formState!==void 0&&(c=t.formState)),e=Vu(a,1,!0,e,t??null,l,n,c,i,s,o,e0),e.context=Qu(null),t=e.current,l=ke(),l=Ws(l),n=jt(l),n.callback=null,Dt(t,n,l),t=l,e.current.lanes=t,yn(e,t),tt(e),a[kl]=e.current,ar(a),new qs(e)},pi.version="19.3.1",pi}var p0;function yb(){if(p0)return Nr.exports;p0=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(z){console.error(z)}}return w(),Nr.exports=vb(),Nr.exports}var wb=yb();function Sb(){const[w,z]=Ia.useState(()=>typeof window>"u"?"#/":window.location.hash||"#/");return Ia.useEffect(()=>{const N=()=>z(window.location.hash||"#/");return window.addEventListener("hashchange",N),()=>window.removeEventListener("hashchange",N)},[]),w}function da({title:w,css:z,body:N,fonts:b,js:D}){const V=(b??[]).map(ya=>`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=${ya}&display=swap" rel="stylesheet">`).join(`
`);return`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${w}</title>
${V}
<style>
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
@media (prefers-reduced-motion: no-preference) {
  body > * { animation: pg-in .65s cubic-bezier(.22,1,.36,1) both; }
  body > *:nth-child(2) { animation-delay: .1s; }
  body > *:nth-child(3) { animation-delay: .2s; }
  body > *:nth-child(n+4) { animation-delay: .28s; }
}
@keyframes pg-in { from { opacity: 0; transform: translateY(16px); } }
${z}
</style>
</head>
<body>
${N}
${`<script>
${D}
<\/script>`}
<script>
/* 自适应高度上报：iframe 内文档把真实 scrollHeight 发给父页，外层据此调整 iframe 高度。
   注意：高度没变化时不上报——否则 resize → 上报 → 外层改高度 → resize 会形成正反馈循环。 */
(function () {
  var last = -1;
  var send = function () {
    var h = document.documentElement.scrollHeight;
    if (Math.abs(h - last) <= 1) return;
    last = h;
    try { parent.postMessage({ __demoH: h }, '*'); } catch (e) {}
  };
  window.addEventListener('load', send);
  window.addEventListener('resize', send);
  setTimeout(send, 200); setTimeout(send, 700); setTimeout(send, 1800);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(send);
})();
<\/script>
</body>
</html>`}const zb={bg:"#ffffff",surface:"#ffffff",alt:"rgba(22,19,14,0.06)",text:"#16130e",muted:"#78716a",primary:"#16130e",onPrimary:"#ffffff",border:"rgba(22,19,14,0.16)",radius:"10px",radiusLg:"16px",shadow:"0 1px 3px rgba(22,19,14,0.08)",font:'"Space Grotesk","PingFang SC","Hiragino Sans GB",system-ui,sans-serif',mono:'ui-monospace,"SF Mono",Consolas,monospace',ok:"#1a7f37",warn:"#b45309",err:"#c22e2e",info:"#1d4ed8",focus:"#2563eb"};function pa(w={}){const z={...zb,...w};return`${`.sc-root{
  --sc-bg:${z.bg};--sc-surface:${z.surface};--sc-alt:${z.alt};--sc-text:${z.text};
  --sc-muted:${z.muted};--sc-primary:${z.primary};--sc-onprimary:${z.onPrimary};
  --sc-border:${z.border};--sc-radius:${z.radius};--sc-radius-lg:${z.radiusLg};
  --sc-shadow:${z.shadow};--sc-font:${z.font};--sc-mono:${z.mono};
  --sc-ok:${z.ok};--sc-warn:${z.warn};--sc-err:${z.err};--sc-info:${z.info};--sc-focus:${z.focus};
}`}
${Eb}
${w.extraCss??""}`}const Eb=`
/* ---------- 组件矩阵 · 骨架 ---------- */
.sc-root{background:var(--sc-bg);color:var(--sc-text);font-family:var(--sc-font);
  padding:36px 28px 42px;border-radius:var(--sc-radius-lg);margin-top:44px;}
.sc-head{display:flex;justify-content:space-between;align-items:flex-end;gap:18px;flex-wrap:wrap;margin-bottom:22px;}
.sc-kicker{font-family:var(--sc-mono);font-size:10.5px;letter-spacing:.26em;color:var(--sc-primary);display:block;margin-bottom:7px;}
.sc-head h2{font-size:clamp(21px,3vw,29px);font-weight:700;letter-spacing:-.01em;margin:0;}
.sc-head p{margin:0;font-size:12.5px;color:var(--sc-muted);max-width:380px;line-height:1.7;}
.sc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(238px,1fr));gap:14px;}
.sc-cell{background:var(--sc-surface);border:1px solid var(--sc-border);border-radius:var(--sc-radius);
  padding:15px 16px 16px;box-shadow:var(--sc-shadow);display:flex;flex-direction:column;gap:11px;min-width:0;}
.sc-cell.w2{grid-column:span 2;}
.sc-cell h5{margin:0;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--sc-muted);font-weight:600;font-family:var(--sc-mono);}
.sc-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;}
.sc-col{display:flex;flex-direction:column;gap:9px;}
.sc-note{font-size:11.5px;color:var(--sc-muted);line-height:1.65;margin:0;}
.sc-mono{font-family:var(--sc-mono);}
@media (max-width:640px){.sc-cell.w2{grid-column:span 1;}.sc-root{padding:26px 18px 32px;}}

/* ---------- 入场动效（丝滑 + 延迟节奏） ---------- */
@media (prefers-reduced-motion:no-preference){
.sc-head{animation:sc-rise .55s cubic-bezier(.22,1,.36,1) both;}
.sc-cell{animation:sc-rise .6s cubic-bezier(.22,1,.36,1) both;}
.sc-grid>.sc-cell:nth-child(1){animation-delay:.06s}
.sc-grid>.sc-cell:nth-child(2){animation-delay:.11s}
.sc-grid>.sc-cell:nth-child(3){animation-delay:.16s}
.sc-grid>.sc-cell:nth-child(4){animation-delay:.21s}
.sc-grid>.sc-cell:nth-child(5){animation-delay:.26s}
.sc-grid>.sc-cell:nth-child(6){animation-delay:.31s}
.sc-grid>.sc-cell:nth-child(7){animation-delay:.36s}
.sc-grid>.sc-cell:nth-child(8){animation-delay:.41s}
.sc-grid>.sc-cell:nth-child(9){animation-delay:.46s}
.sc-grid>.sc-cell:nth-child(10){animation-delay:.51s}
.sc-grid>.sc-cell:nth-child(11){animation-delay:.56s}
.sc-grid>.sc-cell:nth-child(12){animation-delay:.61s}
.sc-grid>.sc-cell:nth-child(n+13){animation-delay:.68s}
}
@keyframes sc-rise{from{opacity:0;transform:translateY(14px)}}

/* ---------- 按钮 ---------- */
.sc-btn{appearance:none;font:inherit;font-size:13px;line-height:1;padding:9px 15px;border-radius:var(--sc-radius);
  border:1px solid var(--sc-border);background:var(--sc-surface);color:var(--sc-text);cursor:pointer;
  display:inline-flex;align-items:center;gap:7px;white-space:nowrap;
  transition:transform .2s cubic-bezier(.22,1,.36,1),box-shadow .2s,background .2s,color .2s,border-color .2s;}
.sc-btn:hover{border-color:var(--sc-primary);box-shadow:0 3px 10px rgba(0,0,0,.1);}
.sc-btn:active{transform:translateY(1px) scale(.98);transition-duration:.08s;}
.sc-btn.pri{background:var(--sc-primary);border-color:var(--sc-primary);color:var(--sc-onprimary);}
.sc-btn.gho{background:transparent;border-color:transparent;color:var(--sc-primary);padding-left:9px;padding-right:9px;}
.sc-btn.dan{background:var(--sc-err);border-color:var(--sc-err);color:#fff;}
.sc-btn[disabled]{opacity:.42;cursor:not-allowed;}
.sc-btn[disabled]:active{transform:none;}
.sc-btn.ico{padding:0;width:34px;height:34px;justify-content:center;font-size:15px;}
.sc-btn.sm{font-size:12px;padding:6px 11px;}
.sc-btn:focus-visible{outline:2px solid var(--sc-focus);outline-offset:1px;}
.sc-spin{width:13px;height:13px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:sc-rot .7s linear infinite;flex:none;}
@keyframes sc-rot{to{transform:rotate(360deg);}}

/* ---------- 输入 ---------- */
.sc-lbl{font-size:12px;color:var(--sc-muted);display:block;margin-bottom:5px;}
.sc-inp,.sc-ta,.sc-sel-btn{width:100%;font:inherit;font-size:13px;color:var(--sc-text);background:var(--sc-surface);
  border:1px solid var(--sc-border);border-radius:var(--sc-radius);padding:8px 11px;outline:none;
  transition:border-color .2s,box-shadow .25s,background .2s;}
.sc-inp::placeholder,.sc-ta::placeholder{color:var(--sc-muted);opacity:.75;}
.sc-inp:focus,.sc-ta:focus,.sc-sel-btn:focus-visible{border-color:var(--sc-focus);box-shadow:0 0 0 3px color-mix(in srgb,var(--sc-focus) 18%,transparent);}
.sc-inp.err{border-color:var(--sc-err);}
.sc-help{font-size:11px;color:var(--sc-muted);margin-top:5px;}
.sc-help.err{color:var(--sc-err);}
.sc-ta{resize:vertical;min-height:62px;line-height:1.6;}
.sc-count{font-size:10.5px;color:var(--sc-muted);text-align:right;font-family:var(--sc-mono);margin-top:4px;}

/* ---------- 搜索 + 建议 ---------- */
.sc-search{position:relative;}
.sc-search .sc-ic{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--sc-muted);font-size:12px;pointer-events:none;}
.sc-search input{padding-left:30px;}
.sc-sug{position:absolute;top:calc(100% + 5px);left:0;right:0;background:var(--sc-surface);border:1px solid var(--sc-border);
  border-radius:var(--sc-radius);box-shadow:var(--sc-shadow);overflow:hidden;display:none;z-index:5;}
.sc-sug.show{display:block;animation:sc-drop .24s cubic-bezier(.22,1,.36,1);}
.sc-sug-item{padding:7px 11px;font-size:12.5px;cursor:default;transition:background .18s;}
.sc-sug-item:hover{background:var(--sc-alt);}
@keyframes sc-drop{from{opacity:0;transform:translateY(-6px);}}

/* ---------- 下拉框 ---------- */
.sc-sel{position:relative;}
.sc-sel-btn{display:flex;justify-content:space-between;align-items:center;gap:8px;cursor:pointer;text-align:left;}
.sc-sel-btn .car{font-size:9px;color:var(--sc-muted);transition:transform .28s cubic-bezier(.22,1,.36,1);}
.sc-sel.sc-open .car{transform:rotate(180deg);}
.sc-sel-list{position:absolute;top:calc(100% + 5px);left:0;right:0;background:var(--sc-surface);border:1px solid var(--sc-border);
  border-radius:var(--sc-radius);box-shadow:var(--sc-shadow);display:none;z-index:6;overflow:hidden;padding:4px;}
.sc-sel.sc-open .sc-sel-list{display:block;animation:sc-drop .24s cubic-bezier(.22,1,.36,1);}
.sc-sel-opt{padding:7px 9px;font-size:12.5px;cursor:pointer;border-radius:calc(var(--sc-radius) - 4px);transition:background .18s,color .18s;}
.sc-sel-opt:hover{background:var(--sc-alt);}
.sc-sel-opt.sel{color:var(--sc-primary);font-weight:600;background:var(--sc-alt);}

/* ---------- 复选 / 单选 ---------- */
.sc-chk,.sc-rad{display:flex;align-items:center;gap:9px;font-size:13px;cursor:pointer;user-select:none;}
.sc-chk input,.sc-rad input{position:absolute;opacity:0;width:0;height:0;}
.sc-box{width:16px;height:16px;border:1.5px solid var(--sc-border);border-radius:4px;flex:none;
  display:inline-flex;align-items:center;justify-content:center;transition:all .22s cubic-bezier(.22,1,.36,1);background:var(--sc-surface);}
.sc-chk input:checked + .sc-box{background:var(--sc-primary);border-color:var(--sc-primary);}
.sc-chk input:checked + .sc-box::after{content:"";width:8px;height:4px;border-left:2px solid var(--sc-onprimary);
  border-bottom:2px solid var(--sc-onprimary);transform:rotate(-45deg) translate(1px,-1px);}
.sc-rad .sc-box{border-radius:50%;}
.sc-rad input:checked + .sc-box{border-color:var(--sc-primary);border-width:5px;}
.sc-chk input:disabled + .sc-box,.sc-chk input:disabled ~ *{opacity:.4;}
.sc-chk input:disabled ~ *{opacity:.4;}

/* ---------- 开关 ---------- */
.sc-sw{display:flex;align-items:center;gap:10px;font-size:13px;cursor:pointer;user-select:none;}
.sc-sw input{position:absolute;opacity:0;width:0;height:0;}
.sc-sw .tr{width:38px;height:22px;border-radius:999px;background:var(--sc-border);position:relative;transition:background .28s;flex:none;}
.sc-sw .tr::after{content:"";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;
  background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.28);transition:transform .3s cubic-bezier(.34,1.4,.44,1);}
.sc-sw input:checked + .tr{background:var(--sc-primary);}
.sc-sw input:checked + .tr::after{transform:translateX(16px);}
.sc-sw-txt{font-size:12px;color:var(--sc-muted);font-family:var(--sc-mono);}

/* ---------- 滑块 ---------- */
.sc-rng{width:100%;accent-color:var(--sc-primary);cursor:pointer;}
.sc-rng-out{font-family:var(--sc-mono);font-size:11.5px;color:var(--sc-muted);}

/* ---------- 分段控制（滑动指示块） ---------- */
.sc-seg{display:inline-flex;border:1px solid var(--sc-border);border-radius:var(--sc-radius);position:relative;isolation:isolate;}
.sc-seg-ind{position:absolute;top:0;bottom:0;left:0;width:0;background:var(--sc-primary);z-index:0;
  border-radius:calc(var(--sc-radius) - 2px);
  transition:transform .32s cubic-bezier(.22,1,.36,1),width .32s cubic-bezier(.22,1,.36,1);}
.sc-seg-b{position:relative;z-index:1;border:0;background:transparent;font:inherit;font-size:12px;padding:7px 14px;
  cursor:pointer;color:var(--sc-muted);transition:color .28s;}
.sc-seg-b + .sc-seg-b{border-left:1px solid var(--sc-border);}
.sc-seg-b.on{color:var(--sc-onprimary);}

/* ---------- 标签页（滑动下划线） ---------- */
.sc-tabs{display:flex;gap:2px;border-bottom:1px solid var(--sc-border);position:relative;}
.sc-tab-ind{position:absolute;bottom:-1px;left:0;height:2px;width:0;background:var(--sc-primary);
  transition:transform .32s cubic-bezier(.22,1,.36,1),width .32s cubic-bezier(.22,1,.36,1);}
.sc-tab{border:0;background:transparent;font:inherit;font-size:12.5px;padding:7px 13px;cursor:pointer;color:var(--sc-muted);
  border-bottom:2px solid transparent;margin-bottom:-1px;transition:color .25s;}
.sc-tab:hover{color:var(--sc-text);}
.sc-tab.on{color:var(--sc-primary);border-bottom-color:transparent;font-weight:600;}
.sc-pane{display:none;font-size:12.5px;line-height:1.75;color:var(--sc-text);padding-top:11px;}
.sc-pane.on{display:block;animation:sc-fade .35s ease;}
@keyframes sc-fade{from{opacity:0;transform:translateY(5px);}}

/* ---------- 手风琴（高度缓动） ---------- */
.sc-acc-item{border-bottom:1px solid var(--sc-border);}
.sc-acc-item:last-child{border-bottom:0;}
.sc-acc-h{display:flex;justify-content:space-between;align-items:center;padding:9px 2px;font-size:13px;cursor:pointer;font-weight:500;gap:10px;}
.sc-acc-h .chev{transition:transform .3s cubic-bezier(.22,1,.36,1);font-size:9px;color:var(--sc-muted);flex:none;}
.sc-acc-item.open .chev{transform:rotate(180deg);}
.sc-acc-b{overflow:hidden;max-height:0;opacity:0;padding:0 2px;font-size:12.5px;line-height:1.7;color:var(--sc-muted);
  transition:max-height .4s cubic-bezier(.2,.7,.3,1),opacity .32s ease,padding-bottom .4s cubic-bezier(.2,.7,.3,1);}
.sc-acc-item.open .sc-acc-b{max-height:230px;opacity:1;padding-bottom:11px;}

/* ---------- 下拉菜单 ---------- */
.sc-menu{position:relative;display:inline-block;}
.sc-menu-list{position:absolute;top:calc(100% + 5px);left:0;min-width:148px;background:var(--sc-surface);
  border:1px solid var(--sc-border);border-radius:var(--sc-radius);box-shadow:var(--sc-shadow);display:none;z-index:6;overflow:hidden;padding:4px;}
.sc-menu.sc-open .sc-menu-list{display:block;animation:sc-drop .24s cubic-bezier(.22,1,.36,1);}
.sc-menu-item{padding:7px 10px;font-size:12.5px;cursor:pointer;display:flex;gap:9px;align-items:center;border-radius:calc(var(--sc-radius) - 4px);transition:background .18s;}
.sc-menu-item:hover{background:var(--sc-alt);}
.sc-menu-item.sep{border-top:1px solid var(--sc-border);border-radius:0;margin-top:4px;padding-top:10px;}
.sc-menu-item.dan{color:var(--sc-err);}

/* ---------- 模态框 ---------- */
.sc-modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;z-index:50;}
.sc-modal.show{display:flex;}
.sc-modal-bg{position:absolute;inset:0;background:rgba(0,0,0,.46);animation:sc-fade-bg .3s ease;}
@keyframes sc-fade-bg{from{opacity:0;}}
.sc-modal-box{position:relative;background:var(--sc-surface);border:1px solid var(--sc-border);border-radius:var(--sc-radius-lg);
  box-shadow:0 24px 60px rgba(0,0,0,.28);width:min(430px,calc(100% - 44px));padding:21px;animation:sc-pop .34s cubic-bezier(.22,1.25,.36,1);}
@keyframes sc-pop{from{opacity:0;transform:scale(.92) translateY(14px);}}
.sc-modal-box h4{font-size:16px;margin:0 0 8px;}
.sc-modal-box p{font-size:13px;line-height:1.75;color:var(--sc-muted);margin:0 0 18px;}
.sc-modal-foot{display:flex;justify-content:flex-end;gap:8px;}

/* ---------- 吐司 ---------- */
.sc-toasts{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:8px;z-index:60;}
.sc-toast{display:flex;align-items:center;gap:9px;background:var(--sc-surface);border:1px solid var(--sc-border);
  border-left-width:3px;border-radius:var(--sc-radius);box-shadow:0 10px 30px rgba(0,0,0,.2);padding:10px 14px;
  font-size:12.5px;max-width:270px;animation:sc-toast-in .38s cubic-bezier(.22,1.25,.36,1);}
@keyframes sc-toast-in{from{opacity:0;transform:translateY(16px) scale(.95);}}
.sc-toast.out{opacity:0;transform:translateY(6px);transition:all .3s;}
.sc-toast.ok{border-left-color:var(--sc-ok);}
.sc-toast.warn{border-left-color:var(--sc-warn);}
.sc-toast.err{border-left-color:var(--sc-err);}
.sc-toast-ic{width:16px;height:16px;border-radius:50%;flex:none;display:inline-flex;align-items:center;justify-content:center;
  font-size:9.5px;color:#fff;font-weight:700;}
.sc-toast.ok .sc-toast-ic{background:var(--sc-ok);}
.sc-toast.ok .sc-toast-ic::after{content:"✓";}
.sc-toast.warn .sc-toast-ic{background:var(--sc-warn);}
.sc-toast.warn .sc-toast-ic::after{content:"!";}
.sc-toast.err .sc-toast-ic{background:var(--sc-err);}
.sc-toast.err .sc-toast-ic::after{content:"✕";}

/* ---------- 警告提示 ---------- */
.sc-alert{display:flex;gap:9px;align-items:flex-start;border:1px solid var(--sc-border);border-left-width:3px;
  border-radius:var(--sc-radius);padding:9px 12px;font-size:12px;line-height:1.65;}
.sc-alert .ic{font-size:11px;font-weight:700;flex:none;margin-top:1px;}
.sc-alert.ok{border-left-color:var(--sc-ok);background:color-mix(in srgb,var(--sc-ok) 8%,transparent);}
.sc-alert.ok .ic{color:var(--sc-ok);}
.sc-alert.ok .ic::after{content:"✓";}
.sc-alert.warn{border-left-color:var(--sc-warn);background:color-mix(in srgb,var(--sc-warn) 8%,transparent);}
.sc-alert.warn .ic{color:var(--sc-warn);}
.sc-alert.warn .ic::after{content:"!";}
.sc-alert.err{border-left-color:var(--sc-err);background:color-mix(in srgb,var(--sc-err) 8%,transparent);}
.sc-alert.err .ic{color:var(--sc-err);}
.sc-alert.err .ic::after{content:"✕";}
.sc-alert.info{border-left-color:var(--sc-info);background:color-mix(in srgb,var(--sc-info) 8%,transparent);}
.sc-alert.info .ic{color:var(--sc-info);}
.sc-alert.info .ic::after{content:"i";}

/* ---------- 徽章 / 标签 ---------- */
.sc-badge{display:inline-flex;align-items:center;font-size:11px;padding:2.5px 9px;border-radius:999px;font-weight:500;line-height:1.5;}
.sc-badge.pri{background:var(--sc-primary);color:var(--sc-onprimary);}
.sc-badge.ok{background:color-mix(in srgb,var(--sc-ok) 15%,transparent);color:var(--sc-ok);}
.sc-badge.warn{background:color-mix(in srgb,var(--sc-warn) 15%,transparent);color:var(--sc-warn);}
.sc-badge.err{background:color-mix(in srgb,var(--sc-err) 15%,transparent);color:var(--sc-err);}
.sc-badge.mut{border:1px solid var(--sc-border);color:var(--sc-muted);}
.sc-tag{display:inline-flex;align-items:center;gap:5px;font-size:11.5px;border:1px solid var(--sc-border);
  border-radius:999px;padding:3px 5px 3px 10px;background:var(--sc-surface);transition:opacity .2s,transform .2s,border-color .2s;}
.sc-tag .x{cursor:pointer;border:0;background:transparent;color:var(--sc-muted);font-size:13px;line-height:1;padding:0 4px;border-radius:50%;transition:color .18s,background .18s;}
.sc-tag .x:hover{color:var(--sc-err);background:var(--sc-alt);}

/* ---------- 头像 ---------- */
.sc-ava{width:34px;height:34px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;
  font-size:12px;font-weight:600;color:#fff;flex:none;position:relative;letter-spacing:.02em;}
.sc-ava.sm{width:26px;height:26px;font-size:10px;}
.sc-ava.a{background:#d95757;}
.sc-ava.b{background:#4f7ddb;}
.sc-ava.c{background:#3d9a6c;}
.sc-ava.d{background:#9a6dd0;}
.sc-ava-group{display:flex;align-items:center;}
.sc-ava-group .sc-ava{border:2px solid var(--sc-surface);margin-left:-9px;}
.sc-ava-group .sc-ava:first-child{margin-left:0;}
.sc-ava .dot{position:absolute;right:-1px;bottom:-1px;width:9px;height:9px;border-radius:50%;background:var(--sc-ok);border:2px solid var(--sc-surface);}

/* ---------- 进度 ---------- */
.sc-prog{position:relative;height:8px;border-radius:999px;background:var(--sc-border);overflow:hidden;}
.sc-prog-fill{position:absolute;top:0;bottom:0;left:0;width:0;background:var(--sc-primary);border-radius:999px;transition:width .6s cubic-bezier(.2,.7,.3,1);}
.sc-prog-row{display:flex;align-items:center;gap:10px;}
.sc-prog-row .sc-prog{flex:1;}
.sc-prog-num{font-family:var(--sc-mono);font-size:11px;color:var(--sc-muted);flex:none;}
.sc-ring-wrap{position:relative;display:inline-flex;}
.sc-ring-num{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:11.5px;font-family:var(--sc-mono);font-weight:600;}
.sc-ring circle{fill:none;stroke-width:7;stroke-linecap:round;}
.sc-ring .bgc{stroke:var(--sc-border);}
.sc-ring .fgc{stroke:var(--sc-primary);stroke-dasharray:150;stroke-dashoffset:52;transform:rotate(-90deg);transform-origin:center;}

/* ---------- 步骤条 ---------- */
.sc-steps{display:flex;align-items:flex-start;}
.sc-step{display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;flex:1;position:relative;min-width:0;}
.sc-step .no{width:23px;height:23px;border-radius:50%;border:1.5px solid var(--sc-border);display:flex;align-items:center;
  justify-content:center;font-size:10.5px;font-family:var(--sc-mono);color:var(--sc-muted);background:var(--sc-surface);
  transition:all .3s cubic-bezier(.22,1,.36,1);position:relative;z-index:1;}
.sc-step small{font-size:10px;color:var(--sc-muted);text-align:center;line-height:1.3;}
.sc-step::before{content:"";position:absolute;top:11px;left:calc(-50% + 15px);right:calc(50% + 15px);height:1.5px;background:var(--sc-border);}
.sc-step:first-child::before{display:none;}
.sc-step.cur .no{border-color:var(--sc-primary);background:var(--sc-primary);color:var(--sc-onprimary);}
.sc-step.cur small{color:var(--sc-text);font-weight:600;}
.sc-step.done .no{background:var(--sc-primary);border-color:var(--sc-primary);color:var(--sc-onprimary);}
.sc-step.done::before{background:var(--sc-primary);}
.sc-step-lbl{font-size:11px;color:var(--sc-muted);font-family:var(--sc-mono);}

/* ---------- 分页 ---------- */
.sc-pg{display:flex;gap:4px;flex-wrap:wrap;}
.sc-pg-b{min-width:28px;height:28px;padding:0 6px;border:1px solid var(--sc-border);background:var(--sc-surface);
  border-radius:var(--sc-radius);font:inherit;font-size:11.5px;cursor:pointer;color:var(--sc-muted);font-family:var(--sc-mono);
  transition:all .22s cubic-bezier(.22,1,.36,1);}
.sc-pg-b:hover{border-color:var(--sc-primary);color:var(--sc-text);}
.sc-pg-b.on{background:var(--sc-primary);border-color:var(--sc-primary);color:var(--sc-onprimary);}
.sc-pg-b[disabled]{opacity:.4;cursor:not-allowed;}

/* ---------- 面包屑 ---------- */
.sc-crumb{display:flex;align-items:center;gap:7px;font-size:12.5px;color:var(--sc-muted);flex-wrap:wrap;}
.sc-crumb .lnk{color:var(--sc-primary);cursor:pointer;}
.sc-crumb .lnk:hover{text-decoration:underline;}
.sc-crumb .sep{opacity:.45;}
.sc-crumb .cur{color:var(--sc-text);font-weight:500;}

/* ---------- 提示 ---------- */
.sc-tip{position:relative;}
.sc-tip::after{content:attr(data-tip);position:absolute;bottom:calc(100% + 7px);left:50%;transform:translateX(-50%) translateY(4px);
  background:var(--sc-text);color:var(--sc-bg);font-size:11px;padding:4px 9px;border-radius:6px;white-space:nowrap;
  opacity:0;pointer-events:none;transition:opacity .22s ease,transform .22s cubic-bezier(.22,1,.36,1);z-index:20;font-weight:400;}
.sc-tip:hover::after,.sc-tip:focus-visible::after{opacity:1;transform:translateX(-50%) translateY(0);}

/* ---------- 表格 ---------- */
.sc-tbl{width:100%;border-collapse:collapse;font-size:12px;}
.sc-tbl th{text-align:left;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--sc-muted);
  font-weight:600;padding:5px 8px;border-bottom:1px solid var(--sc-border);white-space:nowrap;}
.sc-tbl td{padding:7px 8px;border-bottom:1px solid var(--sc-border);color:var(--sc-text);white-space:nowrap;}
.sc-tbl tbody tr{transition:background .18s;}
.sc-tbl tbody tr:hover{background:var(--sc-alt);}
.sc-tbl tr:last-child td{border-bottom:0;}
.sc-tbl .sort{cursor:pointer;user-select:none;}
.sc-tbl .sort:hover{color:var(--sc-text);}

/* ---------- 文件上传 ---------- */
.sc-file{display:flex;align-items:center;gap:10px;min-width:0;}
.sc-file input{display:none;}
.sc-file-name{font-size:11.5px;color:var(--sc-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;}

/* ---------- 骨架屏 ---------- */
.sc-skel-box .sk{display:none;flex-direction:column;gap:8px;}
.sc-skel-box.loading .sk{display:flex;}
.sc-skel-box.loading .real{display:none;}
.sc-skel-box .sk .ln{height:10px;border-radius:5px;
  background:linear-gradient(90deg,var(--sc-border) 25%,color-mix(in srgb,var(--sc-border) 40%,var(--sc-surface)) 37%,var(--sc-border) 63%);
  background-size:400% 100%;animation:sc-shim 1.4s ease infinite;}
.sc-skel-box .sk .w70{width:70%;}
.sc-skel-box .sk .w45{width:45%;}
.sc-skel-box .real{display:flex;flex-direction:column;gap:8px;font-size:12.5px;line-height:1.7;}
@keyframes sc-shim{0%{background-position:100% 50%;}100%{background-position:0 50%;}}

/* ---------- 动效总开关：偏好减弱时全部瞬时 ---------- */
@media (prefers-reduced-motion:reduce){
  .sc-root *,.sc-root *::after,.sc-root *::before{animation-duration:.01ms !important;transition-duration:.01ms !important;}
}
`;function ua(){return`
<div class="sc-root">
  <div class="sc-head">
    <div>
      <span class="sc-kicker">COMPONENT MATRIX · 26 件</span>
      <h2>组件矩阵</h2>
    </div>
    <p>同一套组件，活在一种范式里。下面每一个控件都可以直接操作——下拉、切换、拖滑块、弹窗、吐司。</p>
  </div>
  <div class="sc-grid">

    <div class="sc-cell"><h5>按钮 Buttons</h5>
      <div class="sc-row">
        <button class="sc-btn pri">主要操作</button>
        <button class="sc-btn">次要</button>
        <button class="sc-btn gho">幽灵</button>
        <button class="sc-btn dan">危险</button>
        <button class="sc-btn" disabled>禁用</button>
        <button class="sc-btn ico" aria-label="收藏">♡</button>
        <button class="sc-btn pri sm"><span class="sc-spin"></span>加载中</button>
      </div>
    </div>

    <div class="sc-cell"><h5>输入框 Input</h5>
      <div>
        <label class="sc-lbl">项目名称</label>
        <input class="sc-inp" type="text" placeholder="请输入…" value="范式展览馆" />
        <div class="sc-help">帮助文字：2–32 个字符</div>
      </div>
      <div>
        <input class="sc-inp err" type="text" value="非法字符 #" />
        <div class="sc-help err">只能包含字母、数字与连字符</div>
      </div>
    </div>

    <div class="sc-cell"><h5>文本域 Textarea</h5>
      <textarea class="sc-ta" maxlength="120" placeholder="说点什么…">按范式生成，不按默认味生成。</textarea>
      <div class="sc-count">0 / 120</div>
    </div>

    <div class="sc-cell"><h5>下拉框 Select</h5>
      <div class="sc-sel">
        <button class="sc-sel-btn" data-sc-toggle><span class="sc-sel-val">终端命令行</span><span class="car">▼</span></button>
        <div class="sc-sel-list">
          <div class="sc-sel-opt sel">终端命令行</div>
          <div class="sc-sel-opt">便当盒网格</div>
          <div class="sc-sel-opt">瑞士国际主义</div>
          <div class="sc-sel-opt">日式极简</div>
        </div>
      </div>
    </div>

    <div class="sc-cell w2"><h5>搜索框 Search</h5>
      <div class="sc-search">
        <span class="sc-ic">⌕</span>
        <input class="sc-inp" type="text" placeholder="搜索范式，试试输入「粗」或「b」…" />
        <div class="sc-sug">
          <div class="sc-sug-item">新粗野主义 Neo-Brutalism</div>
          <div class="sc-sug-item">包豪斯 Bauhaus</div>
          <div class="sc-sug-item">孟菲斯 Memphis</div>
          <div class="sc-sug-item">赛博朋克 Cyberpunk</div>
          <div class="sc-sug-item">玻璃拟态 Glassmorphism</div>
        </div>
      </div>
    </div>

    <div class="sc-cell"><h5>复选框 Checkbox</h5>
      <label class="sc-chk"><input type="checkbox" checked /><span class="sc-box"></span><span>邮件通知</span></label>
      <label class="sc-chk"><input type="checkbox" /><span class="sc-box"></span><span>短信提醒</span></label>
      <label class="sc-chk"><input type="checkbox" disabled /><span class="sc-box"></span><span>已停用项</span></label>
    </div>

    <div class="sc-cell"><h5>单选组 Radio</h5>
      <label class="sc-rad"><input type="radio" name="sc-r1" checked /><span class="sc-box"></span><span>自动模式</span></label>
      <label class="sc-rad"><input type="radio" name="sc-r1" /><span class="sc-box"></span><span>手动模式</span></label>
      <label class="sc-rad"><input type="radio" name="sc-r1" /><span class="sc-box"></span><span>只读模式</span></label>
    </div>

    <div class="sc-cell"><h5>开关 Switch</h5>
      <label class="sc-sw"><input type="checkbox" checked /><span class="tr"></span><span class="sc-sw-txt">已开启</span></label>
      <label class="sc-sw"><input type="checkbox" /><span class="tr"></span><span class="sc-sw-txt">已关闭</span></label>
    </div>

    <div class="sc-cell"><h5>滑块 Slider</h5>
      <div class="sc-col">
        <input class="sc-rng" type="range" min="0" max="100" value="64" />
        <div class="sc-row" style="justify-content:space-between">
          <span class="sc-note">字号缩放</span><span class="sc-rng-out">64%</span>
        </div>
      </div>
    </div>

    <div class="sc-cell"><h5>分段控制 Segmented</h5>
      <div class="sc-seg">
        <span class="sc-seg-ind"></span>
        <button class="sc-seg-b on">日</button><button class="sc-seg-b">周</button><button class="sc-seg-b">月</button>
      </div>
      <p class="sc-note">统计范围：本月</p>
    </div>

    <div class="sc-cell w2"><h5>标签页 Tabs</h5>
      <div data-sc-tabs>
        <div class="sc-tabs">
          <span class="sc-tab-ind"></span>
          <button class="sc-tab on">概览</button><button class="sc-tab">规范</button><button class="sc-tab">禁忌</button>
        </div>
        <div class="sc-pane on">概览：该范式以网格与无装饰排版建立秩序，适合内容优先的产品。</div>
        <div class="sc-pane">规范：12 列网格、单一无衬线字体族、左对齐、文字即图形。</div>
        <div class="sc-pane">禁忌：不用渐变、不用圆角卡片堆砌、不居中hero。</div>
      </div>
    </div>

    <div class="sc-cell w2"><h5>手风琴 Accordion</h5>
      <div data-sc-acc>
        <div class="sc-acc-item open">
          <div class="sc-acc-h">这个范式适合什么场景？<span class="chev">▼</span></div>
          <div class="sc-acc-b">内容型产品、文档站、编辑设计气质的品牌官网。</div>
        </div>
        <div class="sc-acc-item">
          <div class="sc-acc-h">怎么让 AI 不跑偏？<span class="chev">▼</span></div>
          <div class="sc-acc-b">整段粘贴范式提示词，并显式声明「不得混用其他风格」。</div>
        </div>
        <div class="sc-acc-item">
          <div class="sc-acc-h">可以混搭两种范式吗？<span class="chev">▼</span></div>
          <div class="sc-acc-b">可以，但一次只让一种范式主导布局，另一种只出现在局部组件。</div>
        </div>
      </div>
    </div>

    <div class="sc-cell"><h5>下拉菜单 Menu</h5>
      <div class="sc-menu">
        <button class="sc-btn" data-sc-toggle>操作 <span style="font-size:9px">▼</span></button>
        <div class="sc-menu-list">
          <div class="sc-menu-item">✎ 编辑</div>
          <div class="sc-menu-item">⧉ 复制链接</div>
          <div class="sc-menu-item">↗ 分享</div>
          <div class="sc-menu-item sep dan">🗑 删除</div>
        </div>
      </div>
      <p class="sc-note">点击按钮展开，点击空白处收起</p>
    </div>

    <div class="sc-cell"><h5>模态框 Modal</h5>
      <button class="sc-btn pri" data-sc-modal="sc-m1">打开对话框</button>
      <div class="sc-modal" id="sc-m1">
        <div class="sc-modal-bg" data-sc-modal-close></div>
        <div class="sc-modal-box">
          <h4>确认切换范式？</h4>
          <p>切换后，当前页面的布局、字体与色彩规范都会按新范式重新生成，未保存的改动将丢失。</p>
          <div class="sc-modal-foot">
            <button class="sc-btn sm" data-sc-modal-close>取消</button>
            <button class="sc-btn pri sm" data-sc-modal-close>确认切换</button>
          </div>
        </div>
      </div>
    </div>

    <div class="sc-cell"><h5>吐司 Toast</h5>
      <div class="sc-row">
        <button class="sc-btn sm" data-sc-toast="ok" data-msg="范式已保存">成功</button>
        <button class="sc-btn sm" data-sc-toast="warn" data-msg="该范式有 3 处待确认项">警告</button>
        <button class="sc-btn sm" data-sc-toast="err" data-msg="提示词格式不正确">错误</button>
      </div>
    </div>

    <div class="sc-cell"><h5>警告提示 Alert</h5>
      <div class="sc-col">
        <div class="sc-alert info"><span class="ic"></span><span>索引已更新至 28 件展品。</span></div>
        <div class="sc-alert ok"><span class="ic"></span><span>提示词复制成功。</span></div>
        <div class="sc-alert warn"><span class="ic"></span><span>渐变hero属于「AI 默认味」高危区。</span></div>
        <div class="sc-alert err"><span class="ic"></span><span>检测到混用风格：粗野 + 玻璃。</span></div>
      </div>
    </div>

    <div class="sc-cell"><h5>徽章 / 标签 Badge</h5>
      <div class="sc-row">
        <span class="sc-badge pri">主</span><span class="sc-badge ok">稳定</span>
        <span class="sc-badge warn">测试</span><span class="sc-badge err">弃用</span>
        <span class="sc-badge mut">v0.4</span>
      </div>
      <div class="sc-row">
        <span class="sc-tag">网格 <button class="x" aria-label="移除">×</button></span>
        <span class="sc-tag">无衬线 <button class="x" aria-label="移除">×</button></span>
        <span class="sc-tag">1950s <button class="x" aria-label="移除">×</button></span>
      </div>
    </div>

    <div class="sc-cell"><h5>头像 Avatar</h5>
      <div class="sc-row">
        <span class="sc-ava a">范式</span>
        <span class="sc-ava b">AI</span>
        <span class="sc-ava c">馆</span>
        <span class="sc-ava d">长</span>
      </div>
      <div class="sc-row">
        <span class="sc-ava-group">
          <span class="sc-ava sm a">甲</span><span class="sc-ava sm b">乙</span><span class="sc-ava sm c">丙</span>
          <span class="sc-ava sm" style="background:var(--sc-muted)">+9</span>
        </span>
        <span class="sc-ava sm a">在<span class="dot"></span></span>
      </div>
    </div>

    <div class="sc-cell"><h5>进度 Progress</h5>
      <div class="sc-col">
        <div class="sc-prog-row">
          <div class="sc-prog" data-pct="72"><div class="sc-prog-fill"></div></div>
          <span class="sc-prog-num">0%</span>
        </div>
        <button class="sc-btn sm" data-sc-prog=".sc-prog" data-pct="72">运行动画</button>
        <div class="sc-row" style="justify-content:center">
          <div class="sc-ring-wrap">
            <svg class="sc-ring" width="64" height="64" viewBox="0 0 64 64">
              <circle class="bgc" cx="32" cy="32" r="24"></circle>
              <circle class="fgc" cx="32" cy="32" r="24"></circle>
            </svg>
            <span class="sc-ring-num">65%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="sc-cell w2"><h5>步骤条 Stepper</h5>
      <div data-sc-steps>
        <div class="sc-steps">
          <div class="sc-step cur"><span class="no">1</span><small>选范式</small></div>
          <div class="sc-step"><span class="no">2</span><small>写需求</small></div>
          <div class="sc-step"><span class="no">3</span><small>生成</small></div>
          <div class="sc-step"><span class="no">4</span><small>验收</small></div>
        </div>
        <div class="sc-row" style="justify-content:space-between;margin-top:12px">
          <span class="sc-step-lbl">第 1 / 4 步</span>
          <span class="sc-row">
            <button class="sc-btn sm" data-sc-prev>上一步</button>
            <button class="sc-btn pri sm" data-sc-next>下一步</button>
          </span>
        </div>
      </div>
    </div>

    <div class="sc-cell"><h5>分页 Pagination</h5>
      <div class="sc-pg">
        <button class="sc-pg-b" disabled>‹</button>
        <button class="sc-pg-b on">1</button><button class="sc-pg-b">2</button>
        <button class="sc-pg-b">3</button><button class="sc-pg-b">…</button><button class="sc-pg-b">21</button>
        <button class="sc-pg-b">›</button>
      </div>
    </div>

    <div class="sc-cell"><h5>面包屑 Breadcrumb</h5>
      <div class="sc-crumb">
        <span class="lnk">展厅</span><span class="sep">/</span>
        <span class="lnk">布局范式</span><span class="sep">/</span>
        <span class="cur">便当盒网格</span>
      </div>
    </div>

    <div class="sc-cell"><h5>提示 Tooltip</h5>
      <div class="sc-row">
        <button class="sc-btn sm sc-tip" data-tip="悬停出现的说明">悬停我</button>
        <button class="sc-btn ico sc-tip" data-tip="这是什么意思？">?</button>
      </div>
    </div>

    <div class="sc-cell w2"><h5>数据表格 Table</h5>
      <table class="sc-tbl">
        <thead><tr>
          <th class="sort">范式 ⇅</th><th class="sort">编号 ⇅</th><th>标签</th><th class="sort">状态 ⇅</th>
        </tr></thead>
        <tbody>
          <tr><td>瑞士国际主义</td><td class="sc-mono">02</td><td>网格 · 无衬线</td><td><span class="sc-badge ok">stable</span></td></tr>
          <tr><td>新粗野主义</td><td class="sc-mono">03</td><td>粗边 · 硬阴影</td><td><span class="sc-badge ok">stable</span></td></tr>
          <tr><td>赛博朋克</td><td class="sc-mono">15</td><td>霓虹 · HUD</td><td><span class="sc-badge warn">beta</span></td></tr>
          <tr><td>手工纸艺</td><td class="sc-mono">12</td><td>噪点 · 剪贴</td><td><span class="sc-badge mut">draft</span></td></tr>
        </tbody>
      </table>
    </div>

    <div class="sc-cell"><h5>文件上传 Upload</h5>
      <div class="sc-file">
        <label class="sc-btn sm"><span>选择文件</span><input type="file" /></label>
        <span class="sc-file-name">未选择文件</span>
      </div>
    </div>

    <div class="sc-cell"><h5>骨架屏 Skeleton</h5>
      <div class="sc-skel-box" id="sc-skel-1">
        <div class="real"><b style="font-size:13px">范式展览馆</b><span class="sc-note">28 件展品 · 全部可交互</span></div>
        <div class="sk"><div class="ln"></div><div class="ln w70"></div><div class="ln w45"></div></div>
      </div>
      <button class="sc-btn sm" data-sc-skel="sc-skel-1">模拟加载</button>
    </div>

  </div>
  <div class="sc-toasts"></div>
</div>`}function xa(){return`
(function () {
  var $ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var on = function (el, ev, fn) { if (el) el.addEventListener(ev, fn); };

  /* 标签页（滑动指示条） */
  $('[data-sc-tabs]').forEach(function (box) {
    var tabs = $('.sc-tab', box), panes = $('.sc-pane', box);
    var ind = box.querySelector('.sc-tab-ind');
    var move = function (t) {
      if (!ind || !t) return;
      ind.style.width = t.offsetWidth + 'px';
      ind.style.transform = 'translateX(' + t.offsetLeft + 'px)';
    };
    tabs.forEach(function (t, i) {
      on(t, 'click', function () {
        tabs.forEach(function (x) { x.classList.remove('on'); });
        panes.forEach(function (x) { x.classList.remove('on'); });
        t.classList.add('on');
        if (panes[i]) panes[i].classList.add('on');
        move(t);
      });
    });
    move(box.querySelector('.sc-tab.on'));
    setTimeout(function () { move(box.querySelector('.sc-tab.on')); }, 350);
  });

  /* 手风琴 */
  $('[data-sc-acc] .sc-acc-h').forEach(function (h) {
    on(h, 'click', function () {
      var item = h.parentElement, was = item.classList.contains('open');
      $('[data-sc-acc] .sc-acc-item').forEach(function (x) { x.classList.remove('open'); });
      if (!was) item.classList.add('open');
    });
  });

  /* 弹层开关（下拉框 / 菜单） */
  $('[data-sc-toggle]').forEach(function (btn) {
    on(btn, 'click', function (e) {
      e.stopPropagation();
      var wrap = btn.closest('.sc-sel, .sc-menu');
      var opening = !wrap.classList.contains('sc-open');
      $('.sc-sel.sc-open, .sc-menu.sc-open').forEach(function (x) { x.classList.remove('sc-open'); });
      if (opening) wrap.classList.add('sc-open');
    });
  });
  $('.sc-sel-opt').forEach(function (opt) {
    on(opt, 'click', function () {
      var wrap = opt.closest('.sc-sel');
      var val = $('.sc-sel-val', wrap)[0];
      if (val) val.textContent = opt.textContent;
      $('.sc-sel-opt', wrap).forEach(function (x) { x.classList.remove('sel'); });
      opt.classList.add('sel');
      wrap.classList.remove('sc-open');
    });
  });

  /* 模态框 */
  $('[data-sc-modal]').forEach(function (b) {
    on(b, 'click', function () {
      var m = document.getElementById(b.getAttribute('data-sc-modal'));
      if (m) m.classList.add('show');
    });
  });
  $('[data-sc-modal-close]').forEach(function (b) {
    on(b, 'click', function () { b.closest('.sc-modal').classList.remove('show'); });
  });

  /* 吐司 */
  var toastBox = document.querySelector('.sc-toasts');
  $('[data-sc-toast]').forEach(function (b) {
    on(b, 'click', function () {
      var type = b.getAttribute('data-sc-toast') || 'ok';
      var msg = b.getAttribute('data-msg') || '操作完成';
      var t = document.createElement('div');
      t.className = 'sc-toast ' + type;
      var ic = document.createElement('span');
      ic.className = 'sc-toast-ic';
      var tx = document.createElement('span');
      tx.textContent = msg;
      t.appendChild(ic); t.appendChild(tx);
      if (toastBox) toastBox.appendChild(t);
      setTimeout(function () { t.classList.add('out'); }, 2200);
      setTimeout(function () { if (t.remove) t.remove(); }, 2700);
    });
  });

  /* 开关文字联动 */
  $('.sc-sw input').forEach(function (inp) {
    on(inp, 'change', function () {
      var lab = inp.parentElement.querySelector('.sc-sw-txt');
      if (lab) lab.textContent = inp.checked ? '已开启' : '已关闭';
    });
  });

  /* 滑块数值 */
  $('.sc-rng').forEach(function (r) {
    var out = r.parentElement.querySelector('.sc-rng-out');
    var upd = function () { if (out) out.textContent = r.value + '%'; };
    on(r, 'input', upd); upd();
  });

  /* 分段控制（滑动指示块） */
  $('.sc-seg').forEach(function (seg) {
    var ind = seg.querySelector('.sc-seg-ind');
    var move = function (b) {
      if (!ind || !b) return;
      ind.style.width = b.offsetWidth + 'px';
      ind.style.transform = 'translateX(' + b.offsetLeft + 'px)';
    };
    $('.sc-seg-b', seg).forEach(function (b) {
      on(b, 'click', function () {
        $('.sc-seg-b', seg).forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        move(b);
        var note = seg.parentElement.querySelector('.sc-note');
        if (note) note.textContent = '统计范围：本' + b.textContent;
      });
    });
    move(seg.querySelector('.sc-seg-b.on'));
    setTimeout(function () { move(seg.querySelector('.sc-seg-b.on')); }, 350);
  });

  /* 步骤条 */
  $('[data-sc-steps]').forEach(function (box) {
    var dots = $('.sc-step', box), idx = 0;
    var paint = function () {
      dots.forEach(function (d, i) {
        d.classList.toggle('done', i < idx);
        d.classList.toggle('cur', i === idx);
      });
      var lbl = box.querySelector('.sc-step-lbl');
      if (lbl) lbl.textContent = '第 ' + (idx + 1) + ' / ' + dots.length + ' 步';
    };
    dots.forEach(function (d, i) { on(d, 'click', function () { idx = i; paint(); }); });
    on(box.querySelector('[data-sc-next]'), 'click', function () { if (idx < dots.length - 1) { idx++; paint(); } });
    on(box.querySelector('[data-sc-prev]'), 'click', function () { if (idx > 0) { idx--; paint(); } });
    paint();
  });

  /* 分页 */
  $('.sc-pg').forEach(function (pg) {
    $('.sc-pg-b', pg).forEach(function (b) {
      on(b, 'click', function () {
        if (b.hasAttribute('disabled')) return;
        $('.sc-pg-b', pg).forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
      });
    });
  });

  /* 标签移除（缩小淡出后再移除） */
  $('.sc-tag .x').forEach(function (x) {
    on(x, 'click', function () {
      var t = x.parentElement;
      if (!t) return;
      t.style.opacity = '0';
      t.style.transform = 'scale(.82)';
      setTimeout(function () { if (t.remove) t.remove(); }, 200);
    });
  });

  /* 搜索建议 */
  $('.sc-search input').forEach(function (inp) {
    var box = inp.closest('.sc-search');
    var list = box ? box.querySelector('.sc-sug') : null;
    var filter = function () {
      var q = inp.value.trim().toLowerCase();
      $('.sc-sug-item', list).forEach(function (it) {
        it.style.display = !q || it.textContent.toLowerCase().indexOf(q) >= 0 ? '' : 'none';
      });
      if (list) list.classList.add('show');
    };
    on(inp, 'input', filter);
    on(inp, 'focus', filter);
  });

  /* 文本域计数 */
  $('.sc-ta').forEach(function (ta) {
    var count = ta.parentElement.querySelector('.sc-count');
    var upd = function () {
      if (count) count.textContent = ta.value.length + ' / ' + (ta.getAttribute('maxlength') || 120);
    };
    on(ta, 'input', upd); upd();
  });

  /* 文件上传名 */
  $('.sc-file input').forEach(function (inp) {
    on(inp, 'change', function () {
      var lab = inp.parentElement.parentElement.querySelector('.sc-file-name');
      if (lab) lab.textContent = inp.files && inp.files[0] ? inp.files[0].name : '未选择文件';
    });
  });

  /* 骨架屏切换 */
  $('[data-sc-skel]').forEach(function (b) {
    on(b, 'click', function () {
      var box = document.getElementById(b.getAttribute('data-sc-skel'));
      if (!box) return;
      box.classList.toggle('loading');
      b.textContent = box.classList.contains('loading') ? '加载完成' : '模拟加载';
    });
  });

  /* 进度动画 */
  $('[data-sc-prog]').forEach(function (b) {
    on(b, 'click', function () {
      var bar = document.querySelector(b.getAttribute('data-sc-prog'));
      if (!bar) return;
      var fill = bar.querySelector('.sc-prog-fill');
      var num = bar.parentElement.querySelector('.sc-prog-num');
      var pct = parseInt(bar.getAttribute('data-pct') || '72', 10);
      if (fill) fill.style.width = pct + '%';
      if (num) num.textContent = pct + '%';
    });
  });

  /* 点击空白收起弹层 */
  document.addEventListener('click', function (e) {
    $('.sc-sel.sc-open, .sc-menu.sc-open').forEach(function (el) {
      if (!el.contains(e.target)) el.classList.remove('sc-open');
    });
    $('.sc-sug.show').forEach(function (l) {
      if (!l.parentElement.contains(e.target)) l.classList.remove('show');
    });
  });
})();
`}const Tb={bg:"#ffffff",surface:"#ffffff",alt:"rgba(15,23,42,0.05)",text:"#0f172a",muted:"#64748b",primary:"#4f46e5",onPrimary:"#ffffff",border:"rgba(15,23,42,0.1)",radius:"12px",radiusLg:"16px",shadow:"0 4px 14px rgba(79,70,229,0.14)",font:'system-ui, -apple-system, "PingFang SC", sans-serif',mono:'ui-monospace, "SF Mono", Consolas, monospace',ok:"#10b981",warn:"#f59e0b",err:"#ef4444",info:"#3b82f6",focus:"#4f46e5",extraCss:".sc-btn.pri{background:linear-gradient(135deg,#4f46e5,#7c3aed);border-color:transparent;color:#fff;}"},kb={id:"generic-ai",no:"00",name:"AI 默认味",nameEn:"Generic AI Slop",tagline:"同样的需求丢给十个 AI，九个输出长这样。",origin:"训练数据里过剩的 Tailwind + shadcn 中位数审美",year:"2023 —",tags:["反面标本","Tailwind","渐变","Inter"],kind:"anti-pattern",bestFor:["反面教材：识别默认输出、提取负面约束写进提示词"],avoid:["任何正式项目的默认输出"],prompt:`# 反范式识别清单：「AI 默认味」（用于识别并规避）

如果你不给 AI 指定设计范式，它大概率会输出下面这种「安全但千篇一律」的页面。本清单两个用途：① 帮你一眼识别默认输出；② 作为负面约束写进你的提示词。

## 布局特征
- 居中 Hero 三件套：✨ 开头的徽章 → 渐变大标题 → 一行副标题 → 并排两个按钮（一个实色一个幽灵）
- 三等分 feature 卡：rounded-2xl + 白底 + shadow-lg，图标用 emoji 或通用线性图标
- 「Trusted by」灰度 logo 横排；结尾一个 slate-900 深色全宽 CTA 横幅
- 所有区块垂直堆叠、左右对称，没有任何一处打破网格

## 字体排印
- Inter / system-ui 一种字体打天下；标题一律居中；字重只有 400 / 600 / 700

## 色彩
- 靛蓝→紫渐变（indigo-500 → violet-600）出现在标题文字和主按钮上
- slate-900/600/500/200 四级灰 + 一个强调色，全场没有第三种颜色

## 质感
- 圆角 8-16px、shadow-lg、1px 浅灰描边——「三件套」
- 没有任何材质、纹理、印刷感或手工感

## 默认味组件与伪交互（病状清单）
不是规范，是快速判断「这是不是 AI 默认输出」的九个症状：

- 组件只有半个架子：主按钮 + 幽灵按钮 + 三张 feature 卡 + 一排灰度 logo，外加一个毫无状态可言的「假输入框」
- 六态缺失：没有 focus-visible（浏览器默认蓝圈照抄）、disabled 只是降透明度却仍可点击、压根没有 loading 与骨架屏
- 假交互：hover 清一色 -translate-y-0.5 + shadow-xl；active 与 hover 长得一模一样，按下去毫无手感
- 没有反馈层：没有模态框、没有吐司、没有提示条；表单提交后页面毫无反应，错误态不存在
- 下拉框交给原生 select 或直接不做：没有搜索建议、没有键盘操作（↑↓ / Enter / Esc）、没有空态
- 数据展示是死的：表格只有静态几行，没有排序、没有行选择、没有空态；进度条是纯装饰色块
- 动效：全场一个 transition-all duration-200 通吃，没有范式化的时长与缓动，更没有 prefers-reduced-motion
- 可访问性靠运气：对比度随缘，图标按钮没有 aria-label，焦点顺序错乱
- 出现以上任意三条即可判定为默认输出——请回馆里挑一个真正的范式，按它的「组件与交互规范」重做

## 规避写法（把这段加进你的提示词）
「不要居中 Hero 三件套、不要紫蓝渐变文字、不要 rounded-2xl + shadow-lg 三等分卡片、不要 emoji 当图标、不要 slate 灰阶；按下述我指定的范式执行。」`,spec:["识别特征：居中 Hero + 渐变标题 + 双按钮三件套","三等分 rounded-2xl 卡片，shadow-lg 阴影三件套","emoji 当功能图标，全场 Inter 一种字体","靛蓝→紫渐变 + slate 四级灰，深色 CTA 横幅收尾"],tokens:{colors:[{name:"纸白",value:"#ffffff"},{name:"靛蓝",value:"#4f46e5"},{name:"渐变",value:"#6366f1 → #8b5cf6"},{name:"墨",value:"#0f172a"},{name:"次文",value:"#64748b"}],fonts:[{role:"全场",stack:"Inter, system-ui, sans-serif"}],radius:"8-16px",shadow:"0 10px 15px -3px rgba(0,0,0,0.1)",extras:[{label:"图标",value:"emoji / lucide 通用线性图标"}]},demo:{height:1830,heightMobile:2520,html:da({title:"AI 默认味 · 反面标本",fonts:["Inter:wght@400;500;600;700"],css:pa(Tb)+`
body {
  font-family: Inter, system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #ffffff;
  color: #0f172a;
  -webkit-font-smoothing: antialiased;
}
.wrap { max-width: 1152px; margin: 0 auto; padding: 0 24px; }
nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 0; border-bottom: 1px solid #f1f5f9;
}
.logo { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 18px; }
.logo-mark { width: 30px; height: 30px; border-radius: 8px; background: linear-gradient(135deg, #6366f1, #8b5cf6); }
.nav-links { display: flex; gap: 28px; font-size: 14px; color: #64748b; }
.nav-links span { cursor: default; }
.btn {
  display: inline-flex; align-items: center; gap: 8px; border-radius: 8px;
  font-size: 14px; font-weight: 500; cursor: default; border: 1px solid transparent;
}
.btn-primary { background: #4f46e5; color: #fff; padding: 10px 18px; }
.btn-primary:hover { background: #4338ca; }
.btn-ghost { color: #334155; padding: 10px 18px; border-color: #e2e8f0; background: #fff; }
.hero { text-align: center; padding: 88px 0 72px; }
.badge {
  display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: #4f46e5;
  background: #eef2ff; border: 1px solid #e0e7ff; border-radius: 999px; padding: 6px 14px;
  margin-bottom: 24px; font-weight: 500;
}
h1 { font-size: 60px; line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; }
.grad {
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.sub { margin: 22px auto 0; max-width: 620px; font-size: 18px; line-height: 1.7; color: #64748b; }
.cta-row { margin-top: 36px; display: flex; gap: 14px; justify-content: center; }
.logos { padding: 40px 0 56px; border-top: 1px solid #f1f5f9; }
.logos-title { text-align: center; font-size: 12px; letter-spacing: 0.12em; color: #94a3b8; text-transform: uppercase; margin-bottom: 28px; }
.logos-row { display: flex; justify-content: center; gap: 56px; filter: grayscale(1); opacity: 0.55; font-weight: 700; font-size: 19px; color: #334155; }
.features { padding: 24px 0 80px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.card {
  background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
}
.card-icon { font-size: 26px; margin-bottom: 16px; }
.card h3 { font-size: 17px; font-weight: 600; margin-bottom: 10px; }
.card p { font-size: 14px; line-height: 1.7; color: #64748b; }
.banner {
  background: #0f172a; border-radius: 20px; padding: 64px 40px; text-align: center; color: #fff;
  margin-bottom: 72px;
}
.banner h2 { font-size: 34px; font-weight: 700; letter-spacing: -0.01em; }
.banner p { margin: 14px auto 30px; max-width: 520px; color: #94a3b8; font-size: 15px; line-height: 1.7; }
.btn-white { background: #fff; color: #0f172a; padding: 12px 22px; font-size: 15px; }
@media (max-width: 760px) {
  .nav-links { display: none; }
  h1 { font-size: 40px; }
  .features { grid-template-columns: 1fr; }
  .logos-row { gap: 24px; font-size: 15px; flex-wrap: wrap; }
  .hero { padding: 56px 0 48px; }
}`,body:`
<div class="wrap">
  <nav>
    <div class="logo"><div class="logo-mark"></div>Acme AI</div>
    <div class="nav-links"><span>产品</span><span>解决方案</span><span>文档</span><span>定价</span></div>
    <button class="btn btn-primary">免费开始</button>
  </nav>
  <section class="hero">
    <div class="badge">✨ 新功能：AI 助手已上线</div>
    <h1>用 <span class="grad">AI 驱动</span>的<br />方式团队增长</h1>
    <p class="sub">一站式智能平台，帮助你的团队更快地构建、部署和扩展现代应用。安全、可靠、开箱即用。</p>
    <div class="cta-row">
      <button class="btn btn-primary">免费开始 →</button>
      <button class="btn btn-ghost">观看演示</button>
    </div>
  </section>
  <section class="logos">
    <div class="logos-title">深受全球团队信赖</div>
    <div class="logos-row"><span>Vercel</span><span>Linear</span><span>Notion</span><span>Stripe</span><span>Figma</span></div>
  </section>
  <section class="features">
    <div class="card">
      <div class="card-icon">🚀</div>
      <h3>极速部署</h3>
      <p>全球边缘网络，一次推送即可在数秒内完成部署，无需关心基础设施。</p>
    </div>
    <div class="card">
      <div class="card-icon">⚡</div>
      <h3>智能分析</h3>
      <p>内置 AI 分析引擎，自动洞察业务数据，帮助你做出更明智的决策。</p>
    </div>
    <div class="card">
      <div class="card-icon">🔒</div>
      <h3>企业级安全</h3>
      <p>SOC2 与等保合规，端到端加密，细粒度权限控制，让数据固若金汤。</p>
    </div>
  </section>
  <section class="banner">
    <h2>准备好开始了吗？</h2>
    <p>加入超过 10,000 支团队的行列，免费试用 14 天，无需信用卡。</p>
    <button class="btn btn-white">立即注册</button>
  </section>
</div>${ua()}`,js:xa()})}},Nb={bg:"#f5f5f7",surface:"#ffffff",alt:"rgba(0,0,0,0.04)",text:"#1d1d1f",muted:"#86868b",primary:"#0071e3",onPrimary:"#ffffff",border:"rgba(0,0,0,0.08)",radius:"20px",radiusLg:"24px",shadow:"0 1px 2px rgba(0,0,0,0.05)",font:'system-ui, -apple-system, "PingFang SC", sans-serif',mono:'ui-monospace, "SF Mono", Consolas, monospace',ok:"#34c759",warn:"#ff9f0a",err:"#ff3b30",info:"#0071e3",focus:"#0071e3",extraCss:""},Cb={id:"bento",no:"01",name:"便当盒网格",nameEn:"Bento Grid",tagline:"像便当盒一样，把不同内容装进大小不一的格子里。",origin:"Apple 官网 / Linear / 日式便当盒",year:"2022 —",tags:["模块化","Apple 风","大圆角卡片","克制"],bestFor:["产品主页","个人 dashboard","功能总览页"],avoid:["重表单的后台","长文阅读场景"],prompt:`# 设计范式：便当盒网格（Bento Grid）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：Apple 官网式的模块化、温和、高级；内容像便当盒一样被装进一格一格
- 情绪关键词：整洁、呼吸感、克制、科技消费品

## 2. 布局
- 主体为 12 列网格，内容区 max-width 1080-1200px，居中
- 核心是 Bento 网格：大小不一的圆角卡片拼成完整矩形，允许跨格（2×2、2×1、1×1）
- 卡片间距 16-20px；页面级留白 80-120px；卡片内边距 20-24px
- 移动端全部降为单列堆叠，保持卡片顺序

## 3. 字体排印
- 字体：system-ui / -apple-system；数字一律 tabular-nums
- 层级：H1 40-56px/600；卡片标题 15-17px/600；正文 13-15px/400；辅助标签 11-12px/500 大写灰色
- 标题左对齐，行高 1.1-1.25

## 4. 色彩
- 背景 #f5f5f7；卡片 #ffffff；主文字 #1d1d1f；次文字 #86868b
- 强调色每屏最多一个（如 #0071e3），只用于小面积图标、关键数字和主按钮
- 渐变只允许出现在单个功能格内（如音乐/地图格），禁止整页渐变

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：跨格 Bento 卡片（1×1 / 2×1 / 2×2 混排、格子大小必须有节奏）与 iOS 开关
- 按钮：胶囊 999px；主按钮强调色实底无描边；hover 只做亮度 +4% 与 scale(1.02)，绝不允许方形
- 输入框：大圆角 12px、1px #d2d2d7 描边；聚焦时描边变强调色 + 3px 同色 12% 光环（是一圈「晕」，不是发光）
- 下拉框浮层：大圆角白色托盘 + 8px 内距，选中项带 ✓，从触发器下方 6px 滑入
- 开关：31×51px iOS 滑块、圆钮带小投影、ON 轨道变强调色——全场辨识度最高的控件
- 表格：放弃表格感——无边框、斑马纹 #f5f5f7、行高 44px，做成「设置页列表」的样子
- 图标：24px 线性放在 44px 圆形浅灰底上
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：提亮一档 + scale(1.02)，阴影由 0 1px 2px 升到 0 4px 10px
- active：scale(0.98)，阴影回落
- focus-visible：2px 强调色描边 + 3px 外扩（#0071e3 33% 透明度）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，200ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（200ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角堆叠，进入 translateY 12px→0 渐显，3s 自动消失，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 200ms（滑块类 240ms），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 圆角大（16-24px）、阴影极轻、无描边
- 每格元素左对齐；可有一格放 mini 图表（细条形或环形，单色）
- 头像/封面用低饱和渐变，仅此一处允许渐变

## 7. 禁忌
- 禁止整页紫蓝渐变、发光效果、斜体装饰
- 禁止卡片带彩色描边、禁止 emoji 当图标、禁止超过三种字号层级
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["Bento 网格：大小不一卡片拼成完整矩形，允许跨格","卡片：radius 20-24px、白底、1px 级轻阴影、无描边","主按钮胶囊形实色；图标置于圆形浅灰底上","每屏一个强调色；渐变仅限单个功能格"],tokens:{colors:[{name:"背景",value:"#f5f5f7"},{name:"卡片",value:"#ffffff"},{name:"主文字",value:"#1d1d1f"},{name:"次文字",value:"#86868b"},{name:"强调",value:"#0071e3"}],fonts:[{role:"全场",stack:'system-ui, -apple-system, "PingFang SC", sans-serif'}],radius:"20-24px（按钮 999px）",shadow:"0 1px 2px rgba(0,0,0,0.05)",extras:[{label:"卡片间距",value:"16-20px"},{label:"内边距",value:"20-24px"}]},demo:{height:1590,heightMobile:2680,html:da({title:"便当盒网格 · Bento Grid",css:pa(Nb)+`
body {
  font-family: system-ui, -apple-system, "SF Pro Text", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #f5f5f7; color: #1d1d1f; padding: 40px 24px 48px;
}
.shell { max-width: 1080px; margin: 0 auto; }
header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 28px; }
.brand { display: flex; align-items: center; gap: 10px; font-size: 16px; font-weight: 600; }
.brand-dot { width: 12px; height: 12px; border-radius: 50%; background: #1d1d1f; }
nav { display: flex; gap: 26px; font-size: 13px; color: #86868b; }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 152px); gap: 18px; }
.cell {
  background: #fff; border-radius: 22px; padding: 22px; position: relative; overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.cell .label { font-size: 11px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: #86868b; }
.profile { grid-column: 1 / 3; grid-row: 1 / 3; display: flex; flex-direction: column; }
.avatar {
  width: 56px; height: 56px; border-radius: 50%;
  background: linear-gradient(135deg, #5e5ce6, #bf5af2);
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 22px; font-weight: 600; margin: 14px 0 16px;
}
.profile h2 { font-size: 19px; font-weight: 600; }
.profile .role { font-size: 13px; color: #86868b; margin-top: 4px; }
.profile .bio { font-size: 13px; line-height: 1.7; color: #424245; margin-top: 12px; max-width: 380px; }
.follow {
  margin-top: auto; align-self: flex-start; background: #0071e3; color: #fff; border: none;
  font-size: 13px; font-weight: 500; padding: 9px 18px; border-radius: 999px; cursor: default;
}
.stats { grid-column: 3 / 5; grid-row: 1 / 2; display: flex; flex-direction: column; }
.stats-row { display: flex; gap: 40px; margin-top: auto; margin-bottom: 6px; }
.stat b { display: block; font-size: 23px; font-weight: 600; font-variant-numeric: tabular-nums; }
.stat span { font-size: 12px; color: #86868b; }
.weather { grid-column: 3 / 4; grid-row: 2 / 3; display: flex; flex-direction: column; }
.sun { margin: auto auto 6px; width: 34px; height: 34px; }
.weather b { font-size: 22px; font-weight: 600; font-variant-numeric: tabular-nums; }
.weather span { font-size: 12px; color: #86868b; }
.chart { grid-column: 4 / 5; grid-row: 2 / 4; display: flex; flex-direction: column; }
.bars { display: flex; align-items: flex-end; gap: 7px; flex: 1; margin: 14px 0 10px; }
.bars i { flex: 1; background: #0071e3; border-radius: 5px; opacity: 0.9; }
.bars i:last-child { opacity: 0.25; }
.music { grid-column: 1 / 4; grid-row: 3 / 4; display: flex; align-items: center; gap: 16px; }
.cover { width: 52px; height: 52px; border-radius: 12px; background: linear-gradient(135deg, #ff9f0a, #ff375f); flex: none; }
.music .meta { flex: 1; min-width: 0; }
.music b { display: block; font-size: 14px; font-weight: 600; }
.music span { font-size: 12px; color: #86868b; }
.track { height: 4px; background: #e8e8ed; border-radius: 2px; margin-top: 10px; position: relative; }
.track i { position: absolute; left: 0; top: 0; bottom: 0; width: 42%; background: #0071e3; border-radius: 2px; }
.play {
  width: 38px; height: 38px; border-radius: 50%; background: #f5f5f7; border: none; flex: none;
  display: flex; align-items: center; justify-content: center; cursor: default;
}
@media (max-width: 860px) {
  .grid { grid-template-columns: 1fr; grid-template-rows: none; }
  .cell { grid-column: auto !important; grid-row: auto !important; min-height: 140px; }
  .profile { min-height: 240px; }
  nav { display: none; }
}`,body:`
<div class="shell">
  <header>
    <div class="brand"><span class="brand-dot"></span>Bento Studio</div>
    <nav><span>作品</span><span>动态</span><span>收藏</span><span>关于</span></nav>
  </header>
  <div class="grid">
    <section class="cell profile">
      <div class="label">Profile</div>
      <div class="avatar">满</div>
      <h2>林小满</h2>
      <div class="role">产品设计师 · 上海</div>
      <p class="bio">白天画界面，晚上做便当。相信好的设计像好的便当——食材不必昂贵，但摆盘要呼吸。</p>
      <button class="follow">关注</button>
    </section>
    <section class="cell stats">
      <div class="label">数据概览</div>
      <div class="stats-row">
        <div class="stat"><b>12.8k</b><span>关注者</span></div>
        <div class="stat"><b>86</b><span>作品</span></div>
        <div class="stat"><b>24.1k</b><span>获赞</span></div>
      </div>
    </section>
    <section class="cell weather">
      <div class="label">天气</div>
      <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="#ff9f0a" stroke-width="1.5" stroke-linecap="round">
        <circle cx="12" cy="12" r="4.5"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>
      </svg>
      <b>22°</b><span>晴 · 空气优</span>
    </section>
    <section class="cell chart">
      <div class="label">本周活跃</div>
      <div class="bars"><i style="height: 38%"></i><i style="height: 55%"></i><i style="height: 44%"></i><i style="height: 70%"></i><i style="height: 60%"></i><i style="height: 88%"></i><i style="height: 100%"></i></div>
      <span style="font-size:12px;color:#86868b">周一 → 周日</span>
    </section>
    <section class="cell music">
      <div class="cover"></div>
      <div class="meta">
        <b>夜航西飞</b>
        <span>海边的西塞罗 · 单曲循环</span>
        <div class="track"><i></i></div>
      </div>
      <button class="play">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="#1d1d1f"><path d="M3 1.5v11l9-5.5z"/></svg>
      </button>
    </section>
  </div>
</div>${ua()}`,js:xa()})}},Ab={bg:"#ffffff",surface:"#ffffff",alt:"rgba(17,17,17,0.05)",text:"#111111",muted:"#777777",primary:"#e30613",onPrimary:"#ffffff",border:"#111111",radius:"0px",radiusLg:"0px",shadow:"none",font:'Helvetica, Arial, "PingFang SC", sans-serif',mono:'ui-monospace, "SF Mono", Consolas, monospace',ok:"#111111",warn:"#e30613",err:"#e30613",info:"#111111",focus:"#e30613",extraCss:".sc-btn{text-transform:uppercase;letter-spacing:0.1em;border-width:1.5px;border-radius:0;}.sc-cell{border-radius:0;}.sc-inp,.sc-ta,.sc-sel-btn{border-radius:0;}.sc-head h2{text-transform:uppercase;letter-spacing:-0.01em;}"},Ob={id:"swiss",no:"02",name:"瑞士国际主义",nameEn:"Swiss Style",tagline:"网格即真理：Helvetica、红与黑、左对齐的锋利层次。",origin:"Müller-Brockmann / 1950s 苏黎世派",year:"1950s —",tags:["网格","Helvetica","红黑","海报感"],bestFor:["作品集首页","展览/活动页","强立场的内容站"],avoid:["购物类重交互","可爱/亲和向产品"],prompt:`# 设计范式：瑞士国际主义（Swiss / International Typographic Style）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：客观、理性、锋利；设计让位于信息本身
- 情绪关键词：秩序、克制、经典、现代主义

## 2. 布局
- 严格 12 列网格，所有元素贴齐网格线；页边距 48-64px
- 大字号反差制造层级：标题与正文字号比至少 4:1
- 左对齐（flush left / ragged right）为主，仅仪式性元素居中
- 用 1px 黑线（而非卡片和阴影）分割信息；线即边框

## 3. 字体排印
- 字体：Helvetica Neue / Helvetica / Inter / Arial，全场无衬线
- 标题 64-120px、字重 700、字距 -0.02em、行高 1.0-1.1
- 小标签：11-12px 大写 + letter-spacing 0.12em
- 正文 13-15px、行高 1.6、多栏时间距 24px 以上并加栏间线

## 4. 色彩
- 只有三色：纸白 #ffffff、墨黑 #111111、信号红 #e30613
- 红色只用于一个焦点（一个词、一块、一条线），面积不超过 5%
- 灰阶仅用于图片占位与极次要信息

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：编号系统——每个组件/区块带 01/02/03 编号或红色 4px 方块坐标记号
- 按钮：矩形黑块白字，hover 仅黑→红换色（零位移零缩放），像换了一页印刷
- 输入框：只有底部 1.5px 黑线 + 10px 大写宽字距标签；聚焦线变红变粗
- 下拉框浮层：直角、1.5px 黑边、零阴影零圆角——纯线框，像表格的延伸
- 开关：禁止拟物滑块——用 [ 开 ] [ 关 ] 文字按钮 + 红色实心方块指示当前项
- 表格：上下 1.5px 黑线夹表头、行线 0.5px、数字右对齐——报纸行情栏的味道
- 分隔：1.5px 横贯线 + 红色 4px 竖条是唯二装饰
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：颜色反转（黑↔白 / 白↔红），不做位移不做缩放
- active：色块再反转半档或不变化，仅 keyboard 态切换
- focus-visible：1.5px 红色实线框外扩 3px，不允许浏览器中默认的虚蓝圈；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，120ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（120ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角堆叠的黑色直角信息条，无入场位移，直接出现并在 3s 后直线淡出
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 120ms（瑞士摈弃多余动效，能不做就不做），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 零圆角（或 2px 以内）、零阴影、零渐变
- 大量留白与密排文字并置，制造张力
- 竖排或大角度旋转文字仅作一处点睛

## 7. 禁忌
- 禁止渐变、圆角卡片、阴影、玻璃拟态
- 禁止居中大标题Hero、禁止装饰性插画、禁止超过三种颜色
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["12 列网格贴齐，1px 黑线分割，零圆角零阴影","标题 64-120px / 700 / -0.02em，左对齐","三色系统：纸白 / 墨黑 / 信号红（红 ≤5% 面积）","编号 01 02 03 + 小标签大写宽字距"],tokens:{colors:[{name:"纸白",value:"#ffffff"},{name:"墨黑",value:"#111111"},{name:"信号红",value:"#e30613"},{name:"占位灰",value:"#d9d9d9"}],fonts:[{role:"全场",stack:'"Helvetica Neue", Helvetica, Inter, Arial, "PingFang SC", sans-serif'}],radius:"0-2px",shadow:"无",extras:[{label:"网格",value:"12 列 / 间距 24px"},{label:"分割线",value:"1px solid #111"}]},demo:{height:1710,heightMobile:2580,html:da({title:"瑞士国际主义 · Swiss Style",css:pa(Ab)+`
body {
  font-family: "Helvetica Neue", Helvetica, Inter, Arial, "PingFang SC", "Hiragino Sans GB", sans-serif;
  background: #fff; color: #111; padding: 44px 52px 40px;
}
.shell { max-width: 1120px; margin: 0 auto; }
.topbar { display: flex; justify-content: space-between; align-items: baseline; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
.topbar .no { color: #e30613; }
.rule { border: none; border-top: 1px solid #111; margin: 14px 0 0; }
.hero { display: grid; grid-template-columns: 12fr 5fr; gap: 48px; padding: 56px 0 48px; position: relative; }
.eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 20px; }
.eyebrow em { font-style: normal; color: #e30613; }
h1 { font-size: 108px; font-weight: 700; letter-spacing: -0.03em; line-height: 0.98; }
h1 .red { color: #e30613; }
.en { margin-top: 22px; font-size: 15px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
.hero-side { border-left: 1px solid #111; padding-left: 28px; display: flex; flex-direction: column; justify-content: space-between; }
.hero-side p { font-size: 13px; line-height: 1.75; }
.hero-side p + p { margin-top: 14px; }
.figure { background: #d9d9d9; aspect-ratio: 4 / 3; display: flex; align-items: center; justify-content: center; }
.figure svg { width: 44px; height: 44px; }
.cols { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #111; }
.col { padding: 26px 26px 30px; font-size: 12.5px; line-height: 1.8; }
.col + .col { border-left: 1px solid #111; }
.col h3 { font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px; }
.col p + p { margin-top: 10px; }
.bottom { display: grid; grid-template-columns: 5fr 7fr; border-top: 1px solid #111; }
.big-no { font-size: 150px; font-weight: 700; line-height: 1; letter-spacing: -0.04em; padding: 24px 32px 8px 0; }
.big-no span { color: #e30613; }
.meta { border-left: 1px solid #111; padding: 26px 0 26px 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 22px; align-content: start; }
.meta h4 { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #111; margin-bottom: 6px; }
.meta p { font-size: 12.5px; line-height: 1.7; }
footer { display: flex; justify-content: space-between; border-top: 1px solid #111; margin-top: 0; padding: 16px 0 0; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
@media (max-width: 860px) {
  body { padding: 28px 22px; }
  h1 { font-size: 52px; }
  .hero { grid-template-columns: 1fr; gap: 28px; }
  .hero-side { border-left: none; border-top: 1px solid #111; padding: 22px 0 0; }
  .cols { grid-template-columns: 1fr; }
  .col + .col { border-left: none; border-top: 1px solid #111; }
  .bottom { grid-template-columns: 1fr; }
  .big-no { font-size: 88px; padding-right: 0; }
  .meta { border-left: none; border-top: 1px solid #111; padding: 22px 0 4px; grid-template-columns: 1fr; }
}`,body:`
<div class="shell">
  <div class="topbar"><span>Neue Grafik · 新平面</span><span class="no">№ 04 — 2026</span></div>
  <hr class="rule" />
  <section class="hero">
    <div>
      <div class="eyebrow">瑞士国际主义 <em>/ Swiss Style</em></div>
      <h1>网格<br />即<span class="red">真理</span></h1>
      <div class="en">Form follows function — Zürich, 1958</div>
    </div>
    <div class="hero-side">
      <div>
        <p>客观性是这套方法的核心：设计师不表达自我，而是让信息以最高的清晰度被看见。</p>
        <p>网格不是限制，而是让复杂内容获得秩序的脚手架。留白与密排的并置，制造阅读的张力。</p>
      </div>
      <div class="figure">
        <svg viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1">
          <rect x="2" y="2" width="20" height="20" />
          <path d="M2 9h20M2 15h20M9 2v20M15 2v20" />
        </svg>
      </div>
    </div>
  </section>
  <section class="cols">
    <div class="col">
      <h3>01 / 网格</h3>
      <p>十二列网格，贴齐是纪律。任何元素的边界都必须落在网格线上，没有例外。</p>
      <p>栏间距 24px，页边距 52px。页面即系统。</p>
    </div>
    <div class="col">
      <h3>02 / 字体</h3>
      <p>Helvetica 一种字体承担全部层级。字号与字重的反差代替装饰。</p>
      <p>左对齐、右不齐。小标签大写、宽字距，作为呼吸的标点。</p>
    </div>
    <div class="col">
      <h3>03 / 色彩</h3>
      <p>纸白、墨黑、信号红。红色是标点，不是装饰——全场只出现一次。</p>
      <p>没有渐变，没有阴影，没有第四种颜色。</p>
    </div>
  </section>
  <section class="bottom">
    <div class="big-no">0<span>4</span></div>
    <div class="meta">
      <div><h4>本期主题</h4><p>秩序的复归：当信息过载时，网格是最温和的答案。</p></div>
      <div><h4>展期</h4><p>2026.11.01 — 12.15<br />周二至周日 10:00 — 18:00</p></div>
      <div><h4>地点</h4><p>上海 · 西岸艺术中心 B2 展厅</p></div>
      <div><h4>票务</h4><p>预约免费 · 现场 ￥60</p></div>
    </div>
  </section>
  <footer><span>Paradigm Hall</span><span>Print · Web · Grid</span></footer>
</div>${ua()}`,js:xa()})}},Mb={bg:"#fffdf7",surface:"#ffffff",alt:"rgba(15,15,15,0.05)",text:"#0f0f0f",muted:"#6b6b6b",primary:"#0f0f0f",onPrimary:"#fffdf7",border:"#0f0f0f",radius:"4px",radiusLg:"8px",shadow:"5px 5px 0 #0f0f0f",font:'"Helvetica Neue", Arial, "PingFang SC", sans-serif',mono:'ui-monospace, "SF Mono", Consolas, monospace',ok:"#8ac926",warn:"#ffd23f",err:"#ff6b6b",info:"#3a86ff",focus:"#3a86ff",extraCss:".sc-cell{border-width:3px;}.sc-btn{border-width:3px;box-shadow:4px 4px 0 #0f0f0f;text-transform:uppercase;font-weight:700;}.sc-btn:hover{transform:translate(1px,1px);box-shadow:3px 3px 0 #0f0f0f;}.sc-btn:active{transform:translate(4px,4px);box-shadow:0 0 0 #0f0f0f;}.sc-btn.pri{background:#3a86ff;border-color:#0f0f0f;color:#fff;box-shadow:4px 4px 0 #0f0f0f;}.sc-inp,.sc-ta,.sc-sel-btn{border-width:3px;}.sc-badge{border:2px solid #0f0f0f;border-radius:0;}.sc-tag{border-width:2px;border-radius:0;}.sc-ava{border:2px solid #0f0f0f;}"},_b={id:"neo-brutalism",no:"03",name:"新粗野主义",nameEn:"Neo-Brutalism",tagline:"粗黑边、硬阴影、糖果色——故意「没做完」的张扬。",origin:"粗野主义建筑 / Gumroute 式网页 / Y2K 复兴",year:"2020 —",tags:["粗边框","硬阴影","高饱和","张扬"],bestFor:["创意机构站","活动页","面向 Z 世代的产品"],avoid:["金融/医疗等严肃场景","信息密集的后台"],prompt:`# 设计范式：新粗野主义（Neo-Brutalism）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质： raw、直给、带点「没做完」的酷；像贴在墙上的传单
- 情绪关键词：张扬、糖果色、街头、年轻

## 2. 布局
- 元素之间故意「顶」在一起：大块、大间距、强对比
- 允许轻微旋转（-2deg ~ 2deg）和层叠压住，制造拼贴感
- 页面分区用粗黑边框的盒子，盒子即布局

## 3. 字体排印
- 标题：Archivo Black / Arial Black / 思源黑体 Heavy，48-80px，可全大写
- 正文：同族 14-16px，行高 1.6
- 数字与标签可用等宽字体点缀

## 4. 色彩
- 底色：纸白 #fffdf7 或纯白；主色：墨黑 #0f0f0f
- 糖果色只做「面」：黄 #ffd23f、粉 #ff8fab、蓝 #3a86ff、绿 #8ac926
- 彩色只涂在重点盒子和主按钮上，一屏不超过三种糖果色

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：贴纸徽章（±5° 旋转、糖果底、黑边、★ / NEW!）与「硬阴影按压」手感
- 按钮：糖果色 + 3px 黑边 + 5px 硬阴影；hover 位移 -2px 且阴影变 7px（拎起）；active 归位贴边（按下）
- 输入框：白底 3px 黑边 + 4px 硬阴影；聚焦边框变糖果蓝、光标加粗
- 下拉框浮层：与输入框同款黑边硬阴影再偏移 6px，像第二张卡片叠上来
- 开关：黑框轨道 + 糖果色方形钮，无圆角无弹性
- 模态框：黑粗框 + 8px 硬阴影 + 糖果标题条 + 45° 斜纹遮罩
- 表格：2px 黑线全框、表头柠檬黄、行 hover 糖果粉
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：位移 -2px / -3px，同时硬阴影加 2px（像被拎起来）
- active：回到原位、阴影归零（像被按回桌面）
- focus-visible：2px 黑色虚线框外扩 3px；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，140ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（140ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角叠放，从右侧 16px 处滑入且伴随 0.18s 弹跳感，3s 后原路退出，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 140ms（弹跳缓动 cubic-bezier(.34,1.56,.64,1)），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 阴影全部是 offset 硬阴影，禁止模糊阴影和渐变
- 分隔用粗黑线或双线；可以用波点/斜纹底纹做局部背景
- 图标：实心粗形或 2px 以上线性，不用细线图标

## 7. 禁忌
- 禁止渐变、玻璃拟态、柔和模糊阴影、低饱和莫兰迪色
- 禁止细线（<2px）描边、禁止精致的小圆角（>12px）
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["2-3px 黑边 + offset 硬阴影（0 模糊），禁用柔影","hover 位移 2px、阴影收紧；active 贴边","糖果色只做面：黄/粉/蓝/绿，一屏 ≤3 种","允许 ±2° 旋转与层叠，制造拼贴感"],tokens:{colors:[{name:"纸白",value:"#fffdf7"},{name:"墨黑",value:"#0f0f0f"},{name:"糖果黄",value:"#ffd23f"},{name:"泡泡粉",value:"#ff8fab"},{name:"电子蓝",value:"#3a86ff"}],fonts:[{role:"标题",stack:'"Archivo Black", "Arial Black", "PingFang SC", sans-serif'}],radius:"卡片 0-6px / 按钮 10px",shadow:"5px 5px 0 #0f0f0f（硬阴影）",extras:[{label:"边框",value:"2-3px solid #0f0f0f"}]},demo:{height:1730,heightMobile:2660,html:da({title:"新粗野主义 · Neo-Brutalism",fonts:["Archivo+Black"],css:pa(Mb)+`
body {
  font-family: "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", sans-serif;
  background: #fffdf7; color: #0f0f0f; padding: 40px 28px 48px;
  background-image: radial-gradient(#0f0f0f 1px, transparent 1px);
  background-size: 26px 26px;
}
.shell { max-width: 1060px; margin: 0 auto; }
.topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 34px; }
.logo {
  background: #ffd23f; border: 3px solid #0f0f0f; box-shadow: 5px 5px 0 #0f0f0f;
  font-family: "Archivo Black", "Arial Black", sans-serif; font-size: 20px;
  padding: 10px 18px; transform: rotate(-1.5deg);
}
.navlink { font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.06em; margin-left: 22px; cursor: default; }
.hero {
  background: #fff; border: 3px solid #0f0f0f; box-shadow: 8px 8px 0 #0f0f0f;
  padding: 44px 40px 40px; position: relative; margin-bottom: 44px;
}
.hero .sticker {
  position: absolute; top: -18px; right: 26px; background: #ff8fab; border: 3px solid #0f0f0f;
  box-shadow: 3px 3px 0 #0f0f0f; font-family: "Archivo Black", sans-serif; font-size: 13px;
  padding: 6px 12px; transform: rotate(3deg);
}
.hero h1 { font-family: "Archivo Black", "Arial Black", sans-serif; font-size: 56px; line-height: 1.02; text-transform: uppercase; letter-spacing: -0.01em; }
.hero h1 .hl { background: #ffd23f; padding: 0 10px; border: 3px solid #0f0f0f; display: inline-block; transform: rotate(-1deg); }
.hero p { margin: 20px 0 28px; font-size: 15px; line-height: 1.65; max-width: 560px; font-weight: 500; }
.btn {
  display: inline-block; font-family: "Archivo Black", sans-serif; font-size: 15px; text-transform: uppercase;
  border: 3px solid #0f0f0f; box-shadow: 5px 5px 0 #0f0f0f; padding: 13px 26px; cursor: default;
  transition: transform 0.08s, box-shadow 0.08s;
}
.btn:hover { transform: translate(2px, 2px); box-shadow: 3px 3px 0 #0f0f0f; }
.btn:active { transform: translate(5px, 5px); box-shadow: 0 0 0 #0f0f0f; }
.btn-blue { background: #3a86ff; color: #fff; }
.btn-white { background: #fff; color: #0f0f0f; margin-left: 14px; }
.pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; align-items: start; }
.plan {
  background: #fff; border: 3px solid #0f0f0f; box-shadow: 6px 6px 0 #0f0f0f; padding: 26px 24px;
}
.plan h3 { font-family: "Archivo Black", sans-serif; font-size: 22px; text-transform: uppercase; }
.plan .price { font-family: "Archivo Black", sans-serif; font-size: 44px; margin: 12px 0 4px; font-variant-numeric: tabular-nums; }
.plan .price small { font-size: 14px; font-weight: 700; }
.plan ul { list-style: none; margin: 18px 0 22px; }
.plan li { font-size: 13.5px; font-weight: 500; padding: 8px 0 8px 4px; border-bottom: 2px dashed #0f0f0f; }
.plan li::before { content: "■ "; color: #3a86ff; }
.plan.featured { background: #8ac926; transform: rotate(-1.2deg) scale(1.03); position: relative; }
.plan.featured .tag {
  position: absolute; top: -16px; left: 50%; transform: translateX(-50%) rotate(2deg);
  background: #0f0f0f; color: #ffd23f; font-family: "Archivo Black", sans-serif; font-size: 12px;
  padding: 5px 14px; border: 3px solid #0f0f0f; white-space: nowrap;
}
.formrow { display: flex; gap: 16px; margin-top: 44px; flex-wrap: wrap; }
.field { flex: 1; min-width: 220px; }
.field label { display: block; font-family: "Archivo Black", sans-serif; font-size: 13px; text-transform: uppercase; margin-bottom: 8px; }
.field input, .field select {
  width: 100%; font: inherit; font-size: 14px; padding: 12px 14px; background: #fff;
  border: 3px solid #0f0f0f; box-shadow: 4px 4px 0 #0f0f0f; outline: none;
}
.field input:focus { border-color: #3a86ff; }
@media (max-width: 860px) {
  .pricing { grid-template-columns: 1fr; }
  .plan.featured { transform: none; }
  .hero h1 { font-size: 36px; }
  .btn-white { margin-left: 0; margin-top: 12px; }
}`,body:`
<div class="shell">
  <div class="topbar">
    <div class="logo">BRUTAL.CO</div>
    <div><span class="navlink">产品</span><span class="navlink">定价</span><span class="navlink">骂我们</span></div>
  </div>
  <section class="hero">
    <div class="sticker">★ 全新上线</div>
    <h1>别<span class="hl">再忍受</span><br />无聊的界面</h1>
    <p>我们做了一套「故意很吵」的设计工具。粗边框、硬阴影、糖果色——让你的产品在一秒钟内被记住，而不是又一张 Tailwind 脸。</p>
    <span class="btn btn-blue">立即开骂</span>
    <span class="btn btn-white">看看作品</span>
  </section>
  <section class="pricing">
    <div class="plan">
      <h3>个人版</h3>
      <div class="price">￥0<small> /月</small></div>
      <ul>
        <li>3 个项目</li>
        <li>全部 48 个组件</li>
        <li>社区支持</li>
      </ul>
      <span class="btn btn-white" style="margin-left:0">开始白嫖</span>
    </div>
    <div class="plan featured">
      <div class="tag">最受欢迎 ★</div>
      <h3>专业版</h3>
      <div class="price">￥39<small> /月</small></div>
      <ul>
        <li>无限项目</li>
        <li>粗野主题生成器</li>
        <li>优先支持（真的优先）</li>
      </ul>
      <span class="btn btn-blue">现在就买</span>
    </div>
    <div class="plan">
      <h3>团队版</h3>
      <div class="price">￥129<small> /月</small></div>
      <ul>
        <li>5 个席位</li>
        <li>设计规范托管</li>
        <li>专属客服（会骂人那种）</li>
      </ul>
      <span class="btn btn-white" style="margin-left:0">联系我们</span>
    </div>
  </section>
  <div class="formrow">
    <div class="field">
      <label>你的邮箱</label>
      <input type="text" placeholder="hi@brutal.co" />
    </div>
    <div class="field">
      <label>想多吵？</label>
      <select><option>稍微有点吵</option><option>非常吵</option><option>吵到报警</option></select>
    </div>
    <div class="field" style="flex:0 0 auto; display:flex; align-items:flex-end">
      <span class="btn btn-blue" style="white-space:nowrap">订阅 →</span>
    </div>
  </div>
</div>${ua()}`,js:xa()})}},jb={bg:"rgba(255,255,255,0.07)",surface:"rgba(255,255,255,0.09)",alt:"rgba(255,255,255,0.06)",text:"#f1f5f9",muted:"#94a3b8",primary:"#a78bfa",onPrimary:"#1e1b4b",border:"rgba(255,255,255,0.16)",radius:"16px",radiusLg:"22px",shadow:"0 8px 32px rgba(0,0,0,0.25)",font:'system-ui, -apple-system, "PingFang SC", sans-serif',mono:'ui-monospace, "SF Mono", Consolas, monospace',ok:"#34d399",warn:"#fbbf24",err:"#f87171",info:"#22d3ee",focus:"#a78bfa",extraCss:".sc-root{backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);}.sc-cell{backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-color:rgba(255,255,255,0.2);}.sc-btn.pri{background:linear-gradient(135deg,rgba(167,139,250,0.9),rgba(6,182,212,0.9));border-color:rgba(255,255,255,0.25);color:#fff;}"},Db={id:"glass",no:"04",name:"玻璃拟态",nameEn:"Glassmorphism",tagline:"半透明磨砂层叠在鲜艳光斑上——轻盈，但别滥用。",origin:"Fluent Design / macOS 控制中心 / Dribbble 2020",year:"2020 —",tags:["磨砂","半透明","光斑","层次"],bestFor:["音乐/播客播放器","hero 上的浮层","深色氛围页"],avoid:["信息密集表单","长列表","低对比度场景"],prompt:`# 设计范式：玻璃拟态（Glassmorphism）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：轻盈、通透、有空气感；像磨砂玻璃压在鲜艳背景上
- 情绪关键词：未来、柔和、层次、氛围

## 2. 布局
- 背景必须是「有东西可透」的：2-3 个大面积饱和色斑（radial-gradient，尺寸 ≥ 40% 视口）
- 内容放在 1-3 层玻璃卡片上，允许轻微层叠错位（8-16px）
- 玻璃卡之间不重叠文字区；主卡居中或偏置，浮层小卡靠角

## 3. 字体排印
- 白色或近白文字，配 0 1px 2px rgba(0,0,0,0.2) 文字阴影保证可读
- 标题 28-40px/600；正文 14-15px/400、行高 1.6；辅助信息 rgba(255,255,255,0.65)

## 4. 色彩
- 背景：深色底（#0f172a 附近）+ 高饱和光斑（紫 #7c3aed、蓝 #3b82f6、粉 #ec4899、青 #06b6d4）
- 玻璃面：rgba(255,255,255,0.10-0.18)；描边：1px rgba(255,255,255,0.25-0.4)（上亮下暗更佳）
- 强调：白色或单一亮色，仅用于关键按钮与进度

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：双层玻璃面板——背景至少 3 个彩色 radial 光斑，必须能透过 blur「渗」进面板
- 按钮：主按钮白色实底深字，次按钮玻璃面（blur + 1px 25% 白边）；hover 提亮 8% + 上浮 2px
- 输入框：玻璃底 + 1px 25% 白边；聚焦白边加亮 + 4px 白色 15% 光环
- 下拉框浮层：blur(24px) 玻璃托盘 + 16px 圆角——浮层背后必须「看得见」光斑颜色
- 开关：玻璃轨道 + 白凸钮，ON 时泛青光
- 表格：行线 12% 白，hover 整行提亮一档
- 层次纪律：光斑 → 玻璃面板 → 玻璃控件，至少三层可辨识的透明度
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：玻璃面提亮 8% 并上浮 2px，配合 transition: background .2s, transform .2s
- active：scale(0.98) 且饱和度略降
- focus-visible：1.5px 白色描边 + 3px 外扩 rgba(255,255,255,.35)；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，220ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（220ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角堆叠，从下方 12px 淡入，3s 后向上淡出，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 220ms（拖尾感更重，模糊位移动作可放宽到 320ms），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 每层玻璃只做一件事；玻璃叠玻璃不超过 3 层
- 光斑要「透得出形状」：卡片背后必须有颜色变化
- 可加细高光线（inset 0 1px 0 rgba(255,255,255,0.25)）增强玻璃边缘

## 7. 禁忌
- 禁止玻璃上再放玻璃超过三层、禁止白底大区块、禁止低对比灰字
- 禁止硬阴影、粗黑边、大面积磨砂导致的文字发虚
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["背景 2-3 个饱和 radial 光斑，玻璃必须「透得出颜色」","玻璃卡：blur(16-24px) + 半透明面 + 1px 上亮描边","大面积柔影 0 8px 32px；玻璃叠层 ≤3","白色文字 + 微文字阴影；每层只做一件事"],tokens:{colors:[{name:"深底",value:"#0f172a"},{name:"玻璃面",value:"rgba(255,255,255,0.14)"},{name:"描边",value:"rgba(255,255,255,0.35)"},{name:"光斑紫",value:"#7c3aed"},{name:"光斑青",value:"#06b6d4"}],fonts:[{role:"全场",stack:'system-ui, -apple-system, "PingFang SC", sans-serif'}],radius:"20-28px",shadow:"0 8px 32px rgba(0,0,0,0.25)",extras:[{label:"模糊",value:"backdrop-filter: blur(20px) saturate(140%)"}]},demo:{height:1570,heightMobile:2260,html:da({title:"玻璃拟态 · Glassmorphism",css:pa(jb)+`
body {
  font-family: system-ui, -apple-system, "SF Pro Text", "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #fff;
  background:
    radial-gradient(42% 46% at 18% 22%, rgba(124, 58, 237, 0.85), transparent 70%),
    radial-gradient(38% 42% at 82% 18%, rgba(6, 182, 212, 0.8), transparent 70%),
    radial-gradient(46% 50% at 72% 84%, rgba(236, 72, 153, 0.7), transparent 70%),
    radial-gradient(36% 40% at 26% 82%, rgba(59, 130, 246, 0.65), transparent 70%),
    #0b1220;
}
/* 注意：自适应高度的 iframe 里 vh 以 iframe 自身为基准，会用「内容 = f(容器)」形成正反馈——演示里禁止用 vh 定尺寸 */
.stage { position: relative; min-height: 660px; padding: 34px; }
.glass {
  background: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.32);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.28);
  border-radius: 24px;
}
.player { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: min(430px, 86vw); padding: 26px; }
.player-head { display: flex; align-items: center; gap: 16px; }
.art {
  width: 76px; height: 76px; border-radius: 16px; flex: none;
  background: linear-gradient(135deg, #a78bfa, #22d3ee 60%, #f472b6);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5);
}
.player-head b { display: block; font-size: 18px; font-weight: 600; letter-spacing: 0.01em; }
.player-head span { font-size: 13px; color: rgba(255, 255, 255, 0.68); }
.badge-live {
  margin-left: auto; font-size: 10px; font-weight: 600; letter-spacing: 0.1em;
  background: rgba(255, 255, 255, 0.2); border: 1px solid rgba(255, 255, 255, 0.35);
  padding: 4px 9px; border-radius: 999px; display: flex; align-items: center; gap: 6px;
}
.badge-live i { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 8px #4ade80; }
.progress { margin-top: 22px; height: 5px; border-radius: 3px; background: rgba(255, 255, 255, 0.18); position: relative; }
.progress i { position: absolute; inset: 0 auto 0 0; width: 46%; border-radius: 3px; background: #fff; }
.time { display: flex; justify-content: space-between; font-size: 11px; color: rgba(255, 255, 255, 0.6); margin-top: 8px; font-variant-numeric: tabular-nums; }
.controls { display: flex; align-items: center; justify-content: center; gap: 22px; margin-top: 18px; }
.controls .ic { opacity: 0.8; cursor: default; }
.controls .play {
  width: 52px; height: 52px; border-radius: 50%; background: #fff; color: #0b1220;
  display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}
.chip {
  position: absolute; padding: 13px 18px; font-size: 13px; display: flex; align-items: center; gap: 10px;
}
.chip b { font-weight: 600; }
.chip small { display: block; font-size: 11px; color: rgba(255, 255, 255, 0.65); font-weight: 400; }
.weather { left: 5%; top: 16%; transform: rotate(-2deg); }
.weather .t { font-size: 24px; font-weight: 600; }
.msg { right: 4%; bottom: 12%; transform: rotate(1.5deg); max-width: 240px; }
.msg .dot { width: 30px; height: 30px; border-radius: 50%; background: linear-gradient(135deg, #f472b6, #a78bfa); flex: none; }
.tips { right: 6%; top: 14%; transform: rotate(2deg); }
@media (max-width: 760px) {
  .chip { display: none; }
  .player { width: 92vw; }
  .stage { min-height: 560px; }
}`,body:`
<div class="stage">
  <div class="glass chip weather">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fcd34d" stroke-width="1.5" stroke-linecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M19.4 4.6l-1.8 1.8M6.4 17.6l-1.8 1.8" />
    </svg>
    <div><span class="t">22°</span><small>晴 · 今夜有雨</small></div>
  </div>
  <div class="glass chip tips">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3.2"/></svg>
    <div><b>小提示</b><small>玻璃只能叠三层</small></div>
  </div>
  <div class="glass player">
    <div class="player-head">
      <div class="art"></div>
      <div>
        <b>夜航西飞</b>
        <span>海边的西塞罗 · 专辑《雾港》</span>
      </div>
      <div class="badge-live"><i></i>LIVE</div>
    </div>
    <div class="progress"><i></i></div>
    <div class="time"><span>1:24</span><span>3:02</span></div>
    <div class="controls">
      <svg class="ic" width="20" height="20" viewBox="0 0 20 20" fill="#fff"><path d="M4 3v14M8 10l9-7v14z" transform="scale(0.9)"/></svg>
      <div class="play">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#0b1220"><path d="M3 1.5v13l11-6.5z"/></svg>
      </div>
      <svg class="ic" width="20" height="20" viewBox="0 0 20 20" fill="#fff"><path d="M16 3v14M12 10L3 3v14z" transform="scale(0.9)"/></svg>
    </div>
  </div>
  <div class="glass chip msg">
    <div class="dot"></div>
    <div><b>阿满 关注了你</b><small>「同好」· 2 分钟前</small></div>
  </div>
</div>${ua()}`,js:xa()})}},Ub={bg:"#faf7f2",surface:"#fffdf8",alt:"rgba(26,26,26,0.04)",text:"#1a1a1a",muted:"#6b675f",primary:"#1a1a1a",onPrimary:"#faf7f2",border:"rgba(26,26,26,0.2)",radius:"2px",radiusLg:"4px",shadow:"none",font:'Georgia, "Times New Roman", "Songti SC", "SimSun", serif',mono:'Georgia, "Songti SC", serif',ok:"#4a7c59",warn:"#a6761d",err:"#8b2e2e",info:"#4a5d6b",focus:"#8b2e2e",extraCss:".sc-head h2{font-weight:400;font-style:italic;letter-spacing:0.01em;}.sc-cell{border-radius:2px;}.sc-btn{border-radius:2px;font-family:inherit;}.sc-inp,.sc-ta,.sc-sel-btn{border-radius:2px;font-family:inherit;}.sc-badge{border-radius:2px;}"},Hb={id:"editorial",no:"05",name:"杂志编辑风",nameEn:"Editorial",tagline:"衬线大标题、首字下沉、Pull quote——把网页当杂志排版。",origin:"印刷杂志 / The New Yorker / 独立媒体",year:"常青",tags:["衬线","分栏","首字下沉","书卷气"],bestFor:["长文阅读","品牌故事","新闻/专栏","作品集文字页"],avoid:["工具型产品","重表格后台"],prompt:`# 设计范式：杂志编辑风（Editorial）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：书卷气、慢节奏、印刷品的从容；网页是「一期杂志」而不是「一个仪表盘」
- 情绪关键词：优雅、可信、深度、安静

## 2. 布局
- 正文单栏 max-width 680-760px，行宽 65-75 字符；通栏图与引语可破栏
- 刊头（报头）：刊名 + 期号 + 日期，上下用双线框住
- 段落间距 20-28px，章节间用花饰或编号分隔，不用卡片
- 多栏仅用于短内容块（2-3 栏，栏间 1px 细线）

## 3. 字体排印
- 标题：衬线展示体（Playfair Display / Fraunces / Noto Serif SC），40-64px、700、行高 1.1
- 正文：衬线体 15-16px、行高 1.8-1.9；导语（dek）17-19px 浅一号
- 首字下沉：首段首字母 3-4 行高、左浮动
- 图注：12px 无衬线灰色；署名：11px 大写 + 宽字距

## 4. 色彩
- 纸色 #faf7f2 / 墨色 #1a1a1a / 次文 #6b675f
- 单一强调色（深红 #8b2e2e 或藏蓝），只用于链接、引号、编号

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：首字下沉（drop cap 2-3 行高）与栏目编号（壹 / 贰 / 叁）、花饰分隔 ❧
- 按钮：墨色矩形实底白字、大写 0.06em 字距；hover 黑白反转；绝无圆角与阴影
- 输入框：仅 1px 底线 + 衬线斜体标签；聚焦线变 2px 朱红
- 下拉框浮层：白纸直角 + 1px 墨线 + 行间 1px 分隔线，选项用衬线体——像目录页
- 开关：竖线分隔的「开 ｜ 关」文字，当前项黑体
- 引文：pull quote 上下 1px 细线 + 24-28px 衬线 + 「」引号
- 表格：表头上下双线、行线单线、衬线表头，像书末附录
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：色块反转（墨底白字 ↔ 白底墨字），0.18s，不做位移
- active：下沉 1px 内凹线
- focus-visible：1px 墨色虚线框，紧贴元素不外扩；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，180ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（180ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角墨色方块（白字），打字机式逐字淡入 0.24s，停留 3s 后整块淡出
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 180ms（翻页式动作可到 300ms），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 纸感底色（微暖灰白），可用极淡的噪点纹理
- 大量留白：页边距 48px+，段间呼吸 24px+
- 数字用旧式字体（如果可用），标点用全角

## 7. 禁忌
- 禁止卡片化、圆角 >4px、阴影、渐变
- 禁止 emoji、禁止荧光色、禁止居中大按钮 Hero
- 禁止一栏到底的密排：必须有引语、图注、栏线等节奏点
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["正文单栏 680-760px，行宽 65-75 字符","衬线标题 40-64px + 首字下沉 + pull quote","纸色底 / 墨字 / 单一深色强调；零圆角零阴影","刊头双线 + 编号图注 + 花饰分隔的印刷节奏"],tokens:{colors:[{name:"纸色",value:"#faf7f2"},{name:"墨色",value:"#1a1a1a"},{name:"次文",value:"#6b675f"},{name:"强调",value:"#8b2e2e"},{name:"栏线",value:"#d8d2c4"}],fonts:[{role:"标题",stack:'"Playfair Display", "Noto Serif SC", "Songti SC", serif'},{role:"正文",stack:'"Noto Serif SC", Georgia, "Songti SC", serif'}],radius:"0-4px",shadow:"无",extras:[{label:"正文行高",value:"1.8-1.9"}]},demo:{height:1850,heightMobile:2680,html:da({title:"杂志编辑风 · Editorial",fonts:["Playfair+Display:ital,wght@0,600;0,800;1,500","Noto+Serif+SC:wght@400;500;700"],css:pa(Ub)+`
body {
  font-family: "Noto Serif SC", Georgia, "Songti SC", "SimSun", serif;
  background: #faf7f2; color: #1a1a1a; padding: 52px 28px 44px;
}
.sheet { max-width: 780px; margin: 0 auto; }
.masthead { display: flex; align-items: baseline; justify-content: space-between; padding-bottom: 12px; }
.masthead .title { font-family: "Playfair Display", "Noto Serif SC", serif; font-weight: 800; font-size: 26px; letter-spacing: 0.22em; }
.masthead .issue { font-size: 11px; letter-spacing: 0.14em; color: #6b675f; }
.rule-double { border: none; border-top: 3px double #1a1a1a; margin: 0 0 6px; }
.rule-thin { border: none; border-top: 1px solid #1a1a1a; margin: 0 0 40px; }
.kicker { font-size: 11px; letter-spacing: 0.2em; color: #8b2e2e; margin-bottom: 18px; }
h1 { font-family: "Playfair Display", "Noto Serif SC", serif; font-weight: 800; font-size: 56px; line-height: 1.12; letter-spacing: -0.01em; }
.dek { font-size: 18px; line-height: 1.75; color: #4a463f; margin: 20px 0 22px; max-width: 640px; }
.byline { display: flex; gap: 18px; font-size: 11px; letter-spacing: 0.12em; color: #6b675f; text-transform: uppercase; border-top: 1px solid #d8d2c4; border-bottom: 1px solid #d8d2c4; padding: 10px 0; margin-bottom: 36px; }
.byline b { color: #1a1a1a; font-weight: 500; }
.prose p { font-size: 15.5px; line-height: 1.95; margin-bottom: 24px; }
.prose p:first-of-type::first-letter {
  float: left; font-family: "Playfair Display", serif; font-size: 66px; line-height: 0.82;
  padding: 6px 12px 0 0; color: #8b2e2e; font-weight: 800;
}
.prose a { color: #8b2e2e; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
blockquote {
  margin: 40px auto; padding: 26px 0; border-top: 1px solid #1a1a1a; border-bottom: 1px solid #1a1a1a;
  text-align: center; font-size: 25px; line-height: 1.6; max-width: 560px;
}
blockquote cite { display: block; font-size: 12px; letter-spacing: 0.14em; color: #6b675f; margin-top: 14px; font-style: normal; }
figure { margin: 36px 0; }
figure .ph { aspect-ratio: 16 / 8; background: linear-gradient(120deg, #d9d2c3, #c8bfa9 55%, #b3a888); }
figcaption { font-size: 12px; color: #6b675f; margin-top: 10px; letter-spacing: 0.02em; }
figcaption b { color: #8b2e2e; font-weight: 500; margin-right: 8px; }
.cols2 { columns: 2; column-gap: 36px; column-rule: 1px solid #d8d2c4; font-size: 14.5px; line-height: 1.9; }
.cols2 p { margin-bottom: 18px; }
.endmark { text-align: center; color: #8b2e2e; font-size: 18px; margin: 36px 0 8px; }
footer { display: flex; justify-content: space-between; border-top: 3px double #1a1a1a; margin-top: 28px; padding-top: 12px; font-size: 11px; letter-spacing: 0.14em; color: #6b675f; }
@media (max-width: 720px) {
  h1 { font-size: 38px; }
  .cols2 { columns: 1; column-rule: none; }
  blockquote { font-size: 20px; }
  .dek { font-size: 16px; }
}`,body:`
<article class="sheet">
  <header class="masthead">
    <div class="title">读 栈</div>
    <div class="issue">第 04 期 · 2026 年秋 · 上海</div>
  </header>
  <hr class="rule-double" /><hr class="rule-thin" />
  <div class="kicker">封面故事 · COVER STORY</div>
  <h1>当所有 AI 都写出<br />同一个网页</h1>
  <p class="dek">靛蓝渐变、三等分卡片、rounded-2xl——我们得到了前所未有的效率，也失去了前所未有的多样性。这场「中位数审美」的困境，也许要靠一本「范式图鉴」来解。</p>
  <div class="byline"><span>撰文 <b>沈一白</b></span><span>摄影 <b>阿 弥</b></span><span>阅读约 8 分钟</span></div>
  <div class="prose">
    <p>凌晨两点，第三十次刷新生成结果之后，我终于确认了一件事：我和我的 AI，陷入了同一种审美。它给出的页面总是那么「正确」——居中的大标题、紫蓝渐变的关键词、三张带阴影的圆角卡片，像一份被无数人抄过标准答案的考卷。</p>
    <p>问题不出在模型不够聪明，而出在我们从未告诉它「要成为谁」。当我们只说「做一个落地页」时，它只能从训练数据里取平均值；而平均值，注定平庸。设计史早就给过答案：每个有生命力的视觉体系，都从一句明确的范式宣言开始——「形式追随功能」、「少即是多」、「装饰即罪恶」。</p>
    <blockquote>没有范式，就没有分歧；没有分歧，就没有品味。<cite>—— 本期编者</cite></blockquote>
    <p>于是有了这本图鉴。我们收集了二十种依然鲜活的 UI 范式，从 1950 年代的瑞士网格到 2020 年代的赛博朋克与黏土拟态。每一种都配有一份可以直接交给 AI 的提示词，和一份真实的渲染效果。你不必成为设计师，你只需要会挑选、会下指令。</p>
    <figure>
      <div class="ph"></div>
      <figcaption><b>图 01</b>网格、字体与色彩：范式的三根支柱。摄于西岸档案馆。</figcaption>
    </figure>
    <div class="cols2">
      <p>把范式写进提示词，本质上是一次审美的「定向变异」。AI 不再向平均数回归，而是沿着你指定的光谱展开。</p>
      <p>这也是为什么我们坚持「提示词与效果必须成对出现」：没有效果验证的提示词只是口号，没有提示词的效果只是孤品。</p>
      <p>翻到下一页之前，请先回答一个问题：你希望你的产品，被记住成什么样子？</p>
    </div>
  </div>
  <div class="endmark">❧</div>
  <footer><span>读栈 · READSTACK</span><span>下期预告：范式的终结？</span></footer>
</article>${ua()}`,js:xa()})}},Rb={bg:"#0b0f0e",surface:"#0e1512",alt:"rgba(61,240,138,0.07)",text:"#d7ffe8",muted:"#5b6b62",primary:"#3df08a",onPrimary:"#06281a",border:"rgba(61,240,138,0.28)",radius:"4px",radiusLg:"8px",shadow:"none",font:'"JetBrains Mono", "SF Mono", Consolas, monospace',mono:'"JetBrains Mono", "SF Mono", Consolas, monospace',ok:"#3df08a",warn:"#ffd166",err:"#ff6b6b",info:"#5ee1ff",focus:"#3df08a",extraCss:'.sc-root{text-shadow:0 0 8px rgba(61,240,138,0.18);}.sc-cell,.sc-btn,.sc-inp,.sc-ta,.sc-sel-btn,.sc-badge,.sc-tag,.sc-tbl td{font-family:"JetBrains Mono","SF Mono",Consolas,monospace;}.sc-btn.pri::before{content:"> ";}'},Bb={id:"terminal",no:"06",name:"终端命令行",nameEn:"Terminal / CLI",tagline:"等宽字体、扫描线、闪烁光标——极客的浪漫。",origin:"CRT 终端 / 1970s Unix 文化",year:"1970s —",tags:["等宽","绿字黑底","扫描线","CLI"],bestFor:["开发者工具","落地页的 geek 彩蛋","文档站"],avoid:["大众消费端","长表单"],prompt:`# 设计范式：终端命令行（Terminal / CLI）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：CRT 显示器里的 Unix 世界；一切皆文本，一切皆命令
- 情绪关键词：极客、硬核、直接、复古未来

## 2. 布局
- 页面即一个终端窗口：标题栏（三个圆点 + 窗口标题）+ 会话区
- 会话区 padding 20-24px，所有内容左对齐，禁止居中布局
- 行高 1.6-1.8，行宽不超过 90 字符，超出换行

## 3. 字体排印
- 等宽字体（JetBrains Mono / IBM Plex Mono / SF Mono），13-14px
- 提示符结构：user@host : path $，分段上色（用户绿、主机青、路径蓝）
- 输出比命令暗一档；注释与元信息用灰绿；错误用红

## 4. 色彩
- 背景 #0b0f0e（微绿的黑）；主文字 #3df08a（磷光绿）
- 辅助 #5b6b62；强调（警告/高亮）#ffd166；错误 #ff6b6b
- 可有一处反色块（黑字绿底）做「选中态」

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：打字机输出（逐字 12-24ms 出现）与 [████░░░░] 48% 块状进度
- 按钮：[ 确 定 ] 方括号文本形态；hover 整行反白；圆角 / 阴影 / 渐变全部禁止
- 输入框：$ 提示符同行输入 + 块状光标 steps(1) 闪烁
- 下拉框：ASCII 列表，当前行 > 前缀整行反白，↑↓ 移动、Enter 选中
- 复选框 [x] / [ ]；开关 [ ON ] ⇄ [ OFF ]；一切状态皆字符
- 表格：┌ ─ ┬ ┐ │ 框线字符手绘，不用 CSS 边框
- 全场等宽字体，连标题都是字符图形
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：整行反白（背景色与前景色互换），没有任何位移或阴影
- active：立即反显并保持 80ms 的「按键反馈」，然后恢复
- focus-visible：显示 ▌ 块状光标并持续闪烁（steps(1) 1s）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，80ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（80ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角逐行追加输出（像 stdout），3s 后被覆盖或淡出，最多保留 3 行
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 80ms（硬件终端几乎没有过渡，整行反向也是瞬时切换），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 扫描线：repeating-linear-gradient 透明/黑 1px/3px，整体不透明度 0.06-0.1
- 暗角：radial-gradient 边缘压暗；文字微辉光 text-shadow 0 0 6px
- 启动时可打一段 ASCII banner（大字或 logo）

## 7. 禁忌
- 禁止圆角 >6px、渐变、玻璃、衬线/无衬线非等宽字体
- 禁止彩色图片堆砌、禁止大段无层级纯文本（必须用框线/缩进/颜色分层）
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["终端窗口：标题栏三点 + 会话区，全等宽字体","提示符分段上色；ASCII 框线表格；块字符进度条","扫描线 + 暗角 + 文字微辉光的 CRT 质感","绿字黑底三色系：磷光绿/灰绿/琥珀警告"],tokens:{colors:[{name:"背景",value:"#0b0f0e"},{name:"磷光绿",value:"#3df08a"},{name:"辅助",value:"#5b6b62"},{name:"琥珀",value:"#ffd166"},{name:"错误红",value:"#ff6b6b"}],fonts:[{role:"全场",stack:'"JetBrains Mono", "IBM Plex Mono", "SF Mono", Consolas, monospace'}],radius:"0-6px",shadow:"无（文字辉光代替）",extras:[{label:"扫描线",value:"repeating-linear-gradient 1px/3px, opacity .08"},{label:"光标",value:"8px 色块 steps(1) 1s 闪烁"}]},demo:{height:1550,heightMobile:2220,html:da({title:"终端命令行 · Terminal",fonts:["JetBrains+Mono:wght@400;500;700"],css:pa(Rb)+`
body {
  font-family: "JetBrains Mono", "IBM Plex Mono", "SF Mono", Consolas, monospace;
  background: #0b0f0e; color: #3df08a; font-size: 13px; line-height: 1.65;
  display: flex; flex-direction: column; align-items: center; min-height: 100vh; padding: 28px;
}
.term {
  width: min(760px, 94vw); background: #0d1311; border: 1px solid #1f2a26; border-radius: 8px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55); overflow: hidden; position: relative;
}
.titlebar { display: flex; align-items: center; gap: 8px; padding: 11px 14px; background: #101714; border-bottom: 1px solid #1f2a26; }
.dot { width: 11px; height: 11px; border-radius: 50%; }
.dot.r { background: #ff5f57; } .dot.y { background: #febc2e; } .dot.g { background: #28c840; }
.titlebar span { margin-left: auto; font-size: 11px; color: #5b6b62; }
.screen { padding: 20px 22px 26px; position: relative; z-index: 1; text-shadow: 0 0 6px rgba(61, 240, 138, 0.22); }
.scan { position: absolute; inset: 0; pointer-events: none; z-index: 2;
  background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.22) 0 1px, transparent 1px 3px); }
.vignette { position: absolute; inset: 0; pointer-events: none; z-index: 2;
  background: radial-gradient(120% 100% at 50% 50%, transparent 62%, rgba(0, 0, 0, 0.38)); }
.line { white-space: pre-wrap; word-break: break-all; }
.dim { color: #5b6b62; }
.usr { color: #3df08a; } .host { color: #5ee1ff; } .path { color: #7aa2ff; }
.cmd { color: #eafff2; }
.warn { color: #ffd166; } .err { color: #ff6b6b; }
.ok::before { content: "✔ "; }
table.ascii { border-collapse: collapse; margin: 10px 0 4px; }
table.ascii td { padding: 1px 14px 1px 0; color: #3df08a; }
table.ascii tr.head td { color: #ffd166; }
.box { color: #2f4a3e; }
.cursor { display: inline-block; width: 8px; height: 15px; background: #3df08a; vertical-align: -2px; margin-left: 6px; animation: blink 1s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }
.banner { color: #2f4a3e; line-height: 1.15; margin-bottom: 6px; }
@media (max-width: 640px) { body { font-size: 11.5px; padding: 12px; } }
.term { margin: auto 0; }
.sc-root { width: 100%; }`,body:`
<div class="term">
  <div class="titlebar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span>paradigm-hall — zsh — 80×24</span></div>
  <div class="screen">
    <div class="line banner">  ___   _   _    ___    ___   _   _   ___  </div>
    <div class="line banner"> | _ \\ /_\\ | |  / _ \\ | _ \\ /_\\ | || \\ \\/ / </div>
    <div class="line banner"> |  _// _ \\| |_| (_) ||   // _ \\| __| >  <  </div>
    <div class="line banner"> |_| /_/ \\_\\___|\\___/ |_|_\\_/ \\_\\____/_/\\_\\ </div>
    <div class="line dim">范式展览馆 CLI v0.4.1 — 输入 help 查看命令</div>
    <div class="line">&nbsp;</div>
    <div class="line"><span class="usr">visitor</span>@<span class="host">paradigm-hall</span> : <span class="path">~/gallery</span> $ <span class="cmd">list --style terminal</span></div>
    <div class="line ok">正在装载范式：终端命令行 …</div>
    <div class="line warn">⚠ 检测到 3 处 CRT 特效已启用（扫描线/暗角/辉光）</div>
    <div class="line">&nbsp;</div>
    <table class="ascii">
      <tr class="head"><td>范式</td><td>年代</td><td>标签</td><td>状态</td></tr>
      <tr><td>Swiss Style</td><td>1950s—</td><td>网格</td><td class="ok">stable</td></tr>
      <tr><td>Neo-Brutalism</td><td>2020—</td><td>粗野</td><td class="ok">stable</td></tr>
      <tr><td>Art Deco</td><td>1920s</td><td>装饰</td><td class="warn">beta</td></tr>
    </table>
    <div class="line">&nbsp;</div>
    <div class="line"><span class="usr">visitor</span>@<span class="host">paradigm-hall</span> : <span class="path">~/gallery</span> $ <span class="cmd">render --to exhibition-hall</span></div>
    <div class="line">[<span class="cmd">████████████████</span>------------] 62% <span class="dim">编译提示词…</span></div>
    <div class="line err">✘ 警告：检测到「AI 默认味」特征 0 处 — 通过</div>
    <div class="line ok">渲染完成。按 Enter 进入展厅<span class="cursor"></span></div>
  </div>
  <div class="scan"></div><div class="vignette"></div>
</div>${ua()}`,js:xa()})}},Yb={bg:"#0a0a0c",surface:"#101013",alt:"rgba(255,255,255,0.05)",text:"#e8e8ec",muted:"#8b8b96",primary:"#5eead4",onPrimary:"#052e2b",border:"#26262c",radius:"10px",radiusLg:"14px",shadow:"0 1px 3px rgba(0,0,0,0.4)",font:'system-ui, -apple-system, "PingFang SC", sans-serif',mono:'ui-monospace, "SF Mono", Consolas, monospace',ok:"#34d399",warn:"#fbbf24",err:"#f87171",info:"#60a5fa",focus:"#5eead4",extraCss:".sc-prog-num,.sc-ring-num,.sc-pg-b,.rank-no{font-variant-numeric:tabular-nums;}.sc-btn.pri{box-shadow:0 0 0 1px #5eead4, 0 0 14px rgba(94,234,212,0.25);}"},Gb={id:"dashboard",no:"07",name:"暗色数据仪表盘",nameEn:"Dark Dashboard",tagline:"信息密集、数字等宽、状态点常亮——给眼睛看的驾驶舱。",origin:"Bloomberg 终端 / Grafana / Vercel Analytics",year:"2018 —",tags:["暗色","密集","等宽数字","图表"],bestFor:["SaaS 后台","运维监控","数据产品"],avoid:["营销落地页","轻展示场景"],prompt:`# 设计范式：暗色数据仪表盘（Dark Dashboard）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：驾驶舱/作战室；为长时间盯屏设计，密度即美德
- 情绪关键词：专业、冷静、高效、可信

## 2. 布局
- 侧边栏（200-220px，图标+文字导航）+ 主区；主区 KPI 行 → 图表区 → 表格区
- 面板（panel）是唯一容器：bg 比页面亮一档，1px 描边，radius 10-12px，padding 16px
- 间距 12-16px，一屏至少呈现 3 类信息；表格行高 36-40px

## 3. 字体排印
- UI：system-ui；所有数字 font-variant-numeric: tabular-nums
- 字号层级：KPI 数字 22-28px/600；面板标题 13px/500；正文与表格 12-13px；标签 11px 大写灰色
- 行高紧凑 1.4-1.5

## 4. 色彩
- 页面 #0a0a0c / 面板 #101013-141418 / 描边 #26262c
- 主文字 #e8e8ec / 次文字 #8b8b96
- 强调色全场唯一（推荐青 #5eead4 或琥珀 #f59e0b），只给关键数字与图表主线
- 涨跌语义：涨红 #f87171、跌绿 #34d399（遵循中国行情习惯，可按项目地区调整）

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：KPI 卡（大数字 tabular + ▲▼ 同比红涨绿跌）与 6px 圆点状态徽章
- 按钮：radius 8px、主按钮强调色实底；hover 提亮 8% 且外发光同步加强
- 输入框：#101014 内凹 + 1px #2a2a31；focus 边框变强调色 + 光环
- 下拉框浮层：#141419 + 1px 边 + 0 12px 32px 60% 大范围黑投影——浮层要「浮」在数据上
- 开关：36×20 紧凑轨道、白钮右滑、ON 强调色
- 表格：无竖线、行线 #1f1f24、hover #16161a、表头 11px 大写灰、列名带排序箭头
- 图表：SVG 面积图主线强调色、面积填充 8% 透明度，除网格虚线外零装饰
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：底色提亮到 #1b1b22 / 边框提亮一档，提示层同上
- active：scale(0.99) 并保留外发光
- focus-visible：2px 强调色描边 + 3px 外扩 rgba(99,102,241,.35)；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，160ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（160ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右上角堆叠，从上方 8px 淡入，3s 后淡出，最多 3 条；危险类用红色左边条区分
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 160ms（数据刷新类可用 240ms 过渡，但不能更慢），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 一档深色体系：页面 < 面板 < 浮层，靠明度不靠阴影分层
- 圆角 ≤12px；阴影几乎不用（浮层用描边+明度）
- 数字与单位分开排版；时间一律相对时间（3 分钟前）

## 7. 禁忌
- 禁止大圆角、渐变、玻璃拟态、超过两种强调色
- 禁止非等宽数字（跳动）、禁止彩色实底徽章、禁止大面积留白
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["侧边栏 + 面板体系；明度分层代替阴影","KPI：标签 + tabular 大数字 + ▲▼ 同比（红涨绿跌）","SVG 单色图表 + 圆点状态徽章；表格无竖线","唯一强调色；密度优先，一屏 ≥3 类信息"],tokens:{colors:[{name:"页面",value:"#0a0a0c"},{name:"面板",value:"#101013"},{name:"描边",value:"#26262c"},{name:"主文",value:"#e8e8ec"},{name:"次文",value:"#8b8b96"},{name:"强调青",value:"#5eead4"}],fonts:[{role:"UI",stack:'system-ui, -apple-system, "PingFang SC", sans-serif'}],radius:"10-12px",shadow:"几乎不用（明度分层）",extras:[{label:"表格行高",value:"36-40px"},{label:"数字",value:"tabular-nums 强制"}]},demo:{height:1630,heightMobile:2580,html:da({title:"暗色数据仪表盘 · Dark Dashboard",css:pa(Yb)+`
body {
  font-family: system-ui, -apple-system, "SF Pro Text", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #0a0a0c; color: #e8e8ec; font-size: 13px; line-height: 1.45;
  display: grid; grid-template-columns: 208px 1fr; min-height: 100vh;
}
body > .sc-root { grid-column: 1 / -1; }
aside { border-right: 1px solid #1f1f24; padding: 18px 12px; display: flex; flex-direction: column; gap: 4px; }
.brand { display: flex; align-items: center; gap: 9px; font-size: 13px; font-weight: 600; padding: 4px 10px 18px; }
.brand i { width: 18px; height: 18px; border-radius: 6px; background: #5eead4; display: block; }
.nav { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 8px; color: #8b8b96; font-size: 12.5px; }
.nav.on { background: #16161a; color: #e8e8ec; }
.nav svg { opacity: .75; }
main { padding: 18px 22px 24px; display: flex; flex-direction: column; gap: 14px; min-width: 0; }
.top { display: flex; align-items: center; gap: 14px; }
.top h1 { font-size: 15px; font-weight: 600; }
.search { margin-left: auto; background: #101013; border: 1px solid #26262c; border-radius: 8px; color: #8b8b96; font-size: 12px; padding: 7px 12px; width: 200px; }
.avatar { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #5eead4, #3b82f6); }
.kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.panel { background: #101013; border: 1px solid #1f1f24; border-radius: 12px; padding: 16px; }
.kpi .lab { font-size: 11px; color: #8b8b96; text-transform: uppercase; letter-spacing: .06em; }
.kpi .val { font-size: 26px; font-weight: 600; font-variant-numeric: tabular-nums; margin-top: 6px; letter-spacing: -0.01em; }
.kpi .delta { font-size: 11.5px; margin-top: 4px; font-variant-numeric: tabular-nums; }
.up { color: #f87171; } .down { color: #34d399; }
.spark { margin-top: 10px; }
.mid { display: grid; grid-template-columns: 5fr 3fr; gap: 14px; }
.p-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 12px; }
.p-head b { font-size: 13px; font-weight: 500; }
.p-head span { font-size: 11px; color: #8b8b96; }
.legend { display: flex; gap: 14px; font-size: 11px; color: #8b8b96; }
.legend i { display: inline-block; width: 8px; height: 8px; border-radius: 2px; margin-right: 5px; vertical-align: 0; }
.feed { display: flex; flex-direction: column; gap: 0; }
.feed .row { display: flex; align-items: center; gap: 10px; padding: 9px 0; border-bottom: 1px solid #1a1a1f; font-size: 12.5px; }
.feed .row:last-child { border-bottom: none; }
.feed .t { margin-left: auto; font-size: 11px; color: #8b8b96; white-space: nowrap; }
.st { width: 6px; height: 6px; border-radius: 50%; flex: none; }
.st.ok { background: #34d399; } .st.wa { background: #fbbf24; } .st.er { background: #f87171; }
table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
th { text-align: left; font-size: 11px; color: #8b8b96; font-weight: 400; text-transform: uppercase; letter-spacing: .06em; padding: 6px 10px 10px; border-bottom: 1px solid #1f1f24; }
td { padding: 10px; border-bottom: 1px solid #17171b; font-variant-numeric: tabular-nums; }
tr:hover td { background: #141417; }
th:last-child, td:last-child { text-align: right; }
td .st { display: inline-block; margin-right: 7px; vertical-align: 0; }
.mono { font-variant-numeric: tabular-nums; }
@media (max-width: 900px) {
  body { grid-template-columns: 1fr; }
  aside { flex-direction: row; overflow-x: auto; border-right: none; border-bottom: 1px solid #1f1f24; padding: 10px; }
  .brand { padding: 4px 10px; }
  .kpis { grid-template-columns: repeat(2, 1fr); }
  .mid { grid-template-columns: 1fr; }
  .search { display: none; }
}
/* 矩阵已通过 grid-column 横跨全宽 */`,body:`
<aside>
  <div class="brand"><i></i>观测台</div>
  <div class="nav on"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#8b8b96" stroke-width="1.3"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1"/><rect x="9" y="1.5" width="5.5" height="5.5" rx="1"/><rect x="1.5" y="9" width="5.5" height="5.5" rx="1"/><rect x="9" y="9" width="5.5" height="5.5" rx="1"/></svg>总览</div>
  <div class="nav"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#8b8b96" stroke-width="1.3"><path d="M2 13.5L6 8l3 2.5L14 4"/><path d="M2 2v12h12"/></svg>指标</div>
  <div class="nav"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#8b8b96" stroke-width="1.3"><circle cx="8" cy="8" r="6"/><path d="M8 4.5V8l2.5 1.5"/></svg>告警</div>
  <div class="nav"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#8b8b96" stroke-width="1.3"><rect x="1.5" y="2.5" width="13" height="11" rx="1.5"/><path d="M1.5 6h13M5 6v7.5"/></svg>日志</div>
  <div class="nav"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#8b8b96" stroke-width="1.3"><circle cx="8" cy="5.5" r="2.5"/><path d="M2.5 13.5c1-2.5 3-3.5 5.5-3.5s4.5 1 5.5 3.5"/></svg>用户</div>
</aside>
<main>
  <div class="top"><h1>服务总览</h1><div class="search">搜索服务 / 指标…</div><div class="avatar"></div></div>
  <section class="kpis">
    <div class="panel kpi">
      <div class="lab">今日请求</div>
      <div class="val">1,284,902</div>
      <div class="delta up">▲ 12.4% 较昨日</div>
      <svg class="spark" width="100%" height="26" viewBox="0 0 100 26" preserveAspectRatio="none"><polyline points="0,20 14,17 28,19 42,12 56,14 70,8 84,9 100,4" fill="none" stroke="#5eead4" stroke-width="1.5"/></svg>
    </div>
    <div class="panel kpi">
      <div class="lab">P95 延迟</div>
      <div class="val">142 ms</div>
      <div class="delta down">▼ 8.1% 较昨日</div>
      <svg class="spark" width="100%" height="26" viewBox="0 0 100 26" preserveAspectRatio="none"><polyline points="0,6 14,9 28,7 42,12 56,10 70,15 84,14 100,18" fill="none" stroke="#5eead4" stroke-width="1.5"/></svg>
    </div>
    <div class="panel kpi">
      <div class="lab">错误率</div>
      <div class="val">0.42%</div>
      <div class="delta up">▲ 0.07% 较昨日</div>
      <svg class="spark" width="100%" height="26" viewBox="0 0 100 26" preserveAspectRatio="none"><polyline points="0,22 14,22 28,20 42,21 56,18 70,19 84,12 100,10" fill="none" stroke="#f87171" stroke-width="1.5"/></svg>
    </div>
    <div class="panel kpi">
      <div class="lab">活跃实例</div>
      <div class="val">37</div>
      <div class="delta" style="color:#8b8b96">— 持平</div>
      <svg class="spark" width="100%" height="26" viewBox="0 0 100 26" preserveAspectRatio="none"><polyline points="0,13 14,13 28,13 42,13 56,13 70,13 84,13 100,13" fill="none" stroke="#5eead4" stroke-width="1.5"/></svg>
    </div>
  </section>
  <section class="mid">
    <div class="panel">
      <div class="p-head"><b>请求量 · 近 24 小时</b><span>单位：万次/时</span></div>
      <svg width="100%" height="150" viewBox="0 0 560 150" preserveAspectRatio="none">
        <path d="M0,120 C40,110 60,60 100,66 C140,72 160,40 200,46 C240,52 260,90 300,84 C340,78 360,30 400,36 C440,42 470,70 510,62 C540,56 550,40 560,34 L560,150 L0,150 Z" fill="rgba(94,234,212,0.08)"/>
        <path d="M0,120 C40,110 60,60 100,66 C140,72 160,40 200,46 C240,52 260,90 300,84 C340,78 360,30 400,36 C440,42 470,70 510,62 C540,56 550,40 560,34" fill="none" stroke="#5eead4" stroke-width="2"/>
      </svg>
      <div class="legend"><span><i style="background:#5eead4"></i>请求量</span><span><i style="background:#26262c"></i>基线</span><span style="margin-left:auto">更新于 1 分钟前</span></div>
    </div>
    <div class="panel">
      <div class="p-head"><b>最近事件</b><span>实时</span></div>
      <div class="feed">
        <div class="row"><span class="st ok"></span>api-gateway 扩容至 12 实例<span class="t">2 分钟前</span></div>
        <div class="row"><span class="st wa"></span>payment 队列积压 1.2k<span class="t">9 分钟前</span></div>
        <div class="row"><span class="st er"></span>auth-service 5xx 突增<span class="t">17 分钟前</span></div>
        <div class="row"><span class="st ok"></span>CDN 缓存预热完成<span class="t">34 分钟前</span></div>
        <div class="row"><span class="st ok"></span>数据库主从切换成功<span class="t">1 小时前</span></div>
      </div>
    </div>
  </section>
  <section class="panel">
    <div class="p-head"><b>最新订单</b><span>共 2,841 笔</span></div>
    <table>
      <tr><th>订单号</th><th>客户</th><th>金额</th><th>状态</th></tr>
      <tr><td class="mono">#ORD-9f2a81</td><td>陈默</td><td class="mono">￥1,280.00</td><td><span class="st ok"></span>已完成</td></tr>
      <tr><td class="mono">#ORD-9f2a77</td><td>林小满</td><td class="mono">￥329.00</td><td><span class="st wa"></span>处理中</td></tr>
      <tr><td class="mono">#ORD-9f2a70</td><td>周雨桐</td><td class="mono">￥4,999.00</td><td><span class="st ok"></span>已完成</td></tr>
      <tr><td class="mono">#ORD-9f2a66</td><td>阿禾</td><td class="mono">￥89.00</td><td><span class="st er"></span>已退款</td></tr>
    </table>
  </section>
</main>${ua()}`,js:xa()})}},qb={bg:"#f6f4ee",surface:"#fbf9f3",alt:"rgba(43,43,40,0.04)",text:"#2b2b28",muted:"#8a857a",primary:"#b03a2e",onPrimary:"#fbf9f3",border:"rgba(43,43,40,0.16)",radius:"4px",radiusLg:"8px",shadow:"none",font:'"Hiragino Sans", "PingFang SC", "Noto Sans SC", sans-serif',mono:'"Hiragino Sans", monospace',ok:"#4a7c59",warn:"#a6761d",err:"#b03a2e",info:"#4a5d6b",focus:"#4a5d6b",extraCss:".sc-head h2{font-weight:500;letter-spacing:0.14em;}.sc-btn{letter-spacing:0.18em;font-weight:400;}.sc-cell h5{letter-spacing:0.3em;font-weight:400;}.sc-tbl th{letter-spacing:0.24em;font-weight:400;}"},Lb={id:"wa",no:"08",name:"日式极简 · 间",nameEn:"Japanese Minimal / Ma",tagline:"留白即内容：一竖线、一颗印章、大片「间」。",origin:"原研哉 / 侘寂美学 / 和式排版",year:"常青",tags:["留白","竖排","细线","侘寂"],bestFor:["茶饮/餐饮","品牌宣言页","摄影/艺术站"],avoid:["功能密集产品","促销活动页"],prompt:`# 设计范式：日式极简 · 间（Japanese Minimal / Ma）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：原研哉式的「白」；留白不是背景，而是内容本身
- 情绪关键词：安静、克制、余韵、自然

## 2. 布局
- 单栏，max-width 520-560px；元素间距 48-96px，比常规设计大 2-3 倍
- 一处点睛的竖排文字（writing-mode: vertical-rl），其余全部横排
- 画面只放一个视觉主体（一首诗、一件器物、一张照片），其余退位

## 3. 字体排印
- 衬线（Noto Serif SC/JP、游明朝、Songti），细字重（300-400）
- 竖排诗文：26-34px、字距 0.3em、行距 2.0 以上
- 横排小注：12-13px、行距 2.0、颜色比主文字浅一档

## 4. 色彩
- 生成り（米白）#f6f4ee / 墨 #2b2b28 / 朱（印章红）#b03a2e
- 全场只有这三个色；朱只出现在一枚印章或一条细线上
- 图片占位用浅灰 #e9e4d8，不用纯白

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：朱砂印章（28-30px 方、2px 朱框、微旋 2°）与竖排文字块
- 按钮：无底无框纯文字 + 0.2em 字距；hover 下划线从左画出 0.4s
- 输入框：仅一条 1px 墨线、两端留白不对称；focus 线色加深到纯墨
- 下拉框浮层：纯白 + 极淡影 + 行高 44px；hover 只改字色，不铺底色
- 开关：细横杆 + 小圆钮，切换 0.4s 刻意放慢
- 表格：只有行间 1px 10% 透明线；hover 仅字色深一档
- 留白纪律：组件间距是常规范式的 1.5-2 倍，宁可空不可挤
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：下划线自左向右画出 0.4s，不做颜色与位置变化
- active：字色加深到纯墨，无位移
- focus-visible：极淡墨色框（10% 透明度），不加任何光晕；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，400ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（400ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角的小白卡，淡入 0.6s、停留 6s、淡出 0.6s——刻意比常规慢一半
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 400ms（侘寂的节奏必须慢；Typography 切换可到 600ms），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 可有一枚极淡的圆形（月/日轮）作背景，色阶只比底色深 3%
- 纸感：底色微暖，可叠加 2% 不透明度的噪点
- 所有元素对齐「间」的节奏：近-远-近，疏-密-疏

## 7. 禁忌
- 禁止网格化堆叠、卡片、阴影、圆角
- 禁止两种以上颜色、禁止「丰富」的冲动：每加一个元素，先删一个
- 禁止粗体大标题 Hero、禁止 emoji 与装饰性图标
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["单栏 520-560px，元素间距 48-96px（常规 2-3 倍）","一处竖排点睛；衬线细字重、行距 2.0+","三色系统：生成り / 墨 / 朱（朱只给印章）","1px 细线分割 + 微旋转方印 + 极淡月轮"],tokens:{colors:[{name:"生成り",value:"#f6f4ee"},{name:"墨",value:"#2b2b28"},{name:"朱",value:"#b03a2e"},{name:"图占位",value:"#e9e4d8"}],fonts:[{role:"全场",stack:'"Noto Serif SC", "Noto Serif JP", "Songti SC", "Yu Mincho", serif'}],radius:"0",shadow:"无",extras:[{label:"细线",value:"1px solid rgba(43,43,40,0.2)"},{label:"印章",value:"28px 方 / 2px 朱框 / 微旋转"}]},demo:{height:1610,heightMobile:2260,html:da({title:"日式极简 · 間",fonts:["Noto+Serif+SC:wght@300;400;600","Noto+Serif+JP:wght@300;400"],css:pa(qb)+`
body {
  font-family: "Noto Serif SC", "Noto Serif JP", "Songti SC", "Yu Mincho", serif;
  background: #f6f4ee; color: #2b2b28; min-height: 100vh;
  display: flex; flex-direction: column; align-items: center; padding: 40px; position: relative;
}
/* 居中交给 margin:auto：内容矮于视口时垂直居中，高于视口（组件矩阵展开）时自然从顶部流式排列 */
.stage { position: relative; text-align: center; margin: auto 0; }
.sc-root { width: 100%; }
.moon {
  position: absolute; width: 300px; height: 300px; border-radius: 50%;
  background: #eae5d9; top: 50%; left: 50%; transform: translate(-50%, -58%);
}
.stage { position: relative; text-align: center; }
.top-note { font-size: 12px; letter-spacing: 0.5em; color: rgba(43, 43, 40, 0.55); margin-bottom: 56px; }
.verse {
  writing-mode: vertical-rl; font-size: 30px; font-weight: 300; letter-spacing: 0.34em;
  line-height: 2.1; height: 300px; margin: 0 auto; text-orientation: upright;
}
.verse span { display: block; }
.side-note {
  position: absolute; top: 6px; right: -88px; writing-mode: vertical-rl;
  font-size: 12px; letter-spacing: 0.28em; line-height: 2.2; color: rgba(43, 43, 40, 0.6);
}
.seal {
  width: 30px; height: 30px; border: 2px solid #b03a2e; color: #b03a2e;
  display: flex; align-items: center; justify-content: center; font-size: 15px;
  transform: rotate(2.5deg); margin: 54px auto 0;
}
.hair { width: 1px; height: 44px; background: rgba(43, 43, 40, 0.25); margin: 40px auto 26px; }
.foot { font-size: 12px; letter-spacing: 0.3em; color: rgba(43, 43, 40, 0.55); }
.link { display: inline-block; margin-top: 18px; font-size: 12.5px; letter-spacing: 0.24em; color: #2b2b28; text-decoration: none; border-bottom: 1px solid rgba(43,43,40,0.3); padding-bottom: 2px; }
@media (max-width: 720px) {
  .verse { font-size: 24px; height: 260px; }
  .side-note { display: none; }
  .top-note { margin-bottom: 40px; }
}`,body:`
<div class="moon"></div>
<div class="stage">
  <div class="top-note">範 式 展 示 館 · 第 八 席</div>
  <div class="verse">
    <span>古池や</span>
    <span>蛙飛び込む</span>
    <span>水の音</span>
  </div>
  <div class="side-note">間——留白不是空，是呼吸的場所</div>
  <div class="seal">印</div>
  <div class="hair"></div>
  <div class="foot">松尾芭蕉 · 収蔵</div>
  <div><a class="link" href="#/exhibit/wa">静 か に 観 る</a></div>
</div>${ua()}`,js:xa()})}},Xb={bg:"#fff0f5",surface:"#ffffff",alt:"rgba(255,113,206,0.08)",text:"#4a2c42",muted:"#a37e96",primary:"#ff71ce",onPrimary:"#ffffff",border:"rgba(255,113,206,0.4)",radius:"999px",radiusLg:"24px",shadow:"0 2px 8px rgba(255,113,206,0.3), inset 0 1px 0 rgba(255,255,255,0.8)",font:'"Comic Sans MS", "Chalkboard SE", "PingFang SC", sans-serif',mono:'ui-monospace, "SF Mono", Consolas, monospace',ok:"#00c853",warn:"#ffab00",err:"#ff5252",info:"#01cdfe",focus:"#ff71ce",extraCss:".sc-cell{border-radius:22px;}.sc-btn{border-radius:999px;background:linear-gradient(180deg,#ffffff,#ffe3f1);border-color:rgba(255,113,206,0.55);font-weight:700;}.sc-btn.pri{background:linear-gradient(180deg,#ff9bd8,#ff71ce);color:#fff;text-shadow:0 1px 0 rgba(0,0,0,0.15);}.sc-inp,.sc-ta,.sc-sel-btn{border-radius:999px;background:linear-gradient(180deg,#fff,#fff2f8);}.sc-badge{border-radius:999px;border:1px solid rgba(255,113,206,0.5);}"},Vb={id:"y2k",no:"09",name:"千禧复古",nameEn:"Y2K / Retro Web",tagline:"渐变、闪粉、跑马灯——2003 年的互联网全都回来啦。",origin:"Web 1.0 / GeoCities / 辣妹风",year:"1998 — 2004",tags:["复古","渐变","跑马灯","闪粉"],bestFor:["粉丝页/活动页","复古品牌营销","音乐/潮流产品"],avoid:["B 端产品","严肃内容"],prompt:`# 设计范式：千禧复古（Y2K / Retro Web）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：2003 年个人主页的繁荣过剩；要「满」、要「亮」、要「闪」
- 情绪关键词：热闹、甜腻、好玩、复古未来

## 2. 布局
- 居中窄栏（640-720px），内容上下堆叠，区块之间用花哨分隔线
- 必备构件：跑马灯横幅（marquee）、访客计数器、Webring 友链、闪光「NEW!」徽章
- 允许表格感的老式布局（细边框格子），但保持呼吸

## 3. 字体排印
- 大标题：Impact / Arial Black，全大写或带 ★ 装饰，字号 40-64px
- 正文：Tahoma / Verdana 12-13px（老 IE 味道）
- 点缀：Silkscreen 等像素字体做小标签（8-12px）

## 4. 色彩
- 四主色：热粉 #ff71ce、电青 #01cdfe、奶黄 #fffb96、藤紫 #b967ff
- 底色：白或淡粉 #fff0f5 + 星星/波点平铺图案
- 渐变只做「亮面」：按钮、标题文字、横幅（135deg 双色）

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：glossy 亮面按钮（linear-gradient 180deg 白 65% → 透明 55% 叠主色）与跑马灯横幅
- 按钮：胶囊 + 2px 白边 + 亮面 + 文字白描边；hover scale(1.04) 弹性回弹
- 输入框：白/浅紫底 + 2px 银渐变边 + 内凹；focus 亮青外发光
- 下拉框浮层：亮面小窗 + 2px 银边 + 迷你标题栏
- 徽章：±5° 旋转 + NEW! / HOT! + 黑白细边
- 表格：银色边框 + 亮色斑马纹，hover 亮青
- 允许 ✦ 星星串分隔符与少量 emoji 点缀（全馆唯一例外）
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：整块提亮 + scale(1.04)，光泽随之移动
- active：scale(0.97) 且饱和度提高一档
- focus-visible：亮青或亮粉虚线框外扩 3px；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，200ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（200ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角 glossy 小窗堆叠，弹跳进入（cubic-bezier(.34,1.56,.64,1)），3s 后淡出，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 200ms（弹跳类 300ms，闪星星 1s 循环），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 闪烁：opacity steps(1) 1s 动画，只给一处
- 计数器：黑底绿字等宽数字（LED 感）
- 鼠标友好：hover 时按钮变亮/位移 1px

## 7. 禁忌
- 禁止极简、留白克制、细线、低饱和——这一页的敌人是「高级感」
- 禁止现代圆角卡片体系与柔和阴影
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["居中窄栏 + 跑马灯 + 访客计数器 + Webring","亮面按钮：渐变叠加 + 白边 + 胶囊；标题渐变文字","四主色：热粉/电青/奶黄/藤紫；星纹平铺底","Impact 大标题 + Tahoma 正文 + 像素小标签"],tokens:{colors:[{name:"热粉",value:"#ff71ce"},{name:"电青",value:"#01cdfe"},{name:"奶黄",value:"#fffb96"},{name:"藤紫",value:"#b967ff"},{name:"淡粉底",value:"#fff0f5"}],fonts:[{role:"标题",stack:'Impact, "Arial Black", "PingFang SC", sans-serif'},{role:"正文",stack:'Tahoma, Verdana, "PingFang SC", sans-serif'},{role:"小标签",stack:"Silkscreen, monospace"}],radius:"999px（按钮）/ 8px（框）",shadow:"内亮面 + 2px 白边",extras:[{label:"闪烁",value:"opacity steps(1) 1s，仅一处"}]},demo:{height:1730,heightMobile:2560,html:da({title:"千禧复古 · Y2K",fonts:["Silkscreen:wght@400;700"],css:pa(Xb)+`
body {
  font-family: Tahoma, Verdana, "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #fff0f5;
  background-image: radial-gradient(#ffb3d9 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  padding: 26px 16px 34px; font-size: 13px;
}
.wrap { max-width: 680px; margin: 0 auto; }
h1 {
  font-family: Impact, "Arial Black", sans-serif; text-align: center; font-size: 52px;
  letter-spacing: 0.02em; text-transform: uppercase; line-height: 1;
  background: linear-gradient(180deg, #ff71ce 20%, #b967ff 60%, #01cdfe);
  -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(2px 2px 0 #fff) drop-shadow(-2px -2px 0 #fff);
  margin: 6px 0 4px;
}
.sub { text-align: center; font-family: Silkscreen, monospace; font-size: 10px; color: #b967ff; letter-spacing: 0.2em; margin-bottom: 18px; }
.marquee {
  background: linear-gradient(90deg, #ff71ce, #01cdfe); border-top: 2px solid #fff; border-bottom: 2px solid #fff;
  overflow: hidden; white-space: nowrap; padding: 7px 0; margin-bottom: 22px;
  box-shadow: 0 0 0 2px #ff71ce;
}
.marquee div { display: inline-block; animation: scroll 14s linear infinite; font-weight: 700; color: #fff; text-shadow: 1px 1px 0 #b967ff; font-size: 14px; letter-spacing: 0.08em; }
@keyframes scroll { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
.nav { text-align: center; margin-bottom: 24px; }
.pill {
  display: inline-block; margin: 4px; padding: 8px 18px; border-radius: 999px; cursor: default;
  background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0) 55%), #ff71ce;
  border: 2px solid #fff; color: #fff; font-weight: 700; font-size: 13px;
  text-shadow: 1px 1px 0 rgba(185, 103, 255, 0.8); box-shadow: 0 2px 0 #b967ff;
}
.pill.cyan { background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0) 55%), #01cdfe; box-shadow: 0 2px 0 #0184a8; }
.pill.yellow { background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0) 55%), #ffd94a; box-shadow: 0 2px 0 #d9a400; color: #8a5a00; text-shadow: none; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 20px; }
.box {
  background: #fff; border: 3px double #ff71ce; padding: 16px; position: relative;
}
.box h2 {
  font-family: Impact, sans-serif; font-size: 20px; color: #b967ff; letter-spacing: 0.04em;
  margin-bottom: 10px; text-transform: uppercase;
}
.box p { line-height: 1.8; color: #5a4a52; margin-bottom: 10px; }
.new {
  position: absolute; top: -12px; right: -8px; background: #ffd94a; border: 2px solid #fff;
  color: #8a5a00; font-family: Silkscreen, monospace; font-size: 9px; padding: 4px 7px;
  transform: rotate(6deg); box-shadow: 0 2px 0 #d9a400; animation: blink 1s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0.35; } }
.divider { text-align: center; color: #ff71ce; letter-spacing: 0.3em; font-size: 14px; margin: 18px 0; }
.counter {
  text-align: center; background: #111; border: 3px ridge #888; display: inline-block;
  font-family: "Courier New", monospace; color: #4cff4c; font-size: 18px; padding: 8px 14px;
  letter-spacing: 0.25em; text-shadow: 0 0 6px #4cff4c; margin: 0 auto;
}
.counter-row { text-align: center; margin-bottom: 22px; }
.gb { background: #fff; border: 2px dashed #01cdfe; padding: 12px 14px; margin-bottom: 10px; }
.gb b { color: #0184a8; }
.gb span { float: right; font-family: Silkscreen, monospace; font-size: 9px; color: #b967ff; }
.gb p { clear: both; padding-top: 6px; color: #5a4a52; line-height: 1.7; }
footer { text-align: center; font-family: Silkscreen, monospace; font-size: 10px; color: #b967ff; line-height: 2.2; }
footer a { color: #01cdfe; margin: 0 6px; }
@media (max-width: 640px) {
  .cols { grid-template-columns: 1fr; }
  h1 { font-size: 34px; }
}`,body:`
<div class="wrap">
  <h1>★ 小满的主页 ★</h1>
  <div class="sub">WELCOME TO MY HOMEPAGE · EST.2003</div>
  <div class="marquee"><div>☆★☆ 欢迎来到我的主页！今天也要元气满满！本站最佳浏览分辨率 800×600 · 记得签写留言板哦 ☆★☆</div></div>
  <div class="nav">
    <span class="pill">关于我</span><span class="pill cyan">我的相册</span><span class="pill yellow">日记本</span><span class="pill">喜欢的乐队</span>
  </div>
  <div class="cols">
    <div class="box">
      <div class="new">NEW!</div>
      <h2>关于我</h2>
      <p>昵称：小满<br />星座：水做的星座<br />爱好：收集亮闪闪的东西</p>
      <p>这座主页是我一砖一瓦贴出来的，连背景星星都是矢量手贴的，不许说它吵！</p>
    </div>
    <div class="box">
      <h2>今日运势</h2>
      <p><b style="color:#ff71ce">★★★★☆</b><br />幸运色：电青<br />幸运数字：08<br />宜：逛美术馆<br />忌：写周报</p>
    </div>
  </div>
  <div class="divider">·:・.⋆ ✧ ⋆.・:·</div>
  <div class="counter-row"><div class="counter">你是第 001337 位访客</div></div>
  <div class="box" style="border-color:#01cdfe; margin-bottom:20px">
    <h2 style="color:#0184a8">留言板</h2>
    <div class="gb"><b>阿禾</b><span>2003.08.12</span><p>你的主页是我今天的快乐源泉！！！（顺便：背景星星能发我吗）</p></div>
    <div class="gb"><b>路人甲</b><span>2003.08.11</span><p>路过留爪。贵站已加入我的收藏夹「闪亮分类」。</p></div>
  </div>
  <footer>
    <div><a>← 上一个主页</a> ◆ <a>主页联盟 RING</a> ◆ <a>下一个主页 →</a></div>
    <div>© 2003 小满™ · 本页由 Dreamweaver 纯手工打造 · 版权没有 侵权不究</div>
  </footer>
</div>${ua()}`,js:xa()})}},Qb={bg:"#101014",surface:"#17161c",alt:"rgba(201,162,39,0.1)",text:"#f0ead6",muted:"#9a917c",primary:"#c9a227",onPrimary:"#1a1508",border:"rgba(201,162,39,0.42)",radius:"2px",radiusLg:"4px",shadow:"none",font:'"Didot", "Playfair Display", Georgia, "Songti SC", serif',mono:"Georgia, serif",ok:"#7fb069",warn:"#c9a227",err:"#c0392b",info:"#5d8aa8",focus:"#c9a227",extraCss:".sc-cell{outline:1px solid rgba(201,162,39,0.22);outline-offset:3px;}.sc-btn{text-transform:uppercase;letter-spacing:0.24em;font-size:12px;border-radius:2px;}.sc-head h2{text-transform:uppercase;letter-spacing:0.2em;font-weight:400;}.sc-badge{border-radius:2px;text-transform:uppercase;letter-spacing:0.14em;}.sc-tbl th{letter-spacing:0.2em;}"},Zb={id:"deco",no:"10",name:"装饰艺术",nameEn:"Art Deco",tagline:"金与深绿、几何扇形、对称庄严——盖茨比请柬。",origin:"1925 巴黎博览会 / 克莱斯勒大厦",year:"1920s — 30s",tags:["金色","几何","对称","奢华"],bestFor:["高端活动邀请","酒店/餐饮品牌","颁奖/典礼页"],avoid:["工具产品","轻松向内容"],prompt:`# 设计范式：装饰艺术（Art Deco）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：1925 巴黎的博览会之夜；机械时代的奢华，几何化的华丽
- 情绪关键词：庄严、对称、鎏金、仪式感

## 2. 布局
- 严格对称：中轴线贯穿全部内容，元素成对出现
- 外框：粗金线 + 细金线组成的双线边框（3px + 1px，间距 4px）
- 四角放置小菱形/直角纹样；顶部或底部一枚放射扇形（sunburst）

## 3. 字体排印
- 标题：Cinzel / Poiret One / Trajan，全大写，字距 0.3-0.5em，36-56px
- 正文：同族 12-14px、字距 0.15-0.2em、行距 1.9
- 数字用罗马式或旧式数字；小号全大写标签做「票券」感

## 4. 色彩
- 底：深墨绿 #0e2a23 或黑 #0d0d0d
- 金：#c9a227（主）/ #e8c96a（亮金，仅高光）/ 象牙 #f3ead8（文字）
- 全场不超过这三色一底；无渐变（金属感用明度差模拟）

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：菱形 ◆ 项目符号与金双线分隔（◆ — ◆）
- 按钮：1px 金框 + radius 2px + 0.3em 字距金字；hover 0.24s 填金转黑字
- 输入框：1px 金底线 + 上方大写小标签；focus 线变双线且两端浮现 ◆
- 下拉框浮层：墨黑底 + 金框 + 四角菱形装饰
- 开关：细金轨 + 菱形钮
- 表格：1px 金细线全框 + 表头金字 + hover 铺 8% 金底
- 对称纪律：所有组件左右严格对称，装饰必须成对出现
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：由透明转为金底黑字，伴随 0.22s 填色
- active：整体内缩 1px（outline 位移），像压印下去
- focus-visible：金双线外框（outline + box-shadow 叠加实现双线）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，240ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（240ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角墨黑金框卡片，从右侧 12px 平移入，停留 3s 后下降 8px 淡出
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 240ms（对称式装饰动效可到 400ms），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 扇形：repeating-conic-gradient 做放射线，置于标题背后或页面顶部
- 阶梯纹：repeating-linear-gradient 做chevron/阶梯边饰（仅一处）
- 文字可加极淡金色辉光（text-shadow 0 0 12px rgba(201,162,39,0.25)）

## 7. 禁忌
- 禁止非对称布局、大圆角、无衬线小写正文、明亮撞色
- 禁止现代卡片阴影体系、渐变按钮、emoji
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["中轴严格对称；粗+细双线金框，四角菱形","Cinzel 全大写 + 宽字距（0.3-0.5em）","三色：墨绿底 / 金 / 象牙；金属感靠明度差","repeating-conic 放射扇形 + ◆—◆ 分隔"],tokens:{colors:[{name:"墨绿底",value:"#0e2a23"},{name:"金",value:"#c9a227"},{name:"亮金",value:"#e8c96a"},{name:"象牙",value:"#f3ead8"}],fonts:[{role:"全场",stack:'Cinzel, Poiret One, "Noto Serif SC", "Songti SC", serif'}],radius:"2px",shadow:"无（金色辉光代替）",extras:[{label:"双线框",value:"3px 金 + 1px 金，间距 4px"},{label:"扇形",value:"repeating-conic-gradient 放射"}]},demo:{height:1650,heightMobile:2300,html:da({title:"装饰艺术 · Art Deco",fonts:["Cinzel:wght@400;600;700","Poiret+One"],css:pa(Qb)+`
body {
  font-family: Cinzel, Poiret One, "Noto Serif SC", "Songti SC", serif;
  background:
    radial-gradient(60% 50% at 50% 38%, rgba(201, 162, 39, 0.09), transparent 70%),
    #0e2a23;
  color: #f3ead8; min-height: 100vh; display: flex; flex-direction: column; align-items: center;
  padding: 34px 20px;
}
.card {
  position: relative; width: min(560px, 94vw); padding: 46px 52px 40px; text-align: center;
  border: 3px solid #c9a227; outline: 1px solid #c9a227; outline-offset: 5px;
}
.corner { position: absolute; width: 12px; height: 12px; background: #c9a227; transform: rotate(45deg); }
.corner.tl { top: -7px; left: -7px; } .corner.tr { top: -7px; right: -7px; }
.corner.bl { bottom: -7px; left: -7px; } .corner.br { bottom: -7px; right: -7px; }
.fan {
  width: 220px; height: 110px; margin: 0 auto 6px;
  background: repeating-conic-gradient(from 181deg at 50% 100%, rgba(201, 162, 39, 0.5) 0deg 2.5deg, transparent 2.5deg 9deg);
  mask-image: linear-gradient(180deg, #000 55%, transparent);
  -webkit-mask-image: linear-gradient(180deg, #000 55%, transparent);
}
.est { font-size: 11px; letter-spacing: 0.5em; color: #c9a227; margin-bottom: 20px; }
h1 {
  font-size: 44px; font-weight: 700; letter-spacing: 0.42em; text-indent: 0.42em;
  color: #e8c96a; text-shadow: 0 0 18px rgba(201, 162, 39, 0.3); line-height: 1.3;
}
.en { font-family: "Poiret One", serif; font-size: 14px; letter-spacing: 0.55em; text-indent: 0.55em; color: #f3ead8; margin-top: 12px; text-transform: uppercase; }
.sep { color: #c9a227; letter-spacing: 0.4em; margin: 26px 0; font-size: 13px; }
.details { display: grid; gap: 15px; margin: 8px auto 30px; max-width: 380px; }
.details .row { display: flex; align-items: baseline; gap: 12px; font-size: 13.5px; letter-spacing: 0.14em; }
.details .row::before { content: "◆"; color: #c9a227; font-size: 9px; }
.details .row b { font-weight: 600; letter-spacing: 0.2em; color: #e8c96a; }
.details .row span { color: #f3ead8; }
.rsvp {
  display: inline-block; border: 1px solid #c9a227; color: #e8c96a; background: transparent;
  font-family: inherit; font-size: 13px; letter-spacing: 0.34em; text-indent: 0.34em;
  padding: 13px 34px; cursor: default; transition: background 0.15s, color 0.15s;
}
.rsvp:hover { background: #c9a227; color: #0e2a23; }
.foot { margin-top: 30px; font-size: 10px; letter-spacing: 0.4em; color: rgba(243, 234, 216, 0.5); }
.step {
  height: 8px; margin-top: 26px;
  background: repeating-linear-gradient(90deg, #c9a227 0 8px, transparent 8px 16px);
  opacity: 0.5;
}
@media (max-width: 640px) {
  .card { padding: 36px 24px 30px; }
  h1 { font-size: 28px; letter-spacing: 0.3em; text-indent: 0.3em; }
  .details .row { font-size: 12px; }
}
.card { margin: auto 0; }
.sc-root { width: 100%; }`,body:`
<div class="card">
  <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
  <div class="fan"></div>
  <div class="est">EST. MMXXVI · SHANGHAI</div>
  <h1>大幕将启</h1>
  <div class="en">The Grand Opening</div>
  <div class="sep">◆ — ◆ — ◆</div>
  <div class="details">
    <div class="row"><b>时间</b><span>二零二六年十一月一日 · 戌时</span></div>
    <div class="row"><b>地点</b><span>外滩源 · 装饰艺术礼堂</span></div>
    <div class="row"><b>着装</b><span>黑领结 / 晚礼服</span></div>
  </div>
  <button class="rsvp">赐 覆</button>
  <div class="step"></div>
  <div class="foot">PARADIGM HALL · No.10 · 金 与 几 何</div>
</div>${ua()}`,js:xa()})}},Kb={bg:"#e8e6e1",surface:"#f2f0ec",alt:"rgba(0,0,0,0.05)",text:"#3a3a3a",muted:"#8a877f",primary:"#4a90d9",onPrimary:"#ffffff",border:"rgba(0,0,0,0.18)",radius:"10px",radiusLg:"14px",shadow:"0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 #ffffff",font:'"Lucida Grande", "Segoe UI", "PingFang SC", sans-serif',mono:'ui-monospace, "SF Mono", Consolas, monospace',ok:"#4caf50",warn:"#ff9800",err:"#e53935",info:"#1e88e5",focus:"#4a90d9",extraCss:".sc-cell{background:linear-gradient(180deg,#f7f6f3,#e9e7e2);box-shadow:0 2px 4px rgba(0,0,0,0.18),inset 0 1px 0 #fff,inset 0 -1px 0 rgba(0,0,0,0.06);}.sc-btn{background:linear-gradient(180deg,#ffffff,#dfddd8);box-shadow:0 2px 3px rgba(0,0,0,0.2),inset 0 1px 0 #fff;}.sc-btn.pri{background:linear-gradient(180deg,#6db3f2,#3a7bc8);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);}.sc-inp,.sc-ta,.sc-sel-btn{background:linear-gradient(180deg,#e6e4df,#f4f3f0);box-shadow:inset 0 2px 3px rgba(0,0,0,0.12);}.sc-prog{box-shadow:inset 0 1px 3px rgba(0,0,0,0.25);}"},Jb={id:"skeuo",no:"11",name:"新拟物 · 触感",nameEn:"Skeuomorphic / Soft UI",tagline:"凸起的按钮、凹陷的凹槽、会亮的 LED——屏幕里的实体。",origin:"iOS 6 / 早期 Apple HIG / 硬件面板",year:"2007 — 2013",tags:["拟物","浮雕","光源","触感"],bestFor:["音频/硬件控制台","工具面板","复古科技产品页"],avoid:["内容型网站","极简品牌站"],prompt:`# 设计范式：新拟物 · 触感（Skeuomorphic / Soft UI）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：屏幕里的硬件面板；每个控件都该让人想「按下去」
- 情绪关键词：踏实、精密、触感、机械美

## 2. 布局
- 一台「设备」即一个面板：拉丝金属或哑光塑料底，圆角 12-16px
- 控件分组嵌入面板，组与组之间用凹陷的凹槽（groove）分隔
- 信息显示区（LCD/LED 屏）是凹陷的深色玻璃；操作区是凸起的实体

## 3. 字体排印
- Lucida Grande / Helvetica / 系统无衬线；标签 11-12px
- 屏幕文字用等宽或 LED 感字体，字距略宽
- 刻度与单位小号灰色，数值大号深灰

## 4. 色彩
- 面板 #e9ecf1 / 凸起高光 #ffffff / 凸起暗部 #c3c9d2
- 凹陷 #dfe3e9；屏幕底 #1e2b22；LED 绿 #7ee787、琥珀 #ffb454
- 全场一档中性灰体系 + 单一功能色（LED 色）

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：旋钮（径向渐变球体 + 顶部高光 + 刻线）与 LED 指示灯（亮点 + 辉光）
- 按钮：凸起三件套——垂直渐变 + inset 0 1px 0 白 + 外投影；active 全部反转为 inset（真实按压）
- 输入框：凹陷井 inset 2px 2px 4px + 底色比面板暗 5%
- 下拉框浮层：有厚度的实体板 + 顶部高光；选项 hover 蓝渐变（系统菜单手感）
- 开关：金属拉丝轨道 + ON 青色亮底
- 表格：凸起表头渐变 + 淡斑马纹 + hover 蓝渐变行（Finder 手感）
- 材质纪律：每个控件必须同时有高光与阴影两种光才算成立
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：整体提亮 4%，光泽位置随之移动
- active：阴影由外凸切换为 inset（视觉上真实被按下）
- focus-visible：蓝色光环 0 0 0 3px rgba(0,122,255,.35)；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，180ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（180ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：顶部居中的实体白卡（系统通知手感），从上方滑入 0.24s，3s 后收回，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 180ms（旋钮拖动不出 transition，跟手即可），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 全场景统一光源：左上 45°，所有高光/阴影方向一致
- 拉丝金属：1px repeating-linear-gradient 细纹叠加
- LED 屏：深绿底 + 绿字 + 微弱辉光；可加扫描线
- 文字可「雕刻」：color #8a93a0 + text-shadow 0 1px 0 rgba(255,255,255,.9)

## 7. 禁忌
- 禁止扁平无边框控件、玻璃拟态、暗色模式混淆光影
- 禁止渐变按钮（Web 2.0 那种亮蓝渐变胶囊——那是另一种风格）
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["统一左上 45° 光源：凸起/凹陷/刻字三套阴影公式","凹陷凹槽分隔分组；LCD 屏深绿凹陷 + 微辉光","LED 状态灯：radial 亮点 + 辉光","拉丝金属 1px 纹；雕刻文字双色阴影"],tokens:{colors:[{name:"面板",value:"#e9ecf1"},{name:"凸起亮",value:"#ffffff"},{name:"凸起暗",value:"#c3c9d2"},{name:"凹陷",value:"#dfe3e9"},{name:"LED 绿",value:"#7ee787"}],fonts:[{role:"全场",stack:'"Lucida Grande", "Helvetica Neue", "PingFang SC", sans-serif'}],radius:"8-16px",shadow:"凸起 inset 0 1px 0 #fff + 0 2px 4px rgba(0,0,0,.15)",extras:[{label:"光源",value:"左上 45° 全场统一"}]},demo:{height:1550,heightMobile:2320,html:da({title:"新拟物 · 触感",css:pa(Kb)+`
body {
  font-family: "Lucida Grande", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;
  min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 28px;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 3px),
    linear-gradient(180deg, #cfd5dd, #b9c0ca);
}
.device {
  width: min(680px, 94vw); border-radius: 18px; padding: 22px 26px 26px;
  background: linear-gradient(180deg, #f2f4f8, #dde2e9);
  border: 1px solid #aab1bb;
  box-shadow: inset 0 1px 0 #fff, inset 0 -1px 0 rgba(0,0,0,0.06), 0 14px 34px rgba(20, 30, 45, 0.28);
}
.d-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
.engraved {
  font-size: 12px; font-weight: 700; letter-spacing: 0.24em; color: #8a93a0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.95);
}
.brand-led { display: flex; align-items: center; gap: 8px; font-size: 11px; color: #8a93a0; letter-spacing: 0.18em; text-shadow: 0 1px 0 rgba(255,255,255,.9); }
.led { width: 8px; height: 8px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #d6ffd9, #7ee787 55%, #3f9e4d); box-shadow: 0 0 8px rgba(126, 231, 135, 0.9), inset 0 -1px 1px rgba(0,0,0,0.25); }
.groove { border-top: 1px solid rgba(0,0,0,0.14); border-bottom: 1px solid #fff; margin: 16px 0; }
.lcd {
  background: linear-gradient(180deg, #1b2a21, #16211b); border-radius: 10px; padding: 14px 18px;
  box-shadow: inset 2px 2px 5px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(0,0,0,0.3), 0 1px 0 #fff;
  color: #8ff0a4; font-family: "JetBrains Mono", "Courier New", monospace; font-size: 15px; letter-spacing: 0.12em;
  text-shadow: 0 0 8px rgba(143, 240, 164, 0.45);
  display: flex; align-items: center; justify-content: space-between;
}
.vu { display: flex; gap: 3px; align-items: flex-end; height: 18px; }
.vu i { width: 5px; background: linear-gradient(180deg, #8ff0a4, #4fae63); border-radius: 1px; box-shadow: 0 0 4px rgba(143,240,164,.6); }
.mixer { display: flex; justify-content: space-between; gap: 18px; padding: 6px 4px 0; }
.fader { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.fader .slot {
  width: 14px; height: 130px; border-radius: 7px; position: relative;
  background: #d3d8e0; box-shadow: inset 2px 2px 4px rgba(0,0,0,0.22), inset -1px -1px 0 rgba(255,255,255,0.8);
}
.fader .cap {
  position: absolute; left: 50%; transform: translate(-50%, -50%); width: 26px; height: 18px; border-radius: 5px;
  background: linear-gradient(180deg, #ffffff, #c3c9d2); border: 1px solid #a9b0ba;
  box-shadow: inset 0 1px 0 #fff, 0 2px 4px rgba(0,0,0,0.22);
}
.fader .cap::after { content: ""; position: absolute; left: 3px; right: 3px; top: 50%; height: 1px; background: #8a93a0; }
.fader .lab { font-size: 10px; color: #8a93a0; letter-spacing: 0.08em; text-shadow: 0 1px 0 rgba(255,255,255,.9); }
.switches { display: flex; gap: 22px; align-items: center; }
.sw { display: flex; align-items: center; gap: 8px; }
.sw .base {
  width: 44px; height: 22px; border-radius: 11px; position: relative;
  background: #d3d8e0; box-shadow: inset 2px 2px 4px rgba(0,0,0,0.2), 0 1px 0 #fff;
}
.sw .knob {
  position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #ffffff, #c3c9d2 70%);
  border: 1px solid #a9b0ba; box-shadow: inset 0 1px 0 #fff, 0 2px 3px rgba(0,0,0,0.25);
}
.sw.on .knob { left: 24px; }
.sw .lab { font-size: 11px; color: #7d8692; letter-spacing: 0.1em; text-shadow: 0 1px 0 rgba(255,255,255,.9); }
.play {
  width: 62px; height: 62px; border-radius: 50%; flex: none; margin-left: auto;
  background: radial-gradient(circle at 34% 26%, #9db9f5, #5b8def 45%, #2b5fd9);
  border: 1px solid #24509f; box-shadow: inset 0 2px 0 rgba(255,255,255,0.55), 0 4px 8px rgba(20, 40, 90, 0.35);
  display: flex; align-items: center; justify-content: center;
}
@media (max-width: 720px) {
  .fader .slot { height: 96px; }
  .switches { flex-wrap: wrap; gap: 14px; }
  .mixer { gap: 8px; }
}
.device { margin: auto 0; }
.sc-root { width: 100%; }`,body:`
<div class="device">
  <div class="d-head">
    <div class="engraved">MIXER · 01</div>
    <div class="brand-led"><span class="led"></span>POWER · ON</div>
  </div>
  <div class="lcd">
    <span>TRACK 01 · 03:24</span>
    <div class="vu"><i style="height:40%"></i><i style="height:70%"></i><i style="height:100%"></i><i style="height:55%"></i><i style="height:85%"></i><i style="height:30%"></i><i style="height:60%"></i></div>
  </div>
  <div class="groove"></div>
  <div class="mixer">
    <div class="fader"><div class="slot"><div class="cap" style="top: 22%"></div></div><div class="lab">LOW</div></div>
    <div class="fader"><div class="slot"><div class="cap" style="top: 38%"></div></div><div class="lab">MID</div></div>
    <div class="fader"><div class="slot"><div class="cap" style="top: 30%"></div></div><div class="lab">HIGH</div></div>
    <div class="fader"><div class="slot"><div class="cap" style="top: 55%"></div></div><div class="lab">FX</div></div>
    <div class="fader"><div class="slot"><div class="cap" style="top: 18%"></div></div><div class="lab">OUT</div></div>
  </div>
  <div class="groove"></div>
  <div style="display:flex; align-items:center; gap:26px; flex-wrap:wrap">
    <div class="switches">
      <div class="sw on"><span class="lab">MUTE</span><div class="base"><div class="knob"></div></div><span class="led"></span></div>
      <div class="sw"><span class="lab">SOLO</span><div class="base"><div class="knob"></div></div><span class="led" style="background:radial-gradient(circle at 35% 30%, #6b7280, #4b5563 60%); box-shadow:none"></span></div>
      <div class="sw on"><span class="lab">LOOP</span><div class="base"><div class="knob"></div></div><span class="led"></span></div>
    </div>
    <div class="play">
      <svg width="18" height="18" viewBox="0 0 16 16" fill="#fff"><path d="M3 1.5v13l11-6.5z"/></svg>
    </div>
  </div>
</div>${ua()}`,js:xa()})}},$b={bg:"#e8dcc4",surface:"#f2ead8",alt:"rgba(60,45,30,0.06)",text:"#2e2620",muted:"#7d6f5c",primary:"#b33a2b",onPrimary:"#f2ead8",border:"rgba(46,38,32,0.4)",radius:"3px",radiusLg:"6px",shadow:"3px 3px 0 rgba(46,38,32,0.25)",font:'"Arial Black", "Impact", "PingFang SC", sans-serif',mono:'"Courier New", monospace',ok:"#4a7c59",warn:"#c08a2e",err:"#b33a2b",info:"#4a5d6b",focus:"#b33a2b",extraCss:'.sc-cell{box-shadow:3px 3px 0 rgba(46,38,32,0.25);}.sc-btn{font-weight:700;text-transform:uppercase;box-shadow:3px 3px 0 rgba(46,38,32,0.3);}.sc-btn:active{transform:translate(3px,3px);box-shadow:0 0 0 rgba(46,38,32,0.3);}.sc-btn.pri{background:#b33a2b;color:#f2ead8;}.sc-inp,.sc-ta,.sc-sel-btn{background:#efe7d3;box-shadow:inset 2px 2px 0 rgba(46,38,32,0.15);}.sc-cell h5{font-family:"Courier New",monospace;letter-spacing:0.2em;}'},Fb={id:"zine",no:"12",name:"手工纸艺 · 剪贴薄",nameEn:"Paper Zine",tagline:"胶带、贴纸、剪报和马克笔笔迹——像手作的 zine。",origin:"Riso 印刷 / 独立杂志 / 剪贴簿",year:"常青",tags:["拼贴","手写","胶带","暖纸"],bestFor:["活动海报","个人作品集","咖啡/书店品牌"],avoid:["严肃 B 端","数据产品"],prompt:`# 设计范式：手工纸艺 · 剪贴薄（Paper Zine）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：从印刷厂捡回来的边角料拼成的一页 zine；手作、温暖、不完美
- 情绪关键词：亲切、手工、 playful、纸上

## 2. 布局
- 整页即一张工作台：元素「贴」在纸上，允许旋转 -3°~3°、相互轻压
- 标题用「剪下来的字母」：每个字一个白纸块，独立微旋转
- 2-3 栏不等宽文字（像剪报），栏间允许元素跨界

## 3. 字体排印
- 标题：Tahoma / 无衬线粗体，字号 40-56px，字块带纸感
- 正文：Tahoma / serif 12-13px、行高 1.9、两端对齐
- 手写标注：Caveat / Kalam，16-20px，只用于批注（不超过 3 处）

## 4. 色彩
- 牛皮纸底 #e9dfc9（可叠 4% 噪点）；纸白 #f7f3e8；墨 #2a2620
- 马克笔红 #d94f30 与荧光黄 #ffd94a 是唯二「笔迹色」
- 胶带：rgba(220,200,120,0.55) 半透明条

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：胶带贴片（54×16 半透明黄条、±30° 贴角）与马克笔高亮（只盖文字下半 40%）
- 按钮：纸片造型 + 轻旋 ±1.5° + 干净投影；hover 像被手指拨动（旋转 +2° 抬起 3px）
- 输入框：横线纸效果（无边框、只有背景横线）；focus 出现铅笔 ✎ 标记
- 下拉框浮层：毛边纸条（clip-path 轻微不规则）；选项 hover 被马克笔涂黄
- 模态框：纸片 + 胶带 + 整体 -1° 旋转 + 牛皮纸色遮罩
- 头像：拍立得（白宽边 + 底部留白写字）
- 一切元素都有 0.5-2° 的「随手放歪」感
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：像被手指拨了一下：旋转 ±1.5° + 抬起 3px + 投影加深
- active：被按下并轻微压扁 rotate(0) scale(0.98)
- focus-visible：马克笔虚线框（2px 且略歪）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，200ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（200ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角贴上的便签小纸（自带随机旋转），进入 0.2s，3s 后向上旋转飘出，最多 3 张
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 200ms（便签类可带 1.56 的回弹系数），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 纸张噪点：feTurbulence data-uri，opacity 0.04-0.06
- 套印错位：可给标题加 1px 偏移的红色「重影」
- 投影统一「干净」：0 2px 4px rgba(0,0,0,0.12)，不要模糊扩散

## 7. 禁忌
- 禁止完美对齐网格、禁止发光/渐变按钮、禁止超过两种手写标注
- 禁止「设计感过强」的留白——纸上要满，但满得有呼吸
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["元素「贴」在纸上：±3° 旋转与轻压叠","标题 = 独立旋转的剪字纸块；拍立得 + 胶带条","牛皮纸底 + 4% 噪点；马克笔红/荧光黄双笔迹色","双线印章 + 手写批注 ≤3 处"],tokens:{colors:[{name:"牛皮纸",value:"#e9dfc9"},{name:"纸白",value:"#f7f3e8"},{name:"墨",value:"#2a2620"},{name:"马克红",value:"#d94f30"},{name:"荧光黄",value:"#ffd94a"}],fonts:[{role:"标题",stack:'Tahoma, "PingFang SC", sans-serif'},{role:"正文",stack:"Tahoma, Georgia, serif"},{role:"批注",stack:'"Caveat", "Kalam", cursive'}],radius:"0（剪纸边）",shadow:"0 2px 4px rgba(0,0,0,0.12)（干净）",extras:[{label:"噪点",value:"feTurbulence data-uri, opacity .05"}]},demo:{height:1670,heightMobile:2480,html:da({title:"手工纸艺 · 剪贴薄",fonts:["Caveat:wght@500;700"],css:pa($b)+`
body {
  font-family: Tahoma, "PingFang SC", "Microsoft YaHei", sans-serif;
  background-color: #e9dfc9;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2"/></filter><rect width="140" height="140" filter="url(%23n)" opacity="0.055"/></svg>');
  color: #2a2620; padding: 40px 22px 44px; min-height: 100vh;
}
.sheet { max-width: 760px; margin: 0 auto; position: relative; }
.headline { margin: 6px 0 10px; line-height: 1; }
.headline span {
  display: inline-block; background: #f7f3e8; font-size: 46px; font-weight: 700;
  padding: 8px 12px 10px; margin: 0 3px 8px 0; box-shadow: 1px 2px 0 rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.05);
}
.headline span:nth-child(1) { transform: rotate(-2deg); }
.headline span:nth-child(2) { transform: rotate(1.5deg); }
.headline span:nth-child(3) { transform: rotate(-1deg); background: #ffd94a; }
.headline span:nth-child(4) { transform: rotate(2deg); }
.headline span:nth-child(5) { transform: rotate(-1.5deg); }
.headline span:nth-child(6) { transform: rotate(1deg); }
.sub { font-size: 14px; color: #6a6353; margin-bottom: 26px; }
.mark {
  background: linear-gradient(104deg, transparent 2%, rgba(217, 79, 48, 0.32) 3%, rgba(217, 79, 48, 0.32) 96%, transparent 97%);
  padding: 0 2px;
}
.note { font-family: "Caveat", "Kalam", cursive; font-size: 21px; color: #d94f30; transform: rotate(-2deg); display: inline-block; margin: 0 0 0 14px; }
.work { display: grid; grid-template-columns: 300px 1fr; gap: 30px; align-items: start; }
.polaroid {
  background: #f7f3e8; padding: 10px 10px 38px; transform: rotate(-2.2deg); position: relative;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.14);
}
.polaroid .img { aspect-ratio: 4 / 3.4; background: linear-gradient(150deg, #d8c9a8, #b8a67e 55%, #9c8a62); }
.polaroid figcaption { font-family: "Caveat", cursive; font-size: 17px; color: #6a6353; text-align: center; margin-top: 8px; }
.tape {
  position: absolute; width: 58px; height: 17px; background: rgba(220, 200, 120, 0.6);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1); top: -9px; left: 50%; transform: translateX(-50%) rotate(-4deg);
}
.tape.tr { top: 40%; left: auto; right: -16px; transform: rotate(38deg); }
.stamp {
  position: absolute; bottom: 14px; right: -12px; border: 3px double #d94f30; color: #d94f30;
  font-size: 11px; font-weight: 700; letter-spacing: 0.18em; padding: 6px 9px; transform: rotate(-7deg);
  background: rgba(247, 243, 232, 0.7);
}
.star { position: absolute; color: #d94f30; font-size: 30px; transform: rotate(12deg); text-shadow: 1px 1px 0 rgba(0,0,0,0.12); }
.star.s1 { top: -18px; right: 8%; }
.star.s2 { bottom: 8%; left: 44%; font-size: 18px; transform: rotate(-14deg); }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; font-size: 12.5px; line-height: 1.95; text-align: justify; }
.cols h3 { font-size: 15px; margin-bottom: 10px; border-bottom: 2px solid #2a2620; display: inline-block; padding-bottom: 2px; }
.cols p { margin-bottom: 14px; }
.divider { text-align: center; margin: 28px 0 6px; color: #d94f30; letter-spacing: 0.2em; font-size: 13px; }
.foot { display: flex; justify-content: space-between; font-size: 11px; color: #6a6353; border-top: 1px dashed rgba(42,38,32,0.4); margin-top: 22px; padding-top: 10px; letter-spacing: 0.08em; }
@media (max-width: 700px) {
  .work { grid-template-columns: 1fr; }
  .headline span { font-size: 32px; }
  .cols { grid-template-columns: 1fr; }
}`,body:`
<div class="sheet">
  <div class="headline"><span>手</span><span>作</span><span>之</span><span>不</span><span>完</span><span>美</span></div>
  <div class="sub">ISSUE 04 · 一本关于「做糊了也很可爱」的独立小杂志 <span class="note">↑ 每个字都是剪下来贴的！</span></div>
  <div class="work">
    <figure class="polaroid">
      <div class="tape"></div><div class="tape tr"></div>
      <div class="img"></div>
      <figcaption>周三下午的工作台</figcaption>
      <div class="stamp">ISSUE 04</div>
    </figure>
    <div class="cols">
      <div>
        <h3>关于这一期</h3>
        <p>这一期我们用一台二手的 Riso 印刷机，印了 200 份。机器有点漏油，所以每页的红色都不太一样——我们认为这<span class="mark">不是瑕疵，是签名</span>。</p>
        <p>内容关于：贴错位置的胶带、晒过太阳的纸、和所有「差一点点就完美」的东西。</p>
      </div>
      <div>
        <h3>栏目</h3>
        <p>01 剪刀与浆糊的伦理<br />02 马克笔越界史<br />03 拍立得显影的九十秒<br />04 读者来信：我的糊作业</p>
        <p>订阅：寄一张你最喜欢的纸给我们，换下一期。</p>
      </div>
    </div>
  </div>
  <span class="star s1">★</span><span class="star s2">★</span>
  <div class="divider">✂ - - - - - - - - - - ✂</div>
  <div class="foot"><span>PARADIGM HALL · No.12</span><span>印于上海 · 2026 秋</span></div>
</div>${ua()}`,js:xa()})}},Ib={bg:"#f4f1ea",surface:"#fffdf8",alt:"rgba(20, 18, 15, 0.06)",text:"#14120f",muted:"#6f6a5e",primary:"#d62828",onPrimary:"#fffdf8",border:"#14120f",radius:"0px",radiusLg:"0px",shadow:"none",font:'"Jost", "PingFang SC", sans-serif',mono:'ui-monospace, "SF Mono", Consolas, monospace',ok:"#1a7f37",warn:"#b45309",err:"#d62828",info:"#1d3557",focus:"#1d3557",extraCss:`
.sc-cell { border-width: 2px; }
.sc-btn { text-transform: uppercase; letter-spacing: 0.08em; font-weight: 500; border-width: 2px; }
.sc-btn.pri { border-width: 2px; }
.sc-head h2 { text-transform: uppercase; letter-spacing: 0.02em; }
.sc-cell h5 { letter-spacing: 0.2em; }
.sc-inp, .sc-ta, .sc-sel-btn { border-width: 2px; border-radius: 0; }
.sc-tbl th { letter-spacing: 0.16em; }
`},Wb={id:"bauhaus",no:"13",name:"包豪斯",nameEn:"Bauhaus",tagline:"三原色、圆三角方——形式追随功能的设计原点。",origin:"1919 魏玛包豪斯学校 / 构成主义 / 国际主义前身",year:"1919 — 1933",tags:["三原色","几何构成","功能主义","非对称"],kind:"paradigm",bestFor:["设计院校与工作室站","文化机构","教育产品","工具类品牌"],avoid:["需要柔软亲切感的母婴/生活类产品","重运营氛围的电商首页"],prompt:`# 设计范式：包豪斯（Bauhaus）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：理性、克制、纪念碑式；像一张 1925 年的展览海报
- 情绪关键词：功能、构成、原色、秩序
- 原则：形式追随功能——每个装饰元素必须同时承担信息或结构职能

## 2. 布局
- 非对称网格：文字块偏左，几何色块偏右，形成张力平衡
- 只用圆、三角、方三种基本形做装饰与图标，不做具象插画
- 粗的水平/垂直分割线（2px 以上）明确分区；允许一条全宽色带压底

## 3. 字体排印
- 标题：几何无衬线（Jost / Futura / Archivo），全大写，48-72px，紧字距
- 正文：同族常规字重 14-16px，行高 1.65，左对齐
- 数字与编号用等宽或表格数字，像图纸标注

## 4. 色彩
- 纸底：暖白 #f4f1ea；墨黑 #14120f
- 三原色只做「面」：红 #d62828、黄 #ffb703、蓝 #1d3557
- 一屏原色不超过三块，且每块面积不等（避免平均分配）

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：几何序号（■ ● ▲ 对应 01/02/03）与三原色大色块
- 按钮：直角 + 2px 墨边 + 大写；hover 填充红/黄/蓝之一并位移 -2px
- 输入框：直角 + 2px 墨边 + 零圆角；focus 边框变原色蓝
- 下拉框浮层：直角 + 2px 墨边 + 顶部一条原色横带
- 开关：原色轨道上滑动的直角方块
- 表格：2px 黑线全框 + 表头黑底白字
- 几何纪律：圆的归圆、方的归方——每个控件只用一种几何形说话
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：填充三原色之一且位移 -2px，文字转白或转墨
- active：位移归零且阴影消失
- focus-visible：2px 黑色实线框外扩 4px（冷峻、必须清晰）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，140ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（140ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角直角卡片堆叠，无位移仅淡入 0.14s，3s 后直线淡出
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 140ms（几何不允许拖泥带水），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 禁用渐变、投影、毛玻璃；质感来自油墨与纸张
- 可用 repeating-linear-gradient 做细密条纹色带（黑/透明相间）
- 图标一律几何形：圆形、三角、方形及其切割

## 7. 禁忌
- 禁止圆角卡片、柔和阴影、低饱和莫兰迪色
- 禁止具象插画与 emoji 图标
- 禁止把三原色平均涂满（那是儿童玩具，不是包豪斯）
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["直角 + 2px 墨边，禁圆角/投影/渐变","三原色做面：红 #d62828 / 黄 #ffb703 / 蓝 #1d3557","圆 / 三角 / 方为唯一装饰语汇","标题全大写、几何无衬线、非对称网格"],tokens:{colors:[{name:"暖白纸",value:"#f4f1ea"},{name:"墨黑",value:"#14120f"},{name:"包豪斯红",value:"#d62828"},{name:"包豪斯黄",value:"#ffb703"},{name:"包豪斯蓝",value:"#1d3557"}],fonts:[{role:"标题/正文",stack:'"Jost", "Futura", "PingFang SC", sans-serif'}],radius:"全部 0px（直角）",shadow:"无",extras:[{label:"边框",value:"2px solid #14120f"},{label:"基本形",value:"● ▲ ■ 及其切割"}]},demo:{height:1380,heightMobile:1700,html:da({title:"包豪斯 · Bauhaus",fonts:["Jost:wght@400;500;700;800"],css:pa(Ib)+`
body { font-family: "Jost", "PingFang SC", sans-serif; background: #f4f1ea; color: #14120f; padding: 44px 30px 50px; }
.shell { max-width: 1080px; margin: 0 auto; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 36px; }
.brand { display: flex; align-items: center; gap: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; font-size: 15px; }
.brand i { width: 15px; height: 15px; background: #d62828; border-radius: 50%; }
.nav-links span { margin-left: 24px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; cursor: default; }
.hero { position: relative; border: 2px solid #14120f; background: #fffdf8; padding: 54px 48px 44px; overflow: hidden; }
.shapes { position: absolute; top: 0; right: 0; width: 320px; height: 100%; pointer-events: none; }
.circ { position: absolute; top: 44px; right: 44px; width: 132px; height: 132px; border-radius: 50%; background: #d62828; }
.tri { position: absolute; top: 168px; right: 150px; width: 0; height: 0; border-left: 62px solid transparent; border-right: 62px solid transparent; border-bottom: 108px solid #1d3557; }
.sq { position: absolute; top: 250px; right: 52px; width: 84px; height: 84px; background: #ffb703; }
.half { position: absolute; top: 130px; right: 0; width: 132px; height: 66px; border-radius: 132px 0 0 0; background: #ffb703; }
.stripe { position: absolute; left: 0; bottom: 0; width: 100%; height: 12px; background: repeating-linear-gradient(90deg, #14120f 0 12px, transparent 12px 24px); }
.hero .kicker { font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; color: #d62828; font-weight: 500; }
.hero h1 { font-size: clamp(40px, 5.4vw, 68px); font-weight: 800; text-transform: uppercase; line-height: 1.02; letter-spacing: -0.01em; margin: 14px 0 20px; max-width: 560px; }
.hero h1 .hl { background: #ffb703; padding: 0 12px; display: inline-block; }
.hero p { max-width: 430px; font-size: 15px; line-height: 1.75; color: #3d3a33; }
.hero form { display: flex; gap: 0; margin-top: 28px; max-width: 430px; }
.hero input { flex: 1; font: inherit; font-size: 14px; padding: 12px 14px; background: #fffdf8; border: 2px solid #14120f; outline: none; border-radius: 0; }
.hero input:focus { border-color: #1d3557; }
.hero button { font: inherit; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 12px 22px; background: #d62828; color: #fffdf8; border: 2px solid #14120f; cursor: pointer; }
.hero button:hover { background: #14120f; }
.principles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; margin-top: 36px; border: 2px solid #14120f; background: #fffdf8; }
.pr { padding: 24px 26px; }
.pr + .pr { border-left: 2px solid #14120f; }
.pr .fig { font-size: 30px; line-height: 1; margin-bottom: 14px; }
.pr:nth-child(1) .fig { color: #d62828; }
.pr:nth-child(2) .fig { color: #1d3557; }
.pr:nth-child(3) .fig { color: #ffb703; }
.pr h3 { font-size: 16px; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
.pr p { font-size: 13px; line-height: 1.7; color: #3d3a33; }
@media (max-width: 760px) {
  .hero { padding: 34px 24px 64px; }
  .shapes { width: 100%; opacity: 0.9; }
  .principles { grid-template-columns: 1fr; }
  .pr + .pr { border-left: 0; border-top: 2px solid #14120f; }
  .hero form { flex-direction: column; }
  .hero button { border-top: 0; }
}`,body:`
<div class="shell">
  <nav class="nav">
    <div class="brand"><i></i>Staatliches Bauhaus</div>
    <div class="nav-links"><span>课程</span><span>工坊</span><span>展览</span><span>报名</span></div>
  </nav>
  <section class="hero">
    <div class="shapes"><span class="circ"></span><span class="tri"></span><span class="sq"></span><span class="half"></span></div>
    <div class="kicker">1919 — 1933 · Weimar · Dessau</div>
    <h1>形式<br />追随<span class="hl">功能</span></h1>
    <p>艺术家与工匠之间没有本质区别。我们拆掉风格的围墙，只保留三样东西：圆、三角、方，和一块诚实的颜色。</p>
    <form onsubmit="return false">
      <input type="email" placeholder="留下邮箱，获取工坊日程" />
      <button type="submit">订阅</button>
    </form>
    <div class="stripe"></div>
  </section>
  <section class="principles">
    <div class="pr"><div class="fig">●</div><h3>圆 · 无限</h3><p>没有起点也没有终点，用于承载连续、循环、社群类信息。</p></div>
    <div class="pr"><div class="fig">▲</div><h3>三角 · 方向</h3><p>最稳定的指向，用于行动召唤、流程与导航结构。</p></div>
    <div class="pr"><div class="fig">■</div><h3>方 · 秩序</h3><p>网格的最小单位，一切内容分区都从它开始。</p></div>
  </section>
</div>${ua()}`,js:xa()})}},Pb={bg:"#fff6e9",surface:"#ffffff",alt:"rgba(26, 26, 46, 0.06)",text:"#1a1a2e",muted:"#7a7490",primary:"#ff4d8d",onPrimary:"#ffffff",border:"#1a1a2e",radius:"999px",radiusLg:"26px",shadow:"4px 4px 0 #1a1a2e",font:'"Baloo 2", "PingFang SC", sans-serif',mono:'ui-monospace, "SF Mono", Consolas, monospace',ok:"#22a06b",warn:"#e8a13a",err:"#ff4d6d",info:"#3a86ff",focus:"#3a86ff",extraCss:`
.sc-cell { border-width: 2.5px; border-radius: 20px; }
.sc-btn { border-width: 2.5px; border-radius: 999px; font-weight: 700; box-shadow: 3px 3px 0 #1a1a2e; }
.sc-btn.pri { box-shadow: 3px 3px 0 #1a1a2e; }
.sc-btn:active { transform: translate(3px, 3px); box-shadow: 0 0 0 #1a1a2e; }
.sc-head h2 { font-weight: 800; }
.sc-cell h5 { letter-spacing: 0.14em; }
.sc-inp, .sc-ta, .sc-sel-btn { border-width: 2.5px; border-radius: 999px; }
.sc-badge { border: 2px solid #1a1a2e; }
.sc-tag { border-width: 2.5px; border-radius: 999px; }
.sc-ava { border: 2.5px solid #1a1a2e; }
.sc-tbl th { letter-spacing: 0.1em; }
`},ag={id:"memphis",no:"14",name:"孟菲斯",nameEn:"Memphis",tagline:"波浪、斑点、撞色贴纸——后现代设计的派对现场。",origin:"1981 米兰孟菲斯集团 / Ettore Sottsass / 后现代主义",year:"1981 — 1988",tags:["撞色","几何拼贴","波点","戏谑"],kind:"paradigm",bestFor:["潮流品牌","活动与音乐节","面向 Z 世代的产品","儿童教育"],avoid:["金融、法律、医疗等严肃场景","需要长期阅读的长内容站点"],prompt:`# 设计范式：孟菲斯（Memphis）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：戏谑、热闹、明目张胆的快乐；像 1981 年米兰的一场设计派对
- 情绪关键词：撞色、拼贴、波点、波浪、不守规矩
- 态度：反对「好品味」——所有元素都故意夸张、鲜艳、不对称

## 2. 布局
- 拼贴式分区：元素像贴纸一样层叠、旋转、压住彼此，允许出格与重叠
- 底色为暖白/奶油色，让高饱和色块跳出来
- 装饰图案随机分布：波浪线、斑点、锯齿、三角、半圆、十字

## 3. 字体排印
- 标题：圆润粗体（Baloo 2 / Fredoka / 思源圆体），48-72px，可略微倾斜
- 正文：同族中等字重 14-16px，行高 1.7
- 关键词用荧光笔式底色涂抹（黄/粉），像马克笔划过

## 4. 色彩
- 底：奶油 #fff6e9；墨 #1a1a2e
- 糖果撞色：粉 #ff4d8d、黄 #ffd23f、蓝 #3a86ff、青 #06d6a0、紫 #9b5de5
- 撞色必须拉开明度差；深墨描边（2.5px 以上）框住所有彩色形状

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：波浪/锯齿分隔线与散落的随机图案（圆点、条纹、折线，方向随机）
- 按钮：糖果色 + 粗墨边 + 硬阴影；hover 位移加深、active 贴边归零
- 输入框：白底粗墨边；focus 变粉 #ff4d8d + 波浪下划线
- 下拉框浮层：自带 -1° 旋转的卡片；hover 填糖果色
- 分段控制：不规则形状（clip-path 切角），不做规整胶囊
- 表格：粗黑线 + 浅粉/浅青斑马纹；hover 柠檬黄
- 反对称纪律：禁止成对、对称、居中的装饰——图案必须散落且方向随机
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：位移 -2px 且硬阴影加深，或额外旋转 2°
- active：回到原位贴边，投影清零
- focus-visible：3px 墨色虚线框外扩 4px（故意夸张）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，180ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（180ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角彩色卡片（随机 ±2° 旋转）堆叠，弹跳进入，3s 后旋转飞出，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 180ms（滑入 / 弹出用 cubic-bezier(.34,1.56,.64,1) 回弹），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 全部硬投影与实色，禁渐变、禁毛玻璃、禁柔和模糊
- 用 repeating-radial-gradient 做波点底纹；用 SVG path 做波浪与锯齿
- 图标：粗形几何贴纸风，不用细线图标

## 7. 禁忌
- 禁止极简留白、性冷淡灰、细线描边
- 禁止把元素对齐得整整齐齐——那是瑞士风，不是孟菲斯
- 禁止低饱和配色
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["粗墨边 2.5px + 4px 硬投影，允许 ±3° 旋转","奶油底 + 糖果撞色：粉/黄/蓝/青/紫","波浪、波点、锯齿为装饰三件套","hover 位移加深投影，active 贴边"],tokens:{colors:[{name:"奶油底",value:"#fff6e9"},{name:"墨",value:"#1a1a2e"},{name:"派对粉",value:"#ff4d8d"},{name:"派对黄",value:"#ffd23f"},{name:"派对蓝",value:"#3a86ff"},{name:"派对青",value:"#06d6a0"}],fonts:[{role:"标题",stack:'"Baloo 2", "Fredoka", "PingFang SC", sans-serif'}],radius:"贴纸 999px / 卡片 20px",shadow:"4px 4px 0 #1a1a2e（硬投影）",extras:[{label:"边框",value:"2.5px solid #1a1a2e"},{label:"图案",value:"波浪 · 波点 · 锯齿"}]},demo:{height:1400,heightMobile:1750,html:da({title:"孟菲斯 · Memphis",fonts:["Baloo+2:wght@500;700;800"],css:pa(Pb)+`
body { font-family: "Baloo 2", "PingFang SC", sans-serif; background: #fff6e9; color: #1a1a2e; padding: 44px 30px 52px; }
.shell { max-width: 1080px; margin: 0 auto; position: relative; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 38px; }
.brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 17px; letter-spacing: 0.02em; }
.brand .dot { width: 14px; height: 14px; border-radius: 50%; background: #ff4d8d; border: 2.5px solid #1a1a2e; }
.nav-links span { margin-left: 20px; font-size: 13px; font-weight: 700; cursor: default; padding: 5px 13px; border: 2.5px solid transparent; border-radius: 999px; }
.nav-links span:hover { border-color: #1a1a2e; background: #ffd23f; }
.hero { position: relative; background: #ffffff; border: 2.5px solid #1a1a2e; border-radius: 28px; box-shadow: 7px 7px 0 #1a1a2e; padding: 48px 46px 42px; transform: rotate(-0.6deg); overflow: hidden; }
.zig { position: absolute; top: 22px; right: 26px; width: 120px; height: 24px; background: repeating-linear-gradient(135deg, #3a86ff 0 10px, transparent 10px 20px); }
.dots { position: absolute; bottom: 18px; right: 22px; width: 110px; height: 70px; background-image: radial-gradient(#ff4d8d 3.5px, transparent 3.5px); background-size: 18px 18px; }
.blob { position: absolute; top: -30px; left: 46%; width: 90px; height: 90px; background: #06d6a0; border: 2.5px solid #1a1a2e; border-radius: 50% 50% 50% 8px; transform: rotate(14deg); }
.badge-star { position: absolute; top: -20px; left: 30px; background: #ffd23f; border: 2.5px solid #1a1a2e; border-radius: 999px; padding: 6px 16px; font-weight: 800; font-size: 13px; transform: rotate(-4deg); box-shadow: 3px 3px 0 #1a1a2e; }
.hero h1 { font-size: clamp(38px, 5.2vw, 64px); font-weight: 800; line-height: 1.06; margin: 12px 0 18px; max-width: 520px; transform: rotate(-1deg); }
.hero h1 .mk { background: linear-gradient(transparent 55%, #ffd23f 55%); padding: 0 6px; }
.hero h1 .pink { color: #ff4d8d; }
.hero p { max-width: 420px; font-size: 15px; line-height: 1.75; font-weight: 500; color: #44425c; }
.cta { display: flex; gap: 14px; margin-top: 26px; flex-wrap: wrap; }
.cta a { font-weight: 800; font-size: 14px; padding: 12px 24px; border: 2.5px solid #1a1a2e; border-radius: 999px; box-shadow: 4px 4px 0 #1a1a2e; cursor: pointer; text-decoration: none; color: #1a1a2e; background: #fff; transition: transform 0.1s, box-shadow 0.1s; }
.cta a.pri { background: #ff4d8d; color: #fff; }
.cta a:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0 #1a1a2e; }
.cta a:active { transform: translate(4px, 4px); box-shadow: 0 0 0 #1a1a2e; }
.wave { margin: 34px auto 0; width: 100%; max-width: 1080px; height: 26px; display: block; }
.stickers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 30px; }
.st { background: #fff; border: 2.5px solid #1a1a2e; border-radius: 22px; box-shadow: 5px 5px 0 #1a1a2e; padding: 20px 22px; }
.st:nth-child(1) { transform: rotate(1.2deg); background: #eaf6ff; }
.st:nth-child(2) { transform: rotate(-1.4deg); background: #fff0f6; }
.st:nth-child(3) { transform: rotate(0.8deg); background: #eefaf3; }
.st b { font-size: 15px; display: block; margin-bottom: 7px; }
.st p { font-size: 13px; line-height: 1.65; color: #44425c; font-weight: 500; }
@media (max-width: 760px) {
  .stickers { grid-template-columns: 1fr; }
  .hero { padding: 36px 24px 78px; }
  .nav-links { display: none; }
}`,body:`
<div class="shell">
  <nav class="nav">
    <div class="brand"><span class="dot"></span>MEMPHIS CLUB</div>
    <div class="nav-links"><span>贴纸</span><span>派对</span><span>商店</span><span>关于</span></div>
  </nav>
  <span class="badge-star">★ 全新上线</span>
  <section class="hero">
    <span class="zig"></span><span class="blob"></span><span class="dots"></span>
    <div style="font-size:13px;font-weight:800;letter-spacing:.18em">1981 · MILANO · 后现代设计派对</div>
    <h1>太<span class="pink">规矩</span>的设计，<br />都欠一点<span class="mk">快乐</span>。</h1>
    <p>我们把波浪、波点和撞色贴满屏幕。这不是混乱，这是 80 年代孟菲斯集团留给世界的处方：好看的东西，理应让人心情好。</p>
    <div class="cta">
      <a class="pri">加入派对 →</a>
      <a>看看作品</a>
    </div>
  </section>
  <svg class="wave" viewBox="0 0 1080 26" preserveAspectRatio="none"><path d="M0 13 Q 27 0 54 13 T 108 13 T 162 13 T 216 13 T 270 13 T 324 13 T 378 13 T 432 13 T 486 13 T 540 13 T 594 13 T 648 13 T 702 13 T 756 13 T 810 13 T 864 13 T 918 13 T 972 13 T 1026 13 T 1080 13" fill="none" stroke="#1a1a2e" stroke-width="2.5" /></svg>
  <section class="stickers">
    <div class="st"><b>▲ 三角贴纸</b><p>所有分区都可以是一张贴纸：粗边、硬影、微微歪着头。</p></div>
    <div class="st"><b>● 波点底纹</b><p>用 radial-gradient 铺一层波点，比纯色多 30% 的活泼感。</p></div>
    <div class="st"><b>✕ 撞色原则</b><p>颜色之间要么明度拉开，要么直接互补——拒绝温吞的中间态。</p></div>
  </section>
</div>${ua()}`,js:xa()})}},eg={bg:"#0a0a12",surface:"#12121e",alt:"rgba(0, 240, 255, 0.08)",text:"#e8f6ff",muted:"#7d8ba3",primary:"#00f0ff",onPrimary:"#04222b",border:"rgba(0, 240, 255, 0.3)",radius:"2px",radiusLg:"4px",shadow:"0 0 18px rgba(0, 240, 255, 0.14)",font:'"Chakra Petch", "PingFang SC", sans-serif',mono:'"Chakra Petch", ui-monospace, monospace',ok:"#00e436",warn:"#fcee0a",err:"#ff003c",info:"#00f0ff",focus:"#00f0ff",extraCss:`
.sc-cell { clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px); border-radius: 0; }
.sc-btn { clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px); border-radius: 0; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; }
.sc-head h2 { text-transform: uppercase; letter-spacing: 0.06em; }
.sc-cell h5 { letter-spacing: 0.22em; color: #00f0ff; }
.sc-inp, .sc-ta, .sc-sel-btn { border-radius: 0; clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px); }
.sc-badge { border-radius: 0; text-transform: uppercase; letter-spacing: 0.08em; clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px); }
.sc-tbl th { letter-spacing: 0.18em; }
`},tg={id:"cyberpunk",no:"15",name:"赛博朋克",nameEn:"Cyberpunk",tagline:"霓虹青与品红、切角 HUD、故障美学——高科技，低生活。",origin:"1982《银翼杀手》/ 1984《神经漫游者》/ 夜之城美学",year:"1982 —",tags:["霓虹","HUD","故障","暗色"],kind:"paradigm",bestFor:["游戏与电竞产品","Web3 与工具站","音乐/潮流活动","开发者工具"],avoid:["儿童产品","政府与公共服务","需要打印归档的文档场景"],prompt:`# 设计范式：赛博朋克（Cyberpunk）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：高科技、低生活；像一块嵌在雨夜楼体上的全息广告屏
- 情绪关键词：霓虹、切角、扫描线、故障、HUD
- 氛围：暗色底上只有霓虹在发光，信息像仪表读数一样精确

## 2. 布局
- 深底 #0a0a12，面板用切角（clip-path 八点切角），禁圆角
- HUD 框架：四角定位角标（L 形括号线）、细网格线、坐标读数
- 信息分区用 1px 霓虹分隔线 + 等宽小标签，像系统日志

## 3. 字体排印
- 标题：窄体科技无衬线（Chakra Petch / Rajdhani），全大写，44-64px，宽字距
- 正文：同族常规字重 13-15px，行高 1.7
- 数字、编号、状态一律等宽，带前导零（如 07/21）

## 4. 色彩
- 底：#0a0a12 / 面板 #12121e；文字 #e8f6ff
- 霓虹主色：青 #00f0ff；强调：品红 #ff003c；警示：黄 #fcee0a；成功：绿 #00e436
- 霓虹只用于边框、图标、关键数字与 hover 态——不大面积填充

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：切角面板（clip-path 单角 45° 切角）与 glitch 单帧抖动
- 按钮：切角 + 1px 青边透明底；hover 青底黑字 + 0.1s glitch 位移（translateX ±1px 一两帧）
- 输入框：切角 + 细青边；focus 青色外发光 12px；错误态 #ff2a6d + 抖动
- 下拉框浮层：切角 + 扫描线背景；hover 行青底黑字
- 进度：等宽数字 + 细条读数，禁止圆角粗条
- 表格：行线 rgba(青,18%)；hover 行出现左侧 ▸ 指示
- 读数纪律：所有数字等宽右对齐，像终端遥测值
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：填充霓虹色 + 文字转深，伴随 0.1s 的轻微 glitch 位移（translateX ±1px）
- active：内容区下移 1px 并触发一次单帧反色
- focus-visible：青色 1px 描边 + 0 0 12px 荧光（必须能一眼看到）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，120ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（120ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角终端信息条堆叠，逐字打印式出现（每个字符 12ms），3s 后整行被「擦除」
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 120ms（glitch 类 60ms / 1-2 帧，扫描线 2.4s 循环），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 全局可叠一层 3px 间距的扫描线（repeating-linear-gradient，opacity 极低）
- 标题可加 glitch：双层错位文字（青/品红各偏移 1-2px）
- 装饰元素：电路线、十字准星、括号角标、片假名乱码斑点

## 7. 禁忌
- 禁止圆角、渐变紫蓝默认配色、毛玻璃大卡片
- 禁止把霓虹当背景大面积铺（那是廉价电竞网咖，不是赛博朋克）
- 禁止明亮底色与轻佻的插画
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["深底 + 切角面板（clip-path），零圆角","霓虹青 #00f0ff / 品红 #ff003c / 警示黄 #fcee0a","HUD 角标 + 扫描线 + 等宽读数","标题全大写窄体，glitch 双层错位"],tokens:{colors:[{name:"夜之城底",value:"#0a0a12"},{name:"面板",value:"#12121e"},{name:"霓虹青",value:"#00f0ff"},{name:"品红",value:"#ff003c"},{name:"警示黄",value:"#fcee0a"},{name:"终端绿",value:"#00e436"}],fonts:[{role:"标题",stack:'"Chakra Petch", "Rajdhani", sans-serif'},{role:"读数",stack:'"Chakra Petch", ui-monospace, monospace'}],radius:"0px（切角代替圆角）",shadow:"0 0 18px rgba(0,240,255,.14)",extras:[{label:"切角",value:"clip-path 八点切角"},{label:"扫描线",value:"repeating-linear-gradient 3px"}]},demo:{height:1400,heightMobile:1750,html:da({title:"赛博朋克 · Cyberpunk",fonts:["Chakra+Petch:wght@400;500;600;700"],css:pa(eg)+`
body { font-family: "Chakra Petch", "PingFang SC", sans-serif; background: #0a0a12; color: #e8f6ff; padding: 44px 30px 52px; }
.shell { max-width: 1080px; margin: 0 auto; position: relative; }
body::after { content: ""; position: fixed; inset: 0; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(0,0,0,0.22) 0 1px, transparent 1px 3px); z-index: 9; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 36px; position: relative; z-index: 2; }
.brand { font-weight: 700; font-size: 16px; letter-spacing: 0.22em; text-transform: uppercase; color: #00f0ff; text-shadow: 0 0 12px rgba(0,240,255,.6); }
.nav-links span { margin-left: 20px; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #7d8ba3; cursor: default; }
.nav-links span:hover { color: #00f0ff; }
.hero { position: relative; background: #12121e; border: 1px solid rgba(0,240,255,0.3); padding: 52px 46px 44px; clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px); overflow: hidden; }
.hero::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(0,240,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.05) 1px, transparent 1px); background-size: 44px 44px; pointer-events: none; }
.corner { position: absolute; width: 18px; height: 18px; border: 2px solid #00f0ff; }
.corner.tl { top: 10px; left: 10px; border-right: 0; border-bottom: 0; }
.corner.tr { top: 10px; right: 10px; border-left: 0; border-bottom: 0; }
.corner.bl { bottom: 10px; left: 10px; border-right: 0; border-top: 0; }
.corner.br { bottom: 10px; right: 10px; border-left: 0; border-top: 0; }
.readout { font-size: 11px; letter-spacing: 0.2em; color: #00f0ff; font-family: "Chakra Petch", monospace; }
.hero h1 { font-size: clamp(38px, 5.4vw, 66px); font-weight: 700; text-transform: uppercase; line-height: 1.04; letter-spacing: 0.04em; margin: 14px 0 18px; max-width: 600px; position: relative; }
.hero h1 .glitch { color: #ff003c; position: relative; }
.hero h1 .glitch::after { content: attr(data-t); position: absolute; left: 2px; top: 0; color: #00f0ff; clip-path: inset(40% 0 30% 0); opacity: .85; }
.hero p { max-width: 440px; font-size: 14.5px; line-height: 1.8; color: #a9b8cf; }
.cta { display: flex; gap: 14px; margin-top: 28px; flex-wrap: wrap; }
.cta a { font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; padding: 11px 24px; border: 1px solid #00f0ff; color: #00f0ff; background: transparent; cursor: pointer; text-decoration: none; clip-path: polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px); transition: background 0.12s, color 0.12s; }
.cta a:hover { background: #00f0ff; color: #04222b; }
.cta a.mag { border-color: #ff003c; color: #ff003c; }
.cta a.mag:hover { background: #ff003c; color: #fff; }
.stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 30px; }
.stat { border: 1px solid rgba(0,240,255,0.22); background: rgba(18,18,30,0.8); padding: 15px 17px; clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); }
.stat b { display: block; font-size: 26px; font-weight: 700; color: #00f0ff; font-variant-numeric: tabular-nums; }
.stat span { font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; color: #7d8ba3; }
@media (max-width: 760px) {
  .stats { grid-template-columns: repeat(2, 1fr); }
  .nav-links { display: none; }
  .hero { padding: 40px 24px 70px; }
}`,body:`
<div class="shell">
  <nav class="nav">
    <div class="brand">NIGHT//CITY</div>
    <div class="nav-links"><span>义体</span><span>网络</span><span>任务</span><span>联络</span></div>
  </nav>
  <section class="hero">
    <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
    <div class="readout">SYS::READY · 坐标 34.0522°N · 信号 98% · 2077.10.25</div>
    <h1>在霓虹里<br /><span class="glitch" data-t="接入未来">接入未来</span></h1>
    <p>把界面当成一块全息屏：切角面板、扫描线、HUD 角标。信息不讨好任何人——它只是精确地亮着，像雨夜的广告牌。</p>
    <div class="cta">
      <a>接入链路 →</a>
      <a class="mag">黑市芯片</a>
    </div>
  </section>
  <section class="stats">
    <div class="stat"><b>07</b><span>在线节点</span></div>
    <div class="stat"><b>128K</b><span>数据吞吐</span></div>
    <div class="stat"><b>0.4ms</b><span>神经延迟</span></div>
    <div class="stat"><b>99.9%</b><span>链路稳定</span></div>
  </section>
</div>${ua()}`,js:xa()})}},lg={bg:"#f3eefc",surface:"#ffffff",alt:"rgba(139, 92, 246, 0.08)",text:"#5b4a72",muted:"#9a8bb0",primary:"#8b5cf6",onPrimary:"#ffffff",border:"rgba(139, 92, 246, 0.16)",radius:"22px",radiusLg:"30px",shadow:"12px 12px 28px rgba(139, 92, 246, 0.18), -8px -8px 18px rgba(255, 255, 255, 0.9)",font:'"Quicksand", "PingFang SC", sans-serif',mono:'ui-monospace, "SF Mono", Consolas, monospace',ok:"#34b37e",warn:"#e8a13a",err:"#f2617a",info:"#5b9df9",focus:"#8b5cf6",extraCss:`
.sc-cell { border: 0; box-shadow: 12px 12px 26px rgba(139,92,246,.14), -6px -6px 14px rgba(255,255,255,.95), inset 0 1px 0 rgba(255,255,255,.9); }
.sc-btn { border: 0; border-radius: 999px; font-weight: 600; box-shadow: 6px 6px 14px rgba(139,92,246,.22), -4px -4px 10px rgba(255,255,255,.9), inset 0 1px 0 rgba(255,255,255,.55); }
.sc-btn:active { transform: translateY(2px); box-shadow: 2px 2px 6px rgba(139,92,246,.18), -2px -2px 6px rgba(255,255,255,.8), inset 0 2px 5px rgba(91,74,114,.16); }
.sc-head h2 { font-weight: 700; }
.sc-inp, .sc-ta, .sc-sel-btn { border: 0; border-radius: 18px; box-shadow: inset 4px 4px 9px rgba(139,92,246,.16), inset -4px -4px 9px rgba(255,255,255,.95); background: #f7f3fe; }
.sc-box, .sc-tag, .sc-badge { border: 0; box-shadow: 3px 3px 7px rgba(139,92,246,.16), -2px -2px 6px rgba(255,255,255,.9); }
.sc-prog { box-shadow: inset 2px 2px 5px rgba(139,92,246,.18); }
.sc-tbl th { letter-spacing: 0.14em; }
`},ng={id:"clay",no:"16",name:"黏土拟态",nameEn:"Claymorphism",tagline:"大圆角、马卡龙色、柔软 3D——界面像能捏的橡皮泥。",origin:"Clay 3D 插画风 / Clay CSS (claymorphism) 2021",year:"2021 —",tags:["柔软","3D","马卡龙","大圆角"],kind:"paradigm",bestFor:["儿童与教育产品","生活方式 App","轻松工具站"," onboarding 引导"],avoid:["专业数据后台","极简主义品牌","需要严肃感的企业官网"],prompt:`# 设计范式：黏土拟态（Claymorphism）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：柔软、蓬松、可触摸；像一块刚捏好的橡皮泥
- 情绪关键词：马卡龙、3D、圆润、安全、治愈
- 核心手法：明亮底色 + 大而柔的多层阴影，制造充气的体积感

## 2. 布局
- 大圆角（20-32px）的大色块分区，元素之间留出呼吸间距
- 允许元素「漂浮」：卡片带大而散的柔和投影
- 装饰用同色系小黏土块（圆形、胶囊形、不规则 blob）散落点缀

## 3. 字体排印
- 标题：圆体（Quicksand / Nunito / 阿里妈妈方圆），600-700 字重，28-44px
- 正文：同族常规字重 14-15px，行高 1.75，字重偏软（500）
- 数字可用圆体等宽数字，避免尖锐的衬线数字

## 4. 色彩
- 底：淡紫 #f3eefc / 淡粉 / 淡蓝（马卡龙浅色）
- 主色：紫 #8b5cf6 或粉 #f2617a；文字：暖灰紫 #5b4a72
- 全部低饱和高明度，禁纯黑纯白大面积对撞

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：胖圆开关（厚轨道 + 大圆钮）与「按进黏土」的凹陷输入井
- 按钮：胶囊 999px + 双层柔影（外散影 + inset 0 1px 0 白 高光）；hover 上浮 2px 影加深；active 切 inset 内凹（按进面板）
- 输入框：inset 凹陷 + 大圆角；focus 凹陷加深 + 紫描边
- 下拉框浮层：radius 20px + 0 16px 40px 厚柔影；hover 选项圆角化 + 紫 8% 底
- 开关：厚轨道 + 白圆钮，ON 紫渐变
- 表格：行高 48px+、无竖线；hover 行整体浮起加一层柔影
- 厚度纪律：所有控件必须「厚」——外散影 + 内高光两层打底
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：上浮 2px + 阴影加深一档（0 8px 24px → 0 12px 32px）
- active：下沉到原位 + inset 0 3px 6px rgba(0,0,0,.12)（按进黏土）
- focus-visible：2px 紫色描边 + 4px 柔光外扩 rgba(139,92,246,.28)；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，240ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（240ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角圆润胶囊堆叠，从下方 16px 弹入，3s 后向下淡出，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 240ms（黏土厚重，动作要慢且有缓动），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 阴影永远是「大模糊、低透明度、多层」：外影 + 顶部内高光 + 底部内暗边
- 可用 radial-gradient 做顶部柔光；装饰 blob 用不规则 border-radius
- 动效全部慢悠悠：0.2s 以上 ease-out，弹性出现

## 7. 禁忌
- 禁止锐利直角、细线描边、硬投影、故障效果
- 禁止高饱和荧光色与强对比霓虹
- 禁止玻璃拟态的模糊背景层（黏土要的是体积，不是透视）
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["大圆角 20-32px + 多层柔和阴影（外影+内高光）","马卡龙浅色底，主色 #8b5cf6，禁纯黑对撞","按钮胶囊形：hover 上浮、active 下沉内凹","输入框内凹 inset 阴影"],tokens:{colors:[{name:"淡紫底",value:"#f3eefc"},{name:"黏土白",value:"#ffffff"},{name:"软紫",value:"#8b5cf6"},{name:"暖灰紫文字",value:"#5b4a72"},{name:"软粉",value:"#f2617a"},{name:"软蓝",value:"#5b9df9"}],fonts:[{role:"标题/正文",stack:'"Quicksand", "Nunito", "PingFang SC", sans-serif'}],radius:"卡片 22-30px / 按钮 999px",shadow:"12px 12px 28px rgba(139,92,246,.18) + 内高光",extras:[{label:"边框",value:"0（体积感来自阴影）"},{label:"动效",value:"0.2s+ ease-out，弹性出现"}]},demo:{height:1400,heightMobile:1750,html:da({title:"黏土拟态 · Claymorphism",fonts:["Quicksand:wght@400;500;600;700"],css:pa(lg)+`
body { font-family: "Quicksand", "PingFang SC", sans-serif; background: #f3eefc; color: #5b4a72; padding: 46px 30px 54px; }
.shell { max-width: 1040px; margin: 0 auto; position: relative; }
.blob { position: absolute; border-radius: 46% 54% 58% 42% / 48% 44% 56% 52%; opacity: .55; pointer-events: none; }
.blob.b1 { width: 120px; height: 120px; background: #ffd6e8; top: -30px; right: 4%; }
.blob.b2 { width: 80px; height: 80px; background: #cfe9ff; top: 40%; left: -20px; }
.blob.b3 { width: 150px; height: 150px; background: #d9f7e6; bottom: -50px; right: -30px; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; position: relative; z-index: 2; }
.brand { display: flex; align-items: center; gap: 11px; font-weight: 700; font-size: 16.5px; }
.brand i { width: 30px; height: 30px; border-radius: 50%; background: #8b5cf6; box-shadow: inset 0 -3px 6px rgba(60,30,120,.35), inset 0 3px 5px rgba(255,255,255,.5); }
.nav-links span { margin-left: 20px; font-size: 13.5px; font-weight: 600; color: #9a8bb0; cursor: default; }
.nav-links span:hover { color: #8b5cf6; }
.hero { position: relative; z-index: 2; background: #ffffff; border-radius: 34px; padding: 52px 48px; box-shadow: 16px 16px 34px rgba(139,92,246,.16), -8px -8px 20px rgba(255,255,255,.9), inset 0 2px 0 rgba(255,255,255,.9); }
.pill { display: inline-block; background: #ede4fe; color: #7c4ddb; font-size: 12px; font-weight: 700; padding: 7px 16px; border-radius: 999px; box-shadow: inset 0 1px 0 rgba(255,255,255,.8); }
.hero h1 { font-size: clamp(36px, 5vw, 58px); font-weight: 700; line-height: 1.14; margin: 16px 0 16px; max-width: 520px; }
.hero h1 em { font-style: normal; color: #8b5cf6; }
.hero p { max-width: 420px; font-size: 15px; line-height: 1.8; font-weight: 500; color: #8d7fa3; }
.cta { display: flex; gap: 14px; margin-top: 30px; flex-wrap: wrap; }
.cta a { font-weight: 700; font-size: 14px; padding: 14px 28px; border-radius: 999px; cursor: pointer; text-decoration: none; background: #8b5cf6; color: #fff; box-shadow: 8px 8px 18px rgba(139,92,246,.3), -5px -5px 12px rgba(255,255,255,.9), inset 0 2px 0 rgba(255,255,255,.4); transition: transform .18s, box-shadow .18s; }
.cta a.gho { background: #f6f1fd; color: #7c4ddb; }
.cta a:hover { transform: translateY(-2px); box-shadow: 10px 12px 22px rgba(139,92,246,.32), -5px -5px 12px rgba(255,255,255,.9), inset 0 2px 0 rgba(255,255,255,.4); }
.cta a:active { transform: translateY(2px); box-shadow: 3px 3px 8px rgba(139,92,246,.22), -3px -3px 8px rgba(255,255,255,.85), inset 0 3px 7px rgba(91,74,114,.18); }
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 34px; position: relative; z-index: 2; }
.card { background: #fff; border-radius: 26px; padding: 24px; box-shadow: 10px 10px 24px rgba(139,92,246,.14), -6px -6px 14px rgba(255,255,255,.9), inset 0 2px 0 rgba(255,255,255,.9); }
.card .ic { width: 46px; height: 46px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 21px; margin-bottom: 14px; box-shadow: inset 0 -3px 6px rgba(0,0,0,.08), inset 0 3px 5px rgba(255,255,255,.6); }
.card:nth-child(1) .ic { background: #ffd6e8; }
.card:nth-child(2) .ic { background: #cfe9ff; }
.card:nth-child(3) .ic { background: #d9f7e6; }
.card b { display: block; font-size: 15.5px; margin-bottom: 7px; }
.card p { font-size: 13px; line-height: 1.7; color: #8d7fa3; font-weight: 500; }
@media (max-width: 760px) {
  .cards { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .hero { padding: 38px 26px; }
}`,body:`
<div class="shell">
  <span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span>
  <nav class="nav">
    <div class="brand"><i></i>ClayKit</div>
    <div class="nav-links"><span>组件</span><span>主题</span><span>价格</span><span>博客</span></div>
  </nav>
  <section class="hero">
    <span class="pill">✨ v2.0 柔软登场</span>
    <h1>把界面，<br />捏成<em>橡皮泥</em>。</h1>
    <p>没有尖锐的直角，没有冰冷的描边。每一个按钮都像刚揉好的黏土——按下去会陷进去，松手会弹回来。</p>
    <div class="cta">
      <a>免费捏一个 →</a>
      <a class="gho">看看组件</a>
    </div>
  </section>
  <section class="cards">
    <div class="card"><div class="ic">🎈</div><b>充气体积</b><p>多层柔和阴影堆出 3D 体积，元素像充满了空气。</p></div>
    <div class="card"><div class="ic">🫧</div><b>马卡龙色</b><p>低饱和高明度配色，看久了眼睛也不会累。</p></div>
    <div class="card"><div class="ic">🧸</div><b>按压手感</b><p>按钮按下时内凹、回弹时上浮，触觉先于视觉。</p></div>
  </section>
</div>${ua()}`,js:xa()})}},ig={bg:"#fffdf5",surface:"#fffef9",alt:"rgba(43, 43, 43, 0.05)",text:"#3a3226",muted:"#8d8271",primary:"#2b2b2b",onPrimary:"#fffdf5",border:"#3a3226",radius:"255px 15px 225px 15px / 15px 225px 15px 255px",radiusLg:"18px",shadow:"3px 4px 0 rgba(59, 50, 38, 0.16)",font:'"Patrick Hand", "Nunito", "PingFang SC", cursive, sans-serif',mono:'"Caveat", ui-monospace, cursive',ok:"#4a7c59",warn:"#c08a2e",err:"#c05353",info:"#4a6fa5",focus:"#4a6fa5",extraCss:`
.sc-cell { border-width: 2px; border-radius: 18px 22px 17px 24px; }
.sc-btn { border-width: 2px; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; font-size: 14px; }
.sc-btn.pri { background: #ffe066; color: #3a3226; }
.sc-head h2 { font-family: "Caveat", "Patrick Hand", cursive; font-size: 34px; font-weight: 700; }
.sc-kicker { text-decoration: underline wavy #ff8fa3 2px; text-underline-offset: 4px; }
.sc-inp, .sc-ta, .sc-sel-btn { border-width: 2px; border-radius: 200px 14px 190px 14px / 14px 190px 14px 200px; }
.sc-badge { border: 2px solid #3a3226; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; }
.sc-tag { border-width: 2px; }
.sc-tbl th { letter-spacing: 0.1em; }
`},sg={id:"handdrawn",no:"17",name:"手绘涂鸦",nameEn:"Hand-drawn",tagline:"歪歪扭扭的边框、马克笔高亮、手写便签——像笔记本里的草图。",origin:"Excalidraw / Doodle 风 / 手账与白板文化",year:"2020 —",tags:["手写体","不规则边框","马克笔","便签"],kind:"paradigm",bestFor:["笔记与白板工具","教育产品","个人博客","头脑风暴场景"],avoid:["数据密集型后台","金融交易界面","需要像素级精确的品牌视觉"],prompt:`# 设计范式：手绘涂鸦（Hand-drawn）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：亲切、未完成、像从笔记本里撕下来的草图
- 情绪关键词：手写、涂鸦、便签、马克笔、人情味
- 核心手法：所有「本该笔直」的东西都故意歪一点

## 2. 布局
- 纸张感：米白/纸色底，可叠淡格线（repeating-linear-gradient）
- 分区像贴便签：元素带撕纸感圆角与轻微旋转（-1.5deg ~ 1.5deg）
- 装饰随手画：箭头、星星、圆圈、波浪线、对勾——用 SVG 或 unicode

## 3. 字体排印
- 标题：手写体（Caveat / Patrick Hand / 手书体），32-48px
- 正文：圆润无衬线（Nunito / 思源黑体）13-15px，保证可读性
- 强调用马克笔效果：linear-gradient(transparent 60%, 荧光色 60%) 涂抹

## 4. 色彩
- 纸：#fffdf5；墨：#3a3226（不用纯黑，用暖墨）
- 点缀：马克笔黄 #ffe066、粉 #ff8fa3、蓝 #a0c4ff、绿 #b5e48c
- 彩色只做高亮与重点，不大面积填充

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：不规则圆角边框（255px 15px 225px 15px / 15px 225px 15px 255px）与手绘对勾
- 按钮：2px 墨边 + 歪 1deg；hover 像被笔划过——填充以 clip-path 推进 0.24s
- 输入框：SVG 抖动路径边框；focus 角落浮现 ✦
- 下拉框浮层：歪纸片 + 手绘边框；选中项画一个潦草的勾（SVG path）
- 表格：略抖的手画格线、行高刻意不均
- 一致性纪律：故意不一致——每个控件歪的角度都不同，但必须是同一支「笔」画的（同一线宽、同一墨色）
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：像被笔划过：底色被涂抹般出现（可用 clip-path 或遮罩推进），0.24s
- active：下移 2px 并略微转正（rotate 归零）
- focus-visible：马克笔虚线框（2px，两侧略歪）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，220ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（220ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角的随手便签，进入时歪着落到页面上，3s 后向上旋转飘走，最多 3 张
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 220ms（故意不均匀：不同元素用 180-320ms 随机值，制造手绘不一致感），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 边框用「双层描边」模拟反复描线（box-shadow 0 0 0 2px + 外扩 3px 的第二条线）
- 分隔线用手绘波浪 SVG path，不用直线
- 阴影是铅笔灰的硬小影（3px 4px 0 rgba(59,50,38,.16)）

## 7. 禁忌
- 禁止完美对称、完美对齐、完美圆角
- 禁止金属/玻璃/霓虹等「机器感」质感
- 禁止细于 1.5px 的线条
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["2px 暖墨边 + 不规则 border-radius + 歪 1deg","手写体标题 + 圆润正文，马克笔涂抹强调","纸色底 #fffdf5 + 荧光点缀（黄/粉/蓝/绿）","手绘对勾、波浪线、箭头装饰"],tokens:{colors:[{name:"纸色",value:"#fffdf5"},{name:"暖墨",value:"#3a3226"},{name:"马克笔黄",value:"#ffe066"},{name:"马克笔粉",value:"#ff8fa3"},{name:"马克笔蓝",value:"#a0c4ff"}],fonts:[{role:"标题",stack:'"Caveat", "Patrick Hand", cursive'},{role:"正文",stack:'"Nunito", "PingFang SC", sans-serif'}],radius:"不规则手绘圆角",shadow:"3px 4px 0 rgba(59,50,38,.16)",extras:[{label:"边框",value:"2px solid #3a3226"},{label:"高亮",value:"linear-gradient 马克笔涂抹"}]},demo:{height:1400,heightMobile:1750,html:da({title:"手绘涂鸦 · Hand-drawn",fonts:["Caveat:wght@600;700","Patrick+Hand","Nunito:wght@400;600;700"],css:pa(ig)+`
body { font-family: "Patrick Hand", "Nunito", "PingFang SC", cursive, sans-serif; background: #fffdf5; color: #3a3226; padding: 44px 30px 54px; background-image: linear-gradient(rgba(58,50,38,0.05) 1px, transparent 1px); background-size: 100% 28px; }
.shell { max-width: 1060px; margin: 0 auto; position: relative; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
.brand { font-family: "Caveat", cursive; font-size: 27px; font-weight: 700; display: flex; align-items: center; gap: 9px; }
.brand .u { text-decoration: underline wavy #ff8fa3 3px; text-underline-offset: 5px; }
.nav-links span { margin-left: 20px; font-size: 15px; cursor: default; color: #6b6252; }
.nav-links span:hover { color: #3a3226; text-decoration: underline wavy #ffe066 2px; text-underline-offset: 4px; }
.hero { position: relative; background: #fffef9; border: 2px solid #3a3226; border-radius: 18px 24px 17px 26px; box-shadow: 3px 4px 0 rgba(59,50,38,.16), 0 0 0 3px #fffef9, 4px 6px 0 rgba(59,50,38,.1); padding: 48px 46px 44px; transform: rotate(-0.5deg); }
.hero .star { position: absolute; top: -16px; right: 40px; font-size: 26px; color: #ffe066; text-shadow: 1px 1px 0 rgba(59,50,38,.2); transform: rotate(12deg); }
.hero .scribble { position: absolute; bottom: 16px; right: 30px; width: 90px; height: 30px; }
.hero h1 { font-family: "Caveat", cursive; font-size: clamp(40px, 5.6vw, 64px); font-weight: 700; line-height: 1.08; margin: 8px 0 16px; max-width: 540px; }
.hero h1 .hl { background: linear-gradient(transparent 62%, #ffe066 62%); padding: 0 5px; }
.hero h1 .cir { border: 2px solid #ff8fa3; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; padding: 0 10px; }
.hero p { max-width: 430px; font-size: 15px; line-height: 1.8; color: #6b6252; }
.cta { display: flex; gap: 14px; margin-top: 26px; flex-wrap: wrap; }
.cta a { font-size: 15px; padding: 11px 24px; border: 2px solid #3a3226; background: #fffef9; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; cursor: pointer; text-decoration: none; color: #3a3226; box-shadow: 3px 4px 0 rgba(59,50,38,.16); transition: transform 0.12s, box-shadow 0.12s, background 0.12s; }
.cta a.pri { background: #ffe066; }
.cta a:hover { transform: translate(-1px, -1px) rotate(-1deg); box-shadow: 4px 5px 0 rgba(59,50,38,.2); }
.cta a:active { transform: translate(2px, 2px); box-shadow: 0 0 0 rgba(59,50,38,.16); }
.notes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 36px; }
.note { background: #fffef9; border: 2px solid #3a3226; padding: 22px 22px 18px; position: relative; }
.note:nth-child(1) { border-radius: 14px 20px 12px 22px; transform: rotate(1deg); }
.note:nth-child(2) { border-radius: 22px 12px 20px 14px; transform: rotate(-1.2deg); }
.note:nth-child(3) { border-radius: 16px 22px 14px 20px; transform: rotate(0.6deg); }
.note::before { content: ""; position: absolute; top: -11px; left: 50%; transform: translateX(-50%) rotate(-3deg); width: 52px; height: 18px; background: rgba(160,196,255,.75); border-radius: 2px; }
.note b { font-family: "Caveat", cursive; font-size: 22px; font-weight: 700; display: block; margin-bottom: 6px; }
.note p { font-size: 13.5px; line-height: 1.75; color: #6b6252; }
.note .tick { color: #4a7c59; font-weight: 700; }
@media (max-width: 760px) {
  .notes { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .hero { padding: 38px 24px 60px; }
}`,body:`
<div class="shell">
  <nav class="nav">
    <div class="brand"><span class="u">涂鸦本</span> ✎</div>
    <div class="nav-links"><span>便签</span><span>白板</span><span>手账</span><span>关于</span></div>
  </nav>
  <section class="hero">
    <span class="star">✦</span>
    <div style="font-size:14px;color:#8d8271">～ 来自笔记本第 42 页 ～</div>
    <h1>想法不该<br /><span class="cir">端端正正</span><br />地<span class="hl">长出来</span>。</h1>
    <p>圆规画的圆没有灵魂。歪一点的边框、手写的标题、马克笔划过的高亮——这里的一切都像草稿，因为好想法本来就始于草稿。</p>
    <div class="cta">
      <a class="pri">画一页 →</a>
      <a>借支笔</a>
    </div>
    <svg class="scribble" viewBox="0 0 90 30"><path d="M2 22 Q 20 2 38 18 T 74 14 T 88 20" fill="none" stroke="#ff8fa3" stroke-width="3" stroke-linecap="round" /></svg>
  </section>
  <section class="notes">
    <div class="note"><b>① 撕张便签</b><p>每个分区都是一张便签：胶带贴着，边角翘起，字迹潦草但认真。</p></div>
    <div class="note"><b>② 画个箭头</b><p>指引不用规规矩矩的图标，一根手绘箭头就够了 <span class="tick">✓</span></p></div>
    <div class="note"><b>③ 涂亮重点</b><p>马克笔横扫过关键词——像小学生划重点那样直接。</p></div>
  </section>
</div>${ua()}`,js:xa()})}},og={bg:"#16121f",surface:"#241b33",alt:"rgba(255, 241, 232, 0.07)",text:"#fff1e8",muted:"#9a8cb0",primary:"#ff004d",onPrimary:"#fff1e8",border:"rgba(255, 241, 232, 0.55)",radius:"0px",radiusLg:"0px",shadow:"4px 4px 0 rgba(0, 0, 0, 0.5)",font:'"VT323", "PingFang SC", monospace',mono:'"Press Start 2P", monospace',ok:"#00e436",warn:"#ffec27",err:"#ff004d",info:"#29adff",focus:"#29adff",extraCss:`
.sc-root { image-rendering: pixelated; }
.sc-cell { border-width: 3px; box-shadow: 4px 4px 0 rgba(0,0,0,.5); }
.sc-head h2 { font-family: "Press Start 2P", monospace; font-size: 21px; line-height: 1.5; text-shadow: 3px 3px 0 rgba(255,0,77,.55); }
.sc-kicker { font-family: "Press Start 2P", monospace; font-size: 9px; color: #ffec27; }
.sc-btn { border-width: 3px; border-radius: 0; font-family: "VT323", monospace; font-size: 17px; padding: 6px 16px; box-shadow: 3px 3px 0 rgba(0,0,0,.55); text-transform: uppercase; }
.sc-btn:active { transform: translate(3px, 3px); box-shadow: 0 0 0 rgba(0,0,0,.5); }
.sc-btn.pri { background: #ff004d; }
.sc-inp, .sc-ta, .sc-sel-btn { border-width: 3px; border-radius: 0; font-family: "VT323", monospace; font-size: 17px; }
.sc-cell h5 { font-family: "Press Start 2P", monospace; font-size: 8.5px; letter-spacing: 0.1em; color: #ffec27; }
.sc-badge { border-radius: 0; border: 2px solid #fff1e8; font-family: "VT323", monospace; font-size: 14px; }
.sc-tag { border-width: 3px; border-radius: 0; font-family: "VT323", monospace; font-size: 15px; }
.sc-tbl th { font-family: "Press Start 2P", monospace; font-size: 8px; letter-spacing: 0.06em; }
.sc-tbl td { font-family: "VT323", monospace; font-size: 16px; }
.sc-tbl td.mono, .rank-no { font-family: "VT323", monospace; }
.sc-note, .sc-lbl, .sc-help, .sc-pane, .sc-acc-b { font-family: "VT323", monospace; font-size: 15.5px; }
.sc-tab, .sc-seg-b, .sc-acc-h, .sc-menu-item, .sc-sel-opt { font-family: "VT323", monospace; font-size: 16px; }
.sc-sel-val, .sc-sw-txt, .sc-rng-out, .sc-prog-num, .sc-ring-num, .sc-step-lbl, .sc-pg-b, .sc-crumb, .sc-file-name, .sc-count { font-family: "VT323", monospace; font-size: 15px; }
.sc-modal-box h4 { font-family: "Press Start 2P", monospace; font-size: 13px; line-height: 1.7; }
.sc-toast { font-family: "VT323", monospace; font-size: 16px; border-width: 3px; border-radius: 0; }
.sc-ava { border-radius: 0; border: 3px solid #fff1e8; font-family: "Press Start 2P", monospace; font-size: 9px; }
.sc-prog { height: 14px; border: 3px solid #fff1e8; border-radius: 0; }
.sc-prog-fill { background: repeating-linear-gradient(90deg, #00e436 0 6px, #00b32e 6px 12px); }
.sc-skel-box .sk .ln { height: 12px; border-radius: 0; border: 2px solid rgba(255,241,232,.3); }
`},cg={id:"pixel",no:"18",name:"像素艺术",nameEn:"Pixel Art",tagline:"8-bit 游戏 HUD、像素边框、血条与金币——街机厅的界面语言。",origin:"FC/NES 时代游戏 UI / PICO-8 调色板 / 独立游戏复兴",year:"1983 —",tags:["8-bit","游戏 HUD","硬边框","街机"],kind:"paradigm",bestFor:["游戏产品","独立开发者站","复古主题活动","极客工具"],avoid:["企业级 SaaS","金融与医疗界面","长文阅读场景"],prompt:`# 设计范式：像素艺术（Pixel Art / 8-bit）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：8-bit 游戏机界面；像一台没关机的红白机
- 情绪关键词：街机、金币、血条、对话框、READY?
- 核心手法：一切边缘都是「像素阶梯」，一切颜色都来自限定调色板

## 2. 布局
- 深底（#16121f 或经典灰 #1a1c2c），内容分区用 3px 以上实色边框的「游戏面板」
- HUD 常驻元素：左上角生命/血条（心形 ♥）、右上角金币/分数、底部对话框
- 信息像游戏日志一样一行一行出现，字号分级明确

## 3. 字体排印
- 标题：像素字体（Press Start 2P / 点阵体），18-32px，行高放宽到 1.6
- 正文：等宽点阵风（VT323 / Fira Code）15-18px——注意像素正文必须比常规大
- 数字前导零、右对齐、tabular，像计分板

## 4. 色彩
- 底：#16121f；面板：#241b33；文字：#fff1e8
- 限定调色板：红 #ff004d、黄 #ffec27、绿 #00e436、蓝 #29adff、紫 #7c2d8f
- 彩色只做强调与状态，一屏主色 + 一个强调色

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：分段像素进度条（repeating-linear-gradient 方格 + ♥/★）与 8-bit 对话框（双层 3px 边）
- 按钮：3px 实边 + 零圆角 + 4px 硬投影；hover 整块反色；active 位移贴边
- 输入框：inset 3px 3px 0 深色内凹；focus 边框闪黄
- 下拉框浮层：直角像素框 + ▶ 选中前缀，无阴影无模糊
- 步骤条/分页：像素方块节点，当前项反色
- 动画纪律：只用 steps()，2-3 帧，没有平滑过渡
- 色板锁死 PICO-8 十六色，禁止抗锯齿感（禁 text-shadow 柔化）
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：整块反色（前景↔背景互换），零渐变零位移之外的效果
- active：位移到投影位置（贴边），像被按进底座
- focus-visible：3px 黄色实线框（闪烁 500ms 一循环更还原）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，80ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（80ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：底部像素对话框，打字机式出现（每字符 24ms），停留 3s 后整块消失
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 80ms（8-bit 没有平滑：统一 2-3 帧，动画用 steps 而非 ease），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 全局 image-rendering: pixelated；边框用多重 box-shadow 堆出像素阶梯
- 装饰：像素心 ♥、金币 ◉、剑 ⚔、对话框尾巴（CSS 三角）
- 可选扫描线或轻微 CRT 曲面（幅度极小，别盖过内容）

## 7. 禁忌
- 禁止圆角、渐变、毛玻璃、柔和模糊阴影
- 禁止细于 2px 的边框与线条
- 禁止把像素字体用于长段落（可读性灾难），正文用点阵等宽
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["3px 实边 + 零圆角 + 4px 硬投影","限定调色板：红/黄/绿/蓝 + 深底","像素字体标题 + 点阵等宽正文","HUD 元素：♥ 血条、金币、对话框"],tokens:{colors:[{name:"街机深底",value:"#16121f"},{name:"面板",value:"#241b33"},{name:"能量红",value:"#ff004d"},{name:"金币黄",value:"#ffec27"},{name:"草地绿",value:"#00e436"},{name:"天空蓝",value:"#29adff"}],fonts:[{role:"标题",stack:'"Press Start 2P", "点阵体", monospace'},{role:"正文",stack:'"VT323", "Fira Code", monospace'}],radius:"0px（全部直角）",shadow:"4px 4px 0 rgba(0,0,0,.5)",extras:[{label:"边框",value:"3px solid #fff1e8"},{label:"渲染",value:"image-rendering: pixelated"}]},demo:{height:1400,heightMobile:1750,html:da({title:"像素艺术 · Pixel Art",fonts:["Press+Start+2P","VT323"],css:pa(og)+`
body { font-family: "VT323", "PingFang SC", monospace; background: #16121f; color: #fff1e8; padding: 44px 30px 54px; font-size: 17px; }
.shell { max-width: 1060px; margin: 0 auto; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 36px; }
.brand { font-family: "Press Start 2P", monospace; font-size: 14px; color: #ffec27; text-shadow: 3px 3px 0 rgba(255,0,77,.6); }
.nav-links span { margin-left: 18px; font-size: 17px; cursor: default; color: #9a8cb0; text-transform: uppercase; }
.nav-links span:hover { color: #29adff; }
.hero { position: relative; background: #241b33; border: 3px solid #fff1e8; box-shadow: 5px 5px 0 rgba(0,0,0,.55); padding: 46px 44px 40px; }
.hud { display: flex; justify-content: space-between; align-items: center; font-size: 18px; margin-bottom: 22px; }
.hud .life { color: #ff004d; letter-spacing: 3px; }
.hud .coin { color: #ffec27; }
.hero h1 { font-family: "Press Start 2P", monospace; font-size: clamp(20px, 3.4vw, 34px); line-height: 1.65; margin: 6px 0 20px; color: #fff1e8; text-shadow: 4px 4px 0 rgba(255,0,77,.55); }
.hero h1 .b { color: #29adff; }
.hero p { max-width: 480px; font-size: 18px; line-height: 1.7; color: #c9bde0; }
.cta { display: flex; gap: 14px; margin-top: 26px; flex-wrap: wrap; }
.cta a { font-family: "Press Start 2P", monospace; font-size: 11px; padding: 13px 20px; border: 3px solid #fff1e8; background: #ff004d; color: #fff1e8; cursor: pointer; text-decoration: none; box-shadow: 4px 4px 0 rgba(0,0,0,.55); transition: transform .08s, box-shadow .08s; }
.cta a.b2 { background: #241b33; color: #29adff; border-color: #29adff; }
.cta a:hover { transform: translate(-1px, -1px); box-shadow: 5px 5px 0 rgba(0,0,0,.55); }
.cta a:active { transform: translate(3px, 3px); box-shadow: 1px 1px 0 rgba(0,0,0,.55); }
.dialog { margin-top: 30px; background: #241b33; border: 3px solid #fff1e8; box-shadow: 5px 5px 0 rgba(0,0,0,.55); padding: 18px 20px; position: relative; }
.dialog::after { content: ""; position: absolute; bottom: -14px; left: 40px; width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 14px solid #fff1e8; }
.dialog .who { font-family: "Press Start 2P", monospace; font-size: 9px; color: #ffec27; margin-bottom: 9px; }
.dialog p { font-size: 18px; line-height: 1.65; color: #fff1e8; max-width: none; }
.dialog .next { text-align: right; color: #ff004d; animation: blink 1s steps(1) infinite; font-size: 19px; }
@keyframes blink { 50% { opacity: 0; } }
.inventory { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 34px; }
.slot { background: #241b33; border: 3px solid rgba(255,241,232,.4); aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; box-shadow: inset 3px 3px 0 rgba(0,0,0,.4); }
.slot .ic { font-size: 26px; }
.slot small { font-size: 14px; color: #9a8cb0; }
.slot.hot { border-color: #ffec27; }
@media (max-width: 760px) {
  .inventory { grid-template-columns: repeat(2, 1fr); }
  .nav-links { display: none; }
  .hero { padding: 34px 22px 54px; }
}`,body:`
<div class="shell">
  <nav class="nav">
    <div class="brand">PARADIGM QUEST</div>
    <div class="nav-links"><span>任务</span><span>背包</span><span>商店</span><span>存档</span></div>
  </nav>
  <section class="hero">
    <div class="hud">
      <span class="life">♥ ♥ ♥</span>
      <span class="coin">◉ 0042</span>
    </div>
    <h1>INSERT COIN<br />TO <span class="b">开始设计</span></h1>
    <p>警告：检测到「AI 默认味」Boss 出现在附近。装备像素边框与限定调色板，按 START 进入展厅。</p>
    <div class="cta">
      <a>PRESS START</a>
      <a class="b2">调色板 ⇄</a>
    </div>
  </section>
  <div class="dialog">
    <div class="who">▸ 馆长 NPC</div>
    <p>「欢迎来到范式展览馆。这里的每一件展品都是一套 8-bit 规则——3px 边框、零圆角、限定六色。拿走你需要的，别碰默认味。」</p>
    <div class="next">▼</div>
  </div>
  <section class="inventory">
    <div class="slot hot"><span class="ic">⚔</span><small>像素剑</small></div>
    <div class="slot"><span class="ic">🛡</span><small>边框盾</small></div>
    <div class="slot"><span class="ic">◉</span><small>金币 ×42</small></div>
    <div class="slot"><span class="ic">♥</span><small>血条 ×3</small></div>
  </section>
</div>${ua()}`,js:xa()})}},rg={bg:"#1a0b2e",surface:"#2d1b4e",alt:"rgba(255, 113, 206, 0.1)",text:"#ffeafc",muted:"#b79ad0",primary:"#ff71ce",onPrimary:"#2b0a24",border:"rgba(255, 113, 206, 0.38)",radius:"6px",radiusLg:"10px",shadow:"0 0 24px rgba(255, 113, 206, 0.28)",font:'"Rajdhani", "PingFang SC", sans-serif',mono:'"Rajdhani", ui-monospace, monospace',ok:"#05ffa1",warn:"#fffb96",err:"#ff3864",info:"#01cdfe",focus:"#01cdfe",extraCss:`
.sc-head h2 { font-family: "Monoton", cursive; font-weight: 400; font-size: 27px; letter-spacing: 0.04em;
  background: linear-gradient(180deg, #fffb96 0%, #ff71ce 45%, #b967ff 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent; }
.sc-kicker { color: #01cdfe; }
.sc-cell { box-shadow: 0 0 22px rgba(255,113,206,.16), inset 0 1px 0 rgba(255,255,255,.06); }
.sc-btn { text-transform: uppercase; letter-spacing: 0.12em; font-weight: 600; box-shadow: 0 0 16px rgba(255,113,206,.3); }
.sc-badge { text-transform: uppercase; letter-spacing: 0.1em; }
.sc-tbl th { letter-spacing: 0.16em; }
`},fg={id:"vaporwave",no:"19",name:"蒸汽波",nameEn:"Vaporwave",tagline:"粉紫渐变、透视网格、希腊柱与片假名——80 年代的未来残梦。",origin:"Vaporwave 音乐视觉 / Macintosh Plus / 商场美学",year:"2010 —",tags:["粉紫渐变","网格地板","复古未来","迷幻"],kind:"paradigm",bestFor:["音乐与潮流活动","复古游戏/媒体","创意作品集","主题营销页"],avoid:["企业官网","工具型后台","需要清晰层级的长内容"],prompt:`# 设计范式：蒸汽波（Vaporwave）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：80 年代广告里的「未来」——粉紫渐变、大理石柱、无限延伸的网格
- 情绪关键词：怀旧、迷幻、商场、落日、A E S T H E T I C
- 氛围：像深夜高速公路旁一家永远不打烊的商场

## 2. 布局
- 深紫底 #1a0b2e，页面底部一条透视网格地板（transform: perspective + rotateX）
- 上部内容居中对称，hero 允许巨大的渐变落日（圆形 + 横向条纹切割）
- 分区用「Windows 95 风窗口框」（标题栏 + 三个方块按钮）承载内容

## 3. 字体排印
- Logo/大标题：Monoton 或宽体复古字（Viga），可做金属渐变字（background-clip: text）
- 正文：Rajdhani / 窄体科技字 14-16px，全大写用于标签
- 装饰性文字：片假名（ア イ ウ エ オ）与全角字符做氛围斑点

## 4. 色彩
- 底：深紫 #1a0b2e；面板 #2d1b4e；文字 #ffeafc
- 霓虹四色：粉 #ff71ce、青 #01cdfe、紫 #b967ff、黄 #fffb96
- 渐变只允许「落日渐变」：黄→粉→紫 的垂直渐变

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：Win95 窗口框（标题栏渐变 + 最小化/最大化/关闭三钮）与透视网格地平线
- 按钮：粉边粉底 + 16px 外发光、全大写宽字距；hover 辉光加强 8px
- 输入框：深紫内凹；focus 青边 + 青色发光
- 下拉框浮层：复古小窗 + 标题栏 + 1px 粉边
- 表格：1px 粉线 + 深紫隔行；hover 青紫渐变 12%
- 进度：粉→青渐变填充，纯色禁止
- 背景纪律：落日渐变 + 透视网格 + VHS 扫线三层常驻，组件浮在它们之上
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：填充霓虹渐变 + 辉光（box-shadow）加强 8px
- active：内容下移 1px 且饱和度提高
- focus-visible：青色 1px 描边 + 0 0 14px 青色外发光；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，220ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（220ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角复古小窗堆叠，从下方 12px 淡入并轻微缩放，3s 后向上淡出，最多 3 条
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 220ms（网格透视流动 6s 循环，VHS 扫线 8s 循环），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 全局叠一层极淡的扫描线与色差（text-shadow 红蓝错位 1px）
- 装饰：希腊柱（重复线性渐变模拟柱槽）、棕榈树/海豚剪影（emoji 或 SVG）、◈ ✦ 符号
- 网格地板：linear-gradient 双方向 + perspective(200px) rotateX(60deg)

## 7. 禁忌
- 禁止明亮白底、直角商务风、细线极简
- 禁止使用蓝紫「默认渐变」之外的无脑渐变（本范式渐变必须有落日结构）
- 禁止现代玻璃拟态——这里的透明是 CRT 显像管的透明，不是毛玻璃
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["深紫底 + 落日渐变（黄→粉→紫）","透视网格地板 + Win95 窗口框","霓虹四色：粉/青/紫/黄，外发光","Monoton 金属渐变标题字"],tokens:{colors:[{name:"深夜紫",value:"#1a0b2e"},{name:"面板紫",value:"#2d1b4e"},{name:"霓虹粉",value:"#ff71ce"},{name:"霓虹青",value:"#01cdfe"},{name:"电光紫",value:"#b967ff"},{name:"落日黄",value:"#fffb96"}],fonts:[{role:"展示标题",stack:'"Monoton", "Viga", cursive'},{role:"正文",stack:'"Rajdhani", "PingFang SC", sans-serif'}],radius:"6px（窗口框 0px）",shadow:"0 0 24px rgba(255,113,206,.28)",extras:[{label:"网格地板",value:"perspective + rotateX(60deg)"},{label:"字效",value:"金属渐变 + 红蓝色差"}]},demo:{height:1420,heightMobile:1780,html:da({title:"蒸汽波 · Vaporwave",fonts:["Monoton","Rajdhani:wght@400;500;600;700"],css:pa(rg)+`
body { font-family: "Rajdhani", "PingFang SC", sans-serif; background: #1a0b2e; color: #ffeafc; padding: 44px 30px 0; overflow-x: hidden; }
.shell { max-width: 1060px; margin: 0 auto; position: relative; z-index: 2; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 34px; }
.brand { font-family: "Monoton", cursive; font-size: 19px; letter-spacing: 0.06em; background: linear-gradient(180deg, #fffb96, #ff71ce 55%, #b967ff); -webkit-background-clip: text; background-clip: text; color: transparent; }
.nav-links span { margin-left: 20px; font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase; color: #b79ad0; cursor: default; }
.nav-links span:hover { color: #01cdfe; }
.hero { position: relative; text-align: center; padding: 40px 0 30px; }
.sun { width: 240px; height: 240px; border-radius: 50%; margin: 0 auto 22px; position: relative;
  background: linear-gradient(180deg, #fffb96 0%, #ff71ce 55%, #b967ff 100%);
  box-shadow: 0 0 60px rgba(255,113,206,.45); overflow: hidden; }
.sun::after { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(180deg, transparent 0 14px, #1a0b2e 14px 20px); top: 55%; }
.hero h1 { font-family: "Monoton", cursive; font-size: clamp(26px, 4.6vw, 52px); font-weight: 400; letter-spacing: 0.05em; line-height: 1.3; text-shadow: 2px 0 0 rgba(255,56,100,.6), -2px 0 0 rgba(1,205,254,.6); }
.hero .jp { font-size: 15px; letter-spacing: 0.5em; color: #01cdfe; margin: 14px 0 10px; }
.hero p { max-width: 480px; margin: 0 auto; font-size: 15.5px; line-height: 1.8; color: #d9c2ec; }
.cta { display: flex; gap: 14px; justify-content: center; margin-top: 26px; flex-wrap: wrap; }
.cta a { font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; padding: 11px 24px; border: 1px solid #ff71ce; color: #ff71ce; background: rgba(255,113,206,.08); cursor: pointer; text-decoration: none; box-shadow: 0 0 16px rgba(255,113,206,.35); }
.cta a:hover { background: #ff71ce; color: #2b0a24; }
.cta a.cy { border-color: #01cdfe; color: #01cdfe; box-shadow: 0 0 16px rgba(1,205,254,.35); background: rgba(1,205,254,.07); }
.cta a.cy:hover { background: #01cdfe; color: #062a33; }
.win { background: #2d1b4e; border: 1px solid rgba(255,113,206,.5); box-shadow: 0 0 30px rgba(255,113,206,.2); margin-top: 34px; }
.win-bar { display: flex; align-items: center; gap: 8px; padding: 8px 12px; background: linear-gradient(90deg, #b967ff, #ff71ce); }
.win-bar b { font-size: 11.5px; letter-spacing: 0.14em; text-transform: uppercase; color: #1a0b2e; font-weight: 700; }
.win-bar .sqs { margin-left: auto; display: flex; gap: 5px; }
.win-bar .sqs i { width: 11px; height: 11px; background: #2d1b4e; border: 1px solid rgba(26,11,46,.6); display: block; }
.win-body { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
.win-body .c { padding: 22px 24px; }
.win-body .c + .c { border-left: 1px solid rgba(255,113,206,.28); }
.win-body b { font-size: 15px; letter-spacing: 0.06em; display: block; margin-bottom: 8px; color: #fffb96; }
.win-body p { font-size: 13.5px; line-height: 1.75; color: #d9c2ec; }
.grid-floor { position: relative; height: 130px; margin-top: 40px; overflow: hidden; }
.grid-floor::before { content: ""; position: absolute; left: -20%; right: -20%; bottom: -30px; height: 260px;
  background-image: linear-gradient(rgba(255,113,206,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,113,206,.5) 1px, transparent 1px);
  background-size: 44px 44px; transform: perspective(220px) rotateX(58deg); transform-origin: bottom; }
.sc-root { position: relative; z-index: 2; margin-top: 30px; }
@media (max-width: 760px) {
  .win-body { grid-template-columns: 1fr; }
  .win-body .c + .c { border-left: 0; border-top: 1px solid rgba(255,113,206,.28); }
  .nav-links { display: none; }
}`,body:`
<div class="shell">
  <nav class="nav">
    <div class="brand">M A L L W A V E</div>
    <div class="nav-links"><span>音乐</span><span>视觉</span><span>商品</span><span>关于</span></div>
  </nav>
  <section class="hero">
    <div class="sun"></div>
    <div class="jp">ア イ ウ エ オ カ キ ク</div>
    <h1>ＡＥＳＴＨＥＴＩＣ<br />ＳＵＰＲＥＭＥ</h1>
    <p>一家永远不打烊的商场，一块落山的太阳，和无限延伸的网格。这里是 80 年代想象中的 2010 年代。</p>
    <div class="cta">
      <a>进入商场 →</a>
      <a class="cy">播放合辑</a>
    </div>
  </section>
  <section class="win">
    <div class="win-bar"><b>C:AESTHETICREADME.TXT</b><span class="sqs"><i></i><i></i><i></i></span></div>
    <div class="win-body">
      <div class="c"><b>◆ 落日渐变</b><p>黄→粉→紫的垂直渐变是唯一允许的渐变，切割条纹模拟 CRT 扫描。</p></div>
      <div class="c"><b>◆ 网格地板</b><p>perspective + rotateX 造出无限延伸的地板，一切内容漂浮其上。</p></div>
      <div class="c"><b>◆ 窗口美学</b><p>内容装进 Win95 窗口框，标题栏渐变，方块按钮一个不少。</p></div>
    </div>
  </section>
  <div class="grid-floor"></div>
</div>${ua()}`,js:xa()})}},dg={bg:"#f5f1e6",surface:"#fbf8f0",alt:"rgba(44, 42, 38, 0.05)",text:"#2c2a26",muted:"#857f72",primary:"#a63a2b",onPrimary:"#fbf8f0",border:"rgba(44, 42, 38, 0.24)",radius:"2px",radiusLg:"3px",shadow:"none",font:'"Noto Serif SC", "Songti SC", "SimSun", serif',mono:'"Noto Serif SC", "Songti SC", serif',ok:"#3f5b45",warn:"#a6761d",err:"#a63a2b",info:"#4a5d6b",focus:"#4a5d6b",extraCss:`
.sc-cell { box-shadow: none; }
.sc-head h2 { font-weight: 600; letter-spacing: 0.14em; }
.sc-kicker { color: #a63a2b; }
.sc-btn { border-radius: 2px; letter-spacing: 0.22em; font-size: 12.5px; padding: 9px 18px; }
.sc-btn.pri { background: #a63a2b; }
.sc-inp, .sc-ta, .sc-sel-btn { border-radius: 2px; background: #f5f1e6; font-family: "Noto Serif SC", serif; }
.sc-cell h5 { letter-spacing: 0.3em; }
.sc-badge { border-radius: 2px; letter-spacing: 0.14em; border: 1px solid rgba(44,42,38,.3); }
.sc-tag { border-radius: 2px; letter-spacing: 0.1em; }
.sc-tbl th { letter-spacing: 0.24em; }
.sc-ava { border-radius: 2px; font-family: "Noto Serif SC", serif; }
.sc-modal-box h4 { font-weight: 600; letter-spacing: 0.08em; }
`},pg={id:"oriental-ink",no:"20",name:"新中式",nameEn:"Oriental Ink",tagline:"宣纸、竖排、朱砂印——留白处的东方秩序。",origin:"宋式美学 / 民国书籍装帧 / 当代东方设计复兴",year:"宋 —",tags:["宣纸","竖排","朱砂","留白"],kind:"paradigm",bestFor:["茶/香/文创品牌","文化机构","地产与酒店","节庆营销"],avoid:["工具型后台","强互动游戏化产品","信息极密集的仪表盘"],prompt:`# 设计范式：新中式（Oriental Ink）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：宣纸上的宋版书；静、留白、有呼吸的秩序感
- 情绪关键词：水墨、朱砂、竖排、窗棂、间（负空间）
- 原则：少即是多，且每一个出现的元素都要「站得住」

## 2. 布局
- 大留白：内容区不超过屏宽 60%，分区之间用「间」而不是线
- 标题可竖排（writing-mode: vertical-rl），从右往左读，配朱砂印章
- 分隔用 0.5-1px 细线 + 两端留白，或用窗棂格纹（repeating-linear-gradient）
- 整体允许非对称：一侧重墨，一侧大量空白

## 3. 字体排印
- 标题：宋体/思源宋体（Noto Serif SC）600 字重，24-40px，字距放宽 0.1em
- 正文：同族常规字重 14-15px，行高 1.9，段首可不缩进但段间距加大
- 装饰：书法体（Ma Shan Zheng）只用于单字或短语，不大段使用

## 4. 色彩
- 底：宣纸 #f5f1e6；墨 #2c2a26（不用纯黑）
- 朱砂 #a63a2b 只做印章与关键强调；青灰 #8a9a8f 做次级信息
- 全场饱和度压到最低，彩色面积不超过 5%

## 5. 组件与交互规范

### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。

### 5.2 本范式下的组件外观与手感
- 签名组件：朱砂方印（28-34px、2px 朱框、noise 遮罩做残缺边）与竖排标签（writing-mode: vertical-rl）
- 按钮：1px 细墨边 + 宽字距；hover 以 0.28s 缓慢「填墨」反转，像墨漫过来
- 输入框：仅 border-bottom 细线；focus 线变朱砂色
- 下拉框浮层：宣纸色 + 1px 墨线；选项 hover 淡墨晕染（radial 扩散）
- 开关：印章式阴刻 / 阳刻切换
- 表格：细横线、无竖线、表头小字宽字距
- 留白纪律：版面留白 ≥ 40%，动效一律 300ms 起、宁慢勿快
### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：墨色填充反转（笔画感的填色，可用 0.28s 的缓慢填「墨」）
- active：墨色加深 + 内容下沉 1px
- focus-visible：朱砂 1px 细线框（不用虚线，不用 glow）；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，300ms；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（300ms），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：右下角宣纸小条，缓慢淡入 0.4s、停留 4s、缓慢淡出 0.4s（比其他范式慢）
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 300ms（留白与呼吸都属于韵味，动作宁慢勿快），缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入

## 6. 质感细节
- 纸纹：极淡的噪点（SVG feTurbulence 或 repeating 渐变，opacity ≤ 0.04）
- 水墨晕染：radial-gradient 做一两团淡墨，位置必须克制
- 印章：24-32px 朱砂方块，内白字（篆/楷），可微旋转 2deg
- 动效：慢（0.3s+）、淡入淡出，禁弹跳

## 7. 禁忌
- 禁止高饱和撞色、霓虹、粗黑边、硬投影
- 禁止圆角胶囊按钮、玻璃拟态、渐变紫
- 禁止把书法体当正文、把汉字当装饰花纹乱铺
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["宣纸底 #f5f1e6 + 墨 #2c2a26，禁纯黑","朱砂 #a63a2b 只做印章与强调（≤5% 面积）","竖排标题 + 大留白 + 0.5px 细线分区","按钮细墨边宽字距，hover 墨色反转"],tokens:{colors:[{name:"宣纸",value:"#f5f1e6"},{name:"松烟墨",value:"#2c2a26"},{name:"朱砂",value:"#a63a2b"},{name:"青灰",value:"#8a9a8f"},{name:"檀色",value:"#8a6d5c"}],fonts:[{role:"标题",stack:'"Noto Serif SC", "Songti SC", serif'},{role:"装饰",stack:'"Ma Shan Zheng", "KaiTi", cursive'}],radius:"0-2px（直角为美）",shadow:"无",extras:[{label:"边框",value:"0.5-1px solid rgba(44,42,38,.24)"},{label:"纸纹",value:"feTurbulence opacity ≤ .04"}]},demo:{height:1420,heightMobile:1780,html:da({title:"新中式 · Oriental Ink",fonts:["Noto+Serif+SC:wght@400;500;600;700","Ma+Shan+Zheng"],css:pa(dg)+`
body { font-family: "Noto Serif SC", "Songti SC", "SimSun", serif; background: #f5f1e6; color: #2c2a26; padding: 48px 40px 54px; }
body::before { content: ""; position: fixed; inset: 0; pointer-events: none; opacity: .035;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E"); }
.shell { max-width: 1080px; margin: 0 auto; position: relative; }
.nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 44px; }
.brand { font-size: 16px; font-weight: 600; letter-spacing: 0.3em; display: flex; align-items: center; gap: 12px; }
.brand .seal { width: 26px; height: 26px; background: #a63a2b; color: #fbf8f0; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-family: "Ma Shan Zheng", "KaiTi", cursive; transform: rotate(-2deg); }
.nav-links span { margin-left: 26px; font-size: 13px; letter-spacing: 0.2em; color: #857f72; cursor: default; }
.nav-links span:hover { color: #2c2a26; }
.hero { display: grid; grid-template-columns: 1fr auto; gap: 50px; align-items: start; }
.hero .left { max-width: 560px; }
.hero .vtitle { writing-mode: vertical-rl; font-size: 40px; font-weight: 600; letter-spacing: 0.34em; line-height: 1.5; height: 300px; border-right: 1px solid rgba(44,42,38,.2); padding-right: 26px; }
.hero .vtitle i { font-style: normal; color: #a63a2b; }
.hero .kicker { font-size: 12px; letter-spacing: 0.4em; color: #a63a2b; margin-bottom: 18px; }
.hero h1 { font-size: clamp(30px, 3.6vw, 44px); font-weight: 600; line-height: 1.5; letter-spacing: 0.08em; margin: 0 0 22px; }
.hero p { font-size: 14.5px; line-height: 2.1; color: #57534a; max-width: 440px; }
.hero .cta { display: flex; gap: 16px; margin-top: 30px; }
.hero .cta a { font-size: 12.5px; letter-spacing: 0.28em; padding: 10px 22px; border: 1px solid rgba(44,42,38,.45); color: #2c2a26; cursor: pointer; text-decoration: none; background: transparent; transition: all .25s; }
.hero .cta a.pri { background: #2c2a26; color: #f5f1e6; border-color: #2c2a26; }
.hero .cta a:hover { background: #a63a2b; border-color: #a63a2b; color: #fbf8f0; }
.rule { display: flex; align-items: center; gap: 16px; margin: 46px 0 30px; }
.rule::before, .rule::after { content: ""; height: 1px; background: rgba(44,42,38,.24); flex: 1; }
.rule span { font-size: 11px; letter-spacing: 0.4em; color: #857f72; }
.cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
.col { padding: 4px 30px; }
.col + .col { border-left: 1px solid rgba(44,42,38,.16); }
.col b { display: block; font-size: 15px; font-weight: 600; letter-spacing: 0.2em; margin-bottom: 12px; }
.col p { font-size: 13px; line-height: 2.05; color: #57534a; }
.col .ink { font-family: "Ma Shan Zheng", "KaiTi", cursive; font-size: 24px; color: #a63a2b; display: block; margin-bottom: 10px; }
@media (max-width: 760px) {
  .hero { grid-template-columns: 1fr; }
  .hero .vtitle { writing-mode: horizontal-tb; height: auto; border-right: 0; border-bottom: 1px solid rgba(44,42,38,.2); padding: 0 0 18px; }
  .cols { grid-template-columns: 1fr; }
  .col + .col { border-left: 0; border-top: 1px solid rgba(44,42,38,.16); margin-top: 22px; padding-top: 22px; }
  .nav-links { display: none; }
}`,body:`
<div class="shell">
  <nav class="nav">
    <div class="brand"><span class="seal">印</span>松 雪 堂</div>
    <div class="nav-links"><span>茶事</span><span>器物</span><span>书画</span><span>访客</span></div>
  </nav>
  <section class="hero">
    <div class="left">
      <div class="kicker">宋 式 美 学 · 现 代 译 解</div>
      <h1>留白处，<br />自有山河。</h1>
      <p>不堆砌，不喧哗。一炉香、一笺纸、一方朱印——设计的要务不是填满屏幕，而是给「间」留出位置。少一点，但每一处都站得住。</p>
      <div class="cta">
        <a class="pri">预 约 茶 事</a>
        <a>访 客 须 知</a>
      </div>
    </div>
    <div class="vtitle">万 象 <i>·</i> 归 一</div>
  </section>
  <div class="rule"><span>◇ 堂 内 三 则 ◇</span></div>
  <section class="cols">
    <div class="col"><span class="ink">静</span><b>以静制动</b><p>动效要慢，颜色要淡。界面应当像一间安静的茶室，而不是一块广告牌。</p></div>
    <div class="col"><span class="ink">简</span><b>以简驭繁</b><p>一像素的线、一个字距的呼吸，胜过十种装饰。信息分级靠留白完成。</p></div>
    <div class="col"><span class="ink">真</span><b>以真为贵</b><p>材质只说纸墨：宣纸的纹、松烟的墨、朱砂的点。拒绝一切塑料感。</p></div>
  </section>
</div>${ua()}`,js:xa()})}},ug=`### 5.1 必备组件清单（默认配齐，且必须是可交互的真状态机，不是静态图片）

- 导航：顶栏或侧栏 + 搜索建议框（输入即过滤、↑↓ 移动高亮、Enter 选中、Esc 收起、无结果给空态）
- 表单：输入框（默认 / 聚焦 / 错误 / 禁用四态）、文本域（右下角字数计数）、下拉框（自定义浮层，不用原生 select）、复选框、单选组、开关、滑块（可拖 + 数值回显）、步进器
- 选择：分段控制、标签页、手风琴、下拉菜单、日期 / 时间选择（按场景取舍）
- 反馈：模态框（遮罩 + Esc + 点遮罩关闭 + 关闭后焦点回到触发器）、吐司堆叠（3 秒自动消失、最多 3 条）、Tooltip（悬停与聚焦都要出）、四种提示条（信息 / 成功 / 警告 / 错误）
- 数据：表格（列排序 / 行选择 / 空态 / 骨架屏）、进度（线性 + 环形 + 不确定态）、步骤条、分页（含每页条数下拉）、面包屑
- 身份与内容：头像组（含 +N 折叠）、可删标签、徽章、文件上传（拖拽区 + 文件名 + 删除）

以上组件全部要按本范式重塑外观与手感，不得出现与本范式无关的通用控件样式。`;function xg({hover:w,active:z,focus:N,toast:b,dur:D}){const V=D.split("（")[0].trim();return`### 5.3 交互态与动效规格

- 六态必须齐全：静止 / hover / active / focus-visible / disabled / loading，缺一即不算完成
- hover：${w}
- active：${z}
- focus-visible：${N}；disabled 一律 opacity ≤ 0.45 且 pointer-events: none
- 浮层类（下拉框 / 下拉菜单 / Tooltip）：进入 opacity 0→1 且 translateY(-4px)→0，${V}；点击外部或 Esc 关闭；浮层层级高于触发器且不被容器裁切
- 模态框：遮罩 opacity 0→1（${V}），面板 scale .96→1 渐显；打开时锁 body 滚动，Esc 与点遮罩关闭，关闭后焦点回到触发元素
- 吐司：${b}
- 表单校验：输入即校验（debounce 300ms），错误态必须同时具备颜色 + 图标 + 文案三重提示，禁止只用颜色表意
- 键盘可达：所有交互元素 Tab 可聚焦、Enter / Space 可触发；浮层内 ↑↓ 移动、Enter 确认、Esc 退出
- 动效默认 ${D}，缓动 cubic-bezier(.2,.8,.2,1)，禁止 linear 匀速
- 必须写 prefers-reduced-motion: reduce 分支：去掉位移与循环动画，只保留 0.01s 淡入`}function zl(w,z){return`## 5. 组件与交互规范

${ug}

### 5.2 本范式下的组件外观与手感
${w}

${xg(z)}`}const bg={bg:"#e9e1d0",surface:"#f0e9da",alt:"rgba(28,25,23,0.08)",text:"#1c1917",muted:"#6e675c",primary:"#d5321f",onPrimary:"#f0e9da",border:"#1c1917",radius:"0px",radiusLg:"0px",shadow:"5px 5px 0 rgba(28,25,23,0.85)",font:'"Oswald","Roboto Condensed","PingFang SC","Microsoft YaHei",sans-serif',mono:'"Roboto Condensed",ui-monospace,monospace',ok:"#3e6b34",warn:"#dfa92d",err:"#d5321f",info:"#33556e",focus:"#d5321f",extraCss:`
.sc-cell{border-width:2px;box-shadow:5px 5px 0 rgba(28,25,23,.85);}
.sc-cell h5{letter-spacing:.22em;}
.sc-btn{border-width:2px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;}
.sc-btn.pri{box-shadow:3px 3px 0 rgba(28,25,23,.9);}
.sc-btn:hover{transform:translate(-2px,-2px);box-shadow:5px 5px 0 rgba(28,25,23,.9);}
.sc-btn.pri:hover{box-shadow:5px 5px 0 rgba(28,25,23,.9);}
.sc-inp,.sc-ta,.sc-sel-btn{border-width:2px;border-radius:0;}
.sc-seg,.sc-sel-list,.sc-menu-list,.sc-sug,.sc-modal-box,.sc-alert,.sc-toast{border-radius:0;}
.sc-modal-box{border-width:2px;box-shadow:8px 8px 0 rgba(28,25,23,.9);}
.sc-badge,.sc-tag{border-radius:0;}
.sc-badge.pri{box-shadow:2px 2px 0 rgba(28,25,23,.85);}
.sc-sw .tr{border-radius:0;}
.sc-sw .tr::after{border-radius:0;}
.sc-prog{border-radius:0;}
.sc-prog-fill{border-radius:0;}
.sc-step .no{border-radius:0;border-width:2px;}
.sc-pg-b{border-radius:0;border-width:1.5px;}
.sc-ava,.sc-ava .dot,.sc-toast-ic{border-radius:0;}
.sc-seg-ind{border-radius:0;}
.sc-tbl th{background:#1c1917;color:#f0e9da;}`},gg={id:"constructivism",no:"21",name:"构成主义",nameEn:"Constructivism",tagline:"斜切的色块、巨号数字、红与黑——把界面当成一张动员海报来排。",origin:"罗钦科海报 /《LEF》杂志 / 苏联先锋派",year:"1919 — 1930s",tags:["对角线","红黑双色","巨号数字","先锋派"],bestFor:["海报式落地页","活动与展览宣传","文化机构官网"],avoid:["后台系统","长表单密集页","大量正文的阅读场景"],prompt:`# 设计范式：构成主义（Constructivism）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：俄国先锋派动员海报——把界面当宣传画：斜向轴线、色块楔形、巨号数字、口号式短句
- 情绪关键词：动员、力量、印刷感、集体、锋利
- 构图永远斜向：主导轴线倾斜 15–25°，至少一处元素明显打破水平线

## 2. 布局
- 用对角色带与楔形（clip-path 三角/平行四边形）切分版面，而非矩形分栏
- 大数字压角：章节/序号用 120-220px 的粗体数字，部分裁切出血
- 内容区不对称：重心偏一侧，另一侧留出大面积纯色或纸底
- 装饰条带：实色长条以斜角穿过版面，可承载跑马文字

## 3. 字体排印
- 字体：Oswald / Roboto Condensed 等窄体粗黑；中文用超粗黑体
- 标题全大写（英文），字高压缩（letter-spacing 紧、行高 0.95-1.05）
- 层级：巨号数字/标题 96-220px；口号 24-40px 全大写；正文 13-15px 少量出现
- 文字可沿垂直方向排布（writing-mode: vertical-rl）做侧边口号

## 4. 色彩
- 纸底 #ece5d8；主红 #d5321f；墨黑 #1c1917；芥黄 #dfa92d 与靛蓝 #33556e 只做小面积点缀
- 红黑是唯一主角：红色块不超过版面 40%，黑色负责文字与粗描边
- 禁止渐变、禁止柔和色、禁止透明玻璃

## 5. 组件与交互规范
${zl(`- 按钮：直角、2px 墨边、粗体大写；hover 向左上位移 2px 且硬阴影加深（像被拎起）；active 归位贴边
- 输入框：直角、2px 墨边、纸色底；focus 时边框变红并左移 1px；错误态红边 + 墨色粗体提示
- 下拉框：直角浮层 + 2px 墨边 + 5px 硬阴影；hover 选项填红转纸色字；选中项左侧红色实心方块
- 复选框：直角方框选中填红；单选：方框内实心方点；开关为直角滑轨 + 方块钮
- 分段控制：直角容器 + 红色方块指示块滑动；标签页为大写粗体 + 当前项红色下压条
- 手风琴：标题全大写粗体 + 方形 ±；展开区左侧 6px 红条
- 模态框：直角 + 2px 墨边 + 8px 硬阴影 + 红色标题条；遮罩纯 rgba(20,17,15,.6)
- 吐司：右下直角卡片 + 2px 墨边 + 左侧 6px 红条；提示条四种用红/黄/蓝/墨区分
- 表格：表头黑底纸字、直角、行线 2px 墨色；hover 行芥黄
- 进度：直角厚条（10px）红色填充 + 墨边；环形改直角方块环
- 步骤条：直角方块节点，当前步填红；分页直角方块；面包屑用 / 分隔大写
- 头像：方形 + 2px 墨边；可删标签直角小块
- 图标：几何实色形（三角/楔形/方块）+ 2px 墨边；严禁 emoji
- 骨架屏：直角灰块 + 两帧明灭（禁止柔和扫光）`,{hover:"向左上位移 2px、硬阴影从 3px 加深到 5px（色块被拎起的手感）",active:"位移归零、阴影贴边（压回纸面）",focus:"2px 红色实线框外扩 3px",toast:"右下角直角卡片堆叠，从右侧 14px 硬切进入，3s 后直线淡出，最多 3 条",dur:"150ms（先锋派动效要像印刷机：干脆、无弹跳）"})}

## 6. 质感细节
- 全部直角；阴影只允许「硬阴影」（0 模糊、纯色偏移）
- 纸底可加极淡印刷噪点（透明度 ≤ 5%）
- 元素可轻微斜置（rotate -6° ~ 6°）制造张力，但正文文字必须水平

## 7. 禁忌
- 禁止圆角、渐变、玻璃、柔影、emoji 图标
- 禁止居中对称的「安全排版」、禁止细字重正文`,spec:["斜向轴线 15–25°，楔形色块切分版面，巨号数字压角","红 #d5321f + 墨 #1c1917 + 纸底，芥黄/靛蓝小面积点缀","窄体粗黑大写标题，行高 0.95–1.05，可垂直排布口号","全直角 + 硬阴影，动效干脆无弹跳（150ms）"],tokens:{colors:[{name:"纸底",value:"#ece5d8"},{name:"主红",value:"#d5321f"},{name:"墨黑",value:"#1c1917"},{name:"芥黄",value:"#dfa92d"},{name:"靛蓝",value:"#33556e"}],fonts:[{role:"标题/口号",stack:'"Oswald", "Roboto Condensed", "PingFang SC", sans-serif'}],radius:"0（全直角）",shadow:"5px 5px 0 rgba(28,25,23,.85)（硬阴影）",extras:[{label:"斜向轴线",value:"15–25°"},{label:"巨号数字",value:"120–220px"}]},demo:{height:2450,heightMobile:4200,html:da({title:"构成主义 · Constructivism",fonts:["Oswald:wght@500;700","Roboto+Condensed:wght@700"],css:pa(bg)+`
body {
  font-family: "Oswald", "Roboto Condensed", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #ece5d8; color: #1c1917; padding: 42px 26px 52px;
  background-image: repeating-linear-gradient(45deg, rgba(28,25,23,.028) 0 1px, transparent 1px 7px);
}
.shell { max-width: 1080px; margin: 0 auto; position: relative; }
.topbar { display: flex; align-items: center; gap: 18px; border-bottom: 3px solid #1c1917; padding-bottom: 13px; }
.mark { width: 26px; height: 26px; background: #d5321f; clip-path: polygon(0 0, 100% 0, 0 100%); }
.brand { font-size: 19px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
.topnav { margin-left: auto; display: flex; gap: 22px; font-size: 13px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; }
.topnav span:nth-child(2){ color:#d5321f; }
.stage { position: relative; margin-top: 34px; min-height: 480px; overflow: hidden; }
.wedge { position: absolute; inset: 0; background: #d5321f; clip-path: polygon(0 0, 46% 0, 78% 100%, 0 100%); }
.band { position: absolute; left: -40px; right: -40px; top: 322px; height: 44px; background: #1c1917;
  transform: rotate(-8deg); color: #ece5d8; display: flex; align-items: center; gap: 26px;
  padding: 0 42px; font-size: 13px; letter-spacing: .3em; text-transform: uppercase; white-space: nowrap; overflow: hidden; }
.bignum { position: absolute; right: -12px; top: -46px; font-size: 300px; font-weight: 700; line-height: 1;
  color: transparent; -webkit-text-stroke: 3px #1c1917; letter-spacing: -.04em; user-select: none; }
.slogan { position: relative; z-index: 2; padding: 54px 0 0 34px; max-width: 520px; }
.slogan .kicker { display: inline-block; background: #1c1917; color: #ece5d8; font-size: 12px; letter-spacing: .3em;
  text-transform: uppercase; padding: 5px 12px; margin-bottom: 20px; }
.slogan h1 { font-size: clamp(44px, 6vw, 74px); line-height: .98; text-transform: uppercase; letter-spacing: -.01em; margin: 0; }
.slogan h1 em { font-style: normal; color: #ece5d8; -webkit-text-stroke: 2px #1c1917; }
.slogan h1 .red { color: #1c1917; background: #dfa92d; padding: 0 10px; display: inline-block; transform: rotate(-3deg); }
.slogan p.lead { font-size: 15px; line-height: 1.7; margin: 22px 0 26px; max-width: 400px; font-weight: 500;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif; }
.cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
.cta { font: inherit; font-size: 15px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
  padding: 13px 26px; border: 2px solid #1c1917; background: #1c1917; color: #ece5d8; cursor: pointer;
  box-shadow: 4px 4px 0 rgba(28,25,23,.55); transition: all .15s; }
.cta.ghost { background: transparent; color: #1c1917; }
.cta:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 rgba(28,25,23,.75); }
.cta:active { transform: none; box-shadow: 1px 1px 0 rgba(28,25,23,.75); }
.side-slogan { position: absolute; right: 12px; bottom: 26px; writing-mode: vertical-rl; font-size: 15px;
  letter-spacing: .42em; text-transform: uppercase; font-weight: 500; color: #1c1917; }
.tri { position: absolute; right: 190px; bottom: 30px; width: 0; height: 0; border-left: 34px solid transparent;
  border-bottom: 58px solid #dfa92d; transform: rotate(14deg); }
.strip-row { display: flex; gap: 16px; margin-top: 40px; }
.strip { flex: 1; border: 2px solid #1c1917; background: #f0e9da; padding: 17px 18px; box-shadow: 5px 5px 0 rgba(28,25,23,.85); position: relative; overflow: hidden; }
.strip:nth-child(2) { transform: rotate(-1.6deg); }
.strip:nth-child(3) { transform: rotate(1.2deg); }
.strip .no { font-size: 44px; font-weight: 700; line-height: 1; color: #d5321f; }
.strip h3 { font-size: 16px; text-transform: uppercase; letter-spacing: .1em; margin: 9px 0 7px; }
.strip p { font-size: 12.5px; line-height: 1.7; font-family: "PingFang SC", "Microsoft YaHei", sans-serif; color: #4a443b; margin: 0; }
.strip .diag { position: absolute; right: -22px; top: -22px; width: 56px; height: 56px; background: #1c1917; transform: rotate(45deg); }
.strip:nth-child(2) .diag { background: #dfa92d; }
@media (max-width: 760px) {
  .bignum { font-size: 170px; top: -20px; }
  .slogan { padding-left: 12px; }
  .strip-row { flex-direction: column; }
  .strip:nth-child(2), .strip:nth-child(3) { transform: none; }
  .side-slogan, .tri { display: none; }
}`,body:`
<div class="shell">
  <div class="topbar">
    <span class="mark"></span>
    <span class="brand">KONSTRUKT · 构成社</span>
    <nav class="topnav"><span>宣言</span><span>展品</span><span>工坊</span><span>通讯</span></nav>
  </div>
  <div class="stage">
    <div class="wedge"></div>
    <div class="bignum">21</div>
    <div class="slogan">
      <span class="kicker">MANIFEST 1923 · 第 21 号</span>
      <h1>把界面<br />做成<em>动员</em><br />的<span class="red">海报</span></h1>
      <p class="lead">斜切的色块、压角的巨号数字、一条穿过版面的黑色口号带——构成主义不装饰，它组织视线、指挥行动。</p>
      <div class="cta-row">
        <button class="cta">阅读宣言</button>
        <button class="cta ghost">加入工坊</button>
      </div>
    </div>
    <div class="band"><span>艺术进入生活</span><span>●</span><span>ART INTO LIFE</span><span>●</span><span>艺术进入生活</span><span>●</span><span>ART INTO LIFE</span></div>
    <div class="side-slogan">КНИГА — ГЛАВНОЕ ОРУЖИЕ</div>
    <div class="tri"></div>
  </div>
  <div class="strip-row">
    <div class="strip"><span class="diag"></span><div class="no">01</div><h3>楔形</h3><p>色块以对角切入版面，视线沿斜线滑动，停留点即行动点。</p></div>
    <div class="strip"><span class="diag"></span><div class="no">02</div><h3>口号带</h3><p>黑色横带以 -8° 穿过版面，重复出现的短句构成版面节奏。</p></div>
    <div class="strip"><span class="diag"></span><div class="no">03</div><h3>巨号数字</h3><p>描边数字压角出血，既是序号也是构图的一部分。</p></div>
  </div>
</div>${ua()}`,js:xa()})}},mg={bg:"#efe8d6",surface:"#f6f0e0",alt:"rgba(47,74,58,0.08)",text:"#2f4a3a",muted:"#8a8168",primary:"#7d3a4d",onPrimary:"#f6f0e0",border:"rgba(176,141,62,0.75)",radius:"14px 26px 14px 26px",radiusLg:"20px 34px 20px 34px",shadow:"0 2px 10px rgba(47,74,58,0.12)",font:'"Cormorant Garamond","Noto Serif SC","Songti SC","SimSun",serif',mono:'"Cormorant Garamond",Georgia,serif',ok:"#5c7a4a",warn:"#b08d3e",err:"#7d3a4d",info:"#3e5f74",focus:"#b08d3e",extraCss:`
.sc-root{border:1px solid rgba(176,141,62,.5);}
.sc-cell h5{font-family:var(--sc-font);font-style:italic;letter-spacing:.08em;text-transform:none;font-size:13px;color:#b08d3e;}
.sc-btn{letter-spacing:.06em;}
.sc-btn.pri{background:#7d3a4d;}
.sc-lbl,.sc-kicker{letter-spacing:.2em;}
.sc-tbl th{font-family:var(--sc-font);font-style:italic;letter-spacing:.08em;text-transform:none;font-size:12px;}
.sc-tbl th,.sc-tbl td{border-bottom:1px solid rgba(176,141,62,.35);}
.sc-step .no{font-family:var(--sc-font);}`},hg={id:"art-nouveau",no:"22",name:"新艺术运动",nameEn:"Art Nouveau",tagline:"藤蔓般的曲线、金线描边、彩窗拱门——让界面从花园里长出来。",origin:"慕夏海报 / 巴黎地铁入口 / 维也纳分离派",year:"1890 — 1910s",tags:["有机曲线","金线","彩窗","花卉"],bestFor:["品牌官网","茶室 / 香氛 / 珠宝","婚庆与请柬类页面"],avoid:["数据密集后台","极简工具类产品"],prompt:`# 设计范式：新艺术运动（Art Nouveau）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：1890 年代的巴黎与布拉格——藤蔓生长的曲线、彩窗拱门、金线勾边、慕夏式的长发女子与花环
- 情绪关键词：有机、典雅、装饰、手工、植物性
- 一切线条都是生长出来的：没有一条纯直线和标准圆弧，曲线要「甩」出去再收回来（whiplash line）

## 2. 布局
- 拱门即骨架：主视觉、卡片、模态框都用上圆拱造型（border-radius 上半 50% 或大拱弧）
- 对称中带呼吸：版面大体对称，但藤蔓装饰左右姿态不同
- 装饰边框：细金线双线框 + 四角花饰；分隔用藤蔓 SVG 而非直线
- 留白为宣纸色，正文栏宽 60-68ch

## 3. 字体排印
- 字体：Cormorant Garamond / Italiana 类高对比衬线做标题，可斜体；中文用宋体族
- 首字下沉（drop cap）2-3 行高，金绿色
- 层级：H1 44-64px 衬线；小标签全大写 + 0.2em 字距；正文 14-16px 行高 1.9
- 强调词用暗酒红斜体

## 4. 色彩
- 米纸底 #f4eede；墨绿 #2f4a3a；金 #b08d3e；暗酒红 #7d3a4d；橄榄 #7a8a4f
- 金色只做线与字，不做大面积色块；酒红是唯一强调色
- 彩窗感：局部可用 2-3 色的低饱和玻璃色块（opacity ≤ .5）

## 5. 组件与交互规范
${zl(`- 按钮：细金边（1px）+ 轻微不对称圆角 + 衬线字；hover 时金线加粗并填墨绿转米字（0.3s 缓慢）；active 内凹
- 输入框：仅底部金线或不对称圆角细框；focus 时线由中心向两侧「生长」变粗；错误态酒红线 + 斜体提示
- 下拉框：浮层为拱顶小卡片（上部大圆弧）+ 金线框；选项 hover 填淡金；选中项左侧小型花饰 ❀
- 复选框：金线方框（不对称圆角），选中填墨绿 + 金勾；单选：金环 + 酒红芯；开关为藤蔓轨道 + 金钮
- 分段控制：金线容器 + 淡金滑块缓慢滑动；标签页：斜体衬线 + 当前项下方金线下压
- 手风琴：标题为衬线斜体，右侧 +/− 用细金十字旋转；展开 0.4s 如藤蔓舒展
- 模态框：拱顶卡片 + 金双线框 + 顶部花饰；遮罩 rgba(30,40,32,.4)
- 吐司：右下米色小卡 + 金边 + 酒红左条，缓慢浮入
- 表格：金细线、衬线表头（斜体）、行 hover 淡金
- 进度：藤蔓式细线 + 金色填充；环形为金描边 + 花饰端点
- 步骤条：金线相连的花节点；分页用「上一页 · I II III · 下一页」罗马数字；面包屑用 ❧ 分隔
- 头像：拱形（上圆下直）+ 金边；可删标签细金框 + 花 ✕
- 图标：细线植物纹样（茎、叶、藤圈）SVG 1px 金/墨绿
- 骨架屏：淡金块 1.6s 呼吸，如光线穿过彩窗`,{hover:"金线加粗为 2px、底色淡金 8%，缓慢 0.3s，像金粉晕开",active:"内凹 1px 且饱和度略降",focus:"1.5px 金色细框 + 4px 淡金外扩",toast:"右下角米色金边小卡，从下 14px 浮入 0.45s，停留 3.5s 后缓慢上浮淡出，最多 3 条",dur:"320ms（新艺术的一切都要慢半拍，如藤蔓生长）"})}

## 6. 质感细节
- 细节密度高但明度低：装饰用 1px 线与 ≤ 8% 透明度的色块
- 藤蔓分隔线用内联 SVG path（曲率变化的 whiplash 曲线）
- 纸面可加极淡斑驳纹理（透明度 ≤ 4%）；禁止锐利阴影

## 7. 禁忌
- 禁止纯直线网格、禁止 emoji、禁止高饱和荧光色
- 禁止无衬线粗黑标题、禁止硬阴影`,spec:["拱门造型贯穿主视觉 / 卡片 / 模态框，上部大圆弧","金线 #b08d3e 双线框 + 藤蔓 SVG 分隔，whiplash 曲线","米纸底 + 墨绿文字，暗酒红唯一强调色，衬线斜体","动效缓慢（320ms）如藤蔓生长；首字下沉 + 花饰端点"],tokens:{colors:[{name:"米纸",value:"#f4eede"},{name:"墨绿",value:"#2f4a3a"},{name:"金",value:"#b08d3e"},{name:"暗酒红",value:"#7d3a4d"},{name:"橄榄",value:"#7a8a4f"}],fonts:[{role:"标题",stack:'"Cormorant Garamond", "Noto Serif SC", serif'},{role:"正文",stack:'"Noto Serif SC", "Songti SC", serif'}],radius:"14–26px 不对称（拱顶 50%）",shadow:"0 2px 10px rgba(47,74,58,.12)",extras:[{label:"装饰线",value:"1px 金线双线框"},{label:"字距",value:"小标签 0.2em"}]},demo:{height:2450,heightMobile:4200,html:da({title:"新艺术运动 · Art Nouveau",fonts:["Cormorant+Garamond:ital,wght@0,500;0,700;1,500","Noto+Serif+SC:wght@500;700"],css:pa(mg)+`
body {
  font-family: "Cormorant Garamond", "Noto Serif SC", "Songti SC", serif;
  background: #f4eede; color: #2f4a3a; padding: 46px 26px 56px;
  background-image: radial-gradient(rgba(176,141,62,.06) 1px, transparent 1px);
  background-size: 22px 22px;
}
.shell { max-width: 1020px; margin: 0 auto; }
.topbar { display: flex; align-items: center; justify-content: space-between; padding-bottom: 14px;
  border-bottom: 1px solid rgba(176,141,62,.6); position: relative; }
.topbar::after { content: ""; position: absolute; left: 0; right: 0; bottom: -5px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(176,141,62,.7), transparent); }
.brand { font-size: 24px; font-weight: 700; letter-spacing: .14em; color: #2f4a3a; }
.brand i { font-style: normal; color: #b08d3e; }
.topnav { display: flex; gap: 26px; font-size: 13px; letter-spacing: .18em; }
.topnav span { color: #7d3a4d; }
.vine { display: block; margin: 26px auto 0; color: #b08d3e; }
.arch-wrap { display: flex; justify-content: center; margin-top: 34px; }
.arch {
  width: min(560px, 100%); border: 1px solid rgba(176,141,62,.85); border-bottom-width: 2px;
  border-radius: 300px 300px 22px 22px; padding: 56px 40px 42px; text-align: center; position: relative;
  background: linear-gradient(180deg, rgba(176,141,62,.08), transparent 40%), #f6f0e0;
  box-shadow: 0 3px 24px rgba(47,74,58,.1);
}
.arch::before { content: ""; position: absolute; inset: 8px; border: 1px solid rgba(176,141,62,.4);
  border-radius: 290px 290px 16px 16px; pointer-events: none; }
.arch .halo { position: absolute; top: 26px; left: 50%; transform: translateX(-50%); color: #7a8a4f; }
.arch .eyebrow { font-size: 12px; letter-spacing: .34em; color: #7d3a4d; text-transform: uppercase; margin-top: 34px; }
.arch h1 { font-size: clamp(38px, 5.4vw, 58px); font-weight: 500; line-height: 1.12; margin: 14px 0 4px; color: #2f4a3a; }
.arch h1 em { font-style: italic; color: #7d3a4d; }
.arch .fr { font-size: 17px; font-style: italic; color: #b08d3e; letter-spacing: .06em; }
.arch p.lead { font-size: 15px; line-height: 2; color: #4c5c4c; max-width: 400px; margin: 18px auto 26px; }
.arch .btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.abtn { font: inherit; font-size: 14px; letter-spacing: .16em; padding: 11px 28px; cursor: pointer;
  border: 1px solid #2f4a3a; background: #2f4a3a; color: #f4eede; border-radius: 999px 999px 4px 4px;
  transition: all .32s cubic-bezier(.22,1,.36,1); }
.abtn.ghost { background: transparent; color: #2f4a3a; border-color: rgba(176,141,62,.9); }
.abtn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(47,74,58,.18); letter-spacing: .2em; }
.abtn:active { transform: translateY(0); }
.stained { display: flex; justify-content: center; gap: 10px; margin-top: 30px; }
.stained i { width: 34px; height: 52px; border: 1px solid rgba(176,141,62,.55); border-radius: 17px 17px 3px 3px; opacity: .55; }
.stained i:nth-child(1) { background: #7a8a4f; } .stained i:nth-child(2) { background: #7d3a4d; }
.stained i:nth-child(3) { background: #b08d3e; } .stained i:nth-child(4) { background: #3e5f74; }
.stained i:nth-child(5) { background: #7a8a4f; }
.trio { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; }
.card { border: 1px solid rgba(176,141,62,.7); background: #f6f0e0; padding: 26px 22px 24px; text-align: center;
  border-radius: 60px 60px 12px 12px; box-shadow: 0 2px 14px rgba(47,74,58,.08); transition: transform .32s cubic-bezier(.22,1,.36,1), box-shadow .32s; }
.card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(47,74,58,.14); }
.card .orn { color: #b08d3e; font-size: 20px; }
.card h3 { font-size: 21px; font-weight: 700; margin: 10px 0 4px; }
.card small { font-style: italic; color: #b08d3e; font-size: 13px; letter-spacing: .08em; }
.card p { font-size: 13.5px; line-height: 1.95; color: #4c5c4c; margin: 12px 0 0; }
.dropcap::first-letter { font-size: 46px; line-height: .9; color: #7d3a4d; font-weight: 700; float: left; padding: 4px 8px 0 0; }
@media (max-width: 760px) { .trio { grid-template-columns: 1fr; } .topnav { display: none; } }`,body:`
<div class="shell">
  <div class="topbar">
    <span class="brand">Maison <i>❀</i> Nouveau</span>
    <nav class="topnav"><span>花圃</span><span>工坊</span><span>季刊</span><span>造访</span></nav>
  </div>
  <svg class="vine" width="220" height="22" viewBox="0 0 220 22" fill="none" stroke="currentColor" stroke-width="1.2">
    <path d="M4 11 C 40 -4, 70 26, 110 11 S 180 -4, 216 11" />
    <circle cx="110" cy="11" r="2.6" fill="currentColor" stroke="none"/>
    <path d="M78 8 q6 -7 12 0 M130 8 q6 -7 12 0" />
  </svg>
  <div class="arch-wrap">
    <div class="arch">
      <svg class="halo" width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="currentColor" stroke-width="1.1">
        <circle cx="36" cy="36" r="15"/><path d="M36 6 v12 M36 54 v12 M6 36 h12 M54 36 h12 M15 15 l8 8 M49 49 l8 8 M57 15 l-8 8 M23 49 l-8 8"/>
        <circle cx="36" cy="36" r="26" stroke-dasharray="2 5"/>
      </svg>
      <div class="eyebrow">Est. 1897 · 分离派工坊</div>
      <h1>让界面<br />从花园里<em>长出来</em></h1>
      <div class="fr">— L'Art Décoratif —</div>
      <p class="lead dropcap">藤蔓般的曲线代替直线，金线勾住每一处转角。功能藏在装饰之后，装饰本身就是功能——这是新艺术运动的全部纪律。</p>
      <div class="btns">
        <button class="abtn">走进花圃</button>
        <button class="abtn ghost">阅读季刊</button>
      </div>
      <div class="stained"><i></i><i></i><i></i><i></i><i></i></div>
    </div>
  </div>
  <div class="trio">
    <div class="card"><div class="orn">❁</div><h3>曲线即骨架</h3><small>La Ligne</small><p>拱门、圆窗与甩鞭线构成全部骨架；没有一条直线是被迫存在的。</p></div>
    <div class="card"><div class="orn">❀</div><h3>金线描边</h3><small>Le Filet d'Or</small><p>细金线代替阴影划分层级：一处转角，两道线，足够了。</p></div>
    <div class="card"><div class="orn">✿</div><h3>彩窗点色</h3><small>Le Vitrail</small><p>橄榄、酒红与天蓝只在彩窗式的小色块里出现，像光透进来。</p></div>
  </div>
</div>${ua()}`,js:xa()})}},vg={bg:"#e8f7fd",surface:"#ffffff",alt:"rgba(30,143,192,0.1)",text:"#0f5e86",muted:"#5b93a8",primary:"#1e8fc0",onPrimary:"#ffffff",border:"rgba(15,94,134,0.22)",radius:"18px",radiusLg:"24px",shadow:"0 6px 18px rgba(15,94,134,0.18)",font:'"Nunito Sans","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif',mono:'ui-monospace,"Segoe UI",monospace',ok:"#5da333",warn:"#e8a020",err:"#e05a4e",info:"#1e8fc0",focus:"#1e8fc0",extraCss:`
.sc-root{background:linear-gradient(180deg,#dff4fd,#eefaf3);}
.sc-cell{border:1px solid rgba(255,255,255,.85);box-shadow:0 6px 16px rgba(15,94,134,.14), inset 0 1px 0 #ffffff;}
.sc-btn{box-shadow:0 3px 8px rgba(15,94,134,.16), inset 0 1px 0 rgba(255,255,255,.8);}
.sc-btn.pri{background:linear-gradient(180deg,#3db1de,#187fbe);}
.sc-btn:hover{transform:translateY(-2px);}
.sc-inp,.sc-ta,.sc-sel-btn{box-shadow:inset 0 2px 5px rgba(15,94,134,.12);}
.sc-prog{background:rgba(15,94,134,.18);}
.sc-prog-fill{background:linear-gradient(180deg,#54c3ea,#187fbe);box-shadow:inset 0 1px 0 rgba(255,255,255,.7);}
.sc-sw input:checked + .tr{background:linear-gradient(180deg,#54c3ea,#187fbe);}
.sc-badge.pri{background:linear-gradient(180deg,#3db1de,#187fbe);}`},yg={id:"frutiger-aero",no:"23",name:"水族馆拟真",nameEn:"Frutiger Aero",tagline:"天空、草地、水光气泡——2008 年科技广告里的那个干净世界。",origin:"Windows Vista/7 Aero / 拟真生态科技广告",year:"2004 — 2013",tags:["水光","气泡","天蓝草绿","光泽拟真"],bestFor:["健康 / 环保 / 生活方式产品","面向大众的消费品牌","数据可视化包装"],avoid:["极简性冷淡品牌","暗色开发者工具"],prompt:`# 设计范式：水族馆拟真（Frutiger Aero）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：2004-2013 年的科技广告世界——蓝天、青草、水珠、气泡、光泽塑料；「自然 × 科技」的乐观主义
- 情绪关键词：干净、水润、透亮、乐观、人本
- 一切物体都像刚从水里捞出来：表面有高光、边缘有反光、底部有彩色柔影

## 2. 布局
- 大自然做背景：天空→草地的渐变地平线，或水波纹浅底；内容放在玻璃/白色面板上
- 面板大圆角（16-24px）+ 白色内高光（inset 0 1px 0 #fff）+ 蓝色柔影
- 图标球： glossy 球形图标（径向渐变 + 顶部白高光）承担导航与功能入口
- 气泡漂浮：2-6 个半透明气泡缓慢上浮（6-10s 循环），透明度 ≤ .35

## 3. 字体排印
- 字体：Nunito Sans / Segoe UI 类人本无衬线，圆润、字重 400-700
- 标题 32-52px / 700，可带 1px 白色 text-shadow 提亮；正文 14-16px 行高 1.8
- 小标签全大写灰色；数字 tabular

## 4. 色彩
- 天蓝 #bfeeff → #7fd4f0 渐变做天空；主蓝 #1e8fc0；草绿 #6cb33f；水光白 rgba(255,255,255,.65)；深海蓝 #0f5e86 文字
- 绿色只做「自然/成功」语义与草地渐变；整体明度高、饱和度中
- 光泽公式：linear-gradient(180deg, rgba(255,255,255,.65), transparent 55%) 叠加在主色上

## 5. 组件与交互规范
${zl(`- 按钮：glossy 胶囊（主色渐变 + 顶部白高光 + 1px 亮边）；hover 上浮 2px + 光泽下移；active 下压回位
- 输入框：白色内凹（inset 0 2px 5px 蓝 12%）+ 圆角；focus 时外发光 0 0 0 3px 蓝 25%
- 下拉框：白色浮层 + 蓝柔影；选项 hover 天蓝渐变；选中项左侧水滴图标
- 复选框：圆角方框选中填蓝渐变 + 白勾；单选：蓝环 + 白芯；开关为水滴轨道 + 白色凸钮，ON 时蓝渐变
- 分段控制：白色胶囊容器 + 蓝渐变滑块上浮滑动；标签页：文字 + 下方蓝渐变胶囊指示
- 手风琴：标题带圆形水滴图标，展开 0.3s 如气泡上浮
- 模态框：白色大圆角面板 + inset 白高光 + 蓝柔影；遮罩 rgba(15,94,134,.3) 轻微 blur
- 吐司：右下白色圆角小卡 + 蓝色左条 + 顶部高光
- 表格：白色面板内、行 hover 天蓝 8%、表头蓝灰大写
- 进度：胶囊槽 + 蓝渐变填充 + 顶部白高光线；环形蓝渐变描边
- 步骤条：glossy 圆球节点（未到灰、当前蓝渐变、已到绿）；分页圆角方块；面包屑用 ›
- 头像：圆形 + 白色 2px 边 + 微凸起；可删标签白色胶囊
- 图标：glossy 球形或圆润 3D 图标（含顶部高光），禁纯扁平
- 骨架屏：蓝灰渐变扫光 1.2s`,{hover:"上浮 2px + 光泽位置下移（高光从 55% 移到 70%），柔影加深",active:"下压归位 + inset 高光收窄",focus:"2px 主蓝描边 + 3px 外扩 rgba(30,143,192,.3)",toast:"右下角白色圆角小卡，从下 14px 弹入，3s 后如气泡上浮淡出，最多 3 条",dur:"240ms（水润但不黏滞，气泡漂浮循环 8s）"})}

## 6. 质感细节
- 光泽三件套：顶部白高光 + 边缘 1px 亮边 + 底部彩色柔影，三者缺一不可
- 渐变必须有方向（垂直向上亮）；禁止水平杂乱渐变与噪点
- 背景元素：草地曲线（大圆弧）、水波纹、鱼群剪影（透明度 ≤ .12）

## 7. 禁忌
- 禁止暗黑底、禁止赛博霓虹、禁止硬边与直角堆砌
- 禁止纯扁平无光泽（那会退化成现代扁平风）`,spec:["天空→草地渐变地平线背景，内容置于白色玻璃面板","glossy 三件套：顶部白高光 + 1px 亮边 + 蓝色柔影","天蓝 #1e8fc0 主色 + 草绿 #6cb33f，深海蓝文字","气泡漂浮循环动画（≤ .35 透明度），动效水润 240ms"],tokens:{colors:[{name:"天空",value:"#bfeeff → #7fd4f0"},{name:"主蓝",value:"#1e8fc0"},{name:"草绿",value:"#6cb33f"},{name:"深海蓝",value:"#0f5e86"},{name:"水光白",value:"rgba(255,255,255,.65)"}],fonts:[{role:"全场",stack:'"Nunito Sans", "Segoe UI", "PingFang SC", sans-serif'}],radius:"16–24px（按钮 999px）",shadow:"0 6px 18px rgba(15,94,134,.18) + inset 0 1px 0 #fff",extras:[{label:"光泽",value:"白 65% → 透明 55% 垂直渐变"},{label:"气泡",value:"2–6 个，8s 上浮循环"}]},demo:{height:2450,heightMobile:4200,html:da({title:"水族馆拟真 · Frutiger Aero",fonts:["Nunito+Sans:wght@400;700;800"],css:pa(vg)+`
body {
  font-family: "Nunito Sans", "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #0f5e86; padding: 0 0 52px;
  background: linear-gradient(180deg, #bfeeff 0%, #9fe4f8 46%, #cdeec2 72%, #9ed97f 100%);
  min-height: 100%;
  position: relative; overflow-x: hidden;
}
.bub { position: absolute; border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle at 32% 28%, rgba(255,255,255,.9), rgba(255,255,255,.16) 58%);
  border: 1px solid rgba(255,255,255,.65); }
.bub1 { width: 22px; height: 22px; left: 8%; top: 120px; animation: rise 9s linear infinite; }
.bub2 { width: 12px; height: 12px; left: 18%; top: 320px; animation: rise 7s 1.4s linear infinite; }
.bub3 { width: 30px; height: 30px; right: 10%; top: 200px; animation: rise 11s .8s linear infinite; }
.bub4 { width: 15px; height: 15px; right: 22%; top: 460px; animation: rise 8s 2.2s linear infinite; }
@keyframes rise { from { transform: translateY(0); opacity: .0; } 12% { opacity: .8; } to { transform: translateY(-420px); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .bub { animation: none; opacity: .4; } }
.top { max-width: 1080px; margin: 0 auto; padding: 26px 26px 0; display: flex; align-items: center; gap: 16px; }
.logo { width: 42px; height: 42px; border-radius: 50%;
  background: radial-gradient(circle at 32% 26%, #8fdcf7, #187fbe 72%);
  box-shadow: inset 0 2px 3px rgba(255,255,255,.85), 0 4px 10px rgba(15,94,134,.3); }
.brand { font-size: 19px; font-weight: 800; color: #0c4a68; letter-spacing: .02em; }
.brand small { display: block; font-size: 10.5px; font-weight: 700; color: #3e7d97; letter-spacing: .28em; }
.topnav { margin-left: auto; display: flex; gap: 20px; font-size: 13.5px; font-weight: 700; color: #14688f; }
.topnav span { text-shadow: 0 1px 0 rgba(255,255,255,.7); }
.glass { max-width: 1080px; margin: 30px auto 0; padding: 44px 46px 48px; position: relative;
  background: linear-gradient(180deg, rgba(255,255,255,.82), rgba(255,255,255,.6));
  border: 1px solid rgba(255,255,255,.9); border-radius: 26px;
  box-shadow: 0 14px 40px rgba(15,94,134,.2), inset 0 1px 0 #ffffff; backdrop-filter: blur(4px); }
.kicker { display: inline-flex; align-items: center; gap: 8px; font-size: 11.5px; font-weight: 800; letter-spacing: .22em;
  color: #1a7a4c; text-transform: uppercase; }
.kicker::before { content: ""; width: 9px; height: 9px; border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #b8ec9a, #5da333 74%); }
.hero { display: grid; grid-template-columns: 1.2fr .8fr; gap: 36px; align-items: center; }
.hero h1 { font-size: clamp(34px, 4.6vw, 52px); line-height: 1.12; font-weight: 800; color: #0c4a68; margin: 12px 0 8px;
  text-shadow: 0 1px 0 rgba(255,255,255,.8); }
.hero h1 b { color: #187fbe; }
.hero p.lead { font-size: 15.5px; line-height: 1.85; color: #23698a; margin: 0 0 24px; max-width: 460px; }
.btns { display: flex; gap: 13px; flex-wrap: wrap; }
.gbtn { font: inherit; font-weight: 800; font-size: 14.5px; color: #fff; padding: 12px 26px; border: 1px solid rgba(255,255,255,.7);
  border-radius: 999px; cursor: pointer; background: linear-gradient(180deg, #4db9e4, #187fbe 58%, #1472ab);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.75), 0 6px 16px rgba(15,94,134,.32); transition: all .24s cubic-bezier(.22,1,.36,1); }
.gbtn.ghost { background: rgba(255,255,255,.75); color: #14688f; border-color: rgba(15,94,134,.25); box-shadow: inset 0 1px 0 #fff, 0 4px 10px rgba(15,94,134,.14); }
.gbtn:hover { transform: translateY(-2px); box-shadow: inset 0 1px 0 rgba(255,255,255,.75), 0 10px 22px rgba(15,94,134,.36); }
.gbtn:active { transform: translateY(0); }
.orb-box { display: flex; justify-content: center; }
.orb { width: 168px; height: 168px; border-radius: 50%; position: relative;
  background: radial-gradient(circle at 32% 26%, #a6e6fb, #2f9fce 66%, #1472ab);
  box-shadow: inset 0 3px 6px rgba(255,255,255,.85), inset 0 -8px 14px rgba(11,78,112,.35), 0 14px 30px rgba(15,94,134,.3); }
.orb::before { content: ""; position: absolute; left: 20%; top: 9%; width: 60%; height: 34%; border-radius: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,.95), rgba(255,255,255,.05)); }
.orb::after { content: "aqua"; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  font-size: 26px; font-weight: 800; color: #fff; text-shadow: 0 2px 6px rgba(11,78,112,.5); letter-spacing: .04em; }
.stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 38px; }
.stat { background: linear-gradient(180deg, #ffffff, #f2fbff); border: 1px solid rgba(255,255,255,.95); border-radius: 18px;
  padding: 20px 22px; box-shadow: 0 6px 16px rgba(15,94,134,.14), inset 0 1px 0 #fff; }
.stat .ic { width: 34px; height: 34px; border-radius: 50%; margin-bottom: 12px;
  background: radial-gradient(circle at 32% 26%, #d3f3c2, #6cb33f 76%); box-shadow: inset 0 1px 0 rgba(255,255,255,.8); }
.stat:nth-child(2) .ic { background: radial-gradient(circle at 32% 26%, #a6e6fb, #1e8fc0 76%); }
.stat:nth-child(3) .ic { background: radial-gradient(circle at 32% 26%, #ffe1a6, #e8a020 76%); }
.stat b { display: block; font-size: 26px; font-weight: 800; color: #0c4a68; font-variant-numeric: tabular-nums; }
.stat span { font-size: 12.5px; color: #3e7d97; font-weight: 700; }
.grass { display: block; margin: 34px auto 0; max-width: 1080px; width: calc(100% - 52px); }
@media (max-width: 820px) { .hero { grid-template-columns: 1fr; } .stats { grid-template-columns: 1fr; } .topnav { display: none; } .glass { padding: 30px 24px; } }`,body:`
<span class="bub bub1"></span><span class="bub bub2"></span><span class="bub bub3"></span><span class="bub bub4"></span>
<div class="top">
  <span class="logo"></span>
  <span class="brand">AQUA<small>FRESH · 2008</small></span>
  <nav class="topnav"><span>水源</span><span>科技</span><span>生态</span><span>关于</span></nav>
</div>
<div class="glass">
  <div class="hero">
    <div>
      <span class="kicker">Pure · Clear · Alive</span>
      <h1>科技像水一样<br /><b>干净透亮</b>的年代</h1>
      <p class="lead">天空渐变、草地曲线、气泡上浮、玻璃面板里的白高光——Frutiger Aero 相信技术可以像清晨的湖水一样让人放心。</p>
      <div class="btns">
        <button class="gbtn">开始体验</button>
        <button class="gbtn ghost">看看水源</button>
      </div>
    </div>
    <div class="orb-box"><div class="orb"></div></div>
  </div>
  <div class="stats">
    <div class="stat"><span class="ic"></span><b>98.2%</b><span>水源洁净度</span></div>
    <div class="stat"><span class="ic"></span><b>12 L</b><span>人均日节水</span></div>
    <div class="stat"><span class="ic"></span><b>36 k</b><span>社区参与者</span></div>
  </div>
</div>
<svg class="grass" viewBox="0 0 1040 60" fill="none">
  <path d="M0 44 C 180 10, 340 58, 520 30 S 860 6, 1040 36 L 1040 60 L 0 60 Z" fill="rgba(108,179,63,.35)"/>
  <path d="M0 52 C 220 26, 420 60, 640 42 S 920 24, 1040 50 L 1040 60 L 0 60 Z" fill="rgba(108,179,63,.55)"/>
</svg>${ua()}`,js:xa()})}},wg={bg:"#e6e8f2",surface:"#e6e8f2",alt:"rgba(90,100,150,0.08)",text:"#3a3d52",muted:"#8a8fa8",primary:"#6a5df9",onPrimary:"#ffffff",border:"rgba(90,100,150,0.14)",radius:"16px",radiusLg:"24px",shadow:"6px 6px 14px #c3c6d4, -6px -6px 14px #ffffff",font:'"Manrope","PingFang SC","Microsoft YaHei",system-ui,sans-serif',mono:'ui-monospace,"SF Mono",Consolas,monospace',ok:"#4caf7d",warn:"#e3a23c",err:"#e06060",info:"#6a5df9",focus:"#6a5df9",extraCss:`
.sc-cell{border:0;box-shadow:6px 6px 14px #c3c6d4,-6px -6px 14px #ffffff;}
.sc-btn{border:0;box-shadow:5px 5px 12px #c3c6d4,-5px -5px 12px #ffffff;}
.sc-btn.pri{color:#fff;background:linear-gradient(145deg,#7a6dff,#5c4fe8);box-shadow:4px 4px 10px rgba(106,93,249,.35),-3px -3px 8px #ffffff;}
.sc-btn:hover{transform:translateY(-2px);}
.sc-btn:active,.sc-btn.pressed{box-shadow:inset 4px 4px 9px #c3c6d4,inset -4px -4px 9px #ffffff;transform:none;}
.sc-inp,.sc-ta,.sc-sel-btn{border:0;box-shadow:inset 4px 4px 9px #c8cbdb,inset -4px -4px 9px #ffffff;}
.sc-sel-list,.sc-menu-list,.sc-sug{border:0;box-shadow:7px 7px 16px #c3c6d4,-7px -7px 16px #ffffff;}
.sc-modal-box,.sc-alert,.sc-toast{border:0;box-shadow:9px 9px 22px #c3c6d4,-9px -9px 22px #ffffff;}
.sc-box{border:0;box-shadow:3px 3px 7px #c8cbdb,-3px -3px 7px #ffffff;}
.sc-chk input:checked + .sc-box{box-shadow:inset 3px 3px 6px rgba(106,93,249,.4),inset -2px -2px 5px rgba(255,255,255,.6);background:linear-gradient(145deg,#7a6dff,#5c4fe8);}
.sc-sw .tr{box-shadow:inset 3px 3px 7px #c8cbdb,inset -3px -3px 7px #ffffff;background:#dcdfeb;}
.sc-sw input:checked + .tr{background:linear-gradient(145deg,#7a6dff,#5c4fe8);}
.sc-sw .tr::after{box-shadow:2px 2px 6px rgba(90,100,150,.4);}
.sc-prog{background:#dcdfeb;box-shadow:inset 3px 3px 6px #c8cbdb,inset -2px -2px 5px #ffffff;}
.sc-prog-fill{background:linear-gradient(90deg,#7a6dff,#5c4fe8);}
.sc-step .no{border:0;box-shadow:3px 3px 7px #c8cbdb,-3px -3px 7px #ffffff;}
.sc-step.cur .no,.sc-step.done .no{background:linear-gradient(145deg,#7a6dff,#5c4fe8);color:#fff;box-shadow:2px 2px 6px rgba(106,93,249,.35);}
.sc-pg-b{border:0;box-shadow:3px 3px 8px #c8cbdb,-3px -3px 8px #ffffff;}
.sc-pg-b.on{background:linear-gradient(145deg,#7a6dff,#5c4fe8);color:#fff;box-shadow:inset 2px 2px 5px rgba(60,45,190,.4);}`},Sg={id:"neumorphism",no:"24",name:"新拟态",nameEn:"Neumorphism",tagline:"同一块「软塑料」里挤出按钮、按进输入框——影子即界面。",origin:"Dribbble Soft UI / Alexander Plyuto",year:"2019 — 2020",tags:["柔影","同色挤出","内凹","低对比"],bestFor:["智能家居中控","音乐播放器","概念演示页"],avoid:["强可访问性要求的正式产品","内容密集的资讯页"],prompt:`# 设计范式：新拟态（Neuomorphism / Soft UI）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：整个界面是一块同色的软塑料/软胶面板，控件被「挤出」表面或「按进」表面——没有颜色边界，只有光影边界
- 情绪关键词：柔软、安静、圆润、内向、低对比
- 光源约定：左上 45° 单一光源；凸起 = 亮影左上 + 暗影右下；凹陷 = 反向 inset

## 2. 布局
- 背景与组件同色（如 #e6e8f2），全靠双向柔影区分层级
- 大圆角（16-28px）+ 宽松间距；面板之间用留白而非线
- 内容分区少而大：一屏 3-5 个区块，像一块整体打磨的控件板

## 3. 字体排印
- 字体：Manrope / Nunito 类圆润无衬线；文字颜色低对比灰紫 #3a3d52（ WCAG 例外需在交互态补足）
- 层级：H1 36-48px/700；正文 14-15px/1.8；标签小写灰
- 数字大而圆（tabular），用于播放器/仪表场景

## 4. 色彩
- 全场同色底 #e6e8f2；亮影 #ffffff；暗影 #c3c6d4；文字 #3a3d52
- 唯一强调色紫 #6a5df9 只用于：主按钮、开关 ON、进度、当前项
- 禁止出现第二种大面积颜色；禁止深色底

## 5. 组件与交互规范
${zl(`- 按钮：无边框、双向柔影（5px 5px 12px 暗影 + -5px -5px 12px 亮影）；hover 上浮 2px 影子拉开；active 切换为 inset 双影（被按进面板）；主按钮为紫渐变凸起
- 输入框：凹陷式（inset 4px 4px 9px 暗影 + inset -4px -4px 9px 亮影），无边框；focus 时 inset 影加深 + 外圈紫晕；错误态紫晕换红晕
- 下拉框：浮层为同色凸起面板；选项 hover 时局部变凹（inset）；选中项紫字
- 复选框：同色凸起小方块，选中变凹并填紫渐变；单选：凹环 + 紫芯；开关：凹陷轨道 + 凸起圆钮，ON 时轨道紫渐变
- 分段控制：凹陷容器 + 凸起紫滑块缓慢滑动；标签页：文字 + 凹陷胶囊指示当前项
- 手风琴：标题行右侧圆形凸钮 +/−，展开时变凹；内容区 0.3s 高度缓动
- 模态框：同色凸起大面板（9px 9px 22px 双影），无描边；遮罩 rgba(90,100,150,.28)
- 吐司：右下同色凸起小卡 + 紫色左条；提示条同款
- 表格：无边框，行 hover 凹陷；表头小写灰
- 进度：凹陷槽 + 紫渐变填充；环形为凹槽 + 紫描边
- 步骤条：圆形凸起节点，当前/完成变紫渐变；分页凸起方块，当前项凹陷变紫；面包屑 › 分隔灰字
- 头像：圆形凸起 + 同色边；可删标签凸起胶囊
- 图标：同色浮雕感（双向柔影描出形状），禁彩色描边图标
- 骨架屏：同色微凹块 + 极缓呼吸 1.8s`,{hover:"上浮 2px、双向柔影各拉开 2px（6px→8px），像控件从面板里浮出来",active:"立即切换为 inset 双向柔影（被按进面板），无位移",focus:"2px 紫描边 + 4px 紫色 22% 外扩",toast:"右下角同色凸起小卡，从下 12px 软浮入，3s 后向下沉入淡出，最多 3 条",dur:"240ms（软塑料手感：慢一点、软一点，缓动 cubic-bezier(.22,1,.36,1)）"})}

## 6. 质感细节
- 阴影是唯一的「描边」：双向柔影的偏移量必须相等、模糊 ≥ 偏移 × 2
- 按压手感必须真实：active 态的 inset 阴影方向与 hover 相反
- 表面可加 1px 极淡噪点（透明度 ≤ 3%）增加磨砂感

## 7. 禁忌
- 禁止边框线、禁止纯平无影控件、禁止多彩色块
- 禁止高对比深色文字以外的高饱和颜色（紫 #6a5df9 除外）
- 正文对比度不足时必须局部加深文字色，不得牺牲可读性`,spec:["同色底 #e6e8f2，全部层级靠双向柔影（亮 #ffffff / 暗 #c3c6d4）","凸起 / 凹陷两种状态：active 必须切 inset（真实按压手感）","唯一强调色紫 #6a5df9：主按钮 / 开关 ON / 进度 / 当前项","大圆角 16–28px + 宽松留白；动效软而慢（240ms）"],tokens:{colors:[{name:"面板",value:"#e6e8f2"},{name:"亮影",value:"#ffffff"},{name:"暗影",value:"#c3c6d4"},{name:"文字",value:"#3a3d52"},{name:"强调紫",value:"#6a5df9"}],fonts:[{role:"全场",stack:'"Manrope", "PingFang SC", system-ui, sans-serif'}],radius:"16–28px",shadow:"6px 6px 14px #c3c6d4, -6px -6px 14px #ffffff",extras:[{label:"光源",value:"左上 45°"},{label:"凹陷输入",value:"inset 4px 4px 9px"}]},demo:{height:2450,heightMobile:4200,html:da({title:"新拟态 · Neumorphism",fonts:["Manrope:wght@500;700;800"],css:pa(wg)+`
body { font-family: "Manrope", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #e6e8f2; color: #3a3d52; padding: 44px 26px 54px; }
.shell { max-width: 1000px; margin: 0 auto; }
.topbar { display: flex; align-items: center; gap: 15px; }
.logo { width: 40px; height: 40px; border-radius: 14px;
  background: linear-gradient(145deg, #f2f4fb, #d8dbe9); box-shadow: 4px 4px 10px #c8cbdb, -4px -4px 10px #ffffff;
  display: flex; align-items: center; justify-content: center; }
.logo i { width: 16px; height: 16px; border-radius: 50%; background: linear-gradient(145deg, #7a6dff, #5c4fe8); }
.brand { font-weight: 800; font-size: 17px; letter-spacing: .02em; }
.brand small { display: block; font-size: 10px; color: #8a8fa8; letter-spacing: .3em; font-weight: 700; }
.topnav { margin-left: auto; display: flex; gap: 8px; }
.topnav span { font-size: 13px; font-weight: 700; color: #8a8fa8; padding: 9px 16px; border-radius: 12px; cursor: default; transition: all .24s cubic-bezier(.22,1,.36,1); }
.topnav span.on { color: #6a5df9; box-shadow: inset 3px 3px 7px #c8cbdb, inset -3px -3px 7px #ffffff; }
.hero { margin-top: 38px; display: grid; grid-template-columns: 1.1fr .9fr; gap: 26px; align-items: stretch; }
.panel { background: #e6e8f2; border-radius: 26px; padding: 34px 36px;
  box-shadow: 9px 9px 22px #c8cbdb, -9px -9px 22px #ffffff; }
.kicker { font-size: 11px; font-weight: 800; letter-spacing: .3em; color: #8a8fa8; }
.hero h1 { font-size: clamp(30px, 4vw, 44px); line-height: 1.16; font-weight: 800; margin: 13px 0 10px; color: #33364a; }
.hero h1 b { color: #6a5df9; }
.hero p.lead { font-size: 14.5px; line-height: 1.85; color: #6d7290; margin: 0 0 24px; }
.btnrow { display: flex; gap: 14px; flex-wrap: wrap; }
.nbtn { font: inherit; font-weight: 800; font-size: 14px; color: #3a3d52; padding: 12px 26px; border: 0; border-radius: 999px; cursor: pointer;
  background: #e6e8f2; box-shadow: 5px 5px 12px #c8cbdb, -5px -5px 12px #ffffff; transition: all .24s cubic-bezier(.22,1,.36,1); }
.nbtn.pri { color: #fff; background: linear-gradient(145deg, #7a6dff, #5c4fe8); box-shadow: 4px 4px 10px rgba(106,93,249,.35), -3px -3px 8px #ffffff; }
.nbtn:hover { transform: translateY(-2px); }
.nbtn:active { transform: none; box-shadow: inset 4px 4px 9px #c8cbdb, inset -4px -4px 9px #ffffff; }
.nbtn.pri:active { box-shadow: inset 4px 4px 9px rgba(50,38,160,.55); }
.dial { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; }
.knob { width: 150px; height: 150px; border-radius: 50%; position: relative;
  background: linear-gradient(145deg, #f0f2fa, #d6d9e8);
  box-shadow: 8px 8px 18px #c8cbdb, -8px -8px 18px #ffffff, inset 0 0 0 10px #e6e8f2; }
.knob::before { content: ""; position: absolute; left: 50%; top: 12px; width: 5px; height: 26px; border-radius: 3px;
  background: linear-gradient(180deg, #7a6dff, #5c4fe8); transform: translateX(-50%) rotate(28deg); transform-origin: 50% 62px; }
.knob b { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 800; color: #6a5df9; font-variant-numeric: tabular-nums; }
.dial small { font-size: 11.5px; color: #8a8fa8; letter-spacing: .18em; font-weight: 700; }
.chips { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 26px; }
.chip { background: #e6e8f2; border-radius: 20px; padding: 22px; box-shadow: 7px 7px 16px #c8cbdb, -7px -7px 16px #ffffff; transition: transform .24s cubic-bezier(.22,1,.36,1), box-shadow .24s; }
.chip:hover { transform: translateY(-3px); box-shadow: 9px 9px 20px #c3c6d4, -9px -9px 20px #ffffff; }
.chip .sq { width: 34px; height: 34px; border-radius: 12px; margin-bottom: 13px;
  background: #e6e8f2; box-shadow: inset 3px 3px 7px #c8cbdb, inset -3px -3px 7px #ffffff; display: flex; align-items: center; justify-content: center; }
.chip .sq i { width: 12px; height: 12px; border-radius: 4px; background: linear-gradient(145deg, #7a6dff, #5c4fe8); }
.chip b { display: block; font-size: 15px; font-weight: 800; }
.chip span { font-size: 12px; color: #8a8fa8; line-height: 1.6; display: block; margin-top: 5px; }
@media (max-width: 780px) { .hero { grid-template-columns: 1fr; } .chips { grid-template-columns: 1fr; } .topnav { display: none; } }`,body:`
<div class="shell">
  <div class="topbar">
    <span class="logo"><i></i></span>
    <span class="brand">SOFT·PANEL<small>NEUMORPHISM</small></span>
    <nav class="topnav"><span class="on">面板</span><span>场景</span><span>设备</span><span>我的</span></nav>
  </div>
  <div class="hero">
    <div class="panel">
      <span class="kicker">SOFT UI · 2019</span>
      <h1>影子即界面，<br /><b>按压</b>即反馈。</h1>
      <p class="lead">背景与控件同色，没有一条边框线——凸起与凹陷全靠双向柔影。手指按下去的那 0.24 秒，是新拟态全部的诚意的体现。</p>
      <div class="btnrow">
        <button class="nbtn pri">打开面板</button>
        <button class="nbtn">看看场景</button>
      </div>
    </div>
    <div class="panel dial">
      <div class="knob"><b>64°</b></div>
      <small>AMBIENT · 旋钮可拖动</small>
    </div>
  </div>
  <div class="chips">
    <div class="chip"><span class="sq"><i></i></span><b>挤出按钮</b><span>双向柔影把控件从面板里托出来，hover 时托得更高。</span></div>
    <div class="chip"><span class="sq"><i></i></span><b>按进输入框</b><span>输入框永远凹陷着，focus 的一瞬间凹陷加深一圈。</span></div>
    <div class="chip"><span class="sq"><i></i></span><b>紫色只留一处</b><span>开关 ON、进度、当前项——唯一的强调色守着唯一的位置。</span></div>
  </div>
</div>${ua()}`,js:xa()})}},zg={bg:"#f6f1e3",surface:"#f9f5ea",alt:"rgba(0,120,191,0.1)",text:"#211d19",muted:"#7d766a",primary:"#0078bf",onPrimary:"#f6f1e3",border:"#211d19",radius:"2px",radiusLg:"4px",shadow:"4px 4px 0 rgba(255,72,176,0.85)",font:'"Archivo Black","PingFang SC","Microsoft YaHei",sans-serif',mono:'"Space Mono",ui-monospace,monospace',ok:"#0078bf",warn:"#e88b00",err:"#ff48b0",info:"#0078bf",focus:"#ff48b0",extraCss:`
.sc-cell{border-width:1.5px;position:relative;}
.sc-cell::after{content:"";position:absolute;inset:0;border:1.5px solid rgba(255,72,176,.75);border-radius:2px;transform:translate(3px,3px);pointer-events:none;}
.sc-btn{border-radius:2px;border-width:1.5px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;}
.sc-btn.pri{background:#0078bf;color:#f6f1e3;box-shadow:3px 3px 0 rgba(255,72,176,.85);}
.sc-btn.pri:hover{box-shadow:5px 5px 0 rgba(255,72,176,.85);}
.sc-inp,.sc-ta,.sc-sel-btn{border-radius:2px;border-width:1.5px;}
.sc-seg-ind{background:#ff48b0;}
.sc-badge.pri{background:#ff48b0;color:#211d19;}
.sc-prog-fill{background:#ff48b0;}
.sc-modal-box{border-width:1.5px;box-shadow:6px 6px 0 rgba(255,72,176,.8);}`},Eg={id:"risograph",no:"25",name:"孔版印刷",nameEn:"Risograph",tagline:"荧光粉撞打印蓝、套色永远差两毫米——数字时代的油墨颗粒感。",origin:"Riso 印刷机 / 独立出版社海报 / Poster House",year:"2010s 复兴",tags:["双色叠印","荧光色","粗颗粒","错版"],bestFor:["演出 / 展览海报页","独立品牌与 zine 商店","活动宣传页"],avoid:["后台系统","数据密集页","需要大面积正文的阅读页"],prompt:`# 设计范式：孔版印刷（Risograph）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：独立出版社的 riso 海报——两种专色油墨（荧光粉 + 打印蓝）叠印在牛皮纸上，套色永远差两毫米，颗粒肉眼可见
- 情绪关键词：手工、油墨、颗粒、错版、限量
- 「不完美」是刻意的：对位标记 ✚ 露出来、色块边缘有毛边、错版是签名而不是 bug

## 2. 布局
- 纸张思维：整页是一张纸（#f6f1e3），四角放对位十字标记 ✚，边缘留 5% 出血感
- 版面不对称：大标题斜置或越界出血，信息块像贴上去的色纸
- 双色纪律：粉与蓝各自独立成块，重叠处允许多 6% 混合色（multiply 感）
- 颗粒层：全局覆盖一层 8% 透明度的噪点（feTurbulence 或点阵背景）

## 3. 字体排印
- 字体：Archivo Black 类超粗怪诞体做标题（可描边空心），Space Mono 做说明文字
- 层级：H1 60-110px 可双色错位（粉版偏移 3px）；正文 13-14px 等宽
- 大写为主，字距可紧可爆（标题 -0.01em、小标签 0.2em）

## 4. 色彩
- 纸 #f6f1e3；蓝 #0078bf；荧光粉 #ff48b0；墨 #211d19 只用于文字与 1.5px 细线
- 只有两个专色 + 纸色，禁止第三种色相、禁止渐变、禁止纯黑大面积
- 叠印处呈现深紫（蓝粉 multiply），这是唯一允许的「第三色」

## 5. 组件与交互规范
${zl(`- 签名组件：错版效果——每个色块都带一份偏移 3px 的异色描边副本（::after 平移实现），像套版没对准
- 按钮：色块直角（2px）+ 1.5px 墨边；hover 时错版偏移从 3px 拉大到 5px（油墨滑开）；active 对位归零
- 输入框：白纸底 + 1.5px 墨框直角；focus 时粉色副本层偏移出现；错误态换粉框
- 下拉框浮层：实色纸片 + 粉色错版阴影 4px；选项 hover 铺蓝 10%
- 开关：色块在双色轨道上滑动，ON 时蓝块滑向粉区
- 徽章：印章式实色小块，可做半调网点（radial-gradient 点阵）填充
- 表格：1.5px 墨线全框 + 等宽字体 + 行 hover 蓝 10%
- 图标：实色几何形 + 错版副本；严禁 emoji、严禁柔和阴影
- 骨架屏：网点色块两帧明灭（禁渐变扫光）`,{hover:"套色错位从 3px 拉大到 5px（油墨滑开的手感），伴随 0.16s 位移",active:"错位归零对位精确（像压印机压下去）",focus:"2px 蓝色实线框外扩 3px",toast:"右下角纸片 + 粉色错版阴影，硬切进入 0.14s，3s 后连纸带影一起移出，最多 3 条",dur:"160ms（印刷机节奏：干脆、无弹跳、无缓出拖尾）"})}

## 6. 质感细节
- 颗粒：全局 8% 噪点层 + 色块内部可加半调网点（radial-gradient 3px 点阵，透明度 ≤ 15%）
- 纸感：色块边缘可用 1px 不规则透明度模拟油墨渗透
- 对位标记 ✚ 与「RISO ▪ 2C」等印刷注记可出现在角落

## 7. 禁忌
- 禁止第三种色相、渐变、玻璃、纯黑大色块、emoji 图标
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["双色专色纪律：荧光粉 #ff48b0 × 打印蓝 #0078bf，叠印深紫是唯一第三色","签名错版：色块带偏移 3px 的异色描边副本，hover 拉大到 5px","全局 8% 颗粒 + 对位十字 ✚ + 半调网点填充","直角 2px + 1.5px 墨线，等宽说明字，动效 160ms 印刷机节奏"],tokens:{colors:[{name:"纸",value:"#f6f1e3"},{name:"打印蓝",value:"#0078bf"},{name:"荧光粉",value:"#ff48b0"},{name:"墨",value:"#211d19"},{name:"叠印紫",value:"multiply 混合"}],fonts:[{role:"标题",stack:'"Archivo Black", "PingFang SC", sans-serif'},{role:"说明",stack:'"Space Mono", monospace'}],radius:"2px",shadow:"4px 4px 0 rgba(255,72,176,.85)（错版色影）",extras:[{label:"颗粒",value:"全局 8% 噪点"},{label:"对位标记",value:"四角 ✚"}]},demo:{height:2450,heightMobile:4200,html:da({title:"孔版印刷 · Risograph",fonts:["Archivo+Black","Space+Mono:wght@400;700"],css:pa(zg)+`
body {
  font-family: "Archivo Black", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #f6f1e3; color: #211d19; padding: 40px 26px 52px;
  position: relative;
}
body::before { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 40;
  background-image: radial-gradient(rgba(33,29,25,.14) 1px, transparent 1px);
  background-size: 4px 4px; opacity: .35; mix-blend-mode: multiply; }
.reg { position: absolute; color: #211d19; font-family: "Space Mono", monospace; font-size: 15px; }
.reg.tl { top: 14px; left: 16px; } .reg.tr { top: 14px; right: 16px; }
.reg.bl { bottom: 14px; left: 16px; } .reg.br { bottom: 14px; right: 16px; }
.sheet { max-width: 1060px; margin: 0 auto; }
.masthead { display: flex; align-items: center; gap: 14px; border-bottom: 1.5px solid #211d19; padding-bottom: 12px; }
.stamp { font-family: "Space Mono", monospace; font-size: 11px; border: 1.5px solid #211d19; padding: 3px 9px; }
.masthead .title { font-size: 17px; letter-spacing: .04em; }
.masthead .no2 { margin-left: auto; font-family: "Space Mono", monospace; font-size: 12px; color: #ff48b0; }
.poster { position: relative; margin-top: 36px; padding: 52px 46px 60px; overflow: hidden; }
.big { font-size: clamp(52px, 8vw, 104px); line-height: .95; text-transform: uppercase; letter-spacing: -.01em; position: relative; z-index: 2; }
.big .blue { color: #0078bf; display: inline-block; }
.big .pink { color: transparent; -webkit-text-stroke: 2.5px #ff48b0; display: inline-block; }
.big .offset { position: absolute; left: 4px; top: 4px; color: #ff48b0; opacity: .55; z-index: -1; }
.sub { font-family: "Space Mono", monospace; font-size: 13px; line-height: 1.8; max-width: 460px; margin: 22px 0 26px; }
.swatches { position: absolute; right: 34px; top: 46px; display: flex; gap: 10px; }
.sw { width: 58px; height: 88px; position: relative; }
.sw b { position: absolute; left: 0; bottom: -20px; font-family: "Space Mono", monospace; font-size: 9.5px; letter-spacing: .04em; }
.sw.blue { background: #0078bf; } .sw.pink { background: #ff48b0; }
.sw.blue::after { content: ""; position: absolute; inset: 0; border: 1.5px solid #ff48b0; transform: translate(4px, 4px); }
.sw.pink::after { content: ""; position: absolute; inset: 0; border: 1.5px solid #0078bf; transform: translate(-4px, 4px); }
.halftone { position: absolute; left: 40px; bottom: 30px; width: 150px; height: 92px;
  background-image: radial-gradient(#0078bf 1.6px, transparent 1.6px); background-size: 9px 9px; opacity: .8; }
.halftone.p { background-image: radial-gradient(#ff48b0 1.6px, transparent 1.6px); left: 190px; opacity: .6; }
.bar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 40px; }
.item { border: 1.5px solid #211d19; background: #f9f5ea; padding: 20px 20px 18px; position: relative; }
.item::after { content: ""; position: absolute; inset: 0; border: 1.5px solid rgba(255,72,176,.7); transform: translate(3px,3px); pointer-events: none; }
.item .k { font-family: "Space Mono", monospace; font-size: 10.5px; letter-spacing: .18em; color: #0078bf; }
.item h3 { font-size: 19px; margin: 8px 0 8px; text-transform: uppercase; }
.item p { font-family: "Space Mono", monospace; font-size: 12px; line-height: 1.75; margin: 0; color: #4a4438; }
.item .dot { position: absolute; top: 14px; right: 14px; width: 14px; height: 14px; border-radius: 50%; background: #ff48b0; }
.item:nth-child(2) .dot { background: #0078bf; }
@media (max-width: 780px) { .bar { grid-template-columns: 1fr; } .swatches { display: none; } .halftone { display: none; } }`,body:`
<span class="reg tl">✚</span><span class="reg tr">✚</span><span class="reg bl">✚</span><span class="reg br">✚</span>
<div class="sheet">
  <div class="masthead">
    <span class="stamp">RISO ▪ 2C</span>
    <span class="title">MISPRINT CLUB · 套色俱乐部</span>
    <span class="no2">EDITION 25 / 100</span>
  </div>
  <div class="poster">
    <h1 class="big">
      <span class="blue">TWO</span>
      <span class="pink">COLORS<span class="offset" aria-hidden="true">COLORS</span></span><br />
      ONE&nbsp;PAPER
    </h1>
    <p class="sub">两种专色，一张纸。油墨不注册、颗粒不修图——错版 3px 是我们的签名。每张海报都编号，绝版不补。</p>
    <div class="swatches">
      <div class="sw blue"><b>PANTONE 806U → #ff48b0</b></div>
      <div class="sw pink"><b>FED BLUE → #0078bf</b></div>
    </div>
    <div class="halftone"></div><div class="halftone p"></div>
  </div>
  <div class="bar">
    <div class="item"><span class="dot"></span><div class="k">SPEC 01</div><h3>错版</h3><p>粉版永远比蓝版偏右下 3px——hover 时油墨滑开到 5px。</p></div>
    <div class="item"><span class="dot"></span><div class="k">SPEC 02</div><h3>网点</h3><p>半调网点代替渐变：9px 一格，两种大小，绝不做平滑过渡。</p></div>
    <div class="item"><span class="dot"></span><div class="k">SPEC 03</div><h3>对位</h3><p>四角 ✚ 对位标记与版号 ED 25/100 露在成品上，工艺即装饰。</p></div>
  </div>
</div>${ua()}`,js:xa()})}},Tg={bg:"#efe4c8",surface:"#f3ead2",alt:"rgba(42,33,24,0.07)",text:"#2a2118",muted:"#8a7a5c",primary:"#a02c2c",onPrimary:"#f3ead2",border:"rgba(42,33,24,0.5)",radius:"0px",radiusLg:"0px",shadow:"0 2px 8px rgba(42,33,24,0.18)",font:'"EB Garamond","Noto Serif SC","Songti SC",serif',mono:'"EB Garamond",Georgia,serif',ok:"#5c6e3a",warn:"#b8892f",err:"#a02c2c",info:"#24365e",focus:"#b8892f",extraCss:`
.sc-root{border:2px solid #b8892f;}
.sc-cell{border:1px solid rgba(184,137,47,.65);border-radius:0;}
.sc-cell h5{font-variant:small-caps;letter-spacing:.12em;color:#b8892f;}
.sc-btn{border-radius:0;border:1px solid #b8892f;font-variant:small-caps;letter-spacing:.08em;}
.sc-btn.pri{background:#a02c2c;border-color:#a02c2c;color:#f3ead2;}
.sc-inp,.sc-ta,.sc-sel-btn{border-radius:0;border:1px solid rgba(42,33,24,.5);}
.sc-seg,.sc-sel-list,.sc-menu-list,.sc-sug,.sc-modal-box,.sc-alert,.sc-toast{border-radius:0;}
.sc-badge,.sc-tag{border-radius:0;}
.sc-step .no,.sc-ava,.sc-ava .dot{border-radius:0;}
.sc-tbl th{font-variant:small-caps;letter-spacing:.1em;color:#a02c2c;}`},kg={id:"gothic-manuscript",no:"26",name:"哥特手抄本",nameEn:"Gothic Manuscript",tagline:"黑体字、泥金首字母、朱砂批注——界面是一页被抄写员装饰过的羊皮纸。",origin:"泥金装饰手抄本 /《凯尔经》/ 古腾堡四十二行圣经",year:"12 — 15 世纪",tags:["黑体字","泥金","羊皮纸","花体首字"],bestFor:["酒庄 / 博物馆 / 图书馆","奇幻游戏官网","婚礼请柬与邀请函"],avoid:["SaaS 工具","数据密集页","极简品牌"],prompt:`# 设计范式：哥特手抄本（Gothic Manuscript）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：中世纪修道院抄写房——羊皮纸、黑体字（Textualis）、泥金首字母、朱砂批注、金箔与常春藤角饰
- 情绪关键词：神圣、手抄、典藏、烛光、仪式感
- 一切装饰都围绕「文字是圣物」：字比图重要，框比留白重要

## 2. 布局
- 单栏手抄页：正文栏宽 58-66ch，四周 2px 金线框 + 四角常春藤角饰（SVG）
- 首字母 illumination：每章首字母 3-4 行高、金底 + 朱砂/深蓝藤蔓框
- 页边批注：朱砂色小字批注悬在正文外侧（margin notes）
- 分栏可用 1px 金细线，绝不用投影分块

## 3. 字体排印
- 字体：Grenze Gotisch / UnifrakturMaguntia 类黑体字做标题与小标题；EB Garamond 类人文衬线做正文；中文用宋体族
- 首字下沉 3 行、金底红框；小标题用 small-caps（小型大写）
- 行高 1.9-2.0，段首两字朱砂

## 4. 色彩
- 羊皮纸 #f0e6cc（可加纤维噪点 ≤ 4%）；墨 #2a2118；泥金 #b8892f；朱砂 #a02c2c；深蓝 #24365e
- 金色用于线框与首字底，朱砂只做批注与强调，深蓝做次级块
- 禁止现代亮色、禁止渐变（金箔质感用「金底 + 1px 深金内框」表达）

## 5. 组件与交互规范
${zl(`- 签名组件：泥金首字（3-4 行高、金底 + 朱砂藤蔓框）与朱砂批注（页边斜体小字）
- 按钮：无圆角、1px 金框 + small-caps 字距 0.08em；hover 时金框加粗为 2px 并填深蓝转金字；active 内凹 1px
- 输入框：羊皮纸书写线（1px 墨线 + 下方虚线金点），focus 时线变朱砂；错误态朱砂线 + 斜体批注
- 下拉框浮层：直角、1px 金框、羊皮纸底，选项 hover 铺 6% 金；选中项左侧小型藤蔓符 ❦
- 开关：金线轨道 + 蜡封圆钮（深红渐变球），ON 时钮变金
- 分段控制：由竖金线分隔的 small-caps 文字组，当前项朱砂下划线
- 模态框：直角 + 2px 金双线框 + 四角藤饰；遮罩 rgba(30,22,12,.5)
- 表格：1px 金细线、small-caps 朱砂表头、行 hover 6% 金
- 图标：细线藤蔓 / 十字 / 星芒 SVG（1px 金或墨）
- 骨架屏：淡金块 1.6s 呼吸，如烛光摇曳`,{hover:"金框 1px → 2px 加粗并填深蓝转金字，0.4s，像烛光下金箔忽然反光",active:"内凹 1px 且金色转暗金",focus:"1.5px 金色细框 + 3px 淡金外扩",toast:"右下角羊皮纸小条（1px 金框），从下 12px 缓缓浮入 0.5s，停留 4s，最多 3 条",dur:"400ms（手抄本的一切都慢：抄写、晕金、翻页）"})}

## 6. 质感细节
- 羊皮纸纹理：纤维噪点 ≤ 4% + 边缘轻微变深（径向渐变暗角，透明度 ≤ 6%）
- 金箔质感 = 金底 + 1px 深金(#8a6520) 内框 + 微弱对角高光（白 6%）
- 角饰：四角常春藤 SVG（1px 金线），旋转对称

## 7. 禁忌
- 禁止无衬线正文、禁止圆角卡片、禁止霓虹色、禁止 emoji
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["单栏手抄页 + 2px 金线框 + 四角常春藤角饰，栏宽 58-66ch","泥金首字 3-4 行高（金底 + 朱砂藤蔓框），页边朱砂批注","黑体字标题 + small-caps 小标题 + 人文衬线正文，行高 2.0","羊皮纸 #f0e6cc × 泥金 #b8892f × 朱砂 #a02c2c，动效 400ms 烛光节奏"],tokens:{colors:[{name:"羊皮纸",value:"#f0e6cc"},{name:"墨",value:"#2a2118"},{name:"泥金",value:"#b8892f"},{name:"朱砂",value:"#a02c2c"},{name:"深蓝",value:"#24365e"}],fonts:[{role:"标题",stack:'"Grenze Gotisch", "Noto Serif SC", serif'},{role:"正文",stack:'"EB Garamond", "Noto Serif SC", serif'}],radius:"0（全直角）",shadow:"0 2px 8px rgba(42,33,24,.18)",extras:[{label:"金箔质感",value:"金底 + 1px 深金内框"},{label:"首字",value:"3-4 行高 illumination"}]},demo:{height:2450,heightMobile:4200,html:da({title:"哥特手抄本 · Gothic Manuscript",fonts:["Grenze+Gotisch:wght@500;700","EB+Garamond:ital,wght@0,400;0,600;1,400","Noto+Serif+SC:wght@400;700"],css:pa(Tg)+`
body {
  font-family: "EB Garamond", "Noto Serif SC", "Songti SC", serif;
  background: #e7d9b8; color: #2a2118; padding: 44px 26px 56px;
  background-image: radial-gradient(rgba(42,33,24,.05) 1px, transparent 1px);
  background-size: 3px 3px;
}
.page {
  max-width: 860px; margin: 0 auto; background: #f0e6cc; position: relative;
  border: 2px solid #b8892f; outline: 1px solid rgba(184,137,47,.5); outline-offset: 5px;
  padding: 52px 62px 58px; box-shadow: 0 3px 18px rgba(42,33,24,.22);
}
.page::before { content: ""; position: absolute; inset: 10px; border: 1px solid rgba(184,137,47,.55); pointer-events: none; }
.corner { position: absolute; color: #b8892f; font-size: 22px; line-height: 1; }
.corner.tl { top: 16px; left: 18px; } .corner.tr { top: 16px; right: 18px; }
.corner.bl { bottom: 16px; left: 18px; } .corner.br { bottom: 16px; right: 18px; }
.rubric { text-align: center; font-variant: small-caps; letter-spacing: .3em; font-size: 13px; color: #a02c2c; }
.rule { display: flex; align-items: center; gap: 12px; margin: 14px 0 30px; color: #b8892f; }
.rule::before, .rule::after { content: ""; flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #b8892f); }
.rule::after { background: linear-gradient(90deg, #b8892f, transparent); }
h1.goth {
  font-family: "Grenze Gotisch", "Noto Serif SC", serif;
  font-size: clamp(40px, 5.6vw, 64px); font-weight: 700; line-height: 1.05;
  text-align: center; margin: 0 0 6px; color: #2a2118;
}
h1.goth em { font-style: normal; color: #a02c2c; }
.latin { text-align: center; font-style: italic; color: #8a7a5c; font-size: 14px; letter-spacing: .12em; }
.illum { float: left; width: 108px; height: 128px; margin: 8px 18px 4px 0;
  background: linear-gradient(135deg, #c99b3f, #b8892f 55%, #8a6520);
  border: 1px solid #8a6520; outline: 1px solid rgba(184,137,47,.5); outline-offset: 3px;
  display: flex; align-items: center; justify-content: center;
  font-family: "Grenze Gotisch", serif; font-size: 74px; color: #2a2118;
  text-shadow: 0 1px 0 rgba(255,244,214,.5); position: relative; }
.illum::after { content: ""; position: absolute; inset: 4px; border: 1px solid rgba(160,44,44,.8); }
.illu-cap::first-letter { color: #2a2118; }
.chapter { font-size: 15.5px; line-height: 2.05; text-align: justify; }
.chapter p + p { margin-top: 14px; }
.chapter .lead::first-letter { font-family: "Grenze Gotisch", serif; font-size: 46px; color: #a02c2c; }
.margin-note { float: right; width: 128px; margin: 4px -78px 10px 16px; font-style: italic;
  font-size: 11.5px; line-height: 1.8; color: #a02c2c; border-left: 1px solid rgba(160,44,44,.5); padding-left: 8px; }
.versal { display: flex; gap: 18px; margin-top: 34px; border-top: 1px solid rgba(184,137,47,.6); padding-top: 24px; }
.v { flex: 1; text-align: center; font-variant: small-caps; letter-spacing: .14em; font-size: 13px; color: #24365e; }
.v b { display: block; font-family: "Grenze Gotisch", serif; font-size: 26px; color: #b8892f; letter-spacing: 0; margin-bottom: 4px; }
@media (max-width: 900px) { .margin-note { display: none; } .page { padding: 36px 26px 44px; } .versal { flex-direction: column; gap: 10px; } }`,body:`
<div class="page">
  <span class="corner tl">❦</span><span class="corner tr">❦</span><span class="corner bl">❦</span><span class="corner br">❦</span>
  <div class="rubric">· Codex · 範 式 展 示 館 藏 本 ·</div>
  <div class="rule">✦</div>
  <h1 class="goth">Gothic <em>Scriptorium</em></h1>
  <div class="latin">— Here endeth the first lesson —</div>
  <div class="chapter" style="margin-top: 30px">
    <div class="illum illu-cap">G</div>
    <p class="lead">old letters wait in the dark for a candle. 每一页手抄本都是一次漫长的誊写：墨迹未干之前，抄写员不敢呼吸；金箔贴下之后，整页纸便有了自己的光。</p>
    <p>界面的网格是现代人的发明，而中世纪的抄写员只相信一条基线——文字的基线。栏宽五十八至六十六字，行距两倍，首字母被藤蔓与金箔加冕。<span class="rubric" style="letter-spacing:.1em">〔抄注：此段为范式说明〕</span></p>
    <div class="margin-note">页边批注（margin note）：朱砂小字，斜体，悬在正文之外——像今天的 aside。</div>
    <p>按钮是蜡封与金线的后裔：金框收拢着 small-caps 的字，悬停时如烛光掠过金箔。没有阴影的层次，只有线的层次——外框一道，内框一道，中间隔五像素的呼吸。</p>
  </div>
  <div class="versal">
    <div class="v"><b>I</b>泥金首字</div>
    <div class="v"><b>II</b>朱砂批注</div>
    <div class="v"><b>III</b>金线双框</div>
    <div class="v"><b>IV</b>常春藤角饰</div>
  </div>
</div>${ua()}`,js:xa()})}},Ng={bg:"#fff7fa",surface:"#ffffff",alt:"rgba(255,158,199,0.14)",text:"#7a6474",muted:"#b9a7b4",primary:"#ff9ec7",onPrimary:"#ffffff",border:"rgba(255,158,199,0.5)",radius:"22px",radiusLg:"28px",shadow:"0 6px 18px rgba(255,158,199,0.28)",font:'"Baloo 2","ZCOOL KuaiLe","PingFang SC",sans-serif',mono:'"Baloo 2",ui-monospace,monospace',ok:"#7ed6a5",warn:"#ffc95e",err:"#ff8f8f",info:"#9ccbf5",focus:"#ff9ec7",extraCss:`
.sc-root{background-image:radial-gradient(rgba(255,158,199,.14) 2.2px, transparent 2.2px);background-size:22px 22px;}
.sc-cell{border:2px solid rgba(255,158,199,.4);border-radius:24px;box-shadow:0 6px 14px rgba(255,158,199,.18);}
.sc-cell h5{color:#ff9ec7;font-size:12px;letter-spacing:.1em;}
.sc-btn{border-radius:999px;border-width:2px;font-weight:700;}
.sc-btn.pri{background:linear-gradient(180deg,#ffb3d2,#ff8dbe);}
.sc-btn:hover{transform:translateY(-3px) rotate(-1deg);}
.sc-inp,.sc-ta,.sc-sel-btn{border-radius:18px;border-width:2px;}
.sc-seg-ind{background:#ffb3d2;}
.sc-badge,.sc-tag,.sc-pg-b,.sc-step .no{border-radius:999px;}
.sc-prog{background:rgba(255,158,199,.25);}
.sc-prog-fill{background:linear-gradient(90deg,#ffb3d2,#ff8dbe);}
.sc-sw input:checked + .tr{background:linear-gradient(180deg,#ffb3d2,#ff8dbe);}
.sc-modal-box{border-radius:28px;border-width:2px;}`},Cg={id:"kawaii",no:"27",name:"软萌糖果",nameEn:"Kawaii Pastel",tagline:"马卡龙色、腮红按钮、会眨眼的吉祥物——每个控件都想被捏一下。",origin:"日系可爱文化 / Sanrio / LINE 好友贴图",year:"1970s —",tags:["马卡龙色","圆滚滚","腮红","弹跳"],bestFor:["儿童 / 宠物 / 甜品品牌","社交 App 活动页","周边商店"],avoid:["严肃金融","企业后台","极简性冷淡品牌"],prompt:`# 设计范式：软萌糖果（Kawaii Pastel）

按此范式实现 UI，不得混用其他风格。

## 1. 设计基调
- 气质：日系可爱文化——马卡龙色、圆滚滚的形状、带腮红的吉祥物、贴纸与对话气泡
- 情绪关键词：软、甜、弹、无害、想捏
- 万物有脸：吉祥物要会眨眼，按钮可以有腮红，空态要在打瞌睡

## 2. 布局
- 圆的世界：容器圆角 20-28px 起，按钮/开关/头像全胶囊化；角是圆的，连 hover 位移都带 1° 的歪头感
- 点阵糖果底：背景铺 2px 圆点阵（粉 14%），或云朵/糖果散点
- 贴纸层：白粗边（3px）+ 轻投影 + ±2° 旋转的贴纸卡片，像贴在手账上
- 吉祥物位：页面需要一个 blob 形主角（CSS 圆 + 眼睛 + 腮红），会眨眼（3-4s 循环）

## 3. 字体排印
- 字体：Baloo 2 / M PLUS Rounded 类圆体；中文用站酷快乐体类圆体
- H1 34-46px / 700，可带白色 text-shadow 描边（软糖浮雕感）；正文 14px / 1.9
- 语气软萌：文案用短句 + 语气词，但信息结构不能软（层级照常清晰）

## 4. 色彩
- 奶油底 #fff7fa；樱粉 #ff9ec7 主色；薄荷 #a8e6cf；柠檬 #ffe08a；天蓝 #a8d8ff；文字 #7a6474（禁止纯黑）
- 同屏最多 3 个糖果色 + 白；饱和度中高但明度必须高
- 描边纪律：贴纸与卡片用色相的 2px 淡描边，不用黑边（黑边会变成孟菲斯）

## 5. 组件与交互规范
${zl(`- 签名组件：腮红按钮（主按钮下缘两侧两个 6px 粉色半透明圆当腮红）与气泡对话 tooltip
- 按钮：胶囊 999px + 2px 同色系淡边；hover 歪头 -1° + 上浮 3px（cubic-bezier(.34,1.56,.64,1)）；active 压扁 scale(.96,.94)
- 输入框：radius 18px + 2px 淡粉边；focus 边框变实粉 + 3px 15% 光环；placeholder 带波浪号～
- 下拉框浮层：圆角 20px 白卡 + 粉色 2px 边 + 小尾巴（伪元素三角），像对话气泡
- 开关：胶囊轨道 ON 时樱粉渐变，圆钮上有一颗高光点；切换带弹性
- 表格：行高 46px+、行线 10% 粉、hover 行淡粉底；空态画打瞌睡的 blob
- 加载：blob 弹跳 loading（三个圆点依次弹跳 0.9s）
- 图标：圆润填充形（2px 圆角端点）；允许极少量 emoji（本范式例外）`,{hover:"歪头 -1° + 上浮 3px + 腮红变明显，弹性回弹 cubic-bezier(.34,1.56,.64,1)",active:"压扁 scale(.96,.94)（像被捏了一下）",focus:"2px 樱粉描边 + 3px 15% 外扩",toast:"右下角圆角 22px 白卡 + 粉边，弹跳进入并歪 1°，3s 后缩小淡出，最多 3 条",dur:"280ms（一切动效都带弹性；眨眼循环 3.5s）"})}

## 6. 质感细节
- 软糖高光：按钮/卡片顶部 1px 白色内高光 + 底部淡粉外影
- 云朵圆角：主视觉用 2-3 个叠加的大圆拼成 blob，绝不用规则圆
- 表情系统：blob 的眼睛用两颗 4px 圆，眨眼 = scaleY(0.1) 120ms

## 7. 禁忌
- 禁止纯黑文字与黑描边、禁止直角、禁止锐利阴影（必须带颜色）
- 严禁「只换色不改形」：蒙住 logo 也要能认出本范式——按钮、输入框、开关、下拉浮层必须有形制级差异，而不是通用控件换主题色`,spec:["马卡龙四色：樱粉 #ff9ec7 主 + 薄荷/柠檬/天蓝点缀，文字 #7a6474 禁纯黑","腮红按钮 + 气泡下拉（带小尾巴）+ 会眨眼的 blob 吉祥物","贴纸卡片：白底 2px 淡边 + 3px 白粗边贴纸 + ±2° 旋转","点阵糖果底；动效全弹性 280ms（回弹系数 1.56）"],tokens:{colors:[{name:"奶油",value:"#fff7fa"},{name:"樱粉",value:"#ff9ec7"},{name:"薄荷",value:"#a8e6cf"},{name:"柠檬",value:"#ffe08a"},{name:"天蓝",value:"#a8d8ff"}],fonts:[{role:"全场",stack:'"Baloo 2", "ZCOOL KuaiLe", "PingFang SC", sans-serif'}],radius:"18–28px（按钮 999px）",shadow:"0 6px 18px rgba(255,158,199,.28)（彩色柔影）",extras:[{label:"腮红",value:"6px 半透明粉圆 ×2"},{label:"眨眼",value:"scaleY(.1) 120ms / 3.5s"}]},demo:{height:2450,heightMobile:4200,html:da({title:"软萌糖果 · Kawaii Pastel",fonts:["Baloo+2:wght@500;700;800","ZCOOL+KuaiLe"],css:pa(Ng)+`
body {
  font-family: "Baloo 2", "ZCOOL KuaiLe", "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #7a6474; padding: 40px 26px 52px;
  background: #fff7fa;
  background-image: radial-gradient(rgba(255,158,199,.16) 2.2px, transparent 2.2px);
  background-size: 24px 24px;
}
.shell { max-width: 1000px; margin: 0 auto; }
.top { display: flex; align-items: center; gap: 13px; }
.mascot { width: 52px; height: 48px; border-radius: 50% 50% 46% 46%; background: #fff;
  border: 2px solid rgba(255,158,199,.65); position: relative; box-shadow: 0 4px 10px rgba(255,158,199,.3); }
.mascot .eye { position: absolute; top: 17px; width: 5px; height: 5px; border-radius: 50%; background: #7a6474;
  animation: blink 3.5s infinite; }
.mascot .eye.l { left: 13px; } .mascot .eye.r { right: 13px; }
.mascot .cheek { position: absolute; top: 26px; width: 8px; height: 5px; border-radius: 50%; background: rgba(255,143,190,.55); }
.mascot .cheek.l { left: 7px; } .mascot .cheek.r { right: 7px; }
.mascot .mouth { position: absolute; left: 50%; top: 26px; width: 7px; height: 4px; margin-left: -3.5px;
  border: 1.6px solid #7a6474; border-top: 0; border-radius: 0 0 8px 8px; }
@keyframes blink { 0%, 91%, 100% { transform: scaleY(1); } 94% { transform: scaleY(.1); } 97% { transform: scaleY(1); } }
@media (prefers-reduced-motion: reduce) { .mascot .eye { animation: none; } }
.brand b { font-size: 18px; display: block; line-height: 1.1; }
.brand small { font-size: 11px; color: #b9a7b4; letter-spacing: .16em; }
.nav { margin-left: auto; display: flex; gap: 8px; }
.nav span { font-size: 13px; font-weight: 700; padding: 7px 15px; border-radius: 999px; color: #a08d9c;
  background: rgba(255,255,255,.8); border: 2px solid transparent; }
.nav span.on { color: #ff8dbe; border-color: rgba(255,158,199,.6); background: #fff; }
.hero { display: grid; grid-template-columns: 1.05fr .95fr; gap: 34px; align-items: center; margin-top: 34px; }
.bubble { display: inline-block; background: #fff; border: 2px solid rgba(255,158,199,.6); border-radius: 20px 20px 20px 6px;
  padding: 8px 16px; font-size: 13px; font-weight: 700; color: #ff8dbe; box-shadow: 0 4px 10px rgba(255,158,199,.22); }
.hero h1 { font-size: clamp(34px, 4.6vw, 50px); line-height: 1.2; margin: 14px 0 10px; font-weight: 800;
  text-shadow: 0 2px 0 #fff, 0 4px 0 rgba(255,158,199,.35); }
.hero h1 b { color: #ff8dbe; }
.hero p.lead { font-size: 15px; line-height: 1.95; margin: 0 0 24px; }
.btnrow { display: flex; gap: 13px; flex-wrap: wrap; }
.cbtn { position: relative; font: inherit; font-weight: 800; font-size: 15px; color: #fff; padding: 13px 30px;
  border: 2px solid rgba(255,143,190,.7); border-radius: 999px; cursor: pointer;
  background: linear-gradient(180deg, #ffb3d2, #ff8dbe); box-shadow: inset 0 2px 0 rgba(255,255,255,.6), 0 6px 14px rgba(255,143,190,.4);
  transition: all .28s cubic-bezier(.34,1.56,.64,1); }
.cbtn::before, .cbtn::after { content: ""; position: absolute; bottom: 9px; width: 7px; height: 5px;
  border-radius: 50%; background: rgba(255,255,255,.5); }
.cbtn::before { left: 14px; } .cbtn::after { right: 14px; }
.cbtn.ghost { background: #fff; color: #ff8dbe; box-shadow: 0 4px 10px rgba(255,158,199,.25); }
.cbtn:hover { transform: translateY(-3px) rotate(-1deg); }
.cbtn:active { transform: scale(.96, .94); }
.blobbox { display: flex; justify-content: center; position: relative; }
.blob { width: 190px; height: 175px; background: #fff; border: 2px solid rgba(255,158,199,.65);
  border-radius: 48% 52% 55% 45% / 52% 46% 54% 48%; position: relative;
  box-shadow: inset 0 -8px 0 rgba(255,158,199,.18), 0 12px 26px rgba(255,158,199,.3); }
.blob::before { content: ""; position: absolute; top: 14px; left: 26px; width: 42px; height: 26px;
  background: #a8e6cf; border-radius: 50% 50% 60% 40%; transform: rotate(-14deg); opacity: .8; }
.blob .eye { position: absolute; top: 74px; width: 12px; height: 12px; border-radius: 50%; background: #7a6474;
  animation: blink 3.5s infinite; }
.blob .eye.l { left: 56px; } .blob .eye.r { right: 56px; }
.blob .cheek { position: absolute; top: 96px; width: 20px; height: 12px; border-radius: 50%; background: rgba(255,143,190,.5); }
.blob .cheek.l { left: 34px; } .blob .cheek.r { right: 34px; }
.blob .mouth { position: absolute; left: 50%; top: 98px; width: 16px; height: 9px; margin-left: -8px;
  border: 2.4px solid #7a6474; border-top: 0; border-radius: 0 0 14px 14px; }
.blob .zig { position: absolute; bottom: -16px; left: 50%; transform: translateX(-50%);
  background: #ffe08a; border: 2px solid rgba(255,158,199,.6); border-radius: 999px;
  font-size: 11.5px; font-weight: 800; color: #8a7346; padding: 4px 14px; white-space: nowrap; }
.stickers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 40px; }
.st { background: #fff; border: 2px solid rgba(255,158,199,.45); border-radius: 22px; padding: 22px 20px;
  box-shadow: 0 6px 14px rgba(255,158,199,.18); position: relative; transition: all .28s cubic-bezier(.34,1.56,.64,1); }
.st:nth-child(1) { transform: rotate(-1.6deg); } .st:nth-child(2) { transform: rotate(1deg); } .st:nth-child(3) { transform: rotate(-.8deg); }
.st:hover { transform: translateY(-5px) rotate(0); box-shadow: 0 12px 22px rgba(255,158,199,.3); }
.st .tape { position: absolute; top: -9px; left: 50%; transform: translateX(-50%) rotate(-3deg);
  width: 58px; height: 17px; background: rgba(255,224,138,.75); border-radius: 3px; }
.st b { font-size: 15.5px; display: block; margin: 8px 0 5px; }
.st p { font-size: 12.5px; line-height: 1.8; margin: 0; color: #a08d9c; }
.st .face { width: 34px; height: 30px; border-radius: 50% 50% 46% 46%; background: linear-gradient(180deg, #a8e6cf, #8bd8b4); position: relative; }
.st:nth-child(2) .face { background: linear-gradient(180deg, #a8d8ff, #8cc4f0); }
.st:nth-child(3) .face { background: linear-gradient(180deg, #ffe08a, #ffd45e); }
.st .face::before, .st .face::after { content: ""; position: absolute; top: 12px; width: 4px; height: 4px;
  border-radius: 50%; background: #7a6474; }
.st .face::before { left: 10px; } .st .face::after { right: 10px; }
@media (max-width: 800px) { .hero { grid-template-columns: 1fr; } .stickers { grid-template-columns: 1fr; } .nav { display: none; } }`,body:`
<div class="shell">
  <div class="top">
    <div class="mascot"><span class="eye l"></span><span class="eye r"></span><span class="cheek l"></span><span class="cheek r"></span><span class="mouth"></span></div>
    <div class="brand"><b>捏捏研究所</b><small>KAWAII LAB · No.27</small></div>
    <nav class="nav"><span class="on">首页</span><span>贴纸</span><span>吉祥物</span><span>捏我</span></nav>
  </div>
  <div class="hero">
    <div>
      <span class="bubble">今天也要圆圆的哦～</span>
      <h1>所有控件，<br />都想被<b>捏一下</b></h1>
      <p class="lead">按钮带腮红，开关会弹跳，下拉框拖着小尾巴像在说话。软糖高光、歪头悬停、压扁按下——可爱不是装饰，是手感。</p>
      <div class="btnrow">
        <button class="cbtn">捏一下</button>
        <button class="cbtn ghost">领贴纸</button>
      </div>
    </div>
    <div class="blobbox">
      <div class="blob">
        <span class="eye l"></span><span class="eye r"></span>
        <span class="cheek l"></span><span class="cheek r"></span>
        <span class="mouth"></span>
        <span class="zig">我会眨眼哦 ✧</span>
      </div>
    </div>
  </div>
  <div class="stickers">
    <div class="st"><span class="tape"></span><div class="face"></div><b>腮红按钮</b><p>主按钮的两团腮红 hover 时会更红一点——被看到会害羞。</p></div>
    <div class="st"><span class="tape"></span><div class="face"></div><b>气泡下拉</b><p>下拉浮层带一个小尾巴，像吉祥物在说悄悄话。</p></div>
    <div class="st"><span class="tape"></span><div class="face"></div><b>压扁反馈</b><p>按下时 scale(.96,.94)，是所有软东西被捏时的共同反应。</p></div>
  </div>
</div>${ua()}`,js:xa()})}},It=[kb,Cb,Ob,_b,Db,Hb,Bb,Gb,Lb,Vb,Zb,Jb,Fb,Wb,ag,tg,ng,sg,cg,fg,pg,gg,hg,yg,Sg,Eg,kg,Cg];function b0(w){return It.find(z=>z.id===w)}function gn(w,z){const N=new Blob([w],{type:"text/html;charset=utf-8"}),b=URL.createObjectURL(N),D=window.open(b,"_blank","noopener");if(D)try{D.document.title=`${z} · 范式展览馆`}catch{}setTimeout(()=>URL.revokeObjectURL(b),6e4)}async function Ag(w){try{return await navigator.clipboard.writeText(w),!0}catch{const z=document.createElement("textarea");z.value=w,z.style.cssText="position:fixed;opacity:0;pointer-events:none;",document.body.appendChild(z),z.focus(),z.select();let N=!1;try{N=document.execCommand("copy")}catch{N=!1}return z.remove(),N}}function u0({p:w}){const z=w.kind==="anti-pattern",[N,b]=Ia.useState(!1),D=async()=>{await Ag(w.prompt)&&(b(!0),setTimeout(()=>b(!1),1600))};return r.jsxs("div",{className:`ex-card${z?" anti":""}`,children:[r.jsx("div",{className:"thumb",children:r.jsx("iframe",{srcDoc:w.demo.html,sandbox:"","aria-hidden":"true",title:`${w.name} 预览`,loading:"lazy",style:{width:1280,height:w.demo.height,transform:"scale(0.28)",transformOrigin:"top left"}})}),r.jsxs("div",{className:"ex-body",children:[r.jsxs("div",{className:"ex-no",children:["EXHIBIT ",w.no]}),r.jsx("div",{className:"ex-name",children:w.name}),r.jsx("div",{className:"ex-nameEn",children:w.nameEn}),r.jsx("p",{className:"ex-tagline",children:w.tagline}),r.jsx("div",{className:"tags",children:w.tags.map(V=>r.jsx("span",{className:`tag${z?" anti":""}`,children:V},V))})]}),r.jsxs("div",{className:"ex-actions",children:[r.jsx("button",{className:"btn btn-solid btn-sm",onClick:D,children:N?"已复制 ✓":"复制提示词"}),r.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>gn(w.demo.html,w.name),children:"预览 ↗"})]})]})}function Og({p:w}){return r.jsxs("button",{className:"thumb-card",onClick:()=>gn(w.demo.html,w.name),title:`新窗口预览：${w.name}`,children:[r.jsx("div",{className:"thumb",style:{height:128},children:r.jsx("iframe",{srcDoc:w.demo.html,sandbox:"","aria-hidden":"true",title:`${w.name} 预览`,loading:"lazy",style:{width:1280,height:w.demo.height,transform:"scale(0.14)",transformOrigin:"top left"}})}),r.jsxs("div",{className:"thumb-name",children:[w.no," · ",w.name]})]})}const Mg=["bento","swiss","terminal","wa","y2k","deco"];function _g(){const w=It[0],z=It.slice(1);return r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"hero",children:[r.jsx("div",{className:"eyebrow",children:"PROMPT × PIXELS · UI PARADIGM HALL"}),r.jsxs("h1",{className:"display",children:["AI 把前端",r.jsx("br",{}),"做成了",r.jsx("em",{children:"同一个样子"}),"。"]}),r.jsxs("p",{className:"lead",children:["靛蓝渐变、三等分圆角卡片、shadow-lg——效率的代价是审美的中位数。",r.jsx("b",{children:"范式展览馆"}),"收集了 27 种依然鲜活的 UI 设计范式，每一种都配一份",r.jsx("b",{children:"可直接复制给 AI 的范式提示词"}),"和一段",r.jsx("b",{children:"真实渲染的效果"}),"。 跟 AI 说「按便当盒网格范式做」，它就不再向平均值回归。"]}),r.jsxs("div",{className:"hero-row",children:[r.jsx("a",{className:"btn btn-solid",href:"#gallery",children:"进入展厅 ↓"}),r.jsx("a",{className:"btn btn-ghost",href:"#/index",children:"打开 AI 索引"})]}),r.jsxs("div",{className:"stat-row",children:[r.jsxs("div",{className:"stat",children:[r.jsx("b",{children:"28"}),r.jsx("span",{children:"件展品（含 1 件反面标本）"})]}),r.jsxs("div",{className:"stat",children:[r.jsx("b",{children:"27"}),r.jsx("span",{children:"种设计范式"})]}),r.jsxs("div",{className:"stat",children:[r.jsx("b",{children:"26"}),r.jsx("span",{children:"个可交互组件 × 每种范式"})]}),r.jsxs("div",{className:"stat",children:[r.jsx("b",{children:"1"}),r.jsx("span",{children:"份机器可读 AI 索引"})]})]})]}),r.jsxs("section",{className:"section",id:"diagnosis",children:[r.jsxs("div",{className:"section-head",children:[r.jsx("span",{className:"no",children:"DIAGNOSIS"}),r.jsx("h2",{children:"先诊断：AI 前端为什么千篇一律"}),r.jsx("p",{children:"四个病根 × 一件反面标本"})]}),r.jsxs("div",{className:"diag",children:[r.jsxs("div",{className:"diag-text",children:[r.jsxs("h3",{className:"diag-h",children:["四条病根",r.jsx("span",{children:"左：为什么会这样 · 右：这样长什么样"})]}),r.jsxs("ol",{children:[r.jsx("li",{children:r.jsxs("span",{children:[r.jsx("b",{children:"提示词里没有「风格」这个维度。"}),"你说「做一个落地页」，AI 只能从训练分布里取均值——而均值就是 Tailwind + shadcn 的中位数审美。"]})}),r.jsx("li",{children:r.jsxs("span",{children:[r.jsx("b",{children:"负面约束缺位。"}),"不让 AI 避开「居中 Hero 三件套、紫蓝渐变、rounded-2xl 卡片」，它就会默认生产这些。"]})}),r.jsx("li",{children:r.jsxs("span",{children:[r.jsx("b",{children:"缺少按范式组织的高质量参考。"}),"设计史早就给过答案——瑞士网格、粗野主义、装饰艺术——但 AI 手里没有这样的图鉴。"]})}),r.jsx("li",{children:r.jsxs("span",{children:[r.jsx("b",{children:"效果无法验证。"}),"没有渲染结果对照，提示词只是口号。本馆坚持「提示词 × 实际效果」成对陈列。"]})})]})]}),r.jsxs("div",{className:"specimen",children:[r.jsx("div",{className:"specimen-label",children:"SPECIMEN 00"}),r.jsxs("div",{className:"specimen-frame",children:[r.jsx("div",{className:"specimen-flag",children:"反面标本 · 慎看"}),r.jsx(u0,{p:w})]})]})]}),r.jsxs("div",{style:{marginTop:28},children:[r.jsx("div",{className:"thumbs-label",children:"解药：同样的需求，范式库里的选择 ↓"}),r.jsx("div",{className:"thumbs-six",children:Mg.map(N=>{const b=b0(N);return r.jsx(Og,{p:b},N)})})]})]}),r.jsxs("section",{className:"section",id:"gallery",children:[r.jsxs("div",{className:"section-head",children:[r.jsx("span",{className:"no",children:"GALLERY"}),r.jsx("h2",{children:"展品陈列"}),r.jsx("p",{children:"点击任意展品查看提示词与完整演示"})]}),r.jsx("p",{className:"gallery-note",children:"00 号为反面标本（见上方诊断区），用于识别与规避；01–27 号为可用范式。每张卡片下方就是全部操作： 「复制提示词」整段拿走，「预览 ↗」在新窗口看真实渲染——演示底部都附带同一套 26 个可交互组件，直接上手玩。"}),r.jsx("div",{className:"gallery",children:z.map(N=>r.jsx(u0,{p:N},N.id))})]})]})}function jg(){const w=N=>Object.fromEntries(N.tokens.colors.map(b=>[b.name,b.value])),z=N=>Object.fromEntries(N.tokens.fonts.map(b=>[b.role,b.stack]));return{name:"ui-paradigm-index",version:1,generated:new Date().toISOString().slice(0,10),usage:"把本索引贴给你使用的 AI，提需求时指定 paradigm（如「按 便当盒网格 范式做…」），AI 会按该范式的布局、组件与交互规范与设计 token 生成 UI，避免千篇一律的默认输出。",howToUse:["复制整段 JSON（部署后也可直接访问 /index.json）","提需求时说：按「便当盒网格」范式做一个 SaaS 定价页","同一需求可切换不同范式对比，选出最贴合业务气质的一个"],entryCount:It.length,paradigms:It.map(N=>({id:N.id,name:N.name,nameEn:N.nameEn,tagline:N.tagline,tags:N.tags,kind:N.kind??"paradigm",prompt:N.prompt,colors:w(N),fonts:z(N)}))}}async function Dg(w){try{return await navigator.clipboard.writeText(w),!0}catch{try{const z=document.createElement("textarea");z.value=w,z.style.position="fixed",z.style.opacity="0",document.body.appendChild(z),z.select();const N=document.execCommand("copy");return z.remove(),N}catch{return!1}}}function Ug({prompt:w,label:z="范式提示词",hint:N="整段复制，直接发给 AI"}){const[b,D]=Ia.useState(!1),V=async()=>{const ya=await Dg(w);D(ya),setTimeout(()=>D(!1),1600)};return r.jsxs("div",{className:"prompt",children:[r.jsxs("div",{className:"prompt-head",children:[r.jsxs("span",{children:[z," ",r.jsx("span",{className:"hint",children:N})]}),r.jsx("button",{className:"btn btn-solid btn-sm",onClick:V,children:b?"已复制 ✓":"复制提示词"})]}),r.jsx("pre",{children:w})]})}const x0=[{id:"vibe",label:"项目气质",options:[{v:"enterprise",t:"企业后台 / 工具",p:["dashboard","swiss","terminal","bauhaus"]},{v:"brand",t:"消费品牌 / 营销",p:["bento","y2k","zine","deco","memphis"]},{v:"media",t:"内容 / 媒体",p:["editorial","wa","swiss","oriental-ink"]},{v:"creative",t:"创意 / 活动",p:["neo-brutalism","zine","y2k","memphis","handdrawn"]},{v:"luxury",t:"高端 / 仪式感",p:["deco","wa","editorial","oriental-ink"]}]},{id:"density",label:"信息密度",options:[{v:"dense",t:"信息密集",p:["dashboard","terminal"]},{v:"balanced",t:"均衡",p:["bento","swiss","glass","clay","pixel"]},{v:"airy",t:"极简留白",p:["wa","editorial","swiss","oriental-ink"]}]},{id:"mood",label:"情绪",options:[{v:"pro",t:"冷静专业",p:["dashboard","swiss","wa","bauhaus"]},{v:"warm",t:"温暖手工",p:["zine","editorial","skeuo","handdrawn","clay"]},{v:"loud",t:"张扬搞怪",p:["neo-brutalism","y2k","memphis"]},{v:"future",t:"未来科技",p:["terminal","glass","dashboard","cyberpunk","vaporwave","pixel"]},{v:"elegant",t:"优雅经典",p:["deco","editorial","wa","oriental-ink"]},{v:"cute",t:"软萌柔和",p:["clay","handdrawn","y2k"]}]}];async function Hg(w){try{return await navigator.clipboard.writeText(w),!0}catch{try{const z=document.createElement("textarea");z.value=w,z.style.cssText="position:fixed;opacity:0",document.body.appendChild(z),z.select();const N=document.execCommand("copy");return z.remove(),N}catch{return!1}}}const Rg=24;function Bg(){const w=Ia.useMemo(()=>jg(),[]),z=Ia.useMemo(()=>JSON.stringify(w,null,2),[w]),N=Ia.useMemo(()=>(new Blob([z]).size/1024).toFixed(1),[z]),b=Ia.useMemo(()=>z.split(`
`).slice(0,Rg).join(`
`),[z]),[D,V]=Ia.useState({}),[ya,ee]=Ia.useState(!1),[wa,ja]=Ia.useState(!1),[B,v]=Ia.useState(""),[R,Ca]=Ia.useState("all"),te=Ia.useMemo(()=>{const T=new Map;for(const j of x0){const Sa=j.options.find(Ua=>Ua.v===D[j.id]);if(Sa)for(const Ua of Sa.p){const Pa=T.get(Ua)??{n:0,why:[]};Pa.n+=1,Pa.why.push(`${j.label}·${Sa.t}`),T.set(Ua,Pa)}}return[...T.entries()].sort((j,Sa)=>Sa[1].n-j[1].n)},[D]),La=Object.values(D).filter(Boolean).length,aa=te.slice(0,3).map(([T,j])=>({p:b0(T),s:j})),Da=aa[0]?.p,le=aa[0]?.s.n??1,lt=Da?`${Da.prompt}

# 我的需求
（把你要做的页面 / 业务描述写在这里，AI 会按上述范式实现，而不是输出默认风格）`:"",ce=Ia.useMemo(()=>{const T=B.trim().toLowerCase();return It.filter(j=>R!=="all"&&(j.kind??"paradigm")!==R?!1:T?j.name.toLowerCase().includes(T)||j.nameEn.toLowerCase().includes(T)||j.tags.some(Sa=>Sa.toLowerCase().includes(T)):!0)},[B,R]),be=async()=>{const T=await Hg(z);ee(T),setTimeout(()=>ee(!1),1600)},Wa=()=>{const T=new Blob([z],{type:"application/json"}),j=document.createElement("a");j.href=URL.createObjectURL(T),j.download="index.json",j.click(),URL.revokeObjectURL(j.href)};return r.jsxs("div",{className:"ex-wrap",children:[r.jsx("div",{className:"eyebrow",children:"AI INDEX · 机器可读范式索引"}),r.jsx("h1",{className:"display",style:{fontSize:"clamp(30px, 4vw, 48px)",marginTop:14},children:"把范式库，装进 AI 的上下文。"}),r.jsxs("p",{className:"lead",children:["这份索引把全部范式的提示词与设计 token 结构化成 JSON。部署后任何 AI 都可以直接请求",r.jsx("span",{className:"mono",children:" /index.json"}),"；在对话里，你也可以整段复制贴给它，然后说： 「按『便当盒网格』范式做一个定价页」。"]}),r.jsxs("div",{className:"idx-actions",children:[r.jsx("button",{className:"btn btn-solid btn-sm",onClick:be,children:ya?"已复制 ✓":"复制整份索引"}),r.jsx("button",{className:"btn btn-ghost btn-sm",onClick:Wa,children:"下载 index.json"}),r.jsx("a",{className:"btn btn-ghost btn-sm",href:"./llms.txt",target:"_blank",rel:"noreferrer",children:"打开 llms.txt ↗"})]}),r.jsxs("div",{className:"steps",children:[r.jsxs("div",{className:"step-card",children:[r.jsx("div",{className:"n",children:"STEP 01"}),r.jsx("h4",{children:"选一个范式"}),r.jsx("p",{children:"用推荐器回答三个问题，或在下方速查表里按名称、标签检索 28 件展品；点击行或卡片上的「预览」直接在新窗口看真实渲染。"})]}),r.jsxs("div",{className:"step-card",children:[r.jsx("div",{className:"n",children:"STEP 02"}),r.jsx("h4",{children:"复制范式提示词"}),r.jsx("p",{children:"提示词里已写死布局、字体、色彩 token、组件与交互规范与禁忌——比「做个漂亮页面」具体一万倍。"})]}),r.jsxs("div",{className:"step-card",children:[r.jsx("div",{className:"n",children:"STEP 03"}),r.jsx("h4",{children:"提需求，验收效果"}),r.jsx("p",{children:"让 AI 按范式生成，再拿本馆的实际效果当验收基准。不满意就换范式重来。"})]})]}),r.jsxs("div",{className:"section-head",style:{marginTop:52},children:[r.jsx("span",{className:"no",children:"DIRECTORY"}),r.jsx("h2",{children:"范式速查表"}),r.jsxs("p",{children:[ce.length," / ",It.length," 件"]})]}),r.jsxs("div",{className:"idx-filters",children:[r.jsx("input",{className:"idx-search",type:"text",value:B,onChange:T=>v(T.target.value),placeholder:"搜索名称或标签，如「粗野」「网格」「Bauhaus」…"}),r.jsx("div",{className:"idx-kinds",children:[["all","全部"],["paradigm","可用范式"],["anti-pattern","反面标本"]].map(([T,j])=>r.jsx("button",{className:`opt${R===T?" on":""}`,onClick:()=>Ca(T),children:j},T))})]}),r.jsx("div",{className:"idx-table-wrap",children:r.jsxs("table",{className:"idx-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"编号"}),r.jsx("th",{children:"范式"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"标签"}),r.jsx("th",{})]})}),r.jsxs("tbody",{children:[ce.map(T=>r.jsxs("tr",{onClick:()=>gn(T.demo.html,T.name),title:`新窗口预览：${T.name}`,children:[r.jsx("td",{className:"mono",children:T.no}),r.jsxs("td",{children:[r.jsx("b",{children:T.name}),r.jsx("span",{className:"en",children:T.nameEn})]}),r.jsx("td",{children:r.jsx("span",{className:`tag${(T.kind??"paradigm")==="anti-pattern"?" anti":""}`,children:(T.kind??"paradigm")==="anti-pattern"?"反面标本":"范式"})}),r.jsx("td",{className:"tags",children:T.tags.join(" · ")}),r.jsx("td",{className:"go",children:"查看 ↗"})]},T.id)),ce.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:5,style:{color:"var(--ink-3)",padding:"18px 8px"},children:"没有匹配的展品，换个关键词试试。"})})]})]})}),r.jsxs("div",{className:"section-head",style:{marginTop:52},children:[r.jsx("span",{className:"no",children:"PICKER"}),r.jsx("h2",{children:"范式推荐器"}),r.jsx("p",{children:"三个问题，选出你的范式"})]}),r.jsxs("div",{className:"picker",children:[r.jsx("h3",{children:"告诉我你在做什么"}),r.jsxs("p",{className:"sub",children:["已回答 ",La," / 3 个问题",La===3?" · 可以撤换重选":""]}),x0.map((T,j)=>r.jsxs("div",{className:"q",children:[r.jsxs("div",{className:"q-label",children:[r.jsxs("i",{children:["Q",j+1]}),T.label]}),r.jsx("div",{className:"opts",children:T.options.map(Sa=>r.jsx("button",{className:`opt${D[T.id]===Sa.v?" on":""}`,onClick:()=>V(Ua=>({...Ua,[T.id]:Sa.v})),children:Sa.t},Sa.v))})]},T.id)),r.jsx("div",{className:"reco",children:aa.length>0?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"rank",children:aa.map(({p:T,s:j},Sa)=>r.jsxs("div",{className:"rank-item",onClick:()=>gn(T.demo.html,T.name),title:`新窗口预览：${T.name}`,children:[r.jsx("span",{className:"rank-no",children:String(Sa+1).padStart(2,"0")}),r.jsxs("span",{className:"rank-name",children:[T.name,r.jsxs("em",{children:[T.nameEn," · EXHIBIT ",T.no]})]}),r.jsx("span",{className:"rank-bar",children:r.jsx("i",{style:{width:`${j.n/le*100}%`}})}),r.jsxs("span",{className:"rank-score",children:[j.n," 项匹配"]})]},T.id))}),r.jsxs("div",{className:"r-why",children:["首选 ",r.jsx("em",{children:Da.name})," 的理由：",aa[0].s.why.join("；"),"。",Da.tagline]}),r.jsx(Ug,{prompt:lt,label:"组装好的提示词（范式 + 你的需求）",hint:"已自动填入选定范式，补上需求即可发送"}),r.jsx("div",{style:{display:"flex",gap:10,marginTop:14,flexWrap:"wrap"},children:r.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>gn(Da.demo.html,Da.name),children:"新窗口预览该范式真实渲染 ↗"})})]}):r.jsx("p",{style:{fontSize:13,color:"var(--ink-3)",margin:0},children:"回答上方任意问题，这里会按匹配度给出范式排序与组装好的提示词。"})})]}),r.jsxs("div",{className:"section-head",style:{marginTop:52},children:[r.jsx("span",{className:"no",children:"JSON"}),r.jsx("h2",{children:"机器可读索引"}),r.jsx("p",{children:"index.json · llms.txt"})]}),r.jsxs("div",{className:"json-meta",children:[r.jsxs("span",{children:[r.jsx("b",{children:w.entryCount})," 件展品"]}),r.jsxs("span",{children:[r.jsxs("b",{children:[N," KB"]})," 体积"]}),r.jsxs("span",{children:["生成于 ",r.jsx("b",{className:"mono",children:w.generated})]}),r.jsxs("span",{children:["每条含 ",r.jsx("b",{children:"prompt / colors / fonts"})]})]}),r.jsxs("div",{className:"json-block",children:[r.jsx("pre",{className:wa?"full":"",children:wa?z:b}),!wa&&r.jsx("div",{className:"json-fade"})]}),r.jsxs("div",{className:"json-actions",children:[r.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>ja(T=>!T),children:wa?"收起全文 ▴":`展开全文（${z.split(`
`).length} 行）▾`}),r.jsx("button",{className:"btn btn-solid btn-sm",onClick:be,children:ya?"已复制 ✓":"复制 JSON"}),r.jsx("button",{className:"btn btn-ghost btn-sm",onClick:Wa,children:"下载 index.json"}),r.jsx("a",{className:"btn btn-ghost btn-sm",href:"./index.json",target:"_blank",rel:"noreferrer",children:"打开 /index.json ↗"})]})]})}function Yg(){const w=It.filter(N=>N.kind!=="anti-pattern"),z=w[Math.floor(Math.random()*w.length)];gn(z.demo.html,z.name)}function Gg(){const w=Sb(),z=w.startsWith("#/index");return Ia.useEffect(()=>{w.startsWith("#/")&&window.scrollTo({top:0,left:0,behavior:"instant"})},[w]),r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"site-header",children:r.jsxs("div",{className:"header-in",children:[r.jsxs("a",{className:"wordmark",href:"#/",children:[r.jsx("span",{className:"mark"}),"范式展览馆",r.jsx("small",{children:"PARADIGM HALL"})]}),r.jsxs("nav",{className:"nav",children:[r.jsx("a",{href:"#/",className:z?"":"active",children:"展厅"}),r.jsx("a",{href:"#/index",className:z?"active":"",children:"AI 索引"}),r.jsx("a",{href:"#diagnosis",children:"反面标本"}),r.jsxs("a",{className:"gh-link",href:"https://github.com/youbilin/ui-paradigm-gallery",target:"_blank",rel:"noreferrer",title:"GitHub 仓库","aria-label":"GitHub 仓库",children:[r.jsx("svg",{width:"17",height:"17",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"})}),"GitHub"]})]}),r.jsx("div",{className:"header-cta",children:r.jsx("button",{className:"btn btn-signal btn-sm",onClick:Yg,children:"随机预览一件"})})]})}),r.jsx("main",{children:z?r.jsx(Bg,{}):r.jsx(_g,{})}),r.jsxs("footer",{className:"site-footer",children:[r.jsxs("div",{className:"footer-in",children:[r.jsxs("div",{children:[r.jsx("h5",{children:"范式展览馆"}),r.jsx("p",{children:"UI 范式提示词 × 实际效果展览。专治 AI 生成前端的千篇一律：给 AI 一份范式， 而不是一句「做一个漂亮页面」。"})]}),r.jsxs("div",{children:[r.jsx("h5",{children:"导览"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"#/",children:"展厅"})}),r.jsx("li",{children:r.jsx("a",{href:"#/index",children:"AI 索引 / 推荐器"})}),r.jsx("li",{children:r.jsx("a",{href:"#diagnosis",children:"反面标本：AI 默认味"})})]})]}),r.jsxs("div",{children:[r.jsx("h5",{children:"数据"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"./index.json",target:"_blank",rel:"noreferrer",children:"index.json"})}),r.jsx("li",{children:r.jsx("a",{href:"./llms.txt",target:"_blank",rel:"noreferrer",children:"llms.txt"})}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"npm run index"})," 重新生成"]})]})]})]}),r.jsx("div",{className:"footer-bottom",children:r.jsx("div",{className:"footer-in",children:r.jsx("p",{children:"PARADIGM HALL · 28 EXHIBITS · REACT + VITE · 2026"})})})]})]})}wb.createRoot(document.getElementById("root")).render(r.jsx(Ia.StrictMode,{children:r.jsx(Gg,{})}));
