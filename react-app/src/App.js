import "./App.css";
import { createContext } from "react";
import Home from "./Home";
import Product from "./Product";

export const context = createContext();

export function App(props) {
  let isAdmin = "true";
  let p = {
    name: "Canon EOS",
    price: 333300,
  };

  return (
    <>
      <context.Provider value={p}>
        <Home></Home>
        <Product></Product>
      </context.Provider>
    </>
  );
}
