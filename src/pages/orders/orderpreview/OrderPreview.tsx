import { Button, Space, Table, InputNumber } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import styles from "./OrderPreview.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { removeItem, setTotal, setAmount } from "../../../redux/slices/orderSlice";
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
      render: (_, record:OrderProduct) => (
        <Space>
          <InputNumber
            defaultValue={record.amount}
            max={record.stock}
            min={0}
            onChange={(value:any)=>handleChange(value, record)}
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
      title: "subTotal",
      dataIndex: "subTotal",
      key: "subTotal",
    },
  ];
 
  const handleChange = (value:number, record:OrderProduct) => {
    dispatch(setAmount({unitPrice: record.unitPrice, productId: record.productId, amount: value}))
    dispatch(setTotal())
  }

  const handlePay = () => {

  }

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
      <p>Total: {total}</p>
      <Button type="primary" className={styles.paybtn} >
        Pay
      </Button>
    </div>
  );
}

export default OrderPreview;
