export default function TodoForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <label htmlFor="todo">ToDo: </label>
      <input
        id="todo"
        name="todo"
        value={props.entry}
        onChange={props.onInputEntry}
        placeholder="Enter a ToDo"
      ></input>
    </form>
  );
}
