import { useState } from "react";
import { BiMessageAltAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [inputname, setInputname] = useState("");
  const [inputDueDate, setInputDueDate] = useState("");

  const handleNameChange = (event) => {
    setInputname(event.target.value);
  };
  const handleDueDateChange = (event) => {
    setInputDueDate(event.target.value);
  };

  const handleOnButtonClick = (event) => {
    event.preventDefault();
    onNewItem(inputname, inputDueDate);

    setInputname("");
    setInputDueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleOnButtonClick}>
        <div className="col-sm-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={inputname}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-sm-4">
          <input
            type="date"
            value={inputDueDate}
            onChange={handleDueDateChange}
          />
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
