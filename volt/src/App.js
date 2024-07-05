import React, { useEffect } from "react";
import { ToDo } from "./ToDo";
import axios from "axios";

function App() {
  let api = axios.create({
    baseURL: "https://fakestoreapi.com",
  });
  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    let res = await api.get("/products");
    console.log(res.data);
  }
  return (
    <>
      <ToDo />
    </>
  );
}

export default App;
