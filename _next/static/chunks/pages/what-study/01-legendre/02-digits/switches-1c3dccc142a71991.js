(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60],{6855:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/what-study/01-legendre/02-digits/switches",function(){return n(3374)}])},8090:function(e,t,n){"use strict";n.d(t,{U:function(){return c},cn:function(){return s}});var r=n(3967),l=n.n(r),o=n(512),i=n(7294),a=n(8388);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,o.W)(t))}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l(),r=i.Children.only(t),{className:o,...a}=r.props,s=function(e,t){let{className:l,...s}=e;return(0,i.createElement)(r.type,{className:n(o,l),...a,...s,ref:t})};return s.displayName=e,(0,i.forwardRef)(s)}},3374:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(5893),l=n(8090),o=n(7462),i=n(7294);function a(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function s(e){let t=(0,i.useRef)(e);return(0,i.useEffect)(()=>{t.current=e}),(0,i.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}let c=(null==globalThis?void 0:globalThis.document)?i.useLayoutEffect:()=>{};n(3935);let u=(0,i.forwardRef)((e,t)=>{let{children:n,...r}=e,l=i.Children.toArray(n),a=l.find(h);if(a){let e=a.props.children,n=l.map(t=>t!==a?t:i.Children.count(e)>1?i.Children.only(null):(0,i.isValidElement)(e)?e.props.children:null);return(0,i.createElement)(d,(0,o.Z)({},r,{ref:t}),(0,i.isValidElement)(e)?(0,i.cloneElement)(e,void 0,n):null)}return(0,i.createElement)(d,(0,o.Z)({},r,{ref:t}),n)});u.displayName="Slot";let d=(0,i.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,i.isValidElement)(n)?(0,i.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let l=e[r],o=t[r];/^on[A-Z]/.test(r)?l&&o?n[r]=(...e)=>{o(...e),l(...e)}:l&&(n[r]=l):"style"===r?n[r]={...l,...o}:"className"===r&&(n[r]=[l,o].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?a(t,n.ref):n.ref}):i.Children.count(n)>1?i.Children.only(null):null});d.displayName="SlotClone";let f=({children:e})=>(0,i.createElement)(i.Fragment,null,e);function h(e){return(0,i.isValidElement)(e)&&e.type===f}let p=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,i.forwardRef)((e,n)=>{let{asChild:r,...l}=e,a=r?u:t;return(0,i.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,i.createElement)(a,(0,o.Z)({},l,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),m="Switch",[b,v]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>(0,i.createContext)(e));return function(n){let r=(null==n?void 0:n[e])||t;return(0,i.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let l=(0,i.createContext)(r),o=n.length;function a(t){let{scope:n,children:r,...a}=t,s=(null==n?void 0:n[e][o])||l,c=(0,i.useMemo)(()=>a,Object.values(a));return(0,i.createElement)(s.Provider,{value:c},r)}return n=[...n,r],a.displayName=t+"Provider",[a,function(n,a){let s=(null==a?void 0:a[e][o])||l,c=(0,i.useContext)(s);if(c)return c;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let l=n(e)[`__scope${r}`];return{...t,...l}},{});return(0,i.useMemo)(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(m),[g,x]=b(m),w=(0,i.forwardRef)((e,t)=>{let{__scopeSwitch:n,name:r,checked:l,defaultChecked:c,required:u,disabled:d,value:f="on",onCheckedChange:h,...m}=e,[b,v]=(0,i.useState)(null),x=function(...e){return(0,i.useCallback)(a(...e),e)}(t,e=>v(e)),w=(0,i.useRef)(!1),y=!b||!!b.closest("form"),[N=!1,C]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,l]=function({defaultProp:e,onChange:t}){let n=(0,i.useState)(e),[r]=n,l=(0,i.useRef)(r),o=s(t);return(0,i.useEffect)(()=>{l.current!==r&&(o(r),l.current=r)},[r,l,o]),n}({defaultProp:t,onChange:n}),o=void 0!==e,a=o?e:r,c=s(n);return[a,(0,i.useCallback)(t=>{if(o){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else l(t)},[o,e,l,c])]}({prop:l,defaultProp:c,onChange:h});return(0,i.createElement)(g,{scope:n,checked:N,disabled:d},(0,i.createElement)(p.button,(0,o.Z)({type:"button",role:"switch","aria-checked":N,"aria-required":u,"data-state":E(N),"data-disabled":d?"":void 0,disabled:d,value:f},m,{ref:x,onClick:function(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}(e.onClick,e=>{C(e=>!e),y&&(w.current=e.isPropagationStopped(),w.current||e.stopPropagation())})})),y&&(0,i.createElement)(k,{control:b,bubbles:!w.current,name:r,value:f,checked:N,required:u,disabled:d,style:{transform:"translateX(-100%)"}}))}),y=(0,i.forwardRef)((e,t)=>{let{__scopeSwitch:n,...r}=e,l=x("SwitchThumb",n);return(0,i.createElement)(p.span,(0,o.Z)({"data-state":E(l.checked),"data-disabled":l.disabled?"":void 0},r,{ref:t}))}),k=e=>{let{control:t,checked:n,bubbles:r=!0,...l}=e,a=(0,i.useRef)(null),s=function(e){let t=(0,i.useRef)({value:e,previous:e});return(0,i.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(n),u=function(e){let[t,n]=(0,i.useState)(void 0);return c(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,l;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,l=t.blockSize}else r=e.offsetWidth,l=e.offsetHeight;n({width:r,height:l})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(t);return(0,i.useEffect)(()=>{let e=a.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(s!==n&&t){let l=new Event("click",{bubbles:r});t.call(e,n),e.dispatchEvent(l)}},[s,n,r]),(0,i.createElement)("input",(0,o.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:n},l,{tabIndex:-1,ref:a,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function E(e){return e?"checked":"unchecked"}let N=(0,i.forwardRef)((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)(w,{className:(0,l.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-stone-900 data-[state=unchecked]:bg-stone-200 dark:focus-visible:ring-stone-300 dark:focus-visible:ring-offset-stone-950 dark:data-[state=checked]:bg-stone-50 dark:data-[state=unchecked]:bg-stone-800",n),...o,ref:t,children:(0,r.jsx)(y,{className:(0,l.cn)("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-stone-950")})})});N.displayName=w.displayName;let C=e=>(0,r.jsx)("th",{className:"px-4 py-2 text-right",...e}),j=e=>(0,r.jsx)("td",{className:"px-4 py-2 text-center",...e});function _(){let e=["Bacon","Egg","Cheese","Hashbrown","Avocado","Tomato","Onion"],[t,n]=(0,i.useState)(0);return(0,r.jsxs)("main",{children:[(0,r.jsx)("h1",{className:"mx-auto mb-4 text-center text-3xl",children:"Make the perfect sandwich"}),(0,r.jsxs)("div",{className:"mx-auto flex max-w-lg justify-between",children:[(0,r.jsx)("table",{children:(0,r.jsx)("tbody",{children:e.map((e,l)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)(C,{children:e}),(0,r.jsx)(j,{children:(0,r.jsx)(N,{checked:t&1<<l,onCheckedChange:()=>n(e=>e^1<<l)})})]},e))})}),(0,r.jsxs)("output",{className:"text-4xl",children:[(0,r.jsxs)("p",{children:["Binary:"," ",(0,r.jsx)("span",{className:"font-mono",children:t.toString(2).padStart(e.length,"0")})]}),(0,r.jsxs)("p",{children:["Decimal: ",(0,r.jsx)("span",{className:"font-mono",children:t})]})]})]})]})}},7462:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[944,888,774,179],function(){return e(e.s=6855)}),_N_E=e.O()}]);