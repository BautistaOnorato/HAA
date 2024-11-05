import { useState } from 'react'
import Input from '../common/Input'
import styles from './guests.module.css'
import Select from '../common/Select'
import { orderOptions, orderOptionsEnum } from '../../constants/select-options'
import type { Guest } from '../../constants/guests'
import GuestCard from './GuestCard'

interface GuestGridProps {
  guests: Guest[]
  searchValue: string
  orderValue: orderOptionsEnum
  handleOrderChange: (value: orderOptionsEnum) => void
  handleSearchChange: (value: string) => void
}

const GuestGrid = ({ guests, searchValue, orderValue, handleOrderChange, handleSearchChange }: GuestGridProps) => {
  const [page, setPage] = useState(1)
 
  return (
    <div className={styles.guests_container}>
      <div className={styles.guests_top}>
        <Input name="search" placeholder="Buscar..." value={searchValue} onChange={handleSearchChange} />
        <Select options={orderOptions} value={orderValue} onChange={handleOrderChange} className='guests_select' />
      </div>
      <div className={styles.guests}>
        {
          guests.slice((page - 1), page * 20).map((guest) => (
            <GuestCard guest={guest} key={guest.name} />
          ))
        }
      </div>
    </div>
  )
}

export default GuestGrid