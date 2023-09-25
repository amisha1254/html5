function f1(fname,lname){
    console.log("firstname",fname,"lastname",lname)
    console.log(`firstname ${fname} lastname ${lname}`)
}
f2 = function (){
    console.log("firstname",fname,"lastname",lname)
    console.log(`firstname ${fname} lastname ${lname}`)

}
f3 = ()=>{console.log("firstname",fname,"lastname",lname)}
f4 = ()=>console.log(`firstname ${fname} lastname ${lname}`)

f1("amisha","guptha")
f2("amisha","guptha")
f3("amisha","guptha")
f4("amisha","guptha")


