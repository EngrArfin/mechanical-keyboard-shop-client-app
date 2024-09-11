import photo1 from "../../assets/images/card1.jpg";
import photo2 from "../../assets/images/card2.jpg";
import photo3 from "../../assets/images/card3.jpg";
import photo4 from "../../assets/images/card4.jpg";

import { Button, Card, Divider } from "antd";

const { Meta } = Card;

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
          <Meta title="Europe Street beat" description="Rating" />
          <p>Brand</p>
          <p>Available Quantity</p>
          <p>Price: 3000</p>
          <Button style={{ marginTop: 15, marginLeft: 25 }}>
            See Details Button
          </Button>
        </Card>

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
          cover={<img style={{ height: 250 }} alt="example" src={photo1} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price: 3000</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>
            Product Details
          </Button>
        </Card>
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
          cover={<img style={{ height: 250 }} alt="example" src={photo2} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price: 3000</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>
            Product Details
          </Button>
        </Card>
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
          cover={<img style={{ height: 250 }} alt="example" src={photo3} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price: 3000</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>
            Product Details
          </Button>
        </Card>
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
          cover={<img style={{ height: 250 }} alt="example" src={photo4} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price: 3000</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>
            Product Details
          </Button>
        </Card>
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
          cover={<img style={{ height: 250 }} alt="example" src={photo4} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price: 3000</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>
            Product Details
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default CardProject;
