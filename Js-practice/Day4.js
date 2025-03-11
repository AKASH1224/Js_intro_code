// 09-03-25
function vowelsAndConsontant(s){
    let vowels="";
    let consonants = "";
    for(let i=0; i<s.length ; i++){
        if("aeiou".includes(s[i])){
          vowels += s[i]    + "\n";
       
        }
        else {
            consonants += s[i] + "\n";
           
        }
}
        console.log(vowels + consonants)
    
}
vowelsAndConsontant("javascript")

try {

  // Check if the input is a string and reverse it

  let reversed = s.split("").reverse().join("");
  console.log(reversed);
} catch (error) {
  // Catch any exceptions (e.g., if s is not a string)
  console.log("s.split is not a function");
  console.log(s); // Print the original value of s
}
