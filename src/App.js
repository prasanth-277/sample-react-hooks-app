import React from "react";
import "./App.css";

import HookCounter from "./Components/HookCounter";
import HookCounterObject from "./Components/HookCounterObject";

function App() {
  return (
    <div className="App">
      <HookCounter />
      <HookCounterObject />
    </div>
  );
}

export default App;
