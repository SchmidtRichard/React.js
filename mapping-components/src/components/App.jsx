import React from 'react';
import Card from './Card';
import contacts from '../contacts';

//Function to crate a new card component
function createCard(contact) {
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

			{/* <Card
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
      /> */}
		</div>
	);
}

export default App;
