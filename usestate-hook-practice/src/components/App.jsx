import React, { useState } from "react";

function App() {
	setInterval(updateTime, 1000);

	const now = new Date().toLocaleTimeString();

	//Destructured array
	const [ time, setTime ] = useState(now);

	function updateTime() {
		console.log("clicked");

		const newTime = new Date().toLocaleTimeString();
		setTime(newTime);
	}

	return (
		<div className="container">
			<h1>{time}</h1>
			<button onClick={updateTime}>Get Time</button>
		</div>
	);
}

export default App;
