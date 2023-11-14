import Btn from "./Btn";
import DisplayContext from "../Storage/DisplayContext";
import style from "./BtnContainer.module.css";
import React from "react";
import { useContext } from "react";

function BtnContainer() {
  const { onBtn } = useContext(DisplayContext);
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
        <Btn key={index} item={item} handleClick={() => onBtn(item)} />
      ))}
    </div>
  );
}
export default BtnContainer;
