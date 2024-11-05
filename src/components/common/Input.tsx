import styles from "./common.module.css";

interface InputProps {
  name: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  className?: string;
}

const Input = ({
  name,
  placeholder,
  onChange,
  value,
  className,
}: InputProps) => {
  const style = className ? ` ${className}` : "";
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className={`${styles.input} ${style}`}
    />
  );
};

export default Input;
