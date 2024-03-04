import "./App.css";
import { useGetApiData } from "./utils";

export function App(props) {
  let product = useGetApiData("https://fakestoreapi.com/products/1");
  return (
    <>
      <h3>{Object.keys(product)}</h3>
      <h3>{product.title}</h3>
      <h3>{product.price}</h3>
    </>
  );
}
