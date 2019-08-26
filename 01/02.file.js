//1. 加载 fs 核心模块
var fs = require('fs')
//2. 读文件
// fs.readFile( file-path, function (err, data) { ... })
// file-path: 文件路径
// function: 回调函数;      成功时 data=数据,err=null;  失败时 data=null, err=错误对象
// PS: 读出来的内容是二进制数值,需要用 toString() 将其转换为字符串

fs.readFile('./data.txt', function (err, data) {
    if (data){
        console.log('data:',data) //data: <Buffer e8 bf 99 e6 98 af e8 a2 ab e8 af bb e5 8f 96 e7 9a 84 e6 96 87 e4 bb b6 0d 0a>
        console.log('data.toString():',data.toString()) //data.toString(): 这是被读取的文件
    }else {
        console.log('读取失败')
        console.log(err)
    }
})

// fs.writeFile(file-path, data, function(err){ ... })
//  file-path: 写入文件路径
//  data: 要写入的内容
//  function: 回调函数, 仅 err 一个参数;  成功时 err=null, 失败时 err=错误对象
fs.writeFile('./write2.txt', '这是测试写入数据字符串', function (err) {
    if (err){
        console.log('写入失败')
        console.log(err)
    }else {
        console.log('写入成功')
    }

})
