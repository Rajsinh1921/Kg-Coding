import style from "./Input.module.css";

function Input() {
  let textInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      className={style.input}
      type="text"
      placeholder="Enter food item here"
      onChange={textInput}
    />
  );
}

export default Input;
