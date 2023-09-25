l1 = {
    firstName : "amisha",
    lastName : "guptha",
    f1 : function() {
        console.log(this)
    }
}
console.log(l1)
l1.f1()
l2 = {
    firstName : "guptha",
    lastName : "moturi"
}
l1.f1.call(l2)