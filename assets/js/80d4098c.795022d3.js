"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},51130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={id:"streams-are-chunked-by-default",title:"Streams Are Chunked by Default",sidebar_label:"Chunked Streams"},s=void 0,o={unversionedId:"reference/stream/zstream/streams-are-chunked-by-default",id:"reference/stream/zstream/streams-are-chunked-by-default",title:"Streams Are Chunked by Default",description:"Every time we are working with streams, we are always working with chunks. There are no streams with individual elements, these streams have always chunks in their underlying implementation. So every time we evaluate a stream, when we pull an element out of a stream, we are actually pulling out a chunk of elements.",source:"@site/docs/reference/stream/zstream/streams-are-chunked-by-default.md",sourceDirName:"reference/stream/zstream",slug:"/reference/stream/zstream/streams-are-chunked-by-default",permalink:"/reference/stream/zstream/streams-are-chunked-by-default",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zstream/streams-are-chunked-by-default.md",tags:[],version:"current",frontMatter:{id:"streams-are-chunked-by-default",title:"Streams Are Chunked by Default",sidebar_label:"Chunked Streams"},sidebar:"reference-sidebar",previous:{title:"Type Aliases",permalink:"/reference/stream/zstream/type-aliases"},next:{title:"Creating ZIO Streams",permalink:"/reference/stream/zstream/creating-zio-streams"}},l={},u=[],c={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Every time we are working with streams, we are always working with chunks. There are no streams with individual elements, these streams have always chunks in their underlying implementation. So every time we evaluate a stream, when we pull an element out of a stream, we are actually pulling out a chunk of elements."),(0,n.kt)("p",null,"So why streams are designed in this way? This is because of the ",(0,n.kt)("strong",{parentName:"p"},"efficiency and performance")," issues. Every I/O operation in the programming world works with batches. We never work with a single element. "),(0,n.kt)("p",null,"For example, whenever we are reading or writing from/to a file descriptor, or a socket we are reading or writing multiple elements at a time. This is also true when we are working with an HTTP server or even JDBC drivers. We always read and write multiple bytes to be more performant."),(0,n.kt)("p",null,"So let's talk a bit about Chunk. Chunk is a ZIOs immutable array-backed collection. It is initially written for ZIO stream, but later it has been evolved into a very attractive general collection type which is also useful for other purposes. "),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Chunk")," data type is an immutable array-backed collection. Most importantly it tries to keep primitives unboxed. This is super important for the efficient processing of files and sockets. They are also very useful and efficient for encoding and decoding and writing transducers. "),(0,n.kt)("p",null,"To learn more about this data type, we have introduced that at the ",(0,n.kt)("a",{parentName:"p",href:"/reference/misc/chunk"},"Chunk")," section."))}m.isMDXComponent=!0}}]);