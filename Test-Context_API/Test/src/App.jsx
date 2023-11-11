import React from "react";
import { message, data } from "../Storage/message_Storage";
import { Child } from "./Child";

function App() {
  return (
    <data.Provider value={message}>
      <Child />
    </data.Provider>
  );
}

export { App };
