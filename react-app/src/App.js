import "./App.css";
//import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import { useRef } from "react";

export function App(props) {
  // let prod = {
  //   id: 100,
  //   name: "iPhone 15 pro max",
  //   aprice: 150000,
  //   dprice: 120000,
  // };
  //return <Product {...prod} />;

  let headings = useRef([]);

  function changeh1Style(e) {
    for (let ele of headings.current) {
      ele.classList.remove("primary");
    }
    e.target.classList.add("primary");
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <h1
        ref={(el) => (headings.current[0] = el)}
        onClick={(e) => {
          changeh1Style(e);
        }}
      >
        This is heading1
      </h1>
      <h1
        ref={(el) => (headings.current[1] = el)}
        onClick={(e) => {
          changeh1Style(e);
        }}
      >
        This is heading2
      </h1>
      <h1
        ref={(el) => (headings.current[2] = el)}
        onClick={(e) => {
          changeh1Style(e);
        }}
      >
        This is heading3
      </h1>
      <h1
        ref={(el) => (headings.current[3] = el)}
        onClick={(e) => {
          changeh1Style(e);
        }}
      >
        This is heading4
      </h1>
      <h1
        ref={(el) => (headings.current[4] = el)}
        onClick={(e) => {
          changeh1Style(e);
        }}
      >
        This is heading5
      </h1>
      <h1
        ref={(el) => (headings.current[5] = el)}
        onClick={(e) => {
          changeh1Style(e);
        }}
      >
        This is heading6
      </h1>
    </>
  );
}
