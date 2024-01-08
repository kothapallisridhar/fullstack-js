import Alert from "./components/Alert";
import Cart from "./components/Cart";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
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
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
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
      {/* {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button> */}
      <Like onClick={() => console.log("Clicked!")} />
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
