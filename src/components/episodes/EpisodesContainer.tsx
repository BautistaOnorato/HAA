import { useEffect, useMemo, useState } from 'react'
import { TagEnum, type Episode } from '../../types/episode'
import AllEpisodes from './AllEpisodes'
import styles from './episodes.module.css'
import EpisodesFilter from './EpisodesFilter'
import EpisodesGrid from './EpisodesGrid'

const EpisodesContainer = ({ episodes }: { episodes: Episode[] }) => {
  const [filter, setFilter] = useState<'' | TagEnum>(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const filter = urlParams.get("filter")
    if (filter) {
      return filter as TagEnum
    } else return ''
  })

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search)
  //   const filter = urlParams.get("filter")
  //   if (filter) setFilter(filter as TagEnum)
  // }, [])

  const handleFilter = (value: '' | TagEnum) => {
    setFilter(value)
  }

  const filteredEpisodes = useMemo(() => {
    if (!filter) return episodes
    const result = episodes.filter(episode => episode.tags.includes(filter as TagEnum))
    if (result.length === 0) {
      setFilter('')
      return episodes
    }
    return result
  }, [filter])

  return (
    <div className={styles.episodes_container}>
      <div className={styles.episodes_top}>
        <EpisodesFilter handleFilter={handleFilter} filter={filter} />
        <p>{filteredEpisodes.length} de {episodes.length} Programas</p>
      </div>
      {
        filteredEpisodes.length === episodes.length || filteredEpisodes.length === 0 ? (
          <AllEpisodes episodes={episodes} />
        ) : (
          <EpisodesGrid episodes={filteredEpisodes} />
        )
      }
    </div>
  )
}

export default EpisodesContainer