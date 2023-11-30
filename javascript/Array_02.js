// array 2nd part

const marvelHeros = [ "Spiderman" , "Iron-man" , "Hulk" ]

const dcHeros = [ "Flash" , "Superman" , "Batman" ]

//marvelHeros.push(dcHeros); //add element in last 
console.log(marvelHeros)
//console.log(marvelHeros[3][1])

const all_heros = marvelHeros.concat(dcHeros) // add element in last

console.log(all_heros)

const all_heros_01 = [ ...marvelHeros , ...dcHeros ] // apread operator
console.log(all_heros_01)

const anotherArray = [ 1 , 2 , 3 , [ 4,5,6] , 7 , [ 3,2,1, [9,8,7] ]];

const anotherArrayCng = anotherArray.flat(Infinity)
console.log(anotherArrayCng)

console.log(Array.isArray("piyush"));
console.log(Array.from("Aman"))

console.log(Array.from({name:"Mansukh"}))//it returns empty because we have to explain type of array

let s1 = 100 
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3))