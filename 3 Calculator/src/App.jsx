import BtnContainer from "./Components/BtnContainer";
import Display from "./Components/Display";
import DisplayContextProvider from "./Storage/DisplayContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <DisplayContextProvider>
      <div id="calculator">
        <h1>CALCULATOR</h1>
        <Display />
        <BtnContainer />
      </div>
    </DisplayContextProvider>
  );
}

export default App;
