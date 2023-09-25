function f1(firstname,lastname){
    console.log(firstname +" "+ lastname)
}
function f2(firstname,lastname){
    fname = firstname
    lname = lastname
    f1(fname,lname)
}
f2("amisha","guptha")
f2("moturi","amisha")//call back function