import styles from './guests.module.css'
import type { Guest } from "../../constants/guests"
import { useState } from 'react'
import PlusIcon from '../../icons/PlusIcon'
import CrossIcon from '../../icons/CrossIcon'

interface GuestCardProps {
  guest: Guest
}

const GuestCard = ({ guest }: GuestCardProps) => {
  const [open, setOpen] = useState(false)
  const [fullInfo, setFullInfo] = useState<string | false>(false)

  const handleOpen = () => {
    if (!open) {
      setFullInfo(styles.full_guest_info)
      setOpen(true)
    } else {
      setFullInfo(styles.full_guest_closed)
      setOpen(false)
    }
  }

  return (
    <div style={{ backgroundImage: `url(${guest.image})` }} className={styles.guest_card}>
      <div className={styles.guest_more} onClick={handleOpen}>
        {open ? <CrossIcon size={28} /> : <PlusIcon size={28} />}
      </div>
      <div className={`${styles.guest_info} ${fullInfo ? fullInfo : ''}`}>
        <p className={styles.guest_name}>{guest.name}</p>
        <p className={styles.guest_description}>{guest.description}</p>
        <p className={styles.guest_appearance_title}>Apariciones</p>
        <div className={styles.guest_appearances_container}>
          {guest.appearances.map((appearance, i) => (
            <a key={i} className={styles.guest_appearance} href={appearance.href}>{i + 1}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GuestCard