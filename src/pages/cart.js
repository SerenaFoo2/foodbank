import React, { useState } from "react";
import ShoppingCart from "../components/ShoppingCart.js";
import ScrollToTop from "../components/ScrollToTop";
import NavBar2 from "../components/navigationBar2/index";

const CartPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <NavBar2 toggle={toggle} />
      <ShoppingCart />
    </>
  );
};

export default CartPage;
