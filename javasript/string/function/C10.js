function f1(a){
    console.log(a)
    return function(b){
        console.log(a+b)
        console.log(a-b)
        console.log(a*b)
        console.log(a**b)

    }
}
console.log(5)
f = f1()
console.log(f(2))