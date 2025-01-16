// if 
// const temperature = 51
// if (temperature >40) {
//     console.log(" temparture is greater than 40")
// }
// else{
//     console.log("tmeperature is greater than 51")
// }


// const score =200
// if(score > 100){
// let power ="fly "
// // here we are using let operator because it cannot go outside the scope,and make wrong output, 
// console.log(`User power: ${power}`)
// }
// console.log(`User power :${power}`)

// const balance =1000
// nested if else condition, to check multiple  condition
// if (balance<500) {
//  console.log("less than 500");
// }else if(balance <750){
//     console.log("less than 750");
// }else if(balance <900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200")
// }

const userLoggedIn =true
const debitCard = true
const loggedInfromGoogle=false
const loggedInfromEmail =true
// this && operator  check both the statement is true then , print 
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInfromGoogle || loggedInfromEmail){
    console.log("User logged in")
}