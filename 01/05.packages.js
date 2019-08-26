var os = require('os')

console.log(os.cpus())
console.log(os.totalmem()/(1024*1024),'MB')

var path = require('path')
console.log(path.basename('/01/data.txt'))
