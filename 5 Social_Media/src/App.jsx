import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Postlists from "./Components/Postlists";
import Slidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Slidebar />
      <Postlists />
      <Card />
      <Form />
      <Footer />
    </>
  );
}

export default App;
