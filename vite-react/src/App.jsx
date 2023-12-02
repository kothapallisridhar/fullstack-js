import { useState } from "react";
import "./App.css";

function App() {
  const [entry, setEntry] = useState("");
  const [todos, setTodos] = useState([]);

  function handleFormSubmit(e) {
    e.preventDefault();
    setTodos([...todos, entry]);
    setEntry("");
  }
  function handleInputEntry(e) {
    setEntry(e.target.value);
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="todo">ToDo: </label>
        <input
          id="todo"
          name="todo"
          value={entry}
          onChange={handleInputEntry}
          placeholder="Enter a ToDo"
        ></input>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
