// 

//  for (let index = 0; index < 2; index++) {
//     const element = index;
//     console.log(element)
//     for(let i=10 ; i >= 1 ; i--)
//     {
//         console.log(i)
//     }
// }

//  const myArray = ["Dilip singh" , "Rinki sinhg" , "Himanshu singh" , "Piyush singh" , "Adarsh singh"]

//  for(let i=0 ; i< myArray.length ; i++ ){
//      console.log(myArray[i])
//  }

// for( let i=1 ; i<=10 ; i++){
//     if(i===5){
//         console.log("now stopped")
//         break;
//     }
//     console.log(i*0)
// }
// for( let i=1 ; i<=10 ; i++){
//     if(i===5){
//         console.log("now i skip number")
//         continue
//     }
//     console.log(i)
// }

// let match = 1

// while(match <= 10){
//   //  console.log(`value is ${match}`)
//     match = match + 2
// }

// let matches = ["Cricket" , "Football" , "Hockey" , "Basketball" , "Carrom-board"]
// let arr=9
// do{
//     console.log(`HI ... Today you are playing   ${matches[arr]}`);
//     arr++; 
// }while(arr <= matches.length);

for(let i=1 ; i<=10 ; i++){
  
  console.log(`Table of ${i}`)
  
  for(let j=1 ; j<=10 ; j++){
    if( i == 9)
    {
      console.log(`fnesoifjwoejo `)
      continue;
    }
    console.log(`${i} * ${j} = ${j* i}`)
  }
}