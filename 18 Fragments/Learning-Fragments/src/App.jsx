import Heading from "./Components/Heading";
import Container from "./Components/Container";
import ErrorMessage from "./Components/ErrorMessage";
import Input from "./Components/Input";
import FoodItems from "./Components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foods = ["dal", "milk", "green-vegies", "fruits", "yogurt", "ghee"];
  return (
    <>
      <Container>
        <Heading />
        <ErrorMessage items={foods} />
        <Input />
        <FoodItems items={foods} />
      </Container>
    </>
  );
}

export default App;
