"use client";

import { useState } from "react";

export default function () {
  const [count, setCount] = useState(0);
  return (
    <div>
      bye from bad
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Click me ({count})
      </button>
    </div>
  );
}
