import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps, Input } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import logo from "../../src/assets/icons/logo.jpg";

const { Header } = Layout;
const { Search } = Input;

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Access the cart data from Redux store
  const cartItems = useSelector((state: RootState) => state.carts.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Get user authentication status from Redux store
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const onSearch = (value: string) => {
    console.log("Search term: ", value);
    // Handle search logic here
  };

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
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Logo Section */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: 40, width: 40, marginRight: 10 }}
                src={logo}
                alt="Logo"
              />
              <h1 style={{ color: "white", margin: 0 }}>Mechanical Keyboard</h1>
            </div>

            {/* Cart and Menu Section */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Search Bar Section - only visible if user is logged in */}
              {isAuthenticated ? (
                <div style={{ flex: 1, marginRight: 20 }}>
                  <Search
                    placeholder="Search products..."
                    allowClear
                    enterButton={<SearchOutlined />}
                    onSearch={onSearch}
                  />
                </div>
              ) : null}

              <div
                style={{
                  color: "white",
                  fontSize: 32,
                  position: "relative",
                  marginRight: 20,
                }}
              >
                <NavLink to="/cart" onClick={handleMenuToggle}>
                  <ShoppingCartOutlined />
                </NavLink>

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

              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["Home"]}
                items={items}
                style={{ minWidth: 0 }}
              />
            </div>
          </div>
        </Header>
      </Layout>
    </div>
  );
};

export default NavBar;
