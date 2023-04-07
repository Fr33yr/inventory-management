import styles from "./DashboardTable.module.css";

// Este componente renderiza un titulo y una tabla
// que muestra informacion 

function DashboardTable() {
  return (
    <div className={styles.dashboardtable}>
      <h3>Recent Orders</h3>
    </div>
  );
}

export default DashboardTable;
