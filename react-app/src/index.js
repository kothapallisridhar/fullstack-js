import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

let root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(h1);
let name = "Sridhar";

function Menu() {
  return <h1>Hello</h1>;
}

class MenuComp extends React.Component {
  render() {
    return (
      <div>
        <h3>This is class component</h3>
      </div>
    );
  }
}
root.render(
  <div>
    <App />
    <Menu />
    <ul>
      <li id="i12">{name} has</li>
      <li className="car">Porsche</li>
      <li className="car">BMW</li>
      <li className="car">Audi</li>
    </ul>
    <MenuComp />
  </div>
);
