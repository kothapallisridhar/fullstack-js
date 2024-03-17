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
    const res = await api.put("/products/17", {
      id: 16,
      title: "Sony TV",
      price: 640,
      description: "Sony OLED TV",
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
