import React, { useState } from "react";

function App() {
	const [ headingText, setHeadingText ] = useState("Hello there");

	function handleClick() {
		console.log("Clicked");

		//Change the text in the h1 once the button gets clicked
		setHeadingText("Submitted");
	}

	const [ isMousedOver, setMouseOver ] = useState(false);

	function handleMouseOver() {
		console.log("Moused Over");

		//Change the color of the button once we hover it with the mouse
		setMouseOver(true);
	}

	function handleMouseOut() {
		console.log("Mouse Out");

		//Change the color of the button back to white once we hover the mouse out
		setMouseOver(false);
	}

	return (
		<div className="container">
			<h1>{headingText}</h1>
			<input type="text" placeholder="What's your name?" />

			<button
				style={{ backgroundColor: isMousedOver ? "black" : "white" }}
				onClick={handleClick}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
			>
				Submit
			</button>
		</div>
	);
}

export default App;
