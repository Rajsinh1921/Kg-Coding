import AddName from "./Components/AddName";
import AddTodo from "./Components/AddTodo";
import ErrorMessage from "./Components/ErrorMessage";
import TodoItems from "./Components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppStyle.css";
import { useState } from "react";
import data from "./storage/todo-items-store.jsx";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItems = (itemName, dueDate) => {
    setTodoItems((current) => {
      console.log(current);
      return [
        ...current,
        {
          id: todoItems.length + 1,
          name: itemName,
          duedate: dueDate,
        },
      ];
    });
  };

  const deleteTodoItems = (id) => {
    const filteredList = todoItems.filter((item) => item.id !== id);
    setTodoItems(filteredList);
  };

  return (
    <data.provider>
      <AddName />
      <AddTodo onNewItem={addTodoItems} />
      {todoItems.length === 0 && <ErrorMessage />}
      <TodoItems todoItem={todoItems} onClickDelete={deleteTodoItems} />
    </data.provider>
  );
}

export default App;
