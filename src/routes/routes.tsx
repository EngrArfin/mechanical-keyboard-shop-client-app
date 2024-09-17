import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserLayout from "../components/layout/UserLayout";
import ProductAdd from "../pages/AdminPage/AddProduct";
import ProductList from "../pages/AdminPage/ListProduct";
import UserDashboard from "../pages/UserPage/UserDashboard";
import LandingPageLayout from "../components/layout/LandingPageLayout";
import CardProject from "../pages/ProjectPage/CardProject";
import AdminLayout from "../components/layout/AdminLayout";
import About from "../pages/About";
import Contract from "../pages/Contract";
import CartPage from "../pages/CartsProduct/CartPage";
import AdminDashboard from "../pages/AdminPage/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/home",
    element: <LandingPageLayout></LandingPageLayout>,
  },
  {
    path: "/product",
    element: <CardProject></CardProject>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contract",
    element: <Contract></Contract>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },

  /* Admin Dashboard */
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>,
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
