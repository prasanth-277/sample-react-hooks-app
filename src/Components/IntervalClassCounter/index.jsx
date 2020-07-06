import React, { useEffect, useState } from "react";

function IntervalClassCounter() {
  const [count, setCounter] = useState(0);

  const setTick = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const timer = setInterval(setTick, 1000);
    return clearInterval();
  }, []);
  return <h1>{count}</h1>;
}

export default IntervalClassCounter;
