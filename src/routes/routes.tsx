import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserLayout from "../components/layout/UserLayout";
import ProductList from "../pages/AdminPage/ListProduct";
import UserDashboard from "../pages/UserPage/UserDashboard";
import LandingPageLayout from "../components/layout/LandingPageLayout";
import AdminLayout from "../components/layout/AdminLayout";
import About from "../pages/About";
import Contract from "../pages/Contract";
import CartPage from "../pages/CartsProduct/CartPage";
import AdminDashboard from "../pages/AdminPage/AdminDashboard";
import UserProfile from "../pages/UserPage/UserProfile";
import UserAddress from "../pages/UserPage/UserAddress";
import OrderHistory from "../pages/UserPage/OrderHistory";
import AccountInformation from "../pages/UserPage/AccountInformation";
import ProductManagemen from "../pages/AdminPage/ProductManagemen";
import AddProductAdmin from "../pages/AdminPage/AddProductAdmin";
import ListProduct from "../pages/AdminPage/ListProduct";
import ProductDetails from "../pages/CartsProduct/ProductDetails";
import CartProjectData from "../pages/ProjectPage/CartProjectData";

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
    element: <CartProjectData></CartProjectData>,
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
  {
    path: "/product-details",
    element: <ProductDetails></ProductDetails>,
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
        path: "listproduct-admin",
        element: <ListProduct></ListProduct>,
      },
      {
        path: "addproduct-admin",
        element: <AddProductAdmin></AddProductAdmin>,
      },
      {
        path: "management",
        element: <ProductManagemen></ProductManagemen>,
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
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "address",
        element: <UserAddress></UserAddress>,
      },
      {
        path: "info",
        element: <AccountInformation></AccountInformation>,
      },
      {
        path: "history",
        element: <OrderHistory></OrderHistory>,
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
