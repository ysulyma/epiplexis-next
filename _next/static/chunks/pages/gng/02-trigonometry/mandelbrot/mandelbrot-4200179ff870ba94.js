(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5118],{9141:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gng/02-trigonometry/mandelbrot/mandelbrot",function(){return n(8654)}])},8654:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893),i=n(6410),u=n(7294);function a(){let e=(0,u.useRef)(null),[t,n]=(0,u.useState)({xMin:-2,xMax:.5,yMin:-1,yMax:1}),a=()=>{let t=e.current;if(!t)return;let{height:n,width:r}=t.getBoundingClientRect();t.height=n,t.width=n},l=(0,u.useCallback)(()=>{let n=e.current;if(!n)return;let r=n.getContext("2d");if(!r)return;let{height:u,width:a}=n,l=r.getImageData(0,0,a,u),o=l.data;for(let e=0;e<a;e++)for(let n=0;n<u;n++){let r=function(e){var t,n,r,i;let u={re:0,im:0},a=0;for(;a<=100&&4>(t=u).re*t.re+t.im*t.im;)n=u,r=u,u={re:(i={re:n.re*r.re-n.im*r.im,im:n.re*r.im+n.im*r.re}).re+e.re,im:i.im+e.im},a++;return a}({re:(0,i.t7)(t.xMin,t.xMax,e/a),im:(0,i.t7)(t.yMin,t.yMax,n/u)}),l=3*Math.floor(r/100),f=105*Math.floor(r/100),c=161*Math.floor(r/100),m=(n*a+e)*4;o[m]=l,o[m+1]=f,o[m+2]=c,o[m+3]=255}r.putImageData(l,0,0)},[t.xMax,t.xMin,t.yMax,t.yMin]);return(0,u.useEffect)(()=>{a(),l()},[l]),(0,u.useRef)(null),(0,r.jsx)("canvas",{className:"h-screen w-screen",onWheel:e=>{},ref:e})}}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=9141)}),_N_E=e.O()}]);