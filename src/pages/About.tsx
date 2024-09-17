import { Row, Col, Typography, Card } from "antd";
import { CSSProperties } from "react";

const { Title, Paragraph } = Typography;
const About = () => {
  const cardStyle: CSSProperties = {
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  };

  return (
    <div style={{ padding: "50px 0", backgroundColor: "#f0f2f5" }}>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Card bordered={false} style={cardStyle}>
            <Title
              level={2}
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              About Us
            </Title>
            <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Welcome to our Mechanical Keyboard Shop! We are passionate about
              providing high-quality mechanical keyboards that enhance your
              typing and gaming experience.
            </Paragraph>
            <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Our mission is to deliver top-notch products with exceptional
              customer service. We offer a wide variety of customizable
              mechanical keyboards to suit the needs of enthusiasts and
              professionals alike.
            </Paragraph>
            <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Join our community and discover why mechanical keyboards are the
              future of typing!
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
