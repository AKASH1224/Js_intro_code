const userEmail="Deepakash@gmail.com"
// const userEmail=""// here the empty string gievs the false result , as empty string is false value
// const userEmail=[] //here the empty array gives the result true ,as empty array is true value
if (userEmail) {
    console.log("got user email")
}else{
    console.log("not got user email")
}
// False value
// false,0,-0,BigINt 0n,", null,undefined,Nan"
// truthy value
// "0",'false',,"",[],{},function(){}

// const emptyObj ={}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined
// let val1;
// val1 = 5 ?? 10
// val1 =null ?? 10
// val1 =5 ?? 10
// console.log(val1);

// Terniary Operator
//condition ? true : false 

// const coffePrice =100
// coffePrice <=80 ? console.log("Coffee price is lower than printedRate"):console.log("coffe price is greater  than PrintedRate")

// const val=4
// val % 2 ==0 ? console.log("the value is even"):console.log("the value is false")