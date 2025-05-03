//1. Write a function multiply that takes two numbers and returns their product.

 function multiply(a, b) {
  return a * b;              
}
console.log(multiply(2, 3)); 
//console.log(multiply(4, 5));

// 2. Given the object const person = { name: "Alice", age: 25 }, destructure it into name and age variables and log them.

const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name); 
console.log(age); 

// 3. Write a function applyFunction that takes an array and a function as arguments,and applies the function to each element of the array.


function applyFunction(arr, func) {
  return arr.map(func);
}
const numbers = [1, 2, 3, 4, 5];
const square = (x) => x * x;    
console.log(applyFunction(numbers, square));

// 4. Given an array [1, 2, 3], write a function that returns a new array where each element is doubled using map.
function doubleArray(arr) {
  return arr.map((num) => num * 2);
}
const arr = [1, 2, 3];
console.log(doubleArray(arr));

// 5. Write a function filterEvenNumbers that filters out even numbers from an array [1, 2, 3, 4, 5] using filter.
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
const number = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(number));

// 6. Write a function sum that takes an array of numbers and returns the sum of all the elements using reduce.
function sum(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
const numbersArray = [1, 2, 3, 4, 5];
console.log(sum(numbersArray));

// 7. Given an array [5, 10, 15, 20], use map to create a new array where each number is increased by 5.
function increaseByFive(arr) {
  return arr.map((num) => num + 5);
}
const numbersList = [5, 10, 15, 20];
console.log(increaseByFive(numbersList));

// 8. Create a simple class Person with properties firstName, lastName, and age. Include a method fullName that returns the full name.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("John", "Doe", 30);
console.log(person1.fullName());

// 9. Write a function that takes an object {name: "John", age: 30} and adds a method greet which prints "Hello, my name is John".
function addGreetMethod(obj) {
  obj.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
}
const personObj = { name: "John", age: 30 };
addGreetMethod(personObj);
personObj.greet();

// 10. Implement a function add that takes two parameters and returns their sum. Use an arrow function to write it.
const add = (a, b) => a + b;
console.log(add(5, 10));
// console.log(add(20, 30));

//11. Write a function doubleNumbers that takes an array [1, 2, 3, 4] and doubles each number using map.
function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}
const numbersArray1 = [1, 2, 3, 4];
console.log(doubleNumbers(numbersArray1));

// 12. Create an IIFE that logs the square of a given number.
(function(num) {
  console.log(num * num);
})(5);

// 13. Write a function checkAdult that takes an array of objects { name, age } and filters out people who are under 18 using filter. and shows only below 18. (with new variables - person should be declared with dirrent name)
function checkAdult(arr) {
  return arr.filter((person) => person.age < 18);
}
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];          

console.log(checkAdult(people));



//14. Use object destructuring to extract the properties x and y from the object { x: 10, y: 20, z: 30 } and log them.
const obj = { x: 10, y: 20, z: 30 };
const { x, y } = obj;
console.log(x);
console.log(y);

// 15. Create a class Car with properties make, model, and year, and a method getDetails that returns a string with car details
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}
const car1 = new Car("Toyota", "Camry", 2020);
console.log(car1.getDetails());

// 16. Use reduce to find the maximum number in the array [10, 20, 5, 30].
function findMax(arr) {
  return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}
const numbersArray2 = [10, 20, 5, 30];
console.log(findMax(numbersArray2));

//17. Implement a higher-order function combine that takes two numbers and a function. The function should apply the function to the two numbers

function combine(a, b, func) {
  return func(a, b);
}
const addFunc = (x, y) => x + y;
const multiplyFunc = (x, y) => x * y;
console.log(combine(5, 10, addFunc)); 
console.log(combine(5, 10, multiplyFunc));

// 18. Create an IIFE that returns the factorial of a number n.
(function(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(factorial);
})(5);


// 19. Write a function countOccurrences that takes an array and returns the number of times a given element appears in the array using reduce.
function countOccurrences(arr, element) {
  return arr.reduce((count, current) => (current === element ? count + 1 : count), 0);
}
const array = [1, 2, 3, 1, 4, 1];
const elementToCount = 1;
console.log(countOccurrences(array, elementToCount));

// 20. Write a function sortArray that sorts an array of numbers in ascending order using reduce.
function sortArray(arr) {
  return arr.reduce((sorted, current) => {
    let i = 0;
    while (i < sorted.length && current > sorted[i]) {
      i++;
    }
    sorted.splice(i, 0, current);
    return sorted;
  }, []);
}
const unsortedArray = [5, 3, 8, 1, 4];
console.log(sortArray(unsortedArray));










