// Reduce function
/*
const Array=[1,2,3,4]
const initialValue = 0;
const sumWithInitial =Array.reduce((accumulator)=> accumulator +currentValue,initialValue);
console.log(sumWithInitial); */

const myNums=[0,1,2,3]
/*const myTotal = myNums.reduce( function(acc,currval){
    console.log(`acc :${acc} and currval :${currval}`);
    
    return acc + currval
},0)*/
// const myTotal =myNums.reduce((acc,currval)=>{
//     console.log(`acc :${acc} anf currval:${currval}`);
    
//     return acc + currval
// },0)
const myTotal =myNums.reduce((acc,currVal) => (acc+currVal),0)
// console.log(myTotal);

const shoppingCart=[{
 courses:"js",
 price:1999
},{
    courses:"Python",
    price:999
   },{
    courses:"java",
    price:2999
   },{
    courses:"Data Science",
    price:12999
   },
   {
    courses:"Data Science",
    price:12999
   },
]
const TotalVal= shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(TotalVal);
