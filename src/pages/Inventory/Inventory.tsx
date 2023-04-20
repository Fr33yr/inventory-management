import { useEffect, useState } from "react";
import InventoryView from "./inventoryview/InventoryView";
import { getDocuments } from "../../../services/api/firebase";
import type { ColumnsType, TableProps } from "antd/es/table";
import InventoryForm from "./inventoryform/InventoryForm";
import * as XLSX from "xlsx";
import { Button } from "antd";

interface DataType {
  key: React.Key;
  title: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
}

interface MyFormValues {
  title: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
}

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getDocuments("products")
      .then((res: any) => {
        if (res.data) {
          setDataSource(res.data);
        } else if (res.message) {
          console.log(res.message);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFormOpen = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

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
        .map((item: any) => ({ text: item.brand, value: item.brand }))
        .filter(
          (obj, index, self) =>
            index === self.findIndex((elem) => elem.text === obj.text)
        ),
    },
    {
      title: "Category",
      dataIndex: "category",
      filters: dataSource
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
  ];

  const handleExcel = () => {
    // Convertimos los datos a una hoja de cálculo en formato Excel
    const headers = ["id","barcode","name", "price", "brand", "category", "stock"];
    const sheet = XLSX.utils.json_to_sheet(dataSource, { header: headers });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, "Datos");

    // Descargamos el archivo Excel
    const fileName = "datos.xlsx";
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <>
      <Button type="primary" onClick={handleExcel}>Descargar Excel</Button>
      <InventoryView
        loading={loading}
        dataSource={dataSource}
        columns={columns}
        onOpen={handleFormOpen}
      />
      {showForm && <InventoryForm onClose={handleFormClose} />}
    </>
  );
}
export default Inventory;
