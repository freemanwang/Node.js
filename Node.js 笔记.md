# Node.js 笔记

#### Node.js 是一个JS运行时环境，简单地说就是可以解析和执行JS（脱离浏览器）。

JS = ECMAScript + DOM + BOM

1. Node.js 只有 ECMAScript，没有DOM和BOM；
2. 在Node中为JS提供了一些服务器级别的API，例如：

文件读取（浏览器中的JS是没有文件操作能力的）

网络服务的构建

网络通信

http服务器

…

1.  Node特性：事件驱动、非阻塞IO模型（异步），轻量和高效
2. npm是世界上最大的开源库生态系统



##### require 是一个方法，用于加载模块。

在 Node 中，模块有三种：

* 具名的核心模块，如 fs、http

* 用户自己编写的文件模块

  ​	相对路径必须+  './'

  ​	可以省略后缀名，例如：

  ​	`require('./support/b.js')`

  ​	`require('./support/b')`

  ​	**上面2行的效果一致，推荐省略后缀名**

* 第三方模块（比如npm上装的）



##### 在 Node 中，没有全局作用域，只有模块作用域（或者形象的说，文件作用域，仅在该文件内有效，对外部无影响，也不受外部影响，默认是封闭的）

比如 a.js

> var variable = 'aaa'
>
> require('./support/b.js')
>
> console.log(variable) 

b.js

> var variable = 'bbb'
>
> console.log('variableinb.js:', variable)

运行结果：

![variable in b. js  a aa  . bbb ](file:///C:/Users/ALLENX~1/AppData/Local/Temp/msohtmlclip1/02/clip_image001.png)

总结：b中的 variable 赋值语句并没影响到a.js中的 variable。



##### require 方法有2个作用：

1.  加载文件模块并执行里面的代码以外（上面的都是）
2. 拿到被加载文件模块导出的接口对象（此处要讲的）

每个文件模块都提供了一个对象：export，export 默认是一个空对象

a.js

![1566822184721](C:\Users\allenxfwang\AppData\Roaming\Typora\typora-user-images\1566822184721.png)

b.js

![1566822208401](C:\Users\allenxfwang\AppData\Roaming\Typora\typora-user-images\1566822208401.png)

运行结果：

![1566822163884](C:\Users\allenxfwang\AppData\Roaming\Typora\typora-user-images\1566822163884.png)

