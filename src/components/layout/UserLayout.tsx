import {
  AppstoreOutlined,
  HistoryOutlined,
  InfoCircleOutlined,
  InfoOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu, MenuProps } from "antd";
import Title from "antd/es/typography/Title";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

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
    key: "Settings",
    label: (
      <NavLink to="/user/settings">
        <SettingOutlined />
        Settings
      </NavLink>
    ),
  },
  {
    key: "Logout",
    label: (
      <NavLink to="/user/logout">
        <LogoutOutlined />
        Logout
      </NavLink>
    ),
  },
];

const UserLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{ padding: "20px", textAlign: "center" }}>
          <Avatar size={80} icon={<UserOutlined />} />
          <Title level={4} style={{ color: "white", marginTop: "10px" }}>
            Md Samsel Arfin
          </Title>
        </div>

        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        ></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
