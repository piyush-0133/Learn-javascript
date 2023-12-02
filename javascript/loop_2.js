//

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const name = "Piyush singh"

// for(const alp of name){
//     if( alp == " "){
//         console.log("--------------")
//         continue;
//     }
//     console.log(`Char is ${alp}`)
// }

const map = new Map()

map.set('IN' , "India")
map.set('ENG' , "England")
map.set('US' , "United state of america")
map.set('FR' , "France")
map.set('YOU' , "Youtube")
map.set('INST' , "Instagram")
map.set('FACE' , "Facebool")

console.log(map)

for(const [mapval,data] of map){
    console.log(`${mapval} => ${data}`)
}

const obj = {
    firstname : "Piyush",
    lastname : "singh"
}

// for (const val of obj) {
//     console.log(obj)
// }   for does'nt work with obj 
 




