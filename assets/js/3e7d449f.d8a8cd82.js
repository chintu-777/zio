"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,k=r(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,m=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(m,l(l({ref:t},k),{},{components:n})):a.createElement(m,l({ref:t},k))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:"7"},l="Cookie",r={unversionedId:"v1.x/dsl/cookies",id:"v1.x/dsl/cookies",title:"Cookie",description:"ZIO HTTP has special support for Cookie headers using the Cookie Domain to add and invalidate cookies. Adding a cookie will generate the correct Set-Cookie headers",source:"@site/node_modules/@zio.dev/zio-http/v1.x/dsl/cookies.md",sourceDirName:"v1.x/dsl",slug:"/v1.x/dsl/cookies",permalink:"/zio-http/v1.x/dsl/cookies",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Headers",permalink:"/zio-http/v1.x/dsl/headers"},next:{title:"Middleware",permalink:"/zio-http/v1.x/dsl/middleware"}},p={},s=[{value:"Create a Cookie",id:"create-a-cookie",level:2},{value:"Update a Cookie",id:"update-a-cookie",level:3},{value:"Reset a Cookie",id:"reset-a-cookie",level:2},{value:"Sign a Cookie",id:"sign-a-cookie",level:2},{value:"Adding Cookie in Response",id:"adding-cookie-in-response",level:2},{value:"Getting Cookie from Request",id:"getting-cookie-from-request",level:2}],k={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cookie"},"Cookie"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ZIO HTTP")," has special support for Cookie headers using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cookie")," Domain to add and invalidate cookies. Adding a cookie will generate the correct ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"},"Set-Cookie")," headers"),(0,o.kt)("h2",{id:"create-a-cookie"},"Create a Cookie"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Cookie")," can be created with params ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"content"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"expires"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"domain"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isSecure"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isHttpOnly"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"maxAge"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sameSite")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"secret")," according to HTTP ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"},"Set-Cookie"),"  "),(0,o.kt)("p",null,"The below snippet creates a cookie ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"abc")," with default params."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},' val cookie: Cookie = Cookie("id", "abc")\n')),(0,o.kt)("h3",{id:"update-a-cookie"},"Update a Cookie"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withContent")," updates the content of cookie")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},' val newCookie = cookie.withContent("def")\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withExpiry")," updates the expiration date of cookie")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"}," val newCookie = cookie.withExpiry(Instant.MAX)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withMaxAge")," updates the max-age of the cookie")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"}," val newCookie = cookie.withMaxAge(5 days)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withDomain")," updates the host to which the cookie will be sent")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},' val newCookie = cookie.withDomain("example.com")\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withPath")," updates the path of the cookie")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},' val newCookie = cookie.withPath(!! / "cookie")\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withSecure")," enables cookie only on https server ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"}," val newCookie = cookie.withSecure\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withHttpOnly")," forbids JavaScript from accessing the cookie")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"}," val newCookie = cookie.withHttpOnly\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withSameSite")," updates whether or not a cookie is sent with cross-origin requests")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"}," val newCookie = cookie.withSameSite(Instant.MAX)\n")),(0,o.kt)("h2",{id:"reset-a-cookie"},"Reset a Cookie"),(0,o.kt)("p",null,"you can reset cookie params using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withoutSecure")," resets ",(0,o.kt)("inlineCode",{parentName:"li"},"isSecure")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," in cookie"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withoutHttpOnly")," resets ",(0,o.kt)("inlineCode",{parentName:"li"},"isHttpOnly")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," in cookie"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withoutExpiry")," resets ",(0,o.kt)("inlineCode",{parentName:"li"},"expires")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"None")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withoutDomain")," resets ",(0,o.kt)("inlineCode",{parentName:"li"},"domain")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"None")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withoutPath")," resets ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"None")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withoutMaxAge")," resets ",(0,o.kt)("inlineCode",{parentName:"li"},"maxAge")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"None")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withoutSameSite")," resets ",(0,o.kt)("inlineCode",{parentName:"li"},"sameSite")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"None"))),(0,o.kt)("h2",{id:"sign-a-cookie"},"Sign a Cookie"),(0,o.kt)("p",null,"The cookies can be signed with a signature:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("inlineCode",{parentName:"li"},"sign"),"\nTo sign a cookie, you can use ",(0,o.kt)("inlineCode",{parentName:"li"},"sign"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},' val cookie = Cookie("key", "hello").withMaxAge(5 days)\n val app = Http.collect[Request] { case Method.GET -> !! / "cookie" =>\n    Response.ok.addCookie(cookie.sign("secret"))\n  }\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("inlineCode",{parentName:"li"},"signCookies")," middleware")),(0,o.kt)("p",null,"To sign all the cookies in your ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpApp"),", you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"signCookies")," middleware:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'  private val cookie = Cookie("key", "hello").withMaxAge(5 days)\n  private val app = Http.collect[Request] {\n    case Method.GET -> !! / "cookie" => Response.ok.addCookie(cookie)\n    case Method.GET -> !! / "secure-cookie" => Response.ok.addCookie(cookie.withSecure)\n  }\n\n  // Run it like any simple app\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    Server.start(8090, app @@ signCookies("secret")).exitCode\n')),(0,o.kt)("h2",{id:"adding-cookie-in-response"},"Adding Cookie in Response"),(0,o.kt)("p",null,"The cookies can be added in ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," headers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},' val cookie1: Cookie = Cookie("id", "abc")\n val res = Response.ok.addCookie(cookie1)\n')),(0,o.kt)("p",null,"It updates the response header ",(0,o.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," as"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Set-Cookie: <cookie-name>=<cookie-value>")),(0,o.kt)("h2",{id:"getting-cookie-from-request"},"Getting Cookie from Request"),(0,o.kt)("p",null,"In HTTP requests, cookies are stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cookie")," header.\n",(0,o.kt)("inlineCode",{parentName:"p"},"cookiesDecoded")," can be used to get all the cookies in the request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},' private val app = Http.collect[Request] {\n    case req @  Method.GET -> !! / "cookie" =>\n      Response.text(req.cookiesDecoded.mkString(""))\n  }\n')))}c.isMDXComponent=!0}}]);