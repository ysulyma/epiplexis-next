(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{5400:function(e,t,n){Promise.resolve().then(n.bind(n,8344))},8344:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(3827),s=n(1573),i=n(3618),l=n(9631),c=n(4090),o=n(6093),u=n(6771),a=n(7526),d=n(3769);function x(e){let{onChange:t,value:n}=e,s=(0,c.useRef)(null),i=(0,c.useMemo)(()=>(0,a.dz)((e,n)=>{let[r,i]=(0,d.K)(s.current,n.x,n.y);null==t||t((Math.atan2(-i,r)+u.EP)%u.EP)},()=>{document.body.classList.add("dragging")},()=>{document.body.classList.remove("dragging")}),[t]);return(0,r.jsxs)("svg",{"aria-valuemin":0,"aria-valuemax":360,"aria-valuenow":n/u.v4,className:"mx-auto block h-20",viewBox:"-50 -50 100 100",children:[(0,r.jsx)("circle",{className:"fill-none stroke-black dark:stroke-white",cx:"0",cy:"0",r:45}),(0,r.jsx)("circle",{className:"fill-[#ff0070] hover:cursor-grab",cx:45*Math.cos(n),cy:-(45*Math.sin(n)),r:"5",ref:s,...i})]})}var h=n(6141),j=n(1548),f=n(3773),m=n(29),p=n(8132),g=n(4611);let b=(0,p.Z)((0,g.XR)(()=>({cube:[1,.5,.5],cylinder:{z:.5,theta:.75*u.EP},torus:[.05*u.EP,.7*u.EP]})));function y(){let e=(0,o._)(["{}^circ"],["{}^\\circ"]);return y=function(){return e},e}function v(){let e=(0,o._)(["{}^circ"],["{}^\\circ"]);return v=function(){return e},e}let{raw:S}=String,E=e=>parseFloat(e.currentTarget.value);function N(e){return t=>{b.setState(n=>({cube:[...n.cube.slice(0,e),parseFloat(t.currentTarget.value),...n.cube.slice(e+1)]}))}}let M=e=>(0,r.jsx)("input",{className:"ml-2 w-16 outline outline-1 outline-gray-200",type:"number",...e});function Z(e){return t=>{b.setState(n=>({torus:[...n.torus.slice(0,e),t,...n.torus.slice(e+1)]}))}}function k(){return(0,r.jsxs)("form",{className:"flex w-full justify-around pt-2",children:[(0,r.jsx)(P,{}),(0,r.jsx)(C,{}),(0,r.jsx)(U,{})]})}function P(){let e=b(e=>e.cube);return(0,r.jsxs)("table",{children:[(0,r.jsx)("caption",{children:(0,r.jsx)(h.Y,{children:"I\\times I\\times I"})}),(0,r.jsx)("tbody",{children:(0,f.w6)(0,3).map(t=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("input",{min:0,max:1,step:u.Nb,onChange:N(t),type:"range",value:e[t]})}),(0,r.jsx)("td",{children:(0,r.jsx)(M,{min:0,max:1,step:u.Nb,onChange:N(t),value:e[t]})})]},t))})]})}function C(){let{z:e,theta:t}=b(e=>e.cylinder,m.Z),n=(0,c.useCallback)(e=>b.setState(t=>({cylinder:{...t.cylinder,z:parseFloat(e.currentTarget.value)}})),[]),s=(0,c.useCallback)(e=>b.setState(t=>({cylinder:{...t.cylinder,theta:e}})),[]);return(0,r.jsxs)("table",{children:[(0,r.jsx)("caption",{children:(0,r.jsx)(h.Y,{children:"I\\times S^1"})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("input",{onChange:n,min:0,max:1,step:u.Nb,type:"range",value:e})}),(0,r.jsx)("td",{children:(0,r.jsx)(M,{onChange:n,min:0,max:1,step:u.Nb,value:e})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(x,{onChange:s,value:t})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(M,{onChange:e=>s(E(e)*u.v4),min:0,max:360,step:u.Nb,value:(0,j.$)(t/u.v4)}),(0,r.jsx)(h.Y,{children:S(y())})]})]})]})]})}function U(){let e=b(e=>e.torus);return(0,r.jsxs)("table",{children:[(0,r.jsx)("caption",{children:(0,r.jsx)(h.Y,{children:"S^1\\times S^1"})}),(0,r.jsx)("tbody",{children:(0,f.w6)(0,2).map(t=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(x,{onChange:Z(t),value:e[t]})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(M,{onChange:e=>Z(t)(E(e)*u.v4),min:0,max:360,step:u.Nb,value:(0,j.$)(e[t]/u.v4)}),(0,r.jsx)(h.Y,{children:S(v())})]})]},t))})]})}var w=n(6376);let I=new w.BoxGeometry(1,1,1);function z(e){let t=(0,c.useRef)(null);(0,c.useEffect)(()=>b.subscribe(e=>e.cube,e=>{t.current.position.set(...e)}),[]);let n=b.getState().cube;return(0,r.jsxs)("group",{...e,children:[(0,r.jsxs)("lineSegments",{name:"cube skeleton",position:[.5,.5,.5],children:[(0,r.jsx)("edgesGeometry",{args:[I]}),(0,r.jsx)("lineBasicMaterial",{color:"white"})]}),(0,r.jsxs)("mesh",{name:"cube",position:[.5,.5,.5],children:[(0,r.jsx)("boxGeometry",{args:[1,1,1]}),(0,r.jsx)("meshStandardMaterial",{color:"red",opacity:.5,transparent:!0})]}),(0,r.jsx)("mesh",{name:"cube point",position:n,ref:t,children:(0,r.jsx)("sphereGeometry",{args:[u.ix,u.ZU,u.ZU]})})]})}let{cos:F,sin:G}=Math;function L(e){let{r:t,z:n,theta:r}=e;return[t*F(r),t*G(r),n]}function _(e,t,n,r){return[(e+t*F(n))*F(r),(e+t*F(n))*G(r),t*G(n)]}function R(e){let t=(0,c.useRef)(null);(0,c.useEffect)(()=>b.subscribe(e=>e.cylinder,e=>{let{z:n,theta:r}=e;t.current.position.set(...L({r:.5,z:2*n,theta:r}))}),[]);let{z:n,theta:s}=b.getState().cylinder;return(0,r.jsxs)("group",{...e,children:[(0,r.jsxs)("mesh",{position:[0,0,1],rotation:[u.EP/4,0,0],children:[(0,r.jsx)("cylinderGeometry",{args:[.5,.5,2,u.ZU,u.ZU,!0]}),(0,r.jsx)("meshStandardMaterial",{color:"blue",side:w.DoubleSide})]}),(0,r.jsx)("mesh",{position:L({r:.5,z:2*n,theta:s}),ref:t,children:(0,r.jsx)("sphereGeometry",{args:[u.ix,u.ZU,u.ZU]})})]})}function Y(e){let t=(0,c.useRef)(null);(0,c.useEffect)(()=>b.subscribe(e=>e.torus,e=>{let[n,r]=e;t.current.position.set(..._(2,.5,n,r))}),[]);let[n,s]=b.getState().torus;return(0,r.jsxs)("group",{...e,children:[(0,r.jsxs)("mesh",{name:"torus",children:[(0,r.jsx)("torusGeometry",{args:[2,.5,u.ZU,u.ZU]}),(0,r.jsx)("meshStandardMaterial",{color:"green",side:w.DoubleSide})]}),(0,r.jsx)("mesh",{name:"torus point",position:_(2,.5,n,s),ref:t,children:(0,r.jsx)("sphereGeometry",{args:[u.ix,u.ZU,u.ZU]})})]})}let O=[2.31,-5.86,2.11],B=[2.3,-.29,-1.81],D=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("ambientLight",{intensity:Math.PI}),(0,r.jsx)("pointLight",{decay:0,intensity:Math.PI,position:[0,-2,2]}),(0,r.jsx)("pointLight",{decay:0,intensity:Math.PI,position:[0,2,2]}),(0,r.jsx)("pointLight",{decay:0,intensity:Math.PI,position:[4,-1,2]}),(0,r.jsx)(z,{position:[-3,-.5,-.5]}),(0,r.jsx)(R,{position:[0,0,-1]}),(0,r.jsx)(Y,{position:[5,0,0]})]});function T(){let[e,t]=(0,c.useState)();return(0,r.jsxs)("main",{className:"flex h-screen flex-col",children:[(0,r.jsx)(k,{}),(0,r.jsx)("div",{className:"bg-grid flex-1",children:(0,r.jsx)(l.Xz,{camera:{near:.1,far:1e3,up:[0,0,1],position:O,zoom:1},children:(0,r.jsxs)(s.gZ.Provider,{value:e,children:[(0,r.jsx)(s.aU,{}),(0,r.jsx)(i.z,{enableDamping:!1,target:B,ref:e=>t(e)}),(0,r.jsx)(c.Suspense,{fallback:null,children:(0,r.jsx)(D,{})})]})})})]})}},6141:function(e,t,n){"use strict";n.d(t,{Y:function(){return l}});var r=n(3827),s=n(2492),i=n(4090);function l(e){let{className:t,children:n,display:l=!1}=e,c=(0,i.useRef)(null);return(0,i.useEffect)(()=>{c.current&&s.Z.render(null!=n?n:"",c.current,{displayMode:l,throwOnError:!1})},[n,l]),(0,r.jsx)("span",{className:t,ref:c})}n(8128)},1573:function(e,t,n){"use strict";n.d(t,{aU:function(){return l},gZ:function(){return i}});var r=n(4595),s=n(4090);let i=(0,s.createContext)(null);function l(){let{camera:e}=(0,r.A)(),t=(0,s.useContext)(i);return(0,s.useEffect)(()=>{let n=n=>{t&&n.getModifierState("Shift")&&(console.log(c(e.position)),console.log(c(t.target)))};return document.body.addEventListener("click",n),()=>{document.body.removeEventListener("click",n)}},[e,t]),null}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Object.values(e).map(e=>parseFloat(e.toFixed(t)))}},6771:function(e,t,n){"use strict";n.d(t,{EP:function(){return s},Nb:function(){return c},ZU:function(){return l},ix:function(){return i},v4:function(){return r}});let r=Math.PI/180,s=2*Math.PI,i=.03,l=32,c=.01},1548:function(e,t,n){"use strict";function r(e,t,n){return e+n*(t-e)}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseFloat(e.toFixed(t))}n.d(t,{$:function(){return s},t:function(){return r}})}},function(e){e.O(0,[689,800,954,595,478,877,52,971,69,744],function(){return e(e.s=5400)}),_N_E=e.O()}]);