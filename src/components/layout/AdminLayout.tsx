import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import {
  AppstoreAddOutlined,
  BarChartOutlined,
  DashboardOutlined,
  EditOutlined,
  ProductOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: (
      <NavLink to="/admin/dashboard">{<DashboardOutlined />}Dashboard</NavLink>
    ),
  },
  {
    key: "Products",
    label: (
      <NavLink to="/admin/products">{<ProductOutlined />} Products</NavLink>
    ),
  },
  {
    key: "Users",
    label: <NavLink to="/admin/users">{<UserOutlined />}Users</NavLink>,
  },
  {
    key: "Add Product",
    label: (
      <NavLink to="/admin/add-product">
        {<AppstoreAddOutlined />}Add Product
      </NavLink>
    ),
  },
  {
    key: "Product Management",
    label: (
      <NavLink to="/admin/product-management">
        {<EditOutlined />}Product Management
      </NavLink>
    ),
  },
  {
    key: "Users",
    label: <NavLink to="/admin/users">{<BarChartOutlined />}Reports</NavLink>,
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
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <h1 style={{ height: "100" }}>Admin Keyboard </h1>
        </div>
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

export default AdminLayout;
