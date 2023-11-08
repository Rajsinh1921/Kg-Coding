import style from "./Btn.module.css";

function Btn({ item }) {
  return (
    <button className={style.btn} id={item}>
      {item}
    </button>
  );
}

export default Btn;
