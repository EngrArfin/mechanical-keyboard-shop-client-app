/* import { Row, Col } from "antd"; */
import { useGetProductsQuery } from "../../redux/api/api";
import { TAllProductDataProps } from "../../type";
import { Divider, Row, Col } from "antd";
import AllProduct from "./AllProduct";

const CartProjectData = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  console.log(data);
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const { data: products } = data;
  return (
    <div>
      <Divider style={{ borderColor: "#7cb305" }}>Featured Products</Divider>
      <Row gutter={[12, 12]} justify="center">
        {products.map((product: TAllProductDataProps) => (
          <Col xs={12} sm={6} md={4} lg={4} key={product?._id}>
            <AllProduct product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CartProjectData;
