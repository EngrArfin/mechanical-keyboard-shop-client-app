import { ShoppingCartOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import HeaderPage from "../../pages/ProjectPage/HeaderPage";
import ServiceAdvertisement from "../../pages/ProjectPage/ServiceAdvertisement";
import CustomerReviews from "../../pages/ProjectPage/CustomerReviews";
import TopFeaturedBrands from "../../pages/ProjectPage/TopFeaturedBrands";
import WhyKeyboard from "../../pages/ProjectPage/WhyKeyboard";
import Footers from "../../pages/ProjectPage/Footers";
import AllProductData from "../../pages/AllProduct/AllProductData";
import ProductList from "../../pages/Cart/ProductList";
import ProductDetails from "../../pages/Cart/ProductDetails";
import CartProjectData from "../../pages/ProjectPage/CartProjectData";
import FitureItem from "../../pages/ProjectPage/FitureItem";
import Products from "../../pages/Carts/Products";

const { Header, Content } = Layout;

const items: MenuProps["items"] = [
  { key: "Home", label: <NavLink to="/home">Home</NavLink> },
  { key: "AllProducts", label: <NavLink to="/allproduct">Products</NavLink> },
  { key: "About", label: <NavLink to="/about">About</NavLink> },
  { key: "Contract", label: <NavLink to="/contract">Contract</NavLink> },
  {
    key: "Dashboard",
    label: "Dashboard",
    children: [
      { key: "Admin", label: <NavLink to="/admin">Admin</NavLink> },
      { key: "User", label: <NavLink to="/user">User</NavLink> },
    ],
  },
  { key: "Login", label: <NavLink to="/login">Login</NavLink> },
];

const LandingPageLayout = () => {
  const products = useAppSelector((state) => state.carts.products);

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
            position: "fixed",
            width: "100%",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              color: "white",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: 25 }}>Mechanical Keyboard</h1>
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
            {/* Display the number of products in the cart */}
            <p className="badge text-black-400 mb-4">{products.length}</p>
          </div>
        </Header>

        <Content style={{ padding: "0 48px", marginTop: "64px" }}>
          <div style={{ minHeight: 280, padding: 24 }}>
            <HeaderPage />
            <Products></Products>
            <AllProductData />
            <ProductList />
            <ProductDetails />
            <ServiceAdvertisement />
            <FitureItem />
            <CartProjectData />
            <WhyKeyboard />
            <TopFeaturedBrands />
            <CustomerReviews />
            <Footers />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default LandingPageLayout;
