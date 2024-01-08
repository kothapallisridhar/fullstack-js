import Alert from "./components/Alert";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
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
      <ExpandableText maxChars={30}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
        necessitatibus veniam perferendis soluta libero enim nostrum nam? Quis,
        temporibus labore, libero error fugit itaque deleniti inventore
        exercitationem vitae tempore at quas dolores voluptatum totam voluptatem
        laudantium, excepturi incidunt nam dignissimos magnam! Dolor modi ab
        animi, accusantium quia soluta repudiandae libero consequatur atque
        autem fuga, eos aspernatur possimus? Rem debitis, autem tenetur veniam
        reiciendis repudiandae voluptate mollitia? Dicta, laudantium. Itaque at
        voluptatem quod fugit laudantium, architecto vel ex quam eius alias ab
        quis voluptatum aspernatur adipisci neque unde ea! Tempore doloremque
        eligendi libero nihil pariatur aliquam doloribus. Nesciunt ab
        accusantium nihil?
      </ExpandableText>
    </div>
  );
}

export default App;
