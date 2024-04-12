"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9449],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>u});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=o,u=m["".concat(s,".").concat(c)]||m[c]||y[c]||r;return a?t.createElement(u,i(i({ref:n},p),{},{components:a})):t.createElement(u,i({ref:n},p))}));function u(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},93264:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=a(58168),o=(a(96540),a(15680));const r={id:"body",title:"Body"},i=void 0,l={unversionedId:"zio-http/dsl/body",id:"zio-http/dsl/body",title:"Body",description:"Body is a domain to model content for Request and Response. The body can be a fixed chunk of bytes, a stream of bytes, or form data, or any type that can be encoded into such representations (such as textual data using some character encoding, the contents of files, JSON, etc.).",source:"@site/docs/zio-http/dsl/body.md",sourceDirName:"zio-http/dsl",slug:"/zio-http/dsl/body",permalink:"/zio-http/dsl/body",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/dsl/body.md",tags:[],version:"current",frontMatter:{id:"body",title:"Body"},sidebar:"ecosystem-sidebar",previous:{title:"Headers",permalink:"/zio-http/dsl/headers"},next:{title:"Form",permalink:"/zio-http/dsl/form"}},s={},d=[{value:"Usages",id:"usages",level:2},{value:"Server-side",id:"server-side",level:3},{value:"Client-side",id:"client-side",level:3},{value:"Creating a Body",id:"creating-a-body",level:2},{value:"Empty Body",id:"empty-body",level:3},{value:"From a String and CharSequence",id:"from-a-string-and-charsequence",level:3},{value:"From Array/Chunk of Bytes",id:"from-arraychunk-of-bytes",level:3},{value:"From a Value with ZIO Schema Binary Codec",id:"from-a-value-with-zio-schema-binary-codec",level:3},{value:"From ZIO Streams",id:"from-zio-streams",level:3},{value:"From Stream of Bytes",id:"from-stream-of-bytes",level:4},{value:"From Stream of Values with ZIO Schema Binary Codec",id:"from-stream-of-values-with-zio-schema-binary-codec",level:4},{value:"From Stream of CharSequence",id:"from-stream-of-charsequence",level:4},{value:"From a File",id:"from-a-file",level:3},{value:"From WebSocketApp",id:"from-websocketapp",level:3},{value:"From a Multipart Form",id:"from-a-multipart-form",level:3},{value:"Structure of a Multipart Form",id:"structure-of-a-multipart-form",level:4},{value:"Creating Response Body from Multipart Form",id:"creating-response-body-from-multipart-form",level:4},{value:"From a URL-encoded Form",id:"from-a-url-encoded-form",level:3},{value:"Body Operations",id:"body-operations",level:2},{value:"Decoding Body Content as a String",id:"decoding-body-content-as-a-string",level:3},{value:"Decoding Body Content",id:"decoding-body-content",level:3},{value:"Retrieving Raw Body Content",id:"retrieving-raw-body-content",level:3},{value:"Retrieving Body Content as a ZIO Stream",id:"retrieving-body-content-as-a-zio-stream",level:3},{value:"Decoding Multipart Form Data",id:"decoding-multipart-form-data",level:3}],p={toc:d},m="wrapper";function y(e){let{components:n,...a}=e;return(0,o.yg)(m,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Body")," is a domain to model content for ",(0,o.yg)("inlineCode",{parentName:"p"},"Request")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Response"),". The body can be a fixed chunk of bytes, a stream of bytes, or form data, or any type that can be encoded into such representations (such as textual data using some character encoding, the contents of files, JSON, etc.)."),(0,o.yg)("p",null,"ZIO HTTP uses Netty at its core and Netty handles content as ",(0,o.yg)("inlineCode",{parentName:"p"},"ByteBuf"),". ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," helps you decode and encode this content into simpler, easier-to-use data types while creating a ",(0,o.yg)("inlineCode",{parentName:"p"},"Request")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"Response"),"."),(0,o.yg)("h2",{id:"usages"},"Usages"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," is used on both the server and client side."),(0,o.yg)("h3",{id:"server-side"},"Server-side"),(0,o.yg)("p",null,"On the server side, ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIO-HTTP")," models content in ",(0,o.yg)("inlineCode",{parentName:"p"},"Request")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Response")," as ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.empty")," as the default value. To add content while creating a ",(0,o.yg)("inlineCode",{parentName:"p"},"Response")," you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"Response")," constructor:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\nobject HelloExample extends ZIOAppDefault {\n  val app: HttpApp[Any] =\n    Routes(\n      Method.GET / "hello" ->\n        handler { req: Request =>\n          for {\n            name <- req.body.asString\n          } yield Response(body = Body.fromString(s"Hello $name!"))\n        }.sandbox,\n    ).toHttpApp\n\n  override val run = Server.serve(app).provide(Server.default)\n}\n')),(0,o.yg)("h3",{id:"client-side"},"Client-side"),(0,o.yg)("p",null,"On the client side, ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIO-HTTP")," models content in ",(0,o.yg)("inlineCode",{parentName:"p"},"Client")," as ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.Empty")," as the default value."),(0,o.yg)("p",null,"To add content while making a request using ZIO HTTP you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"Client.request")," method:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\nimport zio.http._\n\nobject HelloClientExample extends ZIOAppDefault {\n  val app: ZIO[Client & Scope, Throwable, Unit] =\n    for {\n      name <- Console.readLine("What is your name? ")\n      resp <- Client.request(Request.post("http://localhost:8080/hello", Body.fromString(name)))\n      body <- resp.body.asString\n      _    <- Console.printLine(s"Response: $body")\n    } yield ()\n\n  def run = app.provide(Client.default, Scope.default)\n}\n')),(0,o.yg)("p",null,"In the above example, we are making a ",(0,o.yg)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,o.yg)("inlineCode",{parentName:"p"},"/hello")," endpoint with a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," containing the name of the user. Then we read the response body as a ",(0,o.yg)("inlineCode",{parentName:"p"},"String")," and printed it:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"What is your name? John\nResponse: Hello John!\n")),(0,o.yg)("h2",{id:"creating-a-body"},"Creating a Body"),(0,o.yg)("h3",{id:"empty-body"},"Empty Body"),(0,o.yg)("p",null,"To create an empty body:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"val emptyBody: Body = Body.empty\n")),(0,o.yg)("h3",{id:"from-a-string-and-charsequence"},"From a String and CharSequence"),(0,o.yg)("p",null,"To create a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," that encodes a ",(0,o.yg)("inlineCode",{parentName:"p"},"String")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"CharSequence")," we can use ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromString")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromCharSequence"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'Body.fromString("any string", Charsets.Http)\nBody.fromCharSequence("any string", Charsets.Http)\n')),(0,o.yg)("h3",{id:"from-arraychunk-of-bytes"},"From Array/Chunk of Bytes"),(0,o.yg)("p",null,"To create a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," that encodes a chunk of bytes you can use ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromChunk"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'val chunkHttpData: Body = Body.fromChunk(Chunk.fromArray("Some String".getBytes(Charsets.Http)))\nval byteArrayHttpData: Body = Body.fromArray("Some String".getBytes(Charsets.Http))\n')),(0,o.yg)("h3",{id:"from-a-value-with-zio-schema-binary-codec"},"From a Value with ZIO Schema Binary Codec"),(0,o.yg)("p",null,"We can construct a body from an arbitrary value using zio-schema's binary codec:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"object Body {\n  def from[A](a: A)(implicit codec: BinaryCodec[A], trace: Trace): Body =\n    fromChunk(codec.encode(a))\n}\n")),(0,o.yg)("p",null,"For example, if you have a case class Person:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.schema.DeriveSchema\nimport zio.schema.codec.JsonCodec.schemaBasedBinaryCodec\n\ncase class Person(name: String, age: Int)\nimplicit val schema = DeriveSchema.gen[Person]\n\nval person = Person("John", 42)\nval body = Body.from(person)\n')),(0,o.yg)("p",null,"In the above example, we used a JSON codec to encode the person object into a body. Similarly, we can use other codecs like Avro, Protobuf, etc."),(0,o.yg)("h3",{id:"from-zio-streams"},"From ZIO Streams"),(0,o.yg)("p",null,"There are several ways to create a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," from a ZIO Stream:"),(0,o.yg)("h4",{id:"from-stream-of-bytes"},"From Stream of Bytes"),(0,o.yg)("p",null,"To create a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," that encodes a stream of bytes, we can utilize the ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromStream")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromStreamChunked")," constructors:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"object Body {\n  def fromStream(\n    stream: ZStream[Any, Throwable, Byte],\n    contentLength: Long\n  ): Body = ???\n\n  def fromStreamChunked(\n    stream: ZStream[Any, Throwable, Byte]\n  ): Body = ???\n}\n")),(0,o.yg)("p",null,"If we know the content length of the stream, we can use ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromStream"),". It will set the ",(0,o.yg)("inlineCode",{parentName:"p"},"content-length")," header in the response to the given value:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'val chunk = Chunk.fromArray("Some String".getBytes(Charsets.Http))\nval streamHttpData1: Body = Body.fromStream(ZStream.fromChunk(chunk), contentLength = chunk.length)\n')),(0,o.yg)("p",null,"Otherwise, we can use ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromStreamChunked"),", which is useful for streams with an unknown content length. Assume we have a service that generates a response to a request in chunks; we can stream the response to the client while we don't know the exact length of the response. Therefore, the ",(0,o.yg)("inlineCode",{parentName:"p"},"transfer-encoding")," header will be set to ",(0,o.yg)("inlineCode",{parentName:"p"},"chunked")," in the response:"),(0,o.yg)("h4",{id:"from-stream-of-values-with-zio-schema-binary-codec"},"From Stream of Values with ZIO Schema Binary Codec"),(0,o.yg)("p",null,"To create a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," that encodes a stream of values of type ",(0,o.yg)("inlineCode",{parentName:"p"},"A"),", we can use ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromStream")," with a ",(0,o.yg)("inlineCode",{parentName:"p"},"BinaryCodec"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"object Body {\n  def fromStream[A](stream: ZStream[Any, Throwable, A])(implicit codec: BinaryCodec[A], trace: Trace): Body = ???\n}\n")),(0,o.yg)("p",null,"Let's create a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," from a stream of ",(0,o.yg)("inlineCode",{parentName:"p"},"Person"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.schema.DeriveSchema\nimport zio.schema.codec.JsonCodec.schemaBasedBinaryCodec\n\ncase class Person(name: String, age: Int)\nimplicit val schema = DeriveSchema.gen[Person]\n\nval persons: ZStream[Any, Nothing, Person] =\n  ZStream.fromChunk(Chunk(Person("John", 42), Person("Jane", 40)))\n\nval body = Body.fromStream(persons)\n')),(0,o.yg)("p",null,"The header ",(0,o.yg)("inlineCode",{parentName:"p"},"transfer-encoding")," will be set to ",(0,o.yg)("inlineCode",{parentName:"p"},"chunked")," in the response."),(0,o.yg)("h4",{id:"from-stream-of-charsequence"},"From Stream of CharSequence"),(0,o.yg)("p",null,"To create a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," that encodes a stream of ",(0,o.yg)("inlineCode",{parentName:"p"},"CharSequence"),", we can use ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromCharSequenceStream")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromCharSequenceStreamChunked")," constructors."),(0,o.yg)("p",null,"If we know the content length of the stream, we can use ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromCharSequenceStream"),", which will set the ",(0,o.yg)("inlineCode",{parentName:"p"},"content-length")," header in the response to the given value. Otherwise, we can use ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromCharSequenceStreamChunked"),", which is useful for streams with an unknown content length. In this case, the ",(0,o.yg)("inlineCode",{parentName:"p"},"transfer-encoding")," header will be set to ",(0,o.yg)("inlineCode",{parentName:"p"},"chunked")," in the response."),(0,o.yg)("h3",{id:"from-a-file"},"From a File"),(0,o.yg)("p",null,"To create an ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," that encodes a ",(0,o.yg)("inlineCode",{parentName:"p"},"File")," we can use ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromFile"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'val fileHttpData: ZIO[Any, Nothing, Body] = \n  Body.fromFile(new java.io.File(getClass.getResource("/fileName.txt").getPath))\n// java.lang.NullPointerException: Cannot invoke "java.net.URL.getPath()" because the return value of "java.lang.Class.getResource(String)" is null\n//  at repl.MdocSession$MdocApp$$anonfun$20.apply$mcV$sp(body.md:169)\n//  at repl.MdocSession$MdocApp$$anonfun$20.apply(body.md:167)\n//  at repl.MdocSession$MdocApp$$anonfun$20.apply(body.md:167)\n')),(0,o.yg)("h3",{id:"from-websocketapp"},"From WebSocketApp"),(0,o.yg)("p",null,"Any ",(0,o.yg)("inlineCode",{parentName:"p"},"WebSocketApp[Any]")," can be converted to a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," using ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromWebSocketApp"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"object Body {\n  def fromSocketApp(app: WebSocketApp[Any]): WebsocketBody = ???\n}\n")),(0,o.yg)("h3",{id:"from-a-multipart-form"},"From a Multipart Form"),(0,o.yg)("p",null,"Multipart form data is a method for encoding form data within an HTTP request. It allows for the transmission of multiple types of data, including text, files, and binary data, in a single request."),(0,o.yg)("p",null,"This makes it ideal for scenarios where form submissions require complex data structures, such as file uploads or rich form inputs."),(0,o.yg)("h4",{id:"structure-of-a-multipart-form"},"Structure of a Multipart Form"),(0,o.yg)("p",null,"A multipart form consists of multiple parts, each representing a different field or file to be transmitted. These parts are separated by a unique boundary string. Each part typically includes headers specifying metadata about the data being transmitted, such as content type and content disposition, followed by the actual data."),(0,o.yg)("p",null,"In ZIO HTTP, the ",(0,o.yg)("inlineCode",{parentName:"p"},"Form")," data type is used to represent a form that can be either multipart or URL-encoded. It is a wrapper around ",(0,o.yg)("inlineCode",{parentName:"p"},"Chunk[FormField]"),"."),(0,o.yg)("h4",{id:"creating-response-body-from-multipart-form"},"Creating Response Body from Multipart Form"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromMultipartForm")," is used to create a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," from a multipart form:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"object Body {\n  def fromMultipartForm(form: Form, specificBoundary: Boundary): Body = ???\n}\n")),(0,o.yg)("p",null,"Let say we create a body from a multipart form:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'val body = \n  Body.fromMultipartForm(\n    Form(\n      FormField.simpleField("key1", "value1"),\n      FormField.binaryField(\n        "file1",\n        Chunk.fromArray("Hello, world!".getBytes),\n        MediaType.text.`plain`,\n        filename = Some("hello.txt"),\n      ),\n      FormField.binaryField(\n        "file2",\n        Chunk.fromArray("## Hello, world!".getBytes),\n        MediaType.text.`markdown`,\n        filename = Some("hello.md"),\n      ),\n    ),\n    Boundary("boundary123"),\n  )\n')),(0,o.yg)("p",null,"This will create a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," which can be rendered as:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'--boundary123\nContent-Disposition: form-data; name="key1"\nContent-Type: text/plain\n\nvalue1\n--boundary123\nContent-Disposition: form-data; name="file1"; filename="hello.txt"\nContent-Type: text/plain\n\nHello, world!\n--boundary123\nContent-Disposition: form-data; name="file2"; filename="hello.md"\nContent-Type: text/markdown\n\n## Hello, world!\n--boundary123--\n\n')),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"When utilizing MultipartForm for the response body, ensure the correct Content-Type header is included in the response, such as ",(0,o.yg)("inlineCode",{parentName:"p"},"Content-Type: multipart/<proper-subtype>; boundary=boundary123"),".")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Please be aware that utilizing a multipart form for the response body is uncommon and may not be supported by all clients. If you intend to use this method, ensure comprehensive support across various browsers.")),(0,o.yg)("h3",{id:"from-a-url-encoded-form"},"From a URL-encoded Form"),(0,o.yg)("p",null,'URL encoding is a technique used to convert data into a format that can be transmitted over the internet. This is necessary because URLs have certain restrictions on the characters they can contain. URL encoding replaces unsafe characters with a "%" followed by two hexadecimal digits. For example, a space is encoded as "%20", and special characters like "&" become "%26".'),(0,o.yg)("p",null,'A URL-encoded form consists of key-value pairs, where each pair represents a form field and its corresponding value. These pairs are concatenated together into a query string, separated by "&" symbols.'),(0,o.yg)("p",null,'For instance, consider a simple form with fields for "username" and "password". The URL-encoded form data looks like this:'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"username=john&password=secretpassword\n")),(0,o.yg)("p",null,"Similar to ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromMultipartForm"),", the ",(0,o.yg)("inlineCode",{parentName:"p"},"Body.fromURLEncodedForm")," is used to create a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," from a URL-encoded form:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'val body = \n  Body.fromURLEncodedForm(\n    Form(\n      FormField.simpleField("username", "john"),\n      FormField.simpleField("password", "secretpassword"),\n    )\n  )\n')),(0,o.yg)("p",null,"This will create a ",(0,o.yg)("inlineCode",{parentName:"p"},"Body")," which can be rendered as:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"username=john&password=secretpassword\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"URL encoding is primarily useful for encoding data in the query string of a URL or for encoding form data in HTTP requests. It is not typically used for the response body.")),(0,o.yg)("h2",{id:"body-operations"},"Body Operations"),(0,o.yg)("h3",{id:"decoding-body-content-as-a-string"},"Decoding Body Content as a String"),(0,o.yg)("p",null,"We can decode the content of the body into a ",(0,o.yg)("inlineCode",{parentName:"p"},"String")," using the ",(0,o.yg)("inlineCode",{parentName:"p"},"Body#asString")," method. It allows decoding with both default and custom charsets:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import java.nio.charset.Charset\n\nval defaultCharsetString = body.asString\nval customCharsetString = body.asString(Charset.forName("UTF-8"))\n')),(0,o.yg)("p",null,"These methods return a ",(0,o.yg)("inlineCode",{parentName:"p"},"Task")," representing the decoded string content of the body."),(0,o.yg)("h3",{id:"decoding-body-content"},"Decoding Body Content"),(0,o.yg)("p",null,"By providing a ",(0,o.yg)("inlineCode",{parentName:"p"},"BinaryCodec[A]")," we can decode the body content to a value of type ",(0,o.yg)("inlineCode",{parentName:"p"},"A"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.schema._\nimport zio.schema.codec.JsonCodec.schemaBasedBinaryCodec\n\ncase class Person(name: String, age: Int)\n\nimplicit val schema: Schema[Person] = DeriveSchema.gen[Person]\n\nval person        = Person("John", 42)\nval body          = Body.from(person)\nval decodedPerson = body.to[Person]\n')),(0,o.yg)("h3",{id:"retrieving-raw-body-content"},"Retrieving Raw Body Content"),(0,o.yg)("p",null,"We can access the content of the body as an array of bytes or a chunk of bytes. This is useful when dealing with binary data. Here's how you can do it:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"val byteArray: Task[Array[Byte]] = body.asArray\nval byteChunk: Task[Chunk[Byte]] = body.asChunk\n")),(0,o.yg)("p",null,"These methods return the body content as an array of bytes or a ZIO chunk of bytes, respectively."),(0,o.yg)("h3",{id:"retrieving-body-content-as-a-zio-stream"},"Retrieving Body Content as a ZIO Stream"),(0,o.yg)("p",null,"We can access the content of the body as a ZIO stream of bytes:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"val byteStream = body.asStream\n// byteStream: ZStream[Any, Throwable, Byte] = zio.stream.ZStream@2af0d5ba\n")),(0,o.yg)("h3",{id:"decoding-multipart-form-data"},"Decoding Multipart Form Data"),(0,o.yg)("p",null,"We can decode the content of the body as multipart form data:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"val multipartFormData: Task[Form] = body.asMultipartForm\n")),(0,o.yg)("p",null,"ZIO HTTP supports streaming, allowing us to handle large files using ",(0,o.yg)("strong",{parentName:"p"},"multipart/form-data"),". By utilizing ",(0,o.yg)("inlineCode",{parentName:"p"},"Body#asMultipartFormStream"),", which gives us a ",(0,o.yg)("inlineCode",{parentName:"p"},"Task")," of ",(0,o.yg)("inlineCode",{parentName:"p"},"StreamingForm"),". Using the ",(0,o.yg)("inlineCode",{parentName:"p"},"StreamingForm#fields")," method we can access a stream of ",(0,o.yg)("inlineCode",{parentName:"p"},"FormField")," representing the form's parts:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"for {\n  form  <- body.asMultipartFormStream\n  count <- form.fields.flatMap {\n    case FormField.Binary(name, data, contentType, transferEncoding, filename) => ???\n    case FormField.StreamingBinary(name, contentType, transferEncoding, filename, data) => ???\n    case FormField.Text(name, value, contentType, filename) => ???\n    case FormField.Simple(name, value) => ???\n  }.run(???)\n} yield ()\n")),(0,o.yg)("p",null,"Also, if there's sufficient memory available, we can execute ",(0,o.yg)("inlineCode",{parentName:"p"},"StreamingForm#collectAll")," method gather all its parts into memory:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"val streamingForm: Task[StreamingForm] = body.asMultipartFormStream\nval collectedForm: Task[Form] = streamingForm.flatMap(_.collectAll)\n")))}y.isMDXComponent=!0}}]);