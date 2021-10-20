"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8091],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=u,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var o=r.length,a=new Array(o);a[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:u,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4331:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=r(7462),u=r(3366),o=(r(7294),r(3905)),a=["components"],i={id:"with-future",title:"How to Interop with Future?"},l=void 0,c={unversionedId:"howto/interop/with-future",id:"howto/interop/with-future",isDocsHomePage:!1,title:"How to Interop with Future?",description:"Scala Future",source:"@site/docs/howto/interop/with-future.md",sourceDirName:"howto/interop",slug:"/howto/interop/with-future",permalink:"/howto/interop/with-future",tags:[],version:"current",frontMatter:{id:"with-future",title:"How to Interop with Future?"},sidebar:"howto-sidebar",previous:{title:"How to Interop with Cats Effect?",permalink:"/howto/interop/with-cats-effect"},next:{title:"How to Interop with Java?",permalink:"/howto/interop/with-java"}},p=[{value:"Scala Future",id:"scala-future",children:[{value:"From Future",id:"from-future",children:[],level:3},{value:"To Future",id:"to-future",children:[],level:3}],level:2},{value:"Run to Future",id:"run-to-future",children:[],level:2}],f={toc:p};function s(e){var t=e.components,r=(0,u.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"scala-future"},"Scala Future"),(0,o.kt)("p",null,"Basic interoperability with Scala's ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," is now provided by ZIO, and does not require a separate module."),(0,o.kt)("h3",{id:"from-future"},"From Future"),(0,o.kt)("p",null,"Scala's ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," can be converted into a ZIO effect with ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.fromFuture"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'def loggedFuture[A](future: ExecutionContext => Future[A]): UIO[Task[A]] = {\n  ZIO.fromFuture { implicit ec =>\n    future(ec).flatMap { result =>\n      Future(println("Future succeeded with " + result)).map(_ => result)\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Scala's ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," can also be converted into a ",(0,o.kt)("inlineCode",{parentName:"p"},"Fiber")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"Fiber.fromFuture"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def futureToFiber[A](future: => Future[A]): Fiber[Throwable, A] = \n  Fiber.fromFuture(future)\n")),(0,o.kt)("p",null,"This is a pure operation, given any sensible notion of fiber equality."),(0,o.kt)("h3",{id:"to-future"},"To Future"),(0,o.kt)("p",null,"A ZIO ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," effect can be converted into a ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#toFuture"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def taskToFuture[A](task: Task[A]): UIO[Future[A]] = \n  task.toFuture\n")),(0,o.kt)("p",null,"Because converting a ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," into an (eager) ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," is effectful, the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#toFuture")," is an effect. To actually begin the computation, and access the started ",(0,o.kt)("inlineCode",{parentName:"p"},"Future"),", it is necessary to execute the effect with a runtime."),(0,o.kt)("p",null,"A ZIO ",(0,o.kt)("inlineCode",{parentName:"p"},"Fiber")," can be converted into a ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"Fiber#toFuture"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def fiberToFuture[A](fiber: Fiber[Throwable, A]): UIO[Future[A]] = \n  fiber.toFuture\n")),(0,o.kt)("h2",{id:"run-to-future"},"Run to Future"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," type has a method ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafeRunToFuture"),", which can execute a ZIO effect asynchronously, and return a ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," that will be completed when the execution of the effect is complete."))}s.isMDXComponent=!0}}]);