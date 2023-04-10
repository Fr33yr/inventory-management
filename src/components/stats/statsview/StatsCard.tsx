import { IStatsData } from "../../../models/data/stats.model";
import styles from "./StatsCard.module.css";

interface Props {
  data: IStatsData;
}

// Este componente se encarga renderizar
// informacion de las cards

function StatsCard({ data }: Props) {
  return (
    <div className={styles.statscard}>
      <p className={styles.statcardname}>{data.name}</p>
      <p className={styles.statcardstat}>{data.stat}</p>
    </div>
  );
}

export default StatsCard;
