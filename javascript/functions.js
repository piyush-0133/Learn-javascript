// functions

function fun_1(val){
    console.log(`HII.... ${val}`)
}

fun_1()

function fun_2(num1,num2){
    let tot = num1+num2
    return tot
}

let to = fun_2()
console.log(to)

function fun_3(username = "admin"){
    if(username === undefined // or use !username 
    ){
        console.log(`Please Enter name`)
        return 
    }
    return `welcome ${username}`
}
let result = fun_3()
console.log(result)





