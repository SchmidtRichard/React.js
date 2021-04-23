# Table of Contents

1. [React.js](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#reactjs)</br>
2. [CodeSandbox](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#codesandbox)</br>
3. [Introduction to JSX and Babel Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#introduction-to-jsx-and-babel-lesson)</br>
3.1 [ROOT DIV](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#root-div)</br>
3.2 [Dependencies Used](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#dependencies-used)</br>
3.3 [JSX vs Plain Vanilla JavaScript Code Example](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#jsx-vs-plain-vanilla-javascript-code-example)</br>
&nbsp;&nbsp;&nbsp;&nbsp;3.3.1 [JSX Code Example](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#jsx-code-example)</br>
&nbsp;&nbsp;&nbsp;&nbsp;3.3.2 [Plain Vanilla JavaScript Code Example](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#plain-vanilla-javascript-code-example)</br>
&nbsp;&nbsp;&nbsp;&nbsp;3.3.3 [Final Code](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#final-code)</br>
&nbsp;&nbsp;&nbsp;&nbsp;3.3.4 [Course Code Challenge](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#course-code-challenge)</br>
4. [JavaScript Expressions in JSX & ES6 Template Literals Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#javascript-expressions-in-jsx--es6-template-literals)</br>
4.1 [JavaScript Expressions in JSX Code Example](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#javascript-expressions-in-jsx-code-example)</br>
4.2 [JavaScript Expressions in JSX Code Challenge]()</br>

***

# React.js

[**React**](https://reactjs.org/) is a front-end, JavaScript library for building user interfaces or UI components. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.

# CodeSandbox

[**CodeSandbox**](https://codesandbox.io/) is an online editor for rapid web development. With **CodeSandbox**, you can prototype quickly, experiment easily, and share creations with a click. Use it to create static sites, full-stack web apps, or components on any device with a web browser.

It is a browser based development environment that was initially created with React development in mind. It takes care of a lot of the grunt work and setup and makes it easy to install dependencies with **NPM** support, so every package that we have used previously using **NPM install** we can use inside **CodeSandbox**.

It can be embedded into medium blog posts and web pages, it allows us to build and deploy within the same application and a lot of other things including really good syntax highlighting and linting as well.

***

# Introduction to JSX and Babel Lesson

[**JSX**](https://reactjs.org/docs/introducing-jsx.html) stands for **JavaScript XML**. **JSX** makes it easier to write and add HTML in React. **React** works by creating these **JSX** files, files where we've got **HTML** right in the body of a **JavaScript** file, and what happens behing the scenes is that the **HTML** is picked up by a **compiler** and it gets converted or compiled down to actual **JavaScript** and the compiler comes from the **React module** `var React = require("react");`. Inside the **React module** there is something called [**Babel**](https://babeljs.io/). **Babel** is a **JavaScript** compiler and that is able to take next generation **JavaScript** and compile it down to a version of **JavaScript** that every browser can understand, and this includes compiling **JSX** down to **plain old JavaScript**.

## ROOT DIV

The `div` with the `root id` is always in the **React** apps and it is basically the **root** for the **React application**. So everything that we create using **React** is going to be inserted inside this `div`.

```html
<div id="root"></div>
```

All of the code will be written inside `index.js`, and not inside `index.html`.

## Dependencies Used

They are: **react** and **react-dom**. Then we need to require them inside the `index.js` file

```js
//Require the dependencies needed
var React = require("react");
var ReactDOM = require("react-dom");
```

One of the latest features to come to **JavaScript** is the `import` keyword, so instead of **requiring** the **React module** and setting it to a **variable** we can simply just **import React** from a particular **module** or a particular **location**, and the same can be done for **ReactDOM**.

By using the `import` and the `export` **keywords** we are able to **modularise** these dependencies far better and we end up with code that is better organized.

```js
//Import the dependencies needed
import React from "react";
import ReactDOM from "react-dom";
```

## JSX vs Plain Vanilla JavaScript Code Example

### JSX Code Example

```js
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
```

### Plain Vanilla JavaScript Code Example

```js
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);
```

> :warning: **WARNING**</br></br>
> The **render method** can only take a single **HTML element**. We can then turn two or more **HTML elements** into one by placing them into a **div** and everyting that goes inside a **div** still counts as a **single HTML element**.</br></br>

```js
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);
```

### Final Code

```js
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
```

### Course Code Challenge

The challenge below has been completed on CodeSandbox:

- Create a react app from scratch.
- It should display a h1 heading.
- It should display an unordered list (bullet points).
- It should contain 3 list elements.

**Full code**:

```js
//Import the dependencies needed
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>List of Favourite Things</h1>
    <ul>
      <li>Panda</li>
      <li>Piriquito</li>
      <li>Andressa</li>
    </ul>
  </div>,
  document.getElementById("root")
);
```

***

# JavaScript Expressions in JSX & ES6 Template Literals Lesson

We can also insert **JavaScript** code inside the **HTML** inside the **JavaScript** file, and to do it we simply wrap the **JavaScript** inside a set of **curly braces ** `{ }`. We can add **JavaScript** expressions inside it (`{Math.floor(Math.random() * 10)}`), however, we cannot write **JavaScript** statement (`if`) inside it. The big different between an [**expression** and a **statement**](https://www.youtube.com/watch?v=WVyCrI1cHi8&list=PL-xu4i_QDSxcoDNeh8rx5-pHCCTOg0XsI) is that an **expression** will be evaluated to a value, it ends up equaling something, and a **statement** is actually asking the computer to do some work to evaluate the **statement** and then depending on that **statement** work out something.

## JavaScript Expressions in JSX Code Example

```js
import React from "react";
import ReactDOM from "react-dom";

const firstName = "Richard";
const lastName = "Schmidt";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Hello {firstName} {lastName}!</h1>
    <p>My lucky number is {luckyNumber}</p>
    <p>Here is a random number {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
```

## JavaScript Expressions in JSX Code Challenge

The challenge below has been completed on CodeSandbox:

- Create a react app from scratch.
- It should display 2 paragraph HTML elements.
- The paragraphs should say:
- Created by YOURNAME.
- Copyright CURRENTYEAR.
- E.g.
- Created by Richard
- Copyright 2021
- Get JavaScript to dynamically update the year

```js
import React from "react";
import ReactDOM from "react-dom";

const name = "Richard";
const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright &copy; {currentYear}</p>
  </div>,
  document.getElementById("root")
);
```
































