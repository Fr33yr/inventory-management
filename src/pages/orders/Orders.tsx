import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../../services/api";
import OrdersView from "./ordersview/OrdersView";

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
    <>
      <OrdersView loading={loading} dataSource={dataSource} />
    </>
  );
}
export default Orders;
