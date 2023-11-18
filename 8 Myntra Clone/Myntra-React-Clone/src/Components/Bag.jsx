import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Bag() {
  return (
    <>
      <Header />
      <main>
        <div class="bag-page">
          <div class="bag-items-container"></div>
          <div class="bag-summary"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Bag;
