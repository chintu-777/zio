"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[97792],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>m});var o=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||t;return a?o.createElement(m,i(i({ref:n},p),{},{components:a})):o.createElement(m,i({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,i=new Array(t);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<t;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},73882:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var o=a(58168),r=(a(96540),a(15680));const t={id:"configuration",title:"Configuration"},i=void 0,s={unversionedId:"zio-json/configuration",id:"zio-json/configuration",title:"Configuration",description:"Field naming",source:"@site/docs/zio-json/configuration.md",sourceDirName:"zio-json",slug:"/zio-json/configuration",permalink:"/zio-json/configuration",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-json/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"ecosystem-sidebar",previous:{title:"Encoding",permalink:"/zio-json/encoding"},next:{title:"Manual Instances",permalink:"/zio-json/manual-instances"}},l={},c=[{value:"Field naming",id:"field-naming",level:2},{value:"jsonDiscriminator",id:"jsondiscriminator",level:2},{value:"Extra fields",id:"extra-fields",level:2},{value:"Aliases",id:"aliases",level:2},{value:"@jsonDerive",id:"jsonderive",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,o.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"field-naming"},"Field naming"),(0,r.yg)("p",null,"By default, the field names of a case class are used as the JSON fields, but it is easy to override this with an annotation ",(0,r.yg)("inlineCode",{parentName:"p"},"@jsonField"),"."),(0,r.yg)("p",null,"Moreover, you can also mark a whole case class with a member name transformation that will be applied to all members using ",(0,r.yg)("inlineCode",{parentName:"p"},"@jsonMemberNames")," annotation. It takes an argument of type ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonMemberFormat")," which encodes the transformation that will be applied to member names."),(0,r.yg)("p",null,"Four most popular transformations are already provided: KebabCase, SnakeCase, PascalCase and CamelCase. If you require something more specific you can also use CustomCase which takes a function of shape ",(0,r.yg)("inlineCode",{parentName:"p"},"String => String")," as an argument and can be used to perform any arbitrary transformation. ",(0,r.yg)("inlineCode",{parentName:"p"},"@jsonField")," annotation takes priority over the transformation defined by ",(0,r.yg)("inlineCode",{parentName:"p"},"@jsonMemberNames"),"."),(0,r.yg)("p",null,"Here's an example json with most fields snake_cased and one kebab-cased:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "passion_fruit": true,\n  "granny_smith": true,\n  "dragon_fruit": true,\n  "blood-orange": false\n}\n')),(0,r.yg)("p",null,"And here's the target case class:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.json._\n\n@jsonMemberNames(SnakeCase)\ncase class FruitBasket(\n  passionFruit: Boolean, \n  grannySmith: Boolean, \n  dragonFruit: Boolean, \n  @jsonField("blood-orange") bloodOrange: Boolean\n)\n')),(0,r.yg)("p",null,"Notice that all fields are camelCased in Scala and will be both encoded and decoded correctly to snake_case in JSON except ",(0,r.yg)("inlineCode",{parentName:"p"},"bloodOrange")," field that is annotated with a ",(0,r.yg)("inlineCode",{parentName:"p"},"@jsonField")," override that will force it to become ",(0,r.yg)("inlineCode",{parentName:"p"},'"blood-orange"')," after serialization."),(0,r.yg)("p",null,"It is also possible to change the type hint that is used to discriminate case classes with ",(0,r.yg)("inlineCode",{parentName:"p"},"@jsonHint"),"."),(0,r.yg)("p",null,"For example, these annotations change the expected JSON of our ",(0,r.yg)("inlineCode",{parentName:"p"},"Fruit")," family"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.json._\n\nsealed trait Fruit\n\n@jsonHint("banaani") case class Banana(\n  @jsonField("bendiness") curvature: Double\n) extends Fruit\n\n@jsonHint("omena") case class Apple(\n  @jsonField("bad") poison: Boolean\n) extends Fruit\n\nobject Fruit {\n  implicit val encoder: JsonEncoder[Fruit] =\n    DeriveJsonEncoder.gen[Fruit]\n}\n\nval banana: Fruit = Banana(0.5)\n// banana: Fruit = Banana(curvature = 0.5)\nval apple: Fruit = Apple(false)\n// apple: Fruit = Apple(poison = false)\n')),(0,r.yg)("p",null,"from"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{"Banana":{"curvature":0.5}}\n{"Apple":{"poison":false}}\n')),(0,r.yg)("p",null,"to"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'banana.toJson\n// res1: String = {"banaani":{"bendiness":0.5}}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'apple.toJson\n// res2: String = {"omena":{"bad":false}}\n')),(0,r.yg)("p",null,"Another way of changing type hint is using ",(0,r.yg)("inlineCode",{parentName:"p"},"@jsonHintNames")," annotation on sealed class. It allows to apply transformation\nto all type hint values in hierarchy. Same transformations are provided as for ",(0,r.yg)("inlineCode",{parentName:"p"},"@jsonMemberNames")," annotation."),(0,r.yg)("p",null,"Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.json._\n\n@jsonHintNames(SnakeCase)\nsealed trait FruitKind\n\ncase class GoodFruit(good: Boolean) extends FruitKind\n\ncase class BadFruit(bad: Boolean) extends FruitKind\n\nobject FruitKind {\n  implicit val encoder: JsonEncoder[FruitKind] =\n    DeriveJsonEncoder.gen[FruitKind]\n}\n\nval goodFruit: FruitKind = GoodFruit(true)\n// goodFruit: FruitKind = GoodFruit(good = true)\nval badFruit: FruitKind = BadFruit(true)\n// badFruit: FruitKind = BadFruit(bad = true)\n\ngoodFruit.toJson\n// res3: String = "{\\"good_fruit\\":{\\"good\\":true}}"\nbadFruit.toJson\n// res4: String = "{\\"bad_fruit\\":{\\"bad\\":true}}"\n')),(0,r.yg)("h2",{id:"jsondiscriminator"},"jsonDiscriminator"),(0,r.yg)("p",null,"A popular alternative way to encode sealed traits:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{"type":"banaani", "bendiness":0.5}\n\n{"type":"omena", "bad":false}\n')),(0,r.yg)("p",null,"is discouraged for performance reasons. However, if we have no choice in the matter, it may be accommodated with the ",(0,r.yg)("inlineCode",{parentName:"p"},"@jsonDiscriminator")," annotation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'@jsonDiscriminator("type") sealed trait Fruit\n')),(0,r.yg)("h2",{id:"extra-fields"},"Extra fields"),(0,r.yg)("p",null,"We can raise an error if we encounter unexpected fields by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"@jsonNoExtraFields")," annotation on a case class."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"@jsonNoExtraFields case class Watermelon(pips: Int)\n\nobject Watermelon {\n  implicit val decoder: JsonDecoder[Watermelon] =\n    DeriveJsonDecoder.gen[Watermelon]\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'"""{ "pips": 32 }""".fromJson[Watermelon]\n// res6: Either[String, Watermelon] = Right(value = Watermelon(pips = 32))\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'"""{ "pips": 32, "color": "yellow" }""".fromJson[Watermelon]\n// res7: Either[String, Watermelon] = Left(value = "(invalid extra field)")\n')),(0,r.yg)("h2",{id:"aliases"},"Aliases"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Since zio-json 0.4.3.\n")),(0,r.yg)("p",null,"After a case class field has changed name, you may still want to read JSON documents that use the old name. This is supported by the ",(0,r.yg)("inlineCode",{parentName:"p"},"@jsonAliases")," annotation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'case class Strawberry(\n  @jsonAliases("seeds") seedCount: Int\n)\n\nobject Strawberry {\n  implicit val decoder: JsonDecoder[Strawberry] =\n    DeriveJsonDecoder.gen[Strawberry]\n}\n')),(0,r.yg)("p",null,"The following two expressions result in an equal value:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'"""{ "seeds": 32 }""".fromJson[Strawberry]\n// res8: Either[String, Strawberry] = Right(value = Strawberry(seedCount = 32))\n"""{ "seedCount": 32 }""".fromJson[Strawberry]\n// res9: Either[String, Strawberry] = Right(value = Strawberry(seedCount = 32))\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"@jsonAliases")," annotation supports multiple aliases. The annotation has no effect on encoding."),(0,r.yg)("h2",{id:"jsonderive"},"@jsonDerive"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Requires zio-json-macros")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"@jsonDerive")," allows to reduce that needs to be written using an annotation macro to generate JsonDecoder/JsonEncoder at build-time."),(0,r.yg)("p",null,"For generating both Encoder and Decoder, simply use jsonDerive"),(0,r.yg)("p",null,"For example: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\n@jsonDerive case class Watermelon(pips: Int)\n")),(0,r.yg)("p",null,"It is equivalent to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\ncase class Watermelon(pips: Int)\n\nobject Watermelon {\n  implicit val codec: JsonCodec[Watermelon] =\n    DeriveJsonCodec.gen[Watermelon]\n}\n")),(0,r.yg)("p",null,"To generate only an encoder, we can set it as config parameter:"),(0,r.yg)("p",null,"For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\n@jsonDerive(JsonDeriveConfig.Encoder) case class Watermelon(pips: Int)\n")),(0,r.yg)("p",null,"It is equivalent to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\ncase class Watermelon(pips: Int)\n\nobject Watermelon {\n  implicit val encoder: JsonEncoder[Watermelon] =\n    DeriveJsonEncoder.gen[Watermelon]\n}\n")),(0,r.yg)("p",null,"To generate only a decoder, we can set it as config parameter:"),(0,r.yg)("p",null,"For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala",metastring:"modc:compile-only","modc:compile-only":!0},"import zio.json._\n\n@jsonDerive(JsonDeriveConfig.Decoder) case class Watermelon(pips: Int)\n")),(0,r.yg)("p",null,"It is equivalent to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\ncase class Watermelon(pips: Int)\n\nobject Watermelon {\n  implicit val decoder: JsonDecoder[Watermelon] =\n    DeriveJsonDecoder.gen[Watermelon]\n}\n")))}u.isMDXComponent=!0}}]);