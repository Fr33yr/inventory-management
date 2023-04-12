import { Avatar, Rate, Space, Table, Typography } from "antd";
import styles from '../Orders.module.css'

interface Props {
  loading: boolean;
  dataSource: any[];
}

function OrdersView({ loading, dataSource }: Props) {
  return (
    <div className={styles.ordersview}>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Orders</Typography.Title>
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
              title: "DiscountedPrice",
              dataIndex: "discountedPrice",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Total",
              dataIndex: "total",
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

export default OrdersView;
