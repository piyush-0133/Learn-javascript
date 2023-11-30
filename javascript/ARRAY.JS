
const myArray = [ "PIYUSH" , 1 , 2 , 3 , 4]

console.log(myArray)
console.log(myArray[0])

const myHeros = [ "Shaktiman" , "Naagraj" , "Shiva"]

const myArray_2 = new Array( "one", "two" , "three" )

console.log(myArray_2[0])
console.log(myHeros[1])

// Array Method

myArray.push(7)
console.log(myArray)
console.log(myArray.length)

console.log(myHeros)
myHeros.pop() //it remove the last value of array
console.log(myHeros)

myHeros.unshift("Motu-patlu") // add in 1st position of array . load padta hai sari value shift hoti hai
console.log(myHeros)
myHeros.shift()
console.log(myHeros)

console.log(myHeros.includes("Shaktiman"))//ask it is there or not
console.log(myHeros.indexOf(0))
console.log(myHeros.indexOf('Naagraj'))
console.log(myArray.indexOf('PIYUSH'))

const myArray_3 = myArray.join()

console.log(myArray)
console.log(myArray_3)
console.log(typeof myArray_3)

const myr = new Array('q','w','e','r','s','t')

console.log(myr.slice(0,3))
console.log(myr)

console.log(myr.splice(0,3))// it changes the main array
console.log(myr)

   
