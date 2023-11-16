import PostListProvider from "./ContextAPI/post-list-store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import CreatePosts from "./Components/CreatePosts";
import Header from "./Components/Header";
import Postlists from "./Components/Postlists";
import Slidebar from "./Components/Sidebar";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleSidebarClick = (state) => setSelectedTab(state);

  return (
    <PostListProvider>
      <div className="mainContainer">
        <Slidebar
          handleSidebarClick={handleSidebarClick}
          selectedTab={selectedTab}
        />
        <div className="righthandContainer">
          <Header />
          {selectedTab === "home" ? <Postlists /> : <CreatePosts />}
          <Footer />
        </div>
      </div>
      <Footer />
    </PostListProvider>
  );
}

export default App;
