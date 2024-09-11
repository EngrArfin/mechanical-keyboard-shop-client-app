import { Carousel } from "antd";
import photo1 from "../../assets/images/card1.jpg";
import photo2 from "../../assets/images/card2.jpg";
import photo3 from "../../assets/images/card3.jpg";
import photo4 from "../../assets/images/card4.jpg";
/* 
import "antd/dist/reset.css"; // You might need to add this if Ant Design styles are not included globally
import "./styles.css"; */

const DetailsSlider = () => {
  return (
    <Carousel className="myCarousel">
      <div>
        <h3>
          <img src={photo1} alt="" />
        </h3>
      </div>
      <div>
        <h3>
          <img src={photo2} alt="" />
        </h3>
      </div>
      <div>
        <h3>
          <img src={photo3} alt="" />
        </h3>
      </div>
      <div>
        <h3>
          <img src={photo4} alt="" />
        </h3>
      </div>
    </Carousel>
  );
};

export default DetailsSlider;
