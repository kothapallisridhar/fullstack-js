import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
