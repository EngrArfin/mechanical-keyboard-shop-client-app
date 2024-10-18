import {
  Avatar,
  Layout,
  Menu,
  Dropdown,
  Typography,
  Button,
  MenuProps,
} from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { logOut } from "../../redux/features/authSlice";
import { useState } from "react";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const UserLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const products = useAppSelector((store) => store.cart.products);
  const user = useAppSelector((store) => store.auth.user);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
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
        { key: "User", label: <NavLink to="/user/profile">Profile</NavLink> }, // Linking directly to user profile
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
      {/* Main Header */}
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

      <Layout>
        {/* Sidebar for Profile Navigation */}
        <Sider
          style={{
            position: "fixed",
            height: "100vh",
            top: 64, // Adjust for main header
            zIndex: 1,
          }}
        >
          <div style={{ padding: "20px", textAlign: "center" }}>
            <Avatar size={80} icon={<UserOutlined />} />
            <Title level={4} style={{ color: "white", marginTop: "10px" }}>
              {user?.name || "User"}
            </Title>
            <p style={{ color: "white" }}>
              {user?.email || "user@example.com"}
            </p>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["Profile"]}
            items={[
              {
                key: "Dahboard",
                label: (
                  <NavLink to="/user/dashboard">
                    <UserOutlined /> Dashboard
                  </NavLink>
                ),
              },
              {
                key: "Profile",
                label: (
                  <NavLink to="/user/profile">
                    <UserOutlined /> Profile
                  </NavLink>
                ),
              },

              {
                key: "User Info",
                label: (
                  <NavLink to="/user/info">
                    <UserOutlined /> User Info
                  </NavLink>
                ),
              },
              {
                key: "Address",
                label: (
                  <NavLink to="/user/address">
                    <UserOutlined /> Address
                  </NavLink>
                ),
              },
              {
                key: "Order HIstory",
                label: (
                  <NavLink to="/user/history">
                    <UserOutlined /> Order HIstory
                  </NavLink>
                ),
              },
              {
                key: "Settings",
                label: (
                  <NavLink to="/user/settings">
                    <UserOutlined /> Settings
                  </NavLink>
                ),
              },
              /* {
                key: "Logout",
                label: (
                  <NavLink to="#" onClick={handleLogout}>
                    <UserOutlined /> LogOut
                  </NavLink>
                ),
              }, */
            ]}
          />
        </Sider>

        <Layout style={{ marginLeft: 200, paddingTop: 64 }}>
          {/* Main Content */}
          <Content style={{ margin: "64px 16px 0" }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <Outlet /> {/* Nested content will be rendered here */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default UserLayout;

/* 


import { Avatar, Layout, Menu, Dropdown, Typography, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { initializeAuth, logOut } from "../../redux/features/authSlice";
import {
  AppstoreOutlined,
  HistoryOutlined,
  InfoCircleOutlined,
  InfoOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

const UserLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userName = user?.name || "User";
  const userEmail = user?.email || "user@example.com";

  // Initialize authentication state on app load
  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  // Log out user
  const logOutUser = () => {
    dispatch(logOut());
  };

  const menu = (
    <Menu>
      <Menu.Item key="Dashboard" icon={<AppstoreOutlined />}>
        <NavLink to="/user/dashboard">User Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item key="Profile" icon={<UserOutlined />}>
        <NavLink to="/user/profile">User Profile</NavLink>
      </Menu.Item>
      <Menu.Item key="AccountInfo" icon={<InfoCircleOutlined />}>
        <NavLink to="/user/info">Account Information</NavLink>
      </Menu.Item>
      <Menu.Item key="UserAddress" icon={<InfoOutlined />}>
        <NavLink to="/user/address">User Address</NavLink>
      </Menu.Item>
      <Menu.Item key="OrderHistory" icon={<HistoryOutlined />}>
        <NavLink to="/user/history">Order History</NavLink>
      </Menu.Item>
      <Menu.Item key="Logout" icon={<LogoutOutlined />}>
        <Button type="text" onClick={logOutUser} style={{ width: "100%" }}>
          Log Out
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={3} style={{ color: "white", margin: 0 }}>
          User Dashboard
        </Title>
        <Dropdown overlay={menu} trigger={["click"]}>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Avatar size={40} icon={<UserOutlined />} />
            <div style={{ marginLeft: 10, color: "white", textAlign: "left" }}>
              <Title level={5} style={{ margin: 0, color: "white" }}>
                {userName}
              </Title>
              <p style={{ margin: 0, color: "white" }}>{userEmail}</p>
            </div>
          </div>
        </Dropdown>
      </Header>
      <Content style={{ margin: "24px 16px", padding: 24, minHeight: 360 }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default UserLayout;

 */
