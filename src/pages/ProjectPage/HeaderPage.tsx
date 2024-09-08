import { Carousel } from "antd";
import photo1 from "../../assets/images/header1.jpg";
import photo2 from "../../assets/images/header2.jpg";
import photo3 from "../../assets/images/header3.jpg";
import photo4 from "../../assets/images/header4.jpg";

const contentStyle: React.CSSProperties = {
  height: "620px",
  color: "#fff",
  lineHeight: "460px",
  textAlign: "center",
  background: "#364d79",
};

const HeaderPage = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <img alt="example" src={photo1} />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={photo2} alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={photo3} alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={photo4} alt="" />
        </h3>
      </div>
    </Carousel>
  );
};

export default HeaderPage;
