import { useEffect, useState } from "react";
import { Card } from "antd";
import { getRevenue } from "../../../services/api/dummy";
import { Line } from "react-chartjs-2";
import { Utils } from "../../utils/months";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

//  Este componente se encarga de gestionar la
//  logica y la informacion de la chart
interface DataSets {
  label: string;
  data: number[];
}

interface Props {
  chartData: {
    labels: string[];
    datasets: DataSets[];
  };
}

function Chart() {
  const [reveneuData, setReveneuData] = useState<{
    labels: string[];
    datasets: DataSets[];
  }>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const data = res.carts.map((cart: any) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels: Utils(12).map((month: string) => month),
        datasets: [
          {
            label: "Revenue",
            tension: 0.5,
            fill: true,
            data: data,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            pointRadius: 4,
            pointBorderColor: "rgb(53, 162, 235)",
            pointBackgroundColor: "rgb(53, 100, 235)",
            yAxisID: "y1",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,

    plugins: {
      title: {
        display: true,
        text: "Earnings during the year",
      },
    },
    scales: {
      y: {
        position: "right" as const,
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Line data={reveneuData} options={options} />
    </Card>
  );
}

export default Chart;
