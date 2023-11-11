import { useRef } from "react";
import { BiMessageAltAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const todoNameEle = useRef("");
  const todoDuedateEle = useRef("");

  const handleOnButtonClick = () => {
    event.preventDefault();
    const todotname = todoNameEle.current.value;
    const todoDueDate = todoDuedateEle.current.value;
    onNewItem(todotname, todoDueDate);
    todoNameEle.current.value = "";
    todoDuedateEle.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleOnButtonClick}>
        <div className="col-sm-6">
          <input type="text" placeholder="Enter Todo here" ref={todoNameEle} />
        </div>
        <div className="col-sm-4">
          <input type="date" ref={todoDuedateEle} />
        </div>
        <div className="col-sm-2">
          <button className="btn btn-success btn-add">
            <BiMessageAltAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
