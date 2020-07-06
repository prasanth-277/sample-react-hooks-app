import React, { useState, useEffect } from "react";

function HookCounter() {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);

  useEffect(() => {
    document.title = `count value is ${count}`;
  });

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        INC
      </button>
      <h2>Count {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        DEC
      </button>
    </div>
  );
}

export default HookCounter;
