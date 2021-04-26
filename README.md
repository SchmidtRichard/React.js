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
4. [JavaScript Expressions in JSX & ES6 Template Literals Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#javascript-expressions-in-jsx--es6-template-literals-lesson)</br>
4.1 [JavaScript Expressions in JSX Code Example](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#javascript-expressions-in-jsx-code-example)</br>
4.2 [JavaScript Expressions in JSX Code Challenge](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#javascript-expressions-in-jsx-code-challenge)</br>
5. [JSX Attributes & Styling React Elements Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#jsx-attributes--styling-react-elements-lesson)</br>
5.1 [JSX Attributes & Styling React Elements Final Code](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#jsx-attributes--styling-react-elements-final-code)</br>
6. [Inline Styling For React Elements Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#inline-styling-for-react-elements-lesson)</br>
6.1 [Inline Styling For React Elements Final Code](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#inline-styling-for-react-elements-final-code)</br>
6.2 [Inline Styling For React Elements Code Challenge]()</br>

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
- Get JavaScript to dynamically update the year
Example:
    - Created by Richard
    - Copyright 2021

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

***

# JSX Attributes & Styling React Elements Lesson

**JavaScript** `properties` can be used as `attributes` in **JSX**. Even though it looks like the code is **HTML**, it is still being rendered down to **JavaScript**, and in **JavaScript** the `property` to access all the `classes` that exist on an element is a `property` called [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className). **React** has done some handling behind the scenes so that even if we leave the code below as a class it would still work.

```js
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 class="heading">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
```

However we would get the error below once we went to the **Console** inside our browser:

> :warning: **WARNING**</br></br>
> index.js:27 Warning: Invalid DOM property `class`. Did you mean `className`?

The proper way to code it is by using the `attribute` `className`, and as soon as we change it the error from the **Console** disapears. JSX convention to follow on naming it as if it is **JavaScript** instead of [**HTML**](https://www.w3schools.com/tags/ref_standardattributes.asp).

```js
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
```

Another error we will find in the **Console** is the below:

> :warning: **WARNING**</br></br>
>Uncaught SyntaxError: Unexpected token '<'

This error above is related to the `<!DOCTYPE html>` and that is because it does not know that the `index.js` is a `JSX` file that includes **HTML elements** rather than just a standard normal **JavaScript** file.

So we need to replace the code below:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JSX Attributes & Styling React Elements Lesson</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/javascript"></script>
  </body>
</html>
```

With this one here, where we are telling it this is a `JSX` file, and the error is now fixed:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JSX Attributes & Styling React Elements Lesson</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/JSX"></script>
  </body>
</html>
```

`className` **attribute** is the most common attribute we will be adding, because this is the preferred way to **add styling** to **React elements**. Even though there are other ways to add style to these elements, including **inline styling**, the documentation still recommends to apply all the styling through **classes** that are specified withing the **CSS file** and then applying it to the **JSX file** using the `className` **attribute**.

## JSX Attributes & Styling React Elements Final Code

Below is the code from the `index.js` file:

```js
import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img alt="random" src={img} />
      <img
        className="food-img"
        alt="churrasco"
        src="https://i.pinimg.com/originals/a1/f5/98/a1f598a2d9ccfc3f20cbf308957b2fd3.jpg"
      />
      <img
        className="food-img"
        alt="bacon"
        src="https://hips.hearstapps.com/vidthumb/images/microwave-bacon-square-1583428798.png"
      />
      <img
        className="food-img"
        alt="carbonara"
        src="https://www.irishtimes.com/polopoly_fs/1.4220240.1585931224!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
```

Below is the code from the `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JSX Attributes & Styling React Elements Lesson</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/JSX"></script>
  </body>
</html>
```

Below is the code from the `styles.css` file:

```css
.heading {
  color: red;
}

ul {
  color: blue;
}

.food-img {
  width: 100px;
  height: 100px;
}
```

***

# Inline Styling For React Elements Lesson

In **HTML** we would use inline styling as below:

```js
ReactDOM.render(<h1 style="color: red">Hello World!</h1>, document.getElementById("root"));
```

However, we inside a **JSX** file, and in the code above we are actually proving a **string** as the value to the **style attribute**, which would work fine if it was **HTML**, but in **JavaScript** we need the value for the **style property** as a **JavaScript object** `{key: value}`. Whenever we want to inject some **JavaScript** into a **HTML element** in **JSX, we have to wrap it inside a set of **curly braces** `{}`.

The code should look like the one below:

```js
ReactDOM.render(<h1 style={{color: "red"}}>Hello World!</h1>, document.getElementById("root"));
```

The code above has two sets of **curly braces** because the **style property** requires a value that is a **JavaScript object** and that **object** in order to be interpreted correcttly inside an **HTML element**, has to have a set of **curly braces** around it, instead of a normal **expression** like `{2 +3}` and the values for each of the `key value pairs` has to be a string (like in the code above).

Using **inline styling** is pretty useful in certain cases, specially when we want styles for certain **React elements** to update on the fly, like the example below:

## Inline Styling For React Elements Final Code

```js
import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
```

## Inline Styling For React Elements Code Challenge

The challenge below has been completed on [CodeSandbox](https://codesandbox.io/s/react-styling-practice-forked-ywzrx?file=/src/index.js):

- Create a React app from scratch.
- Show a single h1 that says "Good morning" if between midnight and 12PM.
- or "Good Afternoon" if between 12PM and 6PM.
- or "Good evening" if between 6PM and midnight.
- Apply the "heading" style in the styles.css
- Dynamically change the color of the h1 using inline css styles.
- Morning = red, Afternoon = green, Night = blue.

```js
import React from "react";
import ReactDom from "react-dom";

//var greeting;

//const time = new Date().getHours;

//To check other hours -> const date = new Date(2021, 1, 28, 19);
const date = new Date();
const currentTime = date.getHours();
let greeting;
const customStyle = { color: "" };

//Check out the current time is being printed correctly in the console
console.log(currentTime);

//time = new Date().getHours,
if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
```


> :warning: **WARNING**</br></br>
>**let Statement**

>**Description**

>**let** allows you to declare variables that are limited to the scope of a **block** statement, or expression on which it is used, unlike the `var` keyword, which declares a variable globally, or locally to an entire function regardless of block scope. The other difference between `var` and `let` is that the latter is initialized to a value only when a parser evaluates it (see below).

>Just like `const` the `let` does not create properties of the `window` object when declared globally (in the top-most scope).



