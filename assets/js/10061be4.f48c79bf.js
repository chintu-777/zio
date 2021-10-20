"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[603],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9715:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"cause",title:"Cause"},s=void 0,p={unversionedId:"datatypes/core/cause",id:"datatypes/core/cause",isDocsHomePage:!1,title:"Cause",description:"CauseE] is a description of a full story of failure, which is included in an [Exit.Failure. Many times in ZIO something can fail for a value of type E, but there are other ways things can fail too.",source:"@site/docs/datatypes/core/cause.md",sourceDirName:"datatypes/core",slug:"/datatypes/core/cause",permalink:"/datatypes/core/cause",tags:[],version:"current",frontMatter:{id:"cause",title:"Cause"},sidebar:"datatypes-sidebar",previous:{title:"Exit",permalink:"/datatypes/core/exit"},next:{title:"Introduction",permalink:"/datatypes/contextual/index"}},c=[{value:"Cause Variations",id:"cause-variations",children:[],level:2},{value:"Lossless Error Model",id:"lossless-error-model",children:[],level:2}],u={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Cause[E]")," is a description of a full story of failure, which is included in an ",(0,i.kt)("a",{parentName:"p",href:"/datatypes/core/exit"},"Exit.Failure"),". Many times in ZIO something can fail for a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),", but there are other ways things can fail too."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IO[E, A]")," is polymorphic in values of type ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," and we can work with any error type that we want, but there is a lot of information that is not inside an arbitrary ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," value. So as a result ZIO needs somewhere to store things like ",(0,i.kt)("strong",{parentName:"p"},"unexpected exceptions or defects"),", ",(0,i.kt)("strong",{parentName:"p"},"stack and execution traces"),", ",(0,i.kt)("strong",{parentName:"p"},"cause of fiber interruptions"),", and so forth."),(0,i.kt)("h2",{id:"cause-variations"},"Cause Variations"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Cause")," has several variations which encode all the cases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Fail[+E](value: E)")," contains the cause of expected failure of type ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Die(value: Throwable)")," contains the cause of a defect or in other words, an unexpected failure of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Throwable"),". If we have a bug in our code and something throws an unexpected exception, that information would be described inside a Die.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Interrupt(fiberId)")," contains information of the fiber id that causes fiber interruption.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Traced(cause, trace)")," store stack traces and execution traces.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Meta(cause, data)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Both(left, right)")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Then(left, right)")," store composition of two parallel and sequential causes. Sometimes fibers can fail for more than one reason. If we are doing two things at once and both of them fail then we actually have two errors. Examples:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If we perform ZIO's analog of try-finally (e.g. ZIO#ensuring), and both of ",(0,i.kt)("inlineCode",{parentName:"li"},"try")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"finally")," blocks fail, so their causes are encoded with ",(0,i.kt)("inlineCode",{parentName:"li"},"Then"),"."),(0,i.kt)("li",{parentName:"ul"},"If we run two parallel fibers with ",(0,i.kt)("inlineCode",{parentName:"li"},"zipPar")," and all of them fail, so their causes will be encoded with ",(0,i.kt)("inlineCode",{parentName:"li"},"Both"),".")),(0,i.kt)("p",null,"Let's try to create some of these causes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nfor {\n  failExit <- ZIO.fail("Oh! Error!").exit\n  dieExit  <- ZIO.succeed(5 / 0).exit\n  thenExit <- ZIO.fail("first").ensuring(ZIO.die(throw new Exception("second"))).exit\n  bothExit <- ZIO.fail("first").zipPar(ZIO.die(throw new Exception("second"))).exit\n  fiber    <- ZIO.sleep(1.second).fork\n  _        <- fiber.interrupt\n  interruptionExit <- fiber.join.exit\n} yield ()\n')),(0,i.kt)("h2",{id:"lossless-error-model"},"Lossless Error Model"),(0,i.kt)("p",null,"ZIO is very aggressive about preserving the full information related to a failure. ZIO capture all type of errors into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cause")," data type. So its error model is lossless. It doesn't throw information related to the failure result. So we can figure out exactly what happened during the operation of our effects."))}f.isMDXComponent=!0}}]);