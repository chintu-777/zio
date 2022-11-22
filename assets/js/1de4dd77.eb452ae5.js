"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3973],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,g=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return n?t.createElement(g,c(c({ref:r},u),{},{components:n})):t.createElement(g,c({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39753:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const o={id:"rejecting-some-success-values",title:"Rejecting Some Success Values"},c=void 0,s={unversionedId:"reference/error-management/operations/rejecting-some-success-values",id:"reference/error-management/operations/rejecting-some-success-values",title:"Rejecting Some Success Values",description:"We can reject some success values using the ZIO#reject operator:",source:"@site/docs/reference/error-management/operations/rejecting-some-success-values.md",sourceDirName:"reference/error-management/operations",slug:"/reference/error-management/operations/rejecting-some-success-values",permalink:"/reference/error-management/operations/rejecting-some-success-values",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/operations/rejecting-some-success-values.md",tags:[],version:"current",frontMatter:{id:"rejecting-some-success-values",title:"Rejecting Some Success Values"},sidebar:"reference-sidebar",previous:{title:"Flipping Error and Success Channels",permalink:"/reference/error-management/operations/flipping-error-and-success-channels"},next:{title:"Zooming In on Nested Values",permalink:"/reference/error-management/operations/zooming-in-on-nested-values"}},i={},l=[],u={toc:l};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We can reject some success values using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#reject")," operator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def reject[E1 >: E](pf: PartialFunction[A, E1]): ZIO[R, E1, A]\n\n  def rejectZIO[R1 <: R, E1 >: E](\n    pf: PartialFunction[A, ZIO[R1, E1, E1]]\n  ): ZIO[R1, E1, A]\n}\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"PartialFunction")," matches, it will reject that success value and convert that to a failure, otherwise it will continue with the original success value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval myApp: ZIO[Any, String, Int] =\n  Random\n    .nextIntBounded(20)\n    .reject {\n      case n if n % 2 == 0 => s"even number rejected: $n"\n      case 5               => "number 5 was rejected"\n    }\n    .debug\n')))}p.isMDXComponent=!0}}]);