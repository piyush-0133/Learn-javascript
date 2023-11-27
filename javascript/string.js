
const name = "Adarsh"
let age = 34

console.log(`Hi! This is ${name} and my age is ${age} years`)

const gameName = new String('Piyush')
console.log(gameName.indexOf('i'))
console.log(gameName.charAt(0))
console.log(gameName.charAt('1')) // ignore string in number
console.log(gameName.toUpperCase() );console.log(gameName.length)

const changeName = new String(gameName.substring(0,5))//not allow negative value output same
console.log(changeName)

const cutName = new String(changeName.slice(-4,4))

console.log(cutName)

const stringTwo = "           http://piyush&*(34singh"
console.log(stringTwo)
console.log(stringTwo.trim())
console.log(stringTwo.replace('&*(34', '-'))
