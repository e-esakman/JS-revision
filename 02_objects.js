//Q1. Car Object
/*
const car = {
  brand: "mercedes",
  start: function() {
    console.log(`The car ${this.brand} is starting`);
  }
};

car.start(); 

//Q2. Student + Nested Object
const student = {
  name: "saksh",
  intro: function() {
    console.log(`I am ${this.name}`);
  },
  marks: {
    math: 95,
    method: function() {
      console.log(this.math);
    }
  }
};

student.intro();        // "I am saksh"
student.marks.method(); // 95

// Q3. Arrow vs Normal
const user = {
  username: "pixella",
  sayName: function() {
    console.log(`My name is ${this.username}`);
  },
  sayNameArrow: () => {
    console.log(`My name is ${this.username}`);
  }
};

user.sayName();       // "My name is pixella"
user.sayNameArrow();  // "My name is undefined"

// Q4. Constructor Function
function Book(title, author) {
  this.title = title;
  this.author = author;
}

const book1 = new Book("1984", "Orwell");
const book2 = new Book("Sapiens", "Harari");

console.log(book1.title); // 1984
console.log(book2.author); // Harari

//setTimeout and this
const obj = {
  name: "Pixella",
  showName: function() {
    setTimeout(() => {
      console.log(this.name);  // arrow takes `this` from obj
    }, 1000);
  }
};

obj.showName(); // "Pixella"
*/

const User = new Object() 

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"A",4:"B"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1, obj2) 
console.log(obj3);

const course = {
    courseName: "js in hindi",
    price: 0,
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} =  course
console.log(courseInstructor);