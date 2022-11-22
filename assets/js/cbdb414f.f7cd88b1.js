"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[69848],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"overview_platforms",title:"Platforms"},i=void 0,l={unversionedId:"overview/overview_platforms",id:"overview/overview_platforms",title:"Platforms",description:"ZIO provides a consistent interface across platforms to the maximum extent possible, allowing developers to write code once and deploy it everywhere. However, there are some unavoidable differences between platforms to be aware of.",source:"@site/docs/overview/platforms.md",sourceDirName:"overview",slug:"/overview/overview_platforms",permalink:"/overview/overview_platforms",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/overview/platforms.md",tags:[],version:"current",frontMatter:{id:"overview_platforms",title:"Platforms"},sidebar:"overview_sidebar",previous:{title:"Performance",permalink:"/overview/overview_performance"}},s={},c=[{value:"JVM",id:"jvm",level:2},{value:"Scala.js",id:"scalajs",level:2},{value:"Scala Native",id:"scala-native",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ZIO provides a consistent interface across platforms to the maximum extent possible, allowing developers to write code once and deploy it everywhere. However, there are some unavoidable differences between platforms to be aware of."),(0,a.kt)("h2",{id:"jvm"},"JVM"),(0,a.kt)("p",null,"ZIO supports Java versions 8 and above and Scala versions 2.11, 2.12, 2.13, and 3.x."),(0,a.kt)("p",null,"On the JVM, effects may be executed on a blocking thread pool using methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO.blocking")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO.attemptBlocking"),". See the documentation on ",(0,a.kt)("a",{parentName:"p",href:"/overview/overview_creating_effects"},"Creating Effects")," for further discussion on blocking operations."),(0,a.kt)("h2",{id:"scalajs"},"Scala.js"),(0,a.kt)("p",null,"ZIO supports Scala.js 1.0."),(0,a.kt)("p",null,"While ZIO is a zero dependency library, some basic capabilities of the platform are assumed. In particular, due to the absence of implementations for certain ",(0,a.kt)("inlineCode",{parentName:"p"},"java.time")," methods in Scala.js, users must bring their own ",(0,a.kt)("inlineCode",{parentName:"p"},"java.time")," dependency. The one used by ZIO in its own internal test suites is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cquiroz/scala-java-time"},"scala-java-time"),". It can be added as a dependency like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "io.github.cquiroz" %%% "scala-java-time" % "2.2.0",\n  "io.github.cquiroz" %%% "scala-java-time-tzdb" % "2.2.0"\n)\n')),(0,a.kt)("p",null,"Because of the single threaded execution model of Javascript, blocking operations are not supported on Scala.js. In addition, several other methods are not supported or are unsafe on Scala.js:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"readLine")," method in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Console")," service is not supported because reading a line from the console blocks until input is received and the underlying method from the Scala standard library is not implemented on Scala.js."),(0,a.kt)("li",{parentName:"ul"},"The synchronous execution methods on ",(0,a.kt)("inlineCode",{parentName:"li"},"Runtime")," are not safe. All of these methods return a value synchronously and may require blocking if the effect includes asynchronous operations, including yield points introduced by the runtime to guarantee fairness. Users should use asynchronous execution methods instead.")),(0,a.kt)("h2",{id:"scala-native"},"Scala Native"),(0,a.kt)("p",null,"Support for Scala Native is currently experimental. More details will be added regarding support for the Scala Native platform when they are available."))}u.isMDXComponent=!0}}]);