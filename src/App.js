import React from "react";
import "./App.css";

import HookCounter from "./Components/HookCounter";
import HookCounterObject from "./Components/HookCounterObject";
import HookCounterArray from "./Components/HookCounterArray";

function App() {
  return (
    <div className="App">
      <HookCounter />
      <HookCounterObject />
      <HookCounterArray />
    </div>
  );
}

export default App;
