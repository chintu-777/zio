"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6156],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?o.createElement(v,i(i({ref:n},s),{},{components:t})):o.createElement(v,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},562:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={id:"with-monix",title:"How to Interop with Monix?"},p=void 0,c={unversionedId:"howto/interop/with-monix",id:"howto/interop/with-monix",isDocsHomePage:!1,title:"How to Interop with Monix?",description:"Checkout interop-monix module for inter-operation support.",source:"@site/docs/howto/interop/with-monix.md",sourceDirName:"howto/interop",slug:"/howto/interop/with-monix",permalink:"/howto/interop/with-monix",tags:[],version:"current",frontMatter:{id:"with-monix",title:"How to Interop with Monix?"},sidebar:"howto-sidebar",previous:{title:"How to Interop with JavaScript?",permalink:"/howto/interop/with-javascript"},next:{title:"How to Interop with Scalaz 7.x?",permalink:"/howto/interop/with-scalaz-7x"}},s=[{value:"<code>Task</code> conversions",id:"task-conversions",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"<code>Coeval</code> conversions",id:"coeval-conversions",children:[{value:"Example",id:"example-1",children:[],level:3}],level:2}],u={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Checkout ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/interop-monix"},(0,a.kt)("inlineCode",{parentName:"a"},"interop-monix"))," module for inter-operation support."),(0,a.kt)("h2",{id:"task-conversions"},(0,a.kt)("inlineCode",{parentName:"h2"},"Task")," conversions"),(0,a.kt)("p",null,"Interop layer provides the following conversions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"from ",(0,a.kt)("inlineCode",{parentName:"li"},"Task[A]")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"UIO[Task[A]]")),(0,a.kt)("li",{parentName:"ul"},"from ",(0,a.kt)("inlineCode",{parentName:"li"},"Task[A]")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Task[A]"))),(0,a.kt)("p",null,"To convert an ",(0,a.kt)("inlineCode",{parentName:"p"},"IO")," value to ",(0,a.kt)("inlineCode",{parentName:"p"},"Task"),", use the following method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"def toTask: UIO[eval.Task[A]]\n")),(0,a.kt)("p",null,"To perform conversion in other direction, use the following extension method\navailable on ",(0,a.kt)("inlineCode",{parentName:"p"},"IO")," companion object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"def fromTask[A](task: eval.Task[A])(implicit scheduler: Scheduler): Task[A]\n")),(0,a.kt)("p",null,"Note that in order to convert the ",(0,a.kt)("inlineCode",{parentName:"p"},"Task")," to an ",(0,a.kt)("inlineCode",{parentName:"p"},"IO"),", an appropriate ",(0,a.kt)("inlineCode",{parentName:"p"},"Scheduler"),"\nneeds to be available."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import monix.eval.Task\nimport monix.execution.Scheduler.Implicits.global\nimport zio.{ IO, Runtime }\nimport zio.interop.monix._\n\nobject UnsafeExample extends App {\n\n  val runtime = Runtime.default\n\n  def main(args: Array[String]): Unit = {\n    val io1 = IO.succeed(10)\n    val t1  = runtime.unsafeRun(io1.toTask)\n\n    t1.runToFuture.foreach(r => println(s"IO to task result is $r"))\n\n    val t2  = Task(10)\n    val io2 = IO.fromTask(t2).map(r => s"Task to IO result is $r")\n\n    println(runtime.unsafeRun(io2))\n  }\n}\n')),(0,a.kt)("h2",{id:"coeval-conversions"},(0,a.kt)("inlineCode",{parentName:"h2"},"Coeval")," conversions"),(0,a.kt)("p",null,"To convert an ",(0,a.kt)("inlineCode",{parentName:"p"},"IO")," value to ",(0,a.kt)("inlineCode",{parentName:"p"},"Coeval"),", use the following method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"def toCoeval: UIO[eval.Coeval[A]]\n")),(0,a.kt)("p",null,"To perform conversion in other direction, use the following extension method\navailable on ",(0,a.kt)("inlineCode",{parentName:"p"},"IO")," companion object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"def fromCoeval[A](coeval: eval.Coeval[A]): Task[A]\n")),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import monix.eval.Coeval\nimport zio.{ IO, Runtime }\nimport zio.interop.monix._\n\nobject UnsafeExample extends App {\n\n  val runtime = Runtime.default\n\n  def main(args: Array[String]): Unit = {\n    val io1 = IO.succeed(10)\n    val c1  = runtime.unsafeRun(io1.toCoeval) \n\n    println(s"IO to coeval result is ${c1.value}")\n\n    val c2  = Coeval(10)\n    val io2 = IO.fromCoeval(c2).map(r => s"Coeval to IO result is $r")\n\n    println(runtime.unsafeRun(io2))\n  }\n}\n')))}m.isMDXComponent=!0}}]);