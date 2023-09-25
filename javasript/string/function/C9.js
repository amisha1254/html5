//function inside function
function f1(){
    console.log("outer function")
    return function(){
        console.log("inner function")
    }
}
console.log(f1)
f = f1()
console.log(f)