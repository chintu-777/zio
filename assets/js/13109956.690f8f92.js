"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8308],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6786:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"zio-schema",title:"ZIO Schema"},c=void 0,l={unversionedId:"resources/ecosystem/officials/zio-schema",id:"resources/ecosystem/officials/zio-schema",isDocsHomePage:!1,title:"ZIO Schema",description:"ZIO Schema is a ZIO-based library for modeling the schema of data structures as first-class values.",source:"@site/docs/resources/ecosystem/officials/zio-schema.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-schema",permalink:"/resources/ecosystem/officials/zio-schema",tags:[],version:"current",frontMatter:{id:"zio-schema",title:"ZIO Schema"},sidebar:"resources-sidebar",previous:{title:"ZIO S3",permalink:"/resources/ecosystem/officials/zio-s3"},next:{title:"ZIO SQS",permalink:"/resources/ecosystem/officials/zio-sqs"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-schema"},"ZIO Schema")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://zio.dev"},"ZIO"),"-based library for modeling the schema of data structures as first-class values."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Schema is a structure of a data type. ZIO Schema reifies the concept of structure for data types. It makes a high-level description of any data type and makes them as first-class values."),(0,o.kt)("p",null,"Creating a schema for a data type helps us to write codecs for that data type. So this library can be a host of functionalities useful for writing codecs and protocols like JSON, Protobuf, CSV, and so forth."),(0,o.kt)("p",null,"With schema descriptions that can be automatically derived for case classes and sealed traits, ",(0,o.kt)("em",{parentName:"p"},"ZIO Schema")," will be going to provide powerful features for free (Note that the project is in the development stage and all these features are not supported yet):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Codecs for any supported protocol (JSON, protobuf, etc.), so data structures can be serialized and deserialized in a principled way"),(0,o.kt)("li",{parentName:"ul"},"Diffing, patching, merging, and other generic-data-based operations"),(0,o.kt)("li",{parentName:"ul"},"Migration of data structures from one schema to another compatible schema"),(0,o.kt)("li",{parentName:"ul"},"Derivation of arbitrary type classes (",(0,o.kt)("inlineCode",{parentName:"li"},"Eq"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Show"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Ord"),", etc.) from the structure of the data")),(0,o.kt)("p",null,"When our data structures need to be serialized, deserialized, persisted, or transported across the wire, then ",(0,o.kt)("em",{parentName:"p"},"ZIO Schema")," lets us focus on data modeling and automatically tackle all the low-level, messy details for us."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-schema" % "0.0.6"\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In this simple example first, we create a schema for ",(0,o.kt)("inlineCode",{parentName:"p"},"Person")," and then run the ",(0,o.kt)("em",{parentName:"p"},"diff")," operation on two instances of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Person")," data type, and finally we encode a Person instance using ",(0,o.kt)("em",{parentName:"p"},"Protobuf")," protocol:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.console.putStrLn\nimport zio.schema.codec.ProtobufCodec._\nimport zio.schema.{DeriveSchema, Schema}\nimport zio.stream.ZStream\nimport zio.{Chunk, ExitCode, URIO}\n\nfinal case class Person(name: String, age: Int, id: String)\nobject Person {\n  implicit val schema: Schema[Person] = DeriveSchema.gen[Person]\n}\n\nPerson.schema\n\nimport zio.schema.syntax._\n\nPerson("Alex", 31, "0123").diff(Person("Alex", 31, "124"))\n\ndef toHex(chunk: Chunk[Byte]): String =\n  chunk.toArray.map("%02X".format(_)).mkString\n\nzio.Runtime.default.unsafeRun(\n  ZStream\n    .succeed(Person("Thomas", 23, "2354"))\n    .transduce(\n      encoder(Person.schema)\n    )\n    .runCollect\n    .flatMap(x => putStrLn(s"Encoded data with protobuf codec: ${toHex(x)}"))\n)\n')),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=GfNiDaL5aIM"},"Zymposium - ZIO Schema")," by John A. De Goes, Adam Fraser and Kit Langton (May 2021)")))}m.isMDXComponent=!0}}]);