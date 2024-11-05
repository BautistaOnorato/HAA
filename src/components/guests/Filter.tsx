import { useState } from 'react'
import styles from './guests.module.css'
import ChevronDownIcon from '../../icons/ChevronDownIcon'
import ChevronUpIcon from '../../icons/ChevronUpIcon'
import Checkbox from '../common/Checkbox'

interface FilterProps {
  name: string
  options: string[]
  value: string[]
  onChange: (value: string) => void
}

const Filter = ({ name, options, value, onChange }: FilterProps) => {
  const [open, setOpen] = useState(true)
  return (
    <div className={styles.filter}>
      <div className={styles.filter_title} onClick={() => setOpen(!open)}>
        <p>{name}</p>
        {open ? <ChevronUpIcon size={28} /> : <ChevronDownIcon size={28} />}
      </div>
      <div className={styles.filter_options}>
        {open && (
          options.map((option) => (
            <div key={option} className={styles.filter_option}>
              <Checkbox name={option} label={option} onChange={onChange} checked={value.includes(option)} />
            </div> 
          ))
        )}
      </div>
    </div>
  )
}

export default Filter