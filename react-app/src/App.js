import "./App.css";
import { useState } from "react";
import Search from "./Search";

export function App(props) {
  let [todos, setTodos] = useState(["Task1", "Task2"]);

  function addTask(task) {
    return setTodos([...todos, task]);
  }

  return (
    <>
      <Search add={addTask} />
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}
