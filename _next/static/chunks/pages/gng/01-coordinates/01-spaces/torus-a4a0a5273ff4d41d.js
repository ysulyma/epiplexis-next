(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{6337:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gng/01-coordinates/01-spaces/torus",function(){return r(8157)}])},546:function(e,t,r){"use strict";r.d(t,{CJN:function(){return u},PTH:function(){return s},Y8A:function(){return i},Zoh:function(){return n},k7y:function(){return c},vKx:function(){return o}});let n=15680580,s=14427686,o=2278750,i=1483594,u=2450411,c=14362487},8157:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(5893),s=r(9477);class o extends s.BufferGeometry{constructor(e=(e,t,r)=>r.set(e,t,Math.cos(e)*Math.sin(t)),t=8,r=8){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:r};let n=[],o=[],i=[],u=[],c=new s.Vector3,a=new s.Vector3,l=new s.Vector3,h=new s.Vector3,f=new s.Vector3,d=t+1;for(let n=0;n<=r;n++){let s=n/r;for(let r=0;r<=t;r++){let n=r/t;e(n,s,a),o.push(a.x,a.y,a.z),n-1e-5>=0?(e(n-1e-5,s,l),h.subVectors(a,l)):(e(n+1e-5,s,l),h.subVectors(l,a)),s-1e-5>=0?(e(n,s-1e-5,l),f.subVectors(a,l)):(e(n,s+1e-5,l),f.subVectors(l,a)),c.crossVectors(h,f).normalize(),i.push(c.x,c.y,c.z),u.push(n,s)}}for(let e=0;e<r;e++)for(let r=0;r<t;r++){let t=e*d+r,s=e*d+r+1,o=(e+1)*d+r+1,i=(e+1)*d+r;n.push(t,s,i),n.push(s,o,i)}this.setIndex(n),this.setAttribute("position",new s.Float32BufferAttribute(o,3)),this.setAttribute("normal",new s.Float32BufferAttribute(i,3)),this.setAttribute("uv",new s.Float32BufferAttribute(u,2))}}var i=r(7034),u=r(7294);let c=(0,u.createContext)(null);function a(){let{camera:e}=(0,i.A)(),t=(0,u.useContext)(c);return(0,u.useEffect)(()=>{let r=r=>{t&&r.getModifierState("Shift")&&(console.log(l(e.position)),console.log(l(t.target)))};return document.body.addEventListener("click",r),()=>{document.body.removeEventListener("click",r)}},[e,t]),null}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Object.values(e).map(e=>parseFloat(e.toFixed(t)))}var h=r(546),f=r(398),d=r(5029);(0,i.e)({ParametricGeometry:o});let m=[7.27,-5.04,4.09],x=[0,0,0],p=()=>(0,n.jsxs)("mesh",{name:"torus",children:[(0,n.jsx)("torusGeometry",{args:[4,1,32,64]}),(0,n.jsx)("meshPhongMaterial",{color:h.Y8A,side:s.DoubleSide})]}),j=()=>(0,n.jsxs)("mesh",{name:"circle 1",position:[4,0,0],rotation:[Math.PI/2,0,0],children:[(0,n.jsx)("torusGeometry",{args:[1,.05,32,32]}),(0,n.jsx)("meshStandardMaterial",{color:h.CJN})]}),b=()=>(0,n.jsxs)("mesh",{name:"circle 2",position:[0,0,0],children:[(0,n.jsx)("torusGeometry",{args:[5,.05,16,64]}),(0,n.jsx)("meshStandardMaterial",{color:h.PTH})]}),g=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("ambientLight",{intensity:Math.PI}),(0,n.jsx)("pointLight",{decay:0,intensity:Math.PI,position:[5,3,5]}),(0,n.jsx)(p,{}),(0,n.jsx)(j,{}),(0,n.jsx)(b,{})]});function w(){let[e,t]=(0,u.useState)(null);return(0,n.jsx)("div",{className:"h-screen w-screen rounded-md bg-grid",children:(0,n.jsx)(d.Xz,{camera:{near:.1,far:1e3,up:[0,0,1],position:m,zoom:1},children:(0,n.jsxs)(c.Provider,{value:e,children:[(0,n.jsx)(a,{}),(0,n.jsx)(f.z,{enableDamping:!1,target:x,ref:e=>t(e)}),(0,n.jsx)(u.Suspense,{fallback:null,children:(0,n.jsx)(g,{})})]})})})}}},function(e){e.O(0,[737,398,29,888,774,179],function(){return e(e.s=6337)}),_N_E=e.O()}]);