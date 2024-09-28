import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, InputNumber, Typography, message } from "antd";
import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { updateQuantity } from "../../redux/features/cartSlice";
import { CartItem } from "../../type";

const { Text } = Typography;

interface CartDetailsProps {
  product: CartItem; // Use the CartItem type here
}

const CartDetails: React.FC<CartDetailsProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  // Handle quantity change for increment/decrement/remove actions
  const handleQuantityChange = (type: string, id: number) => {
    const payload = { type, id: id.toString() }; // Convert id to string if required
    dispatch(updateQuantity(payload));
  };

  // Handle custom quantity input from InputNumber component
  const onQuantityChange = (value: number | null) => {
    if (value && value > 0) {
      dispatch(
        updateQuantity({
          type: "custom",
          id: product.id.toString() /* quantity: value */,
        })
      );
    } else {
      message.error("Quantity should be at least 1.");
    }
  };

  return (
    <Card
      hoverable
      className="shadow-lg"
      style={{
        borderRadius: "10px",
        borderColor: "#d9d9d9",
        marginBottom: "16px",
      }}
    >
      <Row align="middle" gutter={16}>
        {/* Product Image */}
        <Col xs={6} sm={6} md={5}>
          <img
            src={product.img} // Use 'img' for product image
            alt={product.name}
            style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
          />
        </Col>

        {/* Product Info */}
        <Col xs={12} sm={12} md={14}>
          <Text strong style={{ fontSize: "16px", color: "#4CAF50" }}>
            {product.name}
          </Text>
          <br />
          <Text strong style={{ fontSize: "18px", color: "#FF4D4F" }}>
            ৳ {product.price}
          </Text>
        </Col>

        {/* Quantity Control */}
        <Col xs={6} sm={6} md={5} style={{ textAlign: "center" }}>
          <Row justify="center" align="middle">
            <Button
              icon={<MinusOutlined />}
              onClick={() => handleQuantityChange("decrement", product.id)}
              disabled={product.quantity === 1}
              style={{ backgroundColor: "#4CAF50", color: "white" }}
            />
            <InputNumber
              min={1}
              value={product.quantity}
              onChange={onQuantityChange}
              style={{ margin: "0 8px", width: "50px", textAlign: "center" }}
            />
            <Button
              icon={<PlusOutlined />}
              onClick={() => handleQuantityChange("increment", product.id)}
              style={{ backgroundColor: "#4CAF50", color: "white" }}
            />
          </Row>
        </Col>

        {/* Remove Button */}
        <Col xs={24} style={{ textAlign: "center", marginTop: "12px" }}>
          <Button
            icon={<DeleteOutlined />}
            type="primary"
            danger
            onClick={() => handleQuantityChange("remove", product.id)}
          >
            Remove
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CartDetails;
