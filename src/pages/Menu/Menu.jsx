import React from "react";

import { data } from "../../components/ProductList/data/data";
import "../../css/carrito.css";

export const Menu = () => {

  return (
    <>
    <div>
      <h1 className="title">Menu</h1>
      <div className="container-items">
        {data.map((product) => (
          <div className="item" key={product.id}>
            <figure>
              <img src={product.img} alt={product.name} />
            </figure>
            <div className="info-product">
              <h2>{product.name}</h2>
              <p className="price">${product.price}</p>
              <button onClick={() => onAddProduct(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
