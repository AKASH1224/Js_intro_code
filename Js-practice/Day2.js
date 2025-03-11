// 05-03-25
/*function FirstNonRepeating(s){
    let charCount={}
    for(let char of s){
        charCount[char] =(charCount[char] || 0) + 1;

    }
   for(let char of s){
    if (charCount[char] === 1){
        return char;
    }
   }
  return null;
}
console.log(FirstNonRepeating("aabbccedd"));*/
// Prime no
function primeNo(s){
    if(s<2){
        return false;
    }
    for(let i = 2; i<s ; i++){ 
        if(s % i ===0){
            return false;
        }       
    }
    return true
}
console.log(primeNo(4));
