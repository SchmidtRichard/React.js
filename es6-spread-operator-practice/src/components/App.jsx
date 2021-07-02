import React, {useState} from "react";

function App() {

    //1. When new text is written into the input, its state should be saved.
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        //const to keep hold of the new value of the input
        const newValue = event.target.value;

        /*
        Once we got the new value of the input we can call setInputText and
        inside this function, we are going to pass it this newValue, and because
        in this case we are not actually changing the inputText, we are not mutating
        it using setInputText we do not actually need the previous value like
        in the previous lesson
        */
        setInputText(newValue);
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">

          {/*1. When new text is written into the input, its state should be saved.*/}
          {/*add a value property to the inputs and to tie it to the inputText state*/}
          {/*so this way we are controlling the inputs and keeping the input value inline with the input text*/}
          {/*onChange added to the input that calls a function which will call handleChange*/}
        <input onChange={handleChange} type="text" value={inputText}/>
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
