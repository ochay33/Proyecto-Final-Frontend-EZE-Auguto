import React from "react";
import { BrowserRouter} from "react-router-dom";

import "./App.css"
import { NavBar } from "./components/NavBar"
import { Router } from "./router"
import { Footer } from "./components/Footer"
import { ShoppingCartProvider } from "./context/ShoppingCartContext";


export const App = () => {
  return (
    <ShoppingCartProvider>
     <BrowserRouter>
       <NavBar/>
       <Router/>
       <Footer/>
     </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;