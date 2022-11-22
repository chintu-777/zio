"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[43250],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=i,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},53177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={id:"changelog",title:"Changelog"},l="Version history",o={unversionedId:"changelog",id:"changelog",title:"Changelog",description:"Note: this is a manually maintained list of important changes. Because of having auto-release from CI, this",source:"@site/node_modules/@zio.dev/zio-aws/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/zio-aws/changelog",draft:!1,tags:[],version:"current",frontMatter:{id:"changelog",title:"Changelog"},sidebar:"sidebar",previous:{title:"Examples",permalink:"/zio-aws/examples"},next:{title:"Migration guide",permalink:"/zio-aws/migration-guide"}},s={},p=[{value:"5.x.x.x",id:"5xxx",level:4},{value:"4.17.104.1",id:"4171041",level:4},{value:"3.15.35.5",id:"315355",level:4},{value:"3.15.19.10",id:"3151910",level:4},{value:"3.15.19.8",id:"315198",level:4},{value:"3.15.19.7",id:"315197",level:4},{value:"3.15.16.0",id:"315160",level:4},{value:"2.14.7.0",id:"21470",level:4},{value:"2.14.3.0",id:"21430",level:4},{value:"1.13.69.1",id:"113691",level:4},{value:"1.13.69.0",id:"113690",level:4}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"version-history"},"Version history"),(0,i.kt)("p",null,"Note: this is a manually maintained list of important changes. Because of having auto-release from CI, this\nlist may not reflect ",(0,i.kt)("em",{parentName:"p"},"all")," changes immediately. Dependencies are continuously updated and are not documented here."),(0,i.kt)("h4",{id:"5xxx"},"5.x.x.x"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Migrated to ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO 2.0.0")," "),(0,i.kt)("li",{parentName:"ul"},"Moved to the ZIO organisation"),(0,i.kt)("li",{parentName:"ul"},"Using the new ZIO service pattern"),(0,i.kt)("li",{parentName:"ul"},"Changed getter naming to match ",(0,i.kt)("inlineCode",{parentName:"li"},"zio-k8s")),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"zio-prelude")," ",(0,i.kt)("em",{parentName:"li"},"newtype wrappers")," for primitives"),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO")," aspects as a base of ",(0,i.kt)("inlineCode",{parentName:"li"},"AwsCallAspect")),(0,i.kt)("li",{parentName:"ul"},"Exposed lower level pagination API calls beside the streaming ones"),(0,i.kt)("li",{parentName:"ul"},"Using the ",(0,i.kt)("inlineCode",{parentName:"li"},"Optional")," type instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"Option")," to reduce boilerplate")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"overview_migration_guide"},"migration guide")," for more information."),(0,i.kt)("h4",{id:"4171041"},"4.17.104.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Migrated to ",(0,i.kt)("inlineCode",{parentName:"li"},"zio-config v2.0.0"))),(0,i.kt)("h4",{id:"315355"},"3.15.35.5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support for defining dual HTTP/1.1 and HTTP/2 ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient")," layers"),(0,i.kt)("li",{parentName:"ul"},"Convert model case classes to ",(0,i.kt)("inlineCode",{parentName:"li"},".ReadOnly")," trait with ",(0,i.kt)("inlineCode",{parentName:"li"},".asReadOnly"))),(0,i.kt)("h4",{id:"3151910"},"3.15.19.10"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix for libraries that use the ",(0,i.kt)("inlineCode",{parentName:"li"},"Integer")," alias for ints (such as ",(0,i.kt)("inlineCode",{parentName:"li"},"zio-aws-sqs"),")")),(0,i.kt)("h4",{id:"315198"},"3.15.19.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updated ",(0,i.kt)("a",{parentName:"li",href:"https://fs2.io"},"fs2")," release that fixes the http4s backend")),(0,i.kt)("h4",{id:"315197"},"3.15.19.7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix for event streaming wrappers such as ",(0,i.kt)("inlineCode",{parentName:"li"},"subscribeToShard")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"zio-aws-kinesis"))),(0,i.kt)("h4",{id:"315160"},"3.15.16.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introduced automatic release from CI, each new AWS SDK release triggers a new ",(0,i.kt)("inlineCode",{parentName:"li"},"zio-aws")," build now"),(0,i.kt)("li",{parentName:"ul"},"zio-config support ")),(0,i.kt)("h4",{id:"21470"},"2.14.7.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updated to AWS SDK 2.14.7"),(0,i.kt)("li",{parentName:"ul"},"Fix an ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/vigoo/zio-aws/issues/23"},"issue")," with http4s streaming uploads"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Iterable")," in place of ",(0,i.kt)("inlineCode",{parentName:"li"},"List")," in the request models"),(0,i.kt)("li",{parentName:"ul"},"The akka-http client now gets the ",(0,i.kt)("em",{parentName:"li"},"actor system")," from the environment"),(0,i.kt)("li",{parentName:"ul"},"Code generator rewritten as an sbt plugin")),(0,i.kt)("h4",{id:"21430"},"2.14.3.0"),(0,i.kt)("p",null,"API breaking changes to make the streaming interface more ergonomic:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Input/output byte streams are now flat (",(0,i.kt)("inlineCode",{parentName:"li"},"ZStream[Any, AwsError, Byte]")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"ZStream[Any, AwsError, Chunk[Byte]"),")"),(0,i.kt)("li",{parentName:"ul"},"Streaming operations return a ",(0,i.kt)("inlineCode",{parentName:"li"},"ZStream")," that performs the request on first pull instead of a ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[..., ZStream[...]]")),(0,i.kt)("li",{parentName:"ul"},"Streaming for paginated operations that does not have a paginator in the Java SDK"),(0,i.kt)("li",{parentName:"ul"},"No ",(0,i.kt)("inlineCode",{parentName:"li"},"xxxStream")," variants, streaming is the default and only interface for paginatable operations"),(0,i.kt)("li",{parentName:"ul"},"Updated to AWS SDK 2.14.3"),(0,i.kt)("li",{parentName:"ul"},"Fixed handling of some error cases"),(0,i.kt)("li",{parentName:"ul"},"Scala 2.12 version is now available")),(0,i.kt)("h4",{id:"113691"},"1.13.69.1"),(0,i.kt)("p",null,"Initial release republished with fixed metadata in POMs"),(0,i.kt)("h4",{id:"113690"},"1.13.69.0"),(0,i.kt)("p",null,"Initial release based on AWS Java SDK 2.13.69"))}m.isMDXComponent=!0}}]);