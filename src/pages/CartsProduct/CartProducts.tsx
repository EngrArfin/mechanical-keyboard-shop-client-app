import React, { useState } from "react";
import { Button, InputNumber, Card, Rate, Typography, Alert } from "antd";

const { Title, Text } = Typography;

type simpleProduct = {
  id: number;
  image: string;
  title: string;
  brand: string;
  available_quantity: number;
  price: number;
  rating: number;
  description: string;
};

type CartItem = simpleProduct & {
  quantity: number;
};

type ProductDetailsProps = {
  product: simpleProduct;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

const CartProducts: React.FC<ProductDetailsProps> = ({
  product,
  cart,
  setCart,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  // Handle adding product to cart
  const addToCart = () => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const newCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: Math.min(
                item.quantity + quantity,
                product.available_quantity
              ),
            }
          : item
      );
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: Math.min(quantity, product.available_quantity),
        },
      ]);
    }
  };

  // Check if product is out of stock
  const isOutOfStock = product.available_quantity === 0;

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "40%", objectFit: "cover" }}
          />

          {/* Product Information */}
          <div style={{ flex: 1, marginLeft: "20px" }}>
            <Title level={2}>{product.title}</Title>
            <Text type="secondary">{product.brand}</Text>
            <div style={{ margin: "10px 0" }}>
              <Text strong>
                Available Quantity: {product.available_quantity}
              </Text>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <Rate disabled defaultValue={product.rating} />
              <Text style={{ marginLeft: "10px" }}>
                ({product.rating} stars)
              </Text>
            </div>
            <Text strong style={{ fontSize: "24px" }}>
              ${product.price.toFixed(2)}
            </Text>

            {/* Product Description */}
            <div style={{ margin: "20px 0" }}>
              <Title level={5}>Description</Title>
              <Text>{product.description}</Text>
            </div>

            {/* Quantity and Add to Cart */}
            {!isOutOfStock ? (
              <div>
                <div style={{ marginBottom: "10px" }}>
                  <Text strong>Quantity:</Text>{" "}
                  <InputNumber
                    min={1}
                    max={product.available_quantity}
                    value={quantity}
                    onChange={(value) => setQuantity(value || 1)}
                  />
                </div>
                <Button
                  type="primary"
                  onClick={addToCart}
                  disabled={quantity > product.available_quantity}
                >
                  Add to Cart
                </Button>
              </div>
            ) : (
              <Alert message="This product is out of stock" type="error" />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CartProducts;
