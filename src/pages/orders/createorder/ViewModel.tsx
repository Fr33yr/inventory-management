import { Space, Button, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addItem, setTotal } from "../../../redux/slices/orderSlice";
import { IProduct } from "models";
import { useEffect, useState } from "react";
import { productsData } from "../../../utils/fakeProducts";

export default function useViewModel() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.orders);
  const { Search } = Input;

  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    setData(productsData);
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
    if (!value || value === "") {
      setData(productsData);
    } else {
      const filteredData = data.filter((product) =>
        product.name === value
          ? product.name.toLowerCase().includes(value.toLowerCase())
          : null
      );
      setData(filteredData);
    }
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
    data,
  };
}
