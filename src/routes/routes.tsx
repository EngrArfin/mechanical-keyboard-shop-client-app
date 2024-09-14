import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserLayout from "../components/layout/UserLayout";
import DashboardAdmin from "../pages/AdminPage/DashboardAdmin";
import ProductAdd from "../pages/AdminPage/ProductAdd";
import ProductList from "../pages/AdminPage/ProductList";
import MainLayout from "../components/layout/MainLayout";
import UserDashboard from "../pages/UserPage/UserDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  /* Admin Dashboard */
  {
    path: "/admin",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "dashboard",
        element: <DashboardAdmin></DashboardAdmin>,
      },
      {
        path: "addproduct",
        element: <ProductAdd></ProductAdd>,
      },
      {
        path: "productlist",
        element: <ProductList></ProductList>,
      },
    ],
  },
  /* User Dashboard */
  {
    path: "/user",
    element: <UserLayout></UserLayout>,
    children: [
      {
        path: "dashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "addproduct",
        element: <ProductAdd></ProductAdd>,
      },
      {
        path: "productlist",
        element: <ProductList></ProductList>,
      },
    ],
  },

  {
    path: "/userdashboard",
    element: <UserLayout></UserLayout>,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
