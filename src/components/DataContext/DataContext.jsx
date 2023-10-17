import { createContext, useState, useContext} from "react";

export const DataContext = createContext([]);

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (producto) => {
    
    setCart((prev) => [...prev, { ...producto }]);
   
  };
  const clearCart = () => {
    setCart([]);
  };
  

  return (
    <DataContext.Provider value={{ cart, setCart, addCart, clearCart }}>
      {children}
    </DataContext.Provider>
  );
};
export function useData() {
  return useContext(DataContext);
}