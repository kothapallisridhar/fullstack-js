import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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
      <TodoForm
        entry={entry}
        onInputEntry={handleInputEntry}
        onFormSubmit={handleFormSubmit}
      />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
