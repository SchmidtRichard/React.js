import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [ 3, 56, 2, 48, 5 ];

// function square(x) {
// 	return x * x;
// }

// const newNumbers = numbers.map(function square(x) {
// 	return x * x;
// });

// const newNumbers = numbers.map((x) => {
// 	return x * x;
// });

//If we only have a single line statement where we are only returning a single expression, then we can short the function even further
// const newNumbers = numbers.map((x) => x * x);

// console.log(newNumbers);

var numbers = [ 3, 56, 2, 48, 5 ];

////Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map(function(x) {
// 	return x * 2;
// });

//var numbers = [ 3, 56, 2, 48, 5 ];

// const newNumbers = numbers.map((x) => x * 2);
// console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

// const newNumbers = numbers.filter((num) => num < 10);
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

// const newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

// console.log(newNumber);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

// const newNumber = numbers.find((num) => num > 10);

// console.log(newNumber);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

// const newNumber = numbers.findIndex((num) => num > 10);

// console.log(newNumber);
