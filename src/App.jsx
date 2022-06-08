import React from "react";
import "./App.css";
import Launches from "./components/Launches/Launches";

function App() {
  return (
    <div className="App">
      <h1>SpaceX Launches</h1>
      <Launches />
    </div>
  );
}

export default App;
