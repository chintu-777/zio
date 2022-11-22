"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[91078],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),v=c(r),u=a,m=v["".concat(s,".").concat(u)]||v[u]||d[u]||o;return r?n.createElement(m,p(p({ref:t},l),{},{components:r})):n.createElement(m,p({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=v;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},48935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},p="Advanced Server",i={unversionedId:"v1.x/examples/advanced-examples/advanced_server",id:"v1.x/examples/advanced-examples/advanced_server",title:"Advanced Server",description:"",source:"@site/node_modules/@zio.dev/zio-http/v1.x/examples/advanced-examples/advanced_server.md",sourceDirName:"v1.x/examples/advanced-examples",slug:"/v1.x/examples/advanced-examples/advanced_server",permalink:"/zio-http/v1.x/examples/advanced-examples/advanced_server",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Websocket Server",permalink:"/zio-http/v1.x/examples/zio-http-basic-examples/web-socket"},next:{title:"Authentication",permalink:"/zio-http/v1.x/examples/advanced-examples/authentication"}},s={},c=[],l={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-server"},"Advanced Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\nimport zio.http.service._\nimport zio.http.service.ServerChannelFactory\nimport zio._\n\nimport scala.util.Try\n\nobject HelloWorldAdvanced extends App {\n  // Set a port\n  private val PORT = 0\n\n  private val fooBar: HttpApp[Any, Nothing] = Http.collect[Request] {\n    case Method.GET -> !! / "foo" => Response.text("bar")\n    case Method.GET -> !! / "bar" => Response.text("foo")\n  }\n\n  private val app = Http.collectZIO[Request] {\n    case Method.GET -> !! / "random" => random.nextString(10).map(Response.text(_))\n    case Method.GET -> !! / "utc"    => clock.currentDateTime.map(s => Response.text(s.toString))\n  }\n\n  private val server =\n    Server.port(PORT) ++              // Setup port\n      Server.paranoidLeakDetection ++ // Paranoid leak detection (affects performance)\n      Server.app(fooBar ++ app)       // Setup the Http app\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = {\n    // Configure thread count using CLI\n    val nThreads: Int = args.headOption.flatMap(x => Try(x.toInt).toOption).getOrElse(0)\n\n    // Create a new server\n    server.make\n      .use(start =>\n        // Waiting for the server to start\n        console.putStrLn(s"Server started on port ${start.port}")\n\n        // Ensures the server doesn\'t die after printing\n          *> ZIO.never,\n      )\n      .provideCustomLayer(ServerChannelFactory.auto ++ EventLoopGroup.auto(nThreads))\n      .exitCode\n  }\n}\n\n')))}d.isMDXComponent=!0}}]);