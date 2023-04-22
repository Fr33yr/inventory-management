import { Space, Table, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import styles from "./CreateOrder.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addItem } from "../../../redux/slices/orderSlice";
import { IProduct } from "models";
import { useEffect, useState } from "react";

interface DataType {
  name: string;
  amount: number;
  unitPrice: number;
}

export type TablePaginationPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";

function CreateOrder() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.orders);
  const { Search } = Input;
  // export interface IProduct {
  //   id: string;
  //   barcode:string;
  //   name: string;
  //   category: string;
  //   price: number;
  //   quantity: string;
  //   brand: string
  // }

  const columns: ColumnsType<IProduct> = [
    {
      title: "delete",
      key: "delete",
      render: (_, record: IProduct) => (
        <Space size={"middle"}>
          <Button
            onClick={() => dispatch(addItem(record))}
            disabled={
              products.find((obj) => obj.productId === record.id) ? true : false
            }>
            +
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
      title: "stock",
      key: "amount",
      dataIndex: "amount",
    },
    {
      title: "unitPrice",
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
  ];
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    setData([
      {
        name: "apple",
        quantity: 3,
        price: 5.0,
        id: "asdal109u",
        brand: "coke",
        category: "drink",
        barcode: "",
      },
      {
        name: "banana",
        quantity: 3,
        price: 5.0,
        id: "asdax109u",
        brand: "coke",
        category: "drink",
        barcode: "",
      },
      {
        name: "peach",
        quantity: 3,
        price: 5.0,
        id: "asdad1z9u",
        brand: "coke",
        category: "drink",
        barcode: "",
      },
      {
        name: "grapes",
        quantity: 3,
        price: 5.0,
        id: "asdap109u",
        brand: "coke",
        category: "drink",
        barcode: "",
      },
    ]);
  }, []);

  const handleSearch = (value: string) => {
    const filteredData = data.filter((product) =>
      product.name === value
        ? product.name.toLowerCase().includes(value.toLowerCase())
        : null
    );
    !value ? data : setData(filteredData);
  };

  return (
    <div className={styles.createorders}>
      <h3>Create order</h3>
      <div className={styles.content}>
        <div className={styles.textinput}>
          <Search
            placeholder="Write name product"
            onSearch={handleSearch}
            allowClear
          />
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 5,
            position: ["bottomCenter" as TablePaginationPosition],
          }}
          scroll={{ y: 200 }}
          size="small"
        />
      </div>
    </div>
  );
}

export default CreateOrder;
