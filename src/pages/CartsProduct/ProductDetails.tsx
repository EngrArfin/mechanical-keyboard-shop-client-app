import { Button, Rate, Input, Modal, Carousel, Col, Row, Card } from "antd";
import { useState } from "react";
import photo1 from "../../assets/images/card11.jpg";
import photo2 from "../../assets/images/card12.jpg";
import photo3 from "../../assets/images/card13.jpg";
import NavBar from "../NavBar";

const relatedProducts = [
  { id: 1, name: "Mechanical Keyboard V2", price: 2600, img: photo1 },
  { id: 2, name: "RGB Gaming Keyboard", price: 1800, img: photo2 },
  { id: 3, name: "Ergonomic Keyboard", price: 2300, img: photo3 },
];

const ProductDetails = () => {
  /*  const [data: products, isLoading, isError] = useGetTodosQuery(undefined); */

  const [selectedImage, setSelectedImage] = useState<string>(photo1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([
    { rating: 5, comment: "Amazing product!" },
    { rating: 4, comment: "Very good, but delivery was slow." },
  ]);

  const handleReviewSubmit = () => {
    if (rating > 0 && reviewText.trim()) {
      setReviews([...reviews, { rating, comment: reviewText }]);
      setRating(0);
      setReviewText("");
    }
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <NavBar></NavBar>
      <Row
        gutter={30}
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Main Product Photo and Product Info as One Card */}
        <Col span={24}>
          <Card
            style={{
              padding: "20px",
              borderRadius: "8px",
              background:
                "linear-gradient(90deg, #2e004f, #00bfae, #2e004f, #00bfae)",
              color: "#ffffff",
              boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
            }}
          >
            <Row gutter={30}>
              {/* Main Product Photo */}
              <Col span={12}>
                <Carousel dots autoplay style={{ marginBottom: "20px" }}>
                  <div>
                    <img
                      src={photo1}
                      alt="Product Image 1"
                      style={{
                        width: "100%",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                      onClick={() => openModal(photo1)}
                    />
                  </div>
                  <div>
                    <img
                      src={photo2}
                      alt="Product Image 2"
                      style={{
                        width: "100%",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                      onClick={() => openModal(photo2)}
                    />
                  </div>
                  <div>
                    <img
                      src={photo3}
                      alt="Product Image 3"
                      style={{
                        width: "100%",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                      onClick={() => openModal(photo3)}
                    />
                  </div>
                </Carousel>
                {/* Full Image Modal */}
                <Modal
                  visible={isModalVisible}
                  footer={null}
                  onCancel={closeModal}
                >
                  <img
                    src={selectedImage}
                    alt="Full View"
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </Modal>
              </Col>

              {/* Product Info */}
              <Col span={12}>
                <div>
                  <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>
                    Digital Mechanical Keyboard
                  </h1>
                  <p style={{ color: "#4A5568", fontSize: "1.1rem" }}>
                    Brand: A4 Tech
                  </p>

                  <div style={{ marginBottom: "16px" }}>
                    <Rate defaultValue={5} style={{ fontSize: "1.25rem" }} />{" "}
                    5.0 Ratings
                  </div>

                  <h2 style={{ fontSize: "1.75rem", color: "#EF4444" }}>
                    ৳ 2500
                  </h2>
                  <span
                    style={{ textDecoration: "line-through", color: "#A0AEC0" }}
                  >
                    ৳ 3000
                  </span>
                  <span style={{ color: "#16A34A", marginLeft: "12px" }}>
                    25% Off
                  </span>

                  <div style={{ marginTop: "16px" }}>
                    <label
                      htmlFor="quantity"
                      style={{ marginRight: "8px", fontSize: "1.1rem" }}
                    >
                      Quantity:
                    </label>
                    <Input
                      id="quantity"
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      style={{ width: "60px", textAlign: "center" }}
                    />
                  </div>

                  <div
                    style={{ marginTop: "16px", display: "flex", gap: "16px" }}
                  >
                    <Button
                      onClick={() => openModal(selectedImage)}
                      style={{ backgroundColor: "#3B82F6", color: "white" }}
                    >
                      See Product View
                    </Button>
                    <Button
                      style={{ backgroundColor: "#F59E0B", color: "white" }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Related Products Section */}
        <Col span={24}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "16px",
              marginTop: "40px",
            }}
          >
            Related Products
          </h2>
          <Row gutter={16}>
            {relatedProducts.map((product) => (
              <Col key={product.id} span={8}>
                <Card
                  hoverable
                  style={{
                    borderRadius: "8px",
                    background:
                      "linear-gradient(90deg, #2e004f, #00bfae, #2e004f, #00bfae)",
                    color: "#ffffff",
                    boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "8px",
                      marginBottom: "12px",
                    }}
                  />
                  <h3>{product.name}</h3>
                  <p style={{ color: "#EF4444" }}>৳ {product.price}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Review Section */}
        <Col span={24}>
          <Card
            style={{
              marginTop: "40px",
              padding: "20px",
              borderRadius: "8px",
              background:
                "linear-gradient(90deg, #2e004f, #00bfae, #2e004f, #00bfae)",
              color: "#ffffff",
              boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              Leave a Review
            </h2>
            <div style={{ marginBottom: "16px" }}>
              <Rate
                value={rating}
                onChange={(value) => setRating(value)}
                style={{ fontSize: "1.5rem" }}
              />
            </div>
            <Input.TextArea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here..."
              rows={4}
              style={{ marginBottom: "16px" }}
            />
            <Button
              onClick={handleReviewSubmit}
              style={{ backgroundColor: "#10B981", color: "white" }}
            >
              Submit Review
            </Button>

            {/* Display Reviews */}
            <div style={{ marginTop: "40px" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                Customer Reviews
              </h2>
              {reviews.map((review, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#f1f5f9",
                    borderRadius: "8px",
                  }}
                >
                  <Rate disabled defaultValue={review.rating} />
                  <p style={{ marginTop: "8px" }}>{review.comment}</p>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
