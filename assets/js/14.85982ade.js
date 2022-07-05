(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{398:function(e,o,v){"use strict";v.r(o);var _=v(1),a=Object(_.a)({},(function(){var e=this,o=e.$createElement,v=e._self._c||o;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("本篇博客用来。。。。\n")]),e._v(" "),v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),v("p",[e._v("随着Web应用程序出现以来，人们对与能够直接在客户端上存储信息能力的要求始终没有停止过。应用开发人员在找各种方式将数据存储在客户端上。从刚开始的Cookie存储方案，到现在的Web Storage和indexedDB，本文将主要介绍这三种浏览器存储方式优缺点。")]),e._v(" "),v("h2",{attrs:{id:"cookie"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[e._v("#")]),e._v(" Cookie")]),e._v(" "),v("h3",{attrs:{id:"_1、cookie是什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、cookie是什么？"}},[e._v("#")]),e._v(" 1、Cookie是什么？")]),e._v(" "),v("p",[v("code",[e._v("HTTP Cookie")]),e._v("，通常直接叫做"),v("code",[e._v("cookie")]),e._v("，起初是在客户端用于存储会话信息的。该标准要求服务器对 任意 "),v("code",[e._v("HTTP")]),e._v("请求发送 "),v("code",[e._v("Set-Cookie")]),e._v(" 而"),v("code",[e._v("HTTP")]),e._v("头作为响应的一部分，其中包含会话信息。例如，这种服务器响 应的头可能如下：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("HTTP/1.1 200 OK \nContent-type: text/html \nSet-Cookie: name=value \nOther-header: other-header-value \n")])])]),v("p",[e._v("这个"),v("code",[e._v("HTTP")]),e._v("响应设置以"),v("code",[e._v("name")]),e._v("为名称、以"),v("code",[e._v("value")]),e._v("为值的一个"),v("code",[e._v("cookie")]),e._v("，名称和值在传送时都必须是 "),v("code",[e._v("URL")]),e._v(" 编码的。浏览器会存储这样的会话信息，并在这之后，通过为每个请求添加 "),v("code",[e._v("Cookie")]),e._v(" ,"),v("code",[e._v("HTTP")]),e._v(" 头将信 息发送回服务器，如下所示：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("GET /index.html HTTP/1.1 \nCookie: name=value \nOther-header: other-header-value \n")])])]),v("p",[e._v("发送回服务器的额外信息可以用于唯一验证客户来自于发送的哪个请求。")]),e._v(" "),v("p",[v("strong",[e._v("2、Cookie主要构成：")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("name")]),e._v("（名称）：一个唯一确定"),v("code",[e._v("cookie")]),e._v("的名称。"),v("code",[e._v("cookie")]),e._v("的名称必须是经过 "),v("code",[e._v("URL")]),e._v("编码的。")]),e._v(" "),v("li",[v("code",[e._v("value")]),e._v("（值）：储存在 "),v("code",[e._v("cookie")]),e._v("中的字符串值。值必须被 "),v("code",[e._v("URL")]),e._v("编码。")]),e._v(" "),v("li",[v("code",[e._v("Domain")]),e._v("（域）："),v("code",[e._v("cookie")]),e._v(" 对于哪个域是有效的。所有向该域发送的请求中都会包含这个 "),v("code",[e._v("cookie")]),e._v(" 信息。")]),e._v(" "),v("li",[v("code",[e._v("path")]),e._v("（路径）：对于指定域中的那个路径，应该向服务器发送 "),v("code",[e._v("cookie")]),e._v("。")]),e._v(" "),v("li",[v("code",[e._v("Expires/Max-Age")]),e._v("（失效时间）：表示 "),v("code",[e._v("cookie")]),e._v(" 何时应该被删除的时间戳（也就是，何时应该停止向服务器发送这个 "),v("code",[e._v("cookie")]),e._v("）。")]),e._v(" "),v("li",[v("code",[e._v("HttpOnly")]),e._v("：这个属性是面试的时候常考的，如果这个属性设置为"),v("code",[e._v("true")]),e._v("，就不能通过"),v("code",[e._v("js")]),e._v("脚本来获取"),v("code",[e._v("cookie")]),e._v("的值，能有效的防止"),v("code",[e._v("xss")]),e._v("攻击。")]),e._v(" "),v("li",[v("code",[e._v("Secure")]),e._v("（安全标志）：指定后，"),v("code",[e._v("cookie")]),e._v(" 只有在使用 "),v("code",[e._v("SSL")]),e._v(" 连接的时候才发送到服务器。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/23/16f3185c7d9314ba?w=1179&h=295&f=png&s=42322",alt:""}})]),e._v(" "),v("h3",{attrs:{id:"_3、cookie的原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、cookie的原理"}},[e._v("#")]),e._v(" 3、Cookie的原理")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/23/16f317abf4999a98?w=544&h=190&f=png&s=72583",alt:""}}),e._v("\n第一次访问网站的时候，浏览器发出请求，服务器响应请求后，会在响应头里面添加一个"),v("code",[e._v("Set-Cookie")]),e._v("，将"),v("code",[e._v("cookie")]),e._v("放入到响应请求中，在浏览器第二次发请求的时候，会通过"),v("code",[e._v("Cookie")]),e._v("请求头部将"),v("code",[e._v("Cookie")]),e._v("信息发送给服务器，服务端会辨别用户身份，另外，"),v("code",[e._v("Cookie")]),e._v("的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。")]),e._v(" "),v("h3",{attrs:{id:"_4、cookie生成方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、cookie生成方式"}},[e._v("#")]),e._v(" 4、Cookie生成方式")]),e._v(" "),v("p",[v("strong",[e._v("Cookie的生成方式主要有两种：")])]),e._v(" "),v("ol",[v("li",[e._v("服务端设置 cookie")])]),e._v(" "),v("p",[e._v("客户端第一次向服务端请求时，在相应的请求头中就有"),v("code",[e._v("set-cookie")]),e._v("字段，用来标识是哪个用户。")]),e._v(" "),v("p",[e._v("下图为登录腾讯云服务端响应头截图，"),v("code",[e._v("cookie")]),e._v("设置了相关的属性："),v("code",[e._v("expires")]),e._v("、"),v("code",[e._v("path")]),e._v("等。"),v("code",[e._v("response headers")]),e._v("服务端可以设置"),v("code",[e._v("cookie")]),e._v(" 的所有选项："),v("code",[e._v("expires")]),e._v("、"),v("code",[e._v("domain")]),e._v("、"),v("code",[e._v("path")]),e._v("、"),v("code",[e._v("secure")]),e._v("、"),v("code",[e._v("HttpOnly")]),e._v("。\n"),v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/23/16f319a11756173f?w=1136&h=253&f=png&s=19569",alt:""}})]),e._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[e._v("客户端设置 cookie")])]),e._v(" "),v("p",[v("code",[e._v("cookie")]),e._v("不像"),v("code",[e._v("web Storage")]),e._v("有"),v("code",[e._v("setItem")]),e._v("，"),v("code",[e._v("getItem")]),e._v("，"),v("code",[e._v("removeItem")]),e._v("，"),v("code",[e._v("clear")]),e._v("等方法，需要自己封装。简单地在浏览器的控制台里输入:")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('document.cookie="name=lynnshen; age=18"\n')])])]),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/23/16f31a0d48a9bfcd?w=1181&h=140&f=png&s=7563",alt:""}}),e._v("\n最简单的设置多个"),v("code",[e._v("cookie")]),e._v("的方法就是重复执行"),v("code",[e._v('document.cookie = "key=name"')])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('document.cookie = "name=lynnshen";\ndocument.cookie = "age=18";\n')])])]),v("p",[e._v("再看控制台：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/23/16f31a26093807da?w=1280&h=344&f=png&s=24455",alt:""}})]),e._v(" "),v("h3",{attrs:{id:"_5、cookie设置、读取、删除方法的简单封装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、cookie设置、读取、删除方法的简单封装"}},[e._v("#")]),e._v(" 5、Cookie设置、读取、删除方法的简单封装")]),e._v(" "),v("ol",[v("li",[e._v("设置cookie")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('function setCookie(name, value, expires, path, domain, secure) {\n    var cookieText = encodeURIComponent(name) + "=" +\n    encodeURIComponent(value); \n    if (expires instanceof Date) {             \n        cookieText += "; expires=" + expires.toGMTString();         \n    } \n    if (path) {             \n        cookieText += "; path=" + path;         \n    } \n    if (domain) {            \n        cookieText += "; domain=" + domain;        \n    } \n    if (secure) {          \n     cookieText += "; secure";      \n    } \n    document.cookie = cookieText; \n}\n')])])]),v("ol",{attrs:{start:"2"}},[v("li",[e._v("删除cookie")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v(' function removeCookie(name, path, domain, secure){         \n    this.set(name, "", new Date(0), path, domain, secure);    \n } \n \n')])])]),v("ol",{attrs:{start:"3"}},[v("li",[e._v("读取cookie")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('function getCookie(name){\n    var cookieName = encodeURIComponent(name) + "=";         \n    var cookieStart = document.cookie.indexOf(cookieName);\n    var cookieValue = null; \n    if (cookieStart > -1){            \n        var cookieEnd = document.cookie.indexOf(";", cookieStart);      \n        if (cookieEnd == -1){                 \n            cookieEnd = document.cookie.length;            \n        }             \n        cookieValue = decodeURIComponent(document.cookie.substring(\n        cookieStart + cookieName.length, cookieEnd));     \n    } \n    return cookieValue;     \n }\n')])])]),v("h3",{attrs:{id:"_6、cookie的缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、cookie的缺点"}},[e._v("#")]),e._v(" 6、Cookie的缺点")]),e._v(" "),v("ol",[v("li",[e._v("每个特定域名下的cookie数量有限：")])]),e._v(" "),v("ul",[v("li",[v("p",[e._v("IE6或IE6-(IE6以下版本)：最多20个cookie")])]),e._v(" "),v("li",[v("p",[e._v("IE7或IE7+(IE7以上版本)：最多50个cookie")])]),e._v(" "),v("li",[v("p",[e._v("FF:最多50个cookie")])]),e._v(" "),v("li",[v("p",[e._v("Opera:最多30个cookie")])]),e._v(" "),v("li",[v("p",[e._v("Chrome和safari没有硬性限制")])])]),e._v(" "),v("p",[e._v("当超过单个域名限制之后，再设置"),v("code",[e._v("cookie")]),e._v("，浏览器就会清除以前设置的"),v("code",[e._v("cookie")]),e._v("。"),v("code",[e._v("IE")]),e._v("和"),v("code",[e._v("Opera")]),e._v("会清理近期最少使用的"),v("code",[e._v("cookie")]),e._v("，"),v("code",[e._v("FF")]),e._v("会随机清理"),v("code",[e._v("cookie")]),e._v("。")]),e._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[v("p",[e._v("存储量太小，只有"),v("code",[e._v("4KB")]),e._v("。")])]),e._v(" "),v("li",[v("p",[e._v("每次"),v("code",[e._v("HTTP")]),e._v("请求都会发送到服务端，影响获取资源的效率。")])]),e._v(" "),v("li",[v("p",[e._v("需要自己封装获取、设置、删除"),v("code",[e._v("cookie")]),e._v("的方法。")])])]),e._v(" "),v("h2",{attrs:{id:"web-storage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web-storage"}},[e._v("#")]),e._v(" Web Storage")]),e._v(" "),v("p",[e._v("最初的"),v("code",[e._v("Web Storage")]),e._v(" 规范包含了两种对象的定义:"),v("code",[e._v("sessionStorage")]),e._v("和"),v("code",[e._v("globalStorage")]),e._v("。这两个对象在支持的浏览器中都是以"),v("code",[e._v("windows")]),e._v("对象属性的形式存在的。而"),v("code",[e._v("localStorage")]),e._v("对象在修订过的"),v("code",[e._v("HTML 5")]),e._v("规范中作为持久保存客户端数据的方案取代了\n"),v("code",[e._v("globalStorage")]),e._v("。所以现在主要谈论的是"),v("code",[e._v("sessionStorage")]),e._v("和"),v("code",[e._v("localStorage")]),e._v("两种。")]),e._v(" "),v("p",[v("strong",[e._v("1、web Storage的主要作用：")])]),e._v(" "),v("ul",[v("li",[e._v("提供一种在 "),v("code",[e._v("cookie")]),e._v(" 之外存储会话数据的途径;")]),e._v(" "),v("li",[e._v("提供一种存储大量可以跨会话存在的数据的机制。")])]),e._v(" "),v("p",[v("strong",[e._v("2、web Storage 的主要方法：")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("clear()")]),e._v(": 删除所有值;"),v("code",[e._v("Firefox")]),e._v(" 中没有实现 。")]),e._v(" "),v("li",[v("code",[e._v("getItem(name)")]),e._v(":根据指定的名字 "),v("code",[e._v("name")]),e._v("获取对应的值。")]),e._v(" "),v("li",[v("code",[e._v("key(index)")]),e._v(":获得 "),v("code",[e._v("index")]),e._v(" 位置处的值的名字。")]),e._v(" "),v("li",[v("code",[e._v("removeItem(name)")]),e._v(":删除由 "),v("code",[e._v("name")]),e._v(" 指定的名值对儿。")])]),e._v(" "),v("p",[e._v("注意： "),v("code",[e._v("Storage 类型只能存储字符串。非字符串的数据在存储之前会被转换成字符串。")])]),e._v(" "),v("h3",{attrs:{id:"localstorage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[e._v("#")]),e._v(" localStorage")]),e._v(" "),v("p",[v("strong",[e._v("1、localStorage的特点")])]),e._v(" "),v("ul",[v("li",[e._v("保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。")]),e._v(" "),v("li",[e._v("大小为5M左右")]),e._v(" "),v("li",[e._v("仅在客户端使用，不和服务端进行通信")]),e._v(" "),v("li",[e._v("接口封装较好")])]),e._v(" "),v("p",[e._v("基于上面的特点，LocalStorage可以作为浏览器本地缓存方案，用来提升网页首屏渲染速度(根据第一请求返回时，将一些不变信息直接存储在本地)。")]),e._v(" "),v("p",[v("strong",[e._v("2、localStorage的使用")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('//使用方法存储数据 \nlocalStorage.setItem("name", "Nicholas");\n\n//使用属性存储数据\nlocalStorage.book = "Professional JavaScript";\n\n//使用方法读取数据\nvar name = localStorage.getItem("name");\n\n//使用属性读取数据\nvar book = localStorage.book;\n')])])]),v("p",[e._v("数据的保留是通过 "),v("code",[e._v("JavaScript")]),e._v(" 删除或者是用户清除浏览器缓存。")]),e._v(" "),v("h3",{attrs:{id:"sessionstorage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[e._v("#")]),e._v(" sessionStorage")]),e._v(" "),v("p",[v("strong",[e._v("1、什么是 sessionStorage ？")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("sessionStorage")]),e._v(" 对象存储特定于某个会话的数据，也就是该数据只保持到浏览器关闭。")]),e._v(" "),v("li",[v("code",[e._v("sessionStorage")]),e._v("就像会话 "),v("code",[e._v("cookie")]),e._v("，也会在浏览器关闭后消失。")]),e._v(" "),v("li",[e._v("存储在 "),v("code",[e._v("sessionStorage")]),e._v("中的数据可以跨越页面刷新而存在，同时如果浏览器支持，浏览器崩溃并重启之后依然可用(Firefox 和 WebKit都支持，IE则不行)。")]),e._v(" "),v("li",[v("code",[e._v("seesionStorage")]),e._v("对象绑定于某个服务器会话，所以当文件在本地运行的时候是不可用的。")]),e._v(" "),v("li",[e._v("存储在"),v("code",[e._v("sessionStorage")]),e._v("中的数据只能由最初给对象存储数据的页面访问到，所以对多页面应用有限制。")])]),e._v(" "),v("p",[v("strong",[e._v("2、sessionStorage的特点：")])]),e._v(" "),v("ul",[v("li",[e._v("会话级别的浏览器存储")]),e._v(" "),v("li",[e._v("大小为5M左右")]),e._v(" "),v("li",[e._v("仅在客户端使用，不和服务端进行通信")]),e._v(" "),v("li",[e._v("接口封装较好")])]),e._v(" "),v("p",[e._v("基于上面的特点，"),v("code",[e._v("sessionStorage")]),e._v("可以有效对表单信息进行维护，比如刷新时，表单信息不丢失。")]),e._v(" "),v("p",[v("strong",[e._v("3、localStorage 的使用")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('//使用方法存储数据 \nsessionStorage.setItem("name", "Nicholas");\n\n//使用属性存储数据\nsessionStorage.book = "Professional JavaScript";\n\n//使用方法读取数据\nvar name = sessionStorage.getItem("name");\n\n//使用属性读取数据\nvar book = sessionStorage.book;\n')])])]),v("p",[v("code",[e._v("sessionStorage")]),e._v(" 对象应该主要用于仅针对会话的小段数据的存储。如果需要跨越会话存储数据， 那么"),v("code",[e._v("localStorage")]),e._v("更为合适。")]),e._v(" "),v("h2",{attrs:{id:"indexeddb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#indexeddb"}},[e._v("#")]),e._v(" IndexedDB")]),e._v(" "),v("p",[v("strong",[e._v("1、IndexedDB 是什么？")])]),e._v(" "),v("p",[v("code",[e._v("Indexed Database API")]),e._v("，或者简称为"),v("code",[e._v("IndexedDB")]),e._v("，是在浏览器中保存结构化数据的一种数据库。"),v("code",[e._v("IndexedDB")]),e._v(" 的思想是创建一套 "),v("code",[e._v("API")]),e._v("，方便保存和读取 "),v("code",[e._v("JavaScript")]),e._v(" 对象，同时还支持查询及搜索。")]),e._v(" "),v("p",[v("strong",[e._v("2、IndexedDB 的特点")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("键值对储存")]),e._v("："),v("code",[e._v("IndexedDB")]),e._v(" 内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括"),v("code",[e._v("JavaScript")]),e._v('对象。对象仓库中，数据以"键值对"的形式保存，每一个数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出一个错误。')]),e._v(" "),v("li",[v("code",[e._v("异步")]),e._v(":"),v("code",[e._v("IndexedDB")]),e._v("操作时不会锁死浏览器，用户依然可以进行其他操作，这与 "),v("code",[e._v("LocalStorage")]),e._v("形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现。")]),e._v(" "),v("li",[v("code",[e._v("支持事务")]),e._v(": "),v("code",[e._v("IndexedDB")]),e._v("支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况。")]),e._v(" "),v("li",[v("code",[e._v("同源限制")]),e._v(": "),v("code",[e._v("IndexedDB")]),e._v("受到同源限制，每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。")]),e._v(" "),v("li",[v("code",[e._v("储存空间大")]),e._v(": "),v("code",[e._v("IndexedDB")]),e._v(" 的储存空间比 "),v("code",[e._v("localStorage")]),e._v("大得多，一般来说不少于 250MB，甚至没有上限。\n-"),v("code",[e._v("支持二进制储存")]),e._v(": "),v("code",[e._v("IndexedDB")]),e._v("不仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）。")])]),e._v(" "),v("p",[v("strong",[e._v("3、IndexedDB 基本指令")])]),e._v(" "),v("ol",[v("li",[e._v("建立打开IndexedDB : "),v("code",[e._v('window.indexedDB.open("testDB")')])]),e._v(" "),v("li",[e._v("关闭IndexedDB: "),v("code",[e._v("indexdb.close()")])]),e._v(" "),v("li",[e._v("删除IndexedDB: "),v("code",[e._v("window.indexedDB.deleteDatabase(indexdb)")])])]),e._v(" "),v("p",[v("strong",[e._v("4、webStorage、cookie 和 IndexedDB之间的区别")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/28/16f4c1e458f6c5a6?w=685&h=275&f=png&s=16136",alt:""}}),e._v("\n从上图可以看到，"),v("code",[e._v("cookie")]),e._v("已经不建议用于存储。如果没有大量数据存储需求的话，可以使用 "),v("code",[e._v("localStorage")]),e._v(" 和 "),v("code",[e._v("sessionStorage")]),e._v(" 。对于不怎么改变的数据尽量使用 "),v("code",[e._v("localStorage")]),e._v(" 存储，否则可以用 "),v("code",[e._v("sessionStorage")]),e._v(" 存储。")]),e._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),v("p",[e._v("web存储可以说是必须要重点理解和掌握的知识点了，特别是web Storage经常会使用到。最后总结用一句话总结三种存储方案。")]),e._v(" "),v("ul",[v("li",[e._v("Cookie 的本职工作并非本地存储，而是“维持状态”。")]),e._v(" "),v("li",[e._v("Web Storage 是 HTML5专门为浏览器存储而提供的数据存储机制，不与服务端发生通信。")]),e._v(" "),v("li",[e._v("IndexedDB 用于客户端存储大量结构化数据。")])])])}),[],!1,null,null,null);o.default=a.exports}}]);