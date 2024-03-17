import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const pwd = useRef();

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const emailpattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function handleSubmit() {
    if (email.trim() === "") {
      setError((error) => ({ ...error, email: "Enter email address" }));
    } else if (!emailpattern.test(email)) {
      setError((error) => ({ ...error, email: "Enter valid email address" }));
    } else {
      setError((error) => ({ ...error, email: "" }));
    }

    if (password.trim() === "") {
      setError((error) => ({ ...error, password: "Enter password" }));
    } else if (password.trim().length < 8) {
      setError((error) => ({
        ...error,
        password: "Password is minimum 8 characters",
      }));
    } else {
      setError((error) => ({ ...error, password: "" }));
    }
  }

  return (
    <>
      <div className="border w-25 mt-5 m-auto p-3">
        <h2 className="text-primary text-center">Login Form</h2>
        <div className="mt-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {error.email && <span className="text-danger">{error.email}</span>}
        </div>
        <div className="mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && (
            <span className="text-danger">{error.password}</span>
          )}
        </div>
        <div className="mt-3">
          <button className="btn btn-primary w-100" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
