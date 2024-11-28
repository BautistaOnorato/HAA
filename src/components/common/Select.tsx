import { useEffect, useState } from "react";
import styles from "./common.module.css";
import ChevronDownIcon from "../../icons/ChevronDownIcon";
import ChevronUpIcon from "../../icons/ChevronUpIcon";
import { useClickOutside } from "../../hooks/useClickOutside";

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
  const { showMenu, handleMenu, menuRef } = useClickOutside()
  const style = className ? ` ${className}` : "";

  const handleSelect = (value: string) => {
    onChange(value);
    handleMenu(false);
  }

  return (
    <span className={`${styles.select} ${style}`} ref={menuRef}>
      <div className={styles.select_title} onClick={() => handleMenu(!showMenu)}>
       <span>Ordenar {value}</span>
      {showMenu ? <ChevronUpIcon size={22} /> : <ChevronDownIcon size={22} />}
      </div>
      {showMenu && (
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
