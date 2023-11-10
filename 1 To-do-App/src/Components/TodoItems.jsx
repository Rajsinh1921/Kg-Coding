import TodoItem from "./TodoItem";

function TodoItems({ todoItem, onClickDelete }) {
  return (
    <>
      {todoItem.map((item, index) => (
        <TodoItem
          key={index}
          id={item.id}
          name={item.name}
          duedate={item.duedate}
          onClickDelete={onClickDelete}
        />
      ))}
    </>
  );
}
export default TodoItems;
