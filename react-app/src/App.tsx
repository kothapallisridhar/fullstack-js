import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

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
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    // <Alert>
    //   Hello <span>World</span>
    // </Alert>
    <div>
      <Button color="primary" onClick={() => console.log("Clicked!")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
