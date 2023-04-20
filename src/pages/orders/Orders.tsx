import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../../services/api/dummy";
import CreateOrder from "./createorder/CreateOrder";
import OrderPreview from "./orderpreview/OrderPreview";
import styles from './Orders.module.css'

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.ordersview}>
      <CreateOrder />
      <OrderPreview />
    </div>
  );
}
export default Orders;
