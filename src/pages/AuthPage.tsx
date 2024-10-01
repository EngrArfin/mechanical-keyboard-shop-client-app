import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Card,
  Row,
  Col,
} from "antd";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../redux/api/api";

const { Title } = Typography;

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginUser] = useLoginUserMutation();
  const [registerUser] = useRegisterUserMutation();

  // Login Form Submission
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = async (values: any) => {
    try {
      const response = await loginUser(values).unwrap();
      console.log("Login Success:", response);
      // Handle successful login here, like storing the token
    } catch (err) {
      console.error("Login Failed:", err);
    }
  };

  // Registration Form Submission
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRegister = async (values: any) => {
    try {
      const response = await registerUser(values).unwrap();
      console.log("Registration Success:", response);
    } catch (err) {
      console.error("Registration Failed:", err);
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
            {isLogin ? "Login to Your Account" : "Register Your Account"}
          </Title>
          <Form
            layout="vertical"
            onFinish={isLogin ? handleLogin : handleRegister}
          >
            {/* Username Field */}
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>
            {!isLogin && (
              <>
                {/* Email Field */}
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
                {/* Phone Number Field */}
                <Form.Item
                  label="Phone Number"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input placeholder="Enter your phone number" />
                </Form.Item>
              </>
            )}
            {/* Password Field */}
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            {/* Confirm Password Field for Registration */}
            {!isLogin && (
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm your password" />
              </Form.Item>
            )}
            {/* Remember Me Checkbox for Login */}
            {isLogin && (
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            )}
            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                {isLogin ? "Login" : "Register"}
              </Button>
            </Form.Item>
            <div style={{ textAlign: "center" }}>
              <Button type="link" onClick={() => setIsLogin(!isLogin)}>
                {isLogin
                  ? "Need to register? Sign up here!"
                  : "Already have an account? Login here!"}
              </Button>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default AuthPage;
