import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Berlin",
    "Frankfurt",
    "Munich",
    "Leipzig",
    "Stuttgart",
    "Ingolstadt",
    "Keil",
    "Cologne",
    "Dortmund",
    "Dusseldorf",
    "Hamburg",
    "Augsburg",
  ];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
