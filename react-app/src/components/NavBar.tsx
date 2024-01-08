import React from "react";

interface Props {
  cartItemsCount: number;
}
const NavBar = ({ cartItemsCount }: Props) => {
  return <div>Cart Items: {cartItemsCount}</div>;
};

export default NavBar;
