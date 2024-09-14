import { useState } from "react";
import { Card, Rate, Row, Col, Avatar, Typography, Space, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

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

const CustomerReviews = () => {
  // State to store reviews
  const [reviews] = useState<Review[]>(initialReviews);

  return (
    <div className="my-24">
      <div>
        <Divider style={{ borderColor: "#7cb305" }}>Products Review</Divider>

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
      </div>
    </div>
  );
};

export default CustomerReviews;
