import { Home } from "../../pages/Home";
import { Error404 } from "../../pages/Error404";
import { Menu } from "../../pages/Menu";
import { About } from "../../pages/About";
import { Carrito } from "../../pages/Carrito";
import { Administrator } from "../../pages/Administrator";

export const routes =  [
     { path:"/carrito", element:<Carrito />},
     { path:"/about", element:<About />},
     { path:"/", element: <Home /> },
     { path:"*", element:<Error404 />},
     { path:"/Menu", element:<Menu />},
     { path:"/administrator", element:<Administrator />}
]