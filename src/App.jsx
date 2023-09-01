import React from "react";
import { BrowserRouter} from "react-router-dom";

import "./App.css"
import { NavBar } from "./components/NavBar"
import { Router } from "./router"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Router/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;