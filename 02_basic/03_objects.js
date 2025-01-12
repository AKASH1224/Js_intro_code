// Singleton :- its made using constructor

// Object literals
// symbol data type  is cerated using [] in objects to print the symbol, and symbol  is access using [] 
const mySum =Symbol("key1")
const  JsUser ={
    name:"Akash",
    age:24,
    [mySum]:"key1",
    location:"delhi",
    email:"Deepakashdeep527@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["monday","tuesday","wensday"]

}
console.log(JsUser.email);
console.log(JsUser[mySum]);

// // JsUser.email="deepakash200@gmail.com"
// // console.log(JsUser);
// // Object.freeze(JsUser)
// // JsUser.email="akshdeep527@gmail.com"
// console.log(JsUser);

JsUser.greeting =function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting);


JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${JsUser.name}`);
}
console.log(JsUser.greetingTwo());

JsUser.greetingThree =function(){
    console.log(`my Email id is ${this.email}`);
}
console.log(JsUser.greetingThree());




