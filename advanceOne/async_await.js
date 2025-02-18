/* Yes, exactly! async and await are syntactic sugar in JavaScript designed to simplify working with promises, 
 making asynchronous code look and behave more like synchronous code.*/

// Here's how they work:
// async: You declare a function as async to indicate that it will contain asynchronous operations and will return a promise.
// An async function always returns a promise, regardless of whether you explicitly return one or not.
// dsadas
// await:   await is used inside an async function to pause the execution of the function until a promise is resolved or rejected.
// It "waits" for the promise to resolve and then returns the value. If the promise is rejected,
//  it throws an error, which you can handle with a try-catch block

const result =new Promise(function(resolve,reject){
    
    // if(success){
    //     console.log("data is fetched successfully");
        
    // }else{
    //     console.log("Data is not fetched successfully");
        
    // }
      let a ="er"
         if(a){
            setTimeout(function(){
                console.log("Here it is  promise")
            },1000)
            resolve()

         }else{
            console.log("error")
         }

       
})

async function fetchData() {
    try{
        const data=await result  // if the resolve is run right in the above code ,then await will run the result 
         console.log(data)
    }catch(error){

    }
    
}