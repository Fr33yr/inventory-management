import { Typography, Space, Card } from "antd";
import { Stats, Chart, DashboardTable } from "../../components/index";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../../services/api";
import {useState,useEffect} from 'react'

function Dashboard() {
  
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Stats />
      <div>
        <DashboardTable />
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
