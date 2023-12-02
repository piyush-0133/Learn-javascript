//Singleton 
//Object.create

// object literals

const mySym = Symbol("key-1")

const jsUser = {
    name : "Iron-Man", // systm pross name is string, 
    "fullname" : "Iron-Man choudary",
    age : 46,
    [mySym] : "myKey-0",
    location : 'los- vegas',
    power : "suit"  ,
    email : "Ironman123@mail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","friday"]      
}

console.log(jsUser.email)
console.log(jsUser["age"])
console.log(jsUser["fullname"])
console.log(jsUser.fullname)

console.log(jsUser[mySym])

jsUser.location = "NYC"
console.log(jsUser)

//Object.freeze(jsUser)
jsUser.name = "nhopal"

jsUser.greeting = function(){
    console.log("Hello function")
}

jsUser.greeting2 = function(){
    console.log(`hi.. ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())

