"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[96465],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),m=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=m(a),u=r,d=h["".concat(s,".").concat(u)]||h[u]||c[u]||n;return a?i.createElement(d,l(l({ref:t},p),{},{components:a})):i.createElement(d,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<n;m++)l[m]=a[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},67082:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>m});var i=a(87462),r=(a(67294),a(3905));const n={id:"articles",title:"Articles"},l=void 0,o={unversionedId:"resources/learning/articles",id:"version-1.x/resources/learning/articles",title:"Articles",description:"These articles reflect the state of ZIO at the time of their publication. The code samples might be outdated, considering ZIO was early in development at the time they were written. However, the concepts are still relevant.",source:"@site/versioned_docs/version-1.x/resources/learning/articles.md",sourceDirName:"resources/learning",slug:"/resources/learning/articles",permalink:"/version-1.x/resources/learning/articles",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/resources/learning/articles.md",tags:[],version:"1.x",frontMatter:{id:"articles",title:"Articles"},sidebar:"resources-sidebar",previous:{title:"Summary",permalink:"/version-1.x/resources/"},next:{title:"Videos",permalink:"/version-1.x/resources/learning/videos"}},s={},m=[{value:"ZIO Core",id:"zio-core",level:2},{value:"Patterns and Best Practices",id:"patterns-and-best-practices",level:2},{value:"ZIO STM",id:"zio-stm",level:2},{value:"Testing",id:"testing",level:2},{value:"ZIO Streams",id:"zio-streams",level:2},{value:"ZIO Module Pattern",id:"zio-module-pattern",level:2},{value:"ZIO Libraries",id:"zio-libraries",level:2},{value:"ZIO Use Cases",id:"zio-use-cases",level:2},{value:"Integration with Other Libraries",id:"integration-with-other-libraries",level:2},{value:"Contribution",id:"contribution",level:2},{value:"Benchmarking and Comparison",id:"benchmarking-and-comparison",level:2}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"These articles reflect the state of ZIO at the time of their publication. The code samples might be outdated, considering ZIO was early in development at the time they were written. However, the concepts are still relevant.")),(0,r.kt)("h2",{id:"zio-core"},"ZIO Core"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://degoes.net/articles/zio-environment"},"Beautiful, Simple, Testable Functional Effects for Scala")," (introducing ZIO Environment) by John De Goes (February 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://degoes.net/articles/zio-cats-effect"},"ZIO & Cats Effect: A Match Made in Heaven")," by John De Goes (April 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://degoes.net/articles/zio-threads"},"Thread Pool Best Practices with ZIO")," by John De Goes (January 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://degoes.net/articles/bifunctor-io"},"Bifunctor IO: A Step Away from Dynamically-Typed Error Handling")," by John De Goes (May 2018)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@ghostdogpr/wrapping-impure-code-with-zio-9265c219e2e"},"Wrapping impure code with ZIO")," by Pierre Ricadat (July 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.softwaremill.com/thread-shifting-in-cats-effect-and-zio-9c184708067b"},"Thread shifting in cats-effect and ZIO")," by Adam Warski (June 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloudmark.github.io/A-Journey-To-Zio/"},"Performant Functional Programming to the Max with ZIO")," by Mark Galea (May 2019)")),(0,r.kt)("h2",{id:"patterns-and-best-practices"},"Patterns and Best Practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/wix-engineering/5-pitfalls-to-avoid-when-starting-to-work-with-zio-adefdc7d2d5c"},"5 pitfalls to avoid when starting to work with ZIO")," by Natan Silnitsky (Jan 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@svroonland/processing-zio-effects-through-a-pipeline-c469e28dff62"},"Processing ZIO effects through a pipeline")," (September 2020)")),(0,r.kt)("h2",{id:"zio-stm"},"ZIO STM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://scalac.io/how-to-write-a-completely-lock-free-concurrent-lru-cache-with-zio-stm/"},"How to write a concurrent LRU cache with ZIO STM")," by Jorge Vasquez (March 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://freskog.github.io/blog/2019/05/30/explore-zio-stm/"},"Exploring the STM functionality in ZIO")," by Fredrik Skogberg (May 2019)")),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://degoes.net/articles/testable-zio"},"Testing Incrementally with ZIO Environment")," by John De Goes (March 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://scala.monster/zio-test/"},"Effective testing with ZIO Test (RC18)")," by Pavels Sisojevs (April 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blended-zio.github.io/blended-zio/blog/integration-testing"},"Integration Testing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rudder.io/blog/testing-background-process-zio/"},"Testing background process with ZIO")," by Fran\xe7ois Armand (March 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://scala.monster/zio-test-old/"},"Effective testing with ZIO Test (RC17)")," by Pavels Sisojevs (January 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://timpigden.github.io/_pages/zio-streams/SpeedingUpTime.html"},"Speeding up time with ZIO TestClock")," by Tim Pigden (October 2019)")),(0,r.kt)("h2",{id:"zio-streams"},"ZIO Streams"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blended-zio.github.io/blended-zio/blog/zio-streams-jms"},"ZIO Streams and JMS")," by Andreas Gies (October 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juliano-alves.com/2020/05/04/deathstar-zio-stream/"},"Building the Death Star with ZIO Stream")," by Juliano Alves (May 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://timpigden.github.io/_pages/zio-streams/GeneratingChillEvents.html"},"Simulating IoT Events with ZIO Streams")," by Tim Pigden (November 2019)")),(0,r.kt)("h2",{id:"zio-module-pattern"},"ZIO Module Pattern"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://timpigden.github.io/_pages/zlayer/Examples.html"},"Example of ZLayers being used in combination")," by Tim Pigden (March 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://scala.monster/welcome-zio/"},"From idea to product with ZLayer")," by Pavels Sisojevs (March 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@pascal.mengelt/what-are-the-benefits-of-the-zio-modules-with-zlayers-3bf6cc064a9b"},"What are the benefits of the ZIO modules with ZLayers")," by Pascal Mengelt (March 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@pascal.mengelt/decouple-the-program-from-its-implementation-with-zio-modules-d9b8713d502e"},"Decouple the Program from its Implementation with ZIO modules.")," by Pascal Mengelt (December 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.jdriven.com/2019/10/functional-dependency-injection-in-scala-using-zio-environments/"},"Functional dependency injection in Scala using ZIO environments")," by Chiel van de Steeg (October 2019)")),(0,r.kt)("h2",{id:"zio-libraries"},"ZIO Libraries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.softinio.com/post/introduction-to-zio-actors/"},"Introduction to ZIO Actors")," by ",(0,r.kt)("a",{parentName:"li",href:"https://www.softinio.com"},"Salar Rahmanian")," (November 2020)")),(0,r.kt)("h2",{id:"zio-use-cases"},"ZIO Use Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://scala.monster/welcome-zio-old/"},"Implement your future with ZIO")," by Pavels Sisojevs (December 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://scalac.io/write-command-line-application-with-zio/"},"How to write a command line application with ZIO?")," by Piotr Go\u0142\u0119biewski (November 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://abhsrivastava.github.io/2018/11/03/Hangman-Game-Using-ZIO/"},"Building the Hangman Game using ScalaZ ZIO")," by Abhishek Srivastava (November 2018)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@wiemzin/elevator-control-system-using-zio-c718ae423c58"},"Elevator Control System using ZIO")," by Wiem Zine El Abidine (September 2018)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://adrianfilip.com/2020/03/15/spring-to-zio-101/"},"Spring to ZIO 101 - ZIO CRUD")," by Adrian Filip (March 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://justinhj.github.io/2019/04/07/hacker-news-api-5.html"},"Hacker News API Part 5")," by Justin Heyes-Jones (April 2019)")),(0,r.kt)("h2",{id:"integration-with-other-libraries"},"Integration with Other Libraries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://scalac.io/making-zio-akka-slick-play-together-nicely-part-1-zio-and-slick/"},"Making ZIO, Akka and Slick play together nicely")," by Jakub Czuchnowski (August 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juliano-alves.com/2020/04/20/zio-http4s-a-simple-api-client/"},"ZIO + Http4s: a simple API client")," by Juliano Alves (April 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@ghostdogpr/combining-zio-and-akka-to-enable-distributed-fp-in-scala-61ffb81e3283"},"Combining ZIO and Akka to enable distributed FP in Scala")," by Pierre Ricadat (July 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@wiemzin/zio-with-http4s-and-doobie-952fba51d089"},"ZIO with http4s and doobie")," by Wiem Zine El Abidine (June 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://justinhj.github.io/2019/05/05/using-47degs-fetch-with-zio.html"},"Using 47 Degree's Fetch library with ZIO")," by Justin Heyes-Jones (May 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@pascal.mengelt/what-can-zio-do-for-me-32281e4e8b16"},"What can ZIO do for me? A Long Polling example with sttp.")," by Pascal Mengelt (November 2019)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://timpigden.github.io/_pages/zio-uzhttp-sttp/uzhttp-sttp.html"},"uzhttp + sttp for light-weight http and websockets")," updated for 1.0.1 by Tim Pigden (August 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juliano-alves.com/2020/06/15/streaming-all-the-way-zio-doobie-quill-http4s-fs2/"},"Streaming all the way with ZIO, Doobie, Quill, http4s and fs2")," by Juliano Alves (June 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://timpigden.github.io/_pages/zio-http4s/intro.html"},"ZIO with http4s, Auth, Codecs and zio-tests (RC18)")," by Tim Pigden (April 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@pascal.mengelt/building-a-cool-cli-with-decline-for-my-zio-app-80e095b2899a"},"Building a cool CLI with Decline for my ZIO App")," by Pascal Mengelt (May 2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://scalac.io/streaming-microservices-with-zio-and-kafka/"},"Streaming microservices with ZIO and Kafka")," by Aleksandar Skrbic (February 2021)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ziverge.com/blog/introduction-to-zio-kafka/"},"An Introduction to ZIO Kafka")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.softwaremill.com/tapirs-endpoint-meets-zio-s-io-3278099c5e10"},"tAPIr\u2019s Endpoint meets ZIO\u2019s IO")," by Adam Warski (July 2019)")),(0,r.kt)("h2",{id:"contribution"},"Contribution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.softinio.com/post/lessons-learned-from-being-a-zio-contributor/"},"Lessons Learned From Being a ZIO Contributor")," by ",(0,r.kt)("a",{parentName:"li",href:"https://www.softinio.com"},"Salar Rahmanian")," (September 2020)")),(0,r.kt)("h2",{id:"benchmarking-and-comparison"},"Benchmarking and Comparison"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.softwaremill.com/scalaz-8-io-vs-akka-typed-actors-vs-monix-part-1-5672657169e1"},"Scalaz 8 IO vs Akka (typed) Actors vs Monix (part 1)")," + ",(0,r.kt)("a",{parentName:"li",href:"https://blog.softwaremill.com/akka-vs-zio-vs-monix-part-2-communication-9ce7261aa08c"},"part 2")," + ",(0,r.kt)("a",{parentName:"li",href:"https://blog.softwaremill.com/supervision-error-handling-in-zio-akka-and-monix-part-3-series-summary-abe75f964c2a"},"part 3")," by Adam Warski (June 2018)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.iteratorshq.com/blog/benchmarking-functional-error-handling-in-scala/"},"Benchmarking Functional Error Handling in Scala")," by Marcin Rze\u017anicki")))}c.isMDXComponent=!0}}]);