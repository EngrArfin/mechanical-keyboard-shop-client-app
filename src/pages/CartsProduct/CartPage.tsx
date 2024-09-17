import React, { useState, useEffect } from "react";
import { Button, InputNumber, List, Typography, Divider, Alert } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  inStock: boolean;
};

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "Mechanical Keyboard X",
      price: 109.99,
      quantity: 1,
      inStock: true,
    },
    {
      id: 2,
      title: "Gaming Mouse Z",
      price: 59.99,
      quantity: 2,
      inStock: true,
    },
    {
      id: 3,
      title: "4K Monitor B",
      price: 399.99,
      quantity: 1,
      inStock: false,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Update total price whenever cart items change
  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cartItems]);

  // Handle quantity change
  const handleQuantityChange = (id: number, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Typography.Title level={2}>Cart Page</Typography.Title>

      {/* Cart Items */}
      <List
        bordered
        dataSource={cartItems}
        renderItem={(item) => (
          <List.Item
            actions={[
              <InputNumber
                min={1}
                max={10}
                value={item.quantity}
                onChange={(value) => handleQuantityChange(item.id, value || 1)}
              />,
              <Button
                /* type="danger" */
                icon={<DeleteOutlined />}
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={item.title}
              description={`Price: $${item.price}`}
            />
            <Text>Quantity: {item.quantity}</Text>
          </List.Item>
        )}
      />

      <Divider />

      {/* Pricing Details */}
      <div style={{ textAlign: "right" }}>
        <Typography.Title level={4}>
          Total Price: ${totalPrice.toFixed(2)}
        </Typography.Title>
      </div>

      {/* Proceed to Checkout Button */}
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        {cartItems.some((item) => item.inStock) ? (
          <Button
            type="primary"
            disabled={!cartItems.some((item) => item.inStock)}
            onClick={() => alert("Proceeding to checkout...")}
          >
            Proceed To Checkout
          </Button>
        ) : (
          <Alert message="Some products are out of stock!" type="warning" />
        )}
      </div>
    </div>
  );
};

export default CartPage;
