import { Divider, Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import {
  AppstoreAddOutlined,
  BarChartOutlined,
  DashboardOutlined,
  EditOutlined,
  ProductOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin">{<DashboardOutlined />}Dashboard</NavLink>,
  },
  {
    key: "Products",
    label: (
      <NavLink to="/admin/listproduct-admin">
        {<ProductOutlined />} Products
      </NavLink>
    ),
  },
  {
    key: "Users",
    label: <NavLink to="/admin/users">{<UserOutlined />}Users</NavLink>,
  },
  {
    key: "Add Product",
    label: (
      <NavLink to="/admin/addproduct-admin">
        {<AppstoreAddOutlined />}Add Product
      </NavLink>
    ),
  },
  {
    key: "Product Management",
    label: (
      <NavLink to="/admin/management">
        {<EditOutlined />}Product Management
      </NavLink>
    ),
  },
  {
    key: "Report",
    label: <NavLink to="/admin/report">{<BarChartOutlined />}Reports</NavLink>,
  },
];

const AdminLayout = () => {
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
        style={{ position: "fixed", height: "100vh", overflow: "auto" }} // Keep it fixed
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: 0 }}>Admin Keyboard</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
          style={{ marginTop: "64px" }} // Adjust for the fixed header height
        />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        {" "}
        {/* Maintain margin for fixed sidebar */}
        <Header
          style={{ zIndex: 1, width: "100%", padding: 0, position: "fixed" }}
        >
          {" "}
          {/* Fixed header */}
          <div
            style={{
              padding: "0 24px",
              background: "#001529",
              color: "white",
              height: "64px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1 style={{ margin: 0 }}>Admin Dashboard</h1>
          </div>
        </Header>
        <Content style={{ margin: "64px 16px 0" }}>
          {" "}
          {/* Adjust content margin */}
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Divider style={{ margin: 0 }}>{new Date().getFullYear()}</Divider>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
