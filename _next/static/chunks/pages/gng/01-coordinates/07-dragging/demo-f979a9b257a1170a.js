(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8425],{4752:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gng/01-coordinates/07-dragging/demo",function(){return t(6502)}])},6502:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(5893),i=t(7294);function o(){return(0,r.jsx)("main",{className:"min-w-screen min-h-screen",children:(0,r.jsx)(u,{title:"Demo",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}function u(e){let{children:n,title:t}=e,o=(0,i.useId)(),{anchorEvents:u,ref:l}=function(){let e=(0,i.useRef)(null),n=(0,i.useRef)({x:0,y:0});return{anchorEvents:function(e){let n=(0,i.useCallback)(n=>{var t;null===(t=e.up)||void 0===t||t.call(e,n),r()},[e.up]),t=(0,i.useCallback)(n=>{var t;null===(t=e.leave)||void 0===t||t.call(e,n),r()},[e.leave]),r=(0,i.useCallback)(()=>{document.body.removeEventListener("pointerleave",t),document.body.removeEventListener("pointermove",e.move),document.body.removeEventListener("pointerup",n)},[e.move,t,n]);return{onPointerDown:(0,i.useCallback)(r=>{var i;null===(i=e.down)||void 0===i||i.call(e,r),document.body.addEventListener("pointerleave",t),document.body.addEventListener("pointermove",e.move),document.body.addEventListener("pointerup",n)},[e.move,n,t])}}((0,i.useMemo)(()=>({down:t=>{if(!e.current)return;let r=e.current.getBoundingClientRect();n.current={x:r.x-t.clientX,y:r.y-t.clientY}},move:t=>{if(!e.current)return;let r=t.clientX+n.current.x,i=t.clientY+n.current.y;e.current.style.translate="".concat(r,"px ").concat(i,"px")}}),[])),ref:e}}();return(0,r.jsxs)("aside",{"aria-labelledby":o,className:"max-w-[600px] overflow-hidden rounded-md border border-solid border-gray-200 shadow",ref:l,role:"dialog",children:[(0,r.jsx)("header",{className:"select-none bg-purple-600 px-2 py-1 text-white",id:o,...u,children:t}),(0,r.jsx)("div",{className:"px-2 py-1",children:n})]})}}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=4752)}),_N_E=e.O()}]);