import React, {useState} from "react";

function App() {

    //1. When new text is written into the input, its state should be saved.
    const [inputText, setInputText] = useState("");

    //2. When the add button is pressed, the current data in the input should be added to an array.
    const [items, setItems] = useState([]);

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

    //2. When the add button is pressed, the current data in the input should be added to an array.
    //Add whatever text is inside the input into the items array
    function addItem() {
        /*
        inside setItems we need to get hold of the previous items so that we can
        simply add the new input at end of the array as a new item
        */
        setItems( (prevItems) => {
            return [...prevItems, inputText];
        });
        //Empty the input text to an empty string
        setInputText("");
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
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>

        <ul>
          {/*Map Function*/}
          {/*2. When the add button is pressed, the current data in the input should be added to an array.*/}
          {/*tap into items, call the map function and then inside the map function we can*/}
          {/*pass it an arrow function and inside the arrow function we will get access to each item*/}
          {items.map((todoItem) => {
              return <li>{todoItem}</li>
          })}
        </ul>

      </div>
    </div>
  );
}

export default App;
