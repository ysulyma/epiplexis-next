(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{4251:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gng/02-trigonometry/03-arclength/3d",function(){return n(3630)}])},4975:function(e,t,n){"use strict";n.d(t,{Xz:function(){return p},Vt:function(){return j},YZ:function(){return g},Fg:function(){return b},KO:function(){return v},J5:function(){return x}});var r=n(2729),s=n(5893);let l=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return e.newAnimation([{opacity:0,pointerEvents:"none"},{opacity:s,pointerEvents:"all"}],{delay:t+r,fill:"both",easing:"ease-in",duration:n})};var i=n(7854),a=n(1008),o=n(5152),c=n.n(o),u=n(9008),d=n.n(u),h=n(7294);function f(){let e=(0,r._)(["\n          .lv-player, .lv-canvas {\n            background: transparent !important;\n          }"]);return f=function(){return e},e}let x=c()(()=>n.e(577).then(n.bind(n,577)).then(e=>function(t){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d(),{children:(0,s.jsx)("style",{children:String.raw(f())})}),(0,s.jsx)(e.Player,{controls:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.Controls.PlayPause,{}),(0,s.jsx)(e.Controls.TimeDisplay,{}),(0,s.jsx)("div",{className:"lv-controls-right",children:(0,s.jsx)(e.Controls.FullScreen,{})})]}),...t})]})}),{loadableGenerated:{webpack:()=>[577]},ssr:!1}),g=(0,h.forwardRef)(function(e,t){return(0,s.jsx)(m,{...e,forwardedRef:t})}),m=c()(()=>Promise.all([n.e(577),n.e(753)]).then(n.bind(n,9753)).then(e=>{let{KTX:t}=e;return function(e){let{forwardedRef:n,...r}=e;return(0,s.jsx)(t,{...r,ref:n})}}),{loadableGenerated:{webpack:()=>[null]},loading:()=>(0,s.jsx)("span",{}),ssr:!1}),p=c()(()=>Promise.all([n.e(577),n.e(29),n.e(491)]).then(n.bind(n,3491)).then(e=>{let{Canvas:t}=e;return t}),{loadableGenerated:{webpack:()=>[3491]},ssr:!1}),j=c()(()=>n.e(577).then(n.bind(n,577)).then(e=>{let{Player:t,usePlayer:n}=e;return function(e){let{children:r,...l}=e;return(0,s.jsx)(i.V,{...l,children:(0,s.jsx)(t.Context.Provider,{value:n(),children:r})})}}),{loadableGenerated:{webpack:()=>[577]},ssr:!1});function v(){var e;void 0!==globalThis.window&&(window.katex=a.Z);let t=(null===(e=globalThis.location)||void 0===e?void 0:e.origin)==="http://localhost:3000"?"":"/epiplexis-next";return(0,s.jsxs)(d(),{children:[(0,s.jsx)("script",{async:!0,src:"".concat(t,"/symbols.tex"),type:"math/tex"}),(0,s.jsx)("script",{async:!0,src:"katex.js"})]})}let b=c()(()=>n.e(577).then(n.bind(n,577)).then(e=>{let{usePlayback:t,useScript:n}=e;return function(e){let{children:r}=e,i=(0,h.useRef)(null),a=t(),o=n();return(0,h.useEffect)(()=>{if(!i.current)return;let e=new MutationObserver(e=>{for(let t of e){let{target:e}=t;if(e instanceof HTMLElement&&(e.classList.contains("katex")||e.classList.contains("katex-display")))for(let t of Array.from(e.querySelectorAll("*[data-anim]"))){let[,e]=t.dataset.anim.split(";");l(a,o.parseStart(e))(t)}}});return e.observe(i.current,{childList:!0,subtree:!0}),()=>e.disconnect()},[a,o]),(0,s.jsx)("div",{ref:i,children:r})}}),{loadableGenerated:{webpack:()=>[577]},ssr:!1})},4161:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(5893),s=n(398),l=n(7034),i=n(7294);function a(e){let t=(0,l.A)(),{camera:n,gl:{domElement:a},scene:o}=t;window.scene=o,window.$three=t,n.up.set(0,0,1);let c=(0,i.useRef)();return(0,l.C)(()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.update()}),(0,i.useEffect)(()=>{e.target&&c.current.target.set(...e.target),console.log(c.current),t.controls=c.current},[t,e.target]),(0,r.jsx)(s.z,{args:[n,a],enableDamping:!1,ref:c})}},546:function(e,t,n){"use strict";n.d(t,{CJN:function(){return a},PTH:function(){return s},Y8A:function(){return i},Zoh:function(){return r},k7y:function(){return o},vKx:function(){return l}});let r=15680580,s=14427686,l=2278750,i=1483594,a=2450411,o=14362487},3630:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),s=n(4975),l=n(4161),i=n(546),a=n(7294),o=n(9477);class c extends o.Curve{getPoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new o.Vector3,n=4*(e=-1+2*e)*Math.cos(6*Math.PI*e),r=5*e*Math.sin(4*Math.PI*e),s=7*e+1*Math.sin(2*Math.PI*e);return t.set(n,r,s)}constructor(){super()}}let u=new c;function d(){let[{segments:e,linearApproximation:t,arclength:n},c]=(0,a.useState)(()=>({segments:5,linearApproximation:new o.CurvePath,arclength:0})),d=e=>{let t=u.getPoint(0),n=0,r=[];for(let s=1;s<=e;s++){let l=u.getPoint(s/e);r.push(new o.LineCurve3(t,l)),n+=t.distanceTo(l),t=l}let s=new o.CurvePath;s.curves=r,c({segments:e,linearApproximation:s,arclength:n})};return(0,a.useEffect)(()=>d(5),[]),(0,r.jsxs)("main",{className:"flex h-screen w-screen flex-col",children:[(0,r.jsx)("fieldset",{children:(0,r.jsxs)("div",{className:"mb-4 flex items-start",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("label",{htmlFor:"segments",children:"Segments"}),(0,r.jsx)("input",{id:"segments",type:"range",onChange:e=>{d(+e.target.value)},min:1,max:200,value:e}),(0,r.jsx)("span",{className:"w-4 text-right",children:e})]}),(0,r.jsx)("table",{className:"ml-8 align-top",children:(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{className:"text-red-500",children:[(0,r.jsx)("th",{className:"pr-2 text-right",scope:"row",children:"Approximate length"}),(0,r.jsx)("td",{children:(0,r.jsx)("output",{htmlFor:"segments",children:n.toFixed(4)})})]})})})]})}),(0,r.jsxs)(s.Xz,{className:"rounded-md bg-grid",camera:{position:[11.01,9.73,8.79]},onCreated:e=>{e.gl.localClippingEnabled=!0},children:[(0,r.jsx)("ambientLight",{}),(0,r.jsx)("pointLight",{position:[10,10,10]}),(0,r.jsx)(l.z,{}),(0,r.jsx)("axesHelper",{args:[10]}),(0,r.jsxs)("mesh",{children:[(0,r.jsx)("tubeGeometry",{args:[u,256,.1,8,!1]}),(0,r.jsx)("meshNormalMaterial",{})]}),t&&(0,r.jsxs)("mesh",{children:[(0,r.jsx)("tubeGeometry",{args:[t,128,.1,8,!1]}),(0,r.jsx)("meshPhongMaterial",{color:i.Zoh})]})]})]})}}},function(e){e.O(0,[265,737,398,192,888,774,179],function(){return e(e.s=4251)}),_N_E=e.O()}]);