import React from "react";
import { BrowserRouter} from "react-router-dom";

import "./App.css"
import { NavBar } from "./components/NavBar"
import { Router } from "./router"
import { Footer } from "./components/Footer"
import { DataProvider } from "./components/DataContext";


export const App = () => {
  return (
    <DataProvider>
    <BrowserRouter>
       <NavBar/>
       <Router/>
       <Footer/>
    </BrowserRouter>
    </DataProvider>
  )
}

export default App;