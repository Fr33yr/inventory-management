import { Stats, Chart, DashboardTable } from "../../components/index";

function Dashboard() {
  return (
    <div>
      <Stats />
      <div>
        <DashboardTable />
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
