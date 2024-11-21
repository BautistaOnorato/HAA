import { MONTHS } from '../../funcs/utils'
import type { Episode } from '../../types/episode'
import Accordion from '../common/Accordion'
import EpisodeLargeCard from './EpisodeLargeCard'
import styles from './episodes.module.css'

interface AllEpisodesProps {
  episodes: Episode[]
}

const episodesToRecord = (episodes: Episode[]) => {
  return episodes.reduce((acc: Record<string, Episode[]>, episode) => {
    const date = new Date(episode.date)
    const month = date.getMonth()
    const year = date.getFullYear()

    if (!acc[`${MONTHS[month]} ${year}`]) {
      acc[`${MONTHS[month]} ${year}`] = []
    }

    acc[`${MONTHS[month]} ${year}`].push(episode)

    return acc
  }, {})
}

const AllEpisodes = ({ episodes }: AllEpisodesProps) => {
  return (
    <div className={styles.all_episodes}>
      {Object.keys(episodesToRecord(episodes)).map((key) => (
        <Accordion key={key} title={key}>
          {episodesToRecord(episodes)[key].map((episode) => (
            <EpisodeLargeCard key={episode.id} episode={episode} />
          ))}
        </Accordion>
      ))}
    </div>
  )
}

export default AllEpisodes