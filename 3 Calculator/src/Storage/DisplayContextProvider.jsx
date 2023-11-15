import react, { useState } from "react";
import DisplayContext from "./DisplayContext";

function DisplayContextProvider({ children }) {
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
    <DisplayContext.Provider value={{ calculator, onBtn }}>
      {children}
    </DisplayContext.Provider>
  );
}

export default DisplayContextProvider;
