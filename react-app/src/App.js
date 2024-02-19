import "./App.css";
import { User } from "./User";

export function App() {
  return (
    <>
      <h1 className="primary" id="heading">
        This is Heading
      </h1>
      <p>This is Paragraph</p>
      <h2>User details</h2>
      <User name="Sridhar" id="S1212" age={35} />
    </>
  );
}
