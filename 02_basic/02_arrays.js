// Array part-2
const marvel_heros =["Thor","IronMan","SpiderMan"]
const dc_heros =["Superman","Batman","Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const com_mar=marvel_heros.concat(dc_heros)
// console.log(com_mar);

// spread operator (...)-spread opreator spread all the values into individuals 
// const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

// const another_array=[1,2,3,[4,5],[7,8,9]]
// const real_ano_array=another_array.flat(Infinity)
// console.log(real_ano_array);

console.log(Array.isArray("Akash"));
console.log(Array.from("HItesh"));
console.log(Array.from({name:"hitesh"}));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
