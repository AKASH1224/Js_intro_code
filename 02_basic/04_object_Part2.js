// SingleTon Object
// const tinderUser =new Object()
// tinderUser.id="123abc"
// tinderUser.name="akash"
// tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser ={
    name:"Reshu",
    age:24,
    fullname:{
        userFullName:{
            firstName:"Akash",
            lastName:"Deep"
        }

    }
}
// console.log(regularUser.fullname.userFullName.lastName);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

// const obj4 =Object.assign({},obj1,obj2,obj3)
// spread operator (...), this operator spread the values of any variable
const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);
// console.log(Object.keys(regularUser));
//  console.log(Object.values(regularUser));
// console.log(Object.entries(regularUser));
// Object destructring
const course ={
    name:"Akash",
    age:24,
    courseInstructor:"Akash Deep"
}
// here we have assigned the name courseinstructor top instructor 
const {courseInstructor:instructor} =course

console.log(instructor);

// Json(JAvascript object notation) has both key and value ain string format,eg:- {"name":"Akash","instructor":"Akash"}
// { "Name":"Akash",
//  "Adress":"Goyla Dairy",}
// JSon can come into both object and array of object
[{}]