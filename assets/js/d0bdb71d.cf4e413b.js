"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[233],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),f=i,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5814:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],u={id:"tpriorityqueue",title:"TPriorityQueue"},l=void 0,p={unversionedId:"datatypes/stm/tpriorityqueue",id:"datatypes/stm/tpriorityqueue",isDocsHomePage:!1,title:"TPriorityQueue",description:"A TPriorityQueue[A] is a mutable queue that can participate in STM transactions. A TPriorityQueue contains values of type A for which an Ordering is defined. Unlike a TQueue, take returns the highest priority value (the value that is first in the specified ordering) as opposed to the first value offered to the queue. The ordering of elements sharing the same priority when taken from the queue is not guaranteed.",source:"@site/docs/datatypes/stm/tpriorityqueue.md",sourceDirName:"datatypes/stm",slug:"/datatypes/stm/tpriorityqueue",permalink:"/datatypes/stm/tpriorityqueue",tags:[],version:"current",frontMatter:{id:"tpriorityqueue",title:"TPriorityQueue"},sidebar:"datatypes-sidebar",previous:{title:"TRef",permalink:"/datatypes/stm/tref"},next:{title:"TPromise",permalink:"/datatypes/stm/tpromise"}},s=[{value:"Creating a TPriorityQueue",id:"creating-a-tpriorityqueue",children:[],level:2},{value:"Offering elements to a TPriorityQueue",id:"offering-elements-to-a-tpriorityqueue",children:[],level:2},{value:"Taking elements from a TPriorityQueue",id:"taking-elements-from-a-tpriorityqueue",children:[],level:2},{value:"Size of a TPriorityQueue",id:"size-of-a-tpriorityqueue",children:[],level:2}],m={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"TPriorityQueue[A]")," is a mutable queue that can participate in STM transactions. A ",(0,a.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," contains values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," for which an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ordering")," is defined. Unlike a ",(0,a.kt)("inlineCode",{parentName:"p"},"TQueue"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"take")," returns the highest priority value (the value that is first in the specified ordering) as opposed to the first value offered to the queue. The ordering of elements sharing the same priority when taken from the queue is not guaranteed."),(0,a.kt)("h2",{id:"creating-a-tpriorityqueue"},"Creating a TPriorityQueue"),(0,a.kt)("p",null,"You can create an empty ",(0,a.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"empty")," constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval minQueue: STM[Nothing, TPriorityQueue[Int]] =\n  TPriorityQueue.empty\n")),(0,a.kt)("p",null,"Notice that a ",(0,a.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," is created with an implicit ",(0,a.kt)("inlineCode",{parentName:"p"},"Ordering"),". By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"take")," will return the value that is first in the specified ordering. For example, in a queue of events ordered by time the earliest event would be taken first. If you want a different behavior you can use a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"Ordering"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val maxQueue: STM[Nothing, TPriorityQueue[Int]] =\n  TPriorityQueue.empty(Ordering[Int].reverse)\n")),(0,a.kt)("p",null,"You can also create a ",(0,a.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," initialized with specified elements using the ",(0,a.kt)("inlineCode",{parentName:"p"},"fromIterable")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"make"),' constructors". The ',(0,a.kt)("inlineCode",{parentName:"p"},"fromIterable")," constructor takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"Iterable")," while the ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," constructor takes a variable arguments sequence of elements."),(0,a.kt)("h2",{id:"offering-elements-to-a-tpriorityqueue"},"Offering elements to a TPriorityQueue"),(0,a.kt)("p",null,"You can offer elements to a ",(0,a.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"offer")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"offerAll")," methods. The ",(0,a.kt)("inlineCode",{parentName:"p"},"offerAll")," method is more efficient if you want to offer more than one element to the queue at the same time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val queue: STM[Nothing, TPriorityQueue[Int]] =\n  for {\n    queue <- TPriorityQueue.empty[Int]\n    _     <- queue.offerAll(List(2, 4, 6, 3, 5, 6))\n  } yield queue\n")),(0,a.kt)("h2",{id:"taking-elements-from-a-tpriorityqueue"},"Taking elements from a TPriorityQueue"),(0,a.kt)("p",null,"Take an element from a ",(0,a.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"take"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"take")," will semantically block until there is at least one value in the queue to take. You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"takeAll")," to immediately take all values that are currently in the queue, or ",(0,a.kt)("inlineCode",{parentName:"p"},"takeUpTo")," to immediately take up to the specified number of elements from the queue."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val sorted: STM[Nothing, Chunk[Int]] =\n  for {\n    queue  <- TPriorityQueue.empty[Int]\n    _      <- queue.offerAll(List(2, 4, 6, 3, 5, 6))\n    sorted <- queue.takeAll\n  } yield sorted\n")),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"takeOption")," method to take the first value from the queue if it exists without suspending or the ",(0,a.kt)("inlineCode",{parentName:"p"},"peek")," method to observe the first element of the queue if it exists without removing it from the queue."),(0,a.kt)("p",null,"Sometimes you want to take a snapshot of the current state of the queue without modifying it. For this the ",(0,a.kt)("inlineCode",{parentName:"p"},"toChunk")," combinator or its variants ",(0,a.kt)("inlineCode",{parentName:"p"},"toList")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"toVector")," are extremely helpful. These will return an immutable collection that consists of all of the elements currently in the queue, leaving the state of the queue unchanged."),(0,a.kt)("h2",{id:"size-of-a-tpriorityqueue"},"Size of a TPriorityQueue"),(0,a.kt)("p",null,"You can check the size of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"\nval size: STM[Nothing, Int] =\n  for {\n    queue <- TPriorityQueue.empty[Int]\n    _     <- queue.offerAll(List(2, 4, 6, 3, 5, 6))\n    size  <- queue.size\n  } yield size\n")))}c.isMDXComponent=!0}}]);