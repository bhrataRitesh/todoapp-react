import React from "react";
const ToDolist = (props) => {
   
    return (<>
        <div className="d-flex">
        <li className="mx-2" id="added-task">{props.text}</li>
            <input type="button" value="❌" id="del-task" onClick={() => { props.onSelect(props.id) }} />
        </div>
    </>);
}

export default ToDolist;