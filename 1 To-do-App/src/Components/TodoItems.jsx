import TodoItem from "./TodoItem";

function TodoItems({ todoItem }) {
  return (
    <>
      {todoItem.map((item, index) => (
        <TodoItem key={index} name={item.name} duedate={item.duedate} />
      ))}
    </>
  );
}
export default TodoItems;
