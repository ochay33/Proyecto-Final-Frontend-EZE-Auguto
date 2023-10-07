import React, { useContext } from "react";
import { CartContext } from "../../context/ShoppingCartContext";
import "../../css/home.css";

export const Item = ({ name, price, id, imagen }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currentItems) => {
      const isItemFound = currentItems.find((item) => item.id === id);

      if (isItemFound) {
        return currentItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currentItems, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = () => {
    setCart((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const itemQuantity = cart.find((item) => item.id === id)?.quantity || 0;

  return (
    <div>
      <div className="item">
        {itemQuantity > 0 && <div className="item-quantity">{itemQuantity}</div>}
        <figure>
          <img src={imagen} width={400} height={400} alt={name} />
        </figure>
        <div className="info-product">
          <div>{name}</div>
          <div className="item-price">${price}</div>

          {itemQuantity === 0 ? (
            <button onClick={addToCart}>+ Add to cart</button>
          ) : (
            <>
              <button onClick={addToCart}>+ Add more</button>
              <button onClick={removeItem}>- Subtract item</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};