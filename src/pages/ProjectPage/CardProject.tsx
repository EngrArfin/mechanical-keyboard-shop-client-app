import { Button, Card } from "antd";

const { Meta } = Card;

const CardProject = () => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        <Button>Add To Card</Button>
      </Card>
    </div>
  );
};

export default CardProject;
