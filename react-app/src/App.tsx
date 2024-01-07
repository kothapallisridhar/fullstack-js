import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/button/Button";
import { useState } from "react";

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
  const [alertVisibility, setAlertVisibility] = useState(false);
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
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
