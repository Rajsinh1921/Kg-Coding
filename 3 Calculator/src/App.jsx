import BtnContainer from "./Components/BtnContainer";
import Display from "./Components/Display";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div id="calculator">
      <Display />
      <BtnContainer />
    </div>
  );
}

export default App;
