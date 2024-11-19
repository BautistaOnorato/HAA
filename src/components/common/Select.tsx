import { useState } from "react";
import styles from "./common.module.css";
import ChevronDownIcon from "../../icons/ChevronDownIcon";
import ChevronUpIcon from "../../icons/ChevronUpIcon";

interface SelectProps {
  onChange: (value: any) => void;
  value: string;
  className?: string;
  options: { value: string; label: string }[];
}

const Select = ({
  onChange,
  value,
  className,
  options,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const style = className ? ` ${className}` : "";

  const handleSelect = (value: string) => {
    onChange(value);
    setOpen(false);
  }

  return (
    <span className={`${styles.select} ${style}`}>
      <div className={styles.select_title} onClick={() => setOpen(!open)}>
       <span>Ordenar {value}</span>
      {open ? <ChevronUpIcon size={22} /> : <ChevronDownIcon size={22} />}
      </div>
      {open && (
        <div className={styles.select_options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.select_option} ${
                option.value === value ? styles.selected : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </span>
  );
};

export default Select;
