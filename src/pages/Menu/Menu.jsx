import React from "react";
import { ItemList } from "../../components/ShoppingCart/ItemList";
import { ShoppingCartProvider } from "../../context/ShoppingCartContext";
import { ShoppingCart } from "../../components/ShoppingCart/ShoppingCart";

import "../../css/menu.css";

export function Menu() {
  return (
    <ShoppingCartProvider>
      <ItemList />
      <ShoppingCart/>
    </ShoppingCartProvider>
  );
}
