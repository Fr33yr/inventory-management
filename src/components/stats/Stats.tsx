import StatsCard from "./statscard/StatsCard";
import { fakeStats } from "../../utils/fakeStats";
import { IStatsData } from "models/data/stats.model";
import styles from './Stats.module.css'

function Stats() {
  return (
    <div className={styles.statscontainer}>
      {fakeStats &&
        fakeStats.map((stat: IStatsData) => <StatsCard data={stat} />)}
    </div>
  );
}

export default Stats;
