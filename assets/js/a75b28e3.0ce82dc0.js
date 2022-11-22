"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[41913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"operators",title:"Operators"},i=void 0,p={unversionedId:"reference/test/property-testing/operators",id:"reference/test/property-testing/operators",title:"Operators",description:"1. Gen#zipWith \u2014 Composes this generator with the specified generator to create a cartesian product of elements with the specified function:",source:"@site/docs/reference/test/property-testing/operators.md",sourceDirName:"reference/test/property-testing",slug:"/reference/test/property-testing/operators",permalink:"/reference/test/property-testing/operators",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/property-testing/operators.md",tags:[],version:"current",frontMatter:{id:"operators",title:"Operators"}},l={},c=[],s={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Gen#zipWith")," \u2014 Composes this generator with the specified generator to create a cartesian product of elements with the specified function:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-scala",metastring:"mdoc:compile-only","mdoc:compile-only":!0},'Gen.elements("a", "b", "c").zipWith(Gen.elements("1", "2", "3"))(_ + _)\n  .runCollectN(5)\n// Sample Output: List(b1, a2, c1, b1, b1)\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Gen#zip")," \u2014 Composes this generator with the specified generator to create a cartesian product of elements."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-scala",metastring:"mdoc:compile-only","mdoc:compile-only":!0},'Gen.elements("a", "b", "c").zip(Gen.elements("1", "2", "3"))\n  .runCollectN(5)\n(Gen.elements("a", "b", "c") <*> Gen.elements("1", "2", "3"))\n  .runCollectN(5)\n  \n// Sample Output: List((a,3), (a,3), (c,3), (b,3), (c,2))\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Gen#collect")," \u2014 Maps the values produced by this generator with the specified partial function, discarding any values the partial function is not defined at:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-scala",metastring:"mdoc:compile-only","mdoc:compile-only":!0},"Gen.int(-10, +10)\n  .collect { case n if n % 2 == 0 => n }\n  .runCollectN(5)\n  .debug\n// Smaple Output: List(-6, -8, -2, 4, -6)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Gen#filter")," \u2014 Filters the values produced by this generator, discarding any values that do not meet the specified predicate:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-scala",metastring:"mdoc:compile-only","mdoc:compile-only":!0},"Gen.int(-10, +10).filter(_ % 2 == 0).runCollectN(5) \n// Sample Output: List(-6, 10, 0, -8, 4)\n")))),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," can reduce test performance, especially if many values must be discarded. It is recommended to use combinators such as ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"flatMap")," to create generators of the desired values instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala",metastring:"mdoc:compile-only","mdoc:compile-only":!0},"Gen.int(-10, +10).map(_ * 2).runCollectN(5)\n// Sample Output: List(2, 6, -6, 20, -14)\n")))}m.isMDXComponent=!0}}]);