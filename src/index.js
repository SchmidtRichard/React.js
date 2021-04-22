//Import the dependencies needed
import React from "react";
import ReactDOM from "react-dom";

/*
In order to use React to actually create something on screen
we are going to use the render method by tapping into ReactDOM
The render function takes 3 inputs:
ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT, OPTIONAL CALLBACK 
TO TELL US WHEN THAT RENDER FUNCTION HAS COMPLETED);
WHERE TO SHOW IT: a particular HTML element that we will target inside index.html
*/
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);
