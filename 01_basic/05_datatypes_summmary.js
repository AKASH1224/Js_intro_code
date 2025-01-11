// Data types
//  1-Primitive data type
//number => 2 to power 33 , fro numbers
// bigint -> for very large numbers
// string -> " "/ ''
// undefined
// symbol -> its is unique
// 2-non-primitive/Refernce
// // object ->// null -> use to store the empty data type
// // null -> use to store the empty data type

// ***************************************Operation **********************************************
let str1="akash"
 let str2="deep"
let str3=str1+str2
console.log(str3)

const aka=null
console.log(typeof aka)

// Non Primitive data types
const Array =["akash","mango","apple"];

const myObject={
    name:"akash",
    age:22,   
}

const fun=function(){
    console.log("Hello World")

}
//In js all non Primitve /reference data type are object type 
// even in Null datat type , type is object



// +++++++++++++++++++++++++++++++++++
// Two types of memory - Stack(Primitive) ,Heap(Primiitve)


// stack -Stored in the Stack: Since primitives are small, fixed-size values, they are stored directly in the stack memory.
// Value Copying: When a variable is assigned a primitive value, or when it's passed as an argument to a function, a copy of the value is created. This means changes to one copy do not affect the other.
// Example:
let myYoutubeName="akashdeepdotcom"
let anotherName = myYoutubeName
anotherName ="coffeelove"
console.log(myYoutubeName);
console.log(anotherName);
// Heap
// Reference in the Stack: A variable that holds a non-primitive type stores a reference (or pointer) to the location in the heap where the actual data is stored.
// Shared Reference: When you assign one variable to another, both variables point to the same reference in the heap. 
// Changes made to one variable will affect the other because they share the same memory location.


let userOne={
    email:"deepakashdeep527@gmail.com",
    age :24
} 

let userTwo =userOne
userTwo.email ="hitesh@google.com"
console.log(userOne.email);
