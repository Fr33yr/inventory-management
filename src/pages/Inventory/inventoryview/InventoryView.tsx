import { Space, Table, Typography, Button } from "antd";
import styles from "../Inventory.module.css";
import type { ColumnsType, TableProps } from "antd/es/table";


interface Props {
  loading: boolean;
  dataSource: any[];
  columns: any[];
  setForm:Function;
  form:boolean;
}

interface DataType {
  key: React.Key;
  title: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
}


function InventoryView({ loading, dataSource, columns,setForm,form }: Props) {

  const handleToglee=()=>{
    setForm(!form)
  }

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };


  return (
    <div className={styles.inventoryview}>
      <Space size={20} style={{ width: 1000 }} direction="vertical">
        <Typography.Title level={4}>Inventory</Typography.Title>
        <Button type="primary" onClick={handleToglee}>Add Product</Button>

        <Table
          loading={loading}
          columns={columns}
          onChange={onChange}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </div>
  );
}

export default InventoryView;
