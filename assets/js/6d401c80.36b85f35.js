"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[192],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),m=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=m(t),u=a,g=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return t?i.createElement(g,l(l({ref:n},s),{},{components:t})):i.createElement(g,l({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var m=2;m<o;m++)l[m]=t[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7401:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],r={id:"runtime",title:"Runtime"},c=void 0,m={unversionedId:"datatypes/core/runtime",id:"datatypes/core/runtime",isDocsHomePage:!1,title:"Runtime",description:"A Runtime[R] is capable of executing tasks within an environment R.",source:"@site/docs/datatypes/core/runtime.md",sourceDirName:"datatypes/core",slug:"/datatypes/core/runtime",permalink:"/datatypes/core/runtime",tags:[],version:"current",frontMatter:{id:"runtime",title:"Runtime"},sidebar:"datatypes-sidebar",previous:{title:"ZIOApp",permalink:"/datatypes/core/zioapp"},next:{title:"Exit",permalink:"/datatypes/core/exit"}},s=[{value:"What is a Runtime System?",id:"what-is-a-runtime-system",children:[],level:2},{value:"Responsibilities of the Runtime System",id:"responsibilities-of-the-runtime-system",children:[],level:2},{value:"Running a ZIO Effect",id:"running-a-zio-effect",children:[],level:2},{value:"Default Runtime",id:"default-runtime",children:[],level:2},{value:"Custom Runtime",id:"custom-runtime",children:[{value:"Providing Environment to Runtime System",id:"providing-environment-to-runtime-system",children:[],level:3},{value:"Application Monitoring",id:"application-monitoring",children:[],level:3},{value:"Application Tracing",id:"application-tracing",children:[],level:3},{value:"User-defined Executor",id:"user-defined-executor",children:[],level:3},{value:"Benchmarking",id:"benchmarking",children:[],level:3}],level:2},{value:"RuntimeConfig Aspect",id:"runtimeconfig-aspect",children:[],level:2}],p={toc:s};function d(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime[R]")," is capable of executing tasks within an environment ",(0,o.kt)("inlineCode",{parentName:"p"},"R"),"."),(0,o.kt)("p",null,"To run an effect, we need a ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime"),", which is capable of executing effects. Runtimes bundle a thread pool together with the environment that effects need."),(0,o.kt)("h2",{id:"what-is-a-runtime-system"},"What is a Runtime System?"),(0,o.kt)("p",null,"Whenever we write a ZIO program, we create a ZIO effect from ZIO constructors plus using its combinators. We are building a blueprint. ZIO effect is just a data structure that describes the execution of a concurrent program. So we end up with a tree data structure that contains lots of different data structures combined together to describe what the ZIO effect should do. This data structure doesn't do anything, it is just a description of a concurrent program."),(0,o.kt)("p",null,"So the most thing we should keep in mind when we are working with a functional effect system like ZIO is that when we are writing code, printing a string onto the console, reading a file, querying a database, and so forth; We are just writing a workflow or blueprint of an application. We are just building a data structure."),(0,o.kt)("p",null,"So how ZIO run these workflows? This is where ZIO Runtime System comes into play. Whenever we run an ",(0,o.kt)("inlineCode",{parentName:"p"},"unsaferun")," function, the Runtime System is responsible to step through all the instructions described by the ZIO effect and execute them."),(0,o.kt)("p",null,"To simplify everything, we can think of a Runtime System like a black box that takes both the ZIO effect (",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]"),") and its environment (",(0,o.kt)("inlineCode",{parentName:"p"},"R"),"), it will run this effect and then will return its result as an ",(0,o.kt)("inlineCode",{parentName:"p"},"Either[E, A]")," value."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ZIO Runtime System",src:t(5853).Z})),(0,o.kt)("h2",{id:"responsibilities-of-the-runtime-system"},"Responsibilities of the Runtime System"),(0,o.kt)("p",null,"Runtime Systems have a lot of responsibilities:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Execute every step of the blueprint")," \u2014 They have to execute every step of the blueprint in a while loop until it's done.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Handle unexpected errors")," \u2014 They have to handle unexpected errors, not just the expected ones but also the unexpected ones. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Spawn concurrent fiber")," \u2014 They are actually responsible for the concurrency that effect systems have. They have to spawn a fiber every time we call ",(0,o.kt)("inlineCode",{parentName:"p"},"fork")," on an effect to spawn off a new fiber.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Cooperatively yield to other fibers")," \u2014 They have to cooperatively yield to other fibers so that fibers that are sort of hogging the spotlight, don't get to monopolize all the CPU resources. They have to make sure that the fibers split the CPU cores among all the fibers that are working.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Capture execution and stack traces")," \u2014 They have to keep track of where we are in the progress of our own user-land code so the nice detailed execution traces can be captured. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Ensure finalizers are run appropriately")," \u2014 They have to ensure finalizers are run appropriately at the right point in all circumstances to make sure that resources are closed that clean-up logic is executed. This is the feature that powers ZManaged and all the other resource-safe constructs in ZIO.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Handle asynchronous callback")," \u2014 They have to handle this messy job of dealing with asynchronous callbacks. So we don't have to deal with async code. When we are doing ZIO, everything is just async out of the box. "))),(0,o.kt)("h2",{id:"running-a-zio-effect"},"Running a ZIO Effect"),(0,o.kt)("p",null,"There are two common ways to run a ZIO effect. Most of the time, we use the ",(0,o.kt)("a",{parentName:"p",href:"/datatypes/core/zioapp"},(0,o.kt)("inlineCode",{parentName:"a"},"ZIOAppDefault"))," trait. There are, however, some advanced use cases for which we need to directly feed a ZIO effect into the runtime system's ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafeRun")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject RunZIOEffectUsingUnsafeRun extends scala.App {\n  val myAppLogic = for {\n    _ <- Console.printLine("Hello! What is your name?")\n    n <- Console.readLine\n    _ <- Console.printLine("Hello, " + n + ", good to meet you!")\n  } yield ()\n\n  zio.Runtime.default.unsafeRun(\n    myAppLogic\n  )\n}\n')),(0,o.kt)("p",null,"We don't usually use this method to run our effects. One of the use cases of this method is when we are integrating the legacy (non-effectful code) with the ZIO effect. It also helps us to refactor a large legacy code base into a ZIO effect gradually; Assume we have decided to refactor a component in the middle of a legacy code and rewrite that with ZIO. We can start rewriting that component with the ZIO effect and then integrate that component with the existing code base, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafeRun")," function."),(0,o.kt)("h2",{id:"default-runtime"},"Default Runtime"),(0,o.kt)("p",null,"ZIO contains a default runtime called ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime.default"),", configured with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEnv")," (the default ZIO environment) and a default ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfig")," designed to work well for mainstream usage. It is already implemented as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"object Runtime {\n  lazy val default: Runtime[ZEnv] = Runtime(ZEnv.Services.live, RuntimeConfig.default)\n}\n")),(0,o.kt)("p",null,"The default runtime includes a default ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfig")," which contains minimum capabilities to bootstrap execution of ZIO tasks and live (production) versions of all ZIO built-in services. The default ZIO environment (",(0,o.kt)("inlineCode",{parentName:"p"},"ZEnv"),") for the ",(0,o.kt)("inlineCode",{parentName:"p"},"JS")," platform includes ",(0,o.kt)("inlineCode",{parentName:"p"},"Clock"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Console"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"System"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Random"),"; and the ",(0,o.kt)("inlineCode",{parentName:"p"},"JVM")," platform also has a ",(0,o.kt)("inlineCode",{parentName:"p"},"Blocking")," service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// Default JS environment\ntype ZEnv = Clock with Console with System with Random\n\n// Default JVM environment\ntype ZEnv = Clock with Console with System with Random with Blocking\n")),(0,o.kt)("p",null,"We can easily access the default ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," to run an effect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"object MainApp extends scala.App {\n  val myAppLogic = ZIO.succeed(???)\n  val runtime = Runtime.default\n  runtime.unsafeRun(myAppLogic)\n}\n")),(0,o.kt)("h2",{id:"custom-runtime"},"Custom Runtime"),(0,o.kt)("p",null,"Sometimes we need to create a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," with a user-defined environment and user-specified ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeCOnfig"),". Many real applications should not use ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime.default"),". Instead, they should make their own ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," which configures the ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfig")," and environment accordingly."),(0,o.kt)("p",null,"Some use-cases of custom Runtimes:"),(0,o.kt)("h3",{id:"providing-environment-to-runtime-system"},"Providing Environment to Runtime System"),(0,o.kt)("p",null,"The custom runtime can be used to run many different effects that all require the same environment, so we don't have to call ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provide")," on all of them before we run them."),(0,o.kt)("p",null,"For example, assume we want to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," for services that are for testing purposes, and they don't interact with real external APIs. So we can create a runtime, especially for testing."),(0,o.kt)("p",null,"Let's say we have defined two ",(0,o.kt)("inlineCode",{parentName:"p"},"Logging")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Email")," services:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait Logging {\n  def log(line: String): UIO[Unit]\n}\n\nobject Logging {\n  def log(line: String): URIO[Has[Logging], Unit] =\n    ZIO.serviceWith[Logging](_.log(line))\n}\n\ntrait Email {\n  def send(user: String, content: String): Task[Unit]\n}\n\nobject Email {\n  def send(user: String, content: String): ZIO[Has[Email], Throwable, Unit] =\n    ZIO.serviceWith[Email](_.send(user, content))\n}\n")),(0,o.kt)("p",null,"We are going to implement a live version of ",(0,o.kt)("inlineCode",{parentName:"p"},"Logging")," service and also a mock version of ",(0,o.kt)("inlineCode",{parentName:"p"},"Email")," service for testing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'case class LoggingLive() extends Logging {\n  override def log(line: String): UIO[Unit] =\n    ZIO.succeed(print(line))\n}\n\ncase class EmailMock() extends Email {\n  override def send(user: String, content: String): Task[Unit] =\n    ZIO.attempt(println(s"sending email to $user"))\n}\n')),(0,o.kt)("p",null,"Let's create a custom runtime that contains these two service implementations in its environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val testableRuntime = Runtime(\n  Has.allOf[Logging, Email](LoggingLive(), EmailMock()),\n  RuntimeConfig.default\n)\n")),(0,o.kt)("p",null,"Also, we can map the default runtime to the new runtime, so we can append new services to the default ZIO environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val testableRuntime: Runtime[zio.ZEnv with Has[Logging] with Has[Email]] =\n  Runtime.default\n    .map((zenv: zio.ZEnv) =>\n      zenv ++ Has.allOf[Logging, Email](LoggingLive(), EmailMock())\n    )\n")),(0,o.kt)("p",null,"Now we can run our effects using this custom ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'testableRuntime.unsafeRun(\n  for {\n    _ <- Logging.log("sending newsletter")\n    _ <- Email.send("David", "Hi! Here is today\'s newsletter.")\n  } yield ()\n)\n')),(0,o.kt)("h3",{id:"application-monitoring"},"Application Monitoring"),(0,o.kt)("p",null,"Sometimes to diagnose runtime issues and understand what is going on in our application we need to add some sort of monitoring task to the Runtime System. It helps us to track fibers and their status."),(0,o.kt)("p",null,"By adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"Supervisor")," to the current configuration of the Runtime System, we can track the activity of fibers in a program. So every time a fiber gets started, forked, or every time a fiber ends its life, all these contextual pieces of information get reported to that ",(0,o.kt)("inlineCode",{parentName:"p"},"Supervisor"),"."),(0,o.kt)("p",null,"For example, the ",(0,o.kt)("a",{parentName:"p",href:"https://zio.github.io/zio-zmx/"},"ZIO ZMX")," enables us to monitor our ZIO application. To include that in our project we must add the following line to our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-zmx" % "0.0.6"\n')),(0,o.kt)("p",null,"ZIO ZMX has a specialized ",(0,o.kt)("inlineCode",{parentName:"p"},"Supervisor")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"ZMXSupervisor")," that can be added to our existing ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.console._\nimport zio.zmx._\nimport zio.zmx.diagnostics._\n\nval program: ZIO[Console, Throwable, Unit] =\n  for {\n    _ <- putStrLn("Waiting for input")\n    a <- getStrLn\n    _ <- putStrLn("Thank you for " + a)\n  } yield ()\n\nval diagnosticsLayer: ZLayer[ZEnv, Throwable, Has[Diagnostics]] =\n  Diagnostics.make("localhost", 1111)\n\nval runtime: Runtime[ZEnv] =\n  Runtime.default.mapRuntimeConfig(_.withSupervisor(ZMXSupervisor))\n\nruntime.unsafeRun(program.provideCustomLayer(diagnosticsLayer))\n')),(0,o.kt)("h3",{id:"application-tracing"},"Application Tracing"),(0,o.kt)("p",null,"We can enable or disable execution tracing or configure its setting. Execution tracing has full of junk. There are lots of allocations that all need to be garbage collected afterward. So it has a tremendous impact on the complexity of the application runtime."),(0,o.kt)("p",null,"Users often turn off tracing in critical areas of their application. Also, when we are doing benchmark operation, it is better to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," without tracing capability:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.internal.tracing.{Tracing, TracingConfig}\n\nval rt1 = Runtime.default.mapRuntimeConfig(_.copy(tracing = Tracing.disabled))\nval rt2 = Runtime.default.mapRuntimeConfig(_.copy(tracing = Tracing.enabledWith(TracingConfig.stackOnly)))\n\nval config = TracingConfig(\n  traceExecution = true,\n  traceEffectOpsInExecution = true,\n  traceStack = true,\n  executionTraceLength = 100,\n  stackTraceLength = 100,\n  ancestryLength = 10,\n  ancestorExecutionTraceLength = 10,\n  ancestorStackTraceLength = 10\n)\nval rt3 = Runtime.default.mapRuntimeConfig(runtimeConfig => runtimeConfig.copy(tracing = runtimeConfig.tracing.copy(tracingConfig = config)))\n")),(0,o.kt)("h3",{id:"user-defined-executor"},"User-defined Executor"),(0,o.kt)("p",null,"An executor is responsible for executing effects. The way how each effect will be run including detail of threading, scheduling, and so forth, is separated from the caller. So, if we need to have a specialized executor according to our requirements, we can provide that to the ZIO ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.Executor\nimport java.util.concurrent.{ThreadPoolExecutor, TimeUnit, LinkedBlockingQueue}\n\nval runtime = Runtime.default.mapRuntimeConfig(\n  _.copy(\n    executor = \n      Executor.fromThreadPoolExecutor(_ => 1024)(\n        new ThreadPoolExecutor(\n          5,\n          10,\n          5000,\n          TimeUnit.MILLISECONDS,\n          new LinkedBlockingQueue[Runnable]()\n        )\n      )\n  )\n)\n")),(0,o.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,o.kt)("p",null,"To do benchmark operation, we need a ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," with settings suitable for that. It would be better to disable tracing and auto-yielding. ZIO has a built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfig")," proper for benchmark operations, called ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfig.benchmark")," which we can map the default ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfig")," to the benchmark version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val benchmarkRuntime = Runtime.default.mapRuntimeConfig(_ => RuntimeConfig.benchmark)\n")),(0,o.kt)("h2",{id:"runtimeconfig-aspect"},"RuntimeConfig Aspect"),(0,o.kt)("p",null,"ZIO has a ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect")," which helps us easily transform an existing ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfig")," to the customized one. We can think of a ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect")," as a function of type ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfig => RuntimeConfig"),". So if we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfig"),", by applying it to a ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfig")," we will get back a new ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfig")," which is the modified version of the former one."),(0,o.kt)("p",null,"It has the following constructors:"),(0,o.kt)("p",null,"| Constructor                               | Input                         | Output                |\n|-------------------------------------------+-------------------------------+-----------------------|\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect.addLogger"),"           | ",(0,o.kt)("inlineCode",{parentName:"p"},"logger: ZLogger[Any]"),"        | ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect")," |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect.addReportFatal"),"      | ",(0,o.kt)("inlineCode",{parentName:"p"},"f: Throwable => Nothing"),"     | ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect")," |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect.addSupervisor"),"       | ",(0,o.kt)("inlineCode",{parentName:"p"},"supervisor: Supervisor[Any]")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect")," |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect.identity"),"            |                               | ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect")," |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect.setBlockingExecutor")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"executor: Executor"),"          | ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect")," |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect.setExecutor"),"         | ",(0,o.kt)("inlineCode",{parentName:"p"},"executor: Executor"),"          | ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect")," |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect.setTracing"),"          | ",(0,o.kt)("inlineCode",{parentName:"p"},"tracing: Tracing"),"            | ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect")," |"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIOAppDefault")," (and also the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIOApp"),") has a ",(0,o.kt)("inlineCode",{parentName:"p"},"hook")," member of a type ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect"),". The following code illustrates how to hook into the ZIO runtime system by creating and composing multiple aspects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.internal.tracing.Tracing\n\nval loggly  = RuntimeConfigAspect.addLogger(???)\nval zmx     = RuntimeConfigAspect.addSupervisor(???)\nval tracing = RuntimeConfigAspect.setTracing(Tracing.enabled)\n\nobject Main extends ZIOAppDefault {\n  override def hook = loggly >>> zmx >>> tracing\n  \n  def run = myAppLogic\n}\n")))}d.isMDXComponent=!0},5853:function(e,n){n.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI0MjciIGhlaWdodD0iMTU3IiB2aWV3Qm94PSItMC41IC0wLjUgNDI3IDE1NyIgY29udGVudD0iJmx0O214ZmlsZSBob3N0PSZxdW90O2FwcC5kaWFncmFtcy5uZXQmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMS0wNS0wM1QxNDoxMzowNi45MDVaJnF1b3Q7IGFnZW50PSZxdW90OzUuMCAoWDExOyBMaW51eCB4ODZfNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS84Ny4wLjQyODAuNjYgU2FmYXJpLzUzNy4zNiZxdW90OyBldGFnPSZxdW90O3ZsZEdNX2syRDh5LU9jMFNXaFJaJnF1b3Q7IHZlcnNpb249JnF1b3Q7MTQuNi45JnF1b3Q7IHR5cGU9JnF1b3Q7ZGV2aWNlJnF1b3Q7Jmd0OyZsdDtkaWFncmFtIGlkPSZxdW90OzBsamJtNVJSenR3YlJuZzVERlNyJnF1b3Q7IG5hbWU9JnF1b3Q7UGFnZS0xJnF1b3Q7Jmd0OzdWZE5qOW93RVAwMWtkckRTb2tEQVk3QTBnKzFWYXVscTBxOXVjbVFHSnlZT2hNZy9mV2R4QTVKZ04xdTFkMVdXcFVEMkc4bVkvdTltWEZ3L0hsNmVLMzVOdm1nSXBBT2M2T0Q0MTg3akkzR2pMNHJvRFRBd1BNTkVHc1JHY2hyZ2FYNEFSWjBMVnFJQ1BLZUl5b2xVV3o3WUtpeURFTHNZVnhydGUrN3JaVHNyN3JsTVp3Qnk1RExjL1NMaURBeDZKaU5XdndOaURocFZ2YUNpYkY4NCtFbTFxckk3SG9PODFmMXg1aFQzc1N5QjgwVEhxbDlCL0lYamovWFNxRVpwWWM1eUlyYWhqYnozS3M3ck1kOWE4andJUThFNVhSeXUzUEg2eUxjdlF2WmFwMHRQMSt4d0lUWmNWbEFjNDU2dDFnMkROVm5oQ3FLNi9pemZTSVFsbHNlVnRZOXBRUmhDYWFTWmg0Tkk1NG50Vzh6K2NRUlFXYzF3dHdCb1VjaXFuRDVCakJNN0NTV1BNL3RzNHFXRUZoYWk5MGxhSVREbmVmM2pxeFNzb0pLQVhWSkxzMERnUlhDSnFvM3R2TjlLL3VnRVN2cFNqNjBJTGVwRmg5anQzVFR3REwrTyt5elg3TVBFYVdyblNxTmlZcFZ4dVdpUldkOWZWcWY5MHB0TFpsclFDeHQ3ZkVDVlY4enMyYTEwUDNVMHI1VW9VTzQ1MFJOQlhNZEE5N25ON3FzbFFiSlVlejZHM2w4M2dmL2FmNExOSHNYc2p1UXROL1pTdEdKdS93SDN3dlZHSzd5bXNFcE9YaUQ3YUUxMGlpdWZyKysvVWkybXlKRGtRS05sbVdPa0RheGFhc212SEgrczNiVzYxV1AwSVI4dDkrRWp0ZGdwd2tkRzFXM0NVMmVxZ2Q1azJmWGc0S0hWc2MvTFk3em0vZkZqY01vbUZ2bDkzQm1Kd3Z6TTNXRzF5L1BoS0ZFeEpPRVJhMDJNRmRTYVVJeWxWWHFySVNVSnhDWElxNHU1WkRvQmNKblZWb0xlaTJhV2tNcW9xaVc5bEtGOU9WK2dzdVpEWWJuZGVGZXFBdjJaSFV4T3RObklUQWhyb2F6amliUFY1TGhhYXU2SU1uNGNSU2hhZnNlWE5zNi96WDh4VTg9Jmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSIgaWQ9Im14LWdyYWRpZW50LWZmZmZmZi0wLjktZmZmZmZmLTAuMS1zLTAiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjAuOSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZmZmZjtzdG9wLW9wYWNpdHk6MC4xIi8+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPSJkcm9wU2hhZG93Ij48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiBzdGREZXZpYXRpb249IjEuNyIgcmVzdWx0PSJibHVyIi8+PGZlT2Zmc2V0IGluPSJibHVyIiBkeD0iMyIgZHk9IjMiIHJlc3VsdD0ib2Zmc2V0Qmx1ciIvPjxmZUZsb29kIGZsb29kLWNvbG9yPSIjM0Q0NTc0IiBmbG9vZC1vcGFjaXR5PSIwLjQiIHJlc3VsdD0ib2Zmc2V0Q29sb3IiLz48ZmVDb21wb3NpdGUgaW49Im9mZnNldENvbG9yIiBpbjI9Im9mZnNldEJsdXIiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJvZmZzZXRCbHVyIi8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0ib2Zmc2V0Qmx1ciIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWx0ZXI9InVybCgjZHJvcFNoYWRvdykiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MjAiIGhlaWdodD0iMTUwIiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAiIHN0cm9rZS1kYXNoYXJyYXk9IjEgNCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gLTEgLTEgTCAtMSA2MCBRIDIxMCAxMDUgNDIxIDYwIEwgNDIxIC0xIFoiIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0idXJsKCNteC1ncmFkaWVudC1mZmZmZmYtMC45LWZmZmZmZi0wLjEtcy0wKSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAzMDAgNzUgTCAzMzMuNjMgNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAzMzguODggNzUgTCAzMzEuODggNzguNSBMIDMzMy42MyA3NSBMIDMzMS44OCA3MS41IFoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAzMDAgNzUgTCAzMzMuNjMgNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAzMzguODggNzUgTCAzMzEuODggNzguNSBMIDMzMy42MyA3NSBMIDMzMS44OCA3MS41IFoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMTQwIiB5PSIzMCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI5MCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDE1OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDc1cHg7IG1hcmdpbi1sZWZ0OiAxNDFweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMDsgdGV4dC1hbGlnbjogY2VudGVyOyAiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogIzAwMDAwMDsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgd29yZC13cmFwOiBub3JtYWw7ICI+PGZvbnQgc3R5bGU9ImZvbnQtc2l6ZTogMTRweCI+WklPIFJ1bnRpbWUgU3lzdGVtPC9mb250PjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIyMjAiIHk9Ijc5IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlpJTyBSdW50aW1lIFN5c3RlbTwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSAxMDAgNzUgTCAxMzMuNjMgNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAxMzguODggNzUgTCAxMzEuODggNzguNSBMIDEzMy42MyA3NSBMIDEzMS44OCA3MS41IFoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMCIgeT0iNjUiIHdpZHRoPSIxMDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA5OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDc1cHg7IG1hcmdpbi1sZWZ0OiAxcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6ICMwMDAwMDA7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IHdvcmQtd3JhcDogbm9ybWFsOyAiPihSLCBaSU9bUiwgRSwgQV0pPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjUwIiB5PSI3OSIgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4oUiwgWklPW1IsIEUsIEFdKTwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMzQwIiB5PSI2NSIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogNzhweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA3NXB4OyBtYXJnaW4tbGVmdDogMzQxcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6ICMwMDAwMDA7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IHdvcmQtd3JhcDogbm9ybWFsOyAiPkVpdGhlcltFLCBBXTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzODAiIHk9Ijc5IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVpdGhlcltFLCBBXTwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAlIiB5PSIxMDAlIj5WaWV3ZXIgZG9lcyBub3Qgc3VwcG9ydCBmdWxsIFNWRyAxLjE8L3RleHQ+PC9hPjwvc3dpdGNoPjwvc3ZnPg=="}}]);