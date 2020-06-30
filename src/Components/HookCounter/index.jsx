import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <h2>Count {count}</h2>
      <button onClick={() => setCount(count - 1)}>DEC</button>
    </div>
  );
}

export default HookCounter;
