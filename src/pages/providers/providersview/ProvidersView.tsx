import { Button, Space, Table, Typography } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import styles from "./Providers.module.css";
import { TablePaginationPosition } from "../../orders/createorder/CreateOrder";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";

interface Props {
  loading: boolean;
  dataSource: any[];
  onOpen: Function;
}

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  phone: number;
}

function ProvidersView({ loading, dataSource, onOpen }: Props) {
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
    {
      title: "delete",
      key: "delete",
      render: (_, record) => (
        <Space size={"middle"}>
          <Button>
            <DeleteFilled />
          </Button>
        </Space>
      ),
    },
    {
      title: "edit",
      key: "edit",
      render: (_, record) => (
        <Space size={"middle"}>
          <Button>
            <EditOutlined />
          </Button>
        </Space>
      ),
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
        <Typography.Title level={4}>Providers</Typography.Title>
        <Button type="primary" onClick={() => onOpen()}>
          New Provider
        </Button>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          onChange={onChange}
          pagination={{
            pageSize: 5,
            position: ["bottomCenter" as TablePaginationPosition],
          }}></Table>
      </Space>
    </div>
  );
}

export default ProvidersView;
