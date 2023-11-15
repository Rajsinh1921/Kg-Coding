import PostListProvider from "./ContextAPI/post-list-store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Postlists from "./Components/Postlists";
import Slidebar from "./Components/Sidebar";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleSidebarClick = (state) => {
    return setSelectedTab(state);
  };

  return (
    <PostListProvider>
      <div className="mainContainer">
        <Slidebar
          handleSidebarClick={handleSidebarClick}
          selectedTab={selectedTab}
        />
        <div className="righthandContainer">
          <Header />
          {selectedTab === "home" ? <Form /> : <Postlists />}
          <Footer />
        </div>
      </div>
      <Footer />
    </PostListProvider>
  );
}

export default App;
