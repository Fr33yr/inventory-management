import { useEffect, useState } from "react";
import { Card } from "antd";
import { getRevenue } from "../../../services/api/dummy";
import { Line } from "react-chartjs-2";
import { Utils } from "../../utils/months";

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
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Line data={reveneuData} />
    </Card>
  );
}

export default Chart;
