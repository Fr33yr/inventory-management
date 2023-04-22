import { Button, Space, Table, InputNumber } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import styles from "./OrderPreview.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { removeItem } from "../../../redux/slices/orderSlice";
import { OrderProduct } from "models";

interface DataType {
  name: string;
  amount: number;
  unitPrice: number;
  total: number;
}

type TablePaginationPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";

function OrderPreview() {
  const dispatch = useAppDispatch();
  const { products, total } = useAppSelector((state) => state.orders);

  const columns: ColumnsType<OrderProduct> = [
    {
      title: "delete",
      key: "delete",
      render: (_, record) => (
        <Space size={"middle"}>
          <Button onClick={() => dispatch(removeItem(record.productId))}>
            <DeleteFilled />
          </Button>
        </Space>
      ),
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "amount",
      key: "amount",
      render: (_, record) => (
        <Space>
          <InputNumber
            defaultValue={record.amount}
            max={record.stock}
            min={0}
          />
        </Space>
      ),
    },
    {
      title: "unitPrice",
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: "total",
      dataIndex: "total",
      key: "total",
    },
  ];

  return (
    <div className={styles.orderpreview}>
      <h3>Order detail</h3>
      <Table
        columns={columns}
        dataSource={products}
        pagination={{
          pageSize: 5,
          position: ["bottomCenter" as TablePaginationPosition],
        }}
        scroll={{ y: 220 }}
        size="small"
      />
      <Button type="primary" className={styles.paybtn}>
        Pay
      </Button>
    </div>
  );
}

export default OrderPreview;
