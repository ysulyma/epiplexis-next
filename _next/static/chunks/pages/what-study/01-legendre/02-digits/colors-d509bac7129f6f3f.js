(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[191],{3582:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/what-study/01-legendre/02-digits/colors",function(){return n(8688)}])},8688:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n(5893),r=n(7294);let l={r:"Red",g:"Green",b:"Blue"},a=["r","g","b"];function c(){let{color:e,r:t,g:n,b:c,setColor:u,setComponent:i}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#ffffff",[t,n]=(0,r.useState)(e),s=parseInt(t.slice(1,3),16),l=parseInt(t.slice(3,5),16),a=parseInt(t.slice(5,7),16);return(0,r.useMemo)(()=>({color:t,setColor:n,r:s,g:l,b:a,setComponent:(e,t)=>{let r={r:s,g:l,b:a};r[e]=t,n("#"+[r.r,r.g,r.b].map(e=>e.toString(16).padStart(2,"0")).join(""))}}),[a,t,l,s])}("#ff0000");return(0,s.jsxs)("main",{className:"flex h-full text-xl",children:[(0,s.jsx)("table",{children:(0,s.jsx)("tbody",{children:a.map(e=>{let r={r:t,g:n,b:c}[e],a=t=>{i(e,parseInt(t.currentTarget.value,10))};return(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"pr-4 text-right",children:l[e]}),(0,s.jsxs)("td",{className:"flex items-center gap-4",children:[(0,s.jsx)("input",{onChange:a,type:"range",min:0,max:255,value:r}),(0,s.jsx)("input",{className:"w-16",onChange:a,type:"number",min:0,max:255,value:r})]})]},e)})})}),(0,s.jsxs)("div",{className:"flex h-full flex-col items-center px-20 py-5 text-center font-mono",children:[(0,s.jsx)("input",{className:"block",onChange:e=>u(e.currentTarget.value),type:"color",value:e}),e]}),(0,s.jsx)("div",{className:"flex-1",style:{backgroundColor:e}})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=3582)}),_N_E=e.O()}]);