import { useState } from "react";
import { ToDoList } from "./ToDoList";

export function ToDo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <input onChange={(event) => setTodo(event.target.value)} />
      <button onClick={() => setTodos([...todos, todo])}>Todo</button>
      <ToDoList todos={todos} />
    </div>
  );
}
