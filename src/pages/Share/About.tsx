import { Row, Col, Typography } from "antd";
import { CSSProperties } from "react";
import backgroundImage from "../../assets/images/backgroundAbout.jpg";
import { LaptopOutlined, StarOutlined, TeamOutlined } from "@ant-design/icons"; // Import icons from Ant Design

const { Title, Paragraph } = Typography;

const About = () => {
  const sectionStyle: CSSProperties = {
    padding: "50px 20px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  };

  const overlayStyle: CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    padding: "40px",
  };

  const titleStyle: CSSProperties = {
    textAlign: "center",
    marginBottom: "30px",
    color: "#fff",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "700",
  };

  const paragraphStyle: CSSProperties = {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#fff",
    marginBottom: "20px",
  };

  const iconStyle: CSSProperties = {
    fontSize: "24px",
    color: "#1890ff", // Ant Design primary color
    marginRight: "10px",
  };

  return (
    <div style={sectionStyle}>
      <div style={overlayStyle}>
        <Title level={2} style={titleStyle}>
          About Us
        </Title>

        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Paragraph style={paragraphStyle}>
              <LaptopOutlined style={iconStyle} />
              Welcome to our Mechanical Keyboard Shop! We are passionate about
              providing high-quality mechanical keyboards that enhance your
              typing and gaming experience.
            </Paragraph>

            <Paragraph style={paragraphStyle}>
              <StarOutlined style={iconStyle} />
              Our mission is to deliver top-notch products with exceptional
              customer service. We offer a wide variety of customizable
              mechanical keyboards to suit the needs of enthusiasts and
              professionals alike.
            </Paragraph>

            <Paragraph style={paragraphStyle}>
              <TeamOutlined style={iconStyle} />
              Join our community and discover why mechanical keyboards are the
              future of typing!
            </Paragraph>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
