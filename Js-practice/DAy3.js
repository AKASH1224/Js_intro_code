// 07-03-25
/*function firRepeat(){
    let countChar = countCharacters(s)
    let nonRepeating = {}
    for(let char in countChar){
        if (countChar[char] ===1) {
          nonRepeating[char] +=1
            
        }

        return nonRepeating
    }

}
console.log(firRepeat("banana"));

function firstNonRepeat(s){
    let charCount ={}
    for(let  char of s){
        if(char in charCount){
          charCount[char] +=1
        }else{
        charCount[char] = 1
        }
    }
    return charCount
}
console.log(firstNonRepeat("banana"));
*/

var palinDrone = function(s) {
let reverse ="";
for(let char of s){
  reverse = char + reverse;
}
if(reverse ===s){
  return true
}
return false
};
console.log(palinDrone("akash"))




function NonRepeat(s){
  let charCount ={}
  for(let char of s){
      if(char in charCount){
      charCount[char] += 1
      }else{
       charCount[char] =1
     
      }
          
      }
  return charCount
}
console.log(NonRepeat("bannana"))

