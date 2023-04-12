import { useEffect, useState } from "react";
import { getInventory } from "../../../services/api";
import InventoryView from "./inventoryview/InventoryView";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <InventoryView loading={loading} dataSource={dataSource} />
    </>
  );
}
export default Inventory;