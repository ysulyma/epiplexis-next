(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[132],{3431:function(e){var n="function"==typeof Float32Array;function t(e,n,t){return(((1-3*t+3*n)*e+(3*t-6*n))*e+3*n)*e}function r(e,n,t){return 3*(1-3*t+3*n)*e*e+2*(3*t-6*n)*e+3*n}function a(e){return e}e.exports=function(e,i,l,s){if(!(0<=e&&e<=1&&0<=l&&l<=1))throw Error("bezier x values must be in [0, 1] range");if(e===i&&l===s)return a;for(var o=n?new Float32Array(11):Array(11),c=0;c<11;++c)o[c]=t(.1*c,e,l);return function(n){return 0===n?0:1===n?1:t(function(n){for(var a=0,i=1;10!==i&&o[i]<=n;++i)a+=.1;var s=a+(n-o[--i])/(o[i+1]-o[i])*.1,c=r(s,e,l);return c>=.001?function(e,n,a,i){for(var l=0;l<4;++l){var s=r(n,a,i);if(0===s)break;var o=t(n,a,i)-e;n-=o/s}return n}(n,s,e,l):0===c?s:function(e,n,r,a,i){var l,s,o=0;do(l=t(s=n+(r-n)/2,a,i)-e)>0?r=s:n=s;while(Math.abs(l)>1e-7&&++o<10);return s}(n,a,a+.1,e,l)}(n),i,s)}}},301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gng/02-trigonometry/01-pythagoras/3d",function(){return t(9232)}])},4975:function(e,n,t){"use strict";t.d(n,{Xz:function(){return b},Vt:function(){return g},YZ:function(){return h},Fg:function(){return y},KO:function(){return j},J5:function(){return x}});var r=t(2729),a=t(5893);let i=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return e.newAnimation([{opacity:0,pointerEvents:"none"},{opacity:a,pointerEvents:"all"}],{delay:n+r,fill:"both",easing:"ease-in",duration:t})};var l=t(7854),s=t(1008),o=t(5152),c=t.n(o),u=t(9008),d=t.n(u),f=t(7294);function p(){let e=(0,r._)(["\n          .lv-player, .lv-canvas {\n            background: transparent !important;\n          }"]);return p=function(){return e},e}let x=c()(()=>t.e(577).then(t.bind(t,577)).then(e=>function(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d(),{children:(0,a.jsx)("style",{children:String.raw(p())})}),(0,a.jsx)(e.Player,{controls:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.Controls.PlayPause,{}),(0,a.jsx)(e.Controls.TimeDisplay,{}),(0,a.jsx)("div",{className:"lv-controls-right",children:(0,a.jsx)(e.Controls.FullScreen,{})})]}),...n})]})}),{loadableGenerated:{webpack:()=>[577]},ssr:!1}),h=(0,f.forwardRef)(function(e,n){return(0,a.jsx)(m,{...e,forwardedRef:n})}),m=c()(()=>Promise.all([t.e(577),t.e(753)]).then(t.bind(t,9753)).then(e=>{let{KTX:n}=e;return function(e){let{forwardedRef:t,...r}=e;return(0,a.jsx)(n,{...r,ref:t})}}),{loadableGenerated:{webpack:()=>[null]},loading:()=>(0,a.jsx)("span",{}),ssr:!1}),b=c()(()=>Promise.all([t.e(577),t.e(29),t.e(491)]).then(t.bind(t,3491)).then(e=>{let{Canvas:n}=e;return n}),{loadableGenerated:{webpack:()=>[3491]},ssr:!1}),g=c()(()=>t.e(577).then(t.bind(t,577)).then(e=>{let{Player:n,usePlayer:t}=e;return function(e){let{children:r,...i}=e;return(0,a.jsx)(l.V,{...i,children:(0,a.jsx)(n.Context.Provider,{value:t(),children:r})})}}),{loadableGenerated:{webpack:()=>[577]},ssr:!1});function j(){var e;void 0!==globalThis.window&&(window.katex=s.Z);let n=(null===(e=globalThis.location)||void 0===e?void 0:e.origin)==="http://localhost:3000"?"":"/epiplexis-next";return(0,a.jsxs)(d(),{children:[(0,a.jsx)("script",{async:!0,src:"".concat(n,"/symbols.tex"),type:"math/tex"}),(0,a.jsx)("script",{async:!0,src:"katex.js"})]})}let y=c()(()=>t.e(577).then(t.bind(t,577)).then(e=>{let{usePlayback:n,useScript:t}=e;return function(e){let{children:r}=e,l=(0,f.useRef)(null),s=n(),o=t();return(0,f.useEffect)(()=>{if(!l.current)return;let e=new MutationObserver(e=>{for(let n of e){let{target:e}=n;if(e instanceof HTMLElement&&(e.classList.contains("katex")||e.classList.contains("katex-display")))for(let n of Array.from(e.querySelectorAll("*[data-anim]"))){let[,e]=n.dataset.anim.split(";");i(s,o.parseStart(e))(n)}}});return e.observe(l.current,{childList:!0,subtree:!0}),()=>e.disconnect()},[s,o]),(0,a.jsx)("div",{ref:l,children:r})}}),{loadableGenerated:{webpack:()=>[577]},ssr:!1})},4161:function(e,n,t){"use strict";t.d(n,{z:function(){return s}});var r=t(5893),a=t(398),i=t(7034),l=t(7294);function s(e){let n=(0,i.A)(),{camera:t,gl:{domElement:s},scene:o}=n;window.scene=o,window.$three=n,t.up.set(0,0,1);let c=(0,l.useRef)();return(0,i.C)(()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.update()}),(0,l.useEffect)(()=>{e.target&&c.current.target.set(...e.target),console.log(c.current),n.controls=c.current},[n,e.target]),(0,r.jsx)(a.z,{args:[t,s],enableDamping:!1,ref:c})}},546:function(e,n,t){"use strict";t.d(n,{CJN:function(){return s},PTH:function(){return a},Y8A:function(){return l},Zoh:function(){return r},k7y:function(){return o},vKx:function(){return i}});let r=15680580,a=14427686,i=2278750,l=1483594,s=2450411,o=14362487},9232:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var r=t(2729),a=t(5893),i=t(5152),l=t.n(i),s=t(7294);let o=l()(()=>t.e(577).then(t.bind(t,577)).then(e=>{let{useScript:n}=e;return function(e){let{children:t,delay:r=0,duration:i=300,start:l=0,endValue:o=1}=e,c=s.Children.only(t),u=n(),d=(0,s.useMemo)(()=>u.playback.newAnimation([{opacity:0,pointerEvents:"none"},{opacity:o,pointerEvents:"all"}],{delay:u.parseStart(l)+r,fill:"both",easing:"ease-in",duration:i}),[r,i,o,u,l]);return(0,a.jsx)(a.Fragment,{children:(0,s.cloneElement)(c,{ref:e=>{null===e?d(e):"object"==typeof e&&"domElement"in e&&d(e.domElement)}})})}}),{loadableGenerated:{webpack:()=>[577]},ssr:!1});var c=t(4975);let u=(e,n)=>{if("material"in e&&e.material){let t=e.material;t.visible=n>0,t.transparent=t.visible&&n<1,t.opacity=n}else if(e.children)for(let t of e.children)u(t,n)},d=Symbol.for("@lqv/playback");d in globalThis||(globalThis[d]=(0,s.createContext)(null));let f=globalThis[d];function p(e,n,t){let r=(0,s.useContext)(f),a=(0,s.useRef)();(0,s.useEffect)(()=>{let t="function"==typeof n?t=>{let r=n(t);r!==a.current&&e(r),a.current=r}:n=>{n!==a.current&&e(n),a.current=n};return r.on("seek",t),r.on("timeupdate",t),t(r.currentTime),()=>{r.off("seek",t),r.off("timeupdate",t)}},"function"==typeof n?t:n)}var x=t(3431),h=t(6410);function m(e){if(e instanceof Array){e.sort((e,n)=>e.startTime-n.startTime);let n=e.map(m);return t=>{let r=0;for(;r<n.length;++r)if(e[r].startTime>t){if(0===r)return e[0].startValue;return n[r-1](t)}return n[e.length-1](t)}}"startValue"in e||(e.startValue=0),"endValue"in e||(e.endValue=1),"easing"in e||(e.easing=e=>e);let{startValue:n,endValue:t,startTime:r,duration:a,easing:i}=e;return e=>(0,h.t7)(n,t,i((0,h.uZ)(0,(e-r)/a,1)))}let b={easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1]},g=l()(()=>t.e(577).then(t.bind(t,577)).then(e=>{let{useScript:n}=e;return function(e){let{children:t,delay:r=0,duration:i=300,start:l=0,endValue:o=1}=e,c=s.Children.only(t),d=m({startTime:n().parseStart(l)+r,duration:i,endValue:o,easing:x(...b.easeInCubic)}),f=(0,s.useRef)(null);return p(e=>{f.current&&u(f.current,e)},d),(0,a.jsx)(a.Fragment,{children:(0,s.cloneElement)(c,{ref:f})})}}),{loadableGenerated:{webpack:()=>[577]},ssr:!1}),j=l()(()=>t.e(577).then(t.bind(t,577)).then(e=>{let{useScript:n}=e;return function(e){let{children:t,enter:r,enterDelay:i=0,enterDuration:l=300,exit:o,exitDelay:c=0,exitDuration:d=300,target:f=1}=e,h=s.Children.only(t),g=n(),j=m([{startTime:g.parseStart(r)+i,duration:l,endValue:f,easing:x(...b.easeInCubic)},{startTime:g.parseStart(o)+c,duration:d,startValue:f,endValue:0,easing:x(...b.easeOutCubic)}]),y=(0,s.useRef)(null);return p(e=>{y.current&&u(y.current,e)},j),(0,a.jsx)(a.Fragment,{children:(0,s.cloneElement)(h,{ref:y})})}}),{loadableGenerated:{webpack:()=>[577]},ssr:!1});var y=t(4161),w=t(9477);let _=(0,s.forwardRef)(function(e,n){let{r:t=.2,color:r,...i}=e;return(0,a.jsxs)("mesh",{...i,ref:n,children:[(0,a.jsx)("sphereGeometry",{args:[t,32,32]}),(0,a.jsx)("meshToonMaterial",{color:r,side:w.DoubleSide})]})}),v=(0,s.forwardRef)(function(e,n){let[t]=(0,s.useState)(()=>new w.Vector3(...e.from)),[r]=(0,s.useState)(()=>new w.Vector3(...e.to)),[i]=(0,s.useState)(()=>new w.Curve);if(i.getPoint=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new w.Vector3;return n.lerpVectors(t,r,e)},e.a){let n;let a=new w.Vector3().subVectors(t,r).normalize(),i=new w.Plane(a,0),s=-i.distanceToPoint(t),o=-i.distanceToPoint(r);p(t=>{let r=(0,h.t7)(s,o,e.a(t));if(r!==n){let e=new w.Plane(a,r);l.current.material.clippingPlanes=[e],n=r}},[])}(0,s.useImperativeHandle)(n,()=>({setTo(e,n,t){r.set(e,n,t),l.current.geometry=new w.TubeGeometry(i,void 0,.01)},mesh:l.current}),[i,r]);let l=(0,s.useRef)();return(0,a.jsxs)("mesh",{ref:l,name:"segment",children:[(0,a.jsx)("tubeGeometry",{args:[i,void 0,.01]}),(0,a.jsx)("meshToonMaterial",{color:16777215})]})});var V=t(546);function C(){let e=(0,r._)(["B(x_2, y_2, z_2)"]);return C=function(){return e},e}function k(){let e=(0,r._)(["C(x_2, y_2, z_1)"]);return k=function(){return e},e}function T(){let e=(0,r._)(["\n        \begin{aligned}\n          \fadeIn{dab}{d(pA, pB)^2} &\fadeIn{dab}{=\n          d(pA, pC)^2 + d(pC, pB)^2}\\\n          &\fadeIn{dz}{= d(pA, pC)^2 + (z_2-z_1)^2}\\\n          \fadeIn{dac}{d(pA, pC)^2} &\fadeIn{dac}{= (x_2 - x_1)^2 + (y_2 - y_1)^2}\\\n          \fadeIn{qed}{d(pA, pB)^2} &\fadeIn{qed}{= (x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}\n        end{aligned}\n      "],["\n        \\begin{aligned}\n          \\fadeIn{dab}{d(\\pA, \\pB)^2} &\\fadeIn{dab}{=\n          d(\\pA, \\pC)^2 + d(\\pC, \\pB)^2}\\\\\n          &\\fadeIn{dz}{= d(\\pA, \\pC)^2 + (z_2-z_1)^2}\\\\\n          \\fadeIn{dac}{d(\\pA, \\pC)^2} &\\fadeIn{dac}{= (x_2 - x_1)^2 + (y_2 - y_1)^2}\\\\\n          \\fadeIn{qed}{d(\\pA, \\pB)^2} &\\fadeIn{qed}{= (x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}\n        \\end{aligned}\n      "]);return T=function(){return e},e}t(5189),t(7881);let z=[5,3,2],A=[-1,5,4],E=new w.Vector3(...z),I=new w.Vector3(...A),S=[A[0],A[1],z[2]],N=new w.Vector3(...S),P=new w.Vector3().subVectors(E,I),F=new w.Vector3().subVectors(N,E),{raw:G}=String,Z=new w.Quaternion;Z.setFromUnitVectors(new w.Vector3(0,1,0),new w.Vector3(0,0,1)).premultiply(new w.Quaternion().setFromUnitVectors(new w.Vector3(-1,0,0),P.clone().setZ(0).normalize()));let R=new w.Quaternion().setFromUnitVectors(new w.Vector3(-1,0,0),F.clone().setZ(0).normalize());function q(){let e=function(){let[e,n]=(0,s.useState)(null);return(0,s.useEffect)(()=>{t.e(577).then(t.bind(t,577)).then(n)},[]),e}(),n=(0,s.useMemo)(()=>e?new e.Script([["back","1"],["aux","1"],["ab","1"],["c","1"],["plane","1"],["dab","1"],["dz","1"],["plane2","1"],["dac","1"],["qed","1"]]):null,[e]);return n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.KO,{}),(0,a.jsxs)(c.J5,{script:n,children:[(0,a.jsx)("section",{className:"h-full w-full dark:text-white","data-affords":"click",style:{backgroundImage:'url("/epiplexis-next/grid.png")'},children:(0,a.jsxs)(c.Xz,{camera:{position:[11.01,9.73,8.79]},onCreated:e=>{e.gl.localClippingEnabled=!0},children:[(0,a.jsx)("ambientLight",{}),(0,a.jsx)("pointLight",{position:[10,10,10]}),(0,a.jsx)(y.z,{}),(0,a.jsx)("axesHelper",{args:[10]}),(0,a.jsx)(_,{name:"a",position:z,color:V.PTH}),(0,a.jsx)(_,{name:"b",position:A,color:V.CJN}),(0,a.jsx)(v,{from:z,to:A,a:M}),(0,a.jsx)(c.Vt,{position:I,children:(0,a.jsxs)("span",{className:"ml-24 block w-max text-xl",children:["distance from ",(0,a.jsx)(c.YZ,{className:"text-red-600",children:"(x_1,y_1,z_1)"})," ","to ",(0,a.jsx)(c.YZ,{className:"text-blue-600",children:"(x_2,y_2,z_2)"}),"?"]})}),(0,a.jsx)(g,{start:"aux",children:(0,a.jsx)(_,{name:"aux",position:S,color:V.k7y})}),(0,a.jsx)(c.Vt,{position:z,children:(0,a.jsx)(o,{start:"ab",children:(0,a.jsx)(c.YZ,{className:"-translate-x-1/2 text-red-600",display:!0,children:"A(x_1, y_1, z_1)"})})}),(0,a.jsx)(c.Vt,{position:A,children:(0,a.jsx)(o,{start:"ab",children:(0,a.jsx)(c.YZ,{className:"-translate-x-1/2 text-blue-600",display:!0,children:G(C())})})}),(0,a.jsx)(c.Vt,{position:S,children:(0,a.jsx)(o,{start:"c",children:(0,a.jsx)(c.YZ,{className:"-translate-x-1/2 text-pink-600",display:!0,children:G(k())})})}),(0,a.jsx)(j,{enter:"plane",enterDuration:150,exit:"plane2",target:.5,children:(0,a.jsxs)("mesh",{name:"plane",position:I.clone().addScaledVector(P,.5),quaternion:Z,children:[(0,a.jsx)("planeGeometry",{args:[2*P.length(),1*P.length()]}),(0,a.jsx)("meshToonMaterial",{color:V.vKx,side:w.DoubleSide})]})}),(0,a.jsx)(g,{start:"plane2",endValue:.5,children:(0,a.jsxs)("mesh",{name:"plane2",position:E.clone().addScaledVector(F,.5),quaternion:R,children:[(0,a.jsx)("planeGeometry",{args:[2*F.length(),F.length()]}),(0,a.jsx)("meshToonMaterial",{color:V.vKx,side:w.DoubleSide})]})})]})}),(0,a.jsx)(c.Fg,{children:(0,a.jsx)(c.YZ,{className:"absolute bottom-20 right-8 rounded-md bg-gray-200/50 p-2 text-xl shadow-lg dark:bg-stone-800/50",display:!0,id:"pyth3","data-from-first":"dab",children:G(T())})})]})]}):null}let M=m({startTime:0,duration:700,easing:x(...b.easeInCubic)})},5189:function(){},7881:function(){}},function(e){e.O(0,[265,737,267,398,192,888,774,179],function(){return e(e.s=301)}),_N_E=e.O()}]);