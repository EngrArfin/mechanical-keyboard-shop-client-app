import { useState } from "react";
import {
  Card,
  Rate,
  Row,
  Col,
  Avatar,
  Typography,
  Space,
  Input,
  Button,
  Form,
  Divider,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;
const { TextArea } = Input;

interface Review {
  userName: string;
  userAvatar?: string;
  title: string;
  description: string;
  rating: number;
  reviewDate: string;
}

const initialReviews: Review[] = [
  {
    userName: "John Doe",
    userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "Amazing Website!",
    description:
      "The design is clean, and the performance is great. Love the user interface!",
    rating: 5,
    reviewDate: "September 12, 2024",
  },
  {
    userName: "Jane Smith",
    userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Good Experience",
    description:
      "I had a great time navigating through the site, but some features could be more intuitive.",
    rating: 4,
    reviewDate: "August 30, 2024",
  },
  {
    userName: "Shawon Khan",
    userAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
    title: "Good Experience",
    description:
      "I had a great time navigating through the site, but some features could be more intuitive.",
    rating: 4,
    reviewDate: "December 05, 2024",
  },
];
const ProductReview = () => {
  // State to store reviews
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newReview, setNewReview] = useState<Partial<Review>>({
    userName: "",
    description: "",
    rating: 0,
  });

  // Handle review submission
  const handleReviewSubmit = () => {
    if (
      newReview.userName &&
      newReview.title &&
      newReview.description &&
      newReview.rating
    ) {
      const reviewDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setReviews([
        ...reviews,
        {
          ...newReview,
          userAvatar: undefined, // Can add option to upload an avatar later
          reviewDate,
        } as Review,
      ]);

      // Clear the form after submission
      setNewReview({ userName: "", title: "", description: "", rating: 0 });
    }
  };
  return (
    <div className="my-24">
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f2f5",
          margin: 10,
          background:
            "linear-gradient(70deg, #2e004f, #00bfae, #2e004f, #00bfae)",
          color: "#ffffff",
          boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
        }}
      >
        <Divider style={{ borderColor: "#7cb305" }}>Products Review </Divider>

        {/* Display Existing Reviews */}
        <Row gutter={[15, 15]}>
          {reviews.map((review, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  margin: 10,
                  background:
                    "linear-gradient(70deg, #2e004f, #00bfae, #2e004f, #00bfae)",
                  color: "#ffffff",
                  boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
                }}
              >
                <Space direction="horizontal" style={{ marginBottom: "10px" }}>
                  <Avatar
                    src={review.userAvatar}
                    icon={!review.userAvatar ? <UserOutlined /> : undefined}
                    size={50}
                  />
                  <div>
                    <Text strong>{review.userName}</Text>
                    <br />
                    <Text type="secondary">{review.reviewDate}</Text>
                  </div>
                </Space>
                <Title level={4}>{review.title}</Title>
                <Text>{review.description}</Text>
                <br />
                <Rate
                  disabled
                  defaultValue={review.rating}
                  style={{ marginTop: "10px" }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        {/* Add Review Section */}
        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        >
          <Title level={3} style={{ textAlign: "center" }}>
            Leave a Review
          </Title>
          <Form layout="vertical" onFinish={handleReviewSubmit}>
            <Form.Item label="Name" required>
              <Input
                placeholder="Your name"
                value={newReview.userName}
                onChange={(e) =>
                  setNewReview({ ...newReview, userName: e.target.value })
                }
                required
              />
            </Form.Item>

            <Form.Item label="Review Title" required>
              <Input
                placeholder="Review title"
                value={newReview.title}
                onChange={(e) =>
                  setNewReview({ ...newReview, title: e.target.value })
                }
                required
              />
            </Form.Item>

            <Form.Item label="Your Review" required>
              <TextArea
                rows={4}
                placeholder="Write your review here"
                value={newReview.description}
                onChange={(e) =>
                  setNewReview({ ...newReview, description: e.target.value })
                }
                required
              />
            </Form.Item>

            <Form.Item label="Rating" required>
              <Rate
                value={newReview.rating}
                onChange={(value) =>
                  setNewReview({ ...newReview, rating: value })
                }
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" onClick={handleReviewSubmit}>
                Submit Review
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
