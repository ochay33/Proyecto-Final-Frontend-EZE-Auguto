import React, { useContext } from "react";
import { CartContext } from "../../context/ShoppingCartContext";
import "../../css/home.css"

export const Item = ({ name, price, id, imagen }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div >
      <div className="item">
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}
      <figure>
      <img src={imagen} width={400} height={400}/>
      </figure>
      <div className="info-product">
      <div>{name}</div>
      <div className="item-price">${price}</div>
      
      {quantityPerItem === 0 ? (
        <button onClick={() => addToCart()}>
          + Add to cart
        </button>
      ) : (
        <button onClick={() => addToCart()}>
          + add more
        </button>
      )}

      {quantityPerItem > 0 && (
        <button onClick={() => removeItem(id)}>
          subtract item
        </button>
      )}
      </div>
      </div>
    </div>
  );
};
