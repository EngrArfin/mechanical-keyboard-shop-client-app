import { Card, Col, Divider, Row } from "antd";
import freeshiping from "../../assets/icons/freeshiping.png";

const ServiceAdvertisement = () => {
  return (
    <div>
      <Divider style={{ borderColor: "#7cb305" }}>
        Service Advertisement
      </Divider>
      <Row gutter={16}>
        <Col span={6}>
          <Card title="FreeShiping" bordered={false}>
            <img style={{ height: 40, width: 50 }} src={freeshiping} alt="" />
            Order Over 500$
          </Card>
        </Col>
        <Col span={6}>
          <Card title="FreeShiping" bordered={false}>
            <img style={{ height: 40, width: 50 }} src={freeshiping} alt="" />
            Order Over 500$
          </Card>
        </Col>
        <Col span={6}>
          <Card title="FreeShiping" bordered={false}>
            <img style={{ height: 40, width: 50 }} src={freeshiping} alt="" />
            Order Over 500$
          </Card>
        </Col>
        <Col span={6}>
          <Card title="FreeShiping" bordered={false}>
            <img style={{ height: 40, width: 50 }} src={freeshiping} alt="" />
            Order Over 500$
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceAdvertisement;
