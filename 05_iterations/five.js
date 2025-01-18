// filter
const myNums=[1,2,3,4,5,6,7,8,9,10]
// Returns the elements of an array that meet the condition specified in a callback function.
const newNum = myNums.filter((values) =>{ return values >= 4})
// In explicit type  we use {}  and the  return keyword,while in implict type  do not use the {}, and return
// console.log(newNum)

const newNums =[]

myNums.forEach((val2)=>{
    if(val2 >4){
        newNums.push(val2)
        }
})
console.log(newNums);
// let userBooks=books.filter((bk)=>bk.genre ==="History")

let books =[  { title: 'Book One', genre: 'Fiction', publish: 1980, edition: 1985 },
    { title: 'The Whispering Shadows', genre: 'Fiction', publish: 2001, edition: 2005 },
  { title: 'Echoes of Eternity', genre: 'Fantasy', publish: 2003, edition: 2007 },
  { title: 'Journey to the Hidden Realms', genre: 'Adventure', publish: 2005, edition: 2010 },
  { title: 'The Forgotten Chronicles', genre: 'History', publish: 2007, edition: 2012 },
  { title: 'Winds of the Lost Valley', genre: 'Drama', publish: 2009, edition: 2014 },
  { title: 'The Clockmaker’s Secret', genre: 'Mystery', publish: 2011, edition: 2016 },
  { title: 'Beneath the Starlit Sky', genre: 'Romance', publish: 2013, edition: 2018 },
  { title: 'Shadows of the Past', genre: 'Horror', publish: 2015, edition: 2020 },
  { title: 'The Alchemist’s Diary', genre: 'Science', publish: 2017, edition: 2022 },
  { title: 'The Enchanted Quill', genre: 'Fantasy', publish: 2019, edition: 2024 },
{ title: 'Book Twenty', genre: 'Horror', publish: 2024, edition: 2028 },
    { title: 'Book Twenty-One', genre: 'Drama', publish: 2026, edition: 2030 },
    { title: 'Book Twenty-Two', genre: 'Poetry', publish: 2028, edition: 2032 },
    { title: 'Book Twenty-Three', genre: 'History', publish: 2030, edition: 2034 },
    { title: 'Book Twenty-Four', genre: 'Science', publish: 2032, edition: 2036 },
    { title: 'Book Twenty-Five', genre: 'Fantasy', publish: 2034, edition: 2038 },
  ];


// let userBooks=books.filter((val1)=>{ return val1.genre ="The Alchemist’s Diary" && "Shadows of the Past";})
let userFav = books.filter((vol)=>{ 
    return vol.genre ="Horror" || vol.publish < 2000
})

console.log(userFav);
