import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
  
  const [todoItem, setTodoItem] = useState([])

  const addData=(addname,adddate)=>{
   
    setTodoItem((currentValue)=>{
      const newTodoItem=[
        ...currentValue,
        {name:addname,
          dueDate:adddate}
      ];
      return newTodoItem;

    })
    
  }

  const deleteButton=(deleteItem)=>{
      let deleteName=todoItem.filter((item)=>item.name !== deleteItem );
      setTodoItem(deleteName);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addData={addData}/>
      {todoItem.length===0 && <Welcome/>}
      <TodoItems initialItems={todoItem} handleBtn={deleteButton} ></TodoItems>
    </center>
  );
}

export default App;