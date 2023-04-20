import { Space, Table, InputNumber, Button } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  name: string;
  amount: number;
  unitPrice: number;
}

function CreateOrder() {
  const data: DataType[] = [
    { name: "apple", amount: 3, unitPrice: 5.0},
    { name: "banana", amount: 3, unitPrice: 5.0},
    { name: "peach", amount: 3, unitPrice: 5.0},
    { name: "grapes", amount: 3, unitPrice: 5.0},
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: 'delete',
      key: 'delete',
      render: (_, record) => (
        <Space size={"middle"}>
          <Button onClick={()=>console.log("plus")}>+</Button>
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
      key: "amount",
      dataIndex: "amount"
    },
    {
      title: "unitPrice",
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
  ]

  return (
    <div>
      <h3>Create order</h3>
      <div>
        <Table columns={columns} dataSource={data}/>
      </div>
    </div>
  );
}

export default CreateOrder;
