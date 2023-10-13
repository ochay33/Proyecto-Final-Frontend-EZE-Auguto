import { Home } from "../../pages/Home";
import { IsLogged } from "../../components/IsLogged/IsLogged";
import { IsAdmin } from "../../components/IsAdmin/IsAdmin";
import { IsNotLogged } from "../../components/IsNotLogged/IsNotLogged";
import { Error404 } from "../../pages/Error404";
import { About } from "../../pages/About";
import { Administrator } from "../../pages/Administrator";
import { Menu } from "../../pages/Menu";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";

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
  {
    path: "/Login",
    element: (
      <IsLogged>
        <Login />
      </IsLogged>
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
    path: "/administrator",
    element: (
      <IsAdmin>
        <Administrator />
      </IsAdmin>
    ),
  },
];
