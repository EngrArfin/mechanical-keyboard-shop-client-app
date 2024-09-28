import { NavLink } from "react-router-dom";
/* import photo2 from "../../assets/images/card2.jpg";
import photo1 from "../../assets/images/card1.jpg";
import photo3 from "../../assets/images/card3.jpg";
import photo4 from "../../assets/images/card4.jpg"; */

import { Button, Card, Flex, Rate } from "antd";
import { TProductCardProps } from "../../type";
const { Meta } = Card;

export function CardProject({ product }: { product: TProductCardProps }) {
  return (
    <div>
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
          cover={
            <img style={{ height: 215 }} alt="example" src={product?.image} />
          }
        >
          <Meta title={product?.productName} description="" />
          <div style={{ display: "flex", margin: 5 }}>
            <div style={{ display: "flex" }}>
              <div>Rating:</div>
              <Flex gap="small">
                <Rate defaultValue={product?.rating} />
              </Flex>
            </div>
          </div>
          <p>Brand {product?.brand}</p>
          <p>Available Quantity {product?.availableQuantity}</p>
          <p>Price: {product?.price}</p>
          <Button style={{ marginTop: 6, marginLeft: 25 }}>
            <NavLink to="/product-details">See Details Button</NavLink>
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default CardProject;

/* const CardProject = () => { */
