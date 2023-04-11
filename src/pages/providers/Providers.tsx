import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getProviders } from "../../../services/api";

function Providers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getProviders().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} style={{width:1000}} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
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
        }}></Table>
    </Space>
  );
}
export default Providers;
