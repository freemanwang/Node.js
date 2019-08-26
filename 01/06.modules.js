var variable = 'aaa'

var bExports = require('./support/b.js')

console.log(variable)
console.log(bExports.variable)
console.log(bExports.add(5, 10))
