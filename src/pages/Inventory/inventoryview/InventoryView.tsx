import { Space, Table, Typography, Button } from "antd";
import styles from "./Inventory.module.css";
import type { ColumnsType, TableProps } from "antd/es/table";
import { TablePaginationPosition } from "../../orders/createorder/CreateOrder";
import * as XLSX from "xlsx";

interface Props {
  loading: boolean;
  dataSource: any[];
  columns: any[];
  onOpen: Function;
}

interface DataType {
  key: React.Key;
  title: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
}

function InventoryView({ loading, dataSource, columns, onOpen }: Props) {
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleExcel = () => {
    // Convertimos los datos a una hoja de cálculo en formato Excel
    const headers = [
      "id",
      "barcode",
      "name",
      "price",
      "brand",
      "category",
      "stock",
    ];
    const sheet = XLSX.utils.json_to_sheet(dataSource, { header: headers });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, "Datos");

    // Descargamos el archivo Excel
    const fileName = "datos.xlsx";
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className={styles.inventoryview}>
      <Space size={20} style={{ width: 1000 }} direction="vertical">
        <Typography.Title level={4}>Inventory</Typography.Title>
        <div className={styles.botones}>
          <Button type="primary" onClick={handleExcel} className={styles.excel}>
            Descargar Excel
          </Button>
          <Button type="primary" onClick={() => onOpen()} className={styles.add}>
            Add Product
          </Button>
        </div>

        <Table
          loading={loading}
          columns={columns}
          onChange={onChange}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
            position: ["bottomCenter" as TablePaginationPosition],
          }}></Table>
      </Space>
    </div>
  );
}

export default InventoryView;
