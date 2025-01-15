//  let b=300
// if (true) {
//     var a=10
//     let b=20
//     const c=30
//     console.log("innner",a);
// }
// console.log(a);
// console.log(c);

function one(){
    const username ="Akash"
    function two(){
        const website ="youtube"
        console.log(username);
        }
        // console.log(website); ,the inner function two  is accessing the one function 
    two()
}
one()


console.log(addOne(2))
function addOne(num){
    return num +1
}




// console.log(addTwo(4))
const addTwo=function addTwo(num){
 return num+2
}