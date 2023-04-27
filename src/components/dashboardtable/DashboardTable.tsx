import { useEffect, useState } from "react";
import { getDocuments } from "../../../services/api/firebase";
import { Space, Table, Typography } from "antd";
import styles from "./DashboardTable.module.css";
import { EyeOutlined } from "@ant-design/icons";

// Este componente renderiza un titulo y una tabla
// que muestra informacion

function DashboardTable() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDocuments("orders").then((res: any) => {
      const data = res.data.slice(0, 3);
      setDataSource(data);
      setLoading(false);
    });
  }, []);

  const handleClick = () => {
    console.log("holaaa");
  };

  return (
    <div className={styles.dashboardtable}>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Order Date",
            dataIndex: "date",
          },
          {
            title: "Cliente",
            dataIndex: "cliente",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
          {
            title: "Detalle",
            render: () => (
              <Space>
                <EyeOutlined onClick={handleClick} />
              </Space>
            ),
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
        size="middle"></Table>
    </div>
  );
}

export default DashboardTable;
