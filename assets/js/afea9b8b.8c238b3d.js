"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[54723],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),y=r,g=d["".concat(l,".").concat(y)]||d[y]||m[y]||a;return t?i.createElement(g,o(o({ref:n},c),{},{components:t})):i.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=y;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},50714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=t(58168),r=(t(96540),t(15680));const a={id:"index",title:"Introduction to Dependency Injection in ZIO"},o=void 0,p={unversionedId:"reference/di/index",id:"reference/di/index",title:"Introduction to Dependency Injection in ZIO",description:"What is a Dependency?",source:"@site/docs/reference/di/index.md",sourceDirName:"reference/di",slug:"/reference/di/",permalink:"/reference/di/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/di/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to Dependency Injection in ZIO"},sidebar:"reference-sidebar",previous:{title:"Reloadable Services",permalink:"/reference/service-pattern/reloadable-services"},next:{title:"Motivation",permalink:"/reference/di/motivation"}},l={},s=[{value:"What is a Dependency?",id:"what-is-a-dependency",level:2},{value:"What is Dependency Injection?",id:"what-is-dependency-injection",level:2},{value:"ZIO&#39;s Built-in Dependency Injection",id:"zios-built-in-dependency-injection",level:2},{value:"ZIO&#39;s Dependency Injection Features",id:"zios-dependency-injection-features",level:2},{value:"Other Frameworks",id:"other-frameworks",level:2}],c={toc:s},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"what-is-a-dependency"},"What is a Dependency?"),(0,r.yg)("p",null,"When we implement a service, we might need to use other services. So a dependency is just another service that is required to fulfill its functionality:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"class Editor {\n val formatter = new Formatter\n val compiler = new Compiler\n \n def formatAndCompile(code: String): UIO[String] = \n formatter.format(code).flatMap(compiler.compile)\n}\n")),(0,r.yg)("h2",{id:"what-is-dependency-injection"},"What is Dependency Injection?"),(0,r.yg)("p",null,"Dependency injection is a pattern for decoupling the usage of dependencies from their actual creation process. In other words, it is a process of injecting dependencies of service from the outside world. The service itself doesn't know how to create its dependencies."),(0,r.yg)("p",null,"The following example shows an ",(0,r.yg)("inlineCode",{parentName:"p"},"Editor")," service that depends on ",(0,r.yg)("inlineCode",{parentName:"p"},"Formatter")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Compiler")," services. It doesn't use dependency injection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._  \n\nclass Editor {\n private val formatter = new Formatter\n private val compiler = new Compiler\n \n def formatAndCompile(code: String): UIO[String] =\n formatter.format(code).flatMap(compiler.compile)\n}\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Editor")," class in the above example is responsible for creating the ",(0,r.yg)("inlineCode",{parentName:"p"},"Formatter")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Compiler")," services. The client of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Editor")," class doesn't have any control over these services. The client can't use a different implementation for the ",(0,r.yg)("inlineCode",{parentName:"p"},"Formatter")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Compiler")," services. So it makes it hard to test the ",(0,r.yg)("inlineCode",{parentName:"p"},"Editor")," class."),(0,r.yg)("p",null,"Let's try to change the above example to use the constructor-based dependency injection pattern:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nclass Editor(formatter: Formatter, compiler: Compiler) {\n def formatAndCompile(code: String): UIO[String] = ???\n}\n")),(0,r.yg)("p",null,"In this example, the ",(0,r.yg)("inlineCode",{parentName:"p"},"Editor")," service is not responsible for creating its dependencies. Instead, they are expected to be injected from the caller site. The ",(0,r.yg)("inlineCode",{parentName:"p"},"Editor")," service does not know how its dependencies are created, they are just injected into its constructor."),(0,r.yg)("p",null,"So dependency injection is a very simple concept and can be implemented with simple constructs. In a lot of situations, we are not required to use any tools or frameworks."),(0,r.yg)("p",null,"In the ",(0,r.yg)("a",{parentName:"p",href:"/reference/di/motivation"},"motivation page")," we explain why applications should use the dependency injection pattern in more detail."),(0,r.yg)("h2",{id:"zios-built-in-dependency-injection"},"ZIO's Built-in Dependency Injection"),(0,r.yg)("p",null,"ZIO has a full solution to the dependency injection problem. It provides a built-in approach to dependency injection using the following tools in combination together:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"ZIO Environment")),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"We use the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO.serviceXYZ")," to access services inside the ZIO environment, without having any knowledge of how the services are created or implemented. Using ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO.serviceXYZ")," helps us to decouple our usage of services from the implementation of the services."),(0,r.yg)("p",{parentName:"li"},"Consequently, all dependencies will be encoded inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"R")," type parameter of our ZIO application. This specifies which services are required to fulfill the application's functionality.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"We use the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO.provideXYZ")," to provide services to the ZIO environment. This is the opposite operation of ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO.serviceXYZ"),". It allows us to inject all dependencies into the ZIO environment.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"ZLayer"),"\u2014 We use layers to create the dependency graph that our application depends on."))),(0,r.yg)("p",null,"We can have dependency injection through three simple steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Accessing services from the ZIO environment"),(0,r.yg)("li",{parentName:"ol"},"Building the dependency graph"),(0,r.yg)("li",{parentName:"ol"},"Providing services to the ZIO environment")),(0,r.yg)("p",null,"We will discuss them in more detail throughout ",(0,r.yg)("a",{parentName:"p",href:"/reference/di/dependency-injection-in-zio"},"this page"),"."),(0,r.yg)("h2",{id:"zios-dependency-injection-features"},"ZIO's Dependency Injection Features"),(0,r.yg)("p",null,"Dependency injection in ZIO is very powerful, which increases developer productivity. Let's recap some important features of dependency injection in ZIO:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Composable")),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Composable Environment"),"\u2014 Because of the very composable nature of the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," data type, its environment type parameter is also composable. So when we compose multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," effects, where each one requires a specific service, we finally get a ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," effect that requires all the required services that each of the composed effects requires. "),(0,r.yg)("p",{parentName:"li"},"For example, if we ",(0,r.yg)("inlineCode",{parentName:"p"},"zip")," two effects of type ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO[A, Nothing, Int]")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO[B, Throwable, String]"),", the result of this operation will become ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO[A with B, Throwable, (Int, String)]"),". The result operation requires both ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"B")," services.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Composable Dependencies"),"\u2014 The ",(0,r.yg)("inlineCode",{parentName:"p"},"ZLayer")," is also composable, as well as ZIO's environment type parameter. So we can compose multiple layers to ",(0,r.yg)("a",{parentName:"p",href:"/reference/di/building-dependency-graph"},"create a complex dependency graph"),".")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Type-Safe"),"\u2014 All the required dependencies should be provided at compile time. If we forget to provide the required services at compile time, we will get a compile error. So if our program compiles successfully, we can be sure that we won't have runtime errors due to missing dependencies.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Effectful"),"\u2014 We build dependency graphs using ",(0,r.yg)("inlineCode",{parentName:"p"},"ZLayer"),". Since ",(0,r.yg)("inlineCode",{parentName:"p"},"ZLayer")," is effectful, we can create a dependency graph in an effectful way.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Resourceful"),"\u2014 It also helps us to have resourceful dependencies, where we can manage the creation and release phases of the dependencies.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Parallelism"),"\u2014 All dependencies are created in parallel, and will be provided to our application."))),(0,r.yg)("h2",{id:"other-frameworks"},"Other Frameworks"),(0,r.yg)("p",null,"Using ",(0,r.yg)("inlineCode",{parentName:"p"},"ZLayer")," along with the ZIO environment to use dependency injection is optional. While we encourage users to use ZIO's idiomatic dependency injection, it is not mandatory."),(0,r.yg)("p",null,"We can still use other DI solutions. Here are some other options:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/google/guice"},"Guice")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://izumi.7mind.io/distage/index.html"},"izumi distage")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/softwaremill/macwire"},"MacWire"))))}m.isMDXComponent=!0}}]);