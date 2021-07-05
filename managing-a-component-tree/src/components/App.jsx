import React, { useState } from "react";
import ToDoItem from "./ToDoItem.jsx";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map(todoItem => (
            /*
            In order to display a different ToDoItem each time we map through the
            items array, we will pass the todoItem which is the text the
            <ToDoItem /> should display as a property, we will call the property text
            Now the text can be received inside the ToDoItem components as
            one of the props
            */
            <ToDoItem text={todoItem}/>

          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
