import { useEffect, useState } from "react";
import { getDocuments } from "../../../services/api/firebase";
import { Table, Typography } from "antd";
import styles from './DashboardTable.module.css'

// Este componente renderiza un titulo y una tabla
// que muestra informacion 

function DashboardTable() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDocuments('orders').then((res:any) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.dashboardtable}>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </div>
  );
}

export default DashboardTable;
