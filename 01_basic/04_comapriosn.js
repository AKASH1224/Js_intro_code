// console.log("2">1);
// console.log("02">1);

// the reason is the an eqaulity check == and comparsion ><>= work differently
// comparions convert the null to a number , trweaitn it as 0 thats why (3) null>=0 is true (1) null>0 is false
console.log(null>0)
console.log(null ==0)
console.log(null>=0);