import Heading from "./Components/Heading";
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foods = ["dal", "milk", "green-vegies", "fruits", "yogurt", "ghee"];
  return (
    <>
      <Heading />
      <ErrorMessage items={foods} />
      <FoodItems items={foods} />
    </>
  );
}

export default App;
