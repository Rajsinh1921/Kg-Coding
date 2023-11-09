import Heading from "./Components/Heading";
import Container from "./Components/Container";
import ErrorMessage from "./Components/ErrorMessage";
import Input from "./Components/Input";
import FoodItems from "./Components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  let [foods, setfoods] = useState([]);

  let handleOnDown = (event) => {
    if (event.key === "Enter") {
      setfoods([...foods, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <Heading />
        <ErrorMessage items={foods} />
        <Input handleOnDown={handleOnDown} />
        <FoodItems items={foods} />
      </Container>
    </>
  );
}

export default App;
