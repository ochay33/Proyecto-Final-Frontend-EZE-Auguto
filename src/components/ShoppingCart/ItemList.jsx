import React from "react";
import storeItems from "../../data/products.json";
import { Item } from "./Item";
import "../../css/home.css"

export const ItemList = () => {
  return (
    <>
    <h1 className="title"> Menu </h1>
    <h3 className="title2">To make your purchase, continue to the bottom</h3>
    <div className="container-items">
      {storeItems.map((product, idx) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
    </>
  );
};
