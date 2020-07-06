import React from "react";
import "./App.css";

import HookCounter from "./Components/HookCounter";
import HookCounterObject from "./Components/HookCounterObject";
import HookCounterArray from "./Components/HookCounterArray";
import MousePointer from "./Components/MousePointer";
import IntervalClassCounter from "./Components/IntervalClassCounter";
import FetchingData from "./Components/FetchingData";

function App() {
  return (
    <div className="App">
      <HookCounter />
      <HookCounterObject />
      <HookCounterArray />
      <MousePointer />
      <IntervalClassCounter />
      <FetchingData />
    </div>
  );
}

export default App;
