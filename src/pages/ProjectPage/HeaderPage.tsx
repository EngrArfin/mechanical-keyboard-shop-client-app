import { Carousel } from "antd";
import photo1 from "../../assets/images/header1.jpg";
import photo2 from "../../assets/images/header2.jpg";
import photo3 from "../../assets/images/header3.jpg";
import photo4 from "../../assets/images/header4.jpg";

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
        <div style={contentStyle(photo1)}>
          {" "}
          {/* Pass the image as an argument */}
          <img
            style={imageStyle()} // Use responsive image style
            src={photo1}
            alt="Header 1"
          />
        </div>
      </div>
      <div>
        <div style={contentStyle(photo2)}>
          <img style={imageStyle()} src={photo2} alt="Header 2" />
        </div>
      </div>
      <div>
        <div style={contentStyle(photo3)}>
          <img style={imageStyle()} src={photo3} alt="Header 3" />
        </div>
      </div>
      <div>
        <div style={contentStyle(photo4)}>
          <img style={imageStyle()} src={photo4} alt="Header 4" />
        </div>
      </div>
    </Carousel>
  );
};

// Define content styles
const contentStyle = (image: string): React.CSSProperties => ({
  height: "100vh", // Make it responsive for mobile
  display: "flex",
  alignItems: "center", // Center the image vertically
  justifyContent: "center", // Center the image horizontally
  overflow: "hidden", // Prevent overflow
  background: `url(${image}) no-repeat center center / cover`, // Use background image for responsiveness
});

// Define responsive image style
const imageStyle = (): React.CSSProperties => ({
  width: "100%",
  height: "auto",
});

export default HeaderPage;
