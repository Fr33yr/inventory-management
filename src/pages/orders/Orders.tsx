import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../../services/api/dummy";
import OrdersView from "./ordersview/OrdersView";
import CreateOrder from "./createorder/CreateOrder";

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
     <CreateOrder/>
      <OrdersView />
    </>
  );
}
export default Orders;
