import { Space, Table, Button, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addItem, setTotal } from "../../../redux/slices/orderSlice";
import { IProduct } from "models";
import { useEffect, useState } from "react";

export default function useViewModel() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.orders);
  const { Search } = Input;

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

  const columns: ColumnsType<IProduct> = [
    {
      title: "delete",
      key: "delete",
      render: (_, record: IProduct) => (
        <Space size={"middle"}>
          <Button
            onClick={() => handleAddProduct(record)}
            disabled={
              products.find((obj) => obj.productId === record.id) ? true : false
            }
          >
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
      dataIndex: "quantity",
    },
    {
      title: "unitPrice",
      dataIndex: "price",
      key: "price",
    },
  ];

  
  const handleSearch = (value: string) => {
    const filteredData = data.filter((product) =>
      product.name === value
        ? product.name.toLowerCase().includes(value.toLowerCase())
        : null
    );
    !value ? data : setData(filteredData);
  };

  const handleAddProduct = (record: IProduct) => {
    dispatch(addItem(record));
    dispatch(setTotal());
  };

  return {
    handleSearch,
    handleAddProduct,
    columns,
    products,
    Search,
    data
  }
}