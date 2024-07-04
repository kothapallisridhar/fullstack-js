import { useState } from "react";

export function ToDoList() {
  const [text, setText] = useState("");
  return (
    <>
      <div>{text}</div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
    </>
  );
}
