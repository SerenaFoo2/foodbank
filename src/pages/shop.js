import React, { useState } from "react";
import Items from "../components/Items";
import ScrollToTop from "../components/ScrollToTop";
import NavBar2 from "../components/navigationBar2/index";

const ShopPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <NavBar2 toggle={toggle} />
      <Items />
    </>
  );
};

export default ShopPage;
