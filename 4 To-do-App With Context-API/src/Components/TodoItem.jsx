import { RiDeleteBin6Line } from "react-icons/ri";

function TodoItem({ name, duedate, id, onClickDelete }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">{name}</div>
        <div className="col-sm-4">{duedate}</div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger btn-delete"
            onClick={() => onClickDelete(id)}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
