import { IStatsData } from "../../../models/data/stats.model";
import styles from "./StatsCard.module.css";
import { Card, Space, Statistic } from "antd";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {useState,useEffect} from 'react'
import {getProviders,getInventory,getOrders,getRevenue} from '../../../../services/api/dummy/index'


interface Props {
  data: IStatsData;
}

// Este componente se encarga renderizar
// informacion de las cards

function StatsCard({ data }: Props) {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getProviders().then((res) => {
      setCustomers(res.total);
    });
  }, []);
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
            <Statistic title={"Orders"} value={orders} />
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
            <Statistic title={"Inventory"} value={inventory} />
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
            <Statistic title={"Customers"} value={customers} />
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
            <Statistic title={"Renueve"} value={revenue} />
          </Space>
        </Card>
      ) : null}
    </div>
  );
}

export default StatsCard;
