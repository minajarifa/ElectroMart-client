import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home/Home";
import Register from "../Page/Register/Register";
import Login from "../Page/Login/Login";
import ProductList from "../Page/ProductList/ProductList";
import PrivateRoute from "../Page/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ProductList",
        element: (
          <PrivateRoute>
            <ProductList/>
          </PrivateRoute>
        ),
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);
