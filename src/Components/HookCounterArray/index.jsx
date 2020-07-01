import React, { useState } from "react";

function HookCounterArray() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    setItems([...items, { id: items.length, value: item }]);
    setItem("");
  };

  return (
    <>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}

export default HookCounterArray;
