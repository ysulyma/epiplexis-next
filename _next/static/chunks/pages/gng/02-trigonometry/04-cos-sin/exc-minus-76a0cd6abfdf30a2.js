(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{9755:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gng/02-trigonometry/04-cos-sin/exc-minus",function(){return n(6132)}])},2448:function(e,t,n){"use strict";n.d(t,{Y:function(){return u}});var r=n(5893),i=n(1008),c=n(7294);n(5189);var o=n(6453);let u=(0,c.forwardRef)(function(e,t){let{className:n,children:u,display:s=!1}=e,l=(0,c.useRef)(null);return(0,c.useEffect)(()=>{l.current&&i.Z.render(null!=u?u:"",l.current,{displayMode:s,throwOnError:!1})},[u,s]),(0,r.jsx)("span",{className:n,ref:(0,o.zb)(l,t)})})},3522:function(e,t,n){"use strict";n.d(t,{GG:function(){return i},v4:function(){return r}});let r=Math.PI/180,i=2*Math.PI},7618:function(e,t,n){"use strict";function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseFloat(e.toFixed(t))}function i(e,t){return(e%t+t)%t}n.d(t,{$G:function(){return r},wQ:function(){return i}})},6132:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(2729),i=n(5893),c=n(6453),o=n(4981),u=n(3967),s=n.n(u),l=n(7294),a=n(2448),f=n(3522),d=n(6410),h=n(7618);function v(){let e=(0,r._)(["(cosalpha,sinalpha)"],["(\\cos\\alpha,\\sin\\alpha)"]);return v=function(){return e},e}function p(){let e=(0,r._)(["(cos\beta,sin\beta)"],["(\\cos\\beta,\\sin\\beta)"]);return p=function(){return e},e}let{cos:w,sin:m,tan:x,sqrt:y,atan2:g}=Math,b=e=>{let{children:t,className:n,r,theta:c,...u}=e,h=(0,l.useRef)(null),v=(0,l.useRef)(null),[p,b]=(0,l.useState)({height:1,width:1});(0,l.useEffect)(()=>{if(!(h.current&&v.current))return;let e=h.current.getBoundingClientRect(),[t,n]=(0,o.k)(v.current.ownerSVGElement,e.height,e.width);b({height:t,width:n})},[]);let E=3+function(e){let{h:t,w:n,r=1,theta:i}=e;t/=r,n/=r,i%=f.GG/2,(0,d.vX)(f.GG/4,i,f.GG/2)&&(i-=f.GG/4,[t,n]=[n,t]);let c=1+n/2,o=1+t/2;i<g(t/2,c)?t=2*c*x(i):i>g(o,n/2)&&(n=2*o*x(Math.PI/2-i));let u=x(i);return .5*(-2+t*m(i)+w(i)*(n+y(4-t**2+2*t*n*u-(n**2-4)*u*u)))*r}({h:p.height,w:p.width,theta:c,r});return(0,i.jsx)("foreignObject",{className:s()("pointer-events-none overflow-visible",n),x:(r+E)*w(c),y:-(r+E)*m(c),ref:v,...u,width:2e3,height:1e3,children:(0,i.jsx)(a.Y,{className:"fixed block w-min -translate-x-1/2 -translate-y-1/2",ref:h,children:t})})};function E(){let[e,t]=(0,l.useState)(75*f.v4),[n,r]=(0,l.useState)(-20*f.v4),u=0+45*w(e),s=0-45*m(e),a=0+45*w(n),d=0-45*m(n),x=(0,l.useRef)(null),y=(0,l.useCallback)(e=>(0,c.dz)((t,n)=>{if(!x.current)return;let[r,i]=(0,o.K)(x.current,n.x,n.y);e((0,h.wQ)(g(0-i,r-0),f.GG))},()=>{document.body.classList.add("dragging")},()=>{document.body.classList.remove("dragging")}),[]),E=(0,l.useMemo)(()=>y(t),[y]),j=(0,l.useMemo)(()=>y(r),[y]);return(0,i.jsx)("div",{className:"h-screen w-screen",children:(0,i.jsxs)("svg",{className:"mx-auto h-full p-2",ref:x,viewBox:"-175 -70 350 140",children:[(0,i.jsx)("circle",{className:"stroke-violet-600",cx:0,cy:0,r:45,fill:"none",strokeWidth:"1"}),(0,i.jsx)("line",{className:"stroke-red-700",x1:0,y1:0,x2:u,y2:s}),(0,i.jsx)("line",{className:"stroke-blue-700",x1:0,y1:0,x2:a,y2:d}),(0,i.jsx)("line",{className:"stroke-green-600",x1:u,y1:s,x2:a,y2:d}),(0,i.jsx)("path",{className:"stroke-green-600",d:"M ".concat(u,",").concat(s," V ").concat(d," H ").concat(a),fill:"none","stroke-dasharray":"0.2,1.5","stroke-linecap":"round"}),(0,i.jsx)("circle",{className:"dark:fill-white",cx:0,cy:0,r:"2"}),(0,i.jsx)("circle",{className:"draggable fill-red-600",cx:u,cy:s,r:"2",...E}),(0,i.jsx)("circle",{className:"draggable fill-blue-600",cx:a,cy:d,r:"2",...j}),(0,i.jsx)(b,{r:45,theta:e,className:"select-none whitespace-nowrap stroke-red-600 text-red-600",fontSize:12,children:String.raw(v())}),(0,i.jsx)(b,{r:45,theta:n,className:"select-none whitespace-nowrap text-blue-600",fontSize:12,children:String.raw(p())})]})})}},5189:function(){},3967:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=c(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=c(t,n));return t}(n)))}return e}function c(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0!==(n=(function(){return i}).apply(t,[]))&&(e.exports=n)}()},6453:function(e,t,n){"use strict";n.d(t,{zb:function(){return i},dz:function(){return c},oU:function(){return function e(t,n){return r.Children.map(t,t=>(0,r.isValidElement)(t)?("children"in t.props&&(t=(0,r.cloneElement)(t,{children:e(t.props.children,n)})),n(t)):t)}},fJ:function(){return o}});var r=n(7294);function i(...e){return t=>{for(let n of e)"function"==typeof n?n(t):null===n||"object"==typeof n&&n.hasOwnProperty("current")&&(n.current=t)}}function c(e,t,n){let r=function(e,t=()=>{},n=()=>{}){return r=>{if(r instanceof MouseEvent){if(0!==r.button)return;let i=r.clientX,c=r.clientY,o=e=>{let t=e.clientX-i,r=e.clientY-c;return document.body.removeEventListener("mousemove",u),window.removeEventListener("mouseup",o),n(e,{x:e.clientX,y:e.clientY,dx:t,dy:r})},u=t=>{let n=t.clientX-i,r=t.clientY-c;return i=t.clientX,c=t.clientY,e(t,{x:t.clientX,y:t.clientY,dx:n,dy:r})};return document.body.addEventListener("mousemove",u,{passive:!1}),window.addEventListener("mouseup",o,{passive:!1}),t(r,{x:i,y:c},o,u)}{r.preventDefault();let i=r.changedTouches,c=i[0].identifier,o=i[0].clientX,u=i[0].clientY,s=e=>{for(let t of(e.preventDefault(),Array.from(e.changedTouches))){if(t.identifier!==c)continue;let r=t.clientX-o,i=t.clientY-u;return window.removeEventListener("touchend",s,{capture:!1,passive:!1}),window.removeEventListener("touchcancel",s,{capture:!1,passive:!1}),window.removeEventListener("touchmove",l,{capture:!1,passive:!1}),n(e,{x:t.clientX,y:t.clientY,dx:r,dy:i})}},l=t=>{for(let n of(t.preventDefault(),Array.from(t.changedTouches))){if(n.identifier!==c)continue;let r=n.clientX-o,i=n.clientY-u;return o=n.clientX,u=n.clientY,e(t,{x:n.clientX,y:n.clientY,dx:r,dy:i})}};return window.addEventListener("touchend",s,{capture:!1,passive:!1}),window.addEventListener("touchcancel",s,{capture:!1,passive:!1}),window.addEventListener("touchmove",l,{capture:!1,passive:!1}),t(r,{x:o,y:u},s,l)}}}(e,t,n);return{"data-affords":"click",onMouseDown:e=>r(e.nativeEvent),onTouchStart:e=>r(e.nativeEvent)}}function o(e=[]){let t=(0,r.useRef)(),n=(0,r.useRef)();return[(0,r.useMemo)(()=>new Promise((e,r)=>{t.current=e,n.current=r}),e),t.current,n.current]}"undefined"!=typeof window&&window.matchMedia?.("(any-hover: hover)")?.matches},4981:function(e,t,n){"use strict";function r(e,t,n){let r=e;for(;!(r instanceof SVGGraphicsElement);)r=r.parentNode;let i=e instanceof SVGSVGElement?e:e.ownerSVGElement,c=r.getScreenCTM().inverse(),o=i.createSVGPoint();return o.x=t,o.y=n,[(o=o.matrixTransform(c)).x,o.y]}function i(e,t,n){let r=e.getBoundingClientRect(),i=e.viewBox.baseVal;return[t/(r.width/i.width),n/(r.height/i.height)]}n.d(t,{K:function(){return r},k:function(){return i}})},2729:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return r}})}},function(e){e.O(0,[265,267,888,774,179],function(){return e(e.s=9755)}),_N_E=e.O()}]);