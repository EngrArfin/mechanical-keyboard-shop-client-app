import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Row,
  Col,
  Card,
} from "antd";
import { NavLink } from "react-router-dom";
import { useLoginUserMutation } from "../redux/api/api";

const { Title } = Typography;

const Login = () => {
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const onFinish = async (values) => {
    try {
      const result = await loginUser(values).unwrap();
      console.log("Login Successful:", result);
      // You can save the JWT token or user info here if needed
    } catch (err) {
      console.error("Login Failed:", err);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "100vh", backgroundColor: "#f0f2f5" }}
    >
      <Col xs={22} sm={16} md={12} lg={8}>
        <Card
          style={{
            padding: "40px 30px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            background: "#ffffff",
          }}
        >
          <Title
            level={3}
            style={{ textAlign: "center", marginBottom: "30px" }}
          >
            Login to Your Account
          </Title>

          <Form
            name="loginForm"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={isLoading}
              >
                Login
              </Button>
            </Form.Item>

            {isError && (
              <div style={{ color: "red" }}>
                {error?.data?.message || "Login failed"}
              </div>
            )}

            <div style={{ textAlign: "center" }}>
              <NavLink to="/register">Register Now</NavLink>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
