(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52],{4611:function(e,t,n){"use strict";n.d(t,{XR:function(){return r}}),Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;let r=e=>(t,n,r)=>{let i=r.subscribe;return r.subscribe=(e,t,n)=>{let c=e;if(t){let i=(null==n?void 0:n.equalityFn)||Object.is,o=e(r.getState());c=n=>{let r=e(n);if(!i(o,r)){let e=o;t(o=r,e)}},(null==n?void 0:n.fireImmediately)&&t(o,o)}return i(c)},e(t,n,r)};Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable},29:function(e,t,n){"use strict";function r(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}n.d(t,{Z:function(){return r}})},8128:function(){},3773:function(e,t,n){"use strict";n.d(t,{w6:function(){return function e(t,n){return void 0===n?e(0,t):Array(n-t).fill(null).map((e,n)=>t+n)}}})},7526:function(e,t,n){"use strict";var r,i,c;function o(e,t,n){let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};return r=>{if(r instanceof MouseEvent){if(0!==r.button)return;let i=r.clientX,c=r.clientY,o=e=>{let t=e.clientX-i,r=e.clientY-c;return document.body.removeEventListener("mousemove",u),window.removeEventListener("mouseup",o),n(e,{x:e.clientX,y:e.clientY,dx:t,dy:r})},u=t=>{let n=t.clientX-i,r=t.clientY-c;return i=t.clientX,c=t.clientY,e(t,{x:t.clientX,y:t.clientY,dx:n,dy:r})};return document.body.addEventListener("mousemove",u,{passive:!1}),window.addEventListener("mouseup",o,{passive:!1}),t(r,{x:i,y:c},o,u)}{r.preventDefault();let i=r.changedTouches,c=i[0].identifier,o=i[0].clientX,u=i[0].clientY,l=e=>{for(let t of(e.preventDefault(),Array.from(e.changedTouches))){if(t.identifier!==c)continue;let r=t.clientX-o,i=t.clientY-u;return window.removeEventListener("touchend",l,{capture:!1,passive:!1}),window.removeEventListener("touchcancel",l,{capture:!1,passive:!1}),window.removeEventListener("touchmove",s,{capture:!1,passive:!1}),n(e,{x:t.clientX,y:t.clientY,dx:r,dy:i})}},s=t=>{for(let n of(t.preventDefault(),Array.from(t.changedTouches))){if(n.identifier!==c)continue;let r=n.clientX-o,i=n.clientY-u;return o=n.clientX,u=n.clientY,e(t,{x:n.clientX,y:n.clientY,dx:r,dy:i})}};return window.addEventListener("touchend",l,{capture:!1,passive:!1}),window.addEventListener("touchcancel",l,{capture:!1,passive:!1}),window.addEventListener("touchmove",s,{capture:!1,passive:!1}),t(r,{x:o,y:u},l,s)}}}(e,t,n);return{"data-affords":"click",onMouseDown:e=>r(e.nativeEvent),onTouchStart:e=>r(e.nativeEvent)}}n.d(t,{dz:function(){return o}}),n(4090),null===(i=(c=window).matchMedia)||void 0===i||null===(r=i.call(c,"(any-hover: hover)"))||void 0===r||r.matches},3769:function(e,t,n){"use strict";function r(e,t,n){let r=e;for(;!(r instanceof SVGGraphicsElement);)r=r.parentNode;let i=e instanceof SVGSVGElement?e:e.ownerSVGElement,c=r.getScreenCTM().inverse(),o=i.createSVGPoint();return o.x=t,o.y=n,[(o=o.matrixTransform(c)).x,o.y]}n.d(t,{K:function(){return r}})},6093:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return r}})}}]);