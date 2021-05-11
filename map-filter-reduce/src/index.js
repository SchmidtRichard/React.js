// var numbers = [ 3, 56, 2, 48, 5 ];
/*
    MAP FUNCTION
*/
//Map -Create a new array by doing something with each item in an array.

// function double(x) {
// 	return x * 2;
// }

// const newNumbers = numbers.map(double);

// const newNumbers = numbers.map(function(x) {
// 	return x * 2;
// });

// console.log("Original Array: " + numbers);
// console.log("New Array with Numbers Doubled: " + newNumbers);

/*
    FILTER FUNCTION
*/
//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function(num) {
// 	return num > 10;
// });

// console.log("Original Array: " + numbers);
// console.log("New Array with Numbers Doubled - Filter Function: " + newNumbers);

//How we would do the above with a forEach loop instead
// var newNumbers = [];
// numbers.forEach(function(num) {
// 	if (num > 10) {
// 		newNumbers.push(num);
// 	}
// });

// console.log("Original Array: " + numbers);
// console.log("New Array with Numbers Doubled - forEach Loop Instead of Filter Function: " + newNumbers);

/*
    REDUCE FUNCTION
*/
//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function(accumulator, currentNumber) {
// 	/*
//     Console log the accumulator and current number every time the loop is
//     run in order to understand how the reduce function works
//     */
// 	console.log("accumulator: " + accumulator);
// 	console.log("currentNumber: " + currentNumber);

// 	return accumulator + currentNumber;
// });

// console.log("Original Array: " + numbers);
// console.log("New Array with the Numbers Added Up - Reduce Function: " + newNumber);

//How we would do the above with a forEach loop instead
// var newNumber = 0;
// numbers.forEach(function(currentNumber) {
// 	newNumber += currentNumber;
// });

// console.log("New Array with the Numbers Added Up - forEach Loop Instead of Reduce Function: " + newNumber);

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function(num) {
// 	/*
//     Find the first value greater than 10
//     it will not loop through the whole array
//     it will stop as soon as it find the first
//     number that is greater than 10
//     */
// 	return num > 10;
// });

// console.log("Find Function: " + newNumber);

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function(num) {
// 	return num > 10;
// });

// console.log("FindIndex Function: " + newNumber);

import emojipedia from "./emojipedia.js";

const newEmojipedia = emojipedia.map(function(emojiEntry) {
	return emojiEntry.meaning.substring(0, 100);
});

//The emojipedia const is an array
console.log(emojipedia);

console.log("substring:\n" + newEmojipedia);
