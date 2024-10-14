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
import FitureItem from "../../pages/ProjectPage/FitureItem";
import ProductList from "../../pages/Cart/ProductList";
import ProductDetails from "../../pages/Cart/ProductDetails";
import AllProductData from "../../pages/AllProduct/AllProductData";

const { Header, Content } = Layout;

const items: MenuProps["items"] = [
  {
    key: "Home",
    label: <NavLink to="/home">Home</NavLink>,
  },
  {
    key: "AllProducts",
    label: <NavLink to="/allproduct">Products</NavLink>,
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
    key: "Dashboard",
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
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            position: "fixed", // Make the header fixed
            width: "100%", // Ensure it takes the full width
            zIndex: 1000, // Keep it above other elements
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
            <div
              style={{
                display: "flex",
                marginLeft: "10",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h1 style={{ height: "100", fontSize: 25 }}>
                  Mechanical Keyboard{" "}
                </h1>
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

          <div className="flex justify-center items-center">
            <h1 style={{ color: "white", fontSize: 32 }}>
              <NavLink to="/cart">
                <ShoppingCartOutlined />
              </NavLink>
            </h1>
            <p className="badge text-black-400 mb-4">1</p>
          </div>
        </Header>

        <Content style={{ padding: "0 48px", marginTop: "64px" }}>
          {" "}
          {/* Add marginTop to avoid overlap with the fixed header */}
          <div
            style={{
              minHeight: 280,
              padding: 24,
            }}
          >
            <HeaderPage></HeaderPage>
            <AllProductData></AllProductData>
            <ProductList></ProductList>
            <ProductDetails></ProductDetails>
            <ServiceAdvertisement></ServiceAdvertisement>
            <FitureItem></FitureItem>
            <CartProjectData></CartProjectData>
            <WhyKeyboard></WhyKeyboard>
            <TopFeaturedBrands></TopFeaturedBrands>
            <CustomerReviews></CustomerReviews>
            <Footers></Footers>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default LandingPageLayout;
