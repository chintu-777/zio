"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1505],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1148:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"uio",title:"UIO"},l=void 0,c={unversionedId:"datatypes/core/zio/uio",id:"datatypes/core/zio/uio",isDocsHomePage:!1,title:"UIO",description:"UIO[A] is a type alias for ZIO[Any, Nothing, A], which represents an Unexceptional effect that doesn't require any specific environment, and cannot fail, but can succeed with an A.",source:"@site/docs/datatypes/core/zio/uio.md",sourceDirName:"datatypes/core/zio",slug:"/datatypes/core/zio/uio",permalink:"/datatypes/core/zio/uio",tags:[],version:"current",frontMatter:{id:"uio",title:"UIO"},sidebar:"datatypes-sidebar",previous:{title:"ZIO",permalink:"/datatypes/core/zio/zio"},next:{title:"URIO",permalink:"/datatypes/core/zio/urio"}},s=[],u={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UIO[A]")," is a type alias for ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO[Any, Nothing, A]"),", which represents an ",(0,o.kt)("strong",{parentName:"p"},"Unexceptional")," effect that doesn't require any specific environment, and cannot fail, but can succeed with an ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:"))),(0,o.kt)("p",{parentName:"blockquote"},"In Scala, the ",(0,o.kt)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect the type-checking process. It just helps us to have an expressive API design.")),(0,o.kt)("p",null,"Let's see how the ",(0,o.kt)("inlineCode",{parentName:"p"},"UIO")," type alias is defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"type UIO[+A] = ZIO[Any, Nothing, A]\n")),(0,o.kt)("p",null,"So the ",(0,o.kt)("inlineCode",{parentName:"p"},"UIO")," just equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," which doesn't need any requirement and cannot fail because in the Scala the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing")," type has no inhabitant, we can't create an instance of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"UIO[A]")," (where the error type is ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing"),") are considered ",(0,o.kt)("em",{parentName:"p"},"infallible"),",\nbecause the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing")," type is ",(0,o.kt)("em",{parentName:"p"},"uninhabitable"),", i.e. there can be no actual values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing"),". Values of this type may produce an ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", but will never fail with an ",(0,o.kt)("inlineCode",{parentName:"p"},"E"),"."),(0,o.kt)("p",null,"Let's write a fibonacci function. As we don't expect any failure, it is an unexceptional effect:"),(0,o.kt)("p",null,"In the following example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"fib"),", doesn't have any requirement, as it is an unexceptional effect, we don't except any failure, and it succeeds with value of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Int"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.UIO\n\ndef fib(n: Int): UIO[Int] =\n  if (n <= 1) {\n    UIO.succeed(1)\n  } else {\n    for {\n      fiber1 <- fib(n - 2).fork\n      fiber2 <- fib(n - 1).fork\n      v2     <- fiber2.join\n      v1     <- fiber1.join\n    } yield v1 + v2\n  }\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("em",{parentName:"p"},"Principle of The Least Power")),(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On other hand, the type aliases are a way of subtyping and specializing the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," type, specific for a less powerful workflow. "),(0,o.kt)("p",{parentName:"blockquote"},"Lot of the time, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the proper specialized type alias."),(0,o.kt)("p",{parentName:"blockquote"},"So there is no need to convert type aliases to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, whenever the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}f.isMDXComponent=!0}}]);