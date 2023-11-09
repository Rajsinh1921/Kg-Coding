import style from "./Input.module.css";

function Input({ handleOnDown }) {
  return (
    <input
      className={style.input}
      type="text"
      placeholder="Enter food item here"
      onKeyDown={handleOnDown}
    />
  );
}

export default Input;
