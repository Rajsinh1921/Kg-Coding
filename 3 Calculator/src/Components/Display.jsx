import style from "./Display.module.css";

function Disply({ displayVal }) {
  return (
    <input
      className={style.calDisplay}
      type="text"
      value={displayVal}
      readOnly
    />
  );
}

export default Disply;
