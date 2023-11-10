import AddName from "./Components/AddName";
import AddTodo from "./Components/AddTodo";
import ErrorMessage from "./Components/ErrorMessage";
import TodoItems from "./Components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppStyle.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItems = (itemName, dueDate) => {
    setTodoItems([
      ...todoItems,
      {
        id: todoItems.length + 1,
        name: itemName,
        duedate: dueDate,
      },
    ]);
  };

  const deleteTodoItems = (id) => {
    const filteredList = todoItems.filter((item) => item.id !== id);
    setTodoItems(filteredList);
  };

  return (
    <>
      <center className="todo-container">
        <AddName />
        <AddTodo onNewItem={addTodoItems} />
        {todoItems.length === 0 && <ErrorMessage />}
        <div className="text-left">
          <TodoItems todoItem={todoItems} onClickDelete={deleteTodoItems} />
        </div>
      </center>
    </>
  );
}

export default App;
