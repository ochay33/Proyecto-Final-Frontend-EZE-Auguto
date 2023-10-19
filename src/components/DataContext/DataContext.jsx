import { createContext, useState, useContext} from "react";

export const DataContext = createContext([]);

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [inputValue2, setInputValue2] = useState('');

  const addCart = (product) => {
    
    setCart((prev) => [...prev, { ...product }]);
   
  };
  const clearCart = () => {
    setCart([]);
  };
  

  return (
    <DataContext.Provider value={{ cart, setCart, addCart, inputValue2, setInputValue2, clearCart }}>
      {children}
    </DataContext.Provider>
  );
};
export function useData() {
  return useContext(DataContext);
}