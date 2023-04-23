import { Button, Space, Table, InputNumber } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  removeItem,
  setTotal,
  setAmount,
} from "../../../redux/slices/orderSlice";
import { OrderProduct } from "models";

export default function useViewModel() {
  const dispatch = useAppDispatch();
  const { products, total } = useAppSelector((state) => state.orders);

  const columns: ColumnsType<OrderProduct> = [
    {
      title: "delete",
      key: "delete",
      render: (_, record) => (
        <Space size={"middle"}>
          <Button onClick={() => handleDelete(record)}>
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
      render: (_, record: OrderProduct) => (
        <Space>
          <InputNumber
            defaultValue={record.amount}
            max={record.stock}
            min={0}
            onChange={(value: any) => handleChange(value, record)}
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

  const handleChange = (value: number, record: OrderProduct) => {
    dispatch(
      setAmount({
        unitPrice: record.unitPrice,
        productId: record.productId,
        amount: value,
      })
    );
    dispatch(setTotal());
  };

  const handleDelete = (record: OrderProduct) => {
    dispatch(removeItem(record.productId));
    dispatch(setTotal());
  };

  const handlePay = () => {};

  return {
    handleChange,
    handleDelete,
    handlePay,
    columns,
    products,
    total,
  };
}
