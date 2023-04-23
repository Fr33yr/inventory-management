import { Button, Table } from "antd";
import styles from "./OrderPreview.module.css";
import useViewModel from "./ViewModel";

type TablePaginationPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";

function OrderPreview() {
  const { columns, products, total } = useViewModel();

  return (
    <div className={styles.orderpreview}>
      <h3>Order detail</h3>
      <Table
        columns={columns}
        dataSource={products}
        pagination={{
          pageSize: 5,
          position: ["bottomCenter" as TablePaginationPosition],
        }}
        scroll={{ y: 220 }}
        size="small"
      />
      <p>Total: {total}</p>
      <Button type="primary" className={styles.paybtn}>
        Pay
      </Button>
    </div>
  );
}

export default OrderPreview;
