import React from "react";
import { Item } from "./Item";
import storeData from "../../data/products.json";
import "../../css/home.css"

export const ItemList = () => {
  const menuItems = storeData.menu;

  return (
    <>
      <h1 className="title"> Menu </h1>
      <h3 className="title2">To make your purchase, continue to the bottom</h3>
      <div className="container-items">
        {menuItems.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};
