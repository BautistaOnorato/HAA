import Input from "../common/Input";
import styles from "./guests.module.css";
import Select from "../common/Select";
import { orderOptions, orderOptionsEnum } from "../../constants/select-options";
import GuestCard from "./GuestCard";
import type { Guest } from "../../types/guest";
import GuestsPagination from "./GuestsPagination";

interface GuestGridProps {
  guests: Guest[];
  searchValue: string;
  orderValue: orderOptionsEnum;
  handleOrderChange: (value: orderOptionsEnum) => void;
  handleSearchChange: (value: string) => void;
  openFilters: boolean;
  isLoading: boolean;
  page: number;
  handlePage: (value: number) => void;
}

const ITEMS = 20;

const GuestGrid = ({
  guests,
  searchValue,
  orderValue,
  handleOrderChange,
  handleSearchChange,
  openFilters,
  isLoading,
  page,
  handlePage
}: GuestGridProps) => {

  return (
    <div
      className={styles.guests_container}
    >
      <div className={styles.guests_top}>
        <Input
          name="search"
          placeholder="Buscar..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <Select
          options={orderOptions}
          value={orderValue}
          onChange={handleOrderChange}
          className={styles.guests_select}
        />
      </div>

      {isLoading ? (
        <GuestGirdSkeleton />
      ) : (
        <>
          <div
            className={`${styles.guests} ${
              openFilters ? styles.guests_open : ""
            }`}
          >
            {guests.slice(page, page + ITEMS).map((guest) => (
              <GuestCard guest={guest} key={guest.name} />
            ))}
          </div>

          <GuestsPagination
            page={page}
            handlePage={handlePage}
            items={ITEMS}
            arrLength={guests.length}
          />
        </>
      )}
    </div>
  );
};

const GuestGirdSkeleton = () => {
  return (
    <div className={styles.guests}>
      {Array(ITEMS)
        .fill("")
        .map((_, index) => (
          <div className={styles.guests_skeleton} key={index}></div>
        ))}
    </div>
  );
};

export default GuestGrid;
