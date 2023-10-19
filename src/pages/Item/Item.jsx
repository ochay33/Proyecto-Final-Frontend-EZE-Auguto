import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../components/DataContext/DataContext";
import "../../css/menu.css";


export const Item = ({ name, price, id, imagen }) => {
  const [menu, setMenu] = useState([]);
  const { addCart } = useContext(DataContext);
  const [ inputValue3, setInputValue3 ] = useState("");


  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URI}/api/read-menues`)
      .then((response) => response.json())
      .then((loquerecibo) => setMenu(loquerecibo));
  }, []);

  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
  }

  
  const handleAddToCart = () => {
    const itemToAdd = { name, price, id, imagen, cantidad: inputValue3 };
    console.log("Agregando al carrito:", itemToAdd);
    addCart(itemToAdd);
    alert("Product added to cart successfully!");
    setInputValue3("");
  };

  return (
    <div>
      <div className="item">
        <figure>
          <img src={imagen} width={400} height={400} alt={name} />
        </figure>
        <div className="info-product">
          <div>{name}</div>
          <div className="menu-input">
              <h5>Choose Quantity</h5>
              <input
                placeholder="¿what quantity do you want?"
                type="number"
                value={inputValue3}
                min={1}
                onChange={handleInputChange3}
              />
            </div>
          <div className="item-price">${price}</div>
            <button onClick={handleAddToCart}>+ Add to cart</button>
       </div>
      </div>
    </div>
  );
};