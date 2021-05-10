import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

//Check if we now got access to the emojipedia array (this is just a test)
console.log(emojipedia);

//Function to create a new emoji component
function createEntry(emojiTerm) {
	return (
		<Entry key={emojiTerm.id} emojiCharacter={emojiTerm.emoji} name={emojiTerm.name} meaning={emojiTerm.meaning} />
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
