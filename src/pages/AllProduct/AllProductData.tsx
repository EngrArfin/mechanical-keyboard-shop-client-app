/* import { Row, Col } from "antd"; */
import { TAllProductDataProps } from "../../type";
import { Divider, Row, Col } from "antd";
import AllProduct from "./AllProduct";
import { useGetAllproductsQuery } from "../../redux/api/api";

const AllProductData = () => {
  const { data, isLoading } = useGetAllproductsQuery(undefined);
  console.log(data);
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const { data: allproducts } = data;
  return (
    <div>
      <Divider style={{ borderColor: "#7cb305" }}>Featured Products</Divider>
      <Row gutter={[12, 12]} justify="center">
        {allproducts.map((allproduct: TAllProductDataProps) => (
          <Col xs={12} sm={6} md={4} lg={4} key={allproduct?._id}>
            <AllProduct allproduct={allproduct} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllProductData;
