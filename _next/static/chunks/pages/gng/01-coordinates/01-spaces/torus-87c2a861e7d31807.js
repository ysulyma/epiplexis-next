(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{6337:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gng/01-coordinates/01-spaces/torus",function(){return r(8157)}])},546:function(e,t,r){"use strict";r.d(t,{CJN:function(){return u},PTH:function(){return n},Zoh:function(){return s},cLT:function(){return i},k7y:function(){return c},vKx:function(){return o}});let s=15680580,n=14427686,o=2278750,i=3900150,u=2450411,c=14362487},8157:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var s=r(5893),n=r(9477);class o extends n.BufferGeometry{constructor(e=(e,t,r)=>r.set(e,t,Math.cos(e)*Math.sin(t)),t=8,r=8){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:r};let s=[],o=[],i=[],u=[],c=new n.Vector3,a=new n.Vector3,l=new n.Vector3,h=new n.Vector3,f=new n.Vector3,d=t+1;for(let s=0;s<=r;s++){let n=s/r;for(let r=0;r<=t;r++){let s=r/t;e(s,n,a),o.push(a.x,a.y,a.z),s-1e-5>=0?(e(s-1e-5,n,l),h.subVectors(a,l)):(e(s+1e-5,n,l),h.subVectors(l,a)),n-1e-5>=0?(e(s,n-1e-5,l),f.subVectors(a,l)):(e(s,n+1e-5,l),f.subVectors(l,a)),c.crossVectors(h,f).normalize(),i.push(c.x,c.y,c.z),u.push(s,n)}}for(let e=0;e<r;e++)for(let r=0;r<t;r++){let t=e*d+r,n=e*d+r+1,o=(e+1)*d+r+1,i=(e+1)*d+r;s.push(t,n,i),s.push(n,o,i)}this.setIndex(s),this.setAttribute("position",new n.Float32BufferAttribute(o,3)),this.setAttribute("normal",new n.Float32BufferAttribute(i,3)),this.setAttribute("uv",new n.Float32BufferAttribute(u,2))}}var i=r(9270),u=r(7294);let c=(0,u.createContext)(void 0);function a(){let{camera:e}=(0,i.A)(),t=(0,u.useContext)(c);return(0,u.useEffect)(()=>{let r=r=>{t&&r.getModifierState("Shift")&&(console.log(l(e.position)),console.log(l(t.target)))};return document.body.addEventListener("click",r),()=>{document.body.removeEventListener("click",r)}},[e,t]),null}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Object.values(e).map(e=>parseFloat(e.toFixed(t)))}var h=r(546),f=r(398),d=r(5029);(0,i.e)({ParametricGeometry:o});let x=[7.27,-5.04,4.09],m=[0,0,0],p=()=>(0,s.jsxs)("mesh",{name:"torus",children:[(0,s.jsx)("torusGeometry",{args:[4,1,32,64]}),(0,s.jsx)("meshPhongMaterial",{color:h.vKx,side:n.DoubleSide})]}),j=()=>(0,s.jsxs)("mesh",{name:"circle 1",position:[4,0,0],rotation:[Math.PI/2,0,0],children:[(0,s.jsx)("torusGeometry",{args:[1,.05,32,32]}),(0,s.jsx)("meshStandardMaterial",{color:h.cLT})]}),b=()=>(0,s.jsxs)("mesh",{name:"circle 2",position:[0,0,0],children:[(0,s.jsx)("torusGeometry",{args:[5,.05,16,64]}),(0,s.jsx)("meshStandardMaterial",{color:h.Zoh})]}),g=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("ambientLight",{}),(0,s.jsx)("pointLight",{intensity:1,position:[5,3,5]}),(0,s.jsx)(p,{}),(0,s.jsx)(j,{}),(0,s.jsx)(b,{})]});function v(){let[e,t]=(0,u.useState)();return(0,s.jsx)("div",{style:{height:"100vh",width:"100vw"},children:(0,s.jsx)(d.Xz,{camera:{near:.1,far:1e3,up:[0,0,1],position:x,zoom:1},onCreated:e=>{let{gl:t}=e;t.setClearColor("#252934")},children:(0,s.jsxs)(c.Provider,{value:e,children:[(0,s.jsx)(a,{}),(0,s.jsx)(f.z,{enableDamping:!1,target:m,ref:e=>t(e)}),(0,s.jsx)(u.Suspense,{fallback:null,children:(0,s.jsx)(g,{})})]})})})}}},function(e){e.O(0,[737,398,29,888,774,179],function(){return e(e.s=6337)}),_N_E=e.O()}]);