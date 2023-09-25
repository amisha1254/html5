obj = {
    username:"Amisha guptha",
    age:25,
    contact:90105444
}
console.log(obj)
console.log(typeof(obj))
var objJSON = JSON.stringify(obj)
console.log(objJSON)
console.log(typeof(objJSON))
var obj2 = JSON.parse(objJSON)
console.log(obj2)
console.log(typeof(obj2))