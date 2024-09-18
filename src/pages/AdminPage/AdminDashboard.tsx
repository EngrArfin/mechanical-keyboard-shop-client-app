import {
  Layout,
  Breadcrumb,
  Card,
  Col,
  Row,

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

const { Content } = Layout;
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
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
