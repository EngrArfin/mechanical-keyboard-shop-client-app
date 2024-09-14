import brandkeyboard1 from "../../assets/icons/keybordbrandcorsari1.png";
import brandkeyboard2 from "../../assets/icons/keybordbrandhyperX2.jpg";
import brandkeyboard3 from "../../assets/icons/keybordbrandRapoo3.png";
import brandkeyboard4 from "../../assets/icons/keybordbrandAstam4.png";
import brandkeyboard5 from "../../assets/icons/keybordbrandApple5.png";
import brandkeyboard6 from "../../assets/icons/keybordbrandAjazz6.png";

import { Row, Col, Card, Typography, Divider } from "antd";

const { Title } = Typography;

interface Brand {
  name: string;
  logo: string;
}

// List of popular keyboard brands with their logos (imported images)
const popularBrands: Brand[] = [
  {
    name: "Corsair",
    logo: brandkeyboard1,
  },
  {
    name: "HyperX",
    logo: brandkeyboard2,
  },
  {
    name: "Rapoo",
    logo: brandkeyboard3,
  },
  {
    name: "Astam",
    logo: brandkeyboard4,
  },
  {
    name: "Apple",
    logo: brandkeyboard5,
  },
  {
    name: "Ajazz",
    logo: brandkeyboard6,
  },
];

const TopFeaturedBrands = () => {
  return (
    <div>
      <div>
        <Divider style={{ borderColor: "#7cb305" }}>
          Top Featured Keyboard Brands
        </Divider>

        {/* Display Brands in a Responsive Grid */}
        <Row gutter={[16, 16]} justify="center">
          {popularBrands.map((brand, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                style={{
                  textAlign: "center",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(45deg, #2e004f, #00bfae, #2e004f)",
                  color: "#ffffff",
                  boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{
                    height: "100px",
                    marginBottom: "20px",
                    objectFit: "contain",
                  }}
                />
                <Title level={4} style={{ color: "#ffffff" }}>
                  {brand.name}
                </Title>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TopFeaturedBrands;
