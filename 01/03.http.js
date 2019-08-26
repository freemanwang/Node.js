//使用 node 构建一个 web 服务器
//在 node 中专门提供了一个核心模块: http,帮助创建编写服务器的

//1. 加载 http 核心模块
var http = require('http')

// 2. 使用 http.createServer() 创造一个 web 服务器,该方法返回一个 Server 实例
var server = http.createServer()

//3. 服务器功能

// 注册 request 请求事件,当客户端请求过来,会自动触发服务器的 request 事件,执行第二个参数--回调函数 来处理
server.on('request', function (request, response) {
    console.log('收到客户端的请求了,请求路径是：',request.url)

    // response 对象的 write() 方法，可以给客户端发送响应数据
//     write 方法可以使用多次，但是最后一次一定要用 response.end() 来结束响应，否则客户端会一直等待
    response.write('hello ')
    response.write('node.js')
    response.end()
})

//4. 绑定端口号，启动服务器; 成功启动时会调用回调函数
server.listen(3000, function () {
    console.log('服务器启动成功，在120.0.0.1 ...')
})

