import { Button, Space, Table, Typography } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import styles from "./Providers.module.css";

interface Props {
  loading: boolean;
  dataSource: any[];
  onOpen: Function
}

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  phone: number;
}

function ProvidersView({ loading, dataSource, onOpen}: Props) {
  const columns: ColumnsType<DataType> = [
    {
      title: "First Name",
      dataIndex: "name",
      filters: [
        {
          text: "Terry",
          value: "Terry",
        },
      ],
      filterSearch: true,
      onFilter: (value: any, record: DataType) =>
        record.firstName.startsWith(value),
      width: "30%",
    },
    {
      title: "Email",
      dataIndex: "email",
      filters: [
        {
          text: "Hills",
          value: "Hills",
        },
      ],
      filterSearch: true,
      onFilter: (value: any, record: DataType) =>
        record.lastName.startsWith(value),
      width: "30%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
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
    <div>
      <Space size={20} className={styles.spaceproviders} direction="vertical">
        <Typography.Title level={4}>Customers</Typography.Title>
        <Button type="primary" onClick={()=>onOpen()}>New Provider</Button>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          onChange={onChange}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </div>
  );
}

export default ProvidersView;
