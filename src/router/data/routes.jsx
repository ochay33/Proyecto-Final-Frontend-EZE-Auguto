import { Home } from "../../pages/Home";
import { IsLogged } from "../../components/IsLogged/IsLogged";
import { IsAdmin } from "../../components/IsAdmin/IsAdmin";
import { IsNotLogged } from "../../components/IsNotLogged/IsNotLogged";
import { Contact } from "../../pages/Contact"
import { Error404 } from "../../pages/Error404";
import { About } from "../../pages/About";
import { Administrator } from "../../pages/Administrator";
import { Menu } from "../../pages/Menu";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import { Carrito } from "../../components/Carrito/Carrito/Carrito"
import { Users } from "../../pages/Users/Users";
import { Orders } from "../../pages/Orders";

export const routes = [
  {
    path: "/",
    element: (
      <IsLogged>
        <Home />
      </IsLogged>
    ),
  },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  {
    path: "/Login",
    element: (
      <IsLogged>
        <Login />
      </IsLogged>
    ),
  },
  { 
		path : "/Carrito" , 
		element: (
			<IsNotLogged>
		        <Carrito /> 
		  </IsNotLogged>
		),
	},
  {
    path: "/Menu",
    element: (
      <IsNotLogged>
      <Menu /> 
      </IsNotLogged>
    ),
  },
  {
    path: "/Register",
    element: (
      <IsLogged>
        <Register />
      </IsLogged>
    ),
  },
  { path: "*", element: <Error404 /> },
  {
		path:"/Users" ,
		element : (
			<IsAdmin>
				<Users />
			</IsAdmin>
		),
	},
  { 
		path : "/Orders", 
		element: (
		    <IsAdmin>
		        <Orders />
		    </IsAdmin>
		),
	},
  {
    path: "/administrator",
    element: (
      <IsAdmin>
        <Administrator />
      </IsAdmin>
    ),
  },
];
