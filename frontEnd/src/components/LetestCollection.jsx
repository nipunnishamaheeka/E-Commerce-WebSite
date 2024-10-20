import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function LetestCollection() {
  const { products } = useContext(ShopContext);

  console.log(products);
  return <div></div>;
}

export default LetestCollection;
