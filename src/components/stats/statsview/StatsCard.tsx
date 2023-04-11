import { IStatsData } from "../../../models/data/stats.model";
import styles from "./StatsCard.module.css";
import { Card, Space, Statistic } from "antd";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface Props {
  data: IStatsData;
}

// Este componente se encarga renderizar
// informacion de las cards

function StatsCard({ data }: Props) {
  return (
    <div className={styles.statscard}>
      {data.name === "Orders" ? (
        <Card>
          <Space direction="horizontal">
            <ShoppingCartOutlined
              style={{
                color: "white",
                backgroundColor: "#96F33C",
                borderRadius: 16,
                fontSize: 24,
                padding: 8,
              }}
            />
            <Statistic title={data.name} value={data.stat} />
          </Space>
        </Card>
      ) : data.name === "Inventory" ? (
        <Card>
          <Space direction="horizontal">
            <ShoppingOutlined
              style={{
                color: "white",
                backgroundColor: "rgba(0,0,255,0.5)",
                borderRadius: 16,
                fontSize: 24,
                padding: 8,
              }}
            />
            <Statistic title={data.name} value={data.stat} />
          </Space>
        </Card>
      ) : data.name === "Customers" ? (
        <Card>
          <Space direction="horizontal">
            <UserOutlined
              style={{
                color: "white",
                backgroundColor: "rgba(255,0,0,0.5)",
                borderRadius: 16,
                fontSize: 24,
                padding: 8,
              }}
            />
            <Statistic title={data.name} value={data.stat} />
          </Space>
        </Card>
      ) : data.name === "Revenue" ? (
        <Card>
          <Space direction="horizontal">
            <DollarCircleOutlined
              style={{
                color: "white",
                backgroundColor: "#E3DE3F",
                borderRadius: 16,
                fontSize: 24,
                padding: 8,
              }}
            />
            <Statistic title={data.name} value={data.stat} />
          </Space>
        </Card>
      ) : null}
    </div>
  );
}

export default StatsCard;
