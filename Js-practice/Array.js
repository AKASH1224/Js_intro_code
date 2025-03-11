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

// Second largest digit in array
function getSecondLargest(nums) {
let first =-Infinity
let second =-Infinity
for(let i=0;i<nums.length;i++){
    if(nums[i]>first){
        second =first
        first = nums[i]
    }else if(nums[i] >second && nums[i]!==first){
        second =nums[i]

    }
}
return second
} 
console.log(getSecondLargest([1,23,4,56,67,7]))