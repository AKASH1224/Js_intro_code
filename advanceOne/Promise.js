// // resolve() is called when the operation is successful (like printing "Hello").
// reject() is called if there's an error (like "Something went wrong").
// .then() is used to handle the success part of the Promise (when resolve() is called).
// .catch() is used to handle errors or failure (when reject() is called).

// Promise 1 :------  We are creatign the promise using new Promise
const promiseOne = new Promise(function(resolve,reject){
    // Do any async task
    // Db Call ,cryptography
    setTimeout(function(){
        console.log("Async is running")
        resolve()
    },1000)
})

// We are taking the promise and accepting it
promiseOne.then(function(){
    console.log("Promise is called ")
})
// adsa



/*Promise 2 :------------------
new Promise(function(resolve,reject){
console.log("Async2 is running");
resolve();
}).then(()=>{
    console.log("promise2 is called")
})*/


// Promise 3 :------------
const email=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"Akash",email:"Deepakashdeep527@gmail",})
    },1000)
})
email.then(function(str){
 console.log(str);
 
})




// Promise 4 :-----------------------------------------
const promiseFour=new Promise(function(resolve,reject){
    setTimeout( function(){
        let error =true;
        if(!error){
            resolve({userName:"Akash",email:"Deepakashdeep527@gmail.com"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.userName
}).then((userName)=>{
   console.log(userName);
   
}).catch((error)=>{
 console.log(error);
}).finally(function(){
    console.log("the finally is caught")
})




const promiseFive=new Promise(function(resolve,reject){
let error = true
if(!error){
    resolve({userName:"Akash",Email:"deepakashdeep527@gmail.com"})
}else{
    reject(error)
}
})

async function catPromiseFive() {
    try{
        const response =await promiseFive
        console.log(response);
          
    }catch(error){
        console.log(error);
        

    }
}
catPromiseFive()


// async function getAllUser() {
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json(data)
//          console.log(data);
         
//     }
//     catch(error){
//         console.log("E",error)
//     }
    
// }

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
 return response.json();}
).then((data)=>console.log(data))