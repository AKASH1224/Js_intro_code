const myNumber=[1,2,3,4,5,6,7,8,9]
// const newNums= myNumber.map((num_a)=> num_a+10)
// const newNums =myNumber.map((numa)=>{return numa+10})
const newNum=myNumber
.map((num)=>{return num*10})
.map((num) =>{return num+1})
.filter((num)=>num>=30)
console.log(newNum);
