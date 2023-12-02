// OBJECT_2

//const obj_1 = new Object() singleton object
//console.log(obj_1)

const obj_2 = {}
console.log(obj_2)

obj_2.name = "Ajay chouhan"
obj_2.age = 23
obj_2.IsLoggedIn = false

//console.log(obj_2)

const newUser = {
    email : "ppsinghpiyush123@gmail.com"
    ,fullname : {
        username: {
            firstname: "Piyush",
            lastname: "singh"
        }
    }
}
console.log(newUser.fullname.username.lastname)

const obj1 = { 1: "a" , 2: "b" , 3: "c" }
const obj2 = { 4: "x" , 5: "y" , 6: "z" }
const obj3 = { 7: "m" , 8: "n" , 9: "o" }

//const obj4 = {obj1,obj2,obj3}
//const obj4 = Object.assign(obj1,obj2,obj3)

const obj4 = { ...obj1 , ...obj2 , ...obj3 }
console.log(obj4)

const users = [
    {
        id:1,
        email:"abs@gmail.com"
    },
    {
        id:1,
        email:"MP 04 zs 0376"
    },{
        id:1,
        email:"abs@gmail.com"
    },{
        id:1,
        email:"abs@gmail.com"
    },{
        id:1,
        email:"abs@gmail.com"
    },{
        id:1,
        email:"abs@gmail.com"
    },{
        id:1,
        email:"abs@gmail.com"
    },{
        id:1,
        email:"abs@gmail.com"
    },
]

console.log(users[1].email) 
console.log(obj_2)

console.log(Object.keys(obj_2))
console.log(Object.values(obj_2))

console.log(obj_2.hasOwnProperty('IsLoggedIn')) //checking it has property or not

const course = {
    courseName : "Javascript",
    price : 987,
    teacher : "Piyush"
}

console.log(course.teacher)

const {courseName : Name} = course

console.log(Name)


