(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{7854:function(e,t,r){"use strict";r.d(t,{V:function(){return g}});var n,l,o=r(7462),i=r(7294),a=r(745),s=r(9477),u=r(7034);let c=new s.Vector3,d=new s.Vector3,f=new s.Vector3,m=new s.Vector2;function h(e,t,r){let n=c.setFromMatrixPosition(e.matrixWorld);n.project(t);let l=r.width/2,o=r.height/2;return[n.x*l+l,-(n.y*o)+o]}let p=e=>1e-10>Math.abs(e)?0:e;function y(e,t,r=""){let n="matrix3d(";for(let r=0;16!==r;r++)n+=p(t[r]*e.elements[r])+(15!==r?",":")");return r+n}let x=(n=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>y(e,n)),b=(l=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>y(e,l(t),"translate(-50%,-50%)")),g=i.forwardRef(({children:e,eps:t=.001,style:r,className:n,prepend:l,center:y,fullscreen:g,portal:v,distanceFactor:_,sprite:M=!1,transform:P=!1,occlude:w,onOcclude:E,castShadow:j,receiveShadow:C,material:O,geometry:S,zIndexRange:W=[16777271,0],calculatePosition:k=h,as:R="div",wrapperClass:T,pointerEvents:$="auto",...z},A)=>{let{gl:F,camera:V,scene:D,size:L,raycaster:N,events:I,viewport:H}=(0,u.A)(),[G]=i.useState(()=>document.createElement(R)),Z=i.useRef(),X=i.useRef(null),Y=i.useRef(0),q=i.useRef([0,0]),B=i.useRef(null),J=i.useRef(null),K=(null==v?void 0:v.current)||I.connected||F.domElement.parentNode,Q=i.useRef(null),U=i.useRef(!1),ee=i.useMemo(()=>{var e;return w&&"blending"!==w||Array.isArray(w)&&w.length&&(e=w[0])&&"object"==typeof e&&"current"in e},[w]);i.useLayoutEffect(()=>{let e=F.domElement;w&&"blending"===w?(e.style.zIndex=`${Math.floor(W[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[w]),i.useLayoutEffect(()=>{if(X.current){let e=Z.current=a.createRoot(G);if(D.updateMatrixWorld(),P)G.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=k(X.current,V,L);G.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return K&&(l?K.prepend(G):K.appendChild(G)),()=>{K&&K.removeChild(G),e.unmount()}}},[K,P]),i.useLayoutEffect(()=>{T&&(G.className=T)},[T]);let et=i.useMemo(()=>P?{position:"absolute",top:0,left:0,width:L.width,height:L.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:y?"translate3d(-50%,-50%,0)":"none",...g&&{top:-L.height/2,left:-L.width/2,width:L.width,height:L.height},...r},[r,y,g,L,P]),er=i.useMemo(()=>({position:"absolute",pointerEvents:$}),[$]);i.useLayoutEffect(()=>{var t,l;U.current=!1,P?null==(t=Z.current)||t.render(i.createElement("div",{ref:B,style:et},i.createElement("div",{ref:J,style:er},i.createElement("div",{ref:A,className:n,style:r,children:e})))):null==(l=Z.current)||l.render(i.createElement("div",{ref:A,style:et,className:n,children:e}))});let en=i.useRef(!0);(0,u.C)(e=>{if(X.current){V.updateMatrixWorld(),X.current.updateWorldMatrix(!0,!1);let e=P?q.current:k(X.current,V,L);if(P||Math.abs(Y.current-V.zoom)>t||Math.abs(q.current[0]-e[0])>t||Math.abs(q.current[1]-e[1])>t){let t=function(e,t){let r=c.setFromMatrixPosition(e.matrixWorld),n=d.setFromMatrixPosition(t.matrixWorld),l=r.sub(n),o=t.getWorldDirection(f);return l.angleTo(o)>Math.PI/2}(X.current,V),r=!1;ee&&(Array.isArray(w)?r=w.map(e=>e.current):"blending"!==w&&(r=[D]));let n=en.current;if(r){let e=function(e,t,r,n){let l=c.setFromMatrixPosition(e.matrixWorld),o=l.clone();o.project(t),m.set(o.x,o.y),r.setFromCamera(m,t);let i=r.intersectObjects(n,!0);if(i.length){let e=i[0].distance;return l.distanceTo(r.ray.origin)<e}return!0}(X.current,V,N,r);en.current=e&&!t}else en.current=!t;n!==en.current&&(E?E(!en.current):G.style.display=en.current?"block":"none");let l=Math.floor(W[0]/2),o=w?ee?[W[0],l]:[l-1,0]:W;if(G.style.zIndex=`${function(e,t,r){if(t instanceof s.PerspectiveCamera||t instanceof s.OrthographicCamera){let n=c.setFromMatrixPosition(e.matrixWorld),l=d.setFromMatrixPosition(t.matrixWorld),o=n.distanceTo(l),i=(r[1]-r[0])/(t.far-t.near),a=r[1]-i*t.far;return Math.round(i*o+a)}}(X.current,V,o)}`,P){let[e,t]=[L.width/2,L.height/2],r=V.projectionMatrix.elements[5]*t,{isOrthographicCamera:n,top:l,left:o,bottom:i,right:a}=V,s=x(V.matrixWorldInverse),u=n?`scale(${r})translate(${p(-(a+o)/2)}px,${p((l+i)/2)}px)`:`translateZ(${r}px)`,c=X.current.matrixWorld;M&&((c=V.matrixWorldInverse.clone().transpose().copyPosition(c).scale(X.current.scale)).elements[3]=c.elements[7]=c.elements[11]=0,c.elements[15]=1),G.style.width=L.width+"px",G.style.height=L.height+"px",G.style.perspective=n?"":`${r}px`,B.current&&J.current&&(B.current.style.transform=`${u}${s}translate(${e}px,${t}px)`,J.current.style.transform=b(c,1/((_||10)/400)))}else{let t=void 0===_?1:function(e,t){if(t instanceof s.OrthographicCamera)return t.zoom;if(!(t instanceof s.PerspectiveCamera))return 1;{let r=c.setFromMatrixPosition(e.matrixWorld),n=d.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*r.distanceTo(n))}}(X.current,V)*_;G.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}q.current=e,Y.current=V.zoom}}if(!ee&&Q.current&&!U.current){if(P){if(B.current){let e=B.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=V;if(t||S)z.scale&&(Array.isArray(z.scale)?z.scale instanceof s.Vector3?Q.current.scale.copy(z.scale.clone().divideScalar(1)):Q.current.scale.set(1/z.scale[0],1/z.scale[1],1/z.scale[2]):Q.current.scale.setScalar(1/z.scale));else{let t=(_||10)/400,r=e.clientWidth*t,n=e.clientHeight*t;Q.current.scale.set(r,n,1)}U.current=!0}}}else{let t=G.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/H.factor,r=t.clientWidth*e,n=t.clientHeight*e;Q.current.scale.set(r,n,1),U.current=!0}Q.current.lookAt(e.camera.position)}}});let el=i.useMemo(()=>({vertexShader:P?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[P]);return i.createElement("group",(0,o.Z)({},z,{ref:X}),w&&!ee&&i.createElement("mesh",{castShadow:j,receiveShadow:C,ref:Q},S||i.createElement("planeGeometry",null),O||i.createElement("shaderMaterial",{side:s.DoubleSide,vertexShader:el.vertexShader,fragmentShader:el.fragmentShader})))})},4017:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return i},default:function(){return a}});let n=r(8754);r(5893),r(7294);let l=n._(r(4866));function o(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function a(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let a=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=a?a().then(o):Promise.resolve(o(()=>null))}):(delete n.webpack,delete n.modules,i(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3966:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=r(8754)._(r(7294)).default.createContext(null)},4866:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let n=r(8754)._(r(7294)),l=r(3966),o=[],i=[],a=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function s(){if(!o){let t=new u(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!a){let e=r.webpack?r.webpack():r.modules;e&&i.push(t=>{for(let r of e)if(t.includes(r))return s()})}function c(e,t){!function(){s();let e=n.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let i=n.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),n.default.useMemo(()=>{var t;return i.loading||i.error?n.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?n.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return c.preload=()=>s(),c.displayName="LoadableComponent",n.default.forwardRef(c)}(s,e)}function d(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return d(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{d(o).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(a=!0,t());d(i,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let f=c},5152:function(e,t,r){e.exports=r(4017)},9008:function(e,t,r){e.exports=r(3709)},2729:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{_:function(){return n}})}}]);