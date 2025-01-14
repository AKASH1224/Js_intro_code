function sayMyName(){
    console.log("Akash")
    console.log("deep")
}
sayMyName() //sayMyname is refernce and () this is exectuion
// when we declare the defintion in function it is called parameter. e.g:- num1,num2

function addTwoNumber(num1,num2){
    // console.log(num1+num2);
    let result=num1+num2
    // when we write the return keyword it return the value, here return result is returning the result value, and then
    // then storing in the below result, and then printing the value using log
    return result
}
const result=addTwoNumber(10,20) // when we call the value its is called argument ,e.g :-10,20
// console.log("Result:",result);


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("AKash deep"));
