import { context } from "./App.js";
import { useContext } from "react";

function Product() {
  let data = useContext(context);
  return (
    <>
      <h1>This is Product component</h1>
      <h2>Name: {data.name}</h2>
      <h2>Price: {data.price}</h2>
    </>
  );
}

export default Product;
