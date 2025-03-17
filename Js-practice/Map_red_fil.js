const numbers =[2,3,10,45,43,52,54]
// reduce function
const redu=numbers.reduce((prevNumber,currentNumber)=>{
    console.log("prevNumber ="+prevNumber)
    console.log("currentNumber ="+currentNumber)
    return prevNumber+currentNumber

})
console.log(redu)
 
// Map function

const newNum = numbers.map((x) => {
    return x * 2;
  });
  console.log(newNum);
  