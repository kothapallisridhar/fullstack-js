import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PropTypes from "prop-types";

function User(props) {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
    </>
  );
}
User.defaultProps = {
  name: "N/A",
  age: "N/A",
};
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

function App() {
  return (
    <>
      <User name="Joy" />
    </>
  );
}

export default App;
