//for...of
//Iterating over iterables (Arrays, Strings, Maps, Sets).
//Doesnt work with objects
const arr = [1,2,3,4,5]
for(const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings) { 
    console.log(`Each char is ${greet}`)
}

const map = new Map()
map.set('IN',"India")
map.set('USA','United states of america')
map.set('FR',"France")
map.set('IN',"India")

for(const [key, value] of map) {
    console.log(key,':-',value);
}
//IN :- India
//USA :- United states of america
//FR :- France


//for...in gives keys (property names / indexes).
//Good for objects, sometimes arrays (but not recommended 
// since order is not guaranteed).

const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by app"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// const programming = ["js","rb","py","java","cpp"]
// for (const key in programming) {
//     console.log(programming[key]);
// }

/* FOR EACH : 
Running a function on each element of an array. */

//NORMAL FUNCTION
const coding = ["js","ruby","java","python","cpp"]
// coding.forEach( function (val) {
//     console.log(val);
// })

//Arrow function
// coding.forEach((val) => {
//     console.log(val)
// });

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr) => {
    console.log(item, index, arr);
})

const myCoding = [
   {
    languageName : " javascript",
    langFilename : "js"
   },{
    languageName : " java",
    langFilename : "java"
   },{
    languageName : "python",
    langFilename : "py"
   }
]
myCoding.forEach((item) => {
    console.log(item.languageName)
});

