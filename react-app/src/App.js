import "./App.css";

export function App(props) {
  return (
    <div className="Wrapper">
      <h2>Background color changer</h2>
      <input
        type="color"
        onChange={(e) => {
          document.body.style.background = e.target.value;
        }}
      />
    </div>
  );
}
