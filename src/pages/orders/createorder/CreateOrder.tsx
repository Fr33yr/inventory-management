import { Table } from "antd";
import styles from "./CreateOrder.module.css";
import useViewModel from "./ViewModel";


export type TablePaginationPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";

function CreateOrder() {
  const {columns, handleSearch, Search, data} = useViewModel()

  return (
    <div className={styles.createorders}>
      <h3>Create order</h3>
      <div className={styles.content}>
        <div className={styles.textinput}>
          <Search
            placeholder="Write name product"
            onSearch={handleSearch}
            allowClear
          />
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 5,
            position: ["bottomCenter" as TablePaginationPosition],
          }}
          scroll={{ y: 200 }}
          size="small"
        />
      </div>
    </div>
  );
}

export default CreateOrder;
