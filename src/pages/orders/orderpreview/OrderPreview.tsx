import { Button, Space, Table, InputNumber } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  name: string;
  amount: number;
  unitPrice: number;
  total: number;
}

type TablePaginationPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";

function OrderPreview() {
  const data: DataType[] = [
    { name: "apple", amount: 1, unitPrice: 5.0, total: 5.0 },
    { name: "banana", amount: 1, unitPrice: 5.0, total: 5.0 },
    { name: "peach", amount: 1, unitPrice: 5.0, total: 5.0 },
    { name: "grapes", amount: 1, unitPrice: 5.0, total: 5.0 },
  ];

  const columns: ColumnsType<DataType> = [
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
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "amount",
      key: "amount",
      render: (_, record) => (
        <Space>
          <InputNumber defaultValue={record.amount} />
        </Space>
      ),
    },
    {
      title: "unitPrice",
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: "total",
      dataIndex: "total",
      key: "total",
    },
  ];
  return (
    <div>
      <h3>Order detail</h3>
      <div>
        <Table columns={columns} dataSource={data} pagination={{
            pageSize: 5,
            position: ["bottomCenter" as TablePaginationPosition],
          }}/>
      </div>
    </div>
  );
}

export default OrderPreview;
