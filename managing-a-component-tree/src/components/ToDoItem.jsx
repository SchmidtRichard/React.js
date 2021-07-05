import React, {useState} from "react";

function ToDoItem(props){

    //Boolean is set to false
    const [isDone, setIsDone] = useState(false);

    function handleClick() {
        //Set a boolean to true or false when <div onClick={handleClick}> gets clicked
        setIsDone((prevValue) =>{
            return !prevValue;
        });
    };

    return (
        <div onClick={handleClick}>
            {/*if isDone = true -> line-through, if false -> none*/}
            <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
        </div>
    )
};

export default ToDoItem;