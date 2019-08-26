var variable = 'bbb'
console.log('variable in b.js :', variable)
console.log(exports)
exports.variable = variable
exports.add = function (x, y) {
    return x + y
}
