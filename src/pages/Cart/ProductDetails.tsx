import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Rate, Button } from "antd";

interface Product {
  id: number;
  image: string;
  title: string;
  brand: string;
  available_quantity: number;
  price: number;
  rating: number;
}

const products: Product[] = [
  // Same product data here
];

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <Card
        hoverable
        style={{ width: 400 }}
        cover={<img alt={product.title} src={product.image} />}
      >
        <h2>{product.title}</h2>
        <p>Brand: {product.brand}</p>
        <p>Available Quantity: {product.available_quantity}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <Rate disabled defaultValue={product.rating} allowHalf />
        <Button type="primary" style={{ marginTop: "10px" }}>
          Add to Cart
        </Button>
        <br />
        <Link to="/" style={{ marginTop: "20px", display: "block" }}>
          Back to Product List
        </Link>
      </Card>
    </div>
  );
};

export default ProductDetails;
