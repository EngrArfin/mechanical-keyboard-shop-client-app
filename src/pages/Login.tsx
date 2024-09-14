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
import type { FormProps } from "antd";

const { Title } = Typography;

const Login = () => {
  type FieldType = {
    username?: string;
    password?: string;
    remember?: boolean;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

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
            Login to Your Account
          </Title>

          <Form
            name="loginForm"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            {/* Username Field */}
            <Form.Item<FieldType>
              label="Email/Username "
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Enter your email / username" />
            </Form.Item>

            {/* Password Field */}
            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            {/* Remember Me Checkbox */}
            <Form.Item<FieldType> name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>

            {/* Optional Links */}
            <div style={{ textAlign: "center" }}>
              <a href="#forgot-password" style={{ marginRight: "10px" }}>
                Forgot Password?
              </a>
              <a href="#register">Register Now</a>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
