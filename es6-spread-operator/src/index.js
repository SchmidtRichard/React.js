import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["lime", "lemon", "orange"];

//Use the ES6 spread operator to add the citrus fruits into the fruits array
// const fruits = ["apple", "banana", "coconut", ...citrus];
//Can also add in a different order, like in the example below
const fruits = ["apple", ...citrus, "banana", "coconut"];

console.log("Citrus Array: " + citrus);
console.log("Frits Array: " + fruits);

//We can also use the spread operator with objects as well


















