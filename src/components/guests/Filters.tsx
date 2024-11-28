import styles from "./guests.module.css";
import Filter from "./Filter";
import { categoryOptions, roleOptions } from "../../constants/select-options";
import FilterOffIcon from "../../icons/FilterOffIcon";
import FilterIcon from "../../icons/FilterIcon";

interface FilterProps {
  categories: string[];
  roles: string[];
  onCategoryChange: (category: string) => void;
  onRoleChange: (role: string) => void;
  onReset: () => void;
  openFilters: boolean;
  handleOpenFilters: () => void;
  isVisible: boolean;
  menuRef: React.RefObject<HTMLDivElement> | null;
}

const Filters = ({
  categories,
  roles,
  onCategoryChange,
  onRoleChange,
  onReset,
  openFilters,
  handleOpenFilters,
  isVisible,
  menuRef
}: FilterProps) => {
  return (
    <div className={`${styles.filters_container} ${openFilters ? styles.open : styles.closed} ${isVisible ? styles.active : styles.inactive}`} ref={menuRef}>
      <div className={styles.filters_title}>
        <div
          className={`${styles.filter_icon}`}
          onClick={handleOpenFilters}
        >
          {openFilters ? <FilterOffIcon size={24} color={"#000000"} /> : <FilterIcon size={24} color={"#000000"} />}
        </div>
        <p>Filtros</p>
        <p className={styles.filters_reset} onClick={onReset}>
          Borrar filtros
        </p>
      </div>

      <div className={styles.filters}>
        <Filter
          name="Categorías"
          options={categoryOptions}
          value={categories}
          onChange={onCategoryChange}
        />
        <Filter
          name="Roles"
          options={roleOptions}
          value={roles}
          onChange={onRoleChange}
        />
      </div>
    </div>
  );
};

export default Filters;
