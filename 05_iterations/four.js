// For each loop

const coding=["js","ruby","cpp","Java","python"]
// callback function is funciton which does not has function name
coding.forEach(function (val){
    // console.log(val);
})

coding.forEach((items)=>{
    // console.log(items);
})

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

// Here the three parameter indicates the , index the index ,arr represent array
// coding.forEach((items,index,arr)=>{
//     console.log(items,index,arr);
// })


const myCoding =[{
languageName :"Javascript",
languagefileAName:"js"
},
{
    languageName:"python",
    languagefileAName: "py"
},
{
    languageName:"java",
    languagefileAName:"Java"
}]
myCoding.forEach((val) =>{
 console.log(val.languageName);
 
})

