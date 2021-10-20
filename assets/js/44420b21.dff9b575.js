"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1662],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6827:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"index",title:"Introduction"},l=void 0,c={unversionedId:"datatypes/concurrency/index",id:"datatypes/concurrency/index",isDocsHomePage:!1,title:"Introduction",description:"Overview",source:"@site/docs/datatypes/concurrency/index.md",sourceDirName:"datatypes/concurrency",slug:"/datatypes/concurrency/index",permalink:"/datatypes/concurrency/index",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"datatypes-sidebar",previous:{title:"Fiber.Status",permalink:"/datatypes/fiber/fiberstatus"},next:{title:"ZRef",permalink:"/datatypes/concurrency/zref"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Implication of Locking Mechanism",id:"implication-of-locking-mechanism",children:[],level:2},{value:"Lock-free Concurrency Model",id:"lock-free-concurrency-model",children:[],level:2},{value:"Advantage of Using ZIO Concurrency",id:"advantage-of-using-zio-concurrency",children:[],level:2},{value:"Concurrent Primitives",id:"concurrent-primitives",children:[{value:"Basic Operations",id:"basic-operations",children:[],level:3},{value:"Others",id:"others",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Most of the time, in concurrent programming we have a single state that we need to read and update that concurrently. When we have multiple fibers reading or writing to the same memory location we encounter the race condition. The main goal in every concurrent program is to have a consistent view of states among all threads."),(0,o.kt)("p",null,"There is two major concurrency model which tries to solve this problem:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Shared State")," \u2014 In this model, all threads communicate with each other by sharing the same memory location.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Message Passing (Distributed State)")," \u2014 This model provides primitives for sending and receiving messages, and the state is distributed. Each thread of execution has its own state. "))),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"Shared Memory")," model has two main solutions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Lock-Based")," \u2014 In the locking model, the general primitives for synchronization are \u0640locks\u0640, that control access to critical sections. When a thread wants to modify the critical section, it acquires the lock and says I'm the only thread that is allowed to modify the state right now, after it's work finished it unlocks the critical section and says I'm done, all other threads can modify this memory section.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Non-blocking")," \u2014 Non-blocking algorithms usually use hardware-intrinsic atomic operations like ",(0,o.kt)("inlineCode",{parentName:"p"},"compare-and-swap")," (CAS), without using any locks. This method follows an optimistic design with a transactional memory mechanism to roll back in conflict situations."))),(0,o.kt)("h2",{id:"implication-of-locking-mechanism"},"Implication of Locking Mechanism"),(0,o.kt)("p",null,"There are lots of drawback with lock-based concurrency:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Incorrect use of locks can lead to deadlock. We need to care about the locking orders. If we don't place the locks in the right order, we may encounter a deadlock situation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Identifying the critical section of a code that is vulnerable to race conditions is overwhelming. We should always care about them and remember to lock everywhere it's required.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It makes our software design very sophisticated to become scalable and reliable. It doesn't scale with program size and complexity.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To prevent missing the releasing of the acquired locks, we should always care about exceptions and error handling inside locking sections. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The locking mechanism violates the encapsulation property of our pieces of programs. So systems that build with locking mechanism are difficult to compose without knowing about their internals."))),(0,o.kt)("h2",{id:"lock-free-concurrency-model"},"Lock-free Concurrency Model"),(0,o.kt)("p",null,"As the lock-oriented programming does not compose and has lots of drawbacks, ZIO uses a ",(0,o.kt)("em",{parentName:"p"},"lock-free concurrency model")," which is a variation of non-blocking algorithms. The magic behind all of ZIO concurrency primitives is that they use CAS (",(0,o.kt)("em",{parentName:"p"},"compare-and-set"),") operation. "),(0,o.kt)("p",null,"Let's see how the ",(0,o.kt)("inlineCode",{parentName:"p"},"modify")," function of ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," is implemented without any locking mechanism:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"case class Ref[A](value: AtomicReference[A]) { self =>\n  def modify[B](f: A => (B, A)): UIO[B] = UIO.succeed {\n    var loop = true\n    var b: B = null.asInstanceOf[B]\n    while (loop) {\n      val current = value.get\n      val tuple   = f(current)\n      b = tuple._1\n      loop = !value.compareAndSet(current, tuple._2)\n    }\n    b\n  }\n}\n")),(0,o.kt)("p",null,"The idea behind the ",(0,o.kt)("inlineCode",{parentName:"p"},"modify")," is that a variable is only updated if it still has the same value as the time we had read the value from the original memory location. If the value has changed, it retries in the while loop until it succeeds. "),(0,o.kt)("h2",{id:"advantage-of-using-zio-concurrency"},"Advantage of Using ZIO Concurrency"),(0,o.kt)("p",null,"Here we are going to enumerate some points that why the ZIO concurrency model helps us to do our job well:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Composable")," \u2014 Due to the use of the lock-free concurrency model, ZIO brings us a composable concurrent primitive and lots of great combinators in a declarative style.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," and subsequently all other ZIO concurrent primitives that are on top of these two basic primitives ",(0,o.kt)("strong",{parentName:"p"},"are not transactionally composable"),"."),(0,o.kt)("p",{parentName:"blockquote"},"We cannot do transactional changes across two or more such concurrent primitives. They are susceptible to race conditions and deadlocks. ",(0,o.kt)("strong",{parentName:"p"},"So don't use them if you need to perform an atomic operation on top of a composed sequence of multiple state-changing operations. use ",(0,o.kt)("a",{parentName:"strong",href:"/datatypes/stm/index"},(0,o.kt)("inlineCode",{parentName:"a"},"STM"))," instead"),". ")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Non-blocking")," \u2014 All of the ZIO primitives are a hundred percent asynchronous and nonblocking.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resource Safety")," \u2014 ZIO concurrency model comes with strong guarantees of resource safety. If any interruption occurs in between concurrent operations, it won't leak any resource. So it allows us to write compositional operators like timeout and racing without worrying about any leaks."))),(0,o.kt)("h2",{id:"concurrent-primitives"},"Concurrent Primitives"),(0,o.kt)("p",null,"Let's take a quick look at ZIO concurrent primitives, what are they and why they exist."),(0,o.kt)("h3",{id:"basic-operations"},"Basic Operations"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," are the two simple concurrency primitives which provide an orthogonal basis for building concurrency structures. They are assembly language of other concurrent data structures:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/ref"},"Ref"))," \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," and all its variant like ",(0,o.kt)("a",{parentName:"p",href:"/datatypes/concurrency/zref"},(0,o.kt)("inlineCode",{parentName:"a"},"ZRef")),", ",(0,o.kt)("a",{parentName:"p",href:"/datatypes/concurrency/zrefsynchronized"},(0,o.kt)("inlineCode",{parentName:"a"},"ZRef.Synchronized"))," and ",(0,o.kt)("a",{parentName:"p",href:"/datatypes/concurrency/refsynchronized"},(0,o.kt)("inlineCode",{parentName:"a"},"Ref.Synchronized"))," are building blocks for writing concurrent stateful applications. Anytime we need to share information between multiple fibers, and those fibers have to update the same information, they need to communicate through something that provides the guarantee of atomicity. So all of these ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," primitives are atomic and thread-safe. They provide us a reliable foundation for synchronizing concurrent programs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/promise"},"Promise"))," \u2014 A ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," is a model of a variable that may be set a single time, and awaited on by many fibers. This primitive is very useful when we need some point of synchronization between two or multiple fibers."))),(0,o.kt)("p",null,"By using these two simple primitives, we can build lots of other asynchronous concurrent data structures like ",(0,o.kt)("inlineCode",{parentName:"p"},"Semaphore"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Queue")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Hub"),"."),(0,o.kt)("h3",{id:"others"},"Others"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/semaphore"},"Semaphore"))," \u2014 A ",(0,o.kt)("inlineCode",{parentName:"p"},"Semaphore")," is an asynchronous (non-blocking) semaphore that plays well with ZIO's interruption. ",(0,o.kt)("inlineCode",{parentName:"p"},"Semaphore")," is a generalization of a mutex. It has a certain number of permits, which can be held and released concurrently by different parties. Attempts to acquire more permits than available result in the acquiring fiber being suspended until the specified number of permits become available.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/queue"},"Queue"))," \u2014 A ",(0,o.kt)("inlineCode",{parentName:"p"},"Queue")," is an asynchronous queue that never blocks, which is safe for multiple concurrent producers and consumers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/hub"},"Hub"))," - A ",(0,o.kt)("inlineCode",{parentName:"p"},"Hub")," is an asynchronous message hub that allows publishers to efficiently broadcast values to many subscribers."))))}m.isMDXComponent=!0}}]);