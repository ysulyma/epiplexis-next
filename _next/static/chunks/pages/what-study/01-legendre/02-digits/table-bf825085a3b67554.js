(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[760],{9192:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/what-study/01-legendre/02-digits/table",function(){return t(888)}])},888:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),s=t(6410),a=t(7294);let i=e=>(0,r.jsx)("th",{className:"px-4 py-2",...e}),u=e=>(0,r.jsx)("td",{className:"px-4 py-2 text-right",...e});function l(){let[e,n]=(0,a.useState)(42),t=e=>{n(Number(e.target.value))},l=(0,s.w6)(2,36).reduce((e,n,t)=>(t%9==0&&e.push([]),e[e.length-1].push(n),e),[]);return(0,r.jsxs)("main",{children:[(0,r.jsxs)("p",{children:["Choose a number between ",1," and ",100," to see its representation in different bases."]}),(0,r.jsxs)("fieldset",{className:"mx-auto my-4 flex w-fit",children:[(0,r.jsx)("input",{type:"range",min:1,max:100,value:e,onChange:t}),(0,r.jsx)("input",{className:"ml-4 w-16 text-right",type:"number",min:1,max:100,value:e,onChange:t})]}),(0,r.jsx)("div",{className:"mx-auto my-4 flex w-fit justify-between gap-8",children:l.map((n,t)=>(0,r.jsxs)("table",{className:"border border-solid border-gray-200 dark:border-gray-800",children:[(0,r.jsx)("thead",{className:"bg-gray-100 dark:bg-gray-700",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)(i,{children:"Base"}),(0,r.jsx)(i,{children:"Representation"})]})}),(0,r.jsx)("tbody",{children:n.map(n=>(0,r.jsxs)("tr",{className:"even:bg-gray-100 dark:even:bg-gray-700",children:[(0,r.jsx)(u,{children:n}),(0,r.jsx)(u,{children:e.toString(n)})]},n))})]},t))})]})}},6410:function(e,n,t){"use strict";function r(e,n,t){return e+t*(n-e)}function s(e,n,t){return Math.min(t,Math.max(e,n))}t.d(n,{t7:function(){return r},uZ:function(){return s},w6:function(){return function e(n,t){return void 0===t?e(0,n):Array(t-n).fill(null).map((e,t)=>n+t)}}})}},function(e){e.O(0,[888,774,179],function(){return e(e.s=9192)}),_N_E=e.O()}]);