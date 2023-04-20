import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  name: string;
  amount: number;
  unitPrice: number;
  total: number;
}

function OrdersView() {
  const data: DataType[] = [
    { name: "apple", amount: 3, unitPrice: 5.0, total: 15.0 },
    { name: "banana", amount: 3, unitPrice: 5.0, total: 15.0 },
    { name: "peach", amount: 3, unitPrice: 5.0, total: 15.0 },
    { name: "grapes", amount: 3, unitPrice: 5.0, total: 15.0 },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: 'delete',
      key: 'delete',
      render: (_, record) => (
        <Space size={"middle"}>
          <a >del</a>
        </Space>
      )
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "amount",
      dataIndex: "amount",
      key: "amount"
    },
    {
      title: "unitPrice",
      dataIndex: "unitPrice",
      key: "unitPrice"
    },
    {
      title: "total",
      dataIndex: "total",
      key: "total"
    }
  ]


  return (
    <div>
      <h3>Order detail</h3>
      <div>
        <Table columns={columns} dataSource={data}/>
      </div>
    </div>
  );
}

export default OrdersView;
