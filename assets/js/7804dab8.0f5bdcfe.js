"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2998],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6e3:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"munit-zio",title:"MUnit ZIO"},s=void 0,c={unversionedId:"resources/ecosystem/community/munit-zio",id:"resources/ecosystem/community/munit-zio",isDocsHomePage:!1,title:"MUnit ZIO",description:"MUnit ZIO is an integration library between MUnit and ZIO.",source:"@site/docs/resources/ecosystem/community/munit-zio.md",sourceDirName:"resources/ecosystem/community",slug:"/resources/ecosystem/community/munit-zio",permalink:"/resources/ecosystem/community/munit-zio",tags:[],version:"current",frontMatter:{id:"munit-zio",title:"MUnit ZIO"},sidebar:"resources-sidebar",previous:{title:"LogStage",permalink:"/resources/ecosystem/community/logstage"},next:{title:"Quill",permalink:"/resources/ecosystem/community/quill"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/poslegm/munit-zio"},"MUnit ZIO")," is an integration library between MUnit and ZIO."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://scalameta.org/munit/"},"MUnit")," is a Scala testing library that is implemented as a JUnit runner. It has ",(0,o.kt)("em",{parentName:"p"},"actionable errors"),", so the test reports are colorfully pretty-printed, stack traces are highlighted, error messages are pointed to the source code location where the failure happened."),(0,o.kt)("p",null,"The MUnit ZIO enables us to write tests that return ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," values without needing to call any unsafe methods (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime#unsafeRun"),")."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following lines in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "org.scalameta" %% "munit" % "0.7.27" % Test\nlibraryDependencies += "com.github.poslegm" %% "munit-zio" % "0.0.2" % Test\n')),(0,o.kt)("p",null,"If we are using a version of sbt lower than 1.5.0, we will also need to add:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'testFrameworks += new TestFramework("munit.Framework")\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is a simple MUnit spec that is integrated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," effect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import munit._\nimport zio._\n\nclass SimpleZIOSpec extends ZSuite {\n  testZ("1 + 1 = 2") {\n    for {\n      a <- ZIO(1)\n      b <- ZIO(1)\n    }\n    yield assertEquals(a + b, 2)\n  }\n}\n')))}m.isMDXComponent=!0}}]);