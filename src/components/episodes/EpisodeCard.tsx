import { formatDate } from '../../funcs/utils'
import SpotifyIcon from '../../icons/SpotifyIcon'
import YoutubeIcon from '../../icons/YoutubeIcon'
import type { Episode } from '../../types/episode'
import styles from './episodes.module.css'

interface EpisodeCardProps {
  episode: Episode
}

const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  return (
    <div className={styles.episode_card}>
      <div className={styles.episode_card_links}>
        <a href={episode.youtube} className={`${styles.episode_card_link} ${styles.episode_card_link_youtube}`}>
          <span>YouTube</span> <YoutubeIcon size={32} />
        </a>
        {episode.spotify && (
          <a href={episode.spotify} className={`${styles.episode_card_link} ${styles.episode_card_link_spotify}`}>
            <span>Spotify</span> <SpotifyIcon size={32} />
          </a>
        )}
      </div>
      <img className={styles.episode_card_image} src={episode.image_url} alt={episode.title + " image"} />
      <div className={styles.episode_card_info}>
        <p className={styles.episode_card_title}>{episode.title}</p>
        <p className={styles.episode_card_date}>{formatDate(new Date(episode.date))}</p>
        <p className={styles.episode_card_tags}>{episode.tags.join(", ")}</p>
      </div>
    </div>
  )
}

export default EpisodeCard