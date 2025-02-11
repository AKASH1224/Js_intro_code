// here mul is higher order function,As it is taking other arrow function as the argument and ml is callback fucntion
function mul(a,b,ml){
    const result =a*b
    ml(result)
}
mul(10,20,(val)=>console.log(val))


// mul(10,20,function(val){
//     console.log(val);
// })
// So here the add function is higher order function as it takes the other function as argument, and here is cb is callback function as it call the result in cb (result)
function add(a,b,cb){
    let result =a+b
    cb(result)
}

function showResult(val){
    console.log(val);
}
add(10,20,showResult)
// here is when the button is clecked the event listener is involked or react then it call the call back function, which is function(e){concosle.log(e)}

addEventListener("click",function(e)  {
    console.log(e);
    
})