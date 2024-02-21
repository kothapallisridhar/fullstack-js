import "./App.css";
import Product from "./Product";

export function App(props) {
  let prod = {
    id: 100,
    name: "iPhone 15 pro max",
    aprice: 150000,
    dprice: 120000,
  };
  return <Product {...prod} />;
}
