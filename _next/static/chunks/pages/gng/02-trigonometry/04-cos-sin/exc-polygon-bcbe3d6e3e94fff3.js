(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[194],{7843:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gng/02-trigonometry/04-cos-sin/exc-polygon",function(){return n(9045)}])},2448:function(e,t,n){"use strict";n.d(t,{Y:function(){return u}});var r=n(5893),i=n(1008),c=n(7294);n(5189);var o=n(6453);let u=(0,c.forwardRef)(function(e,t){let{className:n,children:u,display:s=!1}=e,l=(0,c.useRef)(null);return(0,c.useEffect)(()=>{l.current&&i.Z.render(null!=u?u:"",l.current,{displayMode:s,throwOnError:!1})},[u,s]),(0,r.jsx)("span",{className:n,ref:(0,o.zb)(l,t)})})},3522:function(e,t,n){"use strict";n.d(t,{GG:function(){return i},v4:function(){return r}});let r=Math.PI/180,i=2*Math.PI},7618:function(e,t,n){"use strict";function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseFloat(e.toFixed(t))}function i(e,t){return(e%t+t)%t}n.d(t,{$G:function(){return r},wQ:function(){return i}})},8090:function(e,t,n){"use strict";n.d(t,{U:function(){return l},cn:function(){return s}});var r=n(3967),i=n.n(r),c=n(512),o=n(7294),u=n(8388);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,u.m6)((0,c.W)(t))}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i(),r=o.Children.only(t),{className:c,...u}=r.props,s=function(e,t){let{className:i,...s}=e;return(0,o.createElement)(r.type,{className:n(c,i),...u,...s,ref:t})};return s.displayName=e,(0,o.forwardRef)(s)}},9045:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(2729),i=n(5893),c=n(7294),o=n(2448),u=n(3522),s=n(7618),l=n(8090);function a(){let e=(0,r._)(["	exttt{","}"],["\\texttt{","}"]);return a=function(){return e},e}function f(){let e=(0,r._)(["	exttt{","}"],["\\texttt{","}"]);return f=function(){return e},e}let{cos:d,sin:h,tan:p,sqrt:m,atan2:v}=Math;function x(){let[e,t]=(0,c.useState)(3),n=(0,c.useRef)(null),r=(0,c.useMemo)(()=>Array.from({length:e}).map((t,n)=>[45*Math.cos(n*u.GG/e),-45*Math.sin(n*u.GG/e)].map(e=>(0,s.$G)(e,8))),[e]),l=2*e*Math.sin(u.GG/(2*e)),d=e/2*h(u.GG/e);return(0,i.jsxs)("div",{className:"font-cm h-screen w-screen text-xl",children:[(0,i.jsx)("table",{className:"absolute right-4 top-4",children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsxs)(w,{children:["Sides ",(0,i.jsx)(o.Y,{children:"(n)"})]}),(0,i.jsxs)("td",{className:"flex items-center gap-2",children:[(0,i.jsx)("input",{type:"range",min:3,max:50,onChange:e=>t(parseInt(e.currentTarget.value)),value:e}),(0,i.jsx)("output",{className:"w-6 text-right",children:e})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)(w,{className:"",children:"Perimeter"}),(0,i.jsx)("td",{children:(0,i.jsx)(o.Y,{children:String.raw(a(),l.toFixed(8))})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)(w,{children:"Area"}),(0,i.jsx)("td",{children:(0,i.jsx)("output",{children:(0,i.jsx)(o.Y,{children:String.raw(f(),d.toFixed(8))})})})]})]})}),(0,i.jsxs)("svg",{className:"mx-auto h-full p-2",ref:n,viewBox:"-100 -100 200 200",children:[(0,i.jsx)("circle",{className:"stroke-violet-600",r:45,fill:"none",strokeWidth:"1"}),(0,i.jsx)("path",{d:"M ".concat(r[0][0]," ").concat(r[0][1])+r.slice(1).map(e=>{let[t,n]=e;return" L ".concat(t,",").concat(n)}).join("")+" z",className:"fill-none stroke-blue-600"}),r.map(e=>(0,i.jsx)("line",{x1:0,y1:0,x2:e[0],y2:e[1],className:"stroke-blue-600",strokeDasharray:"0.2,2",strokeLinecap:"round"},"".concat(e[0],",").concat(e[1])))]})]})}let w=(0,l.U)("Th",(0,i.jsx)("th",{className:"pr-2 text-right",scope:"row"}))},5189:function(){},6453:function(e,t,n){"use strict";n.d(t,{zb:function(){return i},dz:function(){return c},oU:function(){return function e(t,n){return r.Children.map(t,t=>(0,r.isValidElement)(t)?("children"in t.props&&(t=(0,r.cloneElement)(t,{children:e(t.props.children,n)})),n(t)):t)}},fJ:function(){return o}});var r=n(7294);function i(...e){return t=>{for(let n of e)"function"==typeof n?n(t):null===n||"object"==typeof n&&n.hasOwnProperty("current")&&(n.current=t)}}function c(e,t,n){let r=function(e,t=()=>{},n=()=>{}){return r=>{if(r instanceof MouseEvent){if(0!==r.button)return;let i=r.clientX,c=r.clientY,o=e=>{let t=e.clientX-i,r=e.clientY-c;return document.body.removeEventListener("mousemove",u),window.removeEventListener("mouseup",o),n(e,{x:e.clientX,y:e.clientY,dx:t,dy:r})},u=t=>{let n=t.clientX-i,r=t.clientY-c;return i=t.clientX,c=t.clientY,e(t,{x:t.clientX,y:t.clientY,dx:n,dy:r})};return document.body.addEventListener("mousemove",u,{passive:!1}),window.addEventListener("mouseup",o,{passive:!1}),t(r,{x:i,y:c},o,u)}{r.preventDefault();let i=r.changedTouches,c=i[0].identifier,o=i[0].clientX,u=i[0].clientY,s=e=>{for(let t of(e.preventDefault(),Array.from(e.changedTouches))){if(t.identifier!==c)continue;let r=t.clientX-o,i=t.clientY-u;return window.removeEventListener("touchend",s,{capture:!1,passive:!1}),window.removeEventListener("touchcancel",s,{capture:!1,passive:!1}),window.removeEventListener("touchmove",l,{capture:!1,passive:!1}),n(e,{x:t.clientX,y:t.clientY,dx:r,dy:i})}},l=t=>{for(let n of(t.preventDefault(),Array.from(t.changedTouches))){if(n.identifier!==c)continue;let r=n.clientX-o,i=n.clientY-u;return o=n.clientX,u=n.clientY,e(t,{x:n.clientX,y:n.clientY,dx:r,dy:i})}};return window.addEventListener("touchend",s,{capture:!1,passive:!1}),window.addEventListener("touchcancel",s,{capture:!1,passive:!1}),window.addEventListener("touchmove",l,{capture:!1,passive:!1}),t(r,{x:o,y:u},s,l)}}}(e,t,n);return{"data-affords":"click",onMouseDown:e=>r(e.nativeEvent),onTouchStart:e=>r(e.nativeEvent)}}function o(e=[]){let t=(0,r.useRef)(),n=(0,r.useRef)();return[(0,r.useMemo)(()=>new Promise((e,r)=>{t.current=e,n.current=r}),e),t.current,n.current]}"undefined"!=typeof window&&window.matchMedia?.("(any-hover: hover)")?.matches},2729:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return r}})}},function(e){e.O(0,[265,267,944,888,774,179],function(){return e(e.s=7843)}),_N_E=e.O()}]);