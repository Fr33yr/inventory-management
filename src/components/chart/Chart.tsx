import { useState } from "react";
import ChartCard from "./chartview/ChartCard";
import { Utils } from "../../utils/months";

//  Este componente se encarga de gestionar la
//  logica y la informacion de la chart

function Chart() {
  const [salesData, setSalesData] = useState({
    labels: Utils({ count: 7 }),
    datasets: [
      {
        label: 'Sales per month',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  });

  return (
    <div>
      <ChartCard chartData={salesData} />
    </div>
  );
}

export default Chart;
