import React, {useState} from "react";

function App() {

    //Stateful const to hold the values entered into the inputs
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");

    //Function to update the first name - when the onChange gets triggered we get past the event
    function updateFName(event) {
        const firstName = event.target.value;

        //Update the fName const using the setFName method and pass it the new value
        setFName(firstName);
    }

    //Function to update the last name - when the onChange gets triggered we get past the event
    function  updateLName(event) {
        const lastName = event.target.value;

        //Update the lName const using the setLName method and pass it the new value
        setLName(lastName);
    }

  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
          {/*The onChange property call the updateFName and updateLName functions*/}
        <input name="fName" onChange={updateFName} placeholder="First Name" value={fName}/>
        <input name="lName" onChange={updateLName} placeholder="Last Name" value={lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
