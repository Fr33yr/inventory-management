import { Avatar, Rate, Space, Table, Typography } from "antd";
import styles from '../Inventory.module.css'

interface Props {
  loading: boolean;
  dataSource: any[];
}

function InventoryView({loading, dataSource}:Props) {
  return (
    <div className={styles.inventoryview}>
      <Space size={20} style={{ width: 1000 }} direction="vertical">
        <Typography.Title level={4}>Inventory</Typography.Title>
        <Table
          loading={loading}
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "Stock",
              dataIndex: "stock",
            },

            {
              title: "Brand",
              dataIndex: "brand",
            },
            {
              title: "Category",
              dataIndex: "category",
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </div>
  );
}

export default InventoryView;
