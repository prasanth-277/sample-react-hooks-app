import React, { useState, useEffect } from "react";

function MousePointer() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    //works as componentDidMount
    document.addEventListener("mousemove", logMousePosition);
    return () => {
      document.addEventListener("mousemove", logMousePosition);
    };
  });

  return <div>{`X => ${x} Y=>${y}`}</div>;
}

export default MousePointer;
