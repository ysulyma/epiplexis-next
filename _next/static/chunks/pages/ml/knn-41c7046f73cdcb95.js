(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7614],{1121:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ml/knn",function(){return r(6825)}])},3522:function(e,t,r){"use strict";r.d(t,{GG:function(){return l},v4:function(){return n}});let n=Math.PI/180,l=2*Math.PI},6825:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893),l=r(7294),i=r(3522);let u=["red","green","blue"],a={granularity:3,dotRadius:1,drawRadius:5};function o(){let[e,t]=(0,l.useState)("red"),r=(0,l.useRef)(null);return(0,n.jsxs)("div",{className:"h-screen w-screen rounded-md p-2",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[u.map(r=>(0,n.jsx)("button",{"aria-selected":r===e,className:"h-6 w-6 border border-solid opacity-30 aria-selected:opacity-100",onClick:()=>t(r),style:{backgroundColor:r},type:"button"},r)),(0,n.jsx)("button",{className:"border border-solid p-1",type:"button",onClick:()=>{var e;return null===(e=r.current)||void 0===e?void 0:e.clear()},children:"Clear"})]}),(0,n.jsx)(c,{color:e,ref:r})]})}let c=(0,l.forwardRef)(function(e,t){let{color:r}=e,u=(0,l.useRef)(null),o=(0,l.useRef)(null);s(u),s(o);let c=(0,l.useRef)([]),d=(0,l.useCallback)(e=>{let t=o.current;if(!t)return;let n=t.getContext("2d");if(!n)return;let l=t.getBoundingClientRect(),i=e.clientX-l.left,u=e.clientY-l.top;c.current.push({x:i,y:u,color:r}),n.beginPath(),n.fillStyle=r,n.arc(i,u,a.drawRadius,0,2*Math.PI),n.fill(),f()},[r]),f=(0,l.useCallback)(()=>{let e=u.current;if(!e)return;let t=e.getContext("2d");if(t&&(t.clearRect(0,0,e.width,e.height),0!==c.current.length))for(let r=a.granularity;r<e.width;r+=a.granularity)for(let n=a.granularity;n<e.height;n+=a.granularity){let e=function(e,t){let r,n=Number.POSITIVE_INFINITY;for(let l of t){let t=Math.hypot(e.x-l.x,e.y-l.y);t<n&&(n=t,r=l)}if(!r)throw Error("Empty array of points");return r}({x:r,y:n},c.current);t.beginPath(),t.fillStyle=e.color,t.arc(r,n,a.dotRadius,0,i.GG),t.fill()}},[]);return(0,l.useImperativeHandle)(t,()=>({clear:()=>{var e;c.current=[],f();let t=o.current;t&&(null===(e=t.getContext("2d"))||void 0===e||e.clearRect(0,0,t.width,t.height))}})),(0,n.jsxs)("div",{className:"relative h-80 w-full border border-gray-600 border-solid",children:[(0,n.jsx)("canvas",{className:"pointer-events-none absolute h-full w-full opacity-50",ref:u}),(0,n.jsx)("canvas",{className:"absolute h-full w-full",onPointerDown:d,ref:o})]})});function s(e){(0,l.useEffect)(()=>{function t(){let t=e.current;if(!t)return;let r=t.getBoundingClientRect(),n=r.width,l=r.height;t.height=l,t.width=n}return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[e.current])}}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=1121)}),_N_E=e.O()}]);