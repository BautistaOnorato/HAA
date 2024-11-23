import ChevronFirstIcon from "../../icons/ChevronFirstIcon";
import ChevronLastIcon from "../../icons/ChevronLastIcon";
import styles from "./guests.module.css";

interface GuestsPaginationProps {
  page: number;
  handlePage: (value: number) => void;
  items: number;
  arrLength: number;
}

const GuestsPagination = ({ page, handlePage, items, arrLength }: GuestsPaginationProps) => {
  return (
    <div className={styles.guests_pagination}>
        <button onClick={() => handlePage(0)} disabled={page === 0}>
          <ChevronFirstIcon size={24} />
        </button>
        {page === arrLength - (arrLength % items) ||
          (arrLength <= items && (
            <button onClick={() => handlePage(page - items)}>
              {Math.ceil(page / items) - 1}
            </button>
          ))}
        {page >= items && (
          <button onClick={() => handlePage(page - items)}>
            {Math.ceil(page / items)}
          </button>
        )}
        <button className={styles.active}>{Math.ceil(page / items) + 1}</button>
        {arrLength > page + items && (
          <button onClick={() => handlePage(page + items)}>
            {Math.ceil(page / items) + 2}
          </button>
        )}
        {page === 0 ||
          (arrLength <= items && (
            <button onClick={() => handlePage(page + items * 2)}>
              {Math.ceil(page / items) + 3}
            </button>
          ))}
        <button
          onClick={() => handlePage(arrLength - (arrLength % items))}
          disabled={page === arrLength - (arrLength % items)}
        >
          <ChevronLastIcon size={24} />
        </button>
      </div>
  )
}

export default GuestsPagination