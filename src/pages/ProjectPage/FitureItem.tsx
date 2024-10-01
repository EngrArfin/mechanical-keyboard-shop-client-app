import { Card, Divider, Row, Col } from "antd";
import photo2 from "../../assets/images/card12.jpg";
import photo3 from "../../assets/images/card13.jpg";

const FitureItem = () => {
  return (
    <div>
      <Divider style={{ borderColor: "#7cb305" }}>Product Fiture</Divider>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{ transition: "transform 0.3s", transform: "translateY(0)" }}
            bodyStyle={{ padding: 0 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img style={{ height: 190, width: "100%" }} src={photo2} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{ transition: "transform 0.3s", transform: "translateY(0)" }}
            bodyStyle={{ padding: 0 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img style={{ height: 190, width: "100%" }} src={photo2} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{ transition: "transform 0.3s", transform: "translateY(0)" }}
            bodyStyle={{ padding: 0 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img style={{ height: 190, width: "100%" }} src={photo3} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{ transition: "transform 0.3s", transform: "translateY(0)" }}
            bodyStyle={{ padding: 0 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img style={{ height: 190, width: "100%" }} src={photo3} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{ transition: "transform 0.3s", transform: "translateY(0)" }}
            bodyStyle={{ padding: 0 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img style={{ height: 190, width: "100%" }} src={photo2} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{ transition: "transform 0.3s", transform: "translateY(0)" }}
            bodyStyle={{ padding: 0 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img style={{ height: 190, width: "100%" }} src={photo2} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{ transition: "transform 0.3s", transform: "translateY(0)" }}
            bodyStyle={{ padding: 0 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img style={{ height: 190, width: "100%" }} src={photo3} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{ transition: "transform 0.3s", transform: "translateY(0)" }}
            bodyStyle={{ padding: 0 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img style={{ height: 190, width: "100%" }} src={photo3} alt="" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FitureItem;
