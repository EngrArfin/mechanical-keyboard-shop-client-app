import {
  Layout,
  Row,
  Col,
  Card,
  Statistic,
  DatePicker,
  Table,
  List,
} from "antd";
import { Line } from "@ant-design/plots";
import moment from "moment";

const { Header, Content } = Layout;

const Report = () => {
  // Mock data
  const summaryData = {
    totalSales: 12000,
    totalOrders: 150,
    totalCustomers: 80,
    inventoryValue: 30000,
  };

  const salesData = [
    { date: "2024-10-01", sales: 400 },
    { date: "2024-10-02", sales: 600 },
    { date: "2024-10-03", sales: 300 },
    { date: "2024-10-04", sales: 800 },
    { date: "2024-10-05", sales: 700 },
  ];

  const productData = [
    {
      key: "1",
      productName: "K1 Pro",
      category: "Wireless",
      unitsSold: 120,
      revenue: 3600,
    },
    {
      key: "2",
      productName: "K2 Wired",
      category: "Wired",
      unitsSold: 90,
      revenue: 2700,
    },
    {
      key: "3",
      productName: "K3 Bluetooth",
      category: "Bluetooth",
      unitsSold: 70,
      revenue: 2100,
    },
  ];

  const lowStockData = [
    { key: "1", productName: "K2 Wireless", category: "Wireless", stock: 5 },
    { key: "2", productName: "K6 Bluetooth", category: "Bluetooth", stock: 8 },
  ];

  const reviews = [
    {
      author: "John Doe",
      content: "Great product, very comfortable to type on!",
      date: "2024-10-01",
    },
    {
      author: "Jane Smith",
      content: "Really love the build quality.",
      date: "2024-10-02",
    },
  ];

  // Chart configuration
  const salesConfig = {
    data: salesData,
    xField: "date",
    yField: "sales",
    height: 250,
    xAxis: {
      label: {
        formatter: (v: moment.MomentInput) => moment(v).format("MM-DD"),
      },
    },
  };

  // Column configuration for Tables
  const productColumns = [
    { title: "Product Name", dataIndex: "productName", key: "productName" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Units Sold", dataIndex: "unitsSold", key: "unitsSold" },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (text: any) => `$${text}`,
    },
  ];

  const stockColumns = [
    { title: "Product Name", dataIndex: "productName", key: "productName" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Stock", dataIndex: "stock", key: "stock" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "#fff", padding: "0 24px" }}>
        <h2>Shop Report</h2>
      </Header>
      <Content style={{ margin: "24px" }}>
        {/* Date Picker */}
        <DatePicker style={{ marginBottom: "16px" }} />

        {/* Summary Cards */}
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title="Total Sales"
                value={summaryData.totalSales}
                prefix="$"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Total Orders" value={summaryData.totalOrders} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Total Customers"
                value={summaryData.totalCustomers}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Inventory Value"
                value={summaryData.inventoryValue}
                prefix="$"
              />
            </Card>
          </Col>
        </Row>

        {/* Sales Trend Chart */}
        <Card title="Sales Over Time" style={{ marginTop: "24px" }}>
          <Line {...salesConfig} />
        </Card>

        {/* Top Selling Products Table */}
        <Card title="Top Selling Products" style={{ marginTop: "24px" }}>
          <Table
            columns={productColumns}
            dataSource={productData}
            pagination={{ pageSize: 5 }}
          />
        </Card>

        {/* Low Stock Products Table */}
        <Card title="Low Stock Products" style={{ marginTop: "24px" }}>
          <Table
            columns={stockColumns}
            dataSource={lowStockData}
            pagination={{ pageSize: 5 }}
          />
        </Card>

        {/* Customer Feedback */}
        <Card title="Customer Feedback" style={{ marginTop: "24px" }}>
          <List
            dataSource={reviews}
            renderItem={(item) => (
              <List.Item>
                <strong>{item.author}</strong>
                <div>{item.content}</div>
                <small>{item.date}</small>
              </List.Item>
            )}
          />
        </Card>
      </Content>
    </Layout>
  );
};

export default Report;
