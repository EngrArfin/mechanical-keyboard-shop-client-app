import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Avatar,
  Card,
  Row,
  Col,
  List,
  Typography,
} from "antd";
import {
  UserOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

const UserDashboard: React.FC = () => {
  const menuItems = [
    { key: "account", icon: <UserOutlined />, label: "Account Information" },
    { key: "orders", icon: <ShoppingCartOutlined />, label: "Order History" },
    { key: "settings", icon: <SettingOutlined />, label: "Settings" },
    { key: "logout", icon: <LogoutOutlined />, label: "Logout" },
  ];

  const orderData = [
    {
      orderId: "ORD123456",
      date: "2024-09-15",
      status: "Shipped",
      total: "$120.00",
    },
    {
      orderId: "ORD123457",
      date: "2024-09-12",
      status: "Delivered",
      total: "$89.99",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <Avatar size={80} icon={<UserOutlined />} />
          <Title level={4} style={{ color: "white", marginTop: "10px" }}>
            Md Samsel Arfin
          </Title>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["account"]}
          mode="inline"
          items={menuItems}
        />
      </Sider>

      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Breadcrumb style={{ padding: "16px 24px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
        </Header>

        <Content style={{ margin: "16px 24px", minHeight: 280 }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Account Information" bordered={false}>
                <List>
                  <List.Item>
                    <Text strong>First Name:</Text> <Text>Md Samsel</Text>
                  </List.Item>
                  <List.Item>
                    <Text strong>Last Name:</Text> <Text>Arfin</Text>
                  </List.Item>
                  <List.Item>
                    <Text strong>Email:</Text>{" "}
                    <Text>arfin.cse.green.edu.bd@gmail.com</Text>
                  </List.Item>
                  <List.Item>
                    <Text strong>Telephone:</Text> <Text>01952487468</Text>
                  </List.Item>
                </List>
              </Card>
            </Col>

            <Col span={16}>
              <Card title="Order History" bordered={false}>
                <List
                  itemLayout="horizontal"
                  dataSource={orderData}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={`Order ID: ${item.orderId}`}
                        description={`Date: ${item.date}`}
                      />
                      <div>Status: {item.status}</div>
                      <div>Total: {item.total}</div>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          User Dashboard ©2024 Created by Md Samsel Arfin
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserDashboard;
