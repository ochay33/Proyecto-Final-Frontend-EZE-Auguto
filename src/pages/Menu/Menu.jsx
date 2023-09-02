import React, { useState, useEffect } from "react";
import "../../css/menu.css";

export function Menu() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Cargar productos desde el archivo JSON
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos", error));
  }, []);

  return (
    <>
      <h1 className="title">Menú</h1>
      <div className="container-items">
        {productos.map((producto) => (
          <div className="item" key={producto.id}>
            <figure>
              <img src={producto.imagen} alt={producto.name}></img>
            </figure>
            <div className="info-product">
              <h2>{producto.name}</h2>
              <p className="price">${producto.price}</p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
