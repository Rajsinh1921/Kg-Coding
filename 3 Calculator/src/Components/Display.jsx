import React from "react";
import { useContext } from "react";
import style from "./Display.module.css";
import DisplayContext from "../Storage/DisplayContext";

function Disply() {
  const { calculator } = useContext(DisplayContext);

  return (
    <input
      className={style.calDisplay}
      type="text"
      value={calculator}
      readOnly
    />
  );
}

export default Disply;
