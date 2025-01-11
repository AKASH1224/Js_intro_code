const name="akash Deep"
const value=24
console.log(`Hello this is me ${name} and my age is ${value}`);

const gameName = new String("AkashDeep")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0,4)
console.log(newString)

const anotherString =gameName.slice(2,4)
console.log(anotherString);



const newStringOne ="    Akash   "
console.log(newString.trim());
// trim method removes the first and last whitespacec

console.log(newStringOne.includes('Akash'))