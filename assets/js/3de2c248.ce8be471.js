"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[80938],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},14460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={id:"encoding",title:"Encoding"},i=void 0,l={unversionedId:"encoding",id:"encoding",title:"Encoding",description:"Automatic Derivation",source:"@site/node_modules/@zio.dev/zio-json/encoding.md",sourceDirName:".",slug:"/encoding",permalink:"/zio-json/encoding",draft:!1,tags:[],version:"current",frontMatter:{id:"encoding",title:"Encoding"},sidebar:"sidebar",previous:{title:"Decoding",permalink:"/zio-json/decoding"},next:{title:"Interop modules",permalink:"/zio-json/interop/"}},c={},s=[{value:"Automatic Derivation",id:"automatic-derivation",level:2},{value:"ADTs",id:"adts",level:3},{value:"Manual instances",id:"manual-instances",level:2},{value:"<code>.contramap</code>",id:"contramap",level:3}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"automatic-derivation"},"Automatic Derivation"),(0,r.kt)("p",null,"Assume we want to encode this case class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"case class Banana(curvature: Double)\n")),(0,r.kt)("p",null,"To produce JSON from our data we define a ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonEncoder")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\nobject Banana {\n  implicit val encoder: JsonEncoder[Banana] =\n    DeriveJsonEncoder.gen[Banana]\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'Banana(0.5).toJson\n// res0: String = "{\\"curvature\\":0.5}"\n')),(0,r.kt)("h3",{id:"adts"},"ADTs"),(0,r.kt)("p",null,"Say we extend our data model to include more data types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait Fruit\n\ncase class Banana(curvature: Double) extends Fruit\ncase class Apple (poison: Boolean)   extends Fruit\n")),(0,r.kt)("p",null,"we can generate the encoder for the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"sealed")," family"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\nobject Fruit {\n  implicit val encoder: JsonEncoder[Fruit] =\n    DeriveJsonEncoder.gen[Fruit]\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val apple: Fruit = Apple(poison = false)\n// apple: Fruit = Apple(poison = false)\napple.toJson\n// res2: String = "{\\"Apple\\":{\\"poison\\":false}}"\n')),(0,r.kt)("p",null,"Almost all of the standard library data types are supported as fields on the case class, and it is easy to add support if one is missing."),(0,r.kt)("h2",{id:"manual-instances"},"Manual instances"),(0,r.kt)("p",null,"Sometimes it is easier to reuse an existing ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonEncoder")," rather than generate a new one. This can be accomplished using convenience methods on the ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonEncoder")," typeclass to ",(0,r.kt)("em",{parentName:"p"},"derive")," new decoders:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait JsonEncoder[A] {\n  def contramap[B](f: B => A): JsonEncoder[B]\n  ...\n}\n")),(0,r.kt)("h3",{id:"contramap"},(0,r.kt)("inlineCode",{parentName:"h3"},".contramap")),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap")," from an already existing encoder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.json._\n\ncase class FruitCount(value: Int)\n\nobject FruitCount {\n  implicit val encoder: JsonEncoder[FruitCount] =\n    JsonEncoder[Int].contramap(_.value)\n}\n\nFruitCount(3).toJson\n// res3: String = "3"\n')))}u.isMDXComponent=!0}}]);