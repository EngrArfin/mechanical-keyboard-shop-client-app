import { ShoppingCartOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, MenuProps } from "antd";
import HeaderPage from "../../pages/ProjectPage/HeaderPage";
import CardProject from "../../pages/ProjectPage/CardProject";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ProductDetails from "../../pages/ProjectPage/ProductDetails";
import ServiceAdvertisement from "../../pages/ProjectPage/ServiceAdvertisement";
import TopFeaturedBrands from "../../pages/ProjectPage/TopFeaturedBrands";
import CustomerReviews from "../../pages/ProjectPage/CustomerReviews";
import WhyKeyboard from "../../pages/ProjectPage/WhyKeyboard";

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Home",
  },
  {
    key: "2",
    label: "Products",
  },
  {
    key: "3",
    label: "About Us",
  },
  {
    key: "4",
    label: "Contact Us",
  },
  {
    key: "5",
    label: "Product Management",
  },
  {
    key: "6",
    label: "Dashboard.",
  },
];

const LandingPageLayout = () => {
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
              <div>
                <h1 style={{ height: "100" }}>Mechanical Keyboard </h1>
              </div>
              <div style={{ color: "white", fontSize: 32 }}>
                <ShoppingCartOutlined />
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

        <Content style={{ padding: "0 48px" }}>
          <Breadcrumb
            style={{
              margin: "16px 0",
              justifyContent: "end",
              alignItems: "end",
              color: "white",
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
            <ServiceAdvertisement></ServiceAdvertisement>
            <CardProject></CardProject>
            <WhyKeyboard></WhyKeyboard>
            <TopFeaturedBrands></TopFeaturedBrands>
            <CustomerReviews></CustomerReviews>
            <hr /> <hr /> <hr /> <hr />
            <ProductDetails></ProductDetails>
            <Login></Login>
            <Register></Register>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Mechanical Keyboard
          Shop
        </Footer>
      </Layout>
    </div>
  );
};

export default LandingPageLayout;
