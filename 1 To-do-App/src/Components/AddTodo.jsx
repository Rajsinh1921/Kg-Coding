import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [inputname, setInputname] = useState("");
  const [inputDueDate, setInputDueDate] = useState("");

  const handleNameChange = (event) => {
    setInputname(event.target.value);
  };
  const handleDueDateChange = (event) => {
    setInputDueDate(event.target.value);
  };

  const handleOnButtonClick = () => {
    onNewItem(inputname, inputDueDate);
    setInputname("");
    setInputDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row">
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
          <button
            onClick={handleOnButtonClick}
            type="button"
            className="btn btn-success btn-add"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
