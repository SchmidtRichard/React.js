import React from "react";

function ToDoItem(props){

    //Boolean is set to false
    // const [isDone, setIsDone] = useState(false);

    //function handleClick() {
        //Set a boolean to true or false when <div onClick={handleClick}> gets clicked
        // setIsDone((prevValue) =>{
        //     return !prevValue;
        // });
    //};

    return (
        /*
        When the ToDoItem gets rendered the function below is not
        going to be called until the div detects a click
         */
        <div onClick={() =>{
        props.onChecked(props.id);
        }}>
            {/*if isDone = true -> line-through, if false -> none*/}
            <li>{props.text}</li>
        </div>
    )
};

export default ToDoItem;