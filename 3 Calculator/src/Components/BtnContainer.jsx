import Btn from "./Btn";
import style from "./BtnContainer.module.css";

function BtnContainer() {
  const btnElements = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.BtnContainer}>
      {btnElements.map((item, index) => (
        <Btn key={index} item={item} />
      ))}
    </div>
  );
}
export default BtnContainer;
