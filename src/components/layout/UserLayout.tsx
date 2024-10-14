import { Avatar, Layout, Menu, MenuProps } from "antd";
import Title from "antd/es/typography/Title";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/features/authSlice";
import {
  AppstoreOutlined,
  HistoryOutlined,
  InfoCircleOutlined,
  InfoOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const UserLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate
  const user = useSelector((state) => state.auth.user);
  const userName = user?.name || "User";
  const userEmail = user?.email || "user@example.com";

  const logOutUser = () => {
    localStorage.removeItem("token");
    dispatch(logOut());
    navigate("/"); // Navigate to the home page ("/") after logout
  };

  const items: MenuProps["items"] = [
    {
      key: "Dashboard",
      label: (
        <NavLink to="/user/dashboard">
          <AppstoreOutlined />
          User Dashboard
        </NavLink>
      ),
    },
    {
      key: "Profile",
      label: (
        <NavLink to="/user/profile">
          <UserOutlined />
          User Profile
        </NavLink>
      ),
    },
    {
      key: "Account Information",
      label: (
        <NavLink to="/user/info">
          <InfoCircleOutlined />
          Account Information
        </NavLink>
      ),
    },
    {
      key: "User Address",
      label: (
        <NavLink to="/user/address">
          <InfoOutlined />
          User Address
        </NavLink>
      ),
    },
    {
      key: "Order History",
      label: (
        <NavLink to="/user/history">
          <HistoryOutlined />
          Order History
        </NavLink>
      ),
    },
    {
      key: "Logout",
      label: (
        <NavLink to="#" onClick={logOutUser}>
          <LogoutOutlined />
          LogOut
        </NavLink>
      ),
    },
  ];

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        style={{
          position: "fixed", // Keep the sidebar fixed
          height: "100vh",
          overflow: "auto",
          zIndex: 1, // Ensure it stays on top
        }}
      >
        <div style={{ padding: "20px", textAlign: "center" }}>
          <Avatar size={80} icon={<UserOutlined />} />
          <Title level={4} style={{ color: "white", marginTop: "10px" }}>
            {userName}
          </Title>
          <p style={{ color: "white" }}>{userEmail}</p>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["Dashboard"]}
          items={items}
          style={{ marginTop: "64px" }} // Adjust to account for fixed header height
        />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        {" "}
        {/* Keep margin for the fixed sidebar */}
        <Header
          style={{ padding: 0, position: "fixed", width: "100%", zIndex: 1 }}
        >
          {/* Optionally, you can add any additional header content here */}
        </Header>
        <Content style={{ margin: "64px 16px 0" }}>
          {" "}
          {/* Adjust content margin */}
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
