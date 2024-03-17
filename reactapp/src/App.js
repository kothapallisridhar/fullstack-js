import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";
import axios from "axios";

function App() {
  let api = axios.create({
    baseURL: "https://fakestoreapi.com",
  });
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const res = await api.post("/products", {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transf…ser’s hardware configuration and operating system",
      category: "electronics",
    });
    console.log(res.data);
  }
  return (
    <>
      <h1>Using Axios</h1>
    </>
  );
}

export default App;
