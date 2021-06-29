import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  /*
  When the inputs are changed (onChange gets triggered), they are going
  to call the same function (handleChange), passing over the event that
  calls this change. And then inside the function we are going to get hold
  of the new value which we will just call newValue.

  But we also need to get hold of the previous value of the contact (the object inside essentially)
  so we can add to it the parts that have been changed, e.g. if the first name input changes then
  only change the fName and so on... the other part should stay as it was
  */
    function handleChange(event) {
        //Create a new destructured object
        const {name, value} = event.target;

        console.log("New Value" + value);
        console.log("Input Name " + name);

        /*
        Arrow function - when setContact is called it can get access to the previous value

        handleChange is called when the user enters a value into the input fields
        it then passes the event that led to the change, and we will end up with a
        new value and having an input name, and when it happens then the setContact arrow
        function gets called and when setContact gets called we are passing in a function
        which will get hold of the previous value of contact
        */
        setContact((prevValue) => {
            console.log(prevValue);

            /*
            Check for the name of the input that triggered the handleChange and
            then use the new value from that event to populate a different field
            depending on which one was changed
            */
            if(name === "fName") {
                /*
                return a new object where fName is corresponding to the new value
                and then the lName and email is corresponding to the previous value
                */
                return {
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email
                }
                //If the user edits the last name field first
            } else if(name === "lName") {
                return {
                    fName: prevValue.fName,
                    lName: value,
                    email: prevValue.email
                }
                //If the user edits the email field first
            }else if(name === "email") {
                return {
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: value
                }
            }
        });
    }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handleChange} placeholder="First Name" value={contact.fName}/>
        <input name="lName" onChange={handleChange} placeholder="Last Name" value={contact.lName}/>
        <input name="email" onChange={handleChange} placeholder="Email" value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
