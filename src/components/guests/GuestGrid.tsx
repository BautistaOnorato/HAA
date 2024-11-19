import { useState } from "react";
import Input from "../common/Input";
import styles from "./guests.module.css";
import Select from "../common/Select";
import { orderOptions, orderOptionsEnum } from "../../constants/select-options";
import GuestCard from "./GuestCard";
import type { Guest } from "../../types/guest";
import ChevronFirstIcon from "../../icons/ChevronFirstIcon";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import ChevronRightIcon from "../../icons/ChevronRightIcon";
import ChevronLastIcon from "../../icons/ChevronLastIcon";

interface GuestGridProps {
  guests: Guest[];
  searchValue: string;
  orderValue: orderOptionsEnum;
  handleOrderChange: (value: orderOptionsEnum) => void;
  handleSearchChange: (value: string) => void;
}

const GuestGrid = ({
  guests,
  searchValue,
  orderValue,
  handleOrderChange,
  handleSearchChange,
}: GuestGridProps) => {
  const [page, setPage] = useState(0);

  return (
    <div className={styles.guests_container}>
      <div className={styles.guests_top} onClick={() => console.log(guests)}>
        <Input
          name="search"
          placeholder="Buscar..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <div className={styles.guests_pagination}>
          <button onClick={() => setPage(0)} disabled={page === 0}>
            <ChevronFirstIcon size={24} />
          </button>
          <button onClick={() => setPage(page - 30)} disabled={page === 0}>
            <ChevronLeftIcon size={24} />
          </button>
          <button
            onClick={() => setPage(page + 30)}
            disabled={page === guests.length - (guests.length % 30)}
          >
            <ChevronRightIcon size={24} />
          </button>
          <button
            onClick={() => setPage(guests.length - (guests.length % 30))}
            disabled={page === guests.length - (guests.length % 30)}
          >
            <ChevronLastIcon size={24} />
          </button>
        </div>
        <Select
          options={orderOptions}
          value={orderValue}
          onChange={handleOrderChange}
          className="guests_select"
        />
      </div>
      <div className={styles.guests}>
        {guests.slice(page, page + 30).map((guest) => (
          <GuestCard guest={guest} key={guest.name} />
        ))}
      </div>
    </div>
  );
};

export default GuestGrid;

/*
221 / 30 = 7 
*/
