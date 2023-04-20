import { Space, Table, Button, Input } from "antd";
import {SearchOutlined} from '@ant-design/icons'
import type { ColumnsType } from "antd/es/table";
import styles from './CreateOrder.module.css'

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
      title: "stock",
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
    <div className={styles.createorders}>
      <h3>Create order</h3>
      <div className={styles.content}>
        <Input prefix={<SearchOutlined />}/>
        <Table columns={columns} dataSource={data}/>
      </div>
    </div>
  );
}

export default CreateOrder;
