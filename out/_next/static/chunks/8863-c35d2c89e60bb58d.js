(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8863],{97500:function(t){t.exports={style:{fontFamily:"'__Open_Sans_63ca04', '__Open_Sans_Fallback_63ca04'",fontStyle:"normal"},className:"__className_63ca04",variable:"__variable_63ca04"}},11288:function(t,e,n){"use strict";n.d(e,{Z:function(){return F}});var r=n(13428),i=n(2265),o=n(79173);n(54812);var s=n(10870),c=n(60075),a=n(91478),u=n(17146),h=i.createContext(null),f=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),d="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,l=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),v="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(l):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},p=["top","right","bottom","left","width","height","size","weight"],_="undefined"!=typeof MutationObserver,b=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&c()}function s(){v(o)}function c(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,20);i=t}return c}(this.refresh.bind(this),0)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){d&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),_?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){d&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;p.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),m=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},y=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||l},g=M(0,0,0,0);function w(t){return parseFloat(t)||0}function E(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(e,n){return e+w(t["border-"+n+"-width"])},0)}var O="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof y(t).SVGGraphicsElement}:function(t){return t instanceof y(t).SVGElement&&"function"==typeof t.getBBox};function M(t,e,n,r){return{x:t,y:e,width:n,height:r}}var R=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=M(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=function(t){if(!d)return g;if(O(t)){var e;return M(0,0,(e=t.getBBox()).width,e.height)}return function(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return g;var r=y(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=w(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=w(r.width),a=w(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=E(r,"left","right")+o),Math.round(a+s)!==n&&(a-=E(r,"top","bottom")+s)),t!==y(t).document.documentElement){var u=Math.round(c+o)-e,h=Math.round(a+s)-n;1!==Math.abs(u)&&(c-=u),1!==Math.abs(h)&&(a-=h)}return M(i.left,i.top,c,a)}(t)}(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),k=function(t,e){var n,r,i,o,s,c=(n=e.x,r=e.y,i=e.width,o=e.height,m(s=Object.create(("undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:n,y:r,width:i,height:o,top:r,right:n+i,bottom:o+r,left:n}),s);m(this,{target:t,contentRect:c})},A=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new f,"function"!=typeof t)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof y(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new R(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof y(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new k(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),x="undefined"!=typeof WeakMap?new WeakMap:new f,T=function t(e){if(!(this instanceof t))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var n=new A(e,b.getInstance(),this);x.set(this,n)};["observe","unobserve","disconnect"].forEach(function(t){T.prototype[t]=function(){var e;return(e=x.get(this))[t].apply(e,arguments)}});var C=void 0!==l.ResizeObserver?l.ResizeObserver:T,Z=new Map,z=new C(function(t){t.forEach(function(t){var e,n=t.target;null===(e=Z.get(n))||void 0===e||e.forEach(function(t){return t(n)})})}),S=n(49034),W=n(88755),H=n(91847),D=n(42936),j=function(t){(0,H.Z)(n,t);var e=(0,D.Z)(n);function n(){return(0,S.Z)(this,n),e.apply(this,arguments)}return(0,W.Z)(n,[{key:"render",value:function(){return this.props.children}}]),n}(i.Component),L=i.forwardRef(function(t,e){var n=t.children,r=t.disabled,o=i.useRef(null),f=i.useRef(null),d=i.useContext(h),l="function"==typeof n,v=l?n(o):n,p=i.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),_=!l&&i.isValidElement(v)&&(0,u.Yr)(v),b=_?v.ref:null,m=(0,u.x1)(b,o),y=function(){var t;return(0,a.Z)(o.current)||(o.current&&"object"===(0,c.Z)(o.current)?(0,a.Z)(null===(t=o.current)||void 0===t?void 0:t.nativeElement):null)||(0,a.Z)(f.current)};i.useImperativeHandle(e,function(){return y()});var g=i.useRef(t);g.current=t;var w=i.useCallback(function(t){var e=g.current,n=e.onResize,r=e.data,i=t.getBoundingClientRect(),o=i.width,c=i.height,a=t.offsetWidth,u=t.offsetHeight,h=Math.floor(o),f=Math.floor(c);if(p.current.width!==h||p.current.height!==f||p.current.offsetWidth!==a||p.current.offsetHeight!==u){var l={width:h,height:f,offsetWidth:a,offsetHeight:u};p.current=l;var v=(0,s.Z)((0,s.Z)({},l),{},{offsetWidth:a===Math.round(o)?o:a,offsetHeight:u===Math.round(c)?c:u});null==d||d(v,t,r),n&&Promise.resolve().then(function(){n(v,t)})}},[]);return i.useEffect(function(){var t=y();return t&&!r&&(Z.has(t)||(Z.set(t,new Set),z.observe(t)),Z.get(t).add(w)),function(){Z.has(t)&&(Z.get(t).delete(w),Z.get(t).size||(z.unobserve(t),Z.delete(t)))}},[o.current,r]),i.createElement(j,{ref:f},_?i.cloneElement(v,{ref:m}):v)}),B=i.forwardRef(function(t,e){var n=t.children;return("function"==typeof n?[n]:(0,o.Z)(n)).map(function(n,o){var s=(null==n?void 0:n.key)||"".concat("rc-observer-key","-").concat(o);return i.createElement(L,(0,r.Z)({},t,{key:s,ref:0===o?e:void 0}),n)})});B.Collection=function(t){var e=t.children,n=t.onBatchResize,r=i.useRef(0),o=i.useRef([]),s=i.useContext(h),c=i.useCallback(function(t,e,i){r.current+=1;var c=r.current;o.current.push({size:t,element:e,data:i}),Promise.resolve().then(function(){c===r.current&&(null==n||n(o.current),o.current=[])}),null==s||s(t,e,i)},[n,s]);return i.createElement(h.Provider,{value:c},e)};var F=B}}]);