import "./App.css";

function App() {
  return (
    <div className="container mt-5 w-50">
      <h2 className="text-center">ToDo App</h2>
      <div className="input-group">
        <input type="text" className="form-control" />
        <button className="btn btn-primary">Add</button>
      </div>
      <ul className="list-group mt-5">
        <li className="list-group-item">
          <p>Learn React</p>
          <button className="btn">❌</button>
        </li>
        <li className="list-group-item">
          <p>Learn Java</p>
          <button className="btn">❌</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
