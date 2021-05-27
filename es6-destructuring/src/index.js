import React, { useState } from "react";
import animals from "./data.js";
import ReactDOM from "react-dom";

/*
Destructured Array
Code below reaches inside the animals array and pulls out
the first item and assigns a name of cat, pulls out the second
item and assigns a name of dog to it
*/
const [ cat, dog ] = animals;

console.log("Animals Array: " + animals);
console.log("Cat: " + cat);
console.log("Dog: " + dog);

/*
Destructured Object
*/
//const { name, sound } = cat;
//can do the below instead of the above if you want to change the variables names
const { name: catName, sound: catSound } = cat;
console.log("Animal Name: " + catName);
console.log(catName + " sound: " + catSound);

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
// 	<table>
// 		<tr>
// 			<th>Brand</th>
// 			<th>Top Speed</th>
// 			<th>Top Colours</th>
// 		</tr>
// 		<tr>
// 			<td>{tesla.model}</td>
// 			<td>{tesla.TopSpeed}</td>
// 			<td>{tesla.TopColour}</td>
// 		</tr>
// 		<tr>
// 			<td>{honda.model}</td>
// 			<td>{honda.TopSpeed}</td>
// 			<td>{honda.TopColour}</td>
// 		</tr>
// 	</table>,
// 	document.getElementById("root")
// );
