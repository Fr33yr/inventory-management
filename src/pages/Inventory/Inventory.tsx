import { useEffect, useState } from "react";
import InventoryView from "./inventoryview/InventoryView";
import { getDocuments } from "../../../services/api/firebase";
import type { ColumnsType, TableProps } from "antd/es/table";
import InventoryForm from "./inventoryform/InventoryForm";
import {setProduct, clearProduct, setAllProducts} from '../../redux/slices/productsSlices'
import { Button, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../hooks";

interface DataType {
  key: React.Key;
  id: string;
  barcode: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  brand: string;
  expirationDate: string;
}

function Inventory() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getDocuments("products")
      .then((res: any) => {
        if (res.data) {
          dispatch(setAllProducts(res.data))
        } else if (res.message) {
          console.log(res.message);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFormOpen = (props:DataType) => {
    //dispatch(setProduct(props))
    setShowForm(true);
  };

  const handleUpdateForm = (props:DataType) => {
    dispatch(setProduct(props))
    setShowForm(true);
    setIsEditing(true)
  };

  const handleFormClose = () => {
    dispatch(clearProduct())
    setShowForm(false);
    setIsEditing(false)
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a: any, b: any) => a.price - b.price,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      filters: products
        .map((item: any) => ({ text: item.brand, value: item.brand }))
        .filter(
          (obj, index, self) =>
            index === self.findIndex((elem) => elem.text === obj.text)
        ),
    },
    {
      title: "Category",
      dataIndex: "category",
      filters: products
        .map((item: any) => ({ text: item.category, value: item.category }))
        .filter(
          (obj, index, self) =>
            index === self.findIndex((elem) => elem.text === obj.text)
        ),
      onFilter: (value: any, record: DataType) =>
        record.category.indexOf(value) === 0,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.stock - b.stock,
    },
    {
      title: "Expiration",
      dataIndex: "expirationDate",
      key: "expirationDate",
    },
    {
      title: "Edit",
      key: "edit",
      render: (_, record) => (
        <Space size={"middle"}>
          <Button onClick={() => handleUpdateForm(record)}>
            <EditOutlined />
          </Button>
        </Space>
      ),
    },
  ];


  return (
    <>
      <InventoryView
        loading={loading}
        dataSource={products}
        columns={columns}
        onOpen={handleFormOpen}
      />
      {showForm && <InventoryForm onClose={handleFormClose} isEditing={isEditing}/>}
    </>
  );
}
export default Inventory;
