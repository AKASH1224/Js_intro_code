// this operator refer to the current context
/*const user ={
    username:"Akash Deep",
    price :999,
    WelocomeMessage: function(){
        console.log(`${this.username} is the owner of website`);
        
     console.log(this) 
    }
}
user.WelocomeMessage()
// console.log(user);*/

/*const chai = function(){
    let username="Aakash"
    console.log(this);
}
chai()*/
// this key word return empty value in function. and it is use to refer tot current context in object
/*const chai = () =>{
    let username ='Akash Deep'
    console.log(this);
}
chai()*/
// In explicit type we use  return keyword and {}
/*const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(10,5))
*/
// In implict type we do not use {}, return statement,e.g const addTwo = (num1 ,num2 ) => num1+num2


const addTwo = (num1 ,num2 ) => ({username:"Akash"})
console.log(addTwo(10,6))
 

const chai = ()=>{
    let Name='Akash deep'
    console.log(this)
}
chai()