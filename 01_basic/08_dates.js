// Dates
// date is object
let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log("AKash");
// console.log(typeof myDate);

let myTimeStamp =Date.now();
 console.log(myTimeStamp);

 
// console.log(Math.floor(Date.now()/1000));
//this  date Now giv esd the current millisecond  and we had divivded it by 1000 and using floor to get the nearest round off

let newDate =new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+ 1);

newDate.toLocaleString('default',{
    weekday:"long",
})