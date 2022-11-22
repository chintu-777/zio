"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[26637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),k=s(n),m=o,d=k["".concat(i,".").concat(m)]||k[m]||u[m]||r;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},65691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={id:"s3-connector",title:"S3 Connector"},l=void 0,c={unversionedId:"s3-connector",id:"s3-connector",title:"S3 Connector",description:"Setup",source:"@site/node_modules/@zio.dev/zio-connect/s3-connector.md",sourceDirName:".",slug:"/s3-connector",permalink:"/zio-connect/s3-connector",draft:!1,tags:[],version:"current",frontMatter:{id:"s3-connector",title:"S3 Connector"},sidebar:"sidebar",previous:{title:"File Connector",permalink:"/zio-connect/file-connector"}},i={},s=[{value:"Setup",id:"setup",level:2},{value:"How to use it?",id:"how-to-use-it",level:2},{value:"Test / Stub",id:"test--stub",level:2},{value:"Operators &amp; Examples",id:"operators--examples",level:2},{value:"<code>copyObject</code>",id:"copyobject",level:2},{value:"<code>createBucket</code>",id:"createbucket",level:2},{value:"<code>deleteEmptyBucket</code>",id:"deleteemptybucket",level:2},{value:"<code>deleteObjects</code>",id:"deleteobjects",level:2},{value:"<code>existsBucket</code>",id:"existsbucket",level:2},{value:"<code>existsObject</code>",id:"existsobject",level:2},{value:"<code>getObject</code>",id:"getobject",level:2},{value:"<code>listBuckets</code>",id:"listbuckets",level:2},{value:"<code>listObjects</code>",id:"listobjects",level:2},{value:"<code>moveObject</code>",id:"moveobject",level:2},{value:"<code>putObject</code>",id:"putobject",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-connect-s3" % "0.3.0"\n')),(0,o.kt)("h2",{id:"how-to-use-it"},"How to use it?"),(0,o.kt)("p",null,"All available S3Connector combinators and operations are available in the package object ",(0,o.kt)("inlineCode",{parentName:"p"},"zio.connect.s3"),", you only need to import ",(0,o.kt)("inlineCode",{parentName:"p"},"zio.connect.s3._")),(0,o.kt)("p",null,"First, you must configure the underlying S3 connection provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"zio-aws")," you can read more about how to configure it ",(0,o.kt)("a",{parentName:"p",href:"https://zio.github.io/zio-aws/docs/overview/overview_config"},"here"),"\nIf you have default credentials in the system environment typically at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials")," or as env variables\nthe following configuration will likely work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.connect.s3._\nimport zio.stream._\nimport zio.aws.core.config.AwsConfig\nimport zio.aws.netty.NettyHttpClient\n\nlazy val zioAwsConfig = NettyHttpClient.default >>> AwsConfig.default\n")),(0,o.kt)("p",null,"Now let's create a bucket:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val bucketName = BucketName("this-very-charming-bucket-name") // BucketName is a zio prelude newtype of String\n\nval program1: ZIO[S3Connector, S3Exception, Unit] =\n  for {\n    _ <- ZStream(bucketName) >>> createBucket\n  } yield ()\n')),(0,o.kt)("p",null,"The way to understand this is to recognize that ",(0,o.kt)("inlineCode",{parentName:"p"},"createBucket")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZSink")," that expects elements of type ",(0,o.kt)("inlineCode",{parentName:"p"},"BucketName")," as its streamed input.\nIn this case we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZStream")," with a single element of type ",(0,o.kt)("inlineCode",{parentName:"p"},"BucketName")," but we could have an arbitrary number of buckets and the code\nwould look and work virtually the same."),(0,o.kt)("p",null,"Okay, let's put some readable bytes into that bucket:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val objectKey = ObjectKey("my-object") // ObjectKey is a zio prelude newtype of String\n\nval program2: ZIO[S3Connector, S3Exception, Unit] =\n  for {\n    content <- Random.nextString(100).map(_.getBytes).map(Chunk.fromArray)\n    _       <- ZStream.fromChunk(content) >>> putObject(bucketName, objectKey)\n  } yield ()\n')),(0,o.kt)("p",null,"Here a stream of chunks of bytes are streamed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"putObject")," sink. The sink takes two arguments, the bucket name and the object key to associate with the data\nbeing streamed in."),(0,o.kt)("p",null,"Let's list objects in the bucket:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val program3: ZIO[S3Connector, S3Exception, Chunk[ObjectKey]] =\n  for {\n    keys <- listObjects(bucketName).runCollect\n  } yield keys\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"listObjects")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZStream")," that emits elements of type ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectKey")," and we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"runCollect")," operator to collect\nall the elements into a ",(0,o.kt)("inlineCode",{parentName:"p"},"Chunk"),"."),(0,o.kt)("p",null,"Here's what it looks like to get an object put earlier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val program5: ZIO[S3Connector, Object, String] =\n  for {\n    content <- getObject(bucketName, objectKey) >>> ZPipeline.utf8Decode >>> ZSink.mkString\n  } yield content\n")),(0,o.kt)("p",null,"Finally, let's look at how to run one of these program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def run = program1.provide(zioAwsConfig, S3.live, s3ConnectorLiveLayer)\n")),(0,o.kt)("p",null,"You need to provide the configuration layer for ",(0,o.kt)("inlineCode",{parentName:"p"},"zio-aws"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"S3")," layer from ",(0,o.kt)("inlineCode",{parentName:"p"},"zio-aws")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"s3ConnectorLiveLayer"),"\nwhich is the live implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"S3Connector")," interface."),(0,o.kt)("h2",{id:"test--stub"},"Test / Stub"),(0,o.kt)("p",null,"A stub implementation of S3Connector is provided for testing purposes via the ",(0,o.kt)("inlineCode",{parentName:"p"},"TestS3Connector.layer"),". It uses\ninternally an ",(0,o.kt)("inlineCode",{parentName:"p"},"TRef[Map[BucketName, S3Bucket]]")," instead of talking to S3. You can use create the test harness as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.connect.s3._\n\nobject MyTestSpec extends ZIOSpecDefault {\n\n  override def spec =\n    suite("MyTestSpec")(???)\n      .provide(s3ConnectorTestLayer)\n\n}\n')),(0,o.kt)("h2",{id:"operators--examples"},"Operators & Examples"),(0,o.kt)("p",null,"The following operators are available:"),(0,o.kt)("h2",{id:"copyobject"},(0,o.kt)("inlineCode",{parentName:"h2"},"copyObject")),(0,o.kt)("p",null,"Copy an object from one bucket to another"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(CopyObject(bucket1, objectKey, bucket2)) >>> copyObject\n")),(0,o.kt)("h2",{id:"createbucket"},(0,o.kt)("inlineCode",{parentName:"h2"},"createBucket")),(0,o.kt)("p",null,"Creates S3 buckets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(bucketName1, bucketName2) >>> createBucket\n")),(0,o.kt)("h2",{id:"deleteemptybucket"},(0,o.kt)("inlineCode",{parentName:"h2"},"deleteEmptyBucket")),(0,o.kt)("p",null,"Deletes empty S3 buckets "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(bucketName1, bucketName2) >>> deleteEmptyBucket\n")),(0,o.kt)("p",null,"The buckets must be empty, if they are not you will get an ",(0,o.kt)("inlineCode",{parentName:"p"},"BucketsNotEmptyException")," from S3"),(0,o.kt)("h2",{id:"deleteobjects"},(0,o.kt)("inlineCode",{parentName:"h2"},"deleteObjects")),(0,o.kt)("p",null,"Deletes objects from an S3 bucket"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(objectKey1, objectKey2) >>> deleteObjects(bucketName)\n")),(0,o.kt)("p",null,"Does not result in an error, if object keys do not exist"),(0,o.kt)("h2",{id:"existsbucket"},(0,o.kt)("inlineCode",{parentName:"h2"},"existsBucket")),(0,o.kt)("p",null,"Checks if a bucket exists"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(bucketName1, bucketName2) >>> existsBucket\n")),(0,o.kt)("h2",{id:"existsobject"},(0,o.kt)("inlineCode",{parentName:"h2"},"existsObject")),(0,o.kt)("p",null,"Checks if an object exists in an s3 bucket"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(objectKey1, objectKey2) >>> existsObject(bucketName)\n")),(0,o.kt)("p",null,"It expects the bucket to exist and will return a ",(0,o.kt)("inlineCode",{parentName:"p"},"NoSuchBucketException")," if the ",(0,o.kt)("em",{parentName:"p"},"bucket")," does not"),(0,o.kt)("h2",{id:"getobject"},(0,o.kt)("inlineCode",{parentName:"h2"},"getObject")),(0,o.kt)("p",null,"Gets an object from an S3 bucket"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"getObject(bucket2, objectKey) >>> ZPipeline.utf8Decode >>> ZSink.mkString\n")),(0,o.kt)("p",null,"You will receive the objects as a stream of bytes, parsing/decoding of course depends on the object contents.\nThe example here assumes you have a stream of utf-8 encoded bytes and you want to decode them into a string."),(0,o.kt)("h2",{id:"listbuckets"},(0,o.kt)("inlineCode",{parentName:"h2"},"listBuckets")),(0,o.kt)("p",null,"Lists all buckets in the account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"listBuckets >>> ZSink.collectAll\n")),(0,o.kt)("p",null,"Currently, gets ALL buckets, there is no pagination support yet. You may want to use some other ZStream combinators\nto filter the lists prior to collecting bucket names"),(0,o.kt)("h2",{id:"listobjects"},(0,o.kt)("inlineCode",{parentName:"h2"},"listObjects")),(0,o.kt)("p",null,"Lists all objects keys in a bucket takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"BucketName")," as an argument"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"listObjects(bucketName) >>> ZSink.collectAll\n")),(0,o.kt)("p",null,"Currently, gets ALL objects in the bucket, there is no pagination support yet. You may want to use some other ZStream combinators\nto filter the lists prior to collecting object keys"),(0,o.kt)("h2",{id:"moveobject"},(0,o.kt)("inlineCode",{parentName:"h2"},"moveObject")),(0,o.kt)("p",null,"Move an object from one bucket to another"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(MoveObject(sourceBucket, sourceKey, targetBucket, targetKey)) >>> moveObject\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sourceBucket"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sourceKey"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"targetBucket")," must exist. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"targetKey")," exists, it will be overwritten."),(0,o.kt)("h2",{id:"putobject"},(0,o.kt)("inlineCode",{parentName:"h2"},"putObject")),(0,o.kt)("p",null,"Puts an object into an S3 bucket"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream.fromChunk(content) >>> putObject(bucketName, objectKey)\n")),(0,o.kt)("p",null,"Expects as stream of bytes, returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Unit")," if successful."))}u.isMDXComponent=!0}}]);