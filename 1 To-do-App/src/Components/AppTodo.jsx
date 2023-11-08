function AppTodo() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm-6">
          <input type="text" placeholder="Enter Todo here" />
        </div>
        <div className="col-sm-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-success btn-add">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
