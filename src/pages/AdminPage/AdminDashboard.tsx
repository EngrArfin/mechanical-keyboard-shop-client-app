import {
  Layout,
  Breadcrumb,
  Card,
  Col,
  Row,
  Table,
  Tag,
  /* Typography, */
} from "antd";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const { Content, Footer } = Layout;
/* const { Title } = Typography; */

const AdminDashboard: React.FC = () => {
  /* const [collapsed, setCollapsed] = useState(false); */

  // Sample data for the chart
  const salesData = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 600 },
    { name: "Mar", sales: 700 },
    { name: "Apr", sales: 800 },
    { name: "May", sales: 900 },
  ];

  // Sample data for product management table
  const productColumns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (stock: number) => (
        <Tag color={stock > 0 ? "green" : "red"}>
          {stock > 0 ? "In Stock" : "Out of Stock"}
        </Tag>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div>
          <a style={{ marginRight: "10px" }}>Edit</a>
          <a>Delete</a>
        </div>
      ),
    },
  ];

  const productData = [
    {
      key: "1",
      name: "Custom Mechanical Keyboard",
      brand: "Keychron",
      stock: 12,
      price: "$120",
    },
    {
      key: "2",
      name: "RGB Mechanical Keyboard",
      brand: "Corsair",
      stock: 0,
      price: "$150",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Main Layout */}
      <Layout className="site-layout">
        {/* Content Area */}
        <Content style={{ margin: "16px" }}>
          {/* Breadcrumb */}
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>

          {/* Summary Cards */}
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Total Products" bordered={false}>
                120
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Total Sales" bordered={false}>
                $12,000
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Total Users" bordered={false}>
                300
              </Card>
            </Col>
          </Row>

          {/* Sales Chart */}
          <Row gutter={16} style={{ marginTop: "20px" }}>
            <Col span={24}>
              <Card title="Sales Overview" bordered={false}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <Line type="monotone" dataKey="sales" stroke="#00bfae" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </Col>
          </Row>

          {/* Product Management Table */}
          <Row gutter={16} style={{ marginTop: "20px" }}>
            <Col span={24}>
              <Card title="Product Management" bordered={false}>
                <Table columns={productColumns} dataSource={productData} />
              </Card>
            </Col>
          </Row>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center" }}>
          Mechanical Keyboard Admin Dashboard ©2024 Created by Samsel Arfin
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
