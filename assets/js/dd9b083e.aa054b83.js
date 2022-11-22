"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[62645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={id:"index",title:"Introduction to ZIO Query",sidebar_label:"ZIO Query"},o=void 0,l={unversionedId:"index",id:"index",title:"Introduction to ZIO Query",description:"A ZQuery[R, E, A] is a purely functional description of an effectual query that may contain requests from one or more data sources, requires an environment R, and may fail with an E or succeed with an A.",source:"@site/node_modules/@zio.dev/zio-query/index.md",sourceDirName:".",slug:"/",permalink:"/zio-query/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Query",sidebar_label:"ZIO Query"},sidebar:"sidebar",next:{title:"Creating Data Sources",permalink:"/zio-query/creating-data-sources"}},s={},u=[{value:"Installation",id:"installation",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"ZQuery[R, E, A]")," is a purely functional description of an effectual query that may contain requests from one or more data sources, requires an environment ",(0,a.kt)("inlineCode",{parentName:"p"},"R"),", and may fail with an ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," or succeed with an ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,a.kt)("p",null,"Requests that can be performed in parallel, as expressed by ",(0,a.kt)("inlineCode",{parentName:"p"},"zipWithPar")," and combinators derived from it, will automatically be batched. Requests that must be performed sequentially, as expressed by ",(0,a.kt)("inlineCode",{parentName:"p"},"zipWith")," and combinators derived from it, will automatically be pipelined. This allows for aggressive data source specific optimizations. Requests can also be deduplicated and cached."),(0,a.kt)("p",null,"This allows for writing queries in a high level, compositional style, with confidence that they will automatically be optimized. For example, consider the following query from a user service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"lazy val getAllUserIds: ZQuery[Any, Nothing, List[Int]]    = ???\ndef getUserNameById(id: Int): ZQuery[Any, Nothing, String] = ???\n\nlazy val userQuery: ZQuery[Any, Nothing, List[String]] = for {\n  userIds   <- getAllUserIds\n  userNames <- ZQuery.foreachPar(userIds)(getUserNameById)\n} yield userNames\n")),(0,a.kt)("p",null,"This would normally require N + 1 queries, one for ",(0,a.kt)("inlineCode",{parentName:"p"},"getAllUserIds")," and one for each call to ",(0,a.kt)("inlineCode",{parentName:"p"},"getUserNameById"),". In contrast, ",(0,a.kt)("inlineCode",{parentName:"p"},"ZQuery")," will automatically optimize this to two queries, one for ",(0,a.kt)("inlineCode",{parentName:"p"},"userIds")," and one for ",(0,a.kt)("inlineCode",{parentName:"p"},"userNames"),"."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Include ZIO Query in your project by adding the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-query" % "0.3.2"\n')))}p.isMDXComponent=!0}}]);