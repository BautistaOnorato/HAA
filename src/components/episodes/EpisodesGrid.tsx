import type { Episode } from '../../types/episode'
import EpisodeCard from './EpisodeCard'
import styles from './episodes.module.css'

interface EpisodesGridProps {
  episodes: Episode[]
}

const EpisodesGrid = ({ episodes }: EpisodesGridProps) => {
  return (
    <div className={styles.episodes_grid}>
      {
        episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))
      }
    </div>
  )
}

export default EpisodesGrid