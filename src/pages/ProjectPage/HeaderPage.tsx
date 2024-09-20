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
    <Carousel
      autoplay
      style={{
        padding: "3px",
        borderRadius: "8px",
        background:
          "linear-gradient(90deg, #2e004f, #00bfae, #2e004f, #00bfae)",
        color: "#ffffff",
        boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
      }}
    >
      <div>
        <h3 style={contentStyle}>
          <img
            style={{ height: "620px", width: "1555px" }}
            alt="example"
            src={photo1}
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            style={{ height: "620px", width: "1555px" }}
            src={photo2}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            style={{ height: "620px", width: "1555px" }}
            src={photo3}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            style={{ height: "620px", width: "1555px" }}
            src={photo4}
            alt=""
          />
        </h3>
      </div>
    </Carousel>
  );
};

export default HeaderPage;
