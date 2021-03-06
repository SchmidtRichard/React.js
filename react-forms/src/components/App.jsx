import React, { useState } from "react";

function App() {
	//State - destructure the output for useState to hold two things: name and the function -> setName
	const [ name, setName ] = useState("");

	const [ headingText, setHeading ] = useState("");

	//Function that will be triggered every time the input is changed
	function handleChange(event) {
		console.log("Changed");
		console.log("Value: " + event.target.value);
		console.log("Placeholder: " + event.target.placeholder);
		console.log("Type: " + event.target.type);

		setName(event.target.value);
	}

	function handleClick(event) {
		setHeading(name);

		console.log("Name: " + name);
	}

	return (
		<div className="container">
			<h1>Hello {headingText}</h1>
			<input type="text" onChange={handleChange} placeholder="What's your name?" value={name} />
			<button onClick={handleClick}>Submit</button>
		</div>
	);
}

export default App;
