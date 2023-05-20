"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-2">
      <p className="mb-5">Count: {count}</p>
      <button onClick={incrementCount} className="bg-blue-500 rounded p-2">
        Increase Count
      </button>
    </div>
  );
}
