import "./App.css";
import { createContext, useMemo, useState } from "react";
import Home from "./Home";
import Product from "./Product";

export const context = createContext();

export function App(props) {
  const [counter, setCounter] = useState(1);
  let num1 = 25;
  let num2 = 70;
  let sum = useMemo(() => {
    return num1 + num2;
  }, [num1, num2]);

  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Count
      </button>
      <h1>Counter: {counter}</h1>
      <h2>Sum: {sum}</h2>
    </>
  );
}
