import {
  Button,
  Checkbox,
  Form,
  Input,
  Space,
  Row,
  Col,
  Typography,
  Card,
} from "antd";
import type { FormProps } from "antd";
import { NavLink } from "react-router-dom";

const { Title } = Typography;

const Register = () => {
  type FieldType = {
    username?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
    remember?: boolean;
  };

  // Handler for successful form submission
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  // Handler for failed form submission
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
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
            onFinishFailed={onFinishFailed}
          >
            {/* Username Field */}
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>

            {/* Email Field */}
            <Form.Item<FieldType>
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
            <Form.Item<FieldType>
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Space.Compact>
                <Input style={{ width: "20%" }} defaultValue="+88" disabled />
                <Input
                  style={{ width: "80%" }}
                  placeholder="Enter your phone number"
                />
              </Space.Compact>
            </Form.Item>

            {/* Password Field */}
            <Form.Item<FieldType>
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

            {/* Confirm Password Field */}
            <Form.Item<FieldType>
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

            {/* Remember Me Checkbox */}
            <Form.Item<FieldType> name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
            </Form.Item>
            <div style={{ textAlign: "center" }}>
              <p style={{ marginRight: "10px" }}>Already have an account?</p>
              <NavLink to="/login">Login</NavLink>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
