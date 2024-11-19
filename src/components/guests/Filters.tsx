import styles from './guests.module.css'
import Filter from './Filter'
import { categoryOptions, roleOptions } from '../../constants/select-options'

interface FilterProps {
  categories: string[]
  roles: string[]
  onCategoryChange: (category: string) => void
  onRoleChange: (role: string) => void
  onReset: () => void
}

const Filters = ({ categories, roles, onCategoryChange, onRoleChange, onReset }: FilterProps) => {
  return (
    <div className={styles.filters_container}>
      <div className={styles.filters_title}>
        <p>Filtros</p>
        <p className={styles.filters_reset} onClick={onReset}>Borrar filtros</p>
      </div>

      <div className={styles.filters}>
        <Filter name='Categorías' options={categoryOptions} value={categories} onChange={onCategoryChange} />
        <Filter name='Roles' options={roleOptions} value={roles} onChange={onRoleChange} />
      </div>
    </div>
  )
}

export default Filters