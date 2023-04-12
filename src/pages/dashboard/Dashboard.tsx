import { Typography } from "antd";
import { Stats, Chart, DashboardTable } from "../../components/index";
import styles from './Dashboard.module.css'

function Dashboard() {
  
  return (
    <div className={styles.dashboard}>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Stats />
      <div className={styles.tables}>
        <DashboardTable />
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
