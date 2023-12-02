// funtion 2

const name ="Piyush singh"

const user = {
    userName : "Vicky",
    price: 974,

    welcomeMsg : function(){
        console.log(` ${this.userName} , welcome ... and price is ${this.price}`)
        //console.log(this)
    }

}
user.welcomeMsg()
//console.log(this)

function chai(){
    let name = "nexa"
   // console.log(this.username)  undefined
   //console.log(this)
}

chai()

const funn = function(){
    const name ="hii"
    // console.log(this.name) undefined
}
funn()

const chai1 =  () => {
    name :"iron"
    console.log(this) //undefined
}

chai1()

const add = (num1 , num2) => {
    return num1 + num2
}

console.log(add(87,45))

const sub = (a1,a2) => a1-a2
const addd = (a1,a2) => ( a1 + a2 ) // object return with paranthesis

console.log(sub(87,54))
console.log(addd(76,45))

const obj = () => ({name : "Adarsh chouhan"})

console.log(obj())

