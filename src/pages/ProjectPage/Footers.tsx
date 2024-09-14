import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Title } = Typography;

const Footers = () => {
  return (
    <div>
      <Footer
        style={{
          margin: 10,
          background:
            "linear-gradient(70deg, #2e004f, #00bfae, #2e004f, #00bfae)",
          color: "#ffffff",
          boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
          padding: "40px 0",
        }}
      >
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <Row gutter={[16, 16]}>
            {/* Column 1: Logo or Company Info */}
            <Col xs={24} sm={12} md={8}>
              <Title level={4} style={{ color: "#fff" }}>
                Mechanical Keyboard Shop
              </Title>
              <Text style={{ color: "#d9d9d9" }}>
                Explore a wide range of mechanical keyboards for enthusiasts and
                professionals. Join our community to find the perfect keyboard
                for your needs.
              </Text>
            </Col>

            {/* Column 2: Quick Links */}
            <Col xs={24} sm={12} md={8}>
              <Title level={4} style={{ color: "#fff" }}>
                Quick Links
              </Title>
              <Space direction="vertical" size="middle">
                <Text style={{ color: "#d9d9d9" }}>Home</Text>
                <Text style={{ color: "#d9d9d9" }}>Products</Text>
                <Text style={{ color: "#d9d9d9" }}>About Us</Text>
                <Text style={{ color: "#d9d9d9" }}>Contact</Text>
                <Text style={{ color: "#d9d9d9" }}>Support</Text>
              </Space>
            </Col>

            {/* Column 3: Social Media Links */}
            <Col xs={24} sm={12} md={8}>
              <Title level={4} style={{ color: "#fff" }}>
                Follow Us
              </Title>
              <Space size="large">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookOutlined
                    style={{ fontSize: "24px", color: "#d9d9d9" }}
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterOutlined
                    style={{ fontSize: "24px", color: "#d9d9d9" }}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramOutlined
                    style={{ fontSize: "24px", color: "#d9d9d9" }}
                  />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOutlined
                    style={{ fontSize: "24px", color: "#d9d9d9" }}
                  />
                </a>
              </Space>
            </Col>
          </Row>

          <Row
            style={{
              marginTop: "40px",
              borderTop: "1px solid #333",
              paddingTop: "20px",
            }}
          >
            <Col xs={24}>
              <Text
                style={{
                  color: "#d9d9d9",
                  textAlign: "center",
                  display: "block",
                }}
              >
                Ant Design ©{new Date().getFullYear()} Created by Mechanical
                Keyboard Shop
              </Text>
            </Col>
          </Row>
        </div>
      </Footer>
    </div>
  );
};

export default Footers;
