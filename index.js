// 1. Write a function to check if a person is eligible to vote. Take the person's age as input and print "Eligible" if the age is 18 or above; otherwise, print "Not Eligible".
// const personAge = prompt("Enter Your Age");
// const minAge = 18;
// if (personAge >= minAge) {
//   alert("Eligible");
// } else {
//   alert("NOt ELigible");
// }

//2. Write a function to check if a number is odd or even using conditionals.
// const number = prompt("enter the number to check if it's odd or even");
// function isOdd(number){
//     if(number % 2 == 0){
//         alert('your number is even')
//     } else {
//         alert('number is odd')
//     }
// }
// isOdd(number);

//3. Create a function named greet that takes a name as a parameter and prints "Hello, [name]!".
// const name = prompt('Please, enter your name');
// function greet(name){
// alert(`Hello, ${name}!`)
// }
// greet();

//4. Write a function named calculateSquare that takes a number as input and prints its square. Call this function with 3 different numbers. Example: calculateSquare(4) prints 16.
// function calculateSquare(number) {
//   return number * number;
// }
// console.log(calculateSquare(4));
// console.log(calculateSquare(23));
// console.log(calculateSquare(9));

//5. Write a function named isAdult that takes a person's age and returns true if they are 18 or older and false otherwise.
// const personAge = prompt("enter your age");
// const minAge = 18;
// function isAdult() {
//   if (personAge >= minAge) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isAdult());

//6. Create an array of 5 different fruits. Add another fruit to the beginning of the array and remove the last fruit. Print the final array.
// const fruits = ["apple", "grape", "banana", "kiwi", "mango"];
// fruits.unshift("orange");
// fruits.pop();
// console.log(fruits);

//7. Create an array of your top 3 favorite movies. Replace the second movie with another one and print the updated array.
// const movies = ["V for Vendetta", "The Notebook", "I Origins"];
// movies[1] = "Before Sunrise";
// console.log(movies);

//8. Create an object representing a car with properties (keys) like model, year, and color. Add a method startEngine that prints "[color] [model]'s engine is now running." Call this method.
// const car = {
//   model: "Mercedes",
//   year: "2024",
//   color: "red",
// };
// function startEngine() {
//   console.log(`${car.color} ${car.model}'s engine is now running`);
// }
// startEngine();

//9. Write a function named logDetails that takes a person object as a parameter and logs their name and age. Example object: const person = { name: "Alice", age: 25 };
// function logDetails(person) {
//   console.log(`Name: ${person.name}, Age: ${person.age}`);
// }
// const person = {
//   name: "alice",
//   age: 25,
// };
// logDetails(person);

//10. Object Destructuring (use google). Use destructuring to extract name, hobby and age into variables and log them. Example object: const person = { name: "Alice", age: 25, hobby: "Reading" };
// const person = {
//   name: "alice",
//   age: 25,
//   hobby: "reading",
// };
// const { name, age, hobby } = person;
// console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);

//11. Spread Operator (use google). Create a shallow copy of the following object using the spread operator: const book = { title: "1984", author: "George Orwell", pages: 328 };
// const book = {
//   title: "1984",
//   author: "George Orwell",
//   pages: 328,
// };

// const bookCopy = { ...book };

// console.log(book);
// console.log(bookCopy);
