import { Avatar, Space, Table, Typography } from "antd";
import styles from "../Providers.module.css";

interface Props {
  loading: boolean;
  dataSource: any[];
}

function ProvidersView({ loading, dataSource }: Props) {
    
  return (
    <div>
      <Space size={20} className={styles.spaceproviders} direction="vertical">
        <Typography.Title level={4}>Customers</Typography.Title>
        <Table
          loading={loading}
          columns={[
            {
              title: "First Name",
              dataIndex: "firstName",
            },
            {
              title: "LastName",
              dataIndex: "lastName",
            },
            {
              title: "Phone",
              dataIndex: "phone",
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </div>
  );
}

export default ProvidersView;
