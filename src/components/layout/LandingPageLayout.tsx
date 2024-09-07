import { ShoppingCartOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, MenuProps } from "antd";
import HeaderPage from "../../pages/ProjectPage/HeaderPage";
import CardProduct from "../../pages/ProjectPage/CardProduct";

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Home",
  },
  {
    key: "2",
    label: "Profile",
  },
];

/* const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
})); */

const LandingPageLayout = () => {
  return (
    <div>
      <Layout>
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
            <h1 style={{ height: "100" }}>Mechanical Keyboard </h1>
          </div>
          <div style={{ color: "white" }}>
            <ShoppingCartOutlined />
          </div>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: "0 48px" }}>
          <Breadcrumb
            style={{
              margin: "16px 0",
              justifyContent: "end",
              alignItems: "end",
            }}
          >
            <Breadcrumb.Item>01952487468</Breadcrumb.Item>
            <Breadcrumb.Item>Login</Breadcrumb.Item>
          </Breadcrumb>

          <div
            style={{
              minHeight: 280,
              padding: 24,
            }}
          >
            <HeaderPage></HeaderPage>
            <CardProduct></CardProduct>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default LandingPageLayout;
