import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
}
const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart Items</div>
      {cartItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
