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
const fullName = {
    fName: "Richard",
    lName: "Schmidt"
};

const user = {
    /*
    Insert the fullName object into the user object
    now the user object will be comprised of all the elements
    inside the fullName object as well as any other ones
    such as id and username
    */
    ...fullName,
    //And then insert any other items we may want
    id: 1,
    username: "richardschmidt007"
};

console.log("User Object: " + user);
















