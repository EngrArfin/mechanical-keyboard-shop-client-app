import {
  Avatar,
  Layout,
  Menu,
  Dropdown,
  Typography,
  Button,
  MenuProps,
} from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import HeaderPage from "../../pages/ProjectPage/HeaderPage";
import ServiceAdvertisement from "../../pages/ProjectPage/ServiceAdvertisement";
import CustomerReviews from "../../pages/ProjectPage/CustomerReviews";
import TopFeaturedBrands from "../../pages/ProjectPage/TopFeaturedBrands";
import WhyKeyboard from "../../pages/ProjectPage/WhyKeyboard";
import Footers from "../../pages/ProjectPage/Footers";
import AllProductData from "../../pages/AllProduct/AllProductData";
import CartProjectData from "../../pages/ProjectPage/CartProjectData";
import FitureItem from "../../pages/ProjectPage/FitureItem";
import Products from "../../pages/Carts/Products";
import { logOut } from "../../redux/features/authSlice";
import { useState } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

const LandingPageLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const products = useAppSelector((store) => store.cart.products);
  const user = useAppSelector((store) => store.auth.user);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  const menuItems: MenuProps["items"] = [
    { key: "Home", label: <NavLink to="/home">Home</NavLink> },
    { key: "AllProducts", label: <NavLink to="/allproduct">Products</NavLink> },
    { key: "About", label: <NavLink to="/about">About</NavLink> },
    { key: "Contract", label: <NavLink to="/contract">Contact</NavLink> },
    {
      key: "Dashboard",
      label: "Dashboard",
      children: [
        { key: "Admin", label: <NavLink to="/admin">Admin</NavLink> },
        { key: "User", label: <NavLink to="/user">User</NavLink> },
      ],
    },
  ];

  const userMenu = (
    <Menu>
      <Menu.Item key="Profile">
        <NavLink to="/user/profile">Profile</NavLink>
      </Menu.Item>
      <Menu.Item key="Settings">
        <NavLink to="/user/settings">Settings</NavLink>
      </Menu.Item>
      <Menu.Item key="Logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout
      style={{
        borderRadius: "8px",
        background:
          "linear-gradient(90deg, #2e004f, #00bfae, #2e004f, #00bfae)",
        color: "#ffffff",
        boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
      }}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Title level={3} style={{ color: "white", margin: 0 }}>
          Mechanical Keyboard
        </Title>

        {/* Navbar */}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["Home"]}
          items={menuItems}
          style={{ flex: 1 }}
        />

        {/* Cart and User Menu */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <NavLink to="/cart">
            <ShoppingCartOutlined style={{ fontSize: 32, color: "white" }} />
            <span className="badge text-black-400">{products.length}</span>
          </NavLink>

          {user ? (
            <Dropdown
              overlay={userMenu}
              trigger={["click"]}
              onVisibleChange={(visible) => setMenuVisible(visible)}
              visible={menuVisible}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  marginLeft: 20,
                }}
              >
                <Avatar size={40} icon={<UserOutlined />} />
                <div style={{ marginLeft: 10, color: "white" }}>
                  <Title level={5} style={{ margin: 0, color: "white" }}>
                    {user.name || "User"}
                  </Title>
                  {/* <p style={{ margin: 0 }}>
                    {user.email || "user@example.com"}
                  </p> */}
                </div>
              </div>
            </Dropdown>
          ) : (
            <Button
              type="primary"
              style={{ marginLeft: 20 }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </div>
      </Header>

      <Content style={{ padding: "0 48px", marginTop: "64px" }}>
        <div style={{ minHeight: 280, padding: 24 }}>
          <HeaderPage />

          <Products />
          <CartProjectData />
          <AllProductData />
          <ServiceAdvertisement />
          <FitureItem />
          <WhyKeyboard />
          <TopFeaturedBrands />
          <CustomerReviews />
          <Footers />
        </div>
      </Content>
    </Layout>
  );
};

export default LandingPageLayout;
