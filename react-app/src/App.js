import "./App.css";
import { User } from "./User";

export function App(props) {
  console.dir(props);
  let users = [
    { name: "Sri", age: 22, id: 22, place: "Bangalore" },
    { name: "Saisuhas", age: 14, id: 14, place: "Berlin" },
    { name: "Suhas", age: 12, id: 12, place: "Frankfurt" },
    { name: "Chinnu", age: 6, id: 6, place: "Stuttgart" },
  ];
  return (
    <>
      <h1 className="primary" id="heading">
        This is Heading
      </h1>
      <p>This is Paragraph</p>
      <h2>User details</h2>
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          id={user.id}
          age={user.age}
          place={user.place}
        />
      ))}
      <User name="Sridhar" age={35} id={22} place="Frankfurt" />
      <div style={{ display: "flex", gap: 10 }}>{props.children}</div>
    </>
  );
}
