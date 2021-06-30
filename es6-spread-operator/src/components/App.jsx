import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      /*
      The code below using the spread operator replaces the if statements below (commented code)

      Return an object where we use the spread operator to add in the previous value (preValue)
      of the object e.g. the last name property, the first name property, or the email property... whatever
      it is that we had previously, and then we are going to add in a new value for whichever name
      of input that got passed in and the value that the user typed in
      */
      return {
        ...prevValue,
        [name]: value
      };

      //The code above can be shorted even more like the example below
      /*
        function handleChange(event) {
          const { name, value } = event.target;
          setContact(prevValue => ({ ...prevValue, [name]: value }));
        }
       */



      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevValue.lName,
      //     email: prevValue.email
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: value,
      //     email: prevValue.email
      //   };
      // } else if (name === "email") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: prevValue.lName,
      //     email: value
      //   };
      // }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
