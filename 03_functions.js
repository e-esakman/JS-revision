// function add(a, b) {
//   console.log(a+b);
// }

// const total = add(2, 3) + add(4, 5); 
// console.log(total); 


/*This should have printed 14 but it gives NaN
~Reason: the function does not return anything, here we require the return statement.
Console.log just shows the answer , it doesnot give. 
That's why we use return in function.*/

function add(a, b) {
  return a + b;
}

const total = add(2, 3) + add(4, 5); 
console.log(total); 

function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());


function calculateCartPrice(...num1){
    //... it lets print many values of num1 & in the form of array
    return num1
}
console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200,400,500))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200,400,500,2000))
/* val1=200, val2=400, num1 = has rest all numbers */

const user = {
    username:"saks",
    car:"mustang 1969"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} & has car
        ${anyObject.car}`)
}
handleObject(user);

/* EXPLICIT RETURN */
// const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2)

// const addTwo = (num1,num2) => ({username: "hitesh"})

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)
(function chai(){
    //named IIFE
    console.log("DB CONNECTED");
})();

// (function tea(){
//     console.log("DB AGAIN");
// })();

((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})('saks')
