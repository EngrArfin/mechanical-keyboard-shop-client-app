import { Row, Col, Spin } from "antd";
import { useGetTodosQuery } from "../../redux/api/api";
import CardProject, { TProductCardProps } from "./CardProject";

const CartProjectData = () => {
  const { data: products, isLoading } = useGetTodosQuery();
  console.log(products);
  if (isLoading) {
    return <Spin tip="Loading..." />;
  }

  const todosToDisplay: TProductCardProps[] = products?.data || [];

  return (
    <div>
      <Row gutter={[16, 16]}>
        {todosToDisplay.map((item: TProductCardProps) => (
          <Col key={item._id} span={8}>
            {" "}
            {/* Adjust span as needed for layout */}
            <CardProject {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CartProjectData;
