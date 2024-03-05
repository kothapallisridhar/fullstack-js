import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: this.props.data + 10,
      product: "Dummy",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    //return false; // component won't re-render
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getsnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ ...this.state, product: json.title });
      });
  }

  render() {
    console.log("render");
    return (
      <>
        <h1>This is Child Component</h1>
        <h2>props: {this.props.data}</h2>
        <h2>count: {this.state.count}</h2>
        <h2>product name: {this.state.product}</h2>
      </>
    );
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default Child;
