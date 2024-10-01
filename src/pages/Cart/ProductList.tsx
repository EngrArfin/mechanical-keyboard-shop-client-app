import React from "react";
import { Link } from "react-router-dom";
import { Card, Rate } from "antd";

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
  // Your products data here (same as provided)
];

const ProductCard: React.FC<Product> = ({
  id,
  image,
  title,
  brand,
  available_quantity,
  price,
  rating,
}) => {
  return (
    <Card
      hoverable
      style={{ width: 300, margin: "10px" }}
      cover={
        // Wrap image with Link to navigate to ProductDetails
        <Link to={`/product/${id}`}>
          <img alt={title} src={image} />
        </Link>
      }
    >
      <h3>{title}</h3>
      <p>Brand: {brand}</p>
      <p>Available Quantity: {available_quantity}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <Rate disabled defaultValue={rating} allowHalf />
    </Card>
  );
};

const ProductList: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
