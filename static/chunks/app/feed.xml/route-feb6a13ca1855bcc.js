(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{6277:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,7970,23)),Promise.resolve().then(r.bind(r,1635)),Promise.resolve().then(r.bind(r,4107))},8872:(e,t,r)=>{"use strict";r.d(t,{D:()=>c,N:()=>d});var n=r(2115);let s=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=(0,n.createContext)(void 0),o={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,n.useContext)(i))&&void 0!==e?e:o},d=e=>(0,n.useContext)(i)?n.createElement(n.Fragment,null,e.children):n.createElement(m,e),u=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:l=!0,storageKey:o="theme",themes:c=u,defaultTheme:d=r?"system":"light",attribute:m="data-theme",value:v,children:b,nonce:A})=>{let[y,p]=(0,n.useState)(()=>f(o,d)),[k,w]=(0,n.useState)(()=>f(o)),j=v?Object.values(v):c,E=(0,n.useCallback)(e=>{let n=e;if(!n)return;"system"===e&&r&&(n=g());let a=v?v[n]:n,i=t?x():null,o=document.documentElement;if("class"===m?(o.classList.remove(...j),a&&o.classList.add(a)):a?o.setAttribute(m,a):o.removeAttribute(m),l){let e=s.includes(d)?d:null,t=s.includes(n)?n:e;o.style.colorScheme=t}null==i||i()},[]),N=(0,n.useCallback)(e=>{p(e);try{localStorage.setItem(o,e)}catch(e){}},[e]),$=(0,n.useCallback)(t=>{w(g(t)),"system"===y&&r&&!e&&E("system")},[y,e]);(0,n.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener($),$(e),()=>e.removeListener($)},[$]),(0,n.useEffect)(()=>{let e=e=>{e.key===o&&N(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),(0,n.useEffect)(()=>{E(null!=e?e:y)},[e,y]);let C=(0,n.useMemo)(()=>({theme:y,setTheme:N,forcedTheme:e,resolvedTheme:"system"===y?k:y,themes:r?[...c,"system"]:c,systemTheme:r?k:void 0}),[y,N,e,k,r,c]);return n.createElement(i.Provider,{value:C},n.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:l,storageKey:o,themes:c,defaultTheme:d,attribute:m,value:v,children:b,attrs:j,nonce:A}),b)},h=(0,n.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:l,enableColorScheme:i,defaultTheme:o,value:c,attrs:d,nonce:u})=>{let m="system"===o,h="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,f=i?s.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",x=(e,t=!1,n=!0)=>{let a=c?c[e]:e,l=t?e+"|| ''":`'${a}'`,o="";return i&&n&&!t&&s.includes(e)&&(o+=`d.style.colorScheme = '${e}';`),"class"===r?o+=t||a?`c.add(${l})`:"null":a&&(o+=`d[s](n,${l})`),o},g=e?`!function(){${h}${x(e)}}()`:l?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${x("dark")}}else{${x("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${x(c?"x[e]":"e",!0)}}${m?"":"else{"+x(o,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${x(c?"x[e]":"e",!0)}}else{${x(o,!1,!1)};}${f}}catch(t){}}();`;return n.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:g}})},()=>!0),f=(e,t)=>{let r;if(!l){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},x=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},6046:(e,t,r)=>{"use strict";var n=r(6658);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},5353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return s}});let n=r(2115);function s(e,t){let r=(0,n.useRef)(()=>{}),s=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),s.current()):(r.current=a(e,n),s.current=a(t,n))}:e||t,[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8534:(e,t,r)=>{"use strict";r.d(t,{B:()=>o,Providers:()=>c});var n=r(5155),s=r(2115),a=r(6046),l=r(8872);function i(){let{resolvedTheme:e,setTheme:t}=(0,l.D)();return(0,s.useEffect)(()=>{let r=window.matchMedia("(prefers-color-scheme: dark)");function n(){e===(r.matches?"dark":"light")&&t("system")}return n(),r.addEventListener("change",n),()=>{r.removeEventListener("change",n)}},[e,t]),null}let o=(0,s.createContext)({});function c(e){let{children:t}=e,r=function(e){let t=(0,s.useRef)(void 0);return(0,s.useEffect)(()=>{t.current=e},[e]),t.current}((0,a.usePathname)());return(0,n.jsx)(o.Provider,{value:{previousPathname:r},children:(0,n.jsxs)(l.N,{attribute:"class",disableTransitionOnChange:!0,children:[(0,n.jsx)(i,{}),t]})})}},4107:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ArticleLayout:()=>u});var n=r(5155),s=r(2115),a=r(6046),l=r(8534),i=r(2548),o=r(3463);function c(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.A)(t,"prose dark:prose-invert"),...r})}function d(e){return(0,n.jsx)("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",...e,children:(0,n.jsx)("path",{d:"M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function u(e){var t;let{article:r,children:o}=e,u=(0,a.useRouter)(),{previousPathname:m}=(0,s.useContext)(l.B);return(0,n.jsx)(i.mc,{className:"mt-16 lg:mt-32",children:(0,n.jsx)("div",{className:"xl:relative",children:(0,n.jsxs)("div",{className:"mx-auto max-w-2xl",children:[m&&(0,n.jsx)("button",{type:"button",onClick:()=>u.back(),"aria-label":"Go back to articles",className:"group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20",children:(0,n.jsx)(d,{className:"h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"})}),(0,n.jsxs)("article",{children:[(0,n.jsxs)("header",{className:"flex flex-col",children:[(0,n.jsx)("h1",{className:"mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100",children:r.title}),(0,n.jsxs)("time",{dateTime:r.date,className:"order-first flex items-center text-base text-zinc-400 dark:text-zinc-500",children:[(0,n.jsx)("span",{className:"h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"}),(0,n.jsx)("span",{className:"ml-3",children:(t=r.date,new Date(`${t}T00:00:00Z`).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}))})]})]}),(0,n.jsx)(c,{className:"mt-8","data-mdx-content":!0,children:o})]})]})})})}},2548:(e,t,r)=>{"use strict";r.d(t,{mc:()=>o});var n=r(5155),s=r(2115),a=r(3463);let l=(0,s.forwardRef)(function(e,t){let{className:r,children:s,...l}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.A)("sm:px-8",r),...l,children:(0,n.jsx)("div",{className:"mx-auto w-full max-w-7xl lg:px-8",children:s})})}),i=(0,s.forwardRef)(function(e,t){let{className:r,children:s,...l}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.A)("relative px-4 sm:px-8 lg:px-12",r),...l,children:(0,n.jsx)("div",{className:"mx-auto max-w-2xl lg:max-w-5xl",children:s})})}),o=(0,s.forwardRef)(function(e,t){let{children:r,...s}=e;return(0,n.jsx)(l,{ref:t,...s,children:(0,n.jsx)(i,{children:r})})})},1635:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n={src:"/spotlight/_next/static/media/planetaria-design-system.d4cfce90.png",height:872,width:1310,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAANlBMVEUKFh8lMEE+RlgyO00vJ2wbIytNLJscITUqImspHlZxQFR2Y0ZDKoxMNXBdL6A7LnVVdmQoVVqZxCWkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nAXBhwEAEBAAscNX3f7LSjARkYhgursCWJ7Vx32YltJqbWx1MuEDFukA+ZqjeogAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},3463:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t)){var a=t.length;for(r=0;r<a;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n)}else for(n in t)t[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(n&&(n+=" "),n+=t);return n}}},e=>{var t=t=>e(e.s=t);e.O(0,[970,441,517,358],()=>t(6277)),_N_E=e.O()}]);