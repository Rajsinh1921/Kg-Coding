import style from "./Btn.module.css";

function Btn({ item, handleClick }) {
  return (
    <button className={style.btn} id={item} onClick={handleClick}>
      {item}
    </button>
  );
}

export default Btn;
