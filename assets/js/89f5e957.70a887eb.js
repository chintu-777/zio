"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8592],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,k=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return t?o.createElement(k,a(a({ref:n},p),{},{components:t})):o.createElement(k,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const i={id:"blocking",title:"Blocking"},a=void 0,l={unversionedId:"services/blocking",id:"version-1.x/services/blocking",title:"Blocking",description:"Introduction",source:"@site/versioned_docs/version-1.x/services/blocking.md",sourceDirName:"services",slug:"/services/blocking",permalink:"/version-1.x/services/blocking",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/services/blocking.md",tags:[],version:"1.x",frontMatter:{id:"blocking",title:"Blocking"},sidebar:"services-sidebar",previous:{title:"Random",permalink:"/version-1.x/services/random"},next:{title:"System",permalink:"/version-1.x/services/system"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Creating Blocking Effects",id:"creating-blocking-effects",level:2},{value:"Interruption of Blocking Operations",id:"interruption-of-blocking-operations",level:2},{value:"Cancellation of Blocking Operation",id:"cancellation-of-blocking-operation",level:2}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Blocking")," service provides access to a thread pool that can be used for performing\nblocking operations, such as thread sleeps, synchronous socket/file reads, and so forth. "),(0,r.kt)("p",null,"By default, ZIO is asynchronous and all effects will be executed on a default primary thread pool which is optimized for asynchronous operations. As ZIO uses a fiber-based concurrency model, if we run ",(0,r.kt)("strong",{parentName:"p"},"Blocking I/O")," or ",(0,r.kt)("strong",{parentName:"p"},"CPU Work")," workloads on a primary thread pool, they are going to monopolize all threads of ",(0,r.kt)("strong",{parentName:"p"},"primary thread pool"),"."),(0,r.kt)("p",null,"In the following example, we create 20 blocking tasks to run parallel on the primary async thread pool. Assume we have a machine with an 8 CPU core, so the ZIO creates a thread pool of size 16 (2 * 8). If we run this program, all of our threads got stuck, and the remaining 4 blocking tasks (20 - 16) haven't any chance to run on our thread pool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.{ZIO, URIO}\nimport zio.console._ \ndef blockingTask(n: Int): URIO[Console, Unit] =\n  putStrLn(s"running blocking task number $n").orDie *>\n    ZIO.effectTotal(Thread.sleep(3000)) *>\n    blockingTask(n)\n\nval program = ZIO.foreachPar((1 to 100).toArray)(blockingTask)\n')),(0,r.kt)("h2",{id:"creating-blocking-effects"},"Creating Blocking Effects"),(0,r.kt)("p",null,"ZIO has a separate ",(0,r.kt)("strong",{parentName:"p"},"blocking thread pool")," specially designed for ",(0,r.kt)("strong",{parentName:"p"},"Blocking I/O")," and, also ",(0,r.kt)("strong",{parentName:"p"},"CPU Work")," workloads. We should run blocking workloads on this thread pool to prevent interfering with the primary thread pool."),(0,r.kt)("p",null,"The contract is that the thread pool will accept unlimited tasks (up to the available memory)\nand continuously create new threads as necessary."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"blocking")," operator takes a ZIO effect and return another effect that is going to run on a blocking thread pool:"),(0,r.kt)("p",null,"Also, we can directly import a synchronous effect that does blocking operation into ZIO effect by using ",(0,r.kt)("inlineCode",{parentName:"p"},"effectBlocking"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.blocking._\ndef blockingTask(n: Int) = effectBlocking {\n  do {\n    println(s"Running blocking task number $n on dedicated blocking thread pool")\n    Thread.sleep(3000) \n  } while (true)\n}\n')),(0,r.kt)("h2",{id:"interruption-of-blocking-operations"},"Interruption of Blocking Operations"),(0,r.kt)("p",null,"By default, when we convert a blocking operation into the ZIO effects using ",(0,r.kt)("inlineCode",{parentName:"p"},"effectBlocking"),", there is no guarantee that if that effect is interrupted the underlying effect will be interrupted."),(0,r.kt)("p",null,"Let's create a blocking effect from an endless loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  _ <- putStrLn("Starting a blocking operation")\n  fiber <- effectBlocking {\n    while (true) {\n      Thread.sleep(1000)\n      println("Doing some blocking operation")\n    }\n  }.ensuring(\n    putStrLn("End of a blocking operation").orDie\n  ).fork\n  _ <- fiber.interrupt.schedule(\n    Schedule.delayed(\n      Schedule.duration(1.seconds)\n    )\n  )\n} yield ()\n')),(0,r.kt)("p",null,"When we interrupt this loop after one second, it will not interrupted. It will only stop when the entire JVM stops. So the ",(0,r.kt)("inlineCode",{parentName:"p"},"effectBlocking")," doesn't translate the ZIO interruption into thread interruption (",(0,r.kt)("inlineCode",{parentName:"p"},"Thread.interrupt"),"). "),(0,r.kt)("p",null,"Instead, we should use ",(0,r.kt)("inlineCode",{parentName:"p"},"effectBlockingInterrupt")," to create interruptible blocking effects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  _ <- putStrLn("Starting a blocking operation")\n  fiber <- effectBlockingInterrupt {\n    while(true) {\n      Thread.sleep(1000)\n      println("Doing some blocking operation")\n    }\n  }.ensuring(\n     putStrLn("End of the blocking operation").orDie\n   ).fork\n  _ <- fiber.interrupt.schedule(\n    Schedule.delayed(\n      Schedule.duration(3.seconds)\n    )\n  )\n} yield ()\n')),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If we are converting a blocking I/O to the ZIO effect, it would be better to use ",(0,r.kt)("inlineCode",{parentName:"p"},"effectBlockingIO")," which refines the error type to the ",(0,r.kt)("inlineCode",{parentName:"p"},"java.io.IOException"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"effectBlockingInterrupt")," method adds significant overhead. So for performance-sensitive applications, it is better to handle interruptions manually using ",(0,r.kt)("inlineCode",{parentName:"p"},"effectBlockingCancel"),"."))),(0,r.kt)("h2",{id:"cancellation-of-blocking-operation"},"Cancellation of Blocking Operation"),(0,r.kt)("p",null,"Some blocking operations do not respect ",(0,r.kt)("inlineCode",{parentName:"p"},"Thread#interrupt")," by swallowing ",(0,r.kt)("inlineCode",{parentName:"p"},"InterruptedException"),". So, they will not be interrupted via ",(0,r.kt)("inlineCode",{parentName:"p"},"effectBlockingInterrupt"),". Instead, they may provide us an API to signal them to ",(0,r.kt)("em",{parentName:"p"},"cancel")," their operation."),(0,r.kt)("p",null,"The following ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockingService")," will not be interrupted in case of ",(0,r.kt)("inlineCode",{parentName:"p"},"Thread#interrupt")," call, but it checks the ",(0,r.kt)("inlineCode",{parentName:"p"},"released")," flag constantly. If this flag becomes true, the blocking service will finish its job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import java.util.concurrent.atomic.AtomicReference\nfinal case class BlockingService() {\n  private val released = new AtomicReference(false)\n\n  def start(): Unit = {\n    while (!released.get()) {\n      println("Doing some blocking operation")\n      try Thread.sleep(1000)\n      catch {\n        case _: InterruptedException => () // Swallowing InterruptedException\n      }\n    }\n    println("Blocking operation closed.")\n  }\n\n  def close(): Unit = {\n    println("Releasing resources and ready to be closed.")\n    released.getAndSet(true)\n  }\n}\n')),(0,r.kt)("p",null,"So, to translate ZIO interruption into cancellation of these types of blocking operations we should use ",(0,r.kt)("inlineCode",{parentName:"p"},"effectBlockingCancelation"),". This method takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel")," effect which responsible to signal the blocking code to close itself when ZIO interruption occurs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val myApp =\n  for {\n    service <- ZIO.effect(BlockingService())\n    fiber   <- effectBlockingCancelable(\n      effect = service.start()\n    )(\n      cancel = UIO.effectTotal(service.close())\n    ).fork\n    _       <- fiber.interrupt.schedule(\n      Schedule.delayed(\n        Schedule.duration(3.seconds)\n      )\n    )\n  } yield ()\n")),(0,r.kt)("p",null,"Here is another example of the cancelation of a blocking operation. When we ",(0,r.kt)("inlineCode",{parentName:"p"},"accept")," a server socket, this blocking operation will never interrupted until we close that using ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerSocket#close")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import java.net.{Socket, ServerSocket}\ndef accept(ss: ServerSocket): RIO[Blocking, Socket] =\n  effectBlockingCancelable(ss.accept())(UIO.effectTotal(ss.close()))\n")))}d.isMDXComponent=!0}}]);