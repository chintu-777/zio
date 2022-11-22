"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[27137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},s="Streaming Response",p={unversionedId:"v1.x/examples/advanced-examples/stream-response",id:"v1.x/examples/advanced-examples/stream-response",title:"Streaming Response",description:"",source:"@site/node_modules/@zio.dev/zio-http/v1.x/examples/advanced-examples/stream-response.md",sourceDirName:"v1.x/examples/advanced-examples",slug:"/v1.x/examples/advanced-examples/stream-response",permalink:"/zio-http/v1.x/examples/advanced-examples/stream-response",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Streaming File",permalink:"/zio-http/v1.x/examples/advanced-examples/stream-file"},next:{title:"Advanced Web Socket Server",permalink:"/zio-http/v1.x/examples/advanced-examples/web-socket-advanced"}},i={},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"streaming-response"},"Streaming Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\nimport zio.http.Server\nimport zio.stream.ZStream\nimport zio._\n\n/**\n * Example to encode content using a ZStream\n */\nobject StreamingResponse extends App {\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = {\n\n    // Starting the server (for more advanced startup configuration checkout `HelloWorldAdvanced`)\n    Server.start(8090, app.silent).exitCode\n  }\n\n  // Create a message as a Chunk[Byte]\n  val message                    = Chunk.fromArray("Hello world !\\r\\n".getBytes(HTTP_CHARSET))\n  // Use `Http.collect` to match on route\n  val app: HttpApp[Any, Nothing] = Http.collect[Request] {\n\n    // Simple (non-stream) based route\n    case Method.GET -> !! / "health" => Response.ok\n\n    // ZStream powered response\n    case Method.GET -> !! / "stream" =>\n      Response(\n        status = Status.OK,\n        headers = Headers.contentLength(message.length.toLong),\n        body = Body.fromStream(ZStream.fromChunk(message)), // Encoding content using a ZStream\n      )\n  }\n}\n')))}m.isMDXComponent=!0}}]);