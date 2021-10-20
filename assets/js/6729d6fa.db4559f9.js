"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8495],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1800:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var t=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={id:"overview_handling_resources",title:"Handling Resources"},s=void 0,c={unversionedId:"overview/overview_handling_resources",id:"overview/overview_handling_resources",isDocsHomePage:!1,title:"Handling Resources",description:"This section looks at some of the common ways to safely handle resources using ZIO.",source:"@site/docs/overview/handling_resources.md",sourceDirName:"overview",slug:"/overview/overview_handling_resources",permalink:"/overview/overview_handling_resources",tags:[],version:"current",frontMatter:{id:"overview_handling_resources",title:"Handling Resources"},sidebar:"overview_sidebar",previous:{title:"Handling Errors",permalink:"/overview/overview_handling_errors"},next:{title:"Basic Concurrency",permalink:"/overview/overview_basic_concurrency"}},u=[{value:"Finalizing",id:"finalizing",children:[],level:2},{value:"Acquire Release",id:"acquire-release",children:[],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],p={toc:u};function f(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section looks at some of the common ways to safely handle resources using ZIO."),(0,a.kt)("p",null,"ZIO's resource management features work across synchronous, asynchronous, concurrent, and other effect types, and provide strong guarantees even in the presence of failure, interruption, or defects in the application."),(0,a.kt)("h2",{id:"finalizing"},"Finalizing"),(0,a.kt)("p",null,"ZIO provides similar functionality to ",(0,a.kt)("inlineCode",{parentName:"p"},"try")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"finally")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#ensuring")," method. "),(0,a.kt)("p",null,"Like ",(0,a.kt)("inlineCode",{parentName:"p"},"try")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"finally"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"ensuring")," operation guarantees that if an effect begins executing and then terminates (for whatever reason), then the finalizer will begin executing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val finalizer = \n  UIO.succeed(println("Finalizing!"))\n// finalizer: UIO[Unit] = zio.ZIO$Succeed@c134e8d\n\nval finalized: IO[String, Unit] = \n  IO.fail("Failed!").ensuring(finalizer)\n// finalized: IO[String, Unit] = zio.ZIO$Ensuring@159878c\n')),(0,a.kt)("p",null,"The finalizer is not allowed to fail, which means that it must handle any errors internally."),(0,a.kt)("p",null,"Like ",(0,a.kt)("inlineCode",{parentName:"p"},"try")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"finally"),", finalizers can be nested, and the failure of any inner finalizer will not affect outer finalizers. Nested finalizers will be executed in reverse order, and linearly (not in parallel)."),(0,a.kt)("p",null,"Unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"try")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"finally"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ensuring")," works across all types of effects, including asynchronous and concurrent effects."),(0,a.kt)("h2",{id:"acquire-release"},"Acquire Release"),(0,a.kt)("p",null,"A common use for ",(0,a.kt)("inlineCode",{parentName:"p"},"try")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"finally")," is safely acquiring and releasing resources, such as new socket connections or opened files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val handle = openFile(name)\n\ntry {\n  processFile(handle)\n} finally closeFile(handle)\n")),(0,a.kt)("p",null,"ZIO encapsulates this common pattern with ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#acquireRelease"),", which allows you to specify an ",(0,a.kt)("em",{parentName:"p"},"acquire")," effect, which acquires a resource; a ",(0,a.kt)("em",{parentName:"p"},"release")," effect, which releases it; and a ",(0,a.kt)("em",{parentName:"p"},"use")," effect, which uses the resource."),(0,a.kt)("p",null,"The release effect is guaranteed to be executed by the runtime system, even in the presence of errors or interruption."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val groupedFileData: IO[IOException, Unit] = \n  openFile("data.json").acquireReleaseWith(closeFile(_)) { file =>\n    for {\n      data    <- decodeData(file)\n      grouped <- groupData(data)\n    } yield grouped\n  }\n')),(0,a.kt)("p",null,"Like ",(0,a.kt)("inlineCode",{parentName:"p"},"ensuring"),", acquire releases have compositional semantics, so if one acquire release is nested inside another acquire release, and the outer resource is acquired, then the outer release will always be called, even if, for example, the inner release fails."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"If you are comfortable with resource handling, then the next step is to learn about ",(0,a.kt)("a",{parentName:"p",href:"/overview/overview_basic_concurrency"},"basic concurrency"),"."))}f.isMDXComponent=!0}}]);