import React, { useState } from "react";
import './App.css';
import ToDolist from "./components/toDolist";
function App() {
  const [textval, setTextVal] = useState("");
  const [list, setList] = useState([]);
  const trackChange = (event) => {
    setTextVal(event.target.value);
  }
  const listItem = () => {
    setList([...list, textval]);
    setTextVal("");
  }
  const deleteItem = (id) => {
    setList((oldlist) => {
      return oldlist.filter((arrele,index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div>
        <div className="container">
          <h1>TODO LIST</h1>
          <div id="line"></div>
          <div className="task-input">
            <input type="text" id="add-task" name="todo" placeholder="Add Task..." value={textval} onChange={trackChange} />
            <div className="flex-button mx-3">
              <input type="button" value="➕" name='add' id="add-btn" title="Add Task" onClick={listItem} />
              

            </div>
          </div>
          <div className="new-tasks">
            <div className="task">
              <ul>
              {
                  list.map((items, index) => {
                    return <ToDolist key={index} id={index} text={items} onSelect={deleteItem} />
                })
              }
              </ul>

              
              
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
