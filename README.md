# React.js

**React** is a JavaScript library for building user interfaces (front-end framework essentially).



# CodeSandbox

**CodeSandbox** is an online editor for rapid web development. With **CodeSandbox**, you can prototype quickly, experiment easily, and share creations with a click. Use it to create static sites, full-stack web apps, or components on any device with a web browser.

It is a browser based development environment that was initially created with React development in mind. It takes care of a lot of the grunt work and setup and makes it easy to install dependencies with **NPM** support, so every package that we have used previously using **NPM install** we can use inside **CodeSandbox**.

It can be embedded into medium blog posts and web pages, it allows us to build and deploy within the same application and a lot of other things including really good syntax highlighting and linting as well.



# JSX & Babel

**JSX** stands for **JavaScript XML**. **JSX** makes it easier to write and add HTML in React. **React** works by creating these **JSX** files, file were we've got **HTML** right in the body of a **JavaScript** file, and what happened behing the scenes is that the **HTML** is picked up by a **compiler** and it gets converted or compiled down to actual **JavaScript** and the compiler comes from the React module `var React = require("react");`. Inside the **React module** there is something called **Babel**, and **Babel** is a **JavaScript** compiler and it is able to take next generation **JavaScript** and compile it down to a version of **JavaScript** that every browser can understand, and this includes compiling **JSX** down to **plain old JavaScript**.

ROOT DIV

The `div` with the `root id` is always in the React apps and it is basically the **root** for the **React application**. So everything that we create using **React** is going to be inserted inside this `div`.

```html
<div id="root"></div>
```

All of the code will be written inside `index.js`, and not inside `index.html`.

Dependencies Used

They are: **react** and **react-dom**.

Then we need to require them inside the `index.js` file

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

WARNING
The **render method** can only take a single **HTML element**. We can then turn two or more **HTML elements** into one by placing them into a **div** and everyting that goes inside a **div** still counts as a **single HTML element**.





One of the latest features to come to **JavaScript** is the `import` keyword, so instead of **requiring** the **React module** and setting it to a **variable** we can simply just **importing React** from a particular **module** or a particular **location**, and the same can be done for **ReactDOM**.

By using the `import` and the `export` **keywords** we are able to **modularise** these dependencies far better and we end up with code that is better organized.



```js
//Require the dependencies needed
var React = require("react");
var ReactDOM = require("react-dom");
```

```js
//Import the dependencies needed
import React from "react";
import ReactDOM from "react-dom";
```






