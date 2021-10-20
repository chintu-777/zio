"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3175],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),f=i,u=d["".concat(s,".").concat(f)]||d[f]||c[f]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3740:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"tset",title:"TSet"},s=void 0,m={unversionedId:"datatypes/stm/tset",id:"datatypes/stm/tset",isDocsHomePage:!1,title:"TSet",description:"A TSet[A] is a mutable set that can participate in transactions in STM.",source:"@site/docs/datatypes/stm/tset.md",sourceDirName:"datatypes/stm",slug:"/datatypes/stm/tset",permalink:"/datatypes/stm/tset",tags:[],version:"current",frontMatter:{id:"tset",title:"TSet"},sidebar:"datatypes-sidebar",previous:{title:"TRandom",permalink:"/datatypes/stm/trandom"},next:{title:"TMap",permalink:"/datatypes/stm/tmap"}},p=[{value:"Create a TSet",id:"create-a-tset",children:[],level:2},{value:"Put an element to a TSet",id:"put-an-element-to-a-tset",children:[],level:2},{value:"Remove an element from a TSet",id:"remove-an-element-from-a-tset",children:[],level:2},{value:"Union of a TSet",id:"union-of-a-tset",children:[],level:2},{value:"Intersection of a TSet",id:"intersection-of-a-tset",children:[],level:2},{value:"Difference of a TSet",id:"difference-of-a-tset",children:[],level:2},{value:"Transform elements of a TSet",id:"transform-elements-of-a-tset",children:[],level:2},{value:"Perform side-effect for TSet elements",id:"perform-side-effect-for-tset-elements",children:[],level:2},{value:"Check TSet membership",id:"check-tset-membership",children:[],level:2},{value:"Convert TSet to a List",id:"convert-tset-to-a-list",children:[],level:2},{value:"Size of a TSet",id:"size-of-a-tset",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"TSet[A]")," is a mutable set that can participate in transactions in STM."),(0,r.kt)("h2",{id:"create-a-tset"},"Create a TSet"),(0,r.kt)("p",null,"Creating an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"TSet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval emptyTSet: STM[Nothing, TSet[Int]] = TSet.empty[Int]\n")),(0,r.kt)("p",null,"Or creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"TSet")," with specified values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval specifiedValuesTSet: STM[Nothing, TSet[Int]] = TSet.make(1, 2, 3)\n")),(0,r.kt)("p",null,"Alternatively, you can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"TSet")," by providing a collection of values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval iterableTSet: STM[Nothing, TSet[Int]] = TSet.fromIterable(List(1, 2, 3))\n")),(0,r.kt)("p",null,"In case there are duplicates provided, the last one is taken."),(0,r.kt)("h2",{id:"put-an-element-to-a-tset"},"Put an element to a TSet"),(0,r.kt)("p",null,"The new element can be added to the set in the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval putElem: UIO[TSet[Int]] = (for {\n  tSet <- TSet.make(1, 2)\n  _    <- tSet.put(3)\n} yield tSet).commit\n")),(0,r.kt)("p",null,"In case the set already contains the element, no modification will happen."),(0,r.kt)("h2",{id:"remove-an-element-from-a-tset"},"Remove an element from a TSet"),(0,r.kt)("p",null,"The simplest way to remove an element from ",(0,r.kt)("inlineCode",{parentName:"p"},"TSet")," is using ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval deleteElem: UIO[TSet[Int]] = (for {\n  tSet <- TSet.make(1, 2, 3)\n  _    <- tSet.delete(1)\n} yield tSet).commit\n")),(0,r.kt)("p",null,"Also, it is possible to remove every element that satisfies provided predicate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval removedEvenElems: UIO[TSet[Int]] = (for {\n  tSet <- TSet.make(1, 2, 3, 4)\n  _    <- tSet.removeIf(_ % 2 == 0)\n} yield tSet).commit\n")),(0,r.kt)("p",null,"Or you can keep all the elements that match predicate function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval retainedEvenElems: UIO[TSet[Int]] = (for {\n  tSet <- TSet.make(1, 2, 3, 4)\n  _    <- tSet.retainIf(_ % 2 == 0)\n} yield tSet).commit\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"retainIf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"removeIf")," serve the same purpose as ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filterNot"),". The reason for naming them differently was to emphasize a distinction in their nature. Namely, both ",(0,r.kt)("inlineCode",{parentName:"p"},"retainIf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"removeIf")," are destructive - calling them can modify the collection."),(0,r.kt)("h2",{id:"union-of-a-tset"},"Union of a TSet"),(0,r.kt)("p",null,"Union of the sets A and B represents the set of elements belonging to set A or set B, or both.\nUsing ",(0,r.kt)("inlineCode",{parentName:"p"},"A union B")," method modifies set ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\n// unionTSet = {1, 2, 3, 4, 5, 6}\nval unionTSet: UIO[TSet[Int]] = (for {\n  tSetA <- TSet.make(1, 2, 3, 4)\n  tSetB <- TSet.make(3, 4, 5, 6)\n  _     <- tSetA.union(tSetB)\n} yield tSetA).commit\n")),(0,r.kt)("h2",{id:"intersection-of-a-tset"},"Intersection of a TSet"),(0,r.kt)("p",null,"The intersection of the sets A and B is the set of elements belonging to both A and B.\nUsing ",(0,r.kt)("inlineCode",{parentName:"p"},"A intersect B")," method modifies set ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\n// intersectionTSet = {3, 4}\nval intersectionTSet: UIO[TSet[Int]] = (for {\n  tSetA <- TSet.make(1, 2, 3, 4)\n  tSetB <- TSet.make(3, 4, 5, 6)\n  _     <- tSetA.intersect(tSetB)\n} yield tSetA).commit\n")),(0,r.kt)("h2",{id:"difference-of-a-tset"},"Difference of a TSet"),(0,r.kt)("p",null,"The difference between sets A and B is the set containing elements of set A but not in B.\nUsing ",(0,r.kt)("inlineCode",{parentName:"p"},"A diff B")," method modifies set ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\n// diffTSet = {1, 2}\nval diffTSet: UIO[TSet[Int]] = (for {\n  tSetA <- TSet.make(1, 2, 3, 4)\n  tSetB <- TSet.make(3, 4, 5, 6)\n  _     <- tSetA.diff(tSetB)\n} yield tSetA).commit\n")),(0,r.kt)("h2",{id:"transform-elements-of-a-tset"},"Transform elements of a TSet"),(0,r.kt)("p",null,"The transform function ",(0,r.kt)("inlineCode",{parentName:"p"},"A => A")," allows computing a new value for every element in the set: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval transformTSet: UIO[TSet[Int]] = (for {\n  tSet <- TSet.make(1, 2, 3, 4)\n  _    <- tSet.transform(a => a * a)\n} yield tSet).commit\n")),(0,r.kt)("p",null,"Note that it is possible to shrink a ",(0,r.kt)("inlineCode",{parentName:"p"},"TSet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval shrinkTSet: UIO[TSet[Int]] = (for {\n  tSet <- TSet.make(1, 2, 3, 4)\n  _    <- tSet.transform(_ => 1)\n} yield tSet).commit\n")),(0,r.kt)("p",null,"Resulting set in example above has only one element."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," serves the same purpose as ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),". The reason for naming it differently was to emphasize a distinction in its nature. Namely, ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," is destructive - calling it can modify the collection."),(0,r.kt)("p",null,"The elements can be mapped effectfully via ",(0,r.kt)("inlineCode",{parentName:"p"},"transformSTM"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval transformSTMTSet: UIO[TSet[Int]] = (for {\n  tSet <- TSet.make(1, 2, 3, 4)\n  _    <- tSet.transformSTM(a => STM.succeed(a * a))\n} yield tSet).commit\n")),(0,r.kt)("p",null,"Folds the elements of a ",(0,r.kt)("inlineCode",{parentName:"p"},"TSet")," using the specified associative binary operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval foldTSet: UIO[Int] = (for {\n  tSet <- TSet.make(1, 2, 3, 4)\n  sum  <- tSet.fold(0)(_ + _)\n} yield sum).commit\n")),(0,r.kt)("p",null,"The elements can be folded effectfully via ",(0,r.kt)("inlineCode",{parentName:"p"},"foldSTM"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval foldSTMTSet: UIO[Int] = (for {\n  tSet <- TSet.make(1, 2, 3, 4)\n  sum  <- tSet.foldSTM(0)((acc, el) => STM.succeed(acc + el))\n} yield sum).commit\n")),(0,r.kt)("h2",{id:"perform-side-effect-for-tset-elements"},"Perform side-effect for TSet elements"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"foreach")," is used for performing side-effect for each element in set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval foreachTSet = (for {\n  tSet <- TSet.make(1, 2, 3, 4)\n  _    <- tSet.foreach(a => STM.succeed(println(a)))\n} yield tSet).commit\n")),(0,r.kt)("h2",{id:"check-tset-membership"},"Check TSet membership"),(0,r.kt)("p",null,"Checking whether the element is present in a ",(0,r.kt)("inlineCode",{parentName:"p"},"TSet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tSetContainsElem: UIO[Boolean] = (for {\n  tSet <- TSet.make(1, 2, 3, 4)\n  res  <- tSet.contains(3)\n} yield res).commit\n")),(0,r.kt)("h2",{id:"convert-tset-to-a-list"},"Convert TSet to a List"),(0,r.kt)("p",null,"List of set elements can be obtained as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tSetToList: UIO[List[Int]] = (for {\n  tSet <- TSet.make(1, 2, 3, 4)\n  list <- tSet.toList\n} yield list).commit\n")),(0,r.kt)("h2",{id:"size-of-a-tset"},"Size of a TSet"),(0,r.kt)("p",null,"Set's size can be obtained as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tSetSize: UIO[Int] = (for {\n  tSet <- TSet.make(1, 2, 3, 4)\n  size <- tSet.size\n} yield size).commit\n")))}d.isMDXComponent=!0}}]);