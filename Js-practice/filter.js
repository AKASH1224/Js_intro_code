const numbers=[2,4,10,42,45,52,54]
const newFil = numbers.filter((x) => {
    return x < 10;
  });
  console.log(newFil);
  
const newPus=[]
numbers.forEach((x)=>{
    if(x>30){
        return newPus.push(x);
    }
})
console.log(newPus)