import { Card, Col, Divider, Row, Typography } from "antd";
import freeshiping1 from "../../assets/icons/freeshiping1.png";
import freeshiping2 from "../../assets/icons/freeshiping2.jpg";
import freeshiping3 from "../../assets/icons/freeshiping3.png";
import freeshiping4 from "../../assets/icons/freeshiping4.png";

const { Title } = Typography;

const services = [
  {
    title: "Free Shipping",
    description:
      "Enjoy free shipping on orders over $500 dollar for every day .",
    icon: freeshiping1,
  },
  {
    title: "Fast Delivery",
    description: "Guaranteed next-day delivery on selected products.",
    icon: freeshiping2,
  },
  {
    title: "24/7 Support",
    description: "We are here to help you any time of the day.",
    icon: freeshiping3,
  },
  {
    title: "Money-back Guarantee",
    description: "100% money-back guarantee within 30 days.",
    icon: freeshiping4,
  },
];

const ServiceAdvertisement = () => {
  return (
    <div>
      <div>
        <Divider style={{ borderColor: "#7cb305" }}>
          Service Advertisement
        </Divider>

        <Row gutter={[16, 16]} justify="center">
          {services.map((service, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                hoverable
                bordered={false}
                style={{
                  textAlign: "center",
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",

                  background:
                    "linear-gradient(70deg, #2e004f, #00bfae, #2e004f)",
                  padding: "30px",
                  borderRadius: "10px",
                  color: "#ffffff",
                }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  style={{
                    height: "40px",
                    width: "50px",
                    marginBottom: "15px",
                  }}
                />
                <Title level={4}>{service.title}</Title>
                <p>{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ServiceAdvertisement;
