export function User(props) {
  return (
    <div style={{ border: "2px solid gray", width: 300, margin: 20 }}>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Id: {props.id}</h2>
      <h2>Place: {props.place}</h2>
    </div>
  );
}
