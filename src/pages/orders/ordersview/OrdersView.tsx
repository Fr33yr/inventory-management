import { Button, Space, Table, Typography } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import styles from './Orders.module.css'

interface Props {
  loading: boolean;
  dataSource: any[];
}

interface DataType {
  key: React.Key;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  total: number;
}

function OrdersView({ loading, dataSource }: Props) {
  const columns: ColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      sortDirections: ['descend'],
      render: (value) => <span>${value}</span>,
    },
    {
      title: "DiscountedPrice",
      dataIndex: "discountedPrice",
      sorter: (a, b) => a.discountedPrice - b.discountedPrice,
      sortDirections: ['descend'],
      render: (value) => <span>${value}</span>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
      sortDirections: ['descend'],
    },
    {
      title: "Total",
      dataIndex: "total",
      sorter: (a, b) => a.total - b.total,
      sortDirections: ['descend'],
    }
  ]

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };


  return (
    <div className={styles.ordersview}>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Orders</Typography.Title>
        <Button type="primary">New Order</Button>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          onChange={onChange}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </div>
  );
}

export default OrdersView;
