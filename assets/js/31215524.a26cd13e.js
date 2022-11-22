"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[85333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"index",title:"Introduction to ZIO Crypto",sidebar_label:"ZIO Crypto"},a=void 0,c={unversionedId:"index",id:"index",title:"Introduction to ZIO Crypto",description:"ZIO Crypto is a ZIO-idiomatic wrapper over Java's basic cryptographic functions.",source:"@site/node_modules/@zio.dev/zio-crypto/index.md",sourceDirName:".",slug:"/",permalink:"/zio-crypto/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Crypto",sidebar_label:"ZIO Crypto"},sidebar:"sidebar",next:{title:"Secure Random",permalink:"/zio-crypto/secure-random"}},s={},l=[{value:"Project Goals",id:"project-goals",level:2},{value:"Cryptographic Implementations and Dependencies",id:"cryptographic-implementations-and-dependencies",level:3},{value:"NIST-Recommendations and Correctness",id:"nist-recommendations-and-correctness",level:3},{value:"Installation",id:"installation",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ZIO Crypto is a ZIO-idiomatic wrapper over Java's basic cryptographic functions.\nIt provides hashing, secure random generation, and HMAC signatures and verifications."),(0,o.kt)("h2",{id:"project-goals"},"Project Goals"),(0,o.kt)("h3",{id:"cryptographic-implementations-and-dependencies"},"Cryptographic Implementations and Dependencies"),(0,o.kt)("p",null,"We wish to have as few dependencies as possible this project.\nSo, when cryptographic primitives are available via Java\nbuilt-ins, we opt to use them."),(0,o.kt)("p",null,"However, more than not having dependencies,\nwe do not want to offer implementations of any\ncryptographic primitives.\nSo, when a new primitive is required and not\navailable via a Java built-in, we use a package.\nServices using these new packages should be added\nunder new ",(0,o.kt)("inlineCode",{parentName:"p"},"zio.crypto")," Maven packages."),(0,o.kt)("h3",{id:"nist-recommendations-and-correctness"},"NIST-Recommendations and Correctness"),(0,o.kt)("p",null,"We wish to offer the best-practice algorithms according to\nNational Institute of Standards and Technology (NIST)."),(0,o.kt)("p",null,"One common form of error in security is using\na non-recommended algorithm with the correct interface.\nIn an effort to keep our library easy-to-use,\nwe try to limit the number of algorithms\noffered to NIST-recommended algorithms and limit\nless well-known and less well-used algorithms."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sbt"},'libraryDependencies += "dev.zio" %% "zio-crypto" % "0.0.0+102-23de4b47+20221120-2038-SNAPSHOT"\n')))}d.isMDXComponent=!0}}]);