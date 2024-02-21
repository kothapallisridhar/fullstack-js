import { useState } from "react";
import "./App.css";

export function App(props) {
  let [count, setCount] = useState(0);
  return (
    <div className="Wrapper">
      <button
        className="minus"
        disabled={count === 0}
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <p>{count}</p>
      <button
        className="plus"
        disabled={count === 10}
        onClick={() => {
          if (count < 10) {
            setCount(count + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
}
