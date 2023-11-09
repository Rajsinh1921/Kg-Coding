import BtnContainer from "./Components/BtnContainer";
import Display from "./Components/Display";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [calculator, setcalculator] = useState("");

  let onBtn = (item) => {
    if (item === "C") {
      setcalculator("");
    } else if (item === "=") {
      try {
        let result = eval(calculator);
        setcalculator(result);
      } catch (error) {
        setcalculator("Error");
      }
    } else {
      let newVal = calculator + item;
      setcalculator(newVal);
    }
  };

  return (
    <div id="calculator">
      <Display displayVal={calculator} />
      <BtnContainer onBtn={onBtn} />
    </div>
  );
}

export default App;
