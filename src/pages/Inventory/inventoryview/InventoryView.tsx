import { Space, Table, Typography, Button} from "antd";
import styles from "../Inventory.module.css";
import type { ColumnsType, TableProps } from "antd/es/table";

interface Props {
  loading: boolean;
  dataSource: any[];
}

interface DataType {
  key: React.Key;
  title: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
}

function InventoryView({ loading, dataSource }: Props) {
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "title",
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
      filters: [
        {
          text: "Apple",
          value: "Apple",
        },
        {
          text: "OPPO",
          value: "OPPO",
        },
        {
          text: "Huawei",
          value: "Huawei",
        },
      ],
      onFilter: (value: string, record:DataType) => record.brand.indexOf(value) === 0,
    },
    {
      title: "Category",
      dataIndex: "category",
      filters: [
        {
          text: "smartphone",
          value: "smartphone",
        },
        {
          text: "laptops",
          value: "laptops",
        },
        {
          text: "fragrances",
          value: "fragrances",
        },
      ],
      onFilter: (value: string, record:DataType) => record.category.indexOf(value) === 0,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.stock - b.stock,
    },
  ];

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
        <Button type="primary">Add Product</Button>
        <Table
          loading={loading}
          columns={columns}
          onChange={onChange}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}></Table>
      </Space>
    </div>
  );
}

export default InventoryView;
