// Date-05-03-25

// Q1- Reverse a string

// function rev(s){
// return s.split("").reverse().join("")
// }
// console.log(rev("hello"));

/*function revString(s){
let reversed="";
for(let char of s )
 {    
    reversed= char + reversed;
 }
return reversed
}
console.log(revString("hello"));
*/
// Palindrome
/*function palin(s){
let reverse =""
for (let char of s){
    reverse =char + reverse;
}
if (reverse ===s){
    return true
}
return false
}
console.log(palin("aka"))
*/

function repeat(s){
for(let char of s){
    if(s ===s){
        return s
    }
}
}
console.log(repeat());

