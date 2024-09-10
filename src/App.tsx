import LandingPageLayout from "./components/layout/LandingPageLayout";
import MainLayout from "./components/layout/MainLayout";
import ProductDetails from "./pages/ProjectPage/ProductDetails";

const App = () => {
  return (
    <div>
      <LandingPageLayout></LandingPageLayout>
      <br /> <br /> <hr /> <hr />
      <MainLayout></MainLayout>
      <ProductDetails></ProductDetails>
    </div>
  );
};

export default App;
