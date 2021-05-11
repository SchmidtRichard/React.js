# Table of Contents

1.  [React.js](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#reactjs)</br>
    1.1 [Create a React App in Your Local Environment](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#create-a-react-app-in-your-local-environment)</br>
2.  [CodeSandbox](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#codesandbox)</br>
3.  [Introduction to JSX and Babel Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#introduction-to-jsx-and-babel-lesson)</br>
    3.1 [ROOT DIV](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#root-div)</br>
    3.2 [Dependencies Used](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#dependencies-used)</br>
    3.3 [JSX vs Plain Vanilla JavaScript Code Example](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#jsx-vs-plain-vanilla-javascript-code-example)</br>
        3.3.1 [JSX Code Example](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#jsx-code-example)</br>
        3.3.2 [Plain Vanilla JavaScript Code Example](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#plain-vanilla-javascript-code-example)</br>
        3.3.3 [Final Code](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#final-code)</br>
        3.3.4 [Course Code Challenge](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#course-code-challenge)</br>
4.  [JavaScript Expressions in JSX & ES6 Template Literals Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#javascript-expressions-in-jsx--es6-template-literals-lesson)</br>
    4.1 [JavaScript Expressions in JSX Code Example](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#javascript-expressions-in-jsx-code-example)</br>
    4.2 [JavaScript Expressions in JSX Code Challenge](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#javascript-expressions-in-jsx-code-challenge)</br>
5.  [JSX Attributes & Styling React Elements Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#jsx-attributes--styling-react-elements-lesson)</br>
    5.1 [JSX Attributes & Styling React Elements Final Code](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#jsx-attributes--styling-react-elements-final-code)</br>
6.  [Inline Styling For React Elements Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#inline-styling-for-react-elements-lesson)</br>
    6.1 [Inline Styling For React Elements Final Code](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#inline-styling-for-react-elements-final-code)</br>
    6.2 [Inline Styling For React Elements Code Challenge](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#inline-styling-for-react-elements-code-challenge)</br>
7.  [React Components Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#react-components-lesson)</br>
    7.1 [ES6 Import and Export Feature](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#es6-import-and-export-feature)</br>
    7.2 [React Components Final Code](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#react-components-final-code)</br>
    7.3 [React Components Code Challenge](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#react-components-code-challenge)</br>
8.  [JavaScript ES6 - Import, Export and Modules Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#javascript-es6---import-export-and-modules-lesson)</br>
    8.1 [JavaScript ES6 - Import, Export and Modules Final Code](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#javascript-es6---import-export-and-modules-final-code)</br>
    8.2 [Asterisk(\*) Wildcard](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#asterisk-wildcard)</br>
    8.3 [JavaScript ES6 - Import, Export and Modules Code Challenge](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#javascript-es6---import-export-and-modules-code-challenge)</br>
9.  [React Properties (Props) Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#react-properties-props-lesson)</br>
    9.1 [React Properties (Props) Code Challenge](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#react-properties-props-code-challenge)</br>
10. [React DevTools Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#react-devtools-lesson)</br>
    10.1 [Final Code with More Components](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#final-code-with-more-components)</br>
11. [Mapping Data to Components Lesson](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#mapping-data-to-components-lesson)</br>
    11.1 [Mapping Data to Components Challenge](https://github.com/SchmidtRichard/Introduction-to-JSX-and-Babel#mapping-data-to-components-challenge)</br>

* * *

# React.js

[**React**](https://reactjs.org/) is a front-end, JavaScript library for building user interfaces or UI components. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.

## [Create a React App in Your Local Environment](https://reactjs.org/docs/create-a-new-react-app.html)

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have `Node >= 10.16 and npm >= 5.6` on your machine. To create a project, run:

```js
npx create-react-app my-app
cd my-app
npm start
```

Then open up the project folder and delete everything that is not needed, only leave: `public/index.html`, `src/index.js`, `node_modules`, `.gitignore`, `package-lock.json`, `package.json`, and `README.md`.

* * *

# CodeSandbox

[**CodeSandbox**](https://codesandbox.io/) is an online editor for rapid web development. With **CodeSandbox**, you can prototype quickly, experiment easily, and share creations with a click. Use it to create static sites, full-stack web apps, or components on any device with a web browser.

It is a browser based development environment that was initially created with React development in mind. It takes care of a lot of the grunt work and setup and makes it easy to install dependencies with **NPM** support, so every package that we have used previously using **NPM install** we can use inside **CodeSandbox**.

It can be embedded into medium blog posts and web pages, it allows us to build and deploy within the same application and a lot of other things including really good syntax highlighting and linting as well.

* * *

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

### [Final Code](https://codesandbox.io/s/introduction-to-jsx-forked-10n9m)

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

:question: The challenge below has been completed on [CodeSandbox](https://codesandbox.io/s/jsx-code-challenge-forked-r784i):

-   Create a react app from scratch.
-   It should display a h1 heading.
-   It should display an unordered list (bullet points).
-   It should contain 3 list elements.

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

* * *

# JavaScript Expressions in JSX & ES6 Template Literals Lesson

We can also insert **JavaScript** code inside the **HTML** inside the **JavaScript** file, and to do it we simply wrap the **JavaScript** inside a set of **curly braces ** `{ }`. We can add **JavaScript** expressions inside it (`{Math.floor(Math.random() * 10)}`), however, we cannot write **JavaScript** statement (`if`) inside it. The big different between an [**expression** and a **statement**](https://www.youtube.com/watch?v=WVyCrI1cHi8&list=PL-xu4i_QDSxcoDNeh8rx5-pHCCTOg0XsI) is that an **expression** will be evaluated to a value, it ends up equaling something, and a **statement** is actually asking the computer to do some work to evaluate the **statement** and then depending on that **statement** work out something.

## [JavaScript Expressions in JSX Code Example](https://codesandbox.io/s/javascript-expressions-in-jsx-forked-g2ck3)

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

:question: The challenge below has been completed on [CodeSandbox](https://codesandbox.io/s/javascript-expressions-in-jsx-practice-forked-qvr5s):

-   Create a react app from scratch.
-   It should display 2 paragraph HTML elements.
-   The paragraphs should say:
-   Created by YOURNAME.
-   Copyright CURRENTYEAR.
-   Get JavaScript to dynamically update the year
    Example:
        \- Created by Richard
        \- Copyright 2021

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

* * *

# [JSX Attributes & Styling React Elements Lesson](https://codesandbox.io/s/jsx-attributes-and-styling-forked-b9cfi)

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

> :x: **ERROR**</br></br>
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

> :x: **ERROR**</br></br>
> Uncaught SyntaxError: Unexpected token '&lt;'

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

## [JSX Attributes & Styling React Elements Final Code](https://codesandbox.io/s/jsx-attributes-and-styling-forked-3x8sl)

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

* * *

# Inline Styling For React Elements Lesson

In **HTML** we would use inline styling as below:

```js
ReactDOM.render(<h1 style="color: red">Hello World!</h1>, document.getElementById("root"));
```

However, we inside a **JSX** file, and in the code above we are actually proving a **string** as the value to the **style attribute**, which would work fine if it was **HTML**, but in **JavaScript** we need the value for the **style property** as a **JavaScript object** `{key: value}`. Whenever we want to inject some **JavaScript** into a **HTML element** in **JSX, we have to wrap it inside a set of **curly braces\*\* `{}`.

The code should look like the one below:

```js
ReactDOM.render(<h1 style={{color: "red"}}>Hello World!</h1>, document.getElementById("root"));
```

The code above has two sets of **curly braces** because the **style property** requires a value that is a **JavaScript object** and that **object** in order to be interpreted correcttly inside an **HTML element**, has to have a set of **curly braces** around it, instead of a normal **expression** like `{2 +3}` and the values for each of the `key value pairs` has to be a string (like in the code above).

Using **inline styling** is pretty useful in certain cases, specially when we want styles for certain **React elements** to update on the fly, like the example below:

## [Inline Styling For React Elements Final Code](https://codesandbox.io/s/inline-styling-in-jsx-forked-3tb0c?file=/src/index.js)

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

:question: The challenge below has been completed on [CodeSandbox](https://codesandbox.io/s/react-styling-practice-forked-ywzrx?file=/src/index.js):

-   Create a React app from scratch.
-   Show a single h1 that says "Good morning" if between midnight and 12PM.
-   or "Good Afternoon" if between 12PM and 6PM.
-   or "Good evening" if between 6PM and midnight.
-   Apply the "heading" style in the styles.css
-   Dynamically change the color of the h1 using inline css styles.
-   Morning = red, Afternoon = green, Night = blue.

```js
import React from "react";
import ReactDom from "react-dom";

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
> **[let Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)**</br></br>
> **Description**</br></br>
> **let** allows you to declare variables that are limited to the scope of a **block** statement, or expression on which it is used, unlike the `var` keyword, which declares a variable globally, or locally to an entire function regardless of block scope. The other difference between `var` and `let` is that the latter is initialized to a value only when a parser evaluates it (see below).</br></br>
> Just like `const` the `let` does not create properties of the `window` object when declared globally (in the top-most scope).

* * *

# React Components Lesson

**React components** allows to break down a large website into individual compact and reusable **components**.

**Components** allow us to split up a large file or a complex web structure into smaller components, and we also get the added benefit of **reusing** each of these **\*components** when we need the same functionality.

The code below is an example from a previous lesson, and we will split up the entire website into **smaller components**.

```js
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
```

Below is the code splitted up into **smaller components**.

To split the **h1** into a separete component we create a `function`, e.g. `Heading()`, and it is **React** convention to give the **components** a name that is in **Pascal case** (every single word has the first letter **capitalized**),  and this allow **React** to differentiate between the **custom components** versus the **HTML elements** that we are trying to get hold of that exists in the **DOM. The **heading function** is going to return a **HTML element** that is created using **JavaScript\*\*, below is an example:

```js
//Create a React component called Heading
function Heading() {
  //h1 is the output of the heading function
  return <h1>My Favourite Foods</h1>;
}
```

Now the **custom heading component** can be used inside the **React code** as if it was a **HTML element**.

> :warning: **WARNING**</br></br>
> By convention, if we have a **HTML element** that has no children (nothing between the opening and closing tags), then the best practice is to have a self closing tag `<Heading />`.</br></br>
> The [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react) is generally accepted to be a good **reference** as to best practices on how to write or structure your code.

```js
import React from "react";
import ReactDOM from "react-dom";

//Create a React component called Heading
function Heading() {
  //h1 is the output of the heading function
  return <h1>My Favourite Foods</h1>;
}

ReactDOM.render(
  <div>
    <Heading />
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
```

## ES6 Import and Export Feature

We will going to use an **ES6 feature** to import and export **React components** such as the `Heading` **component** from a separate file in order to keep the code cleaner and easier to read.
In order to do that we create a file called **Heading.jxs** inside the **src** folder, note now that the **JSX file name** will be used to denote all of the **components** which are going to be written in **JSX**.

As a convention we usually leave `index.js` as a plain **JavaScript** file, even if we are using some **React** and some **JSX** in it. And then we would have all of our components separated into individual files with the **JSX extension**.

The final code would like the one below:

**index.js**

```js
import React from "react";
import ReactDOM from "react-dom";

//ES6 feature to import React components
import Heading from "./Heading.jsx";
import List from "./List.jsx";

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
```

**Heading.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

//Create a React component called Heading
function Heading() {
  //h1 is the output of the heading function
  return <h1>My Favourite Foods</h1>;
}

/*
ES6 feature to export React components
we don't use parentheses (export default Heading();)
because it would make it return immediatelly, instead
we want to use it as a component (inside a HTML tag...)
*/
export default Heading;
```

**List.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

//Create a React component called List
function List() {
  return (
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  );
}

/*
ES6 feature to export React components
we don't use parentheses (export default List();)
because it would make it return immediatelly, instead
we want to use it as a component (inside a HTML tag...)
*/
export default List;
```

## [React Components Final Code](https://codesandbox.io/s/react-components-forked-1mj7q?file=/src/components/App.jsx)

> :warning: **WARNING**</br></br>
> Normally, you will notice that in a lot of **React apps**, they don't have any **HTML elements** inside the **index.js** file.</br></br>
> Instead **index.js** has pretty much no **custom code**, other than just a **custom component** called `App`, like the example below, and then in the **App.jsx** we have the start of the **component tree** and then we start seeing these **HTML elements** as well as **custom components**.</br></br>
> Another good practice is to create a folder called **components** inside the **src** folder and move all the **components** over there.

**index.js**

```js
import React from "react";
import ReactDOM from "react-dom";

//ES6 feature to import React components
import App from "./components/App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));
```

**App.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

//ES6 feature to import React components
import Heading from "./Heading.jsx";
import List from "./List.jsx";

function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

/*
ES6 feature to export React components
we don't use parentheses (export default App();)
because it would make it return immediatelly, instead
we want to use it as a component (inside a HTML tag...)
*/
export default App;
```

**Heading.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

//Create a React component called Heading
function Heading() {
  //h1 is the output of the heading function
  return <h1>My Favourite Foods</h1>;
}

/*
ES6 feature to export React components
we don't use parentheses (export default Heading();)
because it would make it return immediatelly, instead
we want to use it as a component (inside a HTML tag...)
*/
export default Heading;
```

**List.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

//Create a React component called List
function List() {
  return (
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  );
}

/*
ES6 feature to export React components
we don't use parentheses (export default List();)
because it would make it return immediatelly, instead
we want to use it as a component (inside a HTML tag...)
*/
export default List;
```

## [React Components Code Challenge](https://codesandbox.io/s/react-components-practice-forked-pijd5?file=/src/components/App.jsx)

:question: Break down the code below into individual compact and reusable **React components**.

```js
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

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

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
```

:heavy_check_mark: **Solution**

**index.js**

```js
import React from "react";
import ReactDOM from "react-dom";

//ES6 feature to import React components
import App from "./components/App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));
```

**Heading.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

//Create a React component called Heading
function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: ""
  };

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
  //h1 is the output of the heading function
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

/*
ES6 feature to export React components
we don't use parentheses (export default Heading();)
because it would make it return immediatelly, instead
we want to use it as a component (inside a HTML tag...)
*/
export default Heading;
```

**App.jsx**

```js
/*
React needs to be imported as the code below is not actually JS
it is in fact JSX because we have the HTML elements which are
intermingling with actual JS code and we are only able to do this
because the React module actually converts the code below into real
JS using real JS functions such as document.createElement
*/
import React from "react";

//ES6 feature to import React components
import Heading from "./Heading.jsx";

function App() {
  return <Heading />;
}

/*
ES6 feature to export React components
we don't use parentheses (export default App();)
because it would make it return immediatelly, instead
we want to use it as a component (inside a HTML tag...)
*/
export default App;
```

* * *

# JavaScript ES6 - Import, Export and Modules Lesson

**Import, export** and the concept of **modules** allow us to be able to start aplitting up large **JavaScript** files into individual more manageable **components**. And this is what **React components** are leveraging from\*\*.

Once we export a file e.g. `math.js` then it becomes a new **module** and we can export whatever it is that we want to be used elsewhere from this file.

When we are importing something that is the **default**, we can actually name it whatever we want in the file we imported it e.g. `pie` instead of `pi`, see example below:

**index.js**

```js
import React from "react";
import ReactDOM from "react-dom";

//import the constant pi from the math.js file
import pie from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>2</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
);
```

**math.js**

```js
const pi = 3.1415962;

//specify what we want to export, the value of the constant pi
export default pi;
```

## JavaScript ES6 - Import, Export and Modules [Final Code](https://codesandbox.io/s/es6-importexport-modules-forked-w57lq?file=/src/index.js)

in addition to creating a **default export**, which means that when another file writes **import something** from `file X`, that something is going to be equivalent to the **default export**, but if you want to **import more than one thing** then we can write another **export statement** with a set of curly braces `{}` and inside the curly braces we can define all the **non-default exports**, e.g. `export { doublePi, triplePi };` and in order to **import** then inside the other file (`index.js`), we can add it along with our **default export** using a `,` and a set of `{}`, e.g. `import pi, { doublePi, triplePi } from "./math.js";`, and in this case the names matter, so we cannot change the names because it will not be able to recognize it from the list of exports `export { doublePi, triplePi };`.

With the **default** there is only and there can be **only one default export per file**, but with the other ones we differentiate them by their names.

**index.js**

```js
import React from "react";
import ReactDOM from "react-dom";

//import the constant pi from the math.js file
import pi, { doublePi, triplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
```

**math.js**

```js
const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

//specify what we want to export, the value of the constant pi
export default pi;

export { doublePi, triplePi };
```

## Asterisk(\*) Wildcard

`doublePi` and `triplePi` are `functions` so in order to get the value or the return of it, we have to add the **parentheses** `()` to activate it, `<li>{doublePi()}</li><li>{triplePi()}</li>`. However, If we don't want to separate out the difference between the **default** and the **exports**, then we can use the **wildcard** `*`, the asterisk sign basically says **_import everything_** but we have to give it a name so we can use it in the file, e.g. `myPI`. See example below `index.js`:</br>

```js
import React from "react";
import ReactDOM from "react-dom";

//import the constant pi from the math.js file
//import pi, { doublePi, triplePi } from "./math.js";

//We can use the wildcard *
import * as myPI from "./math.js";

console.log(myPI);

ReactDOM.render(
  <ul>
    <li>{myPI.default}</li>
    <li>{myPI.doublePi()}</li>
    <li>{myPI.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
```

> :warning: **WARNING**</br></br>
> Note the `math.js` file does not require any changes to use the asterisk wildcard. However, if we use a wildcard ten we will lose the benefit of having a **single default export**. Using the **single default export** and incorporating specific functions makes the code more clear and it means that we are only importing the things that we actually need. This the reason why the wildcard import is discouraged in many style guides.</br>

## JavaScript ES6 - Import, Export and Modules [Code Challenge](https://codesandbox.io/s/es6-importexport-practice-forked-2e0hu?file=/src/index.js:0-469)

:question: Import the correct **functions** to the code below in order to make it work:

**index.js**

```js
import React from "react";
import ReactDOM from "react-dom";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
```

**calculator.js**

```js
function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}
```

:heavy_check_mark: **Solution**

**index.js**

```js
import React from "react";
import ReactDOM from "react-dom";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png
import add, { multiply, subtract, divide } from "./calculator.js";

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
```

**calculator.js**

```js
function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

export default add;

export { multiply, subtract, divide };
```

* * *

# React Properties (Props) Lesson

**[Props](https://www.w3schools.com/react/react_props.asp)** are arguments passed into **React components**, they are passed to components via **HTML attributes**. **React Props** are like **function arguments in JavaScript** and **attributes in HTML**. To send props into a **component**, use the same syntax as **HTML attributes**.

As we can see on the code below, it is very repetitive and very long to create this page as per this code, and this is a perfect use case for **React components** because of these repetitive **elements**

```js
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <h2>Beyonce</h2>
    <img
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
    />
    <p>+123 456 789</p>
    <p>b@beyonce.com</p>

    <h2>Jack Bauer</h2>
    <img
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
    />
    <p>+987 654 321</p>
    <p>jack@nowhere.com</p>

    <h2>Chuck Norris</h2>
    <img
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_img"
    />
    <p>+918 372 574</p>
    <p>gmail@chucknorris.com</p>
  </div>,
  document.getElementById("root")
);
```

We can pass properties (props) to our **custom React components** using very similar syntax to what we have in **HTML**. Example is `<Card name="Beyonce"/>`, when this `Card` **component** gets created, it will have a **property** called `name` that is set to **Beyonce**, and we can get a hold of it by adding a name to the **input** to access these things that are sent over, and it is normal to call it **props**

For example inside the **Card()** function we can **console.log** the value of the props, in the example below we will get **Beyonce**:

```js
import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);

  return (
    <div>
      <h2>Beyonce</h2>
      <img
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        alt="avatar_img"
      />
      <p>+123 456 789</p>
      <p>b@beyonce.com</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" />
    <input id="fName" placeholder="Enter your first name" />
  </div>,
  document.getElementById("root")
);
```

Now with the updated [code below](https://codesandbox.io/s/react-props-forked-5b42b?file=/src/index.js), the `Card(props)` **function** no longer contains any Beyonce's specific information, and now we can create as many of these cards as we need with different pieces of information.

```js
import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);

  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Panda Maria Pandacio"
      img="https://i.pinimg.com/originals/e0/3d/5b/e03d5b812b2734826f76960eca5b5541.jpg"
      tel="+452 965 548"
      email="pandacio@com.poa"
    />
  </div>,
  document.getElementById("root")
);
```

## React Properties (Props) Code Challenge

:question: The challenge below has been completed on [CodeSandbox](https://codesandbox.io/s/react-props-practice-forked-mgt5p?file=/src/index.js:158-509).

-   Apply CSS styles to App.jsx component to match the appearance on the completed [app](https://c6fkx.csb.app/):
-   Extract the contact card as a reusable Card component.
-   Use props to render the default Beyonce contact card so the Card component can be reused for other contacts.
-   Import the contacts.js file to create card components.

**index.js**

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
```

**contacts.js**

```js
const contacts = [
  {
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com"
  },
  {
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];
```

**App.jsx**

```js
import React from "react";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2>Beyonce</h2>
          <img
            src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>+123 456 789</p>
          <p>b@beyonce.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
```

:heavy_check_mark: **Solution**

**index.js**

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
```

**Cards.jsx**

```js
import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
```

**contacts.js**

```js
//Array of JavaScript objects
const contacts = [
  {
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com"
  },
  {
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];

export default contacts;
```

**App.jsx**

```js
import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts.js";

function App() {
  //log contacts constant
  console.log(contacts);

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        //Properties
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        //Properties
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        //Properties
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
```

# React DevTools Lesson

In this lesson we are going to separate out a **React app** into even smaller **components** which are more specialized. And use **React developer tools** to help **debug** and **manage** all of these components. We are going to use the [code](https://codesandbox.io/s/react-devtools-dk9gj?fontsize=14&file=/src/index.js) from the previous challenge for it.

Inside the **Card.jsx component** (**_code below_**) there are things which might work better as a **single component** because in the future we might want to **reuse it**.

```js
import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
```

## [Final Code](https://codesandbox.io/s/react-devtools-forked-wlc0k?file=/src/components/Detail.jsx:0-131) with More **Components**

**Avatar.jsx**

```js
import React from "react";

function Avatar(props) {
  return <img className="circle-img" src={props.img} alt="avatar_img" />;
}

export default Avatar;
```

**Detail.jsx**

```js
import React from "react";

function Detail(props) {
  return <p className="info">{props.detailInfo}</p>;
}

export default Detail;
```

**App.jsx**

```js
import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar img="https://upload.wikimedia.org/wikipedia/commons/c/cd/Panda_Cub_from_Wolong%2C_Sichuan%2C_China.JPG" />

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
```

**Card.jsx**

```js
import React from "react";
import Avatar from "./Avatar.jsx";
import Detail from "./Detail.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
```

# Mapping Data to Components Lesson

**Mapping components** technique makes it easier to map all the **individual custom pieces of data** e.g. `name={contacts[0].name}` to each of these **custom components** e.g. `<Card />` (from code below **App.jsx**), then we will not need to keep creating `<Card />` **component** after `<Card />` **component**, and it can be created **dynamically**.

```js
<Card
  name={contacts[0].name}
  img={contacts[0].imgURL}
  tel={contacts[0].phone}
  email={contacts[0].email}
/>
<Card
  name={contacts[1].name}
  img={contacts[1].imgURL}
  tel={contacts[1].phone}
  email={contacts[1].email}
/>
<Card
  name={contacts[2].name}
  img={contacts[2].imgURL}
  tel={contacts[2].phone}
  email={contacts[2].email}
/>
```

The **map function** is a JavaScript function that is useful for handling **arrays** such as the **contacts array (`contacts.js`)**. What the map function (`{contacts.map(createCard)}`) does is it **loops** through the `contacts` **array** and for every single **item** that exists in the **array**, it calls the `function createCard(contact)` **function** and it passes over each of the **objects** inside the **array**.

**App.jsx**

```js
import React from "react";
import Card from "./Card";
import contacts from "../contacts";

//Function to create a new card component
function createCard(contact){
  return <Card name={contact.name}
  img={contact.imgURL}
  tel={contact.phone}
  email={contact.email}
   />;
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {/*
      Tap into the contacts array (contacts.js) and then
      we will call the map function, inside the map() it expects
      an actual function (we are calling a function and then passing it a function)
      and this is kind of the fundamentals of functional programming where instead of
      passing values around the code, we pass functions into functions instead, and there
      can be many levels of functions into functions...
      */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
```

**contacts.js**

```js
const contacts = [
  {
    id: 1,
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com"
  },
  {
    id: 2,
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    id: 3,
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];

export default contacts;
```

> :warning: **WARNING**</br></br>
> We get the below error message when we use the Rect DevTools</br></br>
> Warning: Each child in a list should have a unique "key" prop.<br/>
>
> * * *
>
> As **React** is able to create a **Virtual DOM** that represents the current appearance of the website, and in order for it to be able to efficiently render components. For every single component that is being rendered using a loop such as the map function, we will have to give those components a property that has to be called `key`, and this property has to be something that is unique amongst each of these card components, that is being created using the loop, in this case we can use the `id` property inside the `contacts.js` file as it is unique to each of the contacts. </br></br>
> The `key` property for each React component is a special property, and it is used to ensure the right order of items goes into the tree, it is used so it can render these components efficiently when they are being created from a loop, but it is not something we can tap into. If we want to show that `id` that comes from `contacts.js` then we need to create a custom prop e.g. (`id={contact.id}`)</br></br>
> See below the final code:

**App.jsx**

```js
import React from "react";
import Card from "./Card";
import contacts from "../contacts";

//Function to create a new card component
function createCard(contact){
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
   />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {/*
      Tap into the contacts array (contacts.js) and then
      we will call the map function, inside the map() it expects
      an actual function (we are calling a function and then passing it a function)
      and this is kind of the fundamentals of functional programming where instead of
      passing values around the code, we pass functions into functions instead, and there
      can be many levels of functions into functions...
      */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
```

**Card.jsx**

```js
import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
     <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
```

## Mapping Data to Components Challenge

:question: The code below is the starting code for the challenge:

**App.jsx**

```js
import React from "react";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              💪
            </span>
            <span>Tense Biceps</span>
          </dt>
          <dd>
            “You can do that!” or “I feel strong!” Arm with tense biceps. Also
            used in connection with doing sports, e.g. at the gym.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🙏
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🤣
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of “rofl“. Stands
            for „rolling on the floor, laughing“.
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default App;
```

**emojipedia.js**

```js
const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  }
];
```

Challenge Tasks:

-   Create Entry Components
-   Create props to replace hardcoded data
-   Import the emojipedia const
    -   Map through the emojipedia array and render Entry components

:heavy_check_mark: **Solution**

**App.jsx**

```js
import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

//Check if we now got access to the emojipedia array (this is just a test)
console.log(emojipedia);

//Function to create a new emoji component
function createEntry(emojiTerm) {
	return (
		<Entry
      key={emojiTerm.id}
      emojiCharacter={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
	);
}

function App() {
	return (
		<div>
			<h1>
				<span>emojipedia</span>
			</h1>

			<dl className="dictionary">{emojipedia.map(createEntry)}</dl>
		</div>
	);
}

export default App;
```

**emojipedia.js**

```js
const emojipedia = [
	{
		id: 1,
		emoji: "💪",
		name: "Tense Biceps",
		meaning:
			"“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
	},
	{
		id: 2,
		emoji: "🙏",
		name: "Person With Folded Hands",
		meaning:
			"Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
	},
	{
		id: 3,
		emoji: "🤣",
		name: "Rolling On The Floor, Laughing",
		meaning:
			"This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
	},
	{
		id: 4,
		emoji: "😚",
		name: "Kissing Face With Closed Eyes",
		meaning:
			"Cute face with closed eyes and rosy cheeks. As a thank you for a tip or a favor. Loving kiss to the closest friends, family or darling."
	},
	{
		id: 5,
		emoji: "🤬",
		name: "Face With Symbols Over The Mouth",
		meaning:
			"The symbols over the mouth represent cursing. The serious-looking smiley is really upset and keeps using four-letter words. Represents a sudden outburst of fury or frustration"
	},
	{
		id: 6,
		emoji: "🐼",
		name: "Panda",
		meaning:
			"I'm going to a Cro concert! Pandas come from China, feed on bamboo and are threatened with extinction. You find something totally cute or as an expression of affection within friendships."
	}
];

export default emojipedia;
```

**Entry.jsx**

```js
import React from "react";

function Entry(props) {
	return (
		<div className="term">
			<dt>
				<span className="emoji" role="img" aria-label="Tense Biceps">
					{props.emojiCharacter}
				</span>
				<span>{props.name}</span>
			</dt>
			<dd>{props.meaning}</dd>
		</div>
	);
}

export default Entry;
```

# JavaScript ES6 Map/Filter/Reduce Lesson

## [Map Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

We will look into map in greater detail and also look at some of the related **functions** that help deal with **arrays** such as **map**, **filter**, **reduce**, **find**, and **find index**.

**Map** allows us to loop through the **array** and **create a new array** by doing something with each item in the **array**. We call it by getting hold of an **array** in order to call **map** on it, and inside the **map function** there is going to be another **function (we are passing a `function` into another `function`)**, and the **function** we pass in will determine what we actually want to do with each item.

Let's use as an exempre (below) we want to **double** each of the items in the **array** `numbers`. We create a **function** that takes an input `x` and simply just **return** the value of `x` multiplied by `2`. If we pass the `double function` into the `map function`, then it is going to loop through the `numbers` **array** and for each of the `numbers` in the array it is going to put it as the `input` of the **function** and **output** a `new array` with each item replaced with double the size of the previous one.

```js
var numbers = [ 3, 56, 2, 48, 5 ];

function double(x) {
	return x * 2;
}

const newNumbers = numbers.map(double);

console.log("Original Array: " + numbers);
console.log("New Array with Numbers Doubled - Map Function: " + newNumbers);
```

The code above could also be written as below:

```js
var numbers = [ 3, 56, 2, 48, 5 ];

const newNumbers = numbers.map(function(x) {
	return x * 2;
});

console.log("Original Array: " + numbers);
console.log("New Array with Numbers Doubled - Map Function: " + newNumbers);
```

Using **map** is very handy in **React** when we are creating **custom components** and **mapping data** to it.

## [Filter Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Another related and also quite useful **function** is `filter`. What **filter** does is, it creates a new **array** by keeping only the items that return `true`. The `filter` **function** looks through each of the numbers inside the **numbers array** and for each of these numbers, it is going to return only the ones that meet a particular **criteria**, in the example below we are checking for numbers greater than 10, and if they are then we are going to **add** it to a new **array** which is going to be the output of this functions.

```js
var numbers = [ 3, 56, 2, 48, 5 ];

const newNumbers = numbers.filter(function(num) {
	return num > 10;
});

console.log("Original Array: " + numbers);
console.log("New Array with Numbers Doubled - Filter Function: " + newNumbers);
```

This is basically a way of adding a **filter** to the **array** and providing a condition that we want to check for, and if that condition is met then create a new `array (newNumbers)` with those items that actually return `true`.

We could do the above with a `forEach` loop instead of the filter, however, it takes more effort (code below) instead of simply using the `filter function`.

```js
var numbers = [ 3, 56, 2, 48, 5 ];

var newNumbers = [];
numbers.forEach(function(num) {
	if (num > 10) {
		newNumbers.push(num);
	}
});

console.log("Original Array: " + numbers);
console.log("New Array with Numbers Doubled - forEach Loop Instead of Filter Function: " + newNumbers);
```

## [Reduce Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

The **reduce function** works by **accumulating** a value and doing something to each of the items in an **array**. As an example let's say we want to **add** and **sum up** all of the items in the `numbers` **array**, see example below:

```js
var numbers = [ 3, 56, 2, 48, 5 ];

var newNumber = numbers.reduce(function(accumulator, currentNumber) {
	/*
    Console log the accumulator and current number every time the loop is
    run in order to understand how the reduce function works
  */
	console.log("accumulator: " + accumulator);
	console.log("currentNumber: " + currentNumber);

	return accumulator + currentNumber;
});

console.log("Original Array: " + numbers);
console.log("New Array with the Numbers Added Up - Reduce Function: " + newNumber);
```

We could do the above with a `forEach` loop instead of the reduce, however, it takes more effort (code below) instead of simply using the `reduce function`.

```js
var numbers = [ 3, 56, 2, 48, 5 ];

var newNumber = 0;
numbers.forEach(function(currentNumber) {
	newNumber += currentNumber;
});

console.log("New Array with the Numbers Added Up - forEach Loop Instead of Reduce Function: " + newNumber);
```

## [Find Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

The **Find function** helps to find the **first item** that matches in an **array**.

In the example below, the `find function` will look for the first value that is greater than 10, however, it will **not** loop through the whole array `var numbers = [ 3, 56, 2, 48, 5 ];`, it will stop as soon as it finds the first number that is greater than 10, which is **56**.

```js
var numbers = [ 3, 56, 2, 48, 5 ];

const newNumber = numbers.find(function(num) {

	return num > 10;
});

console.log("Find Function: " + newNumber);
```

## [FindIndex Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex)

The **FindIndex function** works on a similar way to the **Find Function**, but instead of finding the first item what it does is it **finds the index of the first item** that matches.

In the example below, the `findIndex function` will look for the first value that is greater than 10, however, it will **not** loop through the whole array `var numbers = [ 3, 56, 2, 48, 5 ];`, it will stop as soon as if finds the first number that is greater than 10 and return its **index**, which is **1**.

```js
var numbers = [ 3, 56, 2, 48, 5 ];

const newNumber = numbers.findIndex(function(num) {
	return num > 10;
});

console.log("FindIndex Function: " + newNumber);
```

## [substring Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

The `substring()` method returns the part of the `string` between the start and end indexes, or to the end of the string.

In the example below, the `substring method` is used with the `map function` to get hold of the `meaning` part of the **array** and return only the first **100** characters' `meaning`.

**index.js**

```js
import emojipedia from "./emojipedia.js";

const newEmojipedia = emojipedia.map(function(emojiEntry) {
	return emojiEntry.meaning.substring(0, 100);
});

//The emojipedia const is an array
console.log(emojipedia);

console.log("substring:\n" + newEmojipedia);
```

**emojipedia.js**

```js
const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  }
];

export default emojipedia;
```

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

* * *

# List of Projects Created in the React.js Module
