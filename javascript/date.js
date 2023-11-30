/*

let myDate = new Date()

console.log(myDate)
console.log(myDate.toString())

console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate = new Date(1998,1,16,5,6)
console.log(myCreatedDate.toLocaleString())

let m = new Date("02-03-1998")
console.log(m)
let n2 = new Date("02-16-2023")
console.log(n2.toLocaleString())

let timeStamp = Date.now()

console.log(timeStamp)
console.log(n2.getTime())

console.log(Math.round(Date.now()/1000))*/
let todayDate = new Date();


console.log(`hello today is ${todayDate.getDate()}th ${todayDate.toLocaleString('default',{ 
    month:"long",
    year:"2-digit"
 })}`)