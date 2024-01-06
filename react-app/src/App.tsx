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
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
