import React, {useState} from 'react';
import "./Todo.css";
import img from "./todo.png"

const Todo = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent =(event) =>{
    setInputList(event.target.value);
  };

  const listOfItems = () =>{
    setItems((oldItems) =>{
      return [...oldItems, inputList];
    })
    setInputList("");
  };

  const deleteItems =(id) =>{
    //console.log("id");
    const updatedItems = items.filter((itemval, index) => {
      return index !== id ;
    });
    setItems(updatedItems);
  }

  return (
    <div className="outer-box">
      <div className="box">
        <div className="heading">
          <h1>
          <img className="todo-logo" src={img} width="50px" alt="todo"/>
          Add A New Todo
          </h1>
        </div>
        <div className="input-todo">
          <input type="text" name="todo" placeholder="Enter Todo" value={inputList} onChange={itemEvent} />
          <button className="btn-todo" type="button" name="addTodo" onClick={listOfItems}>Add</button>
        </div>
      </div>
      <div className="todo-list">
        <ol>
            {/* <div> {inputList} </div> */}

            <div>
            {items.map((itemval, index) => {
              return  <li key={index} id={index} text={itemval} onSelect={deleteItems}> {itemval}
              <button className="del-btn" onClick={() => deleteItems(index)}>Delete</button>
              </li>;
            })}
            </div>
        </ol>
      </div>
    </div>
  );
};

export default Todo;