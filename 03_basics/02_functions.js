// Function with object
// ... this is rest operator which store all the value of the arguments,e.g-here ...num1 store the 200,3000,400,500
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,3000,400,500))
// here the val1, val2 store the 200,3000 and rest of value are saved in (...) operator
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,3000,400,500))

const  user={
    username :"Akash",
    price :200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handleObject(user)   //passing the objcet
handleObject({
 username:"Akash Deep",
 price:10   
})

const arr=[100,200,300,400,500]

function arrObj(getArr) {
    return getArr[1]
}
console.log(arrObj(arr));
