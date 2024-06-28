import React, { Component } from "react";
import Child from "./Child";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 10,
      show: true,
    };
  }
  static getDerivedStateFrom(props) {}
  render() {
    return (
      <>
        <h1>Parent Component</h1>
        {this.state.show && <Child data={this.state.x} />}
        <button onClick={() => this.setState({ x: this.state.x + 10 })}>
          Click
        </button>
        <button onClick={() => this.setState({ show: false })}>Hide</button>
        <button onClick={() => this.setState({ show: true })}>Show</button>
      </>
    );
  }
}
export default App;
