import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = false;

// const currentTime = new Date(2021, 18, 5, 9).getHours();

// console.log(currentTime);

function App() {
	return (
		<div className="container">
			{//Check if the user is logged in
			isLoggedIn ? <h1>Hello</h1> : <Login />
			//currentTime > 12 && <h1>Still working?</h1>
			}
		</div>
	);
}

export default App;
