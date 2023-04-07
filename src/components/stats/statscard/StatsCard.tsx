import {IStatsData} from '../../../models/data/stats.model'
import styles from './StatsCard.module.css'

interface Props {
    data: IStatsData
}

function StatsCard({data}:Props) {

  return (
    <div className={styles.statscard}>
      <p>{data.name}</p>
      <p>{data.stat}</p>
    </div>
  )
}

export default StatsCard