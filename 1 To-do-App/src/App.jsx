import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoItems from "./Components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppStyle.css";
function App() {
  const todoItems = [
    {
      name: "Buy milk",
      duedate: "4/10/2023",
    },
    {
      name: "Go to College",
      duedate: "12/11/2023",
    },
    {
      name: "Go to doctors",
      duedate: "04/11/2023",
    },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <div className="text-left">
          <TodoItems todoItem={todoItems} />
        </div>
      </center>
    </>
  );
}

export default App;
