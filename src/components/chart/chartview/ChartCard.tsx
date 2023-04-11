import React from "react";
import { Table } from "antd";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables} from "chart.js/auto";


// Este componente solo se encarga de renderizar
// el contenido de la chart

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

ChartJS.register(...registerables);

function ChartCard({ chartData }: Props) {
  return <Line data={chartData} />;
}

export default ChartCard;
