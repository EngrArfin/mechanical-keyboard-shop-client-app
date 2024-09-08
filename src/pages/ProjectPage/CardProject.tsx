import photo1 from "../../assets/images/card1.jpg";
import photo2 from "../../assets/images/card2.jpg";
import photo3 from "../../assets/images/card3.jpg";
import photo4 from "../../assets/images/card4.jpg";

import { Button, Card, Divider } from "antd";

const { Meta } = Card;

const CardProject = () => {
  return (
    <div>
      <Divider style={{ borderColor: "#7cb305" }}>Display Product</Divider>
      <div style={{ display: "flex" }}>
        <Card
          hoverable
          style={{ height: 420, width: 240, margin: 10 }}
          cover={<img style={{ height: 250 }} alt="example" src={photo1} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price:</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>Add To Card</Button>
        </Card>
        <Card
          hoverable
          style={{ height: 420, width: 240, margin: 10 }}
          cover={<img style={{ height: 250 }} alt="example" src={photo1} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price:</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>
            Show Details
          </Button>
        </Card>
        <Card
          hoverable
          style={{ height: 420, width: 240, margin: 10 }}
          cover={<img style={{ height: 250 }} alt="example" src={photo2} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price:</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>Add To Card</Button>
        </Card>
        <Card
          hoverable
          style={{ height: 420, width: 240, margin: 10 }}
          cover={<img style={{ height: 250 }} alt="example" src={photo3} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price:</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>Add To Card</Button>
        </Card>
        <Card
          hoverable
          style={{ height: 420, width: 240, margin: 10 }}
          cover={<img style={{ height: 250 }} alt="example" src={photo4} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price:</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>Add To Card</Button>
        </Card>
        <Card
          hoverable
          style={{ height: 420, width: 240, margin: 10 }}
          cover={<img style={{ height: 250 }} alt="example" src={photo4} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price:</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>Add To Card</Button>
        </Card>
      </div>
      <div style={{ display: "flex" }}>
        <Card
          hoverable
          style={{ height: 420, width: 240, margin: 10 }}
          cover={<img style={{ height: 250 }} alt="example" src={photo1} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price:</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>Add To Card</Button>
        </Card>
        <Card
          hoverable
          style={{ height: 420, width: 240, margin: 10 }}
          cover={<img style={{ height: 250 }} alt="example" src={photo1} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price:</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>Add To Card</Button>
        </Card>
        <Card
          hoverable
          style={{ height: 420, width: 240, margin: 10 }}
          cover={<img style={{ height: 250 }} alt="example" src={photo2} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price:</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>Add To Card</Button>
        </Card>
        <Card
          hoverable
          style={{ height: 420, width: 240, margin: 10 }}
          cover={<img style={{ height: 250 }} alt="example" src={photo3} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price:</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>Add To Card</Button>
        </Card>
        <Card
          hoverable
          style={{ height: 420, width: 240, margin: 10 }}
          cover={<img style={{ height: 250 }} alt="example" src={photo4} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price:</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>Add To Card</Button>
        </Card>
        <Card
          hoverable
          style={{ height: 420, width: 240, margin: 10 }}
          cover={<img style={{ height: 250 }} alt="example" src={photo4} />}
        >
          <Meta title="Europe Street beat" description="Rating" />
          <p>Price:</p>
          <Button style={{ marginTop: 15, marginLeft: 20 }}>Add To Card</Button>
        </Card>
      </div>
    </div>
  );
};

export default CardProject;
