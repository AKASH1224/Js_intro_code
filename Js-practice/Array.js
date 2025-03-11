function maxArr(n){
 let max=n[0] //if it is largest number
 for(let i =0;i<n.length;i++){
    if(n[i]>max){
        max =n[i]
    }
 }
 return max
}

console.log(maxArr([1,2,3,4,5,6]));
