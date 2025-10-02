import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home/Home";
import Register from "../Page/Register/Register";
import Login from "../Page/Login/Login";
import ProductList from "../Page/ProductList/ProductList";
import PrivateRoute from "../Page/PrivateRoute/PrivateRoute";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import AdminDashboard from "./AdminDashboard";
import AdminPage from "../Page/Admin/AdminPage/AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ProductList",
        element: (
          <PrivateRoute>
            <ProductList />
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
  {
    path: "/AdminDashboard",
    element: <AdminDashboard></AdminDashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/AdminDashboard/AdminPage",
        element: (
          <PrivateRoute>
            <AdminPage/>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
