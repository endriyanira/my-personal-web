import React from "react";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./home/Home";

function App() {
  return (
    <div className="App relative">
      <ThemeToggle />
      <Home />
    </div>
  );
}

export default App;
