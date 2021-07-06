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

  function deleteItem(id) {
    console.log("Item called delete.");

    //When setItems gets called it updates the list of items
    setItems((prevItems) => {
      /*
      filter function to filter through all of the previous items in the
      items array and get rid of the ones which match the id

      Return an array constructed from the previous items array, but it is
      going to be filtered to get rid of the item we don't want, so the one
      that has the id that was passed over
      The filter function expects a function itself
      */
      return  prevItems.filter(
          /*
          Go through the array of previous items, look through each item
          and get the index of item in the array and return an output, a final array,
          that is going to return all the items where the index is not equal to the id
          being passed over
         */
          (item, index) => {
            return index !== id;
          });
    });
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
          {/*index is the current index of todoItem being looped through the items array*/}
          {items.map((todoItem, index) => (
            /*
            In order to display a different ToDoItem each time we map through the
            items array, we will pass the todoItem which is the text the
            <ToDoItem /> should display as a property, we will call the property text
            Now the text can be received inside the ToDoItem components as
            one of the props

            Other than passing over **props** to the child components, we can
            also pass over functions which gets called by our child component.
            For example, when we create each to do item in addition to the text
            property text={todoItem}, we can add another property, and we can
            call it anything we want, e.g. onChecked, and we can set this equal
            to a function inside the app component, e.g. deleteItem function.

            In order to delete the item that requested the deletion we can pass over
            something that identifies the item when the onChecked (ToDoItem.jsx) is called,
            something that identifies the particular ToDoItem from all of the other ones that
            gets rendered. That can be done by adding an id.
            */
            <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
            />

          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
