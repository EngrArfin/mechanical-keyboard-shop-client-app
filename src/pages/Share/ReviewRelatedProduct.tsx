import { Button, Rate, Input, Col, Row, Card } from "antd";
import photo1 from "../../assets/images/card11.jpg";
import photo2 from "../../assets/images/card12.jpg";
import photo3 from "../../assets/images/card13.jpg";
import { useState } from "react";

const relatedProducts = [
  { id: 1, name: "Mechanical Keyboard V2", price: 2600, img: photo1 },
  { id: 2, name: "RGB Gaming Keyboard", price: 1800, img: photo2 },
  { id: 3, name: "Ergonomic Keyboard", price: 2300, img: photo3 },
];

const ReviewRelatedProduct = () => {
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

  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={[16, 16]}>
        {/* Related Products Section */}
        <Col span={24}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "16px",
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            Related Products
          </h2>
          <Row gutter={[16, 16]} justify="center">
            {relatedProducts.map((product) => (
              <Col
                key={product.id}
                xs={24}
                sm={12}
                md={8}
                lg={6}
                style={{ textAlign: "center" }}
              >
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
                      width: "100%",
                      maxWidth: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "12px",
                    }}
                  />
                  <h3 style={{ fontSize: "1.1rem" }}>{product.name}</h3>
                  <p style={{ color: "#EF4444", fontSize: "1rem" }}>
                    ৳ {product.price}
                  </p>
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
              boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Leave a Review
            </h2>
            <div style={{ marginBottom: "16px", textAlign: "center" }}>
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
              style={{ marginBottom: "16px", fontSize: "1rem" }}
            />
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={handleReviewSubmit}
                style={{ backgroundColor: "#10B981", color: "white" }}
              >
                Submit Review
              </Button>
            </div>

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
                  <p style={{ marginTop: "8px", fontSize: "1rem" }}>
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReviewRelatedProduct;
