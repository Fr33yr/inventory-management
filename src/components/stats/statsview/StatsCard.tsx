import {IStatsData} from '../../../models/data/stats.model'
import styles from './StatsCard.module.css'

interface Props {
    data: IStatsData
}

// Este componente se encarga renderizar
// informacion de las cards

function StatsCard({data}:Props) {

  return (
    <div className={styles.statscard}>
      <p>{data.name}</p>
      <p>{data.stat}</p>
    </div>
  )
}

export default StatsCard