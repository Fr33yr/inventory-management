import StatsCard from "./statsview/StatsCard";
import { fakeStats } from "../../utils/fakeStats";
import { IStatsData } from "models/data/stats.model";
import styles from "./Stats.module.css";
import { Space } from "antd";

// Este componente se encarga gestionar la logica y los datos
// de las cards

function Stats() {
  return (
    <div className={styles.statscontainer}>
      <Space>
        {fakeStats &&
          fakeStats.map((stat: IStatsData) => <StatsCard data={stat} />)}
      </Space>
    </div>
  );
}

export default Stats;
