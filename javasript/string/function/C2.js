var a = 10
 function f1(){
    console.log(a)
 }
console.log("global varaiable"+a)
f1()
function f2(){
    b = 20
    console.log("local variable"+b)
}
f2()
//console.log(b)