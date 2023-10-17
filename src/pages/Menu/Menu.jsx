import React from "react";
import { ItemList } from "../../components/ShoppingCart/ItemList";
import { DataProvider } from "../../components/DataContext";
import "../../css/menu.css";

export function Menu() {
  return (
    <DataProvider>
      <ItemList />
    </DataProvider>
  );
}
