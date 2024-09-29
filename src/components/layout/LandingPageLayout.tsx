import { ShoppingCartOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import HeaderPage from "../../pages/ProjectPage/HeaderPage";
import ServiceAdvertisement from "../../pages/ProjectPage/ServiceAdvertisement";
import CustomerReviews from "../../pages/ProjectPage/CustomerReviews";
import TopFeaturedBrands from "../../pages/ProjectPage/TopFeaturedBrands";
import WhyKeyboard from "../../pages/ProjectPage/WhyKeyboard";
import Footers from "../../pages/ProjectPage/Footers";
import { NavLink } from "react-router-dom";
import CartProjectData from "../../pages/ProjectPage/CartProjectData";
import CartPage from "../../pages/ProjectPage/CartPage";

const { Header, Content, Footer } = Layout;

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
                <NavLink to="/cart">
                  <ShoppingCartOutlined />
                </NavLink>
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
          <div
            style={{
              minHeight: 280,
              padding: 24,
            }}
          >
            <HeaderPage></HeaderPage>
            <CartPage></CartPage>
            <ServiceAdvertisement></ServiceAdvertisement>
            <CartProjectData></CartProjectData>
            <WhyKeyboard></WhyKeyboard>
            <TopFeaturedBrands></TopFeaturedBrands>
            <CustomerReviews></CustomerReviews>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            background: "linear-gradient(45deg, #2e004f, #00bfae, #2e004f)",
            color: "#ffffff",
            boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
          }}
        >
          <Footers></Footers>
        </Footer>
      </Layout>
    </div>
  );
};

export default LandingPageLayout;
