import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import UserLayout from "../components/layout/UserLayout";
import ProductList from "../pages/AdminPage/ListProduct";
import UserDashboard from "../pages/UserPage/UserDashboard";
import LandingPageLayout from "../components/layout/LandingPageLayout";
import AdminLayout from "../components/layout/AdminLayout";
import About from "../pages/Share/About";
import Contract from "../pages/Share/Contract";
import AdminDashboard from "../pages/AdminPage/AdminDashboard";
import UserProfile from "../pages/UserPage/UserProfile";
import UserAddress from "../pages/UserPage/UserAddress";
import OrderHistory from "../pages/UserPage/OrderHistory";
import AccountInformation from "../pages/UserPage/AccountInformation";
import ProductManagemen from "../pages/AdminPage/ProductManagemen";
import AddProductAdmin from "../pages/AdminPage/AddProductAdmin";
import ListProduct from "../pages/AdminPage/ListProduct";
import Login from "../pages/Share/Login";
import Register from "../pages/Share/Register";
import UserList from "../pages/AdminPage/UserList";
import Report from "../pages/AdminPage/Report";
import AllProductData from "../pages/AllProduct/AllProductData";
import Cart from "../pages/Carts/Cart";
/* import CheckoutForm from "../pages/UserPage/Payment/CheckoutForm";
 */ import Payment from "../pages/UserPage/Payment/Payment";

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
    path: "/allproduct",
    element: <AllProductData></AllProductData>,
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
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/cart",
    element: <Cart />,
  },

  /* Admin Dashboard */
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "productlist",
        element: <ProductList></ProductList>,
      },
      {
        path: "users",
        element: <UserList></UserList>,
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
        path: "report",
        element: <Report></Report>,
      },
    ],
  },
  /* User Dashboard */
  {
    path: "/user",
    element: <UserLayout></UserLayout> /* </ProtectedRoute> */,
    children: [
      {
        path: "dashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "checkout",
        element: <Payment></Payment>,
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
]);

export default router;
