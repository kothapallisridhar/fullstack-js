import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useReducer } from "react";

function counterReducer(state, input) {
  return state + input;
}

function App() {
  const [counter, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="mt-4 d-flex">
      <button
        onClick={() => {
          dispatch(-1);
        }}
        className="btn btn-primary m-2"
      >
        -
      </button>
      <div className="m-3">Count: {counter}</div>
      <button
        onClick={() => {
          dispatch(1);
        }}
        className="btn btn-primary m-2"
      >
        +
      </button>
    </div>
  );
}

export default App;
