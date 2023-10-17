import { useContext, useState, useEffect  } from "react";
import { DataContext } from "../DataContext/DataContext";
import "../../css/home.css";

export const Item = ({ name, price, id, imagen }) => {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([DataContext]);
  const { addCart } = useContext(DataContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URI}/api/read-menues`)
      .then((response) => response.json())
      .then((loquerecibo) => setMenu(loquerecibo));
  }, []);

  
  const handleAddToCart = () => {
    const itemToAdd = { ...menu};
    addCart(itemToAdd);
    alert("Producto agregado al carrito con éxito!");
  };

  return (
    <div>
      <div className="item">
        <figure>
          <img src={imagen} width={400} height={400} alt={name} />
        </figure>
        <div className="info-product">
          <div>{name}</div>
          <div className="item-price">${price}</div>
            <button onClick={handleAddToCart}>+ Add to cart</button>
       </div>
      </div>
    </div>
  );
};