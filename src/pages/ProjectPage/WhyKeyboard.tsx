import whyuse from "../../assets/images/whyuse.jpg";
import { Collapse, CollapseProps, Divider, Row, Col } from "antd";

const text = (
  <p style={{ paddingInlineStart: 24 }}>
    Mechanical keyboards are popular for their tactile feedback, durability, and
    customization options. Each key provides a satisfying response, improving
    typing accuracy and speed. They are built to last, often outliving
    traditional keyboards, and are ideal for gamers, professionals, and
    enthusiasts due to their fast response times, anti-ghosting features, and
    ergonomic designs. With customizable key switches, lighting, and keycaps,
    they also offer a unique, personalized experience. Mechanical keyboards
    enhance both performance and comfort, making them a top choice for serious
    users.
  </p>
);

// Define other text elements (text1, text2, text3, text4) similarly...

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Mechanical Keyboard Description",
    children: text,
  },
  {
    key: "2",
    label: "Superior Typing Experience",
    children: text,
  },
  {
    key: "3",
    label: "Durability and Longevity",
    children: text,
  },
  {
    key: "4",
    label: "Customization Options",
    children: text,
  },
  {
    key: "5",
    label: "Improved Gaming Performance",
    children: text,
  },
];

export const WhyKeyboard = () => {
  return (
    <div style={{ padding: "0 20px" }}>
      <Divider style={{ borderColor: "#7cb305" }}>
        Why We Use Mechanical Keyboards?
      </Divider>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} md={12}>
          <img
            style={{ width: "100%", maxWidth: 500 }}
            src={whyuse}
            alt="Why use a mechanical keyboard"
          />
        </Col>
        <Col xs={24} md={12}>
          <Collapse
            items={items}
            bordered={false}
            defaultActiveKey={["1"]}
            style={{ width: "100%", maxWidth: 500 }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default WhyKeyboard;
