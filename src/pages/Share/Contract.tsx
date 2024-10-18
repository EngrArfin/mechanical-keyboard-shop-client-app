import { Row, Col, Typography, Input, Button } from "antd";
import { CSSProperties } from "react";
import backgroundImage from "../../assets/images/backgroundContact.jpg";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons"; // Import icons for contact information
import NavBar from "./NavBAr";
import Footers from "../ProjectPage/Footers";

const { Title, Paragraph } = Typography;

const Contract = () => {
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
    <div>
      <NavBar />
      <div style={sectionStyle}>
        <div style={overlayStyle}>
          <Title level={2} style={titleStyle}>
            Contact Us
          </Title>

          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={20} md={16} lg={12}>
              <Paragraph style={paragraphStyle}>
                We would love to hear from you! Please fill out the form below
                or contact us directly through the following methods:
              </Paragraph>

              <Paragraph style={paragraphStyle}>
                <MailOutlined style={iconStyle} />
                Email: arfin.cse.green.edu.bd@gmail.com
              </Paragraph>

              <Paragraph style={paragraphStyle}>
                <PhoneOutlined style={iconStyle} />
                Phone: +88 01981-397907
              </Paragraph>

              <Paragraph style={paragraphStyle}>
                <EnvironmentOutlined style={iconStyle} />
                Address: 123 Shawrapara, City Bazar, Mirpur-1216
              </Paragraph>

              <form style={{ marginTop: "30px" }}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12}>
                    <Input
                      placeholder="Your Name"
                      style={{ marginBottom: "10px" }}
                      size="large"
                    />
                  </Col>
                  <Col xs={24} sm={12}>
                    <Input
                      placeholder="Your Email"
                      style={{ marginBottom: "10px" }}
                      size="large"
                    />
                  </Col>
                  <Col xs={24}>
                    <Input.TextArea
                      rows={4}
                      placeholder="Your Message"
                      style={{ marginBottom: "10px" }}
                    />
                  </Col>
                  <Col xs={24}>
                    <Button type="primary" size="large" block>
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Contract;
