import React, {useState} from "react";

function App() {

    //Stateful const to hold the values entered into the inputs
    const [fullName, setFullName] = useState({
        /*
        Specify the initial state, which is going to be an object
        and the first key will be fName and the second one lName,
        both with no values (empty string).

        Now fullName is storing an object, and when we call setFullName ideally,
        we want to set fName and lName to a new object
         */
        fName: "",
        lName: ""
    });

    /*
    When the inputs are changes (onChange gets triggered), they are going
    to call the same function (handleChange), passing over the event that
    calls this change. And then inside the function we are going to get hold
    of the new value which we will just call newValue.

    But we also need to get hold of the previous value of the fullName (the object inside essentially)
    so we can add to it the parts that have been changed, e.g. if the First Name input changes then
    only change the fName and so on... the other part should stay as it was
    */
    function handleChange(event) {
        // const newValue = event.target.value;
        // const inputName = event.target.name;
        //Another approach to the code above is to use object destructuring
        const {value, name} = event.target;

        // console.log("New Value " + newValue);
        // console.log("Input Name " + inputName);
        console.log("New Value " + value);
        console.log("Input Name " + name);

        //Arrow function - when setFullName is called it can get access to the previous value
        setFullName((prevValue) => {
            console.log(prevValue);

            if(name === "fName") {
                /*
                Return a new object where fName is corresponding to the new value
                and then the lName is corresponding to the previous value
                 */
                return {
                    fName: value,
                    lName: prevValue.lName
                }
                //If the user edits the Last Name field first
            } else if(name === "lName") {
                return {
                    fName: prevValue.fName,
                    lName: value
                }
            }
        });
    }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
          {/*The onChange property call the updateFName and updateLName functions*/}
        <input name="fName" onChange={handleChange} placeholder="First Name" value={fullName.fName}/>
        <input name="lName" onChange={handleChange} placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
