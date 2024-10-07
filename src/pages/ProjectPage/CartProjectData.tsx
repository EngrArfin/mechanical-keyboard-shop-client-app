import { useGetProductsQuery } from "../../redux/api/api";
import CardProject from "./CardProject";
import { TProductCardProps } from "../../type";
import { Divider, Row, Col } from "antd";

const CartProjectData = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const { data: products } = data;

  return (
    <div style={{ padding: "0 20px" }}>
      <Divider style={{ borderColor: "#7cb305" }}>Featured Products</Divider>
      <Row gutter={[16, 16]} justify="center">
        {products.map((product: TProductCardProps) => (
          <Col
            key={product?._id}
            xs={24} // Full-width on extra small screens
            sm={12} // Two columns on small screens
            md={8} // Three columns on medium screens
            lg={6} // Four columns on large screens
            xl={4} // Five columns on extra-large screens
          >
            <CardProject product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CartProjectData;
