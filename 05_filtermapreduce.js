//FILTER
const myNums = [1,2,3,4,5,6,7,8,9]

const filteredNum = myNums.filter((num) => num > 4)
console.log(filteredNum);

// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNums);

const newNums = []
myNums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
} )
console.log(newNums);

//MAP
const myNumber = [1,2,3,4,5,6,7,8,9,10]
const newMapNum = myNumber.map((num) => num + 10);
console.log(newMapNum);

const newNum = myNumber
               .map((num) => num * 10)
               .map((num) => num + 1)
               .filter((num) => num >= 40)
console.log(newNum);

//REDUCE
const reduceNums = [1,2,3]
// const myTotal = reduceNums.reduce(function (acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`); 
//     return acc + currVal;
// },0);
// console.log(myTotal);

// const myTotal = reduceNums.reduce((acc,currVal) => 
//     acc+currVal,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "python course",
        price:999
    },
    {
        itemName: "java course",
        price:1999
    }
]
const totalShopping = shoppingCart.reduce((acc,item)=>
                       acc+item.price,0);
console.log(totalShopping);