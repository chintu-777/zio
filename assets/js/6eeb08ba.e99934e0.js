"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[39700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var u=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);t&&(u=u.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,u)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,u,r=function(e,t){if(null==e)return{};var n,u,r={},a=Object.keys(e);for(u=0;u<a.length;u++)n=a[u],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(u=0;u<a.length;u++)n=a[u],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=u.createContext({}),s=function(e){var t=u.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return u.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return u.createElement(u.Fragment,{},t)}},c=u.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?u.createElement(f,o(o({ref:t},p),{},{components:n})):u.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return u.createElement.apply(null,o)}return u.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var u=n(87462),r=(n(67294),n(3905));const a={id:"tqueue",title:"TQueue"},o=void 0,i={unversionedId:"datatypes/stm/tqueue",id:"version-1.x/datatypes/stm/tqueue",title:"TQueue",description:"A TQueue[A] is a mutable queue that can participate in transactions in STM.",source:"@site/versioned_docs/version-1.x/datatypes/stm/tqueue.md",sourceDirName:"datatypes/stm",slug:"/datatypes/stm/tqueue",permalink:"/version-1.x/datatypes/stm/tqueue",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/stm/tqueue.md",tags:[],version:"1.x",frontMatter:{id:"tqueue",title:"TQueue"},sidebar:"datatypes-sidebar",previous:{title:"TPromise",permalink:"/version-1.x/datatypes/stm/tpromise"},next:{title:"TReentrantLock",permalink:"/version-1.x/datatypes/stm/treentrantlock"}},l={},s=[{value:"Create a TQueue",id:"create-a-tqueue",level:2},{value:"Put element(s) in a TQueue",id:"put-elements-in-a-tqueue",level:2},{value:"Retrieve element(s) from a TQueue",id:"retrieve-elements-from-a-tqueue",level:2},{value:"Size of a TQueue",id:"size-of-a-tqueue",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,u.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"TQueue[A]")," is a mutable queue that can participate in transactions in STM."),(0,r.kt)("h2",{id:"create-a-tqueue"},"Create a TQueue"),(0,r.kt)("p",null,"Creating an empty bounded ",(0,r.kt)("inlineCode",{parentName:"p"},"TQueue")," with specified capacity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tQueueBounded: STM[Nothing, TQueue[Int]] = TQueue.bounded[Int](5)\n")),(0,r.kt)("p",null,"Creating an empty unbounded ",(0,r.kt)("inlineCode",{parentName:"p"},"TQueue"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tQueueUnbounded: STM[Nothing, TQueue[Int]] = TQueue.unbounded[Int]\n")),(0,r.kt)("h2",{id:"put-elements-in-a-tqueue"},"Put element(s) in a TQueue"),(0,r.kt)("p",null,"In order to put an element to a ",(0,r.kt)("inlineCode",{parentName:"p"},"TQueue"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tQueueOffer: UIO[TQueue[Int]] = (for {\n  tQueue <- TQueue.bounded[Int](3)\n  _      <- tQueue.offer(1)\n} yield tQueue).commit\n")),(0,r.kt)("p",null,"The specified element will be successfully added to a queue if the queue is not full.\nIt will wait for an empty slot in the queue otherwise."),(0,r.kt)("p",null,"Alternatively, you can provide a list of elements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tQueueOfferAll: UIO[TQueue[Int]] = (for {\n  tQueue <- TQueue.bounded[Int](3)\n  _      <- tQueue.offerAll(List(1, 2))\n} yield tQueue).commit\n")),(0,r.kt)("h2",{id:"retrieve-elements-from-a-tqueue"},"Retrieve element(s) from a TQueue"),(0,r.kt)("p",null,"The first element of the queue can be obtained as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tQueueTake: UIO[Int] = (for {\n  tQueue <- TQueue.bounded[Int](3)\n  _      <- tQueue.offerAll(List(1, 2))\n  res    <- tQueue.take\n} yield res).commit\n")),(0,r.kt)("p",null,"In case the queue is empty it will block execution waiting for the element you're asking for."),(0,r.kt)("p",null,"This behavior can be avoided by using ",(0,r.kt)("inlineCode",{parentName:"p"},"poll")," method that will return an element if exists or ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," otherwise:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tQueuePoll: UIO[Option[Int]] = (for {\n  tQueue <- TQueue.bounded[Int](3)\n  res    <- tQueue.poll\n} yield res).commit\n")),(0,r.kt)("p",null,"Retrieving first ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," elements of the queue:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tQueueTakeUpTo: UIO[List[Int]] = (for {\n  tQueue <- TQueue.bounded[Int](4)\n  _      <- tQueue.offerAll(List(1, 2))\n  res    <- tQueue.takeUpTo(3)\n} yield res).commit\n")),(0,r.kt)("p",null,"All elements of the queue can be obtained as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tQueueTakeAll: UIO[List[Int]] = (for {\n  tQueue <- TQueue.bounded[Int](4)\n  _      <- tQueue.offerAll(List(1, 2))\n  res    <- tQueue.takeAll\n} yield res).commit\n")),(0,r.kt)("h2",{id:"size-of-a-tqueue"},"Size of a TQueue"),(0,r.kt)("p",null,"The number of elements in the queue can be obtained as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tQueueSize: UIO[Int] = (for {\n  tQueue <- TQueue.bounded[Int](3)\n  _      <- tQueue.offerAll(List(1, 2))\n  size   <- tQueue.size\n} yield size).commit\n")))}m.isMDXComponent=!0}}]);