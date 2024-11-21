import styles from "./episodes.module.css";
import type { Episode } from "../../types/episode";
import YoutubeIcon from "../../icons/YoutubeIcon";
import SpotifyIcon from "../../icons/SpotifyIcon";
import { formatDate } from "../../funcs/utils";

interface EpisodeLargeCardProps {
  episode: Episode;
}

const EpisodeLargeCard = ({ episode }: EpisodeLargeCardProps) => {
  return (
    <div className={styles.episode_large_card}>
      <img
        className={styles.episode_large_card_image}
        src={episode.image_url}
        alt={episode.title + " image"}
      />
      <div className={styles.episode_large_card_info}>
        <p className={styles.episode_large_card_title}>{episode.title}</p>
        <p className={styles.episode_large_card_date}>{formatDate(new Date(episode.date))}</p>
        <p className={styles.episode_large_card_tags}>
          {episode.tags.join(", ")}
        </p>
      </div>
      <div className={styles.episode_large_card_links}>
        <a
          href={episode.youtube}
          className={`${styles.episode_large_card_link} ${styles.episode_large_card_link_youtube}`}
        >
          <YoutubeIcon size={24} />
          YouTube
        </a>
        {episode.spotify && (
          <a
            href={episode.spotify}
            className={`${styles.episode_large_card_link} ${styles.episode_large_card_link_spotify}`}
          >
            <SpotifyIcon size={24} />
            Spotify
          </a>
        )}
      </div>
    </div>
  );
};

export default EpisodeLargeCard;
