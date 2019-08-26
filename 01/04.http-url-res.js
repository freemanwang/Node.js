var http = require('http')

var server = http.createServer()

server.on('request', function (req, res) {
    // console.log('收到request，路径为：',req.url)

    //直接end('response-data'),更推荐；比之多次write后end更简洁
    // res.write('hello world <br>')
    let url = req.url
    if (url === '/'){
        res.end('index page')
    }else if (url === '/login'){
        res.end('login page')
    }else if (url === '/products'){
        let products = [
            {
                name:'iphoneX',
                price:8888
            },
            {
                name:'小米9',
                price: 3000
            },
            {
                name:'华为P30',
                price:6666
            }
        ]
        //注意，相应内容只能是二进制数据（Buffer）或者字符串（String）
        res.end(JSON.stringify(products))
    }else {
        res.end('404')
    }
})

server.listen(80, function () {
    console.log('服务器启动成功，监听在80端口。')
})
