import { useEffect, useState } from "react";
import InventoryView from "./inventoryview/InventoryView";
import {getDocuments} from '../../../services/api/firebase'
import type { ColumnsType, TableProps } from "antd/es/table";
import {IMessage} from '../../models/index'

interface DataType {
  key: React.Key;
  title: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
}

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(()=>{
    getDocuments('products').then((res:any)=>{
      if(res.data){
        setDataSource(res.data)
      }else if(res.message){
        console.log(res.message)
      }
    })
    .catch((err) => console.log(err))
  },[])

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.price - b.price,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      filters: dataSource
        .map((item:any) => ({ text: item.brand, value: item.brand }))
        .filter(
          (obj, index, self) =>
            index === self.findIndex((elem) => elem.text === obj.text)
        ),
    },
    {
      title: "Category",
      dataIndex: "category",
      filters: dataSource
        .map((item:any) => ({ text: item.category, value: item.category }))
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
  ];
 
  return (
    <>
      <InventoryView loading={loading} dataSource={dataSource} columns={columns}/>
    </>
  );
}
export default Inventory;