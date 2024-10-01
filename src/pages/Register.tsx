import {
  Form,
  Input,
  Checkbox,
  Typography,
  Row,
  Col,
  Card,
  Button,
} from "antd";
import { NavLink } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/api/api";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const { Title } = Typography;

const Register = () => {
  const [registerUser, { isLoading, isError, error }] =
    useRegisterUserMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    try {
      const result = await registerUser(values).unwrap();
      console.log("Registration Successful:", result);
    } catch (err) {
      console.error("Registration Failed:", err);
    }
  };

  // Check if the error is FetchBaseQueryError and extract the message
  const getErrorMessage = () => {
    if (error && "data" in error) {
      const fetchError = error as FetchBaseQueryError;
      return fetchError.data?.message || "Registration failed";
    }
    return "Registration failed";
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
            Register Your Account
          </Title>

          <Form
            name="registerForm"
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
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  min: 6,
                  message: "Password must be at least 6 characters long!",
                },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            {/* Use Ant Design Button for form submission */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={isLoading}
              >
                Register
              </Button>
            </Form.Item>

            {/* Show error message if registration fails */}
            {isError && <div style={{ color: "red" }}>{getErrorMessage()}</div>}

            <div style={{ textAlign: "center" }}>
              <NavLink to="/login">Login</NavLink>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
