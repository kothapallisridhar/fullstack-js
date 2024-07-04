import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

function App() {
  const [counter, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="mt-4 d-flex">
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
        className="btn btn-primary m-2"
      >
        -
      </button>
      <div className="m-3">Count: {counter}</div>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
        className="btn btn-primary m-2"
      >
        +
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
