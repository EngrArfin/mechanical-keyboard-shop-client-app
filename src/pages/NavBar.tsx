import { ShoppingCartOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import logo from "../../src/assets/icons/logo.jpg";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    key: "Home",
    label: <NavLink to="/home">Home</NavLink>,
  },
  {
    key: "Products",
    label: <NavLink to="/product">Products</NavLink>,
  },
  {
    key: "About",
    label: <NavLink to="/about">About</NavLink>,
  },
  {
    key: "Contract",
    label: <NavLink to="/contract">Contract</NavLink>,
  },
  {
    key: "5",
    label: "Product Management",
    children: [
      {
        key: "11",
        label: "Add Product",
      },
      {
        key: "12",
        label: "List Product",
      },
    ],
  },
  {
    key: "6",
    label: "Dashboard",
    children: [
      {
        key: "Admin",
        label: <NavLink to="/admin">Admin</NavLink>,
      },
      {
        key: "User",
        label: <NavLink to="/user">User</NavLink>,
      },
    ],
  },
  {
    key: "Login",
    label: <NavLink to="/login">Login</NavLink>,
  },
];

const NavBar = () => {
  /*   const { totalQuantity } = useSelector((state: RootState) => state.products);
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Access the cart data from Redux store
  const cartItems = useSelector((state: RootState) => state.carts.items);

  // Calculate the total quantity of items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Layout
        style={{
          borderRadius: "8px",
          background:
            "linear-gradient(90deg, #2e004f, #00bfae, #2e004f, #00bfae)",
          color: "#ffffff",
          boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
        }}
      >
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              color: "white",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img style={{ height: 10, width: 10 }} src={logo} alt="" />

              <div>
                <h1 style={{ height: "100" }}>Mechanical Keyboard</h1>
              </div>
              <div
                style={{ color: "white", fontSize: 32, position: "relative" }}
              >
                <NavLink to="/cart" onClick={handleMenuToggle}>
                  <ShoppingCartOutlined />
                </NavLink>
                {/*  {cartItems.length > 0 && (
                    <div
                      style={{
                        marginTop: 20,
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 0",
                      }}
                    >
                      <div style={{ color: "white" }}>{totalQuantity}</div>
                    </div>
                  )} */}

                {cartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-10px",
                      left: "20px",
                      backgroundColor: "#ff4d4f",
                      borderRadius: "50%",
                      color: "white",
                      padding: "0 6px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
      </Layout>
    </div>
  );
};

export default NavBar;
