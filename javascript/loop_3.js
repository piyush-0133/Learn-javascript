// for -in loop

const myObj = {
    
    js : "javascipt"
    ,cpp : "c++"
    ,swift : "swift by apple"

}

for (const key in myObj) {
    // console.log(key)
}
for (const key in myObj) {
    // console.log(`my object key is " ${key} " and value is " ${myObj[key]} "`)
}

const myArray = ["js","ruby","python","c"]

for(const val in myArray){
  //  console.log(val)
}

for(const val in myArray){
//    console.log(val,myArray[val])
}

const map = new Map()

map.set('IN' , "India")
map.set('ENG' , "England")
map.set('US' , "United state of america")
map.set('FR' , "France")
map.set('YOU' , "Youtube")

//  it result is blank

const myArray2 = ["One","Two","Three","Four"]

// myArray2.forEach( function (va){
//     console.log(va)
// } )

 myArray2.forEach( function (va,ind,arr){
     console.log(va , ind , arr)
 } )

function print (data){
    //console.log(data)
}

myArray2.forEach( (items) => {
    // console.log(items)
} )

myArray2.forEach(print)


//////////////////////////////////////////////////////////////////////////////

const language = [
    {
        languageName: "Html",
        Priority: "One"
    },
    {
        languageName: "Css",
        Priority: "Design"
    },
    {
        languageName: "Javascript",
        Priority: "Functions"
    }
]

language.forEach( (item) => {
    console.log(item.languageName)
})
