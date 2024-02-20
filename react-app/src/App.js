import { useState } from "react";
import "./App.css";

export function App(props) {
  let [prodName, setProdName] = useState("Samsung");
  return (
    <>
      <h2>Product name: {prodName}</h2>
      <h2>Product price: {156000}</h2>

      <input id="pname" />
      <button
        onClick={() => {
          let pname = document.getElementById("pname").value;
          setProdName((prev) => {
            return prev + pname;
          });
        }}
      >
        Update Name
      </button>
    </>
  );
}
