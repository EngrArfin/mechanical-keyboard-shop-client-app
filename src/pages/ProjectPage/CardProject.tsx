import { NavLink } from "react-router-dom";
import photo1 from "../../assets/images/card1.jpg";
/* import photo2 from "../../assets/images/card2.jpg";
import photo3 from "../../assets/images/card3.jpg";
import photo4 from "../../assets/images/card4.jpg"; */

import { Button, Card, Divider, Flex, Rate } from "antd";

const { Meta } = Card;

export type TProductCardProps = {
  _id: string; // Add this line
  productId: string; // Ensure this is a string
  productName: string;
  rating: number;
  brand: string;
  availableQuantity: number;
  price: number;
  image: string;
};

const CardProject = () => {
  return (
    <div>
      <Divider style={{ borderColor: "#7cb305" }}>Featured Products</Divider>
      <div style={{ display: "flex" }}>
        <Card
          hoverable
          style={{
            height: 420,
            width: 240,
            margin: 10,
            borderRadius: "8px",
            background:
              "linear-gradient(70deg, #2e004f, #00bfae, #2e004f, #00bfae)",
            color: "#ffffff",
            boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
          }}
          cover={<img style={{ height: 215 }} alt="example" src={photo1} />}
        >
          <Meta title="Europe Street beat" description="" />
          <div style={{ display: "flex", margin: 5 }}>
            <div>Rating:{}</div>
            <div>
              <Flex gap="middle">
                <Rate defaultValue={3} />
              </Flex>
            </div>
          </div>
          <p>Brand{}</p>
          <p>Available Quantity{}</p>
          <p>Price:{}</p>
          <Button style={{ marginTop: 15, marginLeft: 25 }}>
            <NavLink to="/product-details">See Details Button</NavLink>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default CardProject;

/* import { NavLink } from "react-router-dom";
import { Button, Card } from "antd";

const { Meta } = Card;

export type TProductCardProps = {
  _id: string; // Add this line
  productId: string; // Ensure this is a string
  productName: string;
  rating: number;
  brand: string;
  availableQuantity: number;
  price: number;
  image: string;
};

const CardProject = ({
  productId,
  productName,
  rating,
  brand,
  availableQuantity,
  price,
  image,
}: TProductCardProps) => {
  return (
    <Card
      hoverable
      style={{
        height: 420,
        width: 240,
        margin: 10,
        borderRadius: "8px",
        background:
          "linear-gradient(70deg, #2e004f, #00bfae, #2e004f, #00bfae)",
        color: "#ffffff",
        boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
      }}
      cover={<img style={{ height: 215 }} alt={productName} src={image} />}
    >
      <Meta title={productName} description={`Rating: ${rating}`} />
      <p>Brand: {brand}</p>
      <p>Available Quantity: {availableQuantity}</p>
      <p>Price: {price}</p>
      <Button style={{ marginTop: 15, marginLeft: 25 }}>
        <NavLink to={`/product-details/${productId}`}>See Details</NavLink>
      </Button>
    </Card>
  );
};

export default CardProject; */
