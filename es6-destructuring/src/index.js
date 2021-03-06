// import animals, { useAnimals } from "./data.js";

/*
Destructured Array

Code below reaches inside the animals array and pulls out
the first item and assigns a name of cat, pulls out the second
item and assigns a name of dog to it
*/
// const [ cat, dog ] = animals;
// console.log("Destructuring an Array");
// console.log("Animals Array: " + animals);
// console.log("Cat: " + cat);
// console.log("Dog: " + dog);

/*
Destructured Object
*/
//const { name, sound } = cat;
//can do the below instead of the above if you want to change the variables names
// const { name: catName, sound: catSound } = cat;
// console.log("Animal Name: " + catName);
// console.log(catName + " sound: " + catSound);

//Destructuring Nested Object
//const { name, sound, feedingRequirements } = cat;
// console.log(feedingRequirements);
// console.log("Number of times we need to feed the cat: " + feedingRequirements.food);
// const { name, sound, feedingRequirements: { food, water } } = cat;
// console.log("\nDestructuring an Object");
// console.log("Number of times we need to feed the cat: " + food);

//setState - data.js
//console.log(useAnimals(cat));
/*
The output of the useAnimals(cat) function is 
an array so we can destructure it
*/
// const [ animal, makeSound ] = useAnimals(cat);
// console.log("\nsetState - data.js");
// console.log("The output is: " + animal);
// makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

console.log("Cars Array: " + cars);

//Destructure the cars array so that we have variables names assigned to the first and second items
const [ honda, tesla ] = cars;

console.log("Destructured cars array: " + honda);

//Destructure the cars array and pullout speedStats
const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;

//Destructure the cars array and pullout coloursByPopularity
const { coloursByPopularity: [ hondaTopColour ] } = honda;
const { coloursByPopularity: [ teslaTopColour ] } = tesla;

ReactDOM.render(
	<table>
		<tr>
			<th>Brand</th>
			<th>Top Speed</th>
			<th>Top Colours</th>
		</tr>
		<tr>
			<td>{tesla.model}</td>
			<td>{teslaTopSpeed}</td>
			<td>{teslaTopColour}</td>
		</tr>
		<tr>
			<td>{honda.model}</td>
			<td>{hondaTopSpeed}</td>
			<td>{hondaTopColour}</td>
		</tr>
	</table>,
	document.getElementById("root")
);
