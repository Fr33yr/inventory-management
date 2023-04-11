import { Typography, Space, Card } from "antd";
import { Stats, Chart, DashboardTable } from "../../components/index";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Dashboard() {
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Stats />
      <div>
        <DashboardTable />
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
