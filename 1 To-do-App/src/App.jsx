import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import Todo1 from "./Components/Todo1";
import Todo2 from "./Components/Todo2";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <Todo1 />
        <Todo2 />
      </center>
    </>
  );
}

export default App;
