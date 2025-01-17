// for of loops
// const object;
//for(const iterators of objects){}
const arr=["akash","mango","apple","orange"]
for (const num of arr){
    // console.log(num)
}
const greet ="Hello World"
for(const val of greet){
console.log(val);
}


// Map
// Map object holds key-value pairs and remember the original insertion orders of keys;It contains uniwque key:value

const map = new Map()
map.set('In',"India")
map.set("Usa","United state of India")
map.set("Fr","France")
// console.log(map)

// console.log(map)
for(const [key,value] of map ){
    // console.log(key,":-",'value');
}


// for in loops
const myObject={
    js :'JavaScript',
    cpp :'C++',
    rb:"ruby",
    per:"perl"
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}
